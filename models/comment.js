const {Schema, model} = require('mongoose')

const commentSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    roomName: {
        type: String,
        required: true
    }
});

module.exports = model('Comments', commentSchema)