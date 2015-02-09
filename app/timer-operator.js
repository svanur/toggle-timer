/*
	The application is programmed using the STATE pattern(http://www.dofactory.com/javascript/state-design-pattern)
	The 'TimerOperator' servers as the pattern's CONTEXT and then thera are various STATES.
*/

// https://lodash.com/docs
define(["lodash"], function (_) {

		//version: _.VERSION
	var TimerOperator = function() {
		"use strict";

		/**
		 * Stores the next state that should be executed by the TimerOperator
		 */
		this.nextState = '';

		this.setNextState = function(state) {
			this.nextState = state;
		};

		this.go = function() {
			if(_.isObject(this.nextState)) {
				this.nextState.go();
			}
		};

		this.change = function(state) {
			this.nextState = state;
			this.nextState.go();
		};

    }; // TimerOperator

    return TimerOperator;

});
