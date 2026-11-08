/* 数学知识地图 · 代数（下） */
window.ATLAS.subjects.algebra.branches.push(
  {
    id: 'homological-algebra',
    name: '同调代数',
    en: 'HOMOLOGICAL ALGEBRA',
    brief: '用复形与同调组织结构信息',
    color: '#5aa9dd',
    angle: -95,
    topics: [
      {
        id: 'chain-complexes',
        name: '链复形',
        brief: '相邻微分复合为零的序列',
        keywords: ['链复形', '微分', '复形', '链映射'],
        definition: [
          '**链复形**是一族模（或向量空间）$C_n$ 与同态 $d_n: C_n \\to C_{n-1}$，满足 $d_{n-1} \\circ d_n = 0$（即 $\\mathrm{im}\\,d_n \\subseteq \\ker d_{n-1}$）。',
          '复形可以直观地写成 $\\cdots \\to C_{n+1} \\xrightarrow{d_{n+1}} C_n \\xrightarrow{d_n} C_{n-1} \\to \\cdots$。$d$ 称为微分或边界算子。'
        ],
        intuition: [
          '链复形把“边界”的拓扑思想代数化：$d$ 作用两次得零，意味着“边界的边界为空”。三角形三条边围成闭链，而闭链没有边界。',
          '$d^2 = 0$ 是全部同调代数的起点：它保证可以定义同调 $\\ker d / \\mathrm{im}\\,d$，度量“闭链中有多少不是边界”。'
        ],
        formulas: [
          {
            tex: '\\cdots \\to C_{n+1} \\xrightarrow{d_{n+1}} C_n \\xrightarrow{d_n} C_{n-1} \\to \\cdots',
            caption: '链复形。'
          },
          {
            tex: 'd_{n-1} \\circ d_n = 0',
            caption: '微分的复合为零。'
          },
          {
            tex: 'H_n(C) = \\ker d_n / \\mathrm{im}\\,d_{n+1}',
            caption: '第 $n$ 个同调群。'
          }
        ],
        example: [
          '单纯复形的链复形：$C_n$ 由 $n$ 维单形生成，$d_n$ 取边界；三角形的情形满足 $\\partial(\\partial \\Delta) = 0$，同调 $H_1 = 0$。'
        ],
        related: ['homology-groups', 'exact-sequences', 'derived-functors']
      },
      {
        id: 'exact-sequences',
        name: '正合列',
        brief: '精确描述像与核的衔接',
        keywords: ['正合列', '短正合列', '分裂', '蛇引理'],
        definition: [
          '复形 $\\cdots \\to A \\xrightarrow{f} B \\xrightarrow{g} C \\to \\cdots$ 在 $B$ 处**正合**，如果 $\\mathrm{im}\\,f = \\ker g$。若所有位置都正合，则称该序列为正合列。',
          '**短正合列**形如 $0 \\to A \\xrightarrow{f} B \\xrightarrow{g} C \\to 0$，等价于 $f$ 是单射、$g$ 是满射且 $C \\cong B/f(A)$。'
        ],
        intuition: [
          '正合列是“精确的守恒”：从左边进来的像，恰好是右边要被消去的核，没有多余也没有遗漏。短正合列 $0 \\to A \\to B \\to C \\to 0$ 表示 $B$ 由 $A$ 与 $C$ “拼成”（可能是直和，也可能有扭结）。',
          '正合列把同态的信息压缩成链条：长正合列（如 Mayer–Vietoris、同调长正合列）是同调代数的核心计算工具。'
        ],
        formulas: [
          {
            tex: '0 \\to A \\xrightarrow{f} B \\xrightarrow{g} C \\to 0',
            caption: '短正合列：$f$ 单射、$g$ 满射、$\\mathrm{im}\\,f = \\ker g$。'
          },
          {
            tex: '\\mathrm{im}\\,f = \\ker g',
            caption: '正合性的定义。'
          },
          {
            tex: '0 \\to A \\to A \\oplus C \\to C \\to 0',
            caption: '分裂的短正合列（直和情形）。'
          }
        ],
        example: [
          '$0 \\to \\mathbb{Z} \\xrightarrow{\\times n} \\mathbb{Z} \\to \\mathbb{Z}/n\\mathbb{Z} \\to 0$ 是短正合列，它不分裂（除非 $n = 1$）。'
        ],
        related: ['chain-complexes', 'derived-functors', 'modules']
      },
      {
        id: 'homology-groups',
        name: '同调群',
        brief: '度量循环与边界的差异',
        keywords: ['同调群', '闭链', '边界', 'Betti 数'],
        definition: [
          '链复形的第 $n$ 个**同调群**为 $H_n = \\ker d_n / \\mathrm{im}\\,d_{n+1}$。$\\ker d_n$ 中的元素称为**闭链**，$\\mathrm{im}\\,d_{n+1}$ 中的元素称为**边界**。',
          '同调群度量“闭链中有多少不能被填成边界”。若 $H_n = 0$，则每个 $n$ 维闭链都是边界。'
        ],
        intuition: [
          '在拓扑空间中，$H_1$ 计数“洞”：圆周 $S^1$ 有 $H_1 \\cong \\mathbb{Z}$，因为绕一圈的闭链不是任何二维区域的边界。',
          '同调比基本群更容易计算（阿贝尔化），并且在高维有统一理论。Betti 数 $b_n = \\mathrm{rank}\\,H_n$ 是拓扑空间的数值不变量。'
        ],
        formulas: [
          {
            tex: 'H_n = \\ker d_n / \\mathrm{im}\\,d_{n+1}',
            caption: '同调群的定义。'
          },
          {
            tex: 'H_0(S^1) \\cong \\mathbb{Z},\\quad H_1(S^1) \\cong \\mathbb{Z},\\quad H_n(S^1) = 0\\ (n \\ge 2)',
            caption: '圆周的同调群。'
          },
          {
            tex: '\\chi = \\sum_{n} (-1)^n b_n',
            caption: 'Euler 示性数等于 Betti 数的交错和。'
          }
        ],
        example: [
          '环面 $T^2$ 的各阶 Betti 数为 $1, 2, 1$，因此 $\\chi(T^2) = 0$；这与 $V - E + F = 0$ 一致。'
        ],
        related: ['chain-complexes', 'exact-sequences', 'geometry/euler-characteristic']
      },
      {
        id: 'derived-functors',
        name: '导出函子',
        brief: '记录函子偏离正合的方式',
        keywords: ['导出函子', '左导出', '右导出', '消解'],
        definition: [
          '若函子 $F$ 不是正合的，可以用投射消解或内射消解构造**导出函子** $L_i F$ 或 $R^i F$，度量 $F$ 保持正合性的失败程度。',
          '例如 $\\mathrm{Hom}(M, -)$ 是左正合函子，其右导出函子是 $\\mathrm{Ext}^i_R(M, -)$；张量积 $- \\otimes_R N$ 是右正合函子，其左导出函子是 $\\mathrm{Tor}_i^R(-, N)$。'
        ],
        intuition: [
          '导出函子是“修正过的函子”：原函子只保留一半正合性，导出函子把丢失的信息逐层记录在 $L_i F$ 或 $R^i F$ 中。',
          '它们把短正合列转化为长正合列，例如 $0 \\to \\mathrm{Hom}(M, A) \\to \\mathrm{Hom}(M, B) \\to \\mathrm{Hom}(M, C) \\to \\mathrm{Ext}^1(M, A) \\to \\cdots$。这是同调代数的核心机器。'
        ],
        formulas: [
          {
            tex: 'R^i F(A),\\quad L_i F(A)',
            caption: '右导出与左导出函子。'
          },
          {
            tex: '0 \\to \\mathrm{Hom}(M, A) \\to \\mathrm{Hom}(M, B) \\to \\mathrm{Hom}(M, C) \\to \\mathrm{Ext}^1(M, A) \\to \\cdots',
            caption: '由短正合列得到的长正合列。'
          }
        ],
        example: [
          '$\\mathrm{Ext}^1_{\\mathbb{Z}}(\\mathbb{Z}/n, \\mathbb{Z}) \\cong \\mathbb{Z}/n$，它度量 $\\mathbb{Z}/n$ 对 $\\mathbb{Z}$ 的扩张不平凡程度。'
        ],
        related: ['ext-tor', 'exact-sequences', 'chain-complexes']
      },
      {
        id: 'ext-tor',
        name: 'Ext 与 Tor',
        brief: '研究扩张与张量积的同调信息',
        keywords: ['Ext', 'Tor', '扩张', 'Künneth'],
        definition: [
          '$\\mathrm{Ext}^n_R(M, N)$ 是函子 $\\mathrm{Hom}_R(M, -)$ 的右导出函子；$\\mathrm{Tor}_n^R(M, N)$ 是函子 $- \\otimes_R N$ 的左导出函子。',
          '$\\mathrm{Ext}^1$ 分类 $N$ 被 $M$ 的扩张（短正合列 $0 \\to N \\to E \\to M \\to 0$ 的同构类）；$\\mathrm{Tor}_1$ 度量张量积与正合性的偏差。'
        ],
        intuition: [
          '当模是投射（或自由）的，Ext 与 Tor 消失；它们只在模有“扭结”时非零。例如 $\\mathbb{Z}/n$ 不是自由的，所以 $\\mathrm{Tor}$ 非零。',
          '在拓扑学中，Künneth 公式用 Tor 计算乘积空间的同调；在代数几何中，Ext 描述层的扩张。'
        ],
        formulas: [
          {
            tex: '\\mathrm{Ext}^1_R(M, N) \\cong \\{\\text{$N$ 被 $M$ 的扩张}\\} / \\cong',
            caption: '$\\mathrm{Ext}^1$ 分类扩张。'
          },
          {
            tex: '\\mathrm{Tor}_1^{\\mathbb{Z}}(\\mathbb{Z}/n, \\mathbb{Z}/m) \\cong \\mathbb{Z}/\\gcd(n, m)',
            caption: '整数环上的 Tor 计算。'
          },
          {
            tex: 'M \\text{ 投射} \\implies \\mathrm{Ext}^i(M, -) = 0\\ (i > 0)',
            caption: '投射模的高阶 Ext 消失。'
          }
        ],
        example: [
          '$\\mathrm{Ext}^1_{\\mathbb{Z}}(\\mathbb{Z}/n, \\mathbb{Z}/n) \\cong \\mathbb{Z}/n$：存在 $n$ 种不同的扩张，对应 $\\mathbb{Z}/n^2$ 等结构。'
        ],
        related: ['derived-functors', 'modules', 'chain-complexes']
      }
    ]
  },
  {
    id: 'commutative-algebra',
    name: '交换代数',
    en: 'COMMUTATIVE ALGEBRA',
    brief: '研究交换环及其模',
    color: '#6fb0e0',
    angle: -140,
    topics: [
      {
        id: 'noetherian',
        name: '诺特性质',
        brief: '用有限生成控制理想链',
        keywords: ['诺特环', '升链条件', 'Hilbert 基定理', '有限生成'],
        definition: [
          '环 $R$ 称为**诺特环**，如果它的理想满足升链条件：任何理想升链 $I_1 \\subseteq I_2 \\subseteq \\cdots$ 最终稳定；等价地，每个理想都有限生成。',
          'Hilbert 基定理：若 $R$ 是诺特环，则多项式环 $R[x]$ 也是诺特环。因此 $k[x_1, \\dots, x_n]$ 是诺特环。'
        ],
        intuition: [
          '诺特条件是“有限性”的抽象：它排除无限严格上升的理想链，使许多代数构造可以在有限步完成。',
          '诺特环是现代代数几何的基础：Hilbert 基定理保证多项式环的理想有限生成，从而代数簇可以由有限多个方程定义。'
        ],
        formulas: [
          {
            tex: 'I_1 \\subseteq I_2 \\subseteq \\cdots \\implies \\exists N:\\ I_n = I_N\\ \\forall n \\ge N',
            caption: '升链条件。'
          },
          {
            tex: 'R \\text{ 诺特} \\implies R[x] \\text{ 诺特}',
            caption: 'Hilbert 基定理。'
          }
        ],
        example: [
          '$k[x_1, \\dots, x_n]$ 是诺特环（$k$ 为域），因此每个代数簇都可由有限多个多项式方程定义。'
        ],
        related: ['prime-ideals', 'dimension-theory', 'ideals']
      },
      {
        id: 'localization',
        name: '局部化',
        brief: '集中研究选定位置附近的性质',
        keywords: ['局部化', '分式环', '局部环', '局部性质'],
        definition: [
          '设 $S \\subseteq R$ 是乘法闭集（不含零因子），**局部化** $S^{-1}R$ 由分式 $r/s$（$r \\in R, s \\in S$）组成，运算与分数相同。',
          '当 $S = R \\setminus \\mathfrak{p}$（$\\mathfrak{p}$ 为素理想）时，得到在 $\\mathfrak{p}$ 处的局部化 $R_{\\mathfrak{p}}$，它是**局部环**（唯一极大理想）。'
        ],
        intuition: [
          '局部化就是“允许用 $S$ 中元素作分母”。$\\mathbb{Z}$ 在素数 $p$ 处局部化得到 $\\mathbb{Z}_{(p)}$，只保留分母不被 $p$ 整除的分数，聚焦于 $p$ 附近的算术。',
          '局部化让“局部性质”可以形式化：一个性质在每处局部成立，是否能推出整体成立？这在代数几何中对应“局部→整体”原则。'
        ],
        formulas: [
          {
            tex: 'S^{-1}R = \\{r/s : r \\in R,\\ s \\in S\\}',
            caption: '局部化的元素。'
          },
          {
            tex: 'R_{\\mathfrak{p}} = (R \\setminus \\mathfrak{p})^{-1}R',
            caption: '在素理想 $\\mathfrak{p}$ 处的局部化，是局部环。'
          }
        ],
        example: [
          '$\\mathbb{Z}_{(p)} = \\{a/b : p \\nmid b\\}$ 是局部环，其唯一极大理想为 $p\\mathbb{Z}_{(p)}$。'
        ],
        related: ['prime-ideals', 'noetherian', 'geometry/schemes']
      },
      {
        id: 'modules',
        name: '模',
        brief: '把向量空间推广到环上',
        keywords: ['模', '自由模', '张量积', '有限生成模'],
        definition: [
          '环 $R$ 上的**左模** $M$ 是交换群，配有标量乘法 $R \\times M \\to M$，满足与向量空间相同的公理（分配律、结合律、单位元作用）。',
          '模是“环上的向量空间”，但环的元素不一定可逆，因此模的性质比向量空间复杂得多：可能没有基，可能有扭结。'
        ],
        intuition: [
          '$\\mathbb{Z}$-模就是交换群：标量乘法就是重复相加。$k[x]$-模可以看作带线性算子的向量空间（$x$ 作用为算子）。',
          '有限生成模的结构定理（PID 上）给出 $M \\cong R^r \\oplus \\bigoplus R/(d_i)$，是线性代数中 Jordan 标准形的代数根源。'
        ],
        formulas: [
          {
            tex: 'r \\cdot (m_1 + m_2) = r \\cdot m_1 + r \\cdot m_2,\\quad (r + s) \\cdot m = r \\cdot m + s \\cdot m',
            caption: '模的标量乘法公理。'
          },
          {
            tex: 'M \\text{ 自由} \\iff M \\cong R^{\\oplus I}',
            caption: '自由模是有基的模。'
          },
          {
            tex: 'M \\otimes_R N',
            caption: '张量积：模的“双线性乘法”的普遍对象。'
          }
        ],
        example: [
          '$\\mathbb{Z}/n\\mathbb{Z}$ 是 $\\mathbb{Z}$-模，但不是自由模（没有基），因为 $n \\cdot 1 = 0$。'
        ],
        related: ['exact-sequences', 'ext-tor', 'localization']
      },
      {
        id: 'prime-ideals',
        name: '素理想',
        brief: '连接环的结构与几何点',
        keywords: ['素理想', '极大理想', '素谱', '零点定理'],
        definition: [
          '理想 $\\mathfrak{p} \\subsetneq R$ 称为**素理想**，如果 $ab \\in \\mathfrak{p}$ 蕴含 $a \\in \\mathfrak{p}$ 或 $b \\in \\mathfrak{p}$；等价地，$R/\\mathfrak{p}$ 是整环。',
          '所有素理想构成的集合 $\\mathrm{Spec}\\,R$ 配上 Zariski 拓扑，成为**素谱**，是代数几何中概形的底层空间。'
        ],
        intuition: [
          '素理想是“几何点”的代数版本：$k[x_1,\\dots,x_n]$ 的极大理想对应 $k^n$ 中的点；一般素理想对应不可约子簇。',
          '零点定理（Nullstellensatz）建立了代数与几何的字典：理想 ↔ 代数簇，素理想 ↔ 不可约簇。'
        ],
        formulas: [
          {
            tex: 'ab \\in \\mathfrak{p} \\implies a \\in \\mathfrak{p} \\ \\text{或}\\ b \\in \\mathfrak{p}',
            caption: '素理想的定义。'
          },
          {
            tex: '\\mathrm{Spec}\\,R = \\{\\mathfrak{p} \\trianglelefteq R : \\mathfrak{p} \\text{ 素}\\}',
            caption: '素谱。'
          },
          {
            tex: 'V(I) = \\{\\mathfrak{p} \\in \\mathrm{Spec}\\,R : I \\subseteq \\mathfrak{p}\\}',
            caption: 'Zariski 闭集。'
          }
        ],
        example: [
          '$\\mathbb{Z}$ 的素理想为 $(0)$ 与 $(p)$；$\\mathrm{Spec}\\,\\mathbb{Z}$ 的点对应素数，加上一个“一般点” $(0)$。'
        ],
        related: ['localization', 'noetherian', 'geometry/schemes']
      },
      {
        id: 'dimension-theory',
        name: '维数理论',
        brief: '研究素理想链的维数概念',
        keywords: ['Krull 维数', '素理想链', 'Noether 正规化', '维数'],
        definition: [
          '诺特环 $R$ 的**Krull 维数**定义为素理想链 $\\mathfrak{p}_0 \\subsetneq \\mathfrak{p}_1 \\subsetneq \\cdots \\subsetneq \\mathfrak{p}_n$ 的最大长度 $n$。',
          '对域 $k$ 上有限生成整环，$\\dim R$ 等于其分式域在 $k$ 上的超越次数（Noether 正规化引理）。因此 $\\dim k[x_1, \\dots, x_n] = n$。'
        ],
        intuition: [
          'Krull 维数把“几何维数”代数化：$k[x,y]$ 的素理想链对应点 ⊂ 曲线 ⊂ 平面，维数为 2。',
          '维数是局部性质：$\\dim R = \\sup_{\\mathfrak{m}} \\dim R_{\\mathfrak{m}}$，可以在每个极大理想处研究。'
        ],
        formulas: [
          {
            tex: '\\dim R = \\sup\\{n : \\mathfrak{p}_0 \\subsetneq \\cdots \\subsetneq \\mathfrak{p}_n\\}',
            caption: 'Krull 维数的定义。'
          },
          {
            tex: '\\dim k[x_1, \\dots, x_n] = n',
            caption: '多项式环的维数等于变量个数。'
          }
        ],
        example: [
          '$\\dim \\mathbb{Z} = 1$（素理想链 $(0) \\subsetneq (p)$）；$\\dim \\mathbb{Z}[x] = 2$。'
        ],
        related: ['noetherian', 'prime-ideals', 'geometry/algebraic-varieties-geometry']
      }
    ]
  },
  {
    id: 'galois-theory',
    name: '伽罗瓦理论',
    en: 'GALOIS THEORY',
    brief: '用根的对称性研究方程',
    color: '#8ec5ea',
    angle: 175,
    topics: [
      {
        id: 'fundamental-theorem-galois',
        name: '基本对应',
        brief: '联系中间域与群的子群',
        keywords: ['伽罗瓦对应', '中间域', '正规子群', '伽罗瓦扩张'],
        definition: [
          '设 $K/F$ 是有限伽罗瓦扩张，$G = \\mathrm{Gal}(K/F)$。**基本定理**断言：中间域 $F \\subseteq E \\subseteq K$ 与 $G$ 的子群 $H \\le G$ 之间存在一一对应：$E \\mapsto \\mathrm{Gal}(K/E)$，$H \\mapsto K^H$（$H$ 的不动域）。',
          '在此对应下：$E/F$ 是正规扩张当且仅当 $\\mathrm{Gal}(K/E)$ 是 $G$ 的正规子群，且此时 $\\mathrm{Gal}(E/F) \\cong G/\\mathrm{Gal}(K/E)$。'
        ],
        intuition: [
          '伽罗瓦基本定理是“代数与群论的字典”：扩域的中间结构完全由伽罗瓦群的子群结构编码。域论问题因此可以翻译成群论问题。',
          '这个对应解释了为什么五次方程不可解：如果方程可用根式求解，其伽罗瓦群必须是可解群；而一般五次方程的伽罗瓦群是 $S_5$，不可解。'
        ],
        formulas: [
          {
            tex: '\\{E : F \\subseteq E \\subseteq K\\} \\longleftrightarrow \\{H : H \\le G\\}',
            caption: '伽罗瓦基本对应（中间域 ↔ 子群）。'
          },
          {
            tex: 'E/F \\text{ 正规} \\iff \\mathrm{Gal}(K/E) \\trianglelefteq G',
            caption: '正规扩张对应正规子群。'
          },
          {
            tex: '[K : E] = |\\mathrm{Gal}(K/E)|,\\quad [E : F] = [G : \\mathrm{Gal}(K/E)]',
            caption: '次数与子群指数的对应。'
          }
        ],
        example: [
          '$K = \\mathbb{Q}(\\sqrt2, \\sqrt3)$ 是 $\\mathbb{Q}$ 的伽罗瓦扩张，$G \\cong (\\mathbb{Z}/2)^2$，有 5 个子群对应 5 个中间域：$\\mathbb{Q}$、$\\mathbb{Q}(\\sqrt2)$、$\\mathbb{Q}(\\sqrt3)$、$\\mathbb{Q}(\\sqrt6)$ 与 $K$。'
        ],
        related: ['galois-group', 'splitting-fields', 'solvability-by-radicals']
      },
      {
        id: 'galois-group',
        name: '伽罗瓦群',
        brief: '保持基础域不动的域自同构',
        keywords: ['伽罗瓦群', '自同构', '不动域', '伽罗瓦扩张'],
        definition: [
          '扩张 $K/F$ 的**伽罗瓦群** $\\mathrm{Gal}(K/F)$ 是 $K$ 的所有保持 $F$ 中元素不动的域自同构组成的群。',
          '若 $|\\mathrm{Gal}(K/F)| = [K : F]$，则称 $K/F$ 为**伽罗瓦扩张**；等价地，$K$ 是某个可分多项式在 $F$ 上的分裂域，且 $K^{\\mathrm{Gal}(K/F)} = F$。'
        ],
        intuition: [
          '伽罗瓦群衡量方程根的对称性：它由所有“保持根之间代数关系不变”的根置换组成。',
          '例如 $x^2 - 2 = 0$ 的根为 $\\pm\\sqrt2$，交换两个根的变换生成 2 阶伽罗瓦群；$x^3 - 2$ 的伽罗瓦群是 $S_3$，因为复根无法只靠有理运算区分。'
        ],
        formulas: [
          {
            tex: '\\mathrm{Gal}(K/F) = \\{\\sigma \\in \\mathrm{Aut}(K) : \\sigma|_F = \\mathrm{id}\\}',
            caption: '伽罗瓦群的定义。'
          },
          {
            tex: 'K/F \\text{ 伽罗瓦} \\iff |\\mathrm{Gal}(K/F)| = [K : F]',
            caption: '伽罗瓦扩张的判定。'
          }
        ],
        example: [
          '$\\mathrm{Gal}(\\mathbb{C}/\\mathbb{R}) = \\{ \\mathrm{id}, \\text{复共轭} \\} \\cong \\mathbb{Z}/2\\mathbb{Z}$，因为复共轭固定实数且是唯一的非平凡自同构。'
        ],
        related: ['fundamental-theorem-galois', 'splitting-fields', 'quintic']
      },
      {
        id: 'splitting-fields',
        name: '分裂域',
        brief: '容纳给定多项式全部根的域',
        keywords: ['分裂域', '正规性', '可分性', '伽罗瓦扩张'],
        definition: [
          '给定 $f \\in F[x]$，若扩域 $K \\supseteq F$ 使得 $f$ 在 $K$ 上完全分解为一次因子，且 $K$ 由 $F$ 与 $f$ 的所有根生成，则称 $K$ 为 $f$ 的**分裂域**。',
          '分裂域在同构意义下唯一。若 $f$ 可分（特征 0 域上总是如此），则其分裂域是伽罗瓦扩张。'
        ],
        intuition: [
          '分裂域是“刚好够用”的扩域：它包含所有根，不多也不少。任何包含 $f$ 全部根的域都包含分裂域。',
          '分裂域是伽罗瓦理论的标准对象：计算 $f$ 的伽罗瓦群，就是研究其分裂域的对称性。'
        ],
        formulas: [
          {
            tex: 'K = F(\\alpha_1, \\dots, \\alpha_n),\\quad f(x) = c \\prod_{i=1}^{n} (x - \\alpha_i)',
            caption: '分裂域由全部根生成。'
          },
          {
            tex: 'f \\text{ 可分} \\implies K/F \\text{ 伽罗瓦}',
            caption: '可分多项式的分裂域是伽罗瓦扩张。'
          }
        ],
        example: [
          '$x^3 - 2$ 的分裂域为 $\\mathbb{Q}(\\sqrt[3]{2}, \\omega)$（$\\omega = e^{2\\pi i/3}$），次数为 6，伽罗瓦群为 $S_3$。'
        ],
        related: ['galois-group', 'fundamental-theorem-galois', 'field-extensions']
      },
      {
        id: 'solvability-by-radicals',
        name: '根式可解性',
        brief: '借助群结构判断根式求解',
        keywords: ['根式可解', '可解群', 'Galois', '方程'],
        definition: [
          '方程 $f(x) = 0$ 称为**根式可解**，如果它的根可以由系数通过有限次加、减、乘、除与开 $n$ 次方得到（即存在根式塔）。',
          '伽罗瓦判据：$f$ 根式可解当且仅当其伽罗瓦群**可解**（存在正规列使各商群为交换群）。'
        ],
        intuition: [
          '开方对应扩充环的对称性，而根式塔对应伽罗瓦群的正规列。可解群正是能被“逐层交换”拆开的群。',
          '二次、三次、四次方程都有根式公式，因为 $S_2, S_3, S_4$ 可解；五次方程的伽罗瓦群 $S_5$ 不可解，因此没有通用根式公式。'
        ],
        formulas: [
          {
            tex: 'f \\text{ 根式可解} \\iff \\mathrm{Gal}(f) \\text{ 可解}',
            caption: '伽罗瓦可解性判据。'
          },
          {
            tex: 'S_n \\text{ 可解} \\iff n \\le 4',
            caption: '$S_5$ 及更高次对称群不可解。'
          }
        ],
        example: [
          '$x^5 - x - 1$ 的伽罗瓦群是 $S_5$，因此不可根式求解；而 $x^5 - 2$ 的伽罗瓦群是可解的，根可以写成 $\\sqrt[5]{2}\\,\\omega^k$。'
        ],
        related: ['galois-group', 'quintic', 'fundamental-theorem-galois']
      },
      {
        id: 'quintic',
        name: '一般五次方程',
        brief: '不存在通用的根式求解公式',
        keywords: ['五次方程', 'Abel-Ruffini', '不可解', 'A5'],
        definition: [
          '**Abel–Ruffini 定理**（1824）：一般五次及更高次方程不存在只涉及系数、加减乘除与开方的通用求根公式。',
          '更精确地：一般五次方程的伽罗瓦群是 $S_5$，其换位子群为 $A_5$（单群），因此 $S_5$ 不可解。'
        ],
        intuition: [
          '二次到四次方程的根式公式之所以存在，是因为对应伽罗瓦群可解；五次以上对称群变得“太大”，无法通过正规列拆成交换群。',
          '这并不意味着所有五次方程都无解——每个多项式在复数域上都有根（代数基本定理），只是不能用根式表达。数值方法（如 Newton 法）仍可求近似解。'
        ],
        formulas: [
          {
            tex: 'x^5 + a_4 x^4 + a_3 x^3 + a_2 x^2 + a_1 x + a_0 = 0',
            caption: '一般五次方程。'
          },
          {
            tex: '\\mathrm{Gal}(\\text{一般五次}) \\cong S_5,\\quad [S_5, S_5] = A_5\\ \\text{（单群）}',
            caption: '$S_5$ 不可解，因此无通用根式解。'
          }
        ],
        example: [
          '$x^5 - x + 1 = 0$ 的伽罗瓦群为 $S_5$，不可根式求解；但其根可以用数值方法（如 Newton 迭代）高精度计算。'
        ],
        related: ['solvability-by-radicals', 'galois-group', 'fundamental-theorem-galois']
      }
    ]
  },
  {
    id: 'linear-algebra',
    name: '线性代数',
    en: 'LINEAR ALGEBRA',
    brief: '向量空间、矩阵与线性映射',
    color: '#74bce8',
    angle: 130,
    topics: [
      {
        id: 'vector-spaces',
        name: '向量空间',
        brief: '研究线性组合构成的空间',
        keywords: ['向量空间', '线性组合', '张成', '子空间'],
        definition: [
          '域 $F$ 上的**向量空间** $V$ 是交换群，配有数乘 $F \\times V \\to V$，满足分配律、结合律与单位律。$F$ 通常取 $\\mathbb{R}$ 或 $\\mathbb{C}$。',
          '子集 $W \\subseteq V$ 称为**子空间**，如果它对加法与数乘封闭；等价地，$W$ 非空且对线性组合封闭。'
        ],
        intuition: [
          '向量空间是“可以做线性组合”的集合：加法与数乘是仅有的两种操作，所有线性代数概念都由它们定义。',
          '函数空间、多项式空间、矩阵空间都是向量空间。把函数看作向量，才能用线性代数研究微分方程与傅里叶分析。'
        ],
        formulas: [
          {
            tex: '(a + b)v = av + bv,\\quad a(v + w) = av + aw,\\quad a(bv) = (ab)v',
            caption: '向量空间的公理。'
          },
          {
            tex: '\\mathrm{span}(S) = \\left\\{\\sum_{i=1}^{n} a_i v_i : a_i \\in F,\\ v_i \\in S\\right\\}',
            caption: '线性张成。'
          }
        ],
        example: [
          '$\\mathbb{R}^3$ 中过原点的平面是二维子空间；不过原点的平面不是子空间（不含零向量）。'
        ],
        related: ['basis-dimension', 'linear-maps', 'eigenvalues']
      },
      {
        id: 'basis-dimension',
        name: '基与维数',
        brief: '用独立方向描述空间大小',
        keywords: ['基', '维数', '线性无关', '坐标'],
        definition: [
          '向量组 $\\{v_1, \\dots, v_n\\}$ 称为**线性无关**，如果 $\\sum a_i v_i = 0$ 蕴含所有 $a_i = 0$。',
          '向量空间的**基**是线性无关且张成整个空间的向量组；基中向量的个数称为**维数** $\\dim V$，与基的选择无关。'
        ],
        intuition: [
          '基是“最少的方向集合”：每个向量都能唯一地表示为基向量的线性组合，系数就是坐标。维数是空间的“自由度”。',
          '同一个空间可以有许多基；基变换矩阵描述坐标如何变化，这是线性代数中“不依赖于基”的思维方式。'
        ],
        formulas: [
          {
            tex: '\\sum_{i=1}^{n} a_i v_i = 0 \\implies a_1 = \\cdots = a_n = 0',
            caption: '线性无关。'
          },
          {
            tex: '\\dim(V + W) = \\dim V + \\dim W - \\dim(V \\cap W)',
            caption: '维数公式。'
          },
          {
            tex: '\\dim \\mathbb{R}^n = n',
            caption: '标准基 $e_1, \\dots, e_n$ 给出维数。'
          }
        ],
        example: [
          '$\\mathbb{R}^3$ 中任意三个不共面的向量构成基；$\\{(1,0,0), (0,1,0)\\}$ 张成 $xy$ 平面，维数为 2。'
        ],
        related: ['vector-spaces', 'linear-maps', 'spectral-decomposition']
      },
      {
        id: 'linear-maps',
        name: '线性映射',
        brief: '保持加法与数乘的变换',
        keywords: ['线性映射', '矩阵表示', '秩-零化度', '核与像'],
        definition: [
          '映射 $T: V \\to W$ 称为**线性映射**，如果 $T(av + bw) = aT(v) + bT(w)$ 对所有 $a, b \\in F$、$v, w \\in V$ 成立。',
          '选定基后，线性映射由矩阵唯一表示；**核** $\\ker T$ 与**像** $\\mathrm{im}\\,T$ 都是子空间，秩-零化度定理给出 $\\dim V = \\dim \\ker T + \\dim \\mathrm{im}\\,T$。'
        ],
        intuition: [
          '线性映射是“尊重线性结构”的映射：它保持直线变直线（过原点）与缩放关系。所有线性映射都可以用矩阵编码。',
          '核衡量映射“压扁”了多少维度，像衡量输出覆盖多少维度；两者的维数之和等于定义域维数。'
        ],
        formulas: [
          {
            tex: 'T(av + bw) = aT(v) + bT(w)',
            caption: '线性映射的定义。'
          },
          {
            tex: '\\dim V = \\dim \\ker T + \\dim \\mathrm{im}\\,T',
            caption: '秩-零化度定理。'
          },
          {
            tex: '[T]_{\\mathcal{B}\', \\mathcal{B}} = \\left( [T(b_j)]_{\\mathcal{B}\'} \\right)_{ij}',
            caption: '线性映射在基 $\\mathcal{B}, \\mathcal{B}\'$ 下的矩阵表示。'
          }
        ],
        example: [
          '投影 $\\pi: \\mathbb{R}^3 \\to \\mathbb{R}^2$，$(x,y,z) \\mapsto (x,y)$：核是 $z$ 轴（一维），像是 $\\mathbb{R}^2$（二维），维数满足 $3 = 1 + 2$。'
        ],
        related: ['vector-spaces', 'basis-dimension', 'eigenvalues']
      },
      {
        id: 'eigenvalues',
        name: '特征值',
        brief: '寻找变换保持的方向与比例',
        keywords: ['特征值', '特征向量', '对角化', '特征多项式'],
        definition: [
          '若存在非零向量 $v$ 与标量 $\\lambda$ 使得 $T(v) = \\lambda v$，则称 $\\lambda$ 为**特征值**，$v$ 为对应的**特征向量**。',
          '特征值是特征多项式 $\\det(\\lambda I - T) = 0$ 的根；若空间有一组由特征向量组成的基，则 $T$ 可对角化。'
        ],
        intuition: [
          '特征向量是“方向不变”的方向：变换只把它拉长或缩短，不改变方向。特征值就是拉伸倍数。',
          '对角化把复杂的线性变换拆成各特征方向上独立的缩放，大大简化矩阵幂、微分方程与稳定性分析。'
        ],
        formulas: [
          {
            tex: 'T(v) = \\lambda v,\\quad v \\ne 0',
            caption: '特征值方程。'
          },
          {
            tex: '\\det(\\lambda I - T) = 0',
            caption: '特征多项式。'
          },
          {
            tex: 'T = P D P^{-1}',
            caption: '可对角化矩阵的分解，$D$ 为对角矩阵。'
          }
        ],
        example: [
          '$A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$ 的特征值为 $3, 1$，对应特征向量 $(1,1)$ 与 $(1,-1)$，因此 $A$ 可对角化。'
        ],
        related: ['linear-maps', 'spectral-decomposition', 'analysis/spectral-theory']
      },
      {
        id: 'spectral-decomposition',
        name: '谱分解',
        brief: '在适用条件下分解线性算子',
        keywords: ['谱分解', '正交对角化', '奇异值分解', '正规矩阵'],
        definition: [
          '对正规矩阵（$A A^* = A^* A$，包括对称、Hermite、正交、酉矩阵），存在酉矩阵 $U$ 与对角矩阵 $D$ 使得 $A = U D U^*$，称为**谱分解**。',
          '任意矩阵有**奇异值分解** $A = U \\Sigma V^*$，其中 $\\Sigma$ 为奇异值对角阵，$U, V$ 为酉矩阵。'
        ],
        intuition: [
          '谱分解说明正规矩阵在适当正交基下是对角矩阵：它在互相垂直的特征方向上独立缩放。这是矩阵版本的“傅里叶分解”。',
          '奇异值分解把任意线性映射分解为“旋转—拉伸—旋转”，是数据压缩（图像、PCA）与数值线性代数的核心。'
        ],
        formulas: [
          {
            tex: 'A = U D U^{*},\\quad D = \\mathrm{diag}(\\lambda_1, \\dots, \\lambda_n)',
            caption: '正规矩阵的谱分解。'
          },
          {
            tex: 'A = U \\Sigma V^{*}',
            caption: '奇异值分解。'
          },
          {
            tex: 'A = \\sum_{i=1}^{n} \\lambda_i u_i u_i^{*}',
            caption: '谱分解的投影形式。'
          }
        ],
        example: [
          '对称矩阵 $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$ 的谱分解为 $\\lambda_1 = 3$（方向 $(1,1)/\\sqrt2$）与 $\\lambda_2 = 1$（方向 $(1,-1)/\\sqrt2$）。'
        ],
        related: ['eigenvalues', 'analysis/spectral-theory', 'applied/numerical-linear-algebra']
      }
    ]
  }
);