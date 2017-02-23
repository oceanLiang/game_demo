"use strict";
$(function(){
	var hasTouch = 'ontouchstart' in window,
	    //鼠标事件or触摸事件
	    TAP_EV = hasTouch   ? 'tap'        : 'tap',
	    START_EV = hasTouch ? 'touchstart' : 'mousedown',
	    MOVE_EV = hasTouch  ? 'touchmove'  : 'mousemove',
	    END_EV = hasTouch   ? 'touchend'   : 'mouseup';
	var game = {
		//当前桥
		currentBridge: null,
		myInterval   : null,
		role         : $('.role'),
		bridge       : $('.bridge'),
		lineHeight   : null,
		currentLevel : 0,//当前关卡
		soundStatus  : false,

		bgInterval   : null,
		intervalTime : 5000,
		//初始化
		init:function(){
			//this.loading();
			var _this = this;
			$('.loading').animate({opacity:0}, 600, '', function(){
				$(this).hide();
			})
			//if(is_g){
				$('.tishi').show();
			//}else{
			//	$('.no_g').show();
			//}
			
			
			$('.iknow').on(START_EV,function(){
				$('.tishi').hide();
				$('.main').show();
			})
			
		  // $('.share').on(START_EV,function(){
			//   $('.share').hide();
			//   _this.again();
		//	})
			
			this.addEvent();
			
			//this.reset();
			//this.gameStart();
			//localStorage.removeItem('bestLevel');
			//添加音乐的文件来源
	        function addSoundHtml(){
	            var soundInto='<audio id="bgMusic" loop="loop" src= "http://cdnwx.jkbk.cn/xly/wx/sweets/bgMusic.mp3"></audio>';
	            $('body').append(soundInto);
	        }
	        addSoundHtml();
	        //播放音乐
	        this.playSound(true);
		},
//		loading:function(){
//			 var manifest;
//			 var preload;
//			 //预加载列表
//			  manifest = [
//	             "http://cdnwx.jkbk.cn/xly/wx/sweets/images/bg.png",
//	             "http://cdnwx.jkbk.cn/xly/wx/sweets/images/bg2/bg.png",
//	             "http://cdnwx.jkbk.cn/xly/wx/sweets/images/bg3/bg.png",
//	             "http://cdnwx.jkbk.cn/xly/wx/sweets/images/back.png",
//	             "http://cdnwx.jkbk.cn/xly/wx/sweets/images/btnIco.png", 
//	             "http://cdnwx.jkbk.cn/xly/wx/sweets/images/closebtn.png",
//	             "http://cdnwx.jkbk.cn/xly/wx/sweets/images/fail.png",
//	             "http://cdnwx.jkbk.cn/xly/wx/sweets/images/gameStartTxt.png",
//	             "http://cdnwx.jkbk.cn/xly/wx/sweets/images/gz.png",
//	             "http://cdnwx.jkbk.cn/xly/wx/sweets/images/lu.png",
//	             "http://cdnwx.jkbk.cn/xly/wx/sweets/images/role5.png",
//	             "http://cdnwx.jkbk.cn/xly/wx/sweets/images/rule.png",
//	             "http://cdnwx.jkbk.cn/xly/wx/sweets/images/tishi.png",
//	             "http://cdnwx.jkbk.cn/xly/wx/sweets/images/title.png",
//	             "http://cdnwx.jkbk.cn/xly/wx/sweets/images/iknow.png",
//			    ];
//			  function startPreload() {
//			      preload = new createjs.LoadQueue(true);
//			      //注意加载音频文件需要调用如下代码行
//			     // preload.installPlugin(createjs.Sound);         
//			      preload.on("complete", loadComplete);
//			      preload.loadManifest(manifest);
//			  }
//			  
//			  //加载完成
//			  function loadComplete(){
//				//加载完成
//					$('.loading').animate({opacity:0}, 600, '', function(){
//						$(this).hide();
//					})
//					$('.tishi').show();
//					
//			  }
//			  startPreload();
//		},

		/**
		 * 控制音乐播放
		 */
		playSound:function(b){
            if(!b){
                document.getElementById("bgMusic").pause();
                this.soundStatus = false;
            }else{
                document.getElementById("bgMusic").play();
                this.soundStatus = true;
            }
        },

		//添加事件
		addEvent:function(){
			var _this = this;
			var isClick = false;

			document.addEventListener(START_EV, banTouchScroll,false);
	
			var isRule = false;
    		function banTouchScroll(event){
    			if(event && event.target.tagName=='INPUT'){
    				return;
    			}
    			if(event && event.target.tagName=='BUTTON'){
    				return;
    			}
    			if(event && event.target.tagName=='SECTION'){
    				return;
    			}
    			if(!isRule){
    				event.preventDefault();
    			}
    			
    		};
    		$('img').on(START_EV, banTouchScroll);
			//游戏开始按钮
			$('.infoPage').find('.gameStartBtn').on(START_EV, function(){
				if(isClick)return;
				$('.infoPage').fadeOut(400, function(){
					_this.addDrawLineEvent();
					$('.infoPage').hide();
					isClick = false;
				})

				_this.clearBgInterval();
				_this.enterPage();
				_this.createBridge();
				isClick = true;
			})
			//英雄榜
			/*
			$('.btnRankIco').on(END_EV, function(){
				var $self = $(this);
				if($self.hasClass('rankBtn')){
					$('.paihang').show();
					$('#ad').show();
					
						var data = {
							'action':'hero',
						};
						$('#ranking_title').html('英雄榜');
						
						$.post('sub.php', data, function(d) {
						
								$('#ranking_list').html(d.res);
							 	$('#ad').hide(); 
							 
						},'json');
					
					
					$('#return_back').one(END_EV, function(){
						$('.paihang').hide();
					})
					
				}
			})
			*/
			
			$('.btnRankIco').on(END_EV, function(){
				var $self = $(this);
				if($self.hasClass('rankBtn')){
					$('.paihang1').show();
					$('#ad1').show();
					
						var data = {
							'action':'hero',
						};
						
						$.post('sub.php', data, function(d) {
								$('#ranking_title1').html('英雄榜');
								$('#ranking_list1').html(d.res);
							 	$('#ad1').hide(); 
							 
						},'json');
					
					
					$('#return_back1').one(END_EV, function(){
						$('.paihang1').hide();
					})
					
				}
			})
			//ico点击事件【我的，规则，音乐】
			$('.btnIco').on(END_EV, function(){
				var $self = $(this);
				//我的
				if($self.hasClass('myBtn')){
					location.href="../jfdh/index.php?action=1";
				}
				//规则
				else if($self.hasClass('ruleBtn')){
					$('.rulePanel').show();
					$('.rulePanel').find('.closeBtn').one(END_EV, function(){
						$('.rulePanel').hide();
						isRule = false;
					})
					isRule = true;
				}
				//音乐
				else if($self.hasClass('musicBtn')){
					_this.soundStatus = !_this.soundStatus;
           			_this.playSound(_this.soundStatus);
				}
				//排行
				else if($self.hasClass('viewBtn')){
					$('.paihang').show();
					$('#ad').show();
					
						var data = {
							'action':'top',
						};
						
						$.post('sub.php', data, function(d) {
							
							 $('#ad').hide(); $('#ranking_list').html(d.res);
							 $('#ranking_title').html('我的排行：'+d.myrank);
							 
						},'json');
					
					
					$('#return_back').one(END_EV, function(){
						$('.paihang').hide();
					})
					
				}
			})

		},

		//进入页面
		enterPage:function(){
			var _this   = this,
				$role   = this.role,
				$bridge = this.bridge;

			this.setCss3($bridge, 'translate(0px,100%)');
			this.setCss3($role,   'translate(-50px,0)');
			window.setTimeout(function(){
				_this.setCss3($bridge, 'translate(0,0)', 'all 0.5s');
				window.setTimeout(function(){
					$role.addClass('roleRunAm')
					$role.attr('data-currentx', 70);
					_this.setCss3($role,'translate(70px,0)', 'all .6s linear');
					setTimeout(function(){
						$role.removeClass('roleRunAm');
					}, 600)
				},500)
			},600)
			$('.game,.gameBg').show();
			this.bgAutoPlay();
		},


		//添加画线事件
		addDrawLineEvent:function(){
			var _this = this;
			$('.hit').one(START_EV, function(){
				_this.drawLineStart();
				$(this).one(END_EV, function(){
					_this.drawLineStop(function(){
						_this.advance();
					});
				})
			})
		},

		/**
		 * 下一关
		 */
		nextLevel:function(){
			var _this = this;
			this.createBridge();
			this.addDrawLineEvent();
			//当前关卡数递增
			this.currentLevel ++;
			//保存最佳通关记录
			this.saveLevelLog();
		},

		/**
		 * 通关记录
		 */
		saveLevelLog:function(){
			//localStorage.removeItem("bestLevel")
			var bestLevel = localStorage.getItem('bestLevel');
			var levelNum  = localStorage.getItem('levelNum');
			var currentLevel = this.currentLevel;
			if(bestLevel){
				//保存最佳记录
				if(bestLevel < currentLevel)localStorage.setItem('bestLevel', currentLevel);
				//localStorage.setItem('levelNum', levelNum++);
			}else{
				localStorage.setItem('bestLevel', 1);
			}
			console.log('bestLevel:', localStorage.getItem('bestLevel'));
		},

		

		//获取最佳记录
		getBestLevel:function(){
			var bestLevel = localStorage.getItem('bestLevel');
			return bestLevel?bestLevel:0;
		},

		setLevelNum:function(){
			var levelNum  = localStorage.getItem('levelNum');
			if(levelNum){
				localStorage.setItem('levelNum', Number(levelNum)++);
			}else{
				localStorage.setItem('levelNum', 0);
			}
		},

		//获取闯关次数
		getLevelNum:function(){
			var levelNum = localStorage.getItem('levelNum');
			return levelNum?levelNum:0;
		},

		/**
		 * 前进
		 */
		advance:function(){
			var _this          = this,
				$role          = this.role,
				$bridge        = this.bridge,
				$currentBridge = this.currentBridge,
				roleCurrentX   = Number($role.attr('data-currentx')),
				cx             = parseInt($currentBridge.css('left'));
				cx             = cx?cx:0;
			var $last   	   = $bridge.find('li').last();
			var lastX  		   = Number($last.attr('data-currentx'));
			//线条高度
			var lineH          = this.lineHeight;
			var lastW 		   = Number($last.width());
			var cw             = Number($currentBridge.width());
			var spaceBetween   = lastX - cx - cw;
			//是否过桥了
			var isPass         = (lineH >=  spaceBetween && lineH <= spaceBetween + lastW)?true:false;
			//当前的距离
			var cDistance      = lineH + roleCurrentX;
			//最终距离 
			var finalDistance  = cx + (lastX-cx) + lastW - 50;
			//最后采用的距离是
			var distance       = isPass ? finalDistance : cDistance + 30;
			//运动持续时间
			var dur            = (distance-cx) / 500;
			this.setCss3($role, 'translate('+ distance +'px,0)', 'all '+ dur +'s linear');
			//给老子走起来
			$role.addClass('roleRunAm');
			window.setTimeout(function(){
				$role.removeClass('roleRunAm');
				//如果过桥了
				if(isPass){
					//下一关
					_this.nextLevel();
					$role.attr('data-currentx', distance);
					_this.setCss3($('.game'), 'translate('+ -(distance-lastW+30) +'px, 0)', 'all 0.5s ease');
				}else{
					//游戏失败
					_this.gameOver();
					//设置游戏进程
					_this.setTransition($role, 'all 0.2s linear');
					$role.css('top', $('.game').height());
					_this.setCss3($currentBridge.find('.line span'), 'rotate(180deg)', 'all 0.5s');
				};
				//_this.setCss3($('.game'), 'translate(-200px, 0)', 'all 0.5s ease')
			}, dur * 1000);
			console.log('isPass:::', isPass);
		},

		/**
		 * 是否还可以继续
		 */
		isContinue:function(){
			
		},

		

		//生成桥
		createBridge:function(){
			var _this   = this,
				$role   = this.role,
				$bridge = this.bridge,
				stageW  = 640,//舞台宽
				fixW    = 40;//固定宽
			var ranW    = fixW + Math.round(Math.random() * 70);
			//获取最后一个元素
			var $lastEl = $bridge.find('li').last();
			//保存角色所站在的桥
			this.currentBridge = $lastEl;
			//最后一个元素的宽
			var lastW      = $lastEl.width();

			//var lX = $lastEl.css('left');
			//随机坐标
			var ranX    = Math.round((stageW - lastW - fixW - ranW - 30) * Math.random()) + (fixW + lastW) + Number($lastEl.attr('data-currentx'));
			var html    = '<li class="animated slideInUp" data-currentx="'+ ranX +'" style="width:'+ ranW +'px; left:'+ ranX +'px;"><div class="line"><span></span></div></li>';
			$bridge.find('ul').append(html);
		},

		bgAutoPlay:function(){
			var _this = this;
			var $preBg = $('.gameBg').find('.bg3');
			$preBg.show();
		},	
		
		
		
		//画线
		drawLineStart:function(){
			var _this = this;
			var $currentBridge = this.currentBridge,
				$line          = $currentBridge.find('.line'),
				$lineCon       = $line.find('span');
			this.lineHeight = 0;
			this.myInterval = window.setInterval(function(){
				_this.lineHeight += 10;
				$lineCon.height(_this.lineHeight);
			}, 30)
		},

		//画线停止
		drawLineStop:function(callback){
			var $currentBridge = this.currentBridge;
			var $lineCon = $currentBridge.find('.line span');
			if(this.myInterval){
				window.clearInterval(this.myInterval);
				this.myInterval = null;
			}
			this.setCss3($lineCon, 'rotate(90deg)', 'all 0.4s ease')
			window.setTimeout(function(){
				if(callback)callback();
			},400)
		},

		//游戏数据重置
		reset:function(){
			var $role = this.role;
			var $bridge = this.bridge;
			var len = $bridge.find('li').length;
			for (var i = 0; i < len; i++) {
				if(i>0)$bridge.find('li').eq(1).remove();
			};
			$role.attr('data-currentx', 70);
			this.setCss3($('.game'), 'translate(0, 0)');
			this.setCss3($role,'none','none');
			$role.css('top', '-75px');
			this.setCss3($bridge.find('li').first().find('.line span'), 'rotate(0deg)', 'none',{height:0});
			this.currentLevel = 0;

			this.clearBgInterval();
			$('.hit').unbind('touchstart mousedown');
		},

		clearBgInterval:function(){
			if(this.bgInterval){
				window.clearInterval(this.bgInterval);
				this.bgInterval = null;
			}
		},

		//再来一次
		again:function(){
			var _this = this;
			/*
			$('.infoPage').fadeIn(500, function(){
				_this.reset();
			});*/
			this.reset();
			this.enterPage();
			this.createBridge();
			this.addDrawLineEvent();
		},

		//游戏开始
		gameStart:function(){

		},

		//游戏结束
		gameOver:function(){
			var currentLevel = this.currentLevel;
			var bestLevel = this.getBestLevel;
			var _this = this;
			$('.failPanel').show();
			/* 提交成绩
			var data = {
					'action':'post',
					'score':currentLevel,
					'best':bestLevel
				};
				
				
				$.post('sub.php', data, function(d) {
					if(d.code==1){
						$('.failPanel').show();
					}else{
						$('.myPanel').show();
						
						$('.ck').one(END_EV, function(){
							$('.myPanel').hide();
							$('.failPanel').show();
						})
					}
				},'json');
			*/
			
			
			$('.back').one(END_EV, function(){
				$('.failPanel').hide();
				_this.again();
			})
			$('.pk').one(END_EV, function(){
				$('.failPanel').hide();
				$('.share').show();
			})
			$('.share').one(END_EV, function(){
				$('.share').hide();
				_this.again();
			})
			$('.failPanel').find('.failTxt').find('img').hide();
			$('.failPanel').find('.failTxt').find('img').eq(0).show();
			$('.failPanel').find('.failTxt').find('img').eq(1).show();
			$('.failPanel').find('.failTxt').find('img').eq(2).show();
			$('.failPanel').find('.success_txt').show();
			$('.failPanel').find('.success_txt').text(currentLevel);
			$('.failPanel').find('.best_txt').show();
			$('.failPanel').find('.best_txt').text(bestLevel);

			//this.postGameLevel();
		},

		
		postGameLevel:function(){
			var currentLevel = this.currentLevel;
			var x = {'now':(new Date()).getTime(),'score':currentLevel};
			window._send_msg('./sub.php?action=post&msg=',x,function(data){
				console.log(data.msg);
			});
		},


		getServerLevelData:function(callback){
			
		},

		/**
		 * 获取url参数
		 * return 返回参数值
		 */
        getQueryString:function(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        },

        setDur:function(obj,t,del){
            var t = t || 1;
            var del = del || 0;
            obj.css({'-webkit-animation-duration': t+'s !important','animation-duration': t +'s !important','-webkit-animation-delay':del+'s','animation-delay':del+'s'})
        },

		/**
	     * 设置CSS3
	     * @param {[type]} obj    [要操作的对象]
	     * @param {[type]} f      [transform]
	     * @param {[type]} t      [transition]
	     * @param {[type]} attach [其它的属性对象]
	     */
	    setCss3:function(obj,f,t,attach){
            var f=f||'none',t=t||'none';
	        obj.css({'transform':f,'transition':t,'-webkit-transform':f,'-webkit-transition':t})
	        if(attach)obj.css(attach);
	    },

	    setTransition:function(obj, t){
	    	var t = t||'none';
	    	obj.css({'transition':t, '-webkit-transition':t})
	    }
	}

	//当网页加载完成
	window.onload = function(){
        game.init();
    }
})