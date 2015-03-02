define(
  [
    "./secondary-timer"
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
            //log.add('STATE: PrimaryTimer.Start');
console.info('Primary timer go, SecondaryTimer is', SecondaryTimer );

            timerOperator.primary.start();
            //log.show();

            timerOperator.setNextState( new SecondaryTimer.Start(timerOperator) );
        };
    } // Start

  };

  return PrimaryTimer;

});
