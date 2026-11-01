/* 数学知识地图 · 总览数据
   8 个学科分支，每个学科选取 6 个代表性知识点作为叶子节点。
   叶子的 id 与各学科数据文件中的 topic id 对应。 */
window.ATLAS = window.ATLAS || { subjects: {} };

window.ATLAS.overview = {
  title: '数学',
  en: 'MATHEMATICS',
  subtitle: '数量 · 结构 · 空间 · 变化 · 随机 · 计算',
  startAngle: 135,
  branches: [
    {
      id: 'foundations',
      name: '逻辑与数学基础',
      brief: '从一句命题，到证明与计算的边界',
      color: '#a78bfa',
      angle: 135,
      topics: [
        { id: 'zfc-axioms', name: 'ZFC 公理', brief: '常用的集合论公理系统' },
        { id: 'godel-first', name: '第一不完备性', brief: '足够强的相容公理化理论有不判定句' },
        { id: 'turing-machine', name: '图灵机', brief: '对机械计算过程的抽象' },
        { id: 'halting-problem', name: '停机问题', brief: '一般程序的停机性不可判定' },
        { id: 'functors', name: '函子', brief: '保持结构的范畴间对应' },
        { id: 'dependent-types', name: '依赖类型', brief: '类型可以依赖于项的取值' }
      ]
    },
    {
      id: 'algebra',
      name: '代数',
      brief: '把具体运算，抽象成可以迁移的结构',
      color: '#6cb6e8',
      angle: 80,
      topics: [
        { id: 'finite-groups', name: '有限群', brief: '研究有限对称结构及其分类' },
        { id: 'ideals', name: '理想', brief: '构造商环所需的特殊子集' },
        { id: 'irreducible-representations', name: '不可约表示', brief: '没有非平凡不变子空间' },
        { id: 'lie-algebras', name: '李代数', brief: '描述连续对称的无穷小结构' },
        { id: 'galois-group', name: '伽罗瓦群', brief: '保持基础域不动的域自同构' },
        { id: 'chain-complexes', name: '链复形', brief: '相邻微分复合为零的序列' }
      ]
    },
    {
      id: 'numbertheory',
      name: '数论',
      brief: '整数与素数，怎样连接到分析和几何',
      color: '#e8a45c',
      angle: 35,
      topics: [
        { id: 'prime-number-theorem', name: '素数定理', brief: '素数计数渐近于 x/log x' },
        { id: 'congruences', name: '同余', brief: '研究除法余数之间的关系' },
        { id: 'elliptic-curves', name: '椭圆曲线', brief: '带有群结构的特定代数曲线' },
        { id: 'cusp-forms', name: '尖点形式', brief: '在尖点处满足消失条件' },
        { id: 'primality-testing', name: '素性检验', brief: '判断整数是否为素数' },
        { id: 'diophantine-approximation', name: '丢番图逼近', brief: '研究实数被有理数逼近的程度' }
      ]
    },
    {
      id: 'geometry',
      name: '几何与拓扑',
      brief: '形状怎样弯曲，空间又保留了什么',
      color: '#e3c06e',
      angle: -15,
      topics: [
        { id: 'smooth-manifolds', name: '光滑流形', brief: '局部看起来像欧氏空间' },
        { id: 'curvature-geodesics', name: '曲率与测地线', brief: '研究弯曲及局部最直的路径' },
        { id: 'fundamental-group', name: '基本群', brief: '记录闭合路径的同伦信息' },
        { id: 'schemes', name: '概形', brief: '推广代数簇的几何语言' },
        { id: 'knot-theory', name: '纽结理论', brief: '研究空间中闭合曲线的缠绕' },
        { id: 'symplectic-forms', name: '辛形式', brief: '闭且非退化的微分二形式' }
      ]
    },
    {
      id: 'analysis',
      name: '分析',
      brief: '从变化率出发，研究连续、极限与无限维',
      color: '#7ea6f0',
      angle: 170,
      topics: [
        { id: 'limits', name: '极限', brief: '刻画无限逼近时的行为' },
        { id: 'lebesgue-integral', name: '勒贝格积分', brief: '依据函数值组织积分' },
        { id: 'hilbert-spaces', name: '希尔伯特空间', brief: '具有内积且完备的空间' },
        { id: 'fourier-transform', name: '傅里叶变换', brief: '分析连续频率中的函数信息' },
        { id: 'chaos', name: '混沌', brief: '确定系统也可对初值高度敏感' },
        { id: 'cauchy-integral-theorem', name: '柯西积分定理', brief: '在相应条件下闭路积分为零' }
      ]
    },
    {
      id: 'probability',
      name: '概率与统计',
      brief: '从随机模型，走向数据、推断与决策',
      color: '#e58d9e',
      angle: -150,
      topics: [
        { id: 'central-limit-theorem', name: '中心极限定理', brief: '标准化和趋于正态' },
        { id: 'markov-chains', name: '马尔可夫链', brief: '给定当前后未来不依赖更早历史' },
        { id: 'ito-formula', name: '伊藤公式', brief: '随机微积分中的变量变换规则' },
        { id: 'hypothesis-testing', name: '假设检验', brief: '在明确模型下检验统计假设' },
        { id: 'posterior-distribution', name: '后验分布', brief: '结合先验与似然更新判断' },
        { id: 'regularization', name: '正则化', brief: '限制模型复杂度以改善泛化' }
      ]
    },
    {
      id: 'applied',
      name: '应用与计算数学',
      brief: '把现实变成模型，把模型变成可检验的答案',
      color: '#b8cf6a',
      angle: -60,
      topics: [
        { id: 'convex-optimization', name: '凸优化', brief: '利用凸性寻找全局最优解' },
        { id: 'ill-posedness', name: '不适定性', brief: '解可能不唯一或对扰动敏感' },
        { id: 'optimal-control', name: '最优控制', brief: '在动态约束下优化整体目标' },
        { id: 'finite-elements', name: '有限元', brief: '用局部基函数近似连续场' },
        { id: 'no-arbitrage-pricing', name: '无套利定价', brief: '在无套利假设下研究价格约束' },
        { id: 'epidemic-models', name: '传染病模型', brief: '描述传播、恢复与人群结构' }
      ]
    },
    {
      id: 'discrete',
      name: '离散数学与计算',
      brief: '怎样数清、连通、求解，以及算得有多快',
      color: '#5fd3c0',
      angle: -105,
      topics: [
        { id: 'generating-functions', name: '生成函数', brief: '把计数序列编码为形式幂级数' },
        { id: 'matchings-coloring', name: '匹配与着色', brief: '研究配对与相邻对象的区分' },
        { id: 'np-completeness', name: 'NP 完全性', brief: '用归约联系一类核心难题' },
        { id: 'dynamic-programming', name: '动态规划', brief: '复用重叠子问题的计算结果' },
        { id: 'network-flows', name: '网络流', brief: '研究带容量约束的流量分配' },
        { id: 'zero-knowledge', name: '零知识证明', brief: '证明命题且不额外泄露见证信息' }
      ]
    }
  ]
};