const mongoose = require("mongoose");

const { OrdersSchema } = require("../schemas/OrdersSchema");
const OrdersModel = new mongoose.model("Order", OrdersSchema);

module.exports = { OrdersModel };
