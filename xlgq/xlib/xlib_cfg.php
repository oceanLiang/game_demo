<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE);
session_start();



//这个值要全局唯一，注意所有活动都不要冲突
$GLOBALS['h5_activity_code']='xly_game_tgw_js_seed'; 


/**
 * 判断如果通过 oauth 则返回 true
 * 建议：在进来时 oauth 认证通过后，在session里设一个标示，
 * 这里根据这个标示确认是否已通过oauth认证
 */
function _has_pass_oauth(){
	if(!empty($_SESSION[WX_PREFIX]['is_oauth'])){
		return true;
	}
}



function _get_fuck_off_code(){
	return $_SESSION[$GLOBALS['h5_activity_code']];
}

function _gen_fuck_off_code(){
	$_SESSION[$GLOBALS['h5_activity_code']] = uniqid('get_the_fuck_off');
}



function _decode_msg($con,$code){
	$con = pack('H*',$con);
	$len = strlen($code);
	$con_len = strlen($con);
	$encoded_msg = array();
	for($j=0;$j<$con_len;$j++){
		$encoded_msg[] = ord($con[$j]);
	}
	$encoded_msg_len = count($encoded_msg);

	for($i=0;$i<$len;$i++){
		$salt = ord($code[$i]);
		for($j=0;$j<$encoded_msg_len;$j++){
			$encoded_msg[$j] = $encoded_msg[$j]^$salt;
		}
	}

	for($j=0;$j<$encoded_msg_len;$j++){
		$encoded_msg[$j] = chr($encoded_msg[$j]);
	}

	$ret = implode('',$encoded_msg);
	$ret = base64_decode($ret);
	return $ret;
}
