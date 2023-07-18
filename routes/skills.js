var express = require('express');
var router = express.Router();
const skillsController = require('../controllers/skills')

router.get('/',skillsController.index);
router.get('/:id',skillsController.show);

module.exports = router;
