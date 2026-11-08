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
fs.writeFileSync(path.join(root,'docs/proofs/topic-inventory.json'),JSON.stringify({proofCount:book.proofs.length,topics},null,2)+'\n');
fs.writeFileSync(path.join(root,'docs/proofs/claim-audit.json'),JSON.stringify({note:'关键词提取的候选句，未经数学断言去重；不等于全部定理的完整清单。需人工提取准确假设、结论并对应证明。',claims},null,2)+'\n');
const covered=topics.filter(t=>t.proofIds.length).length;
const lines=['# 全仓证明覆盖与剩余工作','',`当前收录 **${book.proofs.length} 个命题证明**，关联 **${covered}/319 个知识点**；按全部定理完成的知识点记为 **0/319**。已有命题不等于该知识点全部定理完成。`,'',`从正文和补充例子提取了 ${claims.length} 条含“定理、引理、原理、猜想”的候选句，待人工逐条核定。这不是已经去重、穷尽全部数学断言的目录；公式中的未命名断言仍需另行审查。`,'','## 仍需完成','',
'1. 逐条拆分候选句及公式中的断言，统一定理名称、符号、假设和结论。',
'2. 补齐全部未覆盖主题及已有主题中尚未证明的命题，建立不循环的前置依赖。',
'3. 黎曼映射、谱定理、素数定理、伽罗瓦基本定理、中心极限定理、辛不挤压等大型定理须分别形成完整章节，不以特例替代一般命题。',
'4. P 与 NP、黎曼猜想等开放问题不得生成虚构证明；仅证明相关已知命题并标明未解部分。',
'5. 对全部证明作独立数学复核；程序检查只验证结构和依赖，不证明推导正确。','','## 逐点状态','','| 学科 | 知识点 | 本卷已展开命题数 | 全主题状态 |','|---|---|---:|---|'];
for(const topic of topics)lines.push(`| ${topic.subject} | ${topic.name} | ${topic.proofIds.length} | ${topic.proofIds.length?'部分展开':'待扩写'} |`);
fs.writeFileSync(path.join(root,'docs/proofs/coverage.md'),lines.join('\n')+'\n');
console.log(`Audited ${topics.length} topics: ${book.proofs.length} proofs cover ${covered} topics; ${claims.length} candidate sentences await statement review`);
