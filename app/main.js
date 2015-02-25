define([
    "./timer-operator"
  ],

  function (TimerOperator) {
    "use strict";

    var Main = function() {

      this.init = function() {
        console.info('init the main-ish');
        var timerOperator = new TimerOperator();
        timerOperator.go();
        timerOperator.go();
      };
    };

    return Main;
  });
