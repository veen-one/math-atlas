/* 逐条编写的证明及其闭合依赖。生成自 scripts/build-proofs.py。 */
window.ATLAS.proofBook = {
  "bases": {
    "axiom-real": {
      "title": "实数有序域与上确界公理",
      "statement": "使用实数的有序域公理、非负数平方根的基本定义、有限和代数运算及非空有上界实数集具有上确界。上下极限与 ε 定义按通常定义使用。"
    },
    "axiom-natural": {
      "title": "自然数归纳与良序基础",
      "statement": "使用自然数归纳原则（含其等价的良序原则）、整数的环运算及有限递归。自然数在实数中无界不在此假定，另见 Archimedes 性质的证明。"
    },
    "axiom-set": {
      "title": "集合论基本构造",
      "statement": "使用外延、配对、分离及幂集等基本集合构造；不在本卷重新证明作为基础公理的这些原则。"
    },
    "axiom-metric": {
      "title": "度量、范数与收敛的定义",
      "statement": "使用度量的非负、正定、对称、三角不等式，以及开球拓扑、连续性与 ε 收敛定义。赋范空间另使用范数齐次和三角公理。紧致的含义为开覆盖有有限子覆盖。"
    },
    "axiom-topology": {
      "title": "拓扑空间的定义",
      "statement": "使用开集对任意并、有限交封闭，子空间拓扑、连续映射的开集原像定义，以及紧致、连通的定义。"
    },
    "axiom-riemann": {
      "title": "Darboux 积分的定义",
      "statement": "有界实函数的下积分定义为所有分割下和的上确界，上积分定义为所有上和的下确界；相等称可积。本卷的积分估计、线性性和区间可加性均直接从上下和证明，不预设带标记黎曼和与该定义的等价定理。"
    },
    "axiom-measure": {
      "title": "σ 代数与测度公理",
      "statement": "使用可测集对补与可数并封闭、测度非负、空集测度为零及两两不交可数并的可数可加性；概率测度另满足全集测度为一。"
    },
    "axiom-lebesgue": {
      "title": "非负及有符号积分的定义",
      "statement": "非负简单函数积分为系数乘分块测度之和，0·∞=0；非负可测函数积分是所有下方非负简单函数积分的上确界。绝对可积实函数的积分为正部积分减负部积分。有限共同细分给出简单函数表示无关性；非负积分单调性直接来自取上确界。"
    },
    "axiom-logic": {
      "title": "经典二值逻辑的语义",
      "statement": "命题真值取真或假，按通常真值表解释联结词，按论域中所有元素或某个元素解释全称或存在量词。"
    },
    "axiom-computation": {
      "title": "程序与复杂度的定义",
      "statement": "使用图灵可计算程序的有限编码、通用模拟及顺序、分支、循环的可实现性；P 和 NP 分别按多项式确定性判定与多项式证据验证定义。"
    },
    "axiom-group": {
      "title": "群与群作用的公理",
      "statement": "使用群乘法的结合律、单位元和逆元公理；群作用满足单位元作用恒等与乘法作用相容；群同态按保持乘法定义。"
    },
    "axiom-finite": {
      "title": "有限计数与图的定义",
      "statement": "使用有限集合不交并的加法、笛卡尔积的乘法计数，以及有限简单无向图、路径、环、树、码字和 Hamming 距离的定义。"
    },
    "axiom-vector": {
      "title": "向量空间及凸性定义",
      "statement": "使用标量域、向量空间的加法与数乘公理，以及有限线性组合、线性无关、生成、基、线性映射、凸集和凸函数的定义。"
    },
    "axiom-inner": {
      "title": "实内积公理",
      "statement": "使用内积的实双线性、对称和正定公理，范数定义为向量与自身内积的非负平方根。"
    },
    "axiom-independence": {
      "title": "随机变量独立性的定义",
      "statement": "随机变量的独立性按任意 Borel 原像事件的联合概率等于概率乘积定义；本卷证明需要的期望乘法，不把它当作独立性定义。"
    },
    "def-ring-field": {
      "title": "环、域与多项式的定义",
      "statement": "使用含单位交换环、理想、商环、整环、域、域扩张、形式多项式、次数、形式导数及代数元素最小多项式的定义。最小多项式的存在与不可约性在正文证明，不作为额外定理假设。"
    },
    "def-complex": {
      "title": "复数、共轭与 Hermitian 内积的定义",
      "statement": "复数定义为实数对，按通常规则加乘并取共轭。有限维复向量空间使用标准 Hermitian 内积；本卷约定对第一变量线性。矩阵伴随是共轭转置，Hermitian 指 A*=A，正规指 A*A=AA*。"
    },
    "def-complete": {
      "title": "完备、算子与微分方程的定义",
      "statement": "完备度量空间指每个柯西列在空间内收敛。巴拿赫空间为完备赋范空间，有界算子指存在统一线性范数界。向量积分按各实坐标的黎曼积分定义，向量微分按坐标定义。"
    },
    "def-contour": {
      "title": "复可导与曲线积分的定义",
      "statement": "复导数按复增量差商极限定义。分段 C¹ 参数曲线 γ 上，∫f(z)dz 定义为 ∫f(γ(t))γ′(t)dt，实部与虚部分别积分。正向多边形边界按逆时针取向。此章可用 π=4∫₀¹(1+t²)⁻¹dt 表示所需常数，因此计算绕行积分不预设三角函数参数化。"
    },
    "def-conditional": {
      "title": "信息流、条件期望和停时的定义",
      "statement": "信息流是递增 σ 代数列。条件期望 Z=E[X|G] 指 G 可测且对每个 A∈G 有 ∫_A Z=∫_A X 的可积变量，按几乎处处相等识别。停时 T 满足 {T≤n}∈F_n。鞅 M_n 适应且可积，并满足 E[(M_n-M_(n-1))1_A]=0 对所有 A∈F_(n-1)。本卷在 L² 情形证明条件期望存在。"
    },
    "axiom-dependent-choice": {
      "title": "依赖选择的基础约定",
      "statement": "允许从非空初始集合出发，在每一步总有下一候选时递归作可数次相依选择。这是常用 ZFC 基础中可用的选择原则，不被当作已经证明的数学定理。"
    },
    "def-chain": {
      "title": "链复形、链映射与模的定义",
      "statement": "使用环上的模、模同态与商模的定义。链复形的微分 d_n:C_n→C_(n-1) 满足 d_(n-1)d_n=0；链映射与微分交换；H_n(C)=ker d_n/im d_(n+1)。短正合列在每个次数上要求单射、像等于核、满射。"
    },
    "def-category": {
      "title": "范畴、函子与泛性质的定义",
      "statement": "范畴有对象、态射、结合的复合与恒等态射；函子保持复合和恒等；自然变换逐对象给态射且满足自然性方块。积或其他泛对象按相应唯一分解性质定义。"
    }
  },
  "proofs": [
    {
      "id": "monotone-convergence",
      "topics": [
        "analysis/completeness-reals"
      ],
      "title": "单调有界数列收敛定理",
      "statement": "设实数列 $(a_n)$ 单调递增且有上界，则存在 $L\\in\\mathbb R$ 使 $a_n\\to L$，且 $L=\\sup\\{a_n:n\\ge1\\}$。递减有下界的情形对称成立。",
      "dependencies": [
        "axiom-real"
      ],
      "idea": "把上确界当作候选极限，再用“再小一点就不是上界”产生逼近。",
      "steps": [
        "集合 $A=\\{a_n:n\\ge1\\}$ 非空且有上界，由实数上确界公理存在 $L=\\sup A$。于是所有 $n$ 均有 $a_n\\le L$。",
        "任取 $\\varepsilon>0$。$L-\\varepsilon$ 不是 $A$ 的上界，否则与 $L$ 是最小上界矛盾。因此存在 $N$ 使 $a_N>L-\\varepsilon$。",
        "当 $n\\ge N$，单调性给出 $L-\\varepsilon<a_N\\le a_n\\le L$，即 $|a_n-L|<\\varepsilon$。这正是收敛定义。递减情形对 $-a_n$ 应用已证结论。$\\square$"
      ]
    },
    {
      "id": "nested-intervals",
      "topics": [
        "analysis/completeness-reals"
      ],
      "title": "闭区间套定理",
      "statement": "非空闭区间 $I_n=[a_n,b_n]$ 满足 $I_{n+1}\\subseteq I_n$，则交集非空；若 $b_n-a_n\\to0$，交集恰有一点。",
      "dependencies": [
        "axiom-real"
      ],
      "idea": "取所有左端点的上确界，并检查它没有越过任一右端点。",
      "steps": [
        "嵌套性给出 $a_n$ 递增且 $a_n\\le b_1$。令 $x=\\sup\\{a_n:n\\ge1\\}$。固定 $n$，对 $m\\ge n$ 有 $a_m\\le b_m\\le b_n$；对 $m<n$ 则 $a_m\\le a_n\\le b_n$，所以 $b_n$ 是全体左端点的上界。",
        "因此 $a_n\\le x\\le b_n$ 对每个 $n$ 成立，$x$ 属于所有 $I_n$。若 $x,y$ 都在交集中，则 $|x-y|\\le b_n-a_n$ 对每个 $n$ 成立。",
        "若区间长度趋零而 $x\\ne y$，取 $\\varepsilon=|x-y|/2$，充分大 $n$ 时会有 $|x-y|<|x-y|/2$，矛盾。因此交集只有一点。$\\square$"
      ]
    },
    {
      "id": "bolzano-weierstrass",
      "topics": [
        "analysis/completeness-reals"
      ],
      "title": "实有界数列的收敛子列定理",
      "statement": "每个有界实数列都有收敛子列。",
      "dependencies": [
        "nested-intervals",
        "archimedean"
      ],
      "idea": "二分区间，每次保留含有无穷多个序列项的一半。",
      "steps": [
        "把所有序列项放入一个闭区间 $I_1=[a,b]$。将区间二等分；至少一半含无穷多个序列下标对应的项，否则两半合起来只有有限项。保留这一半作为 $I_2$，不断重复。",
        "得到嵌套闭区间 $I_k$，长度为 $(b-a)/2^{k-1}$。由闭区间套定理，它们恰有一个公共点 $x$。递归选下标 $n_k>n_{k-1}$，使 $a_{n_k}\\in I_k$；每层有无穷多下标，故总能选到。",
        "因 $x,a_{n_k}\\in I_k$，有 $|a_{n_k}-x|\\le(b-a)/2^{k-1}\\to0$。因此所选子列收敛到 $x$。$\\square$"
      ]
    },
    {
      "id": "cauchy-completeness",
      "topics": [
        "analysis/completeness-reals"
      ],
      "title": "实数的柯西完备性",
      "statement": "实数列收敛，当且仅当它是柯西列。",
      "dependencies": [
        "bolzano-weierstrass"
      ],
      "idea": "收敛列由三角不等式成为柯西列；反向先取收敛子列再控制整列。",
      "steps": [
        "若 $a_n\\to L$，给定 $\\varepsilon>0$，充分大 $m,n$ 时都有 $|a_m-L|,|a_n-L|<\\varepsilon/2$，所以 $|a_n-a_m|<\\varepsilon$。",
        "反之设 $(a_n)$ 柯西。取阈值 1，尾部所有项到某一固定尾项的距离小于 1，前面有限项也有共同界，故全列有界。由有界子列定理，有 $a_{n_k}\\to L$。",
        "任取 $\\varepsilon>0$，先选 $N$ 使 $m,n\\ge N$ 时 $|a_n-a_m|<\\varepsilon/2$；再选 $k$ 使 $n_k\\ge N$ 且 $|a_{n_k}-L|<\\varepsilon/2$。对任意 $n\\ge N$，三角不等式给出 $|a_n-L|<\\varepsilon$，故整列收敛。$\\square$"
      ]
    },
    {
      "id": "limit-unique",
      "topics": [
        "analysis/limits"
      ],
      "title": "极限唯一性",
      "statement": "在度量空间 $(X,d)$ 中，若 $x_n\\to a$ 且 $x_n\\to b$，则 $a=b$。",
      "dependencies": [
        "axiom-metric"
      ],
      "idea": "假设两极限之间有正距离，分别逼近到其三分之一就产生矛盾。",
      "steps": [
        "假设 $a\\ne b$，由度量的正定性 $r=d(a,b)>0$。令 $\\varepsilon=r/3$。分别由两个收敛条件选 $N_1,N_2$，使尾部到各自极限距离都小于 $r/3$。",
        "取 $n\\ge\\max(N_1,N_2)$。三角不等式给出 $r=d(a,b)\\le d(a,x_n)+d(x_n,b)<2r/3$，与 $r>0$ 矛盾。故 $a=b$。$\\square$"
      ]
    },
    {
      "id": "compact-interval",
      "topics": [
        "geometry/compactness",
        "analysis/continuity-uniform"
      ],
      "title": "闭区间的有限子覆盖性质",
      "statement": "闭有界区间 $[a,b]\\subset\\mathbb R$ 的任意开覆盖都有有限子覆盖。",
      "dependencies": [
        "nested-intervals",
        "archimedean"
      ],
      "idea": "反设不能有限覆盖，二分后保留仍不能有限覆盖的半区间。",
      "steps": [
        "当 $a=b$，任取一个包含该点的覆盖成员即可。以下设 $a<b$。若原覆盖没有有限子覆盖，将区间二分。至少一半不能被原覆盖的有限成员覆盖，否则两半的有限覆盖合并就覆盖全区间。",
        "不断二分并保留不具有限子覆盖的闭半区间，得长度趋零的闭区间套。令唯一公共点为 $x$。覆盖中某个开集 $U$ 含 $x$；开性给出 $r>0$ 使 $(x-r,x+r)\\subseteq U$。",
        "取长度小于 $r$ 的某个区间 $I_n$。因 $x\\in I_n$，其中每点到 $x$ 距离小于 $r$，故 $I_n\\subseteq U$。一个覆盖成员就已覆盖 $I_n$，与构造矛盾。$\\square$"
      ]
    },
    {
      "id": "heine-cantor",
      "topics": [
        "analysis/continuity-uniform"
      ],
      "title": "Heine–Cantor 定理（紧致度量空间版）",
      "statement": "若度量空间 $K$ 紧致，$f:K\\to Y$ 连续，且 $Y$ 也是度量空间，则 $f$ 一致连续。这里紧致指每个开覆盖有有限子覆盖。",
      "dependencies": [
        "axiom-metric"
      ],
      "idea": "将每点局部连续半径减半，用有限子覆盖取共同阈值。",
      "steps": [
        "给定 $\\varepsilon>0$。对每个 $x\\in K$，由连续性选 $r_x>0$，使 $z\\in K$ 且 $d(z,x)<r_x$ 时有 $d_Y(f(z),f(x))<\\varepsilon/2$。空空间情形结论真，以下设 $K$ 非空。",
        "相对开球 $B(x,r_x/2)\\cap K$ 覆盖 $K$。由紧致性选有限子覆盖，中心为 $x_1,\\dots,x_m$。令 $\\delta=\\min_i r_{x_i}/2>0$。",
        "若 $u,v\\in K$ 且 $d(u,v)<\\delta$，选一个覆盖球含 $u$，则 $d(u,x_i)<r_{x_i}/2$，且 $d(v,x_i)\\le d(v,u)+d(u,x_i)<r_{x_i}$。",
        "因此两函数值到 $f(x_i)$ 的距离都小于 $\\varepsilon/2$，再用三角不等式得 $d_Y(f(u),f(v))<\\varepsilon$。$\\delta$ 不依赖 $u,v$，故为一致连续。$\\square$"
      ]
    },
    {
      "id": "uniform-continuous-limit",
      "topics": [
        "analysis/uniform-convergence",
        "analysis/function-sequences"
      ],
      "title": "连续函数的一致极限连续",
      "statement": "设 $f_n:E\\to\\mathbb R$ 在度量空间 $E$ 上连续，并一致收敛到 $f$，则 $f$ 连续。",
      "dependencies": [
        "axiom-metric"
      ],
      "idea": "先固定一个全域逼近误差小的函数，再调用该函数在目标点的连续性。",
      "steps": [
        "固定任意 $x_0\\in E$ 与 $\\varepsilon>0$。一致收敛给出下标 $N$，使所有 $x\\in E$ 都有 $|f_N(x)-f(x)|<\\varepsilon/3$；这里是选定一个函数 $f_N$，而非让下标随位置变化。",
        "由 $f_N$ 在 $x_0$ 连续，存在 $\\delta>0$，使 $d(x,x_0)<\\delta$ 时 $|f_N(x)-f_N(x_0)|<\\varepsilon/3$。",
        "此时 $|f(x)-f(x_0)|\\le |f(x)-f_N(x)|+|f_N(x)-f_N(x_0)|+|f_N(x_0)-f(x_0)|<\\varepsilon$。故 $f$ 在任意 $x_0$ 连续。$\\square$"
      ]
    },
    {
      "id": "dini",
      "topics": [
        "analysis/uniform-convergence"
      ],
      "title": "Dini 定理",
      "statement": "设 $K$ 是紧致空间，连续实值函数列 $f_n$ 在每个点单调递增并逐点收敛到连续函数 $f$，则收敛一致；递减情形同理。",
      "dependencies": [
        "axiom-topology"
      ],
      "idea": "小误差点集随下标递增，紧致性把逐点最终进入变成全体同时进入。",
      "steps": [
        "由单调收敛，$g_n=f-f_n\\ge0$，且 $g_n$ 连续、逐点递减到零。给定 $\\varepsilon>0$，令 $U_n=\\{x\\in K:g_n(x)<\\varepsilon\\}$。连续性保证 $U_n$ 开，递减性保证 $U_n\\subseteq U_{n+1}$。",
        "逐点收敛说明每个 $x$ 属于某个 $U_n$，故这些开集覆盖 $K$。紧致性给出有限子覆盖；取出现下标的最大值 $N$，由单调包含便有 $U_N=K$。",
        "于是任意 $n\\ge N$、$x\\in K$ 都有 $0\\le f(x)-f_n(x)=g_n(x)\\le g_N(x)<\\varepsilon$，这就是一致收敛。递减情形把 $f_n,f$ 同时取负。$\\square$"
      ]
    },
    {
      "id": "series-cauchy",
      "topics": [
        "analysis/series"
      ],
      "title": "级数的柯西判别法",
      "statement": "实数级数 $\\sum_{n=1}^{\\infty}a_n$ 收敛，当且仅当对每个 $\\varepsilon>0$，存在 $N$，使 $q\\ge p\\ge N$ 时有 $|\\sum_{n=p}^{q}a_n|<\\varepsilon$。",
      "dependencies": [
        "cauchy-completeness"
      ],
      "idea": "级数收敛就是部分和数列收敛，尾和就是两部分和之差。",
      "steps": [
        "令 $S_0=0$、$S_n=\\sum_{k=1}^n a_k$。若 $S_n$ 收敛，则它是柯西列。取柯西阈值下标 $M$，令 $N=M+1$；当 $q\\ge p\\ge N$ 时，$p-1,q\\ge M$，故 $|\\sum_{k=p}^q a_k|=|S_q-S_{p-1}|<\\varepsilon$。",
        "反向若尾和条件成立，对充分大 $m>n$，有 $|S_m-S_n|=|\\sum_{k=n+1}^{m}a_k|<\\varepsilon$；交换下标或相等时也成立。所以 $(S_n)$ 柯西，实数柯西完备性给出其收敛，即原级数收敛。$\\square$"
      ]
    },
    {
      "id": "absolute-convergence",
      "topics": [
        "analysis/series"
      ],
      "title": "绝对收敛蕴含收敛",
      "statement": "若实数级数 $\\sum |a_n|$ 收敛，则 $\\sum a_n$ 收敛。",
      "dependencies": [
        "series-cauchy"
      ],
      "idea": "用绝对值级数的尾和统一控制原级数的尾和。",
      "steps": [
        "任取 $\\varepsilon>0$。对收敛级数 $\\sum|a_n|$ 应用柯西判别法，得 $N$，使 $q\\ge p\\ge N$ 时 $\\sum_{n=p}^q |a_n|<\\varepsilon$。",
        "有限和三角不等式给出 $|\\sum_{n=p}^{q}a_n|\\le\\sum_{n=p}^{q}|a_n|<\\varepsilon$。再次应用柯西判别法，原级数收敛。反向不成立，例如交错调和级数，后者需另行证明其收敛而绝对值级数发散。$\\square$"
      ]
    },
    {
      "id": "weierstrass-m",
      "topics": [
        "analysis/uniform-convergence",
        "analysis/function-sequences"
      ],
      "title": "Weierstrass M 判别法",
      "statement": "设 $f_n:E\\to\\mathbb R$，且对所有 $x\\in E$ 有 $|f_n(x)|\\le M_n$，其中 $M_n\\ge0$、$\\sum M_n$ 收敛，则函数级数 $\\sum f_n$ 一致收敛。",
      "dependencies": [
        "series-cauchy",
        "cauchy-completeness"
      ],
      "idea": "数值尾和与位置无关，因此同时控制每个点及整个定义域的误差。",
      "steps": [
        "固定 $x$。任意尾和满足 $|\\sum_{n=p}^qf_n(x)|\\le\\sum_{n=p}^q M_n$，右侧由数值级数的柯西判别法趋零，故左侧满足柯西条件。因此每个点的部分和在实数中收敛，定义其极限为 $F(x)$。",
        "给定 $\\varepsilon>0$，选 $N$ 使 $q\\ge p\\ge N$ 时 $\\sum_{n=p}^qM_n<\\varepsilon/2$。对 $m\\ge n\\ge N$，得到 $|S_m(x)-S_n(x)|\\le\\varepsilon/2$，且这个界对所有 $x$ 同时成立。",
        "固定 $n,x$ 让 $m\\to\\infty$，实数极限保持非严格不等式，得 $|F(x)-S_n(x)|\\le\\varepsilon/2<\\varepsilon$。同一个 $N$ 适用全体 $x$，故收敛一致。$\\square$"
      ]
    },
    {
      "id": "derivative-continuity",
      "topics": [
        "analysis/derivatives"
      ],
      "title": "可导蕴含连续",
      "statement": "若实函数 $f$ 在定义域内点 $a$ 可导，则在 $a$ 连续。",
      "dependencies": [
        "axiom-real"
      ],
      "idea": "把函数增量写成差商乘自变量增量，再显式控制有界差商。",
      "steps": [
        "导数存在，故差商 $Q(h)=(f(a+h)-f(a))/h$ 在 $h\\to0$ 时趋于有限数 $f\\prime(a)$。取 $\\eta>0$ 使 $0<|h|<\\eta$ 时 $|Q(h)-f\\prime(a)|<1$，从而 $|Q(h)|\\le |f\\prime(a)|+1=:C$，其中 $C>0$。",
        "给定 $\\varepsilon>0$，令 $\\delta=\\min(\\eta,\\varepsilon/C)$。若 $0<|h|<\\delta$，则 $|f(a+h)-f(a)|=|hQ(h)|\\le C|h|<\\varepsilon$；$h=0$ 时也满足。因此连续。$\\square$"
      ]
    },
    {
      "id": "chain-rule",
      "topics": [
        "analysis/derivatives"
      ],
      "title": "一元函数链式法则",
      "statement": "若 $f$ 在 $a$ 可导，$g$ 在 $b=f(a)$ 可导，则 $g\\circ f$ 在 $a$ 可导，导数为 $g\\prime(b)f\\prime(a)$。",
      "dependencies": [
        "derivative-continuity"
      ],
      "idea": "用带余项的线性逼近，避免当内函数增量为零时非法除法。",
      "steps": [
        "由可导定义，$f(a+h)-b=Ah+r(h)h$，其中 $A=f\\prime(a)$、$r(h)\\to0$。同理对 $k\\ne0$ 令 $s(k)=[g(b+k)-g(b)]/k-B$，$B=g\\prime(b)$，并定义 $s(0)=0$；则 $s(k)\\to0$ 且对全部小 $k$ 有 $g(b+k)-g(b)=(B+s(k))k$。",
        "因 $f$ 可导从而连续，$k(h)=f(a+h)-b\\to0$。代入上式，复合函数差商等于 $(B+s(k(h)))(A+r(h))$，包括 $k(h)=0$ 的情况也成立。",
        "两余项都趋零，差商极限为 $BA$。这一论证无需假设 $f(a+h)\\ne f(a)$，所以覆盖内函数局部常值等情形。$\\square$"
      ]
    },
    {
      "id": "supremum-integral",
      "topics": [
        "analysis/integration-calculus"
      ],
      "title": "黎曼积分的基本估计",
      "statement": "设有界函数 $h$ 在 $[a,b]$ 黎曼可积，$a<b$，且 $|h(x)|\\le M$，则 $|\\int_a^b h(x)\\,dx|\\le M(b-a)$。",
      "dependencies": [
        "axiom-riemann"
      ],
      "idea": "直接夹住所有上下和，再按 Darboux 积分的定义取界。",
      "steps": [
        "对任意分割，每个小区间上都有 $-M\\le\\inf h\\le\\sup h\\le M$；乘以非负长度再相加，得 $-M(b-a)\\le L(h,P)\\le U(h,P)\\le M(b-a)$。",
        "下积分是下和的上确界，上积分是上和的下确界，故二者都在该闭区间内。可积时它们的共同值就是积分，因此积分绝对值至多 $M(b-a)$。$\\square$"
      ]
    },
    {
      "id": "continuous-riemann",
      "topics": [
        "analysis/integration-calculus"
      ],
      "title": "闭区间连续函数黎曼可积",
      "statement": "连续实函数 $f:[a,b]\\to\\mathbb R$ 有界且黎曼可积。",
      "dependencies": [
        "compact-interval",
        "heine-cantor",
        "axiom-riemann"
      ],
      "idea": "有限局部界先给整体有界，再用一致连续性使上下和间隙任意小。",
      "steps": [
        "每点连续性给相对邻域，使邻域内 $|f(y)-f(x)|<1$。由闭区间紧致选有限子覆盖，故 $|f|$ 被有限多个 $|f(x_i)|+1$ 的最大值控制；因此上下和均有定义。$a=b$ 时积分为零，以下设 $a<b$。",
        "由 Heine–Cantor，给定 $\\varepsilon>0$，有 $\\delta>0$，使两点距离小于 $\\delta$ 时函数值差小于 $\\varepsilon/[2(b-a)]$。取网格小于 $\\delta$ 的分割，每小区间的上确界与下确界之差至多这个数。",
        "上和减下和因此至多 $\\varepsilon/2$。按 Darboux 定义，下积分是所有下和的上确界，上积分是所有上和的下确界；它们之差非负且小于任意 $\\varepsilon$，故相等，函数可积。$\\square$"
      ]
    },
    {
      "id": "uniform-integration",
      "topics": [
        "analysis/integration-limits",
        "analysis/uniform-convergence"
      ],
      "title": "一致收敛与黎曼积分交换",
      "statement": "若 $f_n$ 在有限闭区间 $[a,b]$ 黎曼可积且一致收敛到 $f$，则 $f$ 可积，并且 $\\int_a^b f_n\\to\\int_a^b f$。",
      "dependencies": [
        "supremum-integral",
        "axiom-riemann",
        "riemann-linearity"
      ],
      "idea": "先证明极限可积，再证明积分误差趋零，不能预先假定极限已有积分。",
      "steps": [
        "设 $a<b$。由一致收敛选一个 $f_N$，使 $|f-f_N|\\le1$，从而 $f$ 有界。给定 $\\varepsilon>0$，重新选 $N$ 使 $\\|f-f_N\\|_\\infty<\\varepsilon/[4(b-a)]$。",
        "由 $f_N$ 可积，存在分割 $P$ 使其上和与下和之差小于 $\\varepsilon/2$。每个小区间上，$f$ 的振幅至多是 $f_N$ 的振幅加 $2\\|f-f_N\\|_\\infty$，故 $U(f,P)-L(f,P)<\\varepsilon$。由 Darboux 定义可知 $f$ 可积。",
        "由已证 Darboux 积分线性性，故差函数也可积。用积分估计得 $|\\int f_n-\\int f|\\le(b-a)\\|f_n-f\\|_\\infty\\to0$。零长度区间的结论直接成立。$\\square$"
      ]
    },
    {
      "id": "ftc-first",
      "topics": [
        "analysis/fundamental-theorem-calculus"
      ],
      "title": "微积分第一基本定理",
      "statement": "设 $f$ 在 $[a,b]$ 连续，$F(x)=\\int_a^x f(t)\\,dt$，则对 $x\\in(a,b)$ 有 $F\\prime(x)=f(x)$。",
      "dependencies": [
        "continuous-riemann",
        "supremum-integral",
        "riemann-additivity",
        "riemann-linearity"
      ],
      "idea": "差商是短区间上的平均值，连续性把整个短区间函数值拉近目标值。",
      "steps": [
        "连续可积性保证 $F$ 定义良好。由已证积分区间可加性，因此对正负小 $h$ 均有 $F(x+h)-F(x)=\\int_x^{x+h} f(t)\\,dt$，负方向按积分换向定义。",
        "把常值 $f(x)$ 的积分减去，得到 $[F(x+h)-F(x)]/h-f(x)=(1/h)\\int_x^{x+h}[f(t)-f(x)]\\,dt$。",
        "给定 $\\varepsilon>0$，连续性给出 $\\delta>0$，使 $|t-x|<\\delta$ 时 $|f(t)-f(x)|<\\varepsilon$。若 $0<|h|<\\delta$ 且两端在定义域内，积分估计给出上述差值绝对值至多 $\\varepsilon$。故差商趋于 $f(x)$。$\\square$"
      ]
    },
    {
      "id": "rolle",
      "topics": [
        "analysis/derivatives"
      ],
      "title": "Rolle 定理",
      "statement": "设 $f$ 在 $[a,b]$ 连续，在 $(a,b)$ 可导，$a<b$ 且 $f(a)=f(b)$，则存在 $c\\in(a,b)$ 使 $f\\prime(c)=0$。",
      "dependencies": [
        "bolzano-weierstrass",
        "derivative-continuity"
      ],
      "idea": "先证明极值存在；非常值时至少一个极值在内部，再用左右差商夹住导数。",
      "steps": [
        "先说明连续函数在闭区间取最大最小值。若无界，可选 $x_n$ 使 $|f(x_n)|>n$；有界子列定理给出 $x_{n_k}\\to x\\in[a,b]$，连续性却使函数值收敛到有限的 $f(x)$，矛盾。因此有界。令 $M=\\sup f([a,b])$，选 $x_n$ 使 $f(x_n)>M-1/n$；取收敛子列并用连续性得 $f(x)=M$。最小值对 $-f$ 同证。",
        "若 $f$ 恒定，任意内部点导数均为零。否则某点的值不同于端点共同值；若更大，最大值在内部达到；若更小，最小值在内部达到。记该内部极值点为 $c$。",
        "以最大值为例，小正 $h$ 的差商非正，小负 $h$ 的差商非负。因导数存在且两侧极限相等，只能同时非正非负，即为零。最小值情形符号反转，结论相同。$\\square$"
      ]
    },
    {
      "id": "mean-value",
      "topics": [
        "analysis/derivatives"
      ],
      "title": "拉格朗日中值定理",
      "statement": "若 $f$ 在 $[a,b]$ 连续，在 $(a,b)$ 可导且 $a<b$，则存在 $c\\in(a,b)$ 满足 $f(b)-f(a)=f\\prime(c)(b-a)$。",
      "dependencies": [
        "rolle"
      ],
      "idea": "减去连接两端的直线，把一般端点差转化为 Rolle 定理的等端值条件。",
      "steps": [
        "令 $m=[f(b)-f(a)]/(b-a)$，定义 $g(x)=f(x)-f(a)-m(x-a)$。线性函数连续可导，差商运算给出 $g$ 在闭区间连续、内部可导，且 $g(a)=g(b)=0$。",
        "由 Rolle 定理存在内部 $c$ 使 $g\\prime(c)=0$。因 $g\\prime(c)=f\\prime(c)-m$，所以 $f\\prime(c)=m$，乘以非零数 $b-a$ 得结论。$\\square$"
      ]
    },
    {
      "id": "ftc-second",
      "topics": [
        "analysis/fundamental-theorem-calculus"
      ],
      "title": "微积分第二基本定理",
      "statement": "设 $f$ 在 $[a,b]$ 连续，$G$ 在该闭区间连续且在内部满足 $G\\prime=f$，则 $\\int_a^b f(x)\\,dx=G(b)-G(a)$。",
      "dependencies": [
        "ftc-first",
        "mean-value"
      ],
      "idea": "变上限积分与任意原函数具有同样导数，差为常数。",
      "steps": [
        "令 $F(x)=\\int_a^x f(t)\\,dt$。第一基本定理给出内部导数 $F\\prime=f$；积分估计与 $f$ 的有界性给出 $|F(y)-F(x)|\\le M|y-x|$，故 $F$ 在整个闭区间连续。",
        "令 $H=G-F$，则 $H$ 闭区间连续、内部可导且导数恒为零。对任意 $u<v$ 的子区间应用中值定理，得到 $H(v)-H(u)=0$，所以 $H$ 恒定。",
        "因此 $G(b)-F(b)=G(a)-F(a)$。又 $F(a)=0$、$F(b)=\\int_a^b f$，整理即得公式。$\\square$"
      ]
    },
    {
      "id": "cantor",
      "topics": [
        "foundations/cardinality",
        "foundations/sets-mappings"
      ],
      "title": "Cantor 定理",
      "statement": "对任意集合 $A$，不存在从 $A$ 到幂集 $\\mathcal P(A)$ 的满射；且 $a\\mapsto\\{a\\}$ 是单射。",
      "dependencies": [
        "axiom-set"
      ],
      "idea": "对每个候选函数，构造与每个像至少在一个位置不同的对角集合。",
      "steps": [
        "设 $f:A\\to\\mathcal P(A)$ 为任意函数。由分离原则，$D=\\{a\\in A:a\\notin f(a)\\}$ 是 $A$ 的子集，故是幂集的一个元素。",
        "若存在 $d\\in A$ 满足 $f(d)=D$，则按 $D$ 的定义，有 $d\\in D$ 当且仅当 $d\\notin f(d)=D$，矛盾。所以 $D$ 不在 $f$ 的像内，$f$ 不是满射。",
        "若 $\\{a\\}=\\{b\\}$，则 $a\\in\\{b\\}$，从而 $a=b$，所以单元素集合映射单射。于是 $A$ 可嵌入其幂集，但不能与幂集等势。空集也被同一反满射论证覆盖。$\\square$"
      ]
    },
    {
      "id": "quantifier-negation",
      "topics": [
        "foundations/predicates-quantifiers"
      ],
      "title": "经典量词否定律",
      "statement": "在经典一阶语义下，$\\neg\\forall x\\,P(x)$ 与 $\\exists x\\,\\neg P(x)$ 在同一结构和赋值中真值相同。",
      "dependencies": [
        "axiom-logic"
      ],
      "idea": "直接展开满足关系，不偷偷改变论域或剩余自由变量的赋值。",
      "steps": [
        "固定论域 $D$、结构以及其他自由变量的赋值。$\\forall x\\,P(x)$ 为真，按定义等价于每个 $d\\in D$ 替换 $x$ 后都使 $P$ 为真。",
        "因此其否定为真，等价于并非每个 $d$ 都使 $P$ 真；在经典二值语义下，这恰好意味着某个 $d\\in D$ 使 $P$ 假，即使 $\\neg P$ 真。",
        "最后一句正是存在量词的语义。因此两式等价。若允许空论域，前者因全称式真而假，后者因无见证也假，等价仍保持；通常一阶结构约定论域非空。$\\square$"
      ]
    },
    {
      "id": "halting-diagonal",
      "topics": [
        "foundations/halting-problem",
        "foundations/decidability"
      ],
      "title": "停机问题不可判定",
      "statement": "不存在总能停机的程序 $H(M,w)$，能对每个有效编码的程序 $M$ 及输入 $w$ 正确判断 $M(w)$ 是否停机。",
      "dependencies": [
        "axiom-computation"
      ],
      "idea": "把假定判定器应用于程序自身，再构造与判定结果相反的行为。",
      "steps": [
        "反设有这样的 $H$。构造程序 $D$：输入程序编码 $z$，计算 $H(z,z)$；若回答会停机，就进入无限循环；若回答不会停机，就立即停机。无效编码可另约定处理，不影响下述有效编码情形。",
        "$H$ 是总可计算程序，分支与无限循环都能实现，所以 $D$ 是合法程序，有自己的有效编码 $d$。考察 $D(d)$。",
        "若 $H(d,d)$ 回答会停机，按构造 $D(d)$ 永不停止，与正确性矛盾；若回答不会停机，按构造它立即停止，也矛盾。两种回答穷尽可能，故 $H$ 不存在。$\\square$"
      ]
    },
    {
      "id": "semi-decision-complement",
      "topics": [
        "foundations/enumerability",
        "foundations/decidability"
      ],
      "title": "可判定与双侧半可判定的等价",
      "statement": "语言 $L$ 可判定，当且仅当 $L$ 与其补集均可半判定。半判定器对成员最终接受，对非成员不接受但可不停机。",
      "dependencies": [
        "axiom-computation"
      ],
      "idea": "并行推进两个半判定器，保证不会被错误一侧的无限运行卡住。",
      "steps": [
        "若有判定器，直接在接受分支接受即可半判定 $L$；交换接受和拒绝就得到补集判定器，因此也有补集半判定器。",
        "反向设 $A$ 半判定 $L$、$B$ 半判定补集。在输入 $w$ 上交替各模拟一步，保存两台机器各自的配置。若 $A$ 接受则回答属于，若 $B$ 接受则回答不属于。",
        "每个输入恰好属于一侧，因此对应机器最终会接受；另一侧不可能错误接受。交错模拟保证有效一侧在有限总步数后运行到接受，故算法总停机且正确，是判定器。$\\square$"
      ]
    },
    {
      "id": "subgroup-test",
      "topics": [
        "algebra/groups-subgroups"
      ],
      "title": "子群判别法",
      "statement": "群 $G$ 的非空子集 $H$ 是子群，当且仅当任意 $a,b\\in H$ 都有 $ab^{-1}\\in H$。",
      "dependencies": [
        "axiom-group"
      ],
      "idea": "先从同一个元素制造单位元，再制造逆元和乘积。",
      "steps": [
        "必要性：若 $H$ 是子群，逆元与乘法均封闭，故 $ab^{-1}\\in H$。",
        "充分性：由非空选 $h\\in H$，取 $a=b=h$ 得单位元 $e=hh^{-1}\\in H$。对任意 $b\\in H$，取 $a=e$ 得 $b^{-1}\\in H$。",
        "对任意 $a,b\\in H$，已知 $b^{-1}\\in H$，再将判据中的第二变量取为 $b^{-1}$，得 $a(b^{-1})^{-1}=ab\\in H$。结合律继承自 $G$，单位元及逆元均在 $H$ 内，所以 $H$ 为子群。$\\square$"
      ]
    },
    {
      "id": "lagrange",
      "topics": [
        "algebra/finite-groups",
        "algebra/groups-subgroups"
      ],
      "title": "Lagrange 定理",
      "statement": "有限群 $G$ 的每个子群 $H$ 都满足 $|G|=[G:H]|H|$，因而 $|H|$ 整除 $|G|$。",
      "dependencies": [
        "axiom-group",
        "axiom-finite"
      ],
      "idea": "左陪集分割整个群，每个陪集通过左乘与子群等势。",
      "steps": [
        "对 $a,b\\in G$，若 $aH\\cap bH$ 含元素 $ah_1=bh_2$，则 $a=bh_2h_1^{-1}$，从而每个 $ah$ 都属于 $bH$；交换 $a,b$ 得相反包含，所以两陪集相等。故不同陪集不交。",
        "每个 $g\\in G$ 属于 $gH$（因为单位元在 $H$），所以所有不同左陪集分割 $G$。映射 $h\\mapsto gh$ 从 $H$ 到 $gH$ 满射；若 $gh_1=gh_2$，左乘 $g^{-1}$ 得 $h_1=h_2$，故也是单射。",
        "设不同陪集共有 $m=[G:H]$ 个。按有限不交并计数，$|G|=m|H|$，即得整除性。这里不推断每个群阶因子都一定对应子群。$\\square$"
      ]
    },
    {
      "id": "orbit-stabilizer",
      "topics": [
        "algebra/orbits-stabilizers",
        "algebra/group-actions"
      ],
      "title": "轨道—稳定子定理",
      "statement": "有限群 $G$ 作用在集合 $X$ 上。对 $x\\in X$，稳定子 $G_x=\\{g:gx=x\\}$ 是子群，且 $|Gx|=|G|/|G_x|$。",
      "dependencies": [
        "subgroup-test",
        "lagrange"
      ],
      "idea": "把把同一点送到同一像的群元素，恰好识别为同一稳定子陪集。",
      "steps": [
        "单位元固定 $x$，故 $G_x$ 非空。若 $a,b$ 固定 $x$，则 $b^{-1}x=x$，并有 $ab^{-1}x=ax=x$；子群判别法给出 $G_x$ 是子群。",
        "定义左陪集到轨道的映射 $gG_x\\mapsto gx$。若 $gG_x=hG_x$，则 $h^{-1}g\\in G_x$，故 $gx=hx$，映射良定义。反之若 $gx=hx$，则 $h^{-1}g$ 固定 $x$，因此两个陪集相同，映射单射。",
        "轨道每个元素按定义是某个 $gx$，故映射满射。轨道大小等于稳定子指数，应用 Lagrange 定理得到公式。$\\square$"
      ]
    },
    {
      "id": "first-isomorphism",
      "topics": [
        "algebra/homomorphisms-quotients"
      ],
      "title": "群的第一同构定理",
      "statement": "群同态 $\\varphi:G\\to K$ 的核 $N$ 为正规子群，且 $G/N\\cong\\operatorname{im}\\varphi$。",
      "dependencies": [
        "subgroup-test",
        "axiom-group"
      ],
      "idea": "同态恰好把核的每个陪集压成一个点，除此之外不再识别不同陪集。",
      "steps": [
        "由同态性质 $\\varphi(e)=e$ 且 $\\varphi(g^{-1})=\\varphi(g)^{-1}$。若 $a,b\\in N$，则 $\\varphi(ab^{-1})=e$，故核是子群。对任意 $g\\in G,n\\in N$，$\\varphi(gng^{-1})=\\varphi(g)e\\varphi(g)^{-1}=e$，因此核正规。",
        "商乘法定义为 $(gN)(hN)=ghN$。若换代表为 $gn_1,hn_2$，其乘积等于 $gh(h^{-1}n_1h)n_2$，括号内属于 $N$，所以商乘法良定义；群公理从 $G$ 继承。",
        "定义 $\\bar\\varphi(gN)=\\varphi(g)$。同陪集代表相差一个核元素，所以像相同，且该映射保持乘法。它满射到像；若两像相同，则 $\\varphi(h^{-1}g)=e$，从而 $gN=hN$，故也单射。于是为群同构。$\\square$"
      ]
    },
    {
      "id": "basis-extension",
      "topics": [
        "algebra/basis-dimension",
        "algebra/vector-spaces"
      ],
      "title": "有限生成空间的基扩充与基长一致",
      "statement": "若向量空间 $V$ 有有限生成列 $w_1,\\dots,w_n$，则任意线性无关列最多含 $n$ 个向量，并可扩充为 $V$ 的一组基；所有基的长度相同。",
      "dependencies": [
        "axiom-vector",
        "axiom-finite"
      ],
      "idea": "逐个把无关向量换入生成列；每次用一个非零系数解出被替换向量。",
      "steps": [
        "设无关列为 $u_1,\\dots,u_m$。把 $u_1$ 表成生成列线性组合，因 $u_1\\ne0$ 至少一系数非零；可解出对应 $w_j$，用 $u_1$ 替换它后仍生成 $V$。",
        "归纳地，已有 $u_1,\\dots,u_k$ 与剩余 $n-k$ 个原生成向量构成生成列。将 $u_{k+1}$ 在此列中展开，至少一个剩余向量的系数非零，否则 $u_{k+1}$ 落在前 $k$ 个的张成空间，与无关性矛盾。解出该向量并替换。",
        "替换最多进行 $n$ 次，所以不能存在长度超过 $n$ 的无关列。给定无关列，扫描原生成列：若某向量不在当前张成空间，就加进来，仍保持无关；有限扫描后已包含全体原生成向量的张成空间，因而得到基。",
        "若两组基长度为 $r,s$，把第一组作为无关列、第二组作为生成列，得 $r\\le s$；交换角色得 $s\\le r$。故长度相等，维数定义良好。$\\square$"
      ]
    },
    {
      "id": "rank-nullity",
      "topics": [
        "algebra/linear-maps",
        "algebra/basis-dimension"
      ],
      "title": "秩—零化度定理",
      "statement": "设 $V$ 有限维，$T:V\\to W$ 线性，则 $\\dim V=\\dim\\ker T+\\dim\\operatorname{im}T$。",
      "dependencies": [
        "basis-extension"
      ],
      "idea": "把核的一组基扩成全空间的基，其余基向量的像恰好构成像空间的基。",
      "steps": [
        "先说明任意子空间 $U\\subseteq V$ 有有限基：不断添加不在已有张成空间中的向量，若超过 $\\dim V$ 步会违背基长上界，因此过程在有限步终止。取核基 $v_1,\\dots,v_k$，扩充为 $V$ 的基 $v_1,\\dots,v_k,w_1,\\dots,w_r$。",
        "任意向量是这些基向量的线性组合，应用 $T$ 后核部分消失，故 $T(w_1),\\dots,T(w_r)$ 生成像空间。",
        "若 $\\sum a_jT(w_j)=0$，则 $\\sum a_jw_j\\in\\ker T$，可以写成 $\\sum b_iv_i$。移项给出原基的一条线性关系，迫使全部 $a_j,b_i$ 为零。因此像列线性无关，像维数为 $r$。",
        "全空间基长度为 $k+r$，故 $\\dim V=k+r=\\dim\\ker T+\\dim\\operatorname{im}T$。零空间和零映射情形也被允许的空基覆盖。$\\square$"
      ]
    },
    {
      "id": "cauchy-schwarz",
      "topics": [
        "algebra/vector-spaces",
        "analysis/hilbert-spaces"
      ],
      "title": "实内积空间的柯西—施瓦茨不等式",
      "statement": "实内积空间中，$|\\langle u,v\\rangle|\\le\\|u\\|\\|v\\|$；等号当且仅当 $u,v$ 线性相关。",
      "dependencies": [
        "axiom-inner"
      ],
      "idea": "从任意向量的平方长度非负出发，减去沿一个向量的最佳倍数。",
      "steps": [
        "若 $v=0$，两侧均为零，且两向量线性相关。以下设 $v\\ne0$，令 $t=\\langle u,v\\rangle/\\|v\\|^2$。",
        "内积双线性和对称性给出 $0\\le\\|u-tv\\|^2=\\|u\\|^2-2t\\langle u,v\\rangle+t^2\\|v\\|^2=\\|u\\|^2-\\langle u,v\\rangle^2/\\|v\\|^2$。乘以正数 $\\|v\\|^2$ 再开非负平方根得到不等式。",
        "等号成立恰好使 $\\|u-tv\\|=0$，由正定性等价于 $u=tv$。反向若线性相关，直接代入也得等号。这里证明实内积版本；复数版本需在选取系数时加入共轭，不能原式照抄。$\\square$"
      ]
    },
    {
      "id": "prime-divisor",
      "topics": [
        "numbertheory/divisibility-primes"
      ],
      "title": "每个大于 1 的整数都有素因子及素数无穷性",
      "statement": "每个整数 $n>1$ 都有素因子；素数集合无限。",
      "dependencies": [
        "axiom-natural"
      ],
      "idea": "选最小非平凡因子得到素数，再用乘积加一逃离任何有限清单。",
      "steps": [
        "考虑 $n$ 的所有大于 1 的正因子，这个集合非空（含 $n$），由自然数良序原则有最小者 $d$。若 $d$ 非素，则 $d=ab$ 且 $1<a<d$，于是 $a$ 也是 $n$ 的因子，与 $d$ 最小矛盾。所以 $d$ 为素数。",
        "假设素数只有 $p_1,\\dots,p_k$，取 $N=p_1\\cdots p_k+1>1$。已证第一部分保证 $N$ 有素因子 $q$，因而 $q=p_i$ 为某个清单元素。",
        "于是 $q$ 同时整除 $N$ 与乘积，便整除其差 1，不可能。故不存在覆盖所有素数的有限清单。论证不要求 $N$ 本身是素数。$\\square$"
      ]
    },
    {
      "id": "division-algorithm",
      "topics": [
        "numbertheory/gcd",
        "numbertheory/congruences"
      ],
      "title": "整数除法算法",
      "statement": "对整数 $a$ 与正整数 $b$，唯一存在整数 $q,r$，使 $a=bq+r$ 且 $0\\le r<b$。",
      "dependencies": [
        "axiom-natural"
      ],
      "idea": "从所有非负余数候选中取最小者，若它过大还能减一次除数。",
      "steps": [
        "集合 $S=\\{a-bq:q\\in\\mathbb Z,\\ a-bq\\ge0\\}$ 非空：取 $q=-|a|$，因 $b\\ge1$ 可直接验证余数非负。由非负整数良序原则取最小元素 $r=a-bq$。若 $r\\ge b$，则 $r-b=a-b(q+1)\\ge0$ 是更小的候选，矛盾，故 $r<b$。",
        "若还有 $a=bq\\prime+r\\prime$，且两余数都在 $[0,b)$，相减得 $b(q-q\\prime)=r\\prime-r$。右侧绝对值小于 $b$，但非零的 $b$ 倍数绝对值至少为 $b$，故只能为零。于是 $q=q\\prime$、$r=r\\prime$，唯一性成立。$\\square$"
      ]
    },
    {
      "id": "bezout",
      "topics": [
        "numbertheory/gcd"
      ],
      "title": "贝祖定理与最大公因数",
      "statement": "对不全为零的整数 $a,b$，存在整数 $x,y$，使 $d=ax+by>0$，且 $d\\mid a,d\\mid b$；每个公因数都整除 $d$，所以 $d=\\gcd(a,b)$。",
      "dependencies": [
        "division-algorithm"
      ],
      "idea": "取所有正整数线性组合中的最小者，用带余除法迫使它整除两参数。",
      "steps": [
        "集合 $S=\\{ax+by>0:x,y\\in\\mathbb Z\\}$ 非空，因为不全为零时可用某个非零参数或其负值得到正数。取最小元素 $d=ax_0+by_0$。",
        "用除法算法写 $a=qd+r$，$0\\le r<d$。则 $r=a-qd=a(1-qx_0)+b(-qy_0)$ 仍是整数线性组合。若 $r>0$ 会违背 $d$ 最小，故 $r=0$，即 $d\\mid a$。对 $b$ 同理得 $d\\mid b$。",
        "任意公因数 $c$ 整除 $a,b$，也整除线性组合 $d$；特别地每个正公因数不大于 $d$。故 $d$ 是最大正公因数，且同时得到贝祖表示。$\\square$"
      ]
    },
    {
      "id": "euclid-lemma",
      "topics": [
        "numbertheory/divisibility-primes",
        "numbertheory/quadratic-residues"
      ],
      "title": "Euclid 引理",
      "statement": "若素数 $p$ 整除整数乘积 $ab$，则 $p\\mid a$ 或 $p\\mid b$。",
      "dependencies": [
        "bezout"
      ],
      "idea": "若素数不整除第一个因子，就与该因子互素，用贝祖等式消去它。",
      "steps": [
        "若 $p\\mid a$ 已得结论。否则 $p$ 的正因子仅为 1 和 $p$，而公因数不可能为 $p$，所以 $\\gcd(p,a)=1$。",
        "由贝祖定理有整数 $x,y$ 使 $xp+ya=1$。两边乘 $b$ 得 $xpb+yab=b$。因 $p\\mid ab$，左边两项都被 $p$ 整除，故 $p\\mid b$。$\\square$"
      ]
    },
    {
      "id": "unique-factorization",
      "topics": [
        "numbertheory/divisibility-primes"
      ],
      "title": "正整数的素因子唯一分解",
      "statement": "每个整数 $n>1$ 都可写成有限个素数之积，且除因子顺序外表示唯一。",
      "dependencies": [
        "prime-divisor",
        "euclid-lemma",
        "axiom-natural"
      ],
      "idea": "强归纳给出存在性；素数整除乘积引理逐个匹配并约去因子。",
      "steps": [
        "存在性用强归纳。若 $n$ 素，已有分解；若合数，则 $n=ab$ 且 $1<a,b<n$，由归纳假设二者均有素数分解，拼接得到 $n$ 的分解。起点 $n=2$ 是素数，故归纳成立。",
        "若 $p_1\\cdots p_r=q_1\\cdots q_s$ 是两种素数分解，则 $p_1$ 整除右侧。反复应用 Euclid 引理，必整除某个 $q_j$；因 $q_j$ 素且 $p_1>1$，只能 $p_1=q_j$。重排并在整数整环中约去这个非零因子。",
        "继续对剩余因子重复匹配。若一边先无因子，另一边仍有素数，其积至少为 2，不可能等于空积 1。因此同时结束，因子多重集合相同，唯一性成立。$\\square$"
      ]
    },
    {
      "id": "fermat-little",
      "topics": [
        "numbertheory/congruences",
        "numbertheory/modular-exponentiation"
      ],
      "title": "费马小定理",
      "statement": "若 $p$ 为素数且整数 $a$ 不被 $p$ 整除，则 $a^{p-1}\\equiv1\\pmod p$。",
      "dependencies": [
        "euclid-lemma",
        "bezout"
      ],
      "idea": "乘 a 只是把非零剩余类重新排列，比较乘积并合法约去。",
      "steps": [
        "考虑 $a,2a,\\dots,(p-1)a$ 的模 $p$ 剩余类。它们均非零，否则 Euclid 引理使 $p$ 整除 $a$ 或对应的 $k$，都不可能。",
        "若 $ia\\equiv ja\\pmod p$，则 $p\\mid a(i-j)$。Euclid 引理及 $p\\nmid a$ 给出 $p\\mid i-j$；因 $|i-j|<p$，只能 $i=j$。因此这些类恰好排列了全部 $p-1$ 个非零类。",
        "比较乘积得 $a^{p-1}(p-1)!\\equiv(p-1)!\\pmod p$。每个因子都不被 $p$ 整除，重复 Euclid 引理说明阶乘也不被 $p$ 整除，故与 $p$ 互素。贝祖定理给出其模逆，乘逆即可约去，得到结论。$\\square$"
      ]
    },
    {
      "id": "measure-continuity",
      "topics": [
        "analysis/measures"
      ],
      "title": "测度的下连续性",
      "statement": "设 $\\mu$ 是测度，$E_n$ 是递增可测集列，则 $\\mu(\\bigcup_nE_n)=\\lim_n\\mu(E_n)$，允许两边为无穷。",
      "dependencies": [
        "axiom-measure"
      ],
      "idea": "把递增集合拆成互不相交的新增加部分，再应用可数可加性。",
      "steps": [
        "令 $D_1=E_1$，$D_n=E_n\\setminus E_{n-1}$（$n\\ge2$）。σ 代数对差封闭，故各 $D_n$ 可测；它们两两不交，且 $E_n=\\bigcup_{k=1}^nD_k$，$\\bigcup_nE_n=\\bigcup_nD_n$。",
        "有限可加性由可数可加性补上空集得到，所以 $\\mu(E_n)=\\sum_{k=1}^n\\mu(D_k)$。非负扩展实数级数按部分和上确界定义，可数可加性给出 $\\mu(\\bigcup_nE_n)=\\sum_{k=1}^{\\infty}\\mu(D_k)=\\lim_n\\mu(E_n)$。无须假设初始测度有限。$\\square$"
      ]
    },
    {
      "id": "simple-approximation",
      "topics": [
        "analysis/measurable-functions",
        "analysis/lebesgue-integral"
      ],
      "title": "非负可测函数的单调简单逼近",
      "statement": "对可测 $f:X\\to[0,\\infty]$，存在非负可测简单函数 $s_n\\uparrow f$。",
      "dependencies": [
        "axiom-measure",
        "axiom-natural",
        "archimedean"
      ],
      "idea": "把函数高度按二进制网格向下取整，同时把过高部分截断。",
      "steps": [
        "定义 $s_n(x)=\\min(n,2^{-n}\\lfloor2^nf(x)\\rfloor)$，约定 $f(x)=\\infty$ 时 $s_n(x)=n$。它只取有限多个数值；每个水平集合由 $f$ 对半开区间或射线的原像组成，故可测。",
        "二进制细网格的向下取整不小于粗网格向下取整，同时截断高度由 $n$ 增到 $n+1$，因此 $s_n\\le s_{n+1}\\le f$。",
        "若 $f(x)<\\infty$，当 $n>f(x)$ 时不再截断，且 $0\\le f(x)-s_n(x)<2^{-n}\\to0$；若 $f(x)=\\infty$，则 $s_n(x)=n\\to\\infty$。故处处单调趋于 $f$。$\\square$"
      ]
    },
    {
      "id": "monotone-integral",
      "topics": [
        "analysis/lebesgue-integral",
        "analysis/integration-limits"
      ],
      "title": "单调收敛定理",
      "statement": "设非负可测函数 $f_n\\uparrow f$，则 $\\int f_n\\,d\\mu\\uparrow\\int f\\,d\\mu$，允许无穷。非负积分定义为所有下方非负简单函数积分的上确界。",
      "dependencies": [
        "measure-continuity",
        "axiom-lebesgue"
      ],
      "idea": "用阈值比例把任意简单下界的每块，逐步纳入某个 f_n 能控制的区域。",
      "steps": [
        "非负积分定义立刻给出单调性，故 $L=\\sup_n\\int f_n\\le\\int f$。为证反向，取任意简单函数 $s=\\sum_{j=1}^m a_j1_{A_j}\\le f$，其中 $A_j$ 两两不交、$a_j>0$；零系数块可删去。再固定 $0<c<1$。",
        "令 $A_{j,n}=A_j\\cap\\{f_n\\ge ca_j\\}$。这些集合随 $n$ 递增，且并为 $A_j$：因 $f_n(x)\\to f(x)\\ge a_j>ca_j$。由单调性及简单函数积分定义，$\\int f_n\\ge c\\sum_j a_j\\mu(A_{j,n})$。",
        "由测度下连续性及有限非负和的极限，$L\\ge c\\sum_j a_j\\mu(A_j)=c\\int s$。若 $\\int s=\\infty$，此式已经迫使 $L=\\infty$；若有限，令 $c\\uparrow1$ 得 $L\\ge\\int s$。",
        "对所有简单下界取上确界，得 $L\\ge\\int f$，与第一步合并为等式。简单函数积分的表示无关性与单调性可由两种有限分块的交集共同细分及测度有限可加性验证，不需要预先调用本定理。$\\square$"
      ]
    },
    {
      "id": "integral-linearity",
      "topics": [
        "analysis/lebesgue-integral"
      ],
      "title": "勒贝格积分的线性性与绝对值估计",
      "statement": "非负函数的积分满足非负加法及非负数乘。若实可测 $f,g$ 满足 $\\int|f|,\\int|g|<\\infty$，则 $f+g$ 可积，$\\int(f+g)=\\int f+\\int g$，并有 $|\\int f|\\le\\int|f|$。",
      "dependencies": [
        "simple-approximation",
        "monotone-integral",
        "axiom-lebesgue"
      ],
      "idea": "先在有限分块上计算，再单调逼近；有符号情形用正负部分消除可能的无穷相减。",
      "steps": [
        "对非负简单函数，取两分块的共同细分，按测度有限可加性逐块相加，直接得到积分可加性和非负数乘性。取 $s_n\\uparrow f$、$t_n\\uparrow g$ 的简单逼近，则 $s_n+t_n\\uparrow f+g$。对三列使用单调收敛定理，得非负积分可加；数乘同理，零乘无穷约定为零。",
        "对可积实函数，$|f+g|\\le|f|+|g|$，由非负单调性和加法，$\\int|f+g|\\le\\int|f|+\\int|g|<\\infty$。记 $h^+=\\max(h,0)$、$h^-=\\max(-h,0)$，有 $h=h^+-h^-$，且这些正负部分积分均有限。",
        "逐点恒等式 $f^++g^++(f+g)^-=f^-+g^-+(f+g)^+$ 只包含非负函数，积分并使用已证非负可加性；所有量有限，故可移项，得到有符号加法。负数乘由交换正负部分得到。",
        "最后 $|\\int f|=|\\int f^+-\\int f^-|\\le\\int f^++\\int f^-=\\int|f|$。若 $f\\le g$，对非负差 $g-f$ 应用线性性也得有符号积分单调性。$\\square$"
      ]
    },
    {
      "id": "fatou",
      "topics": [
        "analysis/integration-limits"
      ],
      "title": "Fatou 引理",
      "statement": "若 $f_n\\ge0$ 可测，则 $\\int\\liminf_n f_n\\le\\liminf_n\\int f_n$。",
      "dependencies": [
        "monotone-integral",
        "axiom-measure"
      ],
      "idea": "取每条尾部的下确界，得到可直接应用单调收敛的递增函数列。",
      "steps": [
        "令 $g_n=\\inf_{k\\ge n}f_k$。可测性可由 $\\{g_n<a\\}=\\bigcup_{k\\ge n}\\{f_k<a\\}$ 验证；同时 $g_n\\ge0$ 且 $g_n\\uparrow\\liminf f_n$。",
        "对每个 $k\\ge n$，$g_n\\le f_k$，故积分单调性给出 $\\int g_n\\le\\inf_{k\\ge n}\\int f_k$。对左侧应用单调收敛，对右侧按数列下极限定义取极限，即得到结论，扩展实数情形同样成立。$\\square$"
      ]
    },
    {
      "id": "dominated-convergence",
      "topics": [
        "analysis/integration-limits",
        "analysis/lebesgue-integral"
      ],
      "title": "控制收敛定理（实值版）",
      "statement": "设实可测 $f_n\\to f$ 几乎处处，且 $|f_n|\\le g$ 几乎处处，其中非负 $g$ 可积，则 $f$ 可积并有 $\\int f_n\\to\\int f$。",
      "dependencies": [
        "fatou",
        "integral-linearity",
        "axiom-measure"
      ],
      "idea": "分别对控制函数加上和减去 f_n 应用 Fatou，夹住积分上下极限。",
      "steps": [
        "把可测的异常零测集统一去掉：可数个异常集之并仍零测。可在该可测零集上把所有函数改为零，积分不变；这是因为支持在零测集上的非负可测函数，其每个简单下界的积分都为零。这样不需要假设原测度空间完备，也能按可测零集上的修改处理。",
        "修改后处处有 $|f|\\le g$，故 $f$ 可积，各 $f_n$ 也可积。对非负 $g+f_n$ 应用 Fatou，结合积分线性性及 $\\int g<\\infty$，得 $\\int f\\le\\liminf_n\\int f_n$。",
        "对非负 $g-f_n$ 再用 Fatou，得 $-\\int f\\le\\liminf_n(-\\int f_n)=-\\limsup_n\\int f_n$。因此 $\\limsup\\int f_n\\le\\int f\\le\\liminf\\int f_n$，迫使两极限相同。$\\square$"
      ]
    },
    {
      "id": "markov",
      "topics": [
        "probability/expectation-variance",
        "probability/large-deviations"
      ],
      "title": "Markov 不等式",
      "statement": "若 $X\\ge0$ 为随机变量，$t>0$，则 $\\mathbb P(X\\ge t)\\le\\mathbb E[X]/t$；若期望无穷，右侧按无穷理解。",
      "dependencies": [
        "axiom-lebesgue"
      ],
      "idea": "在超过阈值的事件上，随机变量至少贡献一个阈值的重量。",
      "steps": [
        "记事件 $A=\\{X\\ge t\\}$，由可测性它是事件。逐点有 $X\\ge t1_A$：在 $A$ 上由定义成立，在补集上右侧为零。",
        "由非负积分定义的单调性，$\\mathbb E[X]\\ge\\int t1_A\\,d\\mathbb P=t\\mathbb P(A)$，最后一步是简单函数积分定义。两边除以正数 $t$ 得结论。$\\square$"
      ]
    },
    {
      "id": "chebyshev",
      "topics": [
        "probability/expectation-variance",
        "probability/convergence-in-probability"
      ],
      "title": "Chebyshev 不等式",
      "statement": "若随机变量 $X$ 有有限均值 $m$ 和有限方差 $\\sigma^2$，则对任意 $\\varepsilon>0$，$\\mathbb P(|X-m|\\ge\\varepsilon)\\le\\sigma^2/\\varepsilon^2$。",
      "dependencies": [
        "markov"
      ],
      "idea": "将偏差平方变成非负随机变量，直接调用阈值不等式。",
      "steps": [
        "定义 $Y=(X-m)^2\\ge0$，其期望按方差定义等于 $\\sigma^2$。实数平方在非负数上保序，所以事件 $\\{|X-m|\\ge\\varepsilon\\}$ 与 $\\{Y\\ge\\varepsilon^2\\}$ 相同。",
        "对 $Y$ 用 Markov 不等式并取阈值 $\\varepsilon^2>0$，得到所需上界。证明不要求 $X$ 为离散或连续分布。$\\square$"
      ]
    },
    {
      "id": "independent-products",
      "topics": [
        "probability/expectation-variance",
        "probability/conditional-probability"
      ],
      "title": "独立平方可积变量的期望乘法",
      "statement": "若 $X,Y$ 独立，且二者二阶矩有限，则 $XY$ 可积且 $\\mathbb E[XY]=\\mathbb E[X]\\mathbb E[Y]$。",
      "dependencies": [
        "simple-approximation",
        "monotone-integral",
        "integral-linearity",
        "axiom-independence"
      ],
      "idea": "先对事件指标相乘，再扩展到简单函数、非负函数和有符号函数。",
      "steps": [
        "若 $s(X)=\\sum_i a_i1_{\\{X\\in A_i\\}}$、$t(Y)=\\sum_j b_j1_{\\{Y\\in B_j\\}}$ 为非负简单函数，独立性给出每对事件交的概率为概率乘积；有限展开后 $\\mathbb E[s(X)t(Y)]=\\mathbb E[s(X)]\\mathbb E[t(Y)]$。",
        "对非负的 $X,Y$ 分别用其值的二进制简单逼近 $s_n(X)\\uparrow X$、$t_n(Y)\\uparrow Y$，它们的乘积也单调趋于 $XY$。三次应用单调收敛，得到非负变量的乘法式，允许无穷。",
        "一般情形先有 $2|XY|\\le X^2+Y^2$，因为 $(|X|-|Y|)^2\\ge0$。故乘积可积。又 $|X|\\le1+X^2$，所以一阶矩有限，$Y$ 同理。",
        "对正负部分分别应用非负结论，再按 $XY=X^+Y^+-X^+Y^--X^-Y^++X^-Y^-$ 积分，所有量有限可整理，得到期望乘法。这些正负部分是各自变量的可测函数，仍满足所需事件独立性。$\\square$"
      ]
    },
    {
      "id": "weak-law",
      "topics": [
        "probability/law-large-numbers",
        "probability/convergence-in-probability"
      ],
      "title": "有限方差弱大数定律",
      "statement": "设 $X_1,X_2,\\dots$ 相互独立，均值均为 $m$，方差均为有限的 $\\sigma^2$。则 $\\overline X_n=n^{-1}\\sum_{i=1}^nX_i$ 依概率收敛到 $m$。",
      "dependencies": [
        "independent-products",
        "chebyshev",
        "integral-linearity"
      ],
      "idea": "把样本均值的方差算为原方差除以样本数，再控制偏差概率。",
      "steps": [
        "积分线性性给出 $\\mathbb E[\\overline X_n]=m$。展开中心化平方并积分，得 $\\operatorname{Var}(\\overline X_n)=n^{-2}\\sum_i\\mathbb E[(X_i-m)^2]+2n^{-2}\\sum_{i<j}\\mathbb E[(X_i-m)(X_j-m)]$。",
        "不同下标的中心化变量独立，已证期望乘法使交叉项等于两个零均值之积，故全为零。剩下 $n$ 个方差项，所以样本均值方差为 $\\sigma^2/n$。",
        "对任意 $\\varepsilon>0$，Chebyshev 给出 $\\mathbb P(|\\overline X_n-m|\\ge\\varepsilon)\\le\\sigma^2/(n\\varepsilon^2)\\to0$。这就是依概率收敛。本证明不覆盖仅有一阶矩的更一般弱大数定律，也不证明强大数定律。$\\square$"
      ]
    },
    {
      "id": "bayes",
      "topics": [
        "probability/conditional-probability",
        "probability/posterior-distribution"
      ],
      "title": "有限分割的 Bayes 公式",
      "statement": "若事件 $A_1,\\dots,A_k$ 两两不交且并为全集，$\\mathbb P(A_i)>0$，且 $\\mathbb P(B)>0$，则 $\\mathbb P(A_j\\mid B)=\\mathbb P(B\\mid A_j)\\mathbb P(A_j)/\\sum_i\\mathbb P(B\\mid A_i)\\mathbb P(A_i)$。",
      "dependencies": [
        "axiom-measure"
      ],
      "idea": "分子按条件概率定义改写，分母把观测事件按互斥原因拆开。",
      "steps": [
        "由条件概率定义，$\\mathbb P(A_j\\mid B)=\\mathbb P(A_j\\cap B)/\\mathbb P(B)$，且 $\\mathbb P(A_i\\cap B)=\\mathbb P(B\\mid A_i)\\mathbb P(A_i)$，所有分母正，故这些商有定义。",
        "事件 $B$ 是互不相交的 $B\\cap A_i$ 之并。有限可加性给出 $\\mathbb P(B)=\\sum_i\\mathbb P(B\\cap A_i)=\\sum_i\\mathbb P(B\\mid A_i)\\mathbb P(A_i)$。代入第一式即得结论。零先验块可先删去；零概率的观测不能直接用此商式处理。$\\square$"
      ]
    },
    {
      "id": "convex-intersection",
      "topics": [
        "geometry/convex-sets",
        "applied/convex-optimization"
      ],
      "title": "凸集的任意交仍凸",
      "statement": "同一实向量空间中任意族凸集的交集仍是凸集；空交按全空间理解。",
      "dependencies": [
        "axiom-vector"
      ],
      "idea": "任取交集中的两点，它们在每个成员内的线段都被保留。",
      "steps": [
        "令 $C=\\bigcap_{i\\in I}C_i$。若 $x,y\\in C$，则对每个 $i$ 有 $x,y\\in C_i$。任取 $t\\in[0,1]$，各 $C_i$ 凸，所以 $(1-t)x+ty\\in C_i$ 对全部 $i$ 成立。",
        "因此该线段点在交集 $C$ 内。若 $C$ 空，凸性条件因没有可取的两点而真；若指标集空，则交集为全空间，它对线性组合封闭。故所有情况成立。$\\square$"
      ]
    },
    {
      "id": "continuous-compact",
      "topics": [
        "geometry/compactness",
        "geometry/open-sets-continuity"
      ],
      "title": "紧致空间的连续像紧致",
      "statement": "若 $K$ 紧致，$f:K\\to Y$ 连续，则子空间 $f(K)$ 紧致。",
      "dependencies": [
        "axiom-topology"
      ],
      "idea": "把像的开覆盖拉回原空间，用有限覆盖后再推到像。",
      "steps": [
        "设 $\\{V_i\\}_{i\\in I}$ 为 $f(K)$ 的相对开覆盖。按子空间拓扑，每个 $V_i=f(K)\\cap U_i$，其中 $U_i$ 在 $Y$ 开。连续性使 $f^{-1}(U_i)$ 在 $K$ 开。",
        "任意 $x\\in K$ 的像被某个 $V_i$ 覆盖，故这些原像覆盖 $K$。紧致性给出有限下标 $i_1,\\dots,i_m$，其原像覆盖 $K$。",
        "任意 $y\\in f(K)$ 取一个原像 $x$，该点属于某个被选原像，所以 $y\\in V_{i_j}$。故所选有限 $V_i$ 覆盖整个像，证明紧致。$\\square$"
      ]
    },
    {
      "id": "continuous-connected",
      "topics": [
        "geometry/connectedness",
        "geometry/homeomorphism"
      ],
      "title": "连通空间的连续像连通",
      "statement": "若空间 $X$ 连通，连续映射 $f:X\\to Y$ 的像 $f(X)$ 连通。",
      "dependencies": [
        "axiom-topology"
      ],
      "idea": "若像能被分成两个不接触的开块，原像也会把原空间分开。",
      "steps": [
        "反设 $f(X)=U\\cup V$，其中 $U,V$ 是像空间中不交、非空的相对开集。由子空间拓扑与连续性，$f^{-1}(U)$、$f^{-1}(V)$ 都在 $X$ 开。",
        "两原像不交且并为 $X$。因 $U,V$ 都包含像中的点，两原像均非空。这就构成 $X$ 的一个分离，与连通定义矛盾。故连续像连通。$\\square$"
      ]
    },
    {
      "id": "intermediate-value",
      "topics": [
        "analysis/continuity-uniform",
        "geometry/connectedness"
      ],
      "title": "介值定理",
      "statement": "若 $f:[a,b]\\to\\mathbb R$ 连续且 $f(a)<c<f(b)$，则存在 $x\\in(a,b)$ 使 $f(x)=c$。端值次序相反时也成立。",
      "dependencies": [
        "axiom-real"
      ],
      "idea": "取函数值还在目标以下的点的上确界，再分别排除函数值偏低和偏高。",
      "steps": [
        "令 $S=\\{x\\in[a,b]:f(x)<c\\}$，它含 $a$ 且被 $b$ 上界，故有 $s=\\sup S$。由 $f(a)<c$ 及连续性，$a$ 右侧一小段仍低于 $c$，所以 $s>a$；由 $f(b)>c$ 及连续性，$b$ 左侧一小段均高于 $c$，所以 $s<b$。",
        "若 $f(s)<c$，连续性保证 $s$ 附近函数值仍小于 $c$，可取 $s$ 右边且仍在区间中的点属于 $S$，违反上界。",
        "若 $f(s)>c$，存在 $\\delta>0$ 使 $s$ 左侧距它小于 $\\delta$ 的点都不在 $S$。但上确界性质保证任意 $\\eta>0$ 都有 $x\\in S$ 满足 $s-\\eta<x\\le s$；取足够小 $\\eta$，与前述邻域矛盾。故只能 $f(s)=c$。端值反向时对 $-f$ 使用已证结论。$\\square$"
      ]
    },
    {
      "id": "archimedean",
      "topics": [
        "analysis/completeness-reals"
      ],
      "title": "实数的 Archimedes 性质",
      "statement": "自然数在实数中无上界；因此 $1/n\\to0$，并且 $2^{-n}\\to0$。",
      "dependencies": [
        "axiom-real",
        "axiom-natural"
      ],
      "idea": "若自然数有最小上界，加一运算会产生越界的自然数。",
      "steps": [
        "反设自然数有上界，令 $s=\\sup\\mathbb N$。因为 $s-1$ 不是上界，有自然数 $n>s-1$。于是自然数 $n+1>s$，与 $s$ 为上界矛盾。",
        "给定 $\\varepsilon>0$，取自然数 $N>1/\\varepsilon$。当 $n\\ge N$ 时 $0<1/n\\le1/N<\\varepsilon$，所以 $1/n\\to0$。",
        "归纳可证 $2^n\\ge n+1$：$n=0$ 时相等；若对 $n$ 成立，则 $2^{n+1}\\ge2n+2\\ge n+2$。故 $0<2^{-n}\\le1/(n+1)\\to0$，直接由同一误差控制得收敛。$\\square$"
      ]
    },
    {
      "id": "handshake",
      "topics": [
        "discrete/graphs-networks"
      ],
      "title": "握手定理及奇度顶点偶数性",
      "statement": "有限无向图中，顶点度数之和为边数的两倍，自环对度数贡献 2；奇度顶点个数必为偶数。",
      "dependencies": [
        "axiom-finite"
      ],
      "idea": "双重计数边的端点关联，再对计数等式取奇偶性。",
      "steps": [
        "把每条边的两个端部看成两个不同关联，即使自环两个端部附着在同一顶点也分别计数。按边计数共有 $2|E|$ 个关联；按顶点计数共有 $\\sum_v\\deg(v)$ 个，因此二者相等。",
        "对等式模 2，偶度顶点贡献零，奇度顶点各贡献 1；右边为偶数。所以奇度顶点的个数模 2 为零，即其个数为偶数。该证明不适用于把有向图入度或出度单独当作无向度的情形。$\\square$"
      ]
    },
    {
      "id": "tree-edges",
      "topics": [
        "discrete/trees-spanning"
      ],
      "title": "树的边数定理",
      "statement": "含 $n\\ge1$ 个顶点的有限简单无向树，边数恰为 $n-1$。树指连通且无环的图。",
      "dependencies": [
        "axiom-finite",
        "axiom-natural"
      ],
      "idea": "先证明非平凡有限树有叶子，再删叶归纳。",
      "steps": [
        "当 $n=1$，简单图没有自环，边数为零。若 $n>1$，在有限树中取一条顶点数最多的简单路径。其端点至少邻接路径上的下一点；若还有路径外邻点，便能延长路径；若还邻接路径上非下一点，则形成环。两者都不可能，因此端点度数为 1，是叶子。",
        "删去该叶子及唯一相邻边，剩余图仍无环。剩余任意两顶点之间原有简单路径不能以叶子为内部点，故仍连通。因此得到 $n-1$ 个顶点的树。",
        "对顶点数归纳，剩余边数为 $n-2$，加回被删一边即得 $n-1$。归纳证明覆盖全部有限树。$\\square$"
      ]
    },
    {
      "id": "binomial-count",
      "topics": [
        "discrete/permutations-combinations"
      ],
      "title": "组合数公式",
      "statement": "从 $n$ 个不同对象中选 $k$ 个组成无序子集，$0\\le k\\le n$，数量为 $\\binom nk=n!/[k!(n-k)!]$。",
      "dependencies": [
        "axiom-finite"
      ],
      "idea": "先数有序无重复选择，再按每个子集被重复计算的排列数作商。",
      "steps": [
        "当 $k>0$，依次选择第一个至第 $k$ 个对象，可选数分别为 $n,n-1,\\dots,n-k+1$；有限计数乘法原理给出有序选择数 $n!/(n-k)!$。",
        "每个固定的 $k$ 元子集可排列为 $k!$ 个有序选择，且不同子集的这些选择不相交。故按等大小分块计数，子集数为有序数除以 $k!$。",
        "当 $k=0$，只有空集一种，约定 $0!=1$ 后公式也给 1。该结果不适用于允许重复选择或对象不可区分的情形。$\\square$"
      ]
    },
    {
      "id": "greedy-mst",
      "topics": [
        "discrete/greedy-algorithms",
        "discrete/trees-spanning"
      ],
      "title": "Kruskal 算法的正确性",
      "statement": "有限连通简单无向加权图上，按权重不减顺序扫描边，只在不形成环时加入，最终得到最小权生成树；权重允许为负，相同权重任意排序。",
      "dependencies": [
        "tree-edges",
        "axiom-finite"
      ],
      "idea": "维持“当前森林包含于某棵最优生成树”的交换不变式。",
      "steps": [
        "有限连通图存在生成树：从单个顶点出发，只要未覆盖全部顶点，由连通性可找一条跨向未覆盖顶点的边，加入新顶点而不成环，有限步完成。因此生成树集合有限非空，权重和有最小者。空森林包含于其中，作为不变式初始情况。",
        "设当前森林 $F$ 包含于某棵最优树 $T$。算法选下一条可加入的边 $e$。若 $e\\in T$，不变式保持。否则把 $e$ 加入 $T$，两端在 $T$ 中的唯一简单路径加 $e$ 形成环；唯一性因两条不同路径会成环。",
        "$e$ 两端在 $F$ 中属于不同连通分量。环中存在一条边 $f$ 跨过其中一个分量的边界，故 $f\\notin F$。若 $f$ 在扫描中早于 $e$ 且当时被拒绝，其两端当时已由已选边连通，之后仍连通，便不可能现在跨越该分量。故 $f$ 未早于 $e$ 被处理，权重不小于 $e$。",
        "删除环中的 $f$ 得新生成树 $T\\prime=T+e-f$，权重不大于 $T$，所以仍最优且包含 $F+e$。这完成不变式。最终若森林不连通，原图必有跨分量边，扫描该边时本可加入，矛盾。故最终为生成树，且包含于一棵最优树；二者同有 $n-1$ 条边，因而相等。$\\square$"
      ]
    },
    {
      "id": "p-in-np",
      "topics": [
        "discrete/p-vs-np"
      ],
      "title": "P 包含于 NP",
      "statement": "在标准判定问题定义下，$\\mathrm P\\subseteq\\mathrm{NP}$。此结论不解决反向包含是否成立。",
      "dependencies": [
        "axiom-computation"
      ],
      "idea": "多项式时间就能直接判定的问题，无须额外证据即可验证。",
      "steps": [
        "取任意语言 $L\\in\\mathrm P$。按定义有确定性算法 $A$，在长度 $n$ 的任意输入上至多 $p(n)$ 步完成并正确判定是否属于 $L$，其中 $p$ 为多项式。",
        "构造验证器 $V(x,w)$：忽略证据 $w$，直接运行 $A(x)$。对属于 $L$ 的 $x$，选择空证据即可使验证器接受；对不属于的 $x$，任何证据都不会被接受。",
        "证据长度为零，验证时间为多项式，满足 NP 的证据验证定义。因 $L$ 任意，得到包含关系。证明没有构造所有 NP 问题的多项式判定器，所以没有证明 P=NP。$\\square$"
      ]
    },
    {
      "id": "coding-radius",
      "topics": [
        "discrete/minimum-distance",
        "discrete/error-correcting-codes"
      ],
      "title": "最小距离与保证纠错半径",
      "statement": "有限长度码的最小 Hamming 距离为 $d\\ge1$，则可唯一纠正至多 $t=\\lfloor(d-1)/2\\rfloor$ 个符号错误，并保证检测至多 $d-1$ 个错误。",
      "dependencies": [
        "axiom-finite"
      ],
      "idea": "先逐坐标证明三角不等式，再排除两个码字的纠错球相交。",
      "steps": [
        "若坐标上 $x_i\\ne z_i$，则不可能同时有 $x_i=y_i$ 和 $y_i=z_i$，故该坐标至少计入 $x,y$ 或 $y,z$ 的差异。对坐标求和得到 Hamming 三角不等式。",
        "设收到字 $r$ 同时距两个不同码字 $c_1,c_2$ 不超过 $t$，则 $d(c_1,c_2)\\le d(c_1,r)+d(r,c_2)\\le2t<d$，与最小距离矛盾。因此半径 $t$ 内的码字唯一；若错误数至多 $t$，原码字必在其中，最近码字译码可正确恢复。",
        "若发生至少 1、至多 $d-1$ 位变化，结果不可能是另一个码字，否则两码字距离小于 $d$。通过检查收到字是否仍属于码本，即可保证检错。码只有一个码字时最小距离需另作约定，不在本陈述中。$\\square$"
      ]
    },
    {
      "id": "convex-local-global",
      "topics": [
        "applied/convex-optimization"
      ],
      "title": "凸函数局部极小即全局极小",
      "statement": "设 $C$ 是实赋范空间中的凸集，$f:C\\to\\mathbb R$ 为凸函数。若 $x_*$ 是相对于 $C$ 的局部极小点，则它是全局极小点。",
      "dependencies": [
        "axiom-vector",
        "axiom-metric"
      ],
      "idea": "若远处有更低点，沿线段朝它移动任意小一步也会降低目标。",
      "steps": [
        "局部极小意味着存在 $r>0$，使 $x\\in C$ 且 $\\|x-x_*\\|<r$ 时有 $f(x)\\ge f(x_*)$。反设存在 $y\\in C$ 且 $f(y)<f(x_*)$，显然 $y\\ne x_*$。",
        "取 $0<t<\\min(1,r/\\|y-x_*\\|)$，令 $z=(1-t)x_*+ty$。凸集条件保证 $z\\in C$，范数齐次性给出 $\\|z-x_*\\|=t\\|y-x_*\\|<r$。",
        "但凸性给出 $f(z)\\le(1-t)f(x_*)+tf(y)<f(x_*)$，与局部极小矛盾。故没有这样的 $y$，即全局极小。$\\square$"
      ]
    },
    {
      "id": "strict-convex-unique",
      "topics": [
        "applied/convex-optimization",
        "applied/nonlinear-optimization"
      ],
      "title": "严格凸目标的极小点唯一性",
      "statement": "严格凸实函数在凸集上至多有一个全局极小点；这里并不保证极小点存在。",
      "dependencies": [
        "axiom-vector"
      ],
      "idea": "两个不同最优点的中点，会由严格凸性产生更低目标值。",
      "steps": [
        "反设 $x\\ne y$ 均为最优点，记共同最优值为 $m$。凸集包含中点 $z=(x+y)/2$。",
        "严格凸性给出 $f(z)<[f(x)+f(y)]/2=m$，违背 $m$ 是全局最小值。因此最优点至多一个。存在性不能从此推出，例如正半轴上的严格凸函数 $f(x)=x^2$ 下确界为零但未取到。$\\square$"
      ]
    },
    {
      "id": "weak-duality",
      "topics": [
        "applied/duality",
        "applied/linear-programming"
      ],
      "title": "拉格朗日弱对偶",
      "statement": "最小化 $f(x)$，约束 $g_i(x)\\le0$、$h_j(x)=0$。若 $x$ 原问题可行，$\\lambda_i\\ge0$、$\\nu_j\\in\\mathbb R$，且 $q(\\lambda,\\nu)=\\inf_z[f(z)+\\sum_i\\lambda_i g_i(z)+\\sum_j\\nu_j h_j(z)]$，则 $q(\\lambda,\\nu)\\le f(x)$。",
      "dependencies": [
        "axiom-real"
      ],
      "idea": "下确界不超过任意点的值，可行点的约束项又不会增加目标。",
      "steps": [
        "对原可行点 $x$，每个 $\\lambda_i g_i(x)\\le0$，而 $\\nu_jh_j(x)=0$，故拉格朗日函数 $L(x,\\lambda,\\nu)\\le f(x)$。",
        "由下确界定义，$q(\\lambda,\\nu)\\le L(x,\\lambda,\\nu)$。两式连起来得到结论。该结论对每个可行 $x$ 和每个满足符号约束的乘子成立。",
        "若原可行集非空，对可行点取下确界，再对乘子取上确界，得对偶最优值不超过原最优值。允许对偶函数为负无穷，原问题无界时按扩展实数解释；本证明完全未使用凸性，也不声称强对偶。$\\square$"
      ]
    },
    {
      "id": "tikhonov-scalar",
      "topics": [
        "applied/regularized-inversion",
        "probability/regularization"
      ],
      "title": "一维 Tikhonov 正则化的解与稳定性",
      "statement": "给定 $y\\in\\mathbb R$、$\\lambda\\ge0$，目标 $J(x)=(x-y)^2+\\lambda x^2$ 唯一极小于 $x_\\lambda=y/(1+\\lambda)$，且解映射的 Lipschitz 常数为 $1/(1+\\lambda)$。",
      "dependencies": [
        "axiom-real"
      ],
      "idea": "完成平方，直接看出唯一极小点与扰动缩减比例。",
      "steps": [
        "展开并配方：$J(x)=(1+\\lambda)[x-y/(1+\\lambda)]^2+\\lambda y^2/(1+\\lambda)$。因为 $1+\\lambda>0$，平方项非负，且恰在 $x=y/(1+\\lambda)$ 取零，所以极小点存在且唯一。",
        "若观测从 $y$ 变为 $\\widetilde y$，相应解之差绝对值恰为 $|y-\\widetilde y|/(1+\\lambda)$，所以此映射满足给定 Lipschitz 估计，且任取不同输入均取等号。",
        "在无噪真实观测 $y=x_{\\rm true}$ 时，估计偏差为 $-\\lambda x_{\\rm true}/(1+\\lambda)$。这说明增大惩罚在缩小扰动的同时引入收缩偏差；此处证明一维问题，不把结论冒充一般逆算子的完整理论。$\\square$"
      ]
    },
    {
      "id": "darboux-derivative",
      "topics": [
        "analysis/derivatives",
        "analysis/fundamental-theorem-calculus"
      ],
      "title": "Darboux 定理：导数的介值性",
      "statement": "设 $f$ 在含 $[a,b]$ 的开区间可导，且 $f\\prime(a)<c<f\\prime(b)$。则存在 $x\\in(a,b)$ 使 $f\\prime(x)=c$。反向不等式同理，导数不必连续。",
      "dependencies": [
        "rolle",
        "derivative-continuity"
      ],
      "idea": "减去斜率为 c 的直线，端点导数符号排除在端点取最小值。",
      "steps": [
        "令 $g(t)=f(t)-ct$，则 $g\\prime(a)<0$、$g\\prime(b)>0$。由可导蕴含连续，$g$ 在闭区间连续；Rolle 定理证明中已展开的极值存在论证保证它在 $[a,b]$ 取最小值。",
        "因为 $g\\prime(a)<0$，按导数定义，充分小的正 $h$ 满足 $[g(a+h)-g(a)]/h<0$，故 $g(a+h)<g(a)$，所以 $a$ 不可能取最小值。",
        "因为 $g\\prime(b)>0$，充分小的负 $h$ 满足 $[g(b+h)-g(b)]/h>0$；乘以负 $h$ 得 $g(b+h)<g(b)$，所以 $b$ 也不取最小值。最小值只能在某个内部点 $x$ 达到。",
        "内部极小点的正向差商非负，负向差商非正，导数存在迫使其等于零。因此 $g\\prime(x)=0$，即 $f\\prime(x)=c$。若端点导数次序相反，对 $-f$ 用已证情形。$\\square$"
      ]
    },
    {
      "id": "variable-integral",
      "topics": [
        "analysis/fundamental-theorem-calculus",
        "analysis/multivariable-calculus"
      ],
      "title": "变积分限的求导公式",
      "statement": "设 $f$ 在开区间 $I$ 连续，$a(x),b(x)$ 在 $x_0$ 可导且附近取值于 $I$。则 $H(x)=\\int_{a(x)}^{b(x)}f(t)\\,dt$ 在 $x_0$ 可导，$H\\prime(x_0)=f(b(x_0))b\\prime(x_0)-f(a(x_0))a\\prime(x_0)$。",
      "dependencies": [
        "ftc-first",
        "chain-rule"
      ],
      "idea": "选同一个固定积分起点，把变上下限拆成两个复合函数。",
      "steps": [
        "固定 $c\\in I$，令 $F(u)=\\int_c^u f(t)\\,dt$。因 $I$ 是区间，两点之间的闭线段仍在 $I$，故连续可积性保证这些积分有定义，且第一基本定理在每个 $u\\in I$ 给出 $F\\prime(u)=f(u)$。",
        "按积分区间可加性与换向约定，无论 $a(x)$ 和 $b(x)$ 的大小关系如何，都有 $H(x)=F(b(x))-F(a(x))$。",
        "分别应用已证链式法则，再用差商的减法法则，得到 $H\\prime(x_0)=F\\prime(b(x_0))b\\prime(x_0)-F\\prime(a(x_0))a\\prime(x_0)$。代入 $F\\prime=f$ 即得公式。这里被积函数本身不依赖 x；若还依赖 x，必须另加积分号下求导所需条件与项。$\\square$"
      ]
    },
    {
      "id": "riemann-linearity",
      "topics": [
        "analysis/integration-calculus"
      ],
      "title": "Darboux 定义下的积分线性性",
      "statement": "若有界实函数 $f,g$ 在 $[a,b]$ 黎曼可积，则 $f+g$ 与任意实倍数 $cf$ 可积，且积分满足加法及数乘线性性。",
      "dependencies": [
        "axiom-riemann"
      ],
      "idea": "在共同精细分割上同时控制两个函数的上下和差，避免未经证明就使用黎曼和极限表述。",
      "steps": [
        "任意分割细分后，下和不减、上和不增：一个区间拆成小段时，每段下确界不小于原下确界，上确界不大于原上确界，乘长度相加即得。两个分割取端点并集就是共同细分。",
        "给定 $\\varepsilon>0$，可积性使 $f,g$ 各有分割满足上和减下和小于 $\\varepsilon/2$，取共同细分 $P$ 后两个界仍成立。逐区间有 $\\operatorname{osc}(f+g)\\le\\operatorname{osc}(f)+\\operatorname{osc}(g)$，所以 $U(f+g,P)-L(f+g,P)<\\varepsilon$，从而和可积。",
        "还满足 $L(f,P)+L(g,P)\\le L(f+g,P)\\le\\int(f+g)\\le U(f+g,P)\\le U(f,P)+U(g,P)$。因每个积分夹在自己的上下和之间，左右两端分别距 $\\int f+\\int g$ 不到 $\\varepsilon$。任意 $\\varepsilon$ 迫使 $\\int(f+g)=\\int f+\\int g$。",
        "当 $c>0$，上下确界及上下和直接乘 $c$；当 $c<0$，上、下确界交换并乘 $c$；$c=0$ 时为零函数。由定义分别得到可积性及 $\\int cf=c\\int f$。$\\square$"
      ]
    },
    {
      "id": "riemann-additivity",
      "topics": [
        "analysis/integration-calculus",
        "analysis/fundamental-theorem-calculus"
      ],
      "title": "黎曼积分的区间可加性",
      "statement": "若 $f$ 在 $[a,b]$ 黎曼可积，$a<c<b$，则两段限制都可积，且 $\\int_a^b f=\\int_a^c f+\\int_c^b f$；端点重合或反向积分由零区间与换向定义处理。",
      "dependencies": [
        "riemann-linearity"
      ],
      "idea": "把分割补入断点，每一边的上下和差都被全区间间隙控制。",
      "steps": [
        "给定 $\\varepsilon>0$，取原区间上上下和差小于 $\\varepsilon$ 的分割，加入 $c$ 得到细分，间隙不增。该分割左右两段的上下和差都非负，且相加为总间隙，因此每段间隙都小于 $\\varepsilon$。任意误差都能实现，所以两个限制可积。",
        "对于含 $c$ 的分割 $P$，上下和分别恰等于两段的对应和，因此 $L(f,P)\\le\\int_a^c f+\\int_c^b f\\le U(f,P)$。整段积分也在同一上下和之间。",
        "取间隙小于任意 $\\varepsilon$ 的这类分割，两个候选数的距离小于 $\\varepsilon$，所以相等。若只假设两段各可积，也可分别取小间隙分割再合并，以同样论证得到整段可积及相等式。$\\square$"
      ]
    },
    {
      "id": "ideal-quotient",
      "topics": [
        "algebra/ideals",
        "algebra/ring-structure"
      ],
      "title": "商环与理想判别",
      "statement": "交换环 R 的加法子群 I 能使陪集按 (a+I)(b+I)=ab+I 良定义，当且仅当 I 是理想；此时 R/I 为交换环。",
      "dependencies": [
        "def-ring-field"
      ],
      "idea": "检查换代表时乘积差是否仍落在被模掉的集合。",
      "steps": [
        "若 I 是理想，换代表为 a+i、b+j，则乘积差为 aj+bi+ij，三项都在 I；加法换代表后的差为 i+j，也在 I。因此两种运算良定义，结合、交换、分配律和单位元由 R 传下，给出商环。",
        "反过来，若陪集乘法良定义，对任意 r∈R、i∈I，有 i+I=0+I，因此 ri+I=(r+I)(i+I)=(r+I)(0+I)=I，即 ri∈I。结合已知加法子群条件，这正是理想。$\\square$"
      ]
    },
    {
      "id": "maximal-prime-quotient",
      "topics": [
        "algebra/prime-ideals",
        "algebra/ideals"
      ],
      "title": "素理想、极大理想与商结构",
      "statement": "真理想 I 为素理想当且仅当 R/I 是整环；I 为极大理想当且仅当 R/I 是域。",
      "dependencies": [
        "ideal-quotient"
      ],
      "idea": "将乘积为零与元素可逆分别翻译为理想中的包含关系。",
      "steps": [
        "商中 (a+I)(b+I)=0 等价于 ab∈I，而 a+I=0 等价于 a∈I。因此无非零零因子恰好翻译为素理想定义，且 I 真保证商非零。",
        "若 I 极大，取 a∉I。由 a 及 I 生成的理想 I+(a) 严格大于 I，故等于 R；于是 1=i+ra，某 i∈I、r∈R，商中 r+I 是 a+I 的逆，所以商是域。",
        "若商是域且 I⊊J⊆R，取 a∈J\\I。其商类可逆，所以有 r 使 ra-1∈I⊆J；又 ra∈J，故 1∈J，进而 J=R。这证明 I 极大。$\\square$"
      ]
    },
    {
      "id": "polynomial-division",
      "topics": [
        "algebra/polynomial-rings"
      ],
      "title": "域上多项式的带余除法",
      "statement": "域 F 上给定 f,g∈F[x]、g≠0，唯一存在 q,r，使 f=qg+r，且 r=0 或 deg r<deg g。",
      "dependencies": [
        "def-ring-field",
        "axiom-natural"
      ],
      "idea": "每次消去当前最高次项，次数严格下降；唯一性由次数比较得到。",
      "steps": [
        "若 f=0 或次数已低于 g，取 q=0、r=f。否则设两者首项为 ax^m、bx^n，m≥n。因 b 在域中可逆，减去 (a/b)x^(m-n)g 后，最高项抵消，余多项式次数严格下降。",
        "对次数归纳，有限次消元后得到低于 g 次数的余式；累计各次减去的倍式即商 q。过程中不会出现无限下降的非负整数次数。",
        "若 qg+r=q′g+r′，则 (q-q′)g=r′-r。若 q≠q′，左侧次数至少 deg g，而右侧非零时次数小于 deg g，矛盾；所以 q=q′，随之 r=r′。这里用到域上非零首项乘积非零，故乘积次数相加。$\\square$"
      ]
    },
    {
      "id": "root-bound",
      "topics": [
        "algebra/polynomial-rings",
        "numbertheory/points-over-finite-fields"
      ],
      "title": "根因式定理与根数上界",
      "statement": "域上 f(a)=0 当且仅当 x-a 整除 f；非零 n 次多项式在任意扩张域中至多有 n 个不同根。",
      "dependencies": [
        "polynomial-division"
      ],
      "idea": "一次除式的余式就是代入值，再逐根约去。",
      "steps": [
        "对 f 除以 x-a 得 f=(x-a)q+r，余式 r 为常数。代入 a 得 r=f(a)，所以根与整除等价。",
        "根数上界对次数归纳。非零常数没有根；n>0 时若没有根已经成立，否则取根 a 并写 f=(x-a)q。对另一个根 b≠a，0=(b-a)q(b)，域无零因子且 b-a 非零，故 q(b)=0。",
        "q 次数为 n-1，归纳假设使它至多有 n-1 个不同根；加上 a，f 至多有 n 个。论证在扩张域中照样成立，因为系数仍可嵌入该域。$\\square$"
      ]
    },
    {
      "id": "polynomial-bezout",
      "topics": [
        "algebra/polynomial-rings",
        "algebra/ideals"
      ],
      "title": "域上一元多项式理想为主理想",
      "statement": "F[x] 的每个理想都由一个多项式生成；两个不全为零的多项式 f,g 有首一最大公因式 d，且 d=uf+vg。",
      "dependencies": [
        "polynomial-division",
        "axiom-natural"
      ],
      "idea": "取非零理想中次数最低的元素，用余式的更小次数排除未被生成的部分。",
      "steps": [
        "零理想由零生成。非零理想 J 中取次数最小的非零 d，并乘首项系数的逆使其首一。对 h∈J 作带余除法，h=qd+r，则 r=h-qd∈J；若 r 非零便次数更小，矛盾。因此 J=(d)。",
        "对 J=(f,g) 应用第一部分，得首一生成元 d，且 d=uf+vg。因 f,g∈(d)，d 整除二者；若 c 整除二者，它就整除该线性组合 d。故 d 是首一最大公因式。$\\square$"
      ]
    },
    {
      "id": "irreducible-extension",
      "topics": [
        "algebra/field-extensions",
        "algebra/polynomial-rings",
        "algebra/finite-fields"
      ],
      "title": "不可约多项式构造单代数扩张",
      "statement": "若 p∈F[x] 首一不可约、次数 n≥1，则 F[x]/(p) 是域，在其中 α=x+(p) 满足 p(α)=0；它对 F 的基为 1,α,…,α^(n-1)，次数为 n。",
      "dependencies": [
        "polynomial-bezout",
        "polynomial-division",
        "maximal-prime-quotient"
      ],
      "idea": "低次代表由带余除法给出，可逆性由与不可约多项式互素给出。",
      "steps": [
        "对非零商类 f+(p)，有 p 不整除 f。不可约性使 gcd(f,p)=1，于是多项式贝祖等式给出 uf+vp=1，商中 u 是 f 的逆。因此商为域，常数嵌入也是单射，因为正次数 p 不整除非零常数。",
        "带余除法说明每个商类都有次数小于 n 的代表，故所列 n 个幂生成。若这些幂存在非零线性关系，就是一个次数小于 n 的非零多项式属于 (p)，与乘积次数性质矛盾，故线性无关。",
        "把 x 的商类记为 α，代入 p 得到零类，故 α 是一个根。所有商类均为 α 的多项式，因商是域，这也就是 F(α)。$\\square$"
      ]
    },
    {
      "id": "minimal-polynomial",
      "topics": [
        "algebra/field-extensions",
        "numbertheory/algebraic-numbers"
      ],
      "title": "最小多项式及单扩张次数",
      "statement": "若 α 在 F 的域扩张中代数，则存在唯一首一不可约最小多项式 mα；F(α) 同构于 F[x]/(mα)，次数为 deg mα。",
      "dependencies": [
        "polynomial-bezout",
        "root-bound",
        "first-isomorphism",
        "irreducible-extension"
      ],
      "idea": "把代入映射的核写成主理想，再用目标域无零因子证明生成元不可约。",
      "steps": [
        "代入映射 ev:F[x]→L，f↦f(α)，保持加乘。其核是理想，代数性使核非零。由主理想结论，它由唯一首一最低次多项式 m 生成；唯一性来自两个首一同次生成元相除后的零余式。",
        "若 m=uv，且两因子次数都正且小于 m，则 u(α)v(α)=0。L 为域，至少一因子在 α 处为零，与 m 最低次数矛盾。故 m 不可约。",
        "映射从商环到 F[α] 的对应 f+(m)↦f(α) 良定义、单射、满射且保持运算，这是直接核判别，不依赖把群同构误当环同构。不可约扩张定理说明商为域，所以 F[α] 已是域，等于 F(α)，并给出次数。$\\square$"
      ]
    },
    {
      "id": "tower-law",
      "topics": [
        "algebra/field-extensions",
        "algebra/fundamental-theorem-galois"
      ],
      "title": "有限域扩张的塔式公式",
      "statement": "若 F⊆E⊆L，两个相邻扩张有限，则 [L:F]=[L:E][E:F]。",
      "dependencies": [
        "basis-extension"
      ],
      "idea": "把上层基与下层基两两相乘，分别证明生成与无关。",
      "steps": [
        "设 e₁,…,e_r 为 E/F 的基，u₁,…,u_s 为 L/E 的基。对任意 z∈L，先写 z=Σ_j a_j u_j，a_j∈E，再写 a_j=Σ_i b_ij e_i，b_ij∈F；故所有 e_i u_j 生成 L/F。",
        "若 Σ_ij b_ij e_i u_j=0，先按 u_j 分组。上层基的无关性迫使每个 Σ_i b_ij e_i=0；再用下层基无关性，全部 b_ij=0。故乘积列是基，长度 rs，得到公式。$\\square$"
      ]
    },
    {
      "id": "splitting-field-exists",
      "topics": [
        "algebra/splitting-fields",
        "algebra/field-extensions"
      ],
      "title": "分裂域的存在与有限性",
      "statement": "任意域 F 上的非零多项式 f 有有限分裂域：某个有限扩张 L 由 f 的全部根生成，并在 L 中分解成一次因子。",
      "dependencies": [
        "irreducible-extension",
        "polynomial-division",
        "tower-law",
        "axiom-natural"
      ],
      "idea": "先添加一个不可约因子的根，再对剩余低次多项式归纳。",
      "steps": [
        "每个正次数多项式都含不可约因子：若本身不可约即得；否则分解为两个更低正次数因子，对次数作归纳得到。对某不可约因子 p，用商域构造添加根 α，扩张次数有限。",
        "在添加后的域里，f=(x-α)g，其中 g 次数减少一。对次数归纳，g 在另一个有限扩张中分裂；塔式公式保证总扩张仍有限。常数多项式已在 F 中分裂，作为归纳起点。",
        "最终大域中 f 全部分裂。取其中由所有根与 F 生成的子域 L，它仍有限维（是有限维空间的子空间），f 在其中分裂，且任何包含全部根的中间域必包含 L。因此 L 是所需最小分裂域。$\\square$"
      ]
    },
    {
      "id": "embedding-extension",
      "topics": [
        "algebra/splitting-fields",
        "algebra/galois-group"
      ],
      "title": "简单代数扩张的嵌入延拓",
      "statement": "设 τ:E→E′ 为域同构，α 在 E 上代数，最小多项式 m。若 β 是把 m 的系数逐一经 τ 映射所得 τ(m) 的一个根，则 τ 唯一延拓为 E(α)→E′(β)，并满足 α↦β。",
      "dependencies": [
        "minimal-polynomial"
      ],
      "idea": "用低次多项式表达元素，模最小多项式的关系在系数同构下被保持。",
      "steps": [
        "不可约性在系数同构下保持，否则 τ(m) 的分解可经 τ 的逆拉回 m 的非平凡分解。因此 τ(m) 是 β 的首一最小多项式。",
        "定义 p(α)↦τ(p)(β)。若 p(α)=q(α)，则 m 整除 p-q；映射系数后 τ(m) 整除 τ(p)-τ(q)，所以两个像相同，定义良好。相反若像相同，反向使用最小多项式及 τ 的逆，得到原元素相同，故单射。",
        "所有 E′(β) 元素都可写成 β 的多项式，系数来自 E′=τ(E)，所以满射。它保持运算且在 E 上为 τ。任一延拓若要送 α 到 β，必须按此式作用于其多项式，因此唯一。$\\square$"
      ]
    },
    {
      "id": "splitting-field-unique",
      "topics": [
        "algebra/splitting-fields"
      ],
      "title": "分裂域在基域同构意义下唯一",
      "statement": "若 L、M 都是同一非零 f∈F[x] 的分裂域，则存在固定 F 的域同构 L→M。",
      "dependencies": [
        "splitting-field-exists",
        "embedding-extension",
        "root-bound"
      ],
      "idea": "逐个把生成根映入另一分裂域；所有不同根的像最终恰好穷尽另一边的根。",
      "steps": [
        "把 L 写为 F(α₁,…,α_r)，列出 f 在 L 中的全部不同根。从 F 的恒等嵌入开始，假设已构造 E=F(α₁,…,α_j) 到 M 的嵌入 τ。",
        "α_(j+1) 的 E 上最小多项式 m 整除 f，因为带余除法在该根处余式也为零，最低次数迫使余式零。映射系数后 τ(m) 也整除 f。f 在 M 完全分裂，故其非常数因子 τ(m) 在 M 有根；可用根因式及逐次除法验证所有因子也分裂。选根并应用嵌入延拓引理。",
        "有限步得到 L→M 的嵌入，像包含 r 个不同根，因为嵌入单射。将 L 中的线性因子分解经嵌入映射后，f 已在像域中完全分裂。因此 M 中的任意根 β 代入这个线性因子乘积，因 M 无零因子，必等于某个已映入的根。故像含 M 的全部生成根，而 M 由这些根生成，嵌入遂满射，是同构。$\\square$"
      ]
    },
    {
      "id": "frobenius",
      "topics": [
        "algebra/finite-fields",
        "numbertheory/points-over-finite-fields"
      ],
      "title": "特征 p 的 Frobenius 同态",
      "statement": "在特征为素数 p 的交换环中，(a+b)^p=a^p+b^p；在域中 a↦a^p 是单射环同态，有限域中是自同构。",
      "dependencies": [
        "euclid-lemma",
        "binomial-count",
        "def-ring-field",
        "axiom-natural"
      ],
      "idea": "二项式中间系数都被 p 整除，因此在特征 p 中消失。",
      "steps": [
        "二项式公式可对指数归纳：乘以 a+b 后，邻近项系数相加给出组合数递推。对 0<k<p，整数恒等式 k!(p-k)!·C(p,k)=p!，左侧阶乘不被 p 整除，Euclid 引理迫使 p 整除 C(p,k)。",
        "因此特征 p 中全部中间项为零，得到加法保持；乘法保持来自交换性，单位元也保持。若 a^p=b^p，则 (a-b)^p=0；域无非零幂零元（反复使用无零因子），故 a=b，映射单射。",
        "有限集合到自身的单射必为满射：像与源等势，不能缺少任何元素。因此有限域上该映射双射，是域自同构。反复迭代亦给 (a+b)^(p^n)=a^(p^n)+b^(p^n)。$\\square$"
      ]
    },
    {
      "id": "finite-fields-classification",
      "topics": [
        "algebra/finite-fields",
        "numbertheory/points-over-finite-fields"
      ],
      "title": "有限域的阶数、存在性与唯一性",
      "statement": "每个有限域的元素数为 p^n，其中 p 素、n≥1。反之，每个 p^n 都有有限域，且同阶有限域彼此同构。",
      "dependencies": [
        "frobenius",
        "splitting-field-exists",
        "splitting-field-unique",
        "root-bound",
        "basis-extension",
        "lagrange"
      ],
      "idea": "先由素域计数，再在 x^(p^n)-x 的分裂域中把全部根识别为一个域。",
      "steps": [
        "有限域中 1 的加法生成子群有限，故存在最小正 p 使 p·1=0。若 p=ab 且 1<a,b<p，则 (a·1)(b·1)=0 而两因子非零，矛盾。因此 p 素，素域由整数模 p 构成。有限域作为该素域上的向量空间可取有限基（不断添加无关向量至多选完全部元素），若维数 n，则每个坐标有 p 种选择，共 p^n 个元素。",
        "给定 q=p^n，在 F_p 上取 f=x^q-x 的有限分裂域 L。形式导数 f′=q x^(q-1)-1=-1；若某根重复，则 (x-a)^2 整除 f，按乘法导数公式会使 f′(a)=0，矛盾。所以恰有 q 个不同根。形式导数的乘法法则直接逐项对单项式相乘验证。",
        "根集 S={a:a^q=a} 含 0、1。Frobenius 迭代说明对加法、减法、乘法封闭；非零 a 满足 (a^(-1))^q=(a^q)^(-1)=a^(-1)，故对逆也封闭。因此 S 是子域。分裂域由根生成，所以 L=S，恰有 q 个元素。",
        "若 K 是任意 q 元域，非零元素构成阶 q-1 的乘法群。Lagrange 定理用于单个元素生成的循环子群，给 a^(q-1)=1，故所有元素满足 a^q=a。K 因而也是 x^q-x 在素域上的分裂域。分裂域唯一性给出任意两 q 元域同构。$\\square$"
      ]
    },
    {
      "id": "automorphisms-independent",
      "topics": [
        "algebra/galois-group"
      ],
      "title": "不同域嵌入的线性无关性",
      "statement": "从域 L 到域 M 的不同嵌入 σ₁,…,σ_m，作为 L 上的 M 值函数，在 M 上线性无关。",
      "dependencies": [
        "def-ring-field",
        "axiom-vector"
      ],
      "idea": "从项数最少的假定线性关系出发，用乘一个测试元素再相减消掉一项。",
      "steps": [
        "若有非零关系，取非零项数最少的一条 Σ_i c_iσ_i(x)=0（对全部 x∈L），删去零系数。只有一项时在 x=1 代入迫使该系数为零，不可能，故项数至少二。",
        "选两不同嵌入 σ₁、σ_m，它们在某个 a∈L 上取值不同。把原关系在 ax 代入，再减去 σ_m(a) 乘以原关系，得到 Σ_(i<m)c_i[σ_i(a)-σ_m(a)]σ_i(x)=0。",
        "新关系删掉第 m 项，且第 1 项系数非零，所以是一条非零而项数更少的关系，与最小性矛盾。因此嵌入函数线性无关。$\\square$"
      ]
    },
    {
      "id": "artin-fixed-field",
      "topics": [
        "algebra/galois-group",
        "algebra/fundamental-theorem-galois"
      ],
      "title": "Artin 有限自同构群定理",
      "statement": "设 H 是域 L 的有限自同构群，F=L^H 是所有成员逐点固定的子域，则 [L:F]=|H|。",
      "dependencies": [
        "automorphisms-independent",
        "basis-extension",
        "rank-nullity"
      ],
      "idea": "一边用嵌入函数的独立性构造独立元素，另一边用最少支撑的方程解迫使系数落入固定域。",
      "steps": [
        "令 |H|=m，枚举 σ₁,…,σ_m。向量 (σ₁(x),…,σ_m(x)) 随 x∈L 张成整个 L^m：若张成真子空间，取其有限基扩成全空间基，给补基向量指定非零值即可构造非零线性泛函消灭原子空间，产生嵌入函数的非零线性关系，矛盾。",
        "故可选 x₁,…,x_m 使矩阵 (σ_i(x_j)) 列独立。若 Σ_j a_jx_j=0 且 a_j∈F，对各 σ_i 作用后系数不变，得到该可逆矩阵乘 a 为零，故所有 a_j=0。所以 [L:F]≥m。",
        "任取 m+1 个元素 y_j。齐次系统 Σ_jσ_i(y_j)c_j=0 有非零 L 值解，由秩—零化度可知。选非零系数个数最少的解，重新编号并缩放使 c₁=1。对任意 τ∈H，作用于方程组后 τσ_i 仅重排全部行，所以 (τ(c_j)) 也是解。",
        "两解相减得到首系数为零、其余支撑包含于原解支撑的解。若非零，将有更少非零系数，矛盾。因此全部 τ(c_j)=c_j，系数都在 F。取恒等自同构那一行，得 Σ_j y_jc_j=0，是 F 上非平凡关系。",
        "所以任何 m+1 个元素都相关，而前面有 m 个无关元素；它们必已张成（否则可再加一个无关元素），成为 F 基。故次数恰为 m。$\\square$"
      ]
    },
    {
      "id": "galois-embedding-count",
      "topics": [
        "algebra/galois-group",
        "algebra/field-extensions"
      ],
      "title": "有限正规可分扩张的自同构数",
      "statement": "若 L/F 有限、正规且可分，则 |Aut_F(L)|=[L:F]。任意中间域 E 的 F 嵌入 E→L 都能延拓为 L 的 F 自同构。",
      "dependencies": [
        "embedding-extension",
        "tower-law",
        "root-bound",
        "minimal-polynomial"
      ],
      "idea": "沿有限生成塔逐次选根，每层可选根数等于该层次数。",
      "steps": [
        "有限扩张可由有限个元素 α₁,…,α_r 生成，例如取一组向量空间基。设已把 E_j=F(α₁,…,α_j) 嵌入 L 并固定 F。下一元素在 E_j 上的最小多项式 m 整除它在 F 上的最小多项式 p。",
        "系数嵌入后 τ(m) 仍整除 p。正规性使 p 在 L 全部分裂，可分性使各根不同，所以 τ(m) 在 L 有恰好 deg m 个不同根。每个根由简单嵌入延拓引理给出一个且仅一个下一层嵌入。",
        "从 F 的恒等映射开始，每层选择数为该层次数，最终嵌入总数是次数之积，由塔式公式等于 [L:F]。每个最终嵌入是有限维 F 空间 L→L 的单射线性映射，秩—零化度使其满射，所以是自同构。",
        "若从中间域 E 的给定 F 嵌入开始，同样把 L 在 E 上有限生成。每次依然可用 F 上的可分且在 L 分裂的最小多项式来保证有根，因而至少一种延拓到 L；最后有限维单射使其自同构。这还证明任意中间 E 的上层 L/E 正规可分：E 上最小多项式整除对应的 F 上可分分裂多项式。$\\square$"
      ]
    },
    {
      "id": "galois-correspondence",
      "topics": [
        "algebra/fundamental-theorem-galois",
        "algebra/galois-group"
      ],
      "title": "有限伽罗瓦基本对应定理",
      "statement": "有限正规可分扩张 L/F 的群 G=Aut_F(L) 的子群 H 与中间域 E 通过 H↦L^H、E↦Aut_E(L) 互为逆序双射，且 [L:L^H]=|H|。",
      "dependencies": [
        "artin-fixed-field",
        "galois-embedding-count",
        "tower-law"
      ],
      "idea": "先分别证明两次取固定对象都回到原对象，再比较包含方向。",
      "steps": [
        "对中间域 E，上一引理给 L/E 正规可分，故 |Aut_E(L)|=[L:E]。记 H=Aut_E(L)，则 E⊆L^H。Artin 定理给 [L:L^H]=|H|=[L:E]，塔式公式迫使 [L^H:E]=1，故 L^H=E。",
        "对任意子群 H≤G，记 E=L^H。显然 H⊆Aut_E(L)。Artin 定理给 [L:E]=|H|，而上层正规可分使 |Aut_E(L)|=[L:E]，有限集包含且等大小，因此 Aut_E(L)=H。",
        "若 H₁⊆H₂，被较大群固定的元素更少，故 L^(H₂)⊆L^(H₁)。反之 E₁⊆E₂ 时，要固定较大域的条件更多，故 Aut_(E₂)(L)⊆Aut_(E₁)(L)。由已证互逆性得到完整的逆序双射。$\\square$"
      ]
    },
    {
      "id": "galois-normal-quotient",
      "topics": [
        "algebra/fundamental-theorem-galois",
        "algebra/homomorphisms-quotients"
      ],
      "title": "正规子群与伽罗瓦商群",
      "statement": "在有限伽罗瓦扩张 L/F 的对应中，E/F 正规当且仅当 H=Aut_E(L) 正规于 G；此时 E/F 也可分，且 G/H≅Aut_F(E)。",
      "dependencies": [
        "galois-correspondence",
        "galois-embedding-count",
        "first-isomorphism"
      ],
      "idea": "用共轭子群的固定域描述中间域在自同构下的移动，再限制自同构。",
      "steps": [
        "任取 σ∈G，逐点展开可知 σ(E)=L^(σHσ⁻¹)：若 x 固定于 H，则 σx 被每个 σhσ⁻¹ 固定，反向用 σ⁻¹ 同理。由基本对应，σ(E)=E 当且仅当 σHσ⁻¹=H。",
        "若 E/F 正规，对 α∈E，σ(α) 是其 F 上最小多项式的根，正规性使该根仍在 E；再用 σ⁻¹ 得 σ(E)=E，所以 H 正规。",
        "若 H 正规，则每个 σ 都保持 E。对 α∈E，它的 F 上最小多项式在 L 分裂，任一根 β∈L 给 F(α)→F(β) 的 F 同构；嵌入延拓引理可延拓为某 σ∈G，所以 β=σ(α)∈E。因此 E/F 正规；可分性从 L/F 继承。",
        "限制映射 G→Aut_F(E) 是群同态，其核恰 H。每个 E 的 F 自同构可延拓到 L，因此限制满射。群第一同构定理给出 G/H≅Aut_F(E)。$\\square$"
      ]
    },
    {
      "id": "finite-dimensional-compactness",
      "topics": [
        "algebra/spectral-decomposition",
        "geometry/compactness"
      ],
      "title": "有限维欧氏空间闭有界集的子列紧性",
      "statement": "在 R^n 或 C^n 中，每个有界序列有收敛子列；若序列属于闭集，极限仍属于该集。非空闭有界集上的连续实函数有最大最小值。",
      "dependencies": [
        "bolzano-weierstrass",
        "axiom-metric"
      ],
      "idea": "逐坐标抽取有限次子列，再用坐标收敛控制欧氏距离。",
      "steps": [
        "实情形先对第一坐标用实有界数列的收敛子列定理，再在该子列上对第二坐标抽取，依次共 n 次。最终子列的所有坐标都收敛，先前收敛性因进一步抽子列而保留。",
        "对任意 ε>0，有限个坐标都可在同一个下标后控制误差小于 ε/√n，因此欧氏距离小于 ε；n=0 时空间只有一点，无须估计。复情形分成 2n 个实坐标同证。闭集的补开，若极限不在闭集中，其一个邻域排除全体序列项，与收敛矛盾。",
        "连续函数若在这样的非空集合上无界，可选点 x_k 使 |f(x_k)|>k，抽收敛子列后连续性却给有限函数值极限，矛盾。故 f 有界。取逼近上确界的点列，再抽收敛子列并用连续性，得到某点达到上确界；对 -f 同证最小值。$\\square$"
      ]
    },
    {
      "id": "complex-cauchy-schwarz",
      "topics": [
        "analysis/hilbert-spaces",
        "algebra/vector-spaces"
      ],
      "title": "复内积的柯西—施瓦茨与三角不等式",
      "statement": "对第一变量线性的复内积，有 |〈u,v〉|≤‖u‖‖v‖；因此其诱导范数满足三角不等式。",
      "dependencies": [
        "def-complex",
        "axiom-real"
      ],
      "idea": "减去沿 v 的正交分量；复共轭的摆放由内积线性约定决定。",
      "steps": [
        "v=0 时不等式直接成立。否则令 c=〈u,v〉/‖v‖²。按第一变量线性、第二变量共轭线性展开，得 ‖u-cv‖²=‖u‖²-|〈u,v〉|²/‖v‖²≥0，移项开非负平方根即得结论。",
        "再展开 ‖u+v‖²=‖u‖²+2Re〈u,v〉+‖v‖²≤‖u‖²+2|〈u,v〉|+‖v‖²≤(‖u‖+‖v‖)²。两侧非负，开方得到三角不等式。正定性及齐次性也由内积公理直接得到，所以确为范数。$\\square$"
      ]
    },
    {
      "id": "gram-schmidt",
      "topics": [
        "algebra/basis-dimension",
        "analysis/hilbert-spaces"
      ],
      "title": "Gram–Schmidt 正交化",
      "statement": "任意有限线性无关列 v₁,…,v_n 可转化为标准正交列 e₁,…,e_n，使每个前缀张成空间相同；适用于实或复内积空间。",
      "dependencies": [
        "complex-cauchy-schwarz",
        "basis-extension"
      ],
      "idea": "按顺序减去已有方向上的投影，剩余向量不可能为零。",
      "steps": [
        "令 w₁=v₁、e₁=w₁/‖w₁‖。若已构造 e₁,…,e_(k-1)，令 w_k=v_k-Σ_(j<k)〈v_k,e_j〉e_j。对每个 i<k 取与 e_i 的内积，正交性使总和只剩第 i 项，故 〈w_k,e_i〉=0。",
        "若 w_k=0，则 v_k 属于此前 e_j 的张成空间，而按归纳它等于此前 v_j 的张成空间，违背原列无关。所以可令 e_k=w_k/‖w_k‖。",
        "新向量归一化后仍正交于此前各向量。由定义，新旧前缀的最后一向量只差此前张成空间中的组合及非零比例，故两前缀张成空间相同。有限归纳完成构造。$\\square$"
      ]
    },
    {
      "id": "hermitian-spectral",
      "topics": [
        "algebra/spectral-decomposition",
        "algebra/eigenvalues",
        "analysis/spectral-theory"
      ],
      "title": "有限维 Hermitian 谱定理",
      "statement": "复 Hermitian 矩阵 A 有一组标准正交特征向量基，所有特征值为实数；实对称矩阵可取实标准正交特征基。",
      "dependencies": [
        "finite-dimensional-compactness",
        "gram-schmidt",
        "complex-cauchy-schwarz"
      ],
      "idea": "在单位球面最大化实 Rayleigh 商，再把算子限制到正交补上归纳。",
      "steps": [
        "Hermitian 性使 〈Av,v〉 等于其共轭，所以为实数。在单位球面上它连续；球面闭有界，前一紧性结论保证存在单位向量 u 取最大值 λ。零维情形为空基，以下设维数正。",
        "取 v⊥u，考虑实 t 和单位化向量 (u+tv)/‖u+tv‖。其 Rayleigh 商是 [λ+2t Re〈Av,u〉+t²〈Av,v〉]/[1+t²‖v‖²]。在 t=0 取极大，正负差商迫使一次项为零，故 Re〈Av,u〉=0。复情形再以 iv 替换 v，得到虚部也为零；实情形第一步已足够。",
        "令 w=Au-λu，则 〈w,u〉=0。由上一结论及伴随恒等式，对 v=w 有 〈Aw,u〉=〈w,Au〉=〈w,w+λu〉=‖w‖²=0，所以 w=0，即 Au=λu。",
        "若 v⊥u，则 〈Av,u〉=〈v,Au〉=0，因此 u 的正交补被 A 保持，限制算子仍 Hermitian。用 Gram–Schmidt 取正交补的标准基，其维数比原空间小一；归纳对限制算子对角化，再加 u，得到全空间正交特征基。每个特征值均由相应单位向量的实 Rayleigh 值给出，故为实数。$\\square$"
      ]
    },
    {
      "id": "normal-spectral",
      "topics": [
        "algebra/spectral-decomposition",
        "analysis/spectral-theory"
      ],
      "title": "有限维复正规算子的谱定理",
      "statement": "复矩阵 A 可被酉矩阵对角化，当且仅当 A 正规，即 A*A=AA*。",
      "dependencies": [
        "hermitian-spectral"
      ],
      "idea": "把正规算子拆成两个可交换的 Hermitian 部分，在每个特征空间内再次对角化。",
      "steps": [
        "定义 B=(A+A*)/2、C=(A-A*)/(2i)，二者 Hermitian 且 A=B+iC。直接展开得 AA*-A*A=2i(CB-BC)，所以 A 正规当且仅当 BC=CB。",
        "由 Hermitian 谱定理，空间分成 B 的互相正交特征子空间。若 Bv=bv，则 B(Cv)=C(Bv)=bCv，所以 C 保持每个子空间。C 在每个子空间上的限制仍 Hermitian，可再取其中的标准正交特征基。",
        "合并这些基得到 B、C 的共同标准正交特征基，因此 A=B+iC 在同一基中对角，酉对角化成立。反向若 A=UDU*、U 酉而 D 对角，则 A*A=UD*DU*=UDD*U*=AA*，因为对角矩阵彼此可交换。$\\square$"
      ]
    },
    {
      "id": "projection-closed-subspace",
      "topics": [
        "analysis/hilbert-spaces"
      ],
      "title": "Hilbert 空间闭子空间的正交投影定理（实值）",
      "statement": "实 Hilbert 空间 H 的非空闭线性子空间 M，对每个 x∈H 唯一存在 m∈M，使 x-m⊥M；该 m 唯一最小化到 x 的距离。",
      "dependencies": [
        "cauchy-schwarz",
        "def-complete",
        "axiom-dependent-choice"
      ],
      "idea": "最小化序列由平行四边形恒等式成为柯西列；闭性与完备性使极限仍留在子空间。",
      "steps": [
        "令 d=inf_(v∈M)‖x-v‖，取 m_n∈M 使 ‖x-m_n‖²→d²。平行四边形恒等式由内积展开得到；用于 x-m_n 与 x-m_k 后，因 (m_n+m_k)/2∈M，得到 ‖m_n-m_k‖²≤2‖x-m_n‖²+2‖x-m_k‖²-4d²→0。",
        "故 m_n 柯西，H 完备给出极限 m；M 闭保证 m∈M。由三角不等式的反向形式，‖x-m‖=d。任取 v∈M，实数 t 下 ‖x-m-tv‖²≥d²；展开并取正负足够小 t，迫使 〈x-m,v〉=0。",
        "反之若 x-m⊥M，则对任意 n∈M，‖x-n‖²=‖x-m‖²+‖m-n‖²，所以 m 是最小点，且等号只在 n=m 时成立。这同时证明唯一性。$\\square$"
      ]
    },
    {
      "id": "riesz-representation",
      "topics": [
        "analysis/hilbert-spaces",
        "analysis/linear-operators"
      ],
      "title": "实 Hilbert 空间的 Riesz 表示定理",
      "statement": "实 Hilbert 空间 H 上任意有界线性泛函 ℓ，唯一存在 y∈H，使 ℓ(x)=〈x,y〉，且 ‖ℓ‖=‖y‖。",
      "dependencies": [
        "projection-closed-subspace",
        "cauchy-schwarz"
      ],
      "idea": "核是闭子空间，从一个核外向量提取一条垂直方向，线性泛函只沿该方向变化。",
      "steps": [
        "若 ℓ=0，取 y=0。否则选 z 使 ℓ(z)≠0。有界性给 |ℓ(x)|≤C‖x‖，故收敛列的泛函值收敛，核 M=ker ℓ 是闭子空间。投影定理使 z=m+u，其中 m∈M、u⊥M，且 ℓ(u)=ℓ(z)≠0。",
        "对任意 x，向量 x-[ℓ(x)/ℓ(u)]u 属于 M，与 u 正交。因此 〈x,u〉=[ℓ(x)/ℓ(u)]‖u‖²。令 y=[ℓ(u)/‖u‖²]u，即得到 ℓ(x)=〈x,y〉。",
        "若 y、y′ 都表示同一泛函，对 x=y-y′ 代入得 ‖y-y′‖²=0，故唯一。柯西—施瓦茨给 ‖ℓ‖≤‖y‖；y≠0 时取 x=y/‖y‖ 得到反向等号，y=0 时两者均零。$\\square$"
      ]
    },
    {
      "id": "linear-bounded-continuous",
      "topics": [
        "analysis/linear-operators",
        "analysis/normed-spaces"
      ],
      "title": "线性算子的有界性与连续性等价",
      "statement": "赋范空间之间的线性算子 T 有界，当且仅当在零点连续，也当且仅当处处连续。",
      "dependencies": [
        "axiom-vector",
        "axiom-metric"
      ],
      "idea": "利用缩放把零点附近的一个误差控制放大为全空间线性估计。",
      "steps": [
        "若 ‖Tx‖≤C‖x‖，则 ‖Tx-Ty‖≤C‖x-y‖，所以处处连续。处处连续当然包含零点连续。",
        "反向设零点连续，取 δ>0，使 ‖z‖<δ 时 ‖Tz‖<1。对非零 x，令 z=δx/(2‖x‖)，其范数为 δ/2，所以 ‖Tx‖=(2‖x‖/δ)‖Tz‖≤(2/δ)‖x‖。x=0 时同样成立，故有界。$\\square$"
      ]
    },
    {
      "id": "continuous-functions-complete",
      "topics": [
        "analysis/banach-spaces",
        "analysis/function-sequences"
      ],
      "title": "连续函数的一致范数空间完备",
      "statement": "紧致度量空间 K 上的连续实函数组成的空间 C(K)，在一致范数下是巴拿赫空间。",
      "dependencies": [
        "cauchy-completeness",
        "uniform-continuous-limit",
        "heine-cantor"
      ],
      "idea": "一致柯西性先给各点极限，再把同一阈值传给全域，得到一致极限。",
      "steps": [
        "先说明范数有限：连续函数在每点附近与其点值相差小于 1，用紧致性的有限子覆盖即可取有限个局部界的最大值，控制全域。范数三公理由绝对值和上确界直接得到。空 K 的函数空间视为零空间即可。",
        "若 f_n 在一致范数下柯西，则固定 x 后 f_n(x) 是实柯西列，存在极限 f(x)。任取 ε>0，选 N 使 m,n≥N 时全域 |f_n(x)-f_m(x)|<ε/2。固定 n≥N、x 后令 m→∞，得到 |f_n(x)-f(x)|≤ε/2<ε。",
        "该 N 不依赖 x，所以 f_n 一致收敛到 f。连续函数一致极限连续，因此 f∈C(K)，并在一致范数下收敛。每个柯西列都有空间内极限，证明完备。$\\square$"
      ]
    },
    {
      "id": "banach-contraction",
      "topics": [
        "analysis/banach-spaces",
        "analysis/odes"
      ],
      "title": "Banach 压缩映射定理",
      "statement": "非空完备度量空间 X 上，若 T 满足 d(Tx,Ty)≤q d(x,y)，0≤q<1，则有唯一不动点 x*。从任意 x₀ 迭代 x_(n+1)=Tx_n 都收敛到它，且 d(x_n,x*)≤q^n d(x₁,x₀)/(1-q)。",
      "dependencies": [
        "def-complete",
        "archimedean",
        "axiom-metric"
      ],
      "idea": "相邻步长按几何级数衰减，尾和给出柯西性和显式误差。",
      "steps": [
        "由压缩性归纳，d(x_(n+1),x_n)≤q^n d(x₁,x₀)。若 m>n，三角不等式及有限等比和给 d(x_m,x_n)≤q^n d(x₁,x₀)/(1-q)。",
        "当 0<q<1，设 r=1/q>1，归纳得 r^n≥1+n(r-1)，故 q^n→0；q=0 的情况一步后已常值。所以序列柯西，完备性给 x_n→x*。",
        "d(Tx*,x*)≤d(Tx*,Tx_n)+d(x_(n+1),x*)≤q d(x*,x_n)+d(x_(n+1),x*)→0，故 Tx*=x*。若 y* 也是不动点，则 d(x*,y*)≤q d(x*,y*)，因 q<1，只能距离为零。",
        "在尾和估计中让 m→∞，距离的反三角不等式保证左侧趋于 d(x*,x_n)，得到所述误差。$\\square$"
      ]
    },
    {
      "id": "picard-lindelof",
      "topics": [
        "analysis/odes",
        "analysis/initial-boundary"
      ],
      "title": "Picard–Lindelöf 局部存在唯一性（标量版）",
      "statement": "设 f 在矩形 |t-t₀|≤a、|y-y₀|≤b 上连续，a,b>0，且对 y 具有统一 Lipschitz 常数 L≥0。则初值问题 y′=f(t,y)、y(t₀)=y₀ 在某个 |t-t₀|≤h 上有唯一取值于该矩形的 C¹ 解。",
      "dependencies": [
        "banach-contraction",
        "continuous-functions-complete",
        "finite-dimensional-compactness",
        "ftc-first",
        "ftc-second",
        "supremum-integral"
      ],
      "idea": "将微分问题等价为积分不动点，并选短时间让积分算子既不出界又压缩。",
      "steps": [
        "矩形闭有界，连续性和有限维极值结论给 |f|≤M。选 0<h≤a，使 hM≤b 且 hL<1；M 或 L 为零时相应条件无需限制，始终可取足够小正 h。",
        "令 X 为区间 [t₀-h,t₀+h] 上满足 ‖u-y₀‖∞≤b 的连续函数。它非空（含常函数），是 C 空间的闭子集，所以完备：柯西列在大空间收敛，范数闭条件把极限留在 X。",
        "定义 Tu(t)=y₀+∫_(t₀)^t f(s,u(s))ds。被积函数连续；积分估计给 ‖Tu-y₀‖∞≤hM≤b，故自映射。Lipschitz 条件再给 ‖Tu-Tv‖∞≤hL‖u-v‖∞，所以是压缩。",
        "压缩映射定理给唯一不动点 u。第一基本定理说明该不动点 C¹ 且 u′(t)=f(t,u(t))，初值也直接成立。反向任何满足同样区间与值域条件的 C¹ 解，由第二基本定理都是不动点，因此相同。这是局部标量结论，不把它当成任意非 Lipschitz 方程或全局解的证明。$\\square$"
      ]
    },
    {
      "id": "termwise-differentiation",
      "topics": [
        "analysis/function-sequences",
        "analysis/series"
      ],
      "title": "函数列逐项求导定理",
      "statement": "设 f_n 在 [a,b] 连续、内部 C¹，导数连续延到闭区间；若 f_n′ 一致收敛到 g，且某点 c 的 f_n(c) 收敛到 α，则 f_n 一致收敛到 C¹ 函数 f，且 f′=g。",
      "dependencies": [
        "uniform-continuous-limit",
        "uniform-integration",
        "ftc-first",
        "ftc-second",
        "supremum-integral"
      ],
      "idea": "用同一积分起点恢复函数，把导数的全域误差转成函数全域误差。",
      "steps": [
        "g 是连续函数的一致极限，因此连续。定义 f(x)=α+∫_c^x g(t)dt。第二基本定理给 f_n(x)=f_n(c)+∫_c^x f_n′(t)dt。",
        "两式相减并用积分估计，得到 |f_n(x)-f(x)|≤|f_n(c)-α|+(b-a)‖f_n′-g‖∞，右侧不依赖 x 且趋零，所以收敛一致。第一基本定理给 f′=g，端点按单侧解释。$\\square$"
      ]
    },
    {
      "id": "matrix-exponential",
      "topics": [
        "algebra/exponential-map",
        "analysis/linear-operators"
      ],
      "title": "矩阵指数的收敛、微分与群性质",
      "statement": "有限维实或复方阵 A 的级数 e^(tA)=Σ_(k≥0)t^kA^k/k! 对所有实 t 收敛，在有界 t 区间一致收敛，并满足 E′=AE=EA、E(0)=I、E(t+s)=E(t)E(s)、E(t)^(-1)=E(-t)。",
      "dependencies": [
        "weierstrass-m",
        "termwise-differentiation",
        "complex-cauchy-schwarz"
      ],
      "idea": "用矩阵的次乘性范数控制幂级数，再用微分方程的唯一性式估计证明群性质。",
      "steps": [
        "取欧氏算子范数；由定义 ‖AB‖≤‖A‖‖B‖，并由逐坐标实数完备性知有限维矩阵空间完备。对 |t|≤R，每项范数≤R^k‖A‖^k/k!。该数值级数的项在 k 足够大后，相邻比值≤1/2，尾部受几何级数控制，故收敛。M 判别法逐坐标给一致收敛。",
        "导数级数同样被 ‖A‖Σ_(k≥1)R^(k-1)‖A‖^(k-1)/(k-1)! 控制。用逐项求导定理于部分和（在零点都为 I），得到 E′=AE=EA。",
        "对矩阵值线性方程 X′=AX、X(0)=C，唯一性可直接证明：若差 D 初值零，短区间长度 h 满足 h‖A‖<1，则积分估计给 ‖D‖∞≤h‖A‖‖D‖∞，故为零；有限拼接覆盖任意有界时间区间。",
        "固定 s，E(t+s) 与 E(t)E(s) 都满足 X′=AX，且 t=0 值为 E(s)，所以二者相同。取 s=-t 得乘积 I；交换参数也得另一顺序为 I，故 E(-t) 为逆。$\\square$"
      ]
    },
    {
      "id": "complex-basic-rules",
      "topics": [
        "analysis/holomorphic-functions"
      ],
      "title": "复可导函数的连续性及代数法则",
      "statement": "复可导蕴含连续；和、积及分母非零时的商都复可导，且满足与实微分同形式的求导规则。",
      "dependencies": [
        "def-complex",
        "def-contour"
      ],
      "idea": "直接拆解差商，连续性让乘积与倒数中的函数值趋向点值。",
      "steps": [
        "若差商 Q(h)→f′(a)，则它在小邻域有界，f(a+h)-f(a)=hQ(h)→0，故连续。和的规则来自差商相加。",
        "积差商可写为 f(a+h)[g(a+h)-g(a)]/h+g(a)[f(a+h)-f(a)]/h，连续性与极限乘法给 (fg)′=fg′+gf′。极限乘法可由 |uv-u₀v₀|≤|u||v-v₀|+|v₀||u-u₀| 的有界因子估计直接验证。",
        "若 g(a)≠0，连续性使附近分母也非零，倒数差商为 -[g(a+h)-g(a)]/[h g(a+h)g(a)]，极限为 -g′(a)/g(a)²；再与乘法合并得到商法则。$\\square$"
      ]
    },
    {
      "id": "contour-estimate",
      "topics": [
        "analysis/cauchy-integral-theorem",
        "analysis/residues"
      ],
      "title": "曲线积分的长度估计与端点公式",
      "statement": "分段 C¹ 曲线 γ 上连续 f 满足 |∫γ f dz|≤maxγ|f|·length(γ)。若 F 在曲线附近复可导、F′=f 连续，则 ∫γ f dz=F(终点)-F(起点)。",
      "dependencies": [
        "def-contour",
        "supremum-integral",
        "ftc-second",
        "complex-cauchy-schwarz"
      ],
      "idea": "分别用复积分的实方向投影估计与沿参数的链式法则。",
      "steps": [
        "记复积分 I。若 I≠0，令单位复数 u=共轭(I)/|I|，则 |I|=Re(uI)=∫Re(uf(γ)γ′)≤∫|f(γ)||γ′|≤maxγ|f|∫|γ′|；I=0 时直接成立。积分单调性由实上下和定义给出，分段分别相加。",
        "复可导的线性逼近式 F(z+h)-F(z)=F′(z)h+o(|h|)，代入实参数增量 γ(t+s)-γ(t)=γ′(t)s+o(|s|)，给出复合的实参数导数 f(γ(t))γ′(t)。对各段实、虚部分用微积分第二基本定理，再望远镜相加，得到端点公式。",
        "特别地，常数和一次函数的闭路积分为零：它们分别有原函数 cz 与 z²/2。这个有限多项式事实在下文三角形证明中使用，不依赖待证柯西定理。$\\square$"
      ]
    },
    {
      "id": "goursat-triangle",
      "topics": [
        "analysis/cauchy-integral-theorem",
        "analysis/holomorphic-functions"
      ],
      "title": "Goursat 三角形定理",
      "statement": "若 f 在包含闭三角形 T 的开集上全纯，则正向边界积分 ∫∂T f dz=0。不要求 f′ 连续。",
      "dependencies": [
        "contour-estimate",
        "finite-dimensional-compactness",
        "complex-basic-rules",
        "archimedean"
      ],
      "idea": "四分三角形保留积分最大的一块，复可导误差与边界缩小速率恰好抵消。",
      "steps": [
        "连接三边中点把 T 分成四个相似小三角形。内部边方向相反而抵消，故原边界积分等于四子边界积分之和。可选一个子三角形，其积分绝对值至少为原来的四分之一。递归得到嵌套 T_n，周长与直径均为原来的 2^(-n)，且 |I(T_n)|≥4^(-n)|I(T)|。",
        "选 x_n∈T_n，用有限维有界子列定理取得极限 a。每个固定 T_k 闭，尾部点都在其中，故 a 属于全部 T_k；直径趋零保证唯一。该点在 f 全纯的开集内。",
        "对任意 ε>0，复可导性给 f(z)=f(a)+f′(a)(z-a)+r(z)，在充分近时 |r(z)|≤ε|z-a|。足够大 n 的整个 T_n 都位于该邻域，且 a∈T_n。常数和一次项的闭路积分为零。",
        "由长度估计，|I(T_n)|≤ε diam(T_n)perimeter(T_n)=ε diam(T)perimeter(T)/4^n。与第一步的下界合并，得 |I(T)|≤ε diam(T)perimeter(T)。ε 任意，故原积分为零。退化三角形由线段往返相消直接成立。$\\square$"
      ]
    },
    {
      "id": "goursat-one-point",
      "topics": [
        "analysis/cauchy-integral-theorem"
      ],
      "title": "允许一个连续异常点的三角形积分定理",
      "statement": "若 g 在开集 U 连续、除至多一点 a 外全纯，则对任意闭三角形 T⊆U，其边界积分为零。",
      "dependencies": [
        "goursat-triangle",
        "contour-estimate",
        "finite-dimensional-compactness"
      ],
      "idea": "均匀细分，只保留可能触及异常点的少数小三角形，它们边界总长度趋零。",
      "steps": [
        "若异常点不在 T 中，直接用 Goursat。否则把 T 做 n 次四等分，得到边长比例 2^(-n) 的规则三角网格。任一点最多属于六个小三角形的闭包：内部网格顶点周围为六块，边或小三角内部更少；仿射变换回任意非退化 T 不改变此组合计数。",
        "除闭包含 a 的这些小三角形外，其他块周围有避开 a 的开邻域，故积分都为零。求和消去全部内部边，原积分等于至多六个异常小块的积分之和。",
        "g 在紧闭三角形上连续有界，设 |g|≤M。长度估计给原积分绝对值≤6M perimeter(T)2^(-n)，令 n→∞ 得零。退化情形仍为往返相消。$\\square$"
      ]
    },
    {
      "id": "convex-primitive",
      "topics": [
        "analysis/cauchy-integral-theorem",
        "analysis/integration-calculus"
      ],
      "title": "凸域上的原函数与闭路积分为零",
      "statement": "凸开域 U 上连续 g 若每个三角形边界积分为零，则 g 有复原函数；所以 U 内任意分段 C¹ 闭曲线的积分为零。特别适用于全纯函数及连续且只有一个全纯异常点的函数。",
      "dependencies": [
        "goursat-triangle",
        "goursat-one-point",
        "contour-estimate"
      ],
      "idea": "固定起点，沿直线段积分；三角形关系把原函数增量化为短线段积分。",
      "steps": [
        "固定 z₀∈U，定义 F(z)=∫_[z₀,z] g(w)dw。凸性保证所有线段与相关三角形都在 U。三角形边界积分为零给 F(z+h)-F(z)=∫_[z,z+h]g(w)dw，只要 z+h 邻近且在 U。",
        "用参数 w=z+th，得到差商 [F(z+h)-F(z)]/h=∫₀¹g(z+th)dt。连续性使右侧趋于 g(z)：任意误差在足够短整条线段上一致控制，实参数积分也被同一误差控制。故 F′=g。",
        "原函数端点公式使所有闭曲线积分为零。全纯 g 的连续性及三角形条件由前述结果保证；单异常点情形由允许一个连续异常点的定理保证。此处只证明凸域版本，不冒充任意有洞区域的结论。$\\square$"
      ]
    },
    {
      "id": "cauchy-square-formula",
      "topics": [
        "analysis/cauchy-integral-theorem",
        "analysis/holomorphic-functions"
      ],
      "title": "柯西积分公式（方形围道版）",
      "statement": "设 f 在凸开域 U 全纯，正向轴平行正方形 Q 的闭区域在 U 内，z 在其内部，则 f(z)=(2πi)⁻¹∫∂Q f(w)/(w-z)dw。",
      "dependencies": [
        "convex-primitive",
        "complex-basic-rules",
        "goursat-triangle",
        "contour-estimate"
      ],
      "idea": "差商填补中心后积分为零，剩下的基本核积分可用内方形和四条直边直接计算。",
      "steps": [
        "定义 g(w)=[f(w)-f(z)]/(w-z)，在 w=z 填为 f′(z)。复可导定义保证 g 在该点连续；在别处商法则使其全纯。凸域原函数结论给 ∫∂Q g=0，故 ∫∂Q f(w)/(w-z)dw=f(z)∫∂Q1/(w-z)dw。",
        "在 Q 内取以 z 为中心的更小轴平行正方形 S。Q 与 S 之间可用有限矩形分块再剖为三角形，所有这些三角形避开 z。对核 1/(w-z) 用 Goursat 后内部边相消，得到外边界积分等于内方形积分。",
        "把 z 平移为零，S 的右边参数为 r+it，t 从 -r 到 r。其核积分为 ∫_-r^r i/(r+it)dt=∫_-r^r[t+ir]/(r²+t²)dt。实部为奇函数积分零，虚部换元为 i∫_-1^1(1+s²)⁻¹ds=iπ/2。",
        "其他三边旋转因子在分子分母抵消，积分与右边相同，所以总和为 2πi。π 按基础约定为一个正实积分，非零，故可除，得到公式。$\\square$"
      ]
    },
    {
      "id": "holomorphic-taylor",
      "topics": [
        "analysis/holomorphic-functions",
        "analysis/analytic-continuation"
      ],
      "title": "全纯函数的局部幂级数与任意阶可导性",
      "statement": "若 f 在凸开域中的方形 Q 附近全纯，中心为 c、中心到边距离 r，则 |z-c|<r 时 f(z)=Σ_(n≥0)a_n(z-c)^n，a_n=(2πi)⁻¹∫∂Q f(w)/(w-c)^(n+1)dw，且 a_n=f^(n)(c)/n!。",
      "dependencies": [
        "cauchy-square-formula",
        "uniform-integration",
        "contour-estimate",
        "weierstrass-m"
      ],
      "idea": "在积分核里展开一致收敛的几何级数，再用系数界逐次证明可微。",
      "steps": [
        "固定 ρ<r。在边界 w 上有 |w-c|≥r，对 |z-c|≤ρ，几何级数 1/(w-z)=Σ_(n≥0)(z-c)^n/(w-c)^(n+1) 一致收敛，尾和被 r⁻¹(ρ/r)^(N+1)/(1-ρ/r) 控制。乘连续有界 f 后仍一致；各边按实参数用一致积分交换，得到幂级数及所列系数。",
        "设 M=max∂Q|f|，长度 L=perimeter(Q)。长度估计给 |a_n|≤LM/(2πr^(n+1))。因此任意较小闭圆盘上，形式导数级数 Σ_(n≥1)n a_n(z-c)^(n-1) 一致绝对收敛，因为几何级数乘任意固定次多项式 n^k 仍收敛（充分大 n 的相邻比可严格界在 1 以下）。",
        "说明形式导数确为复导数：对每项多项式，沿 h 的线段有 p(z+h)-p(z)=h∫₀¹p′(z+th)dt，这是单项式的有限代数展开或实参数基本定理。先对有限部分和成立，再用函数与导数级数的局部一致收敛取极限。",
        "故 [f(z+h)-f(z)]/h 等于连续导数级数在短线段上的平均值，令复 h→0 得其在 z 的值。更高形式导数同样局部一致收敛，可归纳重复。因此 f 任意阶复可导，代入 z=c 只有第 n 项留下，f^(n)(c)=n!a_n。$\\square$"
      ]
    },
    {
      "id": "holomorphic-identity",
      "topics": [
        "analysis/analytic-continuation",
        "analysis/holomorphic-functions"
      ],
      "title": "恒等定理与解析延拓唯一性",
      "statement": "连通开域 Ω 内的两个全纯函数，若在 Ω 中有聚点的点集上相等，则在整个 Ω 相等。",
      "dependencies": [
        "holomorphic-taylor",
        "complex-basic-rules"
      ],
      "idea": "非零幂级数在零点附近有最低阶非零项，因此零点不能聚集；再用连通性传播局部恒等。",
      "steps": [
        "取差 h。若在点 a 的局部展开中有最低非零系数 a_m，则 h(z)=(z-a)^m k(z)，k 连续且 k(a)=a_m≠0，故足够近时 k 不为零。于是 a 附近除 a 本身外没有零点。",
        "题设给一个域内零点聚点，所以该点的展开系数必须全零，从而其一个邻域 h 恒零。令 S 为 h 在某邻域恒零的点集，它非空且开。",
        "若 a 是 S 在 Ω 中的闭包点且不属于 S，可取 S 中不同点趋于 a（度量邻域每次取更近点），这些都是 h 的零点。第一步迫使 a 的局部展开全零，进而 a∈S，矛盾。故 S 在 Ω 中也闭。",
        "连通空间的非空同时开闭子集只能是全体，否则它与非空补集构成分离。因此 S=Ω，两函数全域相等。连通重叠区域上两个候选解析延拓因原有开子域上相同而必须一致。$\\square$"
      ]
    },
    {
      "id": "liouville",
      "topics": [
        "analysis/holomorphic-functions"
      ],
      "title": "Liouville 定理",
      "statement": "整个复平面上有界的全纯函数必为常数。",
      "dependencies": [
        "holomorphic-taylor",
        "contour-estimate",
        "mean-value"
      ],
      "idea": "可任意放大系数积分的围道，使一阶导数的界趋于零。",
      "steps": [
        "设全平面 |f|≤M。以任意 a 为中心取到边距离 r 的正方形，周长为 8r。局部幂级数的导数系数与长度估计给 |f′(a)|≤8rM/(2πr²)=4M/(πr)。",
        "r 可任意大，故 f′(a)=0。对任意两点 a,b，实参数 t↦f(a+t(b-a)) 的导数为 f′(a+t(b-a))(b-a)=0；其实部与虚部在 [0,1] 连续可导，中值定理说明都为常数，所以 f(a)=f(b)。$\\square$"
      ]
    },
    {
      "id": "fundamental-algebra",
      "topics": [
        "algebra/polynomial-rings",
        "numbertheory/algebraic-numbers"
      ],
      "title": "代数基本定理",
      "statement": "每个正次数复系数多项式在复数中有根，因此能完全分解为一次因子。",
      "dependencies": [
        "liouville",
        "complex-basic-rules",
        "finite-dimensional-compactness",
        "root-bound",
        "axiom-natural"
      ],
      "idea": "若无根，倒数成为有界整函数，Liouville 定理迫使它为常数。",
      "steps": [
        "设 p(z)=a_nz^n+…+a₀，n≥1、a_n≠0。对 |z|≥1，低次项之和绝对值≤C|z|^(n-1)，C=Σ_(k<n)|a_k|。当 |z|≥max(1,2C/|a_n|)，有 |p(z)|≥|a_n||z|^n/2，因此 |p(z)|→∞。",
        "若 p 无根，1/p 按商法则是整函数。大圆盘外因上一步而有界，盘内则因 |p| 连续且无零，在紧盘上取正最小值，倒数同样有界。因此 1/p 在全平面有界。",
        "Liouville 定理使 1/p 常数，进而 p 常数，与 n≥1 矛盾。故存在一个根。根因式定理约去一个一次因子后，剩余次数下降；对次数归纳得到全部线性分解。$\\square$"
      ]
    },
    {
      "id": "complex-eigenvalue",
      "topics": [
        "algebra/eigenvalues",
        "algebra/irreducible-representations"
      ],
      "title": "复有限维算子有特征值",
      "statement": "非零有限维复向量空间上的每个线性算子都有一个复特征值；因此复不可约有限维表示的自 intertwiner 必为标量。",
      "dependencies": [
        "fundamental-algebra",
        "basis-extension",
        "schur-lemma"
      ],
      "idea": "算子幂在有限维算子空间中线性相关，分解其湮灭多项式后至少一个因子不可逆。",
      "steps": [
        "若空间维数 n>0，算子由 n² 个矩阵坐标决定，所以 I,A,…,A^(n²) 线性相关，存在非零多项式 p 使 p(A)=0。它不能是非零常数，否则为非零倍单位算子；因此次数正。",
        "代数基本定理使 p(z)=c∏_j(z-λ_j)，于是 0=p(A)=c∏_j(A-λ_jI)。若每个因子都可逆，乘积也可逆，不可能等于零算子；故至少一个因子不可逆。",
        "有限维秩—零化度使不可逆的方算子有非零核，得到 Av=λ_jv、v≠0。对不可约表示的自 intertwiner T，现在已知它有某特征值，应用已证 Schur 引理便得 T=λI，不再把特征值存在当作未证前提。$\\square$"
      ]
    },
    {
      "id": "closed-subset-compact",
      "topics": [
        "geometry/compactness",
        "geometry/open-sets-continuity"
      ],
      "title": "紧致空间的闭子集紧致",
      "statement": "若 K 紧致、F 在 K 中闭，则 F 紧致。",
      "dependencies": [
        "axiom-topology"
      ],
      "idea": "把 F 的覆盖补上开集 K\\F，得到 K 的覆盖。",
      "steps": [
        "取 F 的相对开覆盖 U_i=F∩V_i，其中 V_i 在 K 开。V_i 连同 K\\F 覆盖 K，由紧致性有有限子覆盖。",
        "去掉 K\\F 后，所选有限 V_i 仍覆盖 F，因为该补集不含 F 中任何点。对应的有限 U_i 就覆盖 F，故 F 紧致。$\\square$"
      ]
    },
    {
      "id": "compact-hausdorff-closed",
      "topics": [
        "geometry/compactness",
        "geometry/homeomorphism"
      ],
      "title": "Hausdorff 空间中紧集闭",
      "statement": "Hausdorff 空间 Y 中的紧子空间 K 是闭集；因而紧致空间到 Hausdorff 空间的连续双射是同胚。",
      "dependencies": [
        "continuous-compact",
        "closed-subset-compact"
      ],
      "idea": "把一个外点与紧集的每点分离，再用有限覆盖取外点共同邻域。",
      "steps": [
        "固定 y∉K。对每个 x∈K，Hausdorff 性给不交开邻域 U_x 含 x、V_x 含 y。U_x 覆盖 K，选有限 U_(x_i)；交集 V=∩_i V_(x_i) 是 y 的开邻域，且不交 K。每个外点都有这样的邻域，故补集开，K 闭。空 K 直接成立。",
        "若 f:X→Y 连续双射，X 紧、Y Hausdorff，对 X 中任意闭集 F，它由闭子集紧致结论为紧集，其连续像 f(F) 紧，进而在 Y 闭。所以 f 是闭映射，逆映射对闭集的原像 f(F) 都闭，故逆连续，f 为同胚。$\\square$"
      ]
    },
    {
      "id": "compact-metric-subsequence",
      "topics": [
        "geometry/compactness",
        "analysis/normed-spaces"
      ],
      "title": "紧致度量空间的序列紧性",
      "statement": "紧致度量空间中每个序列都有收敛子列。",
      "dependencies": [
        "axiom-metric",
        "axiom-topology"
      ],
      "idea": "若所有点都只有命中有限序列项的邻域，有限子覆盖便会把无穷下标压成有限集合。",
      "steps": [
        "若没有点的每个邻域都命中无穷多个下标，则每点可选一个仅含有限多个序列下标的开邻域。这些邻域覆盖空间，有限子覆盖所含下标并仍有限，却必须覆盖序列的全部下标，矛盾。",
        "故存在 x，使任意半径邻域都含无穷多个下标。递归选 n_k>n_(k-1)，使 d(x_(n_k),x)<1/k。由 1/k→0 得到子列收敛到 x。$\\square$"
      ]
    },
    {
      "id": "sequential-metric-compact",
      "topics": [
        "geometry/compactness",
        "analysis/normed-spaces"
      ],
      "title": "度量空间的序列紧性蕴含紧致",
      "statement": "若度量空间 X 的每个序列都有收敛子列，则每个开覆盖有有限子覆盖。",
      "dependencies": [
        "axiom-metric",
        "archimedean"
      ],
      "idea": "先得到有限精度网格，再证明任意开覆盖都有统一的足够小邻域尺度。",
      "steps": [
        "对任意 ε>0，若不能用有限个半径 ε 的球覆盖 X，可依次选新点在已选球之外，得到两两距离至少 ε 的序列。任何收敛子列都必须柯西，这与分离距离矛盾。因此存在有限 ε 网。",
        "固定一个开覆盖。若不存在 δ>0，使每个点的半径 δ 球都包含于某覆盖成员，则对每个 n 选 x_n，使 B(x_n,1/n) 不含于任何成员。取收敛子列 x_(n_k)→x。某开覆盖成员 U 含 x，可取 r>0 使 B(x,r)⊆U。",
        "充分大 k 时 d(x_(n_k),x)<r/2 且 1/n_k<r/2，故 B(x_(n_k),1/n_k)⊆U，矛盾。统一 δ 因而存在。取有限 δ/2 网，对每个网点的 δ 球选一个包含它的覆盖成员，这些有限成员覆盖 X。空空间由空子覆盖处理。$\\square$"
      ]
    },
    {
      "id": "heine-borel-rn",
      "topics": [
        "geometry/compactness",
        "geometry/euclidean-space"
      ],
      "title": "有限维 Heine–Borel 定理",
      "statement": "R^n 中集合紧致当且仅当闭且有界。",
      "dependencies": [
        "finite-dimensional-compactness",
        "sequential-metric-compact",
        "compact-hausdorff-closed"
      ],
      "idea": "闭有界给收敛子列；反向用有限球覆盖控制有界性，并用 Hausdorff 性保证闭。",
      "steps": [
        "闭有界集合中的任意序列，按有限维子列定理有极限仍在该集合中的子列，因此序列紧；度量空间中序列紧蕴含紧致，所以它紧。",
        "若集合 K 紧，欧氏空间 Hausdorff（不同点用小于其距离一半的球分离），故紧子集闭。开球 B(0,m)、m 为正整数覆盖 R^n，也覆盖 K；有限子覆盖中最大半径即给 K 的界。$\\square$"
      ]
    },
    {
      "id": "finite-norm-equivalence",
      "topics": [
        "analysis/normed-spaces",
        "algebra/vector-spaces"
      ],
      "title": "有限维空间范数等价与完备性",
      "statement": "有限维实或复向量空间上的任意两范数等价，且任意范数均完备。",
      "dependencies": [
        "basis-extension",
        "cauchy-schwarz",
        "finite-dimensional-compactness",
        "cauchy-completeness",
        "complex-cauchy-schwarz"
      ],
      "idea": "先给坐标欧氏范数的上界，再在单位球面取任意范数的正最小值。",
      "steps": [
        "固定一组基 e_i，坐标欧氏范数记为 |x|₂。对任意范数 N，三角不等式给 N(x)≤Σ_i|x_i|N(e_i)≤C|x|₂，其中 C=(Σ_iN(e_i)²)^(1/2)，最后用柯西—施瓦茨。零维空间直接成立。",
        "反三角不等式给 |N(x)-N(y)|≤N(x-y)≤C|x-y|₂，所以 N 在坐标中连续。单位欧氏球面闭有界，N 在其上取最小值 c；因每点非零，c>0。缩放得 c|x|₂≤N(x)≤C|x|₂。比较两范数的此类界便得到等价性。",
        "N 柯西列由下界成为坐标欧氏柯西列，各实坐标按实数完备性收敛，复数分实虚部，得到空间内极限。上界使其在 N 中也收敛，故完备。$\\square$"
      ]
    },
    {
      "id": "convex-projection",
      "topics": [
        "geometry/convex-sets",
        "applied/convex-optimization"
      ],
      "title": "Hilbert 空间闭凸集的最佳逼近",
      "statement": "实 Hilbert 空间中非空闭凸集 C，对每个 x 有唯一最近点 p；它满足 〈x-p,v-p〉≤0 对全部 v∈C。投影映射非扩张：‖P_Cx-P_Cy‖≤‖x-y‖。",
      "dependencies": [
        "projection-closed-subspace",
        "cauchy-schwarz"
      ],
      "idea": "最小化序列仍由中点凸性成为柯西；用单侧线段扰动取代子空间的双向扰动。",
      "steps": [
        "设 d=inf_(v∈C)‖x-v‖，取距离平方趋于 d² 的序列。平行四边形展开与 C 的中点凸性给出与子空间投影证明相同的柯西估计。完备性与闭性得到最小点 p。若 p、q 同时最小，同一恒等式给 ‖p-q‖²≤0，所以唯一。",
        "对 v∈C、0<t≤1，p+t(v-p)∈C。展开其距离平方不小于 ‖x-p‖²，除以 t 后令 t↓0，得到 〈x-p,v-p〉≤0。反向若该不等式对所有 v 成立，展开 ‖x-v‖² 即得不小于 ‖x-p‖²，所以也刻画最小点。",
        "对 p=P_Cx、q=P_Cy，分别代入对方点，有 〈x-p,q-p〉≤0、〈y-q,p-q〉≤0。相加整理得 ‖p-q‖²≤〈x-y,p-q〉≤‖x-y‖‖p-q‖。距离非零时约去，零时直接成立，得非扩张性。$\\square$"
      ]
    },
    {
      "id": "fourier-motzkin",
      "topics": [
        "applied/linear-programming",
        "discrete/polyhedral-methods"
      ],
      "title": "多面体的坐标投影仍是多面体",
      "statement": "实有限维空间中有限个非严格线性不等式定义的集合，消去任意若干坐标后，仍可用有限个非严格线性不等式描述。",
      "dependencies": [
        "axiom-real",
        "axiom-finite"
      ],
      "idea": "把待消去变量的上界与下界两两比较；没有一侧界时总可选满足所有剩余界的变量。",
      "steps": [
        "消去一个变量 t。按该变量系数为正、负、零分类，可分别改写为 t≤U_i(x)、t≥L_j(x)、以及不含 t 的约束，其中 U_i、L_j 是仿射函数。",
        "存在 t 的必要条件是所有 L_j(x)≤U_i(x)，并满足零系数约束。条件也充分：上下界皆有时，有限个下界的最大值不超过有限个上界的最小值，可选其间 t；只有一侧时取满足该有限侧界的值，两侧都无则任取 t。",
        "上述两两比较都是线性非严格不等式，且数量有限，因此恰好描述投影。对消去变量数有限归纳，就得到一般坐标投影结论。等式可拆成两条不等式处理。$\\square$"
      ]
    },
    {
      "id": "lp-attainment-vertex",
      "topics": [
        "applied/linear-programming",
        "discrete/polyhedral-methods"
      ],
      "title": "线性规划有限最优值的取得与顶点最优性",
      "statement": "非空多面体 P 上线性目标若有有限下界，则最小值能取到；若 P 不含任何整条直线，则存在一个最优顶点。",
      "dependencies": [
        "fourier-motzkin",
        "rank-nullity"
      ],
      "idea": "先将目标值集合投影成一维闭多面体，再从最优点不断增加独立活跃约束。",
      "steps": [
        "引入 z=cᵀx，方程拆成两不等式，与 P 的约束合在一起后投影到 z 轴。Fourier–Motzkin 结论使目标值集合是非空一维多面体，即有限个闭半直线或全集之交；有有限下界时，它包含下确界。所以某个 x* 取得最优。",
        "把 P 写成 Ax≤b。若最优点活跃约束行未张成全对偶空间，取非零 v 被这些行全部消灭。对不活跃约束，松弛量均正且只有有限个，故充分小的正负 t 都使 x*+tv 可行。最优性迫使 cᵀv=0，否则某一方向会降低目标。",
        "若所有约束行都消灭 v，则整条 x*+Rv 在 P 中，违背无线假设。因此某行 a_iᵀv≠0；换 v 符号后可使至少一个为正。令 t 为所有正 a_iᵀv 对应的松弛量除以 a_iᵀv 的最小值，t>0 且有限。移动到 x*+tv 后仍最优，旧活跃行保持活跃，并至少新增一行不在旧行张成中（它不消灭 v）。",
        "有限维下至多重复维数次，得到活跃行满秩的最优点。若此点是两个可行点的中点，每条活跃线性约束在两个点上都必须取等号；满秩使两个点都等于该点，故它是顶点。这还覆盖零维情形。若 P 含直线，最优点仍存在，但可能没有顶点。$\\square$"
      ]
    },
    {
      "id": "taylor-lagrange",
      "topics": [
        "analysis/derivatives",
        "applied/error-analysis"
      ],
      "title": "Taylor 定理的 Lagrange 余项",
      "statement": "若 f 在含 a,x 的闭区间上有连续至 m+1 阶导数，则 f(x)=Σ_(k=0)^m f^(k)(a)(x-a)^k/k!+f^(m+1)(ξ)(x-a)^(m+1)/(m+1)!，某 ξ 在两端之间。",
      "dependencies": [
        "rolle",
        "axiom-natural"
      ],
      "idea": "减去 Taylor 多项式及一个待定高次项，制造多重零点后反复应用 Rolle。",
      "steps": [
        "x=a 时结论直接成立。设 x≠a，令 P_m 为所列 Taylor 多项式，选常数 C 使 F(t)=f(t)-P_m(t)-C(t-a)^(m+1) 满足 F(x)=0。同时由多项式逐项求导，F(a)=F′(a)=…=F^(m)(a)=0。",
        "F 在 a 和 x 之间有两个零点，Rolle 给 F′ 的一个内部零点；加上 F′(a)=0，可再次应用 Rolle。重复 m+1 次，得到某 ξ 使 F^(m+1)(ξ)=0。若 x<a，区间反向排列不改变此零点论证。",
        "因 P_m 的 m+1 阶导数为零，最后等式为 f^(m+1)(ξ)-C(m+1)!=0。把 C 的值代回 F(x)=0，得到余项。幂函数微分法则可由差商中二项式展开直接验证，再对阶数有限归纳，故此处不依赖待证 Taylor 定理。$\\square$"
      ]
    },
    {
      "id": "trapezoid-error",
      "topics": [
        "applied/numerical-integration",
        "applied/error-analysis"
      ],
      "title": "复合梯形求积的误差界",
      "statement": "若 f∈C²[a,b]、|f″|≤M，对任意分割最大步长 h 的复合梯形值 T，有 |∫f-T|≤M(b-a)h²/12。",
      "dependencies": [
        "rolle",
        "supremum-integral",
        "riemann-additivity"
      ],
      "idea": "先用三点零点证明线性插值误差，再把各小区间误差积分并相加。",
      "steps": [
        "在小区间 [u,v]，令 l 为端点线性插值。对内部 t，取 C 使 F(s)=f(s)-l(s)-C(s-u)(s-v) 在 s=t 为零；它还在 u,v 为零。两次 Rolle 给 F″(ξ)=0，所以 C=f″(ξ)/2，得到 |f(t)-l(t)|≤M(t-u)(v-t)/2。端点误差零。",
        "积分绝对值估计及单调性给 |∫_u^v(f-l)|≤(M/2)∫_u^v(t-u)(v-t)dt=M(v-u)³/12；该三次多项式积分可用已证基本定理逐项计算。∫l 恰为该段梯形值。",
        "各段相加，误差绝对值不超过 MΣ_i h_i³/12≤Mh²Σ_i h_i/12=M(b-a)h²/12。误差阶依赖二阶导数界，不能无条件用于不光滑或奇异函数。$\\square$"
      ]
    },
    {
      "id": "neumann-series",
      "topics": [
        "applied/numerical-linear-algebra",
        "analysis/linear-operators"
      ],
      "title": "有限维 Neumann 级数与逆矩阵界",
      "statement": "满足 ‖I‖=1 的次乘性矩阵范数下若 ‖B‖<1，则 I-B 可逆，逆为 Σ_(k≥0)B^k，并有 ‖(I-B)⁻¹‖≤1/(1-‖B‖)。",
      "dependencies": [
        "finite-norm-equivalence",
        "archimedean"
      ],
      "idea": "幂范数由几何级数控制，部分和与 I-B 的乘积恰好望远镜消项。",
      "steps": [
        "对部分和 S_n，尾部范数≤Σ_(k=m+1)^n‖B‖^k，几何级数尾和趋零，所以 S_n 柯西。有限维矩阵空间在任何范数下完备，故有极限 S，且范数界由各部分和的几何和给出。",
        "直接相乘得 (I-B)S_n=S_n(I-B)=I-B^(n+1)。因 ‖B^(n+1)‖≤‖B‖^(n+1)→0，乘法连续（次乘性控制误差），取极限得到 (I-B)S=S(I-B)=I。因此 S 为双侧逆，界也随极限保留。$\\square$"
      ]
    },
    {
      "id": "linear-system-perturbation",
      "topics": [
        "applied/condition-numbers",
        "applied/numerical-stability"
      ],
      "title": "线性方程组的相对扰动界",
      "statement": "设 Ax=b、A 可逆、b≠0，κ=‖A‖‖A⁻¹‖。若 a=‖ΔA‖/‖A‖ 满足 κa<1，则扰动系统唯一可解，且 ‖Δx‖/‖x‖≤κ[a+‖Δb‖/‖b‖]/(1-κa)。",
      "dependencies": [
        "neumann-series"
      ],
      "idea": "先通过小扰动逆公式保证可解，再用误差方程统一控制矩阵和右端的影响。",
      "steps": [
        "A+ΔA=A(I+A⁻¹ΔA)，且 η=‖A⁻¹ΔA‖≤κa<1。Neumann 级数给逆存在，并有 ‖(A+ΔA)⁻¹‖≤‖A⁻¹‖/(1-η)。",
        "从 (A+ΔA)(x+Δx)=b+Δb 与 Ax=b 相减，得 Δx=(A+ΔA)⁻¹(Δb-ΔAx)。因此 ‖Δx‖/‖x‖≤‖A⁻¹‖[‖Δb‖/‖x‖+‖ΔA‖]/(1-η)。",
        "因 ‖b‖≤‖A‖‖x‖，有 ‖Δb‖/‖x‖≤‖A‖‖Δb‖/‖b‖。再用 η≤κa 使分母下界为 1-κa，即得所述界。这里范数须为相容的向量与矩阵算子范数。$\\square$"
      ]
    },
    {
      "id": "discrete-stability-convergence",
      "topics": [
        "applied/simulation-validation",
        "applied/finite-differences"
      ],
      "title": "稳定与一致性推出线性递推收敛",
      "statement": "设数值递推 u_(n+1)=Q_hu_n，精确采样满足 v_(n+1)=Q_hv_n+Δt·τ_n。若 nΔt≤T 时 ‖Q_h^n‖≤C 统一成立，则 ‖u_n-v_n‖≤C‖u₀-v₀‖+CT max_(j<n)‖τ_j‖。",
      "dependencies": [
        "axiom-vector",
        "axiom-metric"
      ],
      "idea": "把每步局部残差传播到最终时刻，稳定性给每个传播因子同一个界。",
      "steps": [
        "令 e_n=u_n-v_n，则 e_(n+1)=Q_he_n-Δt·τ_n。有限归纳展开得 e_n=Q_h^ne₀-Δt Σ_(j=0)^(n-1)Q_h^(n-1-j)τ_j。",
        "取范数并用每个传播幂的稳定界，得 ‖e_n‖≤C‖e₀‖+C nΔt max_j‖τ_j‖，再用 nΔt≤T 即得结论。因此初始误差和一致性残差都趋零时，固定有限时间窗内误差趋零。本证明是收敛的充分方向，不宣称已经证明完整 Lax 等价定理的反向。$\\square$"
      ]
    },
    {
      "id": "heat-explicit-stability",
      "topics": [
        "applied/finite-differences",
        "applied/pde-models"
      ],
      "title": "显式热方程差分的最大范数稳定性",
      "statement": "一维热方程显式格式 u_j^(n+1)=r u_(j-1)^n+(1-2r)u_j^n+r u_(j+1)^n，在 0≤r≤1/2 且周期或固定 Dirichlet 边界下，对同边界的两数值解之差保持最大范数不增。",
      "dependencies": [
        "axiom-real"
      ],
      "idea": "每个新误差是三个旧误差的凸组合。",
      "steps": [
        "相减两份递推，误差 e 满足同一齐次格式；同 Dirichlet 边界使边界误差为零，周期边界使相邻下标循环。给定范围内三个系数均非负且和为一。",
        "所以 |e_j^(n+1)|≤r|e_(j-1)^n|+(1-2r)|e_j^n|+r|e_(j+1)^n|≤max_k|e_k^n|。对 j 取最大再归纳，得到所有时刻的稳定界，常数 C=1。步长条件等价于 r=αΔt/(Δx)²≤1/2；此处不证明不满足条件时每个具体数据都必然发散。$\\square$"
      ]
    },
    {
      "id": "chinese-remainder",
      "topics": [
        "numbertheory/congruences",
        "numbertheory/local-global-principle"
      ],
      "title": "互素模数的中国剩余定理",
      "statement": "正整数 m₁,…,m_r 两两互素，则任意剩余类组 a_i 存在唯一模 M=∏m_i 的整数类 x，满足 x≡a_i mod m_i。",
      "dependencies": [
        "bezout",
        "euclid-lemma",
        "unique-factorization"
      ],
      "idea": "用贝祖等式制造只在某一个模数下等于一的基向量。",
      "steps": [
        "令 M_i=M/m_i。两两互素及素因子唯一分解说明 gcd(M_i,m_i)=1，故贝祖定理给 b_iM_i≡1 mod m_i。取 x=Σ_i a_i b_iM_i。",
        "模 m_j 时，i≠j 的 M_i 都含 m_j 因子，故相应项消失，第 j 项等于 a_j。因此所有同余同时满足。",
        "若 x,y 同时满足，则每个 m_i 整除 x-y。因模数素因子互不重叠，唯一分解说明 M 整除差（差为零时直接成立），故模 M 类唯一。模数为 1 时约束为空，构造中的逆可任取，结论不变。$\\square$"
      ]
    },
    {
      "id": "totient-product",
      "topics": [
        "numbertheory/arithmetic-functions",
        "numbertheory/modular-exponentiation"
      ],
      "title": "欧拉函数的积性与乘积公式",
      "statement": "若 gcd(m,n)=1，则 φ(mn)=φ(m)φ(n)；若 N=∏p_i^(e_i)，则 φ(N)=N∏_i(1-1/p_i)。",
      "dependencies": [
        "chinese-remainder",
        "unique-factorization"
      ],
      "idea": "中国剩余对应保留可逆性，素数幂上只需排除被该素数整除的剩余类。",
      "steps": [
        "整数类 a mod k 可逆当且仅当 gcd(a,k)=1：一个方向用贝祖构造逆，另一个方向由公因数整除逆等式中的 1。中国剩余同构按逐坐标保持乘法，可逆元素恰好对应两边都可逆的坐标对，所以数量相乘。",
        "模 p^e 共 p^e 个类，不互素者恰是 p 的倍数，共 p^(e-1) 个，故 φ(p^e)=p^e-p^(e-1)。对互素的素数幂反复应用积性，即得乘积公式。N=1 按空乘积为 1。$\\square$"
      ]
    },
    {
      "id": "finite-subgroup-cyclic",
      "topics": [
        "algebra/finite-fields",
        "numbertheory/discrete-logarithms"
      ],
      "title": "域乘法群的有限子群循环",
      "statement": "域 K 的乘法群中任意有限子群 G 都是循环群，特别是有限域的非零乘法群循环。",
      "dependencies": [
        "lagrange",
        "root-bound",
        "unique-factorization",
        "bezout"
      ],
      "idea": "先按各素数收集最大阶的素数幂分量，再用根数上界迫使得到的元素生成全群。",
      "steps": [
        "对阶为 d 的元素 a，a^k 的阶为 d/gcd(d,k)：令 g=gcd(d,k)，则 d/g 次幂为一；反之若 d 整除 kt，约去公因数并用贝祖互素性，得 d/g 整除 t。",
        "对所有出现于元素阶的素数 p，取某元素阶中 p 的最高幂 p^e。把该元素取适当幂，上一结论给出阶恰为 p^e 的元素 b_p。只有有限多个素数，因为群有限且元素阶整除群阶。",
        "交换的互素阶元素 a,b，其乘积阶为两阶乘积：若 (ab)^t=1，则 a^t=b^(-t) 在两个循环子群的交中；交内元素阶整除两个互素阶，只能为一，所以两阶都整除 t。反向乘积次幂显然为一。",
        "故 b=∏b_p 的阶为 E=∏p^e。每个 G 元素的阶都整除 E，所以所有 |G| 个元素都是 x^E-1 的根，根数界给 |G|≤E。另一方面 b 的循环子群已有 E 个元素，所以 E≤|G|。于是 E=|G|，b 生成全群。平凡群取空乘积。$\\square$"
      ]
    },
    {
      "id": "euler-quadratic-criterion",
      "topics": [
        "numbertheory/quadratic-residues"
      ],
      "title": "Euler 二次剩余判别",
      "statement": "对奇素数 p 及 p∤a，Legendre 符号 (a/p) 等于 a^((p-1)/2) 在模 p 下的 ±1 值。",
      "dependencies": [
        "finite-subgroup-cyclic",
        "root-bound"
      ],
      "idea": "在有限域乘法群的生成元指数中，平方恰好对应偶指数。",
      "steps": [
        "取模 p 非零乘法群的生成元 g，阶为 p-1。每个 a=g^k。它为平方当且仅当存在 l 使 2l≡k mod p-1，因 p-1 偶数，这恰好等价于 k 偶。",
        "g^((p-1)/2) 的平方为一，但自身不为一，否则生成元阶更小。域中 x²-1=(x-1)(x+1)，且 p 奇使 ±1 不同，所以它等于 -1。因此 a^((p-1)/2)=(-1)^k，恰在平方时为 1、非平方时为 -1。$\\square$"
      ]
    },
    {
      "id": "gauss-lemma",
      "topics": [
        "numbertheory/quadratic-residues"
      ],
      "title": "Gauss 引理及奇数取整形式",
      "statement": "设 p 奇素，p∤a，m=(p-1)/2。取 a,2a,…,ma 的最小正剩余，超过 p/2 的个数为 N，则 (a/p)=(-1)^N。若 a 为奇正整数，还等于 (-1)^(Σ_(k=1)^m floor(ka/p))。",
      "dependencies": [
        "euler-quadratic-criterion",
        "bezout"
      ],
      "idea": "把大于半模数的剩余反射回前半区，反射次数就是乘积的符号变化。",
      "steps": [
        "记剩余 r_k。若 r_k≤m 取 s_k=r_k，否则取 s_k=p-r_k。所有 s_k 在 1,…,m 内且互异：相等会给 ka≡±la，约去可逆 a；正号迫使 k=l，负号要求 p 整除 k+l，但 2≤k+l≤p-1，不可能。故 s_k 是这 m 个数的排列。",
        "相乘得到 a^m m!≡∏r_k≡(-1)^N∏s_k=(-1)^N m!。阶乘在模 p 可逆，约去后由 Euler 判别得到第一式。",
        "若 a 奇，等式 r_k=ka-p floor(ka/p) 求和再模 2，得到 Σr_k≡m(m+1)/2-Σfloor(ka/p)。另一方面反射项 r_k=p-s_k≡1+s_k mod2，故 Σr_k≡m(m+1)/2+N。两式比较得 N 与取整和同奇偶，证明第二式。$\\square$"
      ]
    },
    {
      "id": "quadratic-reciprocity",
      "topics": [
        "numbertheory/quadratic-residues"
      ],
      "title": "二次互反律及两个补充律",
      "statement": "不同奇素数 p,q 满足 (p/q)(q/p)=(-1)^((p-1)(q-1)/4)。并有 (-1/p)=(-1)^((p-1)/2)，(2/p)=(-1)^((p²-1)/8)。",
      "dependencies": [
        "gauss-lemma",
        "euler-quadratic-criterion"
      ],
      "idea": "两个取整和分别数出半尺寸矩形中斜线两侧的格点，总数为矩形格点数。",
      "steps": [
        "令 m=(p-1)/2、n=(q-1)/2。考虑 1≤i≤m、1≤j≤n 的 mn 个整数点。直线 qi=pj 上没有这些点，因为 p,q 不同素，若相等则 p 整除 i，但 i<p。",
        "对固定 i，满足 pj<qi 的点数是 floor(qi/p)；该数不超过 n，因为 qi/p<q/2。对固定 j，满足 qi<pj 的点数是 floor(pj/q)，同理不超过 m。两侧正好分割所有格点，所以两个取整和相加为 mn。",
        "由 Gauss 引理的奇数取整形式，两 Legendre 符号相乘为 (-1)^mn，即互反律。第一补充律直接将 a=-1 代入 Euler 判别，得到 (-1)^m。",
        "对 a=2，2,4,…,2m 都小于 p，超过 p/2 的个数为 m-floor(p/4)。将 p 分成模 8 的四个奇数类 1、3、5、7，该数奇偶依次为偶、奇、奇、偶；整数 (p²-1)/8 的奇偶也依次如此。Gauss 引理给出第二补充律。$\\square$"
      ]
    },
    {
      "id": "liouville-lower-bound",
      "topics": [
        "numbertheory/diophantine-approximation",
        "numbertheory/algebraic-numbers"
      ],
      "title": "Liouville 的代数数逼近下界",
      "statement": "若实代数数 α 的次数为 d，则存在 c>0，使每个 α≠p/q、p∈Z、q≥1，都有 |α-p/q|≥c/q^d。",
      "dependencies": [
        "minimal-polynomial",
        "mean-value",
        "finite-dimensional-compactness"
      ],
      "idea": "整系数多项式在有理点的非零值有分母下界，中值定理把函数值下界传给距离。",
      "steps": [
        "将 α 在 Q 上的最小多项式清分母，得非零整系数 P、次数 d。若 p/q≠α，则 P(p/q)≠0：否则不可约最小多项式有一个有理根，次数只能为一，而此时其唯一根就是 α。",
        "q^d P(p/q) 是非零整数，所以 |P(p/q)|≥q^(-d)。P′ 在 [α-1,α+1] 连续有界，取 M≥1 为其绝对值上界。若 |p/q-α|≤1，中值定理给 |P(p/q)|≤M|p/q-α|，故距离≥1/(Mq^d)。",
        "若距离>1，则也≥1/(Mq^d)，因为 M,q≥1。所以取 c=1/M 即可，证明对全部允许有理数统一成立，不要求 p/q 已约分。$\\square$"
      ]
    },
    {
      "id": "liouville-constant",
      "topics": [
        "numbertheory/liouville-numbers",
        "numbertheory/transcendental-numbers"
      ],
      "title": "Liouville 常数是超越数",
      "statement": "实数 L=Σ_(k=1)^∞10^(-k!) 是超越数。",
      "dependencies": [
        "liouville-lower-bound",
        "series-cauchy",
        "archimedean"
      ],
      "idea": "阶乘位的小数截断具有比任意固定分母幂更小的正误差，与代数数下界矛盾。",
      "steps": [
        "阶乘指数递增，数值级数受几何级数控制而收敛。取前 n 项 L_n=p_n/q_n，q_n=10^(n!)。尾项严格正；对 n≥2，后续指数至少按整数逐步增加，故 0<L-L_n≤(10/9)10^(-(n+1)!)<2/q_n^(n+1)。",
        "若 L 为代数数、次数 d，则逼近下界给 L-L_n≥c/q_n^d，因为尾项正保证两数不同。两界合并得到 c<2/q_n^(n+1-d)。",
        "当 n>d，q_n≥10，使右侧≤2·10^(-(n+1-d))→0，矛盾于固定 c>0。因此 L 不满足任何非零整系数多项式，即为超越数。$\\square$"
      ]
    },
    {
      "id": "measure-continuity-above",
      "topics": [
        "analysis/measures",
        "probability/almost-sure-convergence"
      ],
      "title": "有限测度下的上连续性",
      "statement": "若可测集 E_n 递减，且 μ(E₁)<∞，则 μ(∩E_n)=lim μ(E_n)。",
      "dependencies": [
        "measure-continuity"
      ],
      "idea": "在有限初始集合中取补，把递减转成递增后作有限数相减。",
      "steps": [
        "令 A_n=E₁\\E_n，则 A_n 递增，并为 E₁\\∩E_n。可加性给 μ(A_n)=μ(E₁)-μ(E_n)，不存在无穷相减，因为 μ(E₁) 有限。",
        "由测度下连续性，μ(A_n)→μ(E₁\\∩E_n)=μ(E₁)-μ(∩E_n)。移项即得结果。若初始测度无限，不能照用，例如实轴上 E_n=[n,∞) 的测度全无限，交集却空。$\\square$"
      ]
    },
    {
      "id": "countable-union-bound",
      "topics": [
        "probability/probability-space",
        "analysis/measures"
      ],
      "title": "可数次可加的概率上界",
      "statement": "对任意可数事件列 A_n，有 P(∪A_n)≤ΣP(A_n)。",
      "dependencies": [
        "axiom-measure"
      ],
      "idea": "依次去掉此前已出现的部分，形成不交分块。",
      "steps": [
        "令 D₁=A₁，D_n=A_n\\∪_(j<n)A_j。它们可测、两两不交、并与原事件并相同，且 D_n⊆A_n。",
        "可数可加性与测度单调性给 P(∪A_n)=ΣP(D_n)≤ΣP(A_n)。单调性本身由 B=A⊔(B\\A) 的非负可加性得到，无须事件独立。$\\square$"
      ]
    },
    {
      "id": "borel-cantelli-first",
      "topics": [
        "probability/almost-sure-convergence",
        "probability/large-deviations"
      ],
      "title": "第一 Borel–Cantelli 引理",
      "statement": "若 Σ_nP(A_n)<∞，则以概率一只有有限多个 A_n 发生；不要求独立。",
      "dependencies": [
        "countable-union-bound",
        "measure-continuity-above"
      ],
      "idea": "无穷多次发生的事件包含在每个尾并中，尾并概率由收敛级数尾和控制。",
      "steps": [
        "“无穷多个发生”等价于 limsup A_n=∩_N∪_(n≥N)A_n。尾并 B_N 随 N 递减，概率均不超过 1。",
        "可数并上界给 P(B_N)≤Σ_(n≥N)P(A_n)，右侧趋零。由上连续性，P(limsup A_n)=lim P(B_N)=0。因此异常的无穷发生事件概率为零。$\\square$"
      ]
    },
    {
      "id": "as-to-probability",
      "topics": [
        "probability/almost-sure-convergence",
        "probability/convergence-in-probability"
      ],
      "title": "几乎必然收敛蕴含依概率收敛",
      "statement": "若 X_n→X 几乎必然，则对任意 ε>0，有 P(|X_n-X|≥ε)→0。",
      "dependencies": [
        "measure-continuity-above"
      ],
      "idea": "把每个下标的偏差事件包入“此后仍出现偏差”的递减事件。",
      "steps": [
        "令 B_N=∪_(n≥N){|X_n-X|≥ε}。它们递减，交集是该阈值偏差无穷发生的事件；在 X_n→X 的每条路径上，这种偏差最终不会出现，所以交集包含在收敛异常零集内。",
        "概率上连续性给 P(B_N)→0，而 n≥N 时 {|X_n-X|≥ε}⊆B_N，所以各偏差概率也趋零。这是定义中的依概率收敛。$\\square$"
      ]
    },
    {
      "id": "probability-subsequence",
      "topics": [
        "probability/convergence-in-probability",
        "probability/almost-sure-convergence"
      ],
      "title": "依概率收敛列的几乎必然收敛子列",
      "statement": "若 X_n→X 依概率，则存在严格递增下标 n_k，使 X_(n_k)→X 几乎必然。",
      "dependencies": [
        "borel-cantelli-first",
        "archimedean"
      ],
      "idea": "让第 k 次选取的超阈值概率足够小，使它们可求和。",
      "steps": [
        "按依概率收敛，逐次选 n_k>n_(k-1)，使 P(|X_(n_k)-X|≥1/k)<2^(-k)。每一步都可选，因为固定阈值 1/k 下的偏差概率最终小于 2^(-k)。",
        "这些事件概率和有限。第一 Borel–Cantelli 引理说明几乎每条路径只发生有限次，所以最终误差小于 1/k→0，得到所需子列几乎必然收敛。$\\square$"
      ]
    },
    {
      "id": "l2-cauchy-schwarz",
      "topics": [
        "probability/expectation-variance",
        "probability/bias-variance"
      ],
      "title": "随机变量的 L² 柯西—施瓦茨不等式",
      "statement": "若 E[X²],E[Y²]<∞，则 XY 可积，|E[XY]|²≤E[X²]E[Y²]，并且 ‖X+Y‖₂≤‖X‖₂+‖Y‖₂。",
      "dependencies": [
        "integral-linearity",
        "markov"
      ],
      "idea": "非负平方的期望是一个对所有实参数非负的二次式。",
      "steps": [
        "由 2|XY|≤X²+Y² 得乘积可积。若 E[Y²]=0，则 Y=0 几乎处处：对任意 k，P(|Y|≥1/k)≤k²E[Y²]=0，取可数并即可；故不等式直接成立。",
        "若 E[Y²]>0，在非负量 E[(X-tY)²]=E[X²]-2tE[XY]+t²E[Y²] 中取 t=E[XY]/E[Y²]，得 E[X²]-E[XY]²/E[Y²]≥0，整理即得结论。",
        "展开 E[(X+Y)²]，用已证乘积界控制交叉项，得到 ≤(‖X‖₂+‖Y‖₂)²，开方即得三角不等式。$\\square$"
      ]
    },
    {
      "id": "l2-completeness",
      "topics": [
        "analysis/hilbert-spaces",
        "probability/random-variables"
      ],
      "title": "概率空间上 L² 的完备性",
      "statement": "把平方可积实随机变量按几乎处处相等识别，内积为 E[XY]，则 L² 是实 Hilbert 空间。",
      "dependencies": [
        "l2-cauchy-schwarz",
        "monotone-integral",
        "dominated-convergence",
        "markov",
        "axiom-dependent-choice"
      ],
      "idea": "从柯西列抽取可求和步长的子列，逐点累加绝对差构造可积控制函数。",
      "steps": [
        "内积双线性、对称由积分线性性，且 E[X²]=0 恰好表示零等价类，故正定。设 f_n 在 L² 中柯西，抽取 n_k 使 ‖f_(n_(k+1))-f_(n_k)‖₂≤2^(-k)。",
        "记 d_k 为相邻差，S_N=|f_(n₁)|+Σ_(k≤N)|d_k|。由 L² 三角不等式，‖S_N‖₂≤‖f_(n₁)‖₂+1。S_N² 单调增加，单调收敛给 S=lim S_N 满足 E[S²] 有限。因此 S 有限几乎处处。",
        "在该满概率集合上，Σ|d_k| 收敛，所以 f_(n_k) 收敛到某可测 f；在异常集合上定义零。又 |f|≤S，故 f∈L²，且 |f_(n_k)-f|²≤4S²。控制收敛定理使此子列在 L² 中收敛到 f。",
        "最后用原列柯西性：给 ε>0，选尾部任意两项 L² 距离小于 ε/2，再选足够靠后的子列项距 f 小于 ε/2，三角不等式得到全列距 f 小于 ε。故完备，成为 Hilbert 空间。$\\square$"
      ]
    },
    {
      "id": "conditional-l2",
      "topics": [
        "probability/conditional-probability",
        "probability/martingales"
      ],
      "title": "L² 条件期望的存在与唯一性",
      "statement": "若 X∈L²，G 为子 σ 代数，则唯一存在 G 可测的 Z∈L²，使对每个 A∈G 有 E[Z1_A]=E[X1_A]，按几乎处处相等理解；且它是对 G 可测变量的最佳 L² 逼近。",
      "dependencies": [
        "l2-completeness",
        "projection-closed-subspace",
        "probability-subsequence",
        "chebyshev"
      ],
      "idea": "把 G 可测变量识别为 L² 的闭线性子空间，再用正交投影。",
      "steps": [
        "G 可测 L² 等价类构成线性子空间 M。若 Z_n∈M 且 L² 收敛到 Z，Chebyshev 不等式使其依概率收敛，再抽取几乎必然收敛子列。取各 Z_n 的 G 可测代表，它们收敛到有限值的集合属于 G；在其上取极限，其他处取零，得到 G 可测代表且等于 Z 几乎处处。因此 M 闭。",
        "投影定理给唯一 Z∈M，使 X-Z⊥M，并最小化 L² 误差。对 A∈G，1_A∈M，所以 E[(X-Z)1_A]=0，这就是条件期望的积分定义。",
        "若另有 Z′∈M 满足这些积分等式，令 D=Z-Z′，则对 {D>0}、{D<0} 的积分都为零。非负变量积分为零迫使其几乎处处为零（用阈值 1/k 的 Markov 估计及可数并），所以 D=0 几乎处处，证明定义意义下唯一。$\\square$"
      ]
    },
    {
      "id": "conditional-tower",
      "topics": [
        "probability/conditional-probability",
        "probability/martingales"
      ],
      "title": "L² 条件期望的塔式性质与全期望",
      "statement": "若 H⊆G 为子 σ 代数且 X∈L²，则 E[E[X|G]|H]=E[X|H]，并有 E[E[X|G]]=E[X]。",
      "dependencies": [
        "conditional-l2"
      ],
      "idea": "在更小信息集的每个事件上，连续两次使用条件期望的定义。",
      "steps": [
        "令 Z=E[X|G]、W=E[Z|H]。对任意 A∈H，也有 A∈G，因此 E[W1_A]=E[Z1_A]=E[X1_A]。W 为 H 可测且平方可积，条件期望唯一性使 W=E[X|H]。",
        "在定义中直接取 A=Ω，得到 E[Z]=E[X]。同样的事件积分验证还给出条件期望的线性性：线性组合满足相同定义式，再用唯一性识别。$\\square$"
      ]
    },
    {
      "id": "variance-mean",
      "topics": [
        "probability/expectation-variance",
        "probability/point-estimation"
      ],
      "title": "样本均值方差及无偏性",
      "statement": "独立 X₁,…,X_n 具有共同有限均值 μ、有限方差 σ²，则 E[X̄]=μ、Var(X̄)=σ²/n。",
      "dependencies": [
        "independent-products",
        "integral-linearity"
      ],
      "idea": "展开中心化平方后，独立性使每个非对角交叉项为零。",
      "steps": [
        "线性性直接给 E[X̄]=n⁻¹Σ_iE[X_i]=μ。平方可积保证所有随后乘积可积。",
        "令 Y_i=X_i-μ，则 E[Y_i]=0。对 i≠j，独立期望乘法给 E[Y_iY_j]=0。于是 E[(Σ_iY_i)²]=Σ_iE[Y_i²]+2Σ_(i<j)E[Y_iY_j]=nσ²，除以 n² 得结论。$\\square$"
      ]
    },
    {
      "id": "sample-variance-unbiased",
      "topics": [
        "probability/point-estimation",
        "probability/expectation-variance"
      ],
      "title": "样本方差的无偏性",
      "statement": "对 n≥2 个独立同分布且二阶矩有限的观测，s²=(n-1)⁻¹Σ_i(X_i-X̄)² 满足 E[s²]=σ²。",
      "dependencies": [
        "variance-mean",
        "integral-linearity"
      ],
      "idea": "把围绕样本均值的平方和拆成围绕真实均值的平方和，再减去样本均值误差。",
      "steps": [
        "展开 X_i-X̄=(X_i-μ)-(X̄-μ)，并用 Σ_i(X_i-μ)=n(X̄-μ)，得到恒等式 Σ_i(X_i-X̄)²=Σ_i(X_i-μ)²-n(X̄-μ)²。",
        "取期望，第一项为 nσ²，第二项为 nVar(X̄)=σ²，所以平方和期望为 (n-1)σ²。因 n≥2 可除以 n-1，得到无偏性。这不证明该估计量在所有损失下最优。$\\square$"
      ]
    },
    {
      "id": "bounded-optional-stopping",
      "topics": [
        "probability/stopping-times",
        "probability/martingales"
      ],
      "title": "有界停时的可选停止等式",
      "statement": "离散时间可积鞅 M_n 与满足 0≤T≤N 的停时 T，具有 E[M_T]=E[M_0]。",
      "dependencies": [
        "def-conditional",
        "integral-linearity"
      ],
      "idea": "把停止值写成有限个增量，每个增量只在当时还没停止时计入。",
      "steps": [
        "逐条路径有 M_T=M_0+Σ_(k=1)^N (M_k-M_(k-1))1_{T≥k}。因 T 为整数且有界，所有项构成有限和，且乘指标后仍可积。",
        "{T≥k} 是 {T≤k-1} 的补集，因此属于 F_(k-1)。由鞅的积分定义，每个 E[(M_k-M_(k-1))1_{T≥k}]=0。对有限和取期望即得等式。无界 T 无法仅靠同一步骤交换无限和或极限与期望，因此不在本定理范围内。$\\square$"
      ]
    },
    {
      "id": "squared-loss-projection",
      "topics": [
        "probability/regression-classification",
        "probability/loss-risk"
      ],
      "title": "条件均值最小化平方预测风险",
      "statement": "若 Y∈L²、可用信息为 G，则 m=E[Y|G] 在所有 G 可测 L² 预测中唯一最小化 E[(Y-h)²]，且风险等于 E[(Y-m)²]+E[(m-h)²]。",
      "dependencies": [
        "conditional-l2"
      ],
      "idea": "残差与所有可用信息构成的平方可积变量正交，展开平方的交叉项消失。",
      "steps": [
        "条件期望是到 G 可测闭子空间的正交投影，因此 Y-m 与 m-h 正交，即 E[(Y-m)(m-h)]=0。所有乘积因 L² 柯西—施瓦茨可积。",
        "展开 Y-h=(Y-m)+(m-h) 的平方并取期望，得到所述勾股分解。第二项非负，且等于零当且仅当 h=m 几乎处处，所以 m 唯一最优。$\\square$"
      ]
    },
    {
      "id": "bias-variance-decomposition",
      "topics": [
        "probability/bias-variance",
        "probability/loss-risk"
      ],
      "title": "平方损失的偏差—方差分解",
      "statement": "固定预测位置，若估计预测值 Z 与独立新噪声 ε 都有有限二阶矩，E[ε]=0，真实均值为 m，则 E[(Z-(m+ε))²]=(E[Z]-m)²+Var(Z)+Var(ε)。",
      "dependencies": [
        "independent-products",
        "integral-linearity"
      ],
      "idea": "分别把估计值和噪声中心化，期望使所有交叉项为零。",
      "steps": [
        "写 Z-(m+ε)=(Z-E[Z])+(E[Z]-m)-ε。平方展开后，Z-E[Z] 与常数偏差的交叉项因中心化期望为零；噪声与常数的交叉项也因 E[ε]=0 消失。",
        "独立性给 E[(Z-E[Z])ε]=E[Z-E[Z]]E[ε]=0。剩余三个平方项分别是方差、偏差平方和噪声方差，得到等式。若训练结果与新噪声相关，最后一项不能未经说明就消去。$\\square$"
      ]
    },
    {
      "id": "ridge-solution",
      "topics": [
        "probability/regularization",
        "applied/numerical-linear-algebra"
      ],
      "title": "岭回归的唯一解",
      "statement": "对实矩阵 X、向量 y 与 λ>0，目标 ‖Xβ-y‖²+λ‖β‖² 唯一最小于 β*=(XᵀX+λI)⁻¹Xᵀy。",
      "dependencies": [
        "hermitian-spectral",
        "rank-nullity"
      ],
      "idea": "正惩罚使法矩阵正定，通过完成平方同时证明存在和唯一。",
      "steps": [
        "记 A=XᵀX+λI。对非零 v，vᵀAv=‖Xv‖²+λ‖v‖²>0，因此 Av=0 只能 v=0；有限维秩—零化度使 A 可逆。定义 β*=A⁻¹Xᵀy。",
        "令 h=β-β*。展开目标，交叉项为 2hᵀ(Aβ*-Xᵀy)=0，所以 J(β)=J(β*)+hᵀAh。最后一项非负且只在 h=0 时为零，故 β* 是唯一全局极小点。λ=0 时若 X 不满列秩，唯一性可能失败。$\\square$"
      ]
    },
    {
      "id": "soft-threshold",
      "topics": [
        "probability/regularization",
        "applied/nonlinear-optimization"
      ],
      "title": "L1 惩罚的一维软阈值解",
      "statement": "对 λ≥0，目标 J(x)=(x-y)²/2+λ|x| 唯一最小点为 sign(y)·max(|y|-λ,0)。",
      "dependencies": [
        "mean-value",
        "axiom-real"
      ],
      "idea": "在正半轴与负半轴分别求导，并检查两侧在零点的单侧斜率。",
      "steps": [
        "x>0 时导数为 x-y+λ，随 x 严格递增；x<0 时导数为 x-y-λ，也严格递增。中值定理把导数正负翻译为相应区间的增减。",
        "若 y>λ，负半轴与正半轴直到 y-λ 前都递减，之后递增，唯一最小在 x=y-λ。若 y<-λ，对称得到 x=y+λ。若 |y|≤λ，负半轴导数非正、正半轴非负，且离开零后有严格变化，故唯一最小为零。三种情况合并为软阈值公式。$\\square$"
      ]
    },
    {
      "id": "empirical-risk-unbiased",
      "topics": [
        "probability/loss-risk",
        "probability/training-validation"
      ],
      "title": "固定预测器的经验风险无偏性",
      "statement": "设 Z₁,…,Z_n 独立同分布，h 是不依赖这些观测的固定预测器，损失 ℓ(h,Z) 可积，则经验风险 n⁻¹Σ_iℓ(h,Z_i) 的期望等于真实风险 E[ℓ(h,Z)]。",
      "dependencies": [
        "integral-linearity"
      ],
      "idea": "同分布保证每一项有同样期望，有限线性性即可；关键在预测器固定。",
      "steps": [
        "由同分布，每个 E[ℓ(h,Z_i)] 都等于 R(h)。有限和线性性给 E[Rhat_n(h)]=n⁻¹Σ_i R(h)=R(h)。此结论本身甚至不需要观测独立；独立性用于方差和集中界等更强结果。",
        "若 h 由同一批数据选择，不能把依赖样本的 h 当作固定对象套用上式。例如每次取训练风险最低的模型已经额外利用了这些损失；证明不对这种数据依赖选择作无偏保证。$\\square$"
      ]
    },
    {
      "id": "log-inequality",
      "topics": [
        "discrete/entropy",
        "probability/likelihood"
      ],
      "title": "对数基本不等式",
      "statement": "对任意 t>0，有 ln t≤t-1，等号当且仅当 t=1；这里 ln t=∫₁ᵗ ds/s。",
      "dependencies": [
        "ftc-first",
        "mean-value",
        "chain-rule"
      ],
      "idea": "由积分定义得到导数，再判定差函数的唯一最小点。",
      "steps": [
        "积分定义及第一基本定理给 ln 的导数为 1/t。令 g(t)=t-1-ln t，则 g′(t)=1-1/t：在 (0,1) 为负，在 (1,∞) 为正。",
        "中值定理使 g 在前一区间严格递减、后一区间严格递增；g(1)=0，所以 g(t)≥0，且只在 1 取等号。另对任意固定 a>0，函数 ln(at)-ln t 的导数为零，由链式法则与中值定理它恒等于在 t=1 的值 ln a，故 ln(at)=ln a+ln t，也给出后续散度运算需要的商与乘积对数律。$\\square$"
      ]
    },
    {
      "id": "gibbs-inequality",
      "topics": [
        "discrete/entropy",
        "probability/loss-risk"
      ],
      "title": "有限分布的 Gibbs 不等式",
      "statement": "对有限概率向量 p,q，D(p‖q)=Σ_(p_i>0)p_i ln(p_i/q_i)≥0；若某 p_i>0 而 q_i=0，定义为无穷。等号当且仅当 p=q。",
      "dependencies": [
        "log-inequality"
      ],
      "idea": "对 q_i/p_i 使用对数上界，把散度变成两个概率总和之差。",
      "steps": [
        "若出现 q_i=0<p_i，结论由无穷约定成立。否则对每个 p_i>0 用 ln(q_i/p_i)≤q_i/p_i-1，乘 p_i 后取负并相加，得 D(p‖q)≥Σ_(p_i>0)(p_i-q_i)=1-Σ_(p_i>0)q_i≥0。",
        "若等号成立，最后缺失支持上的 q 质量必须为零，且每个正权重处的对数不等式都取等号，所以 q_i=p_i。反之 p=q 时每一项为零。$\\square$"
      ]
    },
    {
      "id": "entropy-bound",
      "topics": [
        "discrete/entropy",
        "discrete/source-coding"
      ],
      "title": "有限分布的熵界",
      "statement": "m≥1 个可能符号的分布 p 具有 0≤H(p)≤ln m；上界仅当均匀分布时达到。使用以 2 为底对数时对应上界 log₂m。",
      "dependencies": [
        "gibbs-inequality",
        "log-inequality"
      ],
      "idea": "非负性逐项成立；上界等价于对均匀分布的相对熵非负。",
      "steps": [
        "对 p_i>0，因为 p_i≤1，积分定义的 ln 在正数上递增，故 -p_i ln p_i≥0，约定 0ln0=0，得到熵非负。",
        "令 u_i=1/m。Gibbs 不等式给 0≤D(p‖u)=Σ_i p_i ln p_i+ln m=ln m-H(p)。等号条件是 p=u。换底是除以正常数 ln2，因此同样成立。$\\square$"
      ]
    },
    {
      "id": "commutator-jacobi",
      "topics": [
        "algebra/lie-algebras",
        "algebra/lie-bracket"
      ],
      "title": "结合代数的交换子构成李代数",
      "statement": "任意域上的结合代数，以 [A,B]=AB-BA 为括号，满足双线性、[A,A]=0 及 Jacobi 恒等式。",
      "dependencies": [
        "def-ring-field",
        "axiom-vector"
      ],
      "idea": "把三组双重括号完全展开，按相同乘积顺序两两抵消。",
      "steps": [
        "分配律给出对每个变量的线性；[A,A]=AA-AA=0，所以括号交错。在特征不为 2 时这也等价于通常反对称条件，任意特征下仍有 [A,B]=-[B,A]。",
        "按结合律省去乘积括号，展开 [A,[B,C]]=ABC-ACB-BCA+CBA；另两项为 [B,[C,A]]=BCA-BAC-CAB+ACB 与 [C,[A,B]]=CAB-CBA-ABC+BAC。",
        "将三式相加，每个三重乘积出现一次正号和一次负号，结果为零，故 Jacobi 恒等式成立。这里没有假定一般李括号满足结合律；结合的是原来的代数乘法。$\\square$"
      ]
    },
    {
      "id": "representation-kernel",
      "topics": [
        "algebra/group-representations",
        "algebra/invariant-subspaces"
      ],
      "title": "表示的核与不变子空间上的限制",
      "statement": "群表示 ρ:G→GL(V) 的核为正规子群；若 W⊆V 为不变子空间，则限制与商空间分别得到 W 和 V/W 上的表示。",
      "dependencies": [
        "first-isomorphism",
        "axiom-vector"
      ],
      "idea": "同态核的结论直接应用于表示；商表示的关键是换代表后差仍落在不变子空间。",
      "steps": [
        "ρ 是群同态，群第一同构定理中对核的证明给出正规性，并有 G/kerρ 同构于表示像。",
        "W 不变意味着 ρ(g)W⊆W，对 g⁻¹ 应用同一条件再作用 ρ(g)，得到相反包含，因此等于。限制算子在 W 上可逆，逆为 ρ(g⁻¹) 的限制，并保持群乘法。",
        "定义商作用 g·(v+W)=ρ(g)v+W。若 v-v′∈W，不变性保证两像之差在 W，故良定义。乘法及恒等作用由原表示继承，逆由 g⁻¹ 给出，所以也是表示。$\\square$"
      ]
    },
    {
      "id": "maschke",
      "topics": [
        "algebra/irreducible-representations",
        "algebra/invariant-subspaces"
      ],
      "title": "Maschke 定理",
      "statement": "有限群 G 在有限维域 F 上的表示，若特征 F 不整除 |G|，则每个不变子空间有不变直和补，表示可分解为不可约表示的有限直和。",
      "dependencies": [
        "basis-extension",
        "representation-kernel"
      ],
      "idea": "把任意投影对群平均，得到与群作用可交换的投影。",
      "steps": [
        "取不变子空间 W，把其基扩成 V 的基，可构造线性投影 P:V→W 且 P 在 W 上为恒等。因 |G| 在 F 可逆，定义 Q=|G|⁻¹Σ_(g∈G)ρ(g)Pρ(g)⁻¹。",
        "每项的像都在 W；对 w∈W，ρ(g)⁻¹w 仍在 W，所以每项在 w 上的值均为 w，从而 Qw=w。因此 Q²=Q，且 im Q=W。",
        "对 h∈G，ρ(h)Qρ(h)⁻¹ 只是用 hg 重新排列总和，所以等于 Q。故 ker Q 不变。每个 v=(v-Qv)+Qv，前者在核、后者在 W，交集只有零，所以 V=kerQ⊕W。",
        "若表示非零且可约，选非平凡不变子空间并分拆成两个更低维表示，对维数归纳，最终均不可约；零表示是空直和。特征条件用于除以 |G|，不能省略。$\\square$"
      ]
    },
    {
      "id": "schur-lemma",
      "topics": [
        "algebra/irreducible-representations",
        "algebra/characters"
      ],
      "title": "Schur 引理的同构形式",
      "statement": "两个非零不可约表示之间的 intertwiner T，若非零则是表示同构。若底域上 T 的源与目标相同且 T 存在特征值 λ，则 T=λI。",
      "dependencies": [
        "rank-nullity",
        "representation-kernel"
      ],
      "idea": "核与像因交换表示而不变，不可约性迫使它们退化到零或全空间。",
      "steps": [
        "交换关系 Tρ_V(g)=ρ_W(g)T 给出：若 Tv=0，则 Tρ_V(g)v=0，所以核不变；若 w=Tv，则 ρ_W(g)w=Tρ_V(g)v，所以像不变。",
        "T 非零，核不能是整个 V，只能为零；像非零，只能是整个 W。因此 T 双射。把交换关系左右用逆复合，也可见 T⁻¹ 保持表示，所以是表示同构。",
        "若 V=W 且 λ 是特征值，S=T-λI 仍交换表示且有非零核。第一部分说明 S 若非零必须单射，与非零核矛盾，故 S=0。此陈述不预设任意底域的算子总有特征值；代数闭域上的通常标量结论需再使用相应根存在结论。$\\square$"
      ]
    },
    {
      "id": "character-class-function",
      "topics": [
        "algebra/characters",
        "algebra/group-representations"
      ],
      "title": "特征标在共轭类上为常值且可加",
      "statement": "有限维表示的特征标 χ(g)=tr ρ(g)，对共轭不变；直和表示的特征标等于各特征标之和，χ(e)=dim V。",
      "dependencies": [
        "axiom-vector"
      ],
      "idea": "先逐项验证 tr(AB)=tr(BA)，再用于相似变换。",
      "steps": [
        "对方阵 A、B，tr(AB)=Σ_iΣ_j a_ij b_ji。交换有限求和顺序并用底域乘法交换，等于 Σ_jΣ_i b_ji a_ij=tr(BA)。",
        "因此 tr(SAS⁻¹)=tr(AS⁻¹S)=tr A。表示中 ρ(hgh⁻¹)=ρ(h)ρ(g)ρ(h)⁻¹，故 χ(hgh⁻¹)=χ(g)，也说明特征标与换基无关。",
        "直和矩阵按两块对角排列，迹为两块迹之和。单位元对应单位矩阵，其迹是维数乘底域单位元；在特征零时通常直接识别为整数维数。$\\square$"
      ]
    },
    {
      "id": "noetherian-equivalence",
      "topics": [
        "algebra/noetherian",
        "algebra/ideals"
      ],
      "title": "诺特条件的等价形式",
      "statement": "交换环 R 的所有理想有限生成，当且仅当每条理想升链最终稳定。",
      "dependencies": [
        "def-ring-field",
        "axiom-natural",
        "axiom-dependent-choice"
      ],
      "idea": "链的并是理想，有限生成元集中在有限一层；反向若不能有限生成就不断添加新元素。",
      "steps": [
        "设所有理想有限生成，对升链 I₁⊆I₂⊆…，令 I=∪I_n。任意有限加减和环乘只涉及有限层，取较大下标即可验证 I 为理想。若 I=(a₁,…,a_r)，每个生成元来自某层，取这些下标的最大值 N，便有 I⊆I_N，故此后全部等于 I_N。",
        "反向假设升链稳定，若某理想 I 不能有限生成，先选 a₁∈I。对已选 a₁,…,a_n，因其生成理想仍非 I，可选 a_(n+1) 在 I 中但不在其张成理想，得到严格升链，矛盾。因此每个理想有限生成。这里使用通常集合论中的可数选择，作为逐次选择的基础约定，若研究不含选择的集合论需另行区分。$\\square$"
      ]
    },
    {
      "id": "hilbert-basis",
      "topics": [
        "algebra/noetherian",
        "algebra/polynomial-rings"
      ],
      "title": "Hilbert 基定理",
      "statement": "若交换环 R 诺特，则 R[x] 诺特；重复应用可得任意有限个变元的多项式环也诺特。",
      "dependencies": [
        "noetherian-equivalence",
        "def-ring-field"
      ],
      "idea": "按最高次系数组织一条理想升链，在稳定层之后反复消去最高项。",
      "steps": [
        "取 R[x] 的理想 J。令 A_n 为 J 中次数至多 n 的多项式的 x^n 系数所成集合，包含零。系数运算使其为 R 的理想；乘 x 说明 A_n⊆A_(n+1)。由诺特升链条件，存在 N，使 n≥N 时 A_n=A_N。",
        "对每个 0≤n≤N，取 A_n 的有限生成元 a_ni，按定义选择 f_ni∈J，次数≤n，且 x^n 系数为 a_ni。考虑这些有限多个 f_ni 生成的多项式理想 K⊆J。",
        "若 f∈J 次数 d≥N，其首系数属于 A_d=A_N，可写为 Σ_i r_i a_Ni。于是 f-Σ_i r_i x^(d-N)f_Ni 的最高项消去，次数下降。若 d<N，则使用 A_d 对应的 f_di 同样消项。",
        "对次数归纳，反复下降后到零，说明 f∈K。因此 J=K 有限生成。J 任意，R[x] 诺特；多变元版本按变元数归纳，基底为 R。$\\square$"
      ]
    },
    {
      "id": "homology-defined",
      "topics": [
        "algebra/chain-complexes",
        "algebra/homology-groups"
      ],
      "title": "同调群的良定义与正合判别",
      "statement": "链复形 C 的边界群 B_n=im d_(n+1) 包含于循环群 Z_n=ker d_n，因此 H_n=Z_n/B_n 有定义，且 H_n=0 当且仅当复形在 C_n 正合。",
      "dependencies": [
        "def-chain"
      ],
      "idea": "微分平方为零保证每个边界都闭合，商为零恰好说明每个闭合链都是边界。",
      "steps": [
        "若 z=d_(n+1)c，则 d_n z=d_n d_(n+1)c=0，因此 B_n⊆Z_n。核与像都是子模，模商因而有定义。",
        "若 H_n=0，每个 z∈Z_n 的商类为零，所以 z∈B_n，故 Z_n=B_n。反向若两子模相等，商显然为零。此等式就是 im d_(n+1)=ker d_n 的正合定义。$\\square$"
      ]
    },
    {
      "id": "chain-map-homology",
      "topics": [
        "algebra/chain-complexes",
        "algebra/homology-groups",
        "foundations/functors"
      ],
      "title": "链映射诱导同调映射",
      "statement": "链映射 f:C→D 在每个次数诱导良定义的模同态 H_n(f):H_n(C)→H_n(D)，[z]↦[f_n(z)]，且保持恒等和复合。",
      "dependencies": [
        "homology-defined",
        "def-chain"
      ],
      "idea": "先看循环被送到循环，再看同类代表的差被送到边界。",
      "steps": [
        "若 d_Cz=0，则 d_D f(z)=f(d_Cz)=0，所以 f(z) 是循环。若 z′-z=d_Cc，则 f(z′)-f(z)=f(d_Cc)=d_D f(c)，差为边界。因此映射不依赖代表。",
        "模线性性由 f_n 传下；恒等链映射显然保持每个商类。对 f:C→D、g:D→E，有 [g(f(z))] 同时是 H_n(g∘f)([z]) 和 H_n(g)∘H_n(f)([z])，所以保持复合，给出同调函子。$\\square$"
      ]
    },
    {
      "id": "chain-homotopy",
      "topics": [
        "algebra/chain-complexes",
        "algebra/homology-groups",
        "geometry/homotopy"
      ],
      "title": "链同伦映射诱导相同同调映射",
      "statement": "若链映射 f,g:C→D 满足 f-g=d_Ds+sd_C，其中 s_n:C_n→D_(n+1)，则 H_n(f)=H_n(g) 对所有 n 成立。",
      "dependencies": [
        "chain-map-homology"
      ],
      "idea": "将同伦公式作用于循环后，第二项消失，剩下一个边界。",
      "steps": [
        "任取循环 z∈C_n，有 d_Cz=0。因此 f_n(z)-g_n(z)=d_D s_n(z)+s_(n-1)d_Cz=d_D s_n(z)。",
        "右侧是 D 中的边界，所以 f_n(z)、g_n(z) 代表同一同调类。所有类都有循环代表，故两个诱导映射相同。若两复形间映射的两个复合分别链同伦于恒等，同调函子保持复合，便给出互逆同调同构。$\\square$"
      ]
    },
    {
      "id": "long-exact-homology",
      "topics": [
        "algebra/exact-sequences",
        "algebra/homology-groups",
        "algebra/derived-functors"
      ],
      "title": "短正合链复形的长正合同调列",
      "statement": "若 0→A→B→C→0 为逐次数短正合链复形，则存在连接同态 δ:H_n(C)→H_(n-1)(A)，使 …→H_n(A)→H_n(B)→H_n(C)→H_(n-1)(A)→… 正合。",
      "dependencies": [
        "chain-map-homology",
        "homology-defined"
      ],
      "idea": "提升 C 中循环到 B，它的边界因投影为零而来自 A；逐个位置追踪核与像。",
      "steps": [
        "记单射 i、满射 p。对循环 c∈C_n，选 b∈B_n 使 pb=c。因 p(db)=dc=0，逐度正合性给唯一 a∈A_(n-1) 满足 ia=db。又 i(da)=d(ia)=d²b=0，单射使 da=0。定义 δ[c]=[a]。",
        "若换提升 b 为 b+i(u)，则 a 变为 a+du，不改类。若 c 换为 c+d(v)，提升 v 到 w∈B_(n+1)，可把 b 换成 b+dw，其边界不变；结合第一种变更说明与代表也无关。加法及数乘可选择提升的加法及数乘，故 δ 是模同态。",
        "在 H_n(B) 处：来自 i 的类投影为零。反之若循环 b 的投影是边界 dc，则提升 c 到 v，b-dv 投影零，写为 i(a)。其微分零且 i 单射，使 a 为循环。因此 [b] 来自 H_n(A)。",
        "在 H_n(C) 处：若 c=pb 且 b 循环，δ[c]=0。反之若 δ[c]=[a]=0，a=du，则对应提升 b 满足 d(b-i(u))=0，且投影仍为 c，所以 [c] 来自 H_n(B)。",
        "在 H_(n-1)(A) 处：若 a 为连接像，则 ia=db，是边界。反之若循环 a 满足 ia=db，则 p(b) 是循环，按连接构造 δ[p(b)]=[a]。三处核等于像，且次数 n 任意，于是得到整个长正合列。$\\square$"
      ]
    },
    {
      "id": "universal-unique",
      "topics": [
        "foundations/limits-colimits",
        "foundations/objects-morphisms"
      ],
      "title": "泛性质确定的积在唯一同构意义下唯一",
      "statement": "范畴中若 (P,p₁,p₂) 和 (Q,q₁,q₂) 都是同一对对象 A,B 的积，则唯一存在同时保持两投影的同构 P→Q。",
      "dependencies": [
        "def-category"
      ],
      "idea": "两次使用泛性质构造正反映射，再用分解唯一性迫使复合为恒等。",
      "steps": [
        "用 Q 的泛性质，P 上的两投影给唯一 u:P→Q，使 q_i u=p_i。用 P 的泛性质，同样给唯一 v:Q→P，使 p_i v=q_i。",
        "对 vu:P→P，有 p_i vu=q_i u=p_i，恒等态射也满足相同两投影条件。P 的唯一性使 vu=id_P。同理 uv=id_Q，因此 u 是同构，v 是其逆。",
        "任意另一保持投影的 P→Q 映射都由 Q 的泛性质等于 u，因此该同构在要求保持结构的意义下唯一。只说对象“相同”会丢失这里的同构含义。$\\square$"
      ]
    },
    {
      "id": "natural-composition",
      "topics": [
        "foundations/natural-transformations",
        "foundations/functors"
      ],
      "title": "自然变换的复合仍自然",
      "statement": "若 α:F⇒G、β:G⇒H 是同一源范畴到同一目标范畴的自然变换，则 (βα)_X=β_Xα_X 定义自然变换 F⇒H。",
      "dependencies": [
        "def-category"
      ],
      "idea": "把两个自然性方块按同一态射拼接，逐次使用交换关系。",
      "steps": [
        "任取源范畴态射 f:X→Y。α 自然性给 G(f)α_X=α_YF(f)，β 自然性给 H(f)β_X=β_YG(f)。",
        "结合态射复合的结合律，H(f)(β_Xα_X)=β_YG(f)α_X=β_Yα_YF(f)，这正是复合分量的自然性。每分量上的恒等态射也满足方块条件，复合的结合律逐分量继承，因而函子与自然变换本身组成函子范畴。$\\square$"
      ]
    },
    {
      "id": "biquadratic-five-fields",
      "topics": [
        "algebra/fundamental-theorem-galois",
        "algebra/finite-groups"
      ],
      "title": "双二次扩张的五个中间域",
      "statement": "K=Q(√2,√3) 对 Q 次数为四，其伽罗瓦群为 Klein 四元群，恰有五个中间域：Q、Q(√2)、Q(√3)、Q(√6)、K。",
      "dependencies": [
        "unique-factorization",
        "minimal-polynomial",
        "tower-law",
        "galois-correspondence"
      ],
      "idea": "先排除第二个平方根已在第一个二次域中，再数四元群的全部子群。",
      "steps": [
        "由整数素因子分解的指数奇偶性，2、3、3/2 都不是有理数的平方。例如若 (p/q)²=3/2，则 2p²=3q²，两侧素因子 3 的指数分别为偶数与奇数，矛盾，其他两个情形同理。所以 Q(√2)/Q 次数为二。",
        "若 √3=a+b√2、a,b∈Q，平方得 3=a²+2b²+2ab√2。因 √2 无理，ab=0；b=0 要求 a²=3，a=0 要求 b²=3/2，均不可能。因此 √3 不在 Q(√2) 中，第二层仍为二次，由塔式公式得到总次数四，基为 1、√2、√3、√6。",
        "该域是 (x²-2)(x²-3) 的分裂域，根全不同，故有限正规可分。两个平方根可分别独立换符号；这些替换保持上述基的乘法关系，给四个不同自同构，群为 (Z/2Z)²。",
        "按 Lagrange，四元群子群阶只能为 1、2、4。阶一和阶四各一个；三个非单位元各生成一个不同阶二子群，所以共五个子群。用基的系数逐项检查，三个阶二子群固定域分别为 Q(√2)、Q(√3)、Q(√6)，另两端对应 K 与 Q。基本对应保证除此之外没有中间域。$\\square$"
      ]
    }
  ]
};
