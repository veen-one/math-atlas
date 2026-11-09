"""Explicit passage from bounded stopping to gambler's ruin."""
def register(P, BASES):
    P('dominated-optional-stopping','probability/stopping-times probability/martingales','有可积控制的无界停时可选停止',r'离散可积鞅 M_n 与几乎必然有限停时 T，若存在可积 Z≥0 使所有 n 均有 |M_(T∧n)|≤Z，则 M_T 可积且 E[M_T]=E[M₀]。','bounded-optional-stopping dominated-convergence','先在截断停时处使用有限和证明，再以可积控制正当化极限。',
      r'T_n=T∧n 是有界停时：对 k<n，{T_n≤k}={T≤k}，对 k≥n 该事件为全集。因此 E[M_(T_n)]=E[M₀]。',
      r'T 几乎必然有限，所以每条正常路径上当 n≥T 时 M_(T_n)=M_T，故逐点最终相等。统一控制 |M_(T_n)|≤Z 也给 |M_T|≤Z 几乎处处。控制收敛定理使 E[M_(T_n)]→E[M_T]，得到等式。该控制条件是充分条件，不声称对任意几乎必然有限停时都能省去它。$\square$')
    P('fair-gambler-ruin','probability/stopping-times probability/martingales','公平随机游走的破产概率与平均退出时间',r'设 S₀=0，S_n=Σ_(k=1)^nξ_k，其中 ξ_k 独立、取±1各概率1/2。正整数 a,b 给停时 T=inf{n:S_n=a 或 S_n=−b}。则 T 几乎必然有限，P(S_T=a)=b/(a+b)，且 E[T]=ab。','bounded-optional-stopping dominated-optional-stopping monotone-integral dominated-convergence independent-bounded-products pi-lambda','先给退出时间的几何尾界，再对 S_n 与 S_n²−n 使用截断可选停止。',
      r'取自然信息流 F_n=σ(ξ₁,…,ξ_n)。{T≤n} 只依赖前 n 次步长，所以为停时。令 L=a+b。从任一未退出位置出发，接下来 L 次步长全为+1 必在此块内达到 a，其概率为2^(−L)，且该事件与过去独立。独立变量生成的过去与未来 σ 代数独立，可先对有限坐标矩形事件验证乘积公式，再用 π—λ 定理推广到 σ 代数。',
      r'因此 P(T>(k+1)L)≤(1−2^(−L))P(T>kL)，归纳得 P(T>kL)≤(1−2^(−L))^k→0。事件 {T>kL} 递减，概率上连续性（或对补集用下连续性）给 P(T=∞)=0。',
      r'S_n 可积且适应，ξ_n 对过去独立、均值零，所以对 A∈F_(n−1)，E[(S_n−S_(n−1))1_A]=E[ξ_n]P(A)=0，故为鞅。停止前游走始终在整数区间 (−b,a)，停止后位于端点，因步长为1不可能跳过端点。因此 |S_(T∧n)|≤max(a,b)，满足常数可积控制。可选停止得 E[S_T]=0。',
      r'令 q=P(S_T=a)，则 aq−b(1−q)=0，所以 q=b/(a+b)，下端退出概率 a/(a+b)。',
      r'再令 N_n=S_n²−n。其增量为 2S_(n−1)ξ_n+(ξ_n²−1)=2S_(n−1)ξ_n，对过去积分为零，所以也是可积鞅。对有界停时 T∧n 应用可选停止，得 E[S_(T∧n)²]=E[T∧n]。',
      r'左侧由常数 max(a,b)² 控制且几乎处处趋 S_T²，控制收敛使其趋 E[S_T²]；右侧 T∧n↑T，单调收敛给 E[T]，允许先为无穷。由退出概率计算 E[S_T²]=a²b/(a+b)+b²a/(a+b)=ab，故 E[T]=ab<∞。这一步同时证明了有限期望，不在使用可选停止前预先假定它。$\square$')
