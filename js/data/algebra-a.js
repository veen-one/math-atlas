/* 数学知识地图 · 代数（上） */
window.ATLAS = window.ATLAS || { subjects: {} };

window.ATLAS.subjects.algebra = {
  id: 'algebra',
  name: '代数',
  en: 'ALGEBRA',
  tagline: '把具体运算，抽象成可以迁移的结构',
  color: '#6cb6e8',
  startAngle: 85,
  branches: [
    {
      id: 'group-theory',
      name: '群论',
      en: 'GROUP THEORY',
      brief: '研究对称与可逆操作的结构',
      color: '#7cc4f0',
      angle: 85,
      topics: [
        {
          id: 'groups-subgroups',
          name: '群与子群',
          brief: '组织可逆运算及其子结构',
          keywords: ['群', '子群', '群公理', '循环群'],
          definition: [
            '**群**是一个集合 $G$ 连同二元运算 $\\cdot: G \\times G \\to G$，满足：封闭性、结合律、存在单位元 $e$（$eg = ge = g$）、每个元素存在逆元 $g^{-1}$（$gg^{-1} = e$）。若运算还满足交换律，则称为交换群（阿贝尔群）。',
            '子集 $H \\subseteq G$ 称为**子群**，如果它在同一运算下构成群，记 $H \\le G$。判定子群只需：$H$ 非空，且对任意 $a, b \\in H$ 有 $ab^{-1} \\in H$。'
          ],
          intuition: [
            '群是“对称性”的代数抽象：一个对象的所有可逆变换在复合下构成群。正方形的旋转与翻折构成 8 阶二面体群 $D_4$，它描述正方形的全部对称。',
            '子群刻画“保持某个子结构不变”的变换。例如保持一个顶点不动的正方形对称构成 2 阶子群。'
          ],
          formulas: [
            {
              tex: 'g \\cdot e = e \\cdot g = g,\\qquad g \\cdot g^{-1} = g^{-1} \\cdot g = e',
              caption: '单位元与逆元的公理。'
            },
            {
              tex: 'H \\le G \\iff H \\ne \\varnothing \\ \\text{且}\\ \\forall a, b \\in H:\\ ab^{-1} \\in H',
              caption: '子群的一步判定法。'
            },
            {
              tex: '|G| = |H| \\cdot [G : H]',
              caption: 'Lagrange 定理：子群的阶整除群的阶（有限群）。'
            }
          ],
          example: [
            '$\\mathbb{Z}$ 在加法下是无限循环群，由 $1$ 生成；$n$ 阶循环群 $\\mathbb{Z}/n\\mathbb{Z}$ 的元素是 $\\{0, 1, \\dots, n-1\\}$，加法模 $n$。'
          ],
          related: ['homomorphisms-quotients', 'group-actions', 'finite-groups']
        },
        {
          id: 'homomorphisms-quotients',
          name: '同态与商群',
          brief: '保持运算的映射与结构压缩',
          keywords: ['同态', '核', '正规子群', '商群', '同构定理'],
          definition: [
            '映射 $\\varphi: G \\to H$ 称为**群同态**，如果 $\\varphi(ab) = \\varphi(a)\\varphi(b)$ 对所有 $a, b \\in G$ 成立。同态的**核** $\\ker \\varphi = \\{g \\in G : \\varphi(g) = e_H\\}$ 是 $G$ 的正规子群，像 $\\mathrm{im}\\,\\varphi$ 是 $H$ 的子群。',
            '子群 $N \\le G$ 称为**正规子群**，如果 $gNg^{-1} = N$ 对所有 $g \\in G$ 成立。此时可以在商集 $G/N$ 上定义群运算，得到**商群**。'
          ],
          intuition: [
            '同态是群之间的“保结构映射”，它把 $G$ 的运算关系翻译到 $H$ 中。核衡量同态丢失了多少信息：核越大，压缩越厉害。',
            '商群 $G/N$ 的思想是“把 $N$ 中的元素视为等同”。这类似于模算术：$\\mathbb{Z}/n\\mathbb{Z}$ 就是把相差 $n$ 的整数视为同一个。'
          ],
          formulas: [
            {
              tex: '\\varphi(ab) = \\varphi(a)\\varphi(b),\\quad \\varphi(e_G) = e_H,\\quad \\varphi(g^{-1}) = \\varphi(g)^{-1}',
              caption: '群同态的基本性质。'
            },
            {
              tex: 'G / \\ker \\varphi \\cong \\mathrm{im}\\,\\varphi',
              caption: '第一同构定理：商掉核同构于像。'
            },
            {
              tex: 'N \\trianglelefteq G \\iff gNg^{-1} = N\\ \\forall g \\in G',
              caption: '正规子群的定义。'
            }
          ],
          example: [
            '行列式 $\\det: GL_n(\\mathbb{R}) \\to \\mathbb{R}^{\\times}$ 是群同态，核为特殊线性群 $SL_n(\\mathbb{R})$，因此 $GL_n/SL_n \\cong \\mathbb{R}^{\\times}$。'
          ],
          related: ['groups-subgroups', 'group-actions', 'ideals']
        },
        {
          id: 'group-actions',
          name: '群作用',
          brief: '用群描述对象上的对称操作',
          keywords: ['群作用', '对称', 'Burnside 引理', '置换表示'],
          definition: [
            '群 $G$ 在集合 $X$ 上的**作用**是一个映射 $G \\times X \\to X$，$(g, x) \\mapsto g \\cdot x$，满足 $e \\cdot x = x$ 与 $(gh) \\cdot x = g \\cdot (h \\cdot x)$。',
            '等价地，作用是群同态 $G \\to \\mathrm{Sym}(X)$，即把每个群元素实现为 $X$ 的一个置换。'
          ],
          intuition: [
            '群作用把抽象群“实现”为具体的对称操作：旋转群作用在空间上，置换群作用在标号集合上。研究作用就得到群的具体信息。',
            '群作用统一了许多计数问题：用 Burnside 引理数“本质不同的染色方案”，用轨道分解理解对称性。'
          ],
          formulas: [
            {
              tex: 'G \\times X \\to X,\\quad (g, x) \\mapsto g \\cdot x',
              caption: '群作用的定义。'
            },
            {
              tex: '\\rho: G \\to \\mathrm{Sym}(X),\\quad g \\mapsto (x \\mapsto g \\cdot x)',
              caption: '作用等价于置换表示。'
            },
            {
              tex: '|X/G| = \\frac{1}{|G|} \\sum_{g \\in G} |X^g|',
              caption: 'Burnside 引理：轨道数等于平均不动点数。'
            }
          ],
          example: [
            '用两种颜色给正方形的四个顶点染色，共 $2^4 = 16$ 种；若把旋转后相同的方案视为同一种，用 Burnside 引理（旋转群 $C_4$ 作用）得到不同方案数为 $6$。'
          ],
          related: ['orbits-stabilizers', 'finite-groups', 'group-representations']
        },
        {
          id: 'orbits-stabilizers',
          name: '轨道与稳定子',
          brief: '追踪作用能到哪里及谁不动',
          keywords: ['轨道', '稳定子', '轨道-稳定子定理', '共轭类'],
          definition: [
            '设 $G$ 作用在 $X$ 上。点 $x \\in X$ 的**轨道** $\\mathrm{Orb}(x) = \\{g \\cdot x : g \\in G\\}$；**稳定子** $\\mathrm{Stab}(x) = \\{g \\in G : g \\cdot x = x\\}$ 是 $G$ 的子群。',
            '轨道-稳定子定理：$|\\mathrm{Orb}(x)| = [G : \\mathrm{Stab}(x)]$（对有限群即 $|G|/|\\mathrm{Stab}(x)|$）。'
          ],
          intuition: [
            '轨道是“$x$ 在对称操作下能到达的所有位置”，稳定子是“让 $x$ 不动的操作”。二者此消彼长：稳定子越大，轨道越小。',
            '对群作用在自身上的共轭作用，轨道就是共轭类，稳定子就是中心化子。类方程 $|G| = |Z(G)| + \\sum [G : C_G(x_i)]$ 是证明许多有限群定理的关键。'
          ],
          formulas: [
            {
              tex: '\\mathrm{Orb}(x) = \\{g \\cdot x : g \\in G\\},\\quad \\mathrm{Stab}(x) = \\{g \\in G : g \\cdot x = x\\}',
              caption: '轨道与稳定子的定义。'
            },
            {
              tex: '|\\mathrm{Orb}(x)| = [G : \\mathrm{Stab}(x)]',
              caption: '轨道-稳定子定理。'
            },
            {
              tex: '|G| = |Z(G)| + \\sum_{i} [G : C_G(x_i)]',
              caption: '类方程：按共轭类分解群的阶。'
            }
          ],
          example: [
            '$S_3$ 作用在 $\\{1, 2, 3\\}$ 上：轨道只有一个（传递作用），点 $1$ 的稳定子为 $\\{e, (23)\\}$，轨道大小 $3 = 6/2$。'
          ],
          related: ['group-actions', 'finite-groups', 'groups-subgroups']
        },
        {
          id: 'finite-groups',
          name: '有限群',
          brief: '研究有限对称结构及其分类',
          keywords: ['有限群', 'Sylow 定理', '单群', '分类'],
          definition: [
            '**有限群**是元素个数有限的群，元素个数称为阶。Lagrange 定理说明子群的阶整除群的阶，但反之不成立（如 $A_4$ 无 6 阶子群）。',
            '**Sylow 定理**给出部分逆命题：若 $p^k$ 整除 $|G|$，则 $G$ 有 $p^k$ 阶子群；特别地，Sylow $p$-子群存在且两两共轭。'
          ],
          intuition: [
            '有限群论的中心问题是分类：给定阶 $n$，一共有多少种同构的群？单群是“不可再分”的构件，有限单群分类定理（20 世纪数学的巨著）列出了所有有限单群。',
            '单群分类包含 18 个无限族与 26 个散在单群，其中最大的魔群（Monster）阶约为 $8 \\times 10^{53}$，与顶点算子代数、弦论有意外联系。'
          ],
          formulas: [
            {
              tex: '|G| = p^k m,\\ p \\nmid m \\implies n_p \\mid m,\\ n_p \\equiv 1 \\pmod p',
              caption: 'Sylow 定理：Sylow $p$-子群个数 $n_p$ 的约束。'
            },
            {
              tex: '|G| = p^2 \\implies G \\cong \\mathbb{Z}/p^2\\mathbb{Z}\\ \\text{或}\\ (\\mathbb{Z}/p\\mathbb{Z})^2',
              caption: '$p^2$ 阶群只有两种（交换群）。'
            }
          ],
          example: [
            '阶为 $pq$（$p < q$ 素数，$p \\nmid q-1$）的群必为循环群；例如 15 阶群只有 $\\mathbb{Z}/15\\mathbb{Z}$。'
          ],
          related: ['groups-subgroups', 'group-actions', 'lie-groups']
        }
      ]
    },
    {
      id: 'rings-fields',
      name: '环与域',
      en: 'RINGS & FIELDS',
      brief: '同时研究加法与乘法',
      color: '#5fb8e8',
      angle: 40,
      topics: [
        {
          id: 'ring-structure',
          name: '环的结构',
          brief: '同时研究加法与乘法',
          keywords: ['环', '整环', '域', '环同态'],
          definition: [
            '**环**是集合 $R$ 配两种运算 $(+, \\cdot)$：$(R, +)$ 是交换群，乘法满足结合律，且乘法对加法满足分配律。若乘法交换且有单位元，称为交换幺环；若还有每个非零元可逆，则称为**域**。',
            '没有零因子的交换幺环称为**整环**：$ab = 0 \\Rightarrow a = 0$ 或 $b = 0$。'
          ],
          intuition: [
            '环把整数、多项式、矩阵、函数等结构统一起来：它们都能加、能乘，但乘法性质各异。$\\mathbb{Z}$ 是整环不是域；$\\mathbb{R}$ 是域；$M_n(\\mathbb{R})$ 是环但有零因子且非交换。',
            '理想、商环、局部化等构造正是从“环的乘法结构”中生长出来的，它们对应数论中的整除与同余。'
          ],
          formulas: [
            {
              tex: '(a + b)c = ac + bc,\\quad a(b + c) = ab + ac',
              caption: '分配律。'
            },
            {
              tex: 'R \\text{ 是域} \\iff R \\text{ 是交换幺环且每个非零元可逆}',
              caption: '域的定义。'
            },
            {
              tex: '\\mathbb{Z} \\text{ 是整环但非域},\\quad \\mathbb{Q}, \\mathbb{R}, \\mathbb{C} \\text{ 是域}',
              caption: '典型例子。'
            }
          ],
          example: [
            '$\\mathbb{Z}/6\\mathbb{Z}$ 不是整环：$2 \\cdot 3 = 0$，但 $2, 3 \\ne 0$。而 $\\mathbb{Z}/p\\mathbb{Z}$（$p$ 素数）是域。'
          ],
          related: ['ideals', 'polynomial-rings', 'field-extensions']
        },
        {
          id: 'ideals',
          name: '理想',
          brief: '构造商环所需的特殊子集',
          keywords: ['理想', '商环', '极大理想', '素理想'],
          definition: [
            '环 $R$ 的子集 $I$ 称为**理想**，如果 $(I, +)$ 是加法子群，且对任意 $r \\in R, a \\in I$ 有 $ra \\in I$ 与 $ar \\in I$（双边理想）。',
            '理想对应商环：$R/I$ 在自然运算下构成环。$I$ 是极大理想当且仅当 $R/I$ 是域；$I$ 是素理想当且仅当 $R/I$ 是整环。'
          ],
          intuition: [
            '理想是“可以被视为零”的子集：在商环 $R/I$ 中，$I$ 的所有元素都变成零。整数环中 $n\\mathbb{Z}$ 是理想，商环就是模 $n$ 算术。',
            '理想替代了“元素”的角色：在代数数论中，代数整数环不一定有唯一分解，但**理想**有唯一分解，这修复了算术基本定理的失效。'
          ],
          formulas: [
            {
              tex: 'I \\trianglelefteq R \\iff (I, +) \\le (R, +)\\ \\text{且}\\ \\forall r \\in R,\\ rI \\subseteq I,\\ Ir \\subseteq I',
              caption: '理想的定义。'
            },
            {
              tex: 'I \\text{ 极大} \\iff R/I \\text{ 是域}',
              caption: '极大理想与域的一一对应。'
            },
            {
              tex: 'I \\text{ 素} \\iff R/I \\text{ 是整环}',
              caption: '素理想与整环的对应。'
            }
          ],
          example: [
            '$\\mathbb{Z}$ 中素理想恰为 $(p)$（$p$ 素数）与 $(0)$；$(p)$ 是极大理想，$\\mathbb{Z}/(p) = \\mathbb{F}_p$ 是域。'
          ],
          related: ['ring-structure', 'polynomial-rings', 'numbertheory/algebraic-integers']
        },
        {
          id: 'polynomial-rings',
          name: '多项式环',
          brief: '把多项式作为代数对象',
          keywords: ['多项式环', '不可约多项式', '唯一分解', '欧几里得整环'],
          definition: [
            '域 $F$ 上的多项式环 $F[x]$ 由形如 $a_n x^n + \\cdots + a_1 x + a_0$（$a_i \\in F$）的表达式组成，运算为多项式加法与乘法。',
            '$F[x]$ 是欧几里得整环：可以做带余除法；因此也是主理想整环与唯一分解整环。不可约多项式在 $F[x]$ 中扮演素数的角色。'
          ],
          intuition: [
            '多项式环把“多项式”从函数提升为代数对象：$x$ 不必是某个数，$x^2 + 1$ 在 $\\mathbb{R}$ 上不可约，但在 $\\mathbb{C}$ 上分解为 $(x-i)(x+i)$。',
            '扩域正是通过“模掉一个不可约多项式”构造的：$\\mathbb{C} \\cong \\mathbb{R}[x]/(x^2+1)$。多项式环因此是域论与代数几何的起点。'
          ],
          formulas: [
            {
              tex: 'f(x) = q(x)g(x) + r(x),\\quad \\deg r < \\deg g',
              caption: '带余除法（$F$ 为域）。'
            },
            {
              tex: '\\mathbb{C} \\cong \\mathbb{R}[x]/(x^2 + 1)',
              caption: '用不可约多项式构造复数域。'
            },
            {
              tex: 'F[x] \\text{ 是唯一分解整环}',
              caption: '多项式环的唯一分解性质。'
            }
          ],
          example: [
            '在 $\\mathbb{F}_2[x]$ 中，$x^2 + x + 1$ 不可约（无根），因此 $\\mathbb{F}_2[x]/(x^2+x+1) \\cong \\mathbb{F}_4$ 是 4 元域。'
          ],
          related: ['ring-structure', 'ideals', 'finite-fields']
        },
        {
          id: 'finite-fields',
          name: '有限域',
          brief: '具有有限个元素的域',
          keywords: ['有限域', 'F_p', 'F_{p^n}', '乘法群'],
          definition: [
            '**有限域**是元素个数有限的域。任何有限域的元素个数都是某个素数幂 $p^n$；对每个素数幂 $q = p^n$，存在唯一的（同构意义下）$q$ 元域，记 $\\mathbb{F}_q$。',
            '有限域的加法群是 $(\\mathbb{Z}/p\\mathbb{Z})^n$，乘法群 $\\mathbb{F}_q^{\\times}$ 是 $q-1$ 阶循环群。'
          ],
          intuition: [
            '有限域是“模 $p$ 算术”的自然推广：$\\mathbb{F}_p = \\mathbb{Z}/p\\mathbb{Z}$，而 $\\mathbb{F}_{p^n}$ 可以看作系数在 $\\mathbb{F}_p$ 中的多项式模一个 $n$ 次不可约多项式。',
            '有限域是编码理论、密码学与组合设计的核心工具：Reed–Solomon 码、AES 中的 $\\mathbb{F}_{256}$、椭圆曲线密码都建立在有限域上。'
          ],
          formulas: [
            {
              tex: '|\\mathbb{F}_q| = q = p^n',
              caption: '有限域的阶必为素数幂。'
            },
            {
              tex: '\\mathbb{F}_q^{\\times} \\cong \\mathbb{Z}/(q-1)\\mathbb{Z}',
              caption: '有限域的乘法群是循环群。'
            },
            {
              tex: 'x^q = x\\ \\forall x \\in \\mathbb{F}_q',
              caption: '有限域中每个元素都是 $x^q - x$ 的根。'
            }
          ],
          example: [
            '$\\mathbb{F}_4 = \\mathbb{F}_2[x]/(x^2 + x + 1)$，元素为 $\\{0, 1, \\omega, \\omega + 1\\}$，其中 $\\omega^2 = \\omega + 1$，乘法群为 3 阶循环群。'
          ],
          related: ['polynomial-rings', 'field-extensions', 'discrete/error-correcting-codes']
        },
        {
          id: 'field-extensions',
          name: '域扩张',
          brief: '在较小数域中添加新元素',
          keywords: ['域扩张', '代数扩张', '次数', '极小多项式'],
          definition: [
            '若 $F \\subseteq K$ 都是域，称 $K/F$ 为**域扩张**。$K$ 作为 $F$-向量空间的维数称为扩张的**次数** $[K : F]$，有限时称有限扩张。',
            '若 $\\alpha \\in K$ 是某个非零 $F[x]$ 多项式的根，称为**代数元**，否则为**超越元**；若 $K$ 中每个元素都在 $F$ 上代数，称 $K/F$ 为代数扩张。'
          ],
          intuition: [
            '域扩张是“解方程的需要”产生的：$\\mathbb{Q}(\\sqrt2)$ 是在 $\\mathbb{Q}$ 中添加 $\\sqrt2$ 得到的最小域，次数为 2。',
            '次数是乘性的：$[L : F] = [L : K][K : F]$。这一简单性质是伽罗瓦理论中“塔定理”的基础，也是证明古希腊三大作图不可能的关键。'
          ],
          formulas: [
            {
              tex: '[K : F] = \\dim_F K',
              caption: '扩张次数定义为 $K$ 作为 $F$-向量空间的维数。'
            },
            {
              tex: '[L : F] = [L : K]\\,[K : F]',
              caption: '次数的乘性（塔定理）。'
            },
            {
              tex: '\\mathbb{Q}(\\sqrt2) = \\{a + b\\sqrt2 : a, b \\in \\mathbb{Q}\\},\\quad [\\mathbb{Q}(\\sqrt2):\\mathbb{Q}] = 2',
              caption: '二次扩张的例子。'
            }
          ],
          example: [
            '$\\pi$ 是 $\\mathbb{Q}$ 上的超越元（Lindemann 1882），因此 $\\mathbb{Q}(\\pi)$ 是无限次扩张，不能通过有限次代数扩张得到。'
          ],
          related: ['polynomial-rings', 'finite-fields', 'galois-group']
        }
      ]
    },
    {
      id: 'representation-theory',
      name: '表示论',
      en: 'REPRESENTATION THEORY',
      brief: '用线性变换理解抽象代数结构',
      color: '#8fc8f5',
      angle: -5,
      topics: [
        {
          id: 'group-representations',
          name: '群表示',
          brief: '把群元素变成线性变换',
          keywords: ['群表示', '矩阵表示', '特征标', '表示维数'],
          definition: [
            '群 $G$ 在向量空间 $V$ 上的**表示**是一个群同态 $\\rho: G \\to GL(V)$，即把每个群元素对应为可逆线性变换。选定基后，$\\rho(g)$ 就是可逆矩阵。',
            '表示的**维数**是 $\\dim V$；**特征标**定义为 $\\chi_\\rho(g) = \\mathrm{tr}\\,\\rho(g)$，它是类函数（在共轭类上取值相同）。'
          ],
          intuition: [
            '表示论把抽象群“翻译”为线性代数：群元素变成矩阵，群运算变成矩阵乘法。这样就能用特征值、迹、内积等工具研究群。',
            '同一个群可以有许多表示：平凡表示、正则表示、置换表示。表示论的目标是把任意表示分解为不可约表示的直和。'
          ],
          formulas: [
            {
              tex: '\\rho: G \\to GL(V),\\quad \\rho(gh) = \\rho(g)\\rho(h)',
              caption: '表示是同态。'
            },
            {
              tex: '\\chi_\\rho(g) = \\mathrm{tr}(\\rho(g)),\\quad \\chi_\\rho(hgh^{-1}) = \\chi_\\rho(g)',
              caption: '特征标是类函数。'
            },
            {
              tex: '|G| = \\sum_{i} d_i^2',
              caption: '有限群的所有不可约表示维数 $d_i$ 满足的维数公式。'
            }
          ],
          example: [
            '$S_3$ 的置换表示：自然作用在 $\\mathbb{R}^3$ 上，可分解为平凡表示与标准二维不可约表示的直和。'
          ],
          related: ['invariant-subspaces', 'irreducible-representations', 'characters']
        },
        {
          id: 'invariant-subspaces',
          name: '不变子空间',
          brief: '在表示作用下保持的子空间',
          keywords: ['不变子空间', '子表示', '完全可约', 'Maschke 定理'],
          definition: [
            '表示 $(\\rho, V)$ 的子空间 $W \\subseteq V$ 称为**不变子空间**（或子表示），如果 $\\rho(g)W \\subseteq W$ 对所有 $g \\in G$ 成立。',
            '若 $V$ 只有平凡的不变子空间 $\\{0\\}$ 与 $V$，则称为**不可约表示**。有限群在特征零域上的每个表示都完全可约（Maschke 定理），即分解为不可约表示的直和。'
          ],
          intuition: [
            '不变子空间是表示作用的“封闭区域”：从 $W$ 出发，任何群元素都把你留在 $W$ 中。找到不变子空间就可以把表示拆小。',
            'Maschke 定理说明有限群的表示总是可以拆到最细，这使得有限群表示论变成“特征标理论”——问题归结为研究不可约成分。'
          ],
          formulas: [
            {
              tex: '\\rho(g)W \\subseteq W\\quad \\forall g \\in G',
              caption: '不变子空间的定义。'
            },
            {
              tex: 'V \\text{ 完全可约} \\iff V = W_1 \\oplus \\cdots \\oplus W_k\\ \\text{（不可约）}',
              caption: '完全可约分解。'
            }
          ],
          example: [
            '$S_3$ 的二维标准表示不可约；而 $\\mathbb{R}^3$ 的置换表示分解为“常数向量”与“和为零的向量”两个不变子空间。'
          ],
          related: ['group-representations', 'irreducible-representations', 'characters']
        },
        {
          id: 'irreducible-representations',
          name: '不可约表示',
          brief: '没有非平凡不变子空间',
          keywords: ['不可约表示', 'Schur 引理', '特征标正交', '维数'],
          definition: [
            '表示 $(\\rho, V)$ 称为**不可约**的，如果 $V \\ne 0$ 且没有非平凡的不变子空间。不可约表示是表示论中的“原子”。',
            '**Schur 引理**：若 $V, W$ 是不可约表示，且 $T: V \\to W$ 是 $G$-等变映射，则 $T = 0$ 或 $T$ 是同构；特别地，若 $V = W$，则 $T = \\lambda I$。'
          ],
          intuition: [
            '不可约表示无法再拆小，因此是分类的基本单位。任何有限维表示都可以分解为不可约表示的直和（在完全可约情形）。',
            'Schur 引理连接表示与代数：它说明不可约表示的等变自同态只有数乘，从而导出特征标的正交关系与 Burnside 定理（$p^a q^b$ 阶群可解）。'
          ],
          formulas: [
            {
              tex: 'T \\in \\mathrm{Hom}_G(V, W) \\implies T = 0 \\ \\text{或}\\ T \\text{ 是同构}',
              caption: 'Schur 引理。'
            },
            {
              tex: '\\langle \\chi_i, \\chi_j \\rangle = \\frac{1}{|G|} \\sum_{g \\in G} \\overline{\\chi_i(g)}\\chi_j(g) = \\delta_{ij}',
              caption: '不可约特征标的正交关系。'
            }
          ],
          example: [
            '$S_3$ 有两个一维不可约表示（平凡与符号）和一个二维不可约表示；维数平方和 $1^2 + 1^2 + 2^2 = 6 = |S_3|$。'
          ],
          related: ['group-representations', 'invariant-subspaces', 'characters']
        }
      ]
    },
    {
      id: 'lie-theory',
      name: '李群与李代数',
      en: 'LIE GROUPS & ALGEBRAS',
      brief: '连续对称及其无穷小结构',
      color: '#6cb6e8',
      angle: -50,
      topics: [
        {
          id: 'lie-groups',
          name: '李群',
          brief: '兼具群结构与光滑流形结构',
          keywords: ['李群', '流形', '矩阵群', '连续对称'],
          definition: [
            '**李群**是一个集合 $G$，同时具有群结构与光滑流形结构，且群运算 $G \\times G \\to G$（乘法）与 $G \\to G$（取逆）都是光滑映射。',
            '典型例子：一般线性群 $GL_n(\\mathbb{R})$、特殊正交群 $SO(n)$、特殊酉群 $SU(n)$、圆群 $S^1$。'
          ],
          intuition: [
            '李群把“连续变化的对称”变成几何对象：旋转角连续变化，所有旋转构成一个流形。群结构描述对称的复合，流形结构描述变化是连续的。',
            '李群既有代数结构又有微分结构，因此可以用李代数（切空间）局部研究它；这是几何、物理与表示论的交叉点。'
          ],
          formulas: [
            {
              tex: '\\mu: G \\times G \\to G,\\quad (g, h) \\mapsto gh,\\qquad \\iota: G \\to G,\\quad g \\mapsto g^{-1}',
              caption: '群运算必须是光滑映射。'
            },
            {
              tex: 'SO(n) = \\{A \\in GL_n(\\mathbb{R}) : A^\\top A = I,\\ \\det A = 1\\}',
              caption: '特殊正交群：$n$ 维旋转群。'
            }
          ],
          example: [
            '$S^1 = \\{e^{i\\theta} : \\theta \\in \\mathbb{R}\\}$ 在复数乘法下是李群，其切空间在单位元处是一维实直线，对应李代数 $\\mathfrak{u}(1)$。'
          ],
          related: ['lie-algebras', 'geometry/smooth-manifolds', 'rotation-groups']
        },
        {
          id: 'lie-algebras',
          name: '李代数',
          brief: '描述连续对称的无穷小结构',
          keywords: ['李代数', '切空间', 'Jacobi 恒等式', '半单'],
          definition: [
            '李群 $G$ 的单位元处切空间 $\\mathfrak{g} = T_e G$ 在**李括号**运算下构成**李代数**：$\\mathfrak{g}$ 是向量空间，配有双线性、反对称且满足 Jacobi 恒等式的括号 $[\\cdot, \\cdot]$。',
            '对于矩阵李群，李括号就是交换子 $[X, Y] = XY - YX$。李代数完全决定了李群的局部结构（同一李代数的连通李群彼此局部同构）。'
          ],
          intuition: [
            '李群研究“整体对称”，李代数研究“无穷小对称”：旋转角很小时，旋转矩阵近似为 $I + \\theta K$，$K$ 就是李代数元素。',
            '把非线性问题线性化：李群上的微分方程、表示与几何问题可以转化为李代数上的线性代数问题，这是李理论的基本策略。'
          ],
          formulas: [
            {
              tex: '[X, Y] = XY - YX',
              caption: '矩阵李群的李括号。'
            },
            {
              tex: '[X, [Y, Z]] + [Y, [Z, X]] + [Z, [X, Y]] = 0',
              caption: 'Jacobi 恒等式。'
            },
            {
              tex: 'T_e G = \\mathfrak{g}',
              caption: '李代数是单位元处的切空间。'
            }
          ],
          example: [
            '$SO(3)$ 的李代数 $\\mathfrak{so}(3)$ 是 3 维反对称矩阵空间，与 $\\mathbb{R}^3$ 同构，李括号对应向量叉积。'
          ],
          related: ['lie-groups', 'lie-bracket', 'exponential-map']
        },
        {
          id: 'lie-bracket',
          name: '李括号',
          brief: '编码无穷小操作的非交换性',
          keywords: ['李括号', '交换子', '非交换', '结构常数'],
          definition: [
            '李括号 $[\\cdot, \\cdot]: \\mathfrak{g} \\times \\mathfrak{g} \\to \\mathfrak{g}$ 是双线性、反对称且满足 Jacobi 恒等式的运算。它衡量两个无穷小变换“交换与否”。',
            '在基 $\\{e_i\\}$ 下，$[e_i, e_j] = \\sum_k c_{ij}^k e_k$，系数 $c_{ij}^k$ 称为**结构常数**。'
          ],
          intuition: [
            '李括号 $[X, Y] = 0$ 表示两个方向的无穷小变换可交换；$[X, Y] \\ne 0$ 表示沿 $X$ 再沿 $Y$ 与反序会产生一阶差异。',
            '矩阵情形：$[X,Y]$ 是交换子，衡量 $XY$ 与 $YX$ 的差。量子力学中的正则对易关系 $[\\hat x, \\hat p] = i\\hbar$ 就是李括号的物理体现。'
          ],
          formulas: [
            {
              tex: '[X, Y] = -[Y, X]',
              caption: '反对称性。'
            },
            {
              tex: '[X, [Y, Z]] + [Y, [Z, X]] + [Z, [X, Y]] = 0',
              caption: 'Jacobi 恒等式。'
            },
            {
              tex: '[e_i, e_j] = \\sum_k c_{ij}^k e_k',
              caption: '结构常数。'
            }
          ],
          example: [
            '在 $\\mathfrak{so}(3)$ 中，$[J_1, J_2] = J_3$，对应旋转的角动量代数；$[J_1, J_1] = 0$。'
          ],
          related: ['lie-algebras', 'lie-groups', 'exponential-map']
        },
        {
          id: 'exponential-map',
          name: '指数映射',
          brief: '把李代数局部信息送入李群',
          keywords: ['指数映射', '单参数子群', '矩阵指数', '局部同构'],
          definition: [
            '**指数映射** $\\exp: \\mathfrak{g} \\to G$ 把李代数元素映为李群元素。对矩阵李群，$\\exp(X) = \\sum_{k=0}^{\\infty} \\frac{X^k}{k!}$。',
            '每个 $X \\in \\mathfrak{g}$ 生成单参数子群 $t \\mapsto \\exp(tX)$，它是以 $X$ 为“速度”的连续对称路径。'
          ],
          intuition: [
            '指数映射把“无穷小运动”积分成有限运动：$X$ 是速度，$\\exp(tX)$ 是经过时间 $t$ 后的位置。旋转群中，$\\exp(\\theta J)$ 就是旋转角为 $\\theta$ 的旋转。',
            '指数映射在单位元附近是局部微分同胚（由逆函数定理），因此李代数在局部完全决定了李群。但全局上它可能不满射（如 $SO(2)$ 的指数映射满射，但 $GL_n$ 的指数映射不满射）。'
          ],
          formulas: [
            {
              tex: '\\exp(X) = \\sum_{k=0}^{\\infty} \\frac{X^k}{k!}',
              caption: '矩阵指数（李群为矩阵群时）。'
            },
            {
              tex: '\\gamma_X(t) = \\exp(tX)',
              caption: '由 $X$ 生成的单参数子群。'
            },
            {
              tex: '\\frac{d}{dt}\\Big|_{t=0} \\exp(tX) = X',
              caption: '指数映射的微分是恒等映射：$d\\exp_0 = \\mathrm{id}_{\\mathfrak{g}}$。'
            }
          ],
          example: [
            '$\\mathfrak{so}(2)$ 由 $J = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$ 张成，$\\exp(\\theta J) = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$，正是旋转矩阵。'
          ],
          related: ['lie-algebras', 'lie-groups', 'rotation-groups']
        },
        {
          id: 'characters',
          name: '特征标',
          brief: '用矩阵的迹记录表示信息',
          keywords: ['特征标', 'Weyl 特征标公式', '表示环', '权'],
          definition: [
            '李代数表示 $\\rho: \\mathfrak{g} \\to \\mathfrak{gl}(V)$ 的**特征标**是函数 $\\chi_\\rho(X) = \\mathrm{tr}\\,\\rho(X)$。对李群表示，特征标为 $\\chi(g) = \\mathrm{tr}\\,\\rho(g)$，它在共轭类上为常数。',
            'Weyl 特征标公式用最高权刻画不可约表示的特征标，是李理论的核心结果之一。'
          ],
          intuition: [
            '特征标是表示的不变量：它忽略基的选择，只保留每个群元素的迹。两个表示若特征标相同，则它们的不可约成分相同。',
            '对紧李群，特征标是类函数，可以用 Fourier 分析（Peter–Weyl 定理）展开，从而把表示论与调和分析联系起来。'
          ],
          formulas: [
            {
              tex: '\\chi_\\rho(X) = \\mathrm{tr}\\,\\rho(X)',
              caption: '李代数表示的特征标。'
            },
            {
              tex: '\\chi_\\rho(hgh^{-1}) = \\chi_\\rho(g)',
              caption: '李群特征标是共轭类函数。'
            }
          ],
          example: [
            '$SU(2)$ 的不可约表示由自旋 $j = 0, \\frac12, 1, \\dots$ 分类，维数 $2j+1$；其特征标为 $\\chi_j(\\theta) = \\frac{\\sin((2j+1)\\theta/2)}{\\sin(\\theta/2)}$。'
          ],
          related: ['group-representations', 'irreducible-representations', 'lie-algebras']
        },
        {
          id: 'rotation-groups',
          name: '旋转群',
          brief: '描述空间旋转的连续对称',
          keywords: ['旋转群', 'SO(3)', 'SU(2)', '四元数', '双覆盖'],
          definition: [
            '$n$ 维**旋转群** $SO(n) = \\{A \\in GL_n(\\mathbb{R}) : A^\\top A = I,\\ \\det A = 1\\}$ 是保持欧氏距离与定向的线性变换群。',
            '$SU(2)$ 是 $2 \\times 2$ 特殊酉矩阵群，它到 $SO(3)$ 存在二对一的满同态 $SU(2) \\to SO(3)$，核为 $\\{\\pm I\\}$。'
          ],
          intuition: [
            '$SO(3)$ 描述三维空间中的旋转：每个旋转由一个轴与一个角度决定（轴角表示），也可以由四元数表示。',
            '$SU(2)$ 是 $SO(3)$ 的**双覆盖**（万有覆盖）：旋转 $2\\pi$ 在 $SO(3)$ 中回到原位，但在 $SU(2)$ 中对应 $-I$，需要旋转 $4\\pi$ 才真正回到单位。这正是自旋 $\\frac12$ 粒子的数学根源。'
          ],
          formulas: [
            {
              tex: 'SO(3) = \\{R \\in GL_3(\\mathbb{R}) : R^\\top R = I,\\ \\det R = 1\\}',
              caption: '三维旋转群。'
            },
            {
              tex: 'SU(2) \\to SO(3),\\quad \\ker = \\{\\pm I\\}',
              caption: '$SU(2)$ 是 $SO(3)$ 的二重覆盖。'
            },
            {
              tex: '\\mathfrak{so}(3) \\cong \\mathbb{R}^3,\\quad [X, Y] \\leftrightarrow X \\times Y',
              caption: '旋转群的李代数对应向量叉积。'
            }
          ],
          example: [
            '单位四元数群 $\\{a + bi + cj + dk : a^2+b^2+c^2+d^2=1\\}$ 与 $SU(2)$ 同构，是计算机图形学中表示三维旋转的标准工具。'
          ],
          related: ['lie-groups', 'lie-algebras', 'exponential-map']
        }
      ]
    }
  ]
};