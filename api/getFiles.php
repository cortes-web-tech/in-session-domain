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
    $tmp = $session['subsession_id'];
    $session_id = $tmp;

    $files = array(); 
    $sql = "SELECT * FROM files WHERE subsession_id='$session_id'";
    //"SELECT * FROM files WHERE subsession_id=$sub_id;"
    $results = mysqli_query($conn, $sql);
    $resultCheck = mysqli_num_rows($results);
    while($row = mysqli_fetch_assoc($results)){
        $files[] = $row;
    }
    echo json_encode($files);
    mysqli_close($conn);
	exit;
    break;
}
mysqli_close($conn);
?>