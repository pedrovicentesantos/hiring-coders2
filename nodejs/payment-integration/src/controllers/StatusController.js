const Payment = require('../utils/Payment');

module.exports = {
  async show(req, res) {
    const { id: paymentId } = req.params;
    const { operator: operatorName = 'cielo' } = req.query;

    const payment = new Payment(operatorName);

    const status = await payment.operator.status(paymentId);

    if (status) {
      return res.json({
        status
      });
    }

    return res.status(400).json({
      error: 'Unknown Status'
    });
  }
};
