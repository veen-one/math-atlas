/* 数学知识地图 · 分析（下） */
window.ATLAS.subjects.analysis.branches.push(
  {
    id: 'harmonic-analysis',
    name: '调和分析',
    en: 'HARMONIC ANALYSIS',
    brief: '用频率分解理解函数与信号',
    color: '#7fc4e8',
    angle: -150,
    topics: [
      {
        id: 'fourier-series',
        name: '傅里叶级数',
        brief: '把周期函数展开成频率成分',
        keywords: ['傅里叶级数', '正交基', '系数', '收敛'],
        definition: [
          '周期为 $2\\pi$ 的函数 $f$ 的**傅里叶级数**为 $f(x) \\sim \\frac{a_0}{2} + \\sum_{n=1}^{\\infty} (a_n \\cos nx + b_n \\sin nx)$，系数由积分给出。',
          '复形式：$f(x) = \\sum_{n \\in \\mathbb{Z}} c_n e^{inx}$，$c_n = \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} f(x)e^{-inx}\\,dx$。'
        ],
        intuition: [
          '傅里叶级数把周期函数分解为不同频率的正弦波：就像把音乐分解为不同音高的成分。',
          '$L^2$ 意义下，$\\{e^{inx}\\}$ 构成正交基，傅里叶级数是正交投影；Parseval 恒等式说明能量守恒。'
        ],
        formulas: [
          {
            tex: 'c_n = \\frac{1}{2\\pi} \\int_{-\\pi}^{\\pi} f(x) e^{-inx}\\,dx',
            caption: '傅里叶系数。'
          },
          {
            tex: 'f(x) = \\sum_{n=-\\infty}^{\\infty} c_n e^{inx}',
            caption: '复傅里叶级数。'
          },
          {
            tex: '\\sum_{n=-\\infty}^{\\infty} |c_n|^2 = \\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} |f(x)|^2\\,dx',
            caption: 'Parseval 恒等式。'
          }
        ],
        example: [
          '方波 $f(x) = \\mathrm{sgn}(\\sin x)$ 的傅里叶级数为 $\\frac{4}{\\pi}(\\sin x + \\frac{\\sin 3x}{3} + \\frac{\\sin 5x}{5} + \\cdots)$，说明用正弦波逼近不连续函数会出现 Gibbs 现象。'
        ],
        related: ['fourier-transform', 'hilbert-spaces', 'convolution']
      },
      {
        id: 'fourier-transform',
        name: '傅里叶变换',
        brief: '分析连续频率中的函数信息',
        keywords: ['傅里叶变换', '逆变换', 'Plancherel', '频谱'],
        definition: [
          '对 $f\\in L^1(\\mathbb R)$，按本页约定定义**傅里叶变换** $\\hat f(\\xi)=\\int_{\\mathbb R}f(x)e^{-2\\pi i\\xi x}\\,dx。',
          '若 $f\\in\\mathcal S(\\mathbb R)$，逆变换为 $f(x)=\\int_{\\mathbb R}\\hat f(\\xi)e^{2\\pi i\\xi x}\\,d\\xi$。',
          'Plancherel 定理：该变换从 Schwartz 函数唯一连续延拓到 $L^2(\\mathbb R)$，并满足 $\\|\\hat f\\|_2=\\|f\\|_2$。'
        ],
        intuition: [
          '傅里叶变换把函数从“时间/空间”域搬到“频率”域：每个频率的振幅与相位由 $\\hat f(\\xi)$ 给出。',
          '它把微分变成乘法：$\\widehat{f\'}(\\xi) = 2\\pi i \\xi \\hat f(\\xi)$，这使得微分方程可以在频域求解。'
        ],
        formulas: [
          {
            tex: '\\hat f(\\xi) = \\int_{\\mathbb{R}} f(x) e^{-2\\pi i \\xi x}\\,dx',
            caption: '傅里叶变换。'
          },
          {
            tex: '\\widehat{f\'}(\\xi) = 2\\pi i \\xi\\, \\hat f(\\xi)',
            caption: '若 $f\\in\\mathcal S(\\mathbb R)$，则导数变换乘以 $2\\pi i\\xi$。'
          },
          {
            tex: '\\|\\hat f\\|_2 = \\|f\\|_2',
            caption: 'Plancherel 定理（$e^{-2\\pi i\\xi x}$ 约定，$L^2(\\mathbb R)$）。'
          }
        ],
        example: [
          '对 $a>0$，矩形脉冲 $1_{[-a,a]}$ 的变换为 $\\sin(2\\pi a\\xi)/(\\pi\\xi)$，在 $\\xi=0$ 取连续延拓值 $2a$；首个零点在 $\\pm1/(2a)$，所以 $a$ 越小主瓣越宽。'
        ],
        related: ['fourier-series', 'convolution', 'time-frequency']
      },
      {
        id: 'convolution',
        name: '卷积',
        brief: '描述平移叠加与系统响应',
        keywords: ['卷积', '卷积定理', '滤波', '系统响应'],
        definition: [
          '$f,g\\in L^1(\\mathbb R)$ 时，卷积 $f*g(x)=\\int_{\\mathbb R}f(y)g(x-y)\\,dy$ 对几乎处处 $x$ 绝对存在；定义等价类时忽略零测集上的取值。它是“先翻转再平移后求和”。',
          '在 $\\hat f(\\xi)=\\int f(x)e^{-2\\pi i\\xi x}dx$ 约定下，$f,g\\in L^1$ 满足卷积定理 $\\widehat{f*g}(\\xi)=\\hat f(\\xi)\\hat g(\\xi)$。'
        ],
        intuition: [
          '卷积是“加权平均”：$g$ 是权重核，输出是 $f$ 在不同平移处的加权和。图像模糊就是与高斯核卷积。',
          '线性时不变系统的输出等于输入与冲激响应的卷积；卷积定理让滤波器设计在频域完成。'
        ],
        formulas: [
          {
            tex: '(f * g)(x) = \\int_{\\mathbb{R}} f(y) g(x - y)\\,dy',
            caption: '卷积定义。'
          },
          {
            tex: '\\widehat{f * g} = \\hat f \\cdot \\hat g',
            caption: '卷积定理（$f,g\\in L^1(\\mathbb R)$，按 $e^{-2\\pi i\\xi x}$ 约定）。'
          },
          {
            tex: 'f * g = g * f',
            caption: '若 $f,g\\in L^1(\\mathbb R)$，则 $f*g=g*f$ 几乎处处。'
          }
        ],
        example: [
          'Gaussian 卷积定理：中心高斯密度 $\\phi_\\sigma$ 与 $\\phi_\\tau$ 卷积为 $\\phi_{\\sqrt{\\sigma^2+\\tau^2}}$，可由配方直接验证。'
        ],
        related: ['fourier-transform', 'fourier-series', 'linear-operators']
      },
      {
        id: 'wavelets',
        name: '小波',
        brief: '同时观察位置与尺度的信息',
        keywords: ['小波', '母小波', '尺度函数', '多分辨率'],
        definition: [
          '**小波**是由母小波 $\\psi$ 经平移与伸缩生成的一族函数 $\\psi_{j,k}(x) = 2^{j/2}\\psi(2^j x - k)$，用于多尺度分析。',
          '小波变换同时提供时间（位置）与频率（尺度）信息，适合分析非平稳信号与图像。'
        ],
        intuition: [
          '傅里叶变换只有频率信息，丢失位置；小波用“可伸缩的窗”同时捕捉局部位置与尺度。',
          '离散小波变换是 JPEG 2000 图像压缩的核心：图像被分解为不同尺度的细节系数，大部分可丢弃。'
        ],
        formulas: [
          {
            tex: '\\psi_{j,k}(x) = 2^{j/2} \\psi(2^j x - k)',
            caption: '小波基函数。'
          },
          {
            tex: '\\int \\psi(x)\\,dx = 0',
            caption: '母小波的零均值条件。'
          }
        ],
        example: [
          'Haar 小波是最简单的小波：$\\psi(x) = 1$（$[0,1/2)$）与 $-1$（$[1/2,1)$），用于图像的多分辨率分解。'
        ],
        related: ['fourier-transform', 'time-frequency', 'fourier-series']
      },
      {
        id: 'time-frequency',
        name: '时频分析',
        brief: '研究信号随时间变化的频率',
        keywords: ['时频分析', '短时傅里叶', '不确定性原理', 'Gabor'],
        definition: [
          '**时频分析**用二维表示同时刻画信号的频率随时间的变化：短时傅里叶变换（STFT）、Gabor 变换、小波变换、Wigner–Ville 分布。',
          '不确定性原理：$\\Delta t \\cdot \\Delta \\omega \\ge \\frac12$，时域与频域分辨率不能同时任意高。'
        ],
        intuition: [
          '音乐频谱图就是时频表示：横轴时间、纵轴频率、颜色强度表示能量，能看出旋律与和声的变化。',
          '不确定性原理是傅里叶变换的数学性质：窄窗在时域定位好但频域分辨率差，反之亦然。'
        ],
        formulas: [
          {
            tex: '\\mathrm{STFT}\\{f\\}(\\tau, \\omega) = \\int f(t) w(t - \\tau) e^{-i\\omega t}\\,dt',
            caption: '短时傅里叶变换。'
          },
          {
            tex: '\\Delta t \\cdot \\Delta \\omega \\ge \\frac12',
            caption: '不确定性原理。'
          }
        ],
        example: [
          '语音识别用频谱图提取音素特征；鸟鸣分析用时频图区分不同音节。'
        ],
        related: ['fourier-transform', 'wavelets', 'applied/quantum-theory']
      }
    ]
  },
  {
    id: 'differential-equations',
    name: '微分方程',
    en: 'DIFFERENTIAL EQUATIONS',
    brief: '研究多个变量中的变化关系',
    color: '#5b8fd0',
    angle: -105,
    topics: [
      {
        id: 'odes',
        name: '常微分方程',
        brief: '研究单一自变量下的演化',
        keywords: ['ODE', '存在唯一性', '线性方程', '积分因子'],
        definition: [
          '**常微分方程**含未知函数及其导数：$F(x, y, y\', \\dots, y^{(n)}) = 0$。阶数为最高导数的阶。',
          'Picard–Lindelöf 定理（标量局部版）：若 $f$ 在 $(t_0,y_0)$ 的一个闭矩形邻域连续，且存在 $L\\ge0$ 使矩形内 $|f(t,y_1)-f(t,y_2)|\\le L|y_1-y_2|$，则初值问题 $y\'=f(t,y)$、$y(t_0)=y_0$ 有定义在 $t_0$ 附近的唯一 $C^1$ 解；唯一性指解留在该矩形时成立。'
        ],
        intuition: [
          'ODE 描述“变化率决定未来”：$y\' = ky$ 表示增长率与当前量成正比，解为指数增长。',
          '一阶线性方程可用积分因子求解；高阶线性方程通过特征方程或级数方法求解。'
        ],
        formulas: [
          {
            tex: 'y\' = f(t, y),\\quad y(t_0) = y_0',
            caption: '一阶初值问题。'
          },
          {
            tex: 'y\' + p(t)y = q(t)',
            caption: '一阶线性方程。'
          },
          {
            tex: 'y(x) = e^{-\\int p\\,dx}\\left(\\int q e^{\\int p\\,dx}\\,dx + C\\right)',
            caption: '积分因子解。'
          }
        ],
        example: [
          '$y\' = y$，$y(0) = 1$ 的解为 $y = e^x$；$y\' = -2y$ 描述指数衰减（放射性衰变）。'
        ],
        related: ['initial-boundary', 'stability', 'applied/population-dynamics']
      },
      {
        id: 'pdes',
        name: '偏微分方程',
        brief: '研究多个变量中的变化关系',
        keywords: ['PDE', '热方程', '波动方程', '分类'],
        definition: [
          '**偏微分方程**含未知函数及其偏导数。二阶线性 PDE 分为椭圆型（Laplace）、抛物型（热）、双曲型（波）三类。',
          '类型决定解的性质与适定边界条件：椭圆型需要边值条件，抛物型需要初值+边界，双曲型需要两个初值条件。'
        ],
        intuition: [
          'PDE 是“场的演化方程”：温度场、声波、流体速度都由 PDE 描述。',
          '分类决定数值方法与物理行为：热方程平滑初值（不可逆），波动方程保持振荡（可逆）。'
        ],
        formulas: [
          {
            tex: 'u_t = \\alpha \\Delta u',
            caption: '热方程（抛物型）。'
          },
          {
            tex: 'u_{tt} = c^2 \\Delta u',
            caption: '波动方程（双曲型）。'
          },
          {
            tex: '\\Delta u = 0',
            caption: 'Laplace 方程（椭圆型）。'
          }
        ],
        example: [
          '热方程在 $\\mathbb{R}$ 上的基本解是高斯核 $\\frac{1}{\\sqrt{4\\pi \\alpha t}}e^{-x^2/(4\\alpha t)}$，说明热扩散的平滑效应。'
        ],
        related: ['odes', 'initial-boundary', 'weak-solutions']
      },
      {
        id: 'initial-boundary',
        name: '初值与边值',
        brief: '用额外条件确定具体解',
        keywords: ['初值问题', '边值问题', '适定性', '边界条件'],
        definition: [
          'PDE 通常有无穷多解，需要**初值条件**（$t=0$ 时的状态）与**边界条件**（空间边界上的行为）确定唯一解。',
          '常见边界条件：Dirichlet（指定值）、Neumann（指定法向导数）、Robin（混合）。'
        ],
        intuition: [
          '初值决定“从哪里开始”，边界决定“外界如何影响”。两者共同锁定物理上合理的解。',
          '适定性（Hadamard）要求解存在、唯一且连续依赖数据；不适定的初边值问题数值上极难求解。'
        ],
        formulas: [
          {
            tex: 'u(x, 0) = u_0(x)',
            caption: '初值条件。'
          },
          {
            tex: 'u(x, t) = g(x, t)\\ \\text{on } \\partial \\Omega',
            caption: 'Dirichlet 边界条件。'
          },
          {
            tex: '\\frac{\\partial u}{\\partial n} = h(x, t)\\ \\text{on } \\partial \\Omega',
            caption: 'Neumann 边界条件。'
          }
        ],
        example: [
          '热方程 + 初值 $u(x,0) = \\sin x$ + 边界 $u(0,t)=u(\\pi,t)=0$ 的解为 $u(x,t) = e^{-\\alpha t}\\sin x$。'
        ],
        related: ['pdes', 'odes', 'weak-solutions']
      },
      {
        id: 'weak-solutions',
        name: '弱解',
        brief: '用积分或分布意义定义解',
        keywords: ['弱解', 'Sobolev 空间', '变分形式', 'Lax-Milgram'],
        definition: [
          '经典解要求足够光滑；**弱解**只要求函数及其弱导数属于 $L^p$ 空间，并在积分意义下满足方程。',
          '例如 $-u\'\' = f$ 的弱形式：$\\int u\'v\' = \\int fv$ 对所有测试函数 $v$ 成立。'
        ],
        intuition: [
          '弱解放宽了光滑性要求，使不连续系数、非光滑边界与更广泛的物理问题可解。',
          '有限元方法正是基于弱形式：在有限维子空间中寻找近似弱解。'
        ],
        formulas: [
          {
            tex: '\\int_\\Omega \\nabla u \\cdot \\nabla v\\,dx = \\int_\\Omega f v\\,dx\\quad \\forall v \\in H_0^1(\\Omega)',
            caption: 'Poisson 方程的弱形式。'
          },
          {
            tex: 'H^s(\\Omega)',
            caption: 'Sobolev 空间：弱导数属于 $L^2$。'
          }
        ],
        example: [
          '$u(x) = |x|$ 在 $(-1,1)$ 上不是经典解（二阶导数不存在），但它是 $-u\'\' = 2\\delta_0$ 的弱解。'
        ],
        related: ['pdes', 'applied/finite-elements', 'lebesgue-integral']
      },
      {
        id: 'stability',
        name: '稳定性',
        brief: '研究扰动是否导致解明显改变',
        keywords: ['稳定性', 'Lyapunov', '线性化', '能量方法'],
        definition: [
          '平衡点 $y^*$ 称为**稳定**，如果初值的小扰动使解始终保持在附近；**渐近稳定**则还要求解趋于 $y^*$。',
          'Lyapunov 方法：若存在 Lyapunov 函数 $V$ 沿轨迹递减，则平衡点稳定。'
        ],
        intuition: [
          '稳定性问“小扰动会不会被放大”：碗底的小球稳定，山顶的小球不稳定。',
          '线性化（Jacobian 特征值）判断局部稳定性：特征值实部为负则渐近稳定；能量方法给出全局稳定性条件。'
        ],
        formulas: [
          {
            tex: '\\dot y = Ay,\\quad \\mathrm{Re}\\,\\lambda_i(A) < 0 \\implies \\text{渐近稳定}',
            caption: '线性系统稳定性。'
          },
          {
            tex: '\\dot V(y) \\le 0',
            caption: 'Lyapunov 稳定性条件。'
          }
        ],
        example: [
          '单摆 $\\ddot\\theta + (g/l)\\sin\\theta = 0$：下平衡点渐近稳定（有阻尼时），上平衡点不稳定。'
        ],
        related: ['odes', 'equilibria-periodic-orbits', 'applied/feedback-control']
      }
    ]
  },
  {
    id: 'dynamical-systems',
    name: '动力系统',
    en: 'DYNAMICAL SYSTEMS',
    brief: '研究确定性系统的长期行为',
    color: '#86a8f0',
    angle: -60,
    topics: [
      {
        id: 'phase-space',
        name: '相空间',
        brief: '用状态点描述系统的可能状态',
        keywords: ['相空间', '相图', '流', '向量场'],
        definition: [
          '动力系统 $\\dot x = f(x)$ 的**相空间**是所有可能状态 $x$ 构成的空间；解曲线称为**轨道**或**流**。',
          '相图是相空间中轨道的几何图像，揭示系统的长期行为（平衡点、周期轨、吸引子）。'
        ],
        intuition: [
          '相空间把“时间演化”变成“几何运动”：每个状态是点，时间是沿轨道的参数。',
          '相图让复杂系统可视化：单摆的相图显示摆动区、旋转区与分界线。'
        ],
        formulas: [
          {
            tex: '\\dot x = f(x),\\quad x \\in \\mathbb{R}^n',
            caption: '自治动力系统。'
          },
          {
            tex: '\\phi_t(x_0)',
            caption: '流：$t$ 时刻从 $x_0$ 出发的状态。'
          }
        ],
        example: [
          '单摆相图：横轴角度、纵轴角速度；闭合轨道对应周期摆动，开放曲线对应旋转。'
        ],
        related: ['equilibria-periodic-orbits', 'bifurcation', 'chaos']
      },
      {
        id: 'equilibria-periodic-orbits',
        name: '平衡点与周期轨道',
        brief: '研究静止状态与重复运动',
        keywords: ['平衡点', '周期轨道', 'Poincaré 映射', '不动点'],
        definition: [
          '**平衡点**满足 $f(x^*) = 0$；**周期轨道**是非平凡闭轨道，$\\phi_T(x) = x$ 对某 $T > 0$ 成立。',
          'Poincaré 映射把周期轨道的研究化为离散映射的不动点问题。'
        ],
        intuition: [
          '平衡点是“不动状态”，周期轨道是“循环运动”：心脏跳动、季节变化都是周期轨道的例子。',
          '周期轨道可能稳定（吸引）或不稳定；Poincaré–Bendixson 定理说明平面系统的极限行为受限于平衡点与周期轨。'
        ],
        formulas: [
          {
            tex: 'f(x^*) = 0',
            caption: '平衡点。'
          },
          {
            tex: '\\phi_T(x) = x,\\quad T > 0',
            caption: '周期轨道。'
          }
        ],
        example: [
          'Lotka–Volterra 系统的正平衡点 $(\\gamma/\\delta, \\alpha/\\beta)$ 周围是周期轨道族（无阻尼时）。'
        ],
        related: ['phase-space', 'stability', 'bifurcation']
      },
      {
        id: 'bifurcation',
        name: '分岔',
        brief: '参数变化导致定性行为改变',
        keywords: ['分岔', '鞍结分岔', 'Hopf 分岔', '分岔图'],
        definition: [
          '当系统参数变化时，平衡点或周期轨道的数量/稳定性发生质变，称为**分岔**。',
          '常见类型：鞍结分岔（平衡点碰撞消失）、Hopf 分岔（平衡点产生周期轨道）、倍周期分岔（周期加倍通向混沌）。'
        ],
        intuition: [
          '分岔是“小改变引起大变化”：参数跨过临界值时，系统从稳定变为振荡，或从有序变为混沌。',
          '分岔图（参数 vs 状态）显示系统长期行为的结构变化，是混沌研究的核心工具。'
        ],
        formulas: [
          {
            tex: '\\dot x = \\mu - x^2',
            caption: '鞍结分岔（$\\mu < 0$ 无平衡点，$\\mu > 0$ 两个）。'
          },
          {
            tex: '\\dot z = (\\mu + i\\omega)z - |z|^2 z',
            caption: 'Hopf 分岔的标准形式（极坐标）。'
          }
        ],
        example: [
          'Logistic 映射 $x_{n+1} = r x_n(1 - x_n)$：$r$ 增大时出现倍周期分岔，最终进入混沌。'
        ],
        related: ['equilibria-periodic-orbits', 'chaos', 'stability']
      },
      {
        id: 'chaos',
        name: '混沌',
        brief: '确定系统也可对初值高度敏感',
        keywords: ['混沌', '蝴蝶效应', 'Lyapunov 指数', '奇怪吸引子'],
        definition: [
          '**混沌**是确定性系统的长期行为对初值高度敏感的现象：初始条件的微小差异导致轨道的指数分离。',
          'Lyapunov 指数 $\\lambda > 0$ 量化分离速率；奇怪吸引子是混沌轨道的几何载体（分形结构）。'
        ],
        intuition: [
          '蝴蝶效应：巴西的蝴蝶扇动翅膀可能引发德克萨斯的龙卷风——这不是随机性，而是敏感依赖性。',
          '混沌系统短期可预测、长期不可预测；天气、湍流、三体问题都是例子。'
        ],
        formulas: [
          {
            tex: '|\\delta x(t)| \\approx |\\delta x(0)| e^{\\lambda t}',
            caption: 'Lyapunov 指数：$\\lambda > 0$ 表示混沌。'
          },
          {
            tex: '\\lambda = \\lim_{t \\to \\infty} \\frac{1}{t} \\ln \\frac{\\|\\delta x(t)\\|}{\\|\\delta x(0)\\|}',
            caption: '最大 Lyapunov 指数。'
          }
        ],
        example: [
          'Lorenz 系统 $\\dot x = \\sigma(y-x)$，$\\dot y = x(\\rho-z)-y$，$\\dot z = xy - \\beta z$ 的奇怪吸引子具有分形结构。'
        ],
        related: ['bifurcation', 'phase-space', 'ergodicity']
      },
      {
        id: 'ergodicity',
        name: '遍历性',
        brief: '研究时间统计与空间统计的联系',
        keywords: ['遍历性', '不变测度', 'Birkhoff', '混合'],
        definition: [
          '概率测度空间上的保测系统 $(X, \\mu, T)$ 称为**遍历**，如果不变集只有零测或全测。对每个可积函数 f，此时时间平均几乎处处等于空间平均：$\\frac1n\\sum_{k=0}^{n-1} f(T^k x) \\to \\int f\\,d\\mu$。',
          'Birkhoff 遍历定理对保测概率系统中的可积函数给出几乎处处和 L¹ 收敛；遍历时极限等于空间平均。'
        ],
        intuition: [
          '遍历性是“一条轨道走遍整个空间”：长期时间平均等于空间平均，可以用单条轨迹估计整体统计。',
          '统计物理的基础假设就是遍历性：系统的长时间行为可以用相空间平均替代（微正则系综）。'
        ],
        formulas: [
          {
            tex: '\\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{k=0}^{n-1} f(T^k x) = \\int_X f\\,d\\mu',
            caption: 'Birkhoff 定理的遍历概率情形：f 可积，等式几乎处处成立。'
          },
          {
            tex: 'T^{-1}(A) = A \\implies \\mu(A) \\in \\{0, 1\\}',
            caption: '遍历性的定义。'
          }
        ],
        example: [
          '无理旋转 $T(x) = x + \\alpha \\bmod 1$（$\\alpha$ 无理）是遍历的：轨道在圆周上均匀分布。'
        ],
        related: ['chaos', 'probability/stationary-processes', 'applied/statistical-mechanics']
      }
    ]
  }
);
