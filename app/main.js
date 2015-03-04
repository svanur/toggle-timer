define([
    "knockout",
    "timer-operator"
  ],

  function (ko, TimerOperator) {
    "use strict";

    var Main = function() {

      this.action = ko.observable("");
      this.timerOperator;

      this.init = function() {

        this.timerOperator = new TimerOperator();
        this.action(this.timerOperator.nextState.name);

        ko.applyBindings(this);
      };

      this.performAction = function() {
        this.timerOperator.go();
        this.action(this.timerOperator.nextState.name);
      };
    };

    return Main;
  });
