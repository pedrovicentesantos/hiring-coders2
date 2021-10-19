const fetch = require('node-fetch');
const dotenv = require('dotenv');

dotenv.config();

const API_URL = 'https://apisandbox.cieloecommerce.cielo.com.br/1/sales/';

const statusTable = {
  0: 'Not Finished',
  1: 'Authorized',
  2: 'Payment Confirmed',
  3: 'Denied',
  10: 'Voided',
  11: 'Refunded',
  12: 'Pending',
  13: 'Aborted',
  20: 'Scheduled'
};

class Cielo {
  static purchase(requestBody) {
    return fetch(API_URL, {
      method: 'POST',
      body: requestBody,
      headers: {
        'Content-Type': 'application/json',
        MerchantId: process.env.MerchantId,
        MerchantKey: process.env.MerchantKey
      }
    })
      .then((resp) => resp.json())
      .then((data) => {
        const paymentId = data.Payment.PaymentId;
        return {
          paymentId,
          amount: null
        };
      })
      .catch((err) => console.log(err));
  }

  static capture(paymentId, amount = null) {
    return fetch(`${API_URL}${paymentId}/capture`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        MerchantId: process.env.MerchantId,
        MerchantKey: process.env.MerchantKey
      }
    })
      .then((resp) => resp.json())
      .then((captureResult) => captureResult.Status === 2)
      .catch((err) => console.log(err));
  }

  static status(paymentId) {
    return fetch(
      `https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/${paymentId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          MerchantId: process.env.MerchantId,
          MerchantKey: process.env.MerchantKey
        }
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        const status = data.Payment.Status;
        return statusTable[status];
      })
      .catch((err) => console.log(err));
  }
}

module.exports = Cielo;
