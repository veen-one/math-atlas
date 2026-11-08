"""Variational PDE existence, finite element error and classical evolution."""
def register(P, BASES):
    BASES['def-sobolev']=dict(title='弱导数、Sobolev 空间与变分形式的定义',statement='开集 Ω 上，v_i 是 u 的第 i 个弱导数指对每个光滑紧支撑测试函数 φ 有 ∫u∂_iφ=-∫v_iφ。H¹(Ω) 为函数及全部一阶弱导数均平方可积的类，范数平方为这些 L² 范数平方之和。H¹_0 定义为光滑紧支撑函数在该范数中的闭包。零边值在本章按此定义，而不预设未证明的边界迹定理。')
    P('weak-derivative-unique','analysis/weak-solutions geometry/tangent-spaces','弱导数的唯一性',r'局部可积函数的弱导数如果存在，则按几乎处处相等意义唯一；本证明给平方可积弱导数的情形。','schwartz-density def-sobolev','两个候选导数的差对全部光滑紧支撑测试函数积分为零，再用局部平滑逼近识别差为零。',
      r'若 v,w 都为同一弱导数，则 h=v-w 满足 ∫hφ=0 对全部光滑紧支撑 φ。固定闭盒 J，外包一个仍在 Ω 的开盒，只需对盒内任意更小区间或矩形的指标作光滑逼近。',
      r'可把已展开的 Gaussian 平滑指标构造乘一个光滑紧支撑截断，令其在 J 为一；这样的截断可由 exp(-1/t) 在 t>0、零延拓在 t≤0 的函数组成并归一化，所有阶导数在零点趋零由指数支配任意幂验证。各坐标相乘给高维截断。平滑指标在 L² 上趋原指标，Cauchy—Schwarz 使 ∫h1_E=0。',
      r'矩形生成盒内 Borel σ 代数，π—λ 论证与完备化使 h 在所有可测集积分零，取正负集得到 h=0 几乎处处于该盒。可用可数个内部有理盒覆盖 Ω，故全域唯一。$\square$')
    P('sobolev-complete','analysis/weak-solutions analysis/hilbert-spaces','H¹ 与 H¹_0 的完备性',r'H¹(Ω) 在自然内积下是 Hilbert 空间，H¹_0(Ω) 是其闭 Hilbert 子空间。','general-l2-complete weak-derivative-unique def-sobolev','将柯西列的函数与各弱导数分别取 L² 极限，再把测试函数等式传给极限。',
      r'若 u_n 在 H¹ 中柯西，L² 完备性给 u_n→u、∂_i u_n→v_i 于各自 L²。对每个紧支撑光滑 φ，φ 与 ∂_iφ 平方可积，Cauchy—Schwarz 使测试等式两边都可取极限。',
      r'因此 ∫u∂_iφ=-∫v_iφ，v_i 正是 u 的弱导数，故 u∈H¹，且各分量收敛给 H¹ 范数收敛。弱导数唯一性保证内积定义与代表选择无关，正定性由函数 L² 范数项保证。',
      r'H¹_0 按定义是子空间的闭包，线性性由加法与数乘的范数连续性保留；闭子空间的柯西列极限仍在其中，所以也完备。$\square$')
    P('poincare-box','analysis/weak-solutions applied/finite-elements','有界域 H¹_0 的 Poincaré 不等式',r'若 Ω⊆[-R,R]^d 有界且 R>0，则对 u∈H¹_0(Ω)，‖u‖₂≤2R‖∇u‖₂。','sobolev-complete tonelli-fubini general-l2-complete ftc-second','先对光滑紧支撑函数沿一个坐标积分，再用闭包把估计延拓。',
      r'先令 u 光滑紧支撑于 Ω，在外部零延拓。固定其余坐标 x′，基本定理给 u(x₁,x′)=∫_-R^(x₁)∂₁u(s,x′)ds。Cauchy—Schwarz 给 |u(x₁,x′)|²≤2R∫_-R^R|∂₁u(s,x′)|²ds。',
      r'再对 x₁ 积分产生另一个 2R 因子，对 x′ 用非负 Fubini，得 ‖u‖₂²≤4R²‖∂₁u‖₂²≤4R²‖∇u‖₂²。',
      r'一般 H¹_0 元素由光滑紧支撑列在 H¹ 中逼近，函数与梯度的 L² 范数均收敛，不等式随极限保留。于是梯度范数与 H¹ 范数在 H¹_0 等价，因此使用梯度内积时仍完备。$\square$')
    P('lax-milgram','analysis/weak-solutions analysis/linear-operators applied/finite-elements','Lax–Milgram 定理（实 Hilbert 空间）',r'实 Hilbert 空间 V 上双线性 a 满足 |a(u,v)|≤M‖u‖‖v‖ 与 a(v,v)≥α‖v‖²、α>0。则任意有界线性 ℓ 唯一对应 u∈V，使 a(u,v)=ℓ(v) 对全部 v，且 ‖u‖≤‖ℓ‖/α。','riesz-representation projection-closed-subspace general-l2-complete','将双线性形式表示为一个有界算子，强制性使其像闭，而正交补只可能为零。',
      r'对固定 u，v↦a(u,v) 为有界泛函，Riesz 定理给唯一 Tu，使 a(u,v)=〈Tu,v〉。唯一性使 T 线性，且 ‖Tu‖≤M‖u‖。强制性与 Cauchy—Schwarz 给 α‖u‖²≤〈Tu,u〉≤‖Tu‖‖u‖，故 ‖Tu‖≥α‖u‖。',
      r'因此 T 单射。若 Tu_n 收敛，其柯西性与下界使 u_n 柯西，V 完备给 u_n→u，T 连续使像极限为 Tu，所以像闭。',
      r'若 w 与像正交，则对全部 u 有 a(u,w)=0，特别取 u=w 得 α‖w‖²≤0，所以 w=0。闭子空间投影定理说明一个闭子空间正交补为零时必为全空间，故 T 满射。',
      r'用 Riesz 将 ℓ 表示为 y，唯一解 Tu=y 即满足所有变分等式。又 α‖u‖²≤a(u,u)=ℓ(u)≤‖ℓ‖‖u‖，约去非零范数（零解直接成立）给估计。这里不要求 a 对称。$\square$')
    P('poisson-weak-existence','analysis/pdes analysis/weak-solutions applied/pde-models','有界域 Poisson 零边值弱解',r'若 Ω 有界开，f∈L²(Ω)，则唯一存在 u∈H¹_0(Ω)，使 ∫∇u·∇v=∫fv 对全部 v∈H¹_0。','poincare-box lax-milgram','在梯度内积空间中使用 Lax–Milgram，并用 Poincaré 控制右端。',
      r'在 V=H¹_0 上用 ‖∇v‖₂ 为范数，前一定理保证其为完备内积空间。形式 a(u,v)=∫∇u·∇v 由 Cauchy—Schwarz 有界，且 a(v,v)=‖v‖²，所以 M=α=1。',
      r'右端 ℓ(v)=∫fv 满足 |ℓ(v)|≤‖f‖₂‖v‖₂≤2R‖f‖₂‖∇v‖₂，因此有界。Lax–Milgram 给唯一 u，并给 ‖∇u‖₂≤2R‖f‖₂。',
      r'对光滑紧支撑 v，弱导数定义把该等式翻译成分布意义的 -Δu=f；H¹_0 编码零边值。没有在证明中额外假定弱解自动有经典二阶导数。$\square$')
    P('cea-lemma','applied/finite-elements applied/mesh-discretization','Céa 引理与 Galerkin 最佳逼近界',r'在 Lax–Milgram 的假设下，任意有限维子空间 V_h 的 Galerkin 解 u_h 满足 ‖u-u_h‖≤(M/α)inf_(v_h∈V_h)‖u-v_h‖。','lax-milgram finite-norm-equivalence','原解与离散解相减得到 Galerkin 正交性，再将误差中的离散部分消去。',
      r'有限维子空间在 Hilbert 范数下完备，由相同有界与强制条件，Lax–Milgram 在 V_h 上给唯一 u_h。对全部 w_h∈V_h，原方程与离散方程相减得 a(u-u_h,w_h)=0。',
      r'令 e=u-u_h，任取 v_h。强制性给 α‖e‖²≤a(e,e)=a(e,u-v_h)+a(e,v_h-u_h)=a(e,u-v_h)，后项因正交性为零。',
      r'有界性给右侧≤M‖e‖‖u-v_h‖。若 e≠0 约去，否则结论直接成立，再对 v_h 取下确界即得估计。该证明说明离散空间逼近质量如何传给数值误差，不预设网格加密必然产生稠密空间。$\square$')
    P('heat-kernel-solution','analysis/pdes analysis/convolution applied/reaction-diffusion','实线热方程的 Gaussian 核解与唯一性',r'给有界连续 f，u(t,x)=∫f(x-y)(4πt)⁻¹/²exp(-y²/(4t))dy 在 t>0 为经典热方程解 u_t=u_xx，t↓0 逐点趋 f。在有限时间窗上有界的经典解类中它唯一。','gaussian-integral tonelli-fubini dominated-convergence affine-lebesgue-change','直接微分 Gaussian 核，初值由近似恒等；唯一性在大盒子中使用带二次屏障的最大值论证。',
      r'核 K_t 非负且积分一，故 |u|≤‖f‖∞。改写 u=∫f(y)K_t(x-y)dy。任意 t≥δ>0 的紧时间区间内，核的一阶时间及二阶空间导数都由可积的多项式乘 Gaussian 控制，所以可在积分号下求导。直接计算得 ∂_tK_t=∂_xxK_t，故 u 满足方程。',
      r'换元得 u(t,x)=∫f(x-√(2t)z)g(z)dz。f 连续有界，DCT 给初值 f(x)；同一论证在 x 的紧区间一致成立，因为 f 在相应紧区间一致连续，Gaussian 尾部可统一控制。',
      r'设两有界解之差 w 初值零，固定有限时间 T，令 v=w-ε(x²+2t)-ηt，ε,η>0。取 R 足够大，使空间边界 ±R 上 v<0；初始边也非正。若 v 在盒内取得正最大值，时间向前或最终时刻的左导数非负，空间二阶导数非正，故 v_t-v_xx≥0。',
      r'但方程给 v_t-v_xx=-η<0，矛盾。故固定 (t,x) 有 w(t,x)≤ε(x²+2t)+ηt。先 η↓0 再 ε↓0 得 w≤0，对 -w 同样得 w≥0，故唯一。这里假设解连续延到初始边且整个有限时间窗有统一界。$\square$')
    P('dalembert','analysis/pdes analysis/initial-boundary applied/pde-models','一维波动方程的 d’Alembert 公式',r'对 c>0、f∈C²(R)、g∈C¹(R)，初值 u(0,x)=f(x)、u_t(0,x)=g(x) 的全实线波动方程 u_tt=c²u_xx 有唯一 C² 解，给出为 [f(x-ct)+f(x+ct)]/2+(2c)⁻¹∫_(x-ct)^(x+ct)g(s)ds。','variable-integral ftc-first ftc-second chain-rule','特征坐标将方程化成一个混合二阶导数为零的方程。',
      r'按链式与变限积分公式直接求导，所列函数为 C²，满足 u_tt=c²u_xx；t=0 时两平移项合为 f，积分为零，一阶时间导数中两 f′ 抵消，变限项恰为 g。',
      r'证明唯一性：令 ξ=x+ct、η=x-ct。逆坐标是 x=(ξ+η)/2、t=(ξ-η)/(2c)。链式法则把方程化为 U_ξη=0。对任意矩形两次基本定理给 U(ξ,η)-U(ξ,0)-U(0,η)+U(0,0)=0，所以 U=F(ξ)+G(η)。',
      r'两解之差初始位移与速度均零，故 F(x)+G(x)=0 且 cF′(x)-cG′(x)=0。第一式求导并合并第二式，得 F′=G′=0；两常数互为相反，所以差为零。全部坐标在 R² 定义，得到全实线唯一性。$\square$')
