<?php
include "db_conn.php";
include "functions.php";

$subsession_id_check = $_GET['subsessionID'];
$sql = "SELECT * FROM subsessionData where subsession_id=$subsession_id_check;";
 $results = mysqli_query($conn, $sql);
 $resultCheck = mysqli_num_rows($results);

 if($resultCheck > 0){
  // echo "Data successfully retrieved from database.</br></br>";
 ?>
 <!DOCTYPE html>
 <html>
 	<head>
    <link rel="stylesheet" type="text/css" href="style.css">
 		<title>Subsessions</title>
 	</head>
 	<body>
    <div>
      <a href="homepage.php">Home</a>
      <br><br>
    </div>
		<div class="session_data_wrapper">
      <h4>Subsession Title</h4>
      <h1>
         <?php 
          getSubsessionTitle($_GET['subsessionID'], $conn);
        ?>
       </h1>

 		<table class="session_data_table">
 			<tr>
 				<td><h4>Subsession Title</h4></td>
 				
        <td><h4>Day</h4></td>
 				<td><h4>Start Time</h4></td>
        <td><h4>End Time</h4></td>
        <td><h4>Presenters</h4> </td>
				<td><h4>Moderators(s)</h4></td>
 			</tr>
 			<tr>
 				<?php
   while($row = mysqli_fetch_assoc($results)){
    ?>
      <td><a href=""><?php echo $row['subsession_title'];?></a></td>
     
      <td><?php echo _getDay($row['startTime']);?></td>
      <td><?php echo _getTime($row['startTime']);?></td>
      <td><?php echo _getTime($row['endTime']);?></td>
       <td><?php echo $row['room'];?></td>
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
