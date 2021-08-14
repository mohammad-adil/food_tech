const router = require("express").Router();
const _categoryService = require("../category/category.service");
const auth = require("../../middleware/Auth");
const prefix = "/stockpile/v1/category";

router.post(
  prefix + "/addCategory",
  auth,
  _categoryService.doAddCategory,
  (req, res) => {}
);

router.post(
  prefix + "/addSubCategory",
  auth,
  _categoryService.doAddSubCategory,
  (req, res) => {}
);

router.get(
  prefix + "/getCategory",
  auth,
  _categoryService.doGetCategory,
  (req, res) => {}
);

router.get(
  prefix + "/getSubCategory",
  auth,
  _categoryService.doGetSubCategory,
  (req, res) => {}
);

router.patch(
  prefix + "/updateCategory/:categoryId",
  auth,
  _categoryService.doUpdateCategory,
  (req, res) => {}
);

router.patch(
  prefix + "/updateSubCategory/:categoryId",
  auth,
  _categoryService.doUpdateSubCategory,
  (req, res) => {}
);

module.exports = router;
