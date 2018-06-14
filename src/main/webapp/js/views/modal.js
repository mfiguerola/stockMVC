(function(MODAL_VIEW, $, _, undefined) {
  MODAL_VIEW.init = function() {
    $('#add-stock-modal').on('shown.bs.modal', function () {
      $('#id').trigger('focus');
      $('.add_stock').on('click', function () {
        var $addStockModal = $('#add-stock-modal');
        _.each($addStockModal.find('input'), function (input) {
          data[input.attr('id')] = input.val();
        });
        EVENTS.trigger('addStockRequested', data);
      });
    })
  };
})((window.MODAL_VIEW = window.MODAL_VIEW || {}), jQuery, _);
