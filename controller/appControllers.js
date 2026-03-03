let posts = require("../data/posts");

function Home(req, res) {
  res.json({
    success: true,
    result: posts,
  });
}

function Show(req, res) {
  const postId = parseInt(req.params.id);
  const postFind = posts.find((post) => post.id === postId);
  if (!postFind) {
    return res.json({
      result: "404 not Found",
    });
  }

  res.json({
    result: postFind,
    Post_Number: postId,
    description: `you are looking at post number ${postId}`,
  });
}

function Store(req, res) {
  res.json({
    result: `Post Creato con successo`,
    success: true,
  });
}

function Update(req, res) {
  const postId = req.params.id;
  res.json({
    Post_Number: postId,
    description: `you are modifying post number ${postId}`,
  });
}

function Modify(req, res) {
  const postId = req.params.id;
  res.json({
    Post_Number: postId,
    description: `you are modifying partially post number ${postId}`,
  });
}

function Destroy(req, res) {
  const postId = parseInt(req.params.id);
  const postFind = posts.find((post) => post.id === postId);
  if (!postFind) {
    return res.status(404).json({
      result: "404 not Found",
    });
  }

  posts = posts.filter((post) => post.id !== postId);

  res.json({
    Post_Number: postId,
    description: `you are eliminating post number ${postId}`,
  });
}

module.exports = { Home, Show, Store, Update, Modify, Destroy };
