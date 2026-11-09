"""Hamiltonian invariance through a coordinate proof of the needed Cartan identity."""
def register(P, BASES):
    P('cartan-two-form-flow','geometry/symplectic-forms geometry/symplectomorphisms','二形式沿光滑流的导数与 Cartan 恒等式',r'设X为光滑向量场，φ_t为其光滑局部流，η为光滑二形式，ι_Xη定义为(ι_Xη)(Y)=η(X,Y)。则 d/dt(φ_t*η)=φ_t*(L_Xη)，且 L_Xη=d(ι_Xη)+ι_X(dη)。这里流及拉回只在它们有定义的开集和时段使用。','def-differential-forms','对拉回的坐标表达式求导，然后逐项展开外微分，验证三阶指标抵消。',
      r'在坐标中写η=(1/2)Ση_ij dx^i∧dx^j，η_ij=−η_ji。拉回系数为Σ_(a,b)η_ab(φ_t(x))∂_iφ_t^a∂_jφ_t^b。用∂_tφ_t^a=X^a(φ_t)及链式法则在t=0求导，得到 (L_Xη)_ij=Σ_k[X^k∂_kη_ij+(∂_iX^k)η_kj+(∂_jX^k)η_ik]。',
      r'定义α=ι_Xη，坐标为α_j=Σ_k X^kη_kj。于是(dα)_ij=Σ_k[(∂_iX^k)η_kj−(∂_jX^k)η_ki+X^k(∂_iη_kj−∂_jη_ki)]。又(ι_Xdη)_ij=Σ_kX^k(∂_kη_ij+∂_iη_jk+∂_jη_ki)。二式相加，η_jk=−η_kj使两组多余偏导相消，剩余项正是上一段的L_Xη。',
      r'对一般时刻t，利用局部流群律φ_(t+h)=φ_h∘φ_t，拉回反序给φ_(t+h)*η=φ_t*(φ_h*η)。对h在0求导，得导数φ_t*(L_Xη)。坐标计算在任意坐标域成立，而两边都是由拉回、外微分和收缩定义的形式，故在交叠坐标域一致，得到流形上的恒等式。$\square$')
    P('hamiltonian-flow-symplectic','geometry/symplectomorphisms geometry/hamiltonian-systems geometry/symplectic-forms','Hamilton 局部流保持辛形式和辛体积',r'设(M,ω)为光滑辛流形，H为光滑实函数，Hamilton向量场由ι_(X_H)ω=dH定义。其光滑局部流φ_t在有定义时满足φ_t*ω=ω，并保持辛定向体积形式ω^n/n!。不假定流对所有实时间都存在。','cartan-two-form-flow symplectic-volume-preservation','闭性dω=0和二阶外微分d²H=0使辛形式沿流导数为零。',
      r'ω在每点非退化，映射v↦ω(v,·)是切空间到余切空间的可逆线性映射。因此方程定义唯一X_H，局部坐标中它由光滑非奇异矩阵求逆作用于dH而得，故光滑。这里结论对给定的光滑局部流证明，不借此断言任意Hamilton流全局完备。',
      r'Cartan二形式恒等式给L_(X_H)ω=d(ι_(X_H)ω)+ι_(X_H)dω=d(dH)+0=0。标量函数的d²H=0可直接由坐标混合偏导相等看出。于是d/dt(φ_t*ω)=φ_t*0=0。每个坐标系数沿时间恒定，在t=0有φ₀=id，所以φ_t*ω=ω。',
      r'局部流的逆为φ_(−t)，故在相应定义域间是局部微分同胚。拉回与外积可交换，所以φ_t*(ω^n/n!)=(φ_t*ω)^n/n!=ω^n/n!。这证明辛体积形式守恒；对可积分区域，相应体积守恒还需通常的积分换元公式。',
      r'在标准坐标ω=Σdq_j∧dp_j下，ι_Xω=Σ(q̇_j dp_j−ṗ_j dq_j)=dH，恰给q̇_j=∂H/∂p_j、ṗ_j=−∂H/∂q_j，与经典Hamilton方程约定一致。$\square$')
    P('liouville-jacobian-flow','geometry/symplectomorphisms geometry/hamiltonian-systems applied/classical-mechanics','标准相空间 Hamilton 流的 Jacobian 体积证明',r'在R^(2n)中，C² Hamilton量H的C¹局部流φ_t若对初值可微且导数满足变分方程，则det Dφ_t=1。更一般，C¹向量场F的这种局部流满足 det Dφ_t(x)=exp(∫₀^t divF(φ_s(x))ds)。','linear-ode-existence ftc-second flow-initial-c1-variation','变分方程与行列式多线性给Jacobi导数公式，Hamilton向量场的散度由混合偏导抵消。',
      r'令J(t)=Dφ_t(x)，变分方程为J′=DF(φ_t(x))J，J(0)=I。局部流逆的链式法则给J可逆。行列式导数可从对列多线性展开得到：det(I+hB)=1+h trB+O(h²)，因为仅替换一列的一阶项恰为相应对角元之和，其余至少含两个h。',
      r'用J(t+h)=J(t)+hJ′(t)+o(h)，提取J(t)得 (detJ)′=detJ·tr(J⁻¹J′)。代入变分方程，再用有限矩阵tr(AB)=tr(BA)（坐标交换两次求和即可），得到(detJ)′=tr(DF(φ_t(x)))detJ。乘以exp(−∫₀^t divF(φ_s(x))ds)后导数为零，初值1给所列公式。',
      r'对F=(H_p,−H_q)，有divF=Σ_j(∂_(q_j)∂_(p_j)H−∂_(p_j)∂_(q_j)H)=0，因为H为C²。故detJ恒为1。这个坐标证明同时展示体积守恒的原因；一般散度零仅保证体积，不反过来保证保持完整辛二形式。$\square$')
