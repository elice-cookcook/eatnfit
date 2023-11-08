import * as express from "express";
import * as cors from "cors";
import * as cookieParser from "cookie-parser";

export default async ({ app }: { app:express.Application}) => {
    app.use(cors());
    app.use(cookieParser());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    return app;
}