var label
var timerIsGoing

//need to create alert when you click the button
function createPrompt() {
	label = prompt("What are you making?")
	var time = prompt("Time Remaining (hh:mm):").split(":")
	var hours = time[0]
	var minutes = time[1]
	//send preliminary message to user
	//jQuery.post('/prelim', JSON.stringify({'label':label, 'hours':hours, 'minutes':minutes}), function(){console.log('completed req')}, "json")
	$.ajax({
        url: "/prelim",
        type: "POST",
        data: JSON.stringify({
          label: label,
          hours: hours,
          minutes: minutes
        }),
        dataType: "json",
        contentType: "application/json"
      })
	timerIsGoing=true
	updateTime(Number(hours),Number(minutes))
};

function updateTime(h, m) {//FIX THIS!!!!
	while(timerIsGoing) {
		//show the time on the timer
		checkTime(m)
	    document.getElementById('time_remaining').innerHTML = h + ":" + m

		//wait one minute
		myVar = setTimeout(function blank(){}, 60000)//in reality they should be set to 60000, this is for testing purposes

	    //decrement minutes. If minutes go under 0, reset them and decrease hours
	    if(m>0) m--
	    else if(h==0 && m==0) {
	    	//send a "done" message through AJAX
		    $.ajax({
	        	url: "/labels",
	        	type: "POST",
	        	data: JSON.stringify({
	        		label: label
       		 	}),
      			dataType: "json",
      		  	contentType: "application/json"
     		 })
			removeTimer()
	    	return;
	    }
	    else {
	    	m=60
	    	h--
	    }

	    if(h==0 && m==5) {
	    	//send a "5 mins left" message through AJAX
		    $.ajax({
	        	url: "/reminder",
	        	type: "POST",
	        	data: JSON.stringify({
	        		label: label
       		 	}),
      			dataType: "json",
      		  	contentType: "application/json"
     		})
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