var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', async (req, res, next) => {
  try {
    const customer = await CustomerService.retrieve(req.params.id);

    return res.json({ customer: customer });
  }
  catch (err) {
    // unexpected error
    return next(err);
  }
});

module.exports = router;
