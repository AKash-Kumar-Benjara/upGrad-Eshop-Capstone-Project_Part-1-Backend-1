module.exports = (mongoose) => {
    const Order = mongoose.model(
      "Order",
      mongoose.Schema({
        id: Number,
        amount: Number,
        order_date: Date,
        product_product_id: Number,
        shipping_address_id: Number,
        user_id: Number,
      })
    );
  
    return Order;
  };
  