from flask import Flask
from flask import render_template
from flask import request
from twilio.rest import TwilioRestClient
import json
import time

app = Flask("sms sender")
 
# put your own credentials here 
ACCOUNT_SID = "ACe980192c091ed4100d6b581a169a55bf" 
AUTH_TOKEN = "59d21c92d86271a6d6ec8bb51c8f8040" 
 
client = TwilioRestClient(ACCOUNT_SID, AUTH_TOKEN) 

def timer(timerName, seconds):
	#seconds/=10 #just for testing purposes
	if(seconds>300):
		time.sleep(seconds-300)
		client.messages.create(
	    	to="+16109370549", 
	    	from_="+14848044148", 
	    	body="Your " + timerName + " will be done in 5 minutes!", 
		)
		time.sleep(300)
		client.messages.create(
	    	to="+16109370549", 
	    	from_="+14848044148", 
	    	body="Your " + timerName + " is finished!", 
		)
	else:
		time.sleep(seconds)
		client.messages.create(
	    	to="+16109370549", 
	    	from_="+14848044148", 
	    	body="Your " + timerName + " is finished!", 
		)

@app.route("/")
def home():
    return render_template("index.html")

#send the prelimary message
@app.route("/prelim", methods=["POST"])
def prelim():
    # Extract data from request
    label = request.json["label"]
    hours = request.json["hours"]
    minutes = request.json["minutes"]
    print("Received prelim for " + label + ", " + hours + ":" + minutes)
    client.messages.create(
	    to="+16109370549", 
	    from_="+14848044148", 
	    body="Your " + label + " will be done in " + hours + " hours and " + minutes + " minutes!", 
	)
    timer(label, int(hours)*3600 + int(minutes)*60)
    return json.dumps({"status": "OK"})

#send the reminder message
@app.route("/reminder", methods=["POST"])
def reminder():
    # Extract data from request
    label = request.json["label"]
    print("Received reminder for " + str(label))

    return json.dumps({"status": "OK"})

@app.route("/labels", methods=["POST"])
def labels():
    # Extract data from request
    print(request.json)
    label = request.json["label"]
    print("Received label " + str(label))

    return json.dumps({"status": "OK"})



if __name__ == "__main__":
    app.run(debug=True)
