(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{143:function(e,t,a){"use strict";a.r(t);a(157);var n=a(0),r=a.n(n),i=a(147),o=a(161),c=(a(190),a(192),a(7)),s=a.n(c),l=a(194),d=a.n(l),m=a(145),u=a(167),p=a(195),g=a.n(p),h=a(196),f=a.n(h),b=a(152),v=m.a.a.withConfig({displayName:"ProjectList__Lin",componentId:"sc-1phrmca-0"})([""]),y=["#18A7EE","#18EE42","#EED018","#F35F90","#D45FF3","#0288D1","#FFEB3B","#795548","#FF5722","#303F9F","#303F9F","#303F9F"],k=m.a.div.withConfig({displayName:"ProjectList__Box",componentId:"sc-1phrmca-1"})(["display:inline-block;margin:2px;background:",";padding:0.3em 0.5em;border-radius:7px;"],function(e){return e.colr}),E=m.a.div.withConfig({displayName:"ProjectList__ImageBox",componentId:"sc-1phrmca-2"})(["display:grid;background:#30ABE8;background:",";height:100%;"],function(e){return e.background}),w=Object(m.a)(u.a.div({start:{scale:0},end:{scale:1},transition:{duration:210,ease:"linear"}})).withConfig({displayName:"ProjectList__Wrapper",componentId:"sc-1phrmca-3"})(["background:#30ABE8;background:",""],function(e){return e.background}),x=m.a.div.withConfig({displayName:"ProjectList__Description",componentId:"sc-1phrmca-4"})(["background:#005A9C;background-image:linear-gradient( rgba(0,90,156,0.8),rgba(0,90,156,0.8) ),url(",");background:linear-gradient( ",","," ),url(",");background-size:100% 100%;opacity:0.8;color:white;padding:1em;overflow:hidden;text-overflow:ellipsis;display:grid;grid-template-rows:1fr auto;"],f.a,function(e){return e.background},function(e){return e.background},f.a),N=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={stage:"end"},a}s()(t,e);var a=t.prototype;return a.componentDidCatch=function(e,t){console(e),console(t)},a.render=function(){var e=this.props,t=e.darkMode,a=e.index,n=e.fluid,i=this.props.data,o=i.description,c=i.title,s=i.link;return r.a.createElement(g.a,null,r.a.createElement(w,{pose:this.state.stage,className:"home grid align-center dense project-container",background:(t?"black":"#30ABE8")+" "},r.a.createElement("div",{className:a%2==0?"left":"right project-element "},r.a.createElement(E,{background:(t?"black":"#30ABE8")+" "},r.a.createElement(d.a,{fluid:n,style:{background:"transparent"}}))),r.a.createElement(x,{background:"rgba(0, "+(t?"0, 0":"90, 156")+", 0.8)"},r.a.createElement("div",null,r.a.createElement("h2",{className:"center-text"},c),r.a.createElement("i",{className:"material-icons md-icon"},"description")," ",o,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("i",{className:"material-icons md-icon"},"code"),this.props.data.code.map(function(e){return r.a.createElement(k,{key:e.toString(),colr:y[Math.floor(Math.random()*y.length)]}," ",e," ")}),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("i",{className:"material-icons md-icon"},"link")," ",r.a.createElement(v,{href:s},s))),r.a.createElement("span",{onClick:function(){return function(e){var t=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):void 0;if(void 0===t)return alert("Login First"),!1;alert("Feature coming soon!");var a=t.email,n=t.id;b.a.like({pid:e,id:n,email:a}).catch(function(e){return console.log(e)})}(a)}},r.a.createElement("i",{className:"fa fa-heart md-icon","aria-hidden":"true"})))))},t}(r.a.Component),S=a(159),M=a(154),C=a(197),j=a(158);a.d(t,"pageQuery",function(){return A});var I=C.proj,A="1682947771";t.default=function(e){var t=e.data,a=Object(n.useState)(!1),c=a[0],s=a[1];return Object(n.useEffect)(function(){var e="true"===(!!localStorage.getItem("dark-mode")&&localStorage.getItem("dark-mode"));s(e)},[]),r.a.createElement(i.a,{darkMode:c},r.a.createElement(S.a,{title:"Projects",keywords:["gatsby","application","react"]}),r.a.createElement(o.a,{active:"project",darkMode:c}),r.a.createElement(M.a,{active:"project",darkMode:c}),r.a.createElement("div",{className:"container2"},I.map(function(e,a){return r.a.createElement(N,{darkMode:c,key:a,index:a,className:"row main-grid",fluid:t[e.name].childImageSharp.fluid,data:e})})),r.a.createElement(j.a,{toggleDarkMode:function(e){s("dark"===e),localStorage.setItem("dark-mode","dark"===e)},darkMode:c}))}},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(144),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(151),d=a.n(l);a.d(t,"PageRenderer",function(){return d.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var u=r.a.createContext({}),p=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=(a(148),a(145)),o=a(149),c=a.n(o),s=a(150),l=a.n(s),d=i.a.div.withConfig({displayName:"layout__MyWrapper",componentId:"ii2kc2-0"})(["background-attachment:fixed;background-repeat:no-repeat;background-position:bottom right;min-height:100vh;background-image:url(",");background-image:url(",");background-size:cover;"],c.a,function(e){return e.background});t.a=function(e){var t=e.children,a=e.darkMode;return r.a.createElement(d,{background:a?l.a:c.a,style:{margin:"0px auto ",paddingTop:0}},r.a.createElement("main",null,t))}},148:function(e,t,a){},149:function(e,t,a){e.exports=a.p+"static/b-9b2a1cc05362770bdf9a933a0975331d.svg"},150:function(e,t,a){e.exports=a.p+"static/b-dark-9361296ffb203245985632e2816a886c.svg"},151:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},152:function(e,t,a){"use strict";a(157);function n(){return{"Content-Type":"application/json",token:localStorage.getItem("token")?localStorage.getItem("token"):null}}function r(e,t){return fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()})}var i="https://api.aayushh.com/api",o={visit:i+"/visited",signin:i+"/signin",auth:i+"/auth",message:i+"/message",like:i+"/like"};t.a={visited:function(e){var t=e.email;return r(o.visited,{email:t})},signin:function(e){var t=e.email,a=e.fname,n=e.lname,i=e.id,c=e.photo;return r(o.signin,{email:t,fname:a,lname:n,id:i,photo:c})},auth:function(){return e={},fetch(o.auth,{method:"POST",headers:n(),body:JSON.stringify(e)}).then(function(e){return e.json()});var e},message:function(e){var t=e.name,a=e.email,n=e.subject,i=e.message;return r(o.message,{name:t,email:a,subject:n,message:i})},like:function(e){var t=e.email,a=e.pid,n=e.id;return r(o.like,{email:t,pid:a,id:n})}}},154:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(145),o=a(146),c=a(156),s=a.n(c),l=a(164),d=a(152),m=i.a.button.withConfig({displayName:"sidebar__MyBtn",componentId:"sc-1r0sell-0"})(["background:transparent;border:0;color:white;font-size:1.2em;@media(max-width:860px){font-size:1em;}"]),u=i.a.img.withConfig({displayName:"sidebar__MyImg",componentId:"sc-1r0sell-1"})(["width:3em;@media(max-width:860px){width:2.5em;}"]),p=function(e){var t=e.res;return r.a.createElement(l.GoogleLogin,{clientId:"432904370571-10sna4o5st6k2aee0q3p09bt05qjgbng.apps.googleusercontent.com",buttonText:"Login",render:function(e){return r.a.createElement(m,{onClick:e.onClick,disabled:e.disabled},r.a.createElement(u,{src:s.a}),r.a.createElement("div",{className:"label"},"Login"))},onSuccess:t,onFailure:t,cookiePolicy:"single_host_origin"})},g=o.Link,h=i.a.div.withConfig({displayName:"sidebar__Nav",componentId:"sc-1r0sell-2"})(["top:0em;left:0;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);font-size:.8em;height:100vh;display:grid;padding:.3em;position:fixed;grid-template-rows:1fr 1fr 1fr 1fr;place-items:center;background:",";z-index:10;@media (max-width:860px){height:70px;width:100vw;top:calc(100% - 70px);grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:1fr;}"],function(e){return e.background});t.a=function(e){var t=e.active,a=e.darkMode,i=Object(n.useState)(null),o=i[0],c=i[1],s=Object(n.useState)(!1),l=(s[0],s[1],function(e){console.log(e);var t=e.givenName,a=e.familyName,n=e.email,r=e.imageUrl;return{id:e.googleId,fname:t,lname:a,email:n,photo:r}});return Object(n.useEffect)(function(){try{var e=localStorage.getItem("user")&&null!=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null;if(null===e)return!1;d.a.signin(e).catch(function(e){return console.log("Error Connecting to the server!")}),c(e)}catch(t){c(null)}},[]),r.a.createElement("div",null,r.a.createElement(h,{background:a?"black":"#156CEC"},r.a.createElement(g,{className:"nav-item txt-md center-items",to:"/"},r.a.createElement("i",{className:"material-icons lg-icon "+("home"===t?"active-nav":"")},"home"),r.a.createElement("div",null,"Home")),r.a.createElement(g,{className:"nav-item txt-md center-items",to:"/Projects"}," ",r.a.createElement("i",{className:"material-icons lg-icon "+("project"===t?"active-nav":"")},"work"),r.a.createElement("div",null,"Projects")),r.a.createElement("a",{className:"nav-item txt-md center-items",href:"https://github.com/aayush6194/aayush6194.github.io/raw/master/Resume.pdf"},r.a.createElement("i",{className:"material-icons lg-icon "},"account_circle"),r.a.createElement("div",null,"Resume")),r.a.createElement("span",{className:"nav-item txt-md center-items"},o?r.a.createElement("div",{style:{display:"grid",placeItems:"center",textAlign:"center"}},r.a.createElement("img",{style:{borderRadius:"50%",width:"3.5em"},src:o.photo}),r.a.createElement("div",{style:{color:"white",textOverflow:"ellipsis",textSize:"1.5em",lineHeight:"100$"}},o.fname)):r.a.createElement(p,{res:function(e){var t=l(e.profileObj);c(t),localStorage.setItem("user",JSON.stringify(t)),d.a.signin(t).catch(function(e){return console.log("Error Connecting to the server!")})}}))))}},155:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(53),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},156:function(e,t,a){e.exports=a.p+"static/google-8b201685859c6b291fb39019e19896fd.png"},158:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(145).a.div.withConfig({displayName:"dark-mode__FloatBtn",componentId:"ribr3h-0"})(["position:fixed;bottom:1em;right:10px;display:grid;grid-template-columns:auto auto;border:0.15em solid white;border-radius:50px;background:#30ABE8;background:",";color:white;text-align:center;@media( max-width:860px){bottom:5em;}"],function(e){return e.background});t.a=function(e){var t=e.toggleDarkMode,a=e.darkMode;return r.a.createElement(i,{background:a?"black":"#30ABE8"},r.a.createElement("div",{onClick:function(){t("dark")},style:{padding:".5em 1em"}},r.a.createElement("i",{className:"fas fa-moon white-txt "+(a&&"active-nav")})),r.a.createElement("div",{style:{borderLeft:"2px solid white",padding:".5em 1em"},onClick:function(){return t("notDark")}},r.a.createElement("i",{className:"fas fa-sun white-txt "+(!a&&"active-nav")})))}},159:function(e,t,a){"use strict";var n=a(160),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(166),l=a.n(s),d=a(146);function m(e){e.description;var t=e.lang,a=e.meta,r=e.keywords,o=e.title;return i.a.createElement(d.StaticQuery,{query:u,render:function(e){var n="A Portfolio Site";return i.a.createElement(l.a,{htmlAttributes:{lang:t},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(a)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m;var u="1025518380"},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Aayush Shrestha",description:"",author:"Aayush Shrestha"}}}}},161:function(e,t,a){"use strict";var n=a(4),r=a.n(n),i=a(0),o=a.n(i),c=(a(73),a(51),a(74),a(165),a(146)),s=a(145),l=Array.from(Array(20).keys()),d=s.a.span.withConfig({displayName:"Navbar__Animation",componentId:"sc-1hgh83i-0"})(["display:block;"]),m=s.a.div.withConfig({displayName:"Navbar__Box",componentId:"sc-1hgh83i-1"})(["display:grid;grid-template-columns:1fr 1fr;"]),u=s.a.div.withConfig({displayName:"Navbar__Name",componentId:"sc-1hgh83i-2"})(["color:white;font-weight:bold;font-size:1.3em;align-self:stretch"]),p=function(e){var t=e.darkMode,a=e.active;return o.a.createElement("div",null,o.a.createElement(d,{className:"hide"},l.map(function(e){return o.a.createElement("span",{pose:"start",key:e,style:{background:"rgba(255 , 255, 255, 0.2)",top:Math.floor(95*Math.random())+"%",left:Math.floor(95*Math.random())+"%",position:"absolute",display:"block",width:"1em",height:"1em",bottom:0,borderRadius:"0.1em",animationDelay:"0s",overflow:"hidden",animationDuration:Math.floor(24*Math.random())+18+"s",animationIterationCount:"infinite"},className:"particle",time:Math.floor(24*Math.random())+12})})),o.a.createElement(m,null,o.a.createElement(u,null,o.a.createElement("span",{className:"blue"},"<"),"Aayush ",o.a.createElement("span",{className:"blue"},"/>")),o.a.createElement(c.Link,{to:"/Message",style:{filter:"message"===a?"drop-shadow(2px 3px 10px gray)":"",color:"message"===a?"#30ABE8":"",background:"message"===a?"white":"",justifySelf:"end"},className:"bt bt-round-white "+(t&&"dark-btn")},"Say Hi!")),o.a.createElement("div",null))},g=function(e){e.siteTitle;var t=e.active,a=e.darkMode;return o.a.createElement("header",null,o.a.createElement("div",{className:"header"},o.a.createElement(p,{active:t,darkMode:a})))};g.propTypes={siteTitle:r.a.string},g.defaultProps={siteTitle:""};t.a=g},196:function(e,t,a){e.exports=a.p+"static/step-79c0f665ec28949bee3f5dd85f58d9c6.svg"},197:function(e){e.exports={proj:[{name:"image5",title:"Dreammy 2.0",description:"A social site with logged features with tokens, content uploads, private chat, friend suggesstions",link:"https://dreammy.aayushh.com",code:["Express","ReactJs","Redux","Styled-Components","Materialize","MongoDB","Google Cloud"]},{name:"image7",title:"Url Shortner",description:"A service that shortens the any URL and performs redirects to the actual site",link:"https://github.com/aayush6194/shorten-url",code:["Next.js","NodeJs","Express","MongoDB"]},{name:"image6",title:"Google Image Extractor",description:"A webscraping app that extracts google images related to the searched keyword",link:"https://github.com/aayush6194/google-image-extractor",code:["NodeJs","EJS","Puppeteer"]},{name:"image8",title:"Game Searcher",description:"A frontend angular application that implements game database API to search games. Additionally, enables users to create game wishlist within the app",link:"https://github.com/aayush6194/game-searcher",code:["Angular","Rxjs","ngrx","NodeJs","Express","MongoDB"]},{name:"image4",title:"Calender App",description:"A Calender App: IN PROGRESS",link:"https://calendar.aayushh.com",code:["NodeJs","ReactJs","Redux","Styled-Components","MongoDB"]},{name:"image1",title:"To-do List",description:"A to-do list application built on Materialize CSS; uses PHP as the serverside language for logins, signup and adding/deleting to the list with MySQL as the database.",link:"http://todolistphp.gearhostpreview.com",code:["PHP","Materialize","MySQL","Javascript"]},{name:"image2",title:"ParkStash",description:"A full responsive side created using css grid for ParkStash",link:"",code:["CSS GRID"]},{name:"image3",title:"Auction Website",description:"A responsive ReactJs app to stimulate just the front end for an auction website.",link:"",code:["ReactJs"]}]}}}]);
//# sourceMappingURL=component---src-pages-projects-js-e98c2bc55c22b22b523f.js.map