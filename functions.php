<?php

	$password;

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
  

