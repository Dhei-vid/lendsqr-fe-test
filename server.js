// imported cors as a middleware
const cors = require("cors");

const express = require("express");
const app = express();

// binding app level middleware to instance of app object
app.use(cors());

app.use("/login", (req, res) => {
  res.send({
    token: "test123",
  });
});

app.listen(8080, () =>
  console.log("API is running on http://localhost:8080/login")
);
