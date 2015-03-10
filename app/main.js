define([
    "knockout",
    "pubsub",
    "timer-operator",
		"states/primary-timer",
    "states/operator"
  ],

  function (ko, PubSub, TimerOperator, PrimaryTimer, Operator) {
    "use strict";

    var Main = function() {

      this.timerOperator;
      this.actionText = ko.observable("");
      this.stopText = ko.observable("");
      this.started = ko.observable(false);

      this.primaryAlert = ko.observable("");
      this.secondaryAlert = ko.observable("");

      var self = this;

      this.init = function() {
        this.timerOperator = new TimerOperator();
        this.timerOperator.setNextState( new PrimaryTimer.Start(this.timerOperator) );
        this.actionText(this.timerOperator.nextState.name);
        this.stopText("Stop");

        PubSub.subscribe(this.timerOperator.primary.id+".message", function(msg) {
          console.info('primary.message', msg);
          self.primaryAlert(msg);
        });
        PubSub.subscribe(this.timerOperator.secondary.id+".message", function(msg) {
          console.info('secondary.message', msg);
          self.secondaryAlert(msg);
        });
        PubSub.subscribe("stop.message", function(msg) {
          console.info('stop.message', msg);
          self.primaryAlert(msg);
          self.secondaryAlert(msg);
        });

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
