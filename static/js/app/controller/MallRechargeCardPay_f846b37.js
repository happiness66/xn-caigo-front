define("js/app/controller/MallRechargeCardPay",["js/app/controller/base","js/app/util/ajax","js/lib/handlebars.runtime-v3.0.3"],function(n,o){function a(){t(),e(),i=1e3*i,$("#needAmount").val(n.formatMoneyD(i)+"元"),$("#CGBAmount").val(n.formatMoneyD(i*r)+"菜狗币"),$("#totalAmount").text(n.formatMoneyD(i*r)),$("#loaddingIcon").addClass("hidden")}function t(){return o.get("802503",{userId:n.getUserId()}).then(function(o){if(o.success){var a=o.data;a.forEach(function(o){"CGB"==o.currency&&$("#CGBRemain").html(n.formatMoneyD(o.amount))})}})}function e(){$("#sbtn").on("click",function(){$("#integral").text(n.formatMoneyD(i*r)),$("#od-mask, #od-tipbox").removeClass("hidden")}),$("#odOk").on("click",function(){d()}),$("#odCel").on("click",function(){$("#od-mask, #od-tipbox").addClass("hidden")})}function d(){$("#loaddingIcon").removeClass("hidden");var a=[];a.push(s),o.post("808651",{json:{codeList:a,payType:90}}).then(function(o){$("#loaddingIcon").addClass("hidden"),$("#od-mask, #od-tipbox").addClass("hidden"),o.success?location.href="./pay_success.html":"账户余额不足"==o.msg?n.confirm("账户余额不足，是否前往充值？","否","是").then(function(){location.href="../pay/buyCgM.html"},function(){location.href="../user/vorder_list.html"}):n.showMsg(res.msg)})}var s=n.getUrlParam("code"),i=n.getUrlParam("a"),r=n.getUrlParam("rate");a()});