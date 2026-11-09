"""Uncertainty estimates with operator domains made explicit."""
def register(P, BASES):
    P('complex-inner-cauchy-schwarz','analysis/hilbert-spaces applied/quantum-theory','复内积的 Cauchy–Schwarz 不等式与等号',r'复内积采用第一变量共轭线性、第二变量线性约定。任意u,v满足 |⟨u,v⟩|²≤‖u‖²‖v‖²；等号当且仅当二者复线性相关。','axiom-inner complex-basic-rules','从u中减去它在v方向的正交投影。',
      r'若v=0，不等式及等号刻画立即成立。若v≠0，令c=⟨v,u⟩/‖v‖²，w=u−cv，则⟨v,w⟩=0。内积的共轭对称性也给⟨w,v⟩=0，所以‖u‖²=‖w‖²+|c|²‖v‖²。丢掉非负的‖w‖²并乘‖v‖²即得不等式。',
      r'等号恰当‖w‖=0，即u=cv。反向线性相关时直接代入有等号。该证明仅依赖内积公理，空间不必完备。$\square$')
    P('robertson-schrodinger-domain','applied/quantum-theory analysis/hilbert-spaces','带定义域条件的 Robertson–Schrödinger 不等式',r'设A,B为复Hilbert空间上线性定义域中的对称算子（即定义域内⟨Aφ,ψ⟩=⟨φ,Aψ⟩，B同理），单位向量ψ同时属于AB与BA的定义域。令a=⟨ψ,Aψ⟩、b=⟨ψ,Bψ⟩，u=(A−a)ψ、v=(B−b)ψ，ΔA=‖u‖、ΔB=‖v‖。则 (ΔAΔB)²≥(Re⟨u,v⟩)²+|⟨ψ,(AB−BA)ψ⟩|²/4，特别ΔAΔB≥|⟨ψ,[A,B]ψ⟩|/2。','complex-inner-cauchy-schwarz','中心化后应用复Cauchy–Schwarz，内积的虚部正是对易子的期望。',
      r'对称性给⟨ψ,Aψ⟩=⟨Aψ,ψ⟩，所以a等于其共轭，因而为实数，b同理。展开中心化内积得 z=⟨u,v⟩=⟨Aψ,Bψ⟩−ab。因为Bψ在A的定义域内，对称性给⟨Aψ,Bψ⟩=⟨ψ,ABψ⟩；类似⟨Bψ,Aψ⟩=⟨ψ,BAψ⟩。',
      r'故 z−overline(z)=⟨ψ,(AB−BA)ψ⟩=2i Im z。复Cauchy–Schwarz给 ΔA²ΔB²≥|z|²=(Re z)²+(Im z)²，代入前式即得两项不等式。丢掉实部平方并开平方得到Robertson界。',
      r'较强的两项不等式取等号恰当u,v复线性相关；较弱的Robertson界还需Re z=0。假定ψ属于两个乘积的定义域，是为了每个对易子表达式都有意义。仅有形式符号[A,B]，不能越过定义域直接套用该公式。$\square$')
    P('position-momentum-schwartz','applied/quantum-theory analysis/time-frequency','位置—动量不确定性及全部 Schwartz 等号态',r'在L²(R)上取ℏ>0，Xψ=xψ、Pψ=−iℏψ′，定义域暂取Schwartz空间。对单位Schwartz函数ψ，位置、动量标准差满足ΔXΔP≥ℏ/2；等号恰为 ψ(x)=C exp(−(x−a)²/(4σ²)+ibx/ℏ)，其中a,b∈R、σ>0，常数C按单位范数归一化。','robertson-schrodinger-domain fourier-schwartz ftc-second','分部积分验证对称性和对易关系；等号条件化为一阶线性微分方程。',
      r'Schwartz空间在乘x和求导下不变，故两个乘积都有定义。本证明只需对称性及所用ψ的乘积定义域条件，不需先证明这些算子的闭包或自伴性。对任意Schwartz φ,ψ，乘x显然对称；分部积分因端点快速衰减无边界项，给⟨φ,Pψ⟩=⟨Pφ,ψ⟩。直接计算(XP−PX)ψ=iℏψ。',
      r'设a=⟨ψ,Xψ⟩、b=⟨ψ,Pψ⟩。则z=⟨(X−a)ψ,(P−b)ψ⟩满足Im z=ℏ/2。故Robertson界给ΔXΔP≥ℏ/2。ΔX>0：否则连续函数(x−a)ψ处处零，ψ在x≠a处为零，连续性使ψ恒零，矛盾；ΔP同理由下界非零。',
      r'若取等号，复Cauchy–Schwarz的等号条件给 (P−b)ψ=c(X−a)ψ。于是z=cΔX²，弱界等号给Re c=0，而Im c=ℏ/(2ΔX²)>0。记σ=ΔX，c=iℏ/(2σ²)。改写微分方程为 ψ′=[ib/ℏ−(x−a)/(2σ²)]ψ。乘相应的非零积分因子后导数为零，所以所有解正是所列Gaussian形式，包括常数C。',
      r'反向所列函数是Schwartz函数且可归一化：正Gaussian积分有限非零。其模平方关于a对称，故位置均值a；由导数公式及∫(x−a)|ψ|²=0知动量均值b。分部积分 ∫[(x−a)|ψ|²]′=0 给1−σ⁻²∫(x−a)²|ψ|²=0，故ΔX²=σ²。又(P−b)ψ=iℏ(X−a)ψ/(2σ²)，得ΔP²=ℏ²/(4σ²)，达到等号。$\square$')
    P('finite-dimensional-no-canonical-commutator','applied/quantum-theory','有限维矩阵不能满足正则对易关系',r'若n≥1且ℏ≠0，不存在复n阶矩阵X,P满足 XP−PX=iℏI。','complex-basic-rules','迹对交换乘法不变，而单位矩阵的迹非零。',
      r'按坐标求和，tr(XP)=Σ_iΣ_j X_ij P_ji。交换有限求和次序并重命名指标得它等于Σ_jΣ_i P_ji X_ij=tr(PX)，因为复标量乘法可交换。故任意矩阵对易子的迹为零。',
      r'若XP−PX=iℏI，取迹得0=iℏn，与n≥1及ℏ≠0矛盾。这个结果说明正则位置—动量对易关系不能由有限维矩阵精确实现；有限维的其他可观测量仍满足有各自对易子期望的Robertson不等式。$\square$')
