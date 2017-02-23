function play68_submitScore(score) {
    updateShareScore(score);
    //Play68.shareFriend();
    //setTimeout( function() { Play68.shareFriend(); }, 1000 )
}


function updateShare(score) {
    var descContent = "补砖块，我是";
    if (score <= 0) {
        descContent += "入门小工";
    } else if (score < 50) {
        descContent += "初级小工";
    } else if (score < 100) {
        descContent += "中级小工";
    } else if (score < 150) {
        descContent += "高级小工";
    } else if (score < 200) {
        descContent += "入门工程师";
    } else if (score < 250) {
        descContent += "初级工程师";
    } else if (score < 300) {
        descContent += "中级工程师";
    } else if (score < 350) {
        descContent += "高级工程师";
    } else if (score < 400) {
        descContent += "建造师";
    } else if (score < 450) {
        descContent += "中级建造师";
    } else if (score < 500) {
        descContent += "高级建造师";
    } else if (score > 500) {
        descContent += "非人类";
    }
    if (score > 0) {
        document.title = descContent + ',玩了' + score + '分，你能超越我么？';
        dzt({
            title: '补砖块', // 分享标题
            desc: descContent + ',玩了' + score + '分，你能超越我么？', // 分享描述
            link: shareurl, // 分享链接
            imgUrl: 'http://139.quqzxd.cn/20/bzk/wx.jpg', // 分享图标
            success: function () {////分享成功后执行的方法

            }
        });
    }

    else {
        document.title = "据说只有1%的人能玩超过200分！";
        dzt({
            title: '补砖块', // 分享标题
            desc: '据说只有1%的人能玩超过200分！.', // 分享描述
            link: shareurl, // 分享链接
            imgUrl: 'http://139.quqzxd.cn/20/bzk/wx.jpg', // 分享图标
            success: function () {////分享成功后执行的方法

            }
        });
    }
    appid = '';
    //Play68.setShareInfo(shareTitle,descContent);
    // document.title = shareTitle;
}


dz({
    debug: false,
    appid: shareappid,  ////公众号Appid
    oauthurl: escape(window.location.href),////当前页面完整URL
    timestamp: '1414587457',////生成签名的时间戳
    nonceStr: 'Wm3WZYTPz0wzccnW',////生成签名的随机串
    title: '补砖块', // 分享标题
    desc: '据说只有1%的人能玩超过200分！.', // 分享描述
    link: shareurl, // 分享链接
    imgUrl: 'http://139.quqzxd.cn/20/bzk/wx.jpg', // 分享图标
    success: function () {////分享成功后执行的方法

    }
});

setTimeout(function () {

}, 8000);


