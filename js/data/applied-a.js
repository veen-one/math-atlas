/* 数学知识地图 · 应用与计算数学（上） */
window.ATLAS = window.ATLAS || { subjects: {} };

window.ATLAS.subjects.applied = {
  id: 'applied',
  name: '应用与计算数学',
  en: 'APPLIED MATHEMATICS',
  tagline: '把现实变成模型，把模型变成可检验的答案',
  color: '#b8cf6a',
  startAngle: 130,
  branches: [
    {
      id: 'numerical-analysis',
      name: '数值分析',
      en: 'NUMERICAL ANALYSIS',
      brief: '近似计算、误差与稳定性',
      color: '#c4d96e',
      angle: 130,
      topics: [
        {
          id: 'numerical-stability',
          name: '数值稳定性',
          brief: '分析算法如何放大或控制误差',
          keywords: ['数值稳定性', '误差放大', '稳定算法', '舍入误差'],
          definition: [
            '算法称为**数值稳定**的，如果输入或中间计算的微小扰动不会导致输出发生不可接受的放大。稳定性分析研究误差在迭代中的传播。',
            '稳定算法保证舍入误差保持有界；不稳定算法会让误差指数增长，即使数学上精确的算法也可能在浮点运算中失效。'
          ],
          intuition: [
            '倒推递推 $y_{n-1} = (y_n - 1)/3$ 是典型的不稳定例子：初始误差每步放大 3 倍。而正向递推 $y_{n+1} = 3y_n + 1$ 虽然也放大，但在实际计算中误差受控。',
            '稳定性与条件数是不同概念：条件数描述问题本身的敏感度，稳定性描述算法是否额外放大误差。一个好算法在坏问题上仍可能失败。'
          ],
          formulas: [
            {
              tex: '\\| \\hat{x} - x \\| \\le \\kappa(A)\\,\\| \\delta b \\|',
              caption: '扰动放大由条件数 $\\kappa(A)$ 控制。'
            },
            {
              tex: '\\rho(A) < 1 \\implies \\text{迭代稳定}',
              caption: '迭代矩阵谱半径小于 1 保证收敛与稳定。'
            }
          ],
          example: [
            '用 $y_{n+1} = 3.001 y_n$ 迭代，误差每步放大 3.001 倍；100 步后放大 $10^{47}$ 倍，完全失去精度。'
          ],
          related: ['condition-numbers', 'error-analysis', 'numerical-linear-algebra']
        },
        {
          id: 'condition-numbers',
          name: '条件数',
          brief: '衡量问题对输入扰动的敏感度',
          keywords: ['条件数', '病态问题', '矩阵条件数', '敏感度'],
          definition: [
            '问题的**条件数**衡量输入相对扰动对输出相对扰动的影响。对线性方程组 $Ax = b$，条件数为 $\\kappa(A) = \\|A\\|\\,\\|A^{-1}\\|$。',
            '$\\kappa(A)$ 接近 1 表示良态；$\\kappa(A) \\gg 1$ 表示病态，输入的小误差会被放大为解的大误差。'
          ],
          intuition: [
            '条件数是问题本身的属性，与算法无关：病态问题意味着“信息本身很敏感”，再好的算法也无法消除。',
            'Hilbert 矩阵是经典病态矩阵：$8 \\times 8$ 的 Hilbert 矩阵条件数约为 $1.5 \\times 10^{10}$，双精度下几乎不可直接求逆。'
          ],
          formulas: [
            {
              tex: '\\kappa_p(A) = \\|A\\|_p \\,\\|A^{-1}\\|_p',
              caption: '矩阵 $p$-范数条件数。'
            },
            {
              tex: '\\frac{\\|\\delta x\\|}{\\|x\\|} \\le \\kappa(A) \\frac{\\|\\delta b\\|}{\\|b\\|}',
              caption: '条件数放大相对误差。'
            },
            {
              tex: '\\kappa_2(A) = \\frac{\\sigma_{\\max}}{\\sigma_{\\min}}',
              caption: '2-范数条件数等于最大与最小奇异值之比。'
            }
          ],
          example: [
            '$A = \\begin{pmatrix} 1 & 1 \\\\ 1 & 1.0001 \\end{pmatrix}$ 的条件数约为 $4 \\times 10^4$；$b$ 的微小变化会使解剧烈变化。'
          ],
          related: ['numerical-stability', 'error-analysis', 'numerical-linear-algebra']
        },
        {
          id: 'numerical-integration',
          name: '数值积分',
          brief: '通过有限计算近似积分',
          keywords: ['数值积分', '梯形法', 'Simpson 法', 'Gauss 求积'],
          definition: [
            '**数值积分**用有限个函数值的加权和近似积分：$\\int_a^b f(x)\\,dx \\approx \\sum_{i=0}^{n} w_i f(x_i)$。',
            '常用方法：梯形法（误差 $O(h^2)$）、Simpson 法（误差 $O(h^4)$）、Gauss 求积（用正交多项式零点，达到最高精度）。'
          ],
          intuition: [
            '数值积分把曲线下的面积切成小条，用简单形状（梯形、抛物线）近似每一条，再求和。',
            'Gauss 求积“聪明地”选择采样点：$n$ 个点就能精确积分 $2n-1$ 次多项式，效率远高于等距采样。'
          ],
          formulas: [
            {
              tex: '\\int_a^b f(x)\\,dx \\approx \\frac{h}{2}\\left[f(a) + 2\\sum_{i=1}^{n-1} f(x_i) + f(b)\\right]',
              caption: '复合梯形公式。'
            },
            {
              tex: '\\int_a^b f(x)\\,dx \\approx \\frac{h}{3}\\left[f(a) + 4\\sum_{\\text{odd}} f + 2\\sum_{\\text{even}} f + f(b)\\right]',
              caption: '复合 Simpson 公式。'
            },
            {
              tex: '\\int_{-1}^{1} f(x)\\,dx \\approx \\sum_{i=1}^{n} w_i f(x_i)',
              caption: 'Gauss–Legendre 求积。'
            }
          ],
          example: [
            '用梯形法估算 $\\int_0^1 e^x\\,dx$（精确值 $e - 1 \\approx 1.71828$）：$n = 4$ 时梯形法给出 $1.7272$，Simpson 法给出 $1.71832$。'
          ],
          related: ['error-analysis', 'finite-elements', 'numerical-stability']
        },
        {
          id: 'error-analysis',
          name: '误差分析',
          brief: '追踪舍入误差与离散误差',
          keywords: ['误差分析', '截断误差', '舍入误差', '收敛阶'],
          definition: [
            '数值计算误差分为**截断误差**（用有限近似替代无穷过程）与**舍入误差**（浮点表示不精确）。误差分析估计二者对最终结果的影响。',
            '算法的**收敛阶** $p$ 指误差随步长 $h$ 按 $O(h^p)$ 衰减；阶越高，收敛越快。'
          ],
          intuition: [
            '截断误差来自“数学近似”（如用前 $n$ 项近似无穷级数），舍入误差来自“机器精度”（如 $1/3$ 无法精确表示）。两者往往此消彼长。',
            '减少步长会降低截断误差，但增加计算步数会累积舍入误差；存在最优步长使总误差最小。'
          ],
          formulas: [
            {
              tex: '\\text{总误差} \\le \\text{截断误差} + \\text{舍入误差}',
              caption: '误差分解。'
            },
            {
              tex: '\\|x_n - x\\| = O(h^p)',
              caption: '收敛阶 $p$。'
            },
            {
              tex: '\\varepsilon_{\\mathrm{mach}} \\approx 2.2 \\times 10^{-16}',
              caption: '双精度浮点的机器精度。'
            }
          ],
          example: [
            '中心差分近似导数 $f\'(x) \\approx (f(x+h) - f(x-h))/(2h)$ 的截断误差为 $O(h^2)$，但舍入误差为 $O(\\varepsilon/h)$；最优 $h \\sim \\varepsilon^{1/3}$。'
          ],
          related: ['numerical-stability', 'condition-numbers', 'numerical-integration']
        }
      ]
    },
    {
      id: 'optimization',
      name: '优化与运筹',
      en: 'OPTIMIZATION & OPERATIONS RESEARCH',
      brief: '约束下寻找最优解与资源分配',
      color: '#cadf7a',
      angle: 85,
      topics: [
        {
          id: 'linear-programming',
          name: '线性规划',
          brief: '在线性约束下优化线性目标',
          keywords: ['线性规划', '单纯形法', '可行域', '对偶'],
          definition: [
            '**线性规划**是优化问题：$\\min c^\\top x$ 满足 $Ax \\le b$，$x \\ge 0$。可行域是多面体，目标函数是线性的。',
            '最优解必在可行域的顶点取得（若存在）。单纯形法沿顶点移动；内点法在多项式时间内求解。'
          ],
          intuition: [
            '线性规划是“在直线围成的区域内找最优点”：线性目标的最优值总在边界顶点，因此只需检查顶点。',
            '线性规划广泛应用于资源分配、调度、网络流；整数约束版本（整数规划）则是 NP 难的。'
          ],
          formulas: [
            {
              tex: '\\min\\ c^\\top x \\quad \\text{s.t.}\\ Ax \\le b,\\ x \\ge 0',
              caption: '线性规划标准形。'
            },
            {
              tex: '\\text{最优解在可行域的顶点}',
              caption: '线性规划基本定理。'
            },
            {
              tex: '\\max\\ b^\\top y \\quad \\text{s.t.}\\ A^\\top y \\ge c,\\ y \\ge 0',
              caption: '对偶问题（强对偶成立）。'
            }
          ],
          example: [
            '$\\max 3x + 2y$，约束 $x + y \\le 4$，$x \\le 2$，$x, y \\ge 0$：最优解在 $(2, 2)$，目标值 $10$。'
          ],
          related: ['convex-optimization', 'duality', 'discrete/integer-programming']
        },
        {
          id: 'convex-optimization',
          name: '凸优化',
          brief: '利用凸性寻找全局最优解',
          keywords: ['凸优化', '凸函数', 'KKT 条件', '全局最优'],
          definition: [
            '**凸优化**是 $\\min f(x)$ 满足 $x \\in C$，其中 $f$ 是凸函数、$C$ 是凸集。凸优化的局部最优解就是全局最优解。',
            'KKT 条件（Karush–Kuhn–Tucker）给出最优性的必要与（在约束品性下）充分条件。'
          ],
          intuition: [
            '凸函数像碗：只有一个最低点，梯度下降不会陷入局部极小。这是凸优化在机器学习中广泛应用的原因。',
            '线性规划、二次规划、半定规划都是凸优化的特例；非凸问题常通过松弛或近似转化为凸问题。'
          ],
          formulas: [
            {
              tex: 'f(tx + (1-t)y) \\le tf(x) + (1-t)f(y)',
              caption: '凸函数定义。'
            },
            {
              tex: '\\nabla f(x^*) = 0 \\ \\text{（无约束）}',
              caption: '凸函数的最优性一阶条件。'
            },
            {
              tex: '\\nabla f(x^*) + \\sum_i \\lambda_i \\nabla g_i(x^*) = 0,\\quad \\lambda_i g_i(x^*) = 0',
              caption: 'KKT 条件（不等式约束）。'
            }
          ],
          example: [
            '最小二乘 $\\min \\|Ax - b\\|^2$ 是凸二次优化，解为 $x^* = (A^\\top A)^{-1} A^\\top b$（当 $A$ 列满秩）。'
          ],
          related: ['linear-programming', 'nonlinear-optimization', 'duality']
        },
        {
          id: 'nonlinear-optimization',
          name: '非线性优化',
          brief: '研究更一般的目标与约束',
          keywords: ['非线性优化', '梯度下降', '牛顿法', '拉格朗日乘子'],
          definition: [
            '**非线性优化**处理目标函数或约束非线性的问题。常用方法：梯度下降、牛顿法、拟牛顿法、内点法。',
            '拉格朗日乘子法把约束优化转化为无约束问题：$\\mathcal{L}(x, \\lambda) = f(x) + \\sum \\lambda_i g_i(x)$。'
          ],
          intuition: [
            '梯度下降沿负梯度方向走，像下山；牛顿法用二阶信息（Hessian）选择更优的步长与方向，收敛更快但计算更贵。',
            '非凸问题可能陷入局部极小或鞍点；深度学习中的优化问题高度非凸，但实践表明随机梯度下降（SGD）仍能找到好解。'
          ],
          formulas: [
            {
              tex: 'x_{k+1} = x_k - \\eta \\nabla f(x_k)',
              caption: '梯度下降。'
            },
            {
              tex: 'x_{k+1} = x_k - [H_f(x_k)]^{-1} \\nabla f(x_k)',
              caption: '牛顿法。'
            },
            {
              tex: '\\nabla f(x^*) + \\sum_i \\lambda_i \\nabla g_i(x^*) = 0',
              caption: '拉格朗日乘子条件。'
            }
          ],
          example: [
            'Rosenbrock 函数 $f(x,y) = (1-x)^2 + 100(y-x^2)^2$ 有狭窄弯曲的山谷，梯度下降收敛慢，牛顿法快但在远处可能不稳定。'
          ],
          related: ['convex-optimization', 'linear-programming', 'optimal-control']
        },
        {
          id: 'duality',
          name: '对偶理论',
          brief: '从另一个优化问题获得界与结构',
          keywords: ['对偶', '拉格朗日对偶', '弱对偶', '强对偶'],
          definition: [
            '**拉格朗日对偶**把原问题 $\\min f_0(x)$ s.t. $f_i(x) \\le 0$ 转化为对偶问题 $\\max_{\\lambda \\ge 0} g(\\lambda)$，其中 $g(\\lambda) = \\inf_x \\mathcal{L}(x, \\lambda)$。',
            '弱对偶：对偶最优值不超过原问题最优值。强对偶：在凸问题与 Slater 条件下二者相等。'
          ],
          intuition: [
            '对偶问题从“下界”逼近原问题：对偶最优值是原问题最优值的下界，差距称为对偶间隙。',
            '强对偶把“最小化”转化为“最大化”，往往更容易求解或提供经济解释（如影子价格）。'
          ],
          formulas: [
            {
              tex: 'g(\\lambda) = \\inf_x \\left[ f_0(x) + \\sum_i \\lambda_i f_i(x) \\right]',
              caption: '拉格朗日对偶函数。'
            },
            {
              tex: 'd^* \\le p^*',
              caption: '弱对偶：对偶最优值不超过原问题最优值。'
            },
            {
              tex: 'd^* = p^* \\quad \\text{（凸问题 + Slater 条件）}',
              caption: '强对偶。'
            }
          ],
          example: [
            '线性规划的对偶仍是线性规划，且强对偶总成立；对偶变量可解释为约束的“影子价格”。'
          ],
          related: ['linear-programming', 'convex-optimization', 'nonlinear-optimization']
        },
        {
          id: 'numerical-linear-algebra',
          name: '数值线性代数',
          brief: '高效求解线性方程与矩阵问题',
          keywords: ['数值线性代数', 'LU 分解', 'QR 分解', '迭代法'],
          definition: [
            '**数值线性代数**研究矩阵计算的高效稳定算法：线性方程组、特征值、奇异值分解、最小二乘。',
            '直接法包括 LU、QR、Cholesky 分解；迭代法（共轭梯度、GMRES）适合大规模稀疏矩阵。'
          ],
          intuition: [
            '直接法在有限步内求出精确解（在浮点意义下），但复杂度随规模增长；迭代法用近似序列逼近解，适合超大稀疏问题。',
            '矩阵分解把复杂问题化为简单操作：LU 把求逆变成前代与回代，QR 稳定地求解最小二乘。'
          ],
          formulas: [
            {
              tex: 'A = LU',
              caption: 'LU 分解（带部分主元）。'
            },
            {
              tex: 'A = QR',
              caption: 'QR 分解（正交-上三角）。'
            },
            {
              tex: 'Ax = b \\iff x = A^{-1}b',
              caption: '线性方程组；实际求解避免显式求逆。'
            }
          ],
          example: [
            '共轭梯度法求解 $Ax = b$（$A$ 对称正定）在 $n$ 步内（精确算术下）收敛，常用于有限元离散后的百万维稀疏系统。'
          ],
          related: ['numerical-stability', 'condition-numbers', 'finite-elements']
        },
        {
          id: 'scheduling',
          name: '调度与决策',
          brief: '协调任务、时间与有限资源',
          keywords: ['调度', '排序', '甘特图', '整数规划建模'],
          definition: [
            '**调度**研究在有限资源与时间约束下安排任务，使完成时间、成本或延迟最优。典型问题：单机排序、车间调度、项目调度。',
            '调度问题通常建模为整数规划或约束规划；许多变体是 NP 难的，需要启发式或近似算法。'
          ],
          intuition: [
            '调度是“排班与排产”的数学：工厂机器、计算机任务、会议安排都是调度问题。目标可能是最小化总完成时间或最大延迟。',
            '简单规则（如最短处理时间优先）在特定目标下最优；复杂约束需要整数规划求解器或元启发式（遗传算法、模拟退火）。'
          ],
          formulas: [
            {
              tex: '\\min C_{\\max} = \\max_j C_j',
              caption: '最小化最大完工时间（makespan）。'
            },
            {
              tex: '\\sum_j w_j T_j \\quad \\text{（加权总延迟）}',
              caption: '常见的延迟目标。'
            }
          ],
          example: [
            '两台机器、三个作业的流水车间调度：最优顺序可能不是按处理时间排序，需要枚举或 Johnson 规则（两机情形）。'
          ],
          related: ['linear-programming', 'discrete/integer-programming', 'discrete/dynamic-programming']
        }
      ]
    },
    {
      id: 'inverse-problems',
      name: '逆问题',
      en: 'INVERSE PROBLEMS',
      brief: '由观测反推参数、结构与原因',
      color: '#b7d162',
      angle: 175,
      topics: [
        {
          id: 'ill-posedness',
          name: '不适定性',
          brief: '解可能不唯一或对扰动敏感',
          keywords: ['不适定', 'Hadamard', '不稳定性', '逆问题'],
          definition: [
            '问题称为**适定**（Hadamard），如果解存在、唯一且连续依赖于数据。否则称为**不适定**。逆问题常因不连续依赖而病态。',
            '例如从模糊图像恢复清晰图像：模糊算子压缩高频信息，逆映射放大噪声，导致解对数据极其敏感。'
          ],
          intuition: [
            '很多逆问题是“多个原因对应同一结果”：从投影重建 CT 图像、从地震波反推地层结构，都存在不唯一或不稳定。',
            '不适定性不是“无法求解”，而是需要正则化或先验信息来稳定求解。'
          ],
          formulas: [
            {
              tex: 'Kx = y,\\quad K \\text{ 紧算子} \\implies K^{-1} \\text{ 不连续}',
              caption: '紧算子的逆通常不连续，导致不适定。'
            },
            {
              tex: '\\|K x_1 - K x_2\\| \\text{ 小} \\nRightarrow \\|x_1 - x_2\\| \\text{ 小}',
              caption: '解不连续依赖数据。'
            }
          ],
          example: [
            '数值微分是不适定的：函数值的小扰动会导致导数的巨大变化（差分放大噪声）。'
          ],
          related: ['regularized-inversion', 'identifiability', 'parameter-inversion']
        },
        {
          id: 'identifiability',
          name: '可辨识性',
          brief: '判断不同参数能否被观测区分',
          keywords: ['可辨识性', '参数冗余', '结构可辨识', '观测'],
          definition: [
            '模型参数称为**可辨识**的，如果不同的参数值产生不同的观测分布；否则存在不可辨识的参数组合。',
            '结构可辨识性依赖于模型形式；实践可辨识性还依赖于数据量与噪声。'
          ],
          intuition: [
            '如果两个参数总是以乘积或和的形式出现，单独估计它们是不可能的——只有它们的组合可辨识。',
            '在流行病模型中，感染率与报告率可能混在一起；需要额外数据或约束才能分开。'
          ],
          formulas: [
            {
              tex: '\\theta_1 \\ne \\theta_2 \\implies p(y \\mid \\theta_1) \\ne p(y \\mid \\theta_2)',
              caption: '可辨识性的定义（对所有可能观测）。'
            },
            {
              tex: '\\theta \\mapsto p(y \\mid \\theta) \\text{ 单射}',
              caption: '参数到观测分布的单射性。'
            }
          ],
          example: [
            '模型 $y = (ab)x$ 中，$a$ 与 $b$ 不可单独辨识，只能辨识乘积 $ab$。'
          ],
          related: ['identifiability', 'parameter-inversion', 'probability/statistical-inference']
        },
        {
          id: 'parameter-inversion',
          name: '参数反演',
          brief: '由观测反推模型参数',
          keywords: ['参数反演', '最小二乘', '贝叶斯反演', '正则化'],
          definition: [
            '**参数反演**从观测数据 $y$ 估计模型参数 $\\theta$：$y = G(\\theta) + \\varepsilon$，其中 $G$ 是正演算子。',
            '常用方法：最小二乘、最大似然、贝叶斯反演（后验分布）、正则化。'
          ],
          intuition: [
            '正演是“给定参数算观测”，反演是“给定观测猜参数”。反演通常比正演困难得多，且可能不适定。',
            '贝叶斯反演不仅给出点估计，还给出参数的不确定性（后验分布），更适合实际决策。'
          ],
          formulas: [
            {
              tex: '\\hat{\\theta} = \\arg\\min_\\theta \\|G(\\theta) - y\\|^2',
              caption: '最小二乘反演。'
            },
            {
              tex: 'p(\\theta \\mid y) \\propto p(y \\mid \\theta)\\,p(\\theta)',
              caption: '贝叶斯反演。'
            }
          ],
          example: [
            '从重力测量反演地下密度分布：正演是计算给定密度产生的重力场，反演是求解密度参数。'
          ],
          related: ['ill-posedness', 'regularized-inversion', 'identifiability']
        },
        {
          id: 'imaging-reconstruction',
          name: '成像与重建',
          brief: '从间接测量恢复空间结构',
          keywords: ['成像', 'CT', 'Radon 变换', '反投影'],
          definition: [
            '**成像重建**从间接测量恢复物体内部结构。CT 通过 X 射线投影重建断层图像；MRI 通过傅里叶采样重建。',
            'CT 的数学模型是 **Radon 变换**：$Rf(\\theta, s) = \\int f(s\\cos\\theta - t\\sin\\theta,\\ s\\sin\\theta + t\\cos\\theta)\\,dt$。'
          ],
          intuition: [
            'CT 不直接“拍照”，而是从多个角度测量射线衰减，再用数学方法反推出内部密度。Radon 变换把二维物体变成一维投影族。',
            '滤波反投影是经典重建算法：先对投影滤波，再反投影叠加。现代方法用迭代重建与深度学习提高低剂量下的质量。'
          ],
          formulas: [
            {
              tex: 'Rf(\\theta, s) = \\int_{\\mathbb{R}} f(s\\cos\\theta - t\\sin\\theta,\\ s\\sin\\theta + t\\cos\\theta)\\,dt',
              caption: 'Radon 变换。'
            },
            {
              tex: 'f = R^{-1}(Rf)',
              caption: '反投影重建（需滤波）。'
            }
          ],
          example: [
            '医学 CT 从约 180 个角度的投影重建断层；角度不足时出现伪影，需要正则化或先验约束。'
          ],
          related: ['ill-posedness', 'regularized-inversion', 'analysis/fourier-transform']
        },
        {
          id: 'regularized-inversion',
          name: '正则化反演',
          brief: '加入结构约束使反演更稳定',
          keywords: ['正则化', 'Tikhonov', '稀疏性', 'L1 正则'],
          definition: [
            '**正则化**通过在目标函数中加入惩罚项稳定反演：$\\min_x \\|Ax - y\\|^2 + \\lambda R(x)$。',
            'Tikhonov 正则化取 $R(x) = \\|x\\|^2$，得到平滑解；$L_1$ 正则化 $R(x) = \\|x\\|_1$ 促进稀疏解（压缩感知）。'
          ],
          intuition: [
            '正则化是“用先验知识换取稳定性”：惩罚项编码我们对解的期望（平滑、稀疏、非负），防止过拟合噪声。',
            '正则化参数 $\\lambda$ 控制数据拟合与先验的权衡：$\\lambda$ 太大解偏离数据，太小则噪声放大。'
          ],
          formulas: [
            {
              tex: '\\min_x \\|Ax - y\\|^2 + \\lambda \\|x\\|^2',
              caption: 'Tikhonov 正则化（岭回归）。'
            },
            {
              tex: '\\min_x \\|Ax - y\\|^2 + \\lambda \\|x\\|_1',
              caption: '$L_1$ 正则化（LASSO），产生稀疏解。'
            },
            {
              tex: 'x_\\lambda = (A^\\top A + \\lambda I)^{-1} A^\\top y',
              caption: 'Tikhonov 的闭式解。'
            }
          ],
          example: [
            '压缩感知从远少于未知数的测量中恢复稀疏信号：$L_1$ 正则化利用稀疏先验，突破 Nyquist 采样限制。'
          ],
          related: ['ill-posedness', 'parameter-inversion', 'probability/regularization']
        }
      ]
    },
    {
      id: 'control-theory',
      name: '控制理论',
      en: 'CONTROL THEORY',
      brief: '反馈、稳定性与系统调节',
      color: '#d2e280',
      angle: 40,
      topics: [
        {
          id: 'state-space',
          name: '状态空间',
          brief: '用状态变量表达系统动态',
          keywords: ['状态空间', '状态方程', '传递函数', '实现'],
          definition: [
            '**状态空间模型**用一阶微分方程组描述系统：$\\dot x = Ax + Bu$，$y = Cx + Du$，其中 $x$ 是状态向量，$u$ 是输入，$y$ 是输出。',
            '状态空间模型与传递函数 $G(s) = C(sI - A)^{-1}B + D$ 等价，但状态空间能处理多输入多输出与非零初始条件。'
          ],
          intuition: [
            '状态是“系统的记忆”：知道当前状态与未来输入，就能确定未来演化。状态空间把高阶微分方程化为一阶方程组。',
            '现代控制理论以状态空间为核心：可控性、可观性、最优控制都在状态空间中表述。'
          ],
          formulas: [
            {
              tex: '\\dot x = Ax + Bu,\\quad y = Cx + Du',
              caption: '线性时不变状态空间模型。'
            },
            {
              tex: 'G(s) = C(sI - A)^{-1}B + D',
              caption: '传递函数。'
            }
          ],
          example: [
            '弹簧-质量-阻尼系统 $m\\ddot x + c\\dot x + kx = F$ 可写成状态 $z = (x, \\dot x)$ 的一阶系统。'
          ],
          related: ['controllability-observability', 'feedback-control', 'optimal-control']
        },
        {
          id: 'controllability-observability',
          name: '可控与可观',
          brief: '判断能否操纵及重建系统状态',
          keywords: ['可控性', '可观性', 'Kalman 判据', '状态重建'],
          definition: [
            '系统**可控**，如果对任意初始状态 $x_0$ 与目标状态 $x_1$，存在输入 $u(t)$ 在有限时间内把状态从 $x_0$ 驱动到 $x_1$。',
            '系统**可观**，如果通过有限时间内的输出 $y(t)$ 能唯一确定初始状态 $x_0$。'
          ],
          intuition: [
            '可控性问“我能把系统推到任意状态吗”，可观性问“我能从输出推断内部状态吗”。两者是状态空间控制的基本问题。',
            'Kalman 判据用矩阵秩检验：可控性矩阵 $[B, AB, \\dots, A^{n-1}B]$ 满秩；可观性矩阵类似。'
          ],
          formulas: [
            {
              tex: '\\mathrm{rank}[B, AB, \\dots, A^{n-1}B] = n \\iff \\text{可控}',
              caption: 'Kalman 可控性判据。'
            },
            {
              tex: '\\mathrm{rank}[C; CA; \\dots; CA^{n-1}] = n \\iff \\text{可观}',
              caption: 'Kalman 可观性判据。'
            }
          ],
          example: [
            '双积分器 $\\dot x_1 = x_2$，$\\dot x_2 = u$，$y = x_1$：可控且可观（$[B, AB]$ 与 $[C; CA]$ 均满秩）。'
          ],
          related: ['state-space', 'feedback-control', 'optimal-control']
        },
        {
          id: 'feedback-control',
          name: '反馈控制',
          brief: '根据观测结果调整控制输入',
          keywords: ['反馈控制', '闭环', 'PID', '稳定性'],
          definition: [
            '**反馈控制**用输出（或状态）的测量值调整输入：$u = -Kx$（状态反馈）或 $u = K_P e + K_I \\int e + K_D \\dot e$（PID）。',
            '闭环系统 $\\dot x = (A - BK)x$ 的稳定性由 $A - BK$ 的特征值决定；若系统可控，可任意配置特征值（极点配置）。'
          ],
          intuition: [
            '反馈是“根据误差纠正”：恒温器测量温度，偏离设定值时启动加热。负反馈抑制扰动，使系统稳定。',
            'PID 是最常用的控制器：比例项响应当前误差，积分项消除稳态误差，微分项抑制超调。'
          ],
          formulas: [
            {
              tex: 'u = -Kx',
              caption: '状态反馈。'
            },
            {
              tex: 'u(t) = K_P e(t) + K_I \\int_0^t e(\\tau)\\,d\\tau + K_D \\dot e(t)',
              caption: 'PID 控制律。'
            },
            {
              tex: '\\dot x = (A - BK)x',
              caption: '闭环系统。'
            }
          ],
          example: [
            '倒立摆通过状态反馈稳定：测量角度与角速度，施加与偏离相反的小车加速度。'
          ],
          related: ['state-space', 'controllability-observability', 'robust-control']
        },
        {
          id: 'robust-control',
          name: '鲁棒控制',
          brief: '在模型不确定时维持性能',
          keywords: ['鲁棒控制', 'H∞', '小增益定理', '不确定性'],
          definition: [
            '**鲁棒控制**设计控制器，使系统在模型不确定性与扰动下仍保持稳定性与性能。',
            '$H_\\infty$ 控制最小化最坏情况下的扰动放大；小增益定理给出反馈回路稳定的充分条件。'
          ],
          intuition: [
            '实际模型总有误差：参数未知、未建模动态、外部扰动。鲁棒控制不假设模型完全准确，而是保证“最坏情况”下仍可接受。',
            '鲁棒控制把不确定性建模为集合，设计一个控制器对所有可能模型都稳定——这是工程可靠性的数学保证。'
          ],
          formulas: [
            {
              tex: '\\|S\\|_\\infty = \\sup_\\omega \\sigma_{\\max}(S(j\\omega))',
              caption: '$H_\\infty$ 范数：最坏频率响应。'
            },
            {
              tex: '\\|G_1\\|_\\infty \\|G_2\\|_\\infty < 1 \\implies \\text{反馈稳定}',
              caption: '小增益定理。'
            }
          ],
          example: [
            '飞机自动驾驶仪在气动参数随高度变化时仍能稳定飞行，鲁棒控制保证参数摄动下的稳定性。'
          ],
          related: ['feedback-control', 'state-space', 'optimal-control']
        },
        {
          id: 'optimal-control',
          name: '最优控制',
          brief: '在动态约束下优化整体目标',
          keywords: ['最优控制', 'Pontryagin', 'HJB 方程', 'LQR'],
          definition: [
            '**最优控制**寻找输入 $u(t)$ 使代价泛函 $J = \\int_0^T L(x, u)\\,dt + \\Phi(x(T))$ 最小，同时满足状态方程 $\\dot x = f(x, u)$。',
            'Pontryagin 极大值原理给出必要条件（哈密顿量最大化）； Hamilton–Jacobi–Bellman（HJB）方程给出充分条件。'
          ],
          intuition: [
            '最优控制是“在开车时选择油门与方向盘，使油耗与时间最优”：既要到达目标，又要代价最小。',
            'LQR（线性二次调节器）是最优控制的经典解：线性系统 + 二次代价，得到状态反馈 $u = -Kx$，$K$ 由 Riccati 方程求出。'
          ],
          formulas: [
            {
              tex: 'J = \\int_0^T L(x, u)\\,dt + \\Phi(x(T))',
              caption: '代价泛函。'
            },
            {
              tex: '\\dot x = f(x, u)',
              caption: '动态约束。'
            },
            {
              tex: 'u^* = -R^{-1} B^\\top P x',
              caption: 'LQR 最优反馈（$P$ 满足 Riccati 方程）。'
            }
          ],
          example: [
            '火箭软着陆：最小化燃料消耗，同时满足终端速度与位置约束；Pontryagin 原理给出推力开关的 bang-bang 形式。'
          ],
          related: ['state-space', 'feedback-control', 'geometry/hamiltonian-systems']
        }
      ]
    }
  ]
};