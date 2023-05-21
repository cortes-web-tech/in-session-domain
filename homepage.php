<?php
session_start();

	
if(isset($_SESSION['id']) && isset($_SESSION['user_name'])){
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
					<li>Logged in as, <?php echo $_SESSION['user_name']; ?></li>
					<li><a href="logout.php">Logout</a></li>
				</ul>
			</nav>
			<?php 
				include(get_user_tier($_SESSION['user_tier']));
			?>
				
			<form action="uploadFile.php" method="post" enctype="multipart/form-data">
			 	</br>
	      		<label for="file">File upload</label>
	   			</br></br>
	   			<?php if(isset($_GET['error'])){ ?>
					<p class="error"> <?php echo $_GET['error']; ?></p>
				<?php } ?>	
				<button>Upload</button>
	 			<input type="file" id="file" name="file" id="button">
		    </form>

		    <a href="todo.php">Todo list</br></a>
			<a href="downloadFile.php">Download File</br></a>
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