var yl;
var dzdata;
function dz(kk) {
    yl = kk;
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://share.zbong.cn/Action/GetSinature.ashx?date=" + new Date() + "&type=g&url=" + kk.oauthurl + "&appid=" +
            kk.appid + "&timestamp=" + kk.timestamp + "&nonceStr=" + kk.nonceStr + "&callbackparam=callbackparam";
    var head = document.getElementsByTagName("head")[0];
    head.insertBefore(script, head.lastChild);
}

function callbackparam(data) {
    dzdata = data;
    wx.config({
        debug: yl.debug, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: yl.appid, // 必填，公众号的唯一标识
        timestamp: yl.timestamp, // 必填，生成签名的时间戳
        nonceStr: yl.nonceStr, // 必填，生成签名的随机串
        signature: data[0].ticket, // 必填，签名，见附录1
        jsApiList: ['onMenuShareAppMessage',
            'onMenuShareTimeline',
         'stopVoice',
         'pauseVoice',
         'playVoice',
         'onVoiceRecordEnd',
         'stopRecord',
         'startRecord'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
    wx.ready(function () {
        wx.onMenuShareAppMessage({
            title: yl.title, // 分享标题
            desc: yl.desc, // 分享描述
            link: yl.link, // 分享链接
            imgUrl: yl.imgUrl, // 分享图标
            type: 'link', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                // 用户确认分享后执行的回调函数
                kk.success();

            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareTimeline({
            title: yl.desc, // 分享标题
            link: yl.link, // 分享链接
            imgUrl: yl.imgUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
                yl.success();
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareQQ({
            title: yl.title, // 分享标题
            desc: yl.desc, // 分享描述
            link: yl.link, // 分享链接
            imgUrl: yl.imgUrl, // 分享图标
            success: function () {
                yl.success();
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。

    });
    wx.error(function (res) {
        
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    });
}


function dzt(kk) {
    wx.onMenuShareAppMessage({
        title: kk.title, // 分享标题
        desc: kk.desc, // 分享描述
        link: kk.link, // 分享链接
        imgUrl: kk.imgUrl, // 分享图标
        type: 'link', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
            // 用户确认分享后执行的回调函数
            kk.success();

        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    });
    wx.onMenuShareTimeline({
        title: kk.desc, // 分享标题
        link: kk.link, // 分享链接
        imgUrl: kk.imgUrl, // 分享图标
        success: function () {
            // 用户确认分享后执行的回调函数
            kk.success();
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    });
    wx.onMenuShareQQ({
        title: kk.title, // 分享标题
        desc: kk.desc, // 分享描述
        link: kk.link, // 分享链接
        imgUrl: kk.imgUrl, // 分享图标
        success: function () {
            kk.success();
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    });

}
