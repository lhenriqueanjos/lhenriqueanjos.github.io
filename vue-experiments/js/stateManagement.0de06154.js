(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["stateManagement"],{"0f7b":function(t,e,n){},"123f":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"post-details"},[n("div",{staticClass:"page-title"},[n("button",{on:{click:t.goBack}},[t._v("\n      ⬅️\n    ")]),n("h1",{staticClass:"post-title"},[t._v("\n      "+t._s(t.post.title)+"\n    ")])]),n("p",{staticClass:"post-body"},[t._v("\n    "+t._s(t.post.body)+"\n  ")]),t.isLoadingPostDetails?n("p",[t._v("\n    Carregando comentários...\n  ")]):n("div",[n("h2",[t._v("Comentários")]),t._l(t.post.comments,(function(t){return n("post-comment",{key:t.id,attrs:{comment:t}})}))],2)])},o=[],s=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),i=n("2f62"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[n("strong",[t._v("\n      "+t._s(t.comment.email)+"\n    ")]),t._v("\n\n    "+t._s(t.comment.body)+"\n  ")])])},a=[],u={name:"PostComment",props:{comment:{type:Object,required:!0}}},l=u,p=n("2877"),f=Object(p["a"])(l,c,a,!1,null,null,null),d=f.exports;function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(n,!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v={name:"PostDetails",components:{PostComment:d},computed:m({post:function(){return this.$store.getters.GET_POST_BY_ID(this.$route.params.postId)}},Object(i["b"])(["isLoadingPostDetails"])),methods:{goBack:function(){this.$router.push({name:"socialFeed"})}}},_=v,h=(n("375b"),Object(p["a"])(_,r,o,!1,null,"5b925036",null));e["default"]=h.exports},"351c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("h1",[t._v("Contador de Pessoas")]),n("simple-counter",{attrs:{"initial-value":t.previousCount}})],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("Contagem atual:")]),n("p",[t._v(t._s(t.value))]),n("button",{on:{click:function(e){return t.increment()}}},[t._v("\n    Incrementar\n  ")])])},i=[],c=(n("c5f6"),{name:"SimpleCounter",props:{initialValue:{type:Number,default:null}},data:function(){return{value:null}},mounted:function(){this.value=this.initialValue},methods:{increment:function(){this.value=this.value+1}}}),a=c,u=n("2877"),l=Object(u["a"])(a,s,i,!1,null,null,null),p=l.exports,f={name:"PeopleCounter",components:{SimpleCounter:p},data:function(){return{previousCount:13}}},d=f,b=Object(u["a"])(d,r,o,!1,null,null,null);e["default"]=b.exports},"375b":function(t,e,n){"use strict";var r=n("d61f"),o=n.n(r);o.a},4959:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"social-feed"},[n("div",{staticClass:"page-title"},[n("button",{on:{click:t.goBack}},[t._v("\n      ⬅️\n    ")]),n("h1",[t._v("\n      Publicações\n    ")]),n("button",{on:{click:t.updatePosts}},[t._v("\n      🔁\n    ")])]),t.isLoadingPosts?n("p",[t._v("\n    Aguarde...\n  ")]):t._l(t.posts,(function(e){return n("post-card",{key:e.id,attrs:{id:e.id,title:e.title,body:e.body},nativeOn:{click:function(n){return function(){return t.goToPostDetails(e)}()}}})}))],2)},o=[],s=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),i=n("2f62"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"post-card"},[n("h2",{staticClass:"post-title"},[t._v("\n    "+t._s(t.title)+"\n  ")]),n("p",{staticClass:"post-body"},[t._v("\n    "+t._s(t.body)+"\n  ")])])},a=[],u=(n("c5f6"),{name:"PostCard",props:{id:{type:Number,required:!0},title:{type:String,default:null},body:{type:String,default:null}}}),l=u,p=(n("d6f4"),n("2877")),f=Object(p["a"])(l,c,a,!1,null,"1daff903",null),d=f.exports;function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(n,!0).forEach((function(e){Object(s["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v={name:"SocialFeed",components:{PostCard:d},computed:m({},Object(i["b"])(["posts","isLoadingPosts"])),mounted:function(){null===this.posts&&this.updatePosts()},methods:{updatePosts:function(){this.$store.dispatch("GET_POSTS")},goBack:function(){this.$router.push({name:"home"})},goToPostDetails:function(t){this.$store.dispatch("GET_POST_DETAILS",t.id),this.$router.push({name:"postDetails",params:{postId:t.id}})}}},_=v,h=(n("49fb"),Object(p["a"])(_,r,o,!1,null,"1bd91e27",null));e["default"]=h.exports},"49fb":function(t,e,n){"use strict";var r=n("0f7b"),o=n.n(r);o.a},"5dbc":function(t,e,n){var r=n("d3f4"),o=n("8b97").set;t.exports=function(t,e,n){var s,i=e.constructor;return i!==n&&"function"==typeof i&&(s=i.prototype)!==n.prototype&&r(s)&&o&&o(t,s),t}},"8b97":function(t,e,n){var r=n("d3f4"),o=n("cb7c"),s=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return s(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:s}},aa77:function(t,e,n){var r=n("5ca1"),o=n("be13"),s=n("79e5"),i=n("fdef"),c="["+i+"]",a="​",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),p=function(t,e,n){var o={},c=s((function(){return!!i[t]()||a[t]()!=a})),u=o[t]=c?e(f):i[t];n&&(o[n]=u),r(r.P+r.F*c,"String",o)},f=p.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=p},c53c:function(t,e,n){},c5f6:function(t,e,n){"use strict";var r=n("7726"),o=n("69a8"),s=n("2d95"),i=n("5dbc"),c=n("6a99"),a=n("79e5"),u=n("9093").f,l=n("11e9").f,p=n("86cc").f,f=n("aa77").trim,d="Number",b=r[d],m=b,v=b.prototype,_=s(n("2aeb")(v))==d,h="trim"in String.prototype,O=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=h?e.trim():f(e,3);var n,r,o,s=e.charCodeAt(0);if(43===s||45===s){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var i,a=e.slice(2),u=0,l=a.length;u<l;u++)if(i=a.charCodeAt(u),i<48||i>o)return NaN;return parseInt(a,r)}}return+e};if(!b(" 0o1")||!b("0b1")||b("+0x1")){b=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof b&&(_?a((function(){v.valueOf.call(n)})):s(n)!=d)?i(new m(O(e)),n,b):O(e)};for(var y,g=n("9e1e")?u(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),P=0;g.length>P;P++)o(m,y=g[P])&&!o(b,y)&&p(b,y,l(m,y));b.prototype=v,v.constructor=b,n("2aba")(r,d,b)}},d61f:function(t,e,n){},d6f4:function(t,e,n){"use strict";var r=n("c53c"),o=n.n(r);o.a},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=stateManagement.0de06154.js.map