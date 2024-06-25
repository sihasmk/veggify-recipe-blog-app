const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function main() {
  await mongoose.connect(
    "mongodb+srv://sihaskumarasingha:cpdcLLd9B8PLEKAj@veggify-react-app.j7raesk.mongodb.net/veggify-react-app?retryWrites=true&w=majority&appName=veggify-react-app",
    clientOptions
  );
  await mongoose.connection.db.admin().command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");

  app.get("/", (req, res) => {
    res.send("Veggify Recipe Blog App Server is running!");
  });
}

main().catch(console.dir);

// Routes
const ItemRoutes = require("./src/routes/itemRoute");
const categoryRoutes = require("./src/routes/categoryRoute");

app.use("/api", ItemRoutes);
app.use("/api/", categoryRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
