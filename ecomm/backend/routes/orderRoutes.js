const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const protect = require("../middleware/auth");

// Get logged-in user's orders
router.get("/my", protect, async (req, res) => {
  const orders = await Order.find({ user: req.user });
  res.json(orders);
});
// Create order
router.post("/", protect, async (req, res) => {
  const { orderItems, totalPrice } = req.body;

  const order = new Order({
  orderItems,
  totalPrice,
  user: req.user
});

  const createdOrder = await order.save();
  res.json(createdOrder);
});

module.exports = router;