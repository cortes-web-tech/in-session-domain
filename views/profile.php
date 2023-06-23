<?php 
session_start();
include "../db_conn.php";
include "../utils/functions.php";

$user_id = $_GET['userId'];
$getUserInfoQuery = "SELECT * FROM user_info WHERE user_id=$user_id;";
$getUserInfo = mysqli_query($conn, $getUserInfoQuery);


?>
<!DOCTYPE html>
<html>
	<head>
		<title>Home</title>
			<link rel="stylesheet" type="text/css" href="style.css">
	</head>
	<body>
		<div id="welcome">
			Welcome to inSession.</br>
			An open source Presentation Managament solution.
		</div>
		<nav class="navbar">
			<ul class="leftnav">
				<li><a href="homepage.php">Home</a></li>
				<!-- <li><a href="">Profile</a></li> -->
			</ul>
			
			<ul class="rightnav">
				<li>Hi <?php
					echo $_SESSION['name'];
					echo _getCurrentTime($t);
					?></li>
				<li><a href="../logout.php">Logout</a></li>
			</ul>
		</nav>

		<div class ="userProfileWrapper">
			<div class="userProfileData">
				<?php
						  while($user = mysqli_fetch_assoc($getUserInfo)){
						  	?>
				<table>
					<ul>
						<li>Name</li>
						<li>Email</li>
						<li>First Name</li>
						<li>Middle Name</li>
						<li> Last Name</li>
					</ul>
				</table>
				<table>
					
					<ul>
						

						 
						<li><?php echo $user['fullName']; ?></li>
						<li><?php echo $user['email']; ?></li>
						<li><?php echo $user['firstName']; ?></li>
						<li><?php echo $user['middleName'] . "</br>"; ?></li>
						<li><?php echo $user['lastName']; ?></li>
 			
					</ul>

				</table>
			</div>

			<div class="userProfileData">
				<table>
					<ul>
						<li>Prefix</li>
						<li>Suffix</li>
						<li>Pronouns</li>
						<li>Organization</li>
					</ul>
				</table>
				<table>
					<ul>						 
						<li><?php echo $user['prefix'] . "</br>"; ?></li>
						<li><?php echo $user['suffix'] ."</br>";?></li>
						<li><?php echo $user['pronouns'] . "</br>"; ?></li>
						<li><?php echo $user['organization'] . "</br>" ?></li>
						
 						
					</ul>
				</table>
					<?php 
				
						}

						  ?>
			</div>

		</div>
	</body>

</html>
			

