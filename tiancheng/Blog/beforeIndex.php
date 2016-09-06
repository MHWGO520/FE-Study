<?php
	session_start();
	$_SESSION['view'] = 'True';
	header("Location:index.php");	
?>
