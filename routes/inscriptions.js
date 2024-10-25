var express = require("express");
var router = express.Router();
const inscriptionController = require("../controllers/inscriptionController");
/* GET users listing. */
router.post("/inscription", inscriptionController.createInscription);

module.exports = router;
