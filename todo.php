<html>
 <head><title>SQL Query</title></head>
  <body>

<?php
include "db_conn.php";
 

$sql = "SELECT * FROM todo;";
 $results = mysqli_query($conn, $sql);
 $resultCheck = mysqli_num_rows($results);

 if($resultCheck > 0){
 echo "to do list</br></br>";
   while($row = mysqli_fetch_assoc($results)){
      echo $row['content'] . "  " . $row['completed'] . "</br>";
   }
}



// mysql_close('$conn');
?>

</body>
</html>
