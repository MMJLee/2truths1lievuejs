(function(){"use strict";var t={6759:function(t,e,s){var n=s(5102),a=s(9269);const r={id:"app"},i=(0,a.Uk)("About"),o=(0,a.Uk)(" | "),u=(0,a.Uk)("Game");function l(t,e,s,n,l,c){const d=(0,a.up)("router-link"),m=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("nav",null,[(0,a.Wm)(d,{to:{name:"About"}},{default:(0,a.w5)((()=>[i])),_:1}),o,(0,a.Wm)(d,{to:{name:"GameView"}},{default:(0,a.w5)((()=>[u])),_:1})]),(0,a.Wm)(m)])}var c={name:"LayoutDefault",components:{}},d=s(7617);const m=(0,d.Z)(c,[["render",l]]);var p=m,h=s(2201),f=s(3201);const g={id:"q-app",style:{"min-height":"10vh"}},w={class:"statement-card-row"},v={class:"statement-card"},b={class:"text-h6"};function _(t,e,s,n,r,i){const o=(0,a.up)("StatementCard"),u=(0,a.up)("q-card-section"),l=(0,a.up)("q-btn"),c=(0,a.up)("q-card-actions"),d=(0,a.up)("q-card");return(0,a.wg)(),(0,a.iD)("div",g,[(0,a._)("div",w,[(0,a._)("div",v,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.statements,((t,e)=>((0,a.wg)(),(0,a.j4)(o,{key:t.id,statement:t,cardIndex:e,guess:i.getGuess},null,8,["statement","cardIndex","guess"])))),128))]),(0,a.Wm)(d,{class:"scoreboard-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{class:"bg-primary text-white"},{default:(0,a.w5)((()=>[(0,a._)("div",b,"Score: "+(0,f.zw)(r.score),1)])),_:1}),(0,a.Wm)(c,{align:"center"},{default:(0,a.w5)((()=>[0===r.statements.length?((0,a.wg)(),(0,a.j4)(l,{key:0,color:"white","text-color":"black",onClick:e[0]||(e[0]=t=>i.resetAllStatements()),label:"Reset"})):((0,a.wg)(),(0,a.j4)(l,{key:1,color:"white","text-color":"black",onClick:e[1]||(e[1]=t=>i.submitGuesses()),label:"Submit"})),this.submitted?((0,a.wg)(),(0,a.j4)(l,{key:2,color:"white","text-color":"black",onClick:e[2]||(e[2]=t=>i.getNextSet()),label:"Next"})):(0,a.kq)("",!0)])),_:1})])),_:1})])])}const k={id:"q-app",style:{"min-height":"10vh"}},y={class:"q-pa-md row items-start q-gutter-md"},S={class:"description"};function W(t,e,s,n,r,i){const o=(0,a.up)("q-card-section"),u=(0,a.up)("q-btn"),l=(0,a.up)("q-card-actions"),c=(0,a.up)("q-card");return(0,a.wg)(),(0,a.iD)("div",k,[(0,a._)("div",y,[(0,a.Wm)(c,{class:"statement-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(o,{class:"bg-primary text-white"},{default:(0,a.w5)((()=>[(0,a._)("div",S,(0,f.zw)(s.statement.description),1)])),_:1}),(0,a.Wm)(l,{class:"button-container",align:"around"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{class:(0,f.C_)([this.pressed?"btn-pressed":"not-pressed"]),"text-color":"black",onClick:e[0]||(e[0]=t=>{s.guess(!0,s.cardIndex),this.pressed=!0}),label:"Truth"},null,8,["class"]),(0,a.Wm)(u,{class:(0,f.C_)([this.pressed?"not-pressed":"btn-pressed"]),onClick:e[1]||(e[1]=t=>{s.guess(!1,s.cardIndex),this.pressed=!1}),label:"Lie"},null,8,["class"])])),_:1})])),_:1})])])}var C={props:{statement:{type:Object,required:!0},cardIndex:Number,guess:Function},data(){return{pressed:void 0}}},q=s(8055),x=s(9501),Z=s(4333),j=s(8125),A=s(1410),G=s.n(A);const L=(0,d.Z)(C,[["render",W],["__scopeId","data-v-ab21e688"]]);var Q=L;G()(C,"components",{QCard:q.Z,QCardSection:x.Z,QCardActions:Z.Z,QBtn:j.Z});var O=s(6085),I=s.n(O);const T=I().create({baseURL:"http://2truths1lie.us-east-2.elasticbeanstalk.com/api/v1",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}});var U={async getStatements(){return this.response=await T.get("/statement"),this.response},async getStatement(t){return this.response=await T.get("/statement/"+t),this.response},async get2TruthsAndaLie(){return this.response=await T.get("/game"),this.response},async resetAllStatements(){return this.response=await T.put("/game/reset"),this.response},async submitGuesses(t,e,s){return this.response=await T.put("/game/"+t+"-"+e+"-"+s),this.response}},D={name:"GameView",components:{StatementCard:Q},methods:{get2TruthsAndaLie(){U.get2TruthsAndaLie().then((t=>this.statements=t.data)).catch((t=>console.log(t)))},checkGuesses(){const t=[0,0];if(this.statements.length<3)return alert("Thank you for playing, your final score is "+this.score+"."),!1;for(var e=0;e<this.statements.length;e++){if(void 0===this.guesses[e])return alert("Please select truth or lie for all 3 statements"),!1;this.guesses[e]?t[0]++:t[1]++}return t[0]==t[1]+t[1]||(alert("Please select 2 truths and 1 lie"),!1)},submitGuesses(){if(this.checkGuesses()){U.submitGuesses(this.statements[0].id,this.statements[1].id,this.statements[2].id);for(var t=0;t<this.statements.length;t++)if(this.statements[t].truth!=this.guesses[t]){this.submitted||(this.score--,this.submitted=!0);break}this.submitted||this.score++,this.submitted=!0}},getNextSet(){this.submitted=!1,this.get2TruthsAndaLie()},async resetAllStatements(){await U.resetAllStatements(),this.get2TruthsAndaLie()},getGuess(t,e){this.guesses[e]=t}},data(){return{statements:[],guesses:[],score:0,submitted:!1}},created(){this.get2TruthsAndaLie()}};const z=(0,d.Z)(D,[["render",_],["__scopeId","data-v-5f18f0e4"]]);var V=z;G()(D,"components",{QCard:q.Z,QCardSection:x.Z,QCardActions:Z.Z,QBtn:j.Z});const N={class:"about"},P=(0,a._)("p",null,"I'm an aspiring software developer",-1),B=(0,a._)("p",null,"I hope you like the game",-1),H=(0,a.Uk)(" Java: Spring "),F=(0,a.Uk)(" JavaScript: Vue.js "),J=(0,a.Uk)(" SQL: postgreSQL "),M=(0,a.Uk)(" HTML/CSS "),R=(0,a.Uk)(" Learning GO "),Y=(0,a.Uk)(" Visit my Github below "),E=(0,a.Uk)("Github ");function K(t,e){const s=(0,a.up)("q-item-section"),n=(0,a.up)("q-item"),r=(0,a.up)("q-list"),i=(0,a.up)("q-btn");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",N,[P,B,(0,a.Wm)(r,{bordered:"",separator:""},{default:(0,a.w5)((()=>[(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[H])),_:1})])),_:1}),(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[F])),_:1})])),_:1}),(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[J])),_:1})])),_:1}),(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[M])),_:1})])),_:1}),(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[R])),_:1})])),_:1}),(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[Y])),_:1})])),_:1})])),_:1})]),(0,a.Wm)(i,{href:"https://github.com/mmjlee"},{default:(0,a.w5)((()=>[E])),_:1})],64)}var X=s(2146),$=s(5246),tt=s(2278);const et={},st=(0,d.Z)(et,[["render",K]]);var nt=st;G()(et,"components",{QList:X.Z,QItem:$.Z,QItemSection:tt.Z,QBtn:j.Z});const at={class:"statements"},rt={key:0,class:"statement-details"},it={class:"description"},ot={class:"true-or-false"},ut={class:"description"};function lt(t,e,s,n,r,i){return(0,a.wg)(),(0,a.iD)("div",at,[r.statement?((0,a.wg)(),(0,a.iD)("div",rt,[(0,a._)("p",it,(0,f.zw)(r.statement.description),1),(0,a._)("p",ot,(0,f.zw)(r.statement.truth),1),(0,a._)("p",ut,(0,f.zw)(r.statement.backstory),1)])):(0,a.kq)("",!0)])}var ct={props:["id"],data(){return{statement:null}},methods:{getStatement(){U.getStatement(this.id).then((t=>{this.statement=t.data})).catch((t=>{console.log(t)}))}},created(){this.getStatement()}};const dt=(0,d.Z)(ct,[["render",lt],["__scopeId","data-v-a4540126"]]);var mt=dt;const pt=(0,h.r5)(),ht=[{path:"/statements/:id",name:"StatementDetails",props:!0,component:mt},{path:"/game",name:"GameView",component:V},{path:"/",name:"About",component:nt}],ft=(0,h.p7)({history:pt,routes:ht});var gt=ft,wt=s(2430),vt={config:{},plugins:{}};const bt=(0,n.ri)(p).use(wt.Z,vt);bt.use(gt),bt.mount("#app")}},e={};function s(n){var a=e[n];if(void 0!==a)return a.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,s),r.exports}s.m=t,function(){var t=[];s.O=function(e,n,a,r){if(!n){var i=1/0;for(c=0;c<t.length;c++){n=t[c][0],a=t[c][1],r=t[c][2];for(var o=!0,u=0;u<n.length;u++)(!1&r||i>=r)&&Object.keys(s.O).every((function(t){return s.O[t](n[u])}))?n.splice(u--,1):(o=!1,r<i&&(i=r));if(o){t.splice(c--,1);var l=a();void 0!==l&&(e=l)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[n,a,r]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,r,i=n[0],o=n[1],u=n[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(a in o)s.o(o,a)&&(s.m[a]=o[a]);if(u)var c=u(s)}for(e&&e(n);l<i.length;l++)r=i[l],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(c)},n=self["webpackChunk_2truths1lievuejs"]=self["webpackChunk_2truths1lievuejs"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(6759)}));n=s.O(n)})();
//# sourceMappingURL=app.d2709b1b.js.map