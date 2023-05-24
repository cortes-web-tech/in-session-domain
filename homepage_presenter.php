<?php
include "db_conn.php";
$uid = $_SESSION['user_id'];
$sql =  "SELECT * FROM subsessionData WHERE _user_id='$uid';";
$results = mysqli_query($conn, $sql);
$checkResults = mysqli_num_rows($results);
?>

<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
	<h1>Your presentations : </h1>
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
            
            <?php // get file name 
              $sub_id = $row['subsession_id'];
              $sql2 = "SELECT * FROM files WHERE subsession_id=$sub_id;";

              $file_query = mysqli_query($conn, $sql2);
              if($file_query){
                $tmpFile = mysqli_fetch_assoc($file_query);
                $filename = $tmpFile['filename'];
              }
            ?>

              <td>
                <?php _getsubSession($row['subsession_title'])?>
                - <?php _downloadFile($filename); ?>
              </td>
              <td><?php echo $row['presenter'];?></td>
              <td><?php echo _getDay($row['startTime']);?></td>
              <td><?php echo _getTime($row['startTime']);?></td>
              <td><?php echo _getTime($row['endTime']);?></td>
              <td><?php echo $row['modName'];?></td>
            </tr>
            <?php
          }
        ?>

		</table>
		</div>
	</body>

</html>
