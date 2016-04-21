var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/add/:a/:b',function(req,res){
console.log(req.params.a);
console.log(req.params.b);
console.log(parseInt(req.params.a)+parseInt(req.params.b));
  res.setHeader('Content-Type', 'application/json');
    res.send({ sum: parseInt(req.params.a)+parseInt(req.params.b) });
module.exports = router;

});
