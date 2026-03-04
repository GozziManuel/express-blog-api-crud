let postsData = require("../data/posts");

function home(req, res) {
  let posts = [...postsData];

  res.json({
    success: true,
    result: posts,
  });
}

// Funzione Show
function show(req, res) {
  let posts = [...postsData];
  const postId = parseInt(req.params.id);
  const postFind = posts.find((post) => post.id === postId);
  if (!postFind) {
    return res.status(404).json({
      result: "404 not Found",
    });
  }

  res.json({
    result: postFind,
    Post_Number: postId,
    description: `you are looking at post number ${postId}`,
  });
}

function store(req, res) {
  console.log(req.body);
  res.json({
    result: `Post Creato con successo`,
    success: true,
  });
}

function update(req, res) {
  const postId = req.params.id;
  res.json({
    postNumber: postId,
    description: `you are modifying post number ${postId}`,
  });
}

function modify(req, res) {
  const postId = req.params.id;
  res.json({
    postNumber: postId,
    description: `you are modifying partially post number ${postId}`,
  });
}

function destroy(req, res) {
  const postId = parseInt(req.params.id);
  const postFind = postsData.find((post) => post.id === postId);
  if (!postFind) {
    return res.status(404).json({
      result: "404 not Found",
    });
  }

  postsData = postsData.filter((post) => post.id !== postId);

  res.json({
    postNumber: postId,
    description: `you are eliminating post number ${postId}`,
  });
}

module.exports = { home, show, store, update, modify, destroy };
