const app = require("express");

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/vagas", (req, res) => {
  res.send("Vagas");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
