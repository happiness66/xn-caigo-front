define("js/app/controller/indiana/Introduce",["js/app/controller/base","js/app/util/ajax","js/app/module/loading/loading"],function(n,a,e){function t(){e.createLoading(),n.getSysConfig("807717","treasure_rule").then(function(a){a.success?($("#title").html(a.data.cvalue),$("#content").html(a.data.note)):n.showMsg(a.msg),e.hideLoading()},function(){n.showMsg("加载失败"),e.hideLoading()})}t()});