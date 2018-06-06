(function(EVENTS, $, undefined) {
  EVENTS.trigger = function(name, args) {
    $(document).trigger(name, [args]);
  };
  // TODO: EVENTS.triggerCurried = _.curry(EVENTS.trigger);
})((window.EVENTS = window.EVENTS || {}), jQuery);
