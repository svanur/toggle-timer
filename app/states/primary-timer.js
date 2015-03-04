define(
  [
    "states/secondary-timer"
  ],

  function(SecondaryTimer) {
    "use strict";

  /**
   *
   */
  var PrimaryTimer = {

    Start: function(timerOperator) {
      this.id = "primary.start";
      this.name = 'Start the Primary timer';

      this.go = function() {
            timerOperator.primary.start();

            var SecondaryTimer = require("states/secondary-timer");
            timerOperator.setNextState( new SecondaryTimer.Start(timerOperator) );
      };
    } // Start

  };

  return PrimaryTimer;

});
