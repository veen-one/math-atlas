/* 数学知识地图 · 逻辑与数学基础（下） */
window.ATLAS.subjects.foundations.branches.push(
  {
    id: 'category-theory',
    name: '范畴论',
    en: 'CATEGORY THEORY',
    brief: '对象、映射与结构之间的联系',
    color: '#9f8ff0',
    angle: -45,
    topics: [
      {
        id: 'objects-morphisms',
        name: '对象与态射',
        brief: '以映射及复合组织结构',
        keywords: ['范畴', '态射', '复合', '单位态射'],
        definition: [
          '一个**范畴** $\\mathcal{C}$ 由对象类 $\\mathrm{Ob}(\\mathcal{C})$ 与态射类 $\\mathrm{Hom}(\\mathcal{C})$ 组成。每个态射 $f$ 有定义域与陪域，记 $f: A \\to B$；对可复合的态射有结合律的复合运算，并且每个对象有单位态射 $\\mathrm{id}_A$。',
          '范畴论把数学结构统一为“对象 + 保结构映射”的形式：集合与函数、群与同态、拓扑空间与连续映射，都是范畴的例子。'
        ],
        intuition: [
          '范畴论不关心对象“内部是什么”，只关心对象之间有哪些映射、如何复合。这种“关系优先”的视角让它能在不同数学领域之间迁移构造与定理。',
          '例如“积”在集合范畴中是笛卡尔积，在群范畴中是直积，在拓扑空间范畴中是乘积拓扑——它们共享同一个普遍性质。'
        ],
        formulas: [
          {
            tex: 'f: A \\to B,\\quad g: B \\to C \\quad \\leadsto \\quad g \\circ f: A \\to C',
            caption: '态射的复合。'
          },
          {
            tex: 'h \\circ (g \\circ f) = (h \\circ g) \\circ f,\\quad \\mathrm{id}_B \\circ f = f = f \\circ \\mathrm{id}_A',
            caption: '结合律与单位律。'
          }
        ],
        example: [
          '集合范畴 $\\mathbf{Set}$：对象是集合，态射是函数；群范畴 $\\mathbf{Grp}$：对象是群，态射是群同态。同一个对象集合可以配不同态射构成不同范畴。'
        ],
        related: ['functors', 'natural-transformations', 'sets-mappings']
      },
      {
        id: 'functors',
        name: '函子',
        brief: '保持结构的范畴间对应',
        keywords: ['函子', '协变', '逆变', '范畴同态'],
        definition: [
          '函子 $F: \\mathcal{C} \\to \\mathcal{D}$ 把 $\\mathcal{C}$ 的对象映为 $\\mathcal{D}$ 的对象，把态射映为态射，并保持定义域、陪域、复合与单位：$F(g \\circ f) = F(g) \\circ F(f)$，$F(\\mathrm{id}_A) = \\mathrm{id}_{F(A)}$。',
          '**协变函子**保持箭头方向；**逆变函子**反转箭头：$F: \\mathcal{C}^{\\mathrm{op}} \\to \\mathcal{D}$，满足 $F(g \\circ f) = F(f) \\circ F(g)$。'
        ],
        intuition: [
          '函子是范畴之间的“同态”，可以理解为“在保持结构的前提下搬运整个理论”。',
          '基本群 $\\pi_1$ 是从拓扑空间范畴到群范畴的函子：连续映射 $f: X \\to Y$ 诱导群同态 $f_*: \\pi_1(X) \\to \\pi_1(Y)$，于是拓扑问题可以转化为代数问题。'
        ],
        formulas: [
          {
            tex: 'F(g \\circ f) = F(g) \\circ F(f),\\quad F(\\mathrm{id}_A) = \\mathrm{id}_{F(A)}',
            caption: '函子的两条公理。'
          },
          {
            tex: '\\pi_1: \\mathbf{Top}^{\\mathrm{h}} \\to \\mathbf{Grp},\\quad (X, x_0) \\mapsto \\pi_1(X, x_0)',
            caption: '基本群函子：把带基点的空间映为基本群。'
          }
        ],
        example: [
          '幂集函子 $\\mathcal{P}: \\mathbf{Set} \\to \\mathbf{Set}$ 把集合映为其幂集，把函数 $f: A \\to B$ 映为像映射 $S \\mapsto f(S)$，是协变函子。'
        ],
        related: ['natural-transformations', 'objects-morphisms', 'geometry/fundamental-group']
      },
      {
        id: 'natural-transformations',
        name: '自然变换',
        brief: '比较两个函子的统一方式',
        keywords: ['自然变换', '自然性方图', '自然同构'],
        definition: [
          '设 $F, G: \\mathcal{C} \\to \\mathcal{D}$ 是函子。自然变换 $\\eta: F \\Rightarrow G$ 给每个对象 $A$ 指定一个态射 $\\eta_A: F(A) \\to G(A)$，使得对每个态射 $f: A \\to B$，有 $G(f) \\circ \\eta_A = \\eta_B \\circ F(f)$（自然性方图交换）。',
          '若每个 $\\eta_A$ 都是同构，则称 $\\eta$ 为**自然同构**。'
        ],
        intuition: [
          '自然变换是“函子之间的态射”：它不只是逐对象地给映射，还要求这些映射与所有箭头相容。自然性方图交换是范畴论版本的“不依赖于坐标”。',
          '例如对有限维向量空间，$V \\to V^{**}$ 的求值映射是自然同构，而 $V \\to V^*$ 只是一般同构，需要额外选择基——这就是“自然”的含义。'
        ],
        formulas: [
          {
            tex: '\\begin{array}{ccc} F(A) & \\xrightarrow{\\eta_A} & G(A) \\\\ {\\scriptstyle F(f)}\\downarrow & & \\downarrow{\\scriptstyle G(f)} \\\\ F(B) & \\xrightarrow{\\eta_B} & G(B) \\end{array}',
            caption: '自然性方图：两条路径的复合相等。'
          },
          {
            tex: '\\eta \\text{ 自然同构} \\iff \\forall A,\\ \\eta_A \\text{ 是同构}',
            caption: '自然同构的逐对象刻画。'
          }
        ],
        example: [
          '给每个集合 $A$ 指派“反转二元组”的映射 $A \\times B \\to B \\times A$，$(a,b) \\mapsto (b,a)$，对 $A$ 与 $B$ 都是自然同构。'
        ],
        related: ['functors', 'adjunction', 'objects-morphisms']
      },
      {
        id: 'adjunction',
        name: '伴随',
        brief: '用自然对应联系两种构造',
        keywords: ['伴随', '单位', '余单位', '自由-遗忘'],
        definition: [
          '函子 $F: \\mathcal{C} \\to \\mathcal{D}$ 与 $G: \\mathcal{D} \\to \\mathcal{C}$ 构成**伴随** $F \\dashv G$，如果存在自然同构 $\\mathrm{Hom}_{\\mathcal{D}}(F(A), B) \\cong \\mathrm{Hom}_{\\mathcal{C}}(A, G(B))$，对任意 $A \\in \\mathcal{C}, B \\in \\mathcal{D}$ 成立。',
          '伴随配有单位 $\\eta: \\mathrm{Id}_{\\mathcal{C}} \\Rightarrow G \\circ F$ 与余单位 $\\varepsilon: F \\circ G \\Rightarrow \\mathrm{Id}_{\\mathcal{D}}$，满足三角恒等式。'
        ],
        intuition: [
          '伴随表达“自由构造”与“遗忘结构”之间的普遍对应：从集合 $A$ 到群 $B$ 的同态，等同于从 $A$ 到 $B$ 的底层集合的映射。自由群函子是遗忘函子的左伴随。',
          '伴随是范畴论中最重要的概念之一：它统一了自由对象、积与余积、极限、模与张量积等构造。'
        ],
        formulas: [
          {
            tex: '\\mathrm{Hom}_{\\mathcal{D}}(F(A), B) \\cong \\mathrm{Hom}_{\\mathcal{C}}(A, G(B))',
            caption: '伴随的 Hom 集自然同构定义。'
          },
          {
            tex: '\\varepsilon \\circ F\\eta = \\mathrm{id}_F,\\quad G\\varepsilon \\circ \\eta G = \\mathrm{id}_G',
            caption: '三角恒等式。'
          }
        ],
        example: [
          '自由群函子 $F: \\mathbf{Set} \\to \\mathbf{Grp}$ 与遗忘函子 $U: \\mathbf{Grp} \\to \\mathbf{Set}$ 满足 $F \\dashv U$：从集合 $S$ 到群 $G$ 的群同态，等价于从 $S$ 到 $G$ 底层集合的任意函数。'
        ],
        related: ['functors', 'natural-transformations', 'limits-colimits']
      },
      {
        id: 'limits-colimits',
        name: '极限与余极限',
        brief: '用普遍性质刻画常见构造',
        keywords: ['极限', '余极限', '积', '拉回', '普遍性质'],
        definition: [
          '给定图 $D: J \\to \\mathcal{C}$，$D$ 的**极限**是一个对象 $L$ 连同锥映射 $\\pi_j: L \\to D(j)$，满足对所有锥都存在唯一的分解映射（普遍性质）。余极限与此对偶，箭头反向。',
          '常见极限：积（离散图）、拉回（pullback）；常见余极限：余积、推出（pushout）、余等化子。'
        ],
        intuition: [
          '极限与余极限是“最优的逼近”：积是“最一般的配对对象”，拉回是“最一般的相容对象”。它们不依赖具体构造，只由普遍性质刻画。',
          '在集合范畴中，积是笛卡尔积，余积是不交并；在群范畴中，积是直积，余积是自由积；在拓扑空间范畴中，极限是带初始/终末拓扑的构造。'
        ],
        formulas: [
          {
            tex: '\\mathrm{Hom}(X, \\varprojlim D) \\cong \\varprojlim \\mathrm{Hom}(X, D(-))',
            caption: '极限的 Hom 表示。'
          },
          {
            tex: 'A \\times_B C \\longrightarrow C \\quad \\text{是拉回}',
            caption: '拉回：同时映射到 $A$ 与 $C$，并在 $B$ 上一致的最一般对象。'
          }
        ],
        example: [
          '集合的拉回 $A \\times_B C = \\{(a,c) : f(a) = g(c)\\}$；群的自由积是群范畴中的余积。'
        ],
        related: ['adjunction', 'objects-morphisms', 'functors']
      }
    ]
  },
  {
    id: 'incompleteness',
    name: '公理与不完备性',
    en: 'AXIOMS & INCOMPLETENESS',
    brief: '形式系统的能力与边界',
    color: '#b8a8f8',
    angle: -90,
    topics: [
      {
        id: 'axiomatic-method',
        name: '公理化方法',
        brief: '明确起点及允许的推导规则',
        keywords: ['公理化', '公理', '推理规则', '形式系统'],
        definition: [
          '**公理化方法**从一个形式语言出发，选定一组**公理**（不证而接受的基本陈述）与**推理规则**，把一门数学理论组织成可推导的命题系统。',
          '欧几里得《几何原本》是早期典范；希尔伯特《几何基础》与 ZFC 公理化集合论则是现代形式化的代表。'
        ],
        intuition: [
          '公理化把数学理论变成“若公理成立，则定理成立”的条件性知识。公理本身不必“显然为真”，只需要相容且足够表达目标结构。',
          '公理化使理论可以比较：通过翻译与解释，可以研究一个公理系统能否在另一个系统中实现，进而比较相容性与强度。'
        ],
        formulas: [
          {
            tex: 'T = (\\Sigma,\\ \\mathrm{Ax},\\ \\mathrm{Rules}),\\quad T \\vdash \\varphi',
            caption: '一个公理系统由语言、公理集与推理规则组成。'
          }
        ],
        example: [
          '非欧几何通过修改欧几里得第五公设（平行公设）得到，说明公理并非“绝对真理”，而是构造理论的起点。'
        ],
        related: ['zfc-axioms', 'formal-proof', 'consistency']
      },
      {
        id: 'godel-first',
        name: '第一不完备性',
        brief: '足够强的相容公理化理论有不可判定句',
        keywords: ['哥德尔不完备性', '哥德尔编码', '不可判定', '自指'],
        definition: [
          '哥德尔第一不完备性定理（1931）：任何足以表达基本算术（如包含 PA 或 Q）的**有效公理化**且**相容**的理论 $T$，都存在一个句子 $G_T$，使得 $T \\nvdash G_T$ 且 $T \\nvdash \\neg G_T$。',
          '该句子在标准自然数模型中为真，但 $T$ 无法证明它。这就是“存在不可判定的真命题”。'
        ],
        intuition: [
          '哥德尔用**编码**把“证明”变成算术命题，再构造自指句 $G_T$：“本句在 $T$ 中不可证”。若 $T$ 能证明 $G_T$，则 $T$ 证明了假命题（因为 $G_T$ 说的是自己不可证），违背可靠性；若 $T$ 证明 $\\neg G_T$，则 $T$ 能证明 $G_T$（由可证性条件），矛盾。',
          '这推翻了希尔伯特纲领“所有数学真理都能被有限公理系统判定”的目标。数学真理与形式可证性之间存在不可消除的鸿沟。'
        ],
        formulas: [
          {
            tex: 'T \\supseteq \\mathrm{PA},\\ T \\text{ 相容且有效公理化} \\implies \\exists G_T:\\ T \\nvdash G_T \\ \\text{且}\\ T \\nvdash \\neg G_T',
            caption: '第一不完备性定理。'
          },
          {
            tex: 'G_T \\leftrightarrow \\neg \\mathrm{Prov}_T(\\ulcorner G_T \\urcorner)',
            caption: '哥德尔句的自指结构：$G_T$ 等价于“$G_T$ 在 $T$ 中不可证”。'
          }
        ],
        example: [
          'PA 的哥德尔句 $G_{\\mathrm{PA}}$ 在标准模型中为真（因为若为假则 PA 可证明它，矛盾），但 PA 无法证明它。'
        ],
        related: ['godel-second', 'halting-problem', 'consistency']
      },
      {
        id: 'godel-second',
        name: '第二不完备性',
        brief: '在相应条件下不能证明自身相容',
        keywords: ['第二不完备性', '一致性陈述', '可证性谓词', 'Hilbert 纲领'],
        definition: [
          '哥德尔第二不完备性定理：若 $T$ 是包含 PA 的有效公理化理论，则 $T$ 不能在自身内部证明其相容性陈述 $\\mathrm{Con}(T)$，除非 $T$ 本身不相容。',
          '形式化地：$T \\nvdash \\mathrm{Con}(T)$（在 $T$ 相容的前提下）。'
        ],
        intuition: [
          '第一不完备性给出不可判定句；第二不完备性进一步指出：那个句子本质上就是“$T$ 相容”，因此相容性本身不可在系统内证明。',
          '这解释了为什么 Gentzen 证明 PA 相容性时必须使用 PA 无法形式化的超限归纳（到 $\\varepsilon_0$）：强度必须从外部借入。'
        ],
        formulas: [
          {
            tex: 'T \\supseteq \\mathrm{PA},\\ T \\text{ 相容} \\implies T \\nvdash \\mathrm{Con}(T)',
            caption: '第二不完备性定理。'
          },
          {
            tex: '\\mathrm{Con}(T) \\equiv \\neg \\mathrm{Prov}_T(\\ulcorner 0=1 \\urcorner)',
            caption: '相容性陈述的形式化：$T$ 不证明矛盾。'
          }
        ],
        example: [
          'PA 无法证明自身相容；ZFC 同样无法证明自身相容。任何足够强的理论都需要更强的元理论来保证相容性。'
        ],
        related: ['godel-first', 'ordinal-analysis', 'consistency']
      },
      {
        id: 'consistency',
        name: '相容性',
        brief: '系统中不能同时证明矛盾两端',
        keywords: ['相容性', '一致性', '矛盾', '模型'],
        definition: [
          '理论 $T$ 称为**相容**（一致），如果不存在公式 $\\varphi$ 使得 $T \\vdash \\varphi$ 且 $T \\vdash \\neg \\varphi$；等价地，$T \\nvdash \\bot$。',
          '由完备性定理，$T$ 相容当且仅当 $T$ 有模型。因此相容性是语法性质，也可以通过构造模型来证明。'
        ],
        intuition: [
          '一个不相容的理论可以证明任何命题（爆炸原理 ex falso），因此毫无信息量。相容性是理论能够“谈论什么”的最低门槛。',
          '相容性无法由理论自身证明（第二不完备性），只能通过外部模型或更强的元理论来保证。'
        ],
        formulas: [
          {
            tex: 'T \\text{ 相容} \\iff T \\nvdash \\bot \\iff \\exists\\, \\mathcal{M}:\\ \\mathcal{M} \\models T',
            caption: '相容性的语法与语义等价表述。'
          },
          {
            tex: 'T \\vdash \\bot \\implies T \\vdash \\varphi\\ \\text{（对任意 } \\varphi\\text{）}',
            caption: '爆炸原理：不相容的理论证明一切。'
          }
        ],
        example: [
          '群论公理相容，因为存在模型（如 $\\mathbb{Z}/2\\mathbb{Z}$）；而“存在有限群且元素个数既是偶数又是奇数”的公理系统不相容。'
        ],
        related: ['relative-consistency', 'godel-second', 'soundness-completeness']
      },
      {
        id: 'relative-consistency',
        name: '相对相容性',
        brief: '在一个理论中比较另一理论的相容性',
        keywords: ['相对相容性', '解释', '翻译', '力迫'],
        definition: [
          '称理论 $T_1$ **相对相容**于 $T_2$，如果 $T_2$ 的相容性蕴含 $T_1$ 的相容性。通常通过在 $T_2$ 中构造 $T_1$ 的模型或解释来证明。',
          '例如：欧几里得几何相对于实数算术相容；ZFC + CH 相对于 ZFC 相容（哥德尔 $L$）。'
        ],
        intuition: [
          '相对相容性是比较理论强度的基本工具：如果 $T_1$ 能在 $T_2$ 中解释，那么 $T_2$ 一旦相容，$T_1$ 也相容。',
          'Cohen 的力迫法给出反向结果：ZFC + ¬CH 相对相容于 ZFC，于是 CH 独立。相对相容性不能给出绝对相容性——那需要更强的元理论。'
        ],
        formulas: [
          {
            tex: '\\mathrm{Con}(T_2) \\implies \\mathrm{Con}(T_1)',
            caption: '相对相容性的定义。'
          },
          {
            tex: '\\mathrm{Con}(\\mathrm{ZFC}) \\implies \\mathrm{Con}(\\mathrm{ZFC} + \\mathrm{CH})',
            caption: '由哥德尔可构成宇宙 $L$ 得到的相对相容性。'
          }
        ],
        example: [
          '把欧氏几何的点、线、面解释为 $\\mathbb{R}^3$ 中的点、直线、平面，可把几何的相容性归约到实数理论的相容性。'
        ],
        related: ['consistency', 'independence', 'axiomatic-method']
      }
    ]
  },
  {
    id: 'type-theory',
    name: '类型论',
    en: 'TYPE THEORY',
    brief: '类型、构造与形式化证明',
    color: '#c9b8ff',
    angle: -135,
    topics: [
      {
        id: 'propositions-as-types',
        name: '命题即类型',
        brief: '把命题对应为特定类型的项',
        keywords: ['命题即类型', 'Curry-Howard', '证明项', '类型检查'],
        definition: [
          '**Curry–Howard 对应**：命题对应类型，命题的证明对应类型的项。若 $A$ 与 $B$ 是命题（类型），则 $A \\to B$ 对应函数类型，$A \\land B$ 对应积类型，$A \\lor B$ 对应和类型。',
          '于是“证明 $A$”等价于“构造类型 $A$ 的一个项”，类型检查就是证明检验。'
        ],
        intuition: [
          '这个对应把逻辑与计算统一起来：自然演绎中的引入/消去规则正好对应 λ 演算中的构造/应用规则。',
          '证明助理（Coq、Lean、Agda）正是基于这一思想：用户写项，系统检查类型；通过类型检查即完成证明验证。'
        ],
        formulas: [
          {
            tex: 'A \\land B \\;\\longleftrightarrow\\; A \\times B,\\qquad A \\lor B \\;\\longleftrightarrow\\; A + B',
            caption: '合取对应积类型，析取对应和类型。'
          },
          {
            tex: 'A \\to B \\;\\longleftrightarrow\\; A \\to B \\text{（函数类型）}',
            caption: '蕴含对应函数类型。'
          }
        ],
        example: [
          '命题 $A \\to A$ 对应恒等函数 $\\lambda x.\\, x$；证明就是构造这个项，类型检查器验证其类型为 $A \\to A$。'
        ],
        related: ['simple-types', 'natural-deduction', 'proof-assistants']
      },
      {
        id: 'simple-types',
        name: '简单类型',
        brief: '用类型约束函数与表达式',
        keywords: ['简单类型', 'λ 演算', '函数类型', '类型判断'],
        definition: [
          '简单类型 λ 演算（Church）从基本类型出发，用函数类型构造 $A \\to B$。项由变元、抽象 $\\lambda x.\\, t$ 与应用 $t\\, u$ 构成，类型判断 $\\Gamma \\vdash t : A$ 由规则给出。',
          '它对应直觉主义命题逻辑的蕴含片段：可类型化的项正好对应可证明的命题。'
        ],
        intuition: [
          '简单类型是程序语言类型系统的基础：它规定每个表达式属于哪个类型，从而排除“把函数当数字用”这类错误。',
          '简单类型 λ 演算的归一化性质（强归一化）保证了每个项都能化简到正规形，这对应证明的切消。'
        ],
        formulas: [
          {
            tex: '\\frac{\\Gamma, x: A \\vdash t : B}{\\Gamma \\vdash (\\lambda x.\\, t) : A \\to B}',
            caption: '抽象规则（对应蕴含引入）。'
          },
          {
            tex: '\\frac{\\Gamma \\vdash t : A \\to B \\quad \\Gamma \\vdash u : A}{\\Gamma \\vdash t\\, u : B}',
            caption: '应用规则（对应蕴含消去）。'
          }
        ],
        example: [
          '项 $\\lambda x.\\, \\lambda y.\\, x$ 的类型为 $A \\to (B \\to A)$，正好对应命题 $A \\to (B \\to A)$。'
        ],
        related: ['propositions-as-types', 'dependent-types', 'inductive-types']
      },
      {
        id: 'dependent-types',
        name: '依赖类型',
        brief: '类型可以依赖于项的取值',
        keywords: ['依赖类型', 'Π 类型', 'Σ 类型', '类型族'],
        definition: [
          '依赖类型允许类型的定义依赖于具体的项。**Π 类型** $\\Pi_{x:A} B(x)$ 表示“对每个 $x: A$，返回 $B(x)$ 中元素的函数”；**Σ 类型** $\\Sigma_{x:A} B(x)$ 表示“存在一个 $x: A$ 且 $B(x)$ 中的元素”。',
          '依赖类型系统可以表达“长度为 $n$ 的向量”“对每个群 $G$ 的定理”等精细结构。'
        ],
        intuition: [
          '普通类型“$\\mathrm{Vector}$”无法区分长度；依赖类型“$\\mathrm{Vec}(A, n)$”把长度 $n$ 放进类型里，使编译器能检查越界。',
          '在逻辑上，Π 类型对应全称量词，Σ 类型对应存在量词；依赖类型论因此能形式化相当大一部分数学。'
        ],
        formulas: [
          {
            tex: '\\Pi_{x:A} B(x) \\quad \\text{（全称量词 / 依赖函数）}',
            caption: 'Π 类型：依赖函数类型。'
          },
          {
            tex: '\\Sigma_{x:A} B(x) \\quad \\text{（存在量词 / 依赖对）}',
            caption: 'Σ 类型：依赖对类型。'
          }
        ],
        example: [
          '排序函数可以赋予类型 $\\Pi_{n:\\mathbb{N}} \\mathrm{Vec}(A, n) \\to \\mathrm{Vec}(A, n)$，保证输入输出长度相同；若实现错误，类型检查会失败。'
        ],
        related: ['simple-types', 'inductive-types', 'proof-assistants']
      },
      {
        id: 'inductive-types',
        name: '归纳类型',
        brief: '递归描述自然数与数据结构',
        keywords: ['归纳类型', '构造子', '递归子', '归纳原理'],
        definition: [
          '归纳类型由**构造子**的有限列表定义。例如自然数 $\\mathbb{N}$ 由 $\\mathrm{zero} : \\mathbb{N}$ 与 $\\mathrm{succ} : \\mathbb{N} \\to \\mathbb{N}$ 生成；每个构造子给出生成该类型元素的唯一方式。',
          '与归纳类型配套的是**递归子**（recursor），它实现结构递归，并对应归纳证明原理。'
        ],
        intuition: [
          '归纳类型把数学归纳法“内置”到类型系统中：只要证明基例与归纳步，就得到对所有归纳构造元素成立。',
          '列表、树、语法树都是用归纳类型定义的；证明助理中的数据类型与程序语言中的代数数据类型都源自这一概念。'
        ],
        formulas: [
          {
            tex: '\\mathbb{N} ::= \\mathrm{zero} \\mid \\mathrm{succ}\\ \\mathbb{N}',
            caption: '自然数的归纳定义。'
          },
          {
            tex: '\\mathrm{rec}_{\\mathbb{N}} : P(0) \\to (\\Pi_{n:\\mathbb{N}} P(n) \\to P(\\mathrm{succ}(n))) \\to \\Pi_{n:\\mathbb{N}} P(n)',
            caption: '自然数递归子，对应数学归纳法。'
          }
        ],
        example: [
          '列表类型 $\\mathrm{List}(A) ::= \\mathrm{nil} \\mid \\mathrm{cons}\\ A\\ (\\mathrm{List}(A))$；长度函数由递归子定义。'
        ],
        related: ['simple-types', 'dependent-types', 'proof-assistants']
      },
      {
        id: 'proof-assistants',
        name: '证明助理',
        brief: '让计算机逐步核验形式证明',
        keywords: ['证明助理', 'Coq', 'Lean', '形式化数学'],
        definition: [
          '**证明助理**是基于类型论的交互式软件系统，用户在其中构造形式证明，系统逐步检查每一步的类型正确性，最终保证定理成立（相对于底层公理与实现的可信性）。',
          '代表系统包括 Coq（Rocq）、Lean、Agda、Isabelle/HOL。'
        ],
        intuition: [
          '证明助理把数学证明变成可编译的代码：证明脚本通过类型检查即被验证，不依赖审稿人的信任。',
          '大规模形式化项目（如四色定理、奇点消解、Liquid Tensor Experiment）展示了其能力；但形式化成本仍然很高，需要大量人力。'
        ],
        formulas: [
          {
            tex: '\\text{证明成功} \\iff \\text{类型检查通过}',
            caption: '证明助理的验证原则（de Bruijn 准则）。'
          }
        ],
        example: [
          '在 Lean 4 中，`theorem add_zero (n : ℕ) : n + 0 = n := by simp` 由系统检查并接受，无需人工复核每一步。'
        ],
        related: ['propositions-as-types', 'dependent-types', 'inductive-types']
      }
    ]
  },
  {
    id: 'model-theory',
    name: '模型论',
    en: 'MODEL THEORY',
    brief: '形式语言与数学结构的关系',
    color: '#a995f5',
    angle: 180,
    topics: [
      {
        id: 'structure-interpretation',
        name: '结构与解释',
        brief: '给语言符号指定数学含义',
        keywords: ['结构', '解释', '论域', '赋值'],
        definition: [
          '一阶语言 $L$ 的**结构** $\\mathcal{M}$ 由一个非空论域 $M$、每个常量符号的解释、每个函数符号的解释与每个谓词符号的解释组成。',
          '给定结构后，公式的真值还依赖于对自由变元的**赋值** $s: \\mathrm{Var} \\to M$。结构加解释把纯符号变成有意义的数学陈述。'
        ],
        intuition: [
          '同一个形式语言可以有无数种解释：符号“$+$”在自然数上表示加法，在字符串上可以表示拼接，在模 $n$ 下表示模加。',
          '模型论研究“哪些结构满足哪些句子”，从而用逻辑工具分析代数、分析与数论中的结构（如非标准分析、量词消去）。'
        ],
        formulas: [
          {
            tex: '\\mathcal{M} = (M,\\ c^{\\mathcal{M}},\\ f^{\\mathcal{M}},\\ R^{\\mathcal{M}})',
            caption: '一阶结构由论域与各符号的解释组成。'
          },
          {
            tex: '\\mathcal{M} \\models \\varphi[s]',
            caption: '公式 $\\varphi$ 在结构 $\\mathcal{M}$ 中、赋值 $s$ 下为真。'
          }
        ],
        example: [
          '语言 $\\{<\\}$ 的结构 $\\mathcal{M} = (\\mathbb{R}, <)$ 与 $\\mathcal{N} = (\\mathbb{Q}, <)$ 都是稠密线性序，但论域不同。'
        ],
        related: ['satisfaction', 'formal-language', 'classification-of-models']
      },
      {
        id: 'satisfaction',
        name: '满足关系',
        brief: '判断命题在结构中是否成立',
        keywords: ['满足关系', '真值', '赋值', 'Tarski 语义'],
        definition: [
          '满足关系 $\\mathcal{M} \\models \\varphi[s]$ 由 Tarski 递归定义：原子公式按解释计算，联结词按真值表处理，量词 $\\forall x$ 要求对所有 $a \\in M$ 的赋值都满足。',
          '句子（无自由变元的公式）的真值不依赖赋值。模型论的中心研究对象是“句子在结构中的真假”。'
        ],
        intuition: [
          'Tarski 语义把“真”严格定义为递归可检验的条件，避免了“真”的模糊性。它是模型论与形式语义学的基石。',
          '满足关系连接语法与语义：$\\mathcal{M} \\models T$ 表示结构 $\\mathcal{M}$ 是理论 $T$ 的模型。'
        ],
        formulas: [
          {
            tex: '\\mathcal{M} \\models \\forall x\\, \\varphi[s] \\iff \\forall a \\in M:\\ \\mathcal{M} \\models \\varphi[s[x \\mapsto a]]',
            caption: '全称量词的 Tarski 语义。'
          },
          {
            tex: '\\mathcal{M} \\models \\exists x\\, \\varphi[s] \\iff \\exists a \\in M:\\ \\mathcal{M} \\models \\varphi[s[x \\mapsto a]]',
            caption: '存在量词的 Tarski 语义。'
          }
        ],
        example: [
          '在 $(\\mathbb{N}, +, \\times)$ 中，句子 $\\forall x\\, \\exists y\\, (y = x + 1)$ 为真；在有限域中不成立。'
        ],
        related: ['structure-interpretation', 'classification-of-models', 'compactness']
      },
      {
        id: 'classification-of-models',
        name: '模型的分类',
        brief: '按结构性质研究一类模型',
        keywords: ['模型分类', '同构', '初等子结构', '范畴性'],
        definition: [
          '对给定理论 $T$，研究其模型类的结构：同构、初等嵌入、饱和性、稳定性等。**范畴性**指理论在某个基数下所有模型同构。',
          '模型论分类理论（Shelah）通过稳定性理论刻画哪些理论有“可分类”的模型类。'
        ],
        intuition: [
          '模型分类回答“同一理论的不同模型能有多不同”。例如代数闭域理论在每个不可数基数下都是范畴的（同基数模型同构），而群论则远非范畴。',
          '分类理论为代数几何（模型论视角）、微分方程（微分代数）等提供统一工具。'
        ],
        formulas: [
          {
            tex: 'T \\text{ 在基数 } \\kappa \\text{ 下范畴} \\iff T \\text{ 的所有基数为 } \\kappa \\text{ 的模型同构}',
            caption: '范畴性的定义。'
          },
          {
            tex: '\\mathcal{M} \\preceq \\mathcal{N} \\iff \\mathcal{M} \\subseteq \\mathcal{N} \\text{ 且对任意公式真值一致}',
            caption: '初等子结构关系。'
          }
        ],
        example: [
          '无端点稠密线性序理论（DLO）在可数基数下范畴：$(\\mathbb{Q}, <)$ 是唯一可数模型（同构意义下）。'
        ],
        related: ['satisfaction', 'structure-interpretation', 'compactness']
      },
      {
        id: 'compactness',
        name: '紧致性定理',
        brief: '有限部分可满足则整体可满足',
        keywords: ['紧致性定理', '超积', '非标准模型', '有限可满足'],
        definition: [
          '紧致性定理：一阶理论 $T$ 有模型，当且仅当它的每个有限子集都有模型。',
          '它是哥德尔完全性定理的推论，也可以用超积或 Henkin 构造直接证明。'
        ],
        intuition: [
          '紧致性说一阶逻辑无法用有限公理强制“无穷”或“无限大元素”这类全局性质：只要每个有限片段可满足，整体就可满足。',
          '经典应用：在 $\\mathbb{R}$ 的标准理论中加入常量 $c$ 与无限多条公理 $c > 1, c > 2, \\dots$，每个有限子集都有模型，因此存在包含“无穷大数”的非标准实数模型。'
        ],
        formulas: [
          {
            tex: '\\forall\\, \\text{有限 } T_0 \\subseteq T,\\ T_0 \\text{ 有模型} \\implies T \\text{ 有模型}',
            caption: '紧致性定理。'
          },
          {
            tex: 'T \\cup \\{c > n : n \\in \\mathbb{N}\\} \\text{ 有非标准模型}',
            caption: '非标准分析的紧致性构造。'
          }
        ],
        example: [
          '紧致性推出：若理论 $T$ 有任意大的有限模型，则 $T$ 有无限模型。因为对每个 $n$，加入“至少有 $n$ 个元素”的句子后有限可满足。'
        ],
        related: ['satisfaction', 'soundness-completeness', 'elementary-equivalence']
      }
    ]
  }
);