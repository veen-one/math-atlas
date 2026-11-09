"""Pointwise limits preserve measurability, with the real-density dependency proved."""
def register(P, BASES):
    P('rational-density','analysis/completeness-reals analysis/measurable-functions','有理数在实数中的稠密性',r'任意实数 a<b 之间都存在有理数 q，即存在 q∈Q 使 a<q<b。','archimedean axiom-natural axiom-real','先用 Archimedes 性质把区间放大到长度大于一，再在有限整数区间中选最小的越过端点的整数。',
      r'由 Archimedes 性质取正整数 n，使 n(b−a)>1，等价于 1/n<b−a。再取正整数 M>|na|+2；于是区间 [−M,M] 中的整数集合有限，并包含至少一个大于 na 的整数 M。',
      r'在有限集合 {k∈Z:−M≤k≤M 且 k>na} 中取最小元素 m。m>na；且 m−1≤na，否则 m−1 也是集合中的整数并小于 m，违反最小性。因此 0<m−na≤1。',
      r'令 q=m/n。因 n>0，na<m 给 a<q；又 m≤na+1 给 q≤a+1/n<b。故 a<q<b 且 q 为有理数，证明稠密性。有限有序集合有最小元由有限个整数逐一比较即可。$\\square$')
    P('pointwise-limit-measurable','analysis/measurable-functions analysis/function-sequences','实值可测函数列的逐点极限可测',r'设 (X,Σ) 是可测空间，每个 f_n:X→R 关于 Σ 与 R 的 Borel σ 代数可测，并且对每个 x，f_n(x)→f(x)∈R。则 f 可测。','axiom-measure rational-density','把极限值严格大于阈值写成有理阈值以上的最终下界事件的可数并。',
      r'先证判据：实值函数 g 可测，当且仅当每个开射线原像 {g>a} 属于 Σ。正向由 (a,∞) 是 Borel 集。反向，任意开集 O⊆R 是所有包含于 O 的有理端点开区间 (p,q) 的并；这些区间至多可数，因为 Q×Q 可数。若 x∈O，则可在 O 中含 x 的小开区间两侧各取一个有理数，故该并确为 O。又 {p<g<q}={g>p}∩{g<q}，而由有理稠密性 {g<q}=∪_(r∈Q,r<q){g≤r}=∪_(r∈Q,r<q)(X\\{g>r})。所以所有开集的原像均可测。',
      r'固定任意 a∈R。对有理 q>a 与整数 N≥1，令 E_(q,N)=∩_(n≥N){x:f_n(x)>q}。各 {f_n>q} 可测，σ 代数对可数交封闭，故 E_(q,N) 可测；再令 E=∪_(q∈Q,q>a)∪_(N≥1)E_(q,N)，它仍可测。',
      r'若 f(x)>a，由有理稠密性可取 q∈Q 使 a<q<f(x)。取 δ=(f(x)−q)/2>0。由 f_n(x)→f(x)，存在 N 使 n≥N 时 |f_n(x)−f(x)|<δ，故 f_n(x)>f(x)−δ>q。因此 x∈E_(q,N)⊆E。',
      r'反过来，若 x∈E，则存在 q∈Q、q>a 与 N，使所有 n≥N 都有 f_n(x)>q。令 n 趋于无穷并使用 f_n(x)→f(x)，得到 f(x)≥q>a，故 x∈{f>a}。因此 {f>a}=E。',
      r'对每个实数 a，集合 {f>a} 可测。由第一步判据，f 的每个开集原像可测，即 f 是 Borel 可测函数。结论限于逐点收敛到有限实值函数；扩展实值版本还须处理无穷阈值。$\\square$')
