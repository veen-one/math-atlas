"""Author and export proof chapters; theorem dependencies must resolve locally."""
from pathlib import Path
import json
ROOT=Path(__file__).resolve().parents[1]
PROOFS=[]
def P(id, topics, title, statement, deps, idea, *steps):
    PROOFS.append(dict(id=id,topics=topics.split(),title=title,statement=statement,dependencies=deps.split(),idea=idea,steps=list(steps)))
P('monotone-convergence','analysis/completeness-reals','单调有界数列收敛定理',r'设实数列 $(a_n)$ 单调递增且有上界，则存在 $L\in\mathbb R$ 使 $a_n\to L$，且 $L=\sup\{a_n:n\ge1\}$。递减有下界的情形对称成立。','axiom-real','把上确界当作候选极限，再用“再小一点就不是上界”产生逼近。',
r'集合 $A=\{a_n:n\ge1\}$ 非空且有上界，由实数上确界公理存在 $L=\sup A$。于是所有 $n$ 均有 $a_n\le L$。',
r'任取 $\varepsilon>0$。$L-\varepsilon$ 不是 $A$ 的上界，否则与 $L$ 是最小上界矛盾。因此存在 $N$ 使 $a_N>L-\varepsilon$。',
r'当 $n\ge N$，单调性给出 $L-\varepsilon<a_N\le a_n\le L$，即 $|a_n-L|<\varepsilon$。这正是收敛定义。递减情形对 $-a_n$ 应用已证结论。$\square$')
P('nested-intervals','analysis/completeness-reals','闭区间套定理',r'非空闭区间 $I_n=[a_n,b_n]$ 满足 $I_{n+1}\subseteq I_n$，则交集非空；若 $b_n-a_n\to0$，交集恰有一点。','axiom-real','取所有左端点的上确界，并检查它没有越过任一右端点。',
r'嵌套性给出 $a_n$ 递增且 $a_n\le b_1$。令 $x=\sup\{a_n:n\ge1\}$。固定 $n$，对 $m\ge n$ 有 $a_m\le b_m\le b_n$；对 $m<n$ 则 $a_m\le a_n\le b_n$，所以 $b_n$ 是全体左端点的上界。',
r'因此 $a_n\le x\le b_n$ 对每个 $n$ 成立，$x$ 属于所有 $I_n$。若 $x,y$ 都在交集中，则 $|x-y|\le b_n-a_n$ 对每个 $n$ 成立。',
r'若区间长度趋零而 $x\ne y$，取 $\varepsilon=|x-y|/2$，充分大 $n$ 时会有 $|x-y|<|x-y|/2$，矛盾。因此交集只有一点。$\square$')
P('bolzano-weierstrass','analysis/completeness-reals','实有界数列的收敛子列定理',r'每个有界实数列都有收敛子列。','nested-intervals','二分区间，每次保留含有无穷多个序列项的一半。',
r'把所有序列项放入一个闭区间 $I_1=[a,b]$。将区间二等分；至少一半含无穷多个序列下标对应的项，否则两半合起来只有有限项。保留这一半作为 $I_2$，不断重复。',
r'得到嵌套闭区间 $I_k$，长度为 $(b-a)/2^{k-1}$。由闭区间套定理，它们恰有一个公共点 $x$。递归选下标 $n_k>n_{k-1}$，使 $a_{n_k}\in I_k$；每层有无穷多下标，故总能选到。',
r'因 $x,a_{n_k}\in I_k$，有 $|a_{n_k}-x|\le(b-a)/2^{k-1}\to0$。因此所选子列收敛到 $x$。$\square$')
P('cauchy-completeness','analysis/completeness-reals','实数的柯西完备性',r'实数列收敛，当且仅当它是柯西列。','bolzano-weierstrass','收敛列由三角不等式成为柯西列；反向先取收敛子列再控制整列。',
r'若 $a_n\to L$，给定 $\varepsilon>0$，充分大 $m,n$ 时都有 $|a_m-L|,|a_n-L|<\varepsilon/2$，所以 $|a_n-a_m|<\varepsilon$。',
r'反之设 $(a_n)$ 柯西。取阈值 1，尾部所有项到某一固定尾项的距离小于 1，前面有限项也有共同界，故全列有界。由有界子列定理，有 $a_{n_k}\to L$。',
r'任取 $\varepsilon>0$，先选 $N$ 使 $m,n\ge N$ 时 $|a_n-a_m|<\varepsilon/2$；再选 $k$ 使 $n_k\ge N$ 且 $|a_{n_k}-L|<\varepsilon/2$。对任意 $n\ge N$，三角不等式给出 $|a_n-L|<\varepsilon$，故整列收敛。$\square$')
P('limit-unique','analysis/limits','极限唯一性',r'在度量空间 $(X,d)$ 中，若 $x_n\to a$ 且 $x_n\to b$，则 $a=b$。','axiom-metric','假设两极限之间有正距离，分别逼近到其三分之一就产生矛盾。',
r'假设 $a\ne b$，由度量的正定性 $r=d(a,b)>0$。令 $\varepsilon=r/3$。分别由两个收敛条件选 $N_1,N_2$，使尾部到各自极限距离都小于 $r/3$。',
r'取 $n\ge\max(N_1,N_2)$。三角不等式给出 $r=d(a,b)\le d(a,x_n)+d(x_n,b)<2r/3$，与 $r>0$ 矛盾。故 $a=b$。$\square$')
P('compact-interval','geometry/compactness analysis/continuity-uniform','闭区间的有限子覆盖性质',r'闭有界区间 $[a,b]\subset\mathbb R$ 的任意开覆盖都有有限子覆盖。','nested-intervals','反设不能有限覆盖，二分后保留仍不能有限覆盖的半区间。',
r'当 $a=b$，任取一个包含该点的覆盖成员即可。以下设 $a<b$。若原覆盖没有有限子覆盖，将区间二分。至少一半不能被原覆盖的有限成员覆盖，否则两半的有限覆盖合并就覆盖全区间。',
r'不断二分并保留不具有限子覆盖的闭半区间，得长度趋零的闭区间套。令唯一公共点为 $x$。覆盖中某个开集 $U$ 含 $x$；开性给出 $r>0$ 使 $(x-r,x+r)\subseteq U$。',
r'取长度小于 $r$ 的某个区间 $I_n$。因 $x\in I_n$，其中每点到 $x$ 距离小于 $r$，故 $I_n\subseteq U$。一个覆盖成员就已覆盖 $I_n$，与构造矛盾。$\square$')
P('heine-cantor','analysis/continuity-uniform','Heine–Cantor 定理（紧致度量空间版）',r'若度量空间 $K$ 紧致，$f:K\to Y$ 连续，且 $Y$ 也是度量空间，则 $f$ 一致连续。这里紧致指每个开覆盖有有限子覆盖。','axiom-metric','将每点局部连续半径减半，用有限子覆盖取共同阈值。',
r'给定 $\varepsilon>0$。对每个 $x\in K$，由连续性选 $r_x>0$，使 $z\in K$ 且 $d(z,x)<r_x$ 时有 $d_Y(f(z),f(x))<\varepsilon/2$。空空间情形结论真，以下设 $K$ 非空。',
r'相对开球 $B(x,r_x/2)\cap K$ 覆盖 $K$。由紧致性选有限子覆盖，中心为 $x_1,\dots,x_m$。令 $\delta=\min_i r_{x_i}/2>0$。',
r'若 $u,v\in K$ 且 $d(u,v)<\delta$，选一个覆盖球含 $u$，则 $d(u,x_i)<r_{x_i}/2$，且 $d(v,x_i)\le d(v,u)+d(u,x_i)<r_{x_i}$。',
r'因此两函数值到 $f(x_i)$ 的距离都小于 $\varepsilon/2$，再用三角不等式得 $d_Y(f(u),f(v))<\varepsilon$。$\delta$ 不依赖 $u,v$，故为一致连续。$\square$')
P('uniform-continuous-limit','analysis/uniform-convergence analysis/function-sequences','连续函数的一致极限连续',r'设 $f_n:E\to\mathbb R$ 在度量空间 $E$ 上连续，并一致收敛到 $f$，则 $f$ 连续。','axiom-metric','先固定一个全域逼近误差小的函数，再调用该函数在目标点的连续性。',
r'固定任意 $x_0\in E$ 与 $\varepsilon>0$。一致收敛给出下标 $N$，使所有 $x\in E$ 都有 $|f_N(x)-f(x)|<\varepsilon/3$；这里是选定一个函数 $f_N$，而非让下标随位置变化。',
r'由 $f_N$ 在 $x_0$ 连续，存在 $\delta>0$，使 $d(x,x_0)<\delta$ 时 $|f_N(x)-f_N(x_0)|<\varepsilon/3$。',
r'此时 $|f(x)-f(x_0)|\le |f(x)-f_N(x)|+|f_N(x)-f_N(x_0)|+|f_N(x_0)-f(x_0)|<\varepsilon$。故 $f$ 在任意 $x_0$ 连续。$\square$')
P('dini','analysis/uniform-convergence','Dini 定理',r'设 $K$ 是紧致空间，连续实值函数列 $f_n$ 在每个点单调递增并逐点收敛到连续函数 $f$，则收敛一致；递减情形同理。','axiom-topology','小误差点集随下标递增，紧致性把逐点最终进入变成全体同时进入。',
r'由单调收敛，$g_n=f-f_n\ge0$，且 $g_n$ 连续、逐点递减到零。给定 $\varepsilon>0$，令 $U_n=\{x\in K:g_n(x)<\varepsilon\}$。连续性保证 $U_n$ 开，递减性保证 $U_n\subseteq U_{n+1}$。',
r'逐点收敛说明每个 $x$ 属于某个 $U_n$，故这些开集覆盖 $K$。紧致性给出有限子覆盖；取出现下标的最大值 $N$，由单调包含便有 $U_N=K$。',
r'于是任意 $n\ge N$、$x\in K$ 都有 $0\le f(x)-f_n(x)=g_n(x)\le g_N(x)<\varepsilon$，这就是一致收敛。递减情形把 $f_n,f$ 同时取负。$\square$')
P('series-cauchy','analysis/series','级数的柯西判别法',r'实数级数 $\sum_{n=1}^{\infty}a_n$ 收敛，当且仅当对每个 $\varepsilon>0$，存在 $N$，使 $q\ge p\ge N$ 时有 $|\sum_{n=p}^{q}a_n|<\varepsilon$。','cauchy-completeness','级数收敛就是部分和数列收敛，尾和就是两部分和之差。',
r'令 $S_0=0$、$S_n=\sum_{k=1}^n a_k$。若 $S_n$ 收敛，则它是柯西列。取柯西阈值下标 $M$，令 $N=M+1$；当 $q\ge p\ge N$ 时，$p-1,q\ge M$，故 $|\sum_{k=p}^q a_k|=|S_q-S_{p-1}|<\varepsilon$。',
r'反向若尾和条件成立，对充分大 $m>n$，有 $|S_m-S_n|=|\sum_{k=n+1}^{m}a_k|<\varepsilon$；交换下标或相等时也成立。所以 $(S_n)$ 柯西，实数柯西完备性给出其收敛，即原级数收敛。$\square$')
P('absolute-convergence','analysis/series','绝对收敛蕴含收敛',r'若实数级数 $\sum |a_n|$ 收敛，则 $\sum a_n$ 收敛。','series-cauchy','用绝对值级数的尾和统一控制原级数的尾和。',
r'任取 $\varepsilon>0$。对收敛级数 $\sum|a_n|$ 应用柯西判别法，得 $N$，使 $q\ge p\ge N$ 时 $\sum_{n=p}^q |a_n|<\varepsilon$。',
r'有限和三角不等式给出 $|\sum_{n=p}^{q}a_n|\le\sum_{n=p}^{q}|a_n|<\varepsilon$。再次应用柯西判别法，原级数收敛。反向不成立，例如交错调和级数，后者需另行证明其收敛而绝对值级数发散。$\square$')
P('weierstrass-m','analysis/uniform-convergence analysis/function-sequences','Weierstrass M 判别法',r'设 $f_n:E\to\mathbb R$，且对所有 $x\in E$ 有 $|f_n(x)|\le M_n$，其中 $M_n\ge0$、$\sum M_n$ 收敛，则函数级数 $\sum f_n$ 一致收敛。','series-cauchy cauchy-completeness','数值尾和与位置无关，因此同时控制每个点及整个定义域的误差。',
r'固定 $x$。任意尾和满足 $|\sum_{n=p}^qf_n(x)|\le\sum_{n=p}^q M_n$，右侧由数值级数的柯西判别法趋零，故左侧满足柯西条件。因此每个点的部分和在实数中收敛，定义其极限为 $F(x)$。',
r'给定 $\varepsilon>0$，选 $N$ 使 $q\ge p\ge N$ 时 $\sum_{n=p}^qM_n<\varepsilon/2$。对 $m\ge n\ge N$，得到 $|S_m(x)-S_n(x)|\le\varepsilon/2$，且这个界对所有 $x$ 同时成立。',
r'固定 $n,x$ 让 $m\to\infty$，实数极限保持非严格不等式，得 $|F(x)-S_n(x)|\le\varepsilon/2<\varepsilon$。同一个 $N$ 适用全体 $x$，故收敛一致。$\square$')
P('derivative-continuity','analysis/derivatives','可导蕴含连续',r'若实函数 $f$ 在定义域内点 $a$ 可导，则在 $a$ 连续。','axiom-real','把函数增量写成差商乘自变量增量，再显式控制有界差商。',
r'导数存在，故差商 $Q(h)=(f(a+h)-f(a))/h$ 在 $h\to0$ 时趋于有限数 $f\prime(a)$。取 $\eta>0$ 使 $0<|h|<\eta$ 时 $|Q(h)-f\prime(a)|<1$，从而 $|Q(h)|\le |f\prime(a)|+1=:C$，其中 $C>0$。',
r'给定 $\varepsilon>0$，令 $\delta=\min(\eta,\varepsilon/C)$。若 $0<|h|<\delta$，则 $|f(a+h)-f(a)|=|hQ(h)|\le C|h|<\varepsilon$；$h=0$ 时也满足。因此连续。$\square$')
P('chain-rule','analysis/derivatives','一元函数链式法则',r'若 $f$ 在 $a$ 可导，$g$ 在 $b=f(a)$ 可导，则 $g\circ f$ 在 $a$ 可导，导数为 $g\prime(b)f\prime(a)$。','derivative-continuity','用带余项的线性逼近，避免当内函数增量为零时非法除法。',
r'由可导定义，$f(a+h)-b=Ah+r(h)h$，其中 $A=f\prime(a)$、$r(h)\to0$。同理对 $k\ne0$ 令 $s(k)=[g(b+k)-g(b)]/k-B$，$B=g\prime(b)$，并定义 $s(0)=0$；则 $s(k)\to0$ 且对全部小 $k$ 有 $g(b+k)-g(b)=(B+s(k))k$。',
r'因 $f$ 可导从而连续，$k(h)=f(a+h)-b\to0$。代入上式，复合函数差商等于 $(B+s(k(h)))(A+r(h))$，包括 $k(h)=0$ 的情况也成立。',
r'两余项都趋零，差商极限为 $BA$。这一论证无需假设 $f(a+h)\ne f(a)$，所以覆盖内函数局部常值等情形。$\square$')
P('supremum-integral','analysis/integration-calculus','黎曼积分的基本估计',r'设有界函数 $h$ 在 $[a,b]$ 黎曼可积，$a<b$，且 $|h(x)|\le M$，则 $|\int_a^b h(x)\,dx|\le M(b-a)$。','axiom-riemann','每个黎曼和都落在同一闭区间内，取极限仍保留这个界。',
r'对任意带标记分割，$S=\sum_i h(\xi_i)\Delta x_i$。因各 $\Delta x_i\ge0$，三角不等式给出 $|S|\le\sum_iM\Delta x_i=M(b-a)$。',
r'可积性说明当网格趋零，黎曼和趋于积分。若极限大于 $M(b-a)$ 或小于其负值，取与边界距离的一半为容忍误差，就会迫使充分精细的黎曼和越界，矛盾。因此积分也在该闭区间内。$\square$')
P('continuous-riemann','analysis/integration-calculus','闭区间连续函数黎曼可积',r'连续实函数 $f:[a,b]\to\mathbb R$ 有界且黎曼可积。','compact-interval heine-cantor axiom-riemann','有限局部界先给整体有界，再用一致连续性使上下和间隙任意小。',
r'每点连续性给相对邻域，使邻域内 $|f(y)-f(x)|<1$。由闭区间紧致选有限子覆盖，故 $|f|$ 被有限多个 $|f(x_i)|+1$ 的最大值控制；因此上下和均有定义。$a=b$ 时积分为零，以下设 $a<b$。',
r'由 Heine–Cantor，给定 $\varepsilon>0$，有 $\delta>0$，使两点距离小于 $\delta$ 时函数值差小于 $\varepsilon/[2(b-a)]$。取网格小于 $\delta$ 的分割，每小区间的上确界与下确界之差至多这个数。',
r'上和减下和因此至多 $\varepsilon/2$。按 Darboux 定义，下积分是所有下和的上确界，上积分是所有上和的下确界；它们之差非负且小于任意 $\varepsilon$，故相等，函数可积。$\square$')
P('uniform-integration','analysis/integration-limits analysis/uniform-convergence','一致收敛与黎曼积分交换',r'若 $f_n$ 在有限闭区间 $[a,b]$ 黎曼可积且一致收敛到 $f$，则 $f$ 可积，并且 $\int_a^b f_n\to\int_a^b f$。','supremum-integral axiom-riemann','先证明极限可积，再证明积分误差趋零，不能预先假定极限已有积分。',
r'设 $a<b$。由一致收敛选一个 $f_N$，使 $|f-f_N|\le1$，从而 $f$ 有界。给定 $\varepsilon>0$，重新选 $N$ 使 $\|f-f_N\|_\infty<\varepsilon/[4(b-a)]$。',
r'由 $f_N$ 可积，存在分割 $P$ 使其上和与下和之差小于 $\varepsilon/2$。每个小区间上，$f$ 的振幅至多是 $f_N$ 的振幅加 $2\|f-f_N\|_\infty$，故 $U(f,P)-L(f,P)<\varepsilon$。由 Darboux 定义可知 $f$ 可积。',
r'黎曼和的线性性取极限给出积分线性性，故差函数也可积。用积分估计得 $|\int f_n-\int f|\le(b-a)\|f_n-f\|_\infty\to0$。零长度区间的结论直接成立。$\square$')
P('ftc-first','analysis/fundamental-theorem-calculus','微积分第一基本定理',r'设 $f$ 在 $[a,b]$ 连续，$F(x)=\int_a^x f(t)\,dt$，则对 $x\in(a,b)$ 有 $F\prime(x)=f(x)$。','continuous-riemann supremum-integral','差商是短区间上的平均值，连续性把整个短区间函数值拉近目标值。',
r'连续可积性保证 $F$ 定义良好。由黎曼和可直接验证相邻区间的可加性：在公共端点切开分割，分别取极限。因此对正负小 $h$ 均有 $F(x+h)-F(x)=\int_x^{x+h} f(t)\,dt$，负方向按积分换向定义。',
r'把常值 $f(x)$ 的积分减去，得到 $[F(x+h)-F(x)]/h-f(x)=(1/h)\int_x^{x+h}[f(t)-f(x)]\,dt$。',
r'给定 $\varepsilon>0$，连续性给出 $\delta>0$，使 $|t-x|<\delta$ 时 $|f(t)-f(x)|<\varepsilon$。若 $0<|h|<\delta$ 且两端在定义域内，积分估计给出上述差值绝对值至多 $\varepsilon$。故差商趋于 $f(x)$。$\square$')
P('rolle','analysis/derivatives','Rolle 定理',r'设 $f$ 在 $[a,b]$ 连续，在 $(a,b)$ 可导，$a<b$ 且 $f(a)=f(b)$，则存在 $c\in(a,b)$ 使 $f\prime(c)=0$。','bolzano-weierstrass derivative-continuity','先证明极值存在；非常值时至少一个极值在内部，再用左右差商夹住导数。',
r'先说明连续函数在闭区间取最大最小值。若无界，可选 $x_n$ 使 $|f(x_n)|>n$；有界子列定理给出 $x_{n_k}\to x\in[a,b]$，连续性却使函数值收敛到有限的 $f(x)$，矛盾。因此有界。令 $M=\sup f([a,b])$，选 $x_n$ 使 $f(x_n)>M-1/n$；取收敛子列并用连续性得 $f(x)=M$。最小值对 $-f$ 同证。',
r'若 $f$ 恒定，任意内部点导数均为零。否则某点的值不同于端点共同值；若更大，最大值在内部达到；若更小，最小值在内部达到。记该内部极值点为 $c$。',
r'以最大值为例，小正 $h$ 的差商非正，小负 $h$ 的差商非负。因导数存在且两侧极限相等，只能同时非正非负，即为零。最小值情形符号反转，结论相同。$\square$')
P('mean-value','analysis/derivatives','拉格朗日中值定理',r'若 $f$ 在 $[a,b]$ 连续，在 $(a,b)$ 可导且 $a<b$，则存在 $c\in(a,b)$ 满足 $f(b)-f(a)=f\prime(c)(b-a)$。','rolle','减去连接两端的直线，把一般端点差转化为 Rolle 定理的等端值条件。',
r'令 $m=[f(b)-f(a)]/(b-a)$，定义 $g(x)=f(x)-f(a)-m(x-a)$。线性函数连续可导，差商运算给出 $g$ 在闭区间连续、内部可导，且 $g(a)=g(b)=0$。',
r'由 Rolle 定理存在内部 $c$ 使 $g\prime(c)=0$。因 $g\prime(c)=f\prime(c)-m$，所以 $f\prime(c)=m$，乘以非零数 $b-a$ 得结论。$\square$')
P('ftc-second','analysis/fundamental-theorem-calculus','微积分第二基本定理',r'设 $f$ 在 $[a,b]$ 连续，$G$ 在该闭区间连续且在内部满足 $G\prime=f$，则 $\int_a^b f(x)\,dx=G(b)-G(a)$。','ftc-first mean-value','变上限积分与任意原函数具有同样导数，差为常数。',
r'令 $F(x)=\int_a^x f(t)\,dt$。第一基本定理给出内部导数 $F\prime=f$；积分估计与 $f$ 的有界性给出 $|F(y)-F(x)|\le M|y-x|$，故 $F$ 在整个闭区间连续。',
r'令 $H=G-F$，则 $H$ 闭区间连续、内部可导且导数恒为零。对任意 $u<v$ 的子区间应用中值定理，得到 $H(v)-H(u)=0$，所以 $H$ 恒定。',
r'因此 $G(b)-F(b)=G(a)-F(a)$。又 $F(a)=0$、$F(b)=\int_a^b f$，整理即得公式。$\square$')
P('cantor','foundations/cardinality foundations/sets-mappings','Cantor 定理',r'对任意集合 $A$，不存在从 $A$ 到幂集 $\mathcal P(A)$ 的满射；且 $a\mapsto\{a\}$ 是单射。','axiom-set','对每个候选函数，构造与每个像至少在一个位置不同的对角集合。',
r'设 $f:A\to\mathcal P(A)$ 为任意函数。由分离原则，$D=\{a\in A:a\notin f(a)\}$ 是 $A$ 的子集，故是幂集的一个元素。',
r'若存在 $d\in A$ 满足 $f(d)=D$，则按 $D$ 的定义，有 $d\in D$ 当且仅当 $d\notin f(d)=D$，矛盾。所以 $D$ 不在 $f$ 的像内，$f$ 不是满射。',
r'若 $\{a\}=\{b\}$，则 $a\in\{b\}$，从而 $a=b$，所以单元素集合映射单射。于是 $A$ 可嵌入其幂集，但不能与幂集等势。空集也被同一反满射论证覆盖。$\square$')
P('quantifier-negation','foundations/predicates-quantifiers','经典量词否定律',r'在经典一阶语义下，$\neg\forall x\,P(x)$ 与 $\exists x\,\neg P(x)$ 在同一结构和赋值中真值相同。','axiom-logic','直接展开满足关系，不偷偷改变论域或剩余自由变量的赋值。',
r'固定论域 $D$、结构以及其他自由变量的赋值。$\forall x\,P(x)$ 为真，按定义等价于每个 $d\in D$ 替换 $x$ 后都使 $P$ 为真。',
r'因此其否定为真，等价于并非每个 $d$ 都使 $P$ 真；在经典二值语义下，这恰好意味着某个 $d\in D$ 使 $P$ 假，即使 $\neg P$ 真。',
r'最后一句正是存在量词的语义。因此两式等价。若允许空论域，前者因全称式真而假，后者因无见证也假，等价仍保持；通常一阶结构约定论域非空。$\square$')
P('halting-diagonal','foundations/halting-problem foundations/decidability','停机问题不可判定',r'不存在总能停机的程序 $H(M,w)$，能对每个有效编码的程序 $M$ 及输入 $w$ 正确判断 $M(w)$ 是否停机。','axiom-computation','把假定判定器应用于程序自身，再构造与判定结果相反的行为。',
r'反设有这样的 $H$。构造程序 $D$：输入程序编码 $z$，计算 $H(z,z)$；若回答会停机，就进入无限循环；若回答不会停机，就立即停机。无效编码可另约定处理，不影响下述有效编码情形。',
r'$H$ 是总可计算程序，分支与无限循环都能实现，所以 $D$ 是合法程序，有自己的有效编码 $d$。考察 $D(d)$。',
r'若 $H(d,d)$ 回答会停机，按构造 $D(d)$ 永不停止，与正确性矛盾；若回答不会停机，按构造它立即停止，也矛盾。两种回答穷尽可能，故 $H$ 不存在。$\square$')
P('semi-decision-complement','foundations/enumerability foundations/decidability','可判定与双侧半可判定的等价',r'语言 $L$ 可判定，当且仅当 $L$ 与其补集均可半判定。半判定器对成员最终接受，对非成员不接受但可不停机。','axiom-computation','并行推进两个半判定器，保证不会被错误一侧的无限运行卡住。',
r'若有判定器，直接在接受分支接受即可半判定 $L$；交换接受和拒绝就得到补集判定器，因此也有补集半判定器。',
r'反向设 $A$ 半判定 $L$、$B$ 半判定补集。在输入 $w$ 上交替各模拟一步，保存两台机器各自的配置。若 $A$ 接受则回答属于，若 $B$ 接受则回答不属于。',
r'每个输入恰好属于一侧，因此对应机器最终会接受；另一侧不可能错误接受。交错模拟保证有效一侧在有限总步数后运行到接受，故算法总停机且正确，是判定器。$\square$')
P('subgroup-test','algebra/groups-subgroups','子群判别法',r'群 $G$ 的非空子集 $H$ 是子群，当且仅当任意 $a,b\in H$ 都有 $ab^{-1}\in H$。','axiom-group','先从同一个元素制造单位元，再制造逆元和乘积。',
r'必要性：若 $H$ 是子群，逆元与乘法均封闭，故 $ab^{-1}\in H$。',
r'充分性：由非空选 $h\in H$，取 $a=b=h$ 得单位元 $e=hh^{-1}\in H$。对任意 $b\in H$，取 $a=e$ 得 $b^{-1}\in H$。',
r'对任意 $a,b\in H$，已知 $b^{-1}\in H$，再将判据中的第二变量取为 $b^{-1}$，得 $a(b^{-1})^{-1}=ab\in H$。结合律继承自 $G$，单位元及逆元均在 $H$ 内，所以 $H$ 为子群。$\square$')
P('lagrange','algebra/finite-groups algebra/groups-subgroups','Lagrange 定理',r'有限群 $G$ 的每个子群 $H$ 都满足 $|G|=[G:H]|H|$，因而 $|H|$ 整除 $|G|$。','axiom-group axiom-finite','左陪集分割整个群，每个陪集通过左乘与子群等势。',
r'对 $a,b\in G$，若 $aH\cap bH$ 含元素 $ah_1=bh_2$，则 $a=bh_2h_1^{-1}$，从而每个 $ah$ 都属于 $bH$；交换 $a,b$ 得相反包含，所以两陪集相等。故不同陪集不交。',
r'每个 $g\in G$ 属于 $gH$（因为单位元在 $H$），所以所有不同左陪集分割 $G$。映射 $h\mapsto gh$ 从 $H$ 到 $gH$ 满射；若 $gh_1=gh_2$，左乘 $g^{-1}$ 得 $h_1=h_2$，故也是单射。',
r'设不同陪集共有 $m=[G:H]$ 个。按有限不交并计数，$|G|=m|H|$，即得整除性。这里不推断每个群阶因子都一定对应子群。$\square$')
P('orbit-stabilizer','algebra/orbits-stabilizers algebra/group-actions','轨道—稳定子定理',r'有限群 $G$ 作用在集合 $X$ 上。对 $x\in X$，稳定子 $G_x=\{g:gx=x\}$ 是子群，且 $|Gx|=|G|/|G_x|$。','subgroup-test lagrange','把把同一点送到同一像的群元素，恰好识别为同一稳定子陪集。',
r'单位元固定 $x$，故 $G_x$ 非空。若 $a,b$ 固定 $x$，则 $b^{-1}x=x$，并有 $ab^{-1}x=ax=x$；子群判别法给出 $G_x$ 是子群。',
r'定义左陪集到轨道的映射 $gG_x\mapsto gx$。若 $gG_x=hG_x$，则 $h^{-1}g\in G_x$，故 $gx=hx$，映射良定义。反之若 $gx=hx$，则 $h^{-1}g$ 固定 $x$，因此两个陪集相同，映射单射。',
r'轨道每个元素按定义是某个 $gx$，故映射满射。轨道大小等于稳定子指数，应用 Lagrange 定理得到公式。$\square$')
P('first-isomorphism','algebra/homomorphisms-quotients','群的第一同构定理',r'群同态 $\varphi:G\to K$ 的核 $N$ 为正规子群，且 $G/N\cong\operatorname{im}\varphi$。','subgroup-test axiom-group','同态恰好把核的每个陪集压成一个点，除此之外不再识别不同陪集。',
r'由同态性质 $\varphi(e)=e$ 且 $\varphi(g^{-1})=\varphi(g)^{-1}$。若 $a,b\in N$，则 $\varphi(ab^{-1})=e$，故核是子群。对任意 $g\in G,n\in N$，$\varphi(gng^{-1})=\varphi(g)e\varphi(g)^{-1}=e$，因此核正规。',
r'商乘法定义为 $(gN)(hN)=ghN$。若换代表为 $gn_1,hn_2$，其乘积等于 $gh(h^{-1}n_1h)n_2$，括号内属于 $N$，所以商乘法良定义；群公理从 $G$ 继承。',
r'定义 $\bar\varphi(gN)=\varphi(g)$。同陪集代表相差一个核元素，所以像相同，且该映射保持乘法。它满射到像；若两像相同，则 $\varphi(h^{-1}g)=e$，从而 $gN=hN$，故也单射。于是为群同构。$\square$')
P('basis-extension','algebra/basis-dimension algebra/vector-spaces','有限生成空间的基扩充与基长一致',r'若向量空间 $V$ 有有限生成列 $w_1,\dots,w_n$，则任意线性无关列最多含 $n$ 个向量，并可扩充为 $V$ 的一组基；所有基的长度相同。','axiom-vector axiom-finite','逐个把无关向量换入生成列；每次用一个非零系数解出被替换向量。',
r'设无关列为 $u_1,\dots,u_m$。把 $u_1$ 表成生成列线性组合，因 $u_1\ne0$ 至少一系数非零；可解出对应 $w_j$，用 $u_1$ 替换它后仍生成 $V$。',
r'归纳地，已有 $u_1,\dots,u_k$ 与剩余 $n-k$ 个原生成向量构成生成列。将 $u_{k+1}$ 在此列中展开，至少一个剩余向量的系数非零，否则 $u_{k+1}$ 落在前 $k$ 个的张成空间，与无关性矛盾。解出该向量并替换。',
r'替换最多进行 $n$ 次，所以不能存在长度超过 $n$ 的无关列。给定无关列，扫描原生成列：若某向量不在当前张成空间，就加进来，仍保持无关；有限扫描后已包含全体原生成向量的张成空间，因而得到基。',
r'若两组基长度为 $r,s$，把第一组作为无关列、第二组作为生成列，得 $r\le s$；交换角色得 $s\le r$。故长度相等，维数定义良好。$\square$')
P('rank-nullity','algebra/linear-maps algebra/basis-dimension','秩—零化度定理',r'设 $V$ 有限维，$T:V\to W$ 线性，则 $\dim V=\dim\ker T+\dim\operatorname{im}T$。','basis-extension','把核的一组基扩成全空间的基，其余基向量的像恰好构成像空间的基。',
r'先说明任意子空间 $U\subseteq V$ 有有限基：不断添加不在已有张成空间中的向量，若超过 $\dim V$ 步会违背基长上界，因此过程在有限步终止。取核基 $v_1,\dots,v_k$，扩充为 $V$ 的基 $v_1,\dots,v_k,w_1,\dots,w_r$。',
r'任意向量是这些基向量的线性组合，应用 $T$ 后核部分消失，故 $T(w_1),\dots,T(w_r)$ 生成像空间。',
r'若 $\sum a_jT(w_j)=0$，则 $\sum a_jw_j\in\ker T$，可以写成 $\sum b_iv_i$。移项给出原基的一条线性关系，迫使全部 $a_j,b_i$ 为零。因此像列线性无关，像维数为 $r$。',
r'全空间基长度为 $k+r$，故 $\dim V=k+r=\dim\ker T+\dim\operatorname{im}T$。零空间和零映射情形也被允许的空基覆盖。$\square$')
P('cauchy-schwarz','algebra/vector-spaces analysis/hilbert-spaces','实内积空间的柯西—施瓦茨不等式',r'实内积空间中，$|\langle u,v\rangle|\le\|u\|\|v\|$；等号当且仅当 $u,v$ 线性相关。','axiom-inner','从任意向量的平方长度非负出发，减去沿一个向量的最佳倍数。',
r'若 $v=0$，两侧均为零，且两向量线性相关。以下设 $v\ne0$，令 $t=\langle u,v\rangle/\|v\|^2$。',
r'内积双线性和对称性给出 $0\le\|u-tv\|^2=\|u\|^2-2t\langle u,v\rangle+t^2\|v\|^2=\|u\|^2-\langle u,v\rangle^2/\|v\|^2$。乘以正数 $\|v\|^2$ 再开非负平方根得到不等式。',
r'等号成立恰好使 $\|u-tv\|=0$，由正定性等价于 $u=tv$。反向若线性相关，直接代入也得等号。这里证明实内积版本；复数版本需在选取系数时加入共轭，不能原式照抄。$\square$')
P('prime-divisor','numbertheory/divisibility-primes','每个大于 1 的整数都有素因子及素数无穷性',r'每个整数 $n>1$ 都有素因子；素数集合无限。','axiom-natural','选最小非平凡因子得到素数，再用乘积加一逃离任何有限清单。',
r'考虑 $n$ 的所有大于 1 的正因子，这个集合非空（含 $n$），由自然数良序原则有最小者 $d$。若 $d$ 非素，则 $d=ab$ 且 $1<a<d$，于是 $a$ 也是 $n$ 的因子，与 $d$ 最小矛盾。所以 $d$ 为素数。',
r'假设素数只有 $p_1,\dots,p_k$，取 $N=p_1\cdots p_k+1>1$。已证第一部分保证 $N$ 有素因子 $q$，因而 $q=p_i$ 为某个清单元素。',
r'于是 $q$ 同时整除 $N$ 与乘积，便整除其差 1，不可能。故不存在覆盖所有素数的有限清单。论证不要求 $N$ 本身是素数。$\square$')
P('division-algorithm','numbertheory/gcd numbertheory/congruences','整数除法算法',r'对整数 $a$ 与正整数 $b$，唯一存在整数 $q,r$，使 $a=bq+r$ 且 $0\le r<b$。','axiom-natural','从所有非负余数候选中取最小者，若它过大还能减一次除数。',
r'集合 $S=\{a-bq:q\in\mathbb Z,\ a-bq\ge0\}$ 非空：选择足够负的 $q$ 即可。由非负整数良序原则取最小元素 $r=a-bq$。若 $r\ge b$，则 $r-b=a-b(q+1)\ge0$ 是更小的候选，矛盾，故 $r<b$。',
r'若还有 $a=bq\prime+r\prime$，且两余数都在 $[0,b)$，相减得 $b(q-q\prime)=r\prime-r$。右侧绝对值小于 $b$，但非零的 $b$ 倍数绝对值至少为 $b$，故只能为零。于是 $q=q\prime$、$r=r\prime$，唯一性成立。$\square$')
P('bezout','numbertheory/gcd','贝祖定理与最大公因数',r'对不全为零的整数 $a,b$，存在整数 $x,y$，使 $d=ax+by>0$，且 $d\mid a,d\mid b$；每个公因数都整除 $d$，所以 $d=\gcd(a,b)$。','division-algorithm','取所有正整数线性组合中的最小者，用带余除法迫使它整除两参数。',
r'集合 $S=\{ax+by>0:x,y\in\mathbb Z\}$ 非空，因为不全为零时可用某个非零参数或其负值得到正数。取最小元素 $d=ax_0+by_0$。',
r'用除法算法写 $a=qd+r$，$0\le r<d$。则 $r=a-qd=a(1-qx_0)+b(-qy_0)$ 仍是整数线性组合。若 $r>0$ 会违背 $d$ 最小，故 $r=0$，即 $d\mid a$。对 $b$ 同理得 $d\mid b$。',
r'任意公因数 $c$ 整除 $a,b$，也整除线性组合 $d$；特别地每个正公因数不大于 $d$。故 $d$ 是最大正公因数，且同时得到贝祖表示。$\square$')
P('euclid-lemma','numbertheory/divisibility-primes numbertheory/quadratic-residues','Euclid 引理',r'若素数 $p$ 整除整数乘积 $ab$，则 $p\mid a$ 或 $p\mid b$。','bezout','若素数不整除第一个因子，就与该因子互素，用贝祖等式消去它。',
r'若 $p\mid a$ 已得结论。否则 $p$ 的正因子仅为 1 和 $p$，而公因数不可能为 $p$，所以 $\gcd(p,a)=1$。',
r'由贝祖定理有整数 $x,y$ 使 $xp+ya=1$。两边乘 $b$ 得 $xpb+yab=b$。因 $p\mid ab$，左边两项都被 $p$ 整除，故 $p\mid b$。$\square$')
P('unique-factorization','numbertheory/divisibility-primes','正整数的素因子唯一分解',r'每个整数 $n>1$ 都可写成有限个素数之积，且除因子顺序外表示唯一。','prime-divisor euclid-lemma axiom-natural','强归纳给出存在性；素数整除乘积引理逐个匹配并约去因子。',
r'存在性用强归纳。若 $n$ 素，已有分解；若合数，则 $n=ab$ 且 $1<a,b<n$，由归纳假设二者均有素数分解，拼接得到 $n$ 的分解。起点 $n=2$ 是素数，故归纳成立。',
r'若 $p_1\cdots p_r=q_1\cdots q_s$ 是两种素数分解，则 $p_1$ 整除右侧。反复应用 Euclid 引理，必整除某个 $q_j$；因 $q_j$ 素且 $p_1>1$，只能 $p_1=q_j$。重排并在整数整环中约去这个非零因子。',
r'继续对剩余因子重复匹配。若一边先无因子，另一边仍有素数，其积至少为 2，不可能等于空积 1。因此同时结束，因子多重集合相同，唯一性成立。$\square$')
P('fermat-little','numbertheory/congruences numbertheory/modular-exponentiation','费马小定理',r'若 $p$ 为素数且整数 $a$ 不被 $p$ 整除，则 $a^{p-1}\equiv1\pmod p$。','euclid-lemma bezout','乘 a 只是把非零剩余类重新排列，比较乘积并合法约去。',
r'考虑 $a,2a,\dots,(p-1)a$ 的模 $p$ 剩余类。它们均非零，否则 Euclid 引理使 $p$ 整除 $a$ 或对应的 $k$，都不可能。',
r'若 $ia\equiv ja\pmod p$，则 $p\mid a(i-j)$。Euclid 引理及 $p\nmid a$ 给出 $p\mid i-j$；因 $|i-j|<p$，只能 $i=j$。因此这些类恰好排列了全部 $p-1$ 个非零类。',
r'比较乘积得 $a^{p-1}(p-1)!\equiv(p-1)!\pmod p$。每个因子都不被 $p$ 整除，重复 Euclid 引理说明阶乘也不被 $p$ 整除，故与 $p$ 互素。贝祖定理给出其模逆，乘逆即可约去，得到结论。$\square$')
P('measure-continuity','analysis/measures','测度的下连续性',r'设 $\mu$ 是测度，$E_n$ 是递增可测集列，则 $\mu(\bigcup_nE_n)=\lim_n\mu(E_n)$，允许两边为无穷。','axiom-measure','把递增集合拆成互不相交的新增加部分，再应用可数可加性。',
r'令 $D_1=E_1$，$D_n=E_n\setminus E_{n-1}$（$n\ge2$）。σ 代数对差封闭，故各 $D_n$ 可测；它们两两不交，且 $E_n=\bigcup_{k=1}^nD_k$，$\bigcup_nE_n=\bigcup_nD_n$。',
r'有限可加性由可数可加性补上空集得到，所以 $\mu(E_n)=\sum_{k=1}^n\mu(D_k)$。非负扩展实数级数按部分和上确界定义，可数可加性给出 $\mu(\bigcup_nE_n)=\sum_{k=1}^{\infty}\mu(D_k)=\lim_n\mu(E_n)$。无须假设初始测度有限。$\square$')
P('simple-approximation','analysis/measurable-functions analysis/lebesgue-integral','非负可测函数的单调简单逼近',r'对可测 $f:X\to[0,\infty]$，存在非负可测简单函数 $s_n\uparrow f$。','axiom-measure axiom-natural','把函数高度按二进制网格向下取整，同时把过高部分截断。',
r'定义 $s_n(x)=\min(n,2^{-n}\lfloor2^nf(x)\rfloor)$，约定 $f(x)=\infty$ 时 $s_n(x)=n$。它只取有限多个数值；每个水平集合由 $f$ 对半开区间或射线的原像组成，故可测。',
r'二进制细网格的向下取整不小于粗网格向下取整，同时截断高度由 $n$ 增到 $n+1$，因此 $s_n\le s_{n+1}\le f$。',
r'若 $f(x)<\infty$，当 $n>f(x)$ 时不再截断，且 $0\le f(x)-s_n(x)<2^{-n}\to0$；若 $f(x)=\infty$，则 $s_n(x)=n\to\infty$。故处处单调趋于 $f$。$\square$')
P('monotone-integral','analysis/lebesgue-integral analysis/integration-limits','单调收敛定理',r'设非负可测函数 $f_n\uparrow f$，则 $\int f_n\,d\mu\uparrow\int f\,d\mu$，允许无穷。非负积分定义为所有下方非负简单函数积分的上确界。','measure-continuity axiom-lebesgue','用阈值比例把任意简单下界的每块，逐步纳入某个 f_n 能控制的区域。',
r'非负积分定义立刻给出单调性，故 $L=\sup_n\int f_n\le\int f$。为证反向，取任意简单函数 $s=\sum_{j=1}^m a_j1_{A_j}\le f$，其中 $A_j$ 两两不交、$a_j>0$；零系数块可删去。再固定 $0<c<1$。',
r'令 $A_{j,n}=A_j\cap\{f_n\ge ca_j\}$。这些集合随 $n$ 递增，且并为 $A_j$：因 $f_n(x)\to f(x)\ge a_j>ca_j$。由单调性及简单函数积分定义，$\int f_n\ge c\sum_j a_j\mu(A_{j,n})$。',
r'由测度下连续性及有限非负和的极限，$L\ge c\sum_j a_j\mu(A_j)=c\int s$。若 $\int s=\infty$，此式已经迫使 $L=\infty$；若有限，令 $c\uparrow1$ 得 $L\ge\int s$。',
r'对所有简单下界取上确界，得 $L\ge\int f$，与第一步合并为等式。简单函数积分的表示无关性与单调性可由两种有限分块的交集共同细分及测度有限可加性验证，不需要预先调用本定理。$\square$')
P('integral-linearity','analysis/lebesgue-integral','勒贝格积分的线性性与绝对值估计',r'非负函数的积分满足非负加法及非负数乘。若实可测 $f,g$ 满足 $\int|f|,\int|g|<\infty$，则 $f+g$ 可积，$\int(f+g)=\int f+\int g$，并有 $|\int f|\le\int|f|$。','simple-approximation monotone-integral axiom-lebesgue','先在有限分块上计算，再单调逼近；有符号情形用正负部分消除可能的无穷相减。',
r'对非负简单函数，取两分块的共同细分，按测度有限可加性逐块相加，直接得到积分可加性和非负数乘性。取 $s_n\uparrow f$、$t_n\uparrow g$ 的简单逼近，则 $s_n+t_n\uparrow f+g$。对三列使用单调收敛定理，得非负积分可加；数乘同理，零乘无穷约定为零。',
r'对可积实函数，$|f+g|\le|f|+|g|$，由非负单调性和加法，$\int|f+g|\le\int|f|+\int|g|<\infty$。记 $h^+=\max(h,0)$、$h^-=\max(-h,0)$，有 $h=h^+-h^-$，且这些正负部分积分均有限。',
r'逐点恒等式 $f^++g^++(f+g)^-=f^-+g^-+(f+g)^+$ 只包含非负函数，积分并使用已证非负可加性；所有量有限，故可移项，得到有符号加法。负数乘由交换正负部分得到。',
r'最后 $|\int f|=|\int f^+-\int f^-|\le\int f^++\int f^-=\int|f|$。若 $f\le g$，对非负差 $g-f$ 应用线性性也得有符号积分单调性。$\square$')
P('fatou','analysis/integration-limits','Fatou 引理',r'若 $f_n\ge0$ 可测，则 $\int\liminf_n f_n\le\liminf_n\int f_n$。','monotone-integral axiom-measure','取每条尾部的下确界，得到可直接应用单调收敛的递增函数列。',
r'令 $g_n=\inf_{k\ge n}f_k$。可测性可由 $\{g_n<a\}=\bigcup_{k\ge n}\{f_k<a\}$ 验证；同时 $g_n\ge0$ 且 $g_n\uparrow\liminf f_n$。',
r'对每个 $k\ge n$，$g_n\le f_k$，故积分单调性给出 $\int g_n\le\inf_{k\ge n}\int f_k$。对左侧应用单调收敛，对右侧按数列下极限定义取极限，即得到结论，扩展实数情形同样成立。$\square$')
P('dominated-convergence','analysis/integration-limits analysis/lebesgue-integral','控制收敛定理（实值版）',r'设实可测 $f_n\to f$ 几乎处处，且 $|f_n|\le g$ 几乎处处，其中非负 $g$ 可积，则 $f$ 可积并有 $\int f_n\to\int f$。','fatou integral-linearity axiom-measure','分别对控制函数加上和减去 f_n 应用 Fatou，夹住积分上下极限。',
r'把可测的异常零测集统一去掉：可数个异常集之并仍零测。可在该可测零集上把所有函数改为零，积分不变；这是因为支持在零测集上的非负可测函数，其每个简单下界的积分都为零。这样不需要假设原测度空间完备，也能按可测零集上的修改处理。',
r'修改后处处有 $|f|\le g$，故 $f$ 可积，各 $f_n$ 也可积。对非负 $g+f_n$ 应用 Fatou，结合积分线性性及 $\int g<\infty$，得 $\int f\le\liminf_n\int f_n$。',
r'对非负 $g-f_n$ 再用 Fatou，得 $-\int f\le\liminf_n(-\int f_n)=-\limsup_n\int f_n$。因此 $\limsup\int f_n\le\int f\le\liminf\int f_n$，迫使两极限相同。$\square$')
P('markov','probability/expectation-variance probability/large-deviations','Markov 不等式',r'若 $X\ge0$ 为随机变量，$t>0$，则 $\mathbb P(X\ge t)\le\mathbb E[X]/t$；若期望无穷，右侧按无穷理解。','axiom-lebesgue','在超过阈值的事件上，随机变量至少贡献一个阈值的重量。',
r'记事件 $A=\{X\ge t\}$，由可测性它是事件。逐点有 $X\ge t1_A$：在 $A$ 上由定义成立，在补集上右侧为零。',
r'由非负积分定义的单调性，$\mathbb E[X]\ge\int t1_A\,d\mathbb P=t\mathbb P(A)$，最后一步是简单函数积分定义。两边除以正数 $t$ 得结论。$\square$')
P('chebyshev','probability/expectation-variance probability/convergence-in-probability','Chebyshev 不等式',r'若随机变量 $X$ 有有限均值 $m$ 和有限方差 $\sigma^2$，则对任意 $\varepsilon>0$，$\mathbb P(|X-m|\ge\varepsilon)\le\sigma^2/\varepsilon^2$。','markov','将偏差平方变成非负随机变量，直接调用阈值不等式。',
r'定义 $Y=(X-m)^2\ge0$，其期望按方差定义等于 $\sigma^2$。实数平方在非负数上保序，所以事件 $\{|X-m|\ge\varepsilon\}$ 与 $\{Y\ge\varepsilon^2\}$ 相同。',
r'对 $Y$ 用 Markov 不等式并取阈值 $\varepsilon^2>0$，得到所需上界。证明不要求 $X$ 为离散或连续分布。$\square$')
P('independent-products','probability/expectation-variance probability/conditional-probability','独立平方可积变量的期望乘法',r'若 $X,Y$ 独立，且二者二阶矩有限，则 $XY$ 可积且 $\mathbb E[XY]=\mathbb E[X]\mathbb E[Y]$。','simple-approximation monotone-integral integral-linearity axiom-independence','先对事件指标相乘，再扩展到简单函数、非负函数和有符号函数。',
r'若 $s(X)=\sum_i a_i1_{\{X\in A_i\}}$、$t(Y)=\sum_j b_j1_{\{Y\in B_j\}}$ 为非负简单函数，独立性给出每对事件交的概率为概率乘积；有限展开后 $\mathbb E[s(X)t(Y)]=\mathbb E[s(X)]\mathbb E[t(Y)]$。',
r'对非负的 $X,Y$ 分别用其值的二进制简单逼近 $s_n(X)\uparrow X$、$t_n(Y)\uparrow Y$，它们的乘积也单调趋于 $XY$。三次应用单调收敛，得到非负变量的乘法式，允许无穷。',
r'一般情形先有 $2|XY|\le X^2+Y^2$，因为 $(|X|-|Y|)^2\ge0$。故乘积可积。又 $|X|\le1+X^2$，所以一阶矩有限，$Y$ 同理。',
r'对正负部分分别应用非负结论，再按 $XY=X^+Y^+-X^+Y^--X^-Y^++X^-Y^-$ 积分，所有量有限可整理，得到期望乘法。这些正负部分是各自变量的可测函数，仍满足所需事件独立性。$\square$')
P('weak-law','probability/law-large-numbers probability/convergence-in-probability','有限方差弱大数定律',r'设 $X_1,X_2,\dots$ 相互独立，均值均为 $m$，方差均为有限的 $\sigma^2$。则 $\overline X_n=n^{-1}\sum_{i=1}^nX_i$ 依概率收敛到 $m$。','independent-products chebyshev integral-linearity','把样本均值的方差算为原方差除以样本数，再控制偏差概率。',
r'积分线性性给出 $\mathbb E[\overline X_n]=m$。展开中心化平方并积分，得 $\operatorname{Var}(\overline X_n)=n^{-2}\sum_i\mathbb E[(X_i-m)^2]+2n^{-2}\sum_{i<j}\mathbb E[(X_i-m)(X_j-m)]$。',
r'不同下标的中心化变量独立，已证期望乘法使交叉项等于两个零均值之积，故全为零。剩下 $n$ 个方差项，所以样本均值方差为 $\sigma^2/n$。',
r'对任意 $\varepsilon>0$，Chebyshev 给出 $\mathbb P(|\overline X_n-m|\ge\varepsilon)\le\sigma^2/(n\varepsilon^2)\to0$。这就是依概率收敛。本证明不覆盖仅有一阶矩的更一般弱大数定律，也不证明强大数定律。$\square$')
P('bayes','probability/conditional-probability probability/posterior-distribution','有限分割的 Bayes 公式',r'若事件 $A_1,\dots,A_k$ 两两不交且并为全集，$\mathbb P(A_i)>0$，且 $\mathbb P(B)>0$，则 $\mathbb P(A_j\mid B)=\mathbb P(B\mid A_j)\mathbb P(A_j)/\sum_i\mathbb P(B\mid A_i)\mathbb P(A_i)$。','axiom-measure','分子按条件概率定义改写，分母把观测事件按互斥原因拆开。',
r'由条件概率定义，$\mathbb P(A_j\mid B)=\mathbb P(A_j\cap B)/\mathbb P(B)$，且 $\mathbb P(A_i\cap B)=\mathbb P(B\mid A_i)\mathbb P(A_i)$，所有分母正，故这些商有定义。',
r'事件 $B$ 是互不相交的 $B\cap A_i$ 之并。有限可加性给出 $\mathbb P(B)=\sum_i\mathbb P(B\cap A_i)=\sum_i\mathbb P(B\mid A_i)\mathbb P(A_i)$。代入第一式即得结论。零先验块可先删去；零概率的观测不能直接用此商式处理。$\square$')
P('convex-intersection','geometry/convex-sets applied/convex-optimization','凸集的任意交仍凸',r'同一实向量空间中任意族凸集的交集仍是凸集；空交按全空间理解。','axiom-vector','任取交集中的两点，它们在每个成员内的线段都被保留。',
r'令 $C=\bigcap_{i\in I}C_i$。若 $x,y\in C$，则对每个 $i$ 有 $x,y\in C_i$。任取 $t\in[0,1]$，各 $C_i$ 凸，所以 $(1-t)x+ty\in C_i$ 对全部 $i$ 成立。',
r'因此该线段点在交集 $C$ 内。若 $C$ 空，凸性条件因没有可取的两点而真；若指标集空，则交集为全空间，它对线性组合封闭。故所有情况成立。$\square$')
P('continuous-compact','geometry/compactness geometry/open-sets-continuity','紧致空间的连续像紧致',r'若 $K$ 紧致，$f:K\to Y$ 连续，则子空间 $f(K)$ 紧致。','axiom-topology','把像的开覆盖拉回原空间，用有限覆盖后再推到像。',
r'设 $\{V_i\}_{i\in I}$ 为 $f(K)$ 的相对开覆盖。按子空间拓扑，每个 $V_i=f(K)\cap U_i$，其中 $U_i$ 在 $Y$ 开。连续性使 $f^{-1}(U_i)$ 在 $K$ 开。',
r'任意 $x\in K$ 的像被某个 $V_i$ 覆盖，故这些原像覆盖 $K$。紧致性给出有限下标 $i_1,\dots,i_m$，其原像覆盖 $K$。',
r'任意 $y\in f(K)$ 取一个原像 $x$，该点属于某个被选原像，所以 $y\in V_{i_j}$。故所选有限 $V_i$ 覆盖整个像，证明紧致。$\square$')
P('continuous-connected','geometry/connectedness geometry/homeomorphism','连通空间的连续像连通',r'若空间 $X$ 连通，连续映射 $f:X\to Y$ 的像 $f(X)$ 连通。','axiom-topology','若像能被分成两个不接触的开块，原像也会把原空间分开。',
r'反设 $f(X)=U\cup V$，其中 $U,V$ 是像空间中不交、非空的相对开集。由子空间拓扑与连续性，$f^{-1}(U)$、$f^{-1}(V)$ 都在 $X$ 开。',
r'两原像不交且并为 $X$。因 $U,V$ 都包含像中的点，两原像均非空。这就构成 $X$ 的一个分离，与连通定义矛盾。故连续像连通。$\square$')
P('intermediate-value','analysis/continuity-uniform geometry/connectedness','介值定理',r'若 $f:[a,b]\to\mathbb R$ 连续且 $f(a)<c<f(b)$，则存在 $x\in(a,b)$ 使 $f(x)=c$。端值次序相反时也成立。','axiom-real','取函数值还在目标以下的点的上确界，再分别排除函数值偏低和偏高。',
r'令 $S=\{x\in[a,b]:f(x)<c\}$，它含 $a$ 且被 $b$ 上界，故有 $s=\sup S$。由 $f(a)<c$ 及连续性，$a$ 右侧一小段仍低于 $c$，所以 $s>a$；由 $f(b)>c$ 及连续性，$b$ 左侧一小段均高于 $c$，所以 $s<b$。',
r'若 $f(s)<c$，连续性保证 $s$ 附近函数值仍小于 $c$，可取 $s$ 右边且仍在区间中的点属于 $S$，违反上界。',
r'若 $f(s)>c$，存在 $\delta>0$ 使 $s$ 左侧距它小于 $\delta$ 的点都不在 $S$。但上确界性质保证任意 $\eta>0$ 都有 $x\in S$ 满足 $s-\eta<x\le s$；取足够小 $\eta$，与前述邻域矛盾。故只能 $f(s)=c$。端值反向时对 $-f$ 使用已证结论。$\square$')
P('archimedean','analysis/completeness-reals','实数的 Archimedes 性质',r'自然数在实数中无上界；因此 $1/n\to0$，并且 $2^{-n}\to0$。','axiom-real axiom-natural','若自然数有最小上界，加一运算会产生越界的自然数。',
r'反设自然数有上界，令 $s=\sup\mathbb N$。因为 $s-1$ 不是上界，有自然数 $n>s-1$。于是自然数 $n+1>s$，与 $s$ 为上界矛盾。',
r'给定 $\varepsilon>0$，取自然数 $N>1/\varepsilon$。当 $n\ge N$ 时 $0<1/n\le1/N<\varepsilon$，所以 $1/n\to0$。',
r'归纳可证 $2^n\ge n+1$：$n=0$ 时相等；若对 $n$ 成立，则 $2^{n+1}\ge2n+2\ge n+2$。故 $0<2^{-n}\le1/(n+1)\to0$，直接由同一误差控制得收敛。$\square$')
P('handshake','discrete/graphs-networks','握手定理及奇度顶点偶数性',r'有限无向图中，顶点度数之和为边数的两倍，自环对度数贡献 2；奇度顶点个数必为偶数。','axiom-finite','双重计数边的端点关联，再对计数等式取奇偶性。',
r'把每条边的两个端部看成两个不同关联，即使自环两个端部附着在同一顶点也分别计数。按边计数共有 $2|E|$ 个关联；按顶点计数共有 $\sum_v\deg(v)$ 个，因此二者相等。',
r'对等式模 2，偶度顶点贡献零，奇度顶点各贡献 1；右边为偶数。所以奇度顶点的个数模 2 为零，即其个数为偶数。该证明不适用于把有向图入度或出度单独当作无向度的情形。$\square$')
P('tree-edges','discrete/trees-spanning','树的边数定理',r'含 $n\ge1$ 个顶点的有限简单无向树，边数恰为 $n-1$。树指连通且无环的图。','axiom-finite axiom-natural','先证明非平凡有限树有叶子，再删叶归纳。',
r'当 $n=1$，简单图没有自环，边数为零。若 $n>1$，在有限树中取一条顶点数最多的简单路径。其端点至少邻接路径上的下一点；若还有路径外邻点，便能延长路径；若还邻接路径上非下一点，则形成环。两者都不可能，因此端点度数为 1，是叶子。',
r'删去该叶子及唯一相邻边，剩余图仍无环。剩余任意两顶点之间原有简单路径不能以叶子为内部点，故仍连通。因此得到 $n-1$ 个顶点的树。',
r'对顶点数归纳，剩余边数为 $n-2$，加回被删一边即得 $n-1$。归纳证明覆盖全部有限树。$\square$')
P('binomial-count','discrete/permutations-combinations','组合数公式',r'从 $n$ 个不同对象中选 $k$ 个组成无序子集，$0\le k\le n$，数量为 $\binom nk=n!/[k!(n-k)!]$。','axiom-finite','先数有序无重复选择，再按每个子集被重复计算的排列数作商。',
r'当 $k>0$，依次选择第一个至第 $k$ 个对象，可选数分别为 $n,n-1,\dots,n-k+1$；有限计数乘法原理给出有序选择数 $n!/(n-k)!$。',
r'每个固定的 $k$ 元子集可排列为 $k!$ 个有序选择，且不同子集的这些选择不相交。故按等大小分块计数，子集数为有序数除以 $k!$。',
r'当 $k=0$，只有空集一种，约定 $0!=1$ 后公式也给 1。该结果不适用于允许重复选择或对象不可区分的情形。$\square$')
P('greedy-mst','discrete/greedy-algorithms discrete/trees-spanning','Kruskal 算法的正确性',r'有限连通简单无向加权图上，按权重不减顺序扫描边，只在不形成环时加入，最终得到最小权生成树；权重允许为负，相同权重任意排序。','tree-edges axiom-finite','维持“当前森林包含于某棵最优生成树”的交换不变式。',
r'有限连通图存在生成树：从单个顶点出发，只要未覆盖全部顶点，由连通性可找一条跨向未覆盖顶点的边，加入新顶点而不成环，有限步完成。因此生成树集合有限非空，权重和有最小者。空森林包含于其中，作为不变式初始情况。',
r'设当前森林 $F$ 包含于某棵最优树 $T$。算法选下一条可加入的边 $e$。若 $e\in T$，不变式保持。否则把 $e$ 加入 $T$，两端在 $T$ 中的唯一简单路径加 $e$ 形成环；唯一性因两条不同路径会成环。',
r'$e$ 两端在 $F$ 中属于不同连通分量。环中存在一条边 $f$ 跨过其中一个分量的边界，故 $f\notin F$。若 $f$ 在扫描中早于 $e$ 且当时被拒绝，其两端当时已由已选边连通，之后仍连通，便不可能现在跨越该分量。故 $f$ 未早于 $e$ 被处理，权重不小于 $e$。',
r'删除环中的 $f$ 得新生成树 $T\prime=T+e-f$，权重不大于 $T$，所以仍最优且包含 $F+e$。这完成不变式。最终若森林不连通，原图必有跨分量边，扫描该边时本可加入，矛盾。故最终为生成树，且包含于一棵最优树；二者同有 $n-1$ 条边，因而相等。$\square$')
P('p-in-np','discrete/p-vs-np','P 包含于 NP',r'在标准判定问题定义下，$\mathrm P\subseteq\mathrm{NP}$。此结论不解决反向包含是否成立。','axiom-computation','多项式时间就能直接判定的问题，无须额外证据即可验证。',
r'取任意语言 $L\in\mathrm P$。按定义有确定性算法 $A$，在长度 $n$ 的任意输入上至多 $p(n)$ 步完成并正确判定是否属于 $L$，其中 $p$ 为多项式。',
r'构造验证器 $V(x,w)$：忽略证据 $w$，直接运行 $A(x)$。对属于 $L$ 的 $x$，选择空证据即可使验证器接受；对不属于的 $x$，任何证据都不会被接受。',
r'证据长度为零，验证时间为多项式，满足 NP 的证据验证定义。因 $L$ 任意，得到包含关系。证明没有构造所有 NP 问题的多项式判定器，所以没有证明 P=NP。$\square$')
P('coding-radius','discrete/minimum-distance discrete/error-correcting-codes','最小距离与保证纠错半径',r'有限长度码的最小 Hamming 距离为 $d\ge1$，则可唯一纠正至多 $t=\lfloor(d-1)/2\rfloor$ 个符号错误，并保证检测至多 $d-1$ 个错误。','axiom-finite','先逐坐标证明三角不等式，再排除两个码字的纠错球相交。',
r'若坐标上 $x_i\ne z_i$，则不可能同时有 $x_i=y_i$ 和 $y_i=z_i$，故该坐标至少计入 $x,y$ 或 $y,z$ 的差异。对坐标求和得到 Hamming 三角不等式。',
r'设收到字 $r$ 同时距两个不同码字 $c_1,c_2$ 不超过 $t$，则 $d(c_1,c_2)\le d(c_1,r)+d(r,c_2)\le2t<d$，与最小距离矛盾。因此半径 $t$ 内的码字唯一；若错误数至多 $t$，原码字必在其中，最近码字译码可正确恢复。',
r'若发生至少 1、至多 $d-1$ 位变化，结果不可能是另一个码字，否则两码字距离小于 $d$。通过检查收到字是否仍属于码本，即可保证检错。码只有一个码字时最小距离需另作约定，不在本陈述中。$\square$')
P('convex-local-global','applied/convex-optimization','凸函数局部极小即全局极小',r'设 $C$ 是实赋范空间中的凸集，$f:C\to\mathbb R$ 为凸函数。若 $x_*$ 是相对于 $C$ 的局部极小点，则它是全局极小点。','axiom-vector axiom-metric','若远处有更低点，沿线段朝它移动任意小一步也会降低目标。',
r'局部极小意味着存在 $r>0$，使 $x\in C$ 且 $\|x-x_*\|<r$ 时有 $f(x)\ge f(x_*)$。反设存在 $y\in C$ 且 $f(y)<f(x_*)$，显然 $y\ne x_*$。',
r'取 $0<t<\min(1,r/\|y-x_*\|)$，令 $z=(1-t)x_*+ty$。凸集条件保证 $z\in C$，范数齐次性给出 $\|z-x_*\|=t\|y-x_*\|<r$。',
r'但凸性给出 $f(z)\le(1-t)f(x_*)+tf(y)<f(x_*)$，与局部极小矛盾。故没有这样的 $y$，即全局极小。$\square$')
P('strict-convex-unique','applied/convex-optimization applied/nonlinear-optimization','严格凸目标的极小点唯一性',r'严格凸实函数在凸集上至多有一个全局极小点；这里并不保证极小点存在。','axiom-vector','两个不同最优点的中点，会由严格凸性产生更低目标值。',
r'反设 $x\ne y$ 均为最优点，记共同最优值为 $m$。凸集包含中点 $z=(x+y)/2$。',
r'严格凸性给出 $f(z)<[f(x)+f(y)]/2=m$，违背 $m$ 是全局最小值。因此最优点至多一个。存在性不能从此推出，例如正半轴上的严格凸函数 $f(x)=x^2$ 下确界为零但未取到。$\square$')
P('weak-duality','applied/duality applied/linear-programming','拉格朗日弱对偶',r'最小化 $f(x)$，约束 $g_i(x)\le0$、$h_j(x)=0$。若 $x$ 原问题可行，$\lambda_i\ge0$、$\nu_j\in\mathbb R$，且 $q(\lambda,\nu)=\inf_z[f(z)+\sum_i\lambda_i g_i(z)+\sum_j\nu_j h_j(z)]$，则 $q(\lambda,\nu)\le f(x)$。','axiom-real','下确界不超过任意点的值，可行点的约束项又不会增加目标。',
r'对原可行点 $x$，每个 $\lambda_i g_i(x)\le0$，而 $\nu_jh_j(x)=0$，故拉格朗日函数 $L(x,\lambda,\nu)\le f(x)$。',
r'由下确界定义，$q(\lambda,\nu)\le L(x,\lambda,\nu)$。两式连起来得到结论。该结论对每个可行 $x$ 和每个满足符号约束的乘子成立。',
r'若原可行集非空，对可行点取下确界，再对乘子取上确界，得对偶最优值不超过原最优值。允许对偶函数为负无穷，原问题无界时按扩展实数解释；本证明完全未使用凸性，也不声称强对偶。$\square$')
P('tikhonov-scalar','applied/regularized-inversion probability/regularization','一维 Tikhonov 正则化的解与稳定性',r'给定 $y\in\mathbb R$、$\lambda\ge0$，目标 $J(x)=(x-y)^2+\lambda x^2$ 唯一极小于 $x_\lambda=y/(1+\lambda)$，且解映射的 Lipschitz 常数为 $1/(1+\lambda)$。','axiom-real','完成平方，直接看出唯一极小点与扰动缩减比例。',
r'展开并配方：$J(x)=(1+\lambda)[x-y/(1+\lambda)]^2+\lambda y^2/(1+\lambda)$。因为 $1+\lambda>0$，平方项非负，且恰在 $x=y/(1+\lambda)$ 取零，所以极小点存在且唯一。',
r'若观测从 $y$ 变为 $\widetilde y$，相应解之差绝对值恰为 $|y-\widetilde y|/(1+\lambda)$，所以此映射满足给定 Lipschitz 估计，且任取不同输入均取等号。',
r'在无噪真实观测 $y=x_{\rm true}$ 时，估计偏差为 $-\lambda x_{\rm true}/(1+\lambda)$。这说明增大惩罚在缩小扰动的同时引入收缩偏差；此处证明一维问题，不把结论冒充一般逆算子的完整理论。$\square$')

P('darboux-derivative','analysis/derivatives analysis/fundamental-theorem-calculus','Darboux 定理：导数的介值性',r'设 $f$ 在含 $[a,b]$ 的开区间可导，且 $f\prime(a)<c<f\prime(b)$。则存在 $x\in(a,b)$ 使 $f\prime(x)=c$。反向不等式同理，导数不必连续。','rolle derivative-continuity','减去斜率为 c 的直线，端点导数符号排除在端点取最小值。',
r'令 $g(t)=f(t)-ct$，则 $g\prime(a)<0$、$g\prime(b)>0$。由可导蕴含连续，$g$ 在闭区间连续；Rolle 定理证明中已展开的极值存在论证保证它在 $[a,b]$ 取最小值。',
r'因为 $g\prime(a)<0$，按导数定义，充分小的正 $h$ 满足 $[g(a+h)-g(a)]/h<0$，故 $g(a+h)<g(a)$，所以 $a$ 不可能取最小值。',
r'因为 $g\prime(b)>0$，充分小的负 $h$ 满足 $[g(b+h)-g(b)]/h>0$；乘以负 $h$ 得 $g(b+h)<g(b)$，所以 $b$ 也不取最小值。最小值只能在某个内部点 $x$ 达到。',
r'内部极小点的正向差商非负，负向差商非正，导数存在迫使其等于零。因此 $g\prime(x)=0$，即 $f\prime(x)=c$。若端点导数次序相反，对 $-f$ 用已证情形。$\square$')
P('variable-integral','analysis/fundamental-theorem-calculus analysis/multivariable-calculus','变积分限的求导公式',r'设 $f$ 在开区间 $I$ 连续，$a(x),b(x)$ 在 $x_0$ 可导且附近取值于 $I$。则 $H(x)=\int_{a(x)}^{b(x)}f(t)\,dt$ 在 $x_0$ 可导，$H\prime(x_0)=f(b(x_0))b\prime(x_0)-f(a(x_0))a\prime(x_0)$。','ftc-first chain-rule','选同一个固定积分起点，把变上下限拆成两个复合函数。',
r'固定 $c\in I$，令 $F(u)=\int_c^u f(t)\,dt$。因 $I$ 是区间，两点之间的闭线段仍在 $I$，故连续可积性保证这些积分有定义，且第一基本定理在每个 $u\in I$ 给出 $F\prime(u)=f(u)$。',
r'按积分区间可加性与换向约定，无论 $a(x)$ 和 $b(x)$ 的大小关系如何，都有 $H(x)=F(b(x))-F(a(x))$。',
r'分别应用已证链式法则，再用差商的减法法则，得到 $H\prime(x_0)=F\prime(b(x_0))b\prime(x_0)-F\prime(a(x_0))a\prime(x_0)$。代入 $F\prime=f$ 即得公式。这里被积函数本身不依赖 x；若还依赖 x，必须另加积分号下求导所需条件与项。$\square$')

P('riemann-linearity','analysis/integration-calculus','Darboux 定义下的积分线性性',r'若有界实函数 $f,g$ 在 $[a,b]$ 黎曼可积，则 $f+g$ 与任意实倍数 $cf$ 可积，且积分满足加法及数乘线性性。','axiom-riemann','在共同精细分割上同时控制两个函数的上下和差，避免未经证明就使用黎曼和极限表述。',
r'任意分割细分后，下和不减、上和不增：一个区间拆成小段时，每段下确界不小于原下确界，上确界不大于原上确界，乘长度相加即得。两个分割取端点并集就是共同细分。',
r'给定 $\varepsilon>0$，可积性使 $f,g$ 各有分割满足上和减下和小于 $\varepsilon/2$，取共同细分 $P$ 后两个界仍成立。逐区间有 $\operatorname{osc}(f+g)\le\operatorname{osc}(f)+\operatorname{osc}(g)$，所以 $U(f+g,P)-L(f+g,P)<\varepsilon$，从而和可积。',
r'还满足 $L(f,P)+L(g,P)\le L(f+g,P)\le\int(f+g)\le U(f+g,P)\le U(f,P)+U(g,P)$。因每个积分夹在自己的上下和之间，左右两端分别距 $\int f+\int g$ 不到 $\varepsilon$。任意 $\varepsilon$ 迫使 $\int(f+g)=\int f+\int g$。',
r'当 $c>0$，上下确界及上下和直接乘 $c$；当 $c<0$，上、下确界交换并乘 $c$；$c=0$ 时为零函数。由定义分别得到可积性及 $\int cf=c\int f$。$\square$')
P('riemann-additivity','analysis/integration-calculus analysis/fundamental-theorem-calculus','黎曼积分的区间可加性',r'若 $f$ 在 $[a,b]$ 黎曼可积，$a<c<b$，则两段限制都可积，且 $\int_a^b f=\int_a^c f+\int_c^b f$；端点重合或反向积分由零区间与换向定义处理。','riemann-linearity','把分割补入断点，每一边的上下和差都被全区间间隙控制。',
r'给定 $\varepsilon>0$，取原区间上上下和差小于 $\varepsilon$ 的分割，加入 $c$ 得到细分，间隙不增。该分割左右两段的上下和差都非负，且相加为总间隙，因此每段间隙都小于 $\varepsilon$。任意误差都能实现，所以两个限制可积。',
r'对于含 $c$ 的分割 $P$，上下和分别恰等于两段的对应和，因此 $L(f,P)\le\int_a^c f+\int_c^b f\le U(f,P)$。整段积分也在同一上下和之间。',
r'取间隙小于任意 $\varepsilon$ 的这类分割，两个候选数的距离小于 $\varepsilon$，所以相等。若只假设两段各可积，也可分别取小间隙分割再合并，以同样论证得到整段可积及相等式。$\square$')

BASES={
'axiom-real':dict(title='实数有序域与上确界公理',statement='使用实数的有序域公理、非负数平方根的基本定义、有限和代数运算及非空有上界实数集具有上确界。上下极限与 ε 定义按通常定义使用。'),
'axiom-natural':dict(title='自然数归纳与良序基础',statement='使用自然数归纳原则（含其等价的良序原则）、整数的环运算及有限递归。自然数在实数中无界不在此假定，另见 Archimedes 性质的证明。'),
'axiom-set':dict(title='集合论基本构造',statement='使用外延、配对、分离及幂集等基本集合构造；不在本卷重新证明作为基础公理的这些原则。'),
'axiom-metric':dict(title='度量、范数与收敛的定义',statement='使用度量的非负、正定、对称、三角不等式，以及开球拓扑、连续性与 ε 收敛定义。赋范空间另使用范数齐次和三角公理。紧致的含义为开覆盖有有限子覆盖。'),
'axiom-topology':dict(title='拓扑空间的定义',statement='使用开集对任意并、有限交封闭，子空间拓扑、连续映射的开集原像定义，以及紧致、连通的定义。'),
'axiom-riemann':dict(title='Darboux 积分的定义',statement='有界实函数的下积分定义为所有分割下和的上确界，上积分定义为所有上和的下确界；相等称可积。本卷的积分估计、线性性和区间可加性均直接从上下和证明，不预设带标记黎曼和与该定义的等价定理。'),
'axiom-measure':dict(title='σ 代数与测度公理',statement='使用可测集对补与可数并封闭、测度非负、空集测度为零及两两不交可数并的可数可加性；概率测度另满足全集测度为一。'),
'axiom-lebesgue':dict(title='非负及有符号积分的定义',statement='非负简单函数积分为系数乘分块测度之和，0·∞=0；非负可测函数积分是所有下方非负简单函数积分的上确界。绝对可积实函数的积分为正部积分减负部积分。有限共同细分给出简单函数表示无关性；非负积分单调性直接来自取上确界。'),
'axiom-logic':dict(title='经典二值逻辑的语义',statement='命题真值取真或假，按通常真值表解释联结词，按论域中所有元素或某个元素解释全称或存在量词。'),
'axiom-computation':dict(title='程序与复杂度的定义',statement='使用图灵可计算程序的有限编码、通用模拟及顺序、分支、循环的可实现性；P 和 NP 分别按多项式确定性判定与多项式证据验证定义。'),
'axiom-group':dict(title='群与群作用的公理',statement='使用群乘法的结合律、单位元和逆元公理；群作用满足单位元作用恒等与乘法作用相容；群同态按保持乘法定义。'),
'axiom-finite':dict(title='有限计数与图的定义',statement='使用有限集合不交并的加法、笛卡尔积的乘法计数，以及有限简单无向图、路径、环、树、码字和 Hamming 距离的定义。'),
'axiom-vector':dict(title='向量空间及凸性定义',statement='使用标量域、向量空间的加法与数乘公理，以及有限线性组合、线性无关、生成、基、线性映射、凸集和凸函数的定义。'),
'axiom-inner':dict(title='实内积公理',statement='使用内积的实双线性、对称和正定公理，范数定义为向量与自身内积的非负平方根。'),
'axiom-independence':dict(title='随机变量独立性的定义',statement='随机变量的独立性按任意 Borel 原像事件的联合概率等于概率乘积定义；本卷证明需要的期望乘法，不把它当作独立性定义。')}
# Close easy-to-miss quantitative dependencies explicitly.
for p in PROOFS:
    if p['id']=='supremum-integral':
        p['idea']='直接夹住所有上下和，再按 Darboux 积分的定义取界。'
        p['steps']=[r'对任意分割，每个小区间上都有 $-M\le\inf h\le\sup h\le M$；乘以非负长度再相加，得 $-M(b-a)\le L(h,P)\le U(h,P)\le M(b-a)$。',r'下积分是下和的上确界，上积分是上和的下确界，故二者都在该闭区间内。可积时它们的共同值就是积分，因此积分绝对值至多 $M(b-a)$。$\square$']
    if p['id']=='ftc-first':
        p['dependencies']+=['riemann-additivity','riemann-linearity']
        p['steps'][0]=p['steps'][0].replace('由黎曼和可直接验证相邻区间的可加性：在公共端点切开分割，分别取极限。','由已证积分区间可加性，')
    if p['id']=='uniform-integration':
        p['dependencies'].append('riemann-linearity')
        p['steps'][2]=p['steps'][2].replace('黎曼和的线性性取极限给出积分线性性','由已证 Darboux 积分线性性')

for p in PROOFS:
    if p['id'] in {'bolzano-weierstrass','simple-approximation','compact-interval'}:
        p['dependencies'].append('archimedean')
    if p['id']=='division-algorithm':
        p['steps'][0]=p['steps'][0].replace('选择足够负的 $q$ 即可', r'取 $q=-|a|$，因 $b\ge1$ 可直接验证余数非负')
assert len(PROOFS)==68,len(PROOFS)
ids={p['id'] for p in PROOFS}
assert len(ids)==len(PROOFS)
for p in PROOFS:
    assert all(d in ids or d in BASES for d in p['dependencies']),p['id']
# Acyclicity is required; transitive dependencies are checked rather than guessed.
lookup={p['id']:p for p in PROOFS}
visiting=set();visited=set()
def visit(id):
    if id in BASES or id in visited:return
    if id in visiting:raise ValueError('Circular proof: '+id)
    visiting.add(id)
    for dep in lookup[id]['dependencies']:visit(dep)
    visiting.remove(id);visited.add(id)
for id in ids:visit(id)
data=dict(bases=BASES,proofs=PROOFS)
(ROOT/'js/data/proofs.js').write_text('/* 逐条编写的证明及其闭合依赖。生成自 scripts/build-proofs.py。 */\nwindow.ATLAS.proofBook = '+json.dumps(data,ensure_ascii=False,indent=2)+';\n')
book=['# 数学知识地图：证明第一卷','',
'本卷含 68 个明确陈述的定理或命题证明。以列明的基础公理和定义为起点，前置命题均在本卷展开；这不是全部 319 个知识点所含定理的完成声明。各证明的结论范围以陈述为准，有限方差、一维、实值等限制不可省略。','',
'## 阅读方式','','每节先读命题，再读思路，按依赖回看前置证明，最后核对逐步推导。证明为重新组织的中文讲解，不复制外部教材文字。结构检查只验证依赖闭合，不等于机器验证数学正确。','',
'## 基础公理与定义','']
for id,b in BASES.items():book.extend([f'<a id="{id}"></a>',f'### {b["title"]}',b['statement'],''])
for p in PROOFS:
    book.extend([f'<a id="{p["id"]}"></a>',f'## {p["title"]}','','**陈述。** '+p['statement'],'','**依赖。** '+ '；'.join('['+(BASES[d]['title'] if d in BASES else lookup[d]['title'])+'](#'+d+')' for d in p['dependencies']),'','**思路。** '+p['idea'],'','**证明。**',''])
    book.extend(str(i)+'. '+s+'\n' for i,s in enumerate(p['steps'],1))
book+=['## 对照阅读资料','',
'[Jiří Lebl，Basic Analysis](https://www.jirka.org/ra/)：实分析章节的术语、条件与延伸阅读。',
'[MIT 6.041SC，Weak Law of Large Numbers](https://ocw.mit.edu/courses/6-041sc-probabilistic-systems-analysis-and-applied-probability-fall-2013/pages/unit-iv/lecture-19/)：概率界和弱大数定律的课程背景。','']
(ROOT/'docs/proofs/volume-1.md').write_text('\n'.join(book))
print(f'Built {len(PROOFS)} proofs; {len(BASES)} explicit foundations; dependency graph acyclic')

tex=[r'\documentclass[UTF8]{ctexbook}',r'\usepackage{amsmath,amssymb,amsthm,hyperref,enumitem}',r'\newtheorem{theorem}{定理}[chapter]',r'\theoremstyle{definition}\newtheorem{foundation}[theorem]{基础约定}',r'\title{数学知识地图：证明第一卷}',r'\author{Math Atlas}',r'\date{}',r'\begin{document}',r'\maketitle',r'\tableofcontents',r'\chapter{基础公理与定义}',
'本卷只对所列命题给出证明，不代表仓库全部定理均已完成。基础公理和定义是明确的出发点，前置命题的证明在本卷内提供。']
for id,b in BASES.items():
    tex.extend([r'\begin{foundation}['+b['title']+r']\label{base:'+id+'}',b['statement'],r'\end{foundation}'])
tex.append(r'\chapter{定理与逐步证明}')
for p in PROOFS:
    tex.extend([r'\begin{theorem}['+p['title']+r']\label{thm:'+p['id']+'}',p['statement'],r'\end{theorem}',r'\noindent\textbf{依赖：}'+ '；'.join((BASES[d]['title']+r'（约定~\ref{base:'+d+'}）') if d in BASES else (lookup[d]['title']+r'（定理~\ref{thm:'+d+'}）') for d in p['dependencies']),r'\par\noindent\textbf{思路：}'+p['idea'],r'\begin{proof}',r'\begin{enumerate}[leftmargin=*]'])
    tex.extend(r'\item '+step.replace(r'$\square$','') for step in p['steps'])
    tex.extend([r'\end{enumerate}',r'\end{proof}'])
tex.append(r'\end{document}')
(ROOT/'docs/proofs/volume-1.tex').write_text('\n\n'.join(tex)+'\n')
