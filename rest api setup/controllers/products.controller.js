const Product = require('../schema/products.schema')

module.exports.postProducts = async (req, res, next) => {
  // console.log(req.body);
  // save or create
  const product = new Product(req.body);
  const result = await product.save();
  res.status(200).json({
    message: 'Insert products success',
    data:result
  })
}