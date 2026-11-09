"""Finite-alphabet lossless prefix coding, including the achievable block bound."""
def register(P, BASES):
    P('binary-kraft-prefix','discrete/source-coding discrete/entropy','二进制前缀码的 Kraft 不等式与逆构造',r'有限个非负整数码长l₁,…,l_m可由二进制前缀码实现，当且仅当Σ_i2^(−l_i)≤1。允许唯一符号取空码字；若多于一个符号，前缀性质排除空码字。','binomial-count','必要性在共同深度数互不相交的树后代；充分性按长度递增分配二进区间。',
      r'前缀码指任何一个码字都不是另一个的前缀。令L=max l_i，每个长度l_i码字在深度L的完全二叉树有2^(L−l_i)个后代；前缀性质使这些后代集合不交，总数不超过2^L。除以2^L得Kraft不等式。空码字对应根，其后代已占满全树，所以只能用于单符号。',
      r'反向将长度升序排列。令s_i=Σ_(j<i)2^(−l_j)，由l_j≤l_i可知s_i是2^(−l_i)的整数倍。Kraft条件给s_i+2^(−l_i)≤1，因此区间[s_i,s_i+2^(−l_i))是[0,1)中的二进区间，对应一个长度l_i二进制字。',
      r'这些区间首尾相接、互不相交。若某码字为另一码字前缀，对应二进区间将包含另一区间，与不交矛盾。故所构造的字形成前缀码，且长度正好为所给整数。码长0时只有区间[0,1)，同样适用。$\square$')
    P('shannon-prefix-length-bound','discrete/source-coding discrete/entropy','无损前缀码的熵下界与 Shannon 上界',r'有限源分布p的正概率符号，用二进制前缀码编码时平均长度L满足L≥H₂(p)=−Σp_i log₂p_i。并存在前缀码满足H₂(p)≤L<H₂(p)+1。对单符号源可取长度0。','binary-kraft-prefix gibbs-inequality','Kraft质量归一化成概率后，平均码长与熵的差分解为非负散度及Kraft余量。',
      r'设码长l_i，K=Σ2^(−l_i)∈(0,1]，定义q_i=2^(−l_i)/K。直接代入得 D₂(p‖q)=Σp_i log₂(p_i/q_i)=−H₂(p)+L+log₂K，故 L−H₂(p)=D₂(p‖q)−log₂K≥0。Gibbs不等式用自然对数证明后除以ln2即可，且K≤1保证另一项非负。',
      r'上界取l_i=ceil(−log₂p_i)。因为2^(−l_i)≤p_i，总和不超过1，Kraft逆构造给前缀码。又 −log₂p_i≤l_i<−log₂p_i+1，乘p_i求和得H₂≤L<H₂+1。单符号p=1时l=0，得到空码字。',
      r'前缀码可无歧义串接解码：从首位开始读到一个码字就输出符号，前缀性质排除一个合法码字同时是另一个尚未读完的码字。递归处理余下比特即可恢复整个符号串。此下界针对所列前缀码类；不把未经证明的所有唯一可译码的Kraft–McMillan推广混入陈述。$\square$')
    P('iid-source-prefix-theorem','discrete/source-coding discrete/entropy','有限独立同分布信源的无损块编码定理',r'有限字母表上独立同分布信源熵为H₂(X)。将n个符号作为一块，用二进制前缀码无损编码，其最小平均块码长L_n满足 nH₂(X)≤L_n<nH₂(X)+1，因而L_n/n→H₂(X)。每个满足任意给定ε>0的足够长块码都可达到每符号平均长度小于H₂+ε。','shannon-prefix-length-bound independent-bounded-products','独立性使块熵可加，对整个有限块字母表应用单次前缀码界即可。',
      r'只保留正概率字母。块x₁,…,x_n概率为∏p(x_j)，故−log₂该概率=Σ_j−log₂p(x_j)。对有限块字母表求期望并交换有限和，每一项期望都是H₂(X)，所以块熵恰为nH₂(X)。',
      r'任意块前缀码由熵下界得平均长度至少nH₂。对块分布用Shannon长度构造，得到一个平均长度严格小于nH₂+1的前缀码。最优平均长度的最小值确实存在：固定一个候选上界C，若某码平均长度≤C，则对每个正概率块w有l(w)≤C/P(w)，每个长度只有有限整数选择，块数也有限；因此这种候选长度表有限，最小值可在其中取到。',
      r'于是L_n介于两界之间，除以n得0≤L_n/n−H₂<1/n。选择n>1/ε即得可达性。这里是零错误、可变长、按平均长度衡量的独立同分布有限信源定理；它不声称每个源串都能被压缩，也不把平均码长与固定长允许误差的编码率混为同一指标。$\square$')
