<?php
namespace api;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();
session_start();
if($_SERVER["REQUEST_METHOD"] !== "POST"){
	echo "Error. Post method required";
        header("Location: /");
        exit();
}

$session = json_decode(file_get_contents('php://input'), true);
$title = $session['title'];
$room = $session['room'];
$modName = $session['moderator'];
$date = date("yy-m-d h:m:s", time());

$method = $_SERVER['REQUEST_METHOD'];
switch($method){
  case "POST":
    $sql =  "INSERT INTO sessionData (session_id, title, room, modName) VALUES (NULL, $title, $room, $modName);";
    echo $sql;
   //if(mysqli_query($conn, $sql)){ 
      echo " Session created";
   //}
  
    break;
}
mysqli_close($conn);
exit();
?>
