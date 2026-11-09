"""Extreme value theorem from compactness and the least-upper-bound property."""
def register(P, BASES):
    P('extreme-value-compact','geometry/compactness analysis/continuity-uniform','紧致空间上连续实函数的极值定理',r'设 K 是非空紧致拓扑空间，f:K→R 连续。则 f 在 K 上有界，并存在 x_min,x_max∈K 使 f(x_min)=min_(x∈K)f(x)、f(x_max)=max_(x∈K)f(x)。','axiom-topology axiom-real compact-hausdorff-closed','连续像保持紧致；实数中的紧集有界且闭，故其上确界与下确界都属于像集。',
      r'令 A=f(K)。取 A 的任意开覆盖 {V_i}，其中 V_i 是 R 中开集。连续性说明每个 f^(−1)(V_i) 在 K 中开；这些原像覆盖 K。由 K 紧致，存在有限下标 i_1,…,i_m 使 K⊆∪_(j=1)^m f^(−1)(V_(i_j))。施加 f 后 A⊆∪_(j=1)^m V_(i_j)，故 A 紧致。由于 K 非空，A 非空。',
      r'对每个正整数 n，区间 (−n,n) 开，并且这些区间覆盖 R，因而覆盖 A。A 的紧致性给有限子覆盖；取其中最大的整数 N，利用区间套叠得 A⊆(−N,N)，所以 A 有界。实数 R 是 Hausdorff 空间，紧致 Hausdorff 定理说明 A 闭。',
      r'由实数上确界公理令 M=sup A。对每个正整数 n，M−1/n 不是 A 的上界，故可取 a_n∈A 满足 M−1/n<a_n≤M；于是 |a_n−M|<1/n，a_n→M。A 闭故 M∈A。类似令 m=inf A，并取 b_n∈A 满足 m≤b_n<m+1/n，得到 b_n→m，故 m∈A。',
      r'因 A=f(K)，存在 x_max,x_min∈K 使 f(x_max)=M、f(x_min)=m。M 是所有像值的上界、m 是所有像值的下界，故二者分别为最大值与最小值。$\\square$')
