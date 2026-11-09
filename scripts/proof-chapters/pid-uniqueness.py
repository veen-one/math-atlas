"""Unique invariant factors recovered from intrinsic primary filtrations."""
def register(P, BASES):
    P('pid-factorization-crt','algebra/modules algebra/ideals','PID 的唯一因子分解及互素商环分解',r'PID 中每个非零非单位元素唯一分解为不可约元乘积（不计顺序与单位）。若 a,b 互素，则 R/(ab)≅R/(a)⊕R/(b)。','def-pid noetherian-equivalence maximal-prime-quotient module-first-isomorphism','不可约元生成极大理想；升链条件保证分解终止，Bezout 恒等式给互素商的双射。',
      r'若非零非单位a不能分成有限个不可约元，它必为两个非单位的乘积，且至少一个因子仍不能分解。递归选择该因子产生严格升链(a)⊊(a₁)⊊(a₂)⊊…，违反PID的诺特升链条件。因此不可约分解存在。',
      r'若p不可约，任一包含(p)的理想为(d)，所以d整除p，只能d为单位或与p相伴，故(p)极大，因而素。两种不可约分解中，第一个不可约元由素性必须整除另一边某因子，与该因子相伴；约去后归纳，得到唯一性。',
      r'对(a,b)=R，映射R→R/(a)⊕R/(b)的核为(a)∩(b)=(ab)：若r=au=bv，且sa+tb=1，则r=rs a+rt b=ab(vs+ut)。满射可用sa+tb=1构造：tb在模a下为1、模b下为0，sa相反，所以给定两类有原像。第一同构定理给所列同构。有限多个两两互素因子的版本逐次应用。$\square$')
    P('pid-primary-multiplicities','algebra/modules','扭模素幂分量的内在重数',r'PID R 上有限生成扭模 T 的素幂循环分量重数由模本身唯一决定。对每个不可约元p和j≥1，dim_(R/(p))(p^(j−1)T/p^jT) 等于所有p幂分量中指数至少j者的个数。','pid-module-decomposition pid-factorization-crt','先由互素商分解拆成素幂分量，再计算每个分量在p幂过滤中的一维贡献。',
      r'存在性分解把 T 写为有限个R/(d_i)，因为扭模不可能含非零自由因子。每个d_i作不可约分解，再用互素商同构，得到有限个R/(p^e)的直和。',
      r'固定p。对q不与p相伴的q幂分量，Bezout使p的乘法可逆，故p^(j−1)分量与p^j分量相同，对商无贡献。对R/(p^e)，若j>e，两者皆零；若j≤e，该商由p^(j−1)的类生成，映射R→该商的核恰为(p)，所以是R/(p)上的一维空间。',
      r'有限直和与取这些子模、商相容，因此维数是所有e≥j分量数。该商由p消灭，自然为域R/(p)上的向量空间。其定义只用T及p的作用，在模同构下保持；所以c_j=上述维数是内在不变量。指数恰为j的分量数为c_j−c_(j+1)，从而所有素幂分量重数唯一。$\square$')
    P('pid-invariant-factors-unique','algebra/modules','PID 上有限生成模的不变因子唯一性',r'PID 上 M≅R^s⊕⊕_(i=1)^r R/(d_i)，其中非零非单位d₁|…|d_r，则s、r以及各d_i的相伴类都由M唯一决定。','pid-primary-multiplicities localization-module-universal','自由秩由分式域局部化恢复；扭部的各素幂指数按整除顺序从右向左补齐。',
      r'扭子模T={m:存在非零a使am=0}由M内在确定；在存在性分解中它正是全部有限循环商的和，因为自由部分无非零扭元素。商M/T≅R^s。以所有非零标量局部化得到分式域F上的F^s，其向量空间维数在同构下唯一，所以s唯一。',
      r'前一命题恢复T的每个p幂分量指数多重集。若T=0，r=0。否则在整除序列中d₁非单位，选其不可约因子p，则p整除每个d_i；故p幂分量数恰为r。其他素元的分量数至多r，所以r等于各素元分量数的最大值，是内在不变量。',
      r'对每个p，将已恢复的正指数升序排列，并在左端补零至长度r。由于d_i|d_(i+1)，这恰是各d_i中p的指数序列。有限个p的这些指数唯一确定d_i的不可约因子分解，PID唯一分解使d_i在相差单位元意义下唯一。域情形没有非单位不可约元，所有有限生成模均自由，已由第一步处理。$\square$')
