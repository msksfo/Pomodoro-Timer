/* =================== Variables ======================*/

var timeEntered = document.getElementById('time-entered');
var beginButton = document.getElementById('begin-button');
var resetButton = document.getElementById('reset-button');
var message = document.getElementById('message');
var customizeDiv = document.getElementById('customize');
var addButton = document.getElementById('add-button');
var subtractButton = document.getElementById('subtract-button');
var song = document.getElementById('song');

var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

var interval; 

/* =============== Event Handlers =================================*/

addButton.addEventListener('click', addTime);
subtractButton.addEventListener('click', subtractTime);

beginButton.onclick = function(){
	if (minutes.innerHTML > 0){
		interval  = setInterval(function(){ countDown() }, 1000);
		customizeDiv.style.display = 'none';
	} else {
		moron();
	}
	//interval  = setInterval(function(){ countDown() }, 1000);
	//customizeDiv.style.display = 'none';
}

resetButton.addEventListener('click', reset )

/* ======================== Functions ============================*/

function addTime(){
	minutes.innerHTML = parseInt(minutes.innerHTML) + 1;
}

function subtractTime(){
	minutes.innerHTML = parseInt(minutes.innerHTML) - 1;
}


function countDown(){
	beginButton.style.display = 'none';
	
	if (minutes.innerHTML == 0 && seconds.innerHTML == 00){
		stopCountdown();
		timeEntered.style.display = 'none';
		beginButton.style.display = 'none';
		message.style.display = 'block';
		takeABreak();
	} else {
		if (seconds.innerHTML < 11){
			if (seconds.innerHTML == 00){
				seconds.innerHTML = 59;
				minutes.innerHTML --;
			} else {
				seconds.innerHTML --;
				seconds.innerHTML = '0' + seconds.innerHTML;
			}
		} else {
			seconds.innerHTML --;
		}
	}

}

function stopCountdown() {
    clearInterval(interval);
}

function reset(){
	stopCountdown();
	stopMusic();
	minutes.innerHTML = 25;
	seconds.innerHTML = '00';
	timeEntered.style.display = 'block';
	message.style.display = 'none';
	beginButton.style.display = 'inline';
	customizeDiv.style.display = 'block';
}

function moron(){
	reset();
	alert('Everyone is a comedian. Now stop messing with my program and enter a valid time.');
}

function takeABreak(){
	song.play();
}

function stopMusic(){
	song.pause();
	song.currentTime = 0;
}







