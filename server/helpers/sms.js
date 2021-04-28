import twilio from "twilio";
import dotenv from 'dotenv';


dotenv.config({path:"../../.env"});
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


export default function sendSms(phone,firstName){

    client.messages
    .create({
       body: firstName+ ' You are admitted to Job',
       from: '+14439798180',
       to: phone
     })
    .then(message => console.log(message.sid));

    // return message.sid;

} 