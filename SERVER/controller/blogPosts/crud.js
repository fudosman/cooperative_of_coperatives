exports.create = async (req, res) => {
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
};

exports.putUpdate = async (req, res) => {
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
};

exports.patchUpdate =  async (req, res) => {
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
};

exports.getAll = async (req, res) => {
  try {
    const allPosts = await Posts.find();
    res.json(allPosts);
  } catch (error) {
    res.json({
      message: error,
    });
  }
};


exports.getOne = async (req, res) => {
  try {
    const onePost = await Posts.findById(req.params.postId);
    res.json(onePost);
  } catch (error) {
    res.json({
      message: error,
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const removedPost = await Posts.deleteOne({_id: req.params.postId });
    res.json(removedPost);
  } catch (error) {
    res.json({
      message: error,
    });
  }
};

