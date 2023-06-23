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
    $sql =  "SELECT * FROM subsessionData WHERE _user_id='$user_id';";
    $results = mysqli_query($conn, $sql);
    $checkResults = mysqli_num_rows($results);
    while($row = mysqli_fetch_assoc($results)){
      $subsessions[] = $row;
    }
    echo json_encode($subsessions);
    exit;

    break;
  case "GET":
    // 
    break;
}
// get user id

// check which sessions user is presenting in

// return those session data
?>