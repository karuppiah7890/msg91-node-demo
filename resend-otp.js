const SendOtp = require('sendotp');

const sendOtp = new SendOtp(process.env.MSG91_AUTH_KEY,
  "Hi, your OTP is {{otp}}, please don't share it with ANYBODY!");

const contactNumber = process.env.MY_MOBILE_NUMBER;

// To retry sending the OTP which was already sent using sendOtp.send()
// and is already stored in MSG91's Database
// We cannot call sendOtp.retry() without calling sendOtp.send() because the OTP for
// that number won't be present in the MSG91 Database as sendOtp.send() was never called
// We can request voice call to communicate the OTP for the sendOtp.retry() function
// Just set the second parameter to true for voice or false for text. 

const voice = false;

sendOtp.retry(contactNumber, voice, (err, data, res) => {

  if(err) {
    console.log(err);
    return;
  }

  console.log(data); // { message: 'otp_verified', type: 'success' } - an example value
});

// Other values for data are
// { message: 'otp_not_verified', type: 'error' }
// { message: 'otp_expired', type: 'error' }
