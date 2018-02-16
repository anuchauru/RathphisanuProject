<?php require_once('../connections/connections.php'); ?>
<?php
mysql_select_db($database_connections, $connections);
$query_Recordset1 = "SELECT * FROM tb_members";
$Recordset1 = mysql_query($query_Recordset1, $connections) or die(mysql_error());
$row_Recordset1 = mysql_fetch_assoc($Recordset1);
$totalRows_Recordset1 = mysql_num_rows($Recordset1);
?>