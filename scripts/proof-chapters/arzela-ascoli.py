"""Sequential Arzela-Ascoli theorem on compact metric spaces."""
def register(P, BASES):
    P('arzela-ascoli-sequential','geometry/compactness analysis/function-sequences analysis/uniform-convergence','Arzelà–Ascoli 定理的序列形式',r'设 K 为紧致度量空间，f_n:K→R 连续。若函数列逐点有界且等度连续，即对每个 ε>0 存在 δ>0 使所有 n 和 d(x,y)<δ 都有 |f_n(x)−f_n(y)|<ε，则存在一致收敛到连续函数的子列。','bolzano-weierstrass axiom-metric axiom-dependent-choice axiom-real','用有限网构造可数稠密集，在该集上对角抽取，再用等度连续把有限个点的控制推广到全空间。',
      r'空 K 的结论直接成立。否则，对每个正整数 m，用紧致性从半径 1/m 的开球覆盖中选有限子覆盖，记球心集合 D_m。D=∪_m D_m 可数且稠密：给 x 与 r>0，取 1/m<r，则某球心距 x 小于 r。若 D 有限可重复列举，否则将它枚举为 d_1,d_2,…。',
      r'逐点有界使每个实数列 f_n(d_j) 有界。对 j=1 用 Bolzano–Weierstrass 取收敛子列，再从其中对 j=2 抽取，依次继续。每次保留前次子列的顺序，取第 k 层子列的第 k 项构成 g_k；这些原下标严格递增，且对每个固定 j，g_k(d_j) 在 k≥j 后属于第 j 层的收敛子列，所以收敛。',
      r'固定 ε>0，等度连续给 δ>0，使 d(x,y)<δ 时所有 k 有 |g_k(x)−g_k(y)|<ε/3。稠密性使以 D 为中心、半径 δ 的球覆盖 K；紧致性给有限中心 d_(j_1),…,d_(j_s)。这些中心上各数列收敛，故存在 N，使 k,l≥N 时每个中心的值差小于 ε/3。任意 x 选距其小于 δ 的中心，三角不等式给 |g_k(x)−g_l(x)|<ε。因此 g_k 一致柯西。',
      r'对每个 x，实数完备性给 g(x)=lim_k g_k(x)。在上一一致柯西估计中固定 k≥N，再令 l→∞，得到对所有 x 有 |g_k(x)−g(x)|≤ε；故一致收敛。为证 g 连续，给 x 与 η>0，选 k 使全域 |g_k−g|<η/3，再由 g_k 在 x 连续选邻域使 |g_k(y)−g_k(x)|<η/3。三角不等式得 |g(y)−g(x)|<η，故 g 连续。$\square$')
