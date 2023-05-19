<?php
include "db_conn.php";
$sql = "SELECT * FROM sessionData;";
 $results = mysqli_query($conn, $sql);
 $resultCheck = mysqli_num_rows($results);


 if($resultCheck > 0){
  // echo "Data successfully retrieved from database.</br></br>";
 ?>
 <!DOCTYPE html>
 <html>
 	<head>
    <link rel="stylesheet" type="text/css" href="style.css">
 		<title>Session Data</title>
 	</head>
 	<body>
    <h2> Data from database</h2>
		<div class="session_data_wrapper">
 		<table class="session_data_table">
 			<tr>
 				<td><h4>Session Title</h4></td>
 				<td><h4>Session Room</h4> </td>
 				<td><h4>Start Time</h4></td>
				<td><h4>Moderators(s)</h4></td>
 			</tr>
 			<tr>
 				<?php
   while($row = mysqli_fetch_assoc($results)){
    ?>
      <td><?php echo $row['title'];?></td>
      <td><?php echo $row['room'];?></td>
      <td><?php $date = $row['startTime'];
		$tmpDate = strtotime($date);
		$date = date("l, m/d h:i a", $tmpDate);
		echo $date;?></td>
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
