<?php
namespace api;
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$sql = "SELECT COUNT(DISTINCT room) FROM sessionData;";
$result = mysqli_query($conn, $sql);
if(mysqli_num_rows($result) === 1){
    $row = mysqli_fetch_assoc($result);
    $nSessions[] = $row;
    echo json_encode($row);
    mysqli_close($conn);   
}
?>