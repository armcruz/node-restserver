const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: [true, 'El nombre es necesario'] },
    priceUnit: { type: Number, required: [true, 'El precio únitario es necesario'] },
    description: { type: String, required: false },
    available: { type: Boolean, required: true, default: true },
    img: { type: String, required: false },
    category_id: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'User' }
});


module.exports = mongoose.model('Product', productSchema);