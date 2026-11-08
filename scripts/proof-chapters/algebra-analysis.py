"""Additional textbook proofs, authored explicitly; no placeholder generation."""
def register(P, BASES):
    BASES.update({
        'def-ring-field':dict(title='环、域与多项式的定义',statement='使用含单位交换环、理想、商环、整环、域、域扩张、形式多项式、次数、形式导数及代数元素最小多项式的定义。最小多项式的存在与不可约性在正文证明，不作为额外定理假设。'),
        'def-complex':dict(title='复数、共轭与 Hermitian 内积的定义',statement='复数定义为实数对，按通常规则加乘并取共轭。有限维复向量空间使用标准 Hermitian 内积；本卷约定对第一变量线性。矩阵伴随是共轭转置，Hermitian 指 A*=A，正规指 A*A=AA*。'),
        'def-complete':dict(title='完备、算子与微分方程的定义',statement='完备度量空间指每个柯西列在空间内收敛。巴拿赫空间为完备赋范空间，有界算子指存在统一线性范数界。向量积分按各实坐标的黎曼积分定义，向量微分按坐标定义。'),
    })
    P('ideal-quotient','algebra/ideals algebra/ring-structure','商环与理想判别',r'交换环 R 的加法子群 I 能使陪集按 (a+I)(b+I)=ab+I 良定义，当且仅当 I 是理想；此时 R/I 为交换环。','def-ring-field','检查换代表时乘积差是否仍落在被模掉的集合。',
      r'若 I 是理想，换代表为 a+i、b+j，则乘积差为 aj+bi+ij，三项都在 I；加法换代表后的差为 i+j，也在 I。因此两种运算良定义，结合、交换、分配律和单位元由 R 传下，给出商环。',
      r'反过来，若陪集乘法良定义，对任意 r∈R、i∈I，有 i+I=0+I，因此 ri+I=(r+I)(i+I)=(r+I)(0+I)=I，即 ri∈I。结合已知加法子群条件，这正是理想。$\square$')
    P('maximal-prime-quotient','algebra/prime-ideals algebra/ideals','素理想、极大理想与商结构',r'真理想 I 为素理想当且仅当 R/I 是整环；I 为极大理想当且仅当 R/I 是域。','ideal-quotient','将乘积为零与元素可逆分别翻译为理想中的包含关系。',
      r'商中 (a+I)(b+I)=0 等价于 ab∈I，而 a+I=0 等价于 a∈I。因此无非零零因子恰好翻译为素理想定义，且 I 真保证商非零。',
      r'若 I 极大，取 a∉I。由 a 及 I 生成的理想 I+(a) 严格大于 I，故等于 R；于是 1=i+ra，某 i∈I、r∈R，商中 r+I 是 a+I 的逆，所以商是域。',
      r'若商是域且 I⊊J⊆R，取 a∈J\I。其商类可逆，所以有 r 使 ra-1∈I⊆J；又 ra∈J，故 1∈J，进而 J=R。这证明 I 极大。$\square$')
    P('polynomial-division','algebra/polynomial-rings','域上多项式的带余除法',r'域 F 上给定 f,g∈F[x]、g≠0，唯一存在 q,r，使 f=qg+r，且 r=0 或 deg r<deg g。','def-ring-field axiom-natural','每次消去当前最高次项，次数严格下降；唯一性由次数比较得到。',
      r'若 f=0 或次数已低于 g，取 q=0、r=f。否则设两者首项为 ax^m、bx^n，m≥n。因 b 在域中可逆，减去 (a/b)x^(m-n)g 后，最高项抵消，余多项式次数严格下降。',
      r'对次数归纳，有限次消元后得到低于 g 次数的余式；累计各次减去的倍式即商 q。过程中不会出现无限下降的非负整数次数。',
      r'若 qg+r=q′g+r′，则 (q-q′)g=r′-r。若 q≠q′，左侧次数至少 deg g，而右侧非零时次数小于 deg g，矛盾；所以 q=q′，随之 r=r′。这里用到域上非零首项乘积非零，故乘积次数相加。$\square$')
    P('root-bound','algebra/polynomial-rings numbertheory/points-over-finite-fields','根因式定理与根数上界',r'域上 f(a)=0 当且仅当 x-a 整除 f；非零 n 次多项式在任意扩张域中至多有 n 个不同根。','polynomial-division','一次除式的余式就是代入值，再逐根约去。',
      r'对 f 除以 x-a 得 f=(x-a)q+r，余式 r 为常数。代入 a 得 r=f(a)，所以根与整除等价。',
      r'根数上界对次数归纳。非零常数没有根；n>0 时若没有根已经成立，否则取根 a 并写 f=(x-a)q。对另一个根 b≠a，0=(b-a)q(b)，域无零因子且 b-a 非零，故 q(b)=0。',
      r'q 次数为 n-1，归纳假设使它至多有 n-1 个不同根；加上 a，f 至多有 n 个。论证在扩张域中照样成立，因为系数仍可嵌入该域。$\square$')
    P('polynomial-bezout','algebra/polynomial-rings algebra/ideals','域上一元多项式理想为主理想',r'F[x] 的每个理想都由一个多项式生成；两个不全为零的多项式 f,g 有首一最大公因式 d，且 d=uf+vg。','polynomial-division axiom-natural','取非零理想中次数最低的元素，用余式的更小次数排除未被生成的部分。',
      r'零理想由零生成。非零理想 J 中取次数最小的非零 d，并乘首项系数的逆使其首一。对 h∈J 作带余除法，h=qd+r，则 r=h-qd∈J；若 r 非零便次数更小，矛盾。因此 J=(d)。',
      r'对 J=(f,g) 应用第一部分，得首一生成元 d，且 d=uf+vg。因 f,g∈(d)，d 整除二者；若 c 整除二者，它就整除该线性组合 d。故 d 是首一最大公因式。$\square$')
    P('irreducible-extension','algebra/field-extensions algebra/polynomial-rings algebra/finite-fields','不可约多项式构造单代数扩张',r'若 p∈F[x] 首一不可约、次数 n≥1，则 F[x]/(p) 是域，在其中 α=x+(p) 满足 p(α)=0；它对 F 的基为 1,α,…,α^(n-1)，次数为 n。','polynomial-bezout polynomial-division maximal-prime-quotient','低次代表由带余除法给出，可逆性由与不可约多项式互素给出。',
      r'对非零商类 f+(p)，有 p 不整除 f。不可约性使 gcd(f,p)=1，于是多项式贝祖等式给出 uf+vp=1，商中 u 是 f 的逆。因此商为域，常数嵌入也是单射，因为正次数 p 不整除非零常数。',
      r'带余除法说明每个商类都有次数小于 n 的代表，故所列 n 个幂生成。若这些幂存在非零线性关系，就是一个次数小于 n 的非零多项式属于 (p)，与乘积次数性质矛盾，故线性无关。',
      r'把 x 的商类记为 α，代入 p 得到零类，故 α 是一个根。所有商类均为 α 的多项式，因商是域，这也就是 F(α)。$\square$')
    P('minimal-polynomial','algebra/field-extensions numbertheory/algebraic-numbers','最小多项式及单扩张次数',r'若 α 在 F 的域扩张中代数，则存在唯一首一不可约最小多项式 mα；F(α) 同构于 F[x]/(mα)，次数为 deg mα。','polynomial-bezout root-bound first-isomorphism irreducible-extension','把代入映射的核写成主理想，再用目标域无零因子证明生成元不可约。',
      r'代入映射 ev:F[x]→L，f↦f(α)，保持加乘。其核是理想，代数性使核非零。由主理想结论，它由唯一首一最低次多项式 m 生成；唯一性来自两个首一同次生成元相除后的零余式。',
      r'若 m=uv，且两因子次数都正且小于 m，则 u(α)v(α)=0。L 为域，至少一因子在 α 处为零，与 m 最低次数矛盾。故 m 不可约。',
      r'映射从商环到 F[α] 的对应 f+(m)↦f(α) 良定义、单射、满射且保持运算，这是直接核判别，不依赖把群同构误当环同构。不可约扩张定理说明商为域，所以 F[α] 已是域，等于 F(α)，并给出次数。$\square$')
    P('tower-law','algebra/field-extensions algebra/fundamental-theorem-galois','有限域扩张的塔式公式',r'若 F⊆E⊆L，两个相邻扩张有限，则 [L:F]=[L:E][E:F]。','basis-extension','把上层基与下层基两两相乘，分别证明生成与无关。',
      r'设 e₁,…,e_r 为 E/F 的基，u₁,…,u_s 为 L/E 的基。对任意 z∈L，先写 z=Σ_j a_j u_j，a_j∈E，再写 a_j=Σ_i b_ij e_i，b_ij∈F；故所有 e_i u_j 生成 L/F。',
      r'若 Σ_ij b_ij e_i u_j=0，先按 u_j 分组。上层基的无关性迫使每个 Σ_i b_ij e_i=0；再用下层基无关性，全部 b_ij=0。故乘积列是基，长度 rs，得到公式。$\square$')
    P('splitting-field-exists','algebra/splitting-fields algebra/field-extensions','分裂域的存在与有限性',r'任意域 F 上的非零多项式 f 有有限分裂域：某个有限扩张 L 由 f 的全部根生成，并在 L 中分解成一次因子。','irreducible-extension polynomial-division tower-law axiom-natural','先添加一个不可约因子的根，再对剩余低次多项式归纳。',
      r'每个正次数多项式都含不可约因子：若本身不可约即得；否则分解为两个更低正次数因子，对次数作归纳得到。对某不可约因子 p，用商域构造添加根 α，扩张次数有限。',
      r'在添加后的域里，f=(x-α)g，其中 g 次数减少一。对次数归纳，g 在另一个有限扩张中分裂；塔式公式保证总扩张仍有限。常数多项式已在 F 中分裂，作为归纳起点。',
      r'最终大域中 f 全部分裂。取其中由所有根与 F 生成的子域 L，它仍有限维（是有限维空间的子空间），f 在其中分裂，且任何包含全部根的中间域必包含 L。因此 L 是所需最小分裂域。$\square$')
    P('embedding-extension','algebra/splitting-fields algebra/galois-group','简单代数扩张的嵌入延拓',r'设 τ:E→E′ 为域同构，α 在 E 上代数，最小多项式 m。若 β 是把 m 的系数逐一经 τ 映射所得 τ(m) 的一个根，则 τ 唯一延拓为 E(α)→E′(β)，并满足 α↦β。','minimal-polynomial','用低次多项式表达元素，模最小多项式的关系在系数同构下被保持。',
      r'不可约性在系数同构下保持，否则 τ(m) 的分解可经 τ 的逆拉回 m 的非平凡分解。因此 τ(m) 是 β 的首一最小多项式。',
      r'定义 p(α)↦τ(p)(β)。若 p(α)=q(α)，则 m 整除 p-q；映射系数后 τ(m) 整除 τ(p)-τ(q)，所以两个像相同，定义良好。相反若像相同，反向使用最小多项式及 τ 的逆，得到原元素相同，故单射。',
      r'所有 E′(β) 元素都可写成 β 的多项式，系数来自 E′=τ(E)，所以满射。它保持运算且在 E 上为 τ。任一延拓若要送 α 到 β，必须按此式作用于其多项式，因此唯一。$\square$')
    P('splitting-field-unique','algebra/splitting-fields','分裂域在基域同构意义下唯一',r'若 L、M 都是同一非零 f∈F[x] 的分裂域，则存在固定 F 的域同构 L→M。','splitting-field-exists embedding-extension root-bound','逐个把生成根映入另一分裂域；所有不同根的像最终恰好穷尽另一边的根。',
      r'把 L 写为 F(α₁,…,α_r)，列出 f 在 L 中的全部不同根。从 F 的恒等嵌入开始，假设已构造 E=F(α₁,…,α_j) 到 M 的嵌入 τ。',
      r'α_(j+1) 的 E 上最小多项式 m 整除 f，因为带余除法在该根处余式也为零，最低次数迫使余式零。映射系数后 τ(m) 也整除 f。f 在 M 完全分裂，故其非常数因子 τ(m) 在 M 有根；可用根因式及逐次除法验证所有因子也分裂。选根并应用嵌入延拓引理。',
      r'有限步得到 L→M 的嵌入，像包含 r 个不同根，因为嵌入单射。将 L 中的线性因子分解经嵌入映射后，f 已在像域中完全分裂。因此 M 中的任意根 β 代入这个线性因子乘积，因 M 无零因子，必等于某个已映入的根。故像含 M 的全部生成根，而 M 由这些根生成，嵌入遂满射，是同构。$\square$')
    P('frobenius','algebra/finite-fields numbertheory/points-over-finite-fields','特征 p 的 Frobenius 同态',r'在特征为素数 p 的交换环中，(a+b)^p=a^p+b^p；在域中 a↦a^p 是单射环同态，有限域中是自同构。','euclid-lemma binomial-count def-ring-field axiom-natural','二项式中间系数都被 p 整除，因此在特征 p 中消失。',
      r'二项式公式可对指数归纳：乘以 a+b 后，邻近项系数相加给出组合数递推。对 0<k<p，整数恒等式 k!(p-k)!·C(p,k)=p!，左侧阶乘不被 p 整除，Euclid 引理迫使 p 整除 C(p,k)。',
      r'因此特征 p 中全部中间项为零，得到加法保持；乘法保持来自交换性，单位元也保持。若 a^p=b^p，则 (a-b)^p=0；域无非零幂零元（反复使用无零因子），故 a=b，映射单射。',
      r'有限集合到自身的单射必为满射：像与源等势，不能缺少任何元素。因此有限域上该映射双射，是域自同构。反复迭代亦给 (a+b)^(p^n)=a^(p^n)+b^(p^n)。$\square$')
    P('finite-fields-classification','algebra/finite-fields numbertheory/points-over-finite-fields','有限域的阶数、存在性与唯一性',r'每个有限域的元素数为 p^n，其中 p 素、n≥1。反之，每个 p^n 都有有限域，且同阶有限域彼此同构。','frobenius splitting-field-exists splitting-field-unique root-bound basis-extension lagrange','先由素域计数，再在 x^(p^n)-x 的分裂域中把全部根识别为一个域。',
      r'有限域中 1 的加法生成子群有限，故存在最小正 p 使 p·1=0。若 p=ab 且 1<a,b<p，则 (a·1)(b·1)=0 而两因子非零，矛盾。因此 p 素，素域由整数模 p 构成。有限域作为该素域上的向量空间可取有限基（不断添加无关向量至多选完全部元素），若维数 n，则每个坐标有 p 种选择，共 p^n 个元素。',
      r'给定 q=p^n，在 F_p 上取 f=x^q-x 的有限分裂域 L。形式导数 f′=q x^(q-1)-1=-1；若某根重复，则 (x-a)^2 整除 f，按乘法导数公式会使 f′(a)=0，矛盾。所以恰有 q 个不同根。形式导数的乘法法则直接逐项对单项式相乘验证。',
      r'根集 S={a:a^q=a} 含 0、1。Frobenius 迭代说明对加法、减法、乘法封闭；非零 a 满足 (a^(-1))^q=(a^q)^(-1)=a^(-1)，故对逆也封闭。因此 S 是子域。分裂域由根生成，所以 L=S，恰有 q 个元素。',
      r'若 K 是任意 q 元域，非零元素构成阶 q-1 的乘法群。Lagrange 定理用于单个元素生成的循环子群，给 a^(q-1)=1，故所有元素满足 a^q=a。K 因而也是 x^q-x 在素域上的分裂域。分裂域唯一性给出任意两 q 元域同构。$\square$')
    P('automorphisms-independent','algebra/galois-group','不同域嵌入的线性无关性',r'从域 L 到域 M 的不同嵌入 σ₁,…,σ_m，作为 L 上的 M 值函数，在 M 上线性无关。','def-ring-field axiom-vector','从项数最少的假定线性关系出发，用乘一个测试元素再相减消掉一项。',
      r'若有非零关系，取非零项数最少的一条 Σ_i c_iσ_i(x)=0（对全部 x∈L），删去零系数。只有一项时在 x=1 代入迫使该系数为零，不可能，故项数至少二。',
      r'选两不同嵌入 σ₁、σ_m，它们在某个 a∈L 上取值不同。把原关系在 ax 代入，再减去 σ_m(a) 乘以原关系，得到 Σ_(i<m)c_i[σ_i(a)-σ_m(a)]σ_i(x)=0。',
      r'新关系删掉第 m 项，且第 1 项系数非零，所以是一条非零而项数更少的关系，与最小性矛盾。因此嵌入函数线性无关。$\square$')
    P('artin-fixed-field','algebra/galois-group algebra/fundamental-theorem-galois','Artin 有限自同构群定理',r'设 H 是域 L 的有限自同构群，F=L^H 是所有成员逐点固定的子域，则 [L:F]=|H|。','automorphisms-independent basis-extension rank-nullity','一边用嵌入函数的独立性构造独立元素，另一边用最少支撑的方程解迫使系数落入固定域。',
      r'令 |H|=m，枚举 σ₁,…,σ_m。向量 (σ₁(x),…,σ_m(x)) 随 x∈L 张成整个 L^m：若张成真子空间，取其有限基扩成全空间基，给补基向量指定非零值即可构造非零线性泛函消灭原子空间，产生嵌入函数的非零线性关系，矛盾。',
      r'故可选 x₁,…,x_m 使矩阵 (σ_i(x_j)) 列独立。若 Σ_j a_jx_j=0 且 a_j∈F，对各 σ_i 作用后系数不变，得到该可逆矩阵乘 a 为零，故所有 a_j=0。所以 [L:F]≥m。',
      r'任取 m+1 个元素 y_j。齐次系统 Σ_jσ_i(y_j)c_j=0 有非零 L 值解，由秩—零化度可知。选非零系数个数最少的解，重新编号并缩放使 c₁=1。对任意 τ∈H，作用于方程组后 τσ_i 仅重排全部行，所以 (τ(c_j)) 也是解。',
      r'两解相减得到首系数为零、其余支撑包含于原解支撑的解。若非零，将有更少非零系数，矛盾。因此全部 τ(c_j)=c_j，系数都在 F。取恒等自同构那一行，得 Σ_j y_jc_j=0，是 F 上非平凡关系。',
      r'所以任何 m+1 个元素都相关，而前面有 m 个无关元素；它们必已张成（否则可再加一个无关元素），成为 F 基。故次数恰为 m。$\square$')
    P('galois-embedding-count','algebra/galois-group algebra/field-extensions','有限正规可分扩张的自同构数',r'若 L/F 有限、正规且可分，则 |Aut_F(L)|=[L:F]。任意中间域 E 的 F 嵌入 E→L 都能延拓为 L 的 F 自同构。','embedding-extension tower-law root-bound minimal-polynomial','沿有限生成塔逐次选根，每层可选根数等于该层次数。',
      r'有限扩张可由有限个元素 α₁,…,α_r 生成，例如取一组向量空间基。设已把 E_j=F(α₁,…,α_j) 嵌入 L 并固定 F。下一元素在 E_j 上的最小多项式 m 整除它在 F 上的最小多项式 p。',
      r'系数嵌入后 τ(m) 仍整除 p。正规性使 p 在 L 全部分裂，可分性使各根不同，所以 τ(m) 在 L 有恰好 deg m 个不同根。每个根由简单嵌入延拓引理给出一个且仅一个下一层嵌入。',
      r'从 F 的恒等映射开始，每层选择数为该层次数，最终嵌入总数是次数之积，由塔式公式等于 [L:F]。每个最终嵌入是有限维 F 空间 L→L 的单射线性映射，秩—零化度使其满射，所以是自同构。',
      r'若从中间域 E 的给定 F 嵌入开始，同样把 L 在 E 上有限生成。每次依然可用 F 上的可分且在 L 分裂的最小多项式来保证有根，因而至少一种延拓到 L；最后有限维单射使其自同构。这还证明任意中间 E 的上层 L/E 正规可分：E 上最小多项式整除对应的 F 上可分分裂多项式。$\square$')
    P('galois-correspondence','algebra/fundamental-theorem-galois algebra/galois-group','有限伽罗瓦基本对应定理',r'有限正规可分扩张 L/F 的群 G=Aut_F(L) 的子群 H 与中间域 E 通过 H↦L^H、E↦Aut_E(L) 互为逆序双射，且 [L:L^H]=|H|。','artin-fixed-field galois-embedding-count tower-law','先分别证明两次取固定对象都回到原对象，再比较包含方向。',
      r'对中间域 E，上一引理给 L/E 正规可分，故 |Aut_E(L)|=[L:E]。记 H=Aut_E(L)，则 E⊆L^H。Artin 定理给 [L:L^H]=|H|=[L:E]，塔式公式迫使 [L^H:E]=1，故 L^H=E。',
      r'对任意子群 H≤G，记 E=L^H。显然 H⊆Aut_E(L)。Artin 定理给 [L:E]=|H|，而上层正规可分使 |Aut_E(L)|=[L:E]，有限集包含且等大小，因此 Aut_E(L)=H。',
      r'若 H₁⊆H₂，被较大群固定的元素更少，故 L^(H₂)⊆L^(H₁)。反之 E₁⊆E₂ 时，要固定较大域的条件更多，故 Aut_(E₂)(L)⊆Aut_(E₁)(L)。由已证互逆性得到完整的逆序双射。$\square$')
    P('galois-normal-quotient','algebra/fundamental-theorem-galois algebra/homomorphisms-quotients','正规子群与伽罗瓦商群',r'在有限伽罗瓦扩张 L/F 的对应中，E/F 正规当且仅当 H=Aut_E(L) 正规于 G；此时 E/F 也可分，且 G/H≅Aut_F(E)。','galois-correspondence galois-embedding-count first-isomorphism','用共轭子群的固定域描述中间域在自同构下的移动，再限制自同构。',
      r'任取 σ∈G，逐点展开可知 σ(E)=L^(σHσ⁻¹)：若 x 固定于 H，则 σx 被每个 σhσ⁻¹ 固定，反向用 σ⁻¹ 同理。由基本对应，σ(E)=E 当且仅当 σHσ⁻¹=H。',
      r'若 E/F 正规，对 α∈E，σ(α) 是其 F 上最小多项式的根，正规性使该根仍在 E；再用 σ⁻¹ 得 σ(E)=E，所以 H 正规。',
      r'若 H 正规，则每个 σ 都保持 E。对 α∈E，它的 F 上最小多项式在 L 分裂，任一根 β∈L 给 F(α)→F(β) 的 F 同构；嵌入延拓引理可延拓为某 σ∈G，所以 β=σ(α)∈E。因此 E/F 正规；可分性从 L/F 继承。',
      r'限制映射 G→Aut_F(E) 是群同态，其核恰 H。每个 E 的 F 自同构可延拓到 L，因此限制满射。群第一同构定理给出 G/H≅Aut_F(E)。$\square$')
    P('finite-dimensional-compactness','algebra/spectral-decomposition geometry/compactness','有限维欧氏空间闭有界集的子列紧性',r'在 R^n 或 C^n 中，每个有界序列有收敛子列；若序列属于闭集，极限仍属于该集。非空闭有界集上的连续实函数有最大最小值。','bolzano-weierstrass axiom-metric','逐坐标抽取有限次子列，再用坐标收敛控制欧氏距离。',
      r'实情形先对第一坐标用实有界数列的收敛子列定理，再在该子列上对第二坐标抽取，依次共 n 次。最终子列的所有坐标都收敛，先前收敛性因进一步抽子列而保留。',
      r'对任意 ε>0，有限个坐标都可在同一个下标后控制误差小于 ε/√n，因此欧氏距离小于 ε；n=0 时空间只有一点，无须估计。复情形分成 2n 个实坐标同证。闭集的补开，若极限不在闭集中，其一个邻域排除全体序列项，与收敛矛盾。',
      r'连续函数若在这样的非空集合上无界，可选点 x_k 使 |f(x_k)|>k，抽收敛子列后连续性却给有限函数值极限，矛盾。故 f 有界。取逼近上确界的点列，再抽收敛子列并用连续性，得到某点达到上确界；对 -f 同证最小值。$\square$')
    P('complex-cauchy-schwarz','analysis/hilbert-spaces algebra/vector-spaces','复内积的柯西—施瓦茨与三角不等式',r'对第一变量线性的复内积，有 |〈u,v〉|≤‖u‖‖v‖；因此其诱导范数满足三角不等式。','def-complex axiom-real','减去沿 v 的正交分量；复共轭的摆放由内积线性约定决定。',
      r'v=0 时不等式直接成立。否则令 c=〈u,v〉/‖v‖²。按第一变量线性、第二变量共轭线性展开，得 ‖u-cv‖²=‖u‖²-|〈u,v〉|²/‖v‖²≥0，移项开非负平方根即得结论。',
      r'再展开 ‖u+v‖²=‖u‖²+2Re〈u,v〉+‖v‖²≤‖u‖²+2|〈u,v〉|+‖v‖²≤(‖u‖+‖v‖)²。两侧非负，开方得到三角不等式。正定性及齐次性也由内积公理直接得到，所以确为范数。$\square$')
    P('gram-schmidt','algebra/basis-dimension analysis/hilbert-spaces','Gram–Schmidt 正交化',r'任意有限线性无关列 v₁,…,v_n 可转化为标准正交列 e₁,…,e_n，使每个前缀张成空间相同；适用于实或复内积空间。','complex-cauchy-schwarz basis-extension','按顺序减去已有方向上的投影，剩余向量不可能为零。',
      r'令 w₁=v₁、e₁=w₁/‖w₁‖。若已构造 e₁,…,e_(k-1)，令 w_k=v_k-Σ_(j<k)〈v_k,e_j〉e_j。对每个 i<k 取与 e_i 的内积，正交性使总和只剩第 i 项，故 〈w_k,e_i〉=0。',
      r'若 w_k=0，则 v_k 属于此前 e_j 的张成空间，而按归纳它等于此前 v_j 的张成空间，违背原列无关。所以可令 e_k=w_k/‖w_k‖。',
      r'新向量归一化后仍正交于此前各向量。由定义，新旧前缀的最后一向量只差此前张成空间中的组合及非零比例，故两前缀张成空间相同。有限归纳完成构造。$\square$')
    P('hermitian-spectral','algebra/spectral-decomposition algebra/eigenvalues analysis/spectral-theory','有限维 Hermitian 谱定理',r'复 Hermitian 矩阵 A 有一组标准正交特征向量基，所有特征值为实数；实对称矩阵可取实标准正交特征基。','finite-dimensional-compactness gram-schmidt complex-cauchy-schwarz','在单位球面最大化实 Rayleigh 商，再把算子限制到正交补上归纳。',
      r'Hermitian 性使 〈Av,v〉 等于其共轭，所以为实数。在单位球面上它连续；球面闭有界，前一紧性结论保证存在单位向量 u 取最大值 λ。零维情形为空基，以下设维数正。',
      r'取 v⊥u，考虑实 t 和单位化向量 (u+tv)/‖u+tv‖。其 Rayleigh 商是 [λ+2t Re〈Av,u〉+t²〈Av,v〉]/[1+t²‖v‖²]。在 t=0 取极大，正负差商迫使一次项为零，故 Re〈Av,u〉=0。复情形再以 iv 替换 v，得到虚部也为零；实情形第一步已足够。',
      r'令 w=Au-λu，则 〈w,u〉=0。由上一结论及伴随恒等式，对 v=w 有 〈Aw,u〉=〈w,Au〉=〈w,w+λu〉=‖w‖²=0，所以 w=0，即 Au=λu。',
      r'若 v⊥u，则 〈Av,u〉=〈v,Au〉=0，因此 u 的正交补被 A 保持，限制算子仍 Hermitian。用 Gram–Schmidt 取正交补的标准基，其维数比原空间小一；归纳对限制算子对角化，再加 u，得到全空间正交特征基。每个特征值均由相应单位向量的实 Rayleigh 值给出，故为实数。$\square$')
    P('normal-spectral','algebra/spectral-decomposition analysis/spectral-theory','有限维复正规算子的谱定理',r'复矩阵 A 可被酉矩阵对角化，当且仅当 A 正规，即 A*A=AA*。','hermitian-spectral','把正规算子拆成两个可交换的 Hermitian 部分，在每个特征空间内再次对角化。',
      r'定义 B=(A+A*)/2、C=(A-A*)/(2i)，二者 Hermitian 且 A=B+iC。直接展开得 AA*-A*A=2i(CB-BC)，所以 A 正规当且仅当 BC=CB。',
      r'由 Hermitian 谱定理，空间分成 B 的互相正交特征子空间。若 Bv=bv，则 B(Cv)=C(Bv)=bCv，所以 C 保持每个子空间。C 在每个子空间上的限制仍 Hermitian，可再取其中的标准正交特征基。',
      r'合并这些基得到 B、C 的共同标准正交特征基，因此 A=B+iC 在同一基中对角，酉对角化成立。反向若 A=UDU*、U 酉而 D 对角，则 A*A=UD*DU*=UDD*U*=AA*，因为对角矩阵彼此可交换。$\square$')
    P('projection-closed-subspace','analysis/hilbert-spaces','Hilbert 空间闭子空间的正交投影定理（实值）',r'实 Hilbert 空间 H 的非空闭线性子空间 M，对每个 x∈H 唯一存在 m∈M，使 x-m⊥M；该 m 唯一最小化到 x 的距离。','cauchy-schwarz def-complete axiom-dependent-choice','最小化序列由平行四边形恒等式成为柯西列；闭性与完备性使极限仍留在子空间。',
      r'令 d=inf_(v∈M)‖x-v‖，取 m_n∈M 使 ‖x-m_n‖²→d²。平行四边形恒等式由内积展开得到；用于 x-m_n 与 x-m_k 后，因 (m_n+m_k)/2∈M，得到 ‖m_n-m_k‖²≤2‖x-m_n‖²+2‖x-m_k‖²-4d²→0。',
      r'故 m_n 柯西，H 完备给出极限 m；M 闭保证 m∈M。由三角不等式的反向形式，‖x-m‖=d。任取 v∈M，实数 t 下 ‖x-m-tv‖²≥d²；展开并取正负足够小 t，迫使 〈x-m,v〉=0。',
      r'反之若 x-m⊥M，则对任意 n∈M，‖x-n‖²=‖x-m‖²+‖m-n‖²，所以 m 是最小点，且等号只在 n=m 时成立。这同时证明唯一性。$\square$')
    P('riesz-representation','analysis/hilbert-spaces analysis/linear-operators','实 Hilbert 空间的 Riesz 表示定理',r'实 Hilbert 空间 H 上任意有界线性泛函 ℓ，唯一存在 y∈H，使 ℓ(x)=〈x,y〉，且 ‖ℓ‖=‖y‖。','projection-closed-subspace cauchy-schwarz','核是闭子空间，从一个核外向量提取一条垂直方向，线性泛函只沿该方向变化。',
      r'若 ℓ=0，取 y=0。否则选 z 使 ℓ(z)≠0。有界性给 |ℓ(x)|≤C‖x‖，故收敛列的泛函值收敛，核 M=ker ℓ 是闭子空间。投影定理使 z=m+u，其中 m∈M、u⊥M，且 ℓ(u)=ℓ(z)≠0。',
      r'对任意 x，向量 x-[ℓ(x)/ℓ(u)]u 属于 M，与 u 正交。因此 〈x,u〉=[ℓ(x)/ℓ(u)]‖u‖²。令 y=[ℓ(u)/‖u‖²]u，即得到 ℓ(x)=〈x,y〉。',
      r'若 y、y′ 都表示同一泛函，对 x=y-y′ 代入得 ‖y-y′‖²=0，故唯一。柯西—施瓦茨给 ‖ℓ‖≤‖y‖；y≠0 时取 x=y/‖y‖ 得到反向等号，y=0 时两者均零。$\square$')
    P('linear-bounded-continuous','analysis/linear-operators analysis/normed-spaces','线性算子的有界性与连续性等价',r'赋范空间之间的线性算子 T 有界，当且仅当在零点连续，也当且仅当处处连续。','axiom-vector axiom-metric','利用缩放把零点附近的一个误差控制放大为全空间线性估计。',
      r'若 ‖Tx‖≤C‖x‖，则 ‖Tx-Ty‖≤C‖x-y‖，所以处处连续。处处连续当然包含零点连续。',
      r'反向设零点连续，取 δ>0，使 ‖z‖<δ 时 ‖Tz‖<1。对非零 x，令 z=δx/(2‖x‖)，其范数为 δ/2，所以 ‖Tx‖=(2‖x‖/δ)‖Tz‖≤(2/δ)‖x‖。x=0 时同样成立，故有界。$\square$')
    P('continuous-functions-complete','analysis/banach-spaces analysis/function-sequences','连续函数的一致范数空间完备',r'紧致度量空间 K 上的连续实函数组成的空间 C(K)，在一致范数下是巴拿赫空间。','cauchy-completeness uniform-continuous-limit heine-cantor','一致柯西性先给各点极限，再把同一阈值传给全域，得到一致极限。',
      r'先说明范数有限：连续函数在每点附近与其点值相差小于 1，用紧致性的有限子覆盖即可取有限个局部界的最大值，控制全域。范数三公理由绝对值和上确界直接得到。空 K 的函数空间视为零空间即可。',
      r'若 f_n 在一致范数下柯西，则固定 x 后 f_n(x) 是实柯西列，存在极限 f(x)。任取 ε>0，选 N 使 m,n≥N 时全域 |f_n(x)-f_m(x)|<ε/2。固定 n≥N、x 后令 m→∞，得到 |f_n(x)-f(x)|≤ε/2<ε。',
      r'该 N 不依赖 x，所以 f_n 一致收敛到 f。连续函数一致极限连续，因此 f∈C(K)，并在一致范数下收敛。每个柯西列都有空间内极限，证明完备。$\square$')
    P('banach-contraction','analysis/banach-spaces analysis/odes','Banach 压缩映射定理',r'非空完备度量空间 X 上，若 T 满足 d(Tx,Ty)≤q d(x,y)，0≤q<1，则有唯一不动点 x*。从任意 x₀ 迭代 x_(n+1)=Tx_n 都收敛到它，且 d(x_n,x*)≤q^n d(x₁,x₀)/(1-q)。','def-complete archimedean axiom-metric','相邻步长按几何级数衰减，尾和给出柯西性和显式误差。',
      r'由压缩性归纳，d(x_(n+1),x_n)≤q^n d(x₁,x₀)。若 m>n，三角不等式及有限等比和给 d(x_m,x_n)≤q^n d(x₁,x₀)/(1-q)。',
      r'当 0<q<1，设 r=1/q>1，归纳得 r^n≥1+n(r-1)，故 q^n→0；q=0 的情况一步后已常值。所以序列柯西，完备性给 x_n→x*。',
      r'd(Tx*,x*)≤d(Tx*,Tx_n)+d(x_(n+1),x*)≤q d(x*,x_n)+d(x_(n+1),x*)→0，故 Tx*=x*。若 y* 也是不动点，则 d(x*,y*)≤q d(x*,y*)，因 q<1，只能距离为零。',
      r'在尾和估计中让 m→∞，距离的反三角不等式保证左侧趋于 d(x*,x_n)，得到所述误差。$\square$')
    P('picard-lindelof','analysis/odes analysis/initial-boundary','Picard–Lindelöf 局部存在唯一性（标量版）',r'设 f 在矩形 |t-t₀|≤a、|y-y₀|≤b 上连续，a,b>0，且对 y 具有统一 Lipschitz 常数 L≥0。则初值问题 y′=f(t,y)、y(t₀)=y₀ 在某个 |t-t₀|≤h 上有唯一取值于该矩形的 C¹ 解。','banach-contraction continuous-functions-complete finite-dimensional-compactness ftc-first ftc-second supremum-integral','将微分问题等价为积分不动点，并选短时间让积分算子既不出界又压缩。',
      r'矩形闭有界，连续性和有限维极值结论给 |f|≤M。选 0<h≤a，使 hM≤b 且 hL<1；M 或 L 为零时相应条件无需限制，始终可取足够小正 h。',
      r'令 X 为区间 [t₀-h,t₀+h] 上满足 ‖u-y₀‖∞≤b 的连续函数。它非空（含常函数），是 C 空间的闭子集，所以完备：柯西列在大空间收敛，范数闭条件把极限留在 X。',
      r'定义 Tu(t)=y₀+∫_(t₀)^t f(s,u(s))ds。被积函数连续；积分估计给 ‖Tu-y₀‖∞≤hM≤b，故自映射。Lipschitz 条件再给 ‖Tu-Tv‖∞≤hL‖u-v‖∞，所以是压缩。',
      r'压缩映射定理给唯一不动点 u。第一基本定理说明该不动点 C¹ 且 u′(t)=f(t,u(t))，初值也直接成立。反向任何满足同样区间与值域条件的 C¹ 解，由第二基本定理都是不动点，因此相同。这是局部标量结论，不把它当成任意非 Lipschitz 方程或全局解的证明。$\square$')
    P('termwise-differentiation','analysis/function-sequences analysis/series','函数列逐项求导定理',r'设 f_n 在 [a,b] 连续、内部 C¹，导数连续延到闭区间；若 f_n′ 一致收敛到 g，且某点 c 的 f_n(c) 收敛到 α，则 f_n 一致收敛到 C¹ 函数 f，且 f′=g。','uniform-continuous-limit uniform-integration ftc-first ftc-second supremum-integral','用同一积分起点恢复函数，把导数的全域误差转成函数全域误差。',
      r'g 是连续函数的一致极限，因此连续。定义 f(x)=α+∫_c^x g(t)dt。第二基本定理给 f_n(x)=f_n(c)+∫_c^x f_n′(t)dt。',
      r'两式相减并用积分估计，得到 |f_n(x)-f(x)|≤|f_n(c)-α|+(b-a)‖f_n′-g‖∞，右侧不依赖 x 且趋零，所以收敛一致。第一基本定理给 f′=g，端点按单侧解释。$\square$')
    P('matrix-exponential','algebra/exponential-map analysis/linear-operators','矩阵指数的收敛、微分与群性质',r'有限维实或复方阵 A 的级数 e^(tA)=Σ_(k≥0)t^kA^k/k! 对所有实 t 收敛，在有界 t 区间一致收敛，并满足 E′=AE=EA、E(0)=I、E(t+s)=E(t)E(s)、E(t)^(-1)=E(-t)。','weierstrass-m termwise-differentiation complex-cauchy-schwarz','用矩阵的次乘性范数控制幂级数，再用微分方程的唯一性式估计证明群性质。',
      r'取欧氏算子范数；由定义 ‖AB‖≤‖A‖‖B‖，并由逐坐标实数完备性知有限维矩阵空间完备。对 |t|≤R，每项范数≤R^k‖A‖^k/k!。该数值级数的项在 k 足够大后，相邻比值≤1/2，尾部受几何级数控制，故收敛。M 判别法逐坐标给一致收敛。',
      r'导数级数同样被 ‖A‖Σ_(k≥1)R^(k-1)‖A‖^(k-1)/(k-1)! 控制。用逐项求导定理于部分和（在零点都为 I），得到 E′=AE=EA。',
      r'对矩阵值线性方程 X′=AX、X(0)=C，唯一性可直接证明：若差 D 初值零，短区间长度 h 满足 h‖A‖<1，则积分估计给 ‖D‖∞≤h‖A‖‖D‖∞，故为零；有限拼接覆盖任意有界时间区间。',
      r'固定 s，E(t+s) 与 E(t)E(s) 都满足 X′=AX，且 t=0 值为 E(s)，所以二者相同。取 s=-t 得乘积 I；交换参数也得另一顺序为 I，故 E(-t) 为逆。$\square$')
