(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3561:function(e,t,a){Promise.resolve().then(a.bind(a,2708))},2708:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return W}});var s=a(7437),r=a(9147),n=a.n(r),i=a(7209),l=a.n(i);a(7960);var o=a(2265);let c=0,d=new Map,m=e=>{if(d.has(e))return;let t=setTimeout(()=>{d.delete(e),h({type:"REMOVE_TOAST",toastId:e})},1e6);d.set(e,t)},u=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:a}=t;return a?m(a):e.toasts.forEach(e=>{m(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},x=[],p={toasts:[]};function h(e){p=u(p,e),x.forEach(e=>{e(p)})}function f(e){let{...t}=e,a=(c=(c+1)%Number.MAX_SAFE_INTEGER).toString(),s=()=>h({type:"DISMISS_TOAST",toastId:a});return h({type:"ADD_TOAST",toast:{...t,id:a,open:!0,onOpenChange:e=>{e||s()}}}),{id:a,dismiss:s,update:e=>h({type:"UPDATE_TOAST",toast:{...e,id:a}})}}var g=a(7648),b=a(4508),v=a(6432),j=a(535),w=a(875);let N=o.forwardRef((e,t)=>{let{className:a,children:r,...n}=e;return(0,s.jsxs)(v.fC,{ref:t,className:(0,b.cn)("relative z-10 flex max-w-max flex-1 items-center justify-center",a),...n,children:[r,(0,s.jsx)(_,{})]})});N.displayName=v.fC.displayName;let y=o.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(v.aV,{ref:t,className:(0,b.cn)("group flex flex-1 list-none items-center justify-center space-x-1",a),...r})});y.displayName=v.aV.displayName;let k=v.ck,S=(0,j.j)("group inline-flex h-9 w-max items-center justify-center rounded-full bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50");o.forwardRef((e,t)=>{let{className:a,children:r,...n}=e;return(0,s.jsxs)(v.xz,{ref:t,className:(0,b.cn)(S(),"group",a),...n,children:[r," ",(0,s.jsx)(w.Z,{className:"relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180","aria-hidden":"true"})]})}).displayName=v.xz.displayName,o.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(v.VY,{ref:t,className:(0,b.cn)("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",a),...r})}).displayName=v.VY.displayName;let z=v.rU,_=o.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{className:(0,b.cn)("absolute left-0 top-full flex justify-center"),children:(0,s.jsx)(v.l_,{className:(0,b.cn)("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",a),ref:t,...r})})});_.displayName=v.l_.displayName,o.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(v.z$,{ref:t,className:(0,b.cn)("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",a),...r,children:(0,s.jsx)("div",{className:"relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"})})}).displayName=v.z$.displayName;var M=a(7495);let A=(0,j.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),C=o.forwardRef((e,t)=>{let{className:a,variant:r,size:n,asChild:i=!1,...l}=e,o=i?M.g7:"button";return(0,s.jsx)(o,{className:(0,b.cn)(A({variant:r,size:n,className:a})),ref:t,...l})});C.displayName="Button";var T=a(9873),V=a(2489);let L=T.fC,H=T.xz,E=T.x8,R=T.h_,O=o.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(T.aV,{className:(0,b.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...r,ref:t})});O.displayName=T.aV.displayName;let I=(0,j.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),D=o.forwardRef((e,t)=>{let{side:a="right",className:r,children:n,...i}=e;return(0,s.jsxs)(R,{children:[(0,s.jsx)(O,{}),(0,s.jsxs)(T.VY,{ref:t,className:(0,b.cn)(I({side:a}),r),...i,children:[(0,s.jsxs)(T.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,s.jsx)(V.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]}),n]})]})});D.displayName=T.VY.displayName;let B=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,b.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...a})};B.displayName="SheetHeader";let Y=o.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(T.Dx,{ref:t,className:(0,b.cn)("text-lg font-semibold text-foreground",a),...r})});function P(){let[e,t]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=()=>{t(window.scrollY>0)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,s.jsx)("div",{className:(0,b.cn)("sticky top-0 z-30 flex justify-center w-full items-center transition-colors duration-200",e?"bg-white md:bg-transparent shadow-md md:shadow-none shadow-[#469f93]":""),children:(0,s.jsxs)("div",{className:"flex justify-end md:justify-center relative items-center py-6 md:p-6 w-5/6 lg:w-4/5",children:[(0,s.jsx)("a",{href:"/",className:" font-bold absolute text-[#3d8b80] text-xl top-[32%] left-0",children:"grincraft"}),(0,s.jsx)(N,{className:(0,b.cn)("hidden md:block bg-[#469f93] shadow-md text-white rounded-full p-2"),children:(0,s.jsxs)(y,{children:[(0,s.jsx)(k,{children:(0,s.jsx)(g.default,{href:"/",legacyBehavior:!0,passHref:!0,children:(0,s.jsx)(z,{className:S(),children:"Home"})})}),(0,s.jsx)(k,{children:(0,s.jsx)(g.default,{href:"#about",legacyBehavior:!0,passHref:!0,children:(0,s.jsx)(z,{className:S(),children:"About"})})}),(0,s.jsx)(k,{children:(0,s.jsx)(g.default,{href:"#services",legacyBehavior:!0,passHref:!0,children:(0,s.jsx)(z,{className:S(),children:"Services"})})}),(0,s.jsx)(k,{children:(0,s.jsx)(g.default,{href:"#book",legacyBehavior:!0,passHref:!0,children:(0,s.jsx)(z,{className:S(),children:"Appointment"})})})]})}),(0,s.jsxs)(L,{children:[(0,s.jsx)(H,{asChild:!0,children:(0,s.jsx)(C,{className:"md:hidden bg-[#3d8b80] text-white",variant:"outline",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 9h16.5m-16.5 6.75h16.5"})})})}),(0,s.jsxs)(D,{side:"left",children:[(0,s.jsx)(B,{children:(0,s.jsx)(Y,{className:"text-[#3d8b80]",children:"grincraft"})}),(0,s.jsx)("div",{className:"grid gap-4 py-4 mt-4",children:(0,s.jsxs)("ul",{className:"flex flex-col justiy-center items-center gap-4",children:[(0,s.jsx)(E,{asChild:!0,children:(0,s.jsx)("a",{className:"transition-all",href:"/",children:"Home"})}),(0,s.jsx)(E,{asChild:!0,children:(0,s.jsx)("a",{className:"transition-all",href:"/#about",children:"About"})}),(0,s.jsx)(E,{asChild:!0,children:(0,s.jsx)("a",{className:"transition-all",href:"/#services",children:"Services"})}),(0,s.jsx)(E,{asChild:!0,children:(0,s.jsx)("a",{className:"transition-all",href:"#book",children:"Contact Us"})})]})})]})]})]})})}Y.displayName=T.Dx.displayName,o.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(T.dk,{ref:t,className:(0,b.cn)("text-sm text-muted-foreground",a),...r})}).displayName=T.dk.displayName,o.forwardRef((e,t)=>{let{className:a,title:r,children:n,...i}=e;return(0,s.jsx)("li",{children:(0,s.jsx)(z,{asChild:!0,children:(0,s.jsxs)("a",{ref:t,className:(0,b.cn)("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",a),...i,children:[(0,s.jsx)("div",{className:"text-sm font-medium leading-none",children:r}),(0,s.jsx)("p",{className:"line-clamp-2 text-sm leading-snug text-muted-foreground",children:n})]})})})}).displayName="ListItem";var U=()=>(0,s.jsxs)("section",{id:"book",className:"mb-32 mt-10",children:[(0,s.jsxs)("div",{className:"flex flex-col justify-center items-center text-center",children:[(0,s.jsx)("h1",{color:"blue-gray",className:"mb-4 !text-3xl lg:!text-5xl",children:"We're Here to Help"}),(0,s.jsx)("p",{className:"mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500",children:"Whether it's a question about our services, a request for appointment, or suggestions for improvement, our team is eager to hear from you."})]}),(0,s.jsx)("div",{id:"map",className:"relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat",children:(0,s.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5890806034145!2d73.87586067592643!3d18.456957371112875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebe0041ebf53%3A0x500cad1912749b12!2sGrincraft%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1740217531415!5m2!1sen!2sin",width:"100%",height:"480",loading:"lazy"})}),(0,s.jsx)("div",{className:"container px-6 md:px-12",children:(0,s.jsx)("div",{className:"block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300",children:(0,s.jsxs)("div",{className:"flex flex-wrap",children:[(0,s.jsx)("div",{className:"mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6",children:(0,s.jsxs)("form",{children:[(0,s.jsxs)("div",{className:"relative   mb-6","data-te-input-wrapper-init":!0,children:[(0,s.jsx)("input",{type:"text",className:"peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none ",id:"exampleInput90"}),(0,s.jsx)("label",{className:"pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ",children:"Name"})]}),(0,s.jsxs)("div",{className:"relative mb-6","data-te-input-wrapper-init":!0,children:[(0,s.jsx)("input",{type:"email",className:"peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none ",id:"exampleInput91"}),(0,s.jsx)("label",{className:"pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ",children:"Email address"})]}),(0,s.jsxs)("div",{className:"relative mb-6","data-te-input-wrapper-init":!0,children:[(0,s.jsx)("textarea",{className:"peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none ",id:"exampleFormControlTextarea1",rows:3}),(0,s.jsx)("label",{className:"pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ",children:"Message"})]}),(0,s.jsx)("button",{type:"button",className:"mb-6 w-full rounded bg-[#469f93] text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal   lg:mb-0",children:"Send"})]})}),(0,s.jsx)("div",{className:"w-full shrink-0 grow-0 basis-auto lg:w-7/12",children:(0,s.jsxs)("div",{className:"flex flex-wrap",children:[(0,s.jsx)("div",{className:"mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12",children:(0,s.jsxs)("div",{className:"flex items-start",children:[(0,s.jsx)("div",{className:"shrink-0",children:(0,s.jsx)("div",{className:"inline-block rounded-md bg-[#cae8e3] p-4 text-primary",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",className:"h-6 w-6",children:(0,s.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"})})})}),(0,s.jsxs)("div",{className:"ml-6 grow",children:[(0,s.jsx)("p",{className:"mb-2 font-bold ",children:"Technical support"}),(0,s.jsx)("p",{className:"text-sm text-neutral-500",children:"grincraftdentalclinic@gmail.com"})]})]})}),(0,s.jsx)("div",{className:"mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12",children:(0,s.jsxs)("div",{className:"flex items-start",children:[(0,s.jsx)("div",{className:"srink-0",children:(0,s.jsx)("div",{className:"inline-block rounded-md bg-[#cae8e3] p-4 text-primary",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",className:"w-7 h-7",children:(0,s.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"})})})}),(0,s.jsxs)("div",{className:"ml-6 grow",children:[(0,s.jsx)("p",{className:"mb-2 font-bold ",children:"Address"}),(0,s.jsx)("p",{className:"text-sm text-neutral-500",children:"3rd Floor, Chordiya Corner, Above Namo Hospital, Gangagham - Shatrunjay Road, Near Shanti Nagar Society, Pune - 411048"})]})]})}),(0,s.jsx)("div",{className:"mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12",children:(0,s.jsxs)("div",{className:"align-start flex",children:[(0,s.jsx)("div",{className:"shrink-0",children:(0,s.jsx)("div",{className:"inline-block rounded-md bg-[#cae8e3] p-4 text-primary",children:(0,s.jsx)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",className:"w-7 h-7",viewBox:"0 0 111.756 122.879","enable-background":"new 0 0 111.756 122.879",children:(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M27.953,5.569v96.769h19.792V5.569H37.456H27.953L27.953,5.569z M21.898,105.123V2.785C21.898,1.247,23.254,0,24.926,0 h12.53h13.316C52.443,0,53.8,1.247,53.8,2.785v102.338c0,1.537-1.356,2.783-3.028,2.783H24.926 C23.254,107.906,21.898,106.66,21.898,105.123L21.898,105.123z M13.32,17.704c1.671,0,3.027,1.247,3.027,2.785 s-1.355,2.784-3.027,2.784H7.352c-0.161,0-0.292,0.022-0.39,0.064c-0.129,0.056-0.276,0.166-0.429,0.325 c-0.161,0.167-0.281,0.346-0.353,0.528c-0.083,0.208-0.125,0.465-0.125,0.759v90.803c0,0.287,0.043,0.537,0.125,0.74l0.034,0.092 c0.068,0.135,0.165,0.264,0.284,0.383c0.126,0.125,0.258,0.217,0.39,0.27c0.123,0.051,0.279,0.074,0.466,0.074h97.052 c0.188,0,0.346-0.025,0.467-0.074c0.133-0.053,0.264-0.145,0.389-0.27c3.035-3.035,0.441,1.799,0.441-1.215V24.949 c0-3.667,3.039,2.357-0.477-1.288c-0.143-0.146-0.287-0.254-0.43-0.314c-0.113-0.048-0.246-0.075-0.391-0.075H62.563 c-1.672,0-3.027-1.247-3.027-2.784s1.355-2.785,3.027-2.785h41.842c1.041,0,2.029,0.204,2.943,0.597 c0.895,0.385,1.699,0.945,2.393,1.663c0.664,0.686,1.17,1.468,1.514,2.334c0.332,0.839,0.502,1.726,0.502,2.652v90.803 c0,0.938-0.168,1.826-0.502,2.654c-0.344,0.859-0.865,1.639-1.549,2.324c-0.701,0.703-1.506,1.234-2.398,1.598 c-0.906,0.367-1.879,0.551-2.902,0.551H7.352c-1.022,0-1.995-0.184-2.901-0.551c-0.894-0.363-1.698-0.896-2.399-1.598 c-0.621-0.623-1.107-1.33-1.45-2.107c-0.036-0.07-0.069-0.143-0.099-0.217C0.168,117.574,0,116.684,0,115.752V24.949 c0-0.921,0.17-1.811,0.504-2.652c0.342-0.863,0.849-1.648,1.512-2.334c0.683-0.707,1.488-1.263,2.393-1.652 c0.929-0.401,1.917-0.607,2.943-0.607H13.32L13.32,17.704z M65.902,29.03h27.049c0.803,0,1.566,0.145,2.291,0.431 c0.076,0.03,0.15,0.063,0.223,0.099c0.607,0.269,1.166,0.635,1.666,1.096c0.584,0.533,1.027,1.128,1.326,1.782 c0.047,0.104,0.088,0.21,0.119,0.317c0.225,0.584,0.34,1.189,0.34,1.812v12.611c0,0.744-0.156,1.45-0.459,2.118l-0.004,0.009 l0.004,0.002c-0.291,0.64-0.725,1.224-1.291,1.75c-0.58,0.546-1.227,0.956-1.932,1.231c-0.736,0.287-1.5,0.426-2.283,0.426H65.902 c-0.777,0-1.535-0.14-2.27-0.426c-0.693-0.269-1.33-0.668-1.912-1.198c-0.588-0.539-1.031-1.144-1.326-1.81 c-0.033-0.078-0.063-0.157-0.09-0.235c-0.234-0.605-0.35-1.228-0.35-1.867V34.567c0-0.723,0.146-1.424,0.445-2.099l-0.006-0.002 c0.295-0.666,0.738-1.271,1.326-1.81l0.037-0.032l-0.002-0.001c0.877-0.78,2.039-1.219,2.119-1.244 C64.537,29.147,65.215,29.03,65.902,29.03L65.902,29.03z M93.475,34.599h-28.08v12.547h28.08V34.599L93.475,34.599z M78.877,63.42 c1.072,0,2.01,0.41,2.807,1.207s1.188,1.734,1.188,2.785c0,1.148-0.389,2.104-1.188,2.865c-0.799,0.758-1.734,1.129-2.807,1.129 c-1.129,0-2.084-0.371-2.844-1.129c-0.76-0.762-1.148-1.717-1.148-2.865c0-1.051,0.391-1.988,1.148-2.785 S77.748,63.42,78.877,63.42L78.877,63.42z M90.977,63.42c1.072,0,2.008,0.41,2.805,1.207s1.189,1.734,1.189,2.785 c0,1.148-0.391,2.104-1.189,2.865c-0.799,0.758-1.732,1.129-2.805,1.129c-1.131,0-2.086-0.371-2.846-1.129 c-0.76-0.762-1.148-1.717-1.148-2.865c0-1.051,0.391-1.988,1.148-2.785S89.846,63.42,90.977,63.42L90.977,63.42z M66.662,75.518 c1.15,0,2.105,0.389,2.865,1.148s1.129,1.715,1.129,2.865c0,1.051-0.371,1.988-1.129,2.785s-1.715,1.209-2.865,1.209 c-1.053,0-1.988-0.412-2.785-1.209s-1.209-1.734-1.209-2.785c0-1.15,0.41-2.105,1.209-2.865S65.609,75.518,66.662,75.518 L66.662,75.518z M78.877,75.518c1.072,0,2.008,0.389,2.807,1.148s1.188,1.715,1.188,2.865c0,1.051-0.391,1.988-1.188,2.785 s-1.734,1.209-2.807,1.209c-1.129,0-2.086-0.412-2.844-1.209s-1.148-1.734-1.148-2.785c0-1.15,0.389-2.105,1.148-2.865 S77.748,75.518,78.877,75.518L78.877,75.518z M90.977,75.518c1.072,0,2.006,0.389,2.805,1.148s1.189,1.715,1.189,2.865 c0,1.051-0.393,1.988-1.189,2.785s-1.732,1.209-2.805,1.209c-1.131,0-2.088-0.412-2.846-1.209s-1.148-1.734-1.148-2.785 c0-1.15,0.389-2.105,1.148-2.865S89.846,75.518,90.977,75.518L90.977,75.518z M66.662,87.518c1.15,0,2.107,0.393,2.865,1.189 s1.129,1.773,1.129,2.922c0,1.053-0.369,1.988-1.129,2.787s-1.715,1.207-2.865,1.207c-1.053,0-1.986-0.408-2.785-1.207 s-1.209-1.734-1.209-2.787c0-1.148,0.412-2.125,1.209-2.922S65.609,87.518,66.662,87.518L66.662,87.518z M78.877,87.518 c1.072,0,2.01,0.393,2.807,1.189s1.188,1.773,1.188,2.922c0,1.053-0.389,1.988-1.188,2.787s-1.734,1.207-2.807,1.207 c-1.129,0-2.084-0.408-2.844-1.207s-1.148-1.734-1.148-2.787c0-1.148,0.391-2.125,1.148-2.922S77.748,87.518,78.877,87.518 L78.877,87.518z M90.977,87.518c1.072,0,2.008,0.393,2.805,1.189s1.189,1.773,1.189,2.922c0,1.053-0.391,1.988-1.189,2.787 s-1.732,1.207-2.805,1.207c-1.131,0-2.086-0.408-2.846-1.207s-1.148-1.734-1.148-2.787c0-1.148,0.391-2.125,1.148-2.922 S89.846,87.518,90.977,87.518L90.977,87.518z M78.877,99.617c1.072,0,2.008,0.389,2.807,1.188s1.188,1.734,1.188,2.807 c0,1.129-0.389,2.084-1.188,2.844s-1.734,1.148-2.807,1.148c-1.129,0-2.084-0.389-2.844-1.148s-1.148-1.715-1.148-2.844 c0-1.072,0.389-2.008,1.148-2.807S77.748,99.617,78.877,99.617L78.877,99.617z M66.662,63.42c1.15,0,2.107,0.41,2.865,1.207 s1.129,1.734,1.129,2.785c0,1.148-0.369,2.104-1.129,2.865c-0.76,0.758-1.715,1.129-2.865,1.129c-1.053,0-1.986-0.371-2.785-1.129 c-0.799-0.762-1.209-1.717-1.209-2.865c0-1.051,0.412-1.988,1.209-2.785S65.609,63.42,66.662,63.42L66.662,63.42z"})})})})}),(0,s.jsx)("div",{className:"ml-6 grow",children:(0,s.jsx)("p",{className:"mb-2 font-bold ",children:"Land Line"})})]})}),(0,s.jsx)("div",{className:"w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12",children:(0,s.jsxs)("div",{className:"align-start flex",children:[(0,s.jsx)("div",{className:"shrink-0",children:(0,s.jsx)("div",{className:"inline-block rounded-md bg-[#cae8e3] p-4 text-primary",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-6 h-6",children:(0,s.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"})})})}),(0,s.jsxs)("div",{className:"ml-6 grow",children:[(0,s.jsx)("p",{className:"mb-2 font-bold ",children:"Mobile"}),(0,s.jsx)("p",{className:"text-neutral-500",children:" (+91) 92265 23232"})]})]})})]})})]})})})]});function W(e){let{children:t}=e,{toast:a}=function(){let[e,t]=o.useState(p);return o.useEffect(()=>(x.push(t),()=>{let e=x.indexOf(t);e>-1&&x.splice(e,1)}),[e]),{...e,toast:f,dismiss:e=>h({type:"DISMISS_TOAST",toastId:e})}}();return(0,s.jsx)("html",{lang:"en",children:(0,s.jsxs)("body",{className:"".concat(n().variable," ").concat(l().variable," antialiased flex flex-col justify-start items-center w-full"),children:[(0,s.jsx)(P,{}),t,(0,s.jsx)("footer",{className:"w-full flex justify-center items-center",children:(0,s.jsx)(U,{})})]})})}},4508:function(e,t,a){"use strict";a.d(t,{cn:function(){return n}});var s=a(1994),r=a(3335);function n(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.m6)((0,s.W)(t))}},7960:function(){}},function(e){e.O(0,[983,46,501,971,117,744],function(){return e(e.s=3561)}),_N_E=e.O()}]);