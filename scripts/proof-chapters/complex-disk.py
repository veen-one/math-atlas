"""Maximum modulus, Schwarz bounds and uniqueness of normalized conformal maps."""
def register(P, BASES):
    P('maximum-modulus','analysis/holomorphic-functions analysis/conformal-maps','最大模原理与边界最大值原理',r'连通开域 Ω 上全纯 f，若 |f| 在域内有局部最大值，则 f 恒定。若 Ω 有界，f 在闭包连续且在 Ω 全纯，则 max_(closure Ω)|f|=max_(boundary Ω)|f|。','holomorphic-taylor holomorphic-identity fundamental-algebra finite-dimensional-compactness','非恒定局部幂级数的最低非零项总有使模增长的方向。',
      r'设 a 是局部最大点。若 f(a)=0，附近 |f|≤0，故局部恒零，恒等定理使全域恒零。设 f(a)≠0。若 f 在 a 的幂级数除常数项外全为零，则局部常值，恒等定理同样给全域常值。',
      r'否则令 m≥1 为最低非零非常数项阶，f(a+h)=f(a)+c_mh^m+O(|h|^(m+1))，c_m≠0。余项估计可由局部绝对收敛幂级数取得：固定小半径 ρ，|h|≤ρ/2 时将 Σ_(k≥m+1)|c_k||h|^k 中 |h|^(m+1) 提出，剩余级数有有限常数界。',
      r'选择单位复数 u，使 c_mu^m=|c_m|f(a)/|f(a)|。该 m 次根由代数基本定理存在，因右端除 c_m 的模为一，根 u 的模也为一。取 h=tu，t>0，则 Re[(overline(f(a))/|f(a)|)f(a+tu)]=|f(a)|+|c_m|t^m+O(t^(m+1))>|f(a)|，只要 t 足够小。复数模至少为该实部，与局部最大矛盾。',
      r'边界版本中闭包闭有界而紧，连续 |f| 取得最大值。若在边界取得即完成；若在内部取得，前述结果使 f 常值，边界也取得相同值。有界非空域的边界非空：从域内一点沿射线到域外，取首次退出点即为边界点。因此最大值的两边均有定义。$\square$')
    P('schwarz-lemma','analysis/conformal-maps analysis/holomorphic-functions','Schwarz 引理及等号情形',r'若 f:D→D 全纯、D={|z|<1}、f(0)=0，则 |f(z)|≤|z| 且 |f′(0)|≤1。若某个非零 z 取等号，或 |f′(0)|=1，则 f(z)=cz，其中 |c|=1。','maximum-modulus holomorphic-taylor complex-basic-rules','将原点零点除去，对 f(z)/z 用越来越接近单位圆的边界界。',
      r'定义 g(z)=f(z)/z（z≠0）、g(0)=f′(0)。局部幂级数 f(z)=a₁z+a₂z²+… 给 g 的全纯延拓，因此 g 在 D 全纯。对 0<r<1，在 |z|=r 上有 |g(z)|≤1/r。',
      r'边界最大值原理使闭圆盘 |z|≤r 上亦有 |g(z)|≤1/r。固定任意 z∈D，令 r↑1，得到 |g(z)|≤1。因此 |f(z)|≤|z|，在零点得到 |f′(0)|≤1。',
      r'若 |g| 在某内部点等于一，则它取得全域最大值，最大模原理使 g 常值 c 且 |c|=1。非零点 |f(z)|=|z| 或 |f′(0)|=1 恰分别给这种内部等号。因此 f=cz。反向每个这种旋转都达到所述等号。$\square$')
    P('disk-automorphisms','analysis/conformal-maps numbertheory/modular-transformations','单位圆盘的全体双全纯自同构',r'对 a∈D，φ_a(z)=(z−a)/(1−overline(a)z) 是 D 的双全纯自同构。每个双全纯 F:D→D 唯一可写为 F(z)=cφ_a(z)，其中 a=F⁻¹(0)、|c|=1。','schwarz-lemma complex-basic-rules','先用显式分式把零点移到原点，再对固定原点的映射和逆映射各用一次 Schwarz 引理。',
      r'分母在 D 非零，因为 |overline(a)z|<1。展开平方模可得 |1−overline(a)z|²−|z−a|²=(1−|a|²)(1−|z|²)>0，所以 |φ_a(z)|<1。解 w=φ_a(z) 得 z=(w+a)/(1+overline(a)w)=φ_(−a)(w)，相同估计使逆也从 D 映到 D，且均全纯。',
      r'若 G:D→D 为双全纯且 G(0)=0，其逆也固定零。Schwarz 给 |G(z)|≤|z| 及 |G⁻¹(w)|≤|w|，取 w=G(z)，两界合并得 |G(z)|=|z|。等号情形使 G(z)=cz、|c|=1。',
      r'对任意 F，取 a=F⁻¹(0)，G=F∘φ_a⁻¹ 固定原点，故 G(z)=cz，即 F=cφ_a。a 是 F 的唯一零点，因而唯一；固定 a 后，任一 z≠a 的函数值确定 c，故 c 也唯一。$\square$')
    P('schwarz-pick','analysis/conformal-maps','Schwarz–Pick 不等式与刚性',r'全纯 f:D→D 对 a,z∈D 满足 |(f(z)−f(a))/(1−overline(f(a))f(z))|≤|(z−a)/(1−overline(a)z)|，且 |f′(a)|≤(1−|f(a)|²)/(1−|a|²)。若第一式在 z≠a 处取等号，或第二式取等号，则 f 为圆盘自同构。','disk-automorphisms schwarz-lemma','把输入输出各自的目标点移到零，再用 Schwarz 引理。',
      r'令 g=φ_(f(a))∘f∘φ_a⁻¹，则 g:D→D 全纯且 g(0)=0。Schwarz 给 |g(w)|≤|w|，代入 w=φ_a(z) 正是所列两点不等式。',
      r'由分式求导，φ_a′(a)=1/(1−|a|²)，(φ_a⁻¹)′(0)=1−|a|²。因此 g′(0)=f′(a)(1−|a|²)/(1−|f(a)|²)。Schwarz 的导数界给所述估计。这里复链式法则由两个复线性逼近复合直接得到，与已证实链式法则的余项论证相同。',
      r'任一所述等号使 g 按 Schwarz 刚性为单位旋转，因而 f=φ_(f(a))⁻¹∘g∘φ_a 为双全纯自同构。反向圆盘自同构的分式计算给两点和导数处处等号。$\square$')
    P('normalized-riemann-map-unique','analysis/conformal-maps','归一化黎曼映射的唯一性',r'设 Ω 为域、a∈Ω。若 F,G:Ω→D 为双全纯映射，且 F(a)=G(a)=0、F′(a)>0、G′(a)>0（均为正实数），则 F=G。任一双全纯映射可经圆盘自同构归一化成这种形式。','disk-automorphisms complex-basic-rules','两个候选映射的过渡函数是固定零的圆盘自同构，因此只差一个旋转，正导数条件消去旋转。',
      r'H=G∘F⁻¹ 是固定零的圆盘自同构，故 H(w)=cw、|c|=1。因此 G=cF，求导于 a 得 G′(a)=cF′(a)。两个导数为正实数，故 c 是正实单位数，只能 c=1，得到相等。',
      r'若已有双全纯 F，先复合 φ_(F(a))，使 a 的像为零。该映射的导数不为零，因为与其全纯逆的复合为恒等，链式法则给两者导数乘积为一。再乘以该导数相位的倒数，可使导数成为正实数。',
      r'这证明已存在映射的归一化及唯一性；任意单连通真域上这种映射的存在仍须另用正规族与极值方法证明。$\square$')
