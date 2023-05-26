<!DOCTYPE html>
<html>
<head>
	<title>Login</title>
	<link rel="stylesheet" type="text/css" href="views/style.css"/>
</head>
<body>
	<div id="welcome">
		Welcome to inSession.</br>
		An open source Presentation Managament solution.
	</div>

	<form action="login.php" method="post">
		<h2>Login</h2>
		<?php if(isset($_GET['error'])){ ?>
			<p class="error"> <?php echo $_GET['error']; ?></p>
		<?php } ?>	
		
		<label> User Name</label>
		<input type="text" name="uname" placeholder="User name"><br>
		<label>Password</label>
		<input type="password" name="password" placeholder="Password"><br>

		<button type="Log in" id="login_button">Log In</button>
	</form>

</html>