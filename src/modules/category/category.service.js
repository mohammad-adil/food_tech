const Category = require("../category/category.model");
const SubCategory = require("../category/subcategory.model");

exports.doAddCategory = async (req, res, next) => {
  const { categoryName } = req.body;
  const { userId } = req;

  const cat = { categoryName, enteredBy: userId };

  console.log(cat);

  const category = await Category.create({ ...cat });
};
