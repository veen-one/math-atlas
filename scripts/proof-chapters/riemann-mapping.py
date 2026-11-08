"""Existence of the normalized Riemann map, with its zero-counting preliminaries."""
def register(P, BASES):
    P('complex-exponential-entire','analysis/holomorphic-functions','复指数级数的全纯性、加法公式与非零性',r'E(z)=Σ_(n≥0)z^n/n! 为整函数，E′=E、E(0)=1，且 E(z+w)=E(z)E(w)、E(z)≠0。','weierstrass-m holomorphic-compact-limit complex-basic-rules contour-estimate','级数及导数级数局部一致收敛；乘积求导使 E(z)E(−z) 恒为一。',
      r'对 |z|≤R，级数受 ΣR^n/n! 控制，后者充分后相邻比 R/(n+1)≤1/2，故收敛。多项式部分和局部一致收敛，紧集极限定理给 E 全纯且可令导数取极限；形式导数级数仍为 E，故 E′=E。常数项给 E(0)=1。',
      r'求导 E(z)E(−z)，两项抵消，导数零。沿任意线段用端点公式，乘积恒为其在零点值一，所以 E 从不为零。固定 w，对 E(z+w)/E(z) 求导为零，故恒为在 z=0 的值 E(w)。移项得加法公式。$\square$')
    P('holomorphic-square-root','analysis/conformal-maps analysis/analytic-continuation','单连通域上非零全纯函数的全纯平方根',r'单连通域 Ω 上处处不为零的全纯函数 h 存在全纯 g，满足 g²=h 且 g 处处非零。','cauchy-simply-connected holomorphic-taylor complex-exponential-entire fundamental-algebra','对 h′/h 取全局原函数，以指数消去对数导数。',
      r'h′ 全纯，由局部幂级数可反复求导；h 无零点，所以 h′/h 全纯。单连通域的原函数定理给 P′=h′/h。',
      r'令 C(z)=h(z)E(−P(z))，链式法则与 E′=E 给 C′=h′E(−P)−hP′E(−P)=0。域内折线路径端点公式使 C 恒为某个 c≠0。',
      r'取 c 的非零平方根 b（由代数基本定理），令 g=bE(P/2)。指数加法公式给 g²=cE(P)=h，且指数非零使 g 处处非零。$\square$')
    P('argument-principle-square','analysis/holomorphic-functions analysis/residues','方形围道的辐角原理（全纯无极点版）',r'f 在闭轴平行方形 Q 的邻域全纯，边界无零点，则 (2πi)⁻¹∫∂Q f′/f 等于 Q 内部零点总重数。','holomorphic-taylor holomorphic-identity goursat-triangle cauchy-square-formula','挖去各零点的小方形，用 Goursat 抵消其余区域；每个 m 重零点贡献 m。',
      r'f 不恒零，因为边界无零。零点由局部幂级数的最低非零项而孤立。闭 Q 的零点只有有限个：若无限，紧致性给聚点；边界连续且非零排除聚点在边界，内部聚点则由恒等定理迫使 f 恒零，矛盾。',
      r'围每个内部零点 a_j 取互不交、闭包含在 Q 内的轴平行小方形 S_j，足够小以使 f(z)=(z−a_j)^(m_j)h_j(z)，h_j 全纯无零。Q 去掉这些小方形内部后，f′/f 在该紧区域附近全纯。用各方形边的全部横、纵坐标画有限网格，剩余矩形再二分成三角形，逐块 Goursat 后公共边抵消，得外边界积分为各内边界积分之和。',
      r'在 S_j 上 f′/f=m_j/(z−a_j)+h_j′/h_j。后一项全纯，方形边界积分零；前一项的积分由 Cauchy 核计算等于 2πi m_j。求和并除以 2πi 得总重数。$\square$')
    P('rouche-square','analysis/holomorphic-functions analysis/residues','Rouché 定理（方形围道版）',r'f,g 在闭方形 Q 邻域全纯，若 ∂Q 上 |g−f|<|f|，则 f 与 g 在 Q 内部的零点总重数相同。','argument-principle-square contour-estimate intermediate-value','在 f 与 g 间作线性同伦，边界无零使零点计数成为连续整数值函数。',
      r'设 f_t=f+t(g−f)，0≤t≤1。边界有 |f_t|≥|f|−|g−f|>0。边界紧且上述差连续，存在共同正下界 δ，不依赖 t。',
      r'N(t)=(2πi)⁻¹∫∂Q f_t′/f_t 按辐角原理为非负整数。分子分母对 (t,z) 连续且分母≥δ，故被积函数随 t 一致连续，长度估计使 N 连续。连续整数值函数在区间上恒定：若两个值不同，实介值定理会给非整数中间值。因此 N(0)=N(1)，结论成立。$\square$')
    P('holomorphic-injective-inverse','analysis/conformal-maps','全纯开映射与单叶映射的全纯逆',r'域 Ω 上非恒定全纯 f 为开映射。若 f 单射，则 f′ 处处非零，且 f⁻¹:f(Ω)→Ω 全纯，导数为 1/f′(f⁻¹(w))。','maximum-modulus holomorphic-taylor holomorphic-identity rouche-square','用最小边界模与倒数最大模证明开性；若零点重数大于一，Rouché 产生多个不同原像。',
      r'固定 a，局部幂级数及恒等定理使 f−f(a) 在 a 附近只有该零点。取充分小闭圆盘 B⊂Ω，中心 a，边界 |f−f(a)| 的最小值 δ>0。若 |w−f(a)|<δ/2 且 w≠f(a)，却没有原像在 B 内，则 1/(f−w) 在闭盘附近全纯。边界模至多 2/δ，中心模却大于 2/δ，违反最大模原理。因此 B 的像包含 f(a) 的邻域。任意开子域中同样可选小盘，故 f 开。',
      r'若 f 单射却 f′(a)=0，令 f−f(a) 的零点重数为 m≥2。取充分小闭方形 Q，仅含该零点。Rouché 保证充分近 f(a) 的每个 w，其 f−w 在 Q 内有 m 个连重数的零点。f′ 不恒零，其在闭 Q 内只有有限个零点；取 w 避开这些点的有限个像。于是 f−w 的所有零点皆简单，总共有 m 个不同原像，与单射矛盾。故 f′(a)≠0。',
      r'开映射与单射使逆连续。固定 w=f(z)，令 k=f⁻¹(w+h)−z，h→0 时 k→0；当 h≠0，单射使 k≠0，且 h=f(z+k)−f(z)。因此逆差商 k/h 趋于 1/f′(z)，逆全纯且导数如述。$\square$')
    P('hurwitz-univalent-limit','analysis/function-sequences analysis/conformal-maps','Hurwitz 零点结论与单叶极限',r'域 Ω 上全纯 f_n 紧集上一致收敛至 f。若 f_n 都无零，则 f 恒零或处处无零；若 f_n 都单射，则 f 恒定或单射。','holomorphic-compact-limit rouche-square holomorphic-identity','极限的孤立零点在小方形中有正重数，Rouché 迫使逼近函数也有零点。',
      r'若 f 不恒零却 f(a)=0，取小闭方形 Q⊂Ω，其内只有此零点且边界无零。边界 |f| 有正最小值；一致收敛使充分后 |f_n−f|<|f| 于边界。Rouché 给 f_n 在 Q 内有相同正零点数，违背无零假设。',
      r'若 f 不恒定且 f(a)=f(b)、a≠b，考虑 g_n(z)=f_n(z)−f_n(b)，其紧集极限为 g(z)=f(z)−f(b)，不恒零。取围绕 a 的小闭方形 Q，避开 b，且 g 在边界无零、内部零点重数正。单射使 g_n 在 Q 内无零，但 Rouché 又迫使它最终有零点，矛盾。因此 f 单射。$\square$')
    P('bounded-univalent-seed','analysis/conformal-maps','单连通真域存在到圆盘的单叶映射',r'非空单连通真域 Ω⊊C 及 a∈Ω，存在单射全纯 f:Ω→D，满足 f(a)=0 且 f′(a)>0。','holomorphic-square-root holomorphic-injective-inverse disk-automorphisms','对域外点的平方根取一个分支；其像与负像不交，从而倒数映射有统一界。',
      r'取 b∈C\Ω，对无零函数 z−b 取全纯平方根 g。若 g(z₁)=g(z₂)，平方后得 z₁−b=z₂−b，故 g 单射；同样 g(Ω) 与 −g(Ω) 不交，因为 g(z₁)=−g(z₂) 会迫使 z₁=z₂ 且 g=0，不可能。',
      r'g 开映射，故有 ε>0 使 B(g(a),ε)⊂g(Ω)。取负后 B(−g(a),ε)⊂−g(Ω)，与 g(Ω) 不交。因此 |g(z)+g(a)|≥ε，h(z)=ε/[2(g(z)+g(a))] 全纯单射，且 |h(z)|≤1/2<1。',
      r'复合圆盘自同构 φ_(h(a)) 使 a 映为零，仍单射全纯。单叶映射导数非零，再乘适当单位复数，使在 a 的导数成为正实数，所求种子映射存在。$\square$')
    P('riemann-mapping-existence','analysis/conformal-maps','黎曼映射定理（存在性、归一化与唯一性）',r'非空单连通真域 Ω⊊C 与 a∈Ω，存在唯一双全纯 F:Ω→D 满足 F(a)=0、F′(a)>0。','bounded-univalent-seed montel-locally-bounded hurwitz-univalent-limit holomorphic-compact-limit holomorphic-square-root disk-automorphisms holomorphic-injective-inverse normalized-riemann-map-unique','在归一化单叶圆盘映射中最大化导数；若像漏掉一个点，开平方的构造会严格增大导数。',
      r'令 A 为所有单射全纯 f:Ω→D 且 f(a)=0、f′(a)>0 的集合。种子引理使它非空。取围绕 a 且闭包含于 Ω 的固定方形 Q，Cauchy 一阶估计及 |f|≤1 给 f′(a) 的统一有限上界。令 M=sup_(f∈A)f′(a)，则 0<M<∞，可选 f_n 使 f_n′(a)→M。',
      r'由 |f_n|≤1 与 Montel，有子列紧集上一致收敛至 F，全纯极限定理给 F(a)=0、F′(a)=M>0。故 F 非恒定，Hurwitz 单叶极限结论使 F 单射。又 |F|≤1，若内部某点模等于一，最大模原理使 F 恒定，矛盾。因此 F:Ω→D 且 F∈A，导数极值真正取到。',
      r'反设 F(Ω) 漏掉 c∈D。因为 F(a)=0，c≠0。令 u=φ_c∘F，u:Ω→D 全纯单射且无零，取全纯平方根 v²=u。由 |u|<1 得 |v|<1；v 相等会使 u 相等，故 v 单射。令 b=v(a)，则 |b|²=|u(a)|=|c|，所以 0<|b|<1。',
      r'令 G=φ_b∘v，则 G(a)=0、G 单射且映入 D。利用 2v(a)v′(a)=u′(a)、|φ_c′(0)|=1−|c|² 与 φ_b′(b)=1/(1−|b|²)，计算 |G′(a)|=[(1−|c|²)/(2|b|(1−|b|²))]M=[(1+|b|²)/(2|b|)]M。因 (1−|b|)²>0，括号严格大于一。',
      r'将 G 乘单位复数使导数为正实，得到 A 中导数大于 M 的映射，矛盾。因此 F(Ω)=D。单叶映射逆定理使 F⁻¹ 全纯；归一化映射唯一性已另证，故存在唯一所列双全纯映射。$\square$')
