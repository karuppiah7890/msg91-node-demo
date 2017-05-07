const SendOtp = require('sendotp');

const sendOtp = new SendOtp(process.env.MSG91_AUTH_KEY,
  "Hi, your OTP is {{otp}}, please don't share it with ANYBODY!");

const contactNumber = process.env.MY_MOBILE_NUMBER;

const otp = "3764"; // OTP given by the user in the UI

// Verify the OTP given by the user using sendOtp.verify() and this will verify using the OTP stored
// in the MSG91's Database. And verification will fail if the OTP expires.
// I don't know the default expiry time, but seeing API, looks like expiry can also be set using the API,
// but I don't know how to use it with this sendotp node module
sendOtp.verify(contactNumber, otp, (err, data, res) => {

  if(err) {
    console.log(err);
    return;
  }

  console.log(data); // { message: 'otp_verified', type: 'success' } - an example value
});

// Other values for data are
// { message: 'otp_not_verified', type: 'error' }
// { message: 'otp_expired', type: 'error' }
