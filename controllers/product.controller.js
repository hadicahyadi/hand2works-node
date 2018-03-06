import Product from '../models/product.model'
import logger from '../core/logger/app-logger'

const controller = {};

controller.getAll = async (req, res) => {
  try {
    const products = await Product.getAll();
    res.send(products);
  } catch (e) {
    logger.error(e)
    res.status(500).send('Failed to fetch product')
  }
}

controller.addProduct = async (req, res) => {
  let productToAdd = Product(req.body);
  logger.info(productToAdd)
  try {
    const addedProduct = await Product.add(productToAdd);
    res.send(addedProduct);
  } catch (e) {
    logger.error(e);
    res.status(500).send('Failed to add product');
  }
}

export default controller;
