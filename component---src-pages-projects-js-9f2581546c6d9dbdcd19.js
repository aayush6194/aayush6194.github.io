(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,a){"use strict";a.r(t);a(169);var n=a(0),r=a.n(n),i=a(154),s=a(156),o=(a(170),a(155)),l=a.n(o),u=function(e){return r.a.createElement("div",{className:"home grid align-center dense"},r.a.createElement("div",{className:e.data.align+" project-element "},r.a.createElement(l.a,{fluid:e.fluid})),r.a.createElement("div",{className:" project-desc"},r.a.createElement("h2",{className:"center-text"},e.data.title),e.data.description,r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("a",{href:e.data.link},e.data.link))))};a.d(t,"pageQuery",function(){return c});var d=[{name:"image1",title:"To-do List",description:"A to-do list application built on Materialize CSS; uses PHP as the serverside language for logins, signup and adding/deleting to the list with MySQL as the database.",link:"http://todolistphp.gearhostpreview.com/",align:"left"},{name:"image2",title:"ParkStash",description:"",link:"",align:"right"},{name:"image3",title:"Auction Website",description:"A responsive ReactJs app to stimulate just the front end for an auction website.",link:"",align:"left"}],c="1879438833";t.default=function(e){var t=e.data;return r.a.createElement(i.a,null,r.a.createElement(s.a,null),r.a.createElement("div",{className:"container2"},console.log(d[0].name),d.map(function(e){return r.a.createElement(u,{className:"row main-grid",fluid:t[e.name].childImageSharp.fluid,data:e})})))}},144:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(147)),i=n(a(148)),s=n(a(7)),o=n(a(51)),l=n(a(52)),u=n(a(4)),d=n(a(0)),c=a(18),f=a(145);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:u.default.string,activeStyle:u.default.object},m=function(e){function t(t){var a;a=e.call(this,t)||this,(0,l.default)((0,o.default)((0,o.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,s=void 0===n?this.defaultGetProps:n,o=t.onClick,l=t.onMouseEnter,u=(t.activeClassName,t.activeStyle,t.innerRef,t.state),h=t.replace,m=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var g=p(a);return d.default.createElement(c.Link,(0,i.default)({to:g,state:u,getProps:s,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,f.parsePath)(a).pathname)},onClick:function(t){return o&&o(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),v(a,{state:u,replace:h})),!0}},m))},t}(d.default.Component);m.propTypes=(0,i.default)({},h,{innerRef:u.default.func,onClick:u.default.func,to:u.default.string.isRequired,replace:u.default.bool});var g=d.default.forwardRef(function(e,t){return d.default.createElement(m,(0,i.default)({innerRef:t},e))});t.default=g;var v=function(e,t){window.___navigate(p(e),t)};t.navigate=v;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(144),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var u=a(146),d=a.n(u);a.d(t,"PageRenderer",function(){return d.a});var c=a(32);a.d(t,"parsePath",function(){return c.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},146:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},147:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},148:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},149:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(145);t.a=function(e){return r.a.createElement("div",{className:"navbar nav-grid"},r.a.createElement("i",{className:"logos material-icons"},"face"),r.a.createElement("ul",{className:"nav align-left-on-lg"},r.a.createElement("li",null,r.a.createElement(i.Link,{to:"/",className:"bt bt-round-white"}," HOME")),r.a.createElement("li",null,r.a.createElement(i.Link,{to:"/Projects",className:"bt bt-round-white"},"PROJECTS ")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/aayush6194/aayush6194.github.io/raw/master/Resume.pdf",className:"bt bt-round-white"},"RESUME"))))}},150:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",{className:"nav-btn"},r.a.createElement("span",{className:"line center"}),r.a.createElement("span",{className:"line center"}),r.a.createElement("span",{className:"line center"}))}},151:function(e,t,a){},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Aayush Shrestha"}}}}},153:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(53),l=a(2),u=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=u},154:function(e,t,a){"use strict";var n=a(152),r=a(0),i=a.n(r),s=a(4),o=a.n(s),l=a(145),u=a(149),d=a(150),c=function(e){e.siteTitle;return i.a.createElement("header",null,i.a.createElement("div",{className:"header"},i.a.createElement(u.a,null),i.a.createElement(d.a,null)))};c.propTypes={siteTitle:o.a.string},c.defaultProps={siteTitle:""};a(151);var f=function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{margin:"0 auto",padding:"0px ",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null)))},data:n})};f.propTypes={children:o.a.node.isRequired};t.a=f},155:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var r,i=n(a(7)),s=n(a(51)),o=n(a(147)),l=n(a(148)),u=n(a(0)),d=n(a(4)),c=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=c(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=[];var m=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",u=e.opacity?e.opacity:"1";return"<picture>"+n+r+"<img "+o+l+t+s+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+u+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},v=u.default.forwardRef(function(e,t){var a=e.style,n=e.onLoad,r=e.onError,i=(0,o.default)(e,["style","onLoad","onError"]);return u.default.createElement("img",(0,l.default)({},i,{onLoad:n,onError:r,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});v.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!1,i=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,r=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:!1,IOSupported:r,fadeIn:i,hasNoScript:l,seenBefore:o},a.imageRef=u.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,h=e.fluid,m=e.fixed,y=e.backgroundColor,b=e.Tag,w=e.itemProp,E="boolean"==typeof y?"lightgray":y,S=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),R=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),L={title:t,alt:this.state.isVisible?"":a,style:S,className:p};if(h){var N=h;return u.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},u.default.createElement(b,{style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),N.base64&&u.default.createElement(v,(0,l.default)({src:N.base64},L)),N.tracedSVG&&u.default.createElement(v,(0,l.default)({src:N.tracedSVG},L)),E&&u.default.createElement(b,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&u.default.createElement("picture",null,N.srcSetWebp&&u.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),u.default.createElement("source",{srcSet:N.srcSet,sizes:N.sizes}),u.default.createElement(v,{alt:a,title:t,src:N.src,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},N))}}))}if(m){var P=m,T=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},i);return"inherit"===i.display&&delete T.display,u.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},P.base64&&u.default.createElement(v,(0,l.default)({src:P.base64},L)),P.tracedSVG&&u.default.createElement(v,(0,l.default)({src:P.tracedSVG},L)),E&&u.default.createElement(b,{title:t,style:{backgroundColor:E,width:P.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:P.height}}),this.state.isVisible&&u.default.createElement("picture",null,P.srcSetWebp&&u.default.createElement("source",{type:"image/webp",srcSet:P.srcSetWebp,sizes:P.sizes}),u.default.createElement("source",{srcSet:P.srcSet,sizes:P.sizes}),u.default.createElement(v,{alt:a,title:t,width:P.width,height:P.height,src:P.src,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:P.width,height:P.height},P))}}))}return null},t}(u.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),w=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:b,sizes:w,fixed:b,fluid:w,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var E=y;t.default=E},156:function(e,t,a){"use strict";a(145);var n=a(4),r=a.n(n),i=a(0),s=a.n(i),o=a(149),l=a(150),u=function(e){e.siteTitle;return s.a.createElement("header",null,s.a.createElement("div",{className:"header"},s.a.createElement(o.a,null),s.a.createElement(l.a,null)))};u.propTypes={siteTitle:r.a.string},u.defaultProps={siteTitle:""},t.a=u},169:function(e,t,a){var n=a(24).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||a(16)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},170:function(e,t,a){"use strict";a(171)("link",function(e){return function(t){return e(this,"a","href",t)}})},171:function(e,t,a){var n=a(11),r=a(25),i=a(17),s=/"/g,o=function(e,t,a,n){var r=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(n).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-pages-projects-js-9f2581546c6d9dbdcd19.js.map