const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clothCategorySchema = new Schema({
    
    clothCategory : {
        type : String,
        required : true
    },
    humanCategory : {
        type : Schema.Types.ObjectId,
        ref : 'humanCategory'
    }
    
});

const ClothCategory = mongoose.model('clothCategory',clothCategorySchema)

module.exports = ClothCategory

