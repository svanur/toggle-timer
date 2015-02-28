/*global describe, it */
define(
  [
    'lodash',
    'timer-operator',
  ],
  function (_, TimerOperator) {
    "use strict";

      describe('Run through test', function () {

        beforeEach(function() {
          this.timerOperator = new TimerOperator();
        });

        it('should toggle between primary and secondary states', function () {

          // next state should be primary.start
          console.info('dawg ', this.timerOperator.nextState.id);
          expect(_.isEqual(this.timerOperator.nextState.id, 'primary.start')).toBeTruthy();
          /*
          this.timerOperator.go();
          // next state should be secondary.start
          console.info('dawg ', this.timerOperator.nextState);
          expect(_.isEqual(this.timerOperator.nextState.id, 'secondary.start')).toBeTruthy();


          this.timerOperator.go();
          // next state should be primary.start
          console.info('dawg ', this.timerOperator.nextState);
          expect(_.isEqual(this.timerOperator.nextState.id, 'primary.start')).toBeTruthy();
          */
        });


    });

});
