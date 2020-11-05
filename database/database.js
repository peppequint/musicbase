const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to Musicbase!"))
  .catch((err) => {
    console.error(`Database error: ${err.message}`);
  });
