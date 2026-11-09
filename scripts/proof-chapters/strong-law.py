"""Maximal inequality and the full integrable iid strong law."""
def register(P, BASES):
    P('kolmogorov-maximal','probability/law-large-numbers probability/almost-sure-convergence','Kolmogorov 最大不等式',r'独立均值零且方差有限的实变量 Z₁,…,Z_n，部分和 S_k=Σ_(j≤k)Z_j 满足 P(max_(k≤n)|S_k|≥t)≤Σ_(j≤n)Var(Z_j)/t²，t>0。','independent-products integral-linearity','按首次越过阈值的时刻把事件拆开；未来增量与该时刻之前的信息独立，交叉项期望为零。',
      r'令 A_k={|S_j|<t 对 j<k，|S_k|≥t}，它们互不交，其并为最大值越阈事件。A_k 只依赖前 k 项，未来增量 R=S_n−S_k 与这些变量独立且均值零。',
      r'因此 E[S_n²1_(A_k)]=E[S_k²1_(A_k)]+E[R²1_(A_k)]≥t²P(A_k)，交叉项 E[S_kR1_(A_k)] 为零。该乘积可积，由 Cauchy–Schwarz 或有限二阶矩控制；独立变量生成的信息独立可由矩形事件及 π—λ 推广得到。',
      r'对互不交 A_k 求和得 E[S_n²]≥t²ΣP(A_k)。独立中心化变量的方差相加给 E[S_n²]=ΣVar(Z_j)，除以 t² 即得结论。$\square$')
    P('independent-series-convergence','probability/almost-sure-convergence probability/law-large-numbers','方差可求和的独立中心化级数几乎必然收敛',r'独立实变量 Z_n 满足 E[Z_n]=0、ΣVar(Z_n)<∞，则 ΣZ_n 几乎必然收敛。','kolmogorov-maximal borel-cantelli-first cauchy-completeness measure-continuity','选择方差尾和足够快下降的起点，再用最大不等式同时控制整个尾部。',
      r'选严格递增 N_k，使 Σ_(j≥N_k)Var(Z_j)≤2^(−3k)。对任意 m≥N_k，最大不等式给 P(max_(N_k≤l≤m)|Σ_(j=N_k)^lZ_j|≥2^(−k))≤2^(−k)。',
      r'令 m→∞，这些最大值事件递增，概率下连续性给整个无限尾部的越界概率仍≤2^(−k)。概率上界可求和，Borel–Cantelli 使几乎每条路径上，对充分大 k，所有 l≥N_k 均有 |Σ_(j=N_k)^lZ_j|<2^(−k)。',
      r'任意 m≥n≥N_k 的尾和由两条从 N_k 开始的和相减，绝对值≤2·2^(−k)。故在这些路径上级数部分和为实柯西列，按实数完备性收敛。$\square$')
    P('kronecker-lemma-integers','probability/law-large-numbers analysis/series','Kronecker 引理（整数权重）',r'若实级数 Σ_(k≥1)a_k/k 收敛，则 n⁻¹Σ_(k≤n)a_k→0。','cauchy-completeness','把加权级数部分和作离散分部求和，余项成为收敛数列与其 Cesàro 平均之差。',
      r'令 s_n=Σ_(k≤n)a_k/k、s₀=0，则 a_k=k(s_k−s_(k−1))。有限求和整理得 Σ_(k≤n)a_k=n s_n−Σ_(k<n)s_k。',
      r'设 s_n→s。给 ε>0，充分后 |s_k−s|<ε，前面固定有限项除以 n 趋零，所以 n⁻¹Σ_(k<n)s_k→s：尾部误差平均≤ε，且 (n−1)s/n→s。因此上式除以 n 后的极限为 s−s=0。$\square$')
    P('iid-integrable-strong-law','probability/law-large-numbers probability/almost-sure-convergence','独立同分布可积变量的强大数定律',r'若实变量 X_n 独立同分布，E|X₁|<∞，μ=E[X₁]，则 n⁻¹Σ_(k≤n)X_k→μ 几乎必然；不要求有限方差。','independent-series-convergence kronecker-lemma-integers borel-cantelli-first dominated-convergence monotone-integral','按下标截断尾部，以可积性保证截断只改变有限项，并使截断中心化变量的加权方差可求和。',
      r'令 Y_n=X_n1_{|X_n|≤n}，Z=|X₁|。逐点 Σ_(n≥1)1_{Z>n}≤Z，非负单调收敛给 ΣP(X_n≠Y_n)=ΣP(Z>n)≤EZ<∞。Borel–Cantelli 使几乎必然只有有限个 X_n≠Y_n，因此二者样本和之差除以 n 趋零。',
      r'各 Y_n 仍独立且二阶矩有限。估计 ΣVar(Y_n)/n²≤ΣE[Z²1_{Z≤n}]/n²=E[Z²Σ_(n≥max(1,ceil Z))n⁻²]。对 Z≥1，令 m=ceil Z，尾和≤1/m²+∫_m^∞t⁻²dt≤2/m≤2/Z；对 0≤Z<1，尾和≤2，且 Z²≤Z。因此整个期望≤2EZ<∞。交换非负和与期望由单调收敛保证。',
      r'对独立中心化变量 (Y_n−EY_n)/n 应用方差可求和级数收敛定理，得 Σ(Y_n−EY_n)/n 几乎必然收敛。Kronecker 引理遂给 n⁻¹Σ_(k≤n)(Y_k−EY_k)→0 几乎必然。',
      r'由于 X_n 同分布，EY_n=E[X₁1_{|X₁|≤n}]，由可积控制 |X₁| 及控制收敛得 EY_n→μ。收敛数列的 Cesàro 平均也趋 μ，故 n⁻¹ΣY_k→μ。与第一步有限项差异合并，得到 n⁻¹ΣX_k→μ，完成只用一阶绝对矩的强大数定律。$\square$')
