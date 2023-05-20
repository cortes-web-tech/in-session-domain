<?php
session_start();

if(isset($_SESSION['id']) && isset($_SESSION['user_name'])){
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
				<ul class="rightnav">			
					<li>Logged in as, <?php echo $_SESSION['user_name']; ?></li>
					<li><a href="logout.php">Logout</a></li>
				</ul>
			</nav>
		
			
			<?php include("session.php"); ?>

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