(this["webpackJsonptask-planner"]=this["webpackJsonptask-planner"]||[]).push([[0],{149:function(e,a,t){e.exports=t(166)},154:function(e,a,t){},159:function(e,a,t){},166:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(12),l=t.n(o),c=(t(154),t(228)),i=t(238),s=t(239),d=t(10),u=(t(159),function(){try{var e=localStorage.getItem("consent");if(null===e)return;return JSON.parse(e)}catch(a){return}}),m=t(17),f=t(27),p=t(22),b=t(35),g=t(28),h=t(124),E=function(){var e=(new Date).toDateString(),a=Date.parse(e);return a},y=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=new Date(e).toDateString(),n=Date.parse(t),r=n+864e5*Math.floor(a),o=new Date(r).toDateString();return Date.parse(o)},k=function(e,a){var t=new Date(e);switch(a){case"day":return t.getDate();case"day-of-the-week":return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t.getDay()];case"day-of-the-week-abbr":return["Sun.","Mon.","Tues.","Wed.","Thur.","Fri.","Sat."][t.getDay()];case"month":return["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()];case"month-abbr":return["Jan.","Feb.","Mar.","Apr.","May","June","July","Aug.","Sep.","Oct.","Nov.","Dec."][t.getMonth()];case"year":return t.getFullYear();default:return t.toLocaleDateString(void 0,{year:"numeric",month:"numeric",day:"numeric"})}},v=function(e,a){return Math.floor((a-e)/864e5)},O=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=v(e,a),r=[];if(n<0)return console.warn("Wrong input"),["error"];for(var o=0;o<=n;o++)r.push(y(e,o));return null!==t&&r.splice(r.indexOf(t[0])+1,t[1]-1),r},j=function(e,a,t){var n=O(e,a).map((function(e){return k(e,t)}));return Object(h.a)(new Set(n)).map((function(e){return{title:e,count:n.filter((function(a){return a===e})).length}}))},C=t(78),w=Object(C.b)({name:"tasks",initialState:{view:{darkMode:null,gridLines:!0},custom:{categories:["default","frontend","backend","UX","UI","setup"],people:["me","Person","Elon Musk","\u521d\u97f3\u30df\u30af","2B","Wheatley"]},calendar:{today:E(),firstDay:y(E(),-20),lastDay:y(E(),20),headers:{year:null,month:!0,shortDay:!0,day:!0}},data:[],lastMessage:"default message..."},reducers:{setDarkMode:function(e,a){e.view.darkMode=a.payload},setGridLines:function(e,a){e.view.gridLines=a.payload},setCustom:function(e,a){e.custom=Object(m.a)(Object(m.a)({},e.custom),a.payload)},setToday:function(e,a){e.calendar.today=a.payload},setCalendar:function(e,a){e.calendar=Object(m.a)(Object(m.a)({},e.calendar),a.payload)},addCategory:function(e,a){e.custom.categories.push(a.payload),e.custom.categories=Array.from(new Set(e.custom.categories))},addPerson:function(e,a){e.custom.people.push(a.payload),e.custom.people=Array.from(new Set(e.custom.people))},addEditMainTask:function(e,a){var t=e.data.findIndex((function(e){return e.id===a.payload.id}));-1===t?e.data.push(a.payload):e.data[t]=a.payload},addEditTask:function(e,a){var t=e.data.findIndex((function(e){return e.id===a.payload.target})),n=e.data[t].tasks.findIndex((function(e){return e.id===a.payload.data.id}));-1===n?e.data[t].tasks.push(a.payload.data):e.data[t].tasks[n]=a.payload.data},deleteTask:function(e,a){if(a.payload.mainTask){var t=e.data.filter((function(e){return e.id!==a.payload.id}));e.data=t}else{var n=e.data.findIndex((function(e){return e.id===a.payload.parent})),r=e.data[n].tasks.filter((function(e){return e.id!==a.payload.id}));e.data[n].tasks=r}},setCompletion:function(e,a){var t=e.data.findIndex((function(e){return e.id===a.payload.data.parent})),n=e.data[t].tasks.findIndex((function(e){return e.id===a.payload.data.id}));-1===n?console.warn("error"):e.data[t].tasks[n].completion=a.payload.completion},setMessage:function(e,a){e.lastMessage=a.payload},reorderTasks:function(e,a){var t=e.data.findIndex((function(e){return e.id===a.payload.data.parent})),n=e.data[t].tasks.findIndex((function(e){return e.id===a.payload.data.id})),r=e.data[t].tasks;-1===n?console.warn("error"):(!function(e,a,t){var n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}(r,n,n+a.payload.target),e.data[t].tasks=r)}}}),D=w.actions,x=D.setDarkMode,S=D.setGridLines,N=(D.setCustom,D.setScrollPosition,D.setMaxScrollPosition,D.addCategory),T=D.addPerson,M=D.addEditMainTask,I=D.addEditTask,B=D.setToday,P=D.setCalendar,L=D.deleteTask,F=D.setCompletion,z=D.setMessage,A=D.reorderTasks,V=function(e){return e.tasks.view.darkMode},J=function(e){return e.tasks.view.gridLines},W=function(e){return e.tasks.custom},G=function(e){return e.tasks.data},H=function(e){return e.tasks.calendar.today},R=function(e){return e.tasks.calendar},Y=function(e){return e.tasks.lastMessage},K=w.reducer;function U(){var e=Object(f.a)(["\n  background-color: ",";\n  cursor: pointer;\n  &:hover {\n    background-color:  ",";\n  }\n  transition: all 0.2s ease;\n"]);return U=function(){return e},e}function X(){var e=Object(f.a)(["\n    &:hover {\n        background-color: #1a8a98;\n    }\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    border: 1px solid ","; \n"]);return X=function(){return e},e}function $(){var e=Object(f.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-sizing: border-box;\n    border: 1px solid ",';\n    &[class~="today"] {\n      position: relative;\n  }\n    &[id~="','"][class~="today"]::after {\n      content:\'\';\n      position: absolute;\n      top: calc( -1 * calc('," * ","));\n      // left: 0;\n      width: ",";\n      // height: calc(88vh + 1.5 * ",");\n      height: calc(100vh - 18px);\n      background-color: rgba(100%, 9%, 26.7%, 0.5);\n  }\n"]);return $=function(){return e},e}function q(){var e=Object(f.a)(["\n    display: grid;\n    grid-template-columns: ",";\n    grid-auto-rows: ",";\n    column-gap: ",";\n"]);return q=function(){return e},e}function Q(){var e=Object(f.a)(["\n    padding-bottom: calc("," / 2);\n"]);return Q=function(){return e},e}function Z(){var e=Object(f.a)(["\n    display: grid;\n    grid-auto-rows: ",";\n    row-gap: ",";\n"]);return Z=function(){return e},e}function _(){var e=Object(f.a)(["\n    display: grid;\n    row-gap: 1.5rem;\n"]);return _=function(){return e},e}g.a.div(_());var ee=g.a.div(Z(),"3rem","0px"),ae=Object(g.a)(ee)(Q(),"3rem"),te=g.a.div(q(),(function(e){return e.gtc}),"3rem","0px"),ne=g.a.div($(),(function(e){return e.color}),(function(e){return e.id}),"3rem",(function(e){return e.headersCount}),"3rem","3rem"),re=g.a.div(X(),(function(e){return e.color})),oe=g.a.div(U(),(function(e){return e.color}),(function(e){return function(e){var a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return a?"rgba(".concat(parseInt(a[1],16),",").concat(parseInt(a[2],16),",").concat(parseInt(a[3],16),",0.5)"):null}(e.color)}));function le(){var e=Object(f.a)(["\n  z-index: 10;\n  width: max-content;\n  background-color: #3f51b5;\n  border: 1px solid ",";\n  scroll-behavior: smooth;\n  -ms-overflow-style: none;  /* Internet Explorer 10+ */\n  scrollbar-width: none;  /* Firefox */\n  &::-webkit-scrollbar { \n    display: none;  /* Safari and Chrome */\n}\n"]);return le=function(){return e},e}var ce=g.a.div(le(),(function(e){return e.color})),ie=function(){var e=Object(d.c)(H),a=Object(d.c)(R),t=Object(d.b)(),o=Object(p.a)(),l=a.headers,c=j(a.firstDay,a.lastDay,"month"),i=j(a.firstDay,a.lastDay,"year"),s="repeat(".concat(v(a.firstDay,a.lastDay)+1,", ").concat("3rem",")"),u=Object.values(l).filter((function(e){return e})).length;return Object(n.useEffect)((function(){if(null===l.year){var e=1!==i.length;t(P({headers:Object(m.a)(Object(m.a)({},l),{year:e})}))}})),r.a.createElement(ce,{color:o.palette.divider},r.a.createElement(ee,null,l.year&&r.a.createElement(te,{gtc:s,className:"years"},i.map((function(e,a){return r.a.createElement(ne,{color:o.palette.divider,key:a,style:{gridColumn:"span ".concat(e.count),color:"#fff"}},r.a.createElement(b.a,{variant:"h3"},e.title))}))),l.month&&r.a.createElement(te,{gtc:s,className:"months"},c.map((function(e,a){return r.a.createElement(ne,{color:o.palette.divider,key:a,style:{display:"flex",justifyContent:"center",alignItems:"center",gridColumn:"span ".concat(e.count),color:"#fff"}},r.a.createElement(b.a,{variant:"h4"},e.title))}))),l.shortDay&&r.a.createElement(te,{gtc:s,className:"short-days",style:{color:"#fff"}},O(a.firstDay,a.lastDay).map((function(a,t){return r.a.createElement(ne,{color:o.palette.divider,className:a===e?"today":"else",key:t,style:{color:"#fff"}},r.a.createElement(b.a,null,k(a,"day-of-the-week-abbr")))}))),r.a.createElement(te,{gtc:s,className:"days"},O(a.firstDay,a.lastDay).map((function(a,t){return r.a.createElement(ne,{color:o.palette.divider,className:a===e?"today":"else",id:k(a),headersCount:u,key:t,style:{color:"#fff"}},r.a.createElement(b.a,null,k(a,"day")))})))))},se=t(15),de=t(13),ue=t(2),me=t(202),fe=t(207),pe=t(208),be=t(169),ge=t(247),he=t(209),Ee=t(203),ye=t(168),ke=t(204),ve=t(113),Oe=t.n(ve),je=t(114),Ce=t.n(je),we=t(112),De=t.n(we),xe=t(206),Se=t(205),Ne=t(111),Te=t.n(Ne),Me=t(110),Ie=t.n(Me),Be=t(108),Pe=t.n(Be),Le=t(109),Fe=t.n(Le),ze=function(e){document.getElementById(e).scrollIntoView({behavior:"smooth",alignTo:!1})},Ae=Object(me.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper,minHeight:"3rem"},nested:{paddingLeft:e.spacing(4),height:"3rem",textOverflow:"ellipsis"}}})),Ve=function(e){var a=Ae(),t=Object(d.b)(),o=Object(n.useState)(e.startOpen),l=Object(de.a)(o,2),c=l[0],i=l[1],s=function(){i(!c)},u=function(e,a){switch(a){case"up":t(A({data:e,target:-1}));break;case"down":t(A({data:e,target:1}));break;default:console.warn("reordering did not work")}};return r.a.createElement(Ee.a,{style:{padding:0,paddingBottom:"24px",wordBreak:"break-word"},component:"nav","aria-labelledby":"main task",className:"".concat(a.root," list ")},r.a.createElement(ye.a,{button:!0,onClick:function(){return ze(e.data.id)}},r.a.createElement(ke.a,{primary:e.title||e.data.title}),c?r.a.createElement(be.a,{onClick:s,size:"small",style:{padding:"8px"}},r.a.createElement(Pe.a,null)):r.a.createElement(be.a,{onClick:s,size:"small",style:{padding:"8px"}},r.a.createElement(Fe.a,null))),r.a.createElement(Se.a,{in:c,timeout:"auto",unmountOnExit:!0},r.a.createElement(Ee.a,{component:"div",disablePadding:!0},e.data.tasks.map((function(t,n){return r.a.createElement(ye.a,{key:n,className:a.nested},r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},0!==n&&r.a.createElement(be.a,{onClick:function(){return u(t,"up")},size:"small",style:{marginBottom:"-10px"}},r.a.createElement(Ie.a,null)),n!==e.data.tasks.length-1&&r.a.createElement(be.a,{onClick:function(){return u(t,"down")},size:"small"},r.a.createElement(Te.a,null))),r.a.createElement(ye.a,{onClick:function(){return ze("task-".concat(t.id))},button:!0},r.a.createElement(ke.a,{primary:t.title})),r.a.createElement(xe.a,null,r.a.createElement(ke.a,{secondary:t.completion})))})))))},Je=function(){var e=Object(d.c)(G);return r.a.createElement(Ee.a,{style:{padding:0}},e.map((function(e,a){return r.a.createElement(Ve,{key:a,data:e,startOpen:!0})})))},We=Object(me.a)((function(e){return{root:{display:"flex",height:"100vh"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{paddingLeft:"0",marginLeft:360,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:360,flexShrink:0},drawerPaper:{width:360},drawerHeader:{display:"flex",alignItems:"center",padding:e.spacing(0,1),height:"3rem",justifyContent:"flex-end"},content:{flexGrow:1,width:"98vw",height:"100vh",overflowX:"scroll",overflowY:"hidden",paddingTop:"3rem",transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-360},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},cellSize:{height:"3rem"},dense:{height:"3rem",minHeight:"3rem"},rootAppBar:{height:"3rem",zIndex:10}}})),Ge=function(e){var a=We(),t=Object(p.a)(),o=Object(n.useState)(!1),l=Object(de.a)(o,2),c=l[0],i=l[1],s=Object.values(Object(d.c)(R).headers);return r.a.createElement("div",{className:a.root},r.a.createElement(fe.a,{classes:{root:a.rootAppBar},position:"fixed",className:Object(ue.a)(a.appBar,Object(se.a)({},a.appBarShift,c))},r.a.createElement(pe.a,{variant:"dense",classes:{root:a.rootAppBar,dense:a.dense}},r.a.createElement(be.a,{color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},edge:"start",className:Object(ue.a)(a.menuButton,c&&a.hide)},r.a.createElement(De.a,null)),r.a.createElement(b.a,{variant:"h6",noWrap:!0},"Task planner"))),r.a.createElement(ge.a,{className:a.drawer,variant:"persistent",anchor:"left",open:c,classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.drawerHeader},r.a.createElement(b.a,{variant:"h6"},"Task list"),r.a.createElement(be.a,{onClick:function(){i(!1)}},"ltr"===t.direction?r.a.createElement(Oe.a,null):r.a.createElement(Ce.a,null))),r.a.createElement(he.a,null),r.a.createElement(Ee.a,{style:{padding:0}},["Years","Months","Day names","Days"].map((function(e,n){return s[n]&&r.a.createElement(ye.a,{style:{borderBottom:"1px solid ".concat(t.palette.divider)},key:n,className:a.cellSize},r.a.createElement(ke.a,{align:"right"},e))}))),r.a.createElement(he.a,null),r.a.createElement(Je,null)),r.a.createElement("main",{className:Object(ue.a)(a.content,Object(se.a)({},a.contentShift,c))},e.children))},He=t(172),Re=t(126),Ye=t(80),Ke=t(231),Ue=t(232),Xe=t(233),$e=t(234),qe=t(235),Qe=t(226),Ze=t(56),_e=t.n(Ze),ea=t(119),aa=t.n(ea),ta=t(120),na=t.n(ta),ra=t(225),oa=t(217),la=t(218),ca=t(219),ia=t(117),sa=t.n(ia),da=t(210),ua=t(245),ma=t(242),fa=t(214),pa=t(215),ba={"red-400":"#ef5350","red-500":"#f44336","red-600":"#e53935","pink-300":"#f06292","pink-400":"#ec407a","pink-500":"#e91e63","pink-600":"#d81b60","pink-700":"#c2185b","purple-300":"#ba68c8","purple-400":"#ab47bc","purple-600":"#8e24aa","purple-700":"#7b1fa2","purple-800":"#6a1b9a","deepPurple-300":"#9575cd","deepPurple-400":"#7e57c2","deepPurple-500":"#673ab7","deepPurple-600":"#5e35b1","deepPurple-800":"#4527a0","indigo-300":"#7986cb","indigo-400":"#5c6bc0","indigo-500":"#3f51b5","indigo-700":"#303f9f","indigo-800":"#283593","indigo-900":"#1a237e","lightBlue-500":"#2196f3","lightBlue-600":"#1e88e5","lightBlue-800":"#1565c0","lightBlue-900":"#0d47a1","cyan-700":"#0097a7","cyan-800":"#00838f","cyan-900":"#006064","teal-400":"#26a69a","teal-600":"#00897b","teal-700":"#00796b","teal-800":"#00695c","teal-900":"#004d40","green-600":"#43a047","green-700":"#388e3c","green-800":"#2e7d32","lightGreen-700":"#689f38","lightGreen-800":"#558b2f","deepOrange-500":"#ff5722","deepOrange-600":"#f4511e","deepOrange-700":"#e64a19","deepOrange-900":"#bf360c","brown-400":"#8d6e63","brown-500":"#795548","brown-600":"#6d4c41","brown-700":"#5d4037"},ga=t(115),ha=t.n(ga),Ea=Object(me.a)((function(e){return{select:{display:"flex"}}})),ya=function(e){var a=Ea();return r.a.createElement(da.a,null,r.a.createElement(ma.a,{classes:{select:a.select},name:"color",value:e.data.color,onChange:e.onChange,autoWidth:!0,displayEmpty:!0,id:"color-select"},r.a.createElement(fa.a,{value:"",disabled:!0},r.a.createElement("em",null,"Color")),Object.entries(ba).map((function(e){var a=e[0],t=e[1];return r.a.createElement(fa.a,{key:a,value:t},r.a.createElement(pa.a,null,r.a.createElement(ha.a,{fontSize:"large",style:{color:t}})),r.a.createElement(ke.a,null,a))}))))},ka=t(23),va=t(240),Oa=t(122),ja=function(e){return r.a.createElement(ka.a,{utils:Oa.a},r.a.createElement(va.a,{fullWidth:!0,format:"dd.MM.yyyy",margin:"normal",id:"date-picker-inline",label:"Task start date",value:e.data.startDate,onChange:e.onChange,KeyboardButtonProps:{"aria-label":"change date"}}))},Ca=t(222),wa=t(223),Da=t(244),xa=Object(me.a)((function(e){return{nested:{paddingLeft:e.spacing(4)}}})),Sa=function(e){var a=xa(),t=Object(d.c)(G),n=[];return t.forEach((function(e){n.push({value:e.id,title:e.title,nested:!1})})),r.a.createElement(Ca.a,null,r.a.createElement(da.a,null,r.a.createElement(wa.a,{control:r.a.createElement(Da.a,{name:"mainTask",checked:e.data.mainTask,onChange:function(a){var t;a.target.checked?e.onChange((t={},Object(se.a)(t,a.target.name,a.target.checked),Object(se.a)(t,"parent",""),t)):e.onChange(Object(se.a)({},a.target.name,a.target.checked))}}),label:"Main task"})),r.a.createElement(da.a,null,r.a.createElement(ma.a,{value:e.data.parent,name:"parent",onChange:function(a){e.onChange(Object(se.a)({},a.target.name,a.target.value))},disabled:e.data.mainTask,autoWidth:!0,displayEmpty:!0,id:"grouped-select"},r.a.createElement(fa.a,{value:"",disabled:!0},"Parent task"),n.map((function(e,t){return r.a.createElement(fa.a,{key:t,className:e.nested?a.nested:"",value:e.value},e.title)})))))},Na=t(224),Ta=t(243),Ma=function(e){var a=Object(Na.a)();return r.a.createElement(Ta.a,{value:e.value,onChange:function(a,t){"string"===typeof t?e.onChange(Object(se.a)({},e.name,t)):t&&t.inputValue?e.onChange(Object(se.a)({},e.name,t.inputValue)):e.onChange(t)},filterOptions:function(t,n){var r=a(t,n);return""!==n.inputValue&&r.push(Object(se.a)({inputValue:n.inputValue},e.name,"Add ".concat(e.name,": ").concat(n.inputValue))),r},selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,id:e.id,options:e.options,getOptionLabel:function(a){return"string"===typeof a?a:a.inputValue?a.inputValue:a[e.name]},renderOption:function(a){return a[e.name]},freeSolo:!0,renderInput:function(a){return r.a.createElement(ua.a,Object.assign({},a,{label:e.label}))}})},Ia=Object(me.a)((function(e){return{root:{display:"flex",flexDirection:"column"},form:Object(se.a)({display:"grid",gridTemplateColumns:"2fr 1fr",columnGap:e.spacing(3)},e.breakpoints.down("sm"),{gridTemplateColumns:"1fr"}),formControl:{marginBottom:e.spacing(1)}}})),Ba=function(e){var a=Ia(),t=Object(d.c)(W).categories.map((function(e){return{category:e}})),o=Object(d.c)(W).people.map((function(e){return{responsible:e}})),l={};l=e.initialData.id?e.initialData:{id:"",title:"",description:"",mainTask:!1,startDate:0,duration:0,parent:"",category:"",responsible:"",color:"",tasks:[]};var c=Object(n.useState)(l),i=Object(de.a)(c,2),s=i[0],u=i[1],f=function(e){u(Object(m.a)(Object(m.a)({},s),e))},p=function(){b(s),e.onChange(s)},b=function(a){var t=!1;t=""!==a.title&&(""!==a.description&&(0!==a.startDate&&(0!==a.duration&&((!1!==a.mainTask||""!==a.parent)&&(""!==a.category&&(""!==a.responsible&&""!==a.color)))))),e.dataValidation(t)};return r.a.createElement("form",{className:a.form,noValidate:!0,autoComplete:"off",onChange:p,onBlur:p},r.a.createElement("div",{className:a.root},r.a.createElement(da.a,{className:a.formControl},r.a.createElement(ua.a,{id:"title-input",name:"title",label:"New task name",value:s.title,inputProps:{maxLength:50},onChange:function(e){f(Object(se.a)({},e.target.name,e.target.value))}})),r.a.createElement(da.a,{className:a.formControl},r.a.createElement(Ma,{id:"select-category-input",name:"category",label:"Choose category or enter new",options:t,value:s.category,onChange:function(e){f(e)}})),r.a.createElement(da.a,{className:a.formControl},r.a.createElement(ua.a,{id:"description-name",label:"Description",value:s.description,onChange:function(e){f({description:e.target.value})},multiline:!0,rows:4})),r.a.createElement(da.a,{className:a.formControl},r.a.createElement(Ma,{id:"select-person-input",name:"responsible",label:"Choose person responsible or enter new",options:o,value:s.responsible,onChange:function(e){f(e)}}))),r.a.createElement("div",{className:a.root},r.a.createElement(da.a,{className:a.formControl},r.a.createElement(Sa,{onChange:function(e){f(e)},data:s})),r.a.createElement(da.a,{className:a.formControl},r.a.createElement(ya,{onChange:function(e){f(Object(se.a)({},e.target.name,e.target.value))},data:s})),r.a.createElement(da.a,{className:a.formControl},r.a.createElement(ja,{onChange:function(e){f({startDate:y(e)})},data:s})),r.a.createElement(da.a,{className:a.formControl},r.a.createElement(ua.a,{id:"task-duration-input",label:"Task duration",name:"duration",value:s.duration,onChange:function(e){f(Object(se.a)({},e.target.name,Number(e.target.value)))},type:"number",inputProps:{min:1,step:1},InputLabelProps:{shrink:!0}}))))},Pa=function(e){var a=Object(n.useState)(e.data||{}),t=Object(de.a)(a,2),o=t[0],l=t[1],c=Object(n.useState)(!1),i=Object(de.a)(c,2),s=i[0],u=i[1],f=function(){e.handleClose(!0)},p=Object(d.b)(),b=Object(d.c)(R);return r.a.createElement(r.a.Fragment,null,r.a.createElement(ra.a,{style:{cursor:"move"},id:"draggable-dialog-".concat(e.name)},"Add task"),r.a.createElement(oa.a,null,r.a.createElement(Ba,{initialData:o,onChange:function(e){l(e)},dataValidation:function(e){u(e)}})),r.a.createElement(la.a,null,r.a.createElement(Qe.a,{title:s?"":"All fields must be filled in to save"},r.a.createElement("span",null,r.a.createElement(ca.a,{variant:"contained",color:"primary",size:"large",onClick:function(){var e=o.id||Math.floor(1e4*Math.random()),a=y(o.startDate,o.duration),t=o.completion||"0%",n=Object(m.a)(Object(m.a)({},o),{id:e,endDate:a,completion:t});o.mainTask?p(M(n)):p(I({target:n.parent,data:n}));var r=""===o.id?'Task "'.concat(o.title,'" added'):'Task "'.concat(o.title,'" modified');p(z(r));var l=y(n.startDate,-15),c=y(n.endDate,15);p(P({firstDay:Math.min(l,b.firstDay),lastDay:Math.max(c,b.lastDay)})),p(N(o.category)),p(T(o.responsible)),f()},startIcon:r.a.createElement(sa.a,null),disabled:!s},"Save"))),r.a.createElement(Qe.a,{title:"Close"},r.a.createElement(be.a,{onClick:function(){return f()},"aria-label":"close"},r.a.createElement(_e.a,null)))),0===Object.keys(o).length)},La=t(227),Fa=function(e){var a=Object(d.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ra.a,{style:{cursor:"move"},id:"draggable-dialog - ".concat(e.title," ")},"This action cannot be undone"),r.a.createElement(oa.a,null,r.a.createElement(La.a,null,"Are you sure you want to remove task:"),e.task.mainTask?r.a.createElement(r.a.Fragment,null,r.a.createElement(La.a,{align:"center"},'"',e.task.title,'"'),r.a.createElement(La.a,{align:"center"},"and each of its subtasks?")):r.a.createElement(La.a,{align:"center"},'"',e.task.title,'" ?')),r.a.createElement(la.a,null,r.a.createElement(ca.a,{variant:"contained",autoFocus:!0,onClick:e.handleClose,color:"secondary"},"No"),r.a.createElement(ca.a,{variant:"contained",onClick:function(){a(L(e.task)),a(z('Task "'.concat(e.task.title,'" removed'))),e.handleClose(!0)},color:"primary"},"Yes")))},za=t(216),Aa=t(118),Va=t.n(Aa);function Ja(e){return r.a.createElement(Va.a,{handle:"#draggable-dialog-".concat(e.name),cancel:'[class*="MuiDialogContent-root"]'},r.a.createElement(Ye.a,e))}var Wa=function(e){var a=Object(p.a)(),t=Object(c.a)(a.breakpoints.down("sm"));return r.a.createElement(za.a,{fullScreen:t,open:e.open,onClose:e.handleClose,PaperComponent:Ja,PaperProps:{name:e.name},"aria-labelledby":"draggable-dialog-".concat(e.name),children:e.children})},Ga=t(249),Ha=t(229),Ra=t(230),Ya=Object(me.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)},alignItems:"center"},orange:{color:e.palette.getContrastText(Ha.a[500]),backgroundColor:Ha.a[500]},purple:{color:e.palette.getContrastText(Ra.a[500]),backgroundColor:Ra.a[500]}}})),Ka=function(e){var a=Ya();return r.a.createElement("div",{className:a.root},r.a.createElement(Ga.a,{className:a.orange},e.responsible.charAt(0)),r.a.createElement(b.a,null,e.responsible))},Ua=t(221),Xa=function(e){var a=Object(d.b)(),t=Object(n.useState)(e.data.completion.slice(0,-1)),o=Object(de.a)(t,2),l=o[0],c=o[1],i=Object(n.useState)(!1),s=Object(de.a)(i,2),u=s[0],m=s[1],f=function(e){var a=Math.round(Number(e));return a>100?100:a<0?0:a};return r.a.createElement(r.a.Fragment,null,u?r.a.createElement(be.a,{disableRipple:!0},r.a.createElement(ua.a,{autoFocus:!0,onChange:function(e){c(e.target.value)},onBlur:function(){m(!1);var t=f(l)+"%";a(F({data:e.data,completion:t}))},value:l,inputProps:{type:"number",max:100,min:0},margin:"none",id:"standard-end-adornment",className:"completion",style:{width:"3rem"},InputProps:{endAdornment:r.a.createElement(Ua.a,{position:"end"},"%")}})):r.a.createElement(be.a,{"aria-label":"completion",onClick:function(){m(!0)}},e.data.completion))},$a=Object(me.a)((function(e){var a;return{root:(a={wordBreak:"break-word",maxHeight:"75vh"},Object(se.a)(a,e.breakpoints.down("md"),{maxHeight:"90vh"}),Object(se.a)(a,"display","flex"),Object(se.a)(a,"flexDirection","column"),a)}})),qa=function(e){var a=$a(),t=Object(n.useState)(!1),o=Object(de.a)(t,2),l=o[0],c=o[1],i=Object(n.useState)(!1),s=Object(de.a)(i,2),d=s[0],u=s[1],m=function(){c(!1)},f=function(){u(!1)};return r.a.createElement(Ke.a,{disableGutters:!0,maxWidth:"xs"},r.a.createElement(Ue.a,{className:"".concat(a.root," card")},r.a.createElement(Xe.a,{title:e.data.title,subheader:e.data.category,action:e.data.mainTask?"":r.a.createElement(Xa,{data:e.data})}),r.a.createElement($e.a,null,r.a.createElement(b.a,{variant:"body1",color:"textSecondary",component:"p"},e.data.description)),e.data.mainTask&&r.a.createElement(Ve,{data:e.data,startOpen:!1,title:"Subtasks list"}),r.a.createElement(qe.a,{style:{justifyContent:"space-between"}},r.a.createElement(Ka,{responsible:e.data.responsible}),r.a.createElement("div",null,r.a.createElement(Qe.a,{title:"Delete"},r.a.createElement(be.a,{"aria-label":"delete",onClick:function(){u(!0)}},r.a.createElement(aa.a,null))),r.a.createElement(Qe.a,{title:"Edit"},r.a.createElement(be.a,{"aria-label":"edit",onClick:function(){c(!0)}},r.a.createElement(na.a,null))),r.a.createElement(Qe.a,{title:"Close"},r.a.createElement(be.a,{onClick:function(a){return e.click(a)},"aria-label":"close"},r.a.createElement(_e.a,null))))),r.a.createElement(Wa,{open:l,title:"edit",handleClose:m},r.a.createElement(Pa,{title:"edit",data:e.data,handleClose:m})),r.a.createElement(Wa,{open:d,title:"delete",handleClose:f},r.a.createElement(Fa,{title:"delete",task:e.data,handleClose:f}))))},Qa=function(e){var a=Object(n.useState)(null),t=Object(de.a)(a,2),o=t[0],l=t[1],c=Object(n.useState)(!1),i=Object(de.a)(c,2),s=i[0],d=i[1],u=function(){return function(e){l(e.currentTarget),d(!1===s)}};return r.a.createElement(oe,{className:"task",id:e.data.id,color:e.data.color,style:{gridColumn:"span ".concat(e.data.duration)}},r.a.createElement("div",{onClick:u(),style:{display:"flex",alignItems:"center",height:"3rem",bottom:"3rem",paddingLeft:"1rem",paddingRight:"1rem"}},r.a.createElement(b.a,{style:{color:"#fff",overflow:"hidden"}},e.data.title)),r.a.createElement(He.a,{open:s,anchorEl:o,placement:"bottom-start",transition:!0,style:{zIndex:"11"}},(function(a){var t=a.TransitionProps;return r.a.createElement(Re.a,Object.assign({},t,{timeout:350}),r.a.createElement(Ye.a,null,r.a.createElement(qa,{data:e.data,click:u()})))})))},Za=t(127);function _a(){var e=Object(f.a)(["\n  width: 100%;\n  height: 100%;\n  posistion: relative;\n"]);return _a=function(){return e},e}var et=g.a.div(_a()),at=function(e){var a=Object(n.useState)(null),t=Object(de.a)(a,2),o=t[0],l=t[1],c=Object(n.useState)(!1),i=Object(de.a)(c,2),s=i[0],d=i[1],u=function(){return function(e){l(e.currentTarget),d(!1===s)}},m=function(){return e.mainTaskDates.start>e.data.startDate||e.mainTaskDates.end<e.data.endDate?"#d50000":"100%"===e.data.completion?"#505050":e.data.color};return r.a.createElement(Za.a,{in:!0,style:{transformOrigin:"0 0 0"}},r.a.createElement(oe,{className:"task",id:"task-".concat(e.data.id),color:m(),style:{gridColumn:"span ".concat(e.data.duration)}},r.a.createElement(Qe.a,{title:"#d50000"===m()?"Subtask should be contained inside a main task":"",arrow:!0},r.a.createElement(et,{onClick:u()},r.a.createElement("div",{style:{width:e.data.completion,height:"100%",backgroundColor:"black",opacity:.2}}),r.a.createElement("div",{style:{display:"flex",alignItems:"center",height:"3rem",position:"relative",bottom:"3rem",paddingLeft:"1rem",paddingRight:"1rem"}},r.a.createElement(b.a,{style:{color:"#fff",overflow:"hidden",textOverflow:"ellipsis"}},e.data.title)))),r.a.createElement(He.a,{open:s,anchorEl:o,placement:"bottom-start",transition:!0,style:{zIndex:"11"}},(function(a){var t=a.TransitionProps;return r.a.createElement(Re.a,Object.assign({},t,{timeout:350}),r.a.createElement(Ye.a,null,r.a.createElement(qa,{data:e.data,click:u()})))}))))};function tt(){var e=Object(f.a)(["\n// width: 90vw;\n// overflow-x: scroll;\n// padding-top: 9rem;\nheight: calc(100vh - "," * 1.5 - "," * ",");\noverflow: auto;\nwidth: max-content;\n\nborder: 1px solid ",";\nscroll-behavior: smooth;\n-ms-overflow-style: none;  /* Internet Explorer 10+ */\nscrollbar-width: none;  /* Firefox */\n&::-webkit-scrollbar { \n  display: none;  /* Safari and Chrome */\n"]);return tt=function(){return e},e}var nt=g.a.div(tt(),"3rem","3rem",(function(e){return e.headerCount}),(function(e){return e.color})),rt=function(){var e=Object(d.c)(H),a=Object(d.c)(R),t=Object(d.c)(G),o=Object(d.c)(J),l="repeat(".concat(v(a.firstDay,a.lastDay)+1,", ").concat("3rem",")"),c=Object(p.a)(),i=Object.values(a.headers).filter((function(e){return e})).length,s=Object(n.useRef)(null);return r.a.createElement(r.a.Fragment,null,r.a.createElement(nt,{color:o?c.palette.divider:"rgba(0,0,0,0)",ref:s,headerCount:i},t.map((function(t,n){return r.a.createElement(ae,{key:n},r.a.createElement(te,{gtc:l,className:"maintask"},O(a.firstDay,a.lastDay,[t.startDate,t.duration]).map((function(a,n){return a===t.startDate?r.a.createElement(Qa,{key:n,data:t}):r.a.createElement(re,{color:o?c.palette.divider:"rgba(0,0,0,0)",className:a===e?"today":"else",id:"".concat(t.id,"-").concat(k(a)),key:n})}))),t.tasks.map((function(n,i){return r.a.createElement(te,{gtc:l,key:i,className:"task"},O(a.firstDay,a.lastDay,[n.startDate,n.duration]).map((function(a,l){return a===n.startDate?r.a.createElement(at,{mainTaskDates:{start:t.startDate,end:t.endDate},key:l,data:n}):r.a.createElement(re,{color:o?c.palette.divider:"rgba(0,0,0,0)",className:a===e?"today":"else",id:"".concat(n.id,"-").concat(k(a)),key:l})})))})))}))))},ot=t(241),lt=t(237),ct=t(171),it=t(88),st=t.n(it),dt=t(121),ut=t.n(dt),mt=t(220),ft=t(236),pt=Object(me.a)((function(e){return{root:{display:"flex"},formControl:{margin:e.spacing(3)}}}));function bt(){var e=pt(),a=Object(d.b)(),t=Object(d.c)(V),n=Object(d.c)(J),o=Object(d.c)(R).headers,l=function(e){switch(e.target.name){case"darkMode":a(x(e.target.checked));break;case"gridLines":a(S(e.target.checked));break;case"year":a(P({headers:Object(m.a)(Object(m.a)({},o),{year:e.target.checked})}));break;case"month":a(P({headers:Object(m.a)(Object(m.a)({},o),{month:e.target.checked})}));break;case"shortDay":a(P({headers:Object(m.a)(Object(m.a)({},o),{shortDay:e.target.checked})}))}};return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.root},r.a.createElement(da.a,{component:"fieldset",className:e.formControl},r.a.createElement(mt.a,{component:"legend"},"View"),r.a.createElement(Ca.a,null,r.a.createElement(wa.a,{control:r.a.createElement(ft.a,{checked:t,onChange:l,name:"darkMode"}),label:"Dark mode"}),r.a.createElement(wa.a,{control:r.a.createElement(ft.a,{checked:n,onChange:l,name:"gridLines"}),label:"Grid lines"})))),r.a.createElement("div",{className:e.root},r.a.createElement(da.a,{component:"fieldset",className:e.formControl},r.a.createElement(mt.a,{component:"legend"},"Calendar headers:"),r.a.createElement(Ca.a,null,r.a.createElement(wa.a,{control:r.a.createElement(Da.a,{checked:o.year,onChange:l,name:"year"}),label:"Years"}),r.a.createElement(wa.a,{control:r.a.createElement(Da.a,{checked:o.month,onChange:l,name:"month"}),label:"Months"}),r.a.createElement(wa.a,{control:r.a.createElement(Da.a,{checked:o.shortDay,onChange:l,name:"shortDay"}),label:"Day names"})))))}var gt=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ra.a,{style:{cursor:"move"},id:"draggable-dialog-".concat(e.title)},"Options"),r.a.createElement(oa.a,null,r.a.createElement(bt,null)),r.a.createElement(la.a,null,r.a.createElement(Qe.a,{title:"Close"},r.a.createElement(be.a,{onClick:e.handleClose,"aria-label":"close"},r.a.createElement(_e.a,null)))))},ht=t(246),Et=function(e){return r.a.createElement("div",null,r.a.createElement(ht.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:e.open,onClose:function(){return e.close(!0)},message:e.message,key:e.id,autoHideDuration:2e3}))},yt=Object(me.a)((function(e){return{margin2:{position:"fixed",bottom:e.spacing(7),right:e.spacing(7)},margin1:{position:"fixed",bottom:e.spacing(7),right:e.spacing(17)},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"},centralContainer:{display:"flex",alignItems:"center"},central:{width:"5rem",height:"5rem",margin:e.spacing(3)}}})),kt=function(){var e=yt(),a=Object(d.c)(G),t=Object(d.c)(Y),o=function(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){e.current=!1}),[]),e.current}(),l=Object(n.useState)(!1),c=Object(de.a)(l,2),i=c[0],s=c[1],u=Object(n.useState)(!1),m=Object(de.a)(u,2),f=m[0],p=m[1],g=Object(n.useState)(!1),h=Object(de.a)(g,2),E=h[0],y=h[1],k=Object(n.useState)(!1),v=Object(de.a)(k,2),O=v[0],j=v[1];Object(n.useEffect)((function(){0===a.length?C("backdrop"):w("backdrop")}),[a.length,"backdrop"]),Object(n.useEffect)((function(){o||C("snackbar")}),[t,"snackbar"]);var C=function(e){switch(e){case"options":s(!0);break;case"add":p(!0);break;case"backdrop":y(!0);break;case"snackbar":j(!0);break;default:console.warn("Broken dialog opening")}},w=function(e){switch(e){case"options":s(!1);break;case"add":p(!1);break;case"backdrop":y(!1);break;case"snackbar":j(!1);break;default:console.warn("Broken dialog closing")}};return r.a.createElement(ot.a,null,r.a.createElement(Qe.a,{title:"Options"},r.a.createElement(lt.a,{className:e.margin1,size:"small",color:"secondary","aria-label":"options",onClick:function(){return C("options")}},r.a.createElement(ut.a,null))),r.a.createElement(Qe.a,{title:"Add task"},r.a.createElement(lt.a,{className:e.margin2,color:"primary","aria-label":"add",onClick:function(){return C("add")}},r.a.createElement(st.a,null))),r.a.createElement(Wa,{open:i,name:"options",handleClose:function(){return w("options")}},r.a.createElement(gt,{name:"options",handleClose:function(){return w("options")}})),r.a.createElement(Wa,{open:f,name:"add"},r.a.createElement(Pa,{name:"add",handleClose:function(){return w("add")}})),r.a.createElement(ct.a,{className:e.backdrop,open:E},r.a.createElement(ot.a,{className:e.centralContainer},r.a.createElement(b.a,{variant:"h3"},"Add first task"),r.a.createElement(lt.a,{className:e.central,color:"primary","aria-label":"add",onClick:function(){return C("add")}},r.a.createElement(st.a,{style:{width:"2.5rem",height:"2.5rem"}})))),r.a.createElement(Et,{message:t,open:O,close:function(){return w("snackbar")},id:"".concat(Date.parse(new Date),"-snackbar")}))},vt=function(){return Object(n.useEffect)((function(){document.getElementsByClassName("today")[0].scrollIntoView({behavior:"smooth",alignTo:!1,inline:"center"})}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Ge,null,r.a.createElement(ie,null),r.a.createElement(rt,null)),r.a.createElement(kt,null))};function Ot(){var e=u(),a=r.a.useState(!0),t=Object(de.a)(a,2),o=t[0],l=t[1],c=Object(d.b)();Object(n.useEffect)((function(){e&&l(!1)}),[e]);var i=function(e){e&&(!function(e){try{var a=JSON.stringify(e);localStorage.setItem("consent",a)}catch(t){console.warn("Save to localStorage failed")}}(e),c(z("LocalStorage enabled"))),l(!1)};return r.a.createElement("div",null,r.a.createElement(za.a,{open:o,onClose:i},r.a.createElement(ra.a,null,"Do you want to enable localStorage?"),r.a.createElement(oa.a,null,r.a.createElement(La.a,null,"localStorage is a type of web storage that allows JavaScript sites and apps to store and access data right in the browser with no expiration date. This means the data stored in the browser will persist even after the browser window has been closed. If you do not want this page to save data on your computer, press decline.")),r.a.createElement(la.a,null,r.a.createElement(ca.a,{variant:"contained",onClick:function(){return i(!1)},color:"secondary"},"Decline"),r.a.createElement(ca.a,{variant:"contained",onClick:function(){return i(!0)},color:"primary",autoFocus:!0},"Agree"))))}var jt=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ot,null),r.a.createElement(vt,null))},Ct=t(123);var wt=function(){var e=Object(d.c)(V),a=Object(d.b)(),t=Object(c.a)("(prefers-color-scheme: dark)"),o=function(e,a){return Object(n.useMemo)((function(){return Object(Ct.a)({palette:{type:e?"dark":"light",primary:{main:a},secondary:{main:"#2962ff"},tonalOffset:.2}})}),[e,a])}(e,"#e91e63"),l=u(),m=E(),f=Object(d.c)(H);return Object(n.useEffect)((function(){"undefined"===typeof l&&a(x(t))}),[t,a,l]),Object(n.useEffect)((function(){m!==f&&a(B(m))}),[]),r.a.createElement(i.a,{theme:o},r.a.createElement(s.a,null),r.a.createElement(jt,null))},Dt=function(){try{var e=localStorage.getItem("chartData");if(null===e)return;return JSON.parse(e)}catch(a){return}}(),xt=Object(C.a)({reducer:{tasks:K},preloadedState:{tasks:Dt}});xt.subscribe((function(){!0===u()&&function(e){try{var a=JSON.stringify(e);localStorage.setItem("chartData",a)}catch(t){console.warn("Save to localStorage failed")}}(xt.getState().tasks)}));var St=xt;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,{store:St},r.a.createElement(s.a,null),r.a.createElement(wt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[149,1,2]]]);
//# sourceMappingURL=main.495a3a65.chunk.js.map