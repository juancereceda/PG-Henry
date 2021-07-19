const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://group8:JocvgniaXvuVmRfq@cluster0.pyqz2.mongodb.net/cinema?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then((db) => console.log("Db is connected"))
  .catch((error) => console.log(error));
