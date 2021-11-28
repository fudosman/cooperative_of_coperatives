const express = require("express");
const router = express.Router();
const Posts = require("../model/crud");
const crud = require("../controller/crud");
const privateRoute = require("../middleware/privateRoute");
const multer = require("../middlewares/multer-config");

// CREATE A RESOURCE
router.post("/", crud.create);

// UPDATE AN EXISTING FILE
router.put("/:postId", crud.putUpdate);

router.put('/:id', auth, multer, crud.putUpdate);


// UPDATE BY PATCHING THE FILE
router.patch("/:postId", crud.patchUpdate);

// RETURN ALL THE RESOURCE
router.get("/", crud.getAll);

// RETURN A SPECIFIC POST
router.get("/:postId", crud.getOne);

// DELETE A POST BY ID
router.delete("/:postId", crud.delete);

module.exports = router;
