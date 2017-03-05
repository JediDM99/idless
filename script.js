
//labels the timer and starts countdown
function setTimer() {
	label = document.getElementById('label_id').value.toString()
	durationH = Number(document.getElementById('duration_h_id').value)
	durationM = Number(document.getElementById('duration_m_id').value)

}

function updateTime(hours, minutes) {
	checkTime(m)
    document.getElementById('time_remaining').innerHTML = h + ":" + m
	m = Number(m)
    //if minutes go under 0, reset them and decrease hours
    if(m>0) m--
    else {
    	m=60
    	h--
    }
    if(h==0 && m==5)
    var t = setTimeout(updateTime(duration, 60000)
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}