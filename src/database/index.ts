import { MongoClient } from "mongodb";

const user = "devsilgah";
const userPassword = "4fvPUyF5hHH25lgR";
const cluster = "Cluster0";

const url = `mongodb+srv://${user}:${userPassword}@cluster0.pe8odeg.mongodb.net/?retryWrites=true&w=majority&appName=${cluster}`;
export const connectDatabase = async () => {
  const client = await MongoClient.connect(url);
  const db = client.db("main");
  return {
    listings: db.collection("test_listing"),
  };
};
