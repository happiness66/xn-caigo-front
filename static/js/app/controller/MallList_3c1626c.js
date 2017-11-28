define("js/app/controller/MallList",["js/app/controller/base","js/app/util/ajax","js/lib/iscroll","js/app/module/loadImg/loadImg"],function(l,a,e,s){$(function(){function t(){var l="",e="";param={parentCode:"0",status:"1",start:"1",type:"1",limit:"10",companyCode:COMPANYCODE},o(),a.post("808005",{json:param}).then(function(a){if(a.success){for(var s=a.data.list,t=0;t<s.length;t++){var o=s[t];l+='<li l_type="'+o.code+'">'+o.name+"</li>",e+='<li l_type="'+o.code+'" class="wp33 tl fl">'+o.name+"</li>"}var r=$("#scroller");r.find("ul").html(l),$("#allItem").find("ul").html(e),n(),u==u||s[0].code,r.find("ul>li[l_type='"+u+"']").click()}})}function n(){for(var l=$("#scroller"),a=l.find("ul li"),s=0,t=0;s<a.length;s++)t+=$(a[s]).width()+29;$("#scroller").css("width",t),m=new e("#mallWrapper",{scrollX:!0,scrollY:!1,mouseWheel:!0,click:!0})}function o(){$("#down").on("click",function(){var l=$(this);l.hasClass("down-arrow")?($("#allCont").removeClass("hidden"),l.removeClass("down-arrow").addClass("up-arrow")):($("#allCont").addClass("hidden"),l.removeClass("up-arrow").addClass("down-arrow"))}),$("#mall-mask").on("click",function(){$("#down").click()}),$("#allItem").on("click","li",function(){var l=$(this).attr("l_type");$("#scroller").find("li[l_type='"+l+"']").click(),$("#down").click()}),$("#scroller").on("click","li",function(){var l=$(this);$("#mallWrapper").find(".current").removeClass("current"),l.addClass("current"),m.scrollToElement(this),lType=l.attr("l_type"),f=1,r(lType);var a=$("#allItem");a.find("li.current").removeClass("current"),a.find("li[l_type='"+lType+"']").addClass("current")})}function r(l){$("#mlTable ul").empty();var e="808005";param1={parentCode:l,status:"1",start:"0",limit:"100",companyCode:COMPANYCODE},a.post(e,{json:param1}).then(function(a){if(a.success){var e=a.data.list;$.each(e,function(a,e){var s=e.name,t=e.code,n="<li l_code="+t+" class='wp20 tc s_10'>"+s+"</li>";n=$(n),n.on("click",function(){f=1,i(t,l),$(this).addClass("active").siblings().removeClass("active")}),$("#mlTable ul").append(n)});var s=$("#mlTable ul li:eq(0)").attr("l_code");"number"==typeof+s&&($("#mlTable ul li:eq(0)").addClass("active").siblings().removeClass("active"),i(s,l)),$("#cont").hide(),$(window).on("scroll",function(){C&&!v&&$(document).height()-$(window).height()-10<=$(document).scrollTop()&&(C=!1,d(),i(s,l))})}else c()})}function i(e,t){$("#contUl").empty(),param1={category:t,status:"3",type:e,companyCode:COMPANYCODE,start:f,limit:h,orderColumn:"order_no",orderDir:"asc"},a.post("808025",{json:param1}).then(function(a){if(a.success){var e=a.data.list,t=+a.data.totalCount;(h>=t||e.length<h)&&(v=!0);var n="";$.each(e,function(a,e){var s=e.advPic,t=e.name,o=e.slogan,r=e.originalPrice?l.formatMoney(e.originalPrice):"",i=e.price2?l.formatMoney(e.price2)+"菜狗币":"",c=e.price3?l.formatMoney(e.price3)+"抵金券":"",d=e.code;n+='<li class="ptb8 clearfix b_bd_b plr10"><a class="show p_r min-h100p" href="../operator/buy.html?code='+d+'"><div class="order-img-wrap tc"><img class="center-img1" src="'+l.getImg(s,1)+'"></div><div class="order-right-wrap clearfix"><p class="t_323232 s_12 line-tow">'+t+'</p><p class="t_999 s_10 line-tow">'+o+'</p><p class="t_red ptb4">',i&&c?n+='<span class="s_12 t_red">'+i+'</span>+<span class="s_12 t_red">'+c+"</span>":i&&!c?n+='<span class="s_12 t_red">'+i+"</span>":!i&&c&&(n+='<span class="s_12 t_red">'+c+"</span>"),n+='</p><p class="s_10">市场参考价：<span>'+r+"</span>元</p></div></a></li>"}),p(),$("#contUl").append(s.loadImg(n)),f++}C=!0})}function c(){$("#cont").hide(),$("#mlTable").html('<div class="bg_fff" style="text-align: center;line-height: 150px;">暂无商品</div>')}function d(){$("#contUl").append('<p class="scroll-loadding"></p>')}function p(){$("#contUl").find(".scroll-loadding").remove()}var m,u=l.getUrlParam("c")||"",f=(($(window).width()-20)/3-20+"px",1),h=10,v=!1,C=!1;t(),l.getCartLength()})});