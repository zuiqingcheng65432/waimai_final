/*
* @Author: Administrator
* @Date:   2018-09-15 10:54:31
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-15 10:55:07
*/
window.onload=function(){
	let otxt=document.getElementsByClassName("tel-text")[0];
	let otxt2=document.getElementsByClassName("tel-text")[1];

	let obtn=document.getElementsByClassName("login-btn")[0];

	obtn.onclick=function(){
		if(!otxt.value.length){
		alert("请输入您的手机号");
			return false;
		}
		else if(!otxt2.value.length){
			alert("请输入您的密码");
			return false;
		}
		else {
			window.open("index.html","_self");
		}
	}
	

}