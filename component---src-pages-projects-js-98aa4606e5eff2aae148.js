(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,a){"use strict";a.r(t);a(179);var n=a(0),r=a.n(n),i=a(152),c=a(155),l=(a(180),a(182),a(157)),o=a.n(l),s=a(156),u=a.n(s),m=a(158);function d(){var e=o()(["\n  display: grid;\n  background: #30ABE8;\n  height: 100%;\n"]);return d=function(){return e},e}function f(){var e=o()(["\n  display: inline-block;\n  margin: 2px;\n  background: ",";\n  padding: 0.3em 0.5em;\n  border-radius: 7px;\n"]);return f=function(){return e},e}function p(){var e=o()(["\n"]);return p=function(){return e},e}var g=m.a.a(p()),E=["#18A7EE","#18EE42","#EED018","#F35F90","#D45FF3"],h=m.a.div(f(),function(e){return e.colr}),v=m.a.div(d()),y=function(e){return r.a.createElement("div",{className:"home grid align-center dense"},r.a.createElement("div",{className:e.data.align+" project-element "},r.a.createElement(v,null,r.a.createElement(u.a,{fluid:e.fluid}))),r.a.createElement("div",{className:" project-desc"},r.a.createElement("h2",{className:"center-text"},e.data.title),r.a.createElement("i",{className:"material-icons md-icon"},"description")," ",e.data.description,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("i",{className:"material-icons md-icon"},"code"),e.data.code.map(function(e){return r.a.createElement(h,{colr:E[Math.floor(Math.random()*E.length)],key:e.toString()}," ",e," ")}),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("i",{className:"material-icons md-icon"},"link")," ",r.a.createElement(g,{href:e.data.link},e.data.link))))};a.d(t,"pageQuery",function(){return N});var b=[{name:"image4",title:"Calender App",description:"A Calender App: IN PROGRESS",link:"calender.aayushh.com",align:"left",code:["NodeJS","React","Redux","Styled-Components","MongoDB"]},{name:"image1",title:"To-do List",description:"A to-do list application built on Materialize CSS; uses PHP as the serverside language for logins, signup and adding/deleting to the list with MySQL as the database.",link:"http://todolistphp.gearhostpreview.com/",align:"right",code:["PHP","Materialize","MySQL","Javascript"]},{name:"image2",title:"ParkStash",description:"A full responsive side created using css grid for ParkStash",link:"",align:"left",code:["CSS"]},{name:"image3",title:"Auction Website",description:"A responsive ReactJs app to stimulate just the front end for an auction website.",link:"",align:"right",code:["React"]}],N="1825372356";t.default=function(e){var t=e.data;return r.a.createElement(i.a,null,r.a.createElement(c.a,null),r.a.createElement("div",{className:"container2"},console.log(b[0].name),b.map(function(e){return r.a.createElement(y,{className:"row main-grid",fluid:t[e.name].childImageSharp.fluid,data:e})})))}},145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(144),o=a.n(l);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(146),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},146:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},147:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(145);t.a=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"rightt"},r.a.createElement(i.Link,{to:"/",className:"bt bt-round-white "},"Say Hi!")),r.a.createElement("div",{className:"navbar nav-grid"},r.a.createElement("i",{className:"logos material-icons"},"face"),r.a.createElement("ul",{className:"nav align-left-on-lg"},r.a.createElement("li",{className:"option"},r.a.createElement(i.Link,{to:"/"},r.a.createElement("center",null,r.a.createElement("i",{className:"material-icons lg-icon"},"home")),r.a.createElement("div",{className:"text"},"HOME"))),r.a.createElement("li",{className:"option"},r.a.createElement(i.Link,{to:"/Projects"},r.a.createElement("center",null," ",r.a.createElement("i",{className:"material-icons lg-icon"},"work")),r.a.createElement("div",{className:"text"},"PROJECTS")," ")),r.a.createElement("li",{className:"option"},r.a.createElement("a",{href:"https://github.com/aayush6194/aayush6194.github.io/raw/master/Resume.pdf"},r.a.createElement("center",null,r.a.createElement("i",{className:"material-icons lg-icon"},"account_circle")),r.a.createElement("div",{className:"text"},"RESUME"))))))}},148:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",{className:"nav-btn"},r.a.createElement("span",{className:"line center"}),r.a.createElement("span",{className:"line center"}),r.a.createElement("span",{className:"line center"}))}},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Aayush Shrestha"}}}}},150:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(53),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},151:function(e,t,a){},152:function(e,t,a){"use strict";var n=a(149),r=a(0),i=a.n(r),c=a(4),l=a.n(c),o=a(145),s=a(147),u=a(148),m=function(e){e.siteTitle;return i.a.createElement("header",null,i.a.createElement("div",{className:"header"},i.a.createElement(s.a,null),i.a.createElement(u.a,null)))};m.propTypes={siteTitle:l.a.string},m.defaultProps={siteTitle:""};a(151);var d=function(e){var t=e.children;return i.a.createElement(o.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{margin:"0 auto",height:"100%",padding:"0px ",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null)))},data:n})};d.propTypes={children:l.a.node.isRequired};t.a=d},155:function(e,t,a){"use strict";a(145);var n=a(4),r=a.n(n),i=a(0),c=a.n(i),l=a(147),o=a(148),s=function(e){e.siteTitle;return c.a.createElement("header",null,c.a.createElement("div",{className:"header"},c.a.createElement(l.a,null),c.a.createElement(o.a,null)))};s.propTypes={siteTitle:r.a.string},s.defaultProps={siteTitle:""},t.a=s},179:function(e,t,a){var n=a(24).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||a(16)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},180:function(e,t,a){"use strict";a(181)("link",function(e){return function(t){return e(this,"a","href",t)}})},181:function(e,t,a){var n=a(11),r=a(25),i=a(19),c=/"/g,l=function(e,t,a,n){var r=String(i(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(n).replace(c,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},182:function(e,t,a){"use strict";a(183);var n=a(5),r=a(73),i=a(16),c=/./.toString,l=function(e){a(17)(RegExp.prototype,"toString",e,!0)};a(25)(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?l(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!i&&e instanceof RegExp?r.call(e):void 0)}):"toString"!=c.name&&l(function(){return c.call(this)})},183:function(e,t,a){a(16)&&"g"!=/./g.flags&&a(24).f(RegExp.prototype,"flags",{configurable:!0,get:a(73)})}}]);
//# sourceMappingURL=component---src-pages-projects-js-98aa4606e5eff2aae148.js.map