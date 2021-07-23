module.exports = (mongoose) => {
    const User = mongoose.model(
      "User",
      mongoose.Schema({
        id: Number,
        created: Date,
        email: String,
        first_name: String,
        last_name: String,
        password: String,
        phone_number: String,
        role: String,
        updated: Date,
        user_name: String,
      })
    );
  
    return User;
  };
  