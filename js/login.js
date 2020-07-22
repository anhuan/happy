$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;  
    var pwd=document.getElementById("pwd").value;
    if(userName=="大狗" &&  pwd=="602"){ 
		event.preventDefault();
		$('form').fadeOut(500);
		$('.login').addClass('form-success');
		//requestFullScreen();
		setTimeout(function(){location.href="index.html";},2000);
		//auto_link_html("index1.html");
	}
	else{
		alert("不对不对,重新输入!");
	}
});