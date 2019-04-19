(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(152),c=a.n(l),s=a(153),u=a(165),m=a(174),d=a.n(m);a(175);function p(){var e=c()(["\n    font-size: 40px;\n    font-weigt: bold;\n"]);return p=function(){return e},e}function f(){var e=c()(["\nfont-size: 1em;\nfont-family: 'Montserrat', sans-serif;\n\n&:before {\n content: '';\n width: ",";\n height: 100%;\n position: absolute;\n background: #30ABE8;\n transition: 0.37s;\n  transition-timing-function: cubic-bezier(2.0, 0.5, 0.1, 0.5);\n}\n"]);return f=function(){return e},e}var h=Object(s.a)(u.a.div({}))(f(),function(e){return e.width}),g=s.a.div(p()),E=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={stage:"end",width:"100%"},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.setState({stage:"end"}),setTimeout(function(){return e.setState({width:"0%"})},50)},a.render=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"home grid align-center"},o.a.createElement("div",{className:"content-container align-left",style:{}},o.a.createElement(d.a,{left:!0},o.a.createElement(h,null,o.a.createElement("h1",{style:{margin:0,marginBottom:"9px"}},"Hello, I am Aayush!"),"I am a junior at the ULM pursuing a Computer Science degree. I am a web developer, focused on ",o.a.createElement("span",null,"MERN")," stack development. I love building responsive, progressive web apps.",o.a.createElement("br",null)," Check out some of my projects, my resume or send me an email.",o.a.createElement(g,null))))))},t}(o.a.Component),y=a(159),v=a(146),b=function(){return o.a.createElement("div",{className:"grid-mobile align-left-on-lg"},o.a.createElement("a",{href:"https://github.com/aayush6194"},o.a.createElement("button",{className:"bt bt-custom center-sm expand-sm"},"GitHub")),o.a.createElement("a",{href:"mailto:aayush6194@gmail.com"},o.a.createElement("button",{className:"bt bt-custom center-sm expand-sm"},"Email")),o.a.createElement("a",{href:"https://www.linkedin.com/in/aayush-shrestha-b4b1b9158/"},o.a.createElement("button",{className:"bt bt-custom center-sm expand-sm"},"LinkedIn")))},w=function(){return o.a.createElement("div",{className:"grid link-grid"},o.a.createElement(b,{className:"align-left align-center"}),o.a.createElement("div",{className:"align-left align-end"},o.a.createElement(v.Link,{to:"/Projects"},o.a.createElement("span",{className:"bold-white"},"Check My Projects!"),o.a.createElement("i",{className:"material-icons shine"},"details"))))},N=a(148),x=a(157);function k(){var e=c()(["\n  position: absolute;\n  left: calc(50%);\n  top: calc(50% + 15px);\n"]);return k=function(){return e},e}function M(){var e=c()(["\n  position: absolute;\n  left: calc(50% - 40px);\n  top: calc(50% - 40px);\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  padding: 40px;\n  border: 4px;\n  border-style: solid solid hidden hidden;\n  border-radius: 50%;\n  animation: rot 2s linear infinite;\n\n  @keyframes rot {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n    }\n  }\n"]);return M=function(){return e},e}var S=s.a.div(M()),q=s.a.div(k()),T=function(){return o.a.createElement("div",null,o.a.createElement(S,null),o.a.createElement(q,null,"Loading..."))},j=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={active:!0},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){},a.render=function(){return this.state.active?o.a.createElement(N.a,null,o.a.createElement(x.a,{title:"Home",keywords:["gatsby","application","react"]}),o.a.createElement("div",{className:"container main-grid"},o.a.createElement(y.a,{active:!0}),o.a.createElement(E,{className:"row"}),o.a.createElement(w,null))):o.a.createElement("div",null,o.a.createElement("h1",null,"Welcome"),o.a.createElement(T,null))},t}(o.a.Component);t.default=j},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(145),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(147),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},148:function(e,t,a){"use strict";var n=a(149),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(146),s=(a(151),function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{margin:"0 auto",height:"100%",padding:"0px ",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null)))},data:n})});s.propTypes={children:l.a.node.isRequired},t.a=s},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Aayush Shrestha"}}}}},150:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(52),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},151:function(e,t,a){},157:function(e,t,a){"use strict";var n=a(158),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(164),s=a.n(c),u=a(146);function m(e){e.description;var t=e.lang,a=e.meta,r=e.keywords,o=e.title;return i.a.createElement(u.StaticQuery,{query:d,render:function(e){var n="A Portfolio Site";return i.a.createElement(s.a,{htmlAttributes:{lang:t},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(a)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m;var d="1025518380"},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Aayush Shrestha",description:"",author:"Aayush Shrestha"}}}}},159:function(e,t,a){"use strict";var n=a(4),r=a.n(n),i=a(0),o=a.n(i),l=a(152),c=a.n(l),s=(a(73),a(53),a(74),a(163),a(146)),u=a(153);function m(){var e=c()(["\ncolor: white;\nfont-weight: bold;\nfont-size: 1.3em;\nalign-self: stretch\n\n"]);return m=function(){return e},e}function d(){var e=c()(["display: grid; grid-template-columns: 1fr 1fr;"]);return d=function(){return e},e}function p(){var e=c()(["display: block;"]);return p=function(){return e},e}var f=Array.from(Array(20).keys()),h=u.a.span(p()),g=u.a.div(d()),E=u.a.div(m()),y=function(e){var t=e.active;return o.a.createElement("div",null,o.a.createElement(h,{className:"hide"},f.map(function(e){return o.a.createElement("span",{pose:"start",key:e,style:{background:"rgba(255 , 255, 255, 0.2)",top:Math.floor(95*Math.random())+"%",left:Math.floor(95*Math.random())+"%",position:"absolute",display:"block",width:"1em",height:"1em",bottom:0,borderRadius:"0.1em",animationDelay:"0s",overflow:"hidden",animationDuration:Math.floor(24*Math.random())+18+"s",animationIterationCount:"infinite"},className:"particle",time:Math.floor(24*Math.random())+12})})),o.a.createElement(g,null,o.a.createElement(E,null,o.a.createElement("span",{className:"blue"},"<"),"Aayush ",o.a.createElement("span",{className:"blue"},"/>")),o.a.createElement(s.Link,{to:"/Message",style:{filter:"message"===t?"drop-shadow(2px 3px 10px gray)":"",color:"message"===t?"#30ABE8":"",background:"message"===t?"white":"",justifySelf:"end"},className:"bt bt-round-white "},"Say Hi!")),o.a.createElement("div",{className:"navbar nav-grid"},o.a.createElement("i",{className:"logos material-icons"},"face"),o.a.createElement("ul",{className:"nav align-left-on-lg"},o.a.createElement("li",{className:"option"},o.a.createElement(s.Link,{to:"/"},o.a.createElement("center",null,o.a.createElement("i",{style:{filter:"home"===t?"drop-shadow(2px 3px 10px gray)":""},className:"material-icons lg-icon"},"home")),o.a.createElement("div",{style:{borderBottom:"home"===t?"2px solid white":"0"},className:"text"},"HOME"))),o.a.createElement("li",{className:"option"},o.a.createElement(s.Link,{to:"/Projects"},o.a.createElement("center",null,o.a.createElement("i",{style:{filter:"projects"===t?"drop-shadow(0 0 5px gray)":""},className:"material-icons lg-icon"},"work")),o.a.createElement("div",{style:{borderBottom:"projects"===t?"2px solid white":"0"},className:"text"},"PROJECTS"))),o.a.createElement("li",{className:"option"},o.a.createElement("a",{href:"https://github.com/aayush6194/aayush6194.github.io/raw/master/Resume.pdf"},o.a.createElement("center",null,o.a.createElement("i",{className:"material-icons lg-icon"},"account_circle")),o.a.createElement("div",{className:"text"},"RESUME"))))))},v=function(e){return o.a.createElement("div",{className:"nav-btn"},o.a.createElement("span",{className:"line center"}),o.a.createElement("span",{className:"line center"}),o.a.createElement("span",{className:"line center"}))},b=function(e){e.siteTitle;var t=e.active;return o.a.createElement("header",null,o.a.createElement("div",{className:"header"},o.a.createElement(y,{active:t}),o.a.createElement(v,null)))};b.propTypes={siteTitle:r.a.string},b.defaultProps={siteTitle:""};t.a=b}}]);
//# sourceMappingURL=component---src-pages-index-js-e1e5ab1e55526628c25d.js.map