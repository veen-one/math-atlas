"""Discrete-time covariance spectra: density case and its essential limitation."""
def register(P, BASES):
    P('stationary-covariance-positive','probability/stationary-processes','宽平稳协方差的正定性与有限样本周期图',r'设实离散时间过程(X_t)_(t∈Z)二阶宽平稳，Y_t=X_t−EX_t，γ(h)=E[Y_(t+h)Y_t]。则γ为实偶函数，|γ(h)|≤γ(0)，且任意复数c_0,…,c_(N−1)有Σ_(j,k)overline(c_j)c_k γ(j−k)≥0。非负函数 f_N(λ)=(2πN)⁻¹E|Σ_(t=0)^(N−1)Y_t e^(−itλ)|² 等于 (2π)⁻¹Σ_(|h|<N)(1−|h|/N)γ(h)e^(−ihλ)。','l2-cauchy-schwarz integral-linearity','展开随机三角多项式的平方，再按时间差分组。',
      r'协方差对称性和宽平稳性给γ(−h)=γ(h)。随机变量的L² Cauchy–Schwarz给 |E[Y_(t+h)Y_t]|≤(E Y_(t+h)² E Y_t²)^(1/2)=γ(0)。所有涉及的乘积可积，故有限求和可交换期望。',
      r'令Z=Σc_kY_k，则E|Z|²=Σ_(j,k)overline(c_j)c_kE[Y_jY_k]=Σ_(j,k)overline(c_j)c_kγ(j−k)≥0，得到正定性。展开f_N的平方，每个差h=t−s有N−|h|个有序对，遂得所列加权Fourier和。非负性由原始平方定义直接成立。',
      r'把有限Fourier和在[−π,π]积分，非零整数h的指数积分为零，h=0的积分为2π，故∫f_N=γ(0)。这些近似谱函数总质量固定，但未必趋于一个可积密度。$\square$')
    P('wiener-khinchin-summable','probability/stationary-processes analysis/fourier-series','绝对可和协方差的离散 Wiener–Khinchin 定理',r'实二阶宽平稳离散时间过程若Σ_(h∈Z)|γ(h)|<∞，则 f(λ)=(2π)⁻¹Σ_hγ(h)e^(−ihλ) 为连续、非负、实偶的2π周期谱密度，且γ(k)=∫_(−π)^πe^(ikλ)f(λ)dλ、∫f=γ(0)。在连续周期函数中，这个密度由协方差唯一确定。','stationary-covariance-positive weierstrass-m fourier-coefficient-uniqueness','绝对收敛给连续Fourier和；有限样本周期图一致逼近它，保证非负。',
      r'将双向整数和按0、正负成对排列。每项绝对值被|γ(h)|/(2π)控制，Weierstrass判别法给一致绝对收敛。各项连续周期，故和连续周期；γ实偶使正负h配对为2γ(h)cos(hλ)，所以f实偶。',
      r'上一命题的f_N与f之差的上确界至多 (2π)⁻¹[Σ_(|h|≥N)|γ(h)|+Σ_(|h|<N)(|h|/N)|γ(h)|]。第一项趋零。对第二项给ε>0，先选H使|h|>H的绝对值尾和小于ε，再令N趋无穷，使有限个|h|≤H的加权和趋零；尾部权重不超过1。因此f_N一致趋f。因每个f_N≥0，f≥0。',
      r'一致收敛允许逐项积分：积分误差不超过区间长度乘一致误差。对整数k，∫e^(ikλ)f=(2π)⁻¹Σ_hγ(h)∫e^(i(k−h)λ)=γ(k)。特别k=0给总质量。若另一连续周期密度具有相同这些积分，差函数的所有Fourier系数均零，Fourier系数唯一性定理给两者处处相等。$\square$')
    P('stationary-spectrum-atom-counterexample','probability/stationary-processes','平稳过程未必具有谱密度',r'取均值零、方差1的实随机变量Z，并令每个整数时刻X_t=Z。该过程严平稳且二阶宽平稳，γ(h)=1；不存在非负可积函数f在[−π,π]满足全部γ(k)=∫e^(ikλ)f(λ)dλ。它的谱可由原点单位点质量δ₀表示。','integral-linearity','同一个随机变量在所有时刻不变，使谱全部集中在频率零，不能用普通密度表达。',
      r'任意时刻组的联合向量均为(Z,…,Z)，平移时刻不改变其分布，所以严平稳。均值零、协方差E Z²=1，与时间差无关，故宽平稳。原点点质量满足∫e^(ikλ)dδ₀=1，对所有整数k都成立。',
      r'若有非负可积密度f，由k=0得∫f=1；由k=1取实部得∫cosλ f=1。相减给∫(1−cosλ)f=0。被积函数非负，零积分迫使它几乎处处为零：否则某个集合{(1−cosλ)f≥1/n}具有正测度，积分为正。',
      r'在[−π,π]除λ=0外，1−cosλ严格正，所以f在除单点外几乎处处为零，单点Lebesgue测度零，于是∫f=0，矛盾。故一般平稳过程的谱应允许谱测度；绝对可和协方差是保证连续谱密度的一组充分条件。这里给出反例及其明确谱测度，未以此替代一般谱测度存在定理的证明。$\square$')
