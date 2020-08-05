const router = require("express").Router();
const testRouter = require("./test.routes");

router.use("/test", testRouter);

module.exports = router;
