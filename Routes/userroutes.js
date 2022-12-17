const express = require("express");
const router = express.Router();

const controller = require("../Controllers/usercontoller.js");
router.route("/list").get(controller.list);
router.route("/add").post(controller.add);

module.export = router;
