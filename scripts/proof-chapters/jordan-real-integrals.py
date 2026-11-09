"""Contour arc estimates and the indented Dirichlet integral."""
def register(P, BASES):
    P('jordan-upper-semicircle','analysis/residues analysis/cauchy-integral-theorem','上半圆的 Jordan 引理与显式界',r'设a>0，Γ_R为上半圆z=Re^(iθ)、0≤θ≤π，g在弧上连续，M_R=sup_(Γ_R)|g|。则 |∫_(Γ_R)e^(iaz)g(z)dz|≤πM_R/a。因而M_R→0时弧积分趋零。','contour-estimate ftc-second','指数模为e^(−aR sinθ)，用正弦在半区间的线性下界消去弧长增长。',
      r'参数化得积分模至多 RM_R∫₀^π e^(−aR sinθ)dθ。sin在[0,π/2]上凹，故位于连接端点的弦之上，即sinθ≥2θ/π；这也可由二阶导数−sinθ≤0及导数单调直接证明弦不等式。另一半区间用sin(π−θ)=sinθ。',
      r'因此该积分至多2RM_R∫₀^(π/2)e^(−2aRθ/π)dθ≤2RM_R·π/(2aR)=πM_R/a。若M_R→0，右侧趋零。上界只要求弧上连续，不要求g在内部全纯；内部全纯性属于之后使用围道定理的独立条件。$\square$')
    P('pole-residue-derivative','analysis/residues','有限阶极点的留数求导公式',r'若f在a处至多有m阶极点，m≥1，h(z)=(z−a)^m f(z)可全纯延拓到a，则 Res(f,a)=h^((m−1))(a)/(m−1)!。若f的极点阶数恰为m，还要求h(a)≠0。','holomorphic-taylor local-laurent-expansion','留数对应h的Taylor级数中恰好抵消m−1个幂的系数。',
      r'在a的邻域写h(z)=Σ_(k≥0)c_k(z−a)^k，其中c_k=h^(k)(a)/k!。除以(z−a)^m得f(z)=Σ_(k≥0)c_k(z−a)^(k−m)，这就是穿孔盘的Laurent展开，或由Laurent唯一性与已知展开比较。',
      r'幂次−1仅在k=m−1出现，故留数等于c_(m−1)，得到公式。若h(a)=0，极点可能降阶或可去，但公式仍成立；若h(a)≠0，最低非零项恰为(z−a)^(−m)，所以阶数恰为m。$\square$')
    P('dirichlet-sine-integral-contour','analysis/residues analysis/integration-calculus','Dirichlet 积分的缩进围道完整证明',r'广义积分∫₀∞ sinx/x dx收敛且等于π/2。使用e^(iz)/z时，原点在实轴积分路径上，必须以小半圆缩进处理，不能直接把它当作普通内部极点。','jordan-upper-semicircle weighted-residue-theorem contour-estimate ftc-second','大弧由Jordan引理趋零，小弧保留半个极点贡献，实轴两段合起来给正弦积分。',
      r'先证尾积分收敛。对B>A≥1，分部积分得 ∫_A^B sinx/x dx=[−cosx/x]_A^B−∫_A^B cosx/x² dx，绝对值至多1/A+1/B+1/A≤3/A。尾积分满足Cauchy条件。原点sinx/x连续填值1，因此下限0也无发散。',
      r'取0<ε<R，围道按−R到−ε的实轴段、小上半圆εe^(iθ)（θ从π降到0）、ε到R的实轴段、大上半圆Re^(iθ)（θ从0升到π）连接。它避开0。f=e^(iz)/z在C上仅有孤立奇点0；带绕数留数定理给总积分为2πi乘绕数，因为Res(f,0)=1。',
      r'该围道对0绕数为零，可直接算核积分而不借Jordan曲线定理：两实轴段的∫dz/z分别为logε−logR及logR−logε，相消；小弧为−iπ，大弧为iπ，也相消。因此总f积分为零。',
      r'小弧积分为∫_π^0 i exp(iεe^(iθ))dθ，ε→0时一致趋于−iπ；一致性可由指数幂级数给|e^w−1|≤|w|e^|w|。大弧取g=1/z，M_R=1/R，Jordan界给其模≤π/R→0。实轴两段则相加为2i∫_ε^R sinx/x dx，余弦部分因奇性相消。',
      r'固定R先令ε→0，总积分等式给2i∫₀^R sinx/x dx−iπ+大弧积分=0。再令R→∞，使用已证收敛和大弧估计，得2i∫₀∞sinx/x dx=iπ，即所列值。小弧的半极点贡献不可遗漏。$\square$')
