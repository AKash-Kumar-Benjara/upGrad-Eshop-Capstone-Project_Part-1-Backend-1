module.exports = (mongoose) => {
    const Product = mongoose.model(
      "Product",
      mongoose.Schema({
        product_id: String,
        available_Items: Number,
        category: String,
        created: Date,
        description: String,
        image_url: String,
        manufacturer: String,
        price: Number,
        updated: Date,
      })
    );
  
    return Product;
  };
  