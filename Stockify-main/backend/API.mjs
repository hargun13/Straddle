import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json({ limit: "10mb" }));

const port = 8000;

mongoose.connect(
  "mongodb+srv://shabb:sQ97Zk0BcDh89Z5N@cluster0.jgrhsib.mongodb.net/stockify",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const scrips = new mongoose.Schema({}, { strict: false });

const Scrips = mongoose.model("Scrips", scrips);

const dbName = "stockify";

app.post('/postScrips', async (req, res) =>{
    try {
        const newData = req.body;
        const result = await Scrips.create(newData);
        res.status(201).json(result);
      } catch (err) {
        console.error("Error inserting data:", err);
        res.status(500).json({ error: "Failed to insert data" });
      }
})

app.listen(port, () => {
  console.log("Server is connected to the " + port);
})  