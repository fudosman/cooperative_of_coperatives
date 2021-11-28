const router = require('express').Router();
// get route for retrieving all notifications
router.get('/', (req, res) => {
    res.send('get all notifications');
});
// get route for retrieving one notifications
router.get('/:id', (req, res) => {
    res.send('get one notification');
});
// post route for creating notifications
router.post('/', (req, res) => {
    res.send('create a notification');
});
// put route for updating notifications
router.put('/:id', (req, res) => {
    res.send('update a notification');
});
// delete route for deleting notifications
router.delete('/:id', (req, res) => {
    res.send('delete a notification');
});

// export router
module.exports = router;