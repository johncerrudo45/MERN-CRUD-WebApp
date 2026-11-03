import * as books from "../controllers/book.controller.js";
import express from "express";

export default (app) => {
    let router = express.Router();

    // Create a new Book
    router.post("/", books.create);

    // Retrieve all Books
    router.get("/", books.findAll);

    app.use("/api/books", router);
};