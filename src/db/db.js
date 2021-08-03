const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb://127.0.0.1:27017/stockpile",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB server");
  })
  .catch((err) => {
    console.log(err);
  });
//  "mongodb+srv://stockpile:stockpile@stockpile.otqrj.mongodb.net/stockpile?retryWrites=true&w=majority",
