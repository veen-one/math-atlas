/* 概率与统计 · 内容深化 */
window.ATLAS = window.ATLAS || {};
window.ATLAS.extras = window.ATLAS.extras || {};

window.ATLAS.extras['probability/probability-space'] = {
  insight: '概率空间由样本空间、事件域（$\\sigma$ 代数）与概率测度组成；可数可加性是公理的核心，它保证极限运算与概率可以交换。',
  examples: [
    '掷骰子：$\\Omega=\\{1,\\dots,6\\}$，$P(\\{i\\})=1/6$。',
    '加法公式 $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$。'
  ]
};

window.ATLAS.extras['probability/random-variables'] = {
  insight: '随机变量是可测映射，把随机结果映射为数值；分布函数 $F_X(x)=P(X\\le x)$ 包含全部概率信息。',
  examples: [
    '掷骰子的分布函数在 $[k,k+1)$ 上取 $k/6$。',
    '连续型随机变量的密度满足 $F_X(x)=\\int_{-\\infty}^x f(t)\\,dt$。'
  ]
};

window.ATLAS.extras['probability/distributions'] = {
  insight: '不同分布对应不同随机机制；正态分布是中心极限定理的极限，因此无处不在。',
  examples: [
    '抛 $10$ 次公平硬币，正面次数 $X\\sim B(10,0.5)$，$P(X=5)\\approx0.246$。',
    '单位时间事件数常用泊松分布 $\\mathrm{Poisson}(\\lambda)$。'
  ]
};

window.ATLAS.extras['probability/expectation-variance'] = {
  insight: '期望是长期平均，方差是波动大小；期望的线性性无需独立性，这是它最常用的性质。',
  examples: [
    '掷骰子 $\\mathbb{E}[X]=3.5$，$\\mathrm{Var}(X)=35/12\\approx2.92$。',
    '$\\mathbb{E}[aX+b]=a\\mathbb{E}[X]+b$。'
  ]
};

window.ATLAS.extras['probability/conditional-probability'] = {
  insight: '条件概率是信息更新：知道 $B$ 发生后，样本空间缩小到 $B$；Bayes 公式把条件反转。',
  examples: [
    '医学检测：患病率 $1\\%$、灵敏度 $99\\%$、特异度 $95\\%$，阳性后患病概率约 $16.7\\%$。',
    '全概率公式 $P(A)=\\sum_iP(A\\mid B_i)P(B_i)$。'
  ]
};

window.ATLAS.extras['probability/stopping-times'] = {
  insight: '停时是“不偷看未来”的随机时刻；可选停时定理说明鞅在停时处期望不变（在适当条件下）。',
  examples: [
    '随机游走首次到达 $a$ 或 $-b$ 的时刻是停时。',
    '用可选停时定理计算赌徒破产概率。'
  ]
};

window.ATLAS.extras['probability/law-large-numbers'] = {
  insight: '大数定律说明样本均值趋于期望；弱大数定律是依概率收敛，强大数定律是几乎必然收敛。',
  examples: [
    '抛硬币次数越多，正面频率越接近 $1/2$。',
    '样本均值估计总体均值之所以可靠，正是大数定律。'
  ]
};

window.ATLAS.extras['probability/central-limit-theorem'] = {
  insight: '中心极限定理说明独立同分布且方差有限非零时，标准化和趋于正态；无限方差分布不在此结论范围内。',
  examples: [
    '掷 $100$ 次骰子，点数和近似正态，均值 $350$，标准差约 $17.08$。',
    '测量误差、身高分布都近似正态。'
  ]
};

window.ATLAS.extras['probability/convergence-in-probability'] = {
  insight: '依概率收敛是“大概率接近”；它强于依分布收敛，但弱于几乎处处收敛。',
  examples: [
    '大数定律中的 $\\bar X_n\\to\\mu$ 是依概率收敛。',
    '中心极限定理中的标准化和是依分布收敛。'
  ]
};

window.ATLAS.extras['probability/almost-sure-convergence'] = {
  insight: '几乎处处收敛是逐路径收敛，不收敛的样本路径构成零概率集；Borel–Cantelli 引理是主要工具。',
  examples: [
    '强大数定律是几乎处处收敛。',
    '若 $P(X_n=1)=1/n^2$，则 $X_n=1$ 只发生有限次，故 $X_n\\to0$ 几乎处处。'
  ]
};

window.ATLAS.extras['probability/large-deviations'] = {
  insight: '大偏差理论研究罕见偏离事件的指数衰减速率；速率函数由 Legendre 变换给出。',
  examples: [
    '掷 $100$ 次硬币得到 $70$ 次正面的概率约 $3\\times10^{-4}$。',
    'Cramér 速率函数 $I(a)=\\sup_t(ta-\\log\\mathbb{E}[e^{tX}])$。'
  ]
};

window.ATLAS.extras['probability/markov-chains'] = {
  insight: '马尔可夫性说“未来只依赖现在”；平稳分布是长期比例，遍历链的分布收敛到平稳分布。',
  examples: [
    '天气模型：晴转晴 $0.8$、雨转雨 $0.6$，平稳分布约 $(2/3,1/3)$。',
    'PageRank 是网页图上的马尔可夫链平稳分布。'
  ]
};

window.ATLAS.extras['probability/brownian-motion'] = {
  insight: '布朗运动路径连续但处处不可微，二次变差 $[W]_t=t$ 非零；它是随机分析的基本对象。',
  examples: [
    '股票价格常用几何布朗运动建模。',
    '布朗运动的增量 $W_t-W_s\\sim N(0,t-s)$ 且独立。'
  ]
};

window.ATLAS.extras['probability/poisson-process'] = {
  insight: '泊松过程计数随机到达的事件；到达间隔独立且服从指数分布，具有无记忆性。',
  examples: [
    '客服中心平均每分钟 $2$ 个电话，$10$ 分钟接到 $15$ 个的概率约 $0.0516$。',
    '放射性衰变的粒子数近似泊松分布。'
  ]
};

window.ATLAS.extras['probability/stationary-processes'] = {
  insight: '平稳过程的统计规律不随时间平移改变；宽平稳只需均值恒定、自协方差只依赖时间差。',
  examples: [
    '白噪声是宽平稳过程，谱密度为常数。',
    '离散 Wiener–Khinchin 定理：二阶宽平稳过程的自协方差绝对可和时，其 Fourier 级数给出连续非负谱密度；常值随机过程的谱为原点点质量，说明一般情形不能假定有密度。'
  ]
};

window.ATLAS.extras['probability/martingales'] = {
  insight: '鞅是“公平游戏”：给定当前信息，未来的条件期望等于当前值；它是金融定价与随机分析的核心。',
  examples: [
    '公平硬币赌博的资金过程是鞅。',
    '风险中性测度下，折现资产价格是鞅。'
  ]
};

window.ATLAS.extras['probability/ito-integral'] = {
  insight: '伊藤积分用左端点黎曼和定义，保证被积过程不偷看未来；它本身是鞅，满足伊藤等距。',
  examples: [
    '$\\int_0^T W_t\\,dW_t=\\frac12W_T^2-\\frac12T$。',
    '伊藤等距 $\\mathbb{E}[(\\int H\\,dW)^2]=\\mathbb{E}[\\int H^2\\,dt]$。'
  ]
};

window.ATLAS.extras['probability/ito-formula'] = {
  insight: '伊藤公式是随机微积分的链式法则，多出的二阶项来自布朗运动的非零二次变差。',
  examples: [
    '$d(W_t^2)=2W_t\\,dW_t+dt$。',
    'Black–Scholes 方程正是对期权价格应用伊藤公式得到的。'
  ]
};

window.ATLAS.extras['probability/sdes'] = {
  insight: '随机微分方程把随机扰动写入演化方程；漂移项描述确定性趋势，扩散项描述随机波动。',
  examples: [
    '几何布朗运动 $dS_t=\\mu S_t\\,dt+\\sigma S_t\\,dW_t$。',
    'Ornstein–Uhlenbeck 过程 $dX_t=-\\theta X_t\\,dt+\\sigma\\,dW_t$ 描述均值回归。'
  ]
};

window.ATLAS.extras['probability/diffusion-processes'] = {
  insight: '扩散过程是连续路径的马尔可夫过程；生成算子描述局部演化，Fokker–Planck 方程描述转移密度。',
  examples: [
    '布朗运动的生成算子是 $\\frac12\\partial_x^2$。',
    'Fokker–Planck 方程 $\\partial_tp=-\\partial_x(\\mu p)+\\frac12\\partial_x^2(\\sigma^2p)$。'
  ]
};

window.ATLAS.extras['probability/point-estimation'] = {
  insight: '点估计用统计量估计未知参数；无偏性、相合性与有效性是评价标准，均方误差分解为方差加偏差平方。',
  examples: [
    '样本均值 $\\bar X$ 是总体均值的无偏估计。',
    '样本方差用 $\\frac{1}{n-1}\\sum(X_i-\\bar X)^2$ 才是无偏的。'
  ]
};

window.ATLAS.extras['probability/confidence-intervals'] = {
  insight: '置信区间按重复抽样的覆盖率构造；95% 置信区间意味着约 95% 的重复实验区间包含真值。',
  examples: [
    '正态均值区间 $\\bar X\\pm z_{1-\\alpha/2}\\frac{\\sigma}{\\sqrt n}$。',
    '样本均值 $10$、标准差 $2$、样本量 $100$ 时，95% 区间约为 $[9.61,10.39]$。'
  ]
};

window.ATLAS.extras['probability/hypothesis-testing'] = {
  insight: '假设检验控制第一类错误概率 $\\alpha$；$p$ 值是在原假设下观察到当前或更极端结果的概率，不是原假设为真的概率。',
  examples: [
    'A/B 测试 $p=0.03<0.05$，拒绝原假设，但需结合效应大小判断实际意义。',
    '检验功效 $1-\\beta$ 是正确拒绝错误原假设的概率。'
  ]
};

window.ATLAS.extras['probability/likelihood'] = {
  insight: '似然把观测数据视为参数的函数；最大似然估计选择使数据最可能出现的参数。',
  examples: [
    '伯努利试验 $n$ 次成功 $k$ 次，MLE 为 $\\hat p=k/n$。',
    'Cramér–Rao 下界 $\\mathrm{Var}(\\hat\\theta)\\ge1/(nI(\\theta))$。'
  ]
};

window.ATLAS.extras['probability/experimental-design'] = {
  insight: '随机化是因果推断的基石；随机分配使处理组与对照组在期望上可比，从而消除混杂。',
  examples: [
    'A/B 测试随机分配用户到新旧界面，比较转化率。',
    '析因设计同时研究多个因素及其交互作用。'
  ]
};

window.ATLAS.extras['probability/identification-conditions'] = {
  insight: '识别条件判断因果量能否由观测数据唯一确定；后门准则给出选择调整变量的图形化方法。',
  examples: [
    '后门调整公式 $P(y\\mid do(x))=\\sum_zP(y\\mid x,z)P(z)$。',
    '无混杂时条件分布等于干预分布。'
  ]
};

window.ATLAS.extras['probability/prior-distribution'] = {
  insight: '先验分布表达观察数据前的信念；先验选择影响后验，尤其在数据量小时。',
  examples: [
    '$\\theta\\sim\\mathrm{Beta}(2,2)$ 表达“大概公平但不确定”。',
    '无信息先验（如均匀分布）试图让数据说话。'
  ]
};

window.ATLAS.extras['probability/posterior-distribution'] = {
  insight: '后验分布是先验与似然的合成；它包含参数的全部不确定性，是贝叶斯推断的核心。',
  examples: [
    '抛硬币 $10$ 次得 $7$ 次正面，均匀先验下后验为 $\\mathrm{Beta}(8,4)$，均值 $2/3$。',
    '后验正比于似然乘先验。'
  ]
};

window.ATLAS.extras['probability/conjugate-priors'] = {
  insight: '共轭先验使后验与先验同族，更新只需修改参数；这让贝叶斯计算有解析形式。',
  examples: [
    'Beta 先验共轭于二项似然，后验参数为 $(\\alpha+k,\\beta+n-k)$。',
    'Normal 先验共轭于已知方差的正态似然。'
  ]
};

window.ATLAS.extras['probability/posterior-predictive'] = {
  insight: '后验预测分布整合参数不确定性，比把点估计代入预测更宽、更诚实。',
  examples: [
    '用 $\\mathrm{Beta}(10,4)$ 后验预测下一次正面概率 $10/14\\approx0.714$。',
    '贝叶斯预测区间天然包含参数不确定性。'
  ]
};

window.ATLAS.extras['probability/hierarchical-models'] = {
  insight: '层级模型让参数共享总体先验，实现“收缩”：小样本组向总体均值靠拢，减少极端估计。',
  examples: [
    '棒球击中率的小样本估计向总体平均收缩。',
    '随机效应模型 $y_{ij}\\sim N(\\theta_j,\\sigma^2)$，$\\theta_j\\sim N(\\mu,\\tau^2)$。'
  ]
};

window.ATLAS.extras['probability/regression-classification'] = {
  insight: '回归预测连续值，分类预测离散标签；损失函数与输出层的选择不同。',
  examples: [
    '线性回归 $\\hat y=X\\hat\\beta$，$\\hat\\beta=(X^\\top X)^{-1}X^\\top y$。',
    '逻辑回归用 sigmoid 输出概率。'
  ]
};

window.ATLAS.extras['probability/regularization'] = {
  insight: '正则化在损失中加入惩罚项限制复杂度，防止过拟合；$L_2$ 收缩参数，$L_1$ 产生稀疏解。',
  examples: [
    '岭回归 $\\min\\|y-X\\beta\\|^2+\\lambda\\|\\beta\\|_2^2$。',
    'LASSO 用 $L_1$ 惩罚做特征选择。'
  ]
};

window.ATLAS.extras['probability/bias-variance'] = {
  insight: '期望预测误差分解为偏差平方、方差与不可约噪声；模型复杂度在偏差与方差之间权衡。',
  examples: [
    '一次多项式拟合正弦曲线：高偏差（欠拟合）。',
    '十五次多项式：高方差（过拟合）。'
  ]
};

window.ATLAS.extras['probability/loss-risk'] = {
  insight: '损失函数度量单点误差，风险是损失的期望；经验风险最小化用训练集平均损失近似风险。',
  examples: [
    '平方损失下最优预测是条件均值 $\\mathbb{E}[Y\\mid X]$。',
    '绝对损失下最优预测是条件中位数。'
  ]
};

window.ATLAS.extras['probability/training-validation'] = {
  insight: '训练集拟合模型、验证集调超参数、测试集评估泛化；交叉验证在有限数据上更稳健。',
  examples: [
    '$10$ 折交叉验证把数据分成 $10$ 份，轮流验证。',
    '时间序列需按时间切分，避免未来信息泄漏。'
  ]
};

window.ATLAS.extras['probability/interventions-effects'] = {
  insight: '干预 $do(X=x)$ 切断变量原来的原因，与条件概率 $P(Y\\mid X=x)$ 不同；因果效应是干预前后的差异。',
  examples: [
    '平均处理效应 $\\mathrm{ATE}=\\mathbb{E}[Y(1)-Y(0)]$。',
    '冰淇淋销量与溺水人数相关，但干预冰淇淋不会减少溺水。'
  ]
};

window.ATLAS.extras['probability/confounding'] = {
  insight: '混杂变量同时影响处理与结果，制造虚假关联；随机化或调整混杂变量可以阻断后门路径。',
  examples: [
    '吸烟混杂咖啡与肺癌：咖啡与肺癌相关，但干预咖啡不会致癌。',
    '家庭背景混杂教育与收入，调整后教育效应估计更可信。'
  ]
};

window.ATLAS.extras['probability/potential-outcomes'] = {
  insight: '潜在结果框架比较同一单位在不同处理下的结果；根本问题是只能观察到一个潜在结果。',
  examples: [
    '个体因果效应 $\\tau_i=Y_i(1)-Y_i(0)$ 不可直接观测。',
    '随机实验通过可比性估计平均因果效应。'
  ]
};

window.ATLAS.extras['probability/causal-graphs'] = {
  insight: '因果图用有向无环图编码因果假设；d-分离判断条件独立，后门准则选择调整变量。',
  examples: [
    '图 $Z\\to X$、$Z\\to Y$、$X\\to Y$：$Z$ 是混杂，调整 $Z$ 可识别 $X\\to Y$ 的效应。',
    '后门路径 $X\\leftarrow Z\\to Y$ 被 $Z$ 阻断。'
  ]
};