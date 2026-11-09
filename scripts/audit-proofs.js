const fs=require('fs');
const path=require('path');
const vm=require('vm');
const root=path.resolve(__dirname,'..');
const context={window:{}};
vm.createContext(context);
for(const m of fs.readFileSync(path.join(root,'index.html'),'utf8').matchAll(/<script src="(js\/data\/[^"]+)"/g)) {
  vm.runInContext(fs.readFileSync(path.join(root,m[1]),'utf8'),context);
}
const atlas=context.window.ATLAS;
const book=atlas.proofBook;
const topics=[];
const claims=[];
for(const [sid,subject] of Object.entries(atlas.subjects))for(const branch of subject.branches)for(const topic of branch.topics){
  const key=sid+'/'+topic.id;
  const proofs=book.proofs.filter(p=>p.topics.includes(key));
  topics.push({key,name:topic.name,subject:subject.name,branch:branch.name,proofIds:proofs.map(p=>p.id),coverage:proofs.length?'partial':'not-started',theoremReview:'pending'});
  const extra=atlas.extras[key]||{};
  const fields={definition:topic.definition,intuition:topic.intuition,example:topic.example,formulaCaptions:topic.formulas.map(f=>f.caption),extraInsight:[extra.insight],extraExamples:extra.examples};
  for(const [field,values] of Object.entries(fields))for(const paragraph of values||[]){
    for(const text of (paragraph||'').split(/(?<=[。！？])/u)) {
      if(/定理|引理|原理|猜想/.test(text)) claims.push({topic:key,field,text,status:'needs-statement-review'});
    }
  }
}
const reviewFile=path.join(root,'docs/proofs/claim-reviews.json');
const reviews=fs.existsSync(reviewFile)?JSON.parse(fs.readFileSync(reviewFile,'utf8')).reviews:[];
const proofIds=new Set(book.proofs.map(p=>p.id));
for(const review of reviews){
  const matches=claims.filter(c=>c.topic===review.topic&&c.field===review.field&&c.text===review.text);
  if(matches.length!==1)throw new Error('Stale or ambiguous claim review: '+review.text);
  if(!review.proofIds.length||review.proofIds.some(id=>!proofIds.has(id)))throw new Error('Missing reviewed proof');
  Object.assign(matches[0],review);
}
const pending=claims.filter(c=>c.status==='needs-statement-review').length;
fs.writeFileSync(path.join(root,'docs/proofs/topic-inventory.json'),JSON.stringify({proofCount:book.proofs.length,topics},null,2)+'\n');
fs.writeFileSync(path.join(root,'docs/proofs/claim-audit.json'),JSON.stringify({note:'关键词提取的候选句，未经数学断言去重；不等于全部定理的完整清单。需人工提取准确假设、结论并对应证明。',claims},null,2)+'\n');
const covered=topics.filter(t=>t.proofIds.length).length;
const lines=['# 全仓证明覆盖与剩余工作','',`当前收录 **${book.proofs.length} 个命题证明**，关联 **${covered}/319 个知识点**；按全部定理完成的知识点记为 **0/319**。已有命题不等于该知识点全部定理完成。`,'',`从正文和补充例子提取了 ${claims.length} 条含“定理、引理、原理、猜想”的候选句，其中 ${claims.length-pending} 条已有逐句核定记录，${pending} 条待审。这不是已经去重、穷尽全部数学断言的目录；公式中的未命名断言仍需另行审查。`,'','## 仍需完成','',
`1. ${claims.length-pending} 条候选句已核定并关联具体证明，${pending} 条仍待审查；另需核对公式中未命名的断言。逐句审阅记录在 claim-reviews.json，以原句精确匹配，原句变化或证明丢失时生成失败。`,
'2. 每个主题尚有未枚举或未证明命题，故 319 个主题全部标为“部分展开”；不得把一个相关定理等同于该主题全部完成。',
'3. 仍未在本卷证明的主要深层定理：一般自伴算子的谱测度定理、Gromov 辛不挤压定理，以及完整椭圆曲线模性定理。模性条目只证明“假设模性对应后局部系数相等”这一推论。',
'4. 已提供黎曼映射定理（含正规族、零点计数、平方根与极值构造）、紧自伴算子谱分解（含不可分核）、素数定理与有限方差独立同分布中心极限定理的证明链；后者的 Gaussian 平滑引理另假设均值零和方差一。',
'5. 第一不完备性条目使用标准模型可靠性及显式编码假设；第二不完备性条目条件于 D1–D3。尚未把这些编码条件对具体 PA/Q 全部形式化展开。',
'6. 命题切消证明仅限命题 LK；它不证明一阶逻辑的切消定理。欧拉多面体公式证明明确采用 Jordan 曲线定理作为拓扑基础。',
'7. 所有证明仍需独立数学复核；程序只检查依赖与构建，不验证数学推演。开放问题（如 P 与 NP、黎曼猜想）不可能被伪造为已证。','','## 逐点状态','','| 学科 | 知识点 | 本卷已展开命题数 | 全主题状态 |','|---|---|---:|---|'];
for(const topic of topics)lines.push(`| ${topic.subject} | ${topic.name} | ${topic.proofIds.length} | ${topic.proofIds.length?'部分展开':'待扩写'} |`);
fs.writeFileSync(path.join(root,'docs/proofs/coverage.md'),lines.join('\n')+'\n');
const progress=['# 教材与证明进度','',
`已写证明：**${book.proofs.length} 条**；明确基础：**${Object.keys(book.bases).length} 项**。`,
`知识点：**${topics.length} 个**，均已有相关证明；**0 个通过全部定理验收，${topics.length} 个尚未通过全部定理验收**。`,
`候选断言：**${claims.length} 条**；已逐句核定 **${claims.length-pending} 条**，待审 **${pending} 条**。`,'',
'待审断言不等于缺失证明：有些已有证明但尚未逐句核对。全部定理清单仍未穷尽，因此缺失证明的精确总数目前未知。候选句的核定也不代表其所属主题已完成全部定理。','',
'| 学科 | 知识点 | 已核定断言 | 待审断言 |','|---|---:|---:|---:|'];
for(const [sid,subject] of Object.entries(atlas.subjects)){
  const group=claims.filter(c=>c.topic.startsWith(sid+'/'));
  const count=topics.filter(t=>t.key.startsWith(sid+'/')).length;
  const todo=group.filter(c=>c.status==='needs-statement-review').length;
  progress.push(`| ${subject.name} | ${count} | ${group.length-todo} | ${todo} |`);
}
progress.push('','主要未证的大型结果和证明范围限制见 [逐点覆盖与剩余工作](coverage.md)。程序检查不等于独立数学复核。');
fs.writeFileSync(path.join(root,'docs/proofs/progress.md'),progress.join('\n')+'\n');
console.log(`Audited ${topics.length} topics: ${book.proofs.length} proofs cover ${covered} topics; ${pending} candidate sentences await statement review; ${claims.length-pending} reviewed with proofs`);

const readmePath=path.join(root,'README.md');
const readme=fs.readFileSync(readmePath,'utf8');
fs.writeFileSync(readmePath,readme.replace(/证明第一卷收录 \d+ 个定理或命题，关联 \d+ 个知识点。/,`证明第一卷收录 ${book.proofs.length} 个定理或命题，关联 ${covered} 个知识点。`));
