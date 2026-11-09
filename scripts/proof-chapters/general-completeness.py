"""Set-sized first-order completeness from compactness and the countable case."""
def register(P, BASES):
    P('fol-completeness-general','foundations/soundness-completeness foundations/consistency','任意集合大小一阶语言的完备性与模型存在',r'对标准经典一阶演算，任意集合大小语言中的句子理论 T 与句子 φ 满足 T⊨φ 当且仅当 T⊢φ。特别地，T 相容当且仅当 T 有非空模型。','compactness-arbitrary-language fol-completeness-compactness fol-soundness def-hilbert-fol','紧致性使语义蕴含只需有限前提，有限公式只含有限个非逻辑符号，于是可应用可数语言版本。',
      r'可靠性已对逐行有限证明验证，所用语言的基数不影响该归纳，所以 T⊢φ 推出 T⊨φ。反向若 T⊨φ，则 T∪{¬φ} 无模型。紧致性给它的某个有限子集无模型；取其中来自 T 的有限集 Δ，将 ¬φ 加入后仍无模型，故 Δ⊨φ。',
      r'Δ 与 φ 是有限多个有限公式，所用非逻辑符号只有有限个。令 L₀ 为这些符号组成的子语言，变量符号按演算约定可数。任何非空 L₀ 结构都能扩成原语言结构：新增常元取固定元素，新增函数取常函数，新增关系取空关系，原有符号保持。因此若 L₀ 中 Δ 不蕴含 φ，该反模型可扩成原语言反模型，矛盾。于是 L₀ 中也有 Δ⊨φ。',
      r'可数语言的完备性给 L₀ 演算中有限证明 Δ⊢φ。这份证明在原语言中逐行仍有效，且 Δ⊆T，所以 T⊢φ。若 T 无模型，则语义上 T⊨⊥，完备性给 T⊢⊥，不相容；若 T 有模型，可靠性排除其证明矛盾。两边合并即得模型存在等价。$\square$')
    P('classical-explosion','foundations/consistency foundations/formal-proof','经典一阶演算的爆炸原理',r'若句子理论 T 不相容，即 T⊢⊥，则对每个句子 φ 都有 T⊢φ。若 T 同时证明 ψ 与 ¬ψ，也有同样结论。','def-hilbert-fol','矛盾蕴含任意句子是经典命题重言式，实例化后用肯定前件规则。',
      r'固定任意 φ。⊥ 表示固定矛盾句，因此 ⊥→φ 是经典命题重言式的代入实例，是本章 Hilbert 演算公理。由 T⊢⊥，一次 modus ponens 得 T⊢φ。',
      r'若 T⊢ψ 且 T⊢¬ψ，命题公理实例 ψ→(¬ψ→⊥) 与两次 modus ponens 先给 T⊢⊥，再用前一步。这里讨论标准经典逻辑；不把结论扩到允许矛盾但不爆炸的其他演算。$\square$')
