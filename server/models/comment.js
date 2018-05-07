const mongoose = require('mongoose');

module.exports = (() => {
    const CommentSchema = new mongoose.Schema({
        author: {type: String, required: false, minlength: 2},
        rating: {type: Number, min: 1, max: 5},
        contents: {type: String, required: true, minlength: 3},
    }, {timestamps: true});
    
    mongoose.model('Comment', CommentSchema);
})();
