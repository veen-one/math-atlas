"""Weak hyperplane separation for arbitrary finite-dimensional convex sets."""
def register(P, BASES):
    P('convex-closure-interior','geometry/convex-sets','有限维凸集闭包的内部包含于原集',r'若 K⊆R^n 凸，则 int(closure K)⊆K。特别地，若 0∉K 却 0∈closure K，则 0 是 closure K 的边界点。','banach-neumann-series axiom-vector','围绕目标点取一个内部包含它的单纯形，再把顶点微扰到 K 内；正重心坐标在小扰动下保持正。',
      r'若 x∈int(closure K)，平移使 x=0。n=0 时结论直接成立；设 n≥1。取 ε>0，使顶点 v₀=−εΣ_(i=1)^ne_i、v_i=εe_i（1≤i≤n）都在 closure K 内部。它们仿射无关，且0的重心坐标全部为1/(n+1)。',
      r'把每个 v_i 的坐标末尾添1，得到可逆的 (n+1) 阶矩阵 V。因 v_i∈closure K，可取 k_i∈K 任意靠近 v_i。对应增广列矩阵 W 任意靠近 V；Neumann 小扰动逆公式给 W 可逆且 W⁻¹→V⁻¹。',
      r'因此解 Wλ=(0,…,0,1)ᵀ 的各坐标 λ_i 都可保证严格正，并满足 Σλ_i=1、Σλ_i k_i=0。凸性使0∈K，证明内部包含式。若0∈closure K但0∉K，由已证结论0不能是闭包内部点；闭集中的非内部点即边界点。$\square$')
    P('finite-dimensional-weak-separation','geometry/convex-sets applied/duality','有限维不交凸集的弱超平面分离',r'R^n 中任意不交非空凸集 C,D，存在非零 u 与实数 α，使对全部 c∈C、d∈D 有 〈u,d〉≤α≤〈u,c〉。这里不保证严格间隙；严格版本需要附加条件。','convex-closure-interior convex-projection finite-dimensional-compactness','对差集闭包，若原点在外则直接投影；若原点在边界，则用外点的最近点法向量取极限。',
      r'令 K=C−D，凸且0∉K，令 H=closure K，仍凸且闭。如果0∉H，投影 p=P_H0 非零，变分不等式给 〈p,z〉≥‖p‖²>0 对全部 z∈H，故取 u=p 有 〈u,c−d〉≥0。',
      r'若0∈H，前一引理使0为 H 的边界。取外点 y_j∉H 且 y_j→0，令 p_j=P_Hy_j、u_j=(p_j−y_j)/‖p_j−y_j‖。因0∈H，最小距离≤‖y_j‖，所以 ‖p_j‖≤2‖y_j‖→0。投影不等式给 〈u_j,z−p_j〉≥0 对全部 z∈H。',
      r'单位球面紧，取子列 u_j→u、‖u‖=1。对任意固定 z∈H 取极限，得 〈u,z〉≥0。该同一子列适用于每个固定 z，因此对全部 z 成立，特别对 z=c−d 有 〈u,c〉≥〈u,d〉。',
      r'两种情形都得到非零 u 及上述逐对不等式。固定 c₀∈C 给 sup_D〈u,d〉≤〈u,c₀〉，固定 d₀∈D 给 inf_C〈u,c〉≥〈u,d₀〉，因此两个界皆有限且 sup_D≤inf_C。任选二者之间 α，得到所列分离。n=0 时不存在不交非空凸集，定理没有待处理实例。$\square$')
