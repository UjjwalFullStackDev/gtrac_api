const express = require('express');
require('dotenv').config();
const sequelize = require('./config/db');
// const sequelize = require('./config/dbLocal');
const cors = require('cors');
const userRoute = require('./routes/userRoute')

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors())

const dbConnect = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log("DB connected successfully");

    } catch (error) {
        console.error("DB connection failed:", error.message);
        process.exit(1);
    }
};

// check endpoint
app.use('/api', userRoute)

// health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

const startServer = async () => {
    try {
        await dbConnect();
        app.listen(port, '0.0.0.0', () => {
            console.log(`Server running on port ${port}`);
            console.log(`API URL: http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();