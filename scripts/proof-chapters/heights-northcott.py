"""Conjugate definition of absolute height and elementary finiteness proofs."""
def register(P, BASES):
    P('absolute-height-rational','numbertheory/heights','绝对乘法高度的共轭定义及有理数情形',r'对次数d的代数数α，取其唯一首项系数a_d>0的本原不可约整数多项式 f(T)=a_d∏_(j=1)^d(T−α_j)。定义 H(α)=[a_d∏_j max(1,|α_j|)]^(1/d)，h=log H。该值不依赖共轭根排列；对既约p/q且q>0，有H(p/q)=max(|p|,q)。','minimal-polynomial unique-factorization fundamental-algebra characteristic-zero-separable','固定本原整数最小多项式，消除整体倍数歧义，所有共轭根对称进入定义。',
      r'有理系数首一最小多项式唯一。将其系数乘公共分母得整数多项式，再除以全部系数的最大公因子，并使首项正，得到f。若另一个本原正首项整数多项式与它相差有理倍数u/v（互素且v>0），整数系数迫使v整除f的每个系数，故v=1；对反向倍数重复，得u=1。所以该规范形式唯一。',
      r'代数基本定理给全部复根，特征零可分性保证d个根无重；即使按重数计，乘积也不受排列影响。正整数a_d≥1且各max因子≥1，所以H≥1且h≥0。这里采用共轭乘积直接定义绝对高度，不把未展开的赋值乘积公式当作证明。',
      r'对既约p/q，q>0，其本原整数最小多项式是qT−p，d=1。因此H=q max(1,|p/q|)=max(q,|p|)，恰与有理数高度定义一致。$\square$')
    P('northcott-algebraic-numbers','numbertheory/heights numbertheory/transcendental-numbers','Northcott 有界次数与有界高度有限性定理',r'给定整数D≥1及实数B，次数[Q(α):Q]≤D且绝对乘法高度H(α)≤B的代数数α只有有限多个。等价地，可将高度条件改为对数高度h(α)≤C。','absolute-height-rational root-bound binomial-count','高度同时约束最小多项式首项和所有根的大小，初等对称式于是把全部整数系数限制在有限范围。',
      r'B<1时因H≥1而无元素，以下B≥1。设α次数d≤D，规范最小多项式f=a_dT^d+⋯+a_0，M=a_d∏max(1,|α_j|)=H(α)^d≤B^d。系数a_(d−k)是a_d乘k个共轭根乘积的交错和。',
      r'每个根子集乘积的绝对值至多∏max(1,|α_j|)，所以 |a_(d−k)|≤binom(d,k)M≤2^D B^D，对k=0,…,d均成立。所有系数为整数，在固定有界区间仅有有限选择；次数也只有D种，故可能的最小多项式有限。',
      r'每个非零次数至多D的多项式至多D个根，因此这些多项式全部根的并集有限，所求集合是其子集。对数高度条件h≤C等价H≤e^C，代入即得同样结论。无需先证明数域类群有限性或Mordell–Weil定理。$\square$')
    P('liouville-algebraic-approximation','numbertheory/diophantine-approximation numbertheory/transcendental-numbers','Liouville 代数数有理逼近下界',r'若实代数无理数α的次数为d≥2，则存在c(α)>0，使任意整数p及正整数q都有 |α−p/q|≥c(α)/q^d。特别地，若某无理数对任意m都有无穷多个不同有理数p/q满足0<|α−p/q|<q^(−m)，它必超越。','minimal-polynomial ftc-second finite-dimensional-compactness','整数最小多项式在p/q处的非零值至少q^(−d)，再用导数界将函数值转成自变量距离。',
      r'取α的不可约整数最小多项式f，次数d≥2。对任意有理p/q，f(p/q)≠0，否则不可约多项式有一次因子，矛盾。又q^d f(p/q)为非零整数，故|f(p/q)|≥q^(−d)。',
      r'在紧区间[α−1,α+1]上，多项式导数连续，取C=max(1,sup|f′|)<∞。若|α−p/q|≤1，积分基本定理给 |f(p/q)−f(α)|≤C|p/q−α|，所以距离≥1/(Cq^d)。若距离>1，因为q≥1、C≥1，仍有距离≥1/(Cq^d)。取c=1/C完成下界。',
      r'若无理α具有题设任意阶逼近性质却为代数，取m=d+1。不同的近似分数中分母必无界：在距离α小于1的有界区间内，分母有固定上界时分子也有界，只能有有限个有理数。于是可选q>1/c，使q^(−d−1)<cq^(−d)，与下界矛盾。因此α超越。此初等下界指数为d，不把它称为更强的Roth指数2定理。$\square$')
