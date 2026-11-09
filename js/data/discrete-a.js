/* 数学知识地图 · 离散数学与计算（上） */
window.ATLAS = window.ATLAS || { subjects: {} };

window.ATLAS.subjects.discrete = {
  id: 'discrete',
  name: '离散数学与计算',
  en: 'DISCRETE & COMPUTATION',
  tagline: '怎样数清、连通、求解，以及算得有多快',
  color: '#5fd3c0',
  startAngle: 135,
  branches: [
    {
      id: 'combinatorics',
      name: '组合数学',
      en: 'COMBINATORICS',
      brief: '计数、构造与极值问题',
      color: '#6ee7d0',
      angle: 135,
      topics: [
        {
          id: 'permutations-combinations',
          name: '排列与组合',
          brief: '区分顺序及选择方式的计数',
          keywords: ['排列', '组合', '二项式系数', '计数'],
          definition: [
            '从 $n$ 个不同元素中取 $k$ 个的**排列数**为 $P(n, k) = \\frac{n!}{(n-k)!}$（区分顺序）；**组合数**为 $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$（不区分顺序）。',
            '二项式定理：$(x + y)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^k y^{n-k}$。'
          ],
          intuition: [
            '排列与组合的区别是“顺序是否重要”：选 3 个人组成队伍（组合）与选 3 个人排成一列（排列）。',
            '组合数满足帕斯卡恒等式 $\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$，这对应“选或不选第一个元素”的分类。'
          ],
          formulas: [
            {
              tex: '\\binom{n}{k} = \\frac{n!}{k!(n-k)!}',
              caption: '组合数。'
            },
            {
              tex: '\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}',
              caption: '帕斯卡恒等式。'
            },
            {
              tex: '\\sum_{k=0}^{n} \\binom{n}{k} = 2^n',
              caption: '所有子集的个数。'
            }
          ],
          example: [
            '从 10 人中选 3 人组成委员会：$\\binom{10}{3} = 120$ 种；若选 3 人分别担任主席、副主席、秘书，则 $P(10,3) = 720$ 种。'
          ],
          related: ['generating-functions', 'recurrences', 'probabilistic-method']
        },
        {
          id: 'generating-functions',
          name: '生成函数',
          brief: '把计数序列编码为形式幂级数',
          keywords: ['生成函数', '形式幂级数', '卷积', '计数'],
          definition: [
            '序列 $\\{a_n\\}$ 的**普通生成函数**为 $A(x) = \\sum_{n \\ge 0} a_n x^n$。它把计数序列编码为形式幂级数，组合运算对应级数运算。',
            '指数生成函数 $\\sum a_n x^n/n!$ 用于带标号对象的计数。'
          ],
          intuition: [
            '生成函数是“把数列变成函数”的翻译器：加法对应逐项和，乘法对应卷积，求导对应移位。许多计数问题因此变成代数问题。',
            '例如 $\\binom{n}{k}$ 的生成函数是 $(1+x)^n$；Fibonacci 数列的生成函数是 $x/(1 - x - x^2)$，可从中导出 Binet 公式。'
          ],
          formulas: [
            {
              tex: 'A(x) = \\sum_{n=0}^{\\infty} a_n x^n',
              caption: '普通生成函数。'
            },
            {
              tex: '\\sum_{n=0}^{\\infty} x^n = \\frac{1}{1-x}',
              caption: '几何级数。'
            },
            {
              tex: '\\sum_{n=0}^{\\infty} F_n x^n = \\frac{x}{1 - x - x^2}',
              caption: 'Fibonacci 数列的生成函数。'
            }
          ],
          example: [
            '用生成函数证明 $\\sum_{k=0}^{n} \\binom{n}{k} = 2^n$：$(1+x)^n$ 在 $x=1$ 处取值，左边是系数和，右边是 $2^n$。'
          ],
          related: ['permutations-combinations', 'recurrences', 'foundations/formal-language']
        },
        {
          id: 'recurrences',
          name: '递推关系',
          brief: '用较小规模的问题描述当前问题',
          keywords: ['递推', '线性递推', '特征方程', '主定理'],
          definition: [
            '**递推关系**用前面的项定义后面的项，例如 Fibonacci 数列 $F_n = F_{n-1} + F_{n-2}$。',
            '线性常系数递推可用特征方程求解；分治算法的复杂度满足 $T(n) = aT(n/b) + f(n)$，由主定理给出渐近阶。'
          ],
          intuition: [
            '递推是“把大问题化小”的计数方式：走楼梯的方案数等于最后一步走 1 级或 2 级的方案数之和。',
            '特征方程把递推转化为代数方程：Fibonacci 的特征方程 $r^2 = r + 1$ 的根给出 Binet 公式。'
          ],
          formulas: [
            {
              tex: 'F_n = F_{n-1} + F_{n-2},\\quad F_0 = 0,\\ F_1 = 1',
              caption: 'Fibonacci 递推。'
            },
            {
              tex: 'F_n = \\frac{\\varphi^n - \\psi^n}{\\sqrt5},\\quad \\varphi = \\frac{1+\\sqrt5}{2}',
              caption: 'Binet 公式。'
            },
            {
              tex: 'T(n) = aT(n/b) + f(n)',
              caption: '分治递推（主定理适用）。'
            }
          ],
          example: [
            '爬 $n$ 级楼梯（每次 1 或 2 级）的方案数 $f(n) = f(n-1) + f(n-2)$，$f(1)=1, f(2)=2$，即 Fibonacci 数列。'
          ],
          related: ['generating-functions', 'dynamic-programming', 'divide-conquer']
        },
        {
          id: 'probabilistic-method',
          name: '概率方法',
          brief: '借助随机性证明结构存在',
          keywords: ['概率方法', '期望论证', 'Lovász 局部引理', '存在性'],
          definition: [
            '**概率方法**通过构造随机对象并估计其性质，证明满足某性质的对象存在：若随机对象以正概率满足性质，则这样的对象存在。',
            '例：随机取一个 2-染色，期望的单色边数为 $m/2$；因此存在一种染色使单色边不超过 $m/2$，推出最大割至少 $m/2$。'
          ],
          intuition: [
            '概率方法是“用随机性做存在性证明”：不构造具体对象，只证明它出现的概率大于零。',
            'Lovász 局部引理给出相关坏事件的概率界，是概率组合的核心工具；随机算法也常源于概率方法。'
          ],
          formulas: [
            {
              tex: '\\mathbb{E}[X] = \\sum_i P(A_i)',
              caption: '期望的线性性。'
            },
            {
              tex: 'P\\left(\\bigcap_i \\overline{A_i}\\right) > 0',
              caption: 'Lovász 局部引理（示意）。'
            }
          ],
          example: [
            '随机图 $G(n, p)$ 中，若 $p$ 足够大，几乎必然包含三角形；概率方法给出存在性阈值。'
          ],
          related: ['randomized-algorithms', 'extremal-combinatorics', 'probability/expectation-variance']
        },
        {
          id: 'extremal-combinatorics',
          name: '极值组合',
          brief: '在限制下求解结构的最大或最小规模',
          keywords: ['极值组合', 'Ramsey 理论', 'Turán 定理', 'Erdős-Ko-Rado'],
          definition: [
            '**极值组合**研究在给定约束下，组合结构的最大或最小规模。例如：不含三角形的图最多有多少条边（Turán 定理）。',
            'Ramsey 理论：足够大的结构中必然出现某种有序子结构；$R(3,3) = 6$（6 人中必有 3 人互相认识或互不认识）。'
          ],
          intuition: [
            '极值组合回答“最多能有多大而不出现某结构”：这是“无序中的有序”的数学。',
            'Ramsey 数增长极快：$R(5,5)$ 至今未知（在 43 到 48 之间），体现组合爆炸的难度。'
          ],
          formulas: [
            {
              tex: '\\mathrm{ex}(n, K_3) = \\left\\lfloor \\frac{n^2}{4} \\right\\rfloor',
              caption: 'Turán 定理：不含三角形的图的最大边数。'
            },
            {
              tex: 'R(3, 3) = 6',
              caption: '经典 Ramsey 数。'
            }
          ],
          example: [
            '6 个人的聚会上，必有 3 人互相认识或 3 人互不认识；5 个人时可以避免，因此 $R(3,3) = 6$。'
          ],
          related: ['graphs-networks', 'probabilistic-method', 'matchings-coloring']
        }
      ]
    },
    {
      id: 'graph-theory',
      name: '图论',
      en: 'GRAPH THEORY',
      brief: '顶点、边、网络与连通结构',
      color: '#5fd3c0',
      angle: 90,
      topics: [
        {
          id: 'graphs-networks',
          name: '图与网络',
          brief: '用顶点和边表达关系',
          keywords: ['图', '顶点', '边', '邻接矩阵', '度'],
          definition: [
            '**图** $G = (V, E)$ 由顶点集 $V$ 与边集 $E$ 组成。边可以无向或有向；带权图给边赋权值。',
            '图的**度**是顶点关联的边数；邻接矩阵 $A$ 的 $(i,j)$ 项表示 $i, j$ 之间是否有边。'
          ],
          intuition: [
            '图是“关系”的抽象：社交网络、道路网、分子结构都可以用图表示。顶点是对象，边是关系。',
            '图论研究结构与算法：连通性、最短路径、着色、匹配，都是图上的基本问题。'
          ],
          formulas: [
            {
              tex: 'G = (V, E)',
              caption: '图的定义。'
            },
            {
              tex: '\\sum_{v \\in V} \\deg(v) = 2|E|',
              caption: '握手引理：度数之和等于边数的两倍。'
            }
          ],
          example: [
            '社交网络：顶点是人，边是朋友关系；平均度数与聚类系数描述网络的紧密程度。'
          ],
          related: ['trees-spanning', 'paths-connectivity', 'matchings-coloring']
        },
        {
          id: 'trees-spanning',
          name: '树与生成树',
          brief: '研究无环连通及其骨架',
          keywords: ['树', '生成树', 'Kruskal', 'Prim'],
          definition: [
            '**树**是连通且无环的无向图；$n$ 个顶点的树恰有 $n-1$ 条边。**生成树**是包含图中所有顶点且为树的子图。',
            '最小生成树（MST）是边权和最小的生成树，可用 Kruskal 或 Prim 算法求解。'
          ],
          intuition: [
            '树是“最经济的连通方式”：用最少的边保持连通。生成树是网络的骨架。',
            'Kruskal 算法按边权从小到大加入边，若不成环则保留；Prim 算法从一个顶点出发逐步扩展。两者都是贪心算法且正确。'
          ],
          formulas: [
            {
              tex: '|E_{\\text{树}}| = |V| - 1',
              caption: '树的边数。'
            },
            {
              tex: '\\sum_{e \\in T} w(e) \\text{ 最小}',
              caption: '最小生成树。'
            }
          ],
          example: [
            '用 Kruskal 求 4 个城市间最便宜的光纤连接：按成本排序边，依次加入不成环的边，直到 3 条边连接全部城市。'
          ],
          related: ['graphs-networks', 'greedy-algorithms', 'network-flows']
        },
        {
          id: 'paths-connectivity',
          name: '路径与连通',
          brief: '研究节点能否相互到达',
          keywords: ['路径', '连通', '割点', 'Menger 定理'],
          definition: [
            '图中的**路径**是顶点与边的交替序列；若任意两点间有路径，则图**连通**。**割点**是删除后使连通分量增加的顶点。',
            '有限图的 Menger 定理：边不交路径最大数等于最小边割大小；对不相邻的两端点，内部顶点不交路径最大数等于最小内部点割大小。'
          ],
          intuition: [
            '路径与连通是图论最基本的性质：道路是否可达、网络是否健壮。',
            'Menger 定理把“连通性”与“冗余路径”联系起来：路径越多，网络越健壮；最小割给出瓶颈。'
          ],
          formulas: [
            {
              tex: '\\kappa(u, v) = \\lambda(u, v)',
              caption: 'Menger 定理：最大点不相交路径数 = 最小点割大小。'
            },
            {
              tex: 'G \\text{ 连通} \\iff \\forall u, v\\ \\exists\\ \\text{路径 } u \\to v',
              caption: '连通性的定义。'
            }
          ],
          example: [
            '城市道路网中，若两区之间只有一条必经之路，则那条路是割边；增加一条平行道路即可提高连通性。'
          ],
          related: ['graphs-networks', 'network-flows', 'trees-spanning']
        },
        {
          id: 'matchings-coloring',
          name: '匹配与着色',
          brief: '研究配对与相邻对象的区分',
          keywords: ['匹配', 'Hall 定理', '色数', '着色'],
          definition: [
            '**匹配**是两两不相邻的边集；**完美匹配**覆盖所有顶点。**着色**给每个顶点赋颜色，使相邻顶点颜色不同；最少颜色数称为**色数** $\\chi(G)$。',
            'Hall 定理：二分图存在饱和一侧所有顶点的匹配，当且仅当对该侧任意子集 $S$，其邻域 $N(S)$ 满足 $|N(S)| \\ge |S|$。'
          ],
          intuition: [
            '匹配是“配对问题”：工作分配、相亲匹配。Hall 定理给出配对可行的充要条件。',
            '着色是“冲突避免”：地图着色、频率分配。四色定理说明平面图的色数不超过 4。'
          ],
          formulas: [
            {
              tex: '|N(S)| \\ge |S|\\ \\forall S \\subseteq X \\iff \\text{存在饱和 } X \\text{ 的匹配}',
              caption: 'Hall 定理。'
            },
            {
              tex: '\\chi(G) \\le \\Delta(G) + 1',
              caption: '贪心上界（$\\Delta$ 为最大度）。'
            }
          ],
          example: [
            '三个人三份工作，若每人都能胜任至少一份，任意两人合起来能胜任的工作数不少于 2，且三人合起来能胜任全部三份工作，则存在完美分配（Hall 定理）。'
          ],
          related: ['graphs-networks', 'network-flows', 'np-completeness']
        },
        {
          id: 'spectral-graph-theory',
          name: '谱图论',
          brief: '用矩阵特征值研究图的结构',
          keywords: ['谱图论', '邻接矩阵', 'Laplace 谱', 'Cheeger 不等式'],
          definition: [
            '**谱图论**研究图的邻接矩阵或 Laplace 矩阵的特征值与特征向量。Laplace 矩阵 $L = D - A$ 的零特征值重数等于连通分量数。',
            '**Cheeger 不等式**用 Laplace 第二小特征值 $\\lambda_2$ 界定图的扩张性（等周常数）。'
          ],
          intuition: [
            '特征值编码图的全局结构：$\\lambda_2$ 越大，图越“连通紧密”；接近 0 说明存在瓶颈。',
            '谱图论的算法应用广泛：谱聚类用特征向量分割图，PageRank 用主特征向量排序网页。'
          ],
          formulas: [
            {
              tex: 'L = D - A',
              caption: '图 Laplace 矩阵。'
            },
            {
              tex: '\\lambda_2 > 0 \\iff G \\text{ 连通}',
              caption: 'Laplace 第二特征值的意义。'
            },
            {
              tex: '\\frac{\\lambda_2}{2} \\le h(G) \\le \\sqrt{2\\lambda_2}',
              caption: 'Cheeger 不等式（示意）。'
            }
          ],
          example: [
            '两个团之间只连一条边：Laplace 第二特征值接近 0，谱聚类能检测出这个瓶颈并分割图。'
          ],
          related: ['graphs-networks', 'algebra/spectral-decomposition', 'randomized-algorithms']
        }
      ]
    },
    {
      id: 'discrete-structures',
      name: '离散结构',
      en: 'DISCRETE STRUCTURES',
      brief: '偏序、格与离散代数结构',
      color: '#7fe0cf',
      angle: 45,
      topics: [
        {
          id: 'partial-orders',
          name: '偏序集',
          brief: '允许部分元素不可比较的次序',
          keywords: ['偏序', '链', '反链', 'Dilworth 定理'],
          definition: [
            '**偏序集** $(P, \\le)$ 是集合配自反、反对称、传递的关系。不要求任意两元素可比（与全序不同）。',
            'Dilworth 定理：有限偏序集中，覆盖所有元素的最少链数等于最大反链大小。'
          ],
          intuition: [
            '偏序是“部分有序”：集合包含关系、整除关系都是偏序，但并非任意两个集合/整数都可比较。',
            '链是“完全可比较的子集”，反链是“互不可比较的子集”。Dilworth 定理联系了二者，是组合优化的经典结果。'
          ],
          formulas: [
            {
              tex: 'x \\le x;\\quad x \\le y,\\ y \\le x \\implies x = y;\\quad x \\le y,\\ y \\le z \\implies x \\le z',
              caption: '偏序公理。'
            },
            {
              tex: '\\text{最少链覆盖数} = \\text{最大反链大小}',
              caption: 'Dilworth 定理。'
            }
          ],
          example: [
            '$\\{1, 2, 3, 4, 6, 12\\}$ 在整除关系下是偏序集；$\\{2, 3\\}$ 是反链，最长链为 $1 < 2 < 4 < 12$。'
          ],
          related: ['lattices', 'boolean-algebras', 'extremal-combinatorics']
        },
        {
          id: 'lattices',
          name: '格',
          brief: '任意两元素都有上确界与下确界',
          keywords: ['格', '上确界', '下确界', '分配格'],
          definition: [
            '**格**是偏序集，其中任意两个元素 $a, b$ 都有上确界 $a \\vee b$ 与下确界 $a \\wedge b$。',
            '若分配律 $a \\wedge (b \\vee c) = (a \\wedge b) \\vee (a \\wedge c)$ 成立，称为**分配格**。'
          ],
          intuition: [
            '格是“有序的代数结构”：集合的并与交、命题的或与且、整数的最大公因数与最小公倍数都构成格。',
            '分配格把逻辑运算的代数规律抽象出来；布尔代数是分配格的特殊情形。'
          ],
          formulas: [
            {
              tex: 'a \\vee b = \\sup\\{a, b\\},\\quad a \\wedge b = \\inf\\{a, b\\}',
              caption: '上确界与下确界。'
            },
            {
              tex: 'a \\wedge (b \\vee c) = (a \\wedge b) \\vee (a \\wedge c)',
              caption: '分配律。'
            }
          ],
          example: [
            '幂集 $\\mathcal{P}(S)$ 在包含关系下是格：$\\vee = \\cup$，$\\wedge = \\cap$，且是分配格。'
          ],
          related: ['partial-orders', 'boolean-algebras', 'algebra/prime-ideals']
        },
        {
          id: 'boolean-algebras',
          name: '布尔代数',
          brief: '抽象逻辑与集合的运算规律',
          keywords: ['布尔代数', '补元', 'Stone 表示', '逻辑'],
          definition: [
            '**布尔代数**是有补分配格：存在最小元 $0$、最大元 $1$，每个元素 $a$ 有补元 $\\neg a$ 满足 $a \\vee \\neg a = 1$，$a \\wedge \\neg a = 0$。',
            'Stone 表示定理：每个布尔代数同构于某个集合的幂集代数的一个布尔子代数（带并、交、补）。'
          ],
          intuition: [
            '布尔代数把真假逻辑的运算规律抽象出来：$\\vee$ 是“或”，$\\wedge$ 是“且”，$\\neg$ 是“非”。',
            '布尔代数是数字电路的基础：逻辑门实现布尔运算，计算机用二进制表示真假。'
          ],
          formulas: [
            {
              tex: 'a \\vee \\neg a = 1,\\quad a \\wedge \\neg a = 0',
              caption: '补元公理。'
            },
            {
              tex: '\\neg(a \\vee b) = \\neg a \\wedge \\neg b',
              caption: '德摩根律。'
            }
          ],
          example: [
            '命题逻辑的真值集合 $\\{0, 1\\}$ 在 $\\vee, \\wedge, \\neg$ 下构成二元布尔代数。'
          ],
          related: ['lattices', 'foundations/propositional-logic', 'partial-orders']
        },
        {
          id: 'finite-geometries',
          name: '有限几何',
          brief: '研究有限对象构成的几何结构',
          keywords: ['有限几何', '有限射影平面', '关联结构', 'q 阶'],
          definition: [
            '**有限几何**是有限点集与线集组成的关联结构，满足几何公理。$q$ 阶有限射影平面有 $q^2 + q + 1$ 个点与同样多的线，每条线含 $q+1$ 个点。',
            '有限域上的向量空间给出有限几何的标准例子：$\\mathbb{F}_q^{n+1}$ 的射影化是 $n$ 维有限射影空间。'
          ],
          intuition: [
            '有限几何是“离散化的空间”：点线关系仍然成立，但数量有限，适合组合设计与编码。',
            '7 点 7 线的 Fano 平面是 2 阶有限射影平面，每条线 3 个点，任意两点确定一条线。'
          ],
          formulas: [
            {
              tex: '|\\mathbb{P}^2(\\mathbb{F}_q)| = q^2 + q + 1',
              caption: '有限射影平面的点数。'
            },
            {
              tex: '\\text{每条线有 } q + 1 \\text{ 个点}',
              caption: '有限射影平面的线阶。'
            }
          ],
          example: [
            'Fano 平面（$q = 2$）：7 个点、7 条线，每条线 3 个点；它是阶为 2 的 Steiner 三元系。'
          ],
          related: ['combinatorial-designs', 'geometry/projective-geometry', 'algebra/finite-fields']
        },
        {
          id: 'combinatorial-designs',
          name: '组合设计',
          brief: '在约束下均衡安排元素与区组',
          keywords: ['区组设计', 'Steiner 系统', '平衡不完全区组设计', 'BIBD'],
          definition: [
            '**区组设计**把元素集合分成若干块（区组），使每对元素出现在相同数量的区组中。Steiner 三元系 $S(2, 3, v)$ 每对元素恰好出现在一个三元组中。',
            '平衡不完全区组设计（BIBD）的参数为 $(v, k, \\lambda)$：$v$ 个元素、每块 $k$ 个、每对元素出现 $\\lambda$ 次。'
          ],
          intuition: [
            '组合设计是“均衡安排”：实验设计、锦标赛赛程、编码构造都需要让每对对象均匀相遇。',
            'Fano 平面是最小的 Steiner 三元系；设计理论连接组合数学、有限几何与编码理论。'
          ],
          formulas: [
            {
              tex: 'S(2, 3, v) \\text{ 存在} \\iff v \\equiv 1, 3 \\pmod 6',
              caption: 'Steiner 三元系的存在条件（Kirkman 定理）。'
            },
            {
              tex: 'b = \\frac{\\lambda v(v-1)}{k(k-1)}',
              caption: 'BIBD 的区组数。'
            }
          ],
          example: [
            '7 个元素的 Steiner 三元系（Fano 平面）包含 7 个三元组，每对元素恰好出现在一个三元组中。'
          ],
          related: ['finite-geometries', 'error-correcting-codes', 'partial-orders']
        }
      ]
    },
    {
      id: 'computational-complexity',
      name: '计算复杂性',
      en: 'COMPUTATIONAL COMPLEXITY',
      brief: '时间、空间与问题的计算难度',
      color: '#4fc7b4',
      angle: 0,
      topics: [
        {
          id: 'time-space',
          name: '时间与空间',
          brief: '衡量输入增大时的资源开销',
          keywords: ['时间复杂度', '空间复杂度', '大 O', '资源'],
          definition: [
            '**时间复杂度**是算法运行步数随输入规模 $n$ 的增长阶；**空间复杂度**是额外内存的增长阶。用大 O 记号描述上界。',
            '常见复杂度：$O(1)$、$O(\\log n)$、$O(n)$、$O(n \\log n)$、$O(n^2)$、$O(2^n)$。'
          ],
          intuition: [
            '复杂度决定算法能否处理大规模输入：$O(n^2)$ 的排序在百万数据上不可行，$O(n \\log n)$ 可行。',
            '大 O 忽略常数与低阶项，关注增长趋势；这是评估算法的标准语言。'
          ],
          formulas: [
            {
              tex: 'f(n) = O(g(n)) \\iff \\exists C, n_0:\\ f(n) \\le C g(n)\\ \\forall n \\ge n_0',
              caption: '大 O 记号。'
            },
            {
              tex: 'n! = O(n^n)',
              caption: '增长阶比较示例。'
            }
          ],
          example: [
            '冒泡排序 $O(n^2)$，归并排序 $O(n \\log n)$；对 $n = 10^6$，后者约快 $10^4$ 倍。'
          ],
          related: ['p-vs-np', 'np-completeness', 'dynamic-programming']
        },
        {
          id: 'p-vs-np',
          name: 'P 与 NP',
          brief: '比较多项式时间求解与验证',
          keywords: ['P', 'NP', '判定问题', '多项式时间'],
          definition: [
            '**P** 是可在多项式时间内求解的判定问题类；**NP** 是可在多项式时间内验证解的问题类。显然 $P \\subseteq NP$。',
            'P vs NP 问：是否 $P = NP$？即“容易验证的问题是否都容易求解”。这是千禧年大奖难题之一。'
          ],
          intuition: [
            '数独是 NP 的典型代表：验证一个解很容易，但找到解可能很难。P vs NP 问的是所有数独类问题是否都有快速算法。',
            '大多数研究者相信 $P \\ne NP$；若 $P = NP$，密码学（RSA 等）将崩溃，优化问题将变得容易。'
          ],
          formulas: [
            {
              tex: 'P \\subseteq NP',
              caption: '基本包含关系。'
            },
            {
              tex: 'P = NP \\implies \\text{所有 NP 问题可多项式时间求解}',
              caption: 'P = NP 的后果。'
            }
          ],
          example: [
            '判定一个图是否有 Hamilton 回路是 NP 的；若 $P = NP$，则可在多项式时间内回答，进而解决旅行商问题的判定版本。'
          ],
          related: ['np-completeness', 'time-space', 'approximation-algorithms']
        },
        {
          id: 'np-completeness',
          name: 'NP 完全性',
          brief: '用归约联系一类核心难题',
          keywords: ['NP 完全', '归约', 'SAT', 'Cook-Levin'],
          definition: [
            '问题 $L$ 是 **NP 完全**的，如果 $L \\in NP$，且所有 NP 问题都可多项式时间归约到 $L$。因此 NP 完全问题是 NP 中“最难”的问题。',
            'Cook–Levin 定理（1971）：SAT（布尔可满足性）是 NP 完全的。由此通过归约证明大量问题 NP 完全。'
          ],
          intuition: [
            'NP 完全问题是“一荣俱荣”的：若任何一个有多项式算法，则 $P = NP$。因此它们被视为“实际不可快速求解”。',
            '常见 NP 完全问题：SAT、3-SAT、旅行商判定、图着色、背包判定、子集和。'
          ],
          formulas: [
            {
              tex: 'L \\in NPC \\iff L \\in NP \\ \\text{且}\\ \\forall L\' \\in NP:\\ L\' \\le_p L',
              caption: 'NP 完全的定义。'
            },
            {
              tex: '\\mathrm{SAT} \\in NPC',
              caption: 'Cook–Levin 定理。'
            }
          ],
          example: [
            '3-SAT 归约到图着色：把一个 3-SAT 公式编码成图，公式可满足当且仅当图可用 3 种颜色着色。'
          ],
          related: ['p-vs-np', 'approximation-algorithms', 'reductions']
        },
        {
          id: 'approximation-algorithms',
          name: '近似算法',
          brief: '在保证误差下寻求高效解',
          keywords: ['近似算法', '近似比', 'PTAS', '不可近似性'],
          definition: [
            '**近似算法**在多项式时间内给出接近最优的解；**近似比** $\\rho$ 表示解值不超过最优值的 $\\rho$ 倍（最小化问题）。',
            'PTAS（多项式时间近似方案）：对任意 $\\varepsilon > 0$，存在 $(1+\\varepsilon)$ 近似算法，运行时间多项式于 $n$（可依赖 $\\varepsilon$）。'
          ],
          intuition: [
            'NP 难问题无法精确快速求解，但可以求“足够好”的解。近似算法给出可证明的误差保证，比启发式更可靠。',
            '有些问题有 PTAS（如欧氏旅行商），有些连常数近似都困难（如最大团），近似难度由 PCP 定理刻画。'
          ],
          formulas: [
            {
              tex: '\\frac{\\mathrm{ALG}}{\\mathrm{OPT}} \\le \\rho',
              caption: '近似比（最小化问题）。'
            },
            {
              tex: '\\text{PTAS：} \\forall \\varepsilon > 0,\\ \\text{运行时间 } O(n^{f(\\varepsilon)})',
              caption: '多项式时间近似方案。'
            }
          ],
          example: [
            '顶点覆盖的 2-近似算法：取一条未覆盖边，把两端点都加入覆盖，结果不超过最优解的 2 倍。'
          ],
          related: ['np-completeness', 'p-vs-np', 'combinatorial-optimization']
        }
      ]
    }
  ]
};