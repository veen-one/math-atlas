"""Jordan form and finitely generated abelian groups from PID modules."""
def register(P, BASES):
    P('complex-jordan-form','algebra/modules algebra/eigenvalues algebra/linear-maps','复有限维算子的 Jordan 标准形',r'每个有限维复向量空间上的线性算子 T 都有由 Jordan 块 J_e(λ) 构成的分块对角矩阵。各特征值及对应块大小多重集唯一，不计块排列。','pid-module-decomposition pid-invariant-factors-unique pid-factorization-crt fundamental-algebra','令多项式变量作用为 T，将有限维空间看成 C[t] 的扭模；每个 (t−λ) 幂次循环模给一条 Jordan 链。',
      r'C[t] 是 PID：非零理想中取最低次数首一多项式，除法余数若非零会违反最低次数，所以它生成理想。给 V 定义 C[t] 作用 p(t)v=p(T)v。任意一组有限 C 基也生成该模。若 dim_CV=n>0，算子空间维数n²，所以 I,T,…,T^(n²) 线性相关，存在非零p使p(T)=0。因此整个模为扭模。零维情形为空分块，直接成立。',
      r'PID结构定理及代数基本定理把模分解成有限个 C[t]/((t−λ)^e) 的直和：先分解为非零不变因子循环商，再将每个多项式分成线性因子幂，对互素因子使用中国剩余分解。不存在自由 C[t] 因子，因为整个V被非零p湮灭，而自由因子不能如此。',
      r'在一个块 C[t]/((t−λ)^e) 中，以 (t−λ)^(e−1),…,(t−λ),1 为有序 C 基。多项式除法证明这些e个类张成且无关。乘以t等于乘λ再乘恒等加上乘(t−λ)，故第一个基向量映为λ倍自身，其余第j个映为λ倍自身加第j−1个。矩阵正是对角λ、上副对角1的Jordan块。拼接各块基即得存在性。',
      r'改变V的C基所给的算子相似，等价于上述 C[t]-模同构，因为交换T正好等价于交换所有多项式作用。PID扭模的素幂分量重数唯一，且 C[t] 不可约首一因子恰为t−λ，所以各λ及指数e多重集唯一，给Jordan块唯一性。$\square$')
    P('finitely-generated-abelian-classification','algebra/modules algebra/finite-groups algebra/homology-groups','有限生成阿贝尔群分类',r'每个有限生成阿贝尔群 G 唯一同构于 Z^s⊕Z/d₁Z⊕…⊕Z/d_rZ，其中2≤d₁|…|d_r。若G有限，则s=0且|G|=∏d_i。','pid-module-decomposition pid-invariant-factors-unique','整数乘法由重复群加法定义，把阿贝尔群视为Z模。',
      r'给阿贝尔群G定义整数数乘：非负整数为重复加法，负整数先取逆。交换律与结合律验证Z模公理；反向Z模的加法群阿贝尔。群同态恰是Z模同态，因为它保持重复加法与逆。因此两类对象的有限生成与同构一致。',
      r'Z是PID：非零理想取最小正整数d，对任意元素除以d，余数仍在理想中且小于d，只能零，故理想为dZ。PID有限生成模结构及唯一性给G的直和分解。将不变因子乘单位±1改成正数，删除单位1因子，便有2≤d₁|…|d_r，且各数及自由秩唯一。',
      r'若s>0，直和含无限循环子群，群无限；若s=0，各循环因子有限，其直积基数为∏d_i。因此有限群情形恰是s=0，阶数公式成立，空积对应平凡群。$\square$')
