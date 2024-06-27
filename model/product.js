const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({

    productImage : [{
        type: String,
        required: true
    }],
    productTitle : {
        type: String,
        required: true
    },
    productDescription : {
        type: String,
        required: true
    },
    productPrice : {
        type: String,
        required: true
    },
    qualityCategory: {
       type: Schema.Types.ObjectId,
        ref: 'qualityCategory'
    },
    clothCategory: {
        type: Schema.Types.ObjectId,
        ref: 'clothCategory'
    },
    humanCategory: {
        type: Schema.Types.ObjectId,
        ref: 'humanCategory'
    }

});

const Product = mongoose.model('product', productSchema)

module.exports = Product

