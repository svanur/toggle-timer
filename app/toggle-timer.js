define(
  [
    "knockout",
    "pubsub",
    "timer"
  ],
  function ( ko, PubSub, Timer ) {
    "use strict";

  /**
   *
   */
  var ToggleTimer = function(options) {

    options = options || {id:'',duration:10};

    this.id = options.id || "";
    this.duration = options.duration || 10;
    this.running = false;
  //  this.message = ko.observable("");

    var self = this;

    var timerOptions = {
        tick    : 1,
        ontick  : function(secondsRemaining) {
            console.info(self.id, 'tick ', secondsRemaining);
            //self.message( secondsRemaining );
            PubSub.publish(self.id+'.message', secondsRemaining);
        },
        onstart : function() {
          console.info(self.id,'start ');
        },
        onstop  : function() {
            console.log(self.id,'stop');
            var secondsRemaining = 0;
            PubSub.publish('stop.message', secondsRemaining);
        },
        onpause : function() {
            console.log(self.id,'pause');
        },
        onend   : function() {
          console.log(self.id,'end');
        }
    };
    this.timer = new Timer(timerOptions);

    this.isRunning = function() {
      return this.running;
    }; // start

    this.start = function() {
      this.timer.start(this.duration);
      this.running = true;
    }; // start

    this.pause = function() {
      this.timer.pause()
      this.running = false;
    }; // pause

    this.stop = function() {
      this.timer.stop();
      this.running = false;
    }; // stop

  };

  return ToggleTimer;

});
