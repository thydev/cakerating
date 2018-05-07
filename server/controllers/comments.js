const mongoose = require('mongoose'),
        Photo = mongoose.model('Photo'),
        Comment = mongoose.model('Comment');

module.exports = {
    
    create: (req, res) => {
        const ObjectId = mongoose.Types.ObjectId; 
        Photo.findOne({_id: new ObjectId(req.params.id)}, (err, item) => {
            if (!err) {
                const c = new Comment();
                c.rating = req.body.rating;
                c.contents = req.body.contents;
                item.comments.push(c);
                item.save(err2 => {
                    if(!err2) {
                        console.log("saved!");
                        res.json({message: "Success", data: item})
                    } else {
                        console.log("Error")
                        res.json( {message: "Error", error: err2})
                    }
                })
            } else {
                console.log(err);
                res.json( {message: "Error", error: err})        
            }
        });
    }, 

    
}