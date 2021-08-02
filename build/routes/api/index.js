"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var sharpUtils_1 = require("../../utilities/sharpUtils");
var routes = express_1.Router();
routes.get('/api', function (req, res) {
    res.send('<html><body><h2>Welcome to Image Processing</h2></body></html>');
});
routes.get('/api/images', function (req, res) {
    res.set('Cache-Control', 'public, max-age=31557600');
    var query = req.query;
    var image = {
        fileName: query.img,
        width: query.width,
        height: query.height,
    };
    function getPath(image, dir) {
        sharpUtils_1.resizeImage(image, dir)
            .then(function (path) {
            res.sendFile(path);
        })
            .catch(function () {
            res.send("We could not locate the file you've specified. Please add image to folder or check spelling.");
        });
    }
    getPath(image, __dirname);
});
exports.default = routes;
