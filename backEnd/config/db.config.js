// import dotenv to use the environment variables
import 'dotenv/config.js'

// database configuration using env variables
export default {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASS,
    DB: process.env.DB_NAME,
    PORT: process.env.MYSQL_PORT, 
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 300000,
        idle: 100000,
    },
};
