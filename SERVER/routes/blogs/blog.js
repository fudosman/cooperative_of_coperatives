const router = require('express').Router();

// get all blogs
router.get('/', (req, res) => {
    res.send('get all blogs');
});
// get one blog
router.get('/:id', (req, res) => {
    res.send('get one blog');
});

// create a blog
router.post('/', (req, res) => {
    res.send('create a blog');  
});

// update a blog
router.put('/:id', (req, res) => {
    res.send('update a blog');  
});

// delete a blog
router.delete('/:id', (req, res) => {
    res.send('delete a blog');  
});

module.exports = router;
