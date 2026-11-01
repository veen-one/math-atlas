/* 分析学科 · 内容深化（调和分析、微分方程、动力系统） */
window.ATLAS = window.ATLAS || {};
window.ATLAS.extras = window.ATLAS.extras || {};

window.ATLAS.extras['analysis/fourier-series'] = {
  insight: '傅里叶级数把周期函数展开到正交基 $\\{e^{inx}\\}$ 上；在 $L^2$ 中这是完备正交基，收敛是均方收敛。逐点收敛更微妙（Carleson 定理：$L^2$ 函数几乎处处收敛），而不连续点附近会出现 Gibbs 现象。',
  examples: [
    '方波的傅里叶系数按 $1/n$ 衰减，三角波按 $1/n^2$ 衰减。系数衰减速度反映函数的光滑性：越光滑，频谱衰减越快。',
    '用傅里叶级数求 $\\sum 1/n^2$：对 $f(x)=x$ 在 $(-\\pi,\\pi)$ 上展开，Parseval 恒等式给出 $\\sum_{n\\ge1}1/n^2=\\pi^2/6$。'
  ]
};

window.ATLAS.extras['analysis/fourier-transform'] = {
  insight: '傅里叶变换把微分变成乘法、把卷积变成乘法，是求解线性常系数 PDE 的基本工具。变换的衰减性与函数光滑性对偶：函数越光滑，频谱衰减越快；函数越局部化，频谱越展宽。',
  examples: [
    '高斯函数 $e^{-x^2}$ 的傅里叶变换仍是高斯函数（自对偶），这是热核与概率论中的核心事实。',
    '用傅里叶变换解热方程 $u_t=\\alpha u_{xx}$：对 $x$ 变换得 $\\hat u_t=-4\\pi^2\\alpha\\xi^2\\hat u$，解得 $\\hat u=e^{-4\\pi^2\\alpha\\xi^2t}\\hat u_0$，再逆变换得到高斯核卷积。'
  ]
};

window.ATLAS.extras['analysis/convolution'] = {
  insight: '卷积是“加权滑动平均”，在频域变成乘法。它与傅里叶变换、拉普拉斯变换一起构成信号处理与概率论的基本语言：独立随机变量之和的分布就是卷积。',
  examples: [
    '两个 $U[0,1]$ 均匀分布的卷积是三角分布：密度在 $[0,2]$ 上先线性上升再线性下降。',
    '高斯模糊：图像与高斯核卷积，等价于在频域乘以高斯低通滤波器，抑制高频噪声。'
  ]
};

window.ATLAS.extras['analysis/wavelets'] = {
  insight: '小波用“可伸缩、可平移”的母小波构造多分辨率分析，克服了傅里叶变换缺乏局部性的缺点。正交小波基（如 Daubechies 小波）在信号压缩、去噪与数值求解中广泛使用。',
  examples: [
    'Haar 小波对分段常值信号产生稀疏表示；JPEG 2000 使用 CDF 9/7 小波做图像压缩。',
    '小波去噪：对信号做小波变换，阈值化小幅系数，再逆变换，可去除高频噪声而保留边缘。'
  ]
};

window.ATLAS.extras['analysis/time-frequency'] = {
  insight: '时频分析在“时间—频率”平面上表示信号；不确定性原理限制了两者的联合分辨率。短时傅里叶变换、Gabor 变换与小波变换是三种主要工具，选择取决于信号特征是平稳还是瞬态。',
  examples: [
    '语音频谱图：横轴时间、纵轴频率、颜色表示能量，可以读出音素与韵律。',
    '鸟鸣与鲸歌分析：时频图能区分不同音节与呼叫类型，用于生态监测与物种识别。'
  ]
};

window.ATLAS.extras['analysis/odes'] = {
  insight: 'ODE 的解是“由局部规则生成的轨迹”；存在唯一性依赖 Lipschitz 条件，失去它可能出现多解。线性方程可用积分因子、特征方程或 Laplace 变换求解；非线性方程一般只能定性或数值研究。',
  examples: [
    'Logistic 人口模型 $y\'=ry(1-y/K)$ 的解是 S 形曲线，最终趋于环境容量 $K$。',
    '$y\'=\\sqrt y$，$y(0)=0$ 有解 $y=0$ 与 $y=t^2/4$（$t\\ge0$），说明 Lipschitz 条件缺失时唯一性失败。'
  ]
};

window.ATLAS.extras['analysis/pdes'] = {
  insight: 'PDE 的分类（椭圆/抛物/双曲）决定了解的性质与适定边界条件。椭圆型描述平衡，抛物型描述扩散（不可逆、平滑），双曲型描述波动（可逆、有限传播速度）。非线性 PDE（如 Navier–Stokes）仍是研究前沿。',
  examples: [
    '热方程的基本解是高斯核，说明瞬时热源的影响会立即扩散到全空间（无限传播速度）。',
    '波动方程的 d\'Alembert 解 $u(x,t)=\\frac12[f(x-ct)+f(x+ct)]+\\frac{1}{2c}\\int_{x-ct}^{x+ct}g(s)\\,ds$ 表明扰动以速度 $c$ 沿特征线传播。'
  ]
};

window.ATLAS.extras['analysis/initial-boundary'] = {
  insight: '初值决定“从哪里开始”，边界条件决定“外界如何影响”。适定性（Hadamard）要求存在、唯一、连续依赖数据；不适定的初边值问题在数值上极难处理，需要正则化。',
  examples: [
    '热方程 + Dirichlet 边界 + 初值 $\\sin x$ 的解为 $e^{-\\alpha t}\\sin x$，随时间指数衰减。',
    '波动方程需要两个初值条件（位移与速度）；只给位移会导致解不唯一。'
  ]
};

window.ATLAS.extras['analysis/weak-solutions'] = {
  insight: '弱解通过分部积分把导数转移到测试函数上，降低了对解的光滑性要求。Sobolev 空间是弱解的天然舞台；Lax–Milgram 定理给出椭圆型弱解存在唯一的抽象框架，也是有限元方法的理论基础。',
  examples: [
    '$u(x)=|x|$ 是 $-u\'\'=2\\delta_0$ 的弱解，尽管它在 $0$ 处不可微。',
    '有限元方法在 $H^1$ 空间中寻找弱解，用分片多项式逼近，误差由 Céa 引理控制。'
  ]
};

window.ATLAS.extras['analysis/stability'] = {
  insight: '稳定性研究“扰动是否被放大”。线性化通过 Jacobian 特征值判断局部稳定性；Lyapunov 函数给出全局判据；结构稳定性则研究参数扰动下相图是否保持。稳定与渐近稳定不同：稳定只要求不远离，渐近稳定还要求收敛。',
  examples: [
    '阻尼单摆的平衡点：下平衡点渐近稳定，上平衡点不稳定（鞍点）。',
    '线性系统 $\\dot x=Ax$ 渐近稳定当且仅当 $A$ 的所有特征值实部为负（Lyapunov 定理）。'
  ]
};

window.ATLAS.extras['analysis/phase-space'] = {
  insight: '相空间把时间演化变成几何流动；轨线不相交（存在唯一性），因此相图是理解长期行为的“地图”。相空间的维数与结构（辛、耗散）决定了系统是否保守、是否有吸引子。',
  examples: [
    '单摆相图：闭合轨道对应周期摆动，开放轨道对应旋转，分界线连接不稳定平衡点。',
    '耗散系统的相空间体积随时间收缩（散度为负），吸引子的维数低于相空间维数。'
  ]
};

window.ATLAS.extras['analysis/equilibria-periodic-orbits'] = {
  insight: '平衡点是零速点，周期轨道是闭合轨线；它们的稳定性决定长期行为。Poincaré–Bendixson 定理说明平面自治系统的极限集只能是平衡点、周期轨或连接它们的轨道，这是平面动力系统的基本结构定理。',
  examples: [
    'Lotka–Volterra 系统的正平衡点周围是一族闭合轨道（无阻尼时），对应种群数量的周期振荡。',
    '极限环：van der Pol 振子存在孤立周期轨道，吸引附近所有轨线，是振荡器的数学模型。'
  ]
};

window.ATLAS.extras['analysis/bifurcation'] = {
  insight: '分岔是“参数跨过临界值时定性行为突变”。它解释了模式形成、振荡出现与混沌的起源。分岔图（参数与长期状态的关系）是实验与数值研究的核心工具。',
  examples: [
    '鞍结分岔 $\\dot x=\\mu-x^2$：$\\mu<0$ 无平衡点，$\\mu>0$ 出现一个稳定与一个不稳定平衡点。',
    'Hopf 分岔：平衡点失稳并产生小振幅周期轨道，是激光、化学反应振荡的数学模型。'
  ]
};

window.ATLAS.extras['analysis/chaos'] = {
  insight: '混沌是确定性系统的长期不可预测性：正 Lyapunov 指数意味着邻近轨线指数分离。混沌不等于随机：系统由确定规则驱动，但信息在演化中不断被拉伸与折叠，产生有效随机性。',
  examples: [
    'Lorenz 系统在 $\\sigma=10$、$\\rho=28$、$\\beta=8/3$ 时出现蝴蝶形奇怪吸引子，对初值极度敏感。',
    '逻辑斯蒂映射 $x_{n+1}=rx_n(1-x_n)$ 在 $r\\approx3.57$ 之后进入混沌区，其中夹杂着周期窗口。'
  ]
};

window.ATLAS.extras['analysis/ergodicity'] = {
  insight: '遍历性把“时间平均”与“空间平均”联系起来，是统计物理的基础假设。强混合性比遍历性更强：不仅时间平均收敛，而且相关性随时间衰减。遍历理论用测度论研究确定性系统的统计行为。',
  examples: [
    '无理旋转 $x\\mapsto x+\\alpha\\bmod1$ 是遍历但非混合的：轨道均匀分布，但相邻点始终保持相对位置。',
    '理想气体的统计力学假设遍历性，使微正则系综平均等于长时间平均；玻尔兹曼熵与遍历性密切相关。'
  ]
};