const router = require("express").Router();
const controller = require("../controllers/child.controller");
const { checkAdmin, checkChild } = require("../middlewares/user.auth");
router
  .route("/child")
  .all(checkAdmin)
  .get(controller.getAllChildren)
  .post(controller.addChild);

router
  .route("child/:id")
  .all(checkChild)
  .patch(controller.updateChild)
  .delete(controller.deleteChild);
module.exports = router;
