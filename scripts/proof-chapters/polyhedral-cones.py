"""Finite generation of polyhedral cones and general Minkowski-Weyl."""
def register(P, BASES):
    P('polyhedral-cone-finite-generation','geometry/polyhedra geometry/convex-sets discrete/polyhedral-methods','有限线性不等式锥可有限生成',r'若 K={x∈R^n:Ax≤0}，则存在有限向量 v₁,…,v_m，使 K={Σ_jλ_jv_j:λ_j≥0}。零锥可用空生成族表示。','bounded-minkowski-weyl','按有限个坐标正交象限分片，在每片用绝对坐标和等于一截出有界截面。',
      r'对每个符号向量 ε∈{−1,1}^n，令 K_ε=K∩{ε_ix_i≥0 对所有i}。该象限内 ℓ_ε(x)=Σ_iε_ix_i=Σ_i|x_i|，所以对非零 x∈K_ε，ℓ_ε(x)>0，且 x/ℓ_ε(x) 属于截面 P_ε={x∈K_ε:ℓ_ε(x)=1}。',
      r'每个 P_ε 是有限闭半空间之交，等式可拆为两不等式；并有 |x_i|≤1，所以有界。若非空，由有界 Minkowski–Weyl，它是有限点集 V_ε 的凸包。于是 K_ε 中任意非零 x 是 V_ε 的非负线性组合：把其归一化凸组合乘以 ℓ_ε(x)。零向量由全零系数给出。若截面为空，该片只有零。',
      r'全部2^n个象限覆盖 R^n，合并有限个 V_ε 得有限族 V，所有 K 中向量都在 cone(V)。反向 V⊆K，而 K 对非负线性组合封闭，所以 cone(V)⊆K。n=0 时只有零向量，直接成立。$\square$')
    P('minkowski-weyl-general','geometry/polyhedra discrete/polyhedral-methods applied/linear-programming','一般 Minkowski–Weyl 定理',r'非空 P⊆R^n 是有限闭半空间之交，当且仅当存在非空有限点集 V 与有限方向集 R，使 P=conv(V)+cone(R)。方向集允许为空；点集中的点不必全是顶点。','polyhedral-cone-finite-generation fourier-motzkin','把仿射不等式齐次化为高一维锥，按生成向量首坐标为正或零拆出点与衰退方向。',
      r'设 P={x:Ax≤b} 非空。在 R×R^n 中定义锥 K={(t,x):t≥0，Ax≤tb}，由有限齐次线性不等式描述。有限生成定理给 K=cone{(t_j,x_j)}，每个 t_j≥0。将指标分为 J_+={j:t_j>0} 与 J₀={j:t_j=0}。',
      r'因为 P 非空，K 中有首坐标为1的点，所以 J_+ 非空。令 V={x_j/t_j:j∈J_+}、R={x_j:j∈J₀}。对 x∈P，写 (1,x)=Σ_jλ_j(t_j,x_j)，λ_j≥0。比较首坐标得 Σ_(j∈J_+)λ_jt_j=1，所以 x 是 V 的凸组合再加 R 的非负线性组合。',
      r'反向，若 x=Σ_(j∈J_+)α_j(x_j/t_j)+Σ_(j∈J₀)β_jx_j，其中 α,β≥0、Σα=1，则 (1,x)=Σ_(j∈J_+)(α_j/t_j)(t_j,x_j)+Σ_(j∈J₀)β_j(0,x_j)∈K。因此 Ax≤b，得到 P=conv(V)+cone(R)。',
      r'反方向给定有限 V={v_i}、R={r_j}，以变量 α_i,β_j 写 x=Σ_iα_iv_i+Σ_jβ_jr_j、α_i≥0、β_j≥0、Σ_iα_i=1。它们是有限线性等式与不等式。消去 α,β 的 Fourier–Motzkin 定理给 x 的有限非严格线性不等式描述，正是所需半空间交。若 P 含整条直线，R 可包含相反方向，证明仍适用。$\square$')
