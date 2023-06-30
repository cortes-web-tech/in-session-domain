<?php
namespace api;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();
$sql = "SELECT presenter, _user_id FROM subsessionData;";
$results = mysqli_query($conn, $sql);
    $resultCheck = mysqli_num_rows($results);
    while($row = mysqli_fetch_assoc($results)){
        $subsessions[] = $row['presenter'];
    }
    echo json_encode($subsessions);

?>