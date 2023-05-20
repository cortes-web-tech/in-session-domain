<?php
session_start();

	
if(isset($_SESSION['id']) && isset($_SESSION['user_name'])){
		function get_user_tier($usertier){
			switch ($usertier) {
				case "0":
					$usertier = "Presenter";
					break;
				case "1":
					$usertier = "Moderator";
					break;
				case "2":
					$usertier = "Client";
					break;
				case "3":
					$usertier = "Admin";
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

			<div>User tier: <?php echo get_user_tier($_SESSION['user_tier']); ?></div>
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
			<?php include("session.php");?>
				<form action="uploadFile.php" method="post" enctype="multipart/form-data">
			 		</br>
	      			<label for="file">File upload</label>
	      			</br></br>
	      			<button>Upload</button>
	      			<input type="file" id="file" name="file">
		    </form>

		    <a href="todo.php">Todo list</br></a>
			<a href="downloadFile.php">Download File</br></a>
			<div>
		</body>
	</html>

	<?php
}
else {
	
	exit();
}
?>