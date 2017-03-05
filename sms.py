from flask import Flask
from flask import render_template
from flask import request
from twilio.rest import TwilioRestClient 
 
# put your own credentials here 
ACCOUNT_SID = "ACe980192c091ed4100d6b581a169a55bf" 
AUTH_TOKEN = "59d21c92d86271a6d6ec8bb51c8f8040" 

label = null;
 
client = TwilioRestClient(ACCOUNT_SID, AUTH_TOKEN) 
 

@sms.route("/labels", methods=["POST"])
def labels():
    # Extract data from request
    label = request.json["label"]
    print "Received label " + str(label)
    return json.dumps({"status": "OK"})
    #somehow we need to prevent the message(s) being sent until this runs...I don't know enough python to do that
	client.messages.create(
	    to="+16109370549", 
	    from_="+14848044148", 
	    body="Your " + label + " has finished printing!", 
	)



if __name__ == "__main__":
    sms.run(debug=True)