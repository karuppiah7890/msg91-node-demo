var msg91 = require("msg91")(process.env.MSG91_AUTH_KEY, "KARUPS", "4" );
// 4 - transactional SMS. 1 - promotional SMS
// Transactional SMS can have sender ID. Here sender ID is "KARUPS"

// Mobile No can be a single number, list or csv string

var mobileNo = [ process.env.MY_MOBILE_NUMBER ]; // array of numbers

// Sending normal transactional SMS

msg91.send(mobileNo, "Hi guys :P :P", function(err, response){
    console.log(err);
    console.log(response);
});
