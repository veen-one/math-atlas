"""Lindeberg sufficient CLT for independent triangular arrays."""
def register(P, BASES):
    P('lindeberg-negligible-variance','probability/central-limit-theorem','Lindeberg 条件推出最大单项方差消失',r'每行有限独立中心化实变量 Y_(n,k) 满足 Σ_kE[Y_(n,k)²]=1。若每个 ε>0 均有 L_n(ε)=Σ_kE[Y_(n,k)²1_{|Y_(n,k)|>ε}]→0，则 max_kE[Y_(n,k)²]→0。','integral-linearity','每项二阶矩拆成小幅部分与尾部，小幅部分至多 ε²。',
      r'固定 ε>0，对每个 k 有 E[Y_(n,k)²]≤ε²+E[Y_(n,k)²1_{|Y_(n,k)|>ε}]≤ε²+L_n(ε)。',
      r'对 k 取最大，再令 n→∞，上极限≤ε²。由于 ε 任意，且方差非负，最大值趋零。$\square$')
    P('small-complex-product','analysis/limits probability/central-limit-theorem','无穷小复因子的乘积极限',r'每行有限复数 u_(n,k) 若满足 max_k|u_(n,k)|→0、sup_nΣ_k|u_(n,k)|<∞、Σ_ku_(n,k)→a，则 ∏_k(1+u_(n,k))→exp(a)。','complex-exponential-entire','逐因子比较 1+u 与 exp(u)，误差总和由平方和控制。',
      r'当 |u|≤1，指数级数给 |exp(u)−1−u|≤C|u|²，其中 C=Σ_(j≥2)1/j!。并有 |1+u|≤exp(|u|)、|exp(u)|≤exp(|u|)，后一式直接由指数级数三角不等式得到。',
      r'用有限乘积差的望远镜展开，∏(1+u_k)−∏exp(u_k) 的模≤C exp(Σ|u_k|)Σ|u_k|²。平方和≤max|u_k|·Σ|u_k|→0，指数因子统一有界，所以两乘积之差趋零。',
      r'指数加法公式使 ∏exp(u_k)=exp(Σu_k)→exp(a)，得到结论。这避免在复数零点附近选择对数分支。$\square$')
    P('lindeberg-sufficient-clt','probability/central-limit-theorem','Lindeberg 三角阵中心极限定理（充分方向）',r'每行有限个相互独立实变量 X_(n,k) 均值有限、方差有限，令 s_n²=Σ_kVar(X_(n,k))>0、Y_(n,k)=(X_(n,k)−EX_(n,k))/s_n。若对每个 ε>0，Σ_kE[Y_(n,k)²1_{|Y_(n,k)|>ε}]→0，则 Σ_kY_(n,k) 依分布收敛于 N(0,1)。不要求各行间独立。','lindeberg-negligible-variance small-complex-product characteristic-expansion independent-bounded-products gaussian-smoothing','统一控制每项特征函数的二阶余项，再用 Lindeberg 条件使所有余项的总和趋零。',
      r'记 v_(n,k)=EY_(n,k)²，故 Σ_kv_(n,k)=1。指数的积分余项恒等式 exp(iz)=1+iz−z²/2+z²r(z) 中，|r(z)|≤1、r(z)→0（已在特征函数展开证明中给出）。固定实 t，每项特征函数为 φ_(n,k)(t)=1−t²v_(n,k)/2+R_(n,k)，其中 R_(n,k)=t²E[Y_(n,k)²r(tY_(n,k))]。',
      r'令 ω_t(δ)=sup_(|z|≤|t|δ)|r(z)|，则 ω_t(δ)→0。将每项余项按 |Y|≤δ 与 |Y|>δ 拆分后求和，得 Σ_k|R_(n,k)|≤t²[ω_t(δ)+L_n(δ)]。先 n→∞ 再 δ↓0，使总余项趋零。',
      r'令 u_(n,k)=−t²v_(n,k)/2+R_(n,k)。则 Σ_ku_(n,k)→−t²/2，Σ_k|u_(n,k)| 统一有界；由最大方差消失及 Σ|R|→0，还得 max_k|u_(n,k)|→0。无穷小乘积引理给 ∏_kφ_(n,k)(t)→exp(−t²/2)。',
      r'行内独立使乘积正是 V_n=Σ_kY_(n,k) 的特征函数。中心化与独立性给 EV_n=0、EV_n²=1。高斯平滑引理的条件均满足，所以对每个实 x，P(V_n≤x)→Φ(x)，即所述依分布收敛。这里证明的是 Lindeberg 条件的充分性，未证明在额外无穷小条件下的逆命题。$\square$')
