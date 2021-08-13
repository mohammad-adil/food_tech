const Issue = require("../issue/issue.model");
const Item = require("../items/item.model");
exports.doIssueItem = async (req, res, next) => {
  try {
    const { itemId } = req.params;
    const payload = req.body;
    payload.issuedBy = req.userId;

    payload.item = itemId;
    console.log(payload);
    const item = await Item.findById({ _id: itemId });
    if (item) {
      if (item.unit.toString() != payload.unit.toString()) {
        return res
          .status(400)
          .send("Units Miss Match... Use Same units as per Item Discription");
      }
    }
    const issue = await Issue.create({ ...payload });
    if (issue) {
      item.quantityAvailable -= issue.quantityIssued;
      await item.save();
    }
    return res.status(200).send("Item Issued Successfully");
  } catch (err) {
    next(err);
  }
};
exports.doUpdateIssueItem = async (req, res, next) => {
  try {
    const { issueId } = req.params;
    const payload = req.body;
    const issueItem = await Issue.findByIdAndUpdate(
      { _id: issueId },
      { ...payload },
      { new: true }
    );
    if (!issueItem) {
      return res.status(404).send("No Such Item issued Item found...!");
    }
    return res.status(200).send(issueItem);
  } catch (err) {
    next(err);
  }
};
