define(
  [
    /*
    "lodash",
    "./timer-operator",
    "../states/state",
    "../states/primary-timer"
  */
  ],
  //function (_, TimerOperator, State, PrimaryTimer) {
  function(){
    "use strict";

  /**
   *
   */
  var SecondaryTimer = {

    Start: function(timerOperator) {
        this.name = 'Start the Secondary timer';
        this.go = function() {
            //log.add('STATE: OnBeamStart');
            //log.add(' - OnBeam started');

            timerOperator.secondary.start();
            //log.show();
            //timerOperator.setNextState( new SecondaryTimer.Start(timerOperator) );
        };
    }


    };

    return SecondaryTimer;

});
