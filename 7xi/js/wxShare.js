var wxtitle = "杜杜的七夕情人节";
var wxdesc = "据说玩了这个游戏的人，都终成眷属了！";
var wxlink = "http://mobi.durex.com.cn/CVD/Index.html";
var wximgUrl = "http://mobi.durex.com.cn/CVD/images/share.jpg";
window.addEventListener('load', onloadFun, false);

function onloadFun() {
   /*
	$.ajax({
        async: false,
        url: 'http://mobi.durex.com.cn/WXApi/m/GetWXJsApiByAjax.aspx?urlStr=' + encodeURIComponent(window.location.href),
        type: "GET",
        dataType: 'jsonp',
        jsonp: 'callback',
        timeout: 5000,
        beforeSend: function () {
        },
        success: function (json) {
            wx.config({
                debug: false,
                appId: json["appId"],
                timestamp: json["timestamp"],
                nonceStr: json["nonceStr"],
                signature: json["signature"],
                jsApiList: [
                            'checkJsApi',
                            'onMenuShareTimeline',
                            'onMenuShareAppMessage',
                            'scanQRCode'
                          ]
            });
            wx.ready(function () {
                wx.onMenuShareAppMessage({
                    title: wxtitle,
                    desc: wxdesc,
                    link: wxlink,
                    imgUrl: wximgUrl,
                    trigger: function (res) {
                    },
                    success: function (res) {
                        _smq.push(['custom', '七夕小游戏', '分享', '分享给好友']);
                        _gaq.push(['_trackEvent', '七夕小游戏', '分享', '分享给好友']);
                    },
                    cancel: function (res) {
                        _smq.push(['custom', '七夕小游戏', '分享', '分享给好友']);
                        _gaq.push(['_trackEvent', '七夕小游戏', '分享', '分享给好友']);
                    },
                    fail: function (res) {
                        _smq.push(['custom', '七夕小游戏', '分享', '分享给好友']);
                        _gaq.push(['_trackEvent', '七夕小游戏', '分享', '分享给好友']);
                    }
                });

                wx.onMenuShareTimeline({
                    title: wxtitle+","+wxdesc,
                    link: wxlink,
                    imgUrl: wximgUrl,
                    trigger: function (res) {
                    },
                    success: function (res) {
                        _smq.push(['custom', '七夕小游戏', '分享', '分享至朋友圈']);
                        _gaq.push(['_trackEvent', '七夕小游戏', '分享', '分享至朋友圈']);
                    },
                    cancel: function (res) {
                        _smq.push(['custom', '七夕小游戏', '分享', '分享至朋友圈']);
                        _gaq.push(['_trackEvent', '七夕小游戏', '分享', '分享至朋友圈']);
                    },
                    fail: function (res) {
                        _smq.push(['custom', '七夕小游戏', '分享', '分享至朋友圈']);
                        _gaq.push(['_trackEvent', '七夕小游戏', '分享', '分享至朋友圈']);
                    }
                });
            });
        },
        complete: function (XMLHttpRequest, textStatus) {
        },
        error: function (xhr) {
        }
    });*/
}