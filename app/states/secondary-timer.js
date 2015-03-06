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
        timerOperator.primary.pause();
        timerOperator.secondary.start();
        timerOperator.setNextState( new SecondaryTimer.Stop(timerOperator) );
      };
    }, // Start


    Stop: function(timerOperator) {
      this.id = 'secondary.stop';
      this.name = 'Stop the Secondary timer';

      this.go = function() {
        var PrimaryTimer = require("states/primary-timer");

        timerOperator.secondary.stop();
        timerOperator.change( new PrimaryTimer.Start(timerOperator) );
      };
    } // Stop

  };

  return SecondaryTimer;

});
