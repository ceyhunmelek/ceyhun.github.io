_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(r.AmpStateContext))};var o,a=(o=n("q1tI"))&&o.__esModule?o:{default:o},r=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,o=e.hybrid,a=void 0!==o&&o,r=e.hasQuery,i=void 0!==r&&r;return n||a&&i}},"7W2i":function(e,t,n){var o=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var o,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var r=o?Object.getOwnPropertyDescriptor(e,a):null;r&&(r.get||r.set)?Object.defineProperty(n,a,r):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),r=(o=n("Xuae"))&&o.__esModule?o:{default:o},i=n("lwAK"),p=n("FYa8"),l=n("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,o={};return function(a){var r=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var p=a.key.slice(a.key.indexOf("$")+1);e.has(p)?r=!1:e.add(p)}switch(a.type){case"title":case"base":t.has(a.type)?r=!1:t.add(a.type);break;case"meta":for(var l=0,c=h.length;l<c;l++){var s=h[l];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?r=!1:n.add(s);else{var u=a.props[s],d=o[s]||new Set;"name"===s&&i||!d.has(u)?(d.add(u),o[s]=d):r=!1}}}return r}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),o=(0,a.useContext)(p.HeadManagerContext);return a.default.createElement(r.default,{reduceComponentsToState:d,headManager:o,inAmpMode:(0,l.isInAmpMode)(n)},t)}m.rewind=function(){};var f=m;t.default=f},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var o;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.HeadManagerContext=a},Ijbi:function(e,t,n){var o=n("WkPL");e.exports=function(e){if(Array.isArray(e))return o(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var o=Object.assign.bind(Object);e.exports=o,e.exports.default=e.exports},RIqP:function(e,t,n){var o=n("Ijbi"),a=n("EbDI"),r=n("ZhPi"),i=n("Bnag");e.exports=function(e){return o(e)||a(e)||r(e)||i()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var o=n("q1tI"),a=n.n(o),r=a.a.createElement;function i(){return r("div",{className:"md:flex-shrink-0 md:w-1/3 w-full"},r("img",{className:"rounded object-cover w-full h-auto md:h-full",src:"/images/pp.jpg",alt:"Ceyhun"}))}var p=a.a.createElement;function l(){return p("div",{className:"p-6 md:w-2/3 w-full"},p("div",{className:"uppercase tracking-wide text-xl text-blue-500 font-semibold mb-3"},"Ceyhun Melek"),p("div",{className:"flex align-middle gap-1 mb-2"},p("img",{src:"/icons/job.svg",width:18}),p("a",{href:"https://www.apisinnovation.com/",className:"block text-md leading-tight font-medium text-black hover:underline"},"Fullstack Developer @Apis Innovation")),p("div",{className:"flex align-middle gap-1 mb-2"},p("img",{src:"/icons/location.svg",width:18}),p("a",{className:"block text-md leading-tight font-medium text-black"},"Istanbul")),p("div",{className:"flex mt-2 gap-3"},p("a",{href:"mailto:ceyhunulasmelek@gmail.com"},p("img",{src:"/icons/mail.svg",width:"24",alt:"Instagram"})),p("a",{href:"https://github.com/ceyhunmelek"},p("img",{src:"/icons/github.svg",width:"24",alt:"Instagram"})),p("a",{href:"https://www.instagram.com/ceyhunmelek/"},p("img",{src:"/icons/instagram.svg",width:"24",alt:"Instagram"})),p("a",{href:"https://www.linkedin.com/in/ceyhunmelek/"},p("img",{src:"/icons/linkedin.svg",width:"24",alt:"Instagram"}))))}var c=n("g4pe"),s=n.n(c);function u(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var h={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},d=function(e){var t=[];e.titleTemplate&&(h.templateTitle=e.titleTemplate);var n="";e.title&&(n=e.title,h.templateTitle&&(n=h.templateTitle.replace(/%s/g,(function(){return n}))),t.push(a.a.createElement("title",{key:"title"},n)));var o=e.noindex||h.noindex||e.dangerouslySetAllPagesToNoIndex,r=e.nofollow||h.nofollow||e.dangerouslySetAllPagesToNoFollow;if(o||r?(e.dangerouslySetAllPagesToNoIndex&&(h.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(h.nofollow=!0),t.push(a.a.createElement("meta",{key:"robots",name:"robots",content:(o?"noindex":"index")+","+(r?"nofollow":"follow")})),t.push(a.a.createElement("meta",{key:"googlebot",name:"googlebot",content:(o?"noindex":"index")+","+(r?"nofollow":"follow")}))):(t.push(a.a.createElement("meta",{key:"robots",name:"robots",content:"index,follow"})),t.push(a.a.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"}))),e.description&&t.push(a.a.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&t.push(a.a.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){t.push(a.a.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&t.push(a.a.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&t.push(a.a.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&t.push(a.a.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&t.push(a.a.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),e.openGraph){if((e.openGraph.url||e.canonical)&&t.push(a.a.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var i=e.openGraph.type.toLowerCase();t.push(a.a.createElement("meta",{key:"og:type",property:"og:type",content:i})),"profile"===i&&e.openGraph.profile?(e.openGraph.profile.firstName&&t.push(a.a.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&t.push(a.a.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&t.push(a.a.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&t.push(a.a.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===i&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,n){t.push(a.a.createElement("meta",{key:"book:author:0"+n,property:"book:author",content:e}))})),e.openGraph.book.isbn&&t.push(a.a.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&t.push(a.a.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,n){t.push(a.a.createElement("meta",{key:"book:tag:0"+n,property:"book:tag",content:e}))}))):"article"===i&&e.openGraph.article?(e.openGraph.article.publishedTime&&t.push(a.a.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&t.push(a.a.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&t.push(a.a.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,n){t.push(a.a.createElement("meta",{key:"article:author:0"+n,property:"article:author",content:e}))})),e.openGraph.article.section&&t.push(a.a.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,n){t.push(a.a.createElement("meta",{key:"article:tag:0"+n,property:"article:tag",content:e}))}))):"video.movie"!==i&&"video.episode"!==i&&"video.tv_show"!==i&&"video.other"!==i||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,n){e.profile&&t.push(a.a.createElement("meta",{key:"video:actor:0"+n,property:"video:actor",content:e.profile})),e.role&&t.push(a.a.createElement("meta",{key:"video:actor:role:0"+n,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,n){t.push(a.a.createElement("meta",{key:"video:director:0"+n,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,n){t.push(a.a.createElement("meta",{key:"video:writer:0"+n,property:"video:writer",content:e}))})),e.openGraph.video.duration&&t.push(a.a.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&t.push(a.a.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,n){t.push(a.a.createElement("meta",{key:"video:tag:0"+n,property:"video:tag",content:e}))})),e.openGraph.video.series&&t.push(a.a.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}(e.openGraph.title||e.title)&&t.push(a.a.createElement("meta",{key:"og:title",property:"og:title",content:e.openGraph.title||n})),(e.openGraph.description||e.description)&&t.push(a.a.createElement("meta",{key:"og:description",property:"og:description",content:e.openGraph.description||e.description})),e.defaultOpenGraphImageWidth&&(h.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(h.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&e.openGraph.images.forEach((function(e,n){t.push(a.a.createElement("meta",{key:"og:image:0"+n,property:"og:image",content:e.url})),e.alt&&t.push(a.a.createElement("meta",{key:"og:image:alt0"+n,property:"og:image:alt",content:e.alt})),e.width?t.push(a.a.createElement("meta",{key:"og:image:width0"+n,property:"og:image:width",content:e.width.toString()})):h.defaultOpenGraphImageWidth&&t.push(a.a.createElement("meta",{key:"og:image:width0"+n,property:"og:image:width",content:h.defaultOpenGraphImageWidth.toString()})),e.height?t.push(a.a.createElement("meta",{key:"og:image:height"+n,property:"og:image:height",content:e.height.toString()})):h.defaultOpenGraphImageHeight&&t.push(a.a.createElement("meta",{key:"og:image:height"+n,property:"og:image:height",content:h.defaultOpenGraphImageHeight.toString()}))})),e.defaultOpenGraphVideoWidth&&(h.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(h.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&e.openGraph.videos.forEach((function(e,n){t.push(a.a.createElement("meta",{key:"og:video:0"+n,property:"og:video",content:e.url})),e.alt&&t.push(a.a.createElement("meta",{key:"og:video:alt0"+n,property:"og:video:alt",content:e.alt})),e.width?t.push(a.a.createElement("meta",{key:"og:video:width0"+n,property:"og:video:width",content:e.width.toString()})):h.defaultOpenGraphVideoWidth&&t.push(a.a.createElement("meta",{key:"og:video:width0"+n,property:"og:video:width",content:h.defaultOpenGraphVideoWidth.toString()})),e.height?t.push(a.a.createElement("meta",{key:"og:video:height"+n,property:"og:video:height",content:e.height.toString()})):h.defaultOpenGraphVideoHeight&&t.push(a.a.createElement("meta",{key:"og:video:height"+n,property:"og:video:height",content:h.defaultOpenGraphVideoHeight.toString()}))})),e.openGraph.locale&&t.push(a.a.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&t.push(a.a.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&t.push(a.a.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){t.push(a.a.createElement("meta",Object.assign({key:e.name?e.name:e.property},e)))})),t},m=(o.Component,function(e){function t(){return e.apply(this,arguments)||this}return u(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.noindex,o=void 0!==n&&n,r=e.nofollow,i=e.description,p=e.canonical,l=e.openGraph,c=e.facebook,u=e.twitter,h=e.additionalMetaTags,m=e.titleTemplate,f=e.mobileAlternate,g=e.languageAlternates;return a.a.createElement(s.a,null,d({title:t,noindex:o,nofollow:r,description:i,canonical:p,facebook:c,openGraph:l,additionalMetaTags:h,twitter:u,titleTemplate:m,mobileAlternate:f,languageAlternates:g}))},t}(o.Component)),f=a.a.createElement;function g(){return f(a.a.Fragment,null,f(m,{title:"Ceyhun Melek - Frontend Developer",description:"Too lazy to write something"}),f("div",{className:"flex flex-wrap h-screen content-center justify-center"},f("div",{className:"max-w-lg bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"},f("div",{className:"md:flex flex-col sm:flex-row"},f(i,null),f(l,null)))))}},SksO:function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}},Xuae:function(e,t,n){"use strict";var o=n("RIqP"),a=n("lwsE"),r=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),p=n("a1gu"),l=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=l(e);if(t){var a=l(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return p(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),u=function(e){i(n,e);var t=c(n);function n(e){var r;return a(this,n),(r=t.call(this,e))._hasHeadManager=void 0,r.emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(o(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,r}return r(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=u},ZhPi:function(e,t,n){var o=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}},a1gu:function(e,t,n){var o=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?a(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var o;t.__esModule=!0,t.AmpStateContext=void 0;var a=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.AmpStateContext=a},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1]]]);