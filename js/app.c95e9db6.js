(function(){"use strict";var t={3576:function(t,e,n){var o=n(5130),r=n(6768);function i(t,e){const n=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.Wv)(n)}var a=n(1241);const s={},c=(0,a.A)(s,[["render",i]]);var d=c,u=n(1387);const l={id:"body"},v={id:"title"},h={id:"total"},p={id:"days"},f={id:"hours"},m={id:"minutes"},g={id:"seconds"},b={id:"bots"};function w(t,e,n,o,i,a){const s=(0,r.g2)("title-tile"),c=(0,r.g2)("total"),d=(0,r.g2)("countdown"),u=(0,r.g2)("been-on-the-site");return(0,r.uX)(),(0,r.CE)("div",l,[(0,r.Lk)("div",v,[(0,r.bF)(s,{title:"meeting her 💜"})]),(0,r.Lk)("div",h,[(0,r.bF)(c,{msec:this.totalSeconds},null,8,["msec"])]),(0,r.Lk)("div",p,[(0,r.bF)(d,{cur:this.days,until:356,title:"days",mode:null},null,8,["cur"])]),(0,r.Lk)("div",f,[(0,r.bF)(d,{cur:this.hours,until:24,title:"hours",mode:null},null,8,["cur"])]),(0,r.Lk)("div",m,[(0,r.bF)(d,{cur:this.minutes,until:60,title:"minutes",mode:null},null,8,["cur"])]),(0,r.Lk)("div",g,[(0,r.bF)(d,{cur:this.seconds,until:60,title:"seconds",mode:null},null,8,["cur"])]),(0,r.Lk)("div",b,[(0,r.bF)(u)])])}var k=n(4232);const y={key:0,id:"percentage"},S={key:1,id:"percentage"},_={id:"title"};function L(t,e,n,o,i,a){const s=(0,r.g2)("circular-loading-bar");return(0,r.uX)(),(0,r.CE)("div",{id:"countdown",onClick:e[0]||(e[0]=t=>i.showBar=!i.showBar)},[i.showBar?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("div",y,(0,k.v_)(100*a.percentage)+" % ",1)),i.showBar?((0,r.uX)(),(0,r.CE)("div",S,[(0,r.bF)(s,{percentage:a.percentage},null,8,["percentage"])])):(0,r.Q3)("",!0),(0,r.Lk)("div",_,(0,k.v_)(this.cur)+" "+(0,k.v_)(this.title),1)])}const O=t=>((0,r.Qi)("data-v-c0958196"),t=t(),(0,r.jt)(),t),E={id:"progress"},C=O((()=>(0,r.Lk)("div",{id:"barOverflow"},[(0,r.Lk)("div",{id:"bar"})],-1))),I=[C];function T(t,e,n,o,i,a){return(0,r.uX)(),(0,r.CE)("div",E,I)}const j={props:["percentage"],name:"circularLoadingBar",data(){return{}},computed:{calculatedPercentage(){return`rotate(${45+180*this.percentage}deg)`}},methods:{},watch:{}},B=()=>{(0,o.$9)((t=>({"65cac066":t.calculatedPercentage})))},F=j.setup;j.setup=F?(t,e)=>(B(),F(t,e)):B;var X=j;const A=(0,a.A)(X,[["render",T],["__scopeId","data-v-c0958196"]]);var P=A,Q={props:["cur","until","title","mode"],name:"countdown",components:{circularLoadingBar:P},data(){return{showBar:!0}},computed:{percentage(){let t;return t=null===this.cur?0:this.cur,this.truncate(t/this.until)}},methods:{truncate(t){return t.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]}},watch:{}};const x=(0,a.A)(Q,[["render",L],["__scopeId","data-v-a8f3e654"]]);var D=x;const M={id:"heading"},$={id:"head"};function H(t,e,n,o,i,a){return(0,r.uX)(),(0,r.CE)("div",M,[(0,r.Lk)("h1",$,(0,k.v_)(this.title),1)])}var W={props:["title"],name:"titleTile",data(){return{}},computed:{},methods:{},watch:{}};const Y=(0,a.A)(W,[["render",H],["__scopeId","data-v-00fe0202"]]);var q=Y;const z=t=>((0,r.Qi)("data-v-59951b88"),t=t(),(0,r.jt)(),t),G={id:"countdown"},J={id:"percentage"},K=z((()=>(0,r.Lk)("div",{id:"title"}," seconds ",-1)));function N(t,e,n,o,i,a){return(0,r.uX)(),(0,r.CE)("div",G,[(0,r.Lk)("div",J,(0,k.v_)(a.tts),1),K])}var R={props:["msec"],name:"total",data(){return{}},computed:{tts(){let t=(this.msec/1e3).toString();if(t.includes(".")){let e=t.split("."),n=e[1].padEnd(3,"0");return e[0]+"."+n}return t}},methods:{},watch:{}};const U=(0,a.A)(R,[["render",N],["__scopeId","data-v-59951b88"]]);var V=U;const Z=t=>((0,r.Qi)("data-v-38a873a9"),t=t(),(0,r.jt)(),t),tt={id:"countdown"},et={id:"percentage"},nt=Z((()=>(0,r.Lk)("div",{id:"title"}," total seconds on this site ",-1)));function ot(t,e,n,o,i,a){return(0,r.uX)(),(0,r.CE)("div",tt,[(0,r.Lk)("div",et,(0,k.v_)(i.seconds),1),nt])}var rt={props:[],name:"beenOnTheSite",components:{circularLoadingBar:P},data(){return{seconds:0}},computed:{},methods:{},mounted(){window.addEventListener("beforeunload",(()=>{localStorage.setItem("secondsOnTheSite",this.seconds)}));let t=localStorage.getItem("secondsOnTheSite");this.seconds=t||0;setInterval((()=>{this.seconds++}),1e3)}};const it=(0,a.A)(rt,[["render",ot],["__scopeId","data-v-38a873a9"]]);var at=it,st={name:"WelcomeScreen",components:{Total:V,TitleTile:q,countdown:D,beenOnTheSite:at},data(){return{totalSeconds:0}},computed:{days(){return Math.floor(this.totalSeconds/864e5)},hours(){return this.diff.getHours()-1>0?this.diff.getHours()-1:23},minutes(){return this.diff.getMinutes()},seconds(){return this.diff.getSeconds()},diff(){return new Date(this.totalSeconds)}},mounted(){setInterval((()=>{let t=Date.now();this.totalSeconds=this.$store.state.finalDate-t}),100)}};const ct=(0,a.A)(st,[["render",w],["__scopeId","data-v-58d5a3b6"]]);var dt=ct,ut={__name:"notification",setup(t){const e=(0,u.lq)();return(0,r.wB)((()=>e.params.id),((t,e)=>{console.log("Hehe")})),(t,e)=>null}};const lt=ut;var vt=lt;const ht=[{path:"/",name:"welcome",component:dt},{path:"/subscription",component:vt},{path:"/subscription/:id",component:vt}],pt=(0,u.aE)({history:(0,u.Bt)(),routes:ht});var ft=pt,mt=n(782),gt=(0,mt.y$)({state(){return{finalDate:17144388e5}},getters:{},mutations:{},actions:{},modules:{}}),bt=n(8950),wt=n(92),kt=n(2353),yt=n(292);n(1942);bt.Yv.add(wt.C91),bt.Yv.add(kt.X7I);const St=(0,o.Ef)(d);St.component("FontAwesomeIcon",yt.gc),St.use(gt).use(ft).mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var a=1/0;for(u=0;u<t.length;u++){o=t[u][0],r=t[u][1],i=t[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(s=!1,i<a&&(a=i));if(s){t.splice(u--,1);var d=r();void 0!==d&&(e=d)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[o,r,i]}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,a=o[0],s=o[1],c=o[2],d=0;if(a.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var u=c(n)}for(e&&e(o);d<a.length;d++)i=a[d],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},o=self["webpackChunkStone"]=self["webpackChunkStone"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(3576)}));o=n.O(o)})();
//# sourceMappingURL=app.c95e9db6.js.map