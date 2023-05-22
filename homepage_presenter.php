<?php
include "db_conn.php";
$tmpName = $_SESSION['user_name'];
$sql = "SELECT * FROM subsessionData WHERE user_name='$tmpName';";
$sql2 = "SELECT * FROM sessionData WHERE user_name='$tmpName;";
 $results = mysqli_query($conn, $sql);
 $resultCheck = mysqli_num_rows($results);

  function getTime($dateT){
    $tmpTime = strtotime($dateT);
    $dateT = date("h:i a", $tmpTime);
    return $dateT;
  }

  function getDay($dateC){
    $tmpDate = strtotime($dateC);
    $dateC = date("l, m/d", $tmpDate);
    return $dateC;
  }

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

    <h1>Displaying data for presenters only.</h1>
		<div class="session_data_wrapper">
 		<table class="session_data_table">
 			<tr>
 				<td><h4>Subsession Title</h4></td>
 				<td><h4>Presenter</h4> </td>
        <td><h4>Day</h4></td>
 				<td><h4>Start Time</h4></td>
        <td><h4>End Time</h4></td>
				<td><h4>Moderators(s)</h4></td>
 			</tr>
 			<tr>
 				<?php
   while($row = mysqli_fetch_assoc($results)){
    ?>
      <td><a href=""><?php echo $row['subsession_title'];?></a></td>
      <td><?php echo $row['user_name'];?></td>
      <td><?php echo getDay($row['startTime']);?></td>
      <td><?php echo getTime($row['startTime']);?></td>
      <td><?php echo getTime($row['endTime']);?></td>
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
