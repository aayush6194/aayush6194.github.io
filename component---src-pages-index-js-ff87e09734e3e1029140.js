(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),l=a(0),i=a.n(l),c=(a(151),function(e){return i.a.createElement("div",{className:"home grid align-center"},i.a.createElement("ul",{className:"circles"},i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null)),i.a.createElement("div",{className:"content-container align-left"},"Hello, I am ",i.a.createElement("span",{className:"highlight"},"Aayush!")," I am a junior at the ULM pursuring a Computer Science degree. I am a web developer, focused on ",i.a.createElement("span",{className:"highlight-blue"},"MERN")," stack development. I love building responsive, progressive web applications.",i.a.createElement("br",null),i.a.createElement("br",null),"Check out some of my projects, my resume or send me an email."))}),s=a(156),o=a(145),u=function(){return i.a.createElement("div",{className:"grid-mobile align-left-on-lg"},i.a.createElement("a",{href:"https://github.com/aayush6194"},i.a.createElement("button",{className:"bt bt-custom center-sm expand-sm"},"GitHub")),i.a.createElement("a",{href:"mailto:aayush6194@gmail.com"},i.a.createElement("button",{className:"bt bt-custom center-sm expand-sm"},"Email")),i.a.createElement("a",{href:"https://www.linkedin.com/in/aayush-shrestha-b4b1b9158/"},i.a.createElement("button",{className:"bt bt-custom center-sm expand-sm"},"LinkedIn")))},m=function(){return i.a.createElement("div",{className:"grid "},i.a.createElement(u,{className:"align-left align-center"}),i.a.createElement("div",{className:"align-left align-end"},i.a.createElement(o.Link,{to:"/Projects"},i.a.createElement("span",{className:"bold-white"},"Check My Projects!"),i.a.createElement("i",{className:"material-icons shine"},"details"))))},d=a(154),p=(a(158),a(155),a(159)),h=a(4),f=a.n(h),E=a(160),g=a.n(E);function y(e){e.description;var t=e.lang,a=e.meta,n=e.keywords,r=e.title;return i.a.createElement(o.StaticQuery,{query:b,render:function(e){var l="A Portfolio Site";return i.a.createElement(g.a,{htmlAttributes:{lang:t},title:r,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:r},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:l}].concat(n.length>0?{name:"keywords",content:n.join(", ")}:[]).concat(a)})},data:p})}y.defaultProps={lang:"en",meta:[],keywords:[]},y.propTypes={description:f.a.string,lang:f.a.string,meta:f.a.array,keywords:f.a.arrayOf(f.a.string),title:f.a.string.isRequired};var v=y,b="1025518380",w=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={active:"home"},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("touchstart",function(e){console.log(e.defaultPrevented),e.preventDefault(),console.log(e.defaultPrevented)},{passive:!0})},a.render=function(){return i.a.createElement(d.a,null,i.a.createElement(v,{title:"Home",keywords:["gatsby","application","react"]}),i.a.createElement("div",{className:"container main-grid"},i.a.createElement(s.a,null),i.a.createElement(c,{className:"row"}),i.a.createElement(m,null)))},t}(i.a.Component);t.default=w},145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(144),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var o=a(146),u=a.n(o);a.d(t,"PageRenderer",function(){return u.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},146:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},149:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(145);t.a=function(e){return r.a.createElement("div",{className:"navbar nav-grid"},r.a.createElement("i",{className:"logos material-icons"},"face"),r.a.createElement("ul",{className:"nav align-left-on-lg"},r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/",className:"bt bt-round-white"}," HOME")),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/Projects",className:"bt bt-round-white"},"PROJECTS ")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/aayush6194/aayush6194.github.io/raw/master/Resume.pdf",className:"bt bt-round-white"},"RESUME"))))}},150:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",{className:"nav-btn"},r.a.createElement("span",{className:"line center"}),r.a.createElement("span",{className:"line center"}),r.a.createElement("span",{className:"line center"}))}},151:function(e,t,a){},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Aayush Shrestha"}}}}},153:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(53),s=a(2),o=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},154:function(e,t,a){"use strict";var n=a(152),r=a(0),l=a.n(r),i=a(4),c=a.n(i),s=a(145),o=a(149),u=a(150),m=function(e){e.siteTitle;return l.a.createElement("header",null,l.a.createElement("div",{className:"header"},l.a.createElement(o.a,null),l.a.createElement(u.a,null)))};m.propTypes={siteTitle:c.a.string},m.defaultProps={siteTitle:""};a(151);var d=function(e){var t=e.children;return l.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{margin:"0 auto",padding:"0px ",paddingTop:0}},l.a.createElement("main",null,t),l.a.createElement("footer",null)))},data:n})};d.propTypes={children:c.a.node.isRequired};t.a=d},156:function(e,t,a){"use strict";a(145);var n=a(4),r=a.n(n),l=a(0),i=a.n(l),c=a(149),s=a(150),o=function(e){e.siteTitle;return i.a.createElement("header",null,i.a.createElement("div",{className:"header"},i.a.createElement(c.a,null),i.a.createElement(s.a,null)))};o.propTypes={siteTitle:r.a.string},o.defaultProps={siteTitle:""},t.a=o},158:function(e){e.exports={data:{placeholderImage:null}}},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Aayush Shrestha",description:"",author:"Aayush Shrestha"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-ff87e09734e3e1029140.js.map