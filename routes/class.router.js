const router = require("express").Router();
const controller = require("../controllers/class.controller");
const { checkAdmin } = require("../middlewares/user.auth");
router
  .route("/class")
  .all(checkAdmin)
  .get(controller.getAllClasses)
  .post(controller.addClass);

router
  .all(checkAdmin)
  .route("/class/:id")
  .patch(controller.updateClass)
  .delete(controller.deleteClass);
module.exports = router;
