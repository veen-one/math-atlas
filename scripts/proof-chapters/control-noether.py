"""Signal-space small gain and the finite-dimensional Noether identity."""
def register(P, BASES):
    P('small-gain-banach','applied/robust-control applied/feedback-control','Banach 信号空间的小增益定理',r'Banach 空间 X,Y 间映射 G₁:X→Y、G₂:Y→X 满足 G_i(0)=0 及全局 Lipschitz 常数 γ_i。若 γ₁γ₂<1，则对任意输入 r∈X、s∈Y，反馈方程 u=r−G₂(v)、v=s+G₁(u) 有唯一解，且 ‖u‖≤(‖r‖+γ₂‖s‖)/(1−γ₁γ₂)、‖v‖≤(‖s‖+γ₁‖r‖)/(1−γ₁γ₂)。','banach-contraction','把两反馈方程合成一个压缩映射，再对两个信号的范数联立估计。',
      r'定义 T(u)=r−G₂(s+G₁(u))，则 ‖T(u)−T(w)‖≤γ₂γ₁‖u−w‖。X 完备，Banach 压缩定理给唯一固定点u；令v=s+G₁(u)，即得到解，任一反馈解都给同一固定点，所以解唯一。',
      r'由G_i(0)=0，有 ‖u‖≤‖r‖+γ₂‖v‖、‖v‖≤‖s‖+γ₁‖u‖。相互代入并除以正数1−γ₁γ₂，即得两界。对两组输入的解之差重复同样估计，还得相同形式的 Lipschitz 输入—信号界。',
      r'若X,Y采用信号的上确界范数，这给反馈内部信号对有界输入的有界响应。这里的结论是给定信号算子的适定性与有限增益；不自动证明某个状态空间实现的不可观隐藏模态稳定，也不把仅单点增益界替代所列全局 Lipschitz 条件。$\square$')
    P('noether-point-symmetry','applied/symmetry-conservation applied/classical-mechanics geometry/moment-maps','点变换及边界项形式的 Noether 守恒律',r'设 L(t,q,v) 足够光滑，p=∂_vL、H=p·v−L，q(t) 为 C² Euler–Lagrange 解。若光滑函数 τ(t,q)、ξ(t,q)、B(t,q) 满足恒等式 L_tτ+L_q·ξ+p·(D_tξ−vD_tτ)+L D_tτ=D_tB，其中 D_t=∂_t+v·∂_q，则 Q=p·ξ−Hτ−B 沿解恒定。','euler-lagrange-variation','把无穷小作用量不变条件逐项代入守恒量导数，利用 Euler–Lagrange 方程抵消。',
      r'沿解有 ṗ=L_q。计算 Ḣ=ṗ·v+p·v̇−L_t−L_q·v−p·v̇=−L_t，因此自主 L_t=0 时 H 守恒。此计算不要求 Legendre 变换可逆。',
      r'对 p·ξ−Hτ 求导，得到 L_q·ξ+p·D_tξ+L_tτ−H D_tτ。代入 H=p·v−L，正好等于 L_tτ+L_q·ξ+p·(D_tξ−vD_tτ)+L D_tτ。题设恒等式使它等于D_tB，因此Q̇=0。',
      r'时间平移取τ=1、ξ=0、B=0，在L_t=0时Q=−H；第j坐标平移取τ=0、ξ=e_j、B=0，在L不依赖q_j时Q=p_j。一般式给这些守恒量共同来源。所列恒等式是允许作用量差一个全导数的无穷小对称条件；它不是对任意连续变换都自动成立的断言。$\square$')
