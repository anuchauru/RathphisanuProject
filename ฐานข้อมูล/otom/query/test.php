<?php 
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
require_once('../connect/connect.php');

echo $content = file_get_contents('php://input');
 $user = json_decode($content, true);

$conn->close();
?>
