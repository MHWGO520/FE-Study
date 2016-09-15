var kingPos;

function buttonClick(str)
{
	var flag = true;
	switch (str)
	{
	case "1":
		flag = checkKing("2");
		if (flag) 
		{
			flag = checkKing("4");
		}	
		break;
	case "6":
		flag = checkKing("3");
		if (flag)
		{
			flag = checkKing("5");
			if (flag)
			{
				flag = checkKing("9");
			}
		}
		break;
	}
	if(!flag)
		alert(kingPos);
}

function checkKing(pos)
{
	content = document.getElementById(pos).innerText;
	if (content == "")
	{
		kingPos = pos;
		return false;	
	}
	return true;
}
