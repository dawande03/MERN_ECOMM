const express = require("express");
const { getProducts, getProduct } = require("../controller/productController");
const router = express.Router();


// GET ROUTE FOR ALL PRODUCTS

router.get("/products",getProducts);

// GET ROUTE FOR SINGAL PRODUCTS
router.route("/product/:id").get(getProduct); 

module.exports = router;