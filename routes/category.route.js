import express from "express";
import categoryController from "../controllers/category.controller"
const router = express.Router()

router.get('/', (req, res) => {
    categoryController.getAll(req, res);
});

router.post('/', (req, res) => {
    categoryController.addCategory(req, res);
});

router.patch('/', (req, res) => {
  categoryController.updateCategory(req, res);
});

router.delete('/', (req, res) => {
    categoryController.deleteCategory(req, res);
});

export default router;
