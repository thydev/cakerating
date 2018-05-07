const mongoose = require('mongoose');

module.exports = (() => {
    const PhotoSchema = new mongoose.Schema({
        author: {type: String, required: true, minlength: 2},
        image_url: {type: String, required: true, minlength: 5},
        comments: [CommentSchema],
    }, {timestamps: true});

    mongoose.model('Photo', PhotoSchema);
})();