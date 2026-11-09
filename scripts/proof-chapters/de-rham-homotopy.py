"""Local de Rham exactness, with the homotopy operator written out."""
def register(P, BASES):
    P('pullback-exterior-derivative','geometry/cohomology geometry/differential-structures','拉回与外微分交换',r'对光滑映射F:M→N及任意光滑微分形式ω，有d(F*ω)=F*(dω)。因此F诱导de Rham上同调映射，方向与F相反。','def-differential-forms','先在坐标中对函数、坐标微分验证，再用分次乘积法则处理一般形式。',
      r'坐标中外微分满足分次乘积法则 d(α∧β)=dα∧β+(−1)^kα∧dβ（α为k形式）。将α、β写成系数乘坐标外积，按普通乘积法则求导，把新增dx越过α的k个坐标因子即产生(−1)^k，逐项相加得到此式。混合偏导对称和外积反对称也直接给d²f=0。',
      r'在目标局部坐标y中写ω=Σ_I f_I dy^(i₁)∧⋯∧dy^(i_k)。拉回为Σ_I(f_I∘F)dF^(i₁)∧⋯∧dF^(i_k)。求外微分时，d(dF^i)=0，故只剩d(f_I∘F)外乘这些因子；链式法则给d(f_I∘F)=Σ_j(∂_jf_I∘F)dF^j，恰为F*(dω)。',
      r'坐标域上等式一致，因而全局成立。闭形式被拉回为闭形式，精确形式dη被拉回为d(F*η)，所以商空间kerd/imd上有良定义线性映射。拉回复合反序由定义直接验证，故诱导映射亦反序。$\square$')
    P('de-rham-homotopy-formula','geometry/cohomology geometry/homotopy','微分形式的同伦算子公式',r'设F:[0,1]×M→N光滑，F_t(x)=F(t,x)。定义Kω=∫₀¹ι_(∂t)(F*ω)dt，积分按M方向形式系数逐项进行。则 F₁*ω−F₀*ω=dKω+K(dω)。因此光滑同伦映射诱导相同de Rham上同调映射。','pullback-exterior-derivative ftc-second','把乘积空间上的形式唯一拆成dt部分与纯空间部分，比较外微分的dt系数。',
      r'局部写η=F*ω=dt∧α(t)+β(t)，其中α是随t变化的(k−1)形式，β是k形式，二者均不含dt。k=0时α取0。由收缩定义ι_(∂t)η=α，所以Kω=∫₀¹α(t)dt。',
      r'分次乘积法则给dη=dt∧(∂_tβ−d_Mα)+d_Mβ。因此K(dω)=∫₀¹(∂_tβ−d_Mα)dt，因为dF*ω=F*dω已证。另一方面d_MKω=∫₀¹d_Mα dt；光滑系数在紧t区间可对x在积分下求导，局部紧子集上差商由连续导数一致控制，故交换合法。',
      r'相加得dKω+Kdω=∫₀¹∂_tβ dt=β(1)−β(0)=F₁*ω−F₀*ω。所有步骤局部成立且K由收缩及积分定义，故可拼成全局公式。若dω=0，两拉回相差精确形式dKω，得到同调映射相同；k=0时公式同样给函数差为Kdf。$\square$')
    P('poincare-lemma-star-shaped','geometry/cohomology geometry/differential-structures','星形区域的 Poincaré 引理及全局限制',r'若开集U⊆R^m关于0星形，则其每个次数k≥1的光滑闭形式ω均精确。一个原像为 (Kω)_x(v₁,…,v_(k−1))=∫₀¹t^(k−1)ω_(tx)(x,v₁,…,v_(k−1))dt。H⁰_dR(U)=R，高次de Rham上同调为零。去掉星形条件后闭形式未必精确。','de-rham-homotopy-formula ftc-second','把恒等映射沿径向收缩到常值映射，常值拉回对正次数为零。',
      r'令F(t,x)=tx，星形性保证全段在U内。F₁=id，F₀为常值0。正次数形式在常值映射下拉回为零，因为其微分作用于每个切向量都为零。同伦公式给ω=dKω+Kdω；若dω=0，得ω=dKω。',
      r'显式算子来自dF(∂_t)=x、dF(v_j)=tv_j，所以收缩拉回的值为t^(k−1)ω_(tx)(x,v₁,…,v_(k−1))，积分即所列式。它在t=0无奇点，系数光滑，前面算子构造已保证得到光滑形式。若0形式f闭，即df=0，则沿径向线段 f(x)−f(0)=∫₀¹df_(tx)(x)dt=0，所以只有常数。',
      r'全局限制用U=R²去掉原点展示。形式η=(−y dx+x dy)/(x²+y²)光滑，直接求偏导可见dη=0：∂_x[x/(x²+y²)]与∂_y[−y/(x²+y²)]均为(y²−x²)/(x²+y²)²。若η=df全局精确，则沿单位圆γ(t)=(cos t,sin t)、0≤t≤2π积分应为f(γ(2π))−f(γ(0))=0。',
      r'然而拉回γ*η=dt，积分为2π，矛盾。因此该闭形式不精确。星形引理给局部精确性，但不能据此直接宣称任意流形的全局de Rham上同调消失，也不能代替一般de Rham比较定理。$\square$')
