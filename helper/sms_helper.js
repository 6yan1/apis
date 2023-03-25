// Syriatel api send sms
// URL : "https://bms.syriatel.sy/API/SendSMS.aspx"
// job_name: Str,
// user_name: Str,
// Password: Str,
// msg: str,
// sender: str,
// to: Str
const axios = require('axios');
const https = require('https');

const { SYRIATEL_USER_NAME, SYRISTEL_PASSWORD, SYRIATEL_SENDER} = process.env;
exports.sendSms = (job, message, to) => {
    axios.post('https://bms.syriatel.sy/API/SendSMS.aspx', {
        job_name: job,
        user_name: SYRIATEL_USER_NAME,
        password: SYRISTEL_PASSWORD,
        msg: message,
        sender: SYRIATEL_SENDER,
        to: to
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
};

