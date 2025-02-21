import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    ref: "user", // Assuming you are referencing the 'user' model
  },

  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  offerPrice: {
    type: Number,
    required: true,
  },

  image: {
    type: Array,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  date: {
    type: Number,
    required: true,
  },
});

// Correct way to check for an existing model before creating one
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
