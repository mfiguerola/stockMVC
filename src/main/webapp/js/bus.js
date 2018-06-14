var init = function () {
  includeTemplates();
  STOCKS_MANAGER_MODEL.init();
  MODAL_VIEW.init();
};

var includeTemplates = function() {
  $(function(){
    $('.table_template').load('webapp/templates/table.html'); 
    $('.table_row_template').load('webapp/templates/table_row.html');
  });
}

$(document)
  .ready(init)
  .on('stocksRequestedSuccessfully', ROW_PARSER.parse)
  .on('stocksRequestFailed', STOCKS_MANAGER_VIEW.onError)
  .on('stocksParsedSuccessfully', STOCKS_MANAGER_VIEW.render)
  .on('addStockRequested', MODAL_MODEL.requestNewStock);
