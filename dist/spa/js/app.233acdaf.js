(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(t,e,r){t.exports=r("2f39")},"0047":function(t,e,r){},1:function(t,e){},"2f39":function(t,e,r){"use strict";r.r(e);var o={};r.r(o),r.d(o,"someGetter",(function(){return U}));var n={};r.r(n),r.d(n,"thing",(function(){return K}));var a={};r.r(a),r.d(a,"someAction",(function(){return X}));var i=r("967e"),s=r.n(i),u=(r("a481"),r("96cf"),r("fa84")),c=r.n(u),l=(r("5c7d"),r("573e"),r("7d6e"),r("e54f"),r("985d"),r("0047"),r("a026")),p=r("b178");l["a"].use(p["a"],{config:{loadingBar:{skipHijack:!0}}});var d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("edge",{attrs:{id:"root",properties:{path:"string"===typeof t.getsmart(t.graph,"root.rootEdge",void 0)?t.graph.root.rootEdge:"root",root:!0}}})},h=[],f={name:"root",computed:{graph:{get:function(){return this.$store.state.graph.thing}}},components:{edge:function(){return r.e("10162ce8").then(r.bind(null,"c899"))},value:function(){return r.e("77d13426").then(r.bind(null,"4157"))}}},g=f,y=r("2877"),v=Object(y["a"])(g,d,h,!1,null,null,null),m=v.exports,b=r("2f62"),w=r("0e44"),x=r("0f32"),j=r.n(x),O=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("c47a")),S=r.n(O);function A(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function T(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?A(Object(r),!0).forEach((function(e){S()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r("ea6d"),r("bcaa6");var k,P="66, 185, 131",E="255, 255, 255",C="230, 230, 230",D="5, 5, 5",R=[10,14],I=[10,14],V={margin:"".concat(R[0],"px ").concat(R[1],"px")},$={padding:"".concat(I[0],"px ").concat(I[1],"px")},B={marginLeft:"".concat(2*R[1],"px")},W={paddingLeft:"10px !important",width:"initial !important",opacity:"1 !important"},M={borderRadius:"10px",background:"rgba(".concat(C,", 1)")},J={borderTopLeftRadius:"10px",borderTopRightRadius:"10px",borderBottomLeftRadius:"0px",borderBottomRightRadius:"0px",background:"rgba(".concat(C,", 1)")},N={display:"inline-flex",justifyContent:"flex-start",alignItems:"center"},H={display:"inline-flex",justifyContent:"flex-end",alignItems:"center"},L={display:"inline-flex",flexGrow:1},F={display:"inline-flex",alignSelf:"flex-start"},G={thing:{root:{classes:{},meta:{graph:{'[\\"root\\"]':{ui:{show:!0},settings:{renderOrder:["entryPoint","app","pointer","pointerTest"]}},'[\\"root\\"][\\"boolean\\"]':{ui:{show:!0}},'[\\"root\\"][\\"obj\\"]':{ui:{show:!0}},'[\\"root\\"][\\"number\\"]':{ui:{show:!0}},'[\\"root\\"][\\"string\\"]':{ui:{show:!0}},'[\\"root\\"][\\"undefined\\"]':{ui:{show:!0}},'[\\"root\\"][\\"meta\\"][\\"script\\"]':{settings:{recursive:!0}},'[\\"root\\"][\\"meta\\"][\\"events\\"]':{settings:{recursive:!0}}},script:{seenValues:[],seenPaths:[]}},rootEdge:"root",undefined:void 0,null:null,boolean:!0,number:1,string:"some string",obj:{property1:{nested:{string:"hi1"}},property2:{nested:{string:"hi2"}},property3:{nested:{string:"hi3"}}},"Change My Type!":{test:"hmm"},classTests:{"something special":{classes:{special:!0}}},array:[1,"string",{object:!0},!0,[1,2,3]],pointer:{test:"cool"},css:{"@global":{body:{background:"rgba(".concat(E,", 1)")},".rootPadding":{padding:"".concat(R[0],"px")},"[contenteditable]":{"&:focus":{outline:"0px solid transparent"}},".value":{},".indent-defined":{},".special":{padding:"5px",borderRadius:"10px",backgroundColor:P,color:"white"},".add-edge-container":T(T(T({},N),V),{},{"& .add-edge":T(T(T(T(T({transition:"all 500ms ease"},$),N),M),F),{},{width:"200px",maxWidth:"100%","&:hover":{cursor:"pointer"},"&:hover, &:focus":{}})}),".value-container":{display:"inline-flex",flexDirection:"column","&.basic":{color:"rgba(".concat(D,", 1)"),backgroundColor:"rgba(".concat(C,", 1)"),borderRadius:"0px 0px 10px 10px",fontWeight:400}},".basic-value":T(T({},$),{},{transition:"all 300ms ease","&.editing":T(T({borderRadius:"10px",background:"rgba(".concat(E,", 1)")},V),$)}),".atom":V,".left-atom":{margin:"4px 0px 4px 8px"},".p-atom":$,".edge-container":T(T({display:"inline-flex",flexDirection:"column"},F),{},{"&.basic":{"&>.basic-contents":{"&>.edge-info-container":T(T({},M),{},{"&.valueShown":T({},J)})}},"&.complex":{"&>.basic-contents":{"&>.edge-info-container":T({},M)},"&.settings":{}},"&>.basic-contents":T(T(T({display:"flex",flexDirection:"column",borderRadius:"0px 0px 10px 10px"},F),V),{},{"&.basic":{padding:"0px !important"},"&>.edge-info-container":T(T(T(T({width:"200px",minWidth:"100%",maxWidth:"100%"},L),k),$),{},{"&:hover ":{"&.edge-settings":W},"&.complex":{flexGrow:0},"&>.edge-title-container":T(T({},L),{},{"& .edge-title":T(T({},L),{},{fontWeight:400})}),"&>.edge-settings":T(T({marginLeft:"auto",padding:"0px !important",width:"0px",display:"none",transition:"all 350ms, ease",opacity:0},H),{},{"&.show":W,"&:hover ":{cursor:"pointer"}})})}),"&>.complex-contents":T(T({display:"flex",flexDirection:"column",borderRadius:"0px 0px 10px 10px"},B),{},{"&.basic":{padding:"0px !important"}})}),".complex-value":{display:"inline-flex",flexDirection:"column"}}},FAQ:{"Why use a separate Edge and Value component?":"For example, let's say you have an object structure\n\n\t\t\t\tobj = { foo: { bar: 'foo' }, bar: { foo: 'bar' } }\n\n\t\t\t\tand you want to show the value of obj.foo, you would create a value component with path \"obj.foo\", and you would get rendered the property bar\n\n\t\t\t\tBut, what if you want to show only the property foo of obj, including the title foo, without rendering all properties of obj?\n\n\t\t\t\tThen, you make an edge component, with a path property of \"obj.foo\", and you'll get foo on it's own which can be expanded to show all of foo's properties such as bar in this case\n\t\t\t\t"},"TO-DO":{aka:["todo"],"Drag and drop re-ordering of properties and values":{"How?":"This would work by storing the render order of properties assosciated with a path in the meta graph for that path.",priority:1,"Sub-taks":{"Graph settings property for each path which stores the render order of properties":{notes:"After retreiving this render order, a bit of analysis has to be done, diffing so to speak, to determine if any properties stored in the render order list are not in the object anymore, and to remove the render order properties from the Object.keys list so properties aren't rendered twice"},priority:1,done:!0}},"Expression Evaluation for values":{Explanation:"When entering a property value, you might want to make the value equal to some other value,\n for example, you may want to type in 5+5, to get 10, or you might want to type in the path of another value, to duplicate that value as you can do in vanilla Javascript, say 'some.other.value', and if 'some.other.value' is an object, then this property now points to the value of 'some.other.value'",priority:1},"Show graph properties inside settings":{Explanation:"Because there are lots of properties stored in the path graph, it is annoying to always have to go to root.meta.graph['path'], it would be more accessible if all properties stored at the path graph for that path showed when you expanded a path's settings"},"Click away clearing of editing states":{Explanation:"Say when editing the value of a basic value, you get the white box indicating you're editing, when you click away, somewhere else, the state of that basic value should go from editing to not and so any editing styling should be removed",priority:2},"Render Modes":{"How?":"Depending on assosciated graph properties for a path, certain properties of the object, self hosted or on the graph, will not be ignored, such as the classes property, meaning you get an end user renderable view, not the data view",priority:1},"Collation of all paths that point to an object":{"Why?":{"By doing this you can assign different properties to the same Object based on what path it is being access via, letting you render it differently in different locations, enabling you do edit it and render it at the same time":"\n\t\t\t\t\t\t\tEg. if you have a navigation menu, the renderable path may be root.navMenu, but you also make root.editor.navMenu = root.navMenu, \n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tbut under root.graph you make root.graph['root.navMenu'].renderMode = 'rendered' \n\t\t\t\t\t\t\tand root.graph['root.editor.navMenu'].renderMode = 'editor' \n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tor simply have everything under root.editor inherit the 'editor' render mode via root.graph['root.editor.*'].renderMode = 'editor'"},"How?":"By using Object based keying via a Map or Array you store all paths that point to a certain Object",Notes:["Requires you to dereference Objects if the path is reassigned a value, this mechanism can be patched in via the smarts.setsmart function"],priority:1},"WebRTC based databasing and peer-to-peer communication":{"Why?":{a:"For unique user features typical of any platform, login, logout, synced data, etc..",b:"Decentralised data storage using encryption protocols and social network access grants"},priority:3},"Asynchronous memory/storage access":{"Why?":{a:"Because all JavaScript data is stored in memory, to avoid huge memory usage, graph paths should be fetched from some filesystem cold storage api such as window.localStorage or IndexedDB or etc.."},"How?":"window.localStorage or IndexedDB or etc..",priority:3},"Filesystem access":{"Why?":{a:"As a service you should be able to interact with your computers local filesystem through the Dingern platform, representing a filesystem with JSON is trivial and would offer greater flexibility and power when needing to edit source code and other locally dependant things"},"How?":"Using native API's through something like Electron or by having a local UPnP relay on the users machine to enable communication between browser and filesystem",priority:3},"Priority Legend":{1:"Needs doing ASAP for fundamental feature suite for demos",2:"Would be a good polishing feature for demos",3:"Needs doing for mainstream release but is not urgent for demo purposes"}},settingsSchema:{delete:{"are you sure?":{yes:{button:{emit:{name:"deleteConfirmation",value:!0}}},no:{button:{emit:{name:"deleteConfirmation",value:!0}}}}}}}}};G.thing.root.app={navbar:{left:{logo:"logo"},middle:{},right:{menuButton:"hamburger"}}},G.thing.root.entryPoint={thing:G.thing.root.app,mode:"rendered"},G.thing.root.pointerTest=G.thing.root.pointer;var q=G;function U(){}var _=r("8993"),Q=r.n(_),z=r("3c2e")(),K=function(t,e){var r;e&&e.path&&void 0!==Q()(e.val)&&void 0!==Q()(e.value)&&(void 0!==Q()(e.val)?r=e.val:void 0!==Q()(e.value)&&(r=e.value),z.setsmart(t,e.path,r))};function X(){}var Y={namespaced:!0,getters:o,mutations:n,actions:a,state:q},Z=r("3c2e")({}),tt=r("3c2e")({vue:{store:!0}}).methods;l["a"].use(b["a"]),window.SS=tt,window.stateSmarts=tt,window.resetVuex=window.clearCache=window.clearStorage=function(){try{localStorage.removeItem("vuex"),console.log("done");var t=localStorage.getItem("vuexSource"),e=Z.parse(t);tt.setsmart(window,"$store.state.graph.thing",e.thing),localStorage.setItem("vuex",t)}catch(r){Z.setsmart(window,"errors",[]),window.errors.push(r)}};var et=function(){var t=Z.stringify(Z.getsmart(Y,"state",{}));localStorage.setItem("vuexSource",t);var e=new b["a"].Store({modules:{graph:Y},strict:!1,plugins:[Object(w["a"])({paths:["graph"],merge:function(t,e){return Z.schema(e,t)},setState:j()((function(t,e,r){var o=Z.stringify(e);r.setItem(t,o)}),500),getState:function(t,e){var r={};try{var o=e.getItem(t);if(null===o)return{};r=Z.parse(o)}catch(n){console.error("error parsing persisted state: ",n),r=JSON.parse(e.getItem(t)||"{}")}return r}})]});return window.$store=e,window.graph=Z.getsmart(window.$store,"state.graph.thing",void 0),window.nrgraph={},e},rt=r("8c4f"),ot=(r("3c2e")(),function(t){t.store,t.ssrContex;var e=[];return e});l["a"].use(rt["a"]);var nt=function(t){var e=t.store,r=t.ssrContext,o=new rt["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:ot({store:e,ssrContext:r}),mode:"history",base:"/"});return o};r("3c2e")();globalThis&&(globalThis.source=m),globalThis&&(globalThis.createStore=et),globalThis&&(globalThis.createRouter=nt);var at=function(){var t="function"===typeof et?et({Vue:l["a"]}):et;globalThis&&(globalThis.store=t);var e="function"===typeof nt?nt({Vue:l["a"],store:t}):nt;globalThis&&(globalThis.router=e),t.$router=e;var r=globalThis.source;return r.el="#root",r.router=e,r.store=t,globalThis&&(globalThis.testy="testy"),{app:r,store:t,router:e}},it=r("bc3a"),st=r.n(it);l["a"].prototype.$axios=st.a;var ut=r("f09f"),ct=r.n(ut),lt=r("53bd");window.j=lt;var pt=function(t){t.app,t.router;var e=t.Vue;e.mixin({data:function(){return{}}})},dt=r("c6b3"),ht=r.n(dt);function ft(t,e){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];r=void 0!==r&&r;var o=[],n=[];function a(t,e){if(-1==o.indexOf(t)&&-1==n.indexOf(e)){if(o.push(t),n.push(e),t instanceof Array){for(var i=0;i<e.length;i++)t[i]?t[i]=a(t[i],e[i]):t[i]=e[i];r&&e.length<t.length&&t.splice(e.length,t.length-e.length)}else{if(!(t instanceof Object))return e;for(var s in e)t.hasOwnProperty(s)?t[s]=a(t[s],e[s]):t[s]=e[s];if(r)for(var s in t)e.hasOwnProperty(s)||delete t[s]}return t}}a(t,e)}window&&(window.E=ft);var gt=function(t){t.app,t.router;var e=t.Vue;e.mixin({data:function(){return{}}})},yt=(r("ac4d"),r("5df3"),r("1c4c"),r("6b54"),r("4db1")),vt=r.n(yt);r("7f7f");function mt(t,e){var r;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=bt(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var o=0,n=function(){};return{s:n,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){s=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw a}}}}function bt(t,e){if(t){if("string"===typeof t)return wt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?wt(t,e):void 0}}function wt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}var xt=function(t){t.app,t.router;var e=t.Vue;e.mixin({data:function(){return{}},computed:{pathAsArray:{get:function(){var t=this.pathToArray(this.path);return t}},pathAsString:{get:function(){var t=this.pathToString(this.path);return t}},path:{get:function(){return this.thing.path}},localPath:{get:function(){return this.pathAsArray[this.pathAsArray.length-1]}},parentPathAsArray:{get:function(){return this.pathAsArray.slice(0,this.pathAsArray.length-1)}},parentPath:{get:function(){var t=this,e="";return this.parentPathAsArray.forEach((function(r,o){e+=t.epp(r)})),e}},graph:{get:function(){return this.gosmart($store,"state.graph.thing",{})}},value:{get:function(){var t=this.getsmart(this.graph,this.pathAsString,void 0);return t}},valueType:{get:function(){var t;try{t=this.value.constructor.name}catch(e){"undefined"===typeof this.value&&(t="undefined"),null===this.value&&(t="null")}return t}},prototypeProperties:{get:function(){var t=[];if("function"==typeof this.value){var e,r={value:this.value},o=mt(Object.getOwnPropertyNames(r.prototype));try{for(o.s();!(e=o.n()).done;){var n=e.value;t.push(n)}}catch(u){o.e(u)}finally{o.f()}}else{var a,i=mt(Object.getOwnPropertyNames(Object.getPrototypeOf(this.value)));try{for(i.s();!(a=i.n()).done;){var s=a.value;t.push(s)}}catch(u){i.e(u)}finally{i.f()}}return t}},isBasic:{get:function(){return!("object"==Q()(this.value)||"array"==typeof this.value)||null===this.value}},settingsPathAsArray:{get:function(){var t=[].concat(vt()(this.ppp("root.meta.graph")),[this.pathAsString,"settings"]);return t}},settings:{get:function(){var t=this.getsmart(this.graph,this.settingsPathAsArray,void 0);return t}},classes:{get:function(){var t=this.getsmart(this.value,"classes",{});return t}}}})},jt=function(t){t.app},Ot=r("fdc7"),St=r("0c14"),At=r("6929"),Tt=r.n(At);Ot["c"].setup(Object(St["a"])());var kt=function(t){t.app,t.router;var e=t.Vue;window.jss={jss:Ot["c"],preset:St["a"],color:Tt.a},e.mixin({data:function(){return{jss:Ot["c"]}}}),e.prototype.$jss=Ot["c"]};window.SJ=r("f653");var Pt=function(t){t.app,t.router;var e=t.Vue;e.mixin({data:function(){return{}}})},Et=r("3c2e"),Ct=r.n(Et),Dt=function(t){t.app,t.router;var e=t.Vue;window.smarts=Ct()({vue:{reactiveSetter:!0}}).methods,e.mixin(Ct()({vue:{reactiveSetter:!0}})),e.prototype.$s=Ct()({vue:{reactiveSetter:!0}}).methods,e.prototype.$native={window:window,console:console},e.prototype.$native.setTimeout=function(t,e){return setTimeout(t,e)},e.prototype.$native.clearTimeout=function(t){return clearTimeout(t)},window.vue=e},Rt=r("c46f");window&&(window._=Rt);var It=function(t){t.app,t.router;var e=t.Vue;e.mixin({data:function(){return{}}})};globalThis.Vue=l["a"];var Vt=at(),$t=Vt.app,Bt=Vt.store,Wt=Vt.router;function Mt(){return Jt.apply(this,arguments)}function Jt(){return Jt=c()(s.a.mark((function t(){var e,r,o,n,a;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=!0,r=function(t){e=!1,globalThis.location.href=t},o=globalThis.location.href.replace(globalThis.location.origin,""),n=[void 0,ct.a,pt,ht.a,gt,xt,jt,kt,Pt,Dt,It],a=0;case 5:if(!(!0===e&&a<n.length)){t.next=23;break}if("function"===typeof n[a]){t.next=8;break}return t.abrupt("continue",20);case 8:return t.prev=8,t.next=11,n[a]({app:$t,router:Wt,store:Bt,Vue:l["a"],ssrContext:null,redirect:r,urlPath:o});case 11:t.next=20;break;case 13:if(t.prev=13,t.t0=t["catch"](8),!t.t0||!t.t0.url){t.next=18;break}return globalThis.location.href=t.t0.url,t.abrupt("return");case 18:return console.error("[Quasar] boot error:",t.t0),t.abrupt("return");case 20:a++,t.next=5;break;case 23:if(!1!==e){t.next=25;break}return t.abrupt("return");case 25:new l["a"]($t);case 26:case"end":return t.stop()}}),t,null,[[8,13]])}))),Jt.apply(this,arguments)}Mt()},c6b3:function(t,e){},f09f:function(t,e){}},[[0,"runtime","vendor"]]]);