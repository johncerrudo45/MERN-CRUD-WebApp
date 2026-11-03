export default (sequelize, Sequelize) => {
    const Book = sequelize.define("book", {
        bookId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING,
        },
        published: {
            type: Sequelize.BOOLEAN,
        },
    });
    return Book;
};