(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(t,e,r){t.exports=r("2f39")},"0047":function(t,e,r){},1:function(t,e){},"2f39":function(t,e,r){"use strict";r.r(e);var o={};r.r(o),r.d(o,"someGetter",(function(){return O}));var n={};r.r(n),r.d(n,"thing",(function(){return $}));var a={};r.r(a),r.d(a,"someAction",(function(){return I}));var i=r("967e"),s=r.n(i),u=(r("a481"),r("96cf"),r("fa84")),c=r.n(u),l=(r("5c7d"),r("573e"),r("7d6e"),r("e54f"),r("985d"),r("0047"),r("a026")),p=r("b178");l["a"].use(p["a"],{config:{}});var h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("edge",{attrs:{id:"root",properties:{path:"string"===typeof t.getsmart(t.graph,"root.rootEdge",void 0)?t.graph.root.rootEdge:"root",root:!0}}})},d=[],f={name:"root",computed:{graph:{get:function(){return this.$store.state.graph.thing}}},components:{edge:function(){return r.e("10162ce8").then(r.bind(null,"c899"))}}},g=f,v=r("2877"),y=Object(v["a"])(g,h,d,!1,null,null,null),m=y.exports,b=r("2f62"),w=r("0e44"),x=r("0f32"),A=r.n(x),S="#42b983",T={thing:{root:{meta:{graph:{'[\\"root\\"]':{ui:{show:!0}},'[\\"root\\"][\\"meta\\"][\\"script\\"]':{settings:{recursive:!0}},'[\\"root\\"][\\"meta\\"][\\"events\\"]':{settings:{recursive:!0}}},script:{seenValues:[],seenPaths:[]}},rootEdge:"root",test1:void 0,test2:null,test3:!0,test4:1,test5:"some string","Change My Type!":{test:"hmm"},classTests:{classes:{special:!0}},array:[1,"string",{object:!0},!0,[1,2,3]],pointer:{test:"cool"},css:{"@global":{"[contenteditable]":{"&:focus":{outline:"0px solid transparent"}},".value":{},".special":{padding:"5px",borderRadius:"4px",backgroundColor:S,color:"white"},".add-edge":{transition:"all 500mss ease",marginLeft:"10px","&:hover":{cursor:"pointer"},"&:hover, &:focus":{}},".value-container":{width:"auto",display:"block"},".basic-value":{marginLeft:"10px"},".edge-container":{marginLeft:"10px",width:"auto"},".edge-info-container":{display:"inline-block","&:hover ":{"&.edge-options":{padding:"2px 2px !important",width:"initial",opacity:1}},"&.pill-form":{color:"white",backgroundColor:S,borderRadius:"8px",padding:"0px 2px",transition:"all 350ms ease",marginTop:"6px",".edge-info":{padding:"2px 2px"}}},".edge-options":{padding:"0px !important",width:"0px",display:"none",transition:"all 350ms, ease",opacity:0,"&:hover ":{cursor:"pointer"}},".edge-info":{display:"inline-block"}}},FAQ:{"Why use a separate Edge and Value component?":"For example, let's say you have an object structure\n\n\t\t\t\tobj = { foo: { bar: 'foo' }, bar: { foo: 'bar' } }\n\n\t\t\t\tand you want to show the value of obj.foo, you would create a value component with path \"obj.foo\", and you would get rendered the property bar\n\n\t\t\t\tBut, what if you want to show only the property foo of obj, including the title foo, without rendering all properties of obj?\n\n\t\t\t\tThen, you make an edge component, with a path property of \"obj.foo\", and you'll get foo on it's own which can be expanded to show all of foo's properties such as bar in this case\n\t\t\t\t"},"TO-DO":{"Drag and drop re-ordering of properties and values":{"How?":"This would work by storing the render order of properties assosciated with a path in the meta graph for that path.",priority:1},"Collation of all paths that point to an object":{"Why?":{"By doing this you can assign different properties to the same Object based on what path it is being access via, letting you render it differently in different locations, enabling you do edit it and render it at the same time":"\n\t\t\t\t\t\t\tEg. if you have a navigation menu, the renderable path may be root.navMenu, but you also make root.editor.navMenu = root.navMenu, \n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tbut under root.graph you make root.graph['root.navMenu'].renderMode = 'rendered' \n\t\t\t\t\t\t\tand root.graph['root.editor.navMenu'].renderMode = 'editor' \n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tor simply have everything under root.editor inherit the 'editor' render mode via root.graph['root.editor.*'].renderMode = 'editor'"},"How?":"By using Object based keying via a Map or Array you store all paths that point to a certain Object",Notes:["Requires you to dereference Objects if the path is reassigned a value, this mechanism can be patched in via the smarts.setsmart function"],priority:1},"WebRTC based databasing and peer-to-peer communication":{"Why?":{a:"For unique user features typical of any platform, login, logout, synced data, etc..",b:"Decentralised data storage using encryption protocols and social network access grants"},priority:3},"Asynchronous memory/storage access":{"Why?":{a:"Because all JavaScript data is stored in memory, to avoid huge memory usage, graph paths should be fetched from some filesystem cold storage api such as window.localStorage or IndexedDB or etc.."},"How?":"window.localStorage or IndexedDB or etc..",priority:3},"Filesystem access":{"Why?":{a:"As a service you should be able to interact with your computers local filesystem through the Dingern platform, representing a filesystem with JSON is trivial and would offer greater flexibility and power when needing to edit source code and other locally dependant things"},"How?":"Using native API's through something like Electron or by having a local UPnP relay on the users machine to enable communication between browser and filesystem",priority:3},"Priority Legend":{1:"Needs doing ASAP for fundamental feature suite for demos",2:"Would be a good polishing feature for demos",3:"Needs doing for mainstream release but is not urgent for demo purposes"}}}}};T.thing.root.pointerTest=T.thing.root.pointer;var j=T;function O(){}var k=r("8993"),P=r.n(k),V=r("3c2e")(),$=function(t,e){var r;e&&e.path&&void 0!==P()(e.val)&&void 0!==P()(e.value)&&(void 0!==P()(e.val)?r=e.val:void 0!==P()(e.value)&&(r=e.value),V.setsmart(t,e.path,r))};function I(){}var C={namespaced:!0,getters:o,mutations:n,actions:a,state:j},M=r("3c2e")({}),E=r("3c2e")({vue:{store:!0}}).methods;l["a"].use(b["a"]),window.SS=E,window.stateSmarts=E,window.resetVuex=window.clearCache=window.clearStorage=function(){localStorage.removeItem("vuex"),console.log("done");var t=localStorage.getItem("vuexSource"),e=M.parse(t);E.setsmart(window,"$store.state.graph.thing",e.thing),localStorage.setItem("vuex",t)};var B=function(){var t=M.stringify(M.getsmart(C,"state",{}));localStorage.setItem("vuexSource",t);var e=new b["a"].Store({modules:{graph:C},strict:!1,plugins:[Object(w["a"])({paths:["graph"],merge:function(t,e){return M.schema(e,t)},setState:A()((function(t,e,r){var o=M.stringify(e);r.setItem(t,o)}),500),getState:function(t,e){var r={};try{var o=e.getItem(t);if(null===o)return{};r=M.parse(o)}catch(n){console.error("error parsing persisted state: ",n),r=JSON.parse(e.getItem(t)||"{}")}return r}})]});return window.$store=e,window.graph=M.getsmart(window.$store,"state.graph.thing",void 0),window.nrgraph={},e},N=r("8c4f"),W=(r("3c2e")(),function(t){t.store,t.ssrContex;var e=[];return e});l["a"].use(N["a"]);var D=function(t){var e=t.store,r=t.ssrContext,o=new N["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:W({store:e,ssrContext:r}),mode:"history",base:"/"});return o};r("3c2e")();globalThis&&(globalThis.source=m),globalThis&&(globalThis.createStore=B),globalThis&&(globalThis.createRouter=D);var J=function(){var t="function"===typeof B?B({Vue:l["a"]}):B;globalThis&&(globalThis.store=t);var e="function"===typeof D?D({Vue:l["a"],store:t}):D;globalThis&&(globalThis.router=e),t.$router=e;var r=globalThis.source;return r.el="#root",r.router=e,r.store=t,globalThis&&(globalThis.testy="testy"),{app:r,store:t,router:e}},R=r("bc3a"),F=r.n(R);l["a"].prototype.$axios=F.a;var H=r("f09f"),L=r.n(H),U=r("53bd");window.j=U;var _=function(t){t.app,t.router;var e=t.Vue;e.mixin({data:function(){return{}}})};function q(t,e){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];r=void 0!==r&&r;var o=[],n=[];function a(t,e){if(-1==o.indexOf(t)&&-1==n.indexOf(e)){if(o.push(t),n.push(e),t instanceof Array){for(var i=0;i<e.length;i++)t[i]?t[i]=a(t[i],e[i]):t[i]=e[i];r&&e.length<t.length&&t.splice(e.length,t.length-e.length)}else{if(!(t instanceof Object))return e;for(var s in e)t.hasOwnProperty(s)?t[s]=a(t[s],e[s]):t[s]=e[s];if(r)for(var s in t)e.hasOwnProperty(s)||delete t[s]}return t}}a(t,e)}window&&(window.E=q);var Q=function(t){t.app,t.router;var e=t.Vue;e.mixin({data:function(){return{}}})},G=(r("ac6a"),r("ac4d"),r("8a81"),r("5df3"),r("1c4c"),r("6b54"),r("06db"),r("4db1")),z=r.n(G);r("7f7f");function K(t,e){var r;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=X(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var o=0,n=function(){};return{s:n,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){s=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw a}}}}function X(t,e){if(t){if("string"===typeof t)return Y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Y(t,e):void 0}}function Y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}var Z=function(t){t.app,t.router;var e=t.Vue;e.mixin({data:function(){return{}},computed:{pathAsArray:{get:function(){var t=this.pathToArray(this.path);return t}},pathAsString:{get:function(){var t=this.pathToString(this.path);return t}},path:{get:function(){return this.thing.path}},localPath:{get:function(){return this.pathAsArray[this.pathAsArray.length-1]}},parentPathAsArray:{get:function(){return this.pathAsArray.slice(0,this.pathAsArray.length-1)}},parentPath:{get:function(){var t=this,e="";return this.parentPathAsArray.forEach((function(r,o){e+=t.epp(r)})),e}},graph:{get:function(){return this.$store.state.graph.thing}},value:{get:function(){var t=this.getsmart(this.graph,this.pathAsString,void 0);return t}},valueType:{get:function(){var t;try{t=this.value.constructor.name}catch(e){"undefined"===typeof this.value&&(t="undefined"),null===this.value&&(t="null")}return t}},prototypeProperties:{get:function(){var t=[];if("function"==typeof this.value){var e,r={value:this.value},o=K(Object.getOwnPropertyNames(r.prototype));try{for(o.s();!(e=o.n()).done;){var n=e.value;t.push(n)}}catch(u){o.e(u)}finally{o.f()}}else{var a,i=K(Object.getOwnPropertyNames(Object.getPrototypeOf(this.value)));try{for(i.s();!(a=i.n()).done;){var s=a.value;t.push(s)}}catch(u){i.e(u)}finally{i.f()}}return t}},isBasic:{get:function(){return!("object"==P()(this.value)||"array"==typeof this.value)||null===this.value}},settingsPathAsArray:{get:function(){var t=[].concat(z()(this.ppp("root.meta.graph")),[this.pathAsString,"settings"]);return t}},settings:{get:function(){var t=this.getsmart(this.graph,this.settingsPathAsArray,void 0);return t}}}})},tt=function(t){t.app},et=r("fdc7"),rt=r("0c14"),ot=r("6929"),nt=r.n(ot);et["c"].setup(Object(rt["a"])());var at=function(t){t.app,t.router;var e=t.Vue;window.jss={jss:et["c"],preset:rt["a"],color:nt.a},e.mixin({data:function(){return{jss:et["c"]}}}),e.prototype.$jss=et["c"]};window.SJ=r("f653");var it=function(t){t.app,t.router;var e=t.Vue;e.mixin({data:function(){return{}}})},st=r("3c2e"),ut=r.n(st),ct=function(t){t.app,t.router;var e=t.Vue;window.smarts=ut()({vue:{reactiveSetter:!0}}).methods,e.mixin(ut()({vue:{reactiveSetter:!0}})),e.prototype.$s=ut()({vue:{reactiveSetter:!0}}).methods,e.prototype.$native={window:window,console:console},e.prototype.$native.setTimeout=function(t,e){return setTimeout(t,e)},e.prototype.$native.clearTimeout=function(t){return clearTimeout(t)},window.vue=e},lt=r("c46f");window&&(window._=lt);var pt=function(t){t.app,t.router;var e=t.Vue;e.mixin({data:function(){return{}}})};globalThis.Vue=l["a"];var ht=J(),dt=ht.app,ft=ht.store,gt=ht.router;function vt(){return yt.apply(this,arguments)}function yt(){return yt=c()(s.a.mark((function t(){var e,r,o,n,a;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=!0,r=function(t){e=!1,globalThis.location.href=t},o=globalThis.location.href.replace(globalThis.location.origin,""),n=[void 0,L.a,_,Q,Z,tt,at,it,ct,pt],a=0;case 5:if(!(!0===e&&a<n.length)){t.next=23;break}if("function"===typeof n[a]){t.next=8;break}return t.abrupt("continue",20);case 8:return t.prev=8,t.next=11,n[a]({app:dt,router:gt,store:ft,Vue:l["a"],ssrContext:null,redirect:r,urlPath:o});case 11:t.next=20;break;case 13:if(t.prev=13,t.t0=t["catch"](8),!t.t0||!t.t0.url){t.next=18;break}return globalThis.location.href=t.t0.url,t.abrupt("return");case 18:return console.error("[Quasar] boot error:",t.t0),t.abrupt("return");case 20:a++,t.next=5;break;case 23:if(!1!==e){t.next=25;break}return t.abrupt("return");case 25:new l["a"](dt);case 26:case"end":return t.stop()}}),t,null,[[8,13]])}))),yt.apply(this,arguments)}vt()},f09f:function(t,e){}},[[0,"runtime","vendor"]]]);