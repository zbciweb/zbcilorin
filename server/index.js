import express from "express";
import bodyParser from "body-parser";
// import mongoose from "mongoose";
import cors from "cors";

import postRoutes from './routes/posts.js'

const app = express();
app.use(express.json())
const corsOptions = {
  origin: "http://localhost:3000",
};





app.use('/posts', postRoutes)







app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors(corsOptions));

//

app.get("/", (req, res) => {
  res.json({ message: "Welcome to ZBCI" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
