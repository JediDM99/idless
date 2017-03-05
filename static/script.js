var label
var timerIsGoing

//need to create alert when you click the button
function createPrompt() {
	var label = prompt("Timer Label:")
	var time = prompt("Time Remaining (hh:mm):").split(":")
	var hours = Number(time[0])
	var minutes = Number(time[1])
	timerIsGoing=true
	updateTime(hours,minutes)
};

function updateTime(h, m) {
	while(timerIsGoing) {
		//show the time on the timer
		checkTime(m)
	    document.getElementById('time_remaining').innerHTML = h + ":" + m

		//wait one minute
		myVar = setTimeout(function blank(){}, 60)//in reality they should be set to 60000, this is for testing purposes

	    //decrement minutes. If minutes go under 0, reset them and decrease hours
	    if(m>0) m--
	    else if(h==0 && m==0) {
	    	//send a "done" message through AJAX
	    	removeTimer()
	    	return;
	    }
	    else {
	    	m=60
	    	h--
	    }

	    if(h==0 && m==5) {
	    	//send a "5 mins left" message through AJAX
	    }
	}
}

function removeTimer() {
    var elem = document.getElementById('timer');
    elem.parentNode.removeChild(elem);
    timerIsGoing = false;
    return false;
}

function checkTime(i) {
    if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
    return i
}

//AJAX code goes here
//should pass label