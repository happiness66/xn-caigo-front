define("js/app/controller/new/RedPapperDetail",["js/app/controller/base","js/app/util/ajax","js/app/util/dialog","js/app/util/dict","js/lib/jweixin-1.0.0"],function(e,n,t,s,i){function a(){o(),c()}function o(){var t={code:f};$.when(n.get("615136",t),e.getDictList("615907","hzb_mgift_status"),e.getUser()).then(function(n,t,s){if(n.success&&t.success&&s.success){var i=t.data,a=n.data.status,o=n.data.slogan,c=n.data.code;u=s.data.mobile;var r="";r+='<div class="wp100 fl s_12">',r+='<p class="t_white"><span>'+o+"</span></p>",r+='<p class=" t_white pt10">红包编号:<span class="ml20">'+c+"</span></p>",r+='<p class=" t_white pt8 fs13">状态：<span class="status">'+e.getDictListValue(a,i)+"</span></p></div>",$(".hzbList").append(r)}else e.showMsg(n.msg&&t.msg)})}function c(){n.get("807910",{companyCode:SYSTEM_CODE,url:location.href.split("#")[0]}).then(function(e){r(e.data)},function(){})}function r(e){i.config({appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["onMenuShareQQ","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQZone"]}),i.ready(function(){i.onMenuShareAppMessage({title:"菜狗商城,领取定向红包",desc:"菜狗商城,领取定向红包",link:window.location.href+"&userReferee="+g,imgUrl:SHAKEURL+"/static/images/logo2.png",success:function(){l()},fail:function(e){alert(JSON.stringify(e))}}),i.onMenuShareTimeline({title:"菜狗商城,领取定向红包",desc:"菜狗商城,领取定向红包",link:window.location.href+"&userReferee="+g,imgUrl:SHAKEURL+"/static/images/logo2.png",success:function(){l()},fail:function(e){alert(JSON.stringify(e))}}),i.onMenuShareQQ({title:"菜狗商城,领取定向红包",desc:"菜狗商城,领取定向红包",link:window.location.href+"&userReferee="+g,imgUrl:SHAKEURL+"/static/images/logo2.png",success:function(){l()},fail:function(e){alert(JSON.stringify(e))}}),i.onMenuShareQZone({title:"菜狗商城,领取定向红包",desc:"菜狗商城,领取定向红包",link:window.location.href+"&userReferee="+g,imgUrl:SHAKEURL+"/static/images/logo2.png",success:function(){l()},fail:function(e){alert(JSON.stringify(e))}})}),i.error(function(e){alert("微信分享sdk初始化失败"+JSON.stringify(e))})}function l(){n.get("615130",{code:f}).then(function(n){n.success?location.href="redPapper.html?hzbCode="+p:e.showMsg(n.msg)})}var u,p=e.getUrlParam("hzbCode"),f=e.getUrlParam("hbCode"),g=e.getUserId();a()});