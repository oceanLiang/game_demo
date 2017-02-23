var LoadingUI = (function() {

	var LoadingUI = Class({

		game: null,
		initialize: function(game) {
			this.game = game;
			game.load.onLoadStart.add(this.onLoadStart, this);
			game.load.onFileComplete.add(this.onFileComplete, this);
			game.load.onLoadComplete.add(this.onLoadComplete, this);
			game.load.start();
		},

		onLoadStart: function() {
			this.text = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 8, "加载中...", {
				font: "40px Arial",
				fill: "#FFF",
				align: "center"
			});
			this.text.anchor.set(0.5, 0.5);
		},

		onFileComplete: function(progress, cacheKey, success, totalLoaded, totalFiles) {
			//设置文本
			this.text.setText("加载中..."+progress + "%");
		},

		onLoadComplete: function() {
			this.text.destroy();
		}
	});

	var inst = null;

	LoadingUI.load = function(game) {
		if (inst == null) {
			inst = new LoadingUI(game);
		}
	};
	return LoadingUI;
})();