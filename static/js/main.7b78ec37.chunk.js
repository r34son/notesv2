(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{145:function(e,t,a){e.exports=a(232)},150:function(e,t,a){},16:function(e,t){e.exports={protocol:"https",api_url:"notes81.herokuapp.com/api",port:"server port"}},232:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),l=(a(150),a(9)),i=a(32),s=a(38),u=a(134),m=a(305),f=a(314),p=a(307),d=a(306),g=a(267),h=a(308),b=a(309),E=a(277),O=a(275),j=a(22),v=a.n(j),y=(a(61),a(261)),w=a(264),S=a(266),x=a(138),k=a(270),N=a(268),D=a(269),C=Object(y.a)((function(e){return{root:{flexGrow:1},marginRight:{marginRight:e.spacing(1)},title:{flexGrow:1,textDecoration:"none",color:"white"}}})),T=function(e){var t=e.history,a=C();return r.a.createElement(w.a,{position:"static",style:{height:"50px"}},r.a.createElement(S.a,{style:{minHeight:"100%"}},r.a.createElement(g.a,{edge:"start",className:a.marginRight,color:"inherit"},r.a.createElement(N.a,null)),r.a.createElement(x.a,{variant:"h6",className:a.title,component:i.b,to:"/"},"Notes"),localStorage.getItem("authData")?r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{className:a.marginRight},JSON.parse(localStorage.getItem("authData")).user_name),r.a.createElement(g.a,{onClick:function(){window.confirm("\u0412\u044b\u0439\u0442\u0438 \u0438\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430?")&&(localStorage.removeItem("authData"),t.push("/login"))}},r.a.createElement(D.a,null))):r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{color:"inherit",component:i.b,to:"/login"},"Login"),r.a.createElement(k.a,{color:"inherit",component:i.b,to:"/signup"},"Register"))))},I=a(136),_=a(82),F=a(271),z=a(315),H=a(272),P=a(273),J=a(274),L=a(67),B=a.n(L);function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var A=Object(y.a)((function(e){return{container:Object(_.a)({padding:0,marginBottom:10},e.breakpoints.down("sm"),{display:"flex",justifyContent:"center"}),chip:{margin:10}}})),q=function(e){var t=e.notes,a=e.setSortedNotes,o=Object(n.useState)({time:"off",favorite:"off"}),c=Object(l.a)(o,2),i=c[0],s=c[1],u=A(),m=function(e){return e},f={time:{off:m,asc:function(e){return e.sort((function(e,t){return new Date(e.updated_at)-new Date(t.updated_at)}))},desc:function(e){return e.sort((function(e,t){return new Date(t.updated_at)-new Date(e.updated_at)}))}},favorite:{off:function(e){return e},on:function(e){return e.filter((function(e){return e.is_favorite}))}}},p=Object.entries(i).map((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];return f[a][n]})),d=B.a.compose.apply(B.a,[a].concat(Object(I.a)(p)));Object(n.useEffect)((function(){B.a.isEmpty(t)?a(t):d(t.slice())}),[t,i]);var g=function(e){return function(){var t=Object.keys(f[e]),a=(t.indexOf(i[e])+1)%t.length;s(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(Object(a),!0).forEach((function(t){Object(_.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},i,Object(_.a)({},e,t[a])))}};return B.a.isEmpty(t)?null:r.a.createElement(F.a,{maxWidth:!1,className:u.container},r.a.createElement(z.a,{className:u.chip,icon:"off"===i.time?null:"asc"===i.time?r.a.createElement(H.a,null):r.a.createElement(P.a,null),deleteIcon:r.a.createElement(J.a,null),label:"\u041f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438",onClick:g("time"),onDelete:"off"===i.time?null:m}),r.a.createElement(z.a,{className:u.chip,label:"\u0422\u043e\u043b\u044c\u043a\u043e \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435",onClick:g("favorite"),color:"on"===i.favorite?"primary":"default"}))},W=a(276),G=a(278),K=a(312),M=a(280),U=a(310),V=a(285),Q=a(279),X=a(286),Y=a(287),Z=a(135),$=a(14),ee=a.n($),te=a(27),ae=a(16),ne=a.n(ae),re=function(e,t){e(!0),console.log("Sending Http request to get notes."),fetch("".concat(ne.a.protocol,"://").concat(ne.a.api_url,"/notes"),{method:"GET",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"Bearer ".concat(JSON.parse(localStorage.getItem("authData")).token)}}).then(function(){var e=Object(te.a)(ee.a.mark((function e(t){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=6;break}return e.t0=Error,e.next=4,t.json();case 4:throw e.t1=e.sent.message,new e.t0(e.t1);case 6:return e.abrupt("return",t.json());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(a){var n=a.data;e(!1),console.log("GetNotes data:",n),t(n)})).catch((function(t){console.log(t),e(!1)}))},oe=Object(y.a)({card:{display:"flex",flexDirection:"column",height:285,flex:1,position:"relative",overflow:"visible"},content:{position:"relative",flex:1},close:{position:"absolute",top:0,right:-30,padding:2},flex:{display:"flex",alignItems:"center",marginTop:8}}),ce=function(e){var t=e.setOpen,a=e.setData,o=e.setNotes,c=Object(n.useState)(!1),i=Object(l.a)(c,2),s=i[0],u=i[1],m=Object(n.useState)(""),f=Object(l.a)(m,2),p=f[0],d=f[1],h=Object(n.useState)(""),b=Object(l.a)(h,2),j=b[0],y=b[1],w=Object(n.useState)(!1),S=Object(l.a)(w,2),x=S[0],N=S[1],D=Object(n.useState)(null),C=Object(l.a)(D,2),T=C[0],I=C[1],_=Object(n.useState)(!1),F=Object(l.a)(_,2),z=F[0],H=F[1],P=oe();return r.a.createElement(O.a,{item:!0,xs:12,md:3},r.a.createElement(W.a,{className:P.card},s&&r.a.createElement(g.a,{className:P.close,onClick:function(){return u(!s)}},r.a.createElement(E.a,null)),r.a.createElement(G.a,{className:P.content},z?r.a.createElement(v.a,{type:"CradleLoader",className:"abs-center",color:"#64ba69",height:80,width:80}):s?r.a.createElement("form",{style:{width:"100%"},onSubmit:function(e){e.preventDefault(),function(e,t,a,n){t(!0),console.log("Sending Http request to add note."),fetch("".concat(ne.a.protocol,"://").concat(ne.a.api_url,"/notes"),{method:"POST",headers:{Authorization:"Bearer ".concat(JSON.parse(localStorage.getItem("authData")).token)},body:Object.keys(e).reduce((function(t,a){return t.append(a,e[a]),t}),new FormData)}).then(function(){var e=Object(te.a)(ee.a.mark((function e(t){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=6;break}return e.t0=Error,e.next=4,t.json();case 4:throw e.t1=e.sent.message,new e.t0(e.t1);case 6:return e.abrupt("return",t.json());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then(function(){var e=Object(te.a)(ee.a.mark((function e(r){var o,c;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=r.data,c=r.message,t(!1),console.log("AddNote data:",o),a({error:0,message:c}),re(t,n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),a({error:1,data:e.message}),t(!1)}))}({title:p,text:j,audio:T?new File([T.blob],"audio"):null},H,(function(e){t(!0),a(e)}),o),u(!1),N(!1),y(""),d(""),I(null)}},r.a.createElement(K.a,{fullWidth:!0},r.a.createElement(M.a,null,r.a.createElement(U.a,{variant:"outlined",label:"Title",value:p,onChange:function(e){return d(e.target.value)},margin:"dense",autoFocus:!0}),r.a.createElement(U.a,{fullWidth:!0,variant:"outlined",label:"Text",value:j,onChange:function(e){return y(e.target.value)},margin:"dense",multiline:!0,rows:4})),r.a.createElement("div",{className:P.flex},r.a.createElement(V.a,{color:x?"default":"primary",size:"small",onClick:function(){return N(!x)}},x?r.a.createElement(X.a,null):r.a.createElement(Y.a,null)),r.a.createElement(Z.a,{record:x,className:"sound-wave",onStop:function(e){console.log("onStop: ",new File([e.blob],"audio")),I(e)},onData:function(e){return console.log("onData: ",e)},strokeColor:"#000000",backgroundColor:"#707070"})),r.a.createElement(k.a,{type:"submit",variant:"contained",size:"medium",color:"primary",startIcon:r.a.createElement(Q.a,null),style:{marginTop:8,fontSize:12}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0443"))):r.a.createElement(g.a,{className:"abs-center",onClick:function(){return u(!0)}},r.a.createElement(Q.a,{style:{fontSize:75}})))))},le=a(288),ie=a(311),se=a(103),ue=a(313),me=a(289),fe=a(290),pe=a(291),de=a(292),ge=a(294),he=a(297),be=a(298),Ee=a(299),Oe=a(300),je=a(125),ve=a.n(je),ye=a(293),we=a(295),Se=a(296),xe=a(99),ke=a.n(xe),Ne=(a(184),Object(y.a)({card:{display:"flex",flexDirection:"column",height:285},content:{position:"relative",display:"flex",flexDirection:"column",flex:1},floatRight:{marginLeft:"auto !important"}})),De=function(e){var t=e.note,a=e.setOpen,o=e.setData,c=e.setNotes,i=e.share,s=Object(n.useState)(!1),u=Object(l.a)(s,2),m=u[0],f=u[1],p=Object(n.useState)(t.title||""),d=Object(l.a)(p,2),h=d[0],b=d[1],E=Object(n.useState)(t.text||""),j=Object(l.a)(E,2),y=j[0],w=j[1],S=Object(n.useState)(!1),k=Object(l.a)(S,2),N=k[0],D=k[1],C=Object(n.useState)(!1),T=Object(l.a)(C,2),I=T[0],_=T[1],F=Object(n.useRef)(),z=Object(n.useState)(null),H=Object(l.a)(z,2),P=H[0],J=H[1],L="".concat(window.location.href,"share/").concat(t.hash),B=Ne(),R=function(e){e.preventDefault(),function(e,t,a,n){t(!0),console.log("Sending Http request to edit note."),fetch("".concat(ne.a.protocol,"://").concat(ne.a.api_url,"/notes/").concat(e.id),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"Bearer ".concat(JSON.parse(localStorage.getItem("authData")).token)},body:JSON.stringify(e)}).then(function(){var e=Object(te.a)(ee.a.mark((function e(t){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=6;break}return e.t0=Error,e.next=4,t.json();case 4:throw e.t1=e.sent.message,new e.t0(e.t1);case 6:return e.abrupt("return",t.json());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){t(!1),console.log("EditNote data:",e),a(e),re(t,n)})).catch((function(e){console.log(e),t(!1)}))}({title:h,text:y,id:t.id},D,(function(e){a(!0),o(e)}),c),f(!1)};return r.a.createElement(O.a,{item:!0,xs:12,md:3},r.a.createElement(W.a,{className:B.card},r.a.createElement(G.a,{className:B.content},N?r.a.createElement(v.a,{type:"CradleLoader",color:"#64ba69",height:80,width:80,className:"abs-center"}):r.a.createElement("form",{style:{flex:1},onSubmit:R},r.a.createElement(K.a,{fullWidth:!0,className:"fullHeight"},r.a.createElement(O.a,{container:!0,justify:i?"space-between":"flex-end"},i&&r.a.createElement(x.a,{variant:"subtitle1",color:"textSecondary",paragraph:!0},"from ".concat(t.user_name)),r.a.createElement(x.a,{variant:"subtitle2",color:"textSecondary",paragraph:!0},ke()(t.updated_at).fromNow())),r.a.createElement(M.a,{className:"fullHeight"},r.a.createElement(U.a,{variant:"outlined",disabled:!m,label:"Title",value:h,onChange:function(e){return b(e.target.value)},onBlur:R,margin:"dense",autoFocus:!0}),r.a.createElement(U.a,{fullWidth:!0,variant:"outlined",disabled:!m,label:"Text",value:y,onChange:function(e){return w(e.target.value)},onBlur:R,margin:"dense",multiline:!0,rows:4}))))),r.a.createElement(le.a,null,t.audio&&r.a.createElement(r.a.Fragment,null,r.a.createElement("audio",{ref:F,src:t.audio,onEnded:function(){return _(!1)},allow:"autoplay"}),r.a.createElement(V.a,{size:"small",onClick:function(){I?(_(!1),F.current.pause()):(_(!0),F.current.play())},color:I?"default":"primary"},I?r.a.createElement(X.a,null):r.a.createElement(me.a,null))),!i&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{onClick:function(){return function(e,t,a,n){t(!0),console.log("Sending Http request to add to favorite notes."),fetch("".concat(ne.a.protocol,"://").concat(ne.a.api_url,"/notes/favorite/").concat(e),{method:"GET",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"Bearer ".concat(JSON.parse(localStorage.getItem("authData")).token)}}).then(function(){var e=Object(te.a)(ee.a.mark((function e(t){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=6;break}return e.t0=Error,e.next=4,t.json();case 4:throw e.t1=e.sent.message,new e.t0(e.t1);case 6:return e.abrupt("return",t.json());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){t(!1),console.log("AddToFavorite data:",e),a(e),re((function(){return null}),n)})).catch((function(e){console.log(e),t(!1)}))}(t.id,D,(function(e){a(!0),o(e)}),c)}},t.is_favorite?r.a.createElement(fe.a,null):r.a.createElement(pe.a,null)),r.a.createElement(g.a,{onClick:function(e){return J(e.currentTarget)}},r.a.createElement(de.a,null)),r.a.createElement(ie.a,{open:!!P,anchorEl:P,onClose:function(){return J(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(se.a,{className:"share-links"},r.a.createElement(ye.a,{url:L},r.a.createElement(ue.a,{title:"Telegram"},r.a.createElement(g.a,null,r.a.createElement(ge.a,null)))),r.a.createElement(we.a,{url:L},r.a.createElement(ue.a,{title:"VK"},r.a.createElement(g.a,null,r.a.createElement(ve.a,null)))),r.a.createElement(Se.a,{url:L},r.a.createElement(ue.a,{title:"Email"},r.a.createElement(g.a,null,r.a.createElement(he.a,null)))))),r.a.createElement("div",{className:B.floatRight},r.a.createElement(g.a,{onClick:function(e){f(!m),m&&R(e)}},m?r.a.createElement(be.a,null):r.a.createElement(Ee.a,null)),r.a.createElement(g.a,{color:"secondary",onClick:function(){!function(e,t,a,n){t(!0),console.log("Sending Http request to delete note."),fetch("".concat(ne.a.protocol,"://").concat(ne.a.api_url,"/notes/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"Bearer ".concat(JSON.parse(localStorage.getItem("authData")).token)}}).then(function(){var e=Object(te.a)(ee.a.mark((function e(t){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=6;break}return e.t0=Error,e.next=4,t.json();case 4:throw e.t1=e.sent.message,new e.t0(e.t1);case 6:return e.abrupt("return",t.json());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then(function(){var e=Object(te.a)(ee.a.mark((function e(r){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(!1),console.log("DeleteNote data:",r),a(r),re(t,n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),t(!1)}))}(t.id,D,(function(e){a(!0),o(e)}),c)}},r.a.createElement(Oe.a,null)))))))},Ce=function(e){var t=e.history,a=e.location,o=e.setOpen,c=e.setData,i=Object(n.useState)(!1),u=Object(l.a)(i,2),m=u[0],f=u[1],p=Object(n.useState)([]),d=Object(l.a)(p,2),g=d[0],h=d[1],b=Object(n.useState)([]),E=Object(l.a)(b,2),j=E[0],y=E[1];return Object(n.useEffect)((function(){localStorage.getItem("authData")&&re(f,(function(e){h(e),y(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{history:t}),localStorage.getItem("authData")?r.a.createElement("div",{style:{padding:30}},r.a.createElement(q,{notes:g,setSortedNotes:y}),r.a.createElement(O.a,{container:!0,spacing:1,className:m?"home-center":""},m?r.a.createElement(v.a,{type:"CradleLoader",color:"#64ba69",height:80,width:80}):j.map((function(e){return r.a.createElement(De,{key:e.id,note:e,setOpen:o,setData:c,setNotes:h})})).concat(r.a.createElement(ce,{key:"addnote",setOpen:o,setData:c,setNotes:h})))):r.a.createElement(s.a,{to:{pathname:"/login",state:{from:a}}}))},Te=a(233),Ie=a(301),_e=a(282),Fe=a(281),ze=a(302),He=a(303),Pe=a(304),Je=Object(y.a)((function(e){return{root:{display:"flex",flexWrap:"wrap"},marginb:{marginBottom:e.spacing(3)},label:{display:"flex",justifyContent:"center",fontSize:"18px"}}})),Le=function(e){var t=e.location,a=e.setOpen,o=e.setData,c=Object(n.useState)(""),i=Object(l.a)(c,2),u=i[0],m=i[1],f=Object(n.useState)(""),p=Object(l.a)(f,2),d=p[0],h=p[1],b=Object(n.useState)(!1),E=Object(l.a)(b,2),j=E[0],y=E[1],w=Object(n.useState)(!1),S=Object(l.a)(w,2),x=S[0],N=S[1],D=Je();return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement(O.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"calc(100vh - 50px)"}},x?r.a.createElement(v.a,{type:"CradleLoader",color:"#64ba69",height:80,width:80}):localStorage.getItem("authData")?r.a.createElement(s.a,{to:{pathname:t.state?t.state.from.pathname:"/",state:{from:t}}}):r.a.createElement(O.a,{item:!0},r.a.createElement(se.a,{style:{padding:"30px"},elevation:4},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e,t,a){t(!0),console.log("Sending Http request to login."),fetch("".concat(ne.a.protocol,"://").concat(ne.a.api_url,"/login"),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)}).then(function(){var e=Object(te.a)(ee.a.mark((function e(t){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=6;break}return e.t0=Error,e.next=4,t.json();case 4:throw e.t1=e.sent.message,new e.t0(e.t1);case 6:return e.abrupt("return",t.json());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){var n=e.data,r=e.message;t(!1),localStorage.setItem("authData",JSON.stringify(n)),console.log("Login data:",n),a({error:0,message:r})})).catch((function(e){var n=e.message;console.log(n),a({error:1,message:n}),t(!1)}))}({email:u,password:d},N,(function(e){a(!0),o(e)}))}},r.a.createElement(K.a,null,r.a.createElement(Te.a,{filled:!0,className:"".concat(D.marginb," ").concat(D.label)},"Login"),r.a.createElement(Ie.a,null),r.a.createElement(M.a,null,r.a.createElement(U.a,{label:"Email",value:u,onChange:function(e){return m(e.target.value)},margin:"normal",autoFocus:!0}),r.a.createElement(K.a,{className:D.marginb},r.a.createElement(_e.a,{htmlFor:"password"},"Password"),r.a.createElement(Fe.a,{id:"password",type:j?"text":"password",value:d,onChange:function(e){return h(e.target.value)},endAdornment:r.a.createElement(ze.a,{position:"end"},r.a.createElement(g.a,{"aria-label":"toggle password visibility",onClick:function(){return y(!j)},onMouseDown:function(e){return e.preventDefault()}},j?r.a.createElement(He.a,null):r.a.createElement(Pe.a,null)))}))),r.a.createElement(k.a,{type:"submit",variant:"contained",size:"medium",color:"primary"},"Login")))))))},Be=Object(y.a)((function(e){return{root:{display:"flex",flexWrap:"wrap"},marginb:{marginBottom:e.spacing(3)},label:{display:"flex",justifyContent:"center",fontSize:"18px"}}})),Re=function(e){e.location;var t=e.history,a=e.setOpen,o=e.setData,c=Object(n.useState)(""),i=Object(l.a)(c,2),s=i[0],u=i[1],m=Object(n.useState)(""),f=Object(l.a)(m,2),p=f[0],d=f[1],g=Object(n.useState)(""),h=Object(l.a)(g,2),b=h[0],E=h[1],j=Object(n.useState)(""),y=Object(l.a)(j,2),w=y[0],S=y[1],x=Object(n.useState)(!1),N=Object(l.a)(x,2),D=N[0],C=N[1],I=Be();return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement(O.a,{container:!0,spacing:0,direction:"column",className:"header-center"},D?r.a.createElement(v.a,{type:"CradleLoader",color:"#64ba69",height:80,width:80}):r.a.createElement(O.a,{item:!0},r.a.createElement(se.a,{style:{padding:"30px",width:300},elevation:4},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e,t,a){t(!0),console.log("Sending Http request to register."),fetch("".concat(ne.a.protocol,"://").concat(ne.a.api_url,"/register"),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)}).then(function(){var e=Object(te.a)(ee.a.mark((function e(t){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=6;break}return e.t0=Error,e.next=4,t.json();case 4:throw e.t1=e.sent.message,new e.t0(e.t1);case 6:return e.abrupt("return",t.json());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){var n=e.data,r=e.message;t(!1),console.log("Register data:",n),a({error:0,message:r})})).catch((function(e){console.log(e),a({error:1,data:e.message}),t(!1)}))}({email:s,login:p,password:b,password_confirm:w},C,(function(e){a(!0),o(e),e.error||t.push("/login")}))}},r.a.createElement(K.a,{fullWidth:!0},r.a.createElement(Te.a,{filled:!0,className:"".concat(I.marginb," ").concat(I.label)},"Register"),r.a.createElement(Ie.a,null),r.a.createElement(M.a,null,r.a.createElement(U.a,{label:"Email",value:s,onChange:function(e){return u(e.target.value)},autoFocus:!0}),r.a.createElement(U.a,{label:"Login",value:p,onChange:function(e){return d(e.target.value)}}),r.a.createElement(K.a,null,r.a.createElement(_e.a,{htmlFor:"password"},"Password"),r.a.createElement(Fe.a,{id:"password",type:"password",value:b,onChange:function(e){return E(e.target.value)}})),r.a.createElement(K.a,{className:I.marginb},r.a.createElement(_e.a,{htmlFor:"password"},"Confirm password"),r.a.createElement(Fe.a,{id:"password_confirm",type:"password",value:w,onChange:function(e){return S(e.target.value)}}))),r.a.createElement(k.a,{type:"submit",variant:"contained",size:"medium",color:"primary"},"Sign Up")))))))},Ae=a(133),qe=a.n(Ae),We=function(e){var t=e.location,a=window.location.hash.replace("#/share/",""),o=Object(n.useState)(!1),c=Object(l.a)(o,2),i=c[0],u=c[1],m=Object(n.useState)({}),f=Object(l.a)(m,2),p=f[0],d=f[1];return Object(n.useEffect)((function(){localStorage.getItem("authData")&&function(e,t,a){t(!0),console.log("Sending Http request to get note. Hash:",e),fetch("".concat(ne.a.protocol,"://").concat(ne.a.api_url,"/notes/share/").concat(e),{method:"GET",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:"Bearer ".concat(JSON.parse(localStorage.getItem("authData")).token)}}).then(function(){var e=Object(te.a)(ee.a.mark((function e(t){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=6;break}return e.t0=Error,e.next=4,t.json();case 4:throw e.t1=e.sent.message,new e.t0(e.t1);case 6:return e.abrupt("return",t.json());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){var n=e.data;t(!1),console.log("GetNote data:",n),a(n)})).catch((function(e){console.log(e),t(!1)}))}(a,u,d)}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement(O.a,{container:!0,className:"header-center"},localStorage.getItem("authData")?i?r.a.createElement(v.a,{type:"CradleLoader",color:"#64ba69",height:80,width:80}):qe.a.isEmpty(p)?r.a.createElement(se.a,{style:{padding:20}},r.a.createElement(x.a,{color:"secondary"},"\u0417\u0430\u043c\u0435\u0442\u043a\u0443 \u0443\u0434\u0430\u043b\u0438\u043b \u0435\u0435 \u0441\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u044c. \u0415\u0435 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u0435\u043d.")):r.a.createElement(De,{note:p,share:!0}):r.a.createElement(s.a,{to:{pathname:"/login",state:{from:t}}})))},Ge=Object(u.a)({palette:{type:"dark"}}),Ke=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)({error:null,message:null}),u=Object(l.a)(c,2),O=u[0],j=u[1];return r.a.createElement(m.a,{theme:Ge},r.a.createElement(i.a,null,r.a.createElement(s.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(Ce,Object.assign({},e,{setOpen:o,setData:j}))}}),r.a.createElement(s.b,{path:"/login",render:function(e){return r.a.createElement(Le,Object.assign({},e,{setOpen:o,setData:j}))}}),r.a.createElement(s.b,{path:"/signup",render:function(e){return r.a.createElement(Re,Object.assign({},e,{setOpen:o,setData:j}))}}),r.a.createElement(s.b,{path:"/share/:hash",render:function(e){return r.a.createElement(We,Object.assign({},e,{setOpen:o,setData:j}))}})),r.a.createElement(f.a,{style:{pointerEvents:a?"":"none"},open:a,onClose:function(){return o(!1)},TransitionComponent:function(e){return r.a.createElement(p.a,Object.assign({},e,{direction:"up"}))},autoHideDuration:4e3},r.a.createElement(d.a,{style:{backgroundColor:O.error?"#ef5350":"#66bb6a"},message:r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},O.error?r.a.createElement(h.a,{className:"mr20"}):r.a.createElement(b.a,{className:"mr20"}),O.message),action:r.a.createElement(g.a,{color:"inherit",onClick:function(){return o(!1)}},r.a.createElement(E.a,null))})))};c.a.render(r.a.createElement(Ke,null),document.getElementById("root"))}},[[145,1,2]]]);
//# sourceMappingURL=main.7b78ec37.chunk.js.map