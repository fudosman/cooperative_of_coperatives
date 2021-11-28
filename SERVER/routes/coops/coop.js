// import express router
const router = require('express').Router();
// import coop controller
const coopController = require('../../controller/coops/coop');


// coopController.create
router.post('/', coopController.create);
// coopController.putUpdate
router.put('/:id', coopController.putUpdate);
// coopController.patchUpdate
router.patch('/:id', coopController.patchUpdate);
// coopController.getAll
router.get('/', coopController.getAll);
// coopController.getOne
router.get('/:id', coopController.getOne);
// coopController.delete
router.delete('/:id', coopController.delete);
// export the router
module.exports = router;