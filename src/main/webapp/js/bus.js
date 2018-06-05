var init = function () {
  includeTemplates();
  initTemplateSettings();
  // AJAX.retrieveStockValue('ITX.MC', STOCK_RETRIEVER_VIEW.updateStockValue, STOCK_RETRIEVER_VIEW.onError);
  AJAX.getStocks(MAIN_VIEW.requestRender, MAIN_VIEW.onError);
};

var includeTemplates = function() {
  $(function(){
    $('.table_template').load('webapp/templates/table.html'); 
    $('.table_row_template').load('webapp/templates/table_row.html');
  });
}

var initTemplateSettings = function () {
  _.templateSettings = {
    evaluate: /\{\#([\s\S]+?)\#\}/g,
    interpolate: /\{\{([\s\S]+?)\}\}/g
  };
};

var render = function(e, data) {
  ROW_PARSER.parse(_.extend({}, data, { 'retrieveStockValueFun': AJAX.retrieveStockValue }));
};

$(document)
  .ready(init)
  .on('renderDataRequested', render)
  .on('stocksParsedSuccessfully', MAIN_VIEW.render);