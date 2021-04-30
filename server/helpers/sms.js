import twilio from "twilio";
import dotenv from 'dotenv';


dotenv.config({path:"../../.env"});
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


export default function sendSms(phone,firstName){
console.log(firstName)
    client.messages
    .create({
       body: 'Hey' +firstName+ ' You are admitted to job you have been applied, so be ready to start your job please',
       from: '+18134128236',
       to: phone
     })
    .then(message => console.log(message.sid));

    // return message.sid;

} 