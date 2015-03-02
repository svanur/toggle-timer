define(
  [
    "./primary-timer"
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
            //log.add('STATE: OnBeamStart');
            //log.add(' - OnBeam started');
console.info('Secondary timer go, PrimaryTimer is', PrimaryTimer);
            timerOperator.secondary.start();
            //log.show();

            timerOperator.setNextState( new PrimaryTimer.Start(timerOperator) );
      };
    }


    };

    return SecondaryTimer;

});
