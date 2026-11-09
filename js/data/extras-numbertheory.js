/* 数论学科 · 内容深化 */
window.ATLAS = window.ATLAS || {};
window.ATLAS.extras = window.ATLAS.extras || {};

window.ATLAS.extras['numbertheory/divisibility-primes'] = {
  insight: '算术基本定理是数论的基石：每个整数都有唯一的素数分解。唯一性使“因子”成为乘法结构的原子，也让许多计数函数只需在素数幂上定义。',
  examples: [
    '$360=2^3\\cdot3^2\\cdot5$，因数个数 $\\tau(360)=(3+1)(2+1)(1+1)=24$。',
    '欧几里得证明素数无穷：若只有有限个 $p_1,\\dots,p_n$，则 $p_1\\cdots p_n+1$ 的任一素因子都不在列表中。'
  ]
};

window.ATLAS.extras['numbertheory/gcd'] = {
  insight: '欧几里得算法基于 $\\gcd(a,b)=\\gcd(b,a\\bmod b)$，复杂度是对数级。裴蜀等式 $ax+by=\\gcd(a,b)$ 给出线性表示，是模逆与同余方程的基础。',
  examples: [
    '$\\gcd(252,105)=21$：$252=2\\cdot105+42$，$105=2\\cdot42+21$，回代得 $21=5\\cdot105-2\\cdot252$。',
    '$\\gcd(a,b)\\cdot\\operatorname{lcm}(a,b)=|ab|$，因此 $\\operatorname{lcm}(12,18)=36$。'
  ]
};

window.ATLAS.extras['numbertheory/congruences'] = {
  insight: '同余把整数按余数分类，模运算保持加法与乘法；中国剩余定理把互素模的条件解耦，是算法与密码学的基本工具。',
  examples: [
    '解 $x\\equiv2\\pmod3$、$x\\equiv3\\pmod5$：$x=8$ 是模 $15$ 的唯一解。',
    '费马小定理：$2^{10}\\equiv1\\pmod{11}$，因为 $2^{10}=1024=93\\cdot11+1$。'
  ]
};

window.ATLAS.extras['numbertheory/arithmetic-functions'] = {
  insight: '算术函数描述整数的乘法结构；积性函数由其在素数幂上的值完全决定，狄利克雷卷积把这些函数组织成一个交换环。',
  examples: [
    '$\\varphi(12)=4$，与 $12$ 互素的正整数为 $1,5,7,11$。',
    '莫比乌斯反演：若 $g(n)=\\sum_{d\\mid n}f(d)$，则 $f(n)=\\sum_{d\\mid n}\\mu(d)g(n/d)$。'
  ]
};

window.ATLAS.extras['numbertheory/quadratic-residues'] = {
  insight: '二次剩余判定由欧拉判别法给出；二次互反律把 $\\left(\\frac pq\\right)$ 与 $\\left(\\frac qp\\right)$ 联系起来，使判定变成递归算法，被称为数论的“黄金定理”。',
  examples: [
    '模 $7$ 的二次剩余为 $1,2,4$：$1^2=1$，$2^2=4$，$3^2=2$。',
    '二次互反律：$\\left(\\frac{3}{7}\\right)\\left(\\frac{7}{3}\\right)=(-1)^{3}= -1$，而 $\\left(\\frac{7}{3}\\right)=\\left(\\frac{1}{3}\\right)=1$，故 $\\left(\\frac{3}{7}\\right)=-1$。'
  ]
};

window.ATLAS.extras['numbertheory/pythagorean-triples'] = {
  insight: '勾股数对应单位圆上的有理点；欧几里得参数化 $a=m^2-n^2$、$b=2mn$、$c=m^2+n^2$ 给出全部本原解，这是代数几何中“有理点参数化”的最早例子。',
  examples: [
    '取 $m=2,n=1$ 得 $3,4,5$；取 $m=3,n=2$ 得 $5,12,13$。',
    '单位圆上的有理点可用 $t\\in\\mathbb{Q}$ 参数化：$\\left(\\frac{1-t^2}{1+t^2},\\frac{2t}{1+t^2}\\right)$。'
  ]
};

window.ATLAS.extras['numbertheory/prime-counting'] = {
  insight: '$\\pi(x)$ 的宏观增长由素数定理描述，但局部波动很大。切比雪夫界给出初等的上下界，为素数定理的证明铺路。',
  examples: [
    '$\\pi(100)=25$，$\\pi(1000)=168$。',
    '$\\pi(10^6)=78498$，而 $10^6/\\log10^6\\approx72382$，比值约 $1.084$。'
  ]
};

window.ATLAS.extras['numbertheory/prime-number-theorem'] = {
  insight: '素数定理等价于 $\\psi(x)\\sim x$；证明的关键是证明 $\\zeta(s)$ 在 $\\operatorname{Re}s=1$ 上无零点。黎曼猜想会给出更精确的误差项。',
  examples: [
    '第 $n$ 个素数满足 $p_n\\sim n\\log n$。',
    '素数定理的等价形式：$\\lim_{x\\to\\infty}\\frac{\\pi(x)\\log x}{x}=1$。'
  ]
};

window.ATLAS.extras['numbertheory/exponential-sums'] = {
  insight: '指数和通过相位抵消估计整数的分布；圆法把方程解数表示为积分，主项来自相位对齐，误差项由指数和估计控制。',
  examples: [
    '线性相位和 $\\left|\\sum_{n=1}^N e^{2\\pi i\\alpha n}\\right|\\le\\frac{1}{|\\sin\\pi\\alpha|}$。',
    'Waring 问题用圆法证明每个足够大的整数都是有限个 $k$ 次幂之和。'
  ]
};

window.ATLAS.extras['numbertheory/zeta-l-functions'] = {
  insight: 'ζ 函数的欧拉乘积把素数信息编码进复分析；解析延拓与函数方程使其成为数论的核心对象，黎曼猜想描述其零点分布。',
  examples: [
    '欧拉乘积：$\\zeta(s)=\\prod_p(1-p^{-s})^{-1}$。',
    '$\\zeta(2)=\\pi^2/6$，$\\zeta(4)=\\pi^4/90$。'
  ]
};

window.ATLAS.extras['numbertheory/sieve-methods'] = {
  insight: '筛法逐步排除不满足条件的整数；现代筛法通过加权估计剩余集合大小，用于孪生素数与哥德巴赫猜想。',
  examples: [
    '埃拉托斯特尼筛列出 $30$ 以内素数：$2,3,5,7,11,13,17,19,23,29$。',
    'Selberg 筛给出素数对的非平凡上界，是陈景润定理的工具之一。'
  ]
};

window.ATLAS.extras['numbertheory/number-fields'] = {
  insight: '数域是 $\\mathbb{Q}$ 的有限扩张，本原元素定理保证它由单个元素生成。数域的次数、判别式与伽罗瓦群是研究其算术的基本不变量。',
  examples: [
    '$\\mathbb{Q}(\\sqrt2)=\\{a+b\\sqrt2:a,b\\in\\mathbb{Q}\\}$，次数为 $2$。',
    '$\\mathbb{Q}(\\sqrt2,\\sqrt3)=\\mathbb{Q}(\\sqrt2+\\sqrt3)$，次数为 $4$。'
  ]
};

window.ATLAS.extras['numbertheory/algebraic-integers'] = {
  insight: '代数整数是首一整系数多项式的根；整数环是 Dedekind 整环，理想的唯一分解弥补了元素分解可能失败的问题。',
  examples: [
    '$\\sqrt2$ 是代数整数（$x^2-2$ 的根）；$1/2$ 不是。',
    '$\\mathcal{O}_{\\mathbb{Q}(i)}=\\mathbb{Z}[i]$ 是高斯整数环。'
  ]
};

window.ATLAS.extras['numbertheory/ideal-factorization'] = {
  insight: '在整数环中，非零理想可唯一分解为素理想的乘积，即使元素分解不唯一。有理素数的分解遵循 $\\sum e_if_i=[K:\\mathbb{Q}]$。',
  examples: [
    '$\\mathbb{Z}[i]$ 中 $5=(2+i)(2-i)$ 分裂；$3$ 保持素；$2$ 分歧。',
    '$\\mathbb{Z}[\\sqrt{-5}]$ 中 $6=2\\cdot3=(1+\\sqrt{-5})(1-\\sqrt{-5})$，元素分解不唯一，但理想分解唯一。'
  ]
};

window.ATLAS.extras['numbertheory/local-fields'] = {
  insight: '$p$ 进域在素数 $p$ 附近完备化，越能被 $p$ 整除的数越小。局部-整体原则把整体问题化为逐个素数处的局部问题。',
  examples: [
    '$\\mathbb{Q}_5$ 中 $1+5+5^2+\\cdots=\\frac{1}{1-5}=-\\frac14$。',
    '$\\mathbb{Z}_p=\\{x\\in\\mathbb{Q}_p:|x|_p\\le1\\}$ 是 $p$ 进整数环。'
  ]
};

window.ATLAS.extras['numbertheory/class-groups'] = {
  insight: '类群度量理想偏离主理想的程度；类数为 $1$ 当且仅当整数环是主理想整环，即元素唯一分解成立。类域论把类群与阿贝尔扩张联系起来。',
  examples: [
    '$\\mathbb{Q}(\\sqrt{-5})$ 的类数为 $2$，整数环不是主理想整环。',
    '$\\mathbb{Q}(\\sqrt{-1})$ 的类数为 $1$，$\\mathbb{Z}[i]$ 是主理想整环。'
  ]
};

window.ATLAS.extras['numbertheory/points-over-finite-fields'] = {
  insight: '有限域上的点数编码代数簇的算术信息；Weil 猜想用 Frobenius 自同态的特征值描述点数，是算术几何的里程碑。',
  examples: [
    '$y^2=x^3-x$ 在 $\\mathbb{F}_5$ 上有 $8$ 个点（含无穷远点），$a_5=5+1-8=-2$。',
    'Hasse 界：$|a_p|\\le2\\sqrt p$。'
  ]
};

window.ATLAS.extras['numbertheory/elliptic-curves'] = {
  insight: '椭圆曲线带有群律，有理点群有限生成（Mordell–Weil 定理）；模性定理把椭圆曲线与模形式对应，是费马大定理证明的关键。',
  examples: [
    '$y^2=x^3-x$ 上 $P=(1,0)$ 满足 $2P=\\mathcal{O}$（切线垂直）。',
    'BSD 猜想把椭圆曲线的秩与其 $L$ 函数在 $s=1$ 的零点阶数联系起来。'
  ]
};

window.ATLAS.extras['numbertheory/algebraic-varieties-arithmetic'] = {
  insight: '算术几何研究定义在数域上的代数簇及其有理点；Faltings 定理说明亏格 $\\ge2$ 的曲线只有有限多个有理点。',
  examples: [
    '$x^2+y^2=1$ 有无穷多有理点，可用有理参数化描述。',
    '$x^n+y^n=1$（$n\\ge3$）只有平凡有理点，这正是费马大定理。'
  ]
};

window.ATLAS.extras['numbertheory/abelian-varieties'] = {
  insight: '阿贝尔簇是完备群簇，是椭圆曲线的高维推广；曲线的 Jacobian 把曲线几何转化为群论，是算术几何的核心对象。',
  examples: [
    '复阿贝尔簇同构于复环面 $\\mathbb{C}^g/\\Lambda$，$\\Lambda$ 是秩 $2g$ 的格。',
    '亏格 $g$ 曲线的 Jacobian 是 $g$ 维阿贝尔簇。'
  ]
};

window.ATLAS.extras['numbertheory/algebraic-numbers'] = {
  insight: '代数数构成可数域 $\\overline{\\mathbb{Q}}$；几乎所有的复数都是超越数，但证明一个具体数是超越数非常困难。',
  examples: [
    '$\\sqrt2+\\sqrt3$ 是代数数，极小多项式为 $x^4-10x^2+1$。',
    '代数数可数，而复数不可数，因此“几乎所有”复数都是超越数。'
  ]
};

window.ATLAS.extras['numbertheory/transcendental-numbers'] = {
  insight: '超越数不能用有限次代数运算描述；Lindemann–Weierstrass 定理给出一般判据：线性无关代数数的指数在代数上无关。',
  examples: [
    '由 $e^{i\\pi}=-1$ 可推出 $\\pi$ 是超越数。',
    '$2^{\\sqrt2}$ 是超越数（Gelfond–Schneider 定理）。'
  ]
};

window.ATLAS.extras['numbertheory/pi-and-e'] = {
  insight: '$e$ 与 $\\pi$ 都是超越数；$\\pi$ 的超越性解决了古希腊“化圆为方”的尺规作图不可能问题。',
  examples: [
    '$e^{i\\pi}+1=0$ 把五个基本常数联系起来。',
    '高斯积分 $\\int_{-\\infty}^{\\infty}e^{-x^2}\\,dx=\\sqrt{\\pi}$ 连接 $e$ 与 $\\pi$。'
  ]
};

window.ATLAS.extras['numbertheory/heights'] = {
  insight: '高度衡量有理点的算术复杂度；Northcott 定理保证给定高度上界只有有限多个低复杂度代数数，是 Mordell–Weil 定理的工具。',
  examples: [
    '$H(3/4)=4$，$H(100/101)=101$。',
    'Mordell–Weil 定理的证明用高度函数证明有理点群有限生成。'
  ]
};

window.ATLAS.extras['numbertheory/diophantine-approximation'] = {
  insight: 'Dirichlet 定理保证每个无理数都有无穷多个 $1/q^2$ 精度的有理逼近；Roth 定理说明代数数不能被逼近得更快（指数超过 2 时只有有限解）。',
  examples: [
    '$355/113$ 是 $\\pi$ 的极佳逼近，误差约 $2.7\\times10^{-7}$。',
    'Roth 定理：对代数数 $\\alpha$，$|\\alpha-p/q|<1/q^{2+\\varepsilon}$ 只有有限多个解。'
  ]
};

window.ATLAS.extras['numbertheory/liouville-numbers'] = {
  insight: '刘维尔数被有理数逼近得极快，快过代数数允许的速度，因此必为超越数。刘维尔定理给出了代数数的逼近下界。',
  examples: [
    '刘维尔常数 $\\sum_{k\\ge1}10^{-k!}=0.110001000\\dots$ 是超越数。',
    '对 $n$ 次代数数 $\\alpha$，存在常数 $C$ 使 $|\\alpha-p/q|>C/q^n$。'
  ]
};

window.ATLAS.extras['numbertheory/modular-transformations'] = {
  insight: '模形式在上半平面满足模变换规律，模群的基本域把上半平面折叠成一张“曲面”。模形式因此携带丰富的算术信息。',
  examples: [
    '模群由 $S:\\tau\\mapsto-1/\\tau$ 与 $T:\\tau\\mapsto\\tau+1$ 生成。',
    '权重 $12$ 的模判别式 $\\Delta(\\tau)$ 满足 $\\Delta(-1/\\tau)=\\tau^{12}\\Delta(\\tau)$。'
  ]
};

window.ATLAS.extras['numbertheory/cusp-forms'] = {
  insight: '尖点形式在尖点处消失，具有良好的解析性质；权重 $2$ 的尖点形式对应椭圆曲线，是模性定理的核心。',
  examples: [
    '$\\Delta(\\tau)=q\\prod_{n\\ge1}(1-q^n)^{24}$ 是权重 $12$ 的尖点形式。',
    '椭圆曲线的模形式是权重 $2$ 的尖点形式。'
  ]
};

window.ATLAS.extras['numbertheory/hecke-operators'] = {
  insight: 'Hecke 算子两两交换，可同时对角化；Hecke 特征形式的 Fourier 系数就是特征值，蕴含乘法关系。',
  examples: [
    '$\\Delta$ 的系数 $\\tau(n)$ 满足 $\\tau(mn)=\\tau(m)\\tau(n)$（$\\gcd(m,n)=1$）。',
    '椭圆曲线的 $a_p$ 是对应模形式的 Hecke 特征值。'
  ]
};

window.ATLAS.extras['numbertheory/fourier-expansion'] = {
  insight: '模形式的 $q$ 展开把解析对象变成数列；系数编码算术信息，构造出对应的 $L$ 函数。',
  examples: [
    '$\\Delta(\\tau)=q-24q^2+252q^3-1472q^4+\\cdots$。',
    '$L(f,s)=\\sum_{n\\ge1}a_n n^{-s}$ 是模形式对应的 $L$ 函数。'
  ]
};

window.ATLAS.extras['numbertheory/modularity'] = {
  insight: '模性定理把 $\\mathbb{Q}$ 上的椭圆曲线与权重 $2$ 的尖点形式对应；Wiles 用它证明费马大定理。',
  examples: [
    '$y^2=x^3-x$ 对应一个权重 $2$ 的尖点形式，二者 $L$ 函数相同。',
    '若费马方程有非平凡解，Frey 曲线将不满足模性，与模性定理矛盾。'
  ]
};

window.ATLAS.extras['numbertheory/discrete-logarithms'] = {
  insight: '离散对数在有限循环群中被认为困难，是 Diffie–Hellman 与 ElGamal 的安全性基础；量子计算机上的 Shor 算法可以多项式时间求解。',
  examples: [
    '$p=23,g=5,h=8$：$5^6\\equiv8\\pmod{23}$，故离散对数为 $6$。',
    'BSGS 算法用 $O(\\sqrt N)$ 时间求解离散对数。'
  ]
};

window.ATLAS.extras['numbertheory/modular-exponentiation'] = {
  insight: '快速幂利用 $a^{2k}=(a^k)^2$，把指数运算降到 $O(\\log b)$，是 RSA 与素性检验的基本操作。',
  examples: [
    '计算 $2^{10}\\bmod1000$：$2^{10}=1024\\equiv24$。',
    '计算 $3^{1000000}\\bmod7$ 只需约 $20$ 次平方。'
  ]
};

window.ATLAS.extras['numbertheory/primality-testing'] = {
  insight: '素性检验比整数分解容易得多；AKS 证明素性检验属于 P，Miller–Rabin 是实用概率算法。',
  examples: [
    'Miller–Rabin 重复 $40$ 次，错误概率低于 $10^{-24}$。',
    '$561$ 是 Carmichael 数，会通过费马检验，但 Miller–Rabin 能识别其为合数。'
  ]
};

window.ATLAS.extras['numbertheory/integer-factorization'] = {
  insight: '大整数分解被认为困难，RSA 的安全性依赖这一不对称性；数域筛是目前最快的一般算法。',
  examples: [
    'RSA-250（250 位十进制数）于 2020 年被数域筛分解。',
    'Pollard rho 用伪随机序列寻找小因子，适合快速排除小因子。'
  ]
};

window.ATLAS.extras['numbertheory/lattice-methods'] = {
  insight: 'LLL 在多项式时间找到较短的格基；Coppersmith 用 LLL 求多项式小根，可攻击弱 RSA 参数。格密码基于格问题的困难性。',
  examples: [
    'LLL 可把二维格基 $(100,1),(101,2)$ 约化为短基 $(1,1),(-1,0)$。',
    '格密码（LWE、NTRU）被视为后量子密码的主要候选。'
  ]
};

window.ATLAS.extras['numbertheory/local-global-principle'] = {
  insight: 'Hasse 原理断言局部处处有解可推出整体有解；它对二次型成立，对三次及以上方程失败，失败由 Tate–Shafarevich 群度量。',
  examples: [
    'Hasse–Minkowski 定理：二次型在 $\\mathbb{Q}$ 上有解当且仅当它在每个 $\\mathbb{Q}_p$ 与 $\\mathbb{R}$ 上有解。',
    'Selmer 曲线 $3x^3+4y^3+5z^3=0$ 处处局部可解，但只有平凡有理解。'
  ]
};

window.ATLAS.extras['numbertheory/rational-points'] = {
  insight: '代数曲线的亏格决定有理点的丰富程度：光滑射影亏格 $0$ 曲线在有有理点时可有理参数化，亏格 $1$ 曲线在指定有理点后成为椭圆曲线，亏格 $\\ge2$ 只有有限多个有理点（Faltings 定理）。',
  examples: [
    '单位圆 $x^2+y^2=1$ 的所有有理点可用 $t\\in\\mathbb{Q}$ 参数化。',
    'Faltings 定理证明亏格 $\\ge2$ 的曲线有理点有限，解决了 Mordell 猜想。'
  ]
};

window.ATLAS.extras['numbertheory/integer-equations'] = {
  insight: '整数解比有理点更严格；希尔伯特第十问题问是否存在判定任意整系数方程整数解的算法，答案是否定的（Matiyasevich）。',
  examples: [
    'Pell 方程 $x^2-2y^2=1$ 的最小正整数解为 $(3,2)$，全部解由 $(3+2\\sqrt2)^n$ 生成。',
    'Mordell 方程 $y^2=x^3+k$ 的整数解有限，可用椭圆曲线方法研究。'
  ]
};

window.ATLAS.extras['numbertheory/local-solvability'] = {
  insight: '局部可解是整体有解的必要条件；若某个局部域无解，整体必然无解。局部处处可解但整体无解说明存在全局障碍。',
  examples: [
    '$x^2+y^2=-1$ 在 $\\mathbb{R}$ 上无解，因此无有理解。',
    'Selmer 曲线在每个 $\\mathbb{Q}_p$ 与 $\\mathbb{R}$ 上都有非平凡解，但在 $\\mathbb{Q}$ 上无解。'
  ]
};