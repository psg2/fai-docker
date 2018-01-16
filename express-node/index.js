const express = require("express");

const app = express();

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});

app.get("/*", (req, res) => {
  res.json({ message: "Hello World!" });
});
