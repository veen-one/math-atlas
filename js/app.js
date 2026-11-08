/* ============================================================
   数学知识地图 · Math Atlas
   放射状 SVG 知识图谱 + 详情面板 + 全局搜索
   ============================================================ */
(function () {
  'use strict';

  const ATLAS = window.ATLAS || { subjects: {} };
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const $ = (s, r = document) => r.querySelector(s);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const state = {
    viewType: null,          // 'overview' | 'subject'
    subjectId: null,
    openTopicId: null,
    zoom: { x: 0, y: 0, k: 1 },
    nodeMap: new Map(),      // `${subjectId}/${topicId}` -> <g>
    branchFocus: null,
    searchIndex: [],
  };

  /* ---------------- 基础工具 ---------------- */

  function el(name, attrs, parent) {
    const node = document.createElementNS(SVG_NS, name);
    if (attrs) for (const k in attrs) node.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(node);
    return node;
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function hexToHsl(hex) {
    let h = hex.replace('#', '');
    if (h.length === 3) h = h.split('').map(c => c + c).join('');
    const r = parseInt(h.slice(0, 2), 16) / 255;
    const g = parseInt(h.slice(2, 4), 16) / 255;
    const b = parseInt(h.slice(4, 6), 16) / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let hue = 0, sat = 0;
    const l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      sat = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: hue = (g - b) / d + (g < b ? 6 : 0); break;
        case g: hue = (b - r) / d + 2; break;
        default: hue = (r - g) / d + 4;
      }
      hue *= 60;
    }
    return { h: hue, s: sat * 100, l: l * 100 };
  }

  function shiftColor(hex, dh, ds, dl) {
    const { h, s, l } = hexToHsl(hex);
    return `hsl(${(h + dh + 360) % 360} ${Math.max(18, Math.min(95, s + ds))}% ${Math.max(28, Math.min(82, l + dl))}%)`;
  }

  function rgba(hex, a) {
    let h = hex.replace('#', '');
    if (h.length === 3) h = h.split('').map(c => c + c).join('');
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    return `rgba(${r},${g},${b},${a})`;
  }

  /* 轻量文本排版：**加粗**、*强调*、$行内公式$、换行 */
  function inlineMarkup(text) {
    const raw = String(text == null ? '' : text);
    return raw.split(/(\$[^$]+\$)/g).map(part => {
      if (part.length > 2 && part.charAt(0) === '$' && part.charAt(part.length - 1) === '$') {
        return mathHtml(part.slice(1, -1));
      }
      let s = esc(part);
      s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
      s = s.replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>');
      return s.replace(/\n/g, '<br>');
    }).join('');
  }

  function mathHtml(tex) {
    if (window.katex) {
      try { return window.katex.renderToString(tex, { throwOnError: false, displayMode: false }); }
      catch (e) { /* fall through */ }
    }
    return `<code class="tex-fallback">${esc(tex)}</code>`;
  }

  const katexWaiters = [];
  let katexPolling = false;
  function waitForKatex(cb) {
    if (window.katex) { cb(); return; }
    katexWaiters.push(cb);
    if (katexPolling) return;
    katexPolling = true;
    const t0 = Date.now();
    const timer = setInterval(() => {
      if (window.katex) {
        clearInterval(timer);
        katexPolling = false;
        katexWaiters.splice(0).forEach(fn => fn());
      } else if (Date.now() - t0 > 12000) {
        clearInterval(timer);
        katexPolling = false;
      }
    }, 150);
  }

  function asArray(v) {
    if (v == null) return [];
    return Array.isArray(v) ? v : [v];
  }

  /* ---------------- 学习进度与收藏 ---------------- */

  const progressStore = { favorites: new Set(), read: new Set() };
  try {
    JSON.parse(localStorage.getItem('math-atlas-favorites') || '[]').forEach(k => progressStore.favorites.add(k));
    JSON.parse(localStorage.getItem('math-atlas-read') || '[]').forEach(k => progressStore.read.add(k));
  } catch (err) { /* ignore */ }

  function topicKey(sid, tid) { return sid + '/' + tid; }

  function persistProgress() {
    try {
      localStorage.setItem('math-atlas-favorites', JSON.stringify(Array.from(progressStore.favorites)));
      localStorage.setItem('math-atlas-read', JSON.stringify(Array.from(progressStore.read)));
    } catch (err) { /* ignore */ }
  }

  function updateProgressBadge() {
    const badge = $('#progressBadge');
    if (!badge) return;
    badge.textContent = '已读 ' + progressStore.read.size + ' / ' + state.searchIndex.length;
  }

  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (err) { /* ignore */ }
    document.body.removeChild(ta);
  }

  function copyText(text, done) {
    const finish = () => { if (done) done(); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(finish, () => { fallbackCopy(text); finish(); });
    } else {
      fallbackCopy(text);
      finish();
    }
  }

  /* ---------------- 数据索引 ---------------- */

  function buildSearchIndex() {
    const list = [];
    for (const sid in ATLAS.subjects) {
      const s = ATLAS.subjects[sid];
      (s.branches || []).forEach(b => {
        (b.topics || []).forEach(t => {
          list.push({ subject: s, branch: b, topic: t });
        });
      });
    }
    state.searchIndex = list;
    updateProgressBadge();
  }

  function findTopic(subjectId, topicId) {
    const s = ATLAS.subjects[subjectId];
    if (!s) return null;
    for (const b of s.branches || []) {
      for (const t of b.topics || []) {
        if (t.id === topicId) return { subject: s, branch: b, topic: t };
      }
    }
    return null;
  }

  function flatTopics(subjectId) {
    const s = ATLAS.subjects[subjectId];
    if (!s) return [];
    const out = [];
    (s.branches || []).forEach(b => (b.topics || []).forEach(t => out.push({ branch: b, topic: t })));
    return out;
  }

  /* ---------------- 路由 ---------------- */

  function parseHash() {
    const raw = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
    return raw.split('/').filter(Boolean);
  }

  function navigate(hash) {
    if (location.hash === hash) route();
    else location.hash = hash;
  }

  function route() {
    const parts = parseHash();
    if (!parts.length || !ATLAS.subjects[parts[0]]) {
      state.viewType = 'overview';
      state.subjectId = null;
      renderSphereOverview();
      closePanelDOM();
      updateCrumbs([]);
      return;
    }
    const sid = parts[0];
    const subject = ATLAS.subjects[sid];
    if (state.viewType !== 'subject' || state.subjectId !== sid) {
      state.viewType = 'subject';
      state.subjectId = sid;
      state.zoom = { x: 0, y: 0, k: 1 };
      renderSubject(subject);
    }
    updateCrumbs(parts);
    if (parts[1]) {
      const found = findTopic(sid, parts[1]);
      if (found) openPanelDOM(found);
      else closePanelDOM();
    } else {
      closePanelDOM();
    }
  }

  function updateCrumbs(parts) {
    const crumbs = $('#crumbs');
    if (!parts.length) {
      crumbs.innerHTML = '<span class="current">全景</span>';
      return;
    }
    const s = ATLAS.subjects[parts[0]];
    let html = `<a href="#/">全景</a><span class="sep">/</span>`;
    if (parts[1]) {
      const found = findTopic(parts[0], parts[1]);
      html += `<a href="#/${parts[0]}">${esc(s.name)}</a><span class="sep">/</span>`;
      html += `<span class="current">${esc(found ? found.topic.name : parts[1])}</span>`;
    } else {
      html += `<span class="current">${esc(s.name)}</span>`;
    }
    crumbs.innerHTML = html;
  }

  /* ---------------- 放射状布局 ---------------- */

  function layoutRadial(spec) {
    const branchRx = spec.branchRx || 340;
    const branchRy = spec.branchRy || 248;
    const leafRx = spec.leafRx || 655;
    const leafRy = spec.leafRy || 440;
    const branches = spec.branches || [];
    const n = branches.length;
    const startAngle = spec.startAngle != null ? spec.startAngle : -90;
    const step = 360 / n;

    const branchNodes = [];
    const leafNodes = [];

    branches.forEach((b, i) => {
      const angle = b.angle != null ? b.angle : startAngle - i * step;
      const rad = angle * Math.PI / 180;
      const bx = Math.cos(rad) * branchRx;
      const by = -Math.sin(rad) * branchRy;
      branchNodes.push({ branch: b, index: i, angle, rad, x: bx, y: by });

      const topics = b.topics || [];
      const m = topics.length;
      const spread = m > 1 ? Math.min(50, 10 + m * 8) : 0;
      topics.forEach((t, j) => {
        const frac = m === 1 ? 0.5 : j / (m - 1);
        const off = (frac - 0.5) * spread;
        const a = angle + off;
        const r = a * Math.PI / 180;
        const ring = j % 2 === 0 ? 1 : 1.12;
        leafNodes.push({
          topic: t, branch: b, branchIndex: i, index: j,
          angle: a, rad: r,
          branchX: bx, branchY: by,
          x: Math.cos(r) * leafRx * ring,
          y: -Math.sin(r) * leafRy * ring,
        });
      });
    });

    return { branchNodes, leafNodes };
  }

  function textPlacement(rad) {
    const cos = Math.cos(rad), sin = Math.sin(rad);
    if (cos > 0.36) return { anchor: 'start', dx: 12, nameDy: 0, subDy: 15, side: 'right' };
    if (cos < -0.36) return { anchor: 'end', dx: -12, nameDy: 0, subDy: 15, side: 'left' };
    if (sin >= 0) return { anchor: 'middle', dx: 0, nameDy: -20, subDy: -6, side: 'top' };
    return { anchor: 'middle', dx: 0, nameDy: 17, subDy: 33, side: 'bottom' };
  }

  function edgeGeom(x0, y0, x1, y1, bendDir) {
    const mx = (x0 + x1) / 2, my = (y0 + y1) / 2;
    const dx = x1 - x0, dy = y1 - y0;
    const len = Math.hypot(dx, dy) || 1;
    const px = -dy / len, py = dx / len;
    const bend = Math.min(46, len * 0.16) * bendDir;
    return `M ${x0} ${y0} Q ${mx + px * bend} ${my + py * bend} ${x1} ${y1}`;
  }

  /* ---------------- 渲染：地图 ---------------- */

  const VB_W = 1980, VB_H = 1240;

  function setupSvg(branches) {
    const svg = $('#map');
    svg.innerHTML = '';
    svg.setAttribute('viewBox', `${-VB_W / 2} ${-VB_H / 2} ${VB_W} ${VB_H}`);
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

    const defs = el('defs', {}, svg);

    const world = el('g', { id: 'world' }, svg);

    // 中心装饰环
    const deco = el('g', { class: 'center-deco', opacity: '0.55' }, world);
    el('circle', { r: 132, fill: 'none', stroke: 'rgba(217,180,108,0.10)', 'stroke-width': 1, 'stroke-dasharray': '2 7' }, deco);
    el('circle', { r: 168, fill: 'none', stroke: 'rgba(217,180,108,0.06)', 'stroke-width': 1, 'stroke-dasharray': '1 9' }, deco);

    return { svg, defs, world };
  }

  /* ---------------- 球形全景（Canvas 2D 手写投影） ---------------- */

  const sphere = {
    canvas: null, ctx: null,
    nodes: [], edges: [], subjectDefs: [], subjectLabels: [], nodeLabels: [],
    neighbors: [], selected: -1, targetYaw: null, targetPitch: null,
    autoSpin: true, favOnly: false, labelWidths: new Map(),
    yaw: 0.55, pitch: -0.3, zoom: 1,
    hover: -1, active: false, raf: null, last: 0,
    dragging: false, moved: false, lastX: 0, lastY: 0, startX: 0, startY: 0,
    cooldownUntil: 0, projected: [],
  };

  function buildSphereData() {
    if (sphere.nodes.length) return;
    const nodes = [];
    const index = new Map();
    const dirs = [
      [1, 1, 1], [1, 1, -1], [1, -1, 1], [1, -1, -1],
      [-1, 1, 1], [-1, 1, -1], [-1, -1, 1], [-1, -1, -1],
    ];
    const norm = v => {
      const l = Math.hypot(v[0], v[1], v[2]) || 1;
      return [v[0] / l, v[1] / l, v[2] / l];
    };
    const cross = (a, b) => [
      a[1] * b[2] - a[2] * b[1],
      a[2] * b[0] - a[0] * b[2],
      a[0] * b[1] - a[1] * b[0],
    ];

    let si = 0;
    for (const sid in ATLAS.subjects) {
      const subject = ATLAS.subjects[sid];
      const dir = norm(dirs[si % dirs.length]);
      let u = norm(cross(dir, [0, 1, 0]));
      if (Math.hypot(u[0], u[1], u[2]) < 0.2) u = norm(cross(dir, [1, 0, 0]));
      const v = cross(dir, u);
      sphere.subjectDefs.push({ id: sid, name: subject.name, color: subject.color, dir });

      const list = [];
      (subject.branches || []).forEach(b => (b.topics || []).forEach(t => list.push({ b, t })));
      const n = Math.max(1, list.length);
      const cosMax = Math.cos(0.5);
      list.forEach(({ b, t }, i) => {
        const cosTheta = 1 - ((i + 0.5) / n) * (1 - cosMax);
        const theta = Math.acos(Math.max(-1, Math.min(1, cosTheta)));
        const phi = i * 2.399963229728653;
        const st = Math.sin(theta), ct = Math.cos(theta);
        const cp = Math.cos(phi), sp = Math.sin(phi);
        const p = norm([
          dir[0] * ct + u[0] * st * cp + v[0] * st * sp,
          dir[1] * ct + u[1] * st * cp + v[1] * st * sp,
          dir[2] * ct + u[2] * st * cp + v[2] * st * sp,
        ]);
        index.set(sid + '/' + t.id, nodes.length);
        nodes.push({
          x: p[0], y: p[1], z: p[2],
          sid, tid: t.id, topic: t, branch: b, subject,
          color: b.color || subject.color || '#8ab4f8',
        });
      });
      si++;
    }

    const edges = [];
    const seen = new Set();
    sphere.neighbors = nodes.map(() => new Set());
    nodes.forEach((node, i) => {
      (node.topic.related || []).forEach(ref => {
        const parts = String(ref).split('/');
        const rs = parts.length > 1 ? parts[0] : node.sid;
        const rt = parts.length > 1 ? parts[1] : parts[0];
        const j = index.get(rs + '/' + rt);
        if (j == null || j === i) return;
        const a = Math.min(i, j), b = Math.max(i, j);
        const key = a + ':' + b;
        if (seen.has(key)) return;
        seen.add(key);
        edges.push([a, b]);
        sphere.neighbors[a].add(b);
        sphere.neighbors[b].add(a);
      });
    });

    sphere.nodes = nodes;
    sphere.edges = edges;
  }

  function sphereProject(p, w, h) {
    const cy = Math.cos(sphere.yaw), sy = Math.sin(sphere.yaw);
    let x = p.x * cy - p.z * sy;
    let z = p.x * sy + p.z * cy;
    const cp = Math.cos(sphere.pitch), sp = Math.sin(sphere.pitch);
    const y = p.y * cp - z * sp;
    z = p.y * sp + z * cp;
    const R = Math.min(w, h) * 0.4 * sphere.zoom;
    const persp = 1 + z * 0.16;
    return { x: w / 2 + x * R * persp, y: h / 2 + y * R * persp, z, s: persp };
  }

  function roundRectPath(ctx, x, y, w, h, r) {
    const rr = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + rr, y);
    ctx.arcTo(x + w, y, x + w, y + h, rr);
    ctx.arcTo(x + w, y + h, x, y + h, rr);
    ctx.arcTo(x, y + h, x, y, rr);
    ctx.arcTo(x, y, x + w, y, rr);
    ctx.closePath();
  }

  function drawSphere() {
    const canvas = sphere.canvas;
    if (!canvas || !sphere.ctx) return;
    const ctx = sphere.ctx;
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth || 1;
    const h = canvas.clientHeight || 1;
    if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    // 球体光晕
    const R = Math.min(w, h) * 0.4 * sphere.zoom;
    const cx = w / 2, cy = h / 2;
    const glow = ctx.createRadialGradient(cx, cy - R * 0.15, R * 0.1, cx, cy, R * 1.25);
    glow.addColorStop(0, 'rgba(80,120,190,0.10)');
    glow.addColorStop(0.55, 'rgba(50,80,140,0.05)');
    glow.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(cx, cy, R * 1.25, 0, Math.PI * 2);
    ctx.fill();

    // 经纬线
    ctx.strokeStyle = 'rgba(120,150,200,0.06)';
    ctx.lineWidth = 1;
    const drawGraticule = (pts) => {
      ctx.beginPath();
      for (let q = 0; q < pts.length; q++) {
        const pp = sphereProject(pts[q], w, h);
        if (q === 0) ctx.moveTo(pp.x, pp.y);
        else ctx.lineTo(pp.x, pp.y);
      }
      ctx.stroke();
    };
    for (let lat = -60; lat <= 60; lat += 30) {
      const la = lat * Math.PI / 180;
      const pts = [];
      for (let lon = 0; lon <= 360; lon += 12) {
        const lo = lon * Math.PI / 180;
        pts.push({ x: Math.cos(la) * Math.cos(lo), y: Math.sin(la), z: Math.cos(la) * Math.sin(lo) });
      }
      drawGraticule(pts);
    }
    for (let lon = 0; lon < 180; lon += 30) {
      const lo = lon * Math.PI / 180;
      const pts = [];
      for (let lat = -90; lat <= 90; lat += 9) {
        const la = lat * Math.PI / 180;
        pts.push({ x: Math.cos(la) * Math.cos(lo), y: Math.sin(la), z: Math.cos(la) * Math.sin(lo) });
      }
      drawGraticule(pts);
    }

    const proj = new Array(sphere.nodes.length);
    for (let i = 0; i < sphere.nodes.length; i++) {
      proj[i] = sphereProject(sphere.nodes[i], w, h);
    }
    sphere.projected = proj;

    ctx.lineWidth = 1;
    const hasSelection = sphere.selected >= 0;
    for (let k = 0; k < sphere.edges.length; k++) {
      const i = sphere.edges[k][0], j = sphere.edges[k][1];
      const a = proj[i], b = proj[j];
      const zAvg = (a.z + b.z) / 2;
      const connected = hasSelection && (i === sphere.selected || j === sphere.selected);
      if (zAvg < -0.4 && !connected) continue;
      const active = sphere.hover === i || sphere.hover === j;
      let alpha = Math.max(0.025, (zAvg + 0.4) * 0.13);
      if (hasSelection) {
        if (connected) alpha = Math.max(alpha, 0.72);
        else alpha *= 0.15;
      } else if (active) {
        alpha = 0.6;
      }
      if (sphere.favOnly) {
        const fi = progressStore.favorites.has(topicKey(sphere.nodes[i].sid, sphere.nodes[i].tid));
        const fj = progressStore.favorites.has(topicKey(sphere.nodes[j].sid, sphere.nodes[j].tid));
        if (!fi && !fj) alpha *= 0.1;
      }
      const gold = connected || (!hasSelection && active);
      ctx.strokeStyle = gold
        ? 'rgba(242,215,154,' + alpha + ')'
        : 'rgba(150,172,215,' + alpha + ')';
      ctx.lineWidth = connected ? 1.5 : 1;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }
    ctx.lineWidth = 1;

    const order = proj.map((_, i) => i).sort((i, j) => proj[i].z - proj[j].z);

    // 标签布局：优先选中/悬停/邻居，其次近处；尝试左右上下避让
    ctx.font = '400 10px "PingFang SC", "Hiragino Sans GB", sans-serif';
    const labelRects = [];
    const labelPlan = new Array(proj.length).fill(null);
    const scoreOf = (i) => {
      if (sphere.selected === i || sphere.hover === i) return 2;
      if (hasSelection && sphere.neighbors[sphere.selected] && sphere.neighbors[sphere.selected].has(i)) return 1;
      return 0;
    };
    const priority = order.slice().sort((a, b) => {
      const sa = scoreOf(a), sb = scoreOf(b);
      if (sa !== sb) return sb - sa;
      return proj[b].z - proj[a].z;
    });
    const collides = (r) => {
      for (let q = 0; q < labelRects.length; q++) {
        const s = labelRects[q];
        if (!(r.x1 < s.x0 || r.x0 > s.x1 || r.y1 < s.y0 || r.y0 > s.y1)) return true;
      }
      return false;
    };
    for (let k = 0; k < priority.length; k++) {
      const i = priority[k];
      const p = proj[i];
      if (p.z < 0.02) continue;
      if (sphere.favOnly) {
        const fav = progressStore.favorites.has(topicKey(sphere.nodes[i].sid, sphere.nodes[i].tid));
        if (!fav && scoreOf(i) === 0) continue;
      }
      const label = sphere.nodes[i].topic.name;
      let tw = sphere.labelWidths.get(label);
      if (tw == null) {
        tw = ctx.measureText(label).width;
        sphere.labelWidths.set(label, tw);
      }
      const cands = [
        { align: 'left', dx: 8, dy: 0 },
        { align: 'right', dx: -8, dy: 0 },
        { align: 'left', dx: 8, dy: -12 },
        { align: 'left', dx: 8, dy: 12 },
        { align: 'right', dx: -8, dy: -12 },
        { align: 'right', dx: -8, dy: 12 },
      ];
      const isFocus = scoreOf(i) > 0;
      for (let c = 0; c < cands.length; c++) {
        const cd = cands[c];
        const tx = p.x + cd.dx;
        const ty = p.y + cd.dy;
        const x0 = cd.align === 'left' ? tx : tx - tw;
        const rect = { x0: x0 - 2, y0: ty - 7, x1: x0 + tw + 2, y1: ty + 7 };
        if (!collides(rect) || isFocus) {
          labelRects.push(rect);
          labelPlan[i] = { x: tx, y: ty, align: cd.align, rect };
          break;
        }
      }
    }

    sphere.nodeLabels = [];
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(0,0,0,0.85)';
    ctx.shadowBlur = 3;
    for (let k = 0; k < order.length; k++) {
      const i = order[k];
      const p = proj[i];
      const n = sphere.nodes[i];
      const depth = (p.z + 1) / 2;
      const isSel = sphere.selected === i;
      const isNeighbor = hasSelection && sphere.neighbors[sphere.selected]
        && sphere.neighbors[sphere.selected].has(i);
      const isFavNode = progressStore.favorites.has(topicKey(n.sid, n.tid));
      let r = (1.5 + 2.4 * depth) * Math.min(1.7, sphere.zoom * 0.95);
      if (isSel) r += 1.5;
      else if (isNeighbor) r += 0.7;
      let alpha = 0.25 + 0.75 * depth;
      if (hasSelection && !isSel && !isNeighbor) alpha *= 0.25;
      if (sphere.favOnly && !isFavNode) alpha *= 0.12;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = n.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fill();
      if (isFavNode) {
        ctx.globalAlpha = 0.45 + 0.4 * depth;
        ctx.strokeStyle = 'rgba(242,215,154,0.85)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r + 3, 0, Math.PI * 2);
        ctx.stroke();
      }
      if (isSel) {
        ctx.globalAlpha = 1;
        ctx.strokeStyle = '#f2d79a';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r + 5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.lineWidth = 1;
      } else if (sphere.hover === i) {
        ctx.globalAlpha = 0.95;
        ctx.strokeStyle = '#f2d79a';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r + 5, 0, Math.PI * 2);
        ctx.stroke();
        ctx.lineWidth = 1;
      }
      const lp = labelPlan[i];
      if (lp) {
        ctx.font = '400 10px "PingFang SC", "Hiragino Sans GB", sans-serif';
        ctx.textAlign = lp.align;
        let lalpha = 0.35 + 0.65 * depth;
        if (hasSelection && !isSel && !isNeighbor) lalpha *= 0.25;
        ctx.globalAlpha = lalpha;
        ctx.fillStyle = isSel ? '#fff3d6' : (isNeighbor ? '#f2d79a' : (isFavNode ? '#e8cf9a' : 'rgba(214,223,238,0.95)'));
        ctx.fillText(n.topic.name, lp.x, lp.y);
        sphere.nodeLabels.push({ x0: lp.rect.x0, y0: lp.rect.y0, x1: lp.rect.x1, y1: lp.rect.y1, index: i });
      }
    }
    ctx.shadowBlur = 0;
    ctx.globalAlpha = 1;

    sphere.subjectLabels = [];
    for (let k = 0; k < sphere.subjectDefs.length; k++) {
      const sd = sphere.subjectDefs[k];
      const p = sphereProject({
        x: sd.dir[0] * 1.04, y: sd.dir[1] * 1.04, z: sd.dir[2] * 1.04,
      }, w, h);
      if (p.z < -0.3) continue;
      ctx.globalAlpha = 0.3 + 0.7 * ((p.z + 1) / 2);
      ctx.font = '600 13px "Songti SC", "Noto Serif SC", serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = sd.color || '#d9b46c';
      ctx.fillText(sd.name, p.x, p.y);
      sphere.subjectLabels.push({ x: p.x, y: p.y, id: sd.id });
    }
    ctx.globalAlpha = 1;

    if (sphere.hover >= 0) {
      const p = proj[sphere.hover];
      const n = sphere.nodes[sphere.hover];
      const name = n.topic.name;
      const brief = n.topic.brief || '';
      ctx.font = '600 15px "PingFang SC", sans-serif';
      const tw = ctx.measureText(name).width;
      ctx.font = '11px "PingFang SC", sans-serif';
      const bw = brief ? ctx.measureText(brief).width : 0;
      const boxW = Math.max(tw, bw) + 26;
      const boxH = brief ? 52 : 34;
      let bx = p.x + 16;
      let by = p.y - boxH / 2;
      if (bx + boxW > w - 8) bx = p.x - boxW - 16;
      if (by < 8) by = 8;
      if (by + boxH > h - 8) by = h - boxH - 8;
      ctx.globalAlpha = 1;
      ctx.fillStyle = 'rgba(10,16,30,0.94)';
      ctx.strokeStyle = 'rgba(217,180,108,0.35)';
      ctx.lineWidth = 1;
      roundRectPath(ctx, bx, by, boxW, boxH, 8);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#f2d79a';
      ctx.font = '600 15px "PingFang SC", sans-serif';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      ctx.fillText(name, bx + 13, by + 10);
      if (brief) {
        ctx.fillStyle = '#8b98b3';
        ctx.font = '11px "PingFang SC", sans-serif';
        ctx.fillText(brief, bx + 13, by + 31);
      }
    }
  }

  function spherePointerPos(e) {
    const rect = sphere.canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  function sphereHitTest(e, radius) {
    const pos = spherePointerPos(e);
    let best = -1;
    let bestD = radius || 16;
    for (let i = 0; i < sphere.projected.length; i++) {
      const p = sphere.projected[i];
      if (p.z < -0.45) continue;
      const d = Math.hypot(p.x - pos.x, p.y - pos.y);
      if (d < bestD) { bestD = d; best = i; }
    }
    return best;
  }

  function sphereLabelHit(e) {
    const pos = spherePointerPos(e);
    for (let i = 0; i < sphere.subjectLabels.length; i++) {
      const lab = sphere.subjectLabels[i];
      if (Math.hypot(lab.x - pos.x, lab.y - pos.y) < 42) return lab.id;
    }
    return null;
  }

  function sphereNodeLabelHit(e) {
    const pos = spherePointerPos(e);
    for (let i = sphere.nodeLabels.length - 1; i >= 0; i--) {
      const lab = sphere.nodeLabels[i];
      if (pos.x >= lab.x0 && pos.x <= lab.x1 && pos.y >= lab.y0 && pos.y <= lab.y1) {
        return lab.index;
      }
    }
    return -1;
  }

  function sphereLoop(t) {
    if (!sphere.active) return;
    const dt = sphere.last ? Math.min(0.06, (t - sphere.last) / 1000) : 0;
    sphere.last = t;
    if (sphere.targetYaw != null) {
      let dy = sphere.targetYaw - sphere.yaw;
      dy = Math.atan2(Math.sin(dy), Math.cos(dy));
      const dp = (sphere.targetPitch == null ? 0 : sphere.targetPitch) - sphere.pitch;
      sphere.yaw += dy * 0.1;
      sphere.pitch += dp * 0.1;
      if (Math.abs(dy) < 0.003 && Math.abs(dp) < 0.003) {
        sphere.yaw = sphere.targetYaw;
        if (sphere.targetPitch != null) sphere.pitch = sphere.targetPitch;
        sphere.targetYaw = null;
        sphere.targetPitch = null;
      }
    } else if (sphere.autoSpin && !sphere.dragging && sphere.selected < 0 && performance.now() > sphere.cooldownUntil) {
      sphere.yaw += dt * 0.1;
    }
    drawSphere();
    sphere.raf = requestAnimationFrame(sphereLoop);
  }

  function startSphereView() {
    buildSphereData();
    const canvas = sphere.canvas;
    if (!canvas) return;
    sphere.active = true;
    canvas.style.display = 'block';
    $('#map').style.display = 'none';
    $('#sidebar').classList.remove('visible');
    const controls = $('#sphereControls');
    if (controls) controls.classList.add('visible');
    const hint = $('#mapHint');
    if (hint && hint.firstElementChild) {
      hint.firstElementChild.textContent = sphere.nodes.length + ' 个知识点 · ' + sphere.subjectDefs.length + ' 个学科 · 拖拽旋转 · 点击查看详情';
      hint.classList.remove('hidden');
    }
    if (!sphere.raf) {
      sphere.last = 0;
      sphere.raf = requestAnimationFrame(sphereLoop);
    }
  }

  function stopSphereView() {
    sphere.active = false;
    if (sphere.raf) {
      cancelAnimationFrame(sphere.raf);
      sphere.raf = null;
    }
    if (sphere.canvas) sphere.canvas.style.display = 'none';
    $('#map').style.display = '';
    const controls = $('#sphereControls');
    if (controls) controls.classList.remove('visible');
    const hint = $('#mapHint');
    if (hint && hint.firstElementChild) {
      hint.firstElementChild.textContent = '拖拽平移 · 滚轮缩放 · 点击节点阅读详解';
    }
  }

  function renderSphereOverview() {
    state.openTopicId = null;
    weakMapReset();
    startSphereView();
  }

  function sphereSelectTopic(sid, tid) {
    if (!sphere.active) return;
    for (let i = 0; i < sphere.nodes.length; i++) {
      const n = sphere.nodes[i];
      if (n.sid === sid && n.tid === tid) {
        sphere.selected = i;
        sphere.cooldownUntil = performance.now() + 1e9;
        const yawT = Math.atan2(n.x, n.z);
        const z1 = Math.sqrt(n.x * n.x + n.z * n.z);
        const pitchT = Math.atan2(n.y, z1);
        sphere.targetYaw = yawT;
        sphere.targetPitch = Math.max(-1.2, Math.min(1.2, pitchT));
        return;
      }
    }
  }

  function initSphere() {
    sphere.canvas = $('#sphereCanvas');
    if (!sphere.canvas) return;
    sphere.ctx = sphere.canvas.getContext('2d');
    buildSphereData();

    const canvas = sphere.canvas;
    const pointers = new Map();
    let pinchDist = 0;
    const pointerDistance = () => {
      const pts = Array.from(pointers.values());
      if (pts.length < 2) return 0;
      return Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
    };

    canvas.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 1) {
        sphere.dragging = true;
        sphere.moved = false;
        sphere.startX = e.clientX;
        sphere.startY = e.clientY;
        sphere.targetYaw = null;
        sphere.targetPitch = null;
        sphere.lastX = e.clientX;
        sphere.lastY = e.clientY;
        sphere.cooldownUntil = performance.now() + 1e9;
        try { canvas.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
        canvas.style.cursor = 'grabbing';
      } else if (pointers.size === 2) {
        sphere.dragging = false;
        pinchDist = pointerDistance();
      }
    });

    canvas.addEventListener('pointermove', (e) => {
      if (pointers.has(e.pointerId)) pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size >= 2) {
        const d = pointerDistance();
        if (pinchDist > 0 && d > 0) {
          sphere.zoom = Math.max(0.55, Math.min(2.6, sphere.zoom * d / pinchDist));
        }
        pinchDist = d;
        return;
      }
      if (sphere.dragging) {
        const dx = e.clientX - sphere.lastX;
        const dy = e.clientY - sphere.lastY;
        if (Math.abs(dx) + Math.abs(dy) > 2) sphere.moved = true;
        sphere.yaw += dx * 0.006;
        sphere.pitch = Math.max(-1.25, Math.min(1.25, sphere.pitch + dy * 0.006));
        sphere.lastX = e.clientX;
        sphere.lastY = e.clientY;
      } else {
        let hovered = sphereNodeLabelHit(e);
        if (hovered < 0) hovered = sphereHitTest(e, 15);
        sphere.hover = hovered;
        canvas.style.cursor = sphere.hover >= 0 ? 'pointer' : 'grab';
      }
    });

    canvas.addEventListener('pointerup', (e) => {
      pointers.delete(e.pointerId);
      if (pointers.size < 2) pinchDist = 0;
      e.stopPropagation();
      const wasDragging = sphere.dragging;
      const clickDist = Math.hypot(e.clientX - sphere.startX, e.clientY - sphere.startY);
      sphere.dragging = false;
      canvas.style.cursor = 'grab';
      sphere.cooldownUntil = performance.now() + 2500;
      if (wasDragging && clickDist < 7) {
        const labelId = sphereLabelHit(e);
        if (labelId) { navigate('#/' + labelId); return; }
        let idx = sphereNodeLabelHit(e);
        if (idx < 0) idx = sphereHitTest(e, 18);
        if (idx >= 0) {
          sphere.selected = idx;
          sphere.cooldownUntil = performance.now() + 1e9;
          const n = sphere.nodes[idx];
          openPanelDOM({ subject: n.subject, branch: n.branch, topic: n.topic });
        } else {
          sphere.selected = -1;
          sphere.cooldownUntil = performance.now() + 2000;
          closePanelDOM();
        }
      }
    });

    canvas.addEventListener('pointercancel', (e) => {
      pointers.delete(e.pointerId);
      if (pointers.size < 2) pinchDist = 0;
      sphere.dragging = false;
      canvas.style.cursor = 'grab';
      sphere.cooldownUntil = performance.now() + 2500;
    });

    canvas.addEventListener('pointerleave', () => {
      sphere.hover = -1;
    });

    canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const f = Math.exp(-e.deltaY * 0.0012);
      sphere.zoom = Math.max(0.55, Math.min(2.6, sphere.zoom * f));
    }, { passive: false });

    $('#spinToggle').addEventListener('click', () => {
      sphere.autoSpin = !sphere.autoSpin;
      const btn = $('#spinToggle');
      btn.textContent = sphere.autoSpin ? '暂停自转' : '继续自转';
      btn.classList.toggle('active', !sphere.autoSpin);
    });
    $('#favFilter').addEventListener('click', () => {
      if (!sphere.favOnly && progressStore.favorites.size === 0) {
        const btn = $('#favFilter');
        btn.textContent = '暂无收藏';
        setTimeout(() => { btn.textContent = '只看收藏'; }, 1200);
        return;
      }
      sphere.favOnly = !sphere.favOnly;
      $('#favFilter').classList.toggle('active', sphere.favOnly);
    });
    $('#sphereReset').addEventListener('click', () => {
      sphere.yaw = 0.55;
      sphere.pitch = -0.3;
      sphere.zoom = 1;
      sphere.targetYaw = null;
      sphere.targetPitch = null;
    });
  }

  function renderOverview() {
    state.openTopicId = null;
    weakMapReset();
    $('#sidebar').classList.remove('visible');
    const ov = ATLAS.overview;
    if (!ov) { buildSearchIndex(); return; }

    const branches = ov.branches.map(b => ({
      ...b,
      color: b.color,
      // 总图叶子只带名称和指向的 topic id
      topics: (b.topics || []).map(t => ({ id: t.id, name: t.name, brief: t.brief })),
    }));

    const { svg, defs, world } = setupSvg(branches);
    const spec = layoutRadial({
      branches,
      startAngle: ov.startAngle != null ? ov.startAngle : 135,
      branchRx: 392, branchRy: 268,
      leafRx: 700, leafRy: 468,
    });

    // 边
    const edgeLayer = el('g', { class: 'edges' }, world);
    spec.branchNodes.forEach((bn) => {
      const color = bn.branch.color || '#8ab4f8';
      const gradId = `ge-${bn.index}`;
      const g = el('linearGradient', {
        id: gradId, gradientUnits: 'userSpaceOnUse',
        x1: 0, y1: 0, x2: bn.x, y2: bn.y,
      }, defs);
      el('stop', { offset: '0%', 'stop-color': color, 'stop-opacity': '0.02' }, g);
      el('stop', { offset: '55%', 'stop-color': color, 'stop-opacity': '0.24' }, g);
      el('stop', { offset: '100%', 'stop-color': color, 'stop-opacity': '0.55' }, g);

      el('path', {
        d: edgeGeom(0, 0, bn.x, bn.y, bn.index % 2 ? 1 : -1),
        class: 'map-edge',
        stroke: `url(#${gradId})`,
        'stroke-width': 1.3,
        'data-branch': bn.index,
      }, edgeLayer);
    });

    // 学科 → 概念边
    spec.leafNodes.forEach((ln) => {
      const color = ln.branch.color || '#8ab4f8';
      const gradId = `gl-${ln.branchIndex}-${ln.index}`;
      if (!defs.querySelector(`#${gradId}`)) {
        const g = el('linearGradient', {
          id: gradId, gradientUnits: 'userSpaceOnUse',
          x1: ln.branchX, y1: ln.branchY, x2: ln.x, y2: ln.y,
        }, defs);
        el('stop', { offset: '0%', 'stop-color': color, 'stop-opacity': '0.34' }, g);
        el('stop', { offset: '100%', 'stop-color': color, 'stop-opacity': '0.07' }, g);
      }
      el('path', {
        d: edgeGeom(ln.branchX, ln.branchY, ln.x, ln.y, ln.branchIndex % 2 ? -1 : 1),
        class: 'map-edge',
        stroke: `url(#${gradId})`,
        'stroke-width': 0.9,
        'data-branch': ln.branchIndex,
      }, edgeLayer);
    });

    // 学科节点
    const branchLayer = el('g', { class: 'branches' }, world);
    spec.branchNodes.forEach((bn, i) => {
      const color = bn.branch.color || '#8ab4f8';
      const g = el('g', {
        class: 'node branch-node', 'data-branch': i,
        transform: `translate(${bn.x} ${bn.y})`,
        style: `animation-delay:${0.06 + i * 0.045}s`,
        tabindex: '0', role: 'button',
        'aria-label': `${bn.branch.name}，进入学科`,
      }, branchLayer);
      g.dataset.subject = bn.branch.id;

      const place = textPlacement(bn.rad);
      el('circle', { class: 'halo', r: 20, fill: rgba(color, 0.14) }, g);
      el('circle', { class: 'branch-dot', r: 6, fill: color, stroke: '#0a101d', 'stroke-width': 2 }, g);
      el('circle', { r: 12, fill: 'none', stroke: rgba(color, 0.28), 'stroke-width': 1 }, g);

      const nameY = place.nameDy > 0 ? place.nameDy + 2 : place.nameDy - 2;
      const text = el('text', {
        x: place.dx, y: nameY,
        'text-anchor': place.anchor, class: 'branch-label',
      }, g);
      text.textContent = bn.branch.name;

      bindNode(g, () => navigate(`#/${bn.branch.id}`), i);
    });

    // 概念叶子
    const leafLayer = el('g', { class: 'leaves' }, world);
    spec.leafNodes.forEach((ln) => {
      const color = ln.branch.color || '#8ab4f8';
      const g = el('g', {
        class: 'node leaf-node', 'data-branch': ln.branchIndex,
        transform: `translate(${ln.x} ${ln.y})`,
        style: `animation-delay:${0.15 + ln.branchIndex * 0.035 + ln.index * 0.02}s`,
        tabindex: '0', role: 'button',
        'aria-label': `${ln.topic.name}，${ln.topic.brief || ''}`,
      }, leafLayer);
      const key = `${ln.branch.id}/${ln.topic.id}`;
      state.nodeMap.set(key, g);

      const place = textPlacement(ln.rad);
      el('circle', { class: 'halo', r: 13, fill: rgba(color, 0.16) }, g);
      el('circle', { class: 'node-dot', r: 3.1, fill: color }, g);

      const nameY = place.nameDy > 0 ? place.nameDy + 1 : place.nameDy - 1;
      const text = el('text', {
        x: place.dx, y: nameY, 'text-anchor': place.anchor, class: 'node-label',
      }, g);
      text.textContent = ln.topic.name;

      if (ln.topic.brief) {
        const sub = el('text', {
          x: place.dx, y: place.subDy, 'text-anchor': place.anchor, class: 'node-sub',
        }, g);
        sub.textContent = shorten(ln.topic.brief, 15);
      }

      bindNode(g, () => navigate(`#/${ln.branch.id}/${ln.topic.id}`), ln.branchIndex);
    });

    // 中心
    renderCenter(world, {
      title: ov.title || '数学',
      en: ov.en || 'MATHEMATICS',
      subtitle: ov.subtitle || '',
      color: '#d9b46c',
      onClick: null,
    });

    applyZoom();
    animateIn();
    buildSearchIndex();
  }

  function renderSubject(subject) {
    state.openTopicId = null;
    state.branchFocus = null;
    weakMapReset();
    stopSphereView();
    const { svg, defs, world } = setupSvg(subject.branches);
    const spec = layoutRadial({
      branches: subject.branches,
      startAngle: subject.startAngle != null ? subject.startAngle : -90,
      branchRx: 340, branchRy: 250,
      leafRx: 660, leafRy: 445,
    });

    const edgeLayer = el('g', { class: 'edges' }, world);

    // 中心到分支
    spec.branchNodes.forEach((bn) => {
      const color = bn.branch.color || subject.color || '#8ab4f8';
      const gradId = `se-${bn.index}`;
      const g = el('linearGradient', {
        id: gradId, gradientUnits: 'userSpaceOnUse',
        x1: 0, y1: 0, x2: bn.x, y2: bn.y,
      }, defs);
      el('stop', { offset: '0%', 'stop-color': color, 'stop-opacity': '0.04' }, g);
      el('stop', { offset: '50%', 'stop-color': color, 'stop-opacity': '0.3' }, g);
      el('stop', { offset: '100%', 'stop-color': color, 'stop-opacity': '0.62' }, g);
      el('path', {
        d: edgeGeom(0, 0, bn.x, bn.y, bn.index % 2 ? 1 : -1),
        class: 'map-edge', stroke: `url(#${gradId})`, 'stroke-width': 1.4,
        'data-branch': bn.index,
      }, edgeLayer);
    });

    // 分支到知识点
    spec.leafNodes.forEach((ln) => {
      const color = ln.branch.color || subject.color || '#8ab4f8';
      const gradId = `sl-${ln.branchIndex}-${ln.index}`;
      const g = el('linearGradient', {
        id: gradId, gradientUnits: 'userSpaceOnUse',
        x1: ln.branchX, y1: ln.branchY, x2: ln.x, y2: ln.y,
      }, defs);
      el('stop', { offset: '0%', 'stop-color': color, 'stop-opacity': '0.4' }, g);
      el('stop', { offset: '100%', 'stop-color': color, 'stop-opacity': '0.08' }, g);
      el('path', {
        d: edgeGeom(ln.branchX, ln.branchY, ln.x, ln.y, ln.branchIndex % 2 ? -1 : 1),
        class: 'map-edge', stroke: `url(#${gradId})`, 'stroke-width': 0.9,
        'data-branch': ln.branchIndex,
      }, edgeLayer);
    });

    // 分支节点
    const branchLayer = el('g', { class: 'branches' }, world);
    spec.branchNodes.forEach((bn, i) => {
      const color = bn.branch.color || subject.color || '#8ab4f8';
      const g = el('g', {
        class: 'node branch-node', 'data-branch': i,
        transform: `translate(${bn.x} ${bn.y})`,
        style: `animation-delay:${0.06 + i * 0.05}s`,
        tabindex: '0', role: 'button',
        'aria-label': `${bn.branch.name}，${bn.branch.brief || ''}`,
      }, branchLayer);

      const place = textPlacement(bn.rad);
      el('circle', { class: 'halo', r: 24, fill: rgba(color, 0.15) }, g);
      el('circle', { class: 'branch-dot', r: 5.5, fill: color, stroke: '#0a101d', 'stroke-width': 2 }, g);
      el('circle', { r: 11, fill: 'none', stroke: rgba(color, 0.3), 'stroke-width': 1 }, g);

      const nameY = place.nameDy > 0 ? place.nameDy + 2 : place.nameDy - 2;
      const text = el('text', { x: place.dx, y: nameY, 'text-anchor': place.anchor, class: 'branch-label' }, g);
      text.textContent = bn.branch.name;
      if (bn.branch.brief) {
        const sub = el('text', { x: place.dx, y: place.subDy, 'text-anchor': place.anchor, class: 'node-sub' }, g);
        sub.textContent = shorten(bn.branch.brief, 14);
      }

      bindNode(g, () => {
        toggleBranchFocus(i);
        const first = (bn.branch.topics || [])[0];
        if (first) navigate(`#/${subject.id}/${first.id}`);
      }, i);
    });

    // 叶子
    const leafLayer = el('g', { class: 'leaves' }, world);
    spec.leafNodes.forEach((ln) => {
      const color = ln.branch.color || subject.color || '#8ab4f8';
      const g = el('g', {
        class: 'node leaf-node', 'data-branch': ln.branchIndex,
        transform: `translate(${ln.x} ${ln.y})`,
        style: `animation-delay:${0.15 + ln.branchIndex * 0.04 + ln.index * 0.025}s`,
        tabindex: '0', role: 'button',
        'aria-label': `${ln.topic.name}，${ln.topic.brief || ''}`,
      }, leafLayer);
      state.nodeMap.set(`${subject.id}/${ln.topic.id}`, g);

      const place = textPlacement(ln.rad);
      el('circle', { class: 'halo', r: 14, fill: rgba(color, 0.17) }, g);
      el('circle', { class: 'node-dot', r: 3.3, fill: color }, g);

      const nameY = place.nameDy > 0 ? place.nameDy + 1 : place.nameDy - 1;
      const text = el('text', { x: place.dx, y: nameY, 'text-anchor': place.anchor, class: 'node-label' }, g);
      text.textContent = ln.topic.name;
      if (ln.topic.brief) {
        const sub = el('text', { x: place.dx, y: place.subDy, 'text-anchor': place.anchor, class: 'node-sub' }, g);
        sub.textContent = shorten(ln.topic.brief, 16);
      }

      bindNode(g, () => navigate(`#/${subject.id}/${ln.topic.id}`), ln.branchIndex);
    });

    // 中心
    renderCenter(world, {
      title: subject.name,
      en: subject.en || '',
      subtitle: subject.tagline || '',
      color: subject.color || '#d9b46c',
      onClick: () => navigate('#/'),
    });

    applyZoom();
    animateIn();
    buildSidebar(subject);
    buildSearchIndex();
  }

  function renderCenter(world, cfg) {
    const g = el('g', {
      class: 'center-node',
      style: 'animation-delay:0s',
      tabindex: cfg.onClick ? '0' : '-1',
      role: cfg.onClick ? 'button' : 'img',
      'aria-label': cfg.title,
    }, world);

    const color = cfg.color || '#d9b46c';
    el('circle', { r: 106, fill: 'rgba(8,12,22,0.92)', stroke: rgba(color, 0.55), 'stroke-width': 1.2 }, g);
    el('circle', { r: 114, fill: 'none', stroke: rgba(color, 0.16), 'stroke-width': 1 }, g);

    const title = el('text', { class: 'center-title', 'text-anchor': 'middle', y: -12 }, g);
    title.textContent = cfg.title;
    title.style.fill = color;
    const len = cfg.title.length;
    title.style.fontSize = len > 4 ? '21px' : len > 2 ? '27px' : '34px';

    let y = 18;
    if (cfg.en) {
      const en = el('text', { class: 'center-en', 'text-anchor': 'middle', y }, g);
      en.textContent = cfg.en;
      y += 19;
    }
    if (cfg.subtitle) {
      const sub = el('text', { class: 'center-sub', 'text-anchor': 'middle', y: y - 2 }, g);
      sub.textContent = shorten(cfg.subtitle, 24);
      sub.style.fontSize = '9px';
    }

    if (cfg.onClick) {
      g.style.cursor = 'pointer';
      g.addEventListener('click', cfg.onClick);
      g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); cfg.onClick(); } });
    }
  }

  function bindNode(g, onClick, branchIndex) {
    g.style.cursor = 'pointer';
    g.addEventListener('click', (e) => { e.stopPropagation(); onClick(); });
    g.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); }
    });
    g.addEventListener('mouseenter', () => focusBranch(branchIndex));
    g.addEventListener('mouseleave', () => focusBranch(null));
  }

  function focusBranch(idx) {
    const svg = $('#map');
    if (idx == null) {
      if (state.branchFocus != null) return;
      svg.classList.remove('focusing');
      svg.querySelectorAll('.dim').forEach(n => n.classList.remove('dim'));
      return;
    }
    if (state.branchFocus === idx) return;
    svg.classList.add('focusing');
    svg.querySelectorAll('[data-branch]').forEach(n => {
      n.classList.toggle('dim', Number(n.dataset.branch) !== idx);
    });
  }

  function toggleBranchFocus(idx) {
    const svg = $('#map');
    if (state.branchFocus === idx) {
      state.branchFocus = null;
      focusBranch(null);
    } else {
      state.branchFocus = idx;
      svg.classList.add('focusing');
      svg.querySelectorAll('[data-branch]').forEach(n => {
        n.classList.toggle('dim', Number(n.dataset.branch) !== idx);
      });
    }
  }

  function shorten(s, max) {
    s = String(s || '');
    return s.length > max ? s.slice(0, max - 1) + '…' : s;
  }

  function weakMapReset() { state.nodeMap.clear(); }

  function animateIn() {
    if (reduceMotion) return;
    const svg = $('#map');
    svg.querySelectorAll('.node').forEach(n => {
      n.style.opacity = '0';
      const delay = n.style.animationDelay || '0s';
      n.style.animationDelay = delay;
      requestAnimationFrame(() => { n.style.opacity = ''; });
    });
  }

  /* ---------------- 缩放与平移 ---------------- */

  function applyZoom() {
    const world = $('#world');
    if (!world) return;
    world.setAttribute('transform', `translate(${state.zoom.x} ${state.zoom.y}) scale(${state.zoom.k})`);
  }

  function svgPoint(evt) {
    const svg = $('#map');
    const pt = svg.createSVGPoint();
    pt.x = evt.clientX; pt.y = evt.clientY;
    return pt.matrixTransform(svg.getScreenCTM().inverse());
  }

  let dragging = null;

  function initInteractions() {
    const wrap = $('#mapWrap');
    const svg = $('#map');

    wrap.addEventListener('wheel', (e) => {
      if (e.ctrlKey) e.preventDefault();
      const p = svgPoint(e);
      const factor = Math.exp(-e.deltaY * 0.0016);
      const k = Math.min(3.2, Math.max(0.45, state.zoom.k * factor));
      const ratio = k / state.zoom.k;
      state.zoom.x = p.x - (p.x - state.zoom.x) * ratio;
      state.zoom.y = p.y - (p.y - state.zoom.y) * ratio;
      state.zoom.k = k;
      applyZoom();
      $('#mapHint').classList.add('hidden');
    }, { passive: false });

    wrap.addEventListener('pointerdown', (e) => {
      if (e.target.closest('.node')) return;
      dragging = { x: e.clientX, y: e.clientY, sx: state.zoom.x, sy: state.zoom.y };
      wrap.classList.add('dragging');
      wrap.setPointerCapture(e.pointerId);
    });
    wrap.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      const p0 = svgPoint(e);
      const p1 = svgPoint({ clientX: dragging.x, clientY: dragging.y });
      state.zoom.x = dragging.sx + (p0.x - p1.x);
      state.zoom.y = dragging.sy + (p0.y - p1.y);
      applyZoom();
    });
    wrap.addEventListener('pointerup', () => { dragging = null; wrap.classList.remove('dragging'); });
    wrap.addEventListener('pointercancel', () => { dragging = null; wrap.classList.remove('dragging'); });

    $('#zoomIn').addEventListener('click', () => {
      if (sphere.active) { sphere.zoom = Math.min(2.6, sphere.zoom * 1.22); return; }
      zoomBy(1.25);
    });
    $('#zoomOut').addEventListener('click', () => {
      if (sphere.active) { sphere.zoom = Math.max(0.55, sphere.zoom / 1.22); return; }
      zoomBy(0.8);
    });
    $('#zoomReset').addEventListener('click', () => {
      if (sphere.active) { sphere.yaw = 0.55; sphere.pitch = -0.3; sphere.zoom = 1; return; }
      state.zoom = { x: 0, y: 0, k: 1 };
      applyZoom();
    });

    // 双击空白重置
    wrap.addEventListener('dblclick', (e) => {
      if (e.target.closest('.node')) return;
      state.zoom = { x: 0, y: 0, k: 1 };
      applyZoom();
    });
  }

  function zoomBy(f) {
    const k = Math.min(3.2, Math.max(0.45, state.zoom.k * f));
    const ratio = k / state.zoom.k;
    state.zoom.x = state.zoom.x * ratio;
    state.zoom.y = state.zoom.y * ratio;
    state.zoom.k = k;
    applyZoom();
  }

  /* ---------------- 侧栏目录 ---------------- */

  function buildSidebar(subject) {
    const bar = $('#sidebar');
    let html = `<div class="sidebar-title">目录 · CONTENTS</div>`;
    subject.branches.forEach((b, i) => {
      const color = b.color || subject.color || '#8ab4f8';
      html += `<div class="toc-group" data-idx="${i}">
        <button class="toc-branch" data-idx="${i}">
          <span class="dot" style="background:${color};box-shadow:0 0 8px ${color}"></span>
          <span>${esc(b.name)}</span>
          <span style="margin-left:auto;font-size:10px;color:var(--ink-faint)">${(b.topics || []).length}</span>
        </button>
        <div class="toc-topics">`;
      (b.topics || []).forEach(t => {
        html += `<button class="toc-topic" data-subject="${subject.id}" data-topic="${esc(t.id)}">${esc(t.name)}</button>`;
      });
      html += `</div></div>`;
    });
    bar.innerHTML = html;
    bar.classList.add('visible');

    bar.querySelectorAll('.toc-branch').forEach(btn => {
      btn.addEventListener('click', () => {
        const group = btn.closest('.toc-group');
        group.classList.toggle('open');
      });
    });
    bar.querySelectorAll('.toc-topic').forEach(btn => {
      btn.addEventListener('click', () => navigate(`#/${btn.dataset.subject}/${btn.dataset.topic}`));
    });
    bar.querySelector('.toc-group')?.classList.add('open');
  }

  function markTocActive(topicId) {
    const bar = $('#sidebar');
    bar.querySelectorAll('.toc-topic').forEach(b => b.classList.toggle('active', b.dataset.topic === topicId));
  }

  /* ---------------- 详情面板 ---------------- */

  function openPanelDOM(found) {
    const { subject, branch, topic } = found;
    state.openTopicId = topic.id;
    if (sphere.active) sphereSelectTopic(subject.id, topic.id);
    const key = topicKey(subject.id, topic.id);
    if (!progressStore.read.has(key)) {
      progressStore.read.add(key);
      persistProgress();
    }
    updateProgressBadge();
    const panel = $('#panel');
    const inner = $('#panelInner');
    const color = branch.color || subject.color || '#d9b46c';

    const sections = [];

    const defs = asArray(topic.definition);
    if (defs.length) {
      sections.push(`<section class="topic-section">
        <h3>定义</h3>
        ${defs.map(p => `<p>${inlineMarkup(p)}</p>`).join('')}
      </section>`);
    }

    const extra = (window.ATLAS.extras && window.ATLAS.extras[subject.id + '/' + topic.id]) || null;
    const intuitions = asArray(topic.intuition).concat(
      extra && extra.insight ? [extra.insight] : []
    );
    if (intuitions.length) {
      sections.push(`<section class="topic-section">
        <h3>直觉与动机</h3>
        ${intuitions.map(p => `<p>${inlineMarkup(p)}</p>`).join('')}
      </section>`);
    }

    const formulas = asArray(topic.formulas).filter(f => f && f.tex);
    if (formulas.length) {
      sections.push(`<section class="topic-section">
        <h3>关键公式</h3>
        <div class="formula-list">
          ${formulas.map((f, i) => `<div class="formula-card">
            <button class="copy-tex" data-copy-index="${i}">复制</button>
            <div class="formula-tex" data-formula-index="${i}"></div>
            ${f.caption ? `<div class="formula-caption">${inlineMarkup(f.caption)}</div>` : ''}
          </div>`).join('')}
        </div>
      </section>`);
    }

    const examples = asArray(topic.example).concat(
      extra && extra.examples ? extra.examples : []
    );
    if (examples.length) {
      sections.push(`<section class="topic-section">
        <h3>例子与应用</h3>
        <div class="example-box">${examples.map(p => `<p>${inlineMarkup(p)}</p>`).join('')}</div>
      </section>`);
    }

    const learning = window.ATLAS.learning && window.ATLAS.learning[key];
    if (learning) {
      sections.push(`<section class="topic-section learning-boundary">
        <h3>适用条件与易错点</h3>
        <p>${inlineMarkup(learning.boundary)}</p>
      </section>`);
      sections.push(`<section class="topic-section learning-check">
        <h3>自测与推理</h3>
        <p>${inlineMarkup(learning.question)}</p>
        <details class="learning-answer">
          <summary>查看解析</summary>
          <div>${inlineMarkup(learning.answer)}</div>
        </details>
      </section>`);
    }

    const related = asArray(topic.related).filter(Boolean);
    if (related.length) {
      const chips = related.map(ref => {
        let subj, tid;
        if (typeof ref === 'string' && ref.includes('/')) [subj, tid] = ref.split('/');
        else { subj = subject.id; tid = ref; }
        const target = findTopic(subj, tid);
        if (!target) return '';
        return `<button class="related-chip" data-subject="${subj}" data-topic="${esc(tid)}">
          <span>${esc(target.topic.name)}</span>
          <span class="chip-cat">${esc(target.subject.name)}</span>
        </button>`;
      }).join('');
      if (chips) {
        sections.push(`<section class="topic-section">
          <h3>相关概念</h3>
          <div class="related-list">${chips}</div>
        </section>`);
      }
    }

    // 上一条 / 下一条
    const flat = flatTopics(subject.id);
    const pos = flat.findIndex(x => x.topic.id === topic.id);
    const prev = pos > 0 ? flat[pos - 1].topic : null;
    const next = pos >= 0 && pos < flat.length - 1 ? flat[pos + 1].topic : null;
    const navHtml = `<div class="panel-nav">
      <button class="prev" ${prev ? '' : 'disabled'} data-nav="prev">
        <span class="nav-label">上一条</span>${prev ? esc(prev.name) : '—'}
      </button>
      <button class="next" ${next ? '' : 'disabled'} data-nav="next">
        <span class="nav-label">下一条</span>${next ? esc(next.name) : '—'}
      </button>
    </div>`;

    const isFav = progressStore.favorites.has(key);
    inner.innerHTML = `
      <button class="panel-close" id="panelClose" aria-label="关闭">✕</button>
      <button class="panel-expand" id="panelExpand" aria-label="全屏" title="全屏">⤢</button>
      <div class="topic-kicker">
        <span class="kicker-dot" style="background:${color};color:${color}"></span>
        <a class="kicker-cat link" href="#/${subject.id}">${esc(subject.name)}</a>
        <span class="kicker-cat">· ${esc(branch.name)}</span>
      </div>
      <div class="topic-head">
        <h1 class="topic-title">${esc(topic.name)}</h1>
        <button class="fav-btn ${isFav ? 'active' : ''}" id="favBtn">${isFav ? '★ 已收藏' : '☆ 收藏'}</button>
      </div>
      ${topic.brief ? `<p class="topic-sub">${esc(topic.brief)}</p>` : ''}
      ${sections.join('')}
      ${navHtml}
    `;

    // 渲染公式
    const renderFormulaNodes = () => {
      inner.querySelectorAll('.formula-tex').forEach(node => {
        const f = formulas[Number(node.dataset.formulaIndex)];
        if (!f) return;
        node.innerHTML = '';
        if (window.katex) {
          try {
            window.katex.render(f.tex, node, { displayMode: true, throwOnError: false });
          } catch (err) {
            node.innerHTML = `<code class="tex-fallback">${esc(f.tex)}</code>`;
          }
        } else {
          node.innerHTML = `<code class="tex-fallback">${esc(f.tex)}</code>`;
        }
      });
    };
    renderFormulaNodes();
    if (!window.katex) waitForKatex(renderFormulaNodes);

    inner.querySelector('#panelClose').addEventListener('click', () => closeToSubject());
    inner.querySelector('#panelExpand')?.addEventListener('click', () => {
      const card = $('#panelCard');
      card.classList.toggle('full');
      const full = card.classList.contains('full');
      const btn = inner.querySelector('#panelExpand');
      btn.textContent = full ? '⤡' : '⤢';
      btn.title = full ? '退出全屏' : '全屏';
    });
    inner.querySelector('#favBtn')?.addEventListener('click', () => {
      if (progressStore.favorites.has(key)) progressStore.favorites.delete(key);
      else progressStore.favorites.add(key);
      persistProgress();
      const btn = inner.querySelector('#favBtn');
      const active = progressStore.favorites.has(key);
      btn.textContent = active ? '★ 已收藏' : '☆ 收藏';
      btn.classList.toggle('active', active);
    });
    inner.querySelectorAll('.copy-tex').forEach(btn => {
      btn.addEventListener('click', () => {
        const f = formulas[Number(btn.dataset.copyIndex)];
        if (!f) return;
        copyText(f.tex, () => {
          btn.textContent = '已复制';
          setTimeout(() => { btn.textContent = '复制'; }, 1200);
        });
      });
    });
    const openAnother = (sid, tid) => {
      if (sphere.active) {
        const target = findTopic(sid, tid);
        if (target) openPanelDOM(target);
      } else {
        navigate(`#/${sid}/${tid}`);
      }
    };
    inner.querySelectorAll('.related-chip').forEach(c => {
      c.addEventListener('click', () => openAnother(c.dataset.subject, c.dataset.topic));
    });
    inner.querySelector('[data-nav="prev"]')?.addEventListener('click', () => {
      if (prev) openAnother(subject.id, prev.id);
    });
    inner.querySelector('[data-nav="next"]')?.addEventListener('click', () => {
      if (next) openAnother(subject.id, next.id);
    });

    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    inner.scrollTop = 0;
    markTocActive(topic.id);
    highlightMapNode(subject.id, topic.id);
  }

  function closeToSubject() {
    const sid = state.subjectId;
    const parts = parseHash();
    if (parts[1]) navigate(`#/${sid}`);
    else closePanelDOM();
  }

  function closePanelDOM() {
    const panel = $('#panel');
    if (!panel.classList.contains('open')) return;
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    const card = $('#panelCard');
    if (card) card.classList.remove('full');
    state.openTopicId = null;
    highlightMapNode(null, null);
    markTocActive(null);
    sphere.selected = -1;
    sphere.targetYaw = null;
    sphere.targetPitch = null;
    sphere.cooldownUntil = performance.now() + 2000;
  }

  function highlightMapNode(subjectId, topicId) {
    const map = $('#map');
    map.querySelectorAll('.selected').forEach(n => n.classList.remove('selected'));
    if (!subjectId || !topicId) return;
    const node = state.nodeMap.get(`${subjectId}/${topicId}`);
    if (node) node.classList.add('selected');
  }

  $('#panelScrim').addEventListener('click', closeToSubject);

  /* ---------------- 搜索 ---------------- */

  let searchState = { active: 0, results: [] };

  function openSearch() {
    $('#searchModal').classList.add('open');
    $('#searchModal').setAttribute('aria-hidden', 'false');
    const input = $('#searchInput');
    input.value = '';
    input.focus();
    renderSearch('');
  }

  function closeSearch() {
    $('#searchModal').classList.remove('open');
    $('#searchModal').setAttribute('aria-hidden', 'true');
  }

  function openSearchItem(item) {
    closeSearch();
    if (sphere.active) {
      const found = findTopic(item.subject.id, item.topic.id);
      if (found) openPanelDOM(found);
    } else {
      navigate(`#/${item.subject.id}/${item.topic.id}`);
    }
  }

  function searchScore(item, q) {
    const name = (item.topic.name || '').toLowerCase();
    const brief = (item.topic.brief || '').toLowerCase();
    const kw = (item.topic.keywords || []).join(' ').toLowerCase();
    const extra = (window.ATLAS.extras || {})[topicKey(item.subject.id, item.topic.id)] || {};
    const learning = (window.ATLAS.learning || {})[topicKey(item.subject.id, item.topic.id)] || {};
    const def = [
      ...asArray(item.topic.definition), ...asArray(item.topic.intuition),
      ...asArray(item.topic.example), ...asArray(extra.examples), extra.insight || '',
      ...asArray(item.topic.formulas).map(f => f.caption || ''),
      learning.boundary || '', learning.question || '', learning.answer || ''
    ].join(' ').toLowerCase();
    const branch = (item.branch.name || '').toLowerCase();
    const subject = (item.subject.name || '').toLowerCase();
    if (name === q) return 100;
    if (name.startsWith(q)) return 80;
    if (name.includes(q)) return 60;
    if (kw.includes(q)) return 45;
    if (brief.includes(q)) return 35;
    if (branch.includes(q) || subject.includes(q)) return 20;
    if (def.includes(q)) return 10;
    return 0;
  }

  function renderSearch(q) {
    const box = $('#searchResults');
    const empty = $('#searchEmpty');
    const query = q.trim().toLowerCase();
    let results;

    if (!query) {
      results = state.searchIndex.slice(0, 8);
    } else {
      results = state.searchIndex
        .map(item => ({ item, score: searchScore(item, query) }))
        .filter(x => x.score > 0)
        .sort((a, b) => b.score - a.score || a.item.topic.name.length - b.item.topic.name.length)
        .slice(0, 24)
        .map(x => x.item);
    }

    searchState.results = results;
    searchState.active = 0;

    if (!results.length) {
      box.innerHTML = '';
      empty.classList.remove('hidden');
      return;
    }
    empty.classList.add('hidden');

    box.innerHTML = (query ? `<div class="search-count">找到 ${results.length} 条结果</div>` : '') + results.map((item, i) => {
      const color = item.branch.color || item.subject.color || '#8ab4f8';
      return `<button class="search-result ${i === 0 && query ? 'active' : ''}" data-i="${i}">
        <span class="res-dot" style="background:${color};box-shadow:0 0 8px ${color}"></span>
        <span class="res-main">
          <span class="res-name">${esc(item.topic.name)}</span>
          <span class="res-desc">${esc(item.topic.brief || '')}</span>
        </span>
        <span class="res-cat">${esc(item.subject.name)}</span>
      </button>`;
    }).join('');

    box.querySelectorAll('.search-result').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = searchState.results[Number(btn.dataset.i)];
        if (item) openSearchItem(item);
      });
      btn.addEventListener('mousemove', () => setSearchActive(Number(btn.dataset.i)));
    });
  }

  function setSearchActive(i) {
    searchState.active = i;
    $('#searchResults').querySelectorAll('.search-result').forEach((b, idx) => {
      b.classList.toggle('active', idx === i);
      if (idx === i) b.scrollIntoView({ block: 'nearest' });
    });
  }

  function initSearch() {
    $('#searchTrigger').addEventListener('click', openSearch);
    $('#searchScrim').addEventListener('click', closeSearch);
    $('#searchInput').addEventListener('input', (e) => renderSearch(e.target.value));
    $('#searchInput').addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const n = searchState.results.length;
        if (n) setSearchActive((searchState.active + 1) % n);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const n = searchState.results.length;
        if (n) setSearchActive((searchState.active - 1 + n) % n);
      } else if (e.key === 'Enter') {
        const item = searchState.results[searchState.active];
        if (item) openSearchItem(item);
      } else if (e.key === 'Escape') {
        closeSearch();
      }
    });

    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openSearch();
      } else if (e.key === 'Escape') {
        if ($('#searchModal').classList.contains('open')) closeSearch();
        else if ($('#panel').classList.contains('open')) closeToSubject();
      } else if (!e.target?.closest?.('input, textarea') && !e.metaKey && !e.ctrlKey && !e.altKey
                 && (e.key === 'r' || e.key === 'R' || e.key === '/')) {
        e.preventDefault();
        if (e.key === 'r' || e.key === 'R') randomTopic();
        else openSearch();
      } else if ($('#panel').classList.contains('open') && !e.target?.closest?.('input, textarea')) {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
          const sel = e.key === 'ArrowLeft' ? '[data-nav="prev"]' : '[data-nav="next"]';
          const btn = $('#panelInner').querySelector(sel);
          if (btn && !btn.disabled) { e.preventDefault(); btn.click(); }
        }
      }
    });
  }

  /* ---------------- CSS 里选择的节点高亮 ---------------- */

  const stylePatch = document.createElement('style');
  stylePatch.textContent = `
    .leaf-node.selected .node-label { fill: #f2d79a; }
    .leaf-node.selected .node-dot { fill: #f2d79a; }
    .leaf-node.selected .halo { opacity: 1; fill: rgba(217,180,108,.2); }
    svg.focusing .dim { opacity: .14; }
    .tex-fallback { font-family: var(--font-mono); font-size: 12.5px; color: var(--ink-soft); }
  `;
  document.head.appendChild(stylePatch);

  /* ---------------- 启动 ---------------- */

  function randomTopic() {
    if (!state.searchIndex.length) return;
    const item = state.searchIndex[Math.floor(Math.random() * state.searchIndex.length)];
    if (sphere.active) {
      const found = findTopic(item.subject.id, item.topic.id);
      if (found) openPanelDOM(found);
    } else {
      navigate(`#/${item.subject.id}/${item.topic.id}`);
    }
  }

  function init() {
    state.viewType = null;
    initInteractions();
    initSearch();
    initSphere();
    $('#randomBtn').addEventListener('click', randomTopic);
    window.addEventListener('hashchange', route);
    if (!location.hash) {
      try { history.replaceState(null, '', '#/'); } catch (err) { /* file:// 下部分浏览器不允许，忽略即可 */ }
    }
    route();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();