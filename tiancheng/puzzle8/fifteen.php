<?php
	$order = array();
	while(count($order) < 8)
	{
		$order[] = mt_rand(1,8);
		$order = array_unique($order);
	}
	$winning = array();
	while(count($winning) < 3)
	{
		$winning[] = mt_rand(1,8);
		$winning = array_unique($winning);
	}
	echo json_encode(array_merge($order, $winning));
?>
