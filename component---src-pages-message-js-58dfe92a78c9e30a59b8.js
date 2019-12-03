(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{139:function(e,t,a){"use strict";a.r(t);a(157);var n=a(7),i=a.n(n),r=a(0),o=a.n(r),s=a(145),c=a(147),l=a(161),m=a(159),d=a(167),u=a(154),g=a(158),p=a(152),h=Object(s.a)(d.a.div({start:{scale:0,opacity:.6},end:{scale:1,opacity:1},transition:{duration:210,ease:"linear"}})).withConfig({displayName:"Message__Box",componentId:"dxlmz5-0"})([""]),f=s.a.div.withConfig({displayName:"Message__Grid",componentId:"dxlmz5-1"})(["display:grid;grid-template-columns:60px auto;color:white;font-weight:bold;width:60%;max-width:1000px;margin:auto;@media (max-width:1600px){grid-template-columns:85px auto;}@media (max-width:720px){width:95%;grid-template-columns:100px auto;}"]),b=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleDarkMode=function(e){localStorage.setItem("dark-mode","dark"===e),a.setState({darkMode:"dark"===e})},a.change=function(e){var t;a.setState(((t={})[e.target.name]=e.target.value,t))},a.state={name:"",email:"",message:"",subject:"",file:null,fileNum:0,stage:"start",darkMode:!1},a}i()(t,e);var a=t.prototype;return a.getDarkMode=function(){var e="true"===(!!localStorage.getItem("dark-mode")&&localStorage.getItem("dark-mode"));this.setState({darkMode:e})},a.componentDidCatch=function(e,t){console(e),console(t)},a.submit=function(){var e=this,t=this.state,a=t.name,n=t.email,i=t.message,r={name:a,email:n,subject:t.subject,message:i};p.a.message(r).then(function(t){t.success?alert("submitted"):alert("Error"),e.setState({name:"",email:"",message:"",subject:""})}).catch(function(e){return alert(e)})},a.componentDidMount=function(){this.getDarkMode(),this.setState({stage:"end"})},a.render=function(){var e=this,t=this.state.darkMode;return o.a.createElement(c.a,{darkMode:t},o.a.createElement(m.a,{title:"Message",keywords:["gatsby","application","react"]}),o.a.createElement("div",{className:"container"},o.a.createElement(u.a,{active:"message",darkMode:t}),o.a.createElement(l.a,{active:"message",darkMode:t}),o.a.createElement(h,{pose:this.state.stage},o.a.createElement("div",null,o.a.createElement(f,null,o.a.createElement("label",{htmlFor:"name"},"Name:"),o.a.createElement("input",{type:"text",className:"input",id:"name",name:"name",onChange:this.change}),o.a.createElement("label",{htmlFor:"email"},"Email: "),o.a.createElement("input",{type:"email",className:"input",id:"email",name:"email",onChange:this.change}),o.a.createElement("label",{htmlFor:"subject"},"Subject: "),o.a.createElement("input",{type:"text",className:"input",id:"text",name:"message",onChange:this.change}),o.a.createElement("label",{htmlFor:"email"},"Message: "),o.a.createElement("input",{type:"text",className:"input",id:"text",name:"subject",onChange:this.change}),o.a.createElement("input",{type:"file",className:"input row",id:"file",name:"file",onChange:this.change}),o.a.createElement("input",{type:"submit",className:"input bt bt-custom row btt "+(t&&"dark-btn"),id:"submit",name:"Submit",onClick:function(){return e.submit()}}))),o.a.createElement("center",null,"Number of files: ",this.state.fileNum)),o.a.createElement(g.a,{toggleDarkMode:this.toggleDarkMode,darkMode:t})))},t}(o.a.Component);t.default=b},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return g});var n=a(0),i=a.n(n),r=a(4),o=a.n(r),s=a(144),c=a.n(s);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var l=a(151),m=a.n(l);a.d(t,"PageRenderer",function(){return m.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var u=i.a.createContext({}),g=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=(a(148),a(145)),o=a(149),s=a.n(o),c=a(150),l=a.n(c),m=r.a.div.withConfig({displayName:"layout__MyWrapper",componentId:"ii2kc2-0"})(["background-attachment:fixed;background-repeat:no-repeat;background-position:bottom right;min-height:100vh;background-image:url(",");background-image:url(",");background-size:cover;"],s.a,function(e){return e.background});t.a=function(e){var t=e.children,a=e.darkMode;return i.a.createElement(m,{background:a?l.a:s.a,style:{margin:"0px auto ",paddingTop:0}},i.a.createElement("main",null,t))}},148:function(e,t,a){},149:function(e,t,a){e.exports=a.p+"static/b-9b2a1cc05362770bdf9a933a0975331d.svg"},150:function(e,t,a){e.exports=a.p+"static/b-dark-9361296ffb203245985632e2816a886c.svg"},151:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},152:function(e,t,a){"use strict";a(157);function n(){return{"Content-Type":"application/json",token:localStorage.getItem("token")?localStorage.getItem("token"):null}}function i(e,t){return fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()})}var r="https://api.aayushh.com/api",o={visit:r+"/visited",signin:r+"/signin",auth:r+"/auth",message:r+"/message",like:r+"/like"};t.a={visited:function(e){var t=e.email;return i(o.visited,{email:t})},signin:function(e){var t=e.email,a=e.fname,n=e.lname,r=e.id,s=e.photo;return i(o.signin,{email:t,fname:a,lname:n,id:r,photo:s})},auth:function(){return e={},fetch(o.auth,{method:"POST",headers:n(),body:JSON.stringify(e)}).then(function(e){return e.json()});var e},message:function(e){var t=e.name,a=e.email,n=e.subject,r=e.message;return i(o.message,{name:t,email:a,subject:n,message:r})},like:function(e){var t=e.email,a=e.pid,n=e.id;return i(o.like,{email:t,pid:a,id:n})}}},154:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(145),o=a(146),s=a(156),c=a.n(s),l=a(164),m=a(152),d=r.a.button.withConfig({displayName:"sidebar__MyBtn",componentId:"sc-1r0sell-0"})(["background:transparent;border:0;color:white;font-size:1.2em;@media(max-width:860px){font-size:1em;}"]),u=r.a.img.withConfig({displayName:"sidebar__MyImg",componentId:"sc-1r0sell-1"})(["width:3em;@media(max-width:860px){width:2.5em;}"]),g=function(e){var t=e.res;return i.a.createElement(l.GoogleLogin,{clientId:"432904370571-10sna4o5st6k2aee0q3p09bt05qjgbng.apps.googleusercontent.com",buttonText:"Login",render:function(e){return i.a.createElement(d,{onClick:e.onClick,disabled:e.disabled},i.a.createElement(u,{src:c.a}),i.a.createElement("div",{className:"label"},"Login"))},onSuccess:t,onFailure:t,cookiePolicy:"single_host_origin"})},p=o.Link,h=r.a.div.withConfig({displayName:"sidebar__Nav",componentId:"sc-1r0sell-2"})(["top:0em;left:0;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);font-size:.8em;height:100vh;display:grid;padding:.3em;position:fixed;grid-template-rows:1fr 1fr 1fr 1fr;place-items:center;background:",";z-index:10;@media (max-width:860px){height:70px;width:100vw;top:calc(100% - 70px);grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:1fr;}"],function(e){return e.background});t.a=function(e){var t=e.active,a=e.darkMode,r=Object(n.useState)(null),o=r[0],s=r[1],c=Object(n.useState)(!1),l=(c[0],c[1],function(e){console.log(e);var t=e.givenName,a=e.familyName,n=e.email,i=e.imageUrl;return{id:e.googleId,fname:t,lname:a,email:n,photo:i}});return Object(n.useEffect)(function(){try{var e=localStorage.getItem("user")&&null!=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null;if(null===e)return!1;m.a.signin(e).catch(function(e){return console.log("Error Connecting to the server!")}),s(e)}catch(t){s(null)}},[]),i.a.createElement("div",null,i.a.createElement(h,{background:a?"black":"#156CEC"},i.a.createElement(p,{className:"nav-item txt-md center-items",to:"/"},i.a.createElement("i",{className:"material-icons lg-icon "+("home"===t?"active-nav":"")},"home"),i.a.createElement("div",null,"Home")),i.a.createElement(p,{className:"nav-item txt-md center-items",to:"/Projects"}," ",i.a.createElement("i",{className:"material-icons lg-icon "+("project"===t?"active-nav":"")},"work"),i.a.createElement("div",null,"Projects")),i.a.createElement("a",{className:"nav-item txt-md center-items",href:"https://github.com/aayush6194/aayush6194.github.io/raw/master/Resume.pdf"},i.a.createElement("i",{className:"material-icons lg-icon "},"account_circle"),i.a.createElement("div",null,"Resume")),i.a.createElement("span",{className:"nav-item txt-md center-items"},o?i.a.createElement("div",{style:{display:"grid",placeItems:"center",textAlign:"center"}},i.a.createElement("img",{style:{borderRadius:"50%",width:"3.5em"},src:o.photo}),i.a.createElement("div",{style:{color:"white",textOverflow:"ellipsis",textSize:"1.5em",lineHeight:"100$"}},o.fname)):i.a.createElement(g,{res:function(e){var t=l(e.profileObj);s(t),localStorage.setItem("user",JSON.stringify(t)),m.a.signin(t).catch(function(e){return console.log("Error Connecting to the server!")})}}))))}},155:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),s=a(53),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},156:function(e,t,a){e.exports=a.p+"static/google-8b201685859c6b291fb39019e19896fd.png"},158:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(145).a.div.withConfig({displayName:"dark-mode__FloatBtn",componentId:"ribr3h-0"})(["position:fixed;bottom:1em;right:10px;display:grid;grid-template-columns:auto auto;border:0.15em solid white;border-radius:50px;background:#30ABE8;background:",";color:white;text-align:center;@media( max-width:860px){bottom:5em;}"],function(e){return e.background});t.a=function(e){var t=e.toggleDarkMode,a=e.darkMode;return i.a.createElement(r,{background:a?"black":"#30ABE8"},i.a.createElement("div",{onClick:function(){t("dark")},style:{padding:".5em 1em"}},i.a.createElement("i",{className:"fas fa-moon white-txt "+(a&&"active-nav")})),i.a.createElement("div",{style:{borderLeft:"2px solid white",padding:".5em 1em"},onClick:function(){return t("notDark")}},i.a.createElement("i",{className:"fas fa-sun white-txt "+(!a&&"active-nav")})))}},159:function(e,t,a){"use strict";var n=a(160),i=a(0),r=a.n(i),o=a(4),s=a.n(o),c=a(166),l=a.n(c),m=a(146);function d(e){e.description;var t=e.lang,a=e.meta,i=e.keywords,o=e.title;return r.a.createElement(m.StaticQuery,{query:u,render:function(e){var n="A Portfolio Site";return r.a.createElement(l.a,{htmlAttributes:{lang:t},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(a)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d;var u="1025518380"},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Aayush Shrestha",description:"",author:"Aayush Shrestha"}}}}},161:function(e,t,a){"use strict";var n=a(4),i=a.n(n),r=a(0),o=a.n(r),s=(a(73),a(51),a(74),a(165),a(146)),c=a(145),l=Array.from(Array(20).keys()),m=c.a.span.withConfig({displayName:"Navbar__Animation",componentId:"sc-1hgh83i-0"})(["display:block;"]),d=c.a.div.withConfig({displayName:"Navbar__Box",componentId:"sc-1hgh83i-1"})(["display:grid;grid-template-columns:1fr 1fr;"]),u=c.a.div.withConfig({displayName:"Navbar__Name",componentId:"sc-1hgh83i-2"})(["color:white;font-weight:bold;font-size:1.3em;align-self:stretch"]),g=function(e){var t=e.darkMode,a=e.active;return o.a.createElement("div",null,o.a.createElement(m,{className:"hide"},l.map(function(e){return o.a.createElement("span",{pose:"start",key:e,style:{background:"rgba(255 , 255, 255, 0.2)",top:Math.floor(95*Math.random())+"%",left:Math.floor(95*Math.random())+"%",position:"absolute",display:"block",width:"1em",height:"1em",bottom:0,borderRadius:"0.1em",animationDelay:"0s",overflow:"hidden",animationDuration:Math.floor(24*Math.random())+18+"s",animationIterationCount:"infinite"},className:"particle",time:Math.floor(24*Math.random())+12})})),o.a.createElement(d,null,o.a.createElement(u,null,o.a.createElement("span",{className:"blue"},"<"),"Aayush ",o.a.createElement("span",{className:"blue"},"/>")),o.a.createElement(s.Link,{to:"/Message",style:{filter:"message"===a?"drop-shadow(2px 3px 10px gray)":"",color:"message"===a?"#30ABE8":"",background:"message"===a?"white":"",justifySelf:"end"},className:"bt bt-round-white "+(t&&"dark-btn")},"Say Hi!")),o.a.createElement("div",null))},p=function(e){e.siteTitle;var t=e.active,a=e.darkMode;return o.a.createElement("header",null,o.a.createElement("div",{className:"header"},o.a.createElement(g,{active:t,darkMode:a})))};p.propTypes={siteTitle:i.a.string},p.defaultProps={siteTitle:""};t.a=p}}]);
//# sourceMappingURL=component---src-pages-message-js-58dfe92a78c9e30a59b8.js.map