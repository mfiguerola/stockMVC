(function(STOCK_RETRIEVER_VIEW, $, _, undefined) {
  STOCK_RETRIEVER_VIEW.updateStockValue = function(data) {
    var dailyTimeSeries = data['Time Series (Daily)'];
    var closingPriceKey = '4. close';
    var lastRefreshedSerieKey = data['Meta Data']['3. Last Refreshed'];
    var currentClosingPrice = dailyTimeSeries[lastRefreshedSerieKey][closingPriceKey];
    $('.stock_value').text(currentClosingPrice);
  };

  STOCK_RETRIEVER_VIEW.onError = function(error) {
    $('.stock_value').text(data['Error message']);
  };
})((window.STOCK_RETRIEVER_VIEW = window.STOCK_RETRIEVER_VIEW || {}), jQuery, _);
