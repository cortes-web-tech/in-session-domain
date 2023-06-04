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
			$user = json_decode(file_get_contents('php://input'), true);
			$tmp = $user['user_id'];
			$user_id = $tmp;
			
			$subsessions = array(); 
			$sql = "SELECT * FROM user_info WHERE user_id='$user_id'";
			$results = mysqli_query($conn, $sql);
			$resultCheck = mysqli_num_rows($results);
			while($row = mysqli_fetch_assoc($results)){
				$subsessions[] = $row;
			}
			echo json_encode($subsessions);
			exit;
			break;

		case "GET":
			$user = json_decode(file_get_contents('php://input'), true);
			$tmp = $user['user_id'];
			$user_id = $tmp;

			$subsessions = array(); 
			$user_id = 6;
			$sql = "SELECT * FROM user_info WHERE user_id='$user_id'";
			$results = mysqli_query($conn, $sql);
			$resultCheck = mysqli_num_rows($results);
			
			while($row = mysqli_fetch_assoc($results)){
				$subsessions[] = $row;
			   }
			   
			echo json_encode($subsessions);
			mysqli_close($conn);
			exit();
			break;
	}
	mysqli_close($conn);
?>

