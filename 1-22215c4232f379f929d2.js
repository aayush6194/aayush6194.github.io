(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{148:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"c",function(){return c}),n.d(t,"a",function(){return s});var a=n(7),i=n.n(a),o=n(0),r=n.n(o),l=Object(o.createContext)({modal:!1,toggleModal:function(){},setText:function(){},text:null}),c=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).closeModal=function(){t.setState({modal:!1,text:null})},t.displayModal=function(e){t.setState({modal:!0,text:e})},t.state={modal:!1,text:null,displayModal:t.displayModal,closeModal:t.closeModal},t}return i()(t,e),t.prototype.render=function(){return r.a.createElement(l.Provider,{value:this.state},this.props.children)},t}(r.a.Component),s=l.Consumer},149:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var a=n(0),i=n.n(a),o=n(193),r=n.n(o),l=n(194),c=n.n(l),s=n(143),d=n(176),u=n.n(d),m=s.a.div.withConfig({displayName:"Loader",componentId:"wkbpzu-0"})(["position:absolute;z-index:20;left:calc(50% - 40px);top:calc(50% - 40px);display:inline-block;"]),g=s.a.div.withConfig({displayName:"Loader__NewLoader",componentId:"wkbpzu-1"})(["display:grid;width:100v%;height:100vh;background:white;z-index:10;place-items:center"]),p=Object(s.b)(["0%{transform:scale(0.9);filter:drop-shadow(3px 4px 6px teal);}100%{transform:scale(1);filter:drop-shadow(0px 0px 0px white);}"]),I=s.a.img.withConfig({displayName:"Loader__Img",componentId:"wkbpzu-2"})(["width:200px;min-width:10vw;max-width:60vw;animation:"," 600ms ease-out infinite;"],p),h=function(){return i.a.createElement(g,null,i.a.createElement(u.a,{transitionName:"hints",transitionAppear:!0,transitionAppearTimeout:300,transitionEnterTimeout:550,transitionLeaveTimeout:300,transitionEnter:!0,transitionLeave:!0},i.a.createElement(I,{src:c.a,alt:"A Loader"})))};t.b=function(){return i.a.createElement(m,{className:"blue-txt"},i.a.createElement("img",{width:"70",src:r.a,alt:"A Loader"}))}},151:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"c",function(){return s}),n.d(t,"a",function(){return d});var a=n(7),i=n.n(a),o=n(0),r=n.n(o),l=n(175),c=Object(o.createContext)({user:void 0,setUser:function(){}}),s=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).setUser=function(e){localStorage.setItem("user",JSON.stringify(e)),l.a.signin(e).catch(function(e){return console.log("Error Connecting to the server!")}),t.setState({user:e})},t.state={user:void 0,setUser:t.setUser},t}i()(t,e);var n=t.prototype;return n.componentWillMount=function(){try{var e=void 0!==localStorage.getItem("user")&&null!==localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):void 0;void 0!==e&&(this.setState({user:e}),l.a.signin(e).catch(function(e){return console.log("Error Connecting to the server!")}))}catch(t){console.log(t)}},n.render=function(){return r.a.createElement(c.Provider,{value:this.state},this.props.children)},t}(r.a.Component),d=c.Consumer},152:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return o}),n.d(t,"e",function(){return r}),n.d(t,"a",function(){return l});var a="860px",i="#2ca2ad",o="#2ca2ad",r="white",l="#182A2F"},162:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=(n(190),n(143)),r=n(191),l=n.n(r),c=n(192),s=n.n(c),d=n(148),u=n(151),m=n(149),g=(n(211),n(7)),p=n.n(g),I=Object(a.createContext)({darkMode:!1,toggleTheme:function(){}}),h=(i.a.Component,I.Consumer,n(152)),f=(o.a.div.withConfig({displayName:"components__Wrapper",componentId:"sc-16dv4zk-0"})(["margin:auto;min-height:100vh;width:100%;background:url(",");background-attachment:fixed;background-repeat:no-repeat;background-position:bottom left;display:grid;justify-items:center;align-items:center;"],function(e){return e.bg}),function(e){var t=e.children,n=e.style,r=e.size,l=(e.placeItems,e.alignText),c=e.placeSelf,s=e.color,d=e.bold,u=e.className,m=Object(a.useContext)(I).darkMode,g=o.a.div.withConfig({displayName:"components__HeaderLayout",componentId:"sc-16dv4zk-2"})(["text-align:",";font-size:1.9em;color:",";"," "," ",""],l||"center",m?h.e:s||h.d,r&&"font-size: "+r+";",d&&"font-weight: bold;",c&&"place-self: "+c+";");return i.a.createElement(g,{className:u,style:n}," ",t," ")}),b=function(e){var t=e.children,n=e.max,a=e.gridGap,r=e.style,l=e.cols,c=e.customCols,s=e.customRows,d=e.width,u=e.height,m=e.placeItems,g=e.color,p=e.background,I=e.mobileLayout,f=e.className,b=e.onClick,y=e.mobileCols,w=o.a.div.withConfig({displayName:"components__Layout",componentId:"sc-16dv4zk-3"})(["display:grid;width:",";height:",";place-items:center;grid-gap:",";max-width:1500px;"," grid-template-columns:repeat(",",1fr);"," "," "," "," "," @media(max-width:","){"," ","}"],d||"auto",u||"auto",a||"1em",!1===n&&"max-width: 1500px;",l||"1",c&&"grid-template-columns: "+c+";",s&&"grid-template-rows: "+s+";",m&&"place-items: "+m+";",g&&"color: "+g+";",p&&"background: "+p+";",h.b,!1!==I&&"grid-template-columns: 1fr;",y&&"grid-template-columns: "+y+";");return i.a.createElement(w,{style:r,className:f,onClick:b}," ",t," ")},y=function(e){var t=e.component,n=e.nextStep,r=e.step,l=e.total,c=e.previousStep,s=Object(a.useState)(!1),d=s[0],u=s[1],m=Object(a.useContext)(I).darkMode,g=o.a.div.withConfig({displayName:"multistep__Body",componentId:"yvu9ps-0"})(["color:",";min-height:15em;max-height:60vh;display:grid;place-items:center;grid-template-rows:1fr auto;font-weight:bolder;background:",";padding:0 0 .3em 0;border-radius:.75em;"],m?"white":"black",m?"black":"white");return Object(a.useEffect)(function(){!0===d?u(!1):(u(!0),setTimeout(function(){return u(!1)},1e3)),r===l-1&&setTimeout(function(){return n()},4e3)},[n]),i.a.createElement(v,null,i.a.createElement(C,{style:{border:0,padding:0},className:d?"slide-in":""},i.a.createElement(g,null,t,i.a.createElement(b,{customCols:"1fr 1fr 1fr",placeSelf:"center end",placeItems:"end",width:"100%",mobileLayout:!1},i.a.createElement("div",{style:{display:"grid",placeItems:"start",padding:"1em",width:"100%"}},i.a.createElement("i",{className:"fas fa-chevron-left left",onClick:function(){return c()},style:{display:0===r?"none":""}})),i.a.createElement("span",{className:"grid"},i.a.createElement("span",null,[].concat(Array(l)).map(function(e,t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:"round "+(t!==r?"white":"gray")})," ")}))),i.a.createElement("div",{style:{display:"grid",placeItems:"end",padding:"1em"}},i.a.createElement("i",{className:"fas fa-chevron-right left",onClick:function(){return n()}}))))))},w=Object(o.b)(["0%{opacity:0;}100%{opacity:1;}"]),v=o.a.div.withConfig({displayName:"multistep__Wrapper",componentId:"yvu9ps-1"})(["position:fixed;z-index:20;left:0;top:0;width:100%;height:100%;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4);animation:"," 0.5s ease-out;"],w),C=o.a.div.withConfig({displayName:"multistep__Modall",componentId:"yvu9ps-2"})(["margin:7% auto;border:.25em solid dodgerblue;box-shadow:0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);border-radius:1em;width:80%;display:grid;place-items:stretch;grid-template-rows:auto 1fr;text-align:center;font-size:1.5em;padding:0;min-height:260px;max-width:800px;color:black;@media(max-width:860px){position:absolute;bottom:90px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}"]),x=function(e){var t=e.components,n=e.finishSignup,o=(e.darkMode,Object(a.useState)(0)),r=o[0],l=o[1];return t&&r<t.length?i.a.createElement(y,{component:t[r],nextStep:function(){t.length-1>r?l(r+1):n()},previousStep:function(){r>0&&l(r-1)},step:r,total:t.length||0}):null},M=n(212),W=n.n(M),k=n(213),Z=n.n(k),E=n(287),S=function(){return i.a.createElement(A,null,i.a.createElement(N,{style:{background:"dodgerblue",height:"100%"}},i.a.createElement("img",{src:Z.a,style:{height:"100%",maxWidth:"80%",width:"auto"}})),i.a.createElement("div",{style:{height:"20%"}},i.a.createElement(f,{size:"1em"},"Welcome to my portfolio site!"),i.a.createElement(f,{size:".8em"},"Let me show you around")))},j=function(){var e=Object(a.useState)(0),t=e[0],n=e[1];return Object(a.useEffect)(function(){t<100&&setTimeout(function(){return n(t+8)},200)},[t]),i.a.createElement(A,null,i.a.createElement(N,{style:{background:"dodgerblue"}},i.a.createElement("img",{src:W.a,style:{height:"100%",maxWidth:"80vw"}})),i.a.createElement("div",{style:{height:"30%",width:"100%",display:"grid",placeItems:"center",color:"teal"}},i.a.createElement("div",null," Setting up your profile. ",i.a.createElement("i",{className:"fa fa-futbol-o spin"})),i.a.createElement("div",{style:{width:"50%"}},i.a.createElement(E.a,{percent:t,size:"small"}))))},N=o.a.div.withConfig({displayName:"first-time__BorderRadiusTop",componentId:"vz5qny-0"})(["border-top-right-radius:.75em;border-top-left-radius:.75em;height:70%;maxHeight:10em"]),A=Object(o.a)(N).withConfig({displayName:"first-time__Main",componentId:"vz5qny-1"})(["height:100%;color:inherit;place-self:start stretch;max-height:15em;width:100%;"]),G=function(e){var t=e.finishSignup;return i.a.createElement(x,{components:[i.a.createElement(S,null),i.a.createElement(j,null)],finishSignup:t})},V=o.a.div.withConfig({displayName:"layout__MyWrapper",componentId:"tcgwag-0"})(["background-attachment:fixed;background-repeat:no-repeat;background-position:bottom right;min-height:100vh;background-image:url(",");background-image:url(",");background-size:cover;"],l.a,function(e){return e.background});t.a=function(e){var t=e.children,n=e.darkMode,o="false"!==localStorage.getItem("loader"),r="false"!==localStorage.getItem("firstTime"),c=Object(a.useState)(o),g=c[0],p=c[1],I=Object(a.useState)(r),h=I[0],f=I[1];Object(a.useEffect)(function(){g&&(setTimeout(function(){return p(!1)},1500),localStorage.setItem("loader","false"))},[]);return i.a.createElement(i.a.Fragment,null,g?i.a.createElement(m.a,null):i.a.createElement(u.c,null,i.a.createElement(d.c,null,i.a.createElement(V,{background:n?s.a:l.a,style:{margin:"0px auto ",paddingTop:0}},i.a.createElement("main",null,h&&i.a.createElement(G,{finishSignup:function(){localStorage.setItem("firstTime","false"),f(!1)}}),t)))))}},175:function(e,t,n){"use strict";n(163);function a(){return{"Content-Type":"application/json",token:localStorage.getItem("token")?localStorage.getItem("token"):null}}function i(e,t){return fetch(e,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()})}var o="https://api.aayushh.com/api",r={visit:o+"/visited",signin:o+"/signin",auth:o+"/auth",message:o+"/message",like:o+"/like",getLikes:o+"/get-likes"};t.a={visited:function(e){var t=e.email;return i(r.visited,{email:t})},signin:function(e){var t=e.email,n=e.fname,a=e.lname,o=e.id,l=e.photo;return i(r.signin,{email:t,fname:n,lname:a,id:o,photo:l})},auth:function(){return e={},fetch(r.auth,{method:"POST",mode:"cors",headers:a(),body:JSON.stringify(e)}).then(function(e){return e.json()});var e},message:function(e){var t=e.name,n=e.email,a=e.subject,o=e.message;return i(r.message,{name:t,email:n,subject:a,message:o})},like:function(e){var t=e.pid,n=e.user;return i(r.like,{user:n,pid:t})},getLikes:function(e){return fetch(r.getLikes+"/"+e,{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()})}}},190:function(e,t,n){},191:function(e,t,n){e.exports=n.p+"static/b-495c2b11789a4f0acc6a8b0b4a3383d6.svg"},192:function(e,t,n){e.exports=n.p+"static/b-dark-4e9e0c010ef8439ab1d6ab9ea2431b6a.svg"},193:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQogICAgd2lkdGg9IjUwcHgiIGhlaWdodD0iNTBweCIgdmlld0JveD0iMCAwIDI0IDMwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MCA1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KICAgPHJlY3QgeD0iMCIgeT0iMTAiIHdpZHRoPSI0IiBoZWlnaHQ9IjEwIiBmaWxsPSIjMzMzIiBvcGFjaXR5PSIwLjIiPg0KICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBhdHRyaWJ1dGVUeXBlPSJYTUwiIHZhbHVlcz0iMC4yOyAxOyAuMiIgYmVnaW49IjBzIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPg0KICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJoZWlnaHQiIGF0dHJpYnV0ZVR5cGU9IlhNTCIgdmFsdWVzPSIxMDsgMjA7IDEwIiBiZWdpbj0iMHMiIGR1cj0iMC42cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+DQogICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InkiIGF0dHJpYnV0ZVR5cGU9IlhNTCIgdmFsdWVzPSIxMDsgNTsgMTAiIGJlZ2luPSIwcyIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4NCiAgIDwvcmVjdD4NCiAgIDxyZWN0IHg9IjgiIHk9IjEwIiB3aWR0aD0iNCIgaGVpZ2h0PSIxMCIgZmlsbD0iIzMzMyIgIG9wYWNpdHk9IjAuMiI+DQogICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGF0dHJpYnV0ZVR5cGU9IlhNTCIgdmFsdWVzPSIwLjI7IDE7IC4yIiBiZWdpbj0iMC4xNXMiIGR1cj0iMC42cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+DQogICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImhlaWdodCIgYXR0cmlidXRlVHlwZT0iWE1MIiB2YWx1ZXM9IjEwOyAyMDsgMTAiIGJlZ2luPSIwLjE1cyIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4NCiAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ieSIgYXR0cmlidXRlVHlwZT0iWE1MIiB2YWx1ZXM9IjEwOyA1OyAxMCIgYmVnaW49IjAuMTVzIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPg0KICAgPC9yZWN0Pg0KICAgPHJlY3QgeD0iMTYiIHk9IjEwIiB3aWR0aD0iNCIgaGVpZ2h0PSIxMCIgZmlsbD0iIzMzMyIgIG9wYWNpdHk9IjAuMiI+DQogICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGF0dHJpYnV0ZVR5cGU9IlhNTCIgdmFsdWVzPSIwLjI7IDE7IC4yIiBiZWdpbj0iMC4zcyIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4NCiAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iaGVpZ2h0IiBhdHRyaWJ1dGVUeXBlPSJYTUwiIHZhbHVlcz0iMTA7IDIwOyAxMCIgYmVnaW49IjAuM3MiIGR1cj0iMC42cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+DQogICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InkiIGF0dHJpYnV0ZVR5cGU9IlhNTCIgdmFsdWVzPSIxMDsgNTsgMTAiIGJlZ2luPSIwLjNzIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPg0KICAgPC9yZWN0Pg0KIDwvc3ZnPg0K"},194:function(e,t,n){e.exports=n.p+"static/logo-298158ae6075bcb3d1ff76165b61eb39.png"},212:function(e,t,n){e.exports=n.p+"static/started-22b8042c0cebb0b757a98d38f366cac8.svg"},213:function(e,t,n){e.exports=n.p+"static/welcomee-a5e0f0c69b2b803139c175d3eeea4dc3.svg"}}]);
//# sourceMappingURL=1-22215c4232f379f929d2.js.map