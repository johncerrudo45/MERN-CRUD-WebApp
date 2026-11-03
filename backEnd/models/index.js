// use the DB credentials to connect
import dbConfig from "../config/db.config.js";
// use Sequelize library as Object-Relational mapping (ORM)
import Sequelize from "sequelize";
// use the Book model
import Book from "./book.model.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: dbConfig.pool,
    port: dbConfig.PORT,
});

// create an empty object to hold sequelize and model
const db = {};
db.Sequelize = Sequelize;
db.Sequelize = sequelize;
db.books = Book(sequelize, Sequelize);

// export the entire db object so other files can use it
export default db;
