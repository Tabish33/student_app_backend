const express = require("express");
const app = express();
const mongoose = require("mongoose");
const analytics_routes = require("./routes/analytics_routes")
const PORT = process.env.PORT || 3000
app.use(express.json())

app.use('/analytics',analytics_routes);


//mongoDB connection string
var uri = "mongodb://tabish:connection@cluster0-shard-00-00-n8mua.mongodb.net:27017,cluster0-shard-00-01-n8mua.mongodb.net:27017,cluster0-shard-00-02-n8mua.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";

// CONNECT TO MONGODB
mongoose.connect(uri,{useNewUrlParser:true})
.then(()=>{
    console.log("database connected");
})
.catch(err=>{
    console.log(err);
})

app.listen(PORT,()=>{
    console.log("Listening on port",PORT); 
})


