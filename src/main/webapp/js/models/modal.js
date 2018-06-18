(function(MODAL_MODEL, $, _, undefined) {
  MODAL_MODEL.requestNewStock = function(ev, data) {
    if (data.numOfInvalidFields === 0) {
      EVENTS.trigger('newStockRequestedSuccessfully', data);
    } else {
      onError({message: 'All fields are required'});
    }
  };

  var onError = function(error) {
    EVENTS.trigger('newStockRequestError', error);
  };
})((window.MODAL_MODEL = window.MODAL_MODEL || {}), jQuery, _);
