<?php
include "db_conn.php";
$sql = "SELECT * FROM sessionData;";
 $results = mysqli_query($conn, $sql);
 $resultCheck = mysqli_num_rows($results);


 if($resultCheck > 0){
  echo "Data successfully retrieved from database.</br></br>";
 ?>
 <!DOCTYPE html>
 <html>
 	<head>
    <link rel="stylesheet" type="text/css" href="style.css">
 		<title>Session Data</title>
 	</head>
 	<body>
		<div class="session_data_wrapper">
 		<table class="session_data_table">
 			<tr>
 				<td>Session Title</td>
 				<td>Session Room</td>
 				<td>Start Time</td>
				<td>Moderators(s)</td>
 			</tr>
 			<tr>
 				<?php
   while($row = mysqli_fetch_assoc($results)){
    ?>
      <td><?php echo $row['title'];?></td>
      <td><?php echo $row['room'];?></td>
      <td><?php echo $row['startTime'];?></td>
	<td><?php echo $row['modName'];?></td>
      </tr>
    <?php
   }
}
 				?>

 		</table>
</div>
 	</body>
 </html>
