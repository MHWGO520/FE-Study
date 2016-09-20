var welcome = ":)";

function registerDone(){
	var username = document.getElementById("username").value;
	var account = document.getElementById('account').value;	
	var password = encrypt(document.getElementById('password').value);
	var email = document.getElementById('email').value;

	saveToDb(username,account,email,password);
	window.location.href = "login.html";	
}

function saveToDb(username,account,email,password){
	var xmlhttp;
	if(window.XMLHttpRequest)
	{
		xmlhttp = new XMLHttpRequest();
	}
	else
	{
		xmlhttp = ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			welcome = xmlhttp.responseText;				
			alert("Welcome Aboard," + welcome +"!");
		}
	}
	var url = "registerDB.php";
	url = url + "?username=" + username + "&account=" + account + "&email=" + email + "&password=" + password;
	xmlhttp.open("GET",url,false);
	xmlhttp.send();
}
