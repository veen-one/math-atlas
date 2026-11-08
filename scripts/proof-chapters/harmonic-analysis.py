"""Fourier inversion, L² extension, Haar completeness and uncertainty."""
def register(P, BASES):
    BASES['def-schwartz']=dict(title='Schwartz 函数与 Fourier 约定',statement='S(R) 指所有光滑函数 f，满足每个非负整数 m,k 都有 sup_x |x^m f^(k)(x)| 有限。Fourier 约定为 fhat(ω)=∫_R f(x)exp(-iωx)dx，逆变换带 1/(2π)。Lebesgue 实线测度按区间长度及 Borel 测度的完备化理解；此处给定该测度，不把其从外测度构造的存在定理当作已证明。')
    P('affine-lebesgue-change','analysis/measures analysis/convolution','Lebesgue 积分的平移与缩放',r'a≠0 时，对非负可测 h，有 ∫h(ax+b)dx=|a|⁻¹∫h(u)du；绝对可积时同样成立。','pi-lambda simple-approximation monotone-integral integral-linearity def-schwartz','先对区间长度验证，再用测度唯一性的 π—λ 论证推广到可测集合。',
      r'对区间 E，原像 {x:ax+b∈E} 的长度恰是 |a|⁻¹ times E 的长度。固定有界目标区间 J，比较 E⊆J 的这两个有限测度：一个是原像的长度，另一个是 |a|⁻¹倍长度；它们在所有区间与 J 的交上相同。',
      r'这些区间交组成含 J 的 π 系统，生成 J 中 Borel σ 代数。两有限测度相等的集合构成 λ 系统，所以 π—λ 定理使它们在所有 Borel 子集相等。令 J 递增覆盖实线，再用下连续性得所有 Borel 集相等。',
      r'完备化中的集合与 Borel 集只差零集子集，仿射原像保持 Borel 零集为零，因此等式也推广到 Lebesgue 可测集。对指标函数、简单函数、单调逼近依次应用，得到积分式；有符号函数拆正负部，复函数拆实虚部。$\square$')
    P('fourier-schwartz','analysis/fourier-transform','Fourier 变换保持 Schwartz 空间',r'若 f∈S(R)，则 fhat∈S(R)，并有 (fhat)^(k)=Fourier[(-ix)^k f]，Fourier[f′](ω)=iω fhat(ω)。','def-schwartz dominated-convergence ftc-second','多项式加权函数仍可积，因而可对频率任意次求导；反复分部积分控制频率尾部。',
      r'Schwartz 条件使任意 x^k f^(j)(x) 绝对可积：在 |x|≥1 时再多用两次衰减阶得到 C/x² 界，有限区间由连续性有界。',
      r'对频率差商，用复指数的积分导数表达使其被 |x| 控制；反复控制收敛允许任意次求导，给 (fhat)^(k)(ω)=∫(-ix)^kf(x)exp(-iωx)dx。',
      r'对上述积分分部积分 m 次，Schwartz 衰减使每次无穷端边界项为零，得到 ω^m(fhat)^(k) 是某个常数倍的 Fourier[(x^kf)^(m)]，其绝对值≤该函数的 L¹ 范数，有限且不依赖 ω。故所有需要的 Schwartz 半范数有限，同时给出导数变换公式。$\square$')
    P('fourier-inversion','analysis/fourier-transform applied/imaging-reconstruction','Schwartz 函数的 Fourier 反演定理',r'若 f∈S(R)，则 f(x)=(2π)⁻¹∫_R fhat(t)exp(itx)dt，对所有 x 成立。','fourier-schwartz gaussian-characteristic tonelli-fubini dominated-convergence affine-lebesgue-change','先给频率积分乘一个 Gaussian 截断，交换积分后得到空间近似恒等核。',
      r'fhat∈S，所以绝对可积。固定 ε>0，定义 I_ε(x)=(2π)⁻¹∫fhat(t)exp(itx)exp(-ε²t²/2)dt。代入 fhat 的定义，绝对双积分被 ‖f‖₁∫exp(-ε²t²/2)dt 控制，Fubini 可交换。',
      r'由 Gaussian Fourier 核公式，I_ε(x)=∫f(y)g_ε(x-y)dy=∫f(x-εz)g(z)dz；最后一步使用平移缩放换元。',
      r'f 连续有界，逐点 f(x-εz)→f(x)，由 ‖f‖∞g(z) 控制，故右侧趋于 f(x)。左侧被 |fhat| 控制，可令 ε↓0 得未截断逆积分。两边极限相等，证明反演。$\square$')
    P('plancherel-schwartz','analysis/fourier-transform analysis/hilbert-spaces','Schwartz 空间的 Parseval—Plancherel 恒等式',r'f,g∈S(R) 时，∫fhat(t)overline(ghat(t))dt=2π∫f(x)overline(g(x))dx。特别 ‖fhat‖₂²=2π‖f‖₂²。','fourier-inversion fourier-schwartz tonelli-fubini','把一个 Fourier 变换展开，交换积分后对另一函数使用反演。',
      r'由 f、ghat 均 L¹，∫∫|f(x)ghat(t)|dxdt=‖f‖₁‖ghat‖₁<∞，所以可以交换下面的复积分。',
      r'展开 fhat 后，左侧等于 ∫f(x)[∫exp(-itx)overline(ghat(t))dt]dx。内积分是 g 的反演公式取共轭后的 2πoverline(g(x))，故得到恒等式。取 g=f 即为范数等式。$\square$')
    P('general-l2-complete','analysis/hilbert-spaces analysis/normed-spaces','任意测度空间的 L² 完备性',r'任意测度 μ 上，按几乎处处相等识别的 L²(μ) 在内积 ∫f overline(g)dμ 下完备；适用于实、复函数。','l2-completeness integral-linearity monotone-integral dominated-convergence','逐项核对概率空间的证明，所有估计只依赖积分而不依赖总质量为一。',
      r'柯西—施瓦茨证明中的 2|fg|≤|f|²+|g|²、非负平方积分及最优系数计算在任意测度下均成立，复数系数使用共轭即可。积分为零的非负函数在阈值 1/k 的集合上测度为零，故内积按零等价类正定；三角不等式同样由展开平方得到。',
      r'对任意 L² 柯西列，照已展开的 L² 完备性证明抽取步长≤2^(-k) 的子列，令 S_N=|f_(n₁)|+Σ_(k≤N)|差值|。L² 三角不等式给统一范数界，单调收敛给 ∫S²<∞，所以 S 有限几乎处处。',
      r'子列逐点绝对收敛到 f，且平方差被 4S² 控制；控制收敛给 L² 收敛，原列柯西性再给整列收敛。每一步都已说明其积分依据，未使用 μ(Ω)=1，所以任意测度版本成立；复函数按实虚部处理。$\square$')
    P('schwartz-density','analysis/fourier-transform analysis/hilbert-spaces','Schwartz 函数在 L²(R) 中稠密',r'S(R) 在 Lebesgue L²(R) 中稠密；有限个有界区间指标的线性组合也在该空间稠密。','general-l2-complete projection-closed-subspace gaussian-characteristic tonelli-fubini pi-lambda def-schwartz','先把区间指标平滑成 Schwartz 函数，再证明与所有区间指标正交的函数只能为零。',
      r'对有限区间 I，令 v_ε=1_I*g_ε。每次对 x 求导都可在有限 y 区间内进行，Gaussian 导数是多项式乘 Gaussian，故 v_ε 光滑且任意阶导数在远处快速衰减，属于 S。',
      r'0≤v_ε≤1，在 I 两端之外逐点趋于 1_I：内点时 Gaussian 核落出区间的尾概率趋零，外点同理。对 ε≤1，在足够远处 |x-y|≥|x|/2≥1，ε⁻¹exp(-|x-y|²/(2ε²)) 不超过常数 exp(-x²/8)。因此中央有界区间用常数、尾部用 Gaussian 即给统一平方可积控制，DCT 使 v_ε→1_I 于 L²。',
      r'若 h∈L² 与 S 全正交，由上一步及柯西—施瓦茨，它与每个区间指标也正交，即任意有限区间积分为零。固定有界区间 J，h 在其中 L¹。对 Borel E⊆J 令 ν(E)=∫_E h，实虚部分分别为有限符号测度。',
      r'ν 在区间交上全为零；ν(J)=0，且零值集合对补及不交可数并封闭（可数可加性由 |h| 控制的收敛给出）。π—λ 定理使 ν 对 J 的全部 Borel 子集为零，完备化把结论推广到 Lebesgue 子集。取实、虚部正负集，得 h=0 几乎处处于 J；可数 J 覆盖实线后仍成立。',
      r'令 M 为 S 的 L² 闭包。Hilbert 投影定理使任意函数分解为 M 元素与其正交补，而刚证正交补只有零，所以 M=L²。对区间指标张成空间也用相同正交论证，得到第二个稠密性结论。$\square$')
    P('plancherel-l2','analysis/fourier-transform analysis/hilbert-spaces','L² Fourier 变换的 Plancherel 定理',r'在 S 上定义的 U f=(2π)⁻¹/²fhat，唯一延拓为 L²(R) 到自身的酉算子。','plancherel-schwartz schwartz-density general-l2-complete fourier-inversion fourier-schwartz','密集子空间上的等距映射可由柯西列唯一延拓；反演使像也包含同一密集子空间。',
      r'给 f∈L²，选 f_n∈S 且 f_n→f。Schwartz Plancherel 使 ‖Uf_n-Uf_m‖₂=‖f_n-f_m‖₂，所以像列柯西，L² 完备给极限。两种逼近的差范数趋零，故定义与逼近无关，给唯一连续延拓 U。',
      r'取极限保留线性、内积和范数。等距映射的像闭：若 Uf_n 在像中收敛，f_n 也柯西，极限 f 存在且像为 Uf。',
      r'Schwartz Fourier 保持 S，反演说明每个 Schwartz 函数都来自某个 Schwartz 函数：具体逆为同样常数乘反射 Fourier。故像含稠密 S；既闭又稠密，只能为全部 L²。因此 U 满射且等距，即为酉算子。$\square$')
    P('convolution-l1','analysis/convolution applied/imaging-reconstruction','L¹ 卷积及卷积定理',r'f,g∈L¹(R) 时，(f*g)(x)=∫f(y)g(x-y)dy 几乎处处绝对存在，‖f*g‖₁≤‖f‖₁‖g‖₁，且 Fourier(f*g)=fhat·ghat。','tonelli-fubini affine-lebesgue-change','绝对值双积分恰好分成两个范数，因此交换次序合法。',
      r'非负 Tonelli 与平移换元给 ∫∫|f(y)g(x-y)|dydx=∫|f(y)|[∫|g(x-y)|dx]dy=‖f‖₁‖g‖₁。有限性保证几乎每个 x 的内积分有限，并给卷积的 L¹ 界。',
      r'在 Fourier 积分中展开卷积，绝对值仍被同一双积分控制，故 Fubini 合法。对固定 y 作 u=x-y，得到 exp(-itx)=exp(-ity)exp(-itu)，内积分为 exp(-ity)ghat(t)，外积分成为 fhat(t)ghat(t)。$\square$')
    P('young-l1-l2','analysis/convolution analysis/linear-operators','Young 的 L¹—L² 卷积界',r'若 f∈L¹(R)、g∈L²(R)，则 f*g∈L² 且 ‖f*g‖₂≤‖f‖₁‖g‖₂。','general-l2-complete tonelli-fubini affine-lebesgue-change','对有限权重 |f(y)|dy 用柯西—施瓦茨，再积分消去平移。',
      r'‖f‖₁=0 时结论直接成立。否则对几乎每个 x，权重 Cauchy—Schwarz 给 |∫f(y)g(x-y)dy|²≤‖f‖₁∫|f(y)||g(x-y)|²dy。非负 Fubini 保证右侧几乎处处有限，因此左侧绝对积分也有定义。',
      r'再对 x 积分并用平移不变性，右侧总积分为 ‖f‖₁∫|f(y)|‖g‖₂²dy=‖f‖₁²‖g‖₂²。开平方得到范数界。$\square$')
    P('haar-basis','analysis/wavelets analysis/hilbert-spaces','Haar 小波的 L² 正交完备性',r'ψ_jk=2^(j/2)(1_[k2^(-j),(k+1/2)2^(-j))-1_[(k+1/2)2^(-j),(k+1)2^(-j)))，j,k∈Z，是 L²(R) 的标准正交基。','schwartz-density general-l2-complete','不同尺度的小波由零均值正交；把任意 dyadic 区间指标分解成祖先上的小波和趋零残差。',
      r'每个小波支持长度 2^(-j)，两半符号相反，积分零，平方积分一。同尺度不同 k 支持不交；不同尺度时，细区间若与粗区间相交，就包含于粗小波的某一常值半区，内积为常数乘细小波积分零。故标准正交。',
      r'对 dyadic 区间 I，记 φ_I=1_I/√|I|。若 J 为其父区间，按 I 为左半或右半，有 φ_I=(φ_J±ψ_J)/√2。重复 M 层，得到 φ_I 为有限 Haar 线性组合加上 2^(-M/2)φ_(祖先)，后项 L² 范数趋零。',
      r'任意有界区间可用有限个同层 dyadic 区间的并逼近，端点处对称差长度至多 2·2^(-j)，所以指标的 L² 误差趋零。区间指标张成空间已证稠密，因此 Haar 张成空间稠密，完成正交基证明。$\square$')
    P('stft-moyal','analysis/time-frequency analysis/wavelets','短时 Fourier 变换的 Moyal 能量恒等式',r'对 f,g∈S(R)，定义 V_gf(t,ω)=∫f(x)overline(g(x-t))exp(-iωx)dx，则 (2π)⁻¹∫∫|V_gf(t,ω)|²dωdt=‖f‖₂²‖g‖₂²。','plancherel-schwartz tonelli-fubini affine-lebesgue-change','每个时间窗内对局部信号用 Plancherel，再把全部平移窗的能量相加。',
      r'固定 t，h_t(x)=f(x)overline(g(x-t)) 仍为 Schwartz 函数。其 Fourier 变换正是 V_gf(t,ω)。Plancherel 给 (2π)⁻¹∫|V_gf(t,ω)|²dω=∫|f(x)|²|g(x-t)|²dx。',
      r'对 t 积分，所有项非负，Tonelli 可以交换。平移换元给内积分 ∫|g(x-t)|²dt=‖g‖₂²，与 x 无关，所以总值为两范数平方之积。若窗范数为一，STFT 保持该归一化的总能量。$\square$')
    P('heisenberg-uncertainty','analysis/time-frequency analysis/fourier-transform','Heisenberg 不确定性不等式',r'对非零 Schwartz 函数 f，‖xf‖₂‖ωfhat‖₂≥√(2π)‖f‖₂²/2。归一化并去掉位置与频率均值后，两个标准差乘积至少 1/2。','plancherel-schwartz fourier-schwartz general-l2-complete affine-lebesgue-change','分部积分将位置与导数的乘积固定为范数，再用 Cauchy—Schwarz。',
      r'快速衰减使无穷端 x|f(x)|² 为零。对其导数积分，得 ∫|f|²=-2Re∫x f′ overline(f)。所以 ‖f‖₂²≤2‖xf‖₂‖f′‖₂。',
      r'由 Fourier 导数公式及 Plancherel，‖f′‖₂=‖ωfhat‖₂/√(2π)，代入得到不等式。',
      r'平移 f 改变位置均值而不改变位置方差；乘 exp(iω₀x) 使 Fourier 变量平移，改变频率均值而不改变频率方差。这两公式由定义及仿射换元直接得到。对中心化后的函数用前式，并按空间密度 |f|²/‖f‖₂² 与频率密度 |fhat|²/(2π‖f‖₂²) 计算标准差，即得乘积至少 1/2。$\square$')
