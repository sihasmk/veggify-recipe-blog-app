const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    name: String,
    menuId: Number,
  },
  { collection: "Categories" }
);

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
