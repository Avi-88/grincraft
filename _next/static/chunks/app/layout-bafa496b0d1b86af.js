(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3561:function(e,t,a){Promise.resolve().then(a.bind(a,4256))},4256:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return P}});var s=a(7437),r=a(9147),n=a.n(r),o=a(7209),i=a.n(o);a(7960);var l=a(2265);let d=0,c=new Map,m=e=>{if(c.has(e))return;let t=setTimeout(()=>{c.delete(e),h({type:"REMOVE_TOAST",toastId:e})},1e6);c.set(e,t)},f=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:a}=t;return a?m(a):e.toasts.forEach(e=>{m(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},u=[],x={toasts:[]};function h(e){x=f(x,e),u.forEach(e=>{e(x)})}function p(e){let{...t}=e,a=(d=(d+1)%Number.MAX_SAFE_INTEGER).toString(),s=()=>h({type:"DISMISS_TOAST",toastId:a});return h({type:"ADD_TOAST",toast:{...t,id:a,open:!0,onOpenChange:e=>{e||s()}}}),{id:a,dismiss:s,update:e=>h({type:"UPDATE_TOAST",toast:{...e,id:a}})}}var g=a(7648),b=a(4508),j=a(6432),v=a(535),y=a(875);let N=l.forwardRef((e,t)=>{let{className:a,children:r,...n}=e;return(0,s.jsxs)(j.fC,{ref:t,className:(0,b.cn)("relative z-10 flex max-w-max flex-1 items-center justify-center",a),...n,children:[r,(0,s.jsx)(_,{})]})});N.displayName=j.fC.displayName;let w=l.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(j.aV,{ref:t,className:(0,b.cn)("group flex flex-1 list-none items-center justify-center space-x-1",a),...r})});w.displayName=j.aV.displayName;let S=j.ck,k=(0,v.j)("group inline-flex h-9 w-max items-center justify-center rounded-full bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50");l.forwardRef((e,t)=>{let{className:a,children:r,...n}=e;return(0,s.jsxs)(j.xz,{ref:t,className:(0,b.cn)(k(),"group",a),...n,children:[r," ",(0,s.jsx)(y.Z,{className:"relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180","aria-hidden":"true"})]})}).displayName=j.xz.displayName,l.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(j.VY,{ref:t,className:(0,b.cn)("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",a),...r})}).displayName=j.VY.displayName;let T=j.rU,_=l.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{className:(0,b.cn)("absolute left-0 top-full flex justify-center"),children:(0,s.jsx)(j.l_,{className:(0,b.cn)("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",a),ref:t,...r})})});_.displayName=j.l_.displayName,l.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(j.z$,{ref:t,className:(0,b.cn)("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",a),...r,children:(0,s.jsx)("div",{className:"relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"})})}).displayName=j.z$.displayName;var A=a(7495);let E=(0,v.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),z=l.forwardRef((e,t)=>{let{className:a,variant:r,size:n,asChild:o=!1,...i}=e,l=o?A.g7:"button";return(0,s.jsx)(l,{className:(0,b.cn)(E({variant:r,size:n,className:a})),ref:t,...i})});z.displayName="Button";var R=a(9873),C=a(2489);let O=R.fC,I=R.xz,D=R.x8,V=R.h_,M=l.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(R.aV,{className:(0,b.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...r,ref:t})});M.displayName=R.aV.displayName;let H=(0,v.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),L=l.forwardRef((e,t)=>{let{side:a="right",className:r,children:n,...o}=e;return(0,s.jsxs)(V,{children:[(0,s.jsx)(M,{}),(0,s.jsxs)(R.VY,{ref:t,className:(0,b.cn)(H({side:a}),r),...o,children:[(0,s.jsxs)(R.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,s.jsx)(C.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]}),n]})]})});L.displayName=R.VY.displayName;let Y=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,b.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...a})};Y.displayName="SheetHeader";let B=l.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(R.Dx,{ref:t,className:(0,b.cn)("text-lg font-semibold text-foreground",a),...r})});function U(){let[e,t]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=()=>{t(window.scrollY>0)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,s.jsx)("div",{className:(0,b.cn)("sticky top-0 z-30 flex justify-center w-full items-center transition-colors duration-200",e?"bg-white md:bg-transparent shadow-md md:shadow-none shadow-[#469f93]":""),children:(0,s.jsxs)("div",{className:"flex justify-end md:justify-center relative items-center py-6 md:p-6 w-5/6 lg:w-4/5",children:[(0,s.jsx)("a",{href:"/",className:" font-bold absolute text-[#3d8b80] text-xl top-[32%] left-0",children:"grincraft"}),(0,s.jsx)(N,{className:(0,b.cn)("hidden md:block bg-[#469f93] shadow-md text-white rounded-full p-2"),children:(0,s.jsxs)(w,{children:[(0,s.jsx)(S,{children:(0,s.jsx)(g.default,{href:"/",legacyBehavior:!0,passHref:!0,children:(0,s.jsx)(T,{className:k(),children:"Home"})})}),(0,s.jsx)(S,{children:(0,s.jsx)(g.default,{href:"#about",legacyBehavior:!0,passHref:!0,children:(0,s.jsx)(T,{className:k(),children:"About"})})}),(0,s.jsx)(S,{children:(0,s.jsx)(g.default,{href:"#services",legacyBehavior:!0,passHref:!0,children:(0,s.jsx)(T,{className:k(),children:"Services"})})}),(0,s.jsx)(S,{children:(0,s.jsx)(g.default,{href:"#book",legacyBehavior:!0,passHref:!0,children:(0,s.jsx)(T,{className:k(),children:"Appointment"})})})]})}),(0,s.jsxs)(O,{children:[(0,s.jsx)(I,{asChild:!0,children:(0,s.jsx)(z,{className:"md:hidden bg-[#3d8b80] text-white",variant:"outline",children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 9h16.5m-16.5 6.75h16.5"})})})}),(0,s.jsxs)(L,{side:"left",children:[(0,s.jsx)(Y,{children:(0,s.jsx)(B,{className:"text-[#3d8b80]",children:"grincraft"})}),(0,s.jsx)("div",{className:"grid gap-4 py-4 mt-4",children:(0,s.jsxs)("ul",{className:"flex flex-col justiy-center items-center gap-4",children:[(0,s.jsx)(D,{asChild:!0,children:(0,s.jsx)("a",{className:"transition-all",href:"/",children:"Home"})}),(0,s.jsx)(D,{asChild:!0,children:(0,s.jsx)("a",{className:"transition-all",href:"/#about",children:"About"})}),(0,s.jsx)(D,{asChild:!0,children:(0,s.jsx)("a",{className:"transition-all",href:"/#services",children:"Services"})}),(0,s.jsx)(D,{asChild:!0,children:(0,s.jsx)("a",{className:"transition-all",href:"#book",children:"Contact Us"})})]})})]})]})]})})}B.displayName=R.Dx.displayName,l.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(R.dk,{ref:t,className:(0,b.cn)("text-sm text-muted-foreground",a),...r})}).displayName=R.dk.displayName,l.forwardRef((e,t)=>{let{className:a,title:r,children:n,...o}=e;return(0,s.jsx)("li",{children:(0,s.jsx)(T,{asChild:!0,children:(0,s.jsxs)("a",{ref:t,className:(0,b.cn)("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",a),...o,children:[(0,s.jsx)("div",{className:"text-sm font-medium leading-none",children:r}),(0,s.jsx)("p",{className:"line-clamp-2 text-sm leading-snug text-muted-foreground",children:n})]})})})}).displayName="ListItem";let W=l.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("textarea",{className:(0,b.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:t,...r})});W.displayName="Textarea";let F=l.forwardRef((e,t)=>{let{className:a,type:r,...n}=e;return(0,s.jsx)("input",{type:r,className:(0,b.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",a),ref:t,...n})});F.displayName="Input";var G=function(){return(0,s.jsx)("section",{id:"book",className:"px-8 py-8 lg:py-16",children:(0,s.jsxs)("div",{className:"container mx-auto text-center",children:[(0,s.jsx)("h1",{color:"blue-gray",className:"mb-4 !text-3xl lg:!text-5xl",children:"We're Here to Help"}),(0,s.jsx)("p",{className:"mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500",children:"Whether it's a question about our services, a request for appointment, or suggestions for improvement, our team is eager to hear from you."}),(0,s.jsxs)("div",{className:"grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start",children:[(0,s.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5890806034145!2d73.87586067592643!3d18.456957371112875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebe0041ebf53%3A0x500cad1912749b12!2sGrincraft%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1740217531415!5m2!1sen!2sin",width:"100%",height:"100%",loading:"lazy"}),(0,s.jsxs)("form",{action:"#",className:"flex flex-col gap-4 lg:max-w-sm",children:[(0,s.jsx)("p",{className:"text-left !font-semibold !text-gray-600",children:"Get in touch"}),(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"mb-2 text-left font-medium !text-gray-900",children:"First Name"}),(0,s.jsx)(F,{color:"gray",placeholder:"First Name",name:"first-name",className:"focus:border-t-gray-900 !min-w-full"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"mb-2 text-left font-medium !text-gray-900",children:"Last Name"}),(0,s.jsx)(F,{color:"gray",placeholder:"Last Name",name:"last-name",className:"focus:border-t-gray-900 !min-w-full"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"mb-2 text-left font-medium !text-gray-900",children:"Your Email"}),(0,s.jsx)(F,{color:"gray",placeholder:"name@email.com",name:"email",className:"focus:border-t-gray-900 !min-w-full"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"mb-2 text-left font-medium !text-gray-900",children:"Your Message"}),(0,s.jsx)(W,{rows:6,color:"gray",placeholder:"Message",name:"message",className:"focus:border-t-gray-900 !min-w-full"})]}),(0,s.jsx)(z,{className:"w-full",color:"#3d8b80",children:"Send message"})]})]})]})})};function P(e){let{children:t}=e,{toast:a}=function(){let[e,t]=l.useState(x);return l.useEffect(()=>(u.push(t),()=>{let e=u.indexOf(t);e>-1&&u.splice(e,1)}),[e]),{...e,toast:p,dismiss:e=>h({type:"DISMISS_TOAST",toastId:e})}}();return(0,s.jsx)("html",{lang:"en",children:(0,s.jsxs)("body",{className:"".concat(n().variable," ").concat(i().variable," antialiased flex flex-col justify-start items-center w-full"),children:[(0,s.jsx)(U,{}),t,(0,s.jsx)("footer",{className:"w-full flex justify-center items-center",children:(0,s.jsx)(G,{})})]})})}},4508:function(e,t,a){"use strict";a.d(t,{cn:function(){return n}});var s=a(1994),r=a(3335);function n(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.m6)((0,s.W)(t))}},7960:function(){}},function(e){e.O(0,[983,46,501,971,117,744],function(){return e(e.s=3561)}),_N_E=e.O()}]);