<?php 
 session_start();
 session_destroy();

 function redirect($url){
  echo
      "<script>window.location.href='$url';
      </script>";
      exit;
 }

 redirect('login.php');
?>