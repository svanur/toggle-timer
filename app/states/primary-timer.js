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
        //var SecondaryTimer = require("states/secondary-timer");
        if( timerOperator.secondary.isRunning() ) {
          console.info('secondary is running');
          timerOperator.change( new SecondaryTimer.Stop(timerOperator) );
        }

        timerOperator.primary.start();
        timerOperator.setNextState( new SecondaryTimer.Start(timerOperator) );
      };
    } // Start

  };

  return PrimaryTimer;

});
