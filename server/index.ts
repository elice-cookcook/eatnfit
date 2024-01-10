import * as express from "express";
import { Request, Response, NextFunction } from "express";
import loaders from "./loaders";
import config from "./config";
import routes from "./routes";
import { CustomError } from "./interfaces";

async function startServer() {
    const app = express();

    await loaders({ expressApp: app });

    app.use(routes);

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use((err:CustomError, req:Request, res:Response, next:NextFunction) => {
        res.status(err.status || 500)
        .json({
            message: err.message || "Server Error"
        });
    });

    app.listen(config.PORT, () => {
        console.log('server start');
    }).on('error', (err) => {
        console.error(err);
    })
}

startServer();