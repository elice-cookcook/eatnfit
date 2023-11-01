import * as express from "express";
import { Request, Response, NextFunction } from "express";
import loaders from "./loaders";
import config from "./config";
import routes from "./routes";

async function startServer() {
    const app = express();

    await loaders({ expressApp: app });

    app.use(routes);
    
    interface Error {
        message: string;
        status: number;
    }

    app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
        res.status(err.status || 500);
        res.send(err.message || 'Unknown Error');
    });

    app.listen(config.PORT, () => {
        console.log('server start');
    }).on('error', (err) => {
        console.error(err);
    })
}

startServer();