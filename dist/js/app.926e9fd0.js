(function(t){function e(e){for(var r,s,l=e[0],o=e[1],c=e[2],f=0,p=[];f<l.length;f++)s=l[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,l=1;l<n.length;l++){var o=n[l];0!==a[o]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/hello-vue/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"039b":function(t,e,n){},"15c6":function(t,e,n){},"19f1":function(t,e,n){t.exports=n.p+"img/boardbg.48ae3f6f.jpg"},"2f41":function(t,e,n){},3953:function(t,e,n){"use strict";var r=n("039b"),a=n.n(r);a.a},"48f6":function(t,e,n){"use strict";var r=n("2f41"),a=n.n(r);a.a},"4de5":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],s={name:"App",components:{}},l=s,o=(n("034f"),n("2877")),c=Object(o["a"])(l,a,i,!1,null,null,null),u=c.exports,f=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main"}},[n("header",[n("TopBar"),n("MenuBar")],1),n("div",{staticClass:"content"},[n("router-view")],1)])},d=[],v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"topbar"},[r("div",{staticClass:"logo"},[r("div",{staticClass:"text"},[t._v("Hello Vue")]),r("img",{attrs:{src:n("afa8"),alt:"logo"}})]),r("div",{staticClass:"menu"},[r("div",{staticClass:"text"},[t._v("menu")])])])}],_={name:"TopBar"},b=_,h=(n("48f6"),Object(o["a"])(b,v,m,!1,null,"5d0ee8ce",null)),g=h.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menubar"},[n("ul",{staticClass:"ul"},[n("li",{staticClass:"list"},[n("router-link",{attrs:{to:{name:"board"}}},[t._v(" Board ")])],1),n("span",{staticClass:"divide"}),n("li",{staticClass:"list"},[n("router-link",{attrs:{to:{name:"list2"}}},[t._v(" List2 ")])],1),n("span",{staticClass:"divide"}),n("li",{staticClass:"list"},[n("router-link",{attrs:{to:{name:"list3"}}},[t._v(" List3 ")])],1)])])},j=[],y={name:"MenuBar",data:function(){return{}},computed:{listId:function(){var t=this.$route.params.listId;return t}}},O=y,x=(n("3953"),Object(o["a"])(O,C,j,!1,null,"1c0f629c",null)),w=x.exports,$={name:"Main",components:{TopBar:g,MenuBar:w}},E=$,I=(n("c83d"),Object(o["a"])(E,p,d,!1,null,"24d0643a",null)),B=I.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"board"},[n("h1",[t._v("Board")]),n("div",{staticClass:"mainMsg"},[n("div",{staticClass:"liItem",style:{backgroundImage:t.backgroundImage}},[t._m(0)])])])},M=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"ul"},[n("li",[t._v("liItem1")]),n("li",[t._v("liItem2")]),n("li",[t._v("liItem3")]),n("li",[t._v("liItem4")]),n("li",[t._v("liItem5")])])}],P={name:"Board",data:function(){return{backgroundImage:"url("+n("19f1")+")"}}},T=P,S=(n("8e52"),Object(o["a"])(T,k,M,!1,null,"691502c8",null)),A=S.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"a"},[n("h1",[t._v("A")])])}],H={name:"A"},V=H,q=Object(o["a"])(V,J,L,!1,null,"d1f18762",null),z=q.exports,D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"b"},[n("h1",[t._v("b")])])}],G={name:"B"},K=G,N=Object(o["a"])(K,D,F,!1,null,"6aa77f8d",null),Q=N.exports;r["a"].use(f["a"]);var R=new f["a"]({routes:[{path:"/",redirect:"/main/board"},{path:"/main",component:B,children:[{path:"board",name:"board",component:A},{path:"list2",name:"list2",component:Q},{path:"list3",name:"list3",component:z}]}],mode:"hash"});r["a"].config.productionTip=!1,new r["a"]({router:R,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,n){},"8e52":function(t,e,n){"use strict";var r=n("15c6"),a=n.n(r);a.a},afa8:function(t,e,n){t.exports=n.p+"img/topbar.690fdbc3.jpg"},c83d:function(t,e,n){"use strict";var r=n("4de5"),a=n.n(r);a.a}});
//# sourceMappingURL=app.926e9fd0.js.map