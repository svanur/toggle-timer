/*global describe, it */
define(
  [
    'lodash',
    'timer-operator',
    'states/secondary-timer'
  ],
  function (_, TimerOperator, SecondaryTimer) {
    "use strict";

      describe('SecondaryTimer', function () {

        beforeEach(function() {
          this.timerOperator = new TimerOperator('sædí');
          this.secondaryTimer = SecondaryTimer;
        });

      it('is an object', function () {
        expect(_.isObject(this.secondaryTimer)).toBeTruthy();
      });


      describe('Start state', function () {
        beforeEach(function() {
          this.secondaryStart = new this.secondaryTimer.Start(this.timerOperator);
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
