const router = require("express").Router();
const _itemService = require("../items/item.service");
const auth = require("../../middleware/Auth");
const prefix = "/stockpile/v1/item";
router.post(
  prefix + "/addItem",
  auth,
  _itemService.doAddItem,
  (req, res) => {}
);
router.get(
  prefix + "/getItemById/:itemId",
  auth,
  _itemService.doGetItemById,
  (req, res) => {}
);
router.patch(
  prefix + "/updateItem/:itemId",
  auth,
  _itemService.doUpdateItem,
  (req, res) => {}
);

module.exports = router;
