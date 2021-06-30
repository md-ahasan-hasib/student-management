const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
require('./database/connection');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const studentRoutes = require('./routes/student-route');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//Routes
app.use('/students', studentRoutes);

if (process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"));
}

//server running
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});