(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{143:function(e,t,a){"use strict";a.r(t);a(155);var i=a(0),r=a.n(i),n=a(146),o=a(157),s=(a(197),a(199),a(7)),l=a.n(s),d=a(201),c=a.n(d),u=a(144),f=a(158),p=a(166),g=a.n(p),h=a(202),m=a.n(h),b=a(160),y=u.a.a.withConfig({displayName:"ProjectList__Lin",componentId:"sc-1phrmca-0"})([""]),v=["#18A7EE","#18EE42","#EED018","#F35F90","#D45FF3","#0288D1","#FFEB3B","#795548","#FF5722","#303F9F","#303F9F","#303F9F"],E=u.a.div.withConfig({displayName:"ProjectList__Box",componentId:"sc-1phrmca-1"})(["display:inline-block;margin:2px;background:",";padding:0.3em 0.5em;border-radius:7px;"],function(e){return e.colr}),S=u.a.div.withConfig({displayName:"ProjectList__ImageBox",componentId:"sc-1phrmca-2"})(["display:grid;background:#30ABE8;background:",";height:100%;"],function(e){return e.background}),w=Object(u.a)(f.a.div({start:{scale:0},end:{scale:1},transition:{duration:210,ease:"linear"}})).withConfig({displayName:"ProjectList__Wrapper",componentId:"sc-1phrmca-3"})(["background:#30ABE8;background:",""],function(e){return e.background}),k=u.a.div.withConfig({displayName:"ProjectList__Description",componentId:"sc-1phrmca-4"})(["background:#005A9C;background-image:linear-gradient( rgba(0,90,156,0.8),rgba(0,90,156,0.8) ),url(",");background:linear-gradient( ",","," ),url(",");background-size:100% 100%;opacity:0.8;color:white;padding:1em;overflow:hidden;text-overflow:ellipsis;display:grid;grid-template-rows:1fr auto;"],m.a,function(e){return e.background},function(e){return e.background},m.a),L=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={stage:"end"},a}l()(t,e);var a=t.prototype;return a.componentDidCatch=function(e,t){console(e),console(t)},a.render=function(){var e=this.props,t=e.darkMode,a=e.index,i=e.fluid,n=this.props.data,o=n.description,s=n.title,l=n.link;return r.a.createElement(g.a,null,r.a.createElement(w,{pose:this.state.stage,className:"home grid align-center dense project-container",background:(t?"black":"#30ABE8")+" "},r.a.createElement("div",{className:a%2==0?"left":"right project-element "},r.a.createElement(S,{background:(t?"black":"#30ABE8")+" "},r.a.createElement(c.a,{fluid:i,style:{background:"transparent"}}))),r.a.createElement(k,{background:"rgba(0, "+(t?"0, 0":"90, 156")+", 0.8)"},r.a.createElement("div",null,r.a.createElement("h2",{className:"center-text"},s),r.a.createElement("i",{className:"material-icons md-icon"},"description")," ",o,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("i",{className:"material-icons md-icon"},"code"),this.props.data.code.map(function(e){return r.a.createElement(E,{key:e.toString(),colr:v[Math.floor(Math.random()*v.length)]}," ",e," ")}),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("i",{className:"material-icons md-icon"},"link")," ",r.a.createElement(y,{href:l},l))),r.a.createElement("span",{onClick:function(){return function(e){var t=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):void 0;if(void 0===t)return alert("Login First"),!1;alert("Feature coming soon!");var a=t.email,i=t.id;b.a.like({pid:e,id:i,email:a}).catch(function(e){return console.log(e)})}(a)}},r.a.createElement("i",{className:"fa fa-heart md-icon","aria-hidden":"true"})))))},t}(r.a.Component),I=a(152),R=a(161),N=a(203),x=a(156);a.d(t,"pageQuery",function(){return C});var j=N.proj,C="1682947771";t.default=function(e){var t=e.data,a=Object(i.useState)(!1),s=a[0],l=a[1];return Object(i.useEffect)(function(){var e="true"===(!!localStorage.getItem("dark-mode")&&localStorage.getItem("dark-mode"));l(e)},[]),r.a.createElement(n.a,{darkMode:s},r.a.createElement(I.a,{title:"Projects",keywords:["gatsby","application","react"]}),r.a.createElement(o.a,{active:"project",darkMode:s}),r.a.createElement(R.a,{active:"project",darkMode:s}),r.a.createElement("div",{className:"container2"},j.map(function(e,a){return r.a.createElement(L,{darkMode:s,key:a,index:a,className:"row main-grid",fluid:t[e.name].childImageSharp.fluid,data:e})})),r.a.createElement(x.a,{toggleDarkMode:function(e){l("dark"===e),localStorage.setItem("dark-mode","dark"===e)},darkMode:s}))}},157:function(e,t,a){"use strict";var i=a(4),r=a.n(i),n=a(0),o=a.n(n),s=a(154),l=function(e){e.siteTitle;var t=e.active,a=e.darkMode;return o.a.createElement("header",null,o.a.createElement("div",{className:"header"},o.a.createElement(s.a,{active:t,darkMode:a})))};l.propTypes={siteTitle:r.a.string},l.defaultProps={siteTitle:""},t.a=l},197:function(e,t,a){"use strict";a(198);var i=a(5),r=a(73),n=a(16),o=/./.toString,s=function(e){a(18)(RegExp.prototype,"toString",e,!0)};a(25)(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?s(function(){var e=i(this);return"/".concat(e.source,"/","flags"in e?e.flags:!n&&e instanceof RegExp?r.call(e):void 0)}):"toString"!=o.name&&s(function(){return o.call(this)})},198:function(e,t,a){a(16)&&"g"!=/./g.flags&&a(24).f(RegExp.prototype,"flags",{configurable:!0,get:a(73)})},199:function(e,t,a){"use strict";a(200)("link",function(e){return function(t){return e(this,"a","href",t)}})},200:function(e,t,a){var i=a(11),r=a(25),n=a(20),o=/"/g,s=function(e,t,a,i){var r=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(i).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),i(i.P+i.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},201:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,n=i(a(7)),o=i(a(51)),s=i(a(162)),l=i(a(163)),d=i(a(0)),c=i(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},g=[];var h=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){g.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),g.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+r+"<img "+s+l+t+o+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=d.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,r=e.onError,n=(0,s.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},n,{onLoad:i,onError:r,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});b.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,n=t.fadeIn,s=p(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:r,fadeIn:n,hasNoScript:l,seenBefore:s},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,h=e.fixed,y=e.backgroundColor,v=e.Tag,E=e.itemProp,S="boolean"==typeof y?"lightgray":y,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),k=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),L={title:t,alt:this.state.isVisible?"":a,style:w,className:p};if(g){var I=g;return d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(I.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),I.base64&&d.default.createElement(b,(0,l.default)({src:I.base64},L)),I.tracedSVG&&d.default.createElement(b,(0,l.default)({src:I.tracedSVG},L)),S&&d.default.createElement(v,{title:t,style:{backgroundColor:S,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,I.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),d.default.createElement("source",{srcSet:I.srcSet,sizes:I.sizes}),d.default.createElement(b,{alt:a,title:t,src:I.src,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},I))}}))}if(h){var R=h,N=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},n);return"inherit"===n.display&&delete N.display,d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&d.default.createElement(b,(0,l.default)({src:R.base64},L)),R.tracedSVG&&d.default.createElement(b,(0,l.default)({src:R.tracedSVG},L)),S&&d.default.createElement(v,{title:t,style:{backgroundColor:S,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),d.default.createElement(b,{alt:a,title:t,width:R.width,height:R.height,src:R.src,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),E=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:v,sizes:E,fixed:v,fluid:E,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var S=y;t.default=S},202:function(e,t,a){e.exports=a.p+"static/step-79c0f665ec28949bee3f5dd85f58d9c6.svg"},203:function(e){e.exports={proj:[{name:"image5",title:"Dreammy 2.0",description:"A social site with logged features with tokens, content uploads, private chat, friend suggesstions",link:"https://dreammy.aayushh.com",code:["Express","ReactJs","Redux","Styled-Components","Materialize","MongoDB","Google Cloud"]},{name:"image7",title:"Url Shortner",description:"A service that shortens the any URL and performs redirects to the actual site",link:"https://github.com/aayush6194/shorten-url",code:["Next.js","NodeJs","Express","MongoDB"]},{name:"image6",title:"Google Image Extractor",description:"A webscraping app that extracts google images related to the searched keyword",link:"https://github.com/aayush6194/google-image-extractor",code:["NodeJs","EJS","Puppeteer"]},{name:"image8",title:"Game Searcher",description:"A frontend angular application that implements game database API to search games. Additionally, enables users to create game wishlist within the app",link:"https://github.com/aayush6194/game-searcher",code:["Angular","Rxjs","ngrx","NodeJs","Express","MongoDB"]},{name:"image4",title:"Calender App",description:"A Calender App: IN PROGRESS",link:"https://calendar.aayushh.com",code:["NodeJs","ReactJs","Redux","Styled-Components","MongoDB"]},{name:"image1",title:"To-do List",description:"A to-do list application built on Materialize CSS; uses PHP as the serverside language for logins, signup and adding/deleting to the list with MySQL as the database.",link:"http://todolistphp.gearhostpreview.com",code:["PHP","Materialize","MySQL","Javascript"]},{name:"image2",title:"ParkStash",description:"A full responsive side created using css grid for ParkStash",link:"",code:["CSS GRID"]},{name:"image3",title:"Auction Website",description:"A responsive ReactJs app to stimulate just the front end for an auction website.",link:"",code:["ReactJs"]}]}}}]);
//# sourceMappingURL=component---src-pages-projects-js-bce2387a914efcc558fc.js.map