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

exports.doGetCategory = async (req, res, next) => {
  try {
    const category = await Category.find().select("categoryName");
    res.status(200).send(category);
  } catch (err) {
    next(err);
  }
};

exports.doGetSubCategory = async (req, res, next) => {
  try {
    const category = await SubCategory.find().select("subCategoryName");
    res.status(200).send(category);
  } catch (err) {
    next(err);
  }
};

exports.doUpdateCategory = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const query = { _id: categoryId };
    const update = { ...req.body };
    const updateCategory = await Category.findByIdAndUpdate(query, update, {
      new: true,
    });

    if (!updateCategory) {
      res
        .status(404)
        .send("No Such Category to Update. Cannot Update Category");
    }
    res.status(200).send({
      message: "Updated Successfully.",
      data: updateCategory,
    });
  } catch (err) {
    next(err);
  }
};

exports.doUpdateSubCategory = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const query = { _id: categoryId };
    const update = { ...req.body };
    const updateCategory = await SubCategory.findByIdAndUpdate(query, update, {
      new: true,
    });

    if (!updateCategory) {
      res
        .status(404)
        .send("No Such Sub Category to Update. Cannot Update Category");
    }
    res.status(200).send({
      message: "Updated Successfully.",
      data: updateCategory,
    });
  } catch (err) {
    next(err);
  }
};
