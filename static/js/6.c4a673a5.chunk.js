(this.webpackJsonpworkbooks=this.webpackJsonpworkbooks||[]).push([[6],{212:function(e,t,n){e.exports={login:"login_login__2gh5w",login__form:"login_login__form__1UwX1",login__fields:"login_login__fields__24Rw7"}},267:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n(4),r=n(50),s=n(0),i=n(23),o=n(3),u=n(62),l=n(77),c=n(55),d=n(212),b=n.n(d);var p=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),n=t[0],d=t[1],p=Object(s.useState)(""),_=Object(r.a)(p,2),f=_[0],h=_[1],g=Object(s.useState)({email:"",password:"",others:""}),j=Object(r.a)(g,2),m=j[0],O=j[1],v=Object(i.b)(),w=Object(o.f)(),x=Object(i.c)(l.b),y=Object(i.c)(l.a);Object(s.useEffect)((function(){if(y){var e=y.code,t=y.message;e.includes("email")?O({email:t,password:"",others:""}):e.includes("password")?O({email:"",password:t,others:""}):O({email:"",password:"",others:t})}}),[y]);var C=Object(s.useCallback)((function(e){d(e.target.value)}),[]),M=Object(s.useCallback)((function(e){h(e.target.value)}),[]);return(null===x||void 0===x?void 0:x.id)?(w.push("/"),null):Object(a.jsx)("div",{className:b.a.login,"data-testid":"login",children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v(Object(u.c)({email:n,password:f}))},noValidate:!0,autoComplete:"off",className:b.a.login__form,children:[Object(a.jsx)(c.c,{type:"email",label:"Email",id:"email",value:n,handleChange:C,hasError:!!m.email,errorMessage:m.email}),Object(a.jsx)(c.c,{type:"password",label:"Password",id:"password",value:f,handleChange:M,hasError:!!m.password,errorMessage:m.password,autoComplete:"on"}),m.others&&Object(a.jsx)("div",{className:"errors",children:Object(a.jsx)("p",{children:m.others})}),Object(a.jsx)(c.a,{type:"submit",disabled:!n||!f,text:"Sign in",centerAlign:!0})]})})}},49:function(e,t,n){e.exports={inputs:"inputs_inputs__1mJmc",inputs__errorText:"inputs_inputs__errorText__v59sp",inputs_errors:"inputs_inputs_errors__1uUgN",inputs__labels:"inputs_inputs__labels__2Nx3A",inputs__field:"inputs_inputs__field__2hSl7",inputs_directionRow:"inputs_inputs_directionRow__3aXFg",inputs_zeroMargin:"inputs_inputs_zeroMargin__3TNQi",buttons:"inputs_buttons__2ba7F",buttons_rightAlign:"inputs_buttons_rightAlign__3HpM5",buttons_centerAlign:"inputs_buttons_centerAlign__3XsH2",buttons_red:"inputs_buttons_red__12KSJ",buttons_default:"inputs_buttons_default__3i1w1"}},55:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return _}));var a=n(4),r=n(24),s=n(51),i=n.n(s),o=n(49),u=n.n(o);var l=function(e){var t,n=e.children,s=e.label,o=e.id,l=e.hasError,c=e.errorMessage,d=e.rowFlex,b=e.zeroMargin,p=i()(u.a.inputs,(t={},Object(r.a)(t,u.a.inputs_errors,l),Object(r.a)(t,u.a.inputs_directionRow,d),Object(r.a)(t,u.a.inputs_zeroMargin,b),t));return Object(a.jsxs)("div",{className:p,"data-testid":"wrapper-box",children:[l&&Object(a.jsx)("span",{className:u.a.inputs__errorText,"data-testid":"error-testing",children:c}),n,Object(a.jsx)("label",{htmlFor:o,className:u.a.inputs__labels,"data-testid":"label",children:s})]})};var c=function(e){var t=e.type,n=void 0===t?"text":t,r=e.label,s=e.value,i=e.handleChange,o=e.id,c=e.hasError,d=e.errorMessage,b=e.autoComplete,p=e.pattern,_=void 0===p?null:p,f=e.checked,h=e.rowFlex;return Object(a.jsx)(l,{id:o,label:r,hasError:c,errorMessage:d,rowFlex:h,children:Object(a.jsx)("input",{type:n,id:o,value:s,onChange:i,className:u.a.inputs__field,autoComplete:b,pattern:_,"data-testid":"input",checked:f})})};var d=function(e){var t,n,s=e.type,o=void 0===s?"button":s,l=e.text,c=e.handleClick,d=void 0===c?function(){return null}:c,b=e.disabled,p=e.isTransparent,_=e.rightAlign,f=e.centerAlign,h=e.redColored,g=e.defaultColored,j=i()(u.a.buttons,(t={},Object(r.a)(t,u.a.buttons_transparent,p),Object(r.a)(t,u.a.buttons_red,h),Object(r.a)(t,u.a.buttons_default,g),t)),m=i()((n={},Object(r.a)(n,u.a.buttons_rightAlign,_),Object(r.a)(n,u.a.buttons_centerAlign,f),n));return Object(a.jsx)("div",{className:m,children:Object(a.jsx)("button",{type:o,onClick:d,className:j,disabled:b,"data-testid":"button",children:l})})},b=n(103),p=n.n(b);var _=function(e){var t=e.selectedDate,n=e.handleChange,r=e.id,s=e.label,i=e.hasError,o=e.errorMessage,c=e.zeroMargin,d=e.isDisabled;return Object(a.jsx)(l,{id:r,label:s,hasError:i,errorMessage:o,zeroMargin:c,children:Object(a.jsx)(p.a,{selected:t,onChange:n,id:r,showYearDropdown:!0,scrollableYearDropdown:!0,dateFormatCalendar:"MMMM",yearDropdownItemNumber:15,className:u.a.inputs__field,disabled:d})})}},56:function(e,t,n){"use strict";var a=n(98);n(101),n(102);a.a.initializeApp({apiKey:"AIzaSyDX7sVrgmBvmTAt8dwvrpTw8Sy9Og77eqw",authDomain:"webb-fontaine-b719a.firebaseapp.com",projectId:"webb-fontaine-b719a",storageBucket:"webb-fontaine-b719a.appspot.com",messagingSenderId:"236763911162",appId:"1:236763911162:web:74b125e3f74026b9310a43"}),t.a=a.a},62:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(56),r=n(14),s=function(e){var t=e.email,n=e.password;return function(e){a.a.auth().signInWithEmailAndPassword(t,n).then((function(t){null!==t&&null!==t.user&&(e(u(t.user.uid)),e({type:r.c}))})).catch((function(t){e({type:r.b,payload:{error:t}})}))}},i=function(){return function(e){a.a.auth().signOut().then((function(){e({type:r.d})}))}},o=function(){return function(e){a.a.auth().onAuthStateChanged((function(t){e(t?u(t.uid):{type:r.b,payload:{error:null}})}))}},u=function(e){return function(t){a.a.database().ref("/Users/".concat(e)).once("value").then((function(e){return t({type:r.a,payload:{userData:e.val()}})}))}}},77:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var a=n(64),r=function(e){return e.auth},s=Object(a.a)([r],(function(e){return e.userData})),i=Object(a.a)([r],(function(e){return e.authError}))}}]);
//# sourceMappingURL=6.c4a673a5.chunk.js.map