// import express router
const router = require('express').Router();

// make a new router for geting all coops
router.get('/', (req, res) => {
    res.send('get all coops');
});
// make a new router for geting one coop
router.get('/:id', (req, res) => {
    res.send('get one coop');
});
// make a new router for posting a new coop
router.post('/', (req, res) => {
    res.send('create a coop');
}); 
// make a new router for updating a coop
router.put('/:id', (req, res) => {
    res.send('update a coop');
}); 
// make a new router for deleting a coop
router.delete('/:id', (req, res) => {
    res.send('delete a coop');
});

// export the router
module.exports = router;