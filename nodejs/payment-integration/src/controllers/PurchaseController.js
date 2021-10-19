const Payment = require('../utils/Payment');

module.exports = {
  async store(req, res) {
    const purchase = req.body;
    const { operator: operatorName = 'cielo' } = req.query;

    const payment = new Payment(operatorName);

    const { paymentId, amount } = await payment.operator.purchase(
      JSON.stringify(purchase)
    );

    const successfulCapture = await payment.operator.capture(paymentId, amount);
    if (successfulCapture) {
      return res.status(201).send({
        status: 'Success',
        message: 'Successful purchase',
        paymentId
      });
    }

    res.status(402).json({
      status: 'Failed',
      message: 'Something went wrong with the purchase. Please try again'
    });
  }
};
