(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/badminton/badminton"],{"64bc":function(t,i,a){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{dateList:["今天","明天","后天","两天后"],currIndex:0,clickDate:"",banners:[],actList:[],inWhiteList:!0,isTwoLater:!1,lat:"30.57447",lon:"103.92377",isShowDiatance:!1,showNoData:!1}},created:function(){var i=this,a=this;this.clickDate=this.$utils.findDate(0),this.$http.get({url:"/v1/rest/home/homeNewsList",data:{region:""}}).then(function(t){console.log(t),200==t.status&&(i.banners=t.data)}),t.getLocation({type:"wgs84",success:function(t){console.log(t),a.lat=t.latitude,a.lon=t.longitude,a.isShowDiatance=!0,a.getList()},fail:function(){a.getList(),a.isShowDiatance=!1}})},onPullDownRefresh:function(){var i=this;wx.setBackgroundColor({backgroundColor:"#000000"}),this.$http.post({url:"/v1/rest/home/homeActivitiesList",data:{isTwoDaysLater:this.isTwoLater,lat:this.lat,lon:this.lon,time:this.clickDate}}).then(function(a){console.log(a),200==a.status&&(t.stopPullDownRefresh(),i.actList=a.data)})},methods:{getList:function(){var t=this;this.$http.post({url:"/v1/rest/home/homeActivitiesList",data:{isTwoDaysLater:this.isTwoLater,lat:this.lat,lon:this.lon,time:this.clickDate}}).then(function(i){console.log(i),200==i.status&&(t.actList=i.data,0==i.data.length?t.showNoData=!0:t.showNoData=!1)})},changeDate:function(t){switch(this.showNoData=!1,this.currIndex=t,t){case 0:this.clickDate=this.$utils.findDate(0),this.isTwoLater=!1,this.getList();break;case 1:this.clickDate=this.$utils.findDate(1),this.isTwoLater=!1,this.getList();break;case 2:this.clickDate=this.$utils.findDate(2),this.isTwoLater=!1,this.getList();break;case 3:this.clickDate=this.$utils.findDate(3),this.isTwoLater=!0,this.getList();break}},clickBanner:function(i){console.log(i),this.inWhiteList?t.navigateTo({url:"/pages/out/out?url="+i.webUrl}):(t.setClipboardData({data:i.webUrl}),t.showModal({content:"本网址无法直接在小程序内打开。已自动复制网址，请在手机浏览器里粘贴该网址",showCancel:!1}))},toSignUp:function(i){t.navigateTo({url:"/pages/activity/activityDetails/activityDetails?actId="+i})},toClubId:function(i){t.navigateTo({url:"/pages/club/homePage/homePage?clubId="+i.clubId})}}};i.default=a}).call(this,a("543d")["default"])},"73fa":function(t,i,a){},"78b4":function(t,i,a){"use strict";a.r(i);var e=a("8268"),s=a("78b9");for(var n in s)"default"!==n&&function(t){a.d(i,t,function(){return s[t]})}(n);a("d1bf");var o=a("2877"),c=Object(o["a"])(s["default"],e["a"],e["b"],!1,null,"5f44b1de",null);i["default"]=c.exports},"78b9":function(t,i,a){"use strict";a.r(i);var e=a("64bc"),s=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(i,t,function(){return e[t]})}(n);i["default"]=s.a},8268:function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement;t._self._c},s=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return s})},d1bf:function(t,i,a){"use strict";var e=a("73fa"),s=a.n(e);s.a},fe52:function(t,i,a){"use strict";(function(t){a("b5e5"),a("921b");e(a("66fd"));var i=e(a("78b4"));function e(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,a("543d")["createPage"])}},[["fe52","common/runtime","common/vendor"]]]);