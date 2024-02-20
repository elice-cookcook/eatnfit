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
const express = require("express");
const loaders_1 = require("./loaders");
const config_1 = require("./config");
const routes_1 = require("./routes");
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = express();
        yield (0, loaders_1.default)({ expressApp: app });
        app.use(routes_1.default);
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.use((err, req, res, next) => {
            res.status(err.status || 500)
                .json({
                message: err.message || "Server Error"
            });
        });
        app.listen(config_1.default.PORT, () => {
            console.log('server start');
        }).on('error', (err) => {
            console.error(err);
        });
    });
}
startServer();
