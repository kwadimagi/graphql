require("dotenv").config();
import { MongoClient } from "mongodb";

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@cluster0.pe8odeg.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.DB_CLUSTER}`;
export const connectDatabase = async () => {
  const client = await MongoClient.connect(url);
  const db = client.db("main");
  return {
    listings: db.collection("test_listing"),
  };
};
