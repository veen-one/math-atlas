/* 数学知识地图 · 分析
   本文件包含元数据与「实分析」「复分析」两个分支的完整内容，
   其余分支由 data/analysis-b.js 追加。 */
window.ATLAS = window.ATLAS || { subjects: {} };

window.ATLAS.subjects.analysis = {
  id: 'analysis',
  name: '分析',
  en: 'ANALYSIS',
  tagline: '从变化率出发，研究连续、极限与无限维',
  color: '#7ea6f0',
  startAngle: 75,
  branches: [
    {
      id: 'real-analysis',
      name: '实分析',
      en: 'REAL ANALYSIS',
      brief: '极限、连续与严格论证',
      color: '#6f9ee8',
      angle: 75,
      topics: [
        {
          id: 'continuity-uniform',
          name: '连续与一致连续',
          brief: '比较局部与统一的连续控制',
          keywords: ['连续', '一致连续', 'Heine-Cantor', 'ε-δ', '紧集'],
          definition: [
            '设 $E \\subseteq \\mathbb{R}$，$f: E \\to \\mathbb{R}$。若 $f$ 在每一点 $x_0 \\in E$ 都连续，即对每个 $\\varepsilon > 0$ 与每个 $x_0$，存在 $\\delta = \\delta(\\varepsilon, x_0) > 0$，使得当 $x \\in E$ 且 $|x - x_0| < \\delta$ 时 $|f(x) - f(x_0)| < \\varepsilon$，则称 $f$ 在 $E$ 上**连续**。',
            '若存在只依赖于 $\\varepsilon$ 的 $\\delta = \\delta(\\varepsilon) > 0$，使得对**所有** $x, y \\in E$，只要 $|x - y| < \\delta$ 就有 $|f(x) - f(y)| < \\varepsilon$，则称 $f$ 在 $E$ 上**一致连续**。'
          ],
          intuition: [
            '连续是逐点性质：允许 $\\delta$ 随 $x_0$ 变化。一致连续则要求“一把尺子量到底”——同一个 $\\delta$ 在整个定义域上都有效。',
            '直觉上，一致连续排除了函数在某处“无限陡峭”的可能。$f(x) = x^2$ 在 $\\mathbb{R}$ 上连续，但在大 $x$ 处斜率越来越大，给定 $\\varepsilon$ 时所需的 $\\delta$ 随 $x_0$ 增大而缩小，因此不是一致连续的。紧集上的连续函数自动一致连续（Heine–Cantor 定理），这是紧性最重要的应用之一。'
          ],
          formulas: [
            {
              tex: '\\forall \\varepsilon > 0,\\ \\exists \\delta = \\delta(\\varepsilon) > 0,\\ \\forall x, y \\in E:\\ |x - y| < \\delta \\implies |f(x) - f(y)| < \\varepsilon',
              caption: '一致连续的定义。关键在 $\\delta$ 只依赖 $\\varepsilon$，与点的位置无关。'
            },
            {
              tex: 'f \\text{ 在紧集 } K \\text{ 上连续} \\implies f \\text{ 在 } K \\text{ 上一致连续}',
              caption: 'Heine–Cantor 定理：连续性加上紧性推出一致连续。'
            },
            {
              tex: '|x^2 - y^2| = |x + y|\\,|x - y|',
              caption: '说明 $x^2$ 不一致连续：要让 $|x^2 - y^2| < \\varepsilon$，$\\delta$ 必须小于 $\\varepsilon / |x + y|$，随 $|x|, |y| \\to \\infty$ 没有正的下界。'
            }
          ],
          example: [
            '$f(x) = x^2$ 在 $\\mathbb{R}$ 上连续但非一致连续：取 $x_n = n$，$y_n = n + 1/n$，则 $|x_n - y_n| = 1/n \\to 0$，而 $|f(x_n) - f(y_n)| = 2 + 1/n^2 > 2$，不趋于零。另一方面，$f(x) = x^2$ 在任何闭区间 $[a, b]$ 上一致连续，因为闭区间是紧集。'
          ],
          related: ['uniform-convergence', 'completeness-reals', 'limits']
        },
        {
          id: 'uniform-convergence',
          name: '一致收敛',
          brief: '控制整个定义域上的逼近误差',
          keywords: ['一致收敛', '函数列', 'sup 范数', 'Weierstrass M-判别法'],
          definition: [
            '设 $f_n: E \\to \\mathbb{R}$ 是一列函数，$f: E \\to \\mathbb{R}$。若对每个 $\\varepsilon > 0$，存在 $N$，使得当 $n \\ge N$ 时对**所有** $x \\in E$ 都有 $|f_n(x) - f(x)| < \\varepsilon$，则称 $f_n$ 在 $E$ 上**一致收敛**到 $f$。',
            '等价地，$\\sup_{x \\in E} |f_n(x) - f(x)| \\to 0$。若仅要求对每个固定的 $x$ 有 $f_n(x) \\to f(x)$，则称为**逐点收敛**，它比一致收敛弱。'
          ],
          intuition: [
            '逐点收敛时，$N$ 可以随 $x$ 变化；一致收敛要求同一个 $N$ 对定义域中所有点都管用。这就像一个班级里“每个人最终都及格”与“从某次考试起所有人同时及格”的区别。',
            '为什么需要更强的收敛？因为许多分析操作（连续性、积分、极限交换）在逐点收敛下会失败。一致收敛保证连续函数的极限连续，并在适当条件下允许积分与极限交换顺序，是分析中常用的“安全网”。'
          ],
          formulas: [
            {
              tex: '\\forall \\varepsilon > 0,\\ \\exists N,\\ \\forall n \\ge N,\\ \\forall x \\in E:\\ |f_n(x) - f(x)| < \\varepsilon',
              caption: '一致收敛的 $\\varepsilon$-$N$ 定义：$N$ 只依赖于 $\\varepsilon$，不依赖于 $x$。'
            },
            {
              tex: '\\| f_n - f \\|_\\infty = \\sup_{x \\in E} |f_n(x) - f(x)| \\to 0',
              caption: '用上确界范数（一致范数）描述一致收敛。'
            },
            {
              tex: '\\sum_{n=1}^{\\infty} \\| f_n \\|_\\infty < \\infty \\implies \\sum_{n=1}^{\\infty} f_n \\text{ 一致收敛}',
              caption: 'Weierstrass $M$-判别法：用范数级数的绝对收敛控制函数级数的一致收敛。'
            }
          ],
          example: [
            '$f_n(x) = x^n$ 在 $[0,1)$ 上逐点收敛到 $0$，但不一致收敛：取 $x_n = (1/2)^{1/n} \\to 1$，有 $f_n(x_n) = 1/2$，不趋于 $0$。在 $[0, r]$（$0 < r < 1$）上则一致收敛，因为 $\\sup_{[0,r]} |x^n| = r^n \\to 0$。'
          ],
          related: ['function-sequences', 'continuity-uniform', 'series']
        },
        {
          id: 'function-sequences',
          name: '函数列',
          brief: '研究一列函数如何逼近',
          keywords: ['函数列', '逐点收敛', '极限函数', '函数项级数'],
          definition: [
            '定义在同一集合 $E$ 上的一列函数 $f_1, f_2, \\dots$ 称为**函数列**。若对每个固定的 $x \\in E$，数列 $f_n(x)$ 都收敛，则称 $f_n$ 在 $E$ 上**逐点收敛**，其极限定义为一个新函数 $f(x) = \\lim_{n \\to \\infty} f_n(x)$。',
            '研究函数列的核心问题是：$f_n$ 的连续性、可积性、可微性等性质，能否在取极限后保留？'
          ],
          intuition: [
            '把每个 $f_n$ 想成一张越来越精细的照片：逐点收敛说“每个像素最终稳定”，一致收敛说“整张照片整体稳定”。',
            '极限函数可能比每个 $f_n$ 更“坏”：连续函数列可以收敛到不连续函数（$f_n(x) = x^n$ 在 $[0,1]$ 上就是例子），可积函数列的极限可能不可积（黎曼意义下）。这些反例推动了一致收敛、勒贝格积分等概念的产生。'
          ],
          formulas: [
            {
              tex: 'f(x) := \\lim_{n \\to \\infty} f_n(x),\\quad x \\in E',
              caption: '逐点收敛定义的极限函数。'
            },
            {
              tex: '\\lim_{n \\to \\infty} \\int_a^b f_n(x)\\,dx \\ne \\int_a^b \\lim_{n \\to \\infty} f_n(x)\\,dx \\quad \\text{（一般情形）}',
              caption: '极限与积分一般不交换；一致收敛或控制收敛条件下才可以。'
            },
            {
              tex: 'f_n \\text{ 连续且一致收敛} \\implies f \\text{ 连续}',
              caption: '一致收敛保持连续性；逐点收敛不保证。'
            }
          ],
          example: [
            '$f_n(x) = n x(1 - x^2)^n$ 在 $[0,1]$ 上逐点收敛到 $0$，但 $\\int_0^1 f_n(x)\\,dx = \\frac{n}{2(n+1)} \\to \\frac12$，而 $\\int_0^1 0\\,dx = 0$。这说明逐点收敛不足以交换极限与积分。'
          ],
          related: ['uniform-convergence', 'integration-limits', 'continuity-uniform']
        },
        {
          id: 'series',
          name: '数项级数',
          brief: '判断无限求和是否收敛',
          keywords: ['级数', '部分和', '绝对收敛', '条件收敛', 'p-级数'],
          definition: [
            '给定数列 $\\{a_n\\}$，称形式和 $\\sum_{n=1}^{\\infty} a_n$ 为**数项级数**，其部分和为 $S_n = a_1 + \\cdots + a_n$。若部分和数列 $\\{S_n\\}$ 收敛到 $S$，则称级数收敛，和为 $S$。',
            '若 $\\sum |a_n|$ 收敛，称级数**绝对收敛**；若 $\\sum a_n$ 收敛而 $\\sum |a_n|$ 发散，称**条件收敛**。'
          ],
          intuition: [
            '无穷多个数相加没有直接的“加法”定义，只能通过部分和的极限来严格化。收敛与否取决于项趋于零的速度：$\\sum 1/n$ 的项趋于零却发散，$\\sum 1/n^2$ 则收敛。',
            '绝对收敛的级数可以任意重排而不改变和；条件收敛则不行——黎曼重排定理指出，条件收敛级数可以通过重排得到任意实数，甚至发散。这是“无穷”与有限运算的关键差异。'
          ],
          formulas: [
            {
              tex: '\\sum_{n=0}^{\\infty} r^n = \\frac{1}{1-r},\\quad |r| < 1',
              caption: '几何级数求和公式。'
            },
            {
              tex: '\\sum_{n=1}^{\\infty} \\frac{1}{n^p} \\text{ 收敛} \\iff p > 1',
              caption: '$p$-级数：调和级数 $p = 1$ 发散，$p > 1$ 收敛，$p \\le 1$ 发散。'
            },
            {
              tex: '\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}}{n} = \\ln 2',
              caption: '交错调和级数：条件收敛的典型例子。'
            }
          ],
          example: [
            '调和级数 $\\sum_{n=1}^\\infty 1/n$ 发散：$S_{2^k} \\ge 1 + k/2 \\to \\infty$。而 $\\sum_{n=1}^\\infty (-1)^{n-1}/n$ 收敛（莱布尼茨判别法），但取绝对值后是调和级数，故为条件收敛。'
          ],
          related: ['uniform-convergence', 'limits', 'completeness-reals']
        },
        {
          id: 'completeness-reals',
          name: '实数完备性',
          brief: '保证相应极限留在实数中',
          keywords: ['完备性', '确界', '柯西列', '单调有界', '区间套'],
          definition: [
            '实数系 $\\mathbb{R}$ 的**完备性**有多种等价表述：每个非空有上界的子集有上确界；每个柯西列收敛；每个单调有界数列收敛；每个闭区间套有非空交。这些命题在有序域中彼此等价，共同刻画了实数与有理数的本质区别。',
            '柯西列指满足 $\\forall \\varepsilon > 0,\\ \\exists N,\\ \\forall m, n \\ge N:\\ |a_m - a_n| < \\varepsilon$ 的数列。'
          ],
          intuition: [
            '有理数轴上有“洞”：$\\sqrt{2}$ 不在 $\\mathbb{Q}$ 中。可以构造一列有理数逼近 $\\sqrt2$，它在 $\\mathbb{Q}$ 里是柯西列却不收敛。实数完备性就是“把洞填满”，保证极限运算不会跑出数系。',
            '完备性是分析的基石：中值定理、极值定理、黎曼可积性、微分方程解的存在性，都依赖某种形式的完备性。没有它，微积分的大厦无法建立。'
          ],
          formulas: [
            {
              tex: '\\forall A \\subseteq \\mathbb{R},\\ A \\ne \\varnothing,\\ A \\text{ 有上界} \\implies \\sup A \\text{ 存在}',
              caption: '确界原理。'
            },
            {
              tex: '\\{a_n\\} \\text{ 是柯西列} \\implies \\{a_n\\} \\text{ 收敛}',
              caption: '柯西收敛准则：在 $\\mathbb{R}$ 中成立，在 $\\mathbb{Q}$ 中不成立。'
            },
            {
              tex: 'a_n \\text{ 单调有界} \\implies a_n \\text{ 收敛}',
              caption: '单调有界定理。'
            }
          ],
          example: [
            '用牛顿迭代构造逼近 $\\sqrt2$ 的有理数列：$a_{n+1} = \\frac12(a_n + 2/a_n)$，$a_1 = 1$。它是柯西列，在 $\\mathbb{R}$ 中收敛于 $\\sqrt2$，但在 $\\mathbb{Q}$ 中不收敛。'
          ],
          related: ['limits', 'series', 'continuity-uniform']
        },
        {
          id: 'fundamental-theorem-calculus',
          name: '微积分基本定理',
          brief: '在适用条件下联系导数与积分',
          keywords: ['微积分基本定理', 'Newton-Leibniz', '变上限积分', '原函数'],
          definition: [
            '设 $f$ 在 $[a, b]$ 上连续，定义变上限积分 $F(x) = \\int_a^x f(t)\\,dt$。则 $F$ 在 $(a, b)$ 上可微（端点按相应单侧导数理解），且 $F\'(x) = f(x)$。',
            '若 $G$ 是 $f$ 在 $[a, b]$ 上的任一原函数（即 $G\' = f$），则 $\\int_a^b f(x)\\,dx = G(b) - G(a)$。'
          ],
          intuition: [
            '第一基本定理说：累积再求变化率，回到原函数；第二基本定理说：求面积可以转化为求原函数的端点值。微分与积分因此成为互逆运算。',
            '它把“求和取极限”的积分计算变成“找原函数”的代数问题，是微积分成为一门可计算理论的起点。'
          ],
          formulas: [
            {
              tex: '\\frac{d}{dx} \\int_a^x f(t)\\,dt = f(x)',
              caption: '第一基本定理：连续函数的变上限积分是其原函数。'
            },
            {
              tex: '\\int_a^b f(x)\\,dx = G(b) - G(a),\\quad G\' = f',
              caption: 'Newton–Leibniz 公式。'
            },
            {
              tex: '\\frac{d}{dx} \\int_{a(x)}^{b(x)} f(t)\\,dt = f(b(x))b\'(x) - f(a(x))a\'(x)',
              caption: '变限积分的链式法则版本。'
            }
          ],
          example: [
            '$\\int_0^\\pi \\sin x\\,dx = [-\\cos x]_0^\\pi = 2$。又 $\\frac{d}{dx}\\int_0^{x^2} \\sin t\\,dt = 2x\\sin(x^2)$。'
          ],
          related: ['integration-calculus', 'derivatives', 'lebesgue-integral']
        }
      ]
    },
    {
      id: 'complex-analysis',
      name: '复分析',
      en: 'COMPLEX ANALYSIS',
      brief: '复变量上的可微函数',
      color: '#9d8fe8',
      angle: 170,
      topics: [
        {
          id: 'holomorphic-functions',
          name: '全纯函数',
          brief: '在复变量意义下可微的函数',
          keywords: ['全纯', '复可导', '柯西-黎曼方程', '解析函数'],
          definition: [
            '设 $f$ 定义在复平面区域 $D$ 上。若极限 $\\lim_{h \\to 0} \\frac{f(z_0 + h) - f(z_0)}{h}$ 存在（$h$ 为复数），则称 $f$ 在 $z_0$ **复可导**或**全纯**。在 $D$ 上处处全纯的函数称为全纯函数。',
            '全纯等价于实可微且满足柯西–黎曼方程：$u_x = v_y$，$u_y = -v_x$，其中 $f = u + iv$。'
          ],
          intuition: [
            '复导数要求从**所有方向**逼近的差商极限相同，比实可导强得多。这一强条件带来惊人的刚性：全纯函数自动无穷次可微，并且可以展开为幂级数。',
            '全纯函数是“角度保持”的映射（共形），因此与流体力学、电磁学、势论紧密相连。'
          ],
          formulas: [
            {
              tex: 'f\'(z_0) = \\lim_{h \\to 0} \\frac{f(z_0 + h) - f(z_0)}{h}',
              caption: '复导数的定义：$h$ 可以在复平面内沿任意方向趋于零。'
            },
            {
              tex: '\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y},\\quad \\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}',
              caption: '柯西–黎曼方程，全纯性的等价刻画。'
            },
            {
              tex: 'f(z) = \\sum_{n=0}^{\\infty} a_n (z - z_0)^n,\\quad a_n = \\frac{f^{(n)}(z_0)}{n!}',
              caption: '全纯函数在收敛圆内可展开为 Taylor 级数。'
            }
          ],
          example: [
            '$f(z) = z^2$ 全纯，$f\'(z) = 2z$。$f(z) = \\bar z$ 不是全纯的：差商 $\\bar h / h$ 依赖 $h$ 的辐角，沿不同方向极限不同。'
          ],
          related: ['cauchy-integral-theorem', 'residues', 'conformal-maps']
        },
        {
          id: 'cauchy-integral-theorem',
          name: '柯西积分定理',
          brief: '在相应条件下闭路积分为零',
          keywords: ['柯西积分定理', '柯西积分公式', '路径无关', '单连通'],
          definition: [
            '设 $f$ 在单连通区域 $D$ 上全纯，$\\gamma$ 是 $D$ 内一条分段光滑闭曲线，则 $\\oint_\\gamma f(z)\\,dz = 0$。',
            '由此得到柯西积分公式：对 $\\gamma$ 围成区域中的点 $a$，$f(a) = \\frac{1}{2\\pi i} \\oint_\\gamma \\frac{f(z)}{z - a}\\,dz$。'
          ],
          intuition: [
            '全纯函数的积分对路径不敏感（路径形变不变性），闭路积分为零。这与实函数保守场 $\\oint \\mathbf{F}\\cdot d\\mathbf{r} = 0$ 类似。',
            '柯西公式说明：全纯函数在内部一点的值，完全由边界上的值决定。这是复分析“刚性”的核心，也是留数定理与最大模原理的来源。'
          ],
          formulas: [
            {
              tex: '\\oint_\\gamma f(z)\\,dz = 0',
              caption: '柯西积分定理：单连通区域内全纯函数的闭路积分为零。'
            },
            {
              tex: 'f(a) = \\frac{1}{2\\pi i} \\oint_\\gamma \\frac{f(z)}{z - a}\\,dz',
              caption: '柯西积分公式：内部值由边界值决定。'
            },
            {
              tex: 'f^{(n)}(a) = \\frac{n!}{2\\pi i} \\oint_\\gamma \\frac{f(z)}{(z - a)^{n+1}}\\,dz',
              caption: '高阶导数公式：全纯函数自动无穷次可微。'
            }
          ],
          example: [
            '$\\oint_{|z|=1} \\frac{1}{z}\\,dz = 2\\pi i$，因为被积函数在围道内部的 $z=0$ 处有极点，不满足全纯前提；而 $\\oint_{|z|=1} z^2\\,dz = 0$。'
          ],
          related: ['holomorphic-functions', 'residues', 'conformal-maps']
        },
        {
          id: 'residues',
          name: '留数',
          brief: '提取孤立奇点的局部信息',
          keywords: ['留数', '洛朗级数', '孤立奇点', '留数定理', '围道积分'],
          definition: [
            '设 $a$ 是 $f$ 的孤立奇点，$f$ 在 $0 < |z - a| < R$ 内全纯。其洛朗展开 $f(z) = \\sum_{n=-\\infty}^{\\infty} c_n (z - a)^n$ 中系数 $c_{-1}$ 称为 $f$ 在 $a$ 处的**留数**，记 $\\operatorname{Res}(f, a)$。',
            '留数定理：若 $f$ 在正向分段光滑简单闭曲线 $\\gamma$ 及其内部的某开邻域除有限个内部孤立奇点外全纯，则 $\\oint_\\gamma f(z)\\,dz = 2\\pi i \\sum_k \\operatorname{Res}(f, a_k)$。'
          ],
          intuition: [
            '洛朗级数把函数在奇点附近分解为“主部 + 解析部分”。沿闭路积分一圈时所有项都消失，只有 $1/(z-a)$ 项留下 $2\\pi i$ 的贡献，因此留数捕捉了奇点的“净效应”。',
            '留数定理把复杂的围道积分化为代数计算（求系数），是计算实积分的强大工具。'
          ],
          formulas: [
            {
              tex: '\\operatorname{Res}(f, a) = c_{-1} = \\frac{1}{2\\pi i} \\oint_{|z-a|=\\rho} f(z)\\,dz',
              caption: '留数的积分定义。'
            },
            {
              tex: '\\oint_\\gamma f(z)\\,dz = 2\\pi i \\sum_{k} \\operatorname{Res}(f, a_k)',
              caption: '留数定理。'
            },
            {
              tex: '\\operatorname{Res}\\left(\\frac{g}{h}, a\\right) = \\frac{g(a)}{h\'(a)}\\quad \\text{（$a$ 为一阶极点）}',
              caption: '一阶极点处留数的快捷公式。'
            }
          ],
          example: [
            '$\\int_{-\\infty}^{\\infty} \\frac{1}{1+x^2}\\,dx = \\pi$：在上半平面取大半圆围道，$f(z) = 1/(1+z^2)$ 在 $z=i$ 的留数为 $1/(2i)$，故积分为 $2\\pi i \\cdot 1/(2i) = \\pi$。'
          ],
          related: ['cauchy-integral-theorem', 'holomorphic-functions', 'analytic-continuation']
        },
        {
          id: 'conformal-maps',
          name: '共形映射',
          brief: '研究局部保角的映射',
          keywords: ['共形映射', '保角', '黎曼映射定理', '莫比乌斯变换'],
          definition: [
            '若 $f$ 在区域 $D$ 上全纯且 $f\'(z) \\ne 0$，则 $f$ 在每点局部保持角度的大小与方向，称为**共形映射**。',
            '黎曼映射定理：任何单连通非空真开集 $\\Omega \\subsetneq \\mathbb{C}$ 都可共形地映到单位圆盘。'
          ],
          intuition: [
            '共形映射在无穷小尺度上像一个旋转加伸缩，因此保持角度。它把复杂区域上的问题“搬运”到标准区域（圆盘、上半平面），在那里求解后再搬回来。',
            '在流体力学中，共形映射把绕复杂物体的流动化为绕圆柱的流动；在电磁学中用于求解边界值问题。'
          ],
          formulas: [
            {
              tex: 'f \\text{ 共形} \\iff f \\text{ 全纯且 } f\'(z) \\ne 0',
              caption: '共形性的局部刻画。'
            },
            {
              tex: 'w = \\frac{z - a}{1 - \\bar a z},\\quad |a| < 1',
              caption: '单位圆盘到自身的分式线性变换，把 $a$ 映到 $0$。'
            },
            {
              tex: 'w = e^{i\\theta} \\frac{z - z_0}{z - \\bar z_0}',
              caption: '上半平面到单位圆盘的共形映射。'
            }
          ],
          example: [
            'Joukowski 变换 $w = z + 1/z$ 把圆映射为机翼剖面形状，是空气动力学中的经典应用。'
          ],
          related: ['holomorphic-functions', 'cauchy-integral-theorem', 'analytic-continuation']
        }
      ]
    }
  ]
};