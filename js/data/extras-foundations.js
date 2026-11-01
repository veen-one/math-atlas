/* 逻辑与数学基础 · 内容深化 */
window.ATLAS = window.ATLAS || {};
window.ATLAS.extras = window.ATLAS.extras || {};

window.ATLAS.extras['foundations/propositional-logic'] = {
  insight: '命题逻辑的语义由真值表完全决定，因此是“可判定的”：用真值表或归结法总能在有限步内判断一个公式是否为重言式。它的局限是无法表达“所有”“存在”等量词结构，这正是谓词逻辑出现的原因。',
  examples: [
    '公式 $(p\\to q)\\land(q\\to r)\\to(p\\to r)$ 是重言式（假言三段论），真值表 8 行全部为真。',
    '用归结法证明 $(p\\lor q)\\land(\\neg p\\lor r)\\to(q\\lor r)$：否定结论后化为子句集 $\\{p\\lor q,\\ \\neg p\\lor r,\\ \\neg q,\\ \\neg r\\}$，归结得到空子句。'
  ]
};

window.ATLAS.extras['foundations/predicates-quantifiers'] = {
  insight: '量词的顺序不可交换，是数学表述精确性的关键。$\\forall x\\exists y$ 与 $\\exists y\\forall x$ 的差异在分析中反复出现：连续性中 $\\delta$ 依赖 $x_0$，一致连续性则要求 $\\delta$ 只依赖 $\\varepsilon$。',
  examples: [
    '连续性的量词形式是 $\\forall\\varepsilon>0\\ \\forall x_0\\ \\exists\\delta>0\\ \\forall x$；把 $\\exists\\delta$ 提到 $\\forall x_0$ 前面，就得到一致连续。',
    '在自然数中 $\\forall x\\exists y\\,(y>x)$ 为真；在有限集 $\\{1,\\dots,n\\}$ 中为假，说明真值依赖论域。'
  ]
};

window.ATLAS.extras['foundations/formal-language'] = {
  insight: '形式语言把语法与语义分离：语法只规定符号如何组成合式公式，语义由结构赋予含义。这种分离使“可证明性”（语法）与“真”（语义）可以独立研究。',
  examples: [
    '一阶语言 $\\{+,\\cdot,0,1\\}$ 可以写出群、环、域的公理，同一个语言在不同结构中解释不同。',
    '句子 $\\forall x\\exists y\\,(y\\cdot y=x)$ 在 $\\mathbb{R}$ 中为真，在 $\\mathbb{Q}$ 中为假，但它的语法完全相同。'
  ]
};

window.ATLAS.extras['foundations/soundness-completeness'] = {
  insight: '可靠性保证证明系统不会证错，完备性保证所有语义有效的公式都能被证明。哥德尔完全性定理说明标准一阶证明系统足够强；它与不完备性定理并不矛盾，后者针对的是包含算术的特定理论。',
  examples: [
    '命题逻辑的完备性可用真值表证明：每个重言式都能用自然演绎或归结证明。',
    '一阶逻辑完备性等价于模型存在定理：相容的理论一定有模型。'
  ]
};

window.ATLAS.extras['foundations/elementary-equivalence'] = {
  insight: '初等等价只保证两个结构满足相同的一阶句子，不保证同构。它揭示了“一阶逻辑无法表达基数”等限制，也是非标准模型存在的根源。',
  examples: [
    '$(\\mathbb{R},<)$ 与 $(\\mathbb{Q},<)$ 初等等价但不同构：它们都是稠密无端点线性序，但基数不同。',
    '有限域与无限域不能初等等价：可以用句子表达“恰有 $n$ 个元素”或“至少有 $n$ 个元素”。'
  ]
};

window.ATLAS.extras['foundations/sets-mappings'] = {
  insight: '集合与映射的语言把所有数学对象统一为集合与函数。单射、满射、双射分别刻画“信息是否丢失”“是否覆盖陪域”“是否可逆”，是计数与结构比较的基础。',
  examples: [
    '$f:\\mathbb{N}\\to\\mathbb{N}$，$f(n)=n+1$ 是单射但不是满射（$0$ 没有原像）。',
    '$f:\\mathbb{N}\\to\\mathbb{Z}$，$f(2k)=k$，$f(2k+1)=-k-1$ 是双射，说明 $\\mathbb{N}$ 与 $\\mathbb{Z}$ 等势。'
  ]
};

window.ATLAS.extras['foundations/cardinality'] = {
  insight: '基数用双射比较大小，导致无限集“部分可以等于整体”。康托定理说明幂集严格更大，从而产生无穷多个基数层级；连续统假设问的正是 $\\mathbb{R}$ 的基数是否是最小的不可数基数。',
  examples: [
    '区间 $(0,1)$ 与 $\\mathbb{R}$ 等势：$x\\mapsto\\tan(\\pi(x-1/2))$ 给出双射。',
    '可数多个可数集的并仍可数：$\\mathbb{N}\\times\\mathbb{N}$ 可按对角线枚举，因此 $\\mathbb{Q}$ 可数。'
  ]
};

window.ATLAS.extras['foundations/ordinals'] = {
  insight: '序数刻画良序集的“次序类型”，允许超限归纳与超限递归。每个良序集同构于唯一序数；序数的顺序由 $\\in$ 给出，因此序数本身就是所有比它小的序数组成的集合。',
  examples: [
    '$\\omega$ 与 $\\omega+1$ 基数相同（都可数），但作为序数不同：后者多一个最大元。',
    '序数乘法不交换：$2\\cdot\\omega=\\omega$，而 $\\omega\\cdot2=\\omega+\\omega>\\omega$。'
  ]
};

window.ATLAS.extras['foundations/ordinal-analysis'] = {
  insight: '证明论序数度量一个形式理论能够证明的良序长度，是比较系统强度的精细标尺。它让我们能在比理论本身更弱的元理论中证明该理论的相容性。',
  examples: [
    'PA 的证明论序数是 $\\varepsilon_0$；Gentzen 用超限归纳到 $\\varepsilon_0$ 证明了 PA 的相容性。',
    '更强的理论对应更大的序数，例如 $\\Pi^1_1$-CA$_0$ 的证明论序数远超 $\\varepsilon_0$。'
  ]
};

window.ATLAS.extras['foundations/zfc-axioms'] = {
  insight: 'ZFC 通过分离公理与替换公理限制集合的产生方式，避免了罗素悖论，同时保留足够的表达力。选择公理是非构造性的，但它等价于良序定理与 Zorn 引理，在现代数学中被广泛使用。',
  examples: [
    '由 Zorn 引理可推出每个向量空间都有基，即使基无法显式构造。',
    '在 ZF 中加上“所有集合可数”的相容性结果（Feferman–Levy 模型）说明选择公理确实在起作用。'
  ]
};

window.ATLAS.extras['foundations/independence'] = {
  insight: '独立性说明公理系统对某些问题“不表态”。证明独立性通常用模型方法：构造两个都满足公理、却对目标命题给出不同答案的模型。',
  examples: [
    '连续统假设 CH 在 ZFC 中独立：哥德尔的可构成宇宙 $L$ 满足 CH，Cohen 的力迫模型满足 $\\neg$CH。',
    '实数集的基数可以是 $\\aleph_2$、$\\aleph_3$ 等，取决于所取的 ZFC 模型。'
  ]
};

window.ATLAS.extras['foundations/formal-proof'] = {
  insight: '形式证明把推理变成可机械检验的符号序列，是希尔伯特纲领与自动定理证明的基础。证明的每一步只需检查是否符合公理或推理规则，不需要理解含义。',
  examples: [
    '在 Hilbert 系统中，$p\\to(q\\to p)$ 是公理，由肯定前件可推出具体定理。',
    'Lean 或 Coq 中的证明项就是形式证明，类型检查器逐步核验每一步。'
  ]
};

window.ATLAS.extras['foundations/natural-deduction'] = {
  insight: '自然演绎用引入规则与消去规则刻画每个联结词的意义，证明结构接近人类的“假设—推理—结论”方式。引入/消去规则的对称性后来发展成 Curry–Howard 对应。',
  examples: [
    '证明 $A\\land B\\to B\\land A$：假设 $A\\land B$，消去得到 $A$ 与 $B$，再引入 $B\\land A$，最后解除假设。',
    '反证法在经典自然演绎中是额外规则；直觉主义版本不允许任意使用双重否定消去。'
  ]
};

window.ATLAS.extras['foundations/sequent-calculus'] = {
  insight: '相继式演算把证明组织成规则树，每个联结词都有左规则与右规则，结构规则控制公式的复制、丢弃与重排。线性逻辑正是通过取消这些结构规则得到的。',
  examples: [
    '在 LK 中证明 $\\neg(A\\land B)\\to\\neg A\\lor\\neg B$，需要依次应用否定、合取与析取的左右规则。',
    '线性逻辑取消收缩与弱化规则，因此资源只能使用一次，适合描述并发与量子协议。'
  ]
};

window.ATLAS.extras['foundations/cut-elimination'] = {
  insight: '切消定理说明证明中的“引理”总可以被消除，得到的无切证明具有子公式性质。这是证明分析与一致性证明的核心工具，也是自动证明中搜索空间有界的原因。',
  examples: [
    'Gentzen 结合切消与超限归纳证明了 PA 的相容性。',
    '子公式性质推出直觉主义逻辑的析取性质：若 $\\vdash A\\lor B$，则 $\\vdash A$ 或 $\\vdash B$。'
  ]
};

window.ATLAS.extras['foundations/turing-reduction'] = {
  insight: '图灵归约用“带神谕的图灵机”比较问题的相对可计算性，产生图灵度层级。它不限制时间，是纯可计算性概念，与多项式归约不同。',
  examples: [
    '停机问题 $H$ 与“程序是否输出 1”问题彼此图灵等价，属于同一图灵度 $\\mathbf{0}\'$。',
    '存在不可数多个图灵度，但只有可数多个可计算度，说明绝大多数问题是“不可计算的”。'
  ]
};

window.ATLAS.extras['foundations/turing-machine'] = {
  insight: '图灵机用有限状态控制与无限纸带刻画机械计算。丘奇–图灵论题断言：凡能有效计算的函数都能由图灵机计算，这使“可计算性”成为一个稳健的概念。',
  examples: [
    '通用图灵机可以模拟任意图灵机，这是“存储程序计算机”的理论原型。',
    '元胞自动机 Rule 110 也被证明是图灵完备的，说明计算普遍性不依赖具体模型。'
  ]
};

window.ATLAS.extras['foundations/decidability'] = {
  insight: '可判定性要求存在一个对所有输入都停机的算法给出是/否答案；它比“可计算”更强。许多重要问题（停机、希尔伯特第十问题）被证明不可判定。',
  examples: [
    '素数判定是可判定的：试除法给出指数算法，AKS 给出多项式时间算法。',
    '字符串匹配是可判定的：KMP 算法在线性时间内完成。'
  ]
};

window.ATLAS.extras['foundations/halting-problem'] = {
  insight: '停机问题用对角线法证明不可判定，是计算理论的第一块“不可能”基石。莱斯定理进一步指出：程序的任何非平凡语义性质都不可判定。',
  examples: [
    '若停机问题可判定，就能判定“程序是否输出 1”：修改程序使输出 1 即停机，矛盾。',
    '莱斯定理：判断一个程序是否计算恒等函数、是否对所有输入停机等性质都不可判定。'
  ]
};

window.ATLAS.extras['foundations/enumerability'] = {
  insight: '可枚举集是“可以被算法列出”的集合；Post 定理把可判定性与补集的可枚举性联系起来：$L$ 可判定当且仅当 $L$ 与 $\\overline L$ 都可枚举。',
  examples: [
    '停机问题可枚举但不可判定：模拟所有程序，停机时输出。',
    '所有图灵机的编码可枚举，但其中停机的那些不可判定，说明可枚举不等于可判定。'
  ]
};

window.ATLAS.extras['foundations/objects-morphisms'] = {
  insight: '范畴论用对象与态射代替元素，强调结构之间的映射与复合。一个范畴可以只有一个对象（如幺半群视为单对象范畴），说明“对象内部结构”可以被态射结构完全替代。',
  examples: [
    '集合范畴 $\\mathbf{Set}$ 的态射是函数；群范畴 $\\mathbf{Grp}$ 的态射是群同态。',
    '把偏序集视为范畴：对象是元素，态射 $x\\to y$ 存在当且仅当 $x\\le y$。'
  ]
};

window.ATLAS.extras['foundations/functors'] = {
  insight: '函子是保结构的范畴间映射，协变函子保持箭头方向，逆变函子反转箭头。函子把“结构之间的翻译”形式化。',
  examples: [
    '幂集函子 $\\mathcal{P}:\\mathbf{Set}\\to\\mathbf{Set}$ 是协变的：$f:A\\to B$ 诱导 $S\\mapsto f(S)$。',
    '对偶空间 $V\\mapsto V^*$ 是逆变函子：线性映射 $f:V\\to W$ 诱导 $f^*:W^*\\to V^*$。'
  ]
};

window.ATLAS.extras['foundations/natural-transformations'] = {
  insight: '自然变换是函子之间的态射，自然性方图要求它与所有箭头相容。它刻画“不依赖于任意选择”的对应，例如 $V\\to V^{**}$ 自然，而 $V\\to V^*$ 需要选基。',
  examples: [
    '有限维向量空间的求值映射 $V\\to V^{**}$ 是自然同构。',
    '行列式 $\\det:GL_n\\to\\mathbb{R}^{\\times}$ 是群函子之间的自然变换。'
  ]
};

window.ATLAS.extras['foundations/adjunction'] = {
  insight: '伴随用 Hom 集的自然同构联系“自由构造”与“遗忘结构”，是范畴论中统一自由对象、积、极限等构造的核心概念。',
  examples: [
    '自由群函子 $F:\\mathbf{Set}\\to\\mathbf{Grp}$ 是遗忘函子 $U$ 的左伴随。',
    '离散拓扑函子 $\\mathbf{Set}\\to\\mathbf{Top}$ 是遗忘函子的左伴随。'
  ]
};

window.ATLAS.extras['foundations/limits-colimits'] = {
  insight: '极限与余极限用普遍性质统一积、拉回、余积、推出等构造。它们不依赖具体实现，只由“最一般的锥”刻画。',
  examples: [
    '集合的积是笛卡尔积，群的积是直积，拓扑空间的积是乘积拓扑。',
    '拉回 $A\\times_B C$ 在拓扑中对应纤维积，在类型论中对应依赖类型的替换。'
  ]
};

window.ATLAS.extras['foundations/axiomatic-method'] = {
  insight: '公理化把理论变成“若公理成立，则定理成立”的条件性知识。公理不必“显然为真”，只需要相容且足够表达目标结构；这使不同理论可以比较与翻译。',
  examples: [
    '欧氏几何与非欧几何通过修改平行公设区分，三者相对相容。',
    '群论公理统一了整数加法、矩阵乘法、置换复合等结构。'
  ]
};

window.ATLAS.extras['foundations/godel-first'] = {
  insight: '第一不完备性用自指句构造不可判定命题，说明形式可证性弱于真。哥德尔编码把“证明”变成算术命题，使自指成为可能。',
  examples: [
    'PA 的哥德尔句在标准模型中为真，但 PA 无法证明它。',
    '停机问题的不可判定性与哥德尔句是同一现象的两个面貌：都可以用对角线法构造。'
  ]
};

window.ATLAS.extras['foundations/godel-second'] = {
  insight: '第二不完备性说明相容性不能在系统内证明，需要更强的元理论。它是希尔伯特纲领无法完全实现的根本原因。',
  examples: [
    'PA 不能证明 $\\mathrm{Con}(\\mathrm{PA})$；ZFC 也不能证明 $\\mathrm{Con}(\\mathrm{ZFC})$。',
    'Gentzen 用 $\\varepsilon_0$ 超限归纳证明 PA 相容，但这一归纳原理本身超出 PA。'
  ]
};

window.ATLAS.extras['foundations/consistency'] = {
  insight: '相容性是理论有意义的最低要求；由爆炸原理，不相容的理论可以证明任何命题。相容性通常通过构造模型来证明。',
  examples: [
    '群论相容，因为 $\\mathbb{Z}/2\\mathbb{Z}$ 是它的模型。',
    '朴素集合论不相容：罗素悖论构造出“既属于又不属于自身”的集合。'
  ]
};

window.ATLAS.extras['foundations/relative-consistency'] = {
  insight: '相对相容性通过解释或模型比较理论强度，是独立性证明的基础。它不能给出绝对相容性，只能把问题归约到另一个理论。',
  examples: [
    '欧氏几何相对相容于实数理论：笛卡尔坐标把几何对象解释为 $\\mathbb{R}^3$ 中的点线面。',
    'ZFC+CH 相对相容于 ZFC：哥德尔的可构成宇宙 $L$ 给出模型。'
  ]
};

window.ATLAS.extras['foundations/propositions-as-types'] = {
  insight: 'Curry–Howard 对应把命题视为类型、证明视为项，类型检查就是证明检验。这一思想是证明助理的理论基础。',
  examples: [
    '命题 $A\\to A$ 对应恒等函数 $\\lambda x.\\,x:A\\to A$。',
    '合取 $A\\land B$ 对应积类型 $A\\times B$，析取对应和类型 $A+B$。'
  ]
};

window.ATLAS.extras['foundations/simple-types'] = {
  insight: '简单类型 λ 演算用函数类型约束表达式，禁止自应用，从而保证强归一化。强归一化在逻辑上对应证明的切消。',
  examples: [
    '项 $\\lambda x.\\,\\lambda y.\\,x$ 的类型是 $A\\to B\\to A$。',
    '无类型 λ 演算允许 $\\lambda x.\\,x\\,x$，简单类型系统会拒绝它。'
  ]
};

window.ATLAS.extras['foundations/dependent-types'] = {
  insight: '依赖类型让类型依赖项的值，可以表达“长度为 $n$ 的向量”等精细性质。Π 类型对应全称量词，Σ 类型对应存在量词，使类型论能形式化大量数学。',
  examples: [
    '向量类型 $\\mathrm{Vec}(A,n)$ 把长度 $n$ 编码进类型，编译器可检查越界。',
    '排序函数可赋予类型 $\\Pi_{n:\\mathbb{N}}\\mathrm{Vec}(A,n)\\to\\mathrm{Vec}(A,n)$，保证长度不变。'
  ]
};

window.ATLAS.extras['foundations/inductive-types'] = {
  insight: '归纳类型由构造子生成，递归子实现结构递归并对应归纳证明原理。它是证明助理中数据类型与程序语言代数数据类型的共同基础。',
  examples: [
    '自然数 $\\mathbb{N}$ 由 $\\mathrm{zero}$ 与 $\\mathrm{succ}$ 生成。',
    '列表 $\\mathrm{List}(A)$ 由 $\\mathrm{nil}$ 与 $\\mathrm{cons}$ 生成，长度函数由递归子定义。'
  ]
};

window.ATLAS.extras['foundations/proof-assistants'] = {
  insight: '证明助理用类型检查保证证明正确（de Bruijn 准则）：只要证明脚本通过检查，就无需人工复核每一步。形式化数学因此成为可验证的软件工程。',
  examples: [
    'Lean 中 `theorem add_zero (n : ℕ) : n + 0 = n := by simp` 由系统检查并接受。',
    '四色定理、奇点消解等大型定理都已在 Coq/Lean 中形式化。'
  ]
};

window.ATLAS.extras['foundations/structure-interpretation'] = {
  insight: '结构给语言符号赋予数学含义，公式的真值依赖结构与赋值。模型论通过研究“哪些结构满足哪些句子”来分析数学理论。',
  examples: [
    '语言 $\\{<\\}$ 在 $(\\mathbb{R},<)$ 与 $(\\mathbb{Q},<)$ 中都是稠密线性序。',
    '群论语言 $\\{+,-,0\\}$ 在任意群中都有自然解释。'
  ]
};

window.ATLAS.extras['foundations/satisfaction'] = {
  insight: 'Tarski 语义递归定义真值，把“真”变成可检验的条件。满足关系连接语法与语义，是模型论的核心。',
  examples: [
    '$\\mathcal{M}\\models\\forall x\\varphi$ 当且仅当对所有 $a\\in M$ 都有 $\\mathcal{M}\\models\\varphi[a]$。',
    '句子的真值不依赖赋值；有自由变元的公式则需要赋值才能谈真假。'
  ]
};

window.ATLAS.extras['foundations/classification-of-models'] = {
  insight: '模型分类研究同一理论不同模型的结构、同构与范畴性。稳定性理论用组合条件刻画哪些理论有“可分类”的模型类。',
  examples: [
    '无端点稠密线性序理论 DLO 在可数基数下范畴：$(\\mathbb{Q},<)$ 是唯一可数模型。',
    '代数闭域理论在每个不可数基数下范畴，因为同基数的代数闭域同构。'
  ]
};

window.ATLAS.extras['foundations/compactness'] = {
  insight: '紧致性说明一阶逻辑无法用有限公理强制无限性质：只要每个有限片段可满足，整体就可满足。它是构造非标准模型的关键工具。',
  examples: [
    '非标准实数：加入常量 $c$ 与句子 $c>1,c>2,\\dots$，紧致性给出含无穷大元素的模型。',
    '若理论有任意大的有限模型，则它有无限模型：加入“至少有 $n$ 个元素”的句子即可。'
  ]
};