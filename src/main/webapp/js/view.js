(function (VIEW, $, _, undefined) {
  VIEW.render = function(data) {
    $('#stock_list').text(JSON.stringify(data));
    //TODO: render template
  };
  
  VIEW.onError = function(error) {
    console.log('error getting stocks'); //TODO: do something into the view
  };
})((window.VIEW = window.VIEW || {}), jQuery, _);