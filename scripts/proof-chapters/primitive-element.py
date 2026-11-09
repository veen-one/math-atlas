"""Separable extensions and the primitive element theorem."""
def register(P, BASES):
    P('characteristic-zero-separable','algebra/field-extensions numbertheory/number-fields','特征零域的代数扩张可分',r'特征零域 F 上每个不可约多项式都没有重根。因此 F 上每个代数元素都可分。','polynomial-bezout minimal-polynomial splitting-field-exists','不可约多项式与其次数更低的非零导数互素，Bezout 恒等式排除共同根。',
      r'设首一不可约 f 的次数 d≥1。其形式导数首项系数为 d，特征零使其非零，故 deg f′=d−1。不可约性与次数比较使 gcd(f,f′)=1。多项式 Bezout 给 A f+B f′=1。',
      r'若分裂域中 a 是重根，写 f=(x−a)^m h、m≥2，直接求导使 f′(a)=0，同时 f(a)=0，代入 Bezout 恒等式得0=1，矛盾。故所有根互异。对任意代数元素的最小多项式应用此结论，即得可分性。$\square$')
    P('primitive-element-theorem','algebra/field-extensions numbertheory/number-fields','有限可分扩张的本原元素定理',r'每个有限可分域扩张 K/F 都有 θ∈K 使 K=F(θ)。特别地每个数域 K 都是某个代数数 θ 的单扩张 Q(θ)。','minimal-polynomial polynomial-bezout splitting-field-exists finite-subgroup-cyclic characteristic-zero-separable basis-extension','无限基域时选线性组合以避免有限个根碰撞，用最大公因式恢复两个原生成元；有限域则用乘法群生成元。',
      r'先设 F 无限，K=F(α,β)，且 α、β 都在 F 上可分。取它们最小多项式 f,g 的共同分裂扩张（先分裂 f，再分裂 g），枚举根 α=α₁,…,α_r 与 β=β₁,…,β_s，均互异。',
      r'选非零 c∈F，使对所有 i 及 j≠1 有 α_i+cβ_j≠α+cβ。被排除的 c 每对至多一个，共有限个，而 F 无限，故可选。令 θ=α+cβ、E=F(θ)。E[x] 中 g(x) 与 f(θ−cx) 有共同根 β。若 β_j 为另一共同根，则 θ−cβ_j=α_i 对某 i，即 α_i+cβ_j=θ，与选择矛盾。故它们在共同分裂扩张中仅有共同根 β。',
      r'g 无重根，因此这两个多项式在分裂扩张中的首一最大公因式为 x−β。另一方面，在 E[x] 用 Euclid 算法所得首一最大公因式 d，在任何扩域后仍为最大公因式：d 整除二者的等式保持，且原域中的 Bezout 恒等式 d=A g+B f(θ−cx) 使扩域中的任意公因式都整除 d。于是 d=x−β∈E[x]，由常数系数得 β∈E，进而 α=θ−cβ∈E。所以 K=E。',
      r'一般有限 K/F 可由有限个元素生成：取有限向量空间基，其生成的子域包含整组基，因而包含 K 中所有基的线性组合。可分扩张的每个元素都可分，故逐次对“已合并的单个生成元”和下一个生成元应用二元素结论，有限归纳得到一个 θ。',
      r'若 F 有限，K 是有限维 F 向量空间，故 K 也是有限域。其非零元素构成域乘法群的有限子群，已证它循环。取生成元 θ，则 K 的所有非零元素为 θ 的整数幂，都在 F(θ)，零也在其中，故 K=F(θ)。最后数域有限扩张 Q，特征零可分性已证明，套用即得数域结论。$\square$')
