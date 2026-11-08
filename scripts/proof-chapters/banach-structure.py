"""Baire, uniform boundedness, open mapping and closed graph, with local proofs."""
def register(P, BASES):
    P('baire-category','analysis/banach-spaces','Baire 类别定理（完备度量空间）',r'非空完备度量空间 X 中，可数个稠密开集的交在 X 中稠密。等价地，X 不能是可数个内部为空的闭集之并。','def-complete axiom-metric axiom-dependent-choice','在给定开集内递归套入半径趋零的闭球，用完备性取得共同点。',
      r'设 U_n 为稠密开集，V 为任意非空开集。U₁∩V 非空且开，可选 x₁ 及 r₁>0，使闭球 C₁={x:d(x,x₁)≤r₁} 包含在 U₁∩V，且 r₁≤1/2。选取方式：先取包含于该开集的开球，再缩小半径一半。',
      r'递归地，B(x_n,r_n)∩U_(n+1) 非空且开，选闭球 C_(n+1) 包含其中，半径 0<r_(n+1)≤2^(−n−1)。于是 C_(n+1)⊆C_n。对 m≥n，x_m∈C_n，故 d(x_m,x_n)≤r_n→0，中心序列柯西。',
      r'完备性给 x_n→x。各 C_n 闭且包含全部后续中心，故 x∈C_n 对全部 n 成立。因此 x∈V∩∩U_n。任意非空开 V 都与交相遇，正是稠密性。若闭集 F_n 内部为空，其补为稠密开集，此结论排除 ∪F_n=X；上述闭球构造已直接证明稠密开集版本，取补集又给闭集覆盖版本。$\square$')
    P('uniform-boundedness','analysis/banach-spaces analysis/linear-operators','Banach–Steinhaus 一致有界原理',r'设 X 为 Banach 空间、Y 为赋范空间，{T_α} 为任意族有界线性算子 X→Y。若每个 x∈X 满足 sup_α‖T_αx‖<∞，则 sup_α‖T_α‖<∞。','baire-category axiom-vector','闭集 E_n 收集所有算子值均不超过 n 的点；其中一个有内点，用相减和缩放取得算子范数界。',
      r'空算子族结论直接成立。令 E_n={x:对所有 α，‖T_αx‖≤n}。每个 T_α 连续且范数连续，E_n 是闭集的任意交，故闭。逐点有界使 X=∪_(n≥1)E_n。',
      r'由 Baire，某 E_N 含开球 B(x₀,r)，r>0。特别 x₀∈E_N。对任意单位向量 u，x₀+(r/2)u∈E_N，所以 ‖T_α((r/2)u)‖≤‖T_α(x₀+(r/2)u)‖+‖T_αx₀‖≤2N。',
      r'线性与齐次性给 ‖T_αu‖≤4N/r，界不依赖 α 或单位向量 u。由算子范数定义，所有 ‖T_α‖≤4N/r。X={0} 时所有算子范数为零，另行成立。注意 Y 完备性不是本定理的前提。$\square$')
    P('open-mapping-banach','analysis/banach-spaces analysis/linear-operators','Banach 开映射定理',r'Banach 空间 X,Y 之间的有界满射线性算子 T 是开映射；若同时单射，则逆算子有界。','baire-category def-complete axiom-vector','先由 Baire 得到单位球像的闭包含原点邻域，再用几何收敛误差逐步去掉闭包。',
      r'记 B_X 为 X 的开单位球。满射使 Y=∪_(n≥1)T(nB_X)，因此也被闭集 F_n=closure(T(nB_X)) 覆盖。若 Y={0} 结论直接成立；否则 Baire 给某 F_N 含球 B(y₀,r)。',
      r'对 ‖h‖<r，y₀+h 与 y₀ 都属于 F_N。各可用 T(NB_X) 内的序列逼近，其差属于 T(2NB_X) 并趋 h。因此 B(0,r)⊆closure(T(2NB_X))。缩放后取 δ=r/(2N)>0，得 B(0,δ)⊆closure(T(B_X))。',
      r'给 ‖y‖<δ/2，递归选 x_j，满足 ‖x_j‖<2^(−j)，且残差 r_j=y−TΣ_(k≤j)x_k 满足 ‖r_j‖<δ·2^(−j−1)。第一步由 y∈B(0,δ/2)⊆closure(T((1/2)B_X)) 选得；以后 r_(j−1)∈B(0,δ·2^(−j))，同样使用缩放后的闭包包含式，并把逼近误差取得小于 δ·2^(−j−1)。',
      r'Σ‖x_j‖<1：每项严格小于 2^(−j)，故总和严格小于一。其部分和由几何尾和成为柯西列，X 完备给极限 x，且 ‖x‖<1。T 连续、残差趋零，故 Tx=y。于是 B(0,δ/2)⊆T(B_X)。',
      r'若 U⊆X 开且 x∈U，取 ε>0 使 x+εB_X⊆U；其像包含 Tx+B(0,εδ/2)，故 T(U) 是开集。若 T 双射，前述球包含式令每个 y≠0 有唯一原像，且对任意 t>2‖y‖/δ，有 ‖T⁻¹y‖<t。令 t↓2‖y‖/δ，得 ‖T⁻¹y‖≤2‖y‖/δ，逆算子有界。$\square$')
    P('closed-graph-banach','analysis/banach-spaces analysis/linear-operators','Banach 闭图像定理',r'Banach 空间 X,Y 间定义于全部 X 的线性映射 T 有界，当且仅当图像 G(T)={(x,Tx):x∈X} 在 X×Y 中闭。','open-mapping-banach def-complete axiom-vector','把闭图像当作 Banach 空间，第一坐标投影的逆由开映射定理有界。',
      r'给 X×Y 配范数 ‖(x,y)‖=‖x‖+‖y‖。其中柯西列的两个坐标都柯西，分别在 X,Y 收敛，故乘积完备。闭子空间中的柯西列在乘积内收敛，闭性保证极限仍在该子空间，所以闭子空间也完备。',
      r'若 G(T) 闭，它是该乘积的闭线性子空间，因而 Banach。投影 P:G(T)→X，(x,Tx)↦x 是有界线性双射，且 ‖P‖≤1。开映射定理给 P⁻¹ 有界，存在 C 使 ‖(x,Tx)‖≤C‖x‖。因此 ‖Tx‖≤C‖x‖，T 有界。',
      r'反向若 T 有界，对图像中任意收敛序列 (x_n,Tx_n)→(x,y)，连续性给 Tx_n→Tx。极限唯一性使 y=Tx，所以极限仍在图像。度量空间中序列闭等价于闭：若外点属于闭包，可选距离小于 1/n 的集合内点，构成到该外点的序列。故 G(T) 闭。$\square$')
