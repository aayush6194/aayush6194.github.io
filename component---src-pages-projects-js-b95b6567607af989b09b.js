(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,t,a){"use strict";a.r(t);a(179);var n=a(0),r=a.n(n),i=a(149),s=a(158),o=(a(180),a(182),a(7)),l=a.n(o),c=a(153),d=a.n(c),u=a(184),f=a.n(u),p=a(148),m=a(161);function h(){var e=d()(["\n  background: #005A9C;\n  opacity: 0.8;\n  color: white;\n  padding: 1em;\n"]);return h=function(){return e},e}function g(){var e=d()([""]);return g=function(){return e},e}function y(){var e=d()(["\n  display: grid;\n  background: #30ABE8;\n  height: 100%;"]);return y=function(){return e},e}function v(){var e=d()(["\n  display: inline-block;\n  margin: 2px;\n  background: ",";\n  padding: 0.3em 0.5em;\n  border-radius: 7px;"]);return v=function(){return e},e}function E(){var e=d()([""]);return E=function(){return e},e}var b=p.a.a(E()),S=["#18A7EE","#18EE42","#EED018","#F35F90","#D45FF3","#0288D1","#FFEB3B","#795548","#FF5722","#303F9F","#303F9F","#303F9F"],w=p.a.div(v(),function(e){return e.colr}),R=p.a.div(y()),k=Object(p.a)(m.a.div({start:{scale:0},end:{scale:1},transition:{duration:210,ease:"linear"}}))(g()),N=p.a.div(h()),L=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={stage:"start"},a}l()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setState({stage:"end"})},a.render=function(){return r.a.createElement(k,{pose:this.state.stage,className:"home grid align-center dense project-container"},r.a.createElement("div",{className:this.props.data.align+" project-element "},r.a.createElement(R,null,r.a.createElement(f.a,{fluid:this.props.fluid}))),r.a.createElement(N,null,r.a.createElement("h2",{className:"center-text"},this.props.data.title),r.a.createElement("i",{className:"material-icons md-icon"},"description")," ",this.props.data.description,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("i",{className:"material-icons md-icon"},"code"),this.props.data.code.map(function(e){return r.a.createElement(w,{key:e.toString(),colr:S[Math.floor(Math.random()*S.length)]}," ",e," ")}),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("i",{className:"material-icons md-icon"},"link")," ",r.a.createElement(b,{href:this.props.data.link},this.props.data.link))))},t}(r.a.Component),x=a(156);a.d(t,"pageQuery",function(){return I});var M=[{name:"image4",title:"Calender App",description:"A Calender App: IN PROGRESS",link:"https://calendar.aayushh.com",align:"left",code:["NodeJS","React","Redux","Styled-Components","MongoDB"]},{name:"image1",title:"To-do List",description:"A to-do list application built on Materialize CSS; uses PHP as the serverside language for logins, signup and adding/deleting to the list with MySQL as the database.",link:"http://todolistphp.gearhostpreview.com/",align:"right",code:["PHP","Materialize","MySQL","Javascript"]},{name:"image2",title:"ParkStash",description:"A full responsive side created using css grid for ParkStash",link:"",align:"left",code:["CSS GRID"]},{name:"image3",title:"Auction Website",description:"A responsive ReactJs app to stimulate just the front end for an auction website.",link:"",align:"right",code:["React"]}],I="1825372356";t.default=function(e){var t=e.data;return r.a.createElement(i.a,null,r.a.createElement(x.a,{title:"Projects",keywords:["gatsby","application","react"]}),r.a.createElement(s.a,{active:"projects"}),r.a.createElement("div",{className:"container2"},console.log(M[0].name),M.map(function(e){return r.a.createElement(L,{key:9989*Math.random()+"ds",className:"row main-grid",fluid:t[e.name].childImageSharp.fluid,data:e})})))}},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(145),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(147),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var u=a(32);a.d(t,"parsePath",function(){return u.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},147:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},149:function(e,t,a){"use strict";var n=a(150),r=a(0),i=a.n(r),s=a(4),o=a.n(s),l=a(146),c=(a(152),function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{margin:"0 auto",height:"100%",padding:"0px ",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null)))},data:n})});c.propTypes={children:o.a.node.isRequired},t.a=c},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Aayush Shrestha"}}}}},151:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(52),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},152:function(e,t,a){},156:function(e,t,a){"use strict";var n=a(157),r=a(0),i=a.n(r),s=a(4),o=a.n(s),l=a(160),c=a.n(l),d=a(146);function u(e){e.description;var t=e.lang,a=e.meta,r=e.keywords,s=e.title;return i.a.createElement(d.StaticQuery,{query:f,render:function(e){var n="A Portfolio Site";return i.a.createElement(c.a,{htmlAttributes:{lang:t},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(a)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var f="1025518380"},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Aayush Shrestha",description:"",author:"Aayush Shrestha"}}}}},158:function(e,t,a){"use strict";var n=a(4),r=a.n(n),i=a(0),s=a.n(i),o=a(153),l=a.n(o),c=(a(73),a(53),a(74),a(159),a(146)),d=a(148);function u(){var e=l()(["\n display: block;\n  "]);return u=function(){return e},e}function f(){var e=l()([";\n"]);return f=function(){return e},e}var p=Array.from(Array(30).keys()),m=["#12A1EE","rgba(255 , 255, 255, 0.2)"],h=d.a.span(f()),g=d.a.span(u()),y=function(e){var t=e.active;return s.a.createElement("div",null,s.a.createElement(g,{className:"hide"},p.map(function(e){return s.a.createElement(h,{pose:"start",key:e,style:{background:m[Math.floor(2*Math.random())],top:Math.floor(95*Math.random())+"%",left:Math.floor(95*Math.random())+"%",position:"absolute",display:"block",width:"1em",height:"1em",bottom:0,borderRadius:"0.1em",animationDelay:"0s",overflow:"hidden",animationDuration:Math.floor(24*Math.random())+18+"s",animationIterationCount:"infinite"},className:"particle",time:Math.floor(24*Math.random())+12})})),s.a.createElement("div",{className:"rightt"},s.a.createElement(c.Link,{to:"/Message",style:{filter:"message"===t?"drop-shadow(2px 3px 10px gray)":"",color:"message"===t?"#30ABE8":"",background:"message"===t?"white":""},className:"bt bt-round-white "},"Say Hi!")),s.a.createElement("div",{className:"navbar nav-grid"},s.a.createElement("i",{className:"logos material-icons"},"face"),s.a.createElement("ul",{className:"nav align-left-on-lg"},s.a.createElement("li",{className:"option"},s.a.createElement(c.Link,{to:"/"},s.a.createElement("center",null,s.a.createElement("i",{style:{filter:"home"===t?"drop-shadow(2px 3px 10px gray)":""},className:"material-icons lg-icon"},"home")),s.a.createElement("div",{style:{borderBottom:"home"===t?"2px solid white":"0"},className:"text"},"HOME"))),s.a.createElement("li",{className:"option"},s.a.createElement(c.Link,{to:"/Projects"},s.a.createElement("center",null,s.a.createElement("i",{style:{filter:"projects"===t?"drop-shadow(0 0 5px gray)":""},className:"material-icons lg-icon"},"work")),s.a.createElement("div",{style:{borderBottom:"projects"===t?"2px solid white":"0"},className:"text"},"PROJECTS"))),s.a.createElement("li",{className:"option"},s.a.createElement("a",{href:"https://github.com/aayush6194/aayush6194.github.io/raw/master/Resume.pdf"},s.a.createElement("center",null,s.a.createElement("i",{className:"material-icons lg-icon"},"account_circle")),s.a.createElement("div",{className:"text"},"RESUME"))))))},v=function(e){return s.a.createElement("div",{className:"nav-btn"},s.a.createElement("span",{className:"line center"}),s.a.createElement("span",{className:"line center"}),s.a.createElement("span",{className:"line center"}))},E=function(e){e.siteTitle;var t=e.active;return s.a.createElement("header",null,s.a.createElement("div",{className:"header"},s.a.createElement(y,{active:t}),s.a.createElement(v,null)))};E.propTypes={siteTitle:r.a.string},E.defaultProps={siteTitle:""};t.a=E},179:function(e,t,a){var n=a(24).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||a(16)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},180:function(e,t,a){"use strict";a(181)("link",function(e){return function(t){return e(this,"a","href",t)}})},181:function(e,t,a){var n=a(11),r=a(25),i=a(19),s=/"/g,o=function(e,t,a,n){var r=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(n).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},182:function(e,t,a){"use strict";a(183);var n=a(5),r=a(75),i=a(16),s=/./.toString,o=function(e){a(17)(RegExp.prototype,"toString",e,!0)};a(25)(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?o(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!i&&e instanceof RegExp?r.call(e):void 0)}):"toString"!=s.name&&o(function(){return s.call(this)})},183:function(e,t,a){a(16)&&"g"!=/./g.flags&&a(24).f(RegExp.prototype,"flags",{configurable:!0,get:a(75)})},184:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var r,i=n(a(7)),s=n(a(51)),o=n(a(154)),l=n(a(155)),c=n(a(0)),d=n(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m=[];var h=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){m.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),m.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+n+r+"<img "+o+l+t+s+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef(function(e,t){var a=e.style,n=e.onLoad,r=e.onError,i=(0,o.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},i,{onLoad:n,onError:r,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var v=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!1,i=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,r=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:!1,IOSupported:r,fadeIn:i,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,h=e.fixed,v=e.backgroundColor,E=e.Tag,b=e.itemProp,S="boolean"==typeof v?"lightgray":v,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),R=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),k={title:t,alt:this.state.isVisible?"":a,style:w,className:p};if(m){var N=m;return c.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},c.default.createElement(E,{style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),N.base64&&c.default.createElement(y,(0,l.default)({src:N.base64},k)),N.tracedSVG&&c.default.createElement(y,(0,l.default)({src:N.tracedSVG},k)),S&&c.default.createElement(E,{title:t,style:{backgroundColor:S,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,N.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),c.default.createElement("source",{srcSet:N.srcSet,sizes:N.sizes}),c.default.createElement(y,{alt:a,title:t,src:N.src,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},N))}}))}if(h){var L=h,x=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:L.width,height:L.height},i);return"inherit"===i.display&&delete x.display,c.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:x,ref:this.handleRef,key:"fixed-"+JSON.stringify(L.srcSet)},L.base64&&c.default.createElement(y,(0,l.default)({src:L.base64},k)),L.tracedSVG&&c.default.createElement(y,(0,l.default)({src:L.tracedSVG},k)),S&&c.default.createElement(E,{title:t,style:{backgroundColor:S,width:L.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:L.height}}),this.state.isVisible&&c.default.createElement("picture",null,L.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),c.default.createElement("source",{srcSet:L.srcSet,sizes:L.sizes}),c.default.createElement(y,{alt:a,title:t,width:L.width,height:L.height,src:L.src,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:L.width,height:L.height},L))}}))}return null},t}(c.default.Component);v.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var E=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),b=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});v.propTypes={resolutions:E,sizes:b,fixed:E,fluid:b,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var S=v;t.default=S}}]);
//# sourceMappingURL=component---src-pages-projects-js-b95b6567607af989b09b.js.map