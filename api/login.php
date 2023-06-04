<?php
namespace api;
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

if($_SERVER["REQUEST_METHOD"] !== "POST"){
	echo "Error. Post method required";
        // header("Location: /");
        exit();
}
$user = json_decode(file_get_contents('php://input'), true);
$uname = $user['uname'];
$pass = $user['pw'];

if(empty($uname)){
	header("Location: /");
        exit();
}else if(empty($pass)){
	echo "Password blank";
	exit();
}


$method = $_SERVER['REQUEST_METHOD'];
switch($method){
        case "POST":                
                $user = array();
                $sql = "SELECT * FROM user_login_table WHERE user_name='$uname' AND password='$pass';";
                $result = mysqli_query($conn, $sql);
                
                if(mysqli_num_rows($result) === 1){
                $row = mysqli_fetch_assoc($result);
                if($row['user_name'] === $uname && $row['password'] === $pass){
                        $user[] = $row;
                        echo json_encode($user);
                        mysqli_close($conn);        
                        // header("Location: /");
                        exit();
                }
        }else{
                        header("Location: index.php?error=Incorrect User name or password");
                    }

                    mysqli_close($conn);
// 			exit();
					

                break;
}


/*

if(isset($_POST['uname']) && isset($_POST['password'])) {
	function validate($data){
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}
}

$uname = validate($_POST['uname']);
$pass = validate($_POST['password']);


*/

?>