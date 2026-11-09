"""Prime powers, elementary Chebyshev bounds and equivalent PNT forms."""
def register(P, BASES):
    P('psi-theta-error','numbertheory/prime-counting numbertheory/prime-number-theorem','素数幂对 ψ 与 θ 差值的贡献',r'令 θ(x)=Σ_(p≤x)log p，ψ(x)=Σ_(p^k≤x,k≥1)log p。则 0≤ψ(x)−θ(x)≤√x(log x)²/log2，因而 ψ(x)−θ(x)=o(x)。','unique-factorization','高次素数幂的底数不超过平方根；每个底数最多贡献对数数量次。',
      r'x≥2 时，差值仅来自 k≥2，因此对应 p≤√x。每个 p 的指数最多 floor(log x/log p)≤log x/log2，每个权重 log p≤log x，底数个数不超过 floor√x。相乘即得所列上界。',
      r'除以 x，得到上界 (log x)²/(√x log2)→0。该极限可令 t=log x，并用指数级数 e^(t/2)≥(t/2)^3/3!，故 t²/e^(t/2)≤48/t→0。因此差值为 o(x)。$\square$')
    P('chebyshev-two-sided-primes','numbertheory/prime-counting','切比雪夫素数计数上下界',r'存在常数 c,C>0 与 x₀，使所有 x≥x₀ 满足 cx/log x≤π(x)≤Cx/log x；本证明不使用素数定理。','psi-theta-error chebyshev-theta-upper unique-factorization binomial-count','中心二项式系数的素因子指数受最小公倍数控制，给 ψ 的线性下界，再转换到 θ 与 π。',
      r'中心二项式系数 binom(2n,n) 是第2n行最大的系数：相邻系数比为 (2n−k)/(k+1)，故在中心前递增、中心后递减。全部2n+1项之和为2^(2n)，所以 binom(2n,n)≥2^(2n)/(2n+1)。',
      r'素数 p 在 N! 中的指数为 Σ_(j≥1)floor(N/p^j)，因为每个整数的 p 因子可逐层按被 p^j 整除来计数。因此在 binom(2n,n) 中的指数是 Σ_j[floor(2n/p^j)−2floor(n/p^j)]，每项为0或1，且 p^j>2n 后为0。该指数≤floor(log(2n)/log p)，正是 lcm(1,…,2n) 中 p 的指数。',
      r'故 binom(2n,n) 整除该最小公倍数。后者的对数为 ψ(2n)，所以 ψ(2n)≥2nlog2−log(2n+1)。对任意大实数 x 取 n=floor(x/2)，用 ψ 单调及 2n≥x−2，得 ψ(x)≥c₁x，某 c₁>0。再由 ψ−θ=o(x)，充分大 x 时 θ(x)≥c₂x。',
      r'由 θ(x)≤π(x)log x 得 π(x)≥c₂x/log x。另一方面分离 p≤√x 与 p>√x：前者至多√x个，后者每个对 θ 贡献至少 (log x)/2，所以 π(x)≤√x+2θ(x)/log x。已证 θ(x)=O(x)，且 √x=O(x/log x)，故得所求上界。$\square$')
    P('pnt-psi-equivalence','numbertheory/prime-number-theorem numbertheory/prime-counting','素数定理的 ψ、θ、π 三种等价形式',r'下列渐近式等价：ψ(x)∼x；θ(x)∼x；π(x)∼x/log x。','psi-theta-error prime-number-theorem-proof','ψ 与 θ 只差次线性素数幂贡献；用一个分离小素数的估计处理 θ 到 π，反向用分部求和。',
      r'ψ−θ=o(x) 直接说明前两式互相推出。θ∼x 推 π∼x/log x 的证明已在素数定理的最后一步展开：θ≤πlog x 给下界，按 p<x^(1−ε) 与其余素数分组给上界，再令 ε↓0。这里仅复用那个代数估计，不需要把素数定理本身作为假设。',
      r'反向假设 π(x)∼x/log x。对每个 p≤x，log p=log x−∫_p^x dt/t，对有限个素数求和并交换有限和与积分，得 θ(x)=π(x)log x−∫₂^xπ(t)dt/t。端点处有限跳跃不影响积分。',
      r'第一项∼x。对积分，取常数 C 使所有充分大 t 有 π(t)≤Ct/log t。固定小起点到√x的部分用 π(t)≤t 得 O(√x)；√x到x的部分满足 π(t)/t≤2C/log x，积分≤2Cx/log x=o(x)。所以整个积分为o(x)，θ(x)∼x，完成等价。$\square$')
