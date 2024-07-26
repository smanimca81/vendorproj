require('dotenv').config()
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://smanimca81:GD7d9SaDRiZsLvXY@cluster0.o0lxwrx.mongodb.net/test";

mongoose.connect(MONGO_URI).then(() => console.log('Connected')).catch('Error');
 

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
})

const User = mongoose.model('user', userSchema, 'user');
module.exports = User;
/*
const productSchema = new mongoose.Schema({
    product_name: { type: String, required: true },
    avail_qty: { type: Number, required: true },
    vendor_name: { type: String, required: true }
  });

const product = mongoose.model('product', productSchema, 'product');
module.exports = product;

const vendorSchema = new mongoose.Schema({
    vendor_code: { type: Number, required: true },
    vendor_name: { type: String, required: true },
    Address: { type: String, required: true },
    Phone: { type: String, required: true}
  });

const vendor = mongoose.model('vendor', vendorSchema, 'vendor');
module.exports = vendor;
*/
