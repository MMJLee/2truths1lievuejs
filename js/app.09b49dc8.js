(function(){"use strict";var e={9826:function(e,t,s){var a=s(5102),n=s(9269);const r={id:"q-app"},o=(0,n.Uk)(" About "),i=(0,n.Uk)(" | "),c=(0,n.Uk)(" 2 Truths and a Lie ");function l(e,t,s,a,l,u){const d=(0,n.up)("router-link"),m=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("nav",null,[(0,n.Wm)(d,{to:{name:"AboutView"}},{default:(0,n.w5)((()=>[o])),_:1}),i,(0,n.Wm)(d,{to:{name:"TwoTruthsOneLieView"}},{default:(0,n.w5)((()=>[c])),_:1})]),(0,n.Wm)(m)])}var u={name:"LayoutDefault",components:{}},d=s(7617);const m=(0,d.Z)(u,[["render",l]]);var p=m,h=s(2201);const g=e=>((0,n.dD)("data-v-894c8568"),e=e(),(0,n.Cn)(),e),f={id:"q-app"},w={class:"about-me"},b={class:"about-me-text"},y=g((()=>(0,n._)("p",{align:"left"}," Hi, my name is MyungJae Lee and I am an aspiring software engineer. My background is in mechanical engineering (minor in math, many classes in CS), but I've always had an interest in math and computer science. I currently work as a project manager, but I've recently realized computer science is where my passion lies and I have been educating myself to become a full-stack developer. ",-1))),v=g((()=>(0,n._)("p",{align:"left"}," I don't have any professional experience yet, and I know that's crucial for many employers. If you would please check my Github, you'd see that I know and practice good Python and Java coding conventions and have a good understanding of algorithms and data flow. I believe that I can be a great addition to your team with a bit of guidance and time. ",-1))),_=g((()=>(0,n._)("div",{class:"about-me-resume"},[(0,n._)("embed",{src:"https://drive.google.com/file/d/1rCzJlppHZDF6kH27JYh-xX5KivUu6FOR/preview#toolbar=0&navpanes=0&scrollbar=0",type:"application/pdf",width:"100%",height:"100%",frameBorder:"0"})],-1)));function k(e,t){const s=(0,n.up)("q-btn");return(0,n.wg)(),(0,n.iD)("div",f,[(0,n._)("div",w,[(0,n._)("div",b,[y,v,(0,n.Wm)(s,{class:"about-me-buttons",color:"primary",href:"https://linkedin.com/in/matthewmjlee",label:"LinkedIn"}),(0,n.Wm)(s,{class:"about-me-buttons",color:"primary",href:"https://github.com/mmjlee",label:"Github"}),(0,n.Wm)(s,{class:"about-me-buttons",color:"primary",href:"mailto:matthewmjlee@gmail.com",icon:"mail"})]),_])])}var j=s(8125),W=s(1410),x=s.n(W);const C={},q=(0,d.Z)(C,[["render",k],["__scopeId","data-v-894c8568"]]);var Z=q;x()(C,"components",{QBtn:j.Z});const I={id:"q-app"},P={class:"project-card-row"};function S(e,t,s,a,r,o){const i=(0,n.up)("ProjectCard");return(0,n.wg)(),(0,n.iD)("div",I,[(0,n._)("div",P,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.projects,((e,t)=>((0,n.wg)(),(0,n.j4)(i,{align:"center",key:e.id,project:e,projectIndex:t},null,8,["project","projectIndex"])))),128))])])}var T=s(3201);const A={id:"q-app",style:{"min-height":"10vh"}},Q=(0,n.Uk)(" Technologies Used"),U=(0,n.Uk)(" Technologies Used");function L(e,t,s,a,r,o){const i=(0,n.up)("q-item-label"),c=(0,n.up)("q-item-section"),l=(0,n.up)("q-item"),u=(0,n.up)("q-separator"),d=(0,n.up)("q-list"),m=(0,n.up)("q-card-section"),p=(0,n.up)("q-card"),h=(0,n.up)("q-btn"),g=(0,n.up)("q-card-actions"),f=(0,n.up)("router-link"),w=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",A,[r.front?((0,n.wg)(),(0,n.j4)(p,{key:0,class:"project-card",onClick:t[0]||(t[0]=e=>r.front=!r.front),flat:"",bordered:""},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{class:"text-h5 bg-primary text-secondary"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,T.zw)(s.project.name),1)])),_:1})])),_:1})])),_:1}),(0,n.Wm)(u),(0,n.Wm)(m,{class:"bg-primary text-h6 text-secondary",horizontal:""},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{class:"tech-list"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,null,{default:(0,n.w5)((()=>[Q])),_:1}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.project.tech,((e,t)=>((0,n.wg)(),(0,n.j4)(l,{key:t},{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,T.zw)(e),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1}),(0,n.Wm)(u,{vertical:""}),(0,n.Wm)(d,{class:"tech-list"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,null,{default:(0,n.w5)((()=>[U])),_:1}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.project.tech,((e,t)=>((0,n.wg)(),(0,n.j4)(l,{key:t},{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,T.zw)(e),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})):((0,n.wg)(),(0,n.j4)(p,{key:1,class:"project-card",onClick:t[1]||(t[1]=e=>r.front=!r.front),flat:"",bordered:""},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{class:"text-h5 bg-primary text-secondary"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,T.zw)(s.project.name),1)])),_:1})])),_:1})])),_:1}),(0,n.Wm)(u),(0,n.Wm)(m,{class:"bg-primary text-h6 text-white",horizontal:""},{default:(0,n.w5)((()=>[(0,n.Uk)((0,T.zw)(s.project.comment),1)])),_:1}),(0,n.Wm)(f,{to:{name:s.project.view}},{default:(0,n.w5)((()=>[(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Go to: "+(0,T.zw)(s.project.name),1)])),_:1})])),_:1})])),_:1},8,["to"])])),_:1})),(0,n.Wm)(w)])}var z={props:{project:{type:Object,required:!0}},data(){return{front:!0}}},D=s(8055),O=s(5246),G=s(2278),N=s(3712),H=s(4492),B=s(9501),K=s(2146),R=s(4333);const V=(0,d.Z)(z,[["render",L],["__scopeId","data-v-209e2876"]]);var Y=V;x()(z,"components",{QCard:D.Z,QItem:O.Z,QItemSection:G.Z,QItemLabel:N.Z,QSeparator:H.Z,QCardSection:B.Z,QList:K.Z,QCardActions:R.Z,QBtn:j.Z});var F=s(6085),J=s.n(F);const M=J().create({baseURL:"https://api.mjlee.dev/projects",withCredentials:!0,httpsAgent:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});var E={async getProjects(){return this.response=await M.get("/"),this.response},async getProject(e){return this.response=await M.get("/"+e+"/"),this.response}},X={components:{ProjectCard:Y},methods:{getProjects(){E.getProjects().then((e=>this.projects=e.data)).catch((e=>console.log(e)))}},data(){return{projects:[]}},created(){this.getProjects()}};const $=(0,d.Z)(X,[["render",S],["__scopeId","data-v-e069b88c"]]);var ee=$;const te={class:"statements"},se={key:0,class:"statement-details"},ae={class:"description"},ne={class:"true-or-false"},re={class:"description"};function oe(e,t,s,a,r,o){return(0,n.wg)(),(0,n.iD)("div",te,[r.statement?((0,n.wg)(),(0,n.iD)("div",se,[(0,n._)("p",ae,(0,T.zw)(r.statement.description),1),(0,n._)("p",ne,(0,T.zw)(r.statement.truth),1),(0,n._)("p",re,(0,T.zw)(r.statement.backstory),1)])):(0,n.kq)("",!0)])}const ie=J().create({baseURL:"https://api.mjlee.dev/statements",withCredentials:!0,httpsAgent:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});var ce={async getStatements(){return this.response=await ie.get("/"),this.response},async getStatement(e){return this.response=await ie.get("/"+e+"/"),this.response},async get2TruthsAndaLie(){return this.response=await ie.get("/game/"),this.response},async resetAllStatements(){return this.response=await ie.put("/game/reset/"),this.response},async submitGuesses(e,t,s){return this.response=await ie.put("/game/"+e+"-"+t+"-"+s+"/"),this.response}},le={props:["id"],data(){return{statement:null}},methods:{getStatement(){ce.getStatement(this.id).then((e=>{this.statement=e.data})).catch((e=>{console.log(e)}))}},created(){this.getStatement()}};const ue=(0,d.Z)(le,[["render",oe],["__scopeId","data-v-a4540126"]]);var de=ue;const me=e=>((0,n.dD)("data-v-d46a03b6"),e=e(),(0,n.Cn)(),e),pe={id:"q-app"},he={key:1,class:"statement-card-row"},ge={class:"misc-card-row"},fe=me((()=>(0,n._)("div",{class:"text-body1 text-secondary"}," Select Truth/Lie for each statement and submit. The button under the statement will turn true/false depending on the validity of the statement. Press this button to reveal the backstory behind the statement. Score higher than the last place to get a chance at the hall of fame! ",-1))),we={class:"text-h6 text-secondary"},be=(0,n.Uk)("Hall of Fame"),ye=(0,n.Uk)("Github Repo ");function ve(e,t,s,r,o,i){const c=(0,n.up)("q-btn"),l=(0,n.up)("q-card-section"),u=(0,n.up)("q-card"),d=(0,n.up)("StatementCard"),m=(0,n.up)("q-card-actions"),p=(0,n.up)("q-item-label"),h=(0,n.up)("q-item-section"),g=(0,n.up)("q-item"),f=(0,n.up)("q-separator"),w=(0,n.up)("q-list");return(0,n.wg)(),(0,n.iD)("div",pe,[0===this.statements.length?((0,n.wg)(),(0,n.j4)(u,{key:0,class:"submit-highscore-card"},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{class:"bg-primary text-white"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("input",{class:"submit-highscore-input-box","onUpdate:modelValue":t[0]||(t[0]=e=>o.playerName=e)},null,512),[[a.nr,o.playerName]]),(0,n.Wm)(c,{onClick:t[1]||(t[1]=e=>i.submitName()),label:"Submit"})])),_:1})])),_:1})):((0,n.wg)(),(0,n.iD)("div",he,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.statements,((e,t)=>((0,n.wg)(),(0,n.j4)(d,{align:"center",key:e.id,statement:e,cardIndex:t,guess:i.getGuess,submitted:o.submitted},null,8,["statement","cardIndex","guess","submitted"])))),128))])),(0,n._)("div",ge,[(0,n.Wm)(u,{class:"misc-cards"},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{class:"bg-primary text-white"},{default:(0,n.w5)((()=>[fe])),_:1})])),_:1}),(0,n.Wm)(u,{class:"misc-cards"},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{class:"bg-primary text-white"},{default:(0,n.w5)((()=>[(0,n._)("div",we,"Score: "+(0,T.zw)(o.score),1)])),_:1}),(0,n.Wm)(m,{class:"bg-secondary",align:"center"},{default:(0,n.w5)((()=>[0===this.statements.length?((0,n.wg)(),(0,n.j4)(c,{key:0,onClick:t[2]||(t[2]=e=>i.resetAllStatements()),label:"Reset"})):(0,n.kq)("",!0),(0,n.Wm)(c,{onClick:t[3]||(t[3]=e=>i.submitGuesses()),label:"Submit"}),this.submitted?((0,n.wg)(),(0,n.j4)(c,{key:1,onClick:t[4]||(t[4]=e=>i.getNextSet()),label:"Next"})):(0,n.kq)("",!0)])),_:1})])),_:1}),(0,n.Wm)(u,{class:"misc-cards"},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{class:"text-h5 bg-primary text-secondary"},{default:(0,n.w5)((()=>[(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[be])),_:1})])),_:1})])),_:1}),(0,n.Wm)(f),(0,n.Wm)(l,{class:"bg-primary text-h6 text-secondary",horizontal:""},{default:(0,n.w5)((()=>[(0,n.Wm)(w,{class:"player-list"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.players,(e=>((0,n.wg)(),(0,n.j4)(g,{key:e.id},{default:(0,n.w5)((()=>[(0,n.Wm)(h,{align:"left"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,T.zw)(e.name)+" : "+(0,T.zw)(e.score),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})]),(0,n.Wm)(c,{class:"github-repo-button bg-secondary",href:"https://github.com/MMJLee/2truths1lievuejs"},{default:(0,n.w5)((()=>[ye])),_:1})])}const _e={id:"q-app",style:{"min-height":"10vh"}},ke={class:"description"},je={class:"backstory"};function We(e,t,s,a,r,o){const i=(0,n.up)("q-card-section"),c=(0,n.up)("q-btn"),l=(0,n.up)("q-card-actions"),u=(0,n.up)("q-card");return(0,n.wg)(),(0,n.iD)("div",_e,[r.front?((0,n.wg)(),(0,n.j4)(u,{key:0,class:"statement-card"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{class:"bg-primary text-secondary"},{default:(0,n.w5)((()=>[(0,n._)("div",ke,(0,T.zw)(s.statement.description),1)])),_:1}),s.submitted?((0,n.wg)(),(0,n.j4)(l,{key:1,class:"button-container bg-secondary",align:"around"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{class:"not-pressed",onClick:t[2]||(t[2]=e=>r.front=!r.front)},{default:(0,n.w5)((()=>[(0,n.Uk)((0,T.zw)(s.statement.truth),1)])),_:1})])),_:1})):((0,n.wg)(),(0,n.j4)(l,{key:0,class:"button-container bg-secondary",align:"around"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{class:(0,T.C_)([this.truthPressed?"btn-pressed":"not-pressed"]),onClick:t[0]||(t[0]=e=>{s.guess(!0,s.cardIndex),this.truthPressed=!0,this.liePressed=!1}),label:"Truth"},null,8,["class"]),(0,n.Wm)(c,{class:(0,T.C_)([this.liePressed?"btn-pressed":"not-pressed"]),onClick:t[1]||(t[1]=e=>{s.guess(!1,s.cardIndex),this.liePressed=!0,this.truthPressed=!1}),label:"Lie"},null,8,["class"])])),_:1}))])),_:1})):((0,n.wg)(),(0,n.j4)(u,{key:1,class:"statement-card-backstory"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{class:"bg-primary text-secondary"},{default:(0,n.w5)((()=>[(0,n._)("div",je,(0,T.zw)(s.statement.backstory),1)])),_:1})])),_:1}))])}var xe={props:{statement:{type:Object,required:!0},cardIndex:Number,guess:Function,submitted:Boolean},data(){return{truthPressed:!1,liePressed:!1,front:!0}}};const Ce=(0,d.Z)(xe,[["render",We],["__scopeId","data-v-62cf5a08"]]);var qe=Ce;x()(xe,"components",{QCard:D.Z,QCardSection:B.Z,QCardActions:R.Z,QBtn:j.Z});const Ze=J().create({baseURL:"https://api.mjlee.dev/players",withCredentials:!0,httpsAgent:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});var Ie={async getPlayers(){return this.response=await Ze.get("/"),this.response},async getPlayer(e){return this.response=await Ze.get("/"+e+"/"),this.response},async addPlayer(e,t){return this.response=await Ze.post("/",{name:e,score:t}),this.response},async getTop5Players(){return this.response=await Ze.get("/top5/"),this.response}},Pe={components:{StatementCard:qe},methods:{get2TruthsAndaLie(){ce.get2TruthsAndaLie().then((e=>this.statements=e.data)).catch((e=>console.log(e)))},checkGuesses(){const e=[0,0];if(this.statements.length<3)return alert("Thank you for playing, your final score is "+this.score+"."),!1;for(var t=0;t<this.statements.length;t++){if(void 0===this.guesses[t])return alert("Please select truth or lie for all 3 statements"),!1;this.guesses[t]?e[0]++:e[1]++}return e[0]==e[1]+e[1]||(alert("Please select 2 truths and 1 lie"),!1)},submitGuesses(){if(this.checkGuesses()){ce.submitGuesses(this.statements[0].id,this.statements[1].id,this.statements[2].id);for(var e=0;e<this.statements.length;e++)if(this.statements[e].truth!=this.guesses[e]){this.submitted||(this.submitted=!0);break}this.submitted||this.score++,this.submitted=!0}},submitName(){Ie.addPlayer(this.playerName,this.score),Ie.getTop5Players(),alert("Thank you for playing!"),this.resetAllStatements()},getNextSet(){this.submitted=!1,this.get2TruthsAndaLie()},test(){console.log(this.highscore+":"+Number(this.players[4].score)+":"+this.score),console.log(this.statements),console.log(this.statements.length)},resetAllStatements(){ce.resetAllStatements(),this.get2TruthsAndaLie(),this.score=0},getGuess(e,t){this.guesses[t]=e},getTop5Players(){Ie.getTop5Players().then((e=>this.players=e.data)).catch((e=>console.log(e)))}},data(){return{statements:[],guesses:[],score:0,submitted:!1,playerName:"",players:[],highscore:!1}},created(){this.resetAllStatements(),this.getTop5Players()}};const Se=(0,d.Z)(Pe,[["render",ve],["__scopeId","data-v-d46a03b6"]]);var Te=Se;x()(Pe,"components",{QCard:D.Z,QCardSection:B.Z,QBtn:j.Z,QCardActions:R.Z,QItem:O.Z,QItemSection:G.Z,QItemLabel:N.Z,QSeparator:H.Z,QList:K.Z});const Ae=(0,h.r5)(),Qe=[{path:"/statements/:id",name:"StatementDetails",props:!0,component:de},{path:"/2truths1lie",name:"TwoTruthsOneLieView",component:Te},{path:"/projects",name:"ProjectView",component:ee},{path:"/",name:"AboutView",component:Z}],Ue=(0,h.p7)({history:Ae,routes:Qe});var Le=Ue,ze=s(2430),De={config:{},plugins:{}};const Oe=(0,a.ri)(p).use(ze.Z,De);Oe.use(Le),Oe.mount("#app")}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,s),r.exports}s.m=e,function(){var e=[];s.O=function(t,a,n,r){if(!a){var o=1/0;for(u=0;u<e.length;u++){a=e[u][0],n=e[u][1],r=e[u][2];for(var i=!0,c=0;c<a.length;c++)(!1&r||o>=r)&&Object.keys(s.O).every((function(e){return s.O[e](a[c])}))?a.splice(c--,1):(i=!1,r<o&&(o=r));if(i){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[a,n,r]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,r,o=a[0],i=a[1],c=a[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(n in i)s.o(i,n)&&(s.m[n]=i[n]);if(c)var u=c(s)}for(t&&t(a);l<o.length;l++)r=o[l],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(u)},a=self["webpackChunk_2truths1lievuejs"]=self["webpackChunk_2truths1lievuejs"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(9826)}));a=s.O(a)})();
//# sourceMappingURL=app.09b49dc8.js.map