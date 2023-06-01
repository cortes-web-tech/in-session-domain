<?php
	namespace api;
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: *");
	//echo "API Connected.</br>";

	include 'DbConnect.php';
	$objDb = new DbConnect;
	$conn = $objDb->connect();
	
	

	$method = $_SERVER['REQUEST_METHOD'];

	if($method != NULL) {
		$sql = "SELECT * FROM sessionData";
		$results = mysqli_query($conn, $sql);
		$resultCheck = mysqli_num_rows($results);

		while($row = mysqli_fetch_assoc($results)){
    		print_r($row); 
   	}

		exit();
	}

/*
	$session_id_check = $_GET['sessionID'];
	$sql = "SELECT * FROM subsessionData;";
	$results = mysqli_query($conn, $sql);
	$resultCheck = mysqli_num_rows($results);


	/*
	switch ($method) {
		case "GET":
			$sql = "SELECT * FROM sessionData";
			$stmt = $conn->prepare($sql);
			$stmt->execute();
			$users = $stmt->fetchAll(PDO::FETCH_ASSOC);
			echo json_encode($users);
			break;
	}
*/

	$conn = null;


?>

