const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const responsesSchema = new Schema({
    username: { type: String, required: true},
    question: {type: String, required: true},
    response: { type: Boolean, required: true},
    multiple: { type: Number, required: false},
    date: { type:Date, required:true}
}, {
    timestamps:true,
})
const Question = mongoose.model('Responses', responsesSchema);
module.exports = Response;