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

			it('has a "type" property', function () {
        		expect(_.has(this.state, "type")).toBeTruthy();
	      	});

			it('has a "go" function', function () {
        		expect(_.isFunction(this.state.go)).toBeTruthy();
	      	});

			it('has a "getName" function', function () {
				expect(_.isFunction(this.state.getName)).toBeTruthy();
	      	});

	      	describe("creates name from type", function() {

	      		it("empty string if type is undefined", function() {
	      			var name = this.state.getName();
	      			expect(name==="").toBeTruthy();
	      		});

	      		it("returns a string if the type if defined", function() {
	      			var newState = new State("PrimaryTimer.Start");
	      			var name = newState.getName();
	      			expect( !_.isEmpty(name) ).toBeTruthy();
	      		});

	      		describe("creates a 'human readable sentence' from type", function() {
		      		it("'PrimaryTimer.Start' becomes 'Start primary timer'", function() {
		      			var newState = new State("PrimaryTimer.Start");
		      			var expectedName = "Start primary timer",
		      				actualName = newState.getName()
		      				;
		      			expect( _.isEqual(actualName, expectedName) ).toBeTruthy();
		      		});
	      		});
	      	});

		});// Timers

}); //define