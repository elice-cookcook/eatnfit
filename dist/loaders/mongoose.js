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
const mongoose_1 = require("mongoose");
const config_1 = require("../config");
const mongooseLoader = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        mongoose_1.default.connect(config_1.default.mongoURI);
        mongoose_1.default.connection.on('connected', () => {
            console.log('MongoDB Connected');
        });
    }
    catch (err) {
        console.error('MongoDB Connection Error:', err);
        process.exit(1);
    }
});
exports.default = mongooseLoader;
