const express = require("express");
const router = express.Router();
const stockController = require("../controllers/stockController");

router.get("/", stockController.index);

router.get("/details/:id", stockController.getDetails);

module.exports = router;
