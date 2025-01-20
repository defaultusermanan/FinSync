import express from "express";
import http from "http";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import dotenv from "dotenv";
import path from "path";
import mergedResolvers from "./resolvers/index.js";
import mergedTypeDefs from "./typeDefs/index.js";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import {connectDB} from "./db/connectDB.js";
import passport from "passport";
import session from "express-session";
import connectMongo from "connect-mongodb-session";
import { buildContext } from "graphql-passport";
import { configurePassport } from "./passport/passport.config.js";

dotenv.config();
configurePassport();
const __dirname = path.resolve();
const app = express();

const httpServer = http.createServer(app);

const MongoDBStore = connectMongo(session);

const store = new MongoDBStore({
  uri : process.env.MONGO_URI,
  collection: "sessions",
});

store.on("error",(err) => {
  console.error(err);
});

app.use(
  session({
    secret : process.env.SESSION_SECRET,
    resave: false, //This option specifies that weather to save the session to the store on every request or not. If this is saved as true then inside mongodb there will be different sessions for the same user.
    saveUninitialized: false, // Option specifies that weather to save uninitialized session or not. A session is uninitialized when it is new but not modified.
    cookie:{
      maxAge: 1000*60*60*24*7, // 1 week
      httpOnly: true, //This option specifies that the cookie will only be available for the server and not for the client side javascript.This makes the application more secure.It basically prevents cross-site scripting attacks.
    },
    store:store, //This is the store where the session will be stored.
  })
)

app.use(passport.initialize()); //This is used to initialize the passport.
app.use(passport.session()); //This is used to maintain the session.

const server = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers:mergedResolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
})

await server.start()

app.use(
  '/graphql',
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
  express.json(),
  expressMiddleware(server,{
    context: async ({ req, res }) => buildContext({ req, res }),
  }),
);

app.use(express.static(path.join(__dirname,"frontend/dist")));
app.get("*",(res,req) =>{
  res.sendFile(path.join(__dirname,"frontend/dist","index.html"));
})

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
await connectDB();
console.log(`🚀Server ready at http://localhost:4000/graphql`);