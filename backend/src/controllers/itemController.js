const Item = require("../model/itemModel");

const getAllItems = async (req, res) => {
  const result = await Item.find().sort({ createdAt: -1 });
};

module.exports = {
  getAllItems,
};
