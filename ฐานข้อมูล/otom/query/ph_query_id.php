<?php 
header("Access-Control-Allow-Origin: *");
?>
<?php require_once('../connect/connect.php'); ?>
<?php
$outp = array();
$query_tb_patient_history = "SELECT id_ph FROM `tb_patient_history` ORDER BY `tb_patient_history`.`id_ph` DESC";
$tb_patient_history = $conn->query($query_tb_patient_history);
$outp = $tb_patient_history->fetch_assoc();
$id_ph = $outp['id_ph']+1;
// $outp = $tb_patient_history->fetch_all(MYSQLI_ASSOC);
// //$totalRows_province = $province->num_rows;

// do{
// 	$imgArray[] = $row_member;
// }while($row_member = $member->fetch_assoc());
echo json_encode($id_ph,JSON_UNESCAPED_SLASHES);

?>