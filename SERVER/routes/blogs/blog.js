const router = require('express').Router();
const blogController = require('../../controller/blogs/blog');

// blogController.create
router.post('/', blogController.create);
// blogController.putUpdate
router.put('/:id', blogController.putUpdate);
// blogController.patchUpdate
router.patch('/:id', blogController.patchUpdate);
// blogController.getAll
router.get('/', blogController.getAll);
// blogController.getOne
router.get('/:id', blogController.getOne);
// blogController.delete
router.delete('/:id', blogController.delete);


// export router
module.exports = router;
