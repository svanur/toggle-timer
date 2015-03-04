/*global describe, it */
define(
  [
    'lodash',
    'timer-operator',
    'states/primary-timer'
  ],
  function (_, TimerOperator,PrimaryTimer) {
    "use strict";

      describe('PrimaryTimer', function () {

        beforeEach(function() {
          this.timerOperator = new TimerOperator('pædí');
          this.primaryTimer = PrimaryTimer;
        });

      it('is an object', function () {
        expect(_.isObject(this.primaryTimer)).toBeTruthy();
      });


      describe('Start state', function () {
        beforeEach(function() {
          this.primaryStart = new this.primaryTimer.Start(this.timerOperator);
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
