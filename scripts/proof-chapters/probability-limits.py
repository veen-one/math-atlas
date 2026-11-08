"""Measure-theoretic and Fourier preliminaries for the finite-variance CLT."""
def register(P, BASES):
    P('pi-lambda','analysis/sigma-algebras probability/probability-space','π—λ 定理',r'设 P 含全集且对有限交封闭，D 为包含 P 的 λ 系统（含全集、对补和不交可数并封闭），则 σ(P)⊆D。','axiom-measure','在最小 λ 系统中先固定交的一边，再交换两边，最终得到有限交封闭。',
      r'令 L 为所有包含 P 的 λ 系统之交。交仍为 λ 系统，所以 L⊆D。任何 λ 系统对嵌套集合差封闭：若 A⊆B 都在其中，则 A 与 B 的补不交，其并的补为 B\A。',
      r'固定 A∈P，令 L_A={B:A∩B∈L}。因 A∈L，嵌套差性质使 L_A 对补封闭，不交并也保持交的分配，所以它是 λ 系统。P 的交封闭使 P⊆L_A，最小性给 L⊆L_A。',
      r'再固定任意 B∈L，同样的类 {A:A∩B∈L} 是 λ 系统；上一段保证它含 P，故包含 L。因此 L 对有限交封闭。',
      r'有限交与补给有限并；对任意可数并，依次去掉此前有限并将其不交化，再用 λ 闭性。所以 L 是 σ 代数，包含 σ(P)。结合 L⊆D 即得结论。$\square$')
    P('lotus','probability/distributions probability/random-variables','分布推前与期望换元',r'随机变量 X 的分布 μ_X(A)=P(X∈A)。对非负可测 h，E[h(X)]=∫h dμ_X；对绝对可积实或复 h 同样成立。','simple-approximation monotone-integral integral-linearity','指标函数正是推前测度定义；简单逼近把等式推广到一般可测函数。',
      r'若 h=1_A，等式为 P(X∈A)=μ_X(A)，按定义成立。对非负简单函数，有限线性性给出相同结论。',
      r'取 h_n 单调简单逼近 h，则 h_n(X)↑h(X)，两侧分别用单调收敛定理即得非负结论。对可积实函数拆正负部；复函数再拆实虚部，全部积分有限，线性性给所述等式。$\square$')
    P('tonelli-fubini','analysis/lebesgue-integral analysis/integration-limits probability/distributions','Tonelli 与 Fubini 定理（给定 σ 有限乘积测度）',r'设 μ,ν 为 σ 有限测度，给定乘积 σ 代数上的测度 μ×ν，在可测矩形上取 μ(A)ν(B)。非负可测 f 的两个迭代积分相等且等于乘积积分；若 ∫|f|<∞，对实或复 f 也成立。这里不把乘积测度的存在性纳入该陈述。','pi-lambda simple-approximation monotone-integral integral-linearity','先对矩形指标验证，再用 λ 系统推广到所有可测集，最后用简单函数和单调逼近。',
      r'先设两个测度均有限。固定乘积可测集 E，其截面 E_x={y:(x,y)∈E} 可测：具有该截面性质的集合对补、可数并封闭，且含矩形，所以包含乘积 σ 代数。',
      r'令 D 为满足 x↦ν(E_x) 可测且其 μ 积分等于 (μ×ν)(E) 的集合。矩形满足该式。全集满足，取补时截面测度变为 ν(Y)-ν(E_x)，有限性与积分线性性保证等式保持；不交可数并时截面测度逐项相加，单调收敛保证等式保持。',
      r'故 D 为 λ 系统，矩形含全集并对交封闭，π—λ 定理使 D 包含全部乘积可测集。交换两变量也成立。因此对指标和非负简单函数已有迭代积分相等。',
      r'用非负简单函数 f_n↑f，在截面与整体上分别应用单调收敛，就得非负可测版本，同时得到迭代积分函数的可测性。',
      r'对 σ 有限情形，取递增有限测度覆盖 X_n、Y_n，对 f·1_(X_n×Y_n) 应用有限情形再用单调收敛，得到一般非负结论。绝对可积时对 |f| 先应用该结论，确保几乎处处截面可积，再分别拆正负部或实虚部；异常零集不影响最终积分。$\square$')
    P('independent-bounded-products','probability/conditional-probability probability/central-limit-theorem','相互独立变量的有界函数乘积期望',r'相互独立 X₁,…,X_n 及有界可测复函数 h_j 满足 E[∏h_j(X_j)]=∏E[h_j(X_j)]。','simple-approximation monotone-integral integral-linearity','从独立事件的定义开始，把每个因子逐次推广到一般可测函数。',
      r'对 h_j 为指标函数，正是相互独立的定义；对非负简单函数，将有限乘积展开为指标乘积，有限线性性给结论。',
      r'对非负有界可测函数，各取单调简单逼近，有限个因子的乘积也单调趋向目标乘积，反复单调收敛得到等式。一般有界实函数拆正负部，复函数拆实虚部，有限次展开和线性性给出结论。$\square$')
    P('one-dimensional-substitution','analysis/integration-calculus','连续积分的一维换元公式',r'若 φ 连续、g 为 C¹，且其值域位于 φ 的定义区间，则 ∫_a^b φ(g(t))g′(t)dt=∫_(g(a))^(g(b))φ(u)du。非负函数在单调换元下可通过有限区间极限处理无穷端点。','ftc-first ftc-second chain-rule monotone-integral','把被积函数写成某个变上限积分与 g 的复合导数。',
      r'固定起点 c，定义 F(u)=∫_c^u φ(s)ds。基本定理给 F′=φ，链式法则给 (F∘g)′=φ(g)g′。对该连续导数应用第二基本定理，得到左右端差，即所需公式。',
      r'对严格递增换元及非负连续函数，取逼近无穷端点的递增有限区间，有限公式逐段成立，单调收敛保证两边极限相等。递减换元反向后同理。这一扩展只在所列非负或已证绝对可积条件下使用。$\square$')
    P('gaussian-integral','probability/distributions analysis/fourier-transform','Gaussian 积分的值',r'∫_R exp(-x²/2)dx=√(2π)，其中 π=4∫₀¹(1+t²)⁻¹dt。','tonelli-fubini one-dimensional-substitution matrix-exponential','用一次一维换元将象限双积分变成可直接计算的有理函数积分。',
      r'实指数由已证指数级数给出，正性可由 exp(x)=exp(x/2)² 与非零逆推出。对 |x|≥1，有 exp(-x²/2)≤exp(-|x|/2)，后者用原函数直接积分有限，所以积分 G 为正且有限。',
      r'由非负 Tonelli，G²/4=∫₀∞∫₀∞exp(-(x²+y²)/2)dydx。固定 x>0，作一维换元 y=tx，dy=xdt；x=0 是测度零，不影响积分。再交换非负积分，得到 ∫₀∞[∫₀∞x exp(-(1+t²)x²/2)dx]dt。',
      r'内积分用指数原函数或换元 u=(1+t²)x²/2 得 1/(1+t²)。故 G²/4=∫₀∞(1+t²)⁻¹dt。后一积分在 [1,∞) 作 t=1/s，等于 [0,1] 上同一积分，因此总值为 π/2。',
      r'于是 G²=2π，G>0 给 G=√(2π)。本计算使用的乘积测度为通常 Lebesgue 平面测度，矩形取面积乘积，满足前一定理假设；不依赖未展开的二维极坐标换元。$\square$')
    P('gaussian-characteristic','probability/distributions probability/central-limit-theorem analysis/fourier-transform','标准正态的矩与特征函数',r'密度 g(x)=(2π)⁻¹/²exp(-x²/2) 定义概率分布，其均值为零、方差为一，特征函数为 φ(t)=exp(-t²/2)。','gaussian-integral dominated-convergence matrix-exponential ftc-second integral-linearity','在积分号下求导，利用 g′=-xg 的分部积分得到一个一阶方程。',
      r'Gaussian 积分给归一化。指数衰减支配任意固定次数多项式：由正指数级数 exp(u)≥u^k/k!，可选足够大 k 控制尾部，因此所需矩及边界 x^j g(x) 的极限都存在且尾部趋零。对称性给均值零。',
      r'乘积求导与基本定理给有限区间分部积分，再让两端趋无穷，因边界 xg(x)→0，有 ∫x²g(x)dx=-∫xg′(x)dx=∫g(x)dx=1。',
      r'复指数满足 |exp(itx)|=1，因为其共轭为 exp(-itx) 且两者乘积一。差商绝对值受 |x| 控制，可由 exp(i(t+h)x)-exp(itx)=∫_t^(t+h)ix exp(isx)ds 验证；E|X| 有限，控制收敛允许对 φ 积分求导。',
      r'于是 φ′(t)=i∫x exp(itx)g(x)dx。分部积分及 g′=-xg 给 ∫x exp(itx)g=itφ(t)，所以 φ′=-tφ，φ(0)=1。乘 exp(t²/2) 后导数零，由中值定理逐实虚部得常数一，故 φ=exp(-t²/2)。$\square$')
    P('characteristic-expansion','probability/central-limit-theorem probability/expectation-variance','有限二阶矩的特征函数局部展开',r'若实随机变量 Y 满足 E[Y]=0、E[Y²]=1，则 φ_Y(u)=1-u²/2+o(u²)，u→0。','gaussian-characteristic dominated-convergence integral-linearity','先对实指数作二阶展开，再用 Y² 作可积控制；不假设三阶矩。',
      r'两次积分指数导数给 exp(iz)=1+iz-z²∫₀¹(1-s)exp(isz)ds。因此 exp(iz)=1+iz-z²/2+z²r(z)，其中 r(z)=∫₀¹(1-s)[1-exp(isz)]ds，且 |r(z)|≤1、r(z)→0。',
      r'代入 z=uY，取期望并用均值与方差条件，得 φ_Y(u)=1-u²/2+u²E[Y²r(uY)]。因 |Y²r(uY)|≤Y² 可积、且逐点趋零，控制收敛使最后期望趋零，得到展开。$\square$')
    P('binomial-exponential-limit','analysis/limits probability/central-limit-theorem','复数二项式极限',r'若复数 a_n→a，则 (1+a_n/n)^n→exp(a)。','matrix-exponential','二项式展开的每个固定次数系数趋于指数系数，统一尾部由指数级数控制。',
      r'取 B 使所有 |a_n|≤B。展开 (1+a_n/n)^n=Σ_(k=0)^n [n(n-1)…(n-k+1)/n^k]a_n^k/k!。固定 k，方括号趋于一，整个第 k 项趋于 a^k/k!。',
      r'每项绝对值≤B^k/k!，这个数值级数已证收敛。给定 ε，先选 K 使指数控制级数在 K 后的尾和小于 ε；有限的前 K 项逐项收敛，再合并两边尾部误差，得到极限为 Σa^k/k!=exp(a)。$\square$')
    P('gaussian-smoothing','probability/central-limit-theorem analysis/fourier-transform','Gaussian 平滑把特征函数极限转为分布极限',r'设 E[V_n]=0、E[V_n²]=1，且 φ_(V_n)(t)→exp(-t²/2) 对每个实 t 成立。则对每个 x，P(V_n≤x)→Φ(x)，Φ 为标准正态分布函数。','gaussian-characteristic tonelli-fubini dominated-convergence chebyshev independent-bounded-products','先固定平滑尺度，用可积 Gaussian 核交换 Fourier 积分，再消去平滑噪声。',
      r'取独立标准正态 Z，或等价地在分布与正态的乘积概率空间中工作。对 ε>0，V_n+εZ 的密度为 p_n,ε(y)=E[g_ε(y-V_n)]，其中 g_ε(u)=ε⁻¹g(u/ε)。该密度表达由非负 Fubini 对事件积分直接验证。',
      r'由标准正态特征函数及一维换元，g_ε(u)=(2π)⁻¹∫_R exp(-itu)exp(-ε²t²/2)dt。将此式代入密度，绝对值由可积 exp(-ε²t²/2) 控制，Fubini 给 p_n,ε(y)=(2π)⁻¹∫exp(-ity)φ_(V_n)(t)exp(-ε²t²/2)dt。',
      r'|φ|≤1，控制收敛说明这些密度一致趋于 g_s，s=√(1+ε²)：两密度的全域上确界误差被 (2π)⁻¹∫|φ_(V_n)-exp(-t²/2)|exp(-ε²t²/2)dt 控制并趋零。极限核由同一 Gaussian 积分式识别。',
      r'为从密度到分布函数，先在有限区间 [-R,x] 积分用一致收敛。另一方面独立性与 EZ=0 给 E[(V_n+εZ)²]=1+ε²，因此 Markov 对平方的尾界统一控制 R 外概率≤(1+ε²)/R²。先 n→∞ 再 R→∞，得平滑分布函数趋于 N(0,1+ε²) 的分布函数。',
      r'任取 δ>0，有 P(V_n+εZ≤x-δ)-P(|εZ|>δ)≤P(V_n≤x)≤P(V_n+εZ≤x+δ)+P(|εZ|>δ)。这些包含关系逐样本检查即可。',
      r'令 δ=√ε。平方尾界使噪声概率≤ε。先取 n 的上下极限，再让 ε↓0，Gaussian 分布函数的连续性及一维换元使左右界都趋 Φ(x)。所以原分布函数也趋 Φ(x)。本结论利用了统一二阶矩界，不声称已经证明最一般的 Lévy 连续性定理。$\square$')
    P('iid-central-limit','probability/central-limit-theorem','独立同分布有限方差中心极限定理',r'若 X_i 独立同分布，均值 μ、方差 0<σ²<∞，则 (Σ_(i=1)^nX_i-nμ)/(σ√n) 依分布收敛于 N(0,1)。','characteristic-expansion binomial-exponential-limit gaussian-smoothing independent-bounded-products variance-mean','局部二阶展开给标准化和的特征函数极限，平滑引理将其变成分布收敛。',
      r'令 Y_i=(X_i-μ)/σ，故均值零、方差一。写 V_n=n⁻¹/²ΣY_i。独立乘积期望给 φ_(V_n)(t)=[φ_Y(t/√n)]^n。',
      r'固定 t，二阶展开给 φ_Y(t/√n)=1-t²/(2n)+o(1/n)。因此可写为 1+a_n/n，a_n→-t²/2。复二项式极限给 φ_(V_n)(t)→exp(-t²/2)。',
      r'独立方差计算使 E[V_n²]=1。Gaussian 平滑引理的全部条件已满足，于是对每个 x 有 P(V_n≤x)→Φ(x)。标准正态分布函数连续，所以这就是所述依分布收敛。证明不需要三阶矩；无限方差分布不在适用范围内。$\square$')
