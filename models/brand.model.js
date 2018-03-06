import mongoose from 'mongoose';

const BrandSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true, index: true}
}, {collection : 'Brand'});

let BrandModel = mongoose.model('Brand', BrandSchema);

BrandModel.getAll = () => {
    return BrandModel.find({});
}

BrandModel.addBrand = (brandToAdd) => {
    return brandToAdd.save();
}

BrandModel.updateBrand = (brand) => {
  return BrandModel.update({_id: brand._id}, brand, (err, result) => {
    return result;
  });
}

BrandModel.removeCar = (brandName) => {
    return BrandModel.remove({name: brandName});
}

export default BrandModel;
