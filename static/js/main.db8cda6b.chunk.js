(this["webpackJsonplogin-form-component"]=this["webpackJsonplogin-form-component"]||[]).push([[0],{16:function(e,t,s){},17:function(e,t,s){},25:function(e,t,s){"use strict";s.r(t);var c=s(2),n=s.n(c),a=s(9),i=s.n(a),l=(s(16),s(3)),r=(s(17),s(18),s(10)),o=s.n(r),j=s(11),d=s.n(j),b=s(7),h=s(4),u=s(0);var O=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),s=(t[0],t[1]),n=Object(c.useState)(""),a=Object(l.a)(n,2),i=(a[0],a[1]),r=Object(c.useState)(""),j=Object(l.a)(r,2),O=j[0],x=j[1],p=Object(c.useState)(""),m=Object(l.a)(p,2),f=(m[0],m[1]),g=Object(c.useState)(""),v=Object(l.a)(g,2),y=(v[0],v[1]),N=Object(c.useState)(""),w=Object(l.a)(N,2),S=(w[0],w[1]);return Object(c.useEffect)((function(){o()(document).ready((function(){d.a.updateTextFields()}));var e=document.getElementById("signUp"),t=document.getElementById("signIn"),s=document.getElementById("container");e.addEventListener("click",(function(){s.classList.add("right-panel-active")})),t.addEventListener("click",(function(){s.classList.remove("right-panel-active")}))})),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"p-container",id:"container",children:[Object(u.jsx)("div",{className:"form-container sign-up-container",children:Object(u.jsxs)("form",{action:"#",className:"form",children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("h1",{className:"h1",children:"Create Account"}),Object(u.jsx)("div",{className:"error"})]}),Object(u.jsxs)("div",{className:"input-elements",children:[Object(u.jsxs)("div",{className:"input-field ",children:[Object(u.jsx)("input",{id:"user_name",type:"text",onChange:function(e){return f(e.target.value)}}),Object(u.jsx)("label",{for:"first_name",children:"Username "})]}),Object(u.jsxs)("div",{className:"input-field ",children:[Object(u.jsx)("input",{id:"first_name",type:"text",onChange:function(e){return y(e.target.value)}}),Object(u.jsx)("label",{for:"first_name",children:"First Name"})]}),Object(u.jsxs)("div",{class:"input-field",children:[Object(u.jsx)("input",{id:"email",type:"email",onChange:function(e){x(e.target.value)}}),Object(u.jsx)("label",{for:"email",children:"Email"})]}),Object(u.jsxs)("div",{class:"input-field",children:[Object(u.jsx)("input",{id:"lastName",type:"text",onChange:function(e){return S(e.target.value)}}),Object(u.jsx)("label",{for:"password",children:"Last Name"})]}),Object(u.jsx)("span",{className:"span",children:Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{className:"check",type:"checkbox"}),Object(u.jsxs)("span",{style:{color:"#614D4D  "},children:["I agree with the ",Object(u.jsx)("a",{href:"#",children:"Terms Of Use"})]})]})}),Object(u.jsx)("button",{className:"button sign-in-btn ",onClick:function(e){var t;e.preventDefault(),t=O,console.log(t),t.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)?console.log("correct"):console.log("bad operand")},children:"Sign Up"})]})]})}),Object(u.jsx)("div",{class:"form-container sign-in-container",children:Object(u.jsxs)("form",{action:"#",className:"form",children:[Object(u.jsx)("h1",{children:"Sign in"}),Object(u.jsxs)("div",{class:"input-field",children:[Object(u.jsx)("input",{id:"email",type:"email",onChange:function(e){return i(e.target.value)}}),Object(u.jsx)("label",{for:"email",children:"Email"})]}),Object(u.jsxs)("div",{class:"input-field",children:[Object(u.jsx)("input",{id:"password ",type:"password",class:" passwd",onChange:function(e){return s(e.target.value)}}),Object(u.jsx)("label",{for:"password",children:"Password"})]}),Object(u.jsxs)("div",{className:"show-password",children:[Object(u.jsx)("a",{href:"#",style:{fontSize:"0.9rem"},children:"Forgot your password?"})," ",Object(u.jsx)("div",{id:"togglePassword",children:Object(u.jsx)("span",{className:"",children:Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{className:"small ",type:"checkbox",onClick:function(){var e,t=document.querySelector(".passwd");"password"===(e=t).type?(console.log(e),e.type="text"):e.type="password"}}),Object(u.jsx)("span",{style:{color:"#212121",fontSize:"0.9rem"},children:"Show password"})]})})})]}),Object(u.jsx)("button",{className:"button",children:"Sign In"}),Object(u.jsx)("div",{children:Object(u.jsx)("span",{children:"or use your account"})}),Object(u.jsxs)("div",{class:"social-container",children:[Object(u.jsxs)("a",{href:"#",class:"social",children:[Object(u.jsx)(h.a,{icon:["far","microsoft"]}),Object(u.jsx)(h.a,{icon:b.a,size:"lg"}),Object(u.jsx)("i",{class:"fab fa-facebook-f"})]}),Object(u.jsx)("a",{href:"#",class:"social",children:Object(u.jsx)(h.a,{icon:b.c,size:"lg"})}),Object(u.jsx)("a",{href:"#",class:"social",children:Object(u.jsx)(h.a,{icon:b.b,size:"lg"})})]})]})}),Object(u.jsx)("div",{class:"overlay-container",children:Object(u.jsxs)("div",{class:"overlay",children:[Object(u.jsxs)("div",{class:"overlay-panel overlay-let",children:[Object(u.jsx)("h1",{children:"Welcome Back!"}),Object(u.jsx)("p",{className:"p",children:"To keep connected with us please login with your personal info"}),Object(u.jsx)("button",{class:"ghost",id:"signIn",className:"button",children:"Sign In"})]}),Object(u.jsxs)("div",{class:"overlay-panel overlay-right",children:[Object(u.jsx)("h1",{children:"Hey, There!"}),Object(u.jsx)("p",{children:"Enter your personal details and start journey with us"}),Object(u.jsx)("button",{class:"ghost",id:"signUp",className:"button",children:"Sign Up"})]})]})})]})})},x=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,26)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),x()}},[[25,1,2]]]);
//# sourceMappingURL=main.db8cda6b.chunk.js.map