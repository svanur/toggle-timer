/*global describe, it */
define(
	[
	'states/state-factory'
	],
	function (StateFactory) {
		"use strict";

  		describe('StateFactory', function () {

  			beforeEach(function() {
  				this.stateFactory = new StateFactory();
  			});

			it('is an object', function () {
        		expect(_.isObject(this.stateFactory));
	      	});

	    	describe('create', function () {

    	  		it('has a "create" function', function () {
	    	  		 expect(_.isFunction(this.stateFactory.create)).toBeTruthy();
	      		});

    	  		it('creates a valid "state" instance', function () {
    	  			var state = this.stateFactory.create(); // defaults to "PrimaryTimer.Start"
	    	  		expect(_.isObject(state)).toBeTruthy();
	    	  		expect(_.has(state, "type")).toBeTruthy();
	    	  		expect(_.isFunction(state.go)).toBeTruthy();
	    	  		expect(state.type==="PrimaryTimer.Start").toBeTruthy();
	      		});
	      		it("creates a valid state instance by type", function() {
	      			var type = "PrimaryTimer.Stop";
	      			var state = this.stateFactory.create(type);
	      			expect(_.isObject(state)).toBeTruthy();
	      			expect(state.type===type).toBeTruthy();
	      		});

    		});// create


	  });// StateFactory

});