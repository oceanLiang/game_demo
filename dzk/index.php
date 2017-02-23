
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>补砖块</title>
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="full-screen" content="yes" />
    <meta name="screen-orientation" content="portrait" />
    <meta name="x5-fullscreen" content="true" />
    <meta name="360-fullscreen" content="true" />
    <script>
        var GameName = "23_zhuankuai";
        var shareurl = window.location.href;
    </script>
    <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <script src="js/Share.js"></script>
    <script src="js/cdn.js"></script>
    <script src="js/CommonHeader.js"></script>
    <script src="js/createjs.js"></script>
    <script src="js/zepto.min.js"></script>
    <style>
        body, canvas, div {
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            -khtml-user-select: none;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }
    </style>
</head>

<body style="padding:0; margin: 0; background: #000;">
    <img src="wx.jpg" width="0" height="0" style="position: absolute" />
    <script type="text/javascript" src="js/sdk.js"></script>

    <script language="javascript" type="text/javascript" src="js/config.js"></script>
    <script type="text/javascript">
        (function (){
            //updateShare(0);
            //createjs.Sound.registerSound({ src: "/music/14378167996.mp3", id: "err" });
            //createjs.Sound.registerSound({ src: "/music/14378167794.mp3", id: "end" });
            createjs.Sound.registerSound({ src: "music/14378168202.mp3", id: "end" });
            createjs.Sound.registerSound({ src: "music/14378168203.mp3", id: "tap" });
        })();

    </script>
    <canvas id="gameCanvas" width="800" height="450"></canvas>
    <script src="js/game.min.js"></script>
    <script src="js/fx.js"></script>
    <audio id="a2" src="music/2.mp3"></audio>

</body>
</html>