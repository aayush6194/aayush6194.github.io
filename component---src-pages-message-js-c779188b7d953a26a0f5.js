(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{139:function(e,t,a){"use strict";a.r(t);a(196),a(155);var n=a(7),i=a.n(n),r=a(0),l=a.n(r),s=a(144),o=a(146),m=a(158),c=a(159),u=a(160),d=a(145),g=Object(s.a)(m.a.div({start:{scale:0,opacity:.6},end:{scale:1,opacity:1},transition:{duration:210,ease:"linear"}})).withConfig({displayName:"Message__Box",componentId:"dxlmz5-0"})([""]),p=s.a.form.withConfig({displayName:"Message__Grid",componentId:"dxlmz5-1"})(["display:grid;grid-template-columns:60px auto;color:white;font-weight:bold;width:60%;max-width:1000px;margin:auto;@media (max-width:1600px){grid-template-columns:85px auto;}@media (max-width:720px){width:95%;grid-template-columns:100px auto;}"]),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleDarkMode=function(e){localStorage.setItem("dark-mode","dark"===e),a.setState({darkMode:"dark"===e})},a.change=function(e){var t;a.setState(((t={})[e.target.name]=e.target.value,t))},a.state={name:"",email:"",message:"",subject:"",file:null,fileNum:0,stage:"start",darkMode:!1,loading:!1},a}i()(t,e);var a=t.prototype;return a.getDarkMode=function(){var e="true"===(!!localStorage.getItem("dark-mode")&&localStorage.getItem("dark-mode"));this.setState({darkMode:e})},a.componentDidCatch=function(e,t){console(e),console(t)},a.submit=function(e){var t=this,a=this.state,n=a.name,i=a.email,r=a.message,l={name:n,email:i,subject:a.subject,message:r};if(!n||!i||!r)return e("Enter all the fields");this.setState({loading:!0}),u.a.message(l).then(function(a){a.success?e("Sucessfully Submitted your Message"):e("Could not Submit your Message. Please Try again"),t.setState({name:"",email:"",message:"",subject:""})}).catch(function(t){return e("Error. Please Try Again Later")}).finally(function(){return t.setState({loading:!1})})},a.componentDidMount=function(){this.getDarkMode(),this.setState({stage:"end"})},a.render=function(){var e=this,t=this.state.darkMode,a=this.state,n=a.name,i=a.email,r=a.message,s=a.subject;return l.a.createElement(o.a,{darkMode:t},l.a.createElement(d.a,null,function(a){var o=a.displayModal;return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.e,{title:"Message",keywords:["gatsby","application","react"]}),l.a.createElement("div",{className:"container"},l.a.createElement(c.f,{active:"message",darkMode:t}),l.a.createElement(c.b,{active:"message",darkMode:t}),l.a.createElement(g,{pose:e.state.stage},l.a.createElement("div",null,e.state.loading&&l.a.createElement(c.c,null),l.a.createElement(p,{onSubmit:function(t){t.preventDefault(),e.submit(o)}},l.a.createElement("label",{htmlFor:"name"},"Name:"),l.a.createElement("input",{type:"text",className:"input",id:"name",name:"name",onChange:e.change,value:n}),l.a.createElement("label",{htmlFor:"email"},"Email: "),l.a.createElement("input",{type:"email",className:"input",id:"email",name:"email",onChange:e.change,value:i}),l.a.createElement("label",{htmlFor:"subject"},"Subject: "),l.a.createElement("input",{type:"text",className:"input",id:"text",name:"subject",onChange:e.change,value:s}),l.a.createElement("label",{htmlFor:"messagel"},"Message: "),l.a.createElement("input",{type:"text",className:"input",id:"text",name:"message",onChange:e.change,value:r}),l.a.createElement("button",{className:"input bt bt-custom row btt "+(t&&"dark-btn"),onClick:function(){return e.submit(o)}},"Submit"))),l.a.createElement("center",null,"Number of files: ",e.state.fileNum)),l.a.createElement(c.a,{toggleDarkMode:e.toggleDarkMode,darkMode:t})))}))},t}(l.a.Component);t.default=h},196:function(e,t,a){"use strict";var n=a(11),i=a(17),r=a(6),l=a(53),s=a(77);n(n.P+n.R,"Promise",{finally:function(e){var t=l(this,i.Promise||r.Promise),a="function"==typeof e;return this.then(a?function(a){return s(t,e()).then(function(){return a})}:e,a?function(a){return s(t,e()).then(function(){throw a})}:e)}})}}]);
//# sourceMappingURL=component---src-pages-message-js-c779188b7d953a26a0f5.js.map