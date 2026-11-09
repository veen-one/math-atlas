"""Hurwitz stability and the continuous Lyapunov equation."""
def register(P, BASES):
    P('hurwitz-linear-stability','analysis/stability applied/feedback-control applied/state-space','有限维线性系统的 Hurwitz 稳定判据',r'实矩阵 A 的系统 x′=Ax 原点渐近稳定，当且仅当 A 的全部复特征值实部严格负；此时存在 C,β>0，使所有 t≥0 有 ‖e^(tA)‖≤Ce^(−βt)。','complex-jordan-form matrix-exponential finite-norm-equivalence','Jordan 块指数是衰减指数乘有限阶多项式；非负实部的特征方向则不能趋零。',
      r'解为 x(t)=e^(tA)x₀。取复 Jordan 分解 A=SJS⁻¹。每块 J=λI+N，N^m=0，直接将有限多项式与指数相乘并求导，可验证 e^(tJ)=e^(λt)Σ_(k=0)^(m−1)t^kN^k/k!：该矩阵在0为I且导数为J倍自身，与指数的初值问题相同。唯一性也可将任一解乘e^(−tJ)求导得常数。',
      r'设全部 Reλ≤−α<0，取0<β<α。每个 t^ke^(−(α−β)t) 在 t≥0 有统一界：当t≥1，指数级数中k+1阶项给 e^((α−β)t)≥((α−β)t)^(k+1)/(k+1)!，从而尾部趋零；有限区间连续有界。有限块及固定换基矩阵的范数给 ‖e^(tA)‖≤Ce^(−βt)。',
      r'该界保证任意解趋零，并给 Lyapunov 稳定性：‖x₀‖<ε/C 时全部时刻 ‖x(t)‖<ε。反向若全部实初值的解都趋零，复初值的解也趋零，因为它是两条实解的复线性组合。若有 Reλ≥0 的复特征值及非零v，则 e^(tA)v=e^(λt)v，其范数不趋零，矛盾。所以渐近稳定迫使全部实部为负。$\square$')
    P('continuous-lyapunov-equation','analysis/stability applied/feedback-control applied/robust-control','Lyapunov 矩阵方程的正定解判据',r'实矩阵 A 为 Hurwitz 当且仅当对每个实对称正定 Q，存在实对称正定 P 满足 AᵀP+PA=−Q。Hurwitz 时该方程的矩阵解唯一，且 P=∫₀∞e^(tAᵀ)Qe^(tA)dt。','hurwitz-linear-stability hermitian-spectral ftc-second','指数衰减保证积分收敛，积分被积矩阵的导数给方程；正定性由二次型的正积分得到。',
      r'设 A Hurwitz。指数界给 ‖e^(tAᵀ)Qe^(tA)‖≤C²‖Q‖e^(−2βt)，所以逐坐标广义积分绝对收敛，定义实对称P。对x≠0，xᵀPx=∫₀∞(e^(tA)x)ᵀQ(e^(tA)x)dt，非负且在t=0严格正，连续性保证一小段上严格正，故P正定。',
      r'在有限上限T积分矩阵导数，得 AᵀP_T+P_TA=e^(TAᵀ)Qe^(TA)−Q。令T→∞，右边第一项由指数界趋零，得所列方程。若P₁、P₂均为解，D=P₁−P₂满足AᵀD+DA=0，因此 e^(tAᵀ)De^(tA) 的导数为零，恒等于D；左侧又随t→∞趋零，故D=0，唯一性甚至不要求待比较的解对称。',
      r'反向只需对某个正定Q有正定对称P满足方程。取A任一复特征向量v、Av=λv，用共轭转置左右夹乘得到 2Reλ·v*Pv=−v*Qv。实对称正定矩阵在复向量上也正：对v=x+iy，v*Pv=xᵀPx+yᵀPy>0，Q同理。因此Reλ<0，对全部特征值成立，A Hurwitz。',
      r'沿实系统解，V=xᵀPx 满足 V̇=−xᵀQx≤−[λ_min(Q)/λ_max(P)]V，乘相应正指数后导数非正，得到显式指数衰减。这也说明正定解如何给稳定性的可计算证据。$\square$')
    P('schur-discrete-stability','analysis/stability applied/state-space applied/numerical-stability','离散线性系统的 Schur 稳定判据',r'对实有限方阵 A，系统 x_(n+1)=Ax_n 的原点渐近稳定，当且仅当每个复特征值满足 |λ|<1。此时存在 C>0、0<r<1，使 ‖A^n‖≤Cr^n。','complex-jordan-form finite-norm-equivalence','Jordan 块的幂是几何衰减乘多项式；模至少为一的特征方向不收敛到零。',
      r'设 J=λI+N 是大小m的 Jordan 块。二项式定理给 J^n=Σ_(k=0)^(min(n,m−1)) binom(n,k)λ^(n−k)N^k。若λ=0，n≥m时该块为零。若0<|λ|<r<1，利用 binom(n,k)≤n^k/k!，各项除以r^n后有界，因为 n^k(|λ|/r)^n 有界。后者可取 a=−log(|λ|/r)>0，由指数级数 e^(an)≥(an)^(k+1)/(k+1)! 得其趋零，有限初始项亦有界。',
      r'对有限多个块选择同一个大于全部特征值模而小于1的r，吸收换基矩阵及有限初始幂得到 ‖A^n‖≤Cr^n。于是解A^nx₀趋零，且 ‖x₀‖<ε/C 保证所有迭代留在ε球内。反向若所有实初值解趋零，所有复初值也趋零；对Av=λv有A^nv=λ^nv，故非零v迫使|λ|<1。$\square$')
    P('discrete-lyapunov-equation','analysis/stability applied/state-space applied/robust-control','离散 Lyapunov 方程及能量衰减',r'A 的谱位于开单位圆内，当且仅当对每个实对称正定Q存在实对称正定P满足 P−AᵀPA=Q。此时任意矩阵解唯一，P=Σ_(n=0)^∞(Aᵀ)^nQA^n。','schur-discrete-stability hermitian-spectral','用收敛的能量级数构造解；移位相减消去尾项，特征向量二次型给反向判据。',
      r'由 ‖A^n‖≤Cr^n，级数各项范数至多C²‖Q‖r^(2n)，因此每个坐标绝对收敛。每项对称半正定，且第0项Q正定，所以P对称正定。有限和P_N满足 P_N−AᵀP_NA=Q−(Aᵀ)^(N+1)QA^(N+1)，末项趋零，取极限即得方程。',
      r'两解之差D满足D=AᵀDA，迭代得D=(Aᵀ)^nDA^n，其范数至多C²r^(2n)‖D‖，令n趋无穷得D=0。反向只需一个正定Q及正定对称解P；取复特征向量v，夹乘方程得到 (1−|λ|²)v*Pv=v*Qv。正定实对称矩阵对非零复向量亦正，因为实部、虚部的二次型相加，故1−|λ|²>0。',
      r'沿迭代V_n=x_nᵀPx_n有 V_(n+1)−V_n=−x_nᵀQx_n。由于P−Q=AᵀPA半正定，0<c=λ_min(Q)/λ_max(P)≤1，故V_(n+1)≤(1−c)V_n，给出可计算的几何衰减；c=1时该不等式直接给下一步能量为零。$\square$')
