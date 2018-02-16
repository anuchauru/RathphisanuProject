<?php 
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
require_once('../connect/connect.php');

 $content = file_get_contents('php://input');
 $user = json_decode($content, true);

for($i=0; $i<count($user); $i++){
$id_report_allergys[$i] = "-1";
if (isset($user[$i]['id_report_allergys'])) {
  $id_report_allergys[$i] = $user[$i]['id_report_allergys'];
}
$id_medicine[$i] = "-1";
if (isset($user[$i]['id_medicine'])) {
  $id_medicine[$i] = $user[$i]['id_medicine'];
}
$symptom_allergys[$i] = "null";
if (isset($user[$i]['symptom_allergys'])) {
  $symptom_allergys[$i] = $user[$i]['symptom_allergys'];
}
$note_allergys[$i] = "null";
if (isset($user[$i]['note_allergys'])) {
  $note_allergys[$i] = $user[$i]['note_allergys'];
}
$id_ph[$i] = "-1";
if (isset($user[$i]['id_ph'])) {
  $id_ph[$i] = $user[$i]['id_ph'];
}
 $insert_tb_allergys[$i] = sprintf("INSERT INTO `tb_allergys`(`id_report_allergys`, `id_medicine`, `symptom_allergys`, `note_allergys`, `id_ph`) VALUES (%s,%s,%s,%s,%s)",
 	GetSQLValueString($id_report_allergys[$i], "int"),
	GetSQLValueString($id_medicine[$i], "int"),
	GetSQLValueString($symptom_allergys[$i], "text"),
	GetSQLValueString($note_allergys[$i], "text"),
	GetSQLValueString($id_ph[$i], "int"));
  $tb_allergys[$i] = $conn->query($insert_tb_allergys[$i]);
}
echo json_encode(['status' => 'ok','message' => 'บันทึกข้อมูลเรียบร้อยนะ']);
?>