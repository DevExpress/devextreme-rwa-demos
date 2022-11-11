"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[4973,6447,4666],{24754:function(e,t,n){n.d(t,{d:function(){return a},r:function(){return l}});const a=[{id:"grid",text:"List"},{id:"kanban",text:"Kanban Board"},{id:"gantt",text:"Gantt"}],l=[{text:"Week",value:"2020-01-24/2020-01-31",key:1},{text:"2 Weeks",value:"2020-01-14/2020-01-31",key:2},{text:"Month",value:"2020-01-01/2020-02-01",key:3},{text:"Year",value:"2020-01-01/2021-01-01",key:4},{text:"All",value:"2018-01-01/2022-01-01",key:5}]},70369:function(e,t,n){
/*!
 * devextreme-vue
 * Version: 22.1.5
 * Build date: Fri Sep 02 2022
 *
 * Copyright (c) 2012 - 2022 Developer Express Inc. ALL RIGHTS RESERVED
 *
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file in the root of the project for details.
 *
 * https://github.com/DevExpress/devextreme-vue
 */
var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DxItem=t.DxTabs=void 0;var l=a(n(32137)),o=n(35535),u=n(35535),i=o.createComponent({props:{accessKey:String,dataSource:{},disabled:Boolean,elementAttr:Object,focusStateEnabled:Boolean,height:[Function,Number,String],hint:String,hoverStateEnabled:Boolean,itemHoldTimeout:Number,items:Array,itemTemplate:{},keyExpr:[Function,String],noDataText:String,onContentReady:Function,onDisposing:Function,onInitialized:Function,onItemClick:Function,onItemContextMenu:Function,onItemHold:Function,onItemRendered:Function,onOptionChanged:Function,onSelectionChanged:Function,repaintChangesOnly:Boolean,rtlEnabled:Boolean,scrollByContent:Boolean,scrollingEnabled:Boolean,selectedIndex:Number,selectedItem:{},selectedItemKeys:Array,selectedItems:Array,selectionMode:String,showNavButtons:Boolean,tabIndex:Number,visible:Boolean,width:[Function,Number,String]},emits:{"update:isActive":null,"update:hoveredElement":null,"update:accessKey":null,"update:dataSource":null,"update:disabled":null,"update:elementAttr":null,"update:focusStateEnabled":null,"update:height":null,"update:hint":null,"update:hoverStateEnabled":null,"update:itemHoldTimeout":null,"update:items":null,"update:itemTemplate":null,"update:keyExpr":null,"update:noDataText":null,"update:onContentReady":null,"update:onDisposing":null,"update:onInitialized":null,"update:onItemClick":null,"update:onItemContextMenu":null,"update:onItemHold":null,"update:onItemRendered":null,"update:onOptionChanged":null,"update:onSelectionChanged":null,"update:repaintChangesOnly":null,"update:rtlEnabled":null,"update:scrollByContent":null,"update:scrollingEnabled":null,"update:selectedIndex":null,"update:selectedItem":null,"update:selectedItemKeys":null,"update:selectedItems":null,"update:selectionMode":null,"update:showNavButtons":null,"update:tabIndex":null,"update:visible":null,"update:width":null},computed:{instance:function(){return this.$_instance}},beforeCreate:function(){this.$_WidgetClass=l.default,this.$_hasAsyncTemplate=!0,this.$_expectedChildren={item:{isCollectionItem:!0,optionName:"items"}}}});t.DxTabs=i;var d=u.createConfigurationComponent({emits:{"update:isActive":null,"update:hoveredElement":null,"update:badge":null,"update:disabled":null,"update:html":null,"update:icon":null,"update:template":null,"update:text":null,"update:visible":null},props:{badge:String,disabled:Boolean,html:String,icon:String,template:{},text:String,visible:Boolean}});t.DxItem=d,d.$_optionName="items",d.$_isCollectionItem=!0,t["default"]=i},85219:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(73396),l=n(44870),o=n(26898),u=n.n(o),i=(0,a.aZ)({__name:"load-component",props:{isLoading:{type:Boolean,default:!1},containerSelector:{default:""},width:null},setup(e){const t=e;return(e,n)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)((0,l.SU)(u()),{visible:t.isLoading,"show-pane":!1,width:t.width,container:t.containerSelector,position:{of:t.containerSelector}},null,8,["visible","width","container","position"]),t.isLoading?(0,a.kq)("",!0):(0,a.WI)(e.$slots,"default",{key:0})],64))}});const d=i;var s=d},70194:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var a=n(73396),l=n(44870),o=n(39710),u=n(1175),i=n(21164),d=n(70085),s=(0,a.aZ)({__name:"task-list-gantt",props:{tasks:{default:()=>[]}},setup(e,{expose:t}){const n=e,s=(0,l.iH)(null),r=()=>{const e=new i.jsPDF;(0,d.AI)({jsPDFDocument:e,component:s.value.instance}).then((()=>{e.save("Tasks.pdf")}))},c=()=>{o.N.push("/planning-task-details")},m=e=>{e.event?.target?.closest(".dx-treelist-expanded, .dx-treelist-collapsed")||c()};return t({onExporting:r}),(e,t)=>((0,a.wg)(),(0,a.j4)((0,l.SU)(u.DxGantt),{ref_key:"dxGanttCmp",ref:s,"task-list-width":500,"scale-type":"weeks",onTaskClick:m,height:700},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(u.DxTasks),{"data-source":n.tasks,"start-expr":"startDate","end-expr":"dueDate","title-expr":"text"},null,8,["data-source"]),(0,a.Wm)((0,l.SU)(u.DxColumn),{"data-field":"text",caption:"Subject",width:300}),(0,a.Wm)((0,l.SU)(u.DxColumn),{"data-field":"startDate",caption:"Start Date","data-type":"date","sort-order":"asc"}),(0,a.Wm)((0,l.SU)(u.DxColumn),{"data-field":"dueDate",caption:"Due Date","data-type":"date"}),(0,a.Wm)((0,l.SU)(u.DxToolbar),null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(u.DxItem),{name:"undo"}),(0,a.Wm)((0,l.SU)(u.DxItem),{name:"redo"}),(0,a.Wm)((0,l.SU)(u.DxItem),{name:"separator"}),(0,a.Wm)((0,l.SU)(u.DxItem),{name:"collapseAll"}),(0,a.Wm)((0,l.SU)(u.DxItem),{name:"expandAll"}),(0,a.Wm)((0,l.SU)(u.DxItem),{name:"separator"}),(0,a.Wm)((0,l.SU)(u.DxItem),{name:"addTask"}),(0,a.Wm)((0,l.SU)(u.DxItem),{name:"deleteTask"}),(0,a.Wm)((0,l.SU)(u.DxItem),{name:"separator"}),(0,a.Wm)((0,l.SU)(u.DxItem),{name:"zoomIn"}),(0,a.Wm)((0,l.SU)(u.DxItem),{name:"zoomOut"})])),_:1}),(0,a.Wm)((0,l.SU)(u.DxValidation),{"auto-update-parent-tasks":!0}),(0,a.Wm)((0,l.SU)(u.DxEditing),{enabled:!0})])),_:1},512))}});const r=s;var c=r},67707:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(73396),l=n(44870),o=n(6224),u=n.n(o),i=n(70369),d=n.n(i),s=n(68389),r=n(88707),c=n(24754),m=n(85219),p=n(16552),x=n(35782),v=n(70194);const g=e=>((0,a.dD)("data-v-c85b2e48"),e=e(),(0,a.Cn)(),e),f={class:"view-wrapper"},h=g((()=>(0,a._)("span",{class:"toolbar-header"},"Task",-1))),S=g((()=>(0,a._)("div",{class:"separator"},null,-1))),k={class:"task-list"},D={key:0,class:"grid"},b={key:1,class:"kanban"},I={key:2,class:"gantt"};var w=(0,a.aZ)({__name:"planning-task-list",setup(e){const t=(0,l.iH)(!0),n=(0,l.iH)(c.d[0].text),o=(0,l.iH)("grid"),i=(0,l.iH)(null),g=(0,l.iH)(null),w=(0,l.iH)([]),C=(0,l.iH)([]),_=(0,l.iH)([]),y=()=>i.value?.addRow(),W=()=>i.value.showColumnChooser(),U=e=>i.value.search(e.component.option("text")),B=()=>{({grid:i,gantt:g,kanban:null})[o.value]?.value.exportToPdf()},T=()=>{i.value.exportToXlsx()},E=async()=>{t.value=!0;const e=await(0,r.wH)();C.value=[...e],_.value=e,t.value=!1},F=async()=>{t.value=!0;const e=await(0,r.Ak)();w.value=e.filter((e=>!!e.status&&!!e.priority)),t.value=!1},H=e=>{const{itemData:t}=e;n.value=t.text;const a=c.d.find((e=>n.value===e.text))?.id;o.value=a||"grid","grid"!==a&&0===C.value.length?E():"grid"===a&&0===w.value.length&&F()},A=()=>{t.value=!0,"grid"===o.value?(F(),_.value=[],C.value=[]):(w.value=[],E())};return F(),(e,r)=>((0,a.wg)(),(0,a.iD)("div",f,[(0,a.Wm)((0,l.SU)(s.DxToolbar),null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(s.DxItem),{location:"before"},{default:(0,a.w5)((()=>[h])),_:1}),(0,a.Wm)((0,l.SU)(s.DxItem),{location:"before"},{default:(0,a.w5)((()=>[(0,a.Wm)((0,l.SU)(d()),{"selected-index":0,items:(0,l.SU)(c.d),onItemClick:H},null,8,["items"])])),_:1}),(0,a.Wm)((0,l.SU)(s.DxItem),{location:"after","locate-in-menu":"auto","css-class":"add-grid-row"},{default:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a.Wm)((0,l.SU)(u()),{icon:"plus",text:"Add Task",type:"default","styling-mode":"contained",onClick:y})])])),_:1}),(0,a.Wm)((0,l.SU)(s.DxItem),{location:"after","locate-in-menu":"auto",widget:"dxButton","show-text":"inMenu",options:{text:"Refresh",icon:"refresh",onClick:A}},null,8,["options"]),(0,a.Wm)((0,l.SU)(s.DxItem),{disabled:"grid"!==o.value,location:"after","locate-in-menu":"auto",widget:"dxButton","show-text":"inMenu",options:{text:"Column Chooser",icon:"columnchooser",onClick:W}},null,8,["disabled","options"]),(0,a.Wm)((0,l.SU)(s.DxItem),{location:"after","locate-in-menu":"auto"},{default:(0,a.w5)((()=>[S])),_:1}),(0,a.Wm)((0,l.SU)(s.DxItem),{disabled:!["grid","gantt"].includes(o.value),location:"after","locate-in-menu":"auto",widget:"dxButton","show-text":"inMenu",options:{text:"Export to PDF",icon:"exportpdf",onClick:B}},null,8,["disabled","options"]),(0,a.Wm)((0,l.SU)(s.DxItem),{disabled:!["grid"].includes(o.value),location:"after","locate-in-menu":"auto",widget:"dxButton","show-text":"inMenu",options:{text:"Export to Exel",icon:"exportxlsx",onClick:T}},null,8,["disabled","options"]),(0,a.Wm)((0,l.SU)(s.DxItem),{disabled:!["grid"].includes(o.value),location:"after","locate-in-menu":"auto",widget:"dxTextBox",options:{placeholder:"Task Search",mode:"search",onInput:U}},null,8,["disabled","options"])])),_:1}),(0,a.Wm)(m.Z,{"is-loading":t.value},{default:(0,a.w5)((()=>[(0,a._)("div",k,[(0,l.SU)(c.d)[0].text===n.value?((0,a.wg)(),(0,a.iD)("div",D,[(0,a.Wm)(p["default"],{ref_key:"tasksGridCmp",ref:i,"data-source":w.value},null,8,["data-source"])])):(0,l.SU)(c.d)[1].text===n.value?((0,a.wg)(),(0,a.iD)("div",b,[(0,a.Wm)(x["default"],{tasks:C.value},null,8,["tasks"])])):(0,l.SU)(c.d)[2].text===n.value?((0,a.wg)(),(0,a.iD)("div",I,[(0,a.Wm)(v["default"],{ref_key:"tasksGanttCmp",ref:g,tasks:_.value},null,8,["tasks"])])):(0,a.kq)("",!0)])])),_:1},8,["is-loading"])]))}}),C=n(40089);const _=(0,C.Z)(w,[["__scopeId","data-v-c85b2e48"]]);var y=_}}]);