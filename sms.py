from twilio.rest import TwilioRestClient 
 
# put your own credentials here 
ACCOUNT_SID = "ACe980192c091ed4100d6b581a169a55bf" 
AUTH_TOKEN = "59d21c92d86271a6d6ec8bb51c8f8040" 
 
client = TwilioRestClient(ACCOUNT_SID, AUTH_TOKEN) 
 
client.messages.create(
    to="+14843186843", 
    from_="+16109370549", 
    body="Test message", 
    media_url="https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg", 
)