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
			
			$user = array(); 
			$sql = "SELECT * FROM user_info WHERE user_id='$user_id'";
			$results = mysqli_query($conn, $sql);
			$resultCheck = mysqli_num_rows($results);
			while($row = mysqli_fetch_assoc($results)){
				$user[] = $row;
			}
			echo json_encode($user);
			exit;
			break;

		case "GET":
			$user = json_decode(file_get_contents('php://input'), true);
			$tmp = $user['user_id'];
			$user_id = $tmp;

			$user = array(); 
			$user_id = 6;
			$sql = "SELECT * FROM user_info WHERE user_id='$user_id'";
			$results = mysqli_query($conn, $sql);
			$resultCheck = mysqli_num_rows($results);
			
			while($row = mysqli_fetch_assoc($results)){
				$user[] = $row;
			   }
			   
			echo json_encode($user);
			mysqli_close($conn);
			exit();
			break;
	}
	mysqli_close($conn);
?>

