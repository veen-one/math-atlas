"""Elementary implication from almost-sure to in-probability convergence."""
def register(P, BASES):
    P('almost-sure-implies-in-probability','probability/convergence-in-probability probability/almost-sure-convergence','几乎必然收敛蕴含依概率收敛',r'在概率空间 (Ω,𝓕,P) 上，若实随机变量 X_n→X 几乎必然，则对每个 ε>0，有 P(|X_n−X|>ε)→0。','dominated-convergence axiom-measure','把偏差事件的指标函数用 1 控制，并对其应用控制收敛定理。',
      r'固定 ε>0，令 Y_n(ω)=1_{\{|X_n(ω)−X(ω)|>ε\}}。随机变量可测性保证该指标可测，且 0≤Y_n≤1。',
      r'在几乎每个 ω 处，X_n(ω)→X(ω)。按收敛定义，对此 ω 存在 N(ω)，使 n≥N(ω) 时 |X_n(ω)−X(ω)|≤ε，故 Y_n(ω)→0 几乎处处。',
      r'常数函数 1 在概率空间上可积且积分为 1。控制收敛定理遂给 E[Y_n]→0。指标函数积分等于事件概率，因此 E[Y_n]=P(|X_n−X|>ε)→0。ε 任意，正是依概率收敛定义。$\\square$')
