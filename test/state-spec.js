/*global describe, it */
define(
	[
		'states/state'
	],
	function (State) {
		"use strict";

		describe('State', function () {

			beforeEach(function() {
				this.state = new State();
			});

			it('is an object', function () {
				expect(_.isObject(this.state)).toBeTruthy();
			});

			it('has a "go" function', function () {
				expect(_.isFunction(this.state.go)).toBeTruthy();
			});

		});// Timers

}); //define
