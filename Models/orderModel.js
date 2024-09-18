const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    packageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Package', required: true },
    amount: { type: Number, required: true },
    paymentId: { type: String, required: true },
    orderId: { type: String, required: true },
    status: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel;