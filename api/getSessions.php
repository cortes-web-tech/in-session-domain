<?php
	namespace api;
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: *");
	include 'DbConnect.php';
	$objDb = new DbConnect;
	$conn = $objDb->connect();

	$method = $_SERVER['REQUEST_METHOD'];
	if($method != NULL) {
		$sessions = array(); 
		$sql = "SELECT * FROM sessionData";
		$results = mysqli_query($conn, $sql);
		$resultCheck = mysqli_num_rows($results);
		
		while($row = mysqli_fetch_assoc($results)){
    		$sessions[] = $row;
   	}
   	echo json_encode($sessions);
		exit();
	}
	mysqli_close($conn);
?>

