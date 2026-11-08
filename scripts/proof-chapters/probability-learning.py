"""Probability, estimation and learning proofs with explicit hypotheses."""
def register(P, BASES):
    BASES.update({'def-conditional':dict(title='信息流、条件期望和停时的定义',statement='信息流是递增 σ 代数列。条件期望 Z=E[X|G] 指 G 可测且对每个 A∈G 有 ∫_A Z=∫_A X 的可积变量，按几乎处处相等识别。停时 T 满足 {T≤n}∈F_n。鞅 M_n 适应且可积，并满足 E[(M_n-M_(n-1))1_A]=0 对所有 A∈F_(n-1)。本卷在 L² 情形证明条件期望存在。'),
                  'axiom-dependent-choice':dict(title='依赖选择的基础约定',statement='允许从非空初始集合出发，在每一步总有下一候选时递归作可数次相依选择。这是常用 ZFC 基础中可用的选择原则，不被当作已经证明的数学定理。')})
    P('measure-continuity-above','analysis/measures probability/almost-sure-convergence','有限测度下的上连续性',r'若可测集 E_n 递减，且 μ(E₁)<∞，则 μ(∩E_n)=lim μ(E_n)。','measure-continuity','在有限初始集合中取补，把递减转成递增后作有限数相减。',
      r'令 A_n=E₁\E_n，则 A_n 递增，并为 E₁\∩E_n。可加性给 μ(A_n)=μ(E₁)-μ(E_n)，不存在无穷相减，因为 μ(E₁) 有限。',
      r'由测度下连续性，μ(A_n)→μ(E₁\∩E_n)=μ(E₁)-μ(∩E_n)。移项即得结果。若初始测度无限，不能照用，例如实轴上 E_n=[n,∞) 的测度全无限，交集却空。$\square$')
    P('countable-union-bound','probability/probability-space analysis/measures','可数次可加的概率上界',r'对任意可数事件列 A_n，有 P(∪A_n)≤ΣP(A_n)。','axiom-measure','依次去掉此前已出现的部分，形成不交分块。',
      r'令 D₁=A₁，D_n=A_n\∪_(j<n)A_j。它们可测、两两不交、并与原事件并相同，且 D_n⊆A_n。',
      r'可数可加性与测度单调性给 P(∪A_n)=ΣP(D_n)≤ΣP(A_n)。单调性本身由 B=A⊔(B\A) 的非负可加性得到，无须事件独立。$\square$')
    P('borel-cantelli-first','probability/almost-sure-convergence probability/large-deviations','第一 Borel–Cantelli 引理',r'若 Σ_nP(A_n)<∞，则以概率一只有有限多个 A_n 发生；不要求独立。','countable-union-bound measure-continuity-above','无穷多次发生的事件包含在每个尾并中，尾并概率由收敛级数尾和控制。',
      r'“无穷多个发生”等价于 limsup A_n=∩_N∪_(n≥N)A_n。尾并 B_N 随 N 递减，概率均不超过 1。',
      r'可数并上界给 P(B_N)≤Σ_(n≥N)P(A_n)，右侧趋零。由上连续性，P(limsup A_n)=lim P(B_N)=0。因此异常的无穷发生事件概率为零。$\square$')
    P('as-to-probability','probability/almost-sure-convergence probability/convergence-in-probability','几乎必然收敛蕴含依概率收敛',r'若 X_n→X 几乎必然，则对任意 ε>0，有 P(|X_n-X|≥ε)→0。','measure-continuity-above','把每个下标的偏差事件包入“此后仍出现偏差”的递减事件。',
      r'令 B_N=∪_(n≥N){|X_n-X|≥ε}。它们递减，交集是该阈值偏差无穷发生的事件；在 X_n→X 的每条路径上，这种偏差最终不会出现，所以交集包含在收敛异常零集内。',
      r'概率上连续性给 P(B_N)→0，而 n≥N 时 {|X_n-X|≥ε}⊆B_N，所以各偏差概率也趋零。这是定义中的依概率收敛。$\square$')
    P('probability-subsequence','probability/convergence-in-probability probability/almost-sure-convergence','依概率收敛列的几乎必然收敛子列',r'若 X_n→X 依概率，则存在严格递增下标 n_k，使 X_(n_k)→X 几乎必然。','borel-cantelli-first archimedean','让第 k 次选取的超阈值概率足够小，使它们可求和。',
      r'按依概率收敛，逐次选 n_k>n_(k-1)，使 P(|X_(n_k)-X|≥1/k)<2^(-k)。每一步都可选，因为固定阈值 1/k 下的偏差概率最终小于 2^(-k)。',
      r'这些事件概率和有限。第一 Borel–Cantelli 引理说明几乎每条路径只发生有限次，所以最终误差小于 1/k→0，得到所需子列几乎必然收敛。$\square$')
    P('l2-cauchy-schwarz','probability/expectation-variance probability/bias-variance','随机变量的 L² 柯西—施瓦茨不等式',r'若 E[X²],E[Y²]<∞，则 XY 可积，|E[XY]|²≤E[X²]E[Y²]，并且 ‖X+Y‖₂≤‖X‖₂+‖Y‖₂。','integral-linearity markov','非负平方的期望是一个对所有实参数非负的二次式。',
      r'由 2|XY|≤X²+Y² 得乘积可积。若 E[Y²]=0，则 Y=0 几乎处处：对任意 k，P(|Y|≥1/k)≤k²E[Y²]=0，取可数并即可；故不等式直接成立。',
      r'若 E[Y²]>0，在非负量 E[(X-tY)²]=E[X²]-2tE[XY]+t²E[Y²] 中取 t=E[XY]/E[Y²]，得 E[X²]-E[XY]²/E[Y²]≥0，整理即得结论。',
      r'展开 E[(X+Y)²]，用已证乘积界控制交叉项，得到 ≤(‖X‖₂+‖Y‖₂)²，开方即得三角不等式。$\square$')
    P('l2-completeness','analysis/hilbert-spaces probability/random-variables','概率空间上 L² 的完备性',r'把平方可积实随机变量按几乎处处相等识别，内积为 E[XY]，则 L² 是实 Hilbert 空间。','l2-cauchy-schwarz monotone-integral dominated-convergence markov axiom-dependent-choice','从柯西列抽取可求和步长的子列，逐点累加绝对差构造可积控制函数。',
      r'内积双线性、对称由积分线性性，且 E[X²]=0 恰好表示零等价类，故正定。设 f_n 在 L² 中柯西，抽取 n_k 使 ‖f_(n_(k+1))-f_(n_k)‖₂≤2^(-k)。',
      r'记 d_k 为相邻差，S_N=|f_(n₁)|+Σ_(k≤N)|d_k|。由 L² 三角不等式，‖S_N‖₂≤‖f_(n₁)‖₂+1。S_N² 单调增加，单调收敛给 S=lim S_N 满足 E[S²] 有限。因此 S 有限几乎处处。',
      r'在该满概率集合上，Σ|d_k| 收敛，所以 f_(n_k) 收敛到某可测 f；在异常集合上定义零。又 |f|≤S，故 f∈L²，且 |f_(n_k)-f|²≤4S²。控制收敛定理使此子列在 L² 中收敛到 f。',
      r'最后用原列柯西性：给 ε>0，选尾部任意两项 L² 距离小于 ε/2，再选足够靠后的子列项距 f 小于 ε/2，三角不等式得到全列距 f 小于 ε。故完备，成为 Hilbert 空间。$\square$')
    P('conditional-l2','probability/conditional-probability probability/martingales','L² 条件期望的存在与唯一性',r'若 X∈L²，G 为子 σ 代数，则唯一存在 G 可测的 Z∈L²，使对每个 A∈G 有 E[Z1_A]=E[X1_A]，按几乎处处相等理解；且它是对 G 可测变量的最佳 L² 逼近。','l2-completeness projection-closed-subspace probability-subsequence chebyshev','把 G 可测变量识别为 L² 的闭线性子空间，再用正交投影。',
      r'G 可测 L² 等价类构成线性子空间 M。若 Z_n∈M 且 L² 收敛到 Z，Chebyshev 不等式使其依概率收敛，再抽取几乎必然收敛子列。取各 Z_n 的 G 可测代表，它们收敛到有限值的集合属于 G；在其上取极限，其他处取零，得到 G 可测代表且等于 Z 几乎处处。因此 M 闭。',
      r'投影定理给唯一 Z∈M，使 X-Z⊥M，并最小化 L² 误差。对 A∈G，1_A∈M，所以 E[(X-Z)1_A]=0，这就是条件期望的积分定义。',
      r'若另有 Z′∈M 满足这些积分等式，令 D=Z-Z′，则对 {D>0}、{D<0} 的积分都为零。非负变量积分为零迫使其几乎处处为零（用阈值 1/k 的 Markov 估计及可数并），所以 D=0 几乎处处，证明定义意义下唯一。$\square$')
    P('conditional-tower','probability/conditional-probability probability/martingales','L² 条件期望的塔式性质与全期望',r'若 H⊆G 为子 σ 代数且 X∈L²，则 E[E[X|G]|H]=E[X|H]，并有 E[E[X|G]]=E[X]。','conditional-l2','在更小信息集的每个事件上，连续两次使用条件期望的定义。',
      r'令 Z=E[X|G]、W=E[Z|H]。对任意 A∈H，也有 A∈G，因此 E[W1_A]=E[Z1_A]=E[X1_A]。W 为 H 可测且平方可积，条件期望唯一性使 W=E[X|H]。',
      r'在定义中直接取 A=Ω，得到 E[Z]=E[X]。同样的事件积分验证还给出条件期望的线性性：线性组合满足相同定义式，再用唯一性识别。$\square$')
    P('variance-mean','probability/expectation-variance probability/point-estimation','样本均值方差及无偏性',r'独立 X₁,…,X_n 具有共同有限均值 μ、有限方差 σ²，则 E[X̄]=μ、Var(X̄)=σ²/n。','independent-products integral-linearity','展开中心化平方后，独立性使每个非对角交叉项为零。',
      r'线性性直接给 E[X̄]=n⁻¹Σ_iE[X_i]=μ。平方可积保证所有随后乘积可积。',
      r'令 Y_i=X_i-μ，则 E[Y_i]=0。对 i≠j，独立期望乘法给 E[Y_iY_j]=0。于是 E[(Σ_iY_i)²]=Σ_iE[Y_i²]+2Σ_(i<j)E[Y_iY_j]=nσ²，除以 n² 得结论。$\square$')
    P('sample-variance-unbiased','probability/point-estimation probability/expectation-variance','样本方差的无偏性',r'对 n≥2 个独立同分布且二阶矩有限的观测，s²=(n-1)⁻¹Σ_i(X_i-X̄)² 满足 E[s²]=σ²。','variance-mean integral-linearity','把围绕样本均值的平方和拆成围绕真实均值的平方和，再减去样本均值误差。',
      r'展开 X_i-X̄=(X_i-μ)-(X̄-μ)，并用 Σ_i(X_i-μ)=n(X̄-μ)，得到恒等式 Σ_i(X_i-X̄)²=Σ_i(X_i-μ)²-n(X̄-μ)²。',
      r'取期望，第一项为 nσ²，第二项为 nVar(X̄)=σ²，所以平方和期望为 (n-1)σ²。因 n≥2 可除以 n-1，得到无偏性。这不证明该估计量在所有损失下最优。$\square$')
    P('bounded-optional-stopping','probability/stopping-times probability/martingales','有界停时的可选停止等式',r'离散时间可积鞅 M_n 与满足 0≤T≤N 的停时 T，具有 E[M_T]=E[M_0]。','def-conditional integral-linearity','把停止值写成有限个增量，每个增量只在当时还没停止时计入。',
      r'逐条路径有 M_T=M_0+Σ_(k=1)^N (M_k-M_(k-1))1_{T≥k}。因 T 为整数且有界，所有项构成有限和，且乘指标后仍可积。',
      r'{T≥k} 是 {T≤k-1} 的补集，因此属于 F_(k-1)。由鞅的积分定义，每个 E[(M_k-M_(k-1))1_{T≥k}]=0。对有限和取期望即得等式。无界 T 无法仅靠同一步骤交换无限和或极限与期望，因此不在本定理范围内。$\square$')
    P('squared-loss-projection','probability/regression-classification probability/loss-risk','条件均值最小化平方预测风险',r'若 Y∈L²、可用信息为 G，则 m=E[Y|G] 在所有 G 可测 L² 预测中唯一最小化 E[(Y-h)²]，且风险等于 E[(Y-m)²]+E[(m-h)²]。','conditional-l2','残差与所有可用信息构成的平方可积变量正交，展开平方的交叉项消失。',
      r'条件期望是到 G 可测闭子空间的正交投影，因此 Y-m 与 m-h 正交，即 E[(Y-m)(m-h)]=0。所有乘积因 L² 柯西—施瓦茨可积。',
      r'展开 Y-h=(Y-m)+(m-h) 的平方并取期望，得到所述勾股分解。第二项非负，且等于零当且仅当 h=m 几乎处处，所以 m 唯一最优。$\square$')
    P('bias-variance-decomposition','probability/bias-variance probability/loss-risk','平方损失的偏差—方差分解',r'固定预测位置，若估计预测值 Z 与独立新噪声 ε 都有有限二阶矩，E[ε]=0，真实均值为 m，则 E[(Z-(m+ε))²]=(E[Z]-m)²+Var(Z)+Var(ε)。','independent-products integral-linearity','分别把估计值和噪声中心化，期望使所有交叉项为零。',
      r'写 Z-(m+ε)=(Z-E[Z])+(E[Z]-m)-ε。平方展开后，Z-E[Z] 与常数偏差的交叉项因中心化期望为零；噪声与常数的交叉项也因 E[ε]=0 消失。',
      r'独立性给 E[(Z-E[Z])ε]=E[Z-E[Z]]E[ε]=0。剩余三个平方项分别是方差、偏差平方和噪声方差，得到等式。若训练结果与新噪声相关，最后一项不能未经说明就消去。$\square$')
    P('ridge-solution','probability/regularization applied/numerical-linear-algebra','岭回归的唯一解',r'对实矩阵 X、向量 y 与 λ>0，目标 ‖Xβ-y‖²+λ‖β‖² 唯一最小于 β*=(XᵀX+λI)⁻¹Xᵀy。','hermitian-spectral rank-nullity','正惩罚使法矩阵正定，通过完成平方同时证明存在和唯一。',
      r'记 A=XᵀX+λI。对非零 v，vᵀAv=‖Xv‖²+λ‖v‖²>0，因此 Av=0 只能 v=0；有限维秩—零化度使 A 可逆。定义 β*=A⁻¹Xᵀy。',
      r'令 h=β-β*。展开目标，交叉项为 2hᵀ(Aβ*-Xᵀy)=0，所以 J(β)=J(β*)+hᵀAh。最后一项非负且只在 h=0 时为零，故 β* 是唯一全局极小点。λ=0 时若 X 不满列秩，唯一性可能失败。$\square$')
    P('soft-threshold','probability/regularization applied/nonlinear-optimization','L1 惩罚的一维软阈值解',r'对 λ≥0，目标 J(x)=(x-y)²/2+λ|x| 唯一最小点为 sign(y)·max(|y|-λ,0)。','mean-value axiom-real','在正半轴与负半轴分别求导，并检查两侧在零点的单侧斜率。',
      r'x>0 时导数为 x-y+λ，随 x 严格递增；x<0 时导数为 x-y-λ，也严格递增。中值定理把导数正负翻译为相应区间的增减。',
      r'若 y>λ，负半轴与正半轴直到 y-λ 前都递减，之后递增，唯一最小在 x=y-λ。若 y<-λ，对称得到 x=y+λ。若 |y|≤λ，负半轴导数非正、正半轴非负，且离开零后有严格变化，故唯一最小为零。三种情况合并为软阈值公式。$\square$')
    P('empirical-risk-unbiased','probability/loss-risk probability/training-validation','固定预测器的经验风险无偏性',r'设 Z₁,…,Z_n 独立同分布，h 是不依赖这些观测的固定预测器，损失 ℓ(h,Z) 可积，则经验风险 n⁻¹Σ_iℓ(h,Z_i) 的期望等于真实风险 E[ℓ(h,Z)]。','integral-linearity','同分布保证每一项有同样期望，有限线性性即可；关键在预测器固定。',
      r'由同分布，每个 E[ℓ(h,Z_i)] 都等于 R(h)。有限和线性性给 E[Rhat_n(h)]=n⁻¹Σ_i R(h)=R(h)。此结论本身甚至不需要观测独立；独立性用于方差和集中界等更强结果。',
      r'若 h 由同一批数据选择，不能把依赖样本的 h 当作固定对象套用上式。例如每次取训练风险最低的模型已经额外利用了这些损失；证明不对这种数据依赖选择作无偏保证。$\square$')
    P('log-inequality','discrete/entropy probability/likelihood','对数基本不等式',r'对任意 t>0，有 ln t≤t-1，等号当且仅当 t=1；这里 ln t=∫₁ᵗ ds/s。','ftc-first mean-value chain-rule','由积分定义得到导数，再判定差函数的唯一最小点。',
      r'积分定义及第一基本定理给 ln 的导数为 1/t。令 g(t)=t-1-ln t，则 g′(t)=1-1/t：在 (0,1) 为负，在 (1,∞) 为正。',
      r'中值定理使 g 在前一区间严格递减、后一区间严格递增；g(1)=0，所以 g(t)≥0，且只在 1 取等号。另对任意固定 a>0，函数 ln(at)-ln t 的导数为零，由链式法则与中值定理它恒等于在 t=1 的值 ln a，故 ln(at)=ln a+ln t，也给出后续散度运算需要的商与乘积对数律。$\square$')
    P('gibbs-inequality','discrete/entropy probability/loss-risk','有限分布的 Gibbs 不等式',r'对有限概率向量 p,q，D(p‖q)=Σ_(p_i>0)p_i ln(p_i/q_i)≥0；若某 p_i>0 而 q_i=0，定义为无穷。等号当且仅当 p=q。','log-inequality','对 q_i/p_i 使用对数上界，把散度变成两个概率总和之差。',
      r'若出现 q_i=0<p_i，结论由无穷约定成立。否则对每个 p_i>0 用 ln(q_i/p_i)≤q_i/p_i-1，乘 p_i 后取负并相加，得 D(p‖q)≥Σ_(p_i>0)(p_i-q_i)=1-Σ_(p_i>0)q_i≥0。',
      r'若等号成立，最后缺失支持上的 q 质量必须为零，且每个正权重处的对数不等式都取等号，所以 q_i=p_i。反之 p=q 时每一项为零。$\square$')
    P('entropy-bound','discrete/entropy discrete/source-coding','有限分布的熵界',r'm≥1 个可能符号的分布 p 具有 0≤H(p)≤ln m；上界仅当均匀分布时达到。使用以 2 为底对数时对应上界 log₂m。','gibbs-inequality log-inequality','非负性逐项成立；上界等价于对均匀分布的相对熵非负。',
      r'对 p_i>0，因为 p_i≤1，积分定义的 ln 在正数上递增，故 -p_i ln p_i≥0，约定 0ln0=0，得到熵非负。',
      r'令 u_i=1/m。Gibbs 不等式给 0≤D(p‖u)=Σ_i p_i ln p_i+ln m=ln m-H(p)。等号条件是 p=u。换底是除以正常数 ln2，因此同样成立。$\square$')
