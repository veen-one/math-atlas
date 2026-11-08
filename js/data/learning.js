/* 319 个知识点的适用边界与带解析自测；由 scripts/deepen-content.py 生成。 */
window.ATLAS.learning = {
  'analysis/continuity-uniform': {
    boundary: '一致连续要求同一个距离阈值对整个定义域有效；区间不紧时，连续未必一致连续。',
    question: '平方函数在实数轴上一致连续吗？',
    answer: '否。取 x=n，y=n+1/n，两点距离趋零，函数值之差却趋于 2；在任意闭有界区间上则一致连续。',
  },
  'analysis/uniform-convergence': {
    boundary: '逐点收敛允许不同位置以不同速度逼近；交换极限与积分还须说明区间、测度和控制条件。',
    question: 'x 的 n 次方在 [0,1] 上是否一致收敛？',
    answer: '否。逐点极限在 1 处跳跃，而连续函数列的一致极限必须连续；在 [0,a]（0<a<1）上误差至多 a 的 n 次方。',
  },
  'analysis/function-sequences': {
    boundary: '函数列的极限是函数；判断收敛方式时，必须写明定义域和误差的度量。',
    question: 'f_n(x)=x/n 在实数轴上逐点收敛到零，是否一致？',
    answer: '不一致。固定 x 时误差趋零，但对任意 n，总能取 x=n 使误差为 1；在固定有界区间上则一致收敛。',
  },
  'analysis/series': {
    boundary: '通项趋零只是收敛的必要条件；绝对收敛与条件收敛对重排的行为不同。',
    question: '为何调和级数发散？',
    answer: '把从 2 的 k 次方到 2 的 k+1 次方减 1 的项分组，每组至少有 1/2；无穷多组使部分和无界。',
  },
  'analysis/completeness-reals': {
    boundary: '完备性取决于空间和度量；有理数中的柯西列可能没有有理极限。',
    question: '小数截断逼近根号 2 的有理数列说明什么？',
    answer: '它是柯西列，却不在有理数中收敛；在实数中极限存在，体现实数补齐了有理数的缺口。',
  },
  'analysis/fundamental-theorem-calculus': {
    boundary: '经典形式需积分函数连续；仅可积时，积分函数在连续点可导，不保证处处可导。',
    question: '设 F(x) 为从 0 到 x 对 t 平方的积分，求 F 的导数。',
    answer: '连续性保证基本定理可用，直接得到 F 的导数是 x 平方；也可先算 F(x)=x 的三次方除以 3 再求导。',
  },
  'analysis/holomorphic-functions': {
    boundary: '复可导要求从所有复方向得到同一极限；实变量意义的光滑不保证全纯。',
    question: '复共轭函数在原点复可导吗？',
    answer: '否。沿实轴差商为 1，沿虚轴为 -1，方向极限不同；这比只检查实偏导更严格。',
  },
  'analysis/cauchy-integral-theorem': {
    boundary: '闭路积分为零需要适当区域条件；全纯函数在有洞区域上未必有全局原函数。',
    question: '1/z 沿单位圆逆时针积分为何不是零？',
    answer: '积分等于 2πi。原点是奇点，单位圆不能在函数全纯的区域中收缩为一点，所以不能直接套用简单连通区域的结论。',
  },
  'analysis/residues': {
    boundary: '留数取洛朗展开的负一次项系数；高阶极点不能直接用简单极点公式。',
    question: '求 1/[z(z-1)] 在 0 的留数。',
    answer: '0 是简单极点，将函数乘 z 后令 z=0，得 1/(0-1)=-1；只有包围该极点且不穿过奇点的围道才适用相应积分公式。',
  },
  'analysis/conformal-maps': {
    boundary: '全纯且导数非零才局部保角；保角不自动意味着全局一一对应。',
    question: 'z 平方在原点和其他点的保角性如何？',
    answer: '导数为 2z，非零点附近保角；原点导数为零，例如两条射线的夹角会被加倍，因此不是保角点。',
  },
  'analysis/limits': {
    boundary: '函数在一点有极限不要求该点有定义；左右极限一致才有双侧极限。',
    question: 'sin(x)/x 在 x 趋于 0 时的极限与原点函数值有何关系？',
    answer: '极限为 1，而原式在 0 未定义。补定义函数值为 1 可使它连续；补成其他值不改变极限，却破坏连续性。',
  },
  'analysis/derivatives': {
    boundary: '可导蕴含连续，连续不蕴含可导；导数为零也未必是极值点。',
    question: '绝对值函数为何在 0 连续却不可导？',
    answer: '函数值随 x 趋零而趋零，故连续；左差商为 -1，右差商为 1，切线斜率不能统一。',
  },
  'analysis/integration-calculus': {
    boundary: '定积分是带符号累积量；上下抵消后的积分不等于曲线与横轴围成的总面积。',
    question: 'x 在 [-1,1] 的积分是零，总面积也是零吗？',
    answer: '不是。奇函数正负部分抵消使积分为零；对绝对值积分才得到总面积 1。',
  },
  'analysis/multivariable-calculus': {
    boundary: '偏导数存在不足以推出可微；可微要求一个线性映射同时控制所有方向的误差。',
    question: '梯度为 (2,4)，沿单位向量 (1,0) 的方向导数是多少？',
    answer: '在函数可微的前提下，方向导数是梯度与方向的内积，等于 2；不能把非单位方向直接当作单位方向使用。',
  },
  'analysis/analytic-continuation': {
    boundary: '解析延拓在连通重叠区域上具有唯一性；绕奇点延拓可能产生多值性。',
    question: '复对数绕原点一周后为何不能恢复为同一个值？',
    answer: '辐角增加 2π，使对数增加 2πi；因此在整个去心复平面上不存在单值全纯对数，通常须选支割线。',
  },
  'analysis/sigma-algebras': {
    boundary: 'σ 代数要求可数并封闭；只有有限并封闭的集合族未必是 σ 代数。',
    question: '样本空间 {a,b} 上最小的 σ 代数是什么？',
    answer: '只有空集和全集。若再要求 {a} 可测，补集封闭便强迫 {b} 可测，从而得到整个幂集。',
  },
  'analysis/measures': {
    boundary: '可数可加性用于两两不交的可测集；一般重叠集合不能直接相加测度。',
    question: '两个长度为 1、交叠长度为 0.4 的区间，其并集长度是多少？',
    answer: '按容斥得 1+1-0.4=1.6。直接相加会把交叠部分计算两次。',
  },
  'analysis/measurable-functions': {
    boundary: '可测性取决于定义域和值域的 σ 代数；可测不等于连续，也不等于可积。',
    question: '有理数的示性函数在实轴上可测吗？',
    answer: '可测，因为有理数集可数且为 Borel 集；但函数处处不连续，说明可测性比连续性弱。',
  },
  'analysis/lebesgue-integral': {
    boundary: '可测非负函数的积分允许为无穷；有符号函数需避免正负两部分同时积分无穷。',
    question: '有理数示性函数在 [0,1] 的勒贝格积分是多少？',
    answer: '有理数可数，测度为零，积分为零；它处处不连续，故不能用黎曼积分处理这个例子。',
  },
  'analysis/integration-limits': {
    boundary: '交换极限与积分必须检查定理假设；逐点收敛本身远远不够。',
    question: 'f_n=n·1_(0,1/n) 在 (0,1) 逐点趋零，积分也趋零吗？',
    answer: '否，每个函数的积分都是 1。越来越高且越来越窄的尖峰说明缺乏统一可积控制时，积分可保留极限看不到的质量。',
  },
  'analysis/normed-spaces': {
    boundary: '不同范数刻画不同误差；有限维范数等价不意味着范数值相等。',
    question: '向量 (3,4) 的一范数、二范数和无穷范数分别是多少？',
    answer: '分别为 7、5、4。它们分别累积绝对偏差、衡量欧氏长度和记录最大分量偏差。',
  },
  'analysis/banach-spaces': {
    boundary: '巴拿赫空间要求每个柯西列都在空间内收敛；完备性不是有界性。',
    question: '开区间 (0,1) 中的数列 1/n 为何不能用来证明该区间完备？',
    answer: '从 n=2 起它在区间内且为柯西列，但极限 0 不在区间。该区间不是线性空间，也不是巴拿赫空间。',
  },
  'analysis/hilbert-spaces': {
    boundary: '希尔伯特空间同时要求内积结构和完备性；一般赋范空间的范数未必来自内积。',
    question: '向量 (3,4) 在 x 轴上的正交投影是什么？',
    answer: '投影为 (3,0)，余项 (0,4) 与 x 轴正交；勾股分解给出 25=9+16，这是无限维正交投影的有限维模型。',
  },
  'analysis/spectral-theory': {
    boundary: '无限维算子的谱不只包含特征值；不能把矩阵结论无条件搬到函数空间。',
    question: 'L²[0,1] 上乘法算子 Tf(x)=xf(x)，1/2 是特征值吗？',
    answer: '不是。若 xf(x)=f(x)/2，则 f 只能支撑在单点上，故在 L² 中为零；但 1/2 仍属于该算子的谱。',
  },
  'analysis/linear-operators': {
    boundary: '线性不自动意味着无限维中的连续；赋范空间上的线性算子连续当且仅当有界。',
    question: 'T(x,y)=2x-y 从欧氏平面到实数是否有界？',
    answer: '是。柯西–施瓦茨不等式给出绝对值不超过根号 5 乘向量长度，且取向量 (2,-1) 可达到该比值。',
  },
  'analysis/fourier-series': {
    boundary: '傅里叶系数存在不保证处处逐点收敛；跳跃处的极限需在相应正则性假设下讨论。',
    question: '分段光滑周期函数在跳跃点的傅里叶级数通常收敛到哪里？',
    answer: '收敛到左右极限的平均值，而不是任意指定的点值；改变一个点的函数值不会改变积分得到的傅里叶系数。',
  },
  'analysis/fourier-transform': {
    boundary: '变换中的 2π 与归一化约定必须统一；普通积分不存在时可能需要 L² 或分布解释。',
    question: '把信号向右平移 a，会怎样改变傅里叶变换？',
    answer: '采用指数 exp(-iωx) 的约定时，变换乘 exp(-iωa)；幅度不变，只有相位改变，可由换元直接验证。',
  },
  'analysis/convolution': {
    boundary: '卷积不是逐点相乘；连续卷积需检查积分存在性，离散卷积也有边界约定。',
    question: '序列 [1,1] 与 [1,1] 的线性卷积是多少？',
    answer: '依次对齐相乘并求和，得到 [1,2,1]；逐点相乘只能得到 [1,1]，二者含义不同。',
  },
  'analysis/wavelets': {
    boundary: '小波利用不同位置和尺度定位变化；母小波需满足相应可容许性或基构造条件。',
    question: 'Haar 小波为何能检测一个区间两半的差异？',
    answer: '它在前半取正、后半取负，与信号的内积等于两半累积量之差（乘归一化因子）；常数信号的两半恰好抵消。',
  },
  'analysis/time-frequency': {
    boundary: '时间与频率分辨率有权衡；缩短分析窗会改善时间定位，但通常模糊频率。',
    question: '要定位一次很短的敲击，应优先用长窗还是短窗？',
    answer: '短窗更能分辨敲击时刻，但频率分辨率较差；长窗更适合区分靠近的稳定频率。',
  },
  'analysis/odes': {
    boundary: '解的存在与唯一性是不同问题；连续右端常能保证局部存在，但唯一性需更强条件。',
    question: 'y\'=y、y(0)=2 的解是什么？',
    answer: '分离变量或识别指数增长得到 y=2e 的 t 次方；代回方程和初值同时检验，才能确定这是所求解。',
  },
  'analysis/pdes': {
    boundary: '偏微分方程描述局部规律，仍需定义域和初边值条件确定具体问题。',
    question: '热方程在封闭绝热区域中通常守恒什么？',
    answer: '在足够正则和零法向热流的条件下，总热量守恒；对方程作空间积分后，边界通量项为零。',
  },
  'analysis/initial-boundary': {
    boundary: '初值给起始状态，边值限制空间边界；条件数量与兼容性必须适合方程类型。',
    question: 'y\'\'=-y 只有 y(0)=0 能否唯一确定解？',
    answer: '不能，任意 y=A sin t 都满足。再给 y\'(0)=1 才确定 A=1，说明二阶方程通常还需一个独立初值。',
  },
  'analysis/weak-solutions': {
    boundary: '弱解把导数转移到测试函数；定义弱解不意味着自动获得唯一性或经典光滑性。',
    question: '绝对值函数能否有弱导数？',
    answer: '可以，在实轴局部意义下弱导数几乎处处等于符号函数；原点没有经典导数，不妨碍积分形式的导数成立。',
  },
  'analysis/stability': {
    boundary: '李雅普诺夫稳定只要求扰动不走远；渐近稳定还要求扰动随时间消失。',
    question: 'y\'=-y 与 y\'=0 的平衡点 0 有何不同？',
    answer: '前者的扰动按指数衰减，渐近稳定；后者的扰动保持原值，稳定但不渐近稳定。',
  },
  'analysis/phase-space': {
    boundary: '相空间坐标必须足以确定状态；只记录位置，通常无法确定力学系统的未来。',
    question: '弹簧振子为何需要位置和速度两个坐标？',
    answer: '同一位置上，向左和向右的速度会产生不同后续运动；位置和速度合起来才形成可演化的完整状态。',
  },
  'analysis/equilibria-periodic-orbits': {
    boundary: '平衡点是静止状态，周期轨道是非静止的闭合运动；不是所有有界轨道都周期。',
    question: '系统 x\'=-y、y\'=x 的轨道是什么？',
    answer: 'x²+y² 的导数为零，故非零初值沿圆运动，周期为 2π；原点则是平衡点。',
  },
  'analysis/bifurcation': {
    boundary: '分岔讨论参数改变引起的定性结构变化；解的数值改变不一定是分岔。',
    question: 'x\'=μx-x³ 在 μ 穿过 0 时如何变化？',
    answer: 'μ<0 时只有稳定平衡点 0；μ>0 时 0 不稳定，并出现两个稳定平衡点 ±√μ，形成超临界叉形分岔。',
  },
  'analysis/chaos': {
    boundary: '混沌是确定性动力学的复杂行为，不等于外加随机噪声；敏感依赖也需配合具体定义。',
    question: '初始误差按 e 的 λt 次方增长，λ>0 时预测有什么限制？',
    answer: '误差达到容忍值 ε 的时间约为 ln(ε/初始误差)/λ；提高初值精度只能对数式延长预测窗口。',
  },
  'analysis/ergodicity': {
    boundary: '遍历性联系长期平均与空间平均；平稳性本身不保证遍历性。',
    question: '恒等变换在非平凡概率空间上是否遍历？',
    answer: '否。每个集合都保持不变，若存在概率严格介于 0 和 1 的集合，就违背遍历性对不变集合的要求。',
  },
  'foundations/propositional-logic': {
    boundary: '蕴含的真假取决于真值组合；由结论为真不能反推前提为真。',
    question: '若 p 蕴含 q 且 q 为真，能推出 p 吗？',
    answer: '不能。取 p 假、q 真，两个已知条件都真而 p 假；这是肯定后件的错误。',
  },
  'foundations/predicates-quantifiers': {
    boundary: '量词必须指定论域；每人各有一个选择，不等于存在一个供所有人共同选择的对象。',
    question: '在 {1,2,3} 中，每个 x 都存在更大的 y 吗？',
    answer: '否。取 x=3 即找不到论域内的 y；一个反例就推翻全称命题，不能把论域外的 4 当作见证。',
  },
  'foundations/formal-language': {
    boundary: '语法合法不等于语义为真；同一公式换解释或论域会改变真值。',
    question: '每个 x 都有 y 满足 y²=x，在实数和复数中分别如何？',
    answer: '在实数中为假，x=-1 是反例；在复数中为真，每个复数都有平方根。句子语法在两种解释中不变。',
  },
  'foundations/soundness-completeness': {
    boundary: '一阶逻辑的完备性针对所有模型中的语义蕴含，不是固定理论能决定所有句子。',
    question: '一个句子在某个模型中为真，是否因此能从空前提证明？',
    answer: '不能。空前提可证明要求它在所有相应结构中有效；只在一个模型中为真远远不够。',
  },
  'foundations/elementary-equivalence': {
    boundary: '初等等价比较一阶句子；同构还要求结构保持双射，条件更强。',
    question: '有理数序与实数序初等等价，为何不同构？',
    answer: '它们都是稠密无端点线性序，满足同一完备理论；但一个可数、一个不可数，不存在双射，因此不可能同构。',
  },
  'foundations/sets-mappings': {
    boundary: '函数要同时说明定义域和陪域；同一表达式换陪域可能改变满射性。',
    question: 'f(x)=x² 从实数到实数是满射吗？',
    answer: '不是，负数没有原像；若把陪域改为非负实数，则是满射。它在实数定义域上仍不是单射。',
  },
  'foundations/cardinality': {
    boundary: '无限集合的真子集可以与全集等势；不能沿用有限集合的大小直觉。',
    question: '自然数与偶数之间如何建立双射？',
    answer: '用 n 映到 2n。它单射且覆盖所有非负偶数，说明去掉全部奇数后仍保持同一可数基数。',
  },
  'foundations/ordinals': {
    boundary: '序数记录次序，基数记录大小；序数加法通常不交换。',
    question: '1+ω 与 ω+1 相等吗？',
    answer: '不相等。最前面加一个点仍与自然数序同型，故 1+ω=ω；末尾加一个最大点则得到不同的序型 ω+1。',
  },
  'foundations/ordinal-analysis': {
    boundary: '证明论序数衡量某理论可支持的良基归纳强度；不是“定理数量”的计数。',
    question: '为什么用更长的有限证明不能替代超限归纳的论证？',
    answer: '任意长的有限链仍只覆盖有限步骤；超限归纳依赖整个良序的结构与良基性，需要说明在什么元理论中可证明。',
  },
  'foundations/zfc-axioms': {
    boundary: '公理化集合论不允许任意性质都产生一个集合；分离公理只从已有集合取子集。',
    question: '所有不属于自身的集合能组成一个集合吗？',
    answer: '若能组成 R，则 R 属于 R 当且仅当 R 不属于 R，导致罗素悖论；ZFC 的受限分离避开这个构造。',
  },
  'foundations/independence': {
    boundary: '独立性总是相对于指定公理系统；不可证不等于已经证明其否定。',
    question: '一个句子及其否定都不能由 T 证明，说明什么？',
    answer: '说明该句子独立于 T。若 T 相容，分别加入它或其否定都保持相容，但这不是在任意模型中给出同一个真值。',
  },
  'foundations/formal-proof': {
    boundary: '形式证明的每步都须由公理或规则许可；大量验证实例不构成全称命题的证明。',
    question: '检验前一百万个偶数能证明哥德巴赫猜想吗？',
    answer: '不能。检验只覆盖有限范围，全称断言仍涉及无限多个未检验对象；需要可覆盖所有情形的论证。',
  },
  'foundations/natural-deduction': {
    boundary: '假设可在子证明中临时使用；解除假设时必须记录其作用域。',
    question: '从假设 p 推出 p，解除假设后得到什么？',
    answer: '通过蕴含引入得到 p 蕴含 p；不能在解除假设后无条件保留 p 本身。',
  },
  'foundations/sequent-calculus': {
    boundary: '相继式左侧与右侧的语义依赖逻辑系统；经典多后件不能直接当成直觉主义单后件。',
    question: '经典相继式 p,q ⇒ p 为什么有效？',
    answer: '任何同时满足左侧 p 与 q 的赋值都满足右侧 p；额外前提不破坏这个推理。',
  },
  'foundations/cut-elimination': {
    boundary: '经典逻辑没有一般析取性质；算术相容性证明还需超限归纳等额外分析。',
    question: '由经典逻辑可证 p 或非 p，能推出可证 p 或可证非 p 吗？',
    answer: '不能。两个原子情形都不普遍有效；这直接说明不能把直觉主义逻辑的析取性质套给经典 LK。',
  },
  'foundations/turing-reduction': {
    boundary: '图灵归约允许多次自适应调用神谕；它不自带多项式时间限制。',
    question: '任意可判定集合 A 是否图灵归约到停机集合？',
    answer: '是。判定 A 的程序可以完全不调用神谕；归约允许使用神谕，并不要求必须使用。',
  },
  'foundations/turing-machine': {
    boundary: '无限纸带是潜在存储资源；任意一次有限步计算实际只访问有限格。',
    question: '一台始终向右移动且永不停机的机器是判定器吗？',
    answer: '不是。判定器必须在每个输入上停机并给出接受或拒绝，拥有确定规则并不保证能完成判定。',
  },
  'foundations/decidability': {
    boundary: '能在有限时间内完成每个输入的判定，不等于有统一的小时间上界。',
    question: '已知语言及其补语言都可半判定，如何判定成员？',
    answer: '交替模拟两个半判定器；输入必属其中一边，该边最终接受，便可据此给出是或否。',
  },
  'foundations/halting-problem': {
    boundary: '不可判定针对所有程序输入对；许多受限程序的停机性仍可判定。',
    question: '一个 for 循环固定运行十次，为何不与停机问题不可判定矛盾？',
    answer: '它属于可直接分析的受限情形；不存在的是覆盖任意程序的通用判定器，不是所有具体程序都无法分析。',
  },
  'foundations/enumerability': {
    boundary: '可枚举允许非成员永远等不到否定答案；并行模拟要防止被某个不停止程序卡住。',
    question: '怎样枚举所有会停机的程序输入对？',
    answer: '按阶段交错运行前若干个模拟，每轮各推进有限步；某个模拟停机就输出，避免顺序模拟被第一个死循环阻塞。',
  },
  'foundations/objects-morphisms': {
    boundary: '范畴中的态射由组合与恒等律约束；对象未必需要被理解为带元素的集合。',
    question: '集合范畴中一个同构具体是什么？',
    answer: '是双射。可逆态射的逆函数同时给出左右逆，而一般单射或满射只满足其中部分性质。',
  },
  'foundations/functors': {
    boundary: '函子保持恒等态射和组合；不要求不同对象或不同态射的像仍不同。',
    question: '把每个群映到其底层集合，是函子吗？',
    answer: '是。群同态本来就是集合映射，忘掉群结构仍保持恒等函数和函数复合，称为遗忘函子。',
  },
  'foundations/natural-transformations': {
    boundary: '自然变换比较两个函子，分量必须与每个态射相容；任意分量集合不一定自然。',
    question: '双对偶中的自然映射为何比任意挑选一组基更规范？',
    answer: '映射 v 对应“在 v 处求值”的泛函，无须选基，并与线性映射交换；自然性表达这种对所有对象一致的相容性。',
  },
  'foundations/adjunction': {
    boundary: '伴随给出两个 Hom 集之间的自然双射；左伴随与右伴随通常不是互逆等价。',
    question: '集合生成自由群为什么是遗忘函子的左伴随？',
    answer: '从自由群到 G 的群同态，唯一对应于从生成元集合到 G 底层集合的任意函数；这正是所需自然对应。',
  },
  'foundations/limits-colimits': {
    boundary: '范畴极限由泛性质确定，通常只在唯一同构意义下唯一；不是数列极限的直接照搬。',
    question: '集合 A 与 B 的范畴积是什么？',
    answer: '笛卡尔积及两个投影。任何同时映向 A、B 的集合，都唯一通过配对映射进入这个积。',
  },
  'foundations/axiomatic-method': {
    boundary: '公理定义研究框架，模型检验能否实现框架；一致性、独立性和完备性是不同问题。',
    question: '删去群公理中的结合律能继续推出所有群论结论吗？',
    answer: '不能自动推出。原证明可能使用结合律；需重新检查推导，或构造满足其余条件却不结合的结构作为反例。',
  },
  'foundations/godel-first': {
    boundary: '第一不完备性需要有效公理化和足够算术表达力；并非所有公理系统都不完备。',
    question: '稠密无端点线性序理论是完备的，是否推翻哥德尔定理？',
    answer: '不推翻。该理论不满足定理要求的算术表达能力，故不落在其适用范围内。',
  },
  'foundations/godel-second': {
    boundary: '第二不完备性涉及标准可证明性编码及足够强的相容理论；不排除更强外部理论的证明。',
    question: 'T 不能自证相容，能否由更强理论 S 证明 T 相容？',
    answer: '可以，定理不禁止外部证明；但若 S 也满足相同条件，则它自身的相容性仍不能仅靠 S 内部证明解决。',
  },
  'foundations/consistency': {
    boundary: '语法相容指不能推出矛盾；知道许多定理看似合理不能代替相容性论证。',
    question: '若一个理论同时证明 P 和非 P，经典逻辑中会怎样？',
    answer: '由爆炸律可推出任意公式，理论失去区分真假的推理能力；这说明排除矛盾是基础要求。',
  },
  'foundations/relative-consistency': {
    boundary: '相对相容性把一个系统的风险转移到另一个系统，不直接提供无条件的绝对保证。',
    question: '证明 Con(T) 蕴含 Con(S) 后，能直接断言 S 相容吗？',
    answer: '不能，仍需接受或证明 T 的相容性；结论是条件性的，与其前提同样重要。',
  },
  'foundations/propositions-as-types': {
    boundary: '命题即类型依赖所用逻辑与类型系统；经典排中律不在所有构造系统中自动成立。',
    question: '构造一个 A 蕴含 A 的证明对应什么程序？',
    answer: '对应恒等函数：输入类型 A 的元素，原样返回；函数类型把蕴含的证明变成可执行的构造。',
  },
  'foundations/simple-types': {
    boundary: '简单类型限制合法应用，能排除许多自指表达式；并不意味着能表达一切数学对象。',
    question: '若 f:A→B、a:A，则 f(a) 的类型是什么？',
    answer: '是 B。若输入不是 A 类型，应用在该类型系统中不合法，不能靠运算后再补救类型错误。',
  },
  'foundations/dependent-types': {
    boundary: '依赖类型允许类型含有值参数；长度等约束可成为证明责任。',
    question: '长度 n 的向量取头元素，为何应要求 n>0？',
    answer: '空向量没有头元素。把长度写进类型后，可将函数输入限制为长度 n+1 的向量，排除这一运行时错误。',
  },
  'foundations/inductive-types': {
    boundary: '归纳类型由构造子有限生成；递归定义通常要满足结构递减或其他终止性条件。',
    question: '为何自然数加法可按第二个参数递归？',
    answer: '第二参数为零时直接返回第一参数；为后继时先计算更小参数的和再取后继，递归最终回到零。',
  },
  'foundations/proof-assistants': {
    boundary: '证明助理检查形式推导；形式化命题是否准确表达原问题，仍须人来核对。',
    question: '内核通过一个定理后，是否表示建模假设也都真实？',
    answer: '不是。它验证在所列公理和假设下结论可推出；现实适用性、假设合理性和题意匹配还需额外判断。',
  },
  'foundations/structure-interpretation': {
    boundary: '结构为符号指定含义；同一符号不在不同结构中自动指同一个运算。',
    question: '符号 + 在整数与模 5 剩余类中有何差别？',
    answer: '整数中 3+4=7；模 5 结构中结果是 2 的剩余类。语法相同，运算和值域由解释决定。',
  },
  'foundations/satisfaction': {
    boundary: '含自由变元的公式要同时给出结构与赋值，才能判断满足关系。',
    question: '公式 x<2 在实数结构中真还是假？',
    answer: '还不能确定。赋值 x=1 时真，x=3 时假；只有量词封闭成句子后，真值才不再依赖自由变元赋值。',
  },
  'foundations/classification-of-models': {
    boundary: '分类需说明语言、理论和等价标准；按同构与按初等等价分类结果不同。',
    question: '两个不同基数的稠密无端点线性序可以同构吗？',
    answer: '不能，同构必须是双射；但它们可以初等等价，说明逻辑性质相同仍不足以决定同构类型。',
  },
  'foundations/compactness': {
    boundary: '紧致性针对一阶理论的可满足性；不能由此断言任意高阶或拓扑问题也紧致。',
    question: '给语言加常元 c，并要求 c 大于每个自然数数码，为什么可能有模型？',
    answer: '每个有限子集只要求 c 超过有限多个数，在自然数中可满足；紧致性给出全体要求的模型，其中 c 是非标准元素。',
  },
  'algebra/groups-subgroups': {
    boundary: '非空子集不自动成为子群；要验证运算和取逆封闭。',
    question: '整数加法群中的偶数构成子群吗？',
    answer: '是。偶数之差仍是偶数，且集合非空；差封闭判别同时涵盖加法与取逆。',
  },
  'algebra/homomorphisms-quotients': {
    boundary: '只有正规子群才能作为群商的核；一般陪集集合未必有良定义群乘法。',
    question: '整数到模 3 加法群的自然映射，其核是什么？',
    answer: '核是所有 3 的倍数；两整数像相同当且仅当差属于核，故商群同构于模 3 加法群。',
  },
  'algebra/group-actions': {
    boundary: '群作用须保持群乘法和单位元；任意为每个群元素分配一个变换并不够。',
    question: '正方形的旋转群作用在四个顶点上，一个顶点的轨道有多大？',
    answer: '四个顶点都可由旋转到达，轨道大小为 4；只有恒等旋转固定该顶点，稳定子大小为 1。',
  },
  'algebra/orbits-stabilizers': {
    boundary: '有限群的轨道大小等于群阶除以稳定子阶；不能把稳定子误当固定点集合。',
    question: '阶为 12 的群中，某点稳定子阶为 3，轨道多大？',
    answer: '轨道大小为 12/3=4。稳定子由固定这个点的群元素组成，轨道由被作用的对象组成。',
  },
  'algebra/finite-groups': {
    boundary: '子群阶整除群阶，但每个因子未必都对应一个子群。',
    question: '阶为 7 的群为什么一定循环？',
    answer: '任取非单位元，其生成子群的阶既大于 1 又整除 7，只能为 7，因此它生成整个群。',
  },
  'algebra/ring-structure': {
    boundary: '环中非零元未必可逆，也可能有零因子；乘法约定是否交换必须明确。',
    question: '模 6 环为何不是域？',
    answer: '2 和 3 都非零，却有 2×3=0；域不能含非零零因子，故模 6 环不是域。',
  },
  'algebra/ideals': {
    boundary: '理想须吸收环元素的乘法；普通加法子群不足以保证能构造商环。',
    question: '整数环中模掉理想 5Z 得到什么？',
    answer: '得到模 5 环，它是域；这也说明 5Z 是极大理想。商环的元素是整数按差为 5 的倍数形成的等价类。',
  },
  'algebra/polynomial-rings': {
    boundary: '多项式是形式表达式；在有限域上，不同多项式可能表示同一个取值函数。',
    question: '在二元域上，x² 与 x 是同一个多项式吗？',
    answer: '不是，它们次数不同；但在 0 和 1 上取值相同，故作为该有限集合上的函数相同。',
  },
  'algebra/finite-fields': {
    boundary: '有限域的元素个数必为素数幂；模素数幂的整数环一般不等于对应有限域。',
    question: '四元域是否就是模 4 整数环？',
    answer: '不是，模 4 中 2²=0，存在非零零因子；四元域可由二元域上的不可约二次多项式商构造。',
  },
  'algebra/field-extensions': {
    boundary: '扩张次数是向量空间维数；代数扩张不一定具有有限次数。',
    question: '有理数域加入根号 2 后扩张次数是多少？',
    answer: '次数为 2，基可取 1 与根号 2；x²-2 在有理数上不可约，故根号 2 的最小多项式次数是 2。',
  },
  'algebra/group-representations': {
    boundary: '群表示须把群乘法送到线性变换复合；选不同基得到的矩阵可能描述等价表示。',
    question: '循环群阶为 2，其生成元能映到标量 -1 吗？',
    answer: '能。生成元平方是单位元，而 (-1)²=1，关系被保持，得到一维符号表示。',
  },
  'algebra/invariant-subspaces': {
    boundary: '不变子空间要被所有表示算子保持；被单个算子保持未必对整个群不变。',
    question: '平面上绕原点 90 度旋转有实一维不变子空间吗？',
    answer: '没有。任意直线被转到垂直直线，不会保持自身；在复数域上则出现特征直线，显示底域的重要性。',
  },
  'algebra/irreducible-representations': {
    boundary: '不可约性依赖底域；完全可约还需有限群、特征等条件。',
    question: '一维表示为何必不可约？',
    answer: '一维空间只有零子空间和整个空间，没有非平凡真子空间，因此无法继续分解。',
  },
  'algebra/lie-groups': {
    boundary: '李群要求群运算与流形结构光滑相容；单纯具有连续参数的集合并不够。',
    question: '单位圆如何同时具有群与流形结构？',
    answer: '复数乘法使它成为群；角度给局部光滑坐标，乘法和取逆在坐标中光滑，因此形成一维李群。',
  },
  'algebra/lie-algebras': {
    boundary: '李代数的乘积是括号而非常规结合乘法；须满足反对称和雅可比恒等式。',
    question: '交换李群对应的李代数括号是什么？',
    answer: '恒为零。群的局部交换性意味着无穷小变换没有交换误差；反过来的全局结论需注意群的连通性。',
  },
  'algebra/lie-bracket': {
    boundary: '向量场括号测量流的不交换性；两个点处向量的普通叉积通常不是李括号。',
    question: '矩阵 A、B 可交换时，[A,B] 等于什么？',
    answer: '按 AB-BA 定义为零；不交换时该差记录先后施加两种无穷小变换的次序效应。',
  },
  'algebra/exponential-map': {
    boundary: '李群指数映射局部连接李代数与群，但不总是全局单射或满射。',
    question: '实数到单位圆的映射 t 映到 e 的 it 次方为何非单射？',
    answer: 't 与 t+2π 有相同像；它在零附近局部可逆，却在全局具有周期重复。',
  },
  'algebra/characters': {
    boundary: '特征标是表示矩阵的迹，故对换基不变；不是整个矩阵的逐项记录。',
    question: '二维平面旋转 θ 的特征标是多少？',
    answer: '旋转矩阵两个对角元均为 cosθ，迹为 2cosθ；单位元处特征标等于表示维数 2。',
  },
  'algebra/rotation-groups': {
    boundary: 'SO(3) 与三维向量空间局部相关但全局拓扑不同；不同旋转轴的旋转通常不交换。',
    question: 'SO(2) 的任意两个旋转为什么可交换？',
    answer: '二维旋转由一个角度确定，复合就是角度相加；角度加法交换，但此论证不能推广到 SO(3)。',
  },
  'algebra/chain-complexes': {
    boundary: '链复形的相邻边界复合必须为零；这保证边界都是循环。',
    question: '三角形的边界再取边界得到什么？',
    answer: '三条有向边的端点两两抵消，结果为零；这是“边界没有边界”的最直观有限例子。',
  },
  'algebra/exact-sequences': {
    boundary: '正合要求前一映射的像等于后一映射的核；仅复合为零还不够。',
    question: '0→A→B→C→0 正合时，中间两映射有什么性质？',
    answer: 'A 到 B 是单射，B 到 C 是满射，且后者的核恰好是前者的像；这是短正合列的三个条件。',
  },
  'algebra/homology-groups': {
    boundary: '同调是循环模掉边界；一个闭合链未必代表非零同调类。',
    question: '实心圆盘中的边界圆是否代表非零一维同调？',
    answer: '不代表。它是圆盘内二维链的边界；而单独一个圆周没有可填充的圆盘，其一维同调非零。',
  },
  'algebra/derived-functors': {
    boundary: '导出函子测量非正合性，需要指定范畴和投射或内射解消等条件。',
    question: '一个函子已经正合，其高阶导出函子通常怎样？',
    answer: '在导出函子存在的标准条件下，高阶导出为零；因为对解消应用正合函子不会产生高阶同调障碍。',
  },
  'algebra/ext-tor': {
    boundary: 'Ext 与 Tor 分别联系扩张和张量的非正合性；上下标与底环不能省略。',
    question: '整数模 Z/n 与 Z/m 的一阶 Tor 是什么？',
    answer: '在整数环上为 Z/gcd(n,m)；用乘 n 的自由解消张量 Z/m 后，计算乘 n 映射的核即可得到。',
  },
  'algebra/noetherian': {
    boundary: '诺特性要求理想升链终止，等价于每个理想有限生成；不意味着只有有限多个理想。',
    question: '整数环理想无限多，为何仍是诺特环？',
    answer: '每个理想都由一个整数生成。诺特性限制单个理想的生成方式，不限制理想总数。',
  },
  'algebra/localization': {
    boundary: '局部化只反演所选乘法集合中的元素；有零因子时自然映射未必单射。',
    question: '整数环反演所有非零整数得到什么？',
    answer: '得到有理数域，每个元素可写为 a/s，s 非零；若只反演 2 的幂，则只得到分母为 2 的幂的有理数。',
  },
  'algebra/modules': {
    boundary: '模推广向量空间，但标量来自环，未必可除；模不一定有基。',
    question: 'Z/2Z 作为整数模为何不能有自由基？',
    answer: '其中非零元乘 2 为零，存在扭元；自由整数模的非零元没有这种整数倍为零的现象。',
  },
  'algebra/prime-ideals': {
    boundary: '素理想必须是真理想；商为整环等价于素理想，商为域对应极大理想。',
    question: '整数环中的 6Z 是素理想吗？',
    answer: '不是。2×3 属于 6Z，但 2、3 都不属于它；等价地，模 6 商环含非零零因子。',
  },
  'algebra/dimension-theory': {
    boundary: 'Krull 维数数的是素理想严格链的长度；不等于环作为集合的大小。',
    question: '域的 Krull 维数为何为零？',
    answer: '域唯一的素理想是零理想，没有长度为 1 的严格素理想链，因此维数为零。',
  },
  'algebra/fundamental-theorem-galois': {
    boundary: '经典伽罗瓦对应针对有限伽罗瓦扩张；子域包含关系与子群包含关系反向。',
    question: '较大的中间域对应较大的固定子群吗？',
    answer: '相反，域越大，要逐点固定的元素越多，满足要求的自同构越少，所以对应子群越小。',
  },
  'algebra/galois-group': {
    boundary: '伽罗瓦群由固定基域的域自同构组成；不能把根的所有置换都直接视为自同构。',
    question: '有理数域加入根号 2 后，其伽罗瓦群有几个元素？',
    answer: '两个：恒等与把根号 2 送到负根号 2 的自同构。两者构成阶为 2 的循环群。',
  },
  'algebra/splitting-fields': {
    boundary: '分裂域是包含全部根的最小扩张；加入一个根不保证得到所有根。',
    question: '有理数域加入实立方根 2 后，x³-2 完全分裂吗？',
    answer: '没有。另两个根为非实复数，实扩张不包含它们；还须加入一个非平凡三次单位根。',
  },
  'algebra/solvability-by-radicals': {
    boundary: '特征零下根式可解与伽罗瓦群可解相联系；可解群不意味着交换群。',
    question: 'S3 非交换，为何三次方程仍有根式通解？',
    answer: 'S3 有正规列 S3 包含 A3 包含单位群，商群均交换，因此它是可解群，非交换性本身并不阻止根式表达。',
  },
  'algebra/quintic': {
    boundary: '一般五次方程无根式通解，不等于每个五次方程都不可用根式解。',
    question: 'x⁵-2=0 是否有根式解？',
    answer: '有，根可由实五次根 2 和五次单位根表达；不可解性结论针对一般五次方程及其典型 S5 伽罗瓦群。',
  },
  'algebra/vector-spaces': {
    boundary: '向量空间必须指定标量域；同一集合在不同底域下维数可变。',
    question: '复数作为实向量空间的维数是多少？',
    answer: '维数为 2，基可取 1 与 i；作为复向量空间则维数为 1，说明维数必须连同底域说明。',
  },
  'algebra/basis-dimension': {
    boundary: '生成集未必线性无关；线性无关集未必张成全空间。',
    question: '平面中的 (1,0)、(0,1)、(1,1) 是基吗？',
    answer: '不是。第三个是前两个之和，存在非平凡线性关系；前两个已构成平面的一个基。',
  },
  'algebra/linear-maps': {
    boundary: '线性映射要保持加法和标量乘法；带非零平移的仿射变换不是线性映射。',
    question: 'f(x)=2x+1 为什么不是实数上的线性映射？',
    answer: '线性映射必须把零映为零，而 f(0)=1。去掉常数项后的 2x 才是线性的。',
  },
  'algebra/eigenvalues': {
    boundary: '特征向量必须非零；实矩阵可能没有实特征值。',
    question: '二维旋转 90 度是否有实特征向量？',
    answer: '没有，任意非零向量都被转到垂直方向；在复数域中有特征值 i 和 -i。',
  },
  'algebra/spectral-decomposition': {
    boundary: '正交或酉对角化需自伴或正规等条件；一般方阵不一定可对角化。',
    question: '矩阵 [[1,1],[0,1]] 能否对角化？',
    answer: '不能。唯一特征值为 1，但特征空间只有一维，无法组成二维特征向量基。',
  },
  'numbertheory/divisibility-primes': {
    boundary: '1 不是素数；素数分解的唯一性需忽略因子顺序并在正整数中陈述。',
    question: '为什么把 1 算作素数会破坏常见唯一分解表述？',
    answer: '可在任意分解中插入任意多个 1，导致因子数不唯一；排除单位元后，素因子及其重数才唯一。',
  },
  'numbertheory/gcd': {
    boundary: '最大公因数取非负值；贝祖等式中系数可以是负整数。',
    question: '用欧几里得算法求 gcd(30,18)。',
    answer: '30=18+12，18=12+6，12=2×6，故最大公因数为 6；回代可得 6=2×18-30。',
  },
  'numbertheory/congruences': {
    boundary: '模运算中约去因子需要可逆性；非互素因子不能随意约掉。',
    question: '由 2x 与 2y 模 6 同余能推出 x 与 y 模 6 同余吗？',
    answer: '不能，x=0、y=3 是反例；只能推出它们模 3 同余，因为被约掉的 2 不是模 6 单位元。',
  },
  'numbertheory/arithmetic-functions': {
    boundary: '积性只要求互素参数乘法相容，完全积性才对任意正整数相容。',
    question: '欧拉函数满足 φ(4)=φ(2)² 吗？',
    answer: '不满足，左边为 2，右边为 1；2 与 2 不互素，所以积性定理在这里不能使用。',
  },
  'numbertheory/quadratic-residues': {
    boundary: '二次剩余的定义需说明模数及是否排除零；奇素数上的判别不能无条件推广。',
    question: '模 7 的非零平方剩余有哪些？',
    answer: '计算 1²、2²、3² 得到 1、4、2；负数平方重复，因此非零平方剩余恰为 {1,2,4}。',
  },
  'numbertheory/pythagorean-triples': {
    boundary: '欧几里得参数公式生成本原勾股数组时需参数互素且奇偶不同。',
    question: '取参数 m=2、n=1，会得到什么勾股数组？',
    answer: '得到 m²-n²=3、2mn=4、m²+n²=5；平方检验 9+16=25，且三个数互素。',
  },
  'numbertheory/prime-counting': {
    boundary: '素数计数函数是阶梯函数；渐近估计不等于每个点都精确。',
    question: 'π(10) 等于多少？',
    answer: '不超过 10 的素数为 2、3、5、7，所以等于 4；计数包括上界，且不把 1 算入。',
  },
  'numbertheory/prime-number-theorem': {
    boundary: '渐近等价是比值趋于 1；不表示误差趋零，更不保证短区间中均匀分布。',
    question: 'π(x) 与 x/ln x 渐近等价是否意味着两者差趋零？',
    answer: '不意味着。比值趋 1 只控制相对误差，绝对误差仍可能增长，必须另用误差项定理分析。',
  },
  'numbertheory/exponential-sums': {
    boundary: '指数和的估计依赖相位抵消；不能总用随机抵消直觉替代证明。',
    question: '把所有 n 次单位根相加得到多少？',
    answer: 'n>1 时为零。将其视作公比不为 1 的等比数列，分子为 1 的 n 次方减 1，因此完全抵消。',
  },
  'numbertheory/zeta-l-functions': {
    boundary: 'ζ 函数的狄利克雷级数只在实部大于 1 时绝对收敛；其他区域依靠解析延拓。',
    question: 'ζ(-1)=-1/12 是否表示正整数的通常求和等于负数？',
    answer: '不是。通常部分和发散到正无穷；-1/12 是解析延拓的函数值，两种“求和”含义必须区别。',
  },
  'numbertheory/sieve-methods': {
    boundary: '筛法能给出计数界，但筛除小素因子后剩下的数未必都是素数。',
    question: '只筛除 2、3、5 的倍数后，49 会被留下吗？',
    answer: '会，因为它不被这些素数整除；但 49=7² 不是素数，说明筛的深度决定可排除哪些合数。',
  },
  'numbertheory/number-fields': {
    boundary: '数域是有理数的有限扩张；并非每个含有理数的域都是数域。',
    question: '有理函数域 Q(t) 是数域吗？',
    answer: '不是，t 是超越元，扩张不是有限维；Q(√2) 才是次数为 2 的数域。',
  },
  'numbertheory/algebraic-integers': {
    boundary: '代数整数需满足首一整系数多项式；代数数不一定是代数整数。',
    question: '有理数 1/2 是代数整数吗？',
    answer: '不是。一个有理代数整数必须是整数，可由既约分数代入首一方程并比较分母证明。',
  },
  'numbertheory/ideal-factorization': {
    boundary: '数域整数环中的非零理想可唯一分解；元素分解可能因非主理想而失败。',
    question: 'Z[√-5] 中 6 的两种分解说明什么？',
    answer: '6=2×3=(1+√-5)(1-√-5)，这些因子均不可约但不互为单位倍，显示元素唯一分解失败；理想分解仍可恢复唯一性。',
  },
  'numbertheory/local-fields': {
    boundary: 'p 进距离按可被 p 整除的程度衡量接近；与通常绝对值的直觉不同。',
    question: '在 5 进绝对值下，125 的绝对值是多少？',
    answer: '125=5³，所以绝对值为 5 的负三次方，即 1/125；含越多 5 的因子反而越接近零。',
  },
  'numbertheory/class-groups': {
    boundary: '类群衡量理想偏离主理想的程度；类数 1 在数域整数环中对应唯一分解。',
    question: '数域整数环的理想类群平凡意味着什么？',
    answer: '每个非零理想都是主理想，因此该 Dedekind 环是主理想整环，并进一步是唯一分解整环。',
  },
  'numbertheory/points-over-finite-fields': {
    boundary: '有限域点数取决于域及方程；实图像上的连续形状不能直接用于有限域计数。',
    question: '模 5 方程 y²=1 有几个解？',
    answer: 'y=1 和 y=4，共两个。逐个平方或分解 (y-1)(y+1)=0 都可验证，因为模 5 是域。',
  },
  'numbertheory/elliptic-curves': {
    boundary: '椭圆曲线不是椭圆；短 Weierstrass 形式还需特征不为 2、3 及判别式非零。',
    question: 'y²=x³-x 在特征零下是否非奇异？',
    answer: '是。对应 a=-1、b=0，4a³+27b²=-4 非零；再加入无穷远点即可定义椭圆曲线群。',
  },
  'numbertheory/algebraic-varieties-arithmetic': {
    boundary: '研究算术点时必须指定底域；存在复点不意味着存在有理点。',
    question: 'x²+y²=-1 在实数和复数上分别有点吗？',
    answer: '实数上没有，因为平方和非负；复数上有，例如 (i,0)。底域改变会根本改变可解性。',
  },
  'numbertheory/abelian-varieties': {
    boundary: '阿贝尔簇是完备的连通代数群，不是任意交换群；椭圆曲线是一维实例。',
    question: '两个椭圆曲线的乘积有什么维数？',
    answer: '为二维阿贝尔簇，群运算逐坐标进行；它不再是一条椭圆曲线，因为维数已改变。',
  },
  'numbertheory/algebraic-numbers': {
    boundary: '代数性相对于底域定义；所有代数数构成域，但并非都能用根式表示。',
    question: '√2+√3 是代数数吗？',
    answer: '是。令 x 为此数，x²=5+2√6，再平方得到 x⁴-10x²+1=0，给出整系数多项式见证。',
  },
  'numbertheory/transcendental-numbers': {
    boundary: '无理不等于超越；超越数不能满足非零有理系数多项式。',
    question: '根号 2 为何不是超越数？',
    answer: '尽管它无理，却满足 x²-2=0；无理性只排除有理数，超越性还要排除所有代数数。',
  },
  'numbertheory/pi-and-e': {
    boundary: 'π 和 e 各自超越，不自动推出它们的和或积超越；这些量的性质仍有未解问题。',
    question: '由 π 与 e 超越，能直接断定 π+e 超越吗？',
    answer: '不能，超越数的和可能是代数数，例如 π 与 -π 相加为零；关于 π+e 不能据此下结论。',
  },
  'numbertheory/heights': {
    boundary: '高度衡量算术复杂度，须说明所用高度与归一化；不是单纯实数绝对值。',
    question: '既约有理数 2/3 和 200/301 的朴素高度分别是多少？',
    answer: '按 max(分子绝对值,分母) 定义，分别为 3 和 301；数值接近不代表算术复杂度接近。',
  },
  'numbertheory/diophantine-approximation': {
    boundary: '有理逼近精度要结合分母大小评价；无理数总可逼近不表示任意速率都能达到。',
    question: '22/7 为何是 π 的好近似但不能证明 π 有理？',
    answer: '它只提供有限误差的有理近似，误差虽小仍非零；无理数本来就能被有理数任意精确地逼近。',
  },
  'numbertheory/liouville-numbers': {
    boundary: '刘维尔数有异常好的有理逼近，因而超越；但超越数未必是刘维尔数。',
    question: '把刘维尔常数在第 n! 位后截断，为什么逼近特别快？',
    answer: '截断分母约为 10 的 n! 次方，而余项从下一阶乘位才出现；阶乘增长使误差小于分母的任意固定高次倒数。',
  },
  'numbertheory/modular-transformations': {
    boundary: '模变换作用于上半平面，矩阵行列式和权因子约定必须明确。',
    question: '变换 z 映到 -1/z 对 i 的作用是什么？',
    answer: 'i 被固定，因为 -1/i=i；若 z 在上半平面，该变换仍保持虚部为正。',
  },
  'numbertheory/cusp-forms': {
    boundary: '尖点形式需在尖点消失；普通模形式不一定满足这一额外条件。',
    question: '在无穷远尖点，q 展开常数项为零意味着什么？',
    answer: '对在该尖点全纯的模形式，这表示当 q 趋零时函数趋零；成为尖点形式还需在所有尖点满足相应消失条件。',
  },
  'numbertheory/hecke-operators': {
    boundary: 'Hecke 算子的归一化依权、水平与约定而变；特征形式提供相容的算术系数关系。',
    question: '为何研究共同 Hecke 特征形式而不只看单个算子？',
    answer: '共同特征向量同时组织多个素数处的算术数据，使傅里叶系数之间产生乘法关系，信息比单个特征值更丰富。',
  },
  'numbertheory/fourier-expansion': {
    boundary: '模形式的 q 展开利用平移周期性；负次幂是否允许取决于尖点处的增长条件。',
    question: '周期为 1 的全纯函数为何适合引入 q=e 的 2πiz 次方？',
    answer: 'z 与 z+1 给出相同 q，可把周期变量改写为穿孔圆盘变量；尖点对应 q=0，便于分析局部展开。',
  },
  'numbertheory/modularity': {
    boundary: '模性是特定算术对象与模形式之间的精确对应；不能泛称所有方程都对应同一种模形式。',
    question: '有理数域椭圆曲线的模性主要联系什么数据？',
    answer: '它把椭圆曲线的 L 函数与适当权 2 新形式的 L 函数相联系，从而对齐各素数处的算术系数。',
  },
  'numbertheory/discrete-logarithms': {
    boundary: '离散对数需指定群和生成元；安全性取决于群族及参数，不是所有群都难。',
    question: '模 7 乘法群中，以 3 为底，2 的一个离散对数是多少？',
    answer: '3²=9 与 2 模 7 同余，故答案为 2；指数按生成元的阶 6 取模。',
  },
  'numbertheory/modular-exponentiation': {
    boundary: '快速模幂减少乘法次数；它不会自动解决逆向的离散对数问题。',
    question: '计算 3 的 13 次方模 7。',
    answer: '3²=2、3⁴=4、3⁸=2（均模 7）；13=8+4+1，乘得 2×4×3=24，余数为 3。',
  },
  'numbertheory/primality-testing': {
    boundary: '通过某个概率测试不总是确定素数；应区分合数见证与素数证明。',
    question: '费马测试底数 2 通过，就能断定一个数是素数吗？',
    answer: '不能，存在费马伪素数，甚至 Carmichael 数会通过所有互素底数；测试结论需按算法保证解释。',
  },
  'numbertheory/integer-factorization': {
    boundary: '素性检验与整数分解不同；能快速判断合数不代表能快速找出因子。',
    question: '知道 91 是合数后，怎样给出可核验的分解？',
    answer: '给出 91=7×13，直接乘回即可核验；发现“非素”与构造两个因子的证据是不同任务。',
  },
  'numbertheory/lattice-methods': {
    boundary: '格是基向量的整数线性组合；换基须保持同一个整数格，而非仅保持实张成空间。',
    question: '由 (1,0)、(0,2) 生成的格包含 (0,1) 吗？',
    answer: '不包含，因为第二坐标必为偶数；虽然这两个向量在实数上张成整个平面，整数约束仍留下空隙。',
  },
  'numbertheory/local-global-principle': {
    boundary: '局部处处可解未必整体可解；Hasse 原理只对某些方程族成立。',
    question: '整体有理解能推出每个完备化中有解吗？',
    answer: '能，通过有理数到实数及各 p 进域的嵌入即可得到局部解；逆向则可能失败，不能无条件使用。',
  },
  'numbertheory/rational-points': {
    boundary: '有理点要求每个坐标有理；实曲线非空不保证有理点存在。',
    question: '单位圆如何由有理参数产生有理点？',
    answer: '取有理 t，坐标 ((1-t²)/(1+t²),2t/(1+t²)) 都有理，代入平方和为 1；这是用直线斜率参数化。',
  },
  'numbertheory/integer-equations': {
    boundary: '整系数不意味着求整数解；必须另行声明解域，并注意整数解比有理解更受限。',
    question: 'x²-y²=1 的整数解有哪些？',
    answer: '(x-y)(x+y)=1，两个整数因子只能同为 1 或同为 -1，因此仅有 (1,0) 和 (-1,0)。',
  },
  'numbertheory/local-solvability': {
    boundary: '模某个数无解即可排除整数解；通过有限多个模检验通常不能证明有解。',
    question: 'x²=3 为什么没有整数解？',
    answer: '整数平方模 4 只可能为 0 或 1，不能为 3；这是一个足以排除整体解的局部障碍。',
  },
  'geometry/euclidean-space': {
    boundary: '欧氏空间除了坐标还包含内积结构；换距离后，几何性质也可能改变。',
    question: '平面两点 (0,0)、(3,4) 的欧氏距离是多少？',
    answer: '由勾股定理得 5；若改用城市街区距离，则为 7，说明“距离”必须说明度量。',
  },
  'geometry/axioms-parallel': {
    boundary: '平行公设不是所有几何的共同规律；改变公设可产生相容的非欧几何。',
    question: '过直线外一点的平行线数目在欧氏和双曲几何中有何不同？',
    answer: '欧氏几何中恰有一条；双曲几何中有无穷多条不相交直线。不能把平面直觉视作无条件公理。',
  },
  'geometry/hyperbolic-geometry': {
    boundary: '双曲圆盘模型中的直线通常是与边界正交的圆弧；图上欧氏长度不是双曲长度。',
    question: '双曲三角形内角和与 π 比较如何？',
    answer: '严格小于 π；在曲率为 -1 的平面上，面积等于 π 减去三内角之和，角亏反映负曲率。',
  },
  'geometry/spherical-geometry': {
    boundary: '球面测地线是大圆；普通纬线除赤道外不是测地线，球面两点的最短弧也可能不唯一。',
    question: '北极与赤道上相差 90 度的两点组成的三角形内角和是多少？',
    answer: '三角都是直角，总和为 270 度，大于平面三角形的 180 度；三边均取大圆短弧。',
  },
  'geometry/projective-geometry': {
    boundary: '射影坐标按非零共同倍数等价；坐标全零不能表示点。',
    question: '齐次坐标 [2:4:2] 对应哪个仿射点？',
    answer: '在最后坐标非零的图中，除以 2 得 [1:2:1]，所以对应 (1,2)；[1:2:0] 则是无穷远点。',
  },
  'geometry/smooth-manifolds': {
    boundary: '流形局部像欧氏空间，不意味着全局只有一张坐标图；光滑性还需坐标变换相容。',
    question: '圆周为何是一维流形，却不能用一个普通实数坐标覆盖成全局同胚？',
    answer: '每个小弧段像开区间，但圆周紧致，实直线中的非空开集不紧致；局部相似不消除全局差别。',
  },
  'geometry/tangent-spaces': {
    boundary: '切空间属于某个点；不同点的切向量比较需要额外结构或具体嵌入。',
    question: '单位圆在 (1,0) 的切空间是哪条方向线？',
    answer: '由约束 x²+y²=1 微分得 x dx+y dy=0，在该点得到 dx=0，因此切方向为竖直方向。',
  },
  'geometry/curves-surfaces': {
    boundary: '参数化可能退化；曲线和曲面的局部几何通常要求导数具有适当秩。',
    question: '单位圆的曲率是多少，半径 R 的圆呢？',
    answer: '分别为 1 和 1/R；半径越大转弯越缓，曲率越小，说明曲率度量局部弯曲而非位置。',
  },
  'geometry/curvature-geodesics': {
    boundary: '测地线局部满足直行条件，但不保证任意长的一段都是全局最短路。',
    question: '沿赤道走超过半圈，仍是两端间最短路吗？',
    answer: '不是，赤道仍是一条测地线，但反方向的短弧更短；局部测地与全局最短必须区分。',
  },
  'geometry/riemannian-metric': {
    boundary: '黎曼度量是每个切空间上的正定内积，须随位置光滑变化；不是任意距离函数。',
    question: '平面度量变成 dx²+4dy² 后，竖直单位段长度是多少？',
    answer: '长度为 2，因为竖直速度 (0,1) 的平方长度为 4；同样坐标位移可以因度量改变而有不同长度。',
  },
  'geometry/open-sets-continuity': {
    boundary: '拓扑连续通过开集原像定义；一般不是开集的像仍开。',
    question: '常值映射连续，是否一定是开映射？',
    answer: '不是。实轴中开区间的像是单点，而单点在实轴通常不是开集；连续性检查的是原像。',
  },
  'geometry/connectedness': {
    boundary: '连通与道路连通不同；道路连通蕴含连通，但一般拓扑空间中反向不成立。',
    question: '实数中的 [0,1] 与 [2,3] 的并集连通吗？',
    answer: '不连通，两段可用互不相交的相对开集分开；中间缺口阻止整体保持为一个连通块。',
  },
  'geometry/compactness': {
    boundary: '闭有界等价于紧致是有限维欧氏空间的特性；一般度量空间中闭有界不足以紧致。',
    question: '开区间 (0,1) 为什么不紧致？',
    answer: '取覆盖 (1/n,1)，n≥2。它们覆盖整个区间，但任意有限子族都漏掉足够接近零的点。',
  },
  'geometry/quotient-spaces': {
    boundary: '商拓扑由原空间经识别诱导；识别可能破坏 Hausdorff 等分离性质。',
    question: '把闭区间两端识别，会得到什么空间？',
    answer: '得到圆周。区间内部保持原样，两端成为同一点，商映射连续，但端点附近的拓扑变成圆周式邻域。',
  },
  'geometry/homeomorphism': {
    boundary: '同胚保持拓扑结构，不必保持长度、角度或曲率。',
    question: '圆周与椭圆边界同胚吗？',
    answer: '是。沿坐标轴做非零伸缩可给出连续双射且逆连续；虽然周长和曲率改变，拓扑结构不变。',
  },
  'geometry/fundamental-group': {
    boundary: '基本群记录以基点出发的闭路及其同伦；多连通分支空间中基点选择需说明。',
    question: '圆周的基本群为什么与整数有关？',
    answer: '闭路的绕行次数为整数，拼接闭路使绕行数相加；不同绕行数不能在圆周内连续变形为彼此。',
  },
  'geometry/homotopy': {
    boundary: '同伦是整个映射的连续变形；同伦等价弱于同胚。',
    question: '实心圆盘与一个点同伦等价吗？',
    answer: '是。把每个点沿半径线性收缩到圆心可给出收缩同伦；二者并不同胚，因为点与圆盘的拓扑结构不同。',
  },
  'geometry/homology-groups-topology': {
    boundary: '同调依赖系数选择；相同同调群未必意味着同胚甚至同伦等价。',
    question: '圆周的一阶整数同调群是什么？',
    answer: '是整数群 Z，生成元对应绕圆一圈；次数相反的绕行给相反元素，边界等价不会消掉这一基本洞。',
  },
  'geometry/cohomology': {
    boundary: '上同调不仅有群结构，还可通过杯积编码信息；只列维数会丢失乘法信息。',
    question: '环面的一阶实上同调维数是多少？',
    answer: '为 2，分别对应沿两条独立基本闭路积分的方向；二者的杯积还能探测二维的整体面积类。',
  },
  'geometry/fibrations': {
    boundary: '局部乘积或同伦提升性质不保证全局是直积；纤维可通过扭转粘合。',
    question: '莫比乌斯带为何不是圆周与线段的平凡乘积？',
    answer: '沿圆周走一圈后线段方向翻转，形成全局扭转；局部仍像区间乘线段，说明局部平凡不能消除全局粘合信息。',
  },
  'geometry/algebraic-varieties-geometry': {
    boundary: '同一方程在不同底域上有不同点集；经典代数簇语言还需约定约化性和不可约性。',
    question: '方程 xy=0 在平面中表示什么？',
    answer: '表示两条坐标轴的并，因多项式分解为 x 与 y；它是可约代数集合，不能当作一条不可约光滑曲线。',
  },
  'geometry/coordinate-rings': {
    boundary: '坐标环中的等价是模掉定义理想；不是把全部多项式直接保留为互不相同的函数。',
    question: '抛物线 y=x² 的坐标环为何同构于 k[x]？',
    answer: '在商环 k[x,y]/(y-x²) 中，y 可统一替换为 x²，所有坐标函数都能唯一写成 x 的多项式。',
  },
  'geometry/schemes': {
    boundary: '概形的点是素理想，不只对应通常几何点；结构层同时记录局部函数信息。',
    question: '整数环的谱中除了各素数对应的点，还有什么点？',
    answer: '还有零理想对应的泛点，因为整数环是整环；其闭包为整个谱，体现概形中非闭点的作用。',
  },
  'geometry/singularities': {
    boundary: '奇点判据需考虑底域和方程形式；交叉点与尖点虽都奇异，局部结构不同。',
    question: '平面曲线 y²=x³ 为何在原点奇异？',
    answer: '定义函数的两个偏导 -3x²、2y 在原点同时为零，曲线在那里没有普通光滑曲线的局部结构。',
  },
  'geometry/birational-geometry': {
    boundary: '双有理只要求稠密开集上同构；不是整个空间处处同构。',
    question: '平面中映射 (x,y) 到 (x,xy) 哪里可逆？',
    answer: '当 x 非零时，可由第二坐标除以 x 恢复 y；在 x=0 上整条直线被压到一点，故不是全局同构。',
  },
  'geometry/low-dimensional-topology': {
    boundary: '二维、三维和四维流形的分类工具差异很大；不能从低维图像直接外推所有维度。',
    question: '闭连通可定向曲面的亏格 g 与欧拉示性数有什么关系？',
    answer: 'χ=2-2g。球面 g=0 得 2，环面 g=1 得 0；这一公式需满足闭、连通、可定向的前提。',
  },
  'geometry/knot-theory': {
    boundary: '纽结等价要求在三维空间中无切断、无自交地变形；平面投影交叉不是实际相交。',
    question: '一个投影图有交叉，就一定是非平凡纽结吗？',
    answer: '不一定。平凡圆结也能画出多处投影交叉，可用 Reidemeister 变换消去；要看三维嵌入的等价类。',
  },
  'geometry/manifold-classification': {
    boundary: '分类需说明维度、紧致性、定向性及拓扑或光滑等价；缺少条件就不是一个确定问题。',
    question: '球面与环面能同胚吗？',
    answer: '不能，二者欧拉示性数分别为 2 和 0，同胚必须保持这一不变量。',
  },
  'geometry/surgery-theory': {
    boundary: '手术是按指定粘合数据切除并替换局部片段；结果取决于维度、嵌入和 framing。',
    question: '在曲面上增加一个把手，会怎样改变亏格？',
    answer: '对闭连通可定向曲面，亏格增加 1，欧拉示性数减少 2；这给出手术改变整体拓扑的直观模型。',
  },
  'geometry/differential-structures': {
    boundary: '同一个拓扑流形可能有不等价光滑结构；连续坐标变化不必光滑。',
    question: '为什么同胚分类完成后，光滑分类仍可能有额外问题？',
    answer: '同胚只保持连续结构，未约束坐标变换的可微性；还需判断是否存在保持光滑结构的微分同胚。',
  },
  'geometry/packing-covering': {
    boundary: '堆积要求内部不重叠，覆盖要求不留空隙；两者优化目标不能混用。',
    question: '平面单位圆的堆积密度能否等于 1？',
    answer: '不能，圆之间无法完全无缝填满平面；最密圆堆积为六角排列，密度 π/(2√3)，小于 1。',
  },
  'geometry/convex-sets': {
    boundary: '凸集要求任意两点之间整条线段都在集合内；只有边界闭合并不足够。',
    question: '圆盘与圆周哪个是凸集？',
    answer: '圆盘是，任意弦都包含其中；圆周不是，两点之间的弦内部通常不在圆周上。',
  },
  'geometry/polyhedra': {
    boundary: '多面体通常由有限个线性半空间相交定义，可能无界；有界者称多胞体。',
    question: '第一象限是多面体吗？',
    answer: '是，由 x≥0、y≥0 两个线性不等式定义；但它无界，所以不是有界多胞体。',
  },
  'geometry/triangulations': {
    boundary: '三角剖分要求各单形交集是公共面；任意覆盖着的三角形不自动组成合法剖分。',
    question: '给四边形加一条对角线会产生什么？',
    answer: '产生两个三角形，交集是完整公共边，覆盖原四边形；顶点、边、面的计数改变但欧拉示性数不变。',
  },
  'geometry/euler-characteristic': {
    boundary: 'V-E+F 的适用计数要包含空间的所有胞腔；嵌入图中是否计外部面需说明。',
    question: '四面体边界的欧拉示性数是多少？',
    answer: '4 个顶点、6 条边、4 个面，得 4-6+4=2；这里讨论的是边界球面，不含内部三维胞腔。',
  },
  'geometry/symplectic-forms': {
    boundary: '辛形式要求闭且非退化，故只能存在于偶数维流形；非退化不等于正定。',
    question: '二维平面上的 dx∧dy 是辛形式吗？',
    answer: '是。它闭且非退化，给出有向面积；反对称性使它不能被当作衡量长度的黎曼内积。',
  },
  'geometry/symplectomorphisms': {
    boundary: '辛变换保持辛形式，比只保持总体积更强；二维中保面积与保辛在适当定向下相联系。',
    question: '变换 (q,p) 到 (2q,p/2) 是否保持标准辛形式？',
    answer: '保持，因为 d(2q)∧d(p/2)=dq∧dp；一个方向拉伸，另一个方向相应压缩。',
  },
  'geometry/hamiltonian-systems': {
    boundary: '哈密顿方程需指定辛形式及符号约定；能量守恒要求哈密顿量不显含时间。',
    question: 'H=(p²+q²)/2 的标准哈密顿方程是什么？',
    answer: 'q\'=p、p\'=-q。能量导数 p·(-q)+q·p=0，轨道沿相平面的等能圆运动。',
  },
  'geometry/lagrangian-submanifolds': {
    boundary: '拉格朗日子流形既需维数为总维数一半，也需辛形式限制为零；半维并不自动拉格朗日。',
    question: '标准相空间中的零截面 p=0 是否拉格朗日？',
    answer: '是，维数为一半，且切向量都没有 p 方向分量，dq∧dp 在其上为零。',
  },
  'geometry/moment-maps': {
    boundary: '动量映射关联连续对称与哈密顿生成元；其存在和等变性需要额外条件。',
    question: '平面旋转对称在标准辛结构下对应什么典型守恒量？',
    answer: '在固定符号约定后对应半径平方的一半，可能差一个符号或常数；它生成旋转流，不能脱离约定判断符号。',
  },
  'geometry/symplectic-topology': {
    boundary: '辛拓扑受比体积更细的约束；保体积嵌入未必是辛嵌入。',
    question: '辛不挤压定理为何比体积守恒更强？',
    answer: '在维数至少 4 时，即使目标圆柱体积无限大，球也不能辛嵌入到辛半径更小的圆柱中；障碍来自辛二维截面的尺度。',
  },
  'applied/numerical-stability': {
    boundary: '稳定性讨论算法对误差的放大，条件数讨论问题自身；二者不能混为一谈。',
    question: '计算两个很接近的大数之差为何可能失去有效数字？',
    answer: '共同高位抵消后，原先微小的舍入误差相对结果变大；应寻找等价但避免灾难性抵消的表达式。',
  },
  'applied/condition-numbers': {
    boundary: '条件数依赖输入输出的范数和绝对或相对误差约定；不是一个脱离问题的常数。',
    question: 'f(x)=x² 在非零 x 处的相对条件数是多少？',
    answer: '是 2，因为绝对值为 x f\'(x)/f(x) 的绝对值；输入约 1% 的小相对误差会导致约 2% 的输出相对误差。',
  },
  'applied/numerical-integration': {
    boundary: '误差阶依赖函数光滑性和网格条件；有奇点或不连续时不能直接沿用。',
    question: '对线性函数用梯形公式，积分误差是多少？',
    answer: '为零，梯形边界恰好贴合直线；这检验了公式的线性精确性，并不意味着对所有函数都精确。',
  },
  'applied/error-analysis': {
    boundary: '总误差可能同时含建模、截断和舍入误差；减小步长不一定总能改善结果。',
    question: '前向差分步长为什么不能无限取小？',
    answer: '截断误差随步长减小，但相近函数值相减会放大舍入误差；两种误差存在折中，需选合适尺度。',
  },
  'applied/linear-programming': {
    boundary: '最优解存在时才讨论最优顶点；可行域为空或目标无界都不会产生有限最优解。',
    question: '最大化 x+y，约束 x,y≥0 且 x+y≤1，最优解唯一吗？',
    answer: '不唯一。线段 x+y=1 上每个点都取最优值 1，说明线性规划可能有整条最优面。',
  },
  'applied/convex-optimization': {
    boundary: '凸优化需凸可行域和凸目标（最小化）；一阶条件的充分性依相应可微性与约束条件。',
    question: '凸函数的局部最小点为什么也是全局最小点？',
    answer: '若有更低的可行点，沿连接线段会在局部最小点附近产生更低函数值，与局部最小矛盾。',
  },
  'applied/nonlinear-optimization': {
    boundary: '驻点未必是极值点，局部极小也未必全局极小；需检查曲率与可行方向。',
    question: 'f(x)=x³ 在零的导数为零，零是极小点吗？',
    answer: '不是，零两侧分别有正值和负值；仅解导数为零只能找候选点。',
  },
  'applied/duality': {
    boundary: '弱对偶一般给界，强对偶需条件；凸性本身也不能替代所有约束资格条件。',
    question: '最小化原问题与其拉格朗日对偶，哪一边提供下界？',
    answer: '对偶最大值提供原问题最优值的下界；若强对偶成立，两者相等，否则存在对偶间隙。',
  },
  'applied/numerical-linear-algebra': {
    boundary: '显式求逆通常不是解线性系统的首选；数值秩也与容忍误差有关。',
    question: '已知 LU 分解后，解 Ax=b 通常怎样做？',
    answer: '先解下三角系统，再解上三角系统；避免先形成完整逆矩阵，可减少计算和误差传播。',
  },
  'applied/scheduling': {
    boundary: '调度目标和机器约束决定问题；某种排序最优不代表对其他目标也最优。',
    question: '单机、任务同时可用，最小化总完成时间应怎样排序？',
    answer: '按加工时间从短到长排；交换相邻逆序任务可降低总完成时间。此结论不自动适用于带释放时间等变体。',
  },
  'applied/ill-posedness': {
    boundary: '存在、唯一和连续依赖是三项独立要求；有精确解也可能极不稳定。',
    question: '由带噪函数值求导为何容易不稳定？',
    answer: '微小幅度的高频噪声在求导后乘上频率，被显著放大；这体现逆问题对数据扰动的不连续或严重敏感。',
  },
  'applied/identifiability': {
    boundary: '可辨识性描述理想数据能否区分参数；有限样本下估计准确是另一个问题。',
    question: '观测只依赖 a+b，能分别识别 a 与 b 吗？',
    answer: '不能。任意 (a+t,b-t) 给出相同观测，存在整族等价参数；需补充数据或约束。',
  },
  'applied/parameter-inversion': {
    boundary: '反演结论依赖前向模型及误差模型；优化残差小不保证真实参数已恢复。',
    question: 'y=ax，仅在 x=0 观测，能恢复 a 吗？',
    answer: '不能，所有 a 都预测 y=0。应选非零输入，多个尺度的观测还可帮助评估噪声和稳定性。',
  },
  'applied/imaging-reconstruction': {
    boundary: '重建需要足够观测与先验；看起来清晰的图像不等于所有细节都有数据支持。',
    question: '仅有物体一个方向的投影，能唯一重建一般二维图像吗？',
    answer: '通常不能，不同图像可能有同样投影；增加角度或明确先验才能缩小等价解集合。',
  },
  'applied/regularized-inversion': {
    boundary: '正则化以偏差换稳定，参数过大可能抹去真实结构；参数选择需依据噪声和验证。',
    question: '最小化 (x-y)²+λx² 的解是什么？',
    answer: '求导得 x=y/(1+λ)。λ 越大越向零收缩，显示稳定性与偏差之间的折中。',
  },
  'applied/state-space': {
    boundary: '状态要足以描述未来演化；状态坐标不唯一，同一系统可有不同等价实现。',
    question: '二阶方程 q\'\'+q=0 如何改成一阶状态系统？',
    answer: '取 x1=q、x2=q\'，则 x1\'=x2、x2\'=-x1；状态把位置和速度一起记录。',
  },
  'applied/controllability-observability': {
    boundary: '可控与可观依赖输入输出配置；系统稳定不代表一定可控或可观。',
    question: '若状态 x2 完全不影响输出且与可见状态不耦合，能从输出恢复它吗？',
    answer: '不能。不同 x2 初值产生同样输出，因此不可观；增加传感器或耦合信息才可能区分。',
  },
  'applied/feedback-control': {
    boundary: '负反馈是否稳定取决于增益、相位和时延；不是加反馈就必然改善。',
    question: '系统 x\'=x+u，取 u=-kx，何时渐近稳定？',
    answer: '闭环为 x\'=(1-k)x，所以 k>1 才渐近稳定；k=1 只保持状态，k<1 会增长。',
  },
  'applied/robust-control': {
    boundary: '名义模型稳定不保证所有扰动模型稳定；不确定集合必须明确。',
    question: 'x\'=(a-k)x，a 在 [1,2]，怎样保证所有模型稳定？',
    answer: '取 k>2，使任意允许 a 都有 a-k<0；只按 a=1 选 k=1.5 会漏掉更不利情形。',
  },
  'applied/optimal-control': {
    boundary: '最优控制需目标、动力学、约束和时间区间；必要条件不自动给全局最优。',
    question: 'x\'=u，u 在 [-1,1]，从 x=0 到 x=1 最短需多久？',
    answer: '至少 1，因为速度不超过 1；恒取 u=1 恰在时间 1 到达，因此达到下界。',
  },
  'applied/classical-mechanics': {
    boundary: '模型需说明参考系、约束和力；能量守恒不适用于任意受迫耗散系统。',
    question: '无摩擦弹簧振子的机械能为何守恒？',
    answer: '动能与势能之和求导后，速度乘惯性项与弹力做功项抵消；加入阻尼后能量通常单调减少。',
  },
  'applied/quantum-theory': {
    boundary: '态矢量的整体相位不改变物理态；测量概率须从归一化态与测量规则计算。',
    question: '归一化态 (1/√2,1/√2) 在标准基测量的概率是多少？',
    answer: '两个结果各为 1/2，由振幅模平方得到；振幅相加与概率相加是不同操作。',
  },
  'applied/statistical-mechanics': {
    boundary: '系综和约束条件决定分布；微观可逆性与宏观耗散的联系还需统计假设。',
    question: '两能级系统的能量为 0 和 ε，玻尔兹曼权重比是多少？',
    answer: '高能级对低能级的概率比为 exp(-ε/kT)；温度低时高能级占比降低，归一化还需除以配分函数。',
  },
  'applied/symmetry-conservation': {
    boundary: '诺特定理联系连续对称与守恒律，需变分结构等前提；离散对称不直接给同样守恒量。',
    question: '时间平移不变通常对应什么守恒量？',
    answer: '在适当拉格朗日系统中对应能量；空间平移对应动量，旋转对应角动量，需逐项检查作用量对称性。',
  },
  'applied/mesh-discretization': {
    boundary: '网格加密只降低部分离散误差；边界、模型或求解器错误不会自动消失。',
    question: '把一维均匀网格步长减半，区间数如何变化？',
    answer: '固定区间上区间数翻倍；二维均匀细分的单元数约变四倍，三维约八倍，计算成本随维度迅速上升。',
  },
  'applied/pde-models': {
    boundary: '同一方程形式可描述不同物理量；系数、量纲及边界条件必须随模型解释。',
    question: '热方程与波动方程分别典型描述什么行为？',
    answer: '热方程扩散并平滑温度差，波动方程传播振动与扰动；一个常见一阶时间导数，一个常见二阶时间导数。',
  },
  'applied/finite-differences': {
    boundary: '差分精度依赖光滑性；显式时间推进通常还受稳定性步长限制。',
    question: '中心二阶差分作用在 f(x)=x² 上得到什么？',
    answer: '[f(x+h)-2f(x)+f(x-h)]/h²=2，恰等于二阶导数；对一般光滑函数才有非零截断误差。',
  },
  'applied/finite-elements': {
    boundary: '有限元从弱形式和试验空间出发；不是简单在网格点代入原方程。',
    question: '一维分片线性有限元的帽函数有什么特点？',
    answer: '在一个节点取 1、其他节点取 0，支持集中于相邻单元；局部支持使组装矩阵稀疏。',
  },
  'applied/simulation-validation': {
    boundary: '验证代码解对方程与验证模型贴近现实是两类工作；二者都不能只靠图像看起来合理。',
    question: '网格收敛了，能否说明模型准确预测实验？',
    answer: '不能，网格收敛主要支持离散误差已受控；还需与独立实验比较，检查建模误差及参数偏差。',
  },
  'applied/stochastic-price-models': {
    boundary: '价格过程是带假设的数学模型；拟合历史不等于保证未来分布不变。',
    question: '几何布朗运动为何保持正价格？',
    answer: '其解是初始正价格乘某个实指数，指数函数恒正；这来自模型形式，并不说明它能覆盖所有市场机制。',
  },
  'applied/no-arbitrage-pricing': {
    boundary: '无套利不保证市场完备；复制唯一时才直接得到唯一复制价格。',
    question: '一个可无成本复制的确定到期现金流应如何定价？',
    answer: '在可交易无风险资产与相关假设下，价格等于贴现现金流；否则可买便宜一边、卖贵一边形成套利。',
  },
  'applied/hedging-replication': {
    boundary: '连续动态复制依赖理想化交易条件；离散调仓和成本会留下复制误差。',
    question: '完全复制某资产收益后，模型中的净头寸风险怎样？',
    answer: '在相同到期收益和无套利假设下可相互抵消；实际交易频率、跳跃和费用可能使复制并不完全。',
  },
  'applied/monte-carlo': {
    boundary: '常见平方根收敛率需要有限方差等条件；独立样本数翻倍不会让误差减半。',
    question: '想把标准误差减半，样本数通常需增加几倍？',
    answer: '增加到四倍，因为标准误差与样本数平方根成反比；方差缩减可改善常数，但不应与单纯增加样本混淆。',
  },
  'applied/risk-measures': {
    boundary: 'VaR 不描述超阈值后的平均损失，且一般不满足次可加性；风险定义需说明尾部和损失约定。',
    question: '两个投资组合的 VaR 相同，是否尾部风险一样？',
    answer: '不一定。极端损失大小可能差很多，需结合期望短缺等尾部指标及完整损失分布分析。',
  },
  'applied/optimal-portfolio': {
    boundary: '最优组合依赖收益、协方差、约束和风险偏好估计；估计误差可改变权重。',
    question: '两资产收益相关系数为 1，是否必有显著分散收益？',
    answer: '没有一般保证。完全正相关时波动同向，分散空间受限；通常相关性较低才更有利于降低组合方差。',
  },
  'applied/population-dynamics': {
    boundary: '逻辑斯蒂模型中的承载量假定环境条件固定；现实承载量可能随资源变化。',
    question: '逻辑斯蒂方程在种群等于承载量 K 时增长率是多少？',
    answer: '为零；当种群低于 K 且为正时增长，高于 K 时下降，体现负密度反馈。',
  },
  'applied/epidemic-models': {
    boundary: '基本再生数描述特定初始与环境条件；有效再生数还受易感比例及干预影响。',
    question: 'SIR 模型中 R0>1 是否代表疫情永远增长？',
    answer: '不是，早期增长需足够易感者；随易感比例下降，有效再生数可低于 1，感染人数转而下降。',
  },
  'applied/reaction-diffusion': {
    boundary: '扩散常平滑差异，但多组分与反应耦合可引起图灵不稳定；不是任意系统都会成斑图。',
    question: '只有一个稳定线性反应项再加普通扩散，通常会因扩散失稳吗？',
    answer: '在常规正扩散系数及周期或无流边界下不会；扩散使各非恒定模态增加衰减，多组分耦合才可能改变结论。',
  },
  'applied/biological-networks': {
    boundary: '网络连边可表示相关、调控或物质反应，含义必须明确；相关边不能自动解释成直接因果。',
    question: '两个基因表达高度相关，能断言一个直接调控另一个吗？',
    answer: '不能，可能共同受第三个因子调控；需干预、时间信息或额外机制证据来区分。',
  },
  'applied/parameter-calibration': {
    boundary: '参数拟合需与独立验证分开；误差小也可能来自过拟合或不可辨识。',
    question: '用同一批数据拟合并评价，误差很小意味着什么？',
    answer: '主要说明对这批数据贴合较好，不能充分支持泛化；应保留独立数据并报告参数不确定性。',
  },
  'discrete/permutations-combinations': {
    boundary: '计数前须确定是否区分顺序、能否重复及对象是否可区分。',
    question: '从 5 人中选 2 人组成无职务小组有多少种？',
    answer: '组合数为 5×4/2=10；除以 2 是因为同两人的两种排列代表同一小组，若区分正副组长则有 20 种。',
  },
  'discrete/generating-functions': {
    boundary: '形式幂级数可按系数运算，不一定要求解析收敛；两种解释不能混用。',
    question: '序列全为 1，其普通生成函数是什么？',
    answer: '形式上为 1/(1-x)，展开每个非负次幂系数均为 1；解析意义的等比级数只在绝对值小于 1 时收敛。',
  },
  'discrete/recurrences': {
    boundary: '递推关系通常还需足够初始条件；同一关系可对应很多不同序列。',
    question: 'a_n=2a_(n-1)、a_0=3 的通项是什么？',
    answer: '反复展开得到 a_n=3·2 的 n 次方；代回递推并检查 n=0，可验证通项而不只猜测。',
  },
  'discrete/probabilistic-method': {
    boundary: '正概率存在性证明通常不给直接构造算法；期望值论证需要明确随机对象。',
    question: '有限个实数的平均为 5，是否至少有一个数不小于 5？',
    answer: '是。若全部小于 5，平均也小于 5，矛盾；期望法以同样逻辑把平均表现转成存在性结论。',
  },
  'discrete/extremal-combinatorics': {
    boundary: '极值界必须固定对象规模与禁用结构；不同禁用条件可产生不同数量级。',
    question: '无三角形简单图在 n 个顶点上最多多少条边？',
    answer: 'Mantel 定理给出向下取整的 n²/4；尽可能平衡的完全二部图达到该界，禁三角形不是禁所有环。',
  },
  'discrete/graphs-networks': {
    boundary: '简单图、多重图、有向图的定义和计数不同；度与权重也不是同一概念。',
    question: '无向图所有顶点度数之和为何是边数两倍？',
    answer: '每条普通边各给两个端点贡献 1；允许自环时按自环贡献度 2 的约定，公式仍成立。',
  },
  'discrete/trees-spanning': {
    boundary: '生成树包含所有顶点；原图不连通时不存在单棵生成树。',
    question: '有 8 个顶点的树有几条边？',
    answer: '有 7 条。树连通且无环，边数必为顶点数减 1；删去任意一条边都会使它断开。',
  },
  'discrete/paths-connectivity': {
    boundary: '路径、游走和迹对重复顶点或边的限制不同；讨论前要统一术语。',
    question: '两顶点间有游走，是否一定有简单路径？',
    answer: '有。若游走重复顶点，可删去重复点之间的闭合片段；有限次处理后得到不重复顶点的路径。',
  },
  'discrete/matchings-coloring': {
    boundary: '匹配限制边不共享端点，顶点着色限制相邻顶点不同色；两个优化问题不能混同。',
    question: '三角形的最大匹配大小与顶点色数分别是多少？',
    answer: '最大匹配只有 1 条边，因为任意两边共享端点；三个顶点两两相邻，色数为 3。',
  },
  'discrete/spectral-graph-theory': {
    boundary: '邻接矩阵谱与拉普拉斯谱不同；归一化形式还需处理孤立点。',
    question: '无向图拉普拉斯矩阵的零特征值重数表示什么？',
    answer: '等于连通分支数；每个分支上的常值向量给出一个独立零特征向量，反向可由二次型证明。',
  },
  'discrete/partial-orders': {
    boundary: '偏序允许不可比元素；全序要求任意两个元素可比。',
    question: '集合包含关系是偏序还是总是全序？',
    answer: '是偏序但一般不是全序；例如 {1} 与 {2} 互不包含，因此不可比。',
  },
  'discrete/lattices': {
    boundary: '格要求任意两元素都有最小上界和最大下界；不要求所有元素全序排列。',
    question: '幂集按包含排序时，交与并分别是什么？',
    answer: '交集是最大下界，并集是最小上界；这给出一个分配格，也是布尔代数的基本模型。',
  },
  'discrete/boolean-algebras': {
    boundary: '布尔代数中的补是相对于指定全集或单位元；不能脱离上下文取补。',
    question: '在全集 {1,2,3} 中，{1} 的补是什么？',
    answer: '为 {2,3}；若全集改变，补集随之改变。交、并、补分别对应逻辑中的且、或、非。',
  },
  'discrete/finite-geometries': {
    boundary: '有限几何的公理和底域必须明确；有限射影平面不等于欧氏平面取有限点。',
    question: '二元域上的射影平面有几个点？',
    answer: '非零三元向量共有 7 个，非零标量只有 1，不再产生不同代表，所以有 7 个射影点。',
  },
  'discrete/combinatorial-designs': {
    boundary: '设计的参数受双重计数约束；参数满足必要等式也未必存在设计。',
    question: '每块含 k 点，每点出现 r 次，v 点 b 块满足什么等式？',
    answer: '统计“点属于块”的关联对得 vr=bk；左边按点计数，右边按块计数。',
  },
  'discrete/time-space': {
    boundary: '渐近复杂度要说明输入编码和规模；多项式于数值大小可能是指数于位数。',
    question: '按 n 次循环处理一个二进制整数 n，是输入位数的多项式时间吗？',
    answer: '一般不是。若输入长 m 位，n 可约为 2 的 m 次方，n 次循环便可能是指数时间。',
  },
  'discrete/p-vs-np': {
    boundary: 'NP 表示多项式时间可验证证据，不表示已证明不能高效求解；P 是否等于 NP 仍未解决。',
    question: '一个判定问题在 P 中，它是否也在 NP 中？',
    answer: '是。可直接运行多项式判定算法，不需要额外证据；所以 P 包含于 NP，反向包含仍未知。',
  },
  'discrete/np-completeness': {
    boundary: '证明 NP 完全需既在 NP，又有已知 NP 难问题归约到它；归约方向不能倒置。',
    question: '把新问题归约到 SAT，就证明新问题 NP 难了吗？',
    answer: '没有，这只给出借助 SAT 解决新问题的方法；证明难度下界通常需把 SAT 等已知难问题归约到新问题。',
  },
  'discrete/approximation-algorithms': {
    boundary: '近似比要说明最小化或最大化方向；启发式好用不等于有最坏情况保证。',
    question: '最小化问题的 2 近似保证什么？',
    answer: '算法输出可行解的目标值至多为最优值两倍，且至少为最优值；通常还要求算法多项式时间。',
  },
  'discrete/greedy-algorithms': {
    boundary: '局部最优未必全局最优；需要交换论证、拟阵结构或其他正确性依据。',
    question: '硬币面额 1、3、4，凑 6 时总取最大面额是否最优？',
    answer: '不是。贪心得 4+1+1 共 3 枚，最优为 3+3 共 2 枚，这是简单反例。',
  },
  'discrete/divide-conquer': {
    boundary: '分治需要可组合的子问题结构；子问题大量重叠时可能重复计算。',
    question: '归并排序为什么常有 n log n 时间复杂度？',
    answer: '每层合并总成本为线性，平衡二分产生约 log n 层；相加得到 n log n，需考虑具体实现与计算模型。',
  },
  'discrete/dynamic-programming': {
    boundary: '状态必须保留影响后续决策的全部信息；错误合并状态会破坏最优子结构。',
    question: '用斐波那契递推展示动态规划的节省。',
    answer: '直接递归重复计算相同下标；缓存每个下标的值，只需线性次转移，保留相邻两项还可将额外空间降为常数。',
  },
  'discrete/randomized-algorithms': {
    boundary: '随机算法可在运行时间或正确率上随机；Las Vegas 与 Monte Carlo 保证不同。',
    question: '结果始终正确但运行时间随机，属于哪类？',
    answer: '属于 Las Vegas 类型；Monte Carlo 算法通常控制时间而允许一定错误概率，不能把概率保证写成绝对正确。',
  },
  'discrete/correctness-proofs': {
    boundary: '循环不变式需初始化、保持和终止三部分；只证明保持不足以保证程序完成。',
    question: '求数组前缀和时，不变式可怎样写？',
    answer: '处理前 i 项后，累加器等于这 i 项之和；初始化 i=0 为零，每轮加下一项保持，终止时得到全部元素之和。',
  },
  'discrete/integer-programming': {
    boundary: '线性松弛可给界，但其解可能非整数；直接四舍五入会破坏约束。',
    question: '约束 2x≤3、x≥0 且为整数，最大化 x 的最优值是多少？',
    answer: '整数最优为 1，线性松弛最优为 1.5；把 1.5 四舍五入为 2 会违反约束。',
  },
  'discrete/network-flows': {
    boundary: '容量限制与流守恒须同时满足；最大流最小割针对标准单源单汇容量网络。',
    question: '只有一条容量 3 的边连接源和汇，最大流是多少？',
    answer: '是 3。该边既给可行流 3，也构成容量 3 的割，上下界相等证得最优。',
  },
  'discrete/shortest-paths': {
    boundary: 'Dijkstra 依赖非负边权；有可达负环时最短游走可能没有有限最小值。',
    question: '存在源可达且能到终点的负环时会怎样？',
    answer: '可反复绕负环降低总权重，使到终点的游走长度趋于负无穷，因此不存在有限最短值。',
  },
  'discrete/reductions': {
    boundary: '归约方向表达“利用后者解决前者”；复杂度归约还须限制转换成本。',
    question: '若 A 多项式归约到 B，且 B 在 P 中，可推出什么？',
    answer: 'A 也在 P 中：先多项式转换，再运行 B 的多项式算法；不能据此推断 B 比 A 更容易。',
  },
  'discrete/polyhedral-methods': {
    boundary: '线性松弛与整数可行域的凸包不总一致；全幺模结论还需整数右端等条件。',
    question: '为何整数规划的凸包描述有价值？',
    answer: '线性目标在整数点凸包上的最优值等于原整数问题最优值；困难往往转移到如何高效描述或分离该凸包。',
  },
  'discrete/combinatorial-optimization': {
    boundary: '离散优化要区分精确、近似与启发式；不同问题的可解性差别很大。',
    question: '最小生成树和旅行商都求短连接，算法难度相同吗？',
    answer: '不同。最小生成树有多项式精确算法；一般旅行商优化是 NP 难问题，环游全部顶点的约束更强。',
  },
  'discrete/symmetric-encryption': {
    boundary: '加密主要保护机密性；完整性与认证还需合适构造，随机数或 nonce 使用条件不可忽略。',
    question: '为什么不能重复使用一次一密的同一密钥？',
    answer: '两份密文异或会抵消密钥，直接暴露两份明文的异或；完美保密依赖密钥随机、等长且仅用一次。',
  },
  'discrete/public-key-cryptography': {
    boundary: '公开密钥不等于所有安全问题已解决；真实性仍需可信绑定，教科书构造不宜直接部署。',
    question: '公钥被攻击者替换后，单纯加密能保证发给正确的人吗？',
    answer: '不能，消息可能加密给攻击者；还需证书、可信指纹等机制确认公钥与接收者的绑定。',
  },
  'discrete/digital-signatures': {
    boundary: '签名提供来源和完整性验证，不对消息内容保密；安全性依赖密钥管理和算法假设。',
    question: '验证签名成功，是否表示消息内容不会被旁观者看到？',
    answer: '不是。签名可附在明文后公开验证；机密性需要额外加密，且签名身份依赖公钥绑定。',
  },
  'discrete/zero-knowledge': {
    boundary: '零知识不是“什么都没证明”；它要求除命题成立外不泄露额外见证信息，并需指定安全定义。',
    question: '交互协议能说服验证者，是否就一定零知识？',
    answer: '不一定，直接发送秘密见证也可使人信服，却泄露全部信息；需另证可模拟性等零知识条件。',
  },
  'discrete/security-reductions': {
    boundary: '安全归约是条件性论证，需考虑归约损失、攻击模型及困难假设；不是绝对不可攻击。',
    question: '若破解方案可用于解困难问题，得到什么安全结论？',
    answer: '在困难问题确实难且归约有效的前提下，方案相应安全；若假设失效或攻击超出模型，结论可能不适用。',
  },
  'discrete/entropy': {
    boundary: '熵依概率分布和对数底数；高熵不等于具体消息有更强语义价值。',
    question: '公平硬币和恒为正面的硬币，二进制熵分别是多少？',
    answer: '分别为 1 比特和 0 比特；一个结果存在不确定性，另一个结果可完全预测。',
  },
  'discrete/error-correcting-codes': {
    boundary: '检错与纠错能力不同；码率、距离及长度之间存在约束，冗余并非无代价。',
    question: '三重复码 000、111 能纠正几位翻转？',
    answer: '最小距离为 3，因此能纠正 1 位翻转；两位翻转可能更接近错误码字，无法保证恢复。',
  },
  'discrete/channel-capacity': {
    boundary: '容量依赖信道及输入约束；可靠传输结论通常是长码和低错误概率的渐近结论。',
    question: '二元对称信道翻转概率为 1/2 时容量是多少？',
    answer: '为零，因为输出与输入独立；不论输入何值，输出都是公平随机位，无法携带可恢复的信息。',
  },
  'discrete/source-coding': {
    boundary: '无损压缩不能让所有可能输入都变短；平均长度优势依赖源分布或冗余。',
    question: '为什么不存在把所有 n 位串无损压成更短串的方法？',
    answer: '少于 n 位的可用不同码串数量不够容纳全部 2 的 n 次方个输入；若允许变长仍必须有部分输入不缩短。',
  },
  'discrete/minimum-distance': {
    boundary: '最小距离为 d 的码可保证纠正至多向下取整的 (d-1)/2 个错误；检错则至多 d-1。',
    question: '最小距离为 5，保证检错和纠错各是多少？',
    answer: '可保证检测 4 位错误，纠正 2 位错误；两种保证来自码字之间距离与纠错球不相交的不同要求。',
  },
  'probability/probability-space': {
    boundary: '样本点、事件和概率测度是不同层次；无限样本空间不总能把全部子集都作为事件。',
    question: '公平六面骰子中，偶数事件的概率是多少？',
    answer: '事件为 {2,4,6}，含三个等可能样本点，概率 3/6=1/2；等可能是假设，不是任意样本空间的默认性质。',
  },
  'probability/random-variables': {
    boundary: '随机变量是样本空间上的可测函数，不是某一个已观测数值；不同变量也可有同样分布。',
    question: '抛两次硬币，正面次数随机变量有哪些值？',
    answer: '取 0、1、2；样本空间有四个等可能序列，但变量把中间两种序列映到相同值 1。',
  },
  'probability/distributions': {
    boundary: '概率密度是密度，不是单点概率；连续变量在单点的概率通常为零。',
    question: '均匀分布在 [0,1]，恰等于 1/2 的概率是多少？',
    answer: '为零；落在 [0.4,0.6] 的概率才是密度积分，等于 0.2。概率零不等于逻辑不可能。',
  },
  'probability/expectation-variance': {
    boundary: '期望需要可积条件；独立时方差可加，一般还需协方差项。',
    question: 'X 恒等于 3，其期望与方差分别是多少？',
    answer: '期望为 3，方差为零，因为相对均值没有任何波动；常数的平方期望不等于方差。',
  },
  'probability/conditional-probability': {
    boundary: '事件条件概率的商式要求条件事件概率正；独立不等于互斥。',
    question: '公平骰子已知是偶数，结果为 6 的概率是多少？',
    answer: '在 {2,4,6} 三种等可能结果中占一种，所以为 1/3；也等于 (1/6)/(1/2)。',
  },
  'probability/stopping-times': {
    boundary: '停时必须能由截至当前的信息判断；依赖未来路径的时刻通常不是停时。',
    question: '“第一次掷出正面”的时刻是停时吗？',
    answer: '是。到第 n 次时只需查看前 n 次结果，就能判断是否已发生；“最后一次正面”通常需要未来信息。',
  },
  'probability/law-large-numbers': {
    boundary: '大数定律约束长期平均，并不使下一次结果补偿过去偏差；经典形式有独立同分布等假设。',
    question: '公平硬币连续十次正面后，下一次正面概率会下降吗？',
    answer: '在独立模型中仍为 1/2。大数定律不产生补偿机制，继续实验只是让初期偏差在平均中的比重下降。',
  },
  'probability/central-limit-theorem': {
    boundary: '经典中心极限定理需有限正方差等条件；结论针对标准化和，不保证任意原始数据近似正态。',
    question: 'n 个独立同分布样本的均值标准差通常如何变化？',
    answer: '若总体方差为有限的 σ²，样本均值标准差为 σ/√n；中心极限定理进一步描述标准化均值的渐近正态形状。',
  },
  'probability/convergence-in-probability': {
    boundary: '依概率收敛不保证每条样本路径收敛，也不单独保证期望收敛。',
    question: '概率 1/n 取值 n、否则为零的 X_n 依概率趋零吗？',
    answer: '是，大于任何固定正阈值的概率最终为 1/n，趋于零；但期望恒为 1，展示期望极限不能直接交换。',
  },
  'probability/almost-sure-convergence': {
    boundary: '几乎必然允许一个概率零的异常集合；要求整条序列在该集合外收敛。',
    question: '几乎必然收敛能推出依概率收敛吗？',
    answer: '能。在概率测度下可对偏差事件指标用有界收敛论证；反过来一般不成立，但可抽取几乎必然收敛子列。',
  },
  'probability/large-deviations': {
    boundary: '大偏差刻画固定尺度罕见事件，中心极限定理刻画平方根尺度波动；两者适用范围不同。',
    question: '大量公平硬币中正面比例超过 0.9，为什么不能只用均值描述？',
    answer: '均值为 0.5 并未给出尾概率；大偏差通过速率函数量化这种远离均值事件的指数级衰减。',
  },
  'probability/markov-chains': {
    boundary: '马尔可夫性质是给定当前后的条件独立；平稳分布存在不保证从任意初值都收敛到它。',
    question: '确定在两个状态间交替的链有平稳分布吗？',
    answer: '有，(1/2,1/2) 平稳；但从一个确定状态出发始终交替，不收敛到平稳分布，原因是周期性。',
  },
  'probability/brownian-motion': {
    boundary: '布朗运动路径连续但几乎必然处处不可导；不能把它当作普通光滑噪声曲线。',
    question: '标准布朗运动从时刻 s 到 t 的增量方差是多少？',
    answer: '当 t≥s 时为 t-s；增量均值为零，且与截至 s 的过去独立，体现时间长度决定波动尺度。',
  },
  'probability/poisson-process': {
    boundary: '齐次泊松过程假设独立平稳增量和固定强度；现实计数不一定满足这些条件。',
    question: '强度 λ 的泊松过程在长度 t 的区间内零次到达的概率是多少？',
    answer: '为 exp(-λt)，来自参数 λt 的泊松分布；同一量也等于首次到达时间超过 t 的概率。',
  },
  'probability/stationary-processes': {
    boundary: '严平稳要求所有有限维分布平移不变；宽平稳只涉及有限二阶矩、均值与协方差。',
    question: 'X_t=Z，其中同一个随机变量 Z 在所有时刻不变，平稳吗？',
    answer: '是，全部有限维分布对时间平移不变；但它通常不遍历，长期时间平均仍是随机的 Z。',
  },
  'probability/martingales': {
    boundary: '鞅是给定信息后的公平性，不要求独立增量；可选停时定理也需可积性等条件。',
    question: '公平随机游走是鞅，为何无限翻倍下注不能保证合法获利？',
    answer: '停时和下注规模可能违反定理的可积或一致可积条件，还需要无限资金；不能把有限受控条件的结论直接外推。',
  },
  'probability/ito-integral': {
    boundary: '伊藤积分的被积过程需适应且满足相应可积条件；不能预知未来再选下注系数。',
    question: '确定常数 c 对布朗运动的伊藤积分是什么？',
    answer: '从 0 到 t 的积分为 cB_t，方差为 c²t；这与伊藤等距中积分 c² 得到的结果一致。',
  },
  'probability/ito-formula': {
    boundary: '伊藤公式包含二阶修正项，来自布朗运动非零二次变差；普通链式法则不能直接套用。',
    question: '对标准布朗运动的平方应用伊藤公式得到什么？',
    answer: 'd(B_t²)=2B_t dB_t+dt；额外 dt 项使其期望为 t，而不是错误的零。',
  },
  'probability/sdes': {
    boundary: '强解与弱解区分给定噪声下的构造和分布层面的存在；解存在不自动保证唯一。',
    question: 'dX=-aXdt、初值 x0，在无噪声情形的解是什么？',
    answer: 'X_t=x0 exp(-at)；加入随机驱动后还需随机积分项，不能只把噪声当作普通可导函数。',
  },
  'probability/diffusion-processes': {
    boundary: '扩散生成算子的二阶系数含 1/2；前向方程还需初边值和足够正则解释。',
    question: '标准布朗运动的生成算子是什么？',
    answer: '对足够光滑测试函数为二阶导数的一半，故其密度满足时间导数等于空间二阶导数的一半的热方程。',
  },
  'probability/point-estimation': {
    boundary: '无偏性与相合性不同；无偏估计量不一定方差小，有限样本有偏也未必不可取。',
    question: '样本均值在独立同分布且均值存在时是否无偏？',
    answer: '是，期望的线性性使均值的期望等于总体均值；其方差大小和相合性还需相应条件分析。',
  },
  'probability/confidence-intervals': {
    boundary: '频率学置信水平描述重复抽样覆盖率；不能直接给固定参数在已实现区间内的后验概率。',
    question: '95% 置信区间的重复实验解释是什么？',
    answer: '按同一方法反复取样构造区间，长期约 95% 的区间覆盖真实参数；单次区间已经确定，参数在该框架下也固定。',
  },
  'probability/hypothesis-testing': {
    boundary: 'p 值是在原假设下观测到至少同样极端数据的概率；不是原假设为真的概率。',
    question: 'p=0.03 是否表示原假设只有 3% 概率为真？',
    answer: '不是。它是以原假设和检验模型成立为条件的数据尾概率；比较假设概率需要额外先验及模型。',
  },
  'probability/likelihood': {
    boundary: '似然把数据固定、参数视为变量；通常不要求对参数积分为 1。',
    question: '抛三次硬币观测两次正面，一次反面，似然如何写？',
    answer: '若保留序列，正比于 p²(1-p)，最大值在 p=2/3；若只记录次数，多一个与 p 无关的组合系数，不改最大点。',
  },
  'probability/experimental-design': {
    boundary: '随机化改善可比性，但不能自动修复失访、不依从或测量偏差；需明确估计目标。',
    question: '为什么随机分组有助于识别处理效应？',
    answer: '分配机制使处理与基线混杂在概率上分离；有限样本仍可不平衡，需按设计估计并报告不确定性。',
  },
  'probability/identification-conditions': {
    boundary: '识别关心理想总体分布能否唯一确定目标；估计关心有限样本如何计算。',
    question: '只有观察数据，两个因果模型给相同分布却不同干预效应，说明什么？',
    answer: '效应未被这些数据和假设识别；增加样本也无法区分，需要额外设计、变量或可辩护假设。',
  },
  'probability/prior-distribution': {
    boundary: '先验需结合参数化和背景解释；所谓无信息先验通常不是所有变换下都无信息。',
    question: '均匀的 p 先验变换成 logit(p) 后仍均匀吗？',
    answer: '不是，变量变换带来雅可比因子；“均匀”取决于使用什么坐标，不能自动等同于客观无信息。',
  },
  'probability/posterior-distribution': {
    boundary: '后验依赖先验与似然模型；归一化常数必须有限，才能得到合法概率分布。',
    question: 'Beta(1,1) 先验观测一次正面后后验是什么？',
    answer: '为 Beta(2,1)，因为似然乘 p，使 p 的幂增加 1；后验均值为 2/3，而非直接认定正面概率为 1。',
  },
  'probability/conjugate-priors': {
    boundary: '共轭保证更新形式便利，不保证先验一定适合问题；参数需说明采用哪种约定。',
    question: 'Beta(a,b) 先验，观测 s 次成功、f 次失败，后验是什么？',
    answer: '为 Beta(a+s,b+f)；成功与失败分别更新对应形状参数，可把 a、b 理解为先验信息强度的部分表示。',
  },
  'probability/posterior-predictive': {
    boundary: '后验预测对参数不确定性积分；把参数替换为单个估计值通常会低估部分不确定性。',
    question: '硬币参数后验为 Beta(2,1)，下一次正面预测概率是多少？',
    answer: '等于后验中的 p 均值，为 2/3；多次未来观测还会因共享未知参数而具有预测依赖。',
  },
  'probability/hierarchical-models': {
    boundary: '部分汇聚介于完全合并和完全独立之间；收缩强度由层级结构与数据共同决定。',
    question: '小样本组的估计为什么常被拉向总体均值？',
    answer: '该组数据不足以确定参数时，共享层级信息占比更高；大样本组通常更多由自身数据决定。',
  },
  'probability/regression-classification': {
    boundary: '回归预测数值，分类预测标签或类别概率；评价指标需与任务和代价匹配。',
    question: '只有 1% 阳性的任务，全预测阴性有 99% 准确率，模型好吗？',
    answer: '未必，它漏掉全部阳性；应结合召回率、精确率、概率校准和错误代价评价。',
  },
  'probability/regularization': {
    boundary: '正则化参数只能在训练流程内部选择；用测试集调参会让最终评价偏乐观。',
    question: 'L1 与 L2 惩罚对参数的典型影响有什么不同？',
    answer: 'L1 常产生精确零系数，利于稀疏化；L2 通常连续收缩参数而不直接置零，具体结果还依设计矩阵和优化设置。',
  },
  'probability/bias-variance': {
    boundary: '经典平方损失分解需指定训练集随机性和噪声假设；不是所有损失都可原样分解。',
    question: '模型越复杂，测试误差一定越低吗？',
    answer: '不一定。复杂度降低部分逼近偏差的同时可能增加估计波动，应以独立验证评估总误差。',
  },
  'probability/loss-risk': {
    boundary: '经验风险是有限样本平均，真实风险是目标分布期望；训练风险低不自动代表泛化好。',
    question: '恒记住训练标签的模型，训练误差为零能说明什么？',
    answer: '只能说明拟合了训练集；在新数据上可能失效，需用代表目标分布的独立样本评价。',
  },
  'probability/training-validation': {
    boundary: '预处理、特征选择和调参也需限制在训练折内；否则可能发生数据泄漏。',
    question: '为什么不能先对全数据选特征，再做交叉验证？',
    answer: '验证折的标签已经影响特征选择，验证不再独立；应在每个训练折内重做选择，再应用到对应验证折。',
  },
  'probability/interventions-effects': {
    boundary: '观察条件分布与干预分布一般不同；因果效应必须写明干预和目标人群。',
    question: '观察到吃药的人病得更重，能说明药有害吗？',
    answer: '不能，病情较重者可能更常吃药，形成适应症混杂；需要随机设计或充分调整等识别策略。',
  },
  'probability/confounding': {
    boundary: '混杂是共同原因造成的关联偏差；不能把所有相关变量都无区别纳入调整。',
    question: '冰淇淋销量与溺水事件正相关，常见共同原因是什么？',
    answer: '气温或季节同时影响游泳活动和冰淇淋购买；仅观察相关性不能推断购买冰淇淋造成溺水。',
  },
  'probability/potential-outcomes': {
    boundary: '同一对象通常只能观测一种处理结果，另一个为反事实；识别需跨对象比较假设。',
    question: '个体因果效应为何不能直接由一次观察计算？',
    answer: '效应需要处理与不处理的两个潜在结果之差，但一次观察只揭示其中一个；这是因果推断的基本缺失问题。',
  },
  'probability/causal-graphs': {
    boundary: '因果图的方向体现假设，不能只靠相关矩阵自动确认；调整碰撞点可能引入偏差。',
    question: 'A→C←B 中，在 C 上条件化可能产生什么？',
    answer: '即使 A、B 原先独立，给定共同结果 C 后也可能相关，称碰撞点偏差；因此并非控制变量越多越好。',
  },
};
