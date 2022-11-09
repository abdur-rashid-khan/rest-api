const errorHandler = (error, req, res, next) => {
  console.log(error.message);
  res.state(500).json({
    message:'Something Broken',
  })
}
module.exports = errorHandler;