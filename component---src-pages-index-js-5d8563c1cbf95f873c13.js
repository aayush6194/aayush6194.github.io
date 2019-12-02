(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,t,n){"use strict";n.r(t);var i=n(7),a=n.n(i),o=n(0),r=n.n(o),s=n(145),l=n(167),c=n(178),d=n.n(c),u=n(154),m=n(179),p=n.n(m),h=n(180),f=n.n(h),v=n(158),g=n(146),y=Object(s.a)(l.a.div({})).withConfig({displayName:"Home__Box",componentId:"dqukt2-0"})(["font-size:1.28em;font-family:'Montserrat',sans-serif;padding-right:1em;line-height:168%;&:before{content:'';width:",";height:100%;position:absolute;background:#30ABE8;transition:0.37s;transition-timing-function:cubic-bezier(2.0,0.5,0.1,0.5);}"],function(e){return e.width}),b=s.a.div.withConfig({displayName:"Home__Text",componentId:"dqukt2-1"})(["font-size:40px;font-weigt:bold;"]),w=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={stage:"end",width:"100%"},n}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.setState({stage:"end"}),setTimeout(function(){return e.setState({width:"0%"})},50)},n.componentDidCatch=function(e,t){console(e),console(t)},n.render=function(){var e=this.props,t=e.darkMode,n=e.toggleDarkMode;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"home grid align-center"},r.a.createElement("div",{style:{display:"grid",placeItems:"center"}},r.a.createElement(u.a,{active:"home",darkMode:t}),r.a.createElement("img",{src:t?f.a:p.a,className:"svg-glow",style:{height:"60vh",maxHeight:"50vw"}})),r.a.createElement("div",{className:"content-container align-left"},r.a.createElement(d.a,{left:!0},r.a.createElement(y,null,r.a.createElement("h1",{style:{margin:0,marginBottom:"9px"}},"Hello, I am Aayush!"),"I am a Senior at the ULM pursuing a ",r.a.createElement("b",null,"Computer Science ")," degree, and I am also a FullStack Web Developer at LSBDC. I love learning and building (web apps).",r.a.createElement("br",null),r.a.createElement("br",null)," Check out some of my projects, my resume or send me an email.",r.a.createElement("div",null,r.a.createElement(g.Link,{to:"/Projects",style:{float:"right"}},r.a.createElement("span",{className:"bold-white"},"Check My Projects!"),r.a.createElement("i",{className:"material-icons shine"},"details"))),r.a.createElement(b,null)))),r.a.createElement(v.a,{toggleDarkMode:n,darkMode:t})))},t}(r.a.Component),E=n(161),k=function(e){var t=e.darkMode;return r.a.createElement("div",{className:"grid-mobile align-left-on-lg"},r.a.createElement("a",{href:"https://github.com/aayush6194"},r.a.createElement("button",{className:"bt bt-custom center-sm expand-sm "+(t?"dark-btn":"")},r.a.createElement("i",{className:"fab fa-github md-icon"}),"  GitHub")),r.a.createElement("a",{href:"mailto:aayush6194@gmail.com"},r.a.createElement("button",{className:"bt bt-custom center-sm expand-sm "+(t?"dark-btn":"")}," ",r.a.createElement("i",{className:"fa fa-envelope md-icon","aria-hidden":"true"}),"   Email")),r.a.createElement("a",{href:"https://www.linkedin.com/in/aayush-shrestha-b4b1b9158/"},r.a.createElement("button",{className:"bt bt-custom center-sm expand-sm "+(t?"dark-btn":"")},r.a.createElement("i",{className:"fab fa-linkedin-in md-icon"}),"   LinkedIn ")))},O=function(e){var t=e.darkMode;return r.a.createElement("div",{className:"grid link-grid"},r.a.createElement(k,{className:"align-left align-center",darkMode:t}),r.a.createElement("div",{className:"align-left align-end"}))},x=n(147),M=n(159),S=function(e){function t(t){var n;return(n=e.call(this,t)||this).toggleDarkMode=function(e){localStorage.setItem("dark-mode","dark"===e),n.setState({darkMode:"dark"===e})},n.state={darkMode:!1},n}a()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.getDarkMode()},n.getDarkMode=function(){var e="true"===(!!localStorage.getItem("dark-mode")&&localStorage.getItem("dark-mode"));this.setState({darkMode:e})},n.render=function(){return r.a.createElement(x.a,{darkMode:this.state.darkMode},r.a.createElement(M.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement("div",{className:"container main-grid"},r.a.createElement(E.a,{active:"home",darkMode:this.state.darkMode}),r.a.createElement(w,{className:"row",darkMode:this.state.darkMode,toggleDarkMode:this.toggleDarkMode}),r.a.createElement(O,{darkMode:this.state.darkMode})))},t}(r.a.Component);t.default=S},146:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var i=n(0),a=n.n(i),o=n(4),r=n.n(o),s=n(144),l=n.n(s);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var c=n(151),d=n.n(c);n.d(t,"PageRenderer",function(){return d.a});var u=n(32);n.d(t,"parsePath",function(){return u.a});var m=a.a.createContext({}),p=function(e){return a.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},147:function(e,t,n){"use strict";var i=n(0),a=n.n(i),o=(n(148),n(145)),r=n(149),s=n.n(r),l=n(150),c=n.n(l),d=o.a.div.withConfig({displayName:"layout__MyWrapper",componentId:"ii2kc2-0"})(["background-attachment:fixed;background-repeat:no-repeat;background-position:bottom right;min-height:100vh;background-image:url(",");background-image:url(",");background-size:cover;"],s.a,function(e){return e.background});t.a=function(e){var t=e.children,n=e.darkMode;return a.a.createElement(d,{background:n?c.a:s.a,style:{margin:"0px auto ",paddingTop:0}},a.a.createElement("main",null,t))}},148:function(e,t,n){},149:function(e,t,n){e.exports=n.p+"static/b-9b2a1cc05362770bdf9a933a0975331d.svg"},150:function(e,t,n){e.exports=n.p+"static/b-dark-9361296ffb203245985632e2816a886c.svg"},151:function(e,t,n){var i;e.exports=(i=n(155))&&i.default||i},152:function(e,t,n){"use strict";n(157);function i(){return{"Content-Type":"application/json",token:localStorage.getItem("token")?localStorage.getItem("token"):null}}function a(e,t){return fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()})}var o,r={visit:(o="http://localhost/api")+"/visited",signin:o+"/signin",auth:o+"/auth",message:o+"/message",like:o+"/like"};t.a={visited:function(e){var t=e.email;return a(r.visited,{email:t})},signin:function(e){var t=e.email,n=e.fname,i=e.lname,o=e.id,s=e.photo;return a(r.signin,{email:t,fname:n,lname:i,id:o,photo:s})},auth:function(){return e={},fetch(r.auth,{method:"POST",headers:i(),body:JSON.stringify(e)}).then(function(e){return e.json()});var e},message:function(e){var t=e.name,n=e.email,i=e.subject,o=e.message;return a(r.message,{name:t,email:n,subject:i,message:o})},like:function(e){var t=e.email,n=e.pid,i=e.id;return a(r.like,{email:t,pid:n,id:i})}}},153:function(e,t,n){"use strict";function i(e){try{return h.insertRule(e,h.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function a(){d||(t.globalHide=d=!0,window.removeEventListener("scroll",a,!0),i("."+o+" { opacity: 0; }"),window.removeEventListener("orientationchange",a,!0),window.document.removeEventListener("visibilitychange",a))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=i,t.cascade=function(e,t,n,i,a){var o=Math.log(i),r=(Math.log(a)-o)/(n-t);return Math.exp(o+r*(e-t))},t.animation=function(e){if(!h)return"";var t="@keyframes "+(f+m)+"{"+e+"}",n=p[e];return n?""+f+n:(h.insertRule(t,h.cssRules.length),p[e]=m,""+f+m++)},t.hideAll=a,t.default=function(e){var n=e.ssrFadeout;t.fadeOutEnabled=n};var o=t.namespace="react-reveal",r=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),s=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},c=t.disableSsr=function(){return t.ssr=r=!1},d=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),u=(t.ie10=!1,t.collapseend=void 0),m=1,p={},h=!1,f=o+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=s="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=r=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),r&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=r=!1),r&&window.setTimeout(c,1500),s||(t.collapseend=u=document.createEvent("Event"),u.initEvent("collapseend",!0,!0));var v=document.createElement("style");document.head.appendChild(v),v.sheet&&v.sheet.cssRules&&v.sheet.insertRule&&(h=v.sheet,window.addEventListener("scroll",a,!0),window.addEventListener("orientationchange",a,!0),window.document.addEventListener("visibilitychange",a))}},154:function(e,t,n){"use strict";var i=n(0),a=n.n(i),o=n(145),r=n(146),s=n(156),l=n.n(s),c=n(164),d=(n(152),o.a.button.withConfig({displayName:"sidebar__MyBtn",componentId:"sc-1r0sell-0"})(["background:transparent;border:0;color:white;font-size:1.2em;@media(max-width:860px){font-size:1em;}"])),u=o.a.img.withConfig({displayName:"sidebar__MyImg",componentId:"sc-1r0sell-1"})(["width:3em;@media(max-width:860px){width:2.5em;}"]),m=function(e){var t=e.res;return a.a.createElement(c.GoogleLogin,{clientId:"432904370571-10sna4o5st6k2aee0q3p09bt05qjgbng.apps.googleusercontent.com",buttonText:"Login",render:function(e){return a.a.createElement(d,{onClick:e.onClick,disabled:e.disabled},a.a.createElement(u,{src:l.a}),a.a.createElement("div",{className:"label"},"Login"))},onSuccess:t,onFailure:t,cookiePolicy:"single_host_origin"})},p=r.Link,h=o.a.div.withConfig({displayName:"sidebar__Nav",componentId:"sc-1r0sell-2"})(["top:0em;left:0;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);font-size:.8em;height:100vh;display:grid;padding:.3em;position:fixed;grid-template-rows:1fr 1fr 1fr 1fr;place-items:center;background:",";z-index:10;@media (max-width:860px){height:70px;width:100vw;top:calc(100% - 70px);grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:1fr;}"],function(e){return e.background});t.a=function(e){var t=e.active,n=e.darkMode,o=Object(i.useState)(null),r=o[0],s=o[1],l=Object(i.useState)(!1),c=(l[0],l[1],function(e){console.log(e);var t=e.givenName,n=e.familyName,i=e.email,a=e.imageUrl;return{id:e.googleId,fname:t,lname:n,email:i,photo:a}});return Object(i.useEffect)(function(){try{var e=localStorage.getItem("user")&&null!=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null;if(null===e)return!1;s(e)}catch(t){s(null)}},[]),a.a.createElement("div",null,a.a.createElement(h,{background:n?"black":"#156CEC"},a.a.createElement(p,{className:"nav-item txt-md center-items",to:"/"},a.a.createElement("i",{className:"material-icons lg-icon "+("home"===t?"active-nav":"")},"home"),a.a.createElement("div",null,"Home")),a.a.createElement(p,{className:"nav-item txt-md center-items",to:"/Projects"}," ",a.a.createElement("i",{className:"material-icons lg-icon "+("project"===t?"active-nav":"")},"work"),a.a.createElement("div",null,"Projects")),a.a.createElement("a",{className:"nav-item txt-md center-items",href:"https://github.com/aayush6194/aayush6194.github.io/raw/master/Resume.pdf"},a.a.createElement("i",{className:"material-icons lg-icon "},"account_circle"),a.a.createElement("div",null,"Resume")),a.a.createElement("span",{className:"nav-item txt-md center-items"},r?a.a.createElement("div",{style:{display:"grid",placeItems:"center",textAlign:"center"}},a.a.createElement("img",{style:{borderRadius:"50%",width:"3.5em"},src:r.photo}),a.a.createElement("div",{style:{color:"white",textOverflow:"ellipsis",textSize:"1.5em",lineHeight:"100$"}},r.fname)):a.a.createElement(m,{res:function(e){var t=c(e.profileObj);s(t),localStorage.setItem("user",JSON.stringify(t))}}))))}},155:function(e,t,n){"use strict";n.r(t);n(33);var i=n(0),a=n.n(i),o=n(4),r=n.n(o),s=n(53),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=c},156:function(e,t,n){e.exports=n.p+"static/google-8b201685859c6b291fb39019e19896fd.png"},158:function(e,t,n){"use strict";var i=n(0),a=n.n(i),o=n(145).a.div.withConfig({displayName:"dark-mode__FloatBtn",componentId:"ribr3h-0"})(["position:fixed;bottom:1em;right:10px;display:grid;grid-template-columns:auto auto;border:0.15em solid white;border-radius:50px;background:#30ABE8;background:",";color:white;text-align:center;@media( max-width:860px){bottom:5em;}"],function(e){return e.background});t.a=function(e){var t=e.toggleDarkMode,n=e.darkMode;return a.a.createElement(o,{background:n?"black":"#30ABE8"},a.a.createElement("div",{onClick:function(){t("dark")},style:{padding:".5em 1em"}},a.a.createElement("i",{className:"fas fa-moon white-txt "+(n&&"active-nav")})),a.a.createElement("div",{style:{borderLeft:"2px solid white",padding:".5em 1em"},onClick:function(){return t("notDark")}},a.a.createElement("i",{className:"fas fa-sun white-txt "+(!n&&"active-nav")})))}},159:function(e,t,n){"use strict";var i=n(160),a=n(0),o=n.n(a),r=n(4),s=n.n(r),l=n(166),c=n.n(l),d=n(146);function u(e){e.description;var t=e.lang,n=e.meta,a=e.keywords,r=e.title;return o.a.createElement(d.StaticQuery,{query:m,render:function(e){var i="A Portfolio Site";return o.a.createElement(c.a,{htmlAttributes:{lang:t},title:r,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:r},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:i}].concat(a.length>0?{name:"keywords",content:a.join(", ")}:[]).concat(n)})},data:i})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u;var m="1025518380"},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Aayush Shrestha",description:"",author:"Aayush Shrestha"}}}}},161:function(e,t,n){"use strict";var i=n(4),a=n.n(i),o=n(0),r=n.n(o),s=(n(73),n(51),n(74),n(165),n(146)),l=n(145),c=Array.from(Array(20).keys()),d=l.a.span.withConfig({displayName:"Navbar__Animation",componentId:"sc-1hgh83i-0"})(["display:block;"]),u=l.a.div.withConfig({displayName:"Navbar__Box",componentId:"sc-1hgh83i-1"})(["display:grid;grid-template-columns:1fr 1fr;"]),m=l.a.div.withConfig({displayName:"Navbar__Name",componentId:"sc-1hgh83i-2"})(["color:white;font-weight:bold;font-size:1.3em;align-self:stretch"]),p=function(e){var t=e.darkMode,n=e.active;return r.a.createElement("div",null,r.a.createElement(d,{className:"hide"},c.map(function(e){return r.a.createElement("span",{pose:"start",key:e,style:{background:"rgba(255 , 255, 255, 0.2)",top:Math.floor(95*Math.random())+"%",left:Math.floor(95*Math.random())+"%",position:"absolute",display:"block",width:"1em",height:"1em",bottom:0,borderRadius:"0.1em",animationDelay:"0s",overflow:"hidden",animationDuration:Math.floor(24*Math.random())+18+"s",animationIterationCount:"infinite"},className:"particle",time:Math.floor(24*Math.random())+12})})),r.a.createElement(u,null,r.a.createElement(m,null,r.a.createElement("span",{className:"blue"},"<"),"Aayush ",r.a.createElement("span",{className:"blue"},"/>")),r.a.createElement(s.Link,{to:"/Message",style:{filter:"message"===n?"drop-shadow(2px 3px 10px gray)":"",color:"message"===n?"#30ABE8":"",background:"message"===n?"white":"",justifySelf:"end"},className:"bt bt-round-white "+(t&&"dark-btn")},"Say Hi!")),r.a.createElement("div",null))},h=function(e){e.siteTitle;var t=e.active,n=e.darkMode;return r.a.createElement("header",null,r.a.createElement("div",{className:"header"},r.a.createElement(p,{active:t,darkMode:n})))};h.propTypes={siteTitle:a.a.string},h.defaultProps={siteTitle:""};t.a=h},162:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=function(e,t,n,i){return"in"in e&&(e.when=e.in),o.default.Children.count(i)<2?o.default.createElement(r.default,a({},e,{inEffect:t,outEffect:n,children:i})):(i=o.default.Children.map(i,function(i){return o.default.createElement(r.default,a({},e,{inEffect:t,outEffect:n,children:i}))}),"Fragment"in o.default?o.default.createElement(o.default.Fragment,null,i):o.default.createElement("span",null,i))};var o=i(n(0)),r=i(n(163));e.exports=t.default},163:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,a=!1,o=void 0;try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done)&&(n.push(r.value),!t||n.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{!i&&s.return&&s.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n(0),c=(i=l)&&i.__esModule?i:{default:i},d=n(4),u=n(153),m=(0,d.shape)({make:d.func,duration:d.number.isRequired,delay:d.number.isRequired,forever:d.bool,count:d.number.isRequired,style:d.object.isRequired,reverse:d.bool}),p={collapse:d.bool,collapseEl:d.element,cascade:d.bool,wait:d.number,force:d.bool,disabled:d.bool,appear:d.bool,enter:d.bool,exit:d.bool,fraction:d.number,refProp:d.string,innerRef:d.func,onReveal:d.func,unmountOnExit:d.bool,mountOnEnter:d.bool,inEffect:m.isRequired,outEffect:(0,d.oneOfType)([m,(0,d.oneOf)([!1])]).isRequired,ssrReveal:d.bool,collapseOnly:d.bool,ssrFadeout:d.bool},h={transitionGroup:d.object},f=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return i.isOn=void 0===e.when||!!e.when,i.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:i.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},i.savedChild=!1,i.isShown=!1,u.observerMode?i.handleObserve=i.handleObserve.bind(i):(i.revealHandler=i.makeHandler(i.reveal),i.resizeHandler=i.makeHandler(i.resize)),i.saveRef=i.saveRef.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.default.Component),s(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?r({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!u.observerMode&&this.props.collapse&&window.document.dispatchEvent(u.collapseend)))}},{key:"animationEnd",value:function(e,t,n){var i=this,a=n.forever,o=n.count,r=n.delay,s=n.duration;if(!a){this.animationEndTimeout=window.setTimeout(function(){i&&i.el&&(i.animationEndTimeout=void 0,e.call(i))},r+(s+(t?s:0)*o))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,n){var i=n.duration+(t.cascade?n.duration:0),a=this.isOn?this.getDimensionValue():0,o=void 0,r=void 0;if(t.collapseOnly)o=n.duration/3,r=n.delay;else{var s=i>>2,l=s>>1;o=s,r=n.delay+(this.isOn?0:i-s-l),e.style.animationDuration=i-s+(this.isOn?l:-l)+"ms",e.style.animationDelay=n.delay+(this.isOn?s-l:0)+"ms"}return e.collapse={height:a,transition:"height "+o+"ms ease "+r+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,n=e[t?"outEffect":"inEffect"],i="style"in n&&n.style.animationName||void 0,a=void 0;e.collapseOnly?a={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&n.make&&(i=n.make),a={hasAppeared:!0,hasExited:!1,collapse:void 0,style:r({},n.style,{animationDuration:n.duration+"ms",animationDelay:n.delay+"ms",animationIterationCount:n.forever?"infinite":n.count,opacity:1,animationName:i}),className:n.className}),this.setState(e.collapse?this.collapse(a,e,n):a),t?(this.savedChild=c.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,n)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),u.ssr&&(0,u.disableSsr)()}},{key:"handleObserve",value:function(e,t){o(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&u.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u.globalHide||(0,u.hideAll)(),this&&this.el&&(e||(e=this.props),u.ssr&&(0,u.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout(function(){return t.reveal(e)},200)):n||this.inViewport(e)||e.force?this.animate(e):u.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var n=this.context.transitionGroup,i=n&&!n.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!i||u.ssr&&!u.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):u.ssr&&(u.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout(function(){return e.reveal(e.props,!0)},2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,n=void 0;n="string"==typeof e?e.split("").map(function(e,t){return c.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)}):c.default.Children.toArray(e);var i=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],o=i.duration,s=i.reverse,l=n.length,d=2*o;this.props.collapse&&(d=parseInt(this.state.style.animationDuration,10),o=d/2);var m=s?l:0;return n.map(function(e){return"object"===(void 0===e?"undefined":a(e))&&e?c.default.cloneElement(e,{style:r({},e.props.style,t.state.style,{animationDuration:Math.round((0,u.cascade)(s?m--:m++,0,l,o,d))+"ms"})}):e})}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===a(this.props.children)){var e=c.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:c.default.createElement("div",null,e)}return c.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var n=!1,i=t.props,a=i.style,o=i.className,s=i.children,l=this.props.disabled?o:(this.props.outEffect?u.namespace:"")+(this.state.className?" "+this.state.className:"")+(o?" "+o:"")||void 0,d=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&s&&this.state.style.animationName?(n=this.cascade(s),d=r({},a,{opacity:1})):d=this.props.disabled?a:r({},a,this.state.style);var m=r({},this.props.props,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({className:l,style:d},this.props.refProp,this.saveRef)),p=c.default.cloneElement(t,m,e?n||s:void 0);return void 0!==this.props.collapse?this.props.collapseEl?c.default.cloneElement(this.props.collapseEl,{style:r({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:p}):c.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:p}):p}},{key:"makeHandler",value:function(e){var t=this,n=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,u.raf)(n),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var n=this.el.offsetHeight,i=window.pageYOffset-t.getTop(this.el),a=Math.min(n,window.innerHeight)*(u.globalHide?e.fraction:0);return i>a-window.innerHeight&&i<n-a}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){u.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!u.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}();f.propTypes=p,f.defaultProps={fraction:.2,refProp:"ref"},f.contextTypes=h,f.displayName="RevealBase",t.default=f,e.exports=t.default},178:function(e,t,n){"use strict";function i(e,t){var n=t.distance,i=t.left,a=t.right,o=t.up,r=t.down,l=t.top,c=t.bottom,d=t.big,m=t.mirror,p=t.opposite,h=(n?n.toString():0)+((i?1:0)|(a?2:0)|(l||r?4:0)|(c||o?8:0)|(m?16:0)|(p?32:0)|(e?64:0)|(d?128:0));if(u.hasOwnProperty(h))return u[h];var f=i||a||o||r||l||c,v=void 0,g=void 0;if(f){if(!m!=!(e&&p)){var y=[a,i,c,l,r,o];i=y[0],a=y[1],l=y[2],c=y[3],o=y[4],r=y[5]}var b=n||(d?"2000px":"100%");v=i?"-"+b:a?b:"0",g=r||l?"-"+b:o||c?b:"0"}return u[h]=(0,s.animation)((e?"to":"from")+" {opacity: 0;"+(f?" transform: translate3d("+v+", "+g+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),u[h]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.children,a=(e.out,e.forever),o=e.timeout,r=e.duration,l=void 0===r?s.defaults.duration:r,d=e.delay,u=void 0===d?s.defaults.delay:d,m=e.count,p=void 0===m?s.defaults.count:m,h=function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(e,["children","out","forever","timeout","duration","delay","count"]),f={make:i,duration:void 0===o?l:o,delay:u,forever:a,count:p,style:{animationFillMode:"both"},reverse:h.left};return t?(0,c.default)(h,f,f,n):f}Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(4),s=n(153),l=n(162),c=(o=l)&&o.__esModule?o:{default:o},d={out:r.bool,left:r.bool,right:r.bool,top:r.bool,bottom:r.bool,big:r.bool,mirror:r.bool,opposite:r.bool,duration:r.number,timeout:r.number,distance:r.string,delay:r.number,count:r.number,forever:r.bool},u={};a.propTypes=d,t.default=a,e.exports=t.default},179:function(e,t,n){e.exports=n.p+"static/step2-dcde152e7c0e526d44568376d83d6733.svg"},180:function(e,t,n){e.exports=n.p+"static/step2-dark-ee17b824e168837a57f23d22684847e3.svg"}}]);
//# sourceMappingURL=component---src-pages-index-js-5d8563c1cbf95f873c13.js.map