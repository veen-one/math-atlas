"""Finite group averaging, character orthogonality and real-field limitations."""
def register(P, BASES):
    P('burnside-orbit-count','algebra/group-actions','Burnside 轨道计数引理',r'有限群 G 作用在有限集 X 上时，轨道数为 |G|⁻¹Σ_(g∈G)|Fix(g)|。正方形顶点的两色染色按旋转等价恰有六类。','orbit-stabilizer axiom-finite','从群元素与被其固定的点两种方向数同一对集合。',
      r'令 S={(g,x)∈G×X:gx=x}。先固定 g，得 |S|=Σ_g|Fix(g)|；先固定 x，得 |S|=Σ_x|G_x|。',
      r'每个轨道 O 的稳定子阶为 |G|/|O|，所以该轨道对后一和的贡献为 |O|·|G|/|O|=|G|。对全部轨道相加，得到 |S|=轨道数·|G|，除以 |G| 即得公式。',
      r'正方形四顶点两色染色共有16种，恒等旋转固定16种；90度和270度旋转各只有单色的2种；180度旋转要求对顶点同色，固定4种。轨道数=(16+2+4+2)/4=6。$\square$')
    P('finite-representation-unitary','algebra/group-representations algebra/characters','有限群复表示可选不变正定内积',r'有限群的有限维复表示 V 上存在 G 不变的正定 Hermitian 内积，故可选基使全部表示矩阵酉；其特征标满足 χ(g⁻¹)=overline(χ(g))。','gram-schmidt character-class-function','把任意坐标内积对群平均。',
      r'固定一组基，用坐标内积 〈·,·〉₀ 定义 〈v,w〉=|G|⁻¹Σ_g〈ρ(g)v,ρ(g)w〉₀。有限和保留第一变量线性与共轭对称性；v≠0 时每个 ρ(g)v 都非零，故平方长度平均严格正。',
      r'对 h∈G，右乘 h 只是重排 g，故 〈ρ(h)v,ρ(h)w〉=〈v,w〉。Gram–Schmidt 给此内积下标准正交基，矩阵满足 ρ(h)*ρ(h)=I，即为酉矩阵。',
      r'因此 ρ(g⁻¹)=ρ(g)⁻¹=ρ(g)*，其迹是 ρ(g) 迹的共轭，得到特征标公式。迹不依赖换基，结论对原表示也成立。$\square$')
    P('finite-character-orthogonality','algebra/characters algebra/irreducible-representations','有限群复不可约特征标的正交性',r'有限群 G 的有限维复表示 V,W 满足 |G|⁻¹Σ_g overline(χ_V(g))χ_W(g)=dim_C Hom_G(V,W)。若 V,W 不可约，右侧在同构时为1、不同构时为0。','finite-representation-unitary complex-eigenvalue schur-lemma rank-nullity','在全部线性映射空间上平均共轭作用，所得投影的迹既是像维数，也是特征标乘积平均。',
      r'在 L=Hom_C(V,W) 上定义 A_g(S)=ρ_W(g)Sρ_V(g)⁻¹，P=|G|⁻¹Σ_gA_g。群乘法给 A_hP=P，因此 P 的像属于全部不变向量；不变向量恰是 Hom_G(V,W)，且在其上 P 为恒等。因此 P²=P、im P=Hom_G(V,W)。',
      r'任一幂等线性映射的空间为 im P⊕ker P：S=PS+(S−PS)，交为零。在适应此分解的基下矩阵为 diag(I,0)，所以 tr P=dim im P。',
      r'对矩阵映射 S↦BSC，取矩阵单位 E_ij 为基，其在 E_ij 坐标上的系数为 B_ii C_jj，故该线性映射的迹为 Σ_ijB_ii C_jj=tr B·tr C。于是 tr A_g=χ_W(g)χ_V(g⁻¹)=χ_W(g)overline(χ_V(g))。平均并用前步即得等式。',
      r'若 V,W 不可约且不同构，Schur 引理给 Hom_G(V,W)=0。若同构，固定一个同构 U，则每个等变 S 的 U⁻¹S 是 V 的等变自同态；复有限维 Schur 标量结论使它为 λI，故 S=λU，Hom 空间维数一。$\square$')
    P('character-multiplicity','algebra/characters algebra/invariant-subspaces','特征标唯一确定复有限群表示及分解重数',r'有限群的有限维复表示 V 中，不可约表示 W 的重数为 〈χ_W,χ_V〉=|G|⁻¹Σ_g overline(χ_W(g))χ_V(g)。因此两个此类表示同构，当且仅当特征标相同。','maschke finite-character-orthogonality character-class-function','用完全可约分解展开特征标，正交性提取每个不可约成分的整数系数。',
      r'Maschke 定理给 V 为有限多个不可约表示的直和。将同构成分合并为 V≅⊕_j W_j^(⊕m_j)，其中 W_j 两两不同构、m_j 为非负整数。直和特征标可加，故 χ_V=Σ_jm_jχ_(W_j)。',
      r'与任意不可约 χ_W 作特征标内积，正交性使同构成分贡献 m_j，其他项贡献零；若 W 未出现则重数零。这既给重数公式，也说明它与所选完全可约分解无关。',
      r'若两表示特征标相同，取两者分解中全部不可约同构类的有限并，公式使每个类的重数相同，逐块同构给整体同构。反向同构表示逐群元矩阵相似，迹相同，所以特征标相同。$\square$')
    P('real-schur-counterexample','algebra/irreducible-representations','实不可约表示的等变自同态未必为实标量',r'C₃ 在 R² 上的120度旋转表示不可约，却存在非标量实等变自同态；所以 Schur 标量结论不能无条件从复数域搬到实数域。','axiom-vector','显式旋转矩阵的特征多项式无实根，排除不变实直线；90度旋转与它交换。',
      r'令 R=[[-1/2,−√3/2],[√3/2,−1/2]]。直接矩阵相乘给 R³=I，故它定义 C₃ 的实二维表示。其特征多项式 t²+t+1=(t+1/2)²+3/4 对实 t 严格正。',
      r'若存在一维实不变子空间，取非零 v，必有 Rv=tv、t∈R，违背该矩阵无实特征值。二维空间的非平凡真子空间只能一维，所以此表示不可约。',
      r'令 J=[[0,−1],[1,0]]。直接相乘可见 JR=RJ，因此 J 为等变自同态；J 的非对角元素非零，不能是实标量矩阵。它可逆，仍符合 Schur 引理的“非零等变映射为同构”结论。$\square$')
