(function(STOCK_HELPER, $, _, undefined) {
  STOCK_HELPER.getStockCurrentPrice = function(data) {
    var closingPriceKey = '4. close';
    return parseFloat(this.getStockValues(data)[closingPriceKey]);
  };

  STOCK_HELPER.getStockId = function(data) {
    var idKey = '2. Symbol';
    return this.getStockInfo(data)[idKey];
  };

  STOCK_HELPER.getStockInfo = function(data) {
    return data['Meta Data'];
  };

  STOCK_HELPER.getStockValues = function(data) {
    var dailyTimeSeries = data['Time Series (Daily)'];
    var lastRefreshedSerieKey = this.getStockInfo(data)['3. Last Refreshed'];
    return dailyTimeSeries[lastRefreshedSerieKey];
  };

  STOCK_HELPER.onError = function(error) {
    $('.stock_value').text(data['Error message']);
  };
})((window.STOCK_HELPER = window.STOCK_HELPER || {}), jQuery, _);