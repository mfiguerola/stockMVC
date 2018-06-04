var init = function() {
  AJAX.retrieveStockValue('ITX.MC', STOCK_RETRIEVER.updateStockValues, STOCK_RETRIEVER.onError);
};

$(document).ready(init);
