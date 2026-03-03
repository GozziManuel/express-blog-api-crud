console.log("Listening on watch");
const express = require("express");
const app = express();
const port = 3000;
const docsRouter = require("./router/posts");

app.use(docsRouter);

app.get("/", (req, res) => {
  res.json({
    result: "Benvenuti nel sito",
  });
});

app.listen(port, () => {});
