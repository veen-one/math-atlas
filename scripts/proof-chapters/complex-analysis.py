"""Complex analysis from triangular Goursat to the fundamental theorem of algebra."""
def register(P, BASES):
    BASES['def-contour']=dict(title='复可导与曲线积分的定义',statement='复导数按复增量差商极限定义。分段 C¹ 参数曲线 γ 上，∫f(z)dz 定义为 ∫f(γ(t))γ′(t)dt，实部与虚部分别积分。正向多边形边界按逆时针取向。此章可用 π=4∫₀¹(1+t²)⁻¹dt 表示所需常数，因此计算绕行积分不预设三角函数参数化。')
    P('complex-basic-rules','analysis/holomorphic-functions','复可导函数的连续性及代数法则',r'复可导蕴含连续；和、积及分母非零时的商都复可导，且满足与实微分同形式的求导规则。','def-complex def-contour','直接拆解差商，连续性让乘积与倒数中的函数值趋向点值。',
      r'若差商 Q(h)→f′(a)，则它在小邻域有界，f(a+h)-f(a)=hQ(h)→0，故连续。和的规则来自差商相加。',
      r'积差商可写为 f(a+h)[g(a+h)-g(a)]/h+g(a)[f(a+h)-f(a)]/h，连续性与极限乘法给 (fg)′=fg′+gf′。极限乘法可由 |uv-u₀v₀|≤|u||v-v₀|+|v₀||u-u₀| 的有界因子估计直接验证。',
      r'若 g(a)≠0，连续性使附近分母也非零，倒数差商为 -[g(a+h)-g(a)]/[h g(a+h)g(a)]，极限为 -g′(a)/g(a)²；再与乘法合并得到商法则。$\square$')
    P('contour-estimate','analysis/cauchy-integral-theorem analysis/residues','曲线积分的长度估计与端点公式',r'分段 C¹ 曲线 γ 上连续 f 满足 |∫γ f dz|≤maxγ|f|·length(γ)。若 F 在曲线附近复可导、F′=f 连续，则 ∫γ f dz=F(终点)-F(起点)。','def-contour supremum-integral ftc-second complex-cauchy-schwarz','分别用复积分的实方向投影估计与沿参数的链式法则。',
      r'记复积分 I。若 I≠0，令单位复数 u=共轭(I)/|I|，则 |I|=Re(uI)=∫Re(uf(γ)γ′)≤∫|f(γ)||γ′|≤maxγ|f|∫|γ′|；I=0 时直接成立。积分单调性由实上下和定义给出，分段分别相加。',
      r'复可导的线性逼近式 F(z+h)-F(z)=F′(z)h+o(|h|)，代入实参数增量 γ(t+s)-γ(t)=γ′(t)s+o(|s|)，给出复合的实参数导数 f(γ(t))γ′(t)。对各段实、虚部分用微积分第二基本定理，再望远镜相加，得到端点公式。',
      r'特别地，常数和一次函数的闭路积分为零：它们分别有原函数 cz 与 z²/2。这个有限多项式事实在下文三角形证明中使用，不依赖待证柯西定理。$\square$')
    P('goursat-triangle','analysis/cauchy-integral-theorem analysis/holomorphic-functions','Goursat 三角形定理',r'若 f 在包含闭三角形 T 的开集上全纯，则正向边界积分 ∫∂T f dz=0。不要求 f′ 连续。','contour-estimate finite-dimensional-compactness complex-basic-rules archimedean','四分三角形保留积分最大的一块，复可导误差与边界缩小速率恰好抵消。',
      r'连接三边中点把 T 分成四个相似小三角形。内部边方向相反而抵消，故原边界积分等于四子边界积分之和。可选一个子三角形，其积分绝对值至少为原来的四分之一。递归得到嵌套 T_n，周长与直径均为原来的 2^(-n)，且 |I(T_n)|≥4^(-n)|I(T)|。',
      r'选 x_n∈T_n，用有限维有界子列定理取得极限 a。每个固定 T_k 闭，尾部点都在其中，故 a 属于全部 T_k；直径趋零保证唯一。该点在 f 全纯的开集内。',
      r'对任意 ε>0，复可导性给 f(z)=f(a)+f′(a)(z-a)+r(z)，在充分近时 |r(z)|≤ε|z-a|。足够大 n 的整个 T_n 都位于该邻域，且 a∈T_n。常数和一次项的闭路积分为零。',
      r'由长度估计，|I(T_n)|≤ε diam(T_n)perimeter(T_n)=ε diam(T)perimeter(T)/4^n。与第一步的下界合并，得 |I(T)|≤ε diam(T)perimeter(T)。ε 任意，故原积分为零。退化三角形由线段往返相消直接成立。$\square$')
    P('goursat-one-point','analysis/cauchy-integral-theorem','允许一个连续异常点的三角形积分定理',r'若 g 在开集 U 连续、除至多一点 a 外全纯，则对任意闭三角形 T⊆U，其边界积分为零。','goursat-triangle contour-estimate finite-dimensional-compactness','均匀细分，只保留可能触及异常点的少数小三角形，它们边界总长度趋零。',
      r'若异常点不在 T 中，直接用 Goursat。否则把 T 做 n 次四等分，得到边长比例 2^(-n) 的规则三角网格。任一点最多属于六个小三角形的闭包：内部网格顶点周围为六块，边或小三角内部更少；仿射变换回任意非退化 T 不改变此组合计数。',
      r'除闭包含 a 的这些小三角形外，其他块周围有避开 a 的开邻域，故积分都为零。求和消去全部内部边，原积分等于至多六个异常小块的积分之和。',
      r'g 在紧闭三角形上连续有界，设 |g|≤M。长度估计给原积分绝对值≤6M perimeter(T)2^(-n)，令 n→∞ 得零。退化情形仍为往返相消。$\square$')
    P('convex-primitive','analysis/cauchy-integral-theorem analysis/integration-calculus','凸域上的原函数与闭路积分为零',r'凸开域 U 上连续 g 若每个三角形边界积分为零，则 g 有复原函数；所以 U 内任意分段 C¹ 闭曲线的积分为零。特别适用于全纯函数及连续且只有一个全纯异常点的函数。','goursat-triangle goursat-one-point contour-estimate','固定起点，沿直线段积分；三角形关系把原函数增量化为短线段积分。',
      r'固定 z₀∈U，定义 F(z)=∫_[z₀,z] g(w)dw。凸性保证所有线段与相关三角形都在 U。三角形边界积分为零给 F(z+h)-F(z)=∫_[z,z+h]g(w)dw，只要 z+h 邻近且在 U。',
      r'用参数 w=z+th，得到差商 [F(z+h)-F(z)]/h=∫₀¹g(z+th)dt。连续性使右侧趋于 g(z)：任意误差在足够短整条线段上一致控制，实参数积分也被同一误差控制。故 F′=g。',
      r'原函数端点公式使所有闭曲线积分为零。全纯 g 的连续性及三角形条件由前述结果保证；单异常点情形由允许一个连续异常点的定理保证。此处只证明凸域版本，不冒充任意有洞区域的结论。$\square$')
    P('cauchy-square-formula','analysis/cauchy-integral-theorem analysis/holomorphic-functions','柯西积分公式（方形围道版）',r'设 f 在凸开域 U 全纯，正向轴平行正方形 Q 的闭区域在 U 内，z 在其内部，则 f(z)=(2πi)⁻¹∫∂Q f(w)/(w-z)dw。','convex-primitive complex-basic-rules goursat-triangle contour-estimate','差商填补中心后积分为零，剩下的基本核积分可用内方形和四条直边直接计算。',
      r'定义 g(w)=[f(w)-f(z)]/(w-z)，在 w=z 填为 f′(z)。复可导定义保证 g 在该点连续；在别处商法则使其全纯。凸域原函数结论给 ∫∂Q g=0，故 ∫∂Q f(w)/(w-z)dw=f(z)∫∂Q1/(w-z)dw。',
      r'在 Q 内取以 z 为中心的更小轴平行正方形 S。Q 与 S 之间可用有限矩形分块再剖为三角形，所有这些三角形避开 z。对核 1/(w-z) 用 Goursat 后内部边相消，得到外边界积分等于内方形积分。',
      r'把 z 平移为零，S 的右边参数为 r+it，t 从 -r 到 r。其核积分为 ∫_-r^r i/(r+it)dt=∫_-r^r[t+ir]/(r²+t²)dt。实部为奇函数积分零，虚部换元为 i∫_-1^1(1+s²)⁻¹ds=iπ/2。',
      r'其他三边旋转因子在分子分母抵消，积分与右边相同，所以总和为 2πi。π 按基础约定为一个正实积分，非零，故可除，得到公式。$\square$')
    P('holomorphic-taylor','analysis/holomorphic-functions analysis/analytic-continuation','全纯函数的局部幂级数与任意阶可导性',r'若 f 在凸开域中的方形 Q 附近全纯，中心为 c、中心到边距离 r，则 |z-c|<r 时 f(z)=Σ_(n≥0)a_n(z-c)^n，a_n=(2πi)⁻¹∫∂Q f(w)/(w-c)^(n+1)dw，且 a_n=f^(n)(c)/n!。','cauchy-square-formula uniform-integration contour-estimate weierstrass-m','在积分核里展开一致收敛的几何级数，再用系数界逐次证明可微。',
      r'固定 ρ<r。在边界 w 上有 |w-c|≥r，对 |z-c|≤ρ，几何级数 1/(w-z)=Σ_(n≥0)(z-c)^n/(w-c)^(n+1) 一致收敛，尾和被 r⁻¹(ρ/r)^(N+1)/(1-ρ/r) 控制。乘连续有界 f 后仍一致；各边按实参数用一致积分交换，得到幂级数及所列系数。',
      r'设 M=max∂Q|f|，长度 L=perimeter(Q)。长度估计给 |a_n|≤LM/(2πr^(n+1))。因此任意较小闭圆盘上，形式导数级数 Σ_(n≥1)n a_n(z-c)^(n-1) 一致绝对收敛，因为几何级数乘任意固定次多项式 n^k 仍收敛（充分大 n 的相邻比可严格界在 1 以下）。',
      r'说明形式导数确为复导数：对每项多项式，沿 h 的线段有 p(z+h)-p(z)=h∫₀¹p′(z+th)dt，这是单项式的有限代数展开或实参数基本定理。先对有限部分和成立，再用函数与导数级数的局部一致收敛取极限。',
      r'故 [f(z+h)-f(z)]/h 等于连续导数级数在短线段上的平均值，令复 h→0 得其在 z 的值。更高形式导数同样局部一致收敛，可归纳重复。因此 f 任意阶复可导，代入 z=c 只有第 n 项留下，f^(n)(c)=n!a_n。$\square$')
    P('holomorphic-identity','analysis/analytic-continuation analysis/holomorphic-functions','恒等定理与解析延拓唯一性',r'连通开域 Ω 内的两个全纯函数，若在 Ω 中有聚点的点集上相等，则在整个 Ω 相等。','holomorphic-taylor complex-basic-rules','非零幂级数在零点附近有最低阶非零项，因此零点不能聚集；再用连通性传播局部恒等。',
      r'取差 h。若在点 a 的局部展开中有最低非零系数 a_m，则 h(z)=(z-a)^m k(z)，k 连续且 k(a)=a_m≠0，故足够近时 k 不为零。于是 a 附近除 a 本身外没有零点。',
      r'题设给一个域内零点聚点，所以该点的展开系数必须全零，从而其一个邻域 h 恒零。令 S 为 h 在某邻域恒零的点集，它非空且开。',
      r'若 a 是 S 在 Ω 中的闭包点且不属于 S，可取 S 中不同点趋于 a（度量邻域每次取更近点），这些都是 h 的零点。第一步迫使 a 的局部展开全零，进而 a∈S，矛盾。故 S 在 Ω 中也闭。',
      r'连通空间的非空同时开闭子集只能是全体，否则它与非空补集构成分离。因此 S=Ω，两函数全域相等。连通重叠区域上两个候选解析延拓因原有开子域上相同而必须一致。$\square$')
    P('liouville','analysis/holomorphic-functions','Liouville 定理',r'整个复平面上有界的全纯函数必为常数。','holomorphic-taylor contour-estimate mean-value','可任意放大系数积分的围道，使一阶导数的界趋于零。',
      r'设全平面 |f|≤M。以任意 a 为中心取到边距离 r 的正方形，周长为 8r。局部幂级数的导数系数与长度估计给 |f′(a)|≤8rM/(2πr²)=4M/(πr)。',
      r'r 可任意大，故 f′(a)=0。对任意两点 a,b，实参数 t↦f(a+t(b-a)) 的导数为 f′(a+t(b-a))(b-a)=0；其实部与虚部在 [0,1] 连续可导，中值定理说明都为常数，所以 f(a)=f(b)。$\square$')
    P('fundamental-algebra','algebra/polynomial-rings numbertheory/algebraic-numbers','代数基本定理',r'每个正次数复系数多项式在复数中有根，因此能完全分解为一次因子。','liouville complex-basic-rules finite-dimensional-compactness root-bound axiom-natural','若无根，倒数成为有界整函数，Liouville 定理迫使它为常数。',
      r'设 p(z)=a_nz^n+…+a₀，n≥1、a_n≠0。对 |z|≥1，低次项之和绝对值≤C|z|^(n-1)，C=Σ_(k<n)|a_k|。当 |z|≥max(1,2C/|a_n|)，有 |p(z)|≥|a_n||z|^n/2，因此 |p(z)|→∞。',
      r'若 p 无根，1/p 按商法则是整函数。大圆盘外因上一步而有界，盘内则因 |p| 连续且无零，在紧盘上取正最小值，倒数同样有界。因此 1/p 在全平面有界。',
      r'Liouville 定理使 1/p 常数，进而 p 常数，与 n≥1 矛盾。故存在一个根。根因式定理约去一个一次因子后，剩余次数下降；对次数归纳得到全部线性分解。$\square$')
    P('complex-eigenvalue','algebra/eigenvalues algebra/irreducible-representations','复有限维算子有特征值',r'非零有限维复向量空间上的每个线性算子都有一个复特征值；因此复不可约有限维表示的自 intertwiner 必为标量。','fundamental-algebra basis-extension schur-lemma','算子幂在有限维算子空间中线性相关，分解其湮灭多项式后至少一个因子不可逆。',
      r'若空间维数 n>0，算子由 n² 个矩阵坐标决定，所以 I,A,…,A^(n²) 线性相关，存在非零多项式 p 使 p(A)=0。它不能是非零常数，否则为非零倍单位算子；因此次数正。',
      r'代数基本定理使 p(z)=c∏_j(z-λ_j)，于是 0=p(A)=c∏_j(A-λ_jI)。若每个因子都可逆，乘积也可逆，不可能等于零算子；故至少一个因子不可逆。',
      r'有限维秩—零化度使不可逆的方算子有非零核，得到 Av=λ_jv、v≠0。对不可约表示的自 intertwiner T，现在已知它有某特征值，应用已证 Schur 引理便得 T=λI，不再把特征值存在当作未证前提。$\square$')
