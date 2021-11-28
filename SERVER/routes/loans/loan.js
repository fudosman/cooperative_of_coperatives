// import the express router
const router = require('express').Router();

// make a new router for geting all loans
router.get('/', (req, res) => {
    res.send('get all loans');
});
// make a new router for geting one loan
router.get('/:id', (req, res) => {
    res.send('get one loan');
});
// make a new router for posting a new loan
router.post('/', (req, res) => {
    res.send('post a new loan');  
});
// make a new router for updating a loan
router.put('/:id', (req, res) => {
    res.send('update a loan');
});
// make a new router for deleting a loan
router.delete('/:id', (req, res) => {
    res.send('delete a loan');
});

// Make the router available for use in the server.js file
module.exports = router;