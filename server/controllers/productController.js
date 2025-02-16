import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
// Add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];
    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    // upload to cloudinary returns array of urls.
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let res = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return res.secure_url;
      })
    );

    // save to db
    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestseller: bestseller === "true" ? true : false,
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now(),
    };

    const newProduct = new productModel(productData);
    await newProduct.save();

    return res.json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Delete Product
const deleteProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    return res.json({
      success: true,
      message: "Product deleted successfully ",
    });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

// list product
const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    return res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error });
  }
};

// for single product info
const singleProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.body.productId);
    return res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error });
  }
};
export { addProduct, deleteProduct, listProduct, singleProduct };
