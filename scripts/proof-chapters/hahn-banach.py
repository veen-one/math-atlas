"""Dominated extension and norming functionals, including complex scalars."""
def register(P, BASES):
    BASES['axiom-zorn']=dict(title='Zorn 极大原则（选择基础）',statement='采用通常 ZFC 集合论的选择原则形式：非空偏序集若每条全序链都有上界，则有极大元。这是本章明确采用的集合论基础，不声称由较弱的依赖选择证明。')
    P('hahn-banach-one-step','analysis/linear-operators','次线性支配的单步线性延拓',r'实向量空间 X 上 p:X→R 满足 p(x+y)≤p(x)+p(y)、p(tx)=tp(x)（t≥0）。若子空间 M 上实线性 f≤p，且 v∉M，则 f 可延拓为 M+Rv 上的线性 F≤p。','axiom-real axiom-vector','新方向上的值 c 只需落在所有下界与上界之间；次线性保证两类界相容。',
      r'每个新向量唯一写成 m+tv；否则两种表示相减、v∉M 迫使 t 相同。因而规定 F(m+tv)=f(m)+tc 自动线性且延拓 f，只需选 c。',
      r'对任意 a,b∈M，有 f(a)+f(b)=f(a+b)≤p(a+b)≤p(a−v)+p(b+v)。故 f(a)−p(a−v)≤p(b+v)−f(b)。所有左式构成非空集合，且被任一固定右式上界控制。由上确界公理，存在有限 c 使所有左式≤c≤所有右式。',
      r'若 t>0，取 b=m/t，得到 c≤p(m/t+v)−f(m/t)，乘 t 即 F(m+tv)≤p(m+tv)。若 t<0，令 s=−t>0，取 a=m/s，得到 c≥f(m/s)−p(m/s−v)，乘 s 并移项给 f(m)−sc≤p(m−sv)。t=0 时是原假设。因此 F≤p。$\square$')
    P('hahn-banach-real-dominated','analysis/linear-operators analysis/banach-spaces','实 Hahn–Banach 支配延拓定理',r'在实向量空间 X 上，任一次线性 p 支配的子空间线性泛函 f:M→R，都可延拓为 X 上线性泛函 F≤p。','hahn-banach-one-step axiom-zorn','将全部支配延拓按包含排序；链的并仍是延拓，极大者必须定义在整个空间。',
      r'考虑所有二元组 (N,g)，其中 M⊆N⊆X 是线性子空间，g:N→R 线性、g|M=f 且 g≤p。该集合非空，包含 (M,f)。以定义域包含且函数相容为偏序。',
      r'对任意非空全序链，定义域的并 N 是子空间：有限多个向量所在的定义域总有一个包含另外各个。各函数在交上相同，故并给单值函数 g:N→R；线性性及 g≤p 可在某个共同定义域中验证。因此它是链上界。空链也有上界 (M,f)。',
      r'Zorn 原则给极大延拓 (N,g)。若 N≠X，选 v∈X\N，由单步延拓得到 N+Rv 上支配 p 的严格延拓，矛盾。故 N=X，所求 F=g 存在。这里没有断言延拓唯一，也不要求 X 完备。$\square$')
    P('hahn-banach-normed','analysis/linear-operators analysis/normed-spaces','实、复赋范空间的保范数 Hahn–Banach 定理',r'实或复赋范空间 X 的任意线性子空间 M 上，有界线性泛函 f 都有 X 上的有界线性延拓 F，且 ‖F‖=‖f‖。M 不必闭，X 不必完备。','hahn-banach-real-dominated axiom-metric','实数情形以范数作次线性上界；复数情形先延拓实部，再由实部恢复复线性。',
      r'实数情形令 C=‖f‖、p(x)=C‖x‖。p 次线性，且 f≤p。由支配延拓得 F≤p；对 −x 应用同一不等式得到 −F(x)≤C‖x‖，所以 |F(x)|≤C‖x‖。限制到 M 给 ‖F‖≥‖f‖，与上界合并为相等。',
      r'复数情形把 X 看作实向量空间，令 u=Re f。u 实线性且 |u(m)|≤C‖m‖。用实数版本延拓为实线性 U，满足 |U(x)|≤C‖x‖。定义 F(x)=U(x)−iU(ix)。实线性直接成立，且 F(ix)=U(ix)+iU(x)=iF(x)，因此对任意复数标量也线性。',
      r'对 m∈M，因 f(im)=if(m)，有 U(m)=Re f(m)、U(im)=−Im f(m)，故 F(m)=f(m)。若 F(x)≠0，取单位复数 λ 使 λF(x)=|F(x)|。由复线性及 Re F=U，|F(x)|=Re F(λx)=U(λx)≤C‖λx‖=C‖x‖。F(x)=0 时同样满足。限制与上界再次给保范数。$\square$')
    P('norming-functional','analysis/linear-operators analysis/normed-spaces','连续泛函分离点与对偶范数公式',r'对实或复赋范空间 X 中任意非零 x，存在 F∈X*，‖F‖=1 且 F(x)=‖x‖。因此 ‖x‖=sup_{‖F‖≤1}|F(x)|，且连续线性泛函分离不同点。','hahn-banach-normed','先在 x 张成的一维空间上定义保范数泛函，再延拓。',
      r'在 M=span{x} 上定义 f(λx)=λ‖x‖。x≠0 使表示唯一，f 线性且 |f(λx)|=|λ|‖x‖=‖λx‖，所以 ‖f‖=1。保范数延拓给 ‖F‖=1、F(x)=‖x‖。',
      r'对任何 ‖G‖≤1，有 |G(x)|≤‖x‖；上述 F 取到这个上界，所以对偶范数公式成立。x=0 时两边皆零。若 x≠y，对 x−y 选此泛函，便有 F(x)−F(y)=‖x−y‖≠0，故可分离。$\square$')
    P('bidual-isometry','analysis/linear-operators analysis/normed-spaces','自然嵌入双对偶是等距线性映射',r'定义 J:X→X** 为 (Jx)(F)=F(x)。则 J 线性且 ‖Jx‖=‖x‖，所以单射；此结论本身不保证满射。','norming-functional','对偶范数公式恰是求值泛函的算子范数。',
      r'对固定 x，求值映射 Jx 在 X* 上线性，且 |(Jx)(F)|=|F(x)|≤‖F‖‖x‖，故 Jx 是有界线性泛函，属于 X**。逐个 F 代入可验证 J(ax+by)=aJx+bJy。',
      r'取单位球上的上确界，‖Jx‖=sup_{‖F‖≤1}|F(x)|=‖x‖，最后等号为已证对偶范数公式。若 Jx=Jy，等距性给 ‖x−y‖=0，所以 x=y。满射性质称反身性，需要单独研究，不能从本证明推得。$\square$')
