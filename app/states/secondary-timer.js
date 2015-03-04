define(
  [
    "states/primary-timer"
  ],

  function (PrimaryTimer) {
    "use strict";

  /**
   *
   */
  var SecondaryTimer = {

    Start: function(timerOperator) {
      this.id = 'secondary.start';
      this.name = 'Start the Secondary timer';

      this.go = function() {
            timerOperator.secondary.start();

            var PrimaryTimer = require("states/primary-timer");
            timerOperator.setNextState( new PrimaryTimer.Start(timerOperator) );
      };
    } // Start

  };

  return SecondaryTimer;

});
