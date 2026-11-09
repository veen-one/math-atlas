/* 数学知识地图 · 应用与计算数学（下） */
window.ATLAS.subjects.applied.branches.push(
  {
    id: 'mathematical-physics',
    name: '数学物理',
    en: 'MATHEMATICAL PHYSICS',
    brief: '用数学结构研究物理规律',
    color: '#d8e07a',
    angle: -5,
    topics: [
      {
        id: 'classical-mechanics',
        name: '经典力学',
        brief: '用微分方程与变分描述运动',
        keywords: ['经典力学', 'Newton', 'Lagrange', 'Hamilton'],
        definition: [
          '**经典力学**描述宏观物体的运动。Newton 形式用 $F = ma$；Lagrange 形式用驻作用量原理，运动满足 Euler–Lagrange 方程；Hamilton 形式用相空间与哈密顿方程。',
          '三种形式在数学上等价但视角不同：Lagrange 强调构型空间与变分，Hamilton 强调相空间与辛结构。'
        ],
        intuition: [
          '驻作用量原理说：物体走“作用量”取驻值的路径。这比“力改变加速度”更深刻，且容易推广到场论。',
          '拉格朗日力学用广义坐标处理约束系统；哈密顿力学把二阶方程化为一阶方程组，直接接入辛几何与量子化。'
        ],
        formulas: [
          {
            tex: 'F = ma',
            caption: 'Newton 第二定律。'
          },
          {
            tex: '\\frac{d}{dt}\\frac{\\partial L}{\\partial \\dot q_i} - \\frac{\\partial L}{\\partial q_i} = 0',
            caption: 'Euler–Lagrange 方程（$L = T - V$）。'
          },
          {
            tex: 'S[q] = \\int_{t_1}^{t_2} L(q, \\dot q, t)\\,dt',
            caption: '作用量。'
          }
        ],
        example: [
          '单摆：$L = \\frac12 ml^2 \\dot\\theta^2 + mgl\\cos\\theta$，Euler–Lagrange 方程给出 $\\ddot\\theta + (g/l)\\sin\\theta = 0$。'
        ],
        related: ['symmetry-conservation', 'geometry/hamiltonian-systems', 'analysis/odes']
      },
      {
        id: 'quantum-theory',
        name: '量子理论',
        brief: '用状态空间与算子描述体系',
        keywords: ['量子理论', '希尔伯特空间', '自伴算子', '谱'],
        definition: [
          '**量子力学**的数学框架：物理状态是复希尔伯特空间中的单位向量（或在射影空间中），可观测量是自伴算子，测量结果对应谱。',
          '时间演化由 Schrödinger 方程 $i\\hbar \\frac{\\partial}{\\partial t}|\\psi\\rangle = H|\\psi\\rangle$ 给出，$H$ 是哈密顿算子。'
        ],
        intuition: [
          '量子状态是“概率幅”而非确定值：测量的期望值是 $\\langle \\psi | A | \\psi \\rangle$，谱分解给出可能的结果与概率。',
          '非交换性（$[x, p] = i\\hbar$）导致不确定性原理：位置与动量不能同时精确确定。这是量子力学与经典力学的根本区别。'
        ],
        formulas: [
          {
            tex: 'i\\hbar \\frac{\\partial}{\\partial t}|\\psi\\rangle = H|\\psi\\rangle',
            caption: 'Schrödinger 方程。'
          },
          {
            tex: '\\langle A \\rangle_\\psi = \\langle \\psi | A | \\psi \\rangle',
            caption: '可观测量的期望值。'
          },
          {
            tex: '[\\hat x, \\hat p] = i\\hbar',
            caption: '正则对易关系。'
          }
        ],
        example: [
          '无限深势阱中的粒子能级为 $E_n = \\frac{n^2 \\pi^2 \\hbar^2}{2mL^2}$，由哈密顿算子的谱给出。'
        ],
        related: ['analysis/hilbert-spaces', 'analysis/spectral-theory', 'algebra/lie-algebras']
      },
      {
        id: 'statistical-mechanics',
        name: '统计力学',
        brief: '从微观模型研究宏观规律',
        keywords: ['统计力学', '配分函数', '熵', '相变'],
        definition: [
          '**统计力学**用概率分布描述大量粒子的集体行为。正则系综的配分函数 $Z = \\sum_i e^{-\\beta E_i}$ 编码系统的热力学性质。',
          '自由能 $F = -k_B T \\log Z$，熵 $S = -k_B \\sum p_i \\log p_i$，内能由配分函数的导数给出。'
        ],
        intuition: [
          '统计力学是“微观到宏观的桥梁”：单个粒子行为复杂，但大量粒子的统计规律简单（如温度、压强）。',
          '相变是统计力学的核心现象：在临界温度附近，宏观性质发生突变（如水的沸腾），由配分函数的奇异行为描述。'
        ],
        formulas: [
          {
            tex: 'Z = \\sum_i e^{-\\beta E_i},\\quad \\beta = \\frac{1}{k_B T}',
            caption: '正则配分函数。'
          },
          {
            tex: 'F = -k_B T \\ln Z',
            caption: 'Helmholtz 自由能。'
          },
          {
            tex: 'S = -k_B \\sum_i p_i \\ln p_i',
            caption: 'Gibbs 熵。'
          }
        ],
        example: [
          '二能级系统：$Z = 1 + e^{-\\beta \\Delta E}$，低温时粒子占据低能级，高温时两个能级等概率。'
        ],
        related: ['discrete/entropy', 'quantum-theory', 'probability/probability-space']
      },
      {
        id: 'symmetry-conservation',
        name: '对称与守恒',
        brief: '在适用条件下联系对称与守恒量',
        keywords: ['Noether 定理', '对称', '守恒量', '李群'],
        definition: [
          '**Noether 定理**：每一个连续对称对应一个守恒量。时间平移对称 $\to$ 能量守恒；空间平移对称 $\to$ 动量守恒；旋转对称 $\to$ 角动量守恒。',
          '数学上，对称由李群作用描述，守恒量由动量映射给出。'
        ],
        intuition: [
          '物理定律不随时间变化，所以能量守恒；物理定律不随位置变化，所以动量守恒。对称性越强，守恒量越多。',
          'Noether 定理是数学物理中最深刻的联系之一：它把变分法的对称性与守恒律统一起来，也启发了粒子物理中的规范场论。'
        ],
        formulas: [
          {
            tex: '\\frac{d}{dt} Q = 0 \\quad \\text{（对称 } \\Rightarrow \\text{ 守恒量 } Q\\text{）}',
            caption: 'Noether 定理的结论。'
          },
          {
            tex: 'Q = \\frac{\\partial L}{\\partial \\dot q} \\delta q',
            caption: 'Noether 荷（连续对称对应的守恒量）。'
          }
        ],
        example: [
          '中心力场具有旋转对称，因此角动量 $L = r \\times p$ 守恒；行星轨道因此在一个平面内运动。'
        ],
        related: ['classical-mechanics', 'geometry/moment-maps', 'algebra/lie-groups']
      }
    ]
  },
  {
    id: 'scientific-computing',
    name: '科学计算',
    en: 'SCIENTIFIC COMPUTING',
    brief: '离散化、仿真与大规模求解',
    color: '#c8da72',
    angle: -50,
    topics: [
      {
        id: 'mesh-discretization',
        name: '网格与离散化',
        brief: '把连续问题转成有限规模问题',
        keywords: ['网格', '离散化', '收敛性', '有限规模'],
        definition: [
          '**离散化**把连续方程（PDE、积分方程）转化为有限维代数系统。常用方法：有限差分、有限元、有限体积、谱方法。',
          '网格是离散化的基础：结构网格（矩形）简单高效，非结构网格（三角形/四面体）适应复杂几何。'
        ],
        intuition: [
          '离散化是“把无穷维问题切成有限块”：连续函数被网格点上的值或分片多项式代替，微分方程变成代数方程。',
          '离散化引入误差，网格越细误差越小（收敛性）；但计算量也越大，需要在精度与成本间权衡。'
        ],
        formulas: [
          {
            tex: 'u_h \\to u \\quad (h \\to 0)',
            caption: '离散解收敛到真解。'
          },
          {
            tex: '\\|u - u_h\\| \\le C h^p',
            caption: '误差估计（$p$ 为收敛阶）。'
          }
        ],
        example: [
          '在 $[0,1]$ 上解 $-u\'\' = f$：用 $n$ 个网格点、步长 $h = 1/(n+1)$，差分方程给出 $O(h^2)$ 精度的近似解。'
        ],
        related: ['finite-differences', 'finite-elements', 'error-analysis']
      },
      {
        id: 'pde-models',
        name: '偏微分方程模型',
        brief: '描述波、扩散与流体等现象',
        keywords: ['PDE', '热方程', '波动方程', 'Navier-Stokes'],
        definition: [
          '**偏微分方程**用多个变量的偏导数描述物理场。三大经典方程：热方程 $u_t = \\alpha \\Delta u$（扩散）、波动方程 $u_{tt} = c^2 \\Delta u$（波）、Laplace 方程 $\\Delta u = 0$（平衡）。',
          'Navier–Stokes 方程描述流体运动，是千禧年大奖难题之一。'
        ],
        intuition: [
          '热方程描述“从高温到低温的平滑”：温度分布随时间扩散，最终趋于均匀。波动方程描述“扰动以有限速度传播”。',
          'PDE 的分类（椭圆、抛物、双曲）决定解的性质与数值方法：椭圆型（平衡）、抛物型（扩散）、双曲型（传播）。'
        ],
        formulas: [
          {
            tex: 'u_t = \\alpha \\Delta u',
            caption: '热方程。'
          },
          {
            tex: 'u_{tt} = c^2 \\Delta u',
            caption: '波动方程。'
          },
          {
            tex: '\\Delta u = 0',
            caption: 'Laplace 方程。'
          }
        ],
        example: [
          '金属棒中的热传导：给定初始温度分布与边界条件，热方程给出温度随时间的演化，最终趋于稳态。'
        ],
        related: ['finite-differences', 'finite-elements', 'analysis/pdes']
      },
      {
        id: 'finite-differences',
        name: '有限差分',
        brief: '以差分近似微分关系',
        keywords: ['有限差分', '差分格式', 'CFL 条件', '稳定性'],
        definition: [
          '**有限差分法**用差商近似导数：$u\'(x) \\approx (u_{i+1} - u_{i-1})/(2h)$，$u\'\'(x) \\approx (u_{i+1} - 2u_i + u_{i-1})/h^2$。',
          '显式格式受 CFL 条件限制稳定性：$\\Delta t \\le h^2/(2\\alpha)$（热方程）或 $c\\Delta t/h \\le 1$（波动方程）。'
        ],
        intuition: [
          '有限差分的想法朴素：导数就是差分的极限。把网格点上的值作为未知数，微分方程变成差分方程。',
          '显式格式计算简单但可能不稳定；隐式格式无条件稳定但每步需要解线性方程组。'
        ],
        formulas: [
          {
            tex: 'u_i^{n+1} = u_i^n + \\frac{\\alpha \\Delta t}{h^2}(u_{i+1}^n - 2u_i^n + u_{i-1}^n)',
            caption: '热方程的显式差分格式。'
          },
          {
            tex: '\\frac{c\\Delta t}{h} \\le 1',
            caption: 'CFL 稳定性条件（波动方程）。'
          }
        ],
        example: [
          '用显式差分求解一维热方程，若 $\\Delta t$ 超过 $h^2/(2\\alpha)$，数值解会出现振荡并指数增长。'
        ],
        related: ['pde-models', 'mesh-discretization', 'numerical-stability']
      },
      {
        id: 'finite-elements',
        name: '有限元',
        brief: '用局部基函数近似连续场',
        keywords: ['有限元', '弱形式', '形函数', '组装'],
        definition: [
          '**有限元法**把 PDE 的弱形式离散化：解空间用分片多项式（形函数）张成，未知数是节点值。',
          '弱形式通过分部积分降低导数阶数：例如 $-u\'\' = f$ 的弱形式为 $\\int u\'v\' = \\int fv$ 对所有测试函数 $v$。'
        ],
        intuition: [
          '有限元像“用很多小块拼出曲面”：每个单元内用简单多项式近似，整体通过节点拼接。它特别适合复杂几何与变系数问题。',
          '弱形式允许解只有一阶导数（Sobolev 空间），比强形式更宽松，适合非光滑解与不连续系数。'
        ],
        formulas: [
          {
            tex: 'a(u, v) = \\int_\\Omega \\nabla u \\cdot \\nabla v\\,dx = \\int_\\Omega f v\\,dx = \\ell(v)',
            caption: 'Poisson 方程的弱形式。'
          },
          {
            tex: 'u_h(x) = \\sum_{j=1}^{N} u_j \\varphi_j(x)',
            caption: '有限元近似：形函数的线性组合。'
          },
          {
            tex: 'K u = f',
            caption: '组装后的线性系统（刚度矩阵 $K$）。'
          }
        ],
        example: [
          '二维 Poisson 方程在三角形网格上的有限元：每个节点对应一个“帽子函数”，组装得到稀疏刚度矩阵。'
        ],
        related: ['mesh-discretization', 'pde-models', 'analysis/weak-solutions']
      },
      {
        id: 'simulation-validation',
        name: '仿真验证',
        brief: '检查数值收敛并与现实数据比较',
        keywords: ['仿真验证', '收敛性', '验证与确认', 'V&V'],
        definition: [
          '**验证**（verification）检查数值方法是否正确实现并收敛；**确认**（validation）检查模型是否真实反映物理现实。二者合称 V&V。',
          '常用方法：网格收敛研究（Richardson 外推）、与解析解比较、与实验数据比较、敏感性分析。'
        ],
        intuition: [
          '仿真验证回答两个问题：“代码写对了吗？”（验证）与“模型用对了吗？”（确认）。两者缺一不可。',
          '网格加密后结果应收敛；若结果随网格振荡或发散，说明格式不稳定或实现有误。'
        ],
        formulas: [
          {
            tex: 'e_h = C h^p + O(h^{p+1})',
            caption: '误差随网格步长的收敛阶。'
          },
          {
            tex: '\\mathrm{GCI} = F_s \\frac{|e|}{r^p - 1}',
            caption: '网格收敛指数（Richardson 外推）。'
          }
        ],
        example: [
          '翼型气动仿真：网格加密后升力系数趋于稳定值；若与风洞数据相差甚远，则需要修正湍流模型（确认问题）。'
        ],
        related: ['mesh-discretization', 'error-analysis', 'finite-elements']
      }
    ]
  },
  {
    id: 'financial-mathematics',
    name: '金融数学',
    en: 'FINANCIAL MATHEMATICS',
    brief: '定价、风险与随机模型',
    color: '#d0da6c',
    angle: -95,
    topics: [
      {
        id: 'stochastic-price-models',
        name: '随机价格模型',
        brief: '描述资产价格与不确定性',
        keywords: ['随机价格', '几何布朗运动', '波动率', '跳跃'],
        definition: [
          '**随机价格模型**用随机过程描述资产价格。经典模型是几何布朗运动：$dS_t = \\mu S_t\\,dt + \\sigma S_t\\,dW_t$。',
          '更复杂的模型加入跳跃（Merton 跳跃扩散）、随机波动率（Heston 模型）或分数布朗运动。'
        ],
        intuition: [
          '几何布朗运动假设收益率是正态分布，价格始终为正；其对数收益率服从正态分布。这符合股票价格的许多统计特征。',
          '真实市场有厚尾、波动率聚集与跳跃；因此需要更复杂的模型，但几何布朗运动仍是定价理论的基准。'
        ],
        formulas: [
          {
            tex: 'dS_t = \\mu S_t\\,dt + \\sigma S_t\\,dW_t',
            caption: '几何布朗运动。'
          },
          {
            tex: 'S_t = S_0 \\exp\\left(\\left(\\mu - \\frac{\\sigma^2}{2}\\right)t + \\sigma W_t\\right)',
            caption: '显式解（对数正态分布）。'
          }
        ],
        example: [
          '若 $S_0 = 100$，$\\mu = 0.1$，$\\sigma = 0.2$，一年后价格的期望为 $110$，但分布范围很宽（约 $68\\%$ 概率在 $82$ 到 $149$ 之间）。'
        ],
        related: ['no-arbitrage-pricing', 'probability/brownian-motion', 'probability/sdes']
      },
      {
        id: 'no-arbitrage-pricing',
        name: '无套利定价',
        brief: '在无套利假设下研究价格约束',
        keywords: ['无套利', '风险中性', 'Black-Scholes', '定价'],
        definition: [
          '**无套利原理**：不存在无风险、无初始投入而获得正收益的策略。在有限事件树、可自由多空且按正无风险资产折现的市场中，无套利等价于存在等价风险中性测度 $\\mathbb{Q}$，可复制衍生品的折现价格等于其折现收益在任一该测度下的期望；不可复制收益一般没有唯一价格。',
          'Black–Scholes 公式给出欧式看涨期权价格：$C = S_0 N(d_1) - K e^{-rT} N(d_2)$。'
        ],
        intuition: [
          '无套利定价的核心是“复制”：如果可以用股票与债券复制期权的收益，那么期权价格必须等于复制组合的成本，否则存在套利。',
          '风险中性测度是数学技巧：在 $\\mathbb{Q}$ 下，所有资产的折现价格是鞅，定价变成求期望。物理概率与风险中性概率不同，但价格只依赖后者。'
        ],
        formulas: [
          {
            tex: 'C = S_0 N(d_1) - K e^{-rT} N(d_2)',
            caption: 'Black–Scholes 欧式看涨期权价格。'
          },
          {
            tex: 'd_{1,2} = \\frac{\\log(S_0/K) + (r \\pm \\sigma^2/2)T}{\\sigma\\sqrt T}',
            caption: '$d_1, d_2$ 的定义。'
          },
          {
            tex: 'V_t = e^{-r(T-t)} \\mathbb{E}^{\\mathbb{Q}}[V_T \\mid \\mathcal{F}_t]',
            caption: '风险中性定价公式。'
          }
        ],
        example: [
          '$S_0 = 100$，$K = 100$，$r = 5\\%$，$\\sigma = 20\\%$，$T = 1$：Black–Scholes 给出看涨期权价格约 $10.45$。'
        ],
        related: ['stochastic-price-models', 'hedging-replication', 'probability/martingales']
      },
      {
        id: 'hedging-replication',
        name: '对冲与复制',
        brief: '构造组合抵消或复制特定风险',
        keywords: ['对冲', '复制组合', 'Delta 对冲', '完备市场'],
        definition: [
          '**对冲**用交易标的资产构造组合，使衍生品价格风险被抵消。**复制**构造与衍生品收益完全相同的组合。',
          '在 Black–Scholes 模型中，Delta 对冲持有 $\\Delta = \\partial C/\\partial S$ 份股票，使组合瞬时无风险。'
        ],
        intuition: [
          '对冲是“用股票与现金模拟期权”：如果组合的收益与期权相同，期权价格就被复制成本锁定。',
          '动态对冲需要连续调整仓位；现实中交易成本与离散调整导致对冲误差，这是实际风险管理的重要问题。'
        ],
        formulas: [
          {
            tex: '\\Delta = \\frac{\\partial C}{\\partial S} = N(d_1)',
            caption: 'Black–Scholes Delta。'
          },
          {
            tex: '\\Pi = C - \\Delta S',
            caption: 'Delta 中性组合。'
          }
        ],
        example: [
          '卖出 1 份看涨期权，买入 $\\Delta = 0.6$ 份股票：股票价格上涨时期权亏损被股票盈利抵消，组合短期无风险。'
        ],
        related: ['no-arbitrage-pricing', 'stochastic-price-models', 'risk-measures']
      },
      {
        id: 'monte-carlo',
        name: '蒙特卡洛',
        brief: '用随机抽样估计所求量',
        keywords: ['蒙特卡洛', '抽样', '方差缩减', 'Quasi-Monte Carlo'],
        definition: [
          '**蒙特卡洛方法**用随机样本估计期望或积分：$\\mathbb{E}[f(X)] \\approx \\frac{1}{N} \\sum_{i=1}^{N} f(X_i)$，误差为 $O(1/\\sqrt N)$。',
          '金融中用于高维期权定价、风险度量与情景模拟；方差缩减技术（重要性采样、控制变量）可显著提高精度。'
        ],
        intuition: [
          '蒙特卡洛是“用随机实验代替计算”：抛硬币估计圆周率、模拟价格路径估计期权价格。维数越高，优势越明显。',
          '收敛速度 $1/\\sqrt N$ 与维数无关，这是它适合高维问题的原因；但精度提升 10 倍需要 100 倍样本。'
        ],
        formulas: [
          {
            tex: '\\hat{\\mu}_N = \\frac{1}{N} \\sum_{i=1}^{N} f(X_i)',
            caption: '蒙特卡洛估计。'
          },
          {
            tex: '\\mathrm{Var}(\\hat{\\mu}_N) = \\frac{\\mathrm{Var}(f(X))}{N}',
            caption: '估计方差。'
          },
          {
            tex: '\\text{误差} = O(N^{-1/2})',
            caption: '收敛速率。'
          }
        ],
        example: [
          '亚洲期权定价：模拟 10 万条价格路径，计算每条路径的平均价格与收益，取平均折现得到价格；误差约 $1/\\sqrt{100000} \\approx 0.3\\%$。'
        ],
        related: ['no-arbitrage-pricing', 'stochastic-price-models', 'risk-measures']
      },
      {
        id: 'risk-measures',
        name: '风险度量',
        brief: '量化损失分布的不同特征',
        keywords: ['风险度量', 'VaR', 'CVaR', '一致性风险度量'],
        definition: [
          '**风险度量**把损失分布映射为非负数值。VaR（在险价值）是给定置信水平下的最大损失分位数；CVaR（条件在险价值）是超过 VaR 的平均损失。',
          '一致性风险度量满足单调性、次可加性、正齐次性与平移不变性；VaR 不满足次可加性，CVaR 满足。'
        ],
        intuition: [
          'VaR 回答“95% 情况下最多亏多少”，CVaR 回答“如果超过 VaR，平均亏多少”。CVaR 更保守，也更容易优化。',
          '风险管理需要一致性：两个组合合并后风险不应超过各自风险之和（次可加性），VaR 可能违背这一直觉。'
        ],
        formulas: [
          {
            tex: '\\mathrm{VaR}_\\alpha = \\inf\\{x : P(L \\le x) \\ge \\alpha\\}',
            caption: 'VaR 的定义（$L$ 为损失）。'
          },
          {
            tex: '\\mathrm{CVaR}_\\alpha = \\mathbb{E}[L \\mid L > \\mathrm{VaR}_\\alpha]',
            caption: 'CVaR 的定义。'
          }
        ],
        example: [
          '损失分布为 $1\\%$ 概率亏 100 万、$99\\%$ 概率亏 1 万：$\\mathrm{VaR}_{95\\%} = 1$ 万，但 $\\mathrm{CVaR}_{95\\%}$ 约 100 万，揭示了尾部风险。'
        ],
        related: ['monte-carlo', 'hedging-replication', 'stochastic-price-models']
      },
      {
        id: 'optimal-portfolio',
        name: '最优配置',
        brief: '在目标与约束下选择资产组合',
        keywords: ['最优配置', 'Markowitz', '有效前沿', '效用'],
        definition: [
          '**最优资产配置**在给定收益目标（或风险预算）下选择权重 $w$，最大化期望效用或最小化风险。Markowitz 均值-方差模型：$\\min w^\\top \\Sigma w$ s.t. $\\mu^\\top w \\ge \\mu_0$，$\\mathbf{1}^\\top w = 1$。',
          '有效前沿是给定风险下收益最高（或给定收益下风险最低）的组合集合。'
        ],
        intuition: [
          '分散化降低风险：相关性低的资产组合可以在不降低期望收益的情况下减少波动。Markowitz 用协方差矩阵量化这一点。',
          '实际配置还需考虑交易成本、流动性、约束与模型不确定性；Black–Litterman 等方法把观点与市场均衡结合。'
        ],
        formulas: [
          {
            tex: '\\min_w w^\\top \\Sigma w \\quad \\text{s.t.}\\ \\mu^\\top w = \\mu_0,\\ \\mathbf{1}^\\top w = 1',
            caption: 'Markowitz 均值-方差优化。'
          },
          {
            tex: 'w^* = \\frac{\\Sigma^{-1}\\mu}{\\mathbf{1}^\\top \\Sigma^{-1}\\mu}',
            caption: '最大化夏普比的最优权重（示意）。'
          }
        ],
        example: [
          '两个资产：$\\mu_1 = 10\\%, \\sigma_1 = 20\\%$，$\\mu_2 = 5\\%, \\sigma_2 = 10\\%$，相关系数 0：等权组合波动约 $11.2\\%$，低于任一资产（分散化收益）。'
        ],
        related: ['risk-measures', 'convex-optimization', 'monte-carlo']
      }
    ]
  },
  {
    id: 'biomathematics',
    name: '生物数学',
    en: 'BIOMATHEMATICS',
    brief: '种群、传播与生命系统建模',
    color: '#bed566',
    angle: -140,
    topics: [
      {
        id: 'population-dynamics',
        name: '种群动力学',
        brief: '研究繁殖、竞争与捕食的演化',
        keywords: ['种群动力学', 'Logistic', 'Lotka-Volterra', '平衡点'],
        definition: [
          '**种群动力学**用微分方程描述种群数量变化。指数增长 $\\dot N = rN$；Logistic 增长 $\\dot N = rN(1 - N/K)$ 加入环境容量 $K$。',
          '捕食-被捕食系统（Lotka–Volterra）：$\\dot x = \\alpha x - \\beta xy$，$\\dot y = \\delta xy - \\gamma y$，呈现周期振荡。'
        ],
        intuition: [
          'Logistic 模型说明资源有限时增长会放缓，最终稳定在容量 $K$；这条 S 形曲线广泛用于描述生物与市场增长。',
          'Lotka–Volterra 系统说明捕食者与被捕食者数量相互制约，形成周期性波动；这是非线性动力系统的经典例子。'
        ],
        formulas: [
          {
            tex: '\\dot N = rN\\left(1 - \\frac{N}{K}\\right)',
            caption: 'Logistic 增长。'
          },
          {
            tex: '\\dot x = \\alpha x - \\beta xy,\\quad \\dot y = \\delta xy - \\gamma y',
            caption: 'Lotka–Volterra 捕食模型。'
          }
        ],
        example: [
          '细菌培养：初始 100 个，增长率 $r = 0.5$/小时，容量 $K = 10000$；Logistic 模型预测约 18 小时后达到容量的一半。'
        ],
        related: ['epidemic-models', 'reaction-diffusion', 'analysis/equilibria-periodic-orbits']
      },
      {
        id: 'epidemic-models',
        name: '传染病模型',
        brief: '描述传播、恢复与人群结构',
        keywords: ['传染病模型', 'SIR', 'R0', '群体免疫'],
        definition: [
          '**SIR 模型**把人群分为易感者 $S$、感染者 $I$、康复者 $R$：$\\dot S = -\\beta SI/N$，$\\dot I = \\beta SI/N - \\gamma I$，$\\dot R = \\gamma I$。',
          '基本再生数 $R_0 = \\beta/\\gamma$ 决定疫情是否暴发：$R_0 > 1$ 时感染人数增长，$R_0 < 1$ 时消退。'
        ],
        intuition: [
          'SIR 模型是“隔间模型”：人群在 S、I、R 三个状态间流动。感染率由接触率 $\\beta$ 决定，恢复率由 $\\gamma$ 决定。',
          '群体免疫阈值 $1 - 1/R_0$ 是疫苗接种的目标；$R_0$ 越大，需要的接种比例越高。'
        ],
        formulas: [
          {
            tex: '\\dot S = -\\frac{\\beta SI}{N},\\quad \\dot I = \\frac{\\beta SI}{N} - \\gamma I,\\quad \\dot R = \\gamma I',
            caption: 'SIR 方程。'
          },
          {
            tex: 'R_0 = \\frac{\\beta}{\\gamma}',
            caption: '基本再生数。'
          },
          {
            tex: '\\text{群体免疫阈值} = 1 - \\frac{1}{R_0}',
            caption: '所需免疫比例。'
          }
        ],
        example: [
          '麻疹 $R_0 \\approx 12-18$，群体免疫阈值约 $92\\%$；季节性流感 $R_0 \\approx 1.3$，阈值约 $23\\%$。'
        ],
        related: ['population-dynamics', 'analysis/odes', 'parameter-calibration']
      },
      {
        id: 'reaction-diffusion',
        name: '反应扩散',
        brief: '研究局部反应与空间迁移',
        keywords: ['反应扩散', 'Turing 斑图', '扩散方程', '行波'],
        definition: [
          '**反应扩散方程**同时描述物质的局部化学反应与空间扩散：$\\partial_t u = D_u \\Delta u + f(u, v)$，$\\partial_t v = D_v \\Delta v + g(u, v)$。',
          'Turing 斑图：当扩散系数差异足够大时，均匀稳态失稳，形成空间周期图案（动物条纹、斑点的数学模型）。'
        ],
        intuition: [
          '反应扩散是“化学与扩散的竞争”：反应试图让浓度均匀或振荡，扩散试图抹平差异；二者耦合可以产生稳定图案。',
          'Turing（1952）提出这一机制，解释了斑马条纹、贝壳花纹的形成。图灵斑图是“自组织”的经典例子。'
        ],
        formulas: [
          {
            tex: '\\partial_t u = D_u \\Delta u + f(u, v)',
            caption: '反应扩散方程（$u$ 的方程）。'
          },
          {
            tex: 'D_v \\gg D_u \\implies \\text{Turing 不稳定}',
            caption: '扩散诱导失稳的条件（示意）。'
          }
        ],
        example: [
          'Gray–Scott 模型模拟化学反应中的斑点与条纹；改变参数可得到斑点、条纹、波浪等图案。'
        ],
        related: ['pde-models', 'population-dynamics', 'analysis/bifurcation']
      },
      {
        id: 'biological-networks',
        name: '生物网络',
        brief: '用网络描述调控与相互作用',
        keywords: ['生物网络', '网络', '模体', '鲁棒性'],
        definition: [
          '**生物网络**用图表示生物分子间的相互作用：基因调控网络、蛋白质相互作用网络、代谢网络。节点是分子，边是相互作用。',
          '网络性质：度分布、聚类系数、模体（motif）、鲁棒性。生物网络常呈现无标度或小世界特征。'
        ],
        intuition: [
          '生物网络是“生命系统的线路图”：基因调控网络决定细胞状态，代谢网络决定物质流。网络结构影响系统的鲁棒性与适应性。',
          '模体是网络中的重复子图（如前馈环），可能是生物功能的基本模块；网络鲁棒性说明生物系统对扰动有缓冲能力。'
        ],
        formulas: [
          {
            tex: 'P(k) \\sim k^{-\\gamma}',
            caption: '无标度网络的度分布。'
          },
          {
            tex: 'C_i = \\frac{2 E_i}{k_i(k_i - 1)}',
            caption: '节点 $i$ 的聚类系数。'
          }
        ],
        example: [
          '大肠杆菌的基因调控网络包含大量前馈环模体，用于过滤噪声与产生时序响应。'
        ],
        related: ['discrete/graphs-networks', 'population-dynamics', 'statistical-mechanics']
      },
      {
        id: 'parameter-calibration',
        name: '参数校准',
        brief: '用数据估计生物模型参数',
        keywords: ['参数校准', '最小二乘', 'MCMC', '敏感性分析'],
        definition: [
          '**参数校准**用观测数据估计模型参数，使模型输出与数据吻合。常用方法：最小二乘、最大似然、贝叶斯 MCMC。',
          '敏感性分析识别哪些参数对输出影响最大，指导实验设计与参数估计。'
        ],
        intuition: [
          '生物模型参数往往无法直接测量（如反应速率），只能通过拟合整体行为间接估计。',
          '参数校准是不适定问题的典型例子：不同参数组合可能产生相似输出，需要先验或额外数据约束。'
        ],
        formulas: [
          {
            tex: '\\hat{\\theta} = \\arg\\min_\\theta \\sum_i (y_i - f(t_i; \\theta))^2',
            caption: '最小二乘校准。'
          },
          {
            tex: 'p(\\theta \\mid y) \\propto p(y \\mid \\theta) p(\\theta)',
            caption: '贝叶斯校准。'
          }
        ],
        example: [
          '用疫情早期数据校准 SIR 模型的 $\\beta, \\gamma$：拟合感染人数曲线，估计 $R_0$ 与峰值时间。'
        ],
        related: ['epidemic-models', 'parameter-inversion', 'identifiability']
      }
    ]
  }
);