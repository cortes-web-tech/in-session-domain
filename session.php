<?php
include "db_conn.php";
$sql = "SELECT * FROM sessionData;";
 $results = mysqli_query($conn, $sql);
 $resultCheck = mysqli_num_rows($results);


 if($resultCheck > 0){

 echo "Session Data</br></br>";
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
 				$n = 0;
   while($row = mysqli_fetch_assoc($results)){
   		echo $n . "</br>";
 
   		
   		//echo $sd[$n][0] . " Being presented in: " . $sd[$n][1] . "</br>Starting at: " . $sd[$n][2] . "</br></br>";
   		$n++;

       	echo $row['title'] . "  " . $row['room'] . " " . $row['startTime'] . "</br></br>";
   }
}
 				?>
 			</tr>
 		</table>

 	</body>

 </html>
 
