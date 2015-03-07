define([
    "knockout",
    "timer-operator",
		"states/primary-timer",
    "states/operator"
  ],

  function (ko, TimerOperator, PrimaryTimer, Operator) {
    "use strict";

    var Main = function() {

      this.actionText = ko.observable("");
      this.stopText = ko.observable("");
      this.timerOperator;
      this.started = ko.observable(false);

      this.init = function() {
        this.timerOperator = new TimerOperator();
        this.timerOperator.setNextState( new PrimaryTimer.Start(this.timerOperator) );
        this.actionText(this.timerOperator.nextState.name);
        this.stopText("Stop");

        ko.applyBindings(this);
      };

      this.performAction = function() {
        this.timerOperator.go();
        this.actionText(this.timerOperator.nextState.name);
        this.started(true);
      };

      this.stop = function() {
        var Operator = require("states/operator");
        this.timerOperator.change(new Operator.StopTimers(this.timerOperator));
        this.started(false);
      };
    };

    return Main;
  });
