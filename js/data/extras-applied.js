/* 应用与计算数学 · 内容深化 */
window.ATLAS = window.ATLAS || {};
window.ATLAS.extras = window.ATLAS.extras || {};

window.ATLAS.extras['applied/numerical-stability'] = {
  insight: '稳定性描述算法是否放大误差；稳定算法保证舍入误差有界，即使问题本身病态。稳定性是算法属性，条件数是问题属性，二者需要分开判断。',
  examples: [
    '倒推递推 $y_{n-1}=(y_n-1)/3$ 不稳定：初始误差每步放大 $3$ 倍，$100$ 步后失去全部精度。',
    '正向递推 $y_{n+1}=3y_n+1$ 虽然增长，但误差不会被额外放大，属于稳定算法。'
  ]
};

window.ATLAS.extras['applied/condition-numbers'] = {
  insight: '条件数衡量问题对输入扰动的敏感度，与算法无关；$\\kappa(A)$ 很大时，输入的小误差会被放大为解的大误差。',
  examples: [
    '$A=\\begin{pmatrix}1&1\\\\1&1.0001\\end{pmatrix}$ 的条件数约 $4\\times10^4$，$b$ 的微小变化会使解剧烈变化。',
    'Hilbert 矩阵是经典病态矩阵，$8\\times8$ 的条件数约 $1.5\\times10^{10}$。'
  ]
};

window.ATLAS.extras['applied/numerical-integration'] = {
  insight: '数值积分用有限个函数值的加权和近似积分；Gauss 求积通过选择最优节点，使 $n$ 个点精确积分 $2n-1$ 次多项式。',
  examples: [
    '梯形法误差 $O(h^2)$，Simpson 法误差 $O(h^4)$，后者对光滑函数更高效。',
    '$4$ 点 Gauss–Legendre 求积可精确积分 $7$ 次多项式。'
  ]
};

window.ATLAS.extras['applied/error-analysis'] = {
  insight: '截断误差来自数学近似，舍入误差来自浮点表示；两者此消彼长，存在最优步长使总误差最小。',
  examples: [
    '中心差分 $f\'(x)\\approx(f(x+h)-f(x-h))/(2h)$ 的截断误差 $O(h^2)$、舍入误差 $O(\\varepsilon/h)$，最优 $h\\sim\\varepsilon^{1/3}$。',
    '双精度浮点的机器精度约 $2.2\\times10^{-16}$，这是舍入误差的尺度。'
  ]
};

window.ATLAS.extras['applied/linear-programming'] = {
  insight: '线性规划的最优解必在可行域顶点取得；对偶问题给出影子价格，解释约束的边际价值。',
  examples: [
    '$\\max3x+2y$，约束 $x+y\\le4$、$x\\le2$、$x,y\\ge0$：最优解在 $(2,2)$，目标值 $10$。',
    '单纯形法沿顶点移动，内点法在多项式时间内求解。'
  ]
};

window.ATLAS.extras['applied/convex-optimization'] = {
  insight: '凸优化的局部最优解就是全局最优解；KKT 条件刻画最优性，是机器学习与运筹学的核心工具。',
  examples: [
    '最小二乘 $\\min\\|Ax-b\\|^2$ 的解为 $(A^\\top A)^{-1}A^\\top b$（$A$ 列满秩）。',
    '凸函数无约束最优的一阶条件是 $\\nabla f(x^*)=0$。'
  ]
};

window.ATLAS.extras['applied/nonlinear-optimization'] = {
  insight: '梯度下降用一阶信息，牛顿法用二阶信息；非凸问题可能陷入局部极小或鞍点，需要随机初始化或全局方法。',
  examples: [
    'Rosenbrock 函数 $f=(1-x)^2+100(y-x^2)^2$ 有狭长弯曲山谷，梯度下降收敛慢。',
    '牛顿法在靠近解时二次收敛，但需要计算 Hessian 并求逆。'
  ]
};

window.ATLAS.extras['applied/duality'] = {
  insight: '对偶问题从另一侧逼近原问题；弱对偶给出下界，强对偶在凸问题与 Slater 条件下成立。',
  examples: [
    '线性规划的对偶仍是线性规划，且强对偶总成立。',
    '对偶变量可解释为约束的影子价格。'
  ]
};

window.ATLAS.extras['applied/numerical-linear-algebra'] = {
  insight: '矩阵分解把复杂问题化为简单操作；LU 求解线性方程组，QR 稳定求解最小二乘，迭代法适合大规模稀疏矩阵。',
  examples: [
    'LU 分解把求逆变成前代与回代，复杂度 $O(n^3)$。',
    '共轭梯度法求解对称正定系统，每步只需矩阵-向量乘法。'
  ]
};

window.ATLAS.extras['applied/scheduling'] = {
  insight: '调度在资源与时间约束下安排任务；许多变体是 NP 难的，需要整数规划或启发式算法。',
  examples: [
    '最小化最大完工时间（makespan）是经典调度目标。',
    '两机流水车间可用 Johnson 规则在多项式时间求得最优顺序。'
  ]
};

window.ATLAS.extras['applied/ill-posedness'] = {
  insight: '不适定问题解不连续依赖数据；逆问题常因紧算子求逆不连续而病态，需要正则化。',
  examples: [
    '数值微分是不适定的：函数值的小扰动会导致导数的巨大变化。',
    '从模糊图像恢复清晰图像时，逆映射会放大噪声。'
  ]
};

window.ATLAS.extras['applied/identifiability'] = {
  insight: '可辨识性判断不同参数能否被数据区分；若参数只以组合形式出现，则不可单独辨识。',
  examples: [
    '模型 $y=(ab)x$ 只能辨识乘积 $ab$，$a$ 与 $b$ 不可单独辨识。',
    '流行病模型中感染率与报告率可能混在一起，需要额外数据才能分开。'
  ]
};

window.ATLAS.extras['applied/parameter-inversion'] = {
  insight: '反演从观测估计参数；贝叶斯反演不仅给点估计，还给出参数的不确定性（后验分布）。',
  examples: [
    '最小二乘反演 $\\hat\\theta=\\arg\\min\\|G(\\theta)-y\\|^2$。',
    '从重力测量反演地下密度分布。'
  ]
};

window.ATLAS.extras['applied/imaging-reconstruction'] = {
  insight: '成像重建从投影恢复内部结构；CT 的数学模型是 Radon 变换，滤波反投影是经典算法。',
  examples: [
    '医学 CT 从约 $180$ 个角度的投影重建断层图像。',
    'MRI 通过傅里叶采样重建图像。'
  ]
};

window.ATLAS.extras['applied/regularized-inversion'] = {
  insight: '正则化用先验换取稳定性；Tikhonov 正则化产生平滑解，$L_1$ 正则化促进稀疏解。',
  examples: [
    'Tikhonov 正则化有闭式解 $x_\\lambda=(A^\\top A+\\lambda I)^{-1}A^\\top y$。',
    '压缩感知利用稀疏先验，从远少于未知数的测量中恢复信号。'
  ]
};

window.ATLAS.extras['applied/state-space'] = {
  insight: '状态空间用一阶方程组描述系统；状态是系统的“记忆”，知道状态与未来输入就能确定未来演化。',
  examples: [
    '弹簧-质量-阻尼系统 $m\\ddot x+c\\dot x+kx=F$ 可写成状态 $(x,\\dot x)$ 的一阶系统。',
    '传递函数 $G(s)=C(sI-A)^{-1}B+D$ 与状态空间模型等价。'
  ]
};

window.ATLAS.extras['applied/controllability-observability'] = {
  insight: '可控性问“能否把系统推到任意状态”，可观性问“能否从输出重建内部状态”；Kalman 秩判据给出判定。',
  examples: [
    '双积分器 $\\dot x_1=x_2$、$\\dot x_2=u$、$y=x_1$ 可控且可观。',
    '不可控系统存在无法到达的状态子空间，极点配置受到限制。'
  ]
};

window.ATLAS.extras['applied/feedback-control'] = {
  insight: '反馈根据误差调整输入；负反馈抑制扰动，若系统可控，可任意配置闭环极点。',
  examples: [
    'PID 控制：比例项响应当前误差，积分项消除稳态误差，微分项抑制超调。',
    '倒立摆通过状态反馈稳定：测量角度与角速度，施加相反的小车加速度。'
  ]
};

window.ATLAS.extras['applied/robust-control'] = {
  insight: '鲁棒控制在模型不确定下保持稳定性与性能；$H_\\infty$ 控制最小化最坏情况下的扰动放大。',
  examples: [
    '小增益定理：若回路增益乘积小于 $1$，则反馈稳定。',
    '飞机自动驾驶仪在气动参数随高度变化时仍能稳定飞行。'
  ]
};

window.ATLAS.extras['applied/optimal-control'] = {
  insight: '最优控制在动态约束下优化代价泛函；Pontryagin 极大值原理给出必要条件，HJB 方程给出充分条件。',
  examples: [
    'LQR 的最优反馈 $u=-R^{-1}B^\\top Px$，$P$ 满足 Riccati 方程。',
    '火箭软着陆的最小燃料控制呈 bang-bang 形式。'
  ]
};

window.ATLAS.extras['applied/classical-mechanics'] = {
  insight: '经典力学可用 Newton、Lagrange 或 Hamilton 表述；驻作用量原理最易推广到场论与量子力学。',
  examples: [
    '单摆 $L=\\frac12ml^2\\dot\\theta^2+mgl\\cos\\theta$ 的 Euler–Lagrange 方程给出 $\\ddot\\theta+(g/l)\\sin\\theta=0$。',
    '中心力场具有旋转对称，角动量守恒，行星轨道在平面内。'
  ]
};

window.ATLAS.extras['applied/quantum-theory'] = {
  insight: '量子力学用复希尔伯特空间中的状态向量与自伴算子描述；测量结果对应谱，概率由内积给出。',
  examples: [
    '无限深势阱的能级 $E_n=\\frac{n^2\\pi^2\\hbar^2}{2mL^2}$。',
    '不确定性原理 $\\Delta x\\,\\Delta p\\ge\\hbar/2$ 来自 $[\\hat x,\\hat p]=i\\hbar$。'
  ]
};

window.ATLAS.extras['applied/statistical-mechanics'] = {
  insight: '统计力学从微观概率分布导出宏观热力学量；配分函数 $Z$ 是核心，自由能、熵、内能都由它给出。',
  examples: [
    '二能级系统 $Z=1+e^{-\\beta\\Delta E}$，低温时占据低能级。',
    '相变对应配分函数在热力学极限下的非解析行为。'
  ]
};

window.ATLAS.extras['applied/symmetry-conservation'] = {
  insight: 'Noether 定理从满足作用量变分不变条件的连续对称导出守恒量；需核对边界项及相互独立性，这是理论物理的基本组织原则。',
  examples: [
    '时间平移对称对应能量守恒，空间平移对称对应动量守恒。',
    '旋转对称对应角动量守恒，中心力场因此有平面轨道。'
  ]
};

window.ATLAS.extras['applied/mesh-discretization'] = {
  insight: '离散化把连续问题转成有限维代数系统；网格越细误差越小，但计算量也越大，需要在精度与成本间权衡。',
  examples: [
    '一维 Poisson 方程用步长 $h$ 的差分格式，误差为 $O(h^2)$。',
    '非结构网格适应复杂几何，适合有限元与有限体积方法。'
  ]
};

window.ATLAS.extras['applied/pde-models'] = {
  insight: '三类 PDE 分别描述平衡（椭圆）、扩散（抛物）与波动（双曲）；分类决定解的性质与数值方法。',
  examples: [
    '热方程 $u_t=\\alpha\\Delta u$ 平滑初值，最终趋于稳态。',
    '波动方程 $u_{tt}=c^2\\Delta u$ 的扰动以速度 $c$ 传播。'
  ]
};

window.ATLAS.extras['applied/finite-differences'] = {
  insight: '有限差分用差商近似导数；显式格式简单但受 CFL 稳定性条件限制，隐式格式无条件稳定但每步需解线性方程组。',
  examples: [
    '热方程显式格式 $u_i^{n+1}=u_i^n+\\frac{\\alpha\\Delta t}{h^2}(u_{i+1}^n-2u_i^n+u_{i-1}^n)$。',
    '波动方程的 CFL 条件 $c\\Delta t/h\\le1$。'
  ]
};

window.ATLAS.extras['applied/finite-elements'] = {
  insight: '有限元用弱形式与分片多项式；它适合复杂几何与变系数问题，是工程仿真最常用的方法。',
  examples: [
    'Poisson 方程的弱形式 $\\int\\nabla u\\cdot\\nabla v=\\int fv$。',
    '三角形网格上的帽子函数组装成稀疏刚度矩阵。'
  ]
};

window.ATLAS.extras['applied/simulation-validation'] = {
  insight: '验证（verification）检查数值实现是否正确，确认（validation）检查模型是否反映现实；两者缺一不可。',
  examples: [
    '网格收敛研究：加密网格后结果应收敛到稳定值。',
    '翼型仿真与风洞数据比较，若偏差大则需要修正湍流模型。'
  ]
};

window.ATLAS.extras['applied/stochastic-price-models'] = {
  insight: '几何布朗运动是经典价格模型，假设对数收益率正态；真实市场有厚尾、波动率聚集与跳跃。',
  examples: [
    '$dS_t=\\mu S_t\\,dt+\\sigma S_t\\,dW_t$ 的解为 $S_t=S_0e^{(\\mu-\\sigma^2/2)t+\\sigma W_t}$。',
    'Heston 模型加入随机波动率，能更好拟合期权微笑。'
  ]
};

window.ATLAS.extras['applied/no-arbitrage-pricing'] = {
  insight: '在有限事件树且可自由多空的市场中，无套利等价于存在等价风险中性测度；可复制收益的折现价格等于其折现收益在任一该测度下的期望。不完备市场的不可复制收益一般不能据此得到唯一价格。',
  examples: [
    'Black–Scholes 欧式看涨价格 $C=S_0N(d_1)-Ke^{-rT}N(d_2)$。',
    '风险中性定价 $V_t=e^{-r(T-t)}\\mathbb{E}^{\\mathbb{Q}}[V_T\\mid\\mathcal{F}_t]$。'
  ]
};

window.ATLAS.extras['applied/hedging-replication'] = {
  insight: '对冲用标的资产构造组合抵消风险；复制构造与衍生品收益相同的组合，从而锁定价格。',
  examples: [
    'Delta 对冲持有 $\\Delta=\\partial C/\\partial S=N(d_1)$ 份股票，使组合瞬时无风险。',
    '离散调整与交易成本导致对冲误差，这是实际风险管理的重要问题。'
  ]
};

window.ATLAS.extras['applied/monte-carlo'] = {
  insight: '蒙特卡洛用随机样本估计期望，误差 $O(1/\\sqrt N)$ 与维数无关；它适合高维期权定价与风险模拟。',
  examples: [
    '亚洲期权定价：模拟 $10$ 万条价格路径，取平均收益的折现。',
    '方差缩减技术（重要性采样、控制变量）可显著提高精度。'
  ]
};

window.ATLAS.extras['applied/risk-measures'] = {
  insight: 'VaR 是给定置信水平下的最大损失分位数，CVaR 是超过 VaR 的平均损失；CVaR 满足一致性风险度量公理。',
  examples: [
    '$95\\%$ VaR 回答“$95\\%$ 情况下最多亏多少”。',
    '损失分布有 $1\\%$ 概率亏 100 万、$99\\%$ 概率亏 1 万时，CVaR 约 100 万，揭示尾部风险。'
  ]
};

window.ATLAS.extras['applied/optimal-portfolio'] = {
  insight: 'Markowitz 均值-方差优化在给定收益下最小化风险；分散化降低风险，有效前沿给出最优权衡。',
  examples: [
    '两个不相关资产等权组合的波动低于任一资产，体现分散化收益。',
    '最大夏普组合的权重为 $w^*=\\frac{\\Sigma^{-1}\\mu}{\\mathbf{1}^\\top\\Sigma^{-1}\\mu}$（示意）。'
  ]
};

window.ATLAS.extras['applied/population-dynamics'] = {
  insight: '种群动力学用微分方程描述数量变化；Logistic 增长加入环境容量，Lotka–Volterra 描述捕食者与被捕食者的周期振荡。',
  examples: [
    '细菌培养 $\\dot N=rN(1-N/K)$ 呈 S 形增长，最终趋于容量 $K$。',
    'Lotka–Volterra 系统的轨线是周期轨道，捕食者与被捕食者数量相互制约。'
  ]
};

window.ATLAS.extras['applied/epidemic-models'] = {
  insight: 'SIR 模型把人群分为易感、感染、康复三类；基本再生数 $R_0$ 决定疫情是否暴发。',
  examples: [
    '$R_0=\\beta/\\gamma$；$R_0>1$ 时感染人数增长，$R_0<1$ 时消退。',
    '麻疹 $R_0\\approx12-18$，群体免疫阈值超过 $90\\%$。'
  ]
};

window.ATLAS.extras['applied/reaction-diffusion'] = {
  insight: '反应扩散方程同时描述局部反应与空间扩散；当扩散系数差异足够大时，均匀稳态失稳，形成 Turing 斑图。',
  examples: [
    'Gray–Scott 模型可产生斑点、条纹与波浪等图案。',
    'Turing 机制解释了斑马条纹与贝壳花纹的形成。'
  ]
};

window.ATLAS.extras['applied/biological-networks'] = {
  insight: '生物网络用图表示分子间的相互作用；度分布、模体与鲁棒性刻画网络的结构与功能。',
  examples: [
    '基因调控网络中的前馈环模体用于过滤噪声与产生时序响应。',
    '无标度网络的度分布 $P(k)\\sim k^{-\\gamma}$，对随机故障鲁棒但对枢纽节点脆弱。'
  ]
};

window.ATLAS.extras['applied/parameter-calibration'] = {
  insight: '参数校准用观测数据估计模型参数；模型参数往往不可直接测量，只能通过拟合整体行为间接估计。',
  examples: [
    '用疫情早期数据校准 SIR 模型的 $\\beta,\\gamma$，估计 $R_0$ 与峰值时间。',
    '贝叶斯校准用 MCMC 得到参数的后验分布，量化不确定性。'
  ]
};