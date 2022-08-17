(function(){"use strict";var t={3374:function(t,e,s){var n=s(5102),a=s(9269);const r={id:"app"},i=(0,a.Uk)("About"),o=(0,a.Uk)(" | "),l=(0,a.Uk)("2 Truths and a Lie");function u(t,e,s,n,u,c){const d=(0,a.up)("router-link"),m=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("nav",null,[(0,a.Wm)(d,{to:{name:"AboutView"}},{default:(0,a.w5)((()=>[i])),_:1}),o,(0,a.Wm)(d,{to:{name:"2T1LView"}},{default:(0,a.w5)((()=>[l])),_:1})]),(0,a.Wm)(m)])}var c={name:"LayoutDefault",components:{}},d=s(7617);const m=(0,d.Z)(c,[["render",u]]);var p=m,h=s(2201),f=s(3201);const w={id:"q-app",style:{"min-height":"10vh"}},g={class:"statement-card-row"},_={class:"statement-card"},v={class:"text-h6"};function b(t,e,s,n,r,i){const o=(0,a.up)("StatementCard"),l=(0,a.up)("q-card-section"),u=(0,a.up)("q-btn"),c=(0,a.up)("q-card-actions"),d=(0,a.up)("q-card");return(0,a.wg)(),(0,a.iD)("div",w,[(0,a._)("div",g,[(0,a._)("div",_,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.statements,((t,e)=>((0,a.wg)(),(0,a.j4)(o,{key:t.id,statement:t,cardIndex:e,guess:i.getGuess},null,8,["statement","cardIndex","guess"])))),128))]),(0,a.Wm)(d,{class:"scoreboard-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{class:"bg-primary text-white"},{default:(0,a.w5)((()=>[(0,a._)("div",v,"Score: "+(0,f.zw)(r.score),1)])),_:1}),(0,a.Wm)(c,{align:"center"},{default:(0,a.w5)((()=>[0===r.statements.length?((0,a.wg)(),(0,a.j4)(u,{key:0,color:"white","text-color":"black",onClick:e[0]||(e[0]=t=>i.resetAllStatements()),label:"Reset"})):((0,a.wg)(),(0,a.j4)(u,{key:1,color:"white","text-color":"black",onClick:e[1]||(e[1]=t=>i.submitGuesses()),label:"Submit"})),this.submitted?((0,a.wg)(),(0,a.j4)(u,{key:2,color:"white","text-color":"black",onClick:e[2]||(e[2]=t=>i.getNextSet()),label:"Next"})):(0,a.kq)("",!0)])),_:1})])),_:1})])])}const k={id:"q-app",style:{"min-height":"10vh"}},W={class:"q-pa-md row items-start q-gutter-md"},j={class:"description"};function y(t,e,s,n,r,i){const o=(0,a.up)("q-card-section"),l=(0,a.up)("q-btn"),u=(0,a.up)("q-card-actions"),c=(0,a.up)("q-card");return(0,a.wg)(),(0,a.iD)("div",k,[(0,a._)("div",W,[(0,a.Wm)(c,{class:"statement-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(o,{class:"bg-primary text-white"},{default:(0,a.w5)((()=>[(0,a._)("div",j,(0,f.zw)(s.statement.description),1)])),_:1}),(0,a.Wm)(u,{class:"button-container",align:"around"},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{class:(0,f.C_)([this.pressed?"btn-pressed":"not-pressed"]),"text-color":"black",onClick:e[0]||(e[0]=t=>{s.guess(!0,s.cardIndex),this.pressed=!0}),label:"Truth"},null,8,["class"]),(0,a.Wm)(l,{class:(0,f.C_)([this.pressed?"not-pressed":"btn-pressed"]),onClick:e[1]||(e[1]=t=>{s.guess(!1,s.cardIndex),this.pressed=!1}),label:"Lie"},null,8,["class"])])),_:1})])),_:1})])])}var S={props:{statement:{type:Object,required:!0},cardIndex:Number,guess:Function},data(){return{pressed:void 0}}},q=s(8055),C=s(9501),L=s(4333),x=s(8125),Z=s(1410),A=s.n(Z);const Q=(0,d.Z)(S,[["render",y],["__scopeId","data-v-ab21e688"]]);var T=Q;A()(S,"components",{QCard:q.Z,QCardSection:C.Z,QCardActions:L.Z,QBtn:x.Z});var U=s(6085),I=s.n(U);const O=I().create({baseURL:"https://api.mjlee.dev/statements",httpsAgent:!1,withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json"}});var D={async getStatements(){return this.response=await O.get("/"),this.response},async getStatement(t){return this.response=await O.get("/"+t),this.response},async get2TruthsAndaLie(){return this.response=await O.get("/game"),this.response},async resetAllStatements(){return this.response=await O.put("/game/reset"),this.response},async submitGuesses(t,e,s){return this.response=await O.put("/game/"+t+"-"+e+"-"+s),this.response}},G={components:{StatementCard:T},methods:{get2TruthsAndaLie(){D.get2TruthsAndaLie().then((t=>this.statements=t.data)).catch((t=>console.log(t)))},checkGuesses(){const t=[0,0];if(this.statements.length<3)return alert("Thank you for playing, your final score is "+this.score+"."),!1;for(var e=0;e<this.statements.length;e++){if(void 0===this.guesses[e])return alert("Please select truth or lie for all 3 statements"),!1;this.guesses[e]?t[0]++:t[1]++}return t[0]==t[1]+t[1]||(alert("Please select 2 truths and 1 lie"),!1)},submitGuesses(){if(this.checkGuesses()){D.submitGuesses(this.statements[0].id,this.statements[1].id,this.statements[2].id);for(var t=0;t<this.statements.length;t++)if(this.statements[t].truth!=this.guesses[t]){this.submitted||(this.score--,this.submitted=!0);break}this.submitted||this.score++,this.submitted=!0}},getNextSet(){this.submitted=!1,this.get2TruthsAndaLie()},async resetAllStatements(){await D.resetAllStatements(),this.get2TruthsAndaLie()},getGuess(t,e){this.guesses[e]=t}},data(){return{statements:[],guesses:[],score:0,submitted:!1}},created(){this.get2TruthsAndaLie()}};const P=(0,d.Z)(G,[["render",b],["__scopeId","data-v-fa2753a0"]]);var V=P;A()(G,"components",{QCard:q.Z,QCardSection:C.Z,QCardActions:L.Z,QBtn:x.Z});const z=t=>((0,a.dD)("data-v-19bdd0d3"),t=t(),(0,a.Cn)(),t),J={class:"about"},M=z((()=>(0,a._)("p",null,"Welcome, my name is MyungJae Lee and this is my personal website.",-1))),H=z((()=>(0,a._)("p",null,"This will be a place for me to showcase my projects.",-1))),N=z((()=>(0,a._)("p",null,"MatthewMJLee@Gmail.com",-1))),B={class:"q-pa-md row items-start q-gutter-md"},R={class:"project-card-row"},Y={class:"project-card"},E=(0,a.Uk)("Checkout my Github ");function F(t,e,s,n,r,i){const o=(0,a.up)("ProjectCard"),l=(0,a.up)("q-btn");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",J,[M,H,N,(0,a._)("div",B,[(0,a._)("div",R,[(0,a._)("div",Y,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.projects,((t,e)=>((0,a.wg)(),(0,a.j4)(o,{key:t.id,project:t,projectIndex:e},null,8,["project","projectIndex"])))),128))])])])]),(0,a.Wm)(l,{href:"https://github.com/mmjlee"},{default:(0,a.w5)((()=>[E])),_:1})],64)}const K={id:"q-app",style:{"min-height":"10vh"}},X={class:"q-pa-md row items-start q-gutter-md"},$=(0,a.Uk)("2 Truths 1 Lie"),tt=(0,a.Uk)(" Technologies "),et=(0,a.Uk)(" Java: Spring "),st=(0,a.Uk)(" JavaScript: Vue.js "),nt=(0,a.Uk)(" SQL: postgreSQL "),at=(0,a.Uk)(" AWS: Elastic Beanstalk, RDS "),rt=(0,a.Uk)(" HTML/CSS "),it=(0,a.Uk)(" Learning GO "),ot=(0,a.Uk)(" Java: Spring "),lt=(0,a.Uk)(" JavaScript: Vue.js "),ut=(0,a.Uk)(" SQL: postgreSQL "),ct=(0,a.Uk)(" HTML/CSS "),dt=(0,a.Uk)(" Learning GO ");function mt(t,e,s,n,r,i){const o=(0,a.up)("q-item-label"),l=(0,a.up)("q-item-section"),u=(0,a.up)("q-item"),c=(0,a.up)("q-separator"),d=(0,a.up)("q-list"),m=(0,a.up)("q-card-section"),p=(0,a.up)("q-card"),h=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",K,[(0,a._)("div",X,[(0,a.Wm)(h,{class:"project-link",to:{name:"GameView"}},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{class:"project-card",flat:"",bordered:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[$])),_:1}),(0,a.Wm)(o,{caption:""},{default:(0,a.w5)((()=>[tt])),_:1})])),_:1})])),_:1}),(0,a.Wm)(c),(0,a.Wm)(m,{class:"bg-primary text-white",horizontal:""},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{class:"col"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{class:"tech-list"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[et])),_:1})])),_:1}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[st])),_:1})])),_:1}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[nt])),_:1})])),_:1}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[at])),_:1})])),_:1}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[rt])),_:1})])),_:1}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[it])),_:1})])),_:1})])),_:1})])),_:1}),(0,a.Wm)(c,{vertical:""}),(0,a.Wm)(m,{class:"col"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{bordered:"",separator:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[ot])),_:1})])),_:1}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[lt])),_:1})])),_:1}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[ut])),_:1})])),_:1}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[ct])),_:1})])),_:1}),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[dt])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])])}var pt={props:{project:{type:Object,required:!0},projectIndex:Number}},ht=s(5246),ft=s(2278),wt=s(3712),gt=s(4492),_t=s(2146);const vt=(0,d.Z)(pt,[["render",mt],["__scopeId","data-v-74450df4"]]);var bt=vt;A()(pt,"components",{QCard:q.Z,QItem:ht.Z,QItemSection:ft.Z,QItemLabel:wt.Z,QSeparator:gt.Z,QCardSection:C.Z,QList:_t.Z});const kt=I().create({baseURL:"https://api.mjlee.dev/projects",httpsAgent:!1,withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json"}});var Wt={async getProjects(){return this.response=await kt.get("/"),this.response},async getProject(t){return this.response=await kt.get("/"+t),this.response}},jt={components:{ProjectCard:bt},methods:{getProjects(){Wt.getProjects().then((t=>this.projects=t.data)).catch((t=>console.log(t)))}},data(){return{projects:[]}},created(){this.getProjects()}};const yt=(0,d.Z)(jt,[["render",F],["__scopeId","data-v-19bdd0d3"]]);var St=yt;A()(jt,"components",{QBtn:x.Z});const qt={class:"statements"},Ct={key:0,class:"statement-details"},Lt={class:"description"},xt={class:"true-or-false"},Zt={class:"description"};function At(t,e,s,n,r,i){return(0,a.wg)(),(0,a.iD)("div",qt,[r.statement?((0,a.wg)(),(0,a.iD)("div",Ct,[(0,a._)("p",Lt,(0,f.zw)(r.statement.description),1),(0,a._)("p",xt,(0,f.zw)(r.statement.truth),1),(0,a._)("p",Zt,(0,f.zw)(r.statement.backstory),1)])):(0,a.kq)("",!0)])}var Qt={props:["id"],data(){return{statement:null}},methods:{getStatement(){D.getStatement(this.id).then((t=>{this.statement=t.data})).catch((t=>{console.log(t)}))}},created(){this.getStatement()}};const Tt=(0,d.Z)(Qt,[["render",At],["__scopeId","data-v-a4540126"]]);var Ut=Tt;const It=(0,h.r5)(),Ot=[{path:"/statements/:id",name:"StatementDetails",props:!0,component:Ut},{path:"/2truths1lie",name:"2T1LView",component:V},{path:"/",name:"AboutView",component:St}],Dt=(0,h.p7)({history:It,routes:Ot});var Gt=Dt,Pt=s(2430),Vt={config:{},plugins:{}};const zt=(0,n.ri)(p).use(Pt.Z,Vt);zt.use(Gt),zt.mount("#app")}},e={};function s(n){var a=e[n];if(void 0!==a)return a.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,s),r.exports}s.m=t,function(){var t=[];s.O=function(e,n,a,r){if(!n){var i=1/0;for(c=0;c<t.length;c++){n=t[c][0],a=t[c][1],r=t[c][2];for(var o=!0,l=0;l<n.length;l++)(!1&r||i>=r)&&Object.keys(s.O).every((function(t){return s.O[t](n[l])}))?n.splice(l--,1):(o=!1,r<i&&(i=r));if(o){t.splice(c--,1);var u=a();void 0!==u&&(e=u)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[n,a,r]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,r,i=n[0],o=n[1],l=n[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(a in o)s.o(o,a)&&(s.m[a]=o[a]);if(l)var c=l(s)}for(e&&e(n);u<i.length;u++)r=i[u],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(c)},n=self["webpackChunk_2truths1lievuejs"]=self["webpackChunk_2truths1lievuejs"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(3374)}));n=s.O(n)})();
//# sourceMappingURL=app.2470a60d.js.map