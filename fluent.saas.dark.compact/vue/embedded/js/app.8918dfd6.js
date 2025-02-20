(function(){var e={542:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return v}});a(69375);var n=a(59259),r=a(32723),s=a(26379),o=a(68974),u=a(47871),i=a(90132),c=a(12441),l=a(41139),d=a(78297);const f={class:"messages"};var p=(0,n.pM)({__name:"app-header",props:{menuToggleEnabled:{type:Boolean},title:{},toggleMenuFunc:{type:Function}},setup(e){const t=(0,o.rd)(),a=(0,o.lq)(),p=(0,r.KR)();function m(){c.l.logOut(),t.push({path:"/login",query:{redirect:a.path}})}c.l.getUser().then((({data:e})=>{p.value=e}));const h=[{text:"Logout",icon:"runner",onClick:m}];return(e,t)=>((0,n.uX)(),(0,n.CE)("header",null,[(0,n.bF)((0,r.R1)(i.cZ),{class:"header-toolbar"},{menuUserItem:(0,n.k6)((()=>[(0,n.bF)(d["default"],{user:p.value,"menu-items":h,"menu-mode":"list"},null,8,["user"])])),default:(0,n.k6)((()=>[(0,n.bF)((0,r.R1)(i.KV),{visible:e.menuToggleEnabled,location:"before","css-class":"menu-button"},{default:(0,n.k6)((()=>[(0,n.bF)((0,r.R1)(u.x),{icon:"menu","styling-mode":"text",onClick:e.toggleMenuFunc},null,8,["onClick"])])),_:1},8,["visible"]),e.title?((0,n.uX)(),(0,n.Wv)((0,r.R1)(i.KV),{key:0,location:"before","css-class":"header-title dx-toolbar-label"},{default:(0,n.k6)((()=>[(0,n.Lk)("div",null,(0,s.v_)(e.title),1)])),_:1})):(0,n.Q3)("",!0),(0,n.bF)((0,r.R1)(i.KV),{location:"after","locate-in-menu":"auto",widget:"dxTextBox","css-class":"global-search-box",options:{stylingMode:"filled",mode:"search",placeholder:"Search",width:180}}),(0,n.bF)((0,r.R1)(i.KV),{location:"after","locate-in-menu":"never"},{default:(0,n.k6)((()=>[(0,n.bF)(l["default"])])),_:1}),(0,n.bF)((0,r.R1)(i.KV),{location:"after"},{default:(0,n.k6)((()=>[(0,n.Lk)("div",f,[(0,n.bF)((0,r.R1)(u.x),{icon:"belloutline","styling-mode":"text"}),t[0]||(t[0]=(0,n.Lk)("div",{class:"dx-badge"}," 4 ",-1))])])),_:1}),(0,n.bF)((0,r.R1)(i.KV),{location:"after","locate-in-menu":"auto","menu-item-template":"menuUserItem"},{default:(0,n.k6)((()=>[(0,n.Lk)("div",null,[(0,n.bF)(d["default"],{user:p.value,"menu-items":h,"menu-mode":"context"},null,8,["user"])])])),_:1})])),_:1})]))}}),m=a(14480);const h=(0,m.A)(p,[["__scopeId","data-v-f9de7db8"]]);var v=h},4670:function(e,t,a){"use strict";a.d(t,{Q:function(){return w}});a(81045),a(9925);var n=a(68974),r=a(59259),s=a(32723),o=a(9131),u=a(542),i=a(93360);const c={class:"side-nav-outer-toolbar"};var l=(0,r.pM)({__name:"side-nav-outer-toolbar",props:{title:{default:""},isXSmall:{type:Boolean},isLarge:{type:Boolean}},setup(e){const t=e,a=(0,n.lq)(),l=(0,s.KR)(t.isLarge),d=(0,s.KR)(!1);function f({event:e}){e?.stopPropagation(),l.value&&(d.value=!1),l.value=!l.value}function p(){!1===l.value&&(d.value=!0),l.value=!0}(0,r.wB)((()=>t.isLarge),(()=>{d.value||(l.value=t.isLarge)})),(0,r.wB)((()=>a.path),(()=>{!d.value&&t.isLarge||(l.value=!1,d.value=!1)}));const m=(0,r.EW)((()=>{const e=!t.isLarge;return{menuMode:t.isLarge?"shrink":"overlap",menuRevealMode:t.isXSmall?"slide":"expand",minMenuSize:t.isXSmall?0:48,maxMenuSize:t.isXSmall?250:void 0,closeOnOutsideClick:e,shaderEnabled:e}}));return(e,t)=>((0,r.uX)(),(0,r.CE)("div",c,[(0,r.bF)(u["default"],{class:"layout-header","menu-toggle-enabled":!0,"toggle-menu-func":f,title:e.title},null,8,["title"]),(0,r.bF)((0,s.R1)(o.E1),{class:"layout-body",position:"before",template:"menuTemplate",opened:l.value,"onUpdate:opened":t[0]||(t[0]=e=>l.value=e),"opened-state-mode":m.value.menuMode,"reveal-mode":m.value.menuRevealMode,"min-size":m.value.minMenuSize,"max-size":m.value.maxMenuSize,shading:m.value.shaderEnabled,"close-on-outside-click":m.value.closeOnOutsideClick},{menuTemplate:(0,r.k6)((()=>[(0,r.bF)(i["default"],{"compact-mode":!l.value,onClick:p},null,8,["compact-mode"])])),default:(0,r.k6)((()=>[(0,r.RG)(e.$slots,"default")])),_:3},8,["opened","opened-state-mode","reveal-mode","min-size","max-size","shading","close-on-outside-click"])]))}}),d=a(14480);const f=(0,d.A)(l,[["__scopeId","data-v-2f8b4608"]]);var p=f,m=a(13906),h=a(77013),v=(0,r.pM)({__name:"single-card",setup(e){const t=(0,n.lq)(),a=(0,s.KR)(t.meta.title),o=(0,s.KR)(t.meta.description);return(0,r.wB)((()=>t.path),(()=>{a.value=t.meta.title,o.value=t.meta.description})),(e,t)=>((0,r.uX)(),(0,r.Wv)((0,s.R1)(m.A),{height:"100%",width:"100%",class:"view-wrapper-scroll single-card"},{default:(0,r.k6)((()=>[(0,r.bF)(h["default"],{title:a.value,description:o.value},{default:(0,r.k6)((()=>[(0,r.RG)(e.$slots,"default")])),_:3},8,["title","description"])])),_:3}))}});const g=(0,d.A)(v,[["__scopeId","data-v-93ea8e9e"]]);var b=g,y=a(12441);function k(e){return()=>a(89361)(`./${e}.vue`)}const w=(0,n.aE)({history:(0,n.Bt)(),routes:[{path:"/",redirect:"/crm-contact-list"},{path:"/login",name:"login",meta:{requiresAuth:!1,layout:b,title:"Sign In"},props:{resetLink:"/reset-password",createAccountLink:"/create-account"},component:k("login-form")},{path:"/reset-password",name:"reset-password",props:{signInLink:"/login",buttonLink:"/login"},meta:{requiresAuth:!1,layout:b,title:"Reset Password",description:"Please enter the email address that you used to register, and we will send you a link to reset your password via Email."},component:k("reset-password-form")},{path:"/create-account",name:"create-account",meta:{requiresAuth:!1,layout:b,title:"Sign Up"},props:{redirectLink:"/login",buttonLink:"/login"},component:k("create-account-form")},{path:"/change-password/:recoveryCode",name:"change-password",meta:{requiresAuth:!1,layout:b,title:"Change Password"},component:k("change-password-form")},...["crm-contact-list","crm-contact-details","planning-task-list","planning-task-details","planning-scheduler","analytics-dashboard","analytics-sales-report","analytics-geography","sign-in-form","sign-up-form","reset-password-form","user-profile"].map((e=>({path:`/${e}`,meta:{requiresAuth:!0,layout:p},component:()=>a(39561)(`./${e}.vue`)})))]});w.beforeEach(((e,t,a)=>{"login-form"===e.name&&y.l.loggedIn()&&a({name:"home"}),e.matched.some((e=>e.meta.requiresAuth))?y.l.loggedIn()?a():a({name:"login-form",query:{redirect:e.fullPath}}):a()}))},12441:function(e,t,a){"use strict";a.d(t,{l:function(){return r}});const n={email:"jheart@dx-email.com",name:"John",lastName:"Heart",avatarUrl:"https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/01.png"},r={_user:n,loggedIn(){return!!this._user},async logIn(e,t){try{return this._user={...n,email:e},{isOk:!0,data:this._user}}catch{return{isOk:!1,message:"Authentication failed"}}},async logOut(){},async getUser(){try{return{isOk:!0,data:this._user}}catch{return{isOk:!1}}},async resetPassword(e){try{return{isOk:!0}}catch{return{isOk:!1,message:"Failed to reset password"}}},async changePassword(e,t){try{return{isOk:!0}}catch{return{isOk:!1,message:"Failed to change password"}}},async createAccount(e,t){try{return{isOk:!0}}catch{return{isOk:!1,message:"Failed to create account"}}}}},39561:function(e,t,a){var n={"./analytics-dashboard.vue":[40844,166,3543],"./analytics-geography.vue":[6618,166,734],"./analytics-sales-report.vue":[72430,166,7925],"./crm-contact-details.vue":[41611,166,8570,5116],"./crm-contact-list.vue":[3058,166,2817,695,5378,723],"./planning-scheduler.vue":[20956,166,1722],"./planning-task-details.vue":[59244,166,3528,8913],"./planning-task-list.vue":[96298,166,2817,695,9667,3528,4520],"./reset-password-form.vue":[91055,1711],"./sign-in-form.vue":[68882,8902],"./sign-up-form.vue":[17890,5690],"./user-profile.vue":[84372,166,6275]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)},r.id=39561,e.exports=r},41139:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});var n=a(59259),r=a(32723),s=a(47871),o=a(98478),u=(0,n.pM)({__name:"theme-switcher",setup(e){const{currentTheme:t}=o.B;function a(){o.B.switchAppTheme()}return(e,o)=>((0,n.uX)(),(0,n.Wv)((0,r.R1)(s.x),{class:"theme-button","styling-mode":"text",icon:"dark"===(0,r.R1)(t)?"sun":"moon",onClick:a},null,8,["icon"]))}});const i=u;var c=i},42562:function(e,t,a){a(81045),a(5350);class n{constructor(){this.resizeObserver=new ResizeObserver((e=>{e.forEach((e=>{e.contentRect&&e.contentRect.height&&window.parent.postMessage({type:"frame-height",height:e.contentRect.height},"*")}))})),this.mutationObserver=new MutationObserver((e=>{e.forEach((e=>{e.addedNodes&&(e.target&&this.isValidNode(e.target)?this.subscribe(e.target):e.addedNodes.forEach((e=>{this.isValidNode(e)&&this.subscribe(e)})))}))}))}isValidNode(e){return e.classList&&e.classList.contains("content")}subscribe(e){this.mutationObserver.disconnect(),e.style.alignSelf="flex-start",this.resizeObserver.observe(e)}listen(){this.mutationObserver.observe(document.body,{childList:!0,subtree:!0,attributes:!1,characterData:!1})}}const r=new n;r.listen()},57818:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return l}});var n=a(59259),r=a(26379);const s={class:"footer"};function o(e,t){return(0,n.uX)(),(0,n.CE)("footer",s,[(0,n.eW)(" Copyright © "+(0,r.v_)((new Date).getFullYear())+" ",1),t[0]||(t[0]=(0,n.Lk)("br",null,null,-1)),t[1]||(t[1]=(0,n.eW)(" Developer Express Inc. "))])}var u=a(14480);const i={},c=(0,u.A)(i,[["render",o],["__scopeId","data-v-60cd8c94"]]);var l=c},77013:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var n=a(59259),r=a(26379);const s={class:"auth-card"},o={class:"dx-card content"},u={class:"header"},i={class:"title"},c={class:"description"};var l=(0,n.pM)({__name:"card-auth",props:{title:{},description:{}},setup(e){const t=e;return(e,a)=>((0,n.uX)(),(0,n.CE)("div",s,[(0,n.Lk)("div",o,[(0,n.Lk)("div",u,[(0,n.Lk)("div",i,(0,r.v_)(t.title),1),(0,n.Lk)("div",c,(0,r.v_)(t.description),1)]),(0,n.RG)(e.$slots,"default")])]))}}),d=a(14480);const f=(0,d.A)(l,[["__scopeId","data-v-722f1f8a"]]);var p=f},77990:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var n=a(59259),r=a(26379),s=a(32723),o=a(29795);const u={class:"user-info"},i={key:0,class:"image-container"},c={class:"user-name"};var l=(0,n.pM)({__name:"user-menu-section",props:{showAvatar:{type:Boolean,default:!1},menuItems:{default:[]},user:{default:{}}},setup(e,{expose:t}){const a=(0,s.KR)(null),l=({itemData:e})=>e.onClick();function d(){a.value.instance.focus()}return t({focusList:d}),(e,t)=>((0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("div",u,[e.showAvatar?((0,n.uX)(),(0,n.CE)("div",i,[(0,n.Lk)("div",{style:(0,r.Tr)({backgroundImage:`url(${e.user?.avatarUrl})`}),class:"user-image"},null,4)])):(0,n.Q3)("",!0),(0,n.Lk)("div",c,(0,r.v_)(e.user?.name)+" "+(0,r.v_)(e.user?.lastName),1)]),(0,n.bF)((0,s.R1)(o.Ay),{ref_key:"userInfoListRef",ref:a,items:e.menuItems,onItemClick:l,"element-attr":{class:"user-info-list"}},null,8,["items"])],64))}}),d=a(14480);const f=(0,d.A)(l,[["__scopeId","data-v-2bcf89e4"]]);var p=f},78297:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var n=a(59259),r=a(32723),s=a(9131),o=a(77990);const u={class:"user-panel"},i={key:1};var c=(0,n.pM)({__name:"user-panel",props:{menuMode:{default:""},menuItems:{default:()=>[]},user:{}},setup(e){const t=(0,r.KR)();function a({component:e}){e.registerKeyHandler("downArrow",(()=>{t.value?.focusList()}))}return(e,t)=>((0,n.uX)(),(0,n.CE)("div",u,["context"===e.menuMode?((0,n.uX)(),(0,n.Wv)((0,r.R1)(s.KI),{key:0,"styling-mode":"text",icon:e.user?.avatarUrl,"show-arrow-icon":!1,"element-attr":{class:"user-button"},"drop-down-options":{width:"auto"},"drop-down-content-template":"dropDownContentTemplate",onContentReady:a},{dropDownContentTemplate:(0,n.k6)((({})=>[(0,n.bF)(o["default"],{"menu-items":e.menuItems,user:e.user,"show-avatar":!1,ref:"userMenuSection"},null,8,["menu-items","user"])])),_:1},8,["icon"])):(0,n.Q3)("",!0),"list"===e.menuMode?((0,n.uX)(),(0,n.CE)("div",i,[(0,n.bF)(o["default"],{"menu-items":e.menuItems,user:e.user,"show-avatar":!0},null,8,["menu-items","user"])])):(0,n.Q3)("",!0)]))}}),l=a(14480);const d=(0,l.A)(c,[["__scopeId","data-v-215674cc"]]);var f=d},79390:function(e,t,a){"use strict";a(42562);var n=a(5313);const r="app-info";var s=a(98478),o=a(59259),u=a(26379),i=a(32723),c=a(98416);const l={id:"root"},d={class:"content"};var f=(0,o.pM)({__name:"App",setup(e){const t=(0,o.WQ)(r),a=(0,o.EW)((()=>["app"].concat(c.du.value.cssClasses)));return document.title=t?.title||"",(e,n)=>{const r=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",l,[(0,o.Lk)("div",{class:(0,u.C4)(a.value)},[((0,o.uX)(),(0,o.Wv)((0,o.$y)(e.$route.meta.layout),{title:(0,i.R1)(t)?.title,"is-x-small":(0,i.R1)(c.du).isXSmall,"is-large":(0,i.R1)(c.du).isLarge},{default:(0,o.k6)((()=>[(0,o.Lk)("div",d,[(0,o.bF)(r)])])),_:1},8,["title","is-x-small","is-large"]))],2)])}}}),p=a(14480);const m=(0,p.A)(f,[["__scopeId","data-v-7182777a"]]);var h=m,v=a(4670);s.B.setAppTheme();const g=(0,n.Ef)(h);g.use(v.Q),g.provide(r,{title:"UI Template Gallery"}),g.mount("#app")},89361:function(e,t,a){var n={"./app-footer.vue":[57818],"./app-header.vue":[542],"./card-activities.vue":[60890,2741],"./card-analytics.vue":[38043,8348],"./card-auth.vue":[77013],"./card-menu.vue":[16497,6538],"./card-messages.vue":[27046,2145],"./card-notes.vue":[175,166,9336],"./card-opportunities.vue":[50568,166,6527],"./card-tasks.vue":[31367,3718],"./change-password-form.vue":[48832,9226],"./change-profile-password-form.vue":[50464,1875],"./contact-form.vue":[68570,8570,2024],"./contact-new-form.vue":[45358,6417],"./contact-panel.vue":[45378,166,5378,8238],"./create-account-form.vue":[68867,1047],"./login-form.vue":[17534,6268],"./login-oauth.vue":[38516,5429],"./password-text-box.vue":[27358,7394],"./pictured-item-select-box.vue":[77825,203],"./profile-card.vue":[61358,1567],"./reset-password-form.vue":[36798,8758],"./side-navigation-menu.vue":[93360],"./status-indicator.vue":[85121,5364],"./status-select-box.vue":[93557,2555],"./task-form.vue":[71147,3528,8162],"./task-kanban-card.vue":[17945,5353],"./task-list-gantt.vue":[76430,2817,2544],"./task-list-grid.vue":[58445,2817,695,9667,3399],"./task-list-kanban.vue":[29413,2817,9667,590],"./theme-switcher.vue":[41139],"./ticker-card.vue":[6619,2173],"./user-avatar.vue":[19308,1174],"./user-menu-section.vue":[77990],"./user-panel.vue":[78297]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)},r.id=89361,e.exports=r},93360:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});a(69375),a(84915);var n=a(59259),r=a(32723),s=a(16545),o=a(98416),u=a(68974);const i=[{text:"CRM",icon:"user",path:"",items:[{text:"Contact List",path:"/crm-contact-list"},{text:"Contact Details",path:"/crm-contact-details"}]},{text:"Planning",icon:"event",path:"",items:[{text:"Task List",path:"/planning-task-list"},{text:"Task Details",path:"/planning-task-details"},{text:"Scheduler",path:"/planning-scheduler"}]},{text:"Analytics",icon:"chart",path:"",items:[{text:"Dashboard",path:"/analytics-dashboard"},{text:"Sales Report",path:"/analytics-sales-report"},{text:"Geography",path:"/analytics-geography"}]},{text:"Authentication",icon:"card",path:"",items:[{text:"Sign In Form",path:"/sign-in-form"},{text:"Sign Up Form",path:"/sign-up-form"},{text:"Reset Password Form",path:"/reset-password-form"}]},{text:"Common",icon:"box",path:"",items:[{text:"User Profile",path:"/user-profile"}]}];var c=a(57818);const l={class:"menu-container theme-dependent"};var d=(0,n.pM)({__name:"side-navigation-menu",props:{compactMode:{type:Boolean}},emits:["click"],setup(e,{emit:t}){const a=(0,u.lq)(),d=(0,u.rd)(),f=(0,o.LR)()["screen-large"],p=i.map((e=>(e.path&&!/^\//.test(e.path)&&(e.path=`/${e.path}`),{...e,expanded:f}))),m=(0,r.KR)(null),h=e,v=t;function g(...e){v("click",e)}function b(e){e.itemData.path&&!h.compactMode&&(d.push(e.itemData.path),e.event.stopPropagation())}function y(){m.value&&m.value.instance&&(m.value.instance.selectItem(a.path),m.value.instance.expandItem(a.path))}return(0,n.sV)((()=>{y(),h.compactMode&&m?.value?.instance.collapseAll()})),(0,n.wB)((()=>a.path),y),(0,n.wB)((()=>h.compactMode),(()=>{h.compactMode?m.value?.instance.collapseAll():y()})),(e,t)=>((0,n.uX)(),(0,n.CE)("div",{class:"dx-swatch-additional side-navigation-menu",onClick:g},[(0,n.RG)(e.$slots,"default"),(0,n.Lk)("div",l,[(0,n.bF)((0,r.R1)(s.Ay),{ref_key:"treeViewRef",ref:m,items:(0,r.R1)(p),"key-expr":"path","selection-mode":"single","focus-state-enabled":!1,"expand-event":"click",onItemClick:b,width:"100%"},null,8,["items"])]),(0,n.bF)(c["default"])]))}}),f=a(14480);const p=(0,f.A)(d,[["__scopeId","data-v-1c176f34"]]);var m=p},98416:function(e,t,a){"use strict";a.d(t,{LR:function(){return l},du:function(){return p},yt:function(){return f}});a(81045),a(30163),a(5350),a(85100),a(27162),a(66403),a(94154),a(64777),a(38846),a(62896);var n=a(32723);const r={XSmall:"(max-width: 575.99px)",Small:"(min-width: 576px) and (max-width: 991.98px)",Medium:"(min-width: 992px) and (max-width: 1199.98px)",Large:"(min-width: 1200px)"},s=window.matchMedia(r.XSmall),o=window.matchMedia(r.Small),u=window.matchMedia(r.Medium),i=window.matchMedia(r.Large),c=new Set;[s,o,u,i].forEach((e=>{e.addEventListener("change",(e=>{e.matches&&c.forEach((e=>e()))}))}));const l=()=>({"screen-x-small":s.matches,"screen-small":o.matches,"screen-medium":u.matches,"screen-large":i.matches});function d(){const e=l();return{isXSmall:e["screen-x-small"],isSmall:e["screen-small"],isMedium:e["screen-medium"],isLarge:e["screen-large"],cssClasses:Object.keys(e).filter((t=>e[t]))}}function f(e){return e<=420?"xs":e<=992?"sm":e<1200?"md":"lg"}const p=(0,n.KR)(d()),m=e=>c.add(e);m((()=>{p.value=d()}))},98478:function(e,t,a){"use strict";a.d(t,{B:function(){return l}});var n=a(3834),r=(a(81045),a(30163),a(5350),a(32293)),s=a(71904),o=a(32723);const u=["dark","light"];function i(e){return u[u.indexOf(e)+1]||u[0]}class c{constructor(){(0,n.A)(this,"storageKey","app-theme"),(0,n.A)(this,"themeMarker","theme-"),(0,n.A)(this,"currentTheme",(0,o.KR)(this.getCurrentTheme()))}isFluent(){return(0,s.ss)().includes("fluent")}getCurrentTheme(){return window.localStorage[this.storageKey]||i()}getThemeStyleSheets(){return Array.from(document.styleSheets).filter((e=>e?.href?.includes(this.themeMarker)))}setAppTheme(e=this.currentTheme.value){this.getThemeStyleSheets().forEach((t=>{t.disabled=!t?.href?.includes(`${this.themeMarker}${e}.`)})),this.currentTheme.value=e;const t=new RegExp(`\\.(${u.join("|")})`,"g");(0,r.nM)((0,r.nM)().replace(t,`.${e}`)),(0,r.Px)()}switchAppTheme(){const e=i(this.currentTheme.value);this.setAppTheme(e),window.localStorage[this.storageKey]=e}}const l=new c}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,n,r,s){if(!n){var o=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],s=e[l][2];for(var u=!0,i=0;i<n.length;i++)(!1&s||o>=s)&&Object.keys(a.O).every((function(e){return a.O[e](n[i])}))?n.splice(i--,1):(u=!1,s<o&&(o=s));if(u){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[n,r,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};a.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"===typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"===typeof n.then)return n}var s=Object.create(null);a.r(s);var o={};e=e||[null,t({}),t([]),t(t)];for(var u=2&r&&n;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){o[e]=function(){return n[e]}}));return o["default"]=function(){return n},a.d(s,o),s}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+({203:"auth19",590:"auth29",723:"pages4",734:"pages1",1047:"auth15",1174:"auth32",1567:"auth20",1711:"pages8",1722:"pages5",1875:"auth11",2145:"auth6",2173:"auth31",2544:"auth27",2555:"auth24",2741:"auth2",3399:"auth28",3543:"pages0",3718:"auth9",4520:"pages7",5116:"pages3",5353:"auth26",5364:"auth23",5429:"auth17",5690:"pages10",6268:"auth16",6275:"pages11",6417:"auth13",6527:"auth8",6538:"auth5",7394:"auth18",7925:"pages2",8162:"auth25",8348:"auth3",8758:"auth21",8902:"pages9",8913:"pages6",9226:"auth10",9336:"auth7"}[e]||e)+"."+{166:"e0b9ecd8",203:"fb5e6e02",590:"d99aeb91",695:"f885f56c",723:"d8cdd67f",734:"b85b7abb",848:"9387be8a",1047:"a4b972ad",1174:"3aa211fe",1567:"62556c37",1711:"c2f21522",1722:"fb413fab",1875:"4df8dc5e",2145:"f4c3b37e",2173:"3ffdeb1d",2544:"3d83d5c0",2555:"860fd424",2741:"dcef1cf1",2817:"6f0fefe7",3399:"c91f7f9f",3528:"e6fa3067",3543:"611b9645",3718:"edd12a13",3924:"49435e81",4520:"2c7fd252",5116:"857a72ad",5353:"fdb00fa8",5364:"8b82004c",5378:"587a773a",5429:"a0d0724d",5690:"a7511854",5782:"6f791ddb",6268:"c16019aa",6275:"36ad18cb",6417:"e7e805cb",6527:"d10462de",6538:"282756a4",7394:"f950c796",7925:"522c0e82",8162:"83cb156a",8348:"54879532",8570:"3bd35cdc",8758:"02cd020d",8902:"6b99b67b",8913:"d04b9bf5",9226:"3d7fc43e",9336:"3f15c2c1",9667:"e5379713"}[e]+".js"}}(),function(){a.miniCssF=function(e){return"css/"+{203:"auth19",590:"auth29",723:"pages4",734:"pages1",1047:"auth15",1174:"auth32",1567:"auth20",1711:"pages8",1722:"pages5",1875:"auth11",2024:"auth12",2145:"auth6",2173:"auth31",2555:"auth24",2741:"auth2",3399:"auth28",3543:"pages0",3718:"auth9",4520:"pages7",5116:"pages3",5353:"auth26",5364:"auth23",5429:"auth17",5690:"pages10",6268:"auth16",6275:"pages11",6417:"auth13",6527:"auth8",6538:"auth5",7925:"pages2",8162:"auth25",8238:"auth14",8348:"auth3",8758:"auth21",8902:"pages9",8913:"pages6",9336:"auth7"}[e]+"."+{203:"8097a518",590:"ed368eeb",723:"66b69fe9",734:"47e1b383",1047:"2705f5fa",1174:"3c545550",1567:"af510121",1711:"d5875ca6",1722:"bd906267",1875:"2f4d61cc",2024:"6735f0e2",2145:"3cc198c5",2173:"33bd0d8d",2555:"e15ac13e",2741:"87f96898",3399:"ef2615a4",3543:"86de16bc",3718:"190d6bcb",4520:"405b54fe",5116:"dc3a91f1",5353:"27fae2e8",5364:"bea5a1e1",5429:"bacedf3e",5690:"deb448b5",6268:"2824f29f",6275:"72ff5381",6417:"b20c4e5f",6527:"3e146e13",6538:"9c23dac1",7925:"0761e3fe",8162:"37079865",8238:"c06ee436",8348:"d1a31a5c",8758:"baa22adb",8902:"53b766c0",8913:"9d594e13",9336:"91f4aee8"}[e]+".css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-ui-teplate-gallery:";a.l=function(n,r,s,o){if(e[n])e[n].push(r);else{var u,i;if(void 0!==s)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+s){u=d;break}}u||(i=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.setAttribute("data-webpack",t+s),u.src=n),e[n]=[r];var f=function(t,a){u.onerror=u.onload=null,clearTimeout(p);var r=e[n];if(delete e[n],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(a)})),t)return t(a)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),i&&document.head.appendChild(u)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,s){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",a.nc&&(o.nonce=a.nc);var u=function(a){if(o.onerror=o.onload=null,"load"===a.type)r();else{var n=a&&a.type,u=a&&a.target&&a.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+u+")");i.name="ChunkLoadError",i.code="CSS_CHUNK_LOAD_FAILED",i.type=n,i.request=u,o.parentNode&&o.parentNode.removeChild(o),s(i)}};return o.onerror=o.onload=u,o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var r=a[n],s=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(s===e||s===t))return r}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){r=o[n],s=r.getAttribute("data-href");if(s===e||s===t)return r}},n=function(n){return new Promise((function(r,s){var o=a.miniCssF(n),u=a.p+o;if(t(o,u))return r();e(n,u,null,r,s)}))},r={3524:0};a.f.miniCss=function(e,t){var a={203:1,590:1,723:1,734:1,1047:1,1174:1,1567:1,1711:1,1722:1,1875:1,2024:1,2145:1,2173:1,2555:1,2741:1,3399:1,3543:1,3718:1,4520:1,5116:1,5353:1,5364:1,5429:1,5690:1,6268:1,6275:1,6417:1,6527:1,6538:1,7925:1,8162:1,8238:1,8348:1,8758:1,8902:1,8913:1,9336:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={3524:0,3045:0,1591:0,1869:0};a.f.j=function(t,n){var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(1591|1869|2024|3045|8238)$/.test(t))e[t]=0;else{var s=new Promise((function(a,n){r=e[t]=[a,n]}));n.push(r[2]=s);var o=a.p+a.u(t),u=new Error,i=function(n){if(a.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var s=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;u.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",u.name="ChunkLoadError",u.type=s,u.request=o,r[1](u)}};a.l(o,i,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,s,o=n[0],u=n[1],i=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(r in u)a.o(u,r)&&(a.m[r]=u[r]);if(i)var l=i(a)}for(t&&t(n);c<o.length;c++)s=o[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(l)},n=self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[3045,1591,1869,504],(function(){return a(79390)}));n=a.O(n)})();