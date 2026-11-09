"""Convergence of the bisection method with an explicit interval error."""
def register(P, BASES):
    P('bisection-root-convergence','analysis/completeness-reals analysis/limits applied/numerical-integration','二分法求根的收敛与误差界',r'设 f:[a_0,b_0]→R 连续，a_0<b_0，且 f(a_0)<0<f(b_0)。每一步取中点；若中点为根则停止，否则保留端点函数值异号的一半。若过程不提前停止，所得嵌套区间 [a_n,b_n] 长度为 (b_0−a_0)2^(−n)，其唯一公共点 ξ 满足 f(ξ)=0；任取区间中点 m_n 都有 |m_n−ξ|≤(b_0−a_0)2^(−n−1)。','nested-intervals','每步保留异号括区间，区间长度几何减半；完备性给交点，连续性使交点成为零点。',
      r'先设算法未提前终止。归纳构造 [a_n,b_n]：已知 f(a_n)<0<f(b_n)，令 m_n=(a_n+b_n)/2。若 f(m_n)=0，算法已找到根；否则 f(m_n)<0 时取 [a_(n+1),b_(n+1)]=[m_n,b_n]，而 f(m_n)>0 时取 [a_n,m_n]。两种情形都保持端点严格异号且区间包含于前一区间。',
      r'每步区间长度减半，故 b_n−a_n=(b_0−a_0)2^(−n)→0。闭区间套定理给唯一 ξ∈∩_n[a_n,b_n]；端点与中点都距 ξ 不超过区间长度，因此 a_n→ξ、b_n→ξ、m_n→ξ。',
      r'构造保持 f(a_n)<0<f(b_n)。由 f 在 ξ 连续，f(a_n)→f(ξ) 且 f(b_n)→f(ξ)。前一列全负给 f(ξ)≤0，后一列全正给 f(ξ)≥0，所以 f(ξ)=0。由 ξ,m_n∈[a_n,b_n]，有 |m_n−ξ|≤b_n−a_n；更精确地，ξ 与中点间最大距离是半个区间长，故 |m_n−ξ|≤(b_n−a_n)/2=(b_0−a_0)2^(−n−1)。若某步中点恰为根，则其后误差为零，结论同样成立。$\\square$')
