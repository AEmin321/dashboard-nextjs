import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: 5,
      max: 50,
    },
    desc: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
    },
    color: {
      type: String,
    },
    stock: {
      type: Number,
      min: 0,
    },
    img: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
