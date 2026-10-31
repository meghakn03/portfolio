const roleContent={
  ai:{label:'AI ENGINEER',heading:'Make intelligent systems observable.',description:'TraceScope replays agent runs and flags loops, tool failures and latency; LoopLab tests one proposed model change at a time behind a promotion gate. At HyperionWave, I designed MCP decision logic and built a dashboard to surface tool-call patterns and anomalies.',tags:['TraceScope','LoopLab','MCP','Agent observability'],projects:['ledger','folio','looplab','tracescope']},
  data:{label:'DATA ENGINEER',heading:'Make information useful and traceable.',description:'Folio grounds answers in SEC filings, while LedgerLens applies deterministic rules to synthetic transactions. At Shink AI Tech, I built MongoDB and DynamoDB synchronization; at Hedgwork, I managed Azure SQL and DynamoDB architectures.',tags:['Folio','LedgerLens','SQL','Data synchronization'],projects:['folio','ledger','tracescope']},
  platform:{label:'PLATFORM ENGINEER',heading:'Build the path from code to confidence.',description:'DeployPilot turns validated requests into Kubernetes Deployments and Services with scoped service accounts; LedgerLens provisions a local cluster with Terraform. At Shink AI Tech, I containerized microservices and implemented CI/CD pipelines to improve deployment frequency and stability.',tags:['DeployPilot','Kubernetes','Terraform','CI / CD'],projects:['ledger','tracescope','deploypilot']},
  software:{label:'SOFTWARE ENGINEER',heading:'Ship the whole experience.',description:'Across Folio, TraceScope, LoopLab, LedgerLens and DeployPilot, I build user interfaces, APIs and the systems behind them. At Hedgwork, I was the sole engineer on a skill intelligence platform, delivering end-to-end features across frontend, backend, AI assistants, NLP chatbots and REST APIs.',tags:['Five projects','React','FastAPI','End to end'],projects:['ledger','folio','looplab','tracescope','deploypilot']}
};
const cases={
 ledger:{kicker:'CASE STUDY 01 / FINTECH OPERATIONS',title:'LedgerLens',summary:'A local-first fintech operations demo for reviewing synthetic card transactions. It does not connect to banking services, move money or use real customer data.',build:'A review dashboard backed by a Python API, deterministic rules for large purchases and transaction bursts, Terraform-provisioned local Kubernetes, Traefik ingress and a Docker workflow. Review notes live in memory and reset when the API restarts.',points:['Synthetic transactions keep the demo safe and repeatable.','Rules flag purchases of $1,000 or more and 4+ transactions in 10 minutes.','A reviewer can add a note to a flagged transaction.','CI builds the frontend and containers, tests the API and rules, and validates Terraform and Kubernetes manifests.'],stack:['Python','React','Terraform','Kubernetes','Docker','GitHub Actions'],url:'https://github.com/meghakn03/LedgerLens',demo:'assets/demos/ledgerlens.mp4',demoCaption:'Review a high-value synthetic transaction and see the open-case count update.'},
 folio:{kicker:'CASE STUDY 02 / DOCUMENT INTELLIGENCE',title:'Folio',summary:'Local-first search and analysis for SEC filings. Upload a PDF or HTML filing, or retrieve recent 10-K and 10-Q reports, then inspect answers alongside their source passages.',build:'A FastAPI backend and React UI join document extraction, page-aware chunking, SQLite metadata, persisted embeddings, semantic retrieval and lexical blending. A human-labeled benchmark helps evaluate retrieval quality against relevant passages.',points:['Search results carry source passages and page citations.','Financial entity patterns find currencies, percentages, dates and named metrics.','A benchmark tracks Precision@K, Recall@K, MRR, Hit Rate@K and mean latency.','Embeddings can run locally, with an optional TF-IDF retrieval mode.'],stack:['Python','FastAPI','React','SQLite','Sentence Transformers','RAG'],url:'https://github.com/meghakn03/Folio',demo:'assets/demos/folio.mp4',demoCaption:'Search a local filing, label supporting evidence and run the retrieval benchmark.'},
 looplab:{kicker:'CASE STUDY 03 / ML EXPERIMENTATION',title:'LoopLab',summary:'A local experiment loop for Fashion-MNIST. A transparent, rule-based agent proposes one untried configuration change, a background worker trains it, and the run is promoted only when validation accuracy beats the current best.',build:'The baseline is a one-hidden-layer MLP. Runs use the same fixed dataset subset and seed, with a short epoch budget. The API tracks each run’s configuration, parent, status, validation accuracy, elapsed time, proposal explanation and promotion decision. Only one run trains at a time.',points:['Each proposal changes exactly one setting from a small, inspectable search space.','The validation gate keeps promotion tied to measured improvement.','A React + Vite dashboard shows the leaderboard and run history.','The local stack uses FastAPI, SQLite and a PyTorch trainer; Fashion-MNIST is downloaded on the first training run.'],stack:['Python','PyTorch','FastAPI','SQLite','React','Vite'],url:'https://github.com/meghakn03/LoopLap',demo:'assets/demos/looplab.mp4',demoCaption:'Ask the local proposer for one change, train it and inspect its promotion decision.'},
 tracescope:{kicker:'CASE STUDY 04 / AGENT OBSERVABILITY',title:'TraceScope',summary:'A local-first trace replay and evaluation workbench for inspecting agent runs, surfacing likely loops and tool failures, replaying saved behavior, and comparing runs.',build:'A React + TypeScript interface and FastAPI/Pydantic API work with a versioned JSON trace format. SQLite stores run indexes and evaluation summaries while full traces are stored as JSON. Deterministic synthetic scenarios make the workflow inspectable without calling a live model, agent, MCP server or tool.',points:['A chronological timeline exposes sanitized arguments, result summaries, errors and latency.','Heuristics flag repeated calls, retries, errors/timeouts, slow calls and high step counts for review.','Replay copies a recorded trace into a new run; it does not execute an agent or tools.','A four-scenario evaluation suite reports transparent checks, methods and denominators.','Trace imports are checked against a versioned schema and common credential patterns are scrubbed.'],stack:['Python','React','TypeScript','FastAPI','SQLite','JSON Schema','Docker Compose'],url:'https://github.com/meghakn03/TraceScope',demo:'assets/demos/tracescope.mp4',demoCaption:'Inspect a loop alert, replay its trace and run deterministic scenario evaluations.'},
 deploypilot:{kicker:'CASE STUDY 05 / KUBERNETES PLATFORM',title:'DeployPilot',summary:'A single-cluster Kubernetes deployment control plane. Submit a validated HTTP workload request and a controller reconciles it into a namespaced Deployment and Service.',build:'A Go API persists namespaced DeploymentRequest custom resources, then a controller reconciles and owns the resulting Kubernetes workloads. The API and controller use separate service accounts and roles. An embedded browser UI, Kustomize manifests, and a one-command kind setup make the platform easy to explore locally.',points:['Namespace and image-registry allowlists and CPU/memory bounds guard accepted requests.','The controller reports desired and ready replicas with Progressing or Available conditions.','Health endpoints and bounded Prometheus metrics support operational monitoring; sample alerts and a Grafana dashboard are included.','Deleting a request removes its owned workloads through Kubernetes garbage collection.','Scope is explicit: one cluster and HTTP workloads; it does not build images, route external traffic, schedule across clusters or roll back releases.'],stack:['Go','Kubernetes','Docker','Kustomize','Prometheus','Grafana','kind'],url:'https://github.com/meghakn03/DeployPilot',demo:'assets/demos/deploypilot.mp4',demoCaption:'Submit an approved local image and watch the Kubernetes controller report readiness.'}
};
const skillGroups={
 ai:[
  ['MCP','HyperionWave'],['Agentic workflows','HyperionWave · résumé'],['LLM logic design','Résumé'],['NLP','Hedgwork'],['Pattern recognition','Résumé'],['Behavioral analytics','Résumé'],['RAG','Folio'],['Sentence Transformers','Folio'],['PyTorch','LoopLab'],['Evaluation','Folio · LoopLab'],['Tool-call analytics','HyperionWave'],['AI observability','HyperionWave'],['AWS Rekognition','Shink AI Tech']
 ],
 data:[
  ['Python','Hedgwork · Folio · LoopLab'],['SQL','Résumé · Folio'],['SQLite','Folio · LoopLab'],['PostgreSQL','User-provided skills'],['Apache Kafka','User-provided skills'],['Apache Airflow','User-provided skills'],['Redis','User-provided skills'],['Azure SQL','Hedgwork'],['DynamoDB','Hedgwork · Shink AI Tech'],['MongoDB','Shink AI Tech'],['MySQL','Résumé'],['Data Lake','Résumé'],['Document extraction','Folio'],['Embeddings','Folio'],['SEC EDGAR','Folio'],['Data synchronization','Shink AI Tech'],['Retrieval metrics','Folio']
 ],
 platform:[
  ['Terraform','LedgerLens'],['Kubernetes','LedgerLens'],['Kubernetes deployments','User-provided skills'],['Helm','User-provided skills'],['Kustomize','DeployPilot'],['Docker','LedgerLens · Shink AI Tech · DeployPilot'],['Linux','User-provided skills'],['AWS IAM / VPC','User-provided skills'],['Infrastructure as Code','User-provided skills'],['Cloud automation','User-provided skills'],['Prometheus / Grafana','User-provided skills · DeployPilot'],['CI/CD','Shink AI Tech · résumé'],['GitHub Actions','LedgerLens · résumé'],['TeamCity','Résumé'],['Microservices','Hedgwork · Shink AI Tech'],['Serverless','Résumé'],['AWS Lambda','Résumé'],['Amazon S3','Résumé'],['Amazon ECS','Résumé'],['Azure AI Foundry','Résumé'],['System design','Résumé'],['Traefik','LedgerLens']
 ],
 software:[
  ['JavaScript','Résumé · projects'],['TypeScript','Résumé · projects'],['Go','DeployPilot'],['Git / Git workflows','User-provided skills'],['Pytest','User-provided skills'],['React','LedgerLens · Folio · LoopLab · TraceScope'],['React Native','Résumé'],['Next.js','Résumé'],['Angular','Résumé'],['Node.js','Hedgwork · résumé'],['Express.js','Résumé'],['Flask','Résumé'],['FastAPI','Folio · LoopLab · TraceScope'],['REST APIs','Hedgwork · Folio'],['GraphQL','Résumé'],['WebSockets','Résumé'],['C++','Résumé'],['Java','Résumé'],['Dashboards','HyperionWave · LedgerLens'],['Technical docs','Résumé'],['Agile / Scrum','Résumé'],['Vite','LoopLab']
 ]
};
let activeSkillGroup='all';
const allSkillsMap=new Map();
Object.values(skillGroups).flat().forEach(([name,source])=>{
 const existing=allSkillsMap.get(name);
 allSkillsMap.set(name,existing?`${existing} · ${source}`:source);
});
const allSkills=[...allSkillsMap.entries()].sort(([a],[b])=>{
 const hash=value=>Math.sin([...value].reduce((sum,char)=>sum+char.charCodeAt(0)*17,0)*127.1)*43758.5453%1;
 return hash(a)-hash(b);
});
function renderSkillBubbles(){
 const portraitSkills=[
  ['Python','Hedgwork · Folio · LoopLab'],['TypeScript','Résumé · projects'],['System Design','Résumé'],
  ['Agentic Workflows','HyperionWave · résumé'],['RAG','Folio'],['MCP','HyperionWave'],
  ['SQL','Résumé · Folio'],['Data Pipelines (Data Synchronization)','Shink AI Tech'],
  ['Docker','LedgerLens · Shink AI Tech'],['Kubernetes','LedgerLens'],['Terraform','LedgerLens']
 ];
 const visible=portraitSkills;
 const rings=[.42];
 const layer=document.querySelector('#skill-bubbles');
 layer.hidden=false;
 layer.classList.add('skill-highlights');
 layer.innerHTML=visible.map(([name,source],index)=>{
   const ringIndex=0;
   return `<span class="skill-bubble bubble-${index%4}" data-ring="${ringIndex}" style="--float-delay:${index*.18}s" title="Shown in: ${source}">${name}</span>`;
 }).join('');
 const stage=document.querySelector('.portrait-stage');
 const stageWidth=stage.clientWidth,stageHeight=stage.clientHeight;
 [...new Set([...layer.children].map(bubble=>bubble.dataset.ring))].forEach(ringKey=>{
  const radius=rings[Number(ringKey)]||rings[rings.length-1];
  const rx=stageWidth*radius,ry=stageHeight*radius;
  const samples=720,points=[],arc=[0];
  for(let step=0;step<=samples;step++){
   const angle=-Math.PI/2+step/samples*Math.PI*2;
   const point={angle,x:Math.cos(angle)*rx,y:Math.sin(angle)*ry};
   points.push(point);
   if(step)arc.push(arc[step-1]+Math.hypot(point.x-points[step-1].x,point.y-points[step-1].y));
  }
  const bubbles=[...layer.children].filter(bubble=>bubble.dataset.ring===ringKey);
  const initialWidths=bubbles.map(bubble=>bubble.getBoundingClientRect().width);
  const scale=Math.min(1,(arc[samples]-bubbles.length*8)/initialWidths.reduce((sum,width)=>sum+width,0));
  if(scale<1)bubbles.forEach(bubble=>{bubble.style.fontSize=`${8*scale}px`;bubble.style.padding=`${5*scale}px ${7*scale}px`;});
  const widths=bubbles.map(bubble=>bubble.getBoundingClientRect().width+8);
  const gap=Math.max(1,(arc[samples]-widths.reduce((sum,width)=>sum+width,0))/bubbles.length);
  let distance=gap/2;
  bubbles.forEach((bubble,index)=>{
   const target=distance+widths[index]/2;
   let step=1;while(step<samples&&arc[step]<target)step++;
   const fraction=(target-arc[step-1])/(arc[step]-arc[step-1]);
   const angle=points[step-1].angle+(points[step].angle-points[step-1].angle)*fraction;
   bubble.style.left=`${50+Math.cos(angle)*radius*100}%`;
   bubble.style.top=`${50+Math.sin(angle)*radius*100}%`;
   distance+=widths[index]+gap;
  });
 });
}
function renderSkillExplorer(){
 const search=document.querySelector('#skill-search').value.trim().toLowerCase();
 const groups=activeSkillGroup==='all'?Object.entries(skillGroups):[[activeSkillGroup,skillGroups[activeSkillGroup]||[]]];
 let shown=0;
 document.querySelector('#all-skill-groups').innerHTML=groups.map(([group,items])=>{
  const matches=items.filter(([name,source])=>`${name} ${source}`.toLowerCase().includes(search));
  shown+=matches.length;
  return matches.length?`<section class="all-skill-group"><h3>${{ai:'AI + MACHINE LEARNING',data:'DATA + RETRIEVAL',platform:'PLATFORM + CLOUD',software:'SOFTWARE ENGINEERING'}[group]}</h3><div>${matches.map(([name,source])=>`<span class="all-skill-tag" title="Shown in: ${source}">${name}</span>`).join('')}</div></section>`:'';
 }).join('');
 document.querySelector('#skill-count').textContent=`${shown} SKILLS${search?` MATCHING “${search.toUpperCase()}”`:activeSkillGroup==='all'?' ACROSS ALL DISCIPLINES':` IN ${activeSkillGroup.toUpperCase()}`}`;
}
document.querySelectorAll('.skill-orbit-tab').forEach(button=>button.addEventListener('click',()=>{
 activeSkillGroup=button.dataset.skillGroup;
 document.querySelectorAll('.skill-orbit-tab').forEach(tab=>{const active=tab===button;tab.classList.toggle('active',active);tab.setAttribute('aria-pressed',String(active));});
 renderSkillExplorer();
}));
renderSkillBubbles();
renderSkillExplorer();
document.querySelector('#skill-search').addEventListener('input',renderSkillExplorer);
document.addEventListener('keydown',event=>{
 if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){
  event.preventDefault();
  document.querySelector('#skill-search').focus();
 }
});
window.addEventListener('resize',renderSkillBubbles);

function filterProjects(role){
  document.querySelectorAll('.project-card').forEach(card=>{
    const roles=card.dataset.roles.split(',');
    card.classList.toggle('hidden',role!=='all'&&!roles.includes(role));
  });
}
document.querySelectorAll('.project-filter').forEach(button=>button.addEventListener('click',()=>{
  const role=button.dataset.projectRole;
  document.querySelectorAll('.project-filter').forEach(tab=>{
    const active=tab===button;
    tab.classList.toggle('active',active);
    tab.setAttribute('aria-pressed',String(active));
  });
  filterProjects(role);
}));
document.querySelectorAll('.role-tab').forEach(button=>button.addEventListener('click',()=>{
  const role=roleContent[button.dataset.role];
  document.querySelectorAll('.role-tab').forEach(tab=>{const active=tab===button;tab.classList.toggle('active',active);tab.setAttribute('aria-selected',String(active));});
  document.querySelector('.detail-label').textContent=`PROJECTS + EXPERIENCE / ${role.label}`;
  document.querySelector('#role-heading').textContent=role.heading;
  document.querySelector('#role-description').textContent=role.description;
  document.querySelector('#role-tags').innerHTML=role.tags.map(tag=>`<span>${tag}</span>`).join('');
  filterProjects(button.dataset.role);
  document.querySelectorAll('.project-filter').forEach(tab=>{
    const active=tab.dataset.projectRole===button.dataset.role;
    tab.classList.toggle('active',active);
    tab.setAttribute('aria-pressed',String(active));
  });
}));
const dialog=document.querySelector('#case-modal');
document.querySelectorAll('.project-open').forEach(button=>button.addEventListener('click',()=>{
  const project=cases[button.dataset.project];
  document.querySelector('#modal-kicker').textContent=project.kicker;
  document.querySelector('#modal-title').textContent=project.title;
  document.querySelector('#modal-summary').textContent=project.summary;
  document.querySelector('#modal-build').textContent=project.build;
  document.querySelector('#modal-points').innerHTML=project.points.map(point=>`<li>${point}</li>`).join('');
  document.querySelector('#modal-stack').innerHTML=project.stack.map(item=>`<span>${item}</span>`).join('');
  const demoSection=document.querySelector('#modal-demo');
  const demoVideo=document.querySelector('#modal-demo-video');
  demoSection.hidden=!project.demo;
  if(project.demo){demoVideo.src=project.demo;document.querySelector('#modal-demo-caption').textContent=project.demoCaption;demoVideo.load();}
  const link=document.querySelector('.modal-repo');link.href=project.url;
  dialog.showModal();
}));
document.querySelector('.modal-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>{const video=document.querySelector('#modal-demo-video');video.pause();video.removeAttribute('src');video.load();});
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
