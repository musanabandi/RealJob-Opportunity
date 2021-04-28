import twilio from "twilio";
import dotenv from 'dotenv';


dotenv.config({path:"../../.env"});
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


export default function sendSms(phone){
    console.log(phone
        )

    client.messages
    .create({
       body: 'welcome to our Real Job Opportunity',
       from: '+14439798180',
       to: phone
     })
    .then(message => console.log(message.sid));

    // return message.sid;

} 