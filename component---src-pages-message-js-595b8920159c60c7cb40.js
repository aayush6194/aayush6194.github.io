(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{PU7y:function(e,t,a){"use strict";a.r(t);var n=a("dI71"),s=a("q1tI"),l=a.n(s),i=a("vOnD"),m=a("Bl7J"),o=a("Efxr"),r=a("Kvkj"),c=a("Nlzp"),d=a("qr5T");const u=Object(i.a)(o.a.div({start:{scale:0,opacity:.6},end:{scale:1,opacity:1},transition:{duration:210,ease:"linear"}})).withConfig({displayName:"Message__Box",componentId:"sc-dxlmz5-0"})([""]),g=i.a.form.withConfig({displayName:"Message__Grid",componentId:"sc-dxlmz5-1"})(["display:grid;grid-template-columns:60px auto;color:white;font-weight:bold;width:60%;max-width:1000px;margin:auto;@media (max-width:1600px){grid-template-columns:85px auto;}@media (max-width:720px){width:95%;grid-template-columns:100px auto;}"]);let h=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleDarkMode=e=>{localStorage.setItem("dark-mode","dark"===e),a.setState({darkMode:"dark"===e})},a.change=e=>{a.setState({[e.target.name]:e.target.value})},a.state={name:"",email:"",message:"",subject:"",file:null,fileNum:0,stage:"start",darkMode:!1,loading:!1},a}Object(n.a)(t,e);var a=t.prototype;return a.getDarkMode=function(){let e="true"===(!!localStorage.getItem("dark-mode")&&localStorage.getItem("dark-mode"));this.setState({darkMode:e})},a.componentDidCatch=function(e,t){console(e),console(t)},a.submit=function(e){const{name:t,email:a,message:n,subject:s}=this.state,l={name:t,email:a,subject:s,message:n};if(!t||!a||!n)return e("Enter all the fields");this.setState({loading:!0}),c.a.message(l).then(t=>{t.success?e("Sucessfully Submitted your Message"):e("Could not Submit your Message. Please Try again"),this.setState({name:"",email:"",message:"",subject:""})}).catch(t=>e("Error. Please Try Again Later")).finally(()=>this.setState({loading:!1}))},a.componentDidMount=function(){this.getDarkMode(),this.setState({stage:"end"})},a.render=function(){const{darkMode:e}=this.state,{name:t,email:a,message:n,subject:s}=this.state;return l.a.createElement(m.a,{darkMode:e},l.a.createElement(d.a,null,i=>{let{displayModal:m}=i;return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.e,{title:"Message",keywords:["gatsby","application","react"]}),l.a.createElement("div",{className:"container"},l.a.createElement(r.f,{active:"message",darkMode:e}),l.a.createElement(r.b,{active:"message",darkMode:e}),l.a.createElement(u,{pose:this.state.stage},l.a.createElement("div",null,this.state.loading&&l.a.createElement(r.c,null),l.a.createElement(g,{onSubmit:e=>{e.preventDefault(),this.submit(m)}},l.a.createElement("label",{htmlFor:"name"},"Name:"),l.a.createElement("input",{type:"text",className:"input",id:"name",name:"name",onChange:this.change,value:t}),l.a.createElement("label",{htmlFor:"email"},"Email: "),l.a.createElement("input",{type:"email",className:"input",id:"email",name:"email",onChange:this.change,value:a}),l.a.createElement("label",{htmlFor:"subject"},"Subject: "),l.a.createElement("input",{type:"text",className:"input",id:"text",name:"subject",onChange:this.change,value:s}),l.a.createElement("label",{htmlFor:"messagel"},"Message: "),l.a.createElement("input",{type:"text",className:"input",id:"text",name:"message",onChange:this.change,value:n}),l.a.createElement("button",{className:"input bt bt-custom row btt "+(e&&"dark-btn"),onClick:()=>this.submit(m)},"Submit")))),l.a.createElement(r.a,{toggleDarkMode:this.toggleDarkMode,darkMode:e})))}))},t}(l.a.Component);t.default=h}}]);
//# sourceMappingURL=component---src-pages-message-js-595b8920159c60c7cb40.js.map