var i = 15;

window.onload=function(){
	changeText();
}

function changeText(){
	var showTime = setTimeout("changeText()",1000);
	document.getElementById("clock").value = i;
	i = i - 1;
	if(i == -1)
	{
		alert("Time Out!");
	}
	if(i == -1)
	{
		clearTimeout(showTime);
	}
	return false;
}

