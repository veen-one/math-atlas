/* 分析学科 · 内容深化（实分析、复分析） */
window.ATLAS = window.ATLAS || {};
window.ATLAS.extras = window.ATLAS.extras || {};

window.ATLAS.extras['analysis/continuity-uniform'] = {
  insight: '一致连续可以理解为“函数的局部振荡幅度能一致地控制”。定义模连续函数 $\\omega(\\delta)=\\sup_{|x-y|<\\delta}|f(x)-f(y)|$，则一致连续等价于 $\\omega(\\delta)\\to0$。它比逐点连续强，但比 Lipschitz 连续弱：紧集上的连续函数必一致连续，却未必 Lipschitz。',
  examples: [
    '$f(x)=\\sqrt{x}$ 在 $[0,1]$ 上一致连续（紧集上的连续函数），但不是 Lipschitz 的：$|\\sqrt{x}-0|/|x-0|=1/\\sqrt{x}\\to\\infty$。这说明一致连续并不要求导数有界。',
    '$f(x)=\\sin(x^2)$ 在 $\\mathbb{R}$ 上连续但非一致连续：取 $x_n=\\sqrt{2n\\pi}$、$y_n=\\sqrt{2n\\pi+\\pi/2}$，则 $|x_n-y_n|\\to0$，而 $|f(x_n)-f(y_n)|=1$。函数在无穷远处振荡得越来越快。'
  ]
};

window.ATLAS.extras['analysis/uniform-convergence'] = {
  insight: '一致收敛就是上确界范数意义下的收敛：$\\|f_n-f\\|_\\infty\\to0$。逐点收敛只是每个坐标收敛，二者的差距反映了无穷维函数空间中“有界闭集未必紧”。Dini 定理给出一个补偿条件：在紧致空间上，连续实值函数列逐点单调收敛到连续函数时，逐点收敛自动升级为一致收敛。',
  examples: [
    '$f_n(x)=\\frac{x}{1+nx^2}$ 在 $[0,1]$ 上一致收敛到 $0$：最大值在 $x=1/\\sqrt n$ 处，等于 $\\frac{1}{2\\sqrt n}\\to0$，故 $\\|f_n\\|_\\infty\\to0$。',
    '幂级数 $\\sum_{n=0}^\\infty x^n$ 在 $[-r,r]$（$0<r<1$）上一致收敛（Weierstrass $M$-判别法，取 $M_n=r^n$），但在 $(-1,1)$ 上不一致收敛：部分和 $S_n(x)=\\frac{1-x^{n+1}}{1-x}$ 在 $x\\to1$ 时误差无界。'
  ]
};

window.ATLAS.extras['analysis/function-sequences'] = {
  insight: '函数列研究的核心是“极限是否继承性质”。逐点极限可能破坏连续性、可积性与可微性；一致收敛能保住连续性与积分，但即使一致收敛也不保证可微。可微性需要更强的条件，例如导数序列一致收敛。',
  examples: [
    '$f_n(x)=\\sqrt{x^2+1/n}$ 在 $[-1,1]$ 上一致收敛到 $|x|$：$|f_n(x)-|x||\\le 1/\\sqrt n$。每个 $f_n$ 都光滑，但极限 $|x|$ 在 $0$ 处不可微，说明一致收敛不保持可微性。',
    '$f_n(x)=x^n$ 在 $[0,1]$ 上逐点收敛到 $0$（$x<1$）与 $1$（$x=1$），极限函数不连续，说明逐点收敛连连续性都无法保持。'
  ]
};

window.ATLAS.extras['analysis/series'] = {
  insight: '级数收敛性本质上是部分和序列的收敛性。绝对收敛对应“可和性”与可重排性，条件收敛则依赖项与项之间的抵消。Dirichlet 判别法与 Abel 判别法把“部分和有界”和“系数单调趋于零”结合起来，是处理条件收敛的常用工具。',
  examples: [
    '交错级数 $\\sum_{n=1}^\\infty\\frac{(-1)^{n-1}}{\\sqrt n}$ 条件收敛：通项单调趋于 $0$，由莱布尼茨判别法收敛；但取绝对值后是 $p=1/2$ 的 $p$-级数，发散。',
    'Dirichlet 判别法：若部分和 $\\sum_{k=1}^n a_k$ 有界、$b_n$ 单调趋于 $0$，则 $\\sum a_nb_n$ 收敛。例如 $\\sum\\frac{\\sin n}{n}$ 收敛，但它不是绝对收敛的。'
  ]
};

window.ATLAS.extras['analysis/completeness-reals'] = {
  insight: '完备性有多种等价形式，其中“确界原理”最常用于存在性证明：只要证明一个集合非空且有上界，就自动得到上确界。完备性是连续性的底层保证；有理数域在同样运算下不具备这些性质，因此分析必须建立在 $\\mathbb{R}$ 上。',
  examples: [
    '用确界原理证明单调有界数列收敛：设 $a_n$ 单调递增且有上界，令 $s=\\sup\\{a_n\\}$。对任意 $\\varepsilon>0$，存在 $N$ 使 $a_N>s-\\varepsilon$；由单调性，$n\\ge N$ 时 $s-\\varepsilon<a_n\\le s$，故 $a_n\\to s$。',
    '闭区间套定理：若 $[a_n,b_n]$ 满足 $[a_{n+1},b_{n+1}]\\subseteq[a_n,b_n]$ 且长度趋于 $0$，则交集恰有一个点。这是二分法求根与压缩映射原理的几何基础。'
  ]
};

window.ATLAS.extras['analysis/fundamental-theorem-calculus'] = {
  insight: '微积分基本定理把“求和”与“求变化率”统一起来，但它的成立依赖 $f$ 的连续性。若 $f$ 只是黎曼可积，$F(x)=\\int_a^x f$ 仍然连续，并在 $f$ 的每个连续点满足 $F\\prime=f$，但不保证处处可导；勒贝格积分下的绝对连续函数版本给出了更精细的对应。',
  examples: [
    '用变上限积分定义对数：$\\ln x=\\int_1^x\\frac{dt}{t}$。由基本定理，$\\frac{d}{dx}\\ln x=1/x$，且 $\\ln1=0$，因此这与通常的对数定义一致。',
    '若 $f$ 有跳跃间断，例如 $f(x)=0$（$x<0$）与 $1$（$x\\ge0$），则 $\\int_{-1}^1 f=1$，但 $f$ 没有原函数（达布定理：导数具有介值性）。这说明基本定理的连续性条件不可省略。'
  ]
};

window.ATLAS.extras['analysis/holomorphic-functions'] = {
  insight: '全纯性是一个极强的局部条件：它不仅要求实可微，还要求柯西–黎曼方程，这使得全纯函数自动实解析。一个有用的等价刻画是：$f$ 全纯当且仅当其微分 $df$ 是复线性的，即 $df\\circ J=i\\,df$。',
  examples: [
    '$f(z)=e^z$ 全纯且 $(e^z)\'=e^z$。它的实部 $u=e^x\\cos y$ 与虚部 $v=e^x\\sin y$ 满足 $u_x=v_y$、$u_y=-v_x$。',
    '$f(z)=|z|^2$ 只在 $z=0$ 处满足柯西–黎曼方程，因此除原点外处处不解析。这说明“在某点可导”与“在邻域内全纯”是不同概念。'
  ]
};

window.ATLAS.extras['analysis/cauchy-integral-theorem'] = {
  insight: '柯西定理的实质是“全纯函数的路径积分只依赖端点与绕数”。用留数语言说，闭路积分等于 $2\\pi i$ 乘以内部奇点的留数和；内部无奇点时积分自然为零。这个性质让复积分像保守场一样可以自由变形路径。',
  examples: [
    '计算 $\\oint_{|z|=2}\\frac{1}{z^2-1}\\,dz$：被积函数在 $z=\\pm1$ 有两个一阶极点，留数分别为 $1/2$ 与 $-1/2$，和为 $0$，故积分为 $0$。',
    '柯西定理要求区域单连通。若 $f$ 只在环形区域 $1<|z|<2$ 全纯，沿 $|z|=1.5$ 的积分不一定为零：环形区域的洞会产生绕数效应。'
  ]
};

window.ATLAS.extras['analysis/residues'] = {
  insight: '留数是洛朗展开中 $1/(z-a)$ 项的系数，只依赖奇点附近的局部行为。计算实积分时，常用大圆弧引理与约当引理控制辅助弧上的积分，使围道积分化为留数和；高阶极点可用求导公式计算留数。',
  examples: [
    '计算 $\\int_0^\\infty\\frac{\\sin x}{x}\\,dx$：考虑 $\\oint\\frac{e^{iz}}{z}\\,dz$ 沿上半平面大半圆。$z=0$ 处留数为 $1$，约当引理给出弧上积分趋于 $0$，故积分为 $\\pi/2$。',
    '二阶极点留数：$f(z)=\\frac{1}{(z-1)^2(z+1)}$ 在 $z=1$ 的留数为 $\\frac{d}{dz}\\left[\\frac{1}{z+1}\\right]_{z=1}=-\\frac14$。'
  ]
};

window.ATLAS.extras['analysis/conformal-maps'] = {
  insight: '共形映射的局部行为由导数给出：$f\'(z_0)\\ne0$ 时，映射在 $z_0$ 附近近似为旋转 $\\arg f\'(z_0)$ 加伸缩 $|f\'(z_0)|$，因此保持角度但不保持长度。黎曼映射定理保证单连通区域都能共形地变成圆盘，但映射一般没有初等表达式。',
  examples: [
    'Cayley 变换 $w=\\frac{z-i}{z+i}$ 把上半平面共形地映到单位圆盘：实轴映到单位圆周，$i$ 映到 $0$，无穷远点映到 $1$。',
    '用共形映射解 Laplace 方程：把带裂缝的区域映到上半平面，在上半平面写出调和函数，再拉回原区域，就得到原问题的解。这是流体力学中绕流问题的标准技巧。'
  ]
};