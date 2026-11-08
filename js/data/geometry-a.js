/* 数学知识地图 · 几何与拓扑（上） */
window.ATLAS = window.ATLAS || { subjects: {} };

window.ATLAS.subjects.geometry = {
  id: 'geometry',
  name: '几何与拓扑',
  en: 'GEOMETRY & TOPOLOGY',
  tagline: '形状怎样弯曲，空间又保留了哪些东西',
  color: '#e3c06e',
  startAngle: 125,
  branches: [
    {
      id: 'euclidean-non-euclidean',
      name: '欧氏与非欧几何',
      en: 'EUCLIDEAN & NON-EUCLIDEAN',
      brief: '不同公理下的距离、角与平行',
      color: '#e8c874',
      angle: 125,
      topics: [
        {
          id: 'euclidean-space',
          name: '欧氏空间',
          brief: '研究熟悉的平直距离结构',
          keywords: ['欧氏空间', '内积', '距离', '等距变换'],
          definition: [
            '**欧氏空间** $\\mathbb{R}^n$ 是带有标准内积 $\\langle x, y \\rangle = \\sum x_i y_i$ 的向量空间。内积诱导距离 $d(x, y) = \\|x - y\\|$ 与角度。',
            '欧氏几何研究在等距变换（平移、旋转、反射）下不变的性质：距离、角度、面积等。'
          ],
          intuition: [
            '欧氏空间是我们熟悉的平直空间：三角形内角和为 $\\pi$，过直线外一点恰有一条平行线，勾股定理成立。',
            '它是所有几何的参照系：非欧几何通过修改平行公设得到，黎曼几何通过把内积变成位置的函数得到。'
          ],
          formulas: [
            {
              tex: 'd(x, y) = \\sqrt{\\sum_{i=1}^{n} (x_i - y_i)^2}',
              caption: '欧氏距离。'
            },
            {
              tex: '\\langle x, y \\rangle = \\|x\\|\\,\\|y\\| \\cos\\theta',
              caption: '内积与角度的关系。'
            },
            {
              tex: '\\|x + y\\|^2 + \\|x - y\\|^2 = 2\\|x\\|^2 + 2\\|y\\|^2',
              caption: '平行四边形恒等式。'
            }
          ],
          example: [
            '$\\mathbb{R}^2$ 中两点 $(1, 2)$ 与 $(4, 6)$ 的距离为 $\\sqrt{9 + 16} = 5$；这正是勾股定理的应用。'
          ],
          related: ['axioms-parallel', 'riemannian-metric', 'algebra/vector-spaces']
        },
        {
          id: 'axioms-parallel',
          name: '公理与平行',
          brief: '改变平行公设得到不同几何',
          keywords: ['平行公设', '欧几里得公设', '非欧几何', '罗巴切夫斯基'],
          definition: [
            '欧几里得《几何原本》的五条公设中，第五公设（平行公设）长期被认为不够“显然”：过直线外一点，恰有一条与已知直线平行的直线。',
            '若把第五公设替换为“过直线外一点有无数条平行线”，得到**双曲几何**；替换为“没有平行线”，得到**椭圆几何**（球面几何的射影版本）。'
          ],
          intuition: [
            '平行公设的独立性在 19 世纪由罗巴切夫斯基、鲍耶与高斯独立发现：非欧几何与欧氏几何同样相容，只是描述不同的空间。',
            '这一发现打破了“几何是绝对真理”的观念：几何公理只是描述空间的约定，物理空间究竟是哪一种需要实验检验（广义相对论给出答案：弯曲时空）。'
          ],
          formulas: [
            {
              tex: '\\text{欧氏：过 } P \\text{ 恰有 1 条平行线}',
              caption: '第五公设。'
            },
            {
              tex: '\\text{双曲：过 } P \\text{ 有 } \\infty \\text{ 条平行线}',
              caption: '罗巴切夫斯基几何。'
            },
            {
              tex: '\\text{椭圆：过 } P \\text{ 有 0 条平行线}',
              caption: '黎曼椭圆几何。'
            }
          ],
          example: [
            '在球面上，所有“直线”（大圆）都相交，因此没有平行线；三角形内角和大于 $\\pi$。'
          ],
          related: ['euclidean-space', 'hyperbolic-geometry', 'spherical-geometry']
        },
        {
          id: 'hyperbolic-geometry',
          name: '双曲几何',
          brief: '研究负曲率的几何模型',
          keywords: ['双曲几何', 'Poincaré 圆盘', '负曲率', '双曲距离'],
          definition: [
            '**双曲几何**是满足“过直线外一点有无数条平行线”的几何。其标准模型是 Poincaré 圆盘：单位圆盘内部配上双曲度量 $ds^2 = \\frac{4(dx^2 + dy^2)}{(1 - x^2 - y^2)^2}$。',
            '双曲空间具有常负高斯曲率；三角形内角和小于 $\\pi$，面积与角亏成正比。'
          ],
          intuition: [
            '在 Poincaré 圆盘里，越靠近边界距离越“膨胀”，因此边界不在空间中，而是无穷远。测地线是与边界正交的圆弧。',
            '双曲几何与相对论、M.C. Escher 的圆极限版画、复杂网络（负曲率嵌入）都有联系。'
          ],
          formulas: [
            {
              tex: 'ds^2 = \\frac{4(dx^2 + dy^2)}{(1 - x^2 - y^2)^2}',
              caption: 'Poincaré 圆盘度量。'
            },
            {
              tex: '\\alpha + \\beta + \\gamma < \\pi',
              caption: '双曲三角形内角和小于 $\\pi$。'
            },
            {
              tex: '\\mathrm{Area} = \\pi - (\\alpha + \\beta + \\gamma)',
              caption: '高斯–博内定理：面积等于角亏（曲率 $-1$ 时）。'
            }
          ],
          example: [
            '在 Poincaré 圆盘中，三角形三个顶点靠近边界时内角和趋于 0，面积趋于 $\\pi$；靠近中心时内角和接近 $\\pi$。'
          ],
          related: ['axioms-parallel', 'spherical-geometry', 'curvature-geodesics']
        },
        {
          id: 'spherical-geometry',
          name: '球面几何',
          brief: '大圆充当球面上的测地线',
          keywords: ['球面几何', '大圆', '球面三角', '正曲率'],
          definition: [
            '**球面几何**研究球面上的几何：直线是大圆（球心与两点确定的平面与球面的交线），距离为球面弧长，角度为大圆切线的夹角。',
            '球面几何具有常正曲率；球面三角形内角和大于 $\\pi$，面积与角盈成正比。'
          ],
          intuition: [
            '在球面上，任意两条大圆都相交，因此没有平行线（椭圆几何的模型）。从北京飞纽约的最短航线沿大圆，而非地图上的“直线”。',
            '球面几何是航海、航空与天体力学的基础，也是广义相对论中空间弯曲的直观入口。'
          ],
          formulas: [
            {
              tex: 'd(A, B) = R \\arccos(\\sin\\phi_A \\sin\\phi_B + \\cos\\phi_A \\cos\\phi_B \\cos(\\Delta\\lambda))',
              caption: '球面距离（Haversine / 余弦公式）。'
            },
            {
              tex: '\\alpha + \\beta + \\gamma > \\pi',
              caption: '球面三角形内角和大于 $\\pi$。'
            },
            {
              tex: '\\mathrm{Area} = R^2(\\alpha + \\beta + \\gamma - \\pi)',
              caption: '球面三角形面积等于角盈乘以 $R^2$。'
            }
          ],
          example: [
            '地球赤道、本初子午线与 $90^\\circ$ 经线构成球面三角形，三个角都是 $90^\\circ$，内角和为 $270^\\circ$，面积为 $\\frac{\\pi}{2} R^2$（八分之一球面）。'
          ],
          related: ['axioms-parallel', 'hyperbolic-geometry', 'curvature-geodesics']
        },
        {
          id: 'projective-geometry',
          name: '射影几何',
          brief: '研究投影下保持的几何性质',
          keywords: ['射影几何', '齐次坐标', '交比', '对偶'],
          definition: [
            '**射影空间** $\\mathbb{P}^n$ 是向量空间 $\\mathbb{R}^{n+1}$ 的一维子空间集合。点用齐次坐标 $[x_0 : x_1 : \\cdots : x_n]$ 表示，非零比例等价。',
            '射影几何研究在射影变换下不变的性质： incidenc（点线关联）、交比、调和分割。平行线在无穷远处相交，因此“平行”被统一为“相交于无穷远点”。'
          ],
          intuition: [
            '射影几何是“透视”的几何：画家的透视法中，平行线在画面深处汇聚。射影空间把无穷远点加入欧氏空间，使所有直线都相交。',
            '射影几何的对偶原理：在射影平面中，点与线互换后定理仍成立。这是最优雅的数学对称之一。'
          ],
          formulas: [
            {
              tex: '[x_0 : x_1 : \\cdots : x_n],\\quad (x_0, \\dots, x_n) \\ne 0',
              caption: '齐次坐标。'
            },
            {
              tex: '\\mathbb{P}^n = (\\mathbb{R}^{n+1} \\setminus \\{0\\}) / \\mathbb{R}^{\\times}',
              caption: '射影空间的商定义。'
            },
            {
              tex: '\\mathrm{CR}(A, B; C, D) = \\frac{AC}{CB} \\Big/ \\frac{AD}{DB}',
              caption: '交比：射影变换下的不变量。'
            }
          ],
          example: [
            '在射影平面中，两条平行线相交于无穷远点；所有无穷远点构成无穷远直线。'
          ],
          related: ['algebraic-varieties-geometry', 'euclidean-space', 'birational-geometry']
        }
      ]
    },
    {
      id: 'differential-geometry',
      name: '微分几何',
      en: 'DIFFERENTIAL GEOMETRY',
      brief: '用微积分研究弯曲对象',
      color: '#e3c06e',
      angle: 85,
      topics: [
        {
          id: 'smooth-manifolds',
          name: '光滑流形',
          brief: '局部看起来像欧氏空间',
          keywords: ['流形', '坐标卡', '图册', '光滑结构'],
          definition: [
            '**光滑流形** $M$ 是拓扑空间，每点有邻域同胚于 $\\mathbb{R}^n$，且不同坐标卡之间的转换映射是光滑的。这些坐标卡组成**图册**。',
            '维数 $n$ 是局部欧氏空间的维数。流形是“局部平直、整体弯曲”的空间：球面、环面、射影空间都是流形。'
          ],
          intuition: [
            '地球表面局部看起来是平的，整体却是球面——这就是流形的直观。坐标卡就像地图册：每张地图覆盖一块区域，重叠处需要光滑转换。',
            '流形是微分几何与物理的舞台：广义相对论中的时空是 4 维洛伦兹流形，相空间是辛流形。'
          ],
          formulas: [
            {
              tex: '\\varphi_\\alpha: U_\\alpha \\to \\mathbb{R}^n',
              caption: '坐标卡。'
            },
            {
              tex: '\\varphi_\\beta \\circ \\varphi_\\alpha^{-1}: \\varphi_\\alpha(U_\\alpha \\cap U_\\beta) \\to \\varphi_\\beta(U_\\alpha \\cap U_\\beta)',
              caption: '转换映射必须光滑。'
            }
          ],
          example: [
            '$S^2 = \\{(x, y, z) \\in \\mathbb{R}^3 : x^2 + y^2 + z^2 = 1\\}$ 是 2 维流形；用球极投影给出两张坐标卡（去掉北极与南极）。'
          ],
          related: ['tangent-spaces', 'riemannian-metric', 'algebra/lie-groups']
        },
        {
          id: 'tangent-spaces',
          name: '切空间',
          brief: '描述某一点的局部方向',
          keywords: ['切空间', '切向量', '切丛', '微分'],
          definition: [
            '流形 $M$ 在点 $p$ 的**切空间** $T_p M$ 是所有经过 $p$ 的曲线的速度向量构成的空间，维数为 $\\dim M$。',
            '把所有切空间并起来得到**切丛** $TM = \\bigsqcup_p T_p M$。光滑映射 $f: M \\to N$ 诱导切映射 $df_p: T_p M \\to T_{f(p)} N$。'
          ],
          intuition: [
            '切空间是流形在一点的“最佳线性近似”：球面上某点的切空间就是该点的切平面。',
            '切向量是方向导数：给定切向量 $v$，可以沿它求方向导数 $D_v f$。切丛把所有点的切空间组织成一个新流形。'
          ],
          formulas: [
            {
              tex: 'T_p M = \\{\\gamma\'(0) : \\gamma: (-\\varepsilon, \\varepsilon) \\to M,\\ \\gamma(0) = p\\}',
              caption: '切空间的曲线定义。'
            },
            {
              tex: 'df_p: T_p M \\to T_{f(p)} N',
              caption: '光滑映射的切映射（微分）。'
            }
          ],
          example: [
            '$S^2$ 在北极点的切空间是水平平面 $z = 1$；切向量对应球面上的方向导数。'
          ],
          related: ['smooth-manifolds', 'algebra/vector-spaces', 'riemannian-metric']
        },
        {
          id: 'curves-surfaces',
          name: '曲线与曲面',
          brief: '用微分研究弯曲对象',
          keywords: ['曲线', '曲面', '曲率', '第一基本形式'],
          definition: [
            '参数曲线 $\\gamma(t)$ 的**曲率** $\\kappa = \\|\\gamma\'\'\\| / \\|\\gamma\'\\|^2$ 衡量其弯曲程度；挠率 $\\tau$ 衡量其偏离平面的程度。',
            '参数曲面 $S(u, v)$ 的**第一基本形式** $E\\,du^2 + 2F\\,du\\,dv + G\\,dv^2$ 给出曲面上的长度与面积。'
          ],
          intuition: [
            '直线曲率为 0，半径 $R$ 的圆曲率为 $1/R$；曲率越大弯得越急。曲面的第一基本形式是“内置的尺子”，只依赖曲面自身的度量。',
            '高斯绝妙定理：高斯曲率只由第一基本形式决定，与曲面如何嵌入空间无关——这是内蕴几何的开端。'
          ],
          formulas: [
            {
              tex: '\\kappa = \\frac{\\|\\gamma\' \\times \\gamma\'\'\\|}{\\|\\gamma\'\\|^3}',
              caption: '空间曲线的曲率。'
            },
            {
              tex: 'I = E\\,du^2 + 2F\\,du\\,dv + G\\,dv^2',
              caption: '曲面第一基本形式。'
            },
            {
              tex: 'K = \\frac{LN - M^2}{EG - F^2}',
              caption: '高斯曲率（$L, M, N$ 为第二基本形式系数）。'
            }
          ],
          example: [
            '圆柱面的高斯曲率为 0（虽在空间中弯曲，但可以展开成平面）；球面半径为 $R$ 时高斯曲率为 $1/R^2$。'
          ],
          related: ['curvature-geodesics', 'tangent-spaces', 'riemannian-metric']
        },
        {
          id: 'curvature-geodesics',
          name: '曲率与测地线',
          brief: '研究弯曲及局部最直的路径',
          keywords: ['高斯曲率', '测地线', 'Gauss-Bonnet', '曲率'],
          definition: [
            '**高斯曲率** $K$ 是曲面上每点的高斯映射的雅可比行列式，刻画内在弯曲。**测地线**是曲面上“最直的路径”：其加速度垂直于曲面，等价于局部最短路径。',
            '**Gauss–Bonnet 定理**：闭曲面上的高斯曲率积分等于 $2\\pi \\chi(M)$（$\\chi$ 为 Euler 示性数）。'
          ],
          intuition: [
            '测地线是“沿着走不转弯”的路径：地球上的大圆是球面的测地线，飞机沿大圆飞行最省距离。',
            'Gauss–Bonnet 把局部曲率（积分）与整体拓扑（Euler 示性数）联系起来：球面无论怎样弯曲，总曲率都是 $4\\pi$。这是“局部决定整体”的典范。'
          ],
          formulas: [
            {
              tex: '\\oint_{\\partial R} \\kappa_g\\,ds + \\iint_R K\\,dA = 2\\pi\\chi(R)',
              caption: 'Gauss–Bonnet 定理（带边界版本）。'
            },
            {
              tex: '\\int_M K\\,dA = 2\\pi \\chi(M)',
              caption: '闭曲面的 Gauss–Bonnet。'
            },
            {
              tex: '\\nabla_{\\dot\\gamma} \\dot\\gamma = 0',
              caption: '测地线方程：协变加速度为零。'
            }
          ],
          example: [
            '球面 $S^2$ 的 $\\chi = 2$，$\\int K\\,dA = 4\\pi$；环面 $T^2$ 的 $\\chi = 0$，总曲率为 0。'
          ],
          related: ['curves-surfaces', 'riemannian-metric', 'euler-characteristic']
        },
        {
          id: 'riemannian-metric',
          name: '黎曼度量',
          brief: '在流形上定义长度与角度',
          keywords: ['黎曼度量', '度量张量', 'Levi-Civita 联络', '测地线'],
          definition: [
            '**黎曼度量** $g$ 是流形上每点切空间的正定内积，光滑依赖于点。带黎曼度量的流形称为**黎曼流形** $(M, g)$。',
            '度量诱导长度、体积、距离以及唯一的无挠度量相容联络（Levi-Civita 联络），从而定义曲率张量与测地线。'
          ],
          intuition: [
            '黎曼度量是“每点一把尺子”：在球面上，尺子随位置变化，所以沿不同方向的测量结果不同。',
            '黎曼把高斯的内蕴曲面理论推广到任意维：空间不必嵌入更高维欧氏空间，自己就能有弯曲。广义相对论正建立在这一思想之上。'
          ],
          formulas: [
            {
              tex: 'ds^2 = \\sum_{i,j} g_{ij}(x)\\,dx^i\\,dx^j',
              caption: '黎曼度量的局部表达式。'
            },
            {
              tex: 'L(\\gamma) = \\int_a^b \\sqrt{g_{\\gamma(t)}(\\dot\\gamma(t), \\dot\\gamma(t))}\\,dt',
              caption: '曲线的长度。'
            },
            {
              tex: 'R^\\rho_{\\sigma\\mu\\nu}',
              caption: '黎曼曲率张量，刻画度量偏离平坦的程度。'
            }
          ],
          example: [
            '单位球面的标准度量 $ds^2 = d\\theta^2 + \\sin^2\\theta\\,d\\varphi^2$，其高斯曲率为 1。'
          ],
          related: ['smooth-manifolds', 'curvature-geodesics', 'tangent-spaces']
        }
      ]
    },
    {
      id: 'general-topology',
      name: '一般拓扑',
      en: 'GENERAL TOPOLOGY',
      brief: '从邻域关系定义连续与极限',
      color: '#d8b95f',
      angle: 170,
      topics: [
        {
          id: 'open-sets-continuity',
          name: '开集与连续',
          brief: '从邻域关系定义连续性',
          keywords: ['拓扑', '开集', '连续映射', '邻域'],
          definition: [
            '集合 $X$ 上的**拓扑** $\\mathcal{T}$ 是一族子集，包含 $\\emptyset, X$，对任意并与有限交封闭。其成员称为**开集**。',
            '映射 $f: X \\to Y$ 称为**连续**，如果每个开集的原像都是开集：$U \\in \\mathcal{T}_Y \\Rightarrow f^{-1}(U) \\in \\mathcal{T}_X$。'
          ],
          intuition: [
            '拓扑是“橡皮几何”：只关心哪些集合是开的（即邻近关系），不关心距离。连续映射就是“不撕裂”的映射：开集的原像仍开。',
            '在度量空间中，开集等价于“每点有小球包含其中”，这与 $\\varepsilon$-$\\delta$ 连续完全一致；拓扑把这一概念推广到没有距离的空间。'
          ],
          formulas: [
            {
              tex: '\\varnothing, X \\in \\mathcal{T};\\quad \\bigcup_i U_i \\in \\mathcal{T};\\quad U, V \\in \\mathcal{T} \\Rightarrow U \\cap V \\in \\mathcal{T}',
              caption: '拓扑的公理。'
            },
            {
              tex: 'f \\text{ 连续} \\iff \\forall U \\in \\mathcal{T}_Y,\\ f^{-1}(U) \\in \\mathcal{T}_X',
              caption: '连续性的开集刻画。'
            }
          ],
          example: [
            '$\\mathbb{R}$ 上的标准拓扑由开区间生成；$\\mathbb{R} \\to \\mathbb{R}$ 的连续函数正是通常意义的连续函数。'
          ],
          related: ['connectedness', 'compactness', 'homeomorphism']
        },
        {
          id: 'connectedness',
          name: '连通性',
          brief: '空间不能分成分离的两部分',
          keywords: ['连通性', '道路连通', '连通分支', '连通空间'],
          definition: [
            '拓扑空间 $X$ 称为**连通**，如果它不能表示为两个非空不交开集的并。若任意两点都有连续道路相连，则称为**道路连通**。',
            '连通分支是极大的连通子集；道路连通强于连通，但反之不成立（如拓扑学家的正弦曲线）。'
          ],
          intuition: [
            '连通空间是“一整块”的：不能把它分成互不相交的两部分。$\\mathbb{R}$ 连通，$\\mathbb{R} \\setminus \\{0\\}$ 不连通。',
            '连通性在连续映射下保持：连续函数把连通集映为连通集。这就是介值定理的拓扑本质。'
          ],
          formulas: [
            {
              tex: 'X \\text{ 连通} \\iff X = U \\sqcup V,\\ U, V \\text{ 开} \\implies U = \\varnothing \\ \\text{或}\\ V = \\varnothing',
              caption: '连通性的定义。'
            },
            {
              tex: 'f: X \\to Y \\text{ 连续},\\ X \\text{ 连通} \\implies f(X) \\text{ 连通}',
              caption: '连通性在连续映射下保持（介值定理）。'
            }
          ],
          example: [
            '$[0, 1]$ 连通，因此连续函数 $f: [0,1] \\to \\mathbb{R}$ 取遍介值；$[0,1] \\cup [2,3]$ 不连通。'
          ],
          related: ['open-sets-continuity', 'compactness', 'homeomorphism']
        },
        {
          id: 'compactness',
          name: '紧致性',
          brief: '任意开覆盖均有有限子覆盖',
          keywords: ['紧致', 'Heine-Borel', '有限子覆盖', '紧集'],
          definition: [
            '拓扑空间 $X$ 称为**紧致**，如果每个开覆盖都有有限子覆盖：任意开集族 $\\{U_i\\}$ 覆盖 $X$，都存在有限个 $U_{i_1}, \\dots, U_{i_n}$ 覆盖 $X$。',
            'Heine–Borel 定理：$\\mathbb{R}^n$ 的子集紧致当且仅当它有界且闭。紧集的连续像是紧集，紧集上的连续函数取得最大最小值。'
          ],
          intuition: [
            '紧致性是“有限性的拓扑版本”：虽然空间可能有无穷多点，但任何开覆盖都可以用有限个集合搞定。',
            '有界闭区间 $[a,b]$ 紧致，这是许多分析定理（极值定理、一致连续、Arzelà–Ascoli）的根源。'
          ],
          formulas: [
            {
              tex: 'X = \\bigcup_i U_i,\\ U_i \\text{ 开} \\implies \\exists\\, i_1, \\dots, i_n:\\ X = \\bigcup_{k=1}^{n} U_{i_k}',
              caption: '紧致性定义。'
            },
            {
              tex: 'K \\subseteq \\mathbb{R}^n \\text{ 紧} \\iff K \\text{ 有界且闭}',
              caption: 'Heine–Borel 定理。'
            },
            {
              tex: 'f: X \\to \\mathbb{R} \\text{ 连续},\\ X \\text{ 紧} \\implies f \\text{ 取得最值}',
              caption: '极值定理。'
            }
          ],
          example: [
            '$[0,1]$ 紧致；$(0,1)$ 不紧致（开覆盖 $\\{(1/n, 1)\\}$ 无有限子覆盖）；$\\mathbb{R}$ 不紧致（覆盖 $\\{(-n, n)\\}$ 无有限子覆盖）。'
          ],
          related: ['open-sets-continuity', 'connectedness', 'analysis/uniform-convergence']
        },
        {
          id: 'quotient-spaces',
          name: '商空间',
          brief: '将选定的点粘合得到新空间',
          keywords: ['商空间', '商拓扑', '粘合', '等价关系'],
          definition: [
            '给定拓扑空间 $X$ 与等价关系 $\\sim$，商空间 $X/\\sim$ 的**商拓扑**定义为：$U \\subseteq X/\\sim$ 开当且仅当其原像 $\\pi^{-1}(U)$ 在 $X$ 中开。',
            '商空间实现“粘合”：把等价类中的点视为同一个点。圆周可以由区间 $[0,1]$ 粘合端点得到：$S^1 \\cong [0,1]/(0 \\sim 1)$。'
          ],
          intuition: [
            '商空间是“用胶水造新空间”：把矩形的对边粘合得到环面，把圆盘边界粘成一点得到球面。',
            '商拓扑是使投影映射连续的最强拓扑：开集尽可能少，因此“粘合”后的邻域对应原来的饱和开集。'
          ],
          formulas: [
            {
              tex: 'U \\subseteq X/\\sim \\text{ 开} \\iff \\pi^{-1}(U) \\subseteq X \\text{ 开}',
              caption: '商拓扑的定义。'
            },
            {
              tex: 'S^1 \\cong [0,1]/(0 \\sim 1)',
              caption: '圆周作为商空间。'
            },
            {
              tex: 'T^2 \\cong [0,1]^2/\\sim',
              caption: '环面由矩形对边粘合得到。'
            }
          ],
          example: [
            '把正方形左右边粘合得到圆柱面，再上下边粘合（可能需要翻转）得到环面或 Klein 瓶。'
          ],
          related: ['open-sets-continuity', 'homeomorphism', 'manifold-classification']
        },
        {
          id: 'homeomorphism',
          name: '同胚',
          brief: '连续且逆映射连续的对应',
          keywords: ['同胚', '拓扑不变量', '分类', '同胚映射'],
          definition: [
            '映射 $f: X \\to Y$ 称为**同胚**，如果它双射、连续且逆映射连续。此时称 $X$ 与 $Y$ **同胚**，记 $X \\cong Y$。',
            '同胚是拓扑学中的“同构”：从拓扑角度无法区分。拓扑不变量（连通性、紧致性、基本群、同调群）在同胚下保持不变。'
          ],
          intuition: [
            '同胚是“连续变形”：允许拉伸、弯曲，不允许撕裂或粘合。咖啡杯与甜甜圈同胚（都有一个洞），但与球面不同胚。',
            '同胚分类是拓扑学的核心目标：给定两个空间，判断它们是否同胚；这通常需要构造不变量。'
          ],
          formulas: [
            {
              tex: 'f: X \\to Y \\text{ 同胚} \\iff f \\text{ 双射且 } f, f^{-1} \\text{ 连续}',
              caption: '同胚的定义。'
            },
            {
              tex: 'X \\cong Y \\implies H_n(X) \\cong H_n(Y)',
              caption: '同胚保持同调群（拓扑不变量）。'
            }
          ],
          example: [
            '开区间 $(0,1)$ 与 $\\mathbb{R}$ 同胚（$x \\mapsto \\tan(\\pi(x - 1/2))$）；但 $[0,1]$ 与 $(0,1)$ 不同胚（紧致性不同）。'
          ],
          related: ['open-sets-continuity', 'connectedness', 'compactness']
        }
      ]
    },
    {
      id: 'algebraic-topology',
      name: '代数拓扑',
      en: 'ALGEBRAIC TOPOLOGY',
      brief: '用代数结构识别空间结构',
      color: '#eccf82',
      angle: -10,
      topics: [
        {
          id: 'fundamental-group',
          name: '基本群',
          brief: '记录闭合路径的同伦信息',
          keywords: ['基本群', '环路', '同伦', 'π1'],
          definition: [
            '设 $X$ 是拓扑空间，$x_0 \\in X$。以 $x_0$ 为基点的**环路**是连续映射 $\\gamma: [0,1] \\to X$ 且 $\\gamma(0) = \\gamma(1) = x_0$。环路的同伦类在拼接运算下构成**基本群** $\\pi_1(X, x_0)$。',
            '基本群一般非交换；它是空间的一阶同伦不变量，捕捉“一维洞”的信息。'
          ],
          intuition: [
            '基本群记录“绕圈的方式”：圆周的环路按绕数分类，构成 $\\mathbb{Z}$；球面的任何环路都能收缩到一点，基本群平凡。',
            '环面上的环路有“经线”与“纬线”两个方向，基本群为 $\\mathbb{Z}^2$；这解释了为什么环面上不能把一条经线连续收缩为一点。'
          ],
          formulas: [
            {
              tex: '\\pi_1(X, x_0) = \\{\\text{以 } x_0 \\text{ 为基点的环路}\\} / \\text{同伦}',
              caption: '基本群的定义。'
            },
            {
              tex: '\\pi_1(S^1) \\cong \\mathbb{Z},\\quad \\pi_1(S^n) = 0\\ (n \\ge 2)',
              caption: '球面的基本群。'
            },
            {
              tex: '\\pi_1(T^2) \\cong \\mathbb{Z} \\oplus \\mathbb{Z}',
              caption: '环面的基本群。'
            }
          ],
          example: [
            '$S^1$ 上的环路 $\\gamma_n(t) = e^{2\\pi i n t}$ 的绕数为 $n$，对应 $\\pi_1(S^1) \\cong \\mathbb{Z}$ 的整数 $n$。'
          ],
          related: ['homotopy', 'homology-groups-topology', 'fibrations']
        },
        {
          id: 'homotopy',
          name: '同伦',
          brief: '用连续变形比较映射',
          keywords: ['同伦', '同伦等价', '形变收缩', '同伦群'],
          definition: [
            '两个连续映射 $f, g: X \\to Y$ 称为**同伦**，如果存在连续映射 $H: X \\times [0,1] \\to Y$ 使 $H(x, 0) = f(x)$，$H(x, 1) = g(x)$。',
            '两个空间**同伦等价**，如果存在映射 $f: X \\to Y$ 与 $g: Y \\to X$ 使 $g \\circ f \\simeq \\mathrm{id}_X$，$f \\circ g \\simeq \\mathrm{id}_Y$。同伦等价比同胚更宽松。'
          ],
          intuition: [
            '同伦是“连续变形”：把映射 $f$ 连续地变成 $g$。同伦等价允许空间的某些部分被“挤压”成点。',
            '实心圆盘可以形变收缩到圆心，因此与一点同伦等价；而圆周不能，因为有一个洞。同伦论把“洞”的信息代数化。'
          ],
          formulas: [
            {
              tex: 'H: X \\times [0,1] \\to Y,\\quad H(x, 0) = f(x),\\ H(x, 1) = g(x)',
              caption: '同伦的定义。'
            },
            {
              tex: 'X \\simeq Y \\iff \\exists f, g:\\ g \\circ f \\simeq \\mathrm{id}_X,\\ f \\circ g \\simeq \\mathrm{id}_Y',
              caption: '同伦等价。'
            }
          ],
          example: [
            '$\\mathbb{R}^n$ 与一点同伦等价（$H(x, t) = (1-t)x$），因此 $\\mathbb{R}^n$ 的所有同伦群平凡。'
          ],
          related: ['fundamental-group', 'homology-groups-topology', 'fibrations']
        },
        {
          id: 'homology-groups-topology',
          name: '同调群',
          brief: '用循环与边界识别空间结构',
          keywords: ['同调群', '单纯同调', '奇异同调', 'Betti 数'],
          definition: [
            '拓扑空间的**奇异同调群** $H_n(X)$ 由奇异链复形的同调定义：$n$ 维链的形式和，边界算子 $\\partial$ 满足 $\\partial^2 = 0$。',
            '同调群是 Abel 群，比基本群更容易计算；$H_n$ 大致计数“$n$ 维洞”的数量。'
          ],
          intuition: [
            '同调把“洞”转化为代数：$H_1(S^1) = \\mathbb{Z}$ 表示有一个一维洞；$H_2(S^2) = \\mathbb{Z}$ 表示有一个二维空腔。',
            '与基本群相比，同调忽略了环路拼接的非交换性，只保留 Abel 化信息，因此计算更容易（Mayer–Vietoris、胞腔同调）。'
          ],
          formulas: [
            {
              tex: 'H_n(X) = \\ker \\partial_n / \\mathrm{im}\\,\\partial_{n+1}',
              caption: '奇异同调群的定义。'
            },
            {
              tex: 'H_1(X) \\cong \\pi_1(X)^{\\mathrm{ab}}',
              caption: '一阶同调是基本群的 Abel 化（Hurewicz 定理）。'
            },
            {
              tex: '\\beta_n = \\mathrm{rank}\\,H_n',
              caption: 'Betti 数。'
            }
          ],
          example: [
            '$H_1(S^1) = \\mathbb{Z}$，$H_1(T^2) = \\mathbb{Z}^2$，$H_n(S^k) = \\mathbb{Z}$ 当 $n = 0, k$，否则为 0。'
          ],
          related: ['fundamental-group', 'homotopy', 'cohomology']
        },
        {
          id: 'cohomology',
          name: '上同调',
          brief: '用另一套代数结构研究空间',
          keywords: ['上同调', 'de Rham 上同调', '上同调环', '对偶'],
          definition: [
            '**上同调**是链复形的对偶：把同态方向反过来，得到上链复形 $C^n = \\mathrm{Hom}(C_n, G)$，其上同调 $H^n(X; G)$ 与同调对偶（在适当条件下）。',
            'de Rham 上同调用微分形式定义：$H^n_{dR}(M) = \\ker d / \\mathrm{im}\\,d$，与奇异上同调同构（de Rham 定理）。'
          ],
          intuition: [
            '同调“数洞”，上同调“测量洞”：上同调类是可以在闭链上积分的对象。在 de Rham 理论中，闭形式对应上同调类，恰当形式对应平凡类。',
            '上同调有环结构（cup product），比同调携带更多信息；Poincaré 对偶把流形的同调与上同调联系起来。'
          ],
          formulas: [
            {
              tex: 'H^n_{dR}(M) = \\ker d_n / \\mathrm{im}\\,d_{n-1}',
              caption: 'de Rham 上同调。'
            },
            {
              tex: 'H^k_{dR}(M) \\cong H^k_{\\mathrm{sing}}(M; \\mathbb{R})',
              caption: 'de Rham 定理。'
            },
            {
              tex: '\\smile: H^p \\times H^q \\to H^{p+q}',
              caption: '上同调的 cup product。'
            }
          ],
          example: [
            '$H^0_{dR}(M)$ 是局部常值函数空间，对连通流形为 $\\mathbb{R}$；$H^1_{dR}(S^1) \\cong \\mathbb{R}$，由 $d\\theta$ 生成。'
          ],
          related: ['homology-groups-topology', 'fibrations', 'symplectic-forms']
        },
        {
          id: 'fibrations',
          name: '纤维化',
          brief: '研究整体空间与局部纤维的关系',
          keywords: ['纤维化', '纤维丛', '覆盖空间', '长正合列'],
          definition: [
            '映射 $p: E \\to B$ 称为**纤维化**（纤维丛）如果局部上 $E$ 同胚于 $B \\times F$，$F$ 为**纤维**。',
            '纤维化的同伦群满足长正合列 $\\cdots \\to \\pi_n(F) \\to \\pi_n(E) \\to \\pi_n(B) \\to \\pi_{n-1}(F) \\to \\cdots$，是同伦论的核心计算工具。'
          ],
          intuition: [
            '纤维丛是“扭曲的乘积”：圆柱面是圆 × 区间的平凡丛，莫比乌斯带是圆 × 区间的扭曲丛。',
            'Hopf 纤维化 $S^3 \\to S^2$ 的纤维是 $S^1$，长正合列据此计算球面的同伦群。'
          ],
          formulas: [
            {
              tex: 'p: E \\to B,\\quad p^{-1}(b) \\cong F',
              caption: '纤维丛的局部结构。'
            },
            {
              tex: '\\cdots \\to \\pi_n(F) \\to \\pi_n(E) \\to \\pi_n(B) \\to \\pi_{n-1}(F) \\to \\cdots',
              caption: '纤维化的同伦长正合列。'
            }
          ],
          example: [
            'Hopf 纤维化 $S^1 \\to S^3 \\to S^2$，据此由 $\\pi_n(S^1)$ 与 $\\pi_n(S^3)$ 计算 $\\pi_n(S^2)$。'
          ],
          related: ['homotopy', 'cohomology', 'smooth-manifolds']
        }
      ]
    }
  ]
};