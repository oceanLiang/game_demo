/**
 * global config
var weixin_share_config = {
	title: '默认分享标题',
	desc: '默认分享描述',
	link: 'http://www.wmy-ad.com/xxx/xxx',
	params: '',
	imgUrl: 'http://www.wmy-ad.com/xxx/xxx/img/weixin.jpg',
	jsApiList: [],
	success: function (type) {
		console.log(type + '已分享');
	},
	cancel: function (type) {
		console.log(type + '已取消');
	},
	timeline: {
	    title: '朋友圈分享标题'
	},
	appmessage: {
	    title: '好友分享标题',
	    desc: '好友分享描述'
	}
};
*/
if (!window.weixin_share_config) {
	alert('请在加载该js前设置好全局 weixin_share_config');
}
function shareWeixin(opt){
	var config = $.extend(window.weixin_share_config, opt);
	if(!config.success) config.success = function(type){console.log('share to ' + type + ' success')};
	if(!config.cancel) config.cancel = function(type){console.log('share to ' + type + ' cancel')};
	wx.ready(function () {
		wx.onMenuShareTimeline({ // 分享到朋友圈
			title: (config.timeline && config.timeline.title)||config.title,
			link: config.link+(config.params || ""),
			imgUrl: config.imgUrl,
			success: function(o){config.success.apply(config,['timeline',o])},
			cancel: function(o){config.cancel.apply(config,['timeline',o])}
		});
		wx.onMenuShareAppMessage({ // 分享给好友
			title: (config.appmessage && config.appmessage.title)||config.title,
			desc: (config.appmessage && config.appmessage.desc)||config.desc,
			link: config.link+(config.params || ""),
			imgUrl: config.imgUrl,
			type: '',
			dataUrl: '',
			success: function(o){config.success.apply(config,['appmessage',o])},
			cancel: function(o){config.cancel.apply(config,['appmessage',o])}
		});
	});
}
$.ajax({
	url: 'http://www.wmy-ad.com/tools/weixin/api.php?method=getSignPackage',
	dataType: 'jsonp',
	success: function(o) {
		console.log(o.data);
		var jsApiList = ['onMenuShareTimeline','onMenuShareAppMessage'];
		if (weixin_share_config.jsApiList) {
			for (var i in weixin_share_config.jsApiList)
				jsApiList.push(weixin_share_config.jsApiList[i]);
		}
		wx.config({
			debug: weixin_share_config.debug || false,
			appId: o.data.appId,
			timestamp: o.data.timestamp,
			nonceStr: o.data.nonceStr,
			signature: o.data.signature,
			rawString: o.data.rawString,
			jsApiList: jsApiList
		});
		shareWeixin();
	},
	error: function(xhr,e,t) {
		alert(e);
	}
});