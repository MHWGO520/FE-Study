<!DOCTYPE html>
<?php
	session_start();
	if(!$_SESSION['view']){
		header("Location:login.php");
	}
?>
<html>
<head>
	<title>tiancheng's index</title>
	<link rel="stylesheet" type="text/css" href="css/indexStyle.css">
</head>
<body style="background-image: linear-gradient(black,grey)">
	<div class="board">
		<h3 class="title">:)</h3>
		
		<div class="nav">
			<ul>
				<li><a href="#section1">PARA1</a></li>
				<li><a href="#section2">PARA2</a></li>
				<li><a href="#section3">PARA3</a></li>
			</ul>
		</div>

		<div class="main">
			<p id="section1">paragraph1</p>
			<p id="section2">paragraph2</p>
			<p id="section3">paragraph3</p>
		</div>
	</div>
	<?php
		session_destroy();
	?>
</body>
</html>
