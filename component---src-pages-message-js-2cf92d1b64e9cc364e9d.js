(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{140:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(152),o=a.n(i),l=a(0),c=a.n(l),s=a(153),u=a(148),m=a(158),d=a(156),p=a(161);function f(){var e=o()(["\n  display: grid;\n  grid-template-columns: 60px auto;\n  color: black;\n  font-weight: bold;\n  width: 60%;\n  max-width: 1000px;\n  margin: auto;\n  @media (max-width: 1600px){\n    grid-template-columns: 85px auto;\n  }\n  @media (max-width: 720px){\n    width: 95%;\n    grid-template-columns: 100px auto;\n  }\n"]);return f=function(){return e},e}function h(){var e=o()([""]);return h=function(){return e},e}var y=Object(s.a)(p.a.div({start:{scale:0,opacity:.6},end:{scale:1,opacity:1},transition:{duration:210,ease:"linear"}}))(h()),g=s.a.div(f()),E=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={name:"",email:"",message:"",file:null,fileNum:0,stage:"start"},a}r()(t,e);var a=t.prototype;return a.submit=function(){fetch("http://localhost:5000/upload",{method:"POST",headers:{"Access-Control-Allow-Origin":"*"},mode:"cors",body:this.state.file}).then(function(e){return e.json()}).then(function(e){}).catch(function(e){alert(e)})},a.load=function(){var e=this;fetch("https://nodeapi12.herokuapp.com/files",{mode:"cors"}).then(function(e){return e.json()}).then(function(t){e.setState({fileNum:t.num})}).catch(function(e){alert("Connecting to API. Sever Maybe Asleep. Try Again.")})},a.componentDidMount=function(){this.load(),this.setState({stage:"end"})},a.render=function(){return c.a.createElement(u.a,null,c.a.createElement(d.a,{title:"Message",keywords:["gatsby","application","react"]}),c.a.createElement("div",{className:"container"},c.a.createElement(m.a,{active:"message"}),c.a.createElement(y,{pose:this.state.stage},c.a.createElement("form",{action:"https://nodeapi12.herokuapp.com/upload",encType:"multipart/form-data",method:"POST"},c.a.createElement(g,null,c.a.createElement("label",{htmlFor:"name"},"Name:"),c.a.createElement("input",{type:"text",className:"input",id:"name",name:"name"}),c.a.createElement("label",{htmlFor:"email"},"Email: "),c.a.createElement("input",{type:"email",className:"input",id:"email",name:"email"}),c.a.createElement("label",{htmlFor:"email"},"Message: "),c.a.createElement("input",{type:"text",className:"input",id:"text",name:"message"}),c.a.createElement("input",{type:"file",className:"input row bt",id:"file",name:"file"}),c.a.createElement("input",{type:"submit",className:"input bt bt-custom row",id:"submit",name:"Submit"}))),c.a.createElement("center",null,"Number of files: ",this.state.fileNum))))},t}(c.a.Component);t.default=E},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(145),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(147),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},148:function(e,t,a){"use strict";var n=a(149),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(146),s=(a(151),function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{margin:"0 auto",height:"100%",padding:"0px ",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null)))},data:n})});s.propTypes={children:l.a.node.isRequired},t.a=s},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Aayush Shrestha"}}}}},150:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(52),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},151:function(e,t,a){},156:function(e,t,a){"use strict";var n=a(157),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(160),s=a.n(c),u=a(146);function m(e){e.description;var t=e.lang,a=e.meta,r=e.keywords,o=e.title;return i.a.createElement(u.StaticQuery,{query:d,render:function(e){var n="A Portfolio Site";return i.a.createElement(s.a,{htmlAttributes:{lang:t},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(a)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m;var d="1025518380"},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Aayush Shrestha",description:"",author:"Aayush Shrestha"}}}}},158:function(e,t,a){"use strict";var n=a(4),r=a.n(n),i=a(0),o=a.n(i),l=a(152),c=a.n(l),s=(a(73),a(53),a(74),a(159),a(146)),u=a(153);function m(){var e=c()(["\ncolor: white;\nfont-weight: bold;\nfont-size: 1.3em;\nalign-self: stretch\n\n"]);return m=function(){return e},e}function d(){var e=c()(["display: grid; grid-template-columns: 1fr 1fr;"]);return d=function(){return e},e}function p(){var e=c()(["display: block;"]);return p=function(){return e},e}var f=Array.from(Array(20).keys()),h=u.a.span(p()),y=u.a.div(d()),g=u.a.div(m()),E=function(e){var t=e.active;return o.a.createElement("div",null,o.a.createElement(h,{className:"hide"},f.map(function(e){return o.a.createElement("span",{pose:"start",key:e,style:{background:"rgba(255 , 255, 255, 0.2)",top:Math.floor(95*Math.random())+"%",left:Math.floor(95*Math.random())+"%",position:"absolute",display:"block",width:"1em",height:"1em",bottom:0,borderRadius:"0.1em",animationDelay:"0s",overflow:"hidden",animationDuration:Math.floor(24*Math.random())+18+"s",animationIterationCount:"infinite"},className:"particle",time:Math.floor(24*Math.random())+12})})),o.a.createElement(y,null,o.a.createElement(g,null,o.a.createElement("span",{className:"blue"},"<"),"Aayush ",o.a.createElement("span",{className:"blue"},"/>")),o.a.createElement(s.Link,{to:"/Message",style:{filter:"message"===t?"drop-shadow(2px 3px 10px gray)":"",color:"message"===t?"#30ABE8":"",background:"message"===t?"white":"",justifySelf:"end"},className:"bt bt-round-white "},"Say Hi!")),o.a.createElement("div",{className:"navbar nav-grid"},o.a.createElement("i",{className:"logos material-icons"},"face"),o.a.createElement("ul",{className:"nav align-left-on-lg"},o.a.createElement("li",{className:"option"},o.a.createElement(s.Link,{to:"/"},o.a.createElement("center",null,o.a.createElement("i",{style:{filter:"home"===t?"drop-shadow(2px 3px 10px gray)":""},className:"material-icons lg-icon"},"home")),o.a.createElement("div",{style:{borderBottom:"home"===t?"2px solid white":"0"},className:"text"},"HOME"))),o.a.createElement("li",{className:"option"},o.a.createElement(s.Link,{to:"/Projects"},o.a.createElement("center",null,o.a.createElement("i",{style:{filter:"projects"===t?"drop-shadow(0 0 5px gray)":""},className:"material-icons lg-icon"},"work")),o.a.createElement("div",{style:{borderBottom:"projects"===t?"2px solid white":"0"},className:"text"},"PROJECTS"))),o.a.createElement("li",{className:"option"},o.a.createElement("a",{href:"https://github.com/aayush6194/aayush6194.github.io/raw/master/Resume.pdf"},o.a.createElement("center",null,o.a.createElement("i",{className:"material-icons lg-icon"},"account_circle")),o.a.createElement("div",{className:"text"},"RESUME"))))))},v=function(e){return o.a.createElement("div",{className:"nav-btn"},o.a.createElement("span",{className:"line center"}),o.a.createElement("span",{className:"line center"}),o.a.createElement("span",{className:"line center"}))},b=function(e){e.siteTitle;var t=e.active;return o.a.createElement("header",null,o.a.createElement("div",{className:"header"},o.a.createElement(E,{active:t}),o.a.createElement(v,null)))};b.propTypes={siteTitle:r.a.string},b.defaultProps={siteTitle:""};t.a=b}}]);
//# sourceMappingURL=component---src-pages-message-js-2cf92d1b64e9cc364e9d.js.map