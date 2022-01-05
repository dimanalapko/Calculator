var firstDigit = "";
var secondDigit = "";
var operation = "";

function clickOn1() {
	didClickOnNumber("1");
}

function didClickOnNumber(number) {
    if (operation == "") { //Если операция еще не была выбрана
		if (firstDigit == "0") {
			firstDigit = "";
		}
        firstDigit = firstDigit + number;
    }
    else { //иначе
	    if (secondDigit == "0") {
		    secondDigit = "";
		}
        secondDigit = secondDigit + number;
    }

    displayStatus();
}

function displayStatus() {
    var pResult = document.getElementById("result");
	var resultText = firstDigit + operation + secondDigit;
	if (resultText == "") {
		resultText = "0";
	}
	pResult.innerHTML = resultText;
}

function clickOn2() {
    didClickOnNumber("2");
}

function clickOn3() {
    didClickOnNumber("3");
}

function clickOn4() {
    didClickOnNumber("4");
}

function clickOn5() {
    didClickOnNumber("5");
}

function clickOn6() {
    didClickOnNumber("6");
}

function clickOn7() {
    didClickOnNumber("7");
}

function clickOn8() {
    didClickOnNumber("8");
}

function clickOn9() {
    didClickOnNumber("9");
}

function clickOnPlus() {
	operation = "+";

    displayStatus();
}
      
function clickOnMinus() {
    operation = "-";

    displayStatus();
}
      
function clickOnCalculate() {
    var firstDigitInt = parseInt(firstDigit);
    var secondDigitInt = parseInt(secondDigit);
    var result = 0;
    if (operation == "+") {
        result = firstDigitInt + secondDigitInt;
    }
    else if (operation == "-") {
	    result = firstDigitInt - secondDigitInt;
	}
	else if (operation == "*") {
	    result = firstDigitInt * secondDigitInt;
    }
    else if (operation == "/") {
	    result = firstDigitInt / secondDigitInt;
	}
	var pResult = document.getElementById("result");
	pResult.innerHTML = result;

	firstDigit = "";
    secondDigit = "";
    operation = "";
}

function clickOnC() {
    firstDigit = "";
    secondDigit = "";
    operation = "";

    displayStatus();
}	

function clickOnMultiplication() {
   operation = "*";
   
   displayStatus();
}

function clickOn0() {
    didClickOnNumber("0");
}
function clickOnDividing() {
    operation = "/"; 
	
	displayStatus();
}	