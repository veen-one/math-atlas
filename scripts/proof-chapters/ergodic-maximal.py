"""Mean ergodicity and the maximal inequality preceding pointwise ergodicity."""
def register(P, BASES):
    P('von-neumann-mean-ergodic','analysis/ergodicity analysis/hilbert-spaces','Hilbert 空间等距算子的平均遍历定理',r'设U为实或复Hilbert空间H上的线性等距算子，不要求满射。则 A_n=n⁻¹Σ_(k=0)^(n−1)U^k 强收敛于固定子空间F={x:Ux=x}上的正交投影。即每个x有‖A_nx−P_Fx‖→0。','projection-closed-subspace complex-inner-cauchy-schwarz','固定向量不变，余边界向量的平均望远镜趋零；两类向量的闭线性张成覆盖整个空间。',
      r'F为ker(I−U)，U等距连续，所以F闭。令R为(I−U)H的闭包。证明R⊥=F：若y∈R⊥，则对全部x有⟨(I−U)x,y⟩=0。取x=y，得到⟨Uy,y⟩=‖y‖²；等距性给‖Uy−y‖²=‖Uy‖²+‖y‖²−2Re⟨Uy,y⟩=0，故Uy=y。',
      r'反向若Uy=y，等距线性算子保持内积，可由实、复极化公式直接从范数保持导出。因此⟨Ux,y⟩=⟨Ux,Uy⟩=⟨x,y⟩，故y∈R⊥。闭子空间正交分解于是给H=F⊕R。',
      r'对x=(I−U)z，A_nx=(z−U^nz)/n，范数至多2‖z‖/n，趋零。又‖A_n‖≤1，所以对R内任意x，先取(I−U)z使距离小于ε，再用统一算子范数界，得limsup‖A_nx‖≤ε；ε任意故趋零。对F中向量平均恒等自身，两部分相加得到正交投影极限。$\square$')
    P('hopf-maximal-ergodic','analysis/ergodicity probability/stationary-processes','Hopf 极大遍历引理',r'设概率空间上T可测且保持测度，f为实L¹函数。令S_kf=Σ_(j=0)^(k−1)f∘T^j，E_N={max_(1≤k≤N)S_kf>0}。则∫_(E_N)f≥0。对E={sup_(k≥1)S_kf>0}亦有∫_E f≥0。','integral-linearity dominated-convergence lotus','有限最大部分和满足一个递推恒等式，积分时保测性使移位项抵消。',
      r'取h₀=0、h_N=max(0,S₁f,…,S_Nf)。有限和可积，最大值被Σ_(j<N)|f|∘T^j支配，故h_N可积。分离第一项f后有 h_N=max(0,f+h_(N−1)∘T)。而E_N={h_N>0}，在E_N上f=h_N−h_(N−1)∘T。',
      r'因h_N在E_N外为零且h_(N−1)∘T非负，得 f1_(E_N)≥h_N−h_(N−1)∘T。T保测及推前积分换元给∫h_(N−1)∘T=∫h_(N−1)。又h_N≥h_(N−1)逐点成立，所以∫_(E_N)f≥∫h_N−∫h_(N−1)≥0。',
      r'E_N随N递增且并为E，f1_(E_N)→f1_E，并被|f|支配。支配收敛给∫_E f=lim∫_(E_N)f≥0。此结论不要求T可逆或遍历。$\square$')
    P('ergodic-l1-maximal','analysis/ergodicity probability/stationary-processes','遍历平均的弱 L¹ 极大不等式',r'在保测概率变换T下，对实或复f∈L¹及λ>0，有 P{sup_(n≥1)|n⁻¹Σ_(j<n)f∘T^j|>λ}≤‖f‖₁/λ。特别这些平均的绝对值上确界几乎处处有限。','hopf-maximal-ergodic measure-continuity-above','用|f|控制平均绝对值，再对|f|−λ应用极大引理。',
      r'记A_nf=n⁻¹Σ_(j<n)f∘T^j。三角不等式给|A_nf|≤A_n|f|。令E={sup_n A_n|f|>λ}。该集合等于{sup_n S_n(|f|−λ)>0}，故Hopf引理给0≤∫_E(|f|−λ)，即λP(E)≤∫_E|f|≤‖f‖₁。所求事件为E子集，得到弱型界。',
      r'对正整数m取λ=m。事件{sup_n|A_nf|>m}随m递减，其概率至多‖f‖₁/m趋零。测度上连续性给{sup_n|A_nf|=∞}概率零，证明有限性。这只是极大估计，本身尚未断言平均逐点收敛。$\square$')
    P('ergodic-dense-good-class','analysis/ergodicity','有界不变函数与余边界的 L¹ 稠密性',r'对保测概率变换T，函数d=h+g−g∘T组成的线性空间在实L¹中稠密，其中h,g有界，h∘T=h几乎处处。对这些d，A_nd逐点且L¹收敛于h。','von-neumann-mean-ergodic l2-completeness dominated-convergence l2-cauchy-schwarz','Hilbert空间正交分解给L²稠密性，再用截断将两类函数的生成元变成有界函数。',
      r'在实L²中令Uf=f∘T，保测换元给‖Uf‖₂=‖f‖₂。平均遍历证明中的分解给L²=Fix(U)⊕closure((I−U)L²)。故不变L²函数与L²余边界的有限和在L²中稠密；有限和可并入一个h及一个g。',
      r'截断不变h为h_M=max(−M,min(h,M))，仍不变，且由支配收敛在L²逼近h。任意g∈L²同样可截断，且‖(I−U)(g−g_M)‖₂≤2‖g−g_M‖₂。因此有界h,g构成的上述空间L²稠密。概率空间上‖u‖₁≤‖u‖₂；任意L¹函数先截断为有界L²函数，截断误差L¹趋零，再用L²稠密性，得到L¹稠密。',
      r'对d=h+g−g∘T，望远镜给A_nd=h+(g−g∘T^n)/n。除去h不变等式及其可数个逆像的零集，等式对全部n成立；余项绝对值≤2‖g‖∞/n，所以几乎处处及L¹都趋h。$\square$')
    P('birkhoff-probability-l1','analysis/ergodicity probability/stationary-processes','Birkhoff 逐点遍历定理（概率空间 L¹ 版）',r'设T为概率空间上的保测变换，f∈L¹为实函数。则A_nf几乎处处及L¹收敛于可积不变函数f*。对任意满足T⁻¹E=E模零的可测集E，有∫_E f*=∫_E f。若T遍历，即此类E的概率均为0或1，则f*=∫f几乎处处。','ergodic-dense-good-class ergodic-l1-maximal monotone-integral integral-linearity dominated-convergence','先用稠密好函数与极大不等式消除振荡，再用L¹逼近识别极限及不变性。',
      r'对有理ε>0，取好函数d逼近f。d的平均收敛，因而A_nf的上、下极限之差至多2sup_n|A_n(f−d)|；若某点平均无界，也包含在该极大值无穷的零集内。极大不等式给振荡>2ε的集合概率≤‖f−d‖₁/ε。由稠密性使右侧任意小，故振荡>2ε的概率零。对可数有理ε取并，得到有限逐点极限f*。',
      r'若d的极限为h，Fatou引理给‖f*−h‖₁≤liminf‖A_n(f−d)‖₁≤‖f−d‖₁，这也保证f*可积。这里Fatou可直接由已证单调收敛得到：对非负u_n取inf_(k≥n)u_k递增至liminf，再用积分单调性。又‖A_nf−f*‖₁≤‖f−d‖₁+‖A_nd−h‖₁+‖h−f*‖₁，先令n趋无穷再令‖f−d‖₁趋零，得到L¹收敛。',
      r'不变性：保测性给A_nf∘T也在L¹趋f*∘T，而 A_nf∘T−A_nf=(f∘T^n−f)/n，L¹范数至多2‖f‖₁/n趋零。因此f*∘T=f*作为L¹元素成立。该论证不需要先证明点态f(T^n)/n趋零。',
      r'对模零不变E，乘1_E与T的复合可交换到模零，保测换元给∫_E f∘T^j=∫(1_E f)∘T^j=∫_E f。因此∫_E A_nf=∫_E f。利用已证L¹收敛可将积分取极限，得到∫_E f*=∫_E f。',
      r'最后若T遍历，可积不变函数必须几乎处处常数。证明：每个有理r的超水平集{f*>r}模零不变，故概率为0或1。若f*不几乎处处常数，其本质下、上界之间可选有理r，使该概率严格在0与1之间，矛盾；也可用这些概率随r递减及f*有限性直接确定唯一阈值。取E为全集，常数值由积分恒等式确定为∫f。$\square$')
