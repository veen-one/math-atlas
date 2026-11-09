"""Closed convex separation and Farkas alternatives in finite dimension."""
def register(P, BASES):
    P('compact-closed-strong-separation','geometry/convex-sets applied/duality','紧凸集与闭凸集的严格超平面分离',r'R^n 中不交非空凸集 C,D，若 C 紧而 D 闭，则存在非零 u 与 α<β，使全部 d∈D、c∈C 满足 〈u,d〉≤α<β≤〈u,c〉。特别地闭凸集与集外一点可严格分离。','convex-projection heine-borel-rn','对闭凸差集 C−D 求离原点最近的点，投影不等式给统一正间隙。',
      r'K=C−D 非空且凸。它闭：若 c_j−d_j→z，紧性使某子列 c_j→c∈C，则 d_j=c_j−(c_j−d_j)→c−z，D 闭使 c−z∈D，所以 z∈K。',
      r'因为 C,D 不交，0∉K。闭凸投影定理给 K 中离0最近点 u，且 u≠0。其变分不等式 〈−u,z−u〉≤0 对所有 z∈K 成立，故 〈u,z〉≥‖u‖²。代入 z=c−d 得 〈u,c〉−〈u,d〉≥‖u‖²>0。',
      r'令 β=min_(c∈C)〈u,c〉，紧性保证最小值存在。取达到最小值的 c，可得全部 d 满足 〈u,d〉≤β−‖u‖²。令 α=β−‖u‖²，则 α<β，得到严格分离。C 为单点时仍紧，给点与闭凸集的特例。$\square$')
    P('finitely-generated-cone-closed','geometry/convex-sets applied/linear-programming','有限生成凸锥是闭集',r'给定实向量 v₁,…,v_m，锥 K={Σ_i t_iv_i:t_i≥0} 为闭凸集。','basis-extension finite-norm-equivalence','把每个锥表示约成线性无关支持；有限个支持中取固定一组，系数由连续线性逆恢复。',
      r'凸性与锥性由非负系数直接验证。每个 z∈K 可取线性无关正支持的表示：若当前正系数支持的 v_i 相关，取非零关系 Σs_iv_i=0，变号使某 s_i>0，令 λ=min_(s_i>0)t_i/s_i。把系数改为 t_i−λs_i，不改向量，所有系数仍非负，且至少一个正系数变零。有限次重复后支持无关。',
      r'设 z_j∈K 且 z_j→z。所有可能支持有限，取一个无限子列使上述无关支持 S 固定；若所取子列的支持为空则极限为0，直接在K。固定支持的列矩阵 V_S 满列秩，Gram 矩阵 V_SᵀV_S 正定可逆，因为 tᵀV_SᵀV_St=‖V_St‖²>0 对 t≠0。',
      r'相应非负系数为 t_j=(V_SᵀV_S)⁻¹V_Sᵀz_j，连续性使它趋于 t≥0。于是 z=V_St∈K，证明序列闭；有限维度量空间中序列闭等价闭，故 K 闭。$\square$')
    P('farkas-alternative','applied/linear-programming applied/duality geometry/convex-sets','Farkas 引理的等式—非负锥形式',r'对实矩阵 A 与向量 b，下列恰有一个成立：(1) 存在 x≥0 使 Ax=b；(2) 存在 y 使 Aᵀy≥0 且 bᵀy<0。','finitely-generated-cone-closed convex-projection','若目标点不在列锥内，对它到该闭凸锥的投影残差取负，即得不可行性证书。',
      r'令 K 为 A 各列生成的非负锥，已证闭凸。若 b∈K，第一式成立；此时对任何 Aᵀy≥0，有 bᵀy=xᵀAᵀy≥0，所以第二式不可能成立。',
      r'若 b∉K，取 p=P_Kb，令 v=b−p≠0。投影变分不等式给 〈v,c−p〉≤0 对全部 c∈K。由于0与2p都在K，分别代入得 〈v,p〉≥0 与 ≤0，因此 〈v,p〉=0，遂 〈v,c〉≤0 对全部 c∈K。',
      r'令 y=−v，A 的每列都在K，故 Aᵀy≥0；同时 bᵀy=−〈p+v,v〉=−‖v‖²<0，第二式成立。两种情况穷尽且互斥，得到替代定理。$\square$')
