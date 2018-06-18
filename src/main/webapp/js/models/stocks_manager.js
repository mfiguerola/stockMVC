(function(STOCKS_MANAGER_MODEL, $, _, undefined) {
  STOCKS_MANAGER_MODEL.getStocks = function() {
    $.ajax({
      url: 'http://localhost:3000/',
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      success: onGetStocksSuccess,
      error: onGetStocksError
    });
  };

  var onGetStocksSuccess = _.bind(function(data) {
    this.model = data;
    EVENTS.trigger('stocksRequestedSuccessfully', data);
  }, STOCKS_MANAGER_MODEL);

  var onGetStocksError = _.bind(function(error) {
    this.model = {};
    EVENTS.trigger('stocksRequestFailed', error);
  }, STOCKS_MANAGER_MODEL);

  STOCKS_MANAGER_MODEL.init = function() {
    this.getStocks();
  };

  STOCKS_MANAGER_MODEL.getModel = function() {
    return this.model;
  };

  var onAddStockSuccess = function () {
    EVENTS.trigger('newStockAddedSuccessfully');
  };

  var onAddStockError = function () {
    console.log('onAddStockError');
    EVENTS.trigger('newStockCouldNotBeAdded', {message: 'En error occurred while new stock was being added. Please, try again.'});
  };

  STOCKS_MANAGER_MODEL.addStock = function (newStock) {
    var stock = _.pick(newStock, 'id', 'name', 'nStocks', 'stocksBuyingPrice', 'pricePaidAfterTaxes', 'stockBuyingPrice');
    var newStockAlreadyExists = _.filter(this.model.stocks, function(stock) {
      return stock.id === newStock.id
    }).length > 0;
    if (!newStockAlreadyExists) {
      this.model.stocks.push(stock);
      var data = JSON.stringify({ stocks: this.model.stocks });
      $.ajax({
        url: 'http://localhost:3000/',
        type: 'POST',
        dataType: 'json',
        data: data,
        contentType: 'application/json; charset=utf-8',
      })
        .done(onAddStockSuccess)
        .fail(onAddStockError);
      
    } else {
      EVENTS.trigger('newStockAlreadyExists', {message: 'There\'s another stock with that id already'});
    }
  };

})((window.STOCKS_MANAGER_MODEL = window.STOCKS_MANAGER_MODEL || {}), jQuery, _);