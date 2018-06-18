(function (MODAL_MODEL, $, _, undefined) {
  var newStockData;
  MODAL_MODEL.requestNewStock = function (ev, data) {
    newStockData = data;
    if (data.numOfInvalidFields === 0) {
      AJAX.retrieveStockValue(data.id, onSuccess, onError);
    } else {
      onError({message: 'All fields are required'});
    }
  };

  var onSuccess = function(data){
    EVENTS.trigger('newStockRequestedSuccessfully', newStockData);
  };

  var onError = function(error) {
    EVENTS.trigger('newStockRequestError', error);
  };
})((window.MODAL_MODEL = window.MODAL_MODEL || {}), jQuery, _);
