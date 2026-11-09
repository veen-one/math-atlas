"""Finite discrete memoryless channel coding: achievability and weak converse."""
def register(P, BASES):
    P('finite-information-identities','discrete/channel-capacity discrete/entropy','有限变量的条件熵、互信息及信息不增',r'所有对数以2为底。有限变量满足H(X,Y)=H(Y)+H(X|Y)，I(X;Y)=H(X)−H(X|Y)=D₂(P_XY‖P_XP_Y)≥0，故条件化不增加熵。若X→Y→Z为Markov链，则I(X;Z)≤I(X;Y)。','gibbs-inequality entropy-bound','展开联合概率的对数分解得到链式法则，条件互信息是逐条件分布的非负散度。',
      r'只对正概率项求和，p(x,y)=p(y)p(x|y)使−log p(x,y)=−log p(y)−log p(x|y)，求期望得熵链式法则。展开联合分布对乘积分布的散度，得I=H(X)+H(Y)−H(X,Y)，代入链式法则即为H(X)−H(X|Y)。Gibbs不等式保证非负，因此H(X|Y)≤H(X)。',
      r'条件互信息I(X;Z|Y)定义为对每个正概率y的条件分布互信息的概率加权和，故非负。链式法则展开给 I(X;Y,Z)=I(X;Y)+I(X;Z|Y)=I(X;Z)+I(X;Y|Z)。Markov条件使给定Y后X,Z独立，故第一式末项为零；第二式末项非负，推出数据处理不等式。',
      r'重复使用H(Y_i|Y₁,…,Y_(i−1))≤H(Y_i)，得H(Y₁,…,Y_n)≤Σ_iH(Y_i)。这些恒等式针对有限集合无需任何极限或测度正则性假设。$\square$')
    P('fano-finite-message','discrete/channel-capacity discrete/source-coding','有限消息的 Fano 不等式',r'消息M有K≥2个可能值，观测Y后用确定性解码器估计Mhat，错误概率P_e=P(Mhat≠M)。则H(M|Y)≤H₂(P_e)+P_e log₂(K−1)≤1+P_e log₂K。','finite-information-identities entropy-bound','额外告知是否解码错误，正确时消息确定，错误时至多剩K−1种。',
      r'令E=1_(Mhat≠M)。给定M,Y可确定E，故H(E|M,Y)=0。条件链式法则给 H(M|Y)=H(M,E|Y)=H(E|Y)+H(M|E,Y)。',
      r'条件化不增加熵给H(E|Y)≤H(E)=H₂(P_e)。E=0时M=Mhat(Y)，条件熵零；E=1时给定Y，M至多有K−1种可能，熵界给该条件熵至多log₂(K−1)。按E的概率加权便得第一不等式，再用二元熵≤1和K−1≤K得到第二式。$\square$')
    P('dm-channel-random-coding','discrete/channel-capacity','离散无记忆信道的随机编码可达性',r'有限输入输出字母表信道W(y|x)，固定输入分布p，互信息I_p(X;Y)。对0<R<I_p，存在长度n的确定性码，其码率趋R，平均错误概率趋零；删去至多一半消息后，最大错误概率亦趋零且渐近码率不变。','finite-information-identities chebyshev variance-mean independent-bounded-products markov','独立随机抽码字，按信息密度阈值解码；真码字由大数效应通过阈值，其他码字的误报用似然比均值控制。',
      r'令q(y)=Σ_xp(x)W(y|x)。当p(x)W(y|x)>0时q(y)>0，定义i(x;y)=log₂(W(y|x)/q(y))。有限字母表上，正联合概率支持中的i只有有限多个有限值，故均值I_p及方差有限。长度n的乘积信道与输入分布使信息密度为Σ_j i(X_j;Y_j)，各项独立同分布，Chebyshev保证n⁻¹i(X^n;Y^n)依概率趋I_p。',
      r'取δ>0使R+2δ<I_p，K_n=floor(2^(nR))。独立抽取K_n个码字，每个按p^n分布。给输出y^n，只在恰好一个码字满足 i(x^n;y^n)>n(R+δ)时译为该消息，否则宣告错误。若q^n(y^n)=0，该输出在此随机实验中概率为零，可任意定义译码。W^n为零的候选信息密度定义为−∞。',
      r'真消息均匀，真码字与输出的联合分布为(pW)^n。因此真码字未过阈值的概率趋零。任一非真码字独立于输出，给定q^n(y^n)>0，似然比L=W^n(y^n|X^n)/q^n(y^n)的p^n均值为1。Markov界给该错误码字过阈值的概率≤2^(−n(R+δ))；对至多K_n−1个竞争码字求并界，误报概率≤2^(−nδ)。',
      r'所以随机码本的平均错误概率期望≤真码字失败概率+2^(−nδ)→0。有限码本集合中至少一个确定性码本的错误概率不超过该平均值，选它得到平均误差可达性。log₂K_n/n→R。码字即使抽样时可能重复，也不影响该存在论证，因为重复造成的错误已计入上界。',
      r'若选定码平均误差为ε_n，至多一半消息的条件错误概率大于2ε_n；保留其余至少K_n/2个消息。保持原译码，对已删除输出改判任一保留消息，不会使保留消息的正确概率降低。于是最大错误≤2ε_n，码率损失至多1/n（取整仅给趋零项），完成最大误差形式。$\square$')
    P('dm-channel-capacity-weak-converse','discrete/channel-capacity','有限离散无记忆信道容量定理及弱逆定理',r'定义C=max_p I_p(X;Y)。有限DMC的任意0<R<C可由确定性块码以最大错误概率趋零实现；任何均匀K_n消息码若平均错误概率趋零，则limsup log₂K_n/n≤C。更具体，(1−P_e)log₂K_n≤nC+1。','dm-channel-random-coding fano-finite-message finite-information-identities heine-borel-rn','随机编码给容量以下可达；链式熵界限制n次信道携带的信息，再由Fano将可靠消息数转成互信息下界。',
      r'输入概率单纯形紧。互信息可写为H(q)−Σ_xp(x)H(W(·|x))，其中q=pW；函数−u log₂u在u=0连续填0，所以互信息对p连续，最大值C可取得。对任意0<R<C，选I_p>R，随机编码定理给最大错误概率趋零的码。',
      r'逆向令M均匀分布于K_n个消息，编码器确定地给X^n，输出为Y^n。信道无记忆使 H(Y^n|M)=Σ_jH(Y_j|X_j)：给定消息后输入串确定，输出各坐标按各自信道行独立。另一方面H(Y^n)≤Σ_jH(Y_j)，故 I(M;Y^n)≤Σ_j[H(Y_j)−H(Y_j|X_j)]=Σ_jI(X_j;Y_j)≤nC。输入坐标之间不要求独立。',
      r'Fano给 H(M|Y^n)≤1+P_e log₂K_n，因此log₂K_n=I(M;Y^n)+H(M|Y^n)≤nC+1+P_e log₂K_n。移项得所列有限块长界，K_n=1时同样直接成立。若P_e→0，除以n(1−P_e)取上极限，得到容量上界。',
      r'此为弱逆定理：排除超过C且误差趋零的码，不以它声称超过容量时错误必趋1的强逆结论。定理也不把“存在好码”误解为随机抽到的每个码本都好，或有限块长下误差恰为零。$\square$')
