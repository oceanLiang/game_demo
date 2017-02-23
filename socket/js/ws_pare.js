if (!window.WebSocket && window.MozWebSocket)
	window.WebSocket = window.MozWebSocket;
if (!window.WebSocket) {
	alert("WebSocket not supported by this browser");
}

function parseParams() {
	var src = location.search.substring(1);
	var paramMap = {};
	if(src==null||src=="")
		return paramMap;
	var params = src.split("&");
	for ( var i = 0; i < params.length; ++i) {
		var tmp = params[i].split("=");
		paramMap[tmp[0]] = (tmp.length == 2) ? tmp[1] : '';
	}
	return paramMap;
}
var ps = parseParams();
var onwsr_cbs = $.Callbacks();
function onWebSocketReady(fun) {
	if (window.wsconn) {
		fun(window.wsconn);
	} else {
		onwsr_cbs.add(fun);
	}
}
function initws(uid) {
	var conn = null;
	if (ps.roomid) {
		window.roomid = ps.roomid;
		conn = new WebSocket('ws://www.wmy-ad.com/room/join.x?roomid='+window.roomid+'&uid=' + uid);
	} else {
		conn = new WebSocket('ws://www.wmy-ad.com/room/create.x?game=2&uid=' + uid);
	}
	conn.onopen = function(event) {
		onwsr_cbs.fire(conn);
	};
	function process_ws_msg(event) {
		console.log(event.data);
		var o = jQuery.parseJSON(event.data);
		if (o.type == 1 && o.data.type == 'create') {// room created
			window.roomid = o.data.room;
			$("#wrap .p1 .code-wrap").qrcode({
 				text : basePath+"index2.html?roomid="+window.roomid,
 				size : 255,
 				color : "#fff",
 				background: "#fff"
 			});
			return;
		}
		if (o.type == 2) {// user joined
			userjoined();
			return;
		}
		if (o.type != 100) return;
		if (o.data == 2000) {
			replayover();
			return;
		}
		$('.p2').hide();
		animates(o.data);
	};

	function reconnect(event) {
		conn = new WebSocket('ws://' + location.host + '/room/join.x?roomid='+window.roomid+'&uid=' + uid);
		conn.onmessage = process_ws_msg;
		window.wsconn = conn;
	}
	conn.onmessage = process_ws_msg;
	conn.onerror = reconnect;
	conn.onclose = reconnect;
	window.wsconn = conn;
}

if (ps.uid) {
	window.uid = ps.uid;
	initws(ps.uid);
} else {
	$.ajax({
		url : 'http://www.wmy-ad.com/room/getuid.x',
		dataType : 'jsonp',
		success : function(uid) {
			window.uid = uid;
			console.log('uid: ' + uid);
			initws(uid);
		},
		error : function(xhr, t, e) {
			console.log(t, e);
		}
	});
}