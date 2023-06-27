<?php
$filename = $_GET['file'];
$file_id = $_GET['file_id'];
$path = "uploads/" . $filename;
echo $file_id;

if(!file_exists($path)){
    echo "File not found on server";
}else{
    if(!unlink($path)){
        echo "Error";
    }else{
        echo "file deleted";
    }
}

?>