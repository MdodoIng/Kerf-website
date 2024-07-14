exports.id=591,exports.ids=[591],exports.modules={2811:(e,t,a)=>{"use strict";a.d(t,{default:()=>r});var s=a(326),l=a(7577);let r=function({htmlString:e}){let t=(0,l.useMemo)(()=>{let t=e.replace("<h1>",'<h1 class="text-3xl font-medium mt-4">').replace("<h2",'<h2 class="text-2xl font-medium mt-4"').replace("<h3",'<h3 class="text-xl font-medium mt-4"').replace("<h4",'<h4 class="text-lg font-medium mt-4"').replace("<h5",'<h5 class="text-base font-medium mt-4"').replace("<h6",'<h6 class="text-sm font-medium mt-4"').replace("<p",'<p class="text-lg mt-2 leading-[1.8]"').replace("<li",'<li class="inline-flex text-base gap-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#21d34b" fill="none"> <path d="M2.5 13.8333L6 17.5L7.02402 16.4272M16.5 6.5L10.437 12.8517" stroke="currentColor" strokeWidth="1.5"  strokeLinecap="round"  strokeLinejoin="round"/> <path  d="M7.5 13.8333L11 17.5L21.5 6.5"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>');return t.replace("<ul",'<ul class="mt-3 ">'),t},[e]);return s.jsx("div",{dangerouslySetInnerHTML:{__html:t},"data-aos":"fade-up",className:"mt-2 text-base text-gray-800"})}},2130:(e,t,a)=>{"use strict";a.d(t,{default:()=>m});var s=a(326);a(7577);var l=a(7182),r=a(8930),o=a(6676),i=a(1006),d=a(155);a(3754),a(3141);var n=a(6226),c=a(434);let m=({blogs:e})=>(0,s.jsxs)(l.Z,{classTop:"overflow-hidden relative z-0",classBottom:`${r.Z.t} flex-col overflow-visible`,children:[s.jsx(o.G2,{className:"mt-1",children:"Blogs"}),s.jsx("div",{"data-aos":"fade-up",className:"flex mt-8",children:s.jsx(i.tq,{slidesPerView:1,spaceBetween:30,"data-aos-duration":"700",loop:!0,autoplay:{stopOnLastSlide:!0,delay:3500},breakpoints:{320:{slidesPerView:2},480:{slidesPerView:2},640:{slidesPerView:3},1024:{slidesPerView:4}},speed:1200,modules:[d.pt],className:"mySwiper !ml-0",children:(function(){let t=[...e];for(;t.length<4;)t.push({title:"",date:"",author:{node:{name:""}},acf:{featuredImage:{sourceUrl:"",altText:"",mediaDetails:{width:0,height:0}},content:""},slug:""});return t})().map((e,t)=>s.jsx(s.Fragment,{children:e.title?s.jsx(i.o5,{children:(0,s.jsxs)(c.default,{href:`/blogs/${e.slug}`,className:"relative z-0 !flex flex-col items-start justify-end  px-4 py-4 aspect-[9/13] overflow-hidden rounded-lg bg-black after:absolute after:w-full after:h-1/2 after:bg-gradient-to-t to-transparent from-black/90 after:bottom-0 after:left-0 after:-z-10 ",children:[s.jsx("h3",{className:"font-bold capitalize text-base line-clamp-3 text-white leading-tight",children:e.title}),(0,s.jsxs)("p",{className:"text-sm text-white font-normal inline line-clamp-1 mt-1",children:["Written by :"," ",s.jsx("span",{className:"font-bold capitalize ",children:e.author.node.name})]}),s.jsx(n.default,{src:e.acf.featuredImage.sourceUrl,alt:e.acf.featuredImage.altText,fill:!0,loading:"lazy",className:"-z-10 object-cover opacity-70"})]})},t):s.jsx(i.o5,{},t)}))})})]})},5732:(e,t,a)=>{"use strict";a.d(t,{default:()=>p});var s=a(326);a(7577);var l=a(7182),r=a(8930),o=a(6676),i=a(6226),d=a(4636);let n=({item:e,idx:t})=>{let a=[{title:"view profile",link:`/doctors/${e.slug}`},{title:"book an appointment",link:""}];return s.jsx(s.Fragment,{children:e.title?(0,s.jsxs)("div",{"data-aos":"fade-up","data-aos-delay":50*t,className:"relative z-0 w-full bg-[#e6e6e6] rounded-lg overflow-hidden flex flex-col items-start justify-end text-white  group  min-h-[260px]",children:[(0,s.jsxs)("div",{className:"absolute w-full flex flex-col overflow-hidden left-0 bottom-0 px-4 py-6",children:[s.jsx("h2",{className:"font-bold text-base ",children:e.title}),s.jsx("p",{className:"text-sm font-light mt-1",children:e.acf.designation}),s.jsx("div",{className:"grid gap-1  mt-3 max-h-0 overflow-hidden group-hover:max-h-[900px] duration-700 ",children:a.map((e,t)=>s.jsx(d.NormalBtn,{href:e.link,className:"text-sm font-normal text-center py-2",children:e.title},t))})]}),s.jsx(i.default,{src:e.acf.image.sourceUrl,alt:e.acf.image.altText,width:300,height:300,className:"-z-10 object-contain  object-bottom h-full w-full"}),s.jsx("span",{className:"absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t to-transparent from-kerf-blue-dark/90  -z-[5]"})]}):s.jsx("div",{})})};var c=a(2398),m=a(1009);let x=({className:e})=>s.jsx(i.default,{src:c.default,alt:"",className:(0,m.m6)("absolute object-contain w-[25vw]  -z-10 pointer-events-none",e)});var f=a(1006),h=a(155);a(3754),a(3141);let p=({doctors:e})=>(0,s.jsxs)(l.Z,{classTop:"overflow-hidden relative z-0",classBottom:`${r.Z.t} flex-col overflow-visible`,children:[s.jsx(o.G2,{className:"mt-1",children:"Docoters"}),s.jsx("div",{"data-aos":"fade-up",className:"flex mt-8",children:s.jsx(f.tq,{slidesPerView:1,spaceBetween:30,"data-aos-duration":"700",loop:!0,autoplay:{delay:3500,stopOnLastSlide:!0},breakpoints:{320:{slidesPerView:1},480:{slidesPerView:1},640:{slidesPerView:3},1024:{slidesPerView:4}},speed:1200,modules:[h.pt],className:"mySwiper !ml-0",children:(function(){let t=[...e];for(;t.length<4;)t.push({});return t})().map((e,t)=>s.jsx(f.o5,{className:"relative z-0 !flex flex-col items-start justify-end overflow-hidden",children:s.jsx(n,{idx:t,item:e},t)},t))})}),s.jsx(x,{className:"rotate-180 bottom-0 right-0"})]})},6676:(e,t,a)=>{"use strict";a.d(t,{FY:()=>o,G2:()=>r,TI:()=>i});var s=a(326);a(7577);var l=a(1009);let r=({children:e,className:t})=>(0,s.jsxs)("h1",{"data-aos":"fade-up",className:(0,l.m6)("md:text-4xl text-3xl md:leading-[140%] font-semibold leading-[130%]",t),children:[" ",e]}),o=({children:e,className:t})=>(0,s.jsxs)("p",{"data-aos":"fade-up",className:(0,l.m6)("text-sm",t),children:[" ",e]}),i=({children:e,className:t})=>(0,s.jsxs)("p",{"data-aos":"fade-up",className:(0,l.m6)("md:text-2xl text-base md:leading-[1.8] leading-[180%]",t),children:[" ",e]})},1879:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>i});var s=a(8570);let l=(0,s.createProxy)(String.raw`/home/ameen/Desktop/codeface/Kerf website/components/WordPressRichText.tsx`),{__esModule:r,$$typeof:o}=l;l.default;let i=(0,s.createProxy)(String.raw`/home/ameen/Desktop/codeface/Kerf website/components/WordPressRichText.tsx#default`)},5336:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>i});var s=a(8570);let l=(0,s.createProxy)(String.raw`/home/ameen/Desktop/codeface/Kerf website/components/sections/Blogs.tsx`),{__esModule:r,$$typeof:o}=l;l.default;let i=(0,s.createProxy)(String.raw`/home/ameen/Desktop/codeface/Kerf website/components/sections/Blogs.tsx#default`)},7267:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>i});var s=a(8570);let l=(0,s.createProxy)(String.raw`/home/ameen/Desktop/codeface/Kerf website/components/sections/Doctor.tsx`),{__esModule:r,$$typeof:o}=l;l.default;let i=(0,s.createProxy)(String.raw`/home/ameen/Desktop/codeface/Kerf website/components/sections/Doctor.tsx#default`)},2466:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var s=a(9510);a(1159);var l=a(3345),r=a(1787),o=a(7710),i=a(7371),d=a(8946);let n=({breadcrumbs:e,bgImage:t,title:a})=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(l.Z,{classTop:"bg-gradient-to-tl from-kerf-blue via-transparent to-transparent via-40% relative z-0 overflow-x-clip ",classBottom:"h-[550px] flex-col  max-md:pt-40 md:gap-0 gap-10 items-center ",children:[s.jsx("div",{className:"flex items-end justify-end w-max h-full relative z-0  ",children:s.jsx(o.default,{src:t,alt:"",priority:!0,width:1e3,height:600,className:"object-contain h-[420px] -z-0  object-right-top"})}),s.jsx(r.Z,{className:"rotate-180 top-0 right-0"}),s.jsx(r.Z,{className:"-bottom-40 left-0"})]}),s.jsx(l.Z,{classTop:"-translate-y-1/2",children:(0,s.jsxs)("div",{className:"bg-[#e9eef2] bg-off-gray md:px-20 px-8 md:py-10 py-6  w-full rounded-3xl flex items-center  justify-between max-md:flex-col gap-6",children:[(0,s.jsxs)("div",{className:"flex flex-col md:items-start items-center",children:[s.jsx("h1",{"data-aos":"fade-up","data-aos-anchor":"#top",className:"md:text-3xl text-2xl font-bold text-[#020c2a] [&_span]:font-medium",children:a}),s.jsx("span",{className:"flex items-center md:mt-6 mt-2",children:e.map((t,a)=>(0,s.jsxs)(i.default,{href:t.link?t.link:"javascript:void(0)","data-aos":"fade-up","data-aos-delay":50*a,"data-aos-anchor":"#top",className:` sm:text-base text-sm font-medium ${0===a?"text-blue-600":"text-[#4b5175]"}`,children:[t.title," ",a<e.length-1&&s.jsx("span",{className:"text-[#4b5175]",children:"\xa0 > \xa0"})]},a))})]}),s.jsx(d.b,{type:"hero section"})]})})]})},7371:(e,t,a)=>{"use strict";a.d(t,{default:()=>l.a});var s=a(1812),l=a.n(s)},1812:(e,t,a)=>{"use strict";let{createProxy:s}=a(8570);e.exports=s("/home/ameen/Desktop/codeface/Kerf website/node_modules/next/dist/client/link.js")},1787:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var s=a(9510);let l={src:"/_next/static/media/rose petals.d5b711be.webp",height:1758,width:1330,blurDataURL:"data:image/webp;base64,UklGRo4AAABXRUJQVlA4WAoAAAAQAAAABQAABwAAQUxQSDEAAAAAAAtTfW8fBn/7/7MXnPf//ogF////7lYA/Pz/qhUA///IMgAB9qImAAEAXQQAAgAAAFZQOCA2AAAA0AEAnQEqBgAIAAJAOCUAToAj+7LztOAA/vokoGntdtOUPDi5E6glnh88r0FTCui6aBJkAAAA",blurWidth:6,blurHeight:8};var r=a(7710),o=a(2386);let i=({className:e})=>s.jsx(r.default,{src:l,alt:"",className:(0,o.m6)("absolute object-contain w-[25vw]  -z-10 pointer-events-none",e)})},2398:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});let s={src:"/_next/static/media/rose petals.d5b711be.webp",height:1758,width:1330,blurDataURL:"data:image/webp;base64,UklGRo4AAABXRUJQVlA4WAoAAAAQAAAABQAABwAAQUxQSDEAAAAAAAtTfW8fBn/7/7MXnPf//ogF////7lYA/Pz/qhUA///IMgAB9qImAAEAXQQAAgAAAFZQOCA2AAAA0AEAnQEqBgAIAAJAOCUAToAj+7LztOAA/vokoGntdtOUPDi5E6glnh88r0FTCui6aBJkAAAA",blurWidth:6,blurHeight:8}},3141:()=>{}};