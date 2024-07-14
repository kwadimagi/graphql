import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import { connectDatabase } from "./database";
import { typeDefs, resolvers } from "./graphql";

const port = 9001;
const mount = async (app: Application) => {
  const db = await connectDatabase();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ db }),
  });

  server.applyMiddleware({ app, path: "/api" });
  //@ts-ignore
  app.listen(port);

  console.log(`[app] : http://localhost:${port}`);
  const listings = await db.listings.find({}).toArray();
  console.log(listings);
};

mount(express());

// mount(express());

//SQL TABLES and NOSQL -- DOCUMENTS
// typeDefs - string that represents the GraphQL schema.

// resolvers - map of functions that implement the schema.

// app.use(bodyParser.json()); K57RZ59JRGd1tAik
// mongodb+srv://devsilgah:<password>@cluster0.pe8odeg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// app.get("/", (req, res) => {
//   res.send("hello world");
// });
// app.get("/listings", (_req, res) => {
//   res.send(listings);
// });
//type--get,post,put,delete--http verbs
// app.post("/delete-listing", (req, res) => {
//   const id: string = req.body.id;

//   for (let i = 0; i < listings.length; i++) {
//     if (listings[i].id === id) {
//       return res.send(listings.splice(i, 1)[0]);
//     }
//   }
//   return res.send("failed to deleted listing");
// });
