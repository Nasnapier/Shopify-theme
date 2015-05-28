var DataModel = require('./_data_model.js');

var SixPackHolderTotal = function (items) {
  this.items = items;
  
  new DataModel(this, {
    total_items: '[data-phd-holding-total-items]',
    total_price: '[data-phd-holding-total-price]'
  });
  
  this._add_event_listeners();
  this.update();
};

SixPackHolderTotal.prototype.update = function () {
  this.total_items = this.items.total_count();
  this.total_price = this.items.total_price();
};

// Private

SixPackHolderTotal.prototype._add_event_listeners = function () {
  var _this = this;
  _this.items.on('ItemsUpdated', function () {
    _this.update();
  });
};

module.exports = SixPackHolderTotal;