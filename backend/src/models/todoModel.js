
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            // required: true,
        },
        isDeleted:{
            type: Boolean,
            default: false,
        }
    }
)

module.exports = mongoose.model('todo',todoSchema);