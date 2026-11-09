"""Noether normalization by weighted polynomial substitution."""
def register(P, BASES):
    P('finite-module-integrality','algebra/modules algebra/dimension-theory','有限模代数的整性及有限性的传递',r'若含幺交换代数 S 是有限生成 R-模，则 S 的每个元素对 R 整。若 S 有限于 R、R 有限于 A，则 S 有限于 A。','finite-integral-algebra','乘法在有限生成模上的矩阵关系给首一方程；两层生成元的乘积生成复合扩张。',
      r'设 u₁,…,u_m 生成 S。固定 s∈S，写 su_j=Σ_i a_ji u_i。矩阵关系 (sI−A)u=0，乘伴随矩阵得 det(sI−A)u_j=0 对每个 j。因1∈S由这些 u_j 的 R 线性组合表示，得到 det(sI−A)=0。该表达式为 s 的首一多项式，证明整性；生成元无需线性无关。',
      r'若 r₁,…,r_l 是 R 的 A-模生成元，每个 S 元素先写成 Σ_j c_ju_j、c_j∈R，再把各 c_j 展开为 r_i 的 A 线性组合。故有限个 r_i u_j 生成 S，得到有限性传递。$\square$')
    P('noether-normalization','algebra/dimension-theory algebra/polynomial-rings geometry/coordinate-rings','Noether 正规化引理（任意基域）',r'若非零 k-代数 A 为有限生成整环，则存在代数无关 t₁,…,t_r∈A，使 A 是 k[t₁,…,t_r] 上的有限生成模。因此该子环确为多项式环，Frac(A) 是 k(t₁,…,t_r) 的有限代数扩张。不要求基域无限。','finite-module-integrality finite-integral-algebra minimal-polynomial','用不同大幂次替换变量，让关系式在最后一个变量的最高项只来自一个单项式，再对生成元个数归纳。',
      r'写 A=k[a₁,…,a_n]，按 n 归纳。n=0 时 A=k，取 r=0。若 a₁,…,a_n 代数无关，则 A 本身为它们的多项式环，作为自身模由1生成，完成。否则存在非零多项式 f(x₁,…,x_n) 使 f(a)=0。',
      r'取整数 B 大于 f 中全部单项式的每个变量指数。赋权 w_n=1、w_i=B^i（1≤i<n）。由于各指数小于 B，单项式的加权次数 α_n+Σ_(i<n)α_i B^i 由 B 进制表示唯一决定指数向量，所以不同单项式权重不同。',
      r'令 x_i=y_i+y_n^(B^i)（i<n）、x_n=y_n。每个原单项式展开后的 y_n 最高次项恰为其加权次数，系数为原标量系数；展开中凡选择某个 y_i 因子，y_n 次数就严格降低。因此整个替换多项式的最高 y_n 次项只来自唯一最大权重单项式，其系数为非零 k 标量。除以该标量后，得到关于 y_n 的首一多项式，系数在 k[y₁,…,y_(n−1)]。',
      r'在 A 内置 b_i=a_i−a_n^(B^i)，R=k[b₁,…,b_(n−1)]。替换关系使 a_n 对 R 整，且 A=R[a_n]，因为 a_i=b_i+a_n^(B^i)。首一关系把 a_n 高次幂消去，所以 A 有限于 R。R 是整环且至多 n−1 个代数生成元，归纳假设给其中代数无关 t₁,…,t_r，使 R 有限于 C=k[t₁,…,t_r]。有限性传递得 A 有限于 C。',
      r'有限模整性使每个 a_i 对 C 整，因而对分式域 F=k(t₁,…,t_r) 代数。嵌入 Frac(A) 中，F(a₁,…,a_n) 是有限个代数元素生成的域，故为有限代数扩张。它包含 A 及其全部非零元素的逆，所以等于 Frac(A)。证明完成；尚不能单凭该引理直接略去 Krull 维数所需的素理想链论证。$\square$')
