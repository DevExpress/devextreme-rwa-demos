"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[4217],{58719:function(e,t,l){l.d(t,{F:function(){return a},b:function(){return n}});const n=["Salaried","Commission","Terminated"],a={firstName:"",lastName:"",position:"",manager:"",company:"",phone:"",email:"",image:"",address:""}},26898:function(e,t,l){
/*!
 * devextreme-vue
 * Version: 22.2.1-alpha-22313-0309
 * Build date: Wed Nov 09 2022
 *
 * Copyright (c) 2012 - 2022 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-vue
 */
var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DxTo=t.DxShow=t.DxPosition=t.DxOffset=t.DxMy=t.DxHide=t.DxFrom=t.DxCollision=t.DxBoundaryOffset=t.DxAt=t.DxAnimation=t.DxLoadPanel=void 0;var a=n(l(88383)),o=l(35535),u=l(35535),i=o.createComponent({props:{animation:Object,closeOnOutsideClick:[Boolean,Function],container:{},copyRootClassesToWrapper:Boolean,deferRendering:Boolean,delay:Number,elementAttr:{},focusStateEnabled:Boolean,height:[Function,Number,String],hideOnOutsideClick:[Boolean,Function],hideOnParentScroll:Boolean,hint:String,hoverStateEnabled:Boolean,indicatorSrc:String,maxHeight:[Function,Number,String],maxWidth:[Function,Number,String],message:String,minHeight:[Function,Number,String],minWidth:[Function,Number,String],onContentReady:Function,onDisposing:Function,onHidden:Function,onHiding:Function,onInitialized:Function,onOptionChanged:Function,onShowing:Function,onShown:Function,position:[Function,Object,String],rtlEnabled:Boolean,shading:Boolean,shadingColor:String,showIndicator:Boolean,showPane:Boolean,visible:Boolean,width:[Function,Number,String],wrapperAttr:{}},emits:{"update:isActive":null,"update:hoveredElement":null,"update:animation":null,"update:closeOnOutsideClick":null,"update:container":null,"update:copyRootClassesToWrapper":null,"update:deferRendering":null,"update:delay":null,"update:elementAttr":null,"update:focusStateEnabled":null,"update:height":null,"update:hideOnOutsideClick":null,"update:hideOnParentScroll":null,"update:hint":null,"update:hoverStateEnabled":null,"update:indicatorSrc":null,"update:maxHeight":null,"update:maxWidth":null,"update:message":null,"update:minHeight":null,"update:minWidth":null,"update:onContentReady":null,"update:onDisposing":null,"update:onHidden":null,"update:onHiding":null,"update:onInitialized":null,"update:onOptionChanged":null,"update:onShowing":null,"update:onShown":null,"update:position":null,"update:rtlEnabled":null,"update:shading":null,"update:shadingColor":null,"update:showIndicator":null,"update:showPane":null,"update:visible":null,"update:width":null,"update:wrapperAttr":null},computed:{instance:function(){return this.$_instance}},beforeCreate:function(){this.$_WidgetClass=a.default,this.$_hasAsyncTemplate=!0,this.$_expectedChildren={animation:{isCollectionItem:!1,optionName:"animation"},position:{isCollectionItem:!1,optionName:"position"}}}});t.DxLoadPanel=i;var d=u.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:hide":null,"update:show":null},props:{hide:[Object,Number,String],show:[Object,Number,String]}});t.DxAnimation=d,d.$_optionName="animation",d.$_expectedChildren={hide:{isCollectionItem:!1,optionName:"hide"},show:{isCollectionItem:!1,optionName:"show"}};var s=u.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:String,y:String}});t.DxAt=s,s.$_optionName="at";var r=u.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:Number,y:Number}});t.DxBoundaryOffset=r,r.$_optionName="boundaryOffset";var m=u.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:String,y:String}});t.DxCollision=m,m.$_optionName="collision";var p=u.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:left":null,"update:opacity":null,"update:position":null,"update:scale":null,"update:top":null},props:{left:Number,opacity:Number,position:Object,scale:Number,top:Number}});t.DxFrom=p,p.$_optionName="from",p.$_expectedChildren={position:{isCollectionItem:!1,optionName:"position"}};var c=u.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:complete":null,"update:delay":null,"update:direction":null,"update:duration":null,"update:easing":null,"update:from":null,"update:staggerDelay":null,"update:start":null,"update:to":null,"update:type":null},props:{complete:Function,delay:Number,direction:String,duration:Number,easing:String,from:Object,staggerDelay:Number,start:Function,to:Object,type:String}});t.DxHide=c,c.$_optionName="hide",c.$_expectedChildren={from:{isCollectionItem:!1,optionName:"from"},to:{isCollectionItem:!1,optionName:"to"}};var f=u.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:String,y:String}});t.DxMy=f,f.$_optionName="my";var v=u.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:x":null,"update:y":null},props:{x:Number,y:Number}});t.DxOffset=v,v.$_optionName="offset";var g=u.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:at":null,"update:boundary":null,"update:boundaryOffset":null,"update:collision":null,"update:my":null,"update:of":null,"update:offset":null},props:{at:[Object,String],boundary:{},boundaryOffset:[Object,String],collision:[Object,String],my:[Object,String],of:{},offset:[Object,String]}});t.DxPosition=g,g.$_optionName="position";var b=u.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:complete":null,"update:delay":null,"update:direction":null,"update:duration":null,"update:easing":null,"update:from":null,"update:staggerDelay":null,"update:start":null,"update:to":null,"update:type":null},props:{complete:Function,delay:Number,direction:String,duration:Number,easing:String,from:Object,staggerDelay:Number,start:Function,to:Object,type:String}});t.DxShow=b,b.$_optionName="show";var x=u.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:left":null,"update:opacity":null,"update:position":null,"update:scale":null,"update:top":null},props:{left:Number,opacity:Number,position:Object,scale:Number,top:Number}});t.DxTo=x,x.$_optionName="to",t["default"]=i},91879:function(e,t,l){l.d(t,{Z:function(){return d}});var n=l(73396),a=l(87139),o=(0,n.aZ)({__name:"contact-status",props:{value:null,showText:{type:Boolean,default:!0}},setup(e){const t=e;return(e,l)=>((0,n.wg)(),(0,n.iD)("span",{class:(0,a.C_)("contact-status status-"+t.value?.toLowerCase())},(0,a.zw)(t.showText?t.value:""),3))}}),u=l(40089);const i=(0,u.Z)(o,[["__scopeId","data-v-d514fc7a"]]);var d=i},88706:function(e,t,l){l.d(t,{Z:function(){return s}});var n=l(73396),a=l(87139);const o={class:"host"};var u=(0,n.aZ)({__name:"form-photo",props:{link:{default:""},size:{default:124}},setup(e){const t=e;return(e,l)=>((0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",{style:(0,a.j5)({width:t.size+"px",height:t.size+"px",backgroundImage:`url('data:image/png;base64,${t.link}')`}),class:"photo dx-card"},null,4)]))}}),i=l(40089);const d=(0,i.Z)(u,[["__scopeId","data-v-2721d06f"]]);var s=d},49323:function(e,t,l){l.r(t),l.d(t,{default:function(){return W}});var n=l(73396),a=l(44870),o=l(87139),u=l(6224),i=l(68389),d=l(94969),s=l(16453),r=l(31095),m=l(36657),p=l(67121),c=l(7002),f=l(85219),v=l(58719),g=l(88706),b=l(91879),x=l(59433);const S=e=>((0,n.dD)("data-v-4257b55a"),e=e(),(0,n.Cn)(),e),h={id:"contact-form"},y=S((()=>(0,n._)("span",{class:"dx-form-group-caption"},"Details",-1))),C={class:"status-editor-field"},_={class:"status-indicator"};var D=(0,n.aZ)({__name:"contact-form",props:{isLoading:{type:Boolean,default:!0},contactData:{default:null}},setup(e){const t=e,l={state:{stateShort:""}},S=(0,a.iH)(!1),D=(0,a.iH)(l);let w=l;const N={type:"pattern",pattern:/^\d{5}$/,message:"Zip is invalid"};function W(){w={...D.value},S.value=!0}function U(){S.value=!1}function V(){D.value=w,S.value=!1}return(0,n.YP)((()=>t.contactData),(e=>{D.value=e||l})),(t,l)=>((0,n.wg)(),(0,n.iD)("div",h,[(0,n.Wm)((0,a.SU)(i.DxToolbar),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,a.SU)(i.DxItem),{location:"before"},{default:(0,n.w5)((()=>[y])),_:1}),(0,n.Wm)((0,a.SU)(i.DxItem),{location:"after","locate-in-menu":"after",visible:!S.value},{default:(0,n.w5)((()=>[(0,n.Wm)((0,a.SU)(u.DxButton),{text:"Edit",icon:"edit","styling-mode":"outlined",type:"default",visible:!e.isLoading,onClick:l[0]||(l[0]=e=>W())},null,8,["visible"])])),_:1},8,["visible"]),(0,n.Wm)((0,a.SU)(i.DxItem),{location:"after","locate-in-menu":"after",visible:S.value},{default:(0,n.w5)((()=>[(0,n.Wm)((0,a.SU)(u.DxButton),{text:"Save","styling-mode":"outlined",type:"default",onClick:l[1]||(l[1]=e=>U())})])),_:1},8,["visible"]),(0,n.Wm)((0,a.SU)(i.DxItem),{location:"after","locate-in-menu":"after",visible:S.value},{default:(0,n.w5)((()=>[(0,n.Wm)((0,a.SU)(u.DxButton),{text:"Cancel",onClick:l[2]||(l[2]=e=>V()),"styling-mode":"text"})])),_:1},8,["visible"])])),_:1}),(0,n.Wm)(f.Z,{"is-loading":e.isLoading,"container-selector":"#contact-form"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,a.SU)(d.DxForm),{class:(0,o.C_)(["plain-styled-form",{"view-mode":!S.value}]),"label-mode":"floating"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,a.SU)(d.DxGroupItem),{"col-count":2},{default:(0,n.w5)((()=>[(0,n.Wm)((0,a.SU)(d.DxColCountByScreen),{xs:2}),(0,n.Wm)((0,a.SU)(d.DxItem),null,{default:(0,n.w5)((()=>[(0,n.Wm)(g.Z,{link:D.value.image,size:184},null,8,["link"])])),_:1}),(0,n.Wm)((0,a.SU)(d.DxGroupItem),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,a.SU)(d.DxItem),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,a.SU)(p.L),(0,n.dG)({label:"Status",modelValue:D.value.status,"onUpdate:modelValue":l[3]||(l[3]=e=>D.value.status=e),items:(0,a.SU)(v.b),"read-only":!S.value,"field-template":"field","item-template":"item"},(0,a.SU)(c.m)),{field:(0,n.w5)((({data:e})=>[(0,n._)("div",C,[(0,n._)("span",_,[(0,n.Wm)(b.Z,{value:D.value?.status,"show-text":!1},null,8,["value"])]),(0,n.Wm)((0,a.SU)(s.DxTextBox),{"read-only":!0,"hover-state-enabled":!1,"input-attr":{class:`status-editor-input contact-status status-${e?.toLowerCase()}`},value:e},null,8,["input-attr","value"])])])),item:(0,n.w5)((({data:e})=>[(0,n.Wm)(b.Z,{value:e},null,8,["value"])])),_:1},16,["modelValue","items","read-only"])])),_:1}),(0,n.Wm)((0,a.SU)(d.DxItem),null,{default:(0,n.w5)((()=>[(0,n.Wm)(x.Z,{label:"First Name",modelValue:D.value.firstName,"onUpdate:modelValue":l[4]||(l[4]=e=>D.value.firstName=e),"is-editing":S.value},null,8,["modelValue","is-editing"])])),_:1}),(0,n.Wm)((0,a.SU)(d.DxItem),null,{default:(0,n.w5)((()=>[(0,n.Wm)(x.Z,{label:"Last Name",modelValue:D.value.lastName,"onUpdate:modelValue":l[5]||(l[5]=e=>D.value.lastName=e),"is-editing":S.value},null,8,["modelValue","is-editing"])])),_:1})])),_:1}),(0,n.Wm)((0,a.SU)(d.DxItem),null,{default:(0,n.w5)((()=>[(0,n.Wm)(x.Z,{label:"Position",modelValue:D.value.position,"onUpdate:modelValue":l[6]||(l[6]=e=>D.value.position=e),"is-editing":S.value},null,8,["modelValue","is-editing"])])),_:1}),(0,n.Wm)((0,a.SU)(d.DxItem),{"css-class":"accent"},{default:(0,n.w5)((()=>[(0,n.Wm)(x.Z,{label:"Assigned to",modelValue:D.value.manager,"onUpdate:modelValue":l[7]||(l[7]=e=>D.value.manager=e),"is-editing":S.value},null,8,["modelValue","is-editing"])])),_:1}),(0,n.Wm)((0,a.SU)(d.DxItem),{"col-span":2,"css-class":"accent"},{default:(0,n.w5)((()=>[(0,n.Wm)(x.Z,{label:"Company",modelValue:D.value.company,"onUpdate:modelValue":l[8]||(l[8]=e=>D.value.company=e),"is-editing":S.value},null,8,["modelValue","is-editing"])])),_:1})])),_:1}),(0,n.Wm)((0,a.SU)(d.DxGroupItem),{"col-count":4,caption:"Contacts"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,a.SU)(d.DxColCountByScreen),{xs:2}),(0,n.Wm)((0,a.SU)(d.DxItem),{"col-span":4},{default:(0,n.w5)((()=>[(0,n.Wm)(x.Z,{label:"Address",modelValue:D.value.address,"onUpdate:modelValue":l[9]||(l[9]=e=>D.value.address=e),"is-editing":S.value},null,8,["modelValue","is-editing"])])),_:1}),(0,n.Wm)((0,a.SU)(d.DxItem),{"col-span":2},{default:(0,n.w5)((()=>[(0,n.Wm)(x.Z,{label:"City",modelValue:D.value.city,"onUpdate:modelValue":l[10]||(l[10]=e=>D.value.city=e),"is-editing":S.value},null,8,["modelValue","is-editing"])])),_:1}),(0,n.Wm)((0,a.SU)(d.DxItem),null,{default:(0,n.w5)((()=>[(0,n.Wm)(x.Z,{label:"State",modelValue:D.value.state.stateShort,"onUpdate:modelValue":l[11]||(l[11]=e=>D.value.state.stateShort=e),"is-editing":S.value},null,8,["modelValue","is-editing"])])),_:1}),(0,n.Wm)((0,a.SU)(d.DxItem),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,a.SU)(r.DxNumberBox),(0,n.dG)({label:"Zip Code",modelValue:D.value.zipCode,"onUpdate:modelValue":l[12]||(l[12]=e=>D.value.zipCode=e),modelModifiers:{number:!0},"is-editing":S.value},(0,a.SU)(c.T)),{default:(0,n.w5)((()=>[(0,n.Wm)((0,a.SU)(m.DxValidator),{"validation-rules":[N]},null,8,["validation-rules"])])),_:1},16,["modelValue","is-editing"])])),_:1})])),_:1}),(0,n.Wm)((0,a.SU)(d.DxGroupItem),{"col-count":2,"css-class":"contact-fields-group"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,a.SU)(d.DxColCountByScreen),{xs:2}),(0,n.Wm)((0,a.SU)(d.DxItem),null,{default:(0,n.w5)((()=>[(0,n.Wm)(x.Z,{label:"Phone",modelValue:D.value.phone,"onUpdate:modelValue":l[13]||(l[13]=e=>D.value.phone=e),modelModifiers:{number:!0},"is-editing":S.value,mask:"+1(000)000-0000"},null,8,["modelValue","is-editing"]),S.value?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)((0,a.SU)(u.DxButton),(0,n.dG)({key:0,class:"form-item-button"},{text:"Call",icon:"tel",type:"default",stylingMode:"outlined"},{validators:[]}),null,16))])),_:1}),(0,n.Wm)((0,a.SU)(d.DxItem),null,{default:(0,n.w5)((()=>[(0,n.Wm)(x.Z,{label:"Email",modelValue:D.value.email,"onUpdate:modelValue":l[14]||(l[14]=e=>D.value.email=e),modelModifiers:{number:!0},"is-editing":S.value,validators:[{type:"email"}]},null,8,["modelValue","is-editing"]),S.value?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)((0,a.SU)(u.DxButton),(0,n.dG)({key:0,class:"form-item-button"},{text:"Send Email",icon:"email",type:"default",stylingMode:"outlined"}),null,16))])),_:1})])),_:1})])),_:1},8,["class"])])),_:1},8,["is-loading"])]))}}),w=l(40089);const N=(0,w.Z)(D,[["__scopeId","data-v-4257b55a"]]);var W=N}}]);