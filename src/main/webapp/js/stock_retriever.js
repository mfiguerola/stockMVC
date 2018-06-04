(function (STOCK_RETRIEVER, $, _, undefined) {
  STOCK_RETRIEVER.updateStockValue = function(data) {
    $('.stock_value').text(data['Time Series (Daily)']['2018-06-04']['4. close']);
  };
  
  STOCK_RETRIEVER.onError = function(error) {
    $('.stock_value').text(data['Error message']);
  };
})((window.STOCK_RETRIEVER = window.STOCK_RETRIEVER || {}), jQuery, _);
