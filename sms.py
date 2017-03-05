from flask import Flask
from flask import render_template
from flask import request
from twilio.rest import TwilioRestClient 
 
# put your own credentials here 
ACCOUNT_SID = "ACe980192c091ed4100d6b581a169a55bf" 
AUTH_TOKEN = "59d21c92d86271a6d6ec8bb51c8f8040" 

label = null;
 
client = TwilioRestClient(ACCOUNT_SID, AUTH_TOKEN) 
 
#send the prelimary message
@sms.route("/prelim", methods=["POST"])
def prelim():
    # Extract data from request
    label = request.json["label"]
    hours = request.json["hours"]
    minutes = request.json["minutes"]
    print "Received prelim for " + label + ", " + hours + ":" + minutes
    return json.dumps({"status": "OK"})
	client.messages.create(
	    to="+16109370549", 
	    from_="+14848044148", 
	    body="Your " + label + " will be done in " + hours + "hours and " + minutes + "minutes!", 
	)

#send the reminder message
@sms.route("/reminder", methods=["POST"])
def reminder():
    # Extract data from request
    label = request.json["label"]
    print "Received reminder for " + str(label)
    return json.dumps({"status": "OK"})
	client.messages.create(
	    to="+16109370549", 
	    from_="+14848044148", 
	    body="Your " + label + " will be done in 5 minutes!", 
	)

@sms.route("/labels", methods=["POST"])
def labels():
    # Extract data from request
    label = request.json["label"]
    print "Received label " + str(label)
    return json.dumps({"status": "OK"})
	client.messages.create(
	    to="+16109370549", 
	    from_="+14848044148", 
	    body="Your " + label + " is finished!", 
	)



if __name__ == "__main__":
    sms.run(debug=True)