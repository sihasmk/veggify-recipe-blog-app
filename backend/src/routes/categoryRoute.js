const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/categoryController");

router.get("/all-categories", categoryController.getAllCategories);
router.get(
  "/categories/:parameter",
  categoryController.getCategoryItemsOrCategoryByMenuId
);

module.exports = router;
