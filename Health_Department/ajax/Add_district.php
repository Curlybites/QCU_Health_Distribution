<?php 
require "../inc/connection.php";
if(isset($_POST['add_district'])) {
  $frm_data = filteration($_POST);

  $query = "INSERT INTO `districts`(`district_no`) VALUES (?)";
  $values = [$frm_data['district_no']];
  $res = insert($query, $values, 'i');
  echo $res;
}

?>

