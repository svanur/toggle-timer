/*
	The application is programmed using the STATE pattern(http://www.dofactory.com/javascript/state-design-pattern)
	The 'TimerOperator' servers as the pattern's CONTEXT and then thera are various STATES.
*/
// https://lodash.com/docs
define(
	[
		"lodash",
		"toggle-timer"
	],

	function (_, ToggleTimer, Timer) {
		"use strict";

		var TimerOperator = function() {

			this.primary = new ToggleTimer({'id': 'primary'});
			this.secondary = new ToggleTimer({'id': 'secondary', 'duration': 5});

			this.nextState = {};

			this.setNextState = function(state) {
				this.nextState = state;
			};

			this.go = function() {
				if(_.isObject(this.nextState)) {
					this.nextState.go();
				}
				else {
					console.error( 'nextState is not an object!');
				}
			};

			this.change = function(state) {
				this.setNextState(state);
				this.nextState.go();
			};

		}; // TimerOperator

		return TimerOperator;

});
