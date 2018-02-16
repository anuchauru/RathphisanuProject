<?php 
header("Access-Control-Allow-Origin: *");
?>
<?php require_once('../connect/connect.php'); ?>
<?php
$outp = array();
$sql = "SELECT * FROM  tb_screening left join  tb_patient_history on tb_screening.id_ph = tb_patient_history.id_ph ORDER BY  `tb_screening`.`status` ASC,`tb_screening`.`id_screening` ASC";
$query = $conn->query($sql);
// $row_member = $member->fetch_assoc();
$outp = $query->fetch_all(MYSQLI_ASSOC);
// //$totalRows_province = $province->num_rows;

// do{
// 	$imgArray[] = $row_member;
// }while($row_member = $member->fetch_assoc());
echo json_encode($outp,JSON_UNESCAPED_SLASHES);

?>