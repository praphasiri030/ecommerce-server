const express = require("express");
const { authCheck } = require("../middlewares/authCheck");
const router = express.Router();


const { processPaymentIntent } = require("../controllers/payment");


router.post("/user/create-payment-intent", authCheck, processPaymentIntent);

module.exports = router;