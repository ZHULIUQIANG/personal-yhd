<?php
header("content-type:application/json;charset=utf-8");
@$uname=$_REQUEST['uname'] or die ('{"code":-2,"msg":"用户名不能为空"}');
@$upwd=$_REQUEST['upwd'] or die ('{"code":-1,"msg":"密码不能为空"}');
require('init.php');
$sql="SELECT * FROM yhd_user WHERE uname='$uname' AND upwd='$upwd'";
$result = mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
if($row===null){
    echo '{"code":-1,"msg":"用户名或者密码错误"}';
}else{
    $row=["code"=>1,"msg"=>"登录成功","uname"=>$row['uname'],"uid"=>$row['uid']];
    echo json_encode($row);
}
?>
