const {Schema, model} = require('mongoose')

const bookCommentSchema = new Schema({
    bookId: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        default: ""
    },
});

module.exports = model('BookCommnet', bookCommentSchema)
