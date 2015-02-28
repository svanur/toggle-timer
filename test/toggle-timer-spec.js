/*global describe, it */
define(
  [
    'toggle-timer'
  ],
  function (ToggleTimer) {
    "use strict";

      describe('ToggleTimer', function () {

        beforeEach(function() {
          this.toggleTimer = new ToggleTimer();
        });

      it('is an object', function () {
        expect(_.isObject(this.toggleTimer)).toBeTruthy();
      });

      it("has a start function", function() {
        expect(_.isFunction(this.toggleTimer.start)).toBeTruthy();
      });

    });

});
