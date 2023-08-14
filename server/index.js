const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const eventRoute = require("./routes/eventRoute")
const userRoute = require("./routes/userRoute")


dotenv.config();
const cors = require("cors");


 
mongoose.connect(process.env.MONGO_URL)
.then(_=> console.log("connection successful"))
.catch(err=> console.log("database connection fail"))




app.use(express.json({limit: '50mb'}));
app.use(cors()) 
app.use("/api/events", eventRoute)
app.use('/api/user', userRoute);



app.listen(8080, _=> console.log("backend server is running on port: "+ 8080))