/* 几何与拓扑学科 · 内容深化 */
window.ATLAS = window.ATLAS || {};
window.ATLAS.extras = window.ATLAS.extras || {};

window.ATLAS.extras['geometry/euclidean-space'] = {
  insight: '欧氏空间的内积给出向量长度、夹角与正交关系，为许多几何论证提供统一的代数语言；等距变换群则刻画空间的对称性。',
  examples: [
    '$\\mathbb{R}^2$ 中 $(1,2)$ 与 $(4,6)$ 的距离为 $\\sqrt{9+16}=5$，这正是勾股定理。',
    '平行四边形恒等式 $\\|x+y\\|^2+\\|x-y\\|^2=2\\|x\\|^2+2\\|y\\|^2$ 刻画了内积与范数的关系。'
  ]
};

window.ATLAS.extras['geometry/axioms-parallel'] = {
  insight: '平行公设的独立性表明几何不是“绝对真理”，而是公理选择的产物。三种常曲率几何分别对应“恰有一条”“无数条”“没有”平行线。',
  examples: [
    '球面上任意两条大圆都相交，因此没有平行线；球面三角形内角和大于 $\\pi$。',
    '双曲平面上过直线外一点有无数条平行线；三角形内角和小于 $\\pi$。'
  ]
};

window.ATLAS.extras['geometry/hyperbolic-geometry'] = {
  insight: '双曲几何是负曲率空间，面积与角亏成正比；Poincaré 圆盘模型把无穷远边界压到圆周上，测地线是与边界正交的圆弧。',
  examples: [
    'Poincaré 圆盘中双曲三角形的面积等于 $\\pi-(\\alpha+\\beta+\\gamma)$（曲率 $-1$ 时）。',
    '双曲距离在靠近边界时迅速膨胀，因此边界不在空间中，而是“无穷远”。'
  ]
};

window.ATLAS.extras['geometry/spherical-geometry'] = {
  insight: '球面几何是正曲率空间，大圆是测地线；球面三角形的面积等于角盈乘以 $R^2$，这是 Gauss–Bonnet 的最简单情形。',
  examples: [
    '赤道、本初子午线与 $90^\\circ$ 经线构成球面三角形，三个角都是 $90^\\circ$，内角和 $270^\\circ$。',
    '球面距离公式 $d=R\\arccos(\\sin\\phi_1\\sin\\phi_2+\\cos\\phi_1\\cos\\phi_2\\cos\\Delta\\lambda)$ 是航海与航空的基础。'
  ]
};

window.ATLAS.extras['geometry/projective-geometry'] = {
  insight: '射影几何把无穷远点加入空间，使所有直线都相交；交比是射影变换下的不变量，对偶原理让点与线可以互换。',
  examples: [
    '欧氏平面中两条平行线在射影平面中相交于无穷远点。',
    '透视投影保持交比，因此可以用于从照片恢复三维结构。'
  ]
};

window.ATLAS.extras['geometry/smooth-manifolds'] = {
  insight: '流形是局部欧氏的拓扑空间，图册与转换映射赋予其光滑结构；流形是微分几何、李群与物理的舞台。',
  examples: [
    '$S^2$ 用球极投影给出两张坐标卡，覆盖除南北极外的区域。',
    '环面 $T^2$ 是 2 维流形，可由矩形的对边粘合得到。'
  ]
};

window.ATLAS.extras['geometry/tangent-spaces'] = {
  insight: '切空间是流形在一点的最佳线性近似；切丛把所有切空间组织成新流形，向量场是切丛的光滑截面。',
  examples: [
    '$S^2$ 在北极的切空间是水平平面 $z=1$。',
    '光滑映射 $f:M\\to N$ 的微分 $df_p$ 是切空间之间的线性映射。'
  ]
};

window.ATLAS.extras['geometry/curves-surfaces'] = {
  insight: '曲线的曲率与挠率、曲面的第一/第二基本形式刻画局部形状；高斯绝妙定理说明高斯曲率只依赖第一基本形式，是内蕴的。',
  examples: [
    '半径 $R$ 的圆曲率为 $1/R$；直线的曲率为 $0$。',
    '圆柱面的高斯曲率为 $0$（可展开成平面），球面为 $1/R^2$。'
  ]
};

window.ATLAS.extras['geometry/curvature-geodesics'] = {
  insight: '测地线是局部最短路径；Gauss–Bonnet 把局部曲率积分与整体拓扑（Euler 示性数）联系起来，是“局部决定整体”的典范。',
  examples: [
    '球面上的大圆是测地线；飞机沿大圆飞行最省距离。',
    '球面总曲率 $4\\pi$，环面总曲率 $0$，对应 $\\chi=2$ 与 $\\chi=0$。'
  ]
};

window.ATLAS.extras['geometry/riemannian-metric'] = {
  insight: '黎曼度量在每点给出内积，使长度、角度、体积与曲率都可定义；它是广义相对论的数学基础，也是内蕴几何的出发点。',
  examples: [
    '单位球面的标准度量 $ds^2=d\\theta^2+\\sin^2\\theta\\,d\\varphi^2$，高斯曲率为 $1$。',
    'Poincaré 圆盘度量 $ds^2=\\frac{4(dx^2+dy^2)}{(1-x^2-y^2)^2}$ 给出常负曲率。'
  ]
};

window.ATLAS.extras['geometry/open-sets-continuity'] = {
  insight: '拓扑用开集定义邻近性；连续映射是开集原像仍开的映射，这推广了度量空间中的 $\\varepsilon$-$\\delta$ 连续。',
  examples: [
    '$\\mathbb{R}$ 的标准拓扑由开区间生成，连续函数正是通常意义的连续函数。',
    '离散拓扑下所有映射都连续，因为每个子集都是开集。'
  ]
};

window.ATLAS.extras['geometry/connectedness'] = {
  insight: '连通性刻画空间“不能被分成两块”；连续映射保持连通性，介值定理正是连通性的拓扑表述。',
  examples: [
    '$[0,1]$ 连通，$[0,1]\\cup[2,3]$ 不连通。',
    '连续函数把连通集映为连通集，因此 $f([0,1])$ 是一个区间。'
  ]
};

window.ATLAS.extras['geometry/compactness'] = {
  insight: '紧致性把无限覆盖化为有限覆盖，是分析中“极值存在”“一致连续”的根源；Heine–Borel 定理给出 $\\mathbb{R}^n$ 中的判据。',
  examples: [
    '$[0,1]$ 紧致，$(0,1)$ 不紧致（开覆盖 $\\{(1/n,1)\\}$ 无有限子覆盖）。',
    '紧集上的连续函数取得最大值与最小值。'
  ]
};

window.ATLAS.extras['geometry/quotient-spaces'] = {
  insight: '商空间通过粘合构造新空间；商拓扑是使投影映射连续的最强拓扑，开集尽可能少。',
  examples: [
    '把 $[0,1]$ 的端点粘合得到 $S^1$。',
    '把矩形的对边粘合得到环面；翻转一边后粘合得到 Klein 瓶。'
  ]
};

window.ATLAS.extras['geometry/homeomorphism'] = {
  insight: '同胚是拓扑同构；拓扑不变量（连通性、紧致性、基本群、同调群）用于区分不同胚的空间。',
  examples: [
    '$(0,1)$ 与 $\\mathbb{R}$ 同胚：$x\\mapsto\\tan(\\pi(x-1/2))$。',
    '咖啡杯与甜甜圈同胚（都有一个洞），但与球面不同胚。'
  ]
};

window.ATLAS.extras['geometry/fundamental-group'] = {
  insight: '基本群记录环路同伦类，捕捉一维洞；它是同伦不变量，但对高维洞不敏感，因此需要高阶同伦群与同调。',
  examples: [
    '$\\pi_1(S^1)\\cong\\mathbb{Z}$，绕数分类环路。',
    '$\\pi_1(T^2)\\cong\\mathbb{Z}^2$，对应经线与纬线两个方向。'
  ]
};

window.ATLAS.extras['geometry/homotopy'] = {
  insight: '同伦是连续变形，同伦等价弱于同胚；同伦不变量用于分类空间，允许把可缩部分忽略。',
  examples: [
    '$\\mathbb{R}^n$ 与一点同伦等价：$H(x,t)=(1-t)x$。',
    '实心圆盘可以形变收缩到圆心，因此与一点同伦等价。'
  ]
};

window.ATLAS.extras['geometry/homology-groups-topology'] = {
  insight: '同调群用 Abel 群度量各维洞；它比基本群易算，一阶 Hurewicz 定理说明路径连通空间的一阶整数奇异同调与基本群的 Abel 化自然同构。',
  examples: [
    '$H_1(S^1)=\\mathbb{Z}$，$H_2(S^2)=\\mathbb{Z}$。',
    '$H_1(T^2)=\\mathbb{Z}^2$，对应两个独立的环。'
  ]
};

window.ATLAS.extras['geometry/cohomology'] = {
  insight: '上同调是同调的对偶，带 cup product 环结构；de Rham 上同调用微分形式实现，Poincaré 对偶把同调与上同调联系起来。',
  examples: [
    '$H^1_{dR}(S^1)\\cong\\mathbb{R}$，由 $d\\theta$ 生成。',
    '上同调的 cup product 给出比同调更丰富的环结构信息。'
  ]
};

window.ATLAS.extras['geometry/fibrations'] = {
  insight: '纤维丛局部是乘积，整体可能扭曲；长正合列用纤维、全空间、底空间的同伦群相互联系，是同伦论的计算工具。',
  examples: [
    '圆柱面是 $S^1\\times[0,1]$ 的平凡丛；莫比乌斯带是扭曲的丛。',
    'Hopf 纤维化 $S^1\\to S^3\\to S^2$ 用于计算球面的同伦群。'
  ]
};

window.ATLAS.extras['geometry/algebraic-varieties-geometry'] = {
  insight: '代数簇是多项式方程的零点集，Zariski 拓扑使其具有刚性；零点定理建立代数与几何的字典。',
  examples: [
    '$V(x^2+y^2-1)$ 是单位圆。',
    '$V(y^2-x^3+x)$ 是椭圆曲线。'
  ]
};

window.ATLAS.extras['geometry/coordinate-rings'] = {
  insight: '坐标环是代数簇的“函数代数”，几何对象与代数对象通过 $V\\mapsto k[V]$ 建立反变对应；零点定理保证不丢失信息。',
  examples: [
    '$V(xy-1)$ 的坐标环为 $k[x,y]/(xy-1)\\cong k[x,x^{-1}]$。',
    '两个仿射簇同构当且仅当坐标环同构（反变）。'
  ]
};

window.ATLAS.extras['geometry/schemes'] = {
  insight: '概形把几何点推广为素理想，把函数推广为层；Grothendieck 用概形重写代数几何，使算术与几何统一。',
  examples: [
    '$\\operatorname{Spec}\\mathbb{Z}$ 的闭点对应素数，一般点对应 $(0)$。',
    '概形允许在任意交换环上做几何，包括有限域与整数环。'
  ]
};

window.ATLAS.extras['geometry/singularities'] = {
  insight: '奇点是切空间维数跳变的位置；爆破把奇点“放大”以分离分支，奇点消解定理保证特征零域上可以化到光滑。',
  examples: [
    '$y^2=x^3$ 在原点有尖点。',
    'Hironaka 证明特征零域上的代数簇都可以通过双有理映射消解奇点。'
  ]
};

window.ATLAS.extras['geometry/birational-geometry'] = {
  insight: '双有理等价对应函数域同构；极小模型纲领通过收缩与翻转寻找标准代表，是高维代数几何的核心项目。',
  examples: [
    '所有有理曲线都双有理等价于 $\\mathbb{P}^1$。',
    '三次曲面与 $\\mathbb{P}^2$ 双有理等价。'
  ]
};

window.ATLAS.extras['geometry/low-dimensional-topology'] = {
  insight: '3、4 维流形有独特现象；Poincaré 猜想说明单连通闭 3 流形同胚于 $S^3$，Perelman 用 Ricci 流证明。',
  examples: [
    '透镜空间 $L(p,q)$ 的基本群为 $\\mathbb{Z}/p$。',
    'Ricci 流 $\\partial_t g_{ij}=-2R_{ij}$ 把度量演化到标准几何。'
  ]
};

window.ATLAS.extras['geometry/knot-theory'] = {
  insight: '纽结是 $S^3$ 中的嵌入圆周；纽结不变量（Jones 多项式、Alexander 多项式、基本群）用于区分等价类。',
  examples: [
    '三叶结的 Jones 多项式为 $-t^{-4}+t^{-3}+t^{-1}$，与平凡结不同。',
    'DNA 拓扑、量子场论与纽结理论有深刻联系。'
  ]
};

window.ATLAS.extras['geometry/manifold-classification'] = {
  insight: '2 维闭曲面由亏格与可定向性完全分类；高维分类极其复杂，4 维甚至不可分类。',
  examples: [
    '可定向曲面 $\\Sigma_g$ 的 Euler 示性数为 $2-2g$。',
    '不可定向曲面 $N_k$ 由交叉帽个数分类。'
  ]
};

window.ATLAS.extras['geometry/surgery-theory'] = {
  insight: '手术通过切除与粘合改变流形；柄体理论描述流形骨架，h-配边定理在高维给出强有力结论。',
  examples: [
    '从 $S^3$ 沿纽结做手术可以构造透镜空间。',
    'Smale 用手术理论证明高维 Poincaré 猜想。'
  ]
};

window.ATLAS.extras['geometry/differential-structures'] = {
  insight: '同一拓扑流形可以配不同光滑结构；怪球说明光滑性是额外结构，而不是拓扑的副产品。',
  examples: [
    '$S^7$ 上有 28 种不同的光滑结构。',
    '$\\mathbb{R}^4$ 上有不可数多个互不容的光滑结构（exotic $\\mathbb{R}^4$）。'
  ]
};

window.ATLAS.extras['geometry/packing-covering'] = {
  insight: '堆积与覆盖研究如何最优地填充或覆盖空间；开普勒猜想给出三维球体最密堆积密度。',
  examples: [
    '平面等圆最密堆积的密度为 $\\pi/(2\\sqrt3)\\approx0.9069$。',
    '三维最密堆积密度为 $\\pi/(3\\sqrt2)\\approx0.7405$。'
  ]
};

window.ATLAS.extras['geometry/convex-sets'] = {
  insight: '凸集没有凹陷，分离定理是凸分析的基石；凸性使优化问题具有全局最优性。',
  examples: [
    '圆盘是凸集；月牙形不是。',
    '两个不交凸集可以被超平面分离。'
  ]
};

window.ATLAS.extras['geometry/polyhedra'] = {
  insight: '有界多面体有两种描述：有限半空间的交与有限顶点的凸包；Minkowski–Weyl 定理说明两种描述等价，这是线性规划对偶的基础。',
  examples: [
    '正八面体有 $6$ 个顶点、$12$ 条边、$8$ 个面。',
    '线性规划的最优解在可行多面体的顶点取得。'
  ]
};

window.ATLAS.extras['geometry/triangulations'] = {
  insight: '三角剖分把连续几何离散化；Delaunay 剖分保证空圆性质，与 Voronoi 图对偶，适合网格生成与插值。',
  examples: [
    '球面的任何三角剖分都满足 $V-E+F=2$。',
    'Delaunay 三角剖分的外接圆不含其他顶点。'
  ]
};

window.ATLAS.extras['geometry/euler-characteristic'] = {
  insight: 'Euler 示性数是拓扑不变量，连接曲率积分与向量场零点；它是同调群的交错和。',
  examples: [
    '正方体 $V-E+F=8-12+6=2$。',
    '环面 $\\chi=0$，射影平面 $\\chi=1$。'
  ]
};

window.ATLAS.extras['geometry/symplectic-forms'] = {
  insight: '辛形式是闭且非退化的二形式，测量有向面积；辛流形维数必为偶数，$\\omega^n$ 给出体积形式。',
  examples: [
    '$\\mathbb{R}^2$ 上的 $\\omega=dx\\wedge dy$ 是辛形式。',
    '相空间 $\\mathbb{R}^{2n}$ 上的标准辛形式 $\\omega=\\sum dp_i\\wedge dq_i$。'
  ]
};

window.ATLAS.extras['geometry/symplectomorphisms'] = {
  insight: '辛同胚保持辛形式，因而保持相空间体积；Gromov 非挤压定理体现辛几何的刚性。',
  examples: [
    '线性辛群 $Sp(2n,\\mathbb{R})=\\{A:A^\\top JA=J\\}$。',
    '哈密顿方程的解流是辛同胚（Liouville 定理）。'
  ]
};

window.ATLAS.extras['geometry/hamiltonian-systems'] = {
  insight: '哈密顿系统由能量函数驱动，轨迹位于等能面上；辛几何是哈密顿力学的自然语言。',
  examples: [
    '简谐振子 $H=\\frac12(p^2+q^2)$ 的轨迹是相空间中的圆。',
    '单摆相图有摆动区、旋转区与分界线。'
  ]
};

window.ATLAS.extras['geometry/lagrangian-submanifolds'] = {
  insight: '拉格朗日子流形是辛形式限制为零的半维子流形；它在镜像对称与 Floer 同调中扮演核心角色。',
  examples: [
    '相空间中的位置空间 $\\{p=0\\}$ 是拉格朗日子流形。',
    '由生成函数 $S(q)$ 给出的图 $p=dS(q)$ 是拉格朗日子流形。'
  ]
};

window.ATLAS.extras['geometry/moment-maps'] = {
  insight: '动量映射把连续对称编码为守恒量，是 Noether 定理的几何版本；辛约化用它的零点集构造新辛流形。',
  examples: [
    '平移对称对应动量守恒，旋转对称对应角动量守恒。',
    '平面旋转作用的动量映射为角动量 $q_1p_2-q_2p_1$。'
  ]
};

window.ATLAS.extras['geometry/symplectic-topology'] = {
  insight: '辛拓扑研究辛同胚下的整体不变量；Gromov 非挤压定理是其起点，伪全纯曲线是核心工具。',
  examples: [
    'Gromov 非挤压：大球不能辛嵌入到细圆柱中。',
    '辛容量度量流形能容纳多大的球。'
  ]
};