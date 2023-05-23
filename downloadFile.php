<?php
//	session_start();
	include "db_conn";
//	echo "Landed in download page. </br>";

	if(!empty($_GET['file']))
	{
		$filename = basename($_GET['file']);
		$filepath = 'uploads/' . $filename;
		echo "File path: " . $filepath;
		if(!empty($filename) && file_exists($filepath)){
			echo "</br>File: " . $filename;
			echo "</br> Filepath: " . $filepath;
				// Define headers
				header("Cache-Control: public");
				header("Content-Description: File Transfer");
				header("Content-Disposition: attachment; filename=" . basename($_GET['file']));
				header('Content-Type: application/force-download');
				header("Content-Transfer-Encoding: Binary");
				header('Expires: 0');
				header('Pragma: public');
//				header('Content-Length:' . filesize('uploads/' . $filename);
				@readfile('uploads/' . basename($_GET['file']));
				exit;
			}
			else{
				echo "</br>This file does not exist.";
				exit();
			}
		}

//	header("Location: index.php");
//		exit();
?>

