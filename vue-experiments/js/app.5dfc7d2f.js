(function(e){function t(t){for(var r,o,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({lazyLoadedView:"lazyLoadedView",scopedSlots:"scopedSlots",stateManagement:"stateManagement"}[e]||e)+"."+{lazyLoadedView:"8d741669",scopedSlots:"acc6eb97",stateManagement:"0de06154"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={lazyLoadedView:1,stateManagement:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({lazyLoadedView:"lazyLoadedView",scopedSlots:"scopedSlots",stateManagement:"stateManagement"}[e]||e)+"."+{lazyLoadedView:"c51e3edd",scopedSlots:"31d6cfe0",stateManagement:"d331ed2c"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],p.parentNode.removeChild(p),n(i)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-experiments/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"02c1":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"pt-BR":{"message":{"error":{"cannotLoadRoute":"Erro ao carregar tela 😞"}}}}'),delete e.options._Ctor}},"03bd":function(e){e.exports=JSON.parse('{"app":{"name":"🔬 Vue Experiments"}}')},"1d95":function(e,t,n){"use strict";var r=n("95c3"),o=n.n(r);t["default"]=o.a},"2ac6":function(e,t,n){"use strict";var r=n("a88a"),o=n.n(r);t["default"]=o.a},"2af9":function(e,t,n){"use strict";var r=n("bc3a"),o=n.n(r),a={name:"DataProvider",props:{url:{type:String,required:!0}},data:function(){return{data:null,loaded:!1}},created:function(){var e=this;o.a.get(this.url).then((function(t){var n=t.data;e.data=n,e.loaded=!0}))},render:function(){var e=this.$scopedSlots.default({loading:!this.loaded,data:this.data});return Array.isArray(e)?e[0]:e}},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(e._s(e.$t("message.error.cannotLoadRoute")))])},s=[],c={name:"LazyLoadingErrorIndicator"},u=c,l=n("2877"),d=n("546b"),p=Object(l["a"])(u,i,s,!1,null,null,null);"function"===typeof d["default"]&&Object(d["default"])(p);var f=p.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v(e._s(e.$t("message.info.loading")))])},h=[],g={name:"LazyLoadingIndicator"},v=g,b=n("2ac6"),_=Object(l["a"])(v,m,h,!1,null,null,null);"function"===typeof b["default"]&&Object(b["default"])(_);var S=_.exports;function y(e){var t=function(){return{component:e,loading:S,error:f}};return Promise.resolve({functional:!0,render:function(e,n){var r=n.data,o=n.children;return e(t,r,o)}})}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return y}))},3221:function(e,t,n){},"49f8":function(e,t,n){var r={"./en.json":"edd4","./pt-BR.json":"03bd"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="49f8"},"546b":function(e,t,n){"use strict";var r=n("02c1"),o=n.n(r);t["default"]=o.a},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"routes",(function(){return v}));var o={};n.r(o),n.d(o,"routes",(function(){return b}));var a={};n.r(a),n.d(a,"routes",(function(){return _})),n.d(a,"store",(function(){return E}));n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},c=[],u=(n("669b"),n("2877")),l={},d=Object(u["a"])(l,s,c,!1,null,null,null),p=d.exports,f=n("75fc"),m=n("8c4f"),h=[{path:"/",name:"home",component:function(){return Promise.resolve().then(n.bind(null,"cb6d"))}}],g=(n("cb6d"),n("2af9")),v=[{path:"/lazy-loaded-view",alias:"/😴",name:"lazyLoadedView",component:function(){return Object(g["b"])(n.e("lazyLoadedView").then(n.bind(null,"3b97")))}}],b=[{path:"/scoped-slots",name:"scopedSlots",component:function(){return n.e("scopedSlots").then(n.bind(null,"4a1a"))}}],_=[{path:"/people-counter",alias:"/🔢",name:"peopleCounter",component:function(){return n.e("stateManagement").then(n.bind(null,"351c"))}},{path:"/social-feed/post/:postId",name:"postDetails",component:function(){return n.e("stateManagement").then(n.bind(null,"123f"))}},{path:"/social-feed",alias:"/👥",name:"socialFeed",component:function(){return n.e("stateManagement").then(n.bind(null,"4959"))}}],S=(n("96cf"),n("3b8d")),y=(n("7514"),n("bc3a")),O=n.n(y),w={namespaced:"true",state:{posts:null,isLoadingPosts:!1,isLoadingPostDetails:!1},getters:{GET_POST_BY_ID:function(e){return function(t){return e.posts.find((function(e){return e.id===t}))}}},mutations:{SET_IS_LOADING_POSTS:function(e,t){e.isLoadingPosts=t},SET_IS_LOADING_POST_DETAILS:function(e,t){e.isLoadingPostDetails=t},SET_POSTS:function(e,t){e.posts=t},SET_POST_DETAILS:function(e,t){e.posts=e.posts.map((function(e){return e.id!==t.postId?e:Object.assign({},e,{comments:t.postComments})}))}},actions:{GET_POSTS:function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,n("SET_IS_LOADING_POSTS",!0),e.next=4,O.a.get("https://jsonplaceholder.typicode.com/posts");case 4:r=e.sent,o=r.data,n("SET_POSTS",o),n("SET_IS_LOADING_POSTS",!1);case 8:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),GET_POST_DETAILS:function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(t,n){var r,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,r("SET_IS_LOADING_POST_DETAILS",!0),e.next=4,O.a.get("https://jsonplaceholder.typicode.com/posts/".concat(n,"/comments"));case 4:o=e.sent,a=o.data,r("SET_POST_DETAILS",{postId:n,postComments:a}),r("SET_IS_LOADING_POST_DETAILS",!1);case 8:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()}},E=w;i["a"].use(m["a"]);var x=new m["a"]({mode:"hash",base:"/vue-experiments/",routes:[].concat(Object(f["a"])(h),Object(f["a"])(r.routes),Object(f["a"])(o.routes),Object(f["a"])(a.routes))}),j=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),T=n("2f62");function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(n,!0).forEach((function(t){Object(j["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}i["a"].use(T["a"]);var C=new T["a"].Store({state:P({},a.store.state),getters:P({},a.store.getters),mutations:P({},a.store.mutations),actions:P({},a.store.actions)}),D=n("9483");Object(D["a"])("".concat("/vue-experiments/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("4917");var A=n("a925");function I(){var e=n("49f8"),t={};return e.keys().forEach((function(n){var r=n.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){var o=r[1];t[o]=e(n)}})),t}i["a"].use(A["a"]);var k=new A["a"]({locale:"pt-BR",fallbackLocale:"en",messages:I()});i["a"].config.productionTip=!1,new i["a"]({router:x,store:C,i18n:k,render:function(e){return e(p)}}).$mount("#app")},"669b":function(e,t,n){"use strict";var r=n("fd24"),o=n.n(r);o.a},"95c3":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"pt-BR":{"experiment":{"lazyLoadedView":{"name":"😴 Lazy loaded route","description":"Como utilizar a feature de split do bundle para postergar o carregamento de uma rota."},"scopedSlots":{"name":"🔬 Scoped slots","description":"Exemplo de componente DataProvider utilizando scoped slots."},"criticalCss":{"name":"💋 Critical CSS","description":"Usando o critter para colocar o CSS crítico como inline e o restante como um arquivo."},"stateManagement":{"name":"State management","description":"Gerenciamento de estado global com Vuex."}}}}'),delete e.options._Ctor}},"98c6":function(e,t,n){"use strict";var r=n("bb4b"),o=n.n(r);o.a},a88a:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"pt-BR":{"message":{"info":{"loading":"⏳ Aguarde..."}}}}'),delete e.options._Ctor}},bb4b:function(e,t,n){},cb6d:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"home"},[n("div",{staticClass:"top-bar"},[n("h1",[e._v(e._s(e.$t("app.name")))])]),n("div",{staticClass:"main-content"},e._l(e.experiments,(function(e){return n("ExperimentThumbnail",{key:e.title,attrs:{title:e.title,description:e.description,route:e.route}})})),1)])},o=[],a=n("cf05"),i=n.n(a),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"experiment-thumbnail"},[n("router-link",{staticClass:"experiment-link",attrs:{to:e.route}},[n("h2",[e._v(e._s(e.title))]),n("p",[e._v(e._s(e.description))])])],1)},c=[],u={name:"ExperimentThumbnail",props:{description:{type:String,required:!0},route:{type:Object,default:function(){return{name:"home"}}},title:{type:String,required:!0}}},l=u,d=(n("98c6"),n("2877")),p=Object(d["a"])(l,s,c,!1,null,"3e3e6376",null),f=p.exports,m={name:"Home",components:{ExperimentThumbnail:f},data:function(){return{logoPng:i.a,experiments:[{title:this.$t("experiment.lazyLoadedView.name"),description:this.$t("experiment.lazyLoadedView.description"),route:{name:"lazyLoadedView"}},{title:this.$t("experiment.scopedSlots.name"),description:this.$t("experiment.scopedSlots.description"),route:{name:"scopedSlots"}},{title:this.$t("experiment.criticalCss.name"),description:this.$t("experiment.criticalCss.description"),route:{name:"criticalCss"}},{title:this.$t("experiment.stateManagement.name"),description:this.$t("experiment.stateManagement.description"),route:{name:"socialFeed"}}]}}},h=m,g=(n("f052"),n("1d95")),v=Object(d["a"])(h,r,o,!1,null,"3402b660",null);"function"===typeof g["default"]&&Object(g["default"])(v);t["default"]=v.exports},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},edd4:function(e){e.exports=JSON.parse('{"app":{"name":"🔬 Vue Experiments"}}')},f052:function(e,t,n){"use strict";var r=n("3221"),o=n.n(r);o.a},fd24:function(e,t,n){}});
//# sourceMappingURL=app.5dfc7d2f.js.map