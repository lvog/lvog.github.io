"use strict";(self.webpackChunkcoffee_shop_react=self.webpackChunkcoffee_shop_react||[]).push([[943],{85:(e,s,r)=>{r.d(s,{Z:()=>n});var t=r(184);const n=e=>{let{data:s,text:r}=e,{thumbnail:n,name:c,heading:a}=s;return a||(a=c),(0,t.jsx)("section",{className:"about",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"img-block",children:(0,t.jsx)("img",{src:n,alt:c})}),(0,t.jsxs)("div",{className:"text-block",children:[(0,t.jsx)("h1",{className:"decor",children:a}),r]})]})})})}},943:(e,s,r)=>{r.r(s),r.d(s,{default:()=>g});var t=r(270),n=r(689),c=r(791),a=r(946),i=r(126),o=r(85),l=r(307),d=r(560),h=r(568),x=r(184);const j=e=>{let{data:s}=e;return s.length>0?(0,x.jsx)(u,{data:s}):(0,x.jsx)(l.default,{})},u=e=>{let{data:s}=e;const{name:r,description:n,region:c,flavor:l,weight:d,price:h}=s[0],j=l.join(", ");return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(t.q,{children:[(0,x.jsx)("meta",{name:"description",content:"".concat(r," coffee with information about it")}),(0,x.jsxs)("title",{children:[r," coffee"]})]}),(0,x.jsx)(a.Z,{}),(0,x.jsx)("div",{className:"page-holder",children:(0,x.jsx)("main",{className:"main",id:"main",children:(0,x.jsx)("section",{className:"products",children:(0,x.jsx)("div",{className:"container container-md",children:(0,x.jsx)(o.Z,{data:s[0],textCenter:!1,text:(0,x.jsxs)("ul",{className:"product-info-list",children:[(0,x.jsxs)("li",{children:[(0,x.jsx)("strong",{children:"Description:"})," ",n]}),(0,x.jsxs)("li",{children:[(0,x.jsx)("strong",{children:"Region:"})," ",c]}),(0,x.jsxs)("li",{children:[(0,x.jsx)("strong",{children:"Flavor:"})," ",j]}),(0,x.jsxs)("li",{children:[(0,x.jsx)("strong",{children:"Weight:"})," ",d]}),(0,x.jsxs)("li",{children:[(0,x.jsx)("strong",{children:"Price:"})," ",(0,x.jsxs)("span",{className:"price",children:["$",h]})]})]})})})})})}),(0,x.jsx)(i.Z,{})]})},g=()=>{const{id:e}=(0,n.UO)(),[s,r]=(0,c.useState)(null),{getProducts:t,process:a,clearError:i,setProcess:o}=(0,h.Z)();(0,c.useEffect)((()=>{l()}),[]);const l=()=>{i(),t().then(u).then((()=>o("confirmed")))},u=s=>{r(s.filter((s=>s.id===+e)))};return(0,x.jsx)(x.Fragment,{children:(0,d.Z)(a,j,s)})}},560:(e,s,r)=>{r.d(s,{Z:()=>a});var t=r(394),n=r(184);const c=()=>(0,n.jsx)("strong",{class:"h2 error",children:"An error occurred. We apologise for the inconvenience. Please try again later"}),a=(e,s,r)=>{switch(e){case"waiting":case"loading":return(0,n.jsx)(t.Z,{});case"confirmed":return(0,n.jsx)(s,{data:r});case"error":return(0,n.jsx)(c,{});default:throw new Error("Unexpected process state")}}},568:(e,s,r)=>{r.d(s,{Z:()=>n});var t=r(791);const n=()=>{const[e,s]=(0,t.useState)("waiting"),r=(0,t.useCallback)((async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://fake-coffee-api.vercel.app/api",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};s("loading");try{const s=await fetch(e,{method:r,body:t,headers:n});if(!s.ok)throw new Error("Could not fetch ".concat(e,", status: ").concat(s.status));const a=await s.json();return a.map(c)}catch(a){throw s("error"),a}}),[]),n=(0,t.useCallback)((()=>{s("loading")}),[]),c=e=>({id:e.id,pageId:e._id,name:e.name,description:e.description,price:e.price,region:e.region,weight:e.weight,flavor:e.flavor_profile,thumbnail:e.image_url});return{getProducts:r,clearError:n,setProcess:s,process:e}}}}]);
//# sourceMappingURL=943.cf70de73.chunk.js.map