(function($){
  $.fn.touchwipe=function(settings){
    var config={
      min_move_x:20,
      min_move_y:20,
      wipeLeft:function(){},
      wipeRight:function(){},
      wipeUp:function(){},
      wipeDown:function(){},
      preventDefaultEvents:true
    };
    if(settings)$.extend(config,settings);
    this.each(function(){
      var startX;
      var startY;
      var isMoving=false;
      function cancelTouch(){
        this.removeEventListener('touchmove',onTouchMove);
        startX=null;
        isMoving=false
      }
      function onTouchMove(e){
        if(config.preventDefaultEvents){
          e.preventDefault()
        }
        if(isMoving){
          var x=e.touches[0].pageX;
          var y=e.touches[0].pageY;
          var dx=startX-x;
          var dy=startY-y;
          if(Math.abs(dx)>=config.min_move_x){
            cancelTouch();
            if(dx>0){
              config.wipeLeft(e)
            }else{
              config.wipeRight(e)
            }
          }else if(Math.abs(dy)>=config.min_move_y){
            cancelTouch();
            if(dy>0){
              config.wipeDown(e)
            }else{
              config.wipeUp(e)
            }
          }
        }
      }
      function onTouchStart(e){
        if(e.touches.length==1){
          startX=e.touches[0].pageX;
          startY=e.touches[0].pageY;
          isMoving=true;
          this.addEventListener('touchmove',onTouchMove,false)
        }
      }
      if('ontouchstart'in document){
        this.addEventListener('touchstart',onTouchStart,false)
      }
    });
    return this;
  }
})(jQuery);
  
  var music1 = document.getElementById("music1");
  var music2 = document.getElementById("music2");

  //加载图片列表
  var cdnUrl = "http://7xqp65.com1.z0.glb.clouddn.com/";
  var pics = [
      cdnUrl+"hlw_baidu.png",
      cdnUrl+"hlw_baidubg.png",
      cdnUrl+"hlw_blue_car.png",
      cdnUrl+"hlw_bus.png",
      cdnUrl+"hlw_car.png",
      cdnUrl+"hlw_close1.png",
      cdnUrl+"hlw_close2.png",
      cdnUrl+"hlw_close3.png",
      cdnUrl+"hlw_close4.png",
      cdnUrl+"hlw_gray_car.png",
      cdnUrl+"hlw_green_car.png",
      cdnUrl+"hlw_hand_p2.png",
      cdnUrl+"hlw_hand_p1.png",
      cdnUrl+"hlw_hand_p3.png",
      // cdnUrl+"hlw_hlw_five.png",
      // cdnUrl+"hlw_hlw_four.png",
      // cdnUrl+"hlw_hlw_one.png",
      // cdnUrl+"hlw_hlw_seven.png",
      // cdnUrl+"hlw_hlw_six.png",
      // cdnUrl+"hlw_hlw_three.png",
      // cdnUrl+"hlw_hlw_two.png",
      // cdnUrl+"hlw_house.jpg",
      cdnUrl+"hlw_huluwa_1_3_run.png",
      cdnUrl+"hlw_huluwa_1_3_stop.png",
      cdnUrl+"hlw_huluwa_2.png",
      // cdnUrl+"hlw_huluwa_7.png",
      cdnUrl+"hlw_huluwa_min_1.png",
      cdnUrl+"hlw_huluwa_min_2.png",
      cdnUrl+"hlw_huluwa_min_3.png",
      cdnUrl+"hlw_huluwa_min_4.png",
      cdnUrl+"hlw_huluwa_min_5.png",
      cdnUrl+"hlw_huluwa_min_6.png",
      cdnUrl+"hlw_huluwa_min_7.png",
      // cdnUrl+"hlw_huluwa_yinshen.png",
      // cdnUrl+"hlw_huluwa1.png",
      // cdnUrl+"hlw_huluwa2.png",
      // cdnUrl+"hlw_huluwa3.png",
      // cdnUrl+"hlw_huluwa4.png",
      // cdnUrl+"hlw_huluwa5.png",
      // cdnUrl+"hlw_huluwa6.png",
      // cdnUrl+"hlw_huluwa7.png",
      cdnUrl+"hlw_jiaojingbg.jpg",
      cdnUrl+"hlw_jiujia_yeye1.png",
      cdnUrl+"hlw_jiujia_yeye2.png",
      cdnUrl+"hlw_jiujiabg.jpg",
      cdnUrl+"hlw_kid_show.png",
      cdnUrl+"hlw_landscape_hint@2x.png",
      cdnUrl+"hlw_landscape_phone@2x.png",
      cdnUrl+"hlw_light.png",
      cdnUrl+"hlw_loadingbg.jpg",
      cdnUrl+"hlw_manifesto.png",
      cdnUrl+"hlw_monitoring.png",
      cdnUrl+"hlw_mouth1.png",
      cdnUrl+"hlw_mouth2.png",
      cdnUrl+"hlw_mouth3.png",
      cdnUrl+"hlw_music_icon.png",
      cdnUrl+"hlw_phonebg.png",     
      cdnUrl+"hlw_police_mouth_l1.png",
      cdnUrl+"hlw_police_mouth_l2.png",
      cdnUrl+"hlw_police_mouth_l3.png",
      cdnUrl+"hlw_policebg.jpg",
      cdnUrl+"hlw_policeman.png",
      cdnUrl+"hlw_red_car.png",
      cdnUrl+"hlw_redborder.png",
      cdnUrl+"hlw_roadbg.jpg",
      // cdnUrl+"hlw_seven_bg.png",
      // cdnUrl+"hlw_seven_body.png",
      // cdnUrl+"hlw_seven_eyeclose.png",
      // cdnUrl+"hlw_seven_eyeopen.png",
      // cdnUrl+"hlw_seven_tongue.png",
      cdnUrl+"hlw_song_word_001.png",
      cdnUrl+"hlw_song_word_002.png",
      cdnUrl+"hlw_song_word_003.png",
      cdnUrl+"hlw_song_word_005.png",
      cdnUrl+"hlw_song_word_004.png",
      cdnUrl+"hlw_song_word_007.png",
      cdnUrl+"hlw_song_word_006.png",
      cdnUrl+"hlw_song_word_008.png",
      cdnUrl+"hlw_song_word_009.png",
      // cdnUrl+"hlw_song_word_009_1.png",
      // cdnUrl+"hlw_song_word_010.png",
      // cdnUrl+"hlw_song_word_011.png",
      // cdnUrl+"hlw_song_word_012.png",
      // cdnUrl+"hlw_song_word_013.png",
      cdnUrl+"hlw_song_word_014.png",
      cdnUrl+"hlw_song_word_014_1.png",
      cdnUrl+"hlw_song_word_015.png",
      cdnUrl+"hlw_song_word_016.png",
      cdnUrl+"hlw_song_word_017.png",
      cdnUrl+"hlw_song_word_018.png",
      cdnUrl+"hlw_song_word_019.png",
      // cdnUrl+"hlw_speed_50.png",
      // cdnUrl+"hlw_speed_60.png",
      // cdnUrl+"hlw_speed_70.png",
      // cdnUrl+"hlw_speed_80.png",
      cdnUrl+"hlw_title1.png",
      cdnUrl+"hlw_title2.png",
      cdnUrl+"hlw_title3.png",
      cdnUrl+"hlw_title4.png",
      cdnUrl+"hlw_title5.png",
      cdnUrl+"hlw_title6.png",
      cdnUrl+"hlw_title7.png",
      cdnUrl+"hlw_title8.png",
      cdnUrl+"hlw_title9.png",
      cdnUrl+"hlw_title10.png",
      cdnUrl+"hlw_TV_btn.png",
      cdnUrl+"hlw_TV_btntitle.png",
      cdnUrl+"hlw_TV_hand.png",
      cdnUrl+"hlw_TVbg.jpg",
      // cdnUrl+"hlw_water_hot.png",
      // cdnUrl+"hlw_yeye.png",
      cdnUrl+"hlw_shares_bg.jpg",
      cdnUrl+"hlw_shares_btn.png",
      cdnUrl+"hlw_shares_t2.png",
      cdnUrl+"hlw_shares_t1.png",
      cdnUrl+"hlw_shares_t4.png",
      cdnUrl+"hlw_shares_t3.png",
      cdnUrl+"hlw_shares_t5.png",
      cdnUrl+"hlw_shares.png",
      cdnUrl+"hlw_share_img.jpg",
      cdnUrl+"hlw_jump_img.png",
    ];

  function _loadImages(pics, callback, len){
        len = len || pics.length;
        if(pics.length){
            var IMG = new Image(),
                picelem = pics.shift();
                
            if(window._pandaImageLoadArray){
                window._pandaImageLoadArray = window._pandaImageLoadArray
            }else{
                window._pandaImageLoadArray = [];
            }
            window._pandaImageLoadArray.push(picelem);
            IMG.src = picelem;
            // 从数组中取出对象的一刻，就开始变化滚动条
            _drawLoadProgress(window._pandaImageLoadArray.length/(len*len));
            // 缓存处理
            if (IMG.complete) {
                window._pandaImageLoadArray.shift();
                return _loadImages(pics,callback, len); 
            }else{
                // 加载处理
                IMG.onload = function() {
                    window._pandaImageLoadArray.shift();
                    IMG.onload = null;  // 解决内存泄漏和GIF图多次触发onload的问题
                }
                // 容错处理 todo 应该如何处理呢?
                // 目前是忽略这个错误，不影响正常使用
                IMG.onerror = function(){
                    window._pandaImageLoadArray.shift();
                    IMG.onerror = null;
                }
                return _loadImages(pics, callback, len);
            }
            return;
        }
        if(callback) _loadProgress(callback, window._pandaImageLoadArray.length, len);
  }

  // 监听实际的加载情况
  function _loadProgress(callback, begin, all){
      var loadinterval = setInterval(function(){
          if(window._pandaImageLoadArray.length != 0 && window._pandaImageLoadArray.length != begin){
              _drawLoadProgress((begin - window._pandaImageLoadArray.length )/all);
          }else if(window._pandaImageLoadArray.length == 0){
              _drawLoadProgress(1)
              setTimeout(function(){
                  callback.call(window);
              },500);
              clearInterval(loadinterval);
          }
      },300);
  }

  //加载百分比
  function _drawLoadProgress(w){
      // 清空数据
      $('.ld_long').html('');
      var num = Math.floor(w*100) >= 100 ? 100 : Math.floor(w*100);
      // 加载数据
      $('.ld_long').append("- " + num+"%" + " -");
      $('.baidu').height(num+'%');
  }

  //加载完成回调
  _loadImages(pics, function(){
    // loading后loading页面隐藏
    $(".ld_page").hide();

    music1.play();
    // page1显示
    $(".page1").show();
  });

//音频
$(".music_icon").on("click",function(){
  if($(this).hasClass("mute")){
    music2.play();
    $(this).removeClass("mute");

  }else{
    music2.pause();
    $(this).addClass("mute");
  }
});

$("html").touchwipe({
  wipeUp: function() { 
    wipeUp();
  },
  wipeDown: function() { 
    wipeDown();
  },
  min_move_x: 80,
  min_move_y: 80
});


//向上滑动
function wipeUp(){

}

//向下滑动
function wipeDown(){

}

// 加载完后调用的js  -----haoliang
$(function(){
    // 页面1 电视机页面
    function animate_tv () {
      setTimeout(function(){
          $('#control').addClass('animated rotateInUpRight');
          $('#control').css({
            opacity: '1',
            animationDuration: '1s',
            animationDelay: '0',
            animationIterationCount: '1',
          });
       }, 1000);
      setTimeout(function(){
          $('.TV_btntitle, .TV_btn').addClass('animated flash');
          $('.TV_btntitle, .TV_btn').css({
            opacity: '1',
            animationDuration: '1.5s',
            animationDelay: '0',
            animationIterationCount: '999',
          });
       }, 2000);
    }
    animate_tv ();
});

// 电视遥控器开机事件
$('#on_btn').on('click', function() {
    console.log('点击');
    $(".music_icon").show();

    music1.pause();
    music2.play();

    $('.page1').hide();
    $('.page3').fadeIn();
    // $('.page3').addClass('animated bounceIn');

    function animate_refresh () {

    }

    // 歌词动画
    function animate_song_word () {
        // setTimeout(function(){
        //     $('.s_word1').fadeIn();
        // }, 1000);
        setTimeout(function(){
            $('.s_word1').fadeOut();
            $('.s_word2').fadeIn();
        }, 100);
        setTimeout(function(){
            $('.s_word2').fadeOut();
            $('.s_word3').fadeIn();
        }, 6450);
        setTimeout(function(){
            $('.s_word3').fadeOut();
            $('.s_word4').fadeIn();
        }, 9460);
        setTimeout(function(){
            $('.s_word4').fadeOut();
            $('.s_word5').fadeIn();
        }, 12490);
        setTimeout(function(){
            $('.s_word5').fadeOut();
            $('.s_word6').fadeIn();
        }, 15470);
        setTimeout(function(){
            $('.s_word6').fadeOut();
            $('.s_word7').fadeIn();
        }, 18470);
        setTimeout(function(){
            $('.s_word7').fadeOut();
            $('.s_word8').fadeIn();
        }, 21440);
        setTimeout(function(){
            $('.s_word8').fadeOut();
        }, 27480);
        // setTimeout(function(){
        //     $('.s_word9_1').fadeIn();
        // }, 30460);
        // setTimeout(function(){
        //     $('.s_word9_1').fadeOut();
        //     $('.s_word9').fadeIn();
        // }, 36420);
        // setTimeout(function(){
        //     $('.s_word9').fadeOut();
        //     $('.s_word10').fadeIn();
        // }, 42440);
        // setTimeout(function(){
        //     $('.s_word10').fadeOut();
        //     $('.s_word11').fadeIn();
        // }, 45420);
        // setTimeout(function(){
        //     $('.s_word11').fadeOut();
        //     $('.s_word12').fadeIn();
        // }, 48420);
        // setTimeout(function(){
        //     $('.s_word12').fadeOut();
        //     $('.s_word13').fadeIn();
        // }, 51420);
        // setTimeout(function(){
        //     $('.s_word13').fadeOut();
        // }, 57450);
        setTimeout(function(){
            $('.s_word14_1').fadeIn();
        }, 31340);
        setTimeout(function(){
            $('.s_word14_1').fadeOut();
            $('.s_word14').fadeIn();
        }, 36400);
        setTimeout(function(){
            $('.s_word14').fadeOut();
            $('.s_word15').fadeIn();
        }, 39380);
        setTimeout(function(){
            $('.s_word15').fadeOut();
            $('.s_word16').fadeIn();
        }, 42390);
        setTimeout(function(){
            $('.s_word16').fadeOut();
            $('.s_word17').fadeIn();
        }, 45400);
        setTimeout(function(){
            $('.s_word17').fadeOut();
            $('.s_word18').fadeIn();
        }, 48380);
        setTimeout(function(){
            $('.s_word18').fadeOut();
            $('.s_word19').fadeIn();
        }, 51360);
        setTimeout(function(){
            $('.s_word19').fadeOut();
        }, 53360);
    }
    animate_song_word ();

    // 页面2 人物动画
    // function animate_pep () {
    //    // 葫芦娃1的动画
    //    setTimeout(function(){
    //       // $('.s_word1').fadeIn("slow");

    //       $('#dowebok1').addClass('animated bounceInDown');
    //       $('#dowebok1').css({
    //         opacity: '1',
    //         animationDuration: '0.5s',
    //         animationDelay: '0',
    //         animationIterationCount: '1',
    //       });
    //    }, 100);
    //    setTimeout(function(){
    //       $('#dowebok1').removeClass('animated bounceInDown');
    //       $('#dowebok1').addClass('animated bounce');
    //       $('#dowebok1').css({
    //         opacity: '1',
    //         animationDuration: '0.5s',
    //         animationDelay: '0',
    //         animationIterationCount: '99999',
    //       });
    //    }, 200);

    //    // 葫芦娃2的动画
    //    setTimeout(function(){
    //       $('#dowebok2').addClass('animated bounceInRight');
    //       $('#dowebok2').css({
    //         opacity: '1',
    //         animationDuration: '0.5s',
    //         animationDelay: '0',
    //         animationIterationCount: '1',
    //       });
    //    }, 300);
    //    setTimeout(function(){
    //       $('#dowebok2').removeClass('animated bounceInRight');
    //       $('#dowebok2').addClass('animated bounce');
    //       $('#dowebok2').css({
    //         opacity: '1',
    //         animationDuration: '0.5s',
    //         animationDelay: '0',
    //         animationIterationCount: '99999',
    //       });
    //    }, 400);

    //    // 葫芦娃3的动画
    //    setTimeout(function(){
    //       $('#dowebok3').addClass('animated bounceInLeft');
    //       $('#dowebok3').css({
    //         opacity: '1',
    //         animationDuration: '0.5s',
    //         animationDelay: '0',
    //         animationIterationCount: '1',
    //       });
    //    }, 500);
    //    setTimeout(function(){
    //       $('#dowebok3').removeClass('animated bounceInLeft');
    //       $('#dowebok3').addClass('animated bounce');
    //       $('#dowebok3').css({
    //         opacity: '1',
    //         animationDuration: '0.5s',
    //         animationDelay: '0',
    //         animationIterationCount: '99999',
    //       });
    //    }, 600);

    //    // 葫芦娃4的动画
    //    setTimeout(function(){
    //       $('#dowebok4').addClass('animated rotateIn');
    //       $('#dowebok4').css({
    //         opacity: '1',
    //         animationDuration: '0.5s',
    //         animationDelay: '0',
    //         animationIterationCount: '1',
    //       });
    //    }, 700);
    //    setTimeout(function(){
    //       $('#dowebok4').removeClass('animated rotateIn');
    //       $('#dowebok4').addClass('animated bounce');
    //       $('#dowebok4').css({
    //         opacity: '1',
    //         animationDuration: '0.5s',
    //         animationDelay: '0',
    //         animationIterationCount: '99999',
    //       });
    //    }, 800);

    //    // 葫芦娃5的动画
    //    setTimeout(function(){
    //       $('#dowebok5').addClass('animated rotateIn');
    //       $('#dowebok5').css({
    //         opacity: '1',
    //         animationDuration: '0.5s',
    //         animationDelay: '0',
    //         animationIterationCount: '1',
    //       });
    //    }, 900);
    //    setTimeout(function(){
    //       $('#dowebok5').removeClass('animated rotateIn');
    //       $('#dowebok5').addClass('animated bounce');
    //       $('#dowebok5').css({
    //         opacity: '1',
    //         animationDuration: '0.5s',
    //         animationDelay: '0',
    //         animationIterationCount: '99999',
    //       });
    //    }, 1000);

    //    // 葫芦娃6的动画
    //    setTimeout(function(){
    //       $('#dowebok6').addClass('animated rotateInUpRight');
    //       $('#dowebok6').css({
    //         opacity: '1',
    //         animationDuration: '0.5s',
    //         animationDelay: '0',
    //         animationIterationCount: '1',
    //       });
    //    }, 1100);
    //    setTimeout(function(){
    //       $('#dowebok6').removeClass('animated rotateInUpRight');
    //       $('#dowebok6').addClass('animated bounce');
    //       $('#dowebok6').css({
    //         opacity: '1',
    //         animationDuration: '0.5s',
    //         animationDelay: '0',
    //         animationIterationCount: '99999',
    //       });
    //    }, 1200);

    //    // 葫芦娃7的动画
    //    setTimeout(function(){
    //       $('#dowebok7').addClass('animated rotateInUpLeft');
    //       $('#dowebok7').css({
    //         opacity: '1',
    //         animationDuration: '0.5s',
    //         animationDelay: '0',
    //         animationIterationCount: '1',
    //       });
    //    }, 1300);
    //    setTimeout(function(){
    //       $('#dowebok7').removeClass('animated rotateInUpLeft');
    //       $('#dowebok7').addClass('animated bounce');
    //       $('#dowebok7').css({
    //         opacity: '1',
    //         animationDuration: '0.5s',
    //         animationDelay: '0',
    //         animationIterationCount: '99999',
    //       });
    //    }, 1400); 

    //    // 爷爷的动画
    //    setTimeout(function(){
    //       $('#dowebok').addClass('animated bounceIn');
    //       $('#dowebok').css({
    //         animationDuration: '0.5s',
    //         animationDelay: '0',
    //         animationIterationCount: '1',
    //       });
    //    }, 1500);
    //    setTimeout(function(){
    //       $('#dowebok').removeClass('animated bounceIn');
    //       $('#dowebok').addClass('animated rubberBand');
    //       $('#dowebok').css({
    //         opacity: '1',
    //         animationDuration: '1s',
    //         animationDelay: '0',
    //         animationIterationCount: '99999',
    //       });          
    //    }, 1700); 

    //    setTimeout(function() {
    //       $('.page2').hide();
    //       $('.page3').fadeIn(); 
    //    }, 3660);    
    // }
    // animate_pep ();

    // 页面3 爷爷开车在公路
    // 页面3-1 车帧动画
    function animate_car () {
      setTimeout(function(){
          $('#car').addClass('animated lightSpeedIn');
          $('#car').css({
            opacity: '1',
            animationDuration: '1s',
            animationDelay: '0',
            animationIterationCount: '1',
          });
       }, 540);  // 7550  - 4120
      setTimeout(function(){
          $('#car').removeClass('animated lightSpeedIn');
          $('#car').css({
            animationDuration: '',
            animationDelay: '',
            animationIterationCount: '',
          });
          $('#car').addClass('car_a');
       }, 1540);

       // 爷爷的车下移
       setTimeout(function(){
          $('#car').css({
            marginTop: '-1rem',
            marginLeft: '-7.3375rem',
          });
          // $('#car').addClass('car_a');  暂时注销
       }, 9450);
    }
    animate_car ();

    // 页面3-2 大娃三娃跑帧动画
    function animate_run () {
      setTimeout(function(){
          $('#huluwa_run').addClass('animated lightSpeedIn');
          $('#huluwa_run').css({
            opacity: '1',
            animationDuration: '1s',
            animationDelay: '0',
            animationIterationCount: '1',
          });
       }, 340);

      setTimeout(function(){
          $('#huluwa_run').removeClass('animated lightSpeedIn')
          $('#huluwa_run').css({
            animationDuration: '',
            animationDelay: '',
            animationIterationCount: '',
          });
          $('#huluwa_run').addClass('huluwa_run');
       }, 1340);

      setTimeout(function(){
          $('#huluwa_run').removeClass('huluwa_run');
          $('#huluwa_run').addClass('animated bounceOutLeft');
          $('#huluwa_run').css({
            opacity: '1',
            animationDuration: '1s',
            animationDelay: '0',
            animationIterationCount: '1',
          });
       }, 3640);

      setTimeout(function(){
          // 消除上一个动画
          $('#huluwa_run').removeClass('animated bounceOutLeft');
          $('#huluwa_run').css({
            display: 'none',
          });
      }, 4640);
    }
    animate_run ();

    // 页面3-3 大娃三娃拦路帧动画
    function animate_stop () {
      setTimeout(function(){
          $('#huluwa_stop').addClass('animated slideInLeft');
          $('#huluwa_stop').css({
            opacity: '1',
            animationDuration: '2s',
            animationDelay: '0',
            animationIterationCount: '1',
          });

          $('#bus_stop').addClass('animated slideInLeft');
          $('#bus_stop').css({
            opacity: '1',
            animationDuration: '2s',
            animationDelay: '0',
            animationIterationCount: '1',
          });
       }, 4700);

      setTimeout(function(){
          $('#huluwa_stop').removeClass('animated slideInLeft')
          $('#huluwa_stop').css({
            animationDuration: '',
            animationDelay: '',
            animationIterationCount: '',
          });
          $('#huluwa_stop').addClass('huluwa_run');
       }, 6400);

      setTimeout(function(){
          $('#bus_stop').addClass('animated slideOutRight');
          $('#bus_stop').css({
            opacity: '1',
            animationDuration: '2.2s',
            animationDelay: '0',
            animationIterationCount: '1',
          });

          $('#huluwa_stop').removeClass('huluwa_run');
          $('#huluwa_stop').addClass('animated slideOutRight');
          $('#huluwa_stop').css({
            opacity: '1',
            animationDuration: '2s',
            animationDelay: '0',
            animationIterationCount: '1',
          });
          // $('#car').removeClass('car_a');
       }, 8450);

      setTimeout(function(){
          // 消除上一个动画
          $('#huluwa_stop').removeClass('animated slideOutRight');
          $('#huluwa_stop').css({
            display: 'none',
          });
          $('#bus_stop').removeClass('animated slideOutRight');
          $('#bus_stop').css({
            display: 'none',
          });
      }, 10450);
    }
    animate_stop ();

    // 页面3-4 堵车动画
    function animate_choking () {
      setTimeout(function(){
          // $('#r_car, #b_car').addClass('animated slideInLeft');
          // $('#gy_car, #gn_car').addClass('animated slideInRight');
          // $('#r_car, #b_car, #gy_car, #gn_car').css({
          //   opacity: '1',
          //   animationDuration: '2.2s',
          //   animationDelay: '0',
          //   animationIterationCount: '1',
          // });

          $('#r_car').css({
            marginLeft: '-12rem',
            opacity: '1',
          });
          $('#gy_car').css({
            marginLeft: '3rem',
            opacity: '1',
          });
          $('#b_car').css({
            marginLeft: '-21rem',
            opacity: '1',
          });
          $('#gn_car').css({
            marginLeft: '8rem',
            opacity: '1',
          });

       }, 10460);
    }
    animate_choking ();

    // 页面3-4 二娃千里眼
    function animate_see () {
      setTimeout(function(){
          // $('#huluwa_see').addClass('animated bounceIn');
          // $('#huluwa_see').css({
          //   opacity: '1',
          //   animationDuration: '2s',
          //   animationDelay: '0',
          //   animationIterationCount: '1',
          // });
          $('.huluwa_2').css({
            marginLeft: '-9.375rem',
            opacity: '1',
          });
       }, 12490);

      setTimeout(function(){
          // $('#huluwa_see').removeClass('animated bounceIn')
          // $('#huluwa_see').css({
          //   animationDuration: '',
          //   animationDelay: '',
          //   animationIterationCount: '',
          // });

          $('#car').css({
            animationPlayState: 'paused',
          });
          $('.page3').css({
            animationPlayState: 'paused',
          });
          $('#huluwa_see').addClass('huluwa_seea');
          $('.see_light').addClass('animated flash');
          $('.see_light').css({
            animationDuration: '0.5s',
            animationDelay: '0',
            animationIterationCount: '9999999999',
          });

       }, 13470);
    }
    animate_see ();

    // 页面3-5 镜头偏离
    function animate_move () {
      // setTimeout(function() {
          // $('#r_car, #b_car').removeClass('animated slideInLeft');
          // $('#gy_car, #gn_car').removeClass('animated slideInRight');
          // $('#r_car').css({
          //   marginLeft: '-30rem',
          //   opacity: '1',
          // });
          // $('#gy_car').css({
          //   marginLeft: '30rem',
          //   opacity: '1',
          // });
          // $('#b_car').css({
          //   marginLeft: '-30rem',
          //   opacity: '1',
          // });
          // $('#gn_car').css({
          //   marginLeft: '30rem',
          //   opacity: '1',
          // });
          // 爷爷的车
          // $('#car').removeClass('car_a');
          // $('#car').css({
          //   animationPlayState: 'running',
          // });

          // $('#r_car, #b_car, #gy_car, #gn_car').css({
          //   opacity: '1',
          //   animationDuration: '',
          //   animationDelay: '',
          //   animationIterationCount: '',
          // }); 
      // }, 15470);

      setTimeout(function(){
          // $('#car, #r_car, #gy_car, #b_car, #gn_car, #huluwa_see').addClass('animated bounceOutRight');
          // $('#car, #r_car, #gy_car, #b_car, #gn_car, #huluwa_see').css({
          //   animationDuration: '2s',
          //   animationDelay: '0',
          //   animationIterationCount: '1',
          // });
          $('#car, #r_car, #gy_car, #b_car, #gn_car, #huluwa_see').css({
            marginLeft: '30rem',
            opacity: '1',
          });

          // 三娃千里眼
          $('#huluwa_see').removeClass('huluwa_seea');
          // $('#huluwa_see').css({
          //   animationPlayState: 'running',
          // });

          $('.page3').css({
            animationPlayState: 'running',
          });
       }, 16480); 
    }
    animate_move ();

    // 页面3-6 监控进入视线
    function animate_monitoring () {
      setTimeout(function() {
          // 重新设置车的位置
          $('#gn_car2').css({
            // marginTop: '7rem',
            marginLeft: '-7.25rem',
            zIndex: '30',
          });
          $('#b_car2').css({
            // marginTop: '2rem',
            marginLeft: '-18rem',
          });
          $('#gy_car2').css({
            // marginTop: '2rem',
            marginLeft: '0rem',
          });

          $('#5KM').css({
            marginLeft: '-9.375rem',
            opacity: '1',
          });

          // $('#5KM, #gy_car, #b_car, #gn_car').addClass('animated fadeInLeft');
          // $('#5KM, #gy_car, #b_car, #gn_car').css({
          //   opacity: '1',
          //   animationDuration: '1s',
          //   animationDelay: '0',
          //   animationIterationCount: '1',
          // }); 

      }, 17990);

      // setTimeout(function() {
      //     $('#5KM, #gy_car, #b_car, #gn_car').removeClass('animated fadeInLeft');
      //     $('#5KM, #gy_car, #b_car, #gn_car').css({
      //       opacity: '1',
      //       animationDuration: '',
      //       animationDelay: '',
      //       animationIterationCount: '',
      //     }); 
      // }, 17940);

      setTimeout(function() {
          $('.page3').removeClass('run');
          $('.page3').addClass('run_fan');
          $('.page3').css({
            animationPlayState: 'running',
          });
      }, 18990);

      // setTimeout(function() {
      //     // $('#5KM, #gy_car, #b_car, #gn_car').addClass('animated slideOutLeft');
      //     // $('#5KM, #gy_car, #b_car, #gn_car').css({
      //     //   opacity: '1',
      //     //   animationDuration: '1s',
      //     //   animationDelay: '0',
      //     //   animationIterationCount: '1',
      //     // }); 
      //     $('#5KM').css({
      //       marginLeft: '-9.375rem',
      //       opacity: '1',
      //     });

      // }, 18440);

      // 离开屏幕
      setTimeout(function(){
          $('#gn_car2').css({
            // marginTop: '7rem',
            marginLeft: '-30rem',
            zIndex: '30',
          });
          $('#b_car2').css({
            // marginTop: '2rem',
            marginLeft: '-30rem',
          });
          $('#gy_car2').css({
            // marginTop: '2rem',
            marginLeft: '-30rem',
          });

          $('#5KM').css({
            marginLeft: '-30rem',
            opacity: '1',
          });


          $('#r_car').css({
            marginLeft: '-12rem',
            opacity: '1',
          });
          $('#gy_car').css({
            marginLeft: '3rem',
            opacity: '1',
          });
          $('#b_car').css({
            marginLeft: '-21rem',
            opacity: '1',
          });
          $('#gn_car').css({
            marginLeft: '8rem',
            opacity: '1',
          });

          $('#car').css({
            // marginTop: '7rem',
            opacity: '1',
            marginTop: '-1rem',
            marginLeft: '-7.3375rem',
          });

          $('#huluwa_see').css({
            marginLeft: '-9.3375rem',
          })
      }, 20440);

      // setTimeout(function(){
      //     // $('#gy_car, #b_car, #gn_car').removeClass('animated slideOutLeft');
      //     // $('#gy_car, #b_car, #gn_car').css({
      //     //   opacity: '1',
      //     //   animationDuration: '',
      //     //   animationDelay: '',
      //     //   animationIterationCount: '',
      //     // }); 

      //     // 重新设置车的位置
      //     $('#r_car').css({
      //       marginLeft: '-12rem',
      //       opacity: '1',
      //     });
      //     $('#gy_car').css({
      //       marginLeft: '3rem',
      //       opacity: '1',
      //     });
      //     $('#b_car').css({
      //       marginLeft: '-21rem',
      //       opacity: '1',
      //     });
      //     $('#gn_car').css({
      //       marginLeft: '8rem',
      //       opacity: '1',
      //     });

      //     $('#car').css({
      //       // marginTop: '7rem',
      //       opacity: '1',
      //       marginTop: '-1rem',
      //       marginLeft: '-7.3375rem',
      //     });
      //     $('#huluwa_see').css({
      //       // marginTop: '7rem',
      //       opacity: '1',
      //       marginLeft: '-9.375rem',
      //     });


      //     // $('').addClass('animated slideInLeft');
      //     // $('#car, #huluwa_see, #gy_car, #gn_car, #r_car, #b_car').addClass('animated slideInRight');
      //     // $('#car, #huluwa_see, #r_car, #b_car, #gy_car, #gn_car').css({
      //     //   opacity: '1',
      //     //   animationDuration: '2.2s',
      //     //   animationDelay: '0',
      //     //   animationIterationCount: '1',
      //     // });
      //  }, 19440);

       setTimeout(function() {
          $('.page3').css({
            animationPlayState: 'paused',
          }); 
       }, 21440);
    }
    animate_monitoring ();

    // 页面3-7 爷爷车进入应急车道
    function animate_carmove () {
      setTimeout(function() {
          // $('#car, #huluwa_see').removeClass('animated slideInRight');
          // $('#car, #huluwa_see').removeClass('animated bounceOutRight');
          $('#car').css({
            opacity: '1',
            marginTop: '-10rem',
          });
          $('#huluwa_see').css({
            opacity: '1',
            marginTop: '-24.2rem',
          });

          $('.page3').removeClass('run_fan');
          $('.page3').addClass('run');
          $('.page3').css({
            animationPlayState: 'running',
          });
      }, 21440);
    }
    animate_carmove ();

    // 页面3-8 爷爷车走应急，躲过堵车。
    function animate_gogo () {
      setTimeout(function() {

          $('#car').css({
            opacity: '1',
            marginLeft: '-30rem',
          });
          $('#huluwa_see').css({
            opacity: '1',
            marginLeft: '-30rem',
          });

          // $('#car, #huluwa_see').addClass('animated bounceOutLeft');

          // $('#gy_car, #gn_car, #r_car, #b_car').removeClass('animated slideInRight');
          $('#car').css({
            animationPlayState: 'running',
          });

          // $('#r_car, #gy_car, #b_car, #gn_car').addClass('animated fadeOutRight');
          // $('#huluwa_see').addClass('animated bounceOut');
          $('#gy_car, #gn_car, #r_car, #b_car').css({
            marginLeft: '30rem',
          });
      }, 22440);

      // setTimeout(function() {
      //     // $('').removeClass('animated slideInLeft');
          
      // }, 21440);
    }
    animate_gogo ();

    // 页面3-9 大娃二娃三娃杂耍
    function animate_show () {
      setTimeout(function() {
          // $('#car').removeClass('animated bounceOutLeft');
          $('#car').css({
            marginTop: '-1rem',
            marginLeft: '-7.3375rem',
          });
          $('#show').addClass('animated bounceInDown');
          $('#show').css({
            opacity: '1',
          });
          $('#car').css({
            marginTop: '-0.8rem',
          });
      }, 22450);
      
      setTimeout(function() {
          $('#show').removeClass('animated bounceInDown');
          $('#show').addClass('animate_show');
      }, 23380);

      setTimeout(function() {
          // $('#car').removeClass('animated fadeIn');
          $('#car').addClass('car_a');
      }, 24950);
    }
    animate_show ();

    // 页面3-10 隐身娃出现，大娃二娃三娃走了。
    function animate_disappear () {
      setTimeout(function() {

          $('#show').removeClass('animate_show');
          $('#show').addClass('animated fadeOut');
      }, 30460);
      setTimeout(function() {
          $('#disappear').addClass('animated fadeIn');
          $('#disappear').css({
            opacity: '1',
          });
      }, 31460);
      setTimeout(function() {

          $('#disappear').removeClass('animated fadeIn');
          $('#disappear').addClass('animate_hidden');
      }, 33410);
    }
    // animate_disappear ();

    // 页面3-10 隐身娃出现，爷爷开车超速过。
    function animate_speed () {
      setTimeout(function() {
          $('#limiting').addClass('animated fadeInLeftBig');
          $('#limiting').css({
            animationDuration: '3s',
            opacity: '1',
          });
      }, 33410);
      setTimeout(function() {
          $('.page3').css({
            opacity: '1',
            animationPlayState: 'paused',
          });
          $('#car, #disappear').css({
            opacity: '0.5',
          });
      }, 35330);
      setTimeout(function() {

          $('#limiting').removeClass('animated fadeInLeftBig');
          $('#limiting').addClass('animated fadeOutRightBig');
          $('.page3').removeClass('run');
          $('.page3').addClass('run_add');
          $('.page3').css({
            animationPlayState: 'running',
          });
      }, 36420);
    }
    // animate_speed ();

    // 页面3-11 隐身娃开启隐身模式，半透明超速
    // 开启超速模式
    function animate_speeds () {
      var n = 1;
      for (var i = 0; i < 3; i++) {
        // var n = i;
        setTimeout(function() {  
          var speed_n = '#speed_' + n ;
          console.log(speed_n);
          console.log('fenge');
          var xuanzheqi = $(speed_n);

          $(speed_n).addClass('animated fadeOutRightBig');
          $(speed_n).css({
            animationDuration: '1s',
            animationDelay: '0',
            animationIterationCount: '1',
          });

          n += 1;
        }, 39430 + i*1000);   
      }
    } 
    // animate_speeds ();

    // 页面3-12 火娃水娃开火
    function animate_fire () {
      setTimeout(function() {
          // $('.s_word9').fadeOut("slow");
          // $('.s_word10').fadeIn("slow");

         $('#disappear').removeClass('animate_hidden');
         $('#disappear').addClass('animated bounceOut');
         $('#car').css({
            marginLeft: '2rem',
            marginTop: '-8rem',
            opacity: '1',
         });
      }, 42440);

      setTimeout(function() {
         $('#seven_w').addClass('animated fadeInRight');
         $('#seven_w').css({
            opacity: '1',
         });
      }, 43440);

      setTimeout(function() {
         $('#water_hot').addClass('animated fadeInLeft')
      }, 44440);

      setTimeout(function() {
         $('#water_hot').css({
            opacity: '1',
         });
         $('#water_hot').removeClass('animated fadeInLeft')
         $('#water_hot').addClass('animate_fire');
         $('#water_hot').css({
            opacity: '1',
            animationDuration: '1s',
            animationDelay: '0',
            animationIterationCount: '3',
         });
      }, 45420);
    }
    // animate_fire ();

    // 法术横冲直撞的画面没有

    // 页面3-13 吐舌头
    function animate_tongue () {
      setTimeout(function() {
         $('#seven_main').addClass('animated bounceIn');
         $('#seven_main').css({
            opacity: '1',
         });
         $('#tongue').addClass('animate_tongue');
      }, 48420);

      setTimeout(function() {
         $('#seven_main').removeClass('animated bounceIn');
         $('#seven_main').addClass('run_7');
         $('#seven_main').css({
            opacity: '1',
         });
         $('#seven_w').css({
            display: 'none',
         });
         $('#car').css({
           opacity: '0',
           marginTop: '-1rem',
           marginLeft: '-7.3375rem',
         });
      }, 49330);

      setTimeout(function() {
         $('#car').css({
           opacity: '1',
         });

         $('#seven_main').removeClass('run_7');
         $('#seven_main').addClass('animated bounceOut');
      }, 51420); 
    }
    // animate_tongue ();

    // 页面3-14 护路娃围车
    function animate_ward () {
      var n = 1;
      for (var i = 0; i < 7; i++) {
        // var n = i;
        setTimeout(function() {  
          var ward_n = '#hlw_ward_' + n ;
          console.log(ward_n);
          console.log('fenge');

          // $(ward_n).addClass('animated fadeIn');
          $(ward_n).css({
            opacity: '1',
            // animationDuration: '1s',
            // animationDelay: '0',
            // animationIterationCount: '1',
          });

          n += 1;
        }, 52330 + i*300);  // 共68900
      }

      setTimeout(function() {
        $('#hlw_ward_4, #hlw_ward_5, #hlw_ward_1, #hlw_ward_2, #hlw_ward_3, #hlw_ward_6, #hlw_ward_7').css({
            opacity: '1',
            // animationDuration: '',
            // animationDelay: '',
            // animationIterationCount: '',
          });
        // $('#hlw_ward_4, #hlw_ward_5, #hlw_ward_1, #hlw_ward_2, #hlw_ward_3, #hlw_ward_6, #hlw_ward_7').removeClass('animated fadeIn');
        $('#hlw_ward_4, #hlw_ward_5').addClass('animate_ward2');
        $('#hlw_ward_1, #hlw_ward_2, #hlw_ward_3, #hlw_ward_6, #hlw_ward_7').addClass('animate_ward4');
      }, 54530);

      setTimeout(function(){
        $('#hlw_ward_4, #hlw_ward_5').removeClass('animate_ward2');
        $('#hlw_ward_1, #hlw_ward_2, #hlw_ward_3, #hlw_ward_6, #hlw_ward_7').removeClass('animate_ward4');
      }, 60330);

      var m = 7;
      for (var i = 7; i >0 ; i--) {
        // var n = i;
        setTimeout(function() {  
          var ward_m = '#hlw_ward_' + m ;
          console.log(ward_m);
          console.log('fenge');

          // $(ward_m).addClass('animated bounceOut');
          $(ward_m).css({
            opacity: '0',
            // animationDuration: '1s',
            // animationDelay: '0',
            // animationIterationCount: '1',
          });

          m -= 1;
        }, 60380 + i*300);  // 共68900
      }

      setTimeout(function() {
        $('.page3').hide();
        $('.page4').fadeIn(); 
        $('.page4').addClass('animated lfadeInDown');
      }, 64330);
    }
    // animate_ward ();

    // 页面4-1 睁眼看到警察
    function open_eye () {
      setTimeout(function() {
        $('.page3').hide();
        $('.page4').fadeIn(); 
        $('.page4').addClass('animated lfadeInDown');
      }, 34330);

      setTimeout(function(){
        $('.page4').addClass('page4_bg');
        $(".close_eye1").css({
            opacity: '0',
        });
      }, 34830);

      setTimeout(function(){
        $(".close_eye2").css({
            opacity: '0',
        });
      }, 35130); 

      setTimeout(function(){
        $(".close_eye3").css({
            opacity: '0',
        });
      }, 35530); 
    } 
    open_eye ();

    // 页面4-2 警察说话
    function mouthA () {
      setTimeout(function() {
        // $('.s_word13').fadeOut("slow");
        // $('.s_word14').fadeIn("slow");

        $(".police_mouth1").css({
            opacity: '0',
        });
      }, 35330);

      var time = 35330;
      for (var i = 0; i < 100; i++) {
        
        setTimeout(function() {
          $(".police_mouth2").css({
              opacity: '1',
          });
          $(".police_mouth3").css({
              opacity: '0',
          });
        }, time + 100);
        setTimeout(function() {
          $(".police_mouth2").css({
              opacity: '0',
          });
          $(".police_mouth3").css({
              opacity: '1',
          });
        }, time + 300);

        // console.log(time);
        time += 300;
        // console.log(time);
      }
    }
    mouthA ();

    // 页面5 酒驾爷爷动画
    function animate_yeye () {
      setTimeout(function() {
        // $('.s_word14').fadeOut("slow");
        // $('.s_word15').fadeIn("slow");

        $('.page4').hide();
        $('.page5').fadeIn(); 
      }, 39380);

      setTimeout(function(){
        $(".jiujia_yeye2").css({
            opacity: '1',
        });
      }, 41330);   
    }
    animate_yeye (); 
   
    // 页面6-1 交警手
    function policeHand () {
      setTimeout(function() {
        // $('.s_word15').fadeOut("slow");
        // $('.s_word16').fadeIn("slow");

        $('.page5').hide();
        $('.page6').fadeIn(); 
      }, 41830);

      // 警察挥手
      var time = 41890;
      for (var i = 0; i < 100; i++) {
        
        setTimeout(function() {
          $("#hand_1").css({
              opacity: '1',
          });
          $("#hand_2").css({
              opacity: '0',
          });
          $("#hand_3").css({
              opacity: '0',
          });
        }, time + 100);
        setTimeout(function() {
          $("#hand_1").css({
              opacity: '0',
          });
          $("#hand_2").css({
              opacity: '1',
          });
          $("#hand_3").css({
              opacity: '0',
          });
        }, time + 300);
        setTimeout(function() {
          $("#hand_1").css({
              opacity: '0',
          });
          $("#hand_2").css({
              opacity: '0',
          });
          $("#hand_3").css({
              opacity: '1',
          });
        }, time + 500);

        // console.log(time);
        time += 500;
        // console.log(time);
      }
    }
    policeHand ();

    // 页面6-2 警察说话2
    function mouthA2 () {
      setTimeout(function() {
        $(".police_mouth_l3").css({
            opacity: '0',
        });
      }, 43290);

      setTimeout(function() {
        $('.phonebg').fadeIn();
      }, 44230);

      setTimeout(function() {
        $('.phonebg').fadeOut();
      }, 49230);

      var time = 43330;
      for (var i = 0; i < 100; i++) {
        
        setTimeout(function() {
          $(".police_mouth_l2").css({
              opacity: '1',
          });
          $(".police_mouth_l1").css({
              opacity: '0',
          });
        }, time + 100);
        setTimeout(function() {
          $(".police_mouth_l2").css({
              opacity: '0',
          });
          $(".police_mouth_l1").css({
              opacity: '1',
          });
        }, time + 300);

        console.log(time);
        time += 300;
        console.log(time);
      }
    }
    mouthA2 ();

    // 页面6-3 葫芦娃小
    function huluwaMin () {
      var n = 1;
      for (var i = 0; i < 12; i++) {
        // var n = i;
        setTimeout(function() {  
          var huluwaMA = '#huluwa_m' + n ;
          console.log(huluwaMA);
          console.log('fenge');
          var xuanzheqi = $(huluwaMA);

          $(huluwaMA).addClass('animated bounceIn');
          $(huluwaMA).css({
            opacity: '1',
            animationDuration: '1s',
            animationDelay: '0',
            animationIterationCount: '1',
          });

          n += 1;
        }, 42390 + i*100);   
      }
    }
    huluwaMin ();

    // 页面6-4 弹幕动画
    function danmuAs () {
      var n = 1;
      for (var i = 0; i < 10; i++) {
        // var n = i;
        setTimeout(function() {  
          var danmuA = '#danmuA_' + n ;
          console.log(danmuA);
          console.log('fenge');
          var xuanzheqi = $(danmuA);

          $(danmuA).addClass('animated fadeOutLeftBig');
          $(danmuA).css({
            opacity: '1',
            animationDuration: '20s',
            animationDelay: '0',
            animationIterationCount: '1',
          });

          n += 1;
        }, 49330 + i*100);   
      }
    } 
    danmuAs ();

    // 页面6-5 宣传话动画
    function manifestoA () {
      setTimeout(function() {

        $('.page6').hide();
        $('.page7').fadeIn(); 
        $('.page7').addClass('animated fadeIn');
        $('.page7').css({
            animationDuration: '1s',
            animationDelay: '0',
            animationIterationCount: '1',
          });

        $('.shares_s').addClass('animated tada');
        $('.shares_s').css({
            animationDuration: '1s',
            animationDelay: '0',
            animationIterationCount: 'infinite',
          });
        $('.jump_img').hide();
      }, 54400);
    }
    manifestoA ();

    $('#share').on('click', function(event) {
      $('.shares_bg').fadeIn();

      $('.shares_bg').on('click', function(event) {
        $('.shares_bg').fadeOut();
      });
    });


     // 动画循环2 主流用法
    window.requestAnimaFrame = (function () {
        return window.requestAnimaFrame   ||
                        window.webkitRequestAnimaFrame   ||
                        window.mozRequestAnimaFrame      ||
                        window.oRequestAnimaFrame        ||
                        window.msRequestAnimaFrame       ||
                function (callback) {
                    window.setTimeout(callback, 1000/60);
                };
    })();
    (function gameLoop() {
        requestAnimaFrame(gameLoop);
//                Debugger.log("1");
        // animate_song_word ();
        // animate_pep ();
        // animate_car ();
        // animate_run ();
        // animate_stop ();
        // animate_choking ();
        // animate_see ();
        // animate_move ();
        // animate_monitoring ();
        // animate_carmove ();
        // animate_gogo ();
        // animate_show ();
        // animate_disappear ();
        // animate_speed ();
        // animate_speeds ();
        // animate_fire ();
        // animate_tongue ();
        // animate_ward ();
        // open_eye ();
        // mouthA ();
        // animate_yeye (); 
        // policeHand ();
        // mouthA2 ();
        // huluwaMin ();
        // danmuAs ();
        // manifestoA ();
    })();
});

/**
 * [wxShare 微信分享]
 * @param  {[text]} shareTitle [分享标题]
 * @param  {[text]} shareDesc  [分享描述]
 * @param  {[link]} link       [分享链接]
 */

// 随机标题事件
function randNum(minnum , maxnum){
    return Math.floor(minnum + Math.random() * (maxnum - minnum));
}

var randNum = randNum(1, 10);
if (randNum < 7) {
  var text = "护路娃首支交规MV，最后听得我直想敬礼 ";
} else {
  var text = "掩护我！爷爷要违反交通规则啦！";
}
// 例如，生成0-9的随机数(包括0和9)randNum(0,10)
// var title = ;


/*
wxShare(text, '这MV正义炸了！七男星首次出演反派，为十一国庆市民的安全出行操碎了心......', null);   // 传入分享内容

function wxShare(shareTitle,shareDesc,link){
  if(!link){ var link = location.href; }
  var uri = window.location.href.split("#")[0];
  $.post("http://public.oyoozo.com/wxapi.php", {
      uri: uri
  }, function (data) {
      data = eval("(" + data + ")");
      var apilist = [
          'onMenuShareTimeline',
          'onMenuShareAppMessage'
      ];
      wx.config({
          debug: false,
          appId: data.appid,
          timestamp: data.timestamp,
          nonceStr: data.noncestr,
          signature: data.signature,
          jsApiList: apilist
      });

      wx.ready(function () {
        // 分享给朋友事件绑定
          wx.onMenuShareAppMessage({
              title: shareTitle,
              desc: shareDesc,
              link: link,
              imgUrl: 'http://7xqp65.com1.z0.glb.clouddn.com/hlw_share_img.jpg',
              success: function () { 

              }
          });

          // 分享到朋友圈
          wx.onMenuShareTimeline({
              title:shareTitle,
              link: link,
              imgUrl: 'http://7xqp65.com1.z0.glb.clouddn.com/hlw_share_img.jpg',
              success: function () { 

              }
          });
      })
  });
}*/