var i = 26;	
// test whether Order is universal
/*
function hello(){
	alert("hello?" + Order);
}*/

function changeText(){
	var showTime = setTimeout("changeText("+")",1000);
	document.getElementById("clock").value = i;
	i = i - 1;
	if(i == -1)
	{
		alert("Time Out!");
		clearTimeout(showTime);
	}
	if(    ($("#7").html() == key1 && $("#5").html() == key2 && $("#3").html() == key3)
		|| ($("#7").html() == key1 && $("#5").html() == key3 && $("#3").html() == key2)
		|| ($("#7").html() == key2 && $("#5").html() == key1 && $("#3").html() == key3)
		|| ($("#7").html() == key2 && $("#5").html() == key3 && $("#3").html() == key1)
		|| ($("#7").html() == key3 && $("#5").html() == key1 && $("#3").html() == key2)
		|| ($("#7").html() == key3 && $("#5").html() == key2 && $("#3").html() == key1))
	{
		alert("Congratulations! You win!");
		window.location = "http://www.4399.com/flash/77868.htm#search1";
	}
	return false;
}

function setText(){
	var count = 1;
	//alert( $("#" + parseInt(count)).html() );
	//alert("Order: " + Order);
	//alert("Winning: " + Winning);
	for(; count <= 8; count++)
	{
		$("#" + parseInt(count)).html( Order[count - 1] );
	}
}
