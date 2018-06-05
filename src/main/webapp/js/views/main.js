(function(MAIN_VIEW, $, _, undefined) {
  MAIN_VIEW.requestRender = function(data) {
    // $('#stock-list').text(JSON.stringify(data));
    EVENTS.trigger('renderDataRequested', data);
  };

  MAIN_VIEW.render = function (e, data) {
    var tableTemplateFnc = _.template($('#stock-table-template').html());
    var rowTemplateFnc = _.template($('#stock-row-template').html());
    $('.table_container').html(_.template(tableTemplateFnc, _.extend({}, data, {'rowTemplate': rowTemplateFnc})));
  };

  MAIN_VIEW.onError = function(error) {
    console.log('error getting stocks'); //TODO: do something into the view
  };
})((window.MAIN_VIEW = window.MAIN_VIEW || {}), jQuery, _);
