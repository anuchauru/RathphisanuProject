<?php 
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
require_once('../connect/connect.php');

 $content = file_get_contents('php://input');
 $user = json_decode($content, true);


if(isset($user['mm_insert'])&&($user['mm_insert']=="mm_insert")){
$m_name = "";
if (isset($user['m_name'])) {
  $m_name = $user['m_name'];
}
$m_lastname = "";
if (isset($user['m_lastname'])) {
  $m_lastname = $user['m_lastname'];
}
$m_acc = "-1";
if (isset($user['m_acc'])) {
  $m_acc = $user['m_acc'];
}
 $insert_member = sprintf("INSERT INTO member(m_name, m_lastname, m_acc) VALUES (%s,%s,%s)",
	GetSQLValueString($m_name, "text"),
	GetSQLValueString($m_lastname, "text"),
	GetSQLValueString($m_acc, "int"));
  $member = $conn->query($insert_member);
if ($member) {
		   echo json_encode(['status' => 'ok','message' => 'บันทึกข้อมูลเรียบร้อยนะ']);
		} else {
		   echo json_encode(['status' => 'error','message' => 'เกิดข้อผิดพลาดในการบันทึกข้อมูล']);	
		}
}else if(isset($user['mm_edit_query'])&&($user['mm_edit_query']=="mm_edit_query")){
	$cl1 = "-1";
	if (isset($user['m_id'])) {
	  $cl1 = $user['m_id'];
	}
	$query_member = sprintf("SELECT * FROM member where m_id = %s",
	GetSQLValueString($cl1 , "text"));
	$member = $conn->query($query_member);
	$row_member = $member->fetch_assoc();
    echo json_encode($row_member,JSON_UNESCAPED_SLASHES);
}else if(isset($user['mm_edit'])&&($user['mm_edit']=="mm_edit")){
	$cl1 = "-1";
	if (isset($user['m_name'])) {
	  $cl1 = $user['m_name'];
	}
	$cl2 = "-1";
	if (isset($user['m_lastname'])) {
	  $cl2 = $user['m_lastname'];
	}
	$cl3 = "-1";
	if (isset($user['m_acc'])) {
	  $cl3 = $user['m_acc'];
	}
	$cl4 = "-1";
	if (isset($user['m_id'])) {
	  $cl4 = $user['m_id'];
	}
	$query_member_edit = sprintf("UPDATE member SET m_name = %s, m_lastname = %s, m_acc = %s WHERE m_id = %s",
	GetSQLValueString($cl1 , "text"),
	GetSQLValueString($cl2 , "text"),
	GetSQLValueString($cl3 , "text"),
	GetSQLValueString($cl4 , "int"));
	$member_edit = $conn->query($query_member_edit);
if ($member_edit) {
		   echo json_encode(['status' => 'ok','message' => 'บันทึกข้อมูลเรียบร้อยนะ']);
		} else {
		   echo json_encode(['status' => 'error','message' => 'เกิดข้อผิดพลาดในการบันทึกข้อมูล']);	
		}
 }else if(isset($user['mm_delete'])&&($user['mm_delete']=="mm_delete")){
	$cl1 = "-1";
	if (isset($user['m_id'])) {
	  $cl1 = $user['m_id'];
	}
	$query_member_delete = sprintf("DELETE FROM `member` WHERE m_id = %s",
	GetSQLValueString($cl1 , "int"));
	$member_delete = $conn->query($query_member_delete);

	
if ($member_delete) {
		   echo json_encode(['status' => 'ok','message' => 'บันทึกข้อมูลเรียบร้อยนะ']);
		} else {
		   echo json_encode(['status' => 'error','message' => 'เกิดข้อผิดพลาดในการลบข้อมูล']);	
		}
//echo json_encode($query_member_delete);
}else{
	 echo json_encode(['status' => 'error','message' => 'เกิดข้อผิดพลาดในการบันทึกข้อมูล']);	
}



//echo $user = json_decode($content, false);

//echo json_encode(['status' => 'ok','message' => 'บันทึกข้อมูลเรียบร้อยนะ']);
// echo $user['mm_insert'];
// echo $user['m_name'];
// echo $user['m_lastname'];
// echo $user['m_acc'];
//echo json_encode($query_member_edit);
// $m_name = $user['m_name'];
// $user['m_lastname'];
//echo json_encode($user,JSON_UNESCAPED_SLASHES);
// $myObj = array();
// $myObj->name = "John";
// $myObj->age = 30;
// $myObj->city = "New York";


//echo $myJSON = json_encode($insert_member);

// echo $myJSON;
//echo json_encode(['status' => 'ok','message' => 'บันทึกข้อมูลเรียบร้อยนะ']);
//$text = array('status' => 'success','message' => 'ลบข้อมูลเรียบร้อยแล้ว');
//echo json_encode($user);

$conn->close();
?>
