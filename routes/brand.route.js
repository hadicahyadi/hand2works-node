import express from "express";
import brandController from "../controllers/brand.controller"
const router = express.Router()

router.get('/', (req, res) => {
    brandController.getAll(req, res);
});

router.post('/', (req, res) => {
    brandController.addBrand(req, res);
});

router.patch('/', (req, res) => {
    brandController.updateBrand(req, res);
});

router.delete('/', (req, res) => {
    brandController.deleteBrand(req, res);
});

export default router;
