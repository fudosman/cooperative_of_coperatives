const router = require('express').Router();

// get all wallets
router.get('/', (req, res) => {
    res.send('get all wallets');
});

// get one wallet
router.get('/:id', (req, res) => {  
    res.send('get one wallet');
});
// create a wallet
router.post('/', (req, res) => {
    res.send('create a wallet');
});
// update a wallet
router.put('/:id', (req, res) => {
    res.send('update a wallet');
});
// delete a wallet
router.delete('/:id', (req, res) => {
    res.send('delete a wallet');
});

// export the router
module.exports = router;