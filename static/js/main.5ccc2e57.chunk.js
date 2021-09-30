(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{12:function(e,t,n){e.exports={form:"ProfileForm_form__21Zw-",control:"ProfileForm_control__1nkmX",action:"ProfileForm_action__2NcWX"}},15:function(e,t,n){e.exports={header:"MainNavigation_header__2X_FQ",logo:"MainNavigation_logo__1L4ol"}},20:function(e,t,n){e.exports={profile:"UserProfile_profile__3kvX3"}},21:function(e,t,n){e.exports={starting:"StartingPageContent_starting__2N5du"}},26:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var o,c=n(17),r=n.n(c),i=n(7),a=(n(26),n(1)),s=n.n(a),l=n(2),j=n(11),u=n(0),h=s.a.createContext({token:"",isLoggedIn:!1,login:function(e){},logout:function(){}}),d=function(e){var t=(new Date).getTime();return new Date(e).getTime()-t},b=function(e){var t,n=function(){var e=localStorage.getItem("token"),t=localStorage.getItem("expirationTime"),n=d(t);return n<=6e4?(localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),null):{token:e,duration:n}}();n&&(t=n.token);var c=Object(a.useState)(t),r=Object(j.a)(c,2),i=r[0],s=r[1],l=!!i,b=Object(a.useCallback)((function(){s(null),localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),o&&clearTimeout(o)}),[]);Object(a.useEffect)((function(){n&&(console.log(n.duration),o=setTimeout(b,n.duration))}),[n,b]);var g={token:i,isLoggedIn:l,login:function(e,t){s(e),localStorage.setItem("token",e),localStorage.setItem("expirationTime",t);var n=d(t);o=setTimeout(b,n)},logout:b};return Object(u.jsx)(h.Provider,{value:g,children:e.children})},g=h,m=n(15),O=n.n(m),f=function(){var e=Object(a.useContext)(g),t=e.isLoggedIn;return Object(u.jsxs)("header",{className:O.a.header,children:[Object(u.jsx)(i.b,{to:"/",children:Object(u.jsx)("div",{className:O.a.logo,children:"React Auth"})}),Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{children:[!t&&Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/auth",children:"Login"})}),t&&Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/profile",children:"Profile"})}),t&&Object(u.jsx)("li",{children:Object(u.jsx)("button",{onClick:function(){e.logout()},children:"Logout"})})]})})]})},x=function(e){return Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)(f,{}),Object(u.jsx)("main",{children:e.children})]})},p=n(12),v=n.n(p),_=function(){var e=Object(a.useRef)(),t=Object(l.g)(),n=Object(a.useContext)(g);return Object(u.jsxs)("form",{onSubmit:function(o){o.preventDefault();var c=e.current.value;fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBSAbmCalDyyob8Rff1nlhzAN7tJ6W5CT4",{method:"POST",body:JSON.stringify({idToken:n.token,password:c,returnSecureToken:!1}),headers:{"Content-Type":"application/json"}}).then((function(e){t.replace("/React-Authentichation")}))},className:v.a.form,children:[Object(u.jsxs)("div",{className:v.a.control,children:[Object(u.jsx)("label",{htmlFor:"new-password",children:"New Password"}),Object(u.jsx)("input",{type:"password",id:"new-password",minLength:"7",ref:e})]}),Object(u.jsx)("div",{className:v.a.action,children:Object(u.jsx)("button",{children:"Change Password"})})]})},S=n(20),k=n.n(S),y=function(){return Object(u.jsxs)("section",{className:k.a.profile,children:[Object(u.jsx)("h1",{children:"Your User Profile"}),Object(u.jsx)(_,{})]})},w=n(9),N=n.n(w),C=function(){var e=Object(a.useState)(!0),t=Object(j.a)(e,2),n=t[0],o=t[1],c=Object(a.useRef)(),r=Object(a.useRef)(),i=Object(a.useContext)(g),s=Object(l.g)(),h=Object(a.useState)(!1),d=Object(j.a)(h,2),b=d[0],m=d[1];return Object(u.jsxs)("section",{className:N.a.auth,children:[Object(u.jsx)("h1",{children:n?"Login":"Sign Up"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t,o=c.current.value,a=r.current.value;m(!0),t=n?"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBSAbmCalDyyob8Rff1nlhzAN7tJ6W5CT4":"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBSAbmCalDyyob8Rff1nlhzAN7tJ6W5CT4",fetch(t,{method:"POST",body:JSON.stringify({email:o,password:a,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){return m(!1),e.ok?e.json():e.json().then((function(e){console.log(e);var t="Authentication failed!";throw e&&e.error&&e.error.message&&(t=e.error.message),new Error(t)}))})).then((function(e){console.log(e);var t=new Date((new Date).getTime()+1e3*+e.expiresIn);i.login(e.idToken,t),s.replace("/React-Authentichation")})).catch((function(e){alert(e.message)}))},children:[Object(u.jsxs)("div",{className:N.a.control,children:[Object(u.jsx)("label",{htmlFor:"email",children:"Your Email"}),Object(u.jsx)("input",{type:"email",id:"email",required:!0,ref:c})]}),Object(u.jsxs)("div",{className:N.a.control,children:[Object(u.jsx)("label",{htmlFor:"password",children:"Your Password"}),Object(u.jsx)("input",{type:"password",id:"password",required:!0,ref:r})]}),Object(u.jsxs)("div",{className:N.a.actions,children:[!b&&Object(u.jsx)("button",{children:n?"Login":"Create Account"}),b&&Object(u.jsx)("p",{children:"Sending Request....."}),Object(u.jsx)("button",{type:"button",className:N.a.toggle,onClick:function(){o((function(e){return!e}))},children:n?"Create new account":"Login with existing account"})]})]})]})},T=function(){return Object(u.jsx)(C,{})},A=n(21),I=n.n(A),P=function(){return Object(u.jsx)("section",{className:I.a.starting,children:Object(u.jsx)("h1",{children:"Welcome on Board!"})})},L=function(){return Object(u.jsx)(P,{})};var F=function(){var e=Object(a.useContext)(g);return Object(u.jsx)(x,{children:Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{path:"/React-Authentichation",exact:!0,children:Object(u.jsx)(L,{})}),!e.isLoggedIn&&Object(u.jsx)(l.b,{path:"/auth",children:Object(u.jsx)(T,{})}),Object(u.jsxs)(l.b,{path:"/profile",children:[e.isLoggedIn&&Object(u.jsx)(y,{}),!e.isLoggedIn&&Object(u.jsx)(l.a,{to:"/auth"})]}),Object(u.jsx)(l.b,{path:"*",children:Object(u.jsx)(l.a,{to:"/React-Authentichation"})})]})})};r.a.render(Object(u.jsx)(b,{children:Object(u.jsx)(i.a,{children:Object(u.jsx)(F,{})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={auth:"AuthForm_auth__37gyQ",control:"AuthForm_control__4e7CN",actions:"AuthForm_actions__2fEnK",toggle:"AuthForm_toggle__15hKM"}}},[[36,1,2]]]);
//# sourceMappingURL=main.5ccc2e57.chunk.js.map