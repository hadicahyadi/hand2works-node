import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true, index: true },
    price: { type: Number },
    stock: { type: Number },
    brand: { type: Schema.Types.ObjectId, ref: 'Brand' },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, { collection : 'Product' });

let ProductModel = mongoose.model('Product', ProductSchema);

ProductModel.getAll = () => {
  return ProductModel.find({})
    .populate('brand')
    .populate('category')
    .exec((err, products) => {
      if (err) {
        console.log(err)
      } else {
        return products;
      }
    });
}

ProductModel.add = (productToAdd) => {
  return productToAdd.save();
}

export default ProductModel;
