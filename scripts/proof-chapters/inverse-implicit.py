"""Finite-dimensional inverse and implicit function theorems."""
def register(P, BASES):
    P('vector-segment-derivative-bound','analysis/multivariable-calculus','C¹ 映射的线段导数估计',r'若 F 在 R^n 的凸开集内 C¹，且线段 [x,y] 上算子范数 ‖DF‖≤L，则 ‖F(y)−F(x)‖≤L‖y−x‖。若 ‖DF−A‖≤ε，同样有 ‖F(y)−F(x)−A(y−x)‖≤ε‖y−x‖。','ftc-second complex-cauchy-schwarz','沿连接线段逐坐标使用基本定理，再用单位方向投影估计向量积分。',
      r'令 γ(t)=x+t(y−x)。可微的线性逼近与实参数差商复合，给 dF(γ(t))/dt=DF(γ(t))(y−x)。逐实坐标应用微积分基本定理，得到 F(y)−F(x)=∫₀¹DF(γ(t))(y−x)dt。',
      r'对欧氏向量积分 I，若 I≠0，取单位向量 u=I/‖I‖，则 ‖I‖=〈I,u〉=∫〈v(t),u〉dt≤∫‖v(t)‖dt；I=0 时也成立。因此所列导数界给第一估计。把 F 替成 F(z)−Az 得第二估计。$\square$')
    P('inverse-function-rn','analysis/multivariable-calculus geometry/smooth-manifolds','有限维 C¹ 逆函数定理',r'开集 Ω⊆R^n 上 F 为 C¹，a∈Ω 且 DF(a) 可逆。则存在 a 的开邻域 U 与 F(a) 的开邻域 V，使 F:U→V 为 C¹ 双射，且 D(F⁻¹)(y)=[DF(F⁻¹(y))]⁻¹。','vector-segment-derivative-bound banach-contraction banach-neumann-series finite-norm-equivalence','先把导数归一成单位矩阵，再把 F(x)=y 写成闭球上的压缩不动点问题。',
      r'平移自变量与函数值，并左乘 A⁻¹、A=DF(a)，可归约到 a=0、F(0)=0、DF(0)=I。原定理的开邻域和导数公式可在最后经这些可逆仿射映射还原。由 DF 连续，取 r>0 使闭球 B̄(0,r)⊂Ω 且其上 ‖DF(x)−I‖≤q<1。',
      r'对参数 y，定义 T_y(x)=x−F(x)+y。线段导数估计给 ‖T_y(x)−T_y(z)‖≤q‖x−z‖。又 T_y(0)=y，故当 ‖y‖<(1−q)r/2 时，‖T_y(x)‖≤qr+‖y‖<r 对闭球内 x 成立。因此 T_y 把该完备闭球映入自身且压缩，Banach 定理给唯一固定点 g(y)，即 F(g(y))=y。',
      r'对闭球内任意 x,z，估计 F−I 得 ‖F(x)−F(z)‖≥(1−q)‖x−z‖，故 F 在球内单射。令 V=B(0,(1−q)r/2)、U=F⁻¹(V)∩B(0,r)，U 因连续性而开。固定点满足 ‖g(y)‖≤‖y‖/(1−q)<r/2，所以在 U 内，且 F:U→V 双射。上述下界还给 ‖g(y)−g(v)‖≤‖y−v‖/(1−q)，逆连续且 Lipschitz。',
      r'每个 x∈U 有 ‖DF(x)−I‖≤q<1，Neumann 级数使 DF(x) 可逆，逆范数≤1/(1−q)。固定 y、x=g(y)，令 k=g(y+h)−x，逆的 Lipschitz 界给 ‖k‖=O(‖h‖)。F 的可微性给 h=DF(x)k+o(‖k‖)，左乘固定 DF(x)⁻¹，便得 k=DF(x)⁻¹h+o(‖h‖)，故 g 可微且导数如述。',
      r'逆矩阵连续性可直接由 B⁻¹−C⁻¹=B⁻¹(C−B)C⁻¹ 及统一逆范数界得到。结合 DF、g 连续，Dg(y)=DF(g(y))⁻¹ 连续，所以 g 为 C¹。还原平移及 A 的变换即得一般结论。$\square$')
    P('implicit-function-rn','analysis/multivariable-calculus geometry/smooth-manifolds','有限维 C¹ 隐函数定理',r'设 F:Ω⊆R^m×R^n→R^n 为 C¹，F(a,b)=0，D_yF(a,b) 可逆。则在 (a,b) 的某乘积邻域，F(x,y)=0 当且仅当 y=φ(x)，其中 φ 为唯一局部 C¹ 函数，且 Dφ(x)=−[D_yF(x,φ(x))]⁻¹D_xF(x,φ(x))。','inverse-function-rn','把参数坐标保留，构造 G(x,y)=(x,F(x,y))，将零水平集变成逆映射的切片。',
      r'令 G(x,y)=(x,F(x,y))，其导数作用为 (h,k)↦(h,D_xFh+D_yFk)。在 (a,b)，给定目标 (u,v) 可唯一取 h=u、k=(D_yF)⁻¹(v−D_xFu)，故 DG 可逆。逆函数定理使 G 在某开邻域 U 上有 C¹ 逆，像为 (a,0) 的开邻域 V。',
      r'由于 G 的第一坐标就是 x，逆必形如 G⁻¹(u,v)=(u,ψ(u,v))。取 a 的足够小邻域 A，使 (x,0)∈V，并令 φ(x)=ψ(x,0)，得到 C¹ 函数，φ(a)=b 且 F(x,φ(x))=0。',
      r'取含 (a,b) 的小乘积邻域 A₀×B₀⊂U，再缩小 A₀，使 φ(A₀)⊂B₀ 且 (x,0)∈V。若 (x,y) 在该乘积邻域且 F(x,y)=0，则 G(x,y)=(x,0)=G(x,φ(x))，局部单射性迫使 y=φ(x)，反向已知，故存在与唯一性均成立。',
      r'D_yF 在此邻域内仍可逆，可由逆矩阵的小扰动公式保证，必要时再缩小邻域。对恒等式 F(x,φ(x))=0 求导，链式线性逼近给 D_xF+D_yF·Dφ=0，左乘 (D_yF)⁻¹ 得所列公式。$\square$')
