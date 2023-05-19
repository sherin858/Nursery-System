const router = require("express").Router();
const controller = require("../controllers/teacher.controller");
const { checkAdmin, checkTeacher } = require("../middlewares/user.auth");
router
  .route("/teacher")
  .all(checkAdmin)
  .get(controller.getAllTeachers)
  .post(controller.addTeacher);

router
  .route("/teacher/:id")
  .all(checkTeacher)
  .patch(controller.updateTeacher)
  .delete(controller.deleteTeacher);
module.exports = router;
