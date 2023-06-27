<?php
session_start();
include "db_conn.php";
$filename = $_GET['file'];
$file_id = $_GET['file_id'];
$path = "uploads/" . $filename;

if(!file_exists($path)){
    echo "File not found on server";
}else{
   

    if(!unlink($path)){
        echo "Error";
    }else{
    $sql = "DELETE FROM `files` WHERE file_id=$file_id";
    mysqli_query($conn, $sql);
    echo '<script type="text/JavaScript">alert("File deleted.");window.location.href="sessions";</script>';
        
    }
}

?>