var init = function() {
  AJAX.retrieveStockValue('ITX.MC', STOCK_RETRIEVER.updateStockValue, STOCK_RETRIEVER.onError);
  AJAX.getStocks(VIEW.render, VIEW.onError);
};

$(document).ready(init);
