define("js/app/module/bindMobileSms/bindMobile",["js/lib/jquery-2.1.4","js/app/module/validate/validate","js/app/module/loading/loading","js/app/util/ajax","js/app/module/smsCaptcha/smsCaptcha"],function(i,t,n,e,o){function r(){i("head").append("<style>"+a+"</style>")}var l='<div id="bindMobileSmsWrap" class="right-left-cont">\r\n    <div class="right-left-cont-title">\r\n        <!--<div class="right-left-cont-back" id="bind-mobile-back"></div>-->\r\n        <div class="right-left-cont-title-name">绑定手机号</div>\r\n    </div>\r\n    <form class="right-left-cont-info" id="bind-mobile-formSms">\r\n        <div class="right-left-cont-info-input-wrap">\r\n            <span class="right-left-cont-info-input-left">手机号：</span>\r\n            <div class="right-left-cont-info-input-right">\r\n                <input type="tel" pattern="[0-9]*" name="bind-mobileSms" id="bind-mobileSms" placeholder="请输入手机号">\r\n            </div>\r\n        </div>\r\n        <div class="right-left-cont-info-input-wrap">\r\n            <span class="right-left-cont-info-input-left">验证码：</span>\r\n            <div class="right-left-cont-info-input-right">\r\n                <div class="pr110">\r\n                    <div class="p-r">\r\n                        <input type="number" pattern="[0-9]*" name="bind-smsCaptcha" id="bind-smsCaptcha" placeholder="短信验证码">\r\n                    </div>\r\n                </div>\r\n                <input type="button" value="获取验证码" id="bind-getVerification" class="captcha-btn">\r\n            </div>\r\n        </div>\r\n        <div class="right-left-cont-btn-wrap">\r\n            <input type="button" id="bind-mobile-btnSms" value="设置">\r\n        </div>\r\n    </form>\r\n</div>',a="*{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}input,button{-webkit-appearance:none;border:0;outline:0}.right-left-cont{position:absolute;top:0;left:100%;width:100%;height:100%;display:none;z-index:1024;background-color:#f0f0f0}.right-left-cont-title{height:40px;line-height:40px;font-size:16px;color:#000;position:relative;border-bottom:1px solid #ededed;background-color:#fff}.right-left-cont-back{width:40px;height:40px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAhCAMAAADj/gtmAAAAXVBMVEUAAACPj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4/ShKOpAAAAHnRSTlMA+/ICzBILBtT27OfYwrupnmhYSTsyJxm2sWBQQSxZCgntAAAAc0lEQVQoz4XSSQ6DMBBEUXAmJxAS5rnuf0zYFl8CL58suV1dyeF0eXGUTNFlzZT3Ju1HEXJ/mDThWpag79OkfotSuMyphpdJlWqE/FymXW4mpfS/kiQomuAWjC9yrrPp+UcmwbyYKrM/M+6R22Yn2Bz2awMrKgnwgdZu+wAAAABJRU5ErkJggg==);background-position:10px center;background-repeat:no-repeat;position:absolute;left:0;top:0;background-size:12px}.right-left-cont-title-name{text-align:center;color:#333}.right-left-cont-info{border-top:1px solid #ededed}.right-left-cont-info-input-wrap{height:50px;background-color:#fff;border-bottom:1px solid #ededed;line-height:50px;position:relative}.right-left-cont-info-input-left{padding-left:15px;padding-right:15px;color:#484848;font-size:15px}.right-left-cont-info-input-right{position:absolute;width:100%;padding-left:100px;left:0;top:0}.right-left-cont-info-input-right input[type=text],.right-left-cont-info-input-right input[type=number]{width:100%;padding-right:15px;color:#484848;font-size:15px;background-color:transparent}.pr110{padding-right:110px}.captcha-btn{position:absolute;width:90px;height:40px;top:4.5px;right:10px;font-size:13px;color:#fff;background-color:#F64444;border-radius:3px}.p-r{position:relative}",d={},p=!0;r();var s={addMobileCont:function(t){if(t=t||{},d=i.extend(d,t),!this.hasMobileCont()){{i(l)}i("body").append(l)}var n=i("#bindMobileSmsWrap");d.title&&n.find(".right-left-cont-title-name").html(d.title),d.mobile&&i("#bind-mobileSms").val(d.mobile);return p&&(n.find(".right-left-cont-title").on("touchmove",function(i){i.preventDefault()}),i("#bind-mobile-btnSms").on("click",function(){i("#bind-mobile-formSms").valid()&&s.hideMobileCont(d.success)}),i("#bind-mobile-formSms").validate({rules:{"bind-smsCaptcha":{sms:!0,required:!0},"bind-mobileSms":{required:!0,mobile:!0}},onkeyup:!1}),o.init({checkInfo:function(){return i("#bind-mobileSms").valid()},bizType:"805151",id:"bind-getVerification",mobile:"bind-mobileSms"})),p=!1,this},hasMobileCont:function(){return i("#bindMobileSmsWrap").length?!0:!1},showMobileCont:function(){if(this.hasMobileCont()){var t=i("#bindMobileSmsWrap");t.css("top",i(window).scrollTop()+"px"),t.show().animate({left:0},200,function(){d.showFun&&d.showFun()})}return this},hideMobileCont:function(t){if(this.hasMobileCont()){var n=i("#bindMobileSmsWrap");n.animate({left:"100%"},200,function(){n.hide(),t&&t(i("#bind-mobileSms").val(),i("#bind-smsCaptcha").val()),i("#bind-mobileSms").val(""),i("#bind-smsCaptcha").val(""),n.find("label.error").remove()})}return this}};return s});