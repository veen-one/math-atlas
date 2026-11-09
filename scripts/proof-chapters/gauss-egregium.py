"""Coordinate derivation of the Gauss equation and intrinsic surface curvature."""
def register(P, BASES):
    P('surface-gauss-weingarten','geometry/curves-surfaces geometry/curvature-geodesics geometry/riemannian-metric','曲面的 Gauss–Weingarten 分解公式',r'设r:U⊆R²→R³为C³正则参数曲面，r_i=∂_ir，g_ij=r_i·r_j，单位法向n=(r₁×r₂)/|r₁×r₂|，b_ij=r_ij·n。则 r_ij=Σ_kΓ_ij^k r_k+b_ij n，Γ_ij^k=(1/2)Σ_l g^(kl)(∂_ig_jl+∂_jg_il−∂_lg_ij)；并有 ∂_in=−Σ_(k,l)b_il g^(lk)r_k。','rank-nullity','在切向基和单位法向中分解二阶导数，再对内积恒等式求导恢复所有系数。',
      r'正则性保证r₁,r₂线性无关，g正定：对非零v∈R²，Σg_ijv_iv_j=|v₁r₁+v₂r₂|²>0，所以g可逆，记逆矩阵分量g^(kl)。r₁,r₂,n构成R³基，因此r_ij有唯一切向—法向分解，法向系数由点乘n得到b_ij。混合偏导相等给b_ij=b_ji及切向系数Γ_ij^k=Γ_ji^k。',
      r'微分g_jl=r_j·r_l，得∂_ig_jl=r_ij·r_l+r_j·r_il。把(i,j,l)循环置换后，将前两式相加减第三式，混合偏导相等使交叉项抵消，得到 ∂_ig_jl+∂_jg_il−∂_lg_ij=2r_ij·r_l。代入切向分解即2Σ_kΓ_ij^kg_kl，乘逆矩阵解得所列Γ公式。',
      r'由n·n=1得∂_in·n=0，所以∂_in在切平面。又n·r_l=0微分给∂_in·r_l=−n·r_il=−b_il。以g逆矩阵恢复切向分量，得所列Weingarten公式。所有式子均由一阶内积和普通偏导计算导出。$\square$')
    P('surface-gauss-equation','geometry/curves-surfaces geometry/curvature-geodesics','曲面 Gauss 方程及高斯曲率公式',r'沿用正则曲面记号，定义切向算子S(r_i)=−∂_in。其行列式K=detS=(b₁₁b₂₂−b₁₂²)/detg。若 R^l=∂₁Γ₂₂^l−∂₂Γ₁₂^l+Σ_k(Γ₂₂^kΓ₁k^l−Γ₁₂^kΓ₂k^l)，则Σ_l g₁l R^l=b₁₁b₂₂−b₁₂²，因而K=(Σ_lg₁lR^l)/detg。','surface-gauss-weingarten','同一个三阶偏导按两种次序分解，切向系数必须相等，便得到外在第二基本形式和内在联络系数的关系。',
      r'Weingarten公式给S在切向基中的矩阵系数S_i^k=Σ_l b_il g^(lk)。转置约定不影响行列式，故detS=detb/detg。又g(Sr_i,r_j)=b_ij=b_ji，S对切平面内积对称，所以其两个实特征值即主曲率，行列式为主曲率乘积。二维对称算子的实特征值可选正交归一基后由实对称2×2矩阵的判别式(a−d)²+4b²≥0直接看出，不需另引谱定理。',
      r'由C³混合偏导相等，∂₁r₂₂−∂₂r₁₂=0。将r₂₂=ΣΓ₂₂^kr_k+b₂₂n和r₁₂=ΣΓ₁₂^kr_k+b₁₂n分别求导，再用Gauss–Weingarten公式展开。第l个切向系数为 R^l−b₂₂Σ_jb₁j g^(jl)+b₁₂Σ_jb₂j g^(jl)，必须等于零。',
      r'乘g₁l并对l求和，利用Σ_lg₁l g^(jl)=δ₁j，得到Σ_lg₁lR^l=b₂₂b₁₁−b₁₂b₂₁=b₁₁b₂₂−b₁₂²。除以正数detg得到陈述。法向系数还给另一组相容条件，但本定理无需使用。$\square$')
    P('gauss-theorema-egregium','geometry/curves-surfaces geometry/curvature-geodesics geometry/riemannian-metric','Gauss 绝妙定理：高斯曲率由第一基本形式决定',r'C³正则曲面的高斯曲率K完全由其第一基本形式g及至多二阶坐标导数决定。特别地，两曲面间足够光滑的局部等距映射保持高斯曲率；平面与圆柱局部等距且K=0，半径R的球面K=1/R²，不能与平面局部等距。','surface-gauss-equation','把Gauss方程中的联络系数替换成由g计算的Christoffel公式，外在法向量与第二基本形式全部消失。',
      r'前面公式K=(Σ_lg₁lR^l)/detg中，Γ_ij^k由g、g逆矩阵及g的一阶导数表示；R由Γ的一阶导数和二次乘积表示。因此K只含g及其至多二阶导数，不再需要b或曲面在R³中的法向信息。这正是内蕴性的具体计算内容。',
      r'若Φ是两曲面间局部等距映射，在第一曲面选局部参数r，在第二曲面用Φ∘r作为参数；局部微分同胚保证它正则。等距性意味着两套参数的g_ij逐点相同，其导数亦相同。代入同一曲率表达式得两对应点K相同，证明不依赖坐标选择。',
      r'平面可取r(u,v)=(u,v,0)，g为单位矩阵、b=0，故K=0。圆柱取r(u,v)=(R cos(u/R),R sin(u/R),v)，其g同样为单位矩阵，故与平面该参数域局部等距，K=0。球面取外法向n=r/R，则−∂_in=−r_i/R，形算子为−I/R，行列式K=1/R²。法向反转会同时反转两主曲率，乘积不变。若球面局部等距平面，曲率保持性迫使1/R²=0，矛盾。$\square$')
