(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{142:function(e,t,i){"use strict";i.r(t);i(163),i(81);var a=i(0),n=i.n(a),r=i(162),o=(i(32),i(278),i(280),i(73),i(174),i(7)),s=i.n(o),l=i(281),c=i.n(l),d=i(143),u=i(161),m=i.n(u),g=i(282),I=i.n(g),p=i(175),h=i(148),f=i(151),N=i(152),y=d.a.a.withConfig({displayName:"ProjectList__Lin",componentId:"sc-1phrmca-0"})([""]),j=["#18A7EE","#18EE42","#EED018","#F35F90","#D45FF3","#0288D1","#FFEB3B","#795548","#FF5722","#303F9F","#303F9F","#303F9F"],b=function(e){function t(t){var i;return(i=e.call(this,t)||this).scrollRef=n.a.createRef(),i.state={likes:[],hasLiked:!1,showSuccess:!1,loading:!0,activeItem:-1},i}s()(t,e);var i=t.prototype;return i.componentDidCatch=function(e,t){console(e),console(t)},i.componentDidMount=function(){var e=this;p.a.getLikes(this.props.data.pid).then(function(t){if(t.success)if(void 0!==typeof t.likes){e.setState({likes:t.likes});var i=e.props.userContext.user;if(i&&void 0!==i){var a=i.email;i.id;t.likes.forEach(function(t){var i=t.email;a===i&&e.setState({hasLiked:!0})})}}else e.setState({likes:[]});e.setState({loading:!1})}).catch(function(e){return console.log(e)}).finally(function(){return e.setState({loading:!1})})},i.render=function(){var e=this,t=this.props,i=t.darkMode,a=t.index,r=t.fluid,o=this.props.data,s=o.description,l=o.title,d=o.link,u=o.pid,g=this.state,I=g.likes,h=g.hasLiked,f=g.showSuccess,b=g.loading;return this.props.active&&this.scrollRef.current.scrollIntoView({behavior:"smooth",block:"start"}),n.a.createElement(m.a,null,n.a.createElement(k,{ref:this.scrollRef,pose:this.state.stage,className:"home grid align-center dense project-container "+(this.props.active&&"svg-glow"),background:(i?"black":"#30ABE8")+" "},n.a.createElement("div",{className:a%2==0?"left":"right project-element "},n.a.createElement(S,{background:(i?"black":N.c)+" "},n.a.createElement(c.a,{fluid:r,style:{background:"transparent"}}))),n.a.createElement(x,{background:"rgba( "+(i?"0, 0, 0":"44,162,172")+", 0.8)"},n.a.createElement("div",null,n.a.createElement("h2",{className:"center-text"},l),n.a.createElement("i",{className:"material-icons md-icon"},"description")," ",s,n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("i",{className:"material-icons md-icon"},"code"),this.props.data.code.map(function(e){return n.a.createElement(M,{key:e.toString(),colr:j[Math.floor(Math.random()*j.length)]}," ",e," ")}),n.a.createElement("div",null,n.a.createElement("br",null),n.a.createElement("i",{className:"material-icons md-icon"},"link")," ",n.a.createElement(y,{target:"_blank",href:d},d))),n.a.createElement("span",{onClick:function(){return function(t){var i=e.props.userContext.user;void 0===i?e.props.modalContext.displayModal("To Like Projects Please Login First."):p.a.like({pid:t,user:i}).then(function(t){t.success&&e.setState({hasLiked:!0,likes:[].concat(e.state.likes,[i]),showSuccess:!0}),setTimeout(function(){return e.setState({showSuccess:!1})},3e3)}).catch(function(e){return console.log(e)})}(u)},style:{padding:"1em .3em"}},n.a.createElement("i",{className:"fa fa-heart md-icon hover-red "+(h&&"red"),"aria-hidden":"true"}),n.a.createElement("span",{className:"tooltip-container"},I?" "+I.length+" "+(1===I.length?"person":"people")+" liked this":" Be the first one to like this.",f&&n.a.createElement(L,{className:"opacity-animation"},"Liked!"),n.a.createElement("div",{className:"tooltip"},b&&I.length>0?"Loading":I.map(function(e){var t=e.fname,i=e.lname,a=e.id;return n.a.createElement("div",{key:a},t+" "+i)})))))))},t}(n.a.Component),M=d.a.div.withConfig({displayName:"ProjectList__Box",componentId:"sc-1phrmca-1"})(["display:inline-block;margin:2px;background:",";padding:0.3em 0.5em;border-radius:7px;"],function(e){return e.colr}),S=d.a.div.withConfig({displayName:"ProjectList__ImageBox",componentId:"sc-1phrmca-2"})(["display:grid;background:#30ABE8;background:",";height:100%;"],function(e){return e.background}),k=d.a.div.withConfig({displayName:"ProjectList__Wrapper",componentId:"sc-1phrmca-3"})(["background:#30ABE8;background:",""],function(e){return e.background}),x=d.a.div.withConfig({displayName:"ProjectList__Description",componentId:"sc-1phrmca-4"})(["background:#005A9C;background-image:linear-gradient( rgba(0,90,156,0.8),rgba(0,90,156,0.8) ),url(",");background:linear-gradient( ",","," ),url(",");background-size:100% 100%;opacity:0.8;color:white;padding:1em;overflow:hidden;text-overflow:ellipsis;display:grid;grid-template-rows:1fr auto;"],I.a,function(e){return e.background},function(e){return e.background},I.a),L=d.a.span.withConfig({displayName:"ProjectList__Message",componentId:"sc-1phrmca-5"})(["padding:.3em;color:#005A9C;margin-left:1em;border-radius:1em;border:2px solid #005A9C;background:white;"]),w=function(e){return n.a.createElement(h.a,null,function(t){return n.a.createElement(f.a,null,function(i){return n.a.createElement(b,Object.assign({modalContext:t},{userContext:i},e))})})},E=i(283),Z=i(157);i.d(t,"pageQuery",function(){return D});var v=E.proj,D="3237646813";t.default=function(e){var t=e.data,i=Object(a.useState)(!1),o=i[0],s=i[1],l=Object(a.useState)(-1),c=l[0],d=l[1];return Object(a.useEffect)(function(){var e="true"===(!!localStorage.getItem("dark-mode")&&localStorage.getItem("dark-mode"));s(e);var t=window.location.href.split("?")[1],i=(t?t.split("="):[-1,-1])[1];d(i)},[]),n.a.createElement(r.a,{darkMode:o},n.a.createElement(Z.e,{title:"Projects",keywords:["gatsby","application","react"]}),n.a.createElement(Z.b,{active:"project",darkMode:o}),n.a.createElement(Z.f,{active:"project",darkMode:o}),n.a.createElement("div",{className:"container2"},v.map(function(e,i){return n.a.createElement(w,{darkMode:o,active:i==c,key:i,index:i,fluid:t[e.name].childImageSharp.fluid,data:e})})),n.a.createElement(Z.a,{toggleDarkMode:function(e){s("dark"===e),localStorage.setItem("dark-mode","dark"===e)},darkMode:o}))}},145:function(e,t,i){"use strict";i.r(t),i.d(t,"graphql",function(){return I}),i.d(t,"StaticQueryContext",function(){return m}),i.d(t,"StaticQuery",function(){return g});var a=i(0),n=i.n(a),r=i(4),o=i.n(r),s=i(144),l=i.n(s);i.d(t,"Link",function(){return l.a}),i.d(t,"withPrefix",function(){return s.withPrefix}),i.d(t,"navigate",function(){return s.navigate}),i.d(t,"push",function(){return s.push}),i.d(t,"replace",function(){return s.replace}),i.d(t,"navigateTo",function(){return s.navigateTo});var c=i(147),d=i.n(c);i.d(t,"PageRenderer",function(){return d.a});var u=i(33);i.d(t,"parsePath",function(){return u.a});var m=n.a.createContext({}),g=function(e){return n.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function I(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,t,i){"use strict";var a=i(156),n=i(0),r=i.n(n),o=i(4),s=i.n(o),l=i(173),c=i.n(l),d=i(145);function u(e){e.description;var t=e.lang,i=e.meta,n=e.keywords,o=e.title;return r.a.createElement(d.StaticQuery,{query:m,render:function(e){var a="A Portfolio Site";return r.a.createElement(c.a,{htmlAttributes:{lang:t},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:o},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:a}].concat(n.length>0?{name:"keywords",content:n.join(", ")}:[]).concat(i)})},data:a})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u;var m="1025518380"},147:function(e,t,i){var a;e.exports=(a=i(153))&&a.default||a},150:function(e,t,i){"use strict";i(73),i(51),i(74),i(171);var a=i(0),n=i.n(a),r=i(145),o=i(143),s=Array.from(Array(20).keys()),l=o.a.span.withConfig({displayName:"Navbar__Animation",componentId:"sc-13abk2p-0"})(["display:block;"]),c=o.a.div.withConfig({displayName:"Navbar__Box",componentId:"sc-13abk2p-1"})(["display:grid;grid-template-columns:1fr 1fr;"]),d=o.a.div.withConfig({displayName:"Navbar__Name",componentId:"sc-13abk2p-2"})(["color:white;font-weight:bold;font-size:1.3em;align-self:stretch"]);t.a=function(e){var t=e.darkMode,i=e.active;return n.a.createElement("div",null,n.a.createElement(l,{className:"hide"},s.map(function(e){return n.a.createElement("span",{pose:"start",key:e,style:{background:"rgba(0 , 0, 0, 0.1)",top:Math.floor(95*Math.random())+"%",left:Math.floor(95*Math.random())+"%",position:"absolute",display:"block",width:"1em",height:"1em",bottom:0,borderRadius:"0.1em",animationDelay:"0s",overflow:"hidden",animationDuration:Math.floor(24*Math.random())+18+"s",animationIterationCount:"infinite"},className:"particle",time:Math.floor(24*Math.random())+12})})),n.a.createElement(c,null,n.a.createElement(d,null,n.a.createElement("span",{className:"blue"},"<Aayush />")),n.a.createElement(r.Link,{to:"/Message",style:{filter:"message"===i?"drop-shadow(2px 3px 10px gray)":"",color:"message"===i?"#30ABE8":"",background:"message"===i?"white":"",justifySelf:"end"},className:"bt bt-round-white "+(t&&"dark-btn")},"Say Hi!")),n.a.createElement("div",null))}},153:function(e,t,i){"use strict";i.r(t);i(32);var a=i(0),n=i.n(a),r=i(4),o=i.n(r),s=i(54),l=i(2),c=function(e){var t=e.location,i=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(s.a,Object.assign({location:t,pageResources:i},i.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},154:function(e,t,i){e.exports=i.p+"static/google-8b201685859c6b291fb39019e19896fd.png"},155:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iMDYwZTE5YWEtM2Y3ZC00ZjA3LWFhN2UtODIwZjhkMzcxZjU1IiBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI4NzAuNzEiIGhlaWdodD0iNjkxLjIxIiB2aWV3Qm94PSIwIDAgODcwLjcxIDY5MS4yMSI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSI5NmQ1YmIyMS0xOTY1LTRkM2UtYWIzNy0xYmNjN2JlNTE0ZTYiIHgxPSIzMDkuMjciIHkxPSI1NjAuNzIiIHgyPSIzMDkuMjciIHkyPSI0MDYuMDYiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTEsIDAsIDAsIDEsIDYxNi42LCA4Mi4yOCkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9ImdyYXkiIHN0b3Atb3BhY2l0eT0iMC4yNSIvPjxzdG9wIG9mZnNldD0iMC41NCIgc3RvcC1jb2xvcj0iZ3JheSIgc3RvcC1vcGFjaXR5PSIwLjEyIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJncmF5IiBzdG9wLW9wYWNpdHk9IjAuMSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSIzNjA4Y2ZiZS00ZTU3LTQyYzgtOGEzZS0yYjk5ZTZiNmM2YTAiIHgxPSItMTc1LjI5IiB5MT0iMTU3LjczIiB4Mj0iLTE3NS4yOSIgeTI9IjMuMDciIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMCwgLTEsIC0xLCAwLCA5NzAuNzMsIDI5LjA3KSIgeGxpbms6aHJlZj0iIzk2ZDViYjIxLTE5NjUtNGQzZS1hYjM3LTFiY2M3YmU1MTRlNiIvPjxsaW5lYXJHcmFkaWVudCBpZD0iZjRkNmIxNTAtMzg5Mi00ZDZmLWJlZDktMjI2MTJjYzU5NTgzIiB4MT0iLTI0Ni4yOSIgeTE9IjQ1Ni4yNSIgeDI9Ii0yNDYuMjkiIHkyPSIzMDEuNTkiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMCwgLTEsIC0xLCAwLCAxMjkzLjI2LCAzMDQuMDkpIiB4bGluazpocmVmPSIjOTZkNWJiMjEtMTk2NS00ZDNlLWFiMzctMWJjYzdiZTUxNGU2Ii8+PGxpbmVhckdyYWRpZW50IGlkPSI2NzVjMjU3NS02OWM4LTRjMDgtOTg1OS0wNTMwZDlhOTRhZDIiIHgxPSI2MCIgeTE9IjIyNi4xNyIgeDI9IjYwIiB5Mj0iNzEuNTEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTEsIDAsIDAsIDEsIDQzNi4yNCwgNzEuNTkpIiB4bGluazpocmVmPSIjOTZkNWJiMjEtMTk2NS00ZDNlLWFiMzctMWJjYzdiZTUxNGU2Ii8+PGxpbmVhckdyYWRpZW50IGlkPSIyNDUyNThiZS04ZWYyLTQxNjMtYjgxNS0zZmJkMjExZmMzMzQiIHgxPSI0MzUuNjYiIHkxPSI2OTEuMjEiIHgyPSI0MzUuNjYiIHkyPSI5LjIxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEsIDAsIDAsIDEsIDAsIDApIiB4bGluazpocmVmPSIjOTZkNWJiMjEtMTk2NS00ZDNlLWFiMzctMWJjYzdiZTUxNGU2Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJhZmIzNmZkMy1mMjk4LTQxMTctYmE5ZS05ZjBjNmE0ZWNjZmMiIHgxPSI0MzUuNjYiIHkxPSI1NDQuNzEiIHgyPSI0MzUuNjYiIHkyPSI2OS41OSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKSIgeGxpbms6aHJlZj0iIzk2ZDViYjIxLTE5NjUtNGQzZS1hYjM3LTFiY2M3YmU1MTRlNiIvPjxsaW5lYXJHcmFkaWVudCBpZD0iOWI0NmVjNjctZDBlYS00NWZmLTgwZjEtZmUzZGI3Yjg2MDMwIiB4MT0iNjAwLjMiIHkxPSI3ODYuNjkiIHgyPSI2MDAuMyIgeTI9IjU2NS45NiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKSIgeGxpbms6aHJlZj0iIzk2ZDViYjIxLTE5NjUtNGQzZS1hYjM3LTFiY2M3YmU1MTRlNiIvPjwvZGVmcz48dGl0bGU+b3BlbmVkPC90aXRsZT48cmVjdCB4PSIxODEuNSIgeT0iNDg4LjM0IiB3aWR0aD0iMjUxLjY2IiBoZWlnaHQ9IjE1NC42NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMxMy40OCA3LjAyKSByb3RhdGUoLTE2LjYpIiBmaWxsPSJ1cmwoIzk2ZDViYjIxLTE5NjUtNGQzZS1hYjM3LTFiY2M3YmU1MTRlNikiLz48cmVjdCB4PSIxODQuMjYiIHk9IjQ5Mi41NyIgd2lkdGg9IjI0My4xMyIgaGVpZ2h0PSIxNDQuMzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMTMuMjggNi41NSkgcm90YXRlKC0xNi42KSIgZmlsbD0iI2ZmZiIvPjxnIG9wYWNpdHk9IjAuNiI+PHJlY3QgeD0iMTg0LjU2IiB5PSI1MzIuOTYiIHdpZHRoPSIzMC45MyIgaGVpZ2h0PSIyMi44OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzgyLjYzIDkwNC41NSkgcm90YXRlKDE2My40KSIgZmlsbD0iI2Y1NWY0NCIvPjxyZWN0IHg9IjIyMS45NyIgeT0iNTcwLjk5IiB3aWR0aD0iMTE4Ljc4IiBoZWlnaHQ9IjcuNDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU1MC41NyA5NDAuNjQpIHJvdGF0ZSgxNjMuNCkiIGZpbGw9IiNmNTVmNDQiLz48cmVjdCB4PSIyNTguNDIiIHk9IjU4NC4yMyIgd2lkdGg9Ijg2LjYxIiBoZWlnaHQ9IjQuOTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU5My44OCA5NTguMzIpIHJvdGF0ZSgxNjMuNCkiIGZpbGw9IiNmNTVmNDQiLz48L2c+PHJlY3QgeD0iODEyLjk5IiB5PSI3OC41MyIgd2lkdGg9IjE1NC42NiIgaGVpZ2h0PSIyNTEuNjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM1NC45MSA5MzQuOCkgcm90YXRlKC03OC45OCkiIGZpbGw9InVybCgjMzYwOGNmYmUtNGU1Ny00MmM4LThhM2UtMmI5OWU2YjZjNmEwKSIvPjxyZWN0IHg9IjgxNy4yNSIgeT0iODEuMjgiIHdpZHRoPSIxNDQuMzQiIGhlaWdodD0iMjQzLjEzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNTUuNjYgOTMyLjcpIHJvdGF0ZSgtNzguOTgpIiBmaWxsPSIjZmZmIi8+PGcgb3BhY2l0eT0iMC42Ij48cmVjdCB4PSI3ODkuNjUiIHk9IjEyNC4zMiIgd2lkdGg9IjMwLjkzIiBoZWlnaHQ9IjIyLjg5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDA0Ljc4IDMxOC41Mikgcm90YXRlKC0xNjguOTgpIiBmaWxsPSIjZjU1ZjQ0Ii8+PHJlY3QgeD0iODAzLjc0IiB5PSIxOTYuNjEiIHdpZHRoPSIxMTguNzgiIGhlaWdodD0iNy40MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUwNy40MSA0NTcuNTQpIHJvdGF0ZSgtMTY4Ljk4KSIgZmlsbD0iI2Y1NWY0NCIvPjxyZWN0IHg9IjgzMi4zIiB5PSIyMTcuOTIiIHdpZHRoPSI4Ni42MSIgaGVpZ2h0PSI0Ljk1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNTI4LjMgNDk5LjcxKSByb3RhdGUoLTE2OC45OCkiIGZpbGw9IiNmNTVmNDQiLz48L2c+PHJlY3QgeD0iODM3LjAxIiB5PSI0MjQuNTUiIHdpZHRoPSIxNTQuNjYiIGhlaWdodD0iMjUxLjY2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzA4LjE0IDMwNC44OSkgcm90YXRlKC0yMy40NSkiIGZpbGw9InVybCgjZjRkNmIxNTAtMzg5Mi00ZDZmLWJlZDktMjI2MTJjYzU5NTgzKSIvPjxyZWN0IHg9Ijg0Mi45IiB5PSI0MjcuMjEiIHdpZHRoPSIxNDQuMzQiIGhlaWdodD0iMjQzLjEzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzA3LjQ1IDMwNS4wNSkgcm90YXRlKC0yMy40NSkiIGZpbGw9IiNmZmYiLz48ZyBvcGFjaXR5PSIwLjYiPjxyZWN0IHg9IjkwNy4yIiB5PSI0MjkuODYiIHdpZHRoPSIzMC45MyIgaGVpZ2h0PSIyMi44OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzIwLjMxIDEzNTguOTgpIHJvdGF0ZSgtMTEzLjQ1KSIgZmlsbD0iIzQ3ZTZiMSIvPjxyZWN0IHg9Ijg0Mi44OSIgeT0iNTIxLjk2IiB3aWR0aD0iMTE4Ljc4IiBoZWlnaHQ9IjcuNDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYxNC40MSAxNDU4LjIyKSByb3RhdGUoLTExMy40NSkiIGZpbGw9IiM0N2U2YjEiLz48cmVjdCB4PSI4NDkuNDgiIHk9IjU0NC44NSIgd2lkdGg9Ijg2LjYxIiBoZWlnaHQ9IjQuOTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU4MS4yOCAxNDc5Ljc3KSByb3RhdGUoLTExMy40NSkiIGZpbGw9IiM0N2U2YjEiLz48L2c+PHJlY3QgeD0iMjUwLjQxIiB5PSIxNDMuMSIgd2lkdGg9IjI1MS42NiIgaGVpZ2h0PSIxNTQuNjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTYuNjkgMzQuMDYpIHJvdGF0ZSgtMTkuNTMpIiBmaWxsPSJ1cmwoIzY3NWMyNTc1LTY5YzgtNGMwOC05ODU5LTA1MzBkOWE5NGFkMikiLz48cmVjdCB4PSIyNTMuMTMiIHk9IjE0Ny40MiIgd2lkdGg9IjI0My4xMyIgaGVpZ2h0PSIxNDQuMzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTYuNSAzMy41KSByb3RhdGUoLTE5LjUzKSIgZmlsbD0iI2ZmZiIvPjxnIG9wYWNpdHk9IjAuNiI+PHJlY3QgeD0iMjUyLjUyIiB5PSIxOTMuMjMiIHdpZHRoPSIzMC45MyIgaGVpZ2h0PSIyMi44OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDI0LjMzIDIwMy41OSkgcm90YXRlKDE2MC40NykiIGZpbGw9IiM0Mjg1ZjQiLz48cmVjdCB4PSIyOTEuMzgiIHk9IjIyNy4wNyIgd2lkdGg9IjExOC43OCIgaGVpZ2h0PSI3LjQyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1OTMuODYgMjI2LjYzKSByb3RhdGUoMTYwLjQ3KSIgZmlsbD0iIzQyODVmNCIvPjxyZWN0IHg9IjMyOC40MSIgeT0iMjM5LjI2IiB3aWR0aD0iODYuNjEiIGhlaWdodD0iNC45NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjM4LjIxIDI0MC44OSkgcm90YXRlKDE2MC40NykiIGZpbGw9IiM0Mjg1ZjQiLz48L2c+PHBvbHlnb24gcG9pbnRzPSI0MzUuNjYgOS4yMSAxNDIuNjYgMjg1LjA0IDE0Mi42NiA2OTEuMjEgNzI4LjY1IDY5MS4yMSA3MjguNjUgMjg1LjA0IDQzNS42NiA5LjIxIiBmaWxsPSJ1cmwoIzI0NTI1OGJlLThlZjItNDE2My1iODE1LTNmYmQyMTFmYzMzNCkiLz48cG9seWdvbiBwb2ludHM9IjcyNS42OCA2ODIuMyAxNDUuNjMgNjgyLjMgMTQ1LjYzIDI4NC4zOCA0MzUuNjYgMTQuMTYgNzI1LjY4IDI4NC4zOCA3MjUuNjggNjgyLjMiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSIyMzMuNzMiIHk9IjY5LjU5IiB3aWR0aD0iNDAzLjg1IiBoZWlnaHQ9IjQ3NS4xMiIgZmlsbD0idXJsKCNhZmIzNmZkMy1mMjk4LTQxMTctYmE5ZS05ZjBjNmE0ZWNjZmMpIi8+PHJlY3QgeD0iMjM4LjgzIiB5PSI3My41NSIgd2lkdGg9IjM5My42NSIgaGVpZ2h0PSI0NzEuMTYiIGZpbGw9IiNmZmYiLz48cG9seWdvbiBwb2ludHM9IjE0NS42MyAyODQuMzggNDM1LjY2IDQ4My4zNCAxNDUuNjMgNjgyLjMgMTQ1LjYzIDI4NC4zOCIgZmlsbD0iI2Y1ZjVmNSIvPjxwb2x5Z29uIHBvaW50cz0iNzI1LjY4IDI4NC4zOCA0MzUuNjYgNDgzLjM0IDcyNS42OCA2ODIuMyA3MjUuNjggMjg0LjM4IiBmaWxsPSIjZjVmNWY1Ii8+PHBhdGggZD0iTTMxMC4yOCw3ODYuNjksNTg4LjkyLDU2OS45YTE4LjM5LDE4LjM5LDAsMCwxLDIyLjc1LDBMODkwLjMzLDc4Ni42OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjQuNjUgLTEwNC40KSIgZmlsbD0idXJsKCM5YjQ2ZWM2Ny1kMGVhLTQ1ZmYtODBmMS1mZTNkYjdiODYwMzApIi8+PHBhdGggZD0iTTMxMC4yOCw3ODYuNjksNTg4LjkyLDU3OS4zN2ExOS4wNiwxOS4wNiwwLDAsMSwyMi43NSwwTDg5MC4zMyw3ODYuNjlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTY0LjY1IC0xMDQuNCkiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSIyOTguNTYiIHk9IjE2NC42MSIgd2lkdGg9IjgyLjE2IiBoZWlnaHQ9IjEzLjg2IiBmaWxsPSIjNDdlNmIxIi8+PHJlY3QgeD0iMjk4LjU2IiB5PSIyMDEuMjQiIHdpZHRoPSIyNzQuMTkiIGhlaWdodD0iMTMuODYiIGZpbGw9IiNmNWY1ZjUiLz48cmVjdCB4PSIyOTguNTYiIHk9IjIyNC45OSIgd2lkdGg9IjI3NC4xOSIgaGVpZ2h0PSIxMy44NiIgZmlsbD0iI2Y1ZjVmNSIvPjxyZWN0IHg9IjI5OC41NiIgeT0iMjQ4Ljc1IiB3aWR0aD0iMjc0LjE5IiBoZWlnaHQ9IjEzLjg2IiBmaWxsPSIjZjVmNWY1Ii8+PHJlY3QgeD0iMjk4LjU2IiB5PSIyNzIuNSIgd2lkdGg9IjI3NC4xOSIgaGVpZ2h0PSIxMy44NiIgZmlsbD0iI2Y1ZjVmNSIvPjxyZWN0IHg9IjI5OC41NiIgeT0iMjk2LjI2IiB3aWR0aD0iMTI0LjcyIiBoZWlnaHQ9IjEzLjg2IiBmaWxsPSIjZjVmNWY1Ii8+PHJlY3QgeD0iNDQ4LjAzIiB5PSIyOTYuMjYiIHdpZHRoPSIxMjQuNzIiIGhlaWdodD0iMTMuODYiIGZpbGw9IiM0Mjg1ZjQiLz48L3N2Zz4="},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Aayush Shrestha",description:"",author:"Aayush Shrestha"}}}}},157:function(e,t,i){"use strict";var a=i(4),n=i.n(a),r=i(0),o=i.n(r),s=i(150),l=function(e){e.siteTitle;var t=e.active,i=e.darkMode;return o.a.createElement("header",null,o.a.createElement("div",{className:"header"},o.a.createElement(s.a,{active:t,darkMode:i})))};l.propTypes={siteTitle:n.a.string},l.defaultProps={siteTitle:""};var c=l,d=i(143),u=i(145),m=i(154),g=i.n(m),I=i(172),p=d.a.button.withConfig({displayName:"google-btn__MyBtn",componentId:"sc-1vfwj2v-0"})(["background:transparent;border:0;color:white;font-size:1.2em;@media(max-width:860px){font-size:1em;}"]),h=d.a.img.withConfig({displayName:"google-btn__MyImg",componentId:"sc-1vfwj2v-1"})(["width:3em;@media(max-width:860px){width:2.5em;}"]),f=function(e){var t=e.res;return o.a.createElement(I.GoogleLogin,{clientId:"432904370571-10sna4o5st6k2aee0q3p09bt05qjgbng.apps.googleusercontent.com",buttonText:"Login",render:function(e){return o.a.createElement(p,{onClick:e.onClick,disabled:e.disabled},o.a.createElement(h,{src:g.a}),o.a.createElement("div",{className:"label"},"Login"))},onSuccess:t,onFailure:t,cookiePolicy:"single_host_origin"})},N=i(148),y=i(151),j=i(152),b=u.Link,M=d.a.div.withConfig({displayName:"sidebar__Nav",componentId:"sc-1r0sell-0"})(["left:0;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);bottom:0;place-items:center stretch;top:0;font-size:0.85em;height:100vh;display:grid;padding:0.3em;position:fixed;grid-template-rows:1fr 1fr 1fr 1fr;background:",";z-index:10;@media (max-width:860px){height:70px;width:100vw;top:inherit;bottom:0;grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:1fr;}"],function(e){return e.background}),S=function(e){var t=e.active,i=e.darkMode,a=Object(r.useContext)(N.b),n=a.modal,s=a.text,l=a.closeModal,c=a.displayModal,d=Object(r.useContext)(y.b),u=d.user,m=d.setUser,g=function(e){console.log(e);var t=e.givenName,i=e.familyName,a=e.email,n=e.imageUrl;return{id:e.googleId,fname:t,lname:i,email:a,photo:n}};return o.a.createElement("div",{style:{position:"absolute"}},o.a.createElement(P,{modal:n,close:l,text:s}),o.a.createElement(M,{background:i?"black":j.c},o.a.createElement(b,{className:"nav-item txt-md center-items",to:"/",style:{borderLeft:"3px solid "+("home"===t?"white":j.c)}},o.a.createElement("i",{className:"material-icons lg-icon "+("home"===t?"active-nav":"")},"home"),o.a.createElement("div",null,"Home")),o.a.createElement(b,{className:"nav-item txt-md center-items",to:"/Projects",style:{borderLeft:"3px solid "+("project"===t?"white":j.c)}}," ",o.a.createElement("i",{className:"material-icons lg-icon "+("project"===t?"active-nav":"")},"work"),o.a.createElement("div",null,"Projects")),o.a.createElement("a",{className:"nav-item txt-md center-items",onClick:function(){return c("Thank you for downloading my Resume")},href:"https://github.com/aayush6194/aayush6194.github.io/raw/master/Resume.pdf"},o.a.createElement("i",{className:"material-icons lg-icon "},"account_circle"),o.a.createElement("div",null,"Resume")),o.a.createElement("span",{className:"nav-item txt-md center-items"},u?o.a.createElement("div",{style:{display:"grid",placeItems:"center",textAlign:"center"}},o.a.createElement("img",{style:{borderRadius:"50%",width:"3.5em"},src:u.photo}),o.a.createElement("div",{style:{color:"white",textOverflow:"ellipsis",textSize:"1.5em",lineHeight:"100$"}},u.fname)):o.a.createElement(f,{res:function(e){var t=g(e.profileObj);m(t)}}))))},k=d.a.div.withConfig({displayName:"dark-mode__FloatBtn",componentId:"ribr3h-0"})(["position:fixed;bottom:6em;right:10px;display:grid;grid-template-columns:auto auto;border:0.15em solid white;border-radius:50px;background:#30ABE8;background:",";color:white;text-align:center;@media( max-width:860px){bottom:5em;}"],function(e){return e.background}),x=function(e){var t=e.toggleDarkMode,i=e.darkMode;return o.a.createElement(k,{background:i?"black":"#30ABE8"},o.a.createElement("div",{onClick:function(){t("dark")},style:{padding:".5em 1em"}},o.a.createElement("i",{className:"fas fa-moon white-txt "+(i&&"active-nav")})),o.a.createElement("div",{style:{borderLeft:"2px solid white",padding:".5em 1em"},onClick:function(){return t("notDark")}},o.a.createElement("i",{className:"fas fa-sun white-txt "+(!i&&"active-nav")})))},L=i(155),w=i.n(L),E=i(161),Z=i.n(E),v=Object(d.b)(["0%{opacity:0;}100%{opacity:1;}"]),D=d.a.div.withConfig({displayName:"modal__Wrapper",componentId:"sc-1b1bv96-0"})(["position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4);animation:"," 0.5s ease-out;"],v),z=d.a.div.withConfig({displayName:"modal__Modall",componentId:"sc-1b1bv96-1"})(["background:white;margin:2% auto;border:.25em solid dodgerblue;box-shadow:0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);border-radius:1em;width:80%;text-align:center;font-size:1.5em;padding:0;max-width:800px;color:black;@media(max-width:600px){position:absolute;bottom:90px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}"]),T=d.a.button.withConfig({displayName:"modal__Btn",componentId:"sc-1b1bv96-2"})(["color:white;border-radius:50%;background:dodgerblue;border:0;font-size:1em;width:2em;height:2em;margin:0.2em;&:hover{background:red;}"]),Y=d.a.div.withConfig({displayName:"modal__Header",componentId:"sc-1b1bv96-3"})(["color:white;background-image:linear-gradient( rgba(12,38,92,0.7),rgba(12,38,92,0.9));border-top-right-radius:.75em;border-top-left-radius:.75em;border:0;margin:0;height:2.5em;"]),C=d.a.div.withConfig({displayName:"modal__Body",componentId:"sc-1b1bv96-4"})(["color:white;font-weight:bolder;background-image:linear-gradient( rgba(32,43,78,0.7),rgba(32,43,78,0.6)),url(",");border-bottom-right-radius:.75em;border-bottom-left-radius:.75em;"],w.a),P=function(e){var t=e.modal,i=e.text,a=e.close;return o.a.createElement(o.a.Fragment,null,t?o.a.createElement(D,null,o.a.createElement(Z.a,null,o.a.createElement(z,null,o.a.createElement(Y,null,o.a.createElement(T,{style:{float:"right"},onClick:a},"  X  ")),o.a.createElement(C,null,o.a.createElement("div",{style:{minHeight:"5em",padding:".2em"},className:""},o.a.createElement("h5",null,i||"Caught an Error. Please Refresh the page!")),o.a.createElement("div",null,o.a.createElement("button",{className:"bt bt-custom",style:{padding:".2em",fontSize:".9em",background:" "},onClick:a},"Cancel")))))):null)},G=i(149),R=i(146);i.d(t,"b",function(){return c}),i.d(t,"f",function(){return S}),i.d(t,"a",function(){return x}),i.d(t,"d",function(){return P}),i.d(t,"c",function(){return G.b}),i.d(t,"e",function(){return R.a})},174:function(e,t,i){"use strict";var a=i(11),n=i(17),r=i(5),o=i(52),s=i(76);a(a.P+a.R,"Promise",{finally:function(e){var t=o(this,n.Promise||r.Promise),i="function"==typeof e;return this.then(i?function(i){return s(t,e()).then(function(){return i})}:e,i?function(i){return s(t,e()).then(function(){throw i})}:e)}})},278:function(e,t,i){"use strict";i(279);var a=i(6),n=i(75),r=i(16),o=/./.toString,s=function(e){i(18)(RegExp.prototype,"toString",e,!0)};i(25)(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?s(function(){var e=a(this);return"/".concat(e.source,"/","flags"in e?e.flags:!r&&e instanceof RegExp?n.call(e):void 0)}):"toString"!=o.name&&s(function(){return o.call(this)})},279:function(e,t,i){i(16)&&"g"!=/./g.flags&&i(24).f(RegExp.prototype,"flags",{configurable:!0,get:i(75)})},280:function(e,t,i){"use strict";i(178)("link",function(e){return function(t){return e(this,"a","href",t)}})},281:function(e,t,i){"use strict";var a=i(8);t.__esModule=!0,t.default=void 0;var n,r=a(i(7)),o=a(i(53)),s=a(i(185)),l=a(i(186)),c=a(i(0)),d=a(i(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},m={},g=function(e){var t=u(e),i=t.fluid?t.fluid.src:t.fixed.src;return m[i]||!1},I=[];var p=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){I.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),I.push([e,t])},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',i=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+i+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+i+"/>":"",r=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+a+n+"<img "+s+l+t+o+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},f=c.default.forwardRef(function(e,t){var i=e.style,a=e.onLoad,n=e.onError,r=(0,s.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},r,{onLoad:a,onError:n,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});f.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var N=function(e){function t(t){var i;i=e.call(this,t)||this;var a=!0,n=!1,r=t.fadeIn,s=g(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,n=!0),"undefined"==typeof window&&(a=!1),t.critical&&(a=!0,n=!1);var l=!(i.props.critical&&!i.props.fadeIn);return i.state={isVisible:a,imgLoaded:!1,IOSupported:n,fadeIn:r,hasNoScript:l,seenBefore:s},i.imageRef=c.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,o.default)((0,o.default)(i))),i.handleRef=i.handleRef.bind((0,o.default)((0,o.default)(i))),i}(0,r.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},i.handleRef=function(e){var t=this;this.state.IOSupported&&e&&p(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},i.handleImageLoaded=function(){var e,t,i;e=this.props,t=u(e),i=t.fluid?t.fluid.src:t.fixed.src,m[i]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var e=u(this.props),t=e.title,i=e.alt,a=e.className,n=e.style,r=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,m=void 0===d?{}:d,g=e.placeholderClassName,I=e.fluid,p=e.fixed,N=e.backgroundColor,y=e.Tag,j=e.itemProp,b="boolean"==typeof N?"lightgray":N,M=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,m),S=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),k={title:t,alt:this.state.isVisible?"":i,style:M,className:g};if(I){var x=I;return c.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),x.base64&&c.default.createElement(f,(0,l.default)({src:x.base64},k)),x.tracedSVG&&c.default.createElement(f,(0,l.default)({src:x.tracedSVG},k)),b&&c.default.createElement(y,{title:t,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,x.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),c.default.createElement("source",{srcSet:x.srcSet,sizes:x.sizes}),c.default.createElement(f,{alt:i,title:t,src:x.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:j})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:i,title:t},x))}}))}if(p){var L=p,w=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:L.width,height:L.height},r);return"inherit"===r.display&&delete w.display,c.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:w,ref:this.handleRef,key:"fixed-"+JSON.stringify(L.srcSet)},L.base64&&c.default.createElement(f,(0,l.default)({src:L.base64},k)),L.tracedSVG&&c.default.createElement(f,(0,l.default)({src:L.tracedSVG},k)),b&&c.default.createElement(y,{title:t,style:{backgroundColor:b,width:L.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:L.height}}),this.state.isVisible&&c.default.createElement("picture",null,L.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),c.default.createElement("source",{srcSet:L.srcSet,sizes:L.sizes}),c.default.createElement(f,{alt:i,title:t,width:L.width,height:L.height,src:L.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:j})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:i,title:t,width:L.width,height:L.height},L))}}))}return null},t}(c.default.Component);N.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var y=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),j=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});N.propTypes={resolutions:y,sizes:j,fixed:y,fluid:j,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var b=N;t.default=b},282:function(e,t,i){e.exports=i.p+"static/step-79c0f665ec28949bee3f5dd85f58d9c6.svg"},283:function(e){e.exports={proj:[{pid:"8",name:"image11",title:"Platypus Schedular",description:"A Football Match Scheduling Web Application. Complete with Real time game request notification with sockets, Profile Image upload, Search feature, Instant Messaging, Darkmode and Email Verification ",link:"https://capstone.aayushh.com",code:["Typescript","ReactJs","Redux","Nodejs","Styled-Components","MySQL","AWS","EC2","RDS","SES","Nginx"]},{pid:"0",name:"image5",title:"Dreammy 2.0",description:"A social site with logged features with tokens, content uploads, private chat, friend suggesstions",link:"https://dreammy.aayushh.com",code:["Express","ReactJs","Redux","Styled-Components","Materialize","MongoDB","Google Cloud"]},{pid:"1",name:"image9",title:"Finapp : In Progress",description:"Financial Literacy Application for highschool students in NorthEast Lousiana",link:"https://uwnelafinapp.com",code:["Typescript","ReactJs","NodeJs","Express","MongoDB","Google Cloud"]},{pid:"1",name:"image7",title:"Url Shortner",description:"A service that shortens any URL and performs redirects to the actual site",link:"https://github.com/aayush6194/shorten-url",code:["Next.js","NodeJs","Express","MongoDB"]},{pid:"2",name:"image6",title:"Google Image Extractor",description:"A webscraping app that extracts google images related to the searched keyword",link:"https://github.com/aayush6194/google-image-extractor",code:["NodeJs","EJS","Puppeteer"]},{pid:"3",name:"image8",title:"Game Searcher",description:"A frontend angular application that implements game database API to search games. Additionally, enables users to create game wishlist within the app",link:"https://github.com/aayush6194/game-searcher",code:["Angular","Rxjs","ngrx","NodeJs","Express","MongoDB"]},{pid:"4",name:"image4",title:"Calender App",description:"A Calender App: IN PROGRESS",link:"https://calendar.aayushh.com",code:["NodeJs","ReactJs","Redux","Styled-Components","MongoDB"]},{pid:"5",name:"image1",title:"To-do List",description:"A to-do list application built on Materialize CSS; uses PHP as the serverside language for logins, signup and adding/deleting to the list with MySQL as the database.",link:"http://todolistphp.gearhostpreview.com",code:["PHP","Materialize","MySQL","Javascript"]},{pid:"7",name:"image3",title:"Auction Website",description:"A responsive ReactJs app to stimulate just the front end for an auction website.",link:"",code:["ReactJs"]}]}}}]);
//# sourceMappingURL=component---src-pages-projects-js-0f2fc8a06ddaeda9b16f.js.map