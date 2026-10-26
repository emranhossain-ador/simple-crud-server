import express from "express";
import cors from "cors";
import { MongoClient } from 'mongodb';
import 'dotenv/config' 

const app = express()
const port = process.env.port ||3000


const client = new MongoClient(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mqg6anb.mongodb.net/`);

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

await connectToMongoDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Hello world');
})


app.listen(port, ()=>{
    console.log(`web server listening on port ${port}`);
})