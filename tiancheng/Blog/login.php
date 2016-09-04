<?php

function test(){
	echo "hello world";
}

?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="css/loginStyle.css">
	<script type="text/javascript" src="scripts/login.js"></script>
	<script type="text/javascript" src="scripts/encrypt.js"></script>		
</head>
<body bgcolor="black">
	<div class="board">
		<form>
			<img src="images\image.jpg">
			<input type="text" id="loginName" placeholder="username" name value>
			<input type="password" id="loginPwd" placeholder="password">
			<input type="button" class="loginButton" name="login" value="log in" onclick='loginGate()'>
			<input type="button" class="loginButton" name="login" value="register" onclick="location.href='register.html'">			
		</form>
	</div>
</body>
</html>