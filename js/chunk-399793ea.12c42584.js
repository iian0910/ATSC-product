(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-399793ea"],{"01f7":function(t,s,o){},"16a3":function(t,s,o){"use strict";o("cd8c")},"53d7":function(t,s,o){"use strict";o("01f7")},cd8c:function(t,s,o){},d178:function(t,s,o){"use strict";var i=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"sticky-top"},[o("div",{staticClass:"nav-content"},[o("div",{staticClass:"container d-flex justify-content-between"},[o("div",{staticClass:"nav-open-btn",class:[t.isOpenNav?"nav-close-btn":""],on:{click:t.isShowNav}},[o("span"),o("span"),o("span")]),o("div",{staticClass:"logo bg-setting"}),o("div",{staticClass:"list-content",style:t.isOpenNav?t.showList:""},[o("ul",{staticClass:"list"},[o("li",{on:{click:t.isShowNav}},[o("router-link",{staticClass:"list-item",attrs:{to:"/"}},[t._v(t._s(t.$t("Home")))])],1),o("li",{on:{click:t.isShowNav}},[o("router-link",{staticClass:"list-item",attrs:{to:"/product/automation"}},[t._v(t._s(t.$t("Automation")))])],1),o("li",{on:{click:t.isShowNav}},[o("router-link",{staticClass:"list-item",attrs:{to:"/product/hydropower"}},[t._v(t._s(t.$t("Hydropower")))])],1),o("li",{on:{click:t.isShowNav}},[o("router-link",{staticClass:"list-item",attrs:{to:"/product/vibrationTransport"}},[t._v(t._s(t.$t("VibrationTransport")))])],1),o("li",{on:{click:t.isShowNav}},[o("router-link",{staticClass:"list-item",attrs:{to:"/contact"}},[t._v(t._s(t.$t("ContactUs")))])],1),o("li",t._l(t.optionsLang,(function(s,i){return o("label",{key:i},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.lang,expression:"$store.state.lang"}],attrs:{type:"radio"},domProps:{value:s.value,checked:t._q(t.$store.state.lang,s.value)},on:{click:function(o){t.emitLangChange(s.value),t.setLang(s.value)},change:function(o){return t.$set(t.$store.state,"lang",s.value)}}}),t._v(" "+t._s(s.text)+" ")])})),0)])])])])])},a=[],e={name:"Navbar",data:function(){return{isOpenNav:!1,deviceResolution:0,showList:{right:"0px"},optionsLang:[{text:"中文",value:"zh"},{text:"English",value:"en"}]}},methods:{isShowNav:function(){this.isOpenNav=!this.isOpenNav},emitLangChange:function(t){this.$emit("changeLanguage",t)},setLang:function(t){this.$store.commit("setLang",t),this.$i18n.locale=t,localStorage.setItem("footmark-lang",t)}}},n=e,r=(o("16a3"),o("2877")),l=Object(r["a"])(n,i,a,!1,null,null,null);s["a"]=l.exports},fd2d:function(t,s,o){"use strict";var i=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",[o("div",{staticClass:"footer"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-8 offset-md-2 footer-info"},[o("div",{staticClass:"row align-items-center"},[t._m(0),o("div",{staticClass:"col-md-8"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6 footer-about-info"},[o("div",{staticClass:"footer-info-title"},[t._v(t._s(t.$t("FooterAboutUsTitle")))]),o("p",{staticClass:"p-0 footer-info-text"},[t._v(t._s(t.$t("FooterAboutUsPhone")))]),o("p",{staticClass:"p-0 footer-info-text"},[t._v(t._s(t.$t("FooterAboutUsFax")))]),o("p",{staticClass:"p-0 footer-info-text"},[t._v(t._s(t.$t("FooterAboutUsEmail")))])]),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"footer-info-title"},[t._v(t._s(t.$t("FooterProductTitle")))]),o("router-link",{staticClass:"p-0 footer-info-text footer-product-item",attrs:{to:"/product/automation"}},[t._v(t._s(t.$t("FooterProductAutomation")))]),o("router-link",{staticClass:"p-0 footer-info-text footer-product-item",attrs:{to:"/product/hydropower"}},[t._v(t._s(t.$t("FooterProductHydropower")))]),o("router-link",{staticClass:"p-0 footer-info-text footer-product-item",attrs:{to:"/product/vibrationTransport"}},[t._v(t._s(t.$t("FooterProductVibrationTransport")))])],1)])])])])]),t._m(1)])])])},a=[function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"col-md-4"},[o("div",{staticClass:"footer-logo bg-setting"})])},function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"row"},[o("div",{staticClass:"col copyright"},[t._v("Copyright © 2021 ATSC. All rights reserved.")])])}],e={name:"Footer",props:{isChangeLanguge:Boolean},updated:function(){this.isChangeLanguge?(this.$store.commit("setLang","en"),this.$i18n.locale="en",localStorage.setItem("footmark-lang","en")):(this.$store.commit("setLang","zh"),this.$i18n.locale="zh",localStorage.setItem("footmark-lang","zh"))}},n=e,r=(o("53d7"),o("2877")),l=Object(r["a"])(n,i,a,!1,null,null,null);s["a"]=l.exports}}]);
//# sourceMappingURL=chunk-399793ea.12c42584.js.map