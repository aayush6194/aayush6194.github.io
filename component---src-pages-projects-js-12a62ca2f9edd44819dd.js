(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,t,a){"use strict";a.r(t);a(207);var n=a(0),r=a.n(n),i=a(148),o=a(159),l=(a(208),a(210),a(7)),s=a.n(l),c=a(152),u=a.n(c),d=a(212),m=a.n(d),p=a(153),h=a(165),f=a(213),g=a.n(f);function y(){var e=u()(["\n  background: #005A9C;\n  opacity: 0.8;\n  color: white;\n  padding: 1em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n"]);return y=function(){return e},e}function E(){var e=u()([""]);return E=function(){return e},e}function v(){var e=u()(["\n  display: grid;\n  background: #30ABE8;\n  height: 100%;"]);return v=function(){return e},e}function b(){var e=u()(["\n  display: inline-block;\n  margin: 2px;\n  background: ",";\n  padding: 0.3em 0.5em;\n  border-radius: 7px;"]);return b=function(){return e},e}function w(){var e=u()([""]);return w=function(){return e},e}var k=p.a.a(w()),N=["#18A7EE","#18EE42","#EED018","#F35F90","#D45FF3","#0288D1","#FFEB3B","#795548","#FF5722","#303F9F","#303F9F","#303F9F"],x=p.a.div(b(),function(e){return e.colr}),S=p.a.div(v()),M=Object(p.a)(h.a.div({start:{scale:0},end:{scale:1},transition:{duration:210,ease:"linear"}}))(E()),R=p.a.div(y()),A=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={stage:"startt"},a}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){},a.render=function(){return r.a.createElement(g.a,null,r.a.createElement(M,{pose:this.state.stage,className:"home grid align-center dense project-container"},r.a.createElement("div",{className:this.props.data.align+" project-element "},r.a.createElement(S,null,r.a.createElement(m.a,{fluid:this.props.fluid,style:{background:"transparent"}}))),r.a.createElement(R,null,r.a.createElement("h2",{className:"center-text"},this.props.data.title),r.a.createElement("i",{className:"material-icons md-icon"},"description")," ",this.props.data.description,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("i",{className:"material-icons md-icon"},"code"),this.props.data.code.map(function(e){return r.a.createElement(x,{key:e.toString(),colr:N[Math.floor(Math.random()*N.length)]}," ",e," ")}),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("i",{className:"material-icons md-icon"},"link")," ",r.a.createElement(k,{href:this.props.data.link},this.props.data.link)))))},t}(r.a.Component),P=a(157);a.d(t,"pageQuery",function(){return j});var F=[{name:"image5",title:"Dreammy 2.0",description:"A social site with logged features with tokens, content uploads, private chat, friend suggesstions",link:"https://dreammy.aayushh.com",align:"left",code:["Express","ReactJs","Redux","Styled-Components","Materialize","MongoDB"]},{name:"image4",title:"Calender App",description:"A Calender App: IN PROGRESS",link:"https://calendar.aayushh.com",align:"right",code:["NodeJs","ReactJs","Redux","Styled-Components","MongoDB"]},{name:"image1",title:"To-do List",description:"A to-do list application built on Materialize CSS; uses PHP as the serverside language for logins, signup and adding/deleting to the list with MySQL as the database.",link:"http://todolistphp.gearhostpreview.com",align:"left",code:["PHP","Materialize","MySQL","Javascript"]},{name:"image2",title:"ParkStash",description:"A full responsive side created using css grid for ParkStash",link:"",align:"right",code:["CSS GRID"]},{name:"image3",title:"Auction Website",description:"A responsive ReactJs app to stimulate just the front end for an auction website.",link:"",align:"left",code:["ReactJs"]}],j="1169358081";t.default=function(e){var t=e.data;return r.a.createElement(i.a,null,r.a.createElement(P.a,{title:"Projects",keywords:["gatsby","application","react"]}),r.a.createElement(o.a,{active:"projects"}),r.a.createElement("div",{className:"container2"},console.log(F[0].name),F.map(function(e){return r.a.createElement(A,{key:9989*Math.random()+"ds",className:"row main-grid",fluid:t[e.name].childImageSharp.fluid,data:e})})))}},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(145),s=a.n(l);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(147),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},148:function(e,t,a){"use strict";var n=a(149),r=a(0),i=a.n(r),o=a(4),l=a.n(o),s=a(146),c=(a(151),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{margin:"0 auto",height:"100%",padding:"0px ",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null)))},data:n})});c.propTypes={children:l.a.node.isRequired},t.a=c},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Aayush Shrestha"}}}}},150:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(52),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},151:function(e,t,a){},157:function(e,t,a){"use strict";var n=a(158),r=a(0),i=a.n(r),o=a(4),l=a.n(o),s=a(164),c=a.n(s),u=a(146);function d(e){e.description;var t=e.lang,a=e.meta,r=e.keywords,o=e.title;return i.a.createElement(u.StaticQuery,{query:m,render:function(e){var n="A Portfolio Site";return i.a.createElement(c.a,{htmlAttributes:{lang:t},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(a)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var m="1025518380"},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Aayush Shrestha",description:"",author:"Aayush Shrestha"}}}}},159:function(e,t,a){"use strict";var n=a(4),r=a.n(n),i=a(0),o=a.n(i),l=a(152),s=a.n(l),c=(a(73),a(53),a(74),a(163),a(146)),u=a(153);function d(){var e=s()(["\ncolor: white;\nfont-weight: bold;\nfont-size: 1.3em;\nalign-self: stretch\n\n"]);return d=function(){return e},e}function m(){var e=s()(["display: grid; grid-template-columns: 1fr 1fr;"]);return m=function(){return e},e}function p(){var e=s()(["display: block;"]);return p=function(){return e},e}var h=Array.from(Array(20).keys()),f=u.a.span(p()),g=u.a.div(m()),y=u.a.div(d()),E=function(e){var t=e.active;return o.a.createElement("div",null,o.a.createElement(f,{className:"hide"},h.map(function(e){return o.a.createElement("span",{pose:"start",key:e,style:{background:"rgba(255 , 255, 255, 0.2)",top:Math.floor(95*Math.random())+"%",left:Math.floor(95*Math.random())+"%",position:"absolute",display:"block",width:"1em",height:"1em",bottom:0,borderRadius:"0.1em",animationDelay:"0s",overflow:"hidden",animationDuration:Math.floor(24*Math.random())+18+"s",animationIterationCount:"infinite"},className:"particle",time:Math.floor(24*Math.random())+12})})),o.a.createElement(g,null,o.a.createElement(y,null,o.a.createElement("span",{className:"blue"},"<"),"Aayush ",o.a.createElement("span",{className:"blue"},"/>")),o.a.createElement(c.Link,{to:"/Message",style:{filter:"message"===t?"drop-shadow(2px 3px 10px gray)":"",color:"message"===t?"#30ABE8":"",background:"message"===t?"white":"",justifySelf:"end"},className:"bt bt-round-white "},"Say Hi!")),o.a.createElement("div",{className:"navbar nav-grid"},o.a.createElement("i",{className:"logos material-icons"},"face"),o.a.createElement("ul",{className:"nav align-left-on-lg"},o.a.createElement("li",{className:"option"},o.a.createElement(c.Link,{to:"/"},o.a.createElement("center",null,o.a.createElement("i",{style:{filter:"home"===t?"drop-shadow(2px 3px 10px gray)":""},className:"material-icons lg-icon"},"home")),o.a.createElement("div",{style:{borderBottom:"home"===t?"2px solid white":"0"},className:"text"},"HOME"))),o.a.createElement("li",{className:"option"},o.a.createElement(c.Link,{to:"/Projects"},o.a.createElement("center",null,o.a.createElement("i",{style:{filter:"projects"===t?"drop-shadow(0 0 5px gray)":""},className:"material-icons lg-icon"},"work")),o.a.createElement("div",{style:{borderBottom:"projects"===t?"2px solid white":"0"},className:"text"},"PROJECTS"))),o.a.createElement("li",{className:"option"},o.a.createElement("a",{href:"https://github.com/aayush6194/aayush6194.github.io/raw/master/Resume.pdf"},o.a.createElement("center",null,o.a.createElement("i",{className:"material-icons lg-icon"},"account_circle")),o.a.createElement("div",{className:"text"},"RESUME"))))))},v=function(e){return o.a.createElement("div",{className:"nav-btn"},o.a.createElement("span",{className:"line center"}),o.a.createElement("span",{className:"line center"}),o.a.createElement("span",{className:"line center"}))},b=function(e){e.siteTitle;var t=e.active;return o.a.createElement("header",null,o.a.createElement("div",{className:"header"},o.a.createElement(E,{active:t}),o.a.createElement(v,null)))};b.propTypes={siteTitle:r.a.string},b.defaultProps={siteTitle:""};t.a=b}}]);
//# sourceMappingURL=component---src-pages-projects-js-12a62ca2f9edd44819dd.js.map