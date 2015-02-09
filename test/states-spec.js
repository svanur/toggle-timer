/*global describe, it */
define(
	[
	'states/states'
	],
	function (States) {
		"use strict";

  		describe('Timers', function () {

  			beforeEach(function() {
  				this.states = States;
  			});

			it('is an object', function () {
        		expect(_.isObject(this.states)).toBeTruthy();
	      	});

	      	describe("PrimaryTimer", function() {
	      		it('is an object', function () {
        			expect(_.isObject(this.states.PrimaryTimer)).toBeTruthy();
	      		});

	      		describe("states", function() {

	      			it("has a 'Start' state", function() {
	      				expect(_.isFunction(this.states.PrimaryTimer.Start)).toBeTruthy();
	      			});
	      			it("has a 'Stop' state", function() {
	      				expect(_.isFunction(this.states.PrimaryTimer.Stop)).toBeTruthy();
	      			});

	      		});// states

	      	});//PrimaryTimer

		});// Timers

}); //define