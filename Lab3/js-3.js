// --------------------------------[Question 1]----------------------------------------

// Q1 - Alert Properties From Object except Functions

var personalData = {
	Name: 'Mohammed Nasif',
	Age: 24,
	Track: 'FE',
	showData: function () {
		alert(this.Name + this.Age + this.Track);
	},
};

// -> Method 1:
function emailReformatter(ipData) {
	var filteredObj = JSON.parse(JSON.stringify(ipData));
	for (key in filteredObj) {
		alert(key + ': ' + filteredObj[key]);
	}
}
emailReformatter(personalData);

// -> Method 2:
function emailReformatter(ipData) {
	for (key in ipData) {
		if (typeof ipData[key] != 'function') alert(key + ': ' + ipData[key]);
	}
}
emailReformatter(personalData);

// --------------------------------[Question 2]----------------------------------------

// Q2 - Write a JavaScript program to remove duplicate items from an array

// -> Method 1:
var randomArray1 = [1, 'Nasif', 2, 'Nasif', 3, 1, 'Ragab', 2, 5, 5];
function removeDuplicate1(ipArr) {
	return ipArr.filter(function (item, j) {
		if (!ipArr.slice(j + 1).includes(item)) {
			return item;
		}
	});
}
console.log(removeDuplicate1(randomArray1)); // Expected OutPut = ["Nasif", 3, 1, "Ragab", 2, 5]

// -> Method 2:
var randomArray2 = [1, 'Nasif', 2, 'Nasif', 3, 1, 'Ragab', 2, 5, 5];
function removeDuplicate2(ipArr) {
	var resultedArray = [];
	for (var i = ipArr.length - 1; i >= 0; i--) {
		var temp = ipArr.pop();
		if (!ipArr.includes(temp)) {
			resultedArray.push(temp);
		}
	}
	return resultedArray;
}
console.log(removeDuplicate2(randomArray2)); // Expected OutPut = [5, 'Ragab', 3, 2, 'Nasif', 1]

// -> Method 3:
var randomArray3 = [1, 'Nasif', 2, 'Nasif', 3, 1, 'Ragab', 2, 5, 5];
function removeDuplicate3(ipArr) {
	var resultedArray = [];
	ipArr.forEach(function (item) {
		if (!resultedArray.includes(item)) {
			resultedArray.push(item);
		}
	});
	return resultedArray;
}
console.log(removeDuplicate3(randomArray3)); // Expected OutPut = [1, 'Nasif', 2, 3, 'Ragab', 5]

// -> Method 4:
var randomArray4 = [1, 'Nasif', 2, 'Nasif', 3, 1, 'Ragab', 2, 5, 5];
function removeDuplicate4(ipArr) {
	return ipArr.filter(function (item, i) {
		return ipArr.indexOf(item) === i;
	});
}
console.log(removeDuplicate4(randomArray3)); // Expected OutPut = [1, 'Nasif', 2, 3, 'Ragab', 5]

// --------------------------------[Question 3]----------------------------------------

// Q3
/*
• Ask the user to enter a string.
• Count the number of words the string has.
(ex: “Ahmed goes to school by bus” 🡪 6 words)
*/

function strWordCount() {
	var ipStr = prompt('Please Enter Your String');
	if (ipStr !== '' && ipStr !== null) {
		var wordsCount = ipStr.trim().split(' ').length;
		// console.log(wordsCount);
		alert('Words Count is ' + wordsCount);
	}
}
strWordCount();

// --------------------------------[Question 4]----------------------------------------

// Q4 - Create a function that accepts a string and returns the number of vowels in that string (vowel characters are : a, e, o, u, i)
/*
• Ask the user to enter a string
• Count the number of vowels in that string using the created function.
*/

// -> Method 1:
function vowelsCount() {
	var vowels = ['a', 'e', 'o', 'u', 'i'];
	var randomText = prompt('Please Enter Your String');
	return randomText.split('').filter(function (letter) {
		return vowels.includes(letter.toLowerCase());
	}).length;
}
console.log(vowelsCount()); //Expected Output : 2 if Entered "dream"

// -> Method 2 - Regex:
function vowelsCount() {
	var regexPattern = /[aeoui]/gi;
	var randomText = prompt('Please Enter Your String');
	return randomText.match(regexPattern).length;
}
console.log(vowelsCount()); //Expected Output : 2 if Entered "dream"

// --------------------------------[Question 5]----------------------------------------

// Q5 -
/*
• Ask the user to enter a number
• Write code to calculate the factorial of the number (factorial 5 = 5*4*3*2*1)
• Alert the result to the user
• Ask the user if he wants to check for another number ,keep asking the user to enter the number until he clicks no
*/

while (true) {
	var ipNum = prompt('Please Enter A Random +ve Integer');
	if (ipNum === null || ipNum === '') {
		// Cancel Case or ok without Input (User Change His Opinon ^^)
		break;
	}
	if (parseInt(ipNum)) {
		function factorial(ipNum) {
			var result = 1;
			if (ipNum === 0) return result;
			if (ipNum > 1) {
				result = ipNum * factorial(ipNum - 1);
			}
			return result;
		}
		alert(factorial(parseInt(ipNum))); // ipNum = 5 => outPut = 120
	}
}

// --------------------------------[Question 6]----------------------------------------

// Q6 - write a function called every time user click on button and print random number between 1 and 10

var textPanel = document.querySelector('h2');
function ranNum() {
	textPanel.innerHTML = Math.ceil(Math.random() * 10);
}

// --------------------------------[Question 7]----------------------------------------

/// Q7 - write a function to hide email addresses to protect it (we add … at the first special character)
/*
Input : menna-Mohamed@gmail.com
output: menna…@gmail.com
*/

// -> Method 1: Regex
var ipEmail = 'menna-Mohamed@gmail.com';
var ipEmail = 'm.khaled100@gmail.com';
function emailReformatter(emailStr) {
	var reqPartRegex = /\W[a-zA-Z0-9]*(?=@)/g;
	// console.log(emailStr.match(reqPartRegex));
	return emailStr.replaceAll(reqPartRegex, '...');
}
console.log(emailReformatter(ipEmail)); // menna…@gmail.com

// -> Method 2: Splice
var ipEmail = 'menna-Mohamed@gmail.com';
var ipEmail = 'm.khaled100@gmail.com';
var specialChar = "!#$%&'*+-/=?^_`{|}~."; // Ref stackoverflow
function emailReformatter(emailStr) {
	var emailArr = emailStr.split('');
	for (var i = 0; i < emailArr.length; i++) {
		if (specialChar.includes(emailArr[i])) {
			emailArr.splice(i, emailArr.indexOf('@') - i, '...');
			return emailArr.join('');
		}
	}
}
console.log(emailReformatter(ipEmail)); // menna…@gmail.com
