(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],m=0,d=[];m<o.length;m++)r=o[m],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],n=!0,o=1;o<s.length;o++){var c=s[o];0!==a[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var n={},a={app:0},i=[];function r(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=n,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/hello-vue/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"02c5":function(t,e,s){},"034f":function(t,e,s){"use strict";var n=s("85ec"),a=s.n(n);a.a},"03f0":function(t,e,s){"use strict";var n=s("f2e9"),a=s.n(n);a.a},"15cf":function(t,e,s){"use strict";var n=s("e174"),a=s.n(n);a.a},"21f2":function(t,e,s){"use strict";var n=s("5357"),a=s.n(n);a.a},5357:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],r={name:"App",components:{}},o=r,c=(s("034f"),s("2877")),l=Object(c["a"])(o,a,i,!1,null,null,null),u=l.exports,m=s("8c4f"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"main"}},[s("header",[s("TopMenu")],1),s("div",{staticClass:"menu-card"},[s("router-view")],1),t.hassignin?s("div",{staticClass:"login",on:{click:t.cancelsignin}},[s("form",{staticClass:"loginform",on:{submit:function(e){return e.preventDefault(),t.signIn(e)},click:t.loginform}},[s("h2",[t._v("登录表单")]),s("div",{staticClass:"inputItem"},[s("label",{attrs:{for:"username"}},[t._v("username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",id:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),s("div",{staticClass:"inputItem"},[s("label",{attrs:{for:"password"}},[t._v("password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"text",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("button",[t._v("signin")]),s("p",[t._v("【username：“root”，password：“password”】")]),s("p",[t._v("【username：“one”，password：“one”】")]),s("p",[t._v("【username：“two”，password：“two”】")])])]):t._e(),t.hassignup?s("div",{staticClass:"login",on:{click:t.cancelsignup}},[s("form",{staticClass:"loginform",on:{submit:function(e){return e.preventDefault(),t.signUp(e)},click:t.loginform}},[s("h2",[t._v("注册表单(现不可用，未做数据持久化）")]),s("div",{staticClass:"inputItem"},[s("label",{attrs:{for:"username"}},[t._v("username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",id:"username"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),s("div",{staticClass:"inputItem"},[s("label",{attrs:{for:"password"}},[t._v("password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"text",id:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),s("button",[t._v("signup")])])]):t._e(),t._v(" "+t._s(this.$store.state)+" ")])},p=[],v=s("bc3a"),f=s.n(v),_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"topmenu"},[s("router-link",{attrs:{to:{name:"index"}}},[s("div",{staticClass:"logo"},[t._v(" Hello-Vue ")])]),s("ul",{staticClass:"ul"},[s("router-link",{attrs:{to:{name:"index"}}},[s("li",{staticClass:"list"},[t._v(" 首页 ")])]),s("router-link",{attrs:{to:{name:"column"}}},[s("li",{staticClass:"list"},[t._v(" 专栏 ")])]),s("router-link",{attrs:{to:{name:"list3"}}},[s("li",{staticClass:"list"},[t._v(" LIST3 ")])])],1),s("div",{staticClass:"search"},[s("SearchBox")],1),t.haslogin?s("div",{staticClass:"user"},[s("div",{staticClass:"usericon"},[t._v(" "+t._s(this.$store.state.user.username)+" ")])]):s("div",{staticClass:"user"},[s("ul",[s("li",{staticClass:"list",on:{click:t.showsignup}},[t._v("免费注册")]),s("li",{staticClass:"list",on:{click:t.showsignin}},[t._v("立即登录")])])])],1)},h=[],g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"searchbox"},[s("div",{staticClass:"formbox"},[s("form",{staticClass:"myform",on:{submit:function(e){return e.preventDefault(),t.alertKeyWord(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"搜索关键字"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),s("button",[t._v("Search")])])])])},w=[],b={name:"SearchBox",data:function(){return{keyword:""}},methods:{alertKeyWord:function(){""!==this.keyword?alert(this.keyword):alert("请输入搜索关键字！")}}},k=b,C=(s("705a"),Object(c["a"])(k,g,w,!1,null,"62f1687a",null)),x=C.exports,y={name:"TopMenu",components:{SearchBox:x},data:function(){return{}},computed:{haslogin:function(){return this.$store.state.user.haslogin}},methods:{showsignin:function(){this.$store.commit("editsignin")},showsignup:function(){this.$store.commit("editsignup")}}},$=y,O=(s("03f0"),Object(c["a"])($,_,h,!1,null,"4eef90ea",null)),j=O.exports,A={name:"Main",components:{TopMenu:j},data:function(){return{username:"",password:""}},created:function(){var t=this;f.a.get("/article/articles").then((function(e){t.$store.commit("initialArticles",e.data)})).catch((function(t){console.log(t)}))},computed:{hassignin:function(){return this.$store.state.user.hassignin},hassignup:function(){return this.$store.state.user.hassignup}},methods:{loginform:function(t){t.stopPropagation()},cancelsignin:function(){this.$store.commit("editsignin"),this.username="",this.password=""},cancelsignup:function(){this.$store.commit("editsignup"),this.username="",this.password=""},signIn:function(){var t=this;f.a.post("/user/signin",{username:t.username,password:t.password}).then((function(e){if(console.log(e.data),e.data){var s={userid:e.data.userid,username:e.data.username,password:e.data.password};t.$store.commit("editlogin",s)}else alert("用户名或密码错误！");t.cancelsignin()})).catch((function(e){console.log(e),alert("登录失败！"),t.cancelsignin()}))}}},I=A,S=(s("8971"),Object(c["a"])(I,d,p,!1,null,"f706afd8",null)),P=S.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index"},[s("h1",[t._v("首页")])])}],M={name:"Index"},N=M,B=Object(c["a"])(N,E,T,!1,null,"ceb2106c",null),L=B.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column"},[s("h1",{staticStyle:{"text-align":"center"}},[t._v("Column Component")]),t._l(t.articles,(function(e,n){return s("div",{key:n,staticClass:"articleItem"},[s("div",{staticClass:"articleTitle",on:{click:function(e){return t.goColumnItem(n)}}},[t._v(" "+t._s(e.article_title)+" ")]),s("div",{staticClass:"articleAuthor"},[t._v(" author:"+t._s(e.article_author)+" ")]),s("div",{staticClass:"articleContent"},[t._v(" "+t._s(e.article_content)+" ")]),s("div",{class:{like:!0,liked:t.haslogin&&-1!=t.myliked.indexOf(e.article_id)},on:{click:function(s){return t.likeArticle(e.article_id,n)}}},[t._v(" "+t._s(e.like_number)+" ")])])}))],2)},R=[],D=(s("c975"),{name:"Column",data:function(){return{}},computed:{haslogin:function(){return this.$store.state.user.haslogin},myliked:function(){var t=this.$store.state.user.userid;return this.$store.getters.myLikedArticles(t)},articles:function(){return this.$store.state.article.articles}},methods:{goColumnItem:function(t){this.$router.push({name:"columnitem",params:{columnid:t}})},likeArticle:function(t,e){if(this.$store.state.user.haslogin){var s=!1;-1!=this.myliked.indexOf(t)&&(s=!0);var n={user:{userid:0,username:"root",password:"password"},index:e,article_id:t,isliked:s};this.$store.commit("likeArticle",n),console.log(this.$store.getters.myLikedArticles(0))}else alert("请先登录")}}}),U=D,H=(s("21f2"),Object(c["a"])(U,J,R,!1,null,"7584623e",null)),K=H.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columnitem"},[s("div",{staticClass:"sidebar"},[t._v(" sidebar ")]),s("div",{staticClass:"articlebody"},[s("div",{staticClass:"author"},[s("div",{staticClass:"avatar"}),t._v(" AUTHOR:"+t._s(t.article.article_author)+" ")]),s("div",{staticClass:"title"},[s("h2",[t._v(t._s(t.article.article_title))])]),s("div",{staticClass:"annotation"},[s("div",{staticClass:"tags"},t._l(t.article.article_tag,(function(e,n){return s("div",{key:n,staticClass:"tagitem"},[t._v(" "+t._s(e.tag_name)+" ")])})),0),s("div",{staticClass:"date"},[t._v(" 发布于"+t._s(t.article.article_date.split("-")[1])+"月"+t._s(t.article.article_date.split("-")[2])+"日 ")])]),s("div",{staticClass:"content"},[s("p",[t._v(t._s(t.article.article_content))])]),s("div",{staticClass:"bottom"},[s("div",{staticClass:"item"},[t._v("赞"+t._s(t.article.like_number))]),s("div",{staticClass:"item"},[t._v("收藏"+t._s(t.article.collect_number))])])]),s("div",{staticClass:"comment"},[t._v(" 共有"+t._s(t.article.comment_number)+"条评论 "),t._l(t.article.comment_content,(function(e,n){return s("div",{key:n,staticClass:"commentitem"},[s("div",{staticClass:"username"},[t._v(t._s(e.username))]),s("div",{staticClass:"date"},[t._v("发布于"+t._s(e.comment_date))]),s("div",{staticClass:"content"},[t._v(" "+t._s(e.comment_content)+" ")])])}))],2)])},V=[],q={name:"ColumnItem",computed:{article:function(){var t=this.$route.params.columnid;return this.$store.getters.getArticleByIndex(t)}}},z=q,F=(s("15cf"),Object(c["a"])(z,W,V,!1,null,"e4b92562",null)),G=F.exports,Q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"c"},[s("h1",[t._v("C")])])}],Y={name:"C"},Z=Y,tt=Object(c["a"])(Z,Q,X,!1,null,"6ea05b0b",null),et=tt.exports;n["a"].use(m["a"]);for(var st=new m["a"]({routes:[{path:"/",redirect:"/main/index"},{path:"/main",component:P,children:[{path:"index",name:"index",component:L},{path:"column",name:"column",component:K},{path:"column/columnid=:columnid",name:"columnitem",component:G},{path:"list3",name:"list3",component:et}]}]}),nt=s("96eb"),at=s.n(nt),it=at.a.Random,rt=[],ot=0;ot<8;ot++){var ct={info:it.sentence(5,6)};rt.push(ct)}var lt=rt,ut=[];ut.push({userid:0,username:"root",password:"password"}),ut.push({userid:1,username:"one",password:"one"}),ut.push({userid:2,username:"two",password:"two"});var mt=ut,dt=[];dt.push({tag_id:0,tag_name:"前端"}),dt.push({tag_id:1,tag_name:"html5"}),dt.push({tag_id:2,tag_name:"css3"}),dt.push({tag_id:3,tag_name:"vue"}),dt.push({tag_id:4,tag_name:"react"});for(var pt=dt,vt=at.a.Random,ft=[],_t=1;_t<=10;_t++){var ht={article_id:_t,article_title:"第"+_t+"篇专栏文章",article_author:mt[0].username,article_tag:[pt[0],pt[2]],article_date:vt.date(),article_content:vt.csentence(200,500),like_number:3,like_users:[mt[0],mt[1],mt[2]],comment_number:2,comment_content:[{comment_id:1,comment_content:vt.csentence(10,20),userid:mt[0].userid,username:mt[0].username,comment_date:vt.date()},{comment_id:2,comment_content:vt.csentence(20,30),userid:mt[1].userid,username:mt[1].username,comment_date:vt.date()}],collect_number:vt.natural(0,5)};ft.push(ht)}for(var gt=11;gt<=20;gt++){var wt={article_id:gt,article_title:"第"+gt+"篇专栏文章",article_author:mt[1].username,article_tag:[pt[gt%2],pt[gt%3]],article_date:vt.date(),article_content:vt.csentence(200,500),like_number:1,like_users:[mt[2]],comment_number:1,comment_content:[{comment_id:1,comment_content:vt.csentence(10,20),userid:mt[2].userid,username:mt[2].username,comment_date:vt.date()}],collect_number:vt.natural(0,5)};ft.push(wt)}var bt=ft,kt="http://mockjs.com/api";at.a.mock("".concat(kt,"/boardlist"),"get",lt),at.a.mock("".concat(kt,"/user/signin"),"post",(function(t){for(var e=JSON.parse(t.body).username,s=JSON.parse(t.body).password,n={},a=0;a<mt.length;a++){var i=mt[a];i.username==e&&i.password==s&&(n=mt[a])}return n})),at.a.mock("".concat(kt,"/article/articles"),"get",bt);s("ed2c");var Ct=s("2f62"),xt=(s("a434"),s("2909")),yt={state:{articles:[]},getters:{myLikedArticles:function(t){return function(e){for(var s=[],n=0;n<t.articles.length;n++)for(var a=0;a<t.articles[n].like_users.length;a++)if(t.articles[n].like_users[a].userid==e){s.push(t.articles[n].article_id);break}return s}},getArticleByIndex:function(t){return function(e){return console.log(t.articles[e]),t.articles[e]}}},mutations:{initialArticles:function(t,e){t.articles=Object(xt["a"])(e)},likeArticle:function(t,e){if(console.log(e),e.isliked){t.articles[e.index].like_number--;for(var s=0;s<t.articles[e.index].like_users.length;s++)if(t.articles[e.index].like_users[s].userid==e.user.userid){t.articles[e.index].like_users.splice(s,1);break}}else t.articles[e.index].like_number++,t.articles[e.index].like_users.push(e.user)}}},$t=yt,Ot={state:{haslogin:!1,hassignin:!1,hassignup:!1,avatar:"",userid:0,username:"",password:""},mutations:{editlogin:function(t,e){t.haslogin=!0,t.userid=e.userid,t.username=e.username,t.password=e.password},editsignin:function(t){t.hassignin=!t.hassignin},editsignup:function(t){t.hassignup=!t.hassignup}}},jt=Ot;n["a"].use(Ct["a"]);var At=new Ct["a"].Store({modules:{article:$t,user:jt}}),It=At;f.a.defaults.baseURL="http://mockjs.com/api",n["a"].config.productionTip=!1,new n["a"]({router:st,store:It,render:function(t){return t(u)}}).$mount("#app")},"705a":function(t,e,s){"use strict";var n=s("bff3"),a=s.n(n);a.a},"85ec":function(t,e,s){},8971:function(t,e,s){"use strict";var n=s("02c5"),a=s.n(n);a.a},bff3:function(t,e,s){},e174:function(t,e,s){},ed2c:function(t,e,s){},f2e9:function(t,e,s){}});
//# sourceMappingURL=app.6f1bf237.js.map