"""Elementary number theory through quadratic reciprocity and Liouville."""
def register(P, BASES):
    P('carmichael-561','numbertheory/primality-testing numbertheory/congruences','561 是 Carmichael 伪素数',r'561=3·11·17 为合数，但对每个整数 a 与 561 互素，均有 a^560≡1 (mod 561)。','fermat-little chinese-remainder','指数 560 是 3、11、17 各自乘法群阶数 p−1 的公倍数，再由中国剩余定理合并。',
      r'直接计算 561=3·11·17，三个因子互异素数，所以 561 是合数。若 gcd(a,561)=1，则 a 分别不被 3、11、17 整除。',
      r'对模 3、11、17 分别应用费马小定理，得到 a²≡1 (mod 3)、a¹⁰≡1 (mod 11)、a¹⁶≡1 (mod 17)。因为 2、10、16 均整除 560，对各同余式取相应整数次幂，得 a⁵⁶⁰ 在三个模数下都同余于 1。',
      r'模数 3、11、17 两两互素。中国剩余定理说明，一个整数若模这三个数都与 1 同余，就模其乘积 561 与 1 同余。因此 a⁵⁶⁰≡1 (mod 561)。这证明 561 对所有可用费马检验的底数都通过，而非仅对少数底数通过；素数性检验的该必要条件不充分。$\square$')
    P('chinese-remainder','numbertheory/congruences numbertheory/local-global-principle','互素模数的中国剩余定理',r'正整数 m₁,…,m_r 两两互素，则任意剩余类组 a_i 存在唯一模 M=∏m_i 的整数类 x，满足 x≡a_i mod m_i。','bezout euclid-lemma unique-factorization','用贝祖等式制造只在某一个模数下等于一的基向量。',
      r'令 M_i=M/m_i。两两互素及素因子唯一分解说明 gcd(M_i,m_i)=1，故贝祖定理给 b_iM_i≡1 mod m_i。取 x=Σ_i a_i b_iM_i。',
      r'模 m_j 时，i≠j 的 M_i 都含 m_j 因子，故相应项消失，第 j 项等于 a_j。因此所有同余同时满足。',
      r'若 x,y 同时满足，则每个 m_i 整除 x-y。因模数素因子互不重叠，唯一分解说明 M 整除差（差为零时直接成立），故模 M 类唯一。模数为 1 时约束为空，构造中的逆可任取，结论不变。$\square$')
    P('totient-product','numbertheory/arithmetic-functions numbertheory/modular-exponentiation','欧拉函数的积性与乘积公式',r'若 gcd(m,n)=1，则 φ(mn)=φ(m)φ(n)；若 N=∏p_i^(e_i)，则 φ(N)=N∏_i(1-1/p_i)。','chinese-remainder unique-factorization','中国剩余对应保留可逆性，素数幂上只需排除被该素数整除的剩余类。',
      r'整数类 a mod k 可逆当且仅当 gcd(a,k)=1：一个方向用贝祖构造逆，另一个方向由公因数整除逆等式中的 1。中国剩余同构按逐坐标保持乘法，可逆元素恰好对应两边都可逆的坐标对，所以数量相乘。',
      r'模 p^e 共 p^e 个类，不互素者恰是 p 的倍数，共 p^(e-1) 个，故 φ(p^e)=p^e-p^(e-1)。对互素的素数幂反复应用积性，即得乘积公式。N=1 按空乘积为 1。$\square$')
    P('finite-subgroup-cyclic','algebra/finite-fields numbertheory/discrete-logarithms','域乘法群的有限子群循环',r'域 K 的乘法群中任意有限子群 G 都是循环群，特别是有限域的非零乘法群循环。','lagrange root-bound unique-factorization bezout','先按各素数收集最大阶的素数幂分量，再用根数上界迫使得到的元素生成全群。',
      r'对阶为 d 的元素 a，a^k 的阶为 d/gcd(d,k)：令 g=gcd(d,k)，则 d/g 次幂为一；反之若 d 整除 kt，约去公因数并用贝祖互素性，得 d/g 整除 t。',
      r'对所有出现于元素阶的素数 p，取某元素阶中 p 的最高幂 p^e。把该元素取适当幂，上一结论给出阶恰为 p^e 的元素 b_p。只有有限多个素数，因为群有限且元素阶整除群阶。',
      r'交换的互素阶元素 a,b，其乘积阶为两阶乘积：若 (ab)^t=1，则 a^t=b^(-t) 在两个循环子群的交中；交内元素阶整除两个互素阶，只能为一，所以两阶都整除 t。反向乘积次幂显然为一。',
      r'故 b=∏b_p 的阶为 E=∏p^e。每个 G 元素的阶都整除 E，所以所有 |G| 个元素都是 x^E-1 的根，根数界给 |G|≤E。另一方面 b 的循环子群已有 E 个元素，所以 E≤|G|。于是 E=|G|，b 生成全群。平凡群取空乘积。$\square$')
    P('euler-quadratic-criterion','numbertheory/quadratic-residues','Euler 二次剩余判别',r'对奇素数 p 及 p∤a，Legendre 符号 (a/p) 等于 a^((p-1)/2) 在模 p 下的 ±1 值。','finite-subgroup-cyclic root-bound','在有限域乘法群的生成元指数中，平方恰好对应偶指数。',
      r'取模 p 非零乘法群的生成元 g，阶为 p-1。每个 a=g^k。它为平方当且仅当存在 l 使 2l≡k mod p-1，因 p-1 偶数，这恰好等价于 k 偶。',
      r'g^((p-1)/2) 的平方为一，但自身不为一，否则生成元阶更小。域中 x²-1=(x-1)(x+1)，且 p 奇使 ±1 不同，所以它等于 -1。因此 a^((p-1)/2)=(-1)^k，恰在平方时为 1、非平方时为 -1。$\square$')
    P('gauss-lemma','numbertheory/quadratic-residues','Gauss 引理及奇数取整形式',r'设 p 奇素，p∤a，m=(p-1)/2。取 a,2a,…,ma 的最小正剩余，超过 p/2 的个数为 N，则 (a/p)=(-1)^N。若 a 为奇正整数，还等于 (-1)^(Σ_(k=1)^m floor(ka/p))。','euler-quadratic-criterion bezout','把大于半模数的剩余反射回前半区，反射次数就是乘积的符号变化。',
      r'记剩余 r_k。若 r_k≤m 取 s_k=r_k，否则取 s_k=p-r_k。所有 s_k 在 1,…,m 内且互异：相等会给 ka≡±la，约去可逆 a；正号迫使 k=l，负号要求 p 整除 k+l，但 2≤k+l≤p-1，不可能。故 s_k 是这 m 个数的排列。',
      r'相乘得到 a^m m!≡∏r_k≡(-1)^N∏s_k=(-1)^N m!。阶乘在模 p 可逆，约去后由 Euler 判别得到第一式。',
      r'若 a 奇，等式 r_k=ka-p floor(ka/p) 求和再模 2，得到 Σr_k≡m(m+1)/2-Σfloor(ka/p)。另一方面反射项 r_k=p-s_k≡1+s_k mod2，故 Σr_k≡m(m+1)/2+N。两式比较得 N 与取整和同奇偶，证明第二式。$\square$')
    P('quadratic-reciprocity','numbertheory/quadratic-residues','二次互反律及两个补充律',r'不同奇素数 p,q 满足 (p/q)(q/p)=(-1)^((p-1)(q-1)/4)。并有 (-1/p)=(-1)^((p-1)/2)，(2/p)=(-1)^((p²-1)/8)。','gauss-lemma euler-quadratic-criterion','两个取整和分别数出半尺寸矩形中斜线两侧的格点，总数为矩形格点数。',
      r'令 m=(p-1)/2、n=(q-1)/2。考虑 1≤i≤m、1≤j≤n 的 mn 个整数点。直线 qi=pj 上没有这些点，因为 p,q 不同素，若相等则 p 整除 i，但 i<p。',
      r'对固定 i，满足 pj<qi 的点数是 floor(qi/p)；该数不超过 n，因为 qi/p<q/2。对固定 j，满足 qi<pj 的点数是 floor(pj/q)，同理不超过 m。两侧正好分割所有格点，所以两个取整和相加为 mn。',
      r'由 Gauss 引理的奇数取整形式，两 Legendre 符号相乘为 (-1)^mn，即互反律。第一补充律直接将 a=-1 代入 Euler 判别，得到 (-1)^m。',
      r'对 a=2，2,4,…,2m 都小于 p，超过 p/2 的个数为 m-floor(p/4)。将 p 分成模 8 的四个奇数类 1、3、5、7，该数奇偶依次为偶、奇、奇、偶；整数 (p²-1)/8 的奇偶也依次如此。Gauss 引理给出第二补充律。$\square$')
    P('liouville-lower-bound','numbertheory/diophantine-approximation numbertheory/algebraic-numbers','Liouville 的代数数逼近下界',r'若实代数数 α 的次数为 d，则存在 c>0，使每个 α≠p/q、p∈Z、q≥1，都有 |α-p/q|≥c/q^d。','minimal-polynomial mean-value finite-dimensional-compactness','整系数多项式在有理点的非零值有分母下界，中值定理把函数值下界传给距离。',
      r'将 α 在 Q 上的最小多项式清分母，得非零整系数 P、次数 d。若 p/q≠α，则 P(p/q)≠0：否则不可约最小多项式有一个有理根，次数只能为一，而此时其唯一根就是 α。',
      r'q^d P(p/q) 是非零整数，所以 |P(p/q)|≥q^(-d)。P′ 在 [α-1,α+1] 连续有界，取 M≥1 为其绝对值上界。若 |p/q-α|≤1，中值定理给 |P(p/q)|≤M|p/q-α|，故距离≥1/(Mq^d)。',
      r'若距离>1，则也≥1/(Mq^d)，因为 M,q≥1。所以取 c=1/M 即可，证明对全部允许有理数统一成立，不要求 p/q 已约分。$\square$')
    P('liouville-constant','numbertheory/liouville-numbers numbertheory/transcendental-numbers','Liouville 常数是超越数',r'实数 L=Σ_(k=1)^∞10^(-k!) 是超越数。','liouville-lower-bound series-cauchy archimedean','阶乘位的小数截断具有比任意固定分母幂更小的正误差，与代数数下界矛盾。',
      r'阶乘指数递增，数值级数受几何级数控制而收敛。取前 n 项 L_n=p_n/q_n，q_n=10^(n!)。尾项严格正；对 n≥2，后续指数至少按整数逐步增加，故 0<L-L_n≤(10/9)10^(-(n+1)!)<2/q_n^(n+1)。',
      r'若 L 为代数数、次数 d，则逼近下界给 L-L_n≥c/q_n^d，因为尾项正保证两数不同。两界合并得到 c<2/q_n^(n+1-d)。',
      r'当 n>d，q_n≥10，使右侧≤2·10^(-(n+1-d))→0，矛盾于固定 c>0。因此 L 不满足任何非零整系数多项式，即为超越数。$\square$')
