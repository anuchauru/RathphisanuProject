<?php
# FileName="Connection_php_mysql.htm"
# Type="MYSQL"
# HTTP="true"
$hostname_connect = "localhost";
$database_connect = "rathphisanu";
$username_connect = "root";
$password_connect = "1150";
// $hostname_connect = "localhost";
// $database_connect = "hosdb";
// $username_connect = "hosdb";
// $password_connect = "anuchahos";
$conn = new mysqli($hostname_connect, $username_connect, $password_connect, $database_connect);
if ($conn->connect_errno) {
		echo $conn->connect_error;
		exit;
	}
	else
	{
		//echo "Database Connected.";
	}
$conn->set_charset("utf8");	
//mysqli_query($conn, "SET NAMES UTF8");
?>
<?php
date_default_timezone_set('Asia/Bangkok');
if (!isset($_SESSION)) {
  session_start();
}
?>
<?php 
if (!function_exists("GetSQLValueString")) {
function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
{
  if (PHP_VERSION < 6) {
    $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;
  }
  	$hostname_connect = "localhost";
	$username_connect = "root";
	$password_connect = "1150";
	$conn = mysqli_connect($hostname_connect, $username_connect, $password_connect); 
	//conn db
    $theValue = function_exists("mysqli_real_escape_string") ? mysqli_real_escape_string($conn, $theValue) : mysqli_escape_string($conn, $theValue);

  switch ($theType) {
    case "text":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;    
    case "long":
    case "int":
      $theValue = ($theValue != "") ? intval($theValue) : "NULL";
      break;
    case "double":
      $theValue = ($theValue != "") ? doubleval($theValue) : "NULL";
      break;
    case "date":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;
    case "defined":
      $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
      break;
  }
  return $theValue;
}
}
?>
