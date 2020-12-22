const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://vamshi:vamshi@dashclicks.rnn6q.mongodb.net/dashclicks?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);
