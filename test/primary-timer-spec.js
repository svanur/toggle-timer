/*global describe, it */
define(
  [
    'lodash',
    'states/primary-timer'
  ],
  function (_, PrimaryTimer) {
    "use strict";

      describe('PrimaryTimer', function () {

        beforeEach(function() {
          this.primaryTimer = PrimaryTimer;
        });

      it('is an object', function () {
        expect(_.isObject(this.primaryTimer));
      });

      it("has a Start state", function() {
        expect(_.isFunction(this.primaryTimer.Start)).toBeTruthy();
      });

    });

});
