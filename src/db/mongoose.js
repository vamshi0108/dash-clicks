const mongoose = require("mongoose");

//Right now username and password is made visible, but normally we get the URL from process.env
mongoose.connect(
  "mongodb+srv://vamshi:vamshi@dashclicks.rnn6q.mongodb.net/dashclicks?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);
