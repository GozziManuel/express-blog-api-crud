const express = require("express");
const router = express.Router();
const postController = require("../controller/appControllers");

router.get("/posts", postController.home);

// Show
router.get("/posts/:id", postController.show);

// Store
router.post("/posts", postController.store);

// Update
router.put("/posts/:id", postController.update);

// Modify
router.patch("/posts/:id", postController.modify);

// Destroy
router.delete("/posts/:id", postController.destroy);

module.exports = router;
