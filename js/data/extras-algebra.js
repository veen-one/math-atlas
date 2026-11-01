/* 代数学科 · 内容深化 */
window.ATLAS = window.ATLAS || {};
window.ATLAS.extras = window.ATLAS.extras || {};

window.ATLAS.extras['algebra/groups-subgroups'] = {
  insight: '群公理只要求封闭、结合、单位元与逆元；子群判定把四条简化为一条：非空且对 $ab^{-1}$ 封闭。Lagrange 定理是最早的结构约束：子群的阶整除群的阶，这限制了许多群的可能结构。',
  examples: [
    '$\\mathbb{Z}/6\\mathbb{Z}$ 的子群 $\\{0,2,4\\}$ 与 $\\{0,3\\}$ 的阶分别为 $3$ 与 $2$，都整除 $6$。',
    '$S_3$ 有 $3$ 阶子群 $\\langle(123)\\rangle$ 与三个 $2$ 阶子群 $\\langle(12)\\rangle$ 等，阶均整除 $6$。'
  ]
};

window.ATLAS.extras['algebra/homomorphisms-quotients'] = {
  insight: '同态的核衡量信息损失，第一同构定理 $G/\\ker\\varphi\\cong\\operatorname{im}\\varphi$ 把“压缩”与“像”联系起来。正规子群正是使商群有意义的那类子群。',
  examples: [
    '行列式 $\\det:GL_n(\\mathbb{R})\\to\\mathbb{R}^{\\times}$ 的核是 $SL_n$，故 $GL_n/SL_n\\cong\\mathbb{R}^{\\times}$。',
    '符号映射 $\\operatorname{sgn}:S_n\\to\\{\\pm1\\}$ 的核是 $A_n$，因此 $S_n/A_n\\cong\\mathbb{Z}/2\\mathbb{Z}$。'
  ]
};

window.ATLAS.extras['algebra/group-actions'] = {
  insight: '群作用把抽象群实现为置换群；轨道分解与 Burnside 引理把对称性转化为计数。作用也是研究群结构的主要工具。',
  examples: [
    '旋转群 $C_4$ 作用在正方形顶点的两种染色上，Burnside 引理给出 $6$ 种本质不同的方案。',
    '$S_4$ 在四个顶点上的作用是传递的，只有一个轨道。'
  ]
};

window.ATLAS.extras['algebra/orbits-stabilizers'] = {
  insight: '轨道-稳定子定理 $|\\mathrm{Orb}(x)|=[G:\\mathrm{Stab}(x)]$ 是计数与分类的基本公式；稳定子越大，轨道越小。',
  examples: [
    '$S_3$ 作用在 $\\{1,2,3\\}$ 上，点 $1$ 的稳定子是 $\\{(1),(23)\\}$，轨道大小为 $3$。',
    '共轭作用下，轨道是共轭类，稳定子是中心化子：$|\\text{共轭类}|=[G:C_G(x)]$。'
  ]
};

window.ATLAS.extras['algebra/finite-groups'] = {
  insight: '有限群论的核心是分类；Sylow 定理给出素数幂子群的存在与共轭性，是证明群结构的有力工具。单群是不可再分的基本构件。',
  examples: [
    '利用 Sylow 定理可证 $15$ 阶群必为循环群（$n_3=n_5=1$）。',
    '$A_5$ 是最小的非交换单群，阶为 $60$，是五次方程不可解的关键。'
  ]
};

window.ATLAS.extras['algebra/ring-structure'] = {
  insight: '环同时有加法与乘法；整环与域的差别在于乘法是否可逆。零因子是区分整环与一般环的关键，也是多项式环与矩阵环性质不同的根源。',
  examples: [
    '$\\mathbb{Z}$ 是整环但不是域；$\\mathbb{Q}$ 是域。',
    '$M_2(\\mathbb{R})$ 有零因子且非交换，例如两个非零矩阵乘积可以为零矩阵。'
  ]
};

window.ATLAS.extras['algebra/ideals'] = {
  insight: '理想是“可以商掉的子集”；极大理想对应域，素理想对应整环。理想的唯一分解修复了代数整数环中元素分解不唯一的问题。',
  examples: [
    '$\\mathbb{Z}$ 中 $(p)$ 是极大理想，$\\mathbb{Z}/(p)=\\mathbb{F}_p$ 是域。',
    '$\\mathbb{Z}[\\sqrt{-5}]$ 中元素分解不唯一，但理想分解唯一。'
  ]
};

window.ATLAS.extras['algebra/polynomial-rings'] = {
  insight: '域上多项式环是欧几里得整环，因此有唯一分解；不可约多项式对应扩域，这是构造有限域与数域的基本手段。',
  examples: [
    '$\\mathbb{R}[x]/(x^2+1)\\cong\\mathbb{C}$。',
    '$\\mathbb{F}_2[x]/(x^2+x+1)\\cong\\mathbb{F}_4$，因为 $x^2+x+1$ 在 $\\mathbb{F}_2$ 上不可约。'
  ]
};

window.ATLAS.extras['algebra/finite-fields'] = {
  insight: '有限域的阶必为素数幂，且每个素数幂都存在唯一的有限域；乘法群是循环群。这些性质使有限域成为编码与密码学的核心工具。',
  examples: [
    '$\\mathbb{F}_4$ 的乘法群是 $3$ 阶循环群，元素 $\\omega$ 满足 $\\omega^3=1$。',
    'AES 在 $\\mathbb{F}_{256}$ 上运算，利用其乘法逆元构造 S 盒。'
  ]
};

window.ATLAS.extras['algebra/field-extensions'] = {
  insight: '扩张次数是乘性的：$[L:F]=[L:K][K:F]$。代数扩张与超越扩张的区别在于元素是否满足非零多项式方程，这决定了扩张的有限性。',
  examples: [
    '$[\\mathbb{Q}(\\sqrt2,\\sqrt3):\\mathbb{Q}]=4$，因为 $[\\mathbb{Q}(\\sqrt2):\\mathbb{Q}]=2$ 且 $\\sqrt3\\notin\\mathbb{Q}(\\sqrt2)$。',
    '$\\mathbb{Q}(\\pi)$ 是无限次扩张，因为 $\\pi$ 是超越数。'
  ]
};

window.ATLAS.extras['algebra/group-representations'] = {
  insight: '表示把群元素变成线性变换，使群论问题可以用线性代数研究；特征标是表示的迹，是类函数，携带表示的大部分信息。',
  examples: [
    '$S_3$ 的置换表示分解为平凡表示与标准二维不可约表示。',
    '正则表示的维数等于群阶，其分解包含每个不可约表示，重数等于该表示的维数。'
  ]
};

window.ATLAS.extras['algebra/invariant-subspaces'] = {
  insight: '不变子空间是表示作用下的“封闭区域”；Maschke 定理保证有限群在特征零域上完全可约，因此表示论可以归结为不可约表示。',
  examples: [
    '$S_3$ 的二维标准表示没有非平凡不变子空间，因此不可约。',
    '$\\mathbb{R}^3$ 的置换表示分解为常数向量子空间与和为零的子空间。'
  ]
};

window.ATLAS.extras['algebra/irreducible-representations'] = {
  insight: '不可约表示是表示论的“原子”；Schur 引理限制等变映射，特征标正交关系给出分解与计数的工具。',
  examples: [
    '$S_3$ 有三个不可约表示，维数为 $1,1,2$，平方和 $1^2+1^2+2^2=6$。',
    '$SU(2)$ 的不可约表示按自旋 $j=0,\\frac12,1,\\dots$ 分类，维数为 $2j+1$。'
  ]
};

window.ATLAS.extras['algebra/lie-groups'] = {
  insight: '李群同时是群与流形，群运算光滑；它在单位元的切空间是李代数，局部决定群结构。李群是几何、分析与物理的交叉点。',
  examples: [
    '$SO(3)$ 是 $3$ 维李群，描述三维旋转。',
    '圆群 $S^1$ 在复数乘法下是李群，其李代数是 $\\mathbb{R}$。'
  ]
};

window.ATLAS.extras['algebra/lie-algebras'] = {
  insight: '李代数把李群线性化；李括号编码无穷小变换的非交换性。同一李代数的连通李群彼此局部同构。',
  examples: [
    '$\\mathfrak{so}(3)$ 与 $\\mathbb{R}^3$ 同构，李括号对应向量叉积。',
    '$\\mathfrak{gl}(n)$ 由所有 $n\\times n$ 矩阵组成，括号为交换子。'
  ]
};

window.ATLAS.extras['algebra/lie-bracket'] = {
  insight: '李括号衡量两个无穷小变换的交换性；Jacobi 恒等式是结合律的无穷小版本。结构常数完全刻画李代数的乘法。',
  examples: [
    '矩阵情形 $[X,Y]=XY-YX$ 是交换子，衡量 $XY$ 与 $YX$ 的差。',
    '量子力学的正则对易关系 $[\\hat x,\\hat p]=i\\hbar$ 就是李括号的物理体现。'
  ]
};

window.ATLAS.extras['algebra/exponential-map'] = {
  insight: '指数映射把李代数元素积分成单参数子群；在单位元附近是微分同胚，因此李代数局部决定李群。全局上它可能不满射。',
  examples: [
    '$\\exp(\\theta J)$ 给出旋转矩阵，$J=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$。',
    '矩阵指数满足 $\\det(e^X)=e^{\\operatorname{tr}X}$，把迹与行列式联系起来。'
  ]
};

window.ATLAS.extras['algebra/characters'] = {
  insight: '特征标是表示的迹，忽略基的选择；对紧李群它是类函数，可以用傅里叶分析展开，连接表示论与调和分析。',
  examples: [
    '$SU(2)$ 的自旋 $j$ 特征标为 $\\chi_j(\\theta)=\\frac{\\sin((2j+1)\\theta/2)}{\\sin(\\theta/2)}$。',
    '特征标正交关系用于把任意表示分解为不可约成分。'
  ]
};

window.ATLAS.extras['algebra/rotation-groups'] = {
  insight: '旋转群描述空间中的连续对称；$SU(2)$ 是 $SO(3)$ 的双覆盖，解释了自旋 $\\frac12$ 粒子旋转 $2\\pi$ 后状态变号的现象。',
  examples: [
    '单位四元数群与 $SU(2)$ 同构，是计算机图形学表示三维旋转的标准工具。',
    '旋转 $2\\pi$ 在 $SU(2)$ 中对应 $-I$，需要旋转 $4\\pi$ 才回到单位。'
  ]
};

window.ATLAS.extras['algebra/chain-complexes'] = {
  insight: '链复形用 $d^2=0$ 编码“边界的边界为零”；同调度量闭链中非边界的部分。复形是代数拓扑与同调代数的共同语言。',
  examples: [
    '三角形的链复形满足 $\\partial^2=0$，同调 $H_1=0$。',
    'de Rham 复形 $\\Omega^\\bullet$ 满足 $d^2=0$，其同调是 de Rham 上同调。'
  ]
};

window.ATLAS.extras['algebra/exact-sequences'] = {
  insight: '正合列精确描述像与核的衔接；短正合列表示一个模被另一个模“扩张”。长正合列是同调代数的计算引擎。',
  examples: [
    '$0\\to\\mathbb{Z}\\xrightarrow{\\times n}\\mathbb{Z}\\to\\mathbb{Z}/n\\mathbb{Z}\\to0$ 是短正合列但不分裂。',
    '$0\\to A\\to A\\oplus C\\to C\\to0$ 分裂，因为存在截面。'
  ]
};

window.ATLAS.extras['algebra/homology-groups'] = {
  insight: '同调群用代数度量“洞”；$H_1$ 计数一维洞，$H_2$ 计数二维空腔。同调比基本群更容易计算，因为它是阿贝尔群。',
  examples: [
    '$H_1(S^1)=\\mathbb{Z}$，对应绕圈的整数绕数。',
    '环面 $T^2$ 的 $H_1=\\mathbb{Z}\\oplus\\mathbb{Z}$，对应经线与纬线两个独立方向。'
  ]
};

window.ATLAS.extras['algebra/derived-functors'] = {
  insight: '导出函子修正非正合函子，把短正合列转化为长正合列。它是同调代数把“丢失的信息”逐层记录的方式。',
  examples: [
    '$\\operatorname{Ext}^i_R(M,-)$ 是 $\\operatorname{Hom}(M,-)$ 的右导出函子。',
    '$\\operatorname{Tor}_i^R(-,N)$ 是张量积的左导出函子。'
  ]
};

window.ATLAS.extras['algebra/ext-tor'] = {
  insight: '$\\operatorname{Ext}^1$ 分类扩张，$\\operatorname{Tor}_1$ 度量张量积与正合性的偏差。它们在模有“扭结”时非零。',
  examples: [
    '$\\operatorname{Ext}^1_{\\mathbb{Z}}(\\mathbb{Z}/n,\\mathbb{Z})\\cong\\mathbb{Z}/n$，对应 $n$ 种扩张。',
    '$\\operatorname{Tor}_1^{\\mathbb{Z}}(\\mathbb{Z}/n,\\mathbb{Z}/m)\\cong\\mathbb{Z}/\\gcd(n,m)$。'
  ]
};

window.ATLAS.extras['algebra/noetherian'] = {
  insight: '诺特条件保证理想链稳定，使有限生成成为可能；Hilbert 基定理保证多项式环诺特，从而代数簇可由有限方程定义。',
  examples: [
    '$k[x_1,\\dots,x_n]$ 是诺特环，因此每个代数簇都可由有限多个多项式定义。',
    '$\\mathbb{Z}$ 是诺特环，因为每个理想都是主理想 $(n)$。'
  ]
};

window.ATLAS.extras['algebra/localization'] = {
  insight: '局部化允许用 $S$ 中元素作分母，聚焦于某个位置附近的性质。局部环只有一个极大理想，便于逐点研究。',
  examples: [
    '$\\mathbb{Z}_{(p)}=\\{a/b:p\\nmid b\\}$ 是局部环，唯一极大理想为 $p\\mathbb{Z}_{(p)}$。',
    '在 $\\mathbb{Z}$ 中把所有非零整数作分母，得到 $\\mathbb{Q}$。'
  ]
};

window.ATLAS.extras['algebra/modules'] = {
  insight: '模是环上的向量空间；当环不是域时，模可能没有基，可能有挠元。PID 上有限生成模有结构定理，是线性代数 Jordan 标准形的来源。',
  examples: [
    '$\\mathbb{Z}$-模就是交换群：标量乘法是重复相加。',
    '有限生成 $\\mathbb{Z}$-模分解为自由部分 $\\mathbb{Z}^r$ 与挠部分 $\\bigoplus\\mathbb{Z}/d_i$。'
  ]
};

window.ATLAS.extras['algebra/prime-ideals'] = {
  insight: '素理想对应几何点：$k[x_1,\\dots,x_n]$ 的极大理想对应 $k^n$ 中的点，一般素理想对应不可约子簇。',
  examples: [
    '$\\mathbb{Z}$ 的素理想为 $(0)$ 与 $(p)$。',
    '$k[x,y]$ 中 $(x-a,y-b)$ 是极大理想，对应平面点 $(a,b)$。'
  ]
};

window.ATLAS.extras['algebra/dimension-theory'] = {
  insight: 'Krull 维数是素理想链的最大长度；Noether 正规化把它与超越次数联系起来，使代数维数有几何含义。',
  examples: [
    '$\\dim k[x_1,\\dots,x_n]=n$，对应 $n$ 维仿射空间。',
    '$\\dim\\mathbb{Z}=1$，因为素理想链只有 $(0)\\subsetneq(p)$。'
  ]
};

window.ATLAS.extras['algebra/fundamental-theorem-galois'] = {
  insight: '伽罗瓦对应把中间域与子群一一对应，把域论问题翻译成群论问题。正规扩张对应正规子群，这一对应是伽罗瓦理论的核心。',
  examples: [
    '$\\mathbb{Q}(\\sqrt2,\\sqrt3)$ 的伽罗瓦群是 $(\\mathbb{Z}/2)^2$，四个子群对应四个中间域。',
    '若 $E/F$ 正规，则 $\\operatorname{Gal}(K/E)$ 是 $G$ 的正规子群，且 $\\operatorname{Gal}(E/F)\\cong G/\\operatorname{Gal}(K/E)$。'
  ]
};

window.ATLAS.extras['algebra/galois-group'] = {
  insight: '伽罗瓦群是保持基础域不动的域自同构群，衡量方程根的对称性。扩张是伽罗瓦的当且仅当自同构群的大小等于扩张次数。',
  examples: [
    '$\\operatorname{Gal}(\\mathbb{C}/\\mathbb{R})=\\{\\mathrm{id},\\text{复共轭}\\}\\cong\\mathbb{Z}/2$。',
    '$x^3-2$ 的分裂域伽罗瓦群是 $S_3$，因为复根无法只靠有理运算区分。'
  ]
};

window.ATLAS.extras['algebra/splitting-fields'] = {
  insight: '分裂域是刚好容纳全部根的扩域；可分多项式的分裂域是伽罗瓦扩张，因此可以用伽罗瓦理论研究。',
  examples: [
    '$x^3-2$ 的分裂域为 $\\mathbb{Q}(\\sqrt[3]{2},\\omega)$，次数为 $6$。',
    '$x^2+1$ 在 $\\mathbb{R}$ 上的分裂域是 $\\mathbb{C}$。'
  ]
};

window.ATLAS.extras['algebra/solvability-by-radicals'] = {
  insight: '根式可解等价于伽罗瓦群可解：可解群有正规列，使每个商群交换，对应逐层开方的根式塔。',
  examples: [
    '$S_2,S_3,S_4$ 可解，因此二、三、四次方程都有根式公式。',
    '$x^5-x-1$ 的伽罗瓦群是 $S_5$，不可解，因此没有根式公式。'
  ]
};

window.ATLAS.extras['algebra/quintic'] = {
  insight: '一般五次方程的伽罗瓦群是 $S_5$，其换位子群 $A_5$ 是单群，因此 $S_5$ 不可解。这并不意味着五次方程没有解，只是不能用根式表达。',
  examples: [
    '$x^5-x+1$ 的伽罗瓦群为 $S_5$，不可根式求解。',
    '数值方法（如 Newton 法）仍可高精度求根；代数基本定理保证复数域上总有根。'
  ]
};

window.ATLAS.extras['algebra/vector-spaces'] = {
  insight: '向量空间是“可以做线性组合”的集合；函数空间、多项式空间、矩阵空间都是向量空间，因此线性代数可以研究微分方程与傅里叶分析。',
  examples: [
    '$\\mathbb{R}^3$ 中过原点的平面是二维子空间；不过原点的平面不是子空间。',
    '$C[0,1]$ 是无限维向量空间，其基无法显式列出。'
  ]
};

window.ATLAS.extras['algebra/basis-dimension'] = {
  insight: '基是线性无关的生成集；维数与基的选择无关，是空间的“自由度”。基变换矩阵描述坐标如何变化，是“不依赖基”思维的核心。',
  examples: [
    '$\\mathbb{R}^3$ 的标准基 $e_1,e_2,e_3$ 给出维数 $3$。',
    '傅里叶级数把周期函数按正交基 $e^{inx}$ 展开，是函数空间的“坐标”。'
  ]
};

window.ATLAS.extras['algebra/linear-maps'] = {
  insight: '线性映射由矩阵表示；秩-零化度定理 $\\dim V=\\dim\\ker T+\\dim\\operatorname{im}T$ 联系核与像的维数，是线性代数的基本守恒律。',
  examples: [
    '投影 $\\mathbb{R}^3\\to\\mathbb{R}^2$，$(x,y,z)\\mapsto(x,y)$ 的核是 $z$ 轴，像是 $\\mathbb{R}^2$。',
    '微分算子 $D$ 在多项式空间上是线性映射，且是满射但非单射。'
  ]
};

window.ATLAS.extras['algebra/eigenvalues'] = {
  insight: '特征值是变换保持方向的伸缩倍数；可对角化把复杂变换拆成各特征方向上独立的缩放，大大简化矩阵幂与微分方程。',
  examples: [
    '对称矩阵 $\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$ 的特征值为 $3,1$，可正交对角化。',
    '旋转矩阵 $\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$ 无实特征值，对应旋转 $90^\\circ$。'
  ]
};

window.ATLAS.extras['algebra/spectral-decomposition'] = {
  insight: '正规矩阵可酉对角化；奇异值分解把任意矩阵分解为“旋转—拉伸—旋转”，是数据压缩与数值线性代数的核心。',
  examples: [
    '对称矩阵的谱分解 $A=\\sum\\lambda_i u_i u_i^{*}$ 把 $A$ 写成投影的线性组合。',
    '图像压缩用 SVD 保留最大的若干奇异值，丢弃其余。'
  ]
};