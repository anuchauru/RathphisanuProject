<?php 
header("Access-Control-Allow-Origin: *");
?>
<?php require_once('../connect/connect.php'); ?>
<?php
$outp = array();
$query_tb_patient_history = "SELECT * FROM tb_patient_history";
$tb_patient_history = $conn->query($query_tb_patient_history);
// $row_member = $member->fetch_assoc();
$outp = $tb_patient_history->fetch_all(MYSQLI_ASSOC);
// //$totalRows_province = $province->num_rows;

// do{
// 	$imgArray[] = $row_member;
// }while($row_member = $member->fetch_assoc());
echo json_encode($outp,JSON_UNESCAPED_SLASHES);

?>