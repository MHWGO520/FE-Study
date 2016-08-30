window.onload = initPop

var sumValue = new Number(0);
var refresh = false; 
var display; //显示栏
var state = new Number(0);  //0 init 1 + 2 - 3 * 4 / 5 =
var deci = new Number(0);
var firstDeci = true;
var sum = new Number(0);
var tempRes = new Number(0);

function initPop(){
	alert("SORRY!The calculator doesn't support multiplication and division between decimals :(");
	display = document.getElementById("display");
	if(document.getElementsByTagName)
	{
		allNums = document.getElementsByTagName("td");
		for (var i = 0; i < allNums.length; i++) {
			content = allNums[i].innerHTML;
			if(content <= '9' && content >= '0')
			{//考虑数字按钮
				allNums[i].setAttribute("onclick","inputFunc("+ content +")");
			}
			else if(content == "+")
			{
				allNums[i].setAttribute("onclick","plusFunc()");
			}
			else if(content == "-")
			{
				allNums[i].setAttribute("onclick","minusFunc()");				
			}
			else if(content == "*")
			{
				allNums[i].setAttribute("onclick","timesFunc()");				
			}			
			else if(content == "/")
			{
				allNums[i].setAttribute("onclick","divideFunc()");				
			}			
			else if(content == "=")
			{
				allNums[i].setAttribute("onclick","equalFunc()");
			}
			else if(content == "AC")
			{
				allNums[i].setAttribute("onclick","clearFunc()");				
			}
			else if(content == ".")
			{
				allNums[i].setAttribute("onclick","deciFunc()");				
			}
		}
	}
}

function inputFunc(num){
	if(document.getElementById)
	{
		display = document.getElementById("display");		
		if(refresh == true)
		{
			display.innerHTML = "";
			refresh = false;
		}

		if (state == 5) 
		{
			deci = 0;
			sumValue = 0;
			state = 0;
		}
		if(display.innerHTML == "") 
		{//输入第一位
			display.innerHTML = num;
			tempRes = num;
			if(state == 0 || state == 1)
				sumValue += num;	
			else if(state == 2)
				sumValue -= num;
			else if(state == 3 && num)
				sumValue *= num;
			else if(state == 4 && num)
				sumValue /= num;		

		}
		else 
		{
			if(deci == 0)
			{
				var newValue = parseInt(num);
				var baseValue = parseInt(display.innerHTML) * 10;
				sum = newValue + baseValue;   //int型
				tempRes = sum;
				display.innerHTML = sum.toString();	
			}
			else
			{
				var newValue = parseInt(num);
				for(var i = 0;i < deci;i++)
				{
					newValue /= 10;
				}
				deci++;

				if(firstDeci == true){
					sum = sumValue + newValue;
					display.innerHTML = sum.toString();			
				}
				else{
					sum = newValue;
					display.innerHTML = "";
				}

				if(state == 0){
					sumValue = sum;
					return false;
				}
			}

			if(state == 0 || state == 1)
			{		
				if(deci == 0)
				{
					sumValue -= (baseValue / 10);
				}
				sumValue += sum;
			}		
			else if(state == 2)
			{
				if(deci == 0)
				{
					sumValue += (baseValue / 10);
				}
				sumValue -= sum;
			}
			else if(state == 3)
			{			
				if(deci == 0)
				{
					sumValue /= (baseValue / 10);
				}
				sumValue *= sum;
			}
			else if(state == 4)
			{
				if(deci == 0)
				{
					sumValue *= (baseValue / 10);
				}
				sumValue /= sum;
			}		
		}
	}
	return false;
}

function plusFunc(){
	firstDeci = false;	
	display = document.getElementById("display");	
	display.innerHTML = "";
	state = 1;
	deci = 0;
	if(state == 2)
		state = 1;
	return false;
}

function minusFunc(){
	firstDeci = false;	
	display = document.getElementById("display");	
	display.innerHTML = "";
	state = 2;
	deci = 0;
	if(state == 5)
		state = 2;
	return false;
}

function timesFunc(){
	firstDeci = false;	
	display = document.getElementById("display");	
	display.innerHTML = "";
	state = 3;
	deci = 0;
	if(state == 5)
		state = 3;
	return false;
}

function divideFunc(){
	firstDeci = false;	
	display = document.getElementById("display");	
	display.innerHTML = "";
	state = 4;
deci = 0;
	if(state == 5)
		state = 4;
	return false;
}

function equalFunc(){
	display.innerHTML = sumValue.toString();
	refresh = true;
	state = 5;
	return false;
}

function deciFunc(){
	deci = 1;
}

function clearFunc(){
	firstDeci = false;
	state = 0;
	sumValue = 0;
	refresh = false;
	deci = 0;
	display = document.getElementById("display");		
	display.innerHTML = sumValue.toString();	
	return false;
}