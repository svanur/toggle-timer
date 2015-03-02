/*
	The application is programmed using the STATE pattern(http://www.dofactory.com/javascript/state-design-pattern)
	The 'TimerOperator' servers as the pattern's CONTEXT and then thera are various STATES.
*/
// https://lodash.com/docs
define(
	[
		"lodash",
		"toggle-timer",
		"states/primary-timer",
		"states/secondary-timer"
	],

	function (_, ToggleTimer, PrimaryTimer, SecondaryTimer) {
		"use strict";

		var TimerOperator = function() {

			this.primary = new ToggleTimer({'id': 'primary'});
			this.secondary = new ToggleTimer({'id': 'secondary', 'duration': 5});

			/**
			* Stores the next state that should be executed by the TimerOperator
			*/
			this.nextState = new PrimaryTimer.Start(this);
			//this.nextState = new SecondaryTimer.Start(this);

			this.setNextState = function(state) {
				console.info('...set next state from:', this.nextState.id, ', to:', state.id );
				this.nextState = state;
			};

			this.go = function() {
				console.info('go: ', this.nextState.name);
				if(_.isObject(this.nextState)) {
					this.nextState.go();
				}
				else {
					console.error( 'nextState is not an object!');
				}
			};

			this.change = function(state) {
				this.nextState = state;
				this.nextState.go();
			};

		}; // TimerOperator

		return TimerOperator;

});
