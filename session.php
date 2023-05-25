<?php
/*
if($_SERVER["REQUEST_METHOD"] !== "POST"){
  header("location: homepage.php?error=Access Denied. Post method required.</br>");
        exit();
}
*/
session_start();
include "db_conn.php";
include "functions.php";
$session_id_check = $_GET['sessionID'];
$sql = "SELECT * FROM subsessionData WHERE _session_id=$session_id_check;";
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
    <div> 
      <a href="homepage.php">Home</a>
    </br><a href="sessions.php">Sessions</a>
  </br><br>
    </div>
    <div>
      <?php 
        if(isset($_GET['error'])){ ?>
          <p class="error"> <?php echo "Error: ".$_GET['error']; ?></p>
        <?php } 
        ?>
    </div>
		<div class="session_data_wrapper">
      <h4>Session</h4>
      <h1>
        <?php 
        echo getSessionTitle($_GET['sessionID'], $conn);
          
        ?>
      </h1>
 		<table class="session_data_table">
 			<tr>
 				<td><h4>Subsession Title</h4></td> 				
        <td><h4>Day</h4></td>
 				<td><h4>Start Time</h4></td>
        <td><h4>End Time</h4></td>
        <td><h4>Presenter</h4> </td>
				<td><h4>Moderator</h4></td>
 			</tr>
 			<tr>
 				<?php
   while($row = mysqli_fetch_assoc($results)){
    ?>
      <td>
        <?php _getsubSession($row['subsession_title'], $row['subsession_id']);?>
               

        
      </td>     
      <td><?php echo _getDay($row['startTime']);?></td>
      <td><?php echo _getTime($row['startTime']);?></td>
      <td><?php echo _getTime($row['endTime']);?></td>
      <td>
       <?php
          // Get Sub Session id
          $sub_id = $row['subsession_id'];
  
          // Get speakers
          $getPresenterQuery = "SELECT * FROM subsessionData WHERE subsession_id='$sub_id';";
          $getPresenter = mysqli_query($conn, $getPresenterQuery);
          $getPresenterCheck = mysqli_num_rows($getPresenter);
        ?>

        <?php
          while($presenters = mysqli_fetch_assoc($getPresenter)){
            ?>
            <a href=""><?php echo $presenters['presenter']."</br>";?></a>
        
        <?php
          }
        ?>

      </td>
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
