const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const API_URL = 'https://api.pagar.me/1/transactions';

class Pagarme {
  static purchase(requestBody) {
    return axios
      .post(API_URL, requestBody, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((resp) => resp.data)
      .then((data) => {
        const paymentId = data.id;
        const amount = data.amount;
        return {
          paymentId,
          amount
        };
      })
      .catch((err) => console.log(err));
  }

  static capture(paymentId, amount) {
    const requestBody = {
      amount,
      api_key: process.env.Pagarme_Key
    };

    return axios
      .post(`${API_URL}/${paymentId}/capture`, requestBody, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((resp) => resp.data)
      .then((data) => data.status !== 'refused')
      .catch((err) => console.log(err));
  }

  static status(paymentId) {
    const requestBody = {
      data: {
        api_key: process.env.Pagarme_Key
      }
    };

    return axios
      .get(`${API_URL}/${paymentId}`, requestBody, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((resp) => resp.data)
      .then((data) => {
        const status = data.status;
        return status.charAt(0).toUpperCase() + status.slice(1);
      })
      .catch((err) => console.log(err));
  }
}

module.exports = Pagarme;
