const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const bodyParser = require('body-parser');
const userRoutes = require('./route/userRoute');


const app = express();


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/users', userRoutes);
 
const port = process.env.PORT || 5000


app.listen(port, () => {
    console.log(`server is renning on ${port}...`);
});