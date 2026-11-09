"""Further self-contained core results for previously uncovered atlas topics."""
def register(P, BASES):
    BASES['def-jordan-separation']=dict(title='平面简单闭曲线分隔事实',statement='本章在多面体欧拉公式的组合证明中使用 Jordan 曲线定理的球面形式：球面上的简单闭曲线补集有两个连通分支，曲线的两侧分别邻接不同分支。该拓扑定理在此作为明确基础；本卷不以组合论推导它。')
    BASES['def-euclidean-area']=dict(title='欧氏多边形面积的基本性质',statement='本条只用于有限直边图形：正方形边长 s 的面积为 s²；直角三角形两直角边长 a,b 的面积为 ab/2（将其复制一次拼成 a×b 矩形）；全等图形面积相同，有限个内部不交多边形拼成的图形面积等于各面积之和。')
    BASES['def-finite-markov']=dict(title='有限马尔可夫链约定',statement='状态空间 S 有限，转移矩阵 P 的元素非负且每行和为一；分布写作行向量，演化为 μ↦μP。不可约指任意状态可经有限步以正概率到达任意另一状态。')
    BASES['def-linear-control']=dict(title='有限维线性离散控制系统',statement='系统 x_(k+1)=Ax_k+Bu_k，状态 x_k∈R^n、输入 u_k∈R^m；可控指任意初态能在有限步由某输入序列送达任意目标态。')
    P('propositional-completeness','foundations/propositional-logic foundations/soundness-completeness','命题逻辑的真值表完备性',r'在经典命题演算中，一个命题公式若在所有赋值下为真，则可由重言式公理及 modus ponens 证明。','axiom-logic fol-deduction','对变元逐个分支；演绎定理把两个分支合并。',
      r'固定公式出现的有限变元 p₁,…,pₙ。对任一完整文字合取 δ，即每个 p_i 取 p_i 或 ¬p_i，若 δ 的赋值使公式 φ 为真，则命题重言式 δ→φ 可直接作为公理，MP 得 δ→φ。',
      r'对任一尚未决定的变量 p，归纳假设已得 (Γ∪{p})⊢φ 与 (Γ∪{¬p})⊢φ，其中 Γ 是此前分支文字。由演绎定理得 Γ⊢p→φ 及 Γ⊢¬p→φ；命题重言式 ((p→φ)∧(¬p→φ))→φ，加经典演算可推出 Γ⊢φ。等价地，分情况论证：p∨¬p 为重言式，两支均推出 φ。',
      r'从 n 个文字叶逐层合并，得到空前提 ⊢φ。有限分支树深度 n，故证明有限。这里的“命题演算”必须包含经典排中律；直觉主义演算不证明所有经典重言式。$\square$')
    P('finite-markov-stationary','probability/markov-chains probability/stationary-processes','有限马尔可夫链平稳分布存在',r'每个有限状态转移矩阵 P 都至少有一个平稳概率行向量 π，即 πP=π；若链不可约，则 π 的每个分量严格为正。','def-finite-markov finite-dimensional-compactness','从任意初始分布的 Cesàro 平均取收敛子列，望远镜差趋零。',
      r'取任意概率行向量 μ，令 ν_N=N⁻¹Σ_(k=0)^(N-1) μP^k。每项仍是概率向量，概率单纯形是 R^|S| 中闭有界集，故有收敛子列 ν_(N_j)→π，且 π 仍非负、分量和为一。',
      r'计算 ν_NP−ν_N=(μP^N−μ)/N。两个概率向量各坐标在 [0,1]，故右侧每坐标绝对值≤1/N，趋于零。矩阵乘法连续，沿收敛子列取极限得 πP=π。',
      r'若链不可约且 π_i>0 对某状态 i，则由 π=πP^k 得 π_j≥π_i(P^k)_(ij)>0，只要有从 i 到 j 的正概率路径。至少一个 π_i 正，因为总和为一；不可约性遂给所有状态严格正。证明不声称周期链的逐时分布必收敛。$\square$')
    P('linear-controllability-kalman','applied/controllability-observability applied/state-space','Kalman 可控秩判据',r'有限维离散线性系统可控，当且仅当矩阵 [B,AB,…,A^(n−1)B] 的秩为 n。','def-linear-control rank-nullity','可达状态是各时刻输入经 A 推进所得列空间；Cayley–Hamilton 使更高幂不再扩大空间。',
      r'从零状态出发，经过 N 步有 x_N=Σ_(j=0)^(N-1)A^(N-1-j)Bu_j。因此所有可达状态恰为列空间 span{im B,…,im A^(N-1)B}：任意输入给此空间内向量，反向任意列组合可把系数选作输入。',
      r'设 W=span{im B,…,im A^(n-1)B}。Cayley–Hamilton 写 A^n 为 I,A,…,A^(n-1) 的线性组合，故 A^nB 的列仍在 W；递推左乘 A 说明所有更高次 A^kB 列也在 W。于是任意步数可达集合都包含于 W。',
      r'若秩为 n，则 W=R^n，选至多 n 步输入即可实现任意目标（多余输入取零）。若秩小于 n，则 W 是真子空间，任意步的零态可达状态均在 W，不能到达 W 外目标，系统不可控。一般初态与目标之差还含 A^N x_0，但可控的定义要求任意有限时长可选；满秩矩阵给出 n 步可达性，反之零初态已足以否定。$\square$')
    P('pythagorean-theorem','numbertheory/pythagorean-triples','勾股定理（面积拼合法）',r'欧氏平面中，直角三角形两直角边长为 a,b，斜边长为 c，则 a²+b²=c²。','def-euclidean-area','把四个全等直角三角形放进边长 a+b 的大正方形；中间留下边长 c 的小正方形，比较面积。',
      r'设直角三角形两个锐角为 α、β。因三角形内角和为 180° 且另一个角为 90°，有 α+β=90°。取四个该三角形的全等副本，分别置于一个大正方形四角，使每个直角顶点落在大正方形顶点，两条直角边分别沿大正方形相邻边放置；邻接副本取镜像方向，使较长边 a 与较短边 b 沿边界依次首尾相接。每条大正方形边由长度 a 和 b 两段组成，故其边长为 a+b。',
      r'四条斜边围成中间四边形，每条边长都是 c。考察其中一个顶点：它位于大正方形的一条直边上，左右两个相邻直角三角形分别在此贡献锐角 α 与 β；中间四边形的内角与这两个角组成平角，因而等于 180°−(α+β)=90°。四个内角均为直角，所以中间四边形为正方形，边长 c、面积 c²。',
      r'按有限可加性，大正方形的面积等于中间小正方形与四个三角形面积之和。因此 (a+b)²=c²+4(ab/2)=c²+2ab。展开左边并消去 2ab，得到 a²+b²=c²。证明只使用直角三角形面积、全等不变性和有限面积可加性，没有把勾股定理本身作为前提。$\square$')
    P('pythagorean-parametrization','numbertheory/pythagorean-triples','本原勾股数的参数化',r'正整数本原解 a²+b²=c²（gcd(a,b,c)=1）恰可写成 {a,b}={m²−n²,2mn}、c=m²+n²，其中 m>n>0、gcd(m,n)=1 且 m,n 奇偶性相反。', 'euclid-lemma unique-factorization','奇偶性与互素性迫使两个平方和因子互素，其乘积为平方便各自为平方。',
      r'a,b 不可能都奇：平方模 4 只能为 0 或 1，两个奇平方和为 2 而平方模 4 不为 2。也不可能都偶（本原），故一奇一偶。设奇数边为 a，偶数边为 b。由 c²−a²=b² 得 ((c+a)/2)((c−a)/2)=(b/2)²。两因子为正整数且互素：公共奇因子会同时整除 c,a，公共偶因子则与 c,a 同奇矛盾。',
      r'互素正整数乘积为平方，唯一素因子分解表明每个素数在两因子中的指数分别为偶数，故因子各为平方：令 (c+a)/2=m²、(c−a)/2=n²，m>n。于是 a=m²−n²、c=m²+n²、b=2mn。gcd(m,n)=1，否则其平方公因子整除 a,b,c；二者不能同奇，否则 a,b,c 全偶。因此异奇偶。',
      r'反向从满足条件的 m,n 构造三元组，直接展开 (m²−n²)²+(2mn)²=(m²+n²)²。异奇偶使奇数边为奇且偶数边为偶；若素数同时整除 a,b，则由 b=2mn 与 a=m²−n²、gcd(m,n)=1 可推出该素数须同时整除 m,n，矛盾（素数 2 由奇偶性排除）。故所得三元组本原。$\square$')
    P('euler-polyhedron-formula','geometry/euler-characteristic geometry/polyhedra geometry/triangulations','凸多面体的欧拉公式',r'凸三维多面体的顶点数 V、边数 E、面数 F 满足 V−E+F=2。','tree-edges def-jordan-separation','球面嵌入图删去非树边不会改变 V−E+F；剩余树补面数为一。',
      r'取多面体边图的一棵生成树 T；图连通，因此树含全部 V 个顶点且 V−1 条边。把嵌入球面的树逐条删除叶边，连通性保持，且补空间仍连通：一条叶边不构成闭路，绕过其自由端可在补空间连通两侧。归纳可知球面树只有一个面。',
      r'从原嵌入图逐条加入不在 T 中的边。每条新边端点已由 T 连通，故该边与已有路径组成闭路；其嵌入在球面上的两侧属于两个不同面（简单闭曲线分隔球面）。加入该边恰把一个面分成两个，面数增加一。共加入 E−(V−1) 条边，所以 F=1+E−V+1=E−V+2。',
      r'多面体边图在球面上的嵌入具有这些顶点、边、面，故等式整理为 V−E+F=2。分隔步骤依赖已明列的 Jordan 曲线定理基础；证明不推广到任意非球面嵌入。$\square$')
    P('confidence-chebyshev','probability/confidence-intervals','Chebyshev 置信区间覆盖率保证',r'若估计量 T 对参数 θ 满足 E[T]=θ 且 Var(T)≤v，则区间 [T−√(v/α),T+√(v/α)] 的覆盖概率至少 1−α。','chebyshev','覆盖失败正是误差绝对值超过区间半径，直接应用 Chebyshev 不等式。',
      r'令 r=√(v/α)。事件 θ 不属于 [T−r,T+r] 等价于 |T−θ|>r（端点等号属于闭区间）。Chebyshev 不等式给 P(|T−θ|>r)≤Var(T)/r²≤v/(v/α)=α（v=0 时 T=θ 几乎处处，结论直接成立）。',
      r'取补事件便得 P(θ∈[T−r,T+r])≥1−α。该保证需要无偏及方差上界；若估计有偏，须把偏差界另计，且此区间通常保守，不等同于最短或精确覆盖区间。$\square$')
    BASES['def-module-localization']=dict(title='交换环上的模与局部化',statement='R 为含幺交换环，M 为 R-模，S⊆R 含 1、乘法封闭且不含 0（若允许零环需单独处理）。局部化 S⁻¹R 与 S⁻¹M 的分数等价关系为 (m,s)~(n,t) 当且仅当存在 u∈S 使 u(tm−sn)=0。')
    P('module-first-isomorphism','algebra/modules algebra/homomorphisms-quotients','模的第一同构定理',r'若 f:M→N 是 R-模同态，则 M/ker f 与 im f 同构。','first-isomorphism def-module-localization','与群的第一同构证明相同：同态纤维恰为核的陪集。',
      r'核 K={m:f(m)=0} 对加法及 R 数乘封闭，故为子模。商模加法与标量乘法按代表定义；若换代表，差在 K 中，运算结果差仍在 K 中，所以良定义。',
      r'定义 F:M/K→im f，F(m+K)=f(m)。若 m+K=m′+K，则 m−m′∈K，故 f(m)=f(m′)，所以良定义。它保持加法和标量乘法，并按像的定义满射。',
      r'若 F(m+K)=0，则 f(m)=0，故 m∈K，商类为零；对两个商类同理差在核，故 F 单射。因此 F 为模同构。$\square$')
    P('localization-module-universal','algebra/localization algebra/modules','模局部化的泛性质',r'自然映射 ι:M→S⁻¹M 满足：若 R-模同态 f:M→N 将每个 s∈S 的作用变为双射（即 f(sm)=s f(m) 且 s:N→N 可逆），则存在唯一 S⁻¹R-模同态 f~:S⁻¹M→N 使 f~∘ι=f，且 f~(m/s)=s⁻¹f(m)。','def-module-localization module-first-isomorphism','分数的等价关系恰好表达交叉相乘相等；可逆作用使公式良定义且唯一。',
      r'先定义 f~(m/s)=s_N⁻¹ f(m)，其中 s_N 是 N 上的 s 作用。若 (m,s)~(m′,s′)，存在 u∈S 使 u(s′m−sm′)=0。施以 f 得 u_N(s′_N f(m)−s_N f(m′))=0；这些算子均可逆，故 s′_N⁻¹f(m)=s_N⁻¹f(m′)，即定义与分数代表无关。',
      r'对加法，(m/s)+(m′/s′)=(s′m+sm′)/(ss′)，其像为 (ss′)_N⁻¹(s′_N f(m)+s_N f(m′))，因 R 交换，正好等于两像之和。对 r/s∈S⁻¹R 的作用同样计算得 (r/s)f~(m/t)=f~(rm/(st))，故 f~ 为局部化模同态。',
      r'f~(m/1)=f(m)，所以它延拓 f。任何延拓 g 必须满足 g(m/s)=s_N⁻¹g(m/1)=s_N⁻¹f(m)，故唯一。证明没有声称任意模 N 上的 s 作用都可逆；这是泛性质的必要假设。$\square$')
    P('e-irrational','numbertheory/pi-and-e','自然常数 e 的无理性',r'e=Σ_(k=0)^∞1/k! 是无理数。','axiom-natural series-cauchy','假设 e 为既约分数，乘以大阶乘后尾项为严格介于 0 与 1 的整数。',
      r'反设 e=p/q，其中 p,q 为正整数。取整数 n≥max(q,2)，则 n!e 为整数，因为 q 整除 n!；且 n!Σ_(k=0)^n1/k! 也是整数，因为每个 k! 整除 n!。两者相减得 R_n=n!Σ_(j=1)^∞1/(n+j)!，所以 R_n 必为整数。',
      r'但 R_n=Σ_(j=1)^∞1/[(n+1)(n+2)…(n+j)]。每项正，首项为 1/(n+1)。后续项相邻比至多 1/(n+2)，故 R_n≤(1/(n+1))Σ_(r=0)^∞(1/(n+2))^r=(n+2)/((n+1)^2)<1（n≥2）。',
      r'于是 0<R_n<1，与 R_n 是整数矛盾。故 e 无理。级数收敛可由相邻项比最终不超过 1/2 得几何比较；此结论不证明 e 的超越性。$\square$')
    P('linear-observability-dual','applied/controllability-observability applied/state-space','Kalman 可观秩判据',r'系统 y_k=Cx_k 的 n 维初态可由无输入的前 n 次输出唯一确定，当且仅当可观测矩阵 O=[C;CA;…;CA^(n−1)] 的秩为 n。','linear-controllability-kalman rank-nullity','两初态输出相同当且仅当其差落在观测矩阵的核。',
      r'零输入下 x_k=A^k x_0，故前 n 项输出依次为 Cx_0,CAx_0,…,CA^(n−1)x_0，合并为 O x_0。对任意两初态差 z，输出序列相同当且仅当 Oz=0。',
      r'若 rank O=n，则由秩—零化度 ker O={0}，输出相同迫使两初态相等；而映射 x↦Ox 单射，给出唯一恢复（对来自系统的精确数据）。',
      r'若 rank O<n，则存在非零 z∈ker O，初态 0 与 z 产生完全相同的前 n 项输出，无法唯一辨认。Cayley–Hamilton 还说明所有 k≥n 的 CA^k 是前 n 项矩阵的线性组合，故观察更久也不增加信息。$\square$')
    P('gronwall-discrete','analysis/stability analysis/odes','离散 Grönwall 不等式',r'若非负数列 u_n 满足 u_n≤a+bΣ_(k=0)^(n−1)u_k，其中 a,b≥0，则 u_n≤a(1+b)^n。','axiom-natural','把累积上界作为辅助递推量并归纳。',
      r'令 v_0=a，v_n=a+bΣ_(k=0)^(n−1)u_k。由假设 u_n≤v_n；且 v_(n+1)=v_n+b u_n≤(1+b)v_n。',
      r'归纳得到 v_n≤a(1+b)^n，结合 u_n≤v_n 即得结论。若 a=0，递推从 u_0≤0 得全为零，也满足结论。常见带步长 h 的形式取 b=Lh，并用 (1+Lh)^n≤exp(Lnh) 得指数界；后一不等式来自 log(1+x)≤x。$\square$')
    BASES['def-identifiability']=dict(title='全局与局部可辨识性定义',statement='参数映射 F:Θ→Y 全局可辨识指对任意 θ,θ′∈Θ，F(θ)=F(θ′) 蕴含 θ=θ′。在 θ 邻域 U 内局部可辨识指对所有 θ′∈U，F(θ′)=F(θ) 蕴含 θ′=θ。')
    P('identifiability-injective-map','applied/identifiability applied/parameter-inversion','单射前向映射的全局可辨识性',r'给定参数空间 Θ 与无噪声观测 F:Θ→Y，参数由观测全局唯一确定，当且仅当 F 在 Θ 上单射；局部唯一性等价于限制到某邻域后单射。','def-identifiability','把定义逐字翻译为纤维 F⁻¹({y}) 的基数条件。',
      r'若参数 θ 可由观测唯一确定，则任意 θ′ 满足 F(θ′)=F(θ) 必有 θ′=θ，正是 F 单射。反之单射保证每个属于像的观测 y 只有一个原像，故存在唯一参数与之相容。',
      r'在 θ 的某邻域 U 内唯一可辨识，意为对 θ′∈U，F(θ′)=F(θ) 蕴含 θ′=θ，即 F|_U 的纤维单点。若要求 U 内所有参数彼此可辨，则恰为 F|_U 单射。',
      r'有噪声或有限样本时，单射只保证理想映射层面的唯一性，不自动给出稳定恢复；逆映射连续性、条件数和统计误差需另行假设分析。$\square$')
    P('fejer-uniform-convergence','analysis/fourier-series analysis/fourier-transform','Fejér 定理：连续周期函数的 Cesàro Fourier 和一致收敛',r'若 f 是连续 2π 周期函数，令 σ_N f 为前 N 个对称部分和的 Cesàro 平均，则 ‖σ_Nf−f‖_∞→0。','heine-cantor riemann-linearity','Fejér 核非负、总质量一，且质量集中于圆周原点的任意邻域。',
      r'定义 K_N(t)=N⁻¹|Σ_(k=0)^(N−1)e^(ikt)|²。展开平方并按差 k−j 计数，得 K_N(t)=Σ_(|j|<N)(1−|j|/N)e^(ijt)，故它是非负三角多项式。其圆周平均 (2π)⁻¹∫_(−π)^πK_N=1，因为指数函数除常数项外积分为零。',
      r'将 f 的 Fourier 系数定义为 f̂(j)=(2π)⁻¹∫ f(x)e^(−ijx)dx。有限和交换积分可直接验证 σ_N f(x)=(2π)⁻¹∫K_N(t)f(x−t)dt；每个频率 j 的权重正是 1−|j|/N（|j|<N），其余为零。',
      r'固定 0<δ<π。几何级数公式给 |Σ_(k=0)^(N−1)e^(ikt)|≤2/|1−e^(it)|=1/|sin(t/2)|。因此 |t|≥δ 时 K_N(t)≤1/(N sin²(δ/2))，其归一化积分趋零。',
      r'连续周期 f 在紧圆周上一致连续。给 ε>0，选 δ 使 |f(x−t)−f(x)|<ε 对所有 x 与 |t|<δ 成立。利用核非负且总质量一，误差绝对值≤ε 加上远区的 2‖f‖∞ 乘以远区核质量；后一项由上一步趋零。故一致误差趋零。',
      r'推论是三角多项式在连续周期函数空间中一致稠密，因为 σ_N f 本身是三角多项式。一般连续函数的原始 Fourier 部分和不因此必一致收敛；结论针对 Cesàro 平均。$\square$')
    BASES['def-beta-integral']=dict(title='Beta 积分的定义',statement='对 x,y>0，B(x,y)=∫₀¹t^(x−1)(1−t)^(y−1)dt。该广义积分在端点收敛；可由分别在 0 和 1 的幂次比较验证。')
    P('beta-gamma-recurrence','probability/conjugate-priors probability/prior-distribution','Beta 函数递推与 Beta-Binomial 共轭更新',r'对正整数 α,β 与观测到的 k 次成功、n−k 次失败，先验 Beta(α,β) 的后验为 Beta(α+k,β+n−k)；预测下一次成功概率为 (α+k)/(α+β+n)。','def-beta-integral integral-linearity variable-integral','似然乘幂函数改变 Beta 密度指数；Beta 积分递推给归一化常数比。',
      r'先证明 B(x+1,y)=x/(x+y)B(x,y)。分部积分给 B(x+1,y)=x/y·B(x,y+1)；又 t+(1−t)=1 给 B(x,y)=B(x+1,y)+B(x,y+1)。联立即得递推。边界项为零，因为 x,y>0。对称换元还得 B(x,y+1)=y/(x+y)B(x,y)。',
      r'令参数 θ∈(0,1)，先验密度为 θ^(α−1)(1−θ)^(β−1)/B(α,β)。给定条件独立 Bernoulli 数据，其似然与 θ^k(1−θ)^(n−k) 成正比；贝叶斯公式相乘后，θ 的后验密度正比于 θ^(α+k−1)(1−θ)^(β+n−k−1)。归一化积分恰为 B(α+k,β+n−k)，故后验即所述 Beta 分布。',
      r'后验预测成功率为后验均值 ∫θ·density。用递推比 B(α+k+1,β+n−k)/B(α+k,β+n−k)，得到 (α+k)/(α+β+n)。这要求条件独立同参数 Bernoulli 抽样模型；若数据依赖结构不同，更新式不成立。$\square$')
    P('finite-markov-stationary-unique','probability/markov-chains probability/stationary-processes','有限不可约马尔可夫链的平稳分布唯一',r'有限不可约转移矩阵恰有一个平稳概率分布。','finite-markov-stationary','对两平稳分布取最大逐点比值；不变性与不可约性排除有零坐标的非零非负不变向量。',
      r'存在性及任何平稳分布严格正已由前引理证明。设 π、ρ 是两个平稳概率向量，定义 c=min_i π_i/ρ_i。两向量分量皆正，故 c>0，且 η=π−cρ 非负并至少有一个零分量。又 ηP=η。',
      r'若 η 非零，选 η_i>0 的状态 i。由不可约性，对任意 j 存在 k 使 (P^k)_(ij)>0；由 ηP^k=η，得 η_j≥η_i(P^k)_(ij)>0。因此 η 所有分量都正，和其至少一个零分量矛盾。故 η=0，即 π=cρ。',
      r'两分布分量和均为一，故 c=1、π=ρ。周期性不影响平稳分布唯一性；但周期链的 μP^n 一般不逐点收敛到该分布。$\square$')
    P('heat-maximum-principle','analysis/pdes applied/pde-models','热方程最大值原理与解唯一性',r'令 Ω⊂Rⁿ 有界，u 连续于 Ω̄×[0,T] 且有内部所需导数。若 (∂_t−Δ)u≤0，则 sup_(Ω̄×[0,T])u≤sup_(Ω̄×{0}∪∂Ω×[0,T])u；因此同初值同边界的经典热方程解唯一。','ftc-second finite-dimensional-compactness','减去微小正斜率后，严格抛物不等式排除正时刻的内部最大点。',
      r'连续函数在紧柱体 Ω̄×[0,T] 取最大值。记边界与初始底面的最大值为 M。任取 ε>0，令 v(x,t)=u(x,t)−εt。则 (∂_t−Δ)v≤−ε。',
      r'若 v 在柱体上的最大值超过 M，则最大点不在空间边界或 t=0，故位于空间内部且 t>0。该点空间 Hessian 半负定，所以 Δv≤0；对时间，若 t<T，局部最大给 ∂_t v=0；若 t=T，左导数满足 ∂_t v≥0。两种情形均有 (∂_t−Δ)v≥0，与严格负不等式矛盾。',
      r'因此 v≤M，故 u≤M+εT。令 ε↓0 得最大值原理。若 u₁,u₂ 是同初值同边界的两解，差 w 满足热方程且边界初值为零；对 w 与 −w 分别用原理，得 w≤0 且 −w≤0，故 w=0。经典解的存在性未由最大值原理本身推出。$\square$')
    BASES['def-topological-space']=dict(title='拓扑空间、连续映射与商拓扑定义',statement='拓扑由开集族定义并对任意并、有限交封闭且含空集与全空间。映射连续指开集原像开。满射 q:X→Y 的商拓扑定义为 U⊆Y 开当且仅当 q⁻¹(U) 在 X 中开。')
    P('quotient-universal-property','geometry/quotient-spaces','拓扑商空间的泛性质',r'对满射 q:X→Y，若 Y 赋予商拓扑（U⊆Y 开当且仅当 q⁻¹(U) 在 X 中开），则任意映射 g:Y→Z 连续，当且仅当 g∘q:X→Z 连续。','def-topological-space','将连续性的开集原像条件经 q 的定义逐项改写。',
      r'若 g 连续且 q 连续，则复合 g∘q 连续。q 连续由商拓扑定义直接得到：对 Z 中开集 U，q⁻¹(U) 开。',
      r'反之假设 g∘q 连续。对 Z 中任意开集 V，有 q⁻¹(g⁻¹(V))=(g∘q)⁻¹(V) 在 X 中开。商拓扑定义于是给出 g⁻¹(V) 在 Y 中开，故 g 连续。',
      r'若另一个拓扑也使此等价对所有 Z,g 成立，取 Z 为该拓扑空间本身并分别使用恒等映射，可得两拓扑有相同开集。因此商拓扑是使 q 成为该泛性质的唯一拓扑。$\square$')
    BASES['def-poisson-process']=dict(title='泊松过程定义',statement='强度 λ 的齐次泊松过程满足 N(0)=0、计数独立平稳增量，且每段长度 t 的增量服从 Poisson(λt)，其中零次概率为 exp(−λt)，指数函数满足 exp(a+b)=exp(a)exp(b)。')
    P('poisson-interarrival-memoryless','probability/poisson-process','泊松过程的等待时间与指数无记忆性',r'若 N(t) 是强度 λ>0 的泊松过程，首个到达时刻 T 满足 P(T>t)=e^(−λt)，故 T 为参数 λ 的指数分布，并满足 P(T>s+t|T>s)=P(T>t)。','def-poisson-process','无到达等价于区间计数为零；独立平稳增量给条件尾概率相除。',
      r'按泊松过程定义，N(t)∼Poisson(λt)，且 T>t 当且仅当 N(t)=0。因此 P(T>t)=P(N(t)=0)=e^(−λt)(λt)^0/0!=e^(−λt)，其分布函数为 1−e^(−λt)，密度为 λe^(−λt)。',
      r'对 s,t≥0，事件 T>s 意味着前 s 时段无到达。T>s+t 再要求后续长度 t 区间也无到达。独立增量给 P(T>s+t|T>s)=P(N(s+t)−N(s)=0)=e^(−λt)。',
      r'故剩余等待时间分布不依赖已等待时长，这就是无记忆性。反向地，若非负等待时间尾函数连续且满足该无记忆等式，则 S(s+t)=S(s)S(t)；对 t 连续可解得 S(t)=e^(−λt)（非退化情形），但此处只证明泊松过程蕴含指数等待时间。$\square$')
    P('monte-carlo-mean-variance','applied/monte-carlo probability/expectation-variance','Monte Carlo 均值估计的无偏性与方差',r'若 X₁,…,X_n 独立同分布且 E[X₁]=μ、Var(X₁)=σ²<∞，则均值估计 μ̂=n⁻¹ΣX_i 无偏且 Var(μ̂)=σ²/n。','variance-mean independent-bounded-products','期望线性给无偏；独立使不同中心化项的交叉协方差为零。',
      r'E[μ̂]=n⁻¹ΣE[X_i]=n⁻¹nμ=μ，故无偏。令 Y_i=X_i−μ，则 E[Y_i]=0，Var(Y_i)=σ²。',
      r'展开 Var(μ̂)=E[(n⁻¹ΣY_i)²]=n⁻²(ΣE[Y_i²]+2Σ_(i<j)E[Y_iY_j])。独立性使 E[Y_iY_j]=E[Y_i]E[Y_j]=0；对角项各为 σ²，所以方差为 n⁻²·nσ²=σ²/n。',
      r'若进一步有独立重复批次，可用样本方差估计 σ² 并据此报告标准误约为 s/√n；有限样本的精确置信覆盖需额外分布假设，不能仅由均值方差公式推出。$\square$')
    P('randomized-ate-unbiased','probability/interventions-effects probability/experimental-design','随机分配下样本处理效应估计无偏',r'有限总体单位 i 的潜在结果为 Y_i(1),Y_i(0)，若恰有 m 个单位从 N 个中等概率无放回随机分配处理，则差均值估计 τ̂=Ȳ_T−Ȳ_C 对有限总体平均处理效应 τ=N⁻¹Σ_i[Y_i(1)−Y_i(0)] 无偏。','independent-products variance-mean','每个单位入选概率相同，分别对处理组与对照组样本均值取随机化期望。',
      r'令 Z_i 为处理指示量。完全随机分配使 P(Z_i=1)=m/N，故 E[Ȳ_T]=E[(1/m)ΣZ_iY_i(1)]=(1/m)Σ(m/N)Y_i(1)=N⁻¹ΣY_i(1)。',
      r'同理每单位进入对照组概率 (N−m)/N，于是 E[Ȳ_C]=N⁻¹ΣY_i(0)。相减并用期望线性得 E[τ̂]=N⁻¹Σ[Y_i(1)−Y_i(0)]=τ。',
      r'这里潜在结果视作固定，随机性只来自分配；无偏不意味着每次实验都精确，也不说明异质处理效应可由单个单位同时观测。若分配概率不等或有失访，应改用相应加权估计。$\square$')
    P('sirs-threshold-equilibrium','applied/epidemic-models applied/population-dynamics','SIR 模型的无病平衡与初始增长阈值',r'在封闭人口 SIR 方程 S′=−βSI/N、I′=βSI/N−γI、R′=γI 中，总人口守恒；在给定易感人数 S₀ 附近，感染者初始增长率符号由 R₀=βS₀/(γN)−1 决定。','ftc-second','求和消去内部流量；将感染方程因式分解后直接读出线性增长率。',
      r'逐项相加得 (S+I+R)′=−βSI/N+βSI/N−γI+γI=0，所以若初始总和为 N，之后保持 N。若 S、I、R 非负，则该模型把感染者从 S 转入 I、再从 I 转入 R。',
      r'I′=I(βS/N−γ)。在任一时刻 I>0 时，I 的瞬时增长或下降由 βS/N−γ 的符号决定。若疾病引入时 S=S₀，则该系数等于 γ(βS₀/(γN)−1)=γ(R₀−1)。',
      r'故 R₀>1 时感染者初始斜率为正，R₀<1 时为负，R₀=1 时一阶增长率为零。这个局部判据不表示整个疫情终值或峰值；S 随时间下降，之后增长符号可改变。参数解释依赖此均匀混合确定性模型。$\square$')
    P('prime-infinite-euclid','numbertheory/prime-counting numbertheory/divisibility-primes','素数无穷多',r'素数有无穷多个。','unique-factorization prime-divisor','假设只有有限多个素数，构造一个不被其中任一个整除的整数。',
      r'反设全部素数为 p₁,…,p_r。令 M=p₁p₂…p_r+1。M>1，按素数除数引理有素数 q 整除 M。',
      r'q 若在列出的有限清单中，则 q 整除乘积 p₁…p_r，也整除 M，因而整除差 1，矛盾。故清单遗漏了素数 q，与其完备性矛盾。',
      r'所以素数无限。该证明不提供素数间隔或 π(x) 的精确渐近；这些需要额外解析数论工具。$\square$')
    P('zeta-euler-product','numbertheory/zeta-l-functions numbertheory/prime-counting','Re(s)>1 区域的 ζ 函数 Euler 乘积',r'对实数 s>1，ζ(s)=Σ_(n≥1)n^(−s)=∏_p(1−p^(−s))^(−1)，乘积按素数递增取极限。','unique-factorization integral-linearity','有限个几何级数相乘枚举所有仅含这些素因子的整数，绝对收敛控制极限遗漏项。',
      r'级数收敛：对递减正函数 x^(−s)，Σ n^(−s)≤1+∫₁^∞x^(−s)dx=1+1/(s−1)。取前有限个素数集合 P_y，有限乘积展开为所有素因子均在 P_y 中的正整数 n 的 n^(−s) 之和；各几何级数收敛且乘积有限，唯一分解保证每个此类 n 恰好出现一次。',
      r'当 y 增大，这些 n 的集合单调扩张，并最终包含任意固定正整数 n 的全部素因子，故有限乘积展开的和单调趋向完整 ζ 级数：给 ε>0，先选有限截断 N 使 n>N 的 ζ 尾和小于 ε；再取 y 大于 1,…,N 中所有素因子，有限乘积至少包含前 N 项且不超过全级数。夹逼得极限等于 ζ(s)。',
      r'所有项非负，乘积极限与上述级数极限一致。对复数 s 且 Re(s)>1，可用绝对值受控的同样论证得到绝对收敛版本；此处证明实数情形，不触及解析延拓或零点分布。$\square$')
    P('rational-root-theorem','numbertheory/integer-equations algebra/polynomial-rings','有理根定理',r'若整系数多项式 a_nx^n+…+a_0 有既约有理根 r/s（s>0），则 r|a₀ 且 s|a_n。','euclid-lemma','清除分母后，首末项分别给出整除关系，互素性消去交叉因子。',
      r'代入 r/s 并乘 s^n，得 a_n r^n+a_(n−1)r^(n−1)s+…+a₀s^n=0。除首项外其余项都含因子 s，所以 s|a_n r^n。由于 gcd(r,s)=1，Euclid 引理反复应用得 s|a_n。',
      r'同一等式除末项外每项都含因子 r，因此 r|a₀s^n；gcd(r,s)=1 再给 r|a₀。若 a₀=0 或 r=0，结论直接按多项式含 x 因子处理；既约零根写作 0/1，分母结论仍成立。$\square$')
    BASES['def-differential-forms']=dict(title='微分形式、拉回与外微分定义',statement='k-形式是切空间上的交替 k-线性形式场；拉回按 (φ*α)_x(v₁,…,v_k)=α_(φ(x))(dφ_xv₁,…,dφ_xv_k) 定义。外微分在坐标表达为 d(Σ_I f_I dx_I)=Σ_(j,I)(∂_j f_I)dx_j∧dx_I。代数展开给 φ*(α∧β)=φ*α∧φ*β 与 φ*(cα)=cφ*α。')
    P('symplectic-volume-preservation','geometry/symplectomorphisms geometry/symplectic-forms','辛变换保持相体积',r'若 2n 维微分同胚 φ 满足 φ*ω=ω，其中 ω 为非退化闭 2-形式，则 φ 保持由 ωⁿ/n! 定义的定向体积形式。','def-differential-forms','拉回保持外积与常数倍，故逐次外积后仍保持最高次形式。',
      r'由 φ*ω=ω 及拉回与外积相容，φ*(ωⁿ/n!)=(φ*ω)ⁿ/n!=ωⁿ/n!。非退化性确保 ωⁿ处处非零，因而它确实给出一个体积形式。',
      r'对任意可测区域 U，变量换元公式给 ∫_(φ(U))ωⁿ/n!=∫_U φ*(ωⁿ/n!)=∫_Uωⁿ/n!；若区域边界足够规则使积分成立，此即体积保持。形式结论是局部的，不要求 φ 保持某个额外欧氏度量。$\square$')
    P('inverse-function-one-dimension','geometry/smooth-manifolds geometry/curves-surfaces','一维逆函数定理',r'若 f 在开区间邻域 C¹ 且 f′(x₀)≠0，则 x₀ 有邻域使 f 单调可逆，逆函数 C¹ 且 (f⁻¹)′(y)=1/f′(f⁻¹(y))。','intermediate-value derivative-continuity','导数连续保持固定符号，均值定理给严格单调；差商取极限给逆导数。',
      r'连续性给出 x₀ 的区间 U，使 f′ 在 U 始终为正或始终为负。对 x<y，均值定理给 f(y)−f(x)=f′(c)(y−x)，故 f 严格单调并连续，因而在 U 到区间 f(U) 上有连续逆 g。',
      r'固定 y=f(x) 且 h→0。由 g 连续，k=g(y+h)−x→0，且 h=f(x+k)−f(x)。均值定理给 h/k=f′(c_k)，其中 c_k 位于 x 与 x+k 之间。于是当 h≠0 时，(g(y+h)−g(y))/h=k/h=1/f′(c_k)→1/f′(x)。',
      r'故 g′(y)=1/f′(g(y))。右边连续，因为 f′、g 连续且分母不为零，所以 g 为 C¹。此处是实一维版本；多维逆函数定理还需线性映射与收缩映射论证。$\square$')
    P('cr-angle-preservation','analysis/conformal-maps','复可微映射的局部保角性',r'若复可微函数 f 在 z₀ 处导数 f′(z₀)≠0，则其实线性微分是旋转与正比例缩放的复合，故保持该点处非零切向量间的有向夹角。','complex-basic-rules','复数乘以非零数在平面上等于旋转乘缩放；导数给出一阶线性近似。',
      r'由复导数定义，对小复增量 h 有 f(z₀+h)=f(z₀)+a h+o(|h|)，其中 a=f′(z₀)≠0。因此实微分 Df_(z₀) 是映射 h↦ah。',
      r'写 a=|a|e^(iθ)。乘以 a 把任一向量长度乘 |a|、方向角加 θ；两个向量共同加同一角，夹角差不变，且 |a|>0 保持定向。',
      r'故微分保角。此点态结论不单独证明 f 在邻域全局单射或存在共形逆映射；全局黎曼映射定理是更强命题。$\square$')
    P('ode-flow-semigroup','analysis/phase-space analysis/odes','自治常微分方程流的半群性质',r'对局部唯一解的自治方程 x′=F(x)，只要各解在所需时间区间存在，解流满足 Φ_(t+s)(x)=Φ_t(Φ_s(x)) 且 Φ_0(x)=x。','picard-lindelof','时间平移后的解与从中间状态重新起解具有相同初值，唯一性迫使相同。',
      r'常值时间曲线 x(t)=x 是以 x 为初值的零时刻状态，故按初值问题定义 Φ_0(x)=x。',
      r'固定 s，令 y(t)=x(t+s)。自治性给 y′(t)=F(y(t))，且 y(0)=x(s)=Φ_s(x)。因此 t↦x(t+s) 与从 Φ_s(x) 起始的解有相同方程和初值。',
      r'局部唯一性使两解在共同定义区间相等，于是 Φ_t(Φ_s(x))=x(t+s)=Φ_(t+s)(x)。时间区间可负时同理；这只是解存在区间上的局部流性质，不保证所有解全局存在。$\square$')
    P('saddle-node-normal-form','analysis/bifurcation analysis/equilibria-periodic-orbits','鞍结分岔的标准标量模型',r'方程 x′=μ+x² 的平衡点：μ<0 时恰有两个，μ=0 时有一个重根，μ>0 时没有；非零平衡点处线性化稳定性分别为 x=−√(−μ) 稳定、x=+√(−μ) 不稳定。','axiom-natural','平衡方程等价于 x²=−μ；线性化由右端对 x 的导数决定。',
      r'平衡点满足 0=μ+x²。若 μ<0，实根恰为 ±√(−μ)；若 μ=0，唯一根 x=0 且代数重数二；若 μ>0，平方非负使无实根。',
      r'在平衡 x* 处令 y=x−x*。精确展开 y′=(μ+(x*+y)²)−(μ+x*²)=2x*y+y²，线性方程为 y′=2x*y。其解 y(t)=y(0)e^(2x*t)，当 x*<0 指数衰减，当 x*>0 指数增长。',
      r'所以两根相撞并消失的参数变化是该正规形的鞍结分岔。线性化结论仅用于非双曲根；μ=0 的稳定性需由 y′=y² 的非线性方程另判。$\square$')
    P('finite-two-state-ergodic','analysis/ergodicity probability/markov-chains','两状态非周期链的分布收敛',r'若 P=[[1−a,a],[b,1−b]] 且 0<a,b<1，则唯一平稳分布 π=(b/(a+b),a/(a+b))，任意初始分布 μ 的 μP^n 指数收敛到 π。','finite-markov-stationary-unique','两状态概率递推的偏差每步乘特征值 1−a−b，其绝对值小于一。',
      r'设 p_n 为第 n 步处于状态 1 的概率，则 p_(n+1)=a(1−p_n)+(1−b)p_n=a+(1−a−b)p_n。固定点满足 p*=a+(1−a−b)p*，解得 p*=a/(a+b)；另一状态概率为 b/(a+b)。',
      r'相减得 p_(n+1)−p*=(1−a−b)(p_n−p*)，故 p_n−p*=(1−a−b)^n(p_0−p*)。由于 0<a,b<1，−1<1−a−b<1，偏差绝对值趋零且有几何速率。',
      r'因此分布收敛到上述平稳向量；条件排除了周期二的边界情形 a=b=1。有限一般状态空间的收敛需要不可约、非周期假设及相应证明，不能仅引用此二状态计算。$\square$')
    P('zfc-extensionality-pair-uniqueness','foundations/zfc-axioms','外延公理推出无序对唯一性',r'若集合 a,b 与 c,d 具有完全相同的元素，则 {a,b}={c,d}；集合只由其成员决定。','axiom-set','对任意对象逐项比较成员关系，应用外延公理。',
      r'按配对公理，x∈{a,b} 当且仅当 x=a 或 x=b；同理 x∈{c,d} 当且仅当 x=c 或 x=d。假设两集合成员相同，则对任意 x，这两个析取条件等价。',
      r'于是 {a,b} 与 {c,d} 有相同成员。ZFC 外延公理断言任意两个有相同成员的集合相等，故两无序对相等。即使 a=b 或 c=d，析取式仍成立，论证不需元素互异。$\square$')
    P('relative-consistency-model','foundations/relative-consistency foundations/soundness-completeness','模型存在蕴含理论相容',r'若一阶句子理论 T 有模型，则 T 不会在经典可靠演算中证明矛盾；因此模型论意义下 Con(T)。','fol-soundness','可靠性保证每个 T 模型满足所有可证结论，而矛盾句在任何结构都为假。',
      r'取 T 的一个模型 M。若假设 T⊢⊥，由一阶演算可靠性，每个满足 T 的结构都满足 ⊥，特别 M⊨⊥。',
      r'但 ⊥ 被定义为固定矛盾句，例如 θ∧¬θ；按经典满足关系不可能为真，矛盾。故 T 不证明 ⊥，即 T 相容。',
      r'这是语义相对相容性的一向蕴含；它没有在对象理论内部构造模型，也不自动给出 Gödel 第二不完备定理所需的算术化相容性证明。$\square$')
    P('so3-lie-algebra','algebra/lie-groups algebra/rotation-groups algebra/lie-algebras','旋转群 SO(3) 的李代数',r'SO(3)={Q:QᵀQ=I, det Q=1} 在单位元处的切空间是 so(3)={A:Aᵀ=−A}；该空间维数为 3。','rank-nullity matrix-exponential','对正交约束在单位元微分得反对称条件，反向由矩阵指数构造曲线实现每个切向量。',
      r'令 Q(t) 为 SO(3) 中经过 I 的可微曲线，Q(0)=I、Q′(0)=A。对恒等式 Q(t)ᵀQ(t)=I 求导并取 t=0，得 Aᵀ+A=0；行列式条件在单位元附近取连续分支，不增加一阶切向约束。因此切向量必反对称。',
      r'反过来若 Aᵀ=−A，矩阵指数 E(t)=exp(tA) 满足 E′=AE。求导 E(t)ᵀE(t) 得 Eᵀ(Aᵀ+A)E=0，初值为 I，故 EᵀE=I。det E 连续且取值只能为 ±1，E(0) 行列式为 1，故始终为 1。且 E′(0)=A，于是 A 是 SO(3) 的切向量。',
      r'反对称 3×3 矩阵由三个上三角元素自由决定，对角为零、下三角由其相反数确定，故维数 3。对应 Lie 括号为矩阵交换子，闭合性由转置计算验证。$\square$')
    P('quantum-hermitian-real-spectrum','applied/quantum-theory algebra/spectral-decomposition','Hermitian 矩阵的特征值为实数',r'若 A=A* 且 Av=λv、v≠0，则 λ∈R。','complex-basic-rules','内积自伴性使 ⟨Av,v⟩ 同时等于 λ 与其共轭乘以 ‖v‖²。',
      r'由 Av=λv，按内积对第一变量共轭线性或第二变量共轭线性的约定，⟨Av,v⟩ 等于 λ 或其共轭乘以 ‖v‖²；自伴性同时给 ⟨Av,v⟩=⟨v,Av⟩，后者是前者的复共轭。',
      r'因此 λ‖v‖²=\bar λ‖v‖²。因 v≠0，‖v‖²>0，约去得 λ=\bar λ，故 λ 为实数。该结论不要求先证明 Hermitian 矩阵可对角化。$\square$')
    P('dirichlet-rational-approximation','numbertheory/heights numbertheory/lattice-methods numbertheory/diophantine-approximation','Dirichlet 有理逼近定理',r'对任意实数 α 与正整数 Q，存在整数 p,q，1≤q≤Q 且 |qα−p|<1/Q。若 α 无理，则可取到无穷多个不同分数 p/q 使 |α−p/q|<1/q²。','binomial-count archimedean','先证明实数小数部分存在，再将 Q+1 个小数部分放进 Q 个等长区间，两个落同区间后相减。',
      r'对每个实数 x=jα，Archimedes 性质给出整数 M>|x|+1。有限集合 {m∈Z:−M≤m≤x} 非空，取其最大元 n；若 x≥n+1，则 n+1 仍在集合中，矛盾。因此 n≤x<n+1，定义 ⌊x⌋=n、{x}=x−n∈[0,1)。这也逐项证明本论证所用整数部分存在。',
      r'取 x_j={jα}，j=0,…,Q，共 Q+1 个小数部分，均位于 [0,1)。将 [0,1) 分成 Q 个半开区间，每段长 1/Q。抽屉原理保证存在 i<j 落在同一段。',
      r'两者差的绝对值小于 1/Q，且 x_j−x_i=(j−i)α−(⌊jα⌋−⌊iα⌋)。令 q=j−i、p=⌊jα⌋−⌊iα⌋，得 1≤q≤Q 与所需严格不等式。',
      r'若 α 无理，则 p/q 不等于 α。对每个 Q 得到误差 |α−p/q|<1/(qQ)≤1/q²。若只出现有限多个有理数 p/q，它们到无理 α 的最小距离为正；但 |α−p/q|<1/(qQ)≤1/Q，令 Q 趋于无穷即矛盾。因此有无穷多个不同有理数值。将各分数约为既约形式 p′/q′，误差不变且 q′≤q，故 |α−p′/q′|<1/q²≤1/(q′)²；不同有理数值仍给出无穷多个不同既约分数。$\square$')
    P('quadratic-radical-formula','algebra/solvability-by-radicals algebra/polynomial-rings','二次方程根式公式',r'在特征不为 2 的域中，ax²+bx+c=0（a≠0）的根在添加判别式平方根后为 x=(-b±√(b²−4ac))/(2a)；故二次方程可由根式求解。','def-ring-field','配方把二次方程化为一个平方等式。',
      r'除以 a 得 x²+(b/a)x+c/a=0。两边加 (b/(2a))²，并整理： (x+b/(2a))²=(b²−4ac)/(4a²)。',
      r'取域的代数闭包中的平方根 δ 满足 δ²=b²−4ac。平方等式等价于 x+b/(2a)=±δ/(2a)，移项得公式中的两根。若判别式为零，两根相同；若判别式非平方，允许按根式扩域添加其平方根。',
      r'二次公式证明二次多项式可解，不证明一般高次方程可解；一般五次方程不存在统一根式公式是更强的伽罗瓦理论结论。$\square$')
    P('hamiltonian-energy-conservation','geometry/hamiltonian-systems applied/classical-mechanics','哈密顿流守恒能量',r'若 H(q,p) 为 C¹ 哈密顿量且轨道满足 q̇=∂H/∂p、ṗ=−∂H/∂q，则沿每条经典解 H(q(t),p(t)) 恒定。','ftc-second','链式法则下两项逐项抵消。',
      r'沿可微解对复合函数求导，链式法则给 dH/dt=Σ_i[(∂H/∂q_i)q̇_i+(∂H/∂p_i)ṗ_i]。',
      r'代入哈密顿方程，求和变为 Σ_i[(∂H/∂q_i)(∂H/∂p_i)−(∂H/∂p_i)(∂H/∂q_i)]=0。故导数处处为零。',
      r'由中值定理或微积分基本定理，任意时间区间上的 H 值相同。能量守恒依赖自治 Hamiltonian；显含时间的 H 通常有 dH/dt=∂H/∂t。$\square$')
    P('cyclic-coordinate-momentum','applied/classical-mechanics geometry/lagrangian-submanifolds','循环坐标对应广义动量守恒',r'若拉格朗日量 L(q,q̇,t) 不依赖坐标 q_j，则满足 Euler–Lagrange 方程的轨道上广义动量 p_j=∂L/∂q̇_j 为常数。','ftc-second','Euler–Lagrange 方程右端 ∂L/∂q_j 为零。',
      r'Euler–Lagrange 方程对第 j 坐标写作 d/dt(∂L/∂q̇_j)=∂L/∂q_j。循环坐标条件使右端恒为零。',
      r'因此 p_j 的时间导数为零；对任意两时刻积分得 p_j(t₂)−p_j(t₁)=0。若拉格朗日量显含 q_j，结论一般失效；对称性更一般的守恒量由 Noether 定理刻画。$\square$')
    P('scalar-feedback-stabilization','applied/feedback-control applied/state-space','可控标量系统的状态反馈稳定化',r'对连续时间系统 ẋ=ax+bu，若 b≠0，则存在状态反馈 u=−kx 使闭环指数渐近稳定。','linear-controllability-kalman','选择增益使唯一闭环特征值为负数。',
      r'代入反馈得 ẋ=(a−bk)x。取 k=(a+1)/b（因 b≠0 合法），闭环方程变成 ẋ=−x。',
      r'分离变量或直接求解得 x(t)=x(0)e^(−t)，所以任意初值下 x(t)→0，且 |x(t)|≤|x(0)|e^(−t)。这证明一维连续时间情形；高维可控系统的极点配置需要完整线性代数证明。$\square$')
    P('least-squares-normal-equations','applied/parameter-calibration applied/convex-optimization','最小二乘解满足正规方程',r'对实矩阵 A 与向量 b，若 x* 最小化 ‖Ax−b‖₂²，则 Aᵀ(Ax*−b)=0；若 A 满列秩，唯一最小二乘解为 (AᵀA)⁻¹Aᵀb。','convex-local-global','沿任意方向求二次目标的一阶导数为零，等价于残差正交于列空间。',
      r'令 r=Ax*−b。对任意方向 h，函数 g(t)=‖A(x*+th)−b‖² 在 t=0 取最小值。展开为 ‖r+tAh‖²=‖r‖²+2t hᵀAᵀr+t²‖Ah‖²，因此其 t=0 导数为 2hᵀAᵀr，必须对所有 h 为零。',
      r'故 Aᵀr=0，即正规方程 AᵀAx*=Aᵀb。若 A 列满秩，则对非零 h，hᵀAᵀAh=‖Ah‖²>0，AᵀA 正定可逆，解唯一并为所列式。',
      r'反过来满足正规方程的 x* 是全局最小点，因为对任意 h，目标差 ‖r+Ah‖²−‖r‖²=2hᵀAᵀr+‖Ah‖²=‖Ah‖²≥0。秩亏时最小点仍存在但参数解可能不唯一。$\square$')
    P('omitted-variable-bias','probability/confounding probability/identification-conditions','遗漏变量偏差的线性代数公式',r'若中心化变量满足 Y=βD+γU+ε 且 E[Dε]=0，单变量总体最小二乘回归 Y 对 D 的系数为 β+γ Cov(D,U)/Var(D)（Var(D)>0）。','least-squares-normal-equations variance-mean','把总体正规方程中的协方差按结构方程线性展开。',
      r'中心化后一元最小二乘目标为 E[(Y−bD)²]。对 b 求导并令零，得 b=E[DY]/E[D²]=Cov(D,Y)/Var(D)。',
      r'代入 Y=βD+γU+ε，Cov(D,Y)=βVar(D)+γCov(D,U)+Cov(D,ε)。由外生条件 Cov(D,ε)=0，除以 Var(D) 得 b=β+γCov(D,U)/Var(D)。',
      r'所以遗漏变量 U 与处理 D 不相关，或 U 不影响 Y（γ=0）时该项消失；否则一般有偏。这个代数式本身不建立因果解释，结构方程与外生条件必须由研究设计或额外假设支持。$\square$')
    P('beta-binomial-predictive','probability/posterior-predictive probability/conjugate-priors','Beta-Binomial 后验预测分布',r'若 θ∼Beta(α,β)，给定 θ 后未来 m 次 Bernoulli 独立，未来成功数 K 的预测概率为 P(K=k)=C(m,k)B(α+k,β+m−k)/B(α,β)。','beta-gamma-recurrence','对条件二项概率关于 Beta 先验密度积分并合并幂次。',
      r'条件于 θ，K 的概率为 C(m,k)θ^k(1−θ)^(m−k)。先验密度为 θ^(α−1)(1−θ)^(β−1)/B(α,β)。',
      r'全概率公式对 θ 积分：P(K=k)=C(m,k)/B(α,β)∫₀¹θ^(α+k−1)(1−θ)^(β+m−k−1)dθ。按 Beta 函数定义，该积分为 B(α+k,β+m−k)，得到公式。',
      r'这些概率之和为一也可由二项式定理先对固定 θ 求和为 1，再对先验积分；故公式确为概率分布。预测成功次数通常相关，因为共享的随机 θ 被积分掉。$\square$')
    P('neyman-pearson-lemma','probability/hypothesis-testing','Neyman–Pearson 引理的简单假设版本',r'对具有密度 p₀,p₁ 的两个简单假设，在给定显著性水平 α 下，似然比检验 φ*=1{p₁/p₀>c}（边界随机化以达到 α）使检验功效最大。','integral-linearity','比较任意竞争检验与似然比检验的逐点加权差，符号处处非负。',
      r'设 φ 为任意 [0,1]-值检验且 E₀φ≤α；选择阈值 c≥0，使 φ* 在似然比大于 c 处取 1、小于 c 处取 0，并在等号处适当随机化，从而 E₀φ*=α（若可达到）。',
      r'逐点有 (φ*−φ)(p₁−c p₀)≥0：若 p₁>cp₀，则 φ*=1 且因 φ≤1 两因子非负；若 p₁<cp₀，则 φ*=0 且 φ≥0，两因子同为非正；等号处乘积为零。',
      r'积分得 E₁φ*−E₁φ≥c(E₀φ*−E₀φ)≥0，因为 c≥0 且 E₀φ* =α≥E₀φ。故 φ* 功效最大。若密度比阈值无法精确达到 α，可在边界集合随机化；支配结论仍成立。$\square$')
    P('rational-unit-circle-points','numbertheory/rational-points numbertheory/integer-equations','单位圆有理点的斜率参数化',r'单位圆 x²+y²=1 上除 (-1,0) 外的有理点恰为 x=(1−t²)/(1+t²)、y=2t/(1+t²)，其中 t∈Q；(-1,0) 是遗漏点。','euclid-lemma','过圆上固定点作有理斜率直线，与圆的第二交点由二次方程求出。',
      r'取斜率参数直线 y=t(x+1)，它经过 (-1,0)。代入圆方程：x²+t²(x+1)²=1。一个根为 x=−1，因对应已知交点；展开并因式分解另一个根，得 x=(1−t²)/(1+t²)，再代回直线得 y=2t/(1+t²)。',
      r'若 t∈Q，分母非零，所得 x,y 为有理数；直接计算 (1−t²)²+(2t)²=(1+t²)²，故点在单位圆上。',
      r'反之设有理点 (x,y)≠(−1,0)。因 x≠−1（圆方程若 x=−1 则 y=0），令 t=y/(x+1)∈Q。由 y²=(1−x)(1+x) 可得 t²=(1−x)/(1+x)，解得 x=(1−t²)/(1+t²)，y=t(x+1)=2t/(1+t²)。所以参数化穷尽所有有理点。$\square$')
    P('rational-algebraic-integer','numbertheory/algebraic-integers numbertheory/number-fields','有理代数整数必为整数',r'若有理数 r 是某个首一整系数多项式的根，则 r∈Z。','rational-root-theorem','有理根定理给既约分数的分母整除首项系数 1。',
      r'设 r=a/b 为既约分数、b>0，并满足 x^n+c_(n−1)x^(n−1)+…+c₀=0，其中 c_i∈Z。此多项式首项系数为 1。',
      r'有理根定理（前引理）给 b|1，所以 b=1。于是 r=a 为整数。整数反过来是首一一次多项式 x−a 的根，故有理代数整数恰为整数。$\square$')
    P('wilson-primality-test','numbertheory/primality-testing numbertheory/divisibility-primes','Wilson 定理及其素性判据',r'n>1 为素数当且仅当 (n−1)!≡−1 (mod n)。','prime-divisor unique-factorization','素数模下非零剩余成对与其逆元相消；合数情形阶乘被 n 整除（n=4 单独核算）。',
      r'若 n=p 为素数，非零模 p 剩余构成乘法群。将每个元素与其逆元配对，乘积为 1；自逆元素满足 x²≡1，因此 p|(x−1)(x+1)。因 p 素，x≡±1。于是除 1 与 −1 外所有元素成对相消，(p−1)!≡−1 mod p。p=2 也直接成立。',
      r'若 n 合成且 n≠4，写 n=ab，1<a≤b<n。若 a<b，则 a,b 是 1,…,n−1 中不同因子，故 n| (n−1)!。若 a=b，则 n=a²；除 a=2（n=4）外，a 与 2a 是两个不超过 n−1 的因子，故 n| (n−1)!。n=4 时 3!=6≡2 而 −1≡3 mod4。',
      r'因此每个合数的阶乘余数为 0（n=4 为 2），均不等于 −1；结合素数方向即得判据。Wilson 判据虽是充要条件，但直接算阶乘对二进制大整数并非已知的高效素性测试。$\square$')
    P('padic-ultrametric','numbertheory/local-fields','p 进绝对值的超度量不等式',r'定义非零整数 n 的 p 进赋值 v_p(n) 为 p 的指数并令 |n|_p=p^(−v_p(n))，延拓到有理数，则 |x+y|_p≤max(|x|_p,|y|_p)。','prime-divisor unique-factorization','整除的赋值满足 v_p(x+y)≥min(v_p(x),v_p(y))。',
      r'先取非零有理数 x,y，令 k=min(v_p(x),v_p(y))。写 x=p^k a、y=p^k b，其中 a,b 的 p 进赋值非负（有理分母已约去 p 因子）。',
      r'x+y=p^k(a+b)，而 a+b 的 p 进赋值非负，故 v_p(x+y)≥k。映射 r↦p^(−v_p(r)) 对非零有理数乘法相容，因此 |x+y|_p≤p^(−k)=max(|x|_p,|y|_p)。若 x+y=0，左边为零，不等式直接成立。',
      r'取完备化可将不等式连续延伸到 Q_p。它比普通三角不等式强；本证明只建立绝对值性质，不构造 Q_p 的完备化。$\square$')
    P('mobius-upper-half-plane','numbertheory/modular-transformations','模变换保持上半平面',r'若 a,b,c,d∈R 且 ad−bc=1，则 τ↦(aτ+b)/(cτ+d) 将上半平面 Imτ>0 映入自身。','complex-basic-rules','直接乘以分母的共轭并取虚部。',
      r'当 Imτ>0 时，cτ+d≠0：若 c≠0，其虚部 c Imτ 非零；若 c=0，则行列式条件迫使 d≠0。故变换有定义。',
      r'乘分母共轭并展开，Im((aτ+b)/(cτ+d))=(ad−bc)Imτ/|cτ+d|²。行列式为 1，分母模平方严格正，所以虚部仍为正。',
      r'因此特别地整数矩阵 SL₂(Z) 的标准模变换保持上半平面。该计算只证保持性，模形式的变换律和基本域还需另外证明。$\square$')
    P('contractible-fundamental-group','geometry/fundamental-group','可缩空间的基本群平凡',r'若拓扑空间 X 可缩，则对任意基点 x₀，其基本群 π₁(X,x₀) 为平凡群。','continuous-compact','可缩给出恒等映射到常值映射的同伦，故任意环路可在自由同伦下收缩为常值环路。',
      r'可缩意味着存在同伦 H:X×[0,1]→X，使 H(x,0)=x、H(x,1)=x* 为固定点。给定基于 x₀ 的环路 γ，映射 G(s,t)=H(γ(s),t) 连续；G(s,0)=γ(s)，G(s,1)=x*，且 s=0,1 两条边均为路径 α(t)=H(x₀,t)。',
      r'虽然中间环路的基点沿 α 移动，但可将方形 [0,1]² 的边界按次序读取：下边是 γ，上边为常值，左右边是 α 与其反向。该边界在 X 中由 G 延拓到整张方形，所以边界环路可缩。等价地，γ 在基点 x₀ 处与 α·常值·α⁻¹ 基同伦，后者可缩为常值。',
      r'因此每个基于 x₀ 的环路类都是单位元，π₁(X,x₀) 平凡。这里可缩同伦允许基点移动；方形边界论证解释了为何仍推出基点基本群结论。$\square$')
    P('cohomology-d-square-zero','geometry/cohomology geometry/homology-groups-topology','外微分满足 d²=0',r'对光滑微分形式，外微分算子满足 d(dω)=0；因此精确形式皆闭形式。','def-differential-forms','坐标表达中混合二阶偏导相等，而交替基形式交换时变号。',
      r'在局部坐标写 k-形式 ω=Σ_I f_I dx_(i₁)∧…∧dx_(i_k)。外微分按 dω=Σ_j,I (∂_j f_I) dx_j∧dx_I 定义。',
      r'再作用一次，任意系数二阶项为 (∂_ℓ∂_j f_I) dx_ℓ∧dx_j∧dx_I。交换 j 与 ℓ 的对应项时，C² 光滑性给 ∂_ℓ∂_j f_I=∂_j∂_ℓ f_I，而外积反交换给 dx_ℓ∧dx_j=−dx_j∧dx_ℓ；两项相消。j=ℓ 项因 dx_j∧dx_j=0 自身为零。',
      r'所有项均成对消去，故 d²ω=0。若 dω=0，称 ω 闭；若 ω=dη，则 dω=d²η=0，所以精确形式总是闭形式，但反向需拓扑条件。$\square$')
    P('chain-components-h0','geometry/homology-groups-topology','单纯同调的零维群记录路径分支',r'对有限三角剖分 K，H₀(K;Z) 是由顶点生成、并施加“同一边两端相等”关系的自由阿贝尔群，故每个路径连通分支贡献一个 Z。','homology-defined chain-map-homology','边界把一条边的两端点之差作为关系；沿边路径传递生成同一分支等价。',
      r'0 链群 C₀ 是全部顶点所生成的自由阿贝尔群。边 e=[v₀,v₁] 的边界为 ∂₁e=v₁−v₀；由于没有更低维边界，H₀=C₀/im∂₁。',
      r'取商后每条边两端顶点相等，沿任意边路径反复使用关系，故同一 1-骨架连通分支的所有顶点类相同。反之边界的每个生成元只涉及同一分支内的两个端点，因此不同分支的顶点类不会被关系识别。',
      r'每个分支选一个代表顶点，代表类彼此独立并生成整个商群，所以 H₀≅Z^c，其中 c 为 1-骨架分支数。有限三角复形的几何实现分支恰由其 1-骨架分支给出，因为高维单形通过其边连接顶点。$\square$')
    P('integer-ideal-factorization','numbertheory/ideal-factorization algebra/ideals','整数环中的非零理想唯一分解',r'每个非零理想 I⊲Z 唯一写成有限个不同素理想 (p) 的正整数幂之积；若 I=nZ 且 n=∏p^{e_p}，则 I=∏(p)^{e_p}。','unique-factorization prime-divisor','先用最小正元素说明整数理想主生成，再用整数素因子分解逐项计算理想乘积。',
      r'取非零理想 I。它含非零整数，若含负数也含其相反数，故存在最小正整数 n∈I。对任意 a∈I，带余除法写 a=qn+r、0≤r<n；因 a、qn∈I，r∈I，最小性迫使 r=0。因此 I⊆nZ；而 n∈I 及理想封闭给 nZ⊆I，故 I=nZ。',
      r'唯一分解给 n=∏p^{e_p}。主理想乘积 (a)(b)=(ab)：每个有限和项都是 ab 的倍数，而 ab 本身是乘积生成元。归纳得 nZ=∏(pZ)^{e_p}。',
      r'若另有素理想幂分解，Z 的非零素理想由其正生成元为素数可知恰为 pZ；理想相等等价于正生成元相等，整数唯一分解迫使每个素数指数相同。因此该分解唯一。此论证针对 PID Z，不证明一般数环的理想分解定理。$\square$')
    P('pid-class-group-trivial','numbertheory/class-groups algebra/ideals','主理想整环的理想类群平凡',r'若整环 R 的每个非零理想均主生成，则其理想类群 Cl(R) 为平凡群。','ideal-quotient','每个分数理想类都有主生成元，因而代表理想与单位理想相差一个主分数理想。',
      r'理想类群由非零分数理想对主分数理想取商构成。任取非零分数理想 J，按定义存在非零 d∈R 使 dJ⊆R；dJ 是 R 的非零整理想，故由假设 dJ=aR。',
      r'于是 J=(a/d)R 是主分数理想，其在类群中的类就是单位类。任意类皆单位类，因此类群只有一个元素。对 R=Z 即给出其类数为一；数环的理想类群有限性并不由此平凡特例推出。$\square$')
    P('sieve-inclusion-exclusion','numbertheory/sieve-methods','有限筛的容斥计数公式',r'对有限集合 A 与子集 B₁,…,B_m，未落入任何 B_i 的元素数为 Σ_(J⊆{1,…,m})(−1)^|J| |A∩⋂_(j∈J)B_j|，空交约定为 A。','finite-boolean-atoms binomial-count','对每个元素独立计算它在交替和中的总系数。',
      r'固定 x∈A，令 r 为包含 x 的集合 B_i 个数。x 在右侧总系数为 Σ_(J⊆[m], J⊆I_x)(−1)^|J|=Σ_(j=0)^r C(r,j)(−1)^j=(1−1)^r。',
      r'若 r=0，该系数为 1，恰应计入未被任何 B_i 覆盖的左侧；若 r>0，系数为 0，恰应排除。对全部 x∈A 求和即可得到等式。',
      r'这是筛法常用的精确有限容斥恒等式；实际筛上界会截断此交替和，所得误差还需另行控制。$\square$')
    P('prime-exponential-sum-geometric','numbertheory/exponential-sums','线性相位指数和的几何级数界',r'若 θ∉Z，则对任意整数 M≤N，有 |Σ_(n=M)^N exp(2πi nθ)|≤1/|sin(πθ)|。','complex-basic-rules','闭式几何级数的分母模长为 2|sin(πθ)|，分子模长至多 2。',
      r'令 z=exp(2πiθ)。θ 非整数保证 z≠1。几何级数求和得 Σ_(n=M)^N z^n=z^M(1−z^(N−M+1))/(1−z)。',
      r'有 |z^M|=1、|1−z^k|≤2，而 |1−z|=|1−exp(2πiθ)|=2|sin(πθ)|。取模即得上界。$\square$')
    BASES['def-riemannian-metric']=dict(title='黎曼度量与联络约定',statement='黎曼度量 g 是切空间上的光滑正定对称双线性形式。联络的 Christoffel 系数 Γ^k_ij 描述协变导数；torsion-free 指 Γ^k_ij=Γ^k_ji，度量相容指坐标式 ∂_k g_ij=Γ^ℓ_ki g_ℓj+Γ^ℓ_kj g_iℓ。仿射参数测地线定义为 ∇_(γ̇)γ̇=0。')
    P('levi-civita-existence','geometry/riemannian-metric geometry/curvature-geodesics','黎曼度量存在唯一 Levi-Civita 联络',r'每个光滑黎曼度量局部存在唯一 torsion-free 且与度量相容的联络，其 Christoffel 符号为 Γ^k_ij=½g^(kℓ)(∂_i g_jℓ+∂_j g_iℓ−∂_ℓ g_ij)。','def-riemannian-metric','将度量相容方程对三个指标循环排列，利用联络对称性解出系数。',
      r'在坐标图中 g_ij 是正定矩阵场，故逆矩阵 g^(ij) 光滑存在。定义 Γ^k_ij 为所列公式；下标 i,j 对称，因此联络无挠。',
      r'将公式乘 g_(mk) 并对 k 求和，得 g_(mℓ)Γ^ℓ_ki=½(∂_k g_im+∂_i g_km−∂_m g_ki)。再交换 i,j 写出 g_(mℓ)Γ^ℓ_kj=½(∂_k g_jm+∂_j g_km−∂_m g_kj)。在所需坐标相容恒等式中取 m=j 与 m=i 相加，混合项抵消，得 ∂_k g_ij=Γ^ℓ_ki g_ℓj+Γ^ℓ_kj g_iℓ。',
      r'反之，若另一个联络系数满足这两个条件，记 Γ_(kij)=g_(jℓ)Γ^ℓ_ki。度量相容给 ∂_k g_ij=Γ_(kij)+Γ_(kji)，无挠给 Γ_(kij)=Γ_(ikj)。对 (k,i,j) 循环写三条相容式，两条相加减第三条，唯一解为 Γ_(kij)=½(∂_k g_ij+∂_i g_kj−∂_j g_ki)。乘逆度量升指标正是给定公式，故唯一。局部坐标公式在坐标变换下定义同一协变导数，因其可由上述内在两条件唯一刻画，故局部构造粘合。$\square$')
    P('gaussian-curvature-geodesic-speed','geometry/curvature-geodesics geometry/riemannian-metric','黎曼测地线保持速度',r'若 γ 是黎曼流形上的仿射参数测地线，则 ‖γ̇(t)‖_g 为常数。','levi-civita-existence','Levi-Civita 联络与度量相容，测地线满足 ∇_(γ̇)γ̇=0。',
      r'沿曲线对速度平方求导。度量相容性给 d/dt g(γ̇,γ̇)=2g(∇_(γ̇)γ̇,γ̇)。',
      r'测地线方程令加速度 ∇_(γ̇)γ̇=0，故上述导数为零，速度平方恒定。因范数非负，速度范数也恒定。',
      r'结论依赖仿射参数；任意非线性重参数化通常不保持常速。测地线存在唯一性及联络的构造是其前置理论。$\square$')
    P('riemannian-distance-symmetry','geometry/riemannian-metric','黎曼距离的对称性',r'若连通黎曼流形两点间距离定义为连接它们的分段光滑曲线长度下确界，则 d(p,q)=d(q,p)。','def-riemannian-metric','反向参数化保持曲线长度，因而两方向可行曲线长度集合相同。',
      r'若 γ:[0,1]→M 从 p 到 q，定义反向曲线 γ̄(t)=γ(1−t)，它从 q 到 p，速度为 −γ̇(1−t)。',
      r'黎曼范数满足 ‖−v‖=‖v‖，变量换元给 L(γ̄)=∫₀¹‖γ̇(1−t)‖dt=L(γ)。所以 p 到 q 每条曲线都对应一条等长反向曲线，反向操作也是自身的逆，两个长度集合相同；取下确界得距离对称。$\square$')
    BASES['def-covering-map']=dict(title='覆盖映射定义',statement='连续满射 p:E→B 是覆盖映射，若每个 b∈B 有开邻域 U，使 p⁻¹(U) 是两两不交开集之并，且 p 在每一片到 U 上为同胚。')
    P('covering-path-lift-uniqueness','geometry/fibrations geometry/fundamental-group','覆盖空间路径提升的唯一性',r'若 p:E→B 是覆盖映射，给定路径 γ:[0,1]→B 及 e₀∈p⁻¹(γ(0))，至多有一条连续提升 γ̃ 满足 γ̃(0)=e₀ 且 p∘γ̃=γ。','def-covering-map','若两提升不同，首次分离时落在同一均匀覆盖邻域的不同片中，与片上 p 单射矛盾。',
      r'设 γ̃₁、γ̃₂ 是两条具有相同初值的提升。令 A={t:对所有 s∈[0,t]，γ̃₁(s)=γ̃₂(s)}。由初值连续性及覆盖邻域中 p 在每张片上同胚，A 含某个初始小区间。',
      r'令 τ 为 A 的上确界。连续性给 γ̃₁(τ)=γ̃₂(τ)。取 γ(τ) 的均匀覆盖邻域 U；因 γ 连续，τ 附近的路径值留在 U。τ 处两提升同在某一片 V（相同点唯一所在片），缩小邻域后连续性使二者仍在 V。',
      r'p|_V 单射且两提升投影都等于 γ，所以 τ 邻域内二者相同；若 τ<1，这将 A 向右延伸，矛盾。故 τ=1，全部时刻相同。此证明给唯一性；存在性需用紧区间有限分割逐片构造。$\square$')
    P('singular-cusp-jacobian','geometry/singularities geometry/algebraic-varieties-geometry','平面尖点 y²=x³ 在原点奇异',r'代数曲线 C={(x,y):y²=x³} 在原点的梯度判据给奇异点，而在其余点梯度非零。','chain-rule','定义多项式 F=y²−x³，其梯度在曲线上直接计算。',
      r'令 F(x,y)=y²−x³。隐函数定理的光滑判据要求至少一个偏导非零；∇F=(−3x²,2y)。',
      r'若曲线上 (x,y)≠(0,0)，则不可能同时 x=0 与 y=0，故梯度至少一个分量非零，曲线在该点是光滑一维子流形。原点处梯度为零，判据失效。',
      r'进一步，实曲线可参数化为 (x,y)=(t²,t³)，在 t=0 的速度为 (0,0)，呈尖点而非正则浸入曲线；复代数曲线的奇异性同由梯度判据检测。梯度为零一般表示候选奇点，需结合局部维数确认。$\square$')
    BASES['def-rational-map']=dict(title='不可约代数簇间有理映射定义',statement='有理映射 X⇢Y 是从 X 的某非空开子集到 Y 的正则映射，按在稠密开集上相等识别。双有理表示存在反向有理映射，使两复合在有定义的稠密开集上为恒等。')
    P('birational-open-isomorphism','geometry/birational-geometry geometry/algebraic-varieties-geometry','双有理映射在稠密开集上互逆',r'若不可约代数簇 X,Y 之间有有理映射 f,g，且 g∘f 与 f∘g 在定义处分别等于恒等映射，则存在稠密开集 U⊆X、V⊆Y，使 f:U→V 与 g:V→U 互为正则同构。','def-rational-map','有理映射在定义域开集上正则；有限个稠密开条件取交仍稠密。',
      r'取 f、g 各自最大定义开集 D_f⊆X、D_g⊆Y。按有理映射定义，它们在这些开集上由多项式商局部表示，因而是正则映射。',
      r'考虑 U=D_f∩f⁻¹(D_g)∩Dom(g∘f=id)；由复合定义域及给定恒等关系，U 是非空开集。不可约性使任一非空开集稠密。令 V=g⁻¹(U)∩D_g，并可再缩小 U、V 使两复合关系同时处处成立。',
      r'在 U、V 上，f 与 g 正则且 g∘f=id_U、f∘g=id_V，因此它们互为代数簇同构。双有理不意味着原簇全局同构，差异可集中在被删去的闭子集。$\square$')
    P('tor-cyclic-groups','algebra/ext-tor algebra/modules','循环群张量导出的 Tor 计算',r'对正整数 n,m，有 Tor₁^Z(Z/nZ,Z/mZ)≅Z/gcd(n,m)。','def-chain rank-nullity','用自由分解计算 Tor 后，问题化为模 m 中被 n 消去的元素子群。',
      r'有自由 Z-模分解 0→Z --×n→ Z→Z/nZ→0：乘 n 单射，其余处正合。按 Tor 的自由分解定义，与 Z/mZ 张量后得到复形 0→Z/mZ --×n→ Z/mZ→0，其第一同调即乘 n 映射的核。',
      r'令 g=gcd(n,m)，写 n=gn′、m=gm′ 且 gcd(n′,m′)=1。剩余类 x mod m 落入核当且仅当 m|nx，即 gm′|gn′x，等价于 m′|x。模 gm′ 中满足此条件的类恰为 0,m′,2m′,…,(g−1)m′，构成循环群阶 g。',
      r'因此核同构于 Z/gZ，得到公式。不同教材用同调定义 Ext/Tor；此处只计算由该自由分解定义的 Tor₁。$\square$')
    P('dimension-theorem-vector','algebra/dimension-theory algebra/basis-dimension','线性映射的秩—零度维数公式',r'有限维向量空间 V 上线性映射 T:V→W 满足 dim V=dim ker T+dim im T。','rank-nullity basis-extension','先取核的基，再把它扩成 V 的基；扩充向量的像构成像空间的基。',
      r'取 ker T 的基 u₁,…,u_k，并按基扩充定理补为 V 的基 u₁,…,u_k,v₁,…,v_r。',
      r'T(v_j) 张成 im T：任意 x∈V 展开为核基与 v_j 的线性组合，作用 T 后核项消失。',
      r'若 Σ a_jT(v_j)=0，则 Σa_jv_j∈ker T，故可由 u_i 线性组合表示；V 的这组基线性无关迫使所有 a_j=0。因此这些像是像空间的一组基，dim im T=r。总基长 k+r，故 dim V=k+r=dim ker T+dim im T。$\square$')
    P('quintic-binomial-radicals','algebra/quintic algebra/solvability-by-radicals','二项式方程可用根式求解',r'对任意正整数 n，方程 x^n=a 在含 a 的代数闭包中可通过一次 n 次根式扩张求解；特别地，纯五次方程可根式求解。','def-ring-field','按根式扩张的定义直接添加 a 的 n 次根。',
      r'若 a=0，唯一根 x=0 已在底域中。若 a≠0，在代数闭包中取 α 满足 α^n=a；定义 K′=K(α)，它是由 n 次根式生成的扩域。',
      r'α 满足原方程，且同一代数闭包中的全部根为 αζ，其中 ζ 遍历 n 次单位根；因为 (αζ)^n=a。若要求把所有根都放入一个根式扩域，再相继添加单位根即可。',
      r'因此二项式方程的根可由根式表示。此结论不意味着一般五次多项式可根式求解；一般五次不可解需证明其一般伽罗瓦群非可解。$\square$')
    P('sieve-trial-factorization-complexity','numbertheory/integer-factorization numbertheory/primality-testing','试除法的正确性与二进制复杂度',r'对整数 N>1，若 N 合数则有素因子 p≤√N；逐一试除至 √N 可判定素性，但该算法对输入位数的最坏时间不是多项式界。','prime-divisor','合数分解 N=ab 可排序为 1<a≤b，从而 a≤√N；每次除法用有限整数运算。',
      r'若 N 合数，写 N=ab 且 1<a≤b，则 a²≤ab=N，故 a≤√N。a 有素因子 p≤a，因此 N 有素因子不超过 √N。',
      r'逐个检验不超过 √N 的候选整数（只检验素数更省）若无整除者，则 N 不可能合数；若发现非平凡因子，则直接判合数。因而算法正确。',
      r'二进制输入长度约为 L=⌈log₂N⌉，循环候选数约 √N≈2^(L/2)，所以该朴素枚举给出指数于位长的上界，而不是关于 L 的多项式上界。复杂度结论说明“有限可判定”与“高效可判定”不同；并未证明任何因数分解下界。$\square$')
    P('local-obstruction-square-three','numbertheory/local-solvability numbertheory/integer-equations','方程 x²=3 的 3 进局部障碍',r'方程 x²=3 在 Q₃ 中无解，因而在 Q 中无解，尽管它在 R 中有解。','padic-ultrametric','有理数的平方在 p 进赋值下赋值为偶数，而 v₃(3)=1。',
      r'若 x∈Q₃ 满足 x²=3，则 x≠0 且乘法赋值满足 v₃(x²)=2v₃(x)。对 Q₃，非零元素赋值取整数值，故左侧为偶数。',
      r'右侧 v₃(3)=1 为奇数，矛盾。因此 Q₃ 中无解；任何有理解也自然给出 Q₃ 解，所以 Q 中无解。实数 √3 则确实存在，说明实可解不保证有理可解。$\square$')
    P('covering-sphere-great-circles','geometry/spherical-geometry geometry/axioms-parallel','球面上任意两条大圆相交',r'球面上任意两条不同大圆相交于一对对径点，因此球面几何不满足欧氏平行公设。','rank-nullity','大圆是过球心平面的交线；两个不同平面过原点的交集为一条直线。',
      r'球心取原点，大圆分别为球面 S² 与过原点的二维平面 P、Q 的交。不同二维子空间在 R³ 中交于一条一维子空间 L（秩—零度公式给维数至少一，若不同则恰一）。',
      r'L 与单位球面相交于两个相反的单位向量，所以两大圆有一对对径交点。若 P=Q，则大圆重合，仍非平行线。',
      r'因此球面不存在两条互不相交的大圆测地线，和欧氏平面中给定直线外可作唯一平行线的公设不同。这里的“线”指大圆弧的延拓，不是任意小弧段。$\square$')
    P('hyperbolic-mobius-isometry','geometry/hyperbolic-geometry numbertheory/modular-transformations','上半平面双曲度量的 Möbius 不变性',r'对实系数矩阵 ad−bc=1 的 Möbius 变换 γ(z)=(az+b)/(cz+d)，上半平面度量 ds²=(dx²+dy²)/y² 保持不变。','mobius-upper-half-plane complex-basic-rules','计算 Im γ(z)=y/|cz+d|² 与 |γ′(z)|=1/|cz+d|² 后两因子抵消。',
      r'复导数 γ′(z)=(ad−bc)/(cz+d)²=1/(cz+d)²，故欧氏长度微分满足 |dγ(z)|=|dz|/|cz+d|²。前引理给 Imγ(z)=y/|cz+d|²。',
      r'因此 |dγ(z)|²/(Imγ(z))²=[|dz|²/|cz+d|⁴]/[y²/|cz+d|⁴]=|dz|²/y²，正是原双曲度量。',
      r'沿任意可微曲线积分即知长度不变。该公式显示 PSL₂(R) 作用为双曲等距变换；它不单独证明所有双曲等距变换均来自此群。$\square$')
    P('illposed-differentiation','applied/ill-posedness analysis/odes','数值微分反问题的不稳定性',r'在区间 [0,2π] 上，以一致范数把可微函数映到其导数，则求导逆映射不连续：存在 f_n→0 一致而 ‖f_n′‖∞=1。','ftc-second','高频正弦函数振幅缩小为 1/n，其导数振幅仍为一。',
      r'令 f_n(x)=sin(nx)/n。则 ‖f_n‖∞=1/n→0，而 f_n′(x)=cos(nx)，其一致范数恒为 1。',
      r'若从函数数据以一致范数连续恢复导数，连续性在零点要求 f_n→0 蕴含导数趋于零；上述序列违背该要求。因此微分问题不满足 Hadamard 稳定性。',
      r'这说明小幅值噪声可以含高频成分并被求导放大；正则化的目标之一是抑制此类不稳定。例子针对一致范数下的求导，不表示所有数据范数或有限维参数反演都不适定。$\square$')
    P('scalar-robust-stability','applied/robust-control applied/feedback-control','有界乘性扰动下的标量鲁棒稳定性',r'若 a>δ≥0 且可测扰动 d(t) 满足 |d(t)|≤δ，则 x′=−a x+d(t)x 的所有解满足 |x(t)|≤|x(0)|e^(−(a−δ)t)。','ftc-second','解的绝对值几乎处处满足微分不等式 d|x|/dt≤−(a−δ)|x|。',
      r'系数 c(t)=−a+d(t) 可测且有界，标量线性方程解为 x(t)=x(0)exp(∫₀^t c(s)ds)。该公式可由乘积分因子直接求得，适用于绝对连续解。',
      r'因 c(s)≤−a+δ，积分不超过 −(a−δ)t。取指数并取绝对值得所需估计。由于 a−δ>0，解一致指数趋零，对所有允许扰动均成立。',
      r'若 δ≥a，扰动 d(t)=a 可使 x′=0，故此类统一指数衰减界不可能成立。结论是标量乘性不确定性情形，不替代高维小增益或结构化鲁棒稳定性定理。$\square$')
    P('euler-lagrange-variation','applied/optimal-control applied/classical-mechanics','固定端点变分推出 Euler–Lagrange 方程',r'若光滑曲线 q:[a,b]→R^n 是作用量 J[q]=∫_a^b L(q,q̇,t)dt 对所有固定端点光滑变分的一阶驻点，则 d/dt(∂L/∂q̇_i)=∂L/∂q_i。','ftc-second','对 q+εη 求导并分部积分，把任意紧支撑变分函数的系数置零。',
      r'取任意光滑 η 且 η(a)=η(b)=0，令 q_ε=q+εη。对 ε 在零处求导，链式法则得 δJ=∫_a^b[Σ_i L_(q_i)η_i+L_(q̇_i)η̇_i]dt。',
      r'分部积分第二项，端点项 L_(q̇_i)η_i|_a^b=0，故 δJ=∫_a^bΣ_i[L_(q_i)−d/dt L_(q̇_i)]η_i dt。驻点使此式对所有 η 为零。',
      r'若某连续系数 g_i(t)=L_(q_i)−d/dt L_(q̇_i) 在一点非零，连续性使其在附近同号，取支撑于该邻域且同号的光滑 η_i 将使积分非零，矛盾。故每个 g_i 恒零，即 Euler–Lagrange 方程。驻点条件不保证该曲线是极小值。$\square$')
    BASES['def-finite-sum']=dict(title='有限和微分约定',statement='有限项可微函数之和逐项微分；这是导数定义与有限线性运算交换的直接推论，不涉及无穷级数换序。')
    P('partition-energy-derivative','applied/statistical-mechanics','配分函数导数给出平均能量',r'有限状态系统能级 E_i、β>0 的配分函数 Z(β)=Σ_i exp(−βE_i)，概率 p_i=exp(−βE_i)/Z，则平均能量 U=Σ_i p_iE_i=−d(log Z)/dβ。','def-finite-sum','逐项求导有限和，再除以 Z。',
      r'有限和可逐项微分：Z′(β)=−Σ_i E_i exp(−βE_i)。因 Z>0，链式法则给 (log Z)′=Z′/Z。',
      r'于是 −(log Z)′=Σ_i E_i exp(−βE_i)/Z=Σ_i p_iE_i=U。能级重复只需按状态计重。',
      r'有限系统中所有量均为有限和而无收敛交换问题；无限状态系统还需证明配分函数有限及求导可交换。$\square$')
    P('binomial-risk-neutral-pricing','applied/no-arbitrage-pricing applied/hedging-replication applied/stochastic-price-models','二叉树单期模型的无套利价格与复制',r'无风险资产现值 1、到期值 R，股票现价 S₀、到期取 uS₀ 或 dS₀（0<d<R<u）。任意两状态到期索赔 (H_u,H_d) 可唯一复制，价格为 [qH_u+(1−q)H_d]/R，其中 q=(R−d)/(u−d)。','rank-nullity','两状态复制方程可逆；无套利迫使风险中性权重落在 (0,1)。',
      r'令持有 Δ 股股票及 B 单位无风险资产，复制方程为 ΔuS₀+BR=H_u、ΔdS₀+BR=H_d。相减解得 Δ=(H_u−H_d)/(S₀(u−d))，再代回得 B=(uH_d−dH_u)/(R(u−d))。系数矩阵行列式 S₀R(d−u) 非零，故复制唯一。',
      r'现值 V₀=ΔS₀+B。代入上式并整理为 V₀=R⁻¹[(R−d)/(u−d)H_u+(u−R)/(u−d)H_d]=R⁻¹[qH_u+(1−q)H_d]。条件 d<R<u 使 0<q<1。',
      r'若市场给该索赔不同价格，买入便宜复制组合并卖出昂贵索赔（或反向）会在初始产生正收入、到期现金流相抵，形成套利。因此无套利价格必须等于复制成本。股票本身对应 H_u=uS₀,H_d=dS₀，公式回到 S₀。$\square$')
    BASES['def-loss-var']=dict(title='损失分位数 VaR 定义',statement='损失随机变量 L 的 α 分位数 VaR_α(L)=inf{x∈R:P(L≤x)≥α}，0<α<1。')
    P('var-monotonicity-translation','applied/risk-measures','VaR 的单调性与平移等变性',r'若 L≤L′ 几乎处处，则 VaR_α(L)≤VaR_α(L′)；对常数 c，VaR_α(L+c)=VaR_α(L)+c。','def-loss-var','逐点序给分布函数序，平移只平移分位数集合。',
      r'L≤L′ 几乎处处意味着对每个 x，事件 {L′≤x} 包含于 {L≤x}，所以 F_L(x)≥F_(L′)(x)。达到概率至少 α 的 x 集合因此满足 L 的阈值不高于 L′ 的阈值；取下确界得到单调性。',
      r'对平移，P(L+c≤x)=P(L≤x−c)。因此满足前者概率至少 α 的 x，恰是满足后者概率至少 α 的 y=x−c 加 c。两阈值集合整体平移 c，取下确界得平移等变式。',
      r'VaR 在某些风险分布下不具次可加性，因此不能仅凭这两条性质称其为满足所有公理的相干风险度量。$\square$')
    P('markowitz-min-variance','applied/optimal-portfolio applied/convex-optimization','正定协方差下最小方差全投资组合',r'若协方差矩阵 Σ 对称正定，所有权重 w 满足 1ᵀw=1，则唯一最小化 wᵀΣw 的组合为 w*=Σ⁻¹1/(1ᵀΣ⁻¹1)。','strict-convex-unique','拉格朗日乘子给线性方程；正定性保证严格凸与唯一极小。',
      r'Σ 可逆。拉格朗日函数 ℒ(w,λ)=wᵀΣw−λ(1ᵀw−1) 的驻点条件为 2Σw=λ1，故 w=(λ/2)Σ⁻¹1。',
      r'代入约束得 λ/2=1/(1ᵀΣ⁻¹1)，分母为正，因为 Σ⁻¹ 正定且 1≠0。得到所列 w*。',
      r'对任意可行 w=w*+h，1ᵀh=0。目标差为 2hᵀΣw*+hᵀΣh。驻点式给 Σw* 为 1 的倍数，故交叉项为零；若 h≠0，正定性使 hᵀΣh>0。于是 w* 为唯一全局最小点。$\square$')
    P('incidence-mass-conservation','applied/biological-networks','反应网络关联矩阵的总量守恒',r'若网络反应化学计量矩阵 S 的每列元素和为零，浓度满足 x′=Sv，则总量 1ᵀx 沿轨道恒定。','ftc-second','左乘全一向量后反应通量项消失。',
      r'由假设 1ᵀS=0。对可微解直接求导，d(1ᵀx)/dt=1ᵀx′=1ᵀSv=0。',
      r'故在任意时间区间积分得 1ᵀx(t)=1ᵀx(0)。若网络只守恒加权总量 ℓᵀx，则相同证明只需 ℓᵀS=0。',
      r'列和条件表达每个反应的分子总数守恒；更一般化学反应中元素质量守恒由相应化学计量权重给出。动力学通量 v 的具体非线性形式不影响该代数守恒结论。$\square$')
    P('logistic-map-tent-conjugacy','analysis/chaos','参数 4 的 Logistic 映射与帐篷映射共轭',r'f(x)=4x(1−x) 在 [0,1] 上与帐篷映射 T(t)=2t（t≤1/2）、2−2t（t≥1/2）拓扑共轭，因此迭代轨道可通过单调坐标变换互相对应。','intermediate-value','用单调双射 h(t)=sin²(πt/2) 直接验证 f∘h=h∘T。',
      r'h:[0,1]→[0,1] 连续，端点值 0、1，且在 (0,1) 导数 (π/2)sin(πt)>0，故严格递增并由介值定理满射，是同胚。',
      r'若 0≤t≤1/2，则 h(Tt)=sin²(πt)，而 f(h(t))=4sin²(πt/2)(1−sin²(πt/2))=4sin²(πt/2)cos²(πt/2)=sin²(πt)。',
      r'若 1/2≤t≤1，令 s=1−t≤1/2，则 Tt=2s；同时 h(t)=sin²(π(1−s)/2)=cos²(πs/2)，故 f(h(t))=4cos²(πs/2)sin²(πs/2)=sin²(πs)=h(2s)=h(Tt)。两段均有 f∘h=h∘T。',
      r'于是 h 将 T 的每条轨道逐步送到 f 的轨道。此共轭是混沌研究的具体模型结果；若采用特定混沌定义，还需另证帐篷映射满足该定义。$\square$')
    P('semantic-independence-models','foundations/independence foundations/classification-of-models','语义独立性的模型判据',r'句子 σ 对理论 T 语义独立，当且仅当 T∪{σ} 与 T∪{¬σ} 都有模型；若 T 有模型却 T⊭σ 且 T⊭¬σ，则 σ 独立于 T。','fol-completeness-compactness','模型满足 σ 或其否定；反模型分别见证两侧扩张可满足。',
      r'若 M⊨T 且 M⊨σ，则 M 是 T∪{σ} 的模型；若另有 N⊨T 且 N⊨¬σ，则 N 是 T∪{¬σ} 的模型。因此两个扩张皆有模型当且仅当两种真值各有 T 模型。',
      r'若 T⊭σ，按语义蕴含定义有模型 M 满足 T 而不满足 σ，即 M⊨T∪{¬σ}；若 T⊭¬σ，则有模型 N⊨T∪{σ}。反方向同理。',
      r'若采用语法独立性 T⊬σ 且 T⊬¬σ，则需逻辑完备性把不可证转成反模型；本仓完备性章节已在可数语言和所声明演算假设下证明。相容性不等于证明两个扩张均相容，必须分别检查。$\square$')
    P('sequent-calculus-soundness','foundations/sequent-calculus foundations/formal-proof','经典相继式演算的语义可靠性',r'经典 LK 的初始相继式与推理规则均语义有效，因此从 Γ⇒Δ 可推导的相继式在每个结构赋值下均满足：若 Γ 全真，则 Δ 至少一个公式为真。','def-hilbert-fol','逐规则验证“前提全真蕴含结论全真”，再沿有限证明树归纳。',
      r'初始式 A⇒A 在 A 真时右侧 A 真；含矛盾式或公理的初始式同样有效。交换、弱化不破坏全真蕴含右侧真值的性质。',
      r'逻辑联结词规则逐一按经典真值表检查。例如 ∧ 左规则把真值 A∧B 展开为 A、B 同真；∧ 右规则要求两个前提分别推出 A、B，故共同推出 A∧B。∨ 与 → 的左右规则同理按真值定义；¬ 规则把一侧真值转到另一侧假值。',
      r'量词左规则使用任意项实例必由全称句推出；量词右规则的特征变量条件保证在当前结构中可任取其值。结构规则对多重集的排列或重复无影响。对证明高度归纳，每个结点保持语义有效，根相继式遂有效。该证明只证明可靠性，不证明 cut 消去。$\square$')
    BASES['def-elliptic-curve']=dict(title='短 Weierstrass 曲线与弦切群法则约定',statement='域 k 特征不为 2、3，非奇异曲线 E:y²=x³+Ax+B 的射影闭包附唯一无穷远点 O。弦切法则定义三交点 P,Q,R（重数计数）满足 P+Q+R=O，并把过点直线的第三交点关于 x 轴反射作为 P+Q；本章只用该定义验证逆元公式，不预设结合律。')
    P('elliptic-curve-inverse','numbertheory/elliptic-curves','椭圆曲线弦切加法中的逆元',r'在短 Weierstrass 曲线 y²=x³+Ax+B（特征不为 2）上，弦切群法则以无穷远点 O 为单位时，点 P=(x,y) 的逆为 −P=(x,−y)。','def-elliptic-curve','过 P 与其镜像点的竖直线第三交点是 O，故三点和为单位点。',
      r'曲线方程只含 y²，所以 (x,−y) 也在曲线上。连接 P 与 (x,−y) 的直线为竖直线 X=x；射影闭包在无穷远线上的唯一交点是指定的无穷远点 O。',
      r'弦切法则定义三交点 P,Q,R 的和为 R 关于 x 轴的镜像；对上述竖直弦，第三交点按定义为 O，因此 P+(x,−y)=O，证明该点是逆元。若 y=0，P=−P，竖直切线与曲线交于 P 的重数二及 O，也符合公式。',
      r'此论证验证逆元公式，但群法则的结合律及椭圆曲线成为代数群还需另证；不能仅由弦切构造直接假设结合律。$\square$')
    BASES['def-modular-form']=dict(title='模形式与尖点消失定义',statement='固定权与模群及其变换律的全纯函数称模形式；在尖点坐标 q=e^(2πiτ) 中要求全纯展开 f(q)=Σ_(n≥0)a_nq^n。尖点形式在每个尖点取值为零；无穷远处即 a₀=0。')
    P('cusp-form-constant-term','numbertheory/cusp-forms numbertheory/fourier-expansion','尖点形式在无穷远处常数项为零',r'若模形式 f(τ) 在无穷远尖点消失，则其 q=e^(2πiτ) Fourier 展开 f(τ)=Σ_(n≥0)a_nq^n 的常数项 a₀=0。','def-modular-form','q→0 时级数极限等于常数项，而尖点条件要求函数趋零。',
      r'按定义，尖点处 f 在 q=0 邻域全纯并满足 f(0)=0。Taylor 定理给 f(q)=Σ_(n≥0)a_nq^n，常数系数为 a₀=f(0)。',
      r'尖点消失即 f(0)=0，故 a₀=0。反过来若该 Taylor 展开的常数项为零，则 f(q)→0，满足无穷远尖点的消失条件。',
      r'对其他尖点还须在相应变换坐标中施加同样条件；此处只处理无穷远点。$\square$')
    P('fourier-coefficient-uniqueness','numbertheory/fourier-expansion analysis/fourier-series','连续周期函数由全部 Fourier 系数唯一决定',r'若两个连续 2π 周期函数具有相同全部 Fourier 系数，则它们处处相等。','fejer-uniform-convergence','其每阶 Fejér 平均相同，而 Fejér 定理给这些平均一致收敛到原函数。',
      r'令 h=f−g。系数线性使 h 的所有 Fourier 系数为零。其 N 阶 Fejér 平均是有限个 Fourier 系数的线性组合，故对每个 N、每个 x 都为零。',
      r'Fejér 定理给 σ_Nh 一致收敛到 h；但 σ_Nh 恒为零，所以其一致极限 h 也恒为零。于是 f=g。',
      r'连续性是这里使用 Fejér 一致收敛的假设；对一般 L² 函数，唯一性需改用相应的 L² 完备性理论。$\square$')
    P('coordinate-ring-point-evaluation','geometry/coordinate-rings geometry/algebraic-varieties-geometry','仿射点给出坐标环的求值同态',r'对域 k 上仿射代数集 X⊆kⁿ，每个点 a∈X 定义环同态 ev_a:k[x₁,…,xₙ]/I(X)→k，且核为包含 I(X) 的点理想 (x₁−a₁,…,xₙ−aₙ)/I(X)。','ideal-quotient','多项式代入保持加乘；X 上消失多项式在该点取值为零。',
      r'定义多项式求值 ev_a(f)=f(a)。逐项展开可知 ev_a(f+g)=ev_a(f)+ev_a(g)、ev_a(fg)=ev_a(f)ev_a(g)、ev_a(1)=1，所以是 k-代数同态。',
      r'a∈X 意味着 I(X) 中每个多项式在 a 处为零，因此 I(X)⊆ker(ev_a)，求值映射可唯一下降到商环 k[x]/I(X)。',
      r'商环元素 f+I(X) 落入核当且仅当 f(a)=0；等价于 f 属于点理想 (x_i−a_i)（逐变量用多项式除法或平移变量展开可证）。因此下降映射的核正是所述商理想。若 k 为代数闭域，点理想还是极大理想，因为求值满射到域 k。$\square$')
    BASES['def-scheme-structure']=dict(title='仿射概形结构层定义',statement='Spec R 的点为素理想 p；基本开集 D(f)={p:f∉p} 构成拓扑基，并规定结构层在 D(f) 上的环为 R_f。点处茎定义为所有含该点开邻域截面环沿限制映射的直极限。')
    P('scheme-local-ring-definition','geometry/schemes geometry/coordinate-rings','仿射概形的点处局部环',r'在 Spec R 的素理想 p 处，结构层的茎 O_(Spec R,p) 同构于局部化 R_p=(R\p)⁻¹R，且其唯一极大理想为 pR_p。','localization-module-universal def-scheme-structure','结构层在基本开集 D(f) 上取 R_f；茎是所有含点基本邻域的分式环直极限。',
      r'p∈D(f) 当且仅当 f∉p。p 点处茎按定义是所有 f∉p 的 R_f 在限制映射下的直极限。每个 R_f 到 R_p 的映射把 r/f^n 送到同一分数，因此诱导同态 colim_(f∉p)R_f→R_p。',
      r'该映射满射：R_p 中任一分数 r/s 的分母 s∉p，已在 R_s 中出现。若两个分数在直极限中映到同一 R_p 元素，则某个共同分母乘积 t∉p 后其交叉差为零，故它们在某个更小基本邻域环 R_t 中已相等，映射单射。于是茎同构 R_p。',
      r'R_p 的非单位恰为分子属于 p 的分数：若 r∉p，则 r 可作分母，r/s 的逆为 s/r；若 r∈p，任何乘积仍落入扩张理想 pR_p，不能等于 1。故 pR_p 是唯一极大理想，R_p 为局部环。$\square$')
    P('noether-symmetry-conservation','applied/symmetry-conservation applied/classical-mechanics','连续平移对称性与 Noether 守恒量',r'若拉格朗日量 L(q,q̇,t) 不依赖坐标 q_j，则沿 Euler–Lagrange 解，动量 p_j=∂L/∂q̇_j 守恒。','euler-lagrange-variation','把循环坐标条件代入 Euler–Lagrange 方程。',
      r'固定端点变分已推出 Euler–Lagrange 方程 d/dt(∂L/∂q̇_j)=∂L/∂q_j。坐标平移对称性即 L 对 q_j 不变，所以偏导 ∂L/∂q_j=0。',
      r'于是 d p_j/dt=0，积分得 p_j 在整条轨道上恒定。这是平移对称性对应守恒动量的 Noether 特例；任意连续群作用需要用变分生成元作同样推导。$\square$')
    P('moment-map-component-conservation','geometry/moment-maps geometry/hamiltonian-systems','动量映射分量沿不变 Hamiltonian 守恒',r'若群作用的动量映射 μ 满足 d⟨μ,ξ⟩=ι_(ξ_M)ω，且 Hamiltonian H 对该群作用不变，则沿 H 的流，⟨μ,ξ⟩ 恒定。','symplectic-volume-preservation','沿 Hamiltonian 向量场求导后，动量映射定义将导数化为群生成向量作用于 H。',
      r'令 J_ξ=⟨μ,ξ⟩，由动量映射定义 dJ_ξ=ι_(ξ_M)ω。Hamiltonian 向量场 X_H 按约定满足 ι_(X_H)ω=dH（若采用相反号约定，以下只整体换号）。',
      r'沿轨道 dJ_ξ/dt=dJ_ξ(X_H)=ω(ξ_M,X_H)=−ω(X_H,ξ_M)=−dH(ξ_M)。群不变性 H(g·x)=H(x) 对参数求导给 dH(ξ_M)=0。',
      r'故 dJ_ξ/dt=0，动量映射每个李代数方向分量守恒。假设包括作用具有动量映射及 H 群不变；不是任意 Hamiltonian 的结论。$\square$')
    P('symplectic-nonsqueezing-volume-invariant','geometry/symplectic-topology geometry/symplectomorphisms','辛微分同胚保持辛体积',r'若 φ 是 2n 维辛流形间的辛微分同胚，则它保持辛体积形式 ωⁿ/n! 及相应区域体积。','symplectic-volume-preservation','拉回保持 ω，故保持其最高次外积；区域体积再由换元公式给出。',
      r'辛映射定义为 φ*ω_target=ω_source。外积相容性给 φ*(ω_targetⁿ/n!)=ω_sourceⁿ/n!。',
      r'对可测区域 U 使用微分形式换元公式，∫_(φ(U))ω_targetⁿ/n!=∫_Uφ*(ω_targetⁿ/n!)=∫_Uω_sourceⁿ/n!，故体积相等。',
      r'体积保持是 Gromov 非挤压定理的重要必要约束，但并不足以推出辛嵌入存在；非挤压还给出体积无法检测的辛容量障碍。$\square$')
    BASES['def-brownian']=dict(title='标准布朗运动定义',statement='标准布朗运动 B₀=0，样本路径连续，且对 0≤s<t，增量 B_t−B_s 与过去独立并服从均值 0、方差 t−s 的正态分布。')
    P('brownian-covariance-min','probability/brownian-motion','布朗运动协方差为 min(s,t)',r'标准布朗运动满足 E[B_s]=0 且 Cov(B_s,B_t)=min(s,t)。','def-brownian','设 s≤t，将 B_t 写为 B_s 加与过去独立、均值为零的增量。',
      r'由定义 B_s 是零均值增量之和，故 E[B_s]=0。若 s≤t，写 B_t=B_s+(B_t−B_s)，其中后项均值为零并与 B_s 独立。',
      r'E[B_sB_t]=E[B_s²]+E[B_s(B_t−B_s)]=s+E[B_s]E[B_t−B_s]=s。均值皆零，所以协方差等于该乘积期望。若 t≤s 交换两变量得协方差 t；合并为 min(s,t)。$\square$')
    BASES['def-ito-step-integral']=dict(title='简单适应过程的 Itô 积分定义',statement='对分割 0=t₀<…<t_n，简单适应过程 H_t=Σ_i H_i 1_[t_i,t_(i+1))，其中 H_i 对时刻 t_i 的信息可测，定义 ∫H dB=Σ_i H_i(B_(t_(i+1))−B_(t_i))；再以 L² 闭包定义一般平方可积适应过程积分。')
    P('ito-isometry-step-process','probability/ito-integral probability/brownian-motion','简单过程 Itô 等距式',r'对平方可积简单适应过程 H，E[(∫₀ᵀH_t dB_t)²]=E[∫₀ᵀH_t²dt]。','def-ito-step-integral def-brownian','展开平方；不同时间增量条件均值为零且方差为区间长度。',
      r'按定义积分为 Σ_i H_iΔB_i。平方展开，其对角项期望 E[H_i²(ΔB_i)²]=E[H_i²]Δt_i，因为 H_i 在区间开始时已知，后续 Brownian 增量独立且方差 Δt_i。',
      r'若 i<j，交叉项 H_iΔB_i H_jΔB_j 中，H_iΔB_iH_j 对时刻 t_j 可测，而 ΔB_j 与过去独立、均值零，故该交叉项期望为零。所有不同区间交叉项因此消失。',
      r'于是平方期望等于 Σ_iE[H_i²]Δt_i=E[Σ_iH_i²Δt_i]=E[∫₀ᵀH_t²dt]。一般 Itô 积分按此等距延拓定义，所以该等式也成为其完备化性质。$\square$')
    P('ito-square-brownian','probability/ito-formula probability/ito-integral','布朗平方过程的 Itô 公式',r'标准布朗运动满足 B_t²=2∫₀ᵗB_s dB_s+t。','ito-isometry-step-process def-brownian','对分割应用平方增量恒等式，线性项趋向 Itô 积分，平方增量和趋向 t。',
      r'取分割 0=t₀<…<t_n=t。逐段恒等式 B_(t_(i+1))²−B_(t_i)²=2B_(t_i)ΔB_i+(ΔB_i)² 求和，得 B_t²=2ΣB_(t_i)ΔB_i+Σ(ΔB_i)²。',
      r'当网格趋零，左端固定。按 Itô 积分定义与等距式，左侧和式收敛到 ∫₀ᵗB_s dB_s（B 的适应阶梯近似在 L²([0,t]×Ω) 收敛，因为 E[(B_s−B_(left(s)))²]≤网格）。',
      r'平方增量独立且 E[(ΔB_i)²]=Δt_i、Var((ΔB_i)²)=2(Δt_i)²。故 Σ(ΔB_i)² 的均值为 t、方差为 2Σ(Δt_i)²≤2t·网格，趋零，因而 L² 收敛到 t。取极限得到恒等式。$\square$')
    P('hierarchical-law-total-variance','probability/hierarchical-models','层级模型的全方差分解',r'若 Y 与潜变量 Z 有有限二阶矩，则 Var(Y)=E[Var(Y|Z)]+Var(E[Y|Z])。','conditional-l2 variance-mean','把 Y−E[Y] 分解为条件残差与条件均值偏差，交叉项条件期望为零。',
      r'写 μ(Z)=E[Y|Z]、μ=E[Y]，则 Y−μ=(Y−μ(Z))+(μ(Z)−μ)。平方取期望，得两平方项加两倍交叉项。',
      r'交叉项期望为 E[(μ(Z)−μ)E[Y−μ(Z)|Z]]=0，因为条件残差的条件均值为零。第一平方项期望正是 E[Var(Y|Z)]，第二项为 Var(μ(Z))。',
      r'故得到全方差公式。它区分给定层级内的随机波动与层级间均值变化；有限二阶矩确保每项存在。$\square$')
    P('causal-graph-chain-factorization','probability/causal-graphs','有向无环图的链式分解',r'任意有限随机变量 X₁,…,X_n 的联合分布可按任意顺序分解为 p(x₁,…,x_n)=∏_i p(x_i|x₁,…,x_(i−1))；若进一步满足每个节点给定父节点后与非后代条件独立，则分解为 ∏_i p(x_i|x_pa(i))。','conditional-tower','第一式是概率链式法则；第二式逐项应用局部 Markov 条件独立。',
      r'对正概率联合事件，反复使用条件概率定义 p(x₁,…,x_n)=p(x₁)p(x₂|x₁)…p(x_n|x₁,…,x_(n−1))。零概率配置两侧均按相应联合测度的几乎处处意义理解。',
      r'给定变量顺序为图的拓扑序，节点 X_i 的所有先行节点中，非父节点均为其非后代；局部 Markov 性使 p(x_i|先行所有变量)=p(x_i|父节点)。将每项替换即得图因子分解。',
      r'链式分解对任何联合分布都成立；图因子分解还依赖分布满足局部 Markov 条件，单有一张 DAG 图并不自动证明这些条件。$\square$')
    P('potential-outcome-consistency','probability/potential-outcomes probability/interventions-effects','潜在结果的一致性关系',r'在无干扰与一致性假设下，实际处理指示 A∈{0,1} 时观测结果满足 Y=AY(1)+(1−A)Y(0)。','randomized-ate-unbiased','逐个按 A=1 与 A=0 两种情况代入一致性定义。',
      r'无干扰假设每个单位的潜在结果不随其他单位处理变化；一致性定义实际接受处理 a 时观测到 Y=Y(a)。',
      r'若 A=1，一致性给 Y=Y(1)，右侧 AY(1)+(1−A)Y(0)=Y(1)。若 A=0，一致性给 Y=Y(0)，右侧等于 Y(0)。两种可能穷尽二元处理，故恒等式成立。',
      r'此恒等式不识别未观测反事实，也不提供因果效应无偏估计；可识别性仍需随机化或条件可交换性、正值性等额外假设。$\square$')
    P('smooth-atlas-transition-cocycle','geometry/differential-structures geometry/smooth-manifolds','光滑图册过渡映射满足 cocycle 条件',r'光滑图册中重叠坐标变换 φ_ij=φ_j∘φ_i⁻¹ 为微分同胚，并在三重交叠上满足 φ_jk∘φ_ij=φ_ik。','chain-rule','坐标映射是双射的局部复合，逆映射互相抵消。',
      r'每张图 φ_i:U_i→R^n 是到开集的同胚。若 U_i∩U_j 非空，定义过渡映射 φ_ij=φ_j∘φ_i⁻¹；图册光滑相容性要求它及逆 φ_ji 均光滑，故为微分同胚。',
      r'在三重交叠点上代入定义，φ_jk∘φ_ij=(φ_k∘φ_j⁻¹)∘(φ_j∘φ_i⁻¹)=φ_k∘φ_i⁻¹=φ_ik。中间 φ_j⁻¹∘φ_j 在定义域上是恒等映射。',
      r'因此过渡函数满足 cocycle 一致性，保证局部坐标更换的复合没有歧义。此条件是图册定义的直接后果；不同光滑结构是否等价是另一个分类问题。$\square$')
    P('surgery-handle-euler-change','geometry/surgery-theory geometry/low-dimensional-topology','附加 k-维把手对 Euler 示性数的改变量',r'对有限 CW 复形 X 附加一个 k-维胞腔得到 Y，若边界附着映射落在 X 中，则 χ(Y)=χ(X)+(−1)^k。','homology-defined','胞腔链群只在第 k 维增加一个秩一自由生成元，交替秩和增加 (−1)^k。',
      r'有限 CW 复形的 Euler 示性数按胞腔数定义 χ(X)=Σ_j(−1)^j c_j。附加一个 k-胞腔不改变其他维胞腔，只令 c_k 增加一。',
      r'因此 χ(Y)−χ(X)=Σ_j(−1)^j(c_j(Y)−c_j(X))=(−1)^k。',
      r'若采用同调定义 χ=Σ(−1)^j rank H_j，还需用有限链复形的秩—零度望远镜恒等式证明它等于胞腔交替和；该恒等式可逐维由 rank C_j=rank ker∂_j+rank im∂_j 推出。把手分解中的几何附着不改变此计数。$\square$')
    BASES['def-interval-length']=dict(title='区间长度有限可加性',statement='实区间长度为端点差；有限个内部不交子区间的长度和不超过包含它们的总区间长度。')
    P('packing-interval-bound','geometry/packing-covering','区间内不交等长球的简单堆积界',r'长度为 L 的区间内若放置 N 个两两内部不交、半径 r 的闭区间并要求均包含在总区间中，则 N≤L/(2r)。','def-interval-length','不交区间长度相加不超过容纳区间长度。',
      r'每个半径 r 的闭区间长度为 2r。两两内部不交时，有限可加性给其并集长度为 2rN。',
      r'其并包含于长度 L 的总区间，故 2rN≤L，除以正数 2r 得 N≤L/(2r)。',
      r'此为一维等长区间的体积上界；高维球体堆积密度受边界与几何结构影响，不能从该式直接推广。$\square$')
    P('bsc-one-use-capacity','discrete/channel-capacity','二元对称信道的单次互信息容量',r'二元对称信道交叉概率 0≤p≤1/2 的单次互信息最大值为 1−H₂(p) 比特，在输入均匀时达到。','entropy-bound','输出熵至多一比特，条件输出熵恒为 H₂(p)。',
      r'令输入 X∈{0,1}，输出 Y=X⊕Z，其中 Z 独立且 P(Z=1)=p。给定 X，Y 的不确定性就是 Z 的熵，故 H(Y|X)=H₂(p)。',
      r'互信息 I(X;Y)=H(Y)−H(Y|X)=H(Y)−H₂(p)。二元变量熵 H(Y)≤1；可由熵函数在 1/2 处取最大值验证。输入均匀时 Y 也均匀，达到 H(Y)=1。',
      r'因此 max I=1−H₂(p)。这证明单次互信息最大化；若“容量”指任意长码的可靠传输率，还需要 Shannon 编码定理的 achievability 与 converse 证明，本条不替代整套编码定理。$\square$')
    P('diffusion-brownian-generator','probability/diffusion-processes probability/brownian-motion','布朗扩散的无穷小生成元',r'对 f∈C² 且 f″有界连续，标准布朗运动满足 lim_(t↓0)[E_x f(x+B_t)−f(x)]/t=½f″(x)。','def-brownian taylor-lagrange dominated-convergence','Taylor 展开，利用增量均值零、方差 t，并控制二阶余项。',
      r'令 Z_t=B_t，Z_t 分布为 √t Z，其中 Z 为标准正态，满足 E Z=0、E Z²=1。二阶 Taylor 公式写 f(x+h)=f(x)+f′(x)h+½f″(x)h²+h²r_x(h)，其中 r_x(h)→0 当 h→0。',
      r'期望并除 t，前两项给 ½f″(x)；余项为 E[Z² r_x(√t Z)]。对固定 Z 它趋零，且因 f″有界，Taylor 积分余项给 |r_x(h)|≤C‖f″‖∞，故被可积变量 C Z² 控制。支配收敛使余项趋零。',
      r'所以生成元为 (1/2)d²/dx²。该极限是布朗扩散的局部生成元计算；一般扩散的系数由其漂移和局部方差决定。$\square$')
    P('sde-linear-mean-variance','probability/sdes probability/expectation-variance','加性 Brownian 线性 SDE 的均值与方差',r'若 X_t=x₀+μt+σB_t，则 X 的微分形式为 dX=μdt+σdB，且 E[X_t]=x₀+μt、Var(X_t)=σ²t。','def-brownian','直接代入布朗运动零均值与方差 t 的定义。',
      r'定义 X_t=x₀+μt+σB_t。布朗增量定义给 E[B_t]=0、Var(B_t)=t，故线性期望为 E[X_t]=x₀+μt。',
      r'确定性项不改变方差，常数倍使方差乘 σ²，因此 Var(X_t)=σ²Var(B_t)=σ²t。对任意 s<t，增量 X_t−X_s=μ(t−s)+σ(B_t−B_s)，其随机部分独立于过去且为正态，所以此过程满足所写加性常系数 SDE 的积分形式。',
      r'这只是漂移与扩散系数为常数的显式模型，不证明一般 Lipschitz 系数随机微分方程的存在唯一性。$\square$')
    P('hecke-q-expansion-formula','numbertheory/hecke-operators numbertheory/fourier-expansion','Hecke 算子作用的 Fourier 系数公式',r'按标准归一化 T_m f(z)=m^(k−1)Σ_(ad=m)d^(−k)Σ_(b mod d)f((az+b)/d)，若 f=Σ_n a_nq^n，则 T_m f 的 q^N 系数为 Σ_(r|gcd(m,N))r^(k−1)a_(mN/r²)。','complex-basic-rules def-modular-form','代入 q 展开，对 b 求有限单位根和，筛出 d|n 的频率。',
      r'将 f((az+b)/d)=Σ_n a_n exp(2πin(az+b)/d) 代入有限和。对 b=0,…,d−1 求和，Σ_b exp(2πinb/d)=d 若 d|n，否则为零；这是有限几何级数求和。',
      r'令 n=dr。剩下的 q 指数为 exp(2πi ar z)，即 q^(ar)，系数为 m^(k−1)d^(1−k)a_(dr)。由于 ad=m，固定 q^N 意味着 ar=N，故 a|N 且 a|m；令 r=a，d=m/a，系数权重 m^(k−1)(m/a)^(1−k)=a^(k−1)，而原系数下标 dr=(m/a)(N/a)=mN/a²。',
      r'对所有 r=a|gcd(m,N) 求和即得公式。该计算给 Hecke 作用的 Fourier 系数表达；算子保持给定模形式空间仍需检查变换律与尖点条件。$\square$')
    P('euler-reciprocal-primes-diverges','numbertheory/prime-number-theorem numbertheory/prime-counting','素数倒数和发散',r'Σ_p 1/p 发散。','unique-factorization','有限 Euler 乘积支配调和级数部分和；若素数倒数和收敛则乘积有界，矛盾。',
      r'调和级数部分和 H_N=Σ_(n≤N)1/n 发散：每个块 n=2^(j−1)+1,…,2^j 有 2^(j−1) 项，每项至少 1/2^j，故块和至少 1/2；无限多个块使总和无界。',
      r'令 P(x)=∏_(p≤x)(1−1/p)⁻¹。有限个几何级数相乘并用唯一分解，P(x) 展开为所有素因子不超过 x 的正整数倒数之和；因此它至少包含 1,…,⌊x⌋ 各项，P(x)≥H_⌊x⌋。所以 P(x)→∞。',
      r'对 0<t≤1/2，−log(1−t)=Σ_(j≥1)t^j/j≤t+Σ_(j≥2)t^j≤t+2t²。故 log P(x)≤Σ_(p≤x)(1/p+2/p²)。若 Σ_p1/p 收敛，右侧有统一上界，因为 Σ_p1/p²≤Σ_(n≥2)1/n²<∞，于是 P(x) 有界。',
      r'这与 P(x)≥H_⌊x⌋→∞ 矛盾。因此 Σ_p1/p 发散。该定理说明素数稀疏但倒数总和仍发散；它不推出 π(x)∼x/log x，故不等于素数定理。$\square$')
    P('zeta-euler-product-complex','numbertheory/prime-number-theorem','复变量区域 Re(s)>1 的 ζ Euler 乘积',r'对复数 s 且 Re(s)>1，ζ(s)=Σ_(n≥1)n^(−s)=∏_p(1−p^(−s))^(−1)，两侧均绝对收敛。','unique-factorization series-cauchy','有限素数乘积展开枚举仅含这些素因子的整数；绝对收敛使截断极限可交换。',
      r'令 σ=Re(s)>1，则 Σ_n|n^(−s)|=Σ_nn^(−σ)<∞，由积分比较收敛。对有限素数集 p≤y，各几何级数绝对收敛，乘积展开为所有素因子不超过 y 的 n^(−s) 之和，唯一分解保证每个这样的 n 恰出现一次。',
      r'给定 ε>0，取 N 使 Σ_(n>N)n^(−σ)<ε，再令 y≥N。有限乘积包含 n≤N 的每一项，其与 ζ 级数的差绝对值不超过 ε。故有限乘积按 y→∞ 收敛到 ζ(s)，且乘积各因子及展开绝对收敛。',
      r'有限乘积均非零，且其对数级数绝对收敛（Σ_p|p^(−s)|<∞），故极限乘积非零；亦可由对数展开与绝对一致收敛验证。此非零性将用于右半平面零点讨论。$\square$')
    P('zeta-continuation-right-half','numbertheory/prime-number-theorem','ζ(s)−1/(s−1) 在 Re(s)>0 全纯',r'ζ(s)−1/(s−1) 从 Re(s)>1 全纯延拓为 Re(s)>0 上的全纯函数；因此 ζ 在该半平面仅有 s=1 的简单极点。','integral-linearity dominated-convergence','把级数与积分逐单位区间相减，差项一致受 n^(−Re(s)−1) 控制。',
      r'当 Re(s)>1，积分比较给 ∫₁∞x^(−s)dx=1/(s−1)，故 ζ(s)−1/(s−1)=Σ_(n≥1)∫_n^(n+1)(n^(−s)−x^(−s))dx。',
      r'由 x^(−s) 的导数 −s x^(−s−1)，括号差等于 s∫_n^x u^(−s−1)du。若 s 在任一紧集 K⊂{Re(s)>0}，设 Re(s)≥δ>0、|s|≤M，则第 n 项绝对值≤M n^(−δ−1)。该数项级数收敛。',
      r'所以差项级数在每个这样的紧集上一致收敛，项项全纯，极限全纯。它与原 ζ−1/(s−1) 在 Re(s)>1 相同，给出全半平面延拓；在 s=1 的主部恰为 1/(s−1)，故是简单极点。$\square$')
    P('chebyshev-theta-upper','numbertheory/prime-number-theorem','切比雪夫函数 θ(x)=O(x)',r'令 θ(x)=Σ_(p≤x)log p，则存在常数 C 使所有 x≥2 满足 0≤θ(x)≤Cx。','binomial-count unique-factorization','区间 (n,2n] 内的素数整除中心二项式系数；对 dyadic 区间累加。',
      r'对整数 n≥1，区间 n<p≤2n 的每个素数 p 在 (2n)!/(n!)² 中恰出现至少一次：在 (n+1)…2n 的分子出现一次，而 n! 不含 p。不同 p 互素，故其乘积整除 C(2n,n)≤4^n。取对数得 θ(2n)−θ(n)≤2n log2。',
      r'给实数 x 取 n=⌊x/2⌋。区间 (x/2,x] 与 (n,2n] 仅在长度有界的端点邻域不同，其中至多常数个整数；相应 θ 误差 O(log x)。因此对充分大 x，θ(x)−θ(x/2)≤Cx，常数可固定。',
      r'沿 x,x/2,x/4,…求和，增量总和≤C x(1+1/2+1/4+… )≤2Cx。最终落到有界区间时 θ 有界；调整 C 覆盖小 x，即得 θ(x)=O(x)。$\square$')
    P('zeta-nonzero-one-line','numbertheory/prime-number-theorem','ζ(s) 在 Re(s)=1 上无零点',r'ζ(s) 在直线 Re(s)=1 的每一点（s=1 处为极点而非零点）均不为零。','zeta-euler-product-complex zeta-continuation-right-half chebyshev-theta-upper','对素数对数导数构造非负三角多项式；假设零点会使其加权极限为负。',
      r'对 Re(s)>1 定义 Φ(s)=Σ_p(log p)p^(−s)。Euler 乘积局部一致收敛并逐项求导，得 −ζ′/ζ=Σ_p(log p)/(p^s−1)=Φ(s)+Q(s)，其中 Q(s)=Σ_p(log p)/[p^s(p^s−1)]。Q 在 Re(s)>1/2 局部一致绝对收敛，故解析。',
      r'由前引理 ζ(s)=1/(s−1)+h(s)，h 在 Re(s)>0 全纯；所以 −ζ′/ζ−1/(s−1) 在 s=1 附近全纯。结合 Q，Φ(s)−1/(s−1) 在 Re(s)>1/2 除 ζ 零点外解析，并在 s=1 解析。若 s₀=1+iα（α≠0）是阶数 m≥1 的零点，则 εΦ(1+ε+iα)→−m；若 1+2iα 是零点，记阶数 n≥1，否则 n=0，同理极限为 −n。另有 εΦ(1+ε)→1。',
      r'对 ε>0，令 θ_p=α log p。恒等式 (e^(iθ_p/2)+e^(−iθ_p/2))⁴=Σ_(r=−2)^2 c_r e^(irθ_p)，其中 (c_−2,c_−1,c₀,c₁,c₂)=(1,4,6,4,1)，左边为非负实数。因此 Σ_(r=−2)^2 c_r Φ(1+ε+irα)=Σ_p(log p)p^(−1−ε)(e^(iθ_p/2)+e^(−iθ_p/2))⁴≥0。',
      r'乘 ε 并令 ε↓0，左侧极限为 6−8m−2n，故非负。但若 m≥1，则 6−8m−2n≤−2，矛盾。于是 ζ 在 1+iα 无零点；Re(s)>1 由 Euler 乘积非零，s=1 为已证简单极点，结论成立。$\square$')
    P('newman-tauberian','numbertheory/prime-number-theorem','Newman Tauberian 定理（有界函数版）',r'若有界局部可积 f:[0,∞)→C 的 Laplace 变换 g(z)=∫₀∞f(t)e^(−zt)dt 在 Re(z)>0 收敛，并解析延拓到包含闭半平面 Re(z)≥0 的开集，则 ∫₀∞f(t)dt 收敛且等于 g(0)。','cauchy-square-formula','截断变换 g_T 与 g 作差，沿右半圆及左侧解析延拓边界估计，并用 Cauchy 定理。',
      r'令 |f(t)|≤B，g_T(z)=∫₀^T f(t)e^(−zt)dt。对固定大 R，解析延拓的开邻域与紧集 {|z|≤R,Re z≥0} 有正距离；取足够小 δ>0，使 g 在 D={|z|≤R,Re z≥−δ} 邻域解析。C=∂D 正向。由 Cauchy 公式，(g(0)−g_T(0))=(2πi)⁻¹∫_C(g−g_T)e^(zT)(1+z²/R²)dz/z。',
      r'把 C 上 Re z>0 的圆弧记 C_+。此处 g−g_T=∫_T∞f(t)e^(−zt)dt，令 u=Re z，则 |g−g_T|≤Be^(−uT)/u。圆弧上 |z|=R 且 |1+z²/R²|=2u/R；与 e^(zT)/z 相乘后被积函数模≤2B/R²。弧长≤2πR，故这部分积分绝对值≤常数·B/R。',
      r'在 C 的 Re z<0 部分，对 g_T 项可将积分路径移至左半圆 |z|=R、Re z<0；g_T 整且变形区域不含 z=0。此圆上令 u=−Re z>0，有 |g_T(z)|≤B∫₀^T e^(ut)dt≤Be^(uT)/u，而 |1+z²/R²|=2u/R，故同样得到积分绝对值≤常数·B/R。',
      r'剩余的 g 项在 Re z<0 的路径上固定有界；乘 e^(zT) 后逐点趋零，端点仅有限个且可用有界收敛控制，故该项随 T→∞ 趋零。于是 limsup_(T→∞)|g(0)−g_T(0)|≤C B/R，其中 C 为绝对常数。令 R→∞，右侧为零，所以 g_T(0)=∫₀^T f 收敛到 g(0)。$\square$')
    P('theta-asymptotic-prime-theorem','numbertheory/prime-number-theorem','切比雪夫函数 θ(x)∼x',r'θ(x)=Σ_(p≤x)log p 满足 θ(x)∼x。','chebyshev-theta-upper zeta-nonzero-one-line newman-tauberian','用 Φ(s) 表示 θ 的 Mellin–Laplace 变换；Tauberian 定理给偏差比值的可积性，再用 θ 单调排除固定比例偏差。',
      r'由 Stieltjes 分部积分，对 Re(s)>1 有 Φ(s)=∫₁∞x^(−s)dθ(x)=s∫₁∞θ(x)x^(−s−1)dx=s∫₀∞e^(−st)θ(e^t)dt。边界项消失，因为 θ(x)=O(x) 且 Re(s)>1。',
      r'定义 f(t)=e^(−t)θ(e^t)−1。Chebyshev 上界使 f 有界，且局部可积。其 Laplace 变换对 Re(z)>0 为 g(z)=Φ(z+1)/(z+1)−1/z。令 H(s)=Φ(s)−1/(s−1)，前引理给 H 在 Re(s)≥1 邻域解析，于是 g(z)=H(z+1)/(z+1)−1/(z+1)，在 Re(z)≥0 解析。Newman 定理遂给 ∫₀∞f(t)dt 收敛，即 ∫₁∞(θ(x)−x)x^(−2)dx 收敛。',
      r'若某固定 λ>1 时有任意大 x 满足 θ(x)≥λx，则由 θ 单调，对 x≤t≤λx 有 θ(t)−t≥λx−t。因此偏差积分在该区间至少为 ∫_x^(λx)(λx−t)t^(−2)dt=∫₁^λ(λ−u)u^(−2)du>0，与收敛积分的尾段必须趋零矛盾。',
      r'若固定 0<λ<1 时有任意大 x 满足 θ(x)≤λx，则在 λx≤t≤x 有 θ(t)−t≤λx−t，偏差积分至多为 ∫_λ^1(λ−u)u^(−2)du<0，同样矛盾。故对任意 λ>1，最终 θ(x)<λx；对任意 λ<1，最终 θ(x)>λx。即 θ(x)/x→1。$\square$')
    P('prime-number-theorem-proof','numbertheory/prime-number-theorem numbertheory/prime-counting','素数定理',r'令 π(x)=#{p≤x}，则 π(x)∼x/log x。','theta-asymptotic-prime-theorem','θ(x)∼x 给下界；排除小素数后，以任意固定 ε>0 控制其余素数的对数权重。',
      r'θ(x)≤π(x)log x，因为每个 p≤x 的权重 log p≤log x。因此 π(x)≥θ(x)/log x，给出 liminf π(x)log x/x≥1。',
      r'固定 0<ε<1。将 p<x^(1−ε) 的素数至多 x^(1−ε) 个单独计入；其余 p∈[x^(1−ε),x] 满足 log p≥(1−ε)log x。因此 θ(x)≥(1−ε)log x[π(x)−x^(1−ε)]。',
      r'整理得 limsup π(x)log x/x≤1/(1−ε)，因为 x^(1−ε)log x/x→0。令 ε↓0 得 limsup≤1。结合下界，π(x)log x/x→1，即素数定理。',
      r'本证明链完整展开了 Euler 乘积、ζ 的半平面延拓、θ 的 Chebyshev 上界、Re(s)=1 零点排除及 Newman Tauberian 引理；分析链参考 D. Zagier, “Newman’s Short Proof of the Prime Number Theorem,” Amer. Math. Monthly 104 (1997), 705–708。$\square$')
    P('pnt-prime-index-equivalence','numbertheory/prime-number-theorem','素数定理的计数函数与第 n 个素数表述等价',r'π(x)∼x/log x 当且仅当第 n 个素数 p_n∼n log n。','prime-infinite-euclid','把严格递增序列 p_n 与其计数函数 π(x) 互相夹逼，并控制对数因子。',
      r'若 π(x)∼x/log x，令 x=p_n，则 n=π(p_n)∼p_n/log p_n，故 p_n/n∼log p_n。取对数得 log p_n−log n=log log p_n+o(1)，而 log log p_n/log p_n→0，所以 log n/log p_n→1。代回便得 p_n∼n log n。',
      r'反之假设 p_n∼n log n。给大 x 取 n=π(x)，则 p_n≤x<p_(n+1)。当 x→∞ 时 n→∞；相邻指标公式给 p_(n+1)∼(n+1)log(n+1)∼n log n∼p_n。因此夹逼得 x∼n log n。又 p_n≤x<p_(n+1) 与相邻素数渐近同样给 log x∼log n，故 n∼x/log x，即 π(x)∼x/log x。',
      r'所以两种极限表述互相推出。该等价性本身不提供其中任一渐近式的证明。$\square$')
    BASES['def-elliptic-modularity-euler-factor']=dict(title='椭圆曲线与归一化新形式的局部 L 因子',statement='对素数 p 处良约化的椭圆曲线 E/Q，定义 a_p(E)=p+1−#E(F_p)，局部因子 L_p(E,s)=(1−a_p(E)p^(−s)+p^(1−2s))^(−1)。对归一化权 2 Hecke 特征新形式 f=Σa_nq^n，局部因子 L_p(f,s) 采用相同形式，其中系数是 Fourier 系数 a_p(f)。称 E 与 f 模性对应时要求其 L 函数（等价地在收敛区域的 Euler 因子）相同。')
    P('modularity-local-coefficients','numbertheory/modularity numbertheory/elliptic-curves','模性对应迫使良素数系数与点数相等',r'若 E/Q 与归一化权 2 新形式 f 模性对应，则每个良素数 p 都有 a_p(f)=a_p(E)=p+1−#E(F_p)。','def-elliptic-modularity-euler-factor','相同局部 L 因子的分母多项式系数唯一。',
      r'模性对应按定义给出良素数处相同局部因子。记 X=p^(−s)，则两边分母分别为 1−a_p(E)X+pX² 与 1−a_p(f)X+pX²。',
      r'若两个倒数有理函数在收敛开集相等，乘以共同非零分母即得多项式恒等。比较 X 的一次系数，−a_p(E)=−a_p(f)，故两系数相等。',
      r'再代入 a_p(E) 的定义即得点数公式。这是模性对应的局部算术后果；它不证明给定 E 一定存在这样的 f。$\square$')
    P('rational-point-algebraic-variety','numbertheory/algebraic-varieties-arithmetic numbertheory/rational-points','单位圆作为有理代数簇的有理点参数化',r'仿射曲线 X²+Y²=1 在 Q 上有无穷多个有理点，且除点 (−1,0) 外均可由有理参数 t 按 x=(1−t²)/(1+t²)、y=2t/(1+t²) 表示。','rational-unit-circle-points','将单位圆视为 Q 上的代数簇，引用已逐步证明的斜率参数化。',
      r'多项式方程 X²+Y²−1=0 的系数在 Q 中，故其零点集合定义一个 Q 上仿射代数簇。前引理已证明其所有有理点由斜率 t∈Q 参数化，唯一漏点为 (−1,0)。',
      r'Q 有无穷多个元素，且不同 t 给不同点（t=y/(1+x) 可从点唯一恢复），所以该簇有无穷多个有理点。',
      r'这只是有理参数曲线的简单算术几何例子，不推广为所有高亏格曲线有无穷多个有理点；后者一般为假，且受 Faltings 定理约束。$\square$')
    BASES['def-abelian-variety']=dict(title='阿贝尔簇定义',statement='阿贝尔簇是代数闭域上的连通、光滑、射影代数群；群加法与取逆均为正则映射。')
    P('abelian-multiplication-morphism','numbertheory/abelian-varieties geometry/algebraic-varieties-geometry','阿贝尔簇的整数倍映射是群态射',r'对阿贝尔簇 A 及整数 n，映射 [n]:A→A、x↦nx 是正则群态射。','def-abelian-variety','整数倍映射是加法态射有限次复合；负整数再复合取逆映射。',
      r'对 n≥1，定义 [1]=id_A，[n+1]=m∘([n],id_A)，其中 m:A×A→A 是正则群加法。因此由正则映射复合封闭，归纳得每个 [n] 正则。',
      r'群的结合律与交换律给 [n](x+y)=n(x+y)=nx+ny=[n]x+[n]y，所以它是群同态。n=0 是常值单位元映射，仍为正则群态射。',
      r'对 n<0，定义 [n]=[-n]∘inv，其中 inv:A→A 为正则取逆映射；故仍正则且满足同态式。此论证不说明 [n] 有限、满射或核阶为 n^(2g)，这些需要额外几何定理。$\square$')
    P('unknot-complement-fundamental-group','geometry/knot-theory geometry/fundamental-group','标准无结圆环补空间的基本群为 Z',r'标准无结 U={(z₁,z₂)∈S³⊂C²:z₂=0} 的补空间 S³\U 同胚于开圆盘 D² 与圆周 S¹ 的乘积，故 π₁(S³\U)≅Z。','contractible-fundamental-group circle-fundamental-group','直接由坐标给出乘积同胚，再将圆盘因子收缩到中心。',
      r'S³\U 中 z₂≠0。定义映射到 D²×S¹： (z₁,z₂)↦(z₁,z₂/|z₂|)。因 |z₁|²+|z₂|²=1 且 z₂≠0，必有 |z₁|<1，映射确实落在开圆盘与圆周乘积。',
      r'反向映射 (w,ζ)↦(w,√(1−|w|²)ζ)。两映射连续且互为逆，故为同胚。D²×S¹ 形变收缩到 {0}×S¹，通过 (w,ζ,s)↦((1−s)w,ζ)。',
      r'圆盘可缩，故乘积基本群同构于 S¹ 的基本群；标准绕数分类给 π₁(S¹)≅Z。无结补空间因此基本群为整数群。一般结的补空间群是重要结不变量，通常不等于 Z。$\square$')
    P('circle-fundamental-group','geometry/fundamental-group geometry/low-dimensional-topology','圆周基本群同构于整数群',r'以 1 为基点，π₁(S¹,1)≅Z；同构由环路提升到覆盖 p:R→S¹、p(t)=exp(2πit) 的终点整数给出。','covering-path-lift-uniqueness intermediate-value','逐段提升路径；同伦提升保持离散整数终点；终点相同的提升可线性同伦。',
      r'给连续路径 γ:[0,1]→S¹ 及起点提升 u₀。圆周上每点有开弧 U，使 p 的原像分成互不交的开区间且每段 p 同胚到 U。由 γ 的一致连续性，取足够细有限分割，使每段像落入某个这样的弧；从前一段端点提升开始，用该片的逆映射逐段定义唯一连续提升。唯一性也可由已证覆盖路径提升唯一性得出。',
      r'若 γ 是基于 1 的环路且起始提升为 0，则终点 n 满足 p(n)=1，故 n∈Z。若两基同伦环路通过 H(s,t) 相连，紧方形可细分成小矩形，使每个小矩形像落在均匀覆盖弧；逐格用同一片逆映射提升，得到连续的同伦提升。其终点随同伦参数连续且始终落在离散集合 Z，故终点整数不变。',
      r'每个 n∈Z 由环路 γ_n(s)=exp(2πins) 达到，故绕数映射满射。若两环路提升终点相同 n，则其提升 α,β 都从 0 到 n；线性插值 (1−t)α(s)+tβ(s) 固定端点，投影后给两环路的基同伦，故绕数相同者代表同一类。',
      r'绕数保持环路拼接下相加（提升终点相加），于是 π₁(S¹,1) 与加法群 Z 同构。该证明同时给出无结补空间引理所需的圆周基本群计算。$\square$')
    P('compact-oriented-one-manifold-circle','geometry/manifold-classification geometry/differential-structures','紧致连通定向一维流形无边界时同胚于圆周',r'若 M 是紧致、连通、光滑、定向且无边界的一维流形，并给定光滑黎曼度量，则 M 微分同胚于 S¹。','picard-lindelof inverse-function-one-dimension finite-dimensional-compactness','定向与度量给出处处非零单位向量场；其完整流的轨道开且唯一，稳定子是非零离散子群 TZ。',
      r'每个切空间是一维定向内积空间，恰有一个正向单位向量。局部定向坐标中该向量场为 g_(11)^(-1/2)∂/∂x，光滑；换到另一正向坐标后仍是同一唯一正向单位向量，故这些局部表达拼成全局光滑非零向量场 V。',
      r'解自治方程 γ′=V(γ)。局部存在唯一性由坐标中的 Picard–Lindelöf 定理给出。因 M 紧致，可取有限个坐标邻域覆盖，并在较小邻域上统一控制 V 的坐标系数与 Lipschitz 常数，得到正的统一局部延拓时间；因此解在任意有限时间均可延拓，流 Φ_t 对所有 t∈R 定义。',
      r'固定 p∈M，轨道映射 φ(t)=Φ_t(p) 满足 φ′(t)=V(φ(t))≠0。由一维逆函数定理，它在每个时刻附近是微分同胚到开弧，故每条轨道是开集。流轨道将 M 分割成互不交的开集；连通性迫使只有一个轨道，所以 φ:R→M 满射。',
      r'稳定子 H={t∈R:Φ_t(p)=p} 是闭加法子群。由轨道局部单射，0 在 H 中孤立，故 H 离散。若 H={0}，φ 既满又单，且为局部微分同胚，因而是开连续双射，其逆连续，给出 R 与紧致 M 的同胚，矛盾。故 H 非零。',
      r'令 T 为 H 中最小正元素：离散性给 H 与 0 的正距离；闭性使正元素下确界仍在 H。对任意 h∈H 作整数除法 h=nT+r、0≤r<T；r∈H，最小性迫使 r=0。因此 H=T Z。流映射诱导双射局部微分同胚 R/(TZ)→M；商圆周紧致、M Hausdorff，双射连续映射为同胚，局部光滑逆使之为微分同胚。R/(TZ) 显然微分同胚于 S¹。$\square$')
    BASES['def-propositional-lk']=dict(title='经典命题 LK 演算',statement='公式用原子、¬、∧、∨生成；相继式 Γ⇒Δ 的语义为“Γ 全真蕴含 Δ 至少一项为真”。初始式 A⇒A，允许左右弱化与交换；¬、∧、∨ 规则分别为通常的经典相继式规则，例如 ∧L 从 Γ,A,B⇒Δ 得 Γ,A∧B⇒Δ，∧R 从 Γ⇒Δ,A 与 Γ⇒Δ,B 得 Γ⇒Δ,A∧B，∨L 对 A、B 分两前提，∨R 把 A、B 同置右侧。LK 还可加入 cut 规则 Γ⇒Δ,A 与 Γ,A⇒Δ 得 Γ⇒Δ。')
    P('propositional-cut-elimination','foundations/cut-elimination foundations/sequent-calculus','命题 LK 的 cut 消去',r'经典命题 LK 中，若有限相继式 Γ⇒Δ 可由含 cut 的证明推出，则它也有不含 cut 的证明。此处结论限于命题逻辑；不含量词。','def-propositional-lk sequent-calculus-soundness','可靠性给语义有效；按公式复杂度作可逆真值分解，构造 cut-free 证明。',
      r'先证 cut-free 完备性。对有效相继式 Γ⇒Δ 的所有公式复杂度总和作归纳。若某原子 A 同时出现在 Γ 与 Δ，则 A⇒A 是初始式，逐次左右弱化其余公式即得 cut-free 证明。',
      r'若左侧含 ¬A，语义有效性等价于 Γ⇒Δ,A 有效；其公式复杂度严格下降，归纳得该前提的 cut-free 证明，再用 ¬L 得原式。若右侧含 ¬A，同理化为 Γ,A⇒Δ 并用 ¬R。左侧含 A∧B 时化为 Γ,A,B⇒Δ 并用 ∧L；右侧含 A∨B 时化为 Γ⇒Δ,A,B 并用 ∨R。每种转化均由相应真值条件直接验证，且前提复杂度下降。',
      r'左侧含 A∨B 时，有效性分别保证 Γ,A⇒Δ 与 Γ,B⇒Δ 有效；对两者用归纳假设，再以 ∨L 合并。右侧含 A∧B 时同理分别得到 Γ⇒Δ,A 与 Γ⇒Δ,B，再用 ∧R。有限公式总复杂度使此分解过程终止；若无复合公式，公式全为原子，有效性必迫使某原子同时出现于左右两侧，已属初始情形。故每个语义有效命题相继式均有 cut-free 推导。',
      r'现设原相继式在含 cut 的 LK 中可证。由此前的 LK 可靠性，它语义有效；由刚证的命题 cut-free 完备性，它有不含 cut 的推导。这证明 cut 消去。该论证只覆盖有限命题联结词；一阶量词规则还涉及特征变量、替换与量词切消，不能把本证明直接当作一阶 Gentzen 切消定理。$\square$')
    BASES['def-effective-arithmetic-coding']=dict(title='算术证明系统的有效编码假设',statement='固定一套可有效判定的有限字符串公式/证明编码，编号记作 ⌜·⌝。替换函数 Sub(e,n) 在 e 是单自由变量公式编码时返回把变量替换为数字 n 后的句子编码。Proof_T(p,n) 表示 p 编码一份 T 中句子编号 n 的有限证明；Prov_T(n):=∃p Proof_T(p,n)。本条 Gödel 论证明确假设 T 能证明其所用每个具体闭项 Sub(k,k) 的正确数值计算，并能在标准自然数结构中正确解释 Proof_T；不在此假装已证明 Robinson Q 对所有原始递归关系的表示定理。')
    P('arithmetical-diagonal-lemma','foundations/godel-first','算术对角引理（闭项编码假设版）',r'对任意单自由变量算术公式 ψ(x)，若 T 能验证具体替换计算，则存在句子 G 及其编号 g，使 T⊢G↔ψ(\bar g)。','def-effective-arithmetic-coding syntax-parse-substitute','把公式的 Gödel 编码代入自身替换函数，构造其不动点句。',
      r'定义 θ(y)=ψ(Sub(y,y))，令 k=⌜θ⌝，并令 G=θ(\bar k)。按替换编码定义，G 的编号 g 正是 Sub(k,k)。',
      r'将闭项 Sub(\bar k,\bar k) 在算术中按定义计算为数字 \bar g。T 能验证该具体有限计算，所以 T 证明 Sub(\bar k,\bar k)=\bar g。',
      r'在 θ 的定义中代入 k 得 G=ψ(Sub(\bar k,\bar k))。由上一等式及等号替换，T 证明 G↔ψ(\bar g)。这是对每个固定 ψ 的构造；对具体弱算术系统，替换编码与闭项计算的可证性必须另行建立。$\square$')
    P('godel-first-sound-theory','foundations/godel-first','可靠有效算术理论的不完备性（显式编码假设版）',r'若 T 是可靠、有效可公理化的算术理论，并满足本章闭项编码计算假设，则存在算术句 G，使 T 既不证明 G，也不证明 ¬G。','arithmetical-diagonal-lemma def-effective-arithmetic-coding','对句子自身的编号取对角代入，使 G 断言“G 在 T 中不可证”；可靠性排除两边任何一种证明。',
      r'令 φ(x) 为公式 ¬Prov_T(x)，令 θ(y)=φ(Sub(y,y))。取 k=⌜θ⌝，并令 G 为 θ 的自由变量 y 代入数字 k 所得的闭句。按编码定义，g=⌜G⌝=Sub(k,k)。闭项计算假设使 T 能证明 Sub(\bar k,\bar k)=\bar g，故 T 可验证 G 与 ¬Prov_T(\bar g) 等价。这就是此处所需的对角句构造。',
      r'若 T⊢G，则存在一个实际有限证明编码 p，使标准自然数中 Proof_T(p,g) 成立，因而 Prov_T(g) 为真。上一段的对角关系说明 G 在标准模型中为假。可是 T 可靠意味着 T 的每个定理在标准算术模型中为真，特别 G 为真，矛盾。因此 T⊬G。',
      r'若 T⊢¬G，可靠性给标准模型中 ¬G 为真。由 G 与 ¬Prov_T(g) 的标准语义等价，Prov_T(g) 为真，于是存在实际有限 T 证明 G。可靠性又使该定理 G 在标准模型为真，与 ¬G 为真矛盾。因此 T⊬¬G。',
      r'故 G 不可判定，T 不完备。此证明以语义可靠性为前提，强于经典第一不完备定理常用的单纯相容性；若要从一致性推出 Rosser 句，须补充并证明对证明编码、可证性谓词和 Rosser 比较的算术化引理。$\square$')
    BASES['def-proof-code-arithmetic']=dict(title='证明谓词与算术化检查假设',statement='固定有效形式演算，Prf_T(p,n) 表示 p 是 T 中编号 n 句子的有限证明，Prov_T(n):=∃p Prf_T(p,n)。本章对理论 T 明列假设：证明检查与代入数字可由原始递归关系表示；T 能证明具体正确的证明检查；T 能验证 MP 拼接证明及“由证明代码生成 Prov 句证明”的统一原始递归代码变换。以下 D1–D3 的证明均只在这些算术化假设下成立。')
    P('provability-d1','foundations/godel-second foundations/formal-proof','可证性条件 D1',r'若 T⊢φ，则 T⊢Prov_T(⌜φ⌝)。','def-proof-code-arithmetic','把一份具体有限证明的代码代入证明谓词，再引入存在量词。',
      r'取 T 的实际有限证明序列 π，其编码为自然数 p。证明检查定义逐行验证每一公理实例与推理步，故 Prf_T(p,⌜φ⌝) 在标准算术中为真。',
      r'按本章算术化假设，T 可证明这个具体闭句 Prf_T(\bar p,\overline{⌜φ⌝})。存在引入规则遂给 T⊢∃p Prf_T(p,⌜φ⌝)，即 T⊢Prov_T(⌜φ⌝)。$\square$')
    P('provability-d2','foundations/godel-second foundations/formal-proof','可证性条件 D2',r'T⊢Prov_T(⌜φ→ψ⌝)→(Prov_T(⌜φ⌝)→Prov_T(⌜ψ⌝))。','def-proof-code-arithmetic','有效拼接两个有限证明并对其代码作存在量词推理。',
      r'固定证明代码 p,q，若 p 证明 φ→ψ、q 证明 φ，则把 π_p、π_q 接续，并在末尾用一次 MP 加入 ψ，得到 ψ 的证明代码 h(p,q)。函数 h 对有限字符串编码是原始递归的。',
      r'证明检查的逐行定义给 T 证明 Prf_T(p,⌜φ→ψ⌝)∧Prf_T(q,⌜φ⌝)→Prf_T(h(p,q),⌜ψ⌝)。对 p,q 存在量化并引入 h(p,q) 作为新见证，即得所述 D2。',
      r'这是对象理论内的统一代码变换；仅说外部 MP 保持定理还不足以代替这一步算术化。$\square$')
    P('provability-d3','foundations/godel-second foundations/formal-proof','可证性条件 D3',r'T⊢Prov_T(⌜φ⌝)→Prov_T(⌜Prov_T(⌜φ⌝)⌝)。','def-proof-code-arithmetic','从证明代码有效构造一份 T 内部证明，证明该代码确实给出原句的证明。',
      r'设 p 是 φ 的 T 证明代码。证明谓词由逐行的有限检查定义；本章算术化假设保证 T 可验证具体检查并能统一生成检查证明。因此可原始递归地从 p 构造一份 T 证明序列，证明 Prf_T(\bar p,⌜φ⌝)，再用存在引入证明 Prov_T(⌜φ⌝)。令该新证明代码为 d(p)。',
      r'T 能验证变换 d 的正确性：Prf_T(p,⌜φ⌝)→Prf_T(d(p),⌜Prov_T(⌜φ⌝)⌝)。对 p 存在量化并以 d(p) 为见证，得 Prov_T(⌜φ⌝)→Prov_T(⌜Prov_T(⌜φ⌝)⌝)，即 D3。',
      r'这里明确使用理论能形式化证明检查过程的假设；D3 不是纯粹的元语言逻辑恒等式。$\square$')
    P('loeb-theorem','foundations/godel-second foundations/formal-proof','Löb 定理（在可证性条件下）',r'若 T 满足对角句构造及 D1–D3，且 T⊢Prov(⌜φ⌝)→φ，则 T⊢φ。','provability-d1 provability-d2 provability-d3 arithmetical-diagonal-lemma','取 G↔(Prov(G)→φ)，利用 D1–D3 在理论内部把 Prov(G) 推到 Prov(φ)，再得到 G 本身可证。',
      r'对公式 ψ(x)=Prov(x)→φ 应用对角构造，得句子 G 使 T⊢G↔(Prov(⌜G⌝)→φ)。记 P_G 为 Prov(⌜G⌝)。固定点给 T⊢G→(P_G→φ) 与 T⊢(P_G→φ)→G。',
      r'由 D1，T⊢Prov(⌜G→(P_G→φ)⌝)。D2 将其与证明规则合成为 T⊢P_G→Prov(⌜P_G→φ⌝)。再次用 D2 对内部蕴含应用，得 T⊢Prov(⌜P_G→φ⌝)→(Prov(⌜P_G⌝)→Prov(⌜φ⌝))。',
      r'D3 给 T⊢P_G→Prov(⌜P_G⌝)。串联上述蕴含，T⊢P_G→Prov(⌜φ⌝)。题设 T⊢Prov(⌜φ⌝)→φ，故 T⊢P_G→φ。固定点的反向蕴含随即给 T⊢G。',
      r'再由 D1 得 T⊢P_G；结合 T⊢P_G→φ，MP 得 T⊢φ。全程只用经典逻辑、固定点与明列的 D1–D3。$\square$')
    P('godel-second-incompleteness','foundations/godel-second','Gödel 第二不完备定理（条件化证明）',r'若 T 一致、有效可公理化、含足够算术以构造对角句，且其标准可证性谓词满足 D1–D3，则 T 不证明自身一致性句 Con(T)=¬Prov_T(⌜⊥⌝)。','loeb-theorem','若 T 能证明 Con(T)，经典逻辑给 Prov(⊥)→⊥；Löb 定理将推出 T⊢⊥，违背一致性。',
      r'反设 T⊢Con(T)，即 T⊢¬Prov(⌜⊥⌝)。经典命题重言式 ¬P↔(P→⊥) 给 T⊢Prov(⌜⊥⌝)→⊥。',
      r'把 Löb 定理用于 φ=⊥，其前提正是上一步的内部蕴含，故 T⊢⊥。这与 T 一致（不证明矛盾句）的假设冲突。',
      r'所以 T⊬Con(T)。结论依赖 D1–D3 与对角构造；对具体 Robinson Q 或 Peano 算术的标准编码，要把这些算术化条件逐项证明后才得到通常表述。$\square$')
