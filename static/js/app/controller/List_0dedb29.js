define("js/app/controller/List",["js/app/controller/base","js/app/util/ajax","js/app/util/dialog"],function(t,e,n){$(function(){function s(){a(),t.getAddress().then(function(t){g=t.citylist,U.province=g[_].p,x&&(U.city=g[_].c[x].n),h(),i(),u(),l()})}function a(){var t={parentCode:"0",status:"1",orderColumn:"order_no",orderDir:"asc",type:"2"};e.get("808007",t).then(function(t){if(t.success&&t.data.length){for(var e=0,n="";e<t.data.length;e++)k[t.data[e].code]=t.data[e].name,n+='<li l-type="'+t.data[e].code+'">'+t.data[e].name+"</li>";$("#consumeUl").html(n).find("li[l-type='"+y+"']").addClass("on"),$("#lTypes").find("span").text(k[y])}else v("暂时无法获取分类列表")},function(){v("暂时无法获取分类列表")})}function i(){var t="<li class='all'>全部</li>";x?(A=g[_].c[x].a,$.each(A,function(e,n){t+="<li>"+n.s+"</li>"})):(A=g[_].c,$.each(A,function(e,n){t+="<li>"+n.n+"</li>"})),$("#consumeAreaUl").html(t),$("#lAreas").find("span").text("全部")}function l(){$("#consume-ul").on("click",".good-div",function(t){var e=$(this),n=e.find("img");t.preventDefault(),t.stopPropagation(),-1!=n.attr("src").indexOf("/good.png")?r(this,n):r(this,n,!0)}),$(window).on("scroll",function(){$(this);I&&!D&&$(document).height()-$(window).height()-10<=$(document).scrollTop()&&$("#mask").hasClass("hidden")&&(I=!1,h(),u())}),function(){function t(){var t=$("#searchInput").val();t&&""!==t.trim()?t!=e&&(d($("#searchInput")[0]),e=t):($("#searchUl").addClass("hidden").empty(),e="")}var e="";$("#searchInput").on("focus",function(){var e=setInterval(t,150);$(this).on("blur",function(){clearInterval(e)}),c()})}(),$("#lTypes").on("click",function(){var t=$("#mask"),e=$("#cListDiv");e.hasClass("hidden")?(t.hasClass("hidden")?t.removeClass("hidden"):$("#cAreaDiv").addClass("hidden"),e.removeClass("hidden")):(t.addClass("hidden"),e.addClass("hidden"))}),$("#consumeUl").on("click","li",function(){U.type=$(this).attr("l-type"),$("#lTypes").find("span").text(k[U.type]),$("#consumeUl").find("li.on").removeClass("on").siblings("li[l-type='"+U.type+"']").addClass("on"),o()}),$("#lAreas").on("click",function(){var t=$("#mask"),e=$("#cAreaDiv");e.hasClass("hidden")?(t.hasClass("hidden")?t.removeClass("hidden"):$("#cListDiv").addClass("hidden"),e.removeClass("hidden")):(t.addClass("hidden"),e.addClass("hidden"))}),$("#consumeAreaUl").on("click","li",function(){var t=$(this);t.hasClass("all")?(U[b]="",$("#lAreas").find("span").text("全部")):(U[b]=t.text(),$("#lAreas").find("span").text(U[b])),o()}),$("#mask").on("click",function(){c()})}function o(){I=!1,D=!1,w=!0,U.start=1,$("#consume-ul").empty(),h(),u(),c()}function c(){$("#mask, #cListDiv, #cAreaDiv").addClass("hidden")}function d(t){var n={province:U.province,city:U.city,area:U.area,type:U.type,name:t.value,limit:10,start:1,orderDir:"desc",orderColumn:"total_dz_num"};e.get(C,n).then(function(t){if(t.success){var e="",n=t.data.list;n.length?(n.forEach(function(t){e+='<li><a class="show" href="./detail.html?c='+t.code+'">'+t.name+"</a></li>"}),$("#searchUl").removeClass("hidden").html(e)):$("#searchUl").empty().addClass("hidden")}})}function r(n,s,a){var i=$(n),l=i.closest("li[code]").attr("code"),o=i.find("span");$("#loaddingIcon").removeClass("hidden"),e.post("808240",{json:{storeCode:l,type:1,userId:t.getUserId()}}).then(function(t){$("#loaddingIcon").addClass("hidden"),t.success?a?(o.text(+o.text()-1),s.attr("src","/static/images/good.png")):(o.text(+o.text()+1),s.attr("src","/static/images/good1.png")):t.timeout?location.href="../user/login.html?return="+encodeURIComponent(location.pathname+location.search):v(t.msg)})}function u(){e.get(C,U).then(function(e){if(e.success){var n=e.data,s=+n.totalCount,a=n.list;if((s<=U.limit||a.length<U.limit)&&(D=!0),a.length){for(var i="",l=0;l<a.length;l++)i+='<li class="ptb8 clearfix b_bd_b plr10" code="'+a[l].code+'"><a class="show p_r min-h100p" href="./detail.html?c='+a[l].code+'"><div class="consume-center-wrap default-bg"><img class="center-img1 center-lazy hp100" src="'+t.getImg(a[l].advPic,1)+'"/></div><div class="consume-right-wrap"><p class="tl line-tow t_bold">'+a[l].name+'</p><p class="tl pt4 line-tow s_10 t_80">'+a[l].slogan+"</p>",i+=a[l].province==a[l].city?'<p class="tl pt4 line-tow s_10 t_80">'+a[l].province+" "+a[l].area+" "+a[l].address+'</p></div><div class="good-div">':'<p class="tl pt4 line-tow s_10 t_80">'+a[l].province+" "+a[l].city+" "+a[l].address+'</p></div><div class="good-div">',i+=a[l].isDZ?'<img src="/static/images/good1.png"/><span class="inline_block va-m pl6 t_80">'+a[l].totalDzNum+"</span>":'<img src="/static/images/good.png"/><span class="inline_block va-m pl6 t_80">'+a[l].totalDzNum+"</span>",i+="</div></a></li>";$("#consume-ul").append(i),m(),U.start+=1}else p()}else p();w=!1,I=!0})}function p(){w?f():m()}function h(){$("#consume-ul").append('<li class="scroll-loadding"></li>')}function m(){$("#consume-ul").find(".scroll-loadding").remove()}function f(){$("#consume-ul").html('<li style="text-align: center;line-height: 93px;">暂时无法获取商家信息</li>')}function v(t,e){var s=n({content:t,quickClose:!0});s.show(),setTimeout(function(){s.close().remove()},e||2e3)}var g,C="808217",y=t.getUrlParam("t")||"",_=t.getUrlParam("p")||"",x=t.getUrlParam("c")||"",k={},U={type:y,province:"",city:"",area:"",limit:15,start:1,orderDir:"desc",orderColumn:"total_dz_num",status:"2",userId:t.getUserId()},w=!0,D=!1,I=!1,b=x?"area":"city",A=[];s()})});