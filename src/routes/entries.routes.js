const { Router } = require('express');
const router = Router();
const { renderIndex, renderNewEntry, CreateNewEntry } = require('../controllers/entries.controller')

router.get('/', renderIndex);
router.get('/new-entry', renderNewEntry);
router.post('/new-entry', CreateNewEntry);

module.exports = router;