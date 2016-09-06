var loginStatus = false;

function loginGate(){
	var loginName = document.getElementById('loginName').value;
	var loginPassword = encrypt(document.getElementById('loginPwd').value);

	checkLogin(loginName,loginPassword);

	if( loginStatus == false)
	{
		alert("Sorry!Your name and password do not match :(");
		location.reload();
	}
	else
	{
		window.location = "beforeIndex.php";
	}
}

function checkLogin(name,pwd){
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
			if(xmlhttp.responseText == "true")
			{
				loginStatus = true;
			}
		}
	}
	var url = "loginDB.php";
	url  = url + "?username=" + name + "&password=" + pwd;
	xmlhttp.open("GET",url,false);	
	xmlhttp.send();	
}
