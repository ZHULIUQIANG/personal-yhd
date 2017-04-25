//表单验证
// 1、验证uname  获得焦点时显示提示信息
var unameIstrue=true;
$('#uname').focus(function(){
   $('.vali_Info1').css('opacity','1');
   $('.vali_Info1').html('用户名由6~12位字母或数字组成');
});
//失去焦点时验证用户名是否符合要求
$('#uname').blur(function(){
   //获取当前对象的值
   var val=$(this).val();
   var reg = /^[A-Za-z0-9]{6,12}$/g;
   if(val==""){
      $('.vali_Info1').css('opacity','1');
      $('.vali_Info1').html('请填写用户名!');
      unameIstrue=false;
   }else if(reg.test(val)){
      $('.vali_Info1').css('opacity','0');
      unameIstrue=true;
   }else{
      $('.vali_Info1').css('opacity','1');
      $('.vali_Info1').html('用户名格式不正确!');
      unameIstrue=false;
   }
});
//4、验证手机号码  获得焦点时显示提示信息
var phoneIstrue=true;
$('#phone').focus(function(){
   $('.vali_Info2').css('opacity','1');
   $('.vali_Info2').html('请填写正确格式手机号码');
});
//失去焦点时验证手机号码是否符合要求
$('#phone').blur(function(){
   var reg=/^1[3578]\d{9}$/g;
   if($(this).val()==""){
      $('.vali_Info2').css('opacity','1');
      $('.vali_Info2').html('请填写手机号码!');
      phoneIstrue=false;
   }else if(reg.test($(this).val())){
      $('.vali_Info2').css('opacity','0');
      phoneIstrue=true;
   }else{
      $('.vali_Info2').css('opacity', '1');
      $('.vali_Info2').html('手机号码格式不正确!');
      phoneIstrue=false;
   }
});
//2、验证upwd  获得焦点时显示提示信息
var upwdIstrue=true;
$('#upwd').focus(function(){
   $('.vali_Info3').css('opacity','1');
   $('.vali_Info3').html('密码由6~8位数字或字母组成');
});
//失去焦点时验证密码是否符合要求
$('#upwd').blur(function(){
   //获取当前对象的值
   var val=$(this).val();
   var reg = /^[A-Za-z0-9]{6,8}$/g;
   if(val==""){
      $('.vali_Info3').css('opacity','1');
      $('.vali_Info3').html('请填写密码!');
      upwdIstrue=false;
   }else if(reg.test(val)){
      $('.vali_Info3').css('opacity','0');
      upwdIstrue=true;
   }else {
      $('.vali_Info3').css('opacity', '1');
      $('.vali_Info3').html('密码格式不正确!');
      upwdIstrue=false;
   }
});
//3、验证再次输入的密码
var upwd2Istrue=true;
$('#upwd2').blur(function(){
   if($(this).val()==""){
      $('.vali_Info4').css('opacity','1');
      $('.vali_Info4').html('请再次填写密码!');
      upwd2Istrue=false;
   }else if($(this).val()!=$('#upwd').val()){
      $('.vali_Info4').css('opacity','1');
      $('.vali_Info4').html('两次密码须一致!');
      upwd2Istrue=false;
   }else{
      $('.vali_Info4').css('opacity','0');
      upwd2Istrue=true;
   }
});

$(".submit").click(function(){
   var url="data/register.php";
   var data_arr={};
   data_arr.uname=$("#uname").val();
   data_arr.upwd=$("#upwd").val();
   $.ajax({
      type:"POST",
      url:url,
      data:data_arr,
      success:function(obj){
         if(obj.code<0){
            alert("注册失败，错误原因"+obj.msg);
         }else{
            alert("注册成功！3s后将自动跳转首页界面");
            setTimeout(function(){
               location.href='page.html';
            },3000);
         }
      },
      error:function(){
      }
   });
});
