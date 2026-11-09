"""General real Cramer theorem via truncation and exponential tightness."""
def register(P, BASES):
    P('cramer-truncated-dual-limit','probability/large-deviations','截断矩母函数的凸对偶逼近',r'设X为非恒定实随机变量，a=ess inf X、b=ess sup X允许无穷。对a<x<b，令 M_R(t)=E[e^(tX)1_(|X|≤R)]、I_R(x)=sup_t(tx−log M_R(t))，R取充分大的正整数；M(t)=E e^(tX)允许∞，I(x)=sup_t(tx−log M(t))。则I_R(x)随R递减且收敛到I(x)。','bounded-exponential-tilt monotone-integral bolzano-weierstrass','在x两侧各固定一块正概率质量，统一控制截断对偶的极大化参数，避免极值逃向无穷。',
      r'因a<x<b，可选δ>0及K<∞，使事件A_+={x+δ≤X≤K}和A_-={−K≤X≤x−δ}概率分别为p_+,p_->0。这是本质上下界的定义及有限截断集合递增到相应半直线所得。R≥K时，条件于|X|≤R的分布有界且本质支持在x两侧，因此其对偶在唯一有限t_R达到最大，上一有界倾斜命题适用。归一化只给log M_R增加常数，不改变t_R。',
      r'当t≥0，M_R(t)≥p_+e^(t(x+δ))，故tx−log M_R(t)≤−δt−log p_+。当t≤0，用A_-得同式≤−δ|t|−log p_-。另一方面在t=0的目标值为−log P(|X|≤R)≥0，所以最大值非负。上述两界说明全部t_R位于固定紧区间。',
      r'M_R随R增加，故I_R递减，且M_R≤M使I_R≥I。固定首个R₀，I_R≤I_(R₀)<∞，故有有限极限L≥I。选R_j趋无穷并抽子列使t_(R_j)→t_*。对任意固定整数K₁且R_j≥K₁，M_(R_j)(t_(R_j))≥M_(K₁)(t_(R_j))。有界截断保证右侧随t连续，因而 L≤t_*x−log M_(K₁)(t_*)。',
      r'令K₁趋无穷，单调收敛给M_(K₁)(t_*)→M(t_*)。若后者无穷，上式迫使有限L≤−∞，矛盾；所以M(t_*)有限，且L≤t_*x−log M(t_*)≤I(x)。结合L≥I，证明所需等式。这一步同时证明内部点速率有限，不要求全实轴指数矩存在。$\square$')
    P('cramer-exponential-tightness','probability/large-deviations','零邻域指数矩给指数紧性与良速率函数',r'设独立同分布实变量X_i的矩母函数在零的某邻域有限。写S_n=n⁻¹ΣX_i、Λ(t)=log E e^(tX₁)、I(x)=sup_t(tx−Λ(t))。则任意A>0可选K使 limsup n⁻¹log P(|S_n|>K)≤−A；I非负、下半连续，有限次水平集紧。','markov independent-bounded-products monotone-integral heine-borel-rn','分别用一个正参数和一个负参数控制两侧尾部，两个仿射下界也保证速率函数的次水平集有界。',
      r'选η>0使Λ(η)、Λ(−η)有限。独立性给 E exp(ηΣX_i)=exp(nΛ(η))。此处虽然指数变量未必有界，可先将每个非负因子截断，利用有界独立乘积公式，再逐因子用单调收敛推广，有限个因子可依次处理。Markov界给P(S_n>K)≤exp(−n[ηK−Λ(η)])；对−S_n同理给左尾界。',
      r'所以P(|S_n|>K)≤2 exp(−n[ηK−max(Λ(η),Λ(−η))])。取K充分大即得任意A的指数尾界。I≥0来自t=0；只对Λ有限的t取上确界即可，其余t贡献−∞，所以I是连续仿射函数的上确界，非负且下半连续。',
      r'又I(x)≥η|x|−max(Λ(η),Λ(−η))。因此{I≤c}有界，且由下半连续性闭，有限维Heine–Borel定理保证紧。这就是大偏差中“良速率函数”的具体含义。$\square$')
    P('cramer-real-full','probability/large-deviations','零邻域指数矩条件下的完整 Cramér 定理',r'独立同分布实变量X_i若E e^(tX₁)在t=0的某开邻域有限，则样本均值S_n满足速率I(x)=sup_(t∈R){tx−log E e^(tX₁)}的大偏差原理：任意闭集F有limsup n⁻¹log P(S_n∈F)≤−inf_F I，任意开集O有liminf n⁻¹log P(S_n∈O)≥−inf_O I。I为良速率函数，允许无穷；约定log0=−∞、inf∅=∞。','cramer-truncated-dual-limit cramer-exponential-tightness cramer-bounded-full heine-borel-rn dominated-convergence','紧集上界用有限指数覆盖；下界把全部样本限制在截断事件内，再取截断速率极限。',
      r'若X恒定，直接用有界版本。以下非恒定。先证紧集K的上界。任取实L<inf_K I，对每个x∈K选Λ(t_x)<∞且t_xx−Λ(t_x)>L。邻域中仍严格大于L。有限子覆盖及指数Markov界给P(S_n∈K)≤Ne^(−nL)，与有界版本相同，但这里不把S_n限制在固定支持区间。令L趋inf_K I得紧集上界。',
      r'对闭F，取任意A>0，用指数紧性选K₀使外尾指数上界≤−A。F∩[−K₀,K₀]紧，分拆概率并用u+v≤2max(u,v)，得上极限≤max(−inf_(F∩[−K₀,K₀])I,−A)≤max(−inf_F I,−A)。令A趋无穷得到闭集上界，包括inf_F I=∞的情形。',
      r'下界先取x∈O且a<x<b，其中a,b为允许无穷的本质支持端点。令p_R=P(|X|≤R)>0。独立性使全部n个样本落在截断内的概率p_R^n；给定此事件，它们仍独立同分布，单变量分布为条件分布P_R。对任何开O，有 P(S_n∈O)≥p_R^n P_R^(⊗n)(S_n∈O)。该条件分布有界，其速率J_R(y)=sup_t{ty−log(M_R(t)/p_R)}=I_R(y)+log p_R。',
      r'应用有界Cramér定理得原概率下极限≥log p_R−inf_O J_R≥log p_R−J_R(x)=−I_R(x)。R趋无穷，由截断凸对偶逼近得≥−I(x)。注意这个步骤不要求用同一个倾斜参数处理所有截断，也覆盖原Λ有效域边界处不可微的情形。',
      r'若有限端点b在O且I(b)<∞，因为X≤b几乎必然，tb−Λ(t)=−log E exp(t(X−b))在t≥0时递增，支配收敛给其极限−log P(X=b)。任意t的期望至少P(X=b)，故上确界恰为该极限，所以I(b)=−log P(X=b)。全部变量等于b的事件直接给下界−I(b)。a端点同理。支持区间外I=∞：例如b有限且x>b时，取t趋正无穷并用Λ(t)≤tb即可，a侧类似。',
      r'故对O中每个有限速率点均有下界−I(x)，取其上确界即−inf_O I。若没有有限速率点，所需下界是−∞而自动成立。良速率性质由指数紧性命题已证，完成全部陈述。$\square$')
