"""Polynomial-ring dimension and the dimension/transcendence-degree formula."""
def register(P, BASES):
    P('finite-transcendence-exchange','algebra/dimension-theory algebra/field-extensions','有限超越基的交换与基数唯一性',r'若域 E 代数于 F(t₁,…,t_r)，且 t_i 对 F 代数无关，则 E 中任意 F-代数无关集至多有 r 个元素；每个超越基均恰有 r 个元素。','minimal-polynomial','从多项式关系中交换两个元素，逐次用新的独立元素替换有限生成集合。',
      r'先证交换事实：若 x 对 K 超越，却对 K(y) 代数，则清分母给非零关系 P(x,y)=0，P∈K[X,Y]。把它视为 Y 的多项式，其系数在 K[x]；x 超越保证非零多项式系数代入后仍非零，而且它不能是非零常数项独自成立，否则 x 对 K 代数。因此 y 对 K(x) 代数。',
      r'设 u₁,…,u_s 代数无关。从 E 代数于 F(t₁,…,t_r) 出发，逐次加入 u_j。假设已替换前 j−1 个，E 代数于 F(u₁,…,u_(j−1),剩余t)。u_j 对前面 u 的域超越，却对加入全部剩余 t 后的域代数。选一个使其代数的最小 t 子集，并挑其中一个 t。令 K 为前面 u 加上该子集其余 t 的域，交换事实使所挑 t 对 K(u_j) 代数。',
      r'因此可删去该 t、加入 u_j，同时仍使 E 代数于新生成域；这里使用代数扩张的传递性：有限个代数关系只需有限个代数系数，它们生成有限扩张，再用塔式次数得传递。每次至少删一个 t，最多 r 次。若 s>r，第 r+1 个 u 将对前面 u 的域代数，违反无关性。所以 s≤r。任意无限无关集若存在也有 r+1 元子集，同样被排除。',
      r'若另一组超越基大小为 s，则由刚证 s≤r，它也有限；反向以这组基为生成域重复论证，得 r≤s。因此基数唯一，记为 trdeg_F E=r。$\square$')
    P('polynomial-ring-dimension','algebra/dimension-theory algebra/polynomial-rings','多项式环的 Krull 维数',r'对任意域 k，dim k[x₁,…,x_r]=r。','noether-normalization integral-extension-dimension','非零素理想含一个非零多项式，首一化后其商整于至多 r−1 个变量的环，从而对变量数归纳。',
      r'r=0 时环为域，唯一素理想为零，维数0。设对 r−1 已知。固定 r 变量环 A 的任意非零素理想 p，选非零 f∈p。f 不可能是非零常数。使用正规化证明中的加权三角变量替换，将 f 化为最后一个变量 y_r 的首一多项式（非零标量可除去）；变换 x_i=y_i+y_r^(B^i)、x_r=y_r 可逆，逆为 y_i=x_i−x_r^(B^i)。',
      r'于是整域 A/p 由最后变量的商类有限生成于子环 R=image(k[y₁,…,y_(r−1)])，且该变量满足首一关系，所以为整扩张。整扩张保持维数给 dim(A/p)=dim R。R 是 r−1 变量多项式环的商；商环的任何素理想链沿满射取原像，给原环同长度严格素链。因此 dim R≤r−1。',
      r'对 A 的任意有限严格素链，可在最前补上零理想；A 是整环，零理想素。若链长度至少1，写成0⊊p₁⊊…⊊p_l，商 A/p₁ 中得到长度 l−1 的链，因此 l−1≤r−1，l≤r。未从零开始的链长度只会更小，故 dim A≤r。',
      r'反向 (0)⊊(x₁)⊊(x₁,x₂)⊊…⊊(x₁,…,x_r) 是长度 r 的严格素链，因为各商为余下变量的多项式整环。因此 dim A≥r，合并得等式。$\square$')
    P('affine-domain-dimension-formula','algebra/dimension-theory geometry/coordinate-rings','有限生成整环的维数等于超越次数',r'任意域 k 上非零有限生成整环 A 满足 dim A=trdeg_k Frac(A)。','noether-normalization polynomial-ring-dimension integral-extension-dimension finite-transcendence-exchange','正规化将环维数化到多项式子环；有限代数分式域扩张给同一组超越基。',
      r'Noether 正规化给代数无关 t₁,…,t_r∈A，使 A 有限于 C=k[t₁,…,t_r]，从而整于 C。整域整扩张保持维数及多项式环计算给 dim A=dim C=r。',
      r'正规化证明也已给 Frac(A) 是 k(t₁,…,t_r) 的有限代数扩张。因此 t₁,…,t_r 是该分式域的超越基；有限超越基交换定理保证超越次数定义无歧义，等于 r。合并两式即得公式。$\square$')
