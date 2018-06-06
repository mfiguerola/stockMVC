(function(STOCKS_MANAGER_VIEW, $, _, undefined) {
  STOCKS_MANAGER_VIEW.render = function(e, data) {
    var tableTemplateFn = _.template($('#stock-table-template').html());
    var rowTemplateFn = _.template($('#stock-row-template').html());
    $('.table_container').html(tableTemplateFn(_.extend({}, data/*STOCKS_MANAGER_MODEL.getModel()*/, {'rowTemplateFn': rowTemplateFn})));
  };

  STOCKS_MANAGER_VIEW.onError = function(e, error) {
    console.log('error getting stocks'); //TODO: do something into the view
  };
})((window.STOCKS_MANAGER_VIEW = window.STOCKS_MANAGER_VIEW || {}), jQuery, _);