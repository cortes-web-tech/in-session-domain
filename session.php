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
    <link rel="stylesheet" type="text/css" href="style.css">
 		<title>Session Data</title>
 	</head>
 	<body>
      <a href="homepage.php">Home</br></a>
		<div class="session_data_table">
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
      <td id="session_row"><?php echo $row['title'];?></td>
      <td><?php echo $row['room'];?></td>
      <td><?php echo $row['startTime'];?></td>
      </tr>
    <?php
   }
}
 				?>

 		</table>
</div>
 	</body>
 </html>
