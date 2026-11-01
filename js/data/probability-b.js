/* 数学知识地图 · 概率与统计（下） */
window.ATLAS.subjects.probability.branches.push(
  {
    id: 'statistical-inference',
    name: '统计推断',
    en: 'STATISTICAL INFERENCE',
    brief: '估计、检验与不确定性量化',
    color: '#f4b0bc',
    angle: -50,
    topics: [
      {
        id: 'point-estimation',
        name: '点估计',
        brief: '由样本给出参数的估计值',
        keywords: ['点估计', '无偏性', '相合性', '估计量'],
        definition: [
          '**点估计**用统计量 $\\hat\\theta(X_1, \\dots, X_n)$ 估计未知参数 $\\theta$。评价标准：无偏性、相合性、有效性、充分性。',
          '无偏：$\\mathbb{E}[\\hat\\theta] = \\theta$；相合：$\\hat\\theta \\xrightarrow{P} \\theta$；有效性：方差越小越好。'
        ],
        intuition: [
          '点估计是“用一个数猜参数”：用样本均值估计总体均值，用样本比例估计概率。',
          '无偏不代表准确：无偏估计也可能方差很大；偏差-方差权衡是统计估计的核心。'
        ],
        formulas: [
          {
            tex: '\\hat\\theta = \\bar X = \\frac{1}{n} \\sum_{i=1}^{n} X_i',
            caption: '样本均值作为总体均值的估计。'
          },
          {
            tex: '\\mathbb{E}[\\hat\\theta] = \\theta',
            caption: '无偏性。'
          },
          {
            tex: '\\mathrm{MSE}(\\hat\\theta) = \\mathrm{Var}(\\hat\\theta) + \\mathrm{Bias}(\\hat\\theta)^2',
            caption: '均方误差分解。'
          }
        ],
        example: [
          '估计正态分布均值：样本均值 $\\bar X$ 无偏且方差最小（在所有无偏估计中）；估计方差时用 $\\frac{1}{n-1}\\sum(X_i - \\bar X)^2$ 才是无偏的。'
        ],
        related: ['likelihood', 'confidence-intervals', 'bias-variance']
      },
      {
        id: 'confidence-intervals',
        name: '置信区间',
        brief: '按重复抽样覆盖率构造区间',
        keywords: ['置信区间', '置信水平', '覆盖率', 'bootstrap'],
        definition: [
          '**置信区间**是以给定概率（置信水平 $1 - \\alpha$）覆盖真实参数的区间。频率派解释：重复抽样中约 $1 - \\alpha$ 的区间包含真值。',
          '正态均值区间：$\\bar X \\pm z_{1-\\alpha/2} \\frac{\\sigma}{\\sqrt n}$（$\\sigma$ 已知）或 $t$ 区间（$\\sigma$ 未知）。'
        ],
        intuition: [
          '置信区间是“参数的可能范围”：95% 置信区间意味着如果重复实验很多次，95% 的区间会包含真值。',
          '注意：置信区间不表示“参数有 95% 概率在区间内”（那是贝叶斯可信区间的解释）。'
        ],
        formulas: [
          {
            tex: '\\bar X \\pm z_{1-\\alpha/2} \\frac{\\sigma}{\\sqrt n}',
            caption: '正态均值的 $1-\\alpha$ 置信区间。'
          },
          {
            tex: 'P(\\theta \\in [L(X), U(X)]) = 1 - \\alpha',
            caption: '覆盖率的频率解释。'
          }
        ],
        example: [
          '样本均值 10，标准差 2，样本量 100：95% 置信区间约为 $10 \\pm 1.96 \\times 0.2 = [9.61, 10.39]$。'
        ],
        related: ['point-estimation', 'hypothesis-testing', 'posterior-distribution']
      },
      {
        id: 'hypothesis-testing',
        name: '假设检验',
        brief: '在明确模型下检验统计假设',
        keywords: ['假设检验', '原假设', 'p 值', '功效'],
        definition: [
          '**假设检验**设定原假设 $H_0$ 与备择假设 $H_1$，用样本判断是否拒绝 $H_0$。两类错误：第一类（拒真）概率 $\\alpha$，第二类（取伪）概率 $\\beta$。',
          '$p$ 值是在 $H_0$ 下观察到当前或更极端结果的概率；$p < \\alpha$ 时拒绝 $H_0$。'
        ],
        intuition: [
          '假设检验是“反证法 + 概率”：假设 $H_0$ 成立，若数据出现的概率极小，则怀疑 $H_0$。',
          '$p$ 值不是“$H_0$ 为真的概率”，也不是效应大小；显著性不等于实际重要性。'
        ],
        formulas: [
          {
            tex: 'p = P(\\text{数据或更极端} \\mid H_0)',
            caption: '$p$ 值的定义。'
          },
          {
            tex: '\\text{功效} = 1 - \\beta = P(\\text{拒绝 } H_0 \\mid H_1 \\text{ 真})',
            caption: '检验功效。'
          }
        ],
        example: [
          'A/B 测试：$H_0$：两组转化率相同。若 $p = 0.03 < 0.05$，拒绝 $H_0$，认为差异显著；但需结合效应大小判断实际意义。'
        ],
        related: ['confidence-intervals', 'likelihood', 'experimental-design']
      },
      {
        id: 'likelihood',
        name: '似然',
        brief: '把观测数据视为参数的函数',
        keywords: ['似然', '最大似然', 'Fisher 信息', '充分统计量'],
        definition: [
          '**似然函数** $L(\\theta) = p(x \\mid \\theta)$ 把观测数据 $x$ 视为参数 $\\theta$ 的函数。最大似然估计（MLE）选择使似然最大的参数。',
          'Fisher 信息 $I(\\theta) = -\\mathbb{E}[\\partial^2 \\log p(x \\mid \\theta)/\\partial \\theta^2]$ 度量数据对参数的敏感度，Cramér–Rao 界给出估计方差下界。'
        ],
        intuition: [
          '似然是“在给定数据下，哪个参数最可能产生这些数据”。MLE 是统计推断最常用的方法。',
          '似然不是概率：它对 $\\theta$ 积分不为 1；但似然比与充分统计量是统计推断的核心工具。'
        ],
        formulas: [
          {
            tex: '\\hat\\theta_{\\mathrm{MLE}} = \\arg\\max_\\theta L(\\theta) = \\arg\\max_\\theta \\log p(x \\mid \\theta)',
            caption: '最大似然估计。'
          },
          {
            tex: '\\mathrm{Var}(\\hat\\theta) \\ge \\frac{1}{n I(\\theta)}',
            caption: 'Cramér–Rao 下界。'
          }
        ],
        example: [
          '伯努利试验 $n$ 次成功 $k$ 次：似然 $L(p) = p^k (1-p)^{n-k}$，MLE 为 $\\hat p = k/n$。'
        ],
        related: ['point-estimation', 'posterior-distribution', 'hypothesis-testing']
      },
      {
        id: 'experimental-design',
        name: '实验设计',
        brief: '通过随机化与控制识别效应',
        keywords: ['实验设计', '随机化', '区组', '析因设计'],
        definition: [
          '**实验设计**规划实验以有效估计因果效应：随机分配处理、控制混杂、选择样本量与区组。',
          '基本原则：随机化、重复、区组/局部控制。析因设计同时研究多个因素及其交互作用。'
        ],
        intuition: [
          '随机化是因果推断的基石：随机分配处理使处理组与对照组在期望上可比，消除混杂。',
          '好的实验设计能在有限样本下提高精度与功效；观察性研究无法随机化，需要额外的因果方法。'
        ],
        formulas: [
          {
            tex: 'Y_i = \\alpha + \\tau D_i + \\varepsilon_i',
            caption: '随机实验的基本模型（$D_i$ 为处理指示）。'
          },
          {
            tex: '\\hat\\tau = \\bar Y_{\\text{处理}} - \\bar Y_{\\text{对照}}',
            caption: '处理效应估计。'
          }
        ],
        example: [
          'A/B 测试随机分配用户到新旧界面，比较转化率；随机化保证两组在未观测特征上可比。'
        ],
        related: ['hypothesis-testing', 'causal-inference', 'confounding']
      },
      {
        id: 'identification-conditions',
        name: '识别条件',
        brief: '判断何时可由数据推出因果量',
        keywords: ['识别', '可识别性', '后门准则', '因果'],
        definition: [
          '因果量**可识别**，如果它能由观测数据的分布唯一确定。识别条件规定在什么假设下可以从数据推出因果效应。',
          '后门准则：若变量集 $Z$ 阻断了处理与结果之间的所有后门路径，则调整 $Z$ 可识别因果效应。'
        ],
        intuition: [
          '识别是“数据 + 假设 = 因果结论”：没有假设，观测数据只能给出相关，不能给出因果。',
          '后门准则是选择调整变量的图形化方法：调整混杂变量，阻断虚假路径。'
        ],
        formulas: [
          {
            tex: 'P(y \\mid do(x)) = \\sum_z P(y \\mid x, z) P(z)',
            caption: '后门调整公式。'
          },
          {
            tex: 'P(y \\mid do(x)) = P(y \\mid x)\\ \\text{（无混杂时）}',
            caption: '无混杂时相关即因果。'
          }
        ],
        example: [
          '研究药物效果：年龄同时影响用药与康复（混杂），按年龄分层调整后可识别药物效应（若满足后门准则）。'
        ],
        related: ['interventions-effects', 'confounding', 'causal-graphs']
      }
    ]
  },
  {
    id: 'bayesian-methods',
    name: '贝叶斯方法',
    en: 'BAYESIAN METHODS',
    brief: '先验、似然与后验的更新',
    color: '#ec9fac',
    angle: -140,
    topics: [
      {
        id: 'prior-distribution',
        name: '先验分布',
        brief: '用概率表达观察数据前的信息',
        keywords: ['先验', '主观概率', '无信息先验', '先验选择'],
        definition: [
          '**先验分布** $p(\\theta)$ 表示在观察数据前对参数的信念。先验可以是主观的、基于历史数据的，或无信息先验（如均匀分布、Jeffreys 先验）。',
          '先验的选择影响后验，尤其在数据量小时；数据量大时先验影响减弱（Bernstein–von Mises 现象）。'
        ],
        intuition: [
          '先验是“经验或信念的数学化”：医生对新药有效性的初始判断、工程师对部件寿命的预期。',
          '先验不是“随便定的”：无信息先验试图让数据说话，但不同参数化下的无信息先验可能不同（Jeffreys 先验解决这一问题）。'
        ],
        formulas: [
          {
            tex: '\\theta \\sim p(\\theta)',
            caption: '先验分布。'
          },
          {
            tex: 'p(\\theta) \\propto 1',
            caption: '均匀先验（无信息先验的一种）。'
          }
        ],
        example: [
          '估计硬币正面概率：先验 $\\mathrm{Beta}(2, 2)$ 表达“大概公平但不确定”；观察到 8 正 2 反后，后验为 $\\mathrm{Beta}(10, 4)$。'
        ],
        related: ['posterior-distribution', 'conjugate-priors', 'hierarchical-models']
      },
      {
        id: 'posterior-distribution',
        name: '后验分布',
        brief: '结合先验与似然更新判断',
        keywords: ['后验', 'Bayes 公式', '后验推断', '更新'],
        definition: [
          '**后验分布** $p(\\theta \\mid x) = \\frac{p(x \\mid \\theta)p(\\theta)}{p(x)}$ 是观察数据后对参数的更新信念。',
          '后验是贝叶斯推断的核心：点估计（后验均值/众数）、区间估计（可信区间）与预测都基于后验。'
        ],
        intuition: [
          '后验是“先验 + 数据 = 更新后的信念”：先验表达初始判断，似然表达数据信息，后验是二者的合成。',
          '贝叶斯更新可以迭代：一次实验的后验可以作为下一次实验的先验。'
        ],
        formulas: [
          {
            tex: 'p(\\theta \\mid x) = \\frac{p(x \\mid \\theta)\\,p(\\theta)}{p(x)}',
            caption: 'Bayes 公式。'
          },
          {
            tex: 'p(\\theta \\mid x) \\propto p(x \\mid \\theta)\\,p(\\theta)',
            caption: '后验正比于似然乘先验。'
          }
        ],
        example: [
          '抛硬币 10 次得 7 次正面：均匀先验 $\\mathrm{Beta}(1,1)$ 下，后验为 $\\mathrm{Beta}(8, 4)$，后验均值 $2/3$。'
        ],
        related: ['prior-distribution', 'conjugate-priors', 'posterior-predictive']
      },
      {
        id: 'conjugate-priors',
        name: '共轭先验',
        brief: '使更新后仍属同一分布族',
        keywords: ['共轭先验', 'Beta-Binomial', 'Normal-Normal', '解析解'],
        definition: [
          '若先验与后验属于同一分布族，则称该先验为似然的**共轭先验**。共轭先验使贝叶斯更新有解析形式。',
          '典型例子：Beta 是先验共轭于二项似然；Normal 共轭于已知方差的正态似然；Gamma 共轭于泊松。'
        ],
        intuition: [
          '共轭先验是“数学上的方便”：更新只需修改参数，不需要数值积分。',
          '共轭先验并不总是合适；现代贝叶斯常用 MCMC 处理非共轭情形。'
        ],
        formulas: [
          {
            tex: '\\theta \\sim \\mathrm{Beta}(\\alpha, \\beta),\\quad x \\mid \\theta \\sim \\mathrm{Bin}(n, \\theta)',
            caption: 'Beta–Binomial 共轭对。'
          },
          {
            tex: '\\theta \\mid x \\sim \\mathrm{Beta}(\\alpha + k,\\ \\beta + n - k)',
            caption: '后验参数更新。'
          }
        ],
        example: [
          'Beta(2,2) 先验 + 8 正 2 反 → Beta(10,4) 后验；参数只需相加，计算极简。'
        ],
        related: ['prior-distribution', 'posterior-distribution', 'hierarchical-models']
      },
      {
        id: 'posterior-predictive',
        name: '后验预测',
        brief: '把参数不确定性传递到预测',
        keywords: ['后验预测', '预测分布', 'MCMC', '不确定性'],
        definition: [
          '**后验预测分布** $p(\\tilde x \\mid x) = \\int p(\\tilde x \\mid \\theta) p(\\theta \\mid x)\\,d\\theta$ 对新观测做预测，同时考虑参数不确定性。',
          '与把点估计代入预测不同，后验预测分布更宽，反映参数的不确定性。'
        ],
        intuition: [
          '预测时不仅要知道“最可能的参数”，还要知道参数有多不确定。后验预测把两者都纳入。',
          '贝叶斯预测天然给出不确定性区间，适合决策与风险评估。'
        ],
        formulas: [
          {
            tex: 'p(\\tilde x \\mid x) = \\int p(\\tilde x \\mid \\theta)\\,p(\\theta \\mid x)\\,d\\theta',
            caption: '后验预测分布。'
          }
        ],
        example: [
          '用 Beta(10,4) 后验预测下一次抛硬币：$P(\\text{正面}) = \\mathbb{E}[\\theta \\mid x] = 10/14 \\approx 0.714$。'
        ],
        related: ['posterior-distribution', 'conjugate-priors', 'hierarchical-models']
      },
      {
        id: 'hierarchical-models',
        name: '层级模型',
        brief: '把不同层次的参数共同建模',
        keywords: ['层级模型', '收缩', '经验 Bayes', '随机效应'],
        definition: [
          '**层级模型**为参数本身指定先验分布，而先验的参数（超参数）又有先验，形成多层结构。',
          '层级模型实现“收缩”（shrinkage）：小样本组向总体均值收缩，减少极端估计。'
        ],
        intuition: [
          '层级模型适合分组数据：每个学校/医院有自己的参数，但都来自共同总体，互相借力。',
          '收缩是“用总体信息稳定小组估计”：样本量小的组向总体平均靠拢，避免过拟合噪声。'
        ],
        formulas: [
          {
            tex: 'y_{ij} \\sim N(\\theta_j, \\sigma^2),\\quad \\theta_j \\sim N(\\mu, \\tau^2)',
            caption: '正态层级模型。'
          },
          {
            tex: '\\hat\\theta_j^{\\mathrm{Bayes}} = w_j \\bar y_j + (1 - w_j)\\mu',
            caption: '收缩估计（$w_j$ 随样本量增大）。'
          }
        ],
        example: [
          '棒球击中率：小样本球员的估计向总体平均收缩，避免“打了几次全中”就被高估。'
        ],
        related: ['prior-distribution', 'conjugate-priors', 'applied/statistical-mechanics']
      }
    ]
  },
  {
    id: 'statistical-learning',
    name: '统计学习',
    en: 'STATISTICAL LEARNING',
    brief: '预测、泛化与数据中的规律',
    color: '#e993a2',
    angle: -95,
    topics: [
      {
        id: 'regression-classification',
        name: '回归与分类',
        brief: '预测数值或类别标签',
        keywords: ['回归', '分类', '线性回归', '逻辑回归'],
        definition: [
          '**回归**预测连续值（如房价）；**分类**预测离散标签（如垃圾邮件）。线性回归拟合 $y = X\\beta + \\varepsilon$；逻辑回归用 sigmoid 输出概率。',
          '损失函数：回归用平方损失，分类用交叉熵。'
        ],
        intuition: [
          '回归是“拟合趋势”：用一条直线（或曲面）描述输入与输出的关系。',
          '分类是“划边界”：逻辑回归输出概率，决策树/神经网络学习非线性边界。'
        ],
        formulas: [
          {
            tex: '\\hat y = X\\hat\\beta,\\quad \\hat\\beta = (X^\\top X)^{-1} X^\\top y',
            caption: '最小二乘线性回归。'
          },
          {
            tex: 'P(y = 1 \\mid x) = \\frac{1}{1 + e^{-w^\\top x}}',
            caption: '逻辑回归。'
          }
        ],
        example: [
          '房价预测：特征为面积、房龄、地段，线性回归拟合价格；垃圾邮件分类：词频特征 + 逻辑回归输出概率。'
        ],
        related: ['regularization', 'bias-variance', 'loss-risk']
      },
      {
        id: 'regularization',
        name: '正则化',
        brief: '限制模型复杂度以改善泛化',
        keywords: ['正则化', 'L1', 'L2', '交叉验证'],
        definition: [
          '**正则化**在损失函数中加入惩罚项，限制模型复杂度：$\\min_\\theta \\mathcal{L}(\\theta) + \\lambda R(\\theta)$。',
          '$L_2$（岭回归）收缩参数；$L_1$（LASSO）产生稀疏解；弹性网结合二者。'
        ],
        intuition: [
          '正则化是“奥卡姆剃刀”的数学化：偏好简单的模型，防止过拟合。',
          '正则化参数 $\\lambda$ 控制复杂度与拟合的权衡，通常用交叉验证选择。'
        ],
        formulas: [
          {
            tex: '\\min_\\theta \\mathcal{L}(\\theta) + \\lambda \\|\\theta\\|_2^2',
            caption: '$L_2$ 正则化。'
          },
          {
            tex: '\\min_\\theta \\mathcal{L}(\\theta) + \\lambda \\|\\theta\\|_1',
            caption: '$L_1$ 正则化（稀疏）。'
          }
        ],
        example: [
          '线性回归加 $L_2$ 正则得到岭回归，解决多重共线性；加 $L_1$ 得到 LASSO，可做特征选择。'
        ],
        related: ['regression-classification', 'bias-variance', 'applied/regularized-inversion']
      },
      {
        id: 'bias-variance',
        name: '偏差与方差',
        brief: '分析预测误差的不同来源',
        keywords: ['偏差-方差', '过拟合', '欠拟合', '泛化'],
        definition: [
          '**偏差-方差分解**：期望预测误差 = 偏差$^2$ + 方差 + 不可约噪声。偏差衡量模型系统性偏离，方差衡量对训练集的敏感度。',
          '高偏差（欠拟合）：模型太简单；高方差（过拟合）：模型太复杂。'
        ],
        intuition: [
          '偏差-方差是“简单 vs 复杂”的权衡：直线拟合非线性数据偏差大，高阶多项式方差大。',
          '正则化、集成方法、更多数据都能降低方差；增加模型复杂度降低偏差但增加方差。'
        ],
        formulas: [
          {
            tex: '\\mathbb{E}[(y - \\hat f(x))^2] = \\mathrm{Bias}^2 + \\mathrm{Var} + \\sigma^2',
            caption: '偏差-方差分解。'
          }
        ],
        example: [
          '用 1 次多项式拟合正弦曲线：高偏差（欠拟合）；用 15 次多项式：高方差（过拟合），在训练集上完美但在测试集上很差。'
        ],
        related: ['regularization', 'loss-risk', 'training-validation']
      },
      {
        id: 'loss-risk',
        name: '损失与风险',
        brief: '衡量预测误差及其期望',
        keywords: ['损失函数', '经验风险', '泛化误差', '风险最小化'],
        definition: [
          '**损失函数** $\\ell(y, \\hat y)$ 度量预测与真实值的差异；**风险**是损失的期望 $R(f) = \\mathbb{E}[\\ell(Y, f(X))]$。',
          '经验风险最小化（ERM）用训练集平均损失近似风险；泛化误差是新样本上的期望损失。'
        ],
        intuition: [
          '损失决定“什么算错”：平方损失对大误差敏感，绝对损失对异常值稳健，交叉熵适合概率预测。',
          '训练损失低不代表泛化好：过拟合模型记住训练数据，但在新数据上误差大。'
        ],
        formulas: [
          {
            tex: 'R(f) = \\mathbb{E}_{(X, Y)}[\\ell(Y, f(X))]',
            caption: '风险。'
          },
          {
            tex: '\\hat R_n(f) = \\frac{1}{n} \\sum_{i=1}^{n} \\ell(y_i, f(x_i))',
            caption: '经验风险。'
          }
        ],
        example: [
          '平方损失下，最优预测是条件均值 $\\mathbb{E}[Y \\mid X]$；绝对损失下，最优预测是条件中位数。'
        ],
        related: ['bias-variance', 'regression-classification', 'training-validation']
      },
      {
        id: 'training-validation',
        name: '训练与验证',
        brief: '区分拟合数据与检验泛化',
        keywords: ['训练集', '验证集', '交叉验证', '泛化'],
        definition: [
          '数据通常分为**训练集**（拟合模型）、**验证集**（调超参数）与**测试集**（最终评估泛化）。交叉验证在有限数据上更稳健地估计泛化误差。',
          '$k$ 折交叉验证把数据分成 $k$ 份，轮流用 $k-1$ 份训练、1 份验证。'
        ],
        intuition: [
          '训练集是“练习题”，验证集是“模拟考”，测试集是“高考”。用测试集调参会导致乐观偏差。',
          '交叉验证充分利用数据，适合小样本；时间序列需要按时间切分，避免未来信息泄漏。'
        ],
        formulas: [
          {
            tex: '\\mathrm{CV}_{(k)} = \\frac{1}{k} \\sum_{i=1}^{k} \\mathrm{Err}_i',
            caption: '$k$ 折交叉验证误差。'
          }
        ],
        example: [
          '10 折交叉验证：数据分成 10 份，每次用 9 份训练、1 份验证，平均 10 次误差作为泛化估计。'
        ],
        related: ['bias-variance', 'loss-risk', 'regularization']
      }
    ]
  },
  {
    id: 'causal-inference',
    name: '因果推断',
    en: 'CAUSAL INFERENCE',
    brief: '在明确假设下识别因果效应',
    color: '#f0a0ae',
    angle: 0,
    topics: [
      {
        id: 'interventions-effects',
        name: '干预与因果效应',
        brief: '研究主动改变因素会怎样',
        keywords: ['干预', '因果效应', 'do 算子', 'ATE'],
        definition: [
          '**干预** $do(X = x)$ 表示主动把变量 $X$ 设为 $x$，切断其原有原因。因果效应是干预前后结果的差异。',
          '平均处理效应（ATE）：$\\mathbb{E}[Y(1) - Y(0)]$，其中 $Y(x)$ 是干预 $X = x$ 下的潜在结果。'
        ],
        intuition: [
          '“相关不等于因果”：冰淇淋销量与溺水人数相关，但干预冰淇淋销量不会减少溺水（共同原因是夏天）。',
          'do 算子强调“主动改变”，与条件概率 $P(Y \\mid X = x)$ 不同；后者只是观察到 $X = x$。'
        ],
        formulas: [
          {
            tex: '\\mathrm{ATE} = \\mathbb{E}[Y(1) - Y(0)]',
            caption: '平均处理效应。'
          },
          {
            tex: 'P(y \\mid do(x)) \\ne P(y \\mid x)\\ \\text{（一般情形）}',
            caption: '干预与观察的区别。'
          }
        ],
        example: [
          '随机分配药物：处理组与对照组的平均结果差是 ATE 的无偏估计；观察性研究需要调整混杂。'
        ],
        related: ['potential-outcomes', 'confounding', 'identification-conditions']
      },
      {
        id: 'confounding',
        name: '混杂',
        brief: '共同原因可能扭曲观察关联',
        keywords: ['混杂', '共同原因', '后门路径', '调整'],
        definition: [
          '**混杂变量**同时影响处理与结果，制造虚假关联。混杂是观察性研究的主要障碍。',
          '在因果图中，混杂表现为处理与结果之间的“后门路径”；调整混杂变量（分层、回归、匹配）可阻断后门路径。'
        ],
        intuition: [
          '混杂是“第三个变量捣乱”：咖啡与肺癌相关，但吸烟同时影响两者；不调整吸烟，会误判咖啡有害。',
          '随机化消除混杂（在期望上），观察性研究需要识别并调整所有混杂变量。'
        ],
        formulas: [
          {
            tex: 'Z \\to X,\\quad Z \\to Y,\\quad X \\to Y',
            caption: '混杂结构：$Z$ 是 $X$ 与 $Y$ 的共同原因。'
          },
          {
            tex: 'P(y \\mid do(x)) = \\sum_z P(y \\mid x, z) P(z)',
            caption: '调整 $Z$ 后的因果效应（后门公式）。'
          }
        ],
        example: [
          '研究教育对收入的影响：家庭背景同时影响教育与收入，是混杂；调整家庭背景后，教育效应估计更可信。'
        ],
        related: ['interventions-effects', 'potential-outcomes', 'causal-graphs']
      },
      {
        id: 'potential-outcomes',
        name: '潜在结果',
        brief: '比较不同干预下可能的结果',
        keywords: ['潜在结果', '反事实', 'SUTVA', '因果推断'],
        definition: [
          '**潜在结果**框架（Rubin 因果模型）：每个个体有 $Y(1)$（处理下）与 $Y(0)$（对照下）两个潜在结果，因果效应为 $Y(1) - Y(0)$。',
          '根本问题：每个个体只能观察到一个潜在结果，另一个是反事实。因果推断依赖假设（如可忽略性、SUTVA）来识别效应。'
        ],
        intuition: [
          '潜在结果是“如果……会怎样”的形式化：一个人吃药后的结果与不吃药后的结果，但只能看到其中一个。',
          '因果推断的核心挑战是“缺失的反事实”；随机实验通过可比性填补这一缺失。'
        ],
        formulas: [
          {
            tex: '\\tau_i = Y_i(1) - Y_i(0)',
            caption: '个体因果效应（不可直接观测）。'
          },
          {
            tex: '\\mathrm{ATE} = \\mathbb{E}[Y(1)] - \\mathbb{E}[Y(0)]',
            caption: '平均因果效应。'
          }
        ],
        example: [
          '药物试验：处理组的平均结果与对照组的平均结果之差估计 ATE，前提是随机分配使两组可比。'
        ],
        related: ['interventions-effects', 'confounding', 'identification-conditions']
      },
      {
        id: 'causal-graphs',
        name: '因果图',
        brief: '表达变量之间的因果假设',
        keywords: ['因果图', 'DAG', 'd-分离', '后门准则'],
        definition: [
          '**因果图**是有向无环图（DAG），节点是变量，边表示因果关系。因果图编码假设，并用 d-分离判断条件独立性。',
          '后门准则与前门准则基于图结构选择调整变量，识别因果效应。'
        ],
        intuition: [
          '因果图是“因果假设的地图”：它让假设显式化，从而可检验、可讨论。',
          'd-分离是“路径阻断”：调整合适的变量集合，可以阻断所有虚假路径，留下因果路径。'
        ],
        formulas: [
          {
            tex: 'X \\perp\\!\\!\\perp Y \\mid Z\\ \\text{（d-分离）}',
            caption: '条件独立性。'
          },
          {
            tex: 'P(y \\mid do(x)) = \\sum_z P(y \\mid x, z) P(z)',
            caption: '后门调整（$Z$ 满足后门准则）。'
          }
        ],
        example: [
          '图 $Z \\to X, Z \\to Y, X \\to Y$：后门路径 $X \\leftarrow Z \\to Y$ 被 $Z$ 阻断，调整 $Z$ 可识别 $X \\to Y$ 的效应。'
        ],
        related: ['confounding', 'identification-conditions', 'interventions-effects']
      }
    ]
  }
);