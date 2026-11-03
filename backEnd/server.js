import express from "express"; 
import db from "./models/index.js"; // to use the sequelize
import cors from "cors";
import bookRoutes from "./routes/book.routes.js"

const app = express();
app.use(express.json());

// Environment-specific origins
const allowedOrigins = [
    'http://localhost:5173',
];

const corsOptions = {
    origin: function (origin, callback) {
        // Allow requests with no origin (mobile apps, etc.)
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null,true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

// Routes
bookRoutes(app);

// create a simple route to display a message
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the application!"});
});

// Check for connection
db.Sequelize.authenticate()
    .then(() => console.log('Connection successful.'))
    .catch(err => console.error('Unable to connect.'));

// Sync database
db.Sequelize.sync().then(() => {
    console.log("Synced db.");
});

// use the 8080 port for running the server
// use the environment variable set in PORT OR just specify 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})