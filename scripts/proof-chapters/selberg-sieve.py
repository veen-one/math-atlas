"""Finite Selberg upper sieve with explicit quadratic minimization."""
def register(P, BASES):
    P('mobius-sieve-identity','numbertheory/sieve-methods numbertheory/arithmetic-functions','Möbius 容斥与有限筛的精确计数',r'定义μ(1)=1，含平方素因子的n有μ(n)=0，其余n为k个不同素数之积时μ(n)=(−1)^k。则Σ_(d|n)μ(d)=1_(n=1)。若P为有限素数之积、A为有限整数多重集，A_d为其中被d整除的元素数，则 S(A,P)=#{a∈A:gcd(a,P)=1}=Σ_(d|P)μ(d)A_d。','unique-factorization binomial-count','每个素因子只决定选或不选，因子化的交错和就是有限容斥。',
      r'对n>1，只有平方自由约数贡献，设不同素因子有k个，则约数对应这些素数的子集。和为Σ_(j=0)^k binom(k,j)(−1)^j=(1−1)^k=0。n=1时只有约数1，和为1。',
      r'对每个整数a，gcd(a,P)的约数恰为同时整除a和P的正整数，故Σ_(d|P,d|a)μ(d)=1_(gcd(a,P)=1)。a=0时gcd(0,P)=P，这个等式也成立；P=1时任意整数都保留。对有限多重集逐元素相加并交换有限求和得所列公式。',
      r'特别A={1,…,N}时A_d=floor(N/d)，所以筛余数精确为Σ_(d|P)μ(d)floor(N/d)。若P含所有不超过z的素数，则每个大于z且不超过N的素数都在筛余数中；小素数另计，不能把筛余数不加限制地直接称为全部素数。$\square$')
    P('selberg-square-majorant','numbertheory/sieve-methods','Selberg 平方权的上筛不等式',r'设P为平方自由正整数，D≥1为整数，λ_d为实权，仅对d|P、d≤D可非零且λ₁=1。若A有限且 A_q=X/q+r_q 对所有q|P成立，则 S(A,P)≤XΣ_(d,e)λ_dλ_e/lcm(d,e)+Σ_(d,e)|λ_dλ_e| |r_(lcm(d,e))|。求和只遍历权的支持，X为非负实数。','mobius-sieve-identity','未被筛掉的元素使约数权和恰为1，其他元素平方仍非负，因此平方和逐点控制筛指标。',
      r'令w(a)=Σ_(d|P,d≤D,d|a)λ_d。若gcd(a,P)=1，唯一可能约数d为1，故w(a)=λ₁=1；若不互素，筛指标为零而w(a)²≥0。因此1_(gcd(a,P)=1)≤w(a)²。',
      r'对A求和并展开平方，得 S≤Σ_(d,e)λ_dλ_e A_(lcm(d,e))，因为同时被d,e整除等价被最小公倍数整除。代入A_q=X/q+r_q，再对误差用三角不等式，得到陈述。有限集合和实权保证没有交换无穷和或符号歧义。',
      r'当A={1,…,N}且X=N时，r_q=floor(N/q)−N/q，故|r_q|≤1，误差进一步至多(Σ_d|λ_d|)²。平方权的作用是保留非负上界，同时允许选择权来压低主二次型。$\square$')
    P('selberg-optimal-finite-weights','numbertheory/sieve-methods','Selberg 一维有限上筛的最优权',r'设P平方自由，D≥1整数，集合E={d:d|P,d≤D}，φ为Euler函数，G=Σ_(r∈E)μ(r)²/φ(r)>0。对λ₁=1且支持在E的实权，Q(λ)=Σ_(d,e∈E)λ_dλ_e/lcm(d,e)的最小值为1/G。唯一最优权为 λ_d=(d/G)Σ_(r∈E,d|r) μ(r/d)μ(r)/φ(r)。从而区间整数筛满足 S({1,…,N},P)≤N/G+(Σ_(d∈E)|λ_d|)²。','selberg-square-majorant mobius-sieve-identity totient-product cauchy-schwarz','把最大公因子展开成Euler函数约数和，使二次型对角化，再对唯一线性约束用Cauchy–Schwarz。',
      r'先证Σ_(r|m)φ(r)=m：按gcd(k,m)将1≤k≤m分类，gcd(k,m)=m/r的k恰有φ(r)个。又1/lcm(d,e)=gcd(d,e)/(de)，所以 Q=Σ_(d,e)(λ_d/d)(λ_e/e)Σ_(r|d,r|e)φ(r)=Σ_(r∈E)φ(r)y_r²，其中 y_r=Σ_(d∈E,r|d)λ_d/d。',
      r'E对取约数封闭，有限Möbius反演给 λ_d/d=Σ_(r∈E,d|r)μ(r/d)y_r。直接验证：代入y后，对每个d|s的系数为Σ_(d|r|s)μ(r/d)=1_(s=d)，正是前面约数和恒等式。因而λ与y之间可逆，约束λ₁=1等价Σ_(r∈E)μ(r)y_r=1。',
      r'用实Cauchy–Schwarz，1=(Σ μ(r)y_r)²≤[Σ μ(r)²/φ(r)][Σ φ(r)y_r²]=GQ。因r=1项为1，G>0。等号当且仅当sqrt(φ(r))y_r与μ(r)/sqrt(φ(r))成比例，约束决定唯一比例1/G，所以y_r=μ(r)/(φ(r)G)。由反演恢复λ即得所列公式，且Q=1/G。',
      r'将该权代入平方上筛，并使用区间计数的|r_q|≤1，得到最终不等式。它是明确可计算的有限上筛定理；这里没有略去权误差，也未声称这一不等式本身已经证明陈景润或有界素数间隙等深层结果。$\square$')
