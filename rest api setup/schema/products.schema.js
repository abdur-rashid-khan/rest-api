const mongoose = require('mongoose');

// schema design
const productSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please Provide a name for this product"],
    unique: true,
    minLength: [5, 'Name must be at least 3 characters'],
    maxLength: [50, 'Name is too large'],
    lowercase: true,
  },
  description: {
    type: String,
    required: true,
    minLength: [50, 'Description must be at least 3 characters'],
    maxLength: [200, 'Description is too large'],
    lowercase: true,
  },
  price: {
    type: Number,
    min: [0, "Price Can't be negative"],
    required: true
  },
  unit: {
    type: String,
    required: true,
    enum: {
      values: ['kg', 'liter', 'pcs',],
      message: "unit value can't be {VALUE}, must be kg/liter/psc"
    }
  },
  quantity: {
    type: Number,
    required: true,
    min: [0, "quantity can't be negative"],
    validator: {
      validator: (value) => {
        const isInteger = Number.isInteger(value);
        if (isInteger) {
          return true
        } else {
          return false
        }
      }
    },
    message: "Quantity must be an integer"
  },
  status: {
    type: String,
    required: true,
    enum: {
      values: ['in-stock', 'out-of-stock', 'discontinued'],
      message: "statues cat't be {VALUE}"
    }
  },
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'supplier',
  },
  categories: {
    name: {
      type: String,
      required: true,
    },
    _id: mongoose.Schema.Types.ObjectId,

  }
}, {
  // ->->->->->->->->-> OPTIONAL->->->->->->->->
  timestamps: true
})
// schema -> model -> query
// const Product = mongoose.model('Products', productSchema);

module.exports = mongoose.model("Product", productSchema);