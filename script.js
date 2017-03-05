var label

//need to create alert when you click the button
document.getElementById('createnew_button').onclick = function() {
   //show alert/insert html? allow people to enter label_id and timer_label
}​;​

//labels the timer and starts countdown
function setTimer() {
	label = document.getElementById('label_id').value.toString()
	document.getElementById('timer_label').innerHTML = label

	durationH = Number(document.getElementById('duration_h_id').value)
	durationM = Number(document.getElementById('duration_m_id').value)
	updateTime(durationH, durationM)
}

function updateTime(hours, minutes) {
	while(true) {
		//show the time on the timer
		checkTime(m)
	    document.getElementById('time_remaining').innerHTML = h + ":" + m
		m = Number(m)

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