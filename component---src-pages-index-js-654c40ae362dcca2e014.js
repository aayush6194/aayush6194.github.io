(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),c=a.n(i),l=a(158),o=a.n(l),s=(a(78),a(55),a(79),a(162),a(157));function u(){var e=o()(["\n display: block;\n  "]);return u=function(){return e},e}function m(){var e=o()(["\n  position: absolute;\n  display: block;\n  width: 1em;\n  height: 1em;\n  animation: "," "," linear infinite;\n  bottom: 0px;\n  top: ",";\n  left: ",";\n  border-radius: 0.1em;\n  animation-delay: 0s;\n  overflow: hidden !important;"]);return m=function(){return e},e}function d(){var e=o()(["\n  0%{\n      transform: translateY(0) rotate(0deg); opacity: 1;\n    }\n  100%{\n      transform: translateY(-1000px) rotate(720deg);\n      opacity: 0;\n    }\n"]);return d=function(){return e},e}var p=Array.from(Array(30).keys()),f=["rgba(48, 171, 232 , 0.2)","rgba(255 , 255, 255, 0.2)"],h=Object(s.b)(d()),g=s.a.span.attrs({})(m(),h,function(e){return e.time+"s"},function(e){return e.top+"%"},function(e){return e.left+"%"}),y=s.a.span(u()),E=function(e){return c.a.createElement("div",{className:"home grid align-center"},c.a.createElement(y,{className:"hide"},p.map(function(e){return c.a.createElement(g,{key:e,top:Math.floor(95*Math.random()),left:Math.floor(95*Math.random()),style:{background:f[Math.floor(2*Math.random())]},time:Math.floor(24*Math.random())+12})})),c.a.createElement("div",{className:"content-container align-left"},"Hello, I am ",c.a.createElement("span",{className:"highlight"},"Aayush!")," I am a junior at the ULM pursuring a Computer Science degree. I am a web developer, focused on ",c.a.createElement("span",{className:"highlight-blue"},"MERN")," stack development. I love building responsive, progressive web applications.",c.a.createElement("br",null),c.a.createElement("br",null),"Check out some of my projects, my resume or send me an email."))},v=a(156),b=a(146),w=function(){return c.a.createElement("div",{className:"grid-mobile align-left-on-lg"},c.a.createElement("a",{href:"https://github.com/aayush6194"},c.a.createElement("button",{className:"bt bt-custom center-sm expand-sm"},"GitHub")),c.a.createElement("a",{href:"mailto:aayush6194@gmail.com"},c.a.createElement("button",{className:"bt bt-custom center-sm expand-sm"},"Email")),c.a.createElement("a",{href:"https://www.linkedin.com/in/aayush-shrestha-b4b1b9158/"},c.a.createElement("button",{className:"bt bt-custom center-sm expand-sm"},"LinkedIn")))},N=function(){return c.a.createElement("div",{className:"grid "},c.a.createElement(w,{className:"align-left align-center"}),c.a.createElement("div",{className:"align-left align-end"},c.a.createElement(b.Link,{to:"/Projects"},c.a.createElement("span",{className:"bold-white"},"Check My Projects!"),c.a.createElement("i",{className:"material-icons shine"},"details"))))},k=a(148),x=a(154),M=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={active:"home"},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){},a.render=function(){return c.a.createElement(k.a,null,c.a.createElement(x.a,{title:"Home",keywords:["gatsby","application","react"]}),c.a.createElement("div",{className:"container main-grid"},c.a.createElement(v.a,{active:this.state.active}),c.a.createElement(E,{className:"row"}),c.a.createElement(N,null)))},t}(c.a.Component);t.default=M},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(145),o=a.n(l);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(147),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},147:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},148:function(e,t,a){"use strict";var n=a(149),r=a(0),i=a.n(r),c=a(4),l=a.n(c),o=a(146),s=(a(151),function(e){var t=e.children;return i.a.createElement(o.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{margin:"0 auto",height:"100%",padding:"0px ",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null)))},data:n})});s.propTypes={children:l.a.node.isRequired},t.a=s},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Aayush Shrestha"}}}}},150:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(52),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},151:function(e,t,a){},154:function(e,t,a){"use strict";var n=a(155),r=a(0),i=a.n(r),c=a(4),l=a.n(c),o=a(159),s=a.n(o),u=a(146);function m(e){e.description;var t=e.lang,a=e.meta,r=e.keywords,c=e.title;return i.a.createElement(u.StaticQuery,{query:d,render:function(e){var n="A Portfolio Site";return i.a.createElement(s.a,{htmlAttributes:{lang:t},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(a)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m;var d="1025518380"},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Aayush Shrestha",description:"",author:"Aayush Shrestha"}}}}},156:function(e,t,a){"use strict";var n=a(4),r=a.n(n),i=a(0),c=a.n(i),l=a(146),o=function(e){var t=e.active;return c.a.createElement("div",null,c.a.createElement("div",{className:"rightt"},c.a.createElement(l.Link,{to:"/Message",className:"bt bt-round-white "},"Say Hi!")),c.a.createElement("div",{className:"navbar nav-grid"},c.a.createElement("i",{className:"logos material-icons"},"face"),c.a.createElement("ul",{className:"nav align-left-on-lg"},c.a.createElement("li",{className:"option"},c.a.createElement(l.Link,{to:"/"},c.a.createElement("center",null,c.a.createElement("i",{style:{filter:"home"===t?"drop-shadow(2px 3px 10px gray)":""},className:"material-icons lg-icon"},"home")),c.a.createElement("div",{className:"text"},"HOME"))),c.a.createElement("li",{className:"option"},c.a.createElement(l.Link,{to:"/Projects"},c.a.createElement("center",null,c.a.createElement("i",{style:{filter:"projects"===t?"drop-shadow(0 0 5px gray)":""},className:"material-icons lg-icon"},"work")),c.a.createElement("div",{className:"text"},"PROJECTS"))),c.a.createElement("li",{className:"option"},c.a.createElement("a",{href:"https://github.com/aayush6194/aayush6194.github.io/raw/master/Resume.pdf"},c.a.createElement("center",null,c.a.createElement("i",{className:"material-icons lg-icon"},"account_circle")),c.a.createElement("div",{className:"text"},"RESUME"))))))},s=function(e){return c.a.createElement("div",{className:"nav-btn"},c.a.createElement("span",{className:"line center"}),c.a.createElement("span",{className:"line center"}),c.a.createElement("span",{className:"line center"}))},u=function(e){e.siteTitle;var t=e.active;return c.a.createElement("header",null,c.a.createElement("div",{className:"header"},c.a.createElement(o,{active:t}),c.a.createElement(s,null)))};u.propTypes={siteTitle:r.a.string},u.defaultProps={siteTitle:""};t.a=u},162:function(e,t,a){"use strict";var n=a(18),r=a(11),i=a(26),c=a(74),l=a(75),o=a(14),s=a(163),u=a(76);r(r.S+r.F*!a(77)(function(e){Array.from(e)}),"Array",{from:function(e){var t,a,r,m,d=i(e),p="function"==typeof this?this:Array,f=arguments.length,h=f>1?arguments[1]:void 0,g=void 0!==h,y=0,E=u(d);if(g&&(h=n(h,f>2?arguments[2]:void 0,2)),null==E||p==Array&&l(E))for(a=new p(t=o(d.length));t>y;y++)s(a,y,g?h(d[y],y):d[y]);else for(m=E.call(d),a=new p;!(r=m.next()).done;y++)s(a,y,g?c(m,h,[r.value,y],!0):r.value);return a.length=y,a}})},163:function(e,t,a){"use strict";var n=a(24),r=a(54);e.exports=function(e,t,a){t in e?n.f(e,t,r(0,a)):e[t]=a}}}]);
//# sourceMappingURL=component---src-pages-index-js-654c40ae362dcca2e014.js.map