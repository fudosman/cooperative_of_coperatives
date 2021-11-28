const router = require('express').Router();
// make a route for getting all pools
router.get('/', (req, res) => {
    res.send('get all pools');
});
// make a route for getting one pool
router.get('/:id', (req, res) => {
    res.send('get one pool');
});
// make a route for creating a new pool
router.post('/', (req, res) => {
    res.send('create a new pool');
});
// make a route for updating a pool
router.put('/:id', (req, res) => {
    res.send('update a pool');  
});
// make a route for deleting a pool
router.delete('/:id', (req, res) => { 
    res.send('delete a pool');
});


// export the router
module.exports = router;