<?php
session_start();
header('location:login.php');
$con = mysqli_connect('localhost','root');
if($con){
    echo "Connection Sucessful";
}
else{
    echo "No Connections";
}
mysqli_select_db($con, 'user');
$name = $_POST['username'];
$password = $_POST['password'];

$q = " select * from userinfo where name ='$name' && password ='$password' ";

$result = mysqli_query($con, $q);

$num = mysqli_num_rows($result);

if($num == 1){
    echo "User Already Exists";
}
else{
    $qy = " insert into userinfo(name , password) values ('$name','$password') ";
    mysqli_query($con, $qy);
}
?>