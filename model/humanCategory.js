const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const humanCategorySchema = new Schema({
    
    humanCategory : {
        type : String,
        required : true
    }
    
});

const HumanCategory = mongoose.model('humanCategory',humanCategorySchema)

module.exports = HumanCategory

