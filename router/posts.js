const express = require("express");
const router = express.Router();
const postController = require("../controller/appControllers");

router.get("/posts", postController.Home);

// Show
router.get("/posts/:id", postController.Show);

// Store
router.post("/posts", postController.Store);

// Update
router.put("/posts/:id", postController.Update);

// Modify
router.patch("/posts/:id", postController.Modify);

// Destroy
router.delete("/posts/:id", postController.Destroy);

module.exports = router;
