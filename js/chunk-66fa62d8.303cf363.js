(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66fa62d8"],{"1cd1":function(t,e,a){},"7f5d":function(t,e,a){"use strict";a("1cd1")},c3df:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"banner bg-setting"}),a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"row"},[a("ValidationObserver",{ref:"form",staticClass:"contact-content col-md-8 offset-md-2 mb-3"},[a("div",{staticClass:"form-row"},[a("ValidationProvider",{staticClass:"col-md-6 mb-3",attrs:{name:"name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.failed,o=e.errors;return[a("label",{attrs:{for:"userName"}},[t._v("姓名")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",class:{"is-invalid":s},attrs:{type:"text",id:"userName",placeholder:"姓名"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),s?a("span",{staticClass:"text-danger"},[t._v(t._s(o[0]))]):t._e()]}}])}),a("div",{staticClass:"col-md-6 mb-3"},[a("label",{attrs:{for:"userPhone"}},[t._v("電話")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control",attrs:{type:"text",id:"userPhone",placeholder:"電話"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})])],1),a("div",{staticClass:"form-group"},[a("ValidationProvider",{staticClass:"col-md-6 mb-3",attrs:{name:"email",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.failed,o=e.errors;return[a("label",{attrs:{for:"userEmail"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",class:{"is-invalid":s},attrs:{type:"text",id:"userEmail",placeholder:"電子郵件"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),s?a("span",{staticClass:"text-danger"},[t._v(t._s(o[0]))]):t._e()]}}])})],1),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"userInfo"}},[t._v("留言")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.contact,expression:"contact"}],staticClass:"form-control contact-text-area",attrs:{id:"userInfo"},domProps:{value:t.contact},on:{input:function(e){e.target.composing||(t.contact=e.target.value)}}})])])],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 offset-md-4"},[a("button",{staticClass:"btn btn-primary btn-block",on:{click:t.onSubmit}},[t._v("送出")])])])])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("h3",{staticClass:"col-md-8 offset-md-2 mb-3"},[t._v("聯絡我們")])])}],n={name:"Contact",data:function(){return{name:"",phone:"",email:"",contact:""}},methods:{onSubmit:function(){this.$refs.form.validate().then((function(t){t?console.log("Success"):console.log("Falut")}))}}},i=n,r=(a("7f5d"),a("2877")),l=Object(r["a"])(i,s,o,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-66fa62d8.303cf363.js.map