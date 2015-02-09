/*global describe, it */
define(
	[
		"states/state-prototype",
		"states/state"
	],
	function (StatePrototype, State) {
		"use strict";

  		describe('StatePrototype', function () {

  			beforeEach(function() {
  				this.statePrototype = StatePrototype;
  			});

			it('is an object', function () {
        		expect(_.isObject(this.statePrototype));
	      	});

	    	describe('function', function () {

    	  		it('has an "create" function', function () {
	    	  		 expect(_.isFunction(this.statePrototype.create)).toBeTruthy();
	      		});

	      		it('creates a State with no parameters', function () {
	      			var state = this.statePrototype.create();
	    	  		expect(_.isObject(state)).toBeTruthy();
	    	  		expect(_.isUndefined(state.type)).toBeTruthy();
	      		});

	      		it('creates a State with specific parameters', function () {
	      			var result = "This is go function";
	      			var type = "PrimaryTimer.Stop";
	      			var goFunction = function() { return result };
	      			var proto = new State(type, goFunction)
	      			var newState = this.statePrototype.create(proto);
	    	  		expect(_.isObject(newState)).toBeTruthy();
	    	  		expect(_.isEqual(newState.type, type)).toBeTruthy();
	    	  		expect( _.isEqual(newState.getName(), "Stop primary timer") );
	    	  		var goResult = newState.go();
	    	  		expect( _.isEqual(goResult, result) ).toBeTruthy();

	      		});

    		});

	  });// StatePrototype

});