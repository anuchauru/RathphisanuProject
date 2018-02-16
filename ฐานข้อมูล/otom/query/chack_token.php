<?php 
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
require_once('../connect/connect.php');

 $content = file_get_contents('php://input');
 $user = json_decode($content, true);
// $user['token']="f83a64805e9ae60bfc87ebf78d03f99e";
// $user['m_id']="2";
if(isset($user['token'])){
$cl1 = "-1";
if (isset($user['token'])) {
  $cl1 = $user['token'];
}
$cl2 = "-1";
if (isset($user['m_id'])) {
  $cl2 = $user['m_id'];
}
 $sql = sprintf("SELECT * FROM `tb_token` where token_name = %s and m_id = %s",
	GetSQLValueString($cl1, "text"),
	GetSQLValueString($cl2, "text"));
 $query = $conn->query($sql);
 $row = $query->fetch_assoc();
 $total_num_rows = $query->num_rows; 
 $time = date("Y-m-d H:i:s");
if ($total_num_rows>0) {
	$time = date("Y-m-d H:i:s");
		    if(($row['token_start']<=$time)&&($time<=$row['token_end'])){ 
	        echo json_encode(['status' => 'ture']);
		    }else{
		    echo json_encode(['status' => 'false']);	
		    }
			   // echo json_encode(['status_login' => 'home','token' => $token_name]);
		} else {
		   echo json_encode(['status_login' => 'login']);	
		}
}else{
	 echo json_encode(['status' => 'error','message' => 'เกิดข้อผิดพลาดในการบันทึกข้อมูล']);	
}
$conn->close();
?>
