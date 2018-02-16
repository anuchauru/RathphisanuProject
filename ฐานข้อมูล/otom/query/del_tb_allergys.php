<?php 
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
require_once('../connect/connect.php');

 $content = file_get_contents('php://input');
 $user = json_decode($content, true);

for($i=0; $i<count($user); $i++){
$cl1 = "-1";
if (isset($user[$i]['id_allergys'])) {
$cl1 = $user[$i]['id_allergys'];
}
$sql = sprintf("DELETE FROM `tb_allergys` WHERE  id_allergys = %s",GetSQLValueString($cl1 , "int"));
$query = $conn->query($sql);
}	
// echo json_encode($sql);
if ($query) {
		   echo json_encode(['status' => 'ok','message' => 'บันทึกข้อมูลเรียบร้อยนะ']);
		} else {
		   echo json_encode(['status' => 'error','message' => 'เกิดข้อผิดพลาดในการลบข้อมูล']);	
		}


$conn->close();
?>
