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

$user = json_decode(file_get_contents('php://input'), true);
$username = $user['uname'];
$pass = $user['pw'];
$fullname = $user['fullname'];
$user_id = NULL;
$tier = 0;

$method = $_SERVER['REQUEST_METHOD'];
switch($method){
  case "POST":
    $sql =  "INSERT INTO user_login_table (user_name, user_tier, password, _firstName)VALUES('$username', '$tier', '$pass', '$fullname');";
//    $stmt = mysqli_prepare($conn, $sql);
//    vardump($stmt);
//   $stmt->bind_param("sss", $tier,  $pass, $fullname)
//    echo $sql;
   if(mysqli_query($conn, $sql)){
      echo "User created.";
    }
    //}else{
      //echo "Error: " . $sql . "<br>" . mysqli_connect_error($conn);
//    }
    break;
}
mysqli_close($conn);
exit();
?>
