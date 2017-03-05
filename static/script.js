var label
var timerIsGoing

//need to create alert when you click the button
function createPrompt() {
	var label = prompt("Timer Label:")
	var time = prompt("Time Remaining (hh:mm):").split(":")
	var hours = Number(time[0])
	var minutes = Number(time[1])
	//send preliminary message to user
	jQuery.post(url + '/prelim', {'label':label, 'hours':hours, 'minutes':minutes}, function(){console.log('completed req')})
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
	    	jQuery.post(url + '/labels', {'label':label}, function(){console.log('completed req')})
	    	removeTimer()
	    	return;
	    }
	    else {
	    	m=60
	    	h--
	    }

	    if(h==0 && m==5) {
	    	//send a "5 mins left" message through AJAX
	    	jQuery.post(url + '/labels', {'label':label}, function(){console.log('completed req')})
	    }
	}
}

function removeTimer() {
    var elem = document.getElementById('timer_label'); 'time_remaining'
    elem.parentNode.removeChild(elem);
    timerIsGoing = false;
    return false;
}

function checkTime(i) {
    if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
    return i
}

//AJAX code goes here
//one should pass preliminary message
//two should send 5 mins left message
//three should send done message