import dotenv from "dotenv";
dotenv.config()

const {EMAIL_ADDRESS}= process.env;
class Email{
static WelcomeEmail(user){
    // console.log(user)
    return{
        to: user.email,
        subject: "Urakaza Neza Mu Isi Shya",
        html: `<div style="position: absolute; width: 100%; height: 100%; background-color: #F4F4F4;">
        <div style="display: flex; height: 120px; font-size: 25px;">
        <div>
        <h3 style="color: #FFAF00; margin-left: 20px; font-weight: 900;">Real Job Opportunity</h3>
        </div>
        </div>
        <div style="height: 60%; margin: auto; width: 94%; text-align: left; background-color: #ffff; -webkit-box-shadow: 5px 5px 5px 5px black; -moz-box-shadow: 5px 5px 5px 5px black; box-shadow: 5px 5px 5px 5px black;">
        <div style="height: 65%; padding: 10px;">
        <p>Hi ${user.firstName},</p>
        <p>welcome, to Real Job Opportunity. </p> </div>
        <div style="background-color: #F4F4F4; height: 25%; width: 100%; float: bottom; padding: 10px;">
        <p>If you have any issue, please reach out to us via our support email Or to our phone number <a href="mailto:${EMAIL_ADDRESS}" target="_self"> RJO</a></p>
        </div>
        </div>
        </div>`
    }
}
}
export default Email;