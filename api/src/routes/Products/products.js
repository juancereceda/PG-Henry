const { Router } = require("express");
const productCtrl = require("../../controllers/product.controller");
const authentication = require("../../middlewares/authentication");

const router = Router();

router.get("/", productCtrl.getProducts);

router.delete(
  "/:name",
  [authentication.verifyToken, authentication.isAdmin],
  productCtrl.deleteProduct
);

router.post(
  "/",
  [authentication.verifyToken, authentication.isAdmin],
  productCtrl.addProduct
);


router.put(
  "/",
  [authentication.verifyToken, authentication.isAdmin],
  productCtrl.updateProduct
);

module.exports = router;
