/* 数学知识地图 · 几何与拓扑（下） */
window.ATLAS.subjects.geometry.branches.push(
  {
    id: 'algebraic-geometry',
    name: '代数几何',
    en: 'ALGEBRAIC GEOMETRY',
    brief: '研究多项式方程的零点空间',
    color: '#efd28a',
    angle: 35,
    topics: [
      {
        id: 'algebraic-varieties-geometry',
        name: '代数簇',
        brief: '研究多项式方程的零点空间',
        keywords: ['代数簇', '仿射簇', '射影簇', 'Zariski 拓扑'],
        definition: [
          '**仿射代数簇**是 $\\mathbb{A}^n = k^n$ 中有限个多项式的公共零点集 $V(f_1, \\dots, f_m)$。**射影代数簇**是射影空间中的齐次多项式零点集。',
          '代数簇上配有 Zariski 拓扑：闭集恰为代数簇。它是比欧氏拓扑粗得多的拓扑，使得多项式函数的行为更“代数”。'
        ],
        intuition: [
          '代数簇是“方程画出的形状”：$x^2 + y^2 = 1$ 是圆，$y^2 = x^3 - x$ 是椭圆曲线，$xy = 1$ 是双曲线。',
          'Zariski 拓扑中开集很大（补集是低维子簇），因此连续函数很稀少（只有多项式/正则函数），但这也让代数簇具有极强的刚性。'
        ],
        formulas: [
          {
            tex: 'V(f_1, \\dots, f_m) = \\{x \\in k^n : f_1(x) = \\cdots = f_m(x) = 0\\}',
            caption: '仿射代数簇。'
          },
          {
            tex: 'I(V) = \\{f \\in k[x_1, \\dots, x_n] : f|_V = 0\\}',
            caption: '代数簇的理想。'
          },
          {
            tex: 'I(V(J)) = \\sqrt{J}',
            caption: 'Hilbert 零点定理（代数闭域上）。'
          }
        ],
        example: [
          '$V(x^2 + y^2 - 1) \\subset \\mathbb{A}^2$ 是单位圆；其坐标环为 $k[x,y]/(x^2+y^2-1)$。'
        ],
        related: ['coordinate-rings', 'schemes', 'projective-geometry']
      },
      {
        id: 'coordinate-rings',
        name: '坐标环',
        brief: '用代数记录几何空间的信息',
        keywords: ['坐标环', '零点定理', '函子性', '正则函数'],
        definition: [
          '仿射代数簇 $V \\subseteq \\mathbb{A}^n$ 的**坐标环**为 $k[V] = k[x_1, \\dots, x_n]/I(V)$，其元素是 $V$ 上的正则函数。',
          '坐标环是代数簇的“函数代数”：几何对象与代数对象通过 $V \\mapsto k[V]$ 建立反变对应，代数簇的态射对应坐标环的同态。'
        ],
        intuition: [
          '坐标环是代数簇的“指纹”：两个仿射簇同构当且仅当坐标环同构（反变）。研究几何可以转化为研究环。',
          'Hilbert 零点定理保证几何与代数不丢失信息：$V \\mapsto I(V)$ 与 $I \\mapsto V(I)$ 互为逆（在代数闭域、根式理想下）。'
        ],
        formulas: [
          {
            tex: 'k[V] = k[x_1, \\dots, x_n] / I(V)',
            caption: '坐标环。'
          },
          {
            tex: 'V \\cong W \\iff k[V] \\cong k[W]',
            caption: '仿射簇同构等价于坐标环同构（反变）。'
          }
        ],
        example: [
          '$V(xy - 1)$ 的坐标环 $k[x,y]/(xy-1) \\cong k[x, x^{-1}]$（Laurent 多项式环）。'
        ],
        related: ['algebraic-varieties-geometry', 'schemes', 'algebra/prime-ideals']
      },
      {
        id: 'schemes',
        name: '概形',
        brief: '推广代数簇的几何语言',
        keywords: ['概形', 'Spec', '结构层', '局部环化空间'],
        definition: [
          '**概形**是局部环化空间，局部同构于素谱 $\\mathrm{Spec}\\,R$ 配上结构层 $\\mathcal{O}$。它是 Grothendieck 对代数簇的推广。',
          '概形把几何点推广为素理想，把函数推广为层。整数环 $\\mathbb{Z}$ 的素谱把算术与几何统一起来。'
        ],
        intuition: [
          '概形是“代数几何的现代语言”：它允许在任意交换环上做几何，包括整数环、有限域、甚至非约化环。',
          'Grothendieck 用概形重写了代数几何，使 Weil 猜想得以用上同调方法解决。现代算术几何（包括 Wiles 证明费马大定理）都建立在概形语言之上。'
        ],
        formulas: [
          {
            tex: '(X, \\mathcal{O}_X)',
            caption: '概形是局部环化空间。'
          },
          {
            tex: '\\mathrm{Spec}\\,R = \\{\\mathfrak{p} \\trianglelefteq R : \\mathfrak{p} \\text{ 素}\\}',
            caption: '素谱作为底层拓扑空间。'
          },
          {
            tex: '\\mathcal{O}_{X, x} \\text{ 是局部环}',
            caption: '结构层的茎是局部环。'
          }
        ],
        example: [
          '$\\mathrm{Spec}\\,\\mathbb{Z}$ 的点是素数 $(p)$ 与一般点 $(0)$，其几何图像像一条“算术曲线”，闭点对应素数。'
        ],
        related: ['coordinate-rings', 'algebra/prime-ideals', 'algebraic-varieties-geometry']
      },
      {
        id: 'singularities',
        name: '奇点',
        brief: '研究偏离光滑状态的位置',
        keywords: ['奇点', '爆破', '奇点消解', '切空间'],
        definition: [
          '代数簇 $V$ 在点 $p$ 称为**奇异点**，如果 $p$ 处的切空间维数大于 $\\dim V$（或雅可比矩阵秩不足）。否则称为光滑点。',
          '**奇点消解**（Hironaka 1964）断言：特征零域上的代数簇都可以通过双有理映射化为光滑簇，且不改变光滑部分。'
        ],
        intuition: [
          '奇点是曲线自交、尖点或高维“折叠”的位置：$y^2 = x^3$ 在原点有尖点，$xy = 0$ 在原点自交。',
          '爆破（blow-up）是“放大”奇点以分离分支的技术：把原点替换为所有方向的射影空间，从而解开自交。'
        ],
        formulas: [
          {
            tex: '\\mathrm{rank}\\,J_f(p) < n - \\dim V \\implies p \\text{ 奇异}',
            caption: '雅可比判据。'
          },
          {
            tex: 'y^2 = x^3 \\text{ 在 } (0,0) \\text{ 有尖点（cusp）}',
            caption: '经典奇点例子。'
          }
        ],
        example: [
          '$V(y^2 - x^3)$ 在原点奇异；爆破后在原点的纤维上分成两支，尖点被“解开”。'
        ],
        related: ['birational-geometry', 'algebraic-varieties-geometry', 'coordinate-rings']
      },
      {
        id: 'birational-geometry',
        name: '双有理几何',
        brief: '比较稠密开集上的有理等价',
        keywords: ['双有理', '极小模型纲领', '爆破', '有理映射'],
        definition: [
          '两个代数簇称为**双有理等价**，如果存在有理映射 $f: X \\dashrightarrow Y$ 与 $g: Y \\dashrightarrow X$ 使复合为恒等（在稠密开集上）。',
          '双有理几何研究代数簇在双有理等价下的分类；**极小模型纲领**（Mori 等）试图在每类中寻找标准代表。'
        ],
        intuition: [
          '双有理等价允许“忽略低维部分”：有理曲线与点双有理等价（除了一点）。双有理几何关心“一般位置”的结构。',
          '极小模型纲领是高维代数几何的核心项目：通过收缩与翻转（flip）操作，把簇化简为极小模型或 Mori 纤维空间。'
        ],
        formulas: [
          {
            tex: 'X \\dashrightarrow Y \\text{ 双有理} \\iff k(X) \\cong k(Y)',
            caption: '双有理等价等价于函数域同构。'
          },
          {
            tex: 'K_X \\text{ 是规范除子}',
            caption: '极小模型纲领围绕规范除子的正负性分类。'
          }
        ],
        example: [
          '所有有理曲线（亏格 0）都双有理等价于 $\\mathbb{P}^1$；三次曲面与 $\\mathbb{P}^2$ 双有理等价。'
        ],
        related: ['algebraic-varieties-geometry', 'singularities', 'schemes']
      }
    ]
  },
  {
    id: 'geometric-topology',
    name: '几何拓扑',
    en: 'GEOMETRIC TOPOLOGY',
    brief: '研究流形的结构与不变量',
    color: '#dcc26d',
    angle: -145,
    topics: [
      {
        id: 'low-dimensional-topology',
        name: '低维拓扑',
        brief: '重点研究三维与四维现象',
        keywords: ['低维拓扑', '3 流形', '几何化', 'Poincaré 猜想'],
        definition: [
          '**低维拓扑**研究 2、3、4 维流形。3 维流形有 8 种几何结构（Thurston 几何化猜想），4 维流形则出现异常现象（无穷多光滑结构）。',
          'Poincaré 猜想（Perelman 2003 证明）：单连通闭 3 流形同胚于 $S^3$。'
        ],
        intuition: [
          '低维拓扑与高维有本质区别：3 维流形可以用几何化分解，4 维流形出现 exotic 光滑结构，而 5 维及以上则相对规则（h-配边定理）。',
          'Perelman 用 Ricci 流证明 Poincaré 猜想：让度量随时间演化，像热流一样把曲率“抹平”，最终得到标准几何。'
        ],
        formulas: [
          {
            tex: '\\partial_t g_{ij} = -2 R_{ij}',
            caption: 'Ricci 流方程，Perelman 证明的核心工具。'
          },
          {
            tex: 'M^3 \\text{ 单连通闭} \\implies M^3 \\cong S^3',
            caption: 'Poincaré 猜想。'
          }
        ],
        example: [
          '透镜空间 $L(p, q)$ 是 3 维流形，其基本群为 $\\mathbb{Z}/p$，不同透镜空间可由 Reidemeister 挠率区分。'
        ],
        related: ['manifold-classification', 'knot-theory', 'surgery-theory']
      },
      {
        id: 'knot-theory',
        name: '纽结理论',
        brief: '研究空间中闭合曲线的缠绕',
        keywords: ['纽结', '不变量', 'Jones 多项式', '打结'],
        definition: [
          '**纽结**是 $S^3$（或 $\\mathbb{R}^3$）中的嵌入圆周。两个纽结**等价**，如果存在环境同痕（连续变形）把一个变成另一个。',
          '纽结不变量（Jones 多项式、Alexander 多项式、基本群）用于区分不等价的纽结。'
        ],
        intuition: [
          '纽结理论研究“绳子能打成多少种真正不同的结”：三叶结与平凡结不同，因为无法不剪断地解开。',
          '纽结与量子场论、统计力学、DNA 拓扑有深刻联系；Jones 多项式（1984）连接了纽结理论与算子代数，Jones 因此获菲尔兹奖。'
        ],
        formulas: [
          {
            tex: 'K: S^1 \\hookrightarrow S^3',
            caption: '纽结是嵌入圆周。'
          },
          {
            tex: 'V_K(t) \\in \\mathbb{Z}[t^{\\pm 1/2}]',
            caption: 'Jones 多项式（不变量）。'
          }
        ],
        example: [
          '三叶结的 Jones 多项式为 $V(t) = -t^{-4} + t^{-3} + t^{-1}$，与平凡结的 $V = 1$ 不同，因此三叶结非平凡。'
        ],
        related: ['low-dimensional-topology', 'manifold-classification', 'surgery-theory']
      },
      {
        id: 'manifold-classification',
        name: '流形分类',
        brief: '寻找区分流形的结构与不变量',
        keywords: ['流形分类', '分类', '基本群', '同调'],
        definition: [
          '**流形分类**目标：给定维数与（可定向性等）条件，列出所有同胚类型的流形。1 维流形只有 $S^1$ 与 $\\mathbb{R}$；2 维闭曲面由亏格完全分类。',
          '3 维流形由 Thurston 几何化（Perelman）给出分解；4 维及以上一般不可分类（算法不可判定）。'
        ],
        intuition: [
          '2 维闭曲面分类是拓扑学的经典成果：每个闭曲面同胚于球面、环面或若干环面的连通和（带或不带把手）。',
          '高维流形分类极其复杂：4 维流形甚至有不可数多个光滑结构（exotic $\\mathbb{R}^4$），说明“分类”在高维需要更精细的不变量。'
        ],
        formulas: [
          {
            tex: '\\text{2 维闭曲面} \\cong \\Sigma_g\\ (g \\ge 0) \\ \\text{或}\\ N_k\\ (k \\ge 1)',
            caption: '可定向曲面 $\\Sigma_g$（亏格 $g$）与不可定向曲面 $N_k$（$k$ 个交叉帽）。'
          },
          {
            tex: '\\chi(\\Sigma_g) = 2 - 2g',
            caption: '可定向曲面的 Euler 示性数。'
          }
        ],
        example: [
          '亏格 1 的可定向曲面是环面；亏格 0 是球面；不可定向的 $N_1$ 是射影平面，$N_2$ 是 Klein 瓶。'
        ],
        related: ['low-dimensional-topology', 'surgery-theory', 'homeomorphism']
      },
      {
        id: 'surgery-theory',
        name: '手术理论',
        brief: '通过切除与粘合改变流形',
        keywords: ['手术', '柄体', 'h-配边', '流形构造'],
        definition: [
          '**手术**是构造流形的操作：从流形中挖去一个 $S^k \\times D^{n-k}$，沿边界粘上 $D^{k+1} \\times S^{n-k-1}$。',
          '**柄体理论**用手术描述流形的骨架；**h-配边定理**（Smale）说明高维单连通配边可化为手术。'
        ],
        intuition: [
          '手术是“流形的外科手术”：切掉一块标准形状，再补上另一块，改变拓扑。它把流形分解为容易理解的基本块。',
          'Smale 用手术理论证明高维 Poincaré 猜想（$n \\ge 5$），并获得菲尔兹奖。'
        ],
        formulas: [
          {
            tex: 'M \\mapsto (M \\setminus (S^k \\times D^{n-k})) \\cup (D^{k+1} \\times S^{n-k-1})',
            caption: '$k$ 维手术。'
          },
          {
            tex: 'n \\ge 5,\\ \\pi_1 = 1 \\implies \\text{h-配边} \\cong \\text{平凡配边}',
            caption: 'h-配边定理。'
          }
        ],
        example: [
          '从 $S^3$ 出发，沿一个平凡纽结做 0 维手术，得到 $S^1 \\times S^2$；不同的手术系数可构造透镜空间。'
        ],
        related: ['low-dimensional-topology', 'manifold-classification', 'knot-theory']
      },
      {
        id: 'differential-structures',
        name: '微分结构',
        brief: '同一拓扑空间可有不同光滑结构',
        keywords: ['微分结构', '光滑结构', '怪球', 'Milnor'],
        definition: [
          '同一拓扑流形上可以存在互相不容的光滑结构。Milnor（1956）发现 $S^7$ 上有 28 种不同的光滑结构，即**怪球**。',
          '$\\mathbb{R}^4$ 上有不可数多个互不容的光滑结构（exotic $\\mathbb{R}^4$），这是 4 维独有的现象。'
        ],
        intuition: [
          '拓扑只关心连续变形，微分几何关心光滑性。同一拓扑空间可以配不同的“光滑地图册”，这些结构无法通过光滑变换互相转化。',
          '怪球说明“光滑”是额外结构，不是拓扑的副产品；这与物理中的时空间结构、广义相对论的光滑性假设有关。'
        ],
        formulas: [
          {
            tex: '\\Theta_n = \\{\\text{$n$ 维怪球}\\} / \\text{同胚}',
            caption: '怪球群（Milnor）。'
          },
          {
            tex: '|\\Theta_7| = 28',
            caption: '7 维球面上有 28 种光滑结构（计入标准结构）。'
          }
        ],
        example: [
          'Milnor 的怪球与标准 $S^7$ 同胚但不同胚于标准光滑结构，无法通过光滑变换变成标准球面。'
        ],
        related: ['smooth-manifolds', 'manifold-classification', 'low-dimensional-topology']
      },
      {
        id: 'packing-covering',
        name: '堆积与覆盖',
        brief: '研究物体如何填充或覆盖空间',
        keywords: ['堆积', '覆盖', '密度', 'Kissing 数'],
        definition: [
          '**堆积**问题研究如何在不重叠的前提下把球（或其他形状）放入空间，使密度最大；**覆盖**问题研究用球覆盖空间所需的最少数量。',
          '开普勒猜想（1611，Hales 2005 证明）：三维球体最密堆积密度为 $\\pi/(3\\sqrt2) \\approx 0.7405$。'
        ],
        intuition: [
          '堆积是“橙子怎么摆最省空间”：面心立方堆积达到三维最优密度，但证明极其困难（Hales 的形式化证明耗时多年）。',
          '维数越高，堆积问题越复杂：8 维与 24 维的最优堆积（$E_8$ 格、Leech 格）由 Viazovska 等人解决，获菲尔兹奖。'
        ],
        formulas: [
          {
            tex: '\\delta = \\frac{\\text{球所占体积}}{\\text{总体积}}',
            caption: '堆积密度。'
          },
          {
            tex: '\\delta_{\\mathbb{R}^3} = \\frac{\\pi}{3\\sqrt2}',
            caption: '三维最密堆积密度（开普勒猜想）。'
          }
        ],
        example: [
          '平面上等圆的最密堆积是六边形堆积，密度为 $\\pi/(2\\sqrt3) \\approx 0.9069$。'
        ],
        related: ['discrete/lattices', 'triangulations', 'convex-sets']
      }
    ]
  },
  {
    id: 'convex-discrete-geometry',
    name: '凸与离散几何',
    en: 'CONVEX & DISCRETE GEOMETRY',
    brief: '凸体、多面体与规则排列',
    color: '#e6cb7a',
    angle: -100,
    topics: [
      {
        id: 'convex-sets',
        name: '凸集',
        brief: '任意两点间线段仍在集合内',
        keywords: ['凸集', '凸组合', '分离定理', '支撑函数'],
        definition: [
          '集合 $C \\subseteq \\mathbb{R}^n$ 称为**凸集**，如果对任意 $x, y \\in C$ 与 $t \\in [0,1]$，都有 $tx + (1-t)y \\in C$。',
          '分离定理：两个不交的凸集可以被超平面分离。凸集的支撑函数 $h_C(u) = \\sup_{x \\in C} \\langle u, x \\rangle$ 完全刻画凸集。'
        ],
        intuition: [
          '凸集没有“凹陷”：圆盘、三角形、半空间都是凸的；月牙形不是。凸性使优化问题具有全局最优性。',
          '分离定理是凸分析的基石：它保证线性泛函可以区分凸集，从而导出对偶理论、Farkas 引理与支持向量机。'
        ],
        formulas: [
          {
            tex: 'x, y \\in C,\\ t \\in [0,1] \\implies tx + (1-t)y \\in C',
            caption: '凸集的定义。'
          },
          {
            tex: 'h_C(u) = \\sup_{x \\in C} \\langle u, x \\rangle',
            caption: '支撑函数。'
          },
          {
            tex: '\\exists\\, u \\ne 0,\\ \\alpha:\\ \\langle u, x \\rangle \\le \\alpha < \\langle u, y \\rangle',
            caption: '超平面分离定理。'
          }
        ],
        example: [
          '$\\{(x,y) : x^2 + y^2 \\le 1\\}$ 是凸集；$\\{(x,y) : x^2 + y^2 \\ge 1\\}$ 不是（取两点连线会穿过圆内）。'
        ],
        related: ['polyhedra', 'applied/convex-optimization', 'triangulations']
      },
      {
        id: 'polyhedra',
        name: '多面体',
        brief: '用顶点或有限线性约束描述',
        keywords: ['多面体', '顶点表示', '半空间表示', 'Farkas 引理'],
        definition: [
          '**多面体**是有限个闭半空间的交：$P = \\{x : Ax \\le b\\}$。等价地，多面体是有界多胞形，是有限点集的凸包（Minkowski–Weyl 定理）。',
          '多面体的顶点、边、面组织成面格；Euler 公式 $V - E + F = 2$ 对凸多面体成立。'
        ],
        intuition: [
          '多面体有两种描述：从外部看是“切出来的”（半空间交），从内部看是“撑起来的”（顶点凸包）。两者等价是线性规划对偶的基础。',
          '正多面体只有五种（Platonic 立体），但高维多面体种类爆炸，组合类型极其丰富。'
        ],
        formulas: [
          {
            tex: 'P = \\{x \\in \\mathbb{R}^n : Ax \\le b\\}',
            caption: '半空间表示。'
          },
          {
            tex: 'P = \\mathrm{conv}(v_1, \\dots, v_m)',
            caption: '顶点表示（Minkowski–Weyl）。'
          },
          {
            tex: 'V - E + F = 2',
            caption: '凸多面体的 Euler 公式。'
          }
        ],
        example: [
          '正八面体有 6 个顶点、12 条边、8 个面，$6 - 12 + 8 = 2$；它也是 $\\mathbb{R}^3$ 中 $\\|x\\|_1 \\le 1$ 的顶点集凸包。'
        ],
        related: ['convex-sets', 'applied/linear-programming', 'euler-characteristic']
      },
      {
        id: 'triangulations',
        name: '剖分与三角化',
        brief: '把空间拆成较简单的基本块',
        keywords: ['三角剖分', 'Delaunay', 'Euler 公式', '单纯复形'],
        definition: [
          '**三角剖分**把空间（或曲面）分割成三角形（高维为单形），使任意两个三角形的交是公共边或顶点。',
          'Delaunay 三角剖分是“最均匀”的三角剖分：任意三角形的外接圆不含其他顶点；它与 Voronoi 图对偶。'
        ],
        intuition: [
          '三角剖分把连续几何离散化，使计算机可以处理：有限元用三角剖分近似曲面，图形学用网格渲染曲面。',
          '同一曲面的不同三角剖分有不变量（Euler 示性数），这是拓扑学的起点。Delaunay 剖分在网格生成与插值中保证质量。'
        ],
        formulas: [
          {
            tex: '\\chi = V - E + F',
            caption: '三角剖分的 Euler 示性数（闭合曲面）。'
          },
          {
            tex: '\\text{Delaunay：外接圆内无其他顶点}',
            caption: 'Delaunay 三角剖分的空圆性质。'
          }
        ],
        example: [
          '球面的任何三角剖分都满足 $V - E + F = 2$；环面则满足 $V - E + F = 0$。'
        ],
        related: ['polyhedra', 'euler-characteristic', 'applied/finite-elements']
      },
      {
        id: 'euler-characteristic',
        name: '欧拉示性数',
        brief: '用胞腔数的交错和刻画空间',
        keywords: ['Euler 示性数', 'χ', '拓扑不变量', 'V-E+F'],
        definition: [
          '拓扑空间 $X$ 的 **Euler 示性数**定义为 $\\chi(X) = \\sum_{n \\ge 0} (-1)^n \\,\\mathrm{rank}\\,H_n(X)$，或用有限 CW 复形表示为 $\\sum (-1)^n c_n$（$c_n$ 为 $n$ 维胞腔数）。',
          '对曲面，$\\chi = V - E + F$；闭可定向曲面 $\\chi = 2 - 2g$，不可定向曲面 $\\chi = 2 - k$。'
        ],
        intuition: [
          'Euler 示性数是“形状的整体指纹”：球面 $\\chi = 2$，环面 $\\chi = 0$，射影平面 $\\chi = 1$。它不依赖三角剖分。',
          'Gauss–Bonnet 定理把 $\\chi$ 与曲率积分联系起来；Poincaré–Hopf 定理把它与向量场零点联系起来。'
        ],
        formulas: [
          {
            tex: '\\chi(X) = \\sum_{n} (-1)^n \\,\\mathrm{rank}\\,H_n(X)',
            caption: 'Euler 示性数的同调定义。'
          },
          {
            tex: '\\chi = V - E + F',
            caption: '多面体/三角剖分公式。'
          },
          {
            tex: '\\chi(\\Sigma_g) = 2 - 2g',
            caption: '亏格 $g$ 可定向曲面的 Euler 示性数。'
          }
        ],
        example: [
          '正方体：$V = 8, E = 12, F = 6$，$\\chi = 2$；环面三角剖分：$V - E + F = 0$。'
        ],
        related: ['polyhedra', 'triangulations', 'homology-groups-topology']
      }
    ]
  },
  {
    id: 'symplectic-geometry',
    name: '辛几何',
    en: 'SYMPLECTIC GEOMETRY',
    brief: '研究相空间与哈密顿力学',
    color: '#f0d795',
    angle: -55,
    topics: [
      {
        id: 'symplectic-forms',
        name: '辛形式',
        brief: '闭且非退化的微分二形式',
        keywords: ['辛形式', '非退化', '闭性', '辛流形'],
        definition: [
          '流形 $M$ 上的**辛形式** $\\omega$ 是闭的（$d\\omega = 0$）且非退化的微分二形式。非退化指 $\\omega(v, w) = 0$ 对所有 $w$ 成立蕴含 $v = 0$。',
          '带辛形式的流形称为**辛流形**，其维数必为偶数（$2n$）。$\\omega^n$ 给出体积形式。'
        ],
        intuition: [
          '辛形式是“相空间的面积形式”：它测量二维投影的有向面积。非退化保证每个方向都有“配对方向”，这是哈密顿力学的几何基础。',
          '与黎曼度量不同，辛形式不测量长度，只测量面积；它允许“辛挤压”——这也是辛几何与黎曼几何的根本区别。'
        ],
        formulas: [
          {
            tex: '\\omega = \\sum_{i=1}^{n} dp_i \\wedge dq_i',
            caption: '标准辛形式（相空间 $\\mathbb{R}^{2n}$ 上的坐标表示）。'
          },
          {
            tex: 'd\\omega = 0,\\quad \\omega^{\\wedge n} \\ne 0',
            caption: '闭性与非退化。'
          },
          {
            tex: '\\dim M = 2n',
            caption: '辛流形的维数必为偶数。'
          }
        ],
        example: [
          '$\\mathbb{R}^2$ 上的 $\\omega = dx \\wedge dy$ 是辛形式；任意二维定向曲面配上面积形式也是辛流形。'
        ],
        related: ['symplectomorphisms', 'hamiltonian-systems', 'lagrangian-submanifolds']
      },
      {
        id: 'symplectomorphisms',
        name: '辛变换',
        brief: '保持辛形式的变换',
        keywords: ['辛变换', '辛同胚', '哈密顿向量场', '辛群'],
        definition: [
          '微分同胚 $\\phi: (M, \\omega) \\to (N, \\eta)$ 称为**辛同胚**，如果 $\\phi^* \\eta = \\omega$。保持辛形式的线性变换构成辛群 $Sp(2n, \\mathbb{R})$。',
          '辛同胚保持相空间体积，但不一定保持距离；辛几何中的“刚性”体现在 Gromov 非挤压定理。'
        ],
        intuition: [
          '辛变换是“保持相空间面积”的变换：它允许拉伸一个方向，但必须压缩另一个方向，使总面积不变。',
          'Hamilton 方程的解流是辛同胚（Liouville 定理），这解释了为什么相空间体积在时间演化下守恒。'
        ],
        formulas: [
          {
            tex: '\\phi^* \\omega = \\omega',
            caption: '辛同胚的定义。'
          },
          {
            tex: 'Sp(2n, \\mathbb{R}) = \\{A : A^\\top J A = J\\}',
            caption: '线性辛群（$J$ 为标准复结构）。'
          }
        ],
        example: [
          '线性变换 $A = \\mathrm{diag}(2, 1/2)$ 在 $\\mathbb{R}^2$ 上保持面积形式 $dx \\wedge dy$，是辛变换。'
        ],
        related: ['symplectic-forms', 'hamiltonian-systems', 'symplectic-topology']
      },
      {
        id: 'hamiltonian-systems',
        name: '哈密顿系统',
        brief: '用能量函数描述相空间演化',
        keywords: ['哈密顿系统', '哈密顿方程', '能量守恒', '可积系统'],
        definition: [
          '辛流形 $(M, \\omega)$ 上的**哈密顿系统**由光滑函数 $H: M \\to \\mathbb{R}$（哈密顿量）定义，其向量场 $X_H$ 满足 $\\iota_{X_H}\\omega = dH$。',
          '哈密顿方程在标准相空间上为 $\\dot q_i = \\partial H/\\partial p_i$，$\\dot p_i = -\\partial H/\\partial q_i$。'
        ],
        intuition: [
          '哈密顿系统是“能量驱动的演化”：$H$ 是能量，系统沿能量守恒的方向运动。相空间中的轨迹位于等能面上。',
          '可积系统有足够多的守恒量，轨迹被限制在环面上（KAM 理论）；不可积系统可能表现混沌（如三体问题）。'
        ],
        formulas: [
          {
            tex: '\\dot q_i = \\frac{\\partial H}{\\partial p_i},\\quad \\dot p_i = -\\frac{\\partial H}{\\partial q_i}',
            caption: '哈密顿方程。'
          },
          {
            tex: '\\frac{dH}{dt} = 0',
            caption: '能量守恒（沿哈密顿流）。'
          },
          {
            tex: '\\iota_{X_H}\\omega = dH',
            caption: '哈密顿向量场的几何定义。'
          }
        ],
        example: [
          '简谐振子 $H = \\frac12(p^2 + q^2)$ 的轨迹是相空间中的圆，能量守恒；单摆的相图有摆动区与旋转区，分隔线为分界线。'
        ],
        related: ['symplectic-forms', 'symplectomorphisms', 'moment-maps']
      },
      {
        id: 'lagrangian-submanifolds',
        name: '拉格朗日子流形',
        brief: '辛形式限制为零的半维子流形',
        keywords: ['拉格朗日子流形', 'Lagrange 子空间', '辛形式', '半维'],
        definition: [
          '辛流形 $(M^{2n}, \\omega)$ 的子流形 $L$ 称为**拉格朗日子流形**，如果 $\\dim L = n$ 且 $\\omega|_L = 0$。',
          '拉格朗日子流形是辛几何中“最大且辛形式消失”的子流形，在镜像对称与 Floer 同调中扮演核心角色。'
        ],
        intuition: [
          '在相空间 $\\mathbb{R}^{2n}$ 中，位置空间 $\\{p = 0\\}$ 与动量空间 $\\{q = 0\\}$ 都是拉格朗日子流形：它们的一半维数且没有“面积”。',
          '拉格朗日子流形是哈密顿力学中“构型空间”的推广；Lagrange 括号与 Hamilton–Jacobi 方程都与之相关。'
        ],
        formulas: [
          {
            tex: '\\dim L = n,\\quad \\omega|_L = 0',
            caption: '拉格朗日子流形的定义。'
          },
          {
            tex: 'L = \\{(q, p) : p = dS(q)\\}',
            caption: '由生成函数 $S$ 给出的拉格朗日子流形（图）。'
          }
        ],
        example: [
          '在 $\\mathbb{R}^2$ 中，任何直线都是拉格朗日子流形（一维，辛形式限制为零）。'
        ],
        related: ['symplectic-forms', 'hamiltonian-systems', 'moment-maps']
      },
      {
        id: 'moment-maps',
        name: '动量映射',
        brief: '联系连续对称与守恒量',
        keywords: ['动量映射', 'Noether 定理', '辛约化', '守恒量'],
        definition: [
          '李群 $G$ 作用在辛流形 $(M, \\omega)$ 上，**动量映射** $\\mu: M \\to \\mathfrak{g}^*$ 把辛作用编码为李代数对偶中的值，满足 $d\\langle \\mu, \\xi\\rangle = \\iota_{\\xi_M}\\omega$。',
          '动量映射是 Noether 定理的几何版本：连续对称对应守恒量。'
        ],
        intuition: [
          '平移对称对应动量守恒，旋转对称对应角动量守恒——这些都是动量映射的具体例子。',
          '辛约化（Marsden–Weinstein）用动量映射的零点集模去群作用，构造新的辛流形，是研究对称系统的标准工具。'
        ],
        formulas: [
          {
            tex: 'd\\langle \\mu, \\xi \\rangle = \\iota_{\\xi_M}\\omega',
            caption: '动量映射的定义。'
          },
          {
            tex: '\\mu(q, p) = p',
            caption: '平移作用的动量映射。'
          },
          {
            tex: 'M /\\!/ G = \\mu^{-1}(0)/G',
            caption: '辛约化（Marsden–Weinstein 商）。'
          }
        ],
        example: [
          '平面上的旋转群 $SO(2)$ 作用在 $\\mathbb{R}^2$ 上，动量映射为角动量 $\\mu(q, p) = q_1 p_2 - q_2 p_1$，在旋转下守恒。'
        ],
        related: ['symplectic-forms', 'hamiltonian-systems', 'applied/symmetry-conservation']
      },
      {
        id: 'symplectic-topology',
        name: '辛拓扑',
        brief: '研究辛同胚下的整体不变量',
        keywords: ['辛拓扑', 'Gromov 非挤压', '伪全纯曲线', '辛容量'],
        definition: [
          '**辛拓扑**研究辛流形在辛同胚下的整体性质。Gromov（1985）非挤压定理：球 $B^{2n}(r)$ 不能辛嵌入到圆柱 $Z^{2n}(R) = B^2(R) \\times \\mathbb{R}^{2n-2}$ 中，除非 $r \\le R$。',
          '辛容量是不变量，度量流形能容纳多大的球；伪全纯曲线是研究辛拓扑的核心工具（Gromov–Witten 不变量）。'
        ],
        intuition: [
          '辛几何有“刚性”：虽然允许挤压，但不能把大球塞进细圆柱。这与黎曼几何截然不同（黎曼几何可以任意缩放）。',
          'Gromov 的非挤压定理开启了辛拓扑；伪全纯曲线技术后来发展成 Gromov–Witten 理论，连接代数几何与镜像对称。'
        ],
        formulas: [
          {
            tex: 'B^{2n}(r) \\hookrightarrow Z^{2n}(R) \\implies r \\le R',
            caption: 'Gromov 非挤压定理。'
          },
          {
            tex: 'c(B^{2n}(r)) = \\pi r^2',
            caption: '辛容量（Gromov 宽度）。'
          }
        ],
        example: [
          '在 $\\mathbb{R}^{2n}$ 中，单位球可以辛嵌入到任意细的圆柱中吗？Gromov 定理说不能，只要球的半径大于圆柱半径。'
        ],
        related: ['symplectic-forms', 'symplectomorphisms', 'lagrangian-submanifolds']
      }
    ]
  }
);