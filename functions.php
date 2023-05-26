<?php
//include "db_conn";


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

function _getCurrentTime(){
	$t= time();
    $dateT = date(" 🕤   h:i a", $dateT);
    return $dateT;
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
	//echo $session;
	$sql = "SELECT * FROM sessionData WHERE title=$session;";
	// $run = mysqli_query($conn, $sql);

	$return = "<a href='session.php?session=$session'> " . $session . "</a>";
	echo $return;
}

function _getSessions($session){
	//$return;
	//echo $session_id;
	$return = "<a href='sessions.php'> " . $sessions . "</a>";
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

function getSessionTitle($sessionID, $conn){
	$getSessionTitleQuery = "SELECT * FROM sessionData WHERE session_id=$sessionID;";
	$getSessionTitle = mysqli_query($conn, $getSessionTitleQuery); 
	$result = mysqli_fetch_assoc($getSessionTitle);
	echo $result['title'];
}

function getSubsessionTitle($subsessionID, $conn){
	$getSubsessionTitleQuery = "SELECT * FROM subsessionData WHERE subsession_id=$subsessionID;";
	$getSubsessionTitle = mysqli_query($conn, $getSubsessionTitleQuery); 
	$result = mysqli_fetch_assoc($getSubsessionTitle);
	echo $result['subsession_title'];
}

function getUserInfo($user_id) {
	echo $user_id;

}

function userProfile($userId){
	$return = "<a href='profile.php?userId=$userId'>Profile</a>";
	echo $return;
}