<?php
	$usr = $_GET["username"];
	$password = $_GET["password"];

	$con = mysql_connect('localhost','root');
	if(!$con)
	{
		die('Could not connect: '.mysql_error());
	}
	mysql_select_db("test",$con);

	$sql = "SELECT * FROM user WHERE username = '$usr'";
	$result = mysql_query($sql);
	$row = mysql_fetch_array($result);

	if( $row['password'] == $password )
	{
		echo "true";
	}
	else
	{
		echo "false";
	}
	mysql_close($con);
?>