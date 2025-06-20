const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require ('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/books", router);

mongoose.connect(
    "mongodb+srv://rensi:rensi1510@cluster0.awtsolk.mongodb.net/bookStore?retryWrites=true&w=majority&appName=Cluster0"
).then(() => console.log("connected to database"))
    .then(() => {
        app.listen(5000)
    }).catch((err) =>
        console.log(err)
    );
