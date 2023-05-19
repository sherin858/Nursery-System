const router = require("express").Router();
const controller = require("../controllers/home.controller");
router.post("/login", controller.login);
module.exports = router;
