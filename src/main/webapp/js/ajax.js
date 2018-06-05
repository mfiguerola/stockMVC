(function(AJAX, $, _, undefined) {
  AJAX.retrieveStockValue = function(stockSymbol, callback, errorCallback) {
    return $.ajax({
      url:
        'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&apikey=9IYGZXJCVQ3CURXN&symbol=' +
        stockSymbol,
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      success: callback,
      error: errorCallback
    });
  };

  AJAX.getStocks = function(callback, errorCallback) {
    $.ajax({
      url: 'http://localhost:3000/',
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      success: callback,
      error: errorCallback
    });
  };
})((window.AJAX = window.AJAX || {}), jQuery, _);
