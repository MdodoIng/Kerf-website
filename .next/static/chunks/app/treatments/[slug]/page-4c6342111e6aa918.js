(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[131],{5868:function(e,t,a){Promise.resolve().then(a.bind(a,2144)),Promise.resolve().then(a.bind(a,4898)),Promise.resolve().then(a.bind(a,566)),Promise.resolve().then(a.bind(a,8176)),Promise.resolve().then(a.bind(a,1690)),Promise.resolve().then(a.bind(a,9833)),Promise.resolve().then(a.t.bind(a,8173,23)),Promise.resolve().then(a.t.bind(a,231,23)),Promise.resolve().then(a.bind(a,9422))},9833:function(e,t,a){"use strict";var l=a(7437),s=a(2265);t.default=function(e){let{htmlString:t}=e,a=(0,s.useMemo)(()=>{let e=t.replace("<h1>",'<h1 class="text-3xl font-medium mt-4">').replace("<h2",'<h2 class="text-2xl font-medium mt-4"').replace("<h3",'<h3 class="text-xl font-medium mt-4"').replace("<h4",'<h4 class="text-lg font-medium mt-4"').replace("<h5",'<h5 class="text-base font-medium mt-4"').replace("<h6",'<h6 class="text-sm font-medium mt-4"').replace("<p",'<p class="text-lg mt-2 leading-[1.8]"').replace("<li",'<li class="inline-flex text-base gap-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#21d34b" fill="none"> <path d="M2.5 13.8333L6 17.5L7.02402 16.4272M16.5 6.5L10.437 12.8517" stroke="currentColor" strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"/> <path  d="M7.5 13.8333L11 17.5L21.5 6.5"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>');return e.replace("<ul",'<ul class="mt-3 ">'),e},[t]);return(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:a},"data-aos":"fade-up",className:"mt-2 text-base text-gray-800"})}},566:function(e,t,a){"use strict";var l=a(7437);a(2265);var s=a(1579),n=a(3459),o=a(4348),r=a(3267),i=a(6341);a(3034),a(7322);var d=a(6648),c=a(7138);t.default=e=>{let{blogs:t}=e;return(0,l.jsxs)(s.Z,{classTop:"overflow-hidden relative z-0",classBottom:"".concat(n.Z.t," flex-col overflow-visible"),children:[(0,l.jsx)(o.G2,{className:"mt-1",children:"Blogs"}),(0,l.jsx)("div",{"data-aos":"fade-up",className:"flex mt-8",children:(0,l.jsx)(r.tq,{slidesPerView:1,spaceBetween:30,"data-aos-duration":"700",loop:!0,autoplay:{stopOnLastSlide:!0,delay:3500},breakpoints:{320:{slidesPerView:2},480:{slidesPerView:2},640:{slidesPerView:3},1024:{slidesPerView:4}},speed:1200,modules:[i.pt],className:"mySwiper !ml-0",children:(function(){let e=[...t];for(;e.length<4;)e.push({title:"",date:"",author:{node:{name:""}},acf:{featuredImage:{sourceUrl:"",altText:"",mediaDetails:{width:0,height:0}},content:""},slug:""});return e})().map((e,t)=>(0,l.jsx)(l.Fragment,{children:e.title?(0,l.jsx)(r.o5,{children:(0,l.jsxs)(c.default,{href:"/blogs/".concat(e.slug),className:"relative z-0 !flex flex-col items-start justify-end  px-4 py-4 aspect-[9/13] overflow-hidden rounded-lg bg-black after:absolute after:w-full after:h-1/2 after:bg-gradient-to-t to-transparent from-black/90 after:bottom-0 after:left-0 after:-z-10 ",children:[(0,l.jsx)("h3",{className:"font-bold capitalize text-base line-clamp-3 text-white leading-tight",children:e.title}),(0,l.jsxs)("p",{className:"text-sm text-white font-normal inline line-clamp-1 mt-1",children:["Written by :"," ",(0,l.jsx)("span",{className:"font-bold capitalize ",children:e.author.node.name})]}),(0,l.jsx)(d.default,{src:e.acf.featuredImage.sourceUrl,alt:e.acf.featuredImage.altText,fill:!0,loading:"lazy",className:"-z-10 object-cover opacity-70"})]})},t):(0,l.jsx)(r.o5,{},t)}))})})]})}},8176:function(e,t,a){"use strict";a.d(t,{default:function(){return x}});var l=a(7437);a(2265);var s=a(1579),n=a(3459),o=a(4348),r=a(6648),i=a(9422),d=e=>{let{item:t,idx:a}=e,s=[{title:"view profile",link:"/doctors/".concat(t.slug)},{title:"book an appointment",link:""}];return(0,l.jsx)(l.Fragment,{children:t.title?(0,l.jsxs)("div",{"data-aos":"fade-up","data-aos-delay":50*a,className:"relative z-0 w-full bg-[#e6e6e6] rounded-lg overflow-hidden flex flex-col items-start justify-end text-white  group  min-h-[260px]",children:[(0,l.jsxs)("div",{className:"absolute w-full flex flex-col overflow-hidden left-0 bottom-0 px-4 py-6",children:[(0,l.jsx)("h2",{className:"font-bold text-base ",children:t.title}),(0,l.jsx)("p",{className:"text-sm font-light mt-1",children:t.acf.designation}),(0,l.jsx)("div",{className:"grid gap-1  mt-3 max-h-0 overflow-hidden group-hover:max-h-[900px] duration-700 ",children:s.map((e,t)=>(0,l.jsx)(i.NormalBtn,{href:e.link,className:"text-sm font-normal text-center py-2",children:e.title},t))})]}),(0,l.jsx)(r.default,{src:t.acf.image.sourceUrl,alt:t.acf.image.altText,width:300,height:300,className:"-z-10 object-contain  object-bottom h-full w-full"}),(0,l.jsx)("span",{className:"absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t to-transparent from-kerf-blue-dark/90  -z-[5]"})]}):(0,l.jsx)("div",{})})},c=a(2144),m=a(6164),u=e=>{let{className:t}=e;return(0,l.jsx)(r.default,{src:c.default,alt:"",className:(0,m.m6)("absolute object-contain w-[25vw]  -z-10 pointer-events-none",t)})},p=a(3267),f=a(6341);a(3034),a(7322);var x=e=>{let{doctors:t}=e;return(0,l.jsxs)(s.Z,{classTop:"overflow-hidden relative z-0",classBottom:"".concat(n.Z.t," flex-col overflow-visible"),children:[(0,l.jsx)(o.G2,{className:"mt-1",children:"Docoters"}),(0,l.jsx)("div",{"data-aos":"fade-up",className:"flex mt-8",children:(0,l.jsx)(p.tq,{slidesPerView:1,spaceBetween:30,"data-aos-duration":"700",loop:!0,autoplay:{delay:3500,stopOnLastSlide:!0},breakpoints:{320:{slidesPerView:1},480:{slidesPerView:1},640:{slidesPerView:3},1024:{slidesPerView:4}},speed:1200,modules:[f.pt],className:"mySwiper !ml-0",children:(function(){let e=[...t];for(;e.length<4;)e.push({});return e})().map((e,t)=>(0,l.jsx)(p.o5,{className:"relative z-0 !flex flex-col items-start justify-end overflow-hidden",children:(0,l.jsx)(d,{idx:t,item:e},t)},t))})}),(0,l.jsx)(u,{className:"rotate-180 bottom-0 right-0"})]})}},1690:function(e,t,a){"use strict";var l=a(7437),s=a(9422),n=a(8472),o=a(2265);a(9589),a(3311);let r={city:"",department:"",email:"",name:"",phone:"",specialist:""},i=e=>{let{title:t,required:a,placeholder:s,type:n="text",onChange:o,value:r}=e;return(0,l.jsxs)("label",{className:"w-full flex flex-col gap-0.5  ",children:[(0,l.jsx)("p",{"data-aos":"fade-up",className:"".concat(a&&"after:content-['*'] after:text-red-500","  capitalize text-sm font-medium"),children:t}),(0,l.jsx)("input",{"data-aos":"fade-up",required:a,type:n,name:t,id:"",onChange:o,value:r,placeholder:s||t,className:"px-4 py-4 bg-white outline-none capitalize  border border-gray-200 rounded-lg   text-sm font-medium"})]})},d=e=>{let{title:t,required:a,placeholder:s,options:n,onChange:r}=e,[i,d]=(0,o.useState)(""),[c,m]=(0,o.useState)(!1),u=e=>{i!==e?(m(!1),d(e)):(m(!1),d(""))};return(0,l.jsxs)("label",{className:"w-full flex flex-col gap-0.5 relative z-auto ",children:[(0,l.jsx)("p",{"data-aos":"fade-up",className:"".concat(a&&"after:content-['*'] after:text-red-500","  capitalize text-sm font-medium"),children:t}),(0,l.jsx)("input",{"data-aos":"fade-up",required:a,name:t,id:"",defaultValue:i,onChange:r,onMouseDown:()=>m(e=>!e),placeholder:s||t,className:"px-4 py-4 bg-white outline-none capitalize  border border-gray-200 rounded-lg   text-sm font-medium cursor-pointer caret-transparent"}),(0,l.jsx)("svg",{className:"w-2.5 h-2.5 ms-2.5 absolute right-4 top-10 pointer-events-none ".concat(c&&"rotate-180"," duration-300"),"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6",children:(0,l.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 4 4 4-4"})}),(0,l.jsx)("div",{className:"absolute z-50 w-full top-20 left-0 bg-white   flex flex-col border-gray-200 rounded-lg  ".concat(c?"max-h-[200px] overflow-y-scroll py-2 border ":"max-h-0 overflow-hidden"),children:n.map((e,t)=>(0,l.jsx)("p",{onClick:()=>u(e),className:"text-sm font-medium capitalize hover:bg-gray-200 cursor-pointer duration-300 px-4 py-2 ".concat(i===e&&"bg-gray-200"),children:e},t))})]})};t.default=e=>{let{departmentsTaxonomies:t}=e,[a,c]=(0,o.useState)(r),[m,u]=(0,o.useState)(t.departmentsTaxonomies.edges[0].node.name),p=t.departmentsTaxonomies.edges.map(e=>e.node.name),f=(0,o.useMemo)(()=>{var e;return null===(e=t.departmentsTaxonomies.edges.find(e=>e.node.name===m))||void 0===e?void 0:e.node.doctors.nodes.map(e=>e.title)},[t.departmentsTaxonomies.edges,m]),x=async e=>{e.preventDefault();var t=document.querySelectorAll('input[name="department"], input[name="specialist"]');let l=new FormData;for(let e in a)l.append("your-".concat(e),a[e]);console.log(l.values());try{let e=await n.Z.post("https://cfuat.in/kerf/wp-json/cf7/v1/forms/254/feedback",l,{headers:{"Content-Type":"multipart/form-data"}});console.log(e.data),t.forEach(e=>e.value=""),c(r)}catch(e){console.log(e)}};return(0,l.jsxs)("form",{action:"",name:"contact-form",onSubmit:x,className:"w-full flex items-center justify-center flex-col bg-[#f4f4f6] px-4 pb-5 rounded-2xl gap-6",children:[(0,l.jsx)("h2",{"data-aos":"fade-up",className:"text-base font-semibold text-center py-5 bg-black/10 rounded-b-xl px-5",children:"Request Your Appointment"}),(0,l.jsxs)("div",{className:"flex flex-col gap-4 w-full",children:[(0,l.jsx)(i,{title:"name",required:!0,value:a.name,onChange:e=>c({...a,name:e.target.value})}),(0,l.jsx)(i,{title:"phone",type:"tel",required:!0,value:a.phone,onChange:e=>c({...a,phone:e.target.value})}),(0,l.jsx)(i,{title:"email",value:a.email,onChange:e=>c({...a,email:e.target.value})}),(0,l.jsx)(d,{title:"department",required:!0,placeholder:"select department",onChange:e=>c({...a,department:e.target.value}),options:p}),(0,l.jsx)(d,{title:"specialist",placeholder:"select specialist",options:f,onChange:e=>c({...a,specialist:e.target.value})}),(0,l.jsx)(i,{title:"City",value:a.city,onChange:e=>c({...a,city:e.target.value})})]}),(0,l.jsx)(s.NormalBtn,{type:"submit",className:"bg-black text-sm px-8 py-3  font-bold rounded-lg capitalize bg-secondary border-secondary text-white  duration-300 hover:opacity-75",children:"Request Your Application"})]})}},4348:function(e,t,a){"use strict";a.d(t,{FY:function(){return o},G2:function(){return n},TI:function(){return r}});var l=a(7437);a(2265);var s=a(6164);let n=e=>{let{children:t,className:a}=e;return(0,l.jsxs)("h1",{"data-aos":"fade-up",className:(0,s.m6)("md:text-4xl text-3xl md:leading-[140%] font-semibold leading-[130%]",a),children:[" ",t]})},o=e=>{let{children:t,className:a}=e;return(0,l.jsxs)("p",{"data-aos":"fade-up",className:(0,s.m6)("text-sm",a),children:[" ",t]})},r=e=>{let{children:t,className:a}=e;return(0,l.jsxs)("p",{"data-aos":"fade-up",className:(0,s.m6)("md:text-2xl text-base md:leading-[1.8] leading-[180%]",a),children:[" ",t]})}},2144:function(e,t,a){"use strict";a.r(t),t.default={src:"/_next/static/media/rose petals.d5b711be.webp",height:1758,width:1330,blurDataURL:"data:image/webp;base64,UklGRo4AAABXRUJQVlA4WAoAAAAQAAAABQAABwAAQUxQSDEAAAAAAAtTfW8fBn/7/7MXnPf//ogF////7lYA/Pz/qhUA///IMgAB9qImAAEAXQQAAgAAAFZQOCA2AAAA0AEAnQEqBgAIAAJAOCUAToAj+7LztOAA/vokoGntdtOUPDi5E6glnh88r0FTCui6aBJkAAAA",blurWidth:6,blurHeight:8}}},function(e){e.O(0,[85,173,624,738,54,898,971,23,744],function(){return e(e.s=5868)}),_N_E=e.O()}]);