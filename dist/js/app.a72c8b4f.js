(function(e){function t(t){for(var a,n,c=t[0],o=t[1],l=t[2],d=0,m=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&m.push(r[n][0]),r[n]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],a=!0,c=1;c<s.length;c++){var o=s[c];0!==r[o]&&(a=!1)}a&&(i.splice(t--,1),e=n(n.s=s[0]))}return e}var a={},r={app:0},i=[];function n(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=a,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/hello-vue/dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var a=s("85ec"),r=s.n(a);r.a},"457c":function(e,t,s){"use strict";var a=s("5a0a"),r=s.n(a);r.a},"540d":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],n={name:"App",components:{}},c=n,o=(s("034f"),s("2877")),l=Object(o["a"])(c,r,i,!1,null,null,null),u=l.exports,d=s("8c4f"),m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"main"}},[s("header",[s("TopMenu")],1),s("div",{staticClass:"menu-card"},[s("router-view")],1),e.hassignin?s("div",{staticClass:"login",on:{click:e.cancelsignin}},[s("form",{staticClass:"loginform",on:{submit:function(t){return t.preventDefault(),e.signIn(t)},click:e.loginform}},[s("h2",[e._v("登录表单")]),s("div",{staticClass:"inputItem"},[s("label",{attrs:{for:"username"}},[e._v("username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",id:"username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),s("div",{staticClass:"inputItem"},[s("label",{attrs:{for:"password"}},[e._v("password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"text",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),s("button",[e._v("signin")]),s("p",[e._v("【username：“root”，password：“password”】")]),s("p",[e._v("【username：“one”，password：“one”】")]),s("p",[e._v("【username：“two”，password：“two”】")])])]):e._e(),e.hassignup?s("div",{staticClass:"login",on:{click:e.cancelsignup}},[s("form",{staticClass:"loginform",on:{submit:function(t){return t.preventDefault(),e.signUp(t)},click:e.loginform}},[s("h2",[e._v("注册表单(现不可用，未做数据持久化）")]),s("div",{staticClass:"inputItem"},[s("label",{attrs:{for:"username"}},[e._v("username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",id:"username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),s("div",{staticClass:"inputItem"},[s("label",{attrs:{for:"password"}},[e._v("password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"text",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),s("button",[e._v("signup")])])]):e._e()])},h=[],p=s("bc3a"),v=s.n(p),f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"topmenu"},[s("router-link",{attrs:{to:{name:"index"}}},[s("div",{staticClass:"logo"},[e._v(" Async技术社区 ")])]),s("ul",{staticClass:"ul"},[s("router-link",{attrs:{to:{name:"index"}}},[s("li",{staticClass:"list"},[e._v(" 首页 ")])]),s("router-link",{attrs:{to:{name:"column"}}},[s("li",{staticClass:"list"},[e._v(" 专栏 ")])]),s("router-link",{attrs:{to:{name:"list3"}}},[s("li",{staticClass:"list"},[e._v(" LIST3 ")])])],1),s("div",{staticClass:"search"},[s("SearchBox")],1),e.haslogin?s("div",{staticClass:"user"},[s("div",{staticClass:"usericon",on:{click:e.showMyprofile}},[e._v(" "+e._s(this.$store.state.user.username)+" ")]),e.showprofile?s("div",{staticClass:"profile"},[e._v(" profile ")]):e._e()]):s("div",{staticClass:"user"},[s("ul",[s("li",{staticClass:"list",on:{click:e.showsignup}},[e._v("免费注册")]),s("li",{staticClass:"list",on:{click:e.showsignin}},[e._v("立即登录")])])])],1)},_=[],g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"searchbox"},[s("div",{staticClass:"formbox"},[s("form",{staticClass:"myform",on:{submit:function(t){return t.preventDefault(),e.alertKeyWord(t)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"搜索关键字"},domProps:{value:e.keyword},on:{input:function(t){t.target.composing||(e.keyword=t.target.value)}}}),s("button",[e._v("Search")])])])])},k=[],b={name:"SearchBox",data:function(){return{keyword:""}},methods:{alertKeyWord:function(){""!==this.keyword?alert(this.keyword):alert("请输入搜索关键字！")}}},w=b,y=(s("705a"),Object(o["a"])(w,g,k,!1,null,"62f1687a",null)),x=y.exports,C={name:"TopMenu",components:{SearchBox:x},data:function(){return{showprofile:!1}},computed:{haslogin:function(){return this.$store.state.user.haslogin}},methods:{showsignin:function(){this.$store.commit("editsignin")},showsignup:function(){this.$store.commit("editsignup")},showMyprofile:function(){this.showprofile=!this.showprofile}}},A=C,T=(s("eb5a"),Object(o["a"])(A,f,_,!1,null,"77ea3813",null)),$=T.exports,O={name:"Main",components:{TopMenu:$},data:function(){return{username:"",password:""}},created:function(){var e=this;v.a.get("/article/articles").then((function(t){e.$store.commit("initialArticles",t.data)})).catch((function(e){console.log(e)}))},computed:{hassignin:function(){return this.$store.state.user.hassignin},hassignup:function(){return this.$store.state.user.hassignup}},methods:{loginform:function(e){e.stopPropagation()},cancelsignin:function(){this.$store.commit("editsignin"),this.username="",this.password=""},cancelsignup:function(){this.$store.commit("editsignup"),this.username="",this.password=""},signIn:function(){var e=this;v.a.post("/user/signin",{username:e.username,password:e.password}).then((function(t){if(console.log(t.data),t.data){var s={userid:t.data.userid,username:t.data.username,password:t.data.password};e.$store.commit("editlogin",s)}else alert("用户名或密码错误！");e.cancelsignin()})).catch((function(t){console.log(t),alert("登录失败！"),e.cancelsignin()}))}}},j=O,P=(s("9af4"),Object(o["a"])(j,m,h,!1,null,"5b5633a2",null)),I=P.exports,N=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},S=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"index"},[s("h1",[e._v("首页")])])}],E={name:"Index"},M=E,D=Object(o["a"])(M,N,S,!1,null,"ceb2106c",null),L=D.exports,B=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"column"},[s("h1",{staticStyle:{"text-align":"center"}},[e._v("Column Component")]),e.haslogin?s("div",{staticClass:"addArticle"},[s("router-link",{attrs:{to:{name:"addarticle"}}},[e._v(" AddArticle ")])],1):e._e(),e._l(e.articles,(function(t,a){return s("div",{key:a,staticClass:"articleItem"},[s("div",{staticClass:"articleTitle",on:{click:function(t){return e.goColumnItem(a)}}},[e._v(" "+e._s(t.article_title)+" ")]),s("div",{staticClass:"articleAuthor"},[e._v(" author:"+e._s(t.article_author)+" ")]),s("div",{staticClass:"articleContent"},[e._v(" "+e._s(t.article_content)+" ")]),s("div",{class:{like:!0,liked:e.haslogin&&-1!=e.myliked.indexOf(t.article_id)},on:{click:function(s){return e.likeArticle(t.article_id)}}},[e._v(" "+e._s(t.like_number)+" ")])])}))],2)},J=[],R=(s("c975"),{name:"Column",data:function(){return{}},computed:{haslogin:function(){return this.$store.state.user.haslogin},myliked:function(){var e=this.$store.state.user.userid;return this.$store.getters.myLikedArticles(e)},articles:function(){return this.$store.state.article.articles}},methods:{goColumnItem:function(e){this.$router.push({name:"columnitem",params:{columnid:e}})},likeArticle:function(e){var t=e-1;if(this.$store.state.user.haslogin){var s=!1;-1!=this.myliked.indexOf(e)&&(s=!0);var a={user:{userid:0,username:"root",password:"password"},index:t,article_id:e,isliked:s};this.$store.commit("likeArticle",a),console.log(this.$store.getters.myLikedArticles(0))}else alert("请先登录")}}}),U=R,K=(s("cc29"),Object(o["a"])(U,B,J,!1,null,"3fbb5905",null)),W=K.exports,F=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"columnitem"},[s("div",{staticClass:"sidebar"},[e._v(" sidebar ")]),s("div",{staticClass:"articlebody"},[s("div",{staticClass:"author"},[s("div",{staticClass:"avatar"}),e._v(" AUTHOR:"+e._s(e.article.article_author)+" ")]),s("div",{staticClass:"title"},[s("h2",[e._v(e._s(e.article.article_title))])]),s("div",{staticClass:"annotation"},[s("div",{staticClass:"tags"},e._l(e.article.article_tag,(function(t,a){return s("div",{key:a,staticClass:"tagitem"},[e._v(" "+e._s(t.tag_name)+" ")])})),0),s("div",{staticClass:"date"},[e._v(" 发布于"+e._s(e.article.article_date.split("-")[1])+"月"+e._s(e.article.article_date.split("-")[2])+"日 ")])]),s("div",{staticClass:"content"},[s("p",[e._v(e._s(e.article.article_content))])]),s("div",{staticClass:"bottom"},[s("div",{class:{item:!0,liked:e.haslogin&&-1!=e.myliked.indexOf(e.article.article_id)},on:{click:function(t){return e.likeArticle(e.article.article_id)}}},[e._v("赞"+e._s(e.article.like_number))]),s("div",{class:{item:!0,liked:e.haslogin&&-1!=e.mycollected.indexOf(e.article.article_id)},on:{click:function(t){return e.collectArticle(e.article.article_id)}}},[e._v("收藏"+e._s(e.article.collect_number))])])]),s("div",{staticClass:"comment"},[e._v(" 共有"+e._s(e.article.comment_number)+"条评论 "),e._l(e.article.comment_content,(function(t,a){return s("div",{key:a,staticClass:"commentitem"},[s("div",{staticClass:"username"},[e._v(e._s(t.username))]),s("div",{staticClass:"date"},[e._v("发布于"+e._s(t.comment_date))]),s("div",{staticClass:"content"},[e._v(" "+e._s(t.comment_content)+" ")])])}))],2)])},H=[],Y={name:"ColumnItem",computed:{haslogin:function(){return this.$store.state.user.haslogin},myliked:function(){var e=this.$store.state.user.userid;return console.log(this.$store.getters.myLikedArticles(e)),this.$store.getters.myLikedArticles(e)},mycollected:function(){var e=this.$store.state.user.userid;return console.log(this.$store.getters.myCollectedArticles(e)),this.$store.getters.myCollectedArticles(e)},article:function(){var e=this.$route.params.columnid;return this.$store.getters.getArticleByIndex(e)}},methods:{likeArticle:function(e){var t=e-1;if(this.$store.state.user.haslogin){var s=!1;-1!=this.myliked.indexOf(e)&&(s=!0);var a={user:{userid:0,username:"root",password:"password"},index:t,article_id:e,isliked:s};this.$store.commit("likeArticle",a),console.log(this.$store.getters.myLikedArticles(0))}else alert("请先登录")},collectArticle:function(e){var t=e-1;if(this.$store.state.user.haslogin){var s=!1;-1!=this.mycollected.indexOf(e)&&(s=!0);var a={user:{userid:0,username:"root",password:"password"},index:t,article_id:e,iscollected:s};this.$store.commit("collectArticle",a)}else alert("请先登录")}}},q=Y,z=(s("457c"),Object(o["a"])(q,F,H,!1,null,"65297646",null)),G=z.exports,Q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"addArticle"},[s("h1",[e._v("addArticle")]),s("form",{staticClass:"addform",on:{submit:function(t){return t.preventDefault(),e.addArticle(t)}}},[s("h2",[e._v("添加文章表单")]),s("div",{staticClass:"inputItem"},[s("label",{attrs:{for:"title"}},[e._v("title")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text",id:"title"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}})]),s("div",{staticClass:"inputItem"},[s("p",[e._v("选择标签")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedTags,expression:"checkedTags"}],attrs:{type:"checkbox",id:"前端",value:"0"},domProps:{checked:Array.isArray(e.checkedTags)?e._i(e.checkedTags,"0")>-1:e.checkedTags},on:{change:function(t){var s=e.checkedTags,a=t.target,r=!!a.checked;if(Array.isArray(s)){var i="0",n=e._i(s,i);a.checked?n<0&&(e.checkedTags=s.concat([i])):n>-1&&(e.checkedTags=s.slice(0,n).concat(s.slice(n+1)))}else e.checkedTags=r}}}),s("label",{attrs:{for:"前端"}},[e._v("前端")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedTags,expression:"checkedTags"}],attrs:{type:"checkbox",id:"html5",value:"1"},domProps:{checked:Array.isArray(e.checkedTags)?e._i(e.checkedTags,"1")>-1:e.checkedTags},on:{change:function(t){var s=e.checkedTags,a=t.target,r=!!a.checked;if(Array.isArray(s)){var i="1",n=e._i(s,i);a.checked?n<0&&(e.checkedTags=s.concat([i])):n>-1&&(e.checkedTags=s.slice(0,n).concat(s.slice(n+1)))}else e.checkedTags=r}}}),s("label",{attrs:{for:"html5"}},[e._v("html5")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedTags,expression:"checkedTags"}],attrs:{type:"checkbox",id:"css3",value:"2"},domProps:{checked:Array.isArray(e.checkedTags)?e._i(e.checkedTags,"2")>-1:e.checkedTags},on:{change:function(t){var s=e.checkedTags,a=t.target,r=!!a.checked;if(Array.isArray(s)){var i="2",n=e._i(s,i);a.checked?n<0&&(e.checkedTags=s.concat([i])):n>-1&&(e.checkedTags=s.slice(0,n).concat(s.slice(n+1)))}else e.checkedTags=r}}}),s("label",{attrs:{for:"css3"}},[e._v("css3")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedTags,expression:"checkedTags"}],attrs:{type:"checkbox",id:"vue",value:"3"},domProps:{checked:Array.isArray(e.checkedTags)?e._i(e.checkedTags,"3")>-1:e.checkedTags},on:{change:function(t){var s=e.checkedTags,a=t.target,r=!!a.checked;if(Array.isArray(s)){var i="3",n=e._i(s,i);a.checked?n<0&&(e.checkedTags=s.concat([i])):n>-1&&(e.checkedTags=s.slice(0,n).concat(s.slice(n+1)))}else e.checkedTags=r}}}),s("label",{attrs:{for:"vue"}},[e._v("vue")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedTags,expression:"checkedTags"}],attrs:{type:"checkbox",id:"react",value:"4"},domProps:{checked:Array.isArray(e.checkedTags)?e._i(e.checkedTags,"4")>-1:e.checkedTags},on:{change:function(t){var s=e.checkedTags,a=t.target,r=!!a.checked;if(Array.isArray(s)){var i="4",n=e._i(s,i);a.checked?n<0&&(e.checkedTags=s.concat([i])):n>-1&&(e.checkedTags=s.slice(0,n).concat(s.slice(n+1)))}else e.checkedTags=r}}}),s("label",{attrs:{for:"react"}},[e._v("react")])]),s("div",{staticClass:"inputItem"},[s("label",{attrs:{for:"content"}},[e._v("Content")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],attrs:{type:"text",id:"content",placeholder:"Add Article Content"},domProps:{value:e.content},on:{input:function(t){t.target.composing||(e.content=t.target.value)}}})]),s("button",[e._v("提交")])]),e._v(" "+e._s(e.title)+" "+e._s(e.checkedTags)+" "+e._s(e.content)+" ")])},V=[],X=[];X.push({tag_id:0,tag_name:"前端"}),X.push({tag_id:1,tag_name:"html5"}),X.push({tag_id:2,tag_name:"css3"}),X.push({tag_id:3,tag_name:"vue"}),X.push({tag_id:4,tag_name:"react"});var Z=X,ee={name:"AddArticle",data:function(){return{title:"",checkedTags:[],content:""}},methods:{addArticle:function(){for(var e=this.$store.getters.getArticleNum+1,t=this.$store.state.user.username,s=[],a=0;a<this.checkedTags.length;a++){var r=parseInt(this.checkedTags[a]);s.push(Z[r])}var i={article_id:e,article_title:this.title,article_author:t,article_tag:s,article_date:(new Date).getFullYear()+"-"+((new Date).getMonth()+1)+"-"+(new Date).getDate(),article_content:this.content,like_number:0,like_users:[],comment_number:0,comment_content:[],collect_number:0,collect_users:[]};this.$store.commit("addArticle",i),this.$store.getters.getArticleNum==e?alert("文章提交成功！"):alert("文章提交失败！"),this.$router.push({name:"column"})}}},te=ee,se=Object(o["a"])(te,Q,V,!1,null,"5f617a80",null),ae=se.exports,re=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ie=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"c"},[s("h1",[e._v("C")])])}],ne={name:"C"},ce=ne,oe=Object(o["a"])(ce,re,ie,!1,null,"6ea05b0b",null),le=oe.exports;a["a"].use(d["a"]);for(var ue=new d["a"]({routes:[{path:"/",redirect:"/main/index"},{path:"/main",component:I,children:[{path:"index",name:"index",component:L},{path:"column",name:"column",component:W},{path:"column/columnid=:columnid",name:"columnitem",component:G},{path:"column/addarticle",name:"addarticle",component:ae},{path:"list3",name:"list3",component:le}]}]}),de=s("96eb"),me=s.n(de),he=me.a.Random,pe=[],ve=0;ve<8;ve++){var fe={info:he.sentence(5,6)};pe.push(fe)}var _e=pe,ge=[];ge.push({userid:0,username:"root",password:"password"}),ge.push({userid:1,username:"one",password:"one"}),ge.push({userid:2,username:"two",password:"two"});for(var ke=ge,be=me.a.Random,we=[],ye=1;ye<=10;ye++){var xe={article_id:ye,article_title:"第"+ye+"篇专栏文章",article_author:ke[0].username,article_tag:[Z[0],Z[2]],article_date:be.date(),article_content:be.csentence(200,500),like_number:3,like_users:[ke[0],ke[1],ke[2]],comment_number:2,comment_content:[{comment_id:1,comment_content:be.csentence(10,20),userid:ke[0].userid,username:ke[0].username,comment_date:be.date()},{comment_id:2,comment_content:be.csentence(20,30),userid:ke[1].userid,username:ke[1].username,comment_date:be.date()}],collect_number:2,collect_users:[ke[0],ke[1]]};we.push(xe)}for(var Ce=11;Ce<=20;Ce++){var Ae={article_id:Ce,article_title:"第"+Ce+"篇专栏文章",article_author:ke[1].username,article_tag:[Z[Ce%2],Z[Ce%3]],article_date:be.date(),article_content:be.csentence(200,500),like_number:1,like_users:[ke[2]],comment_number:1,comment_content:[{comment_id:1,comment_content:be.csentence(10,20),userid:ke[2].userid,username:ke[2].username,comment_date:be.date()}],collect_number:1,collect_users:[ke[2]]};we.push(Ae)}var Te=we,$e="http://mockjs.com/api";me.a.mock("".concat($e,"/boardlist"),"get",_e),me.a.mock("".concat($e,"/user/signin"),"post",(function(e){for(var t=JSON.parse(e.body).username,s=JSON.parse(e.body).password,a={},r=0;r<ke.length;r++){var i=ke[r];i.username==t&&i.password==s&&(a=ke[r])}return a})),me.a.mock("".concat($e,"/article/articles"),"get",Te);s("ed2c");var Oe=s("2f62"),je=(s("99af"),s("a434"),s("2909")),Pe={state:{articles:[]},getters:{myLikedArticles:function(e){return function(t){for(var s=[],a=0;a<e.articles.length;a++)for(var r=0;r<e.articles[a].like_users.length;r++)if(e.articles[a].like_users[r].userid==t){s.push(e.articles[a].article_id);break}return s}},myCollectedArticles:function(e){return function(t){for(var s=[],a=0;a<e.articles.length;a++)for(var r=0;r<e.articles[a].collect_users.length;r++)if(e.articles[a].collect_users[r].userid==t){s.push(e.articles[a].article_id);break}return s}},getArticleByIndex:function(e){return function(t){return console.log(e.articles[t]),e.articles[t]}},getArticleNum:function(e){return e.articles.length}},mutations:{initialArticles:function(e,t){e.articles=Object(je["a"])(t)},likeArticle:function(e,t){if(console.log(t),t.isliked){e.articles[t.index].like_number--;for(var s=0;s<e.articles[t.index].like_users.length;s++)if(e.articles[t.index].like_users[s].userid==t.user.userid){e.articles[t.index].like_users.splice(s,1);break}}else e.articles[t.index].like_number++,e.articles[t.index].like_users.push(t.user)},collectArticle:function(e,t){if(console.log(t),t.iscollected){e.articles[t.index].collect_number--;for(var s=0;s<e.articles[t.index].collect_users.length;s++)if(e.articles[t.index].collect_users[s].userid==t.user.userid){e.articles[t.index].collect_users.splice(s,1);break}}else e.articles[t.index].collect_number++,e.articles[t.index].collect_users.push(t.user)},addArticle:function(e,t){e.articles=[].concat(Object(je["a"])(e.articles),[t])}}},Ie=Pe,Ne={state:{haslogin:!1,hassignin:!1,hassignup:!1,avatar:"",userid:0,username:"",password:""},mutations:{editlogin:function(e,t){e.haslogin=!0,e.userid=t.userid,e.username=t.username,e.password=t.password},editsignin:function(e){e.hassignin=!e.hassignin},editsignup:function(e){e.hassignup=!e.hassignup}}},Se=Ne;a["a"].use(Oe["a"]);var Ee=new Oe["a"].Store({modules:{article:Ie,user:Se}}),Me=Ee;v.a.defaults.baseURL="http://mockjs.com/api",a["a"].config.productionTip=!1,new a["a"]({router:ue,store:Me,render:function(e){return e(u)}}).$mount("#app")},"5a0a":function(e,t,s){},"705a":function(e,t,s){"use strict";var a=s("bff3"),r=s.n(a);r.a},"85ec":function(e,t,s){},"9af4":function(e,t,s){"use strict";var a=s("540d"),r=s.n(a);r.a},bf55:function(e,t,s){},bff3:function(e,t,s){},cc29:function(e,t,s){"use strict";var a=s("f849"),r=s.n(a);r.a},eb5a:function(e,t,s){"use strict";var a=s("bf55"),r=s.n(a);r.a},ed2c:function(e,t,s){},f849:function(e,t,s){}});
//# sourceMappingURL=app.a72c8b4f.js.map