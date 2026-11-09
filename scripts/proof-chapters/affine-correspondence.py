"""Irreducibility and polynomial maps of affine algebraic sets."""
def register(P, BASES):
    BASES['def-affine-algebraic-set']=dict(title='仿射代数集、不可约与多项式映射',statement='固定代数闭域 k。仿射代数集 X⊆k^n 的闭子集为 X∩V(J)，坐标环 k[X]=k[x₁,…,x_n]/I(X)。非空 X 称不可约，若不能写成两个真闭子集的并。X→Y⊆k^m 的多项式映射指其 m 个坐标函数均为 X 上多项式限制。本章只使用这种映射，不预设一般概形或局部正则函数的全局表示定理。')
    P('irreducible-prime-correspondence','geometry/algebraic-varieties-geometry algebra/prime-ideals geometry/coordinate-rings','不可约仿射代数集与素理想的对应',r'非空仿射代数集 X 不可约，当且仅当 I(X) 为素理想，当且仅当 k[X] 为整环。因此素理想 p 对应不可约代数集 V(p)。','strong-nullstellensatz maximal-prime-quotient def-affine-algebraic-set','乘积在所有点为零意味着整个代数集被两个零点闭集覆盖；不可约性迫使其中一个因子处处为零。',
      r'若 X 不可约，且 fg∈I(X)，则每个 a∈X 有 f(a)g(a)=0，域无零因子使 X=(X∩V(f))∪(X∩V(g))。两者闭，不可约性使至少一个等于 X，所以 f∈I(X) 或 g∈I(X)。X 非空又保证1∉I(X)，故为真素理想。',
      r'反向若 I(X) 素，而 X=X₁∪X₂、两者都是真闭子集，写 X_i=X∩V(J_i)。因 X_i 真，可取 X 中不在 X_i 的点，从 J_i 中选一个在该点非零的多项式 f_i。于是 f_i 在 X_i 消失，却不属于 I(X)。但 f₁f₂ 在 X₁∪X₂=X 消失，属于 I(X)，与素性矛盾。',
      r'商环为整环与理想素性的等价已证明。任一素理想 p 真，由弱零点定理 V(p) 非空；素理想为根式理想（f^m∈p 反复用素性得 f∈p），故强零点定理给 I(V(p))=p。套用前两步得到不可约性，完成对应。$\square$')
    P('affine-polynomial-map-duality','geometry/coordinate-rings geometry/algebraic-varieties-geometry foundations/functors','仿射代数集的多项式映射与坐标环同态',r'仿射代数集 X⊆k^n、Y⊆k^m 的多项式映射 F:X→Y 与保单位 k-代数同态 F*:k[Y]→k[X] 一一对应，F*([h])=[h∘F]。复合顺序反转；多项式同构对应坐标环同构。','strong-nullstellensatz def-affine-algebraic-set','映射的坐标函数决定拉回同态；反向把坐标变量的像选成多项式代表。',
      r'若 F 的坐标由 f₁,…,f_m 给出，定义 h 的拉回为 h(f₁,…,f_m) 在 k[X] 中的类。换 f_i 的代表不会改变 X 上的函数值，差属于 I(X)；若 h∈I(Y)，因 F(X)⊆Y，其复合在 X 上消失，故类为零。因此映射能下降到 k[Y]，并逐项保持加法、乘法、标量及单位元。',
      r'反向给 θ:k[Y]→k[X]，对 Y 的坐标变量 y_i 的类取像 θ([y_i])，各选多项式代表 f_i。令 F(x)=(f₁(x),…,f_m(x))。对任意 h∈I(Y)，有 θ([h])=0，所以 h(f₁,…,f_m)∈I(X)，在 X 上消失。因此 F(x)∈V(I(Y))=Y。代表变化仍给相同点值，故 F 定义良好。',
      r'坐标变量的像唯一确定 k-代数同态，坐标函数的点值也唯一确定 F，故两个构造互逆。若 G:Y→Z，逐函数代入给 (G∘F)*=F*∘G*，恒等映射对应恒等同态。因此双向多项式逆映射给双向环逆同态；反向环同构也由此构造出双向多项式逆，得到同构对应。$\square$')
