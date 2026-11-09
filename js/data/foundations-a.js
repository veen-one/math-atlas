/* 数学知识地图 · 逻辑与数学基础（上） */
window.ATLAS = window.ATLAS || { subjects: {} };

window.ATLAS.subjects.foundations = {
  id: 'foundations',
  name: '逻辑与数学基础',
  en: 'LOGIC & FOUNDATIONS',
  tagline: '从一句命题，到证明与计算的边界',
  color: '#a78bfa',
  startAngle: 90,
  branches: [
    {
      id: 'mathematical-logic',
      name: '数理逻辑',
      en: 'MATHEMATICAL LOGIC',
      brief: '命题、量词与形式推理',
      color: '#b39cf5',
      angle: 135,
      topics: [
        {
          id: 'propositional-logic',
          name: '命题逻辑',
          brief: '用联结词组织真假命题',
          keywords: ['命题逻辑', '联结词', '真值表', '重言式'],
          definition: [
            '命题逻辑研究由**原子命题**通过联结词 $\\neg, \\land, \\lor, \\to, \\leftrightarrow$ 组合而成的复合命题。每个原子命题取真或假两种真值，复合命题的真值由真值表唯一确定。',
            '若一个公式在所有赋值下都为真，则称其为**重言式**（永真式）；若在所有赋值下都为假，则称矛盾式。命题逻辑的核心任务是判定公式的可满足性与有效式。'
          ],
          intuition: [
            '命题逻辑把“因为……所以……”这类推理剥离掉具体内容，只留下真假组合的骨架。例如“如果下雨，地面就湿；下雨了；所以地面湿了”之所以有效，与下雨无关，只与联结词的组合方式有关。',
            '真值表虽然直观，但规模随命题变元个数指数增长；实际系统使用归结、自然演绎或 SAT 求解器等更高效的方法。命题逻辑是几乎所有自动推理系统的起点。'
          ],
          formulas: [
            {
              tex: 'p \\to q \\equiv \\neg p \\lor q',
              caption: '蕴含可写成“非 $p$ 或 $q$”，这是许多化简与归结算法的基础。'
            },
            {
              tex: '(p \\to q) \\land p \\to q',
              caption: '肯定前件式（modus ponens），最基本的有效推理形式。'
            },
            {
              tex: '\\models (p \\lor \\neg p)',
              caption: '排中律：$p$ 或非 $p$ 恒真，是经典命题逻辑的重言式。'
            }
          ],
          example: [
            '给公式 $p \\lor q \\to p \\land q$ 写真值表：当 $p, q$ 真值不同时公式为假，只有当二者同真或同假时才为真。用它可以把“或”与“且”的关系可视化。'
          ],
          related: ['predicates-quantifiers', 'formal-language', 'soundness-completeness']
        },
        {
          id: 'predicates-quantifiers',
          name: '谓词与量词',
          brief: '表达对象的性质与范围',
          keywords: ['谓词', '量词', '全称量词', '存在量词', '量词顺序'],
          definition: [
            '谓词逻辑在一阶语言中引入**谓词符号**（表示对象性质或关系）、**函数符号**与**量词** $\\forall$（对所有）和 $\\exists$（存在）。原子公式形如 $P(t_1, \\dots, t_n)$，复合公式由联结词与量词生成。',
            '量词的辖域决定变元是**约束**还是**自由**的。公式的真值依赖于论域与赋值；量词顺序一般不可交换。'
          ],
          intuition: [
            '“每个人都有一个母亲”与“有一个人是所有人的母亲”结构相似，含义却完全不同，区别就在量词顺序：$\\forall x \\exists y$ 与 $\\exists y \\forall x$。',
            '量词让我们能够表达“无穷多个”“恰好一个”“至少两个”等概念。一阶逻辑的表达力与局限（如无法刻画有限性、良序性）正是模型论与可计算性研究的出发点。'
          ],
          formulas: [
            {
              tex: '\\forall x \\exists y\\, (y > x) \\quad \\text{与} \\quad \\exists y \\forall x\\, (y > x)',
              caption: '在实数域上前者为真（每个数都有更大的数），后者为假（不存在最大的实数）。'
            },
            {
              tex: '\\neg \\forall x\\, P(x) \\equiv \\exists x\\, \\neg P(x)',
              caption: '量词否定律：全称命题的否定是存在反例。'
            },
            {
              tex: '\\exists! x\\, P(x) := \\exists x\\, (P(x) \\land \\forall y\\, (P(y) \\to y = x))',
              caption: '唯一存在量词可以用一阶公式定义。'
            }
          ],
          example: [
            '在自然数论域中，$\\forall x \\exists y\\, (y > x)$ 为真；若把论域换成有限集合 $\\{1, \\dots, n\\}$，它为假（取 $x=n$ 就找不到论域内更大的 $y$），但 $\\exists x \\forall y\\, (y \\le x)$ 在这个有限论域中成立，而在通常次序的自然数论域中不成立，这说明许多性质依赖于论域的大小。'
          ],
          related: ['propositional-logic', 'formal-language', 'satisfaction']
        },
        {
          id: 'formal-language',
          name: '形式语言',
          brief: '规定符号及合法表达式',
          keywords: ['形式语言', '语法', '字母表', '合式公式'],
          definition: [
            '形式语言是某个**字母表** $\\Sigma$ 上字符串集合的子集。数学逻辑中的一阶语言规定：逻辑符号（$\\neg, \\land, \\lor, \\to, \\forall, \\exists, =$）、变元符号、常量符号、函数符号与谓词符号，以及它们组成**项**与**合式公式**的语法规则。',
            '语法只规定符号如何排列，不规定含义；含义由**语义**（结构、解释与赋值）给出。这种语法与语义的分离是形式化的关键。'
          ],
          intuition: [
            '自然语言有歧义：“我看见那个拿望远镜的人”。形式语言用严格的语法规则消除歧义，使每个表达式都能被机械地解析。',
            '形式语言是证明论、模型论与计算机科学的共同基础：程序语言的语法、编译器的解析、定理证明器的输入格式，都是形式语言的具体实例。'
          ],
          formulas: [
            {
              tex: 'L \\subseteq \\Sigma^{*}',
              caption: '一个形式语言就是字母表上所有字符串集合的子集。'
            },
            {
              tex: '\\varphi ::= P \\mid \\neg \\varphi \\mid (\\varphi \\land \\varphi) \\mid \\forall x\\, \\varphi',
              caption: '合式公式的生成语法（巴科斯范式示意），只允许有限次应用规则得到的表达式。'
            }
          ],
          example: [
            '字符串 $\\forall x\\, (x = y)$ 是合式公式（$y$ 自由）；而 $\\forall \\land x$ 不是，因为量词后缺少变元，违反语法规则。'
          ],
          related: ['predicates-quantifiers', 'structure-interpretation', 'formal-proof']
        },
        {
          id: 'soundness-completeness',
          name: '可靠性与完备性',
          brief: '连接可证明性与语义有效性',
          keywords: ['可靠性', '完备性', '哥德尔完全性定理', '可证明性'],
          definition: [
            '设 $\\Gamma$ 是公式集，$\\varphi$ 是公式。**可靠性**（soundness）断言：若 $\\Gamma \\vdash \\varphi$（存在从 $\\Gamma$ 出发的形式证明），则 $\\Gamma \\models \\varphi$（所有满足 $\\Gamma$ 的结构都满足 $\\varphi$）。',
            '**完备性**（completeness）断言反向：若 $\\Gamma \\models \\varphi$，则 $\\Gamma \\vdash \\varphi$。哥德尔完全性定理（1929）证明：标准的一阶逻辑证明系统既可靠又完备。'
          ],
          intuition: [
            '可靠性保证“证出来的都是对的”，完备性保证“对的都能证出来”。两者合起来说明语法层面的可证明性与语义层面的普遍有效性完全对应。',
            '注意不要与**不完备性定理**混淆：完全性说的是逻辑系统本身（一阶逻辑）足够强，不完备性说的是包含算术的特定理论（如 PA、ZFC）无法判定所有命题。两者并不矛盾。'
          ],
          formulas: [
            {
              tex: '\\Gamma \\vdash \\varphi \\implies \\Gamma \\models \\varphi \\quad \\text{（可靠性）}',
              caption: '每个可证明的公式在所有模型中为真。'
            },
            {
              tex: '\\Gamma \\models \\varphi \\implies \\Gamma \\vdash \\varphi \\quad \\text{（完备性）}',
              caption: '哥德尔完全性定理：语义蕴含可由形式证明捕获。'
            },
            {
              tex: '\\Gamma \\text{ 相容} \\iff \\Gamma \\text{ 有模型}',
              caption: '完备性的等价表述（模型存在定理）。'
            }
          ],
          example: [
            '在命题逻辑中，真值表检验相当于语义判定，而自然演绎或归结给出语法证明；可靠性与完备性保证两种方法得到相同结论。'
          ],
          related: ['propositional-logic', 'formal-proof', 'compactness']
        },
        {
          id: 'elementary-equivalence',
          name: '初等等价',
          brief: '满足相同的一阶句子',
          keywords: ['初等等价', '同构', '一阶句子', '可定义性'],
          definition: [
            '两个结构 $\\mathcal{M}$ 与 $\\mathcal{N}$ 称为**初等等价**，记 $\\mathcal{M} \\equiv \\mathcal{N}$，如果它们满足完全相同的一阶句子集合。',
            '同构的结构必然初等等价，但反之不成立：初等等价只要求一阶性质相同，不要求存在保持结构的双射。'
          ],
          intuition: [
            '初等等价是“从一阶逻辑的视角看无法区分”。例如 $\\mathcal{M} = (\\mathbb{R}, <)$ 与 $\\mathcal{N} = (\\mathbb{Q}, <)$ 初等等价：两者都是稠密、无端点的线性序，任何一阶句子无法区分它们，尽管基数不同、并不存在保序双射。',
            '这个现象说明一阶逻辑无法表达“不可数”“完备”“良序”等概念，也是非标准模型存在的原因。'
          ],
          formulas: [
            {
              tex: '\\mathcal{M} \\equiv \\mathcal{N} \\iff \\forall \\varphi\\ (\\mathcal{M} \\models \\varphi \\leftrightarrow \\mathcal{N} \\models \\varphi)',
              caption: '初等等价的定义，$\\varphi$ 取遍所有一阶句子。'
            },
            {
              tex: '\\mathcal{M} \\cong \\mathcal{N} \\implies \\mathcal{M} \\equiv \\mathcal{N}',
              caption: '同构蕴含初等等价，反之一般不成立。'
            }
          ],
          example: [
            '$\\mathbb{R}$ 与 $\\mathbb{Q}$ 作为有序集初等等价，因为实数的序理论（稠密无端点线性序）可消去量词；但它们的基数不同，因此不同构。'
          ],
          related: ['structure-interpretation', 'satisfaction', 'compactness']
        }
      ]
    },
    {
      id: 'set-theory',
      name: '集合论',
      en: 'SET THEORY',
      brief: '集合、无穷与公理体系',
      color: '#a78bfa',
      angle: 90,
      topics: [
        {
          id: 'sets-mappings',
          name: '集合与映射',
          brief: '描述对象及对象间的对应',
          keywords: ['集合', '映射', '函数', '单射', '双射'],
          definition: [
            '集合是对象的聚集。基本运算包括并 $A \\cup B$、交 $A \\cap B$、差 $A \\setminus B$、笛卡尔积 $A \\times B$ 与幂集 $\\mathcal{P}(A)$。',
            '映射 $f: A \\to B$ 给每个 $a \\in A$ 指定唯一的 $f(a) \\in B$。若 $f(a_1) = f(a_2) \\Rightarrow a_1 = a_2$ 则为**单射**；若每个 $b \\in B$ 都有原像则为**满射**；既单又满则为**双射**。'
          ],
          intuition: [
            '集合论把数学对象都编码为集合：自然数、实数、函数、关系都可以用集合表示。映射则是数学中“结构之间联系”的最基本形式。',
            '单射、满射、双射刻画了“大小比较”与“可逆性”：双射不仅是一一对应，还允许把结构完全搬运过去。'
          ],
          formulas: [
            {
              tex: 'f: A \\to B \\text{ 是单射} \\iff \\forall a_1, a_2 \\in A:\\ f(a_1) = f(a_2) \\implies a_1 = a_2',
              caption: '单射的定义。'
            },
            {
              tex: 'f: A \\to B \\text{ 是满射} \\iff \\forall b \\in B\\ \\exists a \\in A:\\ f(a) = b',
              caption: '满射的定义。'
            },
            {
              tex: 'f: A \\to B \\text{ 是双射} \\iff f \\text{ 存在逆映射 } f^{-1}: B \\to A',
              caption: '双射与可逆映射等价。'
            }
          ],
          example: [
            '$f: \\mathbb{R} \\to \\mathbb{R},\\ f(x) = x^2$ 既不是单射（$f(1) = f(-1)$）也不是满射（负数没有原像）。限制到 $[0, \\infty) \\to [0, \\infty)$ 后则是双射。'
          ],
          related: ['cardinality', 'zfc-axioms', 'ordinals']
        },
        {
          id: 'cardinality',
          name: '基数',
          brief: '比较有限与无限集合的大小',
          keywords: ['基数', '等势', '可数', '不可数', 'Cantor 定理'],
          definition: [
            '两个集合 $A, B$ 称为**等势**（基数相同），如果存在双射 $f: A \\to B$，记 $|A| = |B|$。有限集的基数就是元素个数；无限集也可以比较基数。',
            '集合称为**可数**的，如果它与自然数集 $\\mathbb{N}$ 等势；否则称为不可数。康托定理：对任意集合 $A$，$|\\mathcal{P}(A)| > |A|$。'
          ],
          intuition: [
            '无限集合可以与其真子集等势：$\\mathbb{N}$ 与偶数集等势（$n \\mapsto 2n$）。这正是无限与有限的根本区别。',
            '康托的对角线论证说明实数比自然数“更多”：任何把 $\\mathbb{N}$ 映到 $[0,1]$ 的列表都遗漏某个实数。这一思想后来被图灵用来证明停机问题不可判定。'
          ],
          formulas: [
            {
              tex: '|A| = |B| \\iff \\exists\\, f: A \\to B \\text{ 双射}',
              caption: '等势（基数相等）的定义。'
            },
            {
              tex: '|\\mathcal{P}(A)| = 2^{|A|} > |A|',
              caption: '康托定理：幂集的基数严格大于原集合。'
            },
            {
              tex: '|\\mathbb{R}| = 2^{\\aleph_0} > \\aleph_0 = |\\mathbb{N}|',
              caption: '实数不可数。'
            }
          ],
          example: [
            '有理数集可数，因为 $\\mathbb{Q}$ 可以按分子分母的和排序列出；实数集不可数，因为康托对角线构造能产生不在任何给定列表中的实数。'
          ],
          related: ['sets-mappings', 'ordinals', 'independence']
        },
        {
          id: 'ordinals',
          name: '序数',
          brief: '刻画良序集合的次序类型',
          keywords: ['序数', '良序', '超限归纳', '冯·诺依曼序数'],
          definition: [
            '**良序**是每个非空子集都有最小元的全序。良序集在同构意义下的“次序类型”称为**序数**。冯·诺依曼编码把序数定义为所有比它小的序数组成的集合：$\\alpha = \\{\\beta : \\beta < \\alpha\\}$。',
            '最小的无限序数是 $\\omega = \\{0, 1, 2, \\dots\\}$；每个序数都有后继 $\\alpha + 1$，也有极限序数。所有序数组成的类不是集合（Burali-Forti 悖论）。'
          ],
          intuition: [
            '基数关心“有多少个”，序数关心“按什么次序排列”。$\\omega$ 与 $\\omega + 1$ 基数相同（都可数），但作为序数不同。',
            '序数允许**超限归纳**与**超限递归**：不仅可以对自然数归纳，还可以对任意良序集（包括无限极限情形）进行递归构造。'
          ],
          formulas: [
            {
              tex: '\\alpha = \\{\\beta : \\beta < \\alpha\\}',
              caption: '冯·诺依曼序数编码：序数就是比它小的所有序数的集合。'
            },
            {
              tex: '\\omega = \\{0, 1, 2, 3, \\dots\\}',
              caption: '最小的无限序数。'
            },
            {
              tex: '\\alpha < \\beta \\iff \\alpha \\in \\beta',
              caption: '序数的顺序由属于关系给出。'
            }
          ],
          example: [
            '序数加法：$1 + \\omega = \\omega$，但 $\\omega + 1 > \\omega$。这说明序数加法不交换，它记录的是“先排哪一段”的顺序信息。'
          ],
          related: ['cardinality', 'ordinal-analysis', 'zfc-axioms']
        },
        {
          id: 'ordinal-analysis',
          name: '序数分析',
          brief: '用序数刻画理论的证明强度',
          keywords: ['序数分析', '证明论序数', 'ε₀', 'Gentzen'],
          definition: [
            '**序数分析**是证明论的一个分支：给形式理论 $T$ 指派一个序数 $\\alpha$，称为**证明论序数**，用于度量 $T$ 能证明哪些良序性以及它的证明强度。',
            'Gentzen（1936）证明了皮亚诺算术 PA 的证明论序数为 $\\varepsilon_0$，其相容性证明需要在弱算术元理论上加入适当的、沿该序数记号系统的超限归纳原则。'
          ],
          intuition: [
            '一个理论越强，能证明的良序越长。证明论序数就是理论“能够容忍的最长递归下降”的长度。若一个理论证明某个序数良序，而另一个理论更强，它就能证明更长的序数良序。',
            '哥德尔第二不完备性定理说明 PA 无法证明自身相容性；Gentzen 的证明之所以可能，是因为使用了不能仅由 PA 证明其充分强度的超限归纳原则（到 $\\varepsilon_0$）——强度被“借”了出去。'
          ],
          formulas: [
            {
              tex: '\\varepsilon_0 = \\sup\\{\\omega,\\ \\omega^{\\omega},\\ \\omega^{\\omega^{\\omega}},\\ \\dots\\}',
              caption: '$\\varepsilon_0$ 是最小的满足 $\\omega^{\\alpha} = \\alpha$ 的序数，也是 PA 的证明论序数。'
            },
            {
              tex: 'T \\vdash \\mathrm{WF}(\\alpha) \\implies \\alpha < |T|',
              caption: '若 $T$ 能证明 $\\alpha$ 良序，则 $\\alpha$ 小于 $T$ 的证明论序数。'
            }
          ],
          example: [
            'PA 可以证明每个 $\\omega$-指数塔（有限高）良序，但无法证明 $\\varepsilon_0$ 良序；Gentzen 用超限归纳到 $\\varepsilon_0$ 证出 PA 的相容性，这正是第二不完备性定理划定的边界。'
          ],
          related: ['ordinals', 'cut-elimination', 'godel-second']
        },
        {
          id: 'zfc-axioms',
          name: 'ZFC 公理',
          brief: '常用的集合论公理系统',
          keywords: ['ZFC', '集合论公理', '选择公理', '幂集', '替换'],
          definition: [
            'ZFC 是**策梅洛–弗兰克尔集合论加选择公理**的简称，是现代数学的标准公理系统。公理包括：外延、空集、配对、并集、幂集、无穷、分离（子集）、替换、正则与选择。',
            '选择公理（AC）断言：任意非空集合族都有选择函数，等价于任意集合都可良序化、任意向量空间都有基、Zorn 引理等陈述。'
          ],
          intuition: [
            '朴素集合论允许任意“性质”定义集合，导致罗素悖论。ZFC 通过分离公理限制集合的产生方式：只能从已有集合中分离子集，不能用“所有不包含自身的集合”这类自指定义。',
            '选择公理的非构造性让许多数学家感到不安：它断言某种选择存在，却不给出具体算法。但它与 ZF 的相对相容性、以及在分析、代数中的核心作用，使它成为标准配置。'
          ],
          formulas: [
            {
              tex: '\\forall x\\, \\forall y\\, (\\forall z\\, (z \\in x \\leftrightarrow z \\in y) \\to x = y)',
              caption: '外延公理：集合由元素唯一确定。'
            },
            {
              tex: '\\forall X\\, (X \\ne \\varnothing \\to \\exists f: X \\to \\bigcup X\\ \\forall A \\in X:\\ f(A) \\in A)',
              caption: '选择公理：每个非空集合族都有选择函数。'
            },
            {
              tex: '\\forall x\\, \\exists y\\, \\forall z\\, (z \\in y \\leftrightarrow z \\subseteq x)',
              caption: '幂集公理。'
            }
          ],
          example: [
            '在 ZF 中无法构造出“每个向量空间都有基”的证明；加上选择公理后，Zorn 引理可用，从而得到基的存在性。'
          ],
          related: ['sets-mappings', 'cardinality', 'independence']
        },
        {
          id: 'independence',
          name: '独立性',
          brief: '某命题不能由给定公理决定',
          keywords: ['独立性', '连续统假设', '力迫法', '哥德尔', 'Cohen'],
          definition: [
            '命题 $\\varphi$ 在公理系统 $T$ 中**独立**，如果 $T$ 既不能证明 $\\varphi$，也不能证明 $\\neg \\varphi$（假设 $T$ 相容）。',
            '最著名的例子是连续统假设（CH）：$2^{\\aleph_0} = \\aleph_1$，即实数集的基数是最小的不可数基数。'
          ],
          intuition: [
            '独立不是“未解决”，而是“无论怎么证都证不出来”——系统对这个问题保持中立。哥德尔 1938 年构造可构成集宇宙 $L$，证明 CH 与 ZFC 相容；Cohen 1963 年发明力迫法，证明 $\\neg$CH 也与 ZFC 相容。',
            '这说明 ZFC 公理不足以决定实数集的基数，存在许多“ZFC 宇宙”，它们的实数集大小不同。'
          ],
          formulas: [
            {
              tex: '\\mathrm{CH}:\\ 2^{\\aleph_0} = \\aleph_1',
              caption: '连续统假设。'
            },
            {
              tex: '\\mathrm{ZFC} \\nvdash \\mathrm{CH} \\quad \\text{且} \\quad \\mathrm{ZFC} \\nvdash \\neg \\mathrm{CH}',
              caption: '由哥德尔与 Cohen 的结果，CH 独立于 ZFC（假设 ZFC 相容）。'
            }
          ],
          example: [
            '在哥德尔的可构成宇宙 $L$ 中，CH 成立；在通过力迫法得到的某些扩张模型中，CH 不成立且 $2^{\\aleph_0}$ 可以等于 $\\aleph_2$ 等。两者都是 ZFC 的模型。'
          ],
          related: ['zfc-axioms', 'godel-first', 'relative-consistency']
        }
      ]
    },
    {
      id: 'proof-theory',
      name: '证明论',
      en: 'PROOF THEORY',
      brief: '把证明本身作为研究对象',
      color: '#c4b5fd',
      angle: 45,
      topics: [
        {
          id: 'formal-proof',
          name: '形式证明',
          brief: '可逐步检验的符号推导',
          keywords: ['形式证明', '公理', '推理规则', '可证明性'],
          definition: [
            '在一个形式系统中，**形式证明**是由公式组成的有限序列 $\\varphi_1, \\dots, \\varphi_n$，其中每个 $\\varphi_i$ 要么是公理，要么由前面的公式通过推理规则得到。最后一项称为定理。',
            '**可证明性** $\\Gamma \\vdash \\varphi$ 表示存在从 $\\Gamma$ 中公式出发的有限证明以 $\\varphi$ 结尾。证明的每一步都可以被机械检验。'
          ],
          intuition: [
            '形式证明把“数学证明”变成可完全机械检查的对象：不需要理解含义，只需检查符号是否符合规则。这是希尔伯特纲领的核心想法。',
            '代价是形式证明往往极其冗长。实际数学写作使用的是“社会性证明”，而形式化证明（如 Lean、Coq 中的证明）才是可机器验证的。'
          ],
          formulas: [
            {
              tex: '\\Gamma \\vdash \\varphi \\iff \\exists\\, (\\varphi_1, \\dots, \\varphi_n = \\varphi)\\ \\text{为从 } \\Gamma \\text{ 出发的合法证明}',
              caption: '可证明性的存在性定义。'
            },
            {
              tex: '\\frac{\\Gamma \\vdash \\varphi \\quad \\Gamma \\vdash \\varphi \\to \\psi}{\\Gamma \\vdash \\psi}',
              caption: '分离规则（modus ponens）的序列式写法。'
            }
          ],
          example: [
            '在 Hilbert 系统中，从公理 $p \\to (q \\to p)$ 与 $p$ 出发，通过两次肯定前件可以得到 $q \\to p$，构成一个两行证明。'
          ],
          related: ['natural-deduction', 'sequent-calculus', 'soundness-completeness']
        },
        {
          id: 'natural-deduction',
          name: '自然演绎',
          brief: '以引入与消去规则组织证明',
          keywords: ['自然演绎', '引入规则', '消去规则', '假设'],
          definition: [
            '自然演绎（Gentzen, 1934）为每个逻辑联结词配备**引入规则**（如何证明含该联结词的公式）与**消去规则**（如何从该公式推出结论）。证明以假设为起点，通过规则逐步推导，最后**解除假设**。',
            '例如蕴含的引入规则：若在假设 $A$ 下能推出 $B$，则可解除假设得到 $A \\to B$。'
          ],
          intuition: [
            '自然演绎模仿人类“假设—推理—结论”的思维方式，比 Hilbert 公理系统更接近实际数学证明。',
            '引入/消去规则的对称性体现了逻辑联结词的“意义”：知道如何引入一个联结词，就等于知道它的全部用法。这一思想后来发展成类型论中的 Curry–Howard 对应。'
          ],
          formulas: [
            {
              tex: '\\frac{\\begin{array}{c} [A] \\\\ \\vdots \\\\ B \\end{array}}{A \\to B}',
              caption: '蕴含引入规则：解除假设 $A$，得到 $A \\to B$。'
            },
            {
              tex: '\\frac{A \\quad A \\to B}{B}',
              caption: '蕴含消去规则（肯定前件）。'
            },
            {
              tex: '\\frac{A \\quad B}{A \\land B} \\qquad \\frac{A \\land B}{A}',
              caption: '合取的引入与消去规则。'
            }
          ],
          example: [
            '证明 $A \\to (B \\to A)$：假设 $A$，再假设 $B$，由重复规则得 $A$；解除 $B$ 得 $B \\to A$；解除 $A$ 得 $A \\to (B \\to A)$。'
          ],
          related: ['formal-proof', 'sequent-calculus', 'propositions-as-types']
        },
        {
          id: 'sequent-calculus',
          name: '相继式演算',
          brief: '用前提与结论的关系组织推导',
          keywords: ['相继式', 'Gentzen', '结构规则', '切规则'],
          definition: [
            '**相继式**形如 $\\Gamma \\Rightarrow \\Delta$，其中 $\\Gamma, \\Delta$ 是公式的多重集，读作“若 $\\Gamma$ 中所有公式成立，则 $\\Delta$ 中至少一个公式成立”。',
            '相继式演算（LK/LJ）由**初始相继式**（$A \\Rightarrow A$）与**结构规则**（弱化、收缩、交换）及每个联结词的左/右规则组成。LK 对应经典逻辑，LJ 对应直觉主义逻辑。'
          ],
          intuition: [
            '相继式演算把“证明”组织成一棵规则树，而非线性序列。每个联结词都有明确的左规则（在前提中使用它）与右规则（在结论中引入它）。',
            '结构规则控制公式的复制、丢弃与重排。线性逻辑正是通过取消这些结构规则得到的，它把“使用资源的次数”纳入逻辑。'
          ],
          formulas: [
            {
              tex: '\\frac{\\Gamma \\Rightarrow \\Delta, A \\qquad \\Gamma\', A \\Rightarrow \\Delta\'}{\\Gamma, \\Gamma\' \\Rightarrow \\Delta, \\Delta\'}',
              caption: '切规则（cut）：若中间公式 $A$ 被推出又被使用，可将其消去。'
            },
            {
              tex: '\\frac{\\Gamma, A \\Rightarrow \\Delta}{\\Gamma \\Rightarrow \\Delta, \\neg A}',
              caption: '否定的右规则（经典版本）。'
            }
          ],
          example: [
            '在 LK 中证明 $\\Rightarrow A \\lor \\neg A$：先由初始相继式 $A \\Rightarrow A$ 得到 $\\Rightarrow A, \\neg A$，再应用析取右规则得到 $\\Rightarrow A \\lor \\neg A$。'
          ],
          related: ['natural-deduction', 'cut-elimination', 'formal-proof']
        },
        {
          id: 'cut-elimination',
          name: '切消定理',
          brief: '本卷给出命题 LK 的切消证明',
          keywords: ['切消定理', 'Hauptsatz', '子公式性质', '一致性'],
          definition: [
            '命题切消定理（LK）：任意纯命题相继式若有含切证明，也有不含切证明。本条目关联的教材证明限于命题 LK；一阶量词规则及 LJ 的一般切消证明尚未展开。',
            '无切证明具有**子公式性质**：证明中出现的每个公式都是结论的子公式（或其一部分）。这使证明的分析变得可控。'
          ],
          intuition: [
            '命题 LK 切消定理保证含 cut 的可证相继式也有无 cut 证明；本卷的证明还给出子公式性质。',
            '命题 LK 切消定理给出的子公式性质限制无 cut 推导中出现的公式形状，可帮助分析自动证明搜索；本卷证明的范围不含一阶量词。'
          ],
          formulas: [
            {
              tex: '\\Gamma \\Rightarrow \\Delta \\ \\text{在 LK 中可证} \\implies \\Gamma \\Rightarrow \\Delta \\ \\text{有无切证明}',
              caption: '命题 LK 切消定理（本卷证明范围）。'
            },
            {
              tex: '\\text{若 } \\vdash A \\lor B \\text{ 可证，则 } \\vdash A \\text{ 或 } \\vdash B \\text{ 可证}',
              caption: '直觉主义命题逻辑 LJ 的析取性质；经典 LK 不满足这一结论。'
            }
          ],
          example: [
            'Gentzen 对 PA 的相容性证明结合了证明约化与到 $\\varepsilon_0$ 的适当超限归纳，并非只靠纯逻辑的切消定理：若 $\\vdash 0=1$，可对假定证明作序数下降分析；额外的超限归纳排除这种无限下降，从而排除矛盾证明。'
          ],
          related: ['sequent-calculus', 'consistency', 'ordinal-analysis']
        },
        {
          id: 'turing-reduction',
          name: '图灵归约',
          brief: '借助另一问题的解来计算',
          keywords: ['图灵归约', '神谕机', '相对可计算性', '图灵度'],
          definition: [
            '问题 $A$ **图灵归约**到问题 $B$（记 $A \\le_T B$），如果存在一台带有 $B$ 的“神谕”（oracle）的图灵机，能在有限步内判定 $A$。',
            '若 $A \\le_T B$ 且 $B \\le_T A$，则称 $A$ 与 $B$ **图灵等价**，它们属于同一个**图灵度**。'
          ],
          intuition: [
            '图灵归约回答“如果已经有一个解决 $B$ 的黑箱，我能否解决 $A$？”它衡量问题的相对难度，而不要求高效的直接转换。',
            '这与多项式时间归约（Karp 归约）不同：图灵归约不限制时间，是纯可计算性概念。停机问题 $H$ 的所有图灵等价问题构成图灵度 $\\mathbf{0}\'$。'
          ],
          formulas: [
            {
              tex: 'A \\le_T B \\iff A \\text{ 可由带 } B \\text{ 神谕的图灵机判定}',
              caption: '图灵归约的定义。'
            },
            {
              tex: 'A \\equiv_T B \\iff A \\le_T B \\ \\text{且}\\ B \\le_T A',
              caption: '图灵等价，记入同一图灵度。'
            }
          ],
          example: [
            '停机问题 $H$ 与“程序是否输出 1”问题彼此图灵等价；而可判定语言只构成最低图灵度 $\\mathbf{0}$。'
          ],
          related: ['turing-machine', 'decidability', 'halting-problem']
        }
      ]
    },
    {
      id: 'computability',
      name: '可计算性',
      en: 'COMPUTABILITY',
      brief: '算法的存在性与不可判定性',
      color: '#8b7cf6',
      angle: 0,
      topics: [
        {
          id: 'turing-machine',
          name: '图灵机',
          brief: '对机械计算过程的抽象',
          keywords: ['图灵机', '纸带', '状态', '丘奇-图灵论题'],
          definition: [
            '图灵机由一个有限状态集 $Q$、一条无限长的纸带（每格写一个符号）、一个读写头与转移函数 $\\delta: Q \\times \\Gamma \\to Q \\times \\Gamma \\times \\{L, R\\}$ 组成。',
            '机器从初始状态出发，每步读取当前格符号，依据 $\\delta$ 改写符号、移动读写头并改变状态。若进入停机状态，则计算结束。'
          ],
          intuition: [
            '图灵机是对“机械计算”的最简抽象：有限的控制规则 + 无限可擦写的存储。丘奇–图灵论题断言：凡能有效计算的函数，都可由图灵机计算。',
            '它与 λ 演算、递归函数、寄存器机等等价，说明“可计算性”是一个稳健的概念，不依赖于具体形式化方式。'
          ],
          formulas: [
            {
              tex: '\\delta: Q \\times \\Gamma \\rightharpoonup Q \\times \\Gamma \\times \\{L, R\\}',
              caption: '转移函数（部分函数，未定义即停机）。'
            },
            {
              tex: 'M \\text{ 在输入 } w \\text{ 上停机} \\iff \\exists t:\\ M(w) \\text{ 在第 } t \\text{ 步进入停机状态}',
              caption: '停机的形式化定义。'
            }
          ],
          example: [
            '判定 $\\{0^n 1^n : n \\ge 0\\}$ 的图灵机：反复划掉一个 0 和一个 1，若最后两类符号同时用完则接受。'
          ],
          related: ['halting-problem', 'decidability', 'enumerability']
        },
        {
          id: 'decidability',
          name: '可判定性',
          brief: '是否存在总能结束的判定算法',
          keywords: ['可判定', '判定问题', '丘奇-图灵论题', '递归集'],
          definition: [
            '语言 $L \\subseteq \\Sigma^*$ 称为**可判定**的（递归的），如果存在图灵机 $M$，对每个输入 $w$ 都在有限步内停机，并且 $M$ 接受 $w$ 当且仅当 $w \\in L$。',
            '一个判定问题可判定，当且仅当对应的语言可判定。可判定性关心的是“是否存在算法”，不关心算法多快。'
          ],
          intuition: [
            '可判定性是算法存在性的最弱要求：只需要保证在有限时间内给出是/否答案。许多重要问题（停机问题、希尔伯特第十问题）被证明不可判定。',
            '它与可枚举性形成层级：可判定 $\\subsetneq$ 可枚举。可判定问题总能被算法枚举，但反之不成立。'
          ],
          formulas: [
            {
              tex: 'L \\text{ 可判定} \\iff \\exists\\, M\\ \\forall w:\\ M(w) \\text{ 停机且 } [M(w) = \\text{接受} \\iff w \\in L]',
              caption: '可判定性的定义。'
            },
            {
              tex: 'L \\text{ 可判定} \\implies L \\text{ 可枚举}',
              caption: '可判定性强于可枚举性；逆命题不成立。'
            }
          ],
          example: [
            '素数判定可判定（试除法或 AKS 算法）；而“给定程序是否对所有输入停机”不可判定。'
          ],
          related: ['turing-machine', 'halting-problem', 'enumerability']
        },
        {
          id: 'halting-problem',
          name: '停机问题',
          brief: '一般程序的停机性不可判定',
          keywords: ['停机问题', '不可判定', '对角化', '图灵'],
          definition: [
            '停机问题：给定图灵机 $M$ 与输入 $w$，判定 $M$ 是否在 $w$ 上停机。对应语言 $H = \\{\\langle M, w \\rangle : M \\text{ 在 } w \\text{ 上停机}\\}$。',
            '图灵（1936）证明 $H$ 不可判定：不存在对所有输入都能正确判定停机的图灵机。'
          ],
          intuition: [
            '证明用对角线法：假设存在判定器 $T$。构造机器 $D$，在输入 $\\langle M \\rangle$ 上调用 $T$ 判定 $M$ 是否在自身编码上停机，然后做相反的事。把 $D$ 作用于自身，得到矛盾。',
            '停机问题不可判定意味着不存在通用的程序分析工具能回答“这个程序会停吗”。实际工具只能对受限程序或近似回答。'
          ],
          formulas: [
            {
              tex: 'H = \\{\\langle M, w \\rangle : M \\text{ 在输入 } w \\text{ 上停机}\\}',
              caption: '停机问题的语言表示。'
            },
            {
              tex: 'H \\text{ 是不可判定的}',
              caption: '图灵 1936 年的定理。'
            }
          ],
          example: [
            '若能判定停机，就能判定“程序是否输出 1”：修改程序使输出 1 即停机；因此停机判定器可解决许多不可判定问题，这加强了其不可能性。'
          ],
          related: ['turing-machine', 'decidability', 'godel-first']
        },
        {
          id: 'enumerability',
          name: '可枚举性',
          brief: '允许算法逐项列出集合元素',
          keywords: ['可枚举', '递归可枚举', '半可判定', 'Post 定理'],
          definition: [
            '语言 $L$ 称为**递归可枚举**（r.e.）的，如果存在图灵机 $E$，不断输出 $L$ 中的字符串（允许不停机），使得 $L$ 恰好是 $E$ 输出的所有字符串的集合。',
            '等价地，$L$ 可枚举当且仅当存在图灵机 $M$，对输入 $w$：若 $w \\in L$ 则 $M$ 接受并停机；若 $w \\notin L$ 则 $M$ 不停机或不接受（半可判定）。'
          ],
          intuition: [
            '可枚举集合是“能被算法列出”的集合：你可以一个接一个地得到成员，但可能永远等不到某个非成员的确认。',
            'Post 定理：$L$ 可判定当且仅当 $L$ 与它的补集都可枚举。因此停机问题 $H$ 可枚举但不可判定，其补集 $\\overline{H}$ 甚至不可枚举。'
          ],
          formulas: [
            {
              tex: 'L \\text{ 可枚举} \\iff L = \\{\\, w : M \\text{ 在 } w \\text{ 上接受停机}\\,\\}',
              caption: '可枚举与半可判定的等价性。'
            },
            {
              tex: 'L \\text{ 可判定} \\iff L \\text{ 可枚举且 } \\overline{L} \\text{ 可枚举}',
              caption: 'Post 定理。'
            }
          ],
          example: [
            '停机问题 $H$ 可枚举：运行所有 $\\langle M, w \\rangle$ 的模拟，一旦某个停机就输出。但 $H$ 不可判定，所以这不是判定器。'
          ],
          related: ['decidability', 'turing-machine', 'halting-problem']
        }
      ]
    }
  ]
};