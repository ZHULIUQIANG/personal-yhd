////表单验证
//// 1、验证uname  获得焦点时显示提示信息
////
////失去焦点时验证用户名是否符合要求var unameIstrue=true;
//$('#uname').focus(function(){
//   $('.vali_Info1').css('opacity','1');
//   $('.vali_Info1').html('用户名由6~12位字母或数字组成');
//});
//$('#uname').blur(function(){
//   //获取当前对象的值
//   var val=$(this).val();
//   var reg = /^[A-Za-z0-9]{6,12}$/g;
//   if(val==""){
//      $('.vali_Info1').css('opacity','1');
//      $('.vali_Info1').html('请填写用户名!');
//      unameIstrue=false;
//   }else if(reg.test(val)){
//      $('.vali_Info1').css('opacity','0');
//      unameIstrue=true;
//   }else{
//      $('.vali_Info1').css('opacity','1');
//      $('.vali_Info1').html('用户名格式不正确!');
//      unameIstrue=false;
//   }
//});
////2、验证upwd  获得焦点时显示提示信息
//var upwdIstrue=true;
//$('#upwd').focus(function(){
//   $('.vali_Info2').css('opacity','1');
//   $('.vali_Info2').html('密码由6~8位数字或字母组成');
//});
////失去焦点时验证密码是否符合要求
//$('#upwd').blur(function(){
//   //获取当前对象的值
//   var val=$(this).val();
//   var reg = /^[A-Za-z0-9]{6,8}$/g;
//   if(val==""){
//      $('.vali_Info2').css('opacity','1');
//      $('.vali_Info2').html('请填写密码!');
//      upwdIstrue=false;
//   }else if(reg.test(val)){
//      $('.vali_Info2').css('opacity','0');
//      upwdIstrue=true;
//   }else {
//      $('.vali_Info2').css('opacity', '1');
//      $('.vali_Info2').html('密码格式不正确!');
//      upwdIstrue=false;
//   }
//});
$("#btn").click(function(){
   var url="data/login.php";
   var data_arr={};
   data_arr.uname=$("#uname").val();
   data_arr.upwd=$("#upwd").val();
   $.ajax({
      type:"POST",
      url:url,
      data:data_arr,
      success:function(obj){
         if(obj.code<0){
            alert("登录失败，错误原因"+obj.msg);
         }else{
            alert("登录成功！3s后将自动跳转首页界面");
            setTimeout(function(){
               location.href='page.html';
            },3000);
         }
      },
      error:function(){
      }
   });
});