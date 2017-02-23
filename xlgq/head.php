<?php
define('SCRIPT_ROOT', substr(dirname(__FILE__), 0, -9));

require_once SCRIPT_ROOT.'include/common.inc.php';
require_once SCRIPT_ROOT.'logic/WxUsersBean.php';
require_once SCRIPT_ROOT.'logic/ScrmBean.php';
require_once SCRIPT_ROOT.'/wx/sweets/xlib/xlib_cfg.php';

/*
$openid = get_wx_session();
if(empty($openid)){
	$code = $_REQUEST['code'];
	$urls = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'].'?'.$_SERVER['QUERY_STRING'];
	if(empty($code)) {
		$url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid={$appid}&redirect_uri=".urlencode($urls)."&response_type=code&scope=snsapi_base&state=gl&connect_redirect=1#wechat_redirect";
		header("Location: {$url}");
		exit;
	}else{
		$wu = new WxUsersBean($appid, $secret);
		$str = $wu->getOpenid($code);
		$arr = json_decode($str, TRUE);
		$wx_uid = $arr['openid'];
		set_wx_session($wx_uid);
		$openid = get_wx_session();
		
		_gen_fuck_off_code();
		
		$_SESSION[WX_PREFIX]['is_oauth']=1;
		
	}
}*/	
$openid="o5ONWt1hZabQ8yTxlBn3JVVUn4H8";
$info = getinfo($openid);

if(checkIsguan($openid)){
	echo "<script>var is_g=true;</script>";
}else{
	echo "<script>var is_g=false;</script>";
}
try {
	$ret = (new ScrmBean())->update_activity(
			$openid,
			'xly_tgw_game',
			'糖果屋'
	);
}catch (Exception $e){
	error_log($e);
}

function getinfo($openid){
	global $db;
	$sql = "select * from `abap_wx_sweet` where openid='{$openid}'";
	$rs = $db->query($sql);
	if($rs->hasNext()){
		$info = $rs->toMap();
	}
	return $info;
}

function checkIsguan($openid){
	global $db;
	$sql = "select 1 from `abap_wx_user` where wx_uid='{$openid}' and is_unsubscribe = 1";
	$rs = $db->query($sql);
	if($rs->hasNext()){
		return true;
	}else{
		return false;
	}
	
	
}
	
?>