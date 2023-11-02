import expressLoader from "./express";
import mongooseLoader from "./mongoose";

export default async({ expressApp }) => {
    mongooseLoader();

    await expressLoader({ app: expressApp });
}