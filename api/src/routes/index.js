const { Router } = require('express');
// const { Transaction } = require('./');
const axios = require('axios');

const errorHandler = require('../../utils/middlewares/errorHandlers');
const setHeaders = require('../../utils/middlewares/setHeaders');

const router = Router();
router.use(setHeaders);
router.use(errorHandler);

router.get('/', async (req, res) => {
    res.status(200).send('Bienvendido a Personal Budget!');
    
});

module.exports = router;