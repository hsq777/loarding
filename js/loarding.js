var $inpU=document.querySelector('#inputEmail3');
var $psw=document.querySelector('#inputPassword3');
$inpU.onfocus=function () {
    $inpU.placeholder='请输入用户名';
};
$psw.onfocus=function () {
    $psw.placeholder='请输入密码';
};