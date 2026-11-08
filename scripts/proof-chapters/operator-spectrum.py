"""Resolvents, compact spectral sets and multiplication spectra."""
def register(P, BASES):
    P('bounded-operator-complete','analysis/linear-operators analysis/banach-spaces','有界线性算子空间的完备性',r'若 X 为赋范空间、Y 为 Banach 空间，则 B(X,Y) 配算子范数为 Banach 空间；特别地 X* 总是 Banach 空间。','def-complete axiom-metric','算子范数柯西先给逐点极限，再用同一误差界恢复算子范数收敛。',
      r'若 T_n 在算子范数下柯西，则固定 x 时 ‖T_nx−T_mx‖≤‖T_n−T_m‖‖x‖，所以 T_nx 在 Y 中柯西并收敛。定义 Tx=lim_nT_nx；取向量加法及数乘的极限可验证 T 线性。',
      r'柯西列的范数有共同上界 C：尾部与某固定项差≤1，有限个前项另取最大值。因此 ‖Tx‖=lim_n‖T_nx‖≤C‖x‖，T 有界。',
      r'给 ε>0，充分大 n,m 有 ‖T_n−T_m‖≤ε。固定 n 和 x 令 m→∞，得 ‖(T_n−T)x‖≤ε‖x‖，再取单位球上确界，‖T_n−T‖≤ε。因此 B(X,Y) 完备。标量域 R、C 完备，取 Y 为标量域即得 X* 完备。$\square$')
    P('banach-neumann-series','analysis/linear-operators analysis/spectral-theory','Banach 空间上的 Neumann 级数',r'若 X 为 Banach 空间且 B∈B(X)、‖B‖<1，则 I−B 有有界双侧逆 Σ_(n≥0)B^n，且其范数≤1/(1−‖B‖)。','bounded-operator-complete','算子空间完备使几何控制级数收敛，有限望远镜恒等式给双侧逆。',
      r'算子范数满足 ‖AB‖≤‖A‖‖B‖，因为对任意 x 有 ‖ABx‖≤‖A‖‖B‖‖x‖。故 ΣB^n 的尾部范数≤Σ‖B‖^n，几何级数收敛使算子部分和柯西。由 B(X) 完备得极限 S。',
      r'有限恒等式 (I−B)Σ_(k=0)^nB^k=Σ_(k=0)^nB^k(I−B)=I−B^(n+1)。因 ‖B^(n+1)‖≤‖B‖^(n+1)→0，乘法连续，取极限得 (I−B)S=S(I−B)=I。',
      r'部分和范数≤Σ_(k=0)^n‖B‖^k，取极限给 ‖S‖≤1/(1−‖B‖)。X={0} 时唯一算子同时为恒等与零，结论按该空间的运算直接成立。$\square$')
    P('resolvent-open-bounded-spectrum','analysis/spectral-theory','有界算子的预解集开与谱有界闭',r'复 Banach 空间上有界算子 T 的预解集 ρ(T)={λ:T−λI 有有界双侧逆} 为开集；其补谱 σ(T) 闭且包含在 |λ|≤‖T‖ 内。','banach-neumann-series','在已知可逆点附近分解成可逆算子乘以小扰动；远处直接提出标量 λ。',
      r'设 λ₀∈ρ(T)，R₀=(T−λ₀I)⁻¹。因 R₀ 与 T−λ₀I 互逆，T−λI=(T−λ₀I)[I−(λ−λ₀)R₀]。若 |λ−λ₀|‖R₀‖<1，Neumann 定理使后一因子可逆，因此 λ∈ρ(T)，预解集开，谱闭。',
      r'若 |λ|>‖T‖，则 T−λI=−λ(I−T/λ)，‖T/λ‖<1，故可逆，且 ‖(T−λI)⁻¹‖≤1/(|λ|−‖T‖)。所以谱位于所列闭圆盘。这里仅证明闭与有界，不以此冒充谱非空的证明。$\square$')
    P('compact-self-adjoint-spectrum-set','analysis/spectral-theory','紧自伴算子的完整谱集与预解范数',r'非零复 Hilbert 空间 H 上紧自伴算子 T，令 D 为其所有特征值（核非零时含 0）。则 σ(T)=closure(D)。对 λ∉σ(T)，有 ‖(T−λI)⁻¹‖=1/dist(λ,σ(T))。特别地非零谱值都是有限重数实特征值；H 无限维时 0 必在谱中，但未必为特征值。','compact-self-adjoint-spectral compact-eigenvalue-finiteness hilbert-orthonormal-basis','在全空间正交特征基上逐坐标解方程；系数分母远离零等价于有界可逆。',
      r'谱分解给标准正交特征基 E，记每个基向量的特征值为 d_e∈R。任一特征值均为这些 d_e 之一：若 Tx=dx、x≠0，x 至少有一个非零基系数，对该系数比较给 d=d_e。因此 D={d_e:e∈E}。',
      r'若 λ 不在 closure(D)，则 δ=inf_e|d_e−λ|>0。对 y 定义 Ry=Σ_e〈y,e〉/(d_e−λ)·e。Parseval 给系数平方和≤δ⁻²‖y‖²，所以级数范数收敛且 R 有界。逐基系数比较，利用 T 连续，得 (T−λI)Ry=y、R(T−λI)y=y。因此 λ 在预解集。',
      r'若 λ∈closure(D)，可选单位特征向量 e_n 使 |d_(e_n)−λ|→0（若 λ 本身为特征值可反复选同一向量）。则 ‖(T−λI)e_n‖→0。若存在有界逆 R，会有 1=‖e_n‖≤‖R‖‖(T−λI)e_n‖→0，矛盾。所以 λ∈σ(T)。',
      r'上述坐标逆满足 ‖R‖≤1/δ。另一方面 ‖Re‖=1/|d_e−λ|，取上确界得 ‖R‖≥1/δ。D 与其闭包距 λ 的下确界相同，故得到预解范数公式。',
      r'非零特征值只可能在零处聚集，由前引理每个 ε 之外仅有限个连重数的谱方向，故非零谱点必在 D，且有限重数。如果 H 无限维、核非零则 0 已是特征值；如果核为零，特征基必无限，非零特征值趋零，因此 0∈closure(D)。例 H=ℓ²、Te_n=e_n/n：T 的有限秩截断误差≤1/(N+1)，所以紧（有界序列先对有限坐标抽取子列，再用统一尾界作对角柯西估计）；其核为零而 0∈σ(T)。$\square$')
    P('multiplication-spectrum','analysis/spectral-theory analysis/linear-operators','L² 乘法算子的谱等于本质值域',r'设 (Ω,μ) 为非零 σ 有限测度空间，f 为本质有界复可测函数，M_fg=fg 作用于复 L²(μ)。则 σ(M_f)={λ∈C:对每个 ε>0，μ{|f−λ|<ε}>0}，即 f 的本质值域。','general-l2-complete integral-linearity','远离本质值域时取逐点倒数；进入本质值域时在函数值贴近 λ 的有限测度集合上取归一化指标。',
      r'若 |f|≤C 几乎处处，则 ‖fg‖₂²≤C²‖g‖₂²，故 M_f 有界。改变 f 的零测集取值不影响算子或本质值域。若 λ 不在所列集合，存在 ε>0 使 |f−λ|≥ε 几乎处处；h=1/(f−λ) 几乎处处有界，在异常零集任取零，则 M_h 是 M_f−λI 的有界双侧逆。',
      r'若 λ 属于本质值域，令 A_n={|f−λ|<1/n}，每个均正测度。取递增有限测度集合 Ω_k 覆盖 Ω。若全部 μ(A_n∩Ω_k)=0，则可数并也为零，与 μ(A_n)>0 矛盾。因此可取 B_n=A_n∩Ω_(k_n) 满足 0<μ(B_n)<∞。',
      r'令 g_n=1_(B_n)/√μ(B_n)，则 ‖g_n‖₂=1，而 ‖(M_f−λI)g_n‖₂≤1/n。若有有界逆 R，便有 1≤‖R‖/n，矛盾。因此 λ 在谱中，两个包含合并给等式。σ 有限条件在此用于构造非零有限测度测试集；对任意测度空间不能无条件略去这个步骤。$\square$')
