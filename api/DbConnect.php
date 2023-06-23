<?php
namespace api;
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");


class DbConnect {
	private $dbHost = 'localhost';
	private $dbUser = "dbUser2";
	private $dbPw = 'kappapassword';
	private $dbName = "inSession";

	
	public function connect() {
		$conn = mysqli_connect($this->dbHost, $this->dbUser, $this->dbPw, $this->dbName);
  		if(mysqli_connect_errno()) {
   			echo "failed to connect to MySQL" . mysqli_connect_error();
    		exit();
  		}		
  		//echo "</br>Connected to database!</br>";
  		return $conn;	
		/*try {
			PDO Connection			
			$uname = $this->username;
			$db_Pw = $this->dbPw;
			$hName = $this->hostname;
			$db_name = $this->dbName;
			//$conn = new PDO("mysql:host=" .$hName . ";dbname=" . $db_name, $uname, $db_Pw);
			// $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);			
			echo "</br></br>Connected successfully...?</br>";
		} catch (PDOException $e){
			echo "</br>Connection failed: " . $e->getMessage();
			exit();
		}
		*/
	}

}
?>