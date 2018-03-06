import mongoose from 'mongoose';

const CategorySchema = mongoose.Schema({
    name: {type: String, required: true, unique: true, index: true}
}, {collection : 'Category'});

let CategoryModel = mongoose.model('Category', CategorySchema);

CategoryModel.getAll = () => {
  return CategoryModel.find({});
}

CategoryModel.addCategory = (categoryToAdd) => {
  return categoryToAdd.save();
}

CategoryModel.updateCategory = (category) => {
  return CategoryModel.update({_id: category._id}, category, (err, result) => {
    return result;
  });
}

CategoryModel.removeCategory = (categoryId) => {
  return CategoryModel.remove({_id: categoryId});
}

export default CategoryModel;
