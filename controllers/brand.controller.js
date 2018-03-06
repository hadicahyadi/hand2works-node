import Brand from '../models/brand.model'
import logger from '../core/logger/app-logger'

const controller = {};

controller.getAll = async (req, res) => {
    try {
        const brands = await Brand.getAll();
        logger.info('sending all brands...');
        res.send(brands);
    }
    catch(err) {
        logger.error('Error in getting brands- ' + err);
        res.send('Got error in getAll');
    }
}

controller.addBrand = async (req, res) => {
    let brandToAdd = Brand({
        name: req.body.name
    });
    try {
        const savedBrand = await Brand.addBrand(brandToAdd);
        logger.info('Adding Brand...');
        res.send('added: ' + savedBrand);
    }
    catch(err) {
        logger.error('Error in getting brands- ' + err);
        res.send('Got error in addBrand');
    }
}

controller.updateBrand = async (req, res) => {
  let brand = req.body;
  try {
    const updatedBrand = await Brand.updateBrand(brand);
    res.send(updatedBrand)
  } catch (e) {
    logger.error(e)
    res.status(500).send('Error when updating brand')
  }
}

controller.deleteBrand = async (req, res) => {
    let BrandName = req.body.name;
    try{
        const removedBrand = await Brand.removeBrand(BrandName);
        logger.info('Deleted Brand- ' + removedBrand);
        res.send('Brand successfully deleted');
    }
    catch(err) {
        logger.error('Failed to delete Brand- ' + err);
        res.send('Delete failed..!');
    }
}

export default controller;
