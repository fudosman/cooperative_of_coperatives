const express = require('express');
const mongoose = require('mongoose');
const authRouter = express.Router();

function router(){
  authRouter.route('/signUp')
    .post((req,res)=>{
      res.json(req.body);
    })
  return authRouter;
}

module.exports = router;