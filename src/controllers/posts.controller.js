const {insertPost} = require('../models/posts.model');

function create(req, res) {
    let body = req.body;
    insertPost(body);
}

module.exports = {create}

{
    "user_id":1,
    "conteudo":"Descrição do post",
    "midia": [
        {"url":"/midia/img/imagem1.jpg"},
        {"url":"/midia/video/video1.mp4"}
    ]
}