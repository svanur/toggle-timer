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
        expect(_.isObject(this.primaryTimer)).toBeTruthy();
      });


      describe('Start state', function () {
        beforeEach(function() {
          this.primaryStart = new this.primaryTimer.Start();
        });

        it("is a function", function() {
          expect(_.isObject(this.primaryStart)).toBeTruthy();
        });

        it("has a 'primary.start' id", function() {
          expect(_.has(this.primaryStart, 'id')).toBeTruthy();
          expect(_.isEqual(this.primaryStart.id, 'primary.start')).toBeTruthy();
        });

      });

    });

});
