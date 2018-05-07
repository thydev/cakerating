const mongoose = require('mongoose'),
        photos = require('../controllers/photos'),
        comments = required('../controllers/comments');

module.exports = (app) => {

    app.get('/photos', (req, res) => {
        photos.retrieveAll(req, res);
    })

    app.get('/photos/:id', (req, res) => {
        photos.retrieveById(req, res);
    });

    app.post('/photos', (req, res) => {
        photos.create(req, res);
    });

    app.put('/photos/:id', (req, res) => {
        console.log("request: body", req);
        photos.updateById(req, res);
    });

    app.delete('/photos/:id', (req, res)=> {
        photos.removeById(req, res);
    });

    app.post('/comments/:id', (req, res) => {
        comments.create(req, res);
    });
}