(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[73],{8225:(A,e,t)=>{Promise.resolve().then(t.bind(t,3202)),Promise.resolve().then(t.bind(t,9836)),Promise.resolve().then(t.bind(t,1088)),Promise.resolve().then(t.t.bind(t,7970,23)),Promise.resolve().then(t.bind(t,9089)),Promise.resolve().then(t.bind(t,7293)),Promise.resolve().then(t.bind(t,9311)),Promise.resolve().then(t.bind(t,5658)),Promise.resolve().then(t.bind(t,6037)),Promise.resolve().then(t.bind(t,859)),Promise.resolve().then(t.bind(t,5472)),Promise.resolve().then(t.bind(t,6793))},3202:(A,e,t)=>{"use strict";t.d(e,{default:()=>s});var i=t(5155),n=t(2115),a=t(1110),o=t(5565);let r={src:"/landingzone//_next/static/media/secondary-illustration.c1867d80.svg",height:1012,width:1165,blurWidth:0,blurHeight:0};function s(A){let{thumb:e,thumbWidth:t,thumbHeight:s,thumbAlt:l,video:g,videoWidth:d,videoHeight:c}=A,[h,u]=(0,n.useState)(!1),m=(0,n.useRef)(null);return(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("div",{className:"pointer-events-none absolute bottom-8 left-1/2 -z-10 -ml-28 -translate-x-1/2 translate-y-1/2","aria-hidden":"true",children:(0,i.jsx)(o.default,{className:"md:max-w-none",src:r,width:1165,height:1012,alt:"Secondary illustration"})}),(0,i.jsxs)("button",{className:"group relative flex items-center justify-center rounded-2xl focus:outline-none focus-visible:ring focus-visible:ring-indigo-200",onClick:()=>{u(!0)},"aria-label":"Watch the video","data-aos":"fade-up","data-aos-delay":200,children:[(0,i.jsx)("figure",{className:"relative overflow-hidden rounded-2xl before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-gray-900 before:via-indigo-500/20 before:to-gray-900",children:(0,i.jsx)(o.default,{className:"opacity-50 grayscale",src:e,width:t,height:s,priority:!0,alt:l})}),(0,i.jsx)("span",{className:"pointer-events-none absolute p-2.5 before:absolute before:inset-0 before:rounded-full before:bg-gray-950 before:duration-300 group-hover:before:scale-110",children:(0,i.jsxs)("span",{className:"relative flex items-center gap-3",children:[(0,i.jsxs)("svg",{xmlns:"https://www.w3.org/2000/svg",width:20,height:20,fill:"none",children:[(0,i.jsx)("path",{fill:"url(#pla)",fillRule:"evenodd",d:"M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm3.5-10-5-3.5v7l5-3.5Z",clipRule:"evenodd"}),(0,i.jsx)("defs",{children:(0,i.jsxs)("linearGradient",{id:"pla",x1:10,x2:10,y1:0,y2:20,gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"#6366F1"}),(0,i.jsx)("stop",{offset:1,stopColor:"#6366F1",stopOpacity:".72"})]})})]}),(0,i.jsxs)("span",{className:"text-sm font-medium leading-tight text-gray-300",children:["Watch Demo",(0,i.jsx)("span",{className:"text-gray-600",children:" - "}),"3:47"]})]})})]}),(0,i.jsxs)(a.lG,{initialFocus:m,open:h,onClose:()=>u(!1),children:[(0,i.jsx)(a.Xi,{transition:!0,className:"fixed inset-0 z-[99999] bg-black/70 transition-opacity duration-300 ease-out data-[closed]:opacity-0"}),(0,i.jsx)("div",{className:"fixed inset-0 z-[99999] flex px-4 py-6 sm:px-6",children:(0,i.jsx)("div",{className:"mx-auto flex h-full max-w-6xl items-center",children:(0,i.jsx)(a.Lj,{transition:!0,className:"aspect-video max-h-full w-full overflow-hidden rounded-2xl bg-black shadow-2xl duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0",children:(0,i.jsxs)("video",{ref:m,width:d,height:c,loop:!0,controls:!0,children:[(0,i.jsx)("source",{src:g,type:"video/mp4"}),"Your browser does not support the video tag."]})})})})]})]})}},9836:(A,e,t)=>{"use strict";t.d(e,{default:()=>a});var i=t(5155),n=t(2115);function a(A){let{children:e,className:t=""}=A,a=(0,n.useRef)(null),o=function(){let[A,e]=(0,n.useState)({x:0,y:0});return(0,n.useEffect)(()=>{let A=A=>{e({x:A.clientX,y:A.clientY})};return window.addEventListener("mousemove",A),()=>{window.removeEventListener("mousemove",A)}},[]),A}(),r=(0,n.useRef)({x:0,y:0}),s=(0,n.useRef)({w:0,h:0}),[l,g]=(0,n.useState)([]);(0,n.useEffect)(()=>{a.current&&g(Array.from(a.current.children).map(A=>A))},[]),(0,n.useEffect)(()=>(d(),window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d)}),[l]),(0,n.useEffect)(()=>{c()},[o]);let d=()=>{a.current&&(s.current.w=a.current.offsetWidth,s.current.h=a.current.offsetHeight)},c=()=>{if(a.current){let A=a.current.getBoundingClientRect(),{w:e,h:t}=s.current,i=o.x-A.left,n=o.y-A.top;i<e&&i>0&&n<t&&n>0&&(r.current.x=i,r.current.y=n,l.forEach(e=>{let t=-(e.getBoundingClientRect().left-A.left)+r.current.x,i=-(e.getBoundingClientRect().top-A.top)+r.current.y;e.style.setProperty("--mouse-x","".concat(t,"px")),e.style.setProperty("--mouse-y","".concat(i,"px"))}))}};return(0,i.jsx)("div",{className:t,ref:a,children:e})}},1088:(A,e,t)=>{"use strict";t.d(e,{default:()=>s});var i=t(5155),n=t(2115);let a=()=>{let A=(0,n.useRef)(null),[e,t]=(0,n.useState)([]);(0,n.useEffect)(()=>{A.current&&t(Array.from(A.current.children))},[]),(0,n.useEffect)(()=>{let t=()=>{if(!e||e.length<1)return;let t=0;A.current&&(t=parseInt(window.getComputedStyle(A.current).getPropertyValue("grid-row-gap"))),e.forEach(A=>{if(!(A instanceof HTMLElement))return;let e=A.previousSibling;for(;e;){if(1===e.nodeType&&(A.style.marginTop="0",e instanceof HTMLElement&&i(e)===i(A))){A.style.marginTop=-(a(A)-o(e)-t)+"px";break}e=e.previousSibling}})};return t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[e]);let i=A=>A.getBoundingClientRect().left,a=A=>A.getBoundingClientRect().top+window.scrollY,o=A=>A.getBoundingClientRect().bottom+window.scrollY;return A};var o=t(5565);let r=[{img:{src:"/landingzone//_next/static/media/testimonial-01.7f77821c.jpg",height:72,width:72,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAC8D//EABsQAAMAAgMAAAAAAAAAAAAAAAECAwQRABJh/9oACAEBAAE/ADCa5UrdnL2yHp4DobHP/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:8},clientImg:{src:"/landingzone//_next/static/media/client-logo-01.f47a22f5.svg",height:36,width:80,blurWidth:0,blurHeight:0},name:"MaKayla P.",company:"Disney",content:"As a content creator, I was always on the lookout for a tool that could help me keep up with the demand. The AI-driven content tool has been a game-changer. It generates high-quality content in a fraction of the time it used to take me.",categories:[1,3,5]},{img:{src:"/landingzone//_next/static/media/testimonial-02.5e9b5721.jpg",height:72,width:72,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACgP//EAB0QAAIBBAMAAAAAAAAAAAAAAAESAgADBBEVIjH/2gAIAQEAAT8A5VM5VtrICE+w2APK/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:8},clientImg:{src:"/landingzone//_next/static/media/client-logo-02.39dfc4ca.svg",height:36,width:88,blurWidth:0,blurHeight:0},name:"Andrew K.",company:"Samsung",content:"I've tried several content generation tools, but this AI-driven tool is by far the best. It understands my brand's voice and consistently produces content that resonates with my audience!",categories:[1,2,4]},{img:{src:"/landingzone//_next/static/media/testimonial-03.b91cfd6c.jpg",height:72,width:72,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACOB//EABwQAAICAgMAAAAAAAAAAAAAAAECAxEAEhQhIv/aAAgBAQABPwASrwEi3joKxY2SfXVZ/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:8},clientImg:{src:"/landingzone//_next/static/media/client-logo-03.64ca38b5.svg",height:36,width:88,blurWidth:0,blurHeight:0},name:"Lucy D.",company:"Rio",content:"Content creation used to be a bottleneck in our workflow, but not anymore. This AI tool is intuitive and produces top-notch content every time. It's like having an extra team member who never sleeps! Definitely recommend.",categories:[1,2,5]},{img:{src:"/landingzone//_next/static/media/testimonial-04.58833fe0.jpg",height:72,width:72,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACfB//EAB0QAAEEAgMAAAAAAAAAAAAAAAIBAwQSAAURE1H/2gAIAQEAAT8AakaxnWqN3Ol6RRTryVRXzP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:8,blurHeight:8},clientImg:{src:"/landingzone//_next/static/media/client-logo-04.e1684703.svg",height:36,width:88,blurWidth:0,blurHeight:0},name:"Pavel M.",company:"Canon",content:"The quality of the content generated by this AI tool is outstanding. It has taken our content marketing to new heights, allowing us to publish more frequently without compromising on quality. Highly recommended for anyone.",categories:[1,4]},{img:{src:"/landingzone//_next/static/media/testimonial-05.cb381c8f.jpg",height:72,width:72,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACcH//EAB0QAAICAQUAAAAAAAAAAAAAAAIDBAUAARIyM2H/2gAIAQEAAT8AjWkxNm6xEFno1fYRebeOf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:8,blurHeight:8},clientImg:{src:"/landingzone//_next/static/media/client-logo-05.59b62378.svg",height:36,width:80,blurWidth:0,blurHeight:0},name:"Miriam E.",company:"Cadbury",content:"The AI-driven content tool has been a lifesaver for my marketing agency. We can now produce high-quality content for multiple clients quickly and efficiently. It's an invaluable asset to our team.",categories:[1,3,5]},{img:{src:"/landingzone//_next/static/media/testimonial-06.b91cfd6c.jpg",height:72,width:72,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACOB//EABwQAAICAgMAAAAAAAAAAAAAAAECAxEAEhQhIv/aAAgBAQABPwASrwEi3joKxY2SfXVZ/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:8},clientImg:{src:"/landingzone//_next/static/media/client-logo-06.50bf39d2.svg",height:36,width:88,blurWidth:0,blurHeight:0},name:"Eloise V.",company:"Maffell",content:"I'm amazed at how well this AI-driven content tool performs. It's incredibly versatile and can generate content for blogs, social media, and even product descriptions effortlessly. It's fantastic!",categories:[1,3]},{img:{src:"/landingzone//_next/static/media/testimonial-07.13c5bd3e.jpg",height:72,width:72,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACZB//EABwQAAICAgMAAAAAAAAAAAAAAAIEAxEAEgEhUf/aAAgBAQABPwBZsBaZkKbcLrW++PKz/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:8},clientImg:{src:"/landingzone//_next/static/media/client-logo-07.d24e249f.svg",height:36,width:110,blurWidth:0,blurHeight:0},name:"Pierre-Gilles L.",company:"Binance",content:"I was blown away by how easy it was to create my content using this tool! Within a few hours, I had a professional-looking platform up and running, and my client could not believe it.",categories:[1,2,5]},{img:{src:"/landingzone//_next/static/media/testimonial-08.18c337c7.jpg",height:72,width:72,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACkH//EAB4QAAICAAcAAAAAAAAAAAAAAAEDAgQABRESIUGR/9oACAEBAAE/AKyGjMWvNyclS12qJ486Ax//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:8,blurHeight:8},clientImg:{src:"/landingzone//_next/static/media/client-logo-08.efb2ca90.svg",height:36,width:89,blurWidth:0,blurHeight:0},name:"Danielle K.",company:"Forbes Inc.",content:"I've never been a fan of complicated website AI tools, which is why Open PRO is perfect for me. Its minimalist design and simple functionality make staying organized feel like second nature.",categories:[1,4]},{img:{src:"/landingzone//_next/static/media/testimonial-09.401c51f5.jpg",height:72,width:72,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACgD//EABsQAQACAgMAAAAAAAAAAAAAAAIEEgADAQUR/9oACAEBAAE/AFrnyetB2yCSF5SteCs//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:8},clientImg:{src:"/landingzone//_next/static/media/client-logo-09.90e2e7c3.svg",height:36,width:72,blurWidth:0,blurHeight:0},name:"Mary P.",company:"Ray Ban",content:"I've never been one for coding, so finding an AI tool that doesn't require any technical skills was a dream come true. This tool exceeded my expectations, and I'm proud to show off my new stuff to friends.",categories:[1,2]}];function s(){let A=a(),[e,t]=(0,n.useState)(1);return(0,i.jsx)("div",{className:"mx-auto max-w-6xl px-4 sm:px-6",children:(0,i.jsxs)("div",{className:"border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20",children:[(0,i.jsxs)("div",{className:"mx-auto max-w-3xl pb-12 text-center",children:[(0,i.jsx)("h2",{className:"animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl",children:"Don't take our word for it"}),(0,i.jsx)("p",{className:"text-lg text-indigo-200/65",children:"We provide tech-first solutions that empower decision-makers to build healthier and happier workspaces from anywhere in the world."})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"flex justify-center pb-12 max-md:hidden md:pb-16",children:(0,i.jsxs)("div",{className:"relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-gray-800/40 p-1",children:[(0,i.jsxs)("button",{className:"flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ".concat(1===e?"relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]":"opacity-65 transition-opacity hover:opacity-90"),"aria-pressed":1===e,onClick:()=>t(1),children:[(0,i.jsx)("svg",{className:"fill-current ".concat(1===e?"text-indigo-500":"text-gray-600"),xmlns:"https://www.w3.org/2000/svg",width:"16",height:16,children:(0,i.jsx)("path",{d:"M.062 10.003a1 1 0 0 1 1.947.455c-.019.08.01.152.078.19l5.83 3.333c.052.03.115.03.168 0l5.83-3.333a.163.163 0 0 0 .078-.188 1 1 0 0 1 1.947-.459 2.161 2.161 0 0 1-1.032 2.384l-5.83 3.331a2.168 2.168 0 0 1-2.154 0l-5.83-3.331a2.162 2.162 0 0 1-1.032-2.382Zm7.854-7.981-5.83 3.332a.17.17 0 0 0 0 .295l5.828 3.33c.054.031.118.031.17.002l5.83-3.333a.17.17 0 0 0 0-.294L8.085 2.023a.172.172 0 0 0-.17-.001ZM9.076.285l5.83 3.332c1.458.833 1.458 2.935 0 3.768l-5.83 3.333c-.667.38-1.485.38-2.153-.001l-5.83-3.332c-1.457-.833-1.457-2.935 0-3.767L6.925.285a2.173 2.173 0 0 1 2.15 0Z"})}),(0,i.jsx)("span",{children:"View All"})]}),(0,i.jsxs)("button",{className:"flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ".concat(2===e?"relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]":"opacity-65 transition-opacity hover:opacity-90"),"aria-pressed":2===e,onClick:()=>t(2),children:[(0,i.jsx)("svg",{className:"fill-current ".concat(2===e?"text-indigo-500":"text-gray-600"),xmlns:"https://www.w3.org/2000/svg",width:"16",height:16,children:(0,i.jsx)("path",{d:"M6.5 3.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM9 6.855A3.502 3.502 0 0 0 8 0a3.5 3.5 0 0 0-1 6.855v1.656L5.534 9.65a3.5 3.5 0 1 0 1.229 1.578L8 10.267l1.238.962a3.5 3.5 0 1 0 1.229-1.578L9 8.511V6.855Zm2.303 4.74c.005-.005.01-.01.013-.016l.012-.016a1.5 1.5 0 1 1-.025.032ZM3.5 11A1.497 1.497 0 0 1 5 12.5 1.5 1.5 0 1 1 3.5 11Z"})}),(0,i.jsx)("span",{children:"Web Apps"})]}),(0,i.jsxs)("button",{className:"flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ".concat(3===e?"relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]":"opacity-65 transition-opacity hover:opacity-90"),"aria-pressed":3===e,onClick:()=>t(3),children:[(0,i.jsx)("svg",{className:"fill-current ".concat(3===e?"text-indigo-500":"text-gray-600"),xmlns:"https://www.w3.org/2000/svg",width:"16",height:16,children:(0,i.jsx)("path",{d:"M2.428 10c.665-1.815 1.98-3.604 3.44-4.802-.6-1.807-1.443-3.079-2.29-3.18-1.91-.227-2.246 2.04-.174 2.962a1 1 0 1 1-.813 1.827C-1.407 5.028-.589-.491 3.815.032c1.605.191 2.925 1.811 3.79 4.07.979-.427 1.937-.51 2.735-.092.818.429 1.143 1.123 1.294 2.148.015.1.022.149.043.32.542-.537 1.003-.797 1.693-.622.64.162.894.493 1.195 1.147l.018.04a1 1 0 0 1 1.133 1.61c-.46.47-1.12.574-1.744.398a1.661 1.661 0 0 1-.87-.592 2.127 2.127 0 0 1-.224-.349 3.225 3.225 0 0 1-.55.477c-.377.253-.8.368-1.259.267-.993-.218-1.21-.779-1.367-2.05-.027-.22-.033-.262-.046-.353-.067-.452-.144-.617-.244-.67-.225-.118-.665-.013-1.206.278.297 1.243.475 2.587.516 3.941H15a1 1 0 0 1 0 2H8.68l-.025.285c-.173 1.918-.906 3.381-2.654 3.668-1.5.246-3.013-.47-3.677-1.858-.29-.637-.39-1.35-.342-2.095H1a1 1 0 0 1 0-2h1.428Zm2.11 0h2.175a18.602 18.602 0 0 0-.284-2.577c-.205.202-.408.42-.606.654A9.596 9.596 0 0 0 4.537 10Zm2.135 2H3.942c-.032.465.03.888.194 1.25.258.538.89.836 1.54.73.546-.09.888-.772.988-1.875L6.673 12Z"})}),(0,i.jsx)("span",{children:"eCommerce"})]}),(0,i.jsxs)("button",{className:"flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ".concat(4===e?"relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]":"opacity-65 transition-opacity hover:opacity-90"),"aria-pressed":4===e,onClick:()=>t(4),children:[(0,i.jsx)("svg",{className:"fill-current ".concat(4===e?"text-indigo-500":"text-gray-600"),xmlns:"https://www.w3.org/2000/svg",width:"16",height:16,children:(0,i.jsx)("path",{d:"M3.757 3.758a6 6 0 0 1 8.485 8.485 5.992 5.992 0 0 1-5.301 1.664 1 1 0 1 0-.351 1.969 8 8 0 1 0-4.247-2.218 1 1 0 0 0 1.415-.001L9.12 8.294v1.827a1 1 0 1 0 2 0v-4.2a.997.997 0 0 0-1-1.042H5.879a1 1 0 1 0 0 2h1.829l-4.599 4.598a6 6 0 0 1 .648-7.719Z"})}),(0,i.jsx)("span",{children:"Enteprise"})]}),(0,i.jsxs)("button",{className:"flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ".concat(5===e?"relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]":"opacity-65 transition-opacity hover:opacity-90"),"aria-pressed":5===e,onClick:()=>t(5),children:[(0,i.jsx)("svg",{className:"fill-current ".concat(5===e?"text-indigo-500":"text-gray-600"),xmlns:"https://www.w3.org/2000/svg",width:"16",height:16,children:(0,i.jsx)("path",{d:"M13.95.879a3 3 0 0 0-4.243 0L1.293 9.293a1 1 0 0 0-.274.51l-1 5a1 1 0 0 0 1.177 1.177l5-1a1 1 0 0 0 .511-.273l1.16-1.16a1 1 0 0 0-1.414-1.414l-.946.946-3.232.646.646-3.232 8.2-8.2a1 1 0 0 1 1.414 0l1.172 1.172a1 1 0 0 1 0 1.414l-.55.549a1 1 0 0 0 1.415 1.414l.55-.55a3 3 0 0 0 0-4.241L13.948.879ZM3.25 4.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm11.474 6.029-1.521-.752-.752-1.521c-.168-.341-.73-.341-.896 0l-.752 1.52-1.521.753a.498.498 0 0 0 0 .896l1.52.752.753 1.52a.5.5 0 0 0 .896 0l.752-1.52 1.52-.752a.498.498 0 0 0 0-.896Z"})}),(0,i.jsx)("span",{children:"Enteprise"})]})]})}),(0,i.jsx)("div",{className:"mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3",ref:A,children:r.map((A,t)=>(0,i.jsx)("div",{className:"group",children:(0,i.jsx)(l,{testimonial:A,category:e,children:A.content})},t))})]})]})})}function l(A){let{testimonial:e,category:t,children:n}=A;return(0,i.jsx)("article",{className:"relative rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-sm transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] ".concat(e.categories.includes(t)?"":"opacity-30"),children:(0,i.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,i.jsx)("div",{children:(0,i.jsx)(o.default,{src:e.clientImg,height:36,alt:"Client logo"})}),(0,i.jsx)("p",{className:"text-indigo-200/65 before:content-['“'] after:content-['”']",children:n}),(0,i.jsxs)("div",{className:"flex items-center gap-3",children:[(0,i.jsx)(o.default,{className:"inline-flex shrink-0 rounded-full",src:e.img,width:36,height:36,alt:e.name}),(0,i.jsxs)("div",{className:"text-sm font-medium text-gray-200",children:[(0,i.jsx)("span",{children:e.name}),(0,i.jsx)("span",{className:"text-gray-700",children:" - "}),(0,i.jsx)("a",{className:"text-indigo-200/65 transition-colors hover:text-indigo-500",href:"#0",children:e.company})]})]})]})})}},9089:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>i});let i={src:"/landingzone//_next/static/media/blurred-shape-gray.4be07fa5.svg",height:668,width:760,blurWidth:0,blurHeight:0}},7293:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>i});let i={src:"/landingzone//_next/static/media/blurred-shape.089e0f40.svg",height:668,width:760,blurWidth:0,blurHeight:0}},9311:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>i});let i={src:"/landingzone//_next/static/media/features.f513c5eb.png",height:768,width:2208,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAFVBMVEVKTWFMaXFeaKEyN1kvNEIkJG04PYQ3uK45AAAAB3RSTlMZABFORgdw6jq08AAAAAlwSFlzAAALEwAACxMBAJqcGAAAAB9JREFUeJwVxrkNAAAIxLDkePYfGeHKCAmKXVv9IQN6AiQAKSiO/qEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3}},5658:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>i});let i={src:"/landingzone//_next/static/media/hero-image-01.502bd808.jpg",height:1152,width:2208,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACIB//EAB0QAAEEAgMAAAAAAAAAAAAAAAIBAwQSAAUTIWH/2gAIAQEAAT8A2zQR2YfElbx2TL0iHtc//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:4}},6037:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>i});let i={src:"/landingzone//_next/static/media/page-illustration.3cec8b53.svg",height:594,width:846,blurWidth:0,blurHeight:0}},859:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>i});let i={src:"/landingzone//_next/static/media/workflow-01.052bc160.png",height:576,width:700,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAJ1BMVEVMaXEzOWwkL0ctNGI6M4NhYdgtNk83PnRHTac5QXcqNEw0P3FBR5laYphMAAAADXRSTlMAIhY/DRMxf0KswWFOaYNN7QAAAAlwSFlzAAALEwAACxMBAJqcGAAAADFJREFUeJw9yzkOACAMxMBNsrmA/78XIQSupjHwovuFVE8VBWR1WhxY5TAFSJfgX4ANEg0Ak1i1mPsAAAAASUVORK5CYII=",blurWidth:8,blurHeight:7}},5472:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>i});let i={src:"/landingzone//_next/static/media/workflow-02.31aa4f22.png",height:576,width:700,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAJ1BMVEVMaXFTXZ8iLTovNl8kLUVkaPspMVYsM10zOXQiKUYoME49QYooMUSJRpVvAAAADHRSTlMACDBXSh6paIG4mEab8Ig5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nEWKtxEAIBDDbH8i7T8vBxSoUSEBH5LPMeO6cqURkLVerlNt+JvlArABDTEAe82E3NoAAAAASUVORK5CYII=",blurWidth:8,blurHeight:7}},6793:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>i});let i={src:"/landingzone//_next/static/media/workflow-03.216f3b7f.png",height:576,width:700,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAMFBMVEVMaXEsN3pSVskUHjheXtxUWc0dJjNhYeg2O3tZW9cgJzQiKUYaJzQvMWs5QIQqM0dL2OQbAAAAD3RSTlMABhYMCz07IngsJ98nYZKaTPBdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nD3Lxw3AMBDEQO4FZdv9d2voIfE7IJykCEngllnDoeT7NSuwepuPjU21m/w+/BXeAL/SATckAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:7}}},A=>{var e=e=>A(A.s=e);A.O(0,[970,90,441,517,358],()=>e(8225)),_N_E=A.O()}]);