<?php

session_start();
include "db_conn.php";

 if($_SERVER["REQUEST_METHOD"] !== "POST"){
    exit("POST method required to access this page.");
 }

if($_FILES["file"]["error"] !== UPLOAD_ERR_OK){
   echo "</br>Error:</br>";
   switch($_FILES["file"]["error"]){
      case UPLOAD_ERR_PARTIAL:
         exit("</br>File partially uploaded. Not complete.");
         break;
      case UPLOAD_ERR_NO_FILE:
         header("Location: homepage.php?error=No file was chosen.");
         exit();
         break;
      case UPLOAD_ERR_EXTENSION:
         exit("<br/>File upload stopped by a PHP extension.");
         break;
      case UPLOAD_ERR_NO_TMP_DIR:
         exit("Temporary folder not found.");
         break;
      case UPLOAD_ERR_CANT_WRITE:
         exit("Failed to write file.");
         break;
      default:
         exit("Unknown upload error");
         break;
      }
}

$filename = $_FILES["file"]["name"];
 // $filesize = $_FILES["file"]["size"];
 // $filetype = $_FILES["file"]["type"];
$dest = __DIR__ . "/uploads/" . $filename;
if(!move_uploaded_file($_FILES["file"]["tmp_name"], $dest)){
   exit("Can't move uploaded file.. Try again.");
}


// Alerts successful file upload. Redirects to home page.
if($_FILES["file"]["error"] === UPLOAD_ERR_OK){
   echo '<script type="text/JavaScript">alert("File uploaded successfully!");window.location.href="homepage.php";</script>';
   exit();
   }


/*
 File type extensions
 $finfo = new finfo(FILEINFO_MIME_TYPE);
 $mime_type = $finfo->file($_FILES["file"]["tmp_name"]);
 echo $mime_type . "</br>";

 // print_r($_FILES);
 // applcation/zip
 // application/x-iwork-keynote-sffkey
 // application/pdf
*/

 /*
Need to create database to store files in. Only being stored on server right now.
$uploadQry = "INSERT into test_file_db('filename') VALUES ('$filename')";
$result = mysqli_query($conn, $uploadQry);
$result = 1;
*/

?>