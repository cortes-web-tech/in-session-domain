<?php
namespace api;
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include 'DbConnect.php';
session_start();
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
	case "GET":
		$filename = basename($_GET['filename']);
        $filepath = 'uploads/' . $filename;
		
		if(!empty($filename) && file_exists($filepath)){		
			echo $filename;
		}
		exit;
		break;
    case "POST":
        $tmp = json_decode(file_get_contents('php://input'), true);
        $filename = basename($tmp['file']);
        $session_id = $tmp;
        $filepath = 'uploads/' . $filename;
        
        if(!empty($filename) && file_exists($filepath)){		
			echo $filename;
			/*	
			header("Cache-Control: public");
			header("Content-Description: File Transfer");
			header("Content-Disposition: attachment; filename=" . $filename);
			header('Content-Type: application/force-download');
			header("Content-Transfer-Encoding: Binary");
			header('Expires: 0');
			header('Pragma: public');
			readfile('uploads/' . $filename);
			*/
        }else{
            echo "file not found";
        }

        exit();
        break;
    }
/*
if(!empty($_GET['file']))
	{
		$filename = basename($_GET['file']);
		$filepath = 'uploads/' . $filename;
		if(!empty($filename) && file_exists($filepath)){
				// Define headers
				header("Cache-Control: public");
				header("Content-Description: File Transfer");
				header("Content-Disposition: attachment; filename=" . basename($_GET['file']));
				header('Content-Type: application/force-download');
				header("Content-Transfer-Encoding: Binary");
				header('Expires: 0');
				header('Pragma: public');
				//header("Content-Length:" . filesize('uploads/' . $filename);
				readfile('uploads/' . $filename);
				exit;
			}
			else{
				//header("Location: homepage.php?error=NoFile");
				echo "</br>This file does not exist.";
				exit();
			}
		}else{
			//header("Location: homepage.php?error=File_not_found");
			exit();		
		}
        */
?>