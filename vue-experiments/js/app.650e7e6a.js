(function(e){function r(r){for(var n,o,i=r[0],u=r[1],s=r[2],c=0,f=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);d&&d(r);while(f.length)f.shift()();return l.push.apply(l,s||[]),t()}function t(){for(var e,r=0;r<l.length;r++){for(var t=l[r],n=!0,o=1;o<t.length;o++){var i=t[o];0!==a[i]&&(n=!1)}n&&(l.splice(r--,1),e=u(u.s=t[0]))}return e}var n={},o={app:0},a={app:0},l=[];function i(e){return u.p+"js/"+({lazyLoadedView:"lazyLoadedView"}[e]||e)+"."+{lazyLoadedView:"d58be063"}[e]+".js"}function u(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var r=[],t={lazyLoadedView:1};o[e]?r.push(o[e]):0!==o[e]&&t[e]&&r.push(o[e]=new Promise((function(r,t){for(var n="css/"+({lazyLoadedView:"lazyLoadedView"}[e]||e)+"."+{lazyLoadedView:"ef86617d"}[e]+".css",a=u.p+n,l=document.getElementsByTagName("link"),i=0;i<l.length;i++){var s=l[i],c=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===n||c===a))return r()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],c=s.getAttribute("data-href");if(c===n||c===a)return r()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=r,d.onerror=function(r){var n=r&&r.target&&r.target.src||a,l=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=n,delete o[e],d.parentNode.removeChild(d),t(l)},d.href=a;var v=document.getElementsByTagName("head")[0];v.appendChild(d)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)r.push(n[2]);else{var l=new Promise((function(r,t){n=a[e]=[r,t]}));r.push(n[2]=l);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(e);var f=new Error;s=function(r){c.onerror=c.onload=null,clearTimeout(d);var t=a[e];if(0!==t){if(t){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,t[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(r)},u.m=e,u.c=n,u.d=function(e,r,t){u.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,r){if(1&r&&(e=u(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)u.d(t,n,function(r){return e[r]}.bind(null,n));return t},u.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(r,"a",r),r},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},u.p="/vue-experiments/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=r,s=s.slice();for(var f=0;f<s.length;f++)r(s[f]);var d=c;l.push([0,"chunk-vendors"]),t()})({0:function(e,r,t){e.exports=t("56d7")},"150e":function(e,r,t){"use strict";var n=t("c301"),o=t.n(n);o.a},"2af9":function(e,r,t){"use strict";var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"hello"},[t("h1",[e._v(e._s(e.msg))]),t("p",[t("router-link",{attrs:{to:{name:"lazyLoadedView"}}},[e._v("\n      This route is lazy-loaded\n    ")])],1),e._m(0),t("h3",[e._v("Installed CLI Plugins")]),e._m(1),t("h3",[e._v("Essential Links")]),e._m(2),t("h3",[e._v("Ecosystem")]),e._m(3)])},o=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,\n    "),t("br"),e._v("check out the\n    "),t("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener noreferrer"}},[e._v("babel")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener noreferrer"}},[e._v("pwa")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener noreferrer"}},[e._v("eslint")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest",target:"_blank",rel:"noopener noreferrer"}},[e._v("unit-jest")])])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ul",[t("li",[t("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Core Docs")])]),t("li",[t("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Forum")])]),t("li",[t("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Community Chat")])]),t("li",[t("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter")])]),t("li",[t("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("News")])])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ul",[t("li",[t("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-router")])]),t("li",[t("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuex")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-devtools")])]),t("li",[t("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-loader")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("awesome-vue")])])])}],a={name:"HelloWorld",props:{msg:{type:String,default:"Message here"}}},l=a,i=(t("150e"),t("2877")),u=Object(i["a"])(l,n,o,!1,null,"526d3f0e",null),s=u.exports,c=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v("Erro ao carregar tela 😞")])},f=[],d={name:"LazyLoadingErrorIndicator"},v=d,p=Object(i["a"])(v,c,f,!1,null,null,null),h=p.exports,g=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("span",[e._v("⏳ Aguarde...")])},m=[],b={name:"LazyLoadingIndicator"},_=b,y=Object(i["a"])(_,g,m,!1,null,null,null),w=y.exports;function j(e){var r=function(){return{component:e,loading:w,error:h}};return Promise.resolve({functional:!0,render:function(e,t){var n=t.data,o=t.children;return e(r,n,o)}})}t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return j}))},"56d7":function(e,r,t){"use strict";t.r(r);var n={};t.r(n),t.d(n,"routes",(function(){return h}));t("cadf"),t("551c"),t("f751"),t("097d");var o=t("2b0e"),a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[e._v("\n      Home\n    ")]),e._v("\n    |\n    "),t("router-link",{attrs:{to:{name:"lazyLoadedView"}}},[e._v("\n      Lazy Loaded\n    ")])],1),t("router-view")],1)},l=[],i=(t("669b"),t("2877")),u={},s=Object(i["a"])(u,a,l,!1,null,null,null),c=s.exports,f=t("75fc"),d=t("8c4f"),v=[{path:"/",name:"home",component:function(){return Promise.resolve().then(t.bind(null,"cb6d"))}}],p=(t("cb6d"),t("2af9")),h=[{path:"/lazy-loaded-view",alias:"/😴",name:"lazyLoadedView",component:function(){return Object(p["b"])(t.e("lazyLoadedView").then(t.bind(null,"3b97")))}}];o["a"].use(d["a"]);var g=new d["a"]({mode:"hash",base:"/vue-experiments/",routes:[].concat(Object(f["a"])(v),Object(f["a"])(n.routes))}),m=t("2f62");o["a"].use(m["a"]);var b=new m["a"].Store({state:{},mutations:{},actions:{}}),_=t("9483");Object(_["a"])("".concat("/vue-experiments/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({router:g,store:b,render:function(e){return e(c)}}).$mount("#app")},"669b":function(e,r,t){"use strict";var n=t("fd24"),o=t.n(n);o.a},c301:function(e,r,t){},cb6d:function(e,r,t){"use strict";t.r(r);var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"home"},[t("img",{attrs:{alt:"Vue logo",src:e.logoPng}}),t("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},o=[],a=t("cf05"),l=t.n(a),i=t("2af9"),u={name:"Home",components:{HelloWorld:i["a"]},data:function(){return{logoPng:l.a}}},s=u,c=t("2877"),f=Object(c["a"])(s,n,o,!1,null,null,null);r["default"]=f.exports},cf05:function(e,r,t){e.exports=t.p+"img/logo.82b9c7a5.png"},fd24:function(e,r,t){}});
//# sourceMappingURL=app.650e7e6a.js.map