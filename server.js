const express = require('express');
require('dotenv').config();
const sequelize = require('./config/db');
const cors = require('cors');
const userRoute = require('./routes/userRoute')

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors())

const dbConnect = async () => {
   await sequelize.authenticate();
    console.log("DB connected");

   await sequelize.sync();
    console.log("DB Sync");
}

app.use('/api', userRoute)

app.listen(port, () => [
    console.log(`Server running on ${port}`),
    dbConnect()
])