"""A complete bounded-variable Cramer theorem, including boundary points."""
def register(P, BASES):
    P('bounded-exponential-tilt','probability/large-deviations','有界变量的指数倾斜与速率函数',r'设非恒定实变量X有界，本质下、上界为a<b。令Λ(t)=log E e^(tX)，I(x)=sup_(t∈R)(tx−Λ(t))。则Λ为C²且Λ″(t)>0，Λ′把R双射到(a,b)。对x∈(a,b)，唯一t_x满足Λ′(t_x)=x且I(x)=t_xx−Λ(t_x)。I(a)=−log P(X=a)、I(b)=−log P(X=b)，取−log0=∞；区间外I=∞。','dominated-convergence integral-linearity ftc-second','倾斜后的均值、方差就是对数矩母函数的一、二阶导数；大参数把质量压向本质端点。',
      r'因X有界，在t的任意紧邻域内，e^(tX)、Xe^(tX)、X²e^(tX)均被常数支配。差商用一元中值估计和支配收敛得矩母函数可两次连续求导。定义倾斜概率 dP_t=e^(tX−Λ(t))dP，则Λ′(t)=E_tX、Λ″(t)=Var_t(X)。倾斜密度严格正，非恒定性保持，所以方差严格正。',
      r'证明Λ′(t)→b当t→∞。对δ>0，本质上界定义给p=P(X>b−δ/2)>0。于是 P_t(X≤b−δ)≤e^(t(b−δ))/(p e^(t(b−δ/2)))=p⁻¹e^(−tδ/2)。因此0≤b−E_tX≤δ+(b−a)P_t(X≤b−δ)，先令t趋无穷再令δ趋零。对−X同理得t→−∞时Λ′(t)→a。连续严格递增及介值定理给双射。',
      r'对内部x，函数tx−Λ(t)的导数为x−Λ′(t)，在t_x之前正、之后负，故唯一全局最大值在t_x。若x>b，取t>0，由Λ(t)≤tb得tx−Λ(t)≥t(x−b)→∞；x<a同理。',
      r'在x=b，tb−Λ(t)=−log E exp(t(X−b))，对所有t实数该表达式不超过−log P(X=b)，并在t→∞时由支配收敛趋向此上界，包括原子概率为零的无穷情况。a端点对−X重复。I为仿射连续函数族的上确界，故下半连续且凸；下半连续可用{I>c}为各仿射函数超水平开集之并验证，凸性直接对每个t估计。$\square$')
    P('cramer-bounded-full','probability/large-deviations','有界独立同分布变量的完整大偏差原理',r'设X_i独立同分布且有界，均值样本S_n=n⁻¹ΣX_i。令Λ(t)=log E e^(tX₁)，I(x)=sup_t(tx−Λ(t))。则任意闭集F及开集O满足 limsup n⁻¹log P(S_n∈F)≤−inf_F I，liminf n⁻¹log P(S_n∈O)≥−inf_O I。约定log0=−∞、inf∅=∞；I的有限次水平集紧。','bounded-exponential-tilt markov chebyshev variance-mean independent-bounded-products heine-borel-rn','上界以指数Markov界和有限覆盖统一处理闭集，下界在指数倾斜后用大数效应恢复原概率。',
      r'若X₁恒等于c，则S_n=c、Λ(t)=tc，I(c)=0且其他点为∞，所有结论直接成立。以下本质范围[a,b]且a<b。样本均值几乎必然在[a,b]，I在其外为∞；I下半连续且非负（取t=0），所以有限次水平集为[a,b]内闭集，因而紧。',
      r'闭集上界：K=F∩[a,b]紧；若为空，概率为零。任取实L<inf_F I，对每个x∈K，由上确界定义可选t_x使t_xx−Λ(t_x)>L。连续性给x的开邻域U_x，在其中t_xy−Λ(t_x)>L。有限个U_j覆盖K。对任一j，事件S_n∈U_j推出 exp(nt_jS_n)>exp(n(L+Λ(t_j)))，Markov不等式及独立性给概率≤e^(−nL)。故总概率≤Ne^(−nL)，上极限≤−L。令L上升至inf_F I；若其为∞，L任意大也得所需−∞。',
      r'内部点下界：任取x∈O∩(a,b)，取t使Λ′(t)=x。在n个变量上以密度 exp(tΣX_i−nΛ(t))定义倾斜概率Q_n；原来的独立性和归一化逐因子相乘，保证它是概率且变量在Q_n下独立同分布，均值x、方差Λ″(t)。Chebyshev给Q_n(|S_n−x|<δ)→1。选δ>0使(x−δ,x+δ)⊆O，改回原概率得 P(S_n∈O)≥exp(−n[tx−Λ(t)+|t|δ])Q_n(|S_n−x|<δ)。',
      r'取对数除以n，后项趋零，因为Q_n概率趋1，得到下极限≥−I(x)−|t|δ。令δ下降至0得≥−I(x)。若O包含端点a且I(a)<∞，则p=P(X=a)>0，全部n个变量等于a的事件给P(S_n∈O)≥p^n，故下极限≥log p=−I(a)；b端点相同。若端点I=∞，它对取下确界的下界不产生限制。对O中所有有限I点取最优下界即得结论；若无此点，右端为−∞，不等式自动成立。$\square$')
    P('bernoulli-cramer-rate','probability/large-deviations probability/distributions','Bernoulli 大偏差速率及非指数尾反例',r'对Bernoulli(p)，0<p<1，样本均值的大偏差速率在[0,1]为 I(x)=x log(x/p)+(1−x)log((1−x)/(1−p))，约定0log0=0；区间外为∞。仅有可积性不能保证偏离均值的概率指数小。','cramer-bounded-full','显式求解倾斜参数；另用Pareto尾说明缺少指数矩时的限制。',
      r'Λ(t)=log(1−p+pe^t)，Λ′(t)=pe^t/(1−p+pe^t)。对0<x<1解得 e^t=x(1−p)/(p(1−x))。代入tx−Λ(t)并合并对数得所列式。端点分别为−log(1−p)、−log p，与原子概率公式一致；区间外速率无穷。大偏差上下界由有界变量定理给出。',
      r'反例取非负可积X，尾概率P(X>r)=r^(−α)（r≥1），α>1。这可由(0,1)均匀变量U令X=U^(−1/α)构造，期望∫₀¹u^(−1/α)du=α/(α−1)=μ有限。取独立同分布副本。对任意c>μ，P(S_n>c)≥P(X₁>nc)=(nc)^(−α)，因为其余变量非负。',
      r'于是 liminf n⁻¹log P(S_n>c)≥lim[−αlog(nc)/n]=0，而概率不超过1给上极限≤0，故极限为0，不可能有正指数衰减速率。大数定律仍适用并使该概率趋零，两种结论并不矛盾。$\square$')
