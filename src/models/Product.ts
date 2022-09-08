import mongosse, { Schema } from "mongoose";

export const Product = mongosse.model(
  "Product",
  new Schema({
    name: String,
    price: Number,
  })
);
