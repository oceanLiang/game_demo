<?php 

	//require_once('head.php');

	//$cdn_path = "http://cdnwx.jkbk.cn/xly/wx/sweets/";
	$cdn_path ='./';

		
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>糖果屋大冒险</title>
	<!--移动端版本兼容 -->
	<script type="text/javascript">
		var phoneW =  parseInt(window.screen.width),phoneScale = phoneW/640,ua = navigator.userAgent;
		if (/Android (\d+\.\d+)/.test(ua)){
			var version = parseFloat(RegExp.$1);
			if(version>2.3){
				document.write('<meta name="viewport" content="width=640, initial-scale='+phoneScale+', minimum-scale = '+phoneScale+', maximum-scale = '+phoneScale+', target-densitydpi=device-dpi">');
            }else{
				document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
			}
		} else {
			document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
		}

	</script>
	<!--移动端版本兼容 end -->
	<link href="http://cdn.bootcss.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="<?php echo $cdn_path; ?>css/main.css?v=1.78">
	<link rel="stylesheet" href="<?php echo $cdn_path; ?>css/animate.css?v=4.2">
	<link rel="stylesheet" href="<?php echo $cdn_path; ?>css/paihang.css?v=1.7"/>
</head>
<body>
<section class="loading">
    <div class="roundSpinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    </div>
</section>
		<!-- 提示页 -->
	<div class="tishi">
		<div class="tishiBox">
			<img  src="<?php echo $cdn_path; ?>images/tishi.png?v=1"  alt="">
			<img class="iknow"  src="<?php echo $cdn_path; ?>images/iknow.png"  alt="">
		</div>
	</div>
	<div class="no_g">
		<div class="tishiBox">
		<!--  未关注 -->
			<img  src="<?php echo $cdn_path; ?>images/no_g.png?v=1"  alt="">
		</div>
	</div>
	<div class="share panel animated fadeIn dur05">
		<div class="tishiBox">
		<!--  分享 -->
			<img  src="<?php echo $cdn_path; ?>images/share.png?v=1"  alt="">
		</div>
	</div>

<div class="main">
	<div class="myBtn btnIco animated fadeInLeft">我的</div>
	<div class="viewBtn btnIco animated fadeInLeft del03">排名</div>
	<div class="rankBtn btnRankIco animated fadeInRight">英雄榜</div>
	<div class="ruleBtn btnIco animated fadeInRight">规则</div>
	<div class="musicBtn btnIco animated fadeInRight del03">音乐</div>
	
	
	
	<!-- 封面页面 -->
	<div class="infoPage">
		<div class="tit animated zoomIn del05"><img class='scaleAm' src="<?php echo $cdn_path; ?>images/title.png?v=1" alt=""></div>
		<div class="lu animated fadeInLeft del05"><img src="<?php echo $cdn_path; ?>images/lu.png?v=1" height="390" width="298" alt=""></div>
		<div class='gz animated fadeInUp del05'>
			<div class="gzTxt gameStartBtn"><img class='scaleAm2' src="<?php echo $cdn_path; ?>images/gameStartTxt.png?v=1" height="110" width="100" 

alt=""></div>
			<img src="<?php echo $cdn_path; ?>images/gz.png" height="370" width="186" alt="">
		</div>
		<div class="bg animated zoomIn2 dur5"><img src="<?php echo $cdn_path; ?>images/bg.png?v=1" height="1136" width="640" alt=""></div>
	</div>
	
	<!-- 我的 -->
	<div class="myPanel panel animated fadeIn dur05">
		<div class="scoreBox animated zoomIn dur03 del03">
			<img src="<?php echo $cdn_path; ?>images/closebtn.png" class="ck"  width="10%" alt="">
			<div class="scoreTxt">
			
				 <div class="form-group">
				      <input type="text"  style="width:80%;margin-left:10%;" class="form-control" name="name" placeholder="请输入姓名" value="<?php echo $info['name']; ?>">
				 </div>
				 <div class="form-group">
				      <input type="tel" style="width:80%;margin-left:10%;" class="form-control" name="tel" placeholder="请输入电话" value="<?php echo $info['tel']; ?>">
				 </div>
				 <div class="form-group">
				      <input type="text" style="width:80%;margin-left:10%;" class="form-control" name="address" placeholder="请输入地址" value="<?php echo $info['address']; ?>">
				 </div>
 				 <button type="button" class="btn btn-info"  onclick="sub()" style="width:50%;margin-left:-5%;">提交信息</button> 	  
			</div>
			
			<img src="<?php echo $cdn_path; ?>images/score2.png"  width="100%" alt="">

		</div>
	</div>
	<!-- 排行 -->
	
	<div class="paihang panel animated fadeIn dur05">
		<section id="ranking"> 
			<span id="ranking_title"></span>
  			<section id="ranking_list">
  				<img src="images/load.gif" id="ad" width=30% style="left:35%;top:30%;position:absolute;display:one">
  			</section>
 		 	<a id="return_back" href="#" title="返回">返回</a> 
  
 		 </section>
	</div>
	
	<div class="paihang1 panel animated fadeIn dur05" style="display:none;">
		<section id="ranking1"> 
			<span id="ranking_title1"></span>
  			<section id="ranking_list1">
  				<img src="images/load.gif" id="ad1" width=30% style="left:35%;top:30%;position:absolute;display:one">
  			</section>
 		 	<a id="return_back1" href="#" title="返回">返回</a> 
  
 		 </section>
	</div>
	
	
	

	<!-- 游戏规则 -->
	<div class="rulePanel panel animated fadeIn dur05">
		<div class="ruleBox">
			<div class="closeBtn"><img  src="<?php echo $cdn_path; ?>images/closebtn.png"  alt=""></div>
			<img class='ruleImg' src="<?php echo $cdn_path; ?>images/rule.png?v=1"  alt="">
		</div>
	</div>


	<!-- 游戏结果 -->
	<div class="failPanel panel">
		<div class="failBox">
			<div class="backBtn"></div>
			<div class="failTxt">
				<img style='display:none;width: 60%;' src="<?php echo $cdn_path; ?>images/success_txt.png" alt="">
				<div class='success_txt'>0</div>
				<div class='best_txt'>0</div>
				<div class="btn-new">
					<img class="back" src="<?php echo $cdn_path; ?>images/back.png" style="width:48%;float:left;" alt="">
					<img class="pk" src="<?php echo $cdn_path; ?>images/pk.png" style="width:48%;float:right;" alt="">
				</div>
			</div>
			<img src="<?php echo $cdn_path; ?>images/fail.png"  width="495" alt="">
		</div>
	</div>


	<div class="hit"></div>

	<!-- 游戏区 -->
	<div class="game">
		<!-- 角色 -->
		<div class="role"></div>
		<!-- 搭桥线 -->
		<!-- <div class="line"></div> -->
		<!-- 桥 -->
		<div class="bridge">
			<ul>
				<li data-currentx='0'>
					<!-- 搭桥线 -->
					<div class="line"><span></span></div>
				</li>
			</ul>
		</div>
	</div>

	<!-- 背景 -->
	<section class="gameBg">
		

	
		<div class="bg3">
			
			<div class="cloud1 cloud1Am"><img src="<?php echo $cdn_path; ?>images/bg3/1.png"  width="300" alt=""></div>
			<div class="cloud2 cloud2Am"><img src="<?php echo $cdn_path; ?>images/bg3/2.png"  width="165" alt=""></div>
			<div class="bgPic"><img src="<?php echo $cdn_path; ?>images/bg3/bg.png" height="1136" width="640" alt=""></div>
		</div>
	</section>
</div>
<!--微信分享 START -->

<?php //require_once SCRIPT_ROOT."wx/jssdk/getJssdk.php";?>
<script>
	/*
wx.ready(function(){

    wx.showOptionMenu();
    var title = '小羚羊糖果屋';
    var link = 'http://wx.jkbk.cn/xly/wx/sweets/';
    var imgUrl='http://cdnwx.jkbk.cn/xly/wx/sweets/images/fx.png'
    var desc = '';
    wx.onMenuShareTimeline({
        title: title, // 分享标题
        link: link, // 分享链接
        imgUrl: imgUrl, // 分享图标
        success: function () { 
            // 用户确认分享后执行的回调函数
        },
        cancel: function () { 
            // 用户取消分享后执行的回调函数
        }
    });



    wx.onMenuShareAppMessage({
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: link, // 分享链接
        imgUrl: imgUrl, // 分享图标
        type: 'link', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () { 
            // 用户确认分享后执行的回调函数
            
        },
        cancel: function () { 
            // 用户取消分享后执行的回调函数
        }
    });
    
    
});*/

</script>


<script>
/*
var v=0;
function sub(){
	var name = $.trim($('input[name=name]').val());
	var tel = $.trim($('input[name=tel]').val());
	var address = $.trim($('input[name=address]').val());
	var reg = /^0?1[3|4|5|8|7]\d{9}$/;
	if(v == 1) {
		alert('请不要重复提交');
		return false;
	}
	if(name == '') {
		alert('请填写姓名');
		return false;
	} else  if (!reg.test(tel)) {
        alert("手机号码格式不正确");
        return false;
	} else { 
		v = 1;
		data = {
			'action':'sub',
			'name':name, 
			'tel':tel,
			'address':address,
		};
		$.post('sub.php', data, function(d) {
			if(d.code == 1) {
				alert(d.msg);
				$('.myPanel').hide();
				$('.share').show();
			} 
		},'json');
	}
}
*/
</script>
<!-- 微信分享 END -->

 <script src="http://cdnwx.jkbk.cn/xly/wx/js/encryptlib/encrypt_js.min.js"></script> 
 <script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
 <script src="http://libs.baidu.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
<script src='<?php echo $cdn_path; ?>js/game.js?v=5.9'></script>
<!--tdm统计代码-->

<!--下面是竖屏提示,性能原因丢最后-->

<div id="orientLayer" class="mod-orient-layer">
    <div class="mod-orient-layer__content">
        <i class="icon mod-orient-layer__icon-orient"></i>

        <div class="mod-orient-layer__desc">为了更好的体验，请使用竖屏浏览</div>
    </div>
</div>

<style type="text/css">
    /* 样式放在结尾，防止 base64 图片造成拥塞 */
    @keyframes rotation {
        10% {
            transform: rotate(90deg);
            -webkit-transform: rotate(90deg)
        }
        50% {
            transform: rotate(0);
            -webkit-transform: rotate(0)
        }
        60% {
            transform: rotate(0);
            -webkit-transform: rotate(0)
        }
        90% {
            transform: rotate(90deg);
            -webkit-transform: rotate(90deg)
        }
        100% {
            transform: rotate(90deg);
            -webkit-transform: rotate(90deg)
        }
    }

    @-webkit-keyframes rotation {
        10% {
            transform: rotate(90deg);
            -webkit-transform: rotate(90deg)
        }
        50% {
            transform: rotate(0);
            -webkit-transform: rotate(0)
        }
        60% {
            transform: rotate(0);
            -webkit-transform: rotate(0)
        }
        90% {
            transform: rotate(90deg);
            -webkit-transform: rotate(90deg)
        }
        100% {
            transform: rotate(90deg);
            -webkit-transform: rotate(90deg)
        }
    }

    .mod-orient-layer {
        display: none;
        position: fixed;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: #000;
        z-index: 999997
    }

    .mod-orient-layer__content {
        position: absolute;
        width: 100%;
        top: 45%;
        margin-top: -75px;
        text-align: center
    }

    .mod-orient-layer__icon-orient {
        display: inline-block;
        width: 67px;
        height: 109px;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAADaCAMAAABU68ovAAAAXVBMVEUAAAD29vb////x8fH////////x8fH5+fn29vby8vL////5+fn39/f6+vr////x8fH////////+/v7////09PT////x8fH39/f////////////////////x8fH///+WLTLGAAAAHXRSTlMAIpML+gb4ZhHWn1c2gvHBvq1uKJcC6k8b187lQ9yhhboAAAQYSURBVHja7d3blpowFIDhTUIAOchZDkre/zE7ycySrbUUpsRN2/1fzO18KzEqxEVgTiZNfgmmtxRc8iaR8HNe8x4BtjQePKayYCIoyBSgvNNE1AkNSHqZyLqk97EgUCCHBzZ5mkg7ScvIJuIyOyXBRFxgpqWZyGsAZLB1KjsJi8nutHU4JCRbFRH8tmirI9k8Jx2sqNs8K/m0LQkrktO2crgcgXGB4AiTEsB0hJfo9MGgX7CGcYiYwQxmMOOvZwRhBG8tCoMXjBDeXvWCEcHbi14wgCBmMIMZzGAGM5jxETNwzMAxA8cMHDNwzMAxA8cMHDNwzMAxA8cMHDNwzMAxY6E2rUQxnH2tz9cirlJFwFBJedaPnUv0M7++egPDE8iAJcIDmxwH5wwv9vUviw2kLbVO3TJU5uul/EyB0FoLp4x60PdGUd3qPurrWyjGGTc05u+1dcgI7/+tCCPARWGhH7o5Y7RCf+bH9ctXLp6v2BVDxfqz0oPXeSVaNtINo/1SXDv4dck8IIkbhtC2ol+iouEonTBCbYvVMnXOjxww6s/RFrBUpXHh/gw1rHj5d/qhYn9Gpk2FWh6xRBRX5Oj3Znh2Sq49/L6+y8pB26q9GbE2dbA2mVbx6I+7MfBglLCttm73ZQi7AD3iL4HqjFYJHSPRppqaUaJ3ATpGa+ckpGak2hRRMyqjGMkvl+xyFeSMwjAqcsZgGDdyhl0oNTnDN4yenJGZFGxNChP5/Y3efh6SM2rDOJMzboYxkDMqwyjIGcIw6F+io2FU1IxIm1JqRmgXSkvNKNCXeTpGrU0JNSO2c6LIGPgCS8AuDHz9ta0SXWDtxoDRH+MqlbC2Dt2G2JFRadtQZt2qq/orGowdGb2euxYiqWEpVWhTBnszoNAPdStuQwxqf0aocdWKW4Z+DfszIh8pxJqbuCE4YAC+4bm0evtipjpgJHeFnyyt1Ku2xa0bhjxr27p75rECNwyI9ZwvXkHq+7aTaMEV44YYy/spfgjgjNHaWW+GeUhGEX7tLlVinIFDDSgnOwhi1V6bU0b6tVS9eAERe863g4dRrtiHdc6o+nn5vtyVVgR79Cqt4uL6gfHPQyGqtP2vf7HADGbcYwaOGThm4JiBYwaOGThm4JiBYwaOGThm4JiBYwaOGThm4JiBYwaOGThm4JjhtOM+J/AgT008yDMkN/dPP9hzS8zAMQN3OEYeekp5YU7KOKXwVXqiY+QS7smcinGKABWdiBgpPJTSMHJ4KidhhPBUSMLw4CmPhKHgKUXCkHsygum71ftNSgCX6bsl8FQyfbcL5EdYsDk0R3j7aiA5wpt5AjKg/2gLJEBD/0Hf2OOf/vRrj6z/7GtP4B3nMKyjHA12kIPSjnJs3FEO0TvKkYJHOWCR+rjJH0Vn6fI5PjNbAAAAAElFTkSuQmCC');
        transform: rotate(90deg);
        -webkit-transform: rotate(90deg);
        -webkit-animation: rotation infinite 1.5s ease-in-out;
        animation: rotation infinite 1.5s ease-in-out;
        -webkit-background-size: 67px;
        background-size: 67px
    }

    .mod-orient-layer__desc {
        margin-top: 20px;
        font-size: 15px;
        color: #fff
    }

    .mod-orient-layer__desc {
        margin-top: 20px;
        font-size: 15px;
        color: #fff
    }
</style>
<script>
    var orientLayer = document.getElementById("orientLayer");
    //判断横屏竖屏
    function checkDirect() {
        if (document.documentElement.clientHeight >= document.documentElement.clientWidth) {
            return "portrait";
        } else {
            return "landscape";
        }
    }
    //显示屏幕方向提示浮层
    function orientNotice() {
        var orient = checkDirect();
        if (orient == "portrait") {
            orientLayer.style.display = "none";
        } else {
            orientLayer.style.display = "block";
        }
    }
    function init() {
        orientNotice();
        window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
            setTimeout(orientNotice, 200);
        })
    }
    init();
</script>

</body>
</html>