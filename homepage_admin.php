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

    <h1>Admin page: </h1>
		<div class="session_data_wrapper">
 		<table class="session_data_table">
 			<tr>
 				<td><h4>Session Title</h4></td>
 				<td><h4>Session Room</h4> </td>
        <td><h4>Day</h4></td>
 				<td><h4>Start Time</h4></td>
        <td><h4>End Time</h4></td>
				<td><h4>Moderators(s)</h4></td>
        <td><h4>Speakers</h4></td>
 			</tr>
 			<tr>
 				<?php
   while($row = mysqli_fetch_assoc($results)){
    ?>
      <td><a href=""><?php echo $row['title'];?></a></td>
      <td><?php echo $row['room'];?></td>
      <td><?php echo _getDay($row['startTime']);?></td>
      <td><?php echo _getTime($row['startTime']);?></td>
      <td><?php echo _getTime($row['endTime']);?></td>
      <td><a href=""><?php echo $row['modName'];?></a></td>
      <td>
        <?php
          // Get Sub Session id
          $sub_id = $row['session_id'];
  
          // Get speakers
          $getPresenterQuery = "SELECT * FROM subsessionData WHERE _session_id='$sub_id';";
          $getPresenter = mysqli_query($conn, $getPresenterQuery);
          $getPresenterCheck = mysqli_num_rows($getPresenter);
        ?>

        <?php
          while($row = mysqli_fetch_assoc($getPresenter)){
            ?>
            <a href=""><?php echo $row['presenter']."</br>";?></a>
        
        <?php
          }
        ?>
      </td>
      </tr>
    <?php
   }
}
 				?>

 		</table>
</div>
 	</body>
 </html>
