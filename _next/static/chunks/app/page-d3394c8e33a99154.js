(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{5940:(e,t,s)=>{Promise.resolve().then(s.bind(s,8)),Promise.resolve().then(s.bind(s,2136))},8:(e,t,s)=>{"use strict";s.d(t,{default:()=>u});var a=s(5155),r=s(2115),l=s(9449),n=s(5754),c=s(5933),i=s(7097),o=s(4286),d=s(556);let h=()=>{let e=[{icon:(0,a.jsx)(c.A,{}),title:"Favorites"},{icon:(0,a.jsx)(i.A,{}),title:"Starred"},{icon:(0,a.jsx)(o.A,{}),title:"Dark Mode"},{icon:(0,a.jsx)(d.A,{}),title:"Zoom Out"}];return(0,a.jsx)("div",{className:"grid grid-cols-2 gap-4 p-4",children:e.map((e,t)=>(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center space-y-2",children:[(0,a.jsx)(l.A,{title:e.title,placement:"top",children:(0,a.jsx)(n.A,{children:e.icon})}),(0,a.jsx)("span",{className:"text-sm text-gray-600",children:e.title})]},t))})};var m=s(4244),x=s(5565);function u(){let[e,t]=(0,r.useState)(!1),[s,l]=(0,r.useState)(!0),[n,c]=(0,r.useState)(!1),i=Array.from({length:20},(e,t)=>({name:"Project ".concat(t+1),avatar:"https://placehold.co/32x32"}));(0,r.useEffect)(()=>{let e=window.matchMedia("(prefers-color-scheme: dark)");c(e.matches);let t=e=>c(e.matches);return e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]);let o=()=>t(!e);return(0,a.jsxs)(a.Fragment,{children:[e&&(0,a.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-10",onClick:o}),(0,a.jsxs)("div",{className:"fixed inset-y-0 ".concat(s?"left-0":"right-0"," shadow-lg transition-all duration-300 z-20 ").concat(e?"w-[95vw] sm:w-[30vw]":"w-[10vw] sm:w-[5vw]"," ").concat(n?"bg-gray-900 text-white":"bg-white text-black"),children:[(0,a.jsx)("div",{className:"flex items-center justify-between p-4 border-b cursor-pointer",onClick:o,children:e?(0,a.jsx)("h2",{className:"text-lg font-semibold",children:"Projects"}):(0,a.jsx)("span",{className:"text-xl font-bold",children:"P"})}),(0,a.jsx)("div",{className:"border-b",children:e?(0,a.jsx)(h,{}):(0,a.jsx)("div",{className:"flex flex-col items-center p-2 gap-2",children:(0,a.jsx)("button",{className:"p-2 rounded shadow-lg bg-blue-500 text-white flex justify-center items-center",onClick:()=>l(!s),children:(0,a.jsx)(m.A,{sx:{color:n?"#fff":"#000"}})})})}),e&&(0,a.jsx)("nav",{className:"mt-4 overflow-y-auto h-[calc(100vh-64px)]",children:i.map((e,t)=>(0,a.jsxs)("div",{className:"flex items-center gap-4 p-2 transition-all justify-start ".concat(n?"hover:bg-blue-700 cursor-pointer":"hover:bg-blue-100 cursor-pointer"),children:[(0,a.jsx)(x.default,{src:e.avatar,alt:e.name,width:40,height:40,className:"rounded-full"}),(0,a.jsx)("span",{className:"text-sm",children:e.name})]},t))})]})]})}},2136:(e,t,s)=>{"use strict";s.d(t,{default:()=>d});var a=s(5155),r=s(2115);s(1298);var l=s(3273),n=s(9367),c=s(900),i=s(7925),o=s(3109);function d(){let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(!e.current)return;let t=[(0,i.Rb)([-113.842731,33.25422]),(0,i.Rb)([-108.928396,31.448154]),(0,i.Rb)([-111.834762,30.212017])],s=(0,i.Rb)([-111.151345,31.439679]),a=new l.A({target:e.current,layers:[new c.A({source:new o.A({layer:"alidade_smooth_dark",retina:!0})})],view:new n.Ay({center:s,zoom:6,maxZoom:19,minZoom:6,extent:[t[0][0],t[2][1],t[1][0],t[0][1]]})});return()=>{a.setTarget(void 0)}},[]),(0,a.jsx)("div",{ref:e,style:{width:"100%",height:"100vh"}})}}},e=>{var t=t=>e(e.s=t);e.O(0,[499,775,441,517,358],()=>t(5940)),_N_E=e.O()}]);