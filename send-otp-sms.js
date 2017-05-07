const SendOtp = require('sendotp');

const sendOtp = new SendOtp(process.env.MSG91_AUTH_KEY,
  "Hi, your OTP is {{otp}}, please don't share it with ANYBODY!");

const contactNumber = process.env.MY_MOBILE_NUMBER;

const senderId = "KARUPS";

// send OTP with sender ID using sendOtp()
// This OTP is stored in MSG91's Database along with the contactNumber and an expiry time
// And the OTP is over written in the Database when sentOtp() is called with same contactNumber
// You can even mention the OTP to send like this sendOtp(contactNumber, senderId, otp, callback)

sendOtp.send(contactNumber, senderId, (err, data, response) => {
  if(err) {
    console.log(err);
    return;
  }

  console.log(data); // Data object pertaining to MSG91 alone. With "message" and "type" keys
  console.log(response); // HTTP response object which also has above data

});
