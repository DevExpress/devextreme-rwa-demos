(function(e){function t(t){for(var o,a,i=t[0],l=t[1],s=t[2],u=0,d=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);m&&m(t);while(d.length)d.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(o=!1)}o&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},a={app:0},c={app:0},r=[];function i(e){return l.p+"js/"+({"login0~login1~login3~login4":"login0~login1~login3~login4",login0:"login0",login1:"login1",login3:"login3",login4:"login4"}[e]||e)+"."+{"login0~login1~login3~login4":"d2be3279",login0:"08aa4ebc",login1:"566900e0",login3:"65655d1f",login4:"ac6ae06a"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={login1:1,login3:1,login4:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({"login0~login1~login3~login4":"login0~login1~login3~login4",login0:"login0",login1:"login1",login3:"login3",login4:"login4"}[e]||e)+"."+{"login0~login1~login3~login4":"31d6cfe0",login0:"31d6cfe0",login1:"6b4a0dd2",login3:"193c8186",login4:"a013af1e"}[e]+".css",c=l.p+o,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var s=r[i],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===o||u===c))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],u=s.getAttribute("data-href");if(u===o||u===c)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var o=t&&t.target&&t.target.src||c,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[e],m.parentNode.removeChild(m),n(r)},m.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){a[e]=0})));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,n){o=c[e]=[t,n]}));t.push(o[2]=r);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(e);var d=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(m);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}c[e]=void 0}};var m=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var m=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"04e5":function(e,t,n){"use strict";n("0ea9")},"0a48":function(e,t,n){"use strict";n("2365")},"0ea9":function(e,t,n){},"0ef2":function(e,t,n){},"19ce":function(e,t,n){},"1a5d":function(e,t,n){var o={"./change-password-form.vue":["cdd9","login0~login1~login3~login4","login0"],"./create-account-form.vue":["9e38","login0~login1~login3~login4","login1"],"./crm-contact-list.vue":["7a4d"],"./login-form.vue":["bf37","login0~login1~login3~login4","login3"],"./reset-password-form.vue":["dc00","login0~login1~login3~login4","login4"]};function a(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(a)}))}a.keys=function(){return Object.keys(o)},a.id="1a5d",e.exports=a},"1ab6":function(e,t,n){"use strict";var o=n("5530"),a=n("1da1"),c=(n("96cf"),{email:"sandra@example.com",avatarUrl:"https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png"});t["a"]={_user:c,loggedIn:function(){return!!this._user},logIn:function(e,t){var n=this;return Object(a["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,console.log(e,t),n._user=Object(o["a"])(Object(o["a"])({},c),{},{email:e}),a.abrupt("return",{isOk:!0,data:n._user});case 6:return a.prev=6,a.t0=a["catch"](0),a.abrupt("return",{isOk:!1,message:"Authentication failed"});case 9:case"end":return a.stop()}}),a,null,[[0,6]])})))()},logOut:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e._user=null;case 1:case"end":return t.stop()}}),t)})))()},getUser:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.abrupt("return",{isOk:!0,data:e._user});case 4:return t.prev=4,t.t0=t["catch"](0),t.abrupt("return",{isOk:!1});case 7:case"end":return t.stop()}}),t,null,[[0,4]])})))()},resetPassword:function(e){return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,console.log(e),t.abrupt("return",{isOk:!0});case 5:return t.prev=5,t.t0=t["catch"](0),t.abrupt("return",{isOk:!1,message:"Failed to reset password"});case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},changePassword:function(e,t){return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,console.log(e,t),n.abrupt("return",{isOk:!0});case 5:return n.prev=5,n.t0=n["catch"](0),n.abrupt("return",{isOk:!1,message:"Failed to change password"});case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))()},createAccount:function(e,t){return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,console.log(e,t),n.abrupt("return",{isOk:!0});case 5:return n.prev=5,n.t0=n["catch"](0),n.abrupt("return",{isOk:!1,message:"Failed to create account"});case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))()}}},"1be5":function(e,t,n){"use strict";n("23cbe")},2365:function(e,t,n){},"23cbe":function(e,t,n){},"2c10":function(e,t,n){"use strict";n("f8c9")},"42c5":function(e,t,n){var o=n("6374").default,a=n("970b").default,c=n("5bc3").default;n("159b");var r=function(){"use strict";function e(){var t=this;a(this,e),this.resizeObserver=new ResizeObserver((function(e){var t,n=o(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;a.contentRect&&a.contentRect.height&&window.parent.postMessage({type:"frame-height",height:a.contentRect.height},"*")}}catch(c){n.e(c)}finally{n.f()}})),this.mutationObserver=new MutationObserver((function(e){e.forEach((function(e){e.addedNodes&&(e.target&&t.isValidNode(e.target)?t.subscribe(e.target):e.addedNodes.forEach((function(e){t.isValidNode(e)&&t.subscribe(e)})))}))}))}return c(e,[{key:"isValidNode",value:function(e){return e.classList&&e.classList.contains("content")}},{key:"subscribe",value:function(e){this.mutationObserver.disconnect(),e.style.alignSelf="flex-start",this.resizeObserver.observe(e)}},{key:"listen",value:function(){this.mutationObserver.observe(document.body,{childList:!0,subtree:!0,attributes:!1,characterData:!1})}}]),e}(),i=new r;i.listen()},"51b2":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return d}));n("159b"),n("4de4");var o={XSmall:"(max-width: 599.99px)",Small:"(min-width: 600px) and (max-width: 959.99px)",Medium:"(min-width: 960px) and (max-width: 1279.99px)",Large:"(min-width: 1280px)"},a=[],c=window.matchMedia(o.XSmall),r=window.matchMedia(o.Small),i=window.matchMedia(o.Medium),l=window.matchMedia(o.Large);[c,r,i,l].forEach((function(e){e.addListener((function(){a.forEach((function(e){return e()}))}))}));var s=function(){return{"screen-x-small":c.matches,"screen-small":r.matches,"screen-medium":i.matches,"screen-large":l.matches}},u=function(e){return a.push(e)},d=function(e){a=a.filter((function(t){return t!==e}))}},5216:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("42c5"),n("f1b2"),n("19ce");var o=n("7a23"),a=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("7a4d")),c=n("1ab6"),r=n("6c02"),i={class:"side-nav-outer-toolbar"};function l(e,t,n,a,c,r){var l=Object(o["resolveComponent"])("header-toolbar"),s=Object(o["resolveComponent"])("dx-scroll-view"),u=Object(o["resolveComponent"])("side-nav-menu"),d=Object(o["resolveComponent"])("dx-drawer");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",i,[Object(o["createVNode"])(l,{class:"layout-header","menu-toggle-enabled":!0,"toggle-menu-func":a.toggleMenu,title:n.title},null,8,["toggle-menu-func","title"]),Object(o["createVNode"])(d,{class:"layout-body",position:"before",template:"menuTemplate",opened:a.menuOpened,"onUpdate:opened":t[0]||(t[0]=function(e){return a.menuOpened=e}),"opened-state-mode":a.drawerOptions.menuMode,"reveal-mode":a.drawerOptions.menuRevealMode,"min-size":a.drawerOptions.minMenuSize,"max-size":a.drawerOptions.maxMenuSize,shading:a.drawerOptions.shaderEnabled,"close-on-outside-click":a.drawerOptions.closeOnOutsideClick},{menuTemplate:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(u,{"compact-mode":!a.menuOpened,onClick:a.handleSideBarClick},null,8,["compact-mode","onClick"])]})),default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(s,{ref:"scrollViewRef",class:"with-footer"},{default:Object(o["withCtx"])((function(){return[Object(o["renderSlot"])(e.$slots,"default"),Object(o["renderSlot"])(e.$slots,"footer")]})),_:3},512)]})),_:3},8,["opened","opened-state-mode","reveal-mode","min-size","max-size","shading","close-on-outside-click"])])}var s=n("f87d"),u=n.n(s),d=n("5a1f"),m=n.n(d),p=[{text:"CRM",icon:"user",path:"",items:[{text:"Contact List",path:"/crm-contact-list"}]}],b={class:"header-component"};function f(e,t,n,a,c,r){var i=Object(o["resolveComponent"])("dx-button"),l=Object(o["resolveComponent"])("dx-item"),s=Object(o["resolveComponent"])("user-panel"),u=Object(o["resolveComponent"])("dx-toolbar");return Object(o["openBlock"])(),Object(o["createElementBlock"])("header",b,[Object(o["createVNode"])(u,{class:"header-toolbar"},{menuUserItem:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(s,{email:a.email,"menu-items":a.userMenuItems,"menu-mode":"list"},null,8,["email","menu-items"])]})),default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(l,{visible:n.menuToggleEnabled,location:"before","css-class":"menu-button"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(i,{icon:"menu","styling-mode":"text",onClick:n.toggleMenuFunc},null,8,["onClick"])]})),_:1},8,["visible"]),n.title?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:0,location:"before","css-class":"header-title dx-toolbar-label"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",null,Object(o["toDisplayString"])(n.title),1)]})),_:1})):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(l,{location:"after","locate-in-menu":"auto","menu-item-template":"menuUserItem"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",null,[Object(o["createVNode"])(i,{class:"user-button authorization",width:210,height:"100%","styling-mode":"text"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(s,{email:a.email,"menu-items":a.userMenuItems,"menu-mode":"context"},null,8,["email","menu-items"])]})),_:1})])]})),_:1})]})),_:1})])}var O=n("6191"),g=n.n(O),j=n("d158"),v=n.n(j),h={class:"user-panel"},w={class:"user-info"},x=Object(o["createElementVNode"])("div",{class:"image-container"},[Object(o["createElementVNode"])("div",{class:"user-image"})],-1),N={class:"user-name"};function V(e,t,n,a,c,r){var i=Object(o["resolveComponent"])("dx-position"),l=Object(o["resolveComponent"])("dx-context-menu"),s=Object(o["resolveComponent"])("dx-list");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",h,[Object(o["createElementVNode"])("div",w,[x,Object(o["createElementVNode"])("div",N,Object(o["toDisplayString"])(n.email),1)]),"context"===n.menuMode?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:0,target:".user-button",items:n.menuItems,width:210,"show-event":"dxclick","css-class":"user-menu"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(i,{my:"top center",at:"bottom center"})]})),_:1},8,["items"])):Object(o["createCommentVNode"])("",!0),"list"===n.menuMode?(Object(o["openBlock"])(),Object(o["createBlock"])(s,{key:1,class:"dx-toolbar-menu-action",items:n.menuItems},null,8,["items"])):Object(o["createCommentVNode"])("",!0)])}var C=n("c68b"),k=n.n(C),y=n("6dd7"),S=n.n(y),E={props:{menuMode:String,menuItems:Array,email:String},components:{DxContextMenu:k.a,DxPosition:C["DxPosition"],DxList:S.a}},D=(n("2c10"),n("6b0d")),B=n.n(D);const M=B()(E,[["render",V]]);var P=M,I={props:{menuToggleEnabled:Boolean,title:String,toggleMenuFunc:Function,logOutFunc:Function},setup:function(){var e=Object(r["d"])(),t=Object(r["c"])(),n=Object(o["ref"])("");c["a"].getUser().then((function(e){return n.value=e.data.email}));var a=[{text:"Profile",icon:"user",onClick:l},{text:"Logout",icon:"runner",onClick:i}];function i(){c["a"].logOut(),e.push({path:"/login-form",query:{redirect:t.path}})}function l(){e.push({path:"/profile",query:{redirect:t.path}})}return{email:n,userMenuItems:a}},components:{DxButton:g.a,DxToolbar:v.a,DxItem:j["DxItem"],UserPanel:P}};n("dba6");const _=B()(I,[["render",f]]);var R=_,A={class:"menu-container"};function L(e,t,n,a,c,r){var i=Object(o["resolveComponent"])("dx-tree-view");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"dx-swatch-additional side-navigation-menu",onClick:t[0]||(t[0]=function(){return a.forwardClick&&a.forwardClick.apply(a,arguments)})},[Object(o["renderSlot"])(e.$slots,"default"),Object(o["createElementVNode"])("div",A,[Object(o["createVNode"])(i,{ref:"treeViewRef",items:a.items,"key-expr":"path","selection-mode":"single","focus-state-enabled":!1,"expand-event":"click",onItemClick:a.handleItemClick,width:"100%"},null,8,["items","onItemClick"])])])}var T=n("5530"),z=(n("d81d"),n("8dc9")),U=n.n(z),F=n("51b2"),q={props:{compactMode:Boolean},setup:function(e,t){var n=Object(r["c"])(),a=Object(r["d"])(),c=Object(F["a"])()["screen-large"],i=p.map((function(e){return e.path&&!/^\//.test(e.path)&&(e.path="/".concat(e.path)),Object(T["a"])(Object(T["a"])({},e),{},{expanded:c})})),l=Object(o["ref"])(null);function s(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];t.emit("click",n)}function u(t){if(t.itemData.path&&!e.compactMode){a.push(t.itemData.path);var n=t.event;n.stopPropagation()}}function d(){l.value&&l.value.instance&&(l.value.instance.selectItem(n.path),l.value.instance.expandItem(n.path))}return Object(o["onMounted"])((function(){d(),e.compactMode&&l.value.instance.collapseAll()})),Object(o["watch"])((function(){return n.path}),(function(){d()})),Object(o["watch"])((function(){return e.compactMode}),(function(){e.compactMode?l.value.instance.collapseAll():d()})),{treeViewRef:l,items:i,forwardClick:s,handleItemClick:u,updateSelection:d}},components:{DxTreeView:U.a}};n("955d");const X=B()(q,[["render",L]]);var $=X,G={props:{title:String,isXSmall:Boolean,isLarge:Boolean},setup:function(e){var t=Object(r["c"])(),n=Object(o["ref"])(null),a=Object(o["ref"])(e.isLarge),c=Object(o["ref"])(!1);function i(e){var t=e.event;t.stopPropagation(),a.value&&(c.value=!1),a.value=!a.value}function l(){!1===a.value&&(c.value=!0),a.value=!0}var s=Object(o["computed"])((function(){var t=!e.isLarge;return{menuMode:e.isLarge?"shrink":"overlap",menuRevealMode:e.isXSmall?"slide":"expand",minMenuSize:e.isXSmall?0:60,maxMenuSize:e.isXSmall?250:void 0,closeOnOutsideClick:t,shaderEnabled:t}}));return Object(o["watch"])((function(){return e.isLarge}),(function(){c.value||(a.value=e.isLarge)})),Object(o["watch"])((function(){return t.path}),(function(){!c.value&&e.isLarge||(a.value=!1,c.value=!1),n.value.instance.scrollTo(0)})),{menuOpened:a,menuItems:p,toggleMenu:i,handleSideBarClick:l,drawerOptions:s,scrollViewRef:n}},components:{DxDrawer:u.a,DxScrollView:m.a,HeaderToolbar:R,SideNavMenu:$}};n("c0f4");const J=B()(G,[["render",l]]);var H=J,K=(n("a4d3"),n("e01a"),{class:"dx-card content"}),W={class:"header"},Q={class:"title"},Y={class:"description"};function Z(e,t,n,a,c,r){var i=Object(o["resolveComponent"])("dx-scroll-view");return Object(o["openBlock"])(),Object(o["createBlock"])(i,{height:"100%",width:"100%",class:"with-footer single-card"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",K,[Object(o["createElementVNode"])("div",W,[Object(o["createElementVNode"])("div",Q,Object(o["toDisplayString"])(a.title),1),Object(o["createElementVNode"])("div",Y,Object(o["toDisplayString"])(a.description),1)]),Object(o["renderSlot"])(e.$slots,"default")])]})),_:3})}var ee={components:{DxScrollView:m.a},setup:function(){var e=Object(r["c"])(),t=Object(o["ref"])(e.meta.title),n=Object(o["ref"])("");return Object(o["watch"])((function(){return e.path}),(function(){t.value=e.meta.title,n.value=e.meta.description})),{title:t,description:n}}};n("04e5");const te=B()(ee,[["render",Z]]);var ne=te;function oe(e){return function(){return n("1a5d")("./".concat(e,".vue"))}}var ae=new r["a"]({routes:[{path:"/login-form",name:"login-form",meta:{requiresAuth:!1,layout:ne,title:"Sign In"},component:oe("login-form")},{path:"/reset-password",name:"reset-password",meta:{requiresAuth:!1,layout:ne,title:"Reset Password",description:"Please enter the email address that you used to register, and we will send you a link to reset your password via Email."},component:oe("reset-password-form")},{path:"/create-account",name:"create-account",meta:{requiresAuth:!1,layout:ne,title:"Sign Up"},component:oe("create-account-form")},{path:"/change-password/:recoveryCode",name:"change-password",meta:{requiresAuth:!1,layout:ne,title:"Change Password"},component:oe("change-password-form")},{path:"/",redirect:"/crm-contact-list"},{path:"/recovery",redirect:"/crm-contact-list"},{path:"/:pathMatch(.*)*",redirect:"/crm-contact-list"},{path:"/crm-contact-list",name:"crm-contact-list",meta:{requiresAuth:!0,layout:H},component:a["default"]}],history:Object(r["b"])()});ae.beforeEach((function(e,t,n){"login-form"===e.name&&c["a"].loggedIn()&&n({name:"home"}),e.matched.some((function(e){return e.meta.requiresAuth}))?c["a"].loggedIn()?n():n({name:"login-form",query:{redirect:e.fullPath}}):n()}));var ce=ae,re={id:"root"},ie={class:"content"};function le(e,t,n,a,c,r){var i=Object(o["resolveComponent"])("router-view");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",re,[Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(a.cssClasses)},[Object(o["createElementVNode"])("div",ie,[Object(o["createVNode"])(i)])],2)])}n("4de4"),n("b64b"),n("99af");function se(){var e=Object(F["a"])();return{isXSmall:e["screen-x-small"],isLarge:e["screen-large"],cssClasses:Object.keys(e).filter((function(t){return e[t]}))}}var ue={components:{},setup:function(){var e=Object(o["getCurrentInstance"])(),t=e.proxy.$appInfo.title,n=Object(o["reactive"])({getScreenSizeInfo:{}});function a(){n.getScreenSizeInfo=se()}n.getScreenSizeInfo=se(),Object(o["onMounted"])((function(){Object(F["b"])(a)})),Object(o["onBeforeUnmount"])((function(){Object(F["c"])(a)}));var c=Object(o["computed"])((function(){return["app"].concat(n.getScreenSizeInfo.cssClasses)}));return{title:t,screen:n,cssClasses:c}}};n("1be5");const de=B()(ue,[["render",le]]);var me=de,pe={title:"UI Templates Gallery"},be=Object(o["createApp"])(me);be.use(ce),be.config.globalProperties.$appInfo=pe,be.mount("#app")},"7a4d":function(e,t,n){"use strict";n.r(t);n("b0c0");var o=n("7a23"),a={class:"view-wrapper"},c=Object(o["createElementVNode"])("div",{class:"grid-header"},"Contact List",-1),r=Object(o["createElementVNode"])("div",{class:"separator"},null,-1),i=Object(o["createElementVNode"])("div",{class:"separator"},null,-1),l={class:"product-template"},s=["item"],u={key:0,class:"data-wrapper"},d={class:"contact-name"},m={class:"user-info"},p=Object(o["createElementVNode"])("div",{class:"photo"},null,-1),b={class:"info"},f=Object(o["createElementVNode"])("i",{class:"dx-icon-user"},null,-1),O=Object(o["createElementVNode"])("i",{class:"dx-icon-product"},null,-1),g=Object(o["createElementVNode"])("i",{class:"dx-icon-email"},null,-1),j=Object(o["createTextVNode"])(),v=Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div",{class:"licenses"},[Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div",{class:"caption"},"Income"),Object(o["createElementVNode"])("div",{class:"value"},"$1,650,00")]),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div",{class:"caption"},"Licences"),Object(o["createElementVNode"])("div",{class:"value"},"1")]),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div",{class:"caption"},"Active Licences"),Object(o["createElementVNode"])("div",{class:"value"},"1")])])],-1),h=["item"],w={class:"item"},x=Object(o["createElementVNode"])("br",null,null,-1),N=Object(o["createElementVNode"])("div",null,"c",-1);function V(e,t,n,V,C,k){var y=Object(o["resolveComponent"])("dx-search-panel"),S=Object(o["resolveComponent"])("dx-export"),E=Object(o["resolveComponent"])("dx-grid-toolbar-item"),D=Object(o["resolveComponent"])("dx-grid-toolbar"),B=Object(o["resolveComponent"])("dx-selection"),M=Object(o["resolveComponent"])("dx-column"),P=Object(o["resolveComponent"])("dx-data-grid"),I=Object(o["resolveComponent"])("dx-item"),_=Object(o["resolveComponent"])("dx-toolbar"),R=Object(o["resolveComponent"])("dx-accordion-item"),A=Object(o["resolveComponent"])("dx-accordion"),L=Object(o["resolveComponent"])("dx-scroll-view");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[Object(o["createVNode"])(P,{"data-source":C.gridData,height:"100%",onRowClick:C.rowClick},{statusTemplate:Object(o["withCtx"])((function(e){var t=e.data;return[Object(o["createElementVNode"])("span",null,[Object(o["createElementVNode"])("span",{class:Object(o["normalizeClass"])("status status-"+t.data.status)},Object(o["toDisplayString"])(C.statuses[t.data.status]),3)])]})),productTemplate:Object(o["withCtx"])((function(e){var t=e.data;return[Object(o["createElementVNode"])("span",l,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(t.data.products,(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("span",{item:e,key:t},[Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(C.products[e.productId])+" ",1),Object(o["createElementVNode"])("span",{class:Object(o["normalizeClass"])("cloud cloud-"+e.productStatus)},Object(o["toDisplayString"])(C.productStatuses[e.productStatus]),3)],8,s)})),128))])]})),default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(y,{visible:!0,placeholder:"Contact Search"}),Object(o["createVNode"])(S,{enabled:!0,"allow-export-selected-data":!0}),Object(o["createVNode"])(D,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(E,{location:"before"},{default:Object(o["withCtx"])((function(){return[c]})),_:1}),Object(o["createVNode"])(E,{location:"after","locate-in-menu":"auto",widget:"dxButton",options:{icon:"plus",text:"Add Contact",type:"default",stylingMode:"contained"}}),Object(o["createVNode"])(E,{location:"after","locate-in-menu":"auto","show-text":"inMenu",widget:"dxButton",options:{text:"Refresh",icon:"refresh"}}),Object(o["createVNode"])(E,{location:"after","locate-in-menu":"auto"},{default:Object(o["withCtx"])((function(){return[r]})),_:1}),Object(o["createVNode"])(E,{name:"exportButton"}),Object(o["createVNode"])(E,{location:"after","locate-in-menu":"auto"},{default:Object(o["withCtx"])((function(){return[i]})),_:1}),Object(o["createVNode"])(E,{location:"after","locate-in-menu":"auto","show-text":"inMenu",widget:"dxButton",options:{text:"Remove",icon:"trash"}}),Object(o["createVNode"])(E,{name:"searchPanel"})]})),_:1}),Object(o["createVNode"])(B,{"select-all-mode":"allPages","show-check-boxes-mode":"always",mode:"multiple"}),Object(o["createVNode"])(M,{"data-field":"name",caption:"Name","hiding-priority":5,"min-width":150}),Object(o["createVNode"])(M,{"data-field":"status",caption:"Status","data-type":"string","cell-template":"statusTemplate","hiding-priority":3,"min-width":100}),Object(o["createVNode"])(M,{"data-field":"id",caption:"ID","hiding-priority":1}),Object(o["createVNode"])(M,{"data-field":"Products",caption:"Products","cell-template":"productTemplate","min-width":400,"hiding-priority":0}),Object(o["createVNode"])(M,{"data-field":"manager",caption:"Manager","hiding-priority":4}),Object(o["createVNode"])(M,{"data-field":"organization",caption:"Organization","hiding-priority":2})]})),_:1},8,["data-source","onRowClick"]),Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(["panel",{pin:C.isPanelPin,open:C.isPanelOpen}])},[C.panelData?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",u,[Object(o["createVNode"])(_,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(I,{location:"before"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",d,Object(o["toDisplayString"])(C.panelData.name),1)]})),_:1}),Object(o["createVNode"])(I,{location:"before"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("span",{class:Object(o["normalizeClass"])("status status-"+C.panelData.status)},Object(o["toDisplayString"])(C.statuses[C.panelData.status]),3)]})),_:1}),Object(o["createVNode"])(I,{location:"after",widget:"dxButton",visible:C.isPinEnabled,options:{icon:C.isPanelPin?"unpin":"pin",onClick:C.pinClick}},null,8,["visible","options"]),Object(o["createVNode"])(I,{location:"after",widget:"dxButton",options:{icon:"close",onClick:C.closePanel}},null,8,["options"])]})),_:1}),Object(o["createVNode"])(L,null,{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",m,[p,Object(o["createElementVNode"])("div",b,[Object(o["createElementVNode"])("div",null,Object(o["toDisplayString"])(C.panelData.id),1),Object(o["createElementVNode"])("div",null,[f,Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(C.panelData.manager),1)]),Object(o["createElementVNode"])("div",null,[O,Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(C.panelData.organization),1)]),Object(o["createElementVNode"])("div",null,[g,j,Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(C.panelData.email),1)])])]),Object(o["createElementVNode"])("div",null,Object(o["toDisplayString"])(C.panelData.address),1),Object(o["createVNode"])(_,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(I,{location:"before",widget:"dxButton",options:{icon:"edit",stylingMode:"outlined",text:"Edit"}}),Object(o["createVNode"])(I,{location:"center",widget:"dxButton",options:{stylingMode:"text",text:"Send email"}}),Object(o["createVNode"])(I,{location:"after",widget:"dxDropDownButton",options:{text:"Action"}})]})),_:1}),Object(o["createVNode"])(A,{multiple:!0,collapsible:!0},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(R,{title:"Licenses"},{default:Object(o["withCtx"])((function(){return[v]})),_:1}),Object(o["createVNode"])(R,{title:"Opportunities"},{default:Object(o["withCtx"])((function(){return[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(C.panelData.products,(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("span",{item:e,key:t,class:"oportunities"},[Object(o["createElementVNode"])("span",w,Object(o["toDisplayString"])(C.products[e.productId])+" ",1),Object(o["createElementVNode"])("span",{class:Object(o["normalizeClass"])("cloud cloud-"+e.productStatus)},Object(o["toDisplayString"])(C.productStatuses[e.productStatus]),3),x],8,h)})),128))]})),_:1}),Object(o["createVNode"])(I,{title:"Activities"},{default:Object(o["withCtx"])((function(){return[N]})),_:1})]})),_:1})]})),_:1})])):Object(o["createCommentVNode"])("",!0)],2)])}var C=n("d30a"),k=n.n(C),y=n("d158"),S=n.n(y),E=n("5a1f"),D=n.n(E),B=n("9621"),M=n.n(B),P=n("51b2"),I={components:{DxDataGrid:k.a,DxColumn:C["DxColumn"],DxSelection:C["DxSelection"],DxExport:C["DxExport"],DxGridToolbar:C["DxToolbar"],DxGridToolbarItem:C["DxItem"],DxSearchPanel:C["DxSearchPanel"],DxToolbar:S.a,DxItem:y["DxItem"],DxScrollView:D.a,DxAccordion:M.a,DxAccordionItem:B["DxItem"]},setup:function(){},data:function(){var e=this,t=[{name:"Robert Reaga",status:1,id:120545,products:[{productId:1,productStatus:1},{productId:2,productStatus:2}],manager:"Sarah Davix",organization:"SV Consult",address:"69 Ruthven St #24, Boston, MA 02121, United States of America",email:"1@2"},{name:"Samuel Browick",status:2,id:120545,products:[{productId:1,productStatus:2},{productId:2,productStatus:1}],manager:"Brett Johnson",organization:"SV Consult",address:"69 Ruthven St #24, Boston, MA 02121, United States of America",email:"2@2"}],n={1:"New",2:"Active"},a={1:"CRM System",2:"Task Management"},c={1:"Lead",2:"Trial sent"},r=t[0],i=!1,l=!1,s=Object(P["a"])()["screen-medium"]||Object(P["a"])()["screen-large"],u=function(t){e.panelData=t.data,e.isPanelOpen=!0},d=function(){e.isPanelOpen=!1},m=function(){e.isPanelPin=!e.isPanelPin},p=function(){e.isPinEnabled=Object(P["a"])()["screen-medium"]||Object(P["a"])()["screen-large"]};return Object(o["onMounted"])((function(){Object(P["b"])(p)})),Object(o["onBeforeUnmount"])((function(){Object(P["c"])(p)})),{gridData:t,rowClick:u,statuses:n,products:a,productStatuses:c,panelData:r,isPanelOpen:i,isPanelPin:l,closePanel:d,pinClick:m,isPinEnabled:s}}},_=(n("0a48"),n("6b0d")),R=n.n(_);const A=R()(I,[["render",V]]);t["default"]=A},"85f6":function(e,t,n){},"955d":function(e,t,n){"use strict";n("5216")},c0f4:function(e,t,n){"use strict";n("0ef2")},dba6:function(e,t,n){"use strict";n("85f6")},f8c9:function(e,t,n){}});