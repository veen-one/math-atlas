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
    "def-affine-algebraic-set": {
      "title": "仿射代数集、不可约与多项式映射",
      "statement": "固定代数闭域 k。仿射代数集 X⊆k^n 的闭子集为 X∩V(J)，坐标环 k[X]=k[x₁,…,x_n]/I(X)。非空 X 称不可约，若不能写成两个真闭子集的并。X→Y⊆k^m 的多项式映射指其 m 个坐标函数均为 X 上多项式限制。本章只使用这种映射，不预设一般概形或局部正则函数的全局表示定理。"
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
    "def-compact-self-adjoint": {
      "title": "紧自伴算子与内积约定",
      "statement": "H 为实或复 Hilbert 空间，内积在第一变量线性。自伴算子 T 在本章指处处定义的有界线性算子，满足 〈Tx,y〉=〈x,Ty〉。紧指对任意有界序列 x_n，Tx_n 有范数收敛子列。算子范数为单位球上 ‖Tx‖ 的上确界；不包含无界算子的定义域问题。"
    },
    "def-contour": {
      "title": "复可导与曲线积分的定义",
      "statement": "复导数按复增量差商极限定义。分段 C¹ 参数曲线 γ 上，∫f(z)dz 定义为 ∫f(γ(t))γ′(t)dt，实部与虚部分别积分。正向多边形边界按逆时针取向。此章可用 π=4∫₀¹(1+t²)⁻¹dt 表示所需常数，因此计算绕行积分不预设三角函数参数化。"
    },
    "def-simply-connected-domain": {
      "title": "单连通域与保持端点的同伦",
      "statement": "域指非空连通开集。此章单连通使用等价的基点环路定义：域路径连通，且每个基点闭环都有连续收缩 H:[0,1]²→Ω，使 H(0,t) 为该环路、H(1,t) 为基点常路径、H(s,0)=H(s,1) 为同一基点。一般端点同伦要求 H(s,0)、H(s,1) 各自不随 s 变化。以下证明不要求 H 可微。"
    },
    "def-finite-structures": {
      "title": "有限偏序、格、网络与算法约定",
      "statement": "偏序满足自反、反对称、传递；格中每对元素有交与并，布尔代数为有补有界分配格。流网络有限有向、容量非负实数，除源汇外流守恒。算法复杂度按二进制输入与标准有限状态程序定义；归约为可计算的多项式时间映射。密码协议使用有限群、随机密钥及明确列出的安全实验，不预设任何计算困难猜想已被证明。"
    },
    "axiom-zorn": {
      "title": "Zorn 极大原则（选择基础）",
      "statement": "采用通常 ZFC 集合论的选择原则形式：非空偏序集若每条全序链都有上界，则有极大元。这是本章明确采用的集合论基础，不声称由较弱的依赖选择证明。"
    },
    "def-schwartz": {
      "title": "Schwartz 函数与 Fourier 约定",
      "statement": "S(R) 指所有光滑函数 f，满足每个非负整数 m,k 都有 sup_x |x^m f^(k)(x)| 有限。Fourier 约定为 fhat(ω)=∫_R f(x)exp(-iωx)dx，逆变换带 1/(2π)。Lebesgue 实线测度按区间长度及 Borel 测度的完备化理解；此处给定该测度，不把其从外测度构造的存在定理当作已证明。"
    },
    "def-singular-low": {
      "title": "低维奇异链与基本群的定义",
      "statement": "C_k(X;Z)为连续映射σ:Δ^k→X所生成的自由Abel群，边界∂σ=Σ_(i=0)^k(−1)^iσ|第i个面；H₁=ker∂₁/im∂₂，H₀=C₀/im∂₁。路径视为奇异1单形，∂α=终点−起点。基本群π₁(X,o)由以o为基点环路的端点固定同伦类组成，乘法为先走第一条再走第二条；Abel化为商掉交换子生成的子群。"
    },
    "def-hilbert-fol": {
      "title": "本章的一阶 Hilbert 演算",
      "statement": "语言可数，含函数、谓词及等号，结构论域非空。用 ¬、→、∀ 为基本符号，其他联结词和 ∃ 按经典等价式定义。公理为所有命题重言式的代入实例、∀xφ→φ[t/x]（代入自由）、∀x(α→β)→(α→∀xβ)（x 不自由出现于 α），以及等号自反与在公式中替换等项的公理。规则为 modus ponens 与全称概括；概括变量不得自由出现于未解除前提。本章理论和被证明结论先取句子，以避开开放前提的一般化限制。⊥ 表示一个固定矛盾句。"
    },
    "def-jordan-separation": {
      "title": "平面简单闭曲线分隔事实",
      "statement": "本章在多面体欧拉公式的组合证明中使用 Jordan 曲线定理的球面形式：球面上的简单闭曲线补集有两个连通分支，曲线的两侧分别邻接不同分支。该拓扑定理在此作为明确基础；本卷不以组合论推导它。"
    },
    "def-euclidean-area": {
      "title": "欧氏多边形面积的基本性质",
      "statement": "本条只用于有限直边图形：正方形边长 s 的面积为 s²；直角三角形两直角边长 a,b 的面积为 ab/2（将其复制一次拼成 a×b 矩形）；全等图形面积相同，有限个内部不交多边形拼成的图形面积等于各面积之和。"
    },
    "def-finite-markov": {
      "title": "有限马尔可夫链约定",
      "statement": "状态空间 S 有限，转移矩阵 P 的元素非负且每行和为一；分布写作行向量，演化为 μ↦μP。不可约指任意状态可经有限步以正概率到达任意另一状态。"
    },
    "def-linear-control": {
      "title": "有限维线性离散控制系统",
      "statement": "系统 x_(k+1)=Ax_k+Bu_k，状态 x_k∈R^n、输入 u_k∈R^m；可控指任意初态能在有限步由某输入序列送达任意目标态。"
    },
    "def-module-localization": {
      "title": "交换环上的模与局部化",
      "statement": "R 为含幺交换环，M 为 R-模，S⊆R 含 1、乘法封闭且不含 0（若允许零环需单独处理）。局部化 S⁻¹R 与 S⁻¹M 的分数等价关系为 (m,s)~(n,t) 当且仅当存在 u∈S 使 u(tm−sn)=0。"
    },
    "def-identifiability": {
      "title": "全局与局部可辨识性定义",
      "statement": "参数映射 F:Θ→Y 全局可辨识指对任意 θ,θ′∈Θ，F(θ)=F(θ′) 蕴含 θ=θ′。在 θ 邻域 U 内局部可辨识指对所有 θ′∈U，F(θ′)=F(θ) 蕴含 θ′=θ。"
    },
    "def-beta-integral": {
      "title": "Beta 积分的定义",
      "statement": "对 x,y>0，B(x,y)=∫₀¹t^(x−1)(1−t)^(y−1)dt。该广义积分在端点收敛；可由分别在 0 和 1 的幂次比较验证。"
    },
    "def-topological-space": {
      "title": "拓扑空间、连续映射与商拓扑定义",
      "statement": "拓扑由开集族定义并对任意并、有限交封闭且含空集与全空间。映射连续指开集原像开。满射 q:X→Y 的商拓扑定义为 U⊆Y 开当且仅当 q⁻¹(U) 在 X 中开。"
    },
    "def-poisson-process": {
      "title": "泊松过程定义",
      "statement": "强度 λ 的齐次泊松过程满足 N(0)=0、计数独立平稳增量，且每段长度 t 的增量服从 Poisson(λt)，其中零次概率为 exp(−λt)，指数函数满足 exp(a+b)=exp(a)exp(b)。"
    },
    "def-differential-forms": {
      "title": "微分形式、拉回与外微分定义",
      "statement": "k-形式是切空间上的交替 k-线性形式场；拉回按 (φ*α)_x(v₁,…,v_k)=α_(φ(x))(dφ_xv₁,…,dφ_xv_k) 定义。外微分在坐标表达为 d(Σ_I f_I dx_I)=Σ_(j,I)(∂_j f_I)dx_j∧dx_I。代数展开给 φ*(α∧β)=φ*α∧φ*β 与 φ*(cα)=cφ*α。"
    },
    "def-riemannian-metric": {
      "title": "黎曼度量与联络约定",
      "statement": "黎曼度量 g 是切空间上的光滑正定对称双线性形式。联络的 Christoffel 系数 Γ^k_ij 描述协变导数；torsion-free 指 Γ^k_ij=Γ^k_ji，度量相容指坐标式 ∂_k g_ij=Γ^ℓ_ki g_ℓj+Γ^ℓ_kj g_iℓ。仿射参数测地线定义为 ∇_(γ̇)γ̇=0。"
    },
    "def-covering-map": {
      "title": "覆盖映射定义",
      "statement": "连续满射 p:E→B 是覆盖映射，若每个 b∈B 有开邻域 U，使 p⁻¹(U) 是两两不交开集之并，且 p 在每一片到 U 上为同胚。"
    },
    "def-rational-map": {
      "title": "不可约代数簇间有理映射定义",
      "statement": "有理映射 X⇢Y 是从 X 的某非空开子集到 Y 的正则映射，按在稠密开集上相等识别。双有理表示存在反向有理映射，使两复合在有定义的稠密开集上为恒等。"
    },
    "def-finite-sum": {
      "title": "有限和微分约定",
      "statement": "有限项可微函数之和逐项微分；这是导数定义与有限线性运算交换的直接推论，不涉及无穷级数换序。"
    },
    "def-loss-var": {
      "title": "损失分位数 VaR 定义",
      "statement": "损失随机变量 L 的 α 分位数 VaR_α(L)=inf{x∈R:P(L≤x)≥α}，0<α<1。"
    },
    "def-elliptic-curve": {
      "title": "短 Weierstrass 曲线与弦切群法则约定",
      "statement": "域 k 特征不为 2、3，非奇异曲线 E:y²=x³+Ax+B 的射影闭包附唯一无穷远点 O。弦切法则定义三交点 P,Q,R（重数计数）满足 P+Q+R=O，并把过点直线的第三交点关于 x 轴反射作为 P+Q；本章只用该定义验证逆元公式，不预设结合律。"
    },
    "def-modular-form": {
      "title": "模形式与尖点消失定义",
      "statement": "固定权与模群及其变换律的全纯函数称模形式；在尖点坐标 q=e^(2πiτ) 中要求全纯展开 f(q)=Σ_(n≥0)a_nq^n。尖点形式在每个尖点取值为零；无穷远处即 a₀=0。"
    },
    "def-scheme-structure": {
      "title": "仿射概形结构层定义",
      "statement": "Spec R 的点为素理想 p；基本开集 D(f)={p:f∉p} 构成拓扑基，并规定结构层在 D(f) 上的环为 R_f。点处茎定义为所有含该点开邻域截面环沿限制映射的直极限。"
    },
    "def-brownian": {
      "title": "标准布朗运动定义",
      "statement": "标准布朗运动 B₀=0，样本路径连续，且对 0≤s<t，增量 B_t−B_s 与过去独立并服从均值 0、方差 t−s 的正态分布。"
    },
    "def-ito-step-integral": {
      "title": "简单适应过程的 Itô 积分定义",
      "statement": "对分割 0=t₀<…<t_n，简单适应过程 H_t=Σ_i H_i 1_[t_i,t_(i+1))，其中 H_i 对时刻 t_i 的信息可测，定义 ∫H dB=Σ_i H_i(B_(t_(i+1))−B_(t_i))；再以 L² 闭包定义一般平方可积适应过程积分。"
    },
    "def-interval-length": {
      "title": "区间长度有限可加性",
      "statement": "实区间长度为端点差；有限个内部不交子区间的长度和不超过包含它们的总区间长度。"
    },
    "def-elliptic-modularity-euler-factor": {
      "title": "椭圆曲线与归一化新形式的局部 L 因子",
      "statement": "对素数 p 处良约化的椭圆曲线 E/Q，定义 a_p(E)=p+1−#E(F_p)，局部因子 L_p(E,s)=(1−a_p(E)p^(−s)+p^(1−2s))^(−1)。对归一化权 2 Hecke 特征新形式 f=Σa_nq^n，局部因子 L_p(f,s) 采用相同形式，其中系数是 Fourier 系数 a_p(f)。称 E 与 f 模性对应时要求其 L 函数（等价地在收敛区域的 Euler 因子）相同。"
    },
    "def-abelian-variety": {
      "title": "阿贝尔簇定义",
      "statement": "阿贝尔簇是代数闭域上的连通、光滑、射影代数群；群加法与取逆均为正则映射。"
    },
    "def-propositional-lk": {
      "title": "经典命题 LK 演算",
      "statement": "公式用原子、¬、∧、∨生成；相继式 Γ⇒Δ 的语义为“Γ 全真蕴含 Δ 至少一项为真”。初始式 A⇒A，允许左右弱化与交换；¬、∧、∨ 规则分别为通常的经典相继式规则，例如 ∧L 从 Γ,A,B⇒Δ 得 Γ,A∧B⇒Δ，∧R 从 Γ⇒Δ,A 与 Γ⇒Δ,B 得 Γ⇒Δ,A∧B，∨L 对 A、B 分两前提，∨R 把 A、B 同置右侧。LK 还可加入 cut 规则 Γ⇒Δ,A 与 Γ,A⇒Δ 得 Γ⇒Δ。"
    },
    "def-effective-arithmetic-coding": {
      "title": "算术证明系统的有效编码假设",
      "statement": "固定一套可有效判定的有限字符串公式/证明编码，编号记作 ⌜·⌝。替换函数 Sub(e,n) 在 e 是单自由变量公式编码时返回把变量替换为数字 n 后的句子编码。Proof_T(p,n) 表示 p 编码一份 T 中句子编号 n 的有限证明；Prov_T(n):=∃p Proof_T(p,n)。本条 Gödel 论证明确假设 T 能证明其所用每个具体闭项 Sub(k,k) 的正确数值计算，并能在标准自然数结构中正确解释 Proof_T；不在此假装已证明 Robinson Q 对所有原始递归关系的表示定理。"
    },
    "def-proof-code-arithmetic": {
      "title": "证明谓词与算术化检查假设",
      "statement": "固定有效形式演算，Prf_T(p,n) 表示 p 是 T 中编号 n 句子的有限证明，Prov_T(n):=∃p Prf_T(p,n)。本章对理论 T 明列假设：证明检查与代入数字可由原始递归关系表示；T 能证明具体正确的证明检查；T 能验证 MP 拼接证明及“由证明代码生成 Prov 句证明”的统一原始递归代码变换。以下 D1–D3 的证明均只在这些算术化假设下成立。"
    },
    "def-integral-extension": {
      "title": "整元素与代数闭域定义",
      "statement": "含幺交换环扩张 R⊆S 中，s 对 R 整指 s 满足系数在 R 中的首一多项式。代数闭域 k 指每个正次数 k 系数多项式在 k 中有根。理想根式 √I={f:存在正整数m使f^m∈I}；V(I) 为全部 I 中多项式的共同 k 点零集，I(X) 为在点集 X 上全部消失的多项式理想。"
    },
    "def-sobolev": {
      "title": "弱导数、Sobolev 空间与变分形式的定义",
      "statement": "开集 Ω 上，v_i 是 u 的第 i 个弱导数指对每个光滑紧支撑测试函数 φ 有 ∫u∂_iφ=-∫v_iφ。H¹(Ω) 为函数及全部一阶弱导数均平方可积的类，范数平方为这些 L² 范数平方之和。H¹_0 定义为光滑紧支撑函数在该范数中的闭包。零边值在本章按此定义，而不预设未证明的边界迹定理。"
    },
    "def-pid": {
      "title": "主理想整环与矩阵等价",
      "statement": "PID 指每个理想都由单个元素生成的含幺交换整环，允许它本身为域。矩阵等价指左右分别乘可逆矩阵，改变映射源与目标的基。元素 a,b 的最大公因子 g 指 (a,b)=(g)，于是 g=ua+vb，且 a/g、b/g 属于环；最大公因子与分解因子均只在相差单位元意义下唯一。"
    },
    "def-conditional": {
      "title": "信息流、条件期望和停时的定义",
      "statement": "信息流是递增 σ 代数列。条件期望 Z=E[X|G] 指 G 可测且对每个 A∈G 有 ∫_A Z=∫_A X 的可积变量，按几乎处处相等识别。停时 T 满足 {T≤n}∈F_n。鞅 M_n 适应且可积，并满足 E[(M_n-M_(n-1))1_A]=0 对所有 A∈F_(n-1)。本卷在 L² 情形证明条件期望存在。"
    },
    "axiom-dependent-choice": {
      "title": "依赖选择的基础约定",
      "statement": "允许从非空初始集合出发，在每一步总有下一候选时递归作可数次相依选择。这是常用 ZFC 基础中可用的选择原则，不被当作已经证明的数学定理。"
    },
    "def-boolean-algebra": {
      "title": "布尔代数的定义",
      "statement": "布尔代数为含0、1的有补分配格，运算为有限交∧、有限并∨与补¬。序a≤b指a∧b=a；使用结合、交换、吸收、分配、单位元及互补律。"
    },
    "def-chain": {
      "title": "链复形、链映射与模的定义",
      "statement": "使用环上的模、模同态与商模的定义。链复形的微分 d_n:C_n→C_(n-1) 满足 d_(n-1)d_n=0；链映射与微分交换；H_n(C)=ker d_n/im d_(n+1)。短正合列在每个次数上要求单射、像等于核、满射。"
    },
    "def-category": {
      "title": "范畴、函子与泛性质的定义",
      "statement": "范畴有对象、态射、结合的复合与恒等态射；函子保持复合和恒等；自然变换逐对象给态射且满足自然性方块。积或其他泛对象按相应唯一分解性质定义。"
    },
    "def-ultrafilter": {
      "title": "滤子、超滤与集合论选择基础",
      "statement": "非空集合 I 上的真滤子 U⊆P(I) 含 I、不含空集、对有限交与向上包含封闭。极大真滤子称超滤。采用 ZFC 的集合构造、收集与选择：对集合索引的可满足条件可收集一族见证，再作选择；不把这些作为本卷已证明的数学命题。结构论域均非空，语言及理论均为集合。"
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
      "id": "absolute-series-rearrangement",
      "topics": [
        "analysis/series"
      ],
      "title": "绝对收敛级数重排不变",
      "statement": "若实数级数 $\\sum_{n\\ge1}a_n$ 绝对收敛，且 $\\pi:\\mathbb N\\to\\mathbb N$ 为双射，则 $\\sum_{k\\ge1}a_{\\pi(k)}$ 收敛并与原级数同和。",
      "dependencies": [
        "absolute-convergence"
      ],
      "idea": "有限项完全相同；充分大的有限集合已捕获绝对值尾项的全部质量。",
      "steps": [
        "记 $S=\\sum_na_n$。给定 $\\varepsilon>0$，绝对收敛的柯西条件给 N，使任意有限指标集 F⊂{N+1,N+2,…} 都满足 $|\\sum_{n\\in F}a_n|≤\\sum_{n∈F}|a_n|<\\varepsilon$。这里非负级数尾和小于 ε，故其任意有限子和也小于 ε。",
        "令重排部分和 $T_m=\\sum_{k=1}^m a_{\\pi(k)}$。因 π 双射，有限集 {π(1),…,π(m)} 随 m 增长最终包含 {1,…,N}；取此后的 m。其与初始段之差仅由指标大于 N 的项组成，因此 $|T_m-\\sum_{n=1}^N a_n|<\\varepsilon$。",
        "同时原级数尾和满足 $|S-\\sum_{n=1}^Na_n|<\\varepsilon$。故所有充分大的 m 有 |T_m−S|<2ε。ε 任意，得 T_m→S。证明也表明无需假设项非负。$\\square$"
      ]
    },
    {
      "id": "riemann-rearrangement",
      "topics": [
        "analysis/series"
      ],
      "title": "条件收敛级数的任意目标重排",
      "statement": "若实级数 $\\sum a_n$ 收敛但不绝对收敛，则对每个 L∈R 存在一个重排，其和为 L。",
      "dependencies": [
        "absolute-series-rearrangement",
        "series-cauchy"
      ],
      "idea": "正项子级数与负项绝对值子级数都发散；交替取到越过目标的最少项，超越误差趋零。",
      "steps": [
        "写正项为 $p_i>0$，负项为 $-q_j<0$，忽略零项。因原级数收敛而非绝对收敛，正项和与 q_j 的和都发散：若正项和有限，则部分和收敛迫使负项绝对值和亦有限，反之亦然。并且 p_i→0、q_j→0，否则原级数项不趋零。",
        "先依原顺序取最少的未用正项，使当前部分和首次大于 L；随后取最少的未用负项，使部分和首次小于 L。两个阶段都能完成，因为各自剩余的正项和及负项绝对值和仍发散。如此交替无穷次。",
        "每次正项阶段结束时，超出 L 的量至多是最后加入的那个正项，故在该阶段结束时偏差至多相应 p_i；负项阶段结束时低于 L 的偏差至多最后一个 q_j。阶段结束指标趋无穷，且 p_i,q_j→0，因此阶段端点部分和趋于 L。",
        "还须控制阶段内部部分和：正项阶段单调递增，值位于阶段起点与终点之间；负项阶段单调递减，也位于两个端点之间。两端都趋 L，故整条重排部分和趋 L。每个正项和负项均在有限阶段中最终取到；否则某一侧余项始终未取而另一侧每阶段只加入有限项，且该侧发散会使阶段无法在首次越过有限 L 时停止。更形式地，每阶段“最少项”有限，因为该侧项级数发散；任一固定位置的项在其符号侧至多经过有限次阶段即被取用。所得序列因此恰是全部非零原项的排列；零项按原序插回不改极限。$\\square$"
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
      "id": "irreducible-prime-correspondence",
      "topics": [
        "geometry/algebraic-varieties-geometry",
        "algebra/prime-ideals",
        "geometry/coordinate-rings"
      ],
      "title": "不可约仿射代数集与素理想的对应",
      "statement": "非空仿射代数集 X 不可约，当且仅当 I(X) 为素理想，当且仅当 k[X] 为整环。因此素理想 p 对应不可约代数集 V(p)。",
      "dependencies": [
        "strong-nullstellensatz",
        "maximal-prime-quotient",
        "def-affine-algebraic-set"
      ],
      "idea": "乘积在所有点为零意味着整个代数集被两个零点闭集覆盖；不可约性迫使其中一个因子处处为零。",
      "steps": [
        "若 X 不可约，且 fg∈I(X)，则每个 a∈X 有 f(a)g(a)=0，域无零因子使 X=(X∩V(f))∪(X∩V(g))。两者闭，不可约性使至少一个等于 X，所以 f∈I(X) 或 g∈I(X)。X 非空又保证1∉I(X)，故为真素理想。",
        "反向若 I(X) 素，而 X=X₁∪X₂、两者都是真闭子集，写 X_i=X∩V(J_i)。因 X_i 真，可取 X 中不在 X_i 的点，从 J_i 中选一个在该点非零的多项式 f_i。于是 f_i 在 X_i 消失，却不属于 I(X)。但 f₁f₂ 在 X₁∪X₂=X 消失，属于 I(X)，与素性矛盾。",
        "商环为整环与理想素性的等价已证明。任一素理想 p 真，由弱零点定理 V(p) 非空；素理想为根式理想（f^m∈p 反复用素性得 f∈p），故强零点定理给 I(V(p))=p。套用前两步得到不可约性，完成对应。$\\square$"
      ]
    },
    {
      "id": "affine-polynomial-map-duality",
      "topics": [
        "geometry/coordinate-rings",
        "geometry/algebraic-varieties-geometry",
        "foundations/functors"
      ],
      "title": "仿射代数集的多项式映射与坐标环同态",
      "statement": "仿射代数集 X⊆k^n、Y⊆k^m 的多项式映射 F:X→Y 与保单位 k-代数同态 F*:k[Y]→k[X] 一一对应，F*([h])=[h∘F]。复合顺序反转；多项式同构对应坐标环同构。",
      "dependencies": [
        "strong-nullstellensatz",
        "def-affine-algebraic-set"
      ],
      "idea": "映射的坐标函数决定拉回同态；反向把坐标变量的像选成多项式代表。",
      "steps": [
        "若 F 的坐标由 f₁,…,f_m 给出，定义 h 的拉回为 h(f₁,…,f_m) 在 k[X] 中的类。换 f_i 的代表不会改变 X 上的函数值，差属于 I(X)；若 h∈I(Y)，因 F(X)⊆Y，其复合在 X 上消失，故类为零。因此映射能下降到 k[Y]，并逐项保持加法、乘法、标量及单位元。",
        "反向给 θ:k[Y]→k[X]，对 Y 的坐标变量 y_i 的类取像 θ([y_i])，各选多项式代表 f_i。令 F(x)=(f₁(x),…,f_m(x))。对任意 h∈I(Y)，有 θ([h])=0，所以 h(f₁,…,f_m)∈I(X)，在 X 上消失。因此 F(x)∈V(I(Y))=Y。代表变化仍给相同点值，故 F 定义良好。",
        "坐标变量的像唯一确定 k-代数同态，坐标函数的点值也唯一确定 F，故两个构造互逆。若 G:Y→Z，逐函数代入给 (G∘F)*=F*∘G*，恒等映射对应恒等同态。因此双向多项式逆映射给双向环逆同态；反向环同构也由此构造出双向多项式逆，得到同构对应。$\\square$"
      ]
    },
    {
      "id": "finite-transcendence-exchange",
      "topics": [
        "algebra/dimension-theory",
        "algebra/field-extensions"
      ],
      "title": "有限超越基的交换与基数唯一性",
      "statement": "若域 E 代数于 F(t₁,…,t_r)，且 t_i 对 F 代数无关，则 E 中任意 F-代数无关集至多有 r 个元素；每个超越基均恰有 r 个元素。",
      "dependencies": [
        "minimal-polynomial"
      ],
      "idea": "从多项式关系中交换两个元素，逐次用新的独立元素替换有限生成集合。",
      "steps": [
        "先证交换事实：若 x 对 K 超越，却对 K(y) 代数，则清分母给非零关系 P(x,y)=0，P∈K[X,Y]。把它视为 Y 的多项式，其系数在 K[x]；x 超越保证非零多项式系数代入后仍非零，而且它不能是非零常数项独自成立，否则 x 对 K 代数。因此 y 对 K(x) 代数。",
        "设 u₁,…,u_s 代数无关。从 E 代数于 F(t₁,…,t_r) 出发，逐次加入 u_j。假设已替换前 j−1 个，E 代数于 F(u₁,…,u_(j−1),剩余t)。u_j 对前面 u 的域超越，却对加入全部剩余 t 后的域代数。选一个使其代数的最小 t 子集，并挑其中一个 t。令 K 为前面 u 加上该子集其余 t 的域，交换事实使所挑 t 对 K(u_j) 代数。",
        "因此可删去该 t、加入 u_j，同时仍使 E 代数于新生成域；这里使用代数扩张的传递性：有限个代数关系只需有限个代数系数，它们生成有限扩张，再用塔式次数得传递。每次至少删一个 t，最多 r 次。若 s>r，第 r+1 个 u 将对前面 u 的域代数，违反无关性。所以 s≤r。任意无限无关集若存在也有 r+1 元子集，同样被排除。",
        "若另一组超越基大小为 s，则由刚证 s≤r，它也有限；反向以这组基为生成域重复论证，得 r≤s。因此基数唯一，记为 trdeg_F E=r。$\\square$"
      ]
    },
    {
      "id": "polynomial-ring-dimension",
      "topics": [
        "algebra/dimension-theory",
        "algebra/polynomial-rings"
      ],
      "title": "多项式环的 Krull 维数",
      "statement": "对任意域 k，dim k[x₁,…,x_r]=r。",
      "dependencies": [
        "noether-normalization",
        "integral-extension-dimension"
      ],
      "idea": "非零素理想含一个非零多项式，首一化后其商整于至多 r−1 个变量的环，从而对变量数归纳。",
      "steps": [
        "r=0 时环为域，唯一素理想为零，维数0。设对 r−1 已知。固定 r 变量环 A 的任意非零素理想 p，选非零 f∈p。f 不可能是非零常数。使用正规化证明中的加权三角变量替换，将 f 化为最后一个变量 y_r 的首一多项式（非零标量可除去）；变换 x_i=y_i+y_r^(B^i)、x_r=y_r 可逆，逆为 y_i=x_i−x_r^(B^i)。",
        "于是整域 A/p 由最后变量的商类有限生成于子环 R=image(k[y₁,…,y_(r−1)])，且该变量满足首一关系，所以为整扩张。整扩张保持维数给 dim(A/p)=dim R。R 是 r−1 变量多项式环的商；商环的任何素理想链沿满射取原像，给原环同长度严格素链。因此 dim R≤r−1。",
        "对 A 的任意有限严格素链，可在最前补上零理想；A 是整环，零理想素。若链长度至少1，写成0⊊p₁⊊…⊊p_l，商 A/p₁ 中得到长度 l−1 的链，因此 l−1≤r−1，l≤r。未从零开始的链长度只会更小，故 dim A≤r。",
        "反向 (0)⊊(x₁)⊊(x₁,x₂)⊊…⊊(x₁,…,x_r) 是长度 r 的严格素链，因为各商为余下变量的多项式整环。因此 dim A≥r，合并得等式。$\\square$"
      ]
    },
    {
      "id": "affine-domain-dimension-formula",
      "topics": [
        "algebra/dimension-theory",
        "geometry/coordinate-rings"
      ],
      "title": "有限生成整环的维数等于超越次数",
      "statement": "任意域 k 上非零有限生成整环 A 满足 dim A=trdeg_k Frac(A)。",
      "dependencies": [
        "noether-normalization",
        "polynomial-ring-dimension",
        "integral-extension-dimension",
        "finite-transcendence-exchange"
      ],
      "idea": "正规化将环维数化到多项式子环；有限代数分式域扩张给同一组超越基。",
      "steps": [
        "Noether 正规化给代数无关 t₁,…,t_r∈A，使 A 有限于 C=k[t₁,…,t_r]，从而整于 C。整域整扩张保持维数及多项式环计算给 dim A=dim C=r。",
        "正规化证明也已给 Frac(A) 是 k(t₁,…,t_r) 的有限代数扩张。因此 t₁,…,t_r 是该分式域的超越基；有限超越基交换定理保证超越次数定义无歧义，等于 r。合并两式即得公式。$\\square$"
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
      "id": "baire-category",
      "topics": [
        "analysis/banach-spaces"
      ],
      "title": "Baire 类别定理（完备度量空间）",
      "statement": "非空完备度量空间 X 中，可数个稠密开集的交在 X 中稠密。等价地，X 不能是可数个内部为空的闭集之并。",
      "dependencies": [
        "def-complete",
        "axiom-metric",
        "axiom-dependent-choice"
      ],
      "idea": "在给定开集内递归套入半径趋零的闭球，用完备性取得共同点。",
      "steps": [
        "设 U_n 为稠密开集，V 为任意非空开集。U₁∩V 非空且开，可选 x₁ 及 r₁>0，使闭球 C₁={x:d(x,x₁)≤r₁} 包含在 U₁∩V，且 r₁≤1/2。选取方式：先取包含于该开集的开球，再缩小半径一半。",
        "递归地，B(x_n,r_n)∩U_(n+1) 非空且开，选闭球 C_(n+1) 包含其中，半径 0<r_(n+1)≤2^(−n−1)。于是 C_(n+1)⊆C_n。对 m≥n，x_m∈C_n，故 d(x_m,x_n)≤r_n→0，中心序列柯西。",
        "完备性给 x_n→x。各 C_n 闭且包含全部后续中心，故 x∈C_n 对全部 n 成立。因此 x∈V∩∩U_n。任意非空开 V 都与交相遇，正是稠密性。若闭集 F_n 内部为空，其补为稠密开集，此结论排除 ∪F_n=X；上述闭球构造已直接证明稠密开集版本，取补集又给闭集覆盖版本。$\\square$"
      ]
    },
    {
      "id": "uniform-boundedness",
      "topics": [
        "analysis/banach-spaces",
        "analysis/linear-operators"
      ],
      "title": "Banach–Steinhaus 一致有界原理",
      "statement": "设 X 为 Banach 空间、Y 为赋范空间，{T_α} 为任意族有界线性算子 X→Y。若每个 x∈X 满足 sup_α‖T_αx‖<∞，则 sup_α‖T_α‖<∞。",
      "dependencies": [
        "baire-category",
        "axiom-vector"
      ],
      "idea": "闭集 E_n 收集所有算子值均不超过 n 的点；其中一个有内点，用相减和缩放取得算子范数界。",
      "steps": [
        "空算子族结论直接成立。令 E_n={x:对所有 α，‖T_αx‖≤n}。每个 T_α 连续且范数连续，E_n 是闭集的任意交，故闭。逐点有界使 X=∪_(n≥1)E_n。",
        "由 Baire，某 E_N 含开球 B(x₀,r)，r>0。特别 x₀∈E_N。对任意单位向量 u，x₀+(r/2)u∈E_N，所以 ‖T_α((r/2)u)‖≤‖T_α(x₀+(r/2)u)‖+‖T_αx₀‖≤2N。",
        "线性与齐次性给 ‖T_αu‖≤4N/r，界不依赖 α 或单位向量 u。由算子范数定义，所有 ‖T_α‖≤4N/r。X={0} 时所有算子范数为零，另行成立。注意 Y 完备性不是本定理的前提。$\\square$"
      ]
    },
    {
      "id": "open-mapping-banach",
      "topics": [
        "analysis/banach-spaces",
        "analysis/linear-operators"
      ],
      "title": "Banach 开映射定理",
      "statement": "Banach 空间 X,Y 之间的有界满射线性算子 T 是开映射；若同时单射，则逆算子有界。",
      "dependencies": [
        "baire-category",
        "def-complete",
        "axiom-vector"
      ],
      "idea": "先由 Baire 得到单位球像的闭包含原点邻域，再用几何收敛误差逐步去掉闭包。",
      "steps": [
        "记 B_X 为 X 的开单位球。满射使 Y=∪_(n≥1)T(nB_X)，因此也被闭集 F_n=closure(T(nB_X)) 覆盖。若 Y={0} 结论直接成立；否则 Baire 给某 F_N 含球 B(y₀,r)。",
        "对 ‖h‖<r，y₀+h 与 y₀ 都属于 F_N。各可用 T(NB_X) 内的序列逼近，其差属于 T(2NB_X) 并趋 h。因此 B(0,r)⊆closure(T(2NB_X))。缩放后取 δ=r/(2N)>0，得 B(0,δ)⊆closure(T(B_X))。",
        "给 ‖y‖<δ/2，递归选 x_j，满足 ‖x_j‖<2^(−j)，且残差 r_j=y−TΣ_(k≤j)x_k 满足 ‖r_j‖<δ·2^(−j−1)。第一步由 y∈B(0,δ/2)⊆closure(T((1/2)B_X)) 选得；以后 r_(j−1)∈B(0,δ·2^(−j))，同样使用缩放后的闭包包含式，并把逼近误差取得小于 δ·2^(−j−1)。",
        "Σ‖x_j‖<1：每项严格小于 2^(−j)，故总和严格小于一。其部分和由几何尾和成为柯西列，X 完备给极限 x，且 ‖x‖<1。T 连续、残差趋零，故 Tx=y。于是 B(0,δ/2)⊆T(B_X)。",
        "若 U⊆X 开且 x∈U，取 ε>0 使 x+εB_X⊆U；其像包含 Tx+B(0,εδ/2)，故 T(U) 是开集。若 T 双射，前述球包含式令每个 y≠0 有唯一原像，且对任意 t>2‖y‖/δ，有 ‖T⁻¹y‖<t。令 t↓2‖y‖/δ，得 ‖T⁻¹y‖≤2‖y‖/δ，逆算子有界。$\\square$"
      ]
    },
    {
      "id": "closed-graph-banach",
      "topics": [
        "analysis/banach-spaces",
        "analysis/linear-operators"
      ],
      "title": "Banach 闭图像定理",
      "statement": "Banach 空间 X,Y 间定义于全部 X 的线性映射 T 有界，当且仅当图像 G(T)={(x,Tx):x∈X} 在 X×Y 中闭。",
      "dependencies": [
        "open-mapping-banach",
        "def-complete",
        "axiom-vector"
      ],
      "idea": "把闭图像当作 Banach 空间，第一坐标投影的逆由开映射定理有界。",
      "steps": [
        "给 X×Y 配范数 ‖(x,y)‖=‖x‖+‖y‖。其中柯西列的两个坐标都柯西，分别在 X,Y 收敛，故乘积完备。闭子空间中的柯西列在乘积内收敛，闭性保证极限仍在该子空间，所以闭子空间也完备。",
        "若 G(T) 闭，它是该乘积的闭线性子空间，因而 Banach。投影 P:G(T)→X，(x,Tx)↦x 是有界线性双射，且 ‖P‖≤1。开映射定理给 P⁻¹ 有界，存在 C 使 ‖(x,Tx)‖≤C‖x‖。因此 ‖Tx‖≤C‖x‖，T 有界。",
        "反向若 T 有界，对图像中任意收敛序列 (x_n,Tx_n)→(x,y)，连续性给 Tx_n→Tx。极限唯一性使 y=Tx，所以极限仍在图像。度量空间中序列闭等价于闭：若外点属于闭包，可选距离小于 1/n 的集合内点，构成到该外点的序列。故 G(T) 闭。$\\square$"
      ]
    },
    {
      "id": "bounded-minkowski-weyl",
      "topics": [
        "geometry/polyhedra",
        "discrete/polyhedral-methods",
        "applied/linear-programming"
      ],
      "title": "有界 Minkowski–Weyl 定理",
      "statement": "非空集合 P⊆R^n 是有限个闭半空间之交且有界，当且仅当 P 为有限个点的凸包。前一种描述中，P 的顶点有限，且 P 恰为全部顶点的凸包；不要求 P 有非空内部。",
      "dependencies": [
        "fourier-motzkin",
        "rank-nullity"
      ],
      "idea": "若活跃约束不满秩，沿其共同零方向走到两侧边界，把点拆成更高活跃秩的两点凸组合。",
      "steps": [
        "设 P={x:Ax≤b} 非空有界。对 x∈P，活跃行为满足 a_iᵀx=b_i 的约束行。若这些行张成全对偶空间，则 x 为顶点：若 x 是两个可行点 y,z 的严格凸组合，活跃不等式在 y,z 上也必须取等号；满秩使 y=z=x。",
        "若活跃行秩小于n，取非零 v 被全部活跃行消灭。其他约束在 x 处有正松弛，数量有限，因此 x±tv 对充分小 t>0 都可行。可行参数集合 I={t:x+tv∈P} 是含零邻域的闭区间；P 有界使它两端 t_-<0<t_+ 都有限，闭性保证端点属于 I。",
        "每个端点至少有一个新约束取等号，否则有限个松弛仍正，参数还能继续延伸。新活跃行不消灭 v，而旧活跃行全部消灭 v，所以新行不在旧行张成中，端点的活跃秩至少增加一。又 x=[t_+/(t_+−t_-)](x+t_-v)+[−t_-/(t_+−t_-)](x+t_+v)，系数均正且和为1。",
        "对两个端点重复以上分解，每一步活跃秩严格增加，最多n层后全变成满秩点。因此每个 x 是有限个顶点的凸组合。反向顶点在 P 内且 P 凸，它们的凸包包含在 P。顶点只有有限个：满秩活跃行可选n条独立行，唯一解对应这个约束子集，而有限约束只有有限个n元子集。若某点活跃秩不满，它已被严格拆成两不同可行点，所以不是顶点。",
        "反向若 P=conv{v₁,…,v_m}，引入系数 λ_i≥0、Σλ_i=1、x=Σλ_iv_i。它们是 (x,λ) 空间中有限线性等式和非严格不等式，等式可拆为两条不等式。Fourier–Motzkin 消去 λ 后，P 为有限非严格线性不等式的解集，即有限闭半空间之交。并且 ‖x‖≤Σλ_i‖v_i‖≤max_i‖v_i‖，所以有界。n=0 时非空集合只有单点，结论直接成立。$\\square$"
      ]
    },
    {
      "id": "finite-information-identities",
      "topics": [
        "discrete/channel-capacity",
        "discrete/entropy"
      ],
      "title": "有限变量的条件熵、互信息及信息不增",
      "statement": "所有对数以2为底。有限变量满足H(X,Y)=H(Y)+H(X|Y)，I(X;Y)=H(X)−H(X|Y)=D₂(P_XY‖P_XP_Y)≥0，故条件化不增加熵。若X→Y→Z为Markov链，则I(X;Z)≤I(X;Y)。",
      "dependencies": [
        "gibbs-inequality",
        "entropy-bound"
      ],
      "idea": "展开联合概率的对数分解得到链式法则，条件互信息是逐条件分布的非负散度。",
      "steps": [
        "只对正概率项求和，p(x,y)=p(y)p(x|y)使−log p(x,y)=−log p(y)−log p(x|y)，求期望得熵链式法则。展开联合分布对乘积分布的散度，得I=H(X)+H(Y)−H(X,Y)，代入链式法则即为H(X)−H(X|Y)。Gibbs不等式保证非负，因此H(X|Y)≤H(X)。",
        "条件互信息I(X;Z|Y)定义为对每个正概率y的条件分布互信息的概率加权和，故非负。链式法则展开给 I(X;Y,Z)=I(X;Y)+I(X;Z|Y)=I(X;Z)+I(X;Y|Z)。Markov条件使给定Y后X,Z独立，故第一式末项为零；第二式末项非负，推出数据处理不等式。",
        "重复使用H(Y_i|Y₁,…,Y_(i−1))≤H(Y_i)，得H(Y₁,…,Y_n)≤Σ_iH(Y_i)。这些恒等式针对有限集合无需任何极限或测度正则性假设。$\\square$"
      ]
    },
    {
      "id": "fano-finite-message",
      "topics": [
        "discrete/channel-capacity",
        "discrete/source-coding"
      ],
      "title": "有限消息的 Fano 不等式",
      "statement": "消息M有K≥2个可能值，观测Y后用确定性解码器估计Mhat，错误概率P_e=P(Mhat≠M)。则H(M|Y)≤H₂(P_e)+P_e log₂(K−1)≤1+P_e log₂K。",
      "dependencies": [
        "finite-information-identities",
        "entropy-bound"
      ],
      "idea": "额外告知是否解码错误，正确时消息确定，错误时至多剩K−1种。",
      "steps": [
        "令E=1_(Mhat≠M)。给定M,Y可确定E，故H(E|M,Y)=0。条件链式法则给 H(M|Y)=H(M,E|Y)=H(E|Y)+H(M|E,Y)。",
        "条件化不增加熵给H(E|Y)≤H(E)=H₂(P_e)。E=0时M=Mhat(Y)，条件熵零；E=1时给定Y，M至多有K−1种可能，熵界给该条件熵至多log₂(K−1)。按E的概率加权便得第一不等式，再用二元熵≤1和K−1≤K得到第二式。$\\square$"
      ]
    },
    {
      "id": "dm-channel-random-coding",
      "topics": [
        "discrete/channel-capacity"
      ],
      "title": "离散无记忆信道的随机编码可达性",
      "statement": "有限输入输出字母表信道W(y|x)，固定输入分布p，互信息I_p(X;Y)。对0<R<I_p，存在长度n的确定性码，其码率趋R，平均错误概率趋零；删去至多一半消息后，最大错误概率亦趋零且渐近码率不变。",
      "dependencies": [
        "finite-information-identities",
        "chebyshev",
        "variance-mean",
        "independent-bounded-products",
        "markov"
      ],
      "idea": "独立随机抽码字，按信息密度阈值解码；真码字由大数效应通过阈值，其他码字的误报用似然比均值控制。",
      "steps": [
        "令q(y)=Σ_xp(x)W(y|x)。当p(x)W(y|x)>0时q(y)>0，定义i(x;y)=log₂(W(y|x)/q(y))。有限字母表上，正联合概率支持中的i只有有限多个有限值，故均值I_p及方差有限。长度n的乘积信道与输入分布使信息密度为Σ_j i(X_j;Y_j)，各项独立同分布，Chebyshev保证n⁻¹i(X^n;Y^n)依概率趋I_p。",
        "取δ>0使R+2δ<I_p，K_n=floor(2^(nR))。独立抽取K_n个码字，每个按p^n分布。给输出y^n，只在恰好一个码字满足 i(x^n;y^n)>n(R+δ)时译为该消息，否则宣告错误。若q^n(y^n)=0，该输出在此随机实验中概率为零，可任意定义译码。W^n为零的候选信息密度定义为−∞。",
        "真消息均匀，真码字与输出的联合分布为(pW)^n。因此真码字未过阈值的概率趋零。任一非真码字独立于输出，给定q^n(y^n)>0，似然比L=W^n(y^n|X^n)/q^n(y^n)的p^n均值为1。Markov界给该错误码字过阈值的概率≤2^(−n(R+δ))；对至多K_n−1个竞争码字求并界，误报概率≤2^(−nδ)。",
        "所以随机码本的平均错误概率期望≤真码字失败概率+2^(−nδ)→0。有限码本集合中至少一个确定性码本的错误概率不超过该平均值，选它得到平均误差可达性。log₂K_n/n→R。码字即使抽样时可能重复，也不影响该存在论证，因为重复造成的错误已计入上界。",
        "若选定码平均误差为ε_n，至多一半消息的条件错误概率大于2ε_n；保留其余至少K_n/2个消息。保持原译码，对已删除输出改判任一保留消息，不会使保留消息的正确概率降低。于是最大错误≤2ε_n，码率损失至多1/n（取整仅给趋零项），完成最大误差形式。$\\square$"
      ]
    },
    {
      "id": "dm-channel-capacity-weak-converse",
      "topics": [
        "discrete/channel-capacity"
      ],
      "title": "有限离散无记忆信道容量定理及弱逆定理",
      "statement": "定义C=max_p I_p(X;Y)。有限DMC的任意0<R<C可由确定性块码以最大错误概率趋零实现；任何均匀K_n消息码若平均错误概率趋零，则limsup log₂K_n/n≤C。更具体，(1−P_e)log₂K_n≤nC+1。",
      "dependencies": [
        "dm-channel-random-coding",
        "fano-finite-message",
        "finite-information-identities",
        "heine-borel-rn"
      ],
      "idea": "随机编码给容量以下可达；链式熵界限制n次信道携带的信息，再由Fano将可靠消息数转成互信息下界。",
      "steps": [
        "输入概率单纯形紧。互信息可写为H(q)−Σ_xp(x)H(W(·|x))，其中q=pW；函数−u log₂u在u=0连续填0，所以互信息对p连续，最大值C可取得。对任意0<R<C，选I_p>R，随机编码定理给最大错误概率趋零的码。",
        "逆向令M均匀分布于K_n个消息，编码器确定地给X^n，输出为Y^n。信道无记忆使 H(Y^n|M)=Σ_jH(Y_j|X_j)：给定消息后输入串确定，输出各坐标按各自信道行独立。另一方面H(Y^n)≤Σ_jH(Y_j)，故 I(M;Y^n)≤Σ_j[H(Y_j)−H(Y_j|X_j)]=Σ_jI(X_j;Y_j)≤nC。输入坐标之间不要求独立。",
        "Fano给 H(M|Y^n)≤1+P_e log₂K_n，因此log₂K_n=I(M;Y^n)+H(M|Y^n)≤nC+1+P_e log₂K_n。移项得所列有限块长界，K_n=1时同样直接成立。若P_e→0，除以n(1−P_e)取上极限，得到容量上界。",
        "此为弱逆定理：排除超过C且误差趋零的码，不以它声称超过容量时错误必趋1的强逆结论。定理也不把“存在好码”误解为随机抽到的每个码本都好，或有限块长下误差恰为零。$\\square$"
      ]
    },
    {
      "id": "hilbert-orthonormal-basis",
      "topics": [
        "analysis/hilbert-spaces"
      ],
      "title": "任意 Hilbert 空间的标准正交基与 Parseval 展开",
      "statement": "每个实或复 Hilbert 空间都有标准正交基 E。对每个 x，非零系数 〈x,e〉至多可数，x=Σ_(e∈E)〈x,e〉e 在范数下成立，且 ‖x‖²=Σ|〈x,e〉|²。",
      "dependencies": [
        "complex-cauchy-schwarz",
        "cauchy-schwarz",
        "def-complete",
        "axiom-zorn"
      ],
      "idea": "有限正交投影给 Bessel 界，再对极大正交族的残差使用极大性。",
      "steps": [
        "对有限标准正交集 F，令 s_F=Σ_(e∈F)〈x,e〉e。直接展开得 x−s_F 与每个 e∈F 正交，且 ‖x‖²=‖x−s_F‖²+Σ_(e∈F)|〈x,e〉|²，特别有限系数平方和≤‖x‖²。",
        "标准正交族按包含排序。任一链的并仍标准正交，因为任意两个向量同属链中的某个成员。空集是初始成员，Zorn 给极大标准正交族 E；H={0} 时可取空基。",
        "对每个正整数 k，满足 |〈x,e〉|≥1/k 的 e 只有有限个，否则有限投影界被任意多个至少 1/k² 的项违反。因此非零系数集合是可数个有限集的并，至多可数。枚举为 e₁,e₂,…；系数平方级数非负有界而收敛。对应向量部分和 s_n 的尾差范数平方恰为系数平方尾和，故柯西并在 H 中收敛为 s。有限情形直接取有限和。",
        "对每个 e∈E，内积连续性给 〈x−s,e〉=0。若残差 r=x−s 非零，则 r/‖r‖ 可添入 E，与极大性矛盾。因此 x=s。把有限投影恒等式取极限得 Parseval。任意有限截断的尾部也由相同平方和控制，故所得和不依赖枚举次序。$\\square$"
      ]
    },
    {
      "id": "self-adjoint-rayleigh-norm",
      "topics": [
        "analysis/spectral-theory",
        "analysis/linear-operators"
      ],
      "title": "自伴算子的范数等于绝对 Rayleigh 商上确界",
      "statement": "若 T 为 H 上有界自伴算子，则 〈Tx,x〉实值，且 ‖T‖=sup_(‖x‖=1)|〈Tx,x〉|（零空间中两边约定为零）。",
      "dependencies": [
        "def-compact-self-adjoint",
        "complex-cauchy-schwarz",
        "cauchy-schwarz"
      ],
      "idea": "用 x+y 与 x−y 的二次型差控制任意矩阵元，再对 Tx 的方向取上确界。",
      "steps": [
        "自伴性及内积共轭对称性给 〈Tx,x〉=overline(〈Tx,x〉)，所以实值。记 m 为所列上确界，Cauchy–Schwarz 给 m≤‖T‖。齐次性又给对任意 z，|〈Tz,z〉|≤m‖z‖²。",
        "令 q(z)=〈Tz,z〉。展开并利用自伴性得 q(x+y)−q(x−y)=4Re〈Tx,y〉。若 x,y 都是单位向量，右侧实部绝对值≤m(‖x+y‖²+‖x−y‖²)/4=m；最后的平行四边形恒等式由内积展开直接得到。",
        "复情形以适当单位复数倍的 y 代替 y，可使 〈Tx,y〉为非负实数，因此 |〈Tx,y〉|≤m；实情形改变 y 的符号即可。Tx≠0 时取 y=Tx/‖Tx‖，得 ‖Tx‖≤m 对单位 x 成立；Tx=0 时也成立。取上确界得到 ‖T‖≤m，与前一步合并为等式。$\\square$"
      ]
    },
    {
      "id": "compact-self-adjoint-extremal",
      "topics": [
        "analysis/spectral-theory"
      ],
      "title": "非零紧自伴算子取得极端特征值",
      "statement": "非零紧自伴算子 T 存在单位特征向量 e 与实特征值 λ，使 Te=λe 且 |λ|=‖T‖。",
      "dependencies": [
        "self-adjoint-rayleigh-norm",
        "def-compact-self-adjoint",
        "def-complete"
      ],
      "idea": "取逼近极端 Rayleigh 商的单位向量；残差趋零，紧性把近似特征向量变成真正特征向量。",
      "steps": [
        "设 m=‖T‖>0。范数公式给单位向量 x_n，使 |〈Tx_n,x_n〉|→m。取符号相同的子列，可令 〈Tx_n,x_n〉→λ，其中 λ=m 或 −m。若其中某一符号只出现有限次就取另一符号；两者都无限时任选一侧。",
        "因 λ 实且 |λ|=m，展开残差平方得 ‖Tx_n−λx_n‖²=‖Tx_n‖²−2λ〈Tx_n,x_n〉+λ²≤m²−2λ〈Tx_n,x_n〉+m²→0。",
        "紧性使某子列 Tx_n→y。于是 λx_n=Tx_n−(Tx_n−λx_n)→y，所以 x_n→e=y/λ，且 ‖e‖=1。连续性给 Te=λe，所求特征向量存在。$\\square$"
      ]
    },
    {
      "id": "compact-eigenvalue-finiteness",
      "topics": [
        "analysis/spectral-theory"
      ],
      "title": "紧自伴算子的非零特征空间有限维及特征值聚集限制",
      "statement": "紧自伴算子的特征值均实，异特征值的特征向量正交；每个非零特征值的特征空间有限维。对每个 ε>0，绝对值≥ε 的特征向量最多能组成有限标准正交族。",
      "dependencies": [
        "def-compact-self-adjoint",
        "gram-schmidt",
        "complex-cauchy-schwarz"
      ],
      "idea": "无穷正交族的像若保持正距离，就违反紧性。",
      "steps": [
        "若 Tx=λx、x≠0，则 λ=〈Tx,x〉/‖x‖² 为实数。若 Ty=μy，则 λ〈x,y〉=〈Tx,y〉=〈x,Ty〉=μ〈x,y〉，所以 λ≠μ 时正交。",
        "若存在无限标准正交特征向量 e_n，且对应 |λ_n|≥ε，则对 n≠m，‖Te_n−Te_m‖²=|λ_n|²+|λ_m|²≥2ε²。这列像没有柯西子列，更没有收敛子列，与紧性矛盾。",
        "若一个非零特征空间无限维，可递归选不在前面有限张成空间中的向量并作 Gram–Schmidt，得到其中无限标准正交列，取 ε=|λ| 即产生矛盾。若有无限多个绝对值≥ε 的不同特征值，则各取单位特征向量，由第一步正交，同样矛盾。因此这类特征值连重数计也仅有限个。$\\square$"
      ]
    },
    {
      "id": "compact-self-adjoint-spectral",
      "topics": [
        "analysis/spectral-theory",
        "analysis/hilbert-spaces"
      ],
      "title": "任意 Hilbert 空间的紧自伴谱分解",
      "statement": "紧自伴算子 T 的非零谱方向可列为有限或可数标准正交特征向量 e_n，Te_n=λ_ne_n、λ_n实且非零，无穷情形 λ_n→0。H 是 ker T 与这些向量闭张成空间的正交直和，且 Tx=Σ_n λ_n〈x,e_n〉e_n。级数的有限秩截断在算子范数下收敛。补上 ker T 的标准正交基便得到整个 H 的特征向量基。",
      "dependencies": [
        "compact-self-adjoint-extremal",
        "compact-eigenvalue-finiteness",
        "hilbert-orthonormal-basis",
        "def-compact-self-adjoint"
      ],
      "idea": "每次在已有特征向量的正交补上选最大模特征值；紧性迫使剩余算子范数趋零。",
      "steps": [
        "若 T=0，ker T=H，结论直接成立。否则取极端特征向量 e₁。其正交补 H₁ 闭，因内积连续；它在 T 下不变，因为 x⊥e₁ 时 〈Tx,e₁〉=〈x,Te₁〉=0。闭子空间继承完备性。限制 T|H₁ 仍自伴且紧：有界序列像的收敛子列极限由 H₁ 闭性仍在其中。",
        "递归：令 H_n={e₁,…,e_n}^⊥。若 T|H_n=0 就停止；否则在该空间取极端单位特征向量 e_(n+1)，其 |λ_(n+1)|=‖T|H_n‖。得到标准正交特征列，且特征值模非增。无穷情形由前引理，任何 ε>0 以上仅有限个，故 λ_n→0。",
        "对任意 x，有限投影 S_nx=Σ_(j≤n)〈x,e_j〉e_j。Bessel 界使 S_nx 柯西并收敛到 s；r=x−s 与每个 e_j 正交。若过程有限停止，r 属于最后 H_n，故 Tr=0；若无穷，则 r∈H_n 对每个 n，因此 ‖Tr‖≤|λ_(n+1)|‖r‖→0，也有 Tr=0。",
        "反向若 x∈ker T，则 λ_j〈x,e_j〉=〈x,Te_j〉=〈Tx,e_j〉=0，λ_j≠0 使 x 与全部 e_j 正交。因此 ker T 恰为这些向量闭张成空间的正交补，前一步给每个 x 的直和分解；交集为零由向量与自身正交即为零得到。",
        "T 连续使 Tx=Ts=lim_nΣ_(j≤n)λ_j〈x,e_j〉e_j。更强地，对有限秩 T_nx=Σ_(j≤n)λ_j〈x,e_j〉e_j，有 (T−T_n)x=T(x−S_nx)，而 x−S_nx∈H_n、‖x−S_nx‖≤‖x‖，故 ‖T−T_n‖≤‖T|H_n‖=|λ_(n+1)|→0；有限停止时余项为零。",
        "核为闭 Hilbert 子空间，按已证正交基存在定理取其标准正交基，其每个向量是零特征值向量。与 e_n 合并后，由直和分解在 H 中完备，构成全空间特征向量基。该核可以不可分；每个向量仍至多有可数个非零展开系数。$\\square$"
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
      "id": "maximum-modulus",
      "topics": [
        "analysis/holomorphic-functions",
        "analysis/conformal-maps"
      ],
      "title": "最大模原理与边界最大值原理",
      "statement": "连通开域 Ω 上全纯 f，若 |f| 在域内有局部最大值，则 f 恒定。若 Ω 有界，f 在闭包连续且在 Ω 全纯，则 max_(closure Ω)|f|=max_(boundary Ω)|f|。",
      "dependencies": [
        "holomorphic-taylor",
        "holomorphic-identity",
        "fundamental-algebra",
        "finite-dimensional-compactness"
      ],
      "idea": "非恒定局部幂级数的最低非零项总有使模增长的方向。",
      "steps": [
        "设 a 是局部最大点。若 f(a)=0，附近 |f|≤0，故局部恒零，恒等定理使全域恒零。设 f(a)≠0。若 f 在 a 的幂级数除常数项外全为零，则局部常值，恒等定理同样给全域常值。",
        "否则令 m≥1 为最低非零非常数项阶，f(a+h)=f(a)+c_mh^m+O(|h|^(m+1))，c_m≠0。余项估计可由局部绝对收敛幂级数取得：固定小半径 ρ，|h|≤ρ/2 时将 Σ_(k≥m+1)|c_k||h|^k 中 |h|^(m+1) 提出，剩余级数有有限常数界。",
        "选择单位复数 u，使 c_mu^m=|c_m|f(a)/|f(a)|。该 m 次根由代数基本定理存在，因右端除 c_m 的模为一，根 u 的模也为一。取 h=tu，t>0，则 Re[(overline(f(a))/|f(a)|)f(a+tu)]=|f(a)|+|c_m|t^m+O(t^(m+1))>|f(a)|，只要 t 足够小。复数模至少为该实部，与局部最大矛盾。",
        "边界版本中闭包闭有界而紧，连续 |f| 取得最大值。若在边界取得即完成；若在内部取得，前述结果使 f 常值，边界也取得相同值。有界非空域的边界非空：从域内一点沿射线到域外，取首次退出点即为边界点。因此最大值的两边均有定义。$\\square$"
      ]
    },
    {
      "id": "schwarz-lemma",
      "topics": [
        "analysis/conformal-maps",
        "analysis/holomorphic-functions"
      ],
      "title": "Schwarz 引理及等号情形",
      "statement": "若 f:D→D 全纯、D={|z|<1}、f(0)=0，则 |f(z)|≤|z| 且 |f′(0)|≤1。若某个非零 z 取等号，或 |f′(0)|=1，则 f(z)=cz，其中 |c|=1。",
      "dependencies": [
        "maximum-modulus",
        "holomorphic-taylor",
        "complex-basic-rules"
      ],
      "idea": "将原点零点除去，对 f(z)/z 用越来越接近单位圆的边界界。",
      "steps": [
        "定义 g(z)=f(z)/z（z≠0）、g(0)=f′(0)。局部幂级数 f(z)=a₁z+a₂z²+… 给 g 的全纯延拓，因此 g 在 D 全纯。对 0<r<1，在 |z|=r 上有 |g(z)|≤1/r。",
        "边界最大值原理使闭圆盘 |z|≤r 上亦有 |g(z)|≤1/r。固定任意 z∈D，令 r↑1，得到 |g(z)|≤1。因此 |f(z)|≤|z|，在零点得到 |f′(0)|≤1。",
        "若 |g| 在某内部点等于一，则它取得全域最大值，最大模原理使 g 常值 c 且 |c|=1。非零点 |f(z)|=|z| 或 |f′(0)|=1 恰分别给这种内部等号。因此 f=cz。反向每个这种旋转都达到所述等号。$\\square$"
      ]
    },
    {
      "id": "disk-automorphisms",
      "topics": [
        "analysis/conformal-maps",
        "numbertheory/modular-transformations"
      ],
      "title": "单位圆盘的全体双全纯自同构",
      "statement": "对 a∈D，φ_a(z)=(z−a)/(1−overline(a)z) 是 D 的双全纯自同构。每个双全纯 F:D→D 唯一可写为 F(z)=cφ_a(z)，其中 a=F⁻¹(0)、|c|=1。",
      "dependencies": [
        "schwarz-lemma",
        "complex-basic-rules"
      ],
      "idea": "先用显式分式把零点移到原点，再对固定原点的映射和逆映射各用一次 Schwarz 引理。",
      "steps": [
        "分母在 D 非零，因为 |overline(a)z|<1。展开平方模可得 |1−overline(a)z|²−|z−a|²=(1−|a|²)(1−|z|²)>0，所以 |φ_a(z)|<1。解 w=φ_a(z) 得 z=(w+a)/(1+overline(a)w)=φ_(−a)(w)，相同估计使逆也从 D 映到 D，且均全纯。",
        "若 G:D→D 为双全纯且 G(0)=0，其逆也固定零。Schwarz 给 |G(z)|≤|z| 及 |G⁻¹(w)|≤|w|，取 w=G(z)，两界合并得 |G(z)|=|z|。等号情形使 G(z)=cz、|c|=1。",
        "对任意 F，取 a=F⁻¹(0)，G=F∘φ_a⁻¹ 固定原点，故 G(z)=cz，即 F=cφ_a。a 是 F 的唯一零点，因而唯一；固定 a 后，任一 z≠a 的函数值确定 c，故 c 也唯一。$\\square$"
      ]
    },
    {
      "id": "schwarz-pick",
      "topics": [
        "analysis/conformal-maps"
      ],
      "title": "Schwarz–Pick 不等式与刚性",
      "statement": "全纯 f:D→D 对 a,z∈D 满足 |(f(z)−f(a))/(1−overline(f(a))f(z))|≤|(z−a)/(1−overline(a)z)|，且 |f′(a)|≤(1−|f(a)|²)/(1−|a|²)。若第一式在 z≠a 处取等号，或第二式取等号，则 f 为圆盘自同构。",
      "dependencies": [
        "disk-automorphisms",
        "schwarz-lemma"
      ],
      "idea": "把输入输出各自的目标点移到零，再用 Schwarz 引理。",
      "steps": [
        "令 g=φ_(f(a))∘f∘φ_a⁻¹，则 g:D→D 全纯且 g(0)=0。Schwarz 给 |g(w)|≤|w|，代入 w=φ_a(z) 正是所列两点不等式。",
        "由分式求导，φ_a′(a)=1/(1−|a|²)，(φ_a⁻¹)′(0)=1−|a|²。因此 g′(0)=f′(a)(1−|a|²)/(1−|f(a)|²)。Schwarz 的导数界给所述估计。这里复链式法则由两个复线性逼近复合直接得到，与已证实链式法则的余项论证相同。",
        "任一所述等号使 g 按 Schwarz 刚性为单位旋转，因而 f=φ_(f(a))⁻¹∘g∘φ_a 为双全纯自同构。反向圆盘自同构的分式计算给两点和导数处处等号。$\\square$"
      ]
    },
    {
      "id": "normalized-riemann-map-unique",
      "topics": [
        "analysis/conformal-maps"
      ],
      "title": "归一化黎曼映射的唯一性",
      "statement": "设 Ω 为域、a∈Ω。若 F,G:Ω→D 为双全纯映射，且 F(a)=G(a)=0、F′(a)>0、G′(a)>0（均为正实数），则 F=G。任一双全纯映射可经圆盘自同构归一化成这种形式。",
      "dependencies": [
        "disk-automorphisms",
        "complex-basic-rules"
      ],
      "idea": "两个候选映射的过渡函数是固定零的圆盘自同构，因此只差一个旋转，正导数条件消去旋转。",
      "steps": [
        "H=G∘F⁻¹ 是固定零的圆盘自同构，故 H(w)=cw、|c|=1。因此 G=cF，求导于 a 得 G′(a)=cF′(a)。两个导数为正实数，故 c 是正实单位数，只能 c=1，得到相等。",
        "若已有双全纯 F，先复合 φ_(F(a))，使 a 的像为零。该映射的导数不为零，因为与其全纯逆的复合为恒等，链式法则给两者导数乘积为一。再乘以该导数相位的倒数，可使导数成为正实数。",
        "这证明已存在映射的归一化及唯一性；任意单连通真域上这种映射的存在仍须另用正规族与极值方法证明。$\\square$"
      ]
    },
    {
      "id": "continuous-path-primitive-integral",
      "topics": [
        "analysis/cauchy-integral-theorem"
      ],
      "title": "局部原函数定义的连续路径积分",
      "statement": "若 f 在开集 Ω 全纯，则其积分可定义在 Ω 内任意连续路径上：把路径分成像包含在原函数圆盘内的有限段，累加各段局部原函数的端点差。结果不依赖分割和圆盘选择，对拼接可加、反向变号，并与分段 C¹ 曲线积分一致。",
      "dependencies": [
        "convex-primitive",
        "heine-cantor",
        "compact-interval",
        "continuous-compact",
        "contour-estimate"
      ],
      "idea": "用紧致性取得统一小圆盘尺度；两个局部原函数在圆盘交集上的差为常数。",
      "steps": [
        "对路径像 K，给每个 z∈K 选 r_z>0，使 B(z,2r_z)⊆Ω。开球 B(z,r_z) 覆盖紧集 K，故有有限子覆盖；设其半径最小值为 r>0。路径在 [0,1] 上一致连续，取有限分割，使每个小段的像到该段起点的距离小于 r。",
        "该起点在某 B(z_i,r_i) 内，因此整段像在 B(z_i,2r_i) 内。圆盘凸，f 在其中有原函数 F_i，定义该段积分为 F_i(终点)−F_i(起点)，再累加。",
        "若同一段的像同时在两个这样的圆盘内，其两个端点也在圆盘交内；交为凸开集。两原函数之差导数为零，沿交内两端点的线段使用端点公式，得差在两端值相同，所以算出的增量相同。对两个任意分割取共同细分，先用望远镜恒等式不改每个圆盘中的总增量，再逐段比较圆盘选择，得结果唯一。",
        "拼接可加及反向变号直接来自端点差；取共同细分即可处理分割连接点。若路径分段 C¹，再把分割加入其光滑段端点，每段用曲线积分端点公式，便与原有积分逐段相等。此构造不把一般连续路径当作必可求长的曲线。$\\square$"
      ]
    },
    {
      "id": "cauchy-homotopy",
      "topics": [
        "analysis/cauchy-integral-theorem"
      ],
      "title": "Cauchy 积分的连续同伦不变性",
      "statement": "Ω 上全纯 f，若连续路径 γ₀、γ₁ 在 Ω 内保持端点同伦，则按局部原函数定义的积分相同。特别地，当两路径分段 C¹ 时，通常曲线积分相同。",
      "dependencies": [
        "continuous-path-primitive-integral",
        "def-simply-connected-domain",
        "heine-cantor",
        "finite-dimensional-compactness",
        "continuous-compact",
        "heine-borel-rn"
      ],
      "idea": "把同伦方形网格化，使每个小格的像都在一个原函数圆盘中；内部边两两抵消。",
      "steps": [
        "同伦像 K=H([0,1]²) 紧，因为方形紧、H 连续。与路径引理相同，有限选圆盘 B(z_i,r_i) 覆盖 K，其双倍半径圆盘都包含在 Ω。令 r=min_i r_i>0。同伦 H 在紧方形上一致连续，故足够细的矩形网格中，每个小格的像到某个顶点的像的距离都小于 r。",
        "该顶点像属于某 B(z_i,r_i)，所以该小格的整个像在 B(z_i,2r_i) 中。f 在该圆盘有原函数，小格四条边的像都是连续路径。其积分由原函数端点差计算，四段望远镜相加为零。",
        "对全部小格相加。相邻格沿公共边使用相反方向，而路径积分与所选圆盘无关，所以内部边精确抵消。剩下同伦方形外边界的积分为零。保持端点条件使左右侧路径恒定，积分为零，另外两边分别为 γ₀ 与反向 γ₁，因此 ∫γ₀f=∫γ₁f。对分段 C¹ 路径由前引理转回通常积分。$\\square$"
      ]
    },
    {
      "id": "cauchy-simply-connected",
      "topics": [
        "analysis/cauchy-integral-theorem"
      ],
      "title": "单连通域上的 Cauchy 积分定理与全局原函数",
      "statement": "单连通域 Ω 上每个全纯函数 f 都有全局复原函数，且 Ω 内每条分段 C¹ 闭曲线 γ 满足 ∫γf(z)dz=0。任意两条端点相同的分段 C¹ 路径积分相等。",
      "dependencies": [
        "cauchy-homotopy",
        "complex-basic-rules",
        "contour-estimate",
        "def-simply-connected-domain"
      ],
      "idea": "闭环收缩到常路径后积分为零，再用路径积分定义全局原函数。",
      "steps": [
        "由单连通定义，每条闭环可保持基点收缩到常路径。Cauchy 同伦不变性给闭环积分等于常路径积分，后者端点差为零。若两路径端点相同，将第一条与反向第二条拼成闭环，可加性给两积分相同。",
        "固定 z₀。每个 z 可由域内有限折线连接到 z₀：可折线连到 z₀ 的点集在 Ω 中开，补集也开，因为任何点的小圆盘内的点可彼此用线段连接；连通性迫使可达集为全部 Ω。因此定义 F(z) 为沿任一此类折线路径的 f 积分，上一段保证定义无关。",
        "固定 z，取小圆盘 B(z,r)⊆Ω。对 |h|<r，可把到 z 的固定路径接上线段 [z,z+h]，于是 F(z+h)−F(z)=h∫₀¹f(z+th)dt。连续性使右边除 h 后趋于 f(z)，因此 F′(z)=f(z)。z 任意，F 为全局原函数。",
        "单连通是保证“所有全纯函数、所有闭环积分为零”的域条件。对某个特定函数，它不是必要条件：任何多项式在有洞域上仍有原函数；对任意域内可收缩闭环，前一同伦定理也已保证积分为零。$\\square$"
      ]
    },
    {
      "id": "holomorphic-compact-limit",
      "topics": [
        "analysis/function-sequences",
        "analysis/holomorphic-functions"
      ],
      "title": "紧集上一致极限保持全纯及各阶导数收敛",
      "statement": "Ω 内全纯函数列 f_n 若在每个紧子集上一致收敛至 f，则 f 全纯，且各阶导数 f_n^(k) 在每个紧子集上一致收敛至 f^(k)。",
      "dependencies": [
        "cauchy-square-formula",
        "holomorphic-taylor",
        "contour-estimate",
        "uniform-continuous-limit"
      ],
      "idea": "固定一个稍大的方形围道，极限可移入积分；核的差商再给可微性与导数估计。",
      "steps": [
        "固定 a∈Ω，取以 a 为中心、闭区域包含在 Ω 中的轴平行方形 Q。f_n 在闭 Q 一致收敛，极限 f 连续。对内部 z，Cauchy 方形公式给 f_n(z)=(2πi)⁻¹∫∂Q f_n(w)/(w−z)dw。长度估计让 n→∞ 时积分误差趋零，得到 f 的同一公式。",
        "在离边界正距离的内部小邻域中，核差商 [1/(w−z−h)−1/(w−z)]/h=1/[(w−z−h)(w−z)] 一致趋于 1/(w−z)²，因分母有统一正下界。因此积分差商可传入极限，给 f′ 的围道公式。反复对核求导，同样的分母界给全部 k 阶公式 f^(k)(z)=k!/(2πi)∫∂Q f(w)/(w−z)^(k+1)dw。",
        "对位于 Q 内且到边界距离至少 d>0 的紧集，导数差上界为 k!·length(∂Q)/(2πd^(k+1))·max∂Q|f_n−f|，故一致趋零。任意紧 K⊂Ω，可对每点取大方形及内部小方形，有限个内部小方形覆盖 K，分别用该界再取有限最大，得到 K 上导数一致收敛。$\\square$"
      ]
    },
    {
      "id": "montel-locally-bounded",
      "topics": [
        "analysis/function-sequences",
        "analysis/conformal-maps"
      ],
      "title": "Montel 定理（局部一致有界全纯族）",
      "statement": "开集 Ω 上全纯函数列 f_n 若对每个紧集 K⊂Ω 存在 M_K<∞ 使所有 n 都满足 sup_K|f_n|≤M_K，则有子列在 Ω 的每个紧子集上一致收敛到全纯函数。",
      "dependencies": [
        "holomorphic-compact-limit",
        "holomorphic-taylor",
        "contour-estimate",
        "bolzano-weierstrass",
        "compact-interval",
        "heine-borel-rn",
        "axiom-dependent-choice"
      ],
      "idea": "局部 Cauchy 估计给等度连续；在可数稠密集上对角取子列，再用有限网格升级为紧集上一致收敛。",
      "steps": [
        "对任意紧 K⊂Ω，取 η>0，使 K 的闭 3η 邻域 L 有界且包含在 Ω 内；K 到闭补集有正距离保证可取，Ω=C 时任取小 η。L 紧，所有 |f_n|≤M_L。K 的闭 η 邻域中每点可放一个到边距离 η/2 的方形，其闭区域仍在 L。Cauchy 一阶系数估计给所有这些点 |f_n′|≤8M_L/(πη)。",
        "因此若 x,y 距 K 足够近，且 |x−y|<η/2，连接线段全在上述邻域，原函数端点公式给 |f_n(x)−f_n(y)|≤C_K|x−y|，常数不依赖 n。这给 K 附近的统一等度连续性。",
        "取 D=Ω∩(Q+iQ)，它可数且在 Ω 稠密。逐点局部有界使 f_n(d) 在复平面有收敛子列。依次对 D 的枚举抽取嵌套子列，第 j 个最终下标取第 j 层子列的足够后项，得到严格递增的对角子列，在 D 每点收敛。若 Ω 空结论直接成立。",
        "固定紧 K 及 ε>0，用第一、二步选 δ>0，使距 K 的 δ 邻域中两个相距≤2δ 的点的函数值差小于 ε/3，统一适用于该子列。由 D 稠密及 K 紧，选有限个 D 中点 d₁,…,d_m，其 δ 球覆盖 K，且都在该邻域。D 点处收敛使充分后的两个子列项在每个 d_i 的值差小于 ε/3。对 x∈K 选邻近 d_i，三角不等式给这两个函数在 x 处值差小于 ε。",
        "故子列在任意紧 K 上一致柯西。复数完备性给每点极限，同一估计令一个下标趋∞，得到紧集上一致收敛。单点紧集保证各 K 的极限彼此相容，定义全域函数 f。紧集上一致极限定理使 f 全纯。这个子列对所有紧集同时有效，因为对角化先在固定稠密集 D 上进行。$\\square$"
      ]
    },
    {
      "id": "small-gain-banach",
      "topics": [
        "applied/robust-control",
        "applied/feedback-control"
      ],
      "title": "Banach 信号空间的小增益定理",
      "statement": "Banach 空间 X,Y 间映射 G₁:X→Y、G₂:Y→X 满足 G_i(0)=0 及全局 Lipschitz 常数 γ_i。若 γ₁γ₂<1，则对任意输入 r∈X、s∈Y，反馈方程 u=r−G₂(v)、v=s+G₁(u) 有唯一解，且 ‖u‖≤(‖r‖+γ₂‖s‖)/(1−γ₁γ₂)、‖v‖≤(‖s‖+γ₁‖r‖)/(1−γ₁γ₂)。",
      "dependencies": [
        "banach-contraction"
      ],
      "idea": "把两反馈方程合成一个压缩映射，再对两个信号的范数联立估计。",
      "steps": [
        "定义 T(u)=r−G₂(s+G₁(u))，则 ‖T(u)−T(w)‖≤γ₂γ₁‖u−w‖。X 完备，Banach 压缩定理给唯一固定点u；令v=s+G₁(u)，即得到解，任一反馈解都给同一固定点，所以解唯一。",
        "由G_i(0)=0，有 ‖u‖≤‖r‖+γ₂‖v‖、‖v‖≤‖s‖+γ₁‖u‖。相互代入并除以正数1−γ₁γ₂，即得两界。对两组输入的解之差重复同样估计，还得相同形式的 Lipschitz 输入—信号界。",
        "若X,Y采用信号的上确界范数，这给反馈内部信号对有界输入的有界响应。这里的结论是给定信号算子的适定性与有限增益；不自动证明某个状态空间实现的不可观隐藏模态稳定，也不把仅单点增益界替代所列全局 Lipschitz 条件。$\\square$"
      ]
    },
    {
      "id": "noether-point-symmetry",
      "topics": [
        "applied/symmetry-conservation",
        "applied/classical-mechanics",
        "geometry/moment-maps"
      ],
      "title": "点变换及边界项形式的 Noether 守恒律",
      "statement": "设 L(t,q,v) 足够光滑，p=∂_vL、H=p·v−L，q(t) 为 C² Euler–Lagrange 解。若光滑函数 τ(t,q)、ξ(t,q)、B(t,q) 满足恒等式 L_tτ+L_q·ξ+p·(D_tξ−vD_tτ)+L D_tτ=D_tB，其中 D_t=∂_t+v·∂_q，则 Q=p·ξ−Hτ−B 沿解恒定。",
      "dependencies": [
        "euler-lagrange-variation"
      ],
      "idea": "把无穷小作用量不变条件逐项代入守恒量导数，利用 Euler–Lagrange 方程抵消。",
      "steps": [
        "沿解有 ṗ=L_q。计算 Ḣ=ṗ·v+p·v̇−L_t−L_q·v−p·v̇=−L_t，因此自主 L_t=0 时 H 守恒。此计算不要求 Legendre 变换可逆。",
        "对 p·ξ−Hτ 求导，得到 L_q·ξ+p·D_tξ+L_tτ−H D_tτ。代入 H=p·v−L，正好等于 L_tτ+L_q·ξ+p·(D_tξ−vD_tτ)+L D_tτ。题设恒等式使它等于D_tB，因此Q̇=0。",
        "时间平移取τ=1、ξ=0、B=0，在L_t=0时Q=−H；第j坐标平移取τ=0、ξ=e_j、B=0，在L不依赖q_j时Q=p_j。一般式给这些守恒量共同来源。所列恒等式是允许作用量差一个全导数的无穷小对称条件；它不是对任意连续变换都自动成立的断言。$\\square$"
      ]
    },
    {
      "id": "compact-closed-strong-separation",
      "topics": [
        "geometry/convex-sets",
        "applied/duality"
      ],
      "title": "紧凸集与闭凸集的严格超平面分离",
      "statement": "R^n 中不交非空凸集 C,D，若 C 紧而 D 闭，则存在非零 u 与 α<β，使全部 d∈D、c∈C 满足 〈u,d〉≤α<β≤〈u,c〉。特别地闭凸集与集外一点可严格分离。",
      "dependencies": [
        "convex-projection",
        "heine-borel-rn"
      ],
      "idea": "对闭凸差集 C−D 求离原点最近的点，投影不等式给统一正间隙。",
      "steps": [
        "K=C−D 非空且凸。它闭：若 c_j−d_j→z，紧性使某子列 c_j→c∈C，则 d_j=c_j−(c_j−d_j)→c−z，D 闭使 c−z∈D，所以 z∈K。",
        "因为 C,D 不交，0∉K。闭凸投影定理给 K 中离0最近点 u，且 u≠0。其变分不等式 〈−u,z−u〉≤0 对所有 z∈K 成立，故 〈u,z〉≥‖u‖²。代入 z=c−d 得 〈u,c〉−〈u,d〉≥‖u‖²>0。",
        "令 β=min_(c∈C)〈u,c〉，紧性保证最小值存在。取达到最小值的 c，可得全部 d 满足 〈u,d〉≤β−‖u‖²。令 α=β−‖u‖²，则 α<β，得到严格分离。C 为单点时仍紧，给点与闭凸集的特例。$\\square$"
      ]
    },
    {
      "id": "finitely-generated-cone-closed",
      "topics": [
        "geometry/convex-sets",
        "applied/linear-programming"
      ],
      "title": "有限生成凸锥是闭集",
      "statement": "给定实向量 v₁,…,v_m，锥 K={Σ_i t_iv_i:t_i≥0} 为闭凸集。",
      "dependencies": [
        "basis-extension",
        "finite-norm-equivalence"
      ],
      "idea": "把每个锥表示约成线性无关支持；有限个支持中取固定一组，系数由连续线性逆恢复。",
      "steps": [
        "凸性与锥性由非负系数直接验证。每个 z∈K 可取线性无关正支持的表示：若当前正系数支持的 v_i 相关，取非零关系 Σs_iv_i=0，变号使某 s_i>0，令 λ=min_(s_i>0)t_i/s_i。把系数改为 t_i−λs_i，不改向量，所有系数仍非负，且至少一个正系数变零。有限次重复后支持无关。",
        "设 z_j∈K 且 z_j→z。所有可能支持有限，取一个无限子列使上述无关支持 S 固定；若所取子列的支持为空则极限为0，直接在K。固定支持的列矩阵 V_S 满列秩，Gram 矩阵 V_SᵀV_S 正定可逆，因为 tᵀV_SᵀV_St=‖V_St‖²>0 对 t≠0。",
        "相应非负系数为 t_j=(V_SᵀV_S)⁻¹V_Sᵀz_j，连续性使它趋于 t≥0。于是 z=V_St∈K，证明序列闭；有限维度量空间中序列闭等价闭，故 K 闭。$\\square$"
      ]
    },
    {
      "id": "farkas-alternative",
      "topics": [
        "applied/linear-programming",
        "applied/duality",
        "geometry/convex-sets"
      ],
      "title": "Farkas 引理的等式—非负锥形式",
      "statement": "对实矩阵 A 与向量 b，下列恰有一个成立：(1) 存在 x≥0 使 Ax=b；(2) 存在 y 使 Aᵀy≥0 且 bᵀy<0。",
      "dependencies": [
        "finitely-generated-cone-closed",
        "convex-projection"
      ],
      "idea": "若目标点不在列锥内，对它到该闭凸锥的投影残差取负，即得不可行性证书。",
      "steps": [
        "令 K 为 A 各列生成的非负锥，已证闭凸。若 b∈K，第一式成立；此时对任何 Aᵀy≥0，有 bᵀy=xᵀAᵀy≥0，所以第二式不可能成立。",
        "若 b∉K，取 p=P_Kb，令 v=b−p≠0。投影变分不等式给 〈v,c−p〉≤0 对全部 c∈K。由于0与2p都在K，分别代入得 〈v,p〉≥0 与 ≤0，因此 〈v,p〉=0，遂 〈v,c〉≤0 对全部 c∈K。",
        "令 y=−v，A 的每列都在K，故 Aᵀy≥0；同时 bᵀy=−〈p+v,v〉=−‖v‖²<0，第二式成立。两种情况穷尽且互斥，得到替代定理。$\\square$"
      ]
    },
    {
      "id": "bounded-exponential-tilt",
      "topics": [
        "probability/large-deviations"
      ],
      "title": "有界变量的指数倾斜与速率函数",
      "statement": "设非恒定实变量X有界，本质下、上界为a<b。令Λ(t)=log E e^(tX)，I(x)=sup_(t∈R)(tx−Λ(t))。则Λ为C²且Λ″(t)>0，Λ′把R双射到(a,b)。对x∈(a,b)，唯一t_x满足Λ′(t_x)=x且I(x)=t_xx−Λ(t_x)。I(a)=−log P(X=a)、I(b)=−log P(X=b)，取−log0=∞；区间外I=∞。",
      "dependencies": [
        "dominated-convergence",
        "integral-linearity",
        "ftc-second"
      ],
      "idea": "倾斜后的均值、方差就是对数矩母函数的一、二阶导数；大参数把质量压向本质端点。",
      "steps": [
        "因X有界，在t的任意紧邻域内，e^(tX)、Xe^(tX)、X²e^(tX)均被常数支配。差商用一元中值估计和支配收敛得矩母函数可两次连续求导。定义倾斜概率 dP_t=e^(tX−Λ(t))dP，则Λ′(t)=E_tX、Λ″(t)=Var_t(X)。倾斜密度严格正，非恒定性保持，所以方差严格正。",
        "证明Λ′(t)→b当t→∞。对δ>0，本质上界定义给p=P(X>b−δ/2)>0。于是 P_t(X≤b−δ)≤e^(t(b−δ))/(p e^(t(b−δ/2)))=p⁻¹e^(−tδ/2)。因此0≤b−E_tX≤δ+(b−a)P_t(X≤b−δ)，先令t趋无穷再令δ趋零。对−X同理得t→−∞时Λ′(t)→a。连续严格递增及介值定理给双射。",
        "对内部x，函数tx−Λ(t)的导数为x−Λ′(t)，在t_x之前正、之后负，故唯一全局最大值在t_x。若x>b，取t>0，由Λ(t)≤tb得tx−Λ(t)≥t(x−b)→∞；x<a同理。",
        "在x=b，tb−Λ(t)=−log E exp(t(X−b))，对所有t实数该表达式不超过−log P(X=b)，并在t→∞时由支配收敛趋向此上界，包括原子概率为零的无穷情况。a端点对−X重复。I为仿射连续函数族的上确界，故下半连续且凸；下半连续可用{I>c}为各仿射函数超水平开集之并验证，凸性直接对每个t估计。$\\square$"
      ]
    },
    {
      "id": "cramer-bounded-full",
      "topics": [
        "probability/large-deviations"
      ],
      "title": "有界独立同分布变量的完整大偏差原理",
      "statement": "设X_i独立同分布且有界，均值样本S_n=n⁻¹ΣX_i。令Λ(t)=log E e^(tX₁)，I(x)=sup_t(tx−Λ(t))。则任意闭集F及开集O满足 limsup n⁻¹log P(S_n∈F)≤−inf_F I，liminf n⁻¹log P(S_n∈O)≥−inf_O I。约定log0=−∞、inf∅=∞；I的有限次水平集紧。",
      "dependencies": [
        "bounded-exponential-tilt",
        "markov",
        "chebyshev",
        "variance-mean",
        "independent-bounded-products",
        "heine-borel-rn"
      ],
      "idea": "上界以指数Markov界和有限覆盖统一处理闭集，下界在指数倾斜后用大数效应恢复原概率。",
      "steps": [
        "若X₁恒等于c，则S_n=c、Λ(t)=tc，I(c)=0且其他点为∞，所有结论直接成立。以下本质范围[a,b]且a<b。样本均值几乎必然在[a,b]，I在其外为∞；I下半连续且非负（取t=0），所以有限次水平集为[a,b]内闭集，因而紧。",
        "闭集上界：K=F∩[a,b]紧；若为空，概率为零。任取实L<inf_F I，对每个x∈K，由上确界定义可选t_x使t_xx−Λ(t_x)>L。连续性给x的开邻域U_x，在其中t_xy−Λ(t_x)>L。有限个U_j覆盖K。对任一j，事件S_n∈U_j推出 exp(nt_jS_n)>exp(n(L+Λ(t_j)))，Markov不等式及独立性给概率≤e^(−nL)。故总概率≤Ne^(−nL)，上极限≤−L。令L上升至inf_F I；若其为∞，L任意大也得所需−∞。",
        "内部点下界：任取x∈O∩(a,b)，取t使Λ′(t)=x。在n个变量上以密度 exp(tΣX_i−nΛ(t))定义倾斜概率Q_n；原来的独立性和归一化逐因子相乘，保证它是概率且变量在Q_n下独立同分布，均值x、方差Λ″(t)。Chebyshev给Q_n(|S_n−x|<δ)→1。选δ>0使(x−δ,x+δ)⊆O，改回原概率得 P(S_n∈O)≥exp(−n[tx−Λ(t)+|t|δ])Q_n(|S_n−x|<δ)。",
        "取对数除以n，后项趋零，因为Q_n概率趋1，得到下极限≥−I(x)−|t|δ。令δ下降至0得≥−I(x)。若O包含端点a且I(a)<∞，则p=P(X=a)>0，全部n个变量等于a的事件给P(S_n∈O)≥p^n，故下极限≥log p=−I(a)；b端点相同。若端点I=∞，它对取下确界的下界不产生限制。对O中所有有限I点取最优下界即得结论；若无此点，右端为−∞，不等式自动成立。$\\square$"
      ]
    },
    {
      "id": "bernoulli-cramer-rate",
      "topics": [
        "probability/large-deviations",
        "probability/distributions"
      ],
      "title": "Bernoulli 大偏差速率及非指数尾反例",
      "statement": "对Bernoulli(p)，0<p<1，样本均值的大偏差速率在[0,1]为 I(x)=x log(x/p)+(1−x)log((1−x)/(1−p))，约定0log0=0；区间外为∞。仅有可积性不能保证偏离均值的概率指数小。",
      "dependencies": [
        "cramer-bounded-full"
      ],
      "idea": "显式求解倾斜参数；另用Pareto尾说明缺少指数矩时的限制。",
      "steps": [
        "Λ(t)=log(1−p+pe^t)，Λ′(t)=pe^t/(1−p+pe^t)。对0<x<1解得 e^t=x(1−p)/(p(1−x))。代入tx−Λ(t)并合并对数得所列式。端点分别为−log(1−p)、−log p，与原子概率公式一致；区间外速率无穷。大偏差上下界由有界变量定理给出。",
        "反例取非负可积X，尾概率P(X>r)=r^(−α)（r≥1），α>1。这可由(0,1)均匀变量U令X=U^(−1/α)构造，期望∫₀¹u^(−1/α)du=α/(α−1)=μ有限。取独立同分布副本。对任意c>μ，P(S_n>c)≥P(X₁>nc)=(nc)^(−α)，因为其余变量非负。",
        "于是 liminf n⁻¹log P(S_n>c)≥lim[−αlog(nc)/n]=0，而概率不超过1给上极限≤0，故极限为0，不可能有正指数衰减速率。大数定律仍适用并使该概率趋零，两种结论并不矛盾。$\\square$"
      ]
    },
    {
      "id": "cramer-truncated-dual-limit",
      "topics": [
        "probability/large-deviations"
      ],
      "title": "截断矩母函数的凸对偶逼近",
      "statement": "设X为非恒定实随机变量，a=ess inf X、b=ess sup X允许无穷。对a<x<b，令 M_R(t)=E[e^(tX)1_(|X|≤R)]、I_R(x)=sup_t(tx−log M_R(t))，R取充分大的正整数；M(t)=E e^(tX)允许∞，I(x)=sup_t(tx−log M(t))。则I_R(x)随R递减且收敛到I(x)。",
      "dependencies": [
        "bounded-exponential-tilt",
        "monotone-integral",
        "bolzano-weierstrass"
      ],
      "idea": "在x两侧各固定一块正概率质量，统一控制截断对偶的极大化参数，避免极值逃向无穷。",
      "steps": [
        "因a<x<b，可选δ>0及K<∞，使事件A_+={x+δ≤X≤K}和A_-={−K≤X≤x−δ}概率分别为p_+,p_->0。这是本质上下界的定义及有限截断集合递增到相应半直线所得。R≥K时，条件于|X|≤R的分布有界且本质支持在x两侧，因此其对偶在唯一有限t_R达到最大，上一有界倾斜命题适用。归一化只给log M_R增加常数，不改变t_R。",
        "当t≥0，M_R(t)≥p_+e^(t(x+δ))，故tx−log M_R(t)≤−δt−log p_+。当t≤0，用A_-得同式≤−δ|t|−log p_-。另一方面在t=0的目标值为−log P(|X|≤R)≥0，所以最大值非负。上述两界说明全部t_R位于固定紧区间。",
        "M_R随R增加，故I_R递减，且M_R≤M使I_R≥I。固定首个R₀，I_R≤I_(R₀)<∞，故有有限极限L≥I。选R_j趋无穷并抽子列使t_(R_j)→t_*。对任意固定整数K₁且R_j≥K₁，M_(R_j)(t_(R_j))≥M_(K₁)(t_(R_j))。有界截断保证右侧随t连续，因而 L≤t_*x−log M_(K₁)(t_*)。",
        "令K₁趋无穷，单调收敛给M_(K₁)(t_*)→M(t_*)。若后者无穷，上式迫使有限L≤−∞，矛盾；所以M(t_*)有限，且L≤t_*x−log M(t_*)≤I(x)。结合L≥I，证明所需等式。这一步同时证明内部点速率有限，不要求全实轴指数矩存在。$\\square$"
      ]
    },
    {
      "id": "cramer-exponential-tightness",
      "topics": [
        "probability/large-deviations"
      ],
      "title": "零邻域指数矩给指数紧性与良速率函数",
      "statement": "设独立同分布实变量X_i的矩母函数在零的某邻域有限。写S_n=n⁻¹ΣX_i、Λ(t)=log E e^(tX₁)、I(x)=sup_t(tx−Λ(t))。则任意A>0可选K使 limsup n⁻¹log P(|S_n|>K)≤−A；I非负、下半连续，有限次水平集紧。",
      "dependencies": [
        "markov",
        "independent-bounded-products",
        "monotone-integral",
        "heine-borel-rn"
      ],
      "idea": "分别用一个正参数和一个负参数控制两侧尾部，两个仿射下界也保证速率函数的次水平集有界。",
      "steps": [
        "选η>0使Λ(η)、Λ(−η)有限。独立性给 E exp(ηΣX_i)=exp(nΛ(η))。此处虽然指数变量未必有界，可先将每个非负因子截断，利用有界独立乘积公式，再逐因子用单调收敛推广，有限个因子可依次处理。Markov界给P(S_n>K)≤exp(−n[ηK−Λ(η)])；对−S_n同理给左尾界。",
        "所以P(|S_n|>K)≤2 exp(−n[ηK−max(Λ(η),Λ(−η))])。取K充分大即得任意A的指数尾界。I≥0来自t=0；只对Λ有限的t取上确界即可，其余t贡献−∞，所以I是连续仿射函数的上确界，非负且下半连续。",
        "又I(x)≥η|x|−max(Λ(η),Λ(−η))。因此{I≤c}有界，且由下半连续性闭，有限维Heine–Borel定理保证紧。这就是大偏差中“良速率函数”的具体含义。$\\square$"
      ]
    },
    {
      "id": "cramer-real-full",
      "topics": [
        "probability/large-deviations"
      ],
      "title": "零邻域指数矩条件下的完整 Cramér 定理",
      "statement": "独立同分布实变量X_i若E e^(tX₁)在t=0的某开邻域有限，则样本均值S_n满足速率I(x)=sup_(t∈R){tx−log E e^(tX₁)}的大偏差原理：任意闭集F有limsup n⁻¹log P(S_n∈F)≤−inf_F I，任意开集O有liminf n⁻¹log P(S_n∈O)≥−inf_O I。I为良速率函数，允许无穷；约定log0=−∞、inf∅=∞。",
      "dependencies": [
        "cramer-truncated-dual-limit",
        "cramer-exponential-tightness",
        "cramer-bounded-full",
        "heine-borel-rn",
        "dominated-convergence"
      ],
      "idea": "紧集上界用有限指数覆盖；下界把全部样本限制在截断事件内，再取截断速率极限。",
      "steps": [
        "若X恒定，直接用有界版本。以下非恒定。先证紧集K的上界。任取实L<inf_K I，对每个x∈K选Λ(t_x)<∞且t_xx−Λ(t_x)>L。邻域中仍严格大于L。有限子覆盖及指数Markov界给P(S_n∈K)≤Ne^(−nL)，与有界版本相同，但这里不把S_n限制在固定支持区间。令L趋inf_K I得紧集上界。",
        "对闭F，取任意A>0，用指数紧性选K₀使外尾指数上界≤−A。F∩[−K₀,K₀]紧，分拆概率并用u+v≤2max(u,v)，得上极限≤max(−inf_(F∩[−K₀,K₀])I,−A)≤max(−inf_F I,−A)。令A趋无穷得到闭集上界，包括inf_F I=∞的情形。",
        "下界先取x∈O且a<x<b，其中a,b为允许无穷的本质支持端点。令p_R=P(|X|≤R)>0。独立性使全部n个样本落在截断内的概率p_R^n；给定此事件，它们仍独立同分布，单变量分布为条件分布P_R。对任何开O，有 P(S_n∈O)≥p_R^n P_R^(⊗n)(S_n∈O)。该条件分布有界，其速率J_R(y)=sup_t{ty−log(M_R(t)/p_R)}=I_R(y)+log p_R。",
        "应用有界Cramér定理得原概率下极限≥log p_R−inf_O J_R≥log p_R−J_R(x)=−I_R(x)。R趋无穷，由截断凸对偶逼近得≥−I(x)。注意这个步骤不要求用同一个倾斜参数处理所有截断，也覆盖原Λ有效域边界处不可微的情形。",
        "若有限端点b在O且I(b)<∞，因为X≤b几乎必然，tb−Λ(t)=−log E exp(t(X−b))在t≥0时递增，支配收敛给其极限−log P(X=b)。任意t的期望至少P(X=b)，故上确界恰为该极限，所以I(b)=−log P(X=b)。全部变量等于b的事件直接给下界−I(b)。a端点同理。支持区间外I=∞：例如b有限且x>b时，取t趋正无穷并用Λ(t)≤tb即可，a侧类似。",
        "故对O中每个有限速率点均有下界−I(x)，取其上确界即−inf_O I。若没有有限速率点，所需下界是−∞而自动成立。良速率性质由指数紧性命题已证，完成全部陈述。$\\square$"
      ]
    },
    {
      "id": "pullback-exterior-derivative",
      "topics": [
        "geometry/cohomology",
        "geometry/differential-structures"
      ],
      "title": "拉回与外微分交换",
      "statement": "对光滑映射F:M→N及任意光滑微分形式ω，有d(F*ω)=F*(dω)。因此F诱导de Rham上同调映射，方向与F相反。",
      "dependencies": [
        "def-differential-forms"
      ],
      "idea": "先在坐标中对函数、坐标微分验证，再用分次乘积法则处理一般形式。",
      "steps": [
        "坐标中外微分满足分次乘积法则 d(α∧β)=dα∧β+(−1)^kα∧dβ（α为k形式）。将α、β写成系数乘坐标外积，按普通乘积法则求导，把新增dx越过α的k个坐标因子即产生(−1)^k，逐项相加得到此式。混合偏导对称和外积反对称也直接给d²f=0。",
        "在目标局部坐标y中写ω=Σ_I f_I dy^(i₁)∧⋯∧dy^(i_k)。拉回为Σ_I(f_I∘F)dF^(i₁)∧⋯∧dF^(i_k)。求外微分时，d(dF^i)=0，故只剩d(f_I∘F)外乘这些因子；链式法则给d(f_I∘F)=Σ_j(∂_jf_I∘F)dF^j，恰为F*(dω)。",
        "坐标域上等式一致，因而全局成立。闭形式被拉回为闭形式，精确形式dη被拉回为d(F*η)，所以商空间kerd/imd上有良定义线性映射。拉回复合反序由定义直接验证，故诱导映射亦反序。$\\square$"
      ]
    },
    {
      "id": "de-rham-homotopy-formula",
      "topics": [
        "geometry/cohomology",
        "geometry/homotopy"
      ],
      "title": "微分形式的同伦算子公式",
      "statement": "设F:[0,1]×M→N光滑，F_t(x)=F(t,x)。定义Kω=∫₀¹ι_(∂t)(F*ω)dt，积分按M方向形式系数逐项进行。则 F₁*ω−F₀*ω=dKω+K(dω)。因此光滑同伦映射诱导相同de Rham上同调映射。",
      "dependencies": [
        "pullback-exterior-derivative",
        "ftc-second"
      ],
      "idea": "把乘积空间上的形式唯一拆成dt部分与纯空间部分，比较外微分的dt系数。",
      "steps": [
        "局部写η=F*ω=dt∧α(t)+β(t)，其中α是随t变化的(k−1)形式，β是k形式，二者均不含dt。k=0时α取0。由收缩定义ι_(∂t)η=α，所以Kω=∫₀¹α(t)dt。",
        "分次乘积法则给dη=dt∧(∂_tβ−d_Mα)+d_Mβ。因此K(dω)=∫₀¹(∂_tβ−d_Mα)dt，因为dF*ω=F*dω已证。另一方面d_MKω=∫₀¹d_Mα dt；光滑系数在紧t区间可对x在积分下求导，局部紧子集上差商由连续导数一致控制，故交换合法。",
        "相加得dKω+Kdω=∫₀¹∂_tβ dt=β(1)−β(0)=F₁*ω−F₀*ω。所有步骤局部成立且K由收缩及积分定义，故可拼成全局公式。若dω=0，两拉回相差精确形式dKω，得到同调映射相同；k=0时公式同样给函数差为Kdf。$\\square$"
      ]
    },
    {
      "id": "poincare-lemma-star-shaped",
      "topics": [
        "geometry/cohomology",
        "geometry/differential-structures"
      ],
      "title": "星形区域的 Poincaré 引理及全局限制",
      "statement": "若开集U⊆R^m关于0星形，则其每个次数k≥1的光滑闭形式ω均精确。一个原像为 (Kω)_x(v₁,…,v_(k−1))=∫₀¹t^(k−1)ω_(tx)(x,v₁,…,v_(k−1))dt。H⁰_dR(U)=R，高次de Rham上同调为零。去掉星形条件后闭形式未必精确。",
      "dependencies": [
        "de-rham-homotopy-formula",
        "ftc-second"
      ],
      "idea": "把恒等映射沿径向收缩到常值映射，常值拉回对正次数为零。",
      "steps": [
        "令F(t,x)=tx，星形性保证全段在U内。F₁=id，F₀为常值0。正次数形式在常值映射下拉回为零，因为其微分作用于每个切向量都为零。同伦公式给ω=dKω+Kdω；若dω=0，得ω=dKω。",
        "显式算子来自dF(∂_t)=x、dF(v_j)=tv_j，所以收缩拉回的值为t^(k−1)ω_(tx)(x,v₁,…,v_(k−1))，积分即所列式。它在t=0无奇点，系数光滑，前面算子构造已保证得到光滑形式。若0形式f闭，即df=0，则沿径向线段 f(x)−f(0)=∫₀¹df_(tx)(x)dt=0，所以只有常数。",
        "全局限制用U=R²去掉原点展示。形式η=(−y dx+x dy)/(x²+y²)光滑，直接求偏导可见dη=0：∂_x[x/(x²+y²)]与∂_y[−y/(x²+y²)]均为(y²−x²)/(x²+y²)²。若η=df全局精确，则沿单位圆γ(t)=(cos t,sin t)、0≤t≤2π积分应为f(γ(2π))−f(γ(0))=0。",
        "然而拉回γ*η=dt，积分为2π，矛盾。因此该闭形式不精确。星形引理给局部精确性，但不能据此直接宣称任意流形的全局de Rham上同调消失，也不能代替一般de Rham比较定理。$\\square$"
      ]
    },
    {
      "id": "dilworth-finite",
      "topics": [
        "discrete/partial-orders"
      ],
      "title": "有限偏序集的 Dilworth 定理",
      "statement": "有限偏序集 P 的最少链覆盖数等于最大反链大小。可要求链覆盖为互不交的链分割。",
      "dependencies": [
        "hall-konig"
      ],
      "idea": "把严格可比关系写成二部图；匹配给链分割，顶点覆盖给同样大小的反链。",
      "steps": [
        "令 |P|=n。建立左右各一份 P 的二部图，x_L 与 y_R 相连当且仅当 x<y。取最大匹配 M，大小 m。将每条匹配边视为 P 上箭头 x→y；每点入度、出度至多一，且严格偏序不允许有向环，所以箭头分解成互不交的有向路径及孤立点。每条路径上的点按传递性组成链。n 个点、m 条箭头给 n−m 条链，得到该大小的链分割。",
        "König 等式给此二部图一个大小 m 的顶点覆盖 C。令 A 为左右副本均不属于 C 的元素集合。覆盖的 m 个顶点最多涉及 m 个原元素，所以 |A|≥n−m。若 A 中有 x<y，则边 x_Ly_R 的两个端点都不在 C，违反覆盖，故 A 为反链。",
        "任一反链在任一链内至多含一个点，所以任意链覆盖数都至少为最大反链大小。前两步已给 n−m 条链及至少 n−m 个反链元素，二者只能相等。空偏序集时 m=n=0，同样成立。$\\square$"
      ]
    },
    {
      "id": "lovasz-local-lemma-symmetric",
      "topics": [
        "discrete/probabilistic-method"
      ],
      "title": "对称 Lovász 局部引理",
      "statement": "有限事件 A₁,…,A_N 有依赖图，最大度≤d；依赖图指每个 A_i 与全部非邻居事件生成的 σ 代数独立。若 P(A_i)≤p，且存在 0<x<1 使 p≤x(1−x)^d，则 P(∩_i A_i^c)≥(1−x)^N>0。",
      "dependencies": [
        "conditional-tower",
        "integral-linearity"
      ],
      "idea": "对条件坏事件概率作集合大小归纳，使逐项排除坏事件的概率保持正下界。",
      "steps": [
        "证明对任何 i∉S，都有 P(A_i | ∩_(j∈S)A_j^c)≤x，且这些条件事件概率正。空 S 时 P(A_i)≤p≤x，条件概率为一的全集上定义良好。按 |S| 归纳；由较小集合的条件概率界，任意 k 个事件的补交概率可分解为 k 个至少1−x的条件因子，故为正。这先保证当前分母有定义。",
        "把 S 分为 i 的邻居 S₁ 与非邻居 S₂。若 S₁ 为空，依赖图定义直接给条件概率=P(A_i)≤p≤x。若 S₁ 非空，令 B=∩_(j∈S₂)A_j^c、C=∩_(j∈S₁)A_j^c，则 P(A_i|B∩C)≤P(A_i|B)/P(C|B)。分子由独立性≤p；分母按 S₁ 逐项展开，每项所条件化的集合最多 |S|−1 个事件，归纳假设使每项≥1−x。因此 P(C|B)≥(1−x)^(|S₁|)。",
        "于是条件坏事件概率≤p/(1−x)^(|S₁|)≤p/(1−x)^d≤x，归纳完成。最后对全部补事件逐项分解，N 个因子均≥1−x，给总概率下界。这一证明要求与非邻居事件的联合信息独立；仅逐对独立不足以替代该条件。$\\square$"
      ]
    },
    {
      "id": "lovasz-epd-criterion",
      "topics": [
        "discrete/probabilistic-method"
      ],
      "title": "局部引理的 e p(d+1)≤1 判据",
      "statement": "在对称局部引理的相同依赖图条件下，若 e p(d+1)≤1，则全部坏事件同时不发生的概率为正。",
      "dependencies": [
        "lovasz-local-lemma-symmetric",
        "log-inequality"
      ],
      "idea": "取 x=1/(d+1)，用对数估计把精确条件化为常用数值判据。",
      "steps": [
        "若 d≥1，令 x=1/(d+1)。由 log(1+1/d)≤1/d，得 (d/(d+1))^d≥e^(−1)。因此 x(1−x)^d≥1/[e(d+1)]≥p，满足精确局部引理条件。",
        "若 d=0，数值条件使 p≤1/e<1。取任意 p≤x<1 且 x>0，例如 x=(1+p)/2，则 p≤x(1−x)^0，仍可应用精确引理。两种情形都得到正概率存在性。$\\square$"
      ]
    },
    {
      "id": "binomial-theorem",
      "topics": [
        "discrete/permutations-combinations"
      ],
      "title": "二项式定理",
      "statement": "对任意非负整数 n 和实数 x,y，有 (x+y)^n=Σ_(k=0)^n binom(n,k)x^k y^(n−k)。",
      "dependencies": [
        "binomial-count"
      ],
      "idea": "对 n 归纳；乘以 x+y 后，同次项系数由按是否含新元素分割子集得到 Pascal 恒等式。",
      "steps": [
        "n=0 时两边均为 1。假设对某 n 公式成立，则 (x+y)^(n+1)=(x+y)Σ_(k=0)^n binom(n,k)x^k y^(n−k)。把乘 x 的和改指标 j=k+1，把乘 y 的和保留 j=k 后，x^j y^(n+1−j) 的内部系数（1≤j≤n）为 binom(n,j−1)+binom(n,j)。",
        "这两个组合数之和等于 binom(n+1,j)：把 {1,…,n+1} 的 j 元子集按是否含 n+1 分成互斥两类；不含 n+1 的有 binom(n,j) 个，含 n+1 的删去该元素后有 binom(n,j−1) 个。子集计数及阶乘公式由前置组合数定理给出。",
        "因此每个内部同次项系数都是 binom(n+1,j)。端点 j=0 只有乘 y 的项，系数为 1=binom(n+1,0)；端点 j=n+1 只有乘 x 的项，系数为 1=binom(n+1,n+1)。故归纳式对 n+1 成立。数学归纳法遂给出所有非负整数 n 的结论。实数乘法可交换，故整理同次幂合法；对不交换代数不作此断言。$\\square$"
      ]
    },
    {
      "id": "formal-generating-recurrence",
      "topics": [
        "discrete/generating-functions",
        "discrete/recurrences"
      ],
      "title": "常系数递推的有理生成函数",
      "statement": "若 n≥k 时 a_n=Σ_(j=1)^k c_j a_(n-j)，则形式普通生成函数 A(z)=Σ_(n≥0)a_nz^n 满足 (1-Σc_jz^j)A(z)=Σ_(n=0)^(k-1)[a_n-Σ_(j=1)^n c_j a_(n-j)]z^n。",
      "dependencies": [
        "def-ring-field"
      ],
      "idea": "逐个比较形式级数系数，所有计算只涉及有限个项。",
      "steps": [
        "乘积中 z^n 的系数为 a_n-Σ_(j=1)^(min(k,n))c_j a_(n-j)。n≥k 时由递推为零，n<k 时就是右端所列初始系数，因此两形式级数相等。",
        "分母常数项为一，形式上可递归求逆：逆系数从常数项开始逐次由乘积为一唯一确定。所以 A 是所给多项式除以分母的形式有理函数。此证明不需要、也不声称某个复数 z 上的解析收敛。$\\square$"
      ]
    },
    {
      "id": "probabilistic-existence-maxcut",
      "topics": [
        "discrete/probabilistic-method",
        "discrete/randomized-algorithms",
        "discrete/combinatorial-optimization"
      ],
      "title": "随机切割的存在界与条件期望去随机化",
      "statement": "有 m 条边的有限无向图存在至少 m/2 条跨边的切割，并可用逐点条件期望构造；这给最大割的 2 近似。",
      "dependencies": [
        "independent-bounded-products",
        "integral-linearity"
      ],
      "idea": "随机将顶点放到两侧，每条边贡献期望 1/2；每次固定一个顶点时保留不低于当前期望的一侧。",
      "steps": [
        "各顶点独立等概率取两色。每条边两端颜色不同的概率为 1/2；跨边数 X 为这些指标之和，所以 E[X]=m/2。有限个切割的平均为 m/2，因此至少一个不低于该值。",
        "部分颜色固定后，下一顶点的两个选择对应的条件期望平均等于当前期望，所以至少一个选择不降低它。依次固定全部顶点，最终期望就是实际跨边数，仍≥m/2。",
        "条件期望可直接相加：全已固定边按是否跨边计 0 或 1，尚含未定顶点的边贡献 1/2。每步扫描全部边即可多项式完成。最优值≤m，所以所得值至少为最优值一半。$\\square$"
      ]
    },
    {
      "id": "mantel",
      "topics": [
        "discrete/extremal-combinatorics"
      ],
      "title": "Mantel 定理",
      "statement": "n 个顶点的无三角形简单图至多有 floor(n²/4) 条边，平衡完全二部图达到该界。",
      "dependencies": [
        "handshake",
        "cauchy-schwarz"
      ],
      "idea": "无三角形使一条边两端的邻点集不交，再对所有边求和。",
      "steps": [
        "若 uv 是边，则 N(u)、N(v) 不交，否则公共邻点形成三角形；因此 d(u)+d(v)≤n。对边求和，左侧每个顶点的度出现 d(v) 次，得 Σ_v d(v)²≤mn。",
        "握手定理与 Cauchy—Schwarz 给 (2m)²=(Σd)²≤nΣd²≤n²m。m>0 时约去 m 得 m≤n²/4，整数性取下整；m=0 时直接成立。",
        "将顶点分为 floor(n/2) 与 ceil(n/2) 两部，只连跨部全部边，无三角形，边数为两部大小乘积 floor(n²/4)，故界可达到。$\\square$"
      ]
    },
    {
      "id": "maxflow-mincut",
      "topics": [
        "discrete/network-flows",
        "discrete/paths-connectivity"
      ],
      "title": "最大流—最小割定理与整数性",
      "statement": "有限容量网络的最大流值等于最小源汇割容量；容量为非负整数时存在整数最大流，增广路算法有限终止。",
      "dependencies": [
        "heine-borel-rn",
        "finite-dimensional-compactness",
        "def-finite-structures"
      ],
      "idea": "最大流在紧可行集取到；最优时残量网络无增广路，可达点恰好给等值割。",
      "steps": [
        "可行流由 0≤f_e≤c_e 与线性守恒等式定义，是有限维闭有界非空集（含零流）。流值线性连续，故最大流 f 存在。对任意割 S 含源不含汇，守恒求和给流值为跨割净流，≤从 S 指向补集的容量和。",
        "残量网络对每条原边放正向剩余 c_e-f_e 与反向 f_e 的弧。若有源至汇的正剩余简单路径，沿路增减最小剩余量 δ>0，保持各边范围与内部守恒，并增加流值 δ，违背最优。",
        "令 S 为残量网络从源可达的点，汇不在 S。原边若从 S 到补集必饱和，否则可继续到达；若从补集到 S 则流为零，否则其反向残量弧允许到达外点。因此净流等于该割容量，上下界相等。",
        "整数容量时从零开始增广，所有残量和增量保持整数，每次流值至少增加一，而值被源出边容量和控制，所以有限次终止。终止时同一可达割论证证明最优，且所有边流整数。$\\square$"
      ]
    },
    {
      "id": "hall-konig",
      "topics": [
        "discrete/matchings-coloring"
      ],
      "title": "Hall 匹配定理与 König 等式",
      "statement": "二部图 (U,V) 存在覆盖 U 的匹配，当且仅当每个 A⊆U 有 |N(A)|≥|A|。此外最大匹配大小等于最小顶点覆盖大小。",
      "dependencies": [
        "maxflow-mincut"
      ],
      "idea": "把匹配写成整数单位流，最小割条件正好翻译为邻集条件。",
      "steps": [
        "建网络：源到每个 U 顶点容量一，每个 V 顶点到汇容量一，原二部边 U→V 容量 M=|U|+1。整数流在每个 U、V 上至多占一个单位，所以其正流边给匹配；反向匹配也给同值流。",
        "若 Hall 条件成立，对任意割，若跨过一条容量 M 的边，容量已大于 |U|；否则令 A 为源侧 U 顶点，则 N(A) 都在源侧 V，割容量≥|U|-|A|+|N(A)|≥|U|。最大流最小割与源总容量 |U| 给全覆盖匹配。必要性由匹配把 A 单射送入 N(A) 直接得到。",
        "对一般最大流的最小割，容量≤|U|，所以无大容量边跨割。集合 (U\\S)∪(V∩S) 覆盖每条原边，其大小正好等于割容量，也等于最大匹配大小。任意顶点覆盖至少覆盖匹配中每条互不共享端点的边，大小不小于匹配。因此两个最优值相等。$\\square$"
      ]
    },
    {
      "id": "vertex-menger",
      "topics": [
        "discrete/paths-connectivity"
      ],
      "title": "Menger 顶点不交路径定理",
      "statement": "有限图中两个不相邻顶点 s,t，内部顶点不交的 s—t 路径最大数等于删除后能分开它们的最少其他顶点数；有向版本同样成立。",
      "dependencies": [
        "maxflow-mincut"
      ],
      "idea": "将每个内部顶点拆成一条单位容量边，把顶点容量转成边容量。",
      "steps": [
        "每个非 s,t 顶点 v 拆为 v_in→v_out、容量一；原边改为相应出端到入端、容量 M>|图顶点数|，无向边给两个方向。内部不交路径给等值整数流。",
        "反向对整数流，沿正流弧从源追踪：守恒保证除汇外可以继续，出现圈就删去该圈流；有限图最终可提取源汇简单路径。每次减去其最小正整数流量，再重复，给流的路径分解。单位顶点边使不同路径内部不共享顶点。",
        "因 s,t 不相邻，删除其余全部顶点可分开二者，所以存在容量小于 M 的割，最小割不包含大容量原边。所割单位边对应一个顶点分离集；反向任意分离集删去对应单位边后，残量可达侧给容量不大于该集合大小的割。",
        "由最大流最小割，两种极值相等。非相邻条件避免直接 s—t 边导致“删除内部顶点不能切断”的特殊情形。$\\square$"
      ]
    },
    {
      "id": "dijkstra",
      "topics": [
        "discrete/shortest-paths",
        "discrete/greedy-algorithms"
      ],
      "title": "Dijkstra 算法的正确性",
      "statement": "有限图非负边权时，从源起始、每次确定未定点中暂定距离最小者并松弛其出边，得到全部最短距离。",
      "dependencies": [
        "def-finite-structures",
        "axiom-natural"
      ],
      "idea": "归纳已确定点距离正确，真正更短路径的第一条出确定集的边会造成矛盾。",
      "steps": [
        "初始化源距离零、其余无穷。任何有限暂定值都是某条源起游走的长度，因此不小于真实最短距离。非负权允许删圈不增加长度，有限个简单路径保证每个可达点有最短路径。",
        "设已有确定集 S 的值正确，取下一个最小暂定值点 v。若存在更短路径，取其上第一条由 S 到外部的边 x→y。处理 x 时已令 d(y)≤δ(x)+w_xy，不超过该路径到 y 的长度，也不超过其到 v 的总长度。",
        "于是 d(y)<d(v)，违背 v 是未定点最小值。因此 v 的值正确。归纳到所有可达点；若未定最小值为无穷，则不再有可达未定点，否则某条从 S 出去的有限路径会留下有限暂定值。$\\square$"
      ]
    },
    {
      "id": "bellman-ford",
      "topics": [
        "discrete/shortest-paths",
        "discrete/dynamic-programming"
      ],
      "title": "Bellman–Ford 递推与负环检测",
      "statement": "令 D_k(v) 为至多 k 条边的源起最小游走长度，则 D_(k+1)(v)=min(D_k(v),min_(u→v)[D_k(u)+w_uv])。若无源可达负环，D_(n-1) 即最短距离；第 n 轮仍下降当且仅当存在源可达负环。",
      "dependencies": [
        "def-finite-structures",
        "axiom-natural"
      ],
      "idea": "按最后一条边分类；超出简单路径长度的改善只能来自负圈。",
      "steps": [
        "零边初值为源零、其他无穷。任何至多 k+1 边的游走，要么已至多 k 边，要么末边是某 u→v，前缀至多 k 边，取最小即得递推；反向各候选也确实由合法游走实现。",
        "无可达负环时，可删除任何重复顶点间的非负圈而不增长度，剩下简单路径至多 n-1 条边，故此轮已达最优。",
        "若第 n 轮某值下降，对应改善游走含重复点；若所有圈都非负可删至 n-1 边而不增长度，违背严格改善，所以存在可达负环。反之若第 n 轮全不变，递推已到固定点，之后永不变；但可达负环可重复任意多次，使其某顶点距离无界下降，矛盾。因此必有一次第 n 轮下降。$\\square$"
      ]
    },
    {
      "id": "laplacian-components",
      "topics": [
        "discrete/spectral-graph-theory"
      ],
      "title": "图 Laplacian 的半正定性与连通分支",
      "statement": "无向简单图 L=D-A 为半正定实对称矩阵，其零特征值重数等于连通分支数。",
      "dependencies": [
        "hermitian-spectral",
        "rank-nullity"
      ],
      "idea": "二次型是边两端数值差的平方和，核恰好是各分支上的常函数。",
      "steps": [
        "直接展开 xᵀLx=Σ_(uv∈E)(x_u-x_v)²≥0，所以半正定。若 Lx=0，则二次型零，每条边的两个分量相等，沿路径传播使每个连通分支上常值。",
        "反过来分支常值向量在每条邻接差上为零，故 Lx=0。各分支指标给核的一组基，维数等于分支数。实对称谱定理使 L 可正交对角化，所以零特征值的代数重数也等于该核维数。$\\square$"
      ]
    },
    {
      "id": "finite-poset-linear-extension",
      "topics": [
        "discrete/partial-orders",
        "discrete/correctness-proofs"
      ],
      "title": "有限偏序的线性扩张",
      "statement": "每个有限偏序都能排列成与原偏序相容的全序，反复删除极小元的算法正确终止。",
      "dependencies": [
        "def-finite-structures",
        "axiom-natural"
      ],
      "idea": "有限性保证极小元存在，删除后对剩余元素归纳。",
      "steps": [
        "非空有限偏序若无极小元，从任意元素出发总能找一个严格更小者。重复会在有限集合中遇到重复元素，传递性使出现自身严格小于自身，矛盾。因此有极小元。",
        "把一个极小元放到首位，删去它后剩余仍是有限偏序，对元素数归纳给相容排列。若原有 x<y，y 不会在仍保留 x 时作为极小元先被删，所以排列尊重全部原关系。每步删一元素，有限终止。$\\square$"
      ]
    },
    {
      "id": "finite-birkhoff",
      "topics": [
        "discrete/lattices"
      ],
      "title": "有限分配格的 Birkhoff 表示",
      "statement": "有限分配格 L 同构于其非零并不可约元素偏序 J 的所有下闭集组成的格；映射为 x↦{j∈J:j≤x}。",
      "dependencies": [
        "def-finite-structures",
        "axiom-natural"
      ],
      "idea": "先把每个元素分解为并不可约元素，再用分配律把不可约提升为并素性质。",
      "steps": [
        "对有限格中的高度归纳：零元为空并。若非零 x 不可约，则自身就是所需分解；若可约，x=a∨b 且 a,b 都严格较小，分别分解后合并。因此每个 x 等于其下所有并不可约元素之并。",
        "若 j 并不可约且 j≤a∨b，分配律给 j=(j∧a)∨(j∧b)。不可约性迫使其中一个等于 j，故 j≤a 或 j≤b。于是所给映射把交送到集合交、并送到集合并，由第一步分解可知单射。",
        "对任一下闭集 I⊆J，令 x=∨I。若 j≤x，有限次用并素性质得 j≤某个 i∈I，所以下闭性使 j∈I；另一包含直接成立。故 x 的像恰为 I，得到满射及格同构。$\\square$"
      ]
    },
    {
      "id": "finite-boolean-atoms",
      "topics": [
        "discrete/boolean-algebras"
      ],
      "title": "有限布尔代数的原子表示",
      "statement": "有限布尔代数 B 同构于其原子集合 A 的幂集，因而 |B|=2^|A|。原子指非零且其下没有更小非零元素。",
      "dependencies": [
        "finite-birkhoff",
        "def-finite-structures"
      ],
      "idea": "每个非零剩余部分都含一个原子，有限性使原子并穷尽任一元素。",
      "steps": [
        "每个非零元素下的非零元素集有限，取极小者就是原子。不同原子的交若非零，则同时等于两个原子，迫使相同，所以不同原子互不相交。",
        "令 y 为 x 以下所有原子的并。若 y≠x，则 x∧¬y 非零，里面含原子 a≤x，却与 y 不交，违背 y 已含全部这样的原子。因此 x 是这些原子之并。",
        "映射 x↦{a≤x} 单射且保持交并。每个原子按分配律在 x 与 ¬x 中恰位于一边，所以保持补。任意原子子集的并恰好映回该子集，故满射到幂集。含零环式单元素布尔代数时 A 空，结论仍给一元素幂集。$\\square$"
      ]
    },
    {
      "id": "finite-projective-plane",
      "topics": [
        "discrete/finite-geometries",
        "geometry/projective-geometry"
      ],
      "title": "有限域射影平面的点线计数与公理",
      "statement": "F_q³ 的一维子空间作点、二维子空间作线，得到每线 q+1 点、共有 q²+q+1 点及同样多线的射影平面。两点唯一共线，两线唯一交点。",
      "dependencies": [
        "finite-fields-classification",
        "basis-extension",
        "rank-nullity"
      ],
      "idea": "用非零向量按非零标量分组，线则由非零线性形式的核计数。",
      "steps": [
        "每一维子空间有 q-1 个非零向量，互不相交地划分 q³-1 个非零向量，所以点数为 (q³-1)/(q-1)=q²+q+1。二维子空间同理含 (q²-1)/(q-1)=q+1 点。",
        "每条二维子空间是某非零线性形式的核：取其基扩成三维基，令前两基值零、后一基值一。两个非零形式有相同核当且仅当互为非零标量倍，故线数也为 q²+q+1。",
        "两不同点由独立向量生成，张成唯一二维空间。两不同线的定义形式独立，联合映射到 F_q² 有秩二，否则有非零线性组合形式为零；秩—零化度使共同核一维，给唯一交点。因此满足所列射影平面公理。$\\square$"
      ]
    },
    {
      "id": "design-fisher",
      "topics": [
        "discrete/combinatorial-designs"
      ],
      "title": "平衡区组设计的参数恒等式与 Fisher 不等式",
      "statement": "2-(v,k,λ) 设计中有 b 个区组、每点出现 r 次，则 vr=bk、r(k-1)=λ(v-1)。若 v>k>1、λ>0，则 b≥v。",
      "dependencies": [
        "rank-nullity",
        "hermitian-spectral"
      ],
      "idea": "双重计数给参数关系，关联矩阵的 Gram 矩阵正定给秩下界。",
      "steps": [
        "统计点属于区组的关联对，按点为 vr、按块为 bk。固定一点 x，统计同一块中与 x 同现的另一个点，按含 x 的块为 r(k-1)，按另一个点为 λ(v-1)，得第二式。",
        "令 N 为 v×b 的零一关联矩阵，则 NNᵀ 对角为 r、非对角为 λ，所以 NNᵀ=(r-λ)I+λJ。因 v>k，参数式使 r>λ。",
        "对非零实向量 z，zᵀNNᵀz=(r-λ)‖z‖²+λ(Σz_i)²>0，故该 v 阶矩阵满秩，N 的秩至少 v；但矩阵只有 b 列，所以 b≥v。$\\square$"
      ]
    },
    {
      "id": "reductions-transitive",
      "topics": [
        "discrete/reductions",
        "discrete/time-space"
      ],
      "title": "多项式映射归约的传递性",
      "statement": "若 A≤_pB、B≤_pC，则 A≤_pC；若 A≤_pB 且 B∈P，则 A∈P。",
      "dependencies": [
        "axiom-computation"
      ],
      "idea": "转换的输出长度不超过运行时间，所以复合的时间界仍为多项式。",
      "steps": [
        "设 x↦f(x) 用时 p(|x|)，y↦g(y) 用时 q(|y|)。输出至多 p(|x|) 个符号，故复合转换总用时≤p(|x|)+q(p(|x|))，仍为多项式。正确性由 x∈A 当且仅当 f(x)∈B 当且仅当 g(f(x))∈C 串联得到。",
        "若 B 有多项式判定器，以它替代第二个转换即可判定 A，时间仍为上述复合类型。归约方向因此表达“借助后者解决前者”，不能反过来据此推出 B 更容易。$\\square$"
      ]
    },
    {
      "id": "cook-levin",
      "topics": [
        "discrete/np-completeness",
        "discrete/time-space"
      ],
      "title": "Cook–Levin 定理：SAT 是 NP 完全的",
      "statement": "布尔公式可满足性 SAT 在 NP 中，且每个 NP 判定语言都可多项式时间映射归约到 SAT。",
      "dependencies": [
        "axiom-computation",
        "reductions-transitive"
      ],
      "idea": "用有限局部约束描述一个确定性验证器在未知证据上的多项式长计算表。",
      "steps": [
        "SAT∈NP：给出所有变元赋值，可按公式语法树在多项式时间验真。取任意 NP 语言 L，其确定性验证器 V 在输入 x 与长度至多 p(|x|) 的证据 w 上用多项式时间。可在证据中加长度字段及零填充，使固定多项式长度证据表达所有较短证据；修改验证器先解码再运行。",
        "选多项式 T 大于输入加证据长度及验证时间，把接受状态改为吸收状态。考虑时间 0,…,T、纸带位置 -T,…,T 的表；再加两条永远空白的外护栏。每格符号从固定有限集合 Σ 取值，Σ 包括普通带符号及带状态的唯一读头符号。为每个时间、位置、符号建布尔变元。",
        "加入每格恰取一个符号的约束（至少一个及两两不兼容），每行恰有一个读头的约束。首行固定 x、初态、空白及证据区域；证据格只允许编码字母，保留其布尔取值未定。末行要求某格带接受状态。",
        "对确定性机器，一个格下一时刻的符号由上一时刻该格及左右邻格三个符号唯一决定：读头至多移动一格，其他格保持或按邻读头写入。枚举不合法的三格旧符号加一格新符号组合，用一条四文字子句禁止每个组合。Σ 固定，故每个局部窗口仅常数条约束。护栏不会被真实 T 步计算越过。",
        "若有接受证据，其真实计算表满足全部约束。反向满足赋值由每格唯一符号给出表；初行编码某证据，各行唯一读头与全部局部确定性规则迫使下一行恰是 V 的真实后继。归纳整个表为合法接受计算，故该证据被接受。",
        "变量数 O(T²)，格约束和局部约束 O(T²)，即使用两两读头排斥，数量也至多 O(T³)。所有约束可多项式时间枚举并合取，得到 x∈L 当且仅当所得公式可满足。因此任意 NP 语言归约到 SAT，证明 NP 完全性。$\\square$"
      ]
    },
    {
      "id": "three-sat-clique",
      "topics": [
        "discrete/np-completeness",
        "discrete/combinatorial-optimization"
      ],
      "title": "3-SAT 与 CLIQUE 的 NP 完全性",
      "statement": "每个 CNF 可满足性实例可多项式等可满足转换为每条至多三文字的 CNF；该 3-SAT 多项式归约到 CLIQUE，故两判定问题均 NP 完全。",
      "dependencies": [
        "cook-levin",
        "reductions-transitive"
      ],
      "idea": "长子句用链式辅助变元拆开，再将每个子句的一项选择变成一致文字团。",
      "steps": [
        "长度 k≥4 的子句 ℓ₁∨…∨ℓ_k 换成 (ℓ₁∨ℓ₂∨z₁)、(¬z₁∨ℓ₃∨z₂)、…、(¬z_(k-3)∨ℓ_(k-1)∨ℓ_k)。若原文字全假，链逐次迫使 z 为真，最后矛盾；若有真文字，可令 z_j 表示“至此前缀尚未出现真文字”，使全链成立。新长度与原子句长度线性相关。",
        "对 m 个非空三文字以下子句，每个文字出现建一顶点；只在不同子句且不互为否定的两个出现之间连边。若公式可满足，每个子句选一个真文字，得到 m 团。",
        "反之 m 团必须每个子句各取一个顶点，因为同句不连边；所选文字没有互相否定，可一致赋真再任意补全其他变元，使全部子句满足。空子句可直接输出固定不可满足实例。图规模多项式，给出归约。",
        "3-SAT 的赋值证据与 CLIQUE 的顶点表证据均可多项式验证。由 SAT 的 NP 完全性及归约传递性，得到两者 NP 完全。这里不据此断言 P≠NP。$\\square$"
      ]
    },
    {
      "id": "master-polynomial",
      "topics": [
        "discrete/divide-conquer",
        "discrete/recurrences"
      ],
      "title": "幂次代价的主定理",
      "statement": "对 n=b^m、b≥2、a≥1、p≥0，递推 T(n)=aT(n/b)+n^p、T(1)>0，分别在 a<b^p、a=b^p、a>b^p 时为 Θ(n^p)、Θ(n^p log n)、Θ(n^(log_ba))。",
      "dependencies": [
        "formal-generating-recurrence",
        "log-inequality"
      ],
      "idea": "逐层展开得到几何级数，三个量级来自公比小于、等于或大于一。",
      "steps": [
        "有限归纳展开 T(b^m)=a^mT(1)+b^(pm)Σ_(j=0)^(m-1)(a/b^p)^j。令 ρ=a/b^p。若 ρ<1，和被正常数上下控制，而 a^m≤b^(pm)，得到第一种量级。",
        "若 ρ=1，和为 m，T=b^(pm)(T(1)+m)，m 与 log n 成正常数倍，得到第二种。若 ρ>1，几何和与 ρ^m 同阶，两个总项都与 a^m=n^(log_ba) 同阶，得到第三种。公式只声明这些整幂输入及所列递推，不涵盖任意不规则子问题规模。$\\square$"
      ]
    },
    {
      "id": "held-karp",
      "topics": [
        "discrete/dynamic-programming",
        "discrete/combinatorial-optimization"
      ],
      "title": "Held–Karp 旅行商动态规划的正确性与复杂度",
      "statement": "n≥2 个顶点的完全有向加权图，固定起点 0，按已访问子集和末点存最小路径代价，再加回程边，可在 O(n²2^n) 时间、O(n2^n) 空间求精确最短 Hamilton 回路。",
      "dependencies": [
        "def-finite-structures",
        "axiom-natural"
      ],
      "idea": "任何最优路径的最后一步都来自一个小一顶点的子问题，反向每个子问题解都能拼回。",
      "steps": [
        "令 D(S,v) 为从 0 出发、恰访问 S 每点一次、在 v 结束的最小代价，S 含 0。初值 D({0},0)=0，其余非法状态为无穷。对 v≠0，D(S,v)=min_(u∈S\\{v})[D(S\\{v},u)+w_uv]。",
        "任一路径删去最后 v，得到右侧某前驱路径，所以其代价不低于递推值；反向任意有限候选前驱路径可添加 v，恰好访问所需集合。按 |S| 归纳，所有状态正确。最终 min_(v≠0)[D(V,v)+w_v0] 恰枚举全部回路的末点。",
        "状态至多 n2^n 个，每个检查至多 n 个前驱，给所列时间；存储每状态一个数及可选前驱给空间界。权可为任意有限实数，因为禁止重复顶点，不存在负环无限绕行问题。$\\square$"
      ]
    },
    {
      "id": "branch-bound",
      "topics": [
        "discrete/integer-programming",
        "applied/scheduling"
      ],
      "title": "有界整数域分枝定界的精确性",
      "statement": "有限整数盒中的优化，若每节点给其全部候选的有效下界，按不交分枝覆盖候选，仅在下界不低于已知可行值时剪枝，并最终枚举叶点，则算法有限结束并返回全局最优或判不可行。",
      "dependencies": [
        "axiom-finite"
      ],
      "idea": "未剪枝节点覆盖尚可能改进的所有解；剪枝时被丢弃解没有机会优于当前可行值。",
      "steps": [
        "令不变式为：每个未处理可行解，要么仍位于待搜索节点，要么其目标值不小于当前 incumbent。初始整个有限盒使它成立；不交分枝的并等于父节点候选，故保留不变式。",
        "若节点下界 L≥incumbent，则节点内每个可行值≥L，所以剪枝也保留不变式。叶点若可行就更新为较小值，否则丢弃。以候选数量或未固定整数范围严格下降的分枝保证有限树。",
        "全部节点处理后，不变式说明任意可行解目标值均不优于 incumbent，所以返回全局最优。若始终无可行叶而未因任何有限 incumbent 剪掉潜在可行点，则原问题不可行。该证明不把线性松弛解随意四舍五入。$\\square$"
      ]
    },
    {
      "id": "greedy-set-cover",
      "topics": [
        "discrete/approximation-algorithms",
        "discrete/greedy-algorithms"
      ],
      "title": "加权集合覆盖的调和近似界",
      "statement": "有限 n 元全集可被正成本集合覆盖时，每步选成本除以新增覆盖数最小的集合，所得总成本≤H_n·OPT≤(1+ln n)OPT。",
      "dependencies": [
        "log-inequality",
        "axiom-finite"
      ],
      "idea": "把每次成本均摊到新元素，最优覆盖保证每个阶段都有低于 OPT/剩余数 的单价。",
      "steps": [
        "尚余 r 个元素时，取一个最优覆盖。其各集合未覆盖元素数之和至少 r，总成本为 OPT，因此至少一集合的成本/新增数≤OPT/r；贪心选择的单价不会更高。",
        "若一步新覆盖 k 个，每个元素均摊该步相同单价，总额正为成本。按它们被覆盖的顺序，把剩余数量从 r 排到 r-k+1，各收费≤OPT/r≤OPT/(相应剩余量)。",
        "全部元素覆盖后总收费≤OPTΣ_(j=1)^n1/j。函数 1/x 递减，Σ_(j=2)^n1/j≤∫₁ⁿdx/x=ln n，得后一个界。每步至少覆盖一新元素，所以过程有限终止。空全集成本零单独处理。$\\square$"
      ]
    },
    {
      "id": "euclid-loop",
      "topics": [
        "discrete/correctness-proofs",
        "numbertheory/gcd"
      ],
      "title": "Euclid 算法的终止性与循环不变式",
      "statement": "对非负整数 a,b 不全零，循环 (a,b)←(b,a mod b)，直到 b=0，返回 a，恰为原两数最大公因数。",
      "dependencies": [
        "division-algorithm",
        "bezout",
        "axiom-natural"
      ],
      "idea": "每轮保留公因数集合，而第二变量严格下降。",
      "steps": [
        "若 a=qb+r，整数 d 同时整除 a,b 当且仅当同时整除 b,r，因为 r=a-qb、a=qb+r。因此每轮公因数集合不变，这是循环不变式。",
        "b>0 时余数满足 0≤r<b，故第二变量为严格下降的非负整数，良序原则保证有限终止。终止时两数为 (a,0)，a>0（原不全零且变换不把两数同时变零），其最大公因数为 a；由不变式即为原最大公因数。$\\square$"
      ]
    },
    {
      "id": "one-time-pad",
      "topics": [
        "discrete/symmetric-encryption"
      ],
      "title": "一次一密的完美保密与复用泄漏",
      "statement": "均匀独立密钥 K∈{0,1}^n，密文 C=M xor K，对任意明文分布都与 M 独立；同一 K 加密两明文时泄漏它们的 xor。",
      "dependencies": [
        "axiom-finite"
      ],
      "idea": "固定明文与密文后，恰有一个密钥使它们对应。",
      "steps": [
        "对任意正概率明文 m 与任意 c，P(C=c|M=m)=P(K=c xor m)=2^(-n)，与 m 无关。所以联合概率 P(M=m,C=c)=P(M=m)2^(-n)，等于边缘乘积，得到完全独立。",
        "正确性由 (M xor K) xor K=M。若复用密钥，C₁ xor C₂=(M₁ xor K) xor(M₂ xor K)=M₁ xor M₂，直接暴露两个消息的关系，故上面的单次证明不能套用于复用。$\\square$"
      ]
    },
    {
      "id": "rsa-correctness",
      "topics": [
        "discrete/public-key-cryptography",
        "numbertheory/modular-exponentiation"
      ],
      "title": "RSA 的全消息正确性",
      "statement": "设不同素数 p,q，N=pq，ed≡1 mod (p-1)(q-1)。则对每个整数 m，(m^e)^d≡m mod N，包括与 N 不互素的 m。",
      "dependencies": [
        "chinese-remainder",
        "fermat-little"
      ],
      "idea": "分别在两个素数模数上讨论零与非零类，再由中国剩余合并。",
      "steps": [
        "模 p 时，若 p|m，则 m^(ed) 与 m 都为零；否则费马小定理给 m^(p-1)≡1，而 ed-1 是 p-1 的倍数，所以 m^(ed)≡m。",
        "模 q 完全同样。p,q 互素，中国剩余唯一性使两个同余合并为模 N 的同余。此处证明加解密代数正确，不声称教科书 RSA 已满足现代加密或签名安全定义。$\\square$"
      ]
    },
    {
      "id": "hash-then-sign",
      "topics": [
        "discrete/digital-signatures",
        "discrete/security-reductions"
      ],
      "title": "Hash-then-sign 的条件安全归约",
      "statement": "对散列摘要签名的方案，任意新消息伪造成功事件，可分为底层签名方案的新摘要伪造，或散列函数的一对碰撞。因此其 EUF-CMA 优势不超过相应签名伪造优势与碰撞优势之和。",
      "dependencies": [
        "axiom-computation",
        "axiom-finite"
      ],
      "idea": "以伪造摘要是否已被查询过分类，分别给出两个可执行归约。",
      "steps": [
        "签名归约将每个消息查询 m 转为摘要 H(m) 后提交底层签名 oracle，原样返回。若攻击者最终给出新消息 m* 的有效签名，且 H(m*) 不在此前查询摘要中，它直接是底层签名实验中新摘要的有效伪造。",
        "碰撞归约自行生成签名密钥并模拟同一查询分布。若成功的新消息 m* 的摘要等于此前某消息 m_i 摘要，由新消息条件 m*≠m_i，输出 (m*,m_i) 就是一对碰撞。",
        "两事件不交且穷尽有效新消息伪造，所以成功概率之和恰为原优势，分别被两个归约算法的成功率控制。运行时间为攻击者时间加上其有限次散列、签名和查表开销。若底层签名安全且散列抗碰撞，优势均可忽略，则组合也安全；这是条件结论，不把困难假设写成无条件定理。$\\square$"
      ]
    },
    {
      "id": "schnorr-hvzk",
      "topics": [
        "discrete/zero-knowledge"
      ],
      "title": "Schnorr 协议的完备性、特殊可靠性与诚实验证者零知识",
      "statement": "素数阶 q 群由 g 生成，公开 h=g^w。协议 a=g^r，挑战 c∈F_q，回答 z=r+cw；验证 g^z=ah^c。它完美完备、具有两份同承诺不同挑战的见证提取，并可模拟诚实验证者转录。",
      "dependencies": [
        "finite-fields-classification",
        "bezout"
      ],
      "idea": "验证式直接成立；相同承诺相除消掉随机量；模拟先选挑战与回答再反推承诺。",
      "steps": [
        "诚实回答满足 g^z=g^(r+cw)=g^r(g^w)^c=ah^c，因此始终接受。",
        "若同一 a 有两份有效转录 (c,z)、(c′,z′)，且 c≠c′，相除得 g^(z-z′)=h^(c-c′)。因 q 素，c-c′ 在 F_q 可逆。令 w*=(z-z′)/(c-c′)，以逆指数作用于等式得到 g^(w*)=h，从而提取见证。",
        "诚实转录中 r,c 独立均匀，映射 (r,c)↦(z=r+cw,c) 是 F_q² 的双射，所以 z,c 也独立均匀。模拟器直接选均匀 c,z，设 a=g^z h^(-c)，得到与真实转录完全同分布的结果，且不使用 w。",
        "此结论明确是诚实验证者零知识与特殊可靠性；任意恶意验证者零知识、可组合性和具体协议改造须另证，不能从本模拟器直接推出。$\\square$"
      ]
    },
    {
      "id": "von-neumann-mean-ergodic",
      "topics": [
        "analysis/ergodicity",
        "analysis/hilbert-spaces"
      ],
      "title": "Hilbert 空间等距算子的平均遍历定理",
      "statement": "设U为实或复Hilbert空间H上的线性等距算子，不要求满射。则 A_n=n⁻¹Σ_(k=0)^(n−1)U^k 强收敛于固定子空间F={x:Ux=x}上的正交投影。即每个x有‖A_nx−P_Fx‖→0。",
      "dependencies": [
        "projection-closed-subspace",
        "complex-inner-cauchy-schwarz"
      ],
      "idea": "固定向量不变，余边界向量的平均望远镜趋零；两类向量的闭线性张成覆盖整个空间。",
      "steps": [
        "F为ker(I−U)，U等距连续，所以F闭。令R为(I−U)H的闭包。证明R⊥=F：若y∈R⊥，则对全部x有⟨(I−U)x,y⟩=0。取x=y，得到⟨Uy,y⟩=‖y‖²；等距性给‖Uy−y‖²=‖Uy‖²+‖y‖²−2Re⟨Uy,y⟩=0，故Uy=y。",
        "反向若Uy=y，等距线性算子保持内积，可由实、复极化公式直接从范数保持导出。因此⟨Ux,y⟩=⟨Ux,Uy⟩=⟨x,y⟩，故y∈R⊥。闭子空间正交分解于是给H=F⊕R。",
        "对x=(I−U)z，A_nx=(z−U^nz)/n，范数至多2‖z‖/n，趋零。又‖A_n‖≤1，所以对R内任意x，先取(I−U)z使距离小于ε，再用统一算子范数界，得limsup‖A_nx‖≤ε；ε任意故趋零。对F中向量平均恒等自身，两部分相加得到正交投影极限。$\\square$"
      ]
    },
    {
      "id": "hopf-maximal-ergodic",
      "topics": [
        "analysis/ergodicity",
        "probability/stationary-processes"
      ],
      "title": "Hopf 极大遍历引理",
      "statement": "设概率空间上T可测且保持测度，f为实L¹函数。令S_kf=Σ_(j=0)^(k−1)f∘T^j，E_N={max_(1≤k≤N)S_kf>0}。则∫_(E_N)f≥0。对E={sup_(k≥1)S_kf>0}亦有∫_E f≥0。",
      "dependencies": [
        "integral-linearity",
        "dominated-convergence",
        "lotus"
      ],
      "idea": "有限最大部分和满足一个递推恒等式，积分时保测性使移位项抵消。",
      "steps": [
        "取h₀=0、h_N=max(0,S₁f,…,S_Nf)。有限和可积，最大值被Σ_(j<N)|f|∘T^j支配，故h_N可积。分离第一项f后有 h_N=max(0,f+h_(N−1)∘T)。而E_N={h_N>0}，在E_N上f=h_N−h_(N−1)∘T。",
        "因h_N在E_N外为零且h_(N−1)∘T非负，得 f1_(E_N)≥h_N−h_(N−1)∘T。T保测及推前积分换元给∫h_(N−1)∘T=∫h_(N−1)。又h_N≥h_(N−1)逐点成立，所以∫_(E_N)f≥∫h_N−∫h_(N−1)≥0。",
        "E_N随N递增且并为E，f1_(E_N)→f1_E，并被|f|支配。支配收敛给∫_E f=lim∫_(E_N)f≥0。此结论不要求T可逆或遍历。$\\square$"
      ]
    },
    {
      "id": "ergodic-l1-maximal",
      "topics": [
        "analysis/ergodicity",
        "probability/stationary-processes"
      ],
      "title": "遍历平均的弱 L¹ 极大不等式",
      "statement": "在保测概率变换T下，对实或复f∈L¹及λ>0，有 P{sup_(n≥1)|n⁻¹Σ_(j<n)f∘T^j|>λ}≤‖f‖₁/λ。特别这些平均的绝对值上确界几乎处处有限。",
      "dependencies": [
        "hopf-maximal-ergodic",
        "measure-continuity-above"
      ],
      "idea": "用|f|控制平均绝对值，再对|f|−λ应用极大引理。",
      "steps": [
        "记A_nf=n⁻¹Σ_(j<n)f∘T^j。三角不等式给|A_nf|≤A_n|f|。令E={sup_n A_n|f|>λ}。该集合等于{sup_n S_n(|f|−λ)>0}，故Hopf引理给0≤∫_E(|f|−λ)，即λP(E)≤∫_E|f|≤‖f‖₁。所求事件为E子集，得到弱型界。",
        "对正整数m取λ=m。事件{sup_n|A_nf|>m}随m递减，其概率至多‖f‖₁/m趋零。测度上连续性给{sup_n|A_nf|=∞}概率零，证明有限性。这只是极大估计，本身尚未断言平均逐点收敛。$\\square$"
      ]
    },
    {
      "id": "ergodic-dense-good-class",
      "topics": [
        "analysis/ergodicity"
      ],
      "title": "有界不变函数与余边界的 L¹ 稠密性",
      "statement": "对保测概率变换T，函数d=h+g−g∘T组成的线性空间在实L¹中稠密，其中h,g有界，h∘T=h几乎处处。对这些d，A_nd逐点且L¹收敛于h。",
      "dependencies": [
        "von-neumann-mean-ergodic",
        "l2-completeness",
        "dominated-convergence",
        "l2-cauchy-schwarz"
      ],
      "idea": "Hilbert空间正交分解给L²稠密性，再用截断将两类函数的生成元变成有界函数。",
      "steps": [
        "在实L²中令Uf=f∘T，保测换元给‖Uf‖₂=‖f‖₂。平均遍历证明中的分解给L²=Fix(U)⊕closure((I−U)L²)。故不变L²函数与L²余边界的有限和在L²中稠密；有限和可并入一个h及一个g。",
        "截断不变h为h_M=max(−M,min(h,M))，仍不变，且由支配收敛在L²逼近h。任意g∈L²同样可截断，且‖(I−U)(g−g_M)‖₂≤2‖g−g_M‖₂。因此有界h,g构成的上述空间L²稠密。概率空间上‖u‖₁≤‖u‖₂；任意L¹函数先截断为有界L²函数，截断误差L¹趋零，再用L²稠密性，得到L¹稠密。",
        "对d=h+g−g∘T，望远镜给A_nd=h+(g−g∘T^n)/n。除去h不变等式及其可数个逆像的零集，等式对全部n成立；余项绝对值≤2‖g‖∞/n，所以几乎处处及L¹都趋h。$\\square$"
      ]
    },
    {
      "id": "birkhoff-probability-l1",
      "topics": [
        "analysis/ergodicity",
        "probability/stationary-processes"
      ],
      "title": "Birkhoff 逐点遍历定理（概率空间 L¹ 版）",
      "statement": "设T为概率空间上的保测变换，f∈L¹为实函数。则A_nf几乎处处及L¹收敛于可积不变函数f*。对任意满足T⁻¹E=E模零的可测集E，有∫_E f*=∫_E f。若T遍历，即此类E的概率均为0或1，则f*=∫f几乎处处。",
      "dependencies": [
        "ergodic-dense-good-class",
        "ergodic-l1-maximal",
        "monotone-integral",
        "integral-linearity",
        "dominated-convergence"
      ],
      "idea": "先用稠密好函数与极大不等式消除振荡，再用L¹逼近识别极限及不变性。",
      "steps": [
        "对有理ε>0，取好函数d逼近f。d的平均收敛，因而A_nf的上、下极限之差至多2sup_n|A_n(f−d)|；若某点平均无界，也包含在该极大值无穷的零集内。极大不等式给振荡>2ε的集合概率≤‖f−d‖₁/ε。由稠密性使右侧任意小，故振荡>2ε的概率零。对可数有理ε取并，得到有限逐点极限f*。",
        "若d的极限为h，Fatou引理给‖f*−h‖₁≤liminf‖A_n(f−d)‖₁≤‖f−d‖₁，这也保证f*可积。这里Fatou可直接由已证单调收敛得到：对非负u_n取inf_(k≥n)u_k递增至liminf，再用积分单调性。又‖A_nf−f*‖₁≤‖f−d‖₁+‖A_nd−h‖₁+‖h−f*‖₁，先令n趋无穷再令‖f−d‖₁趋零，得到L¹收敛。",
        "不变性：保测性给A_nf∘T也在L¹趋f*∘T，而 A_nf∘T−A_nf=(f∘T^n−f)/n，L¹范数至多2‖f‖₁/n趋零。因此f*∘T=f*作为L¹元素成立。该论证不需要先证明点态f(T^n)/n趋零。",
        "对模零不变E，乘1_E与T的复合可交换到模零，保测换元给∫_E f∘T^j=∫(1_E f)∘T^j=∫_E f。因此∫_E A_nf=∫_E f。利用已证L¹收敛可将积分取极限，得到∫_E f*=∫_E f。",
        "最后若T遍历，可积不变函数必须几乎处处常数。证明：每个有理r的超水平集{f*>r}模零不变，故概率为0或1。若f*不几乎处处常数，其本质下、上界之间可选有理r，使该概率严格在0与1之间，矛盾；也可用这些概率随r递减及f*有限性直接确定唯一阈值。取E为全集，常数值由积分恒等式确定为∫f。$\\square$"
      ]
    },
    {
      "id": "burnside-orbit-count",
      "topics": [
        "algebra/group-actions"
      ],
      "title": "Burnside 轨道计数引理",
      "statement": "有限群 G 作用在有限集 X 上时，轨道数为 |G|⁻¹Σ_(g∈G)|Fix(g)|。正方形顶点的两色染色按旋转等价恰有六类。",
      "dependencies": [
        "orbit-stabilizer",
        "axiom-finite"
      ],
      "idea": "从群元素与被其固定的点两种方向数同一对集合。",
      "steps": [
        "令 S={(g,x)∈G×X:gx=x}。先固定 g，得 |S|=Σ_g|Fix(g)|；先固定 x，得 |S|=Σ_x|G_x|。",
        "每个轨道 O 的稳定子阶为 |G|/|O|，所以该轨道对后一和的贡献为 |O|·|G|/|O|=|G|。对全部轨道相加，得到 |S|=轨道数·|G|，除以 |G| 即得公式。",
        "正方形四顶点两色染色共有16种，恒等旋转固定16种；90度和270度旋转各只有单色的2种；180度旋转要求对顶点同色，固定4种。轨道数=(16+2+4+2)/4=6。$\\square$"
      ]
    },
    {
      "id": "finite-representation-unitary",
      "topics": [
        "algebra/group-representations",
        "algebra/characters"
      ],
      "title": "有限群复表示可选不变正定内积",
      "statement": "有限群的有限维复表示 V 上存在 G 不变的正定 Hermitian 内积，故可选基使全部表示矩阵酉；其特征标满足 χ(g⁻¹)=overline(χ(g))。",
      "dependencies": [
        "gram-schmidt",
        "character-class-function"
      ],
      "idea": "把任意坐标内积对群平均。",
      "steps": [
        "固定一组基，用坐标内积 〈·,·〉₀ 定义 〈v,w〉=|G|⁻¹Σ_g〈ρ(g)v,ρ(g)w〉₀。有限和保留第一变量线性与共轭对称性；v≠0 时每个 ρ(g)v 都非零，故平方长度平均严格正。",
        "对 h∈G，右乘 h 只是重排 g，故 〈ρ(h)v,ρ(h)w〉=〈v,w〉。Gram–Schmidt 给此内积下标准正交基，矩阵满足 ρ(h)*ρ(h)=I，即为酉矩阵。",
        "因此 ρ(g⁻¹)=ρ(g)⁻¹=ρ(g)*，其迹是 ρ(g) 迹的共轭，得到特征标公式。迹不依赖换基，结论对原表示也成立。$\\square$"
      ]
    },
    {
      "id": "finite-character-orthogonality",
      "topics": [
        "algebra/characters",
        "algebra/irreducible-representations"
      ],
      "title": "有限群复不可约特征标的正交性",
      "statement": "有限群 G 的有限维复表示 V,W 满足 |G|⁻¹Σ_g overline(χ_V(g))χ_W(g)=dim_C Hom_G(V,W)。若 V,W 不可约，右侧在同构时为1、不同构时为0。",
      "dependencies": [
        "finite-representation-unitary",
        "complex-eigenvalue",
        "schur-lemma",
        "rank-nullity"
      ],
      "idea": "在全部线性映射空间上平均共轭作用，所得投影的迹既是像维数，也是特征标乘积平均。",
      "steps": [
        "在 L=Hom_C(V,W) 上定义 A_g(S)=ρ_W(g)Sρ_V(g)⁻¹，P=|G|⁻¹Σ_gA_g。群乘法给 A_hP=P，因此 P 的像属于全部不变向量；不变向量恰是 Hom_G(V,W)，且在其上 P 为恒等。因此 P²=P、im P=Hom_G(V,W)。",
        "任一幂等线性映射的空间为 im P⊕ker P：S=PS+(S−PS)，交为零。在适应此分解的基下矩阵为 diag(I,0)，所以 tr P=dim im P。",
        "对矩阵映射 S↦BSC，取矩阵单位 E_ij 为基，其在 E_ij 坐标上的系数为 B_ii C_jj，故该线性映射的迹为 Σ_ijB_ii C_jj=tr B·tr C。于是 tr A_g=χ_W(g)χ_V(g⁻¹)=χ_W(g)overline(χ_V(g))。平均并用前步即得等式。",
        "若 V,W 不可约且不同构，Schur 引理给 Hom_G(V,W)=0。若同构，固定一个同构 U，则每个等变 S 的 U⁻¹S 是 V 的等变自同态；复有限维 Schur 标量结论使它为 λI，故 S=λU，Hom 空间维数一。$\\square$"
      ]
    },
    {
      "id": "character-multiplicity",
      "topics": [
        "algebra/characters",
        "algebra/invariant-subspaces"
      ],
      "title": "特征标唯一确定复有限群表示及分解重数",
      "statement": "有限群的有限维复表示 V 中，不可约表示 W 的重数为 〈χ_W,χ_V〉=|G|⁻¹Σ_g overline(χ_W(g))χ_V(g)。因此两个此类表示同构，当且仅当特征标相同。",
      "dependencies": [
        "maschke",
        "finite-character-orthogonality",
        "character-class-function"
      ],
      "idea": "用完全可约分解展开特征标，正交性提取每个不可约成分的整数系数。",
      "steps": [
        "Maschke 定理给 V 为有限多个不可约表示的直和。将同构成分合并为 V≅⊕_j W_j^(⊕m_j)，其中 W_j 两两不同构、m_j 为非负整数。直和特征标可加，故 χ_V=Σ_jm_jχ_(W_j)。",
        "与任意不可约 χ_W 作特征标内积，正交性使同构成分贡献 m_j，其他项贡献零；若 W 未出现则重数零。这既给重数公式，也说明它与所选完全可约分解无关。",
        "若两表示特征标相同，取两者分解中全部不可约同构类的有限并，公式使每个类的重数相同，逐块同构给整体同构。反向同构表示逐群元矩阵相似，迹相同，所以特征标相同。$\\square$"
      ]
    },
    {
      "id": "real-schur-counterexample",
      "topics": [
        "algebra/irreducible-representations"
      ],
      "title": "实不可约表示的等变自同态未必为实标量",
      "statement": "C₃ 在 R² 上的120度旋转表示不可约，却存在非标量实等变自同态；所以 Schur 标量结论不能无条件从复数域搬到实数域。",
      "dependencies": [
        "axiom-vector"
      ],
      "idea": "显式旋转矩阵的特征多项式无实根，排除不变实直线；90度旋转与它交换。",
      "steps": [
        "令 R=[[-1/2,−√3/2],[√3/2,−1/2]]。直接矩阵相乘给 R³=I，故它定义 C₃ 的实二维表示。其特征多项式 t²+t+1=(t+1/2)²+3/4 对实 t 严格正。",
        "若存在一维实不变子空间，取非零 v，必有 Rv=tv、t∈R，违背该矩阵无实特征值。二维空间的非平凡真子空间只能一维，所以此表示不可约。",
        "令 J=[[0,−1],[1,0]]。直接相乘可见 JR=RJ，因此 J 为等变自同态；J 的非对角元素非零，不能是实标量矩阵。它可逆，仍符合 Schur 引理的“非零等变映射为同构”结论。$\\square$"
      ]
    },
    {
      "id": "finite-state-ftap",
      "topics": [
        "applied/no-arbitrage-pricing",
        "applied/hedging-replication"
      ],
      "title": "有限状态单期市场的资产定价第一基本定理",
      "statement": "设m个终态均有正物理概率，可自由多空交易，已用正无风险资产折现，使其现价和终值均为1。风险资产现价s∈R^d，终值矩阵D∈R^(m×d)，记G=D−1sᵀ。无套利指不存在θ使Gθ逐坐标非负且非零。则无套利当且仅当存在q∈R^m，q_i>0、Σq_i=1且Gᵀq=0，即所有折现资产价格等于q下的终值期望。",
      "dependencies": [
        "compact-closed-strong-separation",
        "rank-nullity"
      ],
      "idea": "将零成本收益子空间与非负单位单纯形严格分离，分离向量正好是严格正状态权重。",
      "steps": [
        "零成本头寸可写成风险持仓θ及现金持仓−sᵀθ，终值Gθ；收益空间L=imG是有限维闭线性子空间。闭性可选一组基并用Gram矩阵恢复收敛序列的系数。令Δ={z≥0:Σz_i=1}，它是非空紧凸集。套利存在等价于L∩Δ非空：把非零非负收益除以坐标和即可归一化；反向Δ中点本身即套利收益。",
        "无套利时两集不交。紧闭严格分离定理给向量w及α<β，使w·l≤α<β≤w·z对全部l∈L,z∈Δ成立。由于L含任意实数倍的l，若某w·l不为零，改变倍数会使其无上界，所以w与L正交。又0∈L，故α≥0，β>0；取z=e_i得w_i≥β>0。令q=w/Σw_i，则q严格正、和为1且Gᵀq=0。",
        "反向若存在此q，对任何零成本收益y=Gθ有q·y=0。若y≥0且非零，严格正q迫使q·y>0，矛盾。所以无套利。由于每个物理状态概率正，q也严格正正好意味着与物理概率具有相同零概率集合。此定理的有限状态、自由交易和折现假设是结论的一部分。$\\square$"
      ]
    },
    {
      "id": "finite-state-completeness-pricing",
      "topics": [
        "applied/no-arbitrage-pricing",
        "applied/hedging-replication"
      ],
      "title": "有限市场的复制定价与完备性等价定理",
      "statement": "在无套利有限状态单期市场中，令M=[1 D]、现价向量p=(1,s)。可复制收益H=Mθ的价格唯一为p·θ=q·H，对任意严格正定价概率q都相同。每个H∈R^m均可复制，当且仅当严格正定价概率唯一。任意新增收益H以价格h交易后的市场无套利，当且仅当某个原市场严格正定价概率q满足q·H=h。",
      "dependencies": [
        "finite-state-ftap",
        "rank-nullity"
      ],
      "idea": "复制价值由线性定价方程固定；若支付矩阵不满行秩，可沿转置核方向小幅扰动定价概率。",
      "steps": [
        "资产定价方程为Mᵀq=p。若H=Mθ，则q·H=qᵀMθ=p·θ。若两持仓复制相同H，它们的价格因此相同。也可直接用套利解释：较便宜复制组合做多、较贵做空，终值抵消，初始正收入存现金即形成严格正零成本终值。",
        "若M满行秩，imM=R^m即所有收益均可复制，且Mᵀ核为零，所以定价概率至多一个；第一基本定理保证至少一个。若M不满行秩，存在非零z满足Mᵀz=0。第一列为1保证Σz_i=0。取已有严格正q，并取ε>0使ε max_i|z_i|<min_i q_i，则q+εz及q−εz都严格正、和为1且满足定价方程，彼此不同。故唯一性反过来迫使满行秩。",
        "新增H为另一自由多空资产后仍是有限状态单期市场。其支付矩阵为[M H]，价格向量为(p,h)。第一基本定理说无套利等价于严格正q满足Mᵀq=p和Hᵀq=h，正是所列条件。因此不完备市场中，仅声称“取某个风险中性测度求期望”一般不能给唯一价格；对可复制收益则任意一个均给同价。$\\square$"
      ]
    },
    {
      "id": "finite-tree-ftap",
      "topics": [
        "applied/no-arbitrage-pricing",
        "applied/stochastic-price-models"
      ],
      "title": "有限事件树的鞅测度与无套利",
      "statement": "有限时域有限事件树中，每条边的物理条件概率严格正，风险资产折现价格给定，可按节点自由多空并自融资交易。全市场无套利当且仅当存在对每个终态严格正的概率Q，使每个资产的折现价格过程在Q下为鞅。",
      "dependencies": [
        "finite-state-ftap"
      ],
      "idea": "先在每个节点应用单期定理，再把严格正条件概率沿路径相乘；反向用鞅增量的零期望排除套利。",
      "steps": [
        "若某非终节点的一步市场有套利，从初始时刻到该节点之前持零头寸，到该节点时才建立该零成本头寸，下一步获非负且某子节点严格正的收益，随后只持现金。其余节点路径均持零，故得到全市场套利。每个子节点通往至少一个终态且物理条件概率正，所以严格正终值确实在正概率终态发生。因而全市场无套利迫使每个节点的一步市场无套利。",
        "逐节点应用单期第一基本定理，选出对子节点的严格正条件概率，使该节点资产价格等于下一步价格条件期望。树有限，可逐节点作有限选择。对每个终态，把根至它的条件概率相乘，定义Q。对子树从叶向上求和，条件权重和为1保证总质量1；每个乘积严格正。这些条件概率正是Q的节点条件概率，所以资产价格过程为Q鞅。",
        "反向设有这样的Q。自融资策略在一步中的折现财富增量为该节点持仓与资产价格增量的点积。节点持仓在分支发生之前已定，鞅条件使每个节点条件增量期望为零。逐层有限求和得到终值财富Q期望等于初始财富。有限树保证任何实数持仓和收益均可积，无需额外极限论证。",
        "若初始财富为零且终值非负、某物理正概率终态严格正，等价的严格正Q使终值期望严格正，与零期望矛盾。所以无套利。无限状态或连续时间市场涉及闭性、可容许策略及更强无套利条件，不由这条有限树证明自动推出。$\\square$"
      ]
    },
    {
      "id": "surface-gauss-weingarten",
      "topics": [
        "geometry/curves-surfaces",
        "geometry/curvature-geodesics",
        "geometry/riemannian-metric"
      ],
      "title": "曲面的 Gauss–Weingarten 分解公式",
      "statement": "设r:U⊆R²→R³为C³正则参数曲面，r_i=∂_ir，g_ij=r_i·r_j，单位法向n=(r₁×r₂)/|r₁×r₂|，b_ij=r_ij·n。则 r_ij=Σ_kΓ_ij^k r_k+b_ij n，Γ_ij^k=(1/2)Σ_l g^(kl)(∂_ig_jl+∂_jg_il−∂_lg_ij)；并有 ∂_in=−Σ_(k,l)b_il g^(lk)r_k。",
      "dependencies": [
        "rank-nullity"
      ],
      "idea": "在切向基和单位法向中分解二阶导数，再对内积恒等式求导恢复所有系数。",
      "steps": [
        "正则性保证r₁,r₂线性无关，g正定：对非零v∈R²，Σg_ijv_iv_j=|v₁r₁+v₂r₂|²>0，所以g可逆，记逆矩阵分量g^(kl)。r₁,r₂,n构成R³基，因此r_ij有唯一切向—法向分解，法向系数由点乘n得到b_ij。混合偏导相等给b_ij=b_ji及切向系数Γ_ij^k=Γ_ji^k。",
        "微分g_jl=r_j·r_l，得∂_ig_jl=r_ij·r_l+r_j·r_il。把(i,j,l)循环置换后，将前两式相加减第三式，混合偏导相等使交叉项抵消，得到 ∂_ig_jl+∂_jg_il−∂_lg_ij=2r_ij·r_l。代入切向分解即2Σ_kΓ_ij^kg_kl，乘逆矩阵解得所列Γ公式。",
        "由n·n=1得∂_in·n=0，所以∂_in在切平面。又n·r_l=0微分给∂_in·r_l=−n·r_il=−b_il。以g逆矩阵恢复切向分量，得所列Weingarten公式。所有式子均由一阶内积和普通偏导计算导出。$\\square$"
      ]
    },
    {
      "id": "surface-gauss-equation",
      "topics": [
        "geometry/curves-surfaces",
        "geometry/curvature-geodesics"
      ],
      "title": "曲面 Gauss 方程及高斯曲率公式",
      "statement": "沿用正则曲面记号，定义切向算子S(r_i)=−∂_in。其行列式K=detS=(b₁₁b₂₂−b₁₂²)/detg。若 R^l=∂₁Γ₂₂^l−∂₂Γ₁₂^l+Σ_k(Γ₂₂^kΓ₁k^l−Γ₁₂^kΓ₂k^l)，则Σ_l g₁l R^l=b₁₁b₂₂−b₁₂²，因而K=(Σ_lg₁lR^l)/detg。",
      "dependencies": [
        "surface-gauss-weingarten"
      ],
      "idea": "同一个三阶偏导按两种次序分解，切向系数必须相等，便得到外在第二基本形式和内在联络系数的关系。",
      "steps": [
        "Weingarten公式给S在切向基中的矩阵系数S_i^k=Σ_l b_il g^(lk)。转置约定不影响行列式，故detS=detb/detg。又g(Sr_i,r_j)=b_ij=b_ji，S对切平面内积对称，所以其两个实特征值即主曲率，行列式为主曲率乘积。二维对称算子的实特征值可选正交归一基后由实对称2×2矩阵的判别式(a−d)²+4b²≥0直接看出，不需另引谱定理。",
        "由C³混合偏导相等，∂₁r₂₂−∂₂r₁₂=0。将r₂₂=ΣΓ₂₂^kr_k+b₂₂n和r₁₂=ΣΓ₁₂^kr_k+b₁₂n分别求导，再用Gauss–Weingarten公式展开。第l个切向系数为 R^l−b₂₂Σ_jb₁j g^(jl)+b₁₂Σ_jb₂j g^(jl)，必须等于零。",
        "乘g₁l并对l求和，利用Σ_lg₁l g^(jl)=δ₁j，得到Σ_lg₁lR^l=b₂₂b₁₁−b₁₂b₂₁=b₁₁b₂₂−b₁₂²。除以正数detg得到陈述。法向系数还给另一组相容条件，但本定理无需使用。$\\square$"
      ]
    },
    {
      "id": "gauss-theorema-egregium",
      "topics": [
        "geometry/curves-surfaces",
        "geometry/curvature-geodesics",
        "geometry/riemannian-metric"
      ],
      "title": "Gauss 绝妙定理：高斯曲率由第一基本形式决定",
      "statement": "C³正则曲面的高斯曲率K完全由其第一基本形式g及至多二阶坐标导数决定。特别地，两曲面间足够光滑的局部等距映射保持高斯曲率；平面与圆柱局部等距且K=0，半径R的球面K=1/R²，不能与平面局部等距。",
      "dependencies": [
        "surface-gauss-equation"
      ],
      "idea": "把Gauss方程中的联络系数替换成由g计算的Christoffel公式，外在法向量与第二基本形式全部消失。",
      "steps": [
        "前面公式K=(Σ_lg₁lR^l)/detg中，Γ_ij^k由g、g逆矩阵及g的一阶导数表示；R由Γ的一阶导数和二次乘积表示。因此K只含g及其至多二阶导数，不再需要b或曲面在R³中的法向信息。这正是内蕴性的具体计算内容。",
        "若Φ是两曲面间局部等距映射，在第一曲面选局部参数r，在第二曲面用Φ∘r作为参数；局部微分同胚保证它正则。等距性意味着两套参数的g_ij逐点相同，其导数亦相同。代入同一曲率表达式得两对应点K相同，证明不依赖坐标选择。",
        "平面可取r(u,v)=(u,v,0)，g为单位矩阵、b=0，故K=0。圆柱取r(u,v)=(R cos(u/R),R sin(u/R),v)，其g同样为单位矩阵，故与平面该参数域局部等距，K=0。球面取外法向n=r/R，则−∂_in=−r_i/R，形算子为−I/R，行列式K=1/R²。法向反转会同时反转两主曲率，乘积不变。若球面局部等距平面，曲率保持性迫使1/R²=0，矛盾。$\\square$"
      ]
    },
    {
      "id": "fol-completeness-general",
      "topics": [
        "foundations/soundness-completeness",
        "foundations/consistency"
      ],
      "title": "任意集合大小一阶语言的完备性与模型存在",
      "statement": "对标准经典一阶演算，任意集合大小语言中的句子理论 T 与句子 φ 满足 T⊨φ 当且仅当 T⊢φ。特别地，T 相容当且仅当 T 有非空模型。",
      "dependencies": [
        "compactness-arbitrary-language",
        "fol-completeness-compactness",
        "fol-soundness",
        "def-hilbert-fol"
      ],
      "idea": "紧致性使语义蕴含只需有限前提，有限公式只含有限个非逻辑符号，于是可应用可数语言版本。",
      "steps": [
        "可靠性已对逐行有限证明验证，所用语言的基数不影响该归纳，所以 T⊢φ 推出 T⊨φ。反向若 T⊨φ，则 T∪{¬φ} 无模型。紧致性给它的某个有限子集无模型；取其中来自 T 的有限集 Δ，将 ¬φ 加入后仍无模型，故 Δ⊨φ。",
        "Δ 与 φ 是有限多个有限公式，所用非逻辑符号只有有限个。令 L₀ 为这些符号组成的子语言，变量符号按演算约定可数。任何非空 L₀ 结构都能扩成原语言结构：新增常元取固定元素，新增函数取常函数，新增关系取空关系，原有符号保持。因此若 L₀ 中 Δ 不蕴含 φ，该反模型可扩成原语言反模型，矛盾。于是 L₀ 中也有 Δ⊨φ。",
        "可数语言的完备性给 L₀ 演算中有限证明 Δ⊢φ。这份证明在原语言中逐行仍有效，且 Δ⊆T，所以 T⊢φ。若 T 无模型，则语义上 T⊨⊥，完备性给 T⊢⊥，不相容；若 T 有模型，可靠性排除其证明矛盾。两边合并即得模型存在等价。$\\square$"
      ]
    },
    {
      "id": "classical-explosion",
      "topics": [
        "foundations/consistency",
        "foundations/formal-proof"
      ],
      "title": "经典一阶演算的爆炸原理",
      "statement": "若句子理论 T 不相容，即 T⊢⊥，则对每个句子 φ 都有 T⊢φ。若 T 同时证明 ψ 与 ¬ψ，也有同样结论。",
      "dependencies": [
        "def-hilbert-fol"
      ],
      "idea": "矛盾蕴含任意句子是经典命题重言式，实例化后用肯定前件规则。",
      "steps": [
        "固定任意 φ。⊥ 表示固定矛盾句，因此 ⊥→φ 是经典命题重言式的代入实例，是本章 Hilbert 演算公理。由 T⊢⊥，一次 modus ponens 得 T⊢φ。",
        "若 T⊢ψ 且 T⊢¬ψ，命题公理实例 ψ→(¬ψ→⊥) 与两次 modus ponens 先给 T⊢⊥，再用前一步。这里讨论标准经典逻辑；不把结论扩到允许矛盾但不爆炸的其他演算。$\\square$"
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
      "id": "hahn-banach-one-step",
      "topics": [
        "analysis/linear-operators"
      ],
      "title": "次线性支配的单步线性延拓",
      "statement": "实向量空间 X 上 p:X→R 满足 p(x+y)≤p(x)+p(y)、p(tx)=tp(x)（t≥0）。若子空间 M 上实线性 f≤p，且 v∉M，则 f 可延拓为 M+Rv 上的线性 F≤p。",
      "dependencies": [
        "axiom-real",
        "axiom-vector"
      ],
      "idea": "新方向上的值 c 只需落在所有下界与上界之间；次线性保证两类界相容。",
      "steps": [
        "每个新向量唯一写成 m+tv；否则两种表示相减、v∉M 迫使 t 相同。因而规定 F(m+tv)=f(m)+tc 自动线性且延拓 f，只需选 c。",
        "对任意 a,b∈M，有 f(a)+f(b)=f(a+b)≤p(a+b)≤p(a−v)+p(b+v)。故 f(a)−p(a−v)≤p(b+v)−f(b)。所有左式构成非空集合，且被任一固定右式上界控制。由上确界公理，存在有限 c 使所有左式≤c≤所有右式。",
        "若 t>0，取 b=m/t，得到 c≤p(m/t+v)−f(m/t)，乘 t 即 F(m+tv)≤p(m+tv)。若 t<0，令 s=−t>0，取 a=m/s，得到 c≥f(m/s)−p(m/s−v)，乘 s 并移项给 f(m)−sc≤p(m−sv)。t=0 时是原假设。因此 F≤p。$\\square$"
      ]
    },
    {
      "id": "hahn-banach-real-dominated",
      "topics": [
        "analysis/linear-operators",
        "analysis/banach-spaces"
      ],
      "title": "实 Hahn–Banach 支配延拓定理",
      "statement": "在实向量空间 X 上，任一次线性 p 支配的子空间线性泛函 f:M→R，都可延拓为 X 上线性泛函 F≤p。",
      "dependencies": [
        "hahn-banach-one-step",
        "axiom-zorn"
      ],
      "idea": "将全部支配延拓按包含排序；链的并仍是延拓，极大者必须定义在整个空间。",
      "steps": [
        "考虑所有二元组 (N,g)，其中 M⊆N⊆X 是线性子空间，g:N→R 线性、g|M=f 且 g≤p。该集合非空，包含 (M,f)。以定义域包含且函数相容为偏序。",
        "对任意非空全序链，定义域的并 N 是子空间：有限多个向量所在的定义域总有一个包含另外各个。各函数在交上相同，故并给单值函数 g:N→R；线性性及 g≤p 可在某个共同定义域中验证。因此它是链上界。空链也有上界 (M,f)。",
        "Zorn 原则给极大延拓 (N,g)。若 N≠X，选 v∈X\\N，由单步延拓得到 N+Rv 上支配 p 的严格延拓，矛盾。故 N=X，所求 F=g 存在。这里没有断言延拓唯一，也不要求 X 完备。$\\square$"
      ]
    },
    {
      "id": "hahn-banach-normed",
      "topics": [
        "analysis/linear-operators",
        "analysis/normed-spaces"
      ],
      "title": "实、复赋范空间的保范数 Hahn–Banach 定理",
      "statement": "实或复赋范空间 X 的任意线性子空间 M 上，有界线性泛函 f 都有 X 上的有界线性延拓 F，且 ‖F‖=‖f‖。M 不必闭，X 不必完备。",
      "dependencies": [
        "hahn-banach-real-dominated",
        "axiom-metric"
      ],
      "idea": "实数情形以范数作次线性上界；复数情形先延拓实部，再由实部恢复复线性。",
      "steps": [
        "实数情形令 C=‖f‖、p(x)=C‖x‖。p 次线性，且 f≤p。由支配延拓得 F≤p；对 −x 应用同一不等式得到 −F(x)≤C‖x‖，所以 |F(x)|≤C‖x‖。限制到 M 给 ‖F‖≥‖f‖，与上界合并为相等。",
        "复数情形把 X 看作实向量空间，令 u=Re f。u 实线性且 |u(m)|≤C‖m‖。用实数版本延拓为实线性 U，满足 |U(x)|≤C‖x‖。定义 F(x)=U(x)−iU(ix)。实线性直接成立，且 F(ix)=U(ix)+iU(x)=iF(x)，因此对任意复数标量也线性。",
        "对 m∈M，因 f(im)=if(m)，有 U(m)=Re f(m)、U(im)=−Im f(m)，故 F(m)=f(m)。若 F(x)≠0，取单位复数 λ 使 λF(x)=|F(x)|。由复线性及 Re F=U，|F(x)|=Re F(λx)=U(λx)≤C‖λx‖=C‖x‖。F(x)=0 时同样满足。限制与上界再次给保范数。$\\square$"
      ]
    },
    {
      "id": "norming-functional",
      "topics": [
        "analysis/linear-operators",
        "analysis/normed-spaces"
      ],
      "title": "连续泛函分离点与对偶范数公式",
      "statement": "对实或复赋范空间 X 中任意非零 x，存在 F∈X*，‖F‖=1 且 F(x)=‖x‖。因此 ‖x‖=sup_{‖F‖≤1}|F(x)|，且连续线性泛函分离不同点。",
      "dependencies": [
        "hahn-banach-normed"
      ],
      "idea": "先在 x 张成的一维空间上定义保范数泛函，再延拓。",
      "steps": [
        "在 M=span{x} 上定义 f(λx)=λ‖x‖。x≠0 使表示唯一，f 线性且 |f(λx)|=|λ|‖x‖=‖λx‖，所以 ‖f‖=1。保范数延拓给 ‖F‖=1、F(x)=‖x‖。",
        "对任何 ‖G‖≤1，有 |G(x)|≤‖x‖；上述 F 取到这个上界，所以对偶范数公式成立。x=0 时两边皆零。若 x≠y，对 x−y 选此泛函，便有 F(x)−F(y)=‖x−y‖≠0，故可分离。$\\square$"
      ]
    },
    {
      "id": "bidual-isometry",
      "topics": [
        "analysis/linear-operators",
        "analysis/normed-spaces"
      ],
      "title": "自然嵌入双对偶是等距线性映射",
      "statement": "定义 J:X→X** 为 (Jx)(F)=F(x)。则 J 线性且 ‖Jx‖=‖x‖，所以单射；此结论本身不保证满射。",
      "dependencies": [
        "norming-functional"
      ],
      "idea": "对偶范数公式恰是求值泛函的算子范数。",
      "steps": [
        "对固定 x，求值映射 Jx 在 X* 上线性，且 |(Jx)(F)|=|F(x)|≤‖F‖‖x‖，故 Jx 是有界线性泛函，属于 X**。逐个 F 代入可验证 J(ax+by)=aJx+bJy。",
        "取单位球上的上确界，‖Jx‖=sup_{‖F‖≤1}|F(x)|=‖x‖，最后等号为已证对偶范数公式。若 Jx=Jy，等距性给 ‖x−y‖=0，所以 x=y。满射性质称反身性，需要单独研究，不能从本证明推得。$\\square$"
      ]
    },
    {
      "id": "cartan-two-form-flow",
      "topics": [
        "geometry/symplectic-forms",
        "geometry/symplectomorphisms"
      ],
      "title": "二形式沿光滑流的导数与 Cartan 恒等式",
      "statement": "设X为光滑向量场，φ_t为其光滑局部流，η为光滑二形式，ι_Xη定义为(ι_Xη)(Y)=η(X,Y)。则 d/dt(φ_t*η)=φ_t*(L_Xη)，且 L_Xη=d(ι_Xη)+ι_X(dη)。这里流及拉回只在它们有定义的开集和时段使用。",
      "dependencies": [
        "def-differential-forms"
      ],
      "idea": "对拉回的坐标表达式求导，然后逐项展开外微分，验证三阶指标抵消。",
      "steps": [
        "在坐标中写η=(1/2)Ση_ij dx^i∧dx^j，η_ij=−η_ji。拉回系数为Σ_(a,b)η_ab(φ_t(x))∂_iφ_t^a∂_jφ_t^b。用∂_tφ_t^a=X^a(φ_t)及链式法则在t=0求导，得到 (L_Xη)_ij=Σ_k[X^k∂_kη_ij+(∂_iX^k)η_kj+(∂_jX^k)η_ik]。",
        "定义α=ι_Xη，坐标为α_j=Σ_k X^kη_kj。于是(dα)_ij=Σ_k[(∂_iX^k)η_kj−(∂_jX^k)η_ki+X^k(∂_iη_kj−∂_jη_ki)]。又(ι_Xdη)_ij=Σ_kX^k(∂_kη_ij+∂_iη_jk+∂_jη_ki)。二式相加，η_jk=−η_kj使两组多余偏导相消，剩余项正是上一段的L_Xη。",
        "对一般时刻t，利用局部流群律φ_(t+h)=φ_h∘φ_t，拉回反序给φ_(t+h)*η=φ_t*(φ_h*η)。对h在0求导，得导数φ_t*(L_Xη)。坐标计算在任意坐标域成立，而两边都是由拉回、外微分和收缩定义的形式，故在交叠坐标域一致，得到流形上的恒等式。$\\square$"
      ]
    },
    {
      "id": "hamiltonian-flow-symplectic",
      "topics": [
        "geometry/symplectomorphisms",
        "geometry/hamiltonian-systems",
        "geometry/symplectic-forms"
      ],
      "title": "Hamilton 局部流保持辛形式和辛体积",
      "statement": "设(M,ω)为光滑辛流形，H为光滑实函数，Hamilton向量场由ι_(X_H)ω=dH定义。其光滑局部流φ_t在有定义时满足φ_t*ω=ω，并保持辛定向体积形式ω^n/n!。不假定流对所有实时间都存在。",
      "dependencies": [
        "cartan-two-form-flow",
        "symplectic-volume-preservation"
      ],
      "idea": "闭性dω=0和二阶外微分d²H=0使辛形式沿流导数为零。",
      "steps": [
        "ω在每点非退化，映射v↦ω(v,·)是切空间到余切空间的可逆线性映射。因此方程定义唯一X_H，局部坐标中它由光滑非奇异矩阵求逆作用于dH而得，故光滑。这里结论对给定的光滑局部流证明，不借此断言任意Hamilton流全局完备。",
        "Cartan二形式恒等式给L_(X_H)ω=d(ι_(X_H)ω)+ι_(X_H)dω=d(dH)+0=0。标量函数的d²H=0可直接由坐标混合偏导相等看出。于是d/dt(φ_t*ω)=φ_t*0=0。每个坐标系数沿时间恒定，在t=0有φ₀=id，所以φ_t*ω=ω。",
        "局部流的逆为φ_(−t)，故在相应定义域间是局部微分同胚。拉回与外积可交换，所以φ_t*(ω^n/n!)=(φ_t*ω)^n/n!=ω^n/n!。这证明辛体积形式守恒；对可积分区域，相应体积守恒还需通常的积分换元公式。",
        "在标准坐标ω=Σdq_j∧dp_j下，ι_Xω=Σ(q̇_j dp_j−ṗ_j dq_j)=dH，恰给q̇_j=∂H/∂p_j、ṗ_j=−∂H/∂q_j，与经典Hamilton方程约定一致。$\\square$"
      ]
    },
    {
      "id": "liouville-jacobian-flow",
      "topics": [
        "geometry/symplectomorphisms",
        "geometry/hamiltonian-systems",
        "applied/classical-mechanics"
      ],
      "title": "标准相空间 Hamilton 流的 Jacobian 体积证明",
      "statement": "在R^(2n)中，C² Hamilton量H的C¹局部流φ_t若对初值可微且导数满足变分方程，则det Dφ_t=1。更一般，C¹向量场F的这种局部流满足 det Dφ_t(x)=exp(∫₀^t divF(φ_s(x))ds)。",
      "dependencies": [
        "linear-ode-existence",
        "ftc-second",
        "flow-initial-c1-variation"
      ],
      "idea": "变分方程与行列式多线性给Jacobi导数公式，Hamilton向量场的散度由混合偏导抵消。",
      "steps": [
        "令J(t)=Dφ_t(x)，变分方程为J′=DF(φ_t(x))J，J(0)=I。局部流逆的链式法则给J可逆。行列式导数可从对列多线性展开得到：det(I+hB)=1+h trB+O(h²)，因为仅替换一列的一阶项恰为相应对角元之和，其余至少含两个h。",
        "用J(t+h)=J(t)+hJ′(t)+o(h)，提取J(t)得 (detJ)′=detJ·tr(J⁻¹J′)。代入变分方程，再用有限矩阵tr(AB)=tr(BA)（坐标交换两次求和即可），得到(detJ)′=tr(DF(φ_t(x)))detJ。乘以exp(−∫₀^t divF(φ_s(x))ds)后导数为零，初值1给所列公式。",
        "对F=(H_p,−H_q)，有divF=Σ_j(∂_(q_j)∂_(p_j)H−∂_(p_j)∂_(q_j)H)=0，因为H为C²。故detJ恒为1。这个坐标证明同时展示体积守恒的原因；一般散度零仅保证体积，不反过来保证保持完整辛二形式。$\\square$"
      ]
    },
    {
      "id": "affine-lebesgue-change",
      "topics": [
        "analysis/measures",
        "analysis/convolution"
      ],
      "title": "Lebesgue 积分的平移与缩放",
      "statement": "a≠0 时，对非负可测 h，有 ∫h(ax+b)dx=|a|⁻¹∫h(u)du；绝对可积时同样成立。",
      "dependencies": [
        "pi-lambda",
        "simple-approximation",
        "monotone-integral",
        "integral-linearity",
        "def-schwartz"
      ],
      "idea": "先对区间长度验证，再用测度唯一性的 π—λ 论证推广到可测集合。",
      "steps": [
        "对区间 E，原像 {x:ax+b∈E} 的长度恰是 |a|⁻¹ times E 的长度。固定有界目标区间 J，比较 E⊆J 的这两个有限测度：一个是原像的长度，另一个是 |a|⁻¹倍长度；它们在所有区间与 J 的交上相同。",
        "这些区间交组成含 J 的 π 系统，生成 J 中 Borel σ 代数。两有限测度相等的集合构成 λ 系统，所以 π—λ 定理使它们在所有 Borel 子集相等。令 J 递增覆盖实线，再用下连续性得所有 Borel 集相等。",
        "完备化中的集合与 Borel 集只差零集子集，仿射原像保持 Borel 零集为零，因此等式也推广到 Lebesgue 可测集。对指标函数、简单函数、单调逼近依次应用，得到积分式；有符号函数拆正负部，复函数拆实虚部。$\\square$"
      ]
    },
    {
      "id": "fourier-schwartz",
      "topics": [
        "analysis/fourier-transform"
      ],
      "title": "Fourier 变换保持 Schwartz 空间",
      "statement": "若 f∈S(R)，则 fhat∈S(R)，并有 (fhat)^(k)=Fourier[(-ix)^k f]，Fourier[f′](ω)=iω fhat(ω)。",
      "dependencies": [
        "def-schwartz",
        "dominated-convergence",
        "ftc-second"
      ],
      "idea": "多项式加权函数仍可积，因而可对频率任意次求导；反复分部积分控制频率尾部。",
      "steps": [
        "Schwartz 条件使任意 x^k f^(j)(x) 绝对可积：在 |x|≥1 时再多用两次衰减阶得到 C/x² 界，有限区间由连续性有界。",
        "对频率差商，用复指数的积分导数表达使其被 |x| 控制；反复控制收敛允许任意次求导，给 (fhat)^(k)(ω)=∫(-ix)^kf(x)exp(-iωx)dx。",
        "对上述积分分部积分 m 次，Schwartz 衰减使每次无穷端边界项为零，得到 ω^m(fhat)^(k) 是某个常数倍的 Fourier[(x^kf)^(m)]，其绝对值≤该函数的 L¹ 范数，有限且不依赖 ω。故所有需要的 Schwartz 半范数有限，同时给出导数变换公式。$\\square$"
      ]
    },
    {
      "id": "fourier-inversion",
      "topics": [
        "analysis/fourier-transform",
        "applied/imaging-reconstruction"
      ],
      "title": "Schwartz 函数的 Fourier 反演定理",
      "statement": "若 f∈S(R)，则 f(x)=(2π)⁻¹∫_R fhat(t)exp(itx)dt，对所有 x 成立。",
      "dependencies": [
        "fourier-schwartz",
        "gaussian-characteristic",
        "tonelli-fubini",
        "dominated-convergence",
        "affine-lebesgue-change"
      ],
      "idea": "先给频率积分乘一个 Gaussian 截断，交换积分后得到空间近似恒等核。",
      "steps": [
        "fhat∈S，所以绝对可积。固定 ε>0，定义 I_ε(x)=(2π)⁻¹∫fhat(t)exp(itx)exp(-ε²t²/2)dt。代入 fhat 的定义，绝对双积分被 ‖f‖₁∫exp(-ε²t²/2)dt 控制，Fubini 可交换。",
        "由 Gaussian Fourier 核公式，I_ε(x)=∫f(y)g_ε(x-y)dy=∫f(x-εz)g(z)dz；最后一步使用平移缩放换元。",
        "f 连续有界，逐点 f(x-εz)→f(x)，由 ‖f‖∞g(z) 控制，故右侧趋于 f(x)。左侧被 |fhat| 控制，可令 ε↓0 得未截断逆积分。两边极限相等，证明反演。$\\square$"
      ]
    },
    {
      "id": "plancherel-schwartz",
      "topics": [
        "analysis/fourier-transform",
        "analysis/hilbert-spaces"
      ],
      "title": "Schwartz 空间的 Parseval—Plancherel 恒等式",
      "statement": "f,g∈S(R) 时，∫fhat(t)overline(ghat(t))dt=2π∫f(x)overline(g(x))dx。特别 ‖fhat‖₂²=2π‖f‖₂²。",
      "dependencies": [
        "fourier-inversion",
        "fourier-schwartz",
        "tonelli-fubini"
      ],
      "idea": "把一个 Fourier 变换展开，交换积分后对另一函数使用反演。",
      "steps": [
        "由 f、ghat 均 L¹，∫∫|f(x)ghat(t)|dxdt=‖f‖₁‖ghat‖₁<∞，所以可以交换下面的复积分。",
        "展开 fhat 后，左侧等于 ∫f(x)[∫exp(-itx)overline(ghat(t))dt]dx。内积分是 g 的反演公式取共轭后的 2πoverline(g(x))，故得到恒等式。取 g=f 即为范数等式。$\\square$"
      ]
    },
    {
      "id": "general-l2-complete",
      "topics": [
        "analysis/hilbert-spaces",
        "analysis/normed-spaces"
      ],
      "title": "任意测度空间的 L² 完备性",
      "statement": "任意测度 μ 上，按几乎处处相等识别的 L²(μ) 在内积 ∫f overline(g)dμ 下完备；适用于实、复函数。",
      "dependencies": [
        "l2-completeness",
        "integral-linearity",
        "monotone-integral",
        "dominated-convergence"
      ],
      "idea": "逐项核对概率空间的证明，所有估计只依赖积分而不依赖总质量为一。",
      "steps": [
        "柯西—施瓦茨证明中的 2|fg|≤|f|²+|g|²、非负平方积分及最优系数计算在任意测度下均成立，复数系数使用共轭即可。积分为零的非负函数在阈值 1/k 的集合上测度为零，故内积按零等价类正定；三角不等式同样由展开平方得到。",
        "对任意 L² 柯西列，照已展开的 L² 完备性证明抽取步长≤2^(-k) 的子列，令 S_N=|f_(n₁)|+Σ_(k≤N)|差值|。L² 三角不等式给统一范数界，单调收敛给 ∫S²<∞，所以 S 有限几乎处处。",
        "子列逐点绝对收敛到 f，且平方差被 4S² 控制；控制收敛给 L² 收敛，原列柯西性再给整列收敛。每一步都已说明其积分依据，未使用 μ(Ω)=1，所以任意测度版本成立；复函数按实虚部处理。$\\square$"
      ]
    },
    {
      "id": "schwartz-density",
      "topics": [
        "analysis/fourier-transform",
        "analysis/hilbert-spaces"
      ],
      "title": "Schwartz 函数在 L²(R) 中稠密",
      "statement": "S(R) 在 Lebesgue L²(R) 中稠密；有限个有界区间指标的线性组合也在该空间稠密。",
      "dependencies": [
        "general-l2-complete",
        "projection-closed-subspace",
        "gaussian-characteristic",
        "tonelli-fubini",
        "pi-lambda",
        "def-schwartz"
      ],
      "idea": "先把区间指标平滑成 Schwartz 函数，再证明与所有区间指标正交的函数只能为零。",
      "steps": [
        "对有限区间 I，令 v_ε=1_I*g_ε。每次对 x 求导都可在有限 y 区间内进行，Gaussian 导数是多项式乘 Gaussian，故 v_ε 光滑且任意阶导数在远处快速衰减，属于 S。",
        "0≤v_ε≤1，在 I 两端之外逐点趋于 1_I：内点时 Gaussian 核落出区间的尾概率趋零，外点同理。对 ε≤1，在足够远处 |x-y|≥|x|/2≥1，ε⁻¹exp(-|x-y|²/(2ε²)) 不超过常数 exp(-x²/8)。因此中央有界区间用常数、尾部用 Gaussian 即给统一平方可积控制，DCT 使 v_ε→1_I 于 L²。",
        "若 h∈L² 与 S 全正交，由上一步及柯西—施瓦茨，它与每个区间指标也正交，即任意有限区间积分为零。固定有界区间 J，h 在其中 L¹。对 Borel E⊆J 令 ν(E)=∫_E h，实虚部分分别为有限符号测度。",
        "ν 在区间交上全为零；ν(J)=0，且零值集合对补及不交可数并封闭（可数可加性由 |h| 控制的收敛给出）。π—λ 定理使 ν 对 J 的全部 Borel 子集为零，完备化把结论推广到 Lebesgue 子集。取实、虚部正负集，得 h=0 几乎处处于 J；可数 J 覆盖实线后仍成立。",
        "令 M 为 S 的 L² 闭包。Hilbert 投影定理使任意函数分解为 M 元素与其正交补，而刚证正交补只有零，所以 M=L²。对区间指标张成空间也用相同正交论证，得到第二个稠密性结论。$\\square$"
      ]
    },
    {
      "id": "plancherel-l2",
      "topics": [
        "analysis/fourier-transform",
        "analysis/hilbert-spaces"
      ],
      "title": "L² Fourier 变换的 Plancherel 定理",
      "statement": "在 S 上定义的 U f=(2π)⁻¹/²fhat，唯一延拓为 L²(R) 到自身的酉算子。",
      "dependencies": [
        "plancherel-schwartz",
        "schwartz-density",
        "general-l2-complete",
        "fourier-inversion",
        "fourier-schwartz"
      ],
      "idea": "密集子空间上的等距映射可由柯西列唯一延拓；反演使像也包含同一密集子空间。",
      "steps": [
        "给 f∈L²，选 f_n∈S 且 f_n→f。Schwartz Plancherel 使 ‖Uf_n-Uf_m‖₂=‖f_n-f_m‖₂，所以像列柯西，L² 完备给极限。两种逼近的差范数趋零，故定义与逼近无关，给唯一连续延拓 U。",
        "取极限保留线性、内积和范数。等距映射的像闭：若 Uf_n 在像中收敛，f_n 也柯西，极限 f 存在且像为 Uf。",
        "Schwartz Fourier 保持 S，反演说明每个 Schwartz 函数都来自某个 Schwartz 函数：具体逆为同样常数乘反射 Fourier。故像含稠密 S；既闭又稠密，只能为全部 L²。因此 U 满射且等距，即为酉算子。$\\square$"
      ]
    },
    {
      "id": "convolution-l1",
      "topics": [
        "analysis/convolution",
        "applied/imaging-reconstruction"
      ],
      "title": "L¹ 卷积及卷积定理",
      "statement": "f,g∈L¹(R) 时，(f*g)(x)=∫f(y)g(x-y)dy 几乎处处绝对存在，‖f*g‖₁≤‖f‖₁‖g‖₁，且 Fourier(f*g)=fhat·ghat。",
      "dependencies": [
        "tonelli-fubini",
        "affine-lebesgue-change"
      ],
      "idea": "绝对值双积分恰好分成两个范数，因此交换次序合法。",
      "steps": [
        "非负 Tonelli 与平移换元给 ∫∫|f(y)g(x-y)|dydx=∫|f(y)|[∫|g(x-y)|dx]dy=‖f‖₁‖g‖₁。有限性保证几乎每个 x 的内积分有限，并给卷积的 L¹ 界。",
        "在 Fourier 积分中展开卷积，绝对值仍被同一双积分控制，故 Fubini 合法。对固定 y 作 u=x-y，得到 exp(-itx)=exp(-ity)exp(-itu)，内积分为 exp(-ity)ghat(t)，外积分成为 fhat(t)ghat(t)。$\\square$"
      ]
    },
    {
      "id": "young-l1-l2",
      "topics": [
        "analysis/convolution",
        "analysis/linear-operators"
      ],
      "title": "Young 的 L¹—L² 卷积界",
      "statement": "若 f∈L¹(R)、g∈L²(R)，则 f*g∈L² 且 ‖f*g‖₂≤‖f‖₁‖g‖₂。",
      "dependencies": [
        "general-l2-complete",
        "tonelli-fubini",
        "affine-lebesgue-change"
      ],
      "idea": "对有限权重 |f(y)|dy 用柯西—施瓦茨，再积分消去平移。",
      "steps": [
        "‖f‖₁=0 时结论直接成立。否则对几乎每个 x，权重 Cauchy—Schwarz 给 |∫f(y)g(x-y)dy|²≤‖f‖₁∫|f(y)||g(x-y)|²dy。非负 Fubini 保证右侧几乎处处有限，因此左侧绝对积分也有定义。",
        "再对 x 积分并用平移不变性，右侧总积分为 ‖f‖₁∫|f(y)|‖g‖₂²dy=‖f‖₁²‖g‖₂²。开平方得到范数界。$\\square$"
      ]
    },
    {
      "id": "haar-basis",
      "topics": [
        "analysis/wavelets",
        "analysis/hilbert-spaces"
      ],
      "title": "Haar 小波的 L² 正交完备性",
      "statement": "ψ_jk=2^(j/2)(1_[k2^(-j),(k+1/2)2^(-j))-1_[(k+1/2)2^(-j),(k+1)2^(-j)))，j,k∈Z，是 L²(R) 的标准正交基。",
      "dependencies": [
        "schwartz-density",
        "general-l2-complete"
      ],
      "idea": "不同尺度的小波由零均值正交；把任意 dyadic 区间指标分解成祖先上的小波和趋零残差。",
      "steps": [
        "每个小波支持长度 2^(-j)，两半符号相反，积分零，平方积分一。同尺度不同 k 支持不交；不同尺度时，细区间若与粗区间相交，就包含于粗小波的某一常值半区，内积为常数乘细小波积分零。故标准正交。",
        "对 dyadic 区间 I，记 φ_I=1_I/√|I|。若 J 为其父区间，按 I 为左半或右半，有 φ_I=(φ_J±ψ_J)/√2。重复 M 层，得到 φ_I 为有限 Haar 线性组合加上 2^(-M/2)φ_(祖先)，后项 L² 范数趋零。",
        "任意有界区间可用有限个同层 dyadic 区间的并逼近，端点处对称差长度至多 2·2^(-j)，所以指标的 L² 误差趋零。区间指标张成空间已证稠密，因此 Haar 张成空间稠密，完成正交基证明。$\\square$"
      ]
    },
    {
      "id": "stft-moyal",
      "topics": [
        "analysis/time-frequency",
        "analysis/wavelets"
      ],
      "title": "短时 Fourier 变换的 Moyal 能量恒等式",
      "statement": "对 f,g∈S(R)，定义 V_gf(t,ω)=∫f(x)overline(g(x-t))exp(-iωx)dx，则 (2π)⁻¹∫∫|V_gf(t,ω)|²dωdt=‖f‖₂²‖g‖₂²。",
      "dependencies": [
        "plancherel-schwartz",
        "tonelli-fubini",
        "affine-lebesgue-change"
      ],
      "idea": "每个时间窗内对局部信号用 Plancherel，再把全部平移窗的能量相加。",
      "steps": [
        "固定 t，h_t(x)=f(x)overline(g(x-t)) 仍为 Schwartz 函数。其 Fourier 变换正是 V_gf(t,ω)。Plancherel 给 (2π)⁻¹∫|V_gf(t,ω)|²dω=∫|f(x)|²|g(x-t)|²dx。",
        "对 t 积分，所有项非负，Tonelli 可以交换。平移换元给内积分 ∫|g(x-t)|²dt=‖g‖₂²，与 x 无关，所以总值为两范数平方之积。若窗范数为一，STFT 保持该归一化的总能量。$\\square$"
      ]
    },
    {
      "id": "heisenberg-uncertainty",
      "topics": [
        "analysis/time-frequency",
        "analysis/fourier-transform"
      ],
      "title": "Heisenberg 不确定性不等式",
      "statement": "对非零 Schwartz 函数 f，‖xf‖₂‖ωfhat‖₂≥√(2π)‖f‖₂²/2。归一化并去掉位置与频率均值后，两个标准差乘积至少 1/2。",
      "dependencies": [
        "plancherel-schwartz",
        "fourier-schwartz",
        "general-l2-complete",
        "affine-lebesgue-change"
      ],
      "idea": "分部积分将位置与导数的乘积固定为范数，再用 Cauchy—Schwarz。",
      "steps": [
        "快速衰减使无穷端 x|f(x)|² 为零。对其导数积分，得 ∫|f|²=-2Re∫x f′ overline(f)。所以 ‖f‖₂²≤2‖xf‖₂‖f′‖₂。",
        "由 Fourier 导数公式及 Plancherel，‖f′‖₂=‖ωfhat‖₂/√(2π)，代入得到不等式。",
        "平移 f 改变位置均值而不改变位置方差；乘 exp(iω₀x) 使 Fourier 变量平移，改变频率均值而不改变频率方差。这两公式由定义及仿射换元直接得到。对中心化后的函数用前式，并按空间密度 |f|²/‖f‖₂² 与频率密度 |fhat|²/(2π‖f‖₂²) 计算标准差，即得乘积至少 1/2。$\\square$"
      ]
    },
    {
      "id": "absolute-height-rational",
      "topics": [
        "numbertheory/heights"
      ],
      "title": "绝对乘法高度的共轭定义及有理数情形",
      "statement": "对次数d的代数数α，取其唯一首项系数a_d>0的本原不可约整数多项式 f(T)=a_d∏_(j=1)^d(T−α_j)。定义 H(α)=[a_d∏_j max(1,|α_j|)]^(1/d)，h=log H。该值不依赖共轭根排列；对既约p/q且q>0，有H(p/q)=max(|p|,q)。",
      "dependencies": [
        "minimal-polynomial",
        "unique-factorization",
        "fundamental-algebra",
        "characteristic-zero-separable"
      ],
      "idea": "固定本原整数最小多项式，消除整体倍数歧义，所有共轭根对称进入定义。",
      "steps": [
        "有理系数首一最小多项式唯一。将其系数乘公共分母得整数多项式，再除以全部系数的最大公因子，并使首项正，得到f。若另一个本原正首项整数多项式与它相差有理倍数u/v（互素且v>0），整数系数迫使v整除f的每个系数，故v=1；对反向倍数重复，得u=1。所以该规范形式唯一。",
        "代数基本定理给全部复根，特征零可分性保证d个根无重；即使按重数计，乘积也不受排列影响。正整数a_d≥1且各max因子≥1，所以H≥1且h≥0。这里采用共轭乘积直接定义绝对高度，不把未展开的赋值乘积公式当作证明。",
        "对既约p/q，q>0，其本原整数最小多项式是qT−p，d=1。因此H=q max(1,|p/q|)=max(q,|p|)，恰与有理数高度定义一致。$\\square$"
      ]
    },
    {
      "id": "northcott-algebraic-numbers",
      "topics": [
        "numbertheory/heights",
        "numbertheory/transcendental-numbers"
      ],
      "title": "Northcott 有界次数与有界高度有限性定理",
      "statement": "给定整数D≥1及实数B，次数[Q(α):Q]≤D且绝对乘法高度H(α)≤B的代数数α只有有限多个。等价地，可将高度条件改为对数高度h(α)≤C。",
      "dependencies": [
        "absolute-height-rational",
        "root-bound",
        "binomial-count"
      ],
      "idea": "高度同时约束最小多项式首项和所有根的大小，初等对称式于是把全部整数系数限制在有限范围。",
      "steps": [
        "B<1时因H≥1而无元素，以下B≥1。设α次数d≤D，规范最小多项式f=a_dT^d+⋯+a_0，M=a_d∏max(1,|α_j|)=H(α)^d≤B^d。系数a_(d−k)是a_d乘k个共轭根乘积的交错和。",
        "每个根子集乘积的绝对值至多∏max(1,|α_j|)，所以 |a_(d−k)|≤binom(d,k)M≤2^D B^D，对k=0,…,d均成立。所有系数为整数，在固定有界区间仅有有限选择；次数也只有D种，故可能的最小多项式有限。",
        "每个非零次数至多D的多项式至多D个根，因此这些多项式全部根的并集有限，所求集合是其子集。对数高度条件h≤C等价H≤e^C，代入即得同样结论。无需先证明数域类群有限性或Mordell–Weil定理。$\\square$"
      ]
    },
    {
      "id": "liouville-algebraic-approximation",
      "topics": [
        "numbertheory/diophantine-approximation",
        "numbertheory/transcendental-numbers"
      ],
      "title": "Liouville 代数数有理逼近下界",
      "statement": "若实代数无理数α的次数为d≥2，则存在c(α)>0，使任意整数p及正整数q都有 |α−p/q|≥c(α)/q^d。特别地，若某无理数对任意m都有无穷多个不同有理数p/q满足0<|α−p/q|<q^(−m)，它必超越。",
      "dependencies": [
        "minimal-polynomial",
        "ftc-second",
        "finite-dimensional-compactness"
      ],
      "idea": "整数最小多项式在p/q处的非零值至少q^(−d)，再用导数界将函数值转成自变量距离。",
      "steps": [
        "取α的不可约整数最小多项式f，次数d≥2。对任意有理p/q，f(p/q)≠0，否则不可约多项式有一次因子，矛盾。又q^d f(p/q)为非零整数，故|f(p/q)|≥q^(−d)。",
        "在紧区间[α−1,α+1]上，多项式导数连续，取C=max(1,sup|f′|)<∞。若|α−p/q|≤1，积分基本定理给 |f(p/q)−f(α)|≤C|p/q−α|，所以距离≥1/(Cq^d)。若距离>1，因为q≥1、C≥1，仍有距离≥1/(Cq^d)。取c=1/C完成下界。",
        "若无理α具有题设任意阶逼近性质却为代数，取m=d+1。不同的近似分数中分母必无界：在距离α小于1的有界区间内，分母有固定上界时分子也有界，只能有有限个有理数。于是可选q>1/c，使q^(−d−1)<cq^(−d)，与下界矛盾。因此α超越。此初等下界指数为d，不把它称为更强的Roth指数2定理。$\\square$"
      ]
    },
    {
      "id": "compact-interval-quantile",
      "topics": [
        "probability/distributions",
        "analysis/measures"
      ],
      "title": "紧区间概率测度的分位数实现",
      "statement": "任意[a,b]上的Borel概率测度μ可写成(0,1)上Lebesgue概率测度经非减可测函数q:(0,1)→[a,b]的推前。具体q(u)=inf{x∈[a,b]:μ([a,x])≥u}。",
      "dependencies": [
        "measure-continuity-above",
        "lotus",
        "pi-lambda"
      ],
      "idea": "分布函数的右连续性保证分位数下确界确实达到，从而比较分位数与阈值可直接恢复分布。",
      "steps": [
        "写F(x)=μ([a,x])，并在x<a时设F=0、x≥b时设F=1。F非减；若x_n递减至x，集合[a,x_n]递减至[a,x]，测度上连续性给F右连续。对0<u<1，定义q的集合非空且下界在[a,b]，其下确界q存在。选集合内点x_n使q≤x_n<q+1/n，右连续性及单调性给F(q)≥u。",
        "因此对任意x∈[a,b]，q(u)≤x当且仅当u≤F(x)：正向由F(q)≥u及单调性，反向由x本身属于下确界定义集合。于是{u:q(u)≤x}=(0,F(x)]∩(0,1)，它可测且长度F(x)。q亦非减，因为u增大使定义集合缩小，故q可测。",
        "q的推前测度与μ在所有[a,x]上一致。这些区间连同全集构成生成Borel集合的π系统，有限测度的π—λ唯一性使二者在全部Borel集合一致；可直接把一致集合类验证为λ系统后应用π—λ定理。$\\square$"
      ]
    },
    {
      "id": "compact-interval-measure-subsequence",
      "topics": [
        "analysis/measures",
        "probability/distributions"
      ],
      "title": "紧区间概率测度的弱序列紧性",
      "statement": "任意固定紧区间[a,b]上的概率测度序列μ_n，都有子列μ_(n_j)及区间上的概率测度μ，使每个连续g满足∫g dμ_(n_j)→∫g dμ。",
      "dependencies": [
        "compact-interval-quantile",
        "bolzano-weierstrass",
        "dominated-convergence",
        "pi-lambda"
      ],
      "idea": "对非减分位数在有理点对角抽取，再由单调性夹逼得到几乎处处收敛。",
      "steps": [
        "用上一命题取非减分位数q_n:(0,1)→[a,b]。枚举(0,1)有理数r₁,r₂,…，逐次用有界实序列的Bolzano–Weierstrass抽子列，使第k次子列在r_k收敛；取对角子列后在每个有理r都收敛，记极限l(r)。由q_n单调，l在有理点非减。",
        "定义q(u)=sup{l(r):r为有理且0<r<u}。它在[a,b]且非减可测。对有理r<u<s有 l(r)≤liminf q_(n_j)(u)≤limsup q_(n_j)(u)≤l(s)。在q的每个连续点u，左侧上确界为q(u)，右侧下确界也为q(u)：后者至少q(u)，而取u<s<t时l(s)≤q(t)，再令t从右趋u即得反向界。所以子列在q的连续点收敛于q(u)。",
        "非减函数至多有可数个不连续点：每个内部跳跃对应非空区间(q(u−),q(u+))，不同跳点的这些区间不交，每个选一个有理数便得可数性；左右极限存在且不连续必有正跳跃，由单调上、下确界直接得到。故上述分位数收敛几乎处处。",
        "定义μ为Lebesgue概率经q的推前，推前可数可加性由逆像保持不交并得到。连续g在[a,b]有界，g(q_(n_j))→g(q)几乎处处，以常数sup|g|支配。支配收敛及推前换元给∫g dμ_(n_j)=∫₀¹g(q_(n_j)(u))du→∫₀¹g(q(u))du=∫g dμ。$\\square$"
      ]
    },
    {
      "id": "stationary-herglotz-measure",
      "topics": [
        "probability/stationary-processes",
        "analysis/fourier-series"
      ],
      "title": "离散宽平稳过程的谱测度存在唯一性",
      "statement": "每个实二阶宽平稳离散时间过程的协方差γ，都唯一对应单位圆上的有限非负Borel测度ν，使γ(k)=∫_(|z|=1)z^k dν(z)，k∈Z。总质量为γ(0)，允许点质量；协方差绝对可和时，ν为λ↦e^(iλ)推前的f(λ)dλ，其中f为已证的Wiener–Khinchin密度。",
      "dependencies": [
        "stationary-covariance-positive",
        "compact-interval-measure-subsequence",
        "fejer-uniform-convergence",
        "pi-lambda",
        "dominated-convergence",
        "wiener-khinchin-summable"
      ],
      "idea": "以非负有限样本周期图构造定质量测度，抽取弱极限恢复全部矩，再用三角多项式稠密性证明唯一。",
      "steps": [
        "若γ(0)=0，协方差界给γ(k)=0，零测度满足要求；任何非负表示测度的总质量由k=0决定为零，故唯一。以下设c=γ(0)>0。前面已证非负连续周期函数 f_N(λ)=(2π)⁻¹Σ_(|h|<N)(1−|h|/N)γ(h)e^(−ihλ)，且∫_(−π)^πf_N=c。于是μ_N在该紧区间上取概率密度f_N/c。",
        "紧区间测度弱序列紧性给子列及概率极限μ。对每个整数k，e^(ikλ)连续，实、虚部分别使用弱收敛。有限Fourier和直接积分给∫e^(ikλ)c dμ_N=(1−|k|/N)γ(k)（N>|k|）。故极限为γ(k)。定义ν为cμ在连续映射λ↦e^(iλ)下的推前，即得所需矩与总质量。端点−π和π推到同一点，避免把同一个圆周点的质量人为分裂。",
        "若ν₁、ν₂均表示γ，它们对所有三角多项式积分一致。任意单位圆连续函数g可视为λ的连续2π周期函数，Fejér定理给一致逼近它的三角多项式。有限且相同总质量保证积分误差不超过质量乘一致误差，所以两测度对全部连续g积分一致。",
        "对圆上闭集F，取g_n(z)=max(0,1−n dist(z,F))，F为空时直接取0。距离函数连续，因为|dist(z,F)−dist(w,F)|≤|z−w|。这些连续函数逐点趋于1_F并被1支配，故支配收敛给ν₁(F)=ν₂(F)。闭集构成含全集、交封闭且生成Borel集合的π系统，π—λ唯一性给两测度在所有Borel集合相等。",
        "协方差绝对可和时，已证非负连续f及反演公式，所以f(λ)dλ的圆周推前也表示全部γ(k)；唯一性使其正是ν。这同时说明密度定理是一般谱测度定理的特例，不能把非绝对可和情形未经论证地写成普通函数密度。$\\square$"
      ]
    },
    {
      "id": "deterministic-bellman-principle",
      "topics": [
        "applied/optimal-control"
      ],
      "title": "确定性有限时域的动态规划原理",
      "statement": "设每个起点(t,x)有非空可行控制集，控制产生唯一轨迹，代价为 ∫_t^T l(s,x(s),u(s))ds+g(x(T))，值函数V为其下确界且处处有限。假定控制可在任意中间时刻限制和拼接，限制后的轨迹可行，拼接轨迹遵守唯一性。则任意t≤s≤T有 V(t,x)=inf_u{∫_t^s l(r,x_u(r),u(r))dr+V(s,x_u(s))}，右端只对可行前段取下确界。",
      "dependencies": [
        "axiom-real"
      ],
      "idea": "任意全程控制的尾段不优于尾段最优值；反向为选定前段接上一个近似最优尾段。",
      "steps": [
        "记右端为B。任意全程控制u在s之后的尾段，是从(s,x_u(s))出发的可行控制，故其尾代价至少V(s,x_u(s))。因此全代价至少对应的前段表达式，再至少B。对全程控制取下确界得V(t,x)≥B。",
        "反向对任意可行前段v和ε>0，由尾段值有限且可行集非空，可选尾段代价小于V(s,x_v(s))+ε。拼接假设保证得到全程可行控制，故V(t,x)≤∫_t^s l+V(s,x_v(s))+ε。令ε趋零，再对v取下确界得V(t,x)≤B。这个论证也排除B=−∞，因为否则可拼接出任意低于有限V(t,x)的代价，矛盾。",
        "不需要假定最优控制取得：只使用下确界定义给出的ε最优尾段。对单个确定前段只选一个尾段，亦无需构造关于所有状态的可测最优选择。$\\square$"
      ]
    },
    {
      "id": "classical-hjb-verification",
      "topics": [
        "applied/optimal-control"
      ],
      "title": "经典 HJB 方程的验证定理",
      "statement": "考虑 x′=f(t,x,u) 与代价 J=∫_t^T l(s,x,u)ds+g(x(T))。可行控制分段连续，轨迹分段C¹且在全时段存在。设W∈C¹([0,T]×R^n)满足 W(T,x)=g(x) 和 W_t+inf_(u∈U){l+∇W·f}=0。则 W(t,x)≤J 对全部可行控制成立。若有一条可行控制沿轨迹逐点（分段断点除外）取得该下确界，则其最优，W(t,x)=V(t,x)。",
      "dependencies": [
        "ftc-second"
      ],
      "idea": "沿任意可行轨迹对候选值函数求导，HJB 给下界；取得最小 Hamiltonian 的轨迹使不等式处处成为等式。",
      "steps": [
        "任取可行u。HJB 的下确界条件给 W_t(s,x)+∇W(s,x)·f(s,x,u)+l(s,x,u)≥0。在每个连续控制段内，链式法则给 dW(s,x(s))/ds=W_t+∇W·f。逐段积分，因W沿连续轨迹连续，内部端点项相消，得到 W(T,x(T))−W(t,x)≥−∫_t^T l。",
        "代入终端条件并移项即W(t,x)≤J。对全部控制取下确界得W≤V。如果给定控制u*沿轨迹取得下确界，上述微分不等式为等式，积分得J(u*)=W。因此W≤V≤J(u*)=W，证明最优性及值相等。",
        "这里显式要求候选解光滑、终端条件成立，并且最小化控制的闭环轨迹确实存在且可行。仅写出一个HJB方程，或者形式上选出极小化器，不能代替这些条件。若没有取得下确界的可行轨迹，本定理仍给下界，但不单独声称W就是值函数。$\\square$"
      ]
    },
    {
      "id": "finite-horizon-lqr-verification",
      "topics": [
        "applied/optimal-control",
        "applied/state-space"
      ],
      "title": "有限时域 LQR 的 Riccati 验证与平方配方",
      "statement": "设连续矩阵A(t),B(t),Q(t),R(t)定义于[0,T]，Q对称半正定、R对称正定，终端S对称半正定。假定已有C¹对称解 P′+AᵀP+PA−PBR⁻¹BᵀP+Q=0，P(T)=S。对x′=Ax+Bu、J=x(T)ᵀSx(T)+∫(xᵀQx+uᵀRu)，最优控制为u*=−R⁻¹BᵀPx，最小值x(t)ᵀP(t)x(t)。此结论本身不主张Riccati解存在。",
      "dependencies": [
        "classical-hjb-verification",
        "linear-ode-existence"
      ],
      "idea": "微分二次型，再配方成正定平方；闭环线性方程保证候选控制可行。",
      "steps": [
        "R在每个时刻可逆，逆矩阵由伴随矩阵除以非零行列式给出连续函数。令K=R⁻¹BᵀP。沿任意可行轨迹，计算 d(xᵀPx)/ds=xᵀ(P′+AᵀP+PA)x+2xᵀPBu。代入Riccati方程得该导数等于−xᵀQx+xᵀPBR⁻¹BᵀPx+2xᵀPBu。",
        "加上运行代价后右侧恰为(u+Kx)ᵀR(u+Kx)。积分并用终端条件，得到 J=x(t)ᵀP(t)x(t)+∫_t^T(u+Kx)ᵀR(u+Kx)ds≥x(t)ᵀP(t)x(t)。",
        "闭环x′=(A−BK)x为连续系数线性系统，在紧时间段存在唯一解；u*=−Kx连续，故可行。对它平方项恒为零，达到上述下界，证明所列最优控制与值。非负代价还表明任意起点二次型xᵀP(t)x≥0，因而P半正定。若其他分段连续控制同样最优，连续段上的正定平方积分为零，故在每段内部u=−Kx，唯一性迫使相同轨迹；控制在有限断点处的任意赋值不影响积分或轨迹。$\\square$"
      ]
    },
    {
      "id": "linear-ode-existence",
      "topics": [
        "analysis/odes",
        "applied/state-space"
      ],
      "title": "连续系数线性方程在紧时间段的存在唯一性",
      "statement": "设A:[a,b]→R^(n×n)、h:[a,b]→R^n连续。任意t₀∈[a,b]及初值x₀，方程x′=A(t)x+h(t)、x(t₀)=x₀在[a,b]有唯一C¹解。",
      "dependencies": [
        "banach-contraction",
        "continuous-functions-complete",
        "ftc-first",
        "finite-dimensional-compactness"
      ],
      "idea": "在统一短时间片上积分算子是整个连续函数空间的压缩，逐片延拓到两侧端点。",
      "steps": [
        "连续性与紧致性给M=sup‖A(t)‖<∞。取δ>0使Mδ<1，M=0时任取δ。在长度不超过δ、左端为c的区间I上，给定x(c)=z，定义(Ty)(t)=z+∫_c^t[A(s)y(s)+h(s)]ds。它将C(I,R^n)映入自身；该空间以最大范数完备，因为逐坐标一致柯西列有连续一致极限。",
        "积分三角不等式给‖Ty−Tw‖∞≤Mδ‖y−w‖∞，压缩定理给唯一连续固定点。积分基本定理使该固定点C¹且满足方程；任意C¹解积分后都是同一固定点，所以局部唯一。积分自右端初值往左的区间，用同一公式把c取右端，绝对长度估计不变，结论同样成立。",
        "从t₀起，向右、向左各取有限个长度至多δ的片段，以上一段的终值作为下一段初值。在连接点，两侧导数均等于连续函数A(t)x(t)+h(t)，所以拼接为全段C¹解。任意两个全段解在首片由唯一性相等，再依次在所有片相等，完成全局唯一性。$\\square$"
      ]
    },
    {
      "id": "finite-horizon-riccati-existence",
      "topics": [
        "applied/optimal-control",
        "applied/state-space"
      ],
      "title": "半正定有限时域 Riccati 方程的全程存在唯一性",
      "statement": "连续矩阵A,B,Q,R定义于[0,T]，Q对称半正定，R对称正定，S对称半正定。则 P′+AᵀP+PA−PBR⁻¹BᵀP+Q=0、P(T)=S 有唯一全段C¹解，该解对称半正定。",
      "dependencies": [
        "linear-ode-existence",
        "hermitian-spectral"
      ],
      "idea": "将非线性方程提升为两倍维度的线性系统，能量恒等式保证图坐标X永不奇异。",
      "steps": [
        "记C=BR⁻¹Bᵀ，它连续对称半正定。解矩阵终值系统 X′=AX−CY，Y′=−QX−AᵀY，X(T)=I、Y(T)=S。逐列应用连续系数线性方程存在唯一性，得全段C¹矩阵X,Y。直接微分得 (XᵀY)′=−YᵀCY−XᵀQX，为对称矩阵，所以XᵀY−YᵀX常值；终值为零，因此恒为零。",
        "证明每个X(t)可逆。若X(t)v=0，令x(s)=X(s)v、y(s)=Y(s)v，则 (xᵀy)′=−xᵀQx−yᵀCy。积分至T得 0=vᵀSv+∫_t^T[xᵀQx+(Bᵀy)ᵀR⁻¹(Bᵀy)]ds。所有项非负且被积函数连续，故每个时刻Bᵀy=0。于是Cy=0且x′=Ax，由x(t)=0及线性方程唯一性得x恒零，从而v=x(T)=0。核只有零，X可逆。此论证在t=T也由X(T)=I直接成立。",
        "定义P=YX⁻¹。逆矩阵由伴随矩阵公式给C¹性，微分XX⁻¹=I得 (X⁻¹)′=−X⁻¹X′X⁻¹。故P′=−Q−AᵀP−PA+PCP，终值S。由XᵀY=YᵀX左右乘X^(−ᵀ)、X⁻¹，得P=Pᵀ。对任意z及t取v=X(t)⁻¹z，上述能量积分恒等式给 zᵀP(t)z=vᵀSv+∫_t^T[xᵀQx+yᵀCy]ds≥0，所以P半正定。",
        "若P₁,P₂为任意两全段解，D=P₁−P₂满足 D′=(−Aᵀ+P₁C)D+D(−A+CP₂)，D(T)=0。这是n²个矩阵坐标上的连续系数齐次线性方程；唯一性给D恒零。这里即使比较解尚未假定对称也成立。$\\square$"
      ]
    },
    {
      "id": "finite-horizon-lqr-complete",
      "topics": [
        "applied/optimal-control",
        "applied/state-space"
      ],
      "title": "连续系数有限时域 LQR 的完整求解定理",
      "statement": "对连续A,B、连续对称Q≥0、R>0和终端S≥0，有限时域无状态约束LQR在分段连续控制类中有最优控制 u*=−R⁻¹BᵀPx，其中P为终值S的Riccati方程唯一解；值函数为xᵀPx，最优控制除有限分段断点的赋值外唯一。",
      "dependencies": [
        "finite-horizon-riccati-existence",
        "finite-horizon-lqr-verification"
      ],
      "idea": "先证明Riccati全程解存在，再应用平方配方的验证定理，因此不再悬置解的存在条件。",
      "steps": [
        "Riccati存在唯一定理在所列正定和半正定条件下给唯一C¹对称半正定P，覆盖整个闭时间段。平方配方验证定理于是适用，闭环连续线性系统给可行控制并达到值xᵀPx。",
        "若另一个分段连续控制达到同样值，平方配方恒等式中的非负积分为零。在每个连续段内部，正定R及连续性迫使u+R⁻¹BᵀPx=0，故其轨迹解同一闭环方程；线性方程唯一性使轨迹相同。因此控制在各连续段内部相同，有限断点的值不改变轨迹或代价。这个定理没有加入硬终端状态或路径约束，因而不能直接替代火箭着陆等有额外约束问题的最优性证明。$\\square$"
      ]
    },
    {
      "id": "singular-path-chain-relations",
      "topics": [
        "geometry/homology-groups-topology",
        "geometry/homotopy"
      ],
      "title": "奇异路径的连接与同伦链关系",
      "statement": "模奇异二边界B₁=im∂₂，相接路径α,β满足α*β≡α+β，常值路径≡0，反向路径α^rev≡−α。端点固定同伦的路径亦模B₁相等。因此基点环路给同态π₁(X,o)→H₁(X;Z)，并经Abel化因子化。",
      "dependencies": [
        "def-singular-low"
      ],
      "idea": "用一个沿路径退化的三角形实现连接关系，用同伦方形的两块三角形实现同伦关系。",
      "steps": [
        "令γ=α*β，参数前半走α、后半走β。对三角形重心坐标(u₀,u₁,u₂)，定义σ=γ(u₁/2+u₂)。其01边为α、12边为β、02边为γ，所以∂σ=β−γ+α，得到γ≡α+β。常值二单形的边界为同点常值1单形减自身再加自身，故常值路径是边界。",
        "若H:[0,1]²→X是α到β的端点固定同伦，记方形左下、右下、右上、左上顶点为A,B,C,D。取顶点顺序为(A,B,C)的单形减去顺序为(A,D,C)的单形，再复合H；其边界为AB−DC+BC−AD，对角AC精确相消。AB为α、DC为β，两条竖边是常值路径。常值侧边各已是边界，因此β−α亦为边界。",
        "路径α接反向路径可端点固定收缩：写γ(t)=α(ρ(t))，ρ(t)=2t（t≤1/2）、2−2t（t≥1/2）；H(t,s)=α((1−s)ρ(t))给从往返到起点常值的同伦。结合连接关系得α+α^rev≡0。",
        "环路边界为零，同伦不改变其同调类，连接对应相加，所以得到群同态。目标H₁为Abel群，任意交换子都映为零，故该同态经π₁的Abel化因子化。$\\square$"
      ]
    },
    {
      "id": "first-hurewicz-isomorphism",
      "topics": [
        "geometry/homology-groups-topology",
        "geometry/fundamental-group"
      ],
      "title": "一阶 Hurewicz 定理的显式逆映射",
      "statement": "若X路径连通、o∈X，则环路作为奇异1循环给自然同构 π₁(X,o)的Abel化≅H₁(X;Z)。不要求局部单连通或流形结构。",
      "dependencies": [
        "singular-path-chain-relations"
      ],
      "idea": "给每条奇异边两端接回基点，构造Abel化环路；循环条件消去所有辅助连接路径。",
      "steps": [
        "设z=Σ_e n_e e为有限奇异1循环。对出现的每个顶点v选路径c_v:o→v，若v=o取常值。令L_e=c_(起点)*e*c_(终点)^rev，定义Ψ(z)=Σ_e n_e[L_e]于π₁(X,o)的Abel化。选择仅涉及有限顶点，不需对全空间一次选择路径。",
        "该值不依赖c_v。若换成c′_v，令D_v=[c′_v*c_v^rev]为基点环路类。通过插入可收缩的往返路径可得新[L_e]减旧[L_e]=D_(起点)−D_(终点)，在Abel化中成立。总变化为Σ n_e(D_起−D_终)=0，因为∂z=Σ n_e(终点−起点)=0逐顶点抵消。对两个循环选同一有限顶点并集的连接路径，亦可直接看出Ψ可加。",
        "对任意奇异二单形σ，记顶点v₀,v₁,v₂及有向边e₀₁,e₁₂,e₀₂。三角形内直边与折线路径端点固定同伦：在凸三角形内对它们逐参数作直线插值，再复合σ即可。因此e₀₁*e₁₂与e₀₂同伦。加上连接路径并消去c_v^rev*c_v，得基点环路L₀₁*L₁₂与L₀₂同伦。Abel化后[L₁₂]−[L₀₂]+[L₀₁]=0，即Ψ(∂σ)=0。故Ψ经同调商下降为H₁→π₁^ab。",
        "记环路到同调的同态为h。对基点环路ℓ，连接路径可取常值，所以Ψ(h([ℓ]))=[ℓ]，得到Ψh为恒等。反向由路径链关系，hΨ([z])由循环Σ n_e(c_起+e−c_终)代表。循环条件使所有c_v项逐顶点相消，剩下原z。因此hΨ亦为恒等，证明双射。",
        "连续保基点映射把环路、同伦及奇异链分别复合到目标空间，并与边界交换；h由同一环路视为1单形定义，故与这些诱导映射交换，得到自然性。$\\square$"
      ]
    },
    {
      "id": "singular-hzero-path-components",
      "topics": [
        "geometry/homology-groups-topology",
        "geometry/connectedness"
      ],
      "title": "零阶奇异同调计算路径分支",
      "statement": "任意拓扑空间X的H₀(X;Z)自然同构于其路径连通分支集合上的自由Abel群。特别地非空路径连通空间H₀≅Z；此处不能仅把路径连通替换为连通。",
      "dependencies": [
        "def-singular-low"
      ],
      "idea": "路径边界使同一路径分支中的点相等，而每个分支内总系数为零的有限0链都能用路径填成边界。",
      "steps": [
        "将自由0链Σ n_x x映为各路径分支上的总系数。这是到分支自由Abel群的满同态：每个有限支撑目标可在涉及的有限个非空分支各选一个点。任何路径的起终点在同一分支，故其边界映为零。",
        "反向若0链在每个分支系数和为零，对其涉及的每个分支选参考点v，并对各出现点x选路径v→x。则∂路径=x−v，故Σ n_x x=Σ n_x(x−v)为1链边界，因为每分支的v系数总和零。核因此恰为边界群，商同构成立。路径分支在连续映射下映入路径分支，构造与连续映射相容，故自然。$\\square$"
      ]
    },
    {
      "id": "integral-domain-field-test",
      "topics": [
        "algebra/dimension-theory",
        "algebra/field-extensions"
      ],
      "title": "整域整扩张中的域判据",
      "statement": "若整域 R⊆S 且 S 对 R 整，则 R 是域当且仅当 S 是域。整性在取商和同时局部化后保持。",
      "dependencies": [
        "def-integral-extension"
      ],
      "idea": "一边用代数元素的首一关系求逆，另一边对已有逆的整关系消去分母。",
      "steps": [
        "若 R 是域、s∈S 非零，取 s 的最低次数首一整关系。常数项不能为零，否则在整域中约去 s 得到更低次首一关系。因此常数项 a₀∈R 非零可逆，将关系除以 s 并解出 s⁻¹，得到 S 中的逆。",
        "若 S 是域、r∈R 非零，则 r⁻¹∈S 整，对其首一关系乘 r 的适当幂，得到 r⁻¹∈R（与有限模整性证明的同一步计算），故 R 是域。",
        "对商环，将整关系逐系数取商仍首一。对乘法集 U⊆R，若 s 满足次数m首一关系，s/u 满足把各系数除以 u 的适当幂后的首一关系，系数在 U⁻¹R 中，所以 U⁻¹S 对 U⁻¹R 整。$\\square$"
      ]
    },
    {
      "id": "integral-lying-over",
      "topics": [
        "algebra/dimension-theory",
        "algebra/prime-ideals"
      ],
      "title": "整域整扩张的素理想上覆定理",
      "statement": "整域整扩张 R⊆S 中，每个素理想 p⊆R 都是 S 中某个素理想 q 的收缩：q∩R=p。",
      "dependencies": [
        "integral-domain-field-test",
        "axiom-zorn",
        "localization-module-universal"
      ],
      "idea": "在 p 处局部化，取扩张环的极大理想；其收缩由整域域判据成为基环的唯一极大理想。",
      "steps": [
        "令 U=R\\p。局部化 R_p⊆U⁻¹S 是非零整域扩张，且整性保持。R_p 中分子不在 p 的分数为单位；分子在 p 的分数构成真理想 pR_p，所以它是唯一极大理想。真性由交叉乘法及 p 的素性验证，1不可能属于该理想。",
        "由 Zorn 在非零含幺环 U⁻¹S 中取极大理想 m。其收缩 n=m∩R_p 为素理想，商 R_p/n 单射进入域 (U⁻¹S)/m，且为整扩张。域判据使 R_p/n 为域，所以 n 极大，只能是 pR_p。",
        "把 m 沿 S→U⁻¹S 收缩为 q，素性由同态下素理想收缩直接得到。对 r∈R，r∈q 当且仅当 r/1∈pR_p，当且仅当 r∈p；后一等价由分数关系及 p 素性得到。因此 q∩R=p。$\\square$"
      ]
    },
    {
      "id": "integral-going-up-incomparability",
      "topics": [
        "algebra/dimension-theory",
        "algebra/prime-ideals"
      ],
      "title": "整域整扩张的上升与不可比性",
      "statement": "整域整扩张 R⊆S 中：(1) 若 p⊆p′ 为 R 的素理想、q∩R=p，则存在 q′⊇q 使 q′∩R=p′；(2) 若 q⊆q′ 且收缩相同，则 q=q′。",
      "dependencies": [
        "integral-lying-over",
        "integral-domain-field-test"
      ],
      "idea": "上升在商环中应用上覆；不可比性在共同收缩处局部化，使商成为域。",
      "steps": [
        "因 q∩R=p，R/p 单射进入整域 S/q，且取商保持整性。对 p′/p 应用上覆，得到 S/q 中的素理想，其在 S 的原像 q′ 包含 q 且收缩为 p′。这证明上升。",
        "证明不可比性：设 q⊆q′、收缩均为 p，令 U=R\\p。两理想都避开 U，局部化后仍为素理想 Q⊆Q′。局部化素性的直接检验是：分数乘积在扩张理想中，清分母后由原素性判断某因子在原理想；其收缩仍为原素理想，因为 U 与该素理想不交。",
        "整域 (U⁻¹S)/Q 整于 R_p/pR_p，后者为域，所以前者按域判据也是域。于是 Q 极大，包含它的真素理想 Q′ 只能等于 Q。沿 S 收缩即得 q′=q。$\\square$"
      ]
    },
    {
      "id": "integral-extension-dimension",
      "topics": [
        "algebra/dimension-theory"
      ],
      "title": "整域整扩张保持 Krull 维数",
      "statement": "若整域 R⊆S 为整扩张，则 dim R=dim S，允许维数无穷。Krull 维数定义为有限严格素理想链长度的上确界。",
      "dependencies": [
        "integral-going-up-incomparability",
        "integral-lying-over"
      ],
      "idea": "收缩链由不可比性保持严格，反向用上覆起步再逐层上升。",
      "steps": [
        "任取 S 的严格素链 q₀⊊…⊊q_l。收缩给 R 的包含链；若相邻收缩相同，不可比性迫使 q_i=q_(i+1)，矛盾。因此收缩仍严格，l≤dim R，故 dim S≤dim R。",
        "任取 R 的严格素链 p₀⊊…⊊p_l。上覆先取 q₀ 收缩为 p₀，再逐次上升得 q_i⊆q_(i+1)、收缩分别为 p_i,p_(i+1)。收缩不同使这些包含严格，因此 S 有同长度素链。对全部有限链取上确界，得 dim R≤dim S。",
        "两不等式合并即得相等。该结论本身尚不计算多项式环的维数；需要另证 dim k[t₁,…,t_r]=r 才能结合 Noether 正规化完成有限生成整环的维数公式。$\\square$"
      ]
    },
    {
      "id": "vector-segment-derivative-bound",
      "topics": [
        "analysis/multivariable-calculus"
      ],
      "title": "C¹ 映射的线段导数估计",
      "statement": "若 F 在 R^n 的凸开集内 C¹，且线段 [x,y] 上算子范数 ‖DF‖≤L，则 ‖F(y)−F(x)‖≤L‖y−x‖。若 ‖DF−A‖≤ε，同样有 ‖F(y)−F(x)−A(y−x)‖≤ε‖y−x‖。",
      "dependencies": [
        "ftc-second",
        "complex-cauchy-schwarz"
      ],
      "idea": "沿连接线段逐坐标使用基本定理，再用单位方向投影估计向量积分。",
      "steps": [
        "令 γ(t)=x+t(y−x)。可微的线性逼近与实参数差商复合，给 dF(γ(t))/dt=DF(γ(t))(y−x)。逐实坐标应用微积分基本定理，得到 F(y)−F(x)=∫₀¹DF(γ(t))(y−x)dt。",
        "对欧氏向量积分 I，若 I≠0，取单位向量 u=I/‖I‖，则 ‖I‖=〈I,u〉=∫〈v(t),u〉dt≤∫‖v(t)‖dt；I=0 时也成立。因此所列导数界给第一估计。把 F 替成 F(z)−Az 得第二估计。$\\square$"
      ]
    },
    {
      "id": "inverse-function-rn",
      "topics": [
        "analysis/multivariable-calculus",
        "geometry/smooth-manifolds"
      ],
      "title": "有限维 C¹ 逆函数定理",
      "statement": "开集 Ω⊆R^n 上 F 为 C¹，a∈Ω 且 DF(a) 可逆。则存在 a 的开邻域 U 与 F(a) 的开邻域 V，使 F:U→V 为 C¹ 双射，且 D(F⁻¹)(y)=[DF(F⁻¹(y))]⁻¹。",
      "dependencies": [
        "vector-segment-derivative-bound",
        "banach-contraction",
        "banach-neumann-series",
        "finite-norm-equivalence"
      ],
      "idea": "先把导数归一成单位矩阵，再把 F(x)=y 写成闭球上的压缩不动点问题。",
      "steps": [
        "平移自变量与函数值，并左乘 A⁻¹、A=DF(a)，可归约到 a=0、F(0)=0、DF(0)=I。原定理的开邻域和导数公式可在最后经这些可逆仿射映射还原。由 DF 连续，取 r>0 使闭球 B̄(0,r)⊂Ω 且其上 ‖DF(x)−I‖≤q<1。",
        "对参数 y，定义 T_y(x)=x−F(x)+y。线段导数估计给 ‖T_y(x)−T_y(z)‖≤q‖x−z‖。又 T_y(0)=y，故当 ‖y‖<(1−q)r/2 时，‖T_y(x)‖≤qr+‖y‖<r 对闭球内 x 成立。因此 T_y 把该完备闭球映入自身且压缩，Banach 定理给唯一固定点 g(y)，即 F(g(y))=y。",
        "对闭球内任意 x,z，估计 F−I 得 ‖F(x)−F(z)‖≥(1−q)‖x−z‖，故 F 在球内单射。令 V=B(0,(1−q)r/2)、U=F⁻¹(V)∩B(0,r)，U 因连续性而开。固定点满足 ‖g(y)‖≤‖y‖/(1−q)<r/2，所以在 U 内，且 F:U→V 双射。上述下界还给 ‖g(y)−g(v)‖≤‖y−v‖/(1−q)，逆连续且 Lipschitz。",
        "每个 x∈U 有 ‖DF(x)−I‖≤q<1，Neumann 级数使 DF(x) 可逆，逆范数≤1/(1−q)。固定 y、x=g(y)，令 k=g(y+h)−x，逆的 Lipschitz 界给 ‖k‖=O(‖h‖)。F 的可微性给 h=DF(x)k+o(‖k‖)，左乘固定 DF(x)⁻¹，便得 k=DF(x)⁻¹h+o(‖h‖)，故 g 可微且导数如述。",
        "逆矩阵连续性可直接由 B⁻¹−C⁻¹=B⁻¹(C−B)C⁻¹ 及统一逆范数界得到。结合 DF、g 连续，Dg(y)=DF(g(y))⁻¹ 连续，所以 g 为 C¹。还原平移及 A 的变换即得一般结论。$\\square$"
      ]
    },
    {
      "id": "implicit-function-rn",
      "topics": [
        "analysis/multivariable-calculus",
        "geometry/smooth-manifolds"
      ],
      "title": "有限维 C¹ 隐函数定理",
      "statement": "设 F:Ω⊆R^m×R^n→R^n 为 C¹，F(a,b)=0，D_yF(a,b) 可逆。则在 (a,b) 的某乘积邻域，F(x,y)=0 当且仅当 y=φ(x)，其中 φ 为唯一局部 C¹ 函数，且 Dφ(x)=−[D_yF(x,φ(x))]⁻¹D_xF(x,φ(x))。",
      "dependencies": [
        "inverse-function-rn"
      ],
      "idea": "把参数坐标保留，构造 G(x,y)=(x,F(x,y))，将零水平集变成逆映射的切片。",
      "steps": [
        "令 G(x,y)=(x,F(x,y))，其导数作用为 (h,k)↦(h,D_xFh+D_yFk)。在 (a,b)，给定目标 (u,v) 可唯一取 h=u、k=(D_yF)⁻¹(v−D_xFu)，故 DG 可逆。逆函数定理使 G 在某开邻域 U 上有 C¹ 逆，像为 (a,0) 的开邻域 V。",
        "由于 G 的第一坐标就是 x，逆必形如 G⁻¹(u,v)=(u,ψ(u,v))。取 a 的足够小邻域 A，使 (x,0)∈V，并令 φ(x)=ψ(x,0)，得到 C¹ 函数，φ(a)=b 且 F(x,φ(x))=0。",
        "取含 (a,b) 的小乘积邻域 A₀×B₀⊂U，再缩小 A₀，使 φ(A₀)⊂B₀ 且 (x,0)∈V。若 (x,y) 在该乘积邻域且 F(x,y)=0，则 G(x,y)=(x,0)=G(x,φ(x))，局部单射性迫使 y=φ(x)，反向已知，故存在与唯一性均成立。",
        "D_yF 在此邻域内仍可逆，可由逆矩阵的小扰动公式保证，必要时再缩小邻域。对恒等式 F(x,φ(x))=0 求导，链式线性逼近给 D_xF+D_yF·Dφ=0，左乘 (D_yF)⁻¹ 得所列公式。$\\square$"
      ]
    },
    {
      "id": "complex-jordan-form",
      "topics": [
        "algebra/modules",
        "algebra/eigenvalues",
        "algebra/linear-maps"
      ],
      "title": "复有限维算子的 Jordan 标准形",
      "statement": "每个有限维复向量空间上的线性算子 T 都有由 Jordan 块 J_e(λ) 构成的分块对角矩阵。各特征值及对应块大小多重集唯一，不计块排列。",
      "dependencies": [
        "pid-module-decomposition",
        "pid-invariant-factors-unique",
        "pid-factorization-crt",
        "fundamental-algebra"
      ],
      "idea": "令多项式变量作用为 T，将有限维空间看成 C[t] 的扭模；每个 (t−λ) 幂次循环模给一条 Jordan 链。",
      "steps": [
        "C[t] 是 PID：非零理想中取最低次数首一多项式，除法余数若非零会违反最低次数，所以它生成理想。给 V 定义 C[t] 作用 p(t)v=p(T)v。任意一组有限 C 基也生成该模。若 dim_CV=n>0，算子空间维数n²，所以 I,T,…,T^(n²) 线性相关，存在非零p使p(T)=0。因此整个模为扭模。零维情形为空分块，直接成立。",
        "PID结构定理及代数基本定理把模分解成有限个 C[t]/((t−λ)^e) 的直和：先分解为非零不变因子循环商，再将每个多项式分成线性因子幂，对互素因子使用中国剩余分解。不存在自由 C[t] 因子，因为整个V被非零p湮灭，而自由因子不能如此。",
        "在一个块 C[t]/((t−λ)^e) 中，以 (t−λ)^(e−1),…,(t−λ),1 为有序 C 基。多项式除法证明这些e个类张成且无关。乘以t等于乘λ再乘恒等加上乘(t−λ)，故第一个基向量映为λ倍自身，其余第j个映为λ倍自身加第j−1个。矩阵正是对角λ、上副对角1的Jordan块。拼接各块基即得存在性。",
        "改变V的C基所给的算子相似，等价于上述 C[t]-模同构，因为交换T正好等价于交换所有多项式作用。PID扭模的素幂分量重数唯一，且 C[t] 不可约首一因子恰为t−λ，所以各λ及指数e多重集唯一，给Jordan块唯一性。$\\square$"
      ]
    },
    {
      "id": "finitely-generated-abelian-classification",
      "topics": [
        "algebra/modules",
        "algebra/finite-groups",
        "algebra/homology-groups"
      ],
      "title": "有限生成阿贝尔群分类",
      "statement": "每个有限生成阿贝尔群 G 唯一同构于 Z^s⊕Z/d₁Z⊕…⊕Z/d_rZ，其中2≤d₁|…|d_r。若G有限，则s=0且|G|=∏d_i。",
      "dependencies": [
        "pid-module-decomposition",
        "pid-invariant-factors-unique"
      ],
      "idea": "整数乘法由重复群加法定义，把阿贝尔群视为Z模。",
      "steps": [
        "给阿贝尔群G定义整数数乘：非负整数为重复加法，负整数先取逆。交换律与结合律验证Z模公理；反向Z模的加法群阿贝尔。群同态恰是Z模同态，因为它保持重复加法与逆。因此两类对象的有限生成与同构一致。",
        "Z是PID：非零理想取最小正整数d，对任意元素除以d，余数仍在理想中且小于d，只能零，故理想为dZ。PID有限生成模结构及唯一性给G的直和分解。将不变因子乘单位±1改成正数，删除单位1因子，便有2≤d₁|…|d_r，且各数及自由秩唯一。",
        "若s>0，直和含无限循环子群，群无限；若s=0，各循环因子有限，其直积基数为∏d_i。因此有限群情形恰是s=0，阶数公式成立，空积对应平凡群。$\\square$"
      ]
    },
    {
      "id": "jordan-upper-semicircle",
      "topics": [
        "analysis/residues",
        "analysis/cauchy-integral-theorem"
      ],
      "title": "上半圆的 Jordan 引理与显式界",
      "statement": "设a>0，Γ_R为上半圆z=Re^(iθ)、0≤θ≤π，g在弧上连续，M_R=sup_(Γ_R)|g|。则 |∫_(Γ_R)e^(iaz)g(z)dz|≤πM_R/a。因而M_R→0时弧积分趋零。",
      "dependencies": [
        "contour-estimate",
        "ftc-second"
      ],
      "idea": "指数模为e^(−aR sinθ)，用正弦在半区间的线性下界消去弧长增长。",
      "steps": [
        "参数化得积分模至多 RM_R∫₀^π e^(−aR sinθ)dθ。sin在[0,π/2]上凹，故位于连接端点的弦之上，即sinθ≥2θ/π；这也可由二阶导数−sinθ≤0及导数单调直接证明弦不等式。另一半区间用sin(π−θ)=sinθ。",
        "因此该积分至多2RM_R∫₀^(π/2)e^(−2aRθ/π)dθ≤2RM_R·π/(2aR)=πM_R/a。若M_R→0，右侧趋零。上界只要求弧上连续，不要求g在内部全纯；内部全纯性属于之后使用围道定理的独立条件。$\\square$"
      ]
    },
    {
      "id": "pole-residue-derivative",
      "topics": [
        "analysis/residues"
      ],
      "title": "有限阶极点的留数求导公式",
      "statement": "若f在a处至多有m阶极点，m≥1，h(z)=(z−a)^m f(z)可全纯延拓到a，则 Res(f,a)=h^((m−1))(a)/(m−1)!。若f的极点阶数恰为m，还要求h(a)≠0。",
      "dependencies": [
        "holomorphic-taylor",
        "local-laurent-expansion"
      ],
      "idea": "留数对应h的Taylor级数中恰好抵消m−1个幂的系数。",
      "steps": [
        "在a的邻域写h(z)=Σ_(k≥0)c_k(z−a)^k，其中c_k=h^(k)(a)/k!。除以(z−a)^m得f(z)=Σ_(k≥0)c_k(z−a)^(k−m)，这就是穿孔盘的Laurent展开，或由Laurent唯一性与已知展开比较。",
        "幂次−1仅在k=m−1出现，故留数等于c_(m−1)，得到公式。若h(a)=0，极点可能降阶或可去，但公式仍成立；若h(a)≠0，最低非零项恰为(z−a)^(−m)，所以阶数恰为m。$\\square$"
      ]
    },
    {
      "id": "dirichlet-sine-integral-contour",
      "topics": [
        "analysis/residues",
        "analysis/integration-calculus"
      ],
      "title": "Dirichlet 积分的缩进围道完整证明",
      "statement": "广义积分∫₀∞ sinx/x dx收敛且等于π/2。使用e^(iz)/z时，原点在实轴积分路径上，必须以小半圆缩进处理，不能直接把它当作普通内部极点。",
      "dependencies": [
        "jordan-upper-semicircle",
        "weighted-residue-theorem",
        "contour-estimate",
        "ftc-second"
      ],
      "idea": "大弧由Jordan引理趋零，小弧保留半个极点贡献，实轴两段合起来给正弦积分。",
      "steps": [
        "先证尾积分收敛。对B>A≥1，分部积分得 ∫_A^B sinx/x dx=[−cosx/x]_A^B−∫_A^B cosx/x² dx，绝对值至多1/A+1/B+1/A≤3/A。尾积分满足Cauchy条件。原点sinx/x连续填值1，因此下限0也无发散。",
        "取0<ε<R，围道按−R到−ε的实轴段、小上半圆εe^(iθ)（θ从π降到0）、ε到R的实轴段、大上半圆Re^(iθ)（θ从0升到π）连接。它避开0。f=e^(iz)/z在C上仅有孤立奇点0；带绕数留数定理给总积分为2πi乘绕数，因为Res(f,0)=1。",
        "该围道对0绕数为零，可直接算核积分而不借Jordan曲线定理：两实轴段的∫dz/z分别为logε−logR及logR−logε，相消；小弧为−iπ，大弧为iπ，也相消。因此总f积分为零。",
        "小弧积分为∫_π^0 i exp(iεe^(iθ))dθ，ε→0时一致趋于−iπ；一致性可由指数幂级数给|e^w−1|≤|w|e^|w|。大弧取g=1/z，M_R=1/R，Jordan界给其模≤π/R→0。实轴两段则相加为2i∫_ε^R sinx/x dx，余弦部分因奇性相消。",
        "固定R先令ε→0，总积分等式给2i∫₀^R sinx/x dx−iπ+大弧积分=0。再令R→∞，使用已证收敛和大弧估计，得2i∫₀∞sinx/x dx=iπ，即所列值。小弧的半极点贡献不可遗漏。$\\square$"
      ]
    },
    {
      "id": "removable-singularity",
      "topics": [
        "analysis/holomorphic-functions",
        "analysis/analytic-continuation"
      ],
      "title": "Riemann 可去奇点定理",
      "statement": "若 f 在 0<|z−a|<R 全纯且在 a 附近有界，则 f 可唯一全纯延拓到 a。",
      "dependencies": [
        "holomorphic-taylor",
        "complex-basic-rules"
      ],
      "idea": "乘以二次因子后填零，差商在中心趋零，再用 Taylor 展开除回因子。",
      "steps": [
        "令 h(z)=(z−a)²f(z)（z≠a）、h(a)=0。若 |f|≤M，则 |h(z)|≤M|z−a|²，故 h 在 a 连续；差商 h(z)/(z−a) 的模≤M|z−a|→0，所以 h′(a)=0。别处 h 全纯，因此 h 在整盘全纯。",
        "Taylor 展开 h(z)=Σ_(n≥2)b_n(z−a)^n，常数和一次项为零。于是 Σ_(n≥2)b_n(z−a)^(n−2) 在较小圆盘全纯，并在穿孔盘与 f 相等；填入 b₂ 就得到延拓。它与原 f 在其余区域拼接为全盘全纯函数。唯一性由中心连续性，或恒等定理得到。$\\square$"
      ]
    },
    {
      "id": "local-laurent-expansion",
      "topics": [
        "analysis/residues",
        "analysis/analytic-continuation"
      ],
      "title": "孤立奇点的 Laurent 展开、唯一性与主部",
      "statement": "f 在穿孔盘 0<|z−a|<R 全纯。则存在 r>0 及唯一系数 c_n（n∈Z），使 f(z)=Σ_(n≥0)c_n(z−a)^n+Σ_(m≥1)c_(−m)(z−a)^(−m) 在 0<|z−a|<r 成立，两部分在该穿孔盘各紧集上一致绝对收敛。负幂主部 P_a 在整个 C\\{a} 上全纯。留数定义为 c_(−1)，等于 (2πi)⁻¹∫∂S f，其中 S 为充分小的正向中心方形。",
      "dependencies": [
        "goursat-triangle",
        "cauchy-square-formula",
        "holomorphic-compact-limit",
        "contour-estimate",
        "uniform-integration"
      ],
      "idea": "在外方形与内方形间应用 Cauchy 核公式，分别展开两个几何级数。",
      "steps": [
        "取中心为 a、到边距离 r 的闭方形 Q⊂{|z−a|<R}。对 0<|z−a|<r，另取同心内方形 S，到边距离 s，满足 √2s<|z−a|，故 z 在 S 外。再围 z 挖一个与 S 不交的小方形。在 Q 去掉这两个内方形的区域，对 f(w)/(w−z) 使用有限矩形网格、三角剖分与 Goursat，内部边抵消。围 z 的小方形积分由局部 Cauchy 公式为 2πif(z)，所以 2πif(z)=∫∂Q f(w)/(w−z)dw−∫∂S f(w)/(w−z)dw。",
        "外边界 |w−a|≥r>|z−a|，展开 1/(w−z)=Σ_(n≥0)(z−a)^n/(w−a)^(n+1)。内边界 |w−a|≤√2s<|z−a|，展开 1/(w−z)=−Σ_(m≥1)(w−a)^(m−1)/(z−a)^m。几何比严格小于一，边界上一致绝对收敛，允许积分与级数交换。于是 c_n=(2πi)⁻¹∫∂Q f(w)/(w−a)^(n+1)dw、c_(−m)=(2πi)⁻¹∫∂S f(w)(w−a)^(m−1)dw。",
        "负系数不依赖内方形大小：任意两个同心方形之间，被积函数在闭方环附近全纯，有限三角剖分与内部边抵消使两边界积分相等。外系数也不依赖所选外方形，在两个外方形间作同样论证。因此这些是固定系数。",
        "外系数估计 |c_n|≤length(∂Q)max∂Q|f|/(2πr^(n+1))，给正幂部分在 |z−a|<r 局部一致绝对收敛。对任何目标 |z−a|≥ρ>0，可把内方形取得 √2s<ρ，其负系数界为 |c_(−m)|≤length(∂S)max∂S|f|·(√2s)^(m−1)/(2π)。负幂部分因此在 |z−a|≥ρ 一致绝对收敛。ρ 任意，主部在 C\\{a} 局部一致收敛，由全纯极限定理全纯。",
        "对任意另一局部 Laurent 展开，选充分小的中心方形，乘 (z−a)^(−k−1) 后逐项积分。除了指数 −1 的项，所有整数幂均有单值原函数，积分零；指数 −1 项积分为 2πi。局部一致收敛允许逐项积分，故积分提取唯一的 c_k。k=−1 时即留数积分公式。$\\square$"
      ]
    },
    {
      "id": "isolated-singularity-classification",
      "topics": [
        "analysis/residues",
        "analysis/analytic-continuation"
      ],
      "title": "孤立奇点分类及极点留数公式",
      "statement": "孤立奇点处主部为空当且仅当奇点可去；主部恰有有限个负幂且最低幂为 −m 当且仅当该点为 m 阶极点。此时 Res(f,a)=h^(m−1)(a)/(m−1)!，其中 h(z)=(z−a)^m f(z) 全纯延拓且 h(a)≠0。其余不可去且非极点者称本性奇点。",
      "dependencies": [
        "local-laurent-expansion",
        "holomorphic-taylor",
        "removable-singularity"
      ],
      "idea": "唯一 Laurent 系数把解析延拓与有限阶发散分别变成负幂系数条件。",
      "steps": [
        "若主部为空，正幂级数直接给全纯延拓。若已有全纯延拓，其 Taylor 展开也是局部 Laurent 展开，由唯一性负系数都为零。",
        "若最低幂为 −m 且 c_(−m)≠0，h=(z−a)^mf 延拓为全纯函数且 h(a)=c_(−m)≠0，所以 f=h/(z−a)^m。这正是 m 阶极点定义，且 |f(z)|→∞。反向若有这种表示，将 h 的 Taylor 级数除以 (z−a)^m，唯一性给有限主部及最低阶。",
        "f 的 −1 次系数恰为 h 的 m−1 次 Taylor 系数，等于 h^(m−1)(a)/(m−1)!，得公式。特别若 f=g/q、q(a)=0、q′(a)≠0 且 g(a)≠0，则 m=1，Res(f,a)=g(a)/q′(a)，因为 q(z)/(z−a) 在 a 的值为 q′(a)。若 g(a)=0，商可能可去，留数仍为零。$\\square$"
      ]
    },
    {
      "id": "weighted-residue-theorem",
      "topics": [
        "analysis/residues",
        "analysis/cauchy-integral-theorem"
      ],
      "title": "有限孤立奇点的加权留数定理",
      "statement": "设 Ω 单连通，f 在 Ω\\{a₁,…,a_N} 全纯，γ 为避开这些点的分段 C¹ 闭曲线。定义 Ind(γ,a)=(2πi)⁻¹∫γ dz/(z−a)。则 ∫γ f(z)dz=2πiΣ_j Ind(γ,a_j)Res(f,a_j)，允许各孤立奇点为本性奇点。",
      "dependencies": [
        "local-laurent-expansion",
        "cauchy-simply-connected",
        "contour-estimate"
      ],
      "idea": "减去每个奇点的完整主部，余函数在全域全纯；主部逐项积分只剩一次负幂。",
      "steps": [
        "对每个 a_j 取其局部主部 P_j，前引理保证它在 C\\{a_j} 全纯。在 a_j 的小穿孔邻域，f−P_j 是全纯正幂级数，而其他 P_k 都在 a_j 附近全纯。因此 F=f−Σ_jP_j 可逐点填补全部 a_j，成为 Ω 上全纯函数。",
        "由单连通 Cauchy 定理，∫γF=0。γ 的像紧且避开每个 a_j，主部级数在该像上一致绝对收敛，长度估计允许逐项积分。每个 m≥2 的 (z−a_j)^(−m) 在 C\\{a_j} 有单值原函数 (z−a_j)^(1−m)/(1−m)，所以闭路积分为零。",
        "仅 m=1 项留下 c_(−1)∫γ dz/(z−a_j)=2πiInd(γ,a_j)Res(f,a_j)。对 j 的有限和相加即得结论。本证明直接使用所定义的绕行积分权重；正向简单闭曲线内部权重为一、外部为零的拓扑结论仍需单独证明，不能默认为本解析推导的一部分。$\\square$"
      ]
    },
    {
      "id": "casorati-weierstrass",
      "topics": [
        "analysis/analytic-continuation",
        "analysis/residues"
      ],
      "title": "Casorati–Weierstrass 定理",
      "statement": "若 a 为 f 的孤立本性奇点，则每个充分小穿孔邻域的像在 C 中稠密。",
      "dependencies": [
        "removable-singularity",
        "isolated-singularity-classification",
        "holomorphic-taylor"
      ],
      "idea": "若像漏掉一个圆盘，则取其中心的倒数成为有界函数；可去延拓迫使原奇点可去或为极点。",
      "steps": [
        "若某穿孔邻域的像不稠密，则有 w∈C、ε>0，使该邻域所有 z 满足 |f(z)−w|≥ε。于是 g=1/(f−w) 在该穿孔邻域全纯且有界，由可去奇点定理延拓为全纯 G。",
        "若 G(a)≠0，连续性使它在 a 附近非零，f=w+1/G 全纯延拓，奇点可去，矛盾。若 G(a)=0，G 不能恒零，因为穿孔邻域内 g 非零；Taylor 展开使 G 在 a 有有限正阶零点，故 1/G 在 a 有有限阶极点，f=w+1/G 也为极点，仍矛盾。",
        "两种情形都排除，因此像在 C 稠密。此结论不等于 Picard 定理：这里没有证明像覆盖所有复数或最多遗漏一个值。$\\square$"
      ]
    },
    {
      "id": "lindeberg-negligible-variance",
      "topics": [
        "probability/central-limit-theorem"
      ],
      "title": "Lindeberg 条件推出最大单项方差消失",
      "statement": "每行有限独立中心化实变量 Y_(n,k) 满足 Σ_kE[Y_(n,k)²]=1。若每个 ε>0 均有 L_n(ε)=Σ_kE[Y_(n,k)²1_{|Y_(n,k)|>ε}]→0，则 max_kE[Y_(n,k)²]→0。",
      "dependencies": [
        "integral-linearity"
      ],
      "idea": "每项二阶矩拆成小幅部分与尾部，小幅部分至多 ε²。",
      "steps": [
        "固定 ε>0，对每个 k 有 E[Y_(n,k)²]≤ε²+E[Y_(n,k)²1_{|Y_(n,k)|>ε}]≤ε²+L_n(ε)。",
        "对 k 取最大，再令 n→∞，上极限≤ε²。由于 ε 任意，且方差非负，最大值趋零。$\\square$"
      ]
    },
    {
      "id": "small-complex-product",
      "topics": [
        "analysis/limits",
        "probability/central-limit-theorem"
      ],
      "title": "无穷小复因子的乘积极限",
      "statement": "每行有限复数 u_(n,k) 若满足 max_k|u_(n,k)|→0、sup_nΣ_k|u_(n,k)|<∞、Σ_ku_(n,k)→a，则 ∏_k(1+u_(n,k))→exp(a)。",
      "dependencies": [
        "complex-exponential-entire"
      ],
      "idea": "逐因子比较 1+u 与 exp(u)，误差总和由平方和控制。",
      "steps": [
        "当 |u|≤1，指数级数给 |exp(u)−1−u|≤C|u|²，其中 C=Σ_(j≥2)1/j!。并有 |1+u|≤exp(|u|)、|exp(u)|≤exp(|u|)，后一式直接由指数级数三角不等式得到。",
        "用有限乘积差的望远镜展开，∏(1+u_k)−∏exp(u_k) 的模≤C exp(Σ|u_k|)Σ|u_k|²。平方和≤max|u_k|·Σ|u_k|→0，指数因子统一有界，所以两乘积之差趋零。",
        "指数加法公式使 ∏exp(u_k)=exp(Σu_k)→exp(a)，得到结论。这避免在复数零点附近选择对数分支。$\\square$"
      ]
    },
    {
      "id": "lindeberg-sufficient-clt",
      "topics": [
        "probability/central-limit-theorem"
      ],
      "title": "Lindeberg 三角阵中心极限定理（充分方向）",
      "statement": "每行有限个相互独立实变量 X_(n,k) 均值有限、方差有限，令 s_n²=Σ_kVar(X_(n,k))>0、Y_(n,k)=(X_(n,k)−EX_(n,k))/s_n。若对每个 ε>0，Σ_kE[Y_(n,k)²1_{|Y_(n,k)|>ε}]→0，则 Σ_kY_(n,k) 依分布收敛于 N(0,1)。不要求各行间独立。",
      "dependencies": [
        "lindeberg-negligible-variance",
        "small-complex-product",
        "characteristic-expansion",
        "independent-bounded-products",
        "gaussian-smoothing"
      ],
      "idea": "统一控制每项特征函数的二阶余项，再用 Lindeberg 条件使所有余项的总和趋零。",
      "steps": [
        "记 v_(n,k)=EY_(n,k)²，故 Σ_kv_(n,k)=1。指数的积分余项恒等式 exp(iz)=1+iz−z²/2+z²r(z) 中，|r(z)|≤1、r(z)→0（已在特征函数展开证明中给出）。固定实 t，每项特征函数为 φ_(n,k)(t)=1−t²v_(n,k)/2+R_(n,k)，其中 R_(n,k)=t²E[Y_(n,k)²r(tY_(n,k))]。",
        "令 ω_t(δ)=sup_(|z|≤|t|δ)|r(z)|，则 ω_t(δ)→0。将每项余项按 |Y|≤δ 与 |Y|>δ 拆分后求和，得 Σ_k|R_(n,k)|≤t²[ω_t(δ)+L_n(δ)]。先 n→∞ 再 δ↓0，使总余项趋零。",
        "令 u_(n,k)=−t²v_(n,k)/2+R_(n,k)。则 Σ_ku_(n,k)→−t²/2，Σ_k|u_(n,k)| 统一有界；由最大方差消失及 Σ|R|→0，还得 max_k|u_(n,k)|→0。无穷小乘积引理给 ∏_kφ_(n,k)(t)→exp(−t²/2)。",
        "行内独立使乘积正是 V_n=Σ_kY_(n,k) 的特征函数。中心化与独立性给 EV_n=0、EV_n²=1。高斯平滑引理的条件均满足，所以对每个实 x，P(V_n≤x)→Φ(x)，即所述依分布收敛。这里证明的是 Lindeberg 条件的充分性，未证明在额外无穷小条件下的逆命题。$\\square$"
      ]
    },
    {
      "id": "hurwitz-linear-stability",
      "topics": [
        "analysis/stability",
        "applied/feedback-control",
        "applied/state-space"
      ],
      "title": "有限维线性系统的 Hurwitz 稳定判据",
      "statement": "实矩阵 A 的系统 x′=Ax 原点渐近稳定，当且仅当 A 的全部复特征值实部严格负；此时存在 C,β>0，使所有 t≥0 有 ‖e^(tA)‖≤Ce^(−βt)。",
      "dependencies": [
        "complex-jordan-form",
        "matrix-exponential",
        "finite-norm-equivalence"
      ],
      "idea": "Jordan 块指数是衰减指数乘有限阶多项式；非负实部的特征方向则不能趋零。",
      "steps": [
        "解为 x(t)=e^(tA)x₀。取复 Jordan 分解 A=SJS⁻¹。每块 J=λI+N，N^m=0，直接将有限多项式与指数相乘并求导，可验证 e^(tJ)=e^(λt)Σ_(k=0)^(m−1)t^kN^k/k!：该矩阵在0为I且导数为J倍自身，与指数的初值问题相同。唯一性也可将任一解乘e^(−tJ)求导得常数。",
        "设全部 Reλ≤−α<0，取0<β<α。每个 t^ke^(−(α−β)t) 在 t≥0 有统一界：当t≥1，指数级数中k+1阶项给 e^((α−β)t)≥((α−β)t)^(k+1)/(k+1)!，从而尾部趋零；有限区间连续有界。有限块及固定换基矩阵的范数给 ‖e^(tA)‖≤Ce^(−βt)。",
        "该界保证任意解趋零，并给 Lyapunov 稳定性：‖x₀‖<ε/C 时全部时刻 ‖x(t)‖<ε。反向若全部实初值的解都趋零，复初值的解也趋零，因为它是两条实解的复线性组合。若有 Reλ≥0 的复特征值及非零v，则 e^(tA)v=e^(λt)v，其范数不趋零，矛盾。所以渐近稳定迫使全部实部为负。$\\square$"
      ]
    },
    {
      "id": "continuous-lyapunov-equation",
      "topics": [
        "analysis/stability",
        "applied/feedback-control",
        "applied/robust-control"
      ],
      "title": "Lyapunov 矩阵方程的正定解判据",
      "statement": "实矩阵 A 为 Hurwitz 当且仅当对每个实对称正定 Q，存在实对称正定 P 满足 AᵀP+PA=−Q。Hurwitz 时该方程的矩阵解唯一，且 P=∫₀∞e^(tAᵀ)Qe^(tA)dt。",
      "dependencies": [
        "hurwitz-linear-stability",
        "hermitian-spectral",
        "ftc-second"
      ],
      "idea": "指数衰减保证积分收敛，积分被积矩阵的导数给方程；正定性由二次型的正积分得到。",
      "steps": [
        "设 A Hurwitz。指数界给 ‖e^(tAᵀ)Qe^(tA)‖≤C²‖Q‖e^(−2βt)，所以逐坐标广义积分绝对收敛，定义实对称P。对x≠0，xᵀPx=∫₀∞(e^(tA)x)ᵀQ(e^(tA)x)dt，非负且在t=0严格正，连续性保证一小段上严格正，故P正定。",
        "在有限上限T积分矩阵导数，得 AᵀP_T+P_TA=e^(TAᵀ)Qe^(TA)−Q。令T→∞，右边第一项由指数界趋零，得所列方程。若P₁、P₂均为解，D=P₁−P₂满足AᵀD+DA=0，因此 e^(tAᵀ)De^(tA) 的导数为零，恒等于D；左侧又随t→∞趋零，故D=0，唯一性甚至不要求待比较的解对称。",
        "反向只需对某个正定Q有正定对称P满足方程。取A任一复特征向量v、Av=λv，用共轭转置左右夹乘得到 2Reλ·v*Pv=−v*Qv。实对称正定矩阵在复向量上也正：对v=x+iy，v*Pv=xᵀPx+yᵀPy>0，Q同理。因此Reλ<0，对全部特征值成立，A Hurwitz。",
        "沿实系统解，V=xᵀPx 满足 V̇=−xᵀQx≤−[λ_min(Q)/λ_max(P)]V，乘相应正指数后导数非正，得到显式指数衰减。这也说明正定解如何给稳定性的可计算证据。$\\square$"
      ]
    },
    {
      "id": "schur-discrete-stability",
      "topics": [
        "analysis/stability",
        "applied/state-space",
        "applied/numerical-stability"
      ],
      "title": "离散线性系统的 Schur 稳定判据",
      "statement": "对实有限方阵 A，系统 x_(n+1)=Ax_n 的原点渐近稳定，当且仅当每个复特征值满足 |λ|<1。此时存在 C>0、0<r<1，使 ‖A^n‖≤Cr^n。",
      "dependencies": [
        "complex-jordan-form",
        "finite-norm-equivalence"
      ],
      "idea": "Jordan 块的幂是几何衰减乘多项式；模至少为一的特征方向不收敛到零。",
      "steps": [
        "设 J=λI+N 是大小m的 Jordan 块。二项式定理给 J^n=Σ_(k=0)^(min(n,m−1)) binom(n,k)λ^(n−k)N^k。若λ=0，n≥m时该块为零。若0<|λ|<r<1，利用 binom(n,k)≤n^k/k!，各项除以r^n后有界，因为 n^k(|λ|/r)^n 有界。后者可取 a=−log(|λ|/r)>0，由指数级数 e^(an)≥(an)^(k+1)/(k+1)! 得其趋零，有限初始项亦有界。",
        "对有限多个块选择同一个大于全部特征值模而小于1的r，吸收换基矩阵及有限初始幂得到 ‖A^n‖≤Cr^n。于是解A^nx₀趋零，且 ‖x₀‖<ε/C 保证所有迭代留在ε球内。反向若所有实初值解趋零，所有复初值也趋零；对Av=λv有A^nv=λ^nv，故非零v迫使|λ|<1。$\\square$"
      ]
    },
    {
      "id": "discrete-lyapunov-equation",
      "topics": [
        "analysis/stability",
        "applied/state-space",
        "applied/robust-control"
      ],
      "title": "离散 Lyapunov 方程及能量衰减",
      "statement": "A 的谱位于开单位圆内，当且仅当对每个实对称正定Q存在实对称正定P满足 P−AᵀPA=Q。此时任意矩阵解唯一，P=Σ_(n=0)^∞(Aᵀ)^nQA^n。",
      "dependencies": [
        "schur-discrete-stability",
        "hermitian-spectral"
      ],
      "idea": "用收敛的能量级数构造解；移位相减消去尾项，特征向量二次型给反向判据。",
      "steps": [
        "由 ‖A^n‖≤Cr^n，级数各项范数至多C²‖Q‖r^(2n)，因此每个坐标绝对收敛。每项对称半正定，且第0项Q正定，所以P对称正定。有限和P_N满足 P_N−AᵀP_NA=Q−(Aᵀ)^(N+1)QA^(N+1)，末项趋零，取极限即得方程。",
        "两解之差D满足D=AᵀDA，迭代得D=(Aᵀ)^nDA^n，其范数至多C²r^(2n)‖D‖，令n趋无穷得D=0。反向只需一个正定Q及正定对称解P；取复特征向量v，夹乘方程得到 (1−|λ|²)v*Pv=v*Qv。正定实对称矩阵对非零复向量亦正，因为实部、虚部的二次型相加，故1−|λ|²>0。",
        "沿迭代V_n=x_nᵀPx_n有 V_(n+1)−V_n=−x_nᵀQx_n。由于P−Q=AᵀPA半正定，0<c=λ_min(Q)/λ_max(P)≤1，故V_(n+1)≤(1−c)V_n，给出可计算的几何衰减；c=1时该不等式直接给下一步能量为零。$\\square$"
      ]
    },
    {
      "id": "syntax-parse-substitute",
      "topics": [
        "foundations/formal-language",
        "foundations/structure-interpretation",
        "foundations/satisfaction"
      ],
      "title": "唯一解析与语义代入引理",
      "statement": "完全括号化的一阶合式项与公式有唯一语法树，捕获规避的项代入可计算；结构 M 与赋值 s 下，φ[t/x] 的真值等于把 s(x) 改成项 t 的解释后 φ 的真值。",
      "dependencies": [
        "axiom-logic",
        "axiom-natural"
      ],
      "idea": "先按语法树递归处理项，再对公式树归纳；量词步必须先避开变量捕获。",
      "steps": [
        "项由变量、常元及带固定元数的函数符号生成；公式由原子谓词/等号、带括号的联结词及带变量的量词生成。首符号、括号匹配和各符号元数确定根节点与各子串，递归使树唯一。有限字符串扫描及严格更短子串递归给解析算法。",
        "代入遇变量 x 时换成 t，其他变量不变，函数及联结词对子树递归。遇 ∀y，若 y=x 停止进入该作用域；若 y≠x 却在 t 中自由，先把绑定 y 改为一个不在相关有限变量集中的新变量，再进入。每步处理有限树，改名也由枚举变量找到，故可计算且不捕获自由变量。",
        "对项结构归纳，可验证代入后项的解释等于修改赋值后的原项解释；原子谓词和等号由此得到公式引理。否定与蕴含按真值表传递归纳结论。",
        "量词步 y≠x 时，经改名可保证 y 不在 t 中自由，所以改变 s(y) 不影响 t 的解释，两个赋值更新可交换；对所有 y 的值应用归纳结论即得全称式。y=x 时作用域内不代入，与赋值被该量词覆盖一致。完成语义代入引理。$\\square$"
      ]
    },
    {
      "id": "fol-soundness",
      "topics": [
        "foundations/soundness-completeness",
        "foundations/formal-proof",
        "foundations/axiomatic-method"
      ],
      "title": "一阶 Hilbert 演算的可靠性",
      "statement": "对本章演算，若句子理论 Γ⊢φ，则每个满足 Γ 的结构都满足 φ。",
      "dependencies": [
        "syntax-parse-substitute",
        "def-hilbert-fol"
      ],
      "idea": "逐行证明每个有限推导步骤都保持在任意 Γ 模型中的真。",
      "steps": [
        "固定任意 Γ 的模型 M。命题重言式代入后在任何原子真值组合下都真。全称实例公理由语义代入引理成立；分配公理在 x 不自由出现于 α 时，可把不依赖 x 的前件固定后检查全称定义。",
        "等号公理因解释中的相等关系为真正相等而成立，函数与谓词对相等元素解释相同。Γ 的每个前提按假设真。modus ponens 由蕴含真值表保持真。",
        "全称概括要求被概括变量不自由出现于前提，所以前提在改变该变量赋值时仍真；若此前结论在这些赋值中皆真，就得到全称式。对有限证明长度归纳，最后 φ 在 M 中真。M 任意，可靠性成立。$\\square$"
      ]
    },
    {
      "id": "fol-deduction",
      "topics": [
        "foundations/natural-deduction",
        "foundations/formal-proof"
      ],
      "title": "句子前提的演绎定理",
      "statement": "对句子 α，有 Γ∪{α}⊢β 当且仅当 Γ⊢α→β。",
      "dependencies": [
        "def-hilbert-fol"
      ],
      "idea": "对使用 α 的证明归纳，把每一行改写成以 α 为前件的蕴含。",
      "steps": [
        "反向直接用 α 和 modus ponens。正向看每行 θ：若 θ 是 Γ 前提或公理，命题重言式 θ→(α→θ) 给 α→θ；若该行是 α，用重言式 α→α。",
        "若 θ 由 ψ 与 ψ→θ 经 MP 得到，归纳已有 α→ψ、α→(ψ→θ)，使用命题重言式 (α→(ψ→θ))→((α→ψ)→(α→θ))，两次 MP 得到 α→θ。",
        "若 θ=∀xψ 来自概括，先对 α→ψ 概括得 ∀x(α→ψ)，因 α 为句子，x 不自由出现于 α，可用全称分配公理得到 α→∀xψ。故最后一行也可转换，证明演绎定理。$\\square$"
      ]
    },
    {
      "id": "henkin-witness-consistency",
      "topics": [
        "foundations/consistency",
        "foundations/classification-of-models"
      ],
      "title": "新常元见证保持相容性",
      "statement": "若句子理论 Γ 相容、∃xφ(x) 为旧语言句子且 c 是新常元，则 Γ 加见证公理 ∃xφ(x)→φ(c) 仍相容。",
      "dependencies": [
        "fol-deduction",
        "syntax-parse-substitute",
        "def-hilbert-fol"
      ],
      "idea": "若见证公理造成矛盾，旧理论必须同时推出存在句及对所有元素的反例。",
      "steps": [
        "反设加入后可证矛盾。演绎定理及经典命题推理使 Γ⊢¬(∃xφ→φ(c))，所以 Γ⊢∃xφ 且 Γ⊢¬φ(c)。",
        "后一个证明有限，c 不在 Γ 或 φ 中。先把证明中可能冲突的绑定变量改名，再将所有 c 换成一个新变量 y；按语法和规则逐行检查，公理实例仍是公理实例，MP 保持，概括限制因 Γ 为句子而不受影响。所以 Γ⊢¬φ(y)。",
        "概括得到 Γ⊢∀y¬φ(y)，即 Γ⊢¬∃xφ，与第一步的存在句矛盾。因此加入见证公理保持相容。无新常元公理时，扩充一个空常元也不破坏相容性，同样的有限证明替换论证即可。$\\square$"
      ]
    },
    {
      "id": "henkin-extension",
      "topics": [
        "foundations/compactness",
        "foundations/classification-of-models"
      ],
      "title": "可数相容理论的完备 Henkin 扩张",
      "statement": "每个可数语言中的相容句子理论 Γ，可在可数扩充语言中扩为相容、演绎封闭、对每句子作决定并含全部存在见证的理论 T。",
      "dependencies": [
        "henkin-witness-consistency",
        "fol-deduction",
        "axiom-dependent-choice"
      ],
      "idea": "分层添加见证，再逐句选择一个不导致矛盾的真值；有限证明不能跨过相容链的极限。",
      "steps": [
        "先必要时加一个新常元以保证有闭项。对当前语言的全部存在句枚举，逐个加入新常元见证。每一步按前一引理相容，整条链的并也相容：若有矛盾证明，它只用有限多新公理，已出现在某有限阶段，矛盾。",
        "添加后出现的新常元又产生新存在句，所以把这个过程对语言层级重复可数次。所得 L_ω 仍可数，每个公式只含有限符号，属于某层，故它的见证会在下一层加入。全体见证理论仍由有限证明论证保持相容。",
        "枚举 L_ω 所有句子 θ_n。逐次若加入 θ_n 相容就加入，否则加入 ¬θ_n。后者必相容：若两种扩张都不相容，演绎定理给当前理论同时证明 θ_n 与 ¬θ_n，违背原相容。",
        "取并，再取演绎闭包 T。并的相容性同样由有限证明保证，取闭包不新增可导矛盾。T 对每句子至少取一边，相容性使不能两边都取，且保留全部见证。$\\square$"
      ]
    },
    {
      "id": "henkin-model",
      "topics": [
        "foundations/classification-of-models",
        "foundations/structure-interpretation",
        "foundations/satisfaction"
      ],
      "title": "Henkin 项模型与真值引理",
      "statement": "每个相容、完备且有存在见证的 T，具有一个由闭项等价类组成的可数模型 M，并对每个带闭项参数的公式有 M⊨φ 当且仅当 φ∈T。",
      "dependencies": [
        "henkin-extension",
        "syntax-parse-substitute",
        "def-hilbert-fol"
      ],
      "idea": "把可证明相等的项识别，原子真值直接由 T 定义，再用见证完成量词步。",
      "steps": [
        "闭项 t,s 按 T⊢t=s 等价。等号公理给自反、对称、传递及函数/谓词替换一致性，所以函数取项运算的等价类、谓词按原子句是否在 T 定义，全部良定义。常元保证论域非空；可数字母表上有限项可枚举，所以模型至多可数。",
        "项解释按结构归纳恰为该项的等价类，因此等号与谓词原子式满足所述等价。T 完备相容及含全部命题重言式，使否定的成员关系对应“不在 T”，蕴含成员关系对应经典真值表；所以联结词归纳成立。",
        "若 ∀xφ∈T，全称实例公理使对每个闭项 t 都有 φ(t)∈T，归纳假设给模型中全部元素满足 φ。反之若全称句不在 T，完备性给 ∃x¬φ∈T；见证常元 c 使 ¬φ(c)∈T，从而全称式在模型中假。",
        "对自由变量赋任一等价类，可选闭项代表并代入；语义代入引理及等号替换使选择无关。由公式归纳得到完整真值引理，特别 T 的每个句子在 M 中真。$\\square$"
      ]
    },
    {
      "id": "fol-completeness-compactness",
      "topics": [
        "foundations/soundness-completeness",
        "foundations/compactness"
      ],
      "title": "可数一阶逻辑的完备性与紧致性",
      "statement": "可数语言中的句子理论满足 Γ⊨φ 当且仅当 Γ⊢φ。若 Γ 的每个有限子集有模型，则 Γ 本身有模型。",
      "dependencies": [
        "henkin-model",
        "henkin-extension",
        "fol-soundness",
        "fol-deduction"
      ],
      "idea": "不可证明时加入结论否定，构造反模型；紧致性则由有限证明只用有限前提得到。",
      "steps": [
        "若 Γ⊬φ，演绎定理与经典双重否定说明 Γ∪{¬φ} 相容，否则 Γ 可推出 φ。Henkin 扩张及项模型给它的模型，满足 Γ 却不满足 φ，所以 Γ⊭φ。可靠性已给相反方向，于是语义蕴含与可证明性等价。",
        "若 Γ 每个有限子集可满足而 Γ 不相容，某个有限证明推出矛盾，只用有限多 Γ 前提。可靠性使该有限前提不能有模型，与假设矛盾。因此 Γ 相容，再用模型存在构造得到 Γ 的模型。",
        "本章明确采用可数签名版本；任意不可数语言的完整版本需要相应超限见证/极大化构造，不能把可数枚举步骤直接称为其证明。结论与算术理论不完备性不冲突，因为这里比较所有模型的逻辑蕴含。$\\square$"
      ]
    },
    {
      "id": "dlo-equivalence",
      "topics": [
        "foundations/elementary-equivalence",
        "foundations/classification-of-models"
      ],
      "title": "稠密无端点线序的一阶等价性",
      "statement": "仅含 < 与等号语言中，任意两个非空稠密无端点线序满足相同一阶句子；更强地，保持次序及相等模式的有限元组对所有公式有相同真值。",
      "dependencies": [
        "syntax-parse-substitute",
        "axiom-logic"
      ],
      "idea": "有限元组的新元素只可能落在某个间隙或等于旧元素，两结构都能实现同样位置。",
      "steps": [
        "原子式只比较元组中的大小及相等，所以次序模式相同就同真。布尔联结词按真值表保留此性质。对公式复杂度作归纳，关键只剩存在量词。",
        "若第一结构中有见证 a，a 要么等于已有元组元素，要么位于相邻已知元素之间或两端以外。第二结构可选对应相等元素；在真间隙用稠密性选点，在两端以外用无端点性选点。空元组时用论域非空。",
        "于是扩充元组仍有相同模式，对量词内较简单公式用归纳假设，见证可转移；交换两结构给反向。全称量词由否定存在得到，所以所有公式均转移，空元组给相同句子理论。$\\square$"
      ]
    },
    {
      "id": "finite-proof-checking",
      "topics": [
        "foundations/formal-proof",
        "foundations/proof-assistants"
      ],
      "title": "有限证明检查的终止与条件可靠性",
      "statement": "若形式系统每条推理规则的实例可判定且语义有效，则有限带规则标注的证明树可由总停机检查器验证，接受的结论确为相应前提的语义后果。",
      "dependencies": [
        "fol-soundness",
        "axiom-natural"
      ],
      "idea": "算法只遍历给定有限树；可靠性沿同一树归纳，不需要搜索所有可能证明。",
      "steps": [
        "从叶到根遍历有限树，每节点检查规则名、前提数、变量条件及结论是否匹配该可判定规则；每次局部检查停机，节点总数有限，所以全检查停机。缺失子节点、循环指针等不构成有限树者先以有限图遍历拒绝。",
        "若接受，叶节点是允许前提或公理。对树高度归纳，子结论在每个前提模型中真，规则语义有效性使父结论也真；故根结论成立。该定理把信任落在规则实现和前提上，不证明任意具体软件没有实现缺陷。$\\square$"
      ]
    },
    {
      "id": "oracle-transitivity",
      "topics": [
        "foundations/turing-reduction",
        "foundations/turing-machine"
      ],
      "title": "图灵归约的传递性",
      "statement": "若 A≤_T B 且 B≤_T C，则 A≤_T C；可判定 A 总有 A≤_T B。",
      "dependencies": [
        "axiom-computation"
      ],
      "idea": "用第二台带神谕机器逐次替换第一台的每个神谕调用。",
      "steps": [
        "给定输入，模拟判定 A 的 B 神谕机。每当它查询某个 y∈B，调用能借 C 神谕判定 B 的机器，等该子程序停机后将回答送回外层模拟。",
        "外层原本对该输入有限步终止，因此只提出有限次查询；每个内层查询也按归约假设有限步终止。有限个有限计算组合仍有限，并给同样正确回答，所以得到 A 的 C 神谕判定器。",
        "若 A 已可判定，直接运行其判定器并忽略神谕就是对任意 B 的归约。这一证明不提供任何多项式时间保证。$\\square$"
      ]
    },
    {
      "id": "enumeration-semidecision",
      "topics": [
        "foundations/enumerability",
        "foundations/turing-machine"
      ],
      "title": "可枚举与半可判定的等价",
      "statement": "允许重复及空输出的程序枚举的语言，恰好是由半判定器接受的语言。",
      "dependencies": [
        "axiom-computation"
      ],
      "idea": "枚举器可等待目标输出；半判定器可对所有输入交错模拟，避免死循环阻塞。",
      "steps": [
        "若有枚举器，对输入 w 不断模拟并比较每次输出，首次等于 w 就接受；成员最终出现而被接受，非成员永不接受，所以半判定成立。",
        "若有半判定器 M，按可数字符串枚举 w₁,w₂,…。第 s 阶段把前 s 个模拟各推进一步，某模拟首次接受便输出其字符串。每个已接受输出都是成员；每个成员所需的有限步最终都得到执行，所以必输出。空语言由始终不输出的枚举器覆盖。$\\square$"
      ]
    },
    {
      "id": "stlc-substitution",
      "topics": [
        "foundations/simple-types",
        "foundations/propositions-as-types"
      ],
      "title": "简单类型 λ 演算的代入与 β 保型",
      "statement": "在变量、应用与抽象的标准类型规则下，Γ,x:A⊢t:B 且 Γ⊢s:A，推出 Γ⊢t[s/x]:B；因此 β 约简保持类型。",
      "dependencies": [
        "syntax-parse-substitute",
        "axiom-natural"
      ],
      "idea": "对类型推导作归纳，抽象步先改名避免捕获；β 步随后直接调用代入。",
      "steps": [
        "先证明弱化：在环境增加未冲突声明后，原类型推导逐节点仍合法，按推导高度归纳即可。对代入推导归纳，若 t=x，直接用 s 的给定类型；其他变量沿用 Γ 声明。",
        "应用 t=uv 时，由归纳假设 u[s/x] 保持箭头类型、v[s/x] 保持输入类型，再应用类型规则。抽象 λy:C.u 时先改名使 y≠x 且 y 不在 s 自由变量中；弱化使 s 在 Γ,y:C 下仍有类型 A，归纳得到代入后的体具有原类型，再重建抽象。",
        "若 (λx:A.t)s:B 为良类型，规则反演给出体 t:B 与参数 s:A，代入引理使 β 结果 t[s/x]:B。发生在子项的约简则按应用或抽象的上下文规则重建推导，故全部一步 β 约简保型。反复有限步同理，但不由此单独推出所有约简终止。$\\square$"
      ]
    },
    {
      "id": "list-induction-length",
      "topics": [
        "foundations/inductive-types",
        "foundations/dependent-types"
      ],
      "title": "列表拼接的长度定理与非空向量的头元素",
      "statement": "归纳列表的拼接满足 len(xs++ys)=len(xs)+len(ys)。若 Vec(A,n) 的构造子仅 nil:Vec(A,0)、cons:A×Vec(A,n)→Vec(A,n+1)，则 head 可总定义于 Vec(A,n+1)。",
      "dependencies": [
        "axiom-natural"
      ],
      "idea": "列表性质按构造子归纳；长度索引排除空构造子。",
      "steps": [
        "拼接按 []++ys=ys、(a::xs)++ys=a::(xs++ys) 递归。空列表时长度式为 len ys=0+len ys；cons 情形，长度为 1+len(xs++ys)，用归纳假设得 1+len xs+len ys，正是右边。",
        "非空索引 n+1 不可能等于零，因为自然数零与后继构造子不交。因此 Vec(A,n+1) 的值不可能由 nil 产生，只能为某 cons(a,v)。定义 head(cons(a,v))=a，所有允许构造情形均覆盖且返回 A，故为所列输入类型上的总函数。$\\square$"
      ]
    },
    {
      "id": "adjoint-unique",
      "topics": [
        "foundations/adjunction",
        "foundations/limits-colimits"
      ],
      "title": "左伴随在自然同构意义下唯一",
      "statement": "若 F,F′ 都满足对同一 G 的左伴随泛性质，则存在唯一与两组单位相容的自然同构 F⇒F′。",
      "dependencies": [
        "universal-unique",
        "def-category"
      ],
      "idea": "每个自由对象的泛性质给正反态射，唯一性使其互逆并迫使自然性。",
      "steps": [
        "用单位 η_X:X→GFX、η′_X:X→GF′X 表达伴随：任意 X→GY 都唯一分解为 G(u)η_X。对 η′_X 应用 F 的泛性质给 u_X:FX→F′X，满足 G(u_X)η_X=η′_X；反向同理给 v_X。",
        "两次代入后，G(v_Xu_X)η_X=η_X，恒等也满足；唯一性迫使 v_Xu_X=id，另方向同样，所以各分量同构。",
        "对 f:X→Y，F′f·u_X 与 u_Y·Ff 在作用 G 后再接 η_X 都等于 η′_Y f。单位的自然性来自伴随 Hom 对应的自然性（或作为单位泛性质的相容条件），所以唯一性使两态射相等，得到自然同构。每分量的唯一性给整变换唯一。$\\square$"
      ]
    },
    {
      "id": "transfinite-induction",
      "topics": [
        "foundations/ordinals",
        "foundations/ordinal-analysis"
      ],
      "title": "良序上的超限归纳原理",
      "statement": "若 (W,<) 为良序，性质 P 满足每个 x 在全部严格前驱满足 P 时也满足 P，则 W 中所有元素满足 P。",
      "dependencies": [
        "axiom-set"
      ],
      "idea": "非空反例集必有最小反例，其前驱已经全部正确。",
      "steps": [
        "反设反例集 C={x∈W:¬P(x)} 非空。良序定义给其最小元素 c。任意 y<c 若不满足 P 就是更小反例，与 c 最小矛盾，所以全部前驱都满足。",
        "由归纳假设条件，c 也满足 P，矛盾。因此反例集空。本定理把良序性当作明确前提；不能据此未经证明就断言任意序数记号系统在某个弱算术理论中可证良基。$\\square$"
      ]
    },
    {
      "id": "master-theorem-three-cases",
      "topics": [
        "discrete/divide-conquer",
        "discrete/recurrences"
      ],
      "title": "主定理的三种一般情形及正则条件",
      "statement": "设b>1、a≥1，n只取b^m，T(1)>0，T(n)=aT(n/b)+f(n)，f非负，α=log_ba。(1)若f(n)=O(n^(α−ε))，ε>0，则T=Θ(n^α)；(2)若f=Θ(n^α)，则T=Θ(n^α log n)；(3)若f(n)=Ω(n^(α+ε))且存在c<1使a f(n/b)≤c f(n)最终成立，则T=Θ(f(n))。",
      "dependencies": [
        "master-polynomial"
      ],
      "idea": "归一化为T(b^m)/a^m后逐层求和；第三种情形的正则条件保证各层代价几何下降。",
      "steps": [
        "令t_m=T(b^m)、f_m=f(b^m)，递推逐次展开给 t_m=a^mT(1)+Σ_(j=1)^m a^(m−j)f_j。于是 t_m/a^m=T(1)+Σ_(j=1)^m f_j/a^j。这是后面三种估计共同的精确恒等式，所有项非负。",
        "第一种情形，对充分大j有f_j/a^j≤C b^(−εj)。几何级数收敛，加上有限个初始项，归一化和统一有界；下界T(1)>0给t_m≥a^mT(1)，故Θ(a^m)=Θ(n^α)。",
        "第二种情形，充分大j的f_j/a^j被两个严格正常数夹住。因此归一化和为Θ(m)，得到t_m=Θ(a^m m)=Θ(n^α log n)。有限初始层不改渐近阶。",
        "第三种情形，选j₀使a f_(j−1)≤c f_j对j≥j₀成立。对j₀≤j≤m，反复使用该式得 a^(m−j)f_j≤c^(m−j)f_m。故这些层之和≤f_m/(1−c)。前面有限层及叶代价合计O(a^m)，而增长假设f_m≥C a^m b^(εm)最终成立，使O(a^m)=O(f_m)。所以t_m=O(f_m)，根层自身给t_m≥f_m，得到Θ(f_m)。",
        "只写T(n)=aT(n/b)+f(n)并不自动满足三个情形之一；尤其第三种情形不能漏掉所列正则条件。本定理在精确规模b^m上证明，不未经说明地处理取整后的任意规模递推。$\\square$"
      ]
    },
    {
      "id": "master-logarithmic-borderline",
      "topics": [
        "discrete/divide-conquer",
        "discrete/recurrences"
      ],
      "title": "临界多对数代价的递推估计",
      "statement": "在同样的非负递推及n=b^m、α=log_ba下，若对n≥b有f(n)=Θ(n^α(log n)^k)，k为任意固定实数，则k>−1时T=Θ(n^α(log n)^(k+1))；k=−1时T=Θ(n^α log log n)；k<−1时T=Θ(n^α)。",
      "dependencies": [
        "master-theorem-three-cases",
        "ftc-second"
      ],
      "idea": "临界情况下每层的归一化代价是j^k，所求阶取决于其部分和。",
      "steps": [
        "因log(b^j)=j log b，归一化代价f(b^j)/a^j=Θ(j^k)，其中(log b)^k为固定正常数。精确展开给T(b^m)/a^m=T(1)+Σ_(j=1)^m Θ(j^k)，有限初始项只改变常数。",
        "对k≥0，单调递增的x^k用区间积分夹住求和，得到Σ_(j≤m)j^k=Θ(m^(k+1))。对−1<k<0，同样用递减函数的相邻区间积分比较，仍得同一阶。k=−1时调和和与∫₁^m dx/x比较，阶为log m；k<−1时正项级数由无穷积分比较收敛，部分和因首项为1而上下均有正常数界。",
        "代回m=log_b n及a^m=n^α，得到所列三种结果。log log n公式只作n趋无穷的渐近陈述，有限的小n不存在取对数的定义问题。$\\square$"
      ]
    },
    {
      "id": "edge-menger-finite",
      "topics": [
        "discrete/paths-connectivity",
        "discrete/network-flows"
      ],
      "title": "有限图的边不交 Menger 定理",
      "statement": "有限有向图中不同顶点s,t之间边不交有向路径最大数，等于删除后使s不能到达t的最少有向边数。有限无向图的对应结论也成立，允许平行边。",
      "dependencies": [
        "maxflow-mincut"
      ],
      "idea": "每条边置单位容量，整数最大流分解成路径；无向边用双向弧时先抵消相反方向流。",
      "steps": [
        "有向图每条弧容量1。整数最大流存在，其值为最小s—t割容量，而该容量就是从s侧出到t侧的弧数。任意阻断s到t的删边集D，删后令S为从s仍可达的顶点，t不在S，原图从S到外部的弧全在D，故最小割大小不超过|D|；反向删去割弧自然阻断。因此最小删边数等于最小割。",
        "分解整数流：先消去正流有向环，每次沿环减去1，保持流值并减少正流边数。余流无正环。若流值正，从s沿正流弧前进，内部点由流守恒必有正流出弧，因无环且图有限，最终抵达t。沿该路径减1，流值减1，重复至零。每弧原容量1，所以得到的路径边不相交。反向k条边不交路径各送1单位流，给流值k，完成有向等式。",
        "无向图把每条边变为两个反向单位弧。若整数流在同一无向边两方向同时为1，将两者减1，不改各顶点流守恒与流值。之后每条无向边至多一个方向有正流，按上一步分解得到边不交无向路径。双向网络的s—t割每条跨界无向边只计离开S的那条弧，因此割容量正好是无向跨界边数，得相同结论。$\\square$"
      ]
    },
    {
      "id": "rational-density",
      "topics": [
        "analysis/completeness-reals",
        "analysis/measurable-functions"
      ],
      "title": "有理数在实数中的稠密性",
      "statement": "任意实数 a<b 之间都存在有理数 q，即存在 q∈Q 使 a<q<b。",
      "dependencies": [
        "archimedean",
        "axiom-natural",
        "axiom-real"
      ],
      "idea": "先用 Archimedes 性质把区间放大到长度大于一，再在有限整数区间中选最小的越过端点的整数。",
      "steps": [
        "由 Archimedes 性质取正整数 n，使 n(b−a)>1，等价于 1/n<b−a。再取正整数 M>|na|+2；于是区间 [−M,M] 中的整数集合有限，并包含至少一个大于 na 的整数 M。",
        "在有限集合 {k∈Z:−M≤k≤M 且 k>na} 中取最小元素 m。m>na；且 m−1≤na，否则 m−1 也是集合中的整数并小于 m，违反最小性。因此 0<m−na≤1。",
        "令 q=m/n。因 n>0，na<m 给 a<q；又 m≤na+1 给 q≤a+1/n<b。故 a<q<b 且 q 为有理数，证明稠密性。有限有序集合有最小元由有限个整数逐一比较即可。$\\\\square$"
      ]
    },
    {
      "id": "pointwise-limit-measurable",
      "topics": [
        "analysis/measurable-functions",
        "analysis/function-sequences"
      ],
      "title": "实值可测函数列的逐点极限可测",
      "statement": "设 (X,Σ) 是可测空间，每个 f_n:X→R 关于 Σ 与 R 的 Borel σ 代数可测，并且对每个 x，f_n(x)→f(x)∈R。则 f 可测。",
      "dependencies": [
        "axiom-measure",
        "rational-density"
      ],
      "idea": "把极限值严格大于阈值写成有理阈值以上的最终下界事件的可数并。",
      "steps": [
        "先证判据：实值函数 g 可测，当且仅当每个开射线原像 {g>a} 属于 Σ。正向由 (a,∞) 是 Borel 集。反向，任意开集 O⊆R 是所有包含于 O 的有理端点开区间 (p,q) 的并；这些区间至多可数，因为 Q×Q 可数。若 x∈O，则可在 O 中含 x 的小开区间两侧各取一个有理数，故该并确为 O。又 {p<g<q}={g>p}∩{g<q}，而由有理稠密性 {g<q}=∪_(r∈Q,r<q){g≤r}=∪_(r∈Q,r<q)(X\\\\{g>r})。所以所有开集的原像均可测。",
        "固定任意 a∈R。对有理 q>a 与整数 N≥1，令 E_(q,N)=∩_(n≥N){x:f_n(x)>q}。各 {f_n>q} 可测，σ 代数对可数交封闭，故 E_(q,N) 可测；再令 E=∪_(q∈Q,q>a)∪_(N≥1)E_(q,N)，它仍可测。",
        "若 f(x)>a，由有理稠密性可取 q∈Q 使 a<q<f(x)。取 δ=(f(x)−q)/2>0。由 f_n(x)→f(x)，存在 N 使 n≥N 时 |f_n(x)−f(x)|<δ，故 f_n(x)>f(x)−δ>q。因此 x∈E_(q,N)⊆E。",
        "反过来，若 x∈E，则存在 q∈Q、q>a 与 N，使所有 n≥N 都有 f_n(x)>q。令 n 趋于无穷并使用 f_n(x)→f(x)，得到 f(x)≥q>a，故 x∈{f>a}。因此 {f>a}=E。",
        "对每个实数 a，集合 {f>a} 可测。由第一步判据，f 的每个开集原像可测，即 f 是 Borel 可测函数。结论限于逐点收敛到有限实值函数；扩展实值版本还须处理无穷阈值。$\\\\square$"
      ]
    },
    {
      "id": "egorov",
      "topics": [
        "analysis/measurable-functions",
        "analysis/function-sequences",
        "analysis/integration-limits"
      ],
      "title": "Egorov 定理",
      "statement": "设 (X,Σ,μ) 是有限测度空间，f_n 与 f 为实值可测函数，且 f_n→f 几乎处处。则对每个 ε>0，存在可测集 F⊆X，使 μ(X\\F)<ε，并且 f_n 在 F 上一致收敛到 f。",
      "dependencies": [
        "axiom-measure",
        "measure-continuity",
        "measure-countable-subadditivity",
        "pointwise-limit-measurable"
      ],
      "idea": "对每个精度 1/k，取函数列从某个下标起在几乎全体点上都进入该精度带；有限测度下连续性使这些集合的大测度部分最终出现。",
      "steps": [
        "取可测零集 N，使对每个 x∈X\\N 都有 f_n(x)→f(x)。若原“几乎处处”定义只给出包含异常点的零集，直接采用该可测零集。固定 k,N₀∈N，定义 A_(k,N₀)=(X\\N)∩∩_(n≥N₀){x:|f_n(x)−f(x)|≤1/k}。绝对值差是可测函数的连续复合，故每个阈值集可测；可数交后 A_(k,N₀) 仍可测。",
        "固定 k，集合 A_(k,N₀) 随 N₀ 递增。其并为 X\\N：包含关系显然；反过来，对任意 x∈X\\N，收敛定义给出某个 N₀，使所有 n≥N₀ 的误差小于 1/k，因而 x∈A_(k,N₀)。",
        "由测度对递增集列的下连续性，μ(A_(k,N₀))↑μ(X\\N)=μ(X)。因此可选 N_k，使 μ((X\\N)\\A_(k,N_k))<ε/2^(k+1)。令 F=∩_(k≥1)A_(k,N_k)。它可测，且 X\\F=N∪∪_(k≥1)((X\\N)\\A_(k,N_k))。可数次可加性给 μ(X\\F)≤μ(N)+Σ_(k≥1)ε/2^(k+1)=ε/2<ε。",
        "验证一致收敛：给定 δ>0，取 k 使 1/k<δ。若 n≥N_k 且 x∈F⊆A_(k,N_k)，定义即给 |f_n(x)−f(x)|≤1/k<δ。该 N_k 与 x 无关，所以在 F 上一致收敛。有限测度假设用于令 μ(A_(k,N₀)) 趋于有限的 μ(X) 并控制补集；在无限测度空间此结论一般不成立。$\\square$"
      ]
    },
    {
      "id": "continuous-borel-measurable",
      "topics": [
        "analysis/measurable-functions",
        "analysis/continuity-uniform"
      ],
      "title": "连续映射关于 Borel σ 代数可测",
      "statement": "设 X 是拓扑空间，赋予其 Borel σ 代数；若 f:X→R 连续，则 f 关于 X 的 Borel σ 代数与 R 的 Borel σ 代数可测。",
      "dependencies": [
        "axiom-topology",
        "axiom-measure"
      ],
      "idea": "把 f 原像可测的实数子集收集成 σ 代数；该 σ 代数含所有开集，故含由开集生成的全部 Borel 集。",
      "steps": [
        "记 B(X) 为由 X 的开集生成的 Borel σ 代数。定义 C={A⊆R:f⁻¹(A)∈B(X)}。由于 f⁻¹(R)=X，R∈C；且 f⁻¹(R\\A)=X\\f⁻¹(A)，若 A∈C 则补集也在 C。",
        "若 A_j∈C，则 f⁻¹(∪_(j≥1)A_j)=∪_(j≥1)f⁻¹(A_j)。B(X) 对可数并封闭，因此并集也在 C。以上说明 C 是 R 上的 σ 代数。",
        "若 U⊆R 开，连续性的定义给出 f⁻¹(U) 在 X 中开；每个开集都属于 B(X)，所以 U∈C。于是 C 是一个包含所有实数开集的 σ 代数。Borel σ 代数 B(R) 是包含所有开集的最小 σ 代数，故 B(R)⊆C。",
        "因此任意 B∈B(R) 都满足 f⁻¹(B)∈B(X)，这正是 f 的 Borel 可测性。若 X 另给一个比 B(X) 更小的 σ 代数，连续性本身不能保证相对于那个 σ 代数可测。$\\square$"
      ]
    },
    {
      "id": "dirichlet-indicator",
      "topics": [
        "analysis/measurable-functions",
        "analysis/lebesgue-integral",
        "analysis/integration-calculus"
      ],
      "title": "有理数指标函数的可测性与两种积分",
      "statement": "在 [0,1] 上定义 D(x)=1（x 有理）及 D(x)=0（x 无理）。则 D 是 Borel 可测，Lebesgue 可积且积分为 0，但不是 Darboux-Riemann 可积。",
      "dependencies": [
        "axiom-measure",
        "axiom-lebesgue",
        "axiom-riemann",
        "axiom-natural",
        "rational-density",
        "archimedean"
      ],
      "idea": "有理点集是零测的可数 Borel 集；而每个非退化区间同时含有有理数和无理数。",
      "steps": [
        "有理数可写成 p/q，其中 p∈Z、q∈N。整数对可按 |p|+q 递增分层，每一层有限，故可数；其像 Q∩[0,1] 至多可数。单点集在 [0,1] 中闭，故 Q∩[0,1] 是闭集的可数并，属于 Borel σ 代数。对任意 Borel 集 B⊆R，D⁻¹(B) 只可能是 ∅、Q∩[0,1]、其补集或全体，皆 Borel，所以 D 可测。",
        "每个单点 {q} 的 Lebesgue 测度为零：对每个 δ>0，它包含在 [q−δ,q+δ]∩[0,1] 中，该区间测度至多 2δ；由单调性并令 δ↓0 得 μ({q})=0。将有理数集写成单点的可数并，测度的可数次可加性（或由不交化后可数可加性）给 μ(Q∩[0,1])=0。D 是该零测集的指标函数，故按非负简单函数积分定义，∫_[0,1]D dμ=μ(Q∩[0,1])=0，当然有限。",
        "现证任意开区间 (a,b)⊆[0,1]、a<b 都同时含有有理数和无理数。有理数由稠密性直接得到。再取 q∈Q 使 a<q<(a+b)/2。整数平方的奇偶性证明 √2 无理：若 √2=u/v 为既约整数分数，则 u²=2v² 使 u 为偶数；写 u=2w 后得 v²=2w²，v 也为偶数，矛盾。",
        "由 Archimedes 性质取 n∈N 充分大，使 0<√2/n<b−q。则 x=q+√2/n 满足 a<x<b；若 x 有理，则 √2=n(x−q) 有理，与已证矛盾。因此每个这样的区间含无理点。",
        "任取 [0,1] 的分割。每个正长度小区间内 D 的上确界为 1、下确界为 0，所以每个分割的 Darboux 上和都是 ΣΔx=1，下和都是 0。上积分 1 与下积分 0 不相等，依 Darboux 可积定义，D 不黎曼可积。证明同时说明域与测度：更换区间或更换测度时，积分结论须重新检查。$\\square$"
      ]
    },
    {
      "id": "measurable-algebra-operations",
      "topics": [
        "analysis/measurable-functions",
        "analysis/lebesgue-integral"
      ],
      "title": "可测函数的代数运算封闭性",
      "statement": "在可测空间 (X,Σ) 上，若有限实值 f,g 可测，则 f+g、f−g、fg、|f|、max(f,g)、min(f,g) 及任意常数倍 cf 都可测。",
      "dependencies": [
        "axiom-measure",
        "pointwise-limit-measurable",
        "continuous-borel-measurable"
      ],
      "idea": "先用有理数阈值表达和函数的上水平集，再用连续函数复合及平方恒等式处理其他运算。",
      "steps": [
        "用已证的上水平集判据，函数 h:X→R 可测等价于所有 {h>a} 可测。固定 a∈R。我们证明 {f+g>a}=∪_(q∈Q)({f>q}∩{g>a−q})。若 f(x)+g(x)>a，则 a−g(x)<f(x)，有理稠密性给 q 使 a−g(x)<q<f(x)，故 x 在右侧。反之，右侧某个 q 满足 f(x)>q 且 g(x)>a−q，相加即得 f(x)+g(x)>a。",
        "右侧是可数个可测集交的并，属于 Σ，所以每个 {f+g>a} 可测，f+g 可测。若 c>0，{cf>a}={f>a/c}；若 c<0，{cf>a}={f<a/c}，而 {f<b}=∪_(r∈Q,r<b){f≤r}=∪_(r∈Q,r<b)(X\\{f>r})，仍可测。c=0 时 cf 是常值零函数，可测。于是 −g 与 f−g 均可测。",
        "对任意 a，{max(f,g)>a}={f>a}∪{g>a}；且 {min(f,g)>a}={f>a}∩{g>a}，所以最大值与最小值可测。绝对值满足 |f|=max(f,−f)，也可测。",
        "若 u 可测且 φ:R→R 连续，则 φ∘u 可测：对任意 Borel 集 B，φ⁻¹(B) 是 Borel 集（连续映射的逆像把开集送到开集，并与补、可数并相容）；再由 u 的可测性，u⁻¹(φ⁻¹(B))∈Σ。特别 u² 可测。由恒等式 fg=((f+g)²−(f−g)²)/4，乘积也可测，因为前面已证明平方、差及常数倍保持可测。这里函数有限值，故各代数表达处处有定义；商函数须另处理分母零点。$\\square$"
      ]
    },
    {
      "id": "measure-countable-subadditivity",
      "topics": [
        "analysis/measures",
        "analysis/sigma-algebras"
      ],
      "title": "测度的可数次次可加性",
      "statement": "对任意测度空间 (X,Σ,μ) 与可测集列 A_n，有 μ(∪_(n≥1)A_n)≤Σ_(n≥1)μ(A_n)，允许无穷。",
      "dependencies": [
        "axiom-measure"
      ],
      "idea": "把集合列逐项去除以前出现的部分，得到不交化，再用测度单调性与可数可加性。",
      "steps": [
        "令 D₁=A₁，并对 n≥2 令 D_n=A_n\\(∪_(j<n)A_j)。σ 代数对有限并及差封闭，所以 D_n 可测。若 i<n，则 D_n 排除了 A_i，故 D_i 与 D_n 不交；逐项检查也得 ∪_nD_n=∪_nA_n。",
        "先由测度公理推出单调性：若 E⊆F 且二者可测，则 F=E∪(F\\E) 是不交并，于是 μ(F)=μ(E)+μ(F\\E)≥μ(E)，等式在无穷值下按扩展非负实数理解。因此 μ(D_n)≤μ(A_n)。",
        "对不交列 D_n 用可数可加性，μ(∪A_n)=μ(∪D_n)=Σμ(D_n)≤Σμ(A_n)。最后的不等式可先对有限部分和逐项比较，再取非降极限；若右侧为无穷，结论直接成立。$\\square$"
      ]
    },
    {
      "id": "generated-sigma-algebra",
      "topics": [
        "analysis/sigma-algebras",
        "analysis/measures"
      ],
      "title": "生成 σ 代数的交表示与最小性",
      "statement": "给定集合 X 及其子集族 C，包含 C 的 σ 代数至少有一个；所有这类 σ 代数的交仍为 σ 代数，且是包含 C 的最小 σ 代数，记为 σ(C)。",
      "dependencies": [
        "axiom-set",
        "axiom-measure"
      ],
      "idea": "幂集给出候选族非空；逐项从 σ 代数公理验证交仍封闭。",
      "steps": [
        "令 F={S⊆P(X):S 是 σ 代数且 C⊆S}。幂集 P(X) 本身是 σ 代数并包含 C，所以 F 非空。定义 S₀=∩_(S∈F)S。",
        "每个 S∈F 都含 X，故 X∈S₀。若 A∈S₀，则 A 属于每个 S，故 X\\A 属于每个 S，因而属于 S₀。若 A_n∈S₀ 对所有 n 成立，则每个 S 都含全部 A_n，并由其对可数并封闭含 ∪A_n；所以 ∪A_n∈S₀。故 S₀ 是 σ 代数。",
        "由于 C 被每个 F 中的成员包含，C⊆S₀。若 T 是任意包含 C 的 σ 代数，则 T∈F；交 S₀ 因而包含于 T。故 S₀ 包含 C 且包含于每个其他候选 σ 代数，是唯一最小者，定义 σ(C)=S₀。$\\square$"
      ]
    },
    {
      "id": "propositional-completeness",
      "topics": [
        "foundations/propositional-logic",
        "foundations/soundness-completeness"
      ],
      "title": "命题逻辑的真值表完备性",
      "statement": "在经典命题演算中，一个命题公式若在所有赋值下为真，则可由重言式公理及 modus ponens 证明。",
      "dependencies": [
        "axiom-logic",
        "fol-deduction"
      ],
      "idea": "对变元逐个分支；演绎定理把两个分支合并。",
      "steps": [
        "固定公式出现的有限变元 p₁,…,pₙ。对任一完整文字合取 δ，即每个 p_i 取 p_i 或 ¬p_i，若 δ 的赋值使公式 φ 为真，则命题重言式 δ→φ 可直接作为公理，MP 得 δ→φ。",
        "对任一尚未决定的变量 p，归纳假设已得 (Γ∪{p})⊢φ 与 (Γ∪{¬p})⊢φ，其中 Γ 是此前分支文字。由演绎定理得 Γ⊢p→φ 及 Γ⊢¬p→φ；命题重言式 ((p→φ)∧(¬p→φ))→φ，加经典演算可推出 Γ⊢φ。等价地，分情况论证：p∨¬p 为重言式，两支均推出 φ。",
        "从 n 个文字叶逐层合并，得到空前提 ⊢φ。有限分支树深度 n，故证明有限。这里的“命题演算”必须包含经典排中律；直觉主义演算不证明所有经典重言式。$\\square$"
      ]
    },
    {
      "id": "finite-markov-stationary",
      "topics": [
        "probability/markov-chains",
        "probability/stationary-processes"
      ],
      "title": "有限马尔可夫链平稳分布存在",
      "statement": "每个有限状态转移矩阵 P 都至少有一个平稳概率行向量 π，即 πP=π；若链不可约，则 π 的每个分量严格为正。",
      "dependencies": [
        "def-finite-markov",
        "finite-dimensional-compactness"
      ],
      "idea": "从任意初始分布的 Cesàro 平均取收敛子列，望远镜差趋零。",
      "steps": [
        "取任意概率行向量 μ，令 ν_N=N⁻¹Σ_(k=0)^(N-1) μP^k。每项仍是概率向量，概率单纯形是 R^|S| 中闭有界集，故有收敛子列 ν_(N_j)→π，且 π 仍非负、分量和为一。",
        "计算 ν_NP−ν_N=(μP^N−μ)/N。两个概率向量各坐标在 [0,1]，故右侧每坐标绝对值≤1/N，趋于零。矩阵乘法连续，沿收敛子列取极限得 πP=π。",
        "若链不可约且 π_i>0 对某状态 i，则由 π=πP^k 得 π_j≥π_i(P^k)_(ij)>0，只要有从 i 到 j 的正概率路径。至少一个 π_i 正，因为总和为一；不可约性遂给所有状态严格正。证明不声称周期链的逐时分布必收敛。$\\square$"
      ]
    },
    {
      "id": "linear-controllability-kalman",
      "topics": [
        "applied/controllability-observability",
        "applied/state-space"
      ],
      "title": "Kalman 可控秩判据",
      "statement": "有限维离散线性系统可控，当且仅当矩阵 [B,AB,…,A^(n−1)B] 的秩为 n。",
      "dependencies": [
        "def-linear-control",
        "rank-nullity"
      ],
      "idea": "可达状态是各时刻输入经 A 推进所得列空间；Cayley–Hamilton 使更高幂不再扩大空间。",
      "steps": [
        "从零状态出发，经过 N 步有 x_N=Σ_(j=0)^(N-1)A^(N-1-j)Bu_j。因此所有可达状态恰为列空间 span{im B,…,im A^(N-1)B}：任意输入给此空间内向量，反向任意列组合可把系数选作输入。",
        "设 W=span{im B,…,im A^(n-1)B}。Cayley–Hamilton 写 A^n 为 I,A,…,A^(n-1) 的线性组合，故 A^nB 的列仍在 W；递推左乘 A 说明所有更高次 A^kB 列也在 W。于是任意步数可达集合都包含于 W。",
        "若秩为 n，则 W=R^n，选至多 n 步输入即可实现任意目标（多余输入取零）。若秩小于 n，则 W 是真子空间，任意步的零态可达状态均在 W，不能到达 W 外目标，系统不可控。一般初态与目标之差还含 A^N x_0，但可控的定义要求任意有限时长可选；满秩矩阵给出 n 步可达性，反之零初态已足以否定。$\\square$"
      ]
    },
    {
      "id": "pythagorean-theorem",
      "topics": [
        "numbertheory/pythagorean-triples"
      ],
      "title": "勾股定理（面积拼合法）",
      "statement": "欧氏平面中，直角三角形两直角边长为 a,b，斜边长为 c，则 a²+b²=c²。",
      "dependencies": [
        "def-euclidean-area"
      ],
      "idea": "把四个全等直角三角形放进边长 a+b 的大正方形；中间留下边长 c 的小正方形，比较面积。",
      "steps": [
        "设直角三角形两个锐角为 α、β。因三角形内角和为 180° 且另一个角为 90°，有 α+β=90°。取四个该三角形的全等副本，分别置于一个大正方形四角，使每个直角顶点落在大正方形顶点，两条直角边分别沿大正方形相邻边放置；邻接副本取镜像方向，使较长边 a 与较短边 b 沿边界依次首尾相接。每条大正方形边由长度 a 和 b 两段组成，故其边长为 a+b。",
        "四条斜边围成中间四边形，每条边长都是 c。考察其中一个顶点：它位于大正方形的一条直边上，左右两个相邻直角三角形分别在此贡献锐角 α 与 β；中间四边形的内角与这两个角组成平角，因而等于 180°−(α+β)=90°。四个内角均为直角，所以中间四边形为正方形，边长 c、面积 c²。",
        "按有限可加性，大正方形的面积等于中间小正方形与四个三角形面积之和。因此 (a+b)²=c²+4(ab/2)=c²+2ab。展开左边并消去 2ab，得到 a²+b²=c²。证明只使用直角三角形面积、全等不变性和有限面积可加性，没有把勾股定理本身作为前提。$\\square$"
      ]
    },
    {
      "id": "pythagorean-parametrization",
      "topics": [
        "numbertheory/pythagorean-triples"
      ],
      "title": "本原勾股数的参数化",
      "statement": "正整数本原解 a²+b²=c²（gcd(a,b,c)=1）恰可写成 {a,b}={m²−n²,2mn}、c=m²+n²，其中 m>n>0、gcd(m,n)=1 且 m,n 奇偶性相反。",
      "dependencies": [
        "euclid-lemma",
        "unique-factorization"
      ],
      "idea": "奇偶性与互素性迫使两个平方和因子互素，其乘积为平方便各自为平方。",
      "steps": [
        "a,b 不可能都奇：平方模 4 只能为 0 或 1，两个奇平方和为 2 而平方模 4 不为 2。也不可能都偶（本原），故一奇一偶。设奇数边为 a，偶数边为 b。由 c²−a²=b² 得 ((c+a)/2)((c−a)/2)=(b/2)²。两因子为正整数且互素：公共奇因子会同时整除 c,a，公共偶因子则与 c,a 同奇矛盾。",
        "互素正整数乘积为平方，唯一素因子分解表明每个素数在两因子中的指数分别为偶数，故因子各为平方：令 (c+a)/2=m²、(c−a)/2=n²，m>n。于是 a=m²−n²、c=m²+n²、b=2mn。gcd(m,n)=1，否则其平方公因子整除 a,b,c；二者不能同奇，否则 a,b,c 全偶。因此异奇偶。",
        "反向从满足条件的 m,n 构造三元组，直接展开 (m²−n²)²+(2mn)²=(m²+n²)²。异奇偶使奇数边为奇且偶数边为偶；若素数同时整除 a,b，则由 b=2mn 与 a=m²−n²、gcd(m,n)=1 可推出该素数须同时整除 m,n，矛盾（素数 2 由奇偶性排除）。故所得三元组本原。$\\square$"
      ]
    },
    {
      "id": "euler-polyhedron-formula",
      "topics": [
        "geometry/euler-characteristic",
        "geometry/polyhedra",
        "geometry/triangulations"
      ],
      "title": "凸多面体的欧拉公式",
      "statement": "凸三维多面体的顶点数 V、边数 E、面数 F 满足 V−E+F=2。",
      "dependencies": [
        "tree-edges",
        "def-jordan-separation"
      ],
      "idea": "球面嵌入图删去非树边不会改变 V−E+F；剩余树补面数为一。",
      "steps": [
        "取多面体边图的一棵生成树 T；图连通，因此树含全部 V 个顶点且 V−1 条边。把嵌入球面的树逐条删除叶边，连通性保持，且补空间仍连通：一条叶边不构成闭路，绕过其自由端可在补空间连通两侧。归纳可知球面树只有一个面。",
        "从原嵌入图逐条加入不在 T 中的边。每条新边端点已由 T 连通，故该边与已有路径组成闭路；其嵌入在球面上的两侧属于两个不同面（简单闭曲线分隔球面）。加入该边恰把一个面分成两个，面数增加一。共加入 E−(V−1) 条边，所以 F=1+E−V+1=E−V+2。",
        "多面体边图在球面上的嵌入具有这些顶点、边、面，故等式整理为 V−E+F=2。分隔步骤依赖已明列的 Jordan 曲线定理基础；证明不推广到任意非球面嵌入。$\\square$"
      ]
    },
    {
      "id": "confidence-chebyshev",
      "topics": [
        "probability/confidence-intervals"
      ],
      "title": "Chebyshev 置信区间覆盖率保证",
      "statement": "若估计量 T 对参数 θ 满足 E[T]=θ 且 Var(T)≤v，则区间 [T−√(v/α),T+√(v/α)] 的覆盖概率至少 1−α。",
      "dependencies": [
        "chebyshev"
      ],
      "idea": "覆盖失败正是误差绝对值超过区间半径，直接应用 Chebyshev 不等式。",
      "steps": [
        "令 r=√(v/α)。事件 θ 不属于 [T−r,T+r] 等价于 |T−θ|>r（端点等号属于闭区间）。Chebyshev 不等式给 P(|T−θ|>r)≤Var(T)/r²≤v/(v/α)=α（v=0 时 T=θ 几乎处处，结论直接成立）。",
        "取补事件便得 P(θ∈[T−r,T+r])≥1−α。该保证需要无偏及方差上界；若估计有偏，须把偏差界另计，且此区间通常保守，不等同于最短或精确覆盖区间。$\\square$"
      ]
    },
    {
      "id": "module-first-isomorphism",
      "topics": [
        "algebra/modules",
        "algebra/homomorphisms-quotients"
      ],
      "title": "模的第一同构定理",
      "statement": "若 f:M→N 是 R-模同态，则 M/ker f 与 im f 同构。",
      "dependencies": [
        "first-isomorphism",
        "def-module-localization"
      ],
      "idea": "与群的第一同构证明相同：同态纤维恰为核的陪集。",
      "steps": [
        "核 K={m:f(m)=0} 对加法及 R 数乘封闭，故为子模。商模加法与标量乘法按代表定义；若换代表，差在 K 中，运算结果差仍在 K 中，所以良定义。",
        "定义 F:M/K→im f，F(m+K)=f(m)。若 m+K=m′+K，则 m−m′∈K，故 f(m)=f(m′)，所以良定义。它保持加法和标量乘法，并按像的定义满射。",
        "若 F(m+K)=0，则 f(m)=0，故 m∈K，商类为零；对两个商类同理差在核，故 F 单射。因此 F 为模同构。$\\square$"
      ]
    },
    {
      "id": "localization-module-universal",
      "topics": [
        "algebra/localization",
        "algebra/modules"
      ],
      "title": "模局部化的泛性质",
      "statement": "自然映射 ι:M→S⁻¹M 满足：若 R-模同态 f:M→N 将每个 s∈S 的作用变为双射（即 f(sm)=s f(m) 且 s:N→N 可逆），则存在唯一 S⁻¹R-模同态 f~:S⁻¹M→N 使 f~∘ι=f，且 f~(m/s)=s⁻¹f(m)。",
      "dependencies": [
        "def-module-localization",
        "module-first-isomorphism"
      ],
      "idea": "分数的等价关系恰好表达交叉相乘相等；可逆作用使公式良定义且唯一。",
      "steps": [
        "先定义 f~(m/s)=s_N⁻¹ f(m)，其中 s_N 是 N 上的 s 作用。若 (m,s)~(m′,s′)，存在 u∈S 使 u(s′m−sm′)=0。施以 f 得 u_N(s′_N f(m)−s_N f(m′))=0；这些算子均可逆，故 s′_N⁻¹f(m)=s_N⁻¹f(m′)，即定义与分数代表无关。",
        "对加法，(m/s)+(m′/s′)=(s′m+sm′)/(ss′)，其像为 (ss′)_N⁻¹(s′_N f(m)+s_N f(m′))，因 R 交换，正好等于两像之和。对 r/s∈S⁻¹R 的作用同样计算得 (r/s)f~(m/t)=f~(rm/(st))，故 f~ 为局部化模同态。",
        "f~(m/1)=f(m)，所以它延拓 f。任何延拓 g 必须满足 g(m/s)=s_N⁻¹g(m/1)=s_N⁻¹f(m)，故唯一。证明没有声称任意模 N 上的 s 作用都可逆；这是泛性质的必要假设。$\\square$"
      ]
    },
    {
      "id": "e-irrational",
      "topics": [
        "numbertheory/pi-and-e"
      ],
      "title": "自然常数 e 的无理性",
      "statement": "e=Σ_(k=0)^∞1/k! 是无理数。",
      "dependencies": [
        "axiom-natural",
        "series-cauchy"
      ],
      "idea": "假设 e 为既约分数，乘以大阶乘后尾项为严格介于 0 与 1 的整数。",
      "steps": [
        "反设 e=p/q，其中 p,q 为正整数。取整数 n≥max(q,2)，则 n!e 为整数，因为 q 整除 n!；且 n!Σ_(k=0)^n1/k! 也是整数，因为每个 k! 整除 n!。两者相减得 R_n=n!Σ_(j=1)^∞1/(n+j)!，所以 R_n 必为整数。",
        "但 R_n=Σ_(j=1)^∞1/[(n+1)(n+2)…(n+j)]。每项正，首项为 1/(n+1)。后续项相邻比至多 1/(n+2)，故 R_n≤(1/(n+1))Σ_(r=0)^∞(1/(n+2))^r=(n+2)/((n+1)^2)<1（n≥2）。",
        "于是 0<R_n<1，与 R_n 是整数矛盾。故 e 无理。级数收敛可由相邻项比最终不超过 1/2 得几何比较；此结论不证明 e 的超越性。$\\square$"
      ]
    },
    {
      "id": "linear-observability-dual",
      "topics": [
        "applied/controllability-observability",
        "applied/state-space"
      ],
      "title": "Kalman 可观秩判据",
      "statement": "系统 y_k=Cx_k 的 n 维初态可由无输入的前 n 次输出唯一确定，当且仅当可观测矩阵 O=[C;CA;…;CA^(n−1)] 的秩为 n。",
      "dependencies": [
        "linear-controllability-kalman",
        "rank-nullity"
      ],
      "idea": "两初态输出相同当且仅当其差落在观测矩阵的核。",
      "steps": [
        "零输入下 x_k=A^k x_0，故前 n 项输出依次为 Cx_0,CAx_0,…,CA^(n−1)x_0，合并为 O x_0。对任意两初态差 z，输出序列相同当且仅当 Oz=0。",
        "若 rank O=n，则由秩—零化度 ker O={0}，输出相同迫使两初态相等；而映射 x↦Ox 单射，给出唯一恢复（对来自系统的精确数据）。",
        "若 rank O<n，则存在非零 z∈ker O，初态 0 与 z 产生完全相同的前 n 项输出，无法唯一辨认。Cayley–Hamilton 还说明所有 k≥n 的 CA^k 是前 n 项矩阵的线性组合，故观察更久也不增加信息。$\\square$"
      ]
    },
    {
      "id": "gronwall-discrete",
      "topics": [
        "analysis/stability",
        "analysis/odes"
      ],
      "title": "离散 Grönwall 不等式",
      "statement": "若非负数列 u_n 满足 u_n≤a+bΣ_(k=0)^(n−1)u_k，其中 a,b≥0，则 u_n≤a(1+b)^n。",
      "dependencies": [
        "axiom-natural"
      ],
      "idea": "把累积上界作为辅助递推量并归纳。",
      "steps": [
        "令 v_0=a，v_n=a+bΣ_(k=0)^(n−1)u_k。由假设 u_n≤v_n；且 v_(n+1)=v_n+b u_n≤(1+b)v_n。",
        "归纳得到 v_n≤a(1+b)^n，结合 u_n≤v_n 即得结论。若 a=0，递推从 u_0≤0 得全为零，也满足结论。常见带步长 h 的形式取 b=Lh，并用 (1+Lh)^n≤exp(Lnh) 得指数界；后一不等式来自 log(1+x)≤x。$\\square$"
      ]
    },
    {
      "id": "identifiability-injective-map",
      "topics": [
        "applied/identifiability",
        "applied/parameter-inversion"
      ],
      "title": "单射前向映射的全局可辨识性",
      "statement": "给定参数空间 Θ 与无噪声观测 F:Θ→Y，参数由观测全局唯一确定，当且仅当 F 在 Θ 上单射；局部唯一性等价于限制到某邻域后单射。",
      "dependencies": [
        "def-identifiability"
      ],
      "idea": "把定义逐字翻译为纤维 F⁻¹({y}) 的基数条件。",
      "steps": [
        "若参数 θ 可由观测唯一确定，则任意 θ′ 满足 F(θ′)=F(θ) 必有 θ′=θ，正是 F 单射。反之单射保证每个属于像的观测 y 只有一个原像，故存在唯一参数与之相容。",
        "在 θ 的某邻域 U 内唯一可辨识，意为对 θ′∈U，F(θ′)=F(θ) 蕴含 θ′=θ，即 F|_U 的纤维单点。若要求 U 内所有参数彼此可辨，则恰为 F|_U 单射。",
        "有噪声或有限样本时，单射只保证理想映射层面的唯一性，不自动给出稳定恢复；逆映射连续性、条件数和统计误差需另行假设分析。$\\square$"
      ]
    },
    {
      "id": "fejer-uniform-convergence",
      "topics": [
        "analysis/fourier-series",
        "analysis/fourier-transform"
      ],
      "title": "Fejér 定理：连续周期函数的 Cesàro Fourier 和一致收敛",
      "statement": "若 f 是连续 2π 周期函数，令 σ_N f 为前 N 个对称部分和的 Cesàro 平均，则 ‖σ_Nf−f‖_∞→0。",
      "dependencies": [
        "heine-cantor",
        "riemann-linearity"
      ],
      "idea": "Fejér 核非负、总质量一，且质量集中于圆周原点的任意邻域。",
      "steps": [
        "定义 K_N(t)=N⁻¹|Σ_(k=0)^(N−1)e^(ikt)|²。展开平方并按差 k−j 计数，得 K_N(t)=Σ_(|j|<N)(1−|j|/N)e^(ijt)，故它是非负三角多项式。其圆周平均 (2π)⁻¹∫_(−π)^πK_N=1，因为指数函数除常数项外积分为零。",
        "将 f 的 Fourier 系数定义为 f̂(j)=(2π)⁻¹∫ f(x)e^(−ijx)dx。有限和交换积分可直接验证 σ_N f(x)=(2π)⁻¹∫K_N(t)f(x−t)dt；每个频率 j 的权重正是 1−|j|/N（|j|<N），其余为零。",
        "固定 0<δ<π。几何级数公式给 |Σ_(k=0)^(N−1)e^(ikt)|≤2/|1−e^(it)|=1/|sin(t/2)|。因此 |t|≥δ 时 K_N(t)≤1/(N sin²(δ/2))，其归一化积分趋零。",
        "连续周期 f 在紧圆周上一致连续。给 ε>0，选 δ 使 |f(x−t)−f(x)|<ε 对所有 x 与 |t|<δ 成立。利用核非负且总质量一，误差绝对值≤ε 加上远区的 2‖f‖∞ 乘以远区核质量；后一项由上一步趋零。故一致误差趋零。",
        "推论是三角多项式在连续周期函数空间中一致稠密，因为 σ_N f 本身是三角多项式。一般连续函数的原始 Fourier 部分和不因此必一致收敛；结论针对 Cesàro 平均。$\\square$"
      ]
    },
    {
      "id": "beta-gamma-recurrence",
      "topics": [
        "probability/conjugate-priors",
        "probability/prior-distribution"
      ],
      "title": "Beta 函数递推与 Beta-Binomial 共轭更新",
      "statement": "对正整数 α,β 与观测到的 k 次成功、n−k 次失败，先验 Beta(α,β) 的后验为 Beta(α+k,β+n−k)；预测下一次成功概率为 (α+k)/(α+β+n)。",
      "dependencies": [
        "def-beta-integral",
        "integral-linearity",
        "variable-integral"
      ],
      "idea": "似然乘幂函数改变 Beta 密度指数；Beta 积分递推给归一化常数比。",
      "steps": [
        "先证明 B(x+1,y)=x/(x+y)B(x,y)。分部积分给 B(x+1,y)=x/y·B(x,y+1)；又 t+(1−t)=1 给 B(x,y)=B(x+1,y)+B(x,y+1)。联立即得递推。边界项为零，因为 x,y>0。对称换元还得 B(x,y+1)=y/(x+y)B(x,y)。",
        "令参数 θ∈(0,1)，先验密度为 θ^(α−1)(1−θ)^(β−1)/B(α,β)。给定条件独立 Bernoulli 数据，其似然与 θ^k(1−θ)^(n−k) 成正比；贝叶斯公式相乘后，θ 的后验密度正比于 θ^(α+k−1)(1−θ)^(β+n−k−1)。归一化积分恰为 B(α+k,β+n−k)，故后验即所述 Beta 分布。",
        "后验预测成功率为后验均值 ∫θ·density。用递推比 B(α+k+1,β+n−k)/B(α+k,β+n−k)，得到 (α+k)/(α+β+n)。这要求条件独立同参数 Bernoulli 抽样模型；若数据依赖结构不同，更新式不成立。$\\square$"
      ]
    },
    {
      "id": "finite-markov-stationary-unique",
      "topics": [
        "probability/markov-chains",
        "probability/stationary-processes"
      ],
      "title": "有限不可约马尔可夫链的平稳分布唯一",
      "statement": "有限不可约转移矩阵恰有一个平稳概率分布。",
      "dependencies": [
        "finite-markov-stationary"
      ],
      "idea": "对两平稳分布取最大逐点比值；不变性与不可约性排除有零坐标的非零非负不变向量。",
      "steps": [
        "存在性及任何平稳分布严格正已由前引理证明。设 π、ρ 是两个平稳概率向量，定义 c=min_i π_i/ρ_i。两向量分量皆正，故 c>0，且 η=π−cρ 非负并至少有一个零分量。又 ηP=η。",
        "若 η 非零，选 η_i>0 的状态 i。由不可约性，对任意 j 存在 k 使 (P^k)_(ij)>0；由 ηP^k=η，得 η_j≥η_i(P^k)_(ij)>0。因此 η 所有分量都正，和其至少一个零分量矛盾。故 η=0，即 π=cρ。",
        "两分布分量和均为一，故 c=1、π=ρ。周期性不影响平稳分布唯一性；但周期链的 μP^n 一般不逐点收敛到该分布。$\\square$"
      ]
    },
    {
      "id": "heat-maximum-principle",
      "topics": [
        "analysis/pdes",
        "applied/pde-models"
      ],
      "title": "热方程最大值原理与解唯一性",
      "statement": "令 Ω⊂Rⁿ 有界，u 连续于 Ω̄×[0,T] 且有内部所需导数。若 (∂_t−Δ)u≤0，则 sup_(Ω̄×[0,T])u≤sup_(Ω̄×{0}∪∂Ω×[0,T])u；因此同初值同边界的经典热方程解唯一。",
      "dependencies": [
        "ftc-second",
        "finite-dimensional-compactness"
      ],
      "idea": "减去微小正斜率后，严格抛物不等式排除正时刻的内部最大点。",
      "steps": [
        "连续函数在紧柱体 Ω̄×[0,T] 取最大值。记边界与初始底面的最大值为 M。任取 ε>0，令 v(x,t)=u(x,t)−εt。则 (∂_t−Δ)v≤−ε。",
        "若 v 在柱体上的最大值超过 M，则最大点不在空间边界或 t=0，故位于空间内部且 t>0。该点空间 Hessian 半负定，所以 Δv≤0；对时间，若 t<T，局部最大给 ∂_t v=0；若 t=T，左导数满足 ∂_t v≥0。两种情形均有 (∂_t−Δ)v≥0，与严格负不等式矛盾。",
        "因此 v≤M，故 u≤M+εT。令 ε↓0 得最大值原理。若 u₁,u₂ 是同初值同边界的两解，差 w 满足热方程且边界初值为零；对 w 与 −w 分别用原理，得 w≤0 且 −w≤0，故 w=0。经典解的存在性未由最大值原理本身推出。$\\square$"
      ]
    },
    {
      "id": "quotient-universal-property",
      "topics": [
        "geometry/quotient-spaces"
      ],
      "title": "拓扑商空间的泛性质",
      "statement": "对满射 q:X→Y，若 Y 赋予商拓扑（U⊆Y 开当且仅当 q⁻¹(U) 在 X 中开），则任意映射 g:Y→Z 连续，当且仅当 g∘q:X→Z 连续。",
      "dependencies": [
        "def-topological-space"
      ],
      "idea": "将连续性的开集原像条件经 q 的定义逐项改写。",
      "steps": [
        "若 g 连续且 q 连续，则复合 g∘q 连续。q 连续由商拓扑定义直接得到：对 Z 中开集 U，q⁻¹(U) 开。",
        "反之假设 g∘q 连续。对 Z 中任意开集 V，有 q⁻¹(g⁻¹(V))=(g∘q)⁻¹(V) 在 X 中开。商拓扑定义于是给出 g⁻¹(V) 在 Y 中开，故 g 连续。",
        "若另一个拓扑也使此等价对所有 Z,g 成立，取 Z 为该拓扑空间本身并分别使用恒等映射，可得两拓扑有相同开集。因此商拓扑是使 q 成为该泛性质的唯一拓扑。$\\square$"
      ]
    },
    {
      "id": "poisson-interarrival-memoryless",
      "topics": [
        "probability/poisson-process"
      ],
      "title": "泊松过程的等待时间与指数无记忆性",
      "statement": "若 N(t) 是强度 λ>0 的泊松过程，首个到达时刻 T 满足 P(T>t)=e^(−λt)，故 T 为参数 λ 的指数分布，并满足 P(T>s+t|T>s)=P(T>t)。",
      "dependencies": [
        "def-poisson-process"
      ],
      "idea": "无到达等价于区间计数为零；独立平稳增量给条件尾概率相除。",
      "steps": [
        "按泊松过程定义，N(t)∼Poisson(λt)，且 T>t 当且仅当 N(t)=0。因此 P(T>t)=P(N(t)=0)=e^(−λt)(λt)^0/0!=e^(−λt)，其分布函数为 1−e^(−λt)，密度为 λe^(−λt)。",
        "对 s,t≥0，事件 T>s 意味着前 s 时段无到达。T>s+t 再要求后续长度 t 区间也无到达。独立增量给 P(T>s+t|T>s)=P(N(s+t)−N(s)=0)=e^(−λt)。",
        "故剩余等待时间分布不依赖已等待时长，这就是无记忆性。反向地，若非负等待时间尾函数连续且满足该无记忆等式，则 S(s+t)=S(s)S(t)；对 t 连续可解得 S(t)=e^(−λt)（非退化情形），但此处只证明泊松过程蕴含指数等待时间。$\\square$"
      ]
    },
    {
      "id": "monte-carlo-mean-variance",
      "topics": [
        "applied/monte-carlo",
        "probability/expectation-variance"
      ],
      "title": "Monte Carlo 均值估计的无偏性与方差",
      "statement": "若 X₁,…,X_n 独立同分布且 E[X₁]=μ、Var(X₁)=σ²<∞，则均值估计 μ̂=n⁻¹ΣX_i 无偏且 Var(μ̂)=σ²/n。",
      "dependencies": [
        "variance-mean",
        "independent-bounded-products"
      ],
      "idea": "期望线性给无偏；独立使不同中心化项的交叉协方差为零。",
      "steps": [
        "E[μ̂]=n⁻¹ΣE[X_i]=n⁻¹nμ=μ，故无偏。令 Y_i=X_i−μ，则 E[Y_i]=0，Var(Y_i)=σ²。",
        "展开 Var(μ̂)=E[(n⁻¹ΣY_i)²]=n⁻²(ΣE[Y_i²]+2Σ_(i<j)E[Y_iY_j])。独立性使 E[Y_iY_j]=E[Y_i]E[Y_j]=0；对角项各为 σ²，所以方差为 n⁻²·nσ²=σ²/n。",
        "若进一步有独立重复批次，可用样本方差估计 σ² 并据此报告标准误约为 s/√n；有限样本的精确置信覆盖需额外分布假设，不能仅由均值方差公式推出。$\\square$"
      ]
    },
    {
      "id": "randomized-ate-unbiased",
      "topics": [
        "probability/interventions-effects",
        "probability/experimental-design"
      ],
      "title": "随机分配下样本处理效应估计无偏",
      "statement": "有限总体单位 i 的潜在结果为 Y_i(1),Y_i(0)，若恰有 m 个单位从 N 个中等概率无放回随机分配处理，则差均值估计 τ̂=Ȳ_T−Ȳ_C 对有限总体平均处理效应 τ=N⁻¹Σ_i[Y_i(1)−Y_i(0)] 无偏。",
      "dependencies": [
        "independent-products",
        "variance-mean"
      ],
      "idea": "每个单位入选概率相同，分别对处理组与对照组样本均值取随机化期望。",
      "steps": [
        "令 Z_i 为处理指示量。完全随机分配使 P(Z_i=1)=m/N，故 E[Ȳ_T]=E[(1/m)ΣZ_iY_i(1)]=(1/m)Σ(m/N)Y_i(1)=N⁻¹ΣY_i(1)。",
        "同理每单位进入对照组概率 (N−m)/N，于是 E[Ȳ_C]=N⁻¹ΣY_i(0)。相减并用期望线性得 E[τ̂]=N⁻¹Σ[Y_i(1)−Y_i(0)]=τ。",
        "这里潜在结果视作固定，随机性只来自分配；无偏不意味着每次实验都精确，也不说明异质处理效应可由单个单位同时观测。若分配概率不等或有失访，应改用相应加权估计。$\\square$"
      ]
    },
    {
      "id": "sirs-threshold-equilibrium",
      "topics": [
        "applied/epidemic-models",
        "applied/population-dynamics"
      ],
      "title": "SIR 模型的无病平衡与初始增长阈值",
      "statement": "在封闭人口 SIR 方程 S′=−βSI/N、I′=βSI/N−γI、R′=γI 中，总人口守恒；在给定易感人数 S₀ 附近，感染者初始增长率符号由 R₀=βS₀/(γN)−1 决定。",
      "dependencies": [
        "ftc-second"
      ],
      "idea": "求和消去内部流量；将感染方程因式分解后直接读出线性增长率。",
      "steps": [
        "逐项相加得 (S+I+R)′=−βSI/N+βSI/N−γI+γI=0，所以若初始总和为 N，之后保持 N。若 S、I、R 非负，则该模型把感染者从 S 转入 I、再从 I 转入 R。",
        "I′=I(βS/N−γ)。在任一时刻 I>0 时，I 的瞬时增长或下降由 βS/N−γ 的符号决定。若疾病引入时 S=S₀，则该系数等于 γ(βS₀/(γN)−1)=γ(R₀−1)。",
        "故 R₀>1 时感染者初始斜率为正，R₀<1 时为负，R₀=1 时一阶增长率为零。这个局部判据不表示整个疫情终值或峰值；S 随时间下降，之后增长符号可改变。参数解释依赖此均匀混合确定性模型。$\\square$"
      ]
    },
    {
      "id": "prime-infinite-euclid",
      "topics": [
        "numbertheory/prime-counting",
        "numbertheory/divisibility-primes"
      ],
      "title": "素数无穷多",
      "statement": "素数有无穷多个。",
      "dependencies": [
        "unique-factorization",
        "prime-divisor"
      ],
      "idea": "假设只有有限多个素数，构造一个不被其中任一个整除的整数。",
      "steps": [
        "反设全部素数为 p₁,…,p_r。令 M=p₁p₂…p_r+1。M>1，按素数除数引理有素数 q 整除 M。",
        "q 若在列出的有限清单中，则 q 整除乘积 p₁…p_r，也整除 M，因而整除差 1，矛盾。故清单遗漏了素数 q，与其完备性矛盾。",
        "所以素数无限。该证明不提供素数间隔或 π(x) 的精确渐近；这些需要额外解析数论工具。$\\square$"
      ]
    },
    {
      "id": "zeta-euler-product",
      "topics": [
        "numbertheory/zeta-l-functions",
        "numbertheory/prime-counting"
      ],
      "title": "Re(s)>1 区域的 ζ 函数 Euler 乘积",
      "statement": "对实数 s>1，ζ(s)=Σ_(n≥1)n^(−s)=∏_p(1−p^(−s))^(−1)，乘积按素数递增取极限。",
      "dependencies": [
        "unique-factorization",
        "integral-linearity"
      ],
      "idea": "有限个几何级数相乘枚举所有仅含这些素因子的整数，绝对收敛控制极限遗漏项。",
      "steps": [
        "级数收敛：对递减正函数 x^(−s)，Σ n^(−s)≤1+∫₁^∞x^(−s)dx=1+1/(s−1)。取前有限个素数集合 P_y，有限乘积展开为所有素因子均在 P_y 中的正整数 n 的 n^(−s) 之和；各几何级数收敛且乘积有限，唯一分解保证每个此类 n 恰好出现一次。",
        "当 y 增大，这些 n 的集合单调扩张，并最终包含任意固定正整数 n 的全部素因子，故有限乘积展开的和单调趋向完整 ζ 级数：给 ε>0，先选有限截断 N 使 n>N 的 ζ 尾和小于 ε；再取 y 大于 1,…,N 中所有素因子，有限乘积至少包含前 N 项且不超过全级数。夹逼得极限等于 ζ(s)。",
        "所有项非负，乘积极限与上述级数极限一致。对复数 s 且 Re(s)>1，可用绝对值受控的同样论证得到绝对收敛版本；此处证明实数情形，不触及解析延拓或零点分布。$\\square$"
      ]
    },
    {
      "id": "rational-root-theorem",
      "topics": [
        "numbertheory/integer-equations",
        "algebra/polynomial-rings"
      ],
      "title": "有理根定理",
      "statement": "若整系数多项式 a_nx^n+…+a_0 有既约有理根 r/s（s>0），则 r|a₀ 且 s|a_n。",
      "dependencies": [
        "euclid-lemma"
      ],
      "idea": "清除分母后，首末项分别给出整除关系，互素性消去交叉因子。",
      "steps": [
        "代入 r/s 并乘 s^n，得 a_n r^n+a_(n−1)r^(n−1)s+…+a₀s^n=0。除首项外其余项都含因子 s，所以 s|a_n r^n。由于 gcd(r,s)=1，Euclid 引理反复应用得 s|a_n。",
        "同一等式除末项外每项都含因子 r，因此 r|a₀s^n；gcd(r,s)=1 再给 r|a₀。若 a₀=0 或 r=0，结论直接按多项式含 x 因子处理；既约零根写作 0/1，分母结论仍成立。$\\square$"
      ]
    },
    {
      "id": "symplectic-volume-preservation",
      "topics": [
        "geometry/symplectomorphisms",
        "geometry/symplectic-forms"
      ],
      "title": "辛变换保持相体积",
      "statement": "若 2n 维微分同胚 φ 满足 φ*ω=ω，其中 ω 为非退化闭 2-形式，则 φ 保持由 ωⁿ/n! 定义的定向体积形式。",
      "dependencies": [
        "def-differential-forms"
      ],
      "idea": "拉回保持外积与常数倍，故逐次外积后仍保持最高次形式。",
      "steps": [
        "由 φ*ω=ω 及拉回与外积相容，φ*(ωⁿ/n!)=(φ*ω)ⁿ/n!=ωⁿ/n!。非退化性确保 ωⁿ处处非零，因而它确实给出一个体积形式。",
        "对任意可测区域 U，变量换元公式给 ∫_(φ(U))ωⁿ/n!=∫_U φ*(ωⁿ/n!)=∫_Uωⁿ/n!；若区域边界足够规则使积分成立，此即体积保持。形式结论是局部的，不要求 φ 保持某个额外欧氏度量。$\\square$"
      ]
    },
    {
      "id": "inverse-function-one-dimension",
      "topics": [
        "geometry/smooth-manifolds",
        "geometry/curves-surfaces"
      ],
      "title": "一维逆函数定理",
      "statement": "若 f 在开区间邻域 C¹ 且 f′(x₀)≠0，则 x₀ 有邻域使 f 单调可逆，逆函数 C¹ 且 (f⁻¹)′(y)=1/f′(f⁻¹(y))。",
      "dependencies": [
        "intermediate-value",
        "derivative-continuity"
      ],
      "idea": "导数连续保持固定符号，均值定理给严格单调；差商取极限给逆导数。",
      "steps": [
        "连续性给出 x₀ 的区间 U，使 f′ 在 U 始终为正或始终为负。对 x<y，均值定理给 f(y)−f(x)=f′(c)(y−x)，故 f 严格单调并连续，因而在 U 到区间 f(U) 上有连续逆 g。",
        "固定 y=f(x) 且 h→0。由 g 连续，k=g(y+h)−x→0，且 h=f(x+k)−f(x)。均值定理给 h/k=f′(c_k)，其中 c_k 位于 x 与 x+k 之间。于是当 h≠0 时，(g(y+h)−g(y))/h=k/h=1/f′(c_k)→1/f′(x)。",
        "故 g′(y)=1/f′(g(y))。右边连续，因为 f′、g 连续且分母不为零，所以 g 为 C¹。此处是实一维版本；多维逆函数定理还需线性映射与收缩映射论证。$\\square$"
      ]
    },
    {
      "id": "cr-angle-preservation",
      "topics": [
        "analysis/conformal-maps"
      ],
      "title": "复可微映射的局部保角性",
      "statement": "若复可微函数 f 在 z₀ 处导数 f′(z₀)≠0，则其实线性微分是旋转与正比例缩放的复合，故保持该点处非零切向量间的有向夹角。",
      "dependencies": [
        "complex-basic-rules"
      ],
      "idea": "复数乘以非零数在平面上等于旋转乘缩放；导数给出一阶线性近似。",
      "steps": [
        "由复导数定义，对小复增量 h 有 f(z₀+h)=f(z₀)+a h+o(|h|)，其中 a=f′(z₀)≠0。因此实微分 Df_(z₀) 是映射 h↦ah。",
        "写 a=|a|e^(iθ)。乘以 a 把任一向量长度乘 |a|、方向角加 θ；两个向量共同加同一角，夹角差不变，且 |a|>0 保持定向。",
        "故微分保角。此点态结论不单独证明 f 在邻域全局单射或存在共形逆映射；全局黎曼映射定理是更强命题。$\\square$"
      ]
    },
    {
      "id": "ode-flow-semigroup",
      "topics": [
        "analysis/phase-space",
        "analysis/odes"
      ],
      "title": "自治常微分方程流的半群性质",
      "statement": "对局部唯一解的自治方程 x′=F(x)，只要各解在所需时间区间存在，解流满足 Φ_(t+s)(x)=Φ_t(Φ_s(x)) 且 Φ_0(x)=x。",
      "dependencies": [
        "picard-lindelof"
      ],
      "idea": "时间平移后的解与从中间状态重新起解具有相同初值，唯一性迫使相同。",
      "steps": [
        "常值时间曲线 x(t)=x 是以 x 为初值的零时刻状态，故按初值问题定义 Φ_0(x)=x。",
        "固定 s，令 y(t)=x(t+s)。自治性给 y′(t)=F(y(t))，且 y(0)=x(s)=Φ_s(x)。因此 t↦x(t+s) 与从 Φ_s(x) 起始的解有相同方程和初值。",
        "局部唯一性使两解在共同定义区间相等，于是 Φ_t(Φ_s(x))=x(t+s)=Φ_(t+s)(x)。时间区间可负时同理；这只是解存在区间上的局部流性质，不保证所有解全局存在。$\\square$"
      ]
    },
    {
      "id": "saddle-node-normal-form",
      "topics": [
        "analysis/bifurcation",
        "analysis/equilibria-periodic-orbits"
      ],
      "title": "鞍结分岔的标准标量模型",
      "statement": "方程 x′=μ+x² 的平衡点：μ<0 时恰有两个，μ=0 时有一个重根，μ>0 时没有；非零平衡点处线性化稳定性分别为 x=−√(−μ) 稳定、x=+√(−μ) 不稳定。",
      "dependencies": [
        "axiom-natural"
      ],
      "idea": "平衡方程等价于 x²=−μ；线性化由右端对 x 的导数决定。",
      "steps": [
        "平衡点满足 0=μ+x²。若 μ<0，实根恰为 ±√(−μ)；若 μ=0，唯一根 x=0 且代数重数二；若 μ>0，平方非负使无实根。",
        "在平衡 x* 处令 y=x−x*。精确展开 y′=(μ+(x*+y)²)−(μ+x*²)=2x*y+y²，线性方程为 y′=2x*y。其解 y(t)=y(0)e^(2x*t)，当 x*<0 指数衰减，当 x*>0 指数增长。",
        "所以两根相撞并消失的参数变化是该正规形的鞍结分岔。线性化结论仅用于非双曲根；μ=0 的稳定性需由 y′=y² 的非线性方程另判。$\\square$"
      ]
    },
    {
      "id": "finite-two-state-ergodic",
      "topics": [
        "analysis/ergodicity",
        "probability/markov-chains"
      ],
      "title": "两状态非周期链的分布收敛",
      "statement": "若 P=[[1−a,a],[b,1−b]] 且 0<a,b<1，则唯一平稳分布 π=(b/(a+b),a/(a+b))，任意初始分布 μ 的 μP^n 指数收敛到 π。",
      "dependencies": [
        "finite-markov-stationary-unique"
      ],
      "idea": "两状态概率递推的偏差每步乘特征值 1−a−b，其绝对值小于一。",
      "steps": [
        "设 p_n 为第 n 步处于状态 1 的概率，则 p_(n+1)=a(1−p_n)+(1−b)p_n=a+(1−a−b)p_n。固定点满足 p*=a+(1−a−b)p*，解得 p*=a/(a+b)；另一状态概率为 b/(a+b)。",
        "相减得 p_(n+1)−p*=(1−a−b)(p_n−p*)，故 p_n−p*=(1−a−b)^n(p_0−p*)。由于 0<a,b<1，−1<1−a−b<1，偏差绝对值趋零且有几何速率。",
        "因此分布收敛到上述平稳向量；条件排除了周期二的边界情形 a=b=1。有限一般状态空间的收敛需要不可约、非周期假设及相应证明，不能仅引用此二状态计算。$\\square$"
      ]
    },
    {
      "id": "zfc-extensionality-pair-uniqueness",
      "topics": [
        "foundations/zfc-axioms"
      ],
      "title": "外延公理推出无序对唯一性",
      "statement": "若集合 a,b 与 c,d 具有完全相同的元素，则 {a,b}={c,d}；集合只由其成员决定。",
      "dependencies": [
        "axiom-set"
      ],
      "idea": "对任意对象逐项比较成员关系，应用外延公理。",
      "steps": [
        "按配对公理，x∈{a,b} 当且仅当 x=a 或 x=b；同理 x∈{c,d} 当且仅当 x=c 或 x=d。假设两集合成员相同，则对任意 x，这两个析取条件等价。",
        "于是 {a,b} 与 {c,d} 有相同成员。ZFC 外延公理断言任意两个有相同成员的集合相等，故两无序对相等。即使 a=b 或 c=d，析取式仍成立，论证不需元素互异。$\\square$"
      ]
    },
    {
      "id": "relative-consistency-model",
      "topics": [
        "foundations/relative-consistency",
        "foundations/soundness-completeness"
      ],
      "title": "模型存在蕴含理论相容",
      "statement": "若一阶句子理论 T 有模型，则 T 不会在经典可靠演算中证明矛盾；因此模型论意义下 Con(T)。",
      "dependencies": [
        "fol-soundness"
      ],
      "idea": "可靠性保证每个 T 模型满足所有可证结论，而矛盾句在任何结构都为假。",
      "steps": [
        "取 T 的一个模型 M。若假设 T⊢⊥，由一阶演算可靠性，每个满足 T 的结构都满足 ⊥，特别 M⊨⊥。",
        "但 ⊥ 被定义为固定矛盾句，例如 θ∧¬θ；按经典满足关系不可能为真，矛盾。故 T 不证明 ⊥，即 T 相容。",
        "这是语义相对相容性的一向蕴含；它没有在对象理论内部构造模型，也不自动给出 Gödel 第二不完备定理所需的算术化相容性证明。$\\square$"
      ]
    },
    {
      "id": "so3-lie-algebra",
      "topics": [
        "algebra/lie-groups",
        "algebra/rotation-groups",
        "algebra/lie-algebras"
      ],
      "title": "旋转群 SO(3) 的李代数",
      "statement": "SO(3)={Q:QᵀQ=I, det Q=1} 在单位元处的切空间是 so(3)={A:Aᵀ=−A}；该空间维数为 3。",
      "dependencies": [
        "rank-nullity",
        "matrix-exponential"
      ],
      "idea": "对正交约束在单位元微分得反对称条件，反向由矩阵指数构造曲线实现每个切向量。",
      "steps": [
        "令 Q(t) 为 SO(3) 中经过 I 的可微曲线，Q(0)=I、Q′(0)=A。对恒等式 Q(t)ᵀQ(t)=I 求导并取 t=0，得 Aᵀ+A=0；行列式条件在单位元附近取连续分支，不增加一阶切向约束。因此切向量必反对称。",
        "反过来若 Aᵀ=−A，矩阵指数 E(t)=exp(tA) 满足 E′=AE。求导 E(t)ᵀE(t) 得 Eᵀ(Aᵀ+A)E=0，初值为 I，故 EᵀE=I。det E 连续且取值只能为 ±1，E(0) 行列式为 1，故始终为 1。且 E′(0)=A，于是 A 是 SO(3) 的切向量。",
        "反对称 3×3 矩阵由三个上三角元素自由决定，对角为零、下三角由其相反数确定，故维数 3。对应 Lie 括号为矩阵交换子，闭合性由转置计算验证。$\\square$"
      ]
    },
    {
      "id": "quantum-hermitian-real-spectrum",
      "topics": [
        "applied/quantum-theory",
        "algebra/spectral-decomposition"
      ],
      "title": "Hermitian 矩阵的特征值为实数",
      "statement": "若 A=A* 且 Av=λv、v≠0，则 λ∈R。",
      "dependencies": [
        "complex-basic-rules"
      ],
      "idea": "内积自伴性使 ⟨Av,v⟩ 同时等于 λ 与其共轭乘以 ‖v‖²。",
      "steps": [
        "由 Av=λv，按内积对第一变量共轭线性或第二变量共轭线性的约定，⟨Av,v⟩ 等于 λ 或其共轭乘以 ‖v‖²；自伴性同时给 ⟨Av,v⟩=⟨v,Av⟩，后者是前者的复共轭。",
        "因此 λ‖v‖²=\\bar λ‖v‖²。因 v≠0，‖v‖²>0，约去得 λ=\\bar λ，故 λ 为实数。该结论不要求先证明 Hermitian 矩阵可对角化。$\\square$"
      ]
    },
    {
      "id": "dirichlet-rational-approximation",
      "topics": [
        "numbertheory/heights",
        "numbertheory/lattice-methods",
        "numbertheory/diophantine-approximation"
      ],
      "title": "Dirichlet 有理逼近定理",
      "statement": "对任意实数 α 与正整数 Q，存在整数 p,q，1≤q≤Q 且 |qα−p|<1/Q。若 α 无理，则可取到无穷多个不同分数 p/q 使 |α−p/q|<1/q²。",
      "dependencies": [
        "binomial-count",
        "archimedean"
      ],
      "idea": "先证明实数小数部分存在，再将 Q+1 个小数部分放进 Q 个等长区间，两个落同区间后相减。",
      "steps": [
        "对每个实数 x=jα，Archimedes 性质给出整数 M>|x|+1。有限集合 {m∈Z:−M≤m≤x} 非空，取其最大元 n；若 x≥n+1，则 n+1 仍在集合中，矛盾。因此 n≤x<n+1，定义 ⌊x⌋=n、{x}=x−n∈[0,1)。这也逐项证明本论证所用整数部分存在。",
        "取 x_j={jα}，j=0,…,Q，共 Q+1 个小数部分，均位于 [0,1)。将 [0,1) 分成 Q 个半开区间，每段长 1/Q。抽屉原理保证存在 i<j 落在同一段。",
        "两者差的绝对值小于 1/Q，且 x_j−x_i=(j−i)α−(⌊jα⌋−⌊iα⌋)。令 q=j−i、p=⌊jα⌋−⌊iα⌋，得 1≤q≤Q 与所需严格不等式。",
        "若 α 无理，则 p/q 不等于 α。对每个 Q 得到误差 |α−p/q|<1/(qQ)≤1/q²。若只出现有限多个有理数 p/q，它们到无理 α 的最小距离为正；但 |α−p/q|<1/(qQ)≤1/Q，令 Q 趋于无穷即矛盾。因此有无穷多个不同有理数值。将各分数约为既约形式 p′/q′，误差不变且 q′≤q，故 |α−p′/q′|<1/q²≤1/(q′)²；不同有理数值仍给出无穷多个不同既约分数。$\\square$"
      ]
    },
    {
      "id": "quadratic-radical-formula",
      "topics": [
        "algebra/solvability-by-radicals",
        "algebra/polynomial-rings"
      ],
      "title": "二次方程根式公式",
      "statement": "在特征不为 2 的域中，ax²+bx+c=0（a≠0）的根在添加判别式平方根后为 x=(-b±√(b²−4ac))/(2a)；故二次方程可由根式求解。",
      "dependencies": [
        "def-ring-field"
      ],
      "idea": "配方把二次方程化为一个平方等式。",
      "steps": [
        "除以 a 得 x²+(b/a)x+c/a=0。两边加 (b/(2a))²，并整理： (x+b/(2a))²=(b²−4ac)/(4a²)。",
        "取域的代数闭包中的平方根 δ 满足 δ²=b²−4ac。平方等式等价于 x+b/(2a)=±δ/(2a)，移项得公式中的两根。若判别式为零，两根相同；若判别式非平方，允许按根式扩域添加其平方根。",
        "二次公式证明二次多项式可解，不证明一般高次方程可解；一般五次方程不存在统一根式公式是更强的伽罗瓦理论结论。$\\square$"
      ]
    },
    {
      "id": "hamiltonian-energy-conservation",
      "topics": [
        "geometry/hamiltonian-systems",
        "applied/classical-mechanics"
      ],
      "title": "哈密顿流守恒能量",
      "statement": "若 H(q,p) 为 C¹ 哈密顿量且轨道满足 q̇=∂H/∂p、ṗ=−∂H/∂q，则沿每条经典解 H(q(t),p(t)) 恒定。",
      "dependencies": [
        "ftc-second"
      ],
      "idea": "链式法则下两项逐项抵消。",
      "steps": [
        "沿可微解对复合函数求导，链式法则给 dH/dt=Σ_i[(∂H/∂q_i)q̇_i+(∂H/∂p_i)ṗ_i]。",
        "代入哈密顿方程，求和变为 Σ_i[(∂H/∂q_i)(∂H/∂p_i)−(∂H/∂p_i)(∂H/∂q_i)]=0。故导数处处为零。",
        "由中值定理或微积分基本定理，任意时间区间上的 H 值相同。能量守恒依赖自治 Hamiltonian；显含时间的 H 通常有 dH/dt=∂H/∂t。$\\square$"
      ]
    },
    {
      "id": "cyclic-coordinate-momentum",
      "topics": [
        "applied/classical-mechanics",
        "geometry/lagrangian-submanifolds"
      ],
      "title": "循环坐标对应广义动量守恒",
      "statement": "若拉格朗日量 L(q,q̇,t) 不依赖坐标 q_j，则满足 Euler–Lagrange 方程的轨道上广义动量 p_j=∂L/∂q̇_j 为常数。",
      "dependencies": [
        "ftc-second"
      ],
      "idea": "Euler–Lagrange 方程右端 ∂L/∂q_j 为零。",
      "steps": [
        "Euler–Lagrange 方程对第 j 坐标写作 d/dt(∂L/∂q̇_j)=∂L/∂q_j。循环坐标条件使右端恒为零。",
        "因此 p_j 的时间导数为零；对任意两时刻积分得 p_j(t₂)−p_j(t₁)=0。若拉格朗日量显含 q_j，结论一般失效；对称性更一般的守恒量由 Noether 定理刻画。$\\square$"
      ]
    },
    {
      "id": "scalar-feedback-stabilization",
      "topics": [
        "applied/feedback-control",
        "applied/state-space"
      ],
      "title": "可控标量系统的状态反馈稳定化",
      "statement": "对连续时间系统 ẋ=ax+bu，若 b≠0，则存在状态反馈 u=−kx 使闭环指数渐近稳定。",
      "dependencies": [
        "linear-controllability-kalman"
      ],
      "idea": "选择增益使唯一闭环特征值为负数。",
      "steps": [
        "代入反馈得 ẋ=(a−bk)x。取 k=(a+1)/b（因 b≠0 合法），闭环方程变成 ẋ=−x。",
        "分离变量或直接求解得 x(t)=x(0)e^(−t)，所以任意初值下 x(t)→0，且 |x(t)|≤|x(0)|e^(−t)。这证明一维连续时间情形；高维可控系统的极点配置需要完整线性代数证明。$\\square$"
      ]
    },
    {
      "id": "least-squares-normal-equations",
      "topics": [
        "applied/parameter-calibration",
        "applied/convex-optimization"
      ],
      "title": "最小二乘解满足正规方程",
      "statement": "对实矩阵 A 与向量 b，若 x* 最小化 ‖Ax−b‖₂²，则 Aᵀ(Ax*−b)=0；若 A 满列秩，唯一最小二乘解为 (AᵀA)⁻¹Aᵀb。",
      "dependencies": [
        "convex-local-global"
      ],
      "idea": "沿任意方向求二次目标的一阶导数为零，等价于残差正交于列空间。",
      "steps": [
        "令 r=Ax*−b。对任意方向 h，函数 g(t)=‖A(x*+th)−b‖² 在 t=0 取最小值。展开为 ‖r+tAh‖²=‖r‖²+2t hᵀAᵀr+t²‖Ah‖²，因此其 t=0 导数为 2hᵀAᵀr，必须对所有 h 为零。",
        "故 Aᵀr=0，即正规方程 AᵀAx*=Aᵀb。若 A 列满秩，则对非零 h，hᵀAᵀAh=‖Ah‖²>0，AᵀA 正定可逆，解唯一并为所列式。",
        "反过来满足正规方程的 x* 是全局最小点，因为对任意 h，目标差 ‖r+Ah‖²−‖r‖²=2hᵀAᵀr+‖Ah‖²=‖Ah‖²≥0。秩亏时最小点仍存在但参数解可能不唯一。$\\square$"
      ]
    },
    {
      "id": "omitted-variable-bias",
      "topics": [
        "probability/confounding",
        "probability/identification-conditions"
      ],
      "title": "遗漏变量偏差的线性代数公式",
      "statement": "若中心化变量满足 Y=βD+γU+ε 且 E[Dε]=0，单变量总体最小二乘回归 Y 对 D 的系数为 β+γ Cov(D,U)/Var(D)（Var(D)>0）。",
      "dependencies": [
        "least-squares-normal-equations",
        "variance-mean"
      ],
      "idea": "把总体正规方程中的协方差按结构方程线性展开。",
      "steps": [
        "中心化后一元最小二乘目标为 E[(Y−bD)²]。对 b 求导并令零，得 b=E[DY]/E[D²]=Cov(D,Y)/Var(D)。",
        "代入 Y=βD+γU+ε，Cov(D,Y)=βVar(D)+γCov(D,U)+Cov(D,ε)。由外生条件 Cov(D,ε)=0，除以 Var(D) 得 b=β+γCov(D,U)/Var(D)。",
        "所以遗漏变量 U 与处理 D 不相关，或 U 不影响 Y（γ=0）时该项消失；否则一般有偏。这个代数式本身不建立因果解释，结构方程与外生条件必须由研究设计或额外假设支持。$\\square$"
      ]
    },
    {
      "id": "beta-binomial-predictive",
      "topics": [
        "probability/posterior-predictive",
        "probability/conjugate-priors"
      ],
      "title": "Beta-Binomial 后验预测分布",
      "statement": "若 θ∼Beta(α,β)，给定 θ 后未来 m 次 Bernoulli 独立，未来成功数 K 的预测概率为 P(K=k)=C(m,k)B(α+k,β+m−k)/B(α,β)。",
      "dependencies": [
        "beta-gamma-recurrence"
      ],
      "idea": "对条件二项概率关于 Beta 先验密度积分并合并幂次。",
      "steps": [
        "条件于 θ，K 的概率为 C(m,k)θ^k(1−θ)^(m−k)。先验密度为 θ^(α−1)(1−θ)^(β−1)/B(α,β)。",
        "全概率公式对 θ 积分：P(K=k)=C(m,k)/B(α,β)∫₀¹θ^(α+k−1)(1−θ)^(β+m−k−1)dθ。按 Beta 函数定义，该积分为 B(α+k,β+m−k)，得到公式。",
        "这些概率之和为一也可由二项式定理先对固定 θ 求和为 1，再对先验积分；故公式确为概率分布。预测成功次数通常相关，因为共享的随机 θ 被积分掉。$\\square$"
      ]
    },
    {
      "id": "neyman-pearson-lemma",
      "topics": [
        "probability/hypothesis-testing"
      ],
      "title": "Neyman–Pearson 引理的简单假设版本",
      "statement": "对具有密度 p₀,p₁ 的两个简单假设，在给定显著性水平 α 下，似然比检验 φ*=1{p₁/p₀>c}（边界随机化以达到 α）使检验功效最大。",
      "dependencies": [
        "integral-linearity"
      ],
      "idea": "比较任意竞争检验与似然比检验的逐点加权差，符号处处非负。",
      "steps": [
        "设 φ 为任意 [0,1]-值检验且 E₀φ≤α；选择阈值 c≥0，使 φ* 在似然比大于 c 处取 1、小于 c 处取 0，并在等号处适当随机化，从而 E₀φ*=α（若可达到）。",
        "逐点有 (φ*−φ)(p₁−c p₀)≥0：若 p₁>cp₀，则 φ*=1 且因 φ≤1 两因子非负；若 p₁<cp₀，则 φ*=0 且 φ≥0，两因子同为非正；等号处乘积为零。",
        "积分得 E₁φ*−E₁φ≥c(E₀φ*−E₀φ)≥0，因为 c≥0 且 E₀φ* =α≥E₀φ。故 φ* 功效最大。若密度比阈值无法精确达到 α，可在边界集合随机化；支配结论仍成立。$\\square$"
      ]
    },
    {
      "id": "rational-unit-circle-points",
      "topics": [
        "numbertheory/rational-points",
        "numbertheory/integer-equations"
      ],
      "title": "单位圆有理点的斜率参数化",
      "statement": "单位圆 x²+y²=1 上除 (-1,0) 外的有理点恰为 x=(1−t²)/(1+t²)、y=2t/(1+t²)，其中 t∈Q；(-1,0) 是遗漏点。",
      "dependencies": [
        "euclid-lemma"
      ],
      "idea": "过圆上固定点作有理斜率直线，与圆的第二交点由二次方程求出。",
      "steps": [
        "取斜率参数直线 y=t(x+1)，它经过 (-1,0)。代入圆方程：x²+t²(x+1)²=1。一个根为 x=−1，因对应已知交点；展开并因式分解另一个根，得 x=(1−t²)/(1+t²)，再代回直线得 y=2t/(1+t²)。",
        "若 t∈Q，分母非零，所得 x,y 为有理数；直接计算 (1−t²)²+(2t)²=(1+t²)²，故点在单位圆上。",
        "反之设有理点 (x,y)≠(−1,0)。因 x≠−1（圆方程若 x=−1 则 y=0），令 t=y/(x+1)∈Q。由 y²=(1−x)(1+x) 可得 t²=(1−x)/(1+x)，解得 x=(1−t²)/(1+t²)，y=t(x+1)=2t/(1+t²)。所以参数化穷尽所有有理点。$\\square$"
      ]
    },
    {
      "id": "rational-algebraic-integer",
      "topics": [
        "numbertheory/algebraic-integers",
        "numbertheory/number-fields"
      ],
      "title": "有理代数整数必为整数",
      "statement": "若有理数 r 是某个首一整系数多项式的根，则 r∈Z。",
      "dependencies": [
        "rational-root-theorem"
      ],
      "idea": "有理根定理给既约分数的分母整除首项系数 1。",
      "steps": [
        "设 r=a/b 为既约分数、b>0，并满足 x^n+c_(n−1)x^(n−1)+…+c₀=0，其中 c_i∈Z。此多项式首项系数为 1。",
        "有理根定理（前引理）给 b|1，所以 b=1。于是 r=a 为整数。整数反过来是首一一次多项式 x−a 的根，故有理代数整数恰为整数。$\\square$"
      ]
    },
    {
      "id": "wilson-primality-test",
      "topics": [
        "numbertheory/primality-testing",
        "numbertheory/divisibility-primes"
      ],
      "title": "Wilson 定理及其素性判据",
      "statement": "n>1 为素数当且仅当 (n−1)!≡−1 (mod n)。",
      "dependencies": [
        "prime-divisor",
        "unique-factorization"
      ],
      "idea": "素数模下非零剩余成对与其逆元相消；合数情形阶乘被 n 整除（n=4 单独核算）。",
      "steps": [
        "若 n=p 为素数，非零模 p 剩余构成乘法群。将每个元素与其逆元配对，乘积为 1；自逆元素满足 x²≡1，因此 p|(x−1)(x+1)。因 p 素，x≡±1。于是除 1 与 −1 外所有元素成对相消，(p−1)!≡−1 mod p。p=2 也直接成立。",
        "若 n 合成且 n≠4，写 n=ab，1<a≤b<n。若 a<b，则 a,b 是 1,…,n−1 中不同因子，故 n| (n−1)!。若 a=b，则 n=a²；除 a=2（n=4）外，a 与 2a 是两个不超过 n−1 的因子，故 n| (n−1)!。n=4 时 3!=6≡2 而 −1≡3 mod4。",
        "因此每个合数的阶乘余数为 0（n=4 为 2），均不等于 −1；结合素数方向即得判据。Wilson 判据虽是充要条件，但直接算阶乘对二进制大整数并非已知的高效素性测试。$\\square$"
      ]
    },
    {
      "id": "padic-ultrametric",
      "topics": [
        "numbertheory/local-fields"
      ],
      "title": "p 进绝对值的超度量不等式",
      "statement": "定义非零整数 n 的 p 进赋值 v_p(n) 为 p 的指数并令 |n|_p=p^(−v_p(n))，延拓到有理数，则 |x+y|_p≤max(|x|_p,|y|_p)。",
      "dependencies": [
        "prime-divisor",
        "unique-factorization"
      ],
      "idea": "整除的赋值满足 v_p(x+y)≥min(v_p(x),v_p(y))。",
      "steps": [
        "先取非零有理数 x,y，令 k=min(v_p(x),v_p(y))。写 x=p^k a、y=p^k b，其中 a,b 的 p 进赋值非负（有理分母已约去 p 因子）。",
        "x+y=p^k(a+b)，而 a+b 的 p 进赋值非负，故 v_p(x+y)≥k。映射 r↦p^(−v_p(r)) 对非零有理数乘法相容，因此 |x+y|_p≤p^(−k)=max(|x|_p,|y|_p)。若 x+y=0，左边为零，不等式直接成立。",
        "取完备化可将不等式连续延伸到 Q_p。它比普通三角不等式强；本证明只建立绝对值性质，不构造 Q_p 的完备化。$\\square$"
      ]
    },
    {
      "id": "mobius-upper-half-plane",
      "topics": [
        "numbertheory/modular-transformations"
      ],
      "title": "模变换保持上半平面",
      "statement": "若 a,b,c,d∈R 且 ad−bc=1，则 τ↦(aτ+b)/(cτ+d) 将上半平面 Imτ>0 映入自身。",
      "dependencies": [
        "complex-basic-rules"
      ],
      "idea": "直接乘以分母的共轭并取虚部。",
      "steps": [
        "当 Imτ>0 时，cτ+d≠0：若 c≠0，其虚部 c Imτ 非零；若 c=0，则行列式条件迫使 d≠0。故变换有定义。",
        "乘分母共轭并展开，Im((aτ+b)/(cτ+d))=(ad−bc)Imτ/|cτ+d|²。行列式为 1，分母模平方严格正，所以虚部仍为正。",
        "因此特别地整数矩阵 SL₂(Z) 的标准模变换保持上半平面。该计算只证保持性，模形式的变换律和基本域还需另外证明。$\\square$"
      ]
    },
    {
      "id": "contractible-fundamental-group",
      "topics": [
        "geometry/fundamental-group"
      ],
      "title": "可缩空间的基本群平凡",
      "statement": "若拓扑空间 X 可缩，则对任意基点 x₀，其基本群 π₁(X,x₀) 为平凡群。",
      "dependencies": [
        "continuous-compact"
      ],
      "idea": "可缩给出恒等映射到常值映射的同伦，故任意环路可在自由同伦下收缩为常值环路。",
      "steps": [
        "可缩意味着存在同伦 H:X×[0,1]→X，使 H(x,0)=x、H(x,1)=x* 为固定点。给定基于 x₀ 的环路 γ，映射 G(s,t)=H(γ(s),t) 连续；G(s,0)=γ(s)，G(s,1)=x*，且 s=0,1 两条边均为路径 α(t)=H(x₀,t)。",
        "虽然中间环路的基点沿 α 移动，但可将方形 [0,1]² 的边界按次序读取：下边是 γ，上边为常值，左右边是 α 与其反向。该边界在 X 中由 G 延拓到整张方形，所以边界环路可缩。等价地，γ 在基点 x₀ 处与 α·常值·α⁻¹ 基同伦，后者可缩为常值。",
        "因此每个基于 x₀ 的环路类都是单位元，π₁(X,x₀) 平凡。这里可缩同伦允许基点移动；方形边界论证解释了为何仍推出基点基本群结论。$\\square$"
      ]
    },
    {
      "id": "cohomology-d-square-zero",
      "topics": [
        "geometry/cohomology",
        "geometry/homology-groups-topology"
      ],
      "title": "外微分满足 d²=0",
      "statement": "对光滑微分形式，外微分算子满足 d(dω)=0；因此精确形式皆闭形式。",
      "dependencies": [
        "def-differential-forms"
      ],
      "idea": "坐标表达中混合二阶偏导相等，而交替基形式交换时变号。",
      "steps": [
        "在局部坐标写 k-形式 ω=Σ_I f_I dx_(i₁)∧…∧dx_(i_k)。外微分按 dω=Σ_j,I (∂_j f_I) dx_j∧dx_I 定义。",
        "再作用一次，任意系数二阶项为 (∂_ℓ∂_j f_I) dx_ℓ∧dx_j∧dx_I。交换 j 与 ℓ 的对应项时，C² 光滑性给 ∂_ℓ∂_j f_I=∂_j∂_ℓ f_I，而外积反交换给 dx_ℓ∧dx_j=−dx_j∧dx_ℓ；两项相消。j=ℓ 项因 dx_j∧dx_j=0 自身为零。",
        "所有项均成对消去，故 d²ω=0。若 dω=0，称 ω 闭；若 ω=dη，则 dω=d²η=0，所以精确形式总是闭形式，但反向需拓扑条件。$\\square$"
      ]
    },
    {
      "id": "chain-components-h0",
      "topics": [
        "geometry/homology-groups-topology"
      ],
      "title": "单纯同调的零维群记录路径分支",
      "statement": "对有限三角剖分 K，H₀(K;Z) 是由顶点生成、并施加“同一边两端相等”关系的自由阿贝尔群，故每个路径连通分支贡献一个 Z。",
      "dependencies": [
        "homology-defined",
        "chain-map-homology"
      ],
      "idea": "边界把一条边的两端点之差作为关系；沿边路径传递生成同一分支等价。",
      "steps": [
        "0 链群 C₀ 是全部顶点所生成的自由阿贝尔群。边 e=[v₀,v₁] 的边界为 ∂₁e=v₁−v₀；由于没有更低维边界，H₀=C₀/im∂₁。",
        "取商后每条边两端顶点相等，沿任意边路径反复使用关系，故同一 1-骨架连通分支的所有顶点类相同。反之边界的每个生成元只涉及同一分支内的两个端点，因此不同分支的顶点类不会被关系识别。",
        "每个分支选一个代表顶点，代表类彼此独立并生成整个商群，所以 H₀≅Z^c，其中 c 为 1-骨架分支数。有限三角复形的几何实现分支恰由其 1-骨架分支给出，因为高维单形通过其边连接顶点。$\\square$"
      ]
    },
    {
      "id": "integer-ideal-factorization",
      "topics": [
        "numbertheory/ideal-factorization",
        "algebra/ideals"
      ],
      "title": "整数环中的非零理想唯一分解",
      "statement": "每个非零理想 I⊲Z 唯一写成有限个不同素理想 (p) 的正整数幂之积；若 I=nZ 且 n=∏p^{e_p}，则 I=∏(p)^{e_p}。",
      "dependencies": [
        "unique-factorization",
        "prime-divisor"
      ],
      "idea": "先用最小正元素说明整数理想主生成，再用整数素因子分解逐项计算理想乘积。",
      "steps": [
        "取非零理想 I。它含非零整数，若含负数也含其相反数，故存在最小正整数 n∈I。对任意 a∈I，带余除法写 a=qn+r、0≤r<n；因 a、qn∈I，r∈I，最小性迫使 r=0。因此 I⊆nZ；而 n∈I 及理想封闭给 nZ⊆I，故 I=nZ。",
        "唯一分解给 n=∏p^{e_p}。主理想乘积 (a)(b)=(ab)：每个有限和项都是 ab 的倍数，而 ab 本身是乘积生成元。归纳得 nZ=∏(pZ)^{e_p}。",
        "若另有素理想幂分解，Z 的非零素理想由其正生成元为素数可知恰为 pZ；理想相等等价于正生成元相等，整数唯一分解迫使每个素数指数相同。因此该分解唯一。此论证针对 PID Z，不证明一般数环的理想分解定理。$\\square$"
      ]
    },
    {
      "id": "pid-class-group-trivial",
      "topics": [
        "numbertheory/class-groups",
        "algebra/ideals"
      ],
      "title": "主理想整环的理想类群平凡",
      "statement": "若整环 R 的每个非零理想均主生成，则其理想类群 Cl(R) 为平凡群。",
      "dependencies": [
        "ideal-quotient"
      ],
      "idea": "每个分数理想类都有主生成元，因而代表理想与单位理想相差一个主分数理想。",
      "steps": [
        "理想类群由非零分数理想对主分数理想取商构成。任取非零分数理想 J，按定义存在非零 d∈R 使 dJ⊆R；dJ 是 R 的非零整理想，故由假设 dJ=aR。",
        "于是 J=(a/d)R 是主分数理想，其在类群中的类就是单位类。任意类皆单位类，因此类群只有一个元素。对 R=Z 即给出其类数为一；数环的理想类群有限性并不由此平凡特例推出。$\\square$"
      ]
    },
    {
      "id": "sieve-inclusion-exclusion",
      "topics": [
        "numbertheory/sieve-methods"
      ],
      "title": "有限筛的容斥计数公式",
      "statement": "对有限集合 A 与子集 B₁,…,B_m，未落入任何 B_i 的元素数为 Σ_(J⊆{1,…,m})(−1)^|J| |A∩⋂_(j∈J)B_j|，空交约定为 A。",
      "dependencies": [
        "finite-boolean-atoms",
        "binomial-count"
      ],
      "idea": "对每个元素独立计算它在交替和中的总系数。",
      "steps": [
        "固定 x∈A，令 r 为包含 x 的集合 B_i 个数。x 在右侧总系数为 Σ_(J⊆[m], J⊆I_x)(−1)^|J|=Σ_(j=0)^r C(r,j)(−1)^j=(1−1)^r。",
        "若 r=0，该系数为 1，恰应计入未被任何 B_i 覆盖的左侧；若 r>0，系数为 0，恰应排除。对全部 x∈A 求和即可得到等式。",
        "这是筛法常用的精确有限容斥恒等式；实际筛上界会截断此交替和，所得误差还需另行控制。$\\square$"
      ]
    },
    {
      "id": "prime-exponential-sum-geometric",
      "topics": [
        "numbertheory/exponential-sums"
      ],
      "title": "线性相位指数和的几何级数界",
      "statement": "若 θ∉Z，则对任意整数 M≤N，有 |Σ_(n=M)^N exp(2πi nθ)|≤1/|sin(πθ)|。",
      "dependencies": [
        "complex-basic-rules"
      ],
      "idea": "闭式几何级数的分母模长为 2|sin(πθ)|，分子模长至多 2。",
      "steps": [
        "令 z=exp(2πiθ)。θ 非整数保证 z≠1。几何级数求和得 Σ_(n=M)^N z^n=z^M(1−z^(N−M+1))/(1−z)。",
        "有 |z^M|=1、|1−z^k|≤2，而 |1−z|=|1−exp(2πiθ)|=2|sin(πθ)|。取模即得上界。$\\square$"
      ]
    },
    {
      "id": "levi-civita-existence",
      "topics": [
        "geometry/riemannian-metric",
        "geometry/curvature-geodesics"
      ],
      "title": "黎曼度量存在唯一 Levi-Civita 联络",
      "statement": "每个光滑黎曼度量局部存在唯一 torsion-free 且与度量相容的联络，其 Christoffel 符号为 Γ^k_ij=½g^(kℓ)(∂_i g_jℓ+∂_j g_iℓ−∂_ℓ g_ij)。",
      "dependencies": [
        "def-riemannian-metric"
      ],
      "idea": "将度量相容方程对三个指标循环排列，利用联络对称性解出系数。",
      "steps": [
        "在坐标图中 g_ij 是正定矩阵场，故逆矩阵 g^(ij) 光滑存在。定义 Γ^k_ij 为所列公式；下标 i,j 对称，因此联络无挠。",
        "将公式乘 g_(mk) 并对 k 求和，得 g_(mℓ)Γ^ℓ_ki=½(∂_k g_im+∂_i g_km−∂_m g_ki)。再交换 i,j 写出 g_(mℓ)Γ^ℓ_kj=½(∂_k g_jm+∂_j g_km−∂_m g_kj)。在所需坐标相容恒等式中取 m=j 与 m=i 相加，混合项抵消，得 ∂_k g_ij=Γ^ℓ_ki g_ℓj+Γ^ℓ_kj g_iℓ。",
        "反之，若另一个联络系数满足这两个条件，记 Γ_(kij)=g_(jℓ)Γ^ℓ_ki。度量相容给 ∂_k g_ij=Γ_(kij)+Γ_(kji)，无挠给 Γ_(kij)=Γ_(ikj)。对 (k,i,j) 循环写三条相容式，两条相加减第三条，唯一解为 Γ_(kij)=½(∂_k g_ij+∂_i g_kj−∂_j g_ki)。乘逆度量升指标正是给定公式，故唯一。局部坐标公式在坐标变换下定义同一协变导数，因其可由上述内在两条件唯一刻画，故局部构造粘合。$\\square$"
      ]
    },
    {
      "id": "gaussian-curvature-geodesic-speed",
      "topics": [
        "geometry/curvature-geodesics",
        "geometry/riemannian-metric"
      ],
      "title": "黎曼测地线保持速度",
      "statement": "若 γ 是黎曼流形上的仿射参数测地线，则 ‖γ̇(t)‖_g 为常数。",
      "dependencies": [
        "levi-civita-existence"
      ],
      "idea": "Levi-Civita 联络与度量相容，测地线满足 ∇_(γ̇)γ̇=0。",
      "steps": [
        "沿曲线对速度平方求导。度量相容性给 d/dt g(γ̇,γ̇)=2g(∇_(γ̇)γ̇,γ̇)。",
        "测地线方程令加速度 ∇_(γ̇)γ̇=0，故上述导数为零，速度平方恒定。因范数非负，速度范数也恒定。",
        "结论依赖仿射参数；任意非线性重参数化通常不保持常速。测地线存在唯一性及联络的构造是其前置理论。$\\square$"
      ]
    },
    {
      "id": "riemannian-distance-symmetry",
      "topics": [
        "geometry/riemannian-metric"
      ],
      "title": "黎曼距离的对称性",
      "statement": "若连通黎曼流形两点间距离定义为连接它们的分段光滑曲线长度下确界，则 d(p,q)=d(q,p)。",
      "dependencies": [
        "def-riemannian-metric"
      ],
      "idea": "反向参数化保持曲线长度，因而两方向可行曲线长度集合相同。",
      "steps": [
        "若 γ:[0,1]→M 从 p 到 q，定义反向曲线 γ̄(t)=γ(1−t)，它从 q 到 p，速度为 −γ̇(1−t)。",
        "黎曼范数满足 ‖−v‖=‖v‖，变量换元给 L(γ̄)=∫₀¹‖γ̇(1−t)‖dt=L(γ)。所以 p 到 q 每条曲线都对应一条等长反向曲线，反向操作也是自身的逆，两个长度集合相同；取下确界得距离对称。$\\square$"
      ]
    },
    {
      "id": "covering-path-lift-uniqueness",
      "topics": [
        "geometry/fibrations",
        "geometry/fundamental-group"
      ],
      "title": "覆盖空间路径提升的唯一性",
      "statement": "若 p:E→B 是覆盖映射，给定路径 γ:[0,1]→B 及 e₀∈p⁻¹(γ(0))，至多有一条连续提升 γ̃ 满足 γ̃(0)=e₀ 且 p∘γ̃=γ。",
      "dependencies": [
        "def-covering-map"
      ],
      "idea": "若两提升不同，首次分离时落在同一均匀覆盖邻域的不同片中，与片上 p 单射矛盾。",
      "steps": [
        "设 γ̃₁、γ̃₂ 是两条具有相同初值的提升。令 A={t:对所有 s∈[0,t]，γ̃₁(s)=γ̃₂(s)}。由初值连续性及覆盖邻域中 p 在每张片上同胚，A 含某个初始小区间。",
        "令 τ 为 A 的上确界。连续性给 γ̃₁(τ)=γ̃₂(τ)。取 γ(τ) 的均匀覆盖邻域 U；因 γ 连续，τ 附近的路径值留在 U。τ 处两提升同在某一片 V（相同点唯一所在片），缩小邻域后连续性使二者仍在 V。",
        "p|_V 单射且两提升投影都等于 γ，所以 τ 邻域内二者相同；若 τ<1，这将 A 向右延伸，矛盾。故 τ=1，全部时刻相同。此证明给唯一性；存在性需用紧区间有限分割逐片构造。$\\square$"
      ]
    },
    {
      "id": "singular-cusp-jacobian",
      "topics": [
        "geometry/singularities",
        "geometry/algebraic-varieties-geometry"
      ],
      "title": "平面尖点 y²=x³ 在原点奇异",
      "statement": "代数曲线 C={(x,y):y²=x³} 在原点的梯度判据给奇异点，而在其余点梯度非零。",
      "dependencies": [
        "chain-rule"
      ],
      "idea": "定义多项式 F=y²−x³，其梯度在曲线上直接计算。",
      "steps": [
        "令 F(x,y)=y²−x³。隐函数定理的光滑判据要求至少一个偏导非零；∇F=(−3x²,2y)。",
        "若曲线上 (x,y)≠(0,0)，则不可能同时 x=0 与 y=0，故梯度至少一个分量非零，曲线在该点是光滑一维子流形。原点处梯度为零，判据失效。",
        "进一步，实曲线可参数化为 (x,y)=(t²,t³)，在 t=0 的速度为 (0,0)，呈尖点而非正则浸入曲线；复代数曲线的奇异性同由梯度判据检测。梯度为零一般表示候选奇点，需结合局部维数确认。$\\square$"
      ]
    },
    {
      "id": "birational-open-isomorphism",
      "topics": [
        "geometry/birational-geometry",
        "geometry/algebraic-varieties-geometry"
      ],
      "title": "双有理映射在稠密开集上互逆",
      "statement": "若不可约代数簇 X,Y 之间有有理映射 f,g，且 g∘f 与 f∘g 在定义处分别等于恒等映射，则存在稠密开集 U⊆X、V⊆Y，使 f:U→V 与 g:V→U 互为正则同构。",
      "dependencies": [
        "def-rational-map"
      ],
      "idea": "有理映射在定义域开集上正则；有限个稠密开条件取交仍稠密。",
      "steps": [
        "取 f、g 各自最大定义开集 D_f⊆X、D_g⊆Y。按有理映射定义，它们在这些开集上由多项式商局部表示，因而是正则映射。",
        "考虑 U=D_f∩f⁻¹(D_g)∩Dom(g∘f=id)；由复合定义域及给定恒等关系，U 是非空开集。不可约性使任一非空开集稠密。令 V=g⁻¹(U)∩D_g，并可再缩小 U、V 使两复合关系同时处处成立。",
        "在 U、V 上，f 与 g 正则且 g∘f=id_U、f∘g=id_V，因此它们互为代数簇同构。双有理不意味着原簇全局同构，差异可集中在被删去的闭子集。$\\square$"
      ]
    },
    {
      "id": "tor-cyclic-groups",
      "topics": [
        "algebra/ext-tor",
        "algebra/modules"
      ],
      "title": "循环群张量导出的 Tor 计算",
      "statement": "对正整数 n,m，有 Tor₁^Z(Z/nZ,Z/mZ)≅Z/gcd(n,m)。",
      "dependencies": [
        "def-chain",
        "rank-nullity"
      ],
      "idea": "用自由分解计算 Tor 后，问题化为模 m 中被 n 消去的元素子群。",
      "steps": [
        "有自由 Z-模分解 0→Z --×n→ Z→Z/nZ→0：乘 n 单射，其余处正合。按 Tor 的自由分解定义，与 Z/mZ 张量后得到复形 0→Z/mZ --×n→ Z/mZ→0，其第一同调即乘 n 映射的核。",
        "令 g=gcd(n,m)，写 n=gn′、m=gm′ 且 gcd(n′,m′)=1。剩余类 x mod m 落入核当且仅当 m|nx，即 gm′|gn′x，等价于 m′|x。模 gm′ 中满足此条件的类恰为 0,m′,2m′,…,(g−1)m′，构成循环群阶 g。",
        "因此核同构于 Z/gZ，得到公式。不同教材用同调定义 Ext/Tor；此处只计算由该自由分解定义的 Tor₁。$\\square$"
      ]
    },
    {
      "id": "dimension-theorem-vector",
      "topics": [
        "algebra/dimension-theory",
        "algebra/basis-dimension"
      ],
      "title": "线性映射的秩—零度维数公式",
      "statement": "有限维向量空间 V 上线性映射 T:V→W 满足 dim V=dim ker T+dim im T。",
      "dependencies": [
        "rank-nullity",
        "basis-extension"
      ],
      "idea": "先取核的基，再把它扩成 V 的基；扩充向量的像构成像空间的基。",
      "steps": [
        "取 ker T 的基 u₁,…,u_k，并按基扩充定理补为 V 的基 u₁,…,u_k,v₁,…,v_r。",
        "T(v_j) 张成 im T：任意 x∈V 展开为核基与 v_j 的线性组合，作用 T 后核项消失。",
        "若 Σ a_jT(v_j)=0，则 Σa_jv_j∈ker T，故可由 u_i 线性组合表示；V 的这组基线性无关迫使所有 a_j=0。因此这些像是像空间的一组基，dim im T=r。总基长 k+r，故 dim V=k+r=dim ker T+dim im T。$\\square$"
      ]
    },
    {
      "id": "quintic-binomial-radicals",
      "topics": [
        "algebra/quintic",
        "algebra/solvability-by-radicals"
      ],
      "title": "二项式方程可用根式求解",
      "statement": "对任意正整数 n，方程 x^n=a 在含 a 的代数闭包中可通过一次 n 次根式扩张求解；特别地，纯五次方程可根式求解。",
      "dependencies": [
        "def-ring-field"
      ],
      "idea": "按根式扩张的定义直接添加 a 的 n 次根。",
      "steps": [
        "若 a=0，唯一根 x=0 已在底域中。若 a≠0，在代数闭包中取 α 满足 α^n=a；定义 K′=K(α)，它是由 n 次根式生成的扩域。",
        "α 满足原方程，且同一代数闭包中的全部根为 αζ，其中 ζ 遍历 n 次单位根；因为 (αζ)^n=a。若要求把所有根都放入一个根式扩域，再相继添加单位根即可。",
        "因此二项式方程的根可由根式表示。此结论不意味着一般五次多项式可根式求解；一般五次不可解需证明其一般伽罗瓦群非可解。$\\square$"
      ]
    },
    {
      "id": "sieve-trial-factorization-complexity",
      "topics": [
        "numbertheory/integer-factorization",
        "numbertheory/primality-testing"
      ],
      "title": "试除法的正确性与二进制复杂度",
      "statement": "对整数 N>1，若 N 合数则有素因子 p≤√N；逐一试除至 √N 可判定素性，但该算法对输入位数的最坏时间不是多项式界。",
      "dependencies": [
        "prime-divisor"
      ],
      "idea": "合数分解 N=ab 可排序为 1<a≤b，从而 a≤√N；每次除法用有限整数运算。",
      "steps": [
        "若 N 合数，写 N=ab 且 1<a≤b，则 a²≤ab=N，故 a≤√N。a 有素因子 p≤a，因此 N 有素因子不超过 √N。",
        "逐个检验不超过 √N 的候选整数（只检验素数更省）若无整除者，则 N 不可能合数；若发现非平凡因子，则直接判合数。因而算法正确。",
        "二进制输入长度约为 L=⌈log₂N⌉，循环候选数约 √N≈2^(L/2)，所以该朴素枚举给出指数于位长的上界，而不是关于 L 的多项式上界。复杂度结论说明“有限可判定”与“高效可判定”不同；并未证明任何因数分解下界。$\\square$"
      ]
    },
    {
      "id": "local-obstruction-square-three",
      "topics": [
        "numbertheory/local-solvability",
        "numbertheory/integer-equations"
      ],
      "title": "方程 x²=3 的 3 进局部障碍",
      "statement": "方程 x²=3 在 Q₃ 中无解，因而在 Q 中无解，尽管它在 R 中有解。",
      "dependencies": [
        "padic-ultrametric"
      ],
      "idea": "有理数的平方在 p 进赋值下赋值为偶数，而 v₃(3)=1。",
      "steps": [
        "若 x∈Q₃ 满足 x²=3，则 x≠0 且乘法赋值满足 v₃(x²)=2v₃(x)。对 Q₃，非零元素赋值取整数值，故左侧为偶数。",
        "右侧 v₃(3)=1 为奇数，矛盾。因此 Q₃ 中无解；任何有理解也自然给出 Q₃ 解，所以 Q 中无解。实数 √3 则确实存在，说明实可解不保证有理可解。$\\square$"
      ]
    },
    {
      "id": "covering-sphere-great-circles",
      "topics": [
        "geometry/spherical-geometry",
        "geometry/axioms-parallel"
      ],
      "title": "球面上任意两条大圆相交",
      "statement": "球面上任意两条不同大圆相交于一对对径点，因此球面几何不满足欧氏平行公设。",
      "dependencies": [
        "rank-nullity"
      ],
      "idea": "大圆是过球心平面的交线；两个不同平面过原点的交集为一条直线。",
      "steps": [
        "球心取原点，大圆分别为球面 S² 与过原点的二维平面 P、Q 的交。不同二维子空间在 R³ 中交于一条一维子空间 L（秩—零度公式给维数至少一，若不同则恰一）。",
        "L 与单位球面相交于两个相反的单位向量，所以两大圆有一对对径交点。若 P=Q，则大圆重合，仍非平行线。",
        "因此球面不存在两条互不相交的大圆测地线，和欧氏平面中给定直线外可作唯一平行线的公设不同。这里的“线”指大圆弧的延拓，不是任意小弧段。$\\square$"
      ]
    },
    {
      "id": "hyperbolic-mobius-isometry",
      "topics": [
        "geometry/hyperbolic-geometry",
        "numbertheory/modular-transformations"
      ],
      "title": "上半平面双曲度量的 Möbius 不变性",
      "statement": "对实系数矩阵 ad−bc=1 的 Möbius 变换 γ(z)=(az+b)/(cz+d)，上半平面度量 ds²=(dx²+dy²)/y² 保持不变。",
      "dependencies": [
        "mobius-upper-half-plane",
        "complex-basic-rules"
      ],
      "idea": "计算 Im γ(z)=y/|cz+d|² 与 |γ′(z)|=1/|cz+d|² 后两因子抵消。",
      "steps": [
        "复导数 γ′(z)=(ad−bc)/(cz+d)²=1/(cz+d)²，故欧氏长度微分满足 |dγ(z)|=|dz|/|cz+d|²。前引理给 Imγ(z)=y/|cz+d|²。",
        "因此 |dγ(z)|²/(Imγ(z))²=[|dz|²/|cz+d|⁴]/[y²/|cz+d|⁴]=|dz|²/y²，正是原双曲度量。",
        "沿任意可微曲线积分即知长度不变。该公式显示 PSL₂(R) 作用为双曲等距变换；它不单独证明所有双曲等距变换均来自此群。$\\square$"
      ]
    },
    {
      "id": "illposed-differentiation",
      "topics": [
        "applied/ill-posedness",
        "analysis/odes"
      ],
      "title": "数值微分反问题的不稳定性",
      "statement": "在区间 [0,2π] 上，以一致范数把可微函数映到其导数，则求导逆映射不连续：存在 f_n→0 一致而 ‖f_n′‖∞=1。",
      "dependencies": [
        "ftc-second"
      ],
      "idea": "高频正弦函数振幅缩小为 1/n，其导数振幅仍为一。",
      "steps": [
        "令 f_n(x)=sin(nx)/n。则 ‖f_n‖∞=1/n→0，而 f_n′(x)=cos(nx)，其一致范数恒为 1。",
        "若从函数数据以一致范数连续恢复导数，连续性在零点要求 f_n→0 蕴含导数趋于零；上述序列违背该要求。因此微分问题不满足 Hadamard 稳定性。",
        "这说明小幅值噪声可以含高频成分并被求导放大；正则化的目标之一是抑制此类不稳定。例子针对一致范数下的求导，不表示所有数据范数或有限维参数反演都不适定。$\\square$"
      ]
    },
    {
      "id": "scalar-robust-stability",
      "topics": [
        "applied/robust-control",
        "applied/feedback-control"
      ],
      "title": "有界乘性扰动下的标量鲁棒稳定性",
      "statement": "若 a>δ≥0 且可测扰动 d(t) 满足 |d(t)|≤δ，则 x′=−a x+d(t)x 的所有解满足 |x(t)|≤|x(0)|e^(−(a−δ)t)。",
      "dependencies": [
        "ftc-second"
      ],
      "idea": "解的绝对值几乎处处满足微分不等式 d|x|/dt≤−(a−δ)|x|。",
      "steps": [
        "系数 c(t)=−a+d(t) 可测且有界，标量线性方程解为 x(t)=x(0)exp(∫₀^t c(s)ds)。该公式可由乘积分因子直接求得，适用于绝对连续解。",
        "因 c(s)≤−a+δ，积分不超过 −(a−δ)t。取指数并取绝对值得所需估计。由于 a−δ>0，解一致指数趋零，对所有允许扰动均成立。",
        "若 δ≥a，扰动 d(t)=a 可使 x′=0，故此类统一指数衰减界不可能成立。结论是标量乘性不确定性情形，不替代高维小增益或结构化鲁棒稳定性定理。$\\square$"
      ]
    },
    {
      "id": "euler-lagrange-variation",
      "topics": [
        "applied/optimal-control",
        "applied/classical-mechanics"
      ],
      "title": "固定端点变分推出 Euler–Lagrange 方程",
      "statement": "若光滑曲线 q:[a,b]→R^n 是作用量 J[q]=∫_a^b L(q,q̇,t)dt 对所有固定端点光滑变分的一阶驻点，则 d/dt(∂L/∂q̇_i)=∂L/∂q_i。",
      "dependencies": [
        "ftc-second"
      ],
      "idea": "对 q+εη 求导并分部积分，把任意紧支撑变分函数的系数置零。",
      "steps": [
        "取任意光滑 η 且 η(a)=η(b)=0，令 q_ε=q+εη。对 ε 在零处求导，链式法则得 δJ=∫_a^b[Σ_i L_(q_i)η_i+L_(q̇_i)η̇_i]dt。",
        "分部积分第二项，端点项 L_(q̇_i)η_i|_a^b=0，故 δJ=∫_a^bΣ_i[L_(q_i)−d/dt L_(q̇_i)]η_i dt。驻点使此式对所有 η 为零。",
        "若某连续系数 g_i(t)=L_(q_i)−d/dt L_(q̇_i) 在一点非零，连续性使其在附近同号，取支撑于该邻域且同号的光滑 η_i 将使积分非零，矛盾。故每个 g_i 恒零，即 Euler–Lagrange 方程。驻点条件不保证该曲线是极小值。$\\square$"
      ]
    },
    {
      "id": "partition-energy-derivative",
      "topics": [
        "applied/statistical-mechanics"
      ],
      "title": "配分函数导数给出平均能量",
      "statement": "有限状态系统能级 E_i、β>0 的配分函数 Z(β)=Σ_i exp(−βE_i)，概率 p_i=exp(−βE_i)/Z，则平均能量 U=Σ_i p_iE_i=−d(log Z)/dβ。",
      "dependencies": [
        "def-finite-sum"
      ],
      "idea": "逐项求导有限和，再除以 Z。",
      "steps": [
        "有限和可逐项微分：Z′(β)=−Σ_i E_i exp(−βE_i)。因 Z>0，链式法则给 (log Z)′=Z′/Z。",
        "于是 −(log Z)′=Σ_i E_i exp(−βE_i)/Z=Σ_i p_iE_i=U。能级重复只需按状态计重。",
        "有限系统中所有量均为有限和而无收敛交换问题；无限状态系统还需证明配分函数有限及求导可交换。$\\square$"
      ]
    },
    {
      "id": "binomial-risk-neutral-pricing",
      "topics": [
        "applied/no-arbitrage-pricing",
        "applied/hedging-replication",
        "applied/stochastic-price-models"
      ],
      "title": "二叉树单期模型的无套利价格与复制",
      "statement": "无风险资产现值 1、到期值 R，股票现价 S₀、到期取 uS₀ 或 dS₀（0<d<R<u）。任意两状态到期索赔 (H_u,H_d) 可唯一复制，价格为 [qH_u+(1−q)H_d]/R，其中 q=(R−d)/(u−d)。",
      "dependencies": [
        "rank-nullity"
      ],
      "idea": "两状态复制方程可逆；无套利迫使风险中性权重落在 (0,1)。",
      "steps": [
        "令持有 Δ 股股票及 B 单位无风险资产，复制方程为 ΔuS₀+BR=H_u、ΔdS₀+BR=H_d。相减解得 Δ=(H_u−H_d)/(S₀(u−d))，再代回得 B=(uH_d−dH_u)/(R(u−d))。系数矩阵行列式 S₀R(d−u) 非零，故复制唯一。",
        "现值 V₀=ΔS₀+B。代入上式并整理为 V₀=R⁻¹[(R−d)/(u−d)H_u+(u−R)/(u−d)H_d]=R⁻¹[qH_u+(1−q)H_d]。条件 d<R<u 使 0<q<1。",
        "若市场给该索赔不同价格，买入便宜复制组合并卖出昂贵索赔（或反向）会在初始产生正收入、到期现金流相抵，形成套利。因此无套利价格必须等于复制成本。股票本身对应 H_u=uS₀,H_d=dS₀，公式回到 S₀。$\\square$"
      ]
    },
    {
      "id": "var-monotonicity-translation",
      "topics": [
        "applied/risk-measures"
      ],
      "title": "VaR 的单调性与平移等变性",
      "statement": "若 L≤L′ 几乎处处，则 VaR_α(L)≤VaR_α(L′)；对常数 c，VaR_α(L+c)=VaR_α(L)+c。",
      "dependencies": [
        "def-loss-var"
      ],
      "idea": "逐点序给分布函数序，平移只平移分位数集合。",
      "steps": [
        "L≤L′ 几乎处处意味着对每个 x，事件 {L′≤x} 包含于 {L≤x}，所以 F_L(x)≥F_(L′)(x)。达到概率至少 α 的 x 集合因此满足 L 的阈值不高于 L′ 的阈值；取下确界得到单调性。",
        "对平移，P(L+c≤x)=P(L≤x−c)。因此满足前者概率至少 α 的 x，恰是满足后者概率至少 α 的 y=x−c 加 c。两阈值集合整体平移 c，取下确界得平移等变式。",
        "VaR 在某些风险分布下不具次可加性，因此不能仅凭这两条性质称其为满足所有公理的相干风险度量。$\\square$"
      ]
    },
    {
      "id": "markowitz-min-variance",
      "topics": [
        "applied/optimal-portfolio",
        "applied/convex-optimization"
      ],
      "title": "正定协方差下最小方差全投资组合",
      "statement": "若协方差矩阵 Σ 对称正定，所有权重 w 满足 1ᵀw=1，则唯一最小化 wᵀΣw 的组合为 w*=Σ⁻¹1/(1ᵀΣ⁻¹1)。",
      "dependencies": [
        "strict-convex-unique"
      ],
      "idea": "拉格朗日乘子给线性方程；正定性保证严格凸与唯一极小。",
      "steps": [
        "Σ 可逆。拉格朗日函数 ℒ(w,λ)=wᵀΣw−λ(1ᵀw−1) 的驻点条件为 2Σw=λ1，故 w=(λ/2)Σ⁻¹1。",
        "代入约束得 λ/2=1/(1ᵀΣ⁻¹1)，分母为正，因为 Σ⁻¹ 正定且 1≠0。得到所列 w*。",
        "对任意可行 w=w*+h，1ᵀh=0。目标差为 2hᵀΣw*+hᵀΣh。驻点式给 Σw* 为 1 的倍数，故交叉项为零；若 h≠0，正定性使 hᵀΣh>0。于是 w* 为唯一全局最小点。$\\square$"
      ]
    },
    {
      "id": "incidence-mass-conservation",
      "topics": [
        "applied/biological-networks"
      ],
      "title": "反应网络关联矩阵的总量守恒",
      "statement": "若网络反应化学计量矩阵 S 的每列元素和为零，浓度满足 x′=Sv，则总量 1ᵀx 沿轨道恒定。",
      "dependencies": [
        "ftc-second"
      ],
      "idea": "左乘全一向量后反应通量项消失。",
      "steps": [
        "由假设 1ᵀS=0。对可微解直接求导，d(1ᵀx)/dt=1ᵀx′=1ᵀSv=0。",
        "故在任意时间区间积分得 1ᵀx(t)=1ᵀx(0)。若网络只守恒加权总量 ℓᵀx，则相同证明只需 ℓᵀS=0。",
        "列和条件表达每个反应的分子总数守恒；更一般化学反应中元素质量守恒由相应化学计量权重给出。动力学通量 v 的具体非线性形式不影响该代数守恒结论。$\\square$"
      ]
    },
    {
      "id": "logistic-map-tent-conjugacy",
      "topics": [
        "analysis/chaos"
      ],
      "title": "参数 4 的 Logistic 映射与帐篷映射共轭",
      "statement": "f(x)=4x(1−x) 在 [0,1] 上与帐篷映射 T(t)=2t（t≤1/2）、2−2t（t≥1/2）拓扑共轭，因此迭代轨道可通过单调坐标变换互相对应。",
      "dependencies": [
        "intermediate-value"
      ],
      "idea": "用单调双射 h(t)=sin²(πt/2) 直接验证 f∘h=h∘T。",
      "steps": [
        "h:[0,1]→[0,1] 连续，端点值 0、1，且在 (0,1) 导数 (π/2)sin(πt)>0，故严格递增并由介值定理满射，是同胚。",
        "若 0≤t≤1/2，则 h(Tt)=sin²(πt)，而 f(h(t))=4sin²(πt/2)(1−sin²(πt/2))=4sin²(πt/2)cos²(πt/2)=sin²(πt)。",
        "若 1/2≤t≤1，令 s=1−t≤1/2，则 Tt=2s；同时 h(t)=sin²(π(1−s)/2)=cos²(πs/2)，故 f(h(t))=4cos²(πs/2)sin²(πs/2)=sin²(πs)=h(2s)=h(Tt)。两段均有 f∘h=h∘T。",
        "于是 h 将 T 的每条轨道逐步送到 f 的轨道。此共轭是混沌研究的具体模型结果；若采用特定混沌定义，还需另证帐篷映射满足该定义。$\\square$"
      ]
    },
    {
      "id": "semantic-independence-models",
      "topics": [
        "foundations/independence",
        "foundations/classification-of-models"
      ],
      "title": "语义独立性的模型判据",
      "statement": "句子 σ 对理论 T 语义独立，当且仅当 T∪{σ} 与 T∪{¬σ} 都有模型；若 T 有模型却 T⊭σ 且 T⊭¬σ，则 σ 独立于 T。",
      "dependencies": [
        "fol-completeness-compactness"
      ],
      "idea": "模型满足 σ 或其否定；反模型分别见证两侧扩张可满足。",
      "steps": [
        "若 M⊨T 且 M⊨σ，则 M 是 T∪{σ} 的模型；若另有 N⊨T 且 N⊨¬σ，则 N 是 T∪{¬σ} 的模型。因此两个扩张皆有模型当且仅当两种真值各有 T 模型。",
        "若 T⊭σ，按语义蕴含定义有模型 M 满足 T 而不满足 σ，即 M⊨T∪{¬σ}；若 T⊭¬σ，则有模型 N⊨T∪{σ}。反方向同理。",
        "若采用语法独立性 T⊬σ 且 T⊬¬σ，则需逻辑完备性把不可证转成反模型；本仓完备性章节已在可数语言和所声明演算假设下证明。相容性不等于证明两个扩张均相容，必须分别检查。$\\square$"
      ]
    },
    {
      "id": "sequent-calculus-soundness",
      "topics": [
        "foundations/sequent-calculus",
        "foundations/formal-proof"
      ],
      "title": "经典相继式演算的语义可靠性",
      "statement": "经典 LK 的初始相继式与推理规则均语义有效，因此从 Γ⇒Δ 可推导的相继式在每个结构赋值下均满足：若 Γ 全真，则 Δ 至少一个公式为真。",
      "dependencies": [
        "def-hilbert-fol"
      ],
      "idea": "逐规则验证“前提全真蕴含结论全真”，再沿有限证明树归纳。",
      "steps": [
        "初始式 A⇒A 在 A 真时右侧 A 真；含矛盾式或公理的初始式同样有效。交换、弱化不破坏全真蕴含右侧真值的性质。",
        "逻辑联结词规则逐一按经典真值表检查。例如 ∧ 左规则把真值 A∧B 展开为 A、B 同真；∧ 右规则要求两个前提分别推出 A、B，故共同推出 A∧B。∨ 与 → 的左右规则同理按真值定义；¬ 规则把一侧真值转到另一侧假值。",
        "量词左规则使用任意项实例必由全称句推出；量词右规则的特征变量条件保证在当前结构中可任取其值。结构规则对多重集的排列或重复无影响。对证明高度归纳，每个结点保持语义有效，根相继式遂有效。该证明只证明可靠性，不证明 cut 消去。$\\square$"
      ]
    },
    {
      "id": "elliptic-curve-inverse",
      "topics": [
        "numbertheory/elliptic-curves"
      ],
      "title": "椭圆曲线弦切加法中的逆元",
      "statement": "在短 Weierstrass 曲线 y²=x³+Ax+B（特征不为 2）上，弦切群法则以无穷远点 O 为单位时，点 P=(x,y) 的逆为 −P=(x,−y)。",
      "dependencies": [
        "def-elliptic-curve"
      ],
      "idea": "过 P 与其镜像点的竖直线第三交点是 O，故三点和为单位点。",
      "steps": [
        "曲线方程只含 y²，所以 (x,−y) 也在曲线上。连接 P 与 (x,−y) 的直线为竖直线 X=x；射影闭包在无穷远线上的唯一交点是指定的无穷远点 O。",
        "弦切法则定义三交点 P,Q,R 的和为 R 关于 x 轴的镜像；对上述竖直弦，第三交点按定义为 O，因此 P+(x,−y)=O，证明该点是逆元。若 y=0，P=−P，竖直切线与曲线交于 P 的重数二及 O，也符合公式。",
        "此论证验证逆元公式，但群法则的结合律及椭圆曲线成为代数群还需另证；不能仅由弦切构造直接假设结合律。$\\square$"
      ]
    },
    {
      "id": "cusp-form-constant-term",
      "topics": [
        "numbertheory/cusp-forms",
        "numbertheory/fourier-expansion"
      ],
      "title": "尖点形式在无穷远处常数项为零",
      "statement": "若模形式 f(τ) 在无穷远尖点消失，则其 q=e^(2πiτ) Fourier 展开 f(τ)=Σ_(n≥0)a_nq^n 的常数项 a₀=0。",
      "dependencies": [
        "def-modular-form"
      ],
      "idea": "q→0 时级数极限等于常数项，而尖点条件要求函数趋零。",
      "steps": [
        "按定义，尖点处 f 在 q=0 邻域全纯并满足 f(0)=0。Taylor 定理给 f(q)=Σ_(n≥0)a_nq^n，常数系数为 a₀=f(0)。",
        "尖点消失即 f(0)=0，故 a₀=0。反过来若该 Taylor 展开的常数项为零，则 f(q)→0，满足无穷远尖点的消失条件。",
        "对其他尖点还须在相应变换坐标中施加同样条件；此处只处理无穷远点。$\\square$"
      ]
    },
    {
      "id": "fourier-coefficient-uniqueness",
      "topics": [
        "numbertheory/fourier-expansion",
        "analysis/fourier-series"
      ],
      "title": "连续周期函数由全部 Fourier 系数唯一决定",
      "statement": "若两个连续 2π 周期函数具有相同全部 Fourier 系数，则它们处处相等。",
      "dependencies": [
        "fejer-uniform-convergence"
      ],
      "idea": "其每阶 Fejér 平均相同，而 Fejér 定理给这些平均一致收敛到原函数。",
      "steps": [
        "令 h=f−g。系数线性使 h 的所有 Fourier 系数为零。其 N 阶 Fejér 平均是有限个 Fourier 系数的线性组合，故对每个 N、每个 x 都为零。",
        "Fejér 定理给 σ_Nh 一致收敛到 h；但 σ_Nh 恒为零，所以其一致极限 h 也恒为零。于是 f=g。",
        "连续性是这里使用 Fejér 一致收敛的假设；对一般 L² 函数，唯一性需改用相应的 L² 完备性理论。$\\square$"
      ]
    },
    {
      "id": "coordinate-ring-point-evaluation",
      "topics": [
        "geometry/coordinate-rings",
        "geometry/algebraic-varieties-geometry"
      ],
      "title": "仿射点给出坐标环的求值同态",
      "statement": "对域 k 上仿射代数集 X⊆kⁿ，每个点 a∈X 定义环同态 ev_a:k[x₁,…,xₙ]/I(X)→k，且核为包含 I(X) 的点理想 (x₁−a₁,…,xₙ−aₙ)/I(X)。",
      "dependencies": [
        "ideal-quotient"
      ],
      "idea": "多项式代入保持加乘；X 上消失多项式在该点取值为零。",
      "steps": [
        "定义多项式求值 ev_a(f)=f(a)。逐项展开可知 ev_a(f+g)=ev_a(f)+ev_a(g)、ev_a(fg)=ev_a(f)ev_a(g)、ev_a(1)=1，所以是 k-代数同态。",
        "a∈X 意味着 I(X) 中每个多项式在 a 处为零，因此 I(X)⊆ker(ev_a)，求值映射可唯一下降到商环 k[x]/I(X)。",
        "商环元素 f+I(X) 落入核当且仅当 f(a)=0；等价于 f 属于点理想 (x_i−a_i)（逐变量用多项式除法或平移变量展开可证）。因此下降映射的核正是所述商理想。若 k 为代数闭域，点理想还是极大理想，因为求值满射到域 k。$\\square$"
      ]
    },
    {
      "id": "scheme-local-ring-definition",
      "topics": [
        "geometry/schemes",
        "geometry/coordinate-rings"
      ],
      "title": "仿射概形的点处局部环",
      "statement": "在 Spec R 的素理想 p 处，结构层的茎 O_(Spec R,p) 同构于局部化 R_p=(R\\p)⁻¹R，且其唯一极大理想为 pR_p。",
      "dependencies": [
        "localization-module-universal",
        "def-scheme-structure"
      ],
      "idea": "结构层在基本开集 D(f) 上取 R_f；茎是所有含点基本邻域的分式环直极限。",
      "steps": [
        "p∈D(f) 当且仅当 f∉p。p 点处茎按定义是所有 f∉p 的 R_f 在限制映射下的直极限。每个 R_f 到 R_p 的映射把 r/f^n 送到同一分数，因此诱导同态 colim_(f∉p)R_f→R_p。",
        "该映射满射：R_p 中任一分数 r/s 的分母 s∉p，已在 R_s 中出现。若两个分数在直极限中映到同一 R_p 元素，则某个共同分母乘积 t∉p 后其交叉差为零，故它们在某个更小基本邻域环 R_t 中已相等，映射单射。于是茎同构 R_p。",
        "R_p 的非单位恰为分子属于 p 的分数：若 r∉p，则 r 可作分母，r/s 的逆为 s/r；若 r∈p，任何乘积仍落入扩张理想 pR_p，不能等于 1。故 pR_p 是唯一极大理想，R_p 为局部环。$\\square$"
      ]
    },
    {
      "id": "noether-symmetry-conservation",
      "topics": [
        "applied/symmetry-conservation",
        "applied/classical-mechanics"
      ],
      "title": "连续平移对称性与 Noether 守恒量",
      "statement": "若拉格朗日量 L(q,q̇,t) 不依赖坐标 q_j，则沿 Euler–Lagrange 解，动量 p_j=∂L/∂q̇_j 守恒。",
      "dependencies": [
        "euler-lagrange-variation"
      ],
      "idea": "把循环坐标条件代入 Euler–Lagrange 方程。",
      "steps": [
        "固定端点变分已推出 Euler–Lagrange 方程 d/dt(∂L/∂q̇_j)=∂L/∂q_j。坐标平移对称性即 L 对 q_j 不变，所以偏导 ∂L/∂q_j=0。",
        "于是 d p_j/dt=0，积分得 p_j 在整条轨道上恒定。这是平移对称性对应守恒动量的 Noether 特例；任意连续群作用需要用变分生成元作同样推导。$\\square$"
      ]
    },
    {
      "id": "moment-map-component-conservation",
      "topics": [
        "geometry/moment-maps",
        "geometry/hamiltonian-systems"
      ],
      "title": "动量映射分量沿不变 Hamiltonian 守恒",
      "statement": "若群作用的动量映射 μ 满足 d⟨μ,ξ⟩=ι_(ξ_M)ω，且 Hamiltonian H 对该群作用不变，则沿 H 的流，⟨μ,ξ⟩ 恒定。",
      "dependencies": [
        "symplectic-volume-preservation"
      ],
      "idea": "沿 Hamiltonian 向量场求导后，动量映射定义将导数化为群生成向量作用于 H。",
      "steps": [
        "令 J_ξ=⟨μ,ξ⟩，由动量映射定义 dJ_ξ=ι_(ξ_M)ω。Hamiltonian 向量场 X_H 按约定满足 ι_(X_H)ω=dH（若采用相反号约定，以下只整体换号）。",
        "沿轨道 dJ_ξ/dt=dJ_ξ(X_H)=ω(ξ_M,X_H)=−ω(X_H,ξ_M)=−dH(ξ_M)。群不变性 H(g·x)=H(x) 对参数求导给 dH(ξ_M)=0。",
        "故 dJ_ξ/dt=0，动量映射每个李代数方向分量守恒。假设包括作用具有动量映射及 H 群不变；不是任意 Hamiltonian 的结论。$\\square$"
      ]
    },
    {
      "id": "symplectic-nonsqueezing-volume-invariant",
      "topics": [
        "geometry/symplectic-topology",
        "geometry/symplectomorphisms"
      ],
      "title": "辛微分同胚保持辛体积",
      "statement": "若 φ 是 2n 维辛流形间的辛微分同胚，则它保持辛体积形式 ωⁿ/n! 及相应区域体积。",
      "dependencies": [
        "symplectic-volume-preservation"
      ],
      "idea": "拉回保持 ω，故保持其最高次外积；区域体积再由换元公式给出。",
      "steps": [
        "辛映射定义为 φ*ω_target=ω_source。外积相容性给 φ*(ω_targetⁿ/n!)=ω_sourceⁿ/n!。",
        "对可测区域 U 使用微分形式换元公式，∫_(φ(U))ω_targetⁿ/n!=∫_Uφ*(ω_targetⁿ/n!)=∫_Uω_sourceⁿ/n!，故体积相等。",
        "体积保持是 Gromov 非挤压定理的重要必要约束，但并不足以推出辛嵌入存在；非挤压还给出体积无法检测的辛容量障碍。$\\square$"
      ]
    },
    {
      "id": "brownian-covariance-min",
      "topics": [
        "probability/brownian-motion"
      ],
      "title": "布朗运动协方差为 min(s,t)",
      "statement": "标准布朗运动满足 E[B_s]=0 且 Cov(B_s,B_t)=min(s,t)。",
      "dependencies": [
        "def-brownian"
      ],
      "idea": "设 s≤t，将 B_t 写为 B_s 加与过去独立、均值为零的增量。",
      "steps": [
        "由定义 B_s 是零均值增量之和，故 E[B_s]=0。若 s≤t，写 B_t=B_s+(B_t−B_s)，其中后项均值为零并与 B_s 独立。",
        "E[B_sB_t]=E[B_s²]+E[B_s(B_t−B_s)]=s+E[B_s]E[B_t−B_s]=s。均值皆零，所以协方差等于该乘积期望。若 t≤s 交换两变量得协方差 t；合并为 min(s,t)。$\\square$"
      ]
    },
    {
      "id": "ito-isometry-step-process",
      "topics": [
        "probability/ito-integral",
        "probability/brownian-motion"
      ],
      "title": "简单过程 Itô 等距式",
      "statement": "对平方可积简单适应过程 H，E[(∫₀ᵀH_t dB_t)²]=E[∫₀ᵀH_t²dt]。",
      "dependencies": [
        "def-ito-step-integral",
        "def-brownian"
      ],
      "idea": "展开平方；不同时间增量条件均值为零且方差为区间长度。",
      "steps": [
        "按定义积分为 Σ_i H_iΔB_i。平方展开，其对角项期望 E[H_i²(ΔB_i)²]=E[H_i²]Δt_i，因为 H_i 在区间开始时已知，后续 Brownian 增量独立且方差 Δt_i。",
        "若 i<j，交叉项 H_iΔB_i H_jΔB_j 中，H_iΔB_iH_j 对时刻 t_j 可测，而 ΔB_j 与过去独立、均值零，故该交叉项期望为零。所有不同区间交叉项因此消失。",
        "于是平方期望等于 Σ_iE[H_i²]Δt_i=E[Σ_iH_i²Δt_i]=E[∫₀ᵀH_t²dt]。一般 Itô 积分按此等距延拓定义，所以该等式也成为其完备化性质。$\\square$"
      ]
    },
    {
      "id": "ito-square-brownian",
      "topics": [
        "probability/ito-formula",
        "probability/ito-integral"
      ],
      "title": "布朗平方过程的 Itô 公式",
      "statement": "标准布朗运动满足 B_t²=2∫₀ᵗB_s dB_s+t。",
      "dependencies": [
        "ito-isometry-step-process",
        "def-brownian"
      ],
      "idea": "对分割应用平方增量恒等式，线性项趋向 Itô 积分，平方增量和趋向 t。",
      "steps": [
        "取分割 0=t₀<…<t_n=t。逐段恒等式 B_(t_(i+1))²−B_(t_i)²=2B_(t_i)ΔB_i+(ΔB_i)² 求和，得 B_t²=2ΣB_(t_i)ΔB_i+Σ(ΔB_i)²。",
        "当网格趋零，左端固定。按 Itô 积分定义与等距式，左侧和式收敛到 ∫₀ᵗB_s dB_s（B 的适应阶梯近似在 L²([0,t]×Ω) 收敛，因为 E[(B_s−B_(left(s)))²]≤网格）。",
        "平方增量独立且 E[(ΔB_i)²]=Δt_i、Var((ΔB_i)²)=2(Δt_i)²。故 Σ(ΔB_i)² 的均值为 t、方差为 2Σ(Δt_i)²≤2t·网格，趋零，因而 L² 收敛到 t。取极限得到恒等式。$\\square$"
      ]
    },
    {
      "id": "hierarchical-law-total-variance",
      "topics": [
        "probability/hierarchical-models"
      ],
      "title": "层级模型的全方差分解",
      "statement": "若 Y 与潜变量 Z 有有限二阶矩，则 Var(Y)=E[Var(Y|Z)]+Var(E[Y|Z])。",
      "dependencies": [
        "conditional-l2",
        "variance-mean"
      ],
      "idea": "把 Y−E[Y] 分解为条件残差与条件均值偏差，交叉项条件期望为零。",
      "steps": [
        "写 μ(Z)=E[Y|Z]、μ=E[Y]，则 Y−μ=(Y−μ(Z))+(μ(Z)−μ)。平方取期望，得两平方项加两倍交叉项。",
        "交叉项期望为 E[(μ(Z)−μ)E[Y−μ(Z)|Z]]=0，因为条件残差的条件均值为零。第一平方项期望正是 E[Var(Y|Z)]，第二项为 Var(μ(Z))。",
        "故得到全方差公式。它区分给定层级内的随机波动与层级间均值变化；有限二阶矩确保每项存在。$\\square$"
      ]
    },
    {
      "id": "causal-graph-chain-factorization",
      "topics": [
        "probability/causal-graphs"
      ],
      "title": "有向无环图的链式分解",
      "statement": "任意有限随机变量 X₁,…,X_n 的联合分布可按任意顺序分解为 p(x₁,…,x_n)=∏_i p(x_i|x₁,…,x_(i−1))；若进一步满足每个节点给定父节点后与非后代条件独立，则分解为 ∏_i p(x_i|x_pa(i))。",
      "dependencies": [
        "conditional-tower"
      ],
      "idea": "第一式是概率链式法则；第二式逐项应用局部 Markov 条件独立。",
      "steps": [
        "对正概率联合事件，反复使用条件概率定义 p(x₁,…,x_n)=p(x₁)p(x₂|x₁)…p(x_n|x₁,…,x_(n−1))。零概率配置两侧均按相应联合测度的几乎处处意义理解。",
        "给定变量顺序为图的拓扑序，节点 X_i 的所有先行节点中，非父节点均为其非后代；局部 Markov 性使 p(x_i|先行所有变量)=p(x_i|父节点)。将每项替换即得图因子分解。",
        "链式分解对任何联合分布都成立；图因子分解还依赖分布满足局部 Markov 条件，单有一张 DAG 图并不自动证明这些条件。$\\square$"
      ]
    },
    {
      "id": "potential-outcome-consistency",
      "topics": [
        "probability/potential-outcomes",
        "probability/interventions-effects"
      ],
      "title": "潜在结果的一致性关系",
      "statement": "在无干扰与一致性假设下，实际处理指示 A∈{0,1} 时观测结果满足 Y=AY(1)+(1−A)Y(0)。",
      "dependencies": [
        "randomized-ate-unbiased"
      ],
      "idea": "逐个按 A=1 与 A=0 两种情况代入一致性定义。",
      "steps": [
        "无干扰假设每个单位的潜在结果不随其他单位处理变化；一致性定义实际接受处理 a 时观测到 Y=Y(a)。",
        "若 A=1，一致性给 Y=Y(1)，右侧 AY(1)+(1−A)Y(0)=Y(1)。若 A=0，一致性给 Y=Y(0)，右侧等于 Y(0)。两种可能穷尽二元处理，故恒等式成立。",
        "此恒等式不识别未观测反事实，也不提供因果效应无偏估计；可识别性仍需随机化或条件可交换性、正值性等额外假设。$\\square$"
      ]
    },
    {
      "id": "smooth-atlas-transition-cocycle",
      "topics": [
        "geometry/differential-structures",
        "geometry/smooth-manifolds"
      ],
      "title": "光滑图册过渡映射满足 cocycle 条件",
      "statement": "光滑图册中重叠坐标变换 φ_ij=φ_j∘φ_i⁻¹ 为微分同胚，并在三重交叠上满足 φ_jk∘φ_ij=φ_ik。",
      "dependencies": [
        "chain-rule"
      ],
      "idea": "坐标映射是双射的局部复合，逆映射互相抵消。",
      "steps": [
        "每张图 φ_i:U_i→R^n 是到开集的同胚。若 U_i∩U_j 非空，定义过渡映射 φ_ij=φ_j∘φ_i⁻¹；图册光滑相容性要求它及逆 φ_ji 均光滑，故为微分同胚。",
        "在三重交叠点上代入定义，φ_jk∘φ_ij=(φ_k∘φ_j⁻¹)∘(φ_j∘φ_i⁻¹)=φ_k∘φ_i⁻¹=φ_ik。中间 φ_j⁻¹∘φ_j 在定义域上是恒等映射。",
        "因此过渡函数满足 cocycle 一致性，保证局部坐标更换的复合没有歧义。此条件是图册定义的直接后果；不同光滑结构是否等价是另一个分类问题。$\\square$"
      ]
    },
    {
      "id": "surgery-handle-euler-change",
      "topics": [
        "geometry/surgery-theory",
        "geometry/low-dimensional-topology"
      ],
      "title": "附加 k-维把手对 Euler 示性数的改变量",
      "statement": "对有限 CW 复形 X 附加一个 k-维胞腔得到 Y，若边界附着映射落在 X 中，则 χ(Y)=χ(X)+(−1)^k。",
      "dependencies": [
        "homology-defined"
      ],
      "idea": "胞腔链群只在第 k 维增加一个秩一自由生成元，交替秩和增加 (−1)^k。",
      "steps": [
        "有限 CW 复形的 Euler 示性数按胞腔数定义 χ(X)=Σ_j(−1)^j c_j。附加一个 k-胞腔不改变其他维胞腔，只令 c_k 增加一。",
        "因此 χ(Y)−χ(X)=Σ_j(−1)^j(c_j(Y)−c_j(X))=(−1)^k。",
        "若采用同调定义 χ=Σ(−1)^j rank H_j，还需用有限链复形的秩—零度望远镜恒等式证明它等于胞腔交替和；该恒等式可逐维由 rank C_j=rank ker∂_j+rank im∂_j 推出。把手分解中的几何附着不改变此计数。$\\square$"
      ]
    },
    {
      "id": "packing-interval-bound",
      "topics": [
        "geometry/packing-covering"
      ],
      "title": "区间内不交等长球的简单堆积界",
      "statement": "长度为 L 的区间内若放置 N 个两两内部不交、半径 r 的闭区间并要求均包含在总区间中，则 N≤L/(2r)。",
      "dependencies": [
        "def-interval-length"
      ],
      "idea": "不交区间长度相加不超过容纳区间长度。",
      "steps": [
        "每个半径 r 的闭区间长度为 2r。两两内部不交时，有限可加性给其并集长度为 2rN。",
        "其并包含于长度 L 的总区间，故 2rN≤L，除以正数 2r 得 N≤L/(2r)。",
        "此为一维等长区间的体积上界；高维球体堆积密度受边界与几何结构影响，不能从该式直接推广。$\\square$"
      ]
    },
    {
      "id": "bsc-one-use-capacity",
      "topics": [
        "discrete/channel-capacity"
      ],
      "title": "二元对称信道的单次互信息容量",
      "statement": "二元对称信道交叉概率 0≤p≤1/2 的单次互信息最大值为 1−H₂(p) 比特，在输入均匀时达到。",
      "dependencies": [
        "entropy-bound"
      ],
      "idea": "输出熵至多一比特，条件输出熵恒为 H₂(p)。",
      "steps": [
        "令输入 X∈{0,1}，输出 Y=X⊕Z，其中 Z 独立且 P(Z=1)=p。给定 X，Y 的不确定性就是 Z 的熵，故 H(Y|X)=H₂(p)。",
        "互信息 I(X;Y)=H(Y)−H(Y|X)=H(Y)−H₂(p)。二元变量熵 H(Y)≤1；可由熵函数在 1/2 处取最大值验证。输入均匀时 Y 也均匀，达到 H(Y)=1。",
        "因此 max I=1−H₂(p)。这证明单次互信息最大化；若“容量”指任意长码的可靠传输率，还需要 Shannon 编码定理的 achievability 与 converse 证明，本条不替代整套编码定理。$\\square$"
      ]
    },
    {
      "id": "diffusion-brownian-generator",
      "topics": [
        "probability/diffusion-processes",
        "probability/brownian-motion"
      ],
      "title": "布朗扩散的无穷小生成元",
      "statement": "对 f∈C² 且 f″有界连续，标准布朗运动满足 lim_(t↓0)[E_x f(x+B_t)−f(x)]/t=½f″(x)。",
      "dependencies": [
        "def-brownian",
        "taylor-lagrange",
        "dominated-convergence"
      ],
      "idea": "Taylor 展开，利用增量均值零、方差 t，并控制二阶余项。",
      "steps": [
        "令 Z_t=B_t，Z_t 分布为 √t Z，其中 Z 为标准正态，满足 E Z=0、E Z²=1。二阶 Taylor 公式写 f(x+h)=f(x)+f′(x)h+½f″(x)h²+h²r_x(h)，其中 r_x(h)→0 当 h→0。",
        "期望并除 t，前两项给 ½f″(x)；余项为 E[Z² r_x(√t Z)]。对固定 Z 它趋零，且因 f″有界，Taylor 积分余项给 |r_x(h)|≤C‖f″‖∞，故被可积变量 C Z² 控制。支配收敛使余项趋零。",
        "所以生成元为 (1/2)d²/dx²。该极限是布朗扩散的局部生成元计算；一般扩散的系数由其漂移和局部方差决定。$\\square$"
      ]
    },
    {
      "id": "sde-linear-mean-variance",
      "topics": [
        "probability/sdes",
        "probability/expectation-variance"
      ],
      "title": "加性 Brownian 线性 SDE 的均值与方差",
      "statement": "若 X_t=x₀+μt+σB_t，则 X 的微分形式为 dX=μdt+σdB，且 E[X_t]=x₀+μt、Var(X_t)=σ²t。",
      "dependencies": [
        "def-brownian"
      ],
      "idea": "直接代入布朗运动零均值与方差 t 的定义。",
      "steps": [
        "定义 X_t=x₀+μt+σB_t。布朗增量定义给 E[B_t]=0、Var(B_t)=t，故线性期望为 E[X_t]=x₀+μt。",
        "确定性项不改变方差，常数倍使方差乘 σ²，因此 Var(X_t)=σ²Var(B_t)=σ²t。对任意 s<t，增量 X_t−X_s=μ(t−s)+σ(B_t−B_s)，其随机部分独立于过去且为正态，所以此过程满足所写加性常系数 SDE 的积分形式。",
        "这只是漂移与扩散系数为常数的显式模型，不证明一般 Lipschitz 系数随机微分方程的存在唯一性。$\\square$"
      ]
    },
    {
      "id": "hecke-q-expansion-formula",
      "topics": [
        "numbertheory/hecke-operators",
        "numbertheory/fourier-expansion"
      ],
      "title": "Hecke 算子作用的 Fourier 系数公式",
      "statement": "按标准归一化 T_m f(z)=m^(k−1)Σ_(ad=m)d^(−k)Σ_(b mod d)f((az+b)/d)，若 f=Σ_n a_nq^n，则 T_m f 的 q^N 系数为 Σ_(r|gcd(m,N))r^(k−1)a_(mN/r²)。",
      "dependencies": [
        "complex-basic-rules",
        "def-modular-form"
      ],
      "idea": "代入 q 展开，对 b 求有限单位根和，筛出 d|n 的频率。",
      "steps": [
        "将 f((az+b)/d)=Σ_n a_n exp(2πin(az+b)/d) 代入有限和。对 b=0,…,d−1 求和，Σ_b exp(2πinb/d)=d 若 d|n，否则为零；这是有限几何级数求和。",
        "令 n=dr。剩下的 q 指数为 exp(2πi ar z)，即 q^(ar)，系数为 m^(k−1)d^(1−k)a_(dr)。由于 ad=m，固定 q^N 意味着 ar=N，故 a|N 且 a|m；令 r=a，d=m/a，系数权重 m^(k−1)(m/a)^(1−k)=a^(k−1)，而原系数下标 dr=(m/a)(N/a)=mN/a²。",
        "对所有 r=a|gcd(m,N) 求和即得公式。该计算给 Hecke 作用的 Fourier 系数表达；算子保持给定模形式空间仍需检查变换律与尖点条件。$\\square$"
      ]
    },
    {
      "id": "euler-reciprocal-primes-diverges",
      "topics": [
        "numbertheory/prime-number-theorem",
        "numbertheory/prime-counting"
      ],
      "title": "素数倒数和发散",
      "statement": "Σ_p 1/p 发散。",
      "dependencies": [
        "unique-factorization"
      ],
      "idea": "有限 Euler 乘积支配调和级数部分和；若素数倒数和收敛则乘积有界，矛盾。",
      "steps": [
        "调和级数部分和 H_N=Σ_(n≤N)1/n 发散：每个块 n=2^(j−1)+1,…,2^j 有 2^(j−1) 项，每项至少 1/2^j，故块和至少 1/2；无限多个块使总和无界。",
        "令 P(x)=∏_(p≤x)(1−1/p)⁻¹。有限个几何级数相乘并用唯一分解，P(x) 展开为所有素因子不超过 x 的正整数倒数之和；因此它至少包含 1,…,⌊x⌋ 各项，P(x)≥H_⌊x⌋。所以 P(x)→∞。",
        "对 0<t≤1/2，−log(1−t)=Σ_(j≥1)t^j/j≤t+Σ_(j≥2)t^j≤t+2t²。故 log P(x)≤Σ_(p≤x)(1/p+2/p²)。若 Σ_p1/p 收敛，右侧有统一上界，因为 Σ_p1/p²≤Σ_(n≥2)1/n²<∞，于是 P(x) 有界。",
        "这与 P(x)≥H_⌊x⌋→∞ 矛盾。因此 Σ_p1/p 发散。该定理说明素数稀疏但倒数总和仍发散；它不推出 π(x)∼x/log x，故不等于素数定理。$\\square$"
      ]
    },
    {
      "id": "zeta-euler-product-complex",
      "topics": [
        "numbertheory/prime-number-theorem"
      ],
      "title": "复变量区域 Re(s)>1 的 ζ Euler 乘积",
      "statement": "对复数 s 且 Re(s)>1，ζ(s)=Σ_(n≥1)n^(−s)=∏_p(1−p^(−s))^(−1)，两侧均绝对收敛。",
      "dependencies": [
        "unique-factorization",
        "series-cauchy"
      ],
      "idea": "有限素数乘积展开枚举仅含这些素因子的整数；绝对收敛使截断极限可交换。",
      "steps": [
        "令 σ=Re(s)>1，则 Σ_n|n^(−s)|=Σ_nn^(−σ)<∞，由积分比较收敛。对有限素数集 p≤y，各几何级数绝对收敛，乘积展开为所有素因子不超过 y 的 n^(−s) 之和，唯一分解保证每个这样的 n 恰出现一次。",
        "给定 ε>0，取 N 使 Σ_(n>N)n^(−σ)<ε，再令 y≥N。有限乘积包含 n≤N 的每一项，其与 ζ 级数的差绝对值不超过 ε。故有限乘积按 y→∞ 收敛到 ζ(s)，且乘积各因子及展开绝对收敛。",
        "有限乘积均非零，且其对数级数绝对收敛（Σ_p|p^(−s)|<∞），故极限乘积非零；亦可由对数展开与绝对一致收敛验证。此非零性将用于右半平面零点讨论。$\\square$"
      ]
    },
    {
      "id": "zeta-continuation-right-half",
      "topics": [
        "numbertheory/prime-number-theorem"
      ],
      "title": "ζ(s)−1/(s−1) 在 Re(s)>0 全纯",
      "statement": "ζ(s)−1/(s−1) 从 Re(s)>1 全纯延拓为 Re(s)>0 上的全纯函数；因此 ζ 在该半平面仅有 s=1 的简单极点。",
      "dependencies": [
        "integral-linearity",
        "dominated-convergence"
      ],
      "idea": "把级数与积分逐单位区间相减，差项一致受 n^(−Re(s)−1) 控制。",
      "steps": [
        "当 Re(s)>1，积分比较给 ∫₁∞x^(−s)dx=1/(s−1)，故 ζ(s)−1/(s−1)=Σ_(n≥1)∫_n^(n+1)(n^(−s)−x^(−s))dx。",
        "由 x^(−s) 的导数 −s x^(−s−1)，括号差等于 s∫_n^x u^(−s−1)du。若 s 在任一紧集 K⊂{Re(s)>0}，设 Re(s)≥δ>0、|s|≤M，则第 n 项绝对值≤M n^(−δ−1)。该数项级数收敛。",
        "所以差项级数在每个这样的紧集上一致收敛，项项全纯，极限全纯。它与原 ζ−1/(s−1) 在 Re(s)>1 相同，给出全半平面延拓；在 s=1 的主部恰为 1/(s−1)，故是简单极点。$\\square$"
      ]
    },
    {
      "id": "chebyshev-theta-upper",
      "topics": [
        "numbertheory/prime-number-theorem"
      ],
      "title": "切比雪夫函数 θ(x)=O(x)",
      "statement": "令 θ(x)=Σ_(p≤x)log p，则存在常数 C 使所有 x≥2 满足 0≤θ(x)≤Cx。",
      "dependencies": [
        "binomial-count",
        "unique-factorization"
      ],
      "idea": "区间 (n,2n] 内的素数整除中心二项式系数；对 dyadic 区间累加。",
      "steps": [
        "对整数 n≥1，区间 n<p≤2n 的每个素数 p 在 (2n)!/(n!)² 中恰出现至少一次：在 (n+1)…2n 的分子出现一次，而 n! 不含 p。不同 p 互素，故其乘积整除 C(2n,n)≤4^n。取对数得 θ(2n)−θ(n)≤2n log2。",
        "给实数 x 取 n=⌊x/2⌋。区间 (x/2,x] 与 (n,2n] 仅在长度有界的端点邻域不同，其中至多常数个整数；相应 θ 误差 O(log x)。因此对充分大 x，θ(x)−θ(x/2)≤Cx，常数可固定。",
        "沿 x,x/2,x/4,…求和，增量总和≤C x(1+1/2+1/4+… )≤2Cx。最终落到有界区间时 θ 有界；调整 C 覆盖小 x，即得 θ(x)=O(x)。$\\square$"
      ]
    },
    {
      "id": "zeta-nonzero-one-line",
      "topics": [
        "numbertheory/prime-number-theorem"
      ],
      "title": "ζ(s) 在 Re(s)=1 上无零点",
      "statement": "ζ(s) 在直线 Re(s)=1 的每一点（s=1 处为极点而非零点）均不为零。",
      "dependencies": [
        "zeta-euler-product-complex",
        "zeta-continuation-right-half",
        "chebyshev-theta-upper"
      ],
      "idea": "对素数对数导数构造非负三角多项式；假设零点会使其加权极限为负。",
      "steps": [
        "对 Re(s)>1 定义 Φ(s)=Σ_p(log p)p^(−s)。Euler 乘积局部一致收敛并逐项求导，得 −ζ′/ζ=Σ_p(log p)/(p^s−1)=Φ(s)+Q(s)，其中 Q(s)=Σ_p(log p)/[p^s(p^s−1)]。Q 在 Re(s)>1/2 局部一致绝对收敛，故解析。",
        "由前引理 ζ(s)=1/(s−1)+h(s)，h 在 Re(s)>0 全纯；所以 −ζ′/ζ−1/(s−1) 在 s=1 附近全纯。结合 Q，Φ(s)−1/(s−1) 在 Re(s)>1/2 除 ζ 零点外解析，并在 s=1 解析。若 s₀=1+iα（α≠0）是阶数 m≥1 的零点，则 εΦ(1+ε+iα)→−m；若 1+2iα 是零点，记阶数 n≥1，否则 n=0，同理极限为 −n。另有 εΦ(1+ε)→1。",
        "对 ε>0，令 θ_p=α log p。恒等式 (e^(iθ_p/2)+e^(−iθ_p/2))⁴=Σ_(r=−2)^2 c_r e^(irθ_p)，其中 (c_−2,c_−1,c₀,c₁,c₂)=(1,4,6,4,1)，左边为非负实数。因此 Σ_(r=−2)^2 c_r Φ(1+ε+irα)=Σ_p(log p)p^(−1−ε)(e^(iθ_p/2)+e^(−iθ_p/2))⁴≥0。",
        "乘 ε 并令 ε↓0，左侧极限为 6−8m−2n，故非负。但若 m≥1，则 6−8m−2n≤−2，矛盾。于是 ζ 在 1+iα 无零点；Re(s)>1 由 Euler 乘积非零，s=1 为已证简单极点，结论成立。$\\square$"
      ]
    },
    {
      "id": "newman-tauberian",
      "topics": [
        "numbertheory/prime-number-theorem"
      ],
      "title": "Newman Tauberian 定理（有界函数版）",
      "statement": "若有界局部可积 f:[0,∞)→C 的 Laplace 变换 g(z)=∫₀∞f(t)e^(−zt)dt 在 Re(z)>0 收敛，并解析延拓到包含闭半平面 Re(z)≥0 的开集，则 ∫₀∞f(t)dt 收敛且等于 g(0)。",
      "dependencies": [
        "cauchy-square-formula"
      ],
      "idea": "截断变换 g_T 与 g 作差，沿右半圆及左侧解析延拓边界估计，并用 Cauchy 定理。",
      "steps": [
        "令 |f(t)|≤B，g_T(z)=∫₀^T f(t)e^(−zt)dt。对固定大 R，解析延拓的开邻域与紧集 {|z|≤R,Re z≥0} 有正距离；取足够小 δ>0，使 g 在 D={|z|≤R,Re z≥−δ} 邻域解析。C=∂D 正向。由 Cauchy 公式，(g(0)−g_T(0))=(2πi)⁻¹∫_C(g−g_T)e^(zT)(1+z²/R²)dz/z。",
        "把 C 上 Re z>0 的圆弧记 C_+。此处 g−g_T=∫_T∞f(t)e^(−zt)dt，令 u=Re z，则 |g−g_T|≤Be^(−uT)/u。圆弧上 |z|=R 且 |1+z²/R²|=2u/R；与 e^(zT)/z 相乘后被积函数模≤2B/R²。弧长≤2πR，故这部分积分绝对值≤常数·B/R。",
        "在 C 的 Re z<0 部分，对 g_T 项可将积分路径移至左半圆 |z|=R、Re z<0；g_T 整且变形区域不含 z=0。此圆上令 u=−Re z>0，有 |g_T(z)|≤B∫₀^T e^(ut)dt≤Be^(uT)/u，而 |1+z²/R²|=2u/R，故同样得到积分绝对值≤常数·B/R。",
        "剩余的 g 项在 Re z<0 的路径上固定有界；乘 e^(zT) 后逐点趋零，端点仅有限个且可用有界收敛控制，故该项随 T→∞ 趋零。于是 limsup_(T→∞)|g(0)−g_T(0)|≤C B/R，其中 C 为绝对常数。令 R→∞，右侧为零，所以 g_T(0)=∫₀^T f 收敛到 g(0)。$\\square$"
      ]
    },
    {
      "id": "theta-asymptotic-prime-theorem",
      "topics": [
        "numbertheory/prime-number-theorem"
      ],
      "title": "切比雪夫函数 θ(x)∼x",
      "statement": "θ(x)=Σ_(p≤x)log p 满足 θ(x)∼x。",
      "dependencies": [
        "chebyshev-theta-upper",
        "zeta-nonzero-one-line",
        "newman-tauberian"
      ],
      "idea": "用 Φ(s) 表示 θ 的 Mellin–Laplace 变换；Tauberian 定理给偏差比值的可积性，再用 θ 单调排除固定比例偏差。",
      "steps": [
        "由 Stieltjes 分部积分，对 Re(s)>1 有 Φ(s)=∫₁∞x^(−s)dθ(x)=s∫₁∞θ(x)x^(−s−1)dx=s∫₀∞e^(−st)θ(e^t)dt。边界项消失，因为 θ(x)=O(x) 且 Re(s)>1。",
        "定义 f(t)=e^(−t)θ(e^t)−1。Chebyshev 上界使 f 有界，且局部可积。其 Laplace 变换对 Re(z)>0 为 g(z)=Φ(z+1)/(z+1)−1/z。令 H(s)=Φ(s)−1/(s−1)，前引理给 H 在 Re(s)≥1 邻域解析，于是 g(z)=H(z+1)/(z+1)−1/(z+1)，在 Re(z)≥0 解析。Newman 定理遂给 ∫₀∞f(t)dt 收敛，即 ∫₁∞(θ(x)−x)x^(−2)dx 收敛。",
        "若某固定 λ>1 时有任意大 x 满足 θ(x)≥λx，则由 θ 单调，对 x≤t≤λx 有 θ(t)−t≥λx−t。因此偏差积分在该区间至少为 ∫_x^(λx)(λx−t)t^(−2)dt=∫₁^λ(λ−u)u^(−2)du>0，与收敛积分的尾段必须趋零矛盾。",
        "若固定 0<λ<1 时有任意大 x 满足 θ(x)≤λx，则在 λx≤t≤x 有 θ(t)−t≤λx−t，偏差积分至多为 ∫_λ^1(λ−u)u^(−2)du<0，同样矛盾。故对任意 λ>1，最终 θ(x)<λx；对任意 λ<1，最终 θ(x)>λx。即 θ(x)/x→1。$\\square$"
      ]
    },
    {
      "id": "prime-number-theorem-proof",
      "topics": [
        "numbertheory/prime-number-theorem",
        "numbertheory/prime-counting"
      ],
      "title": "素数定理",
      "statement": "令 π(x)=#{p≤x}，则 π(x)∼x/log x。",
      "dependencies": [
        "theta-asymptotic-prime-theorem"
      ],
      "idea": "θ(x)∼x 给下界；排除小素数后，以任意固定 ε>0 控制其余素数的对数权重。",
      "steps": [
        "θ(x)≤π(x)log x，因为每个 p≤x 的权重 log p≤log x。因此 π(x)≥θ(x)/log x，给出 liminf π(x)log x/x≥1。",
        "固定 0<ε<1。将 p<x^(1−ε) 的素数至多 x^(1−ε) 个单独计入；其余 p∈[x^(1−ε),x] 满足 log p≥(1−ε)log x。因此 θ(x)≥(1−ε)log x[π(x)−x^(1−ε)]。",
        "整理得 limsup π(x)log x/x≤1/(1−ε)，因为 x^(1−ε)log x/x→0。令 ε↓0 得 limsup≤1。结合下界，π(x)log x/x→1，即素数定理。",
        "本证明链完整展开了 Euler 乘积、ζ 的半平面延拓、θ 的 Chebyshev 上界、Re(s)=1 零点排除及 Newman Tauberian 引理；分析链参考 D. Zagier, “Newman’s Short Proof of the Prime Number Theorem,” Amer. Math. Monthly 104 (1997), 705–708。$\\square$"
      ]
    },
    {
      "id": "pnt-prime-index-equivalence",
      "topics": [
        "numbertheory/prime-number-theorem"
      ],
      "title": "素数定理的计数函数与第 n 个素数表述等价",
      "statement": "π(x)∼x/log x 当且仅当第 n 个素数 p_n∼n log n。",
      "dependencies": [
        "prime-infinite-euclid"
      ],
      "idea": "把严格递增序列 p_n 与其计数函数 π(x) 互相夹逼，并控制对数因子。",
      "steps": [
        "若 π(x)∼x/log x，令 x=p_n，则 n=π(p_n)∼p_n/log p_n，故 p_n/n∼log p_n。取对数得 log p_n−log n=log log p_n+o(1)，而 log log p_n/log p_n→0，所以 log n/log p_n→1。代回便得 p_n∼n log n。",
        "反之假设 p_n∼n log n。给大 x 取 n=π(x)，则 p_n≤x<p_(n+1)。当 x→∞ 时 n→∞；相邻指标公式给 p_(n+1)∼(n+1)log(n+1)∼n log n∼p_n。因此夹逼得 x∼n log n。又 p_n≤x<p_(n+1) 与相邻素数渐近同样给 log x∼log n，故 n∼x/log x，即 π(x)∼x/log x。",
        "所以两种极限表述互相推出。该等价性本身不提供其中任一渐近式的证明。$\\square$"
      ]
    },
    {
      "id": "modularity-local-coefficients",
      "topics": [
        "numbertheory/modularity",
        "numbertheory/elliptic-curves"
      ],
      "title": "模性对应迫使良素数系数与点数相等",
      "statement": "若 E/Q 与归一化权 2 新形式 f 模性对应，则每个良素数 p 都有 a_p(f)=a_p(E)=p+1−#E(F_p)。",
      "dependencies": [
        "def-elliptic-modularity-euler-factor"
      ],
      "idea": "相同局部 L 因子的分母多项式系数唯一。",
      "steps": [
        "模性对应按定义给出良素数处相同局部因子。记 X=p^(−s)，则两边分母分别为 1−a_p(E)X+pX² 与 1−a_p(f)X+pX²。",
        "若两个倒数有理函数在收敛开集相等，乘以共同非零分母即得多项式恒等。比较 X 的一次系数，−a_p(E)=−a_p(f)，故两系数相等。",
        "再代入 a_p(E) 的定义即得点数公式。这是模性对应的局部算术后果；它不证明给定 E 一定存在这样的 f。$\\square$"
      ]
    },
    {
      "id": "rational-point-algebraic-variety",
      "topics": [
        "numbertheory/algebraic-varieties-arithmetic",
        "numbertheory/rational-points"
      ],
      "title": "单位圆作为有理代数簇的有理点参数化",
      "statement": "仿射曲线 X²+Y²=1 在 Q 上有无穷多个有理点，且除点 (−1,0) 外均可由有理参数 t 按 x=(1−t²)/(1+t²)、y=2t/(1+t²) 表示。",
      "dependencies": [
        "rational-unit-circle-points"
      ],
      "idea": "将单位圆视为 Q 上的代数簇，引用已逐步证明的斜率参数化。",
      "steps": [
        "多项式方程 X²+Y²−1=0 的系数在 Q 中，故其零点集合定义一个 Q 上仿射代数簇。前引理已证明其所有有理点由斜率 t∈Q 参数化，唯一漏点为 (−1,0)。",
        "Q 有无穷多个元素，且不同 t 给不同点（t=y/(1+x) 可从点唯一恢复），所以该簇有无穷多个有理点。",
        "这只是有理参数曲线的简单算术几何例子，不推广为所有高亏格曲线有无穷多个有理点；后者一般为假，且受 Faltings 定理约束。$\\square$"
      ]
    },
    {
      "id": "abelian-multiplication-morphism",
      "topics": [
        "numbertheory/abelian-varieties",
        "geometry/algebraic-varieties-geometry"
      ],
      "title": "阿贝尔簇的整数倍映射是群态射",
      "statement": "对阿贝尔簇 A 及整数 n，映射 [n]:A→A、x↦nx 是正则群态射。",
      "dependencies": [
        "def-abelian-variety"
      ],
      "idea": "整数倍映射是加法态射有限次复合；负整数再复合取逆映射。",
      "steps": [
        "对 n≥1，定义 [1]=id_A，[n+1]=m∘([n],id_A)，其中 m:A×A→A 是正则群加法。因此由正则映射复合封闭，归纳得每个 [n] 正则。",
        "群的结合律与交换律给 [n](x+y)=n(x+y)=nx+ny=[n]x+[n]y，所以它是群同态。n=0 是常值单位元映射，仍为正则群态射。",
        "对 n<0，定义 [n]=[-n]∘inv，其中 inv:A→A 为正则取逆映射；故仍正则且满足同态式。此论证不说明 [n] 有限、满射或核阶为 n^(2g)，这些需要额外几何定理。$\\square$"
      ]
    },
    {
      "id": "unknot-complement-fundamental-group",
      "topics": [
        "geometry/knot-theory",
        "geometry/fundamental-group"
      ],
      "title": "标准无结圆环补空间的基本群为 Z",
      "statement": "标准无结 U={(z₁,z₂)∈S³⊂C²:z₂=0} 的补空间 S³\\U 同胚于开圆盘 D² 与圆周 S¹ 的乘积，故 π₁(S³\\U)≅Z。",
      "dependencies": [
        "contractible-fundamental-group",
        "circle-fundamental-group"
      ],
      "idea": "直接由坐标给出乘积同胚，再将圆盘因子收缩到中心。",
      "steps": [
        "S³\\U 中 z₂≠0。定义映射到 D²×S¹： (z₁,z₂)↦(z₁,z₂/|z₂|)。因 |z₁|²+|z₂|²=1 且 z₂≠0，必有 |z₁|<1，映射确实落在开圆盘与圆周乘积。",
        "反向映射 (w,ζ)↦(w,√(1−|w|²)ζ)。两映射连续且互为逆，故为同胚。D²×S¹ 形变收缩到 {0}×S¹，通过 (w,ζ,s)↦((1−s)w,ζ)。",
        "圆盘可缩，故乘积基本群同构于 S¹ 的基本群；标准绕数分类给 π₁(S¹)≅Z。无结补空间因此基本群为整数群。一般结的补空间群是重要结不变量，通常不等于 Z。$\\square$"
      ]
    },
    {
      "id": "circle-fundamental-group",
      "topics": [
        "geometry/fundamental-group",
        "geometry/low-dimensional-topology"
      ],
      "title": "圆周基本群同构于整数群",
      "statement": "以 1 为基点，π₁(S¹,1)≅Z；同构由环路提升到覆盖 p:R→S¹、p(t)=exp(2πit) 的终点整数给出。",
      "dependencies": [
        "covering-path-lift-uniqueness",
        "intermediate-value"
      ],
      "idea": "逐段提升路径；同伦提升保持离散整数终点；终点相同的提升可线性同伦。",
      "steps": [
        "给连续路径 γ:[0,1]→S¹ 及起点提升 u₀。圆周上每点有开弧 U，使 p 的原像分成互不交的开区间且每段 p 同胚到 U。由 γ 的一致连续性，取足够细有限分割，使每段像落入某个这样的弧；从前一段端点提升开始，用该片的逆映射逐段定义唯一连续提升。唯一性也可由已证覆盖路径提升唯一性得出。",
        "若 γ 是基于 1 的环路且起始提升为 0，则终点 n 满足 p(n)=1，故 n∈Z。若两基同伦环路通过 H(s,t) 相连，紧方形可细分成小矩形，使每个小矩形像落在均匀覆盖弧；逐格用同一片逆映射提升，得到连续的同伦提升。其终点随同伦参数连续且始终落在离散集合 Z，故终点整数不变。",
        "每个 n∈Z 由环路 γ_n(s)=exp(2πins) 达到，故绕数映射满射。若两环路提升终点相同 n，则其提升 α,β 都从 0 到 n；线性插值 (1−t)α(s)+tβ(s) 固定端点，投影后给两环路的基同伦，故绕数相同者代表同一类。",
        "绕数保持环路拼接下相加（提升终点相加），于是 π₁(S¹,1) 与加法群 Z 同构。该证明同时给出无结补空间引理所需的圆周基本群计算。$\\square$"
      ]
    },
    {
      "id": "compact-oriented-one-manifold-circle",
      "topics": [
        "geometry/manifold-classification",
        "geometry/differential-structures"
      ],
      "title": "紧致连通定向一维流形无边界时同胚于圆周",
      "statement": "若 M 是紧致、连通、光滑、定向且无边界的一维流形，并给定光滑黎曼度量，则 M 微分同胚于 S¹。",
      "dependencies": [
        "picard-lindelof",
        "inverse-function-one-dimension",
        "finite-dimensional-compactness"
      ],
      "idea": "定向与度量给出处处非零单位向量场；其完整流的轨道开且唯一，稳定子是非零离散子群 TZ。",
      "steps": [
        "每个切空间是一维定向内积空间，恰有一个正向单位向量。局部定向坐标中该向量场为 g_(11)^(-1/2)∂/∂x，光滑；换到另一正向坐标后仍是同一唯一正向单位向量，故这些局部表达拼成全局光滑非零向量场 V。",
        "解自治方程 γ′=V(γ)。局部存在唯一性由坐标中的 Picard–Lindelöf 定理给出。因 M 紧致，可取有限个坐标邻域覆盖，并在较小邻域上统一控制 V 的坐标系数与 Lipschitz 常数，得到正的统一局部延拓时间；因此解在任意有限时间均可延拓，流 Φ_t 对所有 t∈R 定义。",
        "固定 p∈M，轨道映射 φ(t)=Φ_t(p) 满足 φ′(t)=V(φ(t))≠0。由一维逆函数定理，它在每个时刻附近是微分同胚到开弧，故每条轨道是开集。流轨道将 M 分割成互不交的开集；连通性迫使只有一个轨道，所以 φ:R→M 满射。",
        "稳定子 H={t∈R:Φ_t(p)=p} 是闭加法子群。由轨道局部单射，0 在 H 中孤立，故 H 离散。若 H={0}，φ 既满又单，且为局部微分同胚，因而是开连续双射，其逆连续，给出 R 与紧致 M 的同胚，矛盾。故 H 非零。",
        "令 T 为 H 中最小正元素：离散性给 H 与 0 的正距离；闭性使正元素下确界仍在 H。对任意 h∈H 作整数除法 h=nT+r、0≤r<T；r∈H，最小性迫使 r=0。因此 H=T Z。流映射诱导双射局部微分同胚 R/(TZ)→M；商圆周紧致、M Hausdorff，双射连续映射为同胚，局部光滑逆使之为微分同胚。R/(TZ) 显然微分同胚于 S¹。$\\square$"
      ]
    },
    {
      "id": "propositional-cut-elimination",
      "topics": [
        "foundations/cut-elimination",
        "foundations/sequent-calculus"
      ],
      "title": "命题 LK 的 cut 消去",
      "statement": "经典命题 LK 中，若有限相继式 Γ⇒Δ 可由含 cut 的证明推出，则它也有不含 cut 的证明。此处结论限于命题逻辑；不含量词。",
      "dependencies": [
        "def-propositional-lk",
        "sequent-calculus-soundness"
      ],
      "idea": "可靠性给语义有效；按公式复杂度作可逆真值分解，构造 cut-free 证明。",
      "steps": [
        "先证 cut-free 完备性。对有效相继式 Γ⇒Δ 的所有公式复杂度总和作归纳。若某原子 A 同时出现在 Γ 与 Δ，则 A⇒A 是初始式，逐次左右弱化其余公式即得 cut-free 证明。",
        "若左侧含 ¬A，语义有效性等价于 Γ⇒Δ,A 有效；其公式复杂度严格下降，归纳得该前提的 cut-free 证明，再用 ¬L 得原式。若右侧含 ¬A，同理化为 Γ,A⇒Δ 并用 ¬R。左侧含 A∧B 时化为 Γ,A,B⇒Δ 并用 ∧L；右侧含 A∨B 时化为 Γ⇒Δ,A,B 并用 ∨R。每种转化均由相应真值条件直接验证，且前提复杂度下降。",
        "左侧含 A∨B 时，有效性分别保证 Γ,A⇒Δ 与 Γ,B⇒Δ 有效；对两者用归纳假设，再以 ∨L 合并。右侧含 A∧B 时同理分别得到 Γ⇒Δ,A 与 Γ⇒Δ,B，再用 ∧R。有限公式总复杂度使此分解过程终止；若无复合公式，公式全为原子，有效性必迫使某原子同时出现于左右两侧，已属初始情形。故每个语义有效命题相继式均有 cut-free 推导。",
        "现设原相继式在含 cut 的 LK 中可证。由此前的 LK 可靠性，它语义有效；由刚证的命题 cut-free 完备性，它有不含 cut 的推导。这证明 cut 消去。该论证只覆盖有限命题联结词；一阶量词规则还涉及特征变量、替换与量词切消，不能把本证明直接当作一阶 Gentzen 切消定理。$\\square$"
      ]
    },
    {
      "id": "arithmetical-diagonal-lemma",
      "topics": [
        "foundations/godel-first"
      ],
      "title": "算术对角引理（闭项编码假设版）",
      "statement": "对任意单自由变量算术公式 ψ(x)，若 T 能验证具体替换计算，则存在句子 G 及其编号 g，使 T⊢G↔ψ(\\bar g)。",
      "dependencies": [
        "def-effective-arithmetic-coding",
        "syntax-parse-substitute"
      ],
      "idea": "把公式的 Gödel 编码代入自身替换函数，构造其不动点句。",
      "steps": [
        "定义 θ(y)=ψ(Sub(y,y))，令 k=⌜θ⌝，并令 G=θ(\\bar k)。按替换编码定义，G 的编号 g 正是 Sub(k,k)。",
        "将闭项 Sub(\\bar k,\\bar k) 在算术中按定义计算为数字 \\bar g。T 能验证该具体有限计算，所以 T 证明 Sub(\\bar k,\\bar k)=\\bar g。",
        "在 θ 的定义中代入 k 得 G=ψ(Sub(\\bar k,\\bar k))。由上一等式及等号替换，T 证明 G↔ψ(\\bar g)。这是对每个固定 ψ 的构造；对具体弱算术系统，替换编码与闭项计算的可证性必须另行建立。$\\square$"
      ]
    },
    {
      "id": "godel-first-sound-theory",
      "topics": [
        "foundations/godel-first"
      ],
      "title": "可靠有效算术理论的不完备性（显式编码假设版）",
      "statement": "若 T 是可靠、有效可公理化的算术理论，并满足本章闭项编码计算假设，则存在算术句 G，使 T 既不证明 G，也不证明 ¬G。",
      "dependencies": [
        "arithmetical-diagonal-lemma",
        "def-effective-arithmetic-coding"
      ],
      "idea": "对句子自身的编号取对角代入，使 G 断言“G 在 T 中不可证”；可靠性排除两边任何一种证明。",
      "steps": [
        "令 φ(x) 为公式 ¬Prov_T(x)，令 θ(y)=φ(Sub(y,y))。取 k=⌜θ⌝，并令 G 为 θ 的自由变量 y 代入数字 k 所得的闭句。按编码定义，g=⌜G⌝=Sub(k,k)。闭项计算假设使 T 能证明 Sub(\\bar k,\\bar k)=\\bar g，故 T 可验证 G 与 ¬Prov_T(\\bar g) 等价。这就是此处所需的对角句构造。",
        "若 T⊢G，则存在一个实际有限证明编码 p，使标准自然数中 Proof_T(p,g) 成立，因而 Prov_T(g) 为真。上一段的对角关系说明 G 在标准模型中为假。可是 T 可靠意味着 T 的每个定理在标准算术模型中为真，特别 G 为真，矛盾。因此 T⊬G。",
        "若 T⊢¬G，可靠性给标准模型中 ¬G 为真。由 G 与 ¬Prov_T(g) 的标准语义等价，Prov_T(g) 为真，于是存在实际有限 T 证明 G。可靠性又使该定理 G 在标准模型为真，与 ¬G 为真矛盾。因此 T⊬¬G。",
        "故 G 不可判定，T 不完备。此证明以语义可靠性为前提，强于经典第一不完备定理常用的单纯相容性；若要从一致性推出 Rosser 句，须补充并证明对证明编码、可证性谓词和 Rosser 比较的算术化引理。$\\square$"
      ]
    },
    {
      "id": "provability-d1",
      "topics": [
        "foundations/godel-second",
        "foundations/formal-proof"
      ],
      "title": "可证性条件 D1",
      "statement": "若 T⊢φ，则 T⊢Prov_T(⌜φ⌝)。",
      "dependencies": [
        "def-proof-code-arithmetic"
      ],
      "idea": "把一份具体有限证明的代码代入证明谓词，再引入存在量词。",
      "steps": [
        "取 T 的实际有限证明序列 π，其编码为自然数 p。证明检查定义逐行验证每一公理实例与推理步，故 Prf_T(p,⌜φ⌝) 在标准算术中为真。",
        "按本章算术化假设，T 可证明这个具体闭句 Prf_T(\\bar p,\\overline{⌜φ⌝})。存在引入规则遂给 T⊢∃p Prf_T(p,⌜φ⌝)，即 T⊢Prov_T(⌜φ⌝)。$\\square$"
      ]
    },
    {
      "id": "provability-d2",
      "topics": [
        "foundations/godel-second",
        "foundations/formal-proof"
      ],
      "title": "可证性条件 D2",
      "statement": "T⊢Prov_T(⌜φ→ψ⌝)→(Prov_T(⌜φ⌝)→Prov_T(⌜ψ⌝))。",
      "dependencies": [
        "def-proof-code-arithmetic"
      ],
      "idea": "有效拼接两个有限证明并对其代码作存在量词推理。",
      "steps": [
        "固定证明代码 p,q，若 p 证明 φ→ψ、q 证明 φ，则把 π_p、π_q 接续，并在末尾用一次 MP 加入 ψ，得到 ψ 的证明代码 h(p,q)。函数 h 对有限字符串编码是原始递归的。",
        "证明检查的逐行定义给 T 证明 Prf_T(p,⌜φ→ψ⌝)∧Prf_T(q,⌜φ⌝)→Prf_T(h(p,q),⌜ψ⌝)。对 p,q 存在量化并引入 h(p,q) 作为新见证，即得所述 D2。",
        "这是对象理论内的统一代码变换；仅说外部 MP 保持定理还不足以代替这一步算术化。$\\square$"
      ]
    },
    {
      "id": "provability-d3",
      "topics": [
        "foundations/godel-second",
        "foundations/formal-proof"
      ],
      "title": "可证性条件 D3",
      "statement": "T⊢Prov_T(⌜φ⌝)→Prov_T(⌜Prov_T(⌜φ⌝)⌝)。",
      "dependencies": [
        "def-proof-code-arithmetic"
      ],
      "idea": "从证明代码有效构造一份 T 内部证明，证明该代码确实给出原句的证明。",
      "steps": [
        "设 p 是 φ 的 T 证明代码。证明谓词由逐行的有限检查定义；本章算术化假设保证 T 可验证具体检查并能统一生成检查证明。因此可原始递归地从 p 构造一份 T 证明序列，证明 Prf_T(\\bar p,⌜φ⌝)，再用存在引入证明 Prov_T(⌜φ⌝)。令该新证明代码为 d(p)。",
        "T 能验证变换 d 的正确性：Prf_T(p,⌜φ⌝)→Prf_T(d(p),⌜Prov_T(⌜φ⌝)⌝)。对 p 存在量化并以 d(p) 为见证，得 Prov_T(⌜φ⌝)→Prov_T(⌜Prov_T(⌜φ⌝)⌝)，即 D3。",
        "这里明确使用理论能形式化证明检查过程的假设；D3 不是纯粹的元语言逻辑恒等式。$\\square$"
      ]
    },
    {
      "id": "loeb-theorem",
      "topics": [
        "foundations/godel-second",
        "foundations/formal-proof"
      ],
      "title": "Löb 定理（在可证性条件下）",
      "statement": "若 T 满足对角句构造及 D1–D3，且 T⊢Prov(⌜φ⌝)→φ，则 T⊢φ。",
      "dependencies": [
        "provability-d1",
        "provability-d2",
        "provability-d3",
        "arithmetical-diagonal-lemma"
      ],
      "idea": "取 G↔(Prov(G)→φ)，利用 D1–D3 在理论内部把 Prov(G) 推到 Prov(φ)，再得到 G 本身可证。",
      "steps": [
        "对公式 ψ(x)=Prov(x)→φ 应用对角构造，得句子 G 使 T⊢G↔(Prov(⌜G⌝)→φ)。记 P_G 为 Prov(⌜G⌝)。固定点给 T⊢G→(P_G→φ) 与 T⊢(P_G→φ)→G。",
        "由 D1，T⊢Prov(⌜G→(P_G→φ)⌝)。D2 将其与证明规则合成为 T⊢P_G→Prov(⌜P_G→φ⌝)。再次用 D2 对内部蕴含应用，得 T⊢Prov(⌜P_G→φ⌝)→(Prov(⌜P_G⌝)→Prov(⌜φ⌝))。",
        "D3 给 T⊢P_G→Prov(⌜P_G⌝)。串联上述蕴含，T⊢P_G→Prov(⌜φ⌝)。题设 T⊢Prov(⌜φ⌝)→φ，故 T⊢P_G→φ。固定点的反向蕴含随即给 T⊢G。",
        "再由 D1 得 T⊢P_G；结合 T⊢P_G→φ，MP 得 T⊢φ。全程只用经典逻辑、固定点与明列的 D1–D3。$\\square$"
      ]
    },
    {
      "id": "godel-second-incompleteness",
      "topics": [
        "foundations/godel-second"
      ],
      "title": "Gödel 第二不完备定理（条件化证明）",
      "statement": "若 T 一致、有效可公理化、含足够算术以构造对角句，且其标准可证性谓词满足 D1–D3，则 T 不证明自身一致性句 Con(T)=¬Prov_T(⌜⊥⌝)。",
      "dependencies": [
        "loeb-theorem"
      ],
      "idea": "若 T 能证明 Con(T)，经典逻辑给 Prov(⊥)→⊥；Löb 定理将推出 T⊢⊥，违背一致性。",
      "steps": [
        "反设 T⊢Con(T)，即 T⊢¬Prov(⌜⊥⌝)。经典命题重言式 ¬P↔(P→⊥) 给 T⊢Prov(⌜⊥⌝)→⊥。",
        "把 Löb 定理用于 φ=⊥，其前提正是上一步的内部蕴含，故 T⊢⊥。这与 T 一致（不证明矛盾句）的假设冲突。",
        "所以 T⊬Con(T)。结论依赖 D1–D3 与对角构造；对具体 Robinson Q 或 Peano 算术的标准编码，要把这些算术化条件逐项证明后才得到通常表述。$\\square$"
      ]
    },
    {
      "id": "finite-module-integrality",
      "topics": [
        "algebra/modules",
        "algebra/dimension-theory"
      ],
      "title": "有限模代数的整性及有限性的传递",
      "statement": "若含幺交换代数 S 是有限生成 R-模，则 S 的每个元素对 R 整。若 S 有限于 R、R 有限于 A，则 S 有限于 A。",
      "dependencies": [
        "finite-integral-algebra"
      ],
      "idea": "乘法在有限生成模上的矩阵关系给首一方程；两层生成元的乘积生成复合扩张。",
      "steps": [
        "设 u₁,…,u_m 生成 S。固定 s∈S，写 su_j=Σ_i a_ji u_i。矩阵关系 (sI−A)u=0，乘伴随矩阵得 det(sI−A)u_j=0 对每个 j。因1∈S由这些 u_j 的 R 线性组合表示，得到 det(sI−A)=0。该表达式为 s 的首一多项式，证明整性；生成元无需线性无关。",
        "若 r₁,…,r_l 是 R 的 A-模生成元，每个 S 元素先写成 Σ_j c_ju_j、c_j∈R，再把各 c_j 展开为 r_i 的 A 线性组合。故有限个 r_i u_j 生成 S，得到有限性传递。$\\square$"
      ]
    },
    {
      "id": "noether-normalization",
      "topics": [
        "algebra/dimension-theory",
        "algebra/polynomial-rings",
        "geometry/coordinate-rings"
      ],
      "title": "Noether 正规化引理（任意基域）",
      "statement": "若非零 k-代数 A 为有限生成整环，则存在代数无关 t₁,…,t_r∈A，使 A 是 k[t₁,…,t_r] 上的有限生成模。因此该子环确为多项式环，Frac(A) 是 k(t₁,…,t_r) 的有限代数扩张。不要求基域无限。",
      "dependencies": [
        "finite-module-integrality",
        "finite-integral-algebra",
        "minimal-polynomial"
      ],
      "idea": "用不同大幂次替换变量，让关系式在最后一个变量的最高项只来自一个单项式，再对生成元个数归纳。",
      "steps": [
        "写 A=k[a₁,…,a_n]，按 n 归纳。n=0 时 A=k，取 r=0。若 a₁,…,a_n 代数无关，则 A 本身为它们的多项式环，作为自身模由1生成，完成。否则存在非零多项式 f(x₁,…,x_n) 使 f(a)=0。",
        "取整数 B 大于 f 中全部单项式的每个变量指数。赋权 w_n=1、w_i=B^i（1≤i<n）。由于各指数小于 B，单项式的加权次数 α_n+Σ_(i<n)α_i B^i 由 B 进制表示唯一决定指数向量，所以不同单项式权重不同。",
        "令 x_i=y_i+y_n^(B^i)（i<n）、x_n=y_n。每个原单项式展开后的 y_n 最高次项恰为其加权次数，系数为原标量系数；展开中凡选择某个 y_i 因子，y_n 次数就严格降低。因此整个替换多项式的最高 y_n 次项只来自唯一最大权重单项式，其系数为非零 k 标量。除以该标量后，得到关于 y_n 的首一多项式，系数在 k[y₁,…,y_(n−1)]。",
        "在 A 内置 b_i=a_i−a_n^(B^i)，R=k[b₁,…,b_(n−1)]。替换关系使 a_n 对 R 整，且 A=R[a_n]，因为 a_i=b_i+a_n^(B^i)。首一关系把 a_n 高次幂消去，所以 A 有限于 R。R 是整环且至多 n−1 个代数生成元，归纳假设给其中代数无关 t₁,…,t_r，使 R 有限于 C=k[t₁,…,t_r]。有限性传递得 A 有限于 C。",
        "有限模整性使每个 a_i 对 C 整，因而对分式域 F=k(t₁,…,t_r) 代数。嵌入 Frac(A) 中，F(a₁,…,a_n) 是有限个代数元素生成的域，故为有限代数扩张。它包含 A 及其全部非零元素的逆，所以等于 Frac(A)。证明完成；尚不能单凭该引理直接略去 Krull 维数所需的素理想链论证。$\\square$"
      ]
    },
    {
      "id": "finite-integral-algebra",
      "topics": [
        "algebra/modules",
        "numbertheory/algebraic-integers"
      ],
      "title": "有限个整元素生成的代数有限及整性传递到其元素",
      "statement": "若 s₁,…,s_m 对 R 整，则 S=R[s₁,…,s_m] 是有限生成 R-模，且每个 s∈S 对 R 整。若这样的 S 是域，则 R 也是域。",
      "dependencies": [
        "def-integral-extension",
        "axiom-vector"
      ],
      "idea": "各首一关系压低单项式次数，乘法在有限生成模上的矩阵关系再给首一湮灭多项式。",
      "steps": [
        "设 s_i 满足次数 d_i 的首一关系。反复用该关系消去高次幂，所有单项式都化为 R 线性组合，指数各小于 d_i。因此有限个这些单项式生成 S，且包含1，记为 u₁,…,u_N。",
        "固定 s∈S，将每个 su_j 写成生成元的线性组合，得到矩阵关系 (sI−A)u=0，其中 A 的元素在 R 中。伴随矩阵恒等式给 det(sI−A)u_j=0 对每个 j。因为1也由 u_j 生成，故 det(sI−A)=0。行列式按置换展开及伴随恒等式可在任意交换环逐项验证；该行列式作为 s 的多项式首一，证明 s 整。",
        "若 S 是域，对任意非零 r∈R，r⁻¹∈S 整，满足 (r⁻¹)^d+a_(d−1)(r⁻¹)^(d−1)+…+a₀=0。乘 r^(d−1)，得到 r⁻¹=−a_(d−1)−a_(d−2)r−…−a₀r^(d−1)∈R。因此 R 中每个非零元素可逆，是域。$\\square$"
      ]
    },
    {
      "id": "zariski-lemma",
      "topics": [
        "algebra/field-extensions",
        "geometry/coordinate-rings"
      ],
      "title": "Zariski 引理",
      "statement": "若域 L 同时是 k 上有限生成的交换代数，则 L/k 为有限代数扩张。",
      "dependencies": [
        "finite-integral-algebra",
        "minimal-polynomial",
        "polynomial-bezout",
        "def-integral-extension"
      ],
      "idea": "若生成元中有超越部分，清除其余代数关系的分母后，会迫使一个明显不是域的局部化成为域。",
      "steps": [
        "从有限代数生成元中选最大代数无关子集 t₁,…,t_r，其余记 α₁,…,α_m。每个 α_i 对 F=k(t₁,…,t_r) 代数：否则添入它仍代数无关，与最大性矛盾。令 A=k[t₁,…,t_r]，它是多项式环，F 为其分式域。",
        "把各 α_i 的首一代数关系的有限个系数分母相乘为非零 f∈A，令 R=A[1/f]。这些 α_i 都对 R 整。因 L 原本等于 k[t₁,…,t_r,α₁,…,α_m] 且是域，包含1/f，所以 L=R[α₁,…,α_m]。前引理迫使 R 是域。",
        "若 r≥1，R 实际不是域。k[t₁] 中首一不可约多项式有无穷多个：若只有有限个 q_i，非恒定多项式 1+t₁∏q_i 的任一不可约因子都不在其中，因为它模每个 q_i 都等于1；不可约因子的存在由次数归纳。取 f 视作其余变元的多项式的一个非零 k[t₁] 系数，选不可约 q∈k[t₁] 不整除该系数。则 q 不整除 f。",
        "商 A/(q) 是域 k[t₁]/(q) 上的多项式环，故为整环，所以 q 为素元。若 q 在 R 可逆，则 1/q=g/f^N，某 g∈A，交叉相乘 f^N=qg，与 q 不整除 f 矛盾。因此 R 非域，排除 r≥1。",
        "故 r=0，全部有限生成元对 k 代数，有限次单扩张的次数乘法给 [L:k]<∞，即有限代数扩张。$\\square$"
      ]
    },
    {
      "id": "weak-nullstellensatz",
      "topics": [
        "geometry/algebraic-varieties-geometry",
        "geometry/coordinate-rings",
        "algebra/prime-ideals"
      ],
      "title": "弱 Hilbert 零点定理",
      "statement": "代数闭域 k 上 k[x₁,…,x_n] 的每个极大理想都为 (x₁−a₁,…,x_n−a_n)，某 a∈k^n。因此每个真理想有共同 k 点零点。",
      "dependencies": [
        "zariski-lemma",
        "maximal-prime-quotient",
        "axiom-zorn"
      ],
      "idea": "对极大理想取商，Zariski 引理使其为代数扩张，代数闭性迫使商域就是 k。",
      "steps": [
        "设极大理想 m 的商域 L=k[x]/m。常数域 k 单射进入 L（非零常数不可落入真理想），而 L 由各变量的商类有限代数生成。Zariski 引理给有限代数扩张 L/k。代数闭性使每个代数元素的不可约最小多项式次数一，所以 L=k。令 x_i 的像为 a_i∈k。",
        "每个 x_i−a_i 落入 m，反向对任意多项式 h，逐变量相减或平移变量展开可得 h(x)−h(a)∈(x_i−a_i)。因此求值同态的核恰为这个点理想；m 中元素的求值为零，故 m 就是点理想。",
        "任意真理想 I 包含于极大理想：所有含 I 的真理想按包含排序，链的并仍真，因为若包含1则某个成员已含1；Zorn 给极大元。于是 I 中多项式都在对应点 a 消失，得到共同零点。$\\square$"
      ]
    },
    {
      "id": "strong-nullstellensatz",
      "topics": [
        "geometry/algebraic-varieties-geometry",
        "geometry/coordinate-rings",
        "algebra/prime-ideals"
      ],
      "title": "强 Hilbert 零点定理",
      "statement": "代数闭域 k 上任意理想 I⊆k[x₁,…,x_n] 满足 I(V(I))=√I。因此代数集与根式理想通过 V、I 互为逆序对应。",
      "dependencies": [
        "weak-nullstellensatz",
        "def-integral-extension"
      ],
      "idea": "加入新变量和关系1−tf；若 f 在零点集消失，则新理想无零点，只能是整个环。",
      "steps": [
        "若 f^m∈I，则对每个 a∈V(I)，f(a)^m=0，域无非零幂零元给 f(a)=0，所以 √I⊆I(V(I))。",
        "反向取在 V(I) 消失的 f。若 f 是零多项式，已在 √I。否则在 k[x,t] 中取 J=(I,1−tf)。若 J 真，弱零点定理给 (a,b) 使所有 I 中多项式在 a 为零，且1−bf(a)=0；但 f 在 V(I) 消失给 f(a)=0，矛盾。因此1∈J。",
        "理想生成的定义给有限恒等式1=Σ_jA_j(x,t)h_j(x)+B(x,t)(1−tf(x))，h_j∈I。在分式域中代入 t=1/f，后一项消失。乘以足够高 f^N 清掉各 A_j(x,1/f) 的分母，得到 f^N=Σ_jC_j(x)h_j(x)∈I。若只需N=0则1∈I，此时也有f∈I；故总能选正整数幂，得到 f∈√I。",
        "两包含给等式。对代数集 X=V(J)，有 V(I(X))=X：一侧因 I(X) 全在 X 消失，另一侧由 J⊆I(X) 得到。对根式理想 I，已证 I(V(I))=I。两运算随包含反向，故给所述对应。$\\square$"
      ]
    },
    {
      "id": "carmichael-561",
      "topics": [
        "numbertheory/primality-testing",
        "numbertheory/congruences"
      ],
      "title": "561 是 Carmichael 伪素数",
      "statement": "561=3·11·17 为合数，但对每个整数 a 与 561 互素，均有 a^560≡1 (mod 561)。",
      "dependencies": [
        "fermat-little",
        "chinese-remainder"
      ],
      "idea": "指数 560 是 3、11、17 各自乘法群阶数 p−1 的公倍数，再由中国剩余定理合并。",
      "steps": [
        "直接计算 561=3·11·17，三个因子互异素数，所以 561 是合数。若 gcd(a,561)=1，则 a 分别不被 3、11、17 整除。",
        "对模 3、11、17 分别应用费马小定理，得到 a²≡1 (mod 3)、a¹⁰≡1 (mod 11)、a¹⁶≡1 (mod 17)。因为 2、10、16 均整除 560，对各同余式取相应整数次幂，得 a⁵⁶⁰ 在三个模数下都同余于 1。",
        "模数 3、11、17 两两互素。中国剩余定理说明，一个整数若模这三个数都与 1 同余，就模其乘积 561 与 1 同余。因此 a⁵⁶⁰≡1 (mod 561)。这证明 561 对所有可用费马检验的底数都通过，而非仅对少数底数通过；素数性检验的该必要条件不充分。$\\square$"
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
      "id": "gronwall-continuous",
      "topics": [
        "analysis/odes",
        "analysis/stability"
      ],
      "title": "连续 Grönwall 不等式",
      "statement": "连续非负u:[0,T]→R若满足u(t)≤a+b∫₀^t u(s)ds，a,b≥0，则u(t)≤ae^(bt)。",
      "dependencies": [
        "ftc-second"
      ],
      "idea": "用积分右端构造可微上界，乘指数积分因子。",
      "steps": [
        "令v(t)=a+b∫₀^t u(s)ds，则u≤v、v(0)=a且v′=bu≤bv。因此(e^(−bt)v)′≤0。",
        "在0到t积分得e^(−bt)v(t)≤v(0)=a，故v(t)≤ae^(bt)，再用u≤v即得。a=0时同样给u恒零，不需要除以a。$\\square$"
      ]
    },
    {
      "id": "vector-local-picard",
      "topics": [
        "analysis/odes",
        "analysis/initial-boundary"
      ],
      "title": "有限维一致局部 Picard 存在唯一性",
      "statement": "设F:Ω⊆R^m→R^m为C¹，x₀∈Ω。存在h>0及x₀邻域V，使每个z∈V的初值问题x′=F(x)、x(0)=z在[−h,h]有唯一局部解φ(t,z)。并可取统一L使‖φ(t,z)−φ(t,w)‖≤e^(L|t|)‖z−w‖。",
      "dependencies": [
        "banach-contraction",
        "continuous-functions-complete",
        "vector-segment-derivative-bound",
        "gronwall-continuous",
        "ftc-first"
      ],
      "idea": "在同一个闭球及同一个短时间段上压缩，给相邻初值统一存在时间。",
      "steps": [
        "取闭球B(x₀,r)包含于Ω，F及DF在球上有界，记M=sup‖F‖、L=sup‖DF‖。线段导数估计给F在球内Lipschitz常数L。取h>0使hM<r/2、hL<1（M或L为零时相应约束自动成立），初值z取开球V=B(x₀,r/2)。",
        "在连续函数空间中取闭子集E={y:[−h,h]→B(x₀,r)}，它完备：逐坐标一致柯西列有连续极限且闭球保持极限。定义T_z y(t)=z+∫₀^t F(y(s))ds。范数估计保证值在球内，且‖T_zy−T_zw‖∞≤hL‖y−w‖∞。压缩定理给唯一固定点，积分基本定理给C¹解。",
        "任意留在球内的两解之差满足 ‖x(t)−y(t)‖≤‖z−w‖+L∫₀^t‖x(s)−y(s)‖ds，正时间用Grönwall，负时间反向参数后同理。由此得所列初值估计和唯一性。任意其他局部解最初由连续性留在球内，重叠区间可逐点应用相同局部唯一性拼接，因此是通常意义的局部唯一解。$\\square$"
      ]
    },
    {
      "id": "flow-initial-c1-variation",
      "topics": [
        "analysis/odes",
        "geometry/hamiltonian-systems",
        "geometry/symplectomorphisms"
      ],
      "title": "局部流对初值的 C¹ 依赖及变分方程",
      "statement": "对开集上的C¹向量场F，上述统一局部解φ(t,z)对(t,z)为C¹，并且J(t,z)=D_zφ(t,z)满足 J′=DF(φ(t,z))J、J(0,z)=I。局部流满足φ(t,φ(s,z))=φ(t+s,z)，只要相应解段均在共同定义域；每个固定t的映射局部可逆，逆为反向时间流。",
      "dependencies": [
        "vector-local-picard",
        "linear-ode-existence",
        "gronwall-continuous",
        "heine-cantor"
      ],
      "idea": "用导数的一致连续性控制非线性余项，再与线性变分方程相减。",
      "steps": [
        "固定统一存在矩形中的(t,z)。沿轨迹A(s,z)=DF(φ(s,z))连续，线性方程给唯一J，且积分方程和Grönwall给‖J(t,z)‖≤e^(L|t|)。给小向量v，令δ(s)=φ(s,z+v)−φ(s,z)，前面估计给sup_s‖δ(s)‖≤e^(Lh)‖v‖。选紧球使相邻轨迹和它们的连线都在原定义域内。",
        "DF在该紧球上一致连续。写ω(ρ)=sup{‖DF(x)−DF(y)‖:‖x−y‖≤ρ且x,y在球内}，则ω(ρ)→0。线段积分给 F(x+δ)−F(x)−DF(x)δ 的范数≤ω(‖δ‖)‖δ‖。令e(s)=δ(s)−J(s,z)v，积分方程相减得 e(t)=∫₀^t[A(s,z)e(s)+R(s)]ds，且sup‖R‖≤ω(e^(Lh)‖v‖)e^(Lh)‖v‖。",
        "Grönwall于是给sup‖e‖≤h e^(2Lh)ω(e^(Lh)‖v‖)‖v‖=o(‖v‖)，负时间同样。因此J确实是初值方向的Fréchet导数，且余项在所取紧邻域一致。",
        "证明J随初值连续：φ的初值Lipschitz估计使A(·,z′)一致趋A(·,z)。两J积分方程相减，利用统一指数界和Grönwall得sup‖J(·,z′)−J(·,z)‖≤h e^(2Lh)sup‖A(·,z′)−A(·,z)‖→0。时间连续性来自线性方程，合起来得J联合连续。又∂_tφ=F(φ)连续，所以φ为C¹。",
        "自治性使轨迹u↦φ(u+s,z)与u↦φ(u,φ(s,z))满足同一方程和相同u=0初值，唯一性给群律。在足够小的相邻定义域内取s=−t，得反向时间映射为逆。其C¹性已证，故得到局部C¹微分同胚。这同时验证上一章Jacobian体积公式所列的初值可微和变分方程假设。$\\square$"
      ]
    },
    {
      "id": "bounded-operator-complete",
      "topics": [
        "analysis/linear-operators",
        "analysis/banach-spaces"
      ],
      "title": "有界线性算子空间的完备性",
      "statement": "若 X 为赋范空间、Y 为 Banach 空间，则 B(X,Y) 配算子范数为 Banach 空间；特别地 X* 总是 Banach 空间。",
      "dependencies": [
        "def-complete",
        "axiom-metric"
      ],
      "idea": "算子范数柯西先给逐点极限，再用同一误差界恢复算子范数收敛。",
      "steps": [
        "若 T_n 在算子范数下柯西，则固定 x 时 ‖T_nx−T_mx‖≤‖T_n−T_m‖‖x‖，所以 T_nx 在 Y 中柯西并收敛。定义 Tx=lim_nT_nx；取向量加法及数乘的极限可验证 T 线性。",
        "柯西列的范数有共同上界 C：尾部与某固定项差≤1，有限个前项另取最大值。因此 ‖Tx‖=lim_n‖T_nx‖≤C‖x‖，T 有界。",
        "给 ε>0，充分大 n,m 有 ‖T_n−T_m‖≤ε。固定 n 和 x 令 m→∞，得 ‖(T_n−T)x‖≤ε‖x‖，再取单位球上确界，‖T_n−T‖≤ε。因此 B(X,Y) 完备。标量域 R、C 完备，取 Y 为标量域即得 X* 完备。$\\square$"
      ]
    },
    {
      "id": "banach-neumann-series",
      "topics": [
        "analysis/linear-operators",
        "analysis/spectral-theory"
      ],
      "title": "Banach 空间上的 Neumann 级数",
      "statement": "若 X 为 Banach 空间且 B∈B(X)、‖B‖<1，则 I−B 有有界双侧逆 Σ_(n≥0)B^n，且其范数≤1/(1−‖B‖)。",
      "dependencies": [
        "bounded-operator-complete"
      ],
      "idea": "算子空间完备使几何控制级数收敛，有限望远镜恒等式给双侧逆。",
      "steps": [
        "算子范数满足 ‖AB‖≤‖A‖‖B‖，因为对任意 x 有 ‖ABx‖≤‖A‖‖B‖‖x‖。故 ΣB^n 的尾部范数≤Σ‖B‖^n，几何级数收敛使算子部分和柯西。由 B(X) 完备得极限 S。",
        "有限恒等式 (I−B)Σ_(k=0)^nB^k=Σ_(k=0)^nB^k(I−B)=I−B^(n+1)。因 ‖B^(n+1)‖≤‖B‖^(n+1)→0，乘法连续，取极限得 (I−B)S=S(I−B)=I。",
        "部分和范数≤Σ_(k=0)^n‖B‖^k，取极限给 ‖S‖≤1/(1−‖B‖)。X={0} 时唯一算子同时为恒等与零，结论按该空间的运算直接成立。$\\square$"
      ]
    },
    {
      "id": "resolvent-open-bounded-spectrum",
      "topics": [
        "analysis/spectral-theory"
      ],
      "title": "有界算子的预解集开与谱有界闭",
      "statement": "复 Banach 空间上有界算子 T 的预解集 ρ(T)={λ:T−λI 有有界双侧逆} 为开集；其补谱 σ(T) 闭且包含在 |λ|≤‖T‖ 内。",
      "dependencies": [
        "banach-neumann-series"
      ],
      "idea": "在已知可逆点附近分解成可逆算子乘以小扰动；远处直接提出标量 λ。",
      "steps": [
        "设 λ₀∈ρ(T)，R₀=(T−λ₀I)⁻¹。因 R₀ 与 T−λ₀I 互逆，T−λI=(T−λ₀I)[I−(λ−λ₀)R₀]。若 |λ−λ₀|‖R₀‖<1，Neumann 定理使后一因子可逆，因此 λ∈ρ(T)，预解集开，谱闭。",
        "若 |λ|>‖T‖，则 T−λI=−λ(I−T/λ)，‖T/λ‖<1，故可逆，且 ‖(T−λI)⁻¹‖≤1/(|λ|−‖T‖)。所以谱位于所列闭圆盘。这里仅证明闭与有界，不以此冒充谱非空的证明。$\\square$"
      ]
    },
    {
      "id": "compact-self-adjoint-spectrum-set",
      "topics": [
        "analysis/spectral-theory"
      ],
      "title": "紧自伴算子的完整谱集与预解范数",
      "statement": "非零复 Hilbert 空间 H 上紧自伴算子 T，令 D 为其所有特征值（核非零时含 0）。则 σ(T)=closure(D)。对 λ∉σ(T)，有 ‖(T−λI)⁻¹‖=1/dist(λ,σ(T))。特别地非零谱值都是有限重数实特征值；H 无限维时 0 必在谱中，但未必为特征值。",
      "dependencies": [
        "compact-self-adjoint-spectral",
        "compact-eigenvalue-finiteness",
        "hilbert-orthonormal-basis"
      ],
      "idea": "在全空间正交特征基上逐坐标解方程；系数分母远离零等价于有界可逆。",
      "steps": [
        "谱分解给标准正交特征基 E，记每个基向量的特征值为 d_e∈R。任一特征值均为这些 d_e 之一：若 Tx=dx、x≠0，x 至少有一个非零基系数，对该系数比较给 d=d_e。因此 D={d_e:e∈E}。",
        "若 λ 不在 closure(D)，则 δ=inf_e|d_e−λ|>0。对 y 定义 Ry=Σ_e〈y,e〉/(d_e−λ)·e。Parseval 给系数平方和≤δ⁻²‖y‖²，所以级数范数收敛且 R 有界。逐基系数比较，利用 T 连续，得 (T−λI)Ry=y、R(T−λI)y=y。因此 λ 在预解集。",
        "若 λ∈closure(D)，可选单位特征向量 e_n 使 |d_(e_n)−λ|→0（若 λ 本身为特征值可反复选同一向量）。则 ‖(T−λI)e_n‖→0。若存在有界逆 R，会有 1=‖e_n‖≤‖R‖‖(T−λI)e_n‖→0，矛盾。所以 λ∈σ(T)。",
        "上述坐标逆满足 ‖R‖≤1/δ。另一方面 ‖Re‖=1/|d_e−λ|，取上确界得 ‖R‖≥1/δ。D 与其闭包距 λ 的下确界相同，故得到预解范数公式。",
        "非零特征值只可能在零处聚集，由前引理每个 ε 之外仅有限个连重数的谱方向，故非零谱点必在 D，且有限重数。如果 H 无限维、核非零则 0 已是特征值；如果核为零，特征基必无限，非零特征值趋零，因此 0∈closure(D)。例 H=ℓ²、Te_n=e_n/n：T 的有限秩截断误差≤1/(N+1)，所以紧（有界序列先对有限坐标抽取子列，再用统一尾界作对角柯西估计）；其核为零而 0∈σ(T)。$\\square$"
      ]
    },
    {
      "id": "multiplication-spectrum",
      "topics": [
        "analysis/spectral-theory",
        "analysis/linear-operators"
      ],
      "title": "L² 乘法算子的谱等于本质值域",
      "statement": "设 (Ω,μ) 为非零 σ 有限测度空间，f 为本质有界复可测函数，M_fg=fg 作用于复 L²(μ)。则 σ(M_f)={λ∈C:对每个 ε>0，μ{|f−λ|<ε}>0}，即 f 的本质值域。",
      "dependencies": [
        "general-l2-complete",
        "integral-linearity"
      ],
      "idea": "远离本质值域时取逐点倒数；进入本质值域时在函数值贴近 λ 的有限测度集合上取归一化指标。",
      "steps": [
        "若 |f|≤C 几乎处处，则 ‖fg‖₂²≤C²‖g‖₂²，故 M_f 有界。改变 f 的零测集取值不影响算子或本质值域。若 λ 不在所列集合，存在 ε>0 使 |f−λ|≥ε 几乎处处；h=1/(f−λ) 几乎处处有界，在异常零集任取零，则 M_h 是 M_f−λI 的有界双侧逆。",
        "若 λ 属于本质值域，令 A_n={|f−λ|<1/n}，每个均正测度。取递增有限测度集合 Ω_k 覆盖 Ω。若全部 μ(A_n∩Ω_k)=0，则可数并也为零，与 μ(A_n)>0 矛盾。因此可取 B_n=A_n∩Ω_(k_n) 满足 0<μ(B_n)<∞。",
        "令 g_n=1_(B_n)/√μ(B_n)，则 ‖g_n‖₂=1，而 ‖(M_f−λI)g_n‖₂≤1/n。若有有界逆 R，便有 1≤‖R‖/n，矛盾。因此 λ 在谱中，两个包含合并给等式。σ 有限条件在此用于构造非零有限测度测试集；对任意测度空间不能无条件略去这个步骤。$\\square$"
      ]
    },
    {
      "id": "weak-derivative-unique",
      "topics": [
        "analysis/weak-solutions",
        "geometry/tangent-spaces"
      ],
      "title": "弱导数的唯一性",
      "statement": "局部可积函数的弱导数如果存在，则按几乎处处相等意义唯一；本证明给平方可积弱导数的情形。",
      "dependencies": [
        "schwartz-density",
        "def-sobolev"
      ],
      "idea": "两个候选导数的差对全部光滑紧支撑测试函数积分为零，再用局部平滑逼近识别差为零。",
      "steps": [
        "若 v,w 都为同一弱导数，则 h=v-w 满足 ∫hφ=0 对全部光滑紧支撑 φ。固定闭盒 J，外包一个仍在 Ω 的开盒，只需对盒内任意更小区间或矩形的指标作光滑逼近。",
        "可把已展开的 Gaussian 平滑指标构造乘一个光滑紧支撑截断，令其在 J 为一；这样的截断可由 exp(-1/t) 在 t>0、零延拓在 t≤0 的函数组成并归一化，所有阶导数在零点趋零由指数支配任意幂验证。各坐标相乘给高维截断。平滑指标在 L² 上趋原指标，Cauchy—Schwarz 使 ∫h1_E=0。",
        "矩形生成盒内 Borel σ 代数，π—λ 论证与完备化使 h 在所有可测集积分零，取正负集得到 h=0 几乎处处于该盒。可用可数个内部有理盒覆盖 Ω，故全域唯一。$\\square$"
      ]
    },
    {
      "id": "sobolev-complete",
      "topics": [
        "analysis/weak-solutions",
        "analysis/hilbert-spaces"
      ],
      "title": "H¹ 与 H¹_0 的完备性",
      "statement": "H¹(Ω) 在自然内积下是 Hilbert 空间，H¹_0(Ω) 是其闭 Hilbert 子空间。",
      "dependencies": [
        "general-l2-complete",
        "weak-derivative-unique",
        "def-sobolev"
      ],
      "idea": "将柯西列的函数与各弱导数分别取 L² 极限，再把测试函数等式传给极限。",
      "steps": [
        "若 u_n 在 H¹ 中柯西，L² 完备性给 u_n→u、∂_i u_n→v_i 于各自 L²。对每个紧支撑光滑 φ，φ 与 ∂_iφ 平方可积，Cauchy—Schwarz 使测试等式两边都可取极限。",
        "因此 ∫u∂_iφ=-∫v_iφ，v_i 正是 u 的弱导数，故 u∈H¹，且各分量收敛给 H¹ 范数收敛。弱导数唯一性保证内积定义与代表选择无关，正定性由函数 L² 范数项保证。",
        "H¹_0 按定义是子空间的闭包，线性性由加法与数乘的范数连续性保留；闭子空间的柯西列极限仍在其中，所以也完备。$\\square$"
      ]
    },
    {
      "id": "poincare-box",
      "topics": [
        "analysis/weak-solutions",
        "applied/finite-elements"
      ],
      "title": "有界域 H¹_0 的 Poincaré 不等式",
      "statement": "若 Ω⊆[-R,R]^d 有界且 R>0，则对 u∈H¹_0(Ω)，‖u‖₂≤2R‖∇u‖₂。",
      "dependencies": [
        "sobolev-complete",
        "tonelli-fubini",
        "general-l2-complete",
        "ftc-second"
      ],
      "idea": "先对光滑紧支撑函数沿一个坐标积分，再用闭包把估计延拓。",
      "steps": [
        "先令 u 光滑紧支撑于 Ω，在外部零延拓。固定其余坐标 x′，基本定理给 u(x₁,x′)=∫_-R^(x₁)∂₁u(s,x′)ds。Cauchy—Schwarz 给 |u(x₁,x′)|²≤2R∫_-R^R|∂₁u(s,x′)|²ds。",
        "再对 x₁ 积分产生另一个 2R 因子，对 x′ 用非负 Fubini，得 ‖u‖₂²≤4R²‖∂₁u‖₂²≤4R²‖∇u‖₂²。",
        "一般 H¹_0 元素由光滑紧支撑列在 H¹ 中逼近，函数与梯度的 L² 范数均收敛，不等式随极限保留。于是梯度范数与 H¹ 范数在 H¹_0 等价，因此使用梯度内积时仍完备。$\\square$"
      ]
    },
    {
      "id": "lax-milgram",
      "topics": [
        "analysis/weak-solutions",
        "analysis/linear-operators",
        "applied/finite-elements"
      ],
      "title": "Lax–Milgram 定理（实 Hilbert 空间）",
      "statement": "实 Hilbert 空间 V 上双线性 a 满足 |a(u,v)|≤M‖u‖‖v‖ 与 a(v,v)≥α‖v‖²、α>0。则任意有界线性 ℓ 唯一对应 u∈V，使 a(u,v)=ℓ(v) 对全部 v，且 ‖u‖≤‖ℓ‖/α。",
      "dependencies": [
        "riesz-representation",
        "projection-closed-subspace",
        "general-l2-complete"
      ],
      "idea": "将双线性形式表示为一个有界算子，强制性使其像闭，而正交补只可能为零。",
      "steps": [
        "对固定 u，v↦a(u,v) 为有界泛函，Riesz 定理给唯一 Tu，使 a(u,v)=〈Tu,v〉。唯一性使 T 线性，且 ‖Tu‖≤M‖u‖。强制性与 Cauchy—Schwarz 给 α‖u‖²≤〈Tu,u〉≤‖Tu‖‖u‖，故 ‖Tu‖≥α‖u‖。",
        "因此 T 单射。若 Tu_n 收敛，其柯西性与下界使 u_n 柯西，V 完备给 u_n→u，T 连续使像极限为 Tu，所以像闭。",
        "若 w 与像正交，则对全部 u 有 a(u,w)=0，特别取 u=w 得 α‖w‖²≤0，所以 w=0。闭子空间投影定理说明一个闭子空间正交补为零时必为全空间，故 T 满射。",
        "用 Riesz 将 ℓ 表示为 y，唯一解 Tu=y 即满足所有变分等式。又 α‖u‖²≤a(u,u)=ℓ(u)≤‖ℓ‖‖u‖，约去非零范数（零解直接成立）给估计。这里不要求 a 对称。$\\square$"
      ]
    },
    {
      "id": "poisson-weak-existence",
      "topics": [
        "analysis/pdes",
        "analysis/weak-solutions",
        "applied/pde-models"
      ],
      "title": "有界域 Poisson 零边值弱解",
      "statement": "若 Ω 有界开，f∈L²(Ω)，则唯一存在 u∈H¹_0(Ω)，使 ∫∇u·∇v=∫fv 对全部 v∈H¹_0。",
      "dependencies": [
        "poincare-box",
        "lax-milgram"
      ],
      "idea": "在梯度内积空间中使用 Lax–Milgram，并用 Poincaré 控制右端。",
      "steps": [
        "在 V=H¹_0 上用 ‖∇v‖₂ 为范数，前一定理保证其为完备内积空间。形式 a(u,v)=∫∇u·∇v 由 Cauchy—Schwarz 有界，且 a(v,v)=‖v‖²，所以 M=α=1。",
        "右端 ℓ(v)=∫fv 满足 |ℓ(v)|≤‖f‖₂‖v‖₂≤2R‖f‖₂‖∇v‖₂，因此有界。Lax–Milgram 给唯一 u，并给 ‖∇u‖₂≤2R‖f‖₂。",
        "对光滑紧支撑 v，弱导数定义把该等式翻译成分布意义的 -Δu=f；H¹_0 编码零边值。没有在证明中额外假定弱解自动有经典二阶导数。$\\square$"
      ]
    },
    {
      "id": "cea-lemma",
      "topics": [
        "applied/finite-elements",
        "applied/mesh-discretization"
      ],
      "title": "Céa 引理与 Galerkin 最佳逼近界",
      "statement": "在 Lax–Milgram 的假设下，任意有限维子空间 V_h 的 Galerkin 解 u_h 满足 ‖u-u_h‖≤(M/α)inf_(v_h∈V_h)‖u-v_h‖。",
      "dependencies": [
        "lax-milgram",
        "finite-norm-equivalence"
      ],
      "idea": "原解与离散解相减得到 Galerkin 正交性，再将误差中的离散部分消去。",
      "steps": [
        "有限维子空间在 Hilbert 范数下完备，由相同有界与强制条件，Lax–Milgram 在 V_h 上给唯一 u_h。对全部 w_h∈V_h，原方程与离散方程相减得 a(u-u_h,w_h)=0。",
        "令 e=u-u_h，任取 v_h。强制性给 α‖e‖²≤a(e,e)=a(e,u-v_h)+a(e,v_h-u_h)=a(e,u-v_h)，后项因正交性为零。",
        "有界性给右侧≤M‖e‖‖u-v_h‖。若 e≠0 约去，否则结论直接成立，再对 v_h 取下确界即得估计。该证明说明离散空间逼近质量如何传给数值误差，不预设网格加密必然产生稠密空间。$\\square$"
      ]
    },
    {
      "id": "heat-kernel-solution",
      "topics": [
        "analysis/pdes",
        "analysis/convolution",
        "applied/reaction-diffusion"
      ],
      "title": "实线热方程的 Gaussian 核解与唯一性",
      "statement": "给有界连续 f，u(t,x)=∫f(x-y)(4πt)⁻¹/²exp(-y²/(4t))dy 在 t>0 为经典热方程解 u_t=u_xx，t↓0 逐点趋 f。在有限时间窗上有界的经典解类中它唯一。",
      "dependencies": [
        "gaussian-integral",
        "tonelli-fubini",
        "dominated-convergence",
        "affine-lebesgue-change"
      ],
      "idea": "直接微分 Gaussian 核，初值由近似恒等；唯一性在大盒子中使用带二次屏障的最大值论证。",
      "steps": [
        "核 K_t 非负且积分一，故 |u|≤‖f‖∞。改写 u=∫f(y)K_t(x-y)dy。任意 t≥δ>0 的紧时间区间内，核的一阶时间及二阶空间导数都由可积的多项式乘 Gaussian 控制，所以可在积分号下求导。直接计算得 ∂_tK_t=∂_xxK_t，故 u 满足方程。",
        "换元得 u(t,x)=∫f(x-√(2t)z)g(z)dz。f 连续有界，DCT 给初值 f(x)；同一论证在 x 的紧区间一致成立，因为 f 在相应紧区间一致连续，Gaussian 尾部可统一控制。",
        "设两有界解之差 w 初值零，固定有限时间 T，令 v=w-ε(x²+2t)-ηt，ε,η>0。取 R 足够大，使空间边界 ±R 上 v<0；初始边也非正。若 v 在盒内取得正最大值，时间向前或最终时刻的左导数非负，空间二阶导数非正，故 v_t-v_xx≥0。",
        "但方程给 v_t-v_xx=-η<0，矛盾。故固定 (t,x) 有 w(t,x)≤ε(x²+2t)+ηt。先 η↓0 再 ε↓0 得 w≤0，对 -w 同样得 w≥0，故唯一。这里假设解连续延到初始边且整个有限时间窗有统一界。$\\square$"
      ]
    },
    {
      "id": "dalembert",
      "topics": [
        "analysis/pdes",
        "analysis/initial-boundary",
        "applied/pde-models"
      ],
      "title": "一维波动方程的 d’Alembert 公式",
      "statement": "对 c>0、f∈C²(R)、g∈C¹(R)，初值 u(0,x)=f(x)、u_t(0,x)=g(x) 的全实线波动方程 u_tt=c²u_xx 有唯一 C² 解，给出为 [f(x-ct)+f(x+ct)]/2+(2c)⁻¹∫_(x-ct)^(x+ct)g(s)ds。",
      "dependencies": [
        "variable-integral",
        "ftc-first",
        "ftc-second",
        "chain-rule"
      ],
      "idea": "特征坐标将方程化成一个混合二阶导数为零的方程。",
      "steps": [
        "按链式与变限积分公式直接求导，所列函数为 C²，满足 u_tt=c²u_xx；t=0 时两平移项合为 f，积分为零，一阶时间导数中两 f′ 抵消，变限项恰为 g。",
        "证明唯一性：令 ξ=x+ct、η=x-ct。逆坐标是 x=(ξ+η)/2、t=(ξ-η)/(2c)。链式法则把方程化为 U_ξη=0。对任意矩形两次基本定理给 U(ξ,η)-U(ξ,0)-U(0,η)+U(0,0)=0，所以 U=F(ξ)+G(η)。",
        "两解之差初始位移与速度均零，故 F(x)+G(x)=0 且 cF′(x)-cG′(x)=0。第一式求导并合并第二式，得 F′=G′=0；两常数互为相反，所以差为零。全部坐标在 R² 定义，得到全实线唯一性。$\\square$"
      ]
    },
    {
      "id": "pid-submodule-free",
      "topics": [
        "algebra/modules",
        "algebra/basis-dimension"
      ],
      "title": "有限秩自由模的子模在 PID 上自由",
      "statement": "PID R 上 R^n 的每个子模 N 都为有限生成自由模，秩至多 n。",
      "dependencies": [
        "def-pid",
        "axiom-natural"
      ],
      "idea": "投影到首坐标得到主理想，选一个提升后把剩余部分归到低一维。",
      "steps": [
        "对 n 归纳，n=0 时 N=0。设 π 为首坐标投影，π(N) 为理想，写成 (a)。若 a=0，N 是末 n−1 坐标自由模的子模，直接用归纳假设。",
        "若 a≠0，选 v∈N 使 π(v)=a。任意 w∈N 的首坐标为 ra，故 w−rv∈K=N∩kerπ。于是 N=Rv+K。若 rv∈K，首坐标 ra=0，整环且a≠0使r=0，故该和为直和，Rv≅R。",
        "K 是 R^(n−1) 的子模，归纳给自由基长度至多n−1。添入v得到 N 的有限自由基，长度至多n。$\\square$"
      ]
    },
    {
      "id": "smith-normal-form-pid",
      "topics": [
        "algebra/modules",
        "algebra/linear-maps"
      ],
      "title": "PID 上的 Smith 标准形",
      "statement": "PID 上任意有限矩阵 A 通过可逆行列变换化为 diag(d₁,…,d_r,0,…)，其中各 d_i≠0 且 d₁|d₂|…|d_r。",
      "dependencies": [
        "def-pid",
        "noetherian-equivalence"
      ],
      "idea": "不断用 Bezout 变换缩小不整除的主元；主元理想严格上升不能无穷持续。",
      "steps": [
        "若矩阵为零即完成。否则交换行列把非零 a 放在左上角。若同列某项 b 不被a整除，取g=gcd(a,b)、ua+vb=g，作用在这两行的2×2矩阵 [[u,v],[−b/g,a/g]] 行列式为1，把该列两项变成g与0。g不与a相伴，否则a会整除b；因此主元理想(a)严格包含于(g)。同一操作可用于同行两列。",
        "若第一列或第一行的某项被主元整除，用减去倍数清为零。这些是可逆变换。只要主元不变，有限个位置即可清完行列；若出现不整除项，就用前步使主元理想严格上升。PID 的每个理想有限生成，故诺特升链条件排除无限次严格上升。",
        "清完第一行列后矩阵为 diag(a,B)。若B有项b不被a整除，将含b的行加到第一行，使第一行出现该b，同时首列主元仍为a；再用列Bezout操作严格增大主元理想，重做清除。升链条件也排除此步骤无限重复。最终得到 diag(a,B)，且a整除B全部元素。",
        "对B按行列大小递归作同样约化。B 的行列变换只作环线性组合，所有项仍为a的倍数，因此其首个非零主元也被a整除。归纳给 d₁|d₂|…，而整个过程是有限个可逆行列变换的复合。$\\square$"
      ]
    },
    {
      "id": "pid-module-decomposition",
      "topics": [
        "algebra/modules",
        "algebra/basis-dimension"
      ],
      "title": "PID 上有限生成模的循环直和分解（存在性）",
      "statement": "PID R 上每个有限生成模 M 都可写为 R^s⊕R/(d₁)⊕…⊕R/(d_r)，其中 d_i 为非零非单位，且 d₁|…|d_r。这里证明存在性，分解因子的唯一性须另证。",
      "dependencies": [
        "pid-submodule-free",
        "smith-normal-form-pid",
        "module-first-isomorphism"
      ],
      "idea": "取有限自由模到 M 的满射，将核写成有限自由模，再对关系矩阵作 Smith 约化。",
      "steps": [
        "取生成元 m₁,…,m_n，定义满射 R^n→M，将标准基映为m_i。核N是R^n子模，已证它有限自由，故可选有限基，作为列写成关系矩阵 A:R^l→R^n。第一同构定理给 M≅R^n/im A。",
        "Smith 变换的右乘仅改变N的基，不改关系像；左乘给R^n自同构，同时把像送到对角关系子模，因此不改商的同构类。对角形式的每个非零d_i约束一个坐标为模(d_i)，无关系坐标给自由因子R。",
        "单位主元对应R/(1)=0，可删去；非零非单位主元按整除顺序保留，得到所列直和。零模和无扭模情形分别允许全部因子为空或仅自由部分。此步骤不声称已经证明唯一性或所有 Jordan 标准形细节。$\\square$"
      ]
    },
    {
      "id": "pid-factorization-crt",
      "topics": [
        "algebra/modules",
        "algebra/ideals"
      ],
      "title": "PID 的唯一因子分解及互素商环分解",
      "statement": "PID 中每个非零非单位元素唯一分解为不可约元乘积（不计顺序与单位）。若 a,b 互素，则 R/(ab)≅R/(a)⊕R/(b)。",
      "dependencies": [
        "def-pid",
        "noetherian-equivalence",
        "maximal-prime-quotient",
        "module-first-isomorphism"
      ],
      "idea": "不可约元生成极大理想；升链条件保证分解终止，Bezout 恒等式给互素商的双射。",
      "steps": [
        "若非零非单位a不能分成有限个不可约元，它必为两个非单位的乘积，且至少一个因子仍不能分解。递归选择该因子产生严格升链(a)⊊(a₁)⊊(a₂)⊊…，违反PID的诺特升链条件。因此不可约分解存在。",
        "若p不可约，任一包含(p)的理想为(d)，所以d整除p，只能d为单位或与p相伴，故(p)极大，因而素。两种不可约分解中，第一个不可约元由素性必须整除另一边某因子，与该因子相伴；约去后归纳，得到唯一性。",
        "对(a,b)=R，映射R→R/(a)⊕R/(b)的核为(a)∩(b)=(ab)：若r=au=bv，且sa+tb=1，则r=rs a+rt b=ab(vs+ut)。满射可用sa+tb=1构造：tb在模a下为1、模b下为0，sa相反，所以给定两类有原像。第一同构定理给所列同构。有限多个两两互素因子的版本逐次应用。$\\square$"
      ]
    },
    {
      "id": "pid-primary-multiplicities",
      "topics": [
        "algebra/modules"
      ],
      "title": "扭模素幂分量的内在重数",
      "statement": "PID R 上有限生成扭模 T 的素幂循环分量重数由模本身唯一决定。对每个不可约元p和j≥1，dim_(R/(p))(p^(j−1)T/p^jT) 等于所有p幂分量中指数至少j者的个数。",
      "dependencies": [
        "pid-module-decomposition",
        "pid-factorization-crt"
      ],
      "idea": "先由互素商分解拆成素幂分量，再计算每个分量在p幂过滤中的一维贡献。",
      "steps": [
        "存在性分解把 T 写为有限个R/(d_i)，因为扭模不可能含非零自由因子。每个d_i作不可约分解，再用互素商同构，得到有限个R/(p^e)的直和。",
        "固定p。对q不与p相伴的q幂分量，Bezout使p的乘法可逆，故p^(j−1)分量与p^j分量相同，对商无贡献。对R/(p^e)，若j>e，两者皆零；若j≤e，该商由p^(j−1)的类生成，映射R→该商的核恰为(p)，所以是R/(p)上的一维空间。",
        "有限直和与取这些子模、商相容，因此维数是所有e≥j分量数。该商由p消灭，自然为域R/(p)上的向量空间。其定义只用T及p的作用，在模同构下保持；所以c_j=上述维数是内在不变量。指数恰为j的分量数为c_j−c_(j+1)，从而所有素幂分量重数唯一。$\\square$"
      ]
    },
    {
      "id": "pid-invariant-factors-unique",
      "topics": [
        "algebra/modules"
      ],
      "title": "PID 上有限生成模的不变因子唯一性",
      "statement": "PID 上 M≅R^s⊕⊕_(i=1)^r R/(d_i)，其中非零非单位d₁|…|d_r，则s、r以及各d_i的相伴类都由M唯一决定。",
      "dependencies": [
        "pid-primary-multiplicities",
        "localization-module-universal"
      ],
      "idea": "自由秩由分式域局部化恢复；扭部的各素幂指数按整除顺序从右向左补齐。",
      "steps": [
        "扭子模T={m:存在非零a使am=0}由M内在确定；在存在性分解中它正是全部有限循环商的和，因为自由部分无非零扭元素。商M/T≅R^s。以所有非零标量局部化得到分式域F上的F^s，其向量空间维数在同构下唯一，所以s唯一。",
        "前一命题恢复T的每个p幂分量指数多重集。若T=0，r=0。否则在整除序列中d₁非单位，选其不可约因子p，则p整除每个d_i；故p幂分量数恰为r。其他素元的分量数至多r，所以r等于各素元分量数的最大值，是内在不变量。",
        "对每个p，将已恢复的正指数升序排列，并在左端补零至长度r。由于d_i|d_(i+1)，这恰是各d_i中p的指数序列。有限个p的这些指数唯一确定d_i的不可约因子分解，PID唯一分解使d_i在相差单位元意义下唯一。域情形没有非单位不可约元，所有有限生成模均自由，已由第一步处理。$\\square$"
      ]
    },
    {
      "id": "polyhedral-cone-finite-generation",
      "topics": [
        "geometry/polyhedra",
        "geometry/convex-sets",
        "discrete/polyhedral-methods"
      ],
      "title": "有限线性不等式锥可有限生成",
      "statement": "若 K={x∈R^n:Ax≤0}，则存在有限向量 v₁,…,v_m，使 K={Σ_jλ_jv_j:λ_j≥0}。零锥可用空生成族表示。",
      "dependencies": [
        "bounded-minkowski-weyl"
      ],
      "idea": "按有限个坐标正交象限分片，在每片用绝对坐标和等于一截出有界截面。",
      "steps": [
        "对每个符号向量 ε∈{−1,1}^n，令 K_ε=K∩{ε_ix_i≥0 对所有i}。该象限内 ℓ_ε(x)=Σ_iε_ix_i=Σ_i|x_i|，所以对非零 x∈K_ε，ℓ_ε(x)>0，且 x/ℓ_ε(x) 属于截面 P_ε={x∈K_ε:ℓ_ε(x)=1}。",
        "每个 P_ε 是有限闭半空间之交，等式可拆为两不等式；并有 |x_i|≤1，所以有界。若非空，由有界 Minkowski–Weyl，它是有限点集 V_ε 的凸包。于是 K_ε 中任意非零 x 是 V_ε 的非负线性组合：把其归一化凸组合乘以 ℓ_ε(x)。零向量由全零系数给出。若截面为空，该片只有零。",
        "全部2^n个象限覆盖 R^n，合并有限个 V_ε 得有限族 V，所有 K 中向量都在 cone(V)。反向 V⊆K，而 K 对非负线性组合封闭，所以 cone(V)⊆K。n=0 时只有零向量，直接成立。$\\square$"
      ]
    },
    {
      "id": "minkowski-weyl-general",
      "topics": [
        "geometry/polyhedra",
        "discrete/polyhedral-methods",
        "applied/linear-programming"
      ],
      "title": "一般 Minkowski–Weyl 定理",
      "statement": "非空 P⊆R^n 是有限闭半空间之交，当且仅当存在非空有限点集 V 与有限方向集 R，使 P=conv(V)+cone(R)。方向集允许为空；点集中的点不必全是顶点。",
      "dependencies": [
        "polyhedral-cone-finite-generation",
        "fourier-motzkin"
      ],
      "idea": "把仿射不等式齐次化为高一维锥，按生成向量首坐标为正或零拆出点与衰退方向。",
      "steps": [
        "设 P={x:Ax≤b} 非空。在 R×R^n 中定义锥 K={(t,x):t≥0，Ax≤tb}，由有限齐次线性不等式描述。有限生成定理给 K=cone{(t_j,x_j)}，每个 t_j≥0。将指标分为 J_+={j:t_j>0} 与 J₀={j:t_j=0}。",
        "因为 P 非空，K 中有首坐标为1的点，所以 J_+ 非空。令 V={x_j/t_j:j∈J_+}、R={x_j:j∈J₀}。对 x∈P，写 (1,x)=Σ_jλ_j(t_j,x_j)，λ_j≥0。比较首坐标得 Σ_(j∈J_+)λ_jt_j=1，所以 x 是 V 的凸组合再加 R 的非负线性组合。",
        "反向，若 x=Σ_(j∈J_+)α_j(x_j/t_j)+Σ_(j∈J₀)β_jx_j，其中 α,β≥0、Σα=1，则 (1,x)=Σ_(j∈J_+)(α_j/t_j)(t_j,x_j)+Σ_(j∈J₀)β_j(0,x_j)∈K。因此 Ax≤b，得到 P=conv(V)+cone(R)。",
        "反方向给定有限 V={v_i}、R={r_j}，以变量 α_i,β_j 写 x=Σ_iα_iv_i+Σ_jβ_jr_j、α_i≥0、β_j≥0、Σ_iα_i=1。它们是有限线性等式与不等式。消去 α,β 的 Fourier–Motzkin 定理给 x 的有限非严格线性不等式描述，正是所需半空间交。若 P 含整条直线，R 可包含相反方向，证明仍适用。$\\square$"
      ]
    },
    {
      "id": "psi-theta-error",
      "topics": [
        "numbertheory/prime-counting",
        "numbertheory/prime-number-theorem"
      ],
      "title": "素数幂对 ψ 与 θ 差值的贡献",
      "statement": "令 θ(x)=Σ_(p≤x)log p，ψ(x)=Σ_(p^k≤x,k≥1)log p。则 0≤ψ(x)−θ(x)≤√x(log x)²/log2，因而 ψ(x)−θ(x)=o(x)。",
      "dependencies": [
        "unique-factorization"
      ],
      "idea": "高次素数幂的底数不超过平方根；每个底数最多贡献对数数量次。",
      "steps": [
        "x≥2 时，差值仅来自 k≥2，因此对应 p≤√x。每个 p 的指数最多 floor(log x/log p)≤log x/log2，每个权重 log p≤log x，底数个数不超过 floor√x。相乘即得所列上界。",
        "除以 x，得到上界 (log x)²/(√x log2)→0。该极限可令 t=log x，并用指数级数 e^(t/2)≥(t/2)^3/3!，故 t²/e^(t/2)≤48/t→0。因此差值为 o(x)。$\\square$"
      ]
    },
    {
      "id": "chebyshev-two-sided-primes",
      "topics": [
        "numbertheory/prime-counting"
      ],
      "title": "切比雪夫素数计数上下界",
      "statement": "存在常数 c,C>0 与 x₀，使所有 x≥x₀ 满足 cx/log x≤π(x)≤Cx/log x；本证明不使用素数定理。",
      "dependencies": [
        "psi-theta-error",
        "chebyshev-theta-upper",
        "unique-factorization",
        "binomial-count"
      ],
      "idea": "中心二项式系数的素因子指数受最小公倍数控制，给 ψ 的线性下界，再转换到 θ 与 π。",
      "steps": [
        "中心二项式系数 binom(2n,n) 是第2n行最大的系数：相邻系数比为 (2n−k)/(k+1)，故在中心前递增、中心后递减。全部2n+1项之和为2^(2n)，所以 binom(2n,n)≥2^(2n)/(2n+1)。",
        "素数 p 在 N! 中的指数为 Σ_(j≥1)floor(N/p^j)，因为每个整数的 p 因子可逐层按被 p^j 整除来计数。因此在 binom(2n,n) 中的指数是 Σ_j[floor(2n/p^j)−2floor(n/p^j)]，每项为0或1，且 p^j>2n 后为0。该指数≤floor(log(2n)/log p)，正是 lcm(1,…,2n) 中 p 的指数。",
        "故 binom(2n,n) 整除该最小公倍数。后者的对数为 ψ(2n)，所以 ψ(2n)≥2nlog2−log(2n+1)。对任意大实数 x 取 n=floor(x/2)，用 ψ 单调及 2n≥x−2，得 ψ(x)≥c₁x，某 c₁>0。再由 ψ−θ=o(x)，充分大 x 时 θ(x)≥c₂x。",
        "由 θ(x)≤π(x)log x 得 π(x)≥c₂x/log x。另一方面分离 p≤√x 与 p>√x：前者至多√x个，后者每个对 θ 贡献至少 (log x)/2，所以 π(x)≤√x+2θ(x)/log x。已证 θ(x)=O(x)，且 √x=O(x/log x)，故得所求上界。$\\square$"
      ]
    },
    {
      "id": "pnt-psi-equivalence",
      "topics": [
        "numbertheory/prime-number-theorem",
        "numbertheory/prime-counting"
      ],
      "title": "素数定理的 ψ、θ、π 三种等价形式",
      "statement": "下列渐近式等价：ψ(x)∼x；θ(x)∼x；π(x)∼x/log x。",
      "dependencies": [
        "psi-theta-error",
        "prime-number-theorem-proof"
      ],
      "idea": "ψ 与 θ 只差次线性素数幂贡献；用一个分离小素数的估计处理 θ 到 π，反向用分部求和。",
      "steps": [
        "ψ−θ=o(x) 直接说明前两式互相推出。θ∼x 推 π∼x/log x 的证明已在素数定理的最后一步展开：θ≤πlog x 给下界，按 p<x^(1−ε) 与其余素数分组给上界，再令 ε↓0。这里仅复用那个代数估计，不需要把素数定理本身作为假设。",
        "反向假设 π(x)∼x/log x。对每个 p≤x，log p=log x−∫_p^x dt/t，对有限个素数求和并交换有限和与积分，得 θ(x)=π(x)log x−∫₂^xπ(t)dt/t。端点处有限跳跃不影响积分。",
        "第一项∼x。对积分，取常数 C 使所有充分大 t 有 π(t)≤Ct/log t。固定小起点到√x的部分用 π(t)≤t 得 O(√x)；√x到x的部分满足 π(t)/t≤2C/log x，积分≤2Cx/log x=o(x)。所以整个积分为o(x)，θ(x)∼x，完成等价。$\\square$"
      ]
    },
    {
      "id": "characteristic-zero-separable",
      "topics": [
        "algebra/field-extensions",
        "numbertheory/number-fields"
      ],
      "title": "特征零域的代数扩张可分",
      "statement": "特征零域 F 上每个不可约多项式都没有重根。因此 F 上每个代数元素都可分。",
      "dependencies": [
        "polynomial-bezout",
        "minimal-polynomial",
        "splitting-field-exists"
      ],
      "idea": "不可约多项式与其次数更低的非零导数互素，Bezout 恒等式排除共同根。",
      "steps": [
        "设首一不可约 f 的次数 d≥1。其形式导数首项系数为 d，特征零使其非零，故 deg f′=d−1。不可约性与次数比较使 gcd(f,f′)=1。多项式 Bezout 给 A f+B f′=1。",
        "若分裂域中 a 是重根，写 f=(x−a)^m h、m≥2，直接求导使 f′(a)=0，同时 f(a)=0，代入 Bezout 恒等式得0=1，矛盾。故所有根互异。对任意代数元素的最小多项式应用此结论，即得可分性。$\\square$"
      ]
    },
    {
      "id": "primitive-element-theorem",
      "topics": [
        "algebra/field-extensions",
        "numbertheory/number-fields"
      ],
      "title": "有限可分扩张的本原元素定理",
      "statement": "每个有限可分域扩张 K/F 都有 θ∈K 使 K=F(θ)。特别地每个数域 K 都是某个代数数 θ 的单扩张 Q(θ)。",
      "dependencies": [
        "minimal-polynomial",
        "polynomial-bezout",
        "splitting-field-exists",
        "finite-subgroup-cyclic",
        "characteristic-zero-separable",
        "basis-extension"
      ],
      "idea": "无限基域时选线性组合以避免有限个根碰撞，用最大公因式恢复两个原生成元；有限域则用乘法群生成元。",
      "steps": [
        "先设 F 无限，K=F(α,β)，且 α、β 都在 F 上可分。取它们最小多项式 f,g 的共同分裂扩张（先分裂 f，再分裂 g），枚举根 α=α₁,…,α_r 与 β=β₁,…,β_s，均互异。",
        "选非零 c∈F，使对所有 i 及 j≠1 有 α_i+cβ_j≠α+cβ。被排除的 c 每对至多一个，共有限个，而 F 无限，故可选。令 θ=α+cβ、E=F(θ)。E[x] 中 g(x) 与 f(θ−cx) 有共同根 β。若 β_j 为另一共同根，则 θ−cβ_j=α_i 对某 i，即 α_i+cβ_j=θ，与选择矛盾。故它们在共同分裂扩张中仅有共同根 β。",
        "g 无重根，因此这两个多项式在分裂扩张中的首一最大公因式为 x−β。另一方面，在 E[x] 用 Euclid 算法所得首一最大公因式 d，在任何扩域后仍为最大公因式：d 整除二者的等式保持，且原域中的 Bezout 恒等式 d=A g+B f(θ−cx) 使扩域中的任意公因式都整除 d。于是 d=x−β∈E[x]，由常数系数得 β∈E，进而 α=θ−cβ∈E。所以 K=E。",
        "一般有限 K/F 可由有限个元素生成：取有限向量空间基，其生成的子域包含整组基，因而包含 K 中所有基的线性组合。可分扩张的每个元素都可分，故逐次对“已合并的单个生成元”和下一个生成元应用二元素结论，有限归纳得到一个 θ。",
        "若 F 有限，K 是有限维 F 向量空间，故 K 也是有限域。其非零元素构成域乘法群的有限子群，已证它循环。取生成元 θ，则 K 的所有非零元素为 θ 的整数幂，都在 F(θ)，零也在其中，故 K=F(θ)。最后数域有限扩张 Q，特征零可分性已证明，套用即得数域结论。$\\square$"
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
      "id": "pi-lambda",
      "topics": [
        "analysis/sigma-algebras",
        "probability/probability-space"
      ],
      "title": "π—λ 定理",
      "statement": "设 P 含全集且对有限交封闭，D 为包含 P 的 λ 系统（含全集、对补和不交可数并封闭），则 σ(P)⊆D。",
      "dependencies": [
        "axiom-measure"
      ],
      "idea": "在最小 λ 系统中先固定交的一边，再交换两边，最终得到有限交封闭。",
      "steps": [
        "令 L 为所有包含 P 的 λ 系统之交。交仍为 λ 系统，所以 L⊆D。任何 λ 系统对嵌套集合差封闭：若 A⊆B 都在其中，则 A 与 B 的补不交，其并的补为 B\\A。",
        "固定 A∈P，令 L_A={B:A∩B∈L}。因 A∈L，嵌套差性质使 L_A 对补封闭，不交并也保持交的分配，所以它是 λ 系统。P 的交封闭使 P⊆L_A，最小性给 L⊆L_A。",
        "再固定任意 B∈L，同样的类 {A:A∩B∈L} 是 λ 系统；上一段保证它含 P，故包含 L。因此 L 对有限交封闭。",
        "有限交与补给有限并；对任意可数并，依次去掉此前有限并将其不交化，再用 λ 闭性。所以 L 是 σ 代数，包含 σ(P)。结合 L⊆D 即得结论。$\\square$"
      ]
    },
    {
      "id": "lotus",
      "topics": [
        "probability/distributions",
        "probability/random-variables"
      ],
      "title": "分布推前与期望换元",
      "statement": "随机变量 X 的分布 μ_X(A)=P(X∈A)。对非负可测 h，E[h(X)]=∫h dμ_X；对绝对可积实或复 h 同样成立。",
      "dependencies": [
        "simple-approximation",
        "monotone-integral",
        "integral-linearity"
      ],
      "idea": "指标函数正是推前测度定义；简单逼近把等式推广到一般可测函数。",
      "steps": [
        "若 h=1_A，等式为 P(X∈A)=μ_X(A)，按定义成立。对非负简单函数，有限线性性给出相同结论。",
        "取 h_n 单调简单逼近 h，则 h_n(X)↑h(X)，两侧分别用单调收敛定理即得非负结论。对可积实函数拆正负部；复函数再拆实虚部，全部积分有限，线性性给所述等式。$\\square$"
      ]
    },
    {
      "id": "tonelli-fubini",
      "topics": [
        "analysis/lebesgue-integral",
        "analysis/integration-limits",
        "probability/distributions"
      ],
      "title": "Tonelli 与 Fubini 定理（给定 σ 有限乘积测度）",
      "statement": "设 μ,ν 为 σ 有限测度，给定乘积 σ 代数上的测度 μ×ν，在可测矩形上取 μ(A)ν(B)。非负可测 f 的两个迭代积分相等且等于乘积积分；若 ∫|f|<∞，对实或复 f 也成立。这里不把乘积测度的存在性纳入该陈述。",
      "dependencies": [
        "pi-lambda",
        "simple-approximation",
        "monotone-integral",
        "integral-linearity"
      ],
      "idea": "先对矩形指标验证，再用 λ 系统推广到所有可测集，最后用简单函数和单调逼近。",
      "steps": [
        "先设两个测度均有限。固定乘积可测集 E，其截面 E_x={y:(x,y)∈E} 可测：具有该截面性质的集合对补、可数并封闭，且含矩形，所以包含乘积 σ 代数。",
        "令 D 为满足 x↦ν(E_x) 可测且其 μ 积分等于 (μ×ν)(E) 的集合。矩形满足该式。全集满足，取补时截面测度变为 ν(Y)-ν(E_x)，有限性与积分线性性保证等式保持；不交可数并时截面测度逐项相加，单调收敛保证等式保持。",
        "故 D 为 λ 系统，矩形含全集并对交封闭，π—λ 定理使 D 包含全部乘积可测集。交换两变量也成立。因此对指标和非负简单函数已有迭代积分相等。",
        "用非负简单函数 f_n↑f，在截面与整体上分别应用单调收敛，就得非负可测版本，同时得到迭代积分函数的可测性。",
        "对 σ 有限情形，取递增有限测度覆盖 X_n、Y_n，对 f·1_(X_n×Y_n) 应用有限情形再用单调收敛，得到一般非负结论。绝对可积时对 |f| 先应用该结论，确保几乎处处截面可积，再分别拆正负部或实虚部；异常零集不影响最终积分。$\\square$"
      ]
    },
    {
      "id": "independent-bounded-products",
      "topics": [
        "probability/conditional-probability",
        "probability/central-limit-theorem"
      ],
      "title": "相互独立变量的有界函数乘积期望",
      "statement": "相互独立 X₁,…,X_n 及有界可测复函数 h_j 满足 E[∏h_j(X_j)]=∏E[h_j(X_j)]。",
      "dependencies": [
        "simple-approximation",
        "monotone-integral",
        "integral-linearity"
      ],
      "idea": "从独立事件的定义开始，把每个因子逐次推广到一般可测函数。",
      "steps": [
        "对 h_j 为指标函数，正是相互独立的定义；对非负简单函数，将有限乘积展开为指标乘积，有限线性性给结论。",
        "对非负有界可测函数，各取单调简单逼近，有限个因子的乘积也单调趋向目标乘积，反复单调收敛得到等式。一般有界实函数拆正负部，复函数拆实虚部，有限次展开和线性性给出结论。$\\square$"
      ]
    },
    {
      "id": "one-dimensional-substitution",
      "topics": [
        "analysis/integration-calculus"
      ],
      "title": "连续积分的一维换元公式",
      "statement": "若 φ 连续、g 为 C¹，且其值域位于 φ 的定义区间，则 ∫_a^b φ(g(t))g′(t)dt=∫_(g(a))^(g(b))φ(u)du。非负函数在单调换元下可通过有限区间极限处理无穷端点。",
      "dependencies": [
        "ftc-first",
        "ftc-second",
        "chain-rule",
        "monotone-integral"
      ],
      "idea": "把被积函数写成某个变上限积分与 g 的复合导数。",
      "steps": [
        "固定起点 c，定义 F(u)=∫_c^u φ(s)ds。基本定理给 F′=φ，链式法则给 (F∘g)′=φ(g)g′。对该连续导数应用第二基本定理，得到左右端差，即所需公式。",
        "对严格递增换元及非负连续函数，取逼近无穷端点的递增有限区间，有限公式逐段成立，单调收敛保证两边极限相等。递减换元反向后同理。这一扩展只在所列非负或已证绝对可积条件下使用。$\\square$"
      ]
    },
    {
      "id": "gaussian-integral",
      "topics": [
        "probability/distributions",
        "analysis/fourier-transform"
      ],
      "title": "Gaussian 积分的值",
      "statement": "∫_R exp(-x²/2)dx=√(2π)，其中 π=4∫₀¹(1+t²)⁻¹dt。",
      "dependencies": [
        "tonelli-fubini",
        "one-dimensional-substitution",
        "matrix-exponential"
      ],
      "idea": "用一次一维换元将象限双积分变成可直接计算的有理函数积分。",
      "steps": [
        "实指数由已证指数级数给出，正性可由 exp(x)=exp(x/2)² 与非零逆推出。对 |x|≥1，有 exp(-x²/2)≤exp(-|x|/2)，后者用原函数直接积分有限，所以积分 G 为正且有限。",
        "由非负 Tonelli，G²/4=∫₀∞∫₀∞exp(-(x²+y²)/2)dydx。固定 x>0，作一维换元 y=tx，dy=xdt；x=0 是测度零，不影响积分。再交换非负积分，得到 ∫₀∞[∫₀∞x exp(-(1+t²)x²/2)dx]dt。",
        "内积分用指数原函数或换元 u=(1+t²)x²/2 得 1/(1+t²)。故 G²/4=∫₀∞(1+t²)⁻¹dt。后一积分在 [1,∞) 作 t=1/s，等于 [0,1] 上同一积分，因此总值为 π/2。",
        "于是 G²=2π，G>0 给 G=√(2π)。本计算使用的乘积测度为通常 Lebesgue 平面测度，矩形取面积乘积，满足前一定理假设；不依赖未展开的二维极坐标换元。$\\square$"
      ]
    },
    {
      "id": "gaussian-characteristic",
      "topics": [
        "probability/distributions",
        "probability/central-limit-theorem",
        "analysis/fourier-transform"
      ],
      "title": "标准正态的矩与特征函数",
      "statement": "密度 g(x)=(2π)⁻¹/²exp(-x²/2) 定义概率分布，其均值为零、方差为一，特征函数为 φ(t)=exp(-t²/2)。",
      "dependencies": [
        "gaussian-integral",
        "dominated-convergence",
        "matrix-exponential",
        "ftc-second",
        "integral-linearity"
      ],
      "idea": "在积分号下求导，利用 g′=-xg 的分部积分得到一个一阶方程。",
      "steps": [
        "Gaussian 积分给归一化。指数衰减支配任意固定次数多项式：由正指数级数 exp(u)≥u^k/k!，可选足够大 k 控制尾部，因此所需矩及边界 x^j g(x) 的极限都存在且尾部趋零。对称性给均值零。",
        "乘积求导与基本定理给有限区间分部积分，再让两端趋无穷，因边界 xg(x)→0，有 ∫x²g(x)dx=-∫xg′(x)dx=∫g(x)dx=1。",
        "复指数满足 |exp(itx)|=1，因为其共轭为 exp(-itx) 且两者乘积一。差商绝对值受 |x| 控制，可由 exp(i(t+h)x)-exp(itx)=∫_t^(t+h)ix exp(isx)ds 验证；E|X| 有限，控制收敛允许对 φ 积分求导。",
        "于是 φ′(t)=i∫x exp(itx)g(x)dx。分部积分及 g′=-xg 给 ∫x exp(itx)g=itφ(t)，所以 φ′=-tφ，φ(0)=1。乘 exp(t²/2) 后导数零，由中值定理逐实虚部得常数一，故 φ=exp(-t²/2)。$\\square$"
      ]
    },
    {
      "id": "characteristic-expansion",
      "topics": [
        "probability/central-limit-theorem",
        "probability/expectation-variance"
      ],
      "title": "有限二阶矩的特征函数局部展开",
      "statement": "若实随机变量 Y 满足 E[Y]=0、E[Y²]=1，则 φ_Y(u)=1-u²/2+o(u²)，u→0。",
      "dependencies": [
        "gaussian-characteristic",
        "dominated-convergence",
        "integral-linearity"
      ],
      "idea": "先对实指数作二阶展开，再用 Y² 作可积控制；不假设三阶矩。",
      "steps": [
        "两次积分指数导数给 exp(iz)=1+iz-z²∫₀¹(1-s)exp(isz)ds。因此 exp(iz)=1+iz-z²/2+z²r(z)，其中 r(z)=∫₀¹(1-s)[1-exp(isz)]ds，且 |r(z)|≤1、r(z)→0。",
        "代入 z=uY，取期望并用均值与方差条件，得 φ_Y(u)=1-u²/2+u²E[Y²r(uY)]。因 |Y²r(uY)|≤Y² 可积、且逐点趋零，控制收敛使最后期望趋零，得到展开。$\\square$"
      ]
    },
    {
      "id": "binomial-exponential-limit",
      "topics": [
        "analysis/limits",
        "probability/central-limit-theorem"
      ],
      "title": "复数二项式极限",
      "statement": "若复数 a_n→a，则 (1+a_n/n)^n→exp(a)。",
      "dependencies": [
        "matrix-exponential"
      ],
      "idea": "二项式展开的每个固定次数系数趋于指数系数，统一尾部由指数级数控制。",
      "steps": [
        "取 B 使所有 |a_n|≤B。展开 (1+a_n/n)^n=Σ_(k=0)^n [n(n-1)…(n-k+1)/n^k]a_n^k/k!。固定 k，方括号趋于一，整个第 k 项趋于 a^k/k!。",
        "每项绝对值≤B^k/k!，这个数值级数已证收敛。给定 ε，先选 K 使指数控制级数在 K 后的尾和小于 ε；有限的前 K 项逐项收敛，再合并两边尾部误差，得到极限为 Σa^k/k!=exp(a)。$\\square$"
      ]
    },
    {
      "id": "gaussian-smoothing",
      "topics": [
        "probability/central-limit-theorem",
        "analysis/fourier-transform"
      ],
      "title": "Gaussian 平滑把特征函数极限转为分布极限",
      "statement": "设 E[V_n]=0、E[V_n²]=1，且 φ_(V_n)(t)→exp(-t²/2) 对每个实 t 成立。则对每个 x，P(V_n≤x)→Φ(x)，Φ 为标准正态分布函数。",
      "dependencies": [
        "gaussian-characteristic",
        "tonelli-fubini",
        "dominated-convergence",
        "chebyshev",
        "independent-bounded-products"
      ],
      "idea": "先固定平滑尺度，用可积 Gaussian 核交换 Fourier 积分，再消去平滑噪声。",
      "steps": [
        "取独立标准正态 Z，或等价地在分布与正态的乘积概率空间中工作。对 ε>0，V_n+εZ 的密度为 p_n,ε(y)=E[g_ε(y-V_n)]，其中 g_ε(u)=ε⁻¹g(u/ε)。该密度表达由非负 Fubini 对事件积分直接验证。",
        "由标准正态特征函数及一维换元，g_ε(u)=(2π)⁻¹∫_R exp(-itu)exp(-ε²t²/2)dt。将此式代入密度，绝对值由可积 exp(-ε²t²/2) 控制，Fubini 给 p_n,ε(y)=(2π)⁻¹∫exp(-ity)φ_(V_n)(t)exp(-ε²t²/2)dt。",
        "|φ|≤1，控制收敛说明这些密度一致趋于 g_s，s=√(1+ε²)：两密度的全域上确界误差被 (2π)⁻¹∫|φ_(V_n)-exp(-t²/2)|exp(-ε²t²/2)dt 控制并趋零。极限核由同一 Gaussian 积分式识别。",
        "为从密度到分布函数，先在有限区间 [-R,x] 积分用一致收敛。另一方面独立性与 EZ=0 给 E[(V_n+εZ)²]=1+ε²，因此 Markov 对平方的尾界统一控制 R 外概率≤(1+ε²)/R²。先 n→∞ 再 R→∞，得平滑分布函数趋于 N(0,1+ε²) 的分布函数。",
        "任取 δ>0，有 P(V_n+εZ≤x-δ)-P(|εZ|>δ)≤P(V_n≤x)≤P(V_n+εZ≤x+δ)+P(|εZ|>δ)。这些包含关系逐样本检查即可。",
        "令 δ=√ε。平方尾界使噪声概率≤ε。先取 n 的上下极限，再让 ε↓0，Gaussian 分布函数的连续性及一维换元使左右界都趋 Φ(x)。所以原分布函数也趋 Φ(x)。本结论利用了统一二阶矩界，不声称已经证明最一般的 Lévy 连续性定理。$\\square$"
      ]
    },
    {
      "id": "iid-central-limit",
      "topics": [
        "probability/central-limit-theorem"
      ],
      "title": "独立同分布有限方差中心极限定理",
      "statement": "若 X_i 独立同分布，均值 μ、方差 0<σ²<∞，则 (Σ_(i=1)^nX_i-nμ)/(σ√n) 依分布收敛于 N(0,1)。",
      "dependencies": [
        "characteristic-expansion",
        "binomial-exponential-limit",
        "gaussian-smoothing",
        "independent-bounded-products",
        "variance-mean"
      ],
      "idea": "局部二阶展开给标准化和的特征函数极限，平滑引理将其变成分布收敛。",
      "steps": [
        "令 Y_i=(X_i-μ)/σ，故均值零、方差一。写 V_n=n⁻¹/²ΣY_i。独立乘积期望给 φ_(V_n)(t)=[φ_Y(t/√n)]^n。",
        "固定 t，二阶展开给 φ_Y(t/√n)=1-t²/(2n)+o(1/n)。因此可写为 1+a_n/n，a_n→-t²/2。复二项式极限给 φ_(V_n)(t)→exp(-t²/2)。",
        "独立方差计算使 E[V_n²]=1。Gaussian 平滑引理的全部条件已满足，于是对每个 x 有 P(V_n≤x)→Φ(x)。标准正态分布函数连续，所以这就是所述依分布收敛。证明不需要三阶矩；无限方差分布不在适用范围内。$\\square$"
      ]
    },
    {
      "id": "complex-inner-cauchy-schwarz",
      "topics": [
        "analysis/hilbert-spaces",
        "applied/quantum-theory"
      ],
      "title": "复内积的 Cauchy–Schwarz 不等式与等号",
      "statement": "复内积采用第一变量共轭线性、第二变量线性约定。任意u,v满足 |⟨u,v⟩|²≤‖u‖²‖v‖²；等号当且仅当二者复线性相关。",
      "dependencies": [
        "axiom-inner",
        "complex-basic-rules"
      ],
      "idea": "从u中减去它在v方向的正交投影。",
      "steps": [
        "若v=0，不等式及等号刻画立即成立。若v≠0，令c=⟨v,u⟩/‖v‖²，w=u−cv，则⟨v,w⟩=0。内积的共轭对称性也给⟨w,v⟩=0，所以‖u‖²=‖w‖²+|c|²‖v‖²。丢掉非负的‖w‖²并乘‖v‖²即得不等式。",
        "等号恰当‖w‖=0，即u=cv。反向线性相关时直接代入有等号。该证明仅依赖内积公理，空间不必完备。$\\square$"
      ]
    },
    {
      "id": "robertson-schrodinger-domain",
      "topics": [
        "applied/quantum-theory",
        "analysis/hilbert-spaces"
      ],
      "title": "带定义域条件的 Robertson–Schrödinger 不等式",
      "statement": "设A,B为复Hilbert空间上线性定义域中的对称算子（即定义域内⟨Aφ,ψ⟩=⟨φ,Aψ⟩，B同理），单位向量ψ同时属于AB与BA的定义域。令a=⟨ψ,Aψ⟩、b=⟨ψ,Bψ⟩，u=(A−a)ψ、v=(B−b)ψ，ΔA=‖u‖、ΔB=‖v‖。则 (ΔAΔB)²≥(Re⟨u,v⟩)²+|⟨ψ,(AB−BA)ψ⟩|²/4，特别ΔAΔB≥|⟨ψ,[A,B]ψ⟩|/2。",
      "dependencies": [
        "complex-inner-cauchy-schwarz"
      ],
      "idea": "中心化后应用复Cauchy–Schwarz，内积的虚部正是对易子的期望。",
      "steps": [
        "对称性给⟨ψ,Aψ⟩=⟨Aψ,ψ⟩，所以a等于其共轭，因而为实数，b同理。展开中心化内积得 z=⟨u,v⟩=⟨Aψ,Bψ⟩−ab。因为Bψ在A的定义域内，对称性给⟨Aψ,Bψ⟩=⟨ψ,ABψ⟩；类似⟨Bψ,Aψ⟩=⟨ψ,BAψ⟩。",
        "故 z−overline(z)=⟨ψ,(AB−BA)ψ⟩=2i Im z。复Cauchy–Schwarz给 ΔA²ΔB²≥|z|²=(Re z)²+(Im z)²，代入前式即得两项不等式。丢掉实部平方并开平方得到Robertson界。",
        "较强的两项不等式取等号恰当u,v复线性相关；较弱的Robertson界还需Re z=0。假定ψ属于两个乘积的定义域，是为了每个对易子表达式都有意义。仅有形式符号[A,B]，不能越过定义域直接套用该公式。$\\square$"
      ]
    },
    {
      "id": "position-momentum-schwartz",
      "topics": [
        "applied/quantum-theory",
        "analysis/time-frequency"
      ],
      "title": "位置—动量不确定性及全部 Schwartz 等号态",
      "statement": "在L²(R)上取ℏ>0，Xψ=xψ、Pψ=−iℏψ′，定义域暂取Schwartz空间。对单位Schwartz函数ψ，位置、动量标准差满足ΔXΔP≥ℏ/2；等号恰为 ψ(x)=C exp(−(x−a)²/(4σ²)+ibx/ℏ)，其中a,b∈R、σ>0，常数C按单位范数归一化。",
      "dependencies": [
        "robertson-schrodinger-domain",
        "fourier-schwartz",
        "ftc-second"
      ],
      "idea": "分部积分验证对称性和对易关系；等号条件化为一阶线性微分方程。",
      "steps": [
        "Schwartz空间在乘x和求导下不变，故两个乘积都有定义。本证明只需对称性及所用ψ的乘积定义域条件，不需先证明这些算子的闭包或自伴性。对任意Schwartz φ,ψ，乘x显然对称；分部积分因端点快速衰减无边界项，给⟨φ,Pψ⟩=⟨Pφ,ψ⟩。直接计算(XP−PX)ψ=iℏψ。",
        "设a=⟨ψ,Xψ⟩、b=⟨ψ,Pψ⟩。则z=⟨(X−a)ψ,(P−b)ψ⟩满足Im z=ℏ/2。故Robertson界给ΔXΔP≥ℏ/2。ΔX>0：否则连续函数(x−a)ψ处处零，ψ在x≠a处为零，连续性使ψ恒零，矛盾；ΔP同理由下界非零。",
        "若取等号，复Cauchy–Schwarz的等号条件给 (P−b)ψ=c(X−a)ψ。于是z=cΔX²，弱界等号给Re c=0，而Im c=ℏ/(2ΔX²)>0。记σ=ΔX，c=iℏ/(2σ²)。改写微分方程为 ψ′=[ib/ℏ−(x−a)/(2σ²)]ψ。乘相应的非零积分因子后导数为零，所以所有解正是所列Gaussian形式，包括常数C。",
        "反向所列函数是Schwartz函数且可归一化：正Gaussian积分有限非零。其模平方关于a对称，故位置均值a；由导数公式及∫(x−a)|ψ|²=0知动量均值b。分部积分 ∫[(x−a)|ψ|²]′=0 给1−σ⁻²∫(x−a)²|ψ|²=0，故ΔX²=σ²。又(P−b)ψ=iℏ(X−a)ψ/(2σ²)，得ΔP²=ℏ²/(4σ²)，达到等号。$\\square$"
      ]
    },
    {
      "id": "finite-dimensional-no-canonical-commutator",
      "topics": [
        "applied/quantum-theory"
      ],
      "title": "有限维矩阵不能满足正则对易关系",
      "statement": "若n≥1且ℏ≠0，不存在复n阶矩阵X,P满足 XP−PX=iℏI。",
      "dependencies": [
        "complex-basic-rules"
      ],
      "idea": "迹对交换乘法不变，而单位矩阵的迹非零。",
      "steps": [
        "按坐标求和，tr(XP)=Σ_iΣ_j X_ij P_ji。交换有限求和次序并重命名指标得它等于Σ_jΣ_i P_ji X_ij=tr(PX)，因为复标量乘法可交换。故任意矩阵对易子的迹为零。",
        "若XP−PX=iℏI，取迹得0=iℏn，与n≥1及ℏ≠0矛盾。这个结果说明正则位置—动量对易关系不能由有限维矩阵精确实现；有限维的其他可观测量仍满足有各自对易子期望的Robertson不等式。$\\square$"
      ]
    },
    {
      "id": "regular-representation-multiplicities",
      "topics": [
        "algebra/group-representations",
        "algebra/characters",
        "algebra/irreducible-representations"
      ],
      "title": "正则表示的分解与维数平方和",
      "statement": "有限群G的复正则表示C[G]包含每种不可约复表示V，其重数恰为dim V。因此不可约表示同构类只有有限个，若维数为d₁,…,d_r，则Σ_i d_i²=|G|。",
      "dependencies": [
        "maschke",
        "finite-character-orthogonality",
        "character-multiplicity"
      ],
      "idea": "正则表示在群元素基上置换，其特征标除单位元外全为零。",
      "steps": [
        "C[G]以e_g（g∈G）为基，左作用L_h e_g=e_(hg)。若h≠1，没有基向量被固定，所以该置换矩阵对角线全零，χ_reg(h)=0；单位元矩阵为I，故χ_reg(1)=|G|。",
        "Maschke定理将正则表示分成有限个不可约直和。对任意不可约V，特征标正交公式给 dim Hom_G(V,C[G])=|G|⁻¹Σ_g overline(χ_V(g))χ_reg(g)=dim V>0。因此每个不可约V都与这个有限分解中的某项同构，否则对所有项的Hom都为零。",
        "同一公式及重数定理给V的出现次数为dim V。对分解两侧取维数，得到|G|=Σ_i(dim V_i)²。这里不预先假定已列出所有不可约表示，正则表示本身证明了有限性和穷尽性。$\\square$"
      ]
    },
    {
      "id": "irreducible-characters-class-basis",
      "topics": [
        "algebra/characters",
        "algebra/irreducible-representations"
      ],
      "title": "不可约特征标构成全部类函数的正交基",
      "statement": "有限群G上的复类函数空间，以⟨f,h⟩=|G|⁻¹Σ_g overline(f(g))h(g)为内积，其不可约特征标构成正交归一基。特别地，不可约表示同构类数等于共轭类数。",
      "dependencies": [
        "regular-representation-multiplicities",
        "finite-character-orthogonality",
        "complex-eigenvalue"
      ],
      "idea": "群代数中心按共轭类求系数，而每个中心元在不可约表示上仅作用为标量；正则表示使该标量列表能区分中心元。",
      "steps": [
        "设共轭类数为k，不可约表示数为r。类函数在每个共轭类上取一个自由复值，故空间维数k；不可约特征标正交归一使它们线性无关，所以r≤k。",
        "考察群代数中心Z(C[G])。若z=Σ_g a_g g，条件hz=zh等价hzh⁻¹=z，所以系数在每个共轭类上相同。各共轭类元素和构成中心一组基，故中心维数k。每个不可约表示ρ_i延伸为群代数的线性表示；中心元z的作用与ρ_i(G)可交换，复Schur结论给ρ_i(z)=c_i(z)I。",
        "映射z↦(c₁(z),…,c_r(z))从中心线性映入C^r。它单射：若全部c_i为零，则z在每个不可约表示上作用零，正则表示分解保证它在整个C[G]左乘作用零。但左乘单位基向量e_1得到z本身，故z=0。于是k≤r。结合两界得r=k，k个正交归一特征标遂为k维类函数空间的基。",
        "因此任意类函数f有有限展开 f=Σ_i⟨χ_i,f⟩χ_i。若f是某有限维表示的特征标，这些系数由前面的重数公式是非负整数；一般类函数的系数没有非负整数限制。$\\square$"
      ]
    },
    {
      "id": "complex-group-algebra-matrix-blocks",
      "topics": [
        "algebra/group-representations",
        "algebra/characters"
      ],
      "title": "有限群复群代数的矩阵分块同构",
      "statement": "取有限群G的全部互不同构不可约复表示ρ_i:G→GL(V_i)。则映射Φ:C[G]→⊕_i End_C(V_i)，Σ_g a_g g↦(Σ_g a_gρ_i(g))_i，为含单位复代数同构。",
      "dependencies": [
        "regular-representation-multiplicities",
        "rank-nullity"
      ],
      "idea": "正则表示证明核为零，维数平方和保证目标空间没有遗漏。",
      "steps": [
        "各ρ_i按线性延伸为群代数表示。由ρ_i(gh)=ρ_i(g)ρ_i(h)，将有限双重求和展开可验证Φ保持乘法，亦保持加法、复数倍和单位，因此是含单位代数同态。",
        "若Φ(a)=0，则a在每个不可约表示上作用零。由正则表示的不可约分解，它在正则表示上左乘为零；作用于单位元素1得a=0，故Φ单射。",
        "源维数为|G|，目标维数为Σ_i(dim V_i)²，正则表示维数平方和使它也等于|G|。有限维秩—零度公式于是给Φ满射，完成同构。此证明针对复有限群代数，不把结论直接推广到特征整除群阶的情形。$\\square$"
      ]
    },
    {
      "id": "rice-function-properties",
      "topics": [
        "foundations/halting-problem",
        "foundations/decidability"
      ],
      "title": "Rice 定理（部分可计算函数语义性质）",
      "statement": "设 P 是部分可计算函数的一类，非空且不是全部此类函数。若成员资格仅依赖所计算的部分函数，则不存在算法对每个程序编号 e 判定其部分函数 φ_e 是否属于 P。",
      "dependencies": [
        "halting-diagonal",
        "axiom-computation"
      ],
      "idea": "用“先等待指定程序停机，再计算固定函数”的程序，把停机与否编码为两个不同语义成员状态。",
      "steps": [
        "令 ⊥ 为处处未定义的部分函数，可由无限循环程序计算。先设 ⊥∉P，由非空性固定一个部分可计算 f∈P 及其程序。给任意待判停机实例 (e,w)，有效生成程序 Q_(e,w)：在输入 x 上先模拟 e(w)；若该模拟停机，再运行 f(x)；否则永远等待。",
        "该程序生成只需把固定代码、e,w 与模拟步骤写入有限程序，故可计算。如果 e(w) 停机，则 Q 在每个 x 上与 f 的定义、未定义及返回值都一致，计算 f∈P；如果 e(w) 不停机，则 Q 计算 ⊥∉P。因此 P 的假想判定器能判定任意停机实例，违反停机不可判定。",
        "若 ⊥∈P，因 P 非全体，固定 f∉P，采用相同程序。此时停机对应不属于 P、不停机对应属于 P。将假想判定器的布尔答案取反，仍可判定停机，矛盾。两种情况穷尽，所以不存在该判定器。性质的语义性必不可少：程序文本长度等语法性质不受本定理约束。$\\square$"
      ]
    },
    {
      "id": "complex-exponential-entire",
      "topics": [
        "analysis/holomorphic-functions"
      ],
      "title": "复指数级数的全纯性、加法公式与非零性",
      "statement": "E(z)=Σ_(n≥0)z^n/n! 为整函数，E′=E、E(0)=1，且 E(z+w)=E(z)E(w)、E(z)≠0。",
      "dependencies": [
        "weierstrass-m",
        "holomorphic-compact-limit",
        "complex-basic-rules",
        "contour-estimate"
      ],
      "idea": "级数及导数级数局部一致收敛；乘积求导使 E(z)E(−z) 恒为一。",
      "steps": [
        "对 |z|≤R，级数受 ΣR^n/n! 控制，后者充分后相邻比 R/(n+1)≤1/2，故收敛。多项式部分和局部一致收敛，紧集极限定理给 E 全纯且可令导数取极限；形式导数级数仍为 E，故 E′=E。常数项给 E(0)=1。",
        "求导 E(z)E(−z)，两项抵消，导数零。沿任意线段用端点公式，乘积恒为其在零点值一，所以 E 从不为零。固定 w，对 E(z+w)/E(z) 求导为零，故恒为在 z=0 的值 E(w)。移项得加法公式。$\\square$"
      ]
    },
    {
      "id": "holomorphic-square-root",
      "topics": [
        "analysis/conformal-maps",
        "analysis/analytic-continuation"
      ],
      "title": "单连通域上非零全纯函数的全纯平方根",
      "statement": "单连通域 Ω 上处处不为零的全纯函数 h 存在全纯 g，满足 g²=h 且 g 处处非零。",
      "dependencies": [
        "cauchy-simply-connected",
        "holomorphic-taylor",
        "complex-exponential-entire",
        "fundamental-algebra"
      ],
      "idea": "对 h′/h 取全局原函数，以指数消去对数导数。",
      "steps": [
        "h′ 全纯，由局部幂级数可反复求导；h 无零点，所以 h′/h 全纯。单连通域的原函数定理给 P′=h′/h。",
        "令 C(z)=h(z)E(−P(z))，链式法则与 E′=E 给 C′=h′E(−P)−hP′E(−P)=0。域内折线路径端点公式使 C 恒为某个 c≠0。",
        "取 c 的非零平方根 b（由代数基本定理），令 g=bE(P/2)。指数加法公式给 g²=cE(P)=h，且指数非零使 g 处处非零。$\\square$"
      ]
    },
    {
      "id": "argument-principle-square",
      "topics": [
        "analysis/holomorphic-functions",
        "analysis/residues"
      ],
      "title": "方形围道的辐角原理（全纯无极点版）",
      "statement": "f 在闭轴平行方形 Q 的邻域全纯，边界无零点，则 (2πi)⁻¹∫∂Q f′/f 等于 Q 内部零点总重数。",
      "dependencies": [
        "holomorphic-taylor",
        "holomorphic-identity",
        "goursat-triangle",
        "cauchy-square-formula"
      ],
      "idea": "挖去各零点的小方形，用 Goursat 抵消其余区域；每个 m 重零点贡献 m。",
      "steps": [
        "f 不恒零，因为边界无零。零点由局部幂级数的最低非零项而孤立。闭 Q 的零点只有有限个：若无限，紧致性给聚点；边界连续且非零排除聚点在边界，内部聚点则由恒等定理迫使 f 恒零，矛盾。",
        "围每个内部零点 a_j 取互不交、闭包含在 Q 内的轴平行小方形 S_j，足够小以使 f(z)=(z−a_j)^(m_j)h_j(z)，h_j 全纯无零。Q 去掉这些小方形内部后，f′/f 在该紧区域附近全纯。用各方形边的全部横、纵坐标画有限网格，剩余矩形再二分成三角形，逐块 Goursat 后公共边抵消，得外边界积分为各内边界积分之和。",
        "在 S_j 上 f′/f=m_j/(z−a_j)+h_j′/h_j。后一项全纯，方形边界积分零；前一项的积分由 Cauchy 核计算等于 2πi m_j。求和并除以 2πi 得总重数。$\\square$"
      ]
    },
    {
      "id": "rouche-square",
      "topics": [
        "analysis/holomorphic-functions",
        "analysis/residues"
      ],
      "title": "Rouché 定理（方形围道版）",
      "statement": "f,g 在闭方形 Q 邻域全纯，若 ∂Q 上 |g−f|<|f|，则 f 与 g 在 Q 内部的零点总重数相同。",
      "dependencies": [
        "argument-principle-square",
        "contour-estimate",
        "intermediate-value"
      ],
      "idea": "在 f 与 g 间作线性同伦，边界无零使零点计数成为连续整数值函数。",
      "steps": [
        "设 f_t=f+t(g−f)，0≤t≤1。边界有 |f_t|≥|f|−|g−f|>0。边界紧且上述差连续，存在共同正下界 δ，不依赖 t。",
        "N(t)=(2πi)⁻¹∫∂Q f_t′/f_t 按辐角原理为非负整数。分子分母对 (t,z) 连续且分母≥δ，故被积函数随 t 一致连续，长度估计使 N 连续。连续整数值函数在区间上恒定：若两个值不同，实介值定理会给非整数中间值。因此 N(0)=N(1)，结论成立。$\\square$"
      ]
    },
    {
      "id": "holomorphic-injective-inverse",
      "topics": [
        "analysis/conformal-maps"
      ],
      "title": "全纯开映射与单叶映射的全纯逆",
      "statement": "域 Ω 上非恒定全纯 f 为开映射。若 f 单射，则 f′ 处处非零，且 f⁻¹:f(Ω)→Ω 全纯，导数为 1/f′(f⁻¹(w))。",
      "dependencies": [
        "maximum-modulus",
        "holomorphic-taylor",
        "holomorphic-identity",
        "rouche-square"
      ],
      "idea": "用最小边界模与倒数最大模证明开性；若零点重数大于一，Rouché 产生多个不同原像。",
      "steps": [
        "固定 a，局部幂级数及恒等定理使 f−f(a) 在 a 附近只有该零点。取充分小闭圆盘 B⊂Ω，中心 a，边界 |f−f(a)| 的最小值 δ>0。若 |w−f(a)|<δ/2 且 w≠f(a)，却没有原像在 B 内，则 1/(f−w) 在闭盘附近全纯。边界模至多 2/δ，中心模却大于 2/δ，违反最大模原理。因此 B 的像包含 f(a) 的邻域。任意开子域中同样可选小盘，故 f 开。",
        "若 f 单射却 f′(a)=0，令 f−f(a) 的零点重数为 m≥2。取充分小闭方形 Q，仅含该零点。Rouché 保证充分近 f(a) 的每个 w，其 f−w 在 Q 内有 m 个连重数的零点。f′ 不恒零，其在闭 Q 内只有有限个零点；取 w 避开这些点的有限个像。于是 f−w 的所有零点皆简单，总共有 m 个不同原像，与单射矛盾。故 f′(a)≠0。",
        "开映射与单射使逆连续。固定 w=f(z)，令 k=f⁻¹(w+h)−z，h→0 时 k→0；当 h≠0，单射使 k≠0，且 h=f(z+k)−f(z)。因此逆差商 k/h 趋于 1/f′(z)，逆全纯且导数如述。$\\square$"
      ]
    },
    {
      "id": "hurwitz-univalent-limit",
      "topics": [
        "analysis/function-sequences",
        "analysis/conformal-maps"
      ],
      "title": "Hurwitz 零点结论与单叶极限",
      "statement": "域 Ω 上全纯 f_n 紧集上一致收敛至 f。若 f_n 都无零，则 f 恒零或处处无零；若 f_n 都单射，则 f 恒定或单射。",
      "dependencies": [
        "holomorphic-compact-limit",
        "rouche-square",
        "holomorphic-identity"
      ],
      "idea": "极限的孤立零点在小方形中有正重数，Rouché 迫使逼近函数也有零点。",
      "steps": [
        "若 f 不恒零却 f(a)=0，取小闭方形 Q⊂Ω，其内只有此零点且边界无零。边界 |f| 有正最小值；一致收敛使充分后 |f_n−f|<|f| 于边界。Rouché 给 f_n 在 Q 内有相同正零点数，违背无零假设。",
        "若 f 不恒定且 f(a)=f(b)、a≠b，考虑 g_n(z)=f_n(z)−f_n(b)，其紧集极限为 g(z)=f(z)−f(b)，不恒零。取围绕 a 的小闭方形 Q，避开 b，且 g 在边界无零、内部零点重数正。单射使 g_n 在 Q 内无零，但 Rouché 又迫使它最终有零点，矛盾。因此 f 单射。$\\square$"
      ]
    },
    {
      "id": "bounded-univalent-seed",
      "topics": [
        "analysis/conformal-maps"
      ],
      "title": "单连通真域存在到圆盘的单叶映射",
      "statement": "非空单连通真域 Ω⊊C 及 a∈Ω，存在单射全纯 f:Ω→D，满足 f(a)=0 且 f′(a)>0。",
      "dependencies": [
        "holomorphic-square-root",
        "holomorphic-injective-inverse",
        "disk-automorphisms"
      ],
      "idea": "对域外点的平方根取一个分支；其像与负像不交，从而倒数映射有统一界。",
      "steps": [
        "取 b∈C\\Ω，对无零函数 z−b 取全纯平方根 g。若 g(z₁)=g(z₂)，平方后得 z₁−b=z₂−b，故 g 单射；同样 g(Ω) 与 −g(Ω) 不交，因为 g(z₁)=−g(z₂) 会迫使 z₁=z₂ 且 g=0，不可能。",
        "g 开映射，故有 ε>0 使 B(g(a),ε)⊂g(Ω)。取负后 B(−g(a),ε)⊂−g(Ω)，与 g(Ω) 不交。因此 |g(z)+g(a)|≥ε，h(z)=ε/[2(g(z)+g(a))] 全纯单射，且 |h(z)|≤1/2<1。",
        "复合圆盘自同构 φ_(h(a)) 使 a 映为零，仍单射全纯。单叶映射导数非零，再乘适当单位复数，使在 a 的导数成为正实数，所求种子映射存在。$\\square$"
      ]
    },
    {
      "id": "riemann-mapping-existence",
      "topics": [
        "analysis/conformal-maps"
      ],
      "title": "黎曼映射定理（存在性、归一化与唯一性）",
      "statement": "非空单连通真域 Ω⊊C 与 a∈Ω，存在唯一双全纯 F:Ω→D 满足 F(a)=0、F′(a)>0。",
      "dependencies": [
        "bounded-univalent-seed",
        "montel-locally-bounded",
        "hurwitz-univalent-limit",
        "holomorphic-compact-limit",
        "holomorphic-square-root",
        "disk-automorphisms",
        "holomorphic-injective-inverse",
        "normalized-riemann-map-unique"
      ],
      "idea": "在归一化单叶圆盘映射中最大化导数；若像漏掉一个点，开平方的构造会严格增大导数。",
      "steps": [
        "令 A 为所有单射全纯 f:Ω→D 且 f(a)=0、f′(a)>0 的集合。种子引理使它非空。取围绕 a 且闭包含于 Ω 的固定方形 Q，Cauchy 一阶估计及 |f|≤1 给 f′(a) 的统一有限上界。令 M=sup_(f∈A)f′(a)，则 0<M<∞，可选 f_n 使 f_n′(a)→M。",
        "由 |f_n|≤1 与 Montel，有子列紧集上一致收敛至 F，全纯极限定理给 F(a)=0、F′(a)=M>0。故 F 非恒定，Hurwitz 单叶极限结论使 F 单射。又 |F|≤1，若内部某点模等于一，最大模原理使 F 恒定，矛盾。因此 F:Ω→D 且 F∈A，导数极值真正取到。",
        "反设 F(Ω) 漏掉 c∈D。因为 F(a)=0，c≠0。令 u=φ_c∘F，u:Ω→D 全纯单射且无零，取全纯平方根 v²=u。由 |u|<1 得 |v|<1；v 相等会使 u 相等，故 v 单射。令 b=v(a)，则 |b|²=|u(a)|=|c|，所以 0<|b|<1。",
        "令 G=φ_b∘v，则 G(a)=0、G 单射且映入 D。利用 2v(a)v′(a)=u′(a)、|φ_c′(0)|=1−|c|² 与 φ_b′(b)=1/(1−|b|²)，计算 |G′(a)|=[(1−|c|²)/(2|b|(1−|b|²))]M=[(1+|b|²)/(2|b|)]M。因 (1−|b|)²>0，括号严格大于一。",
        "将 G 乘单位复数使导数为正实，得到 A 中导数大于 M 的映射，矛盾。因此 F(Ω)=D。单叶映射逆定理使 F⁻¹ 全纯；归一化映射唯一性已另证，故存在唯一所列双全纯映射。$\\square$"
      ]
    },
    {
      "id": "mobius-sieve-identity",
      "topics": [
        "numbertheory/sieve-methods",
        "numbertheory/arithmetic-functions"
      ],
      "title": "Möbius 容斥与有限筛的精确计数",
      "statement": "定义μ(1)=1，含平方素因子的n有μ(n)=0，其余n为k个不同素数之积时μ(n)=(−1)^k。则Σ_(d|n)μ(d)=1_(n=1)。若P为有限素数之积、A为有限整数多重集，A_d为其中被d整除的元素数，则 S(A,P)=#{a∈A:gcd(a,P)=1}=Σ_(d|P)μ(d)A_d。",
      "dependencies": [
        "unique-factorization",
        "binomial-count"
      ],
      "idea": "每个素因子只决定选或不选，因子化的交错和就是有限容斥。",
      "steps": [
        "对n>1，只有平方自由约数贡献，设不同素因子有k个，则约数对应这些素数的子集。和为Σ_(j=0)^k binom(k,j)(−1)^j=(1−1)^k=0。n=1时只有约数1，和为1。",
        "对每个整数a，gcd(a,P)的约数恰为同时整除a和P的正整数，故Σ_(d|P,d|a)μ(d)=1_(gcd(a,P)=1)。a=0时gcd(0,P)=P，这个等式也成立；P=1时任意整数都保留。对有限多重集逐元素相加并交换有限求和得所列公式。",
        "特别A={1,…,N}时A_d=floor(N/d)，所以筛余数精确为Σ_(d|P)μ(d)floor(N/d)。若P含所有不超过z的素数，则每个大于z且不超过N的素数都在筛余数中；小素数另计，不能把筛余数不加限制地直接称为全部素数。$\\square$"
      ]
    },
    {
      "id": "selberg-square-majorant",
      "topics": [
        "numbertheory/sieve-methods"
      ],
      "title": "Selberg 平方权的上筛不等式",
      "statement": "设P为平方自由正整数，D≥1为整数，λ_d为实权，仅对d|P、d≤D可非零且λ₁=1。若A有限且 A_q=X/q+r_q 对所有q|P成立，则 S(A,P)≤XΣ_(d,e)λ_dλ_e/lcm(d,e)+Σ_(d,e)|λ_dλ_e| |r_(lcm(d,e))|。求和只遍历权的支持，X为非负实数。",
      "dependencies": [
        "mobius-sieve-identity"
      ],
      "idea": "未被筛掉的元素使约数权和恰为1，其他元素平方仍非负，因此平方和逐点控制筛指标。",
      "steps": [
        "令w(a)=Σ_(d|P,d≤D,d|a)λ_d。若gcd(a,P)=1，唯一可能约数d为1，故w(a)=λ₁=1；若不互素，筛指标为零而w(a)²≥0。因此1_(gcd(a,P)=1)≤w(a)²。",
        "对A求和并展开平方，得 S≤Σ_(d,e)λ_dλ_e A_(lcm(d,e))，因为同时被d,e整除等价被最小公倍数整除。代入A_q=X/q+r_q，再对误差用三角不等式，得到陈述。有限集合和实权保证没有交换无穷和或符号歧义。",
        "当A={1,…,N}且X=N时，r_q=floor(N/q)−N/q，故|r_q|≤1，误差进一步至多(Σ_d|λ_d|)²。平方权的作用是保留非负上界，同时允许选择权来压低主二次型。$\\square$"
      ]
    },
    {
      "id": "selberg-optimal-finite-weights",
      "topics": [
        "numbertheory/sieve-methods"
      ],
      "title": "Selberg 一维有限上筛的最优权",
      "statement": "设P平方自由，D≥1整数，集合E={d:d|P,d≤D}，φ为Euler函数，G=Σ_(r∈E)μ(r)²/φ(r)>0。对λ₁=1且支持在E的实权，Q(λ)=Σ_(d,e∈E)λ_dλ_e/lcm(d,e)的最小值为1/G。唯一最优权为 λ_d=(d/G)Σ_(r∈E,d|r) μ(r/d)μ(r)/φ(r)。从而区间整数筛满足 S({1,…,N},P)≤N/G+(Σ_(d∈E)|λ_d|)²。",
      "dependencies": [
        "selberg-square-majorant",
        "mobius-sieve-identity",
        "totient-product",
        "cauchy-schwarz"
      ],
      "idea": "把最大公因子展开成Euler函数约数和，使二次型对角化，再对唯一线性约束用Cauchy–Schwarz。",
      "steps": [
        "先证Σ_(r|m)φ(r)=m：按gcd(k,m)将1≤k≤m分类，gcd(k,m)=m/r的k恰有φ(r)个。又1/lcm(d,e)=gcd(d,e)/(de)，所以 Q=Σ_(d,e)(λ_d/d)(λ_e/e)Σ_(r|d,r|e)φ(r)=Σ_(r∈E)φ(r)y_r²，其中 y_r=Σ_(d∈E,r|d)λ_d/d。",
        "E对取约数封闭，有限Möbius反演给 λ_d/d=Σ_(r∈E,d|r)μ(r/d)y_r。直接验证：代入y后，对每个d|s的系数为Σ_(d|r|s)μ(r/d)=1_(s=d)，正是前面约数和恒等式。因而λ与y之间可逆，约束λ₁=1等价Σ_(r∈E)μ(r)y_r=1。",
        "用实Cauchy–Schwarz，1=(Σ μ(r)y_r)²≤[Σ μ(r)²/φ(r)][Σ φ(r)y_r²]=GQ。因r=1项为1，G>0。等号当且仅当sqrt(φ(r))y_r与μ(r)/sqrt(φ(r))成比例，约束决定唯一比例1/G，所以y_r=μ(r)/(φ(r)G)。由反演恢复λ即得所列公式，且Q=1/G。",
        "将该权代入平方上筛，并使用区间计数的|r_q|≤1，得到最终不等式。它是明确可计算的有限上筛定理；这里没有略去权误差，也未声称这一不等式本身已经证明陈景润或有界素数间隙等深层结果。$\\square$"
      ]
    },
    {
      "id": "harmonic-divergence",
      "topics": [
        "analysis/series"
      ],
      "title": "调和级数发散",
      "statement": "Σ_(n≥1)1/n=+∞。",
      "dependencies": [
        "axiom-natural"
      ],
      "idea": "把下标按二的幂分组，每组贡献至少二分之一。",
      "steps": [
        "对 k≥0，区间 2^k<n≤2^(k+1) 含 2^k 个整数，每项 1/n≥1/2^(k+1)，故该组和≥1/2。",
        "因此到下标 2^m 的部分和至少 1+m/2，随 m 无界。部分和递增，所以对任意实数 M 最终超过 M，故趋于正无穷。$\\square$"
      ]
    },
    {
      "id": "leibniz-alternating",
      "topics": [
        "analysis/series"
      ],
      "title": "Leibniz 交错级数判别与余项界",
      "statement": "若 b_n≥0 单调递减且趋零，则 Σ_(n≥1)(−1)^(n−1)b_n 收敛，且第 N 项后余项绝对值≤b_(N+1)，余项符号与下一项相同（或为零）。",
      "dependencies": [
        "monotone-convergence"
      ],
      "idea": "偶部分和递增、奇部分和递减；二者间距趋零。",
      "steps": [
        "记部分和 S_N。S_(2m+2)−S_(2m)=b_(2m+1)−b_(2m+2)≥0；S_(2m+3)−S_(2m+1)=−b_(2m+2)+b_(2m+3)≤0。又 S_(2m)≤S_(2m+1)，所有偶部分和≥0，所有奇部分和≤b₁。",
        "两子列分别单调有界，故收敛；其差 b_(2m+1)→0，使两个极限相同为 S。任意部分和属于奇、偶之一，故整列也趋 S。",
        "固定 N，后续交错尾和按同样分组夹在 0 与第一尾项之间（N 为奇数时方向反转）。取极限得余项 S−S_N 的符号与 (−1)^N 相同，且绝对值≤b_(N+1)。对 b_n=1/n 应用本定理，再用调和级数发散，即得条件收敛的具体例子；该例的非绝对收敛另由调和级数条目证明。$\\square$"
      ]
    },
    {
      "id": "riemann-rearrangement-infinite",
      "topics": [
        "analysis/series"
      ],
      "title": "条件收敛级数可重排趋于无穷或振荡",
      "statement": "每个实条件收敛级数都有部分和趋于 +∞、趋于 −∞ 的重排，也有部分和无上界且无下界的重排。",
      "dependencies": [
        "riemann-rearrangement"
      ],
      "idea": "用不断提高的越界目标构造阶段，确保每个原项最终被取用。",
      "steps": [
        "沿用任意目标重排证明：按原序列举正项 p_i 与负项 −q_j，两侧总量都无限，且 p_i,q_j→0。构造第 m 阶段时，先加入至少一个未用正项，再继续加到部分和大于 m+q_m，然后加入第 m 个负项 −q_m。阶段末部分和因而大于 m。",
        "每阶段只有有限项，因为余下正项和发散。所有负项逐个取到，正项每阶段至少取一个也全部最终取到。第 m 阶段内部在加入负项之前单调上升，且从上一阶段末的大于 m−1 开始；加入最后负项后仍大于 m。因此阶段内部的最小值也趋无穷，整个重排部分和趋于 +∞。对 −a_n 应用同一构造后取负，得到趋于 −∞ 的重排。",
        "振荡构造在第 m 阶段先按序取正项至部分和大于 m，再按序取负项至部分和小于 −m。每段有限并至少含一个对应符号项，两个下标都趋无穷，所以所有非零项最终取到。阶段端点给出任意大的正值及任意小的负值，故部分和无上、下界。零项按原序插入，不影响这些结论。$\\square$"
      ]
    },
    {
      "id": "binary-kraft-prefix",
      "topics": [
        "discrete/source-coding",
        "discrete/entropy"
      ],
      "title": "二进制前缀码的 Kraft 不等式与逆构造",
      "statement": "有限个非负整数码长l₁,…,l_m可由二进制前缀码实现，当且仅当Σ_i2^(−l_i)≤1。允许唯一符号取空码字；若多于一个符号，前缀性质排除空码字。",
      "dependencies": [
        "binomial-count"
      ],
      "idea": "必要性在共同深度数互不相交的树后代；充分性按长度递增分配二进区间。",
      "steps": [
        "前缀码指任何一个码字都不是另一个的前缀。令L=max l_i，每个长度l_i码字在深度L的完全二叉树有2^(L−l_i)个后代；前缀性质使这些后代集合不交，总数不超过2^L。除以2^L得Kraft不等式。空码字对应根，其后代已占满全树，所以只能用于单符号。",
        "反向将长度升序排列。令s_i=Σ_(j<i)2^(−l_j)，由l_j≤l_i可知s_i是2^(−l_i)的整数倍。Kraft条件给s_i+2^(−l_i)≤1，因此区间[s_i,s_i+2^(−l_i))是[0,1)中的二进区间，对应一个长度l_i二进制字。",
        "这些区间首尾相接、互不相交。若某码字为另一码字前缀，对应二进区间将包含另一区间，与不交矛盾。故所构造的字形成前缀码，且长度正好为所给整数。码长0时只有区间[0,1)，同样适用。$\\square$"
      ]
    },
    {
      "id": "shannon-prefix-length-bound",
      "topics": [
        "discrete/source-coding",
        "discrete/entropy"
      ],
      "title": "无损前缀码的熵下界与 Shannon 上界",
      "statement": "有限源分布p的正概率符号，用二进制前缀码编码时平均长度L满足L≥H₂(p)=−Σp_i log₂p_i。并存在前缀码满足H₂(p)≤L<H₂(p)+1。对单符号源可取长度0。",
      "dependencies": [
        "binary-kraft-prefix",
        "gibbs-inequality"
      ],
      "idea": "Kraft质量归一化成概率后，平均码长与熵的差分解为非负散度及Kraft余量。",
      "steps": [
        "设码长l_i，K=Σ2^(−l_i)∈(0,1]，定义q_i=2^(−l_i)/K。直接代入得 D₂(p‖q)=Σp_i log₂(p_i/q_i)=−H₂(p)+L+log₂K，故 L−H₂(p)=D₂(p‖q)−log₂K≥0。Gibbs不等式用自然对数证明后除以ln2即可，且K≤1保证另一项非负。",
        "上界取l_i=ceil(−log₂p_i)。因为2^(−l_i)≤p_i，总和不超过1，Kraft逆构造给前缀码。又 −log₂p_i≤l_i<−log₂p_i+1，乘p_i求和得H₂≤L<H₂+1。单符号p=1时l=0，得到空码字。",
        "前缀码可无歧义串接解码：从首位开始读到一个码字就输出符号，前缀性质排除一个合法码字同时是另一个尚未读完的码字。递归处理余下比特即可恢复整个符号串。此下界针对所列前缀码类；不把未经证明的所有唯一可译码的Kraft–McMillan推广混入陈述。$\\square$"
      ]
    },
    {
      "id": "iid-source-prefix-theorem",
      "topics": [
        "discrete/source-coding",
        "discrete/entropy"
      ],
      "title": "有限独立同分布信源的无损块编码定理",
      "statement": "有限字母表上独立同分布信源熵为H₂(X)。将n个符号作为一块，用二进制前缀码无损编码，其最小平均块码长L_n满足 nH₂(X)≤L_n<nH₂(X)+1，因而L_n/n→H₂(X)。每个满足任意给定ε>0的足够长块码都可达到每符号平均长度小于H₂+ε。",
      "dependencies": [
        "shannon-prefix-length-bound",
        "independent-bounded-products"
      ],
      "idea": "独立性使块熵可加，对整个有限块字母表应用单次前缀码界即可。",
      "steps": [
        "只保留正概率字母。块x₁,…,x_n概率为∏p(x_j)，故−log₂该概率=Σ_j−log₂p(x_j)。对有限块字母表求期望并交换有限和，每一项期望都是H₂(X)，所以块熵恰为nH₂(X)。",
        "任意块前缀码由熵下界得平均长度至少nH₂。对块分布用Shannon长度构造，得到一个平均长度严格小于nH₂+1的前缀码。最优平均长度的最小值确实存在：固定一个候选上界C，若某码平均长度≤C，则对每个正概率块w有l(w)≤C/P(w)，每个长度只有有限整数选择，块数也有限；因此这种候选长度表有限，最小值可在其中取到。",
        "于是L_n介于两界之间，除以n得0≤L_n/n−H₂<1/n。选择n>1/ε即得可达性。这里是零错误、可变长、按平均长度衡量的独立同分布有限信源定理；它不声称每个源串都能被压缩，也不把平均码长与固定长允许误差的编码率混为同一指标。$\\square$"
      ]
    },
    {
      "id": "squeeze-theorem-real",
      "topics": [
        "analysis/limits"
      ],
      "title": "实函数极限的夹逼定理",
      "statement": "设f,g,h在a的某穿孔邻域有定义，且f(x)≤g(x)≤h(x)。若lim_(x→a)f(x)=lim_(x→a)h(x)=L为有限实数，则lim_(x→a)g(x)=L。",
      "dependencies": [
        "axiom-real"
      ],
      "idea": "两侧函数同时进入L的ε邻域时，中间函数被包含在同一邻域。",
      "steps": [
        "任取ε>0。由f趋L，存在δ₁>0，使0<|x−a|<δ₁时L−ε<f(x)；由h趋L，存在δ₂>0，使同样条件下h(x)<L+ε。取δ=min(δ₁,δ₂)。",
        "当0<|x−a|<δ时，L−ε<f(x)≤g(x)≤h(x)<L+ε。因此|g(x)−L|<ε。按ε—δ定义，这正是g在a趋于L。左右极限或单侧极限版本使用相同证明，只需把穿孔邻域换成相应侧邻域。$\\square$"
      ]
    },
    {
      "id": "oscillatory-squeeze-example",
      "topics": [
        "analysis/limits"
      ],
      "title": "振荡因子乘消失因子的极限",
      "statement": "令g(x)=x²sin(1/x)（x≠0），并令g(0)=0，则g在0连续且lim_(x→0)g(x)=0，尽管sin(1/x)在0附近无极限。",
      "dependencies": [
        "squeeze-theorem-real",
        "archimedean"
      ],
      "idea": "正弦有界于单位区间，故乘以x²后绝对值被趋零的函数夹住。",
      "steps": [
        "对所有x≠0，|sin(1/x)|≤1，故−x²≤x²sin(1/x)≤x²。两端均趋零，夹逼定理给g(x)趋零；定义g(0)=0即为连续定义。",
        "说明振荡项本身确无极限：取x_n=(π/2+2πn)⁻¹，则x_n→0而sin(1/x_n)=1；取y_n=(3π/2+2πn)⁻¹，则y_n→0而sin(1/y_n)=−1。若函数极限存在，任意趋零序列上的函数值都须趋同一极限，矛盾。$\\square$"
      ]
    },
    {
      "id": "stationary-covariance-positive",
      "topics": [
        "probability/stationary-processes"
      ],
      "title": "宽平稳协方差的正定性与有限样本周期图",
      "statement": "设实离散时间过程(X_t)_(t∈Z)二阶宽平稳，Y_t=X_t−EX_t，γ(h)=E[Y_(t+h)Y_t]。则γ为实偶函数，|γ(h)|≤γ(0)，且任意复数c_0,…,c_(N−1)有Σ_(j,k)overline(c_j)c_k γ(j−k)≥0。非负函数 f_N(λ)=(2πN)⁻¹E|Σ_(t=0)^(N−1)Y_t e^(−itλ)|² 等于 (2π)⁻¹Σ_(|h|<N)(1−|h|/N)γ(h)e^(−ihλ)。",
      "dependencies": [
        "l2-cauchy-schwarz",
        "integral-linearity"
      ],
      "idea": "展开随机三角多项式的平方，再按时间差分组。",
      "steps": [
        "协方差对称性和宽平稳性给γ(−h)=γ(h)。随机变量的L² Cauchy–Schwarz给 |E[Y_(t+h)Y_t]|≤(E Y_(t+h)² E Y_t²)^(1/2)=γ(0)。所有涉及的乘积可积，故有限求和可交换期望。",
        "令Z=Σc_kY_k，则E|Z|²=Σ_(j,k)overline(c_j)c_kE[Y_jY_k]=Σ_(j,k)overline(c_j)c_kγ(j−k)≥0，得到正定性。展开f_N的平方，每个差h=t−s有N−|h|个有序对，遂得所列加权Fourier和。非负性由原始平方定义直接成立。",
        "把有限Fourier和在[−π,π]积分，非零整数h的指数积分为零，h=0的积分为2π，故∫f_N=γ(0)。这些近似谱函数总质量固定，但未必趋于一个可积密度。$\\square$"
      ]
    },
    {
      "id": "wiener-khinchin-summable",
      "topics": [
        "probability/stationary-processes",
        "analysis/fourier-series"
      ],
      "title": "绝对可和协方差的离散 Wiener–Khinchin 定理",
      "statement": "实二阶宽平稳离散时间过程若Σ_(h∈Z)|γ(h)|<∞，则 f(λ)=(2π)⁻¹Σ_hγ(h)e^(−ihλ) 为连续、非负、实偶的2π周期谱密度，且γ(k)=∫_(−π)^πe^(ikλ)f(λ)dλ、∫f=γ(0)。在连续周期函数中，这个密度由协方差唯一确定。",
      "dependencies": [
        "stationary-covariance-positive",
        "weierstrass-m",
        "fourier-coefficient-uniqueness"
      ],
      "idea": "绝对收敛给连续Fourier和；有限样本周期图一致逼近它，保证非负。",
      "steps": [
        "将双向整数和按0、正负成对排列。每项绝对值被|γ(h)|/(2π)控制，Weierstrass判别法给一致绝对收敛。各项连续周期，故和连续周期；γ实偶使正负h配对为2γ(h)cos(hλ)，所以f实偶。",
        "上一命题的f_N与f之差的上确界至多 (2π)⁻¹[Σ_(|h|≥N)|γ(h)|+Σ_(|h|<N)(|h|/N)|γ(h)|]。第一项趋零。对第二项给ε>0，先选H使|h|>H的绝对值尾和小于ε，再令N趋无穷，使有限个|h|≤H的加权和趋零；尾部权重不超过1。因此f_N一致趋f。因每个f_N≥0，f≥0。",
        "一致收敛允许逐项积分：积分误差不超过区间长度乘一致误差。对整数k，∫e^(ikλ)f=(2π)⁻¹Σ_hγ(h)∫e^(i(k−h)λ)=γ(k)。特别k=0给总质量。若另一连续周期密度具有相同这些积分，差函数的所有Fourier系数均零，Fourier系数唯一性定理给两者处处相等。$\\square$"
      ]
    },
    {
      "id": "stationary-spectrum-atom-counterexample",
      "topics": [
        "probability/stationary-processes"
      ],
      "title": "平稳过程未必具有谱密度",
      "statement": "取均值零、方差1的实随机变量Z，并令每个整数时刻X_t=Z。该过程严平稳且二阶宽平稳，γ(h)=1；不存在非负可积函数f在[−π,π]满足全部γ(k)=∫e^(ikλ)f(λ)dλ。它的谱可由原点单位点质量δ₀表示。",
      "dependencies": [
        "integral-linearity"
      ],
      "idea": "同一个随机变量在所有时刻不变，使谱全部集中在频率零，不能用普通密度表达。",
      "steps": [
        "任意时刻组的联合向量均为(Z,…,Z)，平移时刻不改变其分布，所以严平稳。均值零、协方差E Z²=1，与时间差无关，故宽平稳。原点点质量满足∫e^(ikλ)dδ₀=1，对所有整数k都成立。",
        "若有非负可积密度f，由k=0得∫f=1；由k=1取实部得∫cosλ f=1。相减给∫(1−cosλ)f=0。被积函数非负，零积分迫使它几乎处处为零：否则某个集合{(1−cosλ)f≥1/n}具有正测度，积分为正。",
        "在[−π,π]除λ=0外，1−cosλ严格正，所以f在除单点外几乎处处为零，单点Lebesgue测度零，于是∫f=0，矛盾。故一般平稳过程的谱应允许谱测度；绝对可和协方差是保证连续谱密度的一组充分条件。这里给出反例及其明确谱测度，未以此替代一般谱测度存在定理的证明。$\\square$"
      ]
    },
    {
      "id": "stone-boolean-embedding",
      "topics": [
        "discrete/boolean-algebras"
      ],
      "title": "Stone 表示：布尔代数嵌入幂集代数",
      "statement": "每个布尔代数 B 都同构于某个幂集代数 P(X) 的布尔子代数；并不声称它同构于整个 P(X)。",
      "dependencies": [
        "axiom-zorn",
        "axiom-set",
        "def-boolean-algebra"
      ],
      "idea": "用所有超滤作点；一个元素对应于包含它的超滤集合，超滤足以分离不同元素。",
      "steps": [
        "先设0≠1。B 的真滤子含1、不含0、向上封闭且对有限交封闭。任意非零 a 生成真滤子 {b:a≤b}。包含该滤子的真滤子按包含排序，链的并仍为真滤子，Zorn 给极大真滤子 U。若 b∉U，加入 b 后不能生成真滤子，所以存在 c∈U 满足 c∧b=0；于是 c≤¬b，得到 ¬b∈U。另一方面 b、¬b 不可同时在 U。因此每个 U 对任意 b 恰选 b、¬b 之一。",
        "令 X 为全部极大真滤子组成的集合，Φ(b)={U∈X:b∈U}。滤子公理给 Φ(0)=空集、Φ(1)=X、Φ(b∧c)=Φ(b)∩Φ(c)，二选一性质给 Φ(¬b)=X\\Φ(b)，再由 De Morgan 律得到 Φ(b∨c)=Φ(b)∪Φ(c)。所以像是 P(X) 的布尔子代数，Φ 保持全部布尔运算。",
        "若 b≠c，则至少一个 b∧¬c、c∧¬b 非零，否则 b≤c 且 c≤b。对这个非零元素选包含它的极大真滤子，便有其中一个属于该滤子、另一个不属于。因此 Φ(b)≠Φ(c)，Φ 单射，并按定义满射到它的像，故为与该子代数的同构。若 B 平凡即0=1，取 X为空集，P(X) 只有一个元素，直接得到同构。$\\square$"
      ]
    },
    {
      "id": "dominated-optional-stopping",
      "topics": [
        "probability/stopping-times",
        "probability/martingales"
      ],
      "title": "有可积控制的无界停时可选停止",
      "statement": "离散可积鞅 M_n 与几乎必然有限停时 T，若存在可积 Z≥0 使所有 n 均有 |M_(T∧n)|≤Z，则 M_T 可积且 E[M_T]=E[M₀]。",
      "dependencies": [
        "bounded-optional-stopping",
        "dominated-convergence"
      ],
      "idea": "先在截断停时处使用有限和证明，再以可积控制正当化极限。",
      "steps": [
        "T_n=T∧n 是有界停时：对 k<n，{T_n≤k}={T≤k}，对 k≥n 该事件为全集。因此 E[M_(T_n)]=E[M₀]。",
        "T 几乎必然有限，所以每条正常路径上当 n≥T 时 M_(T_n)=M_T，故逐点最终相等。统一控制 |M_(T_n)|≤Z 也给 |M_T|≤Z 几乎处处。控制收敛定理使 E[M_(T_n)]→E[M_T]，得到等式。该控制条件是充分条件，不声称对任意几乎必然有限停时都能省去它。$\\square$"
      ]
    },
    {
      "id": "fair-gambler-ruin",
      "topics": [
        "probability/stopping-times",
        "probability/martingales"
      ],
      "title": "公平随机游走的破产概率与平均退出时间",
      "statement": "设 S₀=0，S_n=Σ_(k=1)^nξ_k，其中 ξ_k 独立、取±1各概率1/2。正整数 a,b 给停时 T=inf{n:S_n=a 或 S_n=−b}。则 T 几乎必然有限，P(S_T=a)=b/(a+b)，且 E[T]=ab。",
      "dependencies": [
        "bounded-optional-stopping",
        "dominated-optional-stopping",
        "monotone-integral",
        "dominated-convergence",
        "independent-bounded-products",
        "pi-lambda"
      ],
      "idea": "先给退出时间的几何尾界，再对 S_n 与 S_n²−n 使用截断可选停止。",
      "steps": [
        "取自然信息流 F_n=σ(ξ₁,…,ξ_n)。{T≤n} 只依赖前 n 次步长，所以为停时。令 L=a+b。从任一未退出位置出发，接下来 L 次步长全为+1 必在此块内达到 a，其概率为2^(−L)，且该事件与过去独立。独立变量生成的过去与未来 σ 代数独立，可先对有限坐标矩形事件验证乘积公式，再用 π—λ 定理推广到 σ 代数。",
        "因此 P(T>(k+1)L)≤(1−2^(−L))P(T>kL)，归纳得 P(T>kL)≤(1−2^(−L))^k→0。事件 {T>kL} 递减，概率上连续性（或对补集用下连续性）给 P(T=∞)=0。",
        "S_n 可积且适应，ξ_n 对过去独立、均值零，所以对 A∈F_(n−1)，E[(S_n−S_(n−1))1_A]=E[ξ_n]P(A)=0，故为鞅。停止前游走始终在整数区间 (−b,a)，停止后位于端点，因步长为1不可能跳过端点。因此 |S_(T∧n)|≤max(a,b)，满足常数可积控制。可选停止得 E[S_T]=0。",
        "令 q=P(S_T=a)，则 aq−b(1−q)=0，所以 q=b/(a+b)，下端退出概率 a/(a+b)。",
        "再令 N_n=S_n²−n。其增量为 2S_(n−1)ξ_n+(ξ_n²−1)=2S_(n−1)ξ_n，对过去积分为零，所以也是可积鞅。对有界停时 T∧n 应用可选停止，得 E[S_(T∧n)²]=E[T∧n]。",
        "左侧由常数 max(a,b)² 控制且几乎处处趋 S_T²，控制收敛使其趋 E[S_T²]；右侧 T∧n↑T，单调收敛给 E[T]，允许先为无穷。由退出概率计算 E[S_T²]=a²b/(a+b)+b²a/(a+b)=ab，故 E[T]=ab<∞。这一步同时证明了有限期望，不在使用可选停止前预先假定它。$\\square$"
      ]
    },
    {
      "id": "construction-quadratic-towers",
      "topics": [
        "algebra/field-extensions"
      ],
      "title": "尺规作图与实二次扩张塔",
      "statement": "以平面原点、单位点及坐标在实子域F中的给定点为初始数据，每步允许作经过已知点的直线、已知中心及已知长度半径的圆，并取孤立交点。任何可作图点的坐标都在某个F=F₀⊆F₁⊆⋯⊆F_r⊆R中，其中每步次数为1或2。反向，二次塔中的任意实元素都可由F中可用的初始长度经过有限次域运算及正平方根作出。",
      "dependencies": [
        "tower-law",
        "minimal-polynomial"
      ],
      "idea": "直线和圆的交点只需解一次或二次方程；相似三角形与半圆中比例关系实现域运算和平方根。",
      "steps": [
        "设当前全部已知坐标位于实域K。直线由两点确定，其方程系数在K。圆方程为(x−a)²+(y−b)²=r²，中心坐标在K，半径为两已知点距离时r²∈K。两直线孤立交点用线性消元得到K中坐标。直线与圆联立，代入消元后为次数至多2的方程；非垂直直线用y=ux+v，垂直时固定x后解y。实根只需加入某个非负判别式的平方根。",
        "两圆相减消掉x²+y²，得到一条系数在K中的直线，再与其中一圆求交。若相减恒为零，两圆重合，没有孤立交点，按约定不算新增作图点。若相减为非零常数，则无交点。于是每次孤立交点坐标都在K或K(√d)中，其次数至多2。每步只增加有限个坐标，有限次操作给所列塔。",
        "反向说明可作出的运算：线段拼接、取反向给加减；单位线段和已知长度放在两条相交轴上，作平行线由相似三角形给乘法及非零除法。平行线可用两次垂线完成，垂线由两等半径圆的交点连线作出，因此属于允许操作。负数用有向坐标处理。",
        "对d>0，在线上连续放置长1及d的两段，以总段为直径作半圆，在分点作垂线交半圆。连接直径端点与交点，圆周角为直角，两小直角三角形相似给高h²=1·d，故高为√d；d=0直接给零。任何实二次扩张的生成元满足二次最小多项式，求根公式将其写成K元素的域运算及非负判别式平方根。因此沿有限塔逐次实现所有元素。$\\square$"
      ]
    },
    {
      "id": "constructible-degree-obstruction",
      "topics": [
        "algebra/field-extensions"
      ],
      "title": "可作图代数数的次数障碍与倍立方不可能性",
      "statement": "从有理单位数据可尺规作出的实数α必为Q上的代数数，且[Q(α):Q]为2的非负整数次幂。因此单位立方体的倍体积立方体棱长∛2不能尺规作出。次数为2的幂只在这里作为必要条件，不声称其充分。",
      "dependencies": [
        "construction-quadratic-towers",
        "tower-law",
        "unique-factorization"
      ],
      "idea": "二次塔总次数为2的幂，中间简单域次数整除它；倍立方的不可约三次多项式与之冲突。",
      "steps": [
        "若α属于从Q开始的有限二次塔L，塔式公式给[L:Q]=2^k。对Q⊆Q(α)⊆L再次用塔式公式，2^k=[L:Q(α)][Q(α):Q]，故后者为2的幂且有限，α代数。",
        "证明x³−2在Q上不可约。三次多项式若可约，其非平凡因子次数必须有1，因而有有理根。设既约分数u/v为根，v>0，则u³=2v³。若素数p整除v，等式迫使p整除u，与互素矛盾，因此v=1。整数u³=2不可能，因为正整数立方在1及8之间没有值2，非正整数亦不可能。所以无有理根，不可约，∛2次数为3。",
        "单位立方体体积1，棱长ℓ的立方体体积ℓ³，因此体积2要求正ℓ=∛2。3不是2的幂，违反必要次数条件。这里证明的是给定单位长度、仅直尺圆规且有限步的经典倍立方不可能性。$\\square$"
      ]
    },
    {
      "id": "sixty-degree-nontrisectable",
      "topics": [
        "algebra/field-extensions"
      ],
      "title": "六十度角不可一般尺规三等分",
      "statement": "六十度角本身可尺规作出，但将它三等分得到二十度角不可能仅用无刻度直尺与圆规完成。因此不存在三等分任意已知角的通用尺规方法。",
      "dependencies": [
        "construction-quadratic-towers",
        "constructible-degree-obstruction",
        "unique-factorization"
      ],
      "idea": "三倍角公式迫使二十度余弦生成三次扩张，与二次塔次数障碍矛盾。",
      "steps": [
        "单位线段两端作等半径圆，交点与两端形成等边三角形，所以六十度角可作。若能三等分它，可作出二十度射线，与单位圆相交后向水平轴作垂线，得到坐标c=cos20°。故c应为可作图实数。",
        "复数乘法或平面旋转复合给(cosθ+i sinθ)³=cos3θ+i sin3θ。取实部并用sin²θ=1−cos²θ得cos3θ=4cos³θ−3cosθ。令y=2c，因为cos60°=1/2，得到y³−3y−1=0。",
        "该整系数首一三次多项式的有理根必为整数且整除常数项：若u/v为既约根，乘v³后先得v整除u³，互素使v=1；再从u³−3u=1得u整除1。因此只能是±1，代入分别为−3及1，均非零。三次无有理根所以不可约，y的次数为3。若c可作，域运算使y=2c可作，与次数障碍矛盾。",
        "这不排除某些特定角可三等分，也不涉及有刻度尺、折纸等不同操作。要由次数障碍进一步证明化圆为方，还需独立证明π超越；本证明不把该深层结论当作已完成。$\\square$"
      ]
    },
    {
      "id": "kolmogorov-maximal",
      "topics": [
        "probability/law-large-numbers",
        "probability/almost-sure-convergence"
      ],
      "title": "Kolmogorov 最大不等式",
      "statement": "独立均值零且方差有限的实变量 Z₁,…,Z_n，部分和 S_k=Σ_(j≤k)Z_j 满足 P(max_(k≤n)|S_k|≥t)≤Σ_(j≤n)Var(Z_j)/t²，t>0。",
      "dependencies": [
        "independent-products",
        "integral-linearity"
      ],
      "idea": "按首次越过阈值的时刻把事件拆开；未来增量与该时刻之前的信息独立，交叉项期望为零。",
      "steps": [
        "令 A_k={|S_j|<t 对 j<k，|S_k|≥t}，它们互不交，其并为最大值越阈事件。A_k 只依赖前 k 项，未来增量 R=S_n−S_k 与这些变量独立且均值零。",
        "因此 E[S_n²1_(A_k)]=E[S_k²1_(A_k)]+E[R²1_(A_k)]≥t²P(A_k)，交叉项 E[S_kR1_(A_k)] 为零。该乘积可积，由 Cauchy–Schwarz 或有限二阶矩控制；独立变量生成的信息独立可由矩形事件及 π—λ 推广得到。",
        "对互不交 A_k 求和得 E[S_n²]≥t²ΣP(A_k)。独立中心化变量的方差相加给 E[S_n²]=ΣVar(Z_j)，除以 t² 即得结论。$\\square$"
      ]
    },
    {
      "id": "independent-series-convergence",
      "topics": [
        "probability/almost-sure-convergence",
        "probability/law-large-numbers"
      ],
      "title": "方差可求和的独立中心化级数几乎必然收敛",
      "statement": "独立实变量 Z_n 满足 E[Z_n]=0、ΣVar(Z_n)<∞，则 ΣZ_n 几乎必然收敛。",
      "dependencies": [
        "kolmogorov-maximal",
        "borel-cantelli-first",
        "cauchy-completeness",
        "measure-continuity"
      ],
      "idea": "选择方差尾和足够快下降的起点，再用最大不等式同时控制整个尾部。",
      "steps": [
        "选严格递增 N_k，使 Σ_(j≥N_k)Var(Z_j)≤2^(−3k)。对任意 m≥N_k，最大不等式给 P(max_(N_k≤l≤m)|Σ_(j=N_k)^lZ_j|≥2^(−k))≤2^(−k)。",
        "令 m→∞，这些最大值事件递增，概率下连续性给整个无限尾部的越界概率仍≤2^(−k)。概率上界可求和，Borel–Cantelli 使几乎每条路径上，对充分大 k，所有 l≥N_k 均有 |Σ_(j=N_k)^lZ_j|<2^(−k)。",
        "任意 m≥n≥N_k 的尾和由两条从 N_k 开始的和相减，绝对值≤2·2^(−k)。故在这些路径上级数部分和为实柯西列，按实数完备性收敛。$\\square$"
      ]
    },
    {
      "id": "kronecker-lemma-integers",
      "topics": [
        "probability/law-large-numbers",
        "analysis/series"
      ],
      "title": "Kronecker 引理（整数权重）",
      "statement": "若实级数 Σ_(k≥1)a_k/k 收敛，则 n⁻¹Σ_(k≤n)a_k→0。",
      "dependencies": [
        "cauchy-completeness"
      ],
      "idea": "把加权级数部分和作离散分部求和，余项成为收敛数列与其 Cesàro 平均之差。",
      "steps": [
        "令 s_n=Σ_(k≤n)a_k/k、s₀=0，则 a_k=k(s_k−s_(k−1))。有限求和整理得 Σ_(k≤n)a_k=n s_n−Σ_(k<n)s_k。",
        "设 s_n→s。给 ε>0，充分后 |s_k−s|<ε，前面固定有限项除以 n 趋零，所以 n⁻¹Σ_(k<n)s_k→s：尾部误差平均≤ε，且 (n−1)s/n→s。因此上式除以 n 后的极限为 s−s=0。$\\square$"
      ]
    },
    {
      "id": "iid-integrable-strong-law",
      "topics": [
        "probability/law-large-numbers",
        "probability/almost-sure-convergence"
      ],
      "title": "独立同分布可积变量的强大数定律",
      "statement": "若实变量 X_n 独立同分布，E|X₁|<∞，μ=E[X₁]，则 n⁻¹Σ_(k≤n)X_k→μ 几乎必然；不要求有限方差。",
      "dependencies": [
        "independent-series-convergence",
        "kronecker-lemma-integers",
        "borel-cantelli-first",
        "dominated-convergence",
        "monotone-integral"
      ],
      "idea": "按下标截断尾部，以可积性保证截断只改变有限项，并使截断中心化变量的加权方差可求和。",
      "steps": [
        "令 Y_n=X_n1_{|X_n|≤n}，Z=|X₁|。逐点 Σ_(n≥1)1_{Z>n}≤Z，非负单调收敛给 ΣP(X_n≠Y_n)=ΣP(Z>n)≤EZ<∞。Borel–Cantelli 使几乎必然只有有限个 X_n≠Y_n，因此二者样本和之差除以 n 趋零。",
        "各 Y_n 仍独立且二阶矩有限。估计 ΣVar(Y_n)/n²≤ΣE[Z²1_{Z≤n}]/n²=E[Z²Σ_(n≥max(1,ceil Z))n⁻²]。对 Z≥1，令 m=ceil Z，尾和≤1/m²+∫_m^∞t⁻²dt≤2/m≤2/Z；对 0≤Z<1，尾和≤2，且 Z²≤Z。因此整个期望≤2EZ<∞。交换非负和与期望由单调收敛保证。",
        "对独立中心化变量 (Y_n−EY_n)/n 应用方差可求和级数收敛定理，得 Σ(Y_n−EY_n)/n 几乎必然收敛。Kronecker 引理遂给 n⁻¹Σ_(k≤n)(Y_k−EY_k)→0 几乎必然。",
        "由于 X_n 同分布，EY_n=E[X₁1_{|X₁|≤n}]，由可积控制 |X₁| 及控制收敛得 EY_n→μ。收敛数列的 Cesàro 平均也趋 μ，故 n⁻¹ΣY_k→μ。与第一步有限项差异合并，得到 n⁻¹ΣX_k→μ，完成只用一阶绝对矩的强大数定律。$\\square$"
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
      "statement": "有限群 G 在有限维 F-向量空间上的表示，若特征 F 不整除 |G|，则每个不变子空间有不变直和补，表示可分解为不可约表示的有限直和。",
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
    },
    {
      "id": "orbit-coset-class-equation",
      "topics": [
        "algebra/orbits-stabilizers",
        "algebra/group-actions"
      ],
      "title": "任意群的轨道陪集对应及有限群类方程",
      "statement": "任意群 G 作用于 X 时，G/G_x 的左陪集集合与轨道 Gx 通过 gG_x↦gx 双射。有限群的共轭作用给类方程 |G|=|Z(G)|+Σ_i[G:C_G(x_i)]，其中每个非中心共轭类各取一个代表 x_i。",
      "dependencies": [
        "subgroup-test",
        "axiom-group"
      ],
      "idea": "先直接验证陪集到轨道的双射，再对共轭作用分割整个群。",
      "steps": [
        "稳定子 G_x 是子群：单位元固定 x，两个固定 x 的元素 g,h 满足 gh⁻¹x=x。若 gG_x=hG_x，则 h⁻¹g∈G_x，所以 gx=hx；反向若 gx=hx，同样得到 h⁻¹g∈G_x，从而两陪集相同。这证明映射良定义且单射，满射由轨道定义得到，完全不需 G 有限。",
        "对共轭作用 g·x=gxg⁻¹，稳定子恰为中心化子 C_G(x)。轨道为共轭类，其基数等于该中心化子的指数。单元素共轭类恰为中心元素。有限 G 被全部共轭类分割，把单元素类合并为 |Z(G)|，其余各类按轨道公式计数即得类方程。$\\square$"
      ]
    },
    {
      "id": "cauchy-finite-group",
      "topics": [
        "algebra/finite-groups"
      ],
      "title": "Cauchy 有限群定理",
      "statement": "若素数 p 整除有限群 G 的阶，则 G 有阶为 p 的元素。",
      "dependencies": [
        "orbit-stabilizer",
        "lagrange"
      ],
      "idea": "循环移动乘积为一的 p 元组，除固定点外每个轨道都有 p 个元素。",
      "steps": [
        "令 X={(g₁,…,g_p):g₁…g_p=1}。前 p−1 项可任取，末项唯一，故 |X|=|G|^(p−1)，被 p 整除。循环移动元组仍在 X 中，因为 g₂…g_pg₁=g₁⁻¹(g₁…g_p)g₁=1。",
        "阶 p 循环群的作用轨道大小由轨道—稳定子只能为1或p，故固定元组数与 |X| 模 p 同余，为0。固定元组恰为 (g,…,g)，其中 g^p=1。单位元给一个固定点，固定点总数是 p 的正倍数，所以至少还有一个非单位解 g。其阶整除 p，且非1，故为p。$\\square$"
      ]
    },
    {
      "id": "p-group-fixed-points",
      "topics": [
        "algebra/group-actions",
        "algebra/finite-groups"
      ],
      "title": "p 群作用的固定点同余与非平凡中心",
      "statement": "有限 p 群 P 作用在有限集 X 上时，|X|≡|X^P| (mod p)。非平凡有限 p 群的中心非平凡；阶 p^a 的群对每个 0≤k≤a 均有阶 p^k 的子群。",
      "dependencies": [
        "orbit-stabilizer",
        "cauchy-finite-group",
        "first-isomorphism"
      ],
      "idea": "非单点轨道大小都被 p 整除；对共轭作用应用后，递归取中心的阶 p 子群作商。",
      "steps": [
        "每个轨道大小为 P 中稳定子的指数，故是 p 的幂。非单点轨道大小均被 p 整除，单点轨道恰为被 P 全体固定的点，得到同余。",
        "对 P 在自身上的共轭作用，固定点恰为中心 Z(P)。|P|≡0 (mod p)，所以 |Z(P)| 也被 p 整除；它至少含单位元，故至少含 p 个元素。Cauchy 给中心中阶 p 的子群 C，中心子群正规。",
        "按 a 归纳证明各阶子群存在。k=0 取单位子群。对 k≥1，商 P/C 阶 p^(a−1)，归纳假设给其中阶 p^(k−1) 的子群 H。其商映射原像 K 为子群；它由 |H| 个大小 p 的 C 陪集组成，故 |K|=p^k。起点 a=0 只有平凡群，归纳完成。$\\square$"
      ]
    },
    {
      "id": "sylow-existence",
      "topics": [
        "algebra/finite-groups"
      ],
      "title": "Sylow 第一存在定理",
      "statement": "若 |G|=p^a m、p 为素数且 p∤m，则有限群 G 有阶 p^a 的子群；从而每个 0≤k≤a 都有阶 p^k 的子群。",
      "dependencies": [
        "orbit-stabilizer",
        "p-group-fixed-points",
        "binomial-count",
        "euclid-lemma"
      ],
      "idea": "让 G 左乘作用在大小为 p^a 的子集上；其中一个轨道大小不被 p 整除，其稳定子恰有阶 p^a。",
      "steps": [
        "令 X 为 G 的所有 p^a 元子集，|X|=binom(p^a m,p^a)。证明该数模 p 等于 m：在 F_p[x] 中，binom(p,j) 对 0<j<p 都被 p 整除（p! 含一个因子 p，j!、(p−j)! 不含），所以 (1+x)^p=1+x^p。重复 a 次得 (1+x)^(p^a m)=(1+x^(p^a))^m，比较 x^(p^a) 系数得到所求同余，故 |X| 不被 p 整除。",
        "G 左乘作用于 X。如果所有轨道大小都被 p 整除，则总数也被 p 整除，矛盾。故某 S∈X 的稳定子 H 满足其轨道大小 [G:H] 不被 p 整除，因此 |H| 含有 p^a 因子。",
        "另一方面，H 在 S 上的左乘作用自由：h s=s 迫使 h=1。因此每个 H 轨道大小为 |H|，这些轨道分割 S，所以 |H| 整除 |S|=p^a。与前步合并只能 |H|=p^a。最后在此 p 群 H 内使用已证各阶子群存在性，得到 p^k 版本。$\\square$"
      ]
    },
    {
      "id": "sylow-conjugacy-count",
      "topics": [
        "algebra/finite-groups"
      ],
      "title": "Sylow 共轭定理与个数约束",
      "statement": "若 |G|=p^a m、p∤m，所有阶 p^a 子群称 Sylow p 子群。每个 p 子群包含于某个 Sylow p 子群；全部 Sylow p 子群两两共轭，其个数 n_p 整除 m 且 n_p≡1 (mod p)。n_p=1 当且仅当该 Sylow 子群正规。",
      "dependencies": [
        "sylow-existence",
        "p-group-fixed-points",
        "orbit-stabilizer",
        "lagrange"
      ],
      "idea": "先让 p 子群作用于 Sylow 陪集，再让固定 Sylow 子群共轭作用于全部 Sylow 子群。",
      "steps": [
        "固定 Sylow 子群 P，令任意 p 子群 Q 左乘作用在 G/P 上。该集合大小 m 不被 p 整除，固定点同余保证至少一个固定陪集 gP。Q 固定 gP 意味着 g⁻¹Qg⊆P，故 Q⊆gPg⁻¹。如果 Q 本身为 Sylow，两边阶相等，包含变成相等，从而共轭性成立。",
        "G 共轭作用在 Sylow 集合上可迁，其稳定子为 N_G(P)={g:gPg⁻¹=P}。它是子群并包含 P，直接由共轭复合、取逆验证。因此 n_p=[G:N_G(P)]；又 [G:P]=[G:N_G(P)][N_G(P):P]=m，故 n_p 整除 m。",
        "让 P 共轭作用于全部 Sylow 子群。若 Q 被 P 固定，则 P 正规化 Q，因此 PQ 是子群：利用 pQp⁻¹=Q 可将乘积和逆重新写为 PQ 的形式。乘积集合的大小为 |P||Q|/|P∩Q|，因为映射 P×Q→PQ 的每个纤维由公共交元素一一参数化。因此 |PQ| 是 p 幂，且被 |G| 整除，至多 p^a。它包含已有阶 p^a 的 P 与 Q，只能 P=Q。",
        "所以该作用唯一固定点是 P 本身，固定点同余给 n_p≡1 (mod p)。最后，唯一 Sylow 必被每个共轭保持，故正规；反向正规 Sylow 的所有共轭都等于自身，而全部 Sylow 已证共轭，所以只有一个。$\\square$"
      ]
    },
    {
      "id": "order-fifteen-cyclic",
      "topics": [
        "algebra/finite-groups"
      ],
      "title": "十五阶群必为循环群",
      "statement": "每个阶15的群都同构于 C₁₅。",
      "dependencies": [
        "sylow-conjugacy-count",
        "lagrange"
      ],
      "idea": "两个 Sylow 个数约束都迫使唯一；互素阶正规子群彼此交换，生成元乘积的阶为15。",
      "steps": [
        "n₅ 整除3且同余1模5，只能1；n₃ 整除5且同余1模3，也只能1。因此阶5与阶3子群 P,Q 都正规。素数阶群中任意非单位元按 Lagrange 具有全阶，故可取生成元 x,y，分别阶5、3。",
        "对 p∈P、q∈Q，交换子 pqp⁻¹q⁻¹ 同时属于 P 与 Q（分别利用两子群正规）。交子群的阶整除5和3，故交为{1}，交换子只能为1，P,Q 逐元素交换。",
        "若 (xy)^n=1，则 x^n=y^(−n) 属于 P∩Q，只能为1，因此5和3都整除n，15整除n。反向 (xy)^15=1，故 xy 阶15，生成整个 G。$\\square$"
      ]
    },
    {
      "id": "alternating-four-no-six",
      "topics": [
        "algebra/finite-groups"
      ],
      "title": "A₄ 没有六阶子群",
      "statement": "交错群 A₄ 的阶为12，但它没有阶6的子群，说明 Lagrange 阶整除条件不是一般充分条件。",
      "dependencies": [
        "lagrange",
        "first-isomorphism"
      ],
      "idea": "指数二子群必正规，商群阶二却不能容纳三循环的非平凡像，而 A₄ 由三循环生成。",
      "steps": [
        "四个字母的偶置换为：单位元、8个三循环（四种选三字母，每种两方向）、3个双对换。因此 |A₄|=12。它由三循环生成：三循环自身已在生成集中，且例如 (12)(34)=(132)(134)（从右向左作用），其他双对换由重新命名字母得到。",
        "若 H 阶6，则指数二。对 g∉H，左右陪集 gH、Hg 都是 H 的补集，因而相等；g∈H 时亦相等。所以 H 正规，商群 A₄/H 阶二。",
        "商映射下每个三循环 c 的像满足 image(c)^3=1，且阶整除商群阶二，因此该像阶整除 gcd(2,3)=1，必为单位。全部生成元都映为单位，故整个 A₄ 映为单位，与商群阶二矛盾。因此不存在 H。$\\square$"
      ]
    },
    {
      "id": "finite-ramsey-two-colors",
      "topics": [
        "discrete/extremal-combinatorics"
      ],
      "title": "有限双色 Ramsey 定理与二项式上界",
      "statement": "对正整数 s,t，存在 R(s,t)，使任何至少 R(s,t) 顶点的简单图含 s 顶点完全子图或 t 顶点独立集。且 R(s,t)≤binom(s+t−2,s−1)。",
      "dependencies": [
        "binomial-count",
        "axiom-natural"
      ],
      "idea": "对一个顶点的邻点与非邻点分别归纳；Pascal 恒等式解出递推上界。",
      "steps": [
        "s=1 或 t=1 时任意单顶点图即满足结论，上界为1。对 s,t≥2，设 A=binom(s+t−3,s−2)、B=binom(s+t−3,s−1)，归纳假设已对 (s−1,t) 与 (s,t−1) 成立。取 A+B 个顶点的任意图及一点 v，其余 A+B−1 点分成 v 的邻点与非邻点。",
        "若邻点至少 A 个，在其中应用 (s−1,t) 结论：若有 t 独立点已经完成；若有 s−1 完全子图，添入 v 得 s 完全子图。若邻点不足 A，则非邻点至少 B 个，在其中应用 (s,t−1) 结论：若有 s 完全子图已经完成；若有 t−1 独立点，添入 v 得 t 独立点。",
        "所以 A+B 个顶点足够；Pascal 恒等式给 A+B=binom(s+t−2,s−1)，完成对 s+t 的归纳。更多顶点时取这一数量的诱导子图即可。满足性质的正整数集合非空，良序性保证最小值 R(s,t) 存在。$\\square$"
      ]
    },
    {
      "id": "turan-general",
      "topics": [
        "discrete/extremal-combinatorics"
      ],
      "title": "Turán 定理：禁止完全子图的精确极值",
      "statement": "对整数 r≥1、n≥0，不含 K_(r+1) 的 n 顶点简单图至多有 t_r(n) 条边，其中 t_r(n) 是将 n 个顶点尽量均分为 r 部的完全多部图边数。若 n=qr+s、0≤s<r，则 t_r(n)=[n²−s(q+1)²−(r−s)q²]/2。",
      "dependencies": [
        "handshake",
        "axiom-finite"
      ],
      "idea": "在所有极值图中再最大化度数平方和，克隆非相邻顶点迫使它们邻域相同。",
      "steps": [
        "固定 n,r，有限个标号图中选不含 K_(r+1) 且边数最大的图 G，再在这些图中选 Σ_vdeg(v)² 最大者。对非相邻 u,v，把 u 的邻域改成 v 的邻域称为将 u 克隆为 v。该操作不产生被禁团：新团若含 u，就不含 v，且把 u 换成 v 得到原图同样大的团；若不含 u，原图中已存在。",
        "若 deg(u)<deg(v)，将 u 克隆为 v 会增加边数，违背极值性。反向同理，所以任意非相邻 u,v 都有相同度数 d。若它们的邻域不同，令 A=N(u)\\N(v)、B=N(v)\\N(u)，两者大小相同且至少一个非空。",
        "克隆 u 为 v 后，A 中各点度减1，B 中各点度加1，u 的度仍为 d，其余点度不变。因此度平方和变化为 D₁=Σ_(w∈A)(−2deg(w)+1)+Σ_(w∈B)(2deg(w)+1)。反向克隆 v 为 u 的变化为 D₂=Σ_(w∈A)(2deg(w)+1)+Σ_(w∈B)(−2deg(w)+1)。二者相加为2(|A|+|B|)>0，至少一个为正，违背第二重极值性。因此非相邻顶点必须有相同邻域。",
        "定义 u~v 当且仅当 u=v 或 u,v 非相邻。对不同的 u,v,w，若 u~v、v~w，则 N(u)=N(v)=N(w)，若 u 与 w 相邻，w∈N(u)=N(v)，与 v,w 非相邻矛盾。因此关系传递，给等价类分割。每类内部无边，不同类间全部相邻，G 是完全多部图。若有超过 r 个非空部，各选一点即有 K_(r+1)，所以部数≤r。",
        "允许补空部至 r 部，部大小 n₁,…,n_r 的边数为 Σ_(i<j)n_i n_j=(n²−Σ_i n_i²)/2。若 n_i≥n_j+2，将一个顶点从 i 部移到 j 部，平方和减少2(n_i−n_j−1)>0，所以边数增加，仍是不含 K_(r+1) 的完全 r 部图，与极值性矛盾。故极值部大小只能相差至多1，恰为 s 个 q+1 与 r−s 个 q。",
        "代入即得 t_r(n) 公式。这样的平衡完全 r 部图确实不存在 K_(r+1)，并达到该边数，所以这是精确最大值。n=0 或 r=1 的退化情形也由同一公式给出零边数。该证明构造一个达到上界的极值结构，不在此另行断言全部等号图的分类。$\\square$"
      ]
    },
    {
      "id": "ultrafilter-extension",
      "topics": [
        "foundations/compactness",
        "foundations/zfc-axioms"
      ],
      "title": "有限交性质族可扩成超滤",
      "statement": "I 上集合族 C 的任意有限交非空，则存在真超滤 U 包含 C。且对任意 A⊆I，A∈U 与 I\\A∈U 恰有一个成立。",
      "dependencies": [
        "axiom-zorn",
        "def-ultrafilter"
      ],
      "idea": "先由有限交生成真滤子，再取极大元；若补集也不在其中，可以严格扩张。",
      "steps": [
        "由 C 的有限交及其所有超集构成滤子 F，空交约定为 I。有限交性质保证空集不在 F；有限交和向上封闭由构造直接验证。以所有包含 F 的真滤子按包含排序，任一全序链的并仍真滤子：检验有限交时两个成员位于链中同一个较大滤子，空集也不会凭空进入。空链有上界 F。",
        "Zorn 给极大真滤子 U。A 与其补集不能同时属于 U，否则空集属于 U。若 A∉U，把 A 加入 U 后生成的滤子不能是真滤子，否则严格扩张。因此某 B∈U 满足 B∩A=空集，故 B⊆I\\A，向上封闭给 I\\A∈U。这证明恰选一侧。",
        "反向，具有该二选一性质的真滤子不能再严格扩为真滤子：若扩张加入 A∉U，原 U 已含其补集，扩张就含空集。因此二选一性质等价于极大性。$\\square$"
      ]
    },
    {
      "id": "los-ultraproduct",
      "topics": [
        "foundations/compactness",
        "foundations/satisfaction",
        "foundations/structure-interpretation"
      ],
      "title": "超积构造与 Łoś 定理",
      "statement": "给定同一一阶语言的非空结构 M_i（i∈I）及 I 上超滤 U，存在超积 M=∏_UM_i。对任意公式 φ 及有限元组的代表函数 a，有 M⊨φ([a]) 当且仅当 {i:M_i⊨φ(a(i))}∈U。",
      "dependencies": [
        "ultrafilter-extension",
        "syntax-parse-substitute",
        "def-ultrafilter"
      ],
      "idea": "按坐标定义结构，再对公式结构归纳；存在量词步选择各坐标的见证。",
      "steps": [
        "取乘积集合的元素为函数 a，a(i)∈M_i，选择原则与各论域非空保证乘积非空。定义 a~b 当且仅当 {i:a(i)=b(i)}∈U。自反与对称立即成立，传递性由两个相等集合的交仍在 U 得到，故可取等价类。",
        "常元按坐标解释；函数符号按坐标作用后取类；关系 R([a₁],…,[a_m]) 定义为 {i:R 在 M_i 中对这些坐标成立}∈U。更换任一有限个代表时，它们共同相等的坐标集合属于 U，所以坐标结果或关系真值只在该集合外可能变化。若两集合在 U 中某个集合上相同，滤子性质保证其中一个属于 U 当且仅当另一个属于 U，因此这些解释均良定义。",
        "先对项归纳，其超积取值等于坐标取值函数的类。于是原子等式由等价关系定义成立，原子关系由上述解释成立。否定对应集合补，利用超滤二选一性质；合取对应集合交，利用滤子有限交封闭及向上封闭，均保持等价。其他布尔联结词可由否定、合取定义。",
        "存在量词正向：若超积中有见证 [b] 使 ψ([b],[a]) 成立，归纳假设给 ψ 的坐标真集在 U 中，它包含于坐标存在句的真集，所以后者也在 U。反向若 J={i:M_i⊨∃xψ(x,a(i))}∈U，对 i∈J 选择见证 b(i)，对其余坐标任选元素。归纳假设使超积满足 ψ([b],[a])，因其真集包含 J，遂满足存在句。全称量词由否定与存在处理。完成全部公式归纳。$\\square$"
      ]
    },
    {
      "id": "compactness-arbitrary-language",
      "topics": [
        "foundations/compactness",
        "foundations/classification-of-models"
      ],
      "title": "任意集合大小语言的一阶紧致性定理",
      "statement": "任意集合大小一阶语言中的句子理论 T 有模型，当且仅当每个有限子理论都有非空模型。这里不要求语言或理论可数。",
      "dependencies": [
        "los-ultraproduct",
        "ultrafilter-extension",
        "def-ultrafilter"
      ],
      "idea": "以全部有限子理论为索引选择模型，让超滤包含每条公理出现的坐标集合。",
      "steps": [
        "若 T 有模型，它显然满足 T 的每个有限子集。反向设全部有限子理论可满足，令 I 为 T 的全部有限子集组成的集合，含空集。由集合论收集与选择，给每个 Δ∈I 选一个同语言结构 M_Δ⊨Δ；这一步是在元理论 ZFC 中选择集合族模型，不是声称选择模型可计算。",
        "对每个句子 σ∈T，令 I_σ={Δ∈I:σ∈Δ}。任意有限个这样的集合有非空交，因为取包含这几条句子的有限理论自身即可。若 T 为空，这个族为空，仍有有限交性质，空交为 I。超滤扩张定理给 I 上包含全部 I_σ 的超滤 U。",
        "构造超积 M=∏_UM_Δ。固定 σ∈T，坐标真集 {Δ:M_Δ⊨σ} 包含 I_σ，因而属于 U。Łoś 定理给 M⊨σ。对每条 σ 均成立，所以 M⊨T，紧致性得证。$\\square$"
      ]
    },
    {
      "id": "convex-closure-interior",
      "topics": [
        "geometry/convex-sets"
      ],
      "title": "有限维凸集闭包的内部包含于原集",
      "statement": "若 K⊆R^n 凸，则 int(closure K)⊆K。特别地，若 0∉K 却 0∈closure K，则 0 是 closure K 的边界点。",
      "dependencies": [
        "banach-neumann-series",
        "axiom-vector"
      ],
      "idea": "围绕目标点取一个内部包含它的单纯形，再把顶点微扰到 K 内；正重心坐标在小扰动下保持正。",
      "steps": [
        "若 x∈int(closure K)，平移使 x=0。n=0 时结论直接成立；设 n≥1。取 ε>0，使顶点 v₀=−εΣ_(i=1)^ne_i、v_i=εe_i（1≤i≤n）都在 closure K 内部。它们仿射无关，且0的重心坐标全部为1/(n+1)。",
        "把每个 v_i 的坐标末尾添1，得到可逆的 (n+1) 阶矩阵 V。因 v_i∈closure K，可取 k_i∈K 任意靠近 v_i。对应增广列矩阵 W 任意靠近 V；Neumann 小扰动逆公式给 W 可逆且 W⁻¹→V⁻¹。",
        "因此解 Wλ=(0,…,0,1)ᵀ 的各坐标 λ_i 都可保证严格正，并满足 Σλ_i=1、Σλ_i k_i=0。凸性使0∈K，证明内部包含式。若0∈closure K但0∉K，由已证结论0不能是闭包内部点；闭集中的非内部点即边界点。$\\square$"
      ]
    },
    {
      "id": "finite-dimensional-weak-separation",
      "topics": [
        "geometry/convex-sets",
        "applied/duality"
      ],
      "title": "有限维不交凸集的弱超平面分离",
      "statement": "R^n 中任意不交非空凸集 C,D，存在非零 u 与实数 α，使对全部 c∈C、d∈D 有 〈u,d〉≤α≤〈u,c〉。这里不保证严格间隙；严格版本需要附加条件。",
      "dependencies": [
        "convex-closure-interior",
        "convex-projection",
        "finite-dimensional-compactness"
      ],
      "idea": "对差集闭包，若原点在外则直接投影；若原点在边界，则用外点的最近点法向量取极限。",
      "steps": [
        "令 K=C−D，凸且0∉K，令 H=closure K，仍凸且闭。如果0∉H，投影 p=P_H0 非零，变分不等式给 〈p,z〉≥‖p‖²>0 对全部 z∈H，故取 u=p 有 〈u,c−d〉≥0。",
        "若0∈H，前一引理使0为 H 的边界。取外点 y_j∉H 且 y_j→0，令 p_j=P_Hy_j、u_j=(p_j−y_j)/‖p_j−y_j‖。因0∈H，最小距离≤‖y_j‖，所以 ‖p_j‖≤2‖y_j‖→0。投影不等式给 〈u_j,z−p_j〉≥0 对全部 z∈H。",
        "单位球面紧，取子列 u_j→u、‖u‖=1。对任意固定 z∈H 取极限，得 〈u,z〉≥0。该同一子列适用于每个固定 z，因此对全部 z 成立，特别对 z=c−d 有 〈u,c〉≥〈u,d〉。",
        "两种情形都得到非零 u 及上述逐对不等式。固定 c₀∈C 给 sup_D〈u,d〉≤〈u,c₀〉，固定 d₀∈D 给 inf_C〈u,c〉≥〈u,d₀〉，因此两个界皆有限且 sup_D≤inf_C。任选二者之间 α，得到所列分离。n=0 时不存在不交非空凸集，定理没有待处理实例。$\\square$"
      ]
    }
  ]
};
