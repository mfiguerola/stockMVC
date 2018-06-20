(function(STOCKS_MANAGER_VIEW, $, _, undefined) {
  STOCKS_MANAGER_VIEW.render = function (e, data) {
    var tableTemplateFn = _.template($('#stock-table-template').html());
    var rowTemplateFn = _.template($('#stock-row-template').html());
    $('.table_container').html(tableTemplateFn(_.extend({}, data, { 'rowTemplateFn': rowTemplateFn })));
    $('.table_container .remove_stock').on('click', function(e) {
      EVENTS.trigger('removeStockRequested', e.currentTarget.dataset.id);
    });
  };

  STOCKS_MANAGER_VIEW.onError = function (e, error) {
    $('.table_container .loading').html('Error getting stocks.');
  };
})((window.STOCKS_MANAGER_VIEW = window.STOCKS_MANAGER_VIEW || {}), jQuery, _);