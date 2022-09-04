// --------------------------------[1st Task]----------------------------------------
// 1 - Write Function Select All h2 and set text to "hello from h1"
function changeInnerText() {
	var headers2 = Array.from(document.getElementsByTagName('h2'));
	headers2.forEach(function (header2) {
		header2.innerText = 'Hello From h1';
	});
}
changeInnerText();
// --------------------------------[2nd Task]----------------------------------------
// 2 - Make A List Of Student - [Add - Remove - Search] from list
/*
 1 -  We want to listen click of user to add std 
	1.2 - Open Prompt 
	1.3 - User input std name [Validation - (Valid Name - Ok - Cancel)]
	1.4 - If input is valid -> Push Array 
2 - Make Update for UI [reRender]
3 - Remove -> Delete from the array [then rerender]
4 - Search -> Search in the array [then rerender]
*/
var stdHolder = document.getElementById('stdList');
var searchField = document.getElementById('srchInp');
var searchBtn = document.getElementById('searchBtn');
var stdArray = [];

// Function To Listen To Add Btn and Validate The Input of Prompt
function addStd() {
	var addBtn = document.getElementById('addStd');
	addBtn.addEventListener('click', function () {
		var ipStdName = prompt('Please Enter Student Name:');
		// Input Validation
		if (ipStdName && isNaN(ipStdName.trim())) {
			stdArray.push(ipStdName);
			reRender();
		}
	});
}
// // Function Invoke
addStd();
// Function To Rerender The DOM With Every Change(Add - Delete - Search)
function reRender() {
	stdHolder.innerHTML = '';
	updateStdList(stdArray);
	var delBtns = Array.from(document.getElementsByClassName('deleteStd'));
	deleteActivation(delBtns);
	if (stdArray.length == 0) {
		searchBtn.disabled = true;
	}
}
// Function To Create Tht Students Divs And Append Them To The List
function updateStdList(studentsArray) {
	studentsArray.forEach(function (std) {
		var stdDiv = document.createElement('div');
		var delBtn = document.createElement('button');
		// Add The Inner Text Of Student Name and The Delete Button
		stdDiv.append(std);
		delBtn.append('X');
		// Append The Delete Button To Student Div and Append Student Div To The Std List
		stdDiv.append(delBtn);
		stdHolder.append(stdDiv);
		// Add ClassName
		stdDiv.className = 'std';
		delBtn.className = 'deleteStd';
		// Active The Search Button After UI Updated With Data
		searchBtn.disabled = false;
	});
}
// Function To Active The Delete Button After Append It
function deleteActivation(delBtns) {
	delBtns.forEach(function (btn) {
		btn.addEventListener('click', function () {
			// Select All Students From Dom
			var allStd = Array.from(document.getElementsByClassName('std'));
			// Get The Required Student and Get It's Index
			var reqStd = btn.parentElement;
			var deleteIndex = allStd.indexOf(reqStd);
			// console.log(deleteIndex);
			// Update The stdArray with Updates Done After Delete
			stdArray = stdArray.filter(function (std, i) {
				return i !== deleteIndex;
			});
			// Rerender Again The StdArray In Dom
			reRender();
			// This Reset SearchField In Case That The Delete Done In The Search Field
			searchField.value = '';
		});
	});
}
// Function To Search For Student
function searchStd() {
	if (searchField.value.trim() === '') {
		// In Case You Want To Go Back From Search Page To Student List
		reRender();
	}
	if (stdArray.includes(searchField.value.trim())) {
		var allStd = Array.from(document.getElementsByClassName('std'));
		allStd.forEach(function (std) {
			var stdName = std.innerText;
			if (stdName !== searchField.value + 'X') {
				std.style.display = 'none';
			}
		});
	}
}
// Also Can Use Onchange - oninput - onblur as Eventlisteners without the Ok Key
searchBtn.addEventListener('click', function () {
	searchStd();
});
// --------------------------------[3rd Task]----------------------------------------
// 3 - Make A synced Clock
var monthArray = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];
var hours = document.getElementById('hrs');
var mins = document.getElementById('mins');
var secs = document.getElementById('secs');
var dayNight = document.getElementById('d-n');
var dateText = document.getElementById('date');
setInterval(function () {
	var date = new Date();
	mins.innerText = date.getMinutes();
	secs.innerText = date.getSeconds();
	if (date.getHours() > 12) {
		hours.innerText = date.getHours() - 12;
		dayNight.innerHTML = 'Pm';
	} else {
		hours.innerText = date.getHours();
		dayNight.innerHTML = 'Am';
	}
	dateText.innerText =
		date.getUTCDate() +
		' ' +
		monthArray[date.getMonth()] +
		' ' +
		date.getFullYear();
}, 1000);

// --------------------------------[4th Task]----------------------------------------
// 4 - Make A Timer [Hours:Mins:Seconds]
function startTimer() {
	var seconds = 0;
	setInterval(function () {
		var secsHolder = document.getElementById('secs');
		var minssHolder = document.getElementById('mins');
		var hrsHolder = document.getElementById('hrs');
		seconds++;
		secsHolder.innerText =
			seconds % 60 < 10 ? '0' + (seconds % 60) : seconds % 60;

		minssHolder.innerText =
			Math.round((seconds % 3600) / 60) < 10
				? '0' + Math.floor((seconds % 3600) / 60)
				: Math.floor((seconds % 3600) / 60);

		hrsHolder.innerText =
			Math.round(seconds / 3600) < 10
				? '0' + Math.floor(seconds / 3600)
				: Math.floor(seconds / 3600);
	}, 1000);
}
