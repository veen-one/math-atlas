"""Lying over, going up, incomparability and dimension for integral domains."""
def register(P, BASES):
    P('integral-domain-field-test','algebra/dimension-theory algebra/field-extensions','整域整扩张中的域判据',r'若整域 R⊆S 且 S 对 R 整，则 R 是域当且仅当 S 是域。整性在取商和同时局部化后保持。','def-integral-extension','一边用代数元素的首一关系求逆，另一边对已有逆的整关系消去分母。',
      r'若 R 是域、s∈S 非零，取 s 的最低次数首一整关系。常数项不能为零，否则在整域中约去 s 得到更低次首一关系。因此常数项 a₀∈R 非零可逆，将关系除以 s 并解出 s⁻¹，得到 S 中的逆。',
      r'若 S 是域、r∈R 非零，则 r⁻¹∈S 整，对其首一关系乘 r 的适当幂，得到 r⁻¹∈R（与有限模整性证明的同一步计算），故 R 是域。',
      r'对商环，将整关系逐系数取商仍首一。对乘法集 U⊆R，若 s 满足次数m首一关系，s/u 满足把各系数除以 u 的适当幂后的首一关系，系数在 U⁻¹R 中，所以 U⁻¹S 对 U⁻¹R 整。$\square$')
    P('integral-lying-over','algebra/dimension-theory algebra/prime-ideals','整域整扩张的素理想上覆定理',r'整域整扩张 R⊆S 中，每个素理想 p⊆R 都是 S 中某个素理想 q 的收缩：q∩R=p。','integral-domain-field-test axiom-zorn localization-module-universal','在 p 处局部化，取扩张环的极大理想；其收缩由整域域判据成为基环的唯一极大理想。',
      r'令 U=R\p。局部化 R_p⊆U⁻¹S 是非零整域扩张，且整性保持。R_p 中分子不在 p 的分数为单位；分子在 p 的分数构成真理想 pR_p，所以它是唯一极大理想。真性由交叉乘法及 p 的素性验证，1不可能属于该理想。',
      r'由 Zorn 在非零含幺环 U⁻¹S 中取极大理想 m。其收缩 n=m∩R_p 为素理想，商 R_p/n 单射进入域 (U⁻¹S)/m，且为整扩张。域判据使 R_p/n 为域，所以 n 极大，只能是 pR_p。',
      r'把 m 沿 S→U⁻¹S 收缩为 q，素性由同态下素理想收缩直接得到。对 r∈R，r∈q 当且仅当 r/1∈pR_p，当且仅当 r∈p；后一等价由分数关系及 p 素性得到。因此 q∩R=p。$\square$')
    P('integral-going-up-incomparability','algebra/dimension-theory algebra/prime-ideals','整域整扩张的上升与不可比性',r'整域整扩张 R⊆S 中：(1) 若 p⊆p′ 为 R 的素理想、q∩R=p，则存在 q′⊇q 使 q′∩R=p′；(2) 若 q⊆q′ 且收缩相同，则 q=q′。','integral-lying-over integral-domain-field-test','上升在商环中应用上覆；不可比性在共同收缩处局部化，使商成为域。',
      r'因 q∩R=p，R/p 单射进入整域 S/q，且取商保持整性。对 p′/p 应用上覆，得到 S/q 中的素理想，其在 S 的原像 q′ 包含 q 且收缩为 p′。这证明上升。',
      r'证明不可比性：设 q⊆q′、收缩均为 p，令 U=R\p。两理想都避开 U，局部化后仍为素理想 Q⊆Q′。局部化素性的直接检验是：分数乘积在扩张理想中，清分母后由原素性判断某因子在原理想；其收缩仍为原素理想，因为 U 与该素理想不交。',
      r'整域 (U⁻¹S)/Q 整于 R_p/pR_p，后者为域，所以前者按域判据也是域。于是 Q 极大，包含它的真素理想 Q′ 只能等于 Q。沿 S 收缩即得 q′=q。$\square$')
    P('integral-extension-dimension','algebra/dimension-theory','整域整扩张保持 Krull 维数',r'若整域 R⊆S 为整扩张，则 dim R=dim S，允许维数无穷。Krull 维数定义为有限严格素理想链长度的上确界。','integral-going-up-incomparability integral-lying-over','收缩链由不可比性保持严格，反向用上覆起步再逐层上升。',
      r'任取 S 的严格素链 q₀⊊…⊊q_l。收缩给 R 的包含链；若相邻收缩相同，不可比性迫使 q_i=q_(i+1)，矛盾。因此收缩仍严格，l≤dim R，故 dim S≤dim R。',
      r'任取 R 的严格素链 p₀⊊…⊊p_l。上覆先取 q₀ 收缩为 p₀，再逐次上升得 q_i⊆q_(i+1)、收缩分别为 p_i,p_(i+1)。收缩不同使这些包含严格，因此 S 有同长度素链。对全部有限链取上确界，得 dim R≤dim S。',
      r'两不等式合并即得相等。该结论本身尚不计算多项式环的维数；需要另证 dim k[t₁,…,t_r]=r 才能结合 Noether 正规化完成有限生成整环的维数公式。$\square$')
