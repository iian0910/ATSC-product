(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b0afd62"],{"0f91":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EmailJSResponseStatus=e.sendForm=e.send=e.init=void 0;var n=a("3245");Object.defineProperty(e,"EmailJSResponseStatus",{enumerable:!0,get:function(){return n.EmailJSResponseStatus}});var s=a("5129"),o=null,i="https://api.emailjs.com";function r(t,e,a){return void 0===a&&(a={}),new Promise((function(s,o){var i=new XMLHttpRequest;for(var r in i.addEventListener("load",(function(t){var e=new n.EmailJSResponseStatus(t.target);200===e.status||"OK"===e.text?s(e):o(e)})),i.addEventListener("error",(function(t){o(new n.EmailJSResponseStatus(t.target))})),i.open("POST",t,!0),a)i.setRequestHeader(r,a[r]);i.send(e)}))}function c(t){var e=document&&document.getElementById("g-recaptcha-response");return e&&e.value&&(t["g-recaptcha-response"]=e.value),e=null,t}function l(t){return"#"!==t[0]&&"."!==t[0]?"#"+t:t}function m(t,e){o=t,i=e||"https://api.emailjs.com"}function u(t,e,a,n){var s={lib_version:"2.6.4",user_id:n||o,service_id:t,template_id:e,template_params:c(a)};return r(i+"/api/v1.0/email/send",JSON.stringify(s),{"Content-type":"application/json"})}function d(t,e,a,n){if("string"===typeof a&&(a=document.querySelector(l(a))),!a||"FORM"!==a.nodeName)throw"Expected the HTML form element or the style selector of form";s.UI.progressState(a);var c=new FormData(a);return c.append("lib_version","2.6.4"),c.append("service_id",t),c.append("template_id",e),c.append("user_id",n||o),r(i+"/api/v1.0/email/send-form",c).then((function(t){return s.UI.successState(a),t}),(function(t){return s.UI.errorState(a),Promise.reject(t)}))}e.init=m,e.send=u,e.sendForm=d,e.default={init:m,send:u,sendForm:d}},"1cd1":function(t,e,a){},3245:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EmailJSResponseStatus=void 0;var n=function(){function t(t){this.status=t.status,this.text=t.responseText}return t}();e.EmailJSResponseStatus=n},5129:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.UI=void 0;var n=function(){function t(){}return t.clearAll=function(t){t.classList.remove(this.PROGRESS),t.classList.remove(this.DONE),t.classList.remove(this.ERROR)},t.progressState=function(t){this.clearAll(t),t.classList.add(this.PROGRESS)},t.successState=function(t){t.classList.remove(this.PROGRESS),t.classList.add(this.DONE)},t.errorState=function(t){t.classList.remove(this.PROGRESS),t.classList.add(this.ERROR)},t.PROGRESS="emailjs-sending",t.DONE="emailjs-success",t.ERROR="emailjs-error",t}();e.UI=n},"7f5d":function(t,e,a){"use strict";a("1cd1")},b0c0:function(t,e,a){var n=a("83ab"),s=a("9bf2").f,o=Function.prototype,i=o.toString,r=/^\s*function ([^ (]*)/,c="name";n&&!(c in o)&&s(o,c,{configurable:!0,get:function(){try{return i.call(this).match(r)[1]}catch(t){return""}}})},c3df:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}},[a("Circle4")],1),a("Navbar",{on:{changeLanguage:t.setLang}}),a("div",{staticClass:"contact-banner bg-setting banner-img-filter"}),a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("h3",{staticClass:"col-md-8 offset-md-2 section-title"},[t._v(t._s(t.$t("ContactTitle")))])]),a("div",{staticClass:"row"},[a("ValidationObserver",{ref:"form",staticClass:"contact-content col-md-8 offset-md-2 mb-3"},[a("div",{staticClass:"form-row"},[a("ValidationProvider",{staticClass:"col-md-6 mb-3",attrs:{name:"name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.failed,s=e.errors;return[a("label",{attrs:{for:"userName"}},[t._v(t._s(t.$t("ContactFormName")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",class:{"is-invalid":n},attrs:{type:"text",id:"userName",placeholder:[[t.$t("ContactFormNameHolder")]]},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n?a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))]):t._e()]}}])}),a("div",{staticClass:"col-md-6 mb-3"},[a("label",{attrs:{for:"userPhone"}},[t._v(t._s(t.$t("ContactFormPhone")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control",attrs:{type:"text",id:"userPhone",placeholder:[[t.$t("ContactFormPhoneHolder")]]},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})])],1),a("div",{staticClass:"form-group"},[a("ValidationProvider",{staticClass:"mb-3",attrs:{name:"email",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.failed,s=e.errors;return[a("label",{attrs:{for:"userEmail"}},[t._v(t._s(t.$t("ContactFormEmail")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",class:{"is-invalid":n},attrs:{type:"text",id:"userEmail",placeholder:[[t.$t("ContactFormEmailHolder")]]},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n?a("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))]):t._e()]}}])})],1),a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-md-6 mb-3"},[a("div",{attrs:{for:"userSalutation"}},[t._v(t._s(t.$t("ContactFormSalutation")))]),a("div",{staticClass:"radio-mt-space"},[a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.salutation,expression:"salutation"}],staticClass:"form-check-input",attrs:{type:"radio",id:"male",value:"male",name:"salutation"},domProps:{checked:t._q(t.salutation,"male")},on:{change:function(e){t.salutation="male"}}}),a("label",{staticClass:"form-check-label",attrs:{for:"male"}},[t._v(t._s(t.$t("ContactFormSalutationMale")))])]),a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.salutation,expression:"salutation"}],staticClass:"form-check-input",attrs:{name:"salutation",type:"radio",id:"female",value:"female"},domProps:{checked:t._q(t.salutation,"female")},on:{change:function(e){t.salutation="female"}}}),a("label",{staticClass:"form-check-label",attrs:{for:"female"}},[t._v(t._s(t.$t("ContactFormSalutationFemale")))])])])]),a("div",{staticClass:"col-md-6 mb-3"},[a("label",{attrs:{for:"userCompanyName"}},[t._v(t._s(t.$t("ContactFormCompanyName")))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.companyName,expression:"companyName"}],staticClass:"form-control",attrs:{type:"text",name:"companyName",id:"userCompanyName",placeholder:[[t.$t("ContactFormCompanyNameHolder")]]},domProps:{value:t.companyName},on:{input:function(e){e.target.composing||(t.companyName=e.target.value)}}})])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"userInfo"}},[t._v(t._s(t.$t("ContactFormInfo")))]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.contact,expression:"contact"}],staticClass:"form-control contact-text-area",attrs:{name:"contact",id:"userInfo"},domProps:{value:t.contact},on:{input:function(e){e.target.composing||(t.contact=e.target.value)}}})])])],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 offset-md-4"},[a("button",{staticClass:"btn btn-primary btn-block",on:{click:t.onSubmit}},[t._v(t._s(t.$t("ContactFormSubmit")))])])])])]),a("Footer",{attrs:{isChangeLanguge:t.changeLanguge}})],1)},s=[],o=(a("b0c0"),a("d178")),i=a("fd2d"),r=a("d58b"),c=a("0f91"),l=a.n(c),m={name:"Contact",components:{Navbar:o["a"],Footer:i["a"],Circle4:r["a"]},data:function(){return{name:"",phone:"",email:"",salutation:"",companyName:"",contact:"",isLoading:!1,changeLanguge:!0}},methods:{onSubmit:function(){this.$refs.form.validate().then((function(t){t?console.log("Success"):console.log("Falut")}));var t={name:this.name,phone:this.phone,email:this.email,salutation:this.salutation,companyName:this.companyName,contact:this.contact};l.a.send("service_2tq1hcj","template_er1g19b",t,"user_ZTnkHH4A1616VUISxQVPI").then((function(t){console.log("SUCCESS!",t.status,t.text)}),(function(t){console.log("FAILED...",t)}))},setLang:function(t){this.$store.commit("setLang",t),this.$i18n.locale=t,localStorage.setItem("footmark-lang",t),this.changeLanguge=!this.changeLanguge}},created:function(){this.isLoading=!0},mounted:function(){this.isLoading=!1}},u=m,d=(a("7f5d"),a("2877")),f=Object(d["a"])(u,n,s,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-4b0afd62.61018c18.js.map