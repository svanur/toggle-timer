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

  };

  return ToggleTimer;

});
