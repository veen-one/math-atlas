"""Rice's theorem for extensional partial-computable-function properties."""
def register(P, BASES):
    P('rice-function-properties','foundations/halting-problem foundations/decidability','Rice 定理（部分可计算函数语义性质）',r'设 P 是部分可计算函数的一类，非空且不是全部此类函数。若成员资格仅依赖所计算的部分函数，则不存在算法对每个程序编号 e 判定其部分函数 φ_e 是否属于 P。','halting-diagonal axiom-computation','用“先等待指定程序停机，再计算固定函数”的程序，把停机与否编码为两个不同语义成员状态。',
      r'令 ⊥ 为处处未定义的部分函数，可由无限循环程序计算。先设 ⊥∉P，由非空性固定一个部分可计算 f∈P 及其程序。给任意待判停机实例 (e,w)，有效生成程序 Q_(e,w)：在输入 x 上先模拟 e(w)；若该模拟停机，再运行 f(x)；否则永远等待。',
      r'该程序生成只需把固定代码、e,w 与模拟步骤写入有限程序，故可计算。如果 e(w) 停机，则 Q 在每个 x 上与 f 的定义、未定义及返回值都一致，计算 f∈P；如果 e(w) 不停机，则 Q 计算 ⊥∉P。因此 P 的假想判定器能判定任意停机实例，违反停机不可判定。',
      r'若 ⊥∈P，因 P 非全体，固定 f∉P，采用相同程序。此时停机对应不属于 P、不停机对应属于 P。将假想判定器的布尔答案取反，仍可判定停机，矛盾。两种情况穷尽，所以不存在该判定器。性质的语义性必不可少：程序文本长度等语法性质不受本定理约束。$\square$')
