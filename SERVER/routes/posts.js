const express = require("express");
const router = express.Router();
const Posts = require("../models/Posts");

// CREATE A RESOURCE
router.post("/", async (req, res) => {
  const post = new Posts({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});


// UPDATE AN EXISTING FILE
router.put("/:postId", async (req, res) => {
  try {
    const updatedPost = await Posts.updateOne(
      {_id: req.params.postId }, 
      { $set: {
          title : req.body.title,
          description: req.body.description
        }
      }
    );
    res.json(updatedPost);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

// UPDATE BY PATCHING THE FILE
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Posts.updateOne(
      {_id: req.params.postId }, 
      { $set: {
          title : req.body.title,
          description: req.body.description
        }
      }
    );
    res.json(updatedPost);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});


// RETURN ALL THE RESOURCE
router.get("/", async (req, res) => {
  try {
    const allPosts = await Posts.find();
    res.json(allPosts);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});


// RETURN A SPECIFIC POST
router.get("/:postId", async (req, res) => {
  try {
    const onePost = await Posts.findById(req.params.postId);
    res.json(onePost);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

// DELETE A POST BY ID
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Posts.deleteOne({_id: req.params.postId });
    res.json(removedPost);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

module.exports = router;
