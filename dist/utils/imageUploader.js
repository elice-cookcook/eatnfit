"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const image_to_url_1 = require("../utils/image-to-url");
const router = (0, express_1.Router)();
router.post('/', image_to_url_1.default.single('image'), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const image_url = req.file.location;
        res.status(200).json({
            message: '이미지 url 변환',
            data: image_url
        });
    }
    catch (err) {
        next(err);
    }
}));
exports.default = router;
