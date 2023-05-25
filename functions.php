<?php
include "db_conn";


/*
function encrypt_pw($pwd){
	//$result;
	  echo '<script type="text/JavaScript">alert("Hash verified");window.location.href="homepage.php";</script>';
	  exit('whoa there buccarroooo');
	  header('Location: homepage.php');
	$hash = password_hash($pw, PASSWORD_BCRYPT);
	 if(password_verify($pw, $hash)){
     
     //  return $result;
   }

	}
*/
$tmpTime;
function _getTime($getTime) {
	$tmpTime = strtotime($getTime);
    $return = date("h:i a", $tmpTime);
    return $return;
	}

function _getDay($dateC){
    $tmpDate = strtotime($dateC);
    $dateC = date("l, m/d", $tmpDate);
    return $dateC;
  }


function _getSubsession($subsession, $session_id){
	// $return;
	// echo $session_id;
	$return = "<a href='subsession.php?error=Link Not Configured'> " . $subsession . "</a>";
	echo $return;
}

function _getSubsessions($subsession, $session_id){
	//$return;
	$return = "<a href='subsession.php?error=Link Not Configured'> " . $subsession . "</a>";
	echo $return;
}

function _getSession($session){
	//$return;
	//echo $session_id;
	$return = "<a href='session.php?error=Session_Link_Not_Configured'> " . $session . "</a>";
	echo $return;
}

function _getSessionTitle($session){
	//$return;
	echo $session;
}


function _downloadFile($filename){
	//$return;
	$return = "<a href='downloadFile.php?file=$filename'> " . $filename . "</a>";
	echo $return;
}