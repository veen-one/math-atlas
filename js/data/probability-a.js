/* 数学知识地图 · 概率与统计（上） */
window.ATLAS = window.ATLAS || { subjects: {} };

window.ATLAS.subjects.probability = {
  id: 'probability',
  name: '概率与统计',
  en: 'PROBABILITY & STATISTICS',
  tagline: '从随机模型，走向数据、推断与决策',
  color: '#e58d9e',
  startAngle: 130,
  branches: [
    {
      id: 'probability-basics',
      name: '概率基础',
      en: 'PROBABILITY BASICS',
      brief: '样本、事件与随机变量',
      color: '#f09aa8',
      angle: 130,
      topics: [
        {
          id: 'probability-space',
          name: '概率空间',
          brief: '明确样本、事件及概率',
          keywords: ['概率空间', '样本空间', 'σ 代数', '概率测度'],
          definition: [
            '**概率空间** $(\\Omega, \\mathcal{F}, P)$ 由样本空间 $\\Omega$、事件域 $\\mathcal{F}$（σ 代数）与概率测度 $P$ 组成。',
            '$P$ 满足：$P(\\Omega) = 1$、非负性 $P(A) \\ge 0$、可数可加性（互不相交事件的可数并的概率等于概率之和）。'
          ],
          intuition: [
            '概率空间是概率论的公理化基础：样本是“所有可能结果”，事件是“我们关心的问题”，概率是“事件发生的可能程度”。',
            'σ 代数规定哪些集合是“可测事件”；在不可数样本空间上，并非所有子集都能赋概率（如 Vitali 集）。'
          ],
          formulas: [
            {
              tex: 'P(A \\cup B) = P(A) + P(B) - P(A \\cap B)',
              caption: '概率的加法公式。'
            },
            {
              tex: 'P\\left(\\bigcup_{i=1}^{\\infty} A_i\\right) = \\sum_{i=1}^{\\infty} P(A_i)',
              caption: '可数可加性（$A_i$ 互不相交）。'
            }
          ],
          example: [
            '掷骰子：$\\Omega = \\{1, \\dots, 6\\}$，$P(\\{i\\}) = 1/6$；事件 $A = \\{2, 4, 6\\}$ 的概率为 $1/2$。'
          ],
          related: ['random-variables', 'conditional-probability', 'analysis/sigma-algebras']
        },
        {
          id: 'random-variables',
          name: '随机变量',
          brief: '把随机结果映射为数值',
          keywords: ['随机变量', '分布函数', '可测映射', '离散连续'],
          definition: [
            '**随机变量**是可测映射 $X: \\Omega \\to \\mathbb{R}$。其**分布函数** $F_X(x) = P(X \\le x)$ 刻画取值规律。',
            '随机变量可以是离散的（取有限或可数多个值）或连续的（有密度函数）。'
          ],
          intuition: [
            '随机变量是“给随机结果贴上数字标签”：掷骰子的点数、抛硬币的正反面（编码为 0/1）、股票收益率都是随机变量。',
            '分布函数是随机变量的“指纹”：它包含所有概率信息，且右连续、单调不减、极限为 0 和 1。'
          ],
          formulas: [
            {
              tex: 'F_X(x) = P(X \\le x)',
              caption: '分布函数。'
            },
            {
              tex: 'F_X(x) = \\int_{-\\infty}^{x} f_X(t)\\,dt',
              caption: '连续型随机变量的密度表示。'
            },
            {
              tex: 'P(a < X \\le b) = F_X(b) - F_X(a)',
              caption: '区间的概率。'
            }
          ],
          example: [
            '掷骰子 $X$ 的分布函数：$x < 1$ 时为 0，$x \\in [k, k+1)$ 时为 $k/6$，$x \\ge 6$ 时为 1。'
          ],
          related: ['probability-space', 'distributions', 'expectation-variance']
        },
        {
          id: 'distributions',
          name: '分布',
          brief: '描述随机变量的取值规律',
          keywords: ['分布', '二项分布', '正态分布', '泊松分布'],
          definition: [
            '**概率分布**描述随机变量取值的概率规律。常见离散分布：Bernoulli、二项、几何、泊松；连续分布：均匀、正态、指数、Gamma、Beta。',
            '正态分布 $N(\\mu, \\sigma^2)$ 的密度为 $\\frac{1}{\\sqrt{2\\pi}\\sigma} e^{-(x-\\mu)^2/(2\\sigma^2)}$，是中心极限定理的极限分布。'
          ],
          intuition: [
            '不同分布对应不同的随机机制：二项分布数“$n$ 次试验中成功次数”，泊松分布数“单位时间事件数”，指数分布描述“等待时间”。',
            '分布的选择是建模的关键：正态适合连续测量误差，重尾分布适合金融风险。'
          ],
          formulas: [
            {
              tex: 'X \\sim B(n, p):\\ P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}',
              caption: '二项分布。'
            },
            {
              tex: 'X \\sim \\mathrm{Poisson}(\\lambda):\\ P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}',
              caption: '泊松分布。'
            },
            {
              tex: 'X \\sim N(\\mu, \\sigma^2):\\ f(x) = \\frac{1}{\\sqrt{2\\pi}\\sigma} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}',
              caption: '正态分布密度。'
            }
          ],
          example: [
            '抛 10 次公平硬币，正面次数 $X \\sim B(10, 0.5)$，$P(X = 5) = \\binom{10}{5}/2^{10} \\approx 0.246$。'
          ],
          related: ['random-variables', 'expectation-variance', 'central-limit-theorem']
        },
        {
          id: 'expectation-variance',
          name: '期望与方差',
          brief: '刻画平均水平与波动大小',
          keywords: ['期望', '方差', '矩', '线性性'],
          definition: [
            '随机变量 $X$ 的**期望** $\\mathbb{E}[X] = \\sum x P(X = x)$ 或 $\\int x f(x)\\,dx$，表示长期平均值。**方差** $\\mathrm{Var}(X) = \\mathbb{E}[(X - \\mathbb{E}X)^2]$ 度量波动。',
            '期望是线性的：$\\mathbb{E}[aX + bY] = a\\mathbb{E}[X] + b\\mathbb{E}[Y]$，无需独立性。'
          ],
          intuition: [
            '期望是“加权平均”：掷骰子的期望为 3.5，虽然不可能掷出 3.5，但长期平均趋于 3.5。',
            '方差越大，取值越分散；标准差是方差的平方根，与 $X$ 同单位。期望与方差是分布最重要的两个数字特征。'
          ],
          formulas: [
            {
              tex: '\\mathbb{E}[X] = \\sum_x x\\,P(X = x)',
              caption: '离散型期望。'
            },
            {
              tex: '\\mathrm{Var}(X) = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2',
              caption: '方差的计算公式。'
            },
            {
              tex: '\\mathbb{E}[aX + b] = a\\mathbb{E}[X] + b',
              caption: '期望的线性变换。'
            }
          ],
          example: [
            '掷骰子：$\\mathbb{E}[X] = 3.5$，$\\mathbb{E}[X^2] = 91/6 \\approx 15.17$，$\\mathrm{Var}(X) = 15.17 - 12.25 = 2.92$。'
          ],
          related: ['distributions', 'law-large-numbers', 'random-variables']
        },
        {
          id: 'conditional-probability',
          name: '条件概率',
          brief: '在已有信息下更新事件概率',
          keywords: ['条件概率', '全概率公式', 'Bayes 公式', '独立性'],
          definition: [
            '**条件概率** $P(A \\mid B) = P(A \\cap B)/P(B)$（$P(B) > 0$）表示在 $B$ 发生的条件下 $A$ 的概率。',
            '全概率公式：$P(A) = \\sum_i P(A \\mid B_i)P(B_i)$（$\\{B_i\\}$ 为划分）。Bayes 公式：$P(B_i \\mid A) = \\frac{P(A \\mid B_i)P(B_i)}{P(A)}$。'
          ],
          intuition: [
            '条件概率是“信息更新”：知道 $B$ 发生后，样本空间从 $\\Omega$ 缩小到 $B$，概率需要重新归一化。',
            'Bayes 公式把“给定原因看结果”反过来变成“给定结果猜原因”，是贝叶斯统计与医学诊断的核心。'
          ],
          formulas: [
            {
              tex: 'P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}',
              caption: '条件概率。'
            },
            {
              tex: 'P(B_i \\mid A) = \\frac{P(A \\mid B_i)P(B_i)}{\\sum_j P(A \\mid B_j)P(B_j)}',
              caption: 'Bayes 公式。'
            },
            {
              tex: 'A, B \\text{ 独立} \\iff P(A \\cap B) = P(A)P(B)',
              caption: '独立性。'
            }
          ],
          example: [
            '医学检测：疾病患病率 1%，检测灵敏度 99%，特异度 95%。阳性后患病概率约 $\\frac{0.99 \\times 0.01}{0.99 \\times 0.01 + 0.05 \\times 0.99} \\approx 16.7\\%$——远低于直觉。'
          ],
          related: ['probability-space', 'prior-distribution', 'posterior-distribution']
        },
        {
          id: 'stopping-times',
          name: '停时',
          brief: '能由截至当时的信息判断的时刻',
          keywords: ['停时', '信息流', '可选停时', '随机时刻'],
          definition: [
            '随机时刻 $\\tau$ 称为**停时**，如果事件 $\\{\\tau \\le t\\}$ 由截至 $t$ 的信息 $\\mathcal{F}_t$ 决定。',
            '停时是“不偷看未来”的决策时刻：例如“首次达到阈值的时刻”是停时，“达到最大值的时刻”通常不是。'
          ],
          intuition: [
            '停时是“根据已知信息决定何时停止”：股票止盈止损、赌场离场策略都是停时。',
            '可选停时定理说明鞅在停时处仍保持期望不变（在适当条件下），这是金融定价与随机分析的基本工具。'
          ],
          formulas: [
            {
              tex: '\\{\\tau \\le t\\} \\in \\mathcal{F}_t\\ \\forall t',
              caption: '停时的定义。'
            },
            {
              tex: '\\mathbb{E}[M_\\tau] = \\mathbb{E}[M_0]',
              caption: '可选停时定理（鞅，适当条件下）。'
            }
          ],
          example: [
            '随机游走的首次到达 $a$ 或 $-b$ 的时刻是停时；由可选停时定理可计算破产概率。'
          ],
          related: ['martingales', 'markov-chains', 'probability-space']
        }
      ]
    },
    {
      id: 'limit-theorems',
      name: '极限定理',
      en: 'LIMIT THEOREMS',
      brief: '在相应条件下样本均值趋于稳定',
      color: '#e88e9e',
      angle: 90,
      topics: [
        {
          id: 'law-large-numbers',
          name: '大数定律',
          brief: '在相应条件下样本均值趋稳',
          keywords: ['大数定律', '样本均值', 'Khinchin', '收敛'],
          definition: [
            '**弱大数定律**：若 $X_i$ 独立同分布且 $\\mathbb{E}|X_1| < \\infty$，则样本均值 $\\bar X_n \\to \\mu$ 依概率收敛。',
            '**强大数定律**：在同样条件下，$\\bar X_n \\to \\mu$ 几乎必然收敛（Kolmogorov）。'
          ],
          intuition: [
            '大数定律是“频率稳定”的数学表达：抛硬币次数越多，正面频率越接近 1/2。',
            '它是统计学的基础：用样本均值估计总体均值之所以可靠，正是因为大数定律。'
          ],
          formulas: [
            {
              tex: '\\bar X_n = \\frac{1}{n} \\sum_{i=1}^{n} X_i \\xrightarrow{P} \\mu',
              caption: '弱大数定律。'
            },
            {
              tex: '\\bar X_n \\xrightarrow{\\text{a.s.}} \\mu',
              caption: '强大数定律。'
            }
          ],
          example: [
            '抛公平硬币 10000 次，正面频率以极高概率落在 $0.5 \\pm 0.01$ 内（由大数定律与方差估计）。'
          ],
          related: ['central-limit-theorem', 'expectation-variance', 'convergence-in-probability']
        },
        {
          id: 'central-limit-theorem',
          name: '中心极限定理',
          brief: '在相应条件下标准化和趋于正态',
          keywords: ['中心极限定理', 'CLT', '正态分布', '收敛'],
          definition: [
            '**中心极限定理**：若 $X_i$ 独立同分布，$\\mathbb{E}[X_i] = \\mu$，$\\mathrm{Var}(X_i) = \\sigma^2 \\in (0, \\infty)$，则标准化和 $\\frac{\\sqrt n(\\bar X_n - \\mu)}{\\sigma} \\xrightarrow{d} N(0, 1)$。',
            '更一般地，Lindeberg–Feller 定理给出独立但不同分布情形的条件。'
          ],
          intuition: [
            '中心极限定理是“正态分布的普遍性”：大量独立小随机因素叠加后，分布趋于正态，无论原始分布是什么。',
            '它解释了为什么身高、测量误差、股票收益率（近似）都接近正态；也是置信区间与大样本检验的理论基础。'
          ],
          formulas: [
            {
              tex: '\\frac{\\sqrt n(\\bar X_n - \\mu)}{\\sigma} \\xrightarrow{d} N(0, 1)',
              caption: '中心极限定理。'
            },
            {
              tex: '\\sum_{i=1}^{n} X_i \\approx N(n\\mu, n\\sigma^2)',
              caption: '大样本近似。'
            }
          ],
          example: [
            '掷 100 次骰子，点数和近似正态，均值 350，标准差 $\\sqrt{100 \\times 35/12} \\approx 17.08$；和落在 $350 \\pm 34$ 的概率约 95%。'
          ],
          related: ['law-large-numbers', 'distributions', 'convergence-in-probability']
        },
        {
          id: 'convergence-in-probability',
          name: '依概率收敛',
          brief: '大偏差发生的概率趋于零',
          keywords: ['依概率收敛', '依分布收敛', '收敛模式', '概率'],
          definition: [
            '随机变量序列 $X_n$ **依概率收敛**到 $X$，如果对每个 $\\varepsilon > 0$，$P(|X_n - X| > \\varepsilon) \\to 0$。',
            '**依分布收敛** $X_n \\xrightarrow{d} X$ 指分布函数逐点收敛（在连续点）。依概率收敛强于依分布收敛。'
          ],
          intuition: [
            '依概率收敛是“大概率接近”：$X_n$ 与 $X$ 的差超过任意小正数的概率趋于零。',
            '不同收敛模式强度不同：几乎处处 $\\Rightarrow$ 依概率 $\\Rightarrow$ 依分布；反之一般不成立。'
          ],
          formulas: [
            {
              tex: 'X_n \\xrightarrow{P} X \\iff \\forall \\varepsilon > 0:\\ P(|X_n - X| > \\varepsilon) \\to 0',
              caption: '依概率收敛。'
            },
            {
              tex: 'X_n \\xrightarrow{P} X \\implies X_n \\xrightarrow{d} X',
              caption: '依概率收敛蕴含依分布收敛。'
            }
          ],
          example: [
            '大数定律中的 $\\bar X_n \\xrightarrow{P} \\mu$ 是依概率收敛；中心极限定理中的标准化和是依分布收敛。'
          ],
          related: ['law-large-numbers', 'almost-sure-convergence', 'central-limit-theorem']
        },
        {
          id: 'almost-sure-convergence',
          name: '几乎处处收敛',
          brief: '不收敛的样本路径构成零概率集',
          keywords: ['几乎处处收敛', '零概率集', 'Borel-Cantelli', '强收敛'],
          definition: [
            '$X_n$ **几乎处处收敛**到 $X$，如果 $P(\\lim_{n \\to \\infty} X_n = X) = 1$，即不收敛的样本路径构成零概率集。',
            'Borel–Cantelli 引理是证明几乎处处收敛的基本工具：若 $\\sum P(A_n) < \\infty$，则 $P(A_n\\ \\text{无穷多次}) = 0$。'
          ],
          intuition: [
            '几乎处处收敛是“逐条路径收敛”：除了极少数（概率为零）的路径，每条样本路径的极限都等于 $X$。',
            '强大数定律是几乎处处收敛的经典例子；比依概率收敛更强。'
          ],
          formulas: [
            {
              tex: 'P\\left(\\lim_{n \\to \\infty} X_n = X\\right) = 1',
              caption: '几乎处处收敛。'
            },
            {
              tex: '\\sum_{n=1}^{\\infty} P(A_n) < \\infty \\implies P(A_n\\ \\text{i.o.}) = 0',
              caption: 'Borel–Cantelli 引理。'
            }
          ],
          example: [
            '独立随机变量 $X_n$ 满足 $P(X_n = 1) = 1/n^2$，$P(X_n = 0) = 1 - 1/n^2$：由 Borel–Cantelli，$X_n = 1$ 只发生有限次，故 $X_n \\to 0$ 几乎处处。'
          ],
          related: ['convergence-in-probability', 'law-large-numbers', 'analysis/lebesgue-integral']
        },
        {
          id: 'large-deviations',
          name: '大偏差',
          brief: '研究罕见偏离事件的衰减速率',
          keywords: ['大偏差', '速率函数', 'Cramér 定理', '指数衰减'],
          definition: [
            '**大偏差理论**研究样本均值偏离期望的罕见事件概率的指数衰减速率：$P(\\bar X_n \\ge a) \\approx e^{-n I(a)}$，$I$ 为速率函数。',
            'Cramér 定理给出独立同分布情形下速率函数为 Legendre 变换 $I(a) = \\sup_t (ta - \\log \\mathbb{E}[e^{tX}])$。'
          ],
          intuition: [
            '大数定律说样本均值趋于期望，大偏差理论进一步问“偏离期望那么多的概率有多小”——答案是指数小。',
            '大偏差在统计物理（熵、自由能）、通信（信道容量）、风险管理（极端事件）中有重要应用。'
          ],
          formulas: [
            {
              tex: '\\lim_{n \\to \\infty} \\frac{1}{n} \\log P(\\bar X_n \\ge a) = -I(a)',
              caption: '大偏差原理。'
            },
            {
              tex: 'I(a) = \\sup_{t \\in \\mathbb{R}} (ta - \\log \\mathbb{E}[e^{tX}])',
              caption: 'Cramér 速率函数。'
            }
          ],
          example: [
            '掷 100 次硬币得到 70 次正面（$p = 0.5$）：概率约为 $e^{-100 \\cdot 0.081} \\approx 3 \\times 10^{-4}$，远低于 50 次正面的概率。'
          ],
          related: ['law-large-numbers', 'discrete/entropy', 'applied/statistical-mechanics']
        }
      ]
    },
    {
      id: 'stochastic-processes',
      name: '随机过程',
      en: 'STOCHASTIC PROCESSES',
      brief: '随机变量随时间的演化',
      color: '#f0a6b2',
      angle: 40,
      topics: [
        {
          id: 'markov-chains',
          name: '马尔可夫链',
          brief: '给定当前后未来不依赖更早历史',
          keywords: ['马尔可夫链', '转移矩阵', '平稳分布', '遍历'],
          definition: [
            '**马尔可夫链**是状态空间离散的随机过程，满足马尔可夫性：$P(X_{n+1} \\mid X_n, \\ldots, X_0) = P(X_{n+1} \\mid X_n)$。',
            '时齐马尔可夫链由转移矩阵 $P$ 描述；平稳分布 $\\pi$ 满足 $\\pi P = \\pi$。'
          ],
          intuition: [
            '马尔可夫性说“未来只依赖现在”：给定当前状态，历史信息不再影响未来。这大大简化了计算。',
            '平稳分布是长期比例：经过足够长时间，停留在各状态的比例趋于 $\\pi$，与初始状态无关（在遍历条件下）。'
          ],
          formulas: [
            {
              tex: 'P(X_{n+1} = j \\mid X_n = i) = P_{ij}',
              caption: '转移概率。'
            },
            {
              tex: '\\pi P = \\pi,\\quad \\sum_i \\pi_i = 1',
              caption: '平稳分布。'
            },
            {
              tex: '\\pi_j = \\sum_i \\pi_i P_{ij}',
              caption: '平稳性方程。'
            }
          ],
          example: [
            '天气模型：晴转晴 0.8、晴转雨 0.2；雨转晴 0.4、雨转雨 0.6。平稳分布为 $(2/3, 1/3)$，长期晴天的比例约 $2/3$。'
          ],
          related: ['stopping-times', 'martingales', 'poisson-process']
        },
        {
          id: 'brownian-motion',
          name: '布朗运动',
          brief: '具有连续路径的基本随机过程',
          keywords: ['布朗运动', 'Wiener 过程', '高斯增量', '连续路径'],
          definition: [
            '**布朗运动**（Wiener 过程）$W_t$ 是连续时间的随机过程：$W_0 = 0$，增量 $W_t - W_s \\sim N(0, t-s)$ 且独立，路径连续但几乎处处不可微。',
            '它是随机分析的基本对象，也是扩散过程的原型。'
          ],
          intuition: [
            '布朗运动描述“微小粒子的随机游走”：花粉在水中的运动、股票价格的连续模型都近似为布朗运动。',
            '布朗运动路径连续但极其“粗糙”：处处不可微，二次变差 $[W]_t = t$ 非零，这是随机微积分与普通微积分的关键区别。'
          ],
          formulas: [
            {
              tex: 'W_t - W_s \\sim N(0, t - s)',
              caption: '高斯增量。'
            },
            {
              tex: '\\mathbb{E}[W_t] = 0,\\quad \\mathrm{Var}(W_t) = t',
              caption: '均值与方差。'
            },
            {
              tex: '[W]_t = t',
              caption: '二次变差。'
            }
          ],
          example: [
            '股票价格 $S_t = S_0 \\exp(\\sigma W_t + (\\mu - \\sigma^2/2)t)$ 是几何布朗运动，其对数收益服从正态分布。'
          ],
          related: ['ito-integral', 'ito-formula', 'applied/stochastic-price-models']
        },
        {
          id: 'poisson-process',
          name: '泊松过程',
          brief: '刻画独立增量的随机计数',
          keywords: ['泊松过程', '到达间隔', '指数分布', '计数过程'],
          definition: [
            '**泊松过程** $N_t$ 计数到时间 $t$ 为止发生的事件数：$N_t \\sim \\mathrm{Poisson}(\\lambda t)$，增量独立且平稳。',
            '到达间隔独立且服从指数分布 $\\mathrm{Exp}(\\lambda)$；等待第 $n$ 个事件的时间服从 Gamma 分布。'
          ],
          intuition: [
            '泊松过程描述“随机到达”：电话呼叫、顾客到达、放射性衰变都近似泊松过程。',
            '无记忆性：已经等了多久不影响下一次到达的等待时间——这是指数分布的标志。'
          ],
          formulas: [
            {
              tex: 'P(N_t = k) = \\frac{(\\lambda t)^k e^{-\\lambda t}}{k!}',
              caption: '泊松分布。'
            },
            {
              tex: '\\mathbb{E}[N_t] = \\lambda t,\\quad \\mathrm{Var}(N_t) = \\lambda t',
              caption: '均值与方差。'
            },
            {
              tex: 'T_i \\sim \\mathrm{Exp}(\\lambda)',
              caption: '到达间隔。'
            }
          ],
          example: [
            '客服中心平均每分钟接到 2 个电话（$\\lambda = 2$）：10 分钟内接到 15 个电话的概率为 $P(N_{10} = 15) = \\frac{20^{15} e^{-20}}{15!} \\approx 0.0516$。'
          ],
          related: ['markov-chains', 'distributions', 'stationary-processes']
        },
        {
          id: 'stationary-processes',
          name: '平稳过程',
          brief: '统计规律在时间平移下不变',
          keywords: ['平稳过程', '宽平稳', '谱密度', '自相关'],
          definition: [
            '随机过程 $X_t$ 称为**严平稳**，如果任意有限维分布的联合分布在时间平移下不变。**宽平稳**只要求均值恒定、自协方差只依赖时间差。',
            '平稳过程的自协方差函数 $\\gamma(h) = \\mathrm{Cov}(X_{t+h}, X_t)$ 与谱密度通过 Fourier 变换对应（Wiener–Khinchin 定理）。'
          ],
          intuition: [
            '平稳过程是“统计规律不随时间变化”的过程：今天与明天的统计行为相同。声音信号、平稳时间序列都是例子。',
            '宽平稳是弱化版本，只需二阶矩性质；谱密度把时域的自相关转化为频域的能量分布。'
          ],
          formulas: [
            {
              tex: '\\mathbb{E}[X_t] = \\mu,\\quad \\gamma(h) = \\mathrm{Cov}(X_{t+h}, X_t)',
              caption: '宽平稳条件。'
            },
            {
              tex: 'S(\\omega) = \\sum_{h=-\\infty}^{\\infty} \\gamma(h) e^{-i\\omega h}',
              caption: '谱密度（Wiener–Khinchin）。'
            }
          ],
          example: [
            '白噪声是宽平稳过程：均值为 0，自协方差仅在 $h = 0$ 时非零，谱密度为常数。'
          ],
          related: ['markov-chains', 'analysis/fourier-transform', 'martingales']
        },
        {
          id: 'martingales',
          name: '鞅',
          brief: '给定当前信息后条件期望不变',
          keywords: ['鞅', '条件期望', '可选停时', '公平游戏'],
          definition: [
            '随机过程 $M_t$ 称为**鞅**，如果 $\\mathbb{E}[|M_t|] < \\infty$ 且 $\\mathbb{E}[M_{t} \\mid \\mathcal{F}_s] = M_s$（$s < t$）。',
            '鞅是“公平游戏”：给定当前信息，未来的条件期望等于当前值，没有系统性漂移。'
          ],
          intuition: [
            '鞅是“没有优势的赌博”：无论过去赢了多少，下一局的期望收益都是当前资金。',
            '鞅在金融数学中是核心：风险中性测度下，折现资产价格是鞅，从而期权定价等于期望。'
          ],
          formulas: [
            {
              tex: '\\mathbb{E}[M_t \\mid \\mathcal{F}_s] = M_s\\quad (s < t)',
              caption: '鞅的定义。'
            },
            {
              tex: '\\mathbb{E}[M_t] = \\mathbb{E}[M_0]',
              caption: '鞅的期望恒定。'
            }
          ],
          example: [
            '公平硬币赌博：每次赢 1 或输 1 的概率各半，资金过程是鞅；若赌场抽水，则变为下鞅。'
          ],
          related: ['stopping-times', 'applied/no-arbitrage-pricing', 'brownian-motion']
        }
      ]
    },
    {
      id: 'stochastic-analysis',
      name: '随机分析',
      en: 'STOCHASTIC ANALYSIS',
      brief: '随机微积分与随机微分方程',
      color: '#eb92a4',
      angle: -5,
      topics: [
        {
          id: 'ito-integral',
          name: '伊藤积分',
          brief: '对随机过程定义特定积分',
          keywords: ['伊藤积分', '随机积分', '适应性', '等距'],
          definition: [
            '**伊藤积分** $\\int_0^T H_t\\,dW_t$ 对适应过程 $H_t$ 关于布朗运动定义，用左端点黎曼和逼近：$\\sum H_{t_i}(W_{t_{i+1}} - W_{t_i})$。',
            '伊藤积分是鞅，满足等距性质 $\\mathbb{E}[(\\int H\\,dW)^2] = \\mathbb{E}[\\int H^2\\,dt]$。'
          ],
          intuition: [
            '普通黎曼积分取任意样本点，但布朗运动路径太粗糙，必须固定取左端点（不偷看未来），这就是伊藤积分。',
            '左端点选择导致伊藤公式多出二阶修正项，这是随机微积分与普通微积分的核心差异。'
          ],
          formulas: [
            {
              tex: '\\int_0^T H_t\\,dW_t = \\lim_{n \\to \\infty} \\sum_{i=0}^{n-1} H_{t_i}(W_{t_{i+1}} - W_{t_i})',
              caption: '伊藤积分的定义。'
            },
            {
              tex: '\\mathbb{E}\\left[\\left(\\int_0^T H_t\\,dW_t\\right)^2\\right] = \\mathbb{E}\\left[\\int_0^T H_t^2\\,dt\\right]',
              caption: '伊藤等距。'
            }
          ],
          example: [
            '$\\int_0^T W_t\\,dW_t = \\frac12 W_T^2 - \\frac12 T$，而不是普通微积分的 $\\frac12 W_T^2$——多出的 $-T/2$ 来自二次变差。'
          ],
          related: ['ito-formula', 'brownian-motion', 'sdes']
        },
        {
          id: 'ito-formula',
          name: '伊藤公式',
          brief: '随机微积分中的变量变换规则',
          keywords: ['伊藤公式', '伊藤引理', '二次变差', '随机链式法则'],
          definition: [
            '**伊藤公式**是随机微积分的链式法则：若 $dX_t = \\mu_t\\,dt + \\sigma_t\\,dW_t$，则 $df(X_t) = f\'(X_t)\\,dX_t + \\frac12 f\'\'(X_t)\\,\\sigma_t^2\\,dt$。',
            '多出的 $\\frac12 f\'\'\\sigma^2\\,dt$ 项来自布朗运动的非零二次变差。'
          ],
          intuition: [
            '伊藤公式是“随机世界的泰勒展开”：普通微积分中二阶项可忽略，但布朗运动的 $(dW)^2 \\approx dt$，二阶项不能丢。',
            '它是随机微分方程、金融衍生品定价（Black–Scholes）与扩散过程的计算核心。'
          ],
          formulas: [
            {
              tex: 'df(X_t) = f\'(X_t)\\,dX_t + \\frac12 f\'\'(X_t)\\,\\sigma_t^2\\,dt',
              caption: '伊藤公式（一维）。'
            },
            {
              tex: 'd(e^{W_t}) = e^{W_t}\\,dW_t + \\frac12 e^{W_t}\\,dt',
              caption: '指数函数的伊藤微分。'
            }
          ],
          example: [
            '用伊藤公式验证 $d(W_t^2) = 2W_t\\,dW_t + dt$，因此 $W_t^2 - t$ 是鞅。'
          ],
          related: ['ito-integral', 'brownian-motion', 'sdes']
        },
        {
          id: 'sdes',
          name: '随机微分方程',
          brief: '把随机扰动写进演化方程',
          keywords: ['SDE', '随机微分方程', '强解', '弱解'],
          definition: [
            '**随机微分方程**形如 $dX_t = \\mu(X_t, t)\\,dt + \\sigma(X_t, t)\\,dW_t$，其中 $\\mu$ 是漂移项，$\\sigma$ 是扩散项。',
            '解的存在唯一性需要 Lipschitz 与线性增长条件；强解指定布朗运动，弱解只需分布满足方程。'
          ],
          intuition: [
            'SDE 是“带噪声的微分方程”：确定性演化 $\\mu\\,dt$ 加上随机扰动 $\\sigma\\,dW_t$。',
            '几何布朗运动 $dS = \\mu S\\,dt + \\sigma S\\,dW$ 是 Black–Scholes 模型的核心；Ornstein–Uhlenbeck 过程描述均值回归。'
          ],
          formulas: [
            {
              tex: 'dX_t = \\mu(X_t, t)\\,dt + \\sigma(X_t, t)\\,dW_t',
              caption: '一般随机微分方程。'
            },
            {
              tex: 'dS_t = \\mu S_t\\,dt + \\sigma S_t\\,dW_t',
              caption: '几何布朗运动。'
            }
          ],
          example: [
            'Ornstein–Uhlenbeck 过程 $dX_t = -\\theta X_t\\,dt + \\sigma\\,dW_t$ 描述有均值回归的噪声系统（如利率模型）。'
          ],
          related: ['ito-formula', 'ito-integral', 'applied/stochastic-price-models']
        },
        {
          id: 'diffusion-processes',
          name: '扩散过程',
          brief: '研究连续路径随机演化的一类模型',
          keywords: ['扩散过程', '生成算子', 'Fokker-Planck', '连续路径'],
          definition: [
            '**扩散过程**是连续路径的马尔可夫过程，由 SDE 或转移密度描述。其无穷小生成算子 $\\mathcal{L}$ 刻画局部演化。',
            'Fokker–Planck 方程描述转移密度的演化：$\\partial_t p = -\\partial_x(\\mu p) + \\frac12 \\partial_x^2(\\sigma^2 p)$。'
          ],
          intuition: [
            '扩散过程是“连续随机运动的宏观描述”：粒子在流体中扩散、种群密度的随机波动、利率的随机演化。',
            '生成算子是“随机过程的导数”：它描述函数沿过程的期望变化率，与 Fokker–Planck 方程互为对偶。'
          ],
          formulas: [
            {
              tex: '\\mathcal{L}f(x) = \\mu(x) f\'(x) + \\frac12 \\sigma^2(x) f\'\'(x)',
              caption: '扩散过程的生成算子。'
            },
            {
              tex: '\\partial_t p = -\\partial_x(\\mu p) + \\frac12 \\partial_x^2(\\sigma^2 p)',
              caption: 'Fokker–Planck 方程。'
            }
          ],
          example: [
            '布朗运动的生成算子是 $\\frac12 \\partial_x^2$，对应热方程 $\\partial_t p = \\frac12 \\partial_x^2 p$。'
          ],
          related: ['sdes', 'brownian-motion', 'analysis/pdes']
        }
      ]
    }
  ]
};