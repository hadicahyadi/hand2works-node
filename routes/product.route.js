import express from "express";
import productController from "../controllers/product.controller";
const router = express.Router();

router.get('/', (req, res) => {
  productController.getAll(req, res);
});

router.post('/', (req, res) => {
  productController.addProduct(req, res);
});

router.patch('/', (req, res) => {

});

router.delete('/', (req, res) => {

});

export default router;
