(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(154),o=n(155),l=function(e){return r.a.createElement("div",{className:"home grid align-center"},r.a.createElement("div",{class:"project-element"},r.a.createElement("img",{className:"lg",src:"/pj-1.JPG",alt:""})),r.a.createElement("div",{class:"project-desc"}))};t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,null),r.a.createElement("div",{className:"container2"},r.a.createElement(l,{className:"row main-grid"})))}},144:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(149)),i=a(n(150)),o=a(n(7)),l=a(n(51)),s=a(n(52)),u=a(n(4)),c=a(n(0)),d=n(16),p=n(145);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/portfolio/"+e)}var m={activeClassName:u.default.string,activeStyle:u.default.object},v=function(e){function t(t){var n;n=e.call(this,t)||this,(0,s.default)((0,l.default)((0,l.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,l.default)((0,l.default)(n))),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,o=void 0===a?this.defaultGetProps:a,l=t.onClick,s=t.onMouseEnter,u=(t.activeClassName,t.activeStyle,t.innerRef,t.state),m=t.replace,v=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var h=f(n);return c.default.createElement(d.Link,(0,i.default)({to:h,state:u,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:u,replace:m})),!0}},v))},t}(c.default.Component);v.propTypes=(0,i.default)({},m,{innerRef:u.default.func,onClick:u.default.func,to:u.default.string.isRequired,replace:u.default.bool});var h=c.default.forwardRef(function(e,t){return c.default.createElement(v,(0,i.default)({innerRef:t},e))});t.default=h;var g=function(e,t){window.___navigate(f(e),t)};t.navigate=g;var E=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=E;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),E(e)}},145:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(144),s=n.n(l);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(146),c=n.n(u);n.d(t,"PageRenderer",function(){return c.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},147:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(145);t.a=function(e){return r.a.createElement("div",{className:"navbar nav-grid"},r.a.createElement("i",{className:"logos material-icons"},"face"),r.a.createElement("ul",{className:"nav align-left-on-lg"},r.a.createElement("li",null,r.a.createElement(i.Link,{to:"/",className:"bt bt-round-white"}," HOME")),r.a.createElement("li",null,r.a.createElement(i.Link,{to:"/Projects",className:"bt bt-round-white"},"PROJECTS ")),r.a.createElement("li",null,r.a.createElement("a",{href:"/Resume.pdf",className:"bt bt-round-white"},"RESUME"))))}},148:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",{className:"nav-btn"},r.a.createElement("span",{className:"line center"}),r.a.createElement("span",{className:"line center"}),r.a.createElement("span",{className:"line center"}))}},149:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},150:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},151:function(e,t,n){},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Aayush Shrestha"}}}}},153:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(53),s=n(2),u=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},154:function(e,t,n){"use strict";var a=n(152),r=n(0),i=n.n(r),o=n(4),l=n.n(o),s=n(145),u=n(147),c=n(148),d=function(e){e.siteTitle;return i.a.createElement("header",null,i.a.createElement("div",{className:"header"},i.a.createElement(u.a,null),i.a.createElement(c.a,null)))};d.propTypes={siteTitle:l.a.string},d.defaultProps={siteTitle:""};n(151);var p=function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{margin:"0 auto",padding:"0px ",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null)))},data:a})};p.propTypes={children:l.a.node.isRequired};t.a=p},155:function(e,t,n){"use strict";n(145);var a=n(4),r=n.n(a),i=n(0),o=n.n(i),l=n(147),s=n(148),u=function(e){e.siteTitle;return o.a.createElement("header",null,o.a.createElement("div",{className:"header"},o.a.createElement(l.a,null),o.a.createElement(s.a,null)))};u.propTypes={siteTitle:r.a.string},u.defaultProps={siteTitle:""},t.a=u}}]);
//# sourceMappingURL=component---src-pages-projects-js-3d61c0faa065b6f1127a.js.map