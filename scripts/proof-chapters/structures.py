"""Foundational structural proofs for the algebra chapters."""
def register(P, BASES):
    BASES.update({'def-chain':dict(title='链复形、链映射与模的定义',statement='使用环上的模、模同态与商模的定义。链复形的微分 d_n:C_n→C_(n-1) 满足 d_(n-1)d_n=0；链映射与微分交换；H_n(C)=ker d_n/im d_(n+1)。短正合列在每个次数上要求单射、像等于核、满射。'),
                  'def-category':dict(title='范畴、函子与泛性质的定义',statement='范畴有对象、态射、结合的复合与恒等态射；函子保持复合和恒等；自然变换逐对象给态射且满足自然性方块。积或其他泛对象按相应唯一分解性质定义。')})
    P('commutator-jacobi','algebra/lie-algebras algebra/lie-bracket','结合代数的交换子构成李代数',r'任意域上的结合代数，以 [A,B]=AB-BA 为括号，满足双线性、[A,A]=0 及 Jacobi 恒等式。','def-ring-field axiom-vector','把三组双重括号完全展开，按相同乘积顺序两两抵消。',
      r'分配律给出对每个变量的线性；[A,A]=AA-AA=0，所以括号交错。在特征不为 2 时这也等价于通常反对称条件，任意特征下仍有 [A,B]=-[B,A]。',
      r'按结合律省去乘积括号，展开 [A,[B,C]]=ABC-ACB-BCA+CBA；另两项为 [B,[C,A]]=BCA-BAC-CAB+ACB 与 [C,[A,B]]=CAB-CBA-ABC+BAC。',
      r'将三式相加，每个三重乘积出现一次正号和一次负号，结果为零，故 Jacobi 恒等式成立。这里没有假定一般李括号满足结合律；结合的是原来的代数乘法。$\square$')
    P('representation-kernel','algebra/group-representations algebra/invariant-subspaces','表示的核与不变子空间上的限制',r'群表示 ρ:G→GL(V) 的核为正规子群；若 W⊆V 为不变子空间，则限制与商空间分别得到 W 和 V/W 上的表示。','first-isomorphism axiom-vector','同态核的结论直接应用于表示；商表示的关键是换代表后差仍落在不变子空间。',
      r'ρ 是群同态，群第一同构定理中对核的证明给出正规性，并有 G/kerρ 同构于表示像。',
      r'W 不变意味着 ρ(g)W⊆W，对 g⁻¹ 应用同一条件再作用 ρ(g)，得到相反包含，因此等于。限制算子在 W 上可逆，逆为 ρ(g⁻¹) 的限制，并保持群乘法。',
      r'定义商作用 g·(v+W)=ρ(g)v+W。若 v-v′∈W，不变性保证两像之差在 W，故良定义。乘法及恒等作用由原表示继承，逆由 g⁻¹ 给出，所以也是表示。$\square$')
    P('maschke','algebra/irreducible-representations algebra/invariant-subspaces','Maschke 定理',r'有限群 G 在有限维域 F 上的表示，若特征 F 不整除 |G|，则每个不变子空间有不变直和补，表示可分解为不可约表示的有限直和。','basis-extension representation-kernel','把任意投影对群平均，得到与群作用可交换的投影。',
      r'取不变子空间 W，把其基扩成 V 的基，可构造线性投影 P:V→W 且 P 在 W 上为恒等。因 |G| 在 F 可逆，定义 Q=|G|⁻¹Σ_(g∈G)ρ(g)Pρ(g)⁻¹。',
      r'每项的像都在 W；对 w∈W，ρ(g)⁻¹w 仍在 W，所以每项在 w 上的值均为 w，从而 Qw=w。因此 Q²=Q，且 im Q=W。',
      r'对 h∈G，ρ(h)Qρ(h)⁻¹ 只是用 hg 重新排列总和，所以等于 Q。故 ker Q 不变。每个 v=(v-Qv)+Qv，前者在核、后者在 W，交集只有零，所以 V=kerQ⊕W。',
      r'若表示非零且可约，选非平凡不变子空间并分拆成两个更低维表示，对维数归纳，最终均不可约；零表示是空直和。特征条件用于除以 |G|，不能省略。$\square$')
    P('schur-lemma','algebra/irreducible-representations algebra/characters','Schur 引理的同构形式',r'两个非零不可约表示之间的 intertwiner T，若非零则是表示同构。若底域上 T 的源与目标相同且 T 存在特征值 λ，则 T=λI。','rank-nullity representation-kernel','核与像因交换表示而不变，不可约性迫使它们退化到零或全空间。',
      r'交换关系 Tρ_V(g)=ρ_W(g)T 给出：若 Tv=0，则 Tρ_V(g)v=0，所以核不变；若 w=Tv，则 ρ_W(g)w=Tρ_V(g)v，所以像不变。',
      r'T 非零，核不能是整个 V，只能为零；像非零，只能是整个 W。因此 T 双射。把交换关系左右用逆复合，也可见 T⁻¹ 保持表示，所以是表示同构。',
      r'若 V=W 且 λ 是特征值，S=T-λI 仍交换表示且有非零核。第一部分说明 S 若非零必须单射，与非零核矛盾，故 S=0。此陈述不预设任意底域的算子总有特征值；代数闭域上的通常标量结论需再使用相应根存在结论。$\square$')
    P('character-class-function','algebra/characters algebra/group-representations','特征标在共轭类上为常值且可加',r'有限维表示的特征标 χ(g)=tr ρ(g)，对共轭不变；直和表示的特征标等于各特征标之和，χ(e)=dim V。','axiom-vector','先逐项验证 tr(AB)=tr(BA)，再用于相似变换。',
      r'对方阵 A、B，tr(AB)=Σ_iΣ_j a_ij b_ji。交换有限求和顺序并用底域乘法交换，等于 Σ_jΣ_i b_ji a_ij=tr(BA)。',
      r'因此 tr(SAS⁻¹)=tr(AS⁻¹S)=tr A。表示中 ρ(hgh⁻¹)=ρ(h)ρ(g)ρ(h)⁻¹，故 χ(hgh⁻¹)=χ(g)，也说明特征标与换基无关。',
      r'直和矩阵按两块对角排列，迹为两块迹之和。单位元对应单位矩阵，其迹是维数乘底域单位元；在特征零时通常直接识别为整数维数。$\square$')
    P('noetherian-equivalence','algebra/noetherian algebra/ideals','诺特条件的等价形式',r'交换环 R 的所有理想有限生成，当且仅当每条理想升链最终稳定。','def-ring-field axiom-natural axiom-dependent-choice','链的并是理想，有限生成元集中在有限一层；反向若不能有限生成就不断添加新元素。',
      r'设所有理想有限生成，对升链 I₁⊆I₂⊆…，令 I=∪I_n。任意有限加减和环乘只涉及有限层，取较大下标即可验证 I 为理想。若 I=(a₁,…,a_r)，每个生成元来自某层，取这些下标的最大值 N，便有 I⊆I_N，故此后全部等于 I_N。',
      r'反向假设升链稳定，若某理想 I 不能有限生成，先选 a₁∈I。对已选 a₁,…,a_n，因其生成理想仍非 I，可选 a_(n+1) 在 I 中但不在其张成理想，得到严格升链，矛盾。因此每个理想有限生成。这里使用通常集合论中的可数选择，作为逐次选择的基础约定，若研究不含选择的集合论需另行区分。$\square$')
    P('hilbert-basis','algebra/noetherian algebra/polynomial-rings','Hilbert 基定理',r'若交换环 R 诺特，则 R[x] 诺特；重复应用可得任意有限个变元的多项式环也诺特。','noetherian-equivalence def-ring-field','按最高次系数组织一条理想升链，在稳定层之后反复消去最高项。',
      r'取 R[x] 的理想 J。令 A_n 为 J 中次数至多 n 的多项式的 x^n 系数所成集合，包含零。系数运算使其为 R 的理想；乘 x 说明 A_n⊆A_(n+1)。由诺特升链条件，存在 N，使 n≥N 时 A_n=A_N。',
      r'对每个 0≤n≤N，取 A_n 的有限生成元 a_ni，按定义选择 f_ni∈J，次数≤n，且 x^n 系数为 a_ni。考虑这些有限多个 f_ni 生成的多项式理想 K⊆J。',
      r'若 f∈J 次数 d≥N，其首系数属于 A_d=A_N，可写为 Σ_i r_i a_Ni。于是 f-Σ_i r_i x^(d-N)f_Ni 的最高项消去，次数下降。若 d<N，则使用 A_d 对应的 f_di 同样消项。',
      r'对次数归纳，反复下降后到零，说明 f∈K。因此 J=K 有限生成。J 任意，R[x] 诺特；多变元版本按变元数归纳，基底为 R。$\square$')
    P('homology-defined','algebra/chain-complexes algebra/homology-groups','同调群的良定义与正合判别',r'链复形 C 的边界群 B_n=im d_(n+1) 包含于循环群 Z_n=ker d_n，因此 H_n=Z_n/B_n 有定义，且 H_n=0 当且仅当复形在 C_n 正合。','def-chain','微分平方为零保证每个边界都闭合，商为零恰好说明每个闭合链都是边界。',
      r'若 z=d_(n+1)c，则 d_n z=d_n d_(n+1)c=0，因此 B_n⊆Z_n。核与像都是子模，模商因而有定义。',
      r'若 H_n=0，每个 z∈Z_n 的商类为零，所以 z∈B_n，故 Z_n=B_n。反向若两子模相等，商显然为零。此等式就是 im d_(n+1)=ker d_n 的正合定义。$\square$')
    P('chain-map-homology','algebra/chain-complexes algebra/homology-groups foundations/functors','链映射诱导同调映射',r'链映射 f:C→D 在每个次数诱导良定义的模同态 H_n(f):H_n(C)→H_n(D)，[z]↦[f_n(z)]，且保持恒等和复合。','homology-defined def-chain','先看循环被送到循环，再看同类代表的差被送到边界。',
      r'若 d_Cz=0，则 d_D f(z)=f(d_Cz)=0，所以 f(z) 是循环。若 z′-z=d_Cc，则 f(z′)-f(z)=f(d_Cc)=d_D f(c)，差为边界。因此映射不依赖代表。',
      r'模线性性由 f_n 传下；恒等链映射显然保持每个商类。对 f:C→D、g:D→E，有 [g(f(z))] 同时是 H_n(g∘f)([z]) 和 H_n(g)∘H_n(f)([z])，所以保持复合，给出同调函子。$\square$')
    P('chain-homotopy','algebra/chain-complexes algebra/homology-groups geometry/homotopy','链同伦映射诱导相同同调映射',r'若链映射 f,g:C→D 满足 f-g=d_Ds+sd_C，其中 s_n:C_n→D_(n+1)，则 H_n(f)=H_n(g) 对所有 n 成立。','chain-map-homology','将同伦公式作用于循环后，第二项消失，剩下一个边界。',
      r'任取循环 z∈C_n，有 d_Cz=0。因此 f_n(z)-g_n(z)=d_D s_n(z)+s_(n-1)d_Cz=d_D s_n(z)。',
      r'右侧是 D 中的边界，所以 f_n(z)、g_n(z) 代表同一同调类。所有类都有循环代表，故两个诱导映射相同。若两复形间映射的两个复合分别链同伦于恒等，同调函子保持复合，便给出互逆同调同构。$\square$')
    P('long-exact-homology','algebra/exact-sequences algebra/homology-groups algebra/derived-functors','短正合链复形的长正合同调列',r'若 0→A→B→C→0 为逐次数短正合链复形，则存在连接同态 δ:H_n(C)→H_(n-1)(A)，使 …→H_n(A)→H_n(B)→H_n(C)→H_(n-1)(A)→… 正合。','chain-map-homology homology-defined','提升 C 中循环到 B，它的边界因投影为零而来自 A；逐个位置追踪核与像。',
      r'记单射 i、满射 p。对循环 c∈C_n，选 b∈B_n 使 pb=c。因 p(db)=dc=0，逐度正合性给唯一 a∈A_(n-1) 满足 ia=db。又 i(da)=d(ia)=d²b=0，单射使 da=0。定义 δ[c]=[a]。',
      r'若换提升 b 为 b+i(u)，则 a 变为 a+du，不改类。若 c 换为 c+d(v)，提升 v 到 w∈B_(n+1)，可把 b 换成 b+dw，其边界不变；结合第一种变更说明与代表也无关。加法及数乘可选择提升的加法及数乘，故 δ 是模同态。',
      r'在 H_n(B) 处：来自 i 的类投影为零。反之若循环 b 的投影是边界 dc，则提升 c 到 v，b-dv 投影零，写为 i(a)。其微分零且 i 单射，使 a 为循环。因此 [b] 来自 H_n(A)。',
      r'在 H_n(C) 处：若 c=pb 且 b 循环，δ[c]=0。反之若 δ[c]=[a]=0，a=du，则对应提升 b 满足 d(b-i(u))=0，且投影仍为 c，所以 [c] 来自 H_n(B)。',
      r'在 H_(n-1)(A) 处：若 a 为连接像，则 ia=db，是边界。反之若循环 a 满足 ia=db，则 p(b) 是循环，按连接构造 δ[p(b)]=[a]。三处核等于像，且次数 n 任意，于是得到整个长正合列。$\square$')
    P('universal-unique','foundations/limits-colimits foundations/objects-morphisms','泛性质确定的积在唯一同构意义下唯一',r'范畴中若 (P,p₁,p₂) 和 (Q,q₁,q₂) 都是同一对对象 A,B 的积，则唯一存在同时保持两投影的同构 P→Q。','def-category','两次使用泛性质构造正反映射，再用分解唯一性迫使复合为恒等。',
      r'用 Q 的泛性质，P 上的两投影给唯一 u:P→Q，使 q_i u=p_i。用 P 的泛性质，同样给唯一 v:Q→P，使 p_i v=q_i。',
      r'对 vu:P→P，有 p_i vu=q_i u=p_i，恒等态射也满足相同两投影条件。P 的唯一性使 vu=id_P。同理 uv=id_Q，因此 u 是同构，v 是其逆。',
      r'任意另一保持投影的 P→Q 映射都由 Q 的泛性质等于 u，因此该同构在要求保持结构的意义下唯一。只说对象“相同”会丢失这里的同构含义。$\square$')
    P('natural-composition','foundations/natural-transformations foundations/functors','自然变换的复合仍自然',r'若 α:F⇒G、β:G⇒H 是同一源范畴到同一目标范畴的自然变换，则 (βα)_X=β_Xα_X 定义自然变换 F⇒H。','def-category','把两个自然性方块按同一态射拼接，逐次使用交换关系。',
      r'任取源范畴态射 f:X→Y。α 自然性给 G(f)α_X=α_YF(f)，β 自然性给 H(f)β_X=β_YG(f)。',
      r'结合态射复合的结合律，H(f)(β_Xα_X)=β_YG(f)α_X=β_Yα_YF(f)，这正是复合分量的自然性。每分量上的恒等态射也满足方块条件，复合的结合律逐分量继承，因而函子与自然变换本身组成函子范畴。$\square$')
    P('biquadratic-five-fields','algebra/fundamental-theorem-galois algebra/finite-groups','双二次扩张的五个中间域',r'K=Q(√2,√3) 对 Q 次数为四，其伽罗瓦群为 Klein 四元群，恰有五个中间域：Q、Q(√2)、Q(√3)、Q(√6)、K。','unique-factorization minimal-polynomial tower-law galois-correspondence','先排除第二个平方根已在第一个二次域中，再数四元群的全部子群。',
      r'由整数素因子分解的指数奇偶性，2、3、3/2 都不是有理数的平方。例如若 (p/q)²=3/2，则 2p²=3q²，两侧素因子 3 的指数分别为偶数与奇数，矛盾，其他两个情形同理。所以 Q(√2)/Q 次数为二。',
      r'若 √3=a+b√2、a,b∈Q，平方得 3=a²+2b²+2ab√2。因 √2 无理，ab=0；b=0 要求 a²=3，a=0 要求 b²=3/2，均不可能。因此 √3 不在 Q(√2) 中，第二层仍为二次，由塔式公式得到总次数四，基为 1、√2、√3、√6。',
      r'该域是 (x²-2)(x²-3) 的分裂域，根全不同，故有限正规可分。两个平方根可分别独立换符号；这些替换保持上述基的乘法关系，给四个不同自同构，群为 (Z/2Z)²。',
      r'按 Lagrange，四元群子群阶只能为 1、2、4。阶一和阶四各一个；三个非单位元各生成一个不同阶二子群，所以共五个子群。用基的系数逐项检查，三个阶二子群固定域分别为 Q(√2)、Q(√3)、Q(√6)，另两端对应 K 与 Q。基本对应保证除此之外没有中间域。$\square$')
