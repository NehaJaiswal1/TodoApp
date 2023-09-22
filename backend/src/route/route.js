
const express = require('express');
const router = express.Router();
const todo = require('../controllers/todocontroller');

router.post('/add', todo.addlist);
router.delete('/delete', todo.deleteList);


module.exports = router;