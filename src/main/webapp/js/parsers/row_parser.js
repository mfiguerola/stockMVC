(function(ROW_PARSER, $, _, undefined) {
  ROW_PARSER.parse = function(data) {
    var parsedStocks = _.clone(data.stocks);
    var promises = [];
    _.each(parsedStocks, function(stock) {
      promises.push(data.retrieveStockValueFun(stock.id));
    });
    
    return Promise.all(promises).then(function (values) {
      _.each(values, function (value) {
        var stockToParse = _.find(parsedStocks, function (parsedStock) {
          return parsedStock.id === STOCK_RETRIEVER.getStockId(value);
        });
        stockToParse.currentPrice = parseFloat(STOCK_RETRIEVER.getStockCurrentPrice(value));
      });
      EVENTS.trigger('stocksParsedSuccessfully', {'stocks': parsedStocks});
    });
  };
})((window.ROW_PARSER = window.ROW_PARSER || {}), jQuery, _);
