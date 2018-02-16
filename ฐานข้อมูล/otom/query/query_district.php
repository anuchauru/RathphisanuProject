<?php 
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
require_once('../connect/connect.php');

 $content = file_get_contents('php://input');
 $user = json_decode($content, true);
$cl1 = "-1";
if (isset($user)) {
  $cl1 = $user;
}
 $sql = sprintf("SELECT * FROM  district where AMPHUR_ID = %s",
	GetSQLValueString($cl1, "text"));
 $query = $conn->query($sql);
 $outp = $query->fetch_all(MYSQLI_ASSOC);
// echo json_encode($sql); 
echo json_encode($outp,JSON_UNESCAPED_SLASHES);

?>
