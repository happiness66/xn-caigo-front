define("js/app/controller/user/ChangeMobile",["js/app/controller/base","js/app/util/ajax","js/app/util/dialog"],function(n,e,i){$(function(){function n(){t()}function t(){$("#verification").on("change",c),$("#mobile").on("change",a),$("#sbtn").on("click",function(){l()}),$("#getVerification").one("click",function n(){a()?o():$("#getVerification").one("click",n)})}function o(){$("#getVerification").addClass("cancel-send");var n={bizType:"805047",mobile:$("#mobile").val(),kind:"f1"};e.post("805904",{json:n}).then(function(n){if(n.success)for(var e=0;60>=e;e++)!function(n){setTimeout(function(){60>n?$("#getVerification").text(60-n+"s"):$("#getVerification").text("获取验证码").removeClass("cancel-send").one("click",function e(){a()?o():$("#getVerification").one("click",e)})},1e3*n)}(e);else{$("#getVerification").one("click",function(){a()?o():$("#getVerification").one("click",innerFunc)});var i=$("#verification").parent(),t=i.find("span.warning")[2];$(t).fadeIn(150).fadeOut(3e3)}})}function a(){var n,e=$("#mobile")[0],i=e.parentNode;return""==e.value?(n=$(i).find("span.warning")[0],$(n).fadeIn(150).fadeOut(3e3),!1):/^1[3,4,5,7,8]\d{9}$/.test(e.value)?!0:(n=$(i).find("span.warning")[1],$(n).fadeIn(150).fadeOut(3e3),!1)}function c(){var n,e=$("#verification")[0],i=e.parentNode;return""==e.value?(n=$(i).find("span.warning")[0],$(n).fadeIn(150).fadeOut(3e3),!1):/^[\d]{4}$/.test(e.value)?!0:(n=$(i).find("span.warning")[1],$(n).fadeIn(150).fadeOut(3e3),!1)}function f(){return a()&&c()?!0:!1}function s(){var n={mobile:$("#mobile").val(),kind:"f1"};e.post("805040",{json:n}).then(function(n){if(n.success)u();else{var e=$("#mobile").parent(),i=e.find("span.warning")[2];$(i).fadeIn(150).fadeOut(3e3)}})}function r(){$("#sbtn").text("设置"),d("手机号修改成功！"),setTimeout(function(){location.href="./user_info.html"},1e3)}function u(){$("#sbtn").attr("disabled","disabled").text("设置中...");var n=sessionStorage.getItem("userId"),i={newMobile:$("#mobile").val(),smsCaptcha:$("#verification").val(),userId:n};e.post("805047",{json:i}).then(function(n){n.success?r():($("#sbtn").removeAttr("disabled").text("设置"),d(n.msg))})}function l(){f()&&s()}function d(n){var e=i({content:n,quickClose:!0});e.show(),setTimeout(function(){e.close().remove()},2e3)}n()})});