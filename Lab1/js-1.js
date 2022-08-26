// 1 - Write function to read username and return it (hint if user enter value).

function showUsername() {
	var userName = prompt('Please Enter Your Username:');
	if (userName) {
		// 1st Condition if User Entered His UserName
		return userName.trim();
	} else if (userName == '') {
		// 2nd Condition if User Entered only Space (Pressed Ok with Empty Field)
		showUsername();
	} else {
		// 3rd Condition if User Pressed Cancel Button
		return;
	}
}
console.log(showUsername());

// ------------------------------------------------------------------------

// 2- Write a function that takes the base and height of a triangle and return its area (height by default 10).

var base = prompt('Enter The Base Of The Triangle:');
var height = prompt('Enter The Height Of The Triangle:') || 10; // Default Value of Height = 10 in Case There Is No Return From Prompt.
function calcTriArea(base, height) {
	var baseNum = parseFloat(base); // To Change String to Number
	var heightNum = parseFloat(height); // To Change String to Number
	var area;
	if (baseNum && heightNum && baseNum > 0 && heightNum > 0) {
		area = 0.5 * baseNum * heightNum;
		return area;
	} else if (baseNum == '') {
		// In Case That Values Not Valid - Recursion Till User Enter Valid Numbers
		alert('Please Check Your Inputs and Enter Valid Postive Numbers');
		base = prompt('Enter The Base Of The Triangle:');
		height = prompt('Enter The Height Of The Triangle:') || 10;
		calcTriArea(base, height);
	} else {
		// 3rd Condition if User Pressed Cancel Button
		return;
	}
}
console.log(calcTriArea(base, height));

// ------------------------------------------------------------------------

// 4 -  write a function to take string has lower and upper case letters as a parameter and convert upper case to lower and lower to upper.

var inputText = prompt('Enter A Random Text:');
function changeTextCase(inputText) {
	if (inputText) {
		// 1st Condition if User Entered Text.
		var inputArr = inputText.trim().split('');
		var resultedStr = '';
		for (letter of inputArr) {
			if (letter == letter.toUpperCase()) {
				// Check If Letter Is Upper Case Change It To Lower
				resultedStr += letter.toLowerCase();
			} else {
				// If Letter Is Lower Case Change It To Upper
				resultedStr += letter.toUpperCase();
			}
		}
		return resultedStr;
	} else if (inputText == '') {
		// 2nd Condition if User Entered only Space (Pressed Ok with Empty Field)
		inputText = prompt('Enter A Valid Text:');
		changeTextCase(inputText);
	} else {
		// 3rd Condition if User Pressed Cancel Button
		return;
	}
}
console.log(changeTextCase(inputText));

// ------------------------------------------------------------------------

// 5- Write a function take string and substring and return count of repeating substring.

var mainStr = prompt('Please Enter The String You want To Search In It:');
var subStr = prompt('Please Enter The String You Want To Search For It:');
function strCheckCounter(mainStr, subStr) {
	if (mainStr && subStr) {
		// 1st Condition if User Entered His The Two Strings
		var repeatedTimes = mainStr.split(subStr).length - 1;
		return repeatedTimes;
	} else if (mainStr == '' || subStr == '') {
		// 2nd Condition if User Entered only Space (Pressed Ok with Empty Field)
		var mainStr = prompt('Please Enter The String You want To Search In It:');
		var subStr = prompt('Please Enter The String You Want To Search For It:');
		strCheckCounter(mainStr, subStr);
	} else {
		// 3rd Condition if User Pressed Cancel Button
		return;
	}
}
console.log(strCheckCounter(mainStr, subStr));
// console.log(strCheckCounter("hello , my name is menna", "me")); // 2

// ------------------------------------------------------------------------

// 6 [Bonus] - Write a function to print the following pattern according to keyword and counts [Bonus]

function drawPattern(direction, counter) {
	let result;
	let countNum = parseInt(counter);
	if (direction == 'increase' && countNum > 0) {
		for (let i = 1; i <= countNum; i++) {
			scr = [];
			for (let j = 0; j < i; j++) {
				scr.push('*');
			}
			console.log(scr.join(''));
		}
	} else if (direction == 'decrease' && countNum < 0) {
		for (let i = 0; i < -countNum; i++) {
			scr = [];
			for (let j = i; j < -countNum; j++) {
				scr.push('*');
			}
			console.log(scr.join(''));
		}
	} else {
		console.error('Please Enter A Valid Direction and Counter');
		return 'Please Enter A Valid Direction and Counter';
	}
}

// drawPattern('increase', 4); //work fine
// drawPattern('decrease', -4); //work fine
// drawPattern('increase', '4rows'); //work fine
// drawPattern('decrease', '-4rows'); //work fine
// drawPattern('increase', 'four-rows'); // return error message
// drawPattern('increase', 0); //return error message (The count should be integer and greater than 0)
// drawPattern('increase', -1); //return error message (The count should be integer and greater than 0)
// drawPattern('incr', 0); //return error message (The direction should be "increase" or "decrease")
