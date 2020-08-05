const router = require("express").Router();
const { testController } = require("../controllers");

router.get("/", testController.TestController);

module.exports = router;
