/* 数学知识地图 · 数论（上） */
window.ATLAS = window.ATLAS || { subjects: {} };

window.ATLAS.subjects.numbertheory = {
  id: 'numbertheory',
  name: '数论',
  en: 'NUMBER THEORY',
  tagline: '整数与素数，怎样连接到分析和几何',
  color: '#e8a45c',
  startAngle: 135,
  branches: [
    {
      id: 'elementary-number-theory',
      name: '初等数论',
      en: 'ELEMENTARY NUMBER THEORY',
      brief: '整除、同余与素数',
      color: '#f0b46e',
      angle: 135,
      topics: [
        {
          id: 'divisibility-primes',
          name: '整除与素数',
          brief: '整数的因子及基本乘法结构',
          keywords: ['整除', '素数', '算术基本定理', '因子'],
          definition: [
            '若存在整数 $k$ 使 $b = ak$，则称 $a$ **整除** $b$，记 $a \\mid b$。大于 1 且只有 $1$ 与自身两个正因子的整数称为**素数**，其余大于 1 的整数称为合数。',
            '**算术基本定理**：每个大于 1 的整数都能唯一分解为素数的乘积（不计次序）。'
          ],
          intuition: [
            '素数是整数的“原子”，所有整数都由它们乘出来。这种唯一分解是数论最根本的结构定理，也是许多算法（如 RSA）的基础。',
            '欧几里得用反证法证明素数有无穷多个：若有有限多个素数 $p_1, \\dots, p_n$，则 $p_1 p_2 \\cdots p_n + 1$ 的任一素因子都不在列表中，矛盾。'
          ],
          formulas: [
            {
              tex: 'n = p_1^{a_1} p_2^{a_2} \\cdots p_k^{a_k},\\quad p_i \\text{ 为素数},\\ a_i \\ge 1',
              caption: '算术基本定理：唯一素数分解。'
            },
            {
              tex: 'a \\mid b \\iff b = ak\\ \\text{对某个 } k \\in \\mathbb{Z}',
              caption: '整除的定义。'
            }
          ],
          example: [
            '$360 = 2^3 \\cdot 3^2 \\cdot 5$，分解唯一。由分解可读出因数个数 $\\tau(360) = (3+1)(2+1)(1+1) = 24$。'
          ],
          related: ['gcd', 'congruences', 'prime-counting']
        },
        {
          id: 'gcd',
          name: '最大公因数',
          brief: '用欧几里得算法求公共因子',
          keywords: ['最大公因数', '欧几里得算法', '裴蜀等式', '互素'],
          definition: [
            '整数 $a, b$ 的**最大公因数** $\\gcd(a, b)$ 是同时整除二者的最大正整数。若 $\\gcd(a, b) = 1$，称 $a, b$ **互素**。',
            '**欧几里得算法**通过反复带余除法计算 $\\gcd$：$\\gcd(a, b) = \\gcd(b, a \\bmod b)$，直到余数为零。'
          ],
          intuition: [
            '欧几里得算法是“最古老的算法”之一，效率极高（对数级步数）。它的正确性来自：$a$ 与 $b$ 的公因数集合，与 $b$ 和 $a \\bmod b$ 的公因数集合相同。',
            '裴蜀等式说明 $\\gcd(a,b)$ 可以写成 $ax + by$ 的形式，这给出了扩展欧几里得算法，也是求解线性同余方程与模逆的基础。'
          ],
          formulas: [
            {
              tex: '\\gcd(a, b) = \\gcd(b,\\ a \\bmod b)',
              caption: '欧几里得算法的递推。'
            },
            {
              tex: '\\exists\\, x, y \\in \\mathbb{Z}:\\ ax + by = \\gcd(a, b)',
              caption: '裴蜀等式（Bézout 恒等式）。'
            },
            {
              tex: '\\gcd(a, b) \\cdot \\mathrm{lcm}(a, b) = |ab|',
              caption: '最大公因数与最小公倍数的关系。'
            }
          ],
          example: [
            '$\\gcd(252, 105)$：$252 = 2 \\cdot 105 + 42$，$105 = 2 \\cdot 42 + 21$，$42 = 2 \\cdot 21$，故 $\\gcd = 21$。反向回代得 $21 = 105 - 2 \\cdot 42 = 5 \\cdot 105 - 2 \\cdot 252$。'
          ],
          related: ['divisibility-primes', 'congruences', 'arithmetic-functions']
        },
        {
          id: 'congruences',
          name: '同余',
          brief: '研究除法余数之间的关系',
          keywords: ['同余', '模运算', '中国剩余定理', '费马小定理'],
          definition: [
            '若 $n \\mid (a - b)$，称 $a$ 与 $b$ **模 $n$ 同余**，记 $a \\equiv b \\pmod{n}$。同余是整数集上的等价关系，把整数分成 $n$ 个剩余类。',
            '同余类构成环 $\\mathbb{Z}/n\\mathbb{Z}$，可以相加、相乘。当 $n$ 为素数时，非零类构成乘法群 $\\mathbb{F}_n^{\\times}$。'
          ],
          intuition: [
            '同余就是“只看余数”：$17$ 与 $2$ 模 $5$ 同余，因为都余 $2$。模运算让无限整数变成有限结构，是密码学与算法的基本工具。',
            '中国剩余定理说明：关于互素模数的同余条件可以独立求解再合并；费马小定理说明模素数时幂运算具有周期性（$a^{p-1} \\equiv 1$）。'
          ],
          formulas: [
            {
              tex: 'a \\equiv b \\pmod{n} \\iff n \\mid (a - b)',
              caption: '同余的定义。'
            },
            {
              tex: 'x \\equiv a_1 \\pmod{m_1},\\ x \\equiv a_2 \\pmod{m_2},\\ \\gcd(m_1, m_2) = 1',
              caption: '中国剩余定理：模互素的同余方程组在模 $m_1 m_2$ 下有唯一解。'
            },
            {
              tex: 'a^{p-1} \\equiv 1 \\pmod{p}\\quad (p \\nmid a)',
              caption: '费马小定理。'
            }
          ],
          example: [
            '解 $x \\equiv 2 \\pmod{3}$，$x \\equiv 3 \\pmod{5}$：$x = 8$ 是模 15 的唯一解。验证：$8 \\bmod 3 = 2$，$8 \\bmod 5 = 3$。'
          ],
          related: ['gcd', 'quadratic-residues', 'discrete/public-key-cryptography']
        },
        {
          id: 'arithmetic-functions',
          name: '算术函数',
          brief: '给整数赋值并研究其规律',
          keywords: ['算术函数', '欧拉 φ', '莫比乌斯函数', '狄利克雷卷积'],
          definition: [
            '**算术函数**是定义在正整数上的函数。重要例子：欧拉函数 $\\varphi(n)$（不超过 $n$ 且与 $n$ 互素的正整数个数）、莫比乌斯函数 $\\mu(n)$、除数函数 $\\tau(n)$、素因子和函数 $\\sigma(n)$。',
            '若 $f(ab) = f(a)f(b)$ 对互素的 $a, b$ 成立，称 $f$ 为**积性函数**。狄利克雷卷积 $(f * g)(n) = \\sum_{d \\mid n} f(d)g(n/d)$ 把算术函数组织成环。'
          ],
          intuition: [
            '算术函数描述整数的乘法结构：$\\varphi(n)$ 数“与 $n$ 互素的数”，$\\mu(n)$ 检测素因子的重复，$\\tau(n)$ 数因子。',
            '莫比乌斯反演把“对所有因子求和”与“对单个值”互相转化，是解析数论中的基本技术。'
          ],
          formulas: [
            {
              tex: '\\varphi(n) = n \\prod_{p \\mid n} \\left(1 - \\frac{1}{p}\\right)',
              caption: '欧拉函数的乘积公式。'
            },
            {
              tex: '\\sum_{d \\mid n} \\mu(d) = \\begin{cases} 1, & n = 1 \\\\ 0, & n > 1 \\end{cases}',
              caption: '莫比乌斯函数的和性质。'
            },
            {
              tex: '(f * g)(n) = \\sum_{d \\mid n} f(d)\\,g(n/d)',
              caption: '狄利克雷卷积。'
            }
          ],
          example: [
            '$\\varphi(12) = 12(1 - 1/2)(1 - 1/3) = 4$：与 12 互素的正整数为 $1, 5, 7, 11$。'
          ],
          related: ['divisibility-primes', 'zeta-l-functions', 'sieve-methods']
        },
        {
          id: 'quadratic-residues',
          name: '二次剩余',
          brief: '判断平方在模意义下的可能值',
          keywords: ['二次剩余', '勒让德符号', '二次互反律', '模平方'],
          definition: [
            '若同余方程 $x^2 \\equiv a \\pmod{p}$ 有解，称 $a$ 为模 $p$ 的**二次剩余**，否则称为二次非剩余。',
            '**勒让德符号** $\\left(\\frac{a}{p}\\right)$ 取值 $1$（剩余）、$-1$（非剩余）或 $0$（$p \\mid a$），并由欧拉判别法 $\\left(\\frac{a}{p}\\right) \\equiv a^{(p-1)/2} \\pmod{p}$ 计算。'
          ],
          intuition: [
            '模素数下，平方映射把非零元素成对合并：约一半元素是二次剩余。哪些是剩余，由二次互反律决定。',
            '二次互反律是数论中的“黄金定理”：它把 $\\left(\\frac{p}{q}\\right)$ 与 $\\left(\\frac{q}{p}\\right)$ 联系起来，使判定二次剩余变成递归的算法。'
          ],
          formulas: [
            {
              tex: '\\left(\\frac{a}{p}\\right) = a^{(p-1)/2} \\bmod p',
              caption: '欧拉判别法。'
            },
            {
              tex: '\\left(\\frac{p}{q}\\right)\\left(\\frac{q}{p}\\right) = (-1)^{\\frac{p-1}{2}\\frac{q-1}{2}}',
              caption: '二次互反律。'
            }
          ],
          example: [
            '模 7 的二次剩余为 $1, 2, 4$（$1^2=1$，$2^2=4$，$3^2=2$），非剩余为 $3, 5, 6$。'
          ],
          related: ['congruences', 'zeta-l-functions', 'discrete/public-key-cryptography']
        },
        {
          id: 'pythagorean-triples',
          name: '勾股数',
          brief: '分类整数直角三角形的边长',
          keywords: ['勾股数', '勾股定理', '参数化', '本原'],
          definition: [
            '满足 $a^2 + b^2 = c^2$ 的正整数三元组 $(a, b, c)$ 称为**勾股数**。若 $\\gcd(a, b, c) = 1$，称为**本原勾股数**。',
            '本原勾股数可完全参数化：$a = m^2 - n^2$，$b = 2mn$，$c = m^2 + n^2$，其中 $m > n > 0$，$\\gcd(m, n) = 1$，且 $m, n$ 一奇一偶。'
          ],
          intuition: [
            '勾股数是“整数点落在圆上”的问题：$a^2 + b^2 = c^2$ 等价于 $(a/c)^2 + (b/c)^2 = 1$，即单位圆上的有理点。',
            '参数化公式来自对单位圆的几何构造：过点 $(-1, 0)$ 的直线与圆相交，另一点坐标可以用斜率的有理函数表示。这是代数几何中“有理点”思想的最早例子。'
          ],
          formulas: [
            {
              tex: 'a = m^2 - n^2,\\quad b = 2mn,\\quad c = m^2 + n^2',
              caption: '本原勾股数的欧几里得参数化。'
            },
            {
              tex: 'a^2 + b^2 = c^2',
              caption: '勾股定理。'
            }
          ],
          example: [
            '取 $m = 2, n = 1$ 得 $3, 4, 5$；$m = 3, n = 2$ 得 $5, 12, 13$；$m = 4, n = 1$ 得 $15, 8, 17$。'
          ],
          related: ['rational-points', 'congruences', 'elliptic-curves']
        }
      ]
    },
    {
      id: 'analytic-number-theory',
      name: '解析数论',
      en: 'ANALYTIC NUMBER THEORY',
      brief: '用分析工具研究整数与素数',
      color: '#e8a45c',
      angle: 90,
      topics: [
        {
          id: 'prime-counting',
          name: '素数计数',
          brief: '研究给定范围内素数的数量',
          keywords: ['素数计数', 'π(x)', '切比雪夫界', '素数分布'],
          definition: [
            '素数计数函数 $\\pi(x)$ 表示不超过 $x$ 的素数个数。例如 $\\pi(10) = 4$（$2, 3, 5, 7$）。',
            '研究 $\\pi(x)$ 的增长规律是解析数论的核心问题。切比雪夫给出了初步的上下界：存在常数 $c_1, c_2 > 0$ 使 $c_1 x/\\log x < \\pi(x) < c_2 x/\\log x$。'
          ],
          intuition: [
            '素数越往后越稀疏，但稀疏的速度很慢：大约是 $x/\\log x$，而不是常数或 $x^2$ 之类的量级。',
            '素数分布并非完全随机：它有统计规律（素数定理），但也有局部波动（素数间隙、算术级数中的分布）。'
          ],
          formulas: [
            {
              tex: '\\pi(x) = \\#\\{p \\le x : p \\text{ 是素数}\\}',
              caption: '素数计数函数的定义。'
            },
            {
              tex: '\\pi(x) \\sim \\frac{x}{\\log x}',
              caption: '素数定理（PNT）。'
            },
            {
              tex: '\\lim_{x \\to \\infty} \\frac{\\pi(x)}{x/\\log x} = 1',
              caption: '素数定理的极限形式。'
            }
          ],
          example: [
            '$\\pi(10) = 4$，$\\pi(100) = 25$，$\\pi(1000) = 168$。$1000/\\log 1000 \\approx 145$，接近实际值。'
          ],
          related: ['prime-number-theorem', 'zeta-l-functions', 'sieve-methods']
        },
        {
          id: 'prime-number-theorem',
          name: '素数定理',
          brief: '素数计数渐近于 x/log x',
          keywords: ['素数定理', 'PNT', '渐近', '素数分布'],
          definition: [
            '**素数定理**：$\\pi(x) \\sim x/\\log x$（当 $x \\to \\infty$）。等价地，第 $n$ 个素数 $p_n \\sim n \\log n$。',
            '该定理由 Hadamard 与 de la Vallée Poussin 于 1896 年独立证明，使用复分析工具（Riemann ζ 函数无零点区域）。'
          ],
          intuition: [
            '素数定理给出素数分布的“宏观规律”：随机选一个大小为 $x$ 的数，它是素数的概率约为 $1/\\log x$。',
            '证明的关键在于把 $\\pi(x)$ 与 ζ 函数的对数导数联系起来，并证明 ζ 函数在 $\\mathrm{Re}(s) = 1$ 上没有零点。黎曼猜想的更强形式会给出更精确的误差项。'
          ],
          formulas: [
            {
              tex: '\\pi(x) \\sim \\frac{x}{\\log x}',
              caption: '素数定理。'
            },
            {
              tex: '\\psi(x) = \\sum_{p^k \\le x} \\log p \\sim x',
              caption: '切比雪夫 psi 函数的等价形式，证明中更常用。'
            }
          ],
          example: [
            '$x = 10^6$ 时 $\\pi(x) = 78498$，而 $x/\\log x \\approx 72382$，比值约 $1.084$，随 $x$ 增大趋近 1。'
          ],
          related: ['prime-counting', 'zeta-l-functions', 'sieve-methods']
        },
        {
          id: 'exponential-sums',
          name: '指数和',
          brief: '用振荡和研究整数的分布',
          keywords: ['指数和', 'Weyl 和', '圆法', '振荡'],
          definition: [
            '形如 $\\sum_{n=1}^{N} e^{2\\pi i f(n)}$ 的和称为**指数和**。当 $f(n)$ 变化快时，各项相位互相抵消，和很小；当 $f(n)$ 变化慢或接近整数时，和可能很大。',
            'Hardy–Littlewood 圆法用指数和表示方程解数，把数论问题转化为对单位圆上积分的主要项与误差项估计。'
          ],
          intuition: [
            '指数和是“波”的叠加：相位对齐的地方产生大贡献，相位散开的地方相互抵消。素数分布、Waring 问题、哥德巴赫猜想的证明都依赖这种振荡估计。',
            'Weyl 不等式给出了多项式相位指数和的非平凡上界，是圆法与解析数论的核心工具。'
          ],
          formulas: [
            {
              tex: 'S(f, N) = \\sum_{n=1}^{N} e^{2\\pi i f(n)}',
              caption: '指数和。'
            },
            {
              tex: '\\left| \\sum_{n=1}^{N} e^{2\\pi i \\alpha n} \\right| \\le \\frac{2}{|1 - e^{2\\pi i \\alpha}|}',
              caption: '线性相位的几何级数估计。'
            }
          ],
          example: [
            '当 $\\alpha$ 是无理数时，$\\sum_{n=1}^{N} e^{2\\pi i \\alpha n}$ 部分和有界，说明相位均匀分布；当 $\\alpha$ 接近有理数时，可能出现大的“峰”。'
          ],
          related: ['zeta-l-functions', 'sieve-methods', 'prime-counting']
        },
        {
          id: 'zeta-l-functions',
          name: 'ζ 与 L 函数',
          brief: '把算术信息编码进解析函数',
          keywords: ['ζ 函数', 'L 函数', '欧拉乘积', '黎曼猜想'],
          definition: [
            '黎曼 ζ 函数定义为 $\\zeta(s) = \\sum_{n=1}^{\\infty} n^{-s}$（$\\mathrm{Re}(s) > 1$），并通过解析延拓延伸到除 $s = 1$ 外的整个复平面。',
            '欧拉乘积 $\\zeta(s) = \\prod_{p} (1 - p^{-s})^{-1}$ 把素数信息编码进 ζ 函数。狄利克雷 L 函数 $L(s, \\chi) = \\sum \\chi(n) n^{-s}$ 是带特征的类似物。'
          ],
          intuition: [
            'ζ 函数是数论与复分析之间的桥梁：素数的乘积结构变成解析函数的乘积，从而可以用复分析研究素数。',
            '黎曼猜想断言 ζ 的非平凡零点都在临界线 $\\mathrm{Re}(s) = 1/2$ 上；它等价于素数定理的极强误差估计，是千禧年大奖难题之一。'
          ],
          formulas: [
            {
              tex: '\\zeta(s) = \\sum_{n=1}^{\\infty} \\frac{1}{n^s} = \\prod_{p} \\frac{1}{1 - p^{-s}}',
              caption: 'ζ 函数的级数与欧拉乘积。'
            },
            {
              tex: '\\zeta(s) = 2^s \\pi^{s-1} \\sin\\left(\\frac{\\pi s}{2}\\right) \\Gamma(1-s) \\zeta(1-s)',
              caption: '函数方程，联系 $s$ 与 $1-s$ 的值。'
            },
            {
              tex: '\\zeta(2) = \\frac{\\pi^2}{6}',
              caption: 'Basel 问题：$\\sum 1/n^2 = \\pi^2/6$。'
            }
          ],
          example: [
            '$\\zeta(2) = \\pi^2/6$，$\\zeta(-1) = -1/12$（解析延拓），后者在物理正则化中出现的“$1+2+3+\\cdots = -1/12$”正是这个值。'
          ],
          related: ['prime-number-theorem', 'modular-forms', 'arithmetic-functions']
        },
        {
          id: 'sieve-methods',
          name: '筛法',
          brief: '逐步排除不满足条件的整数',
          keywords: ['筛法', '埃拉托斯特尼筛', 'Selberg 筛', '素数'],
          definition: [
            '**筛法**从整数集合出发，逐步划掉某些素数的倍数，以留下满足条件的数。埃拉托斯特尼筛是基本算法。',
            '现代筛法（Selberg 筛、大筛）通过加权估计剩余集合的大小，是研究素数对、哥德巴赫猜想与孪生素数的重要工具。'
          ],
          intuition: [
            '筛法像“过滤网”：先用 2 的倍数过滤，再用 3 的倍数过滤……剩下的就是素数。现代筛法把这种思想定量化，估计过滤后还剩多少。',
            '陈景润的“1+2”定理、张益唐的孪生素数界都依赖精细的筛法改进。'
          ],
          formulas: [
            {
              tex: 'S(\\mathcal{A}, \\mathcal{P}, z) = \\#\\{a \\in \\mathcal{A} : p \\nmid a\\ \\forall p \\in \\mathcal{P},\\ p < z\\}',
              caption: '筛函数：保留不被小于 $z$ 的素数整除的元素。'
            },
            {
              tex: '\\pi(x) \\le \\sum_{d \\mid P(z)} \\mu(d) \\left\\lfloor \\frac{x}{d} \\right\\rfloor + 2^{\\pi(z)}',
              caption: '埃氏筛的容斥计数形式。'
            }
          ],
          example: [
            '埃拉托斯特尼筛列出 30 以内的素数：划掉 2、3、5 的倍数后剩下 $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$。'
          ],
          related: ['prime-counting', 'prime-number-theorem', 'exponential-sums']
        }
      ]
    },
    {
      id: 'algebraic-number-theory',
      name: '代数数论',
      en: 'ALGEBRAIC NUMBER THEORY',
      brief: '研究有理数域的有限扩张',
      color: '#f2c27e',
      angle: 45,
      topics: [
        {
          id: 'number-fields',
          name: '代数数与数域',
          brief: '研究有理数域的有限扩张',
          keywords: ['代数数', '数域', '极小多项式', '次数'],
          definition: [
            '**代数数**是某个非零整系数多项式的根。$\\mathbb{Q}$ 的有限扩张称为**数域**；若 $\\alpha$ 是数域元素，其在 $\\mathbb{Q}$ 上的极小多项式的次数称为 $\\alpha$ 的次数。',
            '数域 $K$ 可以写成 $K = \\mathbb{Q}(\\alpha)$（本原元素定理）：每个数域都由单个元素生成。'
          ],
          intuition: [
            '$\\sqrt2$ 是代数数（$x^2 - 2$ 的根），$\\sqrt[3]{2}$ 也是；$\\pi$ 与 $e$ 不是代数数，称为超越数。',
            '数域是代数数论的舞台：研究其整数环、理想、类群与单位群，从而理解整数的“代数版本”。'
          ],
          formulas: [
            {
              tex: '\\alpha \\text{ 代数} \\iff \\exists\\, f \\in \\mathbb{Z}[x] \\setminus \\{0\\}:\\ f(\\alpha) = 0',
              caption: '代数数的定义。'
            },
            {
              tex: '[K : \\mathbb{Q}] < \\infty',
              caption: '数域是 $\\mathbb{Q}$ 的有限扩张。'
            }
          ],
          example: [
            '$K = \\mathbb{Q}(\\sqrt2, \\sqrt3) = \\mathbb{Q}(\\sqrt2 + \\sqrt3)$ 是次数为 4 的数域，极小多项式为 $x^4 - 10x^2 + 1$。'
          ],
          related: ['algebraic-integers', 'ideal-factorization', 'galois-group']
        },
        {
          id: 'algebraic-integers',
          name: '代数整数',
          brief: '满足首一整系数多项式的数',
          keywords: ['代数整数', '整数环', '整基', 'Dedekind 整环'],
          definition: [
            '代数数 $\\alpha$ 称为**代数整数**，如果它满足某个首一（最高次系数为 1）整系数多项式。数域 $K$ 中所有代数整数构成**整数环** $\\mathcal{O}_K$。',
            '$\\mathcal{O}_K$ 是 Dedekind 整环：每个非零理想可唯一分解为素理想的乘积，即使元素分解不唯一。'
          ],
          intuition: [
            '代数整数是普通整数在数域中的推广：$\\sqrt2$ 是 $\\mathbb{Z}[\\sqrt2]$ 的整数，$\\frac{1+\\sqrt5}{2}$ 也是代数整数（满足 $x^2 - x - 1$）。',
            '整数环的理想唯一分解修复了元素分解的失效：例如在 $\\mathbb{Z}[\\sqrt{-5}]$ 中，$6 = 2 \\cdot 3 = (1+\\sqrt{-5})(1-\\sqrt{-5})$，元素分解不唯一，但理想分解唯一。'
          ],
          formulas: [
            {
              tex: '\\mathcal{O}_K = \\{\\alpha \\in K : \\alpha \\text{ 是首一整系数多项式的根}\\}',
              caption: '整数环的定义。'
            },
            {
              tex: '\\mathcal{O}_{\\mathbb{Q}(\\sqrt d)} = \\begin{cases} \\mathbb{Z}[\\sqrt d], & d \\equiv 2, 3 \\pmod 4 \\\\ \\mathbb{Z}\\left[\\frac{1+\\sqrt d}{2}\\right], & d \\equiv 1 \\pmod 4 \\end{cases}',
              caption: '二次域的整数环。'
            }
          ],
          example: [
            '$\\mathcal{O}_{\\mathbb{Q}(\\sqrt{-1})} = \\mathbb{Z}[i]$（高斯整数），其元素为 $a + bi$，$a, b \\in \\mathbb{Z}$。'
          ],
          related: ['number-fields', 'ideal-factorization', 'class-groups']
        },
        {
          id: 'ideal-factorization',
          name: '理想分解',
          brief: '用理想恢复某种唯一分解',
          keywords: ['理想分解', 'Dedekind 整环', '素理想', '唯一分解'],
          definition: [
            '在数域 $K$ 的整数环 $\\mathcal{O}_K$ 中，每个非零理想 $I$ 都可以唯一地写成素理想的乘积：$I = \\mathfrak{p}_1^{e_1} \\cdots \\mathfrak{p}_g^{e_g}$。',
            '有理素数 $p$ 在 $\\mathcal{O}_K$ 中的分解 $p\\mathcal{O}_K = \\mathfrak{p}_1^{e_1} \\cdots \\mathfrak{p}_g^{e_g}$ 遵循 $\\sum e_i f_i = [K : \\mathbb{Q}]$，其中 $f_i$ 是剩余域次数。'
          ],
          intuition: [
            '理想分解是“戴德金整环版的算术基本定理”。即使元素分解不唯一，理想分解仍然唯一，因此可以用理想来研究数域的算术。',
            '分解方式是数域的“指纹”：不同的数域对同一个素数可能分裂、保持素或分歧（$e_i > 1$）。'
          ],
          formulas: [
            {
              tex: 'I = \\mathfrak{p}_1^{e_1} \\cdots \\mathfrak{p}_g^{e_g}',
              caption: '理想的唯一素理想分解。'
            },
            {
              tex: 'p\\mathcal{O}_K = \\mathfrak{p}_1^{e_1} \\cdots \\mathfrak{p}_g^{e_g},\\quad \\sum_{i=1}^{g} e_i f_i = [K : \\mathbb{Q}]',
              caption: '有理素数的分解公式。'
            }
          ],
          example: [
            '在 $\\mathbb{Z}[i]$ 中，$5 = (2+i)(2-i)$ 分裂；$3$ 保持素；$2 = (1+i)^2 \\cdot (-i)$ 分歧。'
          ],
          related: ['algebraic-integers', 'class-groups', 'local-fields']
        },
        {
          id: 'local-fields',
          name: '局部域',
          brief: '在选定素数附近研究算术',
          keywords: ['局部域', 'p 进数', '赋值', '完备化'],
          definition: [
            '**局部域**是在某个素数（或素理想）附近完备化的域，典型例子是 $p$ 进数域 $\\mathbb{Q}_p$。$\\mathbb{Q}_p$ 由 $\\mathbb{Q}$ 关于 $p$ 进绝对值完备化得到。',
            '局部域有离散赋值 $v_p$，其整数环为 $\\mathbb{Z}_p$（$p$ 进整数），剩余域为 $\\mathbb{F}_p$。'
          ],
          intuition: [
            '$p$ 进数与实数相反：越能被 $p$ 的高次幂整除的数越“小”。$p$ 进距离下，$p^n$ 趋于 0。',
            '局部-整体原则：许多数论问题可以先在 $\\mathbb{Q}_p$（每个素数）与 $\\mathbb{R}$（无穷远）处解决，再拼成整体结论。这是现代数论的基本策略。'
          ],
          formulas: [
            {
              tex: '\\mathbb{Q}_p = \\left\\{ \\sum_{n=-N}^{\\infty} a_n p^n : a_n \\in \\{0, \\dots, p-1\\} \\right\\}',
              caption: '$p$ 进数的级数表示。'
            },
            {
              tex: '|x|_p = p^{-v_p(x)}',
              caption: '$p$ 进绝对值：越被 $p$ 整除越小。'
            },
            {
              tex: '\\mathbb{Z}_p = \\{x \\in \\mathbb{Q}_p : |x|_p \\le 1\\}',
              caption: '$p$ 进整数环。'
            }
          ],
          example: [
            '在 $\\mathbb{Q}_5$ 中，$1 + 5 + 5^2 + \\cdots = \\frac{1}{1-5} = -\\frac14$，说明 $p$ 进级数可以收敛到有理数。'
          ],
          related: ['ideal-factorization', 'local-global-principle', 'number-fields']
        },
        {
          id: 'class-groups',
          name: '类群',
          brief: '度量理想偏离主理想的程度',
          keywords: ['类群', '类数', '分式理想', '主理想'],
          definition: [
            '数域 $K$ 的**类群** $\\mathrm{Cl}(K)$ 是分式理想群模去主理想子群的商群。其阶称为**类数** $h_K$。',
            '$h_K = 1$ 当且仅当 $\\mathcal{O}_K$ 是主理想整环，即元素唯一分解成立。类群有限（Minkowski 界）。'
          ],
          intuition: [
            '类群衡量“理想分解离元素分解有多远”：类数越大，非主理想越多，算术越复杂。',
            '类域论把类群与阿贝尔扩张联系起来：$K$ 的最大阿贝尔无分歧扩张的伽罗瓦群同构于类群。这是代数数论的核心定理之一。'
          ],
          formulas: [
            {
              tex: '\\mathrm{Cl}(K) = I_K / P_K',
              caption: '类群 = 分式理想群 / 主理想群。'
            },
            {
              tex: 'h_K = |\\mathrm{Cl}(K)|',
              caption: '类数。'
            },
            {
              tex: 'h_K = 1 \\iff \\mathcal{O}_K \\text{ 是主理想整环}',
              caption: '类数为 1 与唯一分解的等价性。'
            }
          ],
          example: [
            '$K = \\mathbb{Q}(\\sqrt{-5})$ 的类数为 2，$\\mathcal{O}_K$ 不是主理想整环；类群由非主理想 $\\mathfrak{p}_2 = (2, 1+\\sqrt{-5})$ 生成。'
          ],
          related: ['ideal-factorization', 'algebraic-integers', 'number-fields']
        }
      ]
    },
    {
      id: 'arithmetic-geometry',
      name: '算术几何',
      en: 'ARITHMETIC GEOMETRY',
      brief: '用几何研究方程的算术性质',
      color: '#e8b04e',
      angle: 0,
      topics: [
        {
          id: 'points-over-finite-fields',
          name: '有限域上的点',
          brief: '统计方程在有限域中的解',
          keywords: ['有限域', '点计数', 'Frobenius', 'Weil 猜想'],
          definition: [
            '给定整系数多项式方程组，可以模素数 $p$ 化简为有限域 $\\mathbb{F}_p$ 上的方程组，研究其解的个数 $N_p$。',
            'Weil 猜想（Deligne 证明）描述代数簇在有限域上的点数的精确公式，用 Frobenius 自同态的特征值与 ζ 函数表达。'
          ],
          intuition: [
            '模不同素数后的解数构成一个数列，这个数列编码了代数簇的算术信息。例如椭圆曲线 $y^2 = x^3 - x$ 的 $N_p$ 分布与其 L 函数相关。',
            'Weil 猜想是算术几何的里程碑：它把拓扑（Betti 数）与算术（点数）联系起来，Deligne 因此获得菲尔兹奖。'
          ],
          formulas: [
            {
              tex: 'N_p = \\#\\{(x, y) \\in \\mathbb{F}_p^2 : f(x, y) = 0\\}',
              caption: '有限域上的点数。'
            },
            {
              tex: 'Z(X, T) = \\exp\\left( \\sum_{n=1}^{\\infty} \\frac{N_{p^n} T^n}{n} \\right)',
              caption: '代数簇的 ζ 函数。'
            },
            {
              tex: 'N_p = p + 1 - a_p,\\quad |a_p| \\le 2\\sqrt p',
              caption: '椭圆曲线点数与 Frobenius 迹（Hasse 界）。'
            }
          ],
          example: [
            '椭圆曲线 $y^2 = x^3 - x$ 在 $\\mathbb{F}_5$ 上的点为 $(0,0), (1,0), (4,0), (2,1), (2,4), (3,2), (3,3)$ 及无穷远点，$N_5 = 8$，$a_5 = 5 + 1 - 8 = -2$。'
          ],
          related: ['elliptic-curves', 'abelian-varieties', 'zeta-l-functions']
        },
        {
          id: 'elliptic-curves',
          name: '椭圆曲线',
          brief: '带有群结构的特定代数曲线',
          keywords: ['椭圆曲线', '群律', 'Weierstrass 方程', 'Mordell-Weil'],
          definition: [
            '椭圆曲线是亏格为 1 且带有一个有理点的光滑射影代数曲线，可写成短 Weierstrass 方程 $y^2 = x^3 + ax + b$（判别式 $\\Delta \\ne 0$）。',
            '其上有自然的**群律**：三个共线点的和为无穷远点 $\\mathcal{O}$（单位元），使椭圆曲线成为阿贝尔簇。'
          ],
          intuition: [
            '椭圆曲线不是椭圆：它是“三次曲线”，但与椭圆积分、椭圆函数密切相关。群律让曲线上的点可以做加法，从而把几何问题变成群论问题。',
            '椭圆曲线是数论与现代密码学的核心：Mordell–Weil 定理说有理点群有限生成；Birch–Swinnerton-Dyer 猜想联系秩与 L 函数。密码学中利用其群结构构造公钥系统。'
          ],
          formulas: [
            {
              tex: 'E: y^2 = x^3 + ax + b,\\quad \\Delta = -16(4a^3 + 27b^2) \\ne 0',
              caption: '椭圆曲线的短 Weierstrass 方程。'
            },
            {
              tex: 'P + Q + R = \\mathcal{O} \\iff P, Q, R \\text{ 共线}',
              caption: '群律的几何定义。'
            },
            {
              tex: 'E(\\mathbb{Q}) \\cong \\mathbb{Z}^r \\oplus E(\\mathbb{Q})_{\\mathrm{tors}}',
              caption: 'Mordell–Weil 定理：有理点群有限生成。'
            }
          ],
          example: [
            '$E: y^2 = x^3 - x$ 上，$P = (1, 0)$，$2P = \\mathcal{O}$（因为 $P$ 处切线垂直）。点 $(0,0)$ 也是二阶点。'
          ],
          related: ['points-over-finite-fields', 'abelian-varieties', 'modularity']
        },
        {
          id: 'algebraic-varieties-arithmetic',
          name: '代数簇',
          brief: '推广代数曲线的高维几何对象',
          keywords: ['代数簇', '仿射簇', '射影簇', '算术簇'],
          definition: [
            '**仿射代数簇**是 $\\mathbb{A}^n$ 中一组多项式方程的公共零点集；**射影代数簇**是射影空间中的类似对象。',
            '算术几何研究定义在数域或整数环上的代数簇，关注其有理点、整点与模 $p$ 约化。'
          ],
          intuition: [
            '代数簇是“多项式方程画出的几何图形”：$x^2 + y^2 = 1$ 是圆，$y^2 = x^3 - x$ 是椭圆曲线，$xy = 1$ 是双曲线。',
            '算术几何关心“这些图形上有多少有理点”。Fermat 大定理、Faltings 定理、Mordell 猜想都是这个方向的核心结果。'
          ],
          formulas: [
            {
              tex: 'V(f_1, \\dots, f_m) = \\{x \\in \\mathbb{A}^n : f_1(x) = \\cdots = f_m(x) = 0\\}',
              caption: '仿射代数簇。'
            },
            {
              tex: 'V(I) = \\{\\mathfrak{p} \\in \\mathrm{Spec}\\,R : I \\subseteq \\mathfrak{p}\\}',
              caption: '用素谱描述的代数簇。'
            }
          ],
          example: [
            '$x^2 + y^2 = 1$ 是有理点丰富的圆锥曲线，可通过有理参数化描述全部有理点；$x^n + y^n = 1$（$n \\ge 3$）只有平凡有理点（Fermat 大定理）。'
          ],
          related: ['elliptic-curves', 'abelian-varieties', 'schemes']
        },
        {
          id: 'abelian-varieties',
          name: '阿贝尔簇',
          brief: '推广椭圆曲线的高维群簇',
          keywords: ['阿贝尔簇', '群簇', '极化', 'Tate 模'],
          definition: [
            '**阿贝尔簇**是完备的代数群（射影簇且带有群结构），是椭圆曲线的高维推广。$g$ 维阿贝尔簇有 $g$ 个“方向”的周期。',
            '阿贝尔簇上的点有群结构，其 Tate 模 $T_\\ell A$ 是 $\\ell$ 进表示，编码算术信息。'
          ],
          intuition: [
            '椭圆曲线是 1 维阿贝尔簇；高维阿贝尔簇来自代数曲线的 Jacobian，把曲线的几何转化为群论。',
            '阿贝尔簇是有理点与模形式研究的核心对象：模曲线、Shimura 簇都是阿贝尔簇的模空间。'
          ],
          formulas: [
            {
              tex: 'A(\\mathbb{C}) \\cong \\mathbb{C}^g / \\Lambda',
              caption: '复阿贝尔簇是复环面（$\\Lambda$ 为秩 $2g$ 的格）。'
            },
            {
              tex: 'T_\\ell A = \\varprojlim_n A[\\ell^n]',
              caption: 'Tate 模。'
            }
          ],
          example: [
            '亏格 $g$ 曲线的 Jacobian $J(C)$ 是 $g$ 维阿贝尔簇，其上的群律来自曲线的除子类群。'
          ],
          related: ['elliptic-curves', 'points-over-finite-fields', 'algebraic-varieties-arithmetic']
        }
      ]
    }
  ]
};