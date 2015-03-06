define(
  [
    //"lodash"
  ],
  function ( ) {
    "use strict";

  /**
   *
   */
  var ToggleTimer = function(options) {

    options = options || {
                            duration: 10
                          };

    this.id = options.id;
    this.duration = options.duration;

    this.start = function() {
      console.info( this.id, ' - START');
    }; // start


    this.pause = function() {
      console.info( this.id, ' - PAUSE');
    }; // pause

    this.stop = function() {
      console.info( this.id, ' - STOP');
    }; // stop

  };

  return ToggleTimer;

});
