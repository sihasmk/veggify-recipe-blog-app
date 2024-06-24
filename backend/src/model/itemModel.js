const mongoose = require("mongoose");
const { Schema } = mongoose;

const ingredientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
});

const commentSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const moreSchema = new Schema({
  preptime: {
    type: String,
    required: true,
  },
  cooktime: {
    type: String,
    required: true,
  },
  servings: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
});

const itemSchema = new Schema({
  menuId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  thumbnail_img: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  tags: [String],
  ingredients: {
    type: [ingredientSchema],
    required: true,
  },
  comments: {
    type: [commentSchema],
    required: true,
  },
  more: {
    type: moreSchema,
    required: true,
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
