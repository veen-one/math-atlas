"""Deterministic finite-horizon verification, with explicit admissibility hypotheses."""
def register(P, BASES):
    P('deterministic-bellman-principle','applied/optimal-control','确定性有限时域的动态规划原理',r'设每个起点(t,x)有非空可行控制集，控制产生唯一轨迹，代价为 ∫_t^T l(s,x(s),u(s))ds+g(x(T))，值函数V为其下确界且处处有限。假定控制可在任意中间时刻限制和拼接，限制后的轨迹可行，拼接轨迹遵守唯一性。则任意t≤s≤T有 V(t,x)=inf_u{∫_t^s l(r,x_u(r),u(r))dr+V(s,x_u(s))}，右端只对可行前段取下确界。','axiom-real','任意全程控制的尾段不优于尾段最优值；反向为选定前段接上一个近似最优尾段。',
      r'记右端为B。任意全程控制u在s之后的尾段，是从(s,x_u(s))出发的可行控制，故其尾代价至少V(s,x_u(s))。因此全代价至少对应的前段表达式，再至少B。对全程控制取下确界得V(t,x)≥B。',
      r'反向对任意可行前段v和ε>0，由尾段值有限且可行集非空，可选尾段代价小于V(s,x_v(s))+ε。拼接假设保证得到全程可行控制，故V(t,x)≤∫_t^s l+V(s,x_v(s))+ε。令ε趋零，再对v取下确界得V(t,x)≤B。这个论证也排除B=−∞，因为否则可拼接出任意低于有限V(t,x)的代价，矛盾。',
      r'不需要假定最优控制取得：只使用下确界定义给出的ε最优尾段。对单个确定前段只选一个尾段，亦无需构造关于所有状态的可测最优选择。$\square$')
    P('classical-hjb-verification','applied/optimal-control','经典 HJB 方程的验证定理',r'考虑 x′=f(t,x,u) 与代价 J=∫_t^T l(s,x,u)ds+g(x(T))。可行控制分段连续，轨迹分段C¹且在全时段存在。设W∈C¹([0,T]×R^n)满足 W(T,x)=g(x) 和 W_t+inf_(u∈U){l+∇W·f}=0。则 W(t,x)≤J 对全部可行控制成立。若有一条可行控制沿轨迹逐点（分段断点除外）取得该下确界，则其最优，W(t,x)=V(t,x)。','ftc-second','沿任意可行轨迹对候选值函数求导，HJB 给下界；取得最小 Hamiltonian 的轨迹使不等式处处成为等式。',
      r'任取可行u。HJB 的下确界条件给 W_t(s,x)+∇W(s,x)·f(s,x,u)+l(s,x,u)≥0。在每个连续控制段内，链式法则给 dW(s,x(s))/ds=W_t+∇W·f。逐段积分，因W沿连续轨迹连续，内部端点项相消，得到 W(T,x(T))−W(t,x)≥−∫_t^T l。',
      r'代入终端条件并移项即W(t,x)≤J。对全部控制取下确界得W≤V。如果给定控制u*沿轨迹取得下确界，上述微分不等式为等式，积分得J(u*)=W。因此W≤V≤J(u*)=W，证明最优性及值相等。',
      r'这里显式要求候选解光滑、终端条件成立，并且最小化控制的闭环轨迹确实存在且可行。仅写出一个HJB方程，或者形式上选出极小化器，不能代替这些条件。若没有取得下确界的可行轨迹，本定理仍给下界，但不单独声称W就是值函数。$\square$')
    P('finite-horizon-lqr-verification','applied/optimal-control applied/state-space','有限时域 LQR 的 Riccati 验证与平方配方',r'设连续矩阵A(t),B(t),Q(t),R(t)定义于[0,T]，Q对称半正定、R对称正定，终端S对称半正定。假定已有C¹对称解 P′+AᵀP+PA−PBR⁻¹BᵀP+Q=0，P(T)=S。对x′=Ax+Bu、J=x(T)ᵀSx(T)+∫(xᵀQx+uᵀRu)，最优控制为u*=−R⁻¹BᵀPx，最小值x(t)ᵀP(t)x(t)。此结论本身不主张Riccati解存在。','classical-hjb-verification linear-ode-existence','微分二次型，再配方成正定平方；闭环线性方程保证候选控制可行。',
      r'R在每个时刻可逆，逆矩阵由伴随矩阵除以非零行列式给出连续函数。令K=R⁻¹BᵀP。沿任意可行轨迹，计算 d(xᵀPx)/ds=xᵀ(P′+AᵀP+PA)x+2xᵀPBu。代入Riccati方程得该导数等于−xᵀQx+xᵀPBR⁻¹BᵀPx+2xᵀPBu。',
      r'加上运行代价后右侧恰为(u+Kx)ᵀR(u+Kx)。积分并用终端条件，得到 J=x(t)ᵀP(t)x(t)+∫_t^T(u+Kx)ᵀR(u+Kx)ds≥x(t)ᵀP(t)x(t)。',
      r'闭环x′=(A−BK)x为连续系数线性系统，在紧时间段存在唯一解；u*=−Kx连续，故可行。对它平方项恒为零，达到上述下界，证明所列最优控制与值。非负代价还表明任意起点二次型xᵀP(t)x≥0，因而P半正定。若其他分段连续控制同样最优，连续段上的正定平方积分为零，故在每段内部u=−Kx，唯一性迫使相同轨迹；控制在有限断点处的任意赋值不影响积分或轨迹。$\square$')
    P('linear-ode-existence','analysis/odes applied/state-space','连续系数线性方程在紧时间段的存在唯一性',r'设A:[a,b]→R^(n×n)、h:[a,b]→R^n连续。任意t₀∈[a,b]及初值x₀，方程x′=A(t)x+h(t)、x(t₀)=x₀在[a,b]有唯一C¹解。','banach-contraction continuous-functions-complete ftc-first finite-dimensional-compactness','在统一短时间片上积分算子是整个连续函数空间的压缩，逐片延拓到两侧端点。',
      r'连续性与紧致性给M=sup‖A(t)‖<∞。取δ>0使Mδ<1，M=0时任取δ。在长度不超过δ、左端为c的区间I上，给定x(c)=z，定义(Ty)(t)=z+∫_c^t[A(s)y(s)+h(s)]ds。它将C(I,R^n)映入自身；该空间以最大范数完备，因为逐坐标一致柯西列有连续一致极限。',
      r'积分三角不等式给‖Ty−Tw‖∞≤Mδ‖y−w‖∞，压缩定理给唯一连续固定点。积分基本定理使该固定点C¹且满足方程；任意C¹解积分后都是同一固定点，所以局部唯一。积分自右端初值往左的区间，用同一公式把c取右端，绝对长度估计不变，结论同样成立。',
      r'从t₀起，向右、向左各取有限个长度至多δ的片段，以上一段的终值作为下一段初值。在连接点，两侧导数均等于连续函数A(t)x(t)+h(t)，所以拼接为全段C¹解。任意两个全段解在首片由唯一性相等，再依次在所有片相等，完成全局唯一性。$\square$')
    P('finite-horizon-riccati-existence','applied/optimal-control applied/state-space','半正定有限时域 Riccati 方程的全程存在唯一性',r'连续矩阵A,B,Q,R定义于[0,T]，Q对称半正定，R对称正定，S对称半正定。则 P′+AᵀP+PA−PBR⁻¹BᵀP+Q=0、P(T)=S 有唯一全段C¹解，该解对称半正定。','linear-ode-existence hermitian-spectral','将非线性方程提升为两倍维度的线性系统，能量恒等式保证图坐标X永不奇异。',
      r'记C=BR⁻¹Bᵀ，它连续对称半正定。解矩阵终值系统 X′=AX−CY，Y′=−QX−AᵀY，X(T)=I、Y(T)=S。逐列应用连续系数线性方程存在唯一性，得全段C¹矩阵X,Y。直接微分得 (XᵀY)′=−YᵀCY−XᵀQX，为对称矩阵，所以XᵀY−YᵀX常值；终值为零，因此恒为零。',
      r'证明每个X(t)可逆。若X(t)v=0，令x(s)=X(s)v、y(s)=Y(s)v，则 (xᵀy)′=−xᵀQx−yᵀCy。积分至T得 0=vᵀSv+∫_t^T[xᵀQx+(Bᵀy)ᵀR⁻¹(Bᵀy)]ds。所有项非负且被积函数连续，故每个时刻Bᵀy=0。于是Cy=0且x′=Ax，由x(t)=0及线性方程唯一性得x恒零，从而v=x(T)=0。核只有零，X可逆。此论证在t=T也由X(T)=I直接成立。',
      r'定义P=YX⁻¹。逆矩阵由伴随矩阵公式给C¹性，微分XX⁻¹=I得 (X⁻¹)′=−X⁻¹X′X⁻¹。故P′=−Q−AᵀP−PA+PCP，终值S。由XᵀY=YᵀX左右乘X^(−ᵀ)、X⁻¹，得P=Pᵀ。对任意z及t取v=X(t)⁻¹z，上述能量积分恒等式给 zᵀP(t)z=vᵀSv+∫_t^T[xᵀQx+yᵀCy]ds≥0，所以P半正定。',
      r'若P₁,P₂为任意两全段解，D=P₁−P₂满足 D′=(−Aᵀ+P₁C)D+D(−A+CP₂)，D(T)=0。这是n²个矩阵坐标上的连续系数齐次线性方程；唯一性给D恒零。这里即使比较解尚未假定对称也成立。$\square$')
    P('finite-horizon-lqr-complete','applied/optimal-control applied/state-space','连续系数有限时域 LQR 的完整求解定理',r'对连续A,B、连续对称Q≥0、R>0和终端S≥0，有限时域无状态约束LQR在分段连续控制类中有最优控制 u*=−R⁻¹BᵀPx，其中P为终值S的Riccati方程唯一解；值函数为xᵀPx，最优控制除有限分段断点的赋值外唯一。','finite-horizon-riccati-existence finite-horizon-lqr-verification','先证明Riccati全程解存在，再应用平方配方的验证定理，因此不再悬置解的存在条件。',
      r'Riccati存在唯一定理在所列正定和半正定条件下给唯一C¹对称半正定P，覆盖整个闭时间段。平方配方验证定理于是适用，闭环连续线性系统给可行控制并达到值xᵀPx。',
      r'若另一个分段连续控制达到同样值，平方配方恒等式中的非负积分为零。在每个连续段内部，正定R及连续性迫使u+R⁻¹BᵀPx=0，故其轨迹解同一闭环方程；线性方程唯一性使轨迹相同。因此控制在各连续段内部相同，有限断点的值不改变轨迹或代价。这个定理没有加入硬终端状态或路径约束，因而不能直接替代火箭着陆等有额外约束问题的最优性证明。$\square$')
