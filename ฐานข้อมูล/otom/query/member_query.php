<?php 
header("Access-Control-Allow-Origin: *");
?>
<?php require_once('../connect/connect.php'); ?>
<?php
$outp = array();
$query_member = "SELECT * FROM member";
$member = $conn->query($query_member);
// $row_member = $member->fetch_assoc();
$outp = $member->fetch_all(MYSQLI_ASSOC);
// //$totalRows_province = $province->num_rows;

// do{
// 	$imgArray[] = $row_member;
// }while($row_member = $member->fetch_assoc());
echo json_encode($outp,JSON_UNESCAPED_SLASHES);

?>