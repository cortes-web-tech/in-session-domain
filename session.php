<?php
include "db_conn.php";
$sql = "SELECT * FROM sessionData;";
 $results = mysqli_query($conn, $sql);
 $resultCheck = mysqli_num_rows($results);


 if($resultCheck > 0){

 echo "Retrieverd Data from database.</br></br>";
 ?>
 <!DOCTYPE html>
 <html>
 	<head>
 		<link rel="stylesheet" href="style.css">
 		<title>Session Data</title>
 	</head>

 	<body>
 		<table>
 			<tr>
 				<td>Session Title</td>
 				<td>Session Room</td>
 				<td>Start Time</td>
 			</tr>
 			<tr>
 				<?php 
   while($row = mysqli_fetch_assoc($results)){
    ?>
      <td><?php echo $row['title'];?></td>
      <td><?php echo $row['room'];?></td>
      <td><?php echo $row['startTime'];?></td>
      </tr>
    <?php
         	// echo $row['title'] . "  " . $row['room'] . " " . $row['startTime'] . "</br></br>";
   }
}
 				?>
 			
 		</table>

 	</body>

 </html>
 
