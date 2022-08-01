const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const responSchema = new Schema({
    question:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
}, {
    timestamps: true,
})