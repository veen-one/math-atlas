"""Compact self-adjoint spectral decomposition, without separability assumptions."""
def register(P, BASES):
    BASES['def-compact-self-adjoint']=dict(title='紧自伴算子与内积约定',statement='H 为实或复 Hilbert 空间，内积在第一变量线性。自伴算子 T 在本章指处处定义的有界线性算子，满足 〈Tx,y〉=〈x,Ty〉。紧指对任意有界序列 x_n，Tx_n 有范数收敛子列。算子范数为单位球上 ‖Tx‖ 的上确界；不包含无界算子的定义域问题。')
    P('hilbert-orthonormal-basis','analysis/hilbert-spaces','任意 Hilbert 空间的标准正交基与 Parseval 展开',r'每个实或复 Hilbert 空间都有标准正交基 E。对每个 x，非零系数 〈x,e〉至多可数，x=Σ_(e∈E)〈x,e〉e 在范数下成立，且 ‖x‖²=Σ|〈x,e〉|²。','complex-cauchy-schwarz cauchy-schwarz def-complete axiom-zorn','有限正交投影给 Bessel 界，再对极大正交族的残差使用极大性。',
      r'对有限标准正交集 F，令 s_F=Σ_(e∈F)〈x,e〉e。直接展开得 x−s_F 与每个 e∈F 正交，且 ‖x‖²=‖x−s_F‖²+Σ_(e∈F)|〈x,e〉|²，特别有限系数平方和≤‖x‖²。',
      r'标准正交族按包含排序。任一链的并仍标准正交，因为任意两个向量同属链中的某个成员。空集是初始成员，Zorn 给极大标准正交族 E；H={0} 时可取空基。',
      r'对每个正整数 k，满足 |〈x,e〉|≥1/k 的 e 只有有限个，否则有限投影界被任意多个至少 1/k² 的项违反。因此非零系数集合是可数个有限集的并，至多可数。枚举为 e₁,e₂,…；系数平方级数非负有界而收敛。对应向量部分和 s_n 的尾差范数平方恰为系数平方尾和，故柯西并在 H 中收敛为 s。有限情形直接取有限和。',
      r'对每个 e∈E，内积连续性给 〈x−s,e〉=0。若残差 r=x−s 非零，则 r/‖r‖ 可添入 E，与极大性矛盾。因此 x=s。把有限投影恒等式取极限得 Parseval。任意有限截断的尾部也由相同平方和控制，故所得和不依赖枚举次序。$\square$')
    P('self-adjoint-rayleigh-norm','analysis/spectral-theory analysis/linear-operators','自伴算子的范数等于绝对 Rayleigh 商上确界',r'若 T 为 H 上有界自伴算子，则 〈Tx,x〉实值，且 ‖T‖=sup_(‖x‖=1)|〈Tx,x〉|（零空间中两边约定为零）。','def-compact-self-adjoint complex-cauchy-schwarz cauchy-schwarz','用 x+y 与 x−y 的二次型差控制任意矩阵元，再对 Tx 的方向取上确界。',
      r'自伴性及内积共轭对称性给 〈Tx,x〉=overline(〈Tx,x〉)，所以实值。记 m 为所列上确界，Cauchy–Schwarz 给 m≤‖T‖。齐次性又给对任意 z，|〈Tz,z〉|≤m‖z‖²。',
      r'令 q(z)=〈Tz,z〉。展开并利用自伴性得 q(x+y)−q(x−y)=4Re〈Tx,y〉。若 x,y 都是单位向量，右侧实部绝对值≤m(‖x+y‖²+‖x−y‖²)/4=m；最后的平行四边形恒等式由内积展开直接得到。',
      r'复情形以适当单位复数倍的 y 代替 y，可使 〈Tx,y〉为非负实数，因此 |〈Tx,y〉|≤m；实情形改变 y 的符号即可。Tx≠0 时取 y=Tx/‖Tx‖，得 ‖Tx‖≤m 对单位 x 成立；Tx=0 时也成立。取上确界得到 ‖T‖≤m，与前一步合并为等式。$\square$')
    P('compact-self-adjoint-extremal','analysis/spectral-theory','非零紧自伴算子取得极端特征值',r'非零紧自伴算子 T 存在单位特征向量 e 与实特征值 λ，使 Te=λe 且 |λ|=‖T‖。','self-adjoint-rayleigh-norm def-compact-self-adjoint def-complete','取逼近极端 Rayleigh 商的单位向量；残差趋零，紧性把近似特征向量变成真正特征向量。',
      r'设 m=‖T‖>0。范数公式给单位向量 x_n，使 |〈Tx_n,x_n〉|→m。取符号相同的子列，可令 〈Tx_n,x_n〉→λ，其中 λ=m 或 −m。若其中某一符号只出现有限次就取另一符号；两者都无限时任选一侧。',
      r'因 λ 实且 |λ|=m，展开残差平方得 ‖Tx_n−λx_n‖²=‖Tx_n‖²−2λ〈Tx_n,x_n〉+λ²≤m²−2λ〈Tx_n,x_n〉+m²→0。',
      r'紧性使某子列 Tx_n→y。于是 λx_n=Tx_n−(Tx_n−λx_n)→y，所以 x_n→e=y/λ，且 ‖e‖=1。连续性给 Te=λe，所求特征向量存在。$\square$')
    P('compact-eigenvalue-finiteness','analysis/spectral-theory','紧自伴算子的非零特征空间有限维及特征值聚集限制',r'紧自伴算子的特征值均实，异特征值的特征向量正交；每个非零特征值的特征空间有限维。对每个 ε>0，绝对值≥ε 的特征向量最多能组成有限标准正交族。','def-compact-self-adjoint gram-schmidt complex-cauchy-schwarz','无穷正交族的像若保持正距离，就违反紧性。',
      r'若 Tx=λx、x≠0，则 λ=〈Tx,x〉/‖x‖² 为实数。若 Ty=μy，则 λ〈x,y〉=〈Tx,y〉=〈x,Ty〉=μ〈x,y〉，所以 λ≠μ 时正交。',
      r'若存在无限标准正交特征向量 e_n，且对应 |λ_n|≥ε，则对 n≠m，‖Te_n−Te_m‖²=|λ_n|²+|λ_m|²≥2ε²。这列像没有柯西子列，更没有收敛子列，与紧性矛盾。',
      r'若一个非零特征空间无限维，可递归选不在前面有限张成空间中的向量并作 Gram–Schmidt，得到其中无限标准正交列，取 ε=|λ| 即产生矛盾。若有无限多个绝对值≥ε 的不同特征值，则各取单位特征向量，由第一步正交，同样矛盾。因此这类特征值连重数计也仅有限个。$\square$')
    P('compact-self-adjoint-spectral','analysis/spectral-theory analysis/hilbert-spaces','任意 Hilbert 空间的紧自伴谱分解',r'紧自伴算子 T 的非零谱方向可列为有限或可数标准正交特征向量 e_n，Te_n=λ_ne_n、λ_n实且非零，无穷情形 λ_n→0。H 是 ker T 与这些向量闭张成空间的正交直和，且 Tx=Σ_n λ_n〈x,e_n〉e_n。级数的有限秩截断在算子范数下收敛。补上 ker T 的标准正交基便得到整个 H 的特征向量基。','compact-self-adjoint-extremal compact-eigenvalue-finiteness hilbert-orthonormal-basis def-compact-self-adjoint','每次在已有特征向量的正交补上选最大模特征值；紧性迫使剩余算子范数趋零。',
      r'若 T=0，ker T=H，结论直接成立。否则取极端特征向量 e₁。其正交补 H₁ 闭，因内积连续；它在 T 下不变，因为 x⊥e₁ 时 〈Tx,e₁〉=〈x,Te₁〉=0。闭子空间继承完备性。限制 T|H₁ 仍自伴且紧：有界序列像的收敛子列极限由 H₁ 闭性仍在其中。',
      r'递归：令 H_n={e₁,…,e_n}^⊥。若 T|H_n=0 就停止；否则在该空间取极端单位特征向量 e_(n+1)，其 |λ_(n+1)|=‖T|H_n‖。得到标准正交特征列，且特征值模非增。无穷情形由前引理，任何 ε>0 以上仅有限个，故 λ_n→0。',
      r'对任意 x，有限投影 S_nx=Σ_(j≤n)〈x,e_j〉e_j。Bessel 界使 S_nx 柯西并收敛到 s；r=x−s 与每个 e_j 正交。若过程有限停止，r 属于最后 H_n，故 Tr=0；若无穷，则 r∈H_n 对每个 n，因此 ‖Tr‖≤|λ_(n+1)|‖r‖→0，也有 Tr=0。',
      r'反向若 x∈ker T，则 λ_j〈x,e_j〉=〈x,Te_j〉=〈Tx,e_j〉=0，λ_j≠0 使 x 与全部 e_j 正交。因此 ker T 恰为这些向量闭张成空间的正交补，前一步给每个 x 的直和分解；交集为零由向量与自身正交即为零得到。',
      r'T 连续使 Tx=Ts=lim_nΣ_(j≤n)λ_j〈x,e_j〉e_j。更强地，对有限秩 T_nx=Σ_(j≤n)λ_j〈x,e_j〉e_j，有 (T−T_n)x=T(x−S_nx)，而 x−S_nx∈H_n、‖x−S_nx‖≤‖x‖，故 ‖T−T_n‖≤‖T|H_n‖=|λ_(n+1)|→0；有限停止时余项为零。',
      r'核为闭 Hilbert 子空间，按已证正交基存在定理取其标准正交基，其每个向量是零特征值向量。与 e_n 合并后，由直和分解在 H 中完备，构成全空间特征向量基。该核可以不可分；每个向量仍至多有可数个非零展开系数。$\square$')
