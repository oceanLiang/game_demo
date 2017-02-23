<?php

	header("Content-Type: text/javascript");

	define('SCRIPT_ROOT', substr(dirname(__FILE__), 0, -4));
	require_once SCRIPT_ROOT.'../../include/config.inc.php';
	require_once SCRIPT_ROOT.'xlib/xlib_cfg.php';

$seed_token = '';
if (_has_pass_oauth()){
	$code = _get_fuck_off_code();
	if (empty($seed_token)){
		$seed_token = ";window._token='{$code}';";
	}
}

	
//-------------------下面不用管---------------------------------

$js='var SimpleH5={page_timeout_handler:[],page_eles:[],init:function(){var a=$(".section").length;for(var b=0;b<a;b++){this.page_eles[b]=$(".mo_ele",$(".page"+(b+1)))}},go:function(b){if(this.page_timeout_handler[b]!=null&&this.page_timeout_handler[b].length>0){for(var d=0;d<this.page_timeout_handler[b].length;d++){clearTimeout(this.page_timeout_handler[b][d])}this.page_timeout_handler[b]=null}var e=[];var a=this.page_eles[b-1];for(var d=0;a!=null&&d<a.length;d++){var f=$(a[d]);if(f.attr("hide")==1){f.hide()}var c=f.attr("delay");if(!c){c=0}var g=f.attr("trans_time");if(!g){g=500}var h=f.attr("trigger_onload");if(!h){h=false}(function(k,l,j,m){e[k]=setTimeout(function(){try{var n=l.attr("motion_from");var p=l.attr("motion_to");var i=JSON.parse(n);var o=JSON.parse(p);if(m){l.one("load",function(){l.css(i).show();l.transition(o,g)}).each(function(){if(this.complete){$(this).load()}})}else{l.css(i).show();l.transition(o,g)}}catch(q){console.log(q)}},j)})(d,f,c,h)}}};';

echo $js.$seed_token;
