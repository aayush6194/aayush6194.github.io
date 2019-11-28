(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{139:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(146),o=a.n(i),c=a(0),s=a.n(c),l=a(147),u=a(149),m=a(159),d=a(157),p=a(165),f=a(156);function h(){var e=o()(["\n  display: grid;\n  grid-template-columns: 60px auto;\n  color: black;\n  font-weight: bold;\n  width: 60%;\n  max-width: 1000px;\n  margin: auto;\n  @media (max-width: 1600px){\n    grid-template-columns: 85px auto;\n  }\n  @media (max-width: 720px){\n    width: 95%;\n    grid-template-columns: 100px auto;\n  }\n"]);return h=function(){return e},e}function g(){var e=o()([""]);return g=function(){return e},e}var y=Object(l.a)(p.a.div({start:{scale:0,opacity:.6},end:{scale:1,opacity:1},transition:{duration:210,ease:"linear"}}))(g()),v=l.a.div(h()),b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={name:"",email:"",message:"",file:null,fileNum:0,stage:"start"},a}r()(t,e);var a=t.prototype;return a.submit=function(){fetch("http://localhost:5000/upload",{method:"POST",headers:{"Access-Control-Allow-Origin":"*"},mode:"cors",body:this.state.file}).then(function(e){return e.json()}).then(function(e){}).catch(function(e){alert(e)})},a.load=function(){var e=this;fetch("https://nodeapi12.herokuapp.com/files",{mode:"cors"}).then(function(e){return e.json()}).then(function(t){e.setState({fileNum:t.num})}).catch(function(e){alert("Connecting to API. Sever Maybe Asleep. Try Again.")})},a.componentDidMount=function(){this.load(),this.setState({stage:"end"})},a.render=function(){return s.a.createElement(u.a,null,s.a.createElement(d.a,{title:"Message",keywords:["gatsby","application","react"]}),s.a.createElement("div",{className:"container"},s.a.createElement(f.a,{active:"message"}),s.a.createElement(m.a,{active:"message"}),s.a.createElement(y,{pose:this.state.stage},s.a.createElement("form",{action:"https://nodeapi12.herokuapp.com/upload",encType:"multipart/form-data",method:"POST"},s.a.createElement(v,null,s.a.createElement("label",{htmlFor:"name"},"Name:"),s.a.createElement("input",{type:"text",className:"input",id:"name",name:"name"}),s.a.createElement("label",{htmlFor:"email"},"Email: "),s.a.createElement("input",{type:"email",className:"input",id:"email",name:"email"}),s.a.createElement("label",{htmlFor:"email"},"Message: "),s.a.createElement("input",{type:"text",className:"input",id:"text",name:"message"}),s.a.createElement("input",{type:"file",className:"input row",id:"file",name:"file"}),s.a.createElement("input",{type:"submit",className:"input bt bt-custom row btt",id:"submit",name:"Submit"}))),s.a.createElement("center",null,"Number of files: ",this.state.fileNum))))},t}(s.a.Component);t.default=b},145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(144),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(148),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},149:function(e,t,a){"use strict";var n=a(146),r=a.n(n),i=a(150),o=a(0),c=a.n(o),s=a(4),l=a.n(s),u=a(145),m=(a(152),a(147)),d=a(153),p=a.n(d),f=a(154),h=a.n(f);function g(){var e=r()(["\n\nbackground-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1748' height='1748' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23759fff' stroke-width='70.2' stroke-linecap='round' %3E%3Cline stroke='%239de6dd' x1='639' y1='727' x2='590' y2='776'/%3E%3Cpolyline stroke='%2385aee9' points='586 717 888 415 981 512 279 1215 120 1056 607 569'/%3E%3Cline stroke='%2361b1ff' x1='935' y1='494' x2='776' y2='653'/%3E%3Cline stroke='%234fa7e9' x1='425' y1='624' x2='488' y2='560'/%3E%3Cpolyline stroke='%2352baf5' points='745 685 198 1232 -24 1010 226 759'/%3E%3Cline stroke='%2363bee8' x1='383' y1='666' x2='393' y2='655'/%3E%3Cline stroke='%234ab7e0' x1='416' y1='569' x2='438' y2='547'/%3E%3Cline stroke='%2344c7f2' x1='194' y1='664' x2='237' y2='622'/%3E%3Cpolyline stroke='%236dd9f8' points='374 547 35 886 194 1045 618 622'/%3E%3Cline stroke='%2368d8f4' x1='681' y1='685' x2='671' y2='696'/%3E%3Cline stroke='%236cdbf4' x1='724' y1='516' x2='649' y2='590'/%3E%3Cline stroke='%2369cddf' x1='334' y1='776' x2='501' y2='611'/%3E%3Cpolyline stroke='%238beaf6' points='556 746 226 1077 353 1204 1052 505 956 410 713 653'/%3E%3Cline stroke='%2368a8ad' x1='258' y1='727' x2='385' y2='600'/%3E%3Cline stroke='%2392eeef' x1='671' y1='505' x2='639' y2='537'/%3E%3Cpolyline stroke='%23a7e0dc' points='162 696-24 883 71 978 353 696'/%3E%3C/g%3E%3C/svg%3E\");\nbackground-attachment: fixed;\nbackground-repeat: no-repeat;\nbackground-position: bottom right;\nmin-height: 100vh;\nbackground-image: url(",");\nbackground-image: url(",");\nbackground-size: cover;"]);return g=function(){return e},e}var y=m.a.div(g(),p.a,function(e){return e.background}),v=function(e){var t=e.children,a=e.darkMode;return c.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(y,{background:a?h.a:p.a,style:{margin:"0px auto ",paddingTop:0}},c.a.createElement("main",null,t),c.a.createElement("footer",null)))},data:i})};v.propTypes={children:l.a.node.isRequired},t.a=v},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Aayush Shrestha"}}}}},151:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(51),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},152:function(e,t,a){},153:function(e,t,a){e.exports=a.p+"static/b-9b2a1cc05362770bdf9a933a0975331d.svg"},154:function(e,t,a){e.exports=a.p+"static/b-dark-9361296ffb203245985632e2816a886c.svg"},156:function(e,t,a){"use strict";var n=a(146),r=a.n(n),i=a(0),o=a.n(i),c=a(147);function s(){var e=r()(["\n  top: 0em;\n  left:0;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  font-size: .8em;\n  height: 100vh;\n  display: grid;\n  padding: .3em;\n  position: fixed;\n  grid-template-rows: 1fr 1fr 1fr;\n  place-items: center;\n  background: ",";\n  z-index: 10;\n  @media (max-width: 860px) {\n    height: 65px;\n     width: 100vw;\n     top: calc(100% - 65px);\n     grid-template-columns: 1fr 1fr 1fr;\n     grid-template-rows: 1fr;\n  }"]);return s=function(){return e},e}var l=a(145).Link,u=c.a.div(s(),function(e){return e.background});t.a=function(e){var t=e.active,a=e.darkMode;return o.a.createElement("div",null,o.a.createElement(u,{background:a?"black":"#156CEC"},o.a.createElement(l,{className:"nav-item txt-md center-items",to:"/"},o.a.createElement("i",{className:"material-icons lg-icon "+("home"===t?"active-nav":"")},"home"),o.a.createElement("div",null,"Home")),o.a.createElement(l,{className:"nav-item txt-md center-items",to:"/Projects"}," ",o.a.createElement("i",{className:"material-icons lg-icon "+("project"===t?"active-nav":"")},"work"),o.a.createElement("div",null,"Projects")),o.a.createElement("a",{className:"nav-item txt-md center-items",href:"https://github.com/aayush6194/aayush6194.github.io/raw/master/Resume.pdf"},o.a.createElement("i",{className:"material-icons lg-icon "},"account_circle"),o.a.createElement("div",null,"Resume"))))}},157:function(e,t,a){"use strict";var n=a(158),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(164),l=a.n(s),u=a(145);function m(e){e.description;var t=e.lang,a=e.meta,r=e.keywords,o=e.title;return i.a.createElement(u.StaticQuery,{query:d,render:function(e){var n="A Portfolio Site";return i.a.createElement(l.a,{htmlAttributes:{lang:t},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(a)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m;var d="1025518380"},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Aayush Shrestha",description:"",author:"Aayush Shrestha"}}}}},159:function(e,t,a){"use strict";var n=a(4),r=a.n(n),i=a(0),o=a.n(i),c=a(146),s=a.n(c),l=(a(73),a(52),a(74),a(163),a(145)),u=a(147);function m(){var e=s()(["\ncolor: white;\nfont-weight: bold;\nfont-size: 1.3em;\nalign-self: stretch"]);return m=function(){return e},e}function d(){var e=s()(["display: grid; grid-template-columns: 1fr 1fr;"]);return d=function(){return e},e}function p(){var e=s()(["display: block;"]);return p=function(){return e},e}var f=Array.from(Array(20).keys()),h=u.a.span(p()),g=u.a.div(d()),y=u.a.div(m()),v=function(e){var t=e.darkMode,a=e.active;return o.a.createElement("div",null,o.a.createElement(h,{className:"hide"},f.map(function(e){return o.a.createElement("span",{pose:"start",key:e,style:{background:"rgba(255 , 255, 255, 0.2)",top:Math.floor(95*Math.random())+"%",left:Math.floor(95*Math.random())+"%",position:"absolute",display:"block",width:"1em",height:"1em",bottom:0,borderRadius:"0.1em",animationDelay:"0s",overflow:"hidden",animationDuration:Math.floor(24*Math.random())+18+"s",animationIterationCount:"infinite"},className:"particle",time:Math.floor(24*Math.random())+12})})),o.a.createElement(g,null,o.a.createElement(y,null,o.a.createElement("span",{className:"blue"},"<"),"Aayush ",o.a.createElement("span",{className:"blue"},"/>")),o.a.createElement(l.Link,{to:"/Message",style:{filter:"message"===a?"drop-shadow(2px 3px 10px gray)":"",color:"message"===a?"#30ABE8":"",background:"message"===a?"white":"",justifySelf:"end"},className:"bt bt-round-white "+(t&&"dark-btn")},"Say Hi!")),o.a.createElement("div",null))},b=function(e){e.siteTitle;var t=e.active,a=e.darkMode;return o.a.createElement("header",null,o.a.createElement("div",{className:"header"},o.a.createElement(v,{active:t,darkMode:a})))};b.propTypes={siteTitle:r.a.string},b.defaultProps={siteTitle:""};t.a=b}}]);
//# sourceMappingURL=component---src-pages-message-js-da6830ea518be2ea0955.js.map