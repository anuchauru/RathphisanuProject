<?php 
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
require_once('../connect/connect.php');

 $content = file_get_contents('php://input');
 $user = json_decode($content, true);
// $user['mm_edit']="mm_edit"; 
 // $user['mm']="query";
 // $user['id_screening']="11";
if(isset($user['mm'])&&($user['mm']=="")){

$name_ph = "null";
if (isset($user['name_ph'])) {
  $name_ph = $user['name_ph'];
}
$lastname_ph = "null";
if (isset($user['lastname_ph'])) {
  $lastname_ph = $user['lastname_ph'];
}
$sex_ph = "-1";
if (isset($user['sex_ph'])) {
  $sex_ph = $user['sex_ph'];
}
$age_ph = "-1";
if (isset($user['age_ph'])) {
  $age_ph = $user['age_ph'];
}

$id_card_ph = "-1";
if (isset($user['id_card_ph'])) {
  $id_card_ph = $user['id_card_ph'];
}

$add_ph = "-1";
if (isset($user['add_ph'])) {
  $add_ph = $user['add_ph'];
}
$insert_tb_patient_history = sprintf("INSERT INTO tb_patient_history(name_ph, lastname_ph, sex_ph, age_ph, id_card_ph, add_ph) VALUES (%s,%s,%s,%s,%s,%s)",
	GetSQLValueString($name_ph, "text"),
	GetSQLValueString($lastname_ph, "text"),
	GetSQLValueString($sex_ph, "text"),
	GetSQLValueString($age_ph, "text"),
	GetSQLValueString($id_card_ph, "text"),
	GetSQLValueString($add_ph, "int"));
  $tb_patient_history = $conn->query($insert_tb_patient_history);
if ($tb_patient_history) {
		   echo json_encode(['status' => 'ok','message' => 'บันทึกข้อมูลเรียบร้อยนะ']);
		} else {
		   echo json_encode(['status' => 'error','message' => 'เกิดข้อผิดพลาดในการบันทึกข้อมูล']);	
		}

}else if(isset($user['mm'])&&($user['mm']=="query")){

	$cl1 = "-1";
	if (isset($user['id_screening'])) {
	  $cl1 = $user['id_screening'];
	}
	$sql = sprintf("SELECT * FROM tb_screening left join tb_patient_history on tb_screening.id_ph = tb_patient_history.id_ph where tb_screening.id_screening = %s",
	GetSQLValueString($cl1 , "text"));
	$query = $conn->query($sql);
	$row = $query->fetch_assoc();
	$date=date_create($row['last_update']);
	$las = date_format($date,"Y-m-d");
	$time = date_format($date,"H:i");
	array_push($row,$las,$time);
	 // array_push($row,"dog" => "cat","dog1" => "cat");
    echo json_encode($row,JSON_UNESCAPED_SLASHES);

}else if(isset($user['mm'])&&($user['mm']=="update")){
    

    $id_types = "0";
	if (isset($user['id_types'])) {
	  $id_types = $user['id_types'];
	}
	$id_department = "0";
	if (isset($user['id_department'])) {
	  $id_department = $user['id_department'];
	}
	$id_room = "0";
	if (isset($user['id_room'])) {
	  $id_room = $user['id_room'];
	}
	$weight = "0";
	if (isset($user['weight'])) {
	  $weight = $user['weight'];
	}
	$height = "0";
	if (isset($user['height'])) {
	  $height = $user['height'];
	}
	$blood_pressure_top = "0";
	if (isset($user['blood_pressure_top'])) {
	  $blood_pressure_top = $user['blood_pressure_top'];
	}
	$blood_pressure_down = "0";
	if (isset($user['blood_pressure_down'])) {
	  $blood_pressure_down = $user['blood_pressure_down'];
	}

    $heat = "0";
	if (isset($user['heat'])) {
	  $heat = $user['heat'];
	}
	$HR = "0";
	if (isset($user['HR'])) {
	  $HR = $user['HR'];
	}
	$Pulse = "0";
	if (isset($user['Pulse'])) {
	  $Pulse = $user['Pulse'];
	}
	$RR = "0";
	if (isset($user['RR'])) {
	  $RR = $user['RR'];
	}
	$waistline = "0";
	if (isset($user['waistline'])) {
	  $waistline = $user['waistline'];
	}
	$smoking = "0";
	if (isset($user['smoking'])) {
	  $smoking = $user['smoking'];
	}
	$drinking = "";
	if (isset($user['drinking'])) {
	  $drinking = $user['drinking'];
	}
	$status = "0";
	if (isset($user['status'])) {
	  $status = $user['status'];
	}
	$id_screening = "0";
	if (isset($user['id_screening'])) {
	  $id_screening = $user['id_screening'];
	}
	$sql = sprintf("UPDATE `tb_screening` SET `id_types`=%s,`id_department`=%s,`id_room`=%s,`weight`=%s,`height`=%s,`blood_pressure_top`=%s,`blood_pressure_down`=%s,`heat`=%s,`HR`=%s,`Pulse`=%s,`RR`=%s,`waistline`=%s,`smoking`=%s,`drinking`=%s,`status`=%s WHERE id_screening = %s",
	GetSQLValueString($id_types , "int"),
	GetSQLValueString($id_department , "int"),	
	GetSQLValueString($id_room , "int"),
	GetSQLValueString($weight , "text"),
	GetSQLValueString($height , "text"),
	GetSQLValueString($blood_pressure_top , "text"),
	GetSQLValueString($blood_pressure_down , "text"),
	GetSQLValueString($heat , "text"),
	GetSQLValueString($HR , "text"),
	GetSQLValueString($Pulse , "text"),
	GetSQLValueString($RR , "text"),
	GetSQLValueString($waistline , "text"),
	GetSQLValueString($smoking , "text"),
	GetSQLValueString($drinking , "text"),
	GetSQLValueString($status , "int"),
	GetSQLValueString($id_screening , "int"));
	$query = $conn->query($sql);
if ($query) {
		   echo json_encode(['status' => 'ok','message' => 'บันทึกข้อมูลเรียบร้อยนะ']);
		} else {
		   echo json_encode(['status' => 'error','message' => 'เกิดข้อผิดพลาดในการบันทึกข้อมูล']);	
		}
	
 }else if(isset($user['mm_delete'])&&($user['mm_delete']=="mm_delete")){
	$cl1 = "-1";
	if (isset($user['id_ph'])) {
	  $cl1 = $user['id_ph'];
	}
	$query_tb_patient_history_delete = sprintf("DELETE FROM `tb_patient_history` WHERE id_ph = %s",
	GetSQLValueString($cl1 , "int"));
	$tb_patient_history_delete = $conn->query($query_tb_patient_history_delete);

	
if ($tb_patient_history_delete) {
		   echo json_encode(['status' => 'ok','message' => 'บันทึกข้อมูลเรียบร้อยนะ']);
		} else {
		   echo json_encode(['status' => 'error','message' => 'เกิดข้อผิดพลาดในการลบข้อมูล']);	
		}
//echo json_encode($query_member_delete);
}else if(isset($user['mm_insert'])&&($user['mm_insert']=="tb_screening")){


$cl1 = "-1";
if (isset($user['id_ph'])) {
  $cl1 = $user['id_ph'];
}
$insert_tb_screening = sprintf("INSERT INTO `tb_screening`(id_ph) VALUES (%s)",
	GetSQLValueString($cl1, "int"));
$tb_screening = $conn->query($insert_tb_screening);

if ($tb_screening) {
		   echo json_encode(['status' => 'ok','message' => 'บันทึกข้อมูลเรียบร้อยนะ']);
		} else {
		   echo json_encode(['status' => 'error','message' => 'เกิดข้อผิดพลาดในการบันทึกข้อมูล']);	
		}


}else if(isset($user['mm_insert'])&&($user['mm_insert']=="search")){

$outp = array();

$cl1 = "-1";
if (isset($user['search'])) {
  $cl1 = $user['search'];
}
$cl2 = "-1";
if (isset($user['key_search'])) {
  $cl2 = "%".$user['key_search']."%";
}
$query_tb_patient_history = sprintf("SELECT * FROM tb_patient_history where $cl1 LIKE %s",
	GetSQLValueString($cl2, "text"));
$tb_patient_history = $conn->query($query_tb_patient_history);
// $row_member = $member->fetch_assoc();
$outp = $tb_patient_history->fetch_all(MYSQLI_ASSOC);
// //$totalRows_province = $province->num_rows;

// do{
// 	$imgArray[] = $row_member;
// }while($row_member = $member->fetch_assoc());
echo json_encode($outp,JSON_UNESCAPED_SLASHES);

 // echo json_encode($query_tb_patient_history);	

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
