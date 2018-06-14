(function(MODAL_MODEL, $, _, undefined) {
  MODAL_MODEL.requestNewStock = function(data) {
    AJAX.retrieveStockValue(data.id/*TODO: add success (add) and error (do nothing and show errors) callbacks, */);
  };
})((window.MODAL_MODEL = window.MODAL_MODEL || {}), jQuery, _);
