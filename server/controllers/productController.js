import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, subCategory, sizes, bestSeller } = req.body;

    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];

    const images = [image1, image2, image3, image4].filter(item => item !== undefined);

    const imagesURL = await Promise.all(
      images.map(async (item) => {
        const result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      description,
      category,
      subCategory: subCategory,
      price: Number(price),
      bestSeller: bestSeller === "true" ? true : false,
      sizes: sizes ? JSON.parse(sizes) : [],
      image: imagesURL,
      date: Date.now()
    }
    

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: 'Product data added successfully' });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addProduct };
