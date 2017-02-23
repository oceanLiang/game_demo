var Silde = {};

Silde.G = {
    score: 0,
    errorTimes: 3
};
Silde.Sprite = [];

var _timer = parseInt(Date.now() + Math.random() * 100000000000);
var shareData = {
    'imgUrl': 'http://wbpkh5001.17c.cn/html5/h5mini/vf/images/logo.jpg',
    'timeLineLink': 'http://url.cn/SKGZuK?timer=' + _timer,
    'tTitle': '果蔬达人',
    'tContent': '根据最下面的图案，快速选择水果or蔬菜，挑战吧！'
};

var getGameOverText = function(lv) {
    var lv = Silde.G.score;
    var percent = lv * 3.33;
    percent = percent > 90 ? 90 + lv * 0.33 : percent;
    percent = Math.ceil(Math.min(percent, 100));
    return {
        percent: percent
    };
}

Silde.Boot = Phaser.State.extend({

    initialize: function(game) {},

    preload: function() {},

    create: function() {
        //设置视频模式
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        if (this.game.device.desktop) {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        } else {
            this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        }
        this.scale.setScreenSize(true);
        //切换到 Loading 画面
        this.state.start('Game');
    }

});