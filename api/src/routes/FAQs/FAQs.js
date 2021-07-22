const { Router } = require("express");
const router = Router();
const faqCtrl = require("../../controllers/FAQs.controller");
const authentication = require("../../middlewares/authentication");

router.post("/", [authentication.verifyToken], faqCtrl.contactAdministration);

module.exports = router;
