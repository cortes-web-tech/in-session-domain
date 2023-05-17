<!DOCTYPE html>
<html>
<head>
	<title>File download micro service</title>

	<?php

	echo "1";
		if(!empty($_GET['file']))
		{
	echo "2";
			$filename = basename($_GET['file']);
			$filepath = 'destination/' . $filename;
			if(!empty($filename) && !file_exists($filepath)){
				// Define headers
				header("Cache-Control: public");
				header("Content-Description: File Transfer");
				header("Content-Disposition: Attachement; filename=$filename");
				header("Content-Type: application/zip");
				header("Content-Transfer-Encoding: binary");

				readfile($filepath);
				exit();
			}
			else{
				echo "This file does not exist.";
				exit();
			}
		}

	//	header("Location: index.php");
	//		exit();
	?>
</head>


</html>
