import Category from '../models/category.model'
import logger from '../core/logger/app-logger'

const controller = {};

controller.getAll = async (req, res) => {
    try {
        const categories = await Category.getAll();
        logger.info('sending all categorys...');
        res.send(categories);
    }
    catch(err) {
        logger.error('Error in getting categorys- ' + err);
        res.send('Got error in getAll');
    }
}

controller.addCategory = async (req, res) => {
    let categoryToAdd = Category({
        name: req.body.name
    });
    try {
        const savedCategory = await Category.addCategory(categoryToAdd);
        logger.info('Adding Category...');
        res.send('added: ' + savedCategory);
    }
    catch(err) {
        logger.error('Error in getting categorys- ' + err);
        res.send('Got error in addCategory');
    }
}

controller.updateCategory = async (req, res) => {
  let category = req.body;
  try {
    const updatedCategory = await Category.updateCategory(category);
    res.send(updatedCategory)
  } catch (e) {
    logger.error(e)
    res.status(500).send('Error when updating category')
  }
}

controller.deleteCategory = async (req, res) => {
    let categoryId = req.body.id;
    try{
        const removedCategory = await Category.removeCategory(categoryId);
        logger.info('Deleted Category- ' + removedCategory);
        res.send('Category successfully deleted');
    }
    catch(err) {
        logger.error('Failed to delete Category- ' + err);
        res.send('Delete failed..!');
    }
}

export default controller;
