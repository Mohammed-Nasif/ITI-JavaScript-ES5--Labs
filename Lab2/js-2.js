// Q1 - There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.

// Method 1:
var array1 = [1, 0, 2, 3, 4];
var array2 = [3, 5, 6, 7, 8, 13];
var resArray = [];
var len = Math.max(array1.length, array2.length);
for (let i = 0; i < len; i++) {
	resArray[i] = (array1[i] || 0) + (array2[i] || 0);
}
console.log(resArray); // Expected Output : [4, 5, 8, 10, 12, 13]

// Method 2 - Giving Intial Value For Big and Small Array:
var array1 = [1, 0, 2, 3, 4];
var array2 = [3, 5, 6, 7, 8, 13];
var bigArray = array1;
var smallArray = array2;
if (array1.length < array2.length) {
	bigArray = array2;
	smallArray = array1;
}
var resArray = bigArray.map((e, i) => {
	return e + (smallArray[i] || 0);
});
console.log(resArray); // Expected Output : [4, 5, 8, 10, 12, 13]

//Another Method 3 - Using Ternary Operators:
var array1 = [1, 0, 2, 3, 4];
var array2 = [3, 5, 6, 7, 8, 13];
var resArray = [];
var counter = array1.length > array2.length ? array1.length : array2.length;
for (var i = 0; i < counter; i++) {
	array1[i] && array2[i]
		? resArray.push(array1[i] + array2[i])
		: array1[i]
		? resArray.push(array1[i])
		: resArray.push(array2[i]);
}
console.log(resArray);

// Another Method 4 - Using if Else:
var array1 = [1, 0, 2, 3, 4];
var array2 = [3, 5, 6, 7, 8, 13];
var resArray = [];
var counter = array1.length > array2.length ? array1.length : array2.length;
for (var i = 0; i < counter; i++) {
	if (array1[i] && array2[i]) {
		resArray.push(array1[i] + array2[i]);
	} else {
		if (array1[i]) {
			resArray.push(array1[i]);
		} else {
			resArray.push(array2[i]);
		}
	}
}
console.log(resArray);

// ------------------------------------------------------------------------

// Q2 - Search For Name In Array
/*
• Ask the user to enter 5 names (using prompt) and store them into an array.
• Ask the user to enter a name to search for.
• If the name is found, alert the order of that name (ex: first, second, third, fourth, or fifth).
• If the name is not found, show a message that "The name is not found“.
*/
function showName() {
	var namesArray = [];
	var indexOrder = [
		'First',
		'Second',
		'Third',
		'Fourth',
		'Fifth',
		'Sixth',
		'Seventh',
		'Eighth',
		'Ninth',
		'Tenth',
	];
	var i = 0;
	while (i < 5) {
		var enteredName = prompt('Please Enter A Name:').trim();
		if (enteredName) {
			namesArray[i] = enteredName;
			i++;
		} else if (enteredName == '') {
			i = i;
		} else {
			break;
		}
	}
	if (i == namesArray.length) {
		var searchName = prompt(
			'Please Enter The Name You Want To Search For:',
		).trim();
	}
	if (searchName) {
		var x = namesArray.indexOf(searchName);
		if (x >= 0) {
			alert('Order Of Name Founded Is: ' + indexOrder[x]);
		} else {
			alert('Name Not Found');
		}
	} else if (searchName == '') {
		alert('Name Not Found');
	} else {
		return;
	}
}
showName();

// ------------------------------------------------------------------------

// Q3 - Function Change Upper Case Strings Of Array To LowerCase

function changeLowerCase(strArr) {
	return strArr.map(function (l) {
		return l.toLowerCase();
	});
}
console.log(changeLowerCase(['MOHAMMED', 'MAZEN', 'MOTAZ', 'LAILA', 'SERA']));

// =========================================== [BONUS] ===========================================

// Q1 [Bonus] - Write a JavaScript program to sort array of word according to every word length (function take two parameters first array , second aesc or desc )

function sortAccordingToLength(inputArray, sortCondition) {
	switch (sortCondition) {
		case 'aesc':
			return inputArray.sort((a, b) => a.length - b.length);
		case 'desc':
			return inputArray.sort((a, b) => b.length - a.length);
	}
}
console.log(
	sortAccordingToLength(['Lilia', 'Alistar', 'Lux', 'Seraphine'], 'aesc'),
);
console.log(
	sortAccordingToLength(['Lilia', 'Alistar', 'Lux', 'Seraphine'], 'desc'),
);

// ------------------------------------------------------------------------

// Q2 [Bonus] - Write a JavaScript program to sort array of word according to every word length (function take two parameters first array , second aesc or desc )

function removeNegNums(arrayOfInt) {
	return arrayOfInt.filter(function (num) {
		return num >= 0;
	});
}
console.log(removeNegNums([1, 2, -5, 6, -11, 8, 9, 7, -30, 0])); // Output : [1, 2, 6, 8, 9, 7, 0]

// ------------------------------------------------------------------------

// Q3 [Bonus] - Write a JavaScript program to remove the spaces found in a string

function removeSpaces(textStr) {
	return textStr.split(' ').join('');
}
console.log(removeSpaces('Hel lo, My Name Is Na Sif')); // OutPut : "Hello,MyNameIsNasif"
