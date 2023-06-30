<?php
namespace api;
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

if($_SERVER["REQUEST_METHOD"] !== "POST"){
	echo "Error. Post method required";
        header("Location: /");
        exit();
}

$subsession = json_decode(file_get_contents('php://input'), true);
$session_id = $subsession['session_id'];
$title = $subsession['title'];
$presenter = $subsession['presenter'];
$modName = "tbd";

$method = $_SERVER['REQUEST_METHOD'];
switch($method){
  case "POST":
    $sql =  "INSERT INTO subsessionData (_session_id, presenter, subsession_title, startTime, endTime, modName) VALUES ('$session_id', '$presenter', '$title', '2023-06-29 19:46:36.000000', '2023-06-29 19:46:36.000000', '$modName');";

   if(mysqli_query($conn, $sql)){
    echo "Subsession created.";
    }
    break;
}
mysqli_close($conn);
exit();
?>
