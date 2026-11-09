"""Local finite-dimensional flows and their first variations."""
def register(P, BASES):
    P('gronwall-continuous','analysis/odes analysis/stability','连续 Grönwall 不等式',r'连续非负u:[0,T]→R若满足u(t)≤a+b∫₀^t u(s)ds，a,b≥0，则u(t)≤ae^(bt)。','ftc-second','用积分右端构造可微上界，乘指数积分因子。',
      r'令v(t)=a+b∫₀^t u(s)ds，则u≤v、v(0)=a且v′=bu≤bv。因此(e^(−bt)v)′≤0。',
      r'在0到t积分得e^(−bt)v(t)≤v(0)=a，故v(t)≤ae^(bt)，再用u≤v即得。a=0时同样给u恒零，不需要除以a。$\square$')
    P('vector-local-picard','analysis/odes analysis/initial-boundary','有限维一致局部 Picard 存在唯一性',r'设F:Ω⊆R^m→R^m为C¹，x₀∈Ω。存在h>0及x₀邻域V，使每个z∈V的初值问题x′=F(x)、x(0)=z在[−h,h]有唯一局部解φ(t,z)。并可取统一L使‖φ(t,z)−φ(t,w)‖≤e^(L|t|)‖z−w‖。','banach-contraction continuous-functions-complete vector-segment-derivative-bound gronwall-continuous ftc-first','在同一个闭球及同一个短时间段上压缩，给相邻初值统一存在时间。',
      r'取闭球B(x₀,r)包含于Ω，F及DF在球上有界，记M=sup‖F‖、L=sup‖DF‖。线段导数估计给F在球内Lipschitz常数L。取h>0使hM<r/2、hL<1（M或L为零时相应约束自动成立），初值z取开球V=B(x₀,r/2)。',
      r'在连续函数空间中取闭子集E={y:[−h,h]→B(x₀,r)}，它完备：逐坐标一致柯西列有连续极限且闭球保持极限。定义T_z y(t)=z+∫₀^t F(y(s))ds。范数估计保证值在球内，且‖T_zy−T_zw‖∞≤hL‖y−w‖∞。压缩定理给唯一固定点，积分基本定理给C¹解。',
      r'任意留在球内的两解之差满足 ‖x(t)−y(t)‖≤‖z−w‖+L∫₀^t‖x(s)−y(s)‖ds，正时间用Grönwall，负时间反向参数后同理。由此得所列初值估计和唯一性。任意其他局部解最初由连续性留在球内，重叠区间可逐点应用相同局部唯一性拼接，因此是通常意义的局部唯一解。$\square$')
    P('flow-initial-c1-variation','analysis/odes geometry/hamiltonian-systems geometry/symplectomorphisms','局部流对初值的 C¹ 依赖及变分方程',r'对开集上的C¹向量场F，上述统一局部解φ(t,z)对(t,z)为C¹，并且J(t,z)=D_zφ(t,z)满足 J′=DF(φ(t,z))J、J(0,z)=I。局部流满足φ(t,φ(s,z))=φ(t+s,z)，只要相应解段均在共同定义域；每个固定t的映射局部可逆，逆为反向时间流。','vector-local-picard linear-ode-existence gronwall-continuous heine-cantor','用导数的一致连续性控制非线性余项，再与线性变分方程相减。',
      r'固定统一存在矩形中的(t,z)。沿轨迹A(s,z)=DF(φ(s,z))连续，线性方程给唯一J，且积分方程和Grönwall给‖J(t,z)‖≤e^(L|t|)。给小向量v，令δ(s)=φ(s,z+v)−φ(s,z)，前面估计给sup_s‖δ(s)‖≤e^(Lh)‖v‖。选紧球使相邻轨迹和它们的连线都在原定义域内。',
      r'DF在该紧球上一致连续。写ω(ρ)=sup{‖DF(x)−DF(y)‖:‖x−y‖≤ρ且x,y在球内}，则ω(ρ)→0。线段积分给 F(x+δ)−F(x)−DF(x)δ 的范数≤ω(‖δ‖)‖δ‖。令e(s)=δ(s)−J(s,z)v，积分方程相减得 e(t)=∫₀^t[A(s,z)e(s)+R(s)]ds，且sup‖R‖≤ω(e^(Lh)‖v‖)e^(Lh)‖v‖。',
      r'Grönwall于是给sup‖e‖≤h e^(2Lh)ω(e^(Lh)‖v‖)‖v‖=o(‖v‖)，负时间同样。因此J确实是初值方向的Fréchet导数，且余项在所取紧邻域一致。',
      r'证明J随初值连续：φ的初值Lipschitz估计使A(·,z′)一致趋A(·,z)。两J积分方程相减，利用统一指数界和Grönwall得sup‖J(·,z′)−J(·,z)‖≤h e^(2Lh)sup‖A(·,z′)−A(·,z)‖→0。时间连续性来自线性方程，合起来得J联合连续。又∂_tφ=F(φ)连续，所以φ为C¹。',
      r'自治性使轨迹u↦φ(u+s,z)与u↦φ(u,φ(s,z))满足同一方程和相同u=0初值，唯一性给群律。在足够小的相邻定义域内取s=−t，得反向时间映射为逆。其C¹性已证，故得到局部C¹微分同胚。这同时验证上一章Jacobian体积公式所列的初值可微和变分方程假设。$\square$')
