(function(e){function t(t){for(var n,o,s=t[0],u=t[1],i=t[2],c=0,d=[];c<s.length;c++)o=s[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);f&&f(t);while(d.length)d.shift()();return l.push.apply(l,i||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],n=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(n=!1)}n&&(l.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={app:0},a={app:0},l=[];function s(e){return u.p+"js/"+({lazyLoadedView:"lazyLoadedView",scopedSlots:"scopedSlots"}[e]||e)+"."+{lazyLoadedView:"cea70b01",scopedSlots:"367c56f0"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={lazyLoadedView:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({lazyLoadedView:"lazyLoadedView",scopedSlots:"scopedSlots"}[e]||e)+"."+{lazyLoadedView:"ef86617d",scopedSlots:"31d6cfe0"}[e]+".css",a=u.p+n,l=document.getElementsByTagName("link"),s=0;s<l.length;s++){var i=l[s],c=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(c===n||c===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){i=d[s],c=i.getAttribute("data-href");if(c===n||c===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,l=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=n,delete o[e],f.parentNode.removeChild(f),r(l)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var l=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=l);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=s(e);var d=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,r[1](d)}a[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue-experiments/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=c;l.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"150e":function(e,t,r){"use strict";var n=r("c301"),o=r.n(n);o.a},"2af9":function(e,t,r){"use strict";var n=r("bc3a"),o=r.n(n),a={name:"DataProvider",props:{url:{type:String,required:!0}},data:function(){return{data:null,loaded:!1}},created:function(){var e=this;o.a.get(this.url).then((function(t){var r=t.data;e.data=r,e.loaded=!0}))},render:function(){var e=this.$scopedSlots.default({loading:!this.loaded,data:this.data});return Array.isArray(e)?e[0]:e}},l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),r("p",[r("router-link",{attrs:{to:{name:"lazyLoadedView"}}},[e._v("\n      This route is lazy-loaded\n    ")])],1),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,\n    "),r("br"),e._v("check out the\n    "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener noreferrer"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener noreferrer"}},[e._v("pwa")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener noreferrer"}},[e._v("eslint")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest",target:"_blank",rel:"noopener noreferrer"}},[e._v("unit-jest")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("awesome-vue")])])])}],u={name:"HelloWorld",props:{msg:{type:String,default:"Message here"}}},i=u,c=(r("150e"),r("2877")),d=Object(c["a"])(i,l,s,!1,null,"526d3f0e",null),f=d.exports,p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Erro ao carregar tela 😞")])},v=[],h={name:"LazyLoadingErrorIndicator"},g=h,m=Object(c["a"])(g,p,v,!1,null,null,null),b=m.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[e._v("⏳ Aguarde...")])},y=[],w={name:"LazyLoadingIndicator"},j=w,k=Object(c["a"])(j,_,y,!1,null,null,null),S=k.exports;function L(e){var t=function(){return{component:e,loading:S,error:b}};return Promise.resolve({functional:!0,render:function(e,r){var n=r.data,o=r.children;return e(t,n,o)}})}r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return L}))},"56d7":function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"routes",(function(){return g}));var o={};r.r(o),r.d(o,"routes",(function(){return m}));r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("\n      Home\n    ")]),e._v("\n    |\n    "),r("router-link",{attrs:{to:{name:"lazyLoadedView"}}},[e._v("\n      Lazy Loaded\n    ")]),e._v("\n    |\n    "),r("router-link",{attrs:{to:{name:"scopedSlots"}}},[e._v("\n      Scoped Slots\n    ")])],1),r("router-view")],1)},s=[],u=(r("669b"),r("2877")),i={},c=Object(u["a"])(i,l,s,!1,null,null,null),d=c.exports,f=r("75fc"),p=r("8c4f"),v=[{path:"/",name:"home",component:function(){return Promise.resolve().then(r.bind(null,"cb6d"))}}],h=(r("cb6d"),r("2af9")),g=[{path:"/lazy-loaded-view",alias:"/😴",name:"lazyLoadedView",component:function(){return Object(h["c"])(r.e("lazyLoadedView").then(r.bind(null,"3b97")))}}],m=[{path:"/scoped-slots",name:"scopedSlots",component:function(){return r.e("scopedSlots").then(r.bind(null,"4a1a"))}}];a["a"].use(p["a"]);var b=new p["a"]({mode:"hash",base:"/vue-experiments/",routes:[].concat(Object(f["a"])(v),Object(f["a"])(n.routes),Object(f["a"])(o.routes))}),_=r("2f62");a["a"].use(_["a"]);var y=new _["a"].Store({state:{},mutations:{},actions:{}}),w=r("9483");Object(w["a"])("".concat("/vue-experiments/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].config.productionTip=!1,new a["a"]({router:b,store:y,render:function(e){return e(d)}}).$mount("#app")},"669b":function(e,t,r){"use strict";var n=r("fd24"),o=r.n(n);o.a},c301:function(e,t,r){},cb6d:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:e.logoPng}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},o=[],a=r("cf05"),l=r.n(a),s=r("2af9"),u={name:"Home",components:{HelloWorld:s["b"]},data:function(){return{logoPng:l.a}}},i=u,c=r("2877"),d=Object(c["a"])(i,n,o,!1,null,null,null);t["default"]=d.exports},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},fd24:function(e,t,r){}});
//# sourceMappingURL=app.267be356.js.map