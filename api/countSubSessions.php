<?php
namespace api;
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$sql = "SELECT COUNT(*) FROM subsessionData;";
$result = mysqli_query($conn, $sql);
if(mysqli_num_rows($result) === 1){
    $row = mysqli_fetch_assoc($result);
    echo json_encode($row);
    exit();
    mysqli_close($conn);   
}
?>