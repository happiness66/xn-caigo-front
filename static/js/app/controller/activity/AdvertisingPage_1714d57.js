define("js/app/controller/activity/AdvertisingPage",["js/app/controller/base","js/app/util/ajax","js/lib/swiper-3.3.1.jquery.min","js/lib/jweixin-1.0.0"],function(e,n,t,i){function a(){C?(c(),r(),o()):($("#cont").remove(),e.showMsg("未传入活动编号!"))}function o(){$("#sbtn").on("click",function(){return e.isLogin()?void(2==M||now>y?($("#shareMask1").removeClass("hidden"),e.confirm("该活动已结束，看看其他活动？").then(function(){location.href="../activity/promotionList.html?fist=0"},function(){$("#shareMask1").addClass("hidden")})):$("#shareMask").removeClass("hidden")):void(location.href="../user/login.html?return="+encodeURIComponent(location.pathname+location.search))}),$("#shareMask").click(function(){$("#shareMask").addClass("hidden")}),$("#shareMask1").click(function(){$("#shareMask1").addClass("hidden")})}function r(){n.get(S,b).then(function(n){if($("#cont").remove(),n.success){var i=n.data;i.isDZ&&$("#goodImg").attr("src","/static/images/good1.png");var a=e.getPicArr(i.pic),o="";if(a.forEach(function(e){o+="<div class='swiper-slide'><div style='background-image:url("+e+");'></div></div>"}),$("#top-swiper").html(o),$("#name").text(i.name),$("#slogan").text(i.slogan),$("#totalDzNum").text(i.totalDzNum),$("#advert").text(i.advert),$("#address").text(i.province+" "+i.city+" "+i.area+" "+i.address),$("#detailCont").append('<a class="fr clearfix" href="tel://'+i.bookMobile+'"><span class="pr6 va-m inline_block">'+i.bookMobile+'</span><img class="wp18p va-m" src="/static/images/phone.png"/></a>'),$("#description").html(i.description),a.length&&a.length>1){new t("#swiper-container",{direction:"horizontal",pagination:".swiper-pagination"})}p=i.rate2,rate1=i.rate1,g=i.rate4,m=i.advPic,v=i.title,w=i.slogn,M=i.status,y=new Date(e.formatDate(i.endDatetime,"yyyy/MM/dd  hh:mm:ss")),x=i.readTimes,u("#sbtn",x)}else s()})}function s(){$("#description").html('<div class="bg_fff tc wp100">暂时无法获取活动信息</div>')}function c(){n.get("807910",{companyCode:SYSTEM_CODE,url:location.href.split("#")[0]}).then(function(e){l(e.data)},function(){})}function l(e){i.config({appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["onMenuShareQQ","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQZone"]}),i.ready(function(){i.onMenuShareAppMessage({title:v,desc:w,link:window.location.href+"&refereer="+k,imgUrl:PIC_PREFIX+"/"+m,success:function(){-1==x&&f()},fail:function(e){alert(JSON.stringify(e))}}),i.onMenuShareTimeline({title:v,desc:w,link:window.location.href+"&refereer="+k,imgUrl:PIC_PREFIX+"/"+m,success:function(){-1==x&&f()},fail:function(e){alert(JSON.stringify(e))}}),i.onMenuShareQQ({title:v,desc:w,link:window.location.href+"&refereer="+k,imgUrl:PIC_PREFIX+"/"+m,success:function(){-1==x&&f()},fail:function(e){alert(JSON.stringify(e))}}),i.onMenuShareQZone({title:v,desc:w,link:window.location.href+"&refereer="+k,imgUrl:PIC_PREFIX+"/"+m,success:function(){-1==x&&f()},fail:function(e){alert(JSON.stringify(e))}})}),i.error(function(e){alert("微信分享sdk初始化失败"+JSON.stringify(e))})}function f(){$.when(n.get("801030",{companyCode:SYSTEM_CODE,category:"A",interacter:e.getUserId(),entityCode:C,type:"4",refereer:I})).then(function(n){if(n.success){var t="";n.length?(t="分享成功，恭喜你获得NaN","是"):(t="分享成功，是否前往商城？","是"),e.confirm(t).then(function(){location.href="../consume/consume.html"},function(){location.href="/activity/promotionList.html?fist=0"})}else e.showMsg(n.msg)})}function d(e,n){x>=0?($(e).text("阅读完成后分享为有效分享("+x.toString()+"s)"),x--):(window.clearInterval(P),$(e).removeAttr("disabled").text(n).addClass("bg_f64444"),j=!1)}function u(e,n){j?alert("请先完成阅读，还剩"+x+"秒"):(x=n,P=setInterval(function(){d(e,"分享得好礼")},1e3),j=!0)}function h(e){var n=location.search,t=new Object;if(-1!=n.indexOf("?")){var i=n.substr(1);strs=i.split("&");for(var a=0;a<strs.length;a++)t[strs[a].split("=")[0]]=unescape(strs[a].split("=")[1])}return t[e]}var p,g,m,v,w,M,y,S="801051",k=e.getUserId(),C=e.getUrlParam("code")||"",I=h("refereer")||"",b={code:C,userId:k};now=new Date;var P,x=10,j=!1;a()});