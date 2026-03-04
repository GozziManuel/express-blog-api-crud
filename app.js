console.log("Listening on watch");
const express = require("express");
const app = express();
const port = 3000;
const postsRouter = require("./router/posts");

app.get("/", (req, res) => {
  res.json({
    result: "Benvenuti nel sito",
  });
});

app.use("/posts", postsRouter);

app.listen(port, () => {});
