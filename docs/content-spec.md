# 数学知识地图 · 内容规范（Content Specification）

本文档是数据文件的**唯一权威格式说明**。所有学科数据必须严格遵守。

## 1. 项目背景

这是一个纯静态的中文数学知识地图网站。页面中央是放射状 SVG 知识图谱：中心为学科名，四周为 8 个分支节点，每个分支外侧散布 4–6 个知识点节点。点击任意知识点，右侧滑出详情面板，展示：定义、直觉与动机、关键公式（KaTeX）、例子与应用、相关概念。

## 2. 文件与注册方式

每个学科的数据拆为 1–2 个 JS 文件，按顺序被 `index.html` 加载。

**A 文件（定义学科并放入前 4 个分支）：**

```js
window.ATLAS = window.ATLAS || { subjects: {} };

window.ATLAS.subjects.analysis = {
  id: 'analysis',
  name: '分析',
  en: 'ANALYSIS',
  tagline: '从变化率出发，研究连续、极限与无限维',
  color: '#7ea6f0',
  startAngle: -90,          // 可选，默认 -90
  branches: [
    { /* 分支对象 */ },
    /* ... 前 4 个分支 ... */
  ]
};
```

**B 文件（向已有学科追加后 4 个分支）：**

```js
window.ATLAS.subjects.analysis.branches.push(
  { /* 分支对象 */ },
  { /* 分支对象 */ }
);
```

不要重复定义 `window.ATLAS.subjects.X`，不要修改其他文件。

## 3. 数据结构

### 分支对象

```js
{
  id: 'real-analysis',          // kebab-case，学科内唯一
  name: '实分析',
  en: 'REAL ANALYSIS',          // 可选
  brief: '极限、连续与严格论证',    // ≤ 14 个汉字
  color: '#6f9ee8',             // 该分支及其连线的颜色
  angle: 75,                    // 布局角度（度）。0 = 正右，90 = 正上，-90 = 正下
  topics: [ /* 4–6 个知识点 */ ]
}
```

### 知识点对象（核心）

```js
{
  id: 'uniform-convergence',             // kebab-case，学科内唯一
  name: '一致收敛',
  brief: '控制整个定义域上的逼近误差',      // ≤ 16 个汉字
  keywords: ['一致收敛', 'uniform convergence', 'sup 范数'],  // 2–6 个，供搜索
  definition: [                          // 1–3 段，严格定义
    '设 $f_n: E \\to \\mathbb{R}$ 是……'
  ],
  intuition: [                           // 1–3 段，直觉、动机、类比
    '逐点收敛时，$N$ 可以随 $x$ 变化……'
  ],
  formulas: [                            // 2–4 条关键公式
    {
      tex: '\\forall \\varepsilon > 0,\\ \\exists N,\\ \\forall n \\ge N,\\ \\forall x \\in E:\\ |f_n(x) - f(x)| < \\varepsilon',
      caption: '一致收敛的 $\\varepsilon$-$N$ 定义。'
    }
  ],
  example: [                             // 1–2 段具体例子或应用
    '$f_n(x) = x^n$ 在 $[0,1)$ 上……'
  ],
  related: ['function-sequences', 'continuity-uniform']   // 3–5 个 id
}
```

### 字段写作要求

| 字段 | 要求 |
|---|---|
| `definition` | 严格、准确、可读。给出量词顺序与前提条件。2–3 段为宜。 |
| `intuition` | 用自然语言解释“为什么这样定义”“它解决什么问题”。可用类比，但不要牺牲准确性。 |
| `formulas` | 2–4 条。必须是最标准、最核心的表述，KaTeX 语法正确。`caption` 用中文解释每个符号或公式意义。 |
| `example` | 一个具体、可验证的例子（带数字或明确构造），或一个著名应用。 |
| `related` | 3–5 个知识点 id。默认同学科内；跨学科写 `'subject-id/topic-id'`。必须真实存在（见各学科提纲）。 |
| 篇幅 | 每个知识点正文合计约 350–650 个汉字（不含公式与代码结构）。宁精勿滥。 |

### 行内公式与排版

- 正文（definition / intuition / example / caption）中可用 `$...$` 包裹行内 LaTeX。
- 支持 `**加粗**` 与 `*强调*`，但请克制使用。
- 不要在正文中写 Markdown 标题、列表或代码块。

## 4. LaTeX 与 JavaScript 转义规则（最重要）

数据文件是 **JavaScript**，不是 JSON。公式写在 JS 字符串里：

1. **一律使用单引号字符串**。
2. LaTeX 的每个反斜杠必须写成**双反斜杠**：
   ```js
   tex: '\\frac{a}{b} + \\sqrt{x}'     // 正确
   tex: '\frac{a}{b}'                  // 错误（JS 会把 \f 当换页符）
   ```
3. 字符串内部不要出现未转义的单引号 `'`。需要引号时使用中文引号「」或“”。
4. 不要使用反引号模板字符串（避免 `${}` 插值风险）。
5. 公式中表示文本用 `\\text{...}`，例如 `f \\text{ 连续}`。
6. 常见符号写法：
   - 实数 `\\mathbb{R}`，整数 `\\mathbb{Z}`，复数 `\\mathbb{C}`，有理数 `\\mathbb{Q}`，自然数 `\\mathbb{N}`
   - 是 `\\in`，子集 `\\subseteq`，蕴含 `\\implies`，当且仅当 `\\iff`
   - 求和 `\\sum_{n=1}^{\\infty}`，积分 `\\int_a^b`，偏导 `\\partial`，极限 `\\lim_{n \\to \\infty}`
   - 希腊字母 `\\alpha \\beta \\varepsilon \\delta \\lambda \\sigma \\zeta \\varphi`
   - 范数 `\\|x\\|`，绝对值 `|x|`，内积 `\\langle x, y \\rangle`
7. 写完后逐个检查：每个 `tex` 里的 `\\` 是否都是双写；每个对象末尾的逗号；括号与方括号配对。

## 5. 内容质量红线

- **数学必须正确**。不确定的细节就写得保守、标准，绝不编造定理名称或结论。
- 术语使用中国大陆通行译名（如“全纯函数”“上同调”“紧致性”）。
- 每个知识点要让人读完后明白三件事：它是什么（定义）、为什么需要它（动机）、怎么用（例子）。
- 公式的 `caption` 不要只是重复公式，要解释符号含义或直觉。
- 避免空洞的套话（“非常重要”“具有深远意义”），直接讲内容。
- 同一学科内的内容避免大段重复；相关概念之间可以互相呼应。

## 6. 学科分工与完整提纲

> 标记 ★ 的知识点同时出现在总览图中，**id 必须逐字一致**。

### 6.1 分析（analysis）— 已由主文件完成 2/8 分支

已有：`real-analysis`（实分析）、`complex-analysis`（复分析）。其余分支写入：

**文件 `js/data/analysis-b.js`：**

**微积分** `calculus` — angle 120°，color `#8fb8f5`，brief「导数、积分与局部变化率」
- `limits` 极限 ★（总览也在用）— 刻画无限逼近时的行为 | 要点：ε-δ、数列极限、单侧极限、运算法则
- `derivatives` 导数 — 描述函数的局部变化率 | 要点：差商极限、切线、可导与连续、求导法则
- `integration-calculus` 积分 — 累积局部量得到整体量 | 要点：黎曼和、定积分、原函数、换元与分部
- `multivariable-calculus` 多元微积分 — 研究多个变量的变化与累积 | 要点：偏导、梯度、雅可比、重积分、格林/高斯/斯托克斯
- `analytic-continuation` 解析延拓 — 把解析函数扩展到更大区域 | 要点：唯一性、幂级数、ζ 函数延拓

**测度与积分** `measure-integration` — angle 30°，color `#5f8fd8`，brief「推广长度与面积的大小概念」
- `sigma-algebras` σ代数 — 组织允许测量的集合 | 要点：可数并、补集、Borel σ代数
- `measures` 测度 — 推广长度与面积 | 要点：可数可加性、勒贝格测度、零测集
- `measurable-functions` 可测函数 — 与可测集合结构相容的函数 | 要点：原像可测、简单函数逼近
- `lebesgue-integral` 勒贝格积分 ★（总览在用）— 依据函数值组织积分 | 要点：简单函数积分、单调收敛、控制收敛
- `integration-limits` 积分与极限 — 在相应条件下交换积分和极限 | 要点：单调收敛定理、控制收敛定理、Fatou 引理

**泛函分析** `functional-analysis` — angle -15°，color `#6fb3e8`，brief「用范数衡量向量或函数大小」
- `normed-spaces` 赋范空间 — 用范数衡量向量或函数大小 | 要点：范数公理、完备化、例子
- `banach-spaces` 巴拿赫空间 — 在范数下完备的线性空间 | 要点：完备性、压缩映射、一致有界原理
- `hilbert-spaces` 希尔伯特空间 ★（总览在用）— 具有内积且完备的空间 | 要点：内积、正交投影、Riesz 表示
- `spectral-theory` 算子谱 — 推广矩阵特征值的概念 | 要点：谱、紧算子、自伴算子的谱定理
- `linear-operators` 线性算子 — 研究函数空间之间的线性映射 | 要点：有界算子、对偶空间、开映射定理

**文件 `js/data/analysis-c.js`：**

**调和分析** `harmonic-analysis` — angle -150°，color `#7fc4e8`，brief「用频率分解理解函数与信号」
- `fourier-series` 傅里叶级数 — 把周期函数展开成频率成分 | 要点：正交基、系数公式、收敛性
- `fourier-transform` 傅里叶变换 ★（总览在用）— 分析连续频率中的函数信息 | 要点：变换与逆变换、Plancherel、分布意义
- `convolution` 卷积 — 描述平移叠加与系统响应 | 要点：定义、卷积定理、滤波
- `wavelets` 小波 — 同时观察位置与尺度的信息 | 要点：母小波、尺度函数、多分辨率分析
- `time-frequency` 时频分析 — 研究信号随时间变化的频率 | 要点：短时傅里叶、不确定性原理、Gabor 变换

**微分方程** `differential-equations` — angle -105°，color `#5b8fd0`，brief「研究多个变量中的变化关系」
- `odes` 常微分方程 — 研究单一自变量下的演化 | 要点：解的存在唯一性、线性方程、积分因子
- `pdes` 偏微分方程 — 研究多个变量中的变化关系 | 要点：热方程、波动方程、Laplace 方程、分类
- `initial-boundary` 初值与边值 — 用额外条件确定具体解 | 要点：初值问题、边值问题、适定性
- `weak-solutions` 弱解 — 用积分或分布意义定义解 | 要点：Sobolev 空间、变分形式、Lax-Milgram
- `stability` 稳定性 — 研究扰动是否导致解明显改变 | 要点：Lyapunov 稳定性、线性化、能量方法

**动力系统** `dynamical-systems` — angle -60°，color `#86a8f0`，brief「研究确定性系统的长期行为」
- `phase-space` 相空间 — 用状态点描述系统的可能状态 | 要点：相图、流、向量场
- `equilibria-periodic-orbits` 平衡点与周期轨道 — 研究静止状态与重复运动 | 要点：不动点、周期解、Poincaré 映射
- `bifurcation` 分岔 — 参数变化导致定性行为改变 | 要点：鞍结分岔、Hopf 分岔、分岔图
- `chaos` 混沌 ★（总览在用）— 确定系统也可对初值高度敏感 | 要点：蝴蝶效应、Lyapunov 指数、奇怪吸引子
- `ergodicity` 遍历性 — 研究时间统计与空间统计的联系 | 要点：不变测度、Birkhoff 遍历定理、混合性

### 6.2 逻辑与数学基础（foundations）

**文件 `js/data/foundations-a.js`：**

**数理逻辑** `mathematical-logic` — angle 135°，color `#b39cf5`，brief「命题、量词与形式推理」
- `propositional-logic` 命题逻辑 — 用联结词组织真假命题 | 要点：联结词、真值表、重言式
- `predicates-quantifiers` 谓词与量词 — 表达对象的性质与范围 | 要点：∀、∃、量词顺序、自由变元
- `formal-language` 形式语言 — 规定符号及合法表达式 | 要点：字母表、合式公式、语法
- `soundness-completeness` 可靠性与完备性 — 连接可证明性与语义有效性 | 要点：可靠性、语义完全性、哥德尔完全性定理
- `elementary-equivalence` 初等等价 — 满足相同的一阶句子 | 要点：一阶语言、同构、初等等价

**集合论** `set-theory` — angle 90°，color `#a78bfa`，brief「集合、无穷与公理体系」
- `sets-mappings` 集合与映射 — 描述对象及对象间的对应 | 要点：集合运算、函数、单射满射
- `cardinality` 基数 — 比较有限与无限集合的大小 | 要点：等势、可数、不可数、Cantor 定理
- `ordinals` 序数 — 刻画良序集合的次序类型 | 要点：良序、超限归纳、序数运算
- `ordinal-analysis` 序数分析 — 用序数刻画理论的证明强度 | 要点：证明论序数、一致性强度
- `zfc-axioms` ZFC 公理 ★（总览在用）— 常用的集合论公理系统 | 要点：外延、配对、幂集、选择公理
- `independence` 独立性 — 某命题不能由给定公理决定 | 要点：哥德尔、Cohen、力迫法（仅提及）

**证明论** `proof-theory` — angle 45°，color `#c4b5fd`，brief「把证明本身作为研究对象」
- `formal-proof` 形式证明 — 可逐步检验的符号推导 | 要点：公理、推理规则、证明序列
- `natural-deduction` 自然演绎 — 以引入与消去规则组织证明 | 要点：引入规则、消去规则、假设
- `sequent-calculus` 相继式演算 — 用前提与结论的关系组织推导 | 要点：相继式、结构规则、Gentzen
- `cut-elimination` 切消定理 — 在适用系统中消去切规则 | 要点：切规则、子公式性质、一致性证明
- `turing-reduction` 图灵归约 — 借助另一问题的解来计算 | 要点：神谕机、相对可计算性、图灵度

**文件 `js/data/foundations-b.js`：**

**可计算性** `computability` — angle 0°，color `#8b7cf6`，brief「算法的存在性与不可判定性」
- `turing-machine` 图灵机 ★（总览在用）— 对机械计算过程的抽象 | 要点：纸带、状态、停机
- `decidability` 可判定性 — 是否存在总能结束的判定算法 | 要点：判定问题、可计算集、丘奇-图灵论题
- `halting-problem` 停机问题 — 一般程序的停机性不可判定 | 要点：对角化、不可判定性
- `enumerability` 可枚举性 — 允许算法逐项列出集合元素 | 要点：递归可枚举、半可判定
- `turing-reduction` — 已在上方证明论列出，不要重复

注意：`turing-reduction` 只写一次（放在证明论分支，因为原图位置如此）。可计算性分支保留 4 个 topic。

**范畴论** `category-theory` — angle -45°，color `#9f8ff0`，brief「对象、映射与结构之间的联系」
- `objects-morphisms` 对象与态射 — 以映射及复合组织结构 | 要点：范畴、态射、复合、单位
- `functors` 函子 ★（总览在用）— 保持结构的范畴间对应 | 要点：协变、逆变、函子公理
- `natural-transformations` 自然变换 — 比较两个函子的统一方式 | 要点：自然性方图、自然同构
- `adjunction` 伴随 — 用自然对应联系两种构造 | 要点：单位、余单位、三角恒等式
- `limits-colimits` 极限与余极限 — 用普遍性质刻画常见构造 | 要点：积、余积、拉回、推出

**公理与不完备性** `incompleteness` — angle -90°，color `#b8a8f8`，brief「形式系统的能力与边界」
- `axiomatic-method` 公理化方法 — 明确起点及允许的推导规则 | 要点：公理、推理规则、模型
- `godel-first` 第一不完备性 ★（总览在用）— 足够强的相容公理化理论有不可判定句 | 要点：哥德尔编码、自指、不可判定句
- `godel-second` 第二不完备性 — 在相应条件下不能证明自身相容 | 要点：可证性谓词、一致性陈述
- `consistency` 相容性 — 系统中不能同时证明矛盾两端 | 要点：语法相容、语义模型
- `relative-consistency` 相对相容性 — 在一个理论中比较另一理论的相容性 | 要点：解释、翻译、力迫

**类型论** `type-theory` — angle -135°，color `#c9b8ff`，brief「类型、构造与形式化证明」
- `propositions-as-types` 命题即类型 — 把命题对应为特定类型的项 | 要点：Curry-Howard 对应、证明项
- `simple-types` 简单类型 — 用类型约束函数与表达式 | 要点：函数类型、类型判断、λ 演算
- `dependent-types` 依赖类型 ★（总览在用）— 类型可以依赖于项的取值 | 要点：Π 类型、Σ 类型、类型族
- `inductive-types` 归纳类型 — 递归描述自然数与数据结构 | 要点：构造子、递归子、归纳原理
- `proof-assistants` 证明助理 — 让计算机逐步核验形式证明 | 要点：Coq、Lean、交互式证明

**模型论** `model-theory` — angle 180°，color `#a995f5`，brief「形式语言与数学结构的关系」
- `structure-interpretation` 结构与解释 — 给语言符号指定数学含义 | 要点：论域、函数符号、关系符号
- `satisfaction` 满足关系 — 判断命题在结构中是否成立 | 要点：满足记号、赋值、真值
- `classification-of-models` 模型的分类 — 按结构性质研究一类模型 | 要点：同构、初等子结构、范畴性
- `compactness` 紧致性定理 — 有限部分可满足则整体可满足 | 要点：紧致性、超积、非标准模型

### 6.3 代数（algebra）

**文件 `js/data/algebra-a.js`：**

**群论** `group-theory` — angle 85°，color `#7cc4f0`，brief「研究对称与可逆操作的结构」
- `groups-subgroups` 群与子群 — 组织可逆运算及其子结构 | 要点：群公理、子群、循环群
- `homomorphisms-quotients` 同态与商群 — 保持运算的映射与结构压缩 | 要点：同态、核、正规子群、商群
- `group-actions` 群作用 — 用群描述对象上的对称操作 | 要点：作用、轨道、Burnside 引理
- `orbits-stabilizers` 轨道与稳定子 — 追踪作用能到哪里及谁不动 | 要点：轨道-稳定子定理、共轭类
- `finite-groups` 有限群 ★（总览在用）— 研究有限对称结构及其分类 | 要点：Lagrange、Sylow、单群分类（简述）

**环与域** `rings-fields` — angle 40°，color `#5fb8e8`，brief「同时研究加法与乘法」
- `ring-structure` 环的结构 — 同时研究加法与乘法 | 要点：环公理、整环、同态
- `ideals` 理想 ★（总览在用）— 构造商环所需的特殊子集 | 要点：双边理想、商环、极大理想、素理想
- `polynomial-rings` 多项式环 — 把多项式作为代数对象 | 要点：多项式环、不可约多项式、唯一分解
- `finite-fields` 有限域 — 具有有限个元素的域 | 要点：特征 p、F_{p^n}、乘法群
- `field-extensions` 域扩张 — 在较小数域中添加新元素 | 要点：代数扩张、超越扩张、次数

**表示论** `representation-theory` — angle -5°，color `#8fc8f5`，brief「用线性变换理解抽象代数结构」
- `group-representations` 群表示 — 把群元素变成线性变换 | 要点：表示、矩阵、特征标
- `invariant-subspaces` 不变子空间 — 在表示作用下保持的子空间 | 要点：子表示、完全可约
- `irreducible-representations` 不可约表示 ★（总览在用）— 没有非平凡不变子空间 | 要点：不可约、Schur 引理、特征标正交

**李群与李代数** `lie-theory` — angle -50°，color `#6cb6e8`，brief「连续对称及其无穷小结构」
- `lie-groups` 李群 — 兼具群结构与光滑流形结构 | 要点：拓扑群、矩阵群、维数
- `lie-algebras` 李代数 ★（总览在用）— 描述连续对称的无穷小结构 | 要点：李代数、维数、半单
- `lie-bracket` 李括号 — 编码无穷小操作的非交换性 | 要点：[X,Y]、Jacobi 恒等式
- `exponential-map` 指数映射 — 把李代数局部信息送入李群 | 要点：exp、单参数子群
- `characters` 特征标 — 用矩阵的迹记录表示信息 | 要点：特征标、正交关系、Weyl 特征标公式
- `rotation-groups` 旋转群 — 描述空间旋转的连续对称 | 要点：SO(3)、SU(2)、四元数

**文件 `js/data/algebra-b.js`：**

**同调代数** `homological-algebra` — angle -95°，color `#5aa9dd`，brief「用复形与同调组织结构信息」
- `chain-complexes` 链复形 ★（总览在用）— 相邻微分复合为零的序列 | 要点：微分、复形、链映射
- `exact-sequences` 正合列 — 精确描述像与核的衔接 | 要点：正合、短正合列、分裂
- `homology-groups` 同调群 — 度量循环与边界的差异 | 要点：闭链、边界、同调群
- `derived-functors` 导出函子 — 记录函子偏离正合的方式 | 要点：左导出、右导出、投射消解
- `ext-tor` Ext 与 Tor — 研究扩张与张量积的同调信息 | 要点：Ext、Tor、Künneth

**交换代数** `commutative-algebra` — angle -140°，color `#6fb0e0`，brief「研究交换环及其模」
- `noetherian` 诺特性质 — 用有限生成控制理想链 | 要点：升链条件、Hilbert 基定理
- `localization` 局部化 — 集中研究选定位置附近的性质 | 要点：分式环、局部环、局部性质
- `modules` 模 — 把向量空间推广到环上 | 要点：模、自由模、张量积
- `prime-ideals` 素理想 — 连接环的结构与几何点 | 要点：素谱、极大理想、零点定理
- `dimension-theory` 维数理论 — 研究素理想链的维数概念 | 要点：Krull 维数、Noether 正规化

**伽罗瓦理论** `galois-theory` — angle 175°，color `#8ec5ea`，brief「用根的对称性研究方程」
- `fundamental-theorem-galois` 基本对应 — 联系中间域与群的子群 | 要点：伽罗瓦对应、正规子群、正规扩张
- `galois-group` 伽罗瓦群 ★（总览在用）— 保持基础域不动的域自同构 | 要点：自同构群、固定域
- `splitting-fields` 分裂域 — 容纳给定多项式全部根的域 | 要点：分裂域、正规性、可分性
- `solvability-by-radicals` 根式可解性 — 借助群结构判断根式求解 | 要点：可解群、五次方程不可解
- `quintic` 一般五次方程 — 不存在通用的根式求解公式 | 要点：A5、不可解群

**线性代数** `linear-algebra` — angle 130°，color `#74bce8`，brief「向量空间、矩阵与线性映射」
- `vector-spaces` 向量空间 — 研究线性组合构成的空间 | 要点：向量空间、线性组合、张成
- `basis-dimension` 基与维数 — 用独立方向描述空间大小 | 要点：线性无关、基、维数
- `linear-maps` 线性映射 — 保持加法与数乘的变换 | 要点：线性映射、矩阵表示、秩-零化度
- `eigenvalues` 特征值 — 寻找变换保持的方向与比例 | 要点：特征值、特征向量、对角化
- `spectral-decomposition` 谱分解 — 在适用条件下分解线性算子 | 要点：正交对角化、奇异值分解

### 6.4 数论（numbertheory）

**文件 `js/data/numbertheory-a.js`：**

**初等数论** `elementary-number-theory` — angle 135°，color `#f0b46e`，brief「整除、同余与素数」
- `divisibility-primes` 整除与素数 — 整数的因子及基本乘法结构 | 要点：整除、算术基本定理、素数
- `gcd` 最大公因数 — 用欧几里得算法求公共因子 | 要点：gcd、裴蜀等式、欧几里得算法
- `congruences` 同余 ★（总览在用）— 研究除法余数之间的关系 | 要点：模运算、中国剩余定理、费马小定理
- `arithmetic-functions` 算术函数 — 给整数赋值并研究其规律 | 要点：欧拉 φ、莫比乌斯、狄利克雷卷积
- `quadratic-residues` 二次剩余 — 判断平方在模意义下的可能值 | 要点：勒让德符号、二次互反律
- `pythagorean-triples` 勾股数 — 分类整数直角三角形的边长 | 要点：本原勾股数、参数化

**解析数论** `analytic-number-theory` — angle 90°，color `#e8a45c`，brief「用分析工具研究整数与素数」
- `prime-counting` 素数计数 — 研究给定范围内素数的数量 | 要点：π(x)、切比雪夫界
- `prime-number-theorem` 素数定理 ★（总览在用）— 素数计数渐近于 x/log x | 要点：π(x) ~ x/log x、等价形式
- `exponential-sums` 指数和 — 用振荡和研究整数的分布 | 要点：Weyl 和、圆法
- `zeta-l-functions` ζ 与 L 函数 — 把算术信息编码进解析函数 | 要点：欧拉乘积、解析延拓、函数方程
- `sieve-methods` 筛法 — 逐步排除不满足条件的整数 | 要点：埃氏筛、Selberg 筛

**代数数论** `algebraic-number-theory` — angle 45°，color `#f2c27e`，brief「研究有理数域的有限扩张」
- `number-fields` 代数数与数域 — 研究有理数域的有限扩张 | 要点：代数数、极小多项式、次数
- `algebraic-integers` 代数整数 — 满足首一整系数多项式的数 | 要点：整数环、整基
- `ideal-factorization` 理想分解 — 用理想恢复某种唯一分解 | 要点：Dedekind 整环、素理想分解
- `local-fields` 局部域 — 在选定素数附近研究算术 | 要点：p 进数、赋值、完备化
- `class-groups` 类群 — 度量理想偏离主理想的程度 | 要点：类数、分式理想、Minkowski 界

**算术几何** `arithmetic-geometry` — angle 0°，color `#e8b04e`，brief「用几何研究方程的算术性质」
- `points-over-finite-fields` 有限域上的点 — 统计方程在有限域中的解 | 要点：有限域、Frobenius、点计数
- `elliptic-curves` 椭圆曲线 ★（总览在用）— 带有群结构的特定代数曲线 | 要点：Weierstrass 方程、群律、Mordell-Weil
- `algebraic-varieties-arithmetic` 代数簇 — 推广代数曲线的高维几何对象 | 要点：仿射簇、射影簇、算术簇
- `abelian-varieties` 阿贝尔簇 — 推广椭圆曲线的高维群簇 | 要点：阿贝尔簇、极化、Tate 模

**文件 `js/data/numbertheory-b.js`：**

**超越数论** `transcendental-number-theory` — angle -45°，color `#f5c98f`，brief「代数数、超越数与逼近性质」
- `algebraic-numbers` 代数数 — 某个非零整系数多项式的根 | 要点：代数数、次数、共轭
- `transcendental-numbers` 超越数 — 不满足这类多项式方程的数 | 要点：超越性、Lindemann、Baker
- `pi-and-e` π 与 e — 两个著名的超越数 | 要点：e 的超越性、π 的超越性
- `heights` 高度 — 刻画有理点的算术复杂度 | 要点：Weil 高度、Northcott 定理
- `diophantine-approximation` 丢番图逼近 ★（总览在用）— 研究实数被有理数逼近的程度 | 要点：Dirichlet 定理、连分数、Roth 定理
- `liouville-numbers` 刘维尔数 — 一类可证明为超越数的实数 | 要点：Liouville 常数、逼近速度

**模形式** `modular-forms` — angle -90°，color `#eab56a`，brief「具有特定变换规律的解析函数」
- `modular-transformations` 模变换 — 研究复上半平面的特殊对称 | 要点：模群、基本域、模形式定义
- `cusp-forms` 尖点形式 ★（总览在用）— 在尖点处满足消失条件 | 要点：尖点、权、Hecke 特征形式
- `hecke-operators` Hecke 算子 — 组织模形式的算术对称 | 要点：Hecke 算子、特征形式、特征值
- `fourier-expansion` 傅里叶展开 — 用展开系数携带算术信息 | 要点：q 展开、模形式与 L 函数
- `modularity` 模性联系 — 把部分椭圆曲线与模形式相连 | 要点：模性定理、费马大定理

**计算数论** `computational-number-theory` — angle -135°，color `#e0a45a`，brief「整数与素数的算法」
- `discrete-logarithms` 离散对数 — 由群元素的幂反求指数 | 要点：离散对数问题、BSGS、指数算法
- `modular-exponentiation` 模幂算法 — 高效计算大指数的余数 | 要点：反复平方、快速幂
- `primality-testing` 素性检验 ★（总览在用）— 判断整数是否为素数 | 要点：Miller-Rabin、AKS、费马检验
- `integer-factorization` 整数分解 — 寻找大整数的素因子 | 要点：试除法、Pollard rho、二次筛、数域筛
- `lattice-methods` 格方法 — 借助格基处理部分算术问题 | 要点：LLL、格基约化、Coppersmith
- `local-global-principle` 局部到整体 — 局部有解能否保证整体有解 | 要点：Hasse 原理、Selmer 例子

**丢番图方程** `diophantine-equations` — angle 180°，color `#f0bd72`，brief「寻找整系数方程的有理解」
- `rational-points` 有理点 — 研究方程的有理解 | 要点：有理点、次数、几何方法
- `integer-equations` 整系数方程 — 寻找满足方程的整数解 | 要点：Pell 方程、Mordell 方程、PDE 类比
- `local-solvability` 局部可解性 — 先检查实数与各 p 进域中的解 | 要点：局部-整体、Hasse 原理、反例

### 6.5 几何与拓扑（geometry）

**文件 `js/data/geometry-a.js`：**

**欧氏与非欧几何** `euclidean-non-euclidean` — angle 125°，color `#e8c874`，brief「不同公理下的距离、角与平行」
- `euclidean-space` 欧氏空间 — 研究熟悉的平直距离结构 | 要点：内积、距离、等距变换
- `axioms-parallel` 公理与平行 — 改变平行公设得到不同几何 | 要点：平行公设、五种公设、非欧几何
- `hyperbolic-geometry` 双曲几何 — 研究负曲率的几何模型 | 要点：Poincaré 圆盘、双曲距离、角度和
- `spherical-geometry` 球面几何 — 大圆充当球面上的测地线 | 要点：大圆、球面三角形、角度和
- `projective-geometry` 射影几何 — 研究投影下保持的几何性质 | 要点：射影平面、齐次坐标、交比

**微分几何** `differential-geometry` — angle 85°，color `#e3c06e`，brief「用微积分研究弯曲对象」
- `smooth-manifolds` 光滑流形 ★（总览在用）— 局部看起来像欧氏空间 | 要点：图册、光滑结构、维数
- `tangent-spaces` 切空间 — 描述某一点的局部方向 | 要点：切向量、切丛、微分
- `curves-surfaces` 曲线与曲面 — 用微分研究弯曲对象 | 要点：弧长、曲率、第一/第二基本形式
- `curvature-geodesics` 曲率与测地线 ★（总览在用）— 研究弯曲及局部最直的路径 | 要点：高斯曲率、测地线、Gauss-Bonnet
- `riemannian-metric` 黎曼度量 — 在流形上定义长度与角度 | 要点：度量张量、联络、测地线方程

**一般拓扑** `general-topology` — angle 170°，color `#d8b95f`，brief「从邻域关系定义连续与极限」
- `open-sets-continuity` 开集与连续 — 从邻域关系定义连续性 | 要点：拓扑、开集、连续映射
- `connectedness` 连通性 — 空间不能分成分离的两部分 | 要点：连通、道路连通、连通分支
- `compactness` 紧致性 — 任意开覆盖均有有限子覆盖 | 要点：紧致、Heine-Borel、有限交性质
- `quotient-spaces` 商空间 — 将选定的点粘合得到新空间 | 要点：商拓扑、等价关系、粘合
- `homeomorphism` 同胚 — 连续且逆映射连续的对应 | 要点：同胚、拓扑不变量、分类

**代数拓扑** `algebraic-topology` — angle -10°，color `#eccf82`，brief「用代数结构识别空间结构」
- `fundamental-group` 基本群 ★（总览在用）— 记录闭合路径的同伦信息 | 要点：环路、同伦、π1
- `homotopy` 同伦 — 用连续变形比较映射 | 要点：同伦、同伦等价、形变收缩
- `homology-groups-topology` 同调群 — 用循环与边界识别空间结构 | 要点：单纯同调、奇异同调、Betti 数
- `cohomology` 上同调 — 用另一套代数结构研究空间 | 要点：上链、上同调环、de Rham
- `fibrations` 纤维化 — 研究整体空间与局部纤维的关系 | 要点：纤维丛、覆盖空间、长正合列

**文件 `js/data/geometry-b.js`：**

**代数几何** `algebraic-geometry` — angle 35°，color `#efd28a`，brief「研究多项式方程的零点空间」
- `algebraic-varieties-geometry` 代数簇 — 研究多项式方程的零点空间 | 要点：仿射簇、射影簇、Zariski 拓扑
- `coordinate-rings` 坐标环 — 用代数记录几何空间的信息 | 要点：坐标环、Hilbert 零点定理、函子性
- `schemes` 概形 ★（总览在用）— 推广代数簇的几何语言 | 要点：局部环化空间、Spec、结构层
- `singularities` 奇点 — 研究偏离光滑状态的位置 | 要点：奇点、爆破、奇点消解
- `birational-geometry` 双有理几何 — 比较稠密开集上的有理等价 | 要点：双有理映射、极小模型纲领

**几何拓扑** `geometric-topology` — angle -145°，color `#dcc26d`，brief「研究流形的结构与不变​量」
- `low-dimensional-topology` 低维拓扑 — 重点研究三维与四维现象 | 要点：3 流形、几何化、Poincaré 猜想
- `knot-theory` 纽结理论 ★（总览在用）— 研究空间中闭合曲线的缠绕 | 要点：纽结、不变量、Jones 多项式
- `manifold-classification` 流形分类 — 寻找区分流形的结构与不变量 | 要点：分类、基本群、同调
- `surgery-theory` 手术理论 — 通过切除与粘合改变流形 | 要点：手术、柄体、h-配边
- `differential-structures` 微分结构 — 同一拓扑空间可有不同光滑结构 | 要点：光滑结构、怪球
- `packing-covering` 堆积与覆盖 — 研究物体如何填充或覆盖空间 | 要点：堆积密度、覆盖、Kissing 数

**凸与离散几何** `convex-discrete-geometry` — angle -100°，color `#e6cb7a`，brief「凸体、多面体与规则排列」
- `convex-sets` 凸集 — 任意两点间线段仍在集合内 | 要点：凸组合、分离定理、支撑函数
- `polyhedra` 多面体 — 用顶点或有限线性约束描述 | 要点：多面体、顶点、Farkas 引理
- `triangulations` 剖分与三角化 — 把空间拆成较简单的基本块 | 要点：三角剖分、Delaunay、Euler 公式
- `euler-characteristic` 欧拉示性数 — 用胞腔数的交错和刻画空间 | 要点：χ、V-E+F、拓扑不变量

**辛几何** `symplectic-geometry` — angle -55°，color `#f0d795`，brief「研究相空间与哈密顿力学」
- `symplectic-forms` 辛形式 ★（总览在用）— 闭且非退化的微分二形式 | 要点：辛形式、非退化、闭性
- `symplectomorphisms` 辛变换 — 保持辛形式的变换 | 要点：辛同胚、哈密顿向量场
- `hamiltonian-systems` 哈密顿系统 — 用能量函数描述相空间演化 | 要点：哈密顿方程、能量守恒、可积系统
- `lagrangian-submanifolds` 拉格朗日子流形 — 辛形式限制为零的半维子流形 | 要点：拉格朗日子流形、Lagrange 子空间
- `moment-maps` 动量映射 — 联系连续对称与守恒量 | 要点：动量映射、Noether 定理、辛约化
- `symplectic-topology` 辛拓扑 — 研究辛同胚下的整体不变量 | 要点：Gromov 非挤压、伪全纯曲线

### 6.6 应用与计算数学（applied）

**文件 `js/data/applied-a.js`：**

**数值分析** `numerical-analysis` — angle 130°，color `#c4d96e`，brief「近似计算、误差与稳定性」
- `numerical-stability` 数值稳定性 — 分析算法如何放大或控制误差 | 要点：误差传播、稳定性、条件
- `condition-numbers` 条件数 — 衡量问题对输入扰动的敏感度 | 要点：条件数、范数、病态问题
- `numerical-integration` 数值积分 — 通过有限计算近似积分 | 要点：梯形法、Simpson 法、Gauss 求积
- `error-analysis` 误差分析 — 追踪舍入误差与离散误差 | 要点：截断误差、舍入误差、收敛阶

**优化与运筹** `optimization` — angle 85°，color `#cadf7a`，brief「约束下寻找最优解与资源分配」
- `linear-programming` 线性规划 — 在线性约束下优化线性目标 | 要点：单纯形法、可行域、对偶
- `convex-optimization` 凸优化 ★（总览在用）— 利用凸性寻找全局最优解 | 要点：凸函数、凸集、KKT 条件
- `nonlinear-optimization` 非线性优化 — 研究更一般的目标与约束 | 要点：梯度下降、牛顿法、拉格朗日乘子
- `duality` 对偶理论 — 从另一个优化问题获得界与结构 | 要点：拉格朗日对偶、弱对偶、强对偶
- `numerical-linear-algebra` 数值线性代数 — 高效求解线性方程与矩阵问题 | 要点：LU、QR、迭代法
- `scheduling` 调度与决策 — 协调任务、时间与有限资源 | 要点：排序、甘特图、整数规划建模

**逆问题** `inverse-problems` — angle 175°，color `#b7d162`，brief「由观测反推参数、结构与原因」
- `ill-posedness` 不适定性 ★（总览在用）— 解可能不唯一或对扰动敏感 | 要点：Hadamard 条件、不稳定性
- `identifiability` 可辨识性 — 判断不同参数能否被观测区分 | 要点：可辨识性、参数冗余
- `parameter-inversion` 参数反演 — 由观测反推模型参数 | 要点：最小二乘、正则化、贝叶斯反演
- `imaging-reconstruction` 成像与重建 — 从间接测量恢复空间结构 | 要点：CT、Radon 变换、反投影
- `regularized-inversion` 正则化反演 — 加入结构约束使反演更稳定 | 要点：Tikhonov、L1 正则、稀疏性

**控制理论** `control-theory` — angle 40°，color `#d2e280`，brief「反馈、稳定性与系统调节」
- `state-space` 状态空间 — 用状态变量表达系统动态 | 要点：状态方程、传递函数、实现
- `controllability-observability` 可控与可观 — 判断能否操纵及重建系统状态 | 要点：可控性矩阵、可观性、Kalman 判据
- `feedback-control` 反馈控制 — 根据观测结果调整控制输入 | 要点：闭环、PID、稳定性
- `robust-control` 鲁棒控制 — 在模型不确定时维持性能 | 要点：H∞、鲁棒稳定性、小增益定理
- `optimal-control` 最优控制 ★（总览在用）— 在动态约束下优化整体目标 | 要点：变分法、Pontryagin 极大值原理、HJB 方程

**文件 `js/data/applied-b.js`：**

**数学物理** `mathematical-physics` — angle -5°，color `#d8e07a`，brief「用数学结构研究物理规律」
- `classical-mechanics` 经典力学 — 用微分方程与变分描述运动 | 要点：Newton、Lagrange、Hamilton
- `quantum-theory` 量子理论 — 用状态空间与算子描述体系 | 要点：希尔伯特空间、自伴算子、谱
- `statistical-mechanics` 统计力学 — 从微观模型研究宏观规律 | 要点：配分函数、熵、相变
- `symmetry-conservation` 对称与守恒 — 在适用条件下联系对称与守恒量 | 要点：Noether 定理、连续对称

**科学计算** `scientific-computing` — angle -50°，color `#c8da72`，brief「离散化、仿真与大规模求解」
- `mesh-discretization` 网格与离散化 — 把连续问题转成有限规模问题 | 要点：网格、离散化、收敛性
- `pde-models` 偏微分方程模型 — 描述波、扩散与流体等现象 | 要点：热方程、波动方程、Navier-Stokes
- `finite-differences` 有限差分 — 以差分近似微分关系 | 要点：差分格式、稳定性、CFL 条件
- `finite-elements` 有限元 ★（总览在用）— 用局部基函数近似连续场 | 要点：弱形式、形函数、组装
- `simulation-validation` 仿真验证 — 检查数值收敛并与现实数据比较 | 要点：网格收敛、验证与确认

**金融数学** `financial-mathematics` — angle -95°，color `#d0da6c`，brief「定价、风险与随机模型」
- `stochastic-price-models` 随机价格模型 — 描述资产价格与不确定性 | 要点：几何布朗运动、跳跃、波动率
- `no-arbitrage-pricing` 无套利定价 ★（总览在用）— 在无套利假设下研究价格约束 | 要点：无套利、风险中性测度、Black-Scholes
- `hedging-replication` 对冲与复制 — 构造组合抵消或复制特定风险 | 要点：Delta 对冲、复制组合、完备市场
- `monte-carlo` 蒙特卡洛 — 用随机抽样估计所求量 | 要点：抽样、方差缩减、Quasi-Monte Carlo
- `risk-measures` 风险度量 — 量化损失分布的不同特征 | 要点：VaR、CVaR、一致性风险度量
- `optimal-portfolio` 最优配置 — 在目标与约束下选择资产组合 | 要点：Markowitz、有效前沿、效用最大化

**生物数学** `biomathematics` — angle -140°，color `#bed566`，brief「种群、传播与生命系统建模」
- `population-dynamics` 种群动力学 — 研究繁殖、竞争与捕食的演化 | 要点：Logistic、Lotka-Volterra
- `epidemic-models` 传染病模型 ★（总览在用）— 描述传播、恢复与人群结构 | 要点：SIR、R0、群体免疫
- `reaction-diffusion` 反应扩散 — 研究局部反应与空间迁移 | 要点：Turing 斑图、扩散方程、行波
- `biological-networks` 生物网络 — 用网络描述调控与相互作用 | 要点：网络、模体、鲁棒性
- `parameter-calibration` 参数校准 — 用数据估计生物模型参数 | 要点：最小二乘、MCMC、敏感性分析

### 6.7 离散数学与计算（discrete）

**文件 `js/data/discrete-a.js`：**

**组合数学** `combinatorics` — angle 135°，color `#6ee7d0`，brief「计数、构造与极值问题」
- `permutations-combinations` 排列与组合 — 区分顺序及选择方式的计数 | 要点：排列、组合、二项式系数
- `generating-functions` 生成函数 ★（总览在用）— 把计数序列编码为形式幂级数 | 要点：普通生成函数、指数生成函数、卷积
- `recurrences` 递推关系 — 用较小规模的问题描述当前问题 | 要点：线性递推、特征方程、主定理
- `probabilistic-method` 概率方法 — 借助随机性证明结构存在 | 要点：期望论证、Lovász 局部引理
- `extremal-combinatorics` 极值组合 — 在限制下求解结构的最大或最小规模 | 要点：Ramsey 理论、Turán 定理、Erdős-Ko-Rado

**图论** `graph-theory` — angle 90°，color `#5fd3c0`，brief「顶点、边、网络与连通结构」
- `graphs-networks` 图与网络 — 用顶点和边表达关系 | 要点：图、度、邻接矩阵
- `trees-spanning` 树与生成树 — 研究无环连通及其骨架 | 要点：树、生成树、Kruskal/Prim
- `paths-connectivity` 路径与连通 — 研究节点能否相互到达 | 要点：路径、连通分量、割点、Menger
- `matchings-coloring` 匹配与着色 ★（总览在用）— 研究配对与相邻对象的区分 | 要点：匹配、Hall 定理、色数
- `spectral-graph-theory` 谱图论 — 用矩阵特征值研究图的结构 | 要点：邻接谱、Laplace 谱、Cheeger 不等式

**离散结构** `discrete-structures` — angle 45°，color `#7fe0cf`，brief「偏序、格与离散代数结构」
- `partial-orders` 偏序集 — 允许部分元素不可比较的次序 | 要点：偏序、链、反链、Dilworth
- `lattices` 格 — 任意两元素都有上确界与下确界 | 要点：格、分配格、Boole 格
- `boolean-algebras` 布尔代数 — 抽象逻辑与集合的运算规律 | 要点：布尔代数、Stone 表示
- `finite-geometries` 有限几何 — 研究有限对象构成的几何结构 | 要点：有限射影平面、关联结构
- `combinatorial-designs` 组合设计 — 在约束下均衡安排元素与区组 | 要点：区组设计、Steiner 系统

**计算复杂性** `computational-complexity` — angle 0°，color `#4fc7b4`，brief「时间、空间与问题的计算难度」
- `time-space` 时间与空间 — 衡量输入增大时的资源开销 | 要点：时间复杂度、空间复杂度、大 O
- `p-vs-np` P 与 NP — 比较多项式时间求解与验证 | 要点：P、NP、判定问题
- `np-completeness` NP 完全性 ★（总览在用）— 用归约联系一类核心难题 | 要点：多项式归约、SAT、Cook-Levin
- `approximation-algorithms` 近似算法 — 在保证误差下寻求高效解 | 要点：近似比、PTAS、不可近似性

**文件 `js/data/discrete-b.js`：**

**算法设计** `algorithm-design` — angle 180°，color `#59d2c0`，brief「怎样构造正确且高效的算法」
- `greedy-algorithms` 贪心算法 — 在可证明正确时逐步作局部选择 | 要点：贪心选择、拟阵、正确性
- `divide-conquer` 分治 — 拆分子问题后合并答案 | 要点：分治、归并排序、主定理
- `dynamic-programming` 动态规划 ★（总览在用）— 复用重叠子问题的计算结果 | 要点：最优子结构、状态、转移
- `randomized-algorithms` 随机算法 — 让随机选择参与计算过程 | 要点：Las Vegas、Monte Carlo、期望分析
- `correctness-proofs` 正确性证明 — 说明算法为何对允许输入成立 | 要点：不变量、归纳、终止性

**离散优化** `discrete-optimization` — angle -45°，color `#47c2b0`，brief「在离散可行解中寻找最优者」
- `integer-programming` 整数规划 — 要求部分决策变量取整数 | 要点：整数规划、分支定界、割平面
- `network-flows` 网络流 ★（总览在用）— 研究带容量约束的流量分配 | 要点：最大流最小割、Ford-Fulkerson
- `shortest-paths` 最短路径 — 寻找给定代价下的最佳路线 | 要点：Dijkstra、Bellman-Ford、A*
- `reductions` 归约 — 把一个间题转换成另一个问题 | 要点：归约、等价性、难度传递
- `polyhedral-methods` 多面体方法 — 把离散问题转为几何约束研究 | 要点：整数多面体、全幺模矩阵
- `combinatorial-optimization` 组合优化 — 在离散可行解中寻找最优者 | 要点：匹配、旅行商、近似

**密码学** `cryptography` — angle -95°，color `#3fb5a6`，brief「加密、认证与安全协议」
- `symmetric-encryption` 对称加密 — 通信双方使用共享密钥 | 要点：分组密码、AES、工作模式
- `public-key-cryptography` 公钥密码 — 区分公开密钥与秘密密钥 | 要点：RSA、ElGamal、Diffie-Hellman
- `digital-signatures` 数字签名 — 验证消息来源与完整性 | 要点：签名方案、哈希、不可伪造性
- `zero-knowledge` 零知识证明 ★（总览在用）— 证明命题且不额外泄露见证信息 | 要点：完备性、可靠性、零知识性
- `security-reductions` 安全归约 — 把攻击能力联系到困难假设 | 要点：规约、困难问题、可证明安全

**编码与信息论** `coding-information` — angle -140°，color `#52cfbd`，brief「压缩、纠错与信息传输极限」
- `entropy` 熵 — 刻画随机信息的不确定性 | 要点：熵、条件熵、互信息
- `error-correcting-codes` 纠错码 — 加入冗余以发现和修复差错 | 要点：线性码、Hamming 码、RS 码
- `channel-capacity` 信道容量 — 给定信道可可靠传输的速率界限 | 要点：容量、Shannon 定理、噪声
- `source-coding` 源编码 — 在允许条件下压缩消息 | 要点：Huffman、算术编码、率失真
- `minimum-distance` 最小距离 — 衡量码字之间的区分程度 | 要点：Hamming 距离、纠错能力、界

### 6.8 概率与统计（probability）

**文件 `js/data/probability-a.js`：**

**概率基础** `probability-basics` — angle 130°，color `#f09aa8`，brief「样本、事件与随机变量」
- `probability-space` 概率空间 — 明确样本、事件及概率 | 要点：样本空间、σ 代数、概率测度
- `random-variables` 随机变量 — 把随机结果映射为数值 | 要点：可测映射、分布函数
- `distributions` 分布 — 描述随机变量的取值规律 | 要点：离散/连续分布、密度、常见分布
- `expectation-variance` 期望与方差 — 刻画平均水平与波动大小 | 要点：期望、方差、矩
- `conditional-probability` 条件概率 — 在已有信息下更新事件概率 | 要点：条件概率、全概率、Bayes
- `stopping-times` 停时 — 能由截至当时的信息判断的时刻 | 要点：停时、σ 代数流、可选停时

**极限定理** `limit-theorems` — angle 90°，color `#e88e9e`，brief「在相应条件下样本均值趋于稳定」
- `law-large-numbers` 大数定律 — 在相应条件下样本均值趋稳 | 要点：弱大数、强大数、Khinchin
- `central-limit-theorem` 中心极限定理 ★（总览在用）— 标准化和趋于正态 | 要点：CLT、Lindeberg、收敛速率
- `convergence-in-probability` 依概率收敛 — 大偏差发生的概率趋于零 | 要点：依概率、依分布、关系
- `almost-sure-convergence` 几乎处处收敛 — 不收敛的样本路径构成零概率集 | 要点：几乎处处、Borel-Cantelli
- `large-deviations` 大偏差 — 研究罕见偏离事件的衰减速率 | 要点：大偏差原理、速率函数、Cramér

**随机过程** `stochastic-processes` — angle 40°，color `#f0a6b2`，brief「随机变量随时间的演化」
- `markov-chains` 马尔可夫链 ★（总览在用）— 给定当前后未来不依赖更早历史 | 要点：转移矩阵、平稳分布、遍历
- `brownian-motion` 布朗运动 — 具有连续路径的基本随机过程 | 要点：高斯增量、连续路径、鞅性
- `poisson-process` 泊松过程 — 刻画独立增量的随机计数 | 要点：泊松过程、到达间隔、复合泊松
- `stationary-processes` 平稳过程 — 统计规律在时间平移下不变 | 要点：严平稳、宽平稳、谱密度
- `martingales` 鞅 — 给定当前信息后条件期望不变 | 要点：鞅、下鞅、可选停时定理

**随机分析** `stochastic-analysis` — angle -5°，color `#eb92a4`，brief「随机微积分与随机微分方程」
- `ito-integral` 伊藤积分 — 对随机过程定义特定积分 | 要点：Itô 积分、适应性、等距
- `ito-formula` 伊藤公式 ★（总览在用）— 随机微积分中的变量变换规则 | 要点：Itô 引理、二次变差、修正项
- `sdes` 随机微分方程 — 把随机扰动写进演化方程 | 要点：SDE、强解、弱解
- `diffusion-processes` 扩散过程 — 研究连续路径随机演化的一类模型 | 要点：扩散、生成算子、Fokker-Planck

**文件 `js/data/probability-b.js`：**

**统计推断** `statistical-inference` — angle -50°，color `#f4b0bc`，brief「估计、检验与不确定性量化」
- `point-estimation` 点估计 — 由样本给出参数的估计值 | 要点：估计量、无偏性、相合性
- `confidence-intervals` 置信区间 — 按重复抽样覆盖率构造区间 | 要点：置信水平、区间构造、bootstrap
- `hypothesis-testing` 假设检验 ★（总览在用）— 在明确模型下检验统计假设 | 要点：原假设、p 值、功效
- `likelihood` 似然 — 把观测数据视为参数的函数 | 要点：似然函数、MLE、Fisher 信息
- `experimental-design` 实验设计 — 通过随机化与控制识别效应 | 要点：随机化、区组、析因设计
- `identification-conditions` 识别条件 — 判断何时可由数据推出因果量 | 要点：识别、可观测、约束

**贝叶斯方法** `bayesian-methods` — angle -140°，color `#ec9fac`，brief「先验、似然与后验的更新」
- `prior-distribution` 先验分布 — 用概率表达观察数据前的信息 | 要点：先验、主观概率、无信息先验
- `posterior-distribution` 后验分布 ★（总览在用）— 结合先验与似然更新判断 | 要点：Bayes 公式、后验、共轭
- `conjugate-priors` 共轭先验 — 使更新后仍属同一分布族 | 要点：共轭、Beta-Binomial、Normal
- `posterior-predictive` 后验预测 — 把参数不确定性传递到预测 | 要点：后验预测分布、MCMC、抽样
- `hierarchical-models` 层级模型 — 把不同层次的参数共同建模 | 要点：层级先验、收缩、经验 Bayes

**统计学习** `statistical-learning` — angle -95°，color `#e993a2`，brief「预测、泛化与数据中的规律」
- `regression-classification` 回归与分类 — 预测数值或类别标签 | 要点：线性回归、逻辑回归、分类器
- `regularization` 正则化 ★（总览在用）— 限制模型复杂度以改善泛化 | 要点：L1/L2、岭回归、交叉验证
- `bias-variance` 偏差与方差 — 分析预测误差的不同来源 | 要点：偏差-方差分解、过拟合
- `loss-risk` 损失与风险 — 衡量预测误差及其期望 | 要点：损失函数、经验风险、泛化误差
- `training-validation` 训练与验证 — 区分拟合数据与检验泛化 | 要点：训练集、验证集、交叉验证

**因果推断** `causal-inference` — angle 0°，color `#f0a0ae`，brief「在明确假设下识别因果效应」
- `interventions-effects` 干预与因果效应 — 研究主动改变因素会怎样 | 要点：干预、潜在结果、ATE
- `confounding` 混杂 — 共同原因可能扭曲观察关联 | 要点：混杂、后门准则、随机化
- `potential-outcomes` 潜在结果 — 比较不同干预下可能的结果 | 要点：潜在结果、反事实、SUTVA
- `causal-graphs` 因果图 — 表达变量之间的因果假设 | 要点：DAG、d-分离、后门/前门

### 6.9 总览图使用的知识点 id 清单（必须存在）

所有标 ★ 的 topic 必须包含，且 id 完全一致：

| 学科 | topic id |
|---|---|
| analysis | limits, lebesgue-integral, hilbert-spaces, fourier-transform, chaos, cauchy-integral-theorem |
| foundations | zfc-axioms, godel-first, turing-machine, halting-problem, functors, dependent-types |
| algebra | finite-groups, ideals, irreducible-representations, lie-algebras, galois-group, chain-complexes |
| numbertheory | prime-number-theorem, congruences, elliptic-curves, cusp-forms, primality-testing, diophantine-approximation |
| geometry | smooth-manifolds, curvature-geodesics, fundamental-group, schemes, knot-theory, symplectic-forms |
| probability | central-limit-theorem, markov-chains, ito-formula, hypothesis-testing, posterior-distribution, regularization |
| applied | convex-optimization, ill-posedness, optimal-control, finite-elements, no-arbitrage-pricing, epidemic-models |
| discrete | generating-functions, matchings-coloring, np-completeness, dynamic-programming, network-flows, zero-knowledge |

## 7. 交付与自检

每个文件完成后自查：

1. `node --check <file>` 通过（若可用）。
2. 每个 `tex` 字段中的反斜杠都已双写。
3. 所有 `related` 引用的 id 在三类范围内查找确认存在：本学科提纲、总览清单、跨学科 `学科/topic` 格式。
4. 分支 `angle` 与规范一致；文件只注册/追加自己负责的分支。
5. 没有重复的 topic id。

完成后报告：文件路径、分支数、知识点数、任何偏离规范之处。

## 7. 深化卡片（learning）

`js/data/learning.js` 在所有学科及 extras 后、app.js 前加载。键为完整的 `subject/topic`。所有 319 个知识点必须有且仅有一张卡片。

- `boundary`：明确条件、概念边界或常见误用，避免泛泛提醒。
- `question`：一个能独立理解的具体自测问题。
- `answer`：给出结论及计算、反例、构造或推理依据；涉及定理时保留关键前提。

源码保存在 `scripts/deepen-content.py`，由脚本转义为单引号 JavaScript 字符串。禁止使用默认模板给缺失知识点填充套话。检查器将缺失卡片、孤立卡片或关联目标不存在视为失败。


## 8. 证明章节

`window.ATLAS.proofBook` 包含 `bases` 和 `proofs`。每个证明须有唯一 `id`、实际知识点路径数组 `topics`、准确的 `statement`、`title`、`idea`、按顺序的 `steps` 和 `dependencies`。依赖必须指向本书另一个证明或明确列明的基础公理/定义，且图必须无环。

所证版本的限制写在陈述内，不能以有限情形或特例标记一般定理已完成。每个知识点即使有一条证明，也默认只属部分展开；必须人工核定全部断言后才可声明整个主题证明完成。开放问题不得伪造证明。LaTeX 与 Markdown 及网页数据由同一源生成，修改 `scripts/build-proofs.py`，不得只改单个产物。


证明扩写允许在 `scripts/proof-chapters/*.py` 注册明确编写的条目与基础定义。不能自动为未覆盖主题生成空泛证明，不得把结论本身注册为基础公理。生成器会按确定顺序装载所有章节，再统一检查引用和环，导出同一份网页、Markdown 与 LaTeX 内容。LaTeX 导出保留 `$...$` 内原始数学代码，对数学片段外的字面反斜杠、下划线等作转义。
