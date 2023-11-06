import * as dotenv from "dotenv";

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("Couldn't find .env file");
}

export default {
  // 포트번호
  PORT: parseInt(process.env.PORT as string, 10) as number,
  // mongoDB uri
  mongoURI: process.env.MONGODB_URI as string,
  // AWS S3 ACCESS KEY
  ACCESS: process.env.ACCESS_KEY as string,
  // SECRET KEY
  SECRET: process.env.SECRET_KEY as string,
  // REGION
  REGION: process.env.REGION as string
};