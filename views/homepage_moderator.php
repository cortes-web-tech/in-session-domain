<?php
session_start();
include "../db_conn.php";


$tmpId = $_SESSION['user_name'];
$sql = "SELECT * FROM user_info WHERE userName='$tmpId';";
$results = mysqli_query($conn, $sql);
$resultCheck = mysqli_num_rows($results);
$correspondingSessions;
$_modName;
  if($resultCheck > 0){
  // echo "Data successfully retrieved from database.</br></br>";
?>
<?php
  while($row = mysqli_fetch_assoc($results)){
?>
<?php
    // get user info id
  $_SESSION['user_info_id'] = $row['user_info_id'];
  $uuid = $_SESSION['user_info_id'];
  $getSessionIDQuery = "SELECT * FROM user2session_id WHERE user_info_id='$uuid';";
  $getSessionID = mysqli_query($conn, $getSessionIDQuery);
  $sessionsIDCheck = mysqli_num_rows($getSessionID);
}?>


<?php
// get session IDs
 while($row = mysqli_fetch_assoc($getSessionID)){
    ?>
      <?php
        $correspondingSessions = $row['_session_id'];
        $_modName = $row['fullName'];
      ?>

    <?php
  }?>


<?php 
// Get Session Data
  $getSessionsQuery = "SELECT * FROM sessionData WHERE modName='$_modName';";
  $getSessions = mysqli_query($conn, $getSessionsQuery);
  $sessionsQueryCheck = mysqli_num_rows($getSessions);
 ?>

 <!DOCTYPE html>
 <html>
 	<head>
    <link rel="stylesheet" type="text/css" href="style.css">
 		<title>Session Data</title>
 	</head>
 	<body>

    
		<div class="session_data_wrapper">
      <h1>Sessions that you're moderating : </h1>
 		<table class="session_data_table">
 			<tr>
 				<td><h4>Title</h4></td>
 				<td><h4>Room</h4> </td>
 				<td><h4>Day</h4></td>
        <td><h4>Start Time</h4></td>
				<td><h4>End Time</h4></td>
        <td>Presenters</td>
 			</tr>
 			<tr>
 				<?php
        // Fetch Session Data
   while($row = mysqli_fetch_assoc($getSessions)){
    ?>
      <td>
        <?php 
         $sessionID = $row['session_id'];
  
        ?>
        <a href="session.php?sessionID=<?php echo $sessionID ;?> "> 
             <?php
          echo ($row['title']);

          ?>
        </a>
        <?php
        //  echo ($row['title']) . "  ";
          //echo ($row['session_id']);
        ?>
      </td>
      <td><?php echo $row['room'];?></td>
      <td><?php echo _getDay($row['startTime']);?></td>
      <td><?php echo _getTime($row['startTime']);?></td>
      <td><?php echo _getTime($row['endTime']);?></td>
      <td>
        <?php
          // Get Sub Session id
          $session_id = $row['session_id'];
  
          // Get speakers
          $getPresenterQuery = "SELECT * FROM subsessionData WHERE _session_id='$session_id';";
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
