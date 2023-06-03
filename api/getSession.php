<?php
	namespace api;
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: *");
	include 'DbConnect.php';
	$objDb = new DbConnect;
	$conn = $objDb->connect();

	$method = $_SERVER['REQUEST_METHOD'];
	switch($method) {
		case "POST":
			$session = json_decode(file_get_contents('php://input'), true);
			$tmp = $session['session_id'];
			$session_id = $tmp;
			
			$subsessions = array(); 
			$sql = "SELECT * FROM subsessionData WHERE _session_id='$session_id'";
			$results = mysqli_query($conn, $sql);
			$resultCheck = mysqli_num_rows($results);
			while($row = mysqli_fetch_assoc($results)){
				$subsessions[] = $row;
			}
			echo json_encode($subsessions);
			exit;
			break;

		case "GET":
			$session = json_decode(file_get_contents('php://input'), true);
			$tmp = $session['session_id'];
			$session_id = $tmp;

			$subsessions = array(); 
			$session_id = 11;
			$sql = "SELECT * FROM subsessionData WHERE _session_id='$session_id';";
			$results = mysqli_query($conn, $sql);
			$resultCheck = mysqli_num_rows($results);
			
			while($row = mysqli_fetch_assoc($results)){
				$subsessions[] = $row;
			   }
			   
			   echo json_encode($subsessions);
			exit();
			break;
	}
	mysqli_close($conn);
?>

