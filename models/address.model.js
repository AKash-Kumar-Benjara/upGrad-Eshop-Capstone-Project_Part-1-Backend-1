module.exports = (mongoose) => {
    const Address = mongoose.model(
      "Address",
      mongoose.Schema({
        id: Number,
        city: String,
        landmark: String,
        name: String,
        phone: Number,
        state: String,
        street: String,
        zipcode: String,
        user_id: String,
      })
    );
  
    return Address;
  };
  