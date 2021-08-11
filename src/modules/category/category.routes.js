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

/* router.Patch(
  prefix + "/updateCategory/:categoryId",
  auth,
  _categoryService.doUpdateCategory,
  (req, res) => {}
);

router.patch(
  prefix + "/updateSubCategory/:categoryId",
  _categoryService.doUpdateSubCategory,
  auth,
  (req, res) => {}
);
 */
module.exports = router;
