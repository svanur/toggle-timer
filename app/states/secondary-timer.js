define(
  [
  ],

  function () {
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

        var PrimaryTimer = require("states/primary-timer");
        timerOperator.setNextState( new PrimaryTimer.Start(timerOperator) );
      };
    }, // Start


    Stop: function(timerOperator) {
      this.id = 'secondary.stop';
      this.name = 'Stop the Secondary timer';

      this.go = function() {
        timerOperator.secondary.stop();
      };
    } // Stop

  };

  return SecondaryTimer;

});
