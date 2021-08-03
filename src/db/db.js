const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:admin@stockpile.otqrj.mongodb.net/StockPile?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);
