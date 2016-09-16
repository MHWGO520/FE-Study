var kingPos;

function buttonClick(str)
{
	var flag = true;
	var cPos = str;
	switch (str)
	{
	case "1":
		flag = checkKing("2");
		if (flag) 
		{
			flag = checkKing("4");
		}	
		break;
	case "2":
		flag = checkKing("1");
		if (flag)
		{
			flag = checkKing("3");
			if (flag)
			{
				flag = checkKing("5");
			}
		}
		break;
	case "3":
		flag = checkKing("2");
		if (flag) 
		{
			flag = checkKing("6");
		}	
		break;
	case "4":
		flag = checkKing("1");
		if (flag)
		{
			flag = checkKing("5");
			if (flag)
			{
				flag = checkKing("7");
			}
		}
		break;
	case "5":
		flag = checkKing("2");
		if (flag)
		{
			flag = checkKing("4");
			if (flag)
			{
				flag = checkKing("6");
				if(flag)
				{
					flag = checkKing("8");
				}
			}
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
	case "7":
		flag = checkKing("4");
		if (flag)
		{
			flag = checkKing("8");
		}
		break;
	case "8":
		flag = checkKing("5");
		if (flag)
		{
			flag = checkKing("7");
			if (flag)
			{
				flag = checkKing("9");
			}
		}	
		break;		
	case "9":
		flag = checkKing("6");
		if (flag)
		{
			flag = checkKing("8");
		}
		break;	
	}
	if(!flag)
		changePos(kingPos,cPos);
	else
		alert(":(");
}

function changePos(kingPos,cPos)
{ 
	var king = document.getElementById(kingPos).innerText;
	var c = document.getElementById(cPos).innerText;
	document.getElementById(kingPos).innerText = c;	
	document.getElementById(cPos).innerText = king;	
}

function checkKing(pos)
{
	content = document.getElementById(pos).innerText;
	if (content == "king")
	{
		kingPos = pos;
		return false;	
	}
	return true;
}
