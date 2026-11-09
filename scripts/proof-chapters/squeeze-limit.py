"""The squeeze theorem, with the oscillatory example written at epsilon scale."""
def register(P, BASES):
    P('squeeze-theorem-real','analysis/limits','实函数极限的夹逼定理',r'设f,g,h在a的某穿孔邻域有定义，且f(x)≤g(x)≤h(x)。若lim_(x→a)f(x)=lim_(x→a)h(x)=L为有限实数，则lim_(x→a)g(x)=L。','axiom-real','两侧函数同时进入L的ε邻域时，中间函数被包含在同一邻域。',
      r'任取ε>0。由f趋L，存在δ₁>0，使0<|x−a|<δ₁时L−ε<f(x)；由h趋L，存在δ₂>0，使同样条件下h(x)<L+ε。取δ=min(δ₁,δ₂)。',
      r'当0<|x−a|<δ时，L−ε<f(x)≤g(x)≤h(x)<L+ε。因此|g(x)−L|<ε。按ε—δ定义，这正是g在a趋于L。左右极限或单侧极限版本使用相同证明，只需把穿孔邻域换成相应侧邻域。$\square$')
    P('oscillatory-squeeze-example','analysis/limits','振荡因子乘消失因子的极限',r'令g(x)=x²sin(1/x)（x≠0），并令g(0)=0，则g在0连续且lim_(x→0)g(x)=0，尽管sin(1/x)在0附近无极限。','squeeze-theorem-real archimedean','正弦有界于单位区间，故乘以x²后绝对值被趋零的函数夹住。',
      r'对所有x≠0，|sin(1/x)|≤1，故−x²≤x²sin(1/x)≤x²。两端均趋零，夹逼定理给g(x)趋零；定义g(0)=0即为连续定义。',
      r'说明振荡项本身确无极限：取x_n=(π/2+2πn)⁻¹，则x_n→0而sin(1/x_n)=1；取y_n=(3π/2+2πn)⁻¹，则y_n→0而sin(1/y_n)=−1。若函数极限存在，任意趋零序列上的函数值都须趋同一极限，矛盾。$\square$')
