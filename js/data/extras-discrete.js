/* 离散数学与计算 · 内容深化 */
window.ATLAS = window.ATLAS || {};
window.ATLAS.extras = window.ATLAS.extras || {};

window.ATLAS.extras['discrete/permutations-combinations'] = {
  insight: '排列与组合的区别是“顺序是否重要”；二项式系数满足帕斯卡恒等式，是计数与代数的桥梁。',
  examples: [
    '从 $10$ 人选 $3$ 人组成委员会有 $\\binom{10}{3}=120$ 种；若分别担任三个职务，则 $P(10,3)=720$ 种。',
    '二项式定理 $(1+x)^n=\\sum\\binom{n}{k}x^k$，令 $x=1$ 得 $\\sum\\binom{n}{k}=2^n$。'
  ]
};

window.ATLAS.extras['discrete/generating-functions'] = {
  insight: '生成函数把计数序列编码为形式幂级数，序列的卷积对应级数乘法；许多计数问题因此转化为代数运算。',
  examples: [
    'Fibonacci 数列的生成函数为 $\\frac{x}{1-x-x^2}$，可从中导出 Binet 公式。',
    '二项式系数 $\\binom{n}{k}$ 的生成函数是 $(1+x)^n$。'
  ]
};

window.ATLAS.extras['discrete/recurrences'] = {
  insight: '递推关系用较小规模的问题描述当前问题；线性递推可用特征方程求解，分治递推用主定理给出渐近阶。',
  examples: [
    '爬楼梯方案数 $f(n)=f(n-1)+f(n-2)$，即 Fibonacci 数列。',
    '归并排序 $T(n)=2T(n/2)+O(n)$，由主定理得 $O(n\\log n)$。'
  ]
};

window.ATLAS.extras['discrete/probabilistic-method'] = {
  insight: '概率方法通过证明随机对象以正概率满足性质来证明存在性；期望论证与 Lovász 局部引理是核心工具。',
  examples: [
    '随机二染色图的期望单色边为 $m/2$，故存在染色使单色边不超过 $m/2$，即最大割至少 $m/2$。',
    '随机图 $G(n,p)$ 在 $p$ 足够大时几乎必然包含三角形。'
  ]
};

window.ATLAS.extras['discrete/extremal-combinatorics'] = {
  insight: '极值组合研究在约束下结构的最大或最小规模；Turán 定理与 Ramsey 理论揭示“无序中的有序”。',
  examples: [
    'Turán 定理：不含三角形的 $n$ 个顶点图最多有 $\\lfloor n^2/4\\rfloor$ 条边。',
    '$R(3,3)=6$：6 人中必有 3 人互相认识或互不认识。'
  ]
};

window.ATLAS.extras['discrete/graphs-networks'] = {
  insight: '图是关系的抽象：顶点是对象，边是关系；度、邻接矩阵与连通性刻画网络结构。',
  examples: [
    '握手引理：$\\sum_v\\deg(v)=2|E|$。',
    '社交网络的度分布常呈无标度特征。'
  ]
};

window.ATLAS.extras['discrete/trees-spanning'] = {
  insight: '树是连通无环图，是最经济的连通方式；最小生成树用贪心算法求解且保证最优。',
  examples: [
    '$n$ 个顶点的树恰有 $n-1$ 条边。',
    'Kruskal 按边权从小到大加入不成环的边，得到最小生成树。'
  ]
};

window.ATLAS.extras['discrete/paths-connectivity'] = {
  insight: '路径与连通性描述网络可达性；Menger 定理把“路径数量”与“最小割”联系起来。',
  examples: [
    '删除割点会使连通分量增加。',
    '有限图的 Menger 定理：边不交路径数对应最小边割；不相邻两端点的内部顶点不交路径数对应最小内部点割。'
  ]
};

window.ATLAS.extras['discrete/matchings-coloring'] = {
  insight: '匹配研究配对，着色研究冲突避免；Hall 定理给出二分图匹配的充要条件。',
  examples: [
    '三个工作分配给三人，Hall 条件保证完美分配存在。',
    '四色定理：任何平面图都可用 4 种颜色着色。'
  ]
};

window.ATLAS.extras['discrete/spectral-graph-theory'] = {
  insight: '图的特征值编码全局结构；Laplace 第二特征值 $\\lambda_2$ 衡量连通性与扩张性。',
  examples: [
    '两个团之间只有一条边时，$\\lambda_2$ 接近 $0$，谱聚类能检测出瓶颈。',
    'PageRank 用邻接矩阵的主特征向量给网页排序。'
  ]
};

window.ATLAS.extras['discrete/partial-orders'] = {
  insight: '偏序允许部分元素不可比较；Dilworth 定理把链覆盖数与最大反链大小联系起来。',
  examples: [
    '整除关系是偏序：$2\\mid6$，但 $2$ 与 $3$ 不可比较。',
    '最少链覆盖数等于最大反链大小。'
  ]
};

window.ATLAS.extras['discrete/lattices'] = {
  insight: '格是任意两元素都有上确界与下确界的偏序集；分配格抽象了逻辑与集合的运算规律。',
  examples: [
    '幂集在包含关系下是格：$\\vee=\\cup$，$\\wedge=\\cap$。',
    '命题的“或”与“且”构成分配格。'
  ]
};

window.ATLAS.extras['discrete/boolean-algebras'] = {
  insight: '布尔代数是有补分配格；Stone 表示定理说明它同构于某个幂集代数的布尔子代数。',
  examples: [
    '$\\{0,1\\}$ 在 $\\vee,\\wedge,\\neg$ 下构成二元布尔代数。',
    '德摩根律 $\\neg(a\\vee b)=\\neg a\\wedge\\neg b$。'
  ]
};

window.ATLAS.extras['discrete/finite-geometries'] = {
  insight: '有限几何研究有限点线关联结构；$q$ 阶射影平面有 $q^2+q+1$ 个点与同样多的线。',
  examples: [
    'Fano 平面（$q=2$）有 $7$ 个点、$7$ 条线，每条线 $3$ 个点。',
    '有限域 $\\mathbb{F}_q$ 上的向量空间射影化给出有限射影空间。'
  ]
};

window.ATLAS.extras['discrete/combinatorial-designs'] = {
  insight: '组合设计在约束下均衡安排元素与区组；Steiner 三元系使每对元素恰好出现在一个三元组中。',
  examples: [
    'Fano 平面是最小的 Steiner 三元系 $S(2,3,7)$。',
    'BIBD 的参数满足 $b=\\frac{\\lambda v(v-1)}{k(k-1)}$。'
  ]
};

window.ATLAS.extras['discrete/time-space'] = {
  insight: '时间复杂度是运行步数随输入规模的增长阶，空间复杂度是额外内存的增长阶；大 O 忽略常数与低阶项。',
  examples: [
    '冒泡排序 $O(n^2)$，归并排序 $O(n\\log n)$。',
    '二分查找 $O(\\log n)$，哈希表平均 $O(1)$。'
  ]
};

window.ATLAS.extras['discrete/p-vs-np'] = {
  insight: 'P 是多项式时间可解的问题，NP 是多项式时间可验证的问题；$P=NP$ 是千禧年大奖难题之一。',
  examples: [
    '数独是 NP 的典型代表：验证一个解容易，找到解可能很难。',
    '若 $P=NP$，RSA 等密码系统将不再安全。'
  ]
};

window.ATLAS.extras['discrete/np-completeness'] = {
  insight: 'NP 完全问题是 NP 中最难的问题；Cook–Levin 定理证明 SAT 是 NP 完全，其他问题通过归约获得 NP 完全性。',
  examples: [
    '3-SAT、旅行商判定、图着色都是 NP 完全问题。',
    '若任何一个 NP 完全问题有多项式算法，则 $P=NP$。'
  ]
};

window.ATLAS.extras['discrete/approximation-algorithms'] = {
  insight: '近似算法在多项式时间给出接近最优的解，并用近似比保证误差；有些问题有 PTAS，有些连常数近似都困难。',
  examples: [
    '顶点覆盖的 2-近似算法：取一条未覆盖边，把两端点都加入覆盖。',
    '欧氏旅行商存在 PTAS，而一般旅行商没有常数近似（除非 $P=NP$）。'
  ]
};

window.ATLAS.extras['discrete/greedy-algorithms'] = {
  insight: '贪心算法逐步作局部最优选择；贪心选择性质与最优子结构保证正确，否则可能失败。',
  examples: [
    '活动选择：按结束时间排序，每次选最早结束且不冲突的活动。',
    'Huffman 编码每次合并频率最小的两棵树。'
  ]
};

window.ATLAS.extras['discrete/divide-conquer'] = {
  insight: '分治把问题拆成独立子问题、递归求解后合并；满足相应增长及正则条件时，主定理给出递推复杂度。',
  examples: [
    '归并排序把数组分成两半，排序后合并，复杂度 $O(n\\log n)$。',
    'FFT 用分治把傅里叶变换降到 $O(n\\log n)$。'
  ]
};

window.ATLAS.extras['discrete/dynamic-programming'] = {
  insight: '动态规划复用重叠子问题的解；状态设计与转移方程决定算法正确性与效率。',
  examples: [
    '0-1 背包：$dp[i][w]=\\max(dp[i-1][w],dp[i-1][w-w_i]+v_i)$。',
    '最长公共子序列用二维状态表，时间 $O(mn)$。'
  ]
};

window.ATLAS.extras['discrete/randomized-algorithms'] = {
  insight: '随机算法用随机数简化计算；Las Vegas 总正确但时间随机，Monte Carlo 时间确定但可能出错。',
  examples: [
    '随机快速排序的期望复杂度为 $O(n\\log n)$。',
    'Miller–Rabin 素性检验重复 $k$ 次，错误概率至多 $4^{-k}$。'
  ]
};

window.ATLAS.extras['discrete/correctness-proofs'] = {
  insight: '正确性证明用循环不变量、数学归纳与交换论证；部分正确性加上终止性才构成完整正确性。',
  examples: [
    '二分查找的循环不变量：若目标存在，则一定在当前区间内。',
    '贪心算法的交换论证：把最优解调整为贪心解而不变差。'
  ]
};

window.ATLAS.extras['discrete/integer-programming'] = {
  insight: '整数规划要求变量取整数，是 NP 难的；分支定界与割平面是主要求解方法。',
  examples: [
    '背包问题是 0-1 整数规划：$x_i\\in\\{0,1\\}$。',
    '线性松弛给出整数规划的下界，用于分支定界剪枝。'
  ]
};

window.ATLAS.extras['discrete/network-flows'] = {
  insight: '网络流在容量约束下分配流量；最大流最小割定理说明最大输送量等于瓶颈容量。',
  examples: [
    '供水网络的最大流给出最大供水量，最小割指出瓶颈管道。',
    'Ford–Fulkerson 通过残量网络的增广路径求解最大流。'
  ]
};

window.ATLAS.extras['discrete/shortest-paths'] = {
  insight: '最短路径在带权图中寻找总权重最小的路径；Dijkstra 适用于非负权，Bellman–Ford 处理负权并检测负环。',
  examples: [
    '地图导航用 Dijkstra 或 A* 计算最快路线。',
    'Bellman–Ford 通过 $|V|-1$ 轮松弛处理负权边。'
  ]
};

window.ATLAS.extras['discrete/reductions'] = {
  insight: '归约把一个问题的实例转化为另一个问题，且答案保持不变；它建立问题之间的难度层级。',
  examples: [
    '3-SAT 归约到独立集：把每个子句编码成三角形。',
    '若 $A$ 是 NP 完全的且 $A\\le_p B$，则 $B$ 也是 NP 完全的（若 $B\\in NP$）。'
  ]
};

window.ATLAS.extras['discrete/polyhedral-methods'] = {
  insight: '多面体方法把组合优化的可行解集表示为多面体；全幺模矩阵保证线性松弛的顶点是整数点。',
  examples: [
    '运输问题的约束矩阵是全幺模的，因此线性规划最优解自动整数。',
    '割平面方法逐步切掉非整数顶点，逼近整数包络。'
  ]
};

window.ATLAS.extras['discrete/combinatorial-optimization'] = {
  insight: '组合优化在离散可行解集中寻找最优解；许多问题 NP 难，需要近似算法或启发式。',
  examples: [
    '旅行商问题：$20$ 个城市约有 $6\\times10^{16}$ 条路线，必须用近似或分支定界。',
    '匹配与网络流有多项式算法，是结构良好的组合优化问题。'
  ]
};

window.ATLAS.extras['discrete/symmetric-encryption'] = {
  insight: '对称加密使用同一个密钥加密与解密；分组密码与工作模式决定安全性与并行性。',
  examples: [
    'AES-GCM 同时提供加密与认证，是 TLS 的常用选择。',
    'ECB 模式会泄露明文模式，不应单独使用。'
  ]
};

window.ATLAS.extras['discrete/public-key-cryptography'] = {
  insight: '公钥密码使用一对密钥：公钥公开、私钥保密；安全性基于大整数分解或离散对数。',
  examples: [
    'RSA 加密 $c=m^e\\bmod n$，解密 $m=c^d\\bmod n$。',
    'Diffie–Hellman 用离散对数协商共享密钥。'
  ]
};

window.ATLAS.extras['discrete/digital-signatures'] = {
  insight: '数字签名用私钥签名、公钥验证，保证完整性、认证性与不可否认性。',
  examples: [
    'RSA 签名 $\\sigma=H(m)^d\\bmod n$，验证 $\\sigma^e\\equiv H(m)$。',
    '软件发布者用私钥签名安装包的哈希，用户用公钥验证。'
  ]
};

window.ATLAS.extras['discrete/zero-knowledge'] = {
  insight: '零知识证明让证明者证明知道见证而不泄露见证；三性质：完备性、可靠性、零知识性。',
  examples: [
    '洞穴门例子：证明者知道开门咒语，通过随机挑战证明而不暴露咒语。',
    'zk-SNARK 用于区块链隐私交易与扩容。'
  ]
};

window.ATLAS.extras['discrete/security-reductions'] = {
  insight: '安全归约证明若攻击者能破坏方案，则能解决底层困难问题；这是可证明安全的标准方法。',
  examples: [
    'RSA-OAEP 的安全性归约到 RSA 假设。',
    '若存在区分密文的攻击者，则可构造解决 RSA 问题的算法。'
  ]
};

window.ATLAS.extras['discrete/entropy'] = {
  insight: '熵度量随机变量的不确定性，是压缩的极限；互信息衡量两个变量共享的信息量。',
  examples: [
    '公平硬币的熵为 $1$ 比特，确定性事件的熵为 $0$。',
    '偏置硬币 $P(1)=0.9$ 的熵约 $0.469$ 比特，压缩空间更大。'
  ]
};

window.ATLAS.extras['discrete/error-correcting-codes'] = {
  insight: '纠错码加入冗余以检测与修复错误；最小距离决定可纠正的错误位数。',
  examples: [
    'QR 码使用 Reed–Solomon 纠错，部分污损仍可扫描。',
    'Hamming 码可纠正 $1$ 位错误。'
  ]
};

window.ATLAS.extras['discrete/channel-capacity'] = {
  insight: '有限字母表离散无记忆信道的容量是可靠传输的渐近码率上界；香农定理保证任意正速率 R<C 可实现误差趋零。容量为零时没有正的可靠码率。',
  examples: [
    'AWGN 信道容量 $C=\\frac12\\log_2(1+\\mathrm{SNR})$。',
    'LDPC 与 Polar 码逼近香农容量。'
  ]
};

window.ATLAS.extras['discrete/source-coding'] = {
  insight: '源编码压缩消息；无损压缩的极限是熵，有损压缩用率失真函数权衡。',
  examples: [
    'Huffman 编码为频繁符号分配短码，平均码长接近熵。',
    'JPEG 用 DCT、量化与 Huffman 实现有损图像压缩。'
  ]
};

window.ATLAS.extras['discrete/minimum-distance'] = {
  insight: '最小距离衡量码字之间的区分程度；它决定检错与纠错能力，Singleton 界限制码参数。',
  examples: [
    '重复码 $(n,1,n)$ 的最小距离为 $n$，可纠正 $\\lfloor(n-1)/2\\rfloor$ 位错误。',
    'Reed–Solomon 码达到 Singleton 界 $d=n-k+1$。'
  ]
};