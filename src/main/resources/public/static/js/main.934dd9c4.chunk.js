(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{23:function(e,t,a){e.exports=a(36)},28:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a(19),o=a(1),u=a(2),s=a(3),m=(a(28),r.a.createContext([{},function(){}]));function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var E=r.a.createElement("path",{d:"M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"}),b=function(e){var t=e.svgRef,a=e.title,n=p(e,["svgRef","title"]);return r.a.createElement("svg",i({fill:"#000000",viewBox:"0 0 50 50",width:"35px",height:"35px",ref:t},n),a?r.a.createElement("title",null,a):null,E)},f=r.a.forwardRef((function(e,t){return r.a.createElement(b,i({svgRef:t},e))})),h=(a.p,function(){var e=Object(n.useContext)(m),t=Object(o.a)(e,1)[0],a=Object(n.useState)(!1),l=Object(o.a)(a,2),c=l[0],s=l[1];return r.a.createElement("div",{id:"header"},r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement(u.b,{to:"/"},"Story-teller")),r.a.createElement(d,{user:t,toggleMenu:function(){s(!c)}})),r.a.createElement(g,{user:t,isMenuOpen:c}))});function d(e){return r.a.createElement("div",{id:"menu"},0===Object.keys(e.user).length?r.a.createElement("div",{className:"menu-items"},e.user.username,r.a.createElement(u.b,{to:"/register"},"Register"),r.a.createElement(u.b,{to:"/login"},"Login")):r.a.createElement("div",{className:"menu-items"},e.user.username,r.a.createElement(u.b,{to:"/create-article"},"Novy pribeh"),r.a.createElement(u.b,{to:"/my-stories"},"Moje pribehy"),r.a.createElement(u.b,{to:"/logout"},"Odhl\xe1si\u0165")),r.a.createElement("div",{className:"menu-button",onClick:function(){return e.toggleMenu()}},r.a.createElement(f,null)))}function g(e){return r.a.createElement("div",{id:"mobile-menu",style:e.isMenuOpen&&{display:"block"}||{}},r.a.createElement("ul",null,0===Object.keys(e.user).length?r.a.createElement("div",null,e.user.username,r.a.createElement("li",null,r.a.createElement(u.b,{to:"/register"},"Register")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/login"},"Login"))):r.a.createElement("div",null,e.user.username,r.a.createElement("li",null,r.a.createElement(u.b,{to:"/create-article"},"Novy pribeh")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/my-stories"},"Moje pribehy")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/logout"},"Odhl\xe1si\u0165")))))}var v,O=a(7),y=a.n(O),j=a(10),k=a(22);!function(e){e.GET="GET",e.POST="POST",e.DELETE="DELETE",e.PUT="PUT"}(v||(v={}));var x=function(e,t,a){var r=Object(n.useState)(t),l=Object(o.a)(r,2),c=l[0],u=l[1],m=Object(n.useState)(!1),i=Object(o.a)(m,2),p=i[0],E=i[1],b=Object(s.g)();return Object(n.useEffect)((function(){return Object(j.a)(y.a.mark((function t(){var n,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.includes("undefined")||p){t.next=13;break}return t.next=3,fetch("/api/v1".concat(e),a);case 3:if(!(n=t.sent).ok){t.next=11;break}return t.next=7,n.json();case 7:r=t.sent,u(r),t.next=12;break;case 11:n.ok||b.push("/");case 12:E(!0);case 13:case"end":return t.stop()}}),t)})))(),function(){}}),[a,e,t,c,b]),[c,u]};function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var C=r.a.createElement("path",{d:"M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50",fill:"#2196f3",stroke:"none"},r.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",dur:"1s",repeatCount:"indefinite",keyTimes:"0;1",values:"0 50 51;360 50 51"})),L=function(e){var t=e.svgRef,a=e.title,n=N(e,["svgRef","title"]);return r.a.createElement("svg",S({style:{margin:"auto",background:"rgb(255, 255, 255) none repeat scroll 0% 0%",display:"block",shapeRendering:"auto"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",ref:t},n),a?r.a.createElement("title",null,a):null,C)},w=r.a.forwardRef((function(e,t){return r.a.createElement(L,S({svgRef:t},e))})),P=(a.p,a(15));function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach((function(t){Object(P.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var R=function(e,t){var a=t.onSuccessCallback,r=t.token,l=t.method,c=t.defaultState,u=Object(n.useState)({}),s=Object(o.a)(u,2),m=s[0],i=s[1],p=Object(n.useState)(""),E=Object(o.a)(p,2),b=E[0],f=E[1];return{handleSubmit:function(){var t=Object(j.a)(y.a.mark((function t(n){var o,u,s;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),o={"Content-Type":"Application/json"},r&&(o["x-access-token"]=r),c&&(c=M({},c,{},m)),t.next=6,fetch("/api/v1".concat(e),{method:l||v.POST,headers:o,body:JSON.stringify(c||m)});case 6:if(!(u=t.sent).ok){t.next=14;break}return t.next=10,u.json();case 10:s=t.sent,a&&(console.log(s),a(s)),t.next=16;break;case 14:console.log(u.statusText),f(u.statusText);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),handleChange:function(e){f("");var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;i((function(e){return M({},e,Object(P.a)({},n,a))}))},errorMessage:b}};function A(e){var t=Object(s.h)().id,a=Object(n.useContext)(m),l=Object(o.a)(a,1)[0],c={method:v.POST,headers:{}};0!==Object.keys(l).length&&(c.headers["x-access-token"]=l.token);var u=x("/article/".concat(t),null,c),i=Object(o.a)(u,1)[0];return r.a.createElement("div",{className:"ArticleDetail"},null==i?r.a.createElement(w,null):r.a.createElement(F,i),r.a.createElement(D,{articleId:t,token:l.token}))}function D(e){var t=e.articleId,a=e.token,l=x("/article/".concat(t,"/comment"),[],{method:v.GET,headers:{"x-access-token":a}}),c=Object(o.a)(l,2),u=c[0],s=c[1],i=Object(n.useContext)(m),p=Object(o.a)(i,1)[0],E=R("/comment",{token:p.token,defaultState:{articleId:t},onSuccessCallback:function(e){console.log(e),s([e].concat(Object(k.a)(u)))}}),b=E.handleSubmit,f=E.handleChange,h=E.errorMessage;return r.a.createElement("div",null,r.a.createElement("ul",{className:"list list-non-clickable"},p&&r.a.createElement("div",{className:""},r.a.createElement("form",{className:"f-comment",onSubmit:b},""!==h&&r.a.createElement("p",{className:"error"},"Neplatny obsah komentara"),r.a.createElement("textarea",{className:"form-element ta-comment",name:"body",placeholder:"Write your thoughts about this story",onChange:f,minLength:20,maxLength:200}),r.a.createElement("input",{className:"btn",type:"submit",value:"Send"}))),0===Object.keys(u).length?"No comments":u.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("h3",null,e.username),r.a.createElement("p",null,e.date),r.a.createElement("p",null,e.body))}))))}function I(){var e=x("/",[]),t=Object(o.a)(e,1)[0];return r.a.createElement("div",null,r.a.createElement("h2",null,"Latest Articles"),r.a.createElement("ul",{className:"list"},0!==t.length?t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(u.b,{to:"/article/".concat(e.id)},r.a.createElement(G,e)))})):r.a.createElement(w,null)))}function J(){var e=x("/top-articles",[]),t=Object(o.a)(e,1)[0];return r.a.createElement("div",null,r.a.createElement("h2",null,"Top Articles"),r.a.createElement("ol",{className:"list"},0!==t.length?t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(u.b,{to:"/article/".concat(e.id)},r.a.createElement(G,e)))})):r.a.createElement(w,null)))}function Z(){var e=Object(s.g)(),t=Object(n.useContext)(m),a=Object(o.a)(t,1)[0],l=x("/user/".concat(a.id,"/article"),[],{method:v.GET,headers:{"x-access-token":a.token}}),c=Object(o.a)(l,2),i=c[0],p=c[1],E=function(){var e=Object(j.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/article/".concat(t,"/post"),{method:v.POST,headers:{"Content-Type":"application/json","x-access-token":a.token}});case 2:e.sent.ok&&p(i.map((function(e){return e.id===t&&(e.active=!0),e})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(j.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/article/".concat(t),{method:v.DELETE,headers:{"x-access-token":a.token}});case 2:e.sent.ok&&p(i.filter((function(e){return e.id!==t})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("ul",{className:"list"},0!==i.length?i.map((function(t,n){return r.a.createElement("li",{key:n},r.a.createElement(u.b,{to:"/article/".concat(t.id)},r.a.createElement(G,Object.assign({},t,{user:a}))),r.a.createElement("div",{className:"action-buttons"},!t.active&&r.a.createElement("button",{className:"btn",onClick:function(){return E(t.id)}},"Post"),r.a.createElement("button",{className:"btn",onClick:function(){return e.push("/article/".concat(t.id,"/update"))}},"Update"),r.a.createElement("button",{className:"btn",onClick:function(){return b(t.id)}},"Delete")))})):r.a.createElement(w,null))}var F=function(e){e.id;var t=e.title,a=e.body,n=e.date,l=e.user;e.active;return r.a.createElement("div",{className:"article-detail"},r.a.createElement("h3",null,t,">"),r.a.createElement("p",null,l.username),r.a.createElement("p",null,n),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:a.replace(/<<([^>>]*)>>/g,"<h4>$1</h4>")}}))},G=function(e){e.id;var t=e.title,a=e.body,n=e.date,l=e.user,c=e.active;return r.a.createElement("div",{style:!c&&{color:"#9E9E9E"}||{}},r.a.createElement("h3",null,t),r.a.createElement("p",null,a),r.a.createElement("p",null,l.username),r.a.createElement("p",null,n))},U=function(){return r.a.createElement("div",{id:"landing-area"},r.a.createElement("h2",null,"Perfect place for your stories!"))},B=function(){return r.a.createElement("footer",null,"Copyright \xa9 2019 Storyteller. All rights reserved;")},W=function(){return r.a.createElement("div",{id:"latest-blogs"},r.a.createElement("div",{id:"blog-posts"},r.a.createElement(I,null),r.a.createElement(B,null)),r.a.createElement("div",{id:"popular-posts"},r.a.createElement(J,null)))},V=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(U,null),r.a.createElement(W,null))},_=function(){var e=Object(s.g)(),t=R("/register",{onSuccessCallback:function(){e.push("/")}}),a=t.handleSubmit,n=t.handleChange,l=t.errorMessage;return r.a.createElement("div",{className:"form-container"},r.a.createElement(h,null),r.a.createElement("form",{onSubmit:a},""!==l&&r.a.createElement("p",{className:"error"},"Zle meno alebo heslo"),r.a.createElement("p",null,"Register"),r.a.createElement("input",{className:"form-element",type:"text",name:"username",placeholder:"username",onChange:n,autoFocus:!0,minLength:3,maxLength:20}),r.a.createElement("input",{className:"form-element",type:"password",name:"password",placeholder:"password",onChange:n,minLength:5,maxLength:28}),r.a.createElement("input",{className:"btn",type:"submit",value:"Submit"})),r.a.createElement(B,null))},H=function(){var e=Object(s.g)(),t=Object(n.useContext)(m),a=Object(o.a)(t,2),l=(a[0],a[1]),c=R("/login",{onSuccessCallback:function(t){l(t),localStorage.setItem("user",JSON.stringify(t)),e.push("/")}}),u=c.handleSubmit,i=c.handleChange,p=c.errorMessage;return r.a.createElement("div",{className:"form-container"},r.a.createElement(h,null),r.a.createElement("form",{onSubmit:u},""!==p&&r.a.createElement("p",{className:"error"},"Zle meno alebo heslo"),r.a.createElement("p",null,"Login"),r.a.createElement("input",{className:"form-element",type:"text",name:"username",placeholder:"username",onChange:i,autoFocus:!0,minLength:3,maxLength:20}),r.a.createElement("input",{className:"form-element",type:"password",name:"password",placeholder:"password",onChange:i,minLength:5,maxLength:28}),r.a.createElement("input",{className:"btn",type:"submit",value:"Submit"})),r.a.createElement(B,null))},Y=function(){var e=Object(n.useContext)(m),t=Object(o.a)(e,1)[0],a=Object(s.g)(),l=R("/article",{token:t.token,onSuccessCallback:function(){a.push("/")}}),c=l.handleSubmit,u=l.handleChange,i=l.errorMessage;return r.a.createElement("div",{className:"form-container"},r.a.createElement(h,null),r.a.createElement("form",{onSubmit:c},""!==i&&r.a.createElement("p",{className:"error"},"Nespravne parametre"),r.a.createElement("input",{className:"form-element",type:"text",name:"title",placeholder:"Title",onChange:u,autoFocus:!0,minLength:8,maxLength:20}),r.a.createElement("textarea",{className:"form-element",name:"body",placeholder:"Write about your story",onChange:u,minLength:8,maxLength:2e4}),r.a.createElement("input",{className:"btn",type:"submit",value:"Submit"})),r.a.createElement(B,null))},$=function(){return r.a.createElement("div",{className:"MyStories App"},r.a.createElement(h,null),r.a.createElement(U,null),r.a.createElement("div",null,r.a.createElement(Z,null)),r.a.createElement(B,null))},q=function(){return r.a.createElement("div",{className:"ArticleDetailRoute"},r.a.createElement(h,null),r.a.createElement(U,null),r.a.createElement(A,null),r.a.createElement(B,null))},z=function(){var e=Object(n.useContext)(m),t=Object(o.a)(e,2),a=(t[0],t[1]),l=Object(s.g)();return a({}),localStorage.removeItem("user"),l.push("/"),r.a.createElement("div",null)},K=function(e){var t=Object(s.h)().id,a=Object(n.useContext)(m),l=Object(o.a)(a,1)[0],c=Object(s.g)(),u={method:v.POST,headers:{}},i=x("/article/".concat(t),null,u),p=Object(o.a)(i,1)[0],E=R("/article/".concat(t),{token:l.token,method:v.PUT,defaultState:p,onSuccessCallback:function(){c.push("/my-stories")}}),b=E.handleSubmit,f=E.handleChange,d=E.errorMessage;return 0!==Object.keys(l).length&&(u.headers["x-access-token"]=l.token),r.a.createElement("div",{className:"form-container"},r.a.createElement(h,null),r.a.createElement("form",{onSubmit:b},""!==d&&r.a.createElement("p",{className:"error"},"Nespravne parametre"),r.a.createElement("input",{className:"form-element",type:"text",name:"title",placeholder:"Title",onChange:f,autoFocus:!0,defaultValue:p&&p.title||"",minLength:8,maxLength:28}),r.a.createElement("textarea",{className:"form-element",name:"body",placeholder:"Write about your story",onChange:f,defaultValue:p&&p.body||"",minLength:8,maxLength:2e4}),r.a.createElement("input",{className:"btn",type:"submit",value:"Submit"})),r.a.createElement(B,null))};function Q(e){var t=e.Component,a=e.user,n=Object(c.a)(e,["Component","user"]);return r.a.createElement(s.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(s.a,{to:"/login"})}}))}a(35);l.render(n.createElement((function(e){var t=Object(n.useState)({}),a=Object(o.a)(t,2),l=a[0],c=a[1];return r.a.createElement(m.Provider,{value:[l,c]},e.children)}),null,n.createElement((function(){var e=Object(n.useContext)(m),t=Object(o.a)(e,2),a=t[0],l=t[1],c=localStorage.getItem("user");return c&&0===Object.keys(a).length&&l(JSON.parse(c)),r.a.createElement("div",{className:"App"},r.a.createElement(u.a,null,r.a.createElement(s.d,null,r.a.createElement(Q,{path:"/logout",user:0!==Object.keys(a).length||null!=localStorage.getItem("user"),Component:z}),r.a.createElement(Q,{path:"/article/:id/update",Component:K,user:a}),r.a.createElement(Q,{path:"/my-stories",user:a,Component:$}),r.a.createElement(Q,{path:"/create-article",user:a,Component:Y}),r.a.createElement(s.b,{path:"/about"},r.a.createElement("h3",null,"about")),r.a.createElement(s.b,{path:"/register"},r.a.createElement(_,null)),r.a.createElement(s.b,{path:"/login"},r.a.createElement(H,null)),r.a.createElement(s.b,{path:"/article/:id"},r.a.createElement(q,null)),r.a.createElement(s.b,{exact:!0,path:"/"},r.a.createElement(V,null)))))}),null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.934dd9c4.chunk.js.map