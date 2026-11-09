"""Pointwise limits preserve measurability, with the real-density dependency proved."""
def register(P, BASES):
    P('rational-density','analysis/completeness-reals analysis/measurable-functions','有理数在实数中的稠密性',r'任意实数 a<b 之间都存在有理数 q，即存在 q∈Q 使 a<q<b。','archimedean axiom-natural axiom-real','先用 Archimedes 性质把区间放大到长度大于一，再在有限整数区间中选最小的越过端点的整数。',
      r'由 Archimedes 性质取正整数 n，使 n(b−a)>1，等价于 1/n<b−a。再取正整数 M>|na|+2；于是区间 [−M,M] 中的整数集合有限，并包含至少一个大于 na 的整数 M。',
      r'在有限集合 {k∈Z:−M≤k≤M 且 k>na} 中取最小元素 m。m>na；且 m−1≤na，否则 m−1 也是集合中的整数并小于 m，违反最小性。因此 0<m−na≤1。',
      r'令 q=m/n。因 n>0，na<m 给 a<q；又 m≤na+1 给 q≤a+1/n<b。故 a<q<b 且 q 为有理数，证明稠密性。有限有序集合有最小元由有限个整数逐一比较即可。$\\square$')
    P('pointwise-limit-measurable','analysis/measurable-functions analysis/function-sequences','实值可测函数列的逐点极限可测',r'设 (X,Σ) 是可测空间，每个 f_n:X→R 关于 Σ 与 R 的 Borel σ 代数可测，并且对每个 x，f_n(x)→f(x)∈R。则 f 可测。','axiom-measure rational-density','把极限值严格大于阈值写成有理阈值以上的最终下界事件的可数并。',
      r'先证判据：实值函数 g 可测，当且仅当每个开射线原像 {g>a} 属于 Σ。正向由 (a,∞) 是 Borel 集。反向，任意开集 O⊆R 是所有包含于 O 的有理端点开区间 (p,q) 的并；这些区间至多可数，因为 Q×Q 可数。若 x∈O，则可在 O 中含 x 的小开区间两侧各取一个有理数，故该并确为 O。又 {p<g<q}={g>p}∩{g<q}，而由有理稠密性 {g<q}=∪_(r∈Q,r<q){g≤r}=∪_(r∈Q,r<q)(X\\{g>r})。所以所有开集的原像均可测。',
      r'固定任意 a∈R。对有理 q>a 与整数 N≥1，令 E_(q,N)=∩_(n≥N){x:f_n(x)>q}。各 {f_n>q} 可测，σ 代数对可数交封闭，故 E_(q,N) 可测；再令 E=∪_(q∈Q,q>a)∪_(N≥1)E_(q,N)，它仍可测。',
      r'若 f(x)>a，由有理稠密性可取 q∈Q 使 a<q<f(x)。取 δ=(f(x)−q)/2>0。由 f_n(x)→f(x)，存在 N 使 n≥N 时 |f_n(x)−f(x)|<δ，故 f_n(x)>f(x)−δ>q。因此 x∈E_(q,N)⊆E。',
      r'反过来，若 x∈E，则存在 q∈Q、q>a 与 N，使所有 n≥N 都有 f_n(x)>q。令 n 趋于无穷并使用 f_n(x)→f(x)，得到 f(x)≥q>a，故 x∈{f>a}。因此 {f>a}=E。',
      r'对每个实数 a，集合 {f>a} 可测。由第一步判据，f 的每个开集原像可测，即 f 是 Borel 可测函数。结论限于逐点收敛到有限实值函数；扩展实值版本还须处理无穷阈值。$\\square$')

    P('egorov','analysis/measurable-functions analysis/function-sequences analysis/integration-limits','Egorov 定理',r'设 (X,Σ,μ) 是有限测度空间，f_n 与 f 为实值可测函数，且 f_n→f 几乎处处。则对每个 ε>0，存在可测集 F⊆X，使 μ(X\F)<ε，并且 f_n 在 F 上一致收敛到 f。','axiom-measure measure-continuity measure-countable-subadditivity pointwise-limit-measurable','对每个精度 1/k，取函数列从某个下标起在几乎全体点上都进入该精度带；有限测度下连续性使这些集合的大测度部分最终出现。',
      r'取可测零集 N，使对每个 x∈X\N 都有 f_n(x)→f(x)。若原“几乎处处”定义只给出包含异常点的零集，直接采用该可测零集。固定 k,N₀∈N，定义 A_(k,N₀)=(X\N)∩∩_(n≥N₀){x:|f_n(x)−f(x)|≤1/k}。绝对值差是可测函数的连续复合，故每个阈值集可测；可数交后 A_(k,N₀) 仍可测。',
      r'固定 k，集合 A_(k,N₀) 随 N₀ 递增。其并为 X\N：包含关系显然；反过来，对任意 x∈X\N，收敛定义给出某个 N₀，使所有 n≥N₀ 的误差小于 1/k，因而 x∈A_(k,N₀)。',
      r'由测度对递增集列的下连续性，μ(A_(k,N₀))↑μ(X\N)=μ(X)。因此可选 N_k，使 μ((X\N)\A_(k,N_k))<ε/2^(k+1)。令 F=∩_(k≥1)A_(k,N_k)。它可测，且 X\F=N∪∪_(k≥1)((X\N)\A_(k,N_k))。可数次可加性给 μ(X\F)≤μ(N)+Σ_(k≥1)ε/2^(k+1)=ε/2<ε。',
      r'验证一致收敛：给定 δ>0，取 k 使 1/k<δ。若 n≥N_k 且 x∈F⊆A_(k,N_k)，定义即给 |f_n(x)−f(x)|≤1/k<δ。该 N_k 与 x 无关，所以在 F 上一致收敛。有限测度假设用于令 μ(A_(k,N₀)) 趋于有限的 μ(X) 并控制补集；在无限测度空间此结论一般不成立。$\square$')

    P('continuous-borel-measurable','analysis/measurable-functions analysis/continuity-uniform','连续映射关于 Borel σ 代数可测',r'设 X 是拓扑空间，赋予其 Borel σ 代数；若 f:X→R 连续，则 f 关于 X 的 Borel σ 代数与 R 的 Borel σ 代数可测。','axiom-topology axiom-measure','把 f 原像可测的实数子集收集成 σ 代数；该 σ 代数含所有开集，故含由开集生成的全部 Borel 集。',
      r'记 B(X) 为由 X 的开集生成的 Borel σ 代数。定义 C={A⊆R:f⁻¹(A)∈B(X)}。由于 f⁻¹(R)=X，R∈C；且 f⁻¹(R\A)=X\f⁻¹(A)，若 A∈C 则补集也在 C。',
      r'若 A_j∈C，则 f⁻¹(∪_(j≥1)A_j)=∪_(j≥1)f⁻¹(A_j)。B(X) 对可数并封闭，因此并集也在 C。以上说明 C 是 R 上的 σ 代数。',
      r'若 U⊆R 开，连续性的定义给出 f⁻¹(U) 在 X 中开；每个开集都属于 B(X)，所以 U∈C。于是 C 是一个包含所有实数开集的 σ 代数。Borel σ 代数 B(R) 是包含所有开集的最小 σ 代数，故 B(R)⊆C。',
      r'因此任意 B∈B(R) 都满足 f⁻¹(B)∈B(X)，这正是 f 的 Borel 可测性。若 X 另给一个比 B(X) 更小的 σ 代数，连续性本身不能保证相对于那个 σ 代数可测。$\square$')

    P('dirichlet-indicator','analysis/measurable-functions analysis/lebesgue-integral analysis/integration-calculus','有理数指标函数的可测性与两种积分',r'在 [0,1] 上定义 D(x)=1（x 有理）及 D(x)=0（x 无理）。则 D 是 Borel 可测，Lebesgue 可积且积分为 0，但不是 Darboux-Riemann 可积。','axiom-measure axiom-lebesgue axiom-riemann axiom-natural rational-density archimedean','有理点集是零测的可数 Borel 集；而每个非退化区间同时含有有理数和无理数。',
      r'有理数可写成 p/q，其中 p∈Z、q∈N。整数对可按 |p|+q 递增分层，每一层有限，故可数；其像 Q∩[0,1] 至多可数。单点集在 [0,1] 中闭，故 Q∩[0,1] 是闭集的可数并，属于 Borel σ 代数。对任意 Borel 集 B⊆R，D⁻¹(B) 只可能是 ∅、Q∩[0,1]、其补集或全体，皆 Borel，所以 D 可测。',
      r'每个单点 {q} 的 Lebesgue 测度为零：对每个 δ>0，它包含在 [q−δ,q+δ]∩[0,1] 中，该区间测度至多 2δ；由单调性并令 δ↓0 得 μ({q})=0。将有理数集写成单点的可数并，测度的可数次可加性（或由不交化后可数可加性）给 μ(Q∩[0,1])=0。D 是该零测集的指标函数，故按非负简单函数积分定义，∫_[0,1]D dμ=μ(Q∩[0,1])=0，当然有限。',
      r'现证任意开区间 (a,b)⊆[0,1]、a<b 都同时含有有理数和无理数。有理数由稠密性直接得到。再取 q∈Q 使 a<q<(a+b)/2。整数平方的奇偶性证明 √2 无理：若 √2=u/v 为既约整数分数，则 u²=2v² 使 u 为偶数；写 u=2w 后得 v²=2w²，v 也为偶数，矛盾。',
      r'由 Archimedes 性质取 n∈N 充分大，使 0<√2/n<b−q。则 x=q+√2/n 满足 a<x<b；若 x 有理，则 √2=n(x−q) 有理，与已证矛盾。因此每个这样的区间含无理点。',
      r'任取 [0,1] 的分割。每个正长度小区间内 D 的上确界为 1、下确界为 0，所以每个分割的 Darboux 上和都是 ΣΔx=1，下和都是 0。上积分 1 与下积分 0 不相等，依 Darboux 可积定义，D 不黎曼可积。证明同时说明域与测度：更换区间或更换测度时，积分结论须重新检查。$\square$')

    P('measurable-algebra-operations','analysis/measurable-functions analysis/lebesgue-integral','可测函数的代数运算封闭性',r'在可测空间 (X,Σ) 上，若有限实值 f,g 可测，则 f+g、f−g、fg、|f|、max(f,g)、min(f,g) 及任意常数倍 cf 都可测。','axiom-measure pointwise-limit-measurable continuous-borel-measurable','先用有理数阈值表达和函数的上水平集，再用连续函数复合及平方恒等式处理其他运算。',
      r'用已证的上水平集判据，函数 h:X→R 可测等价于所有 {h>a} 可测。固定 a∈R。我们证明 {f+g>a}=∪_(q∈Q)({f>q}∩{g>a−q})。若 f(x)+g(x)>a，则 a−g(x)<f(x)，有理稠密性给 q 使 a−g(x)<q<f(x)，故 x 在右侧。反之，右侧某个 q 满足 f(x)>q 且 g(x)>a−q，相加即得 f(x)+g(x)>a。',
      r'右侧是可数个可测集交的并，属于 Σ，所以每个 {f+g>a} 可测，f+g 可测。若 c>0，{cf>a}={f>a/c}；若 c<0，{cf>a}={f<a/c}，而 {f<b}=∪_(r∈Q,r<b){f≤r}=∪_(r∈Q,r<b)(X\{f>r})，仍可测。c=0 时 cf 是常值零函数，可测。于是 −g 与 f−g 均可测。',
      r'对任意 a，{max(f,g)>a}={f>a}∪{g>a}；且 {min(f,g)>a}={f>a}∩{g>a}，所以最大值与最小值可测。绝对值满足 |f|=max(f,−f)，也可测。',
      r'若 u 可测且 φ:R→R 连续，则 φ∘u 可测：对任意 Borel 集 B，φ⁻¹(B) 是 Borel 集（连续映射的逆像把开集送到开集，并与补、可数并相容）；再由 u 的可测性，u⁻¹(φ⁻¹(B))∈Σ。特别 u² 可测。由恒等式 fg=((f+g)²−(f−g)²)/4，乘积也可测，因为前面已证明平方、差及常数倍保持可测。这里函数有限值，故各代数表达处处有定义；商函数须另处理分母零点。$\square$')

    P('measure-countable-subadditivity','analysis/measures analysis/sigma-algebras','测度的可数次次可加性',r'对任意测度空间 (X,Σ,μ) 与可测集列 A_n，有 μ(∪_(n≥1)A_n)≤Σ_(n≥1)μ(A_n)，允许无穷。','axiom-measure','把集合列逐项去除以前出现的部分，得到不交化，再用测度单调性与可数可加性。',
      r'令 D₁=A₁，并对 n≥2 令 D_n=A_n\(∪_(j<n)A_j)。σ 代数对有限并及差封闭，所以 D_n 可测。若 i<n，则 D_n 排除了 A_i，故 D_i 与 D_n 不交；逐项检查也得 ∪_nD_n=∪_nA_n。',
      r'先由测度公理推出单调性：若 E⊆F 且二者可测，则 F=E∪(F\E) 是不交并，于是 μ(F)=μ(E)+μ(F\E)≥μ(E)，等式在无穷值下按扩展非负实数理解。因此 μ(D_n)≤μ(A_n)。',
      r'对不交列 D_n 用可数可加性，μ(∪A_n)=μ(∪D_n)=Σμ(D_n)≤Σμ(A_n)。最后的不等式可先对有限部分和逐项比较，再取非降极限；若右侧为无穷，结论直接成立。$\square$')
    P('generated-sigma-algebra','analysis/sigma-algebras analysis/measures','生成 σ 代数的交表示与最小性',r'给定集合 X 及其子集族 C，包含 C 的 σ 代数至少有一个；所有这类 σ 代数的交仍为 σ 代数，且是包含 C 的最小 σ 代数，记为 σ(C)。','axiom-set axiom-measure','幂集给出候选族非空；逐项从 σ 代数公理验证交仍封闭。',
      r'令 F={S⊆P(X):S 是 σ 代数且 C⊆S}。幂集 P(X) 本身是 σ 代数并包含 C，所以 F 非空。定义 S₀=∩_(S∈F)S。',
      r'每个 S∈F 都含 X，故 X∈S₀。若 A∈S₀，则 A 属于每个 S，故 X\A 属于每个 S，因而属于 S₀。若 A_n∈S₀ 对所有 n 成立，则每个 S 都含全部 A_n，并由其对可数并封闭含 ∪A_n；所以 ∪A_n∈S₀。故 S₀ 是 σ 代数。',
      r'由于 C 被每个 F 中的成员包含，C⊆S₀。若 T 是任意包含 C 的 σ 代数，则 T∈F；交 S₀ 因而包含于 T。故 S₀ 包含 C 且包含于每个其他候选 σ 代数，是唯一最小者，定义 σ(C)=S₀。$\square$')
