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
			<h1>Welcome to inSession</h1>
			<h1>Logged in as, <?php echo $_SESSION['user_name']; ?></h1> 
			<h1>An open source Presentation Managament solution.</h1>
			<?php include("session.php"); ?>

			 <form action="uploadFile.php" method="post" enctype="multipart/form-data">
			 	</br>
      			<label for="file">File upload</label>
      			</br></br>
      			<button>Upload</button>
      			<input type="file" id="file" name="file">
		    </form>

		    <a href="todo.php">Todo list</br></a>
			<a href="logout.php">Log out</br></a>
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