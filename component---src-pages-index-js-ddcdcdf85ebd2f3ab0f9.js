(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(153),l=a.n(c),s=a(148),u=a(161);function m(){var e=l()([""]);return m=function(){return e},e}var d=Object(s.a)(u.a.div({start:{x:"-100%",opacity:0},end:{x:"0%",opacity:1},transition:{duration:210,ease:"linear"}}))(m()),p=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={stage:"start"},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setState({stage:"end"})},a.render=function(){return o.a.createElement("div",{className:"home grid align-center"},o.a.createElement("div",{className:"content-container align-left"},o.a.createElement(d,{pose:this.state.stage},"Hello, I am ",o.a.createElement("span",{className:"highlight"},"Aayush!")," I am a junior at the ULM pursuring a Computer Science degree. I am a web developer, focused on ",o.a.createElement("span",{className:"highlight-blue"},"MERN")," stack development. I love building responsive, progressive web applications.",o.a.createElement("br",null),o.a.createElement("br",null),"Check out some of my projects, my resume or send me an email.")))},t}(o.a.Component),f=a(158),h=a(146),g=function(){return o.a.createElement("div",{className:"grid-mobile align-left-on-lg"},o.a.createElement("a",{href:"https://github.com/aayush6194"},o.a.createElement("button",{className:"bt bt-custom center-sm expand-sm"},"GitHub")),o.a.createElement("a",{href:"mailto:aayush6194@gmail.com"},o.a.createElement("button",{className:"bt bt-custom center-sm expand-sm"},"Email")),o.a.createElement("a",{href:"https://www.linkedin.com/in/aayush-shrestha-b4b1b9158/"},o.a.createElement("button",{className:"bt bt-custom center-sm expand-sm"},"LinkedIn")))},E=function(){return o.a.createElement("div",{className:"grid link-grid"},o.a.createElement(g,{className:"align-left align-center"}),o.a.createElement("div",{className:"align-left align-end"},o.a.createElement(h.Link,{to:"/Projects"},o.a.createElement("span",{className:"bold-white"},"Check My Projects!"),o.a.createElement("i",{className:"material-icons shine"},"details"))))},y=a(149),v=a(156);function b(){var e=l()(["\n  position: absolute;\n  left: calc(50%);\n  top: calc(50% + 15px);\n"]);return b=function(){return e},e}function w(){var e=l()(["\n  position: absolute;\n  left: calc(50% - 40px);\n  top: calc(50% - 40px);\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  padding: 40px;\n  border: 4px;\n  border-style: solid solid hidden hidden;\n  border-radius: 50%;\n  animation: rot 2s linear infinite;\n\n  @keyframes rot {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n    }\n  }\n"]);return w=function(){return e},e}var N=s.a.div(w()),x=s.a.div(b()),k=function(){return o.a.createElement("div",null,o.a.createElement(N,null),o.a.createElement(x,null,"Loading..."))},M=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={active:!0},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){},a.render=function(){return this.state.active?o.a.createElement(y.a,null,o.a.createElement(v.a,{title:"Home",keywords:["gatsby","application","react"]}),o.a.createElement("div",{className:"container main-grid"},o.a.createElement(f.a,{active:!0}),o.a.createElement(p,{className:"row"}),o.a.createElement(E,null))):o.a.createElement("div",null,o.a.createElement("h1",null,"Welcome"),o.a.createElement(k,null))},t}(o.a.Component);t.default=M},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(145),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(147),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},149:function(e,t,a){"use strict";var n=a(150),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(146),s=(a(152),function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{margin:"0 auto",height:"100%",padding:"0px ",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null)))},data:n})});s.propTypes={children:c.a.node.isRequired},t.a=s},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Aayush Shrestha"}}}}},151:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(52),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},152:function(e,t,a){},156:function(e,t,a){"use strict";var n=a(157),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(160),s=a.n(l),u=a(146);function m(e){e.description;var t=e.lang,a=e.meta,r=e.keywords,o=e.title;return i.a.createElement(u.StaticQuery,{query:d,render:function(e){var n="A Portfolio Site";return i.a.createElement(s.a,{htmlAttributes:{lang:t},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(a)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m;var d="1025518380"},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Aayush Shrestha",description:"",author:"Aayush Shrestha"}}}}},158:function(e,t,a){"use strict";var n=a(4),r=a.n(n),i=a(0),o=a.n(i),c=a(153),l=a.n(c),s=(a(73),a(53),a(74),a(159),a(146)),u=a(148);function m(){var e=l()(["\n display: block;\n  "]);return m=function(){return e},e}function d(){var e=l()(["\n  position: absolute;\n  display: block;\n  width: 1em;\n  height: 1em;\n  animation: "," "," linear infinite;\n  bottom: 0px;\n  border-radius: 0.1em;\n  animation-delay: 0s;\n  overflow: hidden !important;"]);return d=function(){return e},e}function p(){var e=l()(["\n  0%{\n      transform: translateY(0) rotate(0deg); opacity: 1;\n    }\n  100%{\n      transform: translateY(-1000px) rotate(720deg);\n      opacity: 0;\n    }\n"]);return p=function(){return e},e}var f=Array.from(Array(30).keys()),h=["rgba(48, 171, 232 , 0.2)","rgba(255 , 255, 255, 0.2)"],g=Object(u.b)(p()),E=u.a.span.attrs({})(d(),g,function(e){return e.time+"s"}),y=u.a.span(m()),v=function(e){var t=e.active;return o.a.createElement("div",null,o.a.createElement(y,{className:"hide"},f.map(function(e){return o.a.createElement(E,{key:e,style:{background:h[Math.floor(2*Math.random())],top:Math.floor(95*Math.random())+"%",left:Math.floor(95*Math.random())+"%"},time:Math.floor(24*Math.random())+12})})),o.a.createElement("div",{className:"rightt"},o.a.createElement(s.Link,{to:"/Message",style:{filter:"message"===t?"drop-shadow(2px 3px 10px gray)":"",color:"message"===t?"#30ABE8":"",background:"message"===t?"white":""},className:"bt bt-round-white "},"Say Hi!")),o.a.createElement("div",{className:"navbar nav-grid"},o.a.createElement("i",{className:"logos material-icons"},"face"),o.a.createElement("ul",{className:"nav align-left-on-lg"},o.a.createElement("li",{className:"option"},o.a.createElement(s.Link,{to:"/"},o.a.createElement("center",null,o.a.createElement("i",{style:{filter:"home"===t?"drop-shadow(2px 3px 10px gray)":""},className:"material-icons lg-icon"},"home")),o.a.createElement("div",{style:{borderBottom:"home"===t?"2px solid white":"0"},className:"text"},"HOME"))),o.a.createElement("li",{className:"option"},o.a.createElement(s.Link,{to:"/Projects"},o.a.createElement("center",null,o.a.createElement("i",{style:{filter:"projects"===t?"drop-shadow(0 0 5px gray)":""},className:"material-icons lg-icon"},"work")),o.a.createElement("div",{style:{borderBottom:"projects"===t?"2px solid white":"0"},className:"text"},"PROJECTS"))),o.a.createElement("li",{className:"option"},o.a.createElement("a",{href:"https://github.com/aayush6194/aayush6194.github.io/raw/master/Resume.pdf"},o.a.createElement("center",null,o.a.createElement("i",{className:"material-icons lg-icon"},"account_circle")),o.a.createElement("div",{className:"text"},"RESUME"))))))},b=function(e){return o.a.createElement("div",{className:"nav-btn"},o.a.createElement("span",{className:"line center"}),o.a.createElement("span",{className:"line center"}),o.a.createElement("span",{className:"line center"}))},w=function(e){e.siteTitle;var t=e.active;return o.a.createElement("header",null,o.a.createElement("div",{className:"header"},o.a.createElement(v,{active:t}),o.a.createElement(b,null)))};w.propTypes={siteTitle:r.a.string},w.defaultProps={siteTitle:""};t.a=w}}]);
//# sourceMappingURL=component---src-pages-index-js-ddcdcdf85ebd2f3ab0f9.js.map