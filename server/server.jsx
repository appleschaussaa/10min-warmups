import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
import { ApolloServer } from "@apollo/server";
import path from "path";
import { typeDefs, resolvers} from "./schemas";
import db from "./config/connection";

const PORT = process.env.PORT || 5173;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer( server, {
    listen: { port: PORT },
});


