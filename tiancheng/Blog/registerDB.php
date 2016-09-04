<?php
	$usr = $_GET["username"];
	$account = $_GET["account"];
	$email = $_GET["email"];
	$pwd = $_GET["password"];

	echo "$usr";

	$con = mysql_connect('localhost',"root");
	if(!$con)
	{
		die('Could not connect: '.mysql_error());
	}
	mysql_select_db("test",$con);

	$sql = "INSERT INTO user VALUES('$usr','$account','$email','$pwd')";
	$result = mysql_query($sql);
	$row = mysql_fetch_array($result);

	mysql_close($con);
?>
