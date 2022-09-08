// -------------------------------------------------- [ 2nd Task - Pomodoro ] --------------------------------------------------
// 1 - Optimized Code:
var wH = document.getElementById('w-hrs');
var wM = document.getElementById('w-mins');
var wS = document.getElementById('w-secs');
var bH = document.getElementById('b-hrs');
var bM = document.getElementById('b-mins');
var bS = document.getElementById('b-secs');
var startWBtn = document.getElementById('start-w');
var startBBtn = document.getElementById('start-b');
var resumeWBtn = document.getElementById('res-w');
var endWBtn = document.getElementById('end-w');
function valueFormatter(value) {return value < 10 ? "0" + value : value;}  // Function To Formate Value On Dom
function activeBtn(btn){btn.disabled = false; btn.className = 'active';} // Function To Activate The Passed Btn
function deActiveBtn(btn){btn.disabled = true; btn.className = 'deactive';} // Function To Deactivate The Passed Btn
var intervalsFlags = [];

function startTimer(hrsDom, minsDom, secsDom, flagIndex, startTime) {
	var seconds = startTime;
	intervalsFlags[flagIndex] = setInterval(function () {
		seconds++;
		hrsDom.innerText = valueFormatter(Math.floor(seconds / 3600));
		minsDom.innerText = valueFormatter(Math.floor((seconds % 3600) / 60));
		secsDom.innerText = valueFormatter(seconds % 60);
	}, 1000);
}
startWBtn.addEventListener('click', function () {
	startTimer(wH, wM, wS, 0, 0);
	deActiveBtn(startWBtn);
	activeBtn(startBBtn);
	activeBtn(endWBtn);
});
startBBtn.addEventListener('click', function () {
	clearInterval(intervalsFlags[0]);
	var sentTime = +bH.innerText * 3600 + +bM.innerText * 60 + +bS.innerText;
	startTimer(bH, bM, bS, 1, sentTime);
	deActiveBtn(startBBtn);
	activeBtn(resumeWBtn);
});
resumeWBtn.addEventListener('click', function () {
	clearInterval(intervalsFlags[1]);
	var sentTime = +wH.innerText * 3600 + +wM.innerText * 60 + +wS.innerText;
	startTimer(wH, wM, wS, 0, sentTime);
	deActiveBtn(resumeWBtn);
	activeBtn(startBBtn);
});
endWBtn.addEventListener('click', function () {
	clearInterval(intervalsFlags[0]);
	clearInterval(intervalsFlags[1]);
	deActiveBtn(endWBtn);
	deActiveBtn(resumeWBtn);
	deActiveBtn(startBBtn);
	activeBtn(startWBtn);
	alert('Your Work Time : ' + wH.innerText + ' : Hrs - ' + wM.innerText + ' : Mins - ' + wS.innerText + ' : Secs' + '\n' + 
			'Your Break Time : ' + bH.innerText + ' : Hrs - ' + bM.innerText + ' : Mins - ' + bS.innerText + ' : Secs');
	wH.innerText = wM.innerText = wS.innerText = '00';
	bH.innerText = bM.innerText = bS.innerText = '00';
});
