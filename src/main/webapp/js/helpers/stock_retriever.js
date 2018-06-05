(function(STOCK_RETRIEVER, $, _, undefined) {
  STOCK_RETRIEVER.getStockCurrentPrice = function(data) {
    var closingPriceKey = '4. close';
    return this.getStockValues(data)[closingPriceKey];
  };

  STOCK_RETRIEVER.getStockId = function(data) {
    var idKey = '2. Symbol';
    return this.getStockInfo(data)[idKey];
  };

  STOCK_RETRIEVER.getStockInfo = function(data) {
    return data['Meta Data'];
  };

  STOCK_RETRIEVER.getStockValues = function(data) {
    var dailyTimeSeries = data['Time Series (Daily)'];
    var lastRefreshedSerieKey = this.getStockInfo(data)['3. Last Refreshed'];
    return dailyTimeSeries[lastRefreshedSerieKey];
  };

  STOCK_RETRIEVER.onError = function(error) {
    $('.stock_value').text(data['Error message']);
  };
})((window.STOCK_RETRIEVER = window.STOCK_RETRIEVER || {}), jQuery, _);