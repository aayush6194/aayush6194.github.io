(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{RXBc:function(e,t,a){"use strict";a.r(t);var n=a("dI71"),i=a("q1tI"),r=a.n(i),o=a("vOnD"),l=(a("Wbzz"),a("Efxr")),s=a("/eHF"),c=a.n(s),d=a("Kvkj"),m=a("cjH5"),g=a.n(m),u=a("wW1O"),p=a.n(u),h=a("qr5T"),f=a("J21I"),b=a.n(f);const k=o.a.div.withConfig({displayName:"hints__Float",componentId:"sc-xmpzx7-0"})(["position:fixed;bottom:1em;right:10px;display:grid;grid-template-columns:auto auto;@media (max-width:","px){display:none;}s"],860),E=o.a.div.withConfig({displayName:"hints__Message",componentId:"sc-xmpzx7-1"})(["background:white;width:9em;color:dodgerblue;border:1px solid;padding:.3em .8em;border-radius:1em;vertical-align:middle;display:grid;box-shadow:0 .25em .5em rgba(0,0,0,.5);max-width:15em;align-items:center;"]),v=o.a.img.withConfig({displayName:"hints__Avatar",componentId:"sc-xmpzx7-2"})(["border:.1em solid white;width:4em;border-radius:50%;margin-left:.2em;height:auto;"]);var w=e=>{let{msg:t}=e;const{0:a,1:n}=Object(i.useState)(0);return r.a.createElement(r.a.Fragment,null,a<=t.length?r.a.createElement(b.a,{transitionName:"hints",transitionAppear:!0,transitionAppearTimeout:550,transitionEnterTimeout:550,transitionLeaveTimeout:300,transitionEnter:!0,transitionLeave:!0},r.a.createElement(k,{onClick:()=>{a<t.length-1?n(a+1):n(0)},className:"pointer"},r.a.createElement(E,null,t[a]),r.a.createElement("div",null,r.a.createElement(v,{src:"https://f0.pngfuel.com/png/136/22/profile-icon-illustration-user-profile-computer-icons-girl-customer-avatar-png-clip-art-thumbnail.png"})))):null)};const M=Object(o.a)(l.a.div({})).withConfig({displayName:"Home__Box",componentId:"sc-dqukt2-0"})(['font-size:1.18em;font-family:"Montserrat",sans-serif;padding-right:1em;line-height:165%;&:before{content:"";width:',";height:100%;position:absolute;background:#30abe8;transition:0.37s;transition-timing-function:cubic-bezier(2,0.5,0.1,0.5);}"],e=>e.width),y=o.a.div.withConfig({displayName:"Home__Text",componentId:"sc-dqukt2-1"})(["font-size:40px;font-weigt:bold;"]);let x=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={stage:"end",width:"100%"},a}Object(n.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setState({stage:"end"}),setTimeout(()=>this.setState({width:"0%"}),50)},a.componentDidCatch=function(e,t){console.log(e),console.log(t)},a.render=function(){let{darkMode:e,toggleDarkMode:t}=this.props;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.f,{active:"home",darkMode:e}),r.a.createElement("div",{className:"home grid align-center",style:{perspective:"100rem",maxWidth:"93%",margin:"auto",position:"relative"}},r.a.createElement("div",{style:{display:"grid",placeItems:"center"}},r.a.createElement("img",{src:e?p.a:g.a,className:"svg-glow",style:{height:"60vh",maxHeight:"50vw"}})),r.a.createElement("div",{className:"content-container align-left",style:{position:"relative",transformOrigin:"left",transform:"rotateY(-25deg)"}},r.a.createElement(c.a,{left:!0},r.a.createElement(M,null,r.a.createElement("h1",{style:{margin:0,marginBottom:"9px"}},"Hello, I am Aayush!"),"I’m a Software Engineer at ",r.a.createElement("b",null,"PayPal"),", focusing on building enterprise applications. Previously, I worked at ",r.a.createElement("b",null,"ParkStash"),", solving real-world challenges through technology. I’m passionate about creating scalable solutions, learning new technologies, and driving impactful innovation.",r.a.createElement("br",null),r.a.createElement("br",null)," Feel free to reach out via email!",r.a.createElement("div",null),r.a.createElement(y,null))))),r.a.createElement(w,{msg:["Hello"]}),r.a.createElement(d.a,{toggleDarkMode:t,darkMode:e}))},t}(r.a.Component);x.Modal=h.b;var N=x,I=a("LbRr");var D=e=>{let{darkMode:t}=e;return r.a.createElement("div",{className:"grid-mobile align-left-on-lg"},r.a.createElement("a",{href:"https://github.com/aayush6194"},r.a.createElement("button",{className:"bt bt-custom lift center-sm expand-sm "+(t?"dark-btn":"")},r.a.createElement("i",{className:"fab fa-github md-icon"}),"  GitHub")),r.a.createElement("a",{href:"mailto:hello@aayushh.com"},r.a.createElement("button",{className:"bt bt-custom lift center-sm expand-sm "+(t?"dark-btn":"")}," ",r.a.createElement("i",{className:"fa fa-envelope md-icon","aria-hidden":"true"}),"   Email")),r.a.createElement("a",{href:"https://www.linkedin.com/in/aayush-shrestha-b4b1b9158/"},r.a.createElement("button",{className:"bt bt-custom lift center-sm expand-sm "+(t?"dark-btn":"")},r.a.createElement("i",{className:"fab fa-linkedin-in md-icon"}),"   LinkedIn ")))};var C=e=>{let{darkMode:t}=e;return r.a.createElement("div",{className:"grid link-grid"},r.a.createElement(D,{className:"align-left align-center",darkMode:t}),r.a.createElement("div",{className:"align-left align-end"}))},H=a("Bl7J"),_=a("vrFN"),S=a("N2Ca");a("hk7L");let z=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleDarkMode=e=>{localStorage.setItem("dark-mode","dark"===e),a.setState({darkMode:"dark"===e})},a.state={darkMode:!1,firstVisit:!0,loader:!0},a}Object(n.a)(t,e);var a=t.prototype;return a.componentDidCatch=function(e,t){console.log(e),console.log(t)},a.componentDidMount=function(){this.getDarkMode()},a.getDarkMode=function(){let e=!0!==localStorage.getItem("dark-mode");this.setState({darkMode:e})},a.render=function(){return r.a.createElement(H.a,{darkMode:this.state.darkMode},r.a.createElement(_.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement("div",{className:"container main-grid"},r.a.createElement(I.a,{active:"home",darkMode:this.state.darkMode}),r.a.createElement(N,{className:"row",darkMode:this.state.darkMode,toggleDarkMode:this.toggleDarkMode}),r.a.createElement(C,{darkMode:this.state.darkMode})),r.a.createElement(S.default,{data:this.props.data}))},t}(r.a.Component);t.default=z},cjH5:function(e,t,a){e.exports=a.p+"static/step2-dcde152e7c0e526d44568376d83d6733.svg"},wW1O:function(e,t,a){e.exports=a.p+"static/step2-dark-6240af5d94298ed5ebb8e2431c7eabdb.svg"}}]);
//# sourceMappingURL=component---src-pages-index-js-d6f837e4e493ef6e5aad.js.map