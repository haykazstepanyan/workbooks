(this.webpackJsonpworkbooks=this.webpackJsonpworkbooks||[]).push([[6],{212:function(e,t,n){e.exports={login:"login_login__2gh5w",login__form:"login_login__form__1UwX1",login__fields:"login_login__fields__24Rw7"}},267:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var a=n(4),r=n(50),s=n(0),i=n(24),o=n(3),u=n(62),c=n(77),l=n(55),d=n(212),b=n.n(d),p=n(26);var _=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),n=t[0],d=t[1],_=Object(s.useState)(""),f=Object(r.a)(_,2),h=f[0],j=f[1],g=Object(s.useState)({email:"",password:"",others:""}),m=Object(r.a)(g,2),O=m[0],v=m[1],w=Object(i.b)(),x=Object(o.f)(),y=Object(i.c)(c.b),C=Object(i.c)(c.a);Object(s.useEffect)((function(){w(Object(u.a)())}),[w]),Object(s.useEffect)((function(){if(C){var e=C.code,t=C.message;e.includes("email")?v({email:t,password:"",others:""}):e.includes("password")?v({email:"",password:t,others:""}):v({email:"",password:"",others:t})}}),[C]);var M=Object(s.useCallback)((function(e){d(e.target.value)}),[]),A=Object(s.useCallback)((function(e){j(e.target.value)}),[]);return(null===y||void 0===y?void 0:y.id)?(x.push("/"),null):"pending"===(null===y||void 0===y?void 0:y.status)?Object(a.jsx)("div",{className:"page-center-loader",children:Object(a.jsx)(p.a,{})}):Object(a.jsx)("div",{className:b.a.login,"data-testid":"login",children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),w(Object(u.c)({email:n,password:h}))},noValidate:!0,autoComplete:"off",className:b.a.login__form,children:[Object(a.jsx)(l.c,{type:"email",label:"Email",id:"email",value:n,handleChange:M,hasError:!!O.email,errorMessage:O.email}),Object(a.jsx)(l.c,{type:"password",label:"Password",id:"password",value:h,handleChange:A,hasError:!!O.password,errorMessage:O.password,autoComplete:"on"}),O.others&&Object(a.jsx)("div",{className:"errors",children:Object(a.jsx)("p",{children:O.others})}),Object(a.jsx)(l.a,{type:"submit",disabled:!n||!h,text:"Sign in",centerAlign:!0})]})})}},49:function(e,t,n){e.exports={inputs:"inputs_inputs__1mJmc",inputs__errorText:"inputs_inputs__errorText__v59sp",inputs_errors:"inputs_inputs_errors__1uUgN",inputs__labels:"inputs_inputs__labels__2Nx3A",inputs__field:"inputs_inputs__field__2hSl7",inputs_directionRow:"inputs_inputs_directionRow__3aXFg",inputs_zeroMargin:"inputs_inputs_zeroMargin__3TNQi",buttons:"inputs_buttons__2ba7F",buttons_rightAlign:"inputs_buttons_rightAlign__3HpM5",buttons_centerAlign:"inputs_buttons_centerAlign__3XsH2",buttons_red:"inputs_buttons_red__12KSJ",buttons_default:"inputs_buttons_default__3i1w1"}},55:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return _}));var a=n(4),r=n(25),s=n(51),i=n.n(s),o=n(49),u=n.n(o);var c=function(e){var t,n=e.children,s=e.label,o=e.id,c=e.hasError,l=e.errorMessage,d=e.rowFlex,b=e.zeroMargin,p=i()(u.a.inputs,(t={},Object(r.a)(t,u.a.inputs_errors,c),Object(r.a)(t,u.a.inputs_directionRow,d),Object(r.a)(t,u.a.inputs_zeroMargin,b),t));return Object(a.jsxs)("div",{className:p,"data-testid":"wrapper-box",children:[c&&Object(a.jsx)("span",{className:u.a.inputs__errorText,"data-testid":"error-testing",children:l}),n,Object(a.jsx)("label",{htmlFor:o,className:u.a.inputs__labels,"data-testid":"label",children:s})]})};var l=function(e){var t=e.type,n=void 0===t?"text":t,r=e.label,s=e.value,i=e.handleChange,o=e.id,l=e.hasError,d=e.errorMessage,b=e.autoComplete,p=e.pattern,_=void 0===p?null:p,f=e.checked,h=e.rowFlex;return Object(a.jsx)(c,{id:o,label:r,hasError:l,errorMessage:d,rowFlex:h,children:Object(a.jsx)("input",{type:n,id:o,value:s,onChange:i,className:u.a.inputs__field,autoComplete:b,pattern:_,"data-testid":"input",checked:f})})};var d=function(e){var t,n,s=e.type,o=void 0===s?"button":s,c=e.text,l=e.handleClick,d=void 0===l?function(){return null}:l,b=e.disabled,p=e.isTransparent,_=e.rightAlign,f=e.centerAlign,h=e.redColored,j=e.defaultColored,g=i()(u.a.buttons,(t={},Object(r.a)(t,u.a.buttons_transparent,p),Object(r.a)(t,u.a.buttons_red,h),Object(r.a)(t,u.a.buttons_default,j),t)),m=i()((n={},Object(r.a)(n,u.a.buttons_rightAlign,_),Object(r.a)(n,u.a.buttons_centerAlign,f),n));return Object(a.jsx)("div",{className:m,children:Object(a.jsx)("button",{type:o,onClick:d,className:g,disabled:b,"data-testid":"button",children:c})})},b=n(103),p=n.n(b);var _=function(e){var t=e.selectedDate,n=e.handleChange,r=e.id,s=e.label,i=e.hasError,o=e.errorMessage,l=e.zeroMargin,d=e.isDisabled;return Object(a.jsx)(c,{id:r,label:s,hasError:i,errorMessage:o,zeroMargin:l,children:Object(a.jsx)(p.a,{selected:t,onChange:n,id:r,showYearDropdown:!0,scrollableYearDropdown:!0,dateFormatCalendar:"MMMM",yearDropdownItemNumber:15,className:u.a.inputs__field,disabled:d})})}},56:function(e,t,n){"use strict";var a=n(98);n(101),n(102);a.a.initializeApp({apiKey:"AIzaSyDX7sVrgmBvmTAt8dwvrpTw8Sy9Og77eqw",authDomain:"webb-fontaine-b719a.firebaseapp.com",projectId:"webb-fontaine-b719a",storageBucket:"webb-fontaine-b719a.appspot.com",messagingSenderId:"236763911162",appId:"1:236763911162:web:74b125e3f74026b9310a43"}),t.a=a.a},62:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(56),r=n(14),s=function(e){var t=e.email,n=e.password;return function(e){a.a.auth().signInWithEmailAndPassword(t,n).then((function(t){null!==t&&null!==t.user&&(e(u(t.user.uid)),e({type:r.c}))})).catch((function(t){e({type:r.b,payload:{error:t}})}))}},i=function(){return function(e){a.a.auth().signOut().then((function(){e({type:r.d})}))}},o=function(){return function(e){a.a.auth().onAuthStateChanged((function(t){e(t?u(t.uid):{type:r.b,payload:{error:null}})}))}},u=function(e){return function(t){a.a.database().ref("/Users/".concat(e)).once("value").then((function(e){return t({type:r.a,payload:{userData:e.val()}})}))}}},77:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var a=n(64),r=function(e){return e.auth},s=Object(a.a)([r],(function(e){return e.userData})),i=Object(a.a)([r],(function(e){return e.authError}))}}]);
//# sourceMappingURL=6.48252d5c.chunk.js.map