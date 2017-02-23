<?php
	define('SCRIPT_ROOT', substr(dirname(__FILE__), 0, -7));
	
	require_once SCRIPT_ROOT.'include/common.inc.php';
	require_once SCRIPT_ROOT.'logic/ScoreBean.php';
	
	$sb = new ScoreBean();
	
	$action = $_REQUEST['action'];
	$openid = get_wx_session();
	
	
	
	
	switch ($action){
		
		case 'post':
			
			$data['openid'] = $openid;
			$data['uid_x'] = $_COOKIE['uc_x_global'];
			$data['ip'] = $_SERVER['REMOTE_ADDR'];
			$data['score'] = intval($_REQUEST['score']);
			$data['create_time'] = date('Y-m-d H:i:s');
			insertData($data,'abap_wx_sweet_log');
			//inserBest($openid,intval($_REQUEST['best']));
			insertBeat($openid,intval($_REQUEST['score']));
			insertorupdate($openid,intval($data['score']));
			if(getinfo($openid)){
				echo json_encode(array('code'=>1));
				exit;
			
			}else{
				echo json_encode(array('code'=>-1));
				exit;
			}
		
		break;
		case 'sub':
			$name = trim($_REQUEST['name']);
			$tel = trim($_REQUEST['tel']);
			$address = trim($_REQUEST['address']);
			infosub($name,$tel,$address,$openid);
			$return = array("code"=>1,'msg'=>'提交成功');
			echo json_encode($return);
			exit;
		break;
		case 'is_ms':
			if(getinfo($openid)){
				echo json_encode(array("code"=>1));
				exit;
			}else{
				echo json_encode(array("code"=>-1));
				exit;
			}
		break;	
		case 'top':
			$list = top();
			$num=1;
			$str='';
			//$myrank = getMyrank($openid);
			foreach($list as $item){
				if($item['openid']==$openid){$cur = 'box cur'; $myrank= $num;}else{$cur = 'box';}
				$info = getUserinfo($item['openid']);
//				if(!empty($item['name'])){
//					$name = $item['name'];
//				}else{
//					$name="匿名";
//				}
				
				$str.=" <section class='".$cur."'>";
				if($num<=3){
					$str.="<section class='col_1' title='".$num."'>".$num."</section>";
					$str.="<section class='col_2'><img src='".$info['headimgurl']."'/></section>";
					$str.="<section class='col_3'>".base64_decode($info['nickname'])."</section>";
					$str.="<section class='col_4'>".$item['bastscore']."</section>";
					$str.="</section>";
				}else{
					$str.="<section class='col_1'>".$num."</section>";
					$str.="<section class='col_2'><img src='".$info['headimgurl']."'/></section>";
					$str.="<section class='col_3'>".base64_decode($info['nickname'])."</section>";
					$str.="<section class='col_4'>".$item['bastscore']."</section>";
					$str.="</section>";
				}
				$num++;
				
			}
			echo json_encode(array('code'=>1,'res'=>$str,'myrank'=>$myrank));
			exit;
		break;
		
		case 'hero':
			$list = hero();
			$num=1;
			$str='';
			//$myrank = getMyrank($openid);
			foreach($list as $item){
				if($item['openid']==$openid){$cur = 'box cur'; $myrank= $num;}else{$cur = 'box';}
				$info = getUserinfo($item['openid']);
//				if(!empty($item['name'])){
//					$name = $item['name'];
//				}else{
//					$name="匿名";
//				}
				
				$str.=" <section class='".$cur."'>";
				if($num<=3){
					$str.="<section class='col_1' title='".$num."'>".$num."</section>";
					$str.="<section class='col_2'><img src='".$info['headimgurl']."'/></section>";
					$str.="<section class='col_3'>".base64_decode($info['nickname'])."</section>";
					$str.="<section class='col_4'>".$item['score']."</section>";
					$str.="</section>";
				}else{
					$str.="<section class='col_1'>".$num."</section>";
					$str.="<section class='col_2'><img src='".$info['headimgurl']."'/></section>";
					$str.="<section class='col_3'>".base64_decode($info['nickname'])."</section>";
					$str.="<section class='col_4'>".$item['score']."</section>";
					$str.="</section>";
				}
				$num++;
				
			}
			echo json_encode(array('code'=>1,'res'=>$str,'myrank'=>$myrank));
			exit;
		break;
		case 'share':
			
			$is_first_use = $sb->checkFistUse($openid, 14);
			
			if($is_first_use){
				$sb->update_score($openid, 1,1,14);
			}
			$return = array("code"=>1,'msg'=>'分享成功');
			echo json_encode($return);
			exit;
		break;	
	}
	
	
	function getinfo($openid){
		global $db;
		$sql = "select 1 from `abap_wx_sweet` where openid='{$openid}' and name!=''";
		$rs = $db->query($sql);
		if($rs->hasNext()){
			return  true;
		}else{
			return false;
		}
		
	}
	
	
	
	function getMyrank($openid){
		global $db;
		$sql = "select 	bastscore  from `abap_wx_sweet` where openid='{$openid}'";
		$rs = $db->query($sql);
		$rs->hasNext();
		$myscore = $rs->getVal('bastscore');
		$sql = "select count(*) count from `abap_wx_sweet` where 	bastscore>='{$myscore}'";
		$rs = $db->query($sql);
		$rs->hasNext();
		$myrank = $rs->getVal('count');
		return $myrank;
	}
	
	function getUserinfo($openid){
		global $db;
		$sql = "select * from `abap_wx_user` where wx_uid='{$openid}'";
		$rs = $db->query($sql);
		if($rs->hasNext()){
			return $rs->toMap();
		}
	}
	
	function top(){
		global $db;
		$sql = "select * from `abap_wx_sweet` where bastscore>0 order by bastscore desc";
		$rs = $db->query($sql);
		while($rs->hasNext()){
			$list[] = $rs->toMap();
		}
		return $list;
	}
	
	function hero(){
		global $db;
		$sql = "select * from `abap_wx_sweet_best` where score>0 and openid<>'' order by score desc limit 10";
		$rs = $db->query($sql);
		while($rs->hasNext()){
			$list[] = $rs->toMap();
		}
		return $list;
	}
	
	function insertData($data=array(),$table){
		global $db;
		$sql = sqlInsertUtil($data, $table);
		$rs = $db->query($sql);
		return true;
	}
	
	function insertBeat($openid,$best){
		global $db;
		$sql = "select score from `abap_wx_sweet_best` where openid='{$openid}'";
		$rs = $db->query($sql);
		if($rs->hasNext()){
			$s = $rs->getVal('score');
			if($best>$s){
				$dat = date('Y-m-d H:i:s');
				$db->update("update `abap_wx_sweet_best` set score='{$best}',update_time='{$dat}' where openid='{$openid}'");
			}
		}else{
			$data['openid'] = $openid;
			$data['score'] = $best;
			$data['create_time'] = date('Y-m-d H:i:s');
			insertData($data,'abap_wx_sweet_best');
		}
		
	}
	
	function insertorupdate($openid,$score){
		global $db;
		$sql = "select bastscore from `abap_wx_sweet` where openid='{$openid}'";
		$rs = $db->query($sql);
		if($rs->hasNext()){
			$s = $rs->getVal('bastscore');
			if($score>$s){
				$dat = date('Y-m-d H:i:s');
				$db->update("update `abap_wx_sweet` set bastscore='{$score}',update_time='{$dat}' where openid='{$openid}'");
			}
		}else{
			$data['openid'] = $openid;
			$data['bastscore'] = $score;
			$data['create_time'] = date('Y-m-d H:i:s');
			insertData($data,'abap_wx_sweet');
		}
	}
	
	function infosub($name,$tel,$address,$openid){
		global $db;
		$sql = "select bastscore from `abap_wx_sweet` where openid='{$openid}'";
		$rs = $db->query($sql);
		if($rs->hasNext()){
			$db->update("update `abap_wx_sweet` set name='{$name}',tel='{$tel}',address='{$address}' where openid='{$openid}'");
		}else{
			$data['openid'] = $openid;
			$data['name'] = $name;
			$data['tel'] = $tel;
			$data['address'] = $address;
			$data['create_time'] = date('Y-m-d H:i:s');
			insertData($data,'abap_wx_sweet');
		}
		
		
	}