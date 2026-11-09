/* 数学知识地图 · 分析（中） */
window.ATLAS.subjects.analysis.branches.push(
  {
    id: 'calculus',
    name: '微积分',
    en: 'CALCULUS',
    brief: '导数、积分与局部变化率',
    color: '#8fb8f5',
    angle: 120,
    topics: [
      {
        id: 'limits',
        name: '极限',
        brief: '刻画无限逼近时的行为',
        keywords: ['极限', 'ε-δ', '数列极限', '左右极限'],
        definition: [
          '设函数 $f$ 在点 $a$ 的某个去心邻域内有定义。若对每个 $\\varepsilon > 0$，存在 $\\delta > 0$，使得当 $0 < |x - a| < \\delta$ 时 $|f(x) - L| < \\varepsilon$，则称 $\\lim_{x \\to a} f(x) = L$。',
          '数列极限类似：$\\lim_{n \\to \\infty} a_n = L$ 指对每个 $\\varepsilon > 0$，存在 $N$，当 $n > N$ 时 $|a_n - L| < \\varepsilon$。'
        ],
        intuition: [
          '“无限逼近”的严格化：不关心 $f(a)$ 是否有定义，只关心 $x$ 靠近 $a$ 时 $f(x)$ 是否稳定地靠近 $L$。$\\varepsilon$-$\\delta$ 语言把“任意接近”翻译成可检验的量词顺序。',
          '极限是分析一切概念的基本砖块：连续是极限等于函数值，导数是差商的极限，积分是黎曼和的极限，级数收敛是部分和的极限。'
        ],
        formulas: [
          {
            tex: '\\lim_{x \\to a} f(x) = L \\iff \\forall \\varepsilon > 0,\\ \\exists \\delta > 0,\\ 0 < |x - a| < \\delta \\implies |f(x) - L| < \\varepsilon',
            caption: '$\\varepsilon$-$\\delta$ 定义。'
          },
          {
            tex: '\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1',
            caption: '重要极限，用于推导 $\\sin\' = \\cos$。'
          },
          {
            tex: 'e = \\lim_{n \\to \\infty} \\left(1 + \\frac{1}{n}\\right)^n',
            caption: '自然常数 $e$ 的极限定义。'
          }
        ],
        example: [
          '$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$ 是微积分中最重要的极限之一；而 $\\lim_{x \\to 0} \\sin(1/x)$ 不存在，因为函数在 $0$ 附近无限振荡。'
        ],
        related: ['derivatives', 'continuity-uniform', 'series']
      },
      {
        id: 'derivatives',
        name: '导数',
        brief: '描述函数的局部变化率',
        keywords: ['导数', '差商', '切线', '可导'],
        definition: [
          '设 $f$ 在 $x_0$ 的邻域内有定义。若极限 $\\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}$ 存在，则称 $f$ 在 $x_0$ **可导**，此极限为导数 $f\'(x_0)$。',
          '导数刻画函数在该点的瞬时变化率；几何上等于曲线在 $(x_0, f(x_0))$ 处切线的斜率。'
        ],
        intuition: [
          '平均变化率是割线斜率，让间隔 $h \\to 0$ 取极限得到切线斜率。导数把“局部线性化”变成可计算的对象。',
          '导数存在比连续更强：魏尔斯特拉斯函数处处连续却处处不可导，说明“连续但无限崎岖”是可能的。'
        ],
        formulas: [
          {
            tex: 'f\'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}',
            caption: '导数定义。'
          },
          {
            tex: 'f(x_0 + h) = f(x_0) + f\'(x_0)h + o(h)',
            caption: '一阶 Taylor 展开：导数给出最佳线性近似。'
          },
          {
            tex: '(fg)\' = f\'g + fg\'',
            caption: '乘积法则。'
          }
        ],
        example: [
          '$f(x) = x^2$ 在 $x_0$ 的导数为 $2x_0$；$f(x) = |x|$ 在 $0$ 处不可导（左右极限分别为 $-1, 1$）。'
        ],
        related: ['limits', 'integration-calculus', 'multivariable-calculus']
      },
      {
        id: 'integration-calculus',
        name: '积分',
        brief: '累积局部量得到整体量',
        keywords: ['积分', '黎曼和', '原函数', '换元'],
        definition: [
          '黎曼积分用分割的矩形和逼近曲线下面积：$\\int_a^b f(x)\\,dx = \\lim_{\\|P\\| \\to 0} \\sum f(\\xi_i)\\Delta x_i$。',
          '微积分第二基本定理：若 $f$ 在 $[a,b]$ 连续，$F$ 在 $[a,b]$ 连续、在 $(a,b)$ 可导且 $F\' = f$，则 $\\int_a^b f(x)\\,dx = F(b) - F(a)$。'
        ],
        intuition: [
          '积分是“无限细分后的求和”：把曲线下的区域切成细长条，用矩形面积求和，再让分割无限细化。',
          '换元与分部积分是积分的两大技巧：换元对应复合函数求导的逆运算，分部对应乘积法则的逆运算。'
        ],
        formulas: [
          {
            tex: '\\int_a^b f(x)\\,dx = F(b) - F(a),\\quad F\' = f',
            caption: 'Newton–Leibniz 公式。'
          },
          {
            tex: '\\int f(g(x))g\'(x)\\,dx = \\int f(u)\\,du',
            caption: '换元积分法。'
          },
          {
            tex: '\\int u\\,dv = uv - \\int v\\,du',
            caption: '分部积分法。'
          }
        ],
        example: [
          '$\\int_0^1 x^2\\,dx = \\frac13$；$\\int x e^x\\,dx = (x-1)e^x + C$（分部积分）。'
        ],
        related: ['fundamental-theorem-calculus', 'derivatives', 'lebesgue-integral']
      },
      {
        id: 'multivariable-calculus',
        name: '多元微积分',
        brief: '研究多个变量的变化与累积',
        keywords: ['多元微积分', '偏导数', '梯度', '雅可比', '重积分'],
        definition: [
          '多元微积分研究 $f: \\mathbb{R}^n \\to \\mathbb{R}^m$ 的极限、连续、偏导数、方向导数、重积分与曲线曲面积分。',
          '核心工具：梯度 $\\nabla f$、雅可比矩阵 $J_f$、海森矩阵 $H_f$，分别刻画一阶、二阶局部信息。'
        ],
        intuition: [
          '高维中“导数”不再是一个数，而是一个线性映射。全微分 $Df(x)$ 是最佳线性近似；偏导数只是沿坐标轴方向的特殊方向导数。',
          '重积分与曲线曲面积分通过格林、高斯、斯托克斯定理相互转换，本质是“边界上的积分等于内部导数的积分”。'
        ],
        formulas: [
          {
            tex: 'f(\\mathbf{x}_0 + \\mathbf{h}) = f(\\mathbf{x}_0) + \\nabla f(\\mathbf{x}_0)^\\top \\mathbf{h} + o(\\|\\mathbf{h}\\|)',
            caption: '一阶全微分近似。'
          },
          {
            tex: '\\iint_D \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) dA = \\oint_{\\partial D} P\\,dx + Q\\,dy',
            caption: '格林公式。'
          },
          {
            tex: '\\iiint_V \\nabla \\cdot \\mathbf{F}\\,dV = \\iint_{\\partial V} \\mathbf{F} \\cdot \\mathbf{n}\\,dS',
            caption: '高斯散度定理。'
          }
        ],
        example: [
          '求 $f(x,y) = x^2 + y^2$ 在 $(1, 2)$ 处的最速上升方向：梯度 $\\nabla f = (2, 4)$，方向为 $(1, 2)/\\sqrt5$，最大方向导数为 $\\sqrt{20}$。'
        ],
        related: ['derivatives', 'integration-calculus', 'algebra/vector-spaces']
      },
      {
        id: 'analytic-continuation',
        name: '解析延拓',
        brief: '把解析函数扩展到更大区域',
        keywords: ['解析延拓', '唯一性', '幂级数', 'ζ 函数'],
        definition: [
          '设 $f$ 在区域 $D$ 上解析。若存在更大的区域 $\\Omega \\supset D$ 和 $\\Omega$ 上的解析函数 $F$，使 $F|_D = f$，则称 $F$ 是 $f$ 的**解析延拓**。',
          '解析延拓若存在则唯一（同一性定理）：两个在 $D$ 上相等的解析函数，在其公共连通定义域上处处相等。'
        ],
        intuition: [
          '解析函数由它在任意小区域上的值完全决定，像 DNA 一样携带全部信息。因此“把定义域扩大”只能在唯一的方式下进行。',
          '$\\zeta$ 函数、$\\Gamma$ 函数都通过解析延拓定义到更大范围，黎曼猜想正是关于 $\\zeta$ 延拓后的零点分布。'
        ],
        formulas: [
          {
            tex: 'f(z) = \\sum_{n=0}^{\\infty} a_n (z - z_0)^n,\\quad |z - z_0| < R',
            caption: '解析函数的幂级数展开。'
          },
          {
            tex: '\\zeta(s) = \\sum_{n=1}^{\\infty} \\frac{1}{n^s},\\quad \\operatorname{Re}(s) > 1',
            caption: '$\\zeta$ 函数的初始定义域。'
          },
          {
            tex: '\\Gamma(z+1) = z\\Gamma(z)',
            caption: '$\\Gamma$ 函数的函数方程，用于延拓。'
          }
        ],
        example: [
          '$\\sum_{n=1}^\\infty 1/n^2 = \\zeta(2) = \\pi^2/6$。解析延拓后 $\\zeta(-1) = -1/12$，形式上对应 $1+2+3+\\cdots$ 的正则化值。'
        ],
        related: ['holomorphic-functions', 'residues', 'numbertheory/zeta-l-functions']
      }
    ]
  },
  {
    id: 'measure-integration',
    name: '测度与积分',
    en: 'MEASURE & INTEGRATION',
    brief: '推广长度与面积的大小概念',
    color: '#5f8fd8',
    angle: 30,
    topics: [
      {
        id: 'sigma-algebras',
        name: 'σ 代数',
        brief: '组织允许测量的集合',
        keywords: ['σ 代数', '可测集', 'Borel 集', '可数并'],
        definition: [
          '集合 $X$ 上的 **σ 代数** $\\mathcal{F}$ 是子集族，包含 $X$，对补集与可数并封闭。其成员称为**可测集**。',
          '由拓扑空间的开集生成的 σ 代数称为 **Borel σ 代数**；概率论中的事件域就是 σ 代数。'
        ],
        intuition: [
          'σ 代数是“可以被测量的事件集合”：并非所有子集都能被合理赋测度（如 Vitali 集），因此需要限制在 σ 代数上。',
          'σ 代数的封闭性保证测度可以对可数并、交、补运算稳定，从而支撑积分与概率论。'
        ],
        formulas: [
          {
            tex: '\\varnothing, X \\in \\mathcal{F};\\quad A \\in \\mathcal{F} \\implies A^c \\in \\mathcal{F};\\quad A_i \\in \\mathcal{F} \\implies \\bigcup_i A_i \\in \\mathcal{F}',
            caption: 'σ 代数公理。'
          },
          {
            tex: '\\mathcal{B}(X) = \\sigma(\\text{开集})',
            caption: 'Borel σ 代数。'
          }
        ],
        example: [
          '实数线上的 Borel σ 代数包含所有开区间、闭区间、可数集，是勒贝格测度的定义域。'
        ],
        related: ['measures', 'measurable-functions', 'probability/probability-space']
      },
      {
        id: 'measures',
        name: '测度',
        brief: '推广长度与面积的大小概念',
        keywords: ['测度', '勒贝格测度', '可数可加', '零测集'],
        definition: [
          '**测度** $\\mu: \\mathcal{F} \\to [0, \\infty]$ 在 σ 代数上定义，满足 $\\mu(\\varnothing) = 0$ 与可数可加性：互不相交可测集的并的测度等于测度之和。',
          '勒贝格测度是 $\\mathbb{R}^n$ 上与平移不变、区间体积一致的标准测度；概率测度满足 $\\mu(X) = 1$。'
        ],
        intuition: [
          '测度是“长度、面积、体积、概率”的统一抽象：不同测度描述不同的“大小”概念。',
          '零测集是“可以忽略的集合”：可数集测度为 0，康托集虽然不可数但勒贝格测度也为 0。'
        ],
        formulas: [
          {
            tex: '\\mu\\left(\\bigsqcup_{i=1}^{\\infty} A_i\\right) = \\sum_{i=1}^{\\infty} \\mu(A_i)',
            caption: '可数可加性。'
          },
          {
            tex: '\\mu([a, b]) = b - a',
            caption: '勒贝格测度在区间上的值。'
          },
          {
            tex: '\\mu(A) = \\int_A 1\\,d\\mu',
            caption: '测度与积分的关系。'
          }
        ],
        example: [
          '有理数集 $\\mathbb{Q}$ 可数，勒贝格测度为 0；康托集不可数，但勒贝格测度仍为 0。'
        ],
        related: ['sigma-algebras', 'measurable-functions', 'lebesgue-integral']
      },
      {
        id: 'measurable-functions',
        name: '可测函数',
        brief: '与可测集合结构相容的函数',
        keywords: ['可测函数', '原像', '简单函数', '逼近'],
        definition: [
          '函数 $f: X \\to \\mathbb{R}$ 称为**可测**，如果对每个 Borel 集 $B$，原像 $f^{-1}(B)$ 都是可测集；等价地，$\\{f > a\\}$ 对每个 $a$ 可测。',
          '可测函数可以用简单函数（有限个可测集指示函数的线性组合）逐点逼近。'
        ],
        intuition: [
          '可测函数是“可以被积分的函数”：它的水平集足够规整，使得积分有意义。',
          '连续性蕴含可测性（在 Borel σ 代数下），但可测函数比连续函数宽泛得多，包括大量不连续函数。'
        ],
        formulas: [
          {
            tex: 'f \\text{ 可测} \\iff \\forall a \\in \\mathbb{R}:\\ \\{x : f(x) > a\\} \\in \\mathcal{F}',
            caption: '可测性的等价刻画。'
          },
          {
            tex: 'f_n \\nearrow f \\implies f \\text{ 可测}',
            caption: '可测函数列的逐点极限可测。'
          }
        ],
        example: [
          'Dirichlet 函数（有理点取 1，无理点取 0）是 Borel 可测的，但不是黎曼可积的；它勒贝格可积且积分为 0。'
        ],
        related: ['sigma-algebras', 'measures', 'lebesgue-integral']
      },
      {
        id: 'lebesgue-integral',
        name: '勒贝格积分',
        brief: '依据函数值组织积分',
        keywords: ['勒贝格积分', '简单函数', '单调收敛', '可积'],
        definition: [
          '勒贝格积分先对简单函数定义：$\\int \\sum a_i \\chi_{A_i} = \\sum a_i \\mu(A_i)$，再对非负可测函数用简单函数逼近取上确界。',
          '$f$ 勒贝格可积当且仅当 $\\int |f| < \\infty$；可积函数空间记为 $L^1$。'
        ],
        intuition: [
          '黎曼积分按定义域分割，勒贝格积分按函数值分割：把值域分层，数每层的“面积”。这使得更“病态”的函数也可积。',
          '勒贝格积分具有更好的极限性质（单调收敛、控制收敛），是现代分析与概率论的标准积分。'
        ],
        formulas: [
          {
            tex: '\\int_X f\\,d\\mu = \\sup\\left\\{\\int_X s\\,d\\mu : 0 \\le s \\le f,\\ s \\text{ 简单}\\right\\}',
            caption: '非负可测函数的勒贝格积分。'
          },
          {
            tex: '\\int_X f\\,d\\mu = \\int_X f^+\\,d\\mu - \\int_X f^-\\,d\\mu',
            caption: '一般可测函数的积分。'
          }
        ],
        example: [
          'Dirichlet 函数在 $[0,1]$ 上黎曼不可积，但勒贝格积分为 0（因为有理数集测度为 0）。'
        ],
        related: ['measurable-functions', 'measures', 'integration-limits']
      },
      {
        id: 'integration-limits',
        name: '积分与极限',
        brief: '在相应条件下交换积分和极限',
        keywords: ['单调收敛', '控制收敛', 'Fatou 引理', '极限交换'],
        definition: [
          '**单调收敛定理**：若 $0 \\le f_n \\nearrow f$，则 $\\int f_n \\to \\int f$。',
          '**控制收敛定理**：若 $f_n \\to f$ 且 $|f_n| \\le g$（$g$ 可积），则 $\\int f_n \\to \\int f$。Fatou 引理给出下界。'
        ],
        intuition: [
          '积分与极限一般不交换；勒贝格积分提供了两个强大的充分条件：单调收敛与控制收敛。',
          '控制收敛定理是概率论中“期望与极限交换”的标准工具。'
        ],
        formulas: [
          {
            tex: '0 \\le f_n \\nearrow f \\implies \\int f_n \\to \\int f',
            caption: '单调收敛定理。'
          },
          {
            tex: '|f_n| \\le g,\\ f_n \\to f \\implies \\int f_n \\to \\int f',
            caption: '控制收敛定理。'
          },
          {
            tex: '\\int \\liminf f_n \\le \\liminf \\int f_n',
            caption: 'Fatou 引理。'
          }
        ],
        example: [
          '$f_n = \\frac{1}{n}\\chi_{[0,n]}$：$f_n \\to 0$ 逐点，$\\int f_n = 1 \\to 1 \\ne 0$，说明没有控制函数时交换失败。'
        ],
        related: ['lebesgue-integral', 'function-sequences', 'probability/probability-space']
      }
    ]
  },
  {
    id: 'functional-analysis',
    name: '泛函分析',
    en: 'FUNCTIONAL ANALYSIS',
    brief: '用范数衡量向量或函数大小',
    color: '#6fb3e8',
    angle: -15,
    topics: [
      {
        id: 'normed-spaces',
        name: '赋范空间',
        brief: '用范数衡量向量或函数大小',
        keywords: ['赋范空间', '范数', '三角不等式', '完备化'],
        definition: [
          '**赋范空间**是向量空间 $X$ 配范数 $\\|\\cdot\\|: X \\to [0, \\infty)$，满足正定性、齐次性与三角不等式。',
          '范数诱导距离 $d(x, y) = \\|x - y\\|$，使 $X$ 成为度量空间；赋范空间的完备化是把柯西列补全。'
        ],
        intuition: [
          '范数是“向量长度的推广”：在函数空间中，$\\|f\\|$ 衡量函数的大小。不同范数定义不同的几何。',
          '$L^p$ 空间、连续函数空间、Sobolev 空间都是赋范空间；范数的选择决定了分析与数值性质。'
        ],
        formulas: [
          {
            tex: '\\|x\\| \\ge 0,\\quad \\|\\alpha x\\| = |\\alpha|\\,\\|x\\|,\\quad \\|x + y\\| \\le \\|x\\| + \\|y\\|',
            caption: '范数公理。'
          },
          {
            tex: '\\|f\\|_p = \\left(\\int |f|^p\\,d\\mu\\right)^{1/p}',
            caption: '$L^p$ 范数。'
          },
          {
            tex: '\\|f\\|_\\infty = \\operatorname{ess\\,sup} |f|',
            caption: '$L^\\infty$ 范数。'
          }
        ],
        example: [
          '在 $\\mathbb{R}^n$ 中，$\\|x\\|_1$、$\\|x\\|_2$、$\\|x\\|_\\infty$ 是三个常用范数；它们诱导不同的单位球形状。'
        ],
        related: ['banach-spaces', 'hilbert-spaces', 'linear-operators']
      },
      {
        id: 'banach-spaces',
        name: '巴拿赫空间',
        brief: '在范数下完备的线性空间',
        keywords: ['巴拿赫空间', '完备性', '压缩映射', '一致有界'],
        definition: [
          '**巴拿赫空间**是完备的赋范空间：每个柯西列都收敛。',
          '核心定理：压缩映射原理（不动点）、一致有界原理（Banach–Steinhaus）、开映射定理与闭图像定理。'
        ],
        intuition: [
          '巴拿赫空间是“函数空间的完备版本”：极限不会跑出空间，分析操作安全。',
          '压缩映射原理是微分方程解存在唯一性（Picard–Lindelöf）的基础；一致有界原理说明逐点有界的算子族一致有界。'
        ],
        formulas: [
          {
            tex: '\\{x_n\\} \\text{ 柯西} \\implies \\exists x \\in X:\\ x_n \\to x',
            caption: '完备性。'
          },
          {
            tex: '\\|T(x) - T(y)\\| \\le q\\|x - y\\|,\\ q < 1 \\implies T \\text{ 有唯一不动点}',
            caption: '压缩映射原理。'
          }
        ],
        example: [
          '$C([0,1])$ 配上 sup 范数是巴拿赫空间；$L^p$ 空间（$1 \\le p \\le \\infty$）也是巴拿赫空间。'
        ],
        related: ['normed-spaces', 'hilbert-spaces', 'linear-operators']
      },
      {
        id: 'hilbert-spaces',
        name: '希尔伯特空间',
        brief: '具有内积且完备的空间',
        keywords: ['希尔伯特空间', '内积', '正交投影', 'Riesz 表示'],
        definition: [
          '**希尔伯特空间**是完备的内积空间。内积 $\\langle \\cdot, \\cdot \\rangle$ 诱导范数 $\\|x\\| = \\sqrt{\\langle x, x\\rangle}$。',
          '正交投影定理（实 Hilbert 版）：对每个非空闭线性子空间 $M$ 和 $x\\in H$，存在唯一 $m\\in M$ 使 $x-m\\perp M$；$m$ 是距离 $x$ 最近的子空间元素。Riesz 表示定理（实 Hilbert 版）：每个有界线性泛函 $\\ell$ 都唯一表示为 $\\ell(x)=\\langle x,y\\rangle$，且 $\\|\\ell\\|=\\|y\\|$。标准正交基展开：每个实或复 Hilbert 空间有标准正交基 $E$；每个 $x$ 的非零系数至多可数，且 $x=\\sum_{e\\in E}\\langle x,e\\rangle e$ 范数收敛并满足 Parseval 等式。'
        ],
        intuition: [
          '希尔伯特空间是“无限维欧氏空间”：有角度、正交、投影，几何直觉大多适用。',
          '傅里叶级数就是希尔伯特空间中的正交基展开；量子力学的状态空间也是希尔伯特空间。'
        ],
        formulas: [
          {
            tex: '\\|x\\| = \\sqrt{\\langle x, x \\rangle}',
            caption: '内积诱导范数。'
          },
          {
            tex: 'x = \\sum_{i \\in I} \\langle x, e_i \\rangle e_i',
            caption: '正交基展开。'
          },
          {
            tex: 'H \\cong H^*',
            caption: 'Riesz 表示定理（实 Hilbert 空间自对偶）。'
          }
        ],
        example: [
          '$L^2([0,1])$ 是希尔伯特空间，内积为 $\\langle f, g\\rangle = \\int_0^1 f\\bar g$；傅里叶级数是其正交基展开。'
        ],
        related: ['banach-spaces', 'fourier-series', 'applied/quantum-theory']
      },
      {
        id: 'spectral-theory',
        name: '算子谱',
        brief: '推广矩阵特征值的概念',
        keywords: ['谱', '紧算子', '自伴算子', '谱定理'],
        definition: [
          '复 Banach 空间上的有界线性算子 $T: X \\to X$ 的**谱** $\\sigma(T)$ 是使 $T - \\lambda I$ 不存在有界双侧逆的 $\\lambda$ 集合，推广了矩阵特征值。',
          '紧自伴算子的谱定理：存在正交特征基，$T = \\sum \\lambda_i \\langle \\cdot, e_i\\rangle e_i$。'
        ],
        intuition: [
          '谱是“无限维特征值”：对有限矩阵，谱就是特征值；对算子，还包括连续谱等更复杂情形。',
          '量子力学中通常用自伴算子的谱描述可观测量与测量分布；一般谱测度理论属于背景，本卷未证明。'
        ],
        formulas: [
          {
            tex: '\\sigma(T) = \\{\\lambda \\in \\mathbb{C} : T - \\lambda I \\text{ 不可逆}\\}',
            caption: '谱的定义。'
          },
          {
            tex: 'T x = \\sum_n \\lambda_n \\langle x,e_n\\rangle e_n',
            caption: '紧自伴算子的谱分解；一般自伴算子的谱测度定理未在本卷证明。'
          }
        ],
        example: [
          '乘法算子 $M_f: g \\mapsto fg$ 在 $L^2$ 上的谱（对非零 σ 有限测度空间和本质有界复函数 $f$）是 $f$ 的本质值域；这解释了连续谱的来源。'
        ],
        related: ['linear-operators', 'hilbert-spaces', 'applied/quantum-theory']
      },
      {
        id: 'linear-operators',
        name: '线性算子',
        brief: '研究函数空间之间的线性映射',
        keywords: ['有界算子', '对偶空间', '开映射', '算子范数'],
        definition: [
          '**线性算子** $T: X \\to Y$ 满足 $T(ax + by) = aT(x) + bT(y)$。若存在 $C$ 使 $\\|Tx\\| \\le C\\|x\\|$，称为**有界算子**，其算子范数 $\\|T\\| = \\sup_{\\|x\\| \\le 1} \\|Tx\\|$。',
          '对偶空间 $X^*$ 是 $X$ 上连续线性泛函的空间；对非零实或复赋范空间，Hahn–Banach 定理保证非零连续线性泛函的存在，且可保范数延拓子空间上的有界线性泛函。'
        ],
        intuition: [
          '线性算子是“函数空间之间的线性变换”：微分、积分、傅里叶变换都是算子。',
          '有界性等价于连续性；无界算子（如微分算子）需要定义域限制，在 PDE 中常见。'
        ],
        formulas: [
          {
            tex: '\\|T\\| = \\sup_{x \\ne 0} \\frac{\\|Tx\\|}{\\|x\\|}',
            caption: '算子范数。'
          },
          {
            tex: 'X^* = \\{f: X \\to \\mathbb{R} : f \\text{ 线性连续}\\}',
            caption: '对偶空间。'
          }
        ],
        example: [
          '傅里叶变换 $\\mathcal{F}: L^2(\\mathbb{R}) \\to L^2(\\mathbb{R})$ 是有界线性算子，且是酉算子（Plancherel 定理）。'
        ],
        related: ['normed-spaces', 'spectral-theory', 'fourier-transform']
      }
    ]
  }
);