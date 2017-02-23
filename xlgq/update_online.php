<?php
    define('SCRIPT_ROOT', substr(dirname(__FILE__), 0, -9));
    require_once SCRIPT_ROOT.'include/common.inc.php';
    
    $_SESSION['_LAST_VISIT_TS'] = time();
    