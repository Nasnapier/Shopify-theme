/*
  PHD Cart is the main file for handling all the different ways that the site can add items to the cart
*/

var SixPackBuilder = require('./phd.cart.sixpack.js');
var MultiStepBuilder = require('./phd.cart.multistep.js');
var StandardCart = require('./phd.cart.standard.js');

var PhdCart = function () {
  var standard_cart = new StandardCart();
  
  // TODO: only load the appropriate classes that are needed for the page
  
  new SixPackBuilder(standard_cart);
  new MultiStepBuilder(standard_cart);
};

module.exports = PhdCart;