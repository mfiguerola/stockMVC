(function(MODAL_VIEW, $, _, undefined) {
  MODAL_VIEW.init = function() {
    $('#add-stock-modal').on('shown.bs.modal', function() {
      _.each($('#add-stock-modal input'), function (input) {
        input.value = '';
      });
      $('#id').trigger('focus');
      $('.add_stock').on('click', function () {
        var $addStockModal = $('#add-stock-modal');
        var data = {
          numOfInvalidFields: 0
        };
        _.each($addStockModal.find('input'), function(input) {
          data[input.id] = input.value;
          if (input.value) {
            $(input).removeClass('invalid');
          } else {
            $(input).addClass('invalid');
            data.numOfInvalidFields++;
          }
        });
        EVENTS.trigger('addStockRequested', data);
      });
    })
  };

  MODAL_VIEW.hide = function() {
    $('#add-stock-modal').find('.close_add_stock_modal').click();
  };

  MODAL_VIEW.showError = function(e, error) {
    $('.modal_error').removeClass('hidden').html(error.message);
  };

  MODAL_VIEW.hideError = function() {
    $('.modal_error').addClass('hidden');
  };

})((window.MODAL_VIEW = window.MODAL_VIEW || {}), jQuery, _);
