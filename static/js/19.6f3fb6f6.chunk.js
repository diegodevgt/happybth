(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[19],{1064:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(708),n=c(711),i=c.n(n),o=c(712),r=c(702),l=c(66),d=c(703),p=c(713),m=c(188),j=c(706),u=c.n(j),h=c(28),b=c(14);var g=function(e){var t=Object(h.g)(),c=Object(s.useState)(""),a=Object(r.a)(c,2),n=a[0],j=a[1],g=Object(m.useToasts)().addToast;Object(s.useEffect)((function(){j("")}),[]);var O=function(){var e=Object(o.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.trim(),e.next=3,x(c);case 3:e.sent&&c.length>0?(g("Guia Encontrada",{appearance:"info",autoDismiss:!0,autoDismissTimeout:3e3}),t.push({pathname:"/tracking/".concat(c),state:{id:c}}),window.location.reload()):g("Guia no valida",{appearance:"error",autoDismiss:!0,autoDismissTimeout:3e3});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(o.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={},e.next=3,u.a.get("https://ws.conectaguate.com/api/v1/site/pedidio/guia/".concat(t),c).then((function(e){return e.data.existe}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(l.O,{className:"tracking-slider",children:Object(b.jsx)(l.j,{lg:"12",className:"col-slider",children:Object(b.jsx)(l.f,{className:"tracking-slider-card",children:Object(b.jsx)(l.G,{className:"border tracking-slider-background",children:Object(b.jsx)(l.l,{className:"tracking-slider-container",children:Object(b.jsxs)(l.O,{className:"align-items-end row-tracking",children:[Object(b.jsx)(l.j,{lg:"4",className:"align-self-end",children:Object(b.jsxs)("h1",{className:"display-3 title",children:["\xbfD\xf3nde est\xe1 ",Object(b.jsx)("br",{}),"mi paquete?"]})}),Object(b.jsx)(l.j,{lg:"8",className:"align-self-end search-input",children:Object(b.jsxs)(l.C,{className:"mb-1 input-tracker",children:[Object(b.jsx)(l.B,{value:n,name:"guia",type:"text",placeholder:"",style:{background:"white",border:"0px",fontSize:"1.5rem"},onChange:function(e){var t=e.target,c=(t.name,t.value);j(c)}}),Object(b.jsx)(l.D,{onClick:function(){O()},style:{cursor:"pointer"},children:Object(b.jsx)(l.F,{children:Object(b.jsx)(d.a,{icon:p.a,style:{marginRight:".3rem"},size:"2x"})})})]})})]})})})})})})})},O=c(709),x=(c(134),c(191),c(192),c(193),c(194),c(195),c(196),c(197),c(135),c(198),c(199),c(85),c(200),c(201),c(202),c(203),c(204),c(205),c(206),c(207),c(208),c(209),c(210),c(211),c(136),c(109),c(84)),f=c(59),v=c(710),_=c(779);c(780);var k=function(e){return Object(b.jsxs)(l.O,{className:"p-2",children:[Object(b.jsx)(l.j,{children:Object(b.jsxs)(l.O,{className:"ml-4",children:[Object(b.jsxs)("h6",{className:"key-info",children:[e.info_keys[e.left_data[0]],": "]})," ",Object(b.jsx)("h6",{className:"value-info",children:e.data[e.left_data[0]]})]})}),Object(b.jsx)(l.j,{children:Object(b.jsxs)(l.O,{className:"ml-4",children:[Object(b.jsxs)("h6",{className:"key-info",children:[e.info_keys[e.right_data[0]],": "]})," ",Object(b.jsx)("h6",{className:"value-info",children:e.data[e.right_data[0]]})]})})]})},N=function(e){return Object(b.jsx)(l.O,{className:"p-2",children:Object(b.jsx)(l.j,{children:Object(b.jsxs)(l.O,{className:"ml-4",children:[Object(b.jsxs)("h6",{className:"key-info",children:[e.info_keys[e.data_key],": "]})," ",Object(b.jsx)("h6",{className:"value-info",children:e.data[e.data_key]})]})})})},y=function(e){var t=e.data,c={textAlign:"center",padding:"10px 0",fontSize:"30px"},s={duration:500,slidesToShow:t.length<3?t.length:3,slidesToScroll:1,autoplay:!1,indicators:!0,responsive:[{breakpoint:1200,settings:{slidesToShow:t.length<3?t.length:3,slidesToScroll:1}},{breakpoint:820,settings:{slidesToShow:t.length<3?t.length:2,slidesToScroll:1}},{breakpoint:0,settings:{slidesToShow:1,slidesToScroll:1}}]},a=function(e){var t=window.open(e,"_blank","noopener,noreferrer");t&&(t.opener=null)};return Object(b.jsx)("div",{children:Object(b.jsx)("div",{children:Object(b.jsx)(_.Slide,Object(x.a)(Object(x.a)({},s),{},{children:t.map((function(e,t){console.log(e);var s="https://ws.conectaguate.com/"+e.img;return Object(b.jsx)("div",{style:c,children:Object(b.jsx)(l.f,{style:{backgroundImage:'url("'.concat(s,'")')},className:"cross-selling-image",onClick:a(e.link)},"data_slide_".concat(t))},"div_carrousel_".concat(t))}))}))})})},w=function(e){Object(h.j)();var t=Object(h.i)().id,c=Object(s.useState)(null),a=Object(r.a)(c,2),n=a[0],i=a[1],o=Object(s.useState)(null),d=Object(r.a)(o,2),p=d[0],j=d[1],g=Object(s.useState)({}),O=Object(r.a)(g,2),_=(O[0],O[1]),w=Object(s.useState)(null),S=Object(r.a)(w,2),C=S[0],T=S[1],D=Object(s.useState)(null),P=Object(r.a)(D,2),A=P[0],E=P[1],z=Object(s.useState)(null),J=Object(r.a)(z,2),F=J[0],I=J[1],L=Object(s.useState)([]),R=Object(r.a)(L,2),q=R[0],B=R[1],G=Object(m.useToasts)().addToast,M=Object(h.g)(),H=function(e){var t=new Date(e),c=t.getFullYear(),s=t.getMonth()+1,a=t.getDate();return a<10&&(a="0"+a),s<10&&(s="0"+s),t=a+"-"+s+"-"+c};Object(s.useEffect)((function(){var e=v.reactLocalStorage.getObject("user"),t="";"undefined"===e||void 0===e||null===e||0===Object.keys(e).length?(v.reactLocalStorage.remove("user"),M.push("/login")):t="Bearer ".concat(e.token),u()({method:"get",url:"https://ws.conectaguate.com/api/v1/site/cross",headers:{Authorization:t,"Content-Type":"application/json"}}).then((function(e){console.log(e);var t=e.data.Data,c=[];t.forEach((function(e){var t={};null!==e.img&&(t={id:e.id,img:e.img,link:e.link,title:e.link},c.push(t))})),B(c),console.log(c)}))}),[]),Object(s.useEffect)((function(){var e=v.reactLocalStorage.getObject("user");if("undefined"===e||void 0===e||null===e||0===Object.keys(e).length)return v.reactLocalStorage.remove("user"),_({}),M.push("/login"),!1;var t="https://ws.conectaguate.com/api",c=new Promise((function(c,s){return u()({method:"get",url:t+"/v1/site/transportes",headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){return c({key:"transportes",data:e.data.Data},"transportes")}))})),s=new Promise((function(c,s){return u()({method:"get",url:t+"/v1/site/estatus",headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){return c({key:"estatus",data:e.data.Data},"estatus")}))})),a=new Promise((function(c,s){return u()({method:"get",url:t+"/v1/site/tipopago",headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){return c({key:"tipos_de_pago",data:e.data.Data},"tipos_de_pago")}))}));Promise.all([c,s,a]).then((function(e){e.forEach((function(e){var t={};switch(e.key){case"transportes":e.data.forEach((function(e){t[e.id]=e})),T(t);break;case"estatus":e.data.forEach((function(e){t[e.id]=e})),E(t);break;case"tipos_de_pago":e.data.forEach((function(e){t[e.id]=e})),I(t)}})),console.log(e)}))}),[]),Object(s.useEffect)((function(){if(null!==C&&null!==A&&null!==F){u.a.get("https://ws.conectaguate.com/api/v1/site/pedidio/guia/".concat(t),{}).then((function(e){var t=e.data.Data,c={};if(null===e.data.Data.Pedido)return G("Guia no valida",{appearance:"error",autoDismiss:!0,autoDismissTimeout:3e3}),M.push({pathname:"/"}),!1;var s=t.Pedido;t.Pedido.estado_pedido=A[t.Pedido.status].nombre,console.log(t.Pedido.estado_pedido),i(Object(x.a)(Object(x.a)({},s),{},{created_at:H(s.created_at),updated_at:H(s.updated_at),tipo_pago:F[s.tipo_pago].nombre,nombre_tienda:t.Empresa?t.Empresa:""})),"Completada"===t.Pedido.estado_pedido?(c.step1="stepper-item completed",c.step2="stepper-item completed",c.step3="stepper-item completed",c.step4="stepper-item completed",c.step1_img="completed",c.step2_img="completed",c.step3_img="completed",c.step4_img="completed"):"Transito"===t.Pedido.estado_pedido?(c.step1="stepper-item completed",c.step2="stepper-item completed",c.step3="stepper-item active",c.step4="stepper-item ",c.step1_img="completed",c.step2_img="completed",c.step3_img="active",c.step4_img="completed-hold"):"Almacen"===t.Pedido.estado_pedido?(c.step1="stepper-item completed",c.step2="stepper-item active",c.step3="stepper-item ",c.step4="stepper-item ",c.step1_img="completed",c.step2_img="active",c.step3_img="completed-hold",c.step4_img="completed-hold"):"Creado"===t.Pedido.estado_pedido||"Recibido"===t.Pedido.estado_pedido?(c.step1="stepper-item active",c.step2="stepper-item ",c.step3="stepper-item ",c.step4="stepper-item ",c.step1_img="active",c.step2_img="completed-hold",c.step3_img="completed-hold",c.step4_img="completed-hold"):"Devolucion"===t.Pedido.estado_pedido?(c.step1="stepper-item completed",c.step2="stepper-item completed",c.step3="stepper-item active",c.step4="stepper-item ",c.step1_img="completed",c.step2_img="completed",c.step3_img="active",c.step4_img="completed-hold"):"Liquidado"===t.Pedido.estado_pedido?(c.step1="stepper-item completed",c.step2="stepper-item completed",c.step3="stepper-item completed",c.step4="stepper-item completed",c.step1_img="completed",c.step2_img="completed",c.step3_img="completed",c.step4_img="completed"):"Cancelado"===t.Pedido.estado_pedido&&(c.step1="stepper-item completed",c.step2="stepper-item completed",c.step3="stepper-item completed",c.step4="stepper-item ",c.step1_img="completed",c.step2_img="completed",c.step3_img="completed",c.step4_img="completed-hold"),j(Object(x.a)({},c)),console.log("data info",t)}),(function(e){e.response&&console.log(e.response)}))}}),[C,A,F]);var K={created_at:"Fecha",updated_at:"Actualizaci\xf3n",id:"Orden",guia:"Gu\xeda",estado_pedido:"Estado",nombre_destino:"Destinatario",nombre_tienda:"Tienda",telefono_destino:"Telefono destino",tipo_pago:"Pago",municipio_destino:"Destino"},Q={direccion_destino:"Direccion de entrega",comentarios:"Comentarios"};return Object(s.useEffect)((function(){console.log(p)}),[p]),n&&p?Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(l.l,{className:"tracking-info mt-5 mb-5",children:[Object(b.jsx)(l.O,{className:"justify-content-md-center mb-3",children:Object(b.jsx)(l.j,{className:"col-md-auto",children:Object(b.jsx)("h1",{className:"title",children:"Tracking"})})}),Object(b.jsx)(l.O,{className:"mb-3",children:Object(b.jsx)(l.j,{sm:"12",children:Object(b.jsxs)("div",{className:"stepper-wrapper",children:[Object(b.jsxs)("div",{className:p.step1,children:[Object(b.jsx)("div",{className:"step-counter",children:Object(b.jsx)(l.A,{src:"img/icons/tracking/icon-1-".concat(p.step1_img,".svg"),fluid:!0,style:{height:"completed-hold"!==p.step1_img?"120px":"80px"}})}),Object(b.jsx)("div",{className:"step-name",children:"Recibido"})]}),Object(b.jsxs)("div",{className:p.step2,children:[Object(b.jsx)("div",{className:"step-counter",children:Object(b.jsx)(l.A,{src:"img/icons/tracking/icon-2-".concat(p.step2_img,".svg"),fluid:!0,style:{height:"completed-hold"!==p.step2_img?"120px":"80px"}})}),Object(b.jsx)("div",{className:"step-name",children:"Recolectado"})]}),Object(b.jsxs)("div",{className:p.step3,children:[Object(b.jsx)("div",{className:"step-counter",children:Object(b.jsx)(l.A,{src:"img/icons/tracking/icon-3-".concat(p.step3_img,".svg"),fluid:!0,style:{height:"completed-hold"!==p.step3_img?"120px":"80px"}})}),Object(b.jsx)("div",{className:"step-name",children:"En Transito"})]}),Object(b.jsxs)("div",{className:p.step4,children:[Object(b.jsx)("div",{className:"step-counter",children:Object(b.jsx)(l.A,{src:"img/icons/tracking/icon-4-".concat(p.step4_img,".svg"),fluid:!0,style:{height:"completed-hold"!==p.step4_img?"110px":"80px"}})}),Object(b.jsx)("div",{className:"step-name",children:"Entregado"})]})]})})}),Object(b.jsx)(l.O,{className:"justify-content-md-center mb-3",style:{display:"cancelado"===n.estado_pedido||"devolucion"===n.estado_pedido?"flex":"none"},children:Object(b.jsx)(l.j,{sm:"12",lg:"10",children:Object(b.jsxs)(l.a,{className:"tracking-info-alert",color:"warning",children:[Object(b.jsx)(f.a,{name:"cil-warning",style:{marginRight:"1rem"}}),"Retornado al almacen"]})})}),Object(b.jsx)(l.O,{className:"justify-content-md-center mb-3",children:Object(b.jsx)(l.j,{sm:"12",lg:"10",children:Object(b.jsxs)(l.f,{className:"tracking-card",children:[Object.entries(K).map((function(e,t){var c=Object(r.a)(e,2),s=(c[0],c[1],Object.entries(K));if(!(t%2)&&void 0!==s[t+1])return Object(b.jsx)(k,{left_data:s[t],right_data:s[t+1],info_keys:K,data:n},"".concat(t,"-row"))})),Object.entries(Q).map((function(e,t){var c=Object(r.a)(e,2),s=c[0];c[1];return Object(b.jsx)(N,{data_key:s,info_keys:Q,data:n},"".concat(t,"-full-row"))})),Object(b.jsx)("br",{})]})})}),Object(b.jsx)(l.O,{className:"justify-content-md-center mb-3",children:Object(b.jsx)(l.j,{sm:"12",lg:"10",children:Object(b.jsxs)(l.O,{children:[Object(b.jsx)(l.j,{sm:"10",lg:"10",children:Object(b.jsx)("p",{style:{textAlign:"right"},children:"Si necesitas m\xe1s infomacion sobre tu paquete"})}),Object(b.jsx)(l.j,{children:Object(b.jsxs)(l.e,{href:"https://api.whatsapp.com/send?phone=50244793488&text=Hola%20me%20gustar%C3%ADa%20saber%20en%20donde%20esta%20mi%20paquete,%20esta%20es%20la%20clave%20del%20pedido:%20".concat(t),style:{backgroundColor:"#94be00"},className:"btn-conecta-wa btn-brand mr-1 mb-1",target:"_blank",children:[Object(b.jsx)(l.A,{src:"img/whatsapp.png",fluid:!0,style:{height:"20px"}}),Object(b.jsx)("span",{className:"mfs-2",style:{color:"white"},children:"Click Aqui"})]})})]})})}),Object(b.jsx)(l.O,{className:"justify-content-md-center mb-4",children:Object(b.jsx)(l.j,{className:"col-md-auto",children:Object(b.jsx)("h4",{className:"title-related-products",children:"Tambien te puede interesar"})})}),q.length>0?Object(b.jsx)(l.O,{children:Object(b.jsx)(l.j,{style:{height:"55vh"},children:Object(b.jsx)(y,{data:q})})}):null]})}):null};t.default=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(a.a,{}),Object(b.jsx)(g,{}),Object(b.jsx)(w,{}),Object(b.jsx)(O.a,{})]})}},708:function(e,t,c){"use strict";var s=c(702),a=c(1),n=c(28),i=c(66),o=c(703),r=c(713),l=(c(59),c(14));t.a=function(e){var t=Object(a.useState)(!1),c=Object(s.a)(t,2),d=c[0],p=c[1],m=Object(n.g)();return Object(l.jsx)("div",{children:Object(l.jsxs)(i.K,{expandable:"sm",className:"home-header",children:[Object(l.jsx)(i.ab,{style:{backgroundColor:"#153b75"},inNavbar:!0,onClick:function(){return p(!d)}}),Object(l.jsx)(i.L,{onClick:function(){m.push("/")},children:Object(l.jsx)(i.A,{src:"img/logo_conecta.png",fluid:!0,className:"home-header-logo"})}),Object(l.jsxs)(i.k,{show:d,navbar:!0,children:[Object(l.jsx)(i.M,{}),Object(l.jsxs)(i.M,{className:"ml-auto home-header-options",children:[Object(l.jsx)(i.J,{className:"home-header-options-item",to:"/",children:"Inicio"}),Object(l.jsx)(i.J,{className:"home-header-options-item",to:"/comercio",children:"Comercio"}),Object(l.jsx)(i.J,{className:"home-header-options-item",to:"/planes",children:"Planes"}),Object(l.jsx)(i.J,{className:"home-header-options-cta",to:"/login",children:"Hacer un env\xedo"}),Object(l.jsxs)(i.J,{className:"home-header-options-account",to:"/register",children:[Object(l.jsx)(o.a,{icon:r.b,style:{marginRight:".3rem"},size:"lg"}),"Cuenta"]})]})]})]})})}},709:function(e,t,c){"use strict";c(1);var s=c(66),a=(c(703),c(59),c(14));var n=function(e){var t=!!e.external,c=!!e.disabled;return Object(a.jsx)(s.O,{children:function(n){var i;return"link"===n?i=e.external?Object(a.jsx)(s.I,{className:"link-item",href:"".concat(e.link),target:t?"_blank":"",disabled:!!c,children:e.name}):Object(a.jsx)(s.I,{className:"link-item",to:"".concat(e.link),disabled:!!c,children:e.name}):"tel"===n?i=Object(a.jsx)(s.I,{className:"link-item",onClick:function(){window.open("tel:23069030")},children:e.name}):"mail"===n&&(i=Object(a.jsx)(s.I,{className:"link-item",onClick:function(){window.open("mailto:".concat(e.name))},children:e.name})),i}(e.type)})};t.a=function(e){return Object(a.jsx)(s.t,{children:Object(a.jsx)(s.l,{className:"footer-container",children:Object(a.jsxs)(s.O,{children:[Object(a.jsx)(s.j,{lg:"8",children:Object(a.jsxs)(s.O,{children:[Object(a.jsxs)(s.j,{lg:"4",children:[Object(a.jsx)(n,{name:"FAQs",type:"link",link:"/faqs"}),Object(a.jsx)(n,{name:"Cobertura",type:"link",link:"/cobertura"}),Object(a.jsx)(n,{name:"Nosotros",type:"link",link:"/nosotros"})]}),Object(a.jsxs)(s.j,{lg:"4",children:[Object(a.jsx)(n,{name:"Bolsa de empleo",type:"link",link:"/bolsa-de-empleo"}),Object(a.jsx)(n,{name:"Comercios",type:"link",link:"/comercios"}),Object(a.jsx)(n,{name:"Contacto",type:"link",link:"/contacto"})]}),Object(a.jsxs)(s.j,{lg:"4",children:[Object(a.jsx)(n,{name:"15 ave 'A' 21-13 Zona 13",type:"link",external:!0,link:"https://www.google.com/maps/place/Conecta/@14.6104537,-90.5005334,15z/data=!4m5!3m4!1s0x0:0x4c595030980a1a89!8m2!3d14.6104537!4d-90.5005334"}),Object(a.jsx)(n,{name:"(502) 2306-9030",type:"tel",disabled:!0,link:""}),Object(a.jsx)(n,{name:"info@conectaguate.com",type:"mail",disabled:!0,link:""})]})]})}),Object(a.jsx)(s.j,{lg:"4",children:Object(a.jsx)(s.O,{children:Object(a.jsxs)(s.j,{lg:"12",className:"col-social-icons",children:[Object(a.jsx)(s.A,{className:"social-icons",src:"/img/icons/facebook.svg",onClick:function(){window.open("https://www.facebook.com/ConectaGuateOficial/","_blank").focus()}}),Object(a.jsx)(s.A,{className:"social-icons",src:"/img/icons/instagram.svg",onClick:function(){window.open("https://www.instagram.com/conectagt_/","_blank").focus()}})]})})})]})})})}},710:function(e,t){t.reactLocalStorage={set:function(e,t){return localStorage[e]=t,localStorage[e]},get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,c=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=localStorage[e]||t;if(!c&&!s)throw e+" not found in localStorage";return s},setObject:function(e,t){return localStorage[e]=JSON.stringify(t),localStorage[e]},getObject:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];value=this.get(e,JSON.stringify(t),c);try{return JSON.parse(value)}catch(s){if(!c)throw"Error in parsing value"}},clear:function(){return localStorage.clear()},remove:function(e){return localStorage.removeItem(e)}}},711:function(e,t,c){e.exports=c(424)},712:function(e,t,c){"use strict";function s(e,t,c,s,a,n,i){try{var o=e[n](i),r=o.value}catch(l){return void c(l)}o.done?t(r):Promise.resolve(r).then(s,a)}function a(e){return function(){var t=this,c=arguments;return new Promise((function(a,n){var i=e.apply(t,c);function o(e){s(i,a,n,o,r,"next",e)}function r(e){s(i,a,n,o,r,"throw",e)}o(void 0)}))}}c.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=19.6f3fb6f6.chunk.js.map