<?php
    $hname = 'localhost';
    $uname = 'root';
    $pass = '';
    $db = 'qcu_db';

    $conn = mysqli_connect($hname,$uname,$pass,$db);

    if(!$conn){
        die("Cannot connect to database". mysqli_connect_error());    
    }

?>