(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{510:function(e,t,a){e.exports=a(905)},515:function(e,t,a){},780:function(e,t){},782:function(e,t){},905:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(41),c=a.n(l),s=(a(515),a(922)),i=a(921),m=a(775),o=a(418),u=a(419),E=a(482),d=a(420),f=a(483),h=a(18),b=a(67),g=a(910),y=a(59),p=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(E.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.handleClick=function(){a.setState({isOpen:!0})},a.handleDialogClose=function(){a.setState({isOpen:!1})},a.handleConfirm=function(){var e=a.props,t=e.basePath;(0,e.crudUpdateMany)(e.resource,e.selectedIds,{views:0},t),a.setState({isOpen:!0})},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(b.a,{label:"Reset Views",onClick:this.handleClick}),r.a.createElement(g.a,{isOpen:this.state.isOpen,title:"Update View Count",content:"Are you sure you want to reset the views for these items?",onConfirm:this.handleConfirm,onClose:this.handleDialogClose}))}}]),t}(n.Component),A=Object(h.b)(void 0,{crudUpdateMany:y.A})(p),v=a(926),w=a(911),P=a(927),O=a(913),j=a(923),I=a(69),x=a(914),k=a(925),S=a(915),T=a(929),M=a(916),B=a(928),C=a(924),U=a(917),D=a(918),H=a(932),N=function(e){return r.a.createElement(v.a,e,r.a.createElement(w.a,{label:"Search",source:"q",alwaysOn:!0}),r.a.createElement(P.a,{label:"user",source:"Id",reference:"users",allowEmpty:!0},r.a.createElement(O.a,{optionText:"name"})))},R=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(A,Object.assign({label:"Reset Views"},e)),r.a.createElement(m.a,e))},G=function(e){return r.a.createElement(j.a,Object.assign({},e,{bulkActionButtons:r.a.createElement(R,null),filters:r.a.createElement(N,null)}),r.a.createElement(I.a,{small:r.a.createElement(x.a,{primaryText:function(e){return e.title},secondaryText:function(e){return"".concat(e.views," views")},tertiaryText:function(e){return new Date(e.published_at).toLocaleDateString()}}),medium:r.a.createElement(k.a,null,r.a.createElement(S.a,{source:"id"}),r.a.createElement(T.a,{label:"Pengguna",source:"id",reference:"users"},r.a.createElement(S.a,{source:"name"})),r.a.createElement(S.a,{source:"title"}),r.a.createElement(S.a,{source:"body"}),r.a.createElement(M.a,null))}))},_=function(e){var t=e.record;return r.a.createElement("span",null,"Post ",t?'"'.concat(t.title,'"'):"")},L=function(e){return r.a.createElement(B.a,Object.assign({title:r.a.createElement(_,null)},e),r.a.createElement(C.a,null,r.a.createElement(U.a,{source:"id"}),r.a.createElement(P.a,{label:"User",source:"userId",reference:"users"},r.a.createElement(O.a,{optionText:"name"})),r.a.createElement(w.a,{source:"title"}),r.a.createElement(D.a,{source:"body"})))},q=function(e){return r.a.createElement(H.a,e,r.a.createElement(C.a,null,r.a.createElement(P.a,{label:"User",source:"userId",reference:"users"},r.a.createElement(O.a,{optionText:"name"})),r.a.createElement(w.a,{source:"title"}),r.a.createElement(D.a,{source:"body"})))},V=a(919),F=function(e){return r.a.createElement(v.a,e,r.a.createElement(w.a,{label:"Search",source:"q",alwaysOn:!0}),r.a.createElement(P.a,{label:"User",source:"userId",reference:"users",allowEmpty:!0},r.a.createElement(O.a,{optionText:"name"})))},J=function(e){return r.a.createElement(j.a,Object.assign({title:"All users"},e,{filters:r.a.createElement(F,null)}),r.a.createElement(I.a,{small:r.a.createElement(x.a,{primaryText:function(e){return e.title},secondaryText:function(e){return"".concat(e.views," views")},tertiaryText:function(e){return new Date(e.published_at).toLocaleDateString()}}),medium:r.a.createElement(k.a,null,r.a.createElement(S.a,{source:"id"}),r.a.createElement(S.a,{source:"Name"}),r.a.createElement(S.a,{source:"Bank Name"}),r.a.createElement(S.a,{source:"Address"}),r.a.createElement(S.a,{source:"No.HandPhone"}),r.a.createElement(V.a,{source:"Email"}))}))},K=function(e){return r.a.createElement(v.a,e,r.a.createElement(w.a,{label:"Search",source:"q",alwaysOn:!0}),r.a.createElement(P.a,{label:"User",source:"userId",reference:"users",allowEmpty:!0},r.a.createElement(O.a,{optionText:"name"})))},W=function(e){return r.a.createElement(j.a,Object.assign({title:"Check Transaction"},e,{filters:r.a.createElement(K,null)}),r.a.createElement(I.a,{small:r.a.createElement(x.a,{primaryText:function(e){return e.title},secondaryText:function(e){return"".concat(e.views," views")},tertiaryText:function(e){return new Date(e.published_at).toLocaleDateString()}}),medium:r.a.createElement(k.a,null,r.a.createElement(S.a,{source:"id"}),r.a.createElement(S.a,{source:"name"}),r.a.createElement(S.a,{source:"username"}),r.a.createElement(V.a,{source:"email"}))}))},Q=function(e){return r.a.createElement(j.a,Object.assign({title:"All Items"},e),r.a.createElement(k.a,null,r.a.createElement(S.a,{source:"id"}),r.a.createElement(S.a,{source:"name"}),r.a.createElement(S.a,{source:"username"}),r.a.createElement(V.a,{source:"email"})))},$=function(e){return r.a.createElement(j.a,Object.assign({title:"Schedule Pickup"},e),r.a.createElement(k.a,null,r.a.createElement(S.a,{source:"id"}),r.a.createElement(S.a,{source:"name"}),r.a.createElement(S.a,{source:"username"}),r.a.createElement(V.a,{source:"email"})))},z=function(e){return r.a.createElement(j.a,Object.assign({title:"My Account"},e),r.a.createElement(k.a,null,r.a.createElement(S.a,{source:"id"}),r.a.createElement(S.a,{source:"title"}),r.a.createElement(S.a,{source:"body"})))},X=a(40),Y=a.n(X),Z=a(64),ee=a.n(Z),te=a(34),ae=a.n(te),ne=a(75),re=a.n(ne),le={width:300,minHeight:300,margin:"0.5em",display:"inline-block",verticalAlign:"top"},ce=function(){return r.a.createElement("div",{style:{margin:"1em"}},r.a.createElement(Y.a,{style:le},r.a.createElement(re.a,{title:"Kaleng"}),r.a.createElement(ae.a,null,"INI GAMBAR SAMPAH"),r.a.createElement(ae.a,null,"sssss about\xa0"),r.a.createElement(ee.a,{style:{textAlign:"right"}})),r.a.createElement(Y.a,{style:le},r.a.createElement(re.a,{title:"Kardus"}),r.a.createElement(ae.a,null,"INI GAMBAR SAMPAH"),r.a.createElement(ae.a,null,"sssss about\xa0"),r.a.createElement(ee.a,{style:{textAlign:"right"}})),r.a.createElement(Y.a,{style:le},r.a.createElement(re.a,{title:"Botol AQua"}),r.a.createElement(ae.a,null,"INI GAMBAR SAMPAH"),r.a.createElement(ae.a,null,"sssss about\xa0"),r.a.createElement(ee.a,{style:{textAlign:"right"}})),r.a.createElement(Y.a,{style:le},r.a.createElement(re.a,{title:"lcnskjdcnasc"}),r.a.createElement(ae.a,null,"INI GAMBAR SAMPAH"),r.a.createElement(ae.a,null,"sssss about\xa0"),r.a.createElement(ee.a,{style:{textAlign:"right"}})),r.a.createElement(Y.a,{style:le},r.a.createElement(re.a,{title:"asdfnksjbc"}),r.a.createElement(ae.a,null,"INI GAMBAR SAMPAH"),r.a.createElement(ae.a,null,"sssss about\xa0"),r.a.createElement(ee.a,{style:{textAlign:"right"}})),r.a.createElement(Y.a,{style:le},r.a.createElement(re.a,{title:"asdfnksjbc"}),r.a.createElement(ae.a,null,"INI GAMBAR SAMPAH"),r.a.createElement(ae.a,null,"sssss about\xa0"),r.a.createElement(ee.a,{style:{textAlign:"right"}})))},se=function(e){return r.a.createElement(j.a,Object.assign({title:"Add/Update Pricings"},e),r.a.createElement(ce,null))},ie=function(e){return r.a.createElement(j.a,Object.assign({title:"Trash Purchase List"},e),r.a.createElement(k.a,null,r.a.createElement(S.a,{source:"id"}),r.a.createElement(S.a,{source:"name"}),r.a.createElement(S.a,{source:"username"}),r.a.createElement(V.a,{source:"email"})))},me=a(7),oe=a(237),ue=a.n(oe),Ee=a(124),de=a.n(Ee),fe=a(920),he={width:300,minHeight:300,margin:"0.5em",display:"inline-block",verticalAlign:"top"},be=function(e){var t=e.ids,a=e.data,n=e.basePath;return r.a.createElement("div",{style:{margin:"1em"}},t.map(function(e){return r.a.createElement(Y.a,{key:e,style:he},r.a.createElement(re.a,{title:r.a.createElement(S.a,{record:a[e],source:"author.name"}),subheader:r.a.createElement(fe.a,{record:a[e],source:"created_at"}),avatar:r.a.createElement(de.a,{icon:r.a.createElement(ue.a,null)})}),r.a.createElement(ae.a,null,r.a.createElement(S.a,{record:a[e],source:"body"})),r.a.createElement(ae.a,null,"about\xa0",r.a.createElement(T.a,{label:"Post",resource:"comments",record:a[e],source:"post_id",reference:"posts",basePath:n},r.a.createElement(S.a,{source:"title"}))),r.a.createElement(ee.a,{style:{textAlign:"right"}},r.a.createElement(M.a,{resource:"posts",basePath:n,record:a[e]})))}))};be.defaultProps={data:{},ids:[]};var ge=function(e){return r.a.createElement(j.a,Object.assign({title:"All comments"},e),r.a.createElement(be,null))},ye=a(456),pe=a.n(ye),Ae=function(){return r.a.createElement(Y.a,null,r.a.createElement(re.a,{title:"Selamat Datang di Tampah Bank"}),r.a.createElement(ae.a,null),r.a.createElement(ee.a,{style:{textAlign:"right"}}))},ve=a(398),we=function(e,t){if(e===ve.d){var a=t.username;return localStorage.setItem("username",a),Promise.resolve()}if(e===ve.e)return localStorage.removeItem("username"),Promise.resolve();if(e===ve.b){var n=t.status;return 401===n||403===n?(localStorage.removeItem("username"),Promise.reject()):Promise.resolve()}return e===ve.a?localStorage.getItem("username")?Promise.resolve():Promise.reject():Promise.reject("Unknown method")},Pe=a(455),Oe=a(476),je=a.n(Oe),Ie=a(477),xe=a.n(Ie),ke=a(478),Se=a.n(ke),Te=a(479),Me=a.n(Te),Be=a(480),Ce=a.n(Be),Ue=a(317),De=a.n(Ue),He=a(481),Ne=a.n(He),Re=Object(Pe.a)("https://my-json-server.typicode.com/dodinurkasih/jsonserver"),Ge=Object(me.createMuiTheme)({palette:{primary:pe.a,secondary:{main:"#00e5ff"}}}),_e=function(){return r.a.createElement(s.a,{title:!0,theme:Ge,dashboard:Ae,authProvider:we,dataProvider:Re},r.a.createElement(i.a,{name:"posts",list:G,edit:L,create:q,icon:je.a}),r.a.createElement(i.a,{name:"users",list:J,icon:xe.a}),r.a.createElement(i.a,{name:"transactions",list:W,icon:Se.a}),r.a.createElement(i.a,{name:"Items",list:Q,icon:Me.a}),r.a.createElement(i.a,{name:"schedules",list:$,icon:Ce.a}),r.a.createElement(i.a,{name:"MyAccount",list:z,icon:De.a}),r.a.createElement(i.a,{name:"Add/Update Pricing",list:se,icon:Ne.a}),r.a.createElement(i.a,{name:"Trash Purchase",list:ie,icon:De.a}),r.a.createElement(i.a,{name:"comment",list:ge,icon:ue.a}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(_e,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[510,2,1]]]);
//# sourceMappingURL=main.18828f4a.chunk.js.map