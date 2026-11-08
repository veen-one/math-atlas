"""Compactness, convexity, numerical error, and optimization proofs."""
def register(P, BASES):
    P('closed-subset-compact','geometry/compactness geometry/open-sets-continuity','紧致空间的闭子集紧致',r'若 K 紧致、F 在 K 中闭，则 F 紧致。','axiom-topology',r'把 F 的覆盖补上开集 K\F，得到 K 的覆盖。',
      r'取 F 的相对开覆盖 U_i=F∩V_i，其中 V_i 在 K 开。V_i 连同 K\F 覆盖 K，由紧致性有有限子覆盖。',
      r'去掉 K\F 后，所选有限 V_i 仍覆盖 F，因为该补集不含 F 中任何点。对应的有限 U_i 就覆盖 F，故 F 紧致。$\square$')
    P('compact-hausdorff-closed','geometry/compactness geometry/homeomorphism','Hausdorff 空间中紧集闭',r'Hausdorff 空间 Y 中的紧子空间 K 是闭集；因而紧致空间到 Hausdorff 空间的连续双射是同胚。','continuous-compact closed-subset-compact','把一个外点与紧集的每点分离，再用有限覆盖取外点共同邻域。',
      r'固定 y∉K。对每个 x∈K，Hausdorff 性给不交开邻域 U_x 含 x、V_x 含 y。U_x 覆盖 K，选有限 U_(x_i)；交集 V=∩_i V_(x_i) 是 y 的开邻域，且不交 K。每个外点都有这样的邻域，故补集开，K 闭。空 K 直接成立。',
      r'若 f:X→Y 连续双射，X 紧、Y Hausdorff，对 X 中任意闭集 F，它由闭子集紧致结论为紧集，其连续像 f(F) 紧，进而在 Y 闭。所以 f 是闭映射，逆映射对闭集的原像 f(F) 都闭，故逆连续，f 为同胚。$\square$')
    P('compact-metric-subsequence','geometry/compactness analysis/normed-spaces','紧致度量空间的序列紧性',r'紧致度量空间中每个序列都有收敛子列。','axiom-metric axiom-topology','若所有点都只有命中有限序列项的邻域，有限子覆盖便会把无穷下标压成有限集合。',
      r'若没有点的每个邻域都命中无穷多个下标，则每点可选一个仅含有限多个序列下标的开邻域。这些邻域覆盖空间，有限子覆盖所含下标并仍有限，却必须覆盖序列的全部下标，矛盾。',
      r'故存在 x，使任意半径邻域都含无穷多个下标。递归选 n_k>n_(k-1)，使 d(x_(n_k),x)<1/k。由 1/k→0 得到子列收敛到 x。$\square$')
    P('sequential-metric-compact','geometry/compactness analysis/normed-spaces','度量空间的序列紧性蕴含紧致',r'若度量空间 X 的每个序列都有收敛子列，则每个开覆盖有有限子覆盖。','axiom-metric archimedean','先得到有限精度网格，再证明任意开覆盖都有统一的足够小邻域尺度。',
      r'对任意 ε>0，若不能用有限个半径 ε 的球覆盖 X，可依次选新点在已选球之外，得到两两距离至少 ε 的序列。任何收敛子列都必须柯西，这与分离距离矛盾。因此存在有限 ε 网。',
      r'固定一个开覆盖。若不存在 δ>0，使每个点的半径 δ 球都包含于某覆盖成员，则对每个 n 选 x_n，使 B(x_n,1/n) 不含于任何成员。取收敛子列 x_(n_k)→x。某开覆盖成员 U 含 x，可取 r>0 使 B(x,r)⊆U。',
      r'充分大 k 时 d(x_(n_k),x)<r/2 且 1/n_k<r/2，故 B(x_(n_k),1/n_k)⊆U，矛盾。统一 δ 因而存在。取有限 δ/2 网，对每个网点的 δ 球选一个包含它的覆盖成员，这些有限成员覆盖 X。空空间由空子覆盖处理。$\square$')
    P('heine-borel-rn','geometry/compactness geometry/euclidean-space','有限维 Heine–Borel 定理',r'R^n 中集合紧致当且仅当闭且有界。','finite-dimensional-compactness sequential-metric-compact compact-hausdorff-closed','闭有界给收敛子列；反向用有限球覆盖控制有界性，并用 Hausdorff 性保证闭。',
      r'闭有界集合中的任意序列，按有限维子列定理有极限仍在该集合中的子列，因此序列紧；度量空间中序列紧蕴含紧致，所以它紧。',
      r'若集合 K 紧，欧氏空间 Hausdorff（不同点用小于其距离一半的球分离），故紧子集闭。开球 B(0,m)、m 为正整数覆盖 R^n，也覆盖 K；有限子覆盖中最大半径即给 K 的界。$\square$')
    P('finite-norm-equivalence','analysis/normed-spaces algebra/vector-spaces','有限维空间范数等价与完备性',r'有限维实或复向量空间上的任意两范数等价，且任意范数均完备。','basis-extension cauchy-schwarz finite-dimensional-compactness cauchy-completeness complex-cauchy-schwarz','先给坐标欧氏范数的上界，再在单位球面取任意范数的正最小值。',
      r'固定一组基 e_i，坐标欧氏范数记为 |x|₂。对任意范数 N，三角不等式给 N(x)≤Σ_i|x_i|N(e_i)≤C|x|₂，其中 C=(Σ_iN(e_i)²)^(1/2)，最后用柯西—施瓦茨。零维空间直接成立。',
      r'反三角不等式给 |N(x)-N(y)|≤N(x-y)≤C|x-y|₂，所以 N 在坐标中连续。单位欧氏球面闭有界，N 在其上取最小值 c；因每点非零，c>0。缩放得 c|x|₂≤N(x)≤C|x|₂。比较两范数的此类界便得到等价性。',
      r'N 柯西列由下界成为坐标欧氏柯西列，各实坐标按实数完备性收敛，复数分实虚部，得到空间内极限。上界使其在 N 中也收敛，故完备。$\square$')
    P('convex-projection','geometry/convex-sets applied/convex-optimization','Hilbert 空间闭凸集的最佳逼近',r'实 Hilbert 空间中非空闭凸集 C，对每个 x 有唯一最近点 p；它满足 〈x-p,v-p〉≤0 对全部 v∈C。投影映射非扩张：‖P_Cx-P_Cy‖≤‖x-y‖。','projection-closed-subspace cauchy-schwarz','最小化序列仍由中点凸性成为柯西；用单侧线段扰动取代子空间的双向扰动。',
      r'设 d=inf_(v∈C)‖x-v‖，取距离平方趋于 d² 的序列。平行四边形展开与 C 的中点凸性给出与子空间投影证明相同的柯西估计。完备性与闭性得到最小点 p。若 p、q 同时最小，同一恒等式给 ‖p-q‖²≤0，所以唯一。',
      r'对 v∈C、0<t≤1，p+t(v-p)∈C。展开其距离平方不小于 ‖x-p‖²，除以 t 后令 t↓0，得到 〈x-p,v-p〉≤0。反向若该不等式对所有 v 成立，展开 ‖x-v‖² 即得不小于 ‖x-p‖²，所以也刻画最小点。',
      r'对 p=P_Cx、q=P_Cy，分别代入对方点，有 〈x-p,q-p〉≤0、〈y-q,p-q〉≤0。相加整理得 ‖p-q‖²≤〈x-y,p-q〉≤‖x-y‖‖p-q‖。距离非零时约去，零时直接成立，得非扩张性。$\square$')
    P('fourier-motzkin','applied/linear-programming discrete/polyhedral-methods','多面体的坐标投影仍是多面体',r'实有限维空间中有限个非严格线性不等式定义的集合，消去任意若干坐标后，仍可用有限个非严格线性不等式描述。','axiom-real axiom-finite','把待消去变量的上界与下界两两比较；没有一侧界时总可选满足所有剩余界的变量。',
      r'消去一个变量 t。按该变量系数为正、负、零分类，可分别改写为 t≤U_i(x)、t≥L_j(x)、以及不含 t 的约束，其中 U_i、L_j 是仿射函数。',
      r'存在 t 的必要条件是所有 L_j(x)≤U_i(x)，并满足零系数约束。条件也充分：上下界皆有时，有限个下界的最大值不超过有限个上界的最小值，可选其间 t；只有一侧时取满足该有限侧界的值，两侧都无则任取 t。',
      r'上述两两比较都是线性非严格不等式，且数量有限，因此恰好描述投影。对消去变量数有限归纳，就得到一般坐标投影结论。等式可拆成两条不等式处理。$\square$')
    P('lp-attainment-vertex','applied/linear-programming discrete/polyhedral-methods','线性规划有限最优值的取得与顶点最优性',r'非空多面体 P 上线性目标若有有限下界，则最小值能取到；若 P 不含任何整条直线，则存在一个最优顶点。','fourier-motzkin rank-nullity','先将目标值集合投影成一维闭多面体，再从最优点不断增加独立活跃约束。',
      r'引入 z=cᵀx，方程拆成两不等式，与 P 的约束合在一起后投影到 z 轴。Fourier–Motzkin 结论使目标值集合是非空一维多面体，即有限个闭半直线或全集之交；有有限下界时，它包含下确界。所以某个 x* 取得最优。',
      r'把 P 写成 Ax≤b。若最优点活跃约束行未张成全对偶空间，取非零 v 被这些行全部消灭。对不活跃约束，松弛量均正且只有有限个，故充分小的正负 t 都使 x*+tv 可行。最优性迫使 cᵀv=0，否则某一方向会降低目标。',
      r'若所有约束行都消灭 v，则整条 x*+Rv 在 P 中，违背无线假设。因此某行 a_iᵀv≠0；换 v 符号后可使至少一个为正。令 t 为所有正 a_iᵀv 对应的松弛量除以 a_iᵀv 的最小值，t>0 且有限。移动到 x*+tv 后仍最优，旧活跃行保持活跃，并至少新增一行不在旧行张成中（它不消灭 v）。',
      r'有限维下至多重复维数次，得到活跃行满秩的最优点。若此点是两个可行点的中点，每条活跃线性约束在两个点上都必须取等号；满秩使两个点都等于该点，故它是顶点。这还覆盖零维情形。若 P 含直线，最优点仍存在，但可能没有顶点。$\square$')
    P('taylor-lagrange','analysis/derivatives applied/error-analysis','Taylor 定理的 Lagrange 余项',r'若 f 在含 a,x 的闭区间上有连续至 m+1 阶导数，则 f(x)=Σ_(k=0)^m f^(k)(a)(x-a)^k/k!+f^(m+1)(ξ)(x-a)^(m+1)/(m+1)!，某 ξ 在两端之间。','rolle axiom-natural','减去 Taylor 多项式及一个待定高次项，制造多重零点后反复应用 Rolle。',
      r'x=a 时结论直接成立。设 x≠a，令 P_m 为所列 Taylor 多项式，选常数 C 使 F(t)=f(t)-P_m(t)-C(t-a)^(m+1) 满足 F(x)=0。同时由多项式逐项求导，F(a)=F′(a)=…=F^(m)(a)=0。',
      r'F 在 a 和 x 之间有两个零点，Rolle 给 F′ 的一个内部零点；加上 F′(a)=0，可再次应用 Rolle。重复 m+1 次，得到某 ξ 使 F^(m+1)(ξ)=0。若 x<a，区间反向排列不改变此零点论证。',
      r'因 P_m 的 m+1 阶导数为零，最后等式为 f^(m+1)(ξ)-C(m+1)!=0。把 C 的值代回 F(x)=0，得到余项。幂函数微分法则可由差商中二项式展开直接验证，再对阶数有限归纳，故此处不依赖待证 Taylor 定理。$\square$')
    P('trapezoid-error','applied/numerical-integration applied/error-analysis','复合梯形求积的误差界',r'若 f∈C²[a,b]、|f″|≤M，对任意分割最大步长 h 的复合梯形值 T，有 |∫f-T|≤M(b-a)h²/12。','rolle supremum-integral riemann-additivity','先用三点零点证明线性插值误差，再把各小区间误差积分并相加。',
      r'在小区间 [u,v]，令 l 为端点线性插值。对内部 t，取 C 使 F(s)=f(s)-l(s)-C(s-u)(s-v) 在 s=t 为零；它还在 u,v 为零。两次 Rolle 给 F″(ξ)=0，所以 C=f″(ξ)/2，得到 |f(t)-l(t)|≤M(t-u)(v-t)/2。端点误差零。',
      r'积分绝对值估计及单调性给 |∫_u^v(f-l)|≤(M/2)∫_u^v(t-u)(v-t)dt=M(v-u)³/12；该三次多项式积分可用已证基本定理逐项计算。∫l 恰为该段梯形值。',
      r'各段相加，误差绝对值不超过 MΣ_i h_i³/12≤Mh²Σ_i h_i/12=M(b-a)h²/12。误差阶依赖二阶导数界，不能无条件用于不光滑或奇异函数。$\square$')
    P('neumann-series','applied/numerical-linear-algebra analysis/linear-operators','有限维 Neumann 级数与逆矩阵界',r'满足 ‖I‖=1 的次乘性矩阵范数下若 ‖B‖<1，则 I-B 可逆，逆为 Σ_(k≥0)B^k，并有 ‖(I-B)⁻¹‖≤1/(1-‖B‖)。','finite-norm-equivalence archimedean','幂范数由几何级数控制，部分和与 I-B 的乘积恰好望远镜消项。',
      r'对部分和 S_n，尾部范数≤Σ_(k=m+1)^n‖B‖^k，几何级数尾和趋零，所以 S_n 柯西。有限维矩阵空间在任何范数下完备，故有极限 S，且范数界由各部分和的几何和给出。',
      r'直接相乘得 (I-B)S_n=S_n(I-B)=I-B^(n+1)。因 ‖B^(n+1)‖≤‖B‖^(n+1)→0，乘法连续（次乘性控制误差），取极限得到 (I-B)S=S(I-B)=I。因此 S 为双侧逆，界也随极限保留。$\square$')
    P('linear-system-perturbation','applied/condition-numbers applied/numerical-stability','线性方程组的相对扰动界',r'设 Ax=b、A 可逆、b≠0，κ=‖A‖‖A⁻¹‖。若 a=‖ΔA‖/‖A‖ 满足 κa<1，则扰动系统唯一可解，且 ‖Δx‖/‖x‖≤κ[a+‖Δb‖/‖b‖]/(1-κa)。','neumann-series','先通过小扰动逆公式保证可解，再用误差方程统一控制矩阵和右端的影响。',
      r'A+ΔA=A(I+A⁻¹ΔA)，且 η=‖A⁻¹ΔA‖≤κa<1。Neumann 级数给逆存在，并有 ‖(A+ΔA)⁻¹‖≤‖A⁻¹‖/(1-η)。',
      r'从 (A+ΔA)(x+Δx)=b+Δb 与 Ax=b 相减，得 Δx=(A+ΔA)⁻¹(Δb-ΔAx)。因此 ‖Δx‖/‖x‖≤‖A⁻¹‖[‖Δb‖/‖x‖+‖ΔA‖]/(1-η)。',
      r'因 ‖b‖≤‖A‖‖x‖，有 ‖Δb‖/‖x‖≤‖A‖‖Δb‖/‖b‖。再用 η≤κa 使分母下界为 1-κa，即得所述界。这里范数须为相容的向量与矩阵算子范数。$\square$')
    P('discrete-stability-convergence','applied/simulation-validation applied/finite-differences','稳定与一致性推出线性递推收敛',r'设数值递推 u_(n+1)=Q_hu_n，精确采样满足 v_(n+1)=Q_hv_n+Δt·τ_n。若 nΔt≤T 时 ‖Q_h^n‖≤C 统一成立，则 ‖u_n-v_n‖≤C‖u₀-v₀‖+CT max_(j<n)‖τ_j‖。','axiom-vector axiom-metric','把每步局部残差传播到最终时刻，稳定性给每个传播因子同一个界。',
      r'令 e_n=u_n-v_n，则 e_(n+1)=Q_he_n-Δt·τ_n。有限归纳展开得 e_n=Q_h^ne₀-Δt Σ_(j=0)^(n-1)Q_h^(n-1-j)τ_j。',
      r'取范数并用每个传播幂的稳定界，得 ‖e_n‖≤C‖e₀‖+C nΔt max_j‖τ_j‖，再用 nΔt≤T 即得结论。因此初始误差和一致性残差都趋零时，固定有限时间窗内误差趋零。本证明是收敛的充分方向，不宣称已经证明完整 Lax 等价定理的反向。$\square$')
    P('heat-explicit-stability','applied/finite-differences applied/pde-models','显式热方程差分的最大范数稳定性',r'一维热方程显式格式 u_j^(n+1)=r u_(j-1)^n+(1-2r)u_j^n+r u_(j+1)^n，在 0≤r≤1/2 且周期或固定 Dirichlet 边界下，对同边界的两数值解之差保持最大范数不增。','axiom-real','每个新误差是三个旧误差的凸组合。',
      r'相减两份递推，误差 e 满足同一齐次格式；同 Dirichlet 边界使边界误差为零，周期边界使相邻下标循环。给定范围内三个系数均非负且和为一。',
      r'所以 |e_j^(n+1)|≤r|e_(j-1)^n|+(1-2r)|e_j^n|+r|e_(j+1)^n|≤max_k|e_k^n|。对 j 取最大再归纳，得到所有时刻的稳定界，常数 C=1。步长条件等价于 r=αΔt/(Δx)²≤1/2；此处不证明不满足条件时每个具体数据都必然发散。$\square$')
