"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[1908,4286],{30972:function(e,a,t){t.d(a,{CN:function(){return l},T4:function(){return s},p6:function(){return u}});var n=t(88980);function l(e){return String(e).replace(/(\d{3})(\d{3})(\d{4})/,"+1($1)$2-$3")}function s(e,a){return(0,n.uf)(e,{type:"currency",precision:a||0,currency:"USD"})}function u(e){return(0,n.p6)(new Date(e),"MM/dd/yyyy")}},4256:function(e,a,t){t.r(a),t.d(a,{default:function(){return Z}});t(44936);var n=t(49256),l=t(47919),s=t(64701),u=t(44896),i=t(47250),r=t(37252),d=t(9533),c=t(16568),o=t(67699),v=t(1122),g=t(30972),f=t(81507),m=t(49261);const p={class:"messages",id:"card-messages"},_={class:"input-content"},w={class:"messages-content"},y={class:"message-list"},S={class:"message-container"},U={class:"message dx-card"},b={class:"message-title"},h={class:"subject"},W={class:"message-text"};var k=(0,n.aZ)({__name:"card-messages",props:{isLoading:{type:Boolean,default:!0},user:{default:""},messages:{default:()=>[]}},setup(e){const a=e,t=(0,l.iH)(a.messages),k=(0,l.iH)(""),D=(0,l.iH)("");function x(e){return e.split(" ").map((e=>e[0])).join("")}function Z(e){return e.text.replace("{username}",e.manager!==t.value[0].manager?t.value[0].manager:t.value[1].manager)}function j(e){if(!e.validationGroup.validate().isValid)return;const n={subject:D.value,text:k.value,manager:a.user,date:new Date};t.value.push(n),e.validationGroup.reset()}return(0,n.YP)((()=>a.messages),(e=>{t.value=e})),(e,C)=>((0,n.wg)(),(0,n.j4)((0,l.SU)(o.G),null,{default:(0,n.w5)((()=>[(0,n._)("div",p,[(0,n.Wm)((0,l.SU)(f.ZP),{visible:a.isLoading,"show-pane":!1,width:"auto",container:"#card-messages",position:{of:"#card-messages"}},null,8,["visible"]),a.messages.length?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n._)("div",_,[(0,n.Wm)((0,l.SU)(i.ki),{label:"Subject","styling-mode":"filled",value:D.value,"value-change-event":"keyup",onValueChanged:C[0]||(C[0]=e=>D.value=e.value)},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(v.ZP),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(v.VD))])),_:1})])),_:1},8,["value"]),(0,n.Wm)((0,l.SU)(u.w),{label:"Message","styling-mode":"filled",value:k.value,height:150,"value-change-event":"keyup",onValueChanged:C[1]||(C[1]=e=>k.value=e.value)},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(v.ZP),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(v.VD))])),_:1})])),_:1},8,["value"]),(0,n.Wm)((0,l.SU)(d.sc),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(d.wy),{location:"before"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,l.SU)(c.c),{class:"file-uploader","label-text":"","select-button-text":"Attach file"})])),_:1}),(0,n.Wm)((0,l.SU)(d.wy),{widget:"dxButton",location:"after",options:{text:"Send",stylingMode:"contained",type:"default",onClick:j}},null,8,["options"])])),_:1})]),(0,n._)("div",w,[(0,n._)("div",y,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.value,(e=>((0,n.wg)(),(0,n.iD)("div",S,[(0,n.Wm)(m["default"],{"data-letters":x(e.manager)},null,8,["data-letters"]),(0,n._)("div",U,[(0,n._)("div",b,[(0,n._)("div",null,[(0,n._)("div",h,(0,s.zw)(e.subject),1),(0,n._)("div",null,(0,s.zw)((0,l.SU)(g.p6)(new Date(e.date)))+" - "+(0,s.zw)(e.manager),1)]),(0,n.Wm)((0,l.SU)(r.J),{icon:"overflow","styling-mode":"text"})]),(0,n._)("div",W,(0,s.zw)(Z(e)),1)])])))),256))])])],64)):(0,n.kq)("",!0)])])),_:1}))}}),D=t(97179);const x=(0,D.Z)(k,[["__scopeId","data-v-60c4980f"]]);var Z=x},49261:function(e,a,t){t.r(a),t.d(a,{default:function(){return r}});var n=t(49256);const l=["data-letters"];var s=(0,n.aZ)({__name:"user-avatar",props:{dataLetters:{default:()=>""}},setup(e){const a=e;return(e,t)=>((0,n.wg)(),(0,n.iD)("div",{class:"circle","data-letters":a.dataLetters},null,8,l))}}),u=t(97179);const i=(0,u.Z)(s,[["__scopeId","data-v-8b56f8ac"]]);var r=i}}]);