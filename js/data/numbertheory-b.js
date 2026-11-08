/* 数学知识地图 · 数论（下） */
window.ATLAS.subjects.numbertheory.branches.push(
  {
    id: 'transcendental-number-theory',
    name: '超越数论',
    en: 'TRANSCENDENTAL NUMBER THEORY',
    brief: '代数数、超越数与逼近性质',
    color: '#f5c98f',
    angle: -45,
    topics: [
      {
        id: 'algebraic-numbers',
        name: '代数数',
        brief: '某个非零整系数多项式的根',
        keywords: ['代数数', '次数', '共轭', '代数闭包'],
        definition: [
          '复数 $\\alpha$ 称为**代数数**，如果存在非零多项式 $f \\in \\mathbb{Q}[x]$ 使 $f(\\alpha) = 0$。所有代数数构成域 $\\overline{\\mathbb{Q}}$，它是 $\\mathbb{Q}$ 的代数闭包。',
          '每个代数数有唯一的首一极小多项式 $m_\\alpha \\in \\mathbb{Q}[x]$，其次数称为 $\\alpha$ 的次数。'
        ],
        intuition: [
          '代数数是“能被有限次代数运算描述的复数”：$\\sqrt2$、$i$、$\\sqrt[3]{5}$ 都是；$\\pi$ 与 $e$ 不是。',
          '代数数构成可数集，而复数不可数，因此“几乎所有的”复数都是超越数。但证明具体数是超越数非常困难。'
        ],
        formulas: [
          {
            tex: '\\alpha \\text{ 代数} \\iff \\exists\\, f \\in \\mathbb{Q}[x] \\setminus \\{0\\}:\\ f(\\alpha) = 0',
            caption: '代数数的定义。'
          },
          {
            tex: '|\\overline{\\mathbb{Q}}| = \\aleph_0 < |\\mathbb{C}|',
            caption: '代数数可数，复数不可数。'
          }
        ],
        example: [
          '$\\sqrt2 + \\sqrt3$ 是代数数，其极小多项式为 $x^4 - 10x^2 + 1$；它属于 $\\mathbb{Q}(\\sqrt2, \\sqrt3)$。'
        ],
        related: ['transcendental-numbers', 'number-fields', 'algebraic-integers']
      },
      {
        id: 'transcendental-numbers',
        name: '超越数',
        brief: '不满足这类多项式方程的数',
        keywords: ['超越数', 'Lindemann', '超越性证明', 'Baker 定理'],
        definition: [
          '不是代数数的复数称为**超越数**。证明一个具体数是超越数通常需要深刻的逼近估计。',
          '经典结果：Liouville（1844）构造出第一个超越数；Hermite（1873）证明 $e$ 超越；Lindemann（1882）证明 $\\pi$ 超越。'
        ],
        intuition: [
          '超越数“多得是”，但具体证明很难：需要说明任何整系数多项式都无法以它为根。',
          'Lindemann–Weierstrass 定理给出一般判据：若 $\\alpha_1, \\dots, \\alpha_n$ 是 $\\mathbb{Q}$ 上线性无关的代数数，则 $e^{\\alpha_i}$ 在 $\\overline{\\mathbb{Q}}$ 上代数无关。'
        ],
        formulas: [
          {
            tex: '\\alpha \\text{ 超越} \\iff \\alpha \\notin \\overline{\\mathbb{Q}}',
            caption: '超越数的定义。'
          },
          {
            tex: 'e^{i\\pi} + 1 = 0',
            caption: 'Euler 恒等式；由 Lindemann 定理推出 $\\pi$ 超越。'
          }
        ],
        example: [
          '$2^{\\sqrt2}$ 是超越数（Gelfond–Schneider 定理）；$\\pi + e$ 与 $\\pi e$ 的超越性仍未完全解决。'
        ],
        related: ['algebraic-numbers', 'pi-and-e', 'liouville-numbers']
      },
      {
        id: 'pi-and-e',
        name: 'π 与 e',
        brief: '两个著名的超越数',
        keywords: ['π', 'e', '超越性', 'Euler 恒等式'],
        definition: [
          '$e = \\sum_{n=0}^{\\infty} 1/n! \\approx 2.71828$ 是自然对数的底；$\\pi$ 是圆周长与直径之比，$\\pi \\approx 3.14159$。',
          '二者都是超越数：$e$ 由 Hermite 证明（1873），$\\pi$ 由 Lindemann 证明（1882）。'
        ],
        intuition: [
          '$\\pi$ 的超越性解决了古希腊的“化圆为方”问题：仅用尺规无法作出面积为给定圆的正方形，因为尺规只能构造代数数。',
          '$e$ 与 $\\pi$ 通过 Euler 恒等式 $e^{i\\pi} = -1$ 联系，被认为是数学中最美的公式之一。'
        ],
        formulas: [
          {
            tex: 'e = \\sum_{n=0}^{\\infty} \\frac{1}{n!}',
            caption: '$e$ 的级数定义。'
          },
          {
            tex: 'e^{i\\pi} + 1 = 0',
            caption: 'Euler 恒等式。'
          },
          {
            tex: '\\int_{-\\infty}^{\\infty} e^{-x^2}\\,dx = \\sqrt{\\pi}',
            caption: 'Gauss 积分，连接 $e$ 与 $\\pi$。'
          }
        ],
        example: [
          'Lindemann 的证明表明：若 $\\alpha \\ne 0$ 是代数数，则 $e^\\alpha$ 是超越数。取 $\\alpha = i\\pi$，因为 $e^{i\\pi} = -1$ 是代数数，所以 $i\\pi$ 不可能是代数数，故 $\\pi$ 超越。'
        ],
        related: ['transcendental-numbers', 'algebraic-numbers', 'analysis/fourier-transform']
      },
      {
        id: 'heights',
        name: '高度',
        brief: '刻画有理点的算术复杂度',
        keywords: ['高度', 'Weil 高度', 'Northcott 定理', '有理点'],
        definition: [
          '有理数 $p/q$（既约）的**高度**定义为 $H(p/q) = \\max(|p|, |q|)$。Weil 高度把这一概念推广到代数数与射影空间中的有理点。',
          'Northcott 定理：给定高度上界 $B$，只有有限多个次数不超过给定值的代数数高度不超过 $B$。'
        ],
        intuition: [
          '高度衡量一个有理数“有多复杂”：分母和分子越大，高度越高。有理点的高度控制其算术规模。',
          '高度在丢番图几何中是基本工具：Mordell–Weil 定理的证明用高度函数证明有理点群有限生成。'
        ],
        formulas: [
          {
            tex: 'H(p/q) = \\max(|p|, |q|),\\quad \\gcd(p, q) = 1',
            caption: '有理数的高度。'
          },
          {
            tex: 'h(\\alpha) = \\frac{1}{[\\mathbb{Q}(\\alpha) : \\mathbb{Q}]} \\sum_{v} \\log^+ |\\alpha|_v',
            caption: 'Weil 高度的局部乘积公式（示意）。'
          }
        ],
        example: [
          '$H(3/4) = 4$，$H(100/101) = 101$。高度越大的有理数越“难”被简单运算得到。'
        ],
        related: ['diophantine-approximation', 'rational-points', 'elliptic-curves']
      },
      {
        id: 'diophantine-approximation',
        name: '丢番图逼近',
        brief: '研究实数被有理数逼近的程度',
        keywords: ['丢番图逼近', 'Dirichlet 定理', '连分数', 'Roth 定理'],
        definition: [
          '**丢番图逼近**研究：对实数 $\\alpha$，用有理数 $p/q$ 逼近的误差 $|\\alpha - p/q|$ 能有多小。',
          'Dirichlet 定理：对任意无理数 $\\alpha$，存在无穷多个 $p/q$ 使 $|\\alpha - p/q| < 1/q^2$。Roth 定理（1955）证明：对代数数 $\\alpha$，$|\\alpha - p/q| < 1/q^{2+\\varepsilon}$ 只有有限多个解。'
        ],
        intuition: [
          '连分数给出最佳有理逼近：$\\pi$ 的连分数展开给出 $\\frac{22}{7}, \\frac{355}{113}$ 等经典近似。',
          'Roth 定理说明代数数不能被有理数“逼近得太快”，这是超越数论的核心结果，Roth 因此获得菲尔兹奖。'
        ],
        formulas: [
          {
            tex: '\\left| \\alpha - \\frac{p}{q} \\right| < \\frac{1}{q^2}',
            caption: 'Dirichlet 逼近定理。'
          },
          {
            tex: '\\left| \\alpha - \\frac{p}{q} \\right| < \\frac{1}{q^{2+\\varepsilon}}',
            caption: 'Roth 定理：对代数数 $\\alpha$，此不等式只有有限多个解。'
          }
        ],
        example: [
          '$\\frac{355}{113} \\approx 3.14159292$ 是 $\\pi$ 的极佳有理逼近，误差约 $2.7 \\times 10^{-7}$，来自连分数 $[3; 7, 15, 1, 292, \\dots]$。'
        ],
        related: ['heights', 'liouville-numbers', 'rational-points']
      },
      {
        id: 'liouville-numbers',
        name: '刘维尔数',
        brief: '一类可证明为超越数的实数',
        keywords: ['刘维尔数', 'Liouville 常数', '超越性', '逼近'],
        definition: [
          '实数 $\\alpha$ 称为**刘维尔数**，如果对每个正整数 $n$，都存在有理数 $p/q$ 使 $0 < |\\alpha - p/q| < 1/q^n$。',
          'Liouville 定理：代数数不能被有理数逼近得如此快（存在与次数相关的下界），因此刘维尔数是超越数。'
        ],
        intuition: [
          '刘维尔数被有理数逼近的速度快得“离谱”，远超代数数允许的范围，因此只能是超越数。',
          '$\\sum_{k=1}^{\\infty} 10^{-k!}$ 小数点后出现极长的零段，可以被有理数非常精确地截断逼近。'
        ],
        formulas: [
          {
            tex: '\\forall n,\\ \\exists\\, p, q:\\ 0 < \\left| \\alpha - \\frac{p}{q} \\right| < \\frac{1}{q^n}',
            caption: '刘维尔数的定义。'
          },
          {
            tex: '\\alpha = \\sum_{k=1}^{\\infty} 10^{-k!}',
            caption: 'Liouville 常数，是第一个被证明的超越数。'
          }
        ],
        example: [
          'Liouville 常数 $0.110001000000000000000001\\dots$（1 出现在阶乘位置）满足刘维尔条件，因此是超越数。'
        ],
        related: ['transcendental-numbers', 'diophantine-approximation', 'algebraic-numbers']
      }
    ]
  },
  {
    id: 'modular-forms',
    name: '模形式',
    en: 'MODULAR FORMS',
    brief: '具有特定变换规律的解析函数',
    color: '#eab56a',
    angle: -90,
    topics: [
      {
        id: 'modular-transformations',
        name: '模变换',
        brief: '研究复上半平面的特殊对称',
        keywords: ['模变换', '模群', '基本域', '模形式'],
        definition: [
          '**模群** $SL_2(\\mathbb{Z})$ 通过分式线性变换 $\\tau \\mapsto \\frac{a\\tau + b}{c\\tau + d}$ 作用在复上半平面 $\\mathbb{H}$ 上。模形式是在此作用下具有特定变换规律的解析函数。',
          '权重为 $k$ 的模形式 $f$ 满足 $f\\left(\\frac{a\\tau+b}{c\\tau+d}\\right) = (c\\tau+d)^k f(\\tau)$，并对所有 $\\gamma \\in SL_2(\\mathbb{Z})$ 成立。'
        ],
        intuition: [
          '上半平面在模群作用下被折叠成“基本域”，顶点为 $i$ 与 $e^{2\\pi i/3}$。模形式就是尊重这种折叠对称的函数。',
          '模变换把无穷远处的行为与原点附近联系起来，导致模形式具有丰富的算术性质（如 Fourier 系数的乘性）。'
        ],
        formulas: [
          {
            tex: 'f\\left(\\frac{a\\tau + b}{c\\tau + d}\\right) = (c\\tau + d)^k f(\\tau)',
            caption: '模形式的变换规律。'
          },
          {
            tex: '\\tau \\mapsto \\frac{a\\tau + b}{c\\tau + d},\\quad \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\in SL_2(\\mathbb{Z})',
            caption: '模群的分式线性作用。'
          }
        ],
        example: [
          '模判别式 $\\Delta(\\tau) = q \\prod_{n=1}^{\\infty} (1-q^n)^{24}$（$q = e^{2\\pi i\\tau}$）是权重 12 的模形式。'
        ],
        related: ['cusp-forms', 'hecke-operators', 'fourier-expansion']
      },
      {
        id: 'cusp-forms',
        name: '尖点形式',
        brief: '在尖点处满足消失条件',
        keywords: ['尖点形式', '尖点', '权', 'Hecke 特征形式'],
        definition: [
          '模形式在尖点（如 $i\\infty$）处的 Fourier 展开中常数项为零时，称为**尖点形式**。尖点形式构成模形式空间的子空间。',
          '尖点形式是“真正的模形式”：它们在上半平面有界并在尖点消失，因而具有良好的解析性质。'
        ],
        intuition: [
          '尖点形式在“无穷远”处衰减到零，像声波在边界处消失。它们对应自守表示中的离散谱部分。',
          '椭圆曲线的模性定理把椭圆曲线的 L 函数与一个权重 2 的尖点形式对应起来，这是费马大定理证明的关键。'
        ],
        formulas: [
          {
            tex: 'f(\\tau) = \\sum_{n=1}^{\\infty} a_n q^n,\\quad q = e^{2\\pi i \\tau}',
            caption: '尖点形式的 Fourier 展开（常数项为 0）。'
          },
          {
            tex: 'S_k(\\Gamma) \\subseteq M_k(\\Gamma)',
            caption: '尖点形式是模形式的子空间。'
          }
        ],
        example: [
          '$\\Delta(\\tau) = q \\prod (1-q^n)^{24} = \\sum_{n=1}^{\\infty} \\tau(n) q^n$ 是权重 12 的尖点形式，$\\tau(n)$ 为 Ramanujan tau 函数。'
        ],
        related: ['modular-transformations', 'hecke-operators', 'modularity']
      },
      {
        id: 'hecke-operators',
        name: 'Hecke 算子',
        brief: '组织模形式的算术对称',
        keywords: ['Hecke 算子', '特征形式', '特征值', '算术'],
        definition: [
          '**Hecke 算子** $T_n$ 作用在模形式空间上，由对所有指数为 $n$ 的格求和定义。它们两两交换，因此可以同时对角化。',
          'Hecke 特征形式是所有 $T_n$ 的共同特征向量；其 Fourier 系数 $a_n$ 等于对应特征值，并满足乘性关系。'
        ],
        intuition: [
          'Hecke 算子是模形式上的“平均算子”：它们把模形式按算术对称性分解，特征形式给出最基本的构件。',
          'Hecke 特征值蕴含深刻的算术信息：例如椭圆曲线的点数 $a_p$ 就是对应模形式的 Hecke 特征值。'
        ],
        formulas: [
          {
            tex: 'T_n f = \\lambda_n f',
            caption: 'Hecke 特征形式。'
          },
          {
            tex: 'a_{mn} = a_m a_n\\quad (\\gcd(m, n) = 1)',
            caption: 'Hecke 特征值的乘性。'
          }
        ],
        example: [
          '$\\Delta$ 的 Fourier 系数 $\\tau(n)$ 是 Hecke 特征值，满足 $\\tau(mn) = \\tau(m)\\tau(n)$（互素时）与 $\\tau(p^{k+1}) = \\tau(p)\\tau(p^k) - p^{11}\\tau(p^{k-1})$。'
        ],
        related: ['cusp-forms', 'modular-transformations', 'modularity']
      },
      {
        id: 'fourier-expansion',
        name: '傅里叶展开',
        brief: '用展开系数携带算术信息',
        keywords: ['傅里叶展开', 'q 展开', '模形式', '系数'],
        definition: [
          '模形式 $f$ 在尖点 $i\\infty$ 处有 Fourier 展开（q 展开）$f(\\tau) = \\sum_{n=0}^{\\infty} a_n q^n$，其中 $q = e^{2\\pi i \\tau}$。',
          '展开系数 $a_n$ 编码模形式的算术信息；对 Hecke 特征形式，$a_n$ 满足乘性关系并与 L 函数相关。'
        ],
        intuition: [
          '模形式在上半平面是全纯函数，但在尖点附近可以像 Fourier 级数一样展开。q 展开把解析对象转化为数列，使代数与数论工具得以使用。',
          '模形式的 L 函数由 $a_n$ 构造，其解析性质（解析延拓、函数方程）是模性定理与 Langlands 纲领的核心。'
        ],
        formulas: [
          {
            tex: 'f(\\tau) = \\sum_{n=0}^{\\infty} a_n q^n,\\quad q = e^{2\\pi i \\tau}',
            caption: '模形式的 q 展开。'
          },
          {
            tex: 'L(f, s) = \\sum_{n=1}^{\\infty} \\frac{a_n}{n^s}',
            caption: '模形式对应的 L 函数。'
          }
        ],
        example: [
          '$\\Delta(\\tau) = q - 24q^2 + 252q^3 - 1472q^4 + \\cdots$，系数 $\\tau(n)$ 是 Ramanujan tau 函数。'
        ],
        related: ['modular-transformations', 'hecke-operators', 'zeta-l-functions']
      },
      {
        id: 'modularity',
        name: '模性联系',
        brief: '把部分椭圆曲线与模形式相连',
        keywords: ['模性定理', '费马大定理', 'Taniyama-Shimura', 'Wiles'],
        definition: [
          '**模性定理**（Taniyama–Shimura–Weil 猜想，Wiles 等证明）：每条定义在 $\\mathbb{Q}$ 上的椭圆曲线都对应一个权重 2 的尖点形式，使二者的 L 函数相同。',
          '这一对应是 Langlands 纲领的特例：椭圆曲线的伽罗瓦表示来自模形式。'
        ],
        intuition: [
          '模性定理建立了“椭圆曲线”与“模形式”两套看似无关的对象之间的字典，使椭圆曲线的算术问题可以用模形式的解析工具研究。',
          'Wiles 证明模性定理的半稳定情形，并由此推出费马大定理：若 $x^n + y^n = z^n$ 有非平凡解，可构造一条不满足模性的椭圆曲线（Frey 曲线），矛盾。'
        ],
        formulas: [
          {
            tex: 'L(E, s) = L(f, s)',
            caption: '椭圆曲线与模形式共享同一个 L 函数。'
          },
          {
            tex: 'a_p(E) = a_p(f)',
            caption: '模 p 点数与 Hecke 特征值一致。'
          }
        ],
        example: [
          '椭圆曲线 $y^2 = x^3 - x$ 对应权重 2 的模形式，其 $a_p$ 与曲线的点数 $N_p = p + 1 - a_p$ 一致。'
        ],
        related: ['elliptic-curves', 'cusp-forms', 'hecke-operators']
      }
    ]
  },
  {
    id: 'computational-number-theory',
    name: '计算数论',
    en: 'COMPUTATIONAL NUMBER THEORY',
    brief: '整数与素数的算法',
    color: '#e0a45a',
    angle: -135,
    topics: [
      {
        id: 'discrete-logarithms',
        name: '离散对数',
        brief: '由群元素的幂反求指数',
        keywords: ['离散对数', 'BSGS', '指数演算', '密码学'],
        definition: [
          '在有限循环群 $G = \\langle g \\rangle$ 中，给定 $h = g^x$，求 $x$ 称为**离散对数问题**。当群为 $\\mathbb{F}_p^{\\times}$ 或椭圆曲线群时，该问题被认为困难。',
          '离散对数问题是 Diffie–Hellman 密钥交换与 ElGamal 加密的安全性基础。'
        ],
        intuition: [
          '普通对数可以用计算器快速求出，但离散对数在有限群中没有已知多项式时间算法（对经典计算机）。',
          '这种“容易正向计算、难以反向求解”的不对称性是公钥密码的核心。Shor 算法在量子计算机上可多项式时间求解离散对数，因此后量子密码学正在发展。'
        ],
        formulas: [
          {
            tex: 'h = g^x \\bmod p,\\quad \\text{求 } x',
            caption: '有限域上的离散对数问题。'
          },
          {
            tex: 'x \\approx \\sqrt{N}',
            caption: 'BSGS（baby-step giant-step）算法的复杂度。'
          }
        ],
        example: [
          '$p = 23, g = 5, h = 8$：试算 $5^6 \\equiv 8 \\pmod{23}$，故离散对数为 6。'
        ],
        related: ['modular-exponentiation', 'discrete/public-key-cryptography', 'elliptic-curves']
      },
      {
        id: 'modular-exponentiation',
        name: '模幂算法',
        brief: '高效计算大指数的余数',
        keywords: ['模幂', '快速幂', '反复平方', 'RSA'],
        definition: [
          '**模幂算法**计算 $a^b \\bmod m$。朴素方法需要 $b$ 次乘法，快速幂（反复平方）只需 $O(\\log b)$ 次乘法。',
          '算法把指数写成二进制：$b = \\sum b_i 2^i$，从高位到低位依次平方并选择性乘以底数。'
        ],
        intuition: [
          '快速幂利用 $a^{2k} = (a^k)^2$，每次把指数减半，因此指数再大也只需对数步。这是 RSA 加密与素性检验的基本操作。',
          '例如计算 $3^{1000000} \\bmod 7$，只需约 20 次平方，而不是一百万次乘法。'
        ],
        formulas: [
          {
            tex: 'a^b = \\prod_{i: b_i = 1} a^{2^i}',
            caption: '二进制展开。'
          },
          {
            tex: 'T(b) = O(\\log b)',
            caption: '快速幂的时间复杂度。'
          }
        ],
        example: [
          '计算 $2^{10} \\bmod 1000$：$2^{10} = 1024 \\equiv 24$。快速幂通过 $2 \\to 4 \\to 16 \\to 256 \\to 24$ 得到结果。'
        ],
        related: ['discrete-logarithms', 'primality-testing', 'discrete/public-key-cryptography']
      },
      {
        id: 'primality-testing',
        name: '素性检验',
        brief: '判断整数是否为素数',
        keywords: ['素性检验', 'Miller-Rabin', 'AKS', '费马检验'],
        definition: [
          '**素性检验**判定给定整数是否为素数。确定性算法包括试除法、AKS（多项式时间，2002）；实用算法包括 Miller–Rabin 概率检验与 ECPP。',
          'Miller–Rabin 基于费马小定理的加强版本：若 $n$ 通过若干随机基的检验，则 $n$ 是素数的概率极高。'
        ],
        intuition: [
          '素性检验与整数分解不同：判断“是不是素数”比“找出因子”容易得多。AKS 证明了素性检验属于 P。',
          '实际应用中（如 RSA 密钥生成）使用 Miller–Rabin，配合足够的随机基，错误概率低到可以忽略。'
        ],
        formulas: [
          {
            tex: 'a^{n-1} \\equiv 1 \\pmod n\\quad \\text{（费马检验，$n$ 素数时必成立）}',
            caption: '费马小定理给出必要条件，但存在伪素数。'
          },
          {
            tex: 'a^{d} \\equiv 1 \\ \\text{或}\\ a^{2^r d} \\equiv -1 \\pmod n',
            caption: 'Miller–Rabin 的核心条件（$n-1 = 2^s d$，$d$ 为奇数）。'
          }
        ],
        example: [
          '对 $n = 561$（Carmichael 数），费马检验对所有与 561 互素的 $a$ 都通过，但 Miller–Rabin 以高概率识别其为合数。'
        ],
        related: ['modular-exponentiation', 'integer-factorization', 'discrete/public-key-cryptography']
      },
      {
        id: 'integer-factorization',
        name: '整数分解',
        brief: '寻找大整数的素因子',
        keywords: ['整数分解', 'Pollard rho', '二次筛', '数域筛'],
        definition: [
          '**整数分解**把合数写成素因子乘积。已知算法包括试除法、Pollard rho、二次筛（QS）与数域筛（NFS）。',
          '最快的一般算法（NFS）复杂度为亚指数级 $\\exp\\left(O((\\log n)^{1/3}(\\log\\log n)^{2/3})\\right)$。'
        ],
        intuition: [
          '整数分解被认为比素性检验困难得多，RSA 的安全性正是基于这一不对称性。',
          'Pollard rho 用伪随机序列找因子；数域筛利用代数数域中的平滑关系。量子计算机上的 Shor 算法可多项式时间分解，威胁 RSA。'
        ],
        formulas: [
          {
            tex: 'n = p_1^{e_1} \\cdots p_k^{e_k}',
            caption: '整数分解的目标形式。'
          },
          {
            tex: 'T_{\\mathrm{NFS}}(n) = \\exp\\left( O\\left((\\log n)^{1/3} (\\log\\log n)^{2/3}\\right) \\right)',
            caption: '数域筛的亚指数复杂度。'
          }
        ],
        example: [
          'RSA-129（129 位十进制数）于 1994 年被二次筛分解；RSA-250（250 位）于 2020 年被数域筛分解，耗时约 2700 核心年。'
        ],
        related: ['primality-testing', 'discrete/public-key-cryptography', 'lattice-methods']
      },
      {
        id: 'lattice-methods',
        name: '格方法',
        brief: '借助格基处理部分算术问题',
        keywords: ['格', 'LLL', '格基约化', 'Coppersmith'],
        definition: [
          '**格**是 $\\mathbb{R}^n$ 中的离散加法子群 $L = \\mathbb{Z} b_1 \\oplus \\cdots \\oplus \\mathbb{Z} b_n$。格基约化（LLL、BKZ）寻找“短”且“接近正交”的基。',
          'Coppersmith 方法用 LLL 求多项式的小根，可用于攻击弱 RSA 参数、分解特定结构的整数。'
        ],
        intuition: [
          '格是“规则的网格点阵”。LLL 算法在多项式时间内找到较短的基向量，虽然不保证最短，但足以解决许多密码学与数论问题。',
          '格密码（LWE、NTRU）正是基于格问题的困难性，被视为后量子密码的主要候选。'
        ],
        formulas: [
          {
            tex: 'L = \\left\\{ \\sum_{i=1}^{n} z_i b_i : z_i \\in \\mathbb{Z} \\right\\}',
            caption: '格的定义。'
          },
          {
            tex: '\\det L = |\\det(b_1, \\dots, b_n)|',
            caption: '格的体积（行列式）。'
          }
        ],
        example: [
          'LLL 可以在多项式时间内把二维格基 $(100, 1), (101, 2)$ 约化为短基 $(1, 1), (-1, 0)$，用于求最接近的整数关系。'
        ],
        related: ['integer-factorization', 'discrete/public-key-cryptography', 'heights']
      },
      {
        id: 'local-global-principle',
        name: '局部到整体',
        brief: '局部有解能否保证整体有解',
        keywords: ['局部-整体', 'Hasse 原理', '局部域', '反例'],
        definition: [
          '**局部-整体原则**（Hasse 原理）：一个方程在 $\\mathbb{Q}$ 上有解，当且仅当它在每个 $\\mathbb{Q}_p$（所有素数 $p$）与 $\\mathbb{R}$ 上都有解。',
          '该原则对二次型成立（Hasse–Minkowski 定理），但对高次方程一般不成立：存在处处局部有解但整体无解的反例（Selmer 曲线 $3x^3 + 4y^3 + 5z^3 = 0$）。'
        ],
        intuition: [
          '局部-整体原则是数论中的“拼图”：如果每个局部拼图都能放进去，整体是否一定成立？对二次型答案是肯定的，对三次及以上则不一定。',
          'Tate–Shafarevich 群度量局部-整体失败的障碍，是椭圆曲线算术的核心对象。'
        ],
        formulas: [
          {
            tex: 'f(x) = 0 \\text{ 有 } \\mathbb{Q}\\text{-解} \\iff f \\text{ 在每个 } \\mathbb{Q}_p \\text{ 与 } \\mathbb{R} \\text{ 上有解}',
            caption: 'Hasse 原理（对二次型成立）。'
          },
          {
            tex: '3x^3 + 4y^3 + 5z^3 = 0',
            caption: 'Selmer 曲线：处处局部有非平凡解，但无有理非平凡解。'
          }
        ],
        example: [
          '$x^2 + y^2 = -1$ 在 $\\mathbb{R}$ 上无解，因此局部-整体失败；而 $x^2 + y^2 = 3$ 在 $\\mathbb{Q}_p$ 与 $\\mathbb{R}$ 上都局部可解，但无有理解，说明二次型以外的失败。'
        ],
        related: ['local-fields', 'rational-points', 'elliptic-curves']
      }
    ]
  },
  {
    id: 'diophantine-equations',
    name: '丢番图方程',
    en: 'DIOPHANTINE EQUATIONS',
    brief: '寻找整系数方程的有理解',
    color: '#f0bd72',
    angle: 180,
    topics: [
      {
        id: 'rational-points',
        name: '有理点',
        brief: '研究方程的有理解',
        keywords: ['有理点', '有理曲线', '有理参数化', 'Mordell'],
        definition: [
          '代数簇 $V$ 的**有理点**是坐标都在 $\\mathbb{Q}$ 中的点，记 $V(\\mathbb{Q})$。丢番图几何研究有理点的存在性与分布。',
          '有理曲线（亏格 0）的有理点可以用有理参数化完全描述；椭圆曲线（亏格 1）的有理点群有限生成（Mordell–Weil）；亏格 $\\ge 2$ 的曲线有理点有限（Faltings 定理）。'
        ],
        intuition: [
          '亏格决定了有理点的“丰富程度”：圆锥曲线有无穷多有理点，椭圆曲线可能有有限或无限多，亏格 ≥ 2 的曲线只有有限多（Faltings 1983，证明 Mordell 猜想）。',
          '求有理点的方法包括：有理参数化、下降法、局部-整体原则、高度理论。'
        ],
        formulas: [
          {
            tex: 'V(\\mathbb{Q}) = V \\cap \\mathbb{Q}^n',
            caption: '有理点集。'
          },
          {
            tex: 'g = 0 \\Rightarrow \\text{有理参数化}；\\quad g = 1 \\Rightarrow \\text{椭圆曲线群}；\\quad g \\ge 2 \\Rightarrow \\text{有限}',
            caption: '亏格与有理点结构。'
          }
        ],
        example: [
          '单位圆 $x^2 + y^2 = 1$ 的所有有理点可参数化为 $\\left(\\frac{1-t^2}{1+t^2}, \\frac{2t}{1+t^2}\\right)$，$t \\in \\mathbb{Q}$。'
        ],
        related: ['pythagorean-triples', 'elliptic-curves', 'heights']
      },
      {
        id: 'integer-equations',
        name: '整系数方程',
        brief: '寻找满足方程的整数解',
        keywords: ['整系数方程', 'Pell 方程', 'Mordell 方程', '整数解'],
        definition: [
          '整系数多项式方程 $f(x_1, \\dots, x_n) = 0$ 的**整数解**问题。典型例子：Pell 方程 $x^2 - Dy^2 = 1$、Mordell 方程 $y^2 = x^3 + k$。',
          '希尔伯特第十问题（1900）问：是否存在算法判定任意整系数方程是否有整数解？答案是否定的（Matiyasevich 1970，基于 MRDP 定理）。'
        ],
        intuition: [
          '整数解比有理点更严格：分母必须为 1。许多方程（如 $x^2 - 2y^2 = 1$）有无穷多整数解，由 Pell 方程理论描述。',
          '希尔伯特第十问题的否定回答说明：丢番图方程一般不可判定，不存在通用算法。这是数论与可计算性的深刻联系。'
        ],
        formulas: [
          {
            tex: 'x^2 - Dy^2 = 1',
            caption: 'Pell 方程（$D$ 非平方正整数）。'
          },
          {
            tex: 'y^2 = x^3 + k',
            caption: 'Mordell 方程。'
          }
        ],
        example: [
          'Pell 方程 $x^2 - 2y^2 = 1$ 的最小正整数解为 $(3, 2)$；由 $(3 + 2\\sqrt2)^n$ 生成全部解。'
        ],
        related: ['rational-points', 'local-global-principle', 'pythagorean-triples']
      },
      {
        id: 'local-solvability',
        name: '局部可解性',
        brief: '先检查实数与各 p 进域中的解',
        keywords: ['局部可解', 'Hasse 原理', 'p 进', '障碍'],
        definition: [
          '方程在**局部可解**，指它在 $\\mathbb{R}$ 与每个 $\\mathbb{Q}_p$ 上都有解。局部可解是整体有解的必要条件。',
          'Hasse 原理断言局部可解推出整体可解；它对二次型成立，对一般方程失败。'
        ],
        intuition: [
          '局部可解性是“便宜的检验”：如果某个局部域上无解，整体必然无解。例如 $x^2 + y^2 = -1$ 在 $\\mathbb{R}$ 上无解。',
          '当局部处处可解但整体无解时，说明存在“全局障碍”（如 Brauer–Manin 障碍），这是算术几何的研究前沿。'
        ],
        formulas: [
          {
            tex: 'V(\\mathbb{Q}) \\ne \\varnothing \\implies V(\\mathbb{Q}_p) \\ne \\varnothing\\ \\forall p,\\quad V(\\mathbb{R}) \\ne \\varnothing',
            caption: '整体有解推出局部处处有解。'
          },
          {
            tex: 'V(\\mathbb{Q}_p) \\ne \\varnothing\\ \\forall p,\\ V(\\mathbb{R}) \\ne \\varnothing \\nRightarrow V(\\mathbb{Q}) \\ne \\varnothing',
            caption: '反向一般不成立。'
          }
        ],
        example: [
          '$3x^3 + 4y^3 + 5z^3 = 0$ 在每个 $\\mathbb{Q}_p$ 与 $\\mathbb{R}$ 上都有非平凡解，但在 $\\mathbb{Q}$ 上只有平凡解 $(0,0,0)$。'
        ],
        related: ['local-global-principle', 'rational-points', 'local-fields']
      }
    ]
  }
);