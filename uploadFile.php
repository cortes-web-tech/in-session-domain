<?php
 if($_SERVER["REQUEST_METHOD"] !== "POST"){
    exit("POST method required to access this page.");
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

if($_FILES["file"]["error"] !== UPLOAD_ERR_OK){
    echo "</br>Error:</br>";
 switch($_FILES["file"]["error"]){
    case UPLOAD_ERR_PARTIAL:
     exit("</br>File partially uploaded. Not complete.");
     break;
    case UPLOAD_ERR_NO_FILE:
     exit("</br>No file was chosen. Plesae try again.");
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
/*
 $code = $data["error"];
 if ($code !== UPLOAD_ERR_OK){
  exit("Upload error");
 }
 $src = $datap["tmp_name"];

*/
echo "</br>" . $filename . " was successfully upload.</br>";
?>
