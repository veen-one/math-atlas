/* 数学知识地图 · 离散数学与计算（下） */
window.ATLAS.subjects.discrete.branches.push(
  {
    id: 'algorithm-design',
    name: '算法设计',
    en: 'ALGORITHM DESIGN',
    brief: '怎样构造正确且高效的算法',
    color: '#59d2c0',
    angle: 180,
    topics: [
      {
        id: 'greedy-algorithms',
        name: '贪心算法',
        brief: '在可证明正确时逐步作局部选择',
        keywords: ['贪心算法', '贪心选择', '拟阵', '正确性'],
        definition: [
          '**贪心算法**在每一步选择当前看起来最优的局部操作，并且不回退。只有当问题具有**贪心选择性质**与**最优子结构**时，贪心策略才正确。',
          '典型例子：活动选择、Huffman 编码、最小生成树（Kruskal/Prim）。拟阵理论给出贪心正确性的一般框架。'
        ],
        intuition: [
          '贪心是“眼前的利益优先”：在每一步都选最好的，期望整体最优。但它并不总对——找零钱问题中，贪心可能不是最优。',
          '证明贪心的正确性通常用交换论证：假设最优解与贪心选择不同，交换后不劣，从而证明贪心解也是最优。'
        ],
        formulas: [
          {
            tex: '\\text{贪心选择} + \\text{最优子结构} \\implies \\text{全局最优}',
            caption: '贪心正确性的条件。'
          },
          {
            tex: 'T_{\\text{Kruskal}} = O(E \\log E)',
            caption: 'Kruskal 算法复杂度。'
          }
        ],
        example: [
          '活动选择：按结束时间排序，每次选最早结束且与已选不冲突的活动，得到最多活动数。'
        ],
        related: ['trees-spanning', 'dynamic-programming', 'correctness-proofs']
      },
      {
        id: 'divide-conquer',
        name: '分治',
        brief: '拆分子问题后合并答案',
        keywords: ['分治', '归并排序', '主定理', '递归'],
        definition: [
          '**分治**把问题分成若干规模较小的子问题，递归求解后合并结果。典型例子：归并排序、快速排序、二分查找、FFT。',
          '分治算法复杂度满足递推 $T(n) = aT(n/b) + f(n)$，满足主定理相应增长及正则条件时可据此求解。'
        ],
        intuition: [
          '分治是“大事化小”：把大问题拆成互相独立的子问题，解决后拼起来。归并排序把数组分成两半，排序后合并。',
          '分治的效率来自并行性与递归结构；FFT 用分治把 $O(n^2)$ 的傅里叶变换降到 $O(n \\log n)$。'
        ],
        formulas: [
          {
            tex: 'T(n) = 2T(n/2) + O(n) \\implies T(n) = O(n \\log n)',
            caption: '归并排序的复杂度。'
          },
          {
            tex: 'T(n) = aT(n/b) + f(n)',
            caption: '分治递推。'
          }
        ],
        example: [
          '归并排序：将数组分成两半分别排序，再线性时间合并；递归深度 $\\log n$。'
        ],
        related: ['recurrences', 'dynamic-programming', 'analysis/fourier-transform']
      },
      {
        id: 'dynamic-programming',
        name: '动态规划',
        brief: '复用重叠子问题的计算结果',
        keywords: ['动态规划', '最优子结构', '状态转移', '备忘录'],
        definition: [
          '**动态规划**把问题分解为重叠子问题，用表格保存子问题的解以避免重复计算。适用条件：最优子结构与重叠子问题。',
          '典型例子：背包问题、最长公共子序列、最短路径（Bellman–Ford）、编辑距离。'
        ],
        intuition: [
          '动态规划是“记住已经算过的答案”：斐波那契递归会指数爆炸，但用数组保存前两项后只需线性时间。',
          '状态设计是动态规划的核心：定义“子问题是什么”与“如何从子问题转移”，决定了算法是否正确与高效。'
        ],
        formulas: [
          {
            tex: 'dp[i][w] = \\max(dp[i-1][w],\\ dp[i-1][w-w_i] + v_i)',
            caption: '0-1 背包的状态转移。'
          },
          {
            tex: 'T = O(nW)',
            caption: '背包问题的伪多项式复杂度。'
          }
        ],
        example: [
          '0-1 背包：物品重量 $[2, 3, 4]$、价值 $[4, 5, 6]$、容量 5；最优选择为前两件，价值 9。'
        ],
        related: ['recurrences', 'greedy-algorithms', 'integer-programming']
      },
      {
        id: 'randomized-algorithms',
        name: '随机算法',
        brief: '让随机选择参与计算过程',
        keywords: ['随机算法', 'Las Vegas', 'Monte Carlo', '期望复杂度'],
        definition: [
          '**随机算法**在计算中使用随机数。Las Vegas 算法总是给出正确答案但运行时间随机；Monte Carlo 算法运行时间确定但可能出错。',
          '随机化常用于简化算法、打破对称性、提高期望效率（如随机快速排序）。'
        ],
        intuition: [
          '随机性能让最坏情况变罕见：随机快速排序的期望复杂度为 $O(n \\log n)$，避免固定枢轴导致的 $O(n^2)$。',
          '随机算法也用于素性检验（Miller–Rabin）、最小割（Karger）、哈希与负载均衡。'
        ],
        formulas: [
          {
            tex: 'P(\\text{错误}) \\le \\frac{1}{2}',
            caption: 'Monte Carlo 算法的错误概率（可重复降低）。'
          },
          {
            tex: '\\mathbb{E}[T_{\\text{随机快排}}] = O(n \\log n)',
            caption: '随机快速排序的期望复杂度。'
          }
        ],
        example: [
          'Miller–Rabin 重复 $k$ 次，错误概率至多 $4^{-k}$；$k = 40$ 时错误概率小于 $10^{-24}$。'
        ],
        related: ['probabilistic-method', 'numbertheory/primality-testing', 'time-space']
      },
      {
        id: 'correctness-proofs',
        name: '正确性证明',
        brief: '说明算法为何对允许输入成立',
        keywords: ['正确性', '循环不变量', '归纳', '终止性'],
        definition: [
          '算法正确性包含**部分正确性**（若终止则结果正确）与**终止性**。常用证明方法：循环不变量、数学归纳、交换论证。',
          '循环不变量是在循环每次迭代前后都成立的性质；初始化、保持、终止三步骤证明算法正确。'
        ],
        intuition: [
          '正确性证明是算法设计的“数学保证”：不仅测试通过，而且对所有合法输入成立。',
          '循环不变量对应归纳假设：初始时成立，每次迭代保持，终止时给出所需结论。'
        ],
        formulas: [
          {
            tex: '\\text{初始化} \\land \\text{保持} \\land \\text{终止} \\implies \\text{正确性}',
            caption: '循环不变量证明框架。'
          }
        ],
        example: [
          '二分查找的循环不变量：若目标存在，则一定在当前区间 $[lo, hi]$ 内。每次迭代区间减半，终止时得出结论。'
        ],
        related: ['greedy-algorithms', 'divide-conquer', 'dynamic-programming']
      }
    ]
  },
  {
    id: 'discrete-optimization',
    name: '离散优化',
    en: 'DISCRETE OPTIMIZATION',
    brief: '在离散可行解中寻找最优者',
    color: '#47c2b0',
    angle: -45,
    topics: [
      {
        id: 'integer-programming',
        name: '整数规划',
        brief: '要求部分决策变量取整数',
        keywords: ['整数规划', '分支定界', '割平面', 'NP 难'],
        definition: [
          '**整数规划**是线性规划加上整数约束：$\\min c^\\top x$ s.t. $Ax \\le b$，$x \\in \\mathbb{Z}^n$。0-1 整数规划要求 $x_i \\in \\{0, 1\\}$。',
          '整数规划是 NP 难的；求解方法包括分支定界、割平面、分支切割与启发式。'
        ],
        intuition: [
          '整数规划建模“不可分割的决策”：选或不选、开几家工厂、派几辆车。线性规划松弛去掉整数约束后给出界。',
          '分支定界把问题分成子问题，用线性松弛的界剪枝；割平面加入有效不等式收紧松弛。现代求解器结合两者。'
        ],
        formulas: [
          {
            tex: '\\min\\ c^\\top x \\quad \\text{s.t.}\\ Ax \\le b,\\ x \\in \\mathbb{Z}^n',
            caption: '整数规划标准形。'
          },
          {
            tex: '\\mathrm{LP\\ relaxation} \\le \\mathrm{IP\\ optimum}',
            caption: '线性松弛给出下界（最小化问题）。'
          }
        ],
        example: [
          '背包问题是 0-1 整数规划；旅行商问题的判定版本也是整数规划，且 NP 完全。'
        ],
        related: ['applied/linear-programming', 'np-completeness', 'combinatorial-optimization']
      },
      {
        id: 'network-flows',
        name: '网络流',
        brief: '研究带容量约束的流量分配',
        keywords: ['网络流', '最大流最小割', 'Ford-Fulkerson', '残量网络'],
        definition: [
          '**网络流**在有向图上定义：每条边有容量，源点 $s$ 向汇点 $t$ 输送流量，满足容量约束与流量守恒。',
          '**最大流最小割定理**：最大流值等于最小割容量。Ford–Fulkerson 算法通过残量网络增广路径求解。'
        ],
        intuition: [
          '网络流是“管道输送”的数学模型：水管、电路、交通、数据包都受容量限制。最大流问最多能送多少。',
          '最小割是瓶颈：把所有 $s$-$t$ 路径切断所需的最小容量。最大流最小割定理说明“最大输送量 = 瓶颈容量”。'
        ],
        formulas: [
          {
            tex: '\\max\\ \\mathrm{flow} = \\min\\ \\mathrm{cut}',
            caption: '最大流最小割定理。'
          },
          {
            tex: '\\sum_{e \\in \\delta^+(s)} f_e = \\sum_{e \\in \\delta^-(t)} f_e = |f|',
            caption: '流量守恒。'
          }
        ],
        example: [
          '城市供水网络：源点水库、汇点城区，管道有容量；最大流给出最大供水量，最小割指出瓶颈管道。'
        ],
        related: ['paths-connectivity', 'applied/linear-programming', 'combinatorial-optimization']
      },
      {
        id: 'shortest-paths',
        name: '最短路径',
        brief: '寻找给定代价下的最佳路线',
        keywords: ['最短路径', 'Dijkstra', 'Bellman-Ford', 'A*'],
        definition: [
          '**最短路径问题**在带权图中寻找两点间总权重最小的路径。Dijkstra 算法适用于非负权，Bellman–Ford 处理负权并检测负环。',
          'A* 算法用启发式函数加速搜索，广泛用于地图导航与游戏寻路。'
        ],
        intuition: [
          'Dijkstra 是“逐步扩展最近点”：每次从未确定的点中选距离最小者，松弛其邻居。',
          '负权边会破坏 Dijkstra 的贪心正确性；Bellman–Ford 通过 $|V|-1$ 轮松弛处理负权，并能检测负环。'
        ],
        formulas: [
          {
            tex: 'd[v] = \\min(d[v],\\ d[u] + w(u, v))',
            caption: '松弛操作。'
          },
          {
            tex: 'T_{\\text{Dijkstra}} = O((V + E) \\log V)',
            caption: '堆优化的 Dijkstra 复杂度。'
          }
        ],
        example: [
          '地图导航：顶点是路口，边是道路，权重是行驶时间；Dijkstra/A* 计算最快路线。'
        ],
        related: ['graphs-networks', 'dynamic-programming', 'network-flows']
      },
      {
        id: 'reductions',
        name: '归约',
        brief: '把一个难题转换成另一个问题',
        keywords: ['归约', '多项式归约', '难度传递', '等价性'],
        definition: [
          '**多项式时间归约** $A \\le_p B$：若能在多项式时间内把 $A$ 的实例转化为 $B$ 的实例，且答案保持不变，则 $A$ 不比 $B$ 难。',
          '归约用于证明 NP 完全性：若已知 $A$ 是 NP 完全的且 $A \\le_p B$，则 $B$ 也是 NP 完全的（若 $B \\in NP$）。'
        ],
        intuition: [
          '归约是“问题之间的翻译”：如果会解 $B$，就能解 $A$。把难题归约到新问题，说明新问题至少同样难。',
          '归约是复杂性理论的“比较工具”：它建立了问题之间的难度层级。'
        ],
        formulas: [
          {
            tex: 'A \\le_p B \\ \\text{且}\\ B \\in P \\implies A \\in P',
            caption: '归约保持可解性。'
          },
          {
            tex: 'A \\in NPC,\\ A \\le_p B,\\ B \\in NP \\implies B \\in NPC',
            caption: 'NP 完全性的传递。'
          }
        ],
        example: [
          '3-SAT $\\le_p$ 独立集：把每个子句编码成三角形，公式可满足当且仅当图有大小为子句数的独立集。'
        ],
        related: ['np-completeness', 'integer-programming', 'p-vs-np']
      },
      {
        id: 'polyhedral-methods',
        name: '多面体方法',
        brief: '把离散问题转为几何约束研究',
        keywords: ['多面体方法', '整数多面体', '全幺模矩阵', '线性松弛'],
        definition: [
          '**多面体方法**把组合优化问题的可行解集表示为多面体，用线性规划研究。若多面体的顶点都是整数点，则 LP 最优解自动整数。',
          '全幺模矩阵保证线性松弛的顶点整数性，是网络流等问题多项式可解的原因。'
        ],
        intuition: [
          '多面体方法把“离散选择”变成“几何顶点”：如果多面体足够“规整”（整数顶点），连续优化就能给出离散最优解。',
          '对于非整数多面体，需要割平面切掉非整数顶点，逐步逼近整数包络。'
        ],
        formulas: [
          {
            tex: 'P = \\mathrm{conv}\\{x \\in \\mathbb{Z}^n : Ax \\le b\\}',
            caption: '整数多面体。'
          },
          {
            tex: 'A \\text{ 全幺模} \\implies \\text{LP 顶点整数}',
            caption: '全幺模矩阵的性质。'
          }
        ],
        example: [
          '运输问题的约束矩阵是全幺模的，因此线性规划最优解自动整数，无需分支定界。'
        ],
        related: ['applied/linear-programming', 'integer-programming', 'network-flows']
      },
      {
        id: 'combinatorial-optimization',
        name: '组合优化',
        brief: '在离散可行解中寻找最优者',
        keywords: ['组合优化', '匹配', '旅行商', '近似'],
        definition: [
          '**组合优化**在有限（或离散）可行解集中寻找最优解。典型问题：旅行商（TSP）、最小割、匹配、排程、装箱。',
          '许多组合优化问题是 NP 难的；解决方法包括精确算法（分支定界、动态规划）、近似算法与启发式。'
        ],
        intuition: [
          '组合优化是“从海量离散选择中挑最好的”：旅行商的路线数呈阶乘增长，穷举不可行。',
          '结构良好的问题（匹配、网络流）有多项式算法；一般问题需要近似或启发式。'
        ],
        formulas: [
          {
            tex: '\\min_{S \\in \\mathcal{F}} c(S)',
            caption: '组合优化的一般形式（$\\mathcal{F}$ 为离散可行集）。'
          },
          {
            tex: '\\text{TSP：} \\min \\sum_{i} d_{\\pi(i), \\pi(i+1)}',
            caption: '旅行商问题。'
          }
        ],
        example: [
          '旅行商问题：10 个城市的路线有 $9!/2 \\approx 181440$ 条；20 个城市约 $6 \\times 10^{16}$ 条，必须用近似或分支定界。'
        ],
        related: ['integer-programming', 'approximation-algorithms', 'network-flows']
      }
    ]
  },
  {
    id: 'cryptography',
    name: '密码学',
    en: 'CRYPTOGRAPHY',
    brief: '加密、认证与安全协议',
    color: '#3fb5a6',
    angle: -95,
    topics: [
      {
        id: 'symmetric-encryption',
        name: '对称加密',
        brief: '通信双方使用共享密钥',
        keywords: ['对称加密', 'AES', '分组密码', '工作模式'],
        definition: [
          '**对称加密**使用同一个密钥进行加密与解密。分组密码（如 AES）把明文分块加密；流密码逐比特加密。',
          '工作模式（ECB、CBC、CTR、GCM）决定如何加密长消息，影响安全性与并行性。'
        ],
        intuition: [
          '对称加密是“一把钥匙开一把锁”：速度快，适合大量数据；但密钥必须安全分发。',
          'AES 是当前标准分组密码，支持 128/192/256 位密钥；实际系统常用 AES-GCM 同时提供加密与认证。'
        ],
        formulas: [
          {
            tex: 'C = E_K(P),\\quad P = D_K(C)',
            caption: '对称加密与解密。'
          },
          {
            tex: '|K| = 128, 192, \\text{ 或 } 256 \\text{ 位（AES）}',
            caption: 'AES 密钥长度。'
          }
        ],
        example: [
          'TLS 连接中，握手阶段用公钥交换协商会话密钥，之后用 AES-GCM 对称加密传输数据。'
        ],
        related: ['public-key-cryptography', 'digital-signatures', 'entropy']
      },
      {
        id: 'public-key-cryptography',
        name: '公钥密码',
        brief: '区分公开密钥与秘密密钥',
        keywords: ['公钥密码', 'RSA', 'Diffie-Hellman', 'ElGamal'],
        definition: [
          '**公钥密码**使用一对密钥：公钥公开用于加密或验证，私钥保密用于解密或签名。其安全性基于数学难题（大整数分解、离散对数）。',
          'RSA：$n = pq$，公钥 $(e, n)$，私钥 $d \\equiv e^{-1} \\bmod \\varphi(n)$；加密 $c = m^e \\bmod n$。'
        ],
        intuition: [
          '公钥密码解决了密钥分发问题：任何人都可以用你的公钥加密，只有你的私钥能解密。',
          'RSA 的安全性依赖大整数分解困难；椭圆曲线密码用离散对数问题，密钥更短。量子计算机上的 Shor 算法会破坏这些系统，推动后量子密码研究。'
        ],
        formulas: [
          {
            tex: 'c = m^e \\bmod n,\\quad m = c^d \\bmod n',
            caption: 'RSA 加密与解密。'
          },
          {
            tex: 'ed \\equiv 1 \\pmod{\\varphi(n)}',
            caption: 'RSA 密钥关系。'
          }
        ],
        example: [
          'RSA-2048：$n$ 为 2048 位，分解需要约 $10^{20}$ 年（经典计算机）；因此目前认为安全。'
        ],
        related: ['symmetric-encryption', 'numbertheory/integer-factorization', 'digital-signatures']
      },
      {
        id: 'digital-signatures',
        name: '数字签名',
        brief: '验证消息来源与完整性',
        keywords: ['数字签名', '哈希', '不可伪造', 'RSA 签名'],
        definition: [
          '**数字签名**用私钥对消息哈希签名，任何人可用公钥验证。签名保证完整性、认证性与不可否认性。',
          'RSA 签名：$\\sigma = H(m)^d \\bmod n$；验证：$\\sigma^e \\equiv H(m) \\pmod n$。'
        ],
        intuition: [
          '数字签名是“电子印章”：只有私钥持有者能生成签名，公钥验证者能确认来源。',
          '签名不加密消息，只提供认证；通常与哈希函数结合，避免对长消息直接签名。'
        ],
        formulas: [
          {
            tex: '\\sigma = H(m)^d \\bmod n',
            caption: 'RSA 签名生成。'
          },
          {
            tex: '\\sigma^e \\equiv H(m) \\pmod n',
            caption: '签名验证。'
          }
        ],
        example: [
          '软件发布者用私钥签名安装包的哈希；用户下载后用公钥验证，确保软件未被篡改且来自发布者。'
        ],
        related: ['public-key-cryptography', 'zero-knowledge', 'security-reductions']
      },
      {
        id: 'zero-knowledge',
        name: '零知识证明',
        brief: '证明命题且不额外泄露见证信息',
        keywords: ['零知识证明', '完备性', '可靠性', 'zk-SNARK'],
        definition: [
          '**零知识证明**让证明者向验证者证明“我知道某个见证 $w$ 使 $R(x, w)$ 成立”，而不泄露 $w$ 的任何信息。',
          '三性质：完备性（真命题可证明）、可靠性（假命题不能证明）、零知识性（验证者学不到见证信息）。'
        ],
        intuition: [
          '零知识证明是“证明我知道密码，但不告诉你密码”：通过交互挑战，让验证者相信而不泄露秘密。',
          '经典例子：洞穴门（Ali Baba cave）——证明者知道开门咒语，通过随机选择路径证明，不暴露咒语。zk-SNARK 已用于区块链隐私与扩容。'
        ],
        formulas: [
          {
            tex: 'P \\text{ 证明 } \\exists w:\\ R(x, w) \\quad \\text{不泄露 } w',
            caption: '零知识证明的目标。'
          },
          {
            tex: '\\text{完备性} + \\text{可靠性} + \\text{零知识性}',
            caption: '零知识证明的三性质。'
          }
        ],
        example: [
          'zk-SNARK 在 Zcash 中用于证明交易合法而不泄露金额与地址；证明大小仅几百字节，验证时间毫秒级。'
        ],
        related: ['digital-signatures', 'security-reductions', 'public-key-cryptography']
      },
      {
        id: 'security-reductions',
        name: '安全归约',
        brief: '把攻击能力联系到困难假设',
        keywords: ['安全归约', '可证明安全', '困难问题', '规约'],
        definition: [
          '**安全归约**证明：若存在攻击者能破坏密码方案，则存在算法能解决底层困难问题（如分解、离散对数）。因此方案的安全性归约到困难假设。',
          '这是“可证明安全”的标准方法：不证明方案绝对安全，而是证明它不比底层问题更容易被攻破。'
        ],
        intuition: [
          '安全归约是“如果攻破方案，就顺带解决了数学难题”：把攻击者当作黑箱，用它对困难问题求解，矛盾。',
          '归约需要仔细处理随机性、查询次数与成功概率；一个看似安全的方案可能因归约失败而缺乏保证。'
        ],
        formulas: [
          {
            tex: '\\text{攻破方案} \\implies \\text{解决困难问题}',
            caption: '安全归约的逻辑。'
          },
          {
            tex: '\\mathrm{Adv}_{\\mathcal{A}}^{\\Pi}(\\lambda) \\le \\mathrm{Adv}_{\\mathcal{B}}^{P}(\\lambda)',
            caption: '优势归约（示意）。'
          }
        ],
        example: [
          'RSA-OAEP 的安全性归约到 RSA 假设：若能在密文上区分明文，则能解决 RSA 问题。'
        ],
        related: ['public-key-cryptography', 'zero-knowledge', 'np-completeness']
      }
    ]
  },
  {
    id: 'coding-information',
    name: '编码与信息论',
    en: 'CODING & INFORMATION THEORY',
    brief: '压缩、纠错与信息传输极限',
    color: '#52cfbd',
    angle: -140,
    topics: [
      {
        id: 'entropy',
        name: '熵',
        brief: '刻画随机信息的不确定性',
        keywords: ['熵', '信息量', '互信息', 'Shannon'],
        definition: [
          '随机变量 $X$ 的**熵** $H(X) = -\\sum_x p(x) \\log_2 p(x)$ 度量其不确定性（以比特为单位）。',
          '联合熵 $H(X, Y)$、条件熵 $H(X \\mid Y)$、互信息 $I(X; Y) = H(X) - H(X \\mid Y)$ 描述变量间的信息关系。'
        ],
        intuition: [
          '熵是“平均惊讶程度”：公平硬币的熵为 1 比特，确定性事件的熵为 0，偏置硬币的熵小于 1。',
          '对有限字母表独立同分布信源，n 个样本的无损二进制前缀块编码平均长度至少为 nH₂(X)，且可小于 nH₂(X)+1；香农信源编码定理因此给出每符号平均码长趋于熵的可达极限。'
        ],
        formulas: [
          {
            tex: 'H(X) = -\\sum_x p(x) \\log_2 p(x)',
            caption: 'Shannon 熵。'
          },
          {
            tex: 'I(X; Y) = H(X) + H(Y) - H(X, Y)',
            caption: '互信息。'
          },
          {
            tex: 'H(X) \\le \\log_2 |\\mathcal{X}|',
            caption: '熵的最大值（均匀分布时取等）。'
          }
        ],
        example: [
          '公平硬币 $H = 1$ 比特；偏置硬币 $P(1) = 0.9$ 时 $H \\approx 0.469$ 比特，压缩空间更大。'
        ],
        related: ['source-coding', 'channel-capacity', 'applied/statistical-mechanics']
      },
      {
        id: 'error-correcting-codes',
        name: '纠错码',
        brief: '加入冗余以发现和修复差错',
        keywords: ['纠错码', '线性码', 'Hamming 码', 'Reed-Solomon'],
        definition: [
          '**纠错码**在消息中加入冗余，使接收端能检测并纠正传输错误。线性码是向量空间的子空间，用生成矩阵与校验矩阵描述。',
          'Hamming 码可纠正 1 位错误；Reed–Solomon 码可纠正突发错误，广泛用于存储与通信。'
        ],
        intuition: [
          '纠错码是“给消息穿铠甲”：多传一些校验位，让错误可被发现与修复。',
          '距离决定纠错能力：最小距离 $d$ 可纠正 $\\lfloor (d-1)/2 \\rfloor$ 位错误。'
        ],
        formulas: [
          {
            tex: 'd_{\\min} \\ge 2t + 1 \\implies \\text{可纠正 } t \\text{ 位错误}',
            caption: '纠错能力与最小距离。'
          },
          {
            tex: '|C| = 2^k,\\quad n \\ge k + r',
            caption: '线性码参数（$n$ 长度，$k$ 信息位，$r$ 校验位）。'
          }
        ],
        example: [
          'QR 码使用 Reed–Solomon 纠错，即使部分污损仍可扫描；CD 与硬盘也使用 RS 码。'
        ],
        related: ['minimum-distance', 'channel-capacity', 'algebra/finite-fields']
      },
      {
        id: 'channel-capacity',
        name: '信道容量',
        brief: '给定信道可可靠传输的速率界限',
        keywords: ['信道容量', 'Shannon 定理', '噪声', '可靠传输'],
        definition: [
          '**信道容量** $C = \\max_{p(x)} I(X; Y)$ 是信道可可靠传输的最大速率。有限字母表离散无记忆信道的香农编码定理：任意正速率 R<C 可由块长趋长的编码实现，最大错误概率趋零；反之，误差趋零的码率不超过 C。',
          '在此模型中，噪声通过容量限制可靠码率；若容量为零，就不存在正速率且误差趋零的可靠通信。'
        ],
        intuition: [
          '信道容量是“信道的带宽上限”：无论怎么编码，速率超过 $C$ 必然出错；低于 $C$ 则可以做到几乎无错。',
          '香农定理是非构造性的：它证明好码存在，但不给出具体构造。现代纠错码（LDPC、Turbo、Polar）逼近容量。'
        ],
        formulas: [
          {
            tex: 'C = \\max_{p(x)} I(X; Y)',
            caption: '信道容量。'
          },
          {
            tex: 'R < C \\implies \\text{存在编码使错误概率 } \\to 0',
            caption: '有限离散无记忆信道编码定理：R<C 时存在误差趋零的码。'
          }
        ],
        example: [
          'AWGN 信道容量 $C = \\frac12 \\log_2(1 + \\mathrm{SNR})$ 比特/符号；提高信噪比或带宽可提升容量。'
        ],
        related: ['entropy', 'error-correcting-codes', 'source-coding']
      },
      {
        id: 'source-coding',
        name: '源编码',
        brief: '在允许条件下压缩消息',
        keywords: ['源编码', 'Huffman', '算术编码', '率失真'],
        definition: [
          '**源编码**压缩消息以减少比特数。无损压缩要求完全恢复；有损压缩允许一定失真（率失真理论）。',
          'Huffman 编码为频繁符号分配短码；算术编码逼近熵极限；LZ 系列利用重复模式。'
        ],
        intuition: [
          '源编码是“去除冗余”：英语中字母 e 出现频繁，用短码；稀有字母用长码，平均长度接近熵。',
          '无损压缩有极限 $H(X)$；有损压缩在失真与比特率之间权衡（率失真函数）。'
        ],
        formulas: [
          {
            tex: 'L \\ge H(X)',
            caption: '平均码长的下界（无损压缩极限）。'
          },
          {
            tex: 'R(D) = \\min_{p(\\hat x \\mid x): \\mathbb{E}[d(x, \\hat x)] \\le D} I(X; \\hat X)',
            caption: '率失真函数。'
          }
        ],
        example: [
          'ZIP 压缩文本用 LZ77 + Huffman；JPEG 用 DCT + 量化 + Huffman，实现有损图像压缩。'
        ],
        related: ['entropy', 'channel-capacity', 'error-correcting-codes']
      },
      {
        id: 'minimum-distance',
        name: '最小距离',
        brief: '衡量码字之间的区分程度',
        keywords: ['最小距离', 'Hamming 距离', '纠错能力', '界'],
        definition: [
          '码 $C$ 的**最小距离** $d_{\\min}$ 是任意两个不同码字之间的最小 Hamming 距离。它决定码的检错与纠错能力。',
          'Singleton 界、Hamming 界、Gilbert–Varshamov 界给出码参数之间的约束。'
        ],
        intuition: [
          '最小距离是“码字之间的安全间隔”：距离越大，错误需要更严重才能把一个码字变成另一个。',
          '设计纠错码是在长度、冗余、距离之间权衡：更长的码可以更强大，但传输开销更大。'
        ],
        formulas: [
          {
            tex: 'd_{\\min} = \\min_{c_1 \\ne c_2 \\in C} d_H(c_1, c_2)',
            caption: '最小距离的定义。'
          },
          {
            tex: 'd_{\\min} \\le n - k + 1',
            caption: 'Singleton 界。'
          },
          {
            tex: '\\text{可检测 } d_{\\min} - 1 \\text{ 位错误}',
            caption: '检错能力。'
          }
        ],
        example: [
          '重复码 $(n, 1, n)$ 的最小距离为 $n$，可纠正 $\\lfloor (n-1)/2 \\rfloor$ 位错误。'
        ],
        related: ['error-correcting-codes', 'channel-capacity', 'algebra/finite-fields']
      }
    ]
  }
);