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

    this.duration = options.duration;

    this.start = function() {

    }; // start

  };

  return ToggleTimer;

});
