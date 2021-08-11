const Category = require("../category/category.model");
const SubCategory = require("../category/subcategory.model");

exports.doAddCategory = async (req, res, next) => {
  try {
    const { categoryName } = req.body;
    const { userId } = req;
    const cat = { categoryName, enteredBy: userId };
    const category = await Category.create({ ...cat });
    res.status(200).send(category);
  } catch (err) {
    next(err);
  }
};

exports.doAddSubCategory = async (req, res, next) => {
  try {
    const { subCategoryName, parentCategory } = req.body;
    const { userId } = req;
    const cat = { subCategoryName, enteredBy: userId, parentCategory };

    const category = await SubCategory.create({ ...cat });
    res.status(200).send(category);
  } catch (err) {
    next(err);
  }
};
