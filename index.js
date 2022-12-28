const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config();

app.use(cors());
app.use(express.json())



//mongoDB


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.8l4usvv.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri)
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });





app.get('/', (req,res) =>{
    res.send('Social Server Running')
})

app.listen(port, () =>{
    console.log(`social server running on port ${port}`)
})