const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://stockpile:stockpile@stockpile.otqrj.mongodb.net/stockpile?retryWrites=true&w=majority",
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
