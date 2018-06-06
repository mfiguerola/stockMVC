(function(ROW_PARSER, $, _, undefined) {
  ROW_PARSER.parse = function(e, data) {
    var extendedData = _.extend({}, data, { 'retrieveStockValueFun': AJAX.retrieveStockValue });
    var parsedStocks = _.clone(extendedData.stocks);
    var promises = [];
    _.each(parsedStocks, function(stock) {
      promises.push(extendedData.retrieveStockValueFun(stock.id));
    });
    
    var findStockToParse = function(parsedStocks, value) {
      return _.find(parsedStocks, function(parsedStock) {
        return parsedStock.id === STOCK_HELPER.getStockId(value);
      })
    };

    var addCalculatedExtraData = function(stockToParse, value) {
      stockToParse.currentPrice = STOCK_HELPER.getStockCurrentPrice(value);
      stockToParse.percDiff = getPercDiff(stockToParse);
      stockToParse.gained = getGained(stockToParse);
      return stockToParse;
    };

    var getPercDiff = function(stockToParse) {
      return (100 * (getPriceDiff(stockToParse)) / ((stockToParse.currentPrice + stockToParse.stockBuyingPrice) * 2)).toFixed(2);
    };

    var getPriceDiff = function(stockToParse) {
      return (stockToParse.currentPrice - stockToParse.stockBuyingPrice);
    };

    var getGained = function(stockToParse) {
      return (stockToParse.nStocks * (getPriceDiff(stockToParse))).toFixed(2);
    };

    return Promise.all(promises).then(function(values) {
      _.each(values, function(value) {
        var stockToParse = findStockToParse(parsedStocks, value);
        stockToParse = addCalculatedExtraData(stockToParse, value);
      });
      EVENTS.trigger('stocksParsedSuccessfully', {'stocks': parsedStocks});
    });
  };
})((window.ROW_PARSER = window.ROW_PARSER || {}), jQuery, _);
