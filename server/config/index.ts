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
};