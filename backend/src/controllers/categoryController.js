const { response } = require("express");
const Category = require("../model/categoryModel");
const Item = require("../model/ItemModel");

const getAllCategories = async (req, res) => {
  const result = await Category.find().sort({ menuId: 1 });
  res.status(200).json(result);
};

const getCategoryItemsOrCategoryByMenuId = async (req, res) => {
  const { parameter } = req.params;
  if (
    typeof parameter === "number" ||
    (typeof parameter === "string" &&
      parameter.trim() !== "" &&
      !isNaN(parameter))
  ) {
    const menuid = parameter;
    try {
      const catagoryObject = await Category.findOne({ menuId: menuid });

      if (!catagoryObject) {
        return res
          .status(404)
          .json({ message: "Category not found", menuId: menuid });
      }

      res.status(200).json(catagoryObject);
    } catch (error) {
      res
        .status(500)
        .json({ message: `Error fetching category info for ${menuid}` });
    }
  } else {
    const category = parameter;
    try {
      const categoryAsInDb =
        category.charAt(0).toUpperCase() + category.slice(1);
      const categoryData = await Category.findOne({ name: categoryAsInDb });

      if (!categoryData) {
        return res
          .status(404)
          .json({ message: "Category not found", category });
      }

      let items;
      if (categoryData.menuId !== 0) {
        items = await Item.find({ menuId: categoryData.menuId });
      } else {
        items = await Item.find();
      }
      res.status(200).json(items);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching category data", category });
    }
  }
};

const getItemsInCategory = async (req, res) => {
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

const getCategoryByMenuId = async (req, res) => {
  const { menuid } = req.params;
  try {
    const catagoryObject = await Category.findOne({ menuId: menuid });

    if (!catagoryObject) {
      return res
        .status(404)
        .json({ message: "Category not found", menuId: menuid });
    }

    res.status(200).json(catagoryObject);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error fetching category info for ${menuid}` });
  }
};

module.exports = {
  getAllCategories,
  getCategoryItemsOrCategoryByMenuId,
};
