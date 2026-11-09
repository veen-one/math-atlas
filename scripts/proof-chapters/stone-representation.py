"""The Boolean subalgebra form of Stone representation."""
def register(P, BASES):
    BASES['def-boolean-algebra']=dict(title='布尔代数的定义',statement='布尔代数为含0、1的有补分配格，运算为有限交∧、有限并∨与补¬。序a≤b指a∧b=a；使用结合、交换、吸收、分配、单位元及互补律。')
    P('stone-boolean-embedding','discrete/boolean-algebras','Stone 表示：布尔代数嵌入幂集代数',r'每个布尔代数 B 都同构于某个幂集代数 P(X) 的布尔子代数；并不声称它同构于整个 P(X)。','axiom-zorn axiom-set def-boolean-algebra','用所有超滤作点；一个元素对应于包含它的超滤集合，超滤足以分离不同元素。',
      r'先设0≠1。B 的真滤子含1、不含0、向上封闭且对有限交封闭。任意非零 a 生成真滤子 {b:a≤b}。包含该滤子的真滤子按包含排序，链的并仍为真滤子，Zorn 给极大真滤子 U。若 b∉U，加入 b 后不能生成真滤子，所以存在 c∈U 满足 c∧b=0；于是 c≤¬b，得到 ¬b∈U。另一方面 b、¬b 不可同时在 U。因此每个 U 对任意 b 恰选 b、¬b 之一。',
      r'令 X 为全部极大真滤子组成的集合，Φ(b)={U∈X:b∈U}。滤子公理给 Φ(0)=空集、Φ(1)=X、Φ(b∧c)=Φ(b)∩Φ(c)，二选一性质给 Φ(¬b)=X\Φ(b)，再由 De Morgan 律得到 Φ(b∨c)=Φ(b)∪Φ(c)。所以像是 P(X) 的布尔子代数，Φ 保持全部布尔运算。',
      r'若 b≠c，则至少一个 b∧¬c、c∧¬b 非零，否则 b≤c 且 c≤b。对这个非零元素选包含它的极大真滤子，便有其中一个属于该滤子、另一个不属于。因此 Φ(b)≠Φ(c)，Φ 单射，并按定义满射到它的像，故为与该子代数的同构。若 B 平凡即0=1，取 X为空集，P(X) 只有一个元素，直接得到同构。$\square$')
