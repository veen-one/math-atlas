"""Integrality, Zariski's lemma and the two Nullstellensatz forms."""
def register(P, BASES):
    BASES['def-integral-extension']=dict(title='整元素与代数闭域定义',statement='含幺交换环扩张 R⊆S 中，s 对 R 整指 s 满足系数在 R 中的首一多项式。代数闭域 k 指每个正次数 k 系数多项式在 k 中有根。理想根式 √I={f:存在正整数m使f^m∈I}；V(I) 为全部 I 中多项式的共同 k 点零集，I(X) 为在点集 X 上全部消失的多项式理想。')
    P('finite-integral-algebra','algebra/modules numbertheory/algebraic-integers','有限个整元素生成的代数有限及整性传递到其元素',r'若 s₁,…,s_m 对 R 整，则 S=R[s₁,…,s_m] 是有限生成 R-模，且每个 s∈S 对 R 整。若这样的 S 是域，则 R 也是域。','def-integral-extension axiom-vector','各首一关系压低单项式次数，乘法在有限生成模上的矩阵关系再给首一湮灭多项式。',
      r'设 s_i 满足次数 d_i 的首一关系。反复用该关系消去高次幂，所有单项式都化为 R 线性组合，指数各小于 d_i。因此有限个这些单项式生成 S，且包含1，记为 u₁,…,u_N。',
      r'固定 s∈S，将每个 su_j 写成生成元的线性组合，得到矩阵关系 (sI−A)u=0，其中 A 的元素在 R 中。伴随矩阵恒等式给 det(sI−A)u_j=0 对每个 j。因为1也由 u_j 生成，故 det(sI−A)=0。行列式按置换展开及伴随恒等式可在任意交换环逐项验证；该行列式作为 s 的多项式首一，证明 s 整。',
      r'若 S 是域，对任意非零 r∈R，r⁻¹∈S 整，满足 (r⁻¹)^d+a_(d−1)(r⁻¹)^(d−1)+…+a₀=0。乘 r^(d−1)，得到 r⁻¹=−a_(d−1)−a_(d−2)r−…−a₀r^(d−1)∈R。因此 R 中每个非零元素可逆，是域。$\square$')
    P('zariski-lemma','algebra/field-extensions geometry/coordinate-rings','Zariski 引理',r'若域 L 同时是 k 上有限生成的交换代数，则 L/k 为有限代数扩张。','finite-integral-algebra minimal-polynomial polynomial-bezout def-integral-extension','若生成元中有超越部分，清除其余代数关系的分母后，会迫使一个明显不是域的局部化成为域。',
      r'从有限代数生成元中选最大代数无关子集 t₁,…,t_r，其余记 α₁,…,α_m。每个 α_i 对 F=k(t₁,…,t_r) 代数：否则添入它仍代数无关，与最大性矛盾。令 A=k[t₁,…,t_r]，它是多项式环，F 为其分式域。',
      r'把各 α_i 的首一代数关系的有限个系数分母相乘为非零 f∈A，令 R=A[1/f]。这些 α_i 都对 R 整。因 L 原本等于 k[t₁,…,t_r,α₁,…,α_m] 且是域，包含1/f，所以 L=R[α₁,…,α_m]。前引理迫使 R 是域。',
      r'若 r≥1，R 实际不是域。k[t₁] 中首一不可约多项式有无穷多个：若只有有限个 q_i，非恒定多项式 1+t₁∏q_i 的任一不可约因子都不在其中，因为它模每个 q_i 都等于1；不可约因子的存在由次数归纳。取 f 视作其余变元的多项式的一个非零 k[t₁] 系数，选不可约 q∈k[t₁] 不整除该系数。则 q 不整除 f。',
      r'商 A/(q) 是域 k[t₁]/(q) 上的多项式环，故为整环，所以 q 为素元。若 q 在 R 可逆，则 1/q=g/f^N，某 g∈A，交叉相乘 f^N=qg，与 q 不整除 f 矛盾。因此 R 非域，排除 r≥1。',
      r'故 r=0，全部有限生成元对 k 代数，有限次单扩张的次数乘法给 [L:k]<∞，即有限代数扩张。$\square$')
    P('weak-nullstellensatz','geometry/algebraic-varieties-geometry geometry/coordinate-rings algebra/prime-ideals','弱 Hilbert 零点定理',r'代数闭域 k 上 k[x₁,…,x_n] 的每个极大理想都为 (x₁−a₁,…,x_n−a_n)，某 a∈k^n。因此每个真理想有共同 k 点零点。','zariski-lemma maximal-prime-quotient axiom-zorn','对极大理想取商，Zariski 引理使其为代数扩张，代数闭性迫使商域就是 k。',
      r'设极大理想 m 的商域 L=k[x]/m。常数域 k 单射进入 L（非零常数不可落入真理想），而 L 由各变量的商类有限代数生成。Zariski 引理给有限代数扩张 L/k。代数闭性使每个代数元素的不可约最小多项式次数一，所以 L=k。令 x_i 的像为 a_i∈k。',
      r'每个 x_i−a_i 落入 m，反向对任意多项式 h，逐变量相减或平移变量展开可得 h(x)−h(a)∈(x_i−a_i)。因此求值同态的核恰为这个点理想；m 中元素的求值为零，故 m 就是点理想。',
      r'任意真理想 I 包含于极大理想：所有含 I 的真理想按包含排序，链的并仍真，因为若包含1则某个成员已含1；Zorn 给极大元。于是 I 中多项式都在对应点 a 消失，得到共同零点。$\square$')
    P('strong-nullstellensatz','geometry/algebraic-varieties-geometry geometry/coordinate-rings algebra/prime-ideals','强 Hilbert 零点定理',r'代数闭域 k 上任意理想 I⊆k[x₁,…,x_n] 满足 I(V(I))=√I。因此代数集与根式理想通过 V、I 互为逆序对应。','weak-nullstellensatz def-integral-extension','加入新变量和关系1−tf；若 f 在零点集消失，则新理想无零点，只能是整个环。',
      r'若 f^m∈I，则对每个 a∈V(I)，f(a)^m=0，域无非零幂零元给 f(a)=0，所以 √I⊆I(V(I))。',
      r'反向取在 V(I) 消失的 f。若 f 是零多项式，已在 √I。否则在 k[x,t] 中取 J=(I,1−tf)。若 J 真，弱零点定理给 (a,b) 使所有 I 中多项式在 a 为零，且1−bf(a)=0；但 f 在 V(I) 消失给 f(a)=0，矛盾。因此1∈J。',
      r'理想生成的定义给有限恒等式1=Σ_jA_j(x,t)h_j(x)+B(x,t)(1−tf(x))，h_j∈I。在分式域中代入 t=1/f，后一项消失。乘以足够高 f^N 清掉各 A_j(x,1/f) 的分母，得到 f^N=Σ_jC_j(x)h_j(x)∈I。若只需N=0则1∈I，此时也有f∈I；故总能选正整数幂，得到 f∈√I。',
      r'两包含给等式。对代数集 X=V(J)，有 V(I(X))=X：一侧因 I(X) 全在 X 消失，另一侧由 J⊆I(X) 得到。对根式理想 I，已证 I(V(I))=I。两运算随包含反向，故给所述对应。$\square$')
