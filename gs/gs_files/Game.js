Silde.Game = Phaser.State.extend({

	preload: function() {
		this.load.image('description', 'images/description.png');
		this.load.image('bg', 'images/bg.png');
		this.load.image('life', 'images/life.png');
		this.load.image('time', 'images/time.png');
		this.load.image('title', 'images/title.png');
		this.load.image('startBtn', 'images/start.png');
		this.load.image('mostTop', 'images/most_top.png');
		this.load.image('vegetables', 'images/vegetables.png');
		this.load.image('fruits', 'images/fruits.png');
		this.load.image('fruit_1', 'images/fruit_1.png');
		this.load.image('fruit_2', 'images/fruit_2.png');
		this.load.image('fruit_3', 'images/fruit_3.png');
		this.load.image('fruit_4', 'images/fruit_4.png');
		this.load.image('fruit_5', 'images/fruit_5.png');
		this.load.image('fruit_6', 'images/fruit_6.png');
		this.load.image('fruit_7', 'images/fruit_7.png');
		this.load.image('fruit_8', 'images/fruit_8.png');
		this.load.image('fruit_9', 'images/fruit_9.png');
		this.load.image('vegetable_1', 'images/vegetable_1.png');
		this.load.image('vegetable_2', 'images/vegetable_2.png');
		this.load.image('vegetable_3', 'images/vegetable_3.png');
		this.load.image('vegetable_4', 'images/vegetable_4.png');
		this.load.image('vegetable_5', 'images/vegetable_5.png');
		this.load.image('vegetable_6', 'images/vegetable_6.png');
		this.load.image('vegetable_7', 'images/vegetable_7.png');
		this.load.image('vegetable_8', 'images/vegetable_8.png');
		this.load.image('vegetable_9', 'images/vegetable_9.png');
		this.load.image('overbg', 'images/over.png');
		this.load.image('share', 'images/share.png');
		this.load.image('tryBtn', 'images/retry.png');

		LoadingUI.load(this.game);
	},

	create: function() {
		var bg, titles, descriptions, startBtn;
		this.bg = bg = this.game.add.sprite(0, 0, 'bg');
		this.titles = title = this.game.add.sprite(120, 135, 'title');
		this.descriptions = description = this.game.add.sprite(200, 280, 'description');
		this.startBtn = startBtn = this.game.add.sprite(220, 520, 'startBtn');
		startBtn.inputEnabled = true;
		startBtn.events.onInputDown.add(this.startClick, this); //绑定事件  
		
		var me = this;
		//document.getElementById('moregame').style.display="block";
		
	
	},
	weixinShare: function() {
		

	},
	weixinInfo: function() {
		var info = getGameOverText(Silde.G.score);
		this.lastGamePercent = info.percent;
	},
	startClick: function() {
		
		this.startDestroy();
		this.createGame();
	},
	startDestroy: function() {
		this.titles.destroy();
		this.descriptions.destroy();
		this.startBtn.destroy();
		this.bg.destroy();
	},
	gameDestroy: function() {
		this.bg.destroy();
		this.mostTop.destroy();
		this.text.destroy();
		this.chance.destroy();
		this.vegetables.destroy();
		this.fruits.destroy();
		this.timeSign.destroy();
		this.life.destroy();
		for (var n = 0; n < 5; n++) {
			Silde.Sprite[n].destroy();
		}
	},
	overDestroy: function() {
		this.bg.destroy();
		this.overBg.destroy();
		this.text.destroy();
		this.tryBtn.destroy();
		this.share.destroy();
	},
	createGame: function() {
		var me = this;
		this.bg = this.game.add.sprite(0, 0, 'bg');
		this.mostTop = me.game.add.sprite(0, 0, 'mostTop');

		this.pos = {
			x: null,
			y: null
		}
		//分数清零
		Silde.G.score = 0;
		//初始化方块
		Silde.BlockManager.instance().reset();
		Silde.BlockManager.instance().createblock();

		this.timeSign = this.game.add.sprite(20, this.world.centerY - 390, 'time');
		this.life = this.game.add.sprite(520, this.world.centerY - 390, 'life');
		this.vegetables = this.game.add.sprite(50, this.world.centerY + 270, 'vegetables');
		this.fruits = this.game.add.sprite(455, this.world.centerY + 270, 'fruits');

		this.text = this.add.text(80, 90, "60", {
			font: "40px 微软雅黑",
			fill: "#ffdb5d",
			fontWeight: 'bolder',
			align: "center"
		});
		this.chance = this.add.text(580, 90, Silde.G.errorTimes, {
			font: "40px 微软雅黑",
			fill: "#ffdb5d",
			fontWeight: 'bolder',
			align: "center"
		});

		//绑定事件
		this.vegetables.inputEnabled = true;
		this.vegetables.events.onInputUp.add(this.clickLeft, this);

		this.fruits.inputEnabled = true;
		this.fruits.events.onInputUp.add(this.clickRight, this);

		//开始时间
		this.starttime = this.time.now;
		//倒计时60
		this.timeover = 60000;
		//document.getElementById('moregame').style.display="none";
	},
	moves: function() {
		//抖动
		var times = 3;
		var tween = this.game.add.tween(Silde.Sprite[4]);
		tween.to({
			x: '+5',
			angel: '+35'
		}, 1000, function(k) {
			return Math.sin(Math.PI * 6 * k * k * times);
		});
		tween.start();
	},
	clickLeft: function() {
		var me = this;
		var data = Silde.Sprite[4].key.indexOf("vegetable");
		if (data == 0) {
			Silde.G.score++;
			Silde.BlockManager.instance().fall();
		} else {
			if (Silde.G.errorTimes > 1) {
				Silde.G.errorTimes--;
				me.moves();
				me.chance.setText(Silde.G.errorTimes);
			} else {
				me.gameDestroy();
				setTimeout(function() {
					me.createOver();
				}, 100);

			}
		}
	},
	clickRight: function() {
		var me = this;
		var data = Silde.Sprite[4].key.indexOf("fruit");
		if (data == 0) {
			Silde.G.score++;
			Silde.BlockManager.instance().fall();
		} else {
			if (Silde.G.errorTimes > 1) {
				Silde.G.errorTimes--;
				me.moves();
				me.chance.setText(Silde.G.errorTimes);
			} else {
				me.gameDestroy();
				setTimeout(function() {
					me.createOver();
				}, 100);
			}
		}
	},
	update: function() {
		var me = this;
		//计算剩余时间if
		if (me.timeover) {
			me.timeover = 60000 - (me.time.now - me.starttime);

			//更新倒计时文本
			me.world.bringToTop(me.text);
			me.text.setText(parseInt(me.timeover / 1000));

			//判断是否超时
			if (me.timeover <= 0) {
				me.text.setText("0");
				me.gameDestroy();
				setTimeout(function() {
					me.createOver();
				}, 100);
			}
		}
	},
	// 结束
	createOver: function() {
		this.bg = this.game.add.sprite(0, 0, 'bg');
		this.overBg = this.game.add.sprite(35, 200, 'overbg');
		this.tryBtn = this.game.add.sprite(150, 500, 'tryBtn');
		this.tryBtn.inputEnabled = true;
		this.tryBtn.events.onInputDown.add(this.click, this); //再试一次绑定事件
		this.share = this.game.add.sprite(340, 500, 'share');

		var text = "我吃掉了" + Silde.G.score + "个果蔬！感觉\n自己萌萌哒！";
		var style = {
			font: "35px 微软雅黑",
			fill: "#723008",
			align: "center"
		};

		this.text = this.add.text(130, 350, text, style);
		

		Silde.G.errorTimes = 0;

		this.timeover = undefined;
		this.share.inputEnabled = true;
		this.share.events.onInputDown.add(this.shareClick, this); //分享绑定事件

		//dp_submitScore(Silde.G.score);
		//document.getElementById('moregame').style.display="block";
	},
	click: function() {
		
		var me = this;
		Silde.G.score = 0;
		Silde.G.errorTimes = 3;
		me.overDestroy();
		me.createGame();
		
	},
	shareClick: function() {
		
		// Silde.G.score = 0;
		dp_share();
	}
});
