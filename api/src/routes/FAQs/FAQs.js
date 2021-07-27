const { Router } = require("express");
const router = Router();
const faqCtrl = require("../../controllers/FAQs.controller");
const authentication = require("../../middlewares/authentication");

router.post("/", faqCtrl.contactAdministration);

module.exports = router;
