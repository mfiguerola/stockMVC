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

  var onGetStocksSuccess = function(data) {
    this.model = data;
    EVENTS.trigger('stocksRequestedSuccessfully', data);
  };

  var onGetStocksError = function(error) {
    this.model = {};
    EVENTS.trigger('stocksRequestFailed', error);
  };

  STOCKS_MANAGER_MODEL.init = function() {
    this.getStocks();
  };

  STOCKS_MANAGER_MODEL.getModel = function() {
    return this.model;
  };

})((window.STOCKS_MANAGER_MODEL = window.STOCKS_MANAGER_MODEL || {}), jQuery, _);