import{n as a,j as m,L as d,r as b,R as w,B as I,a as k,b as L}from"./vendor.7933111f.js";const B=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}};B();const g=a("span")(t=>({textTransform:"capitalize",fontFamily:'"Marck Script", cursive',color:"rgba(178, 159, 129, 0.2)",fontSize:"20em",margin:"0",padding:"0",lineHeight:"0.7em",position:"absolute",top:"0",left:"50%",transform:t.words==="1"?"translateX(-50%)":"translateX(-65%)",zIndex:"-1",whiteSpace:"pre-line",userSelect:"none","& > span":{marginLeft:"40%"}}));var h="/assets/dividerLine.8e5ec7d1.svg",p="/assets/linkedin.5d25fbb4.svg",v="/assets/mail.15a6ad4e.svg",y="/assets/github.41b9d4cc.svg";const e=m.exports.jsx,r=m.exports.jsxs,x=m.exports.Fragment,E=t=>{const n=a("div")({display:"flex",justifyContent:t.align==="left"?"":"center",alignItems:"center",marginTop:"1em","& > a":{margin:"0 0.5em","& > img":{width:"2.5em"}}});return r(n,{children:[e("a",{href:"https://github.com/ariqfraser",target:"_blank",rel:"noreferrer",children:e("img",{src:y,alt:"GitHub: ariqfraser"})}),e("a",{href:"mailto:ariqfraser@gmail.com",target:"_blank",rel:"noreferrer",children:e("img",{src:v,alt:"email: ariqfraser@gmail.com"})}),e("a",{href:"https://www.linkedin.com/in/ariqfraser/",target:"_blank",rel:"noreferrer",children:e("img",{src:p,alt:"linkedin: Ariq Fraser"})})]})},q=()=>{const t=a("section")({width:"80%",marginLeft:"10%",marginTop:"5em",marginBottom:"5em",position:"relative","&>h2":{padding:"1em 0 4em 0"}}),n=a("div")({display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridColumnGap:"2em",padding:"0 4em","& > div:nth-of-type(2) > svg":{width:"80%"}}),s=a("div")({gridColumn:"span 2"}),l={col:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},row:{display:"flex",justifyContent:"center",alignItems:"center"}};return r(t,{children:[e("h2",{children:"about"}),e(g,{words:"1",children:"about"}),r(n,{children:[e("div",{style:{height:400,width:300,backgroundColor:"var(--b3)"},children:"image"}),r(s,{children:[r("div",{style:l.col,children:[e("h3",{children:"AboutMe"}),e("img",{src:h,alt:"divider",width:"30%",style:{marginBottom:"1em"}})]}),e("p",{children:"Et veniam nisi aliqua commodo ad cillum commodo ullamco voluptate. Proident ad exercitation nostrud sunt aute tempor enim aute duis adipisicing fugiat voluptate. Veniam adipisicing exercitation sint ad aliquip commodo aliquip ex do veniam labore consectetur quis ex. Irure anim quis dolore veniam. Est consectetur do pariatur occaecat esse fugiat occaecat nostrud amet laborum culpa. Pariatur dolor ipsum ad ut tempor proident aliqua velit quis. Id excepteur adipisicing occaecat incididunt labore fugiat fugiat deserunt sit dolore consequat."}),e(E,{}),r("div",{style:l.row,children:[e("div",{style:{width:"8px",height:"8px",borderRadius:8,backgroundColor:"var(--b2)",margin:"16px 8px"}}),e("div",{style:{width:"8px",height:"8px",borderRadius:8,backgroundColor:"var(--b2)",margin:"16px 8px"}}),e("div",{style:{width:"8px",height:"8px",borderRadius:8,backgroundColor:"var(--b2)",margin:"16px 8px"}})]}),e("h4",{children:"Skills"}),e("h4",{children:"Currently Learning"})]})]})]})},C=()=>{const t=a("header")({display:"flex",alignItems:"center",justifyContent:"center",height:"105vh"}),n=a("div")({display:"grid",gridTemplateColumns:"1fr 1fr",alignItems:"center",gap:"10vw","& > div:nth-of-type(2) > svg":{width:"80%"}}),s=a("div")({"& > h1":{margin:0,fontFamily:"'Raleway', sans-serif",fontSize:"2em",color:"#fff",fontWeight:"300","& > span":{fontFamily:"'Marck Script', cursive",color:"var(--b1)",fontSize:"3em"}},"& > a":{marginTop:"1em"}});return e(t,{children:r(n,{children:[r(s,{children:[r("h1",{children:["Hello, I'm ",e("br",{}),e("span",{children:"Ariq Fraser"}),e("br",{}),"web designer & developer"]}),e("a",{id:"heroButtonPos"})]}),e("div",{children:e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"508",height:"395",viewBox:"0 0 508 395",children:r("g",{transform:"translate(-1109 -380)",children:[e("circle",{cx:"151.5",cy:"151.5",r:"151.5",transform:"translate(1109 380)",fill:"#efcdaa"}),e("circle",{cx:"110",cy:"110",r:"110",transform:"translate(1397 555)",fill:"#e6bda1"}),e("circle",{cx:"66.5",cy:"66.5",r:"66.5",transform:"translate(1426 405)",fill:"#d19a73"})]})})})]})})};var S="/assets/logoSVG.29258d05.svg";const j=()=>{const t=a("nav")({zIndex:3,display:"flex",position:"fixed",alignItems:"center",padding:"1em 2vw",width:"96vw","&:hover > div ":{marginTop:"0 !important"}}),n=a("div")({display:"flex",marginLeft:"auto",transition:"500ms ease-in-out",marginTop:"0","& > a > div":{display:"flex",alignItems:"center",textDecoration:"none",color:"#fff",outline:"none",border:"2px solid var(--b3)",borderRadius:"3px",padding:"4px 8px",backgroundColor:"var(--b3)",transition:"200ms ease-in-out","&:hover":{color:"var(--b3)",backgroundColor:"transparent"}},"& > a":{margin:"0 3em",fontSize:"1em",textDecoration:"none",color:"#fff","&:hover":{color:"var(--b1)"},transition:"300ms ease-in-out"}});return r(t,{children:[e("img",{src:S,width:"60px",alt:"Ariq Fraser Logo - Click to go to top"}),r(n,{id:"NavLinks",children:[e("a",{href:"#12",children:"Projects"}),e(d,{to:"",children:"About"}),e(d,{to:"",children:"Contact"}),e(d,{to:"",children:e("div",{children:"Resume"})})]})]})};var G="/assets/react.2ccce27e.svg",N="/assets/mongo.70df5d9d.svg",R="/assets/firebase.ae0b96ec.svg",T="/assets/nodejs.d85c0bc8.svg";const M=t=>{const n=a("section")({width:"80%",marginLeft:"10%",position:"relative","&>h2":{padding:"4em 0"}}),s=a("div")({display:"grid",gridTemplateColumns:"repeat(3, 1fr)",alignItems:"center",gridColumnGap:"",rowGap:"4em",padding:"0 4em","& > div:nth-of-type(2) > svg":{width:"80%"}});return r(n,{children:[r("h2",{children:[t.title," ",t.title2]}),r(g,{children:[t.title,t.title2!==void 0?`
`:"",e("span",{children:t.title2})]}),e(s,{children:t.children})]})},u=t=>{const n=a("div")({gridColumn:"span 1","&>p":{maxWidth:"80%"},"&>img":{marginBottom:"1.25em",width:"60%"}}),s=a("div")({display:"flex",fill:"var(--b1)",color:"var(--b1)",userSelect:"none",alignItems:"center","&>img":{height:54,margin:"1.5em 12px"}});let l;return r(n,{children:[e("h3",{children:t.title}),e("img",{src:h,alt:"divider"}),e("p",{children:t.children}),e(s,{children:t.icons.map((i,o)=>(i==="react"&&(l=G),i==="mongo"&&(l=N),i==="firebase"&&(l=R),i==="nodejs"&&(l=T),i==="express"?e("p",{style:{fontFamily:"Open Sans",fontWeight:300,color:"var(--b2)",fontSize:"2em"},children:"Express"},o):e("img",{src:l,alt:`tech used: ${i}`},o)))})]})},f=t=>{const n=a("div")({gridColumn:"span 2"});return r(n,{children:[e("h3",{children:t.title}),e("p",{children:t.children})]})},P=()=>{const t=a("a")({position:"fixed",height:46,display:"flex",alignItems:"center",transition:"400ms ease-in-out","&>img":{}});return r(x,{children:[e(t,{id:"socialGithub",href:"https://github.com/ariqfraser",target:"_blank",rel:"noreferrer",children:e("img",{src:y,alt:"GitHub: ariqfraser"})}),e(t,{id:"socialMail",href:"mailto:ariqfraser@gmail.com",target:"_blank",rel:"noreferrer",children:e("img",{src:v,alt:"email: ariqfraser@gmail.com"})}),e(t,{id:"socialLinkedIn",href:"https://www.linkedin.com/in/ariqfraser/",target:"_blank",rel:"noreferrer",children:e("img",{src:p,alt:"linkedin: Ariq Fraser"})})]})};function F(){return b.exports.useEffect(()=>{const t=()=>{const i=document.getElementById("heroButtonPos").offsetLeft,o=document.getElementById("heroButtonPos").offsetTop+10;console.log(i,o),document.getElementById("socialGithub").style.top=o+"px",document.getElementById("socialGithub").style.left=i+"px",document.getElementById("socialMail").style.top=o+"px",document.getElementById("socialMail").style.left=i+60+"px",document.getElementById("socialLinkedIn").style.top=o+"px",document.getElementById("socialLinkedIn").style.left=i+130+"px",document.getElementById("socialGithub").style.filter="scale(1)",document.getElementById("socialMail").style.filter="scale(1)",document.getElementById("socialLinkedIn").style.filter="scale(1)"},n=()=>{document.getElementById("socialGithub").style.top="90vh",document.getElementById("socialGithub").style.left="20px",document.getElementById("socialMail").style.top="85vh",document.getElementById("socialMail").style.left="20px",document.getElementById("socialLinkedIn").style.top="80vh",document.getElementById("socialLinkedIn").style.left="20px",document.getElementById("socialGithub").style.filter="scale(0.5)",document.getElementById("socialMail").style.filter="scale(0.5)",document.getElementById("socialLinkedIn").style.filter="scale(0.5)"},s=document.getElementById("NavLinks"),l=()=>{window.pageYOffset>=500&&s.classList.add("nav-hide"),window.pageYOffset<500&&s.classList.remove("nav-hide"),window.pageYOffset===0&&t(),window.pageYOffset>0&&n()};t(),window.addEventListener("scroll",()=>{l()}),window.addEventListener("resize",l)},[]),r(x,{children:[e(j,{}),e(P,{}),e(C,{}),r(M,{title:"featured",title2:"projects",children:[e(u,{title:"Project Title",icons:["nodejs","express","react","firebase"],children:"Nulla deserunt labore qui aliqua officia. Est cupidatat et enim exercitation ad ipsum commodo aute occaecat ad exercitation fugiat ut. Ullamco et aliquip id excepteur reprehenderit deserunt amet in. Nisi culpa laboris irure et nulla in dolor exercitation amet qui minim tempor sunt dolore. Nulla est ex tempor in ipsum officia consectetur eiusmod."}),e(f,{}),e(f,{}),e(u,{title:"Project Title",icons:["nodejs","express","react","firebase"],children:"Nulla deserunt labore qui aliqua officia. Est cupidatat et enim exercitation ad ipsum commodo aute occaecat ad exercitation fugiat ut. Ullamco et aliquip id excepteur reprehenderit deserunt amet in. Nisi culpa laboris irure et nulla in dolor exercitation amet qui minim tempor sunt dolore. Nulla est ex tempor in ipsum officia consectetur eiusmod."})]}),e(q,{})]})}w.render(e(I,{children:e(k,{children:e(L,{path:"/",element:e(F,{})})})}),document.getElementById("root"));
