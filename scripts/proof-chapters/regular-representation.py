"""Completeness of finite characters from the regular representation."""
def register(P, BASES):
    P('regular-representation-multiplicities','algebra/group-representations algebra/characters algebra/irreducible-representations','正则表示的分解与维数平方和',r'有限群G的复正则表示C[G]包含每种不可约复表示V，其重数恰为dim V。因此不可约表示同构类只有有限个，若维数为d₁,…,d_r，则Σ_i d_i²=|G|。','maschke finite-character-orthogonality character-multiplicity','正则表示在群元素基上置换，其特征标除单位元外全为零。',
      r'C[G]以e_g（g∈G）为基，左作用L_h e_g=e_(hg)。若h≠1，没有基向量被固定，所以该置换矩阵对角线全零，χ_reg(h)=0；单位元矩阵为I，故χ_reg(1)=|G|。',
      r'Maschke定理将正则表示分成有限个不可约直和。对任意不可约V，特征标正交公式给 dim Hom_G(V,C[G])=|G|⁻¹Σ_g overline(χ_V(g))χ_reg(g)=dim V>0。因此每个不可约V都与这个有限分解中的某项同构，否则对所有项的Hom都为零。',
      r'同一公式及重数定理给V的出现次数为dim V。对分解两侧取维数，得到|G|=Σ_i(dim V_i)²。这里不预先假定已列出所有不可约表示，正则表示本身证明了有限性和穷尽性。$\square$')
    P('irreducible-characters-class-basis','algebra/characters algebra/irreducible-representations','不可约特征标构成全部类函数的正交基',r'有限群G上的复类函数空间，以⟨f,h⟩=|G|⁻¹Σ_g overline(f(g))h(g)为内积，其不可约特征标构成正交归一基。特别地，不可约表示同构类数等于共轭类数。','regular-representation-multiplicities finite-character-orthogonality complex-eigenvalue','群代数中心按共轭类求系数，而每个中心元在不可约表示上仅作用为标量；正则表示使该标量列表能区分中心元。',
      r'设共轭类数为k，不可约表示数为r。类函数在每个共轭类上取一个自由复值，故空间维数k；不可约特征标正交归一使它们线性无关，所以r≤k。',
      r'考察群代数中心Z(C[G])。若z=Σ_g a_g g，条件hz=zh等价hzh⁻¹=z，所以系数在每个共轭类上相同。各共轭类元素和构成中心一组基，故中心维数k。每个不可约表示ρ_i延伸为群代数的线性表示；中心元z的作用与ρ_i(G)可交换，复Schur结论给ρ_i(z)=c_i(z)I。',
      r'映射z↦(c₁(z),…,c_r(z))从中心线性映入C^r。它单射：若全部c_i为零，则z在每个不可约表示上作用零，正则表示分解保证它在整个C[G]左乘作用零。但左乘单位基向量e_1得到z本身，故z=0。于是k≤r。结合两界得r=k，k个正交归一特征标遂为k维类函数空间的基。',
      r'因此任意类函数f有有限展开 f=Σ_i⟨χ_i,f⟩χ_i。若f是某有限维表示的特征标，这些系数由前面的重数公式是非负整数；一般类函数的系数没有非负整数限制。$\square$')
    P('complex-group-algebra-matrix-blocks','algebra/group-representations algebra/characters','有限群复群代数的矩阵分块同构',r'取有限群G的全部互不同构不可约复表示ρ_i:G→GL(V_i)。则映射Φ:C[G]→⊕_i End_C(V_i)，Σ_g a_g g↦(Σ_g a_gρ_i(g))_i，为含单位复代数同构。','regular-representation-multiplicities rank-nullity','正则表示证明核为零，维数平方和保证目标空间没有遗漏。',
      r'各ρ_i按线性延伸为群代数表示。由ρ_i(gh)=ρ_i(g)ρ_i(h)，将有限双重求和展开可验证Φ保持乘法，亦保持加法、复数倍和单位，因此是含单位代数同态。',
      r'若Φ(a)=0，则a在每个不可约表示上作用零。由正则表示的不可约分解，它在正则表示上左乘为零；作用于单位元素1得a=0，故Φ单射。',
      r'源维数为|G|，目标维数为Σ_i(dim V_i)²，正则表示维数平方和使它也等于|G|。有限维秩—零度公式于是给Φ满射，完成同构。此证明针对复有限群代数，不把结论直接推广到特征整除群阶的情形。$\square$')
