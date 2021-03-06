const {Router} = require('express');
const router = Router();
const  {check} = require('express-validator');
const { createReturns, getReturns, deletedReturns } = require('../controllers/returns');
const { validateJWT } = require('../middlewares/validate-jwt');
const {validator,} = require('../middlewares/validator');

router.use(validateJWT); 
router.get('/get',getReturns);
router.post('/new', createReturns);
router.delete('/delete/:id',deletedReturns);



module.exports = router;
