"""Cauchy, p-groups, Sylow and elementary applications."""
def register(P, BASES):
    P('orbit-coset-class-equation','algebra/orbits-stabilizers algebra/group-actions','任意群的轨道陪集对应及有限群类方程',r'任意群 G 作用于 X 时，G/G_x 的左陪集集合与轨道 Gx 通过 gG_x↦gx 双射。有限群的共轭作用给类方程 |G|=|Z(G)|+Σ_i[G:C_G(x_i)]，其中每个非中心共轭类各取一个代表 x_i。','subgroup-test axiom-group','先直接验证陪集到轨道的双射，再对共轭作用分割整个群。',
      r'稳定子 G_x 是子群：单位元固定 x，两个固定 x 的元素 g,h 满足 gh⁻¹x=x。若 gG_x=hG_x，则 h⁻¹g∈G_x，所以 gx=hx；反向若 gx=hx，同样得到 h⁻¹g∈G_x，从而两陪集相同。这证明映射良定义且单射，满射由轨道定义得到，完全不需 G 有限。',
      r'对共轭作用 g·x=gxg⁻¹，稳定子恰为中心化子 C_G(x)。轨道为共轭类，其基数等于该中心化子的指数。单元素共轭类恰为中心元素。有限 G 被全部共轭类分割，把单元素类合并为 |Z(G)|，其余各类按轨道公式计数即得类方程。$\square$')
    P('cauchy-finite-group','algebra/finite-groups','Cauchy 有限群定理',r'若素数 p 整除有限群 G 的阶，则 G 有阶为 p 的元素。','orbit-stabilizer lagrange','循环移动乘积为一的 p 元组，除固定点外每个轨道都有 p 个元素。',
      r'令 X={(g₁,…,g_p):g₁…g_p=1}。前 p−1 项可任取，末项唯一，故 |X|=|G|^(p−1)，被 p 整除。循环移动元组仍在 X 中，因为 g₂…g_pg₁=g₁⁻¹(g₁…g_p)g₁=1。',
      r'阶 p 循环群的作用轨道大小由轨道—稳定子只能为1或p，故固定元组数与 |X| 模 p 同余，为0。固定元组恰为 (g,…,g)，其中 g^p=1。单位元给一个固定点，固定点总数是 p 的正倍数，所以至少还有一个非单位解 g。其阶整除 p，且非1，故为p。$\square$')
    P('p-group-fixed-points','algebra/group-actions algebra/finite-groups','p 群作用的固定点同余与非平凡中心',r'有限 p 群 P 作用在有限集 X 上时，|X|≡|X^P| (mod p)。非平凡有限 p 群的中心非平凡；阶 p^a 的群对每个 0≤k≤a 均有阶 p^k 的子群。','orbit-stabilizer cauchy-finite-group first-isomorphism','非单点轨道大小都被 p 整除；对共轭作用应用后，递归取中心的阶 p 子群作商。',
      r'每个轨道大小为 P 中稳定子的指数，故是 p 的幂。非单点轨道大小均被 p 整除，单点轨道恰为被 P 全体固定的点，得到同余。',
      r'对 P 在自身上的共轭作用，固定点恰为中心 Z(P)。|P|≡0 (mod p)，所以 |Z(P)| 也被 p 整除；它至少含单位元，故至少含 p 个元素。Cauchy 给中心中阶 p 的子群 C，中心子群正规。',
      r'按 a 归纳证明各阶子群存在。k=0 取单位子群。对 k≥1，商 P/C 阶 p^(a−1)，归纳假设给其中阶 p^(k−1) 的子群 H。其商映射原像 K 为子群；它由 |H| 个大小 p 的 C 陪集组成，故 |K|=p^k。起点 a=0 只有平凡群，归纳完成。$\square$')
    P('sylow-existence','algebra/finite-groups','Sylow 第一存在定理',r'若 |G|=p^a m、p 为素数且 p∤m，则有限群 G 有阶 p^a 的子群；从而每个 0≤k≤a 都有阶 p^k 的子群。','orbit-stabilizer p-group-fixed-points binomial-count euclid-lemma','让 G 左乘作用在大小为 p^a 的子集上；其中一个轨道大小不被 p 整除，其稳定子恰有阶 p^a。',
      r'令 X 为 G 的所有 p^a 元子集，|X|=binom(p^a m,p^a)。证明该数模 p 等于 m：在 F_p[x] 中，binom(p,j) 对 0<j<p 都被 p 整除（p! 含一个因子 p，j!、(p−j)! 不含），所以 (1+x)^p=1+x^p。重复 a 次得 (1+x)^(p^a m)=(1+x^(p^a))^m，比较 x^(p^a) 系数得到所求同余，故 |X| 不被 p 整除。',
      r'G 左乘作用于 X。如果所有轨道大小都被 p 整除，则总数也被 p 整除，矛盾。故某 S∈X 的稳定子 H 满足其轨道大小 [G:H] 不被 p 整除，因此 |H| 含有 p^a 因子。',
      r'另一方面，H 在 S 上的左乘作用自由：h s=s 迫使 h=1。因此每个 H 轨道大小为 |H|，这些轨道分割 S，所以 |H| 整除 |S|=p^a。与前步合并只能 |H|=p^a。最后在此 p 群 H 内使用已证各阶子群存在性，得到 p^k 版本。$\square$')
    P('sylow-conjugacy-count','algebra/finite-groups','Sylow 共轭定理与个数约束',r'若 |G|=p^a m、p∤m，所有阶 p^a 子群称 Sylow p 子群。每个 p 子群包含于某个 Sylow p 子群；全部 Sylow p 子群两两共轭，其个数 n_p 整除 m 且 n_p≡1 (mod p)。n_p=1 当且仅当该 Sylow 子群正规。','sylow-existence p-group-fixed-points orbit-stabilizer lagrange','先让 p 子群作用于 Sylow 陪集，再让固定 Sylow 子群共轭作用于全部 Sylow 子群。',
      r'固定 Sylow 子群 P，令任意 p 子群 Q 左乘作用在 G/P 上。该集合大小 m 不被 p 整除，固定点同余保证至少一个固定陪集 gP。Q 固定 gP 意味着 g⁻¹Qg⊆P，故 Q⊆gPg⁻¹。如果 Q 本身为 Sylow，两边阶相等，包含变成相等，从而共轭性成立。',
      r'G 共轭作用在 Sylow 集合上可迁，其稳定子为 N_G(P)={g:gPg⁻¹=P}。它是子群并包含 P，直接由共轭复合、取逆验证。因此 n_p=[G:N_G(P)]；又 [G:P]=[G:N_G(P)][N_G(P):P]=m，故 n_p 整除 m。',
      r'让 P 共轭作用于全部 Sylow 子群。若 Q 被 P 固定，则 P 正规化 Q，因此 PQ 是子群：利用 pQp⁻¹=Q 可将乘积和逆重新写为 PQ 的形式。乘积集合的大小为 |P||Q|/|P∩Q|，因为映射 P×Q→PQ 的每个纤维由公共交元素一一参数化。因此 |PQ| 是 p 幂，且被 |G| 整除，至多 p^a。它包含已有阶 p^a 的 P 与 Q，只能 P=Q。',
      r'所以该作用唯一固定点是 P 本身，固定点同余给 n_p≡1 (mod p)。最后，唯一 Sylow 必被每个共轭保持，故正规；反向正规 Sylow 的所有共轭都等于自身，而全部 Sylow 已证共轭，所以只有一个。$\square$')
    P('order-fifteen-cyclic','algebra/finite-groups','十五阶群必为循环群',r'每个阶15的群都同构于 C₁₅。','sylow-conjugacy-count lagrange','两个 Sylow 个数约束都迫使唯一；互素阶正规子群彼此交换，生成元乘积的阶为15。',
      r'n₅ 整除3且同余1模5，只能1；n₃ 整除5且同余1模3，也只能1。因此阶5与阶3子群 P,Q 都正规。素数阶群中任意非单位元按 Lagrange 具有全阶，故可取生成元 x,y，分别阶5、3。',
      r'对 p∈P、q∈Q，交换子 pqp⁻¹q⁻¹ 同时属于 P 与 Q（分别利用两子群正规）。交子群的阶整除5和3，故交为{1}，交换子只能为1，P,Q 逐元素交换。',
      r'若 (xy)^n=1，则 x^n=y^(−n) 属于 P∩Q，只能为1，因此5和3都整除n，15整除n。反向 (xy)^15=1，故 xy 阶15，生成整个 G。$\square$')
    P('alternating-four-no-six','algebra/finite-groups','A₄ 没有六阶子群',r'交错群 A₄ 的阶为12，但它没有阶6的子群，说明 Lagrange 阶整除条件不是一般充分条件。','lagrange first-isomorphism','指数二子群必正规，商群阶二却不能容纳三循环的非平凡像，而 A₄ 由三循环生成。',
      r'四个字母的偶置换为：单位元、8个三循环（四种选三字母，每种两方向）、3个双对换。因此 |A₄|=12。它由三循环生成：三循环自身已在生成集中，且例如 (12)(34)=(132)(134)（从右向左作用），其他双对换由重新命名字母得到。',
      r'若 H 阶6，则指数二。对 g∉H，左右陪集 gH、Hg 都是 H 的补集，因而相等；g∈H 时亦相等。所以 H 正规，商群 A₄/H 阶二。',
      r'商映射下每个三循环 c 的像满足 image(c)^3=1，且阶整除商群阶二，因此该像阶整除 gcd(2,3)=1，必为单位。全部生成元都映为单位，故整个 A₄ 映为单位，与商群阶二矛盾。因此不存在 H。$\square$')
