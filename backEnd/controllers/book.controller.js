import db from "../models/index.js"; // use sequelize

const Op = db.Sequelize.Op; // use sequelize operators
const Book = db.books;

// Create and Save a new Book
export const create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    // Create a Book data
    const book = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false,
    };

    // Save Book in the database
    Book.create(book)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                err.message || "Some error occured while creating the Book.",
            });
        });
};

// Retrieve all Books
export const findAll = (req, res) => {
    // Allow a filter via query parameter
    const title = req.query.title;
    const condition = title ? { title: { [Op.like]: '%${title}%'} } : null;

    Book.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving books.",
            });
            console.log(data)
            console.log(err.message)
        });
};