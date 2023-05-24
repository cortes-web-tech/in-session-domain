<?php
date_default_timezone_set('America/New_York');
session_start();
include "functions.php";

function getCurrentTime($dateT){
    $dateT = date("  h:i a", $dateT);
    return $dateT;
  }


if(isset($_SESSION['user_id']) && isset($_SESSION['user_name'])){
		function get_user_tier($usertier){
			switch ($usertier) {
				case "0":
					$usertier = "homepage_" . "presenter" . ".php";
					break;
				case "1":
					$usertier = "homepage_" . "moderator" . ".php";
					break;
				case "2":
					$usertier = "Client";
					break;
				case "3":
					$usertier = "homepage_" . "admin" . ".php";
					break;
				case "4":
					$usertier = "Superadmin";
					break;
				default:
					$usertier = "nawww";
					break;
			}
			return $usertier;
		}
	?>
	<!DOCTYPE html>
	<html>
		<head>
			<title>inSession</title>
			<link rel="stylesheet" type="text/css" href="style.css">
		</head>
		<body>
			<div id="welcome">
				Welcome to inSession.</br>
				An open source Presentation Managament solution.
			</div>
			<nav class="navbar">
				<ul class="leftnav">
					<li><a href="">Home</a></li>
					<li><a href="">Settings</a></li>
				</ul>
				<input type="text" placeholder="Search" class="searchbar">
				<ul class="rightnav">
					<li>Hi <?php
						echo $_SESSION['name'];
						echo ". 🕤 ";
						$t= time();
						echo getCurrentTime($t);
					?></li>
					<li><a href="logout.php">Logout</a></li>
				</ul>
			</nav>
			
				
			<?php 
				if(isset($_GET['error'])){ ?>
					<p class="error"> <?php echo "Error: ".$_GET['error']; ?></p>
				<?php } 

				include(get_user_tier($_SESSION['user_tier']));
			?>
			<form action="uploadFile.php" method="post" enctype="multipart/form-data">
			 	</br>
	      		<label for="file">File upload</label>
	   			</br></br>
	   			
				<button>Upload</button>
	 			<input type="file" id="file" name="file" id="button">
		    </form>
			<div>
		</body>
	</html>
	<?php
}
else {
	header("location: index.php");
	exit();
}
?>
