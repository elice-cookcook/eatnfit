import * as express from "express";
import * as cors from "cors";

export default async ({ app }: { app:express.Application}) => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    return app;
}