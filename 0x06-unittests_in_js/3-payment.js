const Utis = require('./utils');
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = Utis.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
