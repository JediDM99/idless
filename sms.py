from flask import Flask
from flask import render_template
from flask import request
from twilio.rest import TwilioRestClient 
 
# put your own credentials here 
ACCOUNT_SID = "ACe980192c091ed4100d6b581a169a55bf" 
AUTH_TOKEN = "59d21c92d86271a6d6ec8bb51c8f8040" 
 
client = TwilioRestClient(ACCOUNT_SID, AUTH_TOKEN) 
 
client.messages.create(
    to="+16109370549", 
    from_="+14848044148", 
    body="Test message", 
)

if __name__ == "__main__":
    sms.run(debug=True)