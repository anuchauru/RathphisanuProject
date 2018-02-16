<?php 
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
require_once('../connect/connect.php');

 $content = file_get_contents('php://input');
 $user = json_decode($content, true);

//$user['mm']='login';
if(isset($user['mm'])&&($user['mm']=="login")){
$cl1 = "-1";
if (isset($user['user'])) {
  $cl1 = $user['user'];
}
$cl2 = "-1";
if (isset($user['password'])) {
  $cl2 = $user['password'];
}
 $sql = sprintf("SELECT * FROM `member` where user = %s and password = %s",
	GetSQLValueString($cl1, "text"),
	GetSQLValueString($cl2, "text"));
 $query = $conn->query($sql);
 $row = $query->fetch_assoc();
 $total_num_rows = $query->num_rows; 
if ($total_num_rows>0) {

// date("H")+0 // ชม.
// date("i")+0 // นาที
// date("s")+0 // วินาที
// date("d")+0 // วัน
// date("m")+0 // เดือน
// date("Y")+0 // ปี
//$DateResultNow=date("Y-m-d H:i:s", mktime(date("H")+2, date("i")+0, date("s")+0, date("m")+0 , date("d")+0, date("Y")+0));	
		$token_name = md5(time().rand(1,9999));	
		$token_start = date("Y-m-d H:i:s");
		$token_end = date("Y-m-d H:i:s", mktime(date("H")+3, date("i")+3, date("s")+0, date("m")+0 , date("d")+0, date("Y")+0));
		$m_id = $row['m_id'];
		$insert_tb_token = sprintf("INSERT INTO `tb_token`( `token_name`, `token_start`, `token_end`, `m_id`) VALUES (%s,%s,%s,%s)",
			GetSQLValueString($token_name, "text"),
			GetSQLValueString($token_start, "date"),
			GetSQLValueString($token_end, "date"),
			GetSQLValueString($m_id, "int"));
		$tb_token_query = $conn->query($insert_tb_token);

		   echo json_encode(['status_login' => 'home','token' => $token_name, 'm_id' => $m_id]);
		} else {
		   echo json_encode(['status_login' => 'login']);	
		}
}else{
	 echo json_encode(['status' => 'error','message' => 'เกิดข้อผิดพลาดในการบันทึกข้อมูล']);	
}
$conn->close();
?>
