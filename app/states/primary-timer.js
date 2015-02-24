define(
  [
    "../states/state",
    "../states/secondary-timer"
    /*
    "lodash",
    */
  ],
  function(State, SecondaryTimer) {
    "use strict";

  /**
   *
   */
  var PrimaryTimer = {

    Start: function(timerOperator) {
        this.name = 'Start the Primary timer';
        this.go = function() {
            //log.add('STATE: PrimaryTimer.Start');
            timerOperator.primary.start();
            //log.show();

            timerOperator.setNextState( new SecondaryTimer.Start(timerOperator) );
        };
    }

  };

  return PrimaryTimer;

});
