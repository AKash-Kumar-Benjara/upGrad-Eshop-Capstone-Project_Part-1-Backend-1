// const express = require("express");
const db = require("./models");


// const app = express();
// const PORT = process.env.PORT || 8080;

// app.get("/", (req, res) => {
//   res.json({ message: "Hi" });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });


//mongodb connection
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
