const { response } = require("express");
const Category = require("../model/categoryModel");
const Item = require("../model/ItemModel");

const getAllCategories = async (req, res) => {
  const result = await Category.find().sort({ createdAt: -1 });
  res.status(200).json(result);
};

const getCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const categoryAsInDb = category.charAt(0).toUpperCase() + category.slice(1);
    const categoryData = await Category.findOne({ name: categoryAsInDb });

    if (!categoryData) {
      return res.status(404).json({ message: "Category not found" });
    }

    const items = await Item.find({ menuId: categoryData.menuId });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Error fetching category data", category });
  }
};

module.exports = {
  getAllCategories,
  getCategory,
};
