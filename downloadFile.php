	<?php
		session_start();
		include "db_conn";

		echo "Landed in download page. </br>";
		if(!empty($_GET['file']))
		{
			$filename = basename($_GET['file']);
			$filepath = './uploads/' . $filename;
			echo "File path: " . $filepath;
			if(!empty($filename) && file_exists($filepath)){
				echo "</br>File exists.";
				// Define headers
				header("Cache-Control: public");
				header("Content-Description: File Transfer");
				header("Content-Disposition: Attachment; Filename=$filename");
//				header("Content-Type: application/zip");
//				header("Content-Transfer-Encoding: Binary");
			//	readfile($filepath);
				exit();
			}
			else{
				echo "</br>This file does not exist.";
				exit();
			}
		}

	//	header("Location: index.php");
	//		exit();
	?>

