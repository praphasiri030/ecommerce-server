const prisma = require("../config/prisma");

// ตัวจำลองระบบชำระเงิน
const localPaymentGateway = {
  paymentIntents: {
    create: async ({ amount }) => {
      return {
        client_secret: `local_secret_amt_${amount}_id_${Math.random().toString(36).substr(2, 9)}`,
      };
    },
  },
};

exports.processPaymentIntent = async (req, res) => {
  try {
    const cart = await prisma.cart.findFirst({
      where: {
        orderedById: Number(req.user.id),
      },
    });

    if (!cart) {
      return res.status(400).json({ message: "ไม่พบสินค้าในตะกร้า" });
    }

    const amountTHB = cart.cartTotal * 100;

    const paymentIntent = await localPaymentGateway.paymentIntents.create({
      amount: amountTHB,
      currency: "thb",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};
