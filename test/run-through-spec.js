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

        });

        it('should toggle between primary and secondary states', function () {

          this.timerOperator = new TimerOperator('fla');

          // default, the 'next state' should be primary.start
          expect(_.isEqual(this.timerOperator.nextState.id, 'primary.start')).toBeTruthy();
          console.info('\r\n1: ', this.timerOperator.nextState.id);

          this.timerOperator.go();
          // next state should be secondary.start
          expect(_.isEqual(this.timerOperator.nextState.id, 'secondary.start')).toBeTruthy();
          console.info('\r\n2: ', this.timerOperator.nextState.id);
/*
          this.timerOperator.go();
          // next state should be primary.start
          console.info('\r\n3: ', this.timerOperator.nextState.id);
          expect(_.isEqual(this.timerOperator.nextState.id, 'primary.start')).toBeTruthy();
*/
        });


    });

});
