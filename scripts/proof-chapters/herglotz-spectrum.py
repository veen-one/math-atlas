"""Spectral measures constructed through quantiles, without a representation black box."""
def register(P, BASES):
    P('compact-interval-quantile','probability/distributions analysis/measures','紧区间概率测度的分位数实现',r'任意[a,b]上的Borel概率测度μ可写成(0,1)上Lebesgue概率测度经非减可测函数q:(0,1)→[a,b]的推前。具体q(u)=inf{x∈[a,b]:μ([a,x])≥u}。','measure-continuity-above lotus pi-lambda','分布函数的右连续性保证分位数下确界确实达到，从而比较分位数与阈值可直接恢复分布。',
      r'写F(x)=μ([a,x])，并在x<a时设F=0、x≥b时设F=1。F非减；若x_n递减至x，集合[a,x_n]递减至[a,x]，测度上连续性给F右连续。对0<u<1，定义q的集合非空且下界在[a,b]，其下确界q存在。选集合内点x_n使q≤x_n<q+1/n，右连续性及单调性给F(q)≥u。',
      r'因此对任意x∈[a,b]，q(u)≤x当且仅当u≤F(x)：正向由F(q)≥u及单调性，反向由x本身属于下确界定义集合。于是{u:q(u)≤x}=(0,F(x)]∩(0,1)，它可测且长度F(x)。q亦非减，因为u增大使定义集合缩小，故q可测。',
      r'q的推前测度与μ在所有[a,x]上一致。这些区间连同全集构成生成Borel集合的π系统，有限测度的π—λ唯一性使二者在全部Borel集合一致；可直接把一致集合类验证为λ系统后应用π—λ定理。$\square$')
    P('compact-interval-measure-subsequence','analysis/measures probability/distributions','紧区间概率测度的弱序列紧性',r'任意固定紧区间[a,b]上的概率测度序列μ_n，都有子列μ_(n_j)及区间上的概率测度μ，使每个连续g满足∫g dμ_(n_j)→∫g dμ。','compact-interval-quantile bolzano-weierstrass dominated-convergence pi-lambda','对非减分位数在有理点对角抽取，再由单调性夹逼得到几乎处处收敛。',
      r'用上一命题取非减分位数q_n:(0,1)→[a,b]。枚举(0,1)有理数r₁,r₂,…，逐次用有界实序列的Bolzano–Weierstrass抽子列，使第k次子列在r_k收敛；取对角子列后在每个有理r都收敛，记极限l(r)。由q_n单调，l在有理点非减。',
      r'定义q(u)=sup{l(r):r为有理且0<r<u}。它在[a,b]且非减可测。对有理r<u<s有 l(r)≤liminf q_(n_j)(u)≤limsup q_(n_j)(u)≤l(s)。在q的每个连续点u，左侧上确界为q(u)，右侧下确界也为q(u)：后者至少q(u)，而取u<s<t时l(s)≤q(t)，再令t从右趋u即得反向界。所以子列在q的连续点收敛于q(u)。',
      r'非减函数至多有可数个不连续点：每个内部跳跃对应非空区间(q(u−),q(u+))，不同跳点的这些区间不交，每个选一个有理数便得可数性；左右极限存在且不连续必有正跳跃，由单调上、下确界直接得到。故上述分位数收敛几乎处处。',
      r'定义μ为Lebesgue概率经q的推前，推前可数可加性由逆像保持不交并得到。连续g在[a,b]有界，g(q_(n_j))→g(q)几乎处处，以常数sup|g|支配。支配收敛及推前换元给∫g dμ_(n_j)=∫₀¹g(q_(n_j)(u))du→∫₀¹g(q(u))du=∫g dμ。$\square$')
    P('stationary-herglotz-measure','probability/stationary-processes analysis/fourier-series','离散宽平稳过程的谱测度存在唯一性',r'每个实二阶宽平稳离散时间过程的协方差γ，都唯一对应单位圆上的有限非负Borel测度ν，使γ(k)=∫_(|z|=1)z^k dν(z)，k∈Z。总质量为γ(0)，允许点质量；协方差绝对可和时，ν为λ↦e^(iλ)推前的f(λ)dλ，其中f为已证的Wiener–Khinchin密度。','stationary-covariance-positive compact-interval-measure-subsequence fejer-uniform-convergence pi-lambda dominated-convergence wiener-khinchin-summable','以非负有限样本周期图构造定质量测度，抽取弱极限恢复全部矩，再用三角多项式稠密性证明唯一。',
      r'若γ(0)=0，协方差界给γ(k)=0，零测度满足要求；任何非负表示测度的总质量由k=0决定为零，故唯一。以下设c=γ(0)>0。前面已证非负连续周期函数 f_N(λ)=(2π)⁻¹Σ_(|h|<N)(1−|h|/N)γ(h)e^(−ihλ)，且∫_(−π)^πf_N=c。于是μ_N在该紧区间上取概率密度f_N/c。',
      r'紧区间测度弱序列紧性给子列及概率极限μ。对每个整数k，e^(ikλ)连续，实、虚部分别使用弱收敛。有限Fourier和直接积分给∫e^(ikλ)c dμ_N=(1−|k|/N)γ(k)（N>|k|）。故极限为γ(k)。定义ν为cμ在连续映射λ↦e^(iλ)下的推前，即得所需矩与总质量。端点−π和π推到同一点，避免把同一个圆周点的质量人为分裂。',
      r'若ν₁、ν₂均表示γ，它们对所有三角多项式积分一致。任意单位圆连续函数g可视为λ的连续2π周期函数，Fejér定理给一致逼近它的三角多项式。有限且相同总质量保证积分误差不超过质量乘一致误差，所以两测度对全部连续g积分一致。',
      r'对圆上闭集F，取g_n(z)=max(0,1−n dist(z,F))，F为空时直接取0。距离函数连续，因为|dist(z,F)−dist(w,F)|≤|z−w|。这些连续函数逐点趋于1_F并被1支配，故支配收敛给ν₁(F)=ν₂(F)。闭集构成含全集、交封闭且生成Borel集合的π系统，π—λ唯一性给两测度在所有Borel集合相等。',
      r'协方差绝对可和时，已证非负连续f及反演公式，所以f(λ)dλ的圆周推前也表示全部γ(k)；唯一性使其正是ν。这同时说明密度定理是一般谱测度定理的特例，不能把非绝对可和情形未经论证地写成普通函数密度。$\square$')
