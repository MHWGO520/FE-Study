<!doctype html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="css/loginStyle.css">
	<script type="text/javascript" src="scripts/login.js"></script>
	<script type="text/javascript" src="scripts/encrypt.js"></script>		
</head>
<body bgcolor="black">
	<div class="board">
		<form method = "post" action = "login.php">
			<img src="images\image.jpg">
			<input type="text" id="loginName" placeholder="username" name="username">
			<input type="password" id="loginPwd" placeholder="password" name="password">
			<input type="button" class="loginButton" name="loginButton" value="log in" onclick='loginGate()'>
			<input type="button" class="loginButton" name="registerButton" value="register" onclick="location.href='register.html'">				    </form>
	</div>
</body>
</html>
