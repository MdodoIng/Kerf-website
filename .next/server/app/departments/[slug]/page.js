(()=>{var e={};e.id=355,e.ids=[355],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5763:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>c,routeModule:()=>u,tree:()=>d}),s(3858),s(9640),s(9644),s(5866);var r=s(3191),n=s(8716),a=s(7922),o=s.n(a),i=s(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);s.d(t,l);let d=["",{children:["departments",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,3858)),"/home/ameen/Desktop/codeface/Kerf website/app/departments/[slug]/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,9640)),"/home/ameen/Desktop/codeface/Kerf website/app/layout.tsx"],loading:[()=>Promise.resolve().then(s.bind(s,9644)),"/home/ameen/Desktop/codeface/Kerf website/app/loading.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"]}],c=["/home/ameen/Desktop/codeface/Kerf website/app/departments/[slug]/page.tsx"],m="/departments/[slug]/page",p={require:s,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/departments/[slug]/page",pathname:"/departments/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},5333:(e,t,s)=>{Promise.resolve().then(s.bind(s,2398)),Promise.resolve().then(s.bind(s,6429)),Promise.resolve().then(s.bind(s,2130)),Promise.resolve().then(s.bind(s,5732)),Promise.resolve().then(s.bind(s,2811)),Promise.resolve().then(s.t.bind(s,2481,23)),Promise.resolve().then(s.t.bind(s,9404,23)),Promise.resolve().then(s.bind(s,4636))},3858:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>g});var r=s(9510),n=s(9940),a=s(2466);s(1159);var o=s(3345),i=s(8),l=s(7710),d=s(8946),c=s(1879);let m=({data:e})=>(0,r.jsxs)(o.Z,{classBottom:`${i.Z.y} flex-col items-center`,children:[r.jsx(l.default,{src:e.acf.bannerImage.sourceUrl,alt:e.acf.bannerImage.altText,"data-aos":"fade-up",width:1200,height:600,className:"md:aspect-[16/7] aspect-video rounded-xl overflow-hidden object-cover md:w-10/12"}),(0,r.jsxs)("div",{className:" flex flex-col md:w-9/12 mt-16",children:[r.jsx(c.ZP,{htmlString:e.acf.content}),r.jsx(d.b,{})]})]});var p=s(7267),u=s(5336),x=s(6655);let g=async({params:e})=>{let[t,s]=await Promise.all([(0,x.B)("department",e.slug),(0,x.B)("blogs")]),o=t.departmentsTaxonomies?.edges[0].node,i=[{title:"Home",link:"/"},{title:"Departments",link:"javascript:void(0)"},{title:o.name,link:"javascript:void(0)"}];return(0,r.jsxs)(n.ZP,{pageTitle:i[2].title,children:[r.jsx(a.Z,{breadcrumbs:i,bgImage:o.departments.nodes[0].acf.bannerImage.sourceUrl,title:o.name}),r.jsx(m,{data:o.departments.nodes[0]}),r.jsx(p.ZP,{doctors:o.doctors.nodes}),r.jsx(u.ZP,{blogs:s.blogs.nodes})]})}}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[814,869,467,775,591],()=>s(5763));module.exports=r})();