const Purchase = require("../purchase/purchase.model");
const Item = require("../items/item.model");

exports.doPurchaseItem = async (req, res, next) => {
  try {
    const { userId } = req;
    req.body.enteredBy = userId;
    let payload = req.body;
    const item = await Item.findOne({
      _id: req.body.Item,
      department: payload.department,
    });
    if (item.length <= 0) {
      return res
        .status(404)
        .send({ Message: "No Such Item Found. Contact Administrator.. " });
    }
    const purchaseItem = await Purchase.create({ ...req.body });
    if (purchaseItem) {
      item.totalItemQuantity += purchaseItem.itemQuantity;
      item.purchasedAt.unshift({ purchaseId: purchaseItem._id });
      item.quantityAvailable += purchaseItem.itemQuantity;
      await item.save();
    }
    return res
      .status(201)
      .send({ Message: "Inserted Successfully. Item Updated...! " });
  } catch (err) {
    next(err);
  }
};
