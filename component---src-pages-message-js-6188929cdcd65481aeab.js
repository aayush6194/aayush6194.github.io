(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{139:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(145),s=a(147),l=a(157),m=a(155),u=a(163),d=a(153),p=Object(c.a)(u.a.div({start:{scale:0,opacity:.6},end:{scale:1,opacity:1},transition:{duration:210,ease:"linear"}})).withConfig({displayName:"Message__Box",componentId:"fb9kkg-0"})([""]),h=c.a.div.withConfig({displayName:"Message__Grid",componentId:"fb9kkg-1"})(["display:grid;grid-template-columns:60px auto;color:black;font-weight:bold;width:60%;max-width:1000px;margin:auto;@media (max-width:1600px){grid-template-columns:85px auto;}@media (max-width:720px){width:95%;grid-template-columns:100px auto;}"]),f=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={name:"",email:"",message:"",file:null,fileNum:0,stage:"start"},a}r()(t,e);var a=t.prototype;return a.submit=function(){fetch("http://localhost:5000/upload",{method:"POST",headers:{"Access-Control-Allow-Origin":"*"},mode:"cors",body:this.state.file}).then(function(e){return e.json()}).then(function(e){}).catch(function(e){alert(e)})},a.load=function(){var e=this;fetch("https://nodeapi12.herokuapp.com/files",{mode:"cors"}).then(function(e){return e.json()}).then(function(t){e.setState({fileNum:t.num})}).catch(function(e){alert("Connecting to API. Sever Maybe Asleep. Try Again.")})},a.componentDidMount=function(){this.load(),this.setState({stage:"end"})},a.render=function(){return o.a.createElement(s.a,null,o.a.createElement(m.a,{title:"Message",keywords:["gatsby","application","react"]}),o.a.createElement("div",{className:"container"},o.a.createElement(d.a,{active:"message"}),o.a.createElement(l.a,{active:"message"}),o.a.createElement(p,{pose:this.state.stage},o.a.createElement("form",{action:"https://nodeapi12.herokuapp.com/upload",encType:"multipart/form-data",method:"POST"},o.a.createElement(h,null,o.a.createElement("label",{htmlFor:"name"},"Name:"),o.a.createElement("input",{type:"text",className:"input",id:"name",name:"name"}),o.a.createElement("label",{htmlFor:"email"},"Email: "),o.a.createElement("input",{type:"email",className:"input",id:"email",name:"email"}),o.a.createElement("label",{htmlFor:"email"},"Message: "),o.a.createElement("input",{type:"text",className:"input",id:"text",name:"message"}),o.a.createElement("input",{type:"file",className:"input row",id:"file",name:"file"}),o.a.createElement("input",{type:"submit",className:"input bt bt-custom row btt",id:"submit",name:"Submit"}))),o.a.createElement("center",null,"Number of files: ",this.state.fileNum))))},t}(o.a.Component);t.default=f},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(144),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(151),m=a.n(l);a.d(t,"PageRenderer",function(){return m.a});var u=a(32);a.d(t,"parsePath",function(){return u.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=(a(148),a(145)),o=a(149),c=a.n(o),s=a(150),l=a.n(s),m=i.a.div.withConfig({displayName:"layout__MyWrapper",componentId:"ii2kc2-0"})(["background-attachment:fixed;background-repeat:no-repeat;background-position:bottom right;min-height:100vh;background-image:url(",");background-image:url(",");background-size:cover;"],c.a,function(e){return e.background});t.a=function(e){var t=e.children,a=e.darkMode;return r.a.createElement(m,{background:a?l.a:c.a,style:{margin:"0px auto ",paddingTop:0}},r.a.createElement("main",null,t))}},148:function(e,t,a){},149:function(e,t,a){e.exports=a.p+"static/b-9b2a1cc05362770bdf9a933a0975331d.svg"},150:function(e,t,a){e.exports=a.p+"static/b-dark-9361296ffb203245985632e2816a886c.svg"},151:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},153:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(145),o=a(146).Link,c=i.a.div.withConfig({displayName:"sidebar__Nav",componentId:"dru0ie-0"})(["top:0em;left:0;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);font-size:.8em;height:100vh;display:grid;padding:.3em;position:fixed;grid-template-rows:1fr 1fr 1fr;place-items:center;background:",";z-index:10;@media (max-width:860px){height:65px;width:100vw;top:calc(100% - 65px);grid-template-columns:1fr 1fr 1fr;grid-template-rows:1fr;}"],function(e){return e.background});t.a=function(e){var t=e.active,a=e.darkMode;return r.a.createElement("div",null,r.a.createElement(c,{background:a?"black":"#156CEC"},r.a.createElement(o,{className:"nav-item txt-md center-items",to:"/"},r.a.createElement("i",{className:"material-icons lg-icon "+("home"===t?"active-nav":"")},"home"),r.a.createElement("div",null,"Home")),r.a.createElement(o,{className:"nav-item txt-md center-items",to:"/Projects"}," ",r.a.createElement("i",{className:"material-icons lg-icon "+("project"===t?"active-nav":"")},"work"),r.a.createElement("div",null,"Projects")),r.a.createElement("a",{className:"nav-item txt-md center-items",href:"https://github.com/aayush6194/aayush6194.github.io/raw/master/Resume.pdf"},r.a.createElement("i",{className:"material-icons lg-icon "},"account_circle"),r.a.createElement("div",null,"Resume"))))}},154:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(53),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},155:function(e,t,a){"use strict";var n=a(156),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(162),l=a.n(s),m=a(146);function u(e){e.description;var t=e.lang,a=e.meta,r=e.keywords,o=e.title;return i.a.createElement(m.StaticQuery,{query:d,render:function(e){var n="A Portfolio Site";return i.a.createElement(l.a,{htmlAttributes:{lang:t},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(a)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u;var d="1025518380"},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Aayush Shrestha",description:"",author:"Aayush Shrestha"}}}}},157:function(e,t,a){"use strict";var n=a(4),r=a.n(n),i=a(0),o=a.n(i),c=(a(73),a(51),a(74),a(161),a(146)),s=a(145),l=Array.from(Array(20).keys()),m=s.a.span.withConfig({displayName:"Navbar__Animation",componentId:"sc-1hgh83i-0"})(["display:block;"]),u=s.a.div.withConfig({displayName:"Navbar__Box",componentId:"sc-1hgh83i-1"})(["display:grid;grid-template-columns:1fr 1fr;"]),d=s.a.div.withConfig({displayName:"Navbar__Name",componentId:"sc-1hgh83i-2"})(["color:white;font-weight:bold;font-size:1.3em;align-self:stretch"]),p=function(e){var t=e.darkMode,a=e.active;return o.a.createElement("div",null,o.a.createElement(m,{className:"hide"},l.map(function(e){return o.a.createElement("span",{pose:"start",key:e,style:{background:"rgba(255 , 255, 255, 0.2)",top:Math.floor(95*Math.random())+"%",left:Math.floor(95*Math.random())+"%",position:"absolute",display:"block",width:"1em",height:"1em",bottom:0,borderRadius:"0.1em",animationDelay:"0s",overflow:"hidden",animationDuration:Math.floor(24*Math.random())+18+"s",animationIterationCount:"infinite"},className:"particle",time:Math.floor(24*Math.random())+12})})),o.a.createElement(u,null,o.a.createElement(d,null,o.a.createElement("span",{className:"blue"},"<"),"Aayush ",o.a.createElement("span",{className:"blue"},"/>")),o.a.createElement(c.Link,{to:"/Message",style:{filter:"message"===a?"drop-shadow(2px 3px 10px gray)":"",color:"message"===a?"#30ABE8":"",background:"message"===a?"white":"",justifySelf:"end"},className:"bt bt-round-white "+(t&&"dark-btn")},"Say Hi!")),o.a.createElement("div",null))},h=function(e){e.siteTitle;var t=e.active,a=e.darkMode;return o.a.createElement("header",null,o.a.createElement("div",{className:"header"},o.a.createElement(p,{active:t,darkMode:a})))};h.propTypes={siteTitle:r.a.string},h.defaultProps={siteTitle:""};t.a=h}}]);
//# sourceMappingURL=component---src-pages-message-js-6188929cdcd65481aeab.js.map