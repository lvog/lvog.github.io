"use strict";(self.webpackChunkcoffee_shop_react=self.webpackChunkcoffee_shop_react||[]).push([[145],{126:(e,s,a)=>{a.d(s,{Z:()=>o});var r=a(531),c=a(184);const n=()=>(0,c.jsxs)("ul",{className:"social-networks",children:[(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:(0,c.jsx)("i",{className:"icon-facebook"})})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:(0,c.jsx)("i",{className:"icon-linkedin"})})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:(0,c.jsx)("i",{className:"icon-twitter"})})})]}),o=()=>(0,c.jsx)("footer",{className:"footer",children:(0,c.jsx)("div",{className:"container",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)(r.Z,{}),(0,c.jsx)("span",{className:"copy",children:"\xa9 2024 \xa0All Rights Reserved"}),(0,c.jsx)(n,{})]})})})},946:(e,s,a)=>{a.d(s,{Z:()=>l});var r=a(791),c=a(531),n=a(87),o=a(184);const t=e=>{const{onCloseMobileNav:s,navActiveClass:a}=e;return(0,o.jsx)("nav",{children:(0,o.jsxs)("ul",{className:"menu",children:[(0,o.jsx)("li",{children:(0,o.jsx)(n.OL,{onClick:()=>s(a),to:"/",children:"Home"})}),(0,o.jsx)("li",{children:(0,o.jsx)(n.OL,{onClick:()=>s(a),to:"/our-coffee",children:"Our coffee"})}),(0,o.jsx)("li",{children:(0,o.jsx)(n.OL,{onClick:()=>s(a),to:"/contact-us",children:"Contact us"})})]})})},l=()=>{const[e,s]=(0,r.useState)(!1),a=e=>{e||(document.body.classList.add("nav-active"),s(!0))},n=e=>{e&&(document.body.classList.remove("nav-active"),s(!1))};return(0,o.jsx)("header",{className:"header",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)(c.Z,{navActiveClass:e,onCloseMobileNav:n,color:!0}),(0,o.jsx)("button",{onClick:()=>{return a(s=e),void n(s);var s},className:"nav-opener",children:(0,o.jsx)("span",{})}),(0,o.jsx)("div",{className:"drop",children:(0,o.jsx)(t,{navActiveClass:e,onCloseMobileNav:n})})]})})})}},81:(e,s,a)=>{a.d(s,{Z:()=>c});var r=a(184);const c=e=>{let{src:s,useClass:a}=e;return a||(a=""),(0,r.jsx)("section",{className:"intro bg-img".concat(a),style:{backgroundImage:"url(".concat(s,")")},children:(0,r.jsx)("div",{className:"container",children:e.children})})}},531:(e,s,a)=>{a.d(s,{Z:()=>o});var r=a(87);a(791);const c=a.p+"static/media/logo.e151b9d9ea482805aaafa8322fd52e22.svg";var n=a(184);const o=e=>{let{onCloseMobileNav:s,navActiveClass:a}=e;return(0,n.jsx)("strong",{className:"logo",children:(0,n.jsx)(r.rU,{onClick:s&&a?()=>s(a):null,to:"/",children:(0,n.jsx)("img",{src:c,alt:"Coffee house"})})})}},85:(e,s,a)=>{a.d(s,{Z:()=>c});var r=a(184);const c=e=>{let{data:s,text:a}=e,{thumbnail:c,name:n,heading:o}=s;return o||(o=n),(0,r.jsx)("section",{className:"about",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"img-block",children:(0,r.jsx)("img",{src:c,alt:n})}),(0,r.jsxs)("div",{className:"text-block",children:[(0,r.jsx)("h1",{className:"decor",children:o}),a]})]})})})}},609:(e,s,a)=>{a.d(s,{Z:()=>o});var r=a(87),c=a(184);const n=e=>{let{id:s,name:a,thumbnail:n,price:o,region:t}=e.data,l="category";return t||(l+=" hide"),(0,c.jsx)("article",{className:"col",children:(0,c.jsxs)(r.rU,{className:"product-card",to:"/our-coffee/".concat(s),children:[(0,c.jsx)("div",{className:"card-img",children:(0,c.jsx)("img",{src:n,alt:a})}),(0,c.jsx)("h2",{children:a}),(0,c.jsx)("span",{className:l,children:t}),(0,c.jsxs)("strong",{className:"price",children:["$",o]})]})})},o=e=>{let{data:s}=e;const a=s.map((e=>{let{id:s}=e;return(0,c.jsx)(n,{data:e},s)}));return(0,c.jsx)("div",{className:"products-holder",children:(0,c.jsx)("div",{className:"row",children:a})})}},560:(e,s,a)=>{a.d(s,{Z:()=>o});var r=a(394),c=a(184);const n=()=>(0,c.jsx)("strong",{class:"h2 error",children:"An error occurred. We apologise for the inconvenience. Please try again later"}),o=(e,s,a)=>{switch(e){case"waiting":case"loading":return(0,c.jsx)(r.Z,{});case"confirmed":return(0,c.jsx)(s,{data:a});case"error":return(0,c.jsx)(n,{});default:throw new Error("Unexpected process state")}}},568:(e,s,a)=>{a.d(s,{Z:()=>c});var r=a(791);const c=()=>{const[e,s]=(0,r.useState)("waiting"),a=(0,r.useCallback)((async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://fake-coffee-api.vercel.app/api",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};s("loading");try{const s=await fetch(e,{method:a,body:r,headers:c});if(!s.ok)throw new Error("Could not fetch ".concat(e,", status: ").concat(s.status));const o=await s.json();return o.map(n)}catch(o){throw s("error"),o}}),[]),c=(0,r.useCallback)((()=>{s("loading")}),[]),n=e=>({id:e.id,pageId:e._id,name:e.name,description:e.description,price:e.price,region:e.region,weight:e.weight,flavor:e.flavor_profile,thumbnail:e.image_url});return{getProducts:a,clearError:c,setProcess:s,process:e}}}}]);
//# sourceMappingURL=145.a073546b.chunk.js.map