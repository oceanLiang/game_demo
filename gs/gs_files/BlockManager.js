Silde.BlockManager = (function() {

	//方块管理器
	var BlockManager = Class({

		initialize: function(game) {
			this.game = game;
		},

		//创建方块
		createblock: function() {
			//根据数据表生成箭头，并放入到数组统一管理
			for (var i = 0; i < 5; i++) {
				switch (i) {
					case i:
						this.SpriteArray[i] = this.game.add.sprite(330, 161 * i + 160, this.Sprites[i]);
						this.SpriteArray[i].anchor.set(0.5);
						Silde.Sprite[i] = this.SpriteArray[i];
						break;
				}
			}
		},

		//整个方块落下
		fall: function() {
			//创建新的一行
			var NewSprites = [null];
			var NewData = this.random(1, 12);
			switch (NewData) {
				case NewData:
					NewSprites[0] = this.game.add.sprite(330, -161 + 160, this.Sprites[NewData - 1]);
					NewSprites[0].anchor.set(0.5);
					break;
			}

			//往下落（旧方块）
			for (var i = 0; i < 5; i++) {
				var tween = this.game.add.tween(this.SpriteArray[i]);
				i == 4 ? tween.to({
					y: "+500"
				}, 200, Phaser.Easing.Cubic.Out) : tween.to({
					y: "+160"
				}, 200, Phaser.Easing.Cubic.Out);
				tween.start();
			}
			//往下落（新方块）
			var tween = this.game.add.tween(NewSprites[0]);
			tween.to({
				y: "+160"
			}, 200, Phaser.Easing.Cubic.Out);


			tween.start();



			//维护数组（下落）
			for (var i = 4; i > 0; i--) {
				this.DataArray[i] = this.DataArray[i - 1];
				this.SpriteArray[i] = this.SpriteArray[i - 1];
				Silde.Sprite[i] = this.SpriteArray[i];
			}
			//维护数组（填充新方块）
			this.DataArray[0] = NewData;
			this.SpriteArray[0] = NewSprites[0];

			Silde.Sprite[0] = this.SpriteArray[0];

		},

		//清空表
		reset: function() {

			//保存黑白数据
			this.DataArray = [0, 0, 0, 0, 0];


			//保存精灵，跟数据一一对应
			this.SpriteArray = [null, null, null, null];

			this.Sprites = ["fruit_1", "fruit_2", "fruit_3", "fruit_4", "fruit_5", "fruit_6", "fruit_7", "fruit_8", "fruit_9", "vegetable_1", "vegetable_2", "vegetable_3", "vegetable_4", "vegetable_5", "vegetable_6", "vegetable_7", "vegetable_8", "vegetable_9"];
			this.rerandom();
			this.RandomNext = [1, 2, 3, 4, 5];

		},

		//产生 min 到 max 的随机数
		random: function(min, max) {
			return Math.floor(Math.random() * (max - min) + min);
		},
		rerandom: function() {
			//不重复的随机数
			var count = 18;
			this.Sprites.sort(function() {
				return 0.5 - Math.random();
			});
			this.Sprites.join();

			var counts = 5;
			var original = new Array; //原始数组 
			for (var i = 0; i < counts; i++) {
				original[i] = i + 1;
			}
			original.sort(function() {
				return 0.5 - Math.random();
			});

			this.DataArray = original;

		}

	});

	//单例变量
	var inst = null;
	//导出方法
	return {
		//初始化
		initialize: function(game) {
			inst = new BlockManager(game);
			return inst;
		},

		//单例实例获取
		instance: function() {
			if (inst) {
				return inst;
			} else {
				return null;
			}
		}
	};

})();