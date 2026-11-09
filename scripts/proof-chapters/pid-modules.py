"""Submodules, Smith reduction and the existence of PID module decompositions."""
def register(P, BASES):
    BASES['def-pid']=dict(title='主理想整环与矩阵等价',statement='PID 指每个理想都由单个元素生成的含幺交换整环，允许它本身为域。矩阵等价指左右分别乘可逆矩阵，改变映射源与目标的基。元素 a,b 的最大公因子 g 指 (a,b)=(g)，于是 g=ua+vb，且 a/g、b/g 属于环；最大公因子与分解因子均只在相差单位元意义下唯一。')
    P('pid-submodule-free','algebra/modules algebra/basis-dimension','有限秩自由模的子模在 PID 上自由',r'PID R 上 R^n 的每个子模 N 都为有限生成自由模，秩至多 n。','def-pid axiom-natural','投影到首坐标得到主理想，选一个提升后把剩余部分归到低一维。',
      r'对 n 归纳，n=0 时 N=0。设 π 为首坐标投影，π(N) 为理想，写成 (a)。若 a=0，N 是末 n−1 坐标自由模的子模，直接用归纳假设。',
      r'若 a≠0，选 v∈N 使 π(v)=a。任意 w∈N 的首坐标为 ra，故 w−rv∈K=N∩kerπ。于是 N=Rv+K。若 rv∈K，首坐标 ra=0，整环且a≠0使r=0，故该和为直和，Rv≅R。',
      r'K 是 R^(n−1) 的子模，归纳给自由基长度至多n−1。添入v得到 N 的有限自由基，长度至多n。$\square$')
    P('smith-normal-form-pid','algebra/modules algebra/linear-maps','PID 上的 Smith 标准形',r'PID 上任意有限矩阵 A 通过可逆行列变换化为 diag(d₁,…,d_r,0,…)，其中各 d_i≠0 且 d₁|d₂|…|d_r。','def-pid noetherian-equivalence','不断用 Bezout 变换缩小不整除的主元；主元理想严格上升不能无穷持续。',
      r'若矩阵为零即完成。否则交换行列把非零 a 放在左上角。若同列某项 b 不被a整除，取g=gcd(a,b)、ua+vb=g，作用在这两行的2×2矩阵 [[u,v],[−b/g,a/g]] 行列式为1，把该列两项变成g与0。g不与a相伴，否则a会整除b；因此主元理想(a)严格包含于(g)。同一操作可用于同行两列。',
      r'若第一列或第一行的某项被主元整除，用减去倍数清为零。这些是可逆变换。只要主元不变，有限个位置即可清完行列；若出现不整除项，就用前步使主元理想严格上升。PID 的每个理想有限生成，故诺特升链条件排除无限次严格上升。',
      r'清完第一行列后矩阵为 diag(a,B)。若B有项b不被a整除，将含b的行加到第一行，使第一行出现该b，同时首列主元仍为a；再用列Bezout操作严格增大主元理想，重做清除。升链条件也排除此步骤无限重复。最终得到 diag(a,B)，且a整除B全部元素。',
      r'对B按行列大小递归作同样约化。B 的行列变换只作环线性组合，所有项仍为a的倍数，因此其首个非零主元也被a整除。归纳给 d₁|d₂|…，而整个过程是有限个可逆行列变换的复合。$\square$')
    P('pid-module-decomposition','algebra/modules algebra/basis-dimension','PID 上有限生成模的循环直和分解（存在性）',r'PID R 上每个有限生成模 M 都可写为 R^s⊕R/(d₁)⊕…⊕R/(d_r)，其中 d_i 为非零非单位，且 d₁|…|d_r。这里证明存在性，分解因子的唯一性须另证。','pid-submodule-free smith-normal-form-pid module-first-isomorphism','取有限自由模到 M 的满射，将核写成有限自由模，再对关系矩阵作 Smith 约化。',
      r'取生成元 m₁,…,m_n，定义满射 R^n→M，将标准基映为m_i。核N是R^n子模，已证它有限自由，故可选有限基，作为列写成关系矩阵 A:R^l→R^n。第一同构定理给 M≅R^n/im A。',
      r'Smith 变换的右乘仅改变N的基，不改关系像；左乘给R^n自同构，同时把像送到对角关系子模，因此不改商的同构类。对角形式的每个非零d_i约束一个坐标为模(d_i)，无关系坐标给自由因子R。',
      r'单位主元对应R/(1)=0，可删去；非零非单位主元按整除顺序保留，得到所列直和。零模和无扭模情形分别允许全部因子为空或仅自由部分。此步骤不声称已经证明唯一性或所有 Jordan 标准形细节。$\square$')
