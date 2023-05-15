<html>
 <head><title>SQL Query</title></head>
  <body>

  <?php
  $dbHost = 'localhost';
  $dbUser = 'dbUser2';
  $password = 'kappapassword';
  $database = 'inSession';
  $table = 'todo';
  $conn = mysqli_connect($dbhost, $dbUser, $password, $database);

  if(mysqli_connect_errno()) {
   echo "failed to connect to MySQL" . mysqli_connect_error();
    exit();
  }
  echo 'successfully connected to MySQL.' . "</br></br/>";

$sql = "SELECT * FROM todo;";
 $results = mysqli_query($conn, $sql);
 $resultCheck = mysqli_num_rows($results);

 if($resultCheck > 0){
 echo "to do list</br>";
   while($row = mysqli_fetch_assoc($results)){
      echo $row['content'] . "  " . $row['completed'] . "</br>";
   }
}
mysql_close('$conn');
?>

<?php

?>

</body>
</html>
