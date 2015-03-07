define(
  [
    "states/primary-timer"
  ],

  function() {
    "use strict";

  /**
   *
   */
  var Operator = {

    StopTimers: function(timerOperator) {
      this.id = "operator.stopTimers";
      this.name = 'Stop all timers';

      this.go = function() {
        timerOperator.primary.stop();
        timerOperator.secondary.stop();

        var PrimaryTimer = require("states/primary-timer");
        timerOperator.setNextState(new PrimaryTimer.Start(timerOperator));
      };
    } // Start

  };

  return Operator;

});
