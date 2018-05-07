const mongoose = require('mongoose'),
        Photo = mongoose.model('Photo');

module.exports = {

    retrieveAll : (req, res) => {
        Photo.find({}, (err, items) => {
            if (!err) {
                res.json({message: "Success", data: items});
            } else {
                console.log(err);
                res.json( {message: "Error", error: err})
            }
        });
    },

    retrieveById: (req, res) => {
        var ObjectId = mongoose.Types.ObjectId; 
        Photo.find({_id: new ObjectId(req.params.id)})
            .exec((err, item)=>{
                if (!err) {
                    res.json({message: "Success", data: item});
                } else {
                    console.log(err);
                    res.json( {message: "Error", error: err})
                }
            });
    },
    
    create: (req, res) => {
        let item = new Photo();
        item._id = new mongoose.Types.ObjectId();
        item.title = req.body.title;
        item.description = req.body.description;
        item.save( err => {
            if (!err) {
                res.json({message: "Success", data: item})
            } else {
                console.log(item.errors);
                res.json( {message: "Error", error: err})
            }
        });
    }, 

    updateById: (req, res) => {
        var ObjectId = mongoose.Types.ObjectId; 
        Photo.where({_id: new ObjectId(req.params.id)})
            .update({$set: {
                title: req.body.title,
                description: req.body.description,
                completed: req.body.completed
            }})
            .exec((err, item)=>{
                if (!err) {
                    res.json({message: "Success", data: item});
                } else {
                    console.log(err);
                    res.json( {message: "Error", error: err})
                }
            });
    },

    removeById: (req, res) => {
        var ObjectId = mongoose.Types.ObjectId; 
        Photo.remove({_id: new ObjectId(req.params.id)})
            .exec((err, item)=>{
                if (!err) {
                    res.json({message: "Success", data: item});
                } else {
                    console.log(err);
                    res.json( {message: "Error", error: err})
                }
            });
    }
}