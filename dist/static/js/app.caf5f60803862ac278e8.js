webpackJsonp([1],{"+/k+":function(t,e){},"+k2G":function(t,e){},"8Hiu":function(t,e){},"8T3d":function(t,e){},"9n10":function(t,e){},IMwZ:function(t,e){},M6Sr:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("lr+w")},null,null).exports,r=i("/ocq"),o=i("Dd8w"),c=i.n(o),l=i("NYxO"),d={name:"HomeHeader",computed:c()({},Object(l.c)({city:"city"}))},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("router-link",{attrs:{to:"/city"}},[i("div",{staticClass:"header-right"},[i("span",{staticClass:"city"},[t._v(t._s(this.city))]),t._v(" "),i("span",{staticClass:"iconfont icon-city"},[t._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("span",{staticClass:"iconfont icon-back"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-middle"},[e("input",{attrs:{type:"text",placeholder:"输入城市/景点/游玩主题"}}),this._v(" "),e("span",{staticClass:"iconfont icon-search"},[this._v("")])])}]};var h=i("VU/8")(d,u,!1,function(t){i("IMwZ")},"data-v-51122e86",null).exports,p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.imgList,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:""}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var m=i("VU/8")({name:"HomeVueAwesomeSwiper",props:["imgList"],data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0,autoplay:3e3}}}},p,!1,function(t){i("jnqO")},"data-v-76925a26",null).exports,f=i("Au9i"),v=i.n(f),_={name:"HomeIcons",props:["pagesList"],data:function(){return{auto:!1,showIndicators:!1,iconsNumPerPage:8}},components:{"mt-swipe":f.Swipe,"mt-swipe-item":f.SwipeItem},computed:{pages:function(){for(var t=[],e=0;e<this.pagesList.length;e++){var i=Math.floor(e/this.iconsNumPerPage);t[i]||(t[i]=[]),t[i].push(this.pagesList[e])}return t}}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("mt-swipe",{staticClass:"mint-swipe",attrs:{auto:t.auto,"show-indicators":t.showIndicators}},t._l(t.pages,function(e,s){return i("mt-swipe-item",{key:s,staticClass:"swipe-item"},[i("ul",{staticClass:"iconsPerPage"},t._l(e,function(e){return i("li",{key:e.id,staticClass:"iconfont"},[i("span",{staticClass:"icon",domProps:{innerHTML:t._s(e.iconUnicode)}}),t._v(" "),i("span",{staticClass:"iconName"},[t._v(t._s(e.name))])])}))])}))],1)},staticRenderFns:[]};var y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("h6",{staticClass:"recommend"},[t._v("热销推荐")]),t._v(" "),i("ul",{staticClass:"recommend-ul"},t._l(t.recommendList,function(e){return i("li",{key:e.id,staticClass:"recommend-li border-bottom"},[i("div",{staticClass:"recommend-li-left"},[i("img",{attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"recommend-li-right"},[i("h6",[t._v(t._s(e.imgTitle))]),t._v(" "),i("p",[t._v(t._s(e.imgDesc))]),t._v(" "),i("router-link",{attrs:{to:"/detail/"+e.id,tag:"button"}},[t._v("查看详情")])],1)])}))])},staticRenderFns:[]};var w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("h6",{staticClass:"recommend"},[t._v("周末去哪儿")]),t._v(" "),i("ul",{staticClass:"recommend-ul"},t._l(t.weekendList,function(e){return i("li",{key:e.id,staticClass:"recommend-li"},[i("div",{staticClass:"recommend-li-left"},[i("img",{attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"recommend-li-right"},[i("h6",[t._v(t._s(e.imgTitle))]),t._v(" "),i("p",[t._v(t._s(e.imgDesc))])])])}))])},staticRenderFns:[]};var g={name:"Home",data:function(){return{pagesList:[],recommendList:[],imgList:[],weekendList:[],lastCity:""}},components:{HomeHeader:h,HomeVueAwesomeSwiper:m,HomeIcons:i("VU/8")(_,C,!1,function(t){i("f5FA")},"data-v-54e2a5d6",null).exports,HomeRecommend:i("VU/8")({name:"HomeRecommend",props:["recommendList"],data:function(){return{}}},y,!1,function(t){i("V7Vb")},"data-v-97e99646",null).exports,HomeWeekend:i("VU/8")({name:"HomeWeekend",props:["weekendList"],data:function(){return{}}},w,!1,function(t){i("rusL")},"data-v-40df2bb2",null).exports},methods:{getHomeInfo:function(){this.axios.get("../../../static/mock/home.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if(t.data.ret&&t.data.data){var e=t.data.data;this.city=e.city,this.pagesList=e.pagesList,this.recommendList=e.recommendList,this.imgList=e.imgList,this.weekendList=e.weekendList}}},computed:c()({},Object(l.c)(["city"])),mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&(this.getHomeInfo(),this.lastCity=this.city)}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header",{attrs:{city:t.city}}),t._v(" "),i("home-vue-awesome-swiper",{attrs:{imgList:t.imgList}}),t._v(" "),i("home-icons",{attrs:{pagesList:t.pagesList}}),t._v(" "),i("home-recommend",{attrs:{recommendList:t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{weekendList:t.weekendList}})],1)},staticRenderFns:[]};var b=i("VU/8")(g,k,!1,function(t){i("qRc4")},null,null).exports,L={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"header"},[i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"iconfont back"},[t._v("")])]),t._v(" "),i("h6",{staticClass:"cityChoose"},[t._v("城市选择")])],1),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords,expression:"keywords"}],staticClass:"cityEnter",attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.keywords},on:{input:function(e){e.target.composing||(t.keywords=e.target.value)}}})])},staticRenderFns:[]};var x=i("VU/8")({name:"CityHeader",data:function(){return{keywords:""}},watch:{keywords:function(){this.$emit("change",this.keywords)}}},L,!1,function(t){i("+/k+")},"data-v-0c12587e",null).exports,$=i("GQaK"),S={handleCityClick:function(t,e){this.state.city=e;try{localStorage.city=e}catch(t){}}},H={name:"CityList",props:["cities","hotCities","letter"],mounted:function(){this.scroll=new $.a(this.$refs.wrapper)},watch:{letter:function(){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}},methods:c()({handleCityClick:function(t){this.CityClick(t),this.$router.push("/")}},Object(l.b)({CityClick:"handleCityClick"}))},T={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"wrapper"},[i("div",[i("div",{staticClass:"currentCity"},[i("h6",{staticClass:"currentCity-title border-topbottom"},[t._v("当前城市")]),t._v(" "),i("ul",{staticClass:"currentCity-name"},[i("li",[t._v(t._s(this.$store.state.city))])])]),t._v(" "),i("div",{staticClass:"hotCity"},[i("h6",{staticClass:"hotCity-title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("ul",{staticClass:"hotCity-name"},t._l(t.hotCities,function(e){return i("li",{key:e.id,on:{click:function(i){t.handleCityClick(e.name)}}},[t._v(t._s(e.name))])}))]),t._v(" "),i("div",{staticClass:"perCity"},[i("ul",t._l(t.cities,function(e,s){return i("li",{key:s,ref:s,refInFor:!0},[i("h6",{staticClass:"perCity-title border-topbottom"},[t._v(t._s(s))]),t._v(" "),i("ul",{staticClass:"perCity-name"},t._l(e,function(e){return i("li",{key:e.id,staticClass:"border-bottom",on:{click:function(i){t.handleCityClick(e.name)}}},[t._v(t._s(e.name))])}))])}))])])])},staticRenderFns:[]};var F=i("VU/8")(H,T,!1,function(t){i("SoG+")},"data-v-079869e7",null).exports,E={name:"CityAlphabet",props:["cities"],data:function(){return{touchStatus:!1,startY:0,timer:null}},updated:function(){this.startY=this.$refs.A[0].offsetTop+83},methods:{handleClickLetter:function(t){this.$emit("change",t.target.innerText)},handleTouchstart:function(){this.touchStatus=!0},handleTouchmove:function(t){var e=this;this.touchStatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=t.touches[0].clientY,s=Math.floor((i-e.startY)/20);s>=0&&s<e.letters.length&&e.$emit("change",e.letters[s])},16))},handleTouchend:function(){this.touchStatus=!1}},computed:{letters:function(){var t=[];for(var e in this.cities)this.cities.hasOwnProperty(e)&&t.push(e);return t}}},I={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("ul",{staticClass:"alphabet"},t._l(t.cities,function(e,s){return i("li",{key:s,ref:s,refInFor:!0,on:{click:t.handleClickLetter,touchstart:t.handleTouchstart,touchmove:t.handleTouchmove,touchend:t.handleTouchend}},[t._v(t._s(s))])}))])},staticRenderFns:[]};var R=i("VU/8")(E,I,!1,function(t){i("+k2G")},"data-v-f209e45a",null).exports,V={name:"CitySearchLogic",props:["cities","keywords"],data:function(){return{timer:null,list:[]}},mounted:function(){this.scroll=new $.a(this.$refs.wrapper)},watch:{keywords:function(){var t=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities.hasOwnProperty(i)&&t.cities[i].forEach(function(i){(i.spell.indexOf(t.keywords)>-1||i.name.indexOf(t.keywords)>-1)&&e.push(i.name)});t.list=e},100)}},computed:{noData:function(){return!this.list.length}},methods:c()({handleCityClick:function(t){this.CityClick(t),this.$router.push("/")}},Object(l.b)({CityClick:"handleCityClick"}))},U={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.keywords,expression:"keywords"}],ref:"wrapper",staticClass:"wrapper"},[i("div",[i("ul",{staticClass:"cityList"},[t._l(t.list,function(e,s){return i("li",{key:s,ref:s,refInFor:!0,staticClass:"city border-bottom",on:{click:function(i){t.handleCityClick(e)}}},[t._v(t._s(e))])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.noData,expression:"noData"}],staticClass:"city border-bottom"},[t._v("无法找到匹配城市")])],2)])])},staticRenderFns:[]};var A={name:"City",data:function(){return{cities:{},hotCities:[],letter:"",keywords:""}},components:{CityHeader:x,CityList:F,CityAlphabet:R,CitySearchLogic:i("VU/8")(V,U,!1,function(t){i("pZTx")},"data-v-7a3902db",null).exports},methods:{getCityInfo:function(){this.axios.get("../../../static/mock/city.json").then(this.getCityInfoSucc)},getCityInfoSucc:function(t){if(t.data.ret&&t.data.data){var e=t.data.data;this.cities=e.cities,this.hotCities=e.hotCities}},handleChangeLetter:function(t){this.letter=t},handleChangeKeywords:function(t){this.keywords=t}},mounted:function(){this.getCityInfo()}},O={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header",{on:{change:t.handleChangeKeywords}}),t._v(" "),i("city-list",{attrs:{cities:t.cities,hotCities:t.hotCities,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.handleChangeLetter}}),t._v(" "),i("city-search-logic",{attrs:{cities:t.cities,keywords:t.keywords}})],1)},staticRenderFns:[]};var j=i("VU/8")(A,O,!1,function(t){i("eTto")},"data-v-13d67684",null).exports,D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper",on:{click:this.handleGalleryClick}},[e("div",{staticClass:"gallery"},[e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.imgList,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"galleryImg",attrs:{src:t,alt:""}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var N={name:"DetailHeader",data:function(){return{showHeader:!1,opacityStyle:{opacity:0}}},methods:{handleShowHeader:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;if(t>60){this.showHeader=!0;var e=t/200;this.opacityStyle={opacity:e}}else this.showHeader=!1}},mounted:function(){window.addEventListener("scroll",this.handleShowHeader)},beforeDestroy:function(){}},G={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("router-link",{staticClass:"back",attrs:{tag:"div",to:"/"}},[this._v("<")]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:this.showHeader,expression:"showHeader"}],staticClass:"header",style:this.opacityStyle},[this._v("景点详情")])],1)},staticRenderFns:[]};var P={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},t._l(t.list.item,function(e,s){return i("div",{key:s,staticClass:"list"},[i("div",{staticClass:"listItem border-bottom"},[i("span",{staticClass:"iconfont itemIcon"},[t._v("")]),t._v(" "),i("span",{staticClass:"itemTitle"},[t._v(t._s(e.title))])]),t._v(" "),e.children?i("div",{staticClass:"itemChildren"},[i("detail-list",{attrs:{list:e.children}})],1):t._e()])}))},staticRenderFns:[]};var M={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var q={name:"Detail",data:function(){return{showGallery:!1,imgList:["https://dimg04.c-ctrip.com/images/30060j000000avqxv0263_C_500_280_Q90.jpg","https://dimg04.c-ctrip.com/images/30030j000000ay4gkAA39_C_500_280_Q90.jpg","https://dimg04.c-ctrip.com/images/300c0j000000axbkw2F3F_C_500_280_Q90.jpg"],list:null}},components:{Gallery:i("VU/8")({name:"Gallery",props:["imgList"],data:function(){return{swiperOption:{pagination:".swiper-pagination",paginationType:"fraction",observer:!0,observeParents:!0}}},methods:{handleGalleryClick:function(){this.$emit("closeGallery")}}},D,!1,function(t){i("8T3d")},"data-v-244cd85e",null).exports,DetailHeader:i("VU/8")(N,G,!1,function(t){i("R5nq")},"data-v-5caff05e",null).exports,DetailList:i("VU/8")({name:"DetailList",props:["list"]},P,!1,function(t){i("8Hiu")},"data-v-345912e1",null).exports,AnimationFade:i("VU/8")({name:"AnimationFade"},M,!1,function(t){i("YN8C")},"data-v-252470ea",null).exports},methods:{handleBannerClick:function(){this.showGallery=!0},handleCloseGallery:function(){this.showGallery=!1},getDetailInfo:function(){this.axios.get("../../../static/mock/detail.json",{params:{id:this.$route.params.id}}).then(this.getDetailInfoSucc)},getDetailInfoSucc:function(t){(t=t.data).ret&&t.data&&(this.list=t.data.list)}},mounted:function(){this.getDetailInfo()}},Y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"banner",on:{click:t.handleBannerClick}},[i("img",{staticClass:"bannerImg",attrs:{src:"https://youimg1.c-ctrip.com/target/10020q000000gbtn63B1F_R_640_10000_Q90.png",alt:""}}),t._v(" "),i("h6",{staticClass:"leftArea"},[t._v("大连圣亚海洋世界（AAAA景区）")]),t._v(" "),t._m(0)]),t._v(" "),i("animation-fade",[i("gallery",{directives:[{name:"show",rawName:"v-show",value:t.showGallery,expression:"showGallery"}],attrs:{imgList:t.imgList},on:{closeGallery:t.handleCloseGallery}})],1),t._v(" "),i("detail-header"),t._v(" "),i("div",{staticClass:"content"},[i("detail-list",{attrs:{list:t.list}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rightArea"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v(" "),e("span",{staticClass:"imgNumber"},[this._v("3")])])}]};var B=i("VU/8")(q,Y,!1,function(t){i("s68e")},"data-v-388c1896",null).exports;s.default.use(r.a);var Q=new r.a({routes:[{path:"/",name:"Home",component:b},{path:"/city",name:"City",component:j},{path:"/detail/:id",name:"Detail",component:B}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),z=i("v5o6"),W=i.n(z),Z=i("F3EI"),K=i.n(Z),J=i("mtWM"),X=i.n(J),tt="广州";try{localStorage.city&&(tt=localStorage.city)}catch(t){}var et={city:tt};s.default.use(l.a);var it=new l.a.Store({state:et,mutations:S});i("d8/S"),i("9n10"),i("M6Sr"),i("TzC8"),i("v2ns");s.default.use(K.a),s.default.config.productionTip=!1,W.a.attach(document.body),s.default.use(v.a),s.default.prototype.axios=X.a,new s.default({el:"#app",router:Q,store:it,components:{App:a},template:"<App/>"})},R5nq:function(t,e){},"SoG+":function(t,e){},TzC8:function(t,e){},V7Vb:function(t,e){},YN8C:function(t,e){},"d8/S":function(t,e){},eTto:function(t,e){},f5FA:function(t,e){},jnqO:function(t,e){},"lr+w":function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},pZTx:function(t,e){},qRc4:function(t,e){},rusL:function(t,e){},s68e:function(t,e){},v2ns:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.caf5f60803862ac278e8.js.map