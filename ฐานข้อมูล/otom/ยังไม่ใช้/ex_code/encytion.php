<?php  include('../connect/connect.php'); ?>
<?php 
echo $u_user=" OR username = 'cookiephp' AND TRUE <> ";
echo "<hr>";
$p_pass="admin";
echo $user = mysqli_real_escape_string($conn, $u_user);
$pass = mysqli_real_escape_string($conn, $p_pass);
echo $text = md5($user);;
$num = strlen($text);
$sum=0;
for($i1=0; $i1<$num; $i1++){
  if(is_numeric($text[$i1])){
    $sum=$sum+$text[$i1];
  }
}
echo $sum;
for($i=0; $i<=$sum; $i++){
    $pass = md5($pass);
     
}
   $pass;
     ?> 

