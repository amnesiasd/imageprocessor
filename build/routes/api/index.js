"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var sharpUtils_1 = require("../../utilities/sharpUtils");
var routes = express_1.default.Router();
routes.get('/api', function (req, res) {
    res.send("" + req.query);
});
routes.get('/api/images', function (req, res) {
    res.set('Cache-Control', 'public, max-age=31557600');
    var query = req.query;
    var image = {
        fileName: query.img,
        width: query.width,
        height: query.height
    };
    function getPath(image, dir) {
        sharpUtils_1.resizeImage(image, dir)
            .then(function (path) {
            res.sendFile(path);
        });
    }
    ;
    getPath(image, __dirname);
});
exports.default = routes;
