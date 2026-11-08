"""Compact-uniform holomorphic limits and the locally bounded Montel theorem."""
def register(P, BASES):
    P('holomorphic-compact-limit','analysis/function-sequences analysis/holomorphic-functions','紧集上一致极限保持全纯及各阶导数收敛',r'Ω 内全纯函数列 f_n 若在每个紧子集上一致收敛至 f，则 f 全纯，且各阶导数 f_n^(k) 在每个紧子集上一致收敛至 f^(k)。','cauchy-square-formula holomorphic-taylor contour-estimate uniform-continuous-limit','固定一个稍大的方形围道，极限可移入积分；核的差商再给可微性与导数估计。',
      r'固定 a∈Ω，取以 a 为中心、闭区域包含在 Ω 中的轴平行方形 Q。f_n 在闭 Q 一致收敛，极限 f 连续。对内部 z，Cauchy 方形公式给 f_n(z)=(2πi)⁻¹∫∂Q f_n(w)/(w−z)dw。长度估计让 n→∞ 时积分误差趋零，得到 f 的同一公式。',
      r'在离边界正距离的内部小邻域中，核差商 [1/(w−z−h)−1/(w−z)]/h=1/[(w−z−h)(w−z)] 一致趋于 1/(w−z)²，因分母有统一正下界。因此积分差商可传入极限，给 f′ 的围道公式。反复对核求导，同样的分母界给全部 k 阶公式 f^(k)(z)=k!/(2πi)∫∂Q f(w)/(w−z)^(k+1)dw。',
      r'对位于 Q 内且到边界距离至少 d>0 的紧集，导数差上界为 k!·length(∂Q)/(2πd^(k+1))·max∂Q|f_n−f|，故一致趋零。任意紧 K⊂Ω，可对每点取大方形及内部小方形，有限个内部小方形覆盖 K，分别用该界再取有限最大，得到 K 上导数一致收敛。$\square$')
    P('montel-locally-bounded','analysis/function-sequences analysis/conformal-maps','Montel 定理（局部一致有界全纯族）',r'开集 Ω 上全纯函数列 f_n 若对每个紧集 K⊂Ω 存在 M_K<∞ 使所有 n 都满足 sup_K|f_n|≤M_K，则有子列在 Ω 的每个紧子集上一致收敛到全纯函数。','holomorphic-compact-limit holomorphic-taylor contour-estimate bolzano-weierstrass compact-interval heine-borel-rn axiom-dependent-choice','局部 Cauchy 估计给等度连续；在可数稠密集上对角取子列，再用有限网格升级为紧集上一致收敛。',
      r'对任意紧 K⊂Ω，取 η>0，使 K 的闭 3η 邻域 L 有界且包含在 Ω 内；K 到闭补集有正距离保证可取，Ω=C 时任取小 η。L 紧，所有 |f_n|≤M_L。K 的闭 η 邻域中每点可放一个到边距离 η/2 的方形，其闭区域仍在 L。Cauchy 一阶系数估计给所有这些点 |f_n′|≤8M_L/(πη)。',
      r'因此若 x,y 距 K 足够近，且 |x−y|<η/2，连接线段全在上述邻域，原函数端点公式给 |f_n(x)−f_n(y)|≤C_K|x−y|，常数不依赖 n。这给 K 附近的统一等度连续性。',
      r'取 D=Ω∩(Q+iQ)，它可数且在 Ω 稠密。逐点局部有界使 f_n(d) 在复平面有收敛子列。依次对 D 的枚举抽取嵌套子列，第 j 个最终下标取第 j 层子列的足够后项，得到严格递增的对角子列，在 D 每点收敛。若 Ω 空结论直接成立。',
      r'固定紧 K 及 ε>0，用第一、二步选 δ>0，使距 K 的 δ 邻域中两个相距≤2δ 的点的函数值差小于 ε/3，统一适用于该子列。由 D 稠密及 K 紧，选有限个 D 中点 d₁,…,d_m，其 δ 球覆盖 K，且都在该邻域。D 点处收敛使充分后的两个子列项在每个 d_i 的值差小于 ε/3。对 x∈K 选邻近 d_i，三角不等式给这两个函数在 x 处值差小于 ε。',
      r'故子列在任意紧 K 上一致柯西。复数完备性给每点极限，同一估计令一个下标趋∞，得到紧集上一致收敛。单点紧集保证各 K 的极限彼此相容，定义全域函数 f。紧集上一致极限定理使 f 全纯。这个子列对所有紧集同时有效，因为对角化先在固定稠密集 D 上进行。$\square$')
