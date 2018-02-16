<?php 
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
require_once('../connect/connect.php');

 $content = file_get_contents('php://input');
 $user = json_decode($content, true);
// $user['mm_edit']="mm_edit"; 
if(isset($user['mm_insert'])&&($user['mm_insert']=="mm_insert")){
$id_ph = "-1";
if (isset($user['id_ph'])) {
  $id_ph = $user['id_ph'];
}
$PRENAME_ID = "-1";
if (isset($user['PRENAME_ID'])) {
  $PRENAME_ID = $user['PRENAME_ID'];
}
$name_ph = "null";
if (isset($user['name_ph'])) {
  $name_ph = $user['name_ph'];
}
$lastname_ph = "null";
if (isset($user['lastname_ph'])) {
  $lastname_ph = $user['lastname_ph'];
}
$birthday = "";
if (isset($user['birthday'])) {
  $birthday = $user['birthday'];
}
$time_birthday = "";
if (isset($user['time_birthday'])) {
  $time_birthday = $user['time_birthday'];
}
$sex_ph = "-1";
if (isset($user['sex_ph'])) {
  $sex_ph = $user['sex_ph'];
}
$no = "";
if (isset($user['no'])) {
  $no = $user['no'];
}
$moo = "";
if (isset($user['moo'])) {
  $moo = $user['moo'];
}
$road = "";
if (isset($user['road'])) {
  $road = $user['road'];
}
$PROVINCE_ID = "-1";
if (isset($user['PROVINCE_ID'])) {
  $PROVINCE_ID = $user['PROVINCE_ID'];
}
$AMPHUR_ID = "-1";
if (isset($user['AMPHUR_ID'])) {
  $AMPHUR_ID = $user['AMPHUR_ID'];
}
$DISTRICT_ID = "-1";
if (isset($user['DISTRICT_ID'])) {
  $DISTRICT_ID = $user['DISTRICT_ID'];
}
$OCCUPATION_ID = "-1";
if (isset($user['OCCUPATION_ID'])) {
  $OCCUPATION_ID = $user['OCCUPATION_ID'];
}
$tel_ph = "-";
if (isset($user['tel_ph'])) {
  $tel_ph = $user['tel_ph'];
}
$ETHNICITYE_ID = "-1";
if (isset($user['ETHNICITYE_ID'])) {
  $ETHNICITYE_ID = $user['ETHNICITYE_ID'];
}
$NATIONALITY_ID = "-1";
if (isset($user['NATIONALITY_ID'])) {
  $NATIONALITY_ID = $user['NATIONALITY_ID'];
}
$RELIGION_ID = "-1";
if (isset($user['RELIGION_ID'])) {
  $RELIGION_ID = $user['RELIGION_ID'];
}
 $insert_tb_patient_history = sprintf("INSERT INTO `tb_patient_history`(`id_ph`,`PRENAME_ID`, `name_ph`, `lastname_ph`, `birthday`, `time_birthday`, `sex_ph`, `no`, `moo`, `road`, `PROVINCE_ID`, `AMPHUR_ID`, `DISTRICT_ID`, `OCCUPATION_ID`, `tel_ph`, `ETHNICITYE_ID`, `NATIONALITY_ID`, `RELIGION_ID`) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)",
 	GetSQLValueString($id_ph, "int"),
	GetSQLValueString($PRENAME_ID, "int"),
	GetSQLValueString($name_ph, "text"),
	GetSQLValueString($lastname_ph, "text"),
	GetSQLValueString($birthday, "date"),
	GetSQLValueString($time_birthday, "text"),
	GetSQLValueString($sex_ph, "text"),
    GetSQLValueString($no, "text"),
	GetSQLValueString($moo, "text"),
	GetSQLValueString($road, "text"),
	GetSQLValueString($PROVINCE_ID, "int"),
	GetSQLValueString($AMPHUR_ID, "int"),
	GetSQLValueString($DISTRICT_ID, "int"),
	GetSQLValueString($OCCUPATION_ID, "int"),
	GetSQLValueString($tel_ph, "text"),
	GetSQLValueString($ETHNICITYE_ID, "int"),
	GetSQLValueString($NATIONALITY_ID, "int"),
	GetSQLValueString($RELIGION_ID, "int"));
  $tb_patient_history = $conn->query($insert_tb_patient_history);
   // echo json_encode($insert_tb_patient_history);
if ($tb_patient_history) {
		   echo json_encode(['status' => 'ok','message' => 'บันทึกข้อมูลเรียบร้อยนะ']);
		} else {
		   echo json_encode(['status' => 'error','message' => 'เกิดข้อผิดพลาดในการบันทึกข้อมูล']);	
		}

}else if(isset($user['mm_edit_query'])&&($user['mm_edit_query']=="mm_edit_query")){

	$cl1 = "-1";
	if (isset($user['id_ph'])) {
	  $cl1 = $user['id_ph'];
	}
	$query_tb_patient_history = sprintf("SELECT * FROM tb_patient_history left join tb_pername on tb_patient_history.PRENAME_ID = tb_pername.PRENAME_ID where tb_patient_history.id_ph = %s",
	GetSQLValueString($cl1 , "text"));
	$tb_patient_history = $conn->query($query_tb_patient_history);
	$row_tb_patient_history = $tb_patient_history->fetch_assoc();
    echo json_encode($row_tb_patient_history,JSON_UNESCAPED_SLASHES);

}else if(isset($user['mm_edit'])&&($user['mm_edit']=="mm_edit")){
	
	$PRENAME_ID = "-1";
	if (isset($user['PRENAME_ID'])) {
	  $PRENAME_ID = $user['PRENAME_ID'];
	}
	$name_ph = "null";
	if (isset($user['name_ph'])) {
	  $name_ph = $user['name_ph'];
	}
	$lastname_ph = "null";
	if (isset($user['lastname_ph'])) {
	  $lastname_ph = $user['lastname_ph'];
	}
	$birthday = "";
	if (isset($user['birthday'])) {
	  $birthday = $user['birthday'];
	}
	$time_birthday = "";
	if (isset($user['time_birthday'])) {
	  $time_birthday = $user['time_birthday'];
	}
	$sex_ph = "-1";
	if (isset($user['sex_ph'])) {
	  $sex_ph = $user['sex_ph'];
	}
	$no = "";
	if (isset($user['no'])) {
	  $no = $user['no'];
	}
	$moo = "";
	if (isset($user['moo'])) {
	  $moo = $user['moo'];
	}
	$road = "";
	if (isset($user['road'])) {
	  $road = $user['road'];
	}
	$PROVINCE_ID = "-1";
	if (isset($user['PROVINCE_ID'])) {
	  $PROVINCE_ID = $user['PROVINCE_ID'];
	}
	$AMPHUR_ID = "-1";
	if (isset($user['AMPHUR_ID'])) {
	  $AMPHUR_ID = $user['AMPHUR_ID'];
	}
	$DISTRICT_ID = "-1";
	if (isset($user['DISTRICT_ID'])) {
	  $DISTRICT_ID = $user['DISTRICT_ID'];
	}
	$OCCUPATION_ID = "-1";
	if (isset($user['OCCUPATION_ID'])) {
	  $OCCUPATION_ID = $user['OCCUPATION_ID'];
	}
	$tel_ph = "-";
	if (isset($user['tel_ph'])) {
	  $tel_ph = $user['tel_ph'];
	}
	$ETHNICITYE_ID = "-1";
	if (isset($user['ETHNICITYE_ID'])) {
	  $ETHNICITYE_ID = $user['ETHNICITYE_ID'];
	}
	$NATIONALITY_ID = "-1";
	if (isset($user['NATIONALITY_ID'])) {
	  $NATIONALITY_ID = $user['NATIONALITY_ID'];
	}
	$RELIGION_ID = "-1";
	if (isset($user['RELIGION_ID'])) {
	  $RELIGION_ID = $user['RELIGION_ID'];
	}
	$id_ph = "-1";
	if (isset($user['id_ph'])) {
	  $id_ph = $user['id_ph'];
	}
	$query_tb_patient_history = sprintf("UPDATE tb_patient_history SET `PRENAME_ID`=%s,`name_ph`=%s,`lastname_ph`=%s,`birthday`=%s,`time_birthday`=%s,`sex_ph`=%s,`no`=%s,`moo`=%s,`road`=%s,`PROVINCE_ID`=%s,`AMPHUR_ID`=%s,`DISTRICT_ID`=%s,`OCCUPATION_ID`=%s,`tel_ph`=%s,`ETHNICITYE_ID`=%s,`NATIONALITY_ID`=%s,`RELIGION_ID`=%s WHERE id_ph = %s",
	GetSQLValueString($PRENAME_ID, "int"),
	GetSQLValueString($name_ph, "text"),
	GetSQLValueString($lastname_ph, "text"),
	GetSQLValueString($birthday, "date"),
	GetSQLValueString($time_birthday, "text"),
	GetSQLValueString($sex_ph, "text"),
    GetSQLValueString($no, "text"),
	GetSQLValueString($moo, "text"),
	GetSQLValueString($road, "text"),
	GetSQLValueString($PROVINCE_ID, "int"),
	GetSQLValueString($AMPHUR_ID, "int"),
	GetSQLValueString($DISTRICT_ID, "int"),
	GetSQLValueString($OCCUPATION_ID, "int"),
	GetSQLValueString($tel_ph, "text"),
	GetSQLValueString($ETHNICITYE_ID, "int"),
	GetSQLValueString($NATIONALITY_ID, "int"),
	GetSQLValueString($RELIGION_ID, "int"),
	GetSQLValueString($id_ph , "int"));
	$tb_patient_history = $conn->query($query_tb_patient_history);
if ($tb_patient_history) {
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
