const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const qualityCategorySchema = new Schema({

    qualityCategory: {
        type: String,
        required: true
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

const QualityCategory = mongoose.model('qualityCategory', qualityCategorySchema)

module.exports = QualityCategory

