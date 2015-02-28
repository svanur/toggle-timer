/*global describe, it */
define(
  [
    'lodash',
    'states/secondary-timer'
  ],
  function (_, SecondaryTimer) {
    "use strict";

      describe('SecondaryTimer', function () {

        beforeEach(function() {
          this.secondaryTimer = SecondaryTimer;
        });

      it('is an object', function () {
        expect(_.isObject(this.secondaryTimer)).toBeTruthy();
      });


      describe('Start state', function () {
        beforeEach(function() {
          this.secondaryStart = new this.secondaryTimer.Start();
        });

        it("is a function", function() {
          expect(_.isObject(this.secondaryTimer)).toBeTruthy();
        });

        it("has a 'secondary.start' id", function() {
          expect(_.has(this.secondaryStart, 'id')).toBeTruthy();
          expect(_.isEqual(this.secondaryStart.id, 'secondary.start')).toBeTruthy();
        });

      });

    });

});
