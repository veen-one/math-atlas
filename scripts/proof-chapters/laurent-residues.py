"""Local Laurent expansion, singularities and a weighted residue theorem."""
def register(P, BASES):
    P('removable-singularity','analysis/holomorphic-functions analysis/analytic-continuation','Riemann 可去奇点定理',r'若 f 在 0<|z−a|<R 全纯且在 a 附近有界，则 f 可唯一全纯延拓到 a。','holomorphic-taylor complex-basic-rules','乘以二次因子后填零，差商在中心趋零，再用 Taylor 展开除回因子。',
      r'令 h(z)=(z−a)²f(z)（z≠a）、h(a)=0。若 |f|≤M，则 |h(z)|≤M|z−a|²，故 h 在 a 连续；差商 h(z)/(z−a) 的模≤M|z−a|→0，所以 h′(a)=0。别处 h 全纯，因此 h 在整盘全纯。',
      r'Taylor 展开 h(z)=Σ_(n≥2)b_n(z−a)^n，常数和一次项为零。于是 Σ_(n≥2)b_n(z−a)^(n−2) 在较小圆盘全纯，并在穿孔盘与 f 相等；填入 b₂ 就得到延拓。它与原 f 在其余区域拼接为全盘全纯函数。唯一性由中心连续性，或恒等定理得到。$\square$')
    P('local-laurent-expansion','analysis/residues analysis/analytic-continuation','孤立奇点的 Laurent 展开、唯一性与主部',r'f 在穿孔盘 0<|z−a|<R 全纯。则存在 r>0 及唯一系数 c_n（n∈Z），使 f(z)=Σ_(n≥0)c_n(z−a)^n+Σ_(m≥1)c_(−m)(z−a)^(−m) 在 0<|z−a|<r 成立，两部分在该穿孔盘各紧集上一致绝对收敛。负幂主部 P_a 在整个 C\{a} 上全纯。留数定义为 c_(−1)，等于 (2πi)⁻¹∫∂S f，其中 S 为充分小的正向中心方形。','goursat-triangle cauchy-square-formula holomorphic-compact-limit contour-estimate uniform-integration','在外方形与内方形间应用 Cauchy 核公式，分别展开两个几何级数。',
      r'取中心为 a、到边距离 r 的闭方形 Q⊂{|z−a|<R}。对 0<|z−a|<r，另取同心内方形 S，到边距离 s，满足 √2s<|z−a|，故 z 在 S 外。再围 z 挖一个与 S 不交的小方形。在 Q 去掉这两个内方形的区域，对 f(w)/(w−z) 使用有限矩形网格、三角剖分与 Goursat，内部边抵消。围 z 的小方形积分由局部 Cauchy 公式为 2πif(z)，所以 2πif(z)=∫∂Q f(w)/(w−z)dw−∫∂S f(w)/(w−z)dw。',
      r'外边界 |w−a|≥r>|z−a|，展开 1/(w−z)=Σ_(n≥0)(z−a)^n/(w−a)^(n+1)。内边界 |w−a|≤√2s<|z−a|，展开 1/(w−z)=−Σ_(m≥1)(w−a)^(m−1)/(z−a)^m。几何比严格小于一，边界上一致绝对收敛，允许积分与级数交换。于是 c_n=(2πi)⁻¹∫∂Q f(w)/(w−a)^(n+1)dw、c_(−m)=(2πi)⁻¹∫∂S f(w)(w−a)^(m−1)dw。',
      r'负系数不依赖内方形大小：任意两个同心方形之间，被积函数在闭方环附近全纯，有限三角剖分与内部边抵消使两边界积分相等。外系数也不依赖所选外方形，在两个外方形间作同样论证。因此这些是固定系数。',
      r'外系数估计 |c_n|≤length(∂Q)max∂Q|f|/(2πr^(n+1))，给正幂部分在 |z−a|<r 局部一致绝对收敛。对任何目标 |z−a|≥ρ>0，可把内方形取得 √2s<ρ，其负系数界为 |c_(−m)|≤length(∂S)max∂S|f|·(√2s)^(m−1)/(2π)。负幂部分因此在 |z−a|≥ρ 一致绝对收敛。ρ 任意，主部在 C\{a} 局部一致收敛，由全纯极限定理全纯。',
      r'对任意另一局部 Laurent 展开，选充分小的中心方形，乘 (z−a)^(−k−1) 后逐项积分。除了指数 −1 的项，所有整数幂均有单值原函数，积分零；指数 −1 项积分为 2πi。局部一致收敛允许逐项积分，故积分提取唯一的 c_k。k=−1 时即留数积分公式。$\square$')
    P('isolated-singularity-classification','analysis/residues analysis/analytic-continuation','孤立奇点分类及极点留数公式',r'孤立奇点处主部为空当且仅当奇点可去；主部恰有有限个负幂且最低幂为 −m 当且仅当该点为 m 阶极点。此时 Res(f,a)=h^(m−1)(a)/(m−1)!，其中 h(z)=(z−a)^m f(z) 全纯延拓且 h(a)≠0。其余不可去且非极点者称本性奇点。','local-laurent-expansion holomorphic-taylor removable-singularity','唯一 Laurent 系数把解析延拓与有限阶发散分别变成负幂系数条件。',
      r'若主部为空，正幂级数直接给全纯延拓。若已有全纯延拓，其 Taylor 展开也是局部 Laurent 展开，由唯一性负系数都为零。',
      r'若最低幂为 −m 且 c_(−m)≠0，h=(z−a)^mf 延拓为全纯函数且 h(a)=c_(−m)≠0，所以 f=h/(z−a)^m。这正是 m 阶极点定义，且 |f(z)|→∞。反向若有这种表示，将 h 的 Taylor 级数除以 (z−a)^m，唯一性给有限主部及最低阶。',
      r'f 的 −1 次系数恰为 h 的 m−1 次 Taylor 系数，等于 h^(m−1)(a)/(m−1)!，得公式。特别若 f=g/q、q(a)=0、q′(a)≠0 且 g(a)≠0，则 m=1，Res(f,a)=g(a)/q′(a)，因为 q(z)/(z−a) 在 a 的值为 q′(a)。若 g(a)=0，商可能可去，留数仍为零。$\square$')
    P('weighted-residue-theorem','analysis/residues analysis/cauchy-integral-theorem','有限孤立奇点的加权留数定理',r'设 Ω 单连通，f 在 Ω\{a₁,…,a_N} 全纯，γ 为避开这些点的分段 C¹ 闭曲线。定义 Ind(γ,a)=(2πi)⁻¹∫γ dz/(z−a)。则 ∫γ f(z)dz=2πiΣ_j Ind(γ,a_j)Res(f,a_j)，允许各孤立奇点为本性奇点。','local-laurent-expansion cauchy-simply-connected contour-estimate','减去每个奇点的完整主部，余函数在全域全纯；主部逐项积分只剩一次负幂。',
      r'对每个 a_j 取其局部主部 P_j，前引理保证它在 C\{a_j} 全纯。在 a_j 的小穿孔邻域，f−P_j 是全纯正幂级数，而其他 P_k 都在 a_j 附近全纯。因此 F=f−Σ_jP_j 可逐点填补全部 a_j，成为 Ω 上全纯函数。',
      r'由单连通 Cauchy 定理，∫γF=0。γ 的像紧且避开每个 a_j，主部级数在该像上一致绝对收敛，长度估计允许逐项积分。每个 m≥2 的 (z−a_j)^(−m) 在 C\{a_j} 有单值原函数 (z−a_j)^(1−m)/(1−m)，所以闭路积分为零。',
      r'仅 m=1 项留下 c_(−1)∫γ dz/(z−a_j)=2πiInd(γ,a_j)Res(f,a_j)。对 j 的有限和相加即得结论。本证明直接使用所定义的绕行积分权重；正向简单闭曲线内部权重为一、外部为零的拓扑结论仍需单独证明，不能默认为本解析推导的一部分。$\square$')
    P('casorati-weierstrass','analysis/analytic-continuation analysis/residues','Casorati–Weierstrass 定理',r'若 a 为 f 的孤立本性奇点，则每个充分小穿孔邻域的像在 C 中稠密。','removable-singularity isolated-singularity-classification holomorphic-taylor','若像漏掉一个圆盘，则取其中心的倒数成为有界函数；可去延拓迫使原奇点可去或为极点。',
      r'若某穿孔邻域的像不稠密，则有 w∈C、ε>0，使该邻域所有 z 满足 |f(z)−w|≥ε。于是 g=1/(f−w) 在该穿孔邻域全纯且有界，由可去奇点定理延拓为全纯 G。',
      r'若 G(a)≠0，连续性使它在 a 附近非零，f=w+1/G 全纯延拓，奇点可去，矛盾。若 G(a)=0，G 不能恒零，因为穿孔邻域内 g 非零；Taylor 展开使 G 在 a 有有限正阶零点，故 1/G 在 a 有有限阶极点，f=w+1/G 也为极点，仍矛盾。',
      r'两种情形都排除，因此像在 C 稠密。此结论不等于 Picard 定理：这里没有证明像覆盖所有复数或最多遗漏一个值。$\square$')
