
var label

//need to create alert when you click the button
document.getElementById('timerbutton').onclick = function() {
	var label = prompt("Timer Label:")
	var time = prompt("Time Remaining:").split(":")
	var hours = time[0]
	var minutes = time[1]
	updateTime(hours,minutes)
}​;

function updateTime(h, m) {
	while(true) {
		//show the time on the timer
		checkTime(m)
	    document.getElementById('time_remaining').innerHTML = h + ":" + m

		//wait one minute
		myVar = setTimeout(function blank(){}, 60)//in reality they should be set to 60000, this is for testing purposes

	    //decrement minutes. If minutes go under 0, reset them and decrease hours
	    if(m>0) m--
	    else {
	    	m=60
	    	h--
	    }

	    if(h==0 && m==5) {
	    	//send a "5 mins left" message through AJAX
	    }
	    if(h==0 && m==0) {
	    	//send a "done" message through AJAX
	    	removeTimer()
	    	return
	    }
	    //this clears the timer without sending a messsage
	    document.getElementById('clear_button').onclick = function() {
	    	removeTimer()
   			return
		}​;​
	}
}

function removeTimer() {
    var elem = document.getElementById('timer');
    elem.parentNode.removeChild(elem);
    return false;
}

function checkTime(i) {
    if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
    return i
}

//AJAX code goes here
//should pass label