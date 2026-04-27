import Product from "../model/user.js";


// CREATE PRODUCT
export const createProduct = async (req, res) => {
  try {
    const { title, price, description, category } = req.body;

    if (!title || !price) {
      return res.status(400).json({ message: "Title and Price are required" });
    }

    const product = await Product.create({
      title,
      price,
      description,
      category
    });

    res.status(201).json(product);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// GET ALL PRODUCTS (Pagination + Search + Filter)
export const getProducts = async (req, res) => {
  try {
    const { page = 1, limit = 5, search = "", category } = req.query;

    const query = {
      title: { $regex: search, $options: "i" }
    };

    if (category) {
      query.category = category;
    }

    const products = await Product.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Product.countDocuments(query);

    res.status(200).json({
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      products
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// GET SINGLE PRODUCT
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// UPDATE PRODUCT
export const updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updated);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// DELETE PRODUCT
export const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};