(function(t){function e(e){for(var n,a,c=e[0],s=e[1],l=e[2],u=0,m=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&m.push(r[a][0]),r[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,a=1;a<o.length;a++){var c=o[a];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},a={app:0},r={app:0},i=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-7f1487ac":"a5698db6","chunk-2d0a34f6":"a53072d5","chunk-2d0c5204":"7e8ce21a","chunk-2d230c54":"5403a056","chunk-4526bf6a":"ce7299eb","chunk-66874d72":"1132511e","chunk-a86a0db4":"a7b91ee9"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(t){var e=[],o={"chunk-7f1487ac":1,"chunk-4526bf6a":1,"chunk-66874d72":1,"chunk-a86a0db4":1};a[t]?e.push(a[t]):0!==a[t]&&o[t]&&e.push(a[t]=new Promise((function(e,o){for(var n="css/"+({}[t]||t)+"."+{"chunk-7f1487ac":"2a4b70fc","chunk-2d0a34f6":"31d6cfe0","chunk-2d0c5204":"31d6cfe0","chunk-2d230c54":"31d6cfe0","chunk-4526bf6a":"892de805","chunk-66874d72":"104b599e","chunk-a86a0db4":"869d31d5"}[t]+".css",r=s.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===r))return e()}var m=document.getElementsByTagName("style");for(c=0;c<m.length;c++){l=m[c],u=l.getAttribute("data-href");if(u===n||u===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[t],d.parentNode.removeChild(d),o(i)},d.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(t);var m=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var o=r[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;m.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",m.name="ChunkLoadError",m.type=n,m.request=a,o[1](m)}r[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/ATSC-product/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var m=0;m<l.length;m++)e(l[m]);var d=u;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"01f7":function(t,e,o){},"16a3":function(t,e,o){"use strict";o("cd8c")},"53d7":function(t,e,o){"use strict";o("01f7")},"56d7":function(t,e,o){"use strict";o.r(e);o("4160"),o("b64b"),o("159b"),o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("ScrollTopButton"),o("Navbar",{on:{changeLanguage:t.changCurrentLanguage}}),t.isRouterAlive?o("router-view"):t._e(),o("Footer")],1)},r=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sticky-top"},[o("div",{staticClass:"nav-content"},[o("div",{staticClass:"container d-flex justify-content-between"},[o("div",{staticClass:"nav-open-btn",class:[t.isOpenNav?"nav-close-btn":""],on:{click:t.isShowNav}},[o("span"),o("span"),o("span")]),o("div",{staticClass:"logo bg-setting"}),o("div",{staticClass:"list-content",style:t.isOpenNav?t.showList:""},[o("ul",{staticClass:"list"},[o("li",{on:{click:t.isShowNav}},[o("router-link",{staticClass:"list-item",attrs:{to:"/"}},[t._v(t._s(t.$t("Home")))])],1),o("li",{on:{click:t.isShowNav}},[o("router-link",{staticClass:"list-item",attrs:{to:"/product/automation"}},[t._v(t._s(t.$t("Automation")))])],1),o("li",{on:{click:t.isShowNav}},[o("router-link",{staticClass:"list-item",attrs:{to:"/product/hydropower"}},[t._v(t._s(t.$t("Hydropower")))])],1),o("li",{on:{click:t.isShowNav}},[o("router-link",{staticClass:"list-item",attrs:{to:"/product/vibrationTransport"}},[t._v(t._s(t.$t("VibrationTransport")))])],1),o("li",{on:{click:t.isShowNav}},[o("router-link",{staticClass:"list-item",attrs:{to:"/contact"}},[t._v(t._s(t.$t("ContactUs")))])],1),o("li",{staticClass:"translation",on:{click:t.hideNav}},t._l(t.optionsLang,(function(e,n){return o("label",{key:n,staticClass:"changeLanguage m-0"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.lang,expression:"$store.state.lang"}],staticClass:"change-radio",attrs:{type:"radio"},domProps:{value:e.value,checked:t._q(t.$store.state.lang,e.value)},on:{change:[function(o){return t.$set(t.$store.state,"lang",e.value)},function(o){return t.setLang(e.value)}]}}),t._v(" "+t._s(e.text)+" ")])})),0)])])])])])},c=[],s={name:"Navbar",data:function(){return{isOpenNav:!1,deviceResolution:0,showList:{right:"0px",position:"fixed"},optionsLang:[{text:"中文",value:"zh"},{text:"English",value:"en"}]}},methods:{isShowNav:function(){var t=document.body.clientWidth;t<769&&(this.isOpenNav=!this.isOpenNav)},hideNav:function(){this.isOpenNav=!1},setLang:function(t){this.$emit("changeLanguage",t)}}},l=s,u=(o("16a3"),o("2877")),m=Object(u["a"])(l,i,c,!1,null,null,null),d=m.exports,f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"footer"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 footer-info"},[o("div",{staticClass:"row align-items-center"},[t._m(0),o("div",{staticClass:"col-md-8"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6 footer-about-info"},[o("div",{staticClass:"footer-info-title"},[t._v(t._s(t.$t("FooterAboutUsTitle")))]),o("p",{staticClass:"p-0 footer-info-text"},[t._v(t._s(t.$t("FooterAboutUsPhone")))]),o("p",{staticClass:"p-0 footer-info-text"},[t._v(t._s(t.$t("FooterAboutUsFax")))]),o("p",{staticClass:"p-0 footer-info-text"},[t._v(t._s(t.$t("FooterAboutUsEmail")))])]),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"footer-info-title"},[t._v(t._s(t.$t("FooterProductTitle")))]),o("router-link",{staticClass:"p-0 footer-info-text footer-product-item",attrs:{to:"/product/automation"}},[t._v(t._s(t.$t("FooterProductAutomation")))]),o("router-link",{staticClass:"p-0 footer-info-text footer-product-item",attrs:{to:"/product/hydropower"}},[t._v(t._s(t.$t("FooterProductHydropower")))]),o("router-link",{staticClass:"p-0 footer-info-text footer-product-item",attrs:{to:"/product/vibrationTransport"}},[t._v(t._s(t.$t("FooterProductVibrationTransport")))])],1)])])])])]),t._m(1)])])])},p=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-md-4"},[o("div",{staticClass:"footer-logo bg-setting"})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("div",{staticClass:"col copyright"},[t._v("Copyright © 2021 ATSC. All rights reserved.")])])}],h={name:"Footer"},b=h,v=(o("53d7"),Object(u["a"])(b,f,p,!1,null,null,null)),g=v.exports,C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"topBtn",on:{click:t.scrollTop}},[o("i",{staticClass:"fa fa-angle-double-left",attrs:{"aria-hidden":"true"}})])])},k=[],F={name:"ScrollTopButton",data:function(){return{}},methods:{scrollTop:function(){window.scroll({top:0,left:0,behavior:"smooth"})}}},y=F,_=(o("74ca"),Object(u["a"])(y,C,k,!1,null,null,null)),w=_.exports,S=o("3dd1"),T=o.n(S),P=(o("415b"),{name:"App",components:{ScrollTopButton:w,Navbar:d,Footer:g},data:function(){return{isRouterAlive:!0,currentLanguage:""}},provide:function(){var t=this;return{reload:this.reload,currentLang:function(){return t.currentLanguage}}},methods:{reload:function(){var t=this;console.log("reload occure"),this.isRouterAlive=!1,this.$nextTick((function(){t.isRouterAlive=!0,window.scroll({top:0,left:0,behavior:"smooth"}),T.a.fire({position:"center",icon:"success",title:"Send Email Success !!!",showConfirmButton:!1,timer:1500})}))},changCurrentLanguage:function(t){switch(this.currentLanguage=t,t){case"en":this.$store.commit("setLang",t),this.$i18n.locale=t,localStorage.setItem("footmark-lang",t);break;default:this.$store.commit("setLang",t),this.$i18n.locale=t,localStorage.setItem("footmark-lang",t);break}}}}),A=P,N=(o("5c0b"),Object(u["a"])(A,a,r,!1,null,null,null)),O=N.exports,x=o("2f62");n["a"].use(x["a"]);var E=new x["a"].Store({state:{lang:null},mutations:{setLang:function(t,e){t.lang=e}},actions:{},modules:{}}),$=(o("4989"),o("d3b7"),o("8c4f"));n["a"].use($["a"]);var H=[{path:"/",name:"Index",component:function(){return Promise.all([o.e("chunk-7f1487ac"),o.e("chunk-66874d72")]).then(o.bind(null,"8b24"))}},{path:"/product",name:"Product",component:function(){return Promise.all([o.e("chunk-7f1487ac"),o.e("chunk-a86a0db4")]).then(o.bind(null,"17be"))},children:[{path:"automation",name:"Automation",component:function(){return Promise.all([o.e("chunk-7f1487ac"),o.e("chunk-2d0c5204")]).then(o.bind(null,"3e84"))},meta:{breadcrumbZH:[{name:"首頁",link:"/"},{name:"自動化設備"}],breadcrumbEN:[{name:"Home",link:"/"},{name:"Automation"}]}},{path:"hydropower",name:"Hydropower",component:function(){return Promise.all([o.e("chunk-7f1487ac"),o.e("chunk-2d0a34f6")]).then(o.bind(null,"0242"))},meta:{breadcrumbZH:[{name:"首頁",link:"/"},{name:"水力發電設備"}],breadcrumbEN:[{name:"Home",link:"/"},{name:"Hydropower"}]}},{path:"vibrationTransport",name:"VibrationTransport",component:function(){return Promise.all([o.e("chunk-7f1487ac"),o.e("chunk-2d230c54")]).then(o.bind(null,"ee64"))},meta:{breadcrumbZH:[{name:"首頁",link:"/"},{name:"震動運輸設備"}],breadcrumbEN:[{name:"Home",link:"/"},{name:"Vibration Transport"}]}}]},{path:"/contact",name:"Contact",component:function(){return Promise.all([o.e("chunk-7f1487ac"),o.e("chunk-4526bf6a")]).then(o.bind(null,"c3df"))}}],L=new $["a"]({linkActiveClass:"active",routes:H,scrollBehavior:function(){return{x:0,y:0}}}),U=L,j=o("a925"),I=o("8066"),B=o("e088"),M=o("9062"),V=o.n(M),q=(o("e40d"),o("7bb1")),R=o("4c93"),D=o("60d4"),z=o("2593");n["a"].use(j["a"]);var J="zh";localStorage.setItem("footmark-lang",J),localStorage.getItem("footmark-lang")?(J=localStorage.getItem("footmark-lang"),E.commit("setLang",J)):E.commit("setLang",J);var Z=new j["a"]({locale:J,messages:{zh:I,en:B}});Object.keys(R).forEach((function(t){Object(q["c"])(t,R[t])})),Object(q["d"])("zh_TW",D),Object(q["d"])("en",z),n["a"].component("ValidationObserver",q["a"]),n["a"].component("ValidationProvider",q["b"]),n["a"].config.productionTip=!1,n["a"].component("Loading",V.a),n["a"].config.devtools=!1,n["a"].config.debug=!1,n["a"].config.silent=!0,n["a"].config.productionTip=!1,new n["a"]({store:E,i18n:Z,router:U,render:function(t){return t(O)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";o("9c0c")},"74ca":function(t,e,o){"use strict";o("ceeb")},8066:function(t){t.exports=JSON.parse('{"Home":"首頁","Automation":"自動化設備","Hydropower":"水力發電設備","VibrationTransport":"震動運輸設備","ContactUs":"聯絡我們","IndexBanner":"ATSCEN","ProductBanner":"產品介紹","ContactBanner":"聯絡我們","AboutTitle":"關於我們","AboutDesc":"他林於地國認取專需又……突不失內銀中不經頭；們住果強年：動才大喜實陽，的身創感：謝萬真景們，後然此正來力也？別或書化正經太沒個施未本另著事力性……不神不部包人個視但站，不經們的又心回樣衣媽舉法在學的像果。廣評去下靜服家器去到展少紀味畫可怎好室，讀不算上需現我，高是量老沒、不面不示老生著同代完整業但程聽懷，羅話上有大己教童主詩位變然識有必到。平馬運親。示在麼省性時星小體們名裡了在這理風爾！再得自英仍：也問的久出樂化東，石門血微不被話好手；親黨走有反生！此歷是對頭一定、升長何國不果險為就花成玩？","ProductTitle":"產品列表","ProductMore":"看更多","SidebarItem-1":"自動化設備","SidebarItem-2":"水力發電設備","SidebarItem-3":"震動運輸設備","ContactTitle":"聯絡我們","ContactFormName":"姓名","ContactFormNameHolder":"請輸入姓名","ContactFormNameRequiredMsg":"姓名為必填欄位","ContactFormPhone":"電話","ContactFormPhoneHolder":"請輸入電話","ContactFormEmail":"電子郵件","ContactFormEmailHolder":"mail_account@gmail.com","ContactFormEmailRequiredMsg":"Email 為必填欄位","ContactFormSalutation":"稱謂","ContactFormSalutationMale":"先生","ContactFormSalutationFemale":"女士","ContactFormCompanyName":"公司名稱","ContactFormCompanyNameHolder":"請輸入公司名稱","ContactFormInfo":"留言","ContactFormSubmit":"送出","FooterAboutUsTitle":"關於我們","FooterAboutUsPhone":"電話: (02) 0000-0000","FooterAboutUsFax":"傳真: OOOOOO","FooterAboutUsEmail":"信箱: LeafyYeh@gmail.com","FooterProductTitle":"服務項目","FooterProductAutomation":"自動化設備","FooterProductHydropower":"水力發電設備","FooterProductVibrationTransport":"震動傳輸設備"}')},"9c0c":function(t,e,o){},cd8c:function(t,e,o){},ceeb:function(t,e,o){},e088:function(t){t.exports=JSON.parse('{"Home":"Home","Automation":"Automation","Hydropower":"Hydropower","VibrationTransport":"Vibration Transport","ContactUs":"ContactUs","IndexBanner":"ATSCEN","ProductBanner":"PRODUCT","ContactBanner":"CONTACT","AboutTitle":"About US","AboutDesc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a ipsum molestie, tempor nisl porta, dictum massa. Morbi efficitur nunc ut tellus finibus, sed ullamcorper mi interdum. Fusce faucibus ex libero, non auctor ante tincidunt sed. Maecenas sollicitudin interdum turpis. Pellentesque venenatis dignissim aliquam. Suspendisse sit amet velit a tortor.","ProductTitle":"Product List","ProductMore":"more","SidebarItem-1":"Automation","SidebarItem-2":"Hydropower","SidebarItem-3":"VibrationTransport","ContactTitle":"Contact Us","ContactFormName":"Name","ContactFormNameHolder":"Enter Name","ContactFormNameRequiredMsg":"The Name field is required","ContactFormPhone":"Phone","ContactFormPhoneHolder":"Enter Phone","ContactFormEmail":"Email","ContactFormEmailHolder":"mail_account@gmail.com","ContactFormEmailRequiredMsg":"The email field is required","ContactFormSalutation":"Salutation","ContactFormSalutationMale":"Male","ContactFormSalutationFemale":"Female","ContactFormCompanyName":"Company Name","ContactFormCompanyNameHolder":"Enter Company Name","ContactFormInfo":"Info","ContactFormSubmit":"Submit","FooterAboutUsTitle":"About Us","FooterAboutUsPhone":"Tel: (02) 0000-0000","FooterAboutUsFax":"Fax: OOOOOO","FooterAboutUsEmail":"Email: LeafyYeh@gmail.com","FooterProductTitle":"Service","FooterProductAutomation":"Automation","FooterProductHydropower":"Hydropower","FooterProductVibrationTransport":"VibrationTransport"}')}});
//# sourceMappingURL=app.9fc8e680.js.map